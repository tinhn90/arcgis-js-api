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

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/_base/connect","dojo/_base/array","dojo/_base/window","dojo/_base/kernel","dojo/has","dojo/query","dojo/dom","dojo/dom-attr","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","../InfoWindowBase","../PopupBase","./InfoView","./NavigationBar","../kernel","../domUtils","dojo/i18n!../nls/jsapi","dojo/NodeList-dom"],function(t,i,e,o,n,s,h,a,d,r,p,c,l,u,g,f,_,v,m,w,x,I){var B=i([f,_],{declaredClass:"esri.dijit.PopupMobile",offsetX:3,offsetY:3,zoomFactor:4,marginLeft:10,marginTop:10,highlight:!0,popupNavigationBar:null,popupInfoView:null,location:null,xIcon:t.toUrl("./images/whitex.png"),dArrowIcon:t.toUrl("./images/whitedown.png"),lArrowIcon:t.toUrl("./images/whitel.png"),rArrowIcon:t.toUrl("./images/whiter.png"),constructor:function(t,i){this.initialize(),e.mixin(this,t),this.domNode=r.byId(i),this._nls=e.mixin({},I.widgets.popup);var n=this.domNode;c.add(n,"esriPopupMobile");p.set(n,"innerHTML","<div class='sizer'><div class='titlePane'><div class='spinner hidden'></div><div class='title'></div><div style='text-align:center'><div class='titleButton prev hidden'></div><div class='footer' style='display:inline-block;width:60px;height:15px;'></div><div class='titleButton next hidden'></div></div><div class='titleButton close'></div><div class='titleButton arrow hidden'></div></div></div><div class='pointer top hidden'></div><div class='pointer bottom hidden'></div>");var s=h.query(".titlePane",n)[0];this._arrowButton=h.query(".arrow",s)[0],this._pointerTop=h.query(".top",n)[0],this._pointerBottom=h.query(".bottom",n)[0],this._title=h.query(".title",s)[0],this._footer=h.query(".footer",s)[0],this._prev=h.query(".prev",s)[0],this._next=h.query(".next",s)[0],this._spinner=h.query(".spinner",s)[0],this._eventConnections=[o.connect(h.query(".close",s)[0],"onclick",this,this.hide),o.connect(this._arrowButton,"onclick",this,this._toggleView),o.connect(this._prev,"onclick",this,function(){this.selectPrevious(),this._updateUI()}),o.connect(this._next,"onclick",this,function(){this.selectNext(),this._updateUI()})],this._initPopupNavigationBar(),this._initPopupInfoView(),x.hide(n),this.isShowing=!1},setMap:function(t){this.inherited(arguments),l.place(this.domNode,t.root),this.highlight&&this.enableHighlight(t)},unsetMap:function(){this.disableHighlight(this.map),this.inherited(arguments)},setTitle:function(t,i){this.destroyDijits(this._title),this.place(t,this._title),this.destroyDijits(this._footer),this.place(i,this._footer),this.isShowing&&(this.startupDijits(this._title),this.startupDijits(this._footer))},setContent:function(t){this.destroyDijits(this._contentPane),this.place(t,this._contentPane),this.startupDijits(this._contentPane)},show:function(t){if(!t)return x.show(this.domNode),void(this.isShowing=!0);var i,e=this.map;t.spatialReference?(this.location=t,i=e.toScreen(t)):(this.location=e.toMap(t),i=t),this._maximized?this.restore():this._setPosition(i),this.isShowing||(x.show(this.domNode),this.isShowing=!0,this.onShow())},hide:function(){this.isShowing&&(x.hide(this.domNode),this.isShowing=!1,this.onHide())},onShow:function(){this._followMap(),this.startupDijits(this._title),this.showHighlight()},onHide:function(){this._unfollowMap(),this.hideHighlight()},destroy:function(){this.map&&this.unsetMap(),this.cleanup(),this.isShowing&&this.hide(),this.destroyDijits(this._title),this.destroyDijits(this._footer),n.forEach(this._eventConnections,o.disconnect),l.destroy(this.domNode)},selectNext:function(){this.select(this.selectedIndex+1)},selectPrevious:function(){this.select(this.selectedIndex-1)},setFeatures:function(){this.inherited(arguments),this._updateUI()},onSetFeatures:function(){},onClearFeatures:function(){this.setTitle("&nbsp;","&nbsp;"),c.add(this._arrowButton,"hidden"),this._updateUI(),this.hideHighlight()},onSelectionChange:function(){var t=this.selectedIndex;this._updateUI(),t>=0&&(this.setContent(this.features[t].getContent()),this.updateHighlight(this.map,this.features[t]),this.isShowing&&this.showHighlight())},onDfdComplete:function(){this._updateUI()},_followMap:function(){this._unfollowMap();var t=this.map;this._handles=[o.connect(t,"onPanStart",this,this._onPanStart),o.connect(t,"onPan",this,this._onPan),o.connect(t,"onZoomStart",this,this._onZoomStart),o.connect(t,"onExtentChange",this,this._onExtentChange)]},_unfollowMap:function(){var t=this._handles;t&&(n.forEach(t,o.disconnect),this._handles=null)},_onPanStart:function(){var t=this.domNode.style;this._panOrigin={left:t.left,top:t.top,right:t.right,bottom:t.bottom}},_onPan:function(t,i){var e=this._panOrigin,o=i.x,n=i.y,s=e.left,h=e.top,a=e.right,d=e.bottom;s&&(s=parseFloat(s)+o+"px"),h&&(h=parseFloat(h)+n+"px"),a&&(a=parseFloat(a)-o+"px"),d&&(d=parseFloat(d)-n+"px"),g.set(this.domNode,{left:s,top:h,right:a,bottom:d})},_onZoomStart:function(){x.hide(this.domNode)},_onExtentChange:function(t,i,e){e&&(x.show(this.domNode),this.show(this._targetLocation||this.location),this._targetLocation=null)},_setPosition:function(t){var i=t.x,e=t.y,o=u.getContentBox(this.map.container),n=o.w,s=o.h,h=0,a=e+10,d=118,r=n-18;i>18&&i<r?(h=i-130,h<0?h=0:h>n-260&&(h=n-260)):i<=18?h=i-18:i>=r&&(h=n-260+(i-r)),i>118&&i<n-130?d=118:i<=118?i>18?d=i-12:i<=18&&(d=6):i>=n-130&&(i<r?d=118+i-(n-130):i>=r&&(d=118+r-(n-130))),e<=s/2?(g.set(this.domNode,{left:h+"px",top:a+"px",bottom:null}),g.set(this._pointerTop,{left:d+"px"}),c.add(this._pointerBottom,"hidden"),c.remove(this._pointerTop,"hidden")):(g.set(this.domNode,{left:h+"px",top:a-64+"px",bottom:null}),g.set(this._pointerBottom,{left:d+"px"}),c.add(this._pointerTop,"hidden"),c.remove(this._pointerBottom,"hidden"))},_showPointer:function(t){var i=["topLeft","topRight","bottomRight","bottomLeft"];n.forEach(i,function(i){i===t?h.query(".pointer."+i,this.domNode).removeClass("hidden"):h.query(".pointer."+i,this.domNode).addClass("hidden")},this)},_toggleView:function(){this.popupNavigationBar||this._initPopupNavigationBar(),this.popupInfoView||this._initPopupInfoView(),this.hide(),x.show(this.popupNavigationBar.container),x.show(this.popupInfoView.container);this.selectedIndex>=0&&(this.selectedIndex+1+" of "+this.features.length,this.setContent(this.features[this.selectedIndex].getContent()))},_handleNavigationBar:function(t){switch(this.popupInfoView.animateTo(0),t.name){case"CloseButton":x.hide(this.popupNavigationBar.container),x.hide(this.popupInfoView.container),this.hide();break;case"ToggleButton":x.hide(this.popupNavigationBar.container),x.hide(this.popupInfoView.container),this.show(this.location);break;case"PreviousButton":this.selectPrevious(),this._updateUI();break;case"NextButton":this.selectNext(),this._updateUI()}},_initPopupNavigationBar:function(){var t={};t.items=[{name:"CloseButton",type:"img",src:this.xIcon,srcAlt:this.xIcon,position:"left"},{name:"Title",type:"span",text:"",position:"center"},{name:"ToggleButton",type:"img",src:this.dArrowIcon,srcAlt:this.dArrowIcon,position:"right",toggleGroup:"toggle"},{name:"PreviousButton",type:"img",src:this.lArrowIcon,srcAlt:this.lArrowIcon,position:"right2",toggleGroup:"previous"},{name:"NextButton",type:"img",src:this.rArrowIcon,srcAlt:this.rArrowIcon,position:"right1",toggleGroup:"next"}],this.popupNavigationBar=new m(t,l.create("div",{},s.body())),o.connect(this.popupNavigationBar,"onCreate",this,function(t){this._prevFeatureButton=t[3]._node,this._nextFeatureButton=t[4]._node}),o.connect(this.popupNavigationBar,"onSelect",this,this._handleNavigationBar),o.connect(this.popupNavigationBar,"onUnSelect",this,this._handleNavigationBar),this.popupNavigationBar.startup(),x.hide(this.popupNavigationBar.container)},_initPopupInfoView:function(){var t={items:[{name:"Navigator",type:"div",text:""},{name:"content",type:"div",text:""},{name:"attachment",type:"div",text:""}]};this.popupInfoView=new v(t,l.create("div",{},s.body())),c.add(this.popupInfoView.container,"esriMobilePopupInfoView"),this.popupInfoView.enableTouchScroll(),o.connect(this.popupInfoView,"onCreate",this,function(t){this._contentPane=t[1]._node,this.selectedIndex>=0&&this.setContent(this.features[this.selectedIndex].getContent())}),o.connect(this.popupInfoView,"onSwipeLeft",this,function(){}),o.connect(this.popupInfoView,"onSwipeRight",this,function(){}),this.popupInfoView.startup()},_updateUI:function(){var t="&nbsp;",i="&nbsp;",e=this.selectedIndex,o=this.features,n=this.deferreds,s=this._prevFeatureButton.parentNode,h=this._nextFeatureButton.parentNode,a=this._spinner,d=this._nls;o&&o.length>=1?(t=o[e].getTitle(),i=e+1+" of "+o.length,c.remove(this._arrowButton,"hidden"),0===e?(c.add(s,"hidden"),c.add(this._prev,"hidden")):(c.remove(s,"hidden"),c.remove(this._prev,"hidden")),e===o.length-1?(c.add(h,"hidden"),c.add(this._next,"hidden")):(c.remove(h,"hidden"),c.remove(this._next,"hidden"))):(c.add(this._arrowButton,"hidden"),c.add(s,"hidden"),c.add(h,"hidden"),c.add(this._prev,"hidden"),c.add(this._next,"hidden")),this.setTitle(t,i),this.popupNavigationBar.getItems()[1]._node.innerHTML=i,n&&n.length?(c.remove(a,"hidden"),this.setTitle(d.NLS_searching+"...","&nbsp;")):(c.add(a,"hidden"),o&&o.length||this.setTitle("No Information","&nbsp;"))}});return a("extend-esri")&&e.setObject("dijit.PopupMobile",B,w),B});