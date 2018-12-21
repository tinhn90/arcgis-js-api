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

define(["require","exports","../../../../../core/tsSupport/declareExtendsHelper","../../../../../core/tsSupport/decorateHelper","../../../../../core/Accessor","../../../../../core/Collection","../../../../../core/compilerUtils","../../../../../core/Handles","../../../../../core/Quantity","../../../../../core/quantityUtils","../../../../../core/unitUtils","../../../../../core/watchUtils","../../../../../core/accessorSupport/decorators","../../../../../geometry/SpatialReference","./MeasurementData","./PathChanges","../support/measurementUtils","../support/Path","../support/setUtils","../support/UnitNormalizer","../../../support/mathUtils","../../../support/projectionUtils"],function(e,t,r,n,a,i,o,s,p,u,l,h,d,c,m,g,y,f,b,v,L,D){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._unitNormalizer=new v,t._measurementData=new m,t._measurementDataChanges=new g,t._viewDataChanges=new g,t._handles=new s,t.path=new f,t.pathVersion=0,t.cursorPoint=null,t.hoveredVertexHandle=null,t.draggedVertices=new i,t.state="initial",t.mode="auto",t.unit="metric",t.editable=!0,t.active=!1,t.maxRelativeErrorCoplanar=.005,t.maxRelativeErrorAlmostCoplanar=.01,t.verticalAngleThreshold=80,t.geodesicMeasurementDistanceThreshold=1e5,t}return r(t,e),t.prototype.initialize=function(){var e=this;this._handles.add(h.whenTrue(this.sceneView,"ready",function(){var t=e.sceneView,r=t.spatialReference,n=t.renderSpatialReference;e._renderSpatialReference=n,e._worldSpatialReference=!r||r.isWGS84||r.isWebMercator?D.WGS84ECEFSpatialReference:r,e._unitNormalizer.spatialReference=r,e._unitNormalizer.ignoredSpatialReferences=[c.WGS84,c.WebMercator]}),"scene-view"),this.reset();var t=function(){e._set("pathVersion",e.pathVersion+1)};this._handles.add(this.path.on("cleared",function(){e._measurementDataChanges.fullChange(),e._set("pathVersion",0)})),this._handles.add(this.path.on("vertex-added",function(r){e._measurementDataChanges.fullChange(),t()})),this._handles.add(this.path.on("vertex-inserted",function(r){e._measurementDataChanges.fullChange(),t()})),this._handles.add(this.path.on("vertex-removed",function(r){e._measurementDataChanges.fullChange(),t()})),this._handles.add(this.path.on("vertex-updated",function(r){e._measurementDataChanges.incrementalChange(r.index),t()}))},t.prototype.destroy=function(){this._handles.destroy(),this._handles=null},Object.defineProperty(t.prototype,"validMeasurement",{get:function(){return this.path.length>=3&&"measured"===this.state||"editing"===this.state},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isMeasuring",{get:function(){return this.path.length>=1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"measurementData",{get:function(){this._viewDataChanges.merge(this._measurementDataChanges);var e=b.clone(this._measurementData.intersectingSegments),t=b.clone(this._measurementData.geodesicIntersectingSegments);return this._measurementData.update(this.path,this._measurementDataChanges,this.sceneView,this._unitNormalizer,this.validMeasurement,this._renderSpatialReference,this._worldSpatialReference,{maxRelativeErrorCoplanar:this.maxRelativeErrorCoplanar,maxRelativeErrorAlmostCoplanar:this.maxRelativeErrorAlmostCoplanar,verticalAngleThreshold:this.verticalAngleThreshold}),y.compareSets(this._measurementData.intersectingSegments,e)||this._viewDataChanges.fullChange(),y.compareSets(this._measurementData.geodesicIntersectingSegments,t)||this._viewDataChanges.fullChange(),this._measurementData},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"area",{get:function(){return this.measurementData.area},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"geodesicArea",{get:function(){return this.measurementData.geodesicArea},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"areaLabel",{get:function(){return this._formatAreaLabel("geodesic"===this.measurementMode?this.measurementData.geodesicArea:this.measurementData.area,this.unit)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"pathLength",{get:function(){return this.measurementData.pathLength},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"geodesicPathLength",{get:function(){return this.measurementData.geodesicPathLength},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"pathLengthLabel",{get:function(){return this._formatLengthLabel("geodesic"===this.measurementMode?this.measurementData.geodesicPathLength:this.measurementData.pathLength,this.unit)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"perimeterLength",{get:function(){return this.measurementData.perimeterLength},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"geodesicPerimeterLength",{get:function(){return this.measurementData.geodesicPathLength},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"perimeterLengthLabel",{get:function(){return this.measurementData.perimeterLength&&this._formatLengthLabel("geodesic"===this.measurementMode?this.measurementData.geodesicPathLength:this.measurementData.perimeterLength,this.unit)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"cursorSegmentLength",{get:function(){return this.path.back&&this.cursorPoint&&new p(this._unitNormalizer.normalizeDistance(y.segmentLengthEuclidean(this.path.back,this.cursorPoint,this._worldSpatialReference)),"meters")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"geodesicCursorSegmentLength",{get:function(){return this.path.back&&this.cursorPoint&&new p(y.segmentLengthGeodesic(this.path.back,this.cursorPoint),"meters")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"cursorSegmentLengthLabel",{get:function(){return this._formatLengthLabel("geodesic"===this.measurementMode?this.geodesicCursorSegmentLength:this.cursorSegmentLength,this.unit)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"viewData",{get:function(){var e=this.measurementData,t="geodesic"===this.measurementMode,r=t?this.geodesicArea:this.area,n=1;if(r){var a=this._toPreferredAreaUnit(r,this.unit);n=L.nextHighestPowerOfTen(Math.sqrt(a.value)/Math.sqrt(300)),n*=Math.sqrt(l.convertUnit(1,a.unit,"square-meters")),n/=this._unitNormalizer.normalizeDistance(1)}return{validMeasurement:this.validMeasurement,path:this.path,pathChanges:this._viewDataChanges,positionsGeographic:e.positionsGeographic,positionsRenderCoords:e.positionsRenderCoords,positionsProjected:e.positionsProjectedWorldCoords,positionsFittedRenderCoords:e.positionsFittedRenderCoords,intersectingSegments:t?e.geodesicIntersectingSegments:e.intersectingSegments,triangleIndices:t?e.geodesicTriangleIndices:e.triangleIndices,fittingMode:e.fittingMode,areaCentroid:t?e.geodesicAreaCentroidRenderCoords:e.areaCentroidRenderCoords,areaNormal:t?e.geodesicAreaNormalRenderCoords:e.areaNormalRenderCoords,pathLengthLabelSegmentIndex:this.validMeasurement?0:this.path.length-2,perimeterLengthLabelSegmentIndex:0,checkerSize:n}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"measurementMode",{get:function(){var e=this.mode;if("auto"===e){e="euclidean";(this.geodesicPathLength?this.geodesicPathLength.value:0)+(!this.validMeasurement&&this.geodesicCursorSegmentLength?this.geodesicCursorSegmentLength.value:0)>this.geodesicMeasurementDistanceThreshold&&(e="geodesic")}return!this.sceneView.ready||this.sceneView.spatialReference.isWGS84||this.sceneView.spatialReference.isWebMercator||(e="euclidean"),e},enumerable:!0,configurable:!0}),t.prototype.reset=function(){this.clearMeasurement()},t.prototype.clearMeasurement=function(){this.path.clear(),this.state="initial",this.cursorPoint=null},t.prototype.finishMeasurement=function(){this.path.length<3?this.clearMeasurement():(this._measurementDataChanges.fullChange(),this.state="measured")},t.prototype._preferredAreaUnit=function(e,t){switch(t){case"metric":return l.preferredMetricAreaUnit(e.value,e.unit);case"imperial":return l.preferredImperialAreaUnit(e.value,e.unit);default:return t}},t.prototype._preferredLengthUnit=function(e,t){var r=this._deriveLengthUnitFromAreaUnit(t);switch(r){case"metric":return l.preferredMetricLengthUnit(e.value,e.unit);case"imperial":return l.preferredImperialLengthUnit(e.value,e.unit);default:return r}},t.prototype._toPreferredAreaUnit=function(e,t){return e.toUnit(this._preferredAreaUnit(e,t))},t.prototype._toPreferredLengthUnit=function(e,t){return e.toUnit(this._preferredLengthUnit(e,t))},t.prototype._formatAreaLabel=function(e,t){return e&&u.formatDecimal(e,this._preferredAreaUnit(e,t))},t.prototype._formatLengthLabel=function(e,t){return e&&u.formatDecimal(e,this._preferredLengthUnit(e,t))},t.prototype._deriveLengthUnitFromAreaUnit=function(e){switch(e){case"metric":return"metric";case"imperial":return"imperial";case"square-inches":return"inches";case"square-feet":return"feet";case"square-yards":return"yards";case"square-miles":return"miles";case"square-us-feet":return"us-feet";case"square-millimeters":return"millimeters";case"square-centimeters":return"centimeters";case"square-decimeters":return"decimeters";case"square-meters":return"meters";case"square-kilometers":return"kilometers";case"acres":return"imperial";case"ares":case"hectares":return"metric";default:o.neverReached(e)}throw new Error("unhandled area unit")},n([d.property({constructOnly:!0})],t.prototype,"sceneView",void 0),n([d.property({readOnly:!0})],t.prototype,"path",void 0),n([d.property({readOnly:!0})],t.prototype,"pathVersion",void 0),n([d.property()],t.prototype,"cursorPoint",void 0),n([d.property()],t.prototype,"hoveredVertexHandle",void 0),n([d.property({readOnly:!0})],t.prototype,"draggedVertices",void 0),n([d.property()],t.prototype,"state",void 0),n([d.property()],t.prototype,"mode",void 0),n([d.property()],t.prototype,"unit",void 0),n([d.property()],t.prototype,"editable",void 0),n([d.property()],t.prototype,"active",void 0),n([d.property({readOnly:!0,dependsOn:["path.length","state"]})],t.prototype,"validMeasurement",null),n([d.property({readOnly:!0,dependsOn:["path.length"]})],t.prototype,"isMeasuring",null),n([d.property({readOnly:!0,dependsOn:["pathVersion","validMeasurement","maxRelativeErrorCoplanar","maxRelativeErrorAlmostCoplanar","verticalAngleThreshold"]})],t.prototype,"measurementData",null),n([d.property({readOnly:!0,dependsOn:["measurementData"]})],t.prototype,"area",null),n([d.property({readOnly:!0,dependsOn:["measurementData"]})],t.prototype,"geodesicArea",null),n([d.property({readOnly:!0,dependsOn:["measurementData","unit","measurementMode"]})],t.prototype,"areaLabel",null),n([d.property({readOnly:!0,dependsOn:["measurementData"]})],t.prototype,"pathLength",null),n([d.property({readOnly:!0,dependsOn:["measurementData"]})],t.prototype,"geodesicPathLength",null),n([d.property({readOnly:!0,dependsOn:["measurementData","unit","measurementMode"]})],t.prototype,"pathLengthLabel",null),n([d.property({readOnly:!0,dependsOn:["measurementData"]})],t.prototype,"perimeterLength",null),n([d.property({readOnly:!0,dependsOn:["measurementData"]})],t.prototype,"geodesicPerimeterLength",null),n([d.property({readOnly:!0,dependsOn:["measurementData","unit","measurementMode"]})],t.prototype,"perimeterLengthLabel",null),n([d.property({readOnly:!0,dependsOn:["path.back","cursorPoint"]})],t.prototype,"cursorSegmentLength",null),n([d.property({readOnly:!0,dependsOn:["path.back","cursorPoint"]})],t.prototype,"geodesicCursorSegmentLength",null),n([d.property({readOnly:!0,dependsOn:["measurementData","unit","measurementMode"]})],t.prototype,"cursorSegmentLengthLabel",null),n([d.property({readOnly:!0,dependsOn:["unit","measurementMode","measurementData"]})],t.prototype,"viewData",null),n([d.property()],t.prototype,"maxRelativeErrorCoplanar",void 0),n([d.property()],t.prototype,"maxRelativeErrorAlmostCoplanar",void 0),n([d.property()],t.prototype,"verticalAngleThreshold",void 0),n([d.property()],t.prototype,"geodesicMeasurementDistanceThreshold",void 0),n([d.property({readOnly:!0,dependsOn:["mode","validMeasurement","geodesicPathLength","geodesicCursorSegmentLength","geodesicMeasurementDistanceThreshold"]})],t.prototype,"measurementMode",null),t=n([d.subclass("esri.views.3d.interactive.measurementTools.areaMeasurement3D.AreaMeasurement3DModel")],t)}(d.declared(a))});