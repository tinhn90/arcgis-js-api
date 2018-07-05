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

define(["require","module","dojo/_base/array","dojo/_base/lang","dojo/has","dojo/Deferred","dojo/DeferredList","dojo/promise/all","dojo/when","dojo/on","dojo/json","../kernel","../Color","../numberUtils","../promiseList","../lang","../styles/type","../styles/size","../styles/choropleth","../styles/heatmap","../styles/predominance","../styles/relationship","../symbols/SimpleMarkerSymbol","../symbols/SimpleLineSymbol","../symbols/SimpleFillSymbol","../symbols/utils","./UniqueValueRenderer","./ClassBreaksRenderer","./HeatmapRenderer","./BlendRenderer","./utils","dojo/i18n!../nls/jsapi"],function(e,n,a,i,t,r,s,l,o,u,c,d,p,m,f,g,h,v,y,b,x,w,S,I,z,C,R,V,F,M,E,k){function T(e,n){e.reject(new Error(n))}function O(e,n){e.loaded?n.call():u.once(e,"load",n)}function P(e,n,a,i,t){var r,s,l=e.outline&&e.outline.color;switch(n=n?new p(n):null,l=l?new p(l):null,a){case"point":r=new S,r.setColor(n),r.setSize(null!=i?i:e.size),s=new I,s.setColor(l),s.setWidth(e.outline.width),r.setOutline(s);break;case"line":r=new I,r.setColor(n),r.setWidth(null!=i?i:e.width);break;case"polygon":r=new z,r.setColor(n),s=new I,s.setColor(l),s.setWidth(e.outline.width),null!=t&&s.color&&(s.color.a=t),r.setOutline(s)}return r}function q(e){var n=e.geometryType;return"esriGeometryPoint"===n||"esriGeometryMultipoint"===n?n="point":"esriGeometryPolyline"===n?n="line":("esriGeometryPolygon"===n||e.hasXYFootprint())&&(n="polygon"),n}function B(e,n){var a=e.scheme;return a?a=h.cloneScheme(a):(a=h.getSchemes({theme:e.theme||Pe,basemap:e.basemap,geometryType:n}),a=a&&a.primaryScheme),a}function D(e,n){return e.label<n.label?-1:e.label>n.label?1:0}function j(e,n){return e.value<n.value?-1:e.value>n.value?1:0}function L(e,n){var a=n.count-e.count;return 0===a&&(a=D(e,n)),a}function _(e,n){var a=n.count-e.count;return 0===a&&(a=j(e,n)),a}function H(e,n,a){var t;i.isFunction(n)?t=n:"count"===n?(t=_,a&&a.codedValues&&(t=L)):"value"===n&&(t=j,a&&a.codedValues&&(t=D)),t&&e.sort(t)}function A(e,n,t){var r,s,l,o,u,c,d=t.layer,p=t.field,m=i.isFunction(p),f=p&&!m?d.getField(p):null,g=f?d.getDomain(f.name):null,h=-1,v=null==t.numTypes?10:-1===t.numTypes?e.length:t.numTypes,y=null==t.showOthers||t.showOthers,b=null==t.sortBy?"count":t.sortBy,w=t&&t.labelCallback,S=q(d),I=B(t,S),z=n&&n.opacity,C=new R(null,p),V=t.customScheme,F=t.useSizeInfo;if(V){var M="polygon"===S,k=M&&F,T=V.sizeInfo,O=F?M?T.marker:T:null,D=k&&T?T.background:null;D&&(C.backgroundFillSymbol=P(D,D.color,"polygon",null,z)),c=M?k?O.size:null:"line"===S?V.width:V.size,u=c,I=V,S=k?"point":S}var j={domain:g,fieldInfo:f};for(a.forEach(e,function(e,n){j.value=e.value,e.label=E.createUniqueValueLabel(j),w&&(e.label=w(e)),null===e.value&&(h=n)}),h>-1&&(o=e.splice(h,1)[0]),!1!==t.sortEnabled&&H(e,b,g),f&&f.type===We&&(j.dateFormatInterval=E.calculateDateFormatInterval(a.map(a.filter(e,function(e,n){return n<v}),function(e){return e.value}))),l=ke.createColors(I.colors,e.length),a.forEach(e,function(e,n){j.value=e.value,e.label=E.createUniqueValueLabel(j),w&&(e.label=w(e)),e.symbol=P(I,l[n],S,c,z)}),t.valueExpression&&(C.setValueExpression(t.valueExpression),C.valueExpressionTitle=t.valueExpressionTitle),C.legendOptions=t.legendOptions,l=ke.createColors(I.colors,v),r=0;r<v;r++)(s=e[r])&&C.addValue({value:s.value,label:s.label,symbol:P(I,l[r],S,c,z)});return y&&(C.defaultSymbol=P(I,I.noDataColor,S,u,z),C.defaultLabel=Oe.other),o&&(o.symbol=P(I,I.noDataColor,S,u,z),e.push(o)),n&&n.widthInfo&&C.setVisualVariables([n.widthInfo]),{renderer:C,uniqueValueInfos:e,othersStartIndex:C.infos.length===e.length?-1:C.infos.length,scheme:V?x.cloneScheme(V):B(t,S)}}function W(e,n,a,i){var t=A(e.uniqueValueInfos,n,a);t.source=e.source,t.partialData=e.partialData,i.resolve(t)}function N(e,n,a){var i=e.scheme;return i?i=y.cloneScheme(i):(i=y.getSchemes({theme:a||e.theme||qe,basemap:e.basemap,geometryType:n}),i=i&&i.primaryScheme),i}function U(e,n){var a,i=e.avg,t=i-e.stddev,r=i+e.stddev;return t<e.min&&(t=e.min),r>e.max&&(r=e.max),n&&(i=t+(r-t)/2),a=m.round([t,r],{strictBounds:!0}),t=a[0],r=a[1],a=[t,t+(i-t)/2,i,i+(r-i)/2,r],m.round(a,{strictBounds:!0})}function Q(e,n,a){var i,t=(n-e)/(a-1),r=[e];for(i=1;i<=a-2;i++)r.push(e+i*t);return r.push(n),m.round(r,{strictBounds:!0})}function G(e,n,a,i){var t,r,s=e.statisticsPlugin.getSuggestedDataRange({statistics:n,isDate:a});return s.defaultStatistics?(t=s.min,r=s.max):!i||null!=n.avg&&n.stddev||(t=n.min,r=n.max),null!=t?[t,r]:null}function $(e,n,t,r,s){var l=null==r.useDefaultStatistics||r.useDefaultStatistics;if(e&&!e.count&&!l)return void T(s,"smartMapping.createColorInfo: cannot create renderer when statistics.count is 0.");var o,u,c,d=r.layer,f=r.field,g=i.isFunction(f),h=f&&!g?d.getField(f):null,v=h&&h.type===We,y=q(d),b=N(r,y),x=r.semiContinuous,w=n&&n.classBreakInfos,S=w&&w.length,I=n?S:5;if(!b)return void T(s,"smartMapping.createColorInfo: unable to find the specified scheme.");var z=b.id.indexOf("seq-")>-1,C=n&&z?pe(b,{length:I}):ke.createColors(b.colors,I);if(C.length<I)return void T(s,"smartMapping.createColorInfo: not enough colors in the scheme.");if(n){o=[];var R;1===S?(u=[w[0].minValue,w[0].maxValue],o=[0,1],R=ke.createColors(C,I)[0],c=[R,new p(R)]):x?(u=[],c=[],a.forEach(w,function(e,n){var a=e.maxValue-e.minValue,i=.1*a;0===n?u.push(e.minValue):u.push(e.minValue+i),n===S-1?u.push(e.maxValue):u.push(e.maxValue-i),R=new p(C[n]),c.push(R),c.push(new p(R)),o.push(2*n),o.push(2*n+1)})):(u=a.map(w,function(e,n){return o.push(n),(e.minValue+e.maxValue)/2}),c=ke.createColors(C,I)),u=m.round(u,{strictBounds:!0})}else{var V=l?G(d,e,v,!0):null;u=V?Q(V[0],V[1],5):U(e,z),o=[0,2,4],c=ke.createColors(C,I)}var F={type:"colorInfo",field:f,valueExpression:r.valueExpression,valueExpressionTitle:r.valueExpressionTitle,normalizationField:t,stops:E.createColorStops({values:u,isDate:v,dateFormatOptions:v?E.timelineDateFormatOptions:null,colors:c,labelIndexes:o}),legendOptions:r.legendOptions};s.resolve({colorInfo:F,statistics:e,classBreaks:n,scheme:N(r,y)})}function X(e,n,a,i,t,r){var s=t.layer,l=t.field,o=q(s),u=null==t.showOthers||t.showOthers,c=n&&n.opacity,d=y.cloneScheme(e.scheme),p=new V(null,l);t.valueExpression&&p.setValueExpression(t.valueExpression),u&&(p.defaultSymbol=P(d,d.noDataColor,o,null,c),p.defaultLabel=Oe.other),p.addBreak({minValue:-Te,maxValue:Te,symbol:P(d,d.noDataColor,o,null,c)}),p.normalizationType=a,p.normalizationField=i;var m=[E.cloneColorInfo(e.colorInfo)];n&&n.widthInfo&&m.push(n.widthInfo),p.setVisualVariables(m),r.resolve({renderer:p,colorInfo:E.cloneColorInfo(e.colorInfo),statistics:e.statistics,classBreaks:e.classBreaks,scheme:y.cloneScheme(e.scheme)})}function Y(e,n){var a=E.getClassValuesForRelationship();return a=i.clone(a[e]),w.flatten2DArray(a,n)}function J(e,n){var i=Y(e,n);return a.map(i,function(e){return{value:e,count:0}})}function K(e,n,i){var t=Y(n,i);e.sort(function(e,n){var i=a.indexOf(t,e.value),r=a.indexOf(t,n.value);return i<r?-1:i>r?1:0})}function Z(e){var n=e.field1.field,i=e.field2.field,t=e.field1.normalizationField,r=e.field2.normalizationField,s=a.map(e.breaks1,function(e){return[e.minValue,e.maxValue]}),l=a.map(e.breaks2,function(e){return[e.minValue,e.maxValue]}),o=s.length,u=E.getClassCodesForRelationship()[o];return["var field1 = $feature['"+n+"'];","var field2 = $feature['"+i+"'];","var hasNormField1 = "+(t?"true":"false")+";","var hasNormField2 = "+(r?"true":"false")+";","var normField1 = "+(t?"$feature['"+t+"']":"null")+";","var normField2 = "+(r?"$feature['"+r+"']":"null")+";","if (","  IsEmpty(field1) || ","  IsEmpty(field2) ||","  (hasNormField1 && (IsEmpty(normField1) || normField1 == 0)) ||","  (hasNormField2 && (IsEmpty(normField2) || normField2 == 0))",") {","  return null; ","}","var value1 = IIf(hasNormField1, (field1 / normField1), field1);","var value2 = IIf(hasNormField2, (field2 / normField2), field2);","var breaks1 = "+c.stringify(s)+";","var breaks2 = "+c.stringify(l)+";","var classCodes = "+c.stringify(u)+";","function getClassCode(value, breaks) {","  var code = null;","  for (var i in breaks) {","    var info = breaks[i];","    if (value >= info[0] && value <= info[1]) {","      code = classCodes[i];","      break;","    }","  }","  return code;","}","var code1 = getClassCode(value1, breaks1);","var code2 = getClassCode(value2, breaks2);","var classValue = IIf(IsEmpty(code1) || IsEmpty(code2), null, code1 + code2);","return classValue;"].join("\n")}function ee(){var e=Oe.relationship;return function(n){return e[n.value]}}function ne(e,n){var a=e.scheme;return a?a=w.cloneScheme(a):(a=w.getSchemes({theme:e.theme||Pe,basemap:e.basemap,geometryType:n}),a=a&&a.primaryScheme),a}function ae(e,n,i){return{type:"relationship",classificationMethod:Qe[e.classificationMethod]||null,numClasses:e.numClasses,focus:e.focus,field1:{field:e.field1.field,normalizationField:e.field1.normalizationField,classBreakInfos:a.map(n,Ge)},field2:{field:e.field2.field,normalizationField:e.field2.normalizationField,classBreakInfos:a.map(i,Ge)}}}function ie(e,n){var i=e.authoringInfo;if(!i)return void console.log("smartMapping.updateRelationshipRenderer: authoringInfo is missing.");i.numClasses=n.numClasses,i.focus=n.focus||null,i.focus||delete i.focus;var t=n.field1,r=n.field2;t&&r&&(i.field1={field:t.field,normalizationField:t.normalizationField,classBreakInfos:a.map(t.classBreakInfos,Ge)},i.field2={field:r.field,normalizationField:r.normalizationField,classBreakInfos:a.map(r.classBreakInfos,Ge)}),e.setAuthoringInfo(i)}function te(e,n,a,t,r){var s=n.numClasses,l=a.cbResponse.classBreakInfos,o=t.cbResponse.classBreakInfos;if(s===l.length&&l.length===o.length){var u=J(s,n.focus),c=Z({field1:n.field1,field2:n.field2,breaks1:l,breaks2:o}),d=ne(n,q(n.layer)),p=A(u,r,{layer:n.layer,valueExpression:c,valueExpressionTitle:Oe.relationship.legendTitle,labelCallback:ee(),numTypes:-1,showOthers:n.showOthers,sortEnabled:!1,customScheme:i.mixin({colors:w.getColors(d,s,n.focus)},d)});p.renderer.setAuthoringInfo(ae(n,l,o)),e.resolve({classBreaks:{field1:a.cbResponse,field2:t.cbResponse},renderer:p.renderer,uniqueValueInfos:p.uniqueValueInfos,scheme:w.cloneScheme(d)})}else T(e,"smartMapping.createRelationshipRenderer: incompatible class breaks.")}function re(e,n,a,t){var r=null==a.useDefaultStatistics||a.useDefaultStatistics;if(e&&!e.count&&!r)return void T(t,"smartMapping.createOpacityInfo: cannot create opacityInfo when statistics.count is 0.");var s=a.layer,l=a.field,o=l&&!i.isFunction(l)?s.getField(l):null,u=o&&o.type===We,c=a.useStdDev,d=c?U(e):null,p=r?G(s,e,u,c):null,m=p||(c?[d[0],d[4]]:[e.min,e.max]),f={type:"opacityInfo",field:l,valueExpression:a.valueExpression,valueExpressionTitle:a.valueExpressionTitle,normalizationField:n,stops:[{value:m[0],opacity:.3},{value:m[1],opacity:1}],legendOptions:a.legendOptions};t.resolve({opacityInfo:f,statistics:e,defaultStatistics:!!p})}function se(e,n){var a=e.scheme;return a?a=v.cloneScheme(a):(a=v.getSchemes({theme:e.theme||Be,basemap:e.basemap,geometryType:n}),a=a&&a.primaryScheme),a}function le(e,n){var a;switch(n){case"point":a=[e.minSize,e.maxSize];break;case"line":a=[e.minWidth,e.maxWidth];break;case"polygon":a=[e.marker.minSize,e.marker.maxSize]}return a}function oe(e,n,a,t,r){var s=null==t.useDefaultStatistics||t.useDefaultStatistics,l=n&&[n.minSize,n.maxSize];if(e&&!e.count&&!s)return void T(r,"smartMapping.createSizeInfo: cannot create renderer when statistics.count is 0.");var o=t.layer,u=t.field,c=u&&!i.isFunction(u)?o.getField(u):null,d=c&&c.type===We,p=q(o),m=se(t,p),f=l||le(m,p),g=t.useStdDev,h=g?U(e):null,v=s?G(o,e,d,g):null,y=v||(g?[h[0],h[4]]:[e.min,e.max]),b={type:"sizeInfo",field:u,valueExpression:t.valueExpression,valueExpressionTitle:t.valueExpressionTitle,valueUnit:"unknown",normalizationField:a,legendOptions:t.legendOptions,minSize:f[0],maxSize:f[1],minDataValue:y[0],maxDataValue:y[1]};r.resolve({sizeInfo:b,statistics:e,defaultStatistics:!!v,suggestedSizeRange:n,scheme:se(t,p)})}function ue(e,n,a,i,t,r){var s=t.layer,l=t.field,o=q(s),u=null==t.showOthers||t.showOthers,c=n&&n.opacity,d=v.cloneScheme(e.scheme),p="polygon"===o,m=p?d.marker:d,f=p?d.background:null,g="line"===o?m.noDataWidth:m.noDataSize,h=new V(null,l);t.valueExpression&&h.setValueExpression(t.valueExpression),u&&(h.defaultSymbol=P(m,m.noDataColor,p?"point":o,g),h.defaultLabel=Oe.other),h.addBreak({minValue:-Te,maxValue:Te,symbol:P(m,m.color,p?"point":o)}),f&&(h.backgroundFillSymbol=P(f,f.color,o,null,c)),h.normalizationType=a,h.normalizationField=i;var y=[E.cloneSizeInfo(e.sizeInfo)];n&&n.widthInfo&&y.push(n.widthInfo),h.setVisualVariables(y),r.resolve({renderer:h,sizeInfo:E.cloneSizeInfo(e.sizeInfo),statistics:e.statistics,defaultStatistics:e.defaultStatistics,suggestedSizeRange:e.suggestedSizeRange,scheme:v.cloneScheme(e.scheme)})}function ce(e,n,a){var i,t=[],r=1/(a+1);for(i=1;i<=a;i++)t.push(p.blendColors(e,n,r*i));return t}function de(e,n){var a=[];if(1===n)a=[e[0]];else if(2===n)a=[e[0],e[2]];else if(3===n)a=e;else{var i,t,r=n-e.length,s=r/2;r%2==0?(i=ce(e[0],e[1],s),t=ce(e[1],e[2],s)):(i=ce(e[0],e[1],Math.floor(s)),t=ce(e[1],e[2],Math.ceil(s))),a=[e[0]].concat(i).concat([e[1]]).concat(t).concat([e[2]])}return a}function pe(e,n,i){var t,r=n.length,s=-1;if(i&&a.some(n,function(e,n){return e.hasAvg&&(s=n),s>-1}),s>-1){var l=e.colors,o=s+1,u=r-s,c=l.slice(0,3),d=l.slice(2);c.reverse(),c=de(c,o),d=de(d,u),c.reverse(),t=[].concat(c).concat(d.slice(1))}else{var p=e.colorsForClassBreaks;if(p&&p.length>0&&(a.some(p,function(e){return e.numClasses===r&&(t=e.colors),!!t}),!t)){var m=p[p.length-1],f=r-m.numClasses;if(f>0){var g,h=m.colors[m.numClasses-1];for(t=m.colors.splice(0),g=1;g<=f;g++)t.push(h)}}}return t&&(t=ke.createColors(t,t.length)),t}function me(e,n,i,t){var r,s,l,o=i.layer,u=i.field,c=q(o),d=null==i.showOthers||i.showOthers,p=n&&n.opacity,m=i.classificationMethod||"equal-interval",f="standard-deviation"===m,g=i.normalizationType,h=e.classBreakInfos;return(r=N(i,c,"high-to-low"))?(s=pe(r,h))&&s.length==h.length?(l=new V(null,u),i.valueExpression&&(l.setValueExpression(i.valueExpression),l.valueExpressionTitle=i.valueExpressionTitle),l.legendOptions=i.legendOptions,l.classificationMethod=m,l.normalizationType=g,l.normalizationField="field"===g?i.normalizationField:void 0,l.normalizationTotal="percent-of-total"===g?e.normalizationTotal:void 0,d&&(l.defaultSymbol=P(r,r.noDataColor,c,null,p),l.defaultLabel=Oe.other),a.forEach(h,function(e,n){l.addBreak({minValue:e.minValue,maxValue:e.maxValue,symbol:P(r,s[n],c,null,p),label:e.label})}),f||E.setLabelsForClassBreaks({classBreaks:l.infos,classificationMethod:m,normalizationType:g,round:!0}),n&&n.widthInfo&&l.setVisualVariables([n.widthInfo]),e.renderer=l,e.scheme=N(i,c,"high-to-low"),void t.resolve(e)):void T(t,"smartMapping.createClassedColorRenderer: unable to find suitable colors for number of classes."):void T(t,"smartMapping.createClassedColorRenderer: unable to find suitable style scheme.")}function fe(e,n){return n.layer.statisticsPlugin.getClassBreaks(i.mixin(n,{classificationMethod:"equal-interval",numClasses:1,analyzeData:!1,minValue:e[0],maxValue:e[1],normalizationTotal:e[0]+e[1]}))}function ge(e){var n=new r,a=e.layer,i=null==e.useDefaultBreaks||e.useDefaultBreaks,t=e.optimizeOutline,l=[a.statisticsPlugin.getClassBreaks(e)];return t&&l.push(a.statisticsPlugin.getSuggestedOutline("object"==typeof t?t:null)),new s(l).then(function(r){var s=r[0],l=r[1],u=t&&l[0]?l[1]:null;if(s[0]||i&&!a.graphics.length){var c=s[1],d=i?G(a,c?{min:c.minValue,max:c.maxValue}:{}):null;d&&(c=fe(d,e)),o(c).then(function(e){e.defaultStatistics=!!d,n.resolve({cbResponse:e,suggestedOutline:u})}).otherwise(function(){T(n,"smartMapping: error when calculating default class breaks.")})}else T(n,"smartMapping: error when calculating class breaks.")}),n.promise}function he(e,n,a,i){var t,r=i||le(e,n),s=r[0],l=r[1],o=(l-s)/(a>=4?a-1:a),u=[];for(t=0;t<a;t++)u.push(s+o*t);return u}function ve(e,n,i,t,r){var s,l=t.layer,o=t.field,u=q(l),c=null==t.showOthers||t.showOthers,d=i&&i.opacity,p=t.classificationMethod||"equal-interval",m=t.normalizationType,f=e.classBreakInfos,g=se(t,u),h=he(g,u,f.length,n),v="polygon"===u,y=v?g.marker:g,b=v?g.background:null;s=new V(null,o),t.valueExpression&&(s.setValueExpression(t.valueExpression),s.valueExpressionTitle=t.valueExpressionTitle),s.legendOptions=t.legendOptions,s.classificationMethod=p,s.normalizationType=m,s.normalizationField="field"===m?t.normalizationField:void 0,s.normalizationTotal="percent-of-total"===m?e.normalizationTotal:void 0,c&&(s.defaultSymbol=P(y,y.noDataColor,v?"point":u),s.defaultLabel=Oe.other),b&&(s.backgroundFillSymbol=P(b,b.color,u,null,d)),a.forEach(f,function(e,n){s.addBreak({minValue:e.minValue,maxValue:e.maxValue,symbol:P(y,y.color,v?"point":u,h[n]),label:e.label})}),"standard-deviation"!==p&&E.setLabelsForClassBreaks({classBreaks:s.infos,classificationMethod:p,normalizationType:m,round:!0}),i&&i.widthInfo&&s.setVisualVariables([i.widthInfo]),e.renderer=s,e.scheme=se(t,u),r.resolve(e)}function ye(e){var n=e.scheme;return n?n=b.cloneScheme(n):(n=b.getSchemes({theme:e.theme||De,basemap:e.basemap}),n=n&&n.primaryScheme),n}function be(e,n,i){var t=null==n.useDefaultStatistics||n.useDefaultStatistics;if(!e.count&&!t)return void T(i,"smartMapping.createHeatmapRenderer: cannot create renderer when statistics.count is 0.");var r=e.fieldOffset,s=null==n.blurRadius?10:n.blurRadius,l=null==n.minRatio?.01:n.minRatio,o=null==n.maxRatio?1:n.maxRatio,u=null==n.fadeToTransparent||n.fadeToTransparent,c=ye(n),d=c.colors,m=d.length,f=!e.count&&t,g=f?[0,100]:[e.min,e.max],h=new F;h.setBlurRadius(s),h.setField(n.field),null!=r&&h.setFieldOffset(r),h.setMinPixelIntensity(g[0]),h.setMaxPixelIntensity(g[1]);var v=d[0],y=[{ratio:0,color:new p([v.r,v.g,v.b,0])},{ratio:je,color:new p([v.r,v.g,v.b,0])},{ratio:u?l:je,color:v}],b=(o-l)/(m-1);d=ke.createColors(d,m),a.forEach(d,function(e,n){y.push({ratio:l+b*n,color:e})}),h.setColorStops(y),i.resolve({renderer:h,statistics:e,defaultStatistics:f,scheme:ye(n)})}function xe(e,n,a){var i=e.scheme;return i?i=x.cloneScheme(i):(i=x.getSchemes({theme:e.theme||Pe,basemap:e.basemap,geometryType:n,numColors:a}),i=i&&i.primaryScheme),i}function we(e,n){var i={};return a.forEach(e,function(e){var a=n.getField(e.name);i[e.name]=e.label||a&&a.alias||e.name}),function(e){return i[e.value]}}function Se(e,n,i,t,s){var l=new r,o=e.layer;return o.statisticsPlugin.getPredominantCategories({fields:n}).always(function(r){r&&r.predominantCategoryInfos||(r={predominantCategoryInfos:a.map(n,function(e){return{value:e,count:0}})});var u=A(r.predominantCategoryInfos,s,{layer:o,valueExpression:t.valueExpression,valueExpressionTitle:Oe.predominantCategory,labelCallback:we(e.fields,o),numTypes:-1,showOthers:e.showOthers,sortBy:"count",customScheme:i,useSizeInfo:e.includeSizeInfo});u.predominantCategoryInfos=u.uniqueValueInfos,delete u.uniqueValueInfos,u.source=r.source,l.resolve(u)}),l.promise}function Ie(e,n,a,i){var t=new r;return ke.createSizeInfo({layer:e.layer,valueExpression:i.valueExpression,sqlExpression:i.statisticsQuery.sqlExpression,sqlWhere:i.statisticsQuery.sqlWhere,scheme:a,optimizeForScale:e.optimizeForScale}).then(function(e){e.sizeInfo.legendOptions={title:Oe.sumOfCategories},t.resolve(e)}).otherwise(function(e){T(t,"smartMapping.createPredominanceRenderer: error when calculating statistics for visual variable(size).")}),t.promise}function ze(e,n,a){var i=new r;return e.layer.statisticsPlugin.getFieldStatistics({valueExpression:a.valueExpression,sqlExpression:a.statisticsQuery.sqlExpression,sqlWhere:a.statisticsQuery.sqlWhere}).then(function(e){var t=null==e.avg||null==e.stddev,r=1/n.length*100,s=t?100:e.avg+1.285*e.stddev;s>100&&(s=100);var l=m.round([r,s],{strictBounds:!0});i.resolve({opacityInfo:{type:"opacityInfo",valueExpression:a.valueExpression,stops:[{value:l[0],opacity:.15},{value:l[1],opacity:1}],legendOptions:{title:Oe.strengthOfPredominance}},statistics:e,defaultStatistics:t})}).otherwise(function(e){T(i,"smartMapping.createPredominanceRenderer: error when calculating statistics for visual variable(opacity).")}),i.promise}function Ce(e,n,a,i){var t=n.length,r=q(e.layer),s=xe(e,r,t);e.layer.statisticsPlugin.getPredominanceExpressions({fields:n}).then(function(t){var r,l,o=Se(e,n,s,t.predominantCategory,a);e.includeSizeInfo&&(r=Ie(e,n,s.sizeInfo,t.size)),e.includeOpacityInfo&&(l=ze(e,n,t.opacity)),f([o,r,l]).then(function(e){var n,a=e[0],t=e[1],s=e[2],o=[];if(a instanceof Error)T(i,"smartMapping.createPredominanceRenderer: unable to create unique-value renderer.");else{if(n=a,r){if(t instanceof Error)return void T(i,"smartMapping.createPredominanceRenderer: unable to create visual variable for symbol size.");o.push(E.cloneSizeInfo(t.sizeInfo)),delete t.scheme,n.size=t}if(l){if(s instanceof Error)return void T(i,"smartMapping.createPredominanceRenderer: unable to create visual variable for symbol opacity.");o.push(E.cloneOpacityInfo(s.opacityInfo)),n.opacity=s}if(o.length){var u=n.renderer.visualVariables;u&&(Array.prototype.push.apply(u,o),o=u),n.renderer.setVisualVariables(o)}i.resolve(n)}})}).otherwise(function(e){T(i,"smartMapping.createPredominanceRenderer: unable to generate expressions.")})}function Re(e,n,i){var t=e;if("string"==typeof e){var r=i.getField(e);r&&r.type===We&&(t=i.getFieldLabel(r.name))}else if("number"==typeof e||e instanceof Date){var s=a.indexOf($e,n)>-1?null:"date";t=E.formatDate(e,{selector:s})}return t}function Ve(e,n,a){var t=n.startTime,r=n.endTime,s=n.layer;s.statisticsPlugin.getAgeExpressions({startTime:t,endTime:r,units:e.units}).then(function(n){var l=e,o=l.units,u="ageInfo_"+o;l.legendOptions={title:g.substitute({units:o,startTime:Re(t,o,s),endTime:Re(r,o,s)},Oe[u])},i.mixin(l,n),a.resolve(l)}).otherwise(function(e){T(a,"smartMapping.createAgeInfo: unable to generate expressions to calculate age.")})}function Fe(e,n){var i,t,r,s,l,o,u,c,d={};return i=a.filter(e,function(e){return t=e.name,r=t.toLowerCase(),o=t!==n&&-1===a.indexOf(_e,r),o&&(u=u||(a.indexOf(Ne,e.type)>-1?t:null),c=c||("esriFieldTypeString"===e.type?t:null)),o}),a.forEach(i,function(e){t=e.name,r=t.toLowerCase(),s=a.indexOf(Ne,e.type)>-1,s&&(d=Me(t,r,He,d,"number")),d.rank&&"string"!==d.fieldType||(l="esriFieldTypeString"===e.type)&&(d=Me(t,r,Ae,d,"string"))}),d.fieldName||u||c}function Me(e,n,a,i,t){var r=Ee(n,a);return r.exactRank>-1&&(!i.rank||i.fieldType!==t||"exact"===i.matchType&&i.fieldType===t&&i.rank>r.exactRank)?i={rank:r.exactRank,matchType:"exact",fieldType:t,fieldName:e}:r.containRank>-1&&(!i.rank||i.fieldType===t&&"contains"===i.matchType&&i.rank>r.containRank)&&(i={rank:r.containRank,matchType:"contains",fieldType:t,fieldName:e}),i}function Ee(e,n){var i,t=-1,r=-1;for(t=a.indexOf(n,e),i=0;i<n.length;i++)if(e.indexOf(n[i])>-1){r=i;break}return{exactRank:t,containRank:r}}var ke={},Te=Math.pow(2,53)-1,Oe=k.smartMapping,Pe="default",qe="high-to-low",Be="default",De="default",je=.01,Le=/(https?:)?\/\/services.*\.arcgis\.com/i,_e=["id","fips","fid","objectid","_objectid","__objectid","x","y","lat","long","latitude","longitude","shape","shape_length","shape_leng","shape_area","perimeter","stretched_value","fnode_","tnode_","lpoly_","rpoly_","poly_","subclass","rings_ok","rings_nok","st_length(shape)","st_area(shape)"],He=["count","percent","sum","elevation","value","valore","valoare","total","gesamt","score","income","age","expected","average","median","size","cost","expenditure","revenue","profit","growth","sale","quantity","population","price","unit","length","width","difference","distance"],Ae=["type","name","status","class","category","code","value","label","zone","symbol","color","owner","district","group","species","rating","score","party"],We="esriFieldTypeDate",Ne=["esriFieldTypeInteger","esriFieldTypeDouble","esriFieldTypeSingle","esriFieldTypeSmallInteger"],Ue=["HH","HL","LH","LL"],Qe={"equal-interval":"esriClassifyEqualInterval","natural-breaks":"esriClassifyNaturalBreaks",quantile:"esriClassifyQuantile"},Ge=function(e){return{minValue:e.minValue,maxValue:e.maxValue}},$e=["hours","minutes","seconds"],Xe=function(a){return e.toAbsMid?e.toAbsMid(a):n.id.replace(/\/[^\/]*$/gi,"/")+a}("../plugins/FeatureLayerStatistics");return i.mixin(ke,{createColors:function(e,n){var a,i=[],t=e.length;for(a=0;a<n;a++)i.push(new p(e[a%t]));return i},createTypeRenderer:function(e){var n=new r;if(!e||!e.layer||!e.field&&!e.valueExpression||!e.scheme&&!e.basemap)return T(n,"smartMapping.createTypeRenderer: missing parameters."),n.promise;var a=e.layer,i=e.optimizeOutline;return a.addPlugin(Xe).then(function(){var t=[a.statisticsPlugin.getUniqueValues({field:e.field,valueExpression:e.valueExpression,includeAllCodedValues:e.includeAllCodedValues})];i&&t.push(a.statisticsPlugin.getSuggestedOutline("object"==typeof i?i:null)),new s(t).then(function(a){var t=a[0],r=a[1],s=i&&r[0]?r[1]:null;t[0]?W(t[1],s,e,n):T(n,"smartMapping.createTypeRenderer: error when calculating unique values.")})}).otherwise(function(e){T(n,"smartMapping.createTypeRenderer: error when adding feature layer statistics plugin.")}),n.promise},createColorInfo:function(e){var n=new r;if(!(e&&e.layer&&(e.field||e.valueExpression||e.sqlExpression)))return T(n,"smartMapping.createColorInfo: missing parameters."),n.promise;var a=e.layer,i=e.normalizationField,t=i?"field":void 0;return e.statistics?$(e.statistics,null,i,e,n):a.addPlugin(Xe).then(function(){var r="group-similar"===e.theme||e.scheme&&0===e.scheme.id.indexOf("group-similar/");(r?a.statisticsPlugin.getClassBreaks({field:e.field,valueExpression:e.valueExpression,classificationMethod:"natural-breaks",numClasses:e.numGroups||5,normalizationType:t,normalizationField:i,minValue:e.minValue,maxValue:e.maxValue}):a.statisticsPlugin.getFieldStatistics({field:e.field,valueExpression:e.valueExpression,sqlExpression:e.sqlExpression,sqlWhere:e.sqlWhere,normalizationType:t,normalizationField:i,minValue:e.minValue,maxValue:e.maxValue})).then(function(a){var t,s;r?t=a:s=a,$(s,t,i,e,n)}).otherwise(function(e){T(n,r?"smartMapping.createColorInfo: error when calculating class breaks.":"smartMapping.createColorInfo: error when calculating field statistics.")})}).otherwise(function(e){T(n,"smartMapping.createColorInfo: error when adding feature layer statistics plugin.")}),n.promise},createColorRenderer:function(e){var n=new r;if(!(e&&e.layer&&(e.field||e.valueExpression||e.sqlExpression)))return T(n,"smartMapping.createColorRenderer: missing parameters."),n.promise;var a=e.layer,i=e.normalizationField,t=i?"field":void 0,l=e.optimizeOutline;return a.addPlugin(Xe).then(function(){var r=[ke.createColorInfo(e)];l&&r.push(a.statisticsPlugin.getSuggestedOutline("object"==typeof l?l:null)),new s(r).then(function(a){var r=a[0],s=a[1],o=l&&s[0]?s[1]:null;r[0]?X(r[1],o,t,i,e,n):T(n,"smartMapping.createColorRenderer: error when calculating colorInfo.")})}).otherwise(function(e){T(n,"smartMapping.createColorRenderer: error when adding feature layer statistics plugin.")}),n.promise},createRelationshipRenderer:function(e){var n=new r;if(!(e&&e.layer&&e.field1&&e.field2))return T(n,"smartMapping.createRelationshipRenderer: missing parameters."),n.promise;e=i.mixin({},e),e.classificationMethod=e.classificationMethod||"quantile",e.numClasses=e.numClasses||3,e.focus=e.focus||null;var t=e.classificationMethod,l=e.numClasses,o=e.layer;return"standard-deviation"===t||"geometrical-interval"===t?(T(n,"smartMapping.createRelationshipRenderer: classification method '"+t+"' is not supported."),n.promise):l<2||l>4?(T(n,"smartMapping.createRelationshipRenderer: numClasses must be 2, 3 or 4."),n.promise):e.focus&&-1===a.indexOf(Ue,e.focus)?(T(n,"smartMapping.createRelationshipRenderer: 'focus' must be 'HH', 'HL', 'LH', 'LL' or null."),n.promise):(o.addPlugin(Xe).then(function(){var a=e.field1,r=e.field2,u={layer:o,classificationMethod:t,numClasses:l},c=[ge(i.mixin({field:a.field,normalizationField:a.normalizationField,normalizationType:a.normalizationField?"field":null,minValue:a.minValue,maxValue:a.maxValue,analyzeData:!(null!=a.minValue&&null!=a.maxValue)},u)),ge(i.mixin({field:r.field,normalizationField:r.normalizationField,normalizationType:r.normalizationField?"field":null,minValue:r.minValue,maxValue:r.maxValue,analyzeData:!(null!=r.minValue&&null!=r.maxValue)},u))],d=e.optimizeOutline;d&&c.push(o.statisticsPlugin.getSuggestedOutline("object"==typeof d?d:null)),new s(c).then(function(a){var i=a[0],t=a[1];if(i[0]&&t[0]){var r=a[2],s=d&&r[0]?r[1]:null;te(n,e,i[1],t[1],s)}else T(n,"smartMapping.createRelationshipRenderer: error when calculating class breaks.")}).otherwise(function(e){var a=e&&e.message||"error when calculating components.";T(n,"smartMapping.createRelationshipRenderer: "+a)})}).otherwise(function(e){var a=e&&e.message||"error when adding feature layer statistics plugin.";T(n,"smartMapping.createRelationshipRenderer: "+a)}),n.promise)},updateRelationshipRenderer:function(e){if(!(e&&e.renderer&&e.numClasses))return void console.log("smartMapping.updateRelationshipRenderer: missing parameters: renderer, numClasses.");var n=e.field1,i=e.field2;if((n||i)&&!(n&&i&&n.field&&i.field))return void console.log("smartMapping.updateRelationshipRenderer: Both 'field1' and 'field2' are required.");if(n&&!n.classBreakInfos||i&&!i.classBreakInfos)return void console.log("smartMapping.updateRelationshipRenderer: 'field1' and/or 'field2' is missing 'classBreakInfos'");var t=e.renderer,r=e.numClasses,s=e.focus||null,l=Math.pow(r,2);if(t.infos.length!==l)return void console.log("smartMapping.updateRelationshipRenderer: invalid 'renderer.infos'. Must have "+l+" unique value infos.");var o,u=e.colors;if(u&&(u=a.map(u,function(e){return ke.createColors(e,e.length)}),o=w.flatten2DArray(u,s),o.length!==l))return void console.log("smartMapping.updateRelationshipRenderer: invalid 'colors'. Must have "+l+" colors.");if(n&&i){var c=Z({field1:n,field2:i,breaks1:n.classBreakInfos,breaks2:i.classBreakInfos});t.setValueExpression(c)}K(t.infos,r,s),o&&a.map(t.infos,function(e,n){C.setSymbolFillColor(e.symbol,o[n])}),ie(t,e)},createOpacityInfo:function(e){var n=new r;if(!(e&&e.layer&&(e.field||e.valueExpression||e.sqlExpression)))return T(n,"smartMapping.createOpacityInfo: missing parameters."),n.promise;var a=e.layer,i=e.normalizationField,t=i?"field":void 0;return e.statistics?re(e.statistics,i,e,n):a.addPlugin(Xe).then(function(){a.statisticsPlugin.getFieldStatistics({field:e.field,valueExpression:e.valueExpression,sqlExpression:e.sqlExpression,sqlWhere:e.sqlWhere,normalizationType:t,normalizationField:i,minValue:e.minValue,maxValue:e.maxValue,features:e.features}).then(function(a){re(a,i,e,n)}).otherwise(function(e){T(n,"smartMapping.createOpacityInfo: error when calculating field statistics.")})}).otherwise(function(e){T(n,"smartMapping.createOpacityInfo: error when adding feature layer statistics plugin.")}),n.promise},createBlendRenderer:function(e){var n,i,t=new r,s=this,o=[],u={},c=[],d=[],m=e.opacityValueCombinationMethod||"avg",f={};return e&&e.layer&&e.blendedFields?(e.basemap=e.basemap||"topo",i=q(e.layer),n=B({basemap:e.basemap},i),n.colors=[new p("#e60000"),new p("#0000e6"),new p("#00e600"),new p("#e67300"),new p("#a900e6")],f.fields=[],f.normalizationField=e.normalizationField,f.blendMode=e.blendMode||"source-over",f.symbol=P(n,n.noDataColor,e.markers?"point":i),u.layer=e.layer,u.normalizationField=e.normalizationField,u.useStdDev=e.useStdDev||!1,o=a.map(e.blendedFields,function(e,a){return f.fields.push({field:e,color:n.colors[a]}),u.field=e,s.createOpacityInfo(u)}),l(o).then(function(i){d[0]=i[0].opacityInfo.stops[0].value,d[1]=i[1].opacityInfo.stops[1].value,a.forEach(i.slice(0,1),function(e){var n=e.opacityInfo.stops[0].value,a=e.opacityInfo.stops[1].value;"union"===m?(d[0]=n<d[0]?n:d[0],d[1]=a>d[1]?a:d[1]):"avg"===m&&(d[0]+=e.opacityInfo.stops[0].value,d[1]+=e.opacityInfo.stops[1].value)}),c[0]={value:"avg"===m?d[0]/i.length:d[0],opacity:e.minOpacity?e.minOpacity:i[0].opacityInfo.stops[0].opacity},c[1]={
value:"avg"===m?d[1]/i.length:d[1],opacity:e.maxOpacity?e.maxOpacity:i[0].opacityInfo.stops[1].opacity},f.opacityStops=c,t.resolve({renderer:new M(f),scheme:n,opacityInfos:i})}),t.promise):(T(t,"smartMapping.createBlendRenderer: missing parameters."),t.promise)},createSizeInfo:function(e){var n=new r;if(!(e&&e.layer&&(e.field||e.valueExpression||e.sqlExpression)))return T(n,"smartMapping.createSizeInfo: missing parameters."),n.promise;var a=e.layer,i=e.normalizationField,t=i?"field":void 0,l=e.optimizeForScale;return e.statistics?oe(e.statistics,null,i,e,n):a.addPlugin(Xe).then(function(){var r=[a.statisticsPlugin.getFieldStatistics({field:e.field,valueExpression:e.valueExpression,sqlExpression:e.sqlExpression,sqlWhere:e.sqlWhere,normalizationType:t,normalizationField:i,minValue:e.minValue,maxValue:e.maxValue})];l&&r.push(a.statisticsPlugin.getSuggestedSizeRange({optimizeForScale:!0===l?"map-scale":l})),new s(r).then(function(a){var t=a[0],r=l&&a[1],s=l&&r[0]?r[1]:null;t[0]?oe(t[1],s,i,e,n):T(n,"smartMapping.createSizeInfo: error when calculating field statistics.")})}).otherwise(function(e){T(n,"smartMapping.createSizeInfo: error when adding feature layer statistics plugin.")}),n.promise},createSizeRenderer:function(e){var n=new r;if(!(e&&e.layer&&(e.field||e.valueExpression||e.sqlExpression)))return T(n,"smartMapping.createSizeRenderer: missing parameters."),n.promise;var a=e.layer,i=e.normalizationField,t=i?"field":void 0,l=e.optimizeOutline;return a.addPlugin(Xe).then(function(){var r=[ke.createSizeInfo(e)];l&&r.push(a.statisticsPlugin.getSuggestedOutline("object"==typeof l?l:null)),new s(r).then(function(a){var r=a[0],s=a[1],o=l&&s[0]?s[1]:null;r[0]?ue(r[1],o,t,i,e,n):T(n,"smartMapping.createSizeRenderer: error when calculating sizeInfo.")})}).otherwise(function(e){T(n,"smartMapping.createSizeRenderer: error when adding feature layer statistics plugin.")}),n.promise},createClassedColorRenderer:function(e){var n,a=new r,t=e.minValue,s=e.maxValue;return e&&e.layer&&(e.field||e.valueExpression)?(n=null!=t&&null!=s)||null==t&&null==s?(e=i.mixin({analyzeData:!n},e),e.layer.addPlugin(Xe).then(function(){ge(e).then(function(n){me(n.cbResponse,n.suggestedOutline,e,a)}).otherwise(function(e){T(a,"smartMapping.createClassedColorRenderer: error when calculating class breaks.")})}).otherwise(function(e){T(a,"smartMapping.createClassedColorRenderer: error when adding feature layer statistics plugin.")}),a.promise):(T(a,"smartMapping.createClassedColorRenderer: both minValue and maxValue are required when specifying custom data range."),a.promise):(T(a,"smartMapping.createClassedColorRenderer: missing parameters."),a.promise)},createClassedSizeRenderer:function(e){var n,a=new r,t=e.minValue,s=e.maxValue;if(!e||!e.layer||!e.field&&!e.valueExpression)return T(a,"smartMapping.createClassedSizeRenderer: missing parameters."),a.promise;if(!(n=null!=t&&null!=s)&&(null!=t||null!=s))return T(a,"smartMapping.createClassedColorRenderer: both minValue and maxValue are required when specifying custom data range."),a.promise;e=i.mixin({analyzeData:!n},e);var l=e.layer;return l.addPlugin(Xe).then(function(){ge(e).then(function(n){e.optimizeForScale?l.statisticsPlugin.getSuggestedSizeRange().then(function(i){var t=[i.minSize,i.maxSize];ve(n.cbResponse,t,n.suggestedOutline,e,a)}).otherwise(function(i){ve(n.cbResponse,null,n.suggestedOutline,e,a)}):ve(n.cbResponse,null,n.suggestedOutline,e,a)}).otherwise(function(e){T(a,"smartMapping.createClassedSizeRenderer: error when calculating class breaks.")})}).otherwise(function(e){T(a,"smartMapping.createClassedSizeRenderer: error when adding feature layer statistics plugin.")}),a.promise},createHeatmapRenderer:function(e){var n=new r;if(!e||!e.layer)return T(n,"smartMapping.createHeatmapRenderer: missing parameters."),n.promise;var a=e.layer;return e.statistics?be(e.statistics,e,n):a.addPlugin(Xe).then(function(){a.statisticsPlugin.getHeatmapStatistics(e).then(function(a){be(a,e,n)}).otherwise(function(e){T(n,"smartMapping.createHeatmapRenderer: error when calculating heatmap statistics.")})}).otherwise(function(e){T(n,"smartMapping.createHeatmapRenderer: error when adding feature layer statistics plugin.")}),n.promise},applyHeatmapScheme:function(e){if(!(e&&e.renderer&&e.scheme))return void console.log("smartMapping.applyHeatmapScheme: missing parameters.");var n=ye({scheme:e.scheme}),t=e.renderer,r=t.colorStops,s=n.colors;if(r.length!==s.length+3)return void console.log("smartMapping.applyHeatmapScheme: incompatible number of colors in 'colors' and 'renderer.colorStops'.");var l,o=new p(s[0]),u=a.map(r,function(e){return i.mixin({},e)});for(u[0].color=new p([o.r,o.g,o.b,0]),u[1].color=new p([o.r,o.g,o.b,0]),u[2].color=o,l=3;l<u.length;l++)u[l].color=s[l-3];t.setColorStops(u)},sampleSize:500,createPredominanceRenderer:function(e){var n=new r;if(!(e&&e.layer&&e.fields&&e.fields.length>1))return T(n,"smartMapping.createPredominanceRenderer: missing parameters."),n.promise;if(e.fields.length>10)return T(n,"smartMapping.createPredominanceRenderer: too many fields. Maximum supported is 10."),n.promise;var i=e.layer;return i.addPlugin(Xe).then(function(){var t=a.map(e.fields,function(e){return e.name});O(i,function(){var r=i.getOutFields()||[],s=-1!==a.indexOf(r,"*"),l=e.optimizeOutline,u=s?null:a.filter(t,function(e){return-1===a.indexOf(r,e)});if(!i.url||i._collection||Le.test(i.url))if(u&&u.length)T(n,"smartMapping.createPredominanceRenderer: make sure the layer is configured to fetch all fields specified in parameters.");else{var c=l?i.statisticsPlugin.getSuggestedOutline("object"==typeof l?l:null):null;o(c).always(function(a){a&&!a.widthInfo&&(a=null),Ce(e,t,a,n)})}else T(n,"smartMapping.createPredominanceRenderer: predominance renderer is not supported for this layer. Make sure the layer supports advanced SQL expressions and standardized queries.")})}).otherwise(function(e){T(n,"smartMapping.createPredominanceRenderer: error when adding feature layer statistics plugin.")}),n.promise},createAgeInfo:function(e){var n=new r;if(!(e&&e.layer&&e.startTime&&e.endTime))return T(n,"smartMapping.createAgeInfo: missing parameters."),n.promise;var a=e.layer;return a.addPlugin(Xe).then(function(){var i=e.units?{units:e.units}:a.statisticsPlugin.getSuggestedAgeUnits({startTime:e.startTime,endTime:e.endTime});o(i).then(function(a){Ve(a,e,n)}).otherwise(function(e){T(n,"smartMapping.createAgeInfo: unable to calculate age units.")})}).otherwise(function(e){T(n,"smartMapping.createAgeInfo: error when adding feature layer statistics plugin.")}),n.promise},excludedFields:_e,getSuggestedField:function(e){var n=new r;return e&&(e.layer||e.fields&&e.objectIdField)?(e.layer?O(e.layer,function(){n.resolve(Fe(e.layer.fields,e.layer.objectIdField))}):n.resolve(Fe(e.fields,e.objectIdField)),n.promise):(T(n,"smartMapping.getSuggestedField: missing parameters."),n.promise)}}),t("extend-esri")&&i.setObject("renderer.smartMapping",ke,d),ke});