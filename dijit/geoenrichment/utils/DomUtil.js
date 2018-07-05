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

define(["dojo/_base/lang","dojo/dom-attr","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dojo/string","dojo/domReady!"],function(e,n,t,r,o,i,d){function a(){return u||(u=r.create("div",{class:"esriGEOffscreen"},document.body)),u}var l={};l.isHidden=function(e){return e&&t.contains(e,"esriGEHidden")},l.hasVisibleChildren=function(e){if(!e||!e.children.length)return!1;for(var n=0;n<e.children.length;n++)if(!l.isHidden(e.children[n]))return!0;return!1},l.hide=function(e){return l.addTag(e,"esriGEHidden")},l.show=function(e){return l.removeTag(e,"esriGEHidden")},l.addTag=function(e,n){return l.applyCallback(e,function(e){e&&t.add(e,n)})},l.removeTag=function(e,n){return l.applyCallback(e,function(e){e&&t.remove(e,n)})},l.applyCallback=function(n,t,r){return r&&(t=e.hitch(r,t)),Array.isArray(n)?n.forEach(t):t(n),n},l.getChildIndex=function(e,n){if(!e||!e.children||!n)return-1;for(var t=0;t<e.children.length;t++)if(e.children[t]===n)return t;return-1},l.getChildren=function(e){if(!e||!e.children)return null;for(var n=[],t=0;t<e.children.length;t++)n.push(e.children[t]);return n},l.getChildNodes=function(e){if(!e||!e.childNodes)return null;for(var n=[],t=0;t<e.childNodes.length;t++)n.push(e.childNodes[t]);return n},l.isChildOf=function(e,n,t){var r=!1,o=function(e){if(t&&!t(e))return!1;e.parentNode===n?r=!0:e.parentNode&&o(e.parentNode)};return e&&o(e),r},l.isNodeInLayout=function(e){return l.isChildOf(e,document.body,function(e){return!l.isHidden(e)&&"none"!=i.get(e,"display")})},l.enableContent=function(e,n,d){if(e){d=d||{};var a=e.children.length-1;if(!(a<0)){var l=e.children[a];if(t.contains(l,"esriGEDisabledContent")||(l=null),n)l&&e.removeChild(l);else if(l=l||r.create("div",{class:"esriGEDisabledContent"+(d.overlayClass?" "+d.overlayClass:"")},e),!1!==d.fitParent){var u=o[d.marginBox?"getMarginBox":"getContentBox"](e).h;u&&(u=u.toString()+"px",i.set(l,{height:u,marginTop:"-"+u}))}return l}}},l.enableContentAbsolute=function(e,n,t){if(e){t=t||{};var r=i.get(e,"position");return"relative"!==r&&"absolute"!==r&&i.set(e,"position","relative"),l.enableContent(e,n,{overlayClass:"esriGEAbsoluteStretched "+(t.overlayClass||"")+(t.isTransparent?" esriGEDisabledContentTransparent ":""),fitParent:!1})}};var u;return l.hideNodeInBackground=function(e,t){if(e){if(e._hideNodeInBackgroundUndoController)return e._hideNodeInBackgroundUndoController;var o=r.create("div",null,e,"after"),i=r.create("div",{style:"position: absolute; left: 0px; top: 0px;"},a());r.place(e,i);var d="DomUtil.hideNodeInBackground"+(t?"."+t:"");n.set(o,"_bg_memo_node",d),n.set(i,"_bg_temp_node",d);var l={undo:function(){o&&(o.parentNode&&r.place(e,o,"replace"),r.destroy(o),r.destroy(i),u.children.length||(r.destroy(u),u=null),o=null,delete e._hideNodeInBackgroundUndoController)},remove:function(){this.undo()}};return e._hideNodeInBackgroundUndoController=l,l}},l.showNodeFromBackground=function(e){e&&e._hideNodeInBackgroundUndoController&&e._hideNodeInBackgroundUndoController.undo()},l.position=function(e){function n(e){for(var n={x:0,y:0},t=e;t.offsetParent;)n.x+=t.offsetLeft,n.y+=t.offsetTop,t=t.offsetParent,n.x+=i.get(t,"borderLeftWidth"),n.y+=i.get(t,"borderTopWidth");return n}if(e){var t;if(e instanceof SVGElement&&e.getBBox){var r=e.ownerSVGElement&&e.ownerSVGElement.parentNode;t=r&&n(r);var o=e.getBBox();return{x:(o.x||0)+t.x,y:(o.y||0)+t.y,w:o.width||0,h:o.height||0}}return t=n(e),{x:t.x,y:t.y,w:function(e){return i.get(e,"width")+i.get(e,"paddingLeft")+i.get(e,"paddingRight")+i.get(e,"borderLeftWidth")+i.get(e,"borderRightWidth")}(e),h:function(e){return i.get(e,"height")+i.get(e,"paddingTop")+i.get(e,"paddingBottom")+i.get(e,"borderTopWidth")+i.get(e,"borderBottomWidth")}(e)}}},l.intersectNodeBoxes=function(e,n){var t=1e6,r=1e6,o=-1e6,i=-1e6;e.forEach(function(e){var n=l.position(e);t=Math.min(t,n.x),r=Math.min(r,n.y),o=Math.max(o,n.x+n.w),i=Math.max(i,n.y+n.h)});var d={x:t,y:r,w:o-t,h:i-r};if(n){var a=l.position(n);d.x-=a.x,d.y-=a.y}return d},l.getNodesBox=function(e){var n=1e6,t=-1e6,r=1e6,i=-1e6;return e.forEach(function(e){var d=o.position(e);n=Math.min(n,d.x),r=Math.min(r,d.y),t=Math.max(t,d.x+d.w),i=Math.max(i,d.y+d.h)}),{x:n,y:r,w:t-n,h:i-r}},l.traverseChildren=function(e,n){function t(e){if(e&&e.children)for(var r=0;r<e.children.length;r++){var o=e.children[r];if(n(o))return;t(o)}}t(e)},l.scrollToListNode=function(e,n,t){var r=n.offsetTop+n.clientHeight,o=e.scrollTop+e.clientHeight,i=r-o;i>0&&(e.scrollTop+=i),t&&(r-=n.clientHeight-t.offsetTop,(i=e.scrollTop-r)>0&&(e.scrollTop-=i))},l.getMeasureContext=function(e){return e=e||{},e.style=e.style?e.style+" ":"",e.style+="display: inline-block; position: absolute; left: 0; top: 0;",{div:r.create("div",e,document.body),measureText:function(e){this.div.innerHTML=e;var n=o.getMarginBox(this.div);return delete n.l,delete n.t,n},destroy:function(){r.destroy(this.div)}}},l.getTextBox=function(e,n){var t=l.getMeasureContext(n),r=t.measureText(e);return t.destroy(),r},l});