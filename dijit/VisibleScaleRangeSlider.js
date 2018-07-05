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

define(["../kernel","./_EventedWidget","./_Tooltip","./VisibleScaleRangeSlider/_RecommendedScaleRangeBounds","./VisibleScaleRangeSlider/_SlideEvent","./VisibleScaleRangeSlider/ScaleMenu","./VisibleScaleRangeSlider/ScalePreview","./VisibleScaleRangeSlider/ScaleRanges","dijit/form/DropDownButton","dijit/popup","dojo/_base/array","dojo/_base/lang","dojo/aspect","dojo/debounce","dojo/Deferred","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dojo/has","dojo/on","dojo/string","dojox/form/HorizontalRangeSlider","dojo/i18n!../nls/jsapi"],function(e,t,a,i,n,s,l,c,r,o,h,d,u,S,_,m,g,p,f,v,b,x,R,M){var w=t.createSubclass([a],{declaredClass:"esri.dijit.VisibleScaleRangeSlider",baseClass:"esriVisibleScaleRangeSlider",css:{currentScaleIndicator:"esriCurrentScaleIndicator",currentScaleIndicatorContainer:"esriCurrentScaleIndicatorContainer",scaleIndicator:"esriScaleIndicator",scaleIndicatorContainer:"esriScaleIndicatorContainer"},disabled:!1,map:null,layer:null,region:"en-US",minScale:0,maxScale:0,intermediateChanges:!1,labels:M.widgets.visibleScaleRangeSlider,_slider:null,_currentScaleIndicator:null,_scalePreview:null,_maxScaleButton:null,_minScaleButton:null,_mapUpdateHandler:null,_scaleRanges:null,_scheduleScaleRangeChangeEmit:null,_getSliderIndexRange:function(e){var t=Math.floor(e);return{min:t,max:t+.99999}},_setDisabledAttr:function(e){this._slider.set("disabled",e),this._maxScaleButton.set("disabled",e),this._minScaleButton.set("disabled",e),this._set("disabled",e)},_setMapAttr:function(e){this._set("map",e),this._mapUpdateHandler&&this._mapUpdateHandler.remove(),this._slider.set("disabled",!0),this._ensureMap().then(this._updateFromMap)},_setConstraintsAttr:function(e){this._set("constraints",e),this._setUpSlider({minScale:e.minScale,maxScale:e.maxScale})},_updateFromMap:function(e){var t,a=e.getMinScale(),i=e.getMaxScale();this._setUpSlider({minScale:a,maxScale:i}),this._updateCurrentScaleIndicator(),t=e.on("zoom-end",d.hitch(this,this._updateCurrentScaleIndicator)),this.own(t),this._mapUpdateHandler=t},_setUpSlider:function(e){var t,a=e.maxScale,i=e.minScale;this._slider.set("disabled",this.get("disabled")),this._scaleRanges.set("scaleRangeBounds",{minScale:i,maxScale:a}),t=this._getSliderIndexRange(this._scaleRanges.length-1),this._slider.set("maximum",t.max),this._silentSliderUpdate({maxScale:a,minScale:i})},_ensureMap:function(){return this._untilLoaded(this.map)},_untilLoaded:function(e){var t=new _;return e?e.loaded?t.resolve(e):e.on("load",function(){t.resolve(e)}):t.reject(new Error("could not load resource")),t.promise},_updateCurrentScaleIndicator:function(){var e=this._scaleRanges.clampScale(this.map.getScale()),t=this._mapScaleToSlider(e),a=t/this._slider.maximum;this.isLeftToRight()||(a=1-a),f.set(this._currentScaleIndicator,{left:100*a+"%"})},_setLayerAttr:function(e){this._set("layer",e),this._ensureScaleRangeProvider().then(this._ensureLayer).then(this._updateMinMaxScaleFromLayer)},_ensureLayer:function(){return this._untilLoaded(this.layer)},_updateMinMaxScaleFromLayer:function(e){this.set({minScale:e.minScale,maxScale:e.maxScale})},_mapSliderToScale:function(e){var t=this._getSliderIndexRange(e),a=this._scaleRanges.findScaleRangeByIndex(e),i=a.minScale,n=a.maxScale;return this._mapToRange(e,t.min,t.max,i,n)},_mapToRange:function(e,t,a,i,n){return i+(e-t)*(n-i)/(a-t)},_setRegionAttr:function(e){this._set("region",e),this._scalePreview.set("source",c.getScalePreviewSource(e))},_getMinimumAttr:function(){return this._mapSliderToScale(this._slider.minimum)},_getMaximumAttr:function(){return this._mapSliderToScale(this._slider.maximum)},_getActualMaxScaleAttr:function(){return this._scaleRanges.clampMaxScale(this.maxScale)},_setMaxScaleAttr:function(e){this._set("maxScale",e),this._ensureScaleRangeProvider().then(d.hitch(this,function(){e=this._scaleRanges.clampMaxScale(e),this._set("maxScale",this._layerConstrainedMaxScale(e)),this._silentSliderUpdate({maxScale:e}),this._scheduleScaleRangeChangeEmit()}))},_silentSliderUpdate:function(e){var t,a,i=e.minScale,n=e.maxScale,s=this._scaleRanges,l=this._slider;void 0!==i&&(t=this._mapScaleToSlider(s.clampMinScale(i)),l.set("value",t,!1,!1)),void 0!==n&&(a=this._mapScaleToSlider(s.clampMaxScale(n)),l.set("value",a,!1,!0))},_mapScaleToSlider:function(e){var t=this._scaleRanges.scaleToRangeIndex(e),a=this._getSliderIndexRange(t),i=this._scaleRanges.findScaleRangeByIndex(t),n=i.minScale,s=i.maxScale;return this._mapToRange(e,n,s,a.min,a.max)},_getActualMinScaleAttr:function(){return this._scaleRanges.clampMinScale(this.minScale)},_setMinScaleAttr:function(e){this._set("minScale",e),this._ensureScaleRangeProvider().then(d.hitch(this,function(){e=this._scaleRanges.clampMinScale(e),this._set("minScale",this._layerConstrainedMinScale(e)),this._silentSliderUpdate({minScale:e}),this._scheduleScaleRangeChangeEmit()}))},_ensureScaleRangeProvider:function(){if(this.map)return this._ensureMap();var e=new _;return this.constraints&&e.resolve(),e.promise},_emitScaleRangeChange:function(){this.emit("scale-range-change",{minScale:this.minScale,maxScale:this.maxScale})},_layerConstrainedMinScale:function(e){var t,a,i,n,s=d.getObject("tileInfo.lods",!1,this.layer)||[],l=s.length>0;return l?(t=s[0].scale,a=this._scaleRanges.get("firstRange"),i=.85,n=this._mapToRange(e,a.maxScale,a.minScale,0,1)>i,n?t:e>t?t:e):this._scaleRanges.beyondMinScale(e)?0:e},_layerConstrainedMaxScale:function(e){var t,a=d.getObject("tileInfo.lods",!1,this.layer)||[],i=a.length>0;return i?(t=a[a.length-1].scale,e<t?t:e):this._scaleRanges.beyondMaxScale(e)?0:e},constructor:function(){this._scaleRanges=new(c.createSubclass([i])),this._scheduleScaleRangeChangeEmit=S(d.hitch(this,this._emitScaleRangeChange),0),this._ensureMap=d.hitch(this,this._ensureMap),this._ensureScaleRangeProvider=d.hitch(this,this._ensureScaleRangeProvider),this._ensureLayer=d.hitch(this,this._ensureLayer),this._updateMinMaxScaleFromLayer=d.hitch(this,this._updateMinMaxScaleFromLayer),this._updateFromMap=d.hitch(this,this._updateFromMap)},buildRendering:function(){this.inherited(arguments),this._initSlider(),this._initScalePreview(),this._initCurrentScaleIndicator(),this._initScaleMenus()},_initSlider:function(){var e=new(R.createSubclass([n]))({baseClass:"esriHorizontalSlider",showButtons:!1,intermediateChanges:this.intermediateChanges,disabled:!0});this._slider=e,e.placeAt(this.domNode),e.startup(),this.own(e.on("slide-onmousemove, slidemax-onmousemove",d.hitch(this,function(e){this._updateScalePreview(e.movable.handle)})),e.on("slide-onmovestop, slidemax-onmovestop",d.hitch(this,function(e){m.contains(e.movable.handle,"dijitSliderThumbHover")||this._closeScalePreview()})),e.on("change",d.hitch(this,function(){var e=Math.round(this._mapSliderToScale(this._getSliderMin())),t=Math.round(this._mapSliderToScale(this._getSliderMax()));this.set({minScale:e,maxScale:t})})),u.after(e,"_setValueAttr",d.hitch(this,this._updateLabelMenus)))},_getSliderMin:function(){return this._slider.get("value")[0]},_getSliderMax:function(){return this._slider.get("value")[1]},_updateLabelMenus:function(){var e=this._minScaleButton,t=this._maxScaleButton;e.set("label",this._scaleRanges.getScaleRangeLabel(this._getSliderMin())),t.set("label",this._scaleRanges.getScaleRangeLabel(this._getSliderMax()))},_initScalePreview:function(){var e=new l;e.startup(),o.moveOffScreen(e),h.forEach([this._slider._movable.handle,this._slider._movableMax.handle],function(e){e.onmouseenter=d.hitch(this,this._updateScalePreview,e),e.onmouseleave=d.hitch(this,this._closeScalePreview)},this),this.own(e),this._scalePreview=e},_closeScalePreview:function(){o.close(this._scalePreview)},_updateScalePreview:function(e){if(!this.disabled){var t=this._scalePreview;o.moveOffScreen(t);var a,i,n,s=this._slider,l=e===s.sliderHandle,c=l?this._getSliderMin():this._getSliderMax(),r=p.position(e),h=p.position(t.domNode),d=p.position(s.sliderBarContainer),u=this.isLeftToRight(),S=this._scaleRanges.getScalePreviewSpriteBackgroundPosition(c);t.set("backgroundPosition",S),i=r.x-d.x,n=.5*h.w,a=i<n?u?["above","below"]:["above-alt","below-alt"]:i<d.w-n?["above-centered","below-centered"]:u?["above-alt","below-alt"]:["above","below"],o.open({parent:this,popup:t,around:e,orient:a})}},_initCurrentScaleIndicator:function(){if(this.map){var e=g.create("div",{className:this.css.scaleIndicatorContainer+" "+this.css.currentScaleIndicatorContainer},this._slider.sliderBarContainer),t=g.create("div",{className:this.css.scaleIndicator+" "+this.css.currentScaleIndicator},e);this._currentScaleIndicator=t,this.createTooltip(t);var a=b(t,"mouseover",d.hitch(this,function(){var e=x.substitute(this.labels.currentScaleTooltip,{scaleLabel:this._scaleRanges.getScaleRangeLabel(this._mapScaleToSlider(this.map.getScale()))});this.findTooltip(t).set("label",e)}));this.own(a)}},_initScaleMenus:function(){var e,t,a=new s,i=new s;this.own(a.on("scale-selected",d.hitch(this,function(t){e.closeDropDown(),this.set("minScale",t.scale)}))),this.own(i.on("scale-selected",d.hitch(this,function(e){t.closeDropDown(),this.set("maxScale",e.scale)}))),e=new r({baseClass:"esriScaleMenuButton esriMinScaleMenuButton",dropDown:a,dropDownPosition:["below","above"]}),e.toggleDropDown(),e.toggleDropDown(),t=new r({baseClass:"esriScaleMenuButton esriMaxScaleMenuButton",dropDown:i,dropDownPosition:["below","above"]}),t.toggleDropDown(),t.toggleDropDown(),this.own(u.before(e,"openDropDown",d.hitch(this,function(){var t=this._scaleRanges.findScaleRange(this.get("actualMaxScale")).minScale;a.set("options",{label:e.label,scale:{current:this.get("actualMinScale"),map:this._getMapScale(),min:this.get("minimum"),max:t}})}))),this.own(u.before(t,"openDropDown",d.hitch(this,function(){var e=this._scaleRanges.findScaleRange(this.get("actualMinScale")).maxScale;i.set("options",{label:t.label,scale:{current:this.get("actualMaxScale"),map:this._getMapScale(),min:e,max:this.get("maximum")}})}))),e.placeAt(this.domNode),t.placeAt(this.domNode),a.startup(),i.startup(),e.startup(),t.startup(),this._minScaleButton=e,this._maxScaleButton=t},_getMapScale:function(){return this.map?this.map.getScale():-1},startup:function(){this.inherited(arguments),this.watch("intermediateChanges",function(e,t,a){this._slider.set(e,a)})}});return v("extend-esri")&&d.setObject("dijit.VisibleScaleRangeSlider",w,e),w});