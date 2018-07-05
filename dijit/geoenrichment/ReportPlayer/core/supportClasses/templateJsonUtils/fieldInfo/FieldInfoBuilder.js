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

define(["./utils","dojo/i18n!esri/nls/jsapi"],function(e,a){function t(e){Object.keys(e).forEach(function(a){var t=e[a];void 0!==t&&null!==t||delete e[a]})}a=a.geoenrichment.dijit.ReportPlayer.ReportPlayer;var i={};i.NUMBER="n/",i.createFieldInfoFromCalculator=function(a,i,r){if(!a)return null;var l=r&&r.format,n=r&&r.autoformatCurrency,o=r&&r.additionalText,s=r&&r.calculatorName,u=r&&r.defaultDistanceUnits,c={comparisonIndex:r&&r.comparisonIndex};c.alias=a.getDescriptionWithType()||a.getAliasWithType();var m=a.variable;c.hasVariable=!0,c.variableID=m.id,c.fullName=m.fullName,c.fieldCategory=m.fieldCategory,c.vintage=m.vintage,c.type=m.type;var d=a.getToggleGroup&&a.getToggleGroup();c.statefulName=d?d.value:"n/"+m.fullName;var f=a.getCalcType().charAt(0);return c.name=e.name.createFieldNameFromVariable(m,f),l?e.format.setFieldInfoFormat(c,l):(c.decimals=a.getDecimals(),c.showCurrency=!(!n||"n"!==f||!m.units||"CURRENCY"!==m.units.toUpperCase()),c.showPercent=!c.showCurrency&&("p"===f||"n"===f&&m.units&&"PCT"===m.units.toUpperCase()),c.useThousandsSeparator=!0),"string"==typeof o&&(c.additionalText=o),m.isWebMap?(c.isWebMap=!0,c.webMapFieldName=m.fieldName,c.webMapField=m.field,c.webMapId=m.webMapId,!l&&m.field&&m.field.format&&(c.decimals=m.field.format.places,c.useThousandsSeparator=!1!==m.field.format.digitSeparator)):m.customDataCollection?(c.isCustomDataCollection=!0,c.customDataCollectionId=m.customDataCollection.id,c.customDataCollectionUrl=m.customDataCollection.url,c.customDataCollectionPortalUrl=m.customDataCollection.portalUrl):m.isSiteAttribute?(c.isSiteAttribute=!0,c.attribute=m.attribute,!l&&m.attribute.places>0&&(c.decimals=m.attribute.places)):m.isDataLayerAttribute&&(c.isDataLayerAttribute=!0,c.layerID=m.layerID,c.layerUrl=m.layerUrl,c.layerName=m.layerName,c.attribute=m.attribute,c.type=m.attribute.type,!l&&m.attribute.decimals>0&&(c.decimals=m.attribute.decimals),"DISTANCE"===m.attribute.name&&(c.units=m.attribute.units||u||"esriMiles")),c.usedFields=m.usedFields,c.expressionText=m.expressionText,e.name.provideQualifiedFieldInfoTemplateName(c,s),t(c),c},i.createFieldInfoFromScript=function(i,r,l){var n=l&&l.format,o=l&&l.additionalText,s=l&&l.calculatorName;i=i||{},i.name=i.name||e.name.DEFAULT_SCRIPT_NAME,i.alias=i.alias||a.scriptNameDefault,i.decimals=Number(i.decimals)||0;var u={comparisonIndex:l&&l.comparisonIndex};return u.name=e.name.createFieldNameFromScript(i),e.name.provideQualifiedFieldInfoTemplateName(u,s),u.script=i,n?e.format.setFieldInfoFormat(u,n):(u.decimals=Number(i.decimals),u.showCurrency=!1,u.showPercent=!1,u.useThousandsSeparator=!0),"string"==typeof o&&(u.additionalText=o),t(u),u},i.createFieldInfoFromChart=function(e){return{isChart:!0,chartJson:e}},i.createFieldInfoFromImage=function(e,a){return{isImage:!0,imageJson:e,triggerJson:a}},i.createFieldInfoFromShape=function(e){return{isShape:!0,shapeJson:e}},i.createFieldInfoFromSection=function(e){return{isReportSection:!0,sectionJson:e}},i.createFieldInfoFromInfographic=function(e){return{isInfographic:!0,infographicJson:e}},i.createFieldInfoFromMissingVariable=function(e){return{isMissing:!0,variable:e,alias:e.alias}};var r=/^\[\w+\]$/,l=/\[\w+\]/;i.createFieldInfoFromLabel=function(a,t){if("string"!=typeof a)return null;a=a.trim();var n=r.test(a);if(!t||n)return n?(a=a.replace(/\[|\]/g,"").toUpperCase(),i.createFieldInfoFromSpecialFieldName(e.fields.uiToTemplate(a))):null;if(!l.test(a))return null;var o=e.richText.collectFieldInfosFromRenderedXMLString(a);return o&&e.richText.createFieldInfoFromRichText(o.xmlString,o.fieldInfos,o.specialFieldInfos)},i.createFieldInfoFromSpecialFieldName=function(a,t){if("string"!=typeof a)return null;var i,a=a.substr(a.indexOf(".")+1),r=a.toUpperCase();if(function(){"CURRDATE"===r?i={name:e.fields.DATE_FIELD_NAME,alias:e.fields.DATE_FIELD_ALIAS,format:t||e.fields.DATE_FIELD_DEFAULT_FORMAT}:"SITENOTE"===r?i={name:e.fields.SITENOTE_FIELD_NAME,alias:e.fields.SITENOTE_FIELD_ALIAS}:"SITENOTES"===r&&(i={name:e.fields.SITENOTES_FIELD_NAME,alias:e.fields.SITENOTES_FIELD_ALIAS})}(),i)return i;var l=e.fields.templateToUIHeader(r);if(l)i={name:e.fields.qualifyTemplateHeaderName(r),alias:l};else{var n=e.fields.templateToUIReportVar(r);n&&(i={name:n,alias:n})}return i};var n=/_P$/i;return i.isFieldInfoInPercentState=function(e){return e&&e.statefulName&&("p"===e.statefulName.charAt(0)||n.test(e.statefulName))},i});