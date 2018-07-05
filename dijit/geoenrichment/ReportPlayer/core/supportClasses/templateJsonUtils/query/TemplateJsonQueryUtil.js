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

define(["./_SectionJsonCollector","../../../infographics/InfographicTypes"],function(o,e){var n={},s="field",c={process:function(o,e,n,s,i){var t=s;s=function(o,e,n){o&&t.apply(this,arguments)};var r={processLevel:e,objJson:n,processFunc:s,ignoreComparisonCalculators:i&&i.ignoreComparisonCalculators};if(o===e)return void s(n);"document"===o?c._processTemplateJson(n,r):"section"===o?c._processSectionJson(n,r):"table"===o?c._processTableJson(n,r):"tableRow"===o&&c._processTableDataObj(n,r)},_processTemplateJson:function(e,n){o.collectSectionJsons(e,{saveParentInfo:!1,processFieldInfoFunc:function(o){n.processLevel===s&&n.processFunc(o)}}).forEach(function(o){c._processSectionJson(o,n)})},_processSectionJson:function(o,e){if("section"===e.processLevel)return void e.processFunc(o);o.stack.forEach(function(o){"sectionElement"===e.processLevel?e.processFunc(o):"table"===o.id&&("table"===e.processLevel?e.processFunc(o):c._processTableJson(o,e))})},_processTableJson:function(o,e,n){o.data.data.forEach(function(o){"tableRow"===e.processLevel?(e.processFunc(o,n),c._processTableDataObj(o,e,n)):c._processTableDataObj(o,e,n)}),o.backgroundSectionJson&&c._processSectionJson(o.backgroundSectionJson,e),o.foregroundSectionJson&&c._processSectionJson(o.foregroundSectionJson,e),o.backgroundFloatingTablesSectionJson&&c._processSectionJson(o.backgroundFloatingTablesSectionJson,e),o.foregroundFloatingTablesSectionJson&&c._processSectionJson(o.foregroundFloatingTablesSectionJson,e)},_processTableDataObj:function(o,e,n){if(o.fieldInfos)for(var s in o.fieldInfos)c._processFieldInfo(o.fieldInfos[s],e,n)},_processFieldInfo:function(o,e,n){function i(o,n){e.processLevel===s&&e.processFunc(o,n)}if(o){if(i(o,n),function(o){o&&o.triggerJson&&o.triggerJson.fieldInfo&&o.templateName!==o.triggerJson.fieldInfo.templateName&&i(o.triggerJson.fieldInfo,o)}(o),o.linkFieldInfo&&i(o.linkFieldInfo,o),o.isInfographic&&c._processInfographicFieldInfo(o,e),o.isRichText&&(o.richTextJson.fieldInfos.forEach(function(n){c._processFieldInfo(n,e,o)}),o.richTextJson.specialFieldInfos.forEach(function(n){c._processFieldInfo(n,e,o)})),o.isChart){var t=o.chartJson.visualProperties;t.chartIcons&&t.chartIcons.forEach(function(n){c._processFieldInfo(n,e,o)}),t.floatingIcons&&t.floatingIcons.forEach(function(n){c._processTableJson(n,e,o)}),t.floatingTexts&&t.floatingTexts.forEach(function(n){c._processTableJson(n,e,o)}),o.chartJson.seriesItems.forEach(function(n){n.points.forEach(function(n){e.ignoreComparisonCalculators&&o.chartJson.comparisonInfo||c._processFieldInfo(n.fieldInfo,e,o),n.iconFieldInfo&&c._processFieldInfo(n.iconFieldInfo,e,o),n.captionFieldInfo&&c._processFieldInfo(n.captionFieldInfo,e,o)})})}o.isReportSection&&o.sectionJson&&c._processSectionJson(o.sectionJson,e)}},_processInfographicFieldInfo:function(o,n){var s=o.infographicJson;switch(s.type){case e.STATIC:if(s.header&&c._processTableJson(s.header,n,o),s.variableTables&&s.variableTables.forEach(function(e){e.variable&&c._processFieldInfo(e.variable.fieldInfo,n,o),e.description&&e.description.fieldInfo&&c._processFieldInfo(e.description.fieldInfo,n,o)}),s.dataDrilling)for(var i in s.dataDrilling){var t=s.dataDrilling[i];t&&t.sectionJson&&c._processSectionJson(t.sectionJson,n)}break;case e.AREA_DETAILS:s.header&&c._processTableJson(s.header,n,o);break;case e.AGE_PYRAMID:case e.TAPESTRY:case e.RELATED_VARS:case e.ONE_VAR:!n.ignoreComparisonCalculators&&s.fieldInfos&&s.fieldInfos.forEach(function(e){c._processFieldInfo(e,n,o)});break;case e.LOCATOR_TABLE:c._processSectionJson(s.headerSectionJson,n),c._processSectionJson(s.dataSectionJson,n)}}};return n.DOCUMENT="document",n.SECTION="section",n.TABLE="table",n.SECTION_ELEMENT="sectionElement",n.TABLE_ROW="tableRow",n.FIELD=s,n.process=c.process,n.processTemplateFieldInfos=function(o,e,n){c.process("document",s,o,e,n)},n.processSectionFieldInfos=function(o,e,n){c.process("section",s,o,e,n)},n.processSectionElements=function(o,e){c.process("document","sectionElement",o,e)},n.processTableFieldInfos=function(o,e,n){c.process("table",s,o,e,n)},n.hasMultiFeatureChart=function(o){var e=!1;return n.processSectionFieldInfos(o,function(o){e=e||o.isChart&&o.chartJson&&!!o.chartJson.isMultiFeatureChart}),e},n.isGraphicReport=function(o){return!!o.sectionsTables},n.hasDynamicColumns=function(o){return n._checkTableAttributes(o,function(o){return o.dynamicColumns>0})},n.hasDynamicRows=function(o){return n._checkTableAttributes(o,function(o){return o.dynamicRows>0})},n._checkTableAttributes=function(e,n){return o.collectSectionJsons(e).some(function(o){return o.stack.some(function(o){if("table"===o.id)return!(!o.attributes||!n(o.attributes))||void 0})})},n.collectSectionJsons=o.collectSectionJsons,n.getParentBox=o.getParentBox,n.getParentStyle=o.getParentStyle,n});