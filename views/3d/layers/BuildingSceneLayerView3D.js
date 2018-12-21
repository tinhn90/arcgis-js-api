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

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../Graphic","../../../request","../../../core/Collection","../../../core/compilerUtils","../../../core/promiseUtils","../../../core/watchUtils","../../../core/accessorSupport/decorators","./BuildingComponentSublayerView3D","./BuildingGroupSublayerView3D","./LayerView3D","./i3s/I3SUtil","./support/layerViewUpdatingProperties"],function(e,t,r,n,i,o,a,s,p,u,c,l,y,h,d,f,m){function g(e){return"string"==typeof e.fieldName&&"string"==typeof e.modelName&&Array.isArray(e.mostFrequentValues)&&Array.isArray(e.subLayerIds)&&e.subLayerIds.every(function(e){return"number"==typeof e})}return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.componentLayerViews=new s,t.groupLayerViews=new s,t._componentPromises=[],t._loadingComponents=0,t}return n(t,e),Object.defineProperty(t.prototype,"updatingPercentageValue",{get:function(){var e=this.componentLayerViews,t=this._loadingComponents,r=t+e.length;return e.reduce(function(e,t){return e+t.updatingPercentage},100*t)/r},enumerable:!0,configurable:!0}),t.prototype.isUpdating=function(){return this._loadingComponents>0||this.componentLayerViews.some(function(e){return e.updating})},t.prototype.initialize=function(){f.checkSpatialReference(this.layer.spatialReference,this.view.spatialReference,this.view.viewingMode),this.initializeSubLayerViews(this.layer.sublayers,this),this.initDemolishedFilter()},t.prototype.destroy=function(){this.groupLayerViews&&(this.groupLayerViews.forEach(function(e){return e.destroy()}),this.groupLayerViews=null),this.componentLayerViews&&(this.componentLayerViews.forEach(function(e){return e.destroy()}),this.componentLayerViews=null),this._componentPromises&&(this._componentPromises.forEach(function(e){return e.cancel()}),this._componentPromises=null)},t.prototype.initializeSubLayerViews=function(e,t){var r=this;e.forEach(function(e){if("building-group"===e.type){var n=new h({layer:e,view:r.view,parent:t});r.groupLayerViews.push(n),r.initializeSubLayerViews(e.sublayers,n)}else{r._loadingComponents++;var i=e.load().then(function(){r._loadingComponents--;var n=new y({layer:e,view:r.view,parent:t});return r.componentLayerViews.push(n),r.handles.add([c.init(n,"updating",function(){return r.notifyChange("updating")}),c.init(n,"updatingPercentage",function(){return r.notifyChange("updatingPercentageValue")})]),n.when()});r._componentPromises.push(i)}})},t.prototype.getGraphicFromStageObject=function(e,t){var r=this.componentLayerViews.find(function(t){return t.hasStageObject(e)});return r?r.getGraphicFromStageObject(e,t):u.reject()},t.prototype.fetchPopupFeatures=function(e,t){if(!t||0===t.length)return u.reject();var r=this._findComponent(t[0].sourceLayer);return p.isNone(r)?u.reject():r.fetchPopupFeatures(e,t)},t.prototype.whenGraphicBounds=function(e){var t=this._findComponent(e.sourceLayer);return p.isNone(t)?u.reject():t.whenGraphicBounds(e)},t.prototype._findComponent=function(e){return this.componentLayerViews.find(function(t){return e===t.layer})},t.prototype.highlight=function(e,t){void 0===t&&(t={}),e instanceof o?e=[e]:e instanceof s&&(e=e.toArray());var r=[];if(Array.isArray(e)&&e.length>0&&e[0]instanceof o){for(var n=new Map,i=0,a=e;i<a.length;i++){var p=a[i],u=n.get(p.sourceLayer);null==u&&(u=[],n.set(p.sourceLayer,u)),u.push(p)}this.componentLayerViews.forEach(function(e){var t=n.get(e.layer);t&&r.push(e.highlight(t))})}return{remove:function(){return r.forEach(function(e){return e.remove()})}}},t.prototype.initDemolishedFilter=function(){var e=this;a(this.layer.parsedUrl.path+"/statistics/summary",{query:{f:"json"},responseType:"json"}).then(function(t){var r=t.data&&t.data.summary;if(Array.isArray(r))for(var n=0,i=r;n<i.length;n++){var o=i[n];if(null!=o&&"demolishedPhase"===o.modelName&&g(o)&&o.mostFrequentValues.length>0){e.setDemolishedFilter(o.fieldName,o.subLayerIds);break}}})},t.prototype.setDemolishedFilter=function(e,t){var r=this;u.eachAlways(this._componentPromises).then(function(){null!=r.componentLayerViews&&r.componentLayerViews.forEach(function(r){t.indexOf(r.layer.id)>=0&&(r.demolishedFilterField=e)})})},i([l.property()],t.prototype,"layer",void 0),i([l.property()],t.prototype,"componentLayerViews",void 0),i([l.property()],t.prototype,"groupLayerViews",void 0),i([l.property(m.updatingPercentage)],t.prototype,"updatingPercentage",void 0),i([l.property({readOnly:!0})],t.prototype,"updatingPercentageValue",null),t=i([l.subclass("esri.views.3d.layers.BuildingSceneLayerView3D")],t)}(l.declared(d))});