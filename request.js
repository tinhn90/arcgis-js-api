// COPYRIGHT © 201 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["require","dojo/_base/array","dojo/_base/config","dojo/_base/Deferred","dojo/_base/lang","dojo/_base/url","dojo/_base/xhr","./core/request/script","dojo/request/iframe","dojo/dom-construct","dojo/io-query","./kernel","./config","./sniff","./lang","./urlUtils","./deferredUtils"],function(e,r,n,t,o,i,s,a,l,d,u,c,f,p,g,h,m){function w(e){return e=new i(e),(e.host+(e.port?":"+e.port:"")).toLowerCase()}function v(e){return this._xhr?this._xhr.getResponseHeader(e):null}function k(e,r){var n=u.objectToQuery(e.content);if(n&&(e.url+=(-1===e.url.indexOf("?")?"?":"&")+n),e.url.length>2e3){var i;if("data:"!==e.url.toLowerCase().slice(0,5))return i=new t,i.reject(o.mixin(new Error,{message:"When using responseType 'image', URL length cannot exceed 2000 characters."})),i;if(e.url.length>3e6)return i=new t,i.reject(o.mixin(new Error,{message:"When using responseType 'image', data URL length cannot exceed 3000000 characters."})),i}var s=new Image;r.allowImageDataAccess&&(e.withCredentials?s.crossOrigin="use-credentials":s.crossOrigin="anonymous");var a=!1,l=new t(function(e){a=!0,s.onload=s.onerror=s.onabort=null,s.src=""}),d=function(e){s.onload=s.onerror=s.onabort=null,a||l.reject(new Error("Unable to load the resource"))};return s.onload=function(){s.onload=s.onerror=s.onabort=null,a||l.resolve(this)},s.onerror=d,s.onabort=d,s.alt="",s.src=e.url,l}function _(e,i,f,m){var w,v,_=!1,b=!1;g.isDefined(i)&&(o.isObject(i)?(_=!!i.useProxy,b=!!i.usePost,w=i.crossOrigin):_=!!i),e=o.mixin({},e),e._ssl&&(e.url=e.url.replace(/^http:/i,"https:")),p("ie")<10&&!q.test(e.url)&&(e.url=encodeURI(e.url));var C=e.content,x=e.url,D=f&&e.form,O=A;w=g.isDefined(w)?w:O.useCors,e.load=function(r){var t;return r&&(r.error?(t=o.mixin(new Error,r.error),t.log=!!n.isDebug):"error"===r.status&&(t=o.mixin(new Error,r),t.log=!!n.isDebug),t&&(e.failOk=!t.log,g.isDefined(t.httpCode)||(t.httpCode=t.code))),t||r},e.error=function(r,t){return t&&t.xhr&&t.xhr.abort(),r instanceof Error||(r=o.mixin(new Error,r)),r.log=!!n.isDebug,e.failOk=!r.log,O.errorHandler(r,t),r},e._token&&(e.content=e.content||{},e.content.token=e._token);var j,E=0;C&&x&&(j=u.objectToQuery(C),E=j.length+x.length+1,p("esri-url-encodes-apostrophe")&&(E=j.replace(/'/g,"%27").length+x.length+1)),e.timeout=g.isDefined(e.timeout)?e.timeout:O.timeout,e.handleAs=e.handleAs||"json";try{var L,S,U=w&&h.canUseXhr(e.url)&&!/https?:\/\/[^\/]+\/[^\/]+\/admin\/?(\/.*)?$/i.test(e.url),P=h.hasSameOrigin(e.url,window.location.href)||U,T=!!(b||f||E>O.postLength),F=!(P||-1===e.handleAs.indexOf("json")||!e.callbackParamName||f),I=!(!(h.getProxyRule(e.url)||O.alwaysUseProxy||_)&&("image"===e.handleAs&&!i.allowImageDataAccess||F&&!T||P));if(f&&!p("esri-file-upload")&&!I&&U&&(I=!0),I)if(L=h.getProxyUrl(x,w),S=L.path,L._xo&&(U=!0),!T&&S.length+1+E>O.postLength&&(T=!0),e.url=S+"?"+x,T)e.content=o.mixin(L.query||{},C);else{var W=u.objectToQuery(o.mixin(L.query||{},C));W&&(e.url+="?"+W),e.content=null}if(!F||T||I){var X=e.headers;if(!U||X&&X.hasOwnProperty("X-Requested-With")||(X=e.headers=X||{},X["X-Requested-With"]=null),f){var N,B,H,Q,M,$=e.callbackParamName||"callback.html",z=e.callbackElementName||"textarea",J=D.elements?D.elements.length:0;if(C=e.content){C.token&&x.toLowerCase().indexOf("/sharing/servers/")>-1&&(x+=(-1===x.indexOf("?")?"?":"&")+"token="+C.token,e.url=I?S+"?"+x:x,delete C.token);for(N in C)if(H=C[N],g.isDefined(H)){for(B=null,Q=0;Q<J;Q++)if(M=D.elements[Q],M.name===N){B=M;break}B?B.value=H:m?D.append(N,H):D.appendChild(d.create("input",{type:"hidden",name:N,value:H}))}}if(p("esri-file-upload")){r.forEach(D.elements,function(e){e.name===$&&D.removeChild(e)});var G=m?D:new FormData(D);if(p("safari")>11&&"entries"in G&&"delete"in G){for(var K=[],V=G.entries(),Y=V.next();!Y.done;){var Z=Y.value;Z[1]instanceof File&&""===Z[1].name&&K.push(Z[0]),Y=V.next()}K.forEach(function(e){G.delete(e)})}e.contentType=!1,e.postData=G,delete e.form}else D.enctype="multipart/form-data",p("ie")<9&&(D.encoding="multipart/form-data"),D.method="post",r.some(D.elements,function(e){return e.name===$})||D.appendChild(d.create("input",{type:"hidden",name:$,value:z})),-1===x.toLowerCase().indexOf("addattachment")&&-1===x.toLowerCase().indexOf("updateattachment")||(x+=(-1===x.indexOf("?")?"?":"&")+$+"="+z,e.url=I?S+"?"+x:x),delete e.content}if(U&&!e.hasOwnProperty("withCredentials")&&"with-credentials"===A.useCors){var ee=I?S:x,re=h.canUseXhr(ee,!0),ne=re>-1?A.corsEnabledServers[re]:null;if(ne&&ne.hasOwnProperty("withCredentials"))ne.withCredentials&&(e.withCredentials=!0);else if(c.id){var te=c.id.findServerInfo(ee);te&&te.webTierAuth&&(e.withCredentials=!0)}}if(e=y?y(e):e,"image"===e.handleAs)return k(e,i);if(T){if(f&&!p("esri-file-upload")){v=new t(function(){oe.cancel()});var oe=l.post(e.url,e).then(function(e){v.resolve(e)}).otherwise(function(e){v.reject(e)});return v.addCallback(function(r){return e.load(r)}),v.addErrback(function(r){return e.error(r)}),v}return!I&&p("safari")&&(e.url+=(-1===e.url.indexOf("?")?"?":"&")+"_ts="+(new Date).getTime()+R++),s.post(e)}return s.get(e)}e=y?y(e):e,e.jsonp=e.callbackParamName,e.query=e.content,v=new t(function(){ie.cancel()});var ie=a.get(e.url,e).then(function(e){v.resolve(e)}).otherwise(function(e){v.reject(e)});return v.addCallback(function(r){return e.load(r)}),v.addErrback(function(r){return e.error(r)}),v}catch(r){return v=new t,v.errback(e.error(r)),v}}function b(e){var r=A.corsStatus,o=h.canUseXhr(e,!0);o>-1&&A.corsEnabledServers.splice(o,1);var i=new t;return i.reject({log:!!n.isDebug}),r[w(e)]=i.promise,o}function C(e){var r=A.corsStatus;try{var n=w(e);if(A.corsDetection&&A.useCors&&p("esri-cors")&&e&&-1!==e.toLowerCase().indexOf("/rest/services")&&!h.hasSameOrigin(e,window.location.href)&&!h.canUseXhr(e)){if(r[n]&&!r[n].isCanceled())return r[n];var o=new t(m._dfdCanceller);r[n]=o.promise;var i=s.get({url:e.substring(0,e.toLowerCase().indexOf("/rest/")+"/rest/".length)+"info",content:{f:"json"},failOk:!0,handleAs:"json",headers:{"X-Requested-With":null},timeout:1e3*A.corsDetectionTimeout});return o._pendingDfd=i,i.then(function(r){r?(h.canUseXhr(e)||A.corsEnabledServers.push(n),o.resolve()):o.reject()},function(e){o.reject(e)}),o.promise}}catch(e){console.log("esri._detectCors: an unknown error occurred while detecting CORS support")}return L}function x(e){y=e}function D(i,a,l,d){function u(e){if(e._pendingDfd=_(l,d,y,O),!e._pendingDfd){e.ioArgs=e._pendingDfd&&e._pendingDfd.ioArgs;var i=new Error("Deferred object is missing");return i.log=!!n.isDebug,e.errback(i),e._pendingDfd=null,e}e._pendingDfd.addCallback(function(r){if(!r)return r;var i=e._pendingDfd&&e._pendingDfd.ioArgs&&e._pendingDfd.ioArgs.xhr;if(!i)return r;var s=i.getResponseHeader("Content-Type");if(s&&(s=s.toLowerCase(),-1===s.indexOf("text/plain")&&-1===s.indexOf("application/json")))return r;var a;if(r instanceof ArrayBuffer&&r.byteLength<=750)a=new Blob([r]);else{if(!(r instanceof Blob&&r.size<=750))return r;a=r}var l=new t,d=new FileReader;return d.readAsText(a),d.onloadend=function(){var e;if(!d.error)try{var t=JSON.parse(d.result);t.error&&(e=t.error)}catch(i){}if(e){var i=o.mixin(new Error,e);i.log=!!n.isDebug,null==i.httpCode&&(i.httpCode=i.code),l.reject(i)}else l.resolve(r)},l.promise}).addCallback(function(r){e.ioArgs=e._pendingDfd&&e._pendingDfd.ioArgs,d.returnFullResponse&&(r={data:r,_xhr:e.ioArgs&&e.ioArgs.xhr,getHeader:v}),e.callback(r),e._pendingDfd=null}).addErrback(function(n){var t,o,i;if(n&&(t=n.code,o=n.subcode,i=n.messageCode,i=i&&i.toUpperCase()),n&&403==t&&(4==o||n.message&&n.message.toLowerCase().indexOf("ssl")>-1&&-1===n.message.toLowerCase().indexOf("permission"))){if(!l._ssl)return l._ssl=l._sslFromServer=!0,void D(e,!0,l,d)}else if(n&&415==n.status){if(b(l.url),!l._err415)return l._err415=1,void D(e,!0,l,d)}else if(c.id&&-1!==r.indexOf(c.id._errorCodes,t)&&!c.id._isPublic(l.url)&&!m&&(403!=t||-1===r.indexOf(E,i)&&(!g.isDefined(o)||2==o&&l._token)))return e._pendingDfd=c.id.getCredential(l.url,{token:l._token,error:n}),void e._pendingDfd.addCallback(function(r){l._token=r.token,l._credential=r,l._ssl=l._sslFromServer||r.ssl,D(e,!0,l,d)}).addErrback(function(r){e.errback(r),e._pendingDfd=null});e.ioArgs=e._pendingDfd&&e._pendingDfd.ioArgs,e.isFulfilled()||e.errback(n),e._pendingDfd=null})}var f=l.form,m=d.disableIdentityLookup,k=d._preLookup,C=!1;if(p("esri-workers")&&!1!==A.useWorkers)if(!0===d.useWorkers||!0===A.useWorkers)C=!0;else if(d.workerOptions){var x=d.workerOptions;(x.callback||x.worker&&x.worker.worker instanceof Worker)&&(C=!0)}var O=f&&p("esri-file-upload")&&f instanceof FormData,y=f&&(f.elements?r.some(f.elements,function(e){return"file"===e.type}):O),R=-1!==l.url.toLowerCase().indexOf("token=")||l.content&&l.content.token||y&&r.some(f.elements,function(e){return"token"===e.name})?1:0;if(!a){i.addCallback(function(e){if((/\/sharing\/rest\/accounts\/self/i.test(l.url)||/\/sharing\/rest\/portals\/self/i.test(l.url))&&!R&&!l._token&&e.user&&e.user.username){A.webTierAuthServers.push(w(l.url));var r=A.corsEnabledServers,n=h.canUseXhr(l.url,!0),t={host:w(l.url),withCredentials:!0};if(-1===n)r.push(t);else{var o=r[n];o instanceof RegExp?(t.host=o,r.splice(n,1,t)):"object"==typeof o?o.withCredentials=!0:r.splice(n,1,t)}}var i=l._credential;if(i){var s,a=c.id.findServerInfo(i.server),d=a&&a.owningSystemUrl;d&&(d=d.replace(/\/?$/,"/sharing"),(s=c.id.findCredential(d,i.userId))&&-1===c.id._getIdenticalSvcIdx(d,s)&&s.resources.splice(0,0,d))}}),i.addBoth(function(e){delete l._credential,!e||p("ie")&&e.nodeType||(e._ssl=l._ssl)});var q=l.load,L=l.error;q&&i.addCallback(function(e){var r=i._pendingDfd,n=r&&r.ioArgs,t=n&&n.args;return q.call(t,e,n)}),L&&i.addErrback(function(e){var r=i._pendingDfd,n=r&&r.ioArgs,t=n&&n.args;return L.call(t,e,n)})}if(c.id&&!R&&!l._token&&!c.id._isPublic(l.url)&&(!m||k)){var S=c.id.findCredential(l.url);S&&(l._token=S.token,l._ssl=S.ssl)}return C?d.workerOptions&&d.workerOptions.worker?(j||(j=s),s=d.workerOptions.worker,u(i)):e(["./workers/RequestClient"],function(e){if(j||(j=s),d.workerOptions){var r=d.workerOptions;s=e.getClient(r.callback,r.cbFunction)}else s=e.getClient();u(i)}):(j&&(s=j,j=null),u(i)),i}function O(e,r){e.url=h.fixUrl(e.url),r=r||{};var n=new t(m._dfdCanceller),o=C(e.url);return n._pendingDfd=o,o.always(function(t){t&&"cancel"===t.dojoType?n.reject(t):D(n,!1,e,r)}),n}var y,j=null,A=f.defaults.io,E=["COM_0056","COM_0057"],R=0,q=/%[0-9A-F]{2}/i,L=function(){var e=new t;return e.resolve(),e.promise}();return O._makeRequest=_,O._processRequest=D,O._disableCors=b,O._detectCors=C,O.setRequestPreCallback=x,p("extend-esri")&&(c.request=O,c._makeRequest=_,c._processRequest=D,c._disableCors=b,c._detectCors=C,c.setRequestPreCallback=x),O});