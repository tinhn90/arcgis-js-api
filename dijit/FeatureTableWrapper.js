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

define(["dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_WidgetBase","dojo/aspect","dojo/Deferred","dojo/has","dojo/on","dojo/string","dojo/_base/array","dojo/_base/declare","dojo/_base/fx","dojo/_base/lang","dojo/fx","dojo/dom","dojo/dom-construct","dojo/dom-style","dojo/dom-class","dojo/dom-geometry","dgrid/util/misc","../kernel","../IdentityManager","../layers/FeatureLayer","../dijit/FeatureTable","../dijit/FeatureLayerQueryStore","dijit/Menu","dijit/MenuItem","dijit/a11yclick","dijit/form/DropDownButton","dijit/form/Button","dijit/layout/BorderContainer","dijit/layout/ContentPane","dojo/text!./FeatureTableWrapper/templates/FeatureTableWrapper.html"],function(e,t,n,a,i,o,s,r,d,l,u,h,c,f,m,_,b,p,g,y,I,T,w,P,C,v,N,R,M,F,H,D){var L=l([n,e,t],{declaredClass:"esri.dijit.FeatureTableWrapper",baseClass:"esri-feature-table-wrapper",templateString:D,domNode:null,featureLayer:null,editable:!0,hiddenFields:null,fieldInfos:null,gridOptions:null,dateOptions:null,selectedRows:null,selectedRowIds:null,outFields:null,syncSelection:!0,zoomToSelection:!0,showDataTypes:!1,showGridHeader:!0,showGridMenu:!0,showFeatureCount:!0,showColumnHeaderTooltips:!0,showRelatedRecords:!1,showDestinationRelationships:!1,showAttachments:!1,batchCount:50,css:{relatedBC:"esri-feature-table-related-border-container",relatedCPLeading:"esri-feature-table-related-leading-content-pane",buttonNode:"esri-feature-table-button",columnChangeMenuNode:"esri-feature-table-column-change-menu",iconUIDown:"icon-ui-down",iconUIMenu:"icon-ui-menu",iconUIClose:"icon-ui-close"},showFieldDetails:!0,showCyclicalRelationships:!1,_columnRules:null,_relatedTableInfos:null,_subLayouts:null,_activePromises:null,_popupDateFormats:{shortDate:{datePattern:"M/d/y"},shortDateLE:{datePattern:"d/M/y"},longMonthDayYear:{datePattern:"MMMM d, y"},dayShortMonthYear:{datePattern:"d MMM y"},longDate:{datePattern:"EEEE, MMMM d, y",selector:"date"},shortDateShortTime:{datePattern:"M/d/y",timePattern:"h:mm a",timeEnabled:!0},shortDateLEShortTime:{datePattern:"d/M/y",timePattern:"h:mm a",timeEnabled:!0},shortDateShortTime24:{datePattern:"M/d/y",timePattern:"H:mm",timeEnabled:!0},shortDateLEShortTime24:{datePattern:"d/M/y",timePattern:"H:mm",timeEnabled:!0},shortDateLongTime:{datePattern:"M/d/y",timePattern:"h:mm:ss a",timeEnabled:!0},shortDateLELongTime:{datePattern:"d/M/y",timePattern:"h:mm:ss a",timeEnabled:!0},shortDateLongTime24:{datePattern:"M/d/y",timePattern:"H:mm:ss",timeEnabled:!0},shortDateLELongTime24:{datePattern:"d/M/y",timePattern:"H:mm:ss",timeEnabled:!0},longMonthYear:{datePattern:"MMMM y"},shortMonthYear:{datePattern:"MMM y"},year:{datePattern:"y"}},constructor:function(e,t){this.hiddenFields=[],this._columnRules={},this._relatedTableInfos=[],this._subLayouts=[],this._activePromises=[],this._buttonInfos={}},startup:function(){this.inherited(arguments),this._generatePrimaryTable()},destroy:function(){this.inherited(arguments),this._activePromises.length>0&&d.forEach(this._activePromises,function(e){e.cancel()})},_generateFeatureTable:function(e){var t,n,a,i,o=e.layer,r=e.node,l=isNaN(e.layerId)||null===e.layerId?isNaN(o.layerId)||null===o.layerId?null:o.layerId:e.layerId,u=e.filterIds||null,c=[],f=!this.featureTable&&this.showFieldDetails;return this.layerInfos&&(n=this.layerInfos[l]||null,a=n?n.popupInfo:null,i=a?a.fieldInfos:null,i=i?this._updatePopupInfosDateFormat(i):null),l&&c.push(l),this.featureTable&&this.featureTable.featureLayer&&c.push(this.featureTable.featureLayer.layerId),d.forEach(this._relatedTableInfos,function(e){c.push(e.layer.layerId)}),t=new w({featureLayer:o,editable:this.editable,fieldInfos:i,gridOptions:this.gridOptions,dateOptions:this.dateOptions,hiddenFields:this.hiddenFields,showAttachments:this.showAttachments,showRelatedRecords:this.showRelatedRecords,showDestinationRelationships:this.showDestinationRelationships,showGridMenu:this.showGridMenu,showDataTypes:this.showDataTypes,showGridHeader:this.showGridHeader,showFeatureCount:this.showFeatureCount,menuFunctions:this.menuFunctions,batchCount:this.batchCount,showStatistics:this.showStatistics,showColumnHeaderTooltips:this.showColumnHeaderTooltips,showFieldDetails:f,filterIds:u,visibleLayerIds:c,showCyclicalRelationships:this.showCyclicalRelationships},r),t.own(s(t,"error",h.hitch(this,function(e){this.emit("error",e)})),s(t,"edits-complete",h.hitch(this,function(e){this.emit("edits-complete",e)}))),t.startup(),t},_generatePrimaryTable:function(){var e=this._generateFeatureTable({layer:this.featureLayer,node:this._gridNode});this.featureTable=e,this._buttonInfos[e.id]={columnHider:this._generateColumnHiderButton(e)},e.on("show-related-records",h.hitch(this,function(t){var n=this._buttonInfos[e.id];this._removeButton(n.columnHider),n.columnHider=null,e.showFieldDetails=!1,e.showFeatureCount=!1,e._updateGridHeaderText(),this._shrinkTable({table:e,leadingPane:this._cpLeadingNode,centerPane:this._cpCenterNode,columnId:t.columnId}).then(h.hitch(this,function(a){return n.column=this._generateColumnPickerButton(e),e.columns.push({unhidable:!0,label:"ft_related-records-small",field:"ft_related-records-small",get:function(n){var a=e._getRelatedRecordsByIds(n[e.idProperty],t.relationship.id),i=a&&a.features?a.features.length:0;return r.substitute(e._i18nStrings.parenValue,{value:i})}}),e.grid.set("selectionMode","single"),e.refresh(),e.selectRows([t.row[e.idProperty]]),this._generateRelatedRecordsTable({parentLayer:this.featureLayer,parentTable:a,relationshipInfos:t,attachNode:this._cpCenterNode})})).then(h.hitch(this,function(e){this._wireUpRelatedRecordsTable(e)}))})),e.on("show-detailed-field-view",h.hitch(this,function(t){var n=t.columnId,a=t.fieldInfo,i=this._buttonInfos[e.id];this._removeButton(i.columnHider),i.columnHider=null,e.showFeatureCount=!1,e.showFieldDetails=!1,e._updateGridHeaderText(),this._shrinkTable({table:e,leadingPane:this._cpLeadingNode,centerPane:this._cpCenterNode,columnId:n,finalWidth:this._cpLeadingNode.domNode.getBoundingClientRect().width/6}).then(h.hitch(this,function(){i.column=this._generateColumnPickerButton(e),this.emit("show-detailed-field-view",{columnId:n,table:e,fieldInfo:a})}))}))},_generateRelatedRecordsTable:function(e){var t,n,a,o,r=new i,l=e.relationshipInfos,u=e.attachNode,c=e.parentTable,f=d.map(l.records,function(e){return e.attributes[c.idProperty]});return n=this._generateSubLayout(u.domNode),a=this._generateFeatureLayer(l.relationship.relatedTableId),o=this._generateFeatureTable({layer:a,layerId:l.relationship.relatedTableId,node:n.gridContainer,filterIds:f}),this._buttonInfos[o.id]={columnHider:this._generateColumnHiderButton(o),close:this._generateRelatedTableCloseButton(o)},t={layout:n,layer:a,table:o,relationshipInfos:l,parentTable:c},this._relatedTableInfos.push(t),this.own(s.once(o,"load",h.hitch(this,function(){this._activePromises.splice(d.indexOf(r),1),r.resolve(t)}))),this._activePromises.push(r),r},_wireUpRelatedRecordsTable:function(e){var t=this._relatedTableInfos.indexOf(e),n=e.parentTable,a=e.relationshipInfos,i=e.table;this._setUpRelatedTableEvents(e,n),i.own(s(n,"row-select",h.hitch(this,function(e){var o=this.featureLayer.objectIdField,s=e[0].data[o],r=a.relationship.id,l=n._getRelatedRecordsByIds(s,r),u=t===this._relatedTableInfos.length-1;if(l){var h=d.map(l.features,function(e){return e.attributes[o]});if(i.set("filterIds",h),i._updateGridHeaderText(),i.dataStore instanceof P){var c=i._generateCacheStore(h);if(i.grid.set("store",c),i.set("dataStore",c),t!==this._relatedTableInfos.length-1){var f=h[0],m={data:{}};m.data[o]=f,i.selectRows([f]),setTimeout(function(){i.emit("row-select",[m])},500)}}else i._updateGridHeaderText(),i.refresh(),t!==this._relatedTableInfos.length-1&&i.selectRows([h[0]])}else if(u)i.dataStore instanceof P&&(i.grid.store=null),i.set("filterIds",[]),i._updateGridHeaderText(),i.refresh();else for(var _=this._relatedTableInfos.length-1;_>=t;_--){var b=this._relatedTableInfos[_].table;b&&(b.dataStore instanceof P&&(b.grid.store=null),b.set("filterIds",[]),i._updateGridHeaderText(),b.refresh())}})))},_setUpRelatedTableEvents:function(e){var t=e.table,n=e.layout,a=e.layer;t.on("show-related-records",h.hitch(this,function(e){var i=this._buttonInfos[t.id];this._removeButton(i.columnHider),this._removeButton(i.close),i.columnHider=null,i.close=null,t.showFieldDetails=!1,t.showFeatureCount=!1,t._updateGridHeaderText(),this._shrinkTable({table:t,leadingPane:n.contentPaneLeading,centerPane:n.contentPaneCenter,columnId:e.columnId}).then(h.hitch(this,function(o){return i.column=this._generateColumnPickerButton(t),t.columns.push({unhidable:!0,label:"ft_related-records-small",field:"ft_related-records-small",get:function(n){var a=t._getRelatedRecordsByIds(n[t.idProperty],e.relationship.id),i=a&&a.features?a.features.length:0;return r.substitute(t._i18nStrings.parenValue,{value:i})}}),t.grid.set("selectionMode","single"),t.refresh(),t.selectRows([e.row[t.idProperty]]),this._generateRelatedRecordsTable({parentLayer:a,parentTable:o,relationshipInfos:e,attachNode:n.contentPaneCenter})})).then(h.hitch(this,function(e){this._wireUpRelatedRecordsTable(e)}))}))},_generateFeatureLayer:function(e){var t=this.featureLayer._url.path;return t=t.substring(0,t.lastIndexOf("/")+1),t+=e,new T(t,{mode:T.MODE_ONDEMAND,outFields:["*"],visible:!0})},_updatePopupInfosDateFormat:function(e){return d.forEach(e,function(e){e.format&&e.format.dateFormat&&(e.format.dateFormat=this._popupDateFormats[e.format.dateFormat])},this),e},_showPane:function(e){_.set(e.domNode,"display","block")},_hidePane:function(e){_.set(e.domNode,"display","none")},_generateSubLayout:function(e){var t=new F({className:this.css.relatedBC,gutters:!1,design:"headline"}),n=new H({region:"leading",className:this.css.relatedCPLeading}),a=m.create("div",{},n.domNode),i=new H({region:"center",style:"display: none;"});return t.addChild(n),t.addChild(i),t.placeAt(e),t.startup(),{borderContainer:t,contentPaneLeading:n,contentPaneCenter:i,gridContainer:a}},_shrinkTable:function(e){var t=new i,n=e.table,a=e.leadingPane,o=e.centerPane,r=e.columnId,l=e.finalWidth||220,c=u.animateProperty({node:a.id,properties:{width:{start:function(){return a.domNode.getBoundingClientRect().width},end:h.hitch(this,function(){return l})}}}).play();return s(c,"End",h.hitch(this,function(e){this._addHiddenColumnRules(n,r),this._showPane(o),this._bcNode.resize(),n.resize(),this._activePromises.splice(d.indexOf(t),1),t.resolve(n)})),this._activePromises.push(t),t},_removeTable:function(e){var t,n,a=this.featureTable._findFirst(this._relatedTableInfos,"table",e),i=d.indexOf(this._relatedTableInfos,a),o=a.layout.contentPaneCenter;this._hidePane(o),this._bcNode.resize(),d.forEach(this._relatedTableInfos,function(e,t){if(t>=i){e.layout.borderContainer.destroy();var n=e.table;n.loaded&&n.dataStore?n.destroy():n.on("load",n.destroy)}}),this._relatedTableInfos.splice(i),this._relatedTableInfos.length>0?(n=this._relatedTableInfos[this._relatedTableInfos.length-1].table,t=this._relatedTableInfos[this._relatedTableInfos.length-1]):n=this.featureTable,this._growTable({table:n,info:t||[]})},_growTable:function(e){var t,n,a=e.table,i=e.info,o=a.columns,s=this._buttonInfos[a.id];this._removeHiddenColumnRules(a),s.column&&(this._removeButton(s.column),s.column=null),s.columnHider=this._generateColumnHiderButton(a),a===this.featureTable?(this._hidePane(this._cpCenterNode),_.set(this._cpLeadingNode.domNode,"width","100%"),this._bcNode.resize()):(t=i.layout.contentPaneLeading,n=i.layout.contentPaneCenter,this._hidePane(n),_.set(t.domNode,"width","100%"),this._bcNode.resize(),s.close=this._generateRelatedTableCloseButton(a)),"ft_related-records-small"===o[o.length-1].field&&(o.pop(),a.refresh()),a.grid.set("selectionMode","extended"),a.showFeatureCount=!0,a.showFieldDetails=!0,a._updateGridHeaderText(),a.resize()},_addHiddenColumnRules:function(e,t){this._columnRules[e.id]&&this._removeHiddenColumnRules(e);var n,a,i=Object.keys(e.grid.columns),o="#"+g.escapeCssIdentifier(e.id)+" .dgrid-column-",s=[];s=d.map(i,function(e,i){return n=o+g.escapeCssIdentifier(i,"-"),a=i===t,g.addCssRule(n,a?"display: table-cell;":"display: none;")}),this._columnRules[e.id]=s},_removeHiddenColumnRules:function(e){this._columnRules[e.id]&&(d.forEach(this._columnRules[e.id],function(e,t){e.remove()}),this._columnRules[e.id]=[])},_generateRelatedTableCloseButton:function(e){var t,n=e._gridHeaderNode.domNode;return t=m.create("div",{className:this.css.buttonNode+" "+this.css.iconUIClose,tabIndex:0},n),s(t,N,h.hitch(this,function(){this._removeButton(this._buttonInfos[e.id].close),this._removeTable(e)})),{buttonNode:t}},_generateColumnHiderButton:function(e){var t,n=e._gridHeaderNode.domNode;return t=m.create("div",{className:this.css.buttonNode+" "+this.css.iconUIMenu,tabIndex:0},n),s(t,N,function(){e.grid._toggleColumnHiderMenu()}),{buttonNode:t}},_generateColumnPickerButton:function(e){var t,n,a=e._gridHeaderNode.domNode;return n=this._generateColumnPickerMenu(e),t=m.create("div",{className:this.css.buttonNode+" "+this.css.iconUIDown,tabIndex:0},a),s(t,N,function(e){n._openMyself({target:e.target,delegatedTarget:t,iframe:null,coords:{x:e.pageX,y:e.pageY}})}),{buttonNode:t}},_generateColumnPickerMenu:function(e){var t=new C({className:this.css.columnChangeMenuNode});return d.forEach(e.columns,function(n,a){var i=parseInt(n.id,10),o=e._findFirst(e.layerInfo.fieldInfos,"name",n.field);if("ft_related-records"!==n.type&&"ft_related-records-small"!==n.field&&"ft_attachments"!==n.type&&"esriFieldTypeOID"!==o.type&&"esriFieldTypeGUID"!==o.type&&"esriFieldTypeGlobalID"!==o.type&&-1===d.indexOf(e._unsupportedFieldTypes,o.type)){var s=new v({label:n.label,onClick:h.hitch(this,function(){this._addHiddenColumnRules(e,i),this.emit("column-focus-change",{fieldInfo:o,column:n})})});t.addChild(s)}},this),t.startup(),t},_removeButton:function(e){e&&e.buttonNode&&e.buttonNode.parentNode&&e.buttonNode.parentNode.removeChild(e.buttonNode)}});return o("extend-esri")&&h.setObject("dijit.FeatureTableWrapper",L,y),L});