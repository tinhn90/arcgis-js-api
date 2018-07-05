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

define(["require","exports","../../../../../../core/tsSupport/extendsHelper","../../../../../../core/Logger","../../../../../../core/screenUtils","../../color","../../definitions","../../enums","../../Geometry","../../number","../../TextShaping","../../WGLDisplayRecord","../../collisions/BoundingBox","./WGLMeshTemplate","../../util/BidiText"],function(t,e,i,r,o,h,s,n,p,a,l,u,f,x,g){Object.defineProperty(e,"__esModule",{value:!0});var y=r.getLogger("esri.views.2d.engine.webgl.WGLTextTemplate"),c=10,m=24,v=1.2*m,w=10*m,d=function(){function t(t,e,i,r,o,h,s,n,p){this.materialId=t,this.vertexOffsetUpperLeft=e,this.vertexOffsetUpperRight=i,this.vertexOffsetLowerLeft=r,this.vertexOffsetLowerRight=o,this.texFontSizeUpperLeft=h,this.texFontSizeUpperRight=s,this.texFontSizeLowerLeft=n,this.texFontSizeLowerRight=p}return t.from=function(e,i,r,o,h){var s,n,l=e.glyphMosaicItem,u=l.rect,f=l.metrics,x=Math.round(u.x/4),g=Math.round(u.y/4),y=x+Math.round(u.width/4),c=g+Math.round(u.height/4);if(e.codePoint){var m=e.x+0+f.left,v=e.y+-17-f.top;s=new p.Point(m-4,v-4),n=new p.Point(s.x+u.width,s.y+u.height)}else{var m=e.x,v=e.y;s=new p.Point(m,v),n=new p.Point(s.x+f.width,s.y+f.height)}var w=new p.Point(s.x,n.y),d=new p.Point(n.x,s.y);if(r){var _=Math.cos(r),S=Math.sin(r);s.rotate(_,S),n.rotate(_,S),w.rotate(_,S),d.rotate(_,S)}return new t(i,a.i1616to32(8*s.x,8*s.y),a.i1616to32(8*d.x,8*d.y),a.i1616to32(8*w.x,8*w.y),a.i1616to32(8*n.x,8*n.y),a.i8888to32(x,g,o,h),a.i8888to32(y,g,o,h),a.i8888to32(x,c,o,h),a.i8888to32(y,c,o,h))},t}();e.ComputedGlyph=d;var _=function(t){function e(e,i,r){var p=t.call(this)||this;p.geometryType=n.WGLGeometryType.TEXT;var a=r.haloColor;p.color=0|(r.color&&h.premultiplyAlphaRGBA(r.color)),p.textSize=o.pt2px(r.font.size);var l=r.xoffset/r.font.size,u=r.yoffset/r.font.size;return p.shapingXOffset=l*m,p.shapingYOffset=u*m,p.haloColor=0|(a&&h.premultiplyAlphaRGBA(a)),p.haloSize=c*o.pt2px(o.toPt(r.haloSize||0)),p.textPropColor=p.color||s.PICTURE_FILL_COLOR,p.textPropSize=o.pt2px(r.font.size),p.textPropAngle=r.angle*Math.PI/180,p.xOffset=o.pt2px(r.xoffset),p.yOffset=o.pt2px(r.yoffset),p.textPropHAnchor="left"===r.horizontalAlignment?0:"right"===r.horizontalAlignment?1:.5,p.textPropVAnchor="top"===r.verticalAlignment?0:"bottom"===r.verticalAlignment?1:.5,p.textPropHaloColor=p.haloColor||4294967295,p.textPropHaloSize=o.pt2px(o.toPt(r.haloSize||0)),p._materialStore=e,p.vvFlags=i,p}return i(e,t),e.fromText=function(t,i,r,o,h){var s=new e(t,i,r);return s.computeGlyphs(h,r.text,!1),s},e.prototype.writeMesh=function(t,e,i,r,o,h,s){var n=e.indexVector,p=e.get("geometry"),a=e.get("visibility"),l=this._getOffset(p);switch(i){case"esriGeometryPoint":var u=o.geometry,f=u.x,x=u.y;return void this._writeVertices(t,n,p,a,l,r,f,x,s);case"esriGeometryPolygon":if(o.centroid){var g=o.centroid,f=g.x,x=g.y;return void this._writeVertices(t,n,p,a,l,r,f,x,s)}default:y.error("Unable to handle geometryType: "+i)}},e.prototype.computeGlyphs=function(t,e,i){if(!e||!e.length)return this._computedGlyphs=[],null;for(var r=this.shapingXOffset,o=this.shapingYOffset,h=this.textPropHAnchor,s=this.textPropVAnchor,p=this._computeShaping(t,w,v,0,r,o,h,s,.5),a=g.bidiText(e),u=a[0],x=a[1],y=p.getShaping(u,x),c=new Array(y.length),_=0;_<y.length;_++){var S=this.textPropAngle,V=this.textSize,L=this.haloSize,z=y[_].glyphMosaicItem,P=this._materialStore.createGlyphMaterial(z,n.WGLGeometryType.TEXT,this.vvFlags);c[_]=d.from(y[_],P,S,V,L)}if(this._computedGlyphs=c,!i)return null;var T=l.getBox(y);return T.width*=this.textSize/m,T.height*=this.textSize/m,new f.default(T.x,T.y,T.width,T.height)},e.prototype._computeShaping=function(t,e,i,r,o,h,s,n,p){return this._shaping=new l([t],w,v,0,[o,h],s,n,.5),this._shaping},e.prototype._getOffset=function(t){var e=!!this.vvFlags,i=e?9:5;return t.length/i},e.prototype._writeVertices=function(t,e,i,r,o,h,s,n,p){var l=this._computedGlyphs,f=s,x=n,g=a.i1616to32(2*f,2*x),y=a.i1616to32(2*f+1,2*x),c=0;if(this.haloSize)for(var m=0;m<l.length;m++,c+=4){var v=l[m].materialId,w=this._materialStore.get(v),d=new u(h,this.geometryType,v);d.vertexFrom=o,d.indexFrom=e.length,this._writeVertex(d,i,r,h,y,this.haloColor,l[m],w,p),this._writeIndices(d,e,o+c),t.push(d)}for(var m=0;m<l.length;m++,c+=4){var v=l[m].materialId,w=this._materialStore.get(v),d=new u(h,this.geometryType,v);d.vertexFrom=o,d.indexFrom=e.length,this._writeVertex(d,i,r,h,g,this.color,l[m],w,p),this._writeIndices(d,e,o+c),t.push(d)}},e.prototype._writeVertex=function(t,e,i,r,o,h,s,n,p){e.push(o),e.push(r),e.push(h),e.push(s.vertexOffsetUpperLeft),e.push(s.texFontSizeUpperLeft),this._writeVV(e,p,n),e.push(o),e.push(r),e.push(h),e.push(s.vertexOffsetUpperRight),e.push(s.texFontSizeUpperRight),this._writeVV(e,p,n),e.push(o),e.push(r),e.push(h),e.push(s.vertexOffsetLowerLeft),e.push(s.texFontSizeLowerLeft),this._writeVV(e,p,n),e.push(o),e.push(r),e.push(h),e.push(s.vertexOffsetLowerRight),e.push(s.texFontSizeLowerRight),this._writeVV(e,p,n),i.push(4294967295),t.vertexCount+=4},e.prototype._writeVV=function(t,e,i){i.materialKeyInfo.hasVV()&&(t.push(e[n.VVType.SIZE]),t.push(e[n.VVType.COLOR]),t.push(e[n.VVType.OPACITY]),t.push(e[n.VVType.ROTATION]))},e.prototype._writeIndices=function(t,e,i){e.push(i+0),e.push(i+1),e.push(i+2),e.push(i+1),e.push(i+3),e.push(i+2),t.indexCount+=6},e}(x.default);e.default=_});