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

define(["require","dojo/aspect","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/_base/json","dojo/_base/kernel","dojo/has","dojo/json","dojo/string","dojo/dom-style","dojo/dom-attr","dojo/dom-construct","dojo/query","dojo/dom-class","dojo/promise/all","dojo/store/Memory","dojo/store/Observable","dojo/data/ObjectStore","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","dijit/registry","dijit/form/Button","dijit/form/CheckBox","dijit/form/Form","dijit/form/Select","dijit/form/TextBox","dijit/form/ValidationTextBox","dijit/layout/ContentPane","dijit/form/FilteringSelect","dijit/Dialog","dgrid1/OnDemandGrid","dgrid1/Editor","dgrid1/Keyboard","dgrid1/Selection","dgrid1/Selector","dgrid1/extensions/ColumnResizer","dgrid1/extensions/DijitRegistry","dstore/Filter","../../kernel","../../lang","../../request","./AnalysisBase","./utils","./CreditEstimator","./_AnalysisOptions","./storeUtils","./ItemTypes","../../tasks/Geoprocessor","dojo/i18n!../../nls/jsapi","dojo/i18n!./nls/countries","dojo/text!./templates/GeocodeLocationsFromTable.html"],function(e,t,i,s,o,a,n,l,r,h,d,u,c,p,m,b,y,_,g,f,w,T,L,S,v,A,F,C,I,G,P,j,x,N,D,R,k,E,U,O,J,B,z,M,W,X,H,V,q,K,Q,Y,Z,$,ee,te){var ie=i([R,k,E,U,O,J,B]),se=i([w,T,L,S,v,K,H],{declaredClass:"esri.dijit.analysis.GeocodeLocationsFromTable",templateString:te,widgetsInTemplate:!0,inputTable:null,inputTables:[],outputLayerName:null,i18n:null,toolName:"BatchGeocode",analyzeToolName:"AnalyzeGeocodeInput",helpFileName:"GeocodeLocationsfromTable",resultParameter:"geocodeResult",checkCreditLimits:!1,allowWorldGeocoder:!0,showChooseExtent:!1,constructor:function(e){this._pbConnects=[],e.containerNode&&(this.container=e.containerNode),e.showGeoAnalyticsParams&&(this.toolName="GeocodeLocations")},destroy:function(){this.inherited(arguments),o.forEach(this._pbConnects,a.disconnect),delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments),s.mixin(this.i18n,$.geocodeFromTableTool),s.mixin(this.i18n,ee)},postCreate:function(){this.inherited(arguments),b.add(this._form.domNode,"esriSimpleForm"),this._outputLayerInput.set("validator",s.hitch(this,this.validateServiceName)),this.inputTable&&this.inputTable.itemid?(this.inputTable.itemId=this.inputTable.itemid,this.signInPromise.then(s.hitch(this,function(){this.getItemInfo(this.inputTable.itemId).then(s.hitch(this,function(e){this.inputTable=s.mixin(this.inputTable,e),this.inputTable.name=e.title,this.inputTable&&!V.isLayerInLayers(this.inputTable,this.inputTables)&&this.inputTables.push(this.inputTable),this._buildUI()}),s.hitch(this,function(e){console.log(e)}))}))):this._buildUI()},startup:function(){},_buildJobParams:function(){var e,t={};return this.showGeoAnalyticsParams?t.inputLayer=this.constructAnalysisInputLyrObj(this.inputTable,!0):this.inputTable.itemId&&-1!==o.indexOf([Y.CSV,Y.XLS],this.inputTable.type)?t.inputFileItem=n.toJson({itemid:this.inputTable.itemId}):t.inputTable=this.constructAnalysisInputLyrObj(this.inputTable,!0),t.geocodeServiceUrl=this.locator.url,t.geocodeParameters=n.toJson(this.get("geocodeParameters")),this.showGeoAnalyticsParams||(t.outputType=this._formatSelect.get("value")),this.showGeoAnalyticsParams&&(t.includeAttributes=this._includeAttributesCheck.get("checked")),V.isEsriWorldGeocoder(t.geocodeServiceUrl)&&(t.sourceCountry="world"===this._countryCodes.get("value")?"":this._countryCodes.get("value")),this.showGeoAnalyticsParams?this.returnFeatureCollection||(t.OutputName=n.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}})):this.returnFeatureCollection||"Feature Service"!==t.outputType?this.returnFeatureCollection||"Feature Service"===t.outputType||(t.OutputName={itemProperties:{title:this._outputLayerInput.get("value"),description:d.substitute(this.i18n.itemDescription,{inputTableName:this.inputTable.name}),tags:d.substitute(this.i18n.itemTags,{inputTableName:this.inputTable.name}),snippet:this.i18n.itemSnippet}},this.showSelectFolder&&(t.OutputName.itemProperties.folderId=this.get("folderId")),t.OutputName=n.toJson(t.OutputName)):t.OutputName=n.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}}),this.showChooseExtent&&this._useExtentCheck.get("checked")&&(t.context=n.toJson({extent:this.map.extent._normalize(!0)})),this.returnFeatureCollection&&(e={outSR:this.map.spatialReference},this.showChooseExtent&&this._useExtentCheck.get("checked")&&(e.extent=this.map.extent._normalize(!0)),t.context=n.toJson(e)),t},_onClose:function(e){this._aspectHandle&&(this._aspectHandle.remove(),this._aspectHandle=null),e&&(this._save(),this.emit("save",{save:!0})),this.emit("close",{save:e})},_handleSaveBtnClick:function(){var e={};this._form.validate()&&(this.set("disableRunAnalysis",!0),this.showGeoAnalyticsParams&&this.set("analysisGpServer",this.helperServices.geoanalytics&&this.helperServices.geoanalytics.url?this.helperServices.geoanalytics.url:null),e.jobParams=this._buildJobParams(),e.jobParams.OutputName&&n.fromJson(e.jobParams.OutputName).serviceProperties&&(e.itemParams={description:d.substitute(this.i18n.itemDescription,{inputTableName:this.inputTable.name}),tags:d.substitute(this.i18n.itemTags,{inputTableName:this.inputTable.name}),snippet:this.i18n.itemSnippet},this.showSelectFolder&&(e.itemParams.folder=this.get("folderId"))),this.showGeoAnalyticsParams&&(this.resultParameter="output",e.isSpatioTemporalDataStore=!0),this.execute(e))},_handleShowCreditsClick:function(e){e.preventDefault(),this._form.validate()&&this.getCreditsEstimate(this.toolName,this._buildJobParams()).then(s.hitch(this,function(e){this._usageForm.set("content",e),this._usageDialog.show()}))},_handleBrowseItemsSelect:function(e){e&&e.selection&&V.addAnalysisReadyLayer({item:e.selection,layers:this.inputTables,layersSelect:this._analysisSelect,browseDialog:e.dialog||this._browsedlg,widget:this}).always(s.hitch(this,this._updateAnalysisLayerUI,!0))},_save:function(){},_buildUI:function(){this._standardUX=[this._chooseOutputTypeLblRow,this._chooseOutputTypeRow],this._bigdataUX=[this._includeAttributesLabelRow,this._includeAttributesRow,this._includeAttributesClearRow],V.updateDisplay(this._standardUX,!this.get("showGeoAnalyticsParams"),"table-row"),V.updateDisplay(this._bigdataUX,this.get("showGeoAnalyticsParams"),"table-row"),this._loadConnections();var e=!0,t=0;V.initHelpLinks(this.domNode,this.showHelp),u.set(this._chooseExtentDiv,"display",!0===this.showChooseExtent?"inline-block":"none"),this.get("showSelectAnalysisLayer")&&(this.inputTables&&this.inputTable&&!V.isLayerInLayers(this.inputTable,this.inputTables)&&this.inputTables.push(this.inputTable),this.get("inputTable")||!this.get("inputTables")||this.rerun||this.set("inputTable",this.inputTables[0]),V.populateAnalysisLayers(this,"inputTable","inputTables")),V.addReadyToUseLayerOption(this,[this._analysisSelect]),this.helperServices&&this.helperServices.geocode&&(this.locators=o.filter(this.helperServices.geocode,function(e){var t=!!e.batch;return this.showGeoAnalyticsParams?!V.isAgoWorldGeocodeServer(e.url)&&(V.isAgoWorldGeocodeServerProxy(e.url)?!e.isEsriBatchGeocoder&&!e.isAGOWorldLocator&&this.allowWorldGeocoder&&t:t):V.isEsriWorldGeocoder(e.url)?this.allowWorldGeocoder&&t:t},this),o.forEach(this.locators,function(e,i){var s=this.geocodeServiceUrl&&this.geocodeServiceUrl==e.url;s&&(t=""+i),this._locatorSelect.addOption({value:""+i,label:e.name,selected:s})},this),this._locatorSelect.set("value",t)),this.outputType&&this._formatSelect.set("value",this.outputType),this.outputLayerName&&(this._outputLayerInput.set("value",this.outputLayerName),e=!1),u.set(this._chooseFolderRow,"display",!0===this.showSelectFolder?"block":"none"),this.showSelectFolder&&this.getFolderStore().then(s.hitch(this,function(e){this.folderStore=e,V.setupFoldersUI({folderStore:this.folderStore,folderId:this.folderId,folderName:this.folderName,folderSelect:this._webMapFolderSelect,username:this.portalUser?this.portalUser.username:""})})),u.set(this._showCreditsLink,"display",!0===this.showCredits?"block":"none"),this._outputNumLabel&&this.showGeoAnalyticsParams?(c.set(this._includeAttributesStepsLabel,"innerHTML",this.i18n.threeLabel),c.set(this._outputNumLabel,"innerHTML",this.i18n.fourLabel)):this._outputNumLabel&&!this.showGeoAnalyticsParams&&c.set(this._outputNumLabel,"innerHTML",this.i18n.fourLabel),W.isDefined(this.includeAttributes)&&this._includeAttributesCheck.set("checked",this.includeAttributes),this._buildCountryList(),this._updateAnalysisLayerUI(e)},_buildDataFields:function(e){this._showLoading(!1),this.set("disableRunAnalysis",!1),V.updateDisplay([this._dataFieldErrorRow],!1,"table-row"),V.hideMessages(this._dataErrorMessagePane),V.updateDisplay([this._dataGridRow,this._dataFieldSelectRow],!0,"table-row"),Q.createStore(e),o.forEach(this.inputTable.fields,function(e){W.isDefined(e.alias)||(e.alias=e.name)});var t,i={identifier:"name",label:"alias",items:[{name:this.i18n.notUsed,alias:this.i18n.notUsed}].concat(this.inputTable.fields)},s=new f({objectStore:g(new _({data:i})),labelProperty:"alias"}),a=[{label:this.i18n.locatorInputs,field:"locatorField"},{label:this.i18n.dataFields,field:"mappedField",editor:G,editOn:"click",editorArgs:{store:s,style:"width:120px;",maxHeight:-1},autoSave:!0}];t=o.filter(e,function(e){return this._multipleswitch.checked?!e.isSingle:e.isSingle},this),this._curdata=e,this.dataFieldGrid?(this.dataFieldGrid.set("columns",a),this.dataFieldGrid.set("collection",Q.createStore(t))):(this.dataFieldGrid=new ie({collection:Q.createStore(t),cellNavigation:!1,columns:a,selectionMode:"single"},this._dataGridDiv),this.dataFieldGrid.startup())},_handleSwitchChange:function(e){this._curdata&&this._buildDataFields(this._curdata)},_buildCountryList:function(){var e=[],t={},i=t.user||{},s=i.region||t.region||t.ipCntryCode||"";""===this.sourceCountry&&(this.sourceCountry="world");for(var o in this.i18n.countryCodes)e.push({label:this.i18n.countryCodes[o],value:o.toLowerCase(),selected:this.sourceCountry&&this.sourceCountry===o.toLowerCase()});e=e.sort(function(e,t){return e.label<t.label?-1:e.label>t.label?1:0}),this._countryCodes.set("options",e),this._countryCodes.set("value",this.i18n.countryCodes[s]?s.toLowerCase():"world")},_loadConnections:function(){this.on("start",s.hitch(this,"_onClose",!0)),this._connect(this._closeBtn,"onclick",s.hitch(this,"_onClose",!1)),this.own(this.watch("locator",s.hitch(this,this._locatorWatcher)),this.watch("inputTable",s.hitch(this,this.analyzeGeocodeInput)))},_handleAnalysisLayerChange:function(e){var t;"browselayers"===e?(t=this._browseLyrsdlg.browseItems.get("query"),this.showGeoAnalyticsParams?(t.types.push('type:"'+Y.BIGDATA+'"'),this._browseLyrsdlg.browseItems.plugIn.layerTypes=[Y.TABLE,Y.BTABLE]):(t.custom=['typekeywords:"'+Y.TABLE+'"','typekeywords:"'+Y.CSV+'"','typekeywords:"'+Y.XLS+'"'],t.types.push('type:"'+Y.CSV+'"'),t.types.push('type:"'+Y.XLS+'"'),this._browseLyrsdlg.browseItems.plugIn.layerTypes=this._browseLyrsdlg.browseItems.plugIn.layerTypes.concat([Y.CSV,Y.XLS])),this._browseLyrsdlg.browseItems.set("query",t),this._browseLyrsdlg.browseItems.plugIn.checkGeometryType=!1,this._browseLyrsdlg.browseItems.plugIn.checkLayerType=!0,this._isAnalysisSelect=!0,this._browseLyrsdlg.show()):(this.set("inputTable",this.inputTables[e]),this._updateAnalysisLayerUI(!0))},_handleLocatorChange:function(e){this.set("locator",this.locators[e])},_updateAnalysisLayerUI:function(e){this.inputTable&&e&&(this.outputLayerName=d.substitute(this.i18n.outputLayerName,{inputTableName:this.inputTable.name}),this._outputLayerInput.set("value",this.outputLayerName))},_locatorWatcher:function(e,t,i){var s=!1;i&&i.url&&(s=V.isWorldGeoLocator(i.url),this._countryRow&&V.updateDisplay([this._countryRow],s,"table-row")),this.analyzeGeocodeInput()},analyzeGeocodeInput:function(){this.locator&&this.inputTable&&this.analysisGpServer&&this.signInPromise.then(s.hitch(this,function(){var e={geocodeServiceUrl:this.locator.url,locale:l.locale};this.inputTable.itemId&&-1!==o.indexOf([Y.CSV,Y.XLS],this.inputTable.type)?(e.inputFileItem=n.toJson({itemid:this.inputTable.itemId}),e.inputFileParameters=n.toJson({fileType:this.inputTable.type===Y.XLS?"xlsx":this.inputTable.type.toLowerCase(),headerRowExists:"true",columnDelimiter:"",textQualifier:""})):e.inputTable=this.constructAnalysisInputLyrObj(this.inputTable,!0),this.analyzeGP=new Z(this.analysisGpServer+"/"+this.analyzeToolName),this.analyzeGP.setUpdateDelay(1e3),this._showLoading(!0),this.analyzeGP.submitJob(e,s.hitch(this,this._getAnalyzeGeocodeData),s.hitch(this,this._analyzeJobFailed),s.hitch(this,this._analyzeJobFailed))}))},_getAnalyzeGeocodeData:function(e){var t=[];"esriJobSucceeded"===e.jobStatus&&(t.push(X({url:this.locator.url,content:{f:"json"}})),t.push(this.analyzeGP.getResultData(e.jobId,"geocodeParameters")),y(t).then(s.hitch(this,this._handleAnalyzeReponse)))},_analyzeJobFailed:function(e){"esriJobFailed"!==e.jobStatus&&"esriJobCancelled"!==e.jobStatus||(this._showLoading(!1),V.updateDisplay([this._dataGridRow,this._dataFieldSelectRow],!1,"table-row"),V.updateDisplay([this._dataFieldErrorRow],!0,"table-row"),V.showMessages("Mapping locator fields with input data fields failed, please use another locator.",this._bodyNode,this._dataErrorMessagePane),this.set("disableRunAnalysis",!0))},_handleAnalyzeReponse:function(e){var t,i,s={locatorFields:e&&e[0]&&e[0].addressFields?e[0].addressFields:null,fieldMap:e&&e[1].value&&e[1].value.field_mapping?n.fromJson(e[1].value.field_mapping):null},a=[],l=[],r=[];s.locatorFields&&(a=o.map(s.locatorFields,function(e){return e.name},this),s.fieldMap&&s.fieldMap.length>0&&(t=this.rerun&&this.geocodeParameters&&this.geocodeParameters.field_mapping?n.fromJson(this.geocodeParameters.field_mapping):s.fieldMap,o.forEach(t,function(t){var n=-1;t[1]&&(n=o.indexOf(a,t[1])),-1!==n&&(s.locatorFields[n].map=t[0]),this.rerun&&e&&e[0]&&e[0].singleLineAddressField&&t[1]===e[0].singleLineAddressField.name&&(i=t[0]),r.push({name:t[0],alias:t[0]})},this),l=o.map(s.locatorFields,function(e){return{locatorField:e.name,mappedField:e.map||this.i18n.notUsed,isSingle:!1}},this))),e&&e[0]&&e[0].singleLineAddressField&&(l.push({locatorField:e[0].singleLineAddressField.name,mappedField:i||this.i18n.notUsed,isSingle:!0}),i&&(this._singleswitch.checked=!0,this._multipleswitch.checked=!1)),!this.inputTable.fields&&r&&(this.inputTable.fields=r),this.rerun&&this.geocodeParameters&&this.locator.url===this.geocodeServiceUrl?this.set("geocodeParameters",this.geocodeParameters):this.set("geocodeParameters",e[1].value),this._buildDataFields(l)},_checkFieldInDataField:function(e){return!!this._curdata&&o.some(this._curdata,function(t){return t.mappedField===e})},_filterLayer:function(e){var t=[Y.CSV,Y.XLS,Y.TABLE,Y.BTABLE];return this.showGeoAnalyticsParams&&(t=[Y.TABLE,Y.BTABLE]),W.isDefined(e)&&(e.type&&-1!==o.indexOf(t,e.type)||!!e.itemid&&this.rerun)},_setAnalysisGpServerAttr:function(e){e&&(this.analysisGpServer=e,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},_setInputTableAttr:function(e){this._filterLayer(e)?this._set("inputTable",e):this._set("inputTable",void 0)},_setInputTablesAttr:function(e){e=o.filter(e,function(e){return this._filterLayer(e)},this),this._set("inputTables",e)},_setLocatorAttr:function(e){this._set("locator",e)},_setGeocodeParametersAttr:function(e){this._set("geocodeParameters",e)},_getGeocodeParametersAttr:function(){var e,t,i=new z,s=[];return this.geocodeParameters?(this.dataFieldGrid&&(o.forEach(n.fromJson(this.geocodeParameters.field_mapping),function(o){e=i.eq("mappedField",o[0]),t=this.dataFieldGrid.collection.filter(e);var a=!1;t.forEach(function(e){e&&e.locatorField&&(o[1]=e.locatorField,a=!0)},this),!a&&this._checkFieldInDataField(o[0])&&""!==o[1]&&(o[1]=""),s.push(o)},this),this.geocodeParameters.field_mapping=n.toJson(s)),this.geocodeParameters):null},_setDisableRunAnalysisAttr:function(e){this._saveBtn.set("disabled",e)},_setAllowWorldGeocoderAttr:function(e){this._set("allowWorldGeocoder",e)},validateServiceName:function(e){return V.validateServiceName(e,{textInput:this._outputLayerInput})},_connect:function(e,t,i){this._pbConnects.push(a.connect(e,t,i))},_showLoading:function(e){V.updateDisplay([this._dataGridRow,this._dataFieldSelectRow,this._dataFieldErrorRow],!e,"table-row"),V.updateDisplay([this._dataLoadingRow],e,"table-row"),this.set("disableRunAnalysis",e),this._locatorSelect.set("disabled",e),this._analysisSelect.set("disabled",e)}});return r("extend-esri")&&s.setObject("dijit.analysis.GeocodeLocationsFromTable",se,M),se});