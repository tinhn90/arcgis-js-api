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

define(["require","exports","../../../../config","../../../../core/Error","../../../../core/Logger","../../../../core/promiseUtils","./CIMSymbolHelper","./fontUtils","./GlyphMosaic","./GlyphSource","./SDFHelper","./SpriteMosaic","./Utils","../../../3d/support/imageUtils"],function(e,t,r,i,s,a,n,o,l,p,u,c,h,y){function m(e){if(e.type){switch(h.normalizeSymbolType(e.type)){case"simple-marker":return"simple-marker"+e.style;case"simple-line":return"simple-line"+e.style}if(h.isPictureSymbol(e))return e.url?e.url:e.imageData+""+e.width+e.height}return JSON.stringify(e)}var f=s.getLogger("esri.views.2d.engine.webgl.TextureManager");return function(){function e(){this._invalidFontsMap=new Map,this._spriteMosaic=new c(1024,1024,250),this._glyphSource=new p(r.fontsUrl+"/{fontstack}/{range}.pbf"),this._glyphMosaic=new l(1024,1024,this._glyphSource)}return Object.defineProperty(e.prototype,"sprites",{get:function(){return this._spriteMosaic},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"glyphs",{get:function(){return this._glyphMosaic},enumerable:!0,configurable:!0}),e.prototype.dispose=function(){this._spriteMosaic.dispose(),this._glyphMosaic.dispose(),this._rasterizationCanvas=null},e.prototype.rasterizeItem=function(e,t){return void 0===t&&(t=null),e?e.type&&-1!==e.type.toLowerCase().indexOf("3d")?(f.error(new i("mapview-invalid-type","Mapviewer does not support 3d symbol type: "+e.type,e)),a.resolve({glyphMosaicItems:[],spriteMosaicItem:null})):!e.type||"text"!==e.type&&"esriTS"!==e.type?this._rasterizeSpriteSymbol(e).then(function(e){return{spriteMosaicItem:e}}):this._rasterizeTextSymbol(e,t).then(function(e){return{glyphMosaicItems:e}}):(f.error(new i("mapview-null-resource","Unable to rasterize null resource")),a.resolve(null))},e.prototype.bindSpritePage=function(e,t,r,i){i||(i=9729),this._spriteMosaic.bind(e,i,t,r)},e.prototype.bindGlyphsPage=function(e,t,r){this._glyphMosaic.bind(e,9729,t,r)},e.prototype._rasterizeTextSymbol=function(e,t){var r=this,s=o.getFullyQualifiedFontName(e.font),a=this._invalidFontsMap.has(s);return this._glyphMosaic.getGlyphItems(a?"arial-unicode-ms-regular":s,t).catch(function(e){return f.error(new i("mapview-invalid-resource","Couldn't find font "+s+". Falling back to Arial Unicode MS Regular")),r._invalidFontsMap.set(s,!0),r._glyphMosaic.getGlyphItems("arial-unicode-ms-regular",t)})},e.prototype._rasterizeSpriteSymbol=function(e){var t=this;if(e&&(h.isFillSymbol(e)||h.isLineSymbol(e))&&"style"in e&&("solid"===e.style||"esriSFSSolid"===e.style||"esriSLSSolid"===e.style||"none"===e.style||"esriSFSNull"===e.style||"esriSLSNull"===e.style))return a.resolve(null);var r=m(e);if(this._spriteMosaic.has(r))return a.resolve(this._spriteMosaic.getSpriteItem(r));if(e.url||e.imageData){var i=e.imageData?"data:"+e.contentType+";base64,"+e.imageData:e.url;return y.requestImage(i).then(function(i){var s=t._rasterizeResource(i);return t._addItemToMosaic(r,s.size,s.anchor,s.image,!h.isMarkerSymbol(e),s.sdf)})}var s=this._rasterizeResource(e);return a.resolve(this._addItemToMosaic(r,s.size,s.anchor,s.image,!h.isMarkerSymbol(e),s.sdf))},e.prototype._rasterizeResource=function(e){if(e instanceof HTMLImageElement){this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas"));var t=e;this._rasterizationCanvas.width=t.width,this._rasterizationCanvas.height=t.height;var r=this._rasterizationCanvas.getContext("2d");r.drawImage(t,0,0,t.width,t.height);for(var i=r.getImageData(0,0,t.width,t.height),s=new Uint8Array(i.data),a=void 0,n=0;n<s.length;n+=4)a=s[n+3]/255,s[n]=s[n]*a,s[n+1]=s[n+1]*a,s[n+2]=s[n+2]*a;return{size:[t.width,t.height],anchor:[0,0],image:new Uint32Array(s.buffer),sdf:!1}}return this._rasterizeJSON(e)},e.prototype._addItemToMosaic=function(e,t,r,i,s,a){return this._spriteMosaic.addSpriteItem(e,t,r,i,s,a)},e.prototype._rasterizeJSON=function(e){if(this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),"simple-fill"===e.type||"esriSFS"===e.type){var t=n.SymbolHelper.rasterizeSimpleFill(this._rasterizationCanvas,e.style),r=t[0],i=t[1],s=t[2];return{size:[i,s],anchor:[0,0],image:new Uint32Array(r.buffer),sdf:!1}}if("simple-line"===e.type||"esriSLS"===e.type){var a=n.SymbolHelper.rasterizeSimpleLine(this._rasterizationCanvas,e.style),r=a[0],i=a[1],s=a[2];return{size:[i,s],anchor:[0,0],image:new Uint32Array(r.buffer),sdf:!0}}var o,l;if("simple-marker"===e.type||"esriSMS"===e.type?(o=n.CIMSymbolHelper.fromSimpleMarker(e),l=!0):(o=e,l=u.SDFHelper.checkSDF(o)),l){var p=new u.SDFHelper,c=p.buildSDF(o),r=c[0];return{size:[c[1],c[2]],anchor:[0,0],image:new Uint32Array(r.buffer),sdf:!0}}var h=n.CIMSymbolHelper.rasterize(this._rasterizationCanvas,o),r=h[0],i=h[1],s=h[2];return{size:[i,s],anchor:[h[3],h[4]],image:new Uint32Array(r.buffer),sdf:!1}},e}()});