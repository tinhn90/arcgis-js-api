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

///////////////////////////////////////////////////////////////////////////
// Copyright © 2014 - 2016 Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////

define(["dojo/_base/declare","dojo/Deferred","dojo/Evented","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/on","dijit/_TemplatedMixin","../BaseEditor","dijit/form/Select","dijit/form/ToggleButton","dojo/text!./SelectFeatureSetFromLayer.html","esri/dijit/analysis/utils","esri/tasks/query","esri/toolbars/draw","esri/layers/FeatureLayer","esri/graphic","esri/symbols/PictureMarkerSymbol","esri/symbols/jsonUtils"],function(e,t,a,s,i,r,o,n,l,h,y,d,u,m,p,w,c,L,g){return e([l,n,a],{templateString:d,editorName:"SelectFeatureSetFromLayer",cssClass:{featureSetSelect:"longInput esriMediumlabel2 esriAnalysisSelect"},postCreate:function(){this.inherited(arguments),this.spatialFilterByFeatures=new h({class:this.cssClass.featureSetSelect}),this._analysisSelect=this.spatialFilterByFeatures,this.analysisLayers=this.config.analysisLayers,this.param&&this.param.defaultValue&&this.param.defaultValue.geometryType&&(this.analysisLayers=i.filter(this.analysisLayers,function(e){return this.param.defaultValue&&this.param.defaultValue.geometryType===e.geometryType},this)),this.analysisLayer||(this.analysisLayer=this.analysisLayers[0]),u.populateAnalysisLayers(this,"analysisLayer","analysisLayers",{posIncrement:1}),this.showBrowseLayers=!this.widget||this.widget.showBrowseLayers,this.showReadyToUseLayers=!this.widget||this.widget.showReadyToUseLayers,this.portalUrl=this.config.portalUrl,this.showGeoAnalyticsParams=this.config.showGeoAnalyticsParams,u.addReadyToUseLayerOption(this,[this._analysisSelect]),this.own(o(this.spatialFilterByFeatures,"change",s.hitch(this,this._onLayerChanged))),this.spatialFilterByFeatures.placeAt(this.layerChooseNode);var e,t;this.showDrawOption=void 0===this.config.showDrawOption||this.config.showDrawOption,this.showDrawOption&&(e=this.param.defaultValue.geometryType.toLowerCase(),t=-1!==e.indexOf("polygon")?"polygon":-1!==e.indexOf("point")?"point":"polyline",this._type=t,this._drawBtn=new y({class:"esriActionButton",iconClass:"toolbarIcon "+t+"Icon"}),this._drawBtn.placeAt(this.layerChooseNode),o(this._drawBtn,"change",s.hitch(this,this._handleDrawBtnChange)),this._updateDrawnLayerName(),this._initDefaultSymbols()),this.on("add-ready-to-use-layer",s.hitch(this,function(e){this.widget&&this.widget.emit("add-ready-to-use-layer",e)}))},_updateDrawnLayerName:function(){var e,t=[],a=this.widget&&this.widget.drawLayer;a&&a.length>0&&(t=i.filter(a,function(e){return e.geometryType&&-1!==e.geometryType.toLowerCase().indexOf(this._type)},this)),e=0===t.length?"":"_"+t.length,"point"===this._type?this.set("drawnLayerName",this.widget&&this.widget.drawPointLayerName?this.widget.drawPointLayerName:this.nls.drawnPointLayer):"polyline"===this._type?this.set("drawnLayerName",this.widget&&this.widget.drawLineLayerName?this.widget.drawLineLayerName:this.nls.drawnPolylineLayer):"polygon"===this._type?this.set("drawnLayerName",this.widget&&this.widget.drawPolyLayerName?this.widget.drawPolyLayerName:this.nls.drawnPolygonLayer):this.set("drawnLayerName",this.widget&&this.widget.drawnLayerName?this.widget.drawnLayerName:this.nls.drawnLayerName),""!==e&&this._type&&this.set("drawnLayerName",this.get("drawnLayerName")+e)},_handleDrawBtnChange:function(e){e?(this.emit("drawtool-activate",{}),this._featureLayer||this._createFeatColl(),this._drawtoolbar.activate("point"===this._type?p.POINT:"polyline"===this._type?p.FREEHAND_POLYLINE:p.POLYGON)):this._drawtoolbar.deactivate()},_onLayerChanged:function(e){var t,a,s;"browse"===e?(t=this._browsedlg.browseItems.get("query"),this.param&&this.param.defaultValue&&this.param.defaultValue.geometryType&&(a=this.param.defaultValue.geometryType.toLowerCase(),s=-1!==a.indexOf("point")?"point":-1!==a.indexOf("polygon")?"polygon":"line",t.custom=['tags:"'+s+'"'],this._browsedlg.browseItems.set("query",t)),this._browsedlg.show()):"browselayers"===e?(this.showGeoAnalyticsParams&&(t=this._browseLyrsdlg.browseItems.get("query"),t.types.push('type:"Big Data File Share"'),this._browseLyrsdlg.browseItems.set("query",t)),this.param&&this.param.defaultValue&&this.param.defaultValue.geometryType&&(this._browseLyrsdlg.browseItems.plugIn.geometryTypes=[this.param.defaultValue.geometryType]),this._browseLyrsdlg.show()):(this.analysisLayer=this.analysisLayers[e-1],this.emit("analysislayer-change",{analysisLayer:this.analysisLayer}))},_handleBrowseItemsSelect:function(e){e&&e.selection&&u.addAnalysisReadyLayer({item:e.selection,layers:this.analysisLayers,layersSelect:this._analysisSelect,browseDialog:e.dialog||this._browsedlg,posIncrement:1,widget:this})},_createFeatColl:function(){this._updateDrawnLayerName(),this._initDefaultSymbols();var e=this.createFeatureCollection(this.drawnLayerName);this._featureLayer=new w(e,{id:this.drawnLayerName}),this.map.addLayer(this._featureLayer),r.connect(this._featureLayer,"onClick",s.hitch(this,function(e){this.map.infoWindow.setFeatures([e.graphic])})),this.widget&&this.widget.set("drawLayer",this._featureLayer)},createFeatureCollection:function(e){var t;return t={layerDefinition:null,featureSet:{features:[],geometryType:this.param.defaultValue.geometryType}},t.layerDefinition={objectIdField:"OBJECTID",templates:[],type:"Feature Layer",drawingInfo:{},name:e,hasAttachments:!1,capabilities:"Query",types:[],geometryType:this.param.defaultValue.geometryType,fields:this.param.defaultValue.fields},t},_getRandomColor:function(){return[Math.floor(256*Math.random()),Math.floor(256*Math.random()),Math.floor(256*Math.random()),Math.floor(256*Math.random())]},_initDefaultSymbols:function(){var e=this.drawnLayerName&&-1!==this.drawnLayerName.search(/_[0-9]$/),t={style:"esriSMSCircle",color:e?this._getRandomColor():[0,0,128,128],name:"Circle",outline:{color:e?this._getRandomColor():[0,0,128,255],width:1},type:"esriSMS",size:18},a={style:"esriSLSSolid",color:e?this._getRandomColor():[79,129,189,255],width:3,name:"Blue 1",type:"esriSLS"},s={style:"esriSFSSolid",color:e?this._getRandomColor():[79,129,189,128],type:"esriSFS",outline:{style:"esriSLSSolid",color:e?this._getRandomColor():[54,93,141,255],width:1.5,type:"esriSLS"}};this.pointSymbol=g.fromJson(t),this.polylineSymbol=g.fromJson(a),this.polygonSymbol=g.fromJson(s)},_createGraphic:function(e){var t=e.type,a=null;return a="point"===t||"multipoint"===t?this.pointSymbol:"line"===t||"polyline"===t?this.polylineSymbol:this.polygonSymbol,new c(e,a)},_addFeatures:function(e){var t=this._createGraphic(e),a=[];if(this.map.graphics.add(t),a.push(t),this._featureLayer.applyEdits(a,null,null),0===this.analysisLayers.length||this.analysisLayers[this.analysisLayers.length-1]!==this._featureLayer){var s=this.analysisLayers.push(this._featureLayer),r=this._analysisSelect.getOptions();this._analysisSelect.removeOption(r),r=i.map(r,function(e){return e.selected=!1,e}),r.push({value:s,label:this._featureLayer.name,selected:!0}),this._analysisSelect.addOption(r),this._onLayerChanged(s)}this._drawBtn.set("checked",!1)},clear:function(){this._featureLayer&&(this.map.removeLayer(this._featureLayer),i.forEach(this.analysisLayers,function(e,t){if(e===this._featureLayer)return this._analysisSelect.removeOption({value:t+1,label:this._featureLayer.name}),void this.analysisLayers.splice(t,1)},this)),this._handleDrawBtnChange(!1)},_setDrawnLayerNameAttr:function(e){this.drawnLayerName=e},_getDrawnLayerNameAttr:function(){return this._featureLayer?this._featureLayer.name:this.drawnLayerName},_getDrawLayerAttr:function(){return this._featureLayer},getGPValue:function(){var e=this.analysisLayers[this._analysisSelect.get("value")-1];return this.wrapValueToDeferred(u.constructAnalysisInputLyrObj(e,!0))},_setMapAttr:function(e){this.map=e,this._drawtoolbar=new p(this.map),r.connect(this._drawtoolbar,"onDrawEnd",s.hitch(this,this._addFeatures))},_setAnalysisLayerAttr:function(e){this._set("analysisLayer",e)},_getAnalysisLayerAttr:function(){return this.analysisLayers[this._analysisSelect.get("value")-1]}})});