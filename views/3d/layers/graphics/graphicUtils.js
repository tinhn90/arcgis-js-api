// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../../geometry","../../../../core/libs/gl-matrix-2/gl-matrix","../../../../geometry/support/aaBoundingBox","../../../../geometry/support/aaBoundingRect","../../../../geometry/support/centroid","../../../../geometry/support/coordsUtils","../../../../geometry/support/webMercatorUtils","../../../../layers/graphics/dehydratedFeatures","./Graphics3DSymbol","./Graphics3DWebStyleSymbol","../../support/mathUtils"],function(e,t,r,n,i,o,a,l,u,s,c,m,f){function p(e,t){if("point"===e.type)return v(e,t,!1);if(s.isHydratedGeometry(e))switch(e.type){case"extent":return v(e.center,t,!1);case"polygon":return v(e.centroid,t,!1);case"polyline":return v(d(e),t,!0);case"mesh":return v(e.extent.center,t,!1)}else switch(e.type){case"extent":return v(h(e),t,!0);case"polygon":return v(y(e),t,!0);case"polyline":return v(d(e),t,!0)}}function d(e){var t=e.paths[0];if(!t||0===t.length)return null;var r=l.getPointOnPath(t,l.getPathLength(t)/2);return s.makeDehydratedPoint(r[0],r[1],r[2],e.spatialReference)}function h(e){var t=f.isFinite(e.zmin);return s.makeDehydratedPoint(.5*(e.xmax+e.xmin),.5*(e.ymax+e.ymin),t?.5*(e.zmax+e.zmin):void 0,e.spatialReference)}function y(e){var t=e.rings[0];if(!t||0===t.length)return null;var r=a.ringsCentroid(e.rings,e.hasZ);return s.makeDehydratedPoint(r[0],r[1],r[2],e.spatialReference)}function v(e,t,n){if(!t||!e)return e;var i=e.spatialReference;return i.isWebMercator&&t.isWGS84?(u.xyToLngLat(e.x,e.y,B),n||(e=s.clonePoint(e)),e.x=B[0],e.y=B[1],e.spatialReference=r.SpatialReference.WGS84):t.isWebMercator&&i.isWGS84&&(u.lngLatToXY(e.x,e.y,B),n||(e=s.clonePoint(e)),e.x=B[0],e.y=B[1],e.spatialReference=r.SpatialReference.WebMercator),e}function g(e,t,r){if(e){t||(t=o.create());var i=e,a=.5*i.width*(r-1),l=.5*i.height*(r-1);return i.width<1e-7*i.height?a+=l/20:i.height<1e-7*i.width&&(l+=a/20),n.vec4.set(t,i.xmin-a,i.ymin-l,i.xmax+a,i.ymax+l),t}return null}function x(e,t){for(var r=0;r<e.geometries.length;++r){var n=e.geometries[r].data,i=n.vertexAttributes.auxpos1;i&&i.data[3]!==t&&(i.data[3]=t,e.geometryVertexAttrsUpdated(r))}}function b(e,t){var r=[1,1,1,1];return null!=e&&(r[0]=e[0],r[1]=e[1],r[2]=e[2]),null!==t&&void 0!==t?r[3]=t:null!=e&&e.length>3&&(r[3]=e[3]),r}function P(e,t,r,n,i,o){void 0===o&&(o=[0,0,0,0]);for(var a=0;a<3;++a)e&&null!=e[a]?o[a]=e[a]:r&&null!=r[a]?o[a]=r[a]:o[a]=i[a];return o[3]=null!=t?t:null!=n?n:i[3],o}function S(e,t,r,i){void 0===e&&(e=G),void 0===i&&(i=1);var o=new Array(3);if(null==t||null==r)o[0]=1,o[1]=1,o[2]=1;else{for(var a=void 0,l=0,u=2;u>=0;u--){var s=e[u],c=void 0,m=null!=s,f=0===u&&!a&&!m,p=r[u];"symbolValue"===s||f?c=0!==p?t[u]/p:1:m&&"proportional"!==s&&isFinite(s)&&(c=0!==p?s/p:1),null!=c&&(o[u]=c,a=c,l=Math.max(l,Math.abs(c)))}for(var u=2;u>=0;u--)null==o[u]?o[u]=a:0===o[u]&&(o[u]=.001*l)}for(var u=2;u>=0;u--)o[u]/=i;return n.vec3f64.fromArray(o)}function R(e,t){var r=t.isPrimitive,i=t.width,o=t.depth,a=t.height,l=r?10:1;if(null==i&&null==a&&null==o)return[l*e[0],l*e[1],l*e[2]];for(var u,s=n.vec3f64.fromValues(i,o,a),c=0;c<3;c++){var m=s[c];if(null!=m){u=m/e[c];break}}for(var c=0;c<3;c++)null==s[c]&&(s[c]=e[c]*u);return s}function D(e){return null!=e.isPrimitive}function w(e){return D(e)&&(e=[e.width,e.depth,e.height]),M(e)?null:"Symbol sizes may not be negative values"}function M(e){if(Array.isArray(e)){for(var t=0,r=e;t<r.length;t++){if(!M(r[t]))return!1}return!0}return null==e||e>=0}function A(e,t,r,i){void 0===i&&(i=n.mat4f64.create());var o=e||0,a=t||0,l=r||0;return 0!==o&&n.mat4.rotateZ(i,i,-o/180*Math.PI),0!==a&&n.mat4.rotateX(i,i,a/180*Math.PI),0!==l&&n.mat4.rotateY(i,i,l/180*Math.PI),i}function W(e,t){return null!=t.minDemResolution?t.minDemResolution:i.isPoint(e)?t.minDemResolutionForPoints:.01*i.maximumDimension(e)}function z(e){return e instanceof m?e.graphics3DSymbol:e instanceof c?e:null}Object.defineProperty(t,"__esModule",{value:!0});var G=n.vec3f64.fromValues(1,1,1);t.computeCentroid=p,t.convertPointSR=v,t.enlargeExtent=g,t.updateVertexAttributeAuxpos1w=x,t.mixinColorAndOpacity=b,t.overrideColor=P,t.computeObjectScale=S,t.computeSizeWithResourceSize=R,t.validateSymbolLayerSize=w,t.computeObjectRotation=A,t.demResolutionForBoundingBox=W,t.getGraphics3DSymbol=z;var B=[0,0]});