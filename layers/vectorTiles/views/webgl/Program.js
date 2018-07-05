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

define(["require","exports","dojo/has","./ShaderTranspiler"],function(t,o,i,e){var r=i("dojo-debug-messages");return function(){function t(o,e,r,n,a){if(void 0===a&&(a={}),this._context=null,this._glName=null,this._locations={},this._id=void 0,this._initialized=!1,this._vShader=null,this._fShader=null,this._defines={},this._nameToUniformLocation={},this._nameToAttribLocation={},this._nameToUniform1={},this._nameToUniform2={},this._nameToUniform3={},this._nameToUniform4={},this._nameToUniformMatrix3={},this._nameToUniformMatrix4={},o||console.error("RenderingContext isn't initialized!"),0===e.length&&console.error("Shaders source should not be empty!"),this._context=o,this._vertexShaderSource=e,this._fragmentShaderSource=r,Array.isArray(a))for(var s=0,h=a;s<h.length;s++){var f=h[s];this._defines[f]="1"}else this._defines=a;this._id=t._nextId++,this._locations=n,i("esri-webgl-debug")&&o.instanceCounter.incrementCount(3)}return Object.defineProperty(t.prototype,"id",{get:function(){return this._id},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"glName",{get:function(){return this._glName},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"locations",{get:function(){return this._locations},enumerable:!0,configurable:!0}),t.prototype.getDefine=function(t){return this._defines[t]},t.prototype.dispose=function(){if(this._context){var t=this._context.gl;if(this._vShader){var o=this._vShader;t.deleteShader(o),this._vShader=null}if(this._fShader){var e=this._fShader;t.deleteShader(e),this._fShader=null}this._glName&&(t.deleteProgram(this._glName),this._glName=null),i("esri-webgl-debug")&&this._context.instanceCounter.decrementCount(3),this._context=null}},t.prototype.initialize=function(){if(!this._initialized){this._vShader=this._loadShader(35633),this._fShader=this._loadShader(35632),this._vShader&&this._fShader||console.error("Error loading shaders!");var t=this._context.gl,o=t.createProgram();t.attachShader(o,this._vShader),t.attachShader(o,this._fShader);for(var i in this._locations){var e=this._locations[i];t.bindAttribLocation(o,e,i)}t.linkProgram(o),t.getProgramParameter(o,t.LINK_STATUS)||console.error("Could not initialize shader\nVALIDATE_STATUS: "+t.getProgramParameter(o,t.VALIDATE_STATUS)+", gl error ["+t.getError()+"]infoLog: "+t.getProgramInfoLog(o)),this._glName=o,this._initialized=!0}},t.prototype.getUniformLocation=function(t){return this.initialize(),void 0===this._nameToUniformLocation[t]&&(this._nameToUniformLocation[t]=this._context.gl.getUniformLocation(this._glName,t)),this._nameToUniformLocation[t]},t.prototype.hasUniform=function(t){return null!==this.getUniformLocation(t)},t.prototype.getAttribLocation=function(t){return this.initialize(),void 0===this._nameToAttribLocation[t]&&(this._nameToAttribLocation[t]=this._context.gl.getAttribLocation(this._glName,t)),this._nameToAttribLocation[t]},t.prototype.setUniform1i=function(t,o){var i=this._nameToUniform1[t];if(void 0===i||o!==i){this._context.bindProgram(this);this._context.gl.uniform1i(this.getUniformLocation(t),o),this._nameToUniform1[t]=o}},t.prototype.setUniform1f=function(t,o){var i=this._nameToUniform1[t];if(void 0===i||o!==i){this._context.bindProgram(this);this._context.gl.uniform1f(this.getUniformLocation(t),o),this._nameToUniform1[t]=o}},t.prototype.setUniform1fv=function(o,i){var e=this._nameToUniform2[o];if(void 0===e||!t._arraysEqual(i,e)){this._context.bindProgram(this);this._context.gl.uniform1fv(this.getUniformLocation(o),i),void 0===e?this._nameToUniform2[o]=new Float32Array(i):e.set(i)}},t.prototype.setUniform2f=function(t,o,i){var e=this._nameToUniform2[t];if(void 0===e||o!==e[0]||i!==e[1]){this._context.bindProgram(this);this._context.gl.uniform2f(this.getUniformLocation(t),o,i),void 0===e?this._nameToUniform2[t]=new Float32Array([o,i]):(e[0]=o,e[1]=i)}},t.prototype.setUniform2fv=function(o,i){r&&i.length%2!=0&&console.error("Value array must have even number of elements!");var e=this._nameToUniform2[o];if(void 0===e||!t._arraysEqual(i,e)){this._context.bindProgram(this);this._context.gl.uniform2fv(this.getUniformLocation(o),i),void 0===e?this._nameToUniform2[o]=new Float32Array(i):e.set(i)}},t.prototype.setUniform3f=function(t,o,i,e){var r=this._nameToUniform3[t];if(void 0===r||o!==r[0]||i!==r[1]||e!==r[2]){this._context.bindProgram(this);this._context.gl.uniform3f(this.getUniformLocation(t),o,i,e),void 0===r?this._nameToUniform3[t]=new Float32Array([o,i,e]):(r[0]=o,r[1]=i,r[2]=e)}},t.prototype.setUniform3fv=function(o,i){r&&i.length%3!=0&&console.error("Value array must contain sets of three values!");var e=this._nameToUniform3[o];if(void 0===e||!t._arraysEqual(i,e)){this._context.bindProgram(this);this._context.gl.uniform3fv(this.getUniformLocation(o),i),void 0===e?this._nameToUniform3[o]=new Float32Array(i):e.set(i)}},t.prototype.setUniform4f=function(t,o,i,e,r){var n=this._nameToUniform4[t];if(void 0===n||o!==n[0]||i!==n[1]||e!==n[2]||r!==n[3]){this._context.bindProgram(this);this._context.gl.uniform4f(this.getUniformLocation(t),o,i,e,r),void 0===n?this._nameToUniform4[t]=new Float32Array([o,i,e,r]):(n[0]=o,n[1]=i,n[2]=e,n[3]=r)}},t.prototype.setUniform4fv=function(o,i){r&&i.length%4!=0&&console.error("Value array must contain sets of four values!");var e=this._nameToUniform4[o];if(void 0===e||!t._arraysEqual(i,e)){this._context.bindProgram(this);this._context.gl.uniform4fv(this.getUniformLocation(o),i),void 0===e?this._nameToUniform4[o]=new Float32Array(i):e.set(i)}},t.prototype.setUniformMatrix3fv=function(o,i,e){void 0===e&&(e=!1),r&&i.length%9!=0&&console.error("Matrix array must contain sets ot 9 elements!");var n=this._nameToUniformMatrix3[o];if(void 0===n||(9===n.length?!t._matrix3Equal(n,i):!t._arraysEqual(i,n))){this._context.bindProgram(this);this._context.gl.uniformMatrix3fv(this.getUniformLocation(o),e,i),void 0===n?this._nameToUniformMatrix3[o]=new Float32Array(i):n.set(i)}},t.prototype.setUniformMatrix4fv=function(o,i,e){void 0===e&&(e=!1),r&&i.length%16!=0&&console.error("Matrix array must contain sets ot 16 elements!");var n=this._nameToUniformMatrix4[o];if(void 0===n||(16===n.length?!t._matrix4Equal(n,i):!t._arraysEqual(i,n))){this._context.bindProgram(this);this._context.gl.uniformMatrix4fv(this.getUniformLocation(o),e,i),void 0===n?this._nameToUniformMatrix4[o]=new Float32Array(i):n.set(i)}},t._padToThree=function(t){var o=t.toString();return t<1e3&&(o=("  "+t).slice(-3)),o},t.prototype._addLineNumbers=function(o){var i=2;return o.replace(/\n/g,function(){return"\n"+t._padToThree(i++)+":"})},t.prototype._loadShader=function(t){var o=35633===t,i=o?this._vertexShaderSource:this._fragmentShaderSource,r=i,n="";for(var a in this._defines)n+="#define "+a+" "+this._defines[a]+"\n";r=n+r,"webgl2"===this._context.contextVersion&&(r=e.transpileShader(r,o?"vertex":"fragment"));var s=this._context.gl,h=s.createShader(t);return s.shaderSource(h,r),s.compileShader(h),s.getShaderParameter(h,s.COMPILE_STATUS)||(console.error(s.getShaderInfoLog(h)),console.error(this._addLineNumbers(r)),"webgl2"===this._context.contextVersion&&(console.log("Shader source before transpilation:"),console.log(i))),h},t._matrix4Equal=function(t,o){return r&&(16===t.length&&16===o.length||console.error("Matrix object must contain 16 elements!")),t[0]===o[0]&&t[1]===o[1]&&t[2]===o[2]&&t[3]===o[3]&&t[4]===o[4]&&t[5]===o[5]&&t[6]===o[6]&&t[7]===o[7]&&t[8]===o[8]&&t[9]===o[9]&&t[10]===o[10]&&t[11]===o[11]&&t[12]===o[12]&&t[13]===o[13]&&t[14]===o[14]&&t[15]===o[15]},t._matrix3Equal=function(t,o){return r&&(9===t.length&&9===o.length||console.error("Matrix object must contain 16 elements!")),t[0]===o[0]&&t[1]===o[1]&&t[2]===o[2]&&t[3]===o[3]&&t[4]===o[4]&&t[5]===o[5]&&t[6]===o[6]&&t[7]===o[7]&&t[8]===o[8]},t._arraysEqual=function(t,o){if(t.length!==o.length)return!1;for(var i=0;i<t.length;++i)if(t[i]!==o[i])return!1;return!0},t._nextId=0,t}()});