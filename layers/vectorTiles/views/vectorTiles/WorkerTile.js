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

define(["require","exports","dojo/Deferred","../../core/executeAsync","../../core/ObjectPool","../../core/promiseUtils","../2d/tiling/enums","./BackgroundBucket","./CircleBucket","./FillBucket","./GeometryUtils","./IndexMemoryBuffer","./LineBucket","./Placement","./SymbolBucket","./TileParser","./VertexMemoryBuffer"],function(e,t,r,f,n,s,u,i,l,o,B,a,h,x,I,c,p){return function(){function e(){this.rotation=0,this.status=u.TileStatus.INITIALIZED,this._symbolBuckets=[],this.placementEngine=new x.PlacementEngine,this.fillVertexBuffer=new p.FillVertexBuffer(!1),this.fillDDVertexBuffer=new p.FillVertexBuffer(!0),this.fillIndexBuffer=new a.TriangleIndexBuffer,this.outlineVertexBuffer=new p.OutlineVertexBuffer(!1),this.outlineDDVertexBuffer=new p.OutlineVertexBuffer(!0),this.outlineIndexBuffer=new a.TriangleIndexBuffer,this.lineVertexBuffer=new p.LineVertexBuffer(!1),this.lineDDVertexBuffer=new p.LineVertexBuffer(!0),this.lineIndexBuffer=new a.TriangleIndexBuffer,this.iconVertexBuffer=new p.SymbolVertexBuffer(!1),this.iconDDVertexBuffer=new p.SymbolVertexBuffer(!0),this.iconIndexBuffer=new a.TriangleIndexBuffer,this.textVertexBuffer=new p.SymbolVertexBuffer(!1),this.textDDVertexBuffer=new p.SymbolVertexBuffer(!0),this.textIndexBuffer=new a.TriangleIndexBuffer,this.circleVertexBuffer=new p.CircleVertexBuffer,this.circleIndexBuffer=new a.TriangleIndexBuffer}return e.prototype.initialize=function(e,t,r,f){void 0===f&&(f=0),this.tileKey=e,this.refKey=t,this._workerTileHandler=r,this.rotation=f,this.placementEngine.setAngle(B.C_DEG_TO_RAD*f)},e.prototype.release=function(){this.tileKey=this.refKey="",this.status=u.TileStatus.INITIALIZED,this.rotation=0,this.fillVertexBuffer.reset(),this.fillDDVertexBuffer.reset(),this.fillIndexBuffer.reset(),this.outlineVertexBuffer.reset(),this.outlineDDVertexBuffer.reset(),this.outlineIndexBuffer.reset(),this.lineVertexBuffer.reset(),this.lineDDVertexBuffer.reset(),this.lineIndexBuffer.reset(),this.iconVertexBuffer.reset(),this.iconDDVertexBuffer.reset(),this.iconIndexBuffer.reset(),this.textVertexBuffer.reset(),this.textDDVertexBuffer.reset(),this.textIndexBuffer.reset(),this.circleVertexBuffer.reset(),this.circleIndexBuffer.reset(),this.placementEngine.reset(),this._symbolBuckets.length=0,this._workerTileHandler=null},e.prototype.setDataAndParse=function(e,t){var f=this,n=new r(function(e){f.status=u.TileStatus.INVALID});return this._parse(e,t).then(function(e){f.status=u.TileStatus.READY;for(var t=[1,f.fillVertexBuffer.sizeInBytes,2,f.fillDDVertexBuffer.sizeInBytes,3,f.fillIndexBuffer.sizeInBytes,4,f.outlineVertexBuffer.sizeInBytes,5,f.outlineDDVertexBuffer.sizeInBytes,6,f.outlineIndexBuffer.sizeInBytes,7,f.lineVertexBuffer.sizeInBytes,8,f.lineDDVertexBuffer.sizeInBytes,9,f.lineIndexBuffer.sizeInBytes,10,f.iconVertexBuffer.sizeInBytes,11,f.iconDDVertexBuffer.sizeInBytes,12,f.iconIndexBuffer.sizeInBytes,13,f.textVertexBuffer.sizeInBytes,14,f.textDDVertexBuffer.sizeInBytes,15,f.textIndexBuffer.sizeInBytes,16,f.circleVertexBuffer.sizeInBytes,17,f.circleIndexBuffer.sizeInBytes],r=new Uint32Array(t),s=[],B=e.length,a=0;a<B;a++){var x=e[a];if(x instanceof o)s.push(x.layerIndex),s.push(1),s.push(x.fillIndexStart),s.push(x.fillIndexCount),s.push(x.outlineIndexStart),s.push(x.outlineIndexCount);else if(x instanceof h)s.push(x.layerIndex),s.push(2),s.push(x.lineIndexStart),s.push(x.lineIndexCount);else if(x instanceof I){s.push(x.layerIndex),s.push(3),s.push(x.sdfMarker?1:0);var c=x.markerPageMap;s.push(c.size),c.forEach(function(e,t){s.push(t),s.push(e[0]),s.push(e[1])});var p=x.glyphsPageMap;s.push(p.size),p.forEach(function(e,t){s.push(t),s.push(e[0]),s.push(e[1])})}else x instanceof l?(s.push(x.layerIndex),s.push(4),s.push(x.circleIndexStart),s.push(x.circleIndexCount)):x instanceof i&&(s.push(x.layerIndex),s.push(0))}var y=new Uint32Array(s),D=f.fillVertexBuffer.toBuffer(),d=f.fillDDVertexBuffer.toBuffer(),V=f.fillIndexBuffer.toBuffer(),z=f.outlineVertexBuffer.toBuffer(),g=f.outlineDDVertexBuffer.toBuffer(),w=f.outlineIndexBuffer.toBuffer(),T=f.lineVertexBuffer.toBuffer(),b=f.lineDDVertexBuffer.toBuffer(),v=f.lineIndexBuffer.toBuffer(),m=f.iconVertexBuffer.toBuffer(),k=f.iconDDVertexBuffer.toBuffer(),S=f.iconIndexBuffer.toBuffer(),A=f.textVertexBuffer.toBuffer(),E=f.textDDVertexBuffer.toBuffer(),L=f.textIndexBuffer.toBuffer(),_=f.circleVertexBuffer.toBuffer(),M=f.circleIndexBuffer.toBuffer();n.resolve({result:{bufferDataInfo:r.buffer,bucketDataInfo:y.buffer,bufferData:[D,d,V,z,g,w,T,b,v,m,k,S,A,E,L,_,M]},transferList:[D,d,V,z,g,w,T,b,v,m,k,S,A,E,L,_,M,r.buffer,y.buffer]})}),n.promise},e.prototype.addBucket=function(e){this._symbolBuckets.push(e)},e.prototype.updateSymbols=function(e){var t=this,r=this._symbolBuckets;if(!r||0===r.length)return s.resolve();this.rotation=e;var n=this.placementEngine;n.reset(),n.setAngle(e/256*360*B.C_DEG_TO_RAD);var i=this.iconVertexBuffer;i.reset();var l=this.iconDDVertexBuffer;l.reset();var o=this.iconIndexBuffer;o.reset();var a=this.textVertexBuffer;a.reset();var h=this.textDDVertexBuffer;h.reset();var x=this.textIndexBuffer;x.reset();var I=[],c=r.length,p=0;return f(function(){if(t.status===u.TileStatus.INVALID||t.status===u.TileStatus.INITIALIZED)return!0;if(p<c){var e=r[p++],f=e.layer,s=e.copy(f.hasDataDrivenIcon?l:i,o,f.hasDataDrivenText?h:a,x,n);s&&(I.push(s),s.updateSymbols())}return p>=c}).then(function(){if(t.status===u.TileStatus.INVALID||t.status===u.TileStatus.INITIALIZED||0===i.sizeInBytes&&0===l.sizeInBytes&&0===o.sizeInBytes&&0===a.sizeInBytes&&0===h.sizeInBytes&&0===x.sizeInBytes)return{result:null,transferList:null};var e=[10,i.sizeInBytes,11,l.sizeInBytes,12,o.sizeInBytes,13,a.sizeInBytes,14,h.sizeInBytes,15,x.sizeInBytes],r=new Uint32Array(e),f=[];c=I.length;for(var n=0;n<c;n++){var s=I[n];f.push(s.layerIndex),f.push(3),f.push(s.sdfMarker?1:0);var B=s.markerPageMap;f.push(B.size),B.forEach(function(e,t){f.push(t),f.push(e[0]),f.push(e[1])});var p=s.glyphsPageMap;f.push(p.size),p.forEach(function(e,t){f.push(t),f.push(e[0]),f.push(e[1])})}var y=new Uint32Array(f),D=i.toBuffer(),d=l.toBuffer(),V=o.toBuffer(),z=a.toBuffer(),g=h.toBuffer(),w=x.toBuffer();return{result:{bufferDataInfo:r.buffer,bucketDataInfo:y.buffer,bufferData:[D,d,V,z,g,w]},transferList:[D,d,V,z,g,w,r.buffer,y.buffer]}}).catch(function(){return null})},e.prototype.setObsolete=function(){this.status=u.TileStatus.INVALID},e.prototype.getLayers=function(){return this._workerTileHandler.getLayers()},e.prototype.getWorkerTileHandler=function(){return this._workerTileHandler},e.prototype._parse=function(e,t){return e&&0!==e.byteLength?(this.status=u.TileStatus.MODIFIED,new c(e,this,t).parse()):s.resolve([])},e.pool=new n(e),e}()});