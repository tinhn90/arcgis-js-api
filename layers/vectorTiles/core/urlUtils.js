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

define(["require","exports","esri/urlUtils","dojo/_base/url"],function(e,r,t,n){function a(e){return t.normalize(e)}function i(e){return t.canUseXhr(e)}function l(e){return e.replace(/\/+$/,"")}function o(e){return"data:"===e.slice(0,5)}function u(e){return I.test(e)}function s(e){return c(e)||f(e)}function c(e){return e&&"/"===e[0]&&"/"===e[1]}function f(e){return T.test(e)}function p(e){return t.urlToObject(e)}function v(e){return"string"==typeof e?new n(d(e)):(e.scheme||(e.scheme=r.appUrl.scheme),e)}function h(e){if(o(e))return null;var r=e.indexOf("://");if(-1===r&&c(e))r=2;else{if(-1===r)return null;r+=3}var t=e.indexOf("/",r);return-1===t?e:e.slice(0,t)}function d(e,t,n){return void 0===t&&(t=r.appBaseUrl),c(e)?n&&n.preserveProtocolRelative?e:"http"===r.appUrl.scheme&&r.appUrl.authority===h(e).slice(2)?"http:"+e:"https:"+e:f(e)?e:g("/"===e[0]?m(t):t,e)}function m(e){var r=e.indexOf("//"),t=e.indexOf("/",r+2);return-1===t?e:e.slice(0,t)}function U(e,r,t){void 0===t&&(t=!1);var n=v(e),a=v(r);return!(!t&&n.scheme!==a.scheme)&&(n.host.toLowerCase()===a.host.toLowerCase()&&n.port===a.port)}function g(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];if(e&&e.length){var t=[];if(s(e[0])){var n=e[0],a=n.indexOf("//");t.push(n.slice(0,a+1)),u(e[0])&&(t[0]+="/"),e[0]=n.slice(a+2)}else"/"===e[0][0]&&t.push("");for(var i=e.reduce(function(e,r){return r?e.concat(r.split("/")):e},[]),l=0;l<i.length;l++){var o=i[l];".."===o&&t.length>0?t.pop():!o||"."===o&&0!==t.length||t.push(o)}return t.join("/")}}function O(e){var r=0;if(s(e)){var t=e.indexOf("//");-1!==t&&(r=t+2)}var n=e.lastIndexOf("/");return n<r?e:e.slice(0,n+1)}function y(e){return t.addProxy(e)}function x(e){return e.isBase64?"data:"+e.mediaType+";base64,"+e.data:"data:"+e.mediaType+","+e.data}function b(e){var r=e.match(z);return r?{mediaType:r[1],isBase64:!!r[2],data:r[3]}:null}function w(e,r,t){if(!(r&&t&&e&&s(e)))return e;var n=e.indexOf("//"),a=e.indexOf("/",n+2),i=e.indexOf(":",n+2),l=Math.min(a<0?e.length:a,i<0?e.length:i);return e.slice(n+2,l).toLowerCase()!==r.toLowerCase()?e:""+e.slice(0,n+2)+t+e.slice(l)}function P(e,t){if(!t||t.isPortal||!t.urlKey||!t.customBaseUrl)return e;var n=t.urlKey+"."+t.customBaseUrl;return U(r.appUrl,r.appUrl.scheme+"://"+n)?w(e,t.portalHostname,n):w(e,n,t.portalHostname)}function R(e,r){var t=r&&r.url&&r.url.path;return e&&t&&(e=d(e,t,{preserveProtocolRelative:!0})),P(e,r&&r.portal)}function B(e,r){if(!e)return e;!s(e)&&r&&r.blockedRelativeUrls&&r.blockedRelativeUrls.push(e);var t=d(e);if(r){var n=r.verifyItemRelativeUrls&&r.verifyItemRelativeUrls.rootPath||r.url&&r.url.path;n&&(t=C(t,n,n))!==e&&r.verifyItemRelativeUrls&&r.verifyItemRelativeUrls.writtenUrls.push(t)}return t=j(t,r&&r.portal)}function C(e,t,n){if(void 0===t&&(t=r.appBaseUrl),!s(e))return e;var i=a(e),l=i.toLowerCase(),o=a(t).toLowerCase().replace(/\/+$/,""),u=n?a(n).toLowerCase().replace(/\/+$/,""):null;if(u&&0!==o.indexOf(u))return e;for(var c=function(e,r,t){return t=e.indexOf(r,t),-1===t?e.length:t},f=c(l,"/",l.indexOf("//")+2),p=-1;l.slice(0,f+1)===o.slice(0,f)+"/"&&(p=f+1,f!==l.length);)f=c(l,"/",f+1);if(-1===p)return e;if(u&&p<u.length)return e;e=i.slice(p);var v=o.slice(p-1).replace(/[^\/]+/g,"").length;if(v>0)for(var h=0;h<v;h++)e="../"+e;else e="./"+e;return e}function j(e,r){return r&&!r.isPortal&&r.urlKey&&r.customBaseUrl?w(e,r.urlKey+"."+r.customBaseUrl,r.portalHostname):e}function L(e){var r=p(e);Object.keys(r.query||{});return r.path}Object.defineProperty(r,"__esModule",{value:!0}),r.normalize=a,r.canUseXhr=i,r.removeTrailingSlash=l;var k=Function("return this")();r.appUrl=new n(k.location),r.appBaseUrl=function(){var e=r.appUrl.path,t=e.substring(0,e.lastIndexOf(e.split("/")[e.split("/").length-1]));return r.appUrl.scheme+"://"+r.appUrl.host+(null!=r.appUrl.port?":"+r.appUrl.port:"")+t}();var I=/^\s*file:/i,T=/^\s*[a-z][a-z0-9-+.]*:[^0-9]/i;r.isDataProtocol=o,r.isAbsolute=s,r.isProtocolRelative=c,r.urlToObject=p,r.getOrigin=h,r.makeAbsolute=d,r.hasSameOrigin=U,r.join=g,r.removeFile=O,r.addProxy=y,r.makeData=x;var z=/^data:(.*?)(;base64)?,(.*)$/;r.dataComponents=b,r.changeDomain=w,r.read=R,r.write=B,r.makeRelative=C,r.removeQueryParameters=L});