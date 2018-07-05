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

define(["dojo/_base/declare","dojo/_base/connect","dojo/_base/lang","dojo/_base/array","dojo/dom-construct","dojo/dom-style","../kernel","../config","../sniff","../domUtils","../geometry/Point","../geometry/webMercatorUtils","./layer"],function(t,e,s,i,a,n,o,_,r,h,c,d,l){var p=t([l],{declaredClass:"esri.layers.MapImageLayer","-chains-":{constructor:"manual"},constructor:function(t){this.inherited(arguments,[null,t]),this._mapImages=[];var i=s.hitch;this._panStart=i(this,this._panStart),this._pan=i(this,this._pan),this._extentChange=i(this,this._extentChange),this._zoom=i(this,this._zoom),this._zoomStart=i(this,this._zoomStart),this._scale=i(this,this._scale),this._resize=i(this,this._resize),e.connect(this,"onSuspend",this,this._onSuspend),e.connect(this,"onResume",this,this._onResume),this.loaded=!0,this.onLoad(this)},opacity:1,addImage:function(t){var e=this._mapImages.push(t);e-=1,t._idx=e,t._layer=this,this._div&&this._createImage(t,e)},removeImage:function(t){if(t){var e=t._idx,s=this._mapImages;if(s[e]===t){delete s[e];var i=t._node;i&&(this._clearEvents(i),i.e_idx=i.e_bl=i.e_tr=i.e_l=i.e_t=i.e_w=i.e_h=null,i.parentNode&&(i.parentNode.removeChild(i),a.destroy(i))),t._node=t._idx=t._layer=null}}},removeAllImages:function(){var t,e=this._mapImages,s=e.length;for(t=0;t<s;t++){var i=e[t];i&&this.removeImage(i)}this._mapImages=[]},getImages:function(){var t,e=this._mapImages,s=[],i=e.length;for(t=0;t<i;t++)e[t]&&s.push(e[t]);return s},setOpacity:function(t){this.opacity!=t&&(this._opacityChanged(this.opacity=t),this.onOpacityChange())},onOpacityChange:function(){},_opacityChanged:function(t){var e,s,i,a=this._div;if(a)if(!r("ie")||r("ie")>8)n.set(a,"opacity",t);else for(i=a.childNodes,s=i.length,e=0;e<s;e++)n.set(i[e],"opacity",t)},_createImage:function(t,s){var i=a.create("img");n.set(i,{position:"absolute"}),t.opacity<1?n.set(i,"opacity",t.opacity):r("ie")<=8&&n.set(i,"opacity",this.opacity),t.rotation&&(r("ie")<9||n.set(i,o._css.names.transform,o._css.rotate(360-t.rotation))),t._node=i,i.e_idx=s,i.e_layer=this,i.e_load=e.connect(i,"onload",p.prototype._imageLoaded),i.e_error=e.connect(i,"onerror",p.prototype._imageError),i.e_abort=e.connect(i,"onabort",p.prototype._imageError),i.src=t.href},_imageLoaded:function(t,e){var s=e||t.target||t.currentTarget,i=s.e_layer,a=i._mapImages[s.e_idx],n=i._map;if(n&&(n.__zooming||n.__panning||!i._sr))return void i._standby.push(s);i._clearEvents(s),a&&a._node===s&&n&&i._attach(a)},_imageError:function(t){var e=t.target||t.currentTarget,s=e.e_layer,i=s._mapImages[e.e_idx];s._clearEvents(e),i&&(i._node=null)},_clearEvents:function(t){var s=e.disconnect;s(t.e_load),s(t.e_error),s(t.e_abort),t.e_load=t.e_error=t.e_abort=t.e_layer=null},_attach:function(t){var e=t.extent,s=e.spatialReference,i=this._sr,a=this._div,n=t._node,o=new c({x:e.xmin,y:e.ymin,spatialReference:s}),_=new c({x:e.xmax,y:e.ymax,spatialReference:s});i.equals(s)||(i.isWebMercator()&&4326===s.wkid?(o=d.geographicToWebMercator(o),_=d.geographicToWebMercator(_)):s.isWebMercator()&&4326===i.wkid&&(o=d.webMercatorToGeographic(o),_=d.webMercatorToGeographic(_))),n.e_bl=o,n.e_tr=_,t.visible&&(this._setPos(n,a._left,a._top),(this._active||a).appendChild(n))},_setPos:function(t,e,s){var i=t.e_bl,a=t.e_tr,_=this._map;i=_.toScreen(i),a=_.toScreen(a);var r=i.x-e,h=a.y-s,c=Math.abs(a.x-i.x),d=Math.abs(i.y-a.y),l={width:c+"px",height:d+"px"},p=this._mapImages[t.e_idx];"css-transforms"===_.navigationMode?l[o._css.names.transform]=o._css.translate(r,h)+(p.rotation?" "+o._css.rotate(360-p.rotation):""):(l.left=r+"px",l.top=h+"px"),n.set(t,l),t.e_l=r,t.e_t=h,t.e_w=c,t.e_h=d},managedSuspension:!0,_setMap:function(t,e){this.inherited(arguments);var s=this._div=a.create("div",null,e),i=o._css.names,_={position:"absolute"},c=t.__visibleDelta;(!r("ie")||r("ie")>8)&&(_.opacity=this.opacity),"css-transforms"===t.navigationMode?(_[i.transform]=o._css.translate(c.x,c.y),n.set(s,_),s._left=c.x,s._top=c.y,_={position:"absolute",width:t.width+"px",height:t.height+"px",overflow:"visible"},this._active=a.create("div",null,s),n.set(this._active,_),this._passive=a.create("div",null,s),n.set(this._passive,_)):(s._left=0,s._top=0,n.set(s,_)),this._standby=[];var d,l=this._mapImages,p=l.length;for(d=0;d<p;d++){var m=l[d];m._node||this._createImage(m,m._idx)}return h.hide(s),s},_unsetMap:function(t,e){this._disconnect();var s=this._div;if(s){var i,n=this._mapImages,o=n.length;for(i=0;i<o;i++){var _=n[i];if(_){var r=_._node;r&&(this._clearEvents(r),r.e_idx=r.e_bl=r.e_tr=r.e_l=r.e_t=r.e_w=r.e_h=null),_._node=null}}e.removeChild(s),a.destroy(s)}this._map=this._div=this._sr=this._active=this._passive=this._standby=null,this.inherited(arguments)},_onSuspend:function(){this._disconnect(),h.hide(this._div)},_onResume:function(t){t.firstOccurrence&&(this._sr=this._map.spatialReference,this._processStandbyList());var e=this._map,s=this._div,i=e.__visibleDelta;"css-transforms"===e.navigationMode&&(s._left=i.x,s._top=i.y,n.set(s,o._css.names.transform,o._css.translate(s._left,s._top))),this._redraw("css-transforms"===e.navigationMode),this._connect(e),h.show(s)},_connect:function(t){if(!this._connections){var s=e.connect,i="css-transforms"===t.navigationMode;this._connections=[s(t,"onPanStart",this._panStart),s(t,"onPan",this._pan),s(t,"onExtentChange",this._extentChange),i&&s(t,"onZoomStart",this._zoomStart),i?s(t,"onScale",this._scale):s(t,"onZoom",this._zoom),i&&s(t,"onResize",this._resize)]}},_disconnect:function(){this._connections&&(i.forEach(this._connections,e.disconnect),this._connections=null)},_panStart:function(){this._panL=this._div._left,this._panT=this._div._top},_pan:function(t,e){var s=this._div;s._left=this._panL+e.x,s._top=this._panT+e.y,"css-transforms"===this._map.navigationMode?n.set(s,o._css.names.transform,o._css.translate(s._left,s._top)):n.set(s,{left:s._left+"px",top:s._top+"px"})},_extentChange:function(t,e,s){s?this._redraw("css-transforms"===this._map.navigationMode):e&&this._pan(t,e),this._processStandbyList()},_processStandbyList:function(){var t,e=this._standby;if(e&&e.length)for(t=e.length-1;t>=0;t--)this._imageLoaded(null,e[t]),e.splice(t,1)},_redraw:function(t){if(t){var e=this._passive,s=o._css.names;n.set(e,s.transition,"none"),this._moveImages(e,this._active),n.set(e,s.transform,"none")}var i,a,_=this._active||this._div,r=this._div._left,h=this._div._top,c=_.childNodes.length;for(i=0;i<c;i++)a=_.childNodes[i],this._setPos(a,r,h)},_zoom:function(t,e,s){var i,a,o=this._div,_=o._left,r=o._top,h=o.childNodes.length;for(i=0;i<h;i++){a=o.childNodes[i];var c=a.e_w*e,d=a.e_h*e,l=(s.x-_-a.e_l)*(c-a.e_w)/a.e_w,p=(s.y-r-a.e_t)*(d-a.e_h)/a.e_h;l=isNaN(l)?0:l,p=isNaN(p)?0:p,n.set(a,{left:a.e_l-l+"px",top:a.e_t-p+"px",width:c+"px",height:d+"px"})}},_zoomStart:function(){this._moveImages(this._active,this._passive)},_moveImages:function(t,e){var s,i=t.childNodes,a=i.length;if(a>0)for(s=a-1;s>=0;s--)e.appendChild(i[s])},_scale:function(t,e){var s={},i=o._css.names,a=this._passive;n.set(a,i.transition,e?"none":i.transformName+" "+_.defaults.map.zoomDuration+"ms ease"),s[i.transform]=o._css.matrix(t),n.set(a,i.transform,o._css.matrix(t))},_resize:function(t,e,s){n.set(this._active,{width:e+"px",height:s+"px"}),n.set(this._passive,{width:e+"px",height:s+"px"})}});return r("extend-esri")&&s.setObject("layers.MapImageLayer",p,o),p});