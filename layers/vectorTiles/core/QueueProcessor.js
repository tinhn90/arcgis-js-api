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

define(["require","exports","dojo/Deferred","./Queue","./scheduling"],function(e,s,t,r,i){function o(e){return e&&"function"==typeof e.then}return function(){function e(e){this._apiPromises=new Map,this._processingItems=new Map,this._isPaused=!1,this._scheduledNextHandle=null,this.concurrency=1,this.ordered=!1,e.concurrency&&(this.concurrency=e.concurrency),this.ordered=!!e.ordered,this._queue=new r(e.peeker?{peeker:e.peeker}:void 0),this.process=e.process}return Object.defineProperty(e.prototype,"length",{get:function(){return this._processingItems.size+this._queue.length},enumerable:!0,configurable:!0}),e.prototype.clear=function(){this._queue.clear();var e=[];this._processingItems.forEach(function(s){return e.push(s.resultPromise)}),this._processingItems.clear(),e.forEach(function(e){return e.cancel()}),e.length=0,this._apiPromises.forEach(function(s){return e.push(s)}),this._apiPromises.clear(),e.forEach(function(e){return e.cancel()}),this._cancelNext()},e.prototype.find=function(e,s){var t=this,r=void 0;return this._apiPromises.forEach(function(i,o){e.call(s,o)&&(r=t._apiPromises.get(o).promise)}),r},e.prototype.get=function(e){var s=this._apiPromises.get(e);return s&&s.promise||void 0},e.prototype.isOngoing=function(e){return this._processingItems.has(e)},e.prototype.has=function(e){return this._apiPromises.has(e)},e.prototype.pause=function(){this._isPaused||(this._isPaused=!0,this._cancelNext())},e.prototype.push=function(e){var s=this;if(this._apiPromises.has(e))return this._apiPromises.get(e).promise;var r=new t(function(t){var r=s._processingItems.get(e);r?r.resultPromise.cancel(t):(s._remove(e),s._scheduleNext())});return this._add(e,r),this._scheduleNext(),r.promise},e.prototype.reset=function(){var e=[];this._processingItems.forEach(function(s){return e.push(s)}),this._processingItems.clear();for(var s=0,t=e;s<t.length;s++){var r=t[s];r.resultPromise.isFulfilled()?this._processReset(r):(r.isReset=!0,r.resultPromise.cancel())}},e.prototype.resume=function(){this._isPaused&&(this._isPaused=!1,this._scheduleNext())},e.prototype._scheduleNext=function(){var e=this;this._isPaused||this._scheduledNextHandle||(this._scheduledNextHandle=i.schedule(function(){e._scheduledNextHandle=null,e._next()}))},e.prototype._next=function(){for(;this._queue.length>0&&this._processingItems.size<this.concurrency;)this._process(this._queue.pop())},e.prototype._processResult=function(e,s){this._remove(e.item),this._scheduleNext(),e.dfd.resolve(s)},e.prototype._processError=function(e,s){if(e.isReset)return void this._processReset(e);this._remove(e.item),this._scheduleNext(),e.dfd.reject(s)},e.prototype._processReset=function(e){this._remove(e.item),this._add(e.item,e.dfd),this._scheduleNext()},e.prototype._processOrdered=function(e,s){var t=this,r=!1;if(e.isReset)return void this._processReset(e);e.result=s,this._itemsToProcess||(this._itemsToProcess=[]),this._processingItems.forEach(function(e){r||(e.result?t._itemsToProcess.push(e):r=!0)});for(var i=0,o=this._itemsToProcess;i<o.length;i++){var n=o[i];!1===n.result.ok?this._processError(n,n.result.error):this._processResult(n,n.result.value)}this._itemsToProcess.length=0},e.prototype._process=function(e){var s=this;if(null!=e){var t=this._apiPromises.get(e),r=this.process(e);if(o(r)){var i={item:e,resultPromise:r,result:null,dfd:t,isReset:!1};this._processingItems.set(e,i),this.ordered?r.then(function(e){return s._processOrdered(i,{ok:!0,value:e})},function(e){return s._processOrdered(i,{ok:!1,error:e})}):r.then(function(e){return s._processResult(i,e)},function(e){return s._processError(i,e)})}else t.resolve(r),this._remove(e)}},e.prototype._add=function(e,s){this._apiPromises.set(e,s),this._queue.push(e)},e.prototype._remove=function(e){this._queue.remove(e),this._apiPromises.delete(e),this._processingItems.delete(e)},e.prototype._cancelNext=function(){this._scheduledNextHandle&&(this._scheduledNextHandle.remove(),this._scheduledNextHandle=null)},e}()});