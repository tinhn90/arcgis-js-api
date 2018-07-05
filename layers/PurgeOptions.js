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

define(["dojo/_base/declare","dojo/_base/lang","dojo/Stateful","dojo/has","../kernel"],function(e,t,r,s,n){var o=e([r],{declaredClass:"esri.layers.PurgeOptions",constructor:function(e,t){this.parent=e;var r;for(r in t)this[r]=t[r]},_displayCountSetter:function(e){this.displayCount=e,this.parent.refresh()}});return s("extend-esri")&&t.setObject("layers.PurgeOptions",o,n),o});