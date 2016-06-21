(function(){function a(a){b.call(this,a),this.hintContainer=this.codeContainer=null}var b=ToolbarConfigurator.AbstractToolbarModifier,c=ToolbarConfigurator.FullToolbarEditor;return ToolbarConfigurator.ToolbarTextModifier=a,a.prototype=Object.create(b.prototype),a.prototype._onInit=function(a,c){b.prototype._onInit.call(this,void 0,c),this._createModifier(c?this.actualConfig:void 0),"function"==typeof a&&a(this.mainContainer)},a.prototype._createModifier=function(a){function d(a){var b=f(a);if(null!==b.charsBetween){var c=i.getUnusedButtonsArray(i.actualConfig.toolbar,!0,b.charsBetween),d=a.getCursor(),b=CodeMirror.Pos(d.line,d.ch-b.charsBetween.length),g=a.getTokenAt(d);"{"===a.getTokenAt({line:d.line,ch:g.start}).string&&(c=["name"]);if(0!==c.length)return new e(b,d,c)}}function e(a,b,c){this.from=a,this.to=b,this.list=c,this._handlers=[]}function f(a,b){var c={};c.cur=a.getCursor(),c.tok=a.getTokenAt(c.cur),c["char"]=b||c.tok.string.charAt(c.tok.string.length-1);var d=a.getRange(CodeMirror.Pos(c.cur.line,0),c.cur).split("").reverse().join(""),d=d.replace(/(['|"]\w*['|"])/g,"");return c.charsBetween=d.match(/(^\w*)(['|"])/),c.charsBetween&&(c.endChar=c.charsBetween[2],c.charsBetween=c.charsBetween[1].split("").reverse().join("")),c}function h(a){return setTimeout(function(){a.state.completionActive||CodeMirror.showHint(a,d,{hintsClass:"toolbar-modifier",completeSingle:!1})},100),CodeMirror.Pass}var i=this;this._createToolbar(),this.toolbarContainer&&this.mainContainer.append(this.toolbarContainer),b.prototype._createModifier.call(this),this._setupActualConfig(a),a=this.actualConfig.toolbar,a=CKEDITOR.tools.isArray(a)?"\tconfig.toolbar = "+("[\n\t\t"+c.map(a,function(a){return b.stringifyJSONintoOneLine(a,{addSpaces:!0,noQuotesOnKey:!0,singleQuotes:!0})}).join(",\n\t\t")+"\n\t]")+";":"config.toolbar = [];",a=["CKEDITOR.editorConfig = function( config ) {\n",a,"\n};"].join("");var j=new CKEDITOR.dom.element("div");j.addClass("codemirror-wrapper"),this.modifyContainer.append(j),this.codeContainer=CodeMirror(j.$,{mode:{name:"javascript",json:!0},lineNumbers:!1,lineWrapping:!0,viewportMargin:Infinity,value:a,smartIndent:!1,indentWithTabs:!0,indentUnit:4,tabSize:4,theme:"neo",extraKeys:{Left:h,Right:h,"'''":h,"'\"'":h,Backspace:h,Delete:h,"Shift-Tab":"indentLess"}}),this.codeContainer.on("endCompletion",function(a,b){var c=f(a);void 0!==b&&a.replaceSelection(c.endChar)}),this.codeContainer.on("change",function(){var a=i.codeContainer.getValue(),a=i._evaluateValue(a);null!==a?(i.actualConfig.toolbar=a.toolbar?a.toolbar:i.actualConfig.toolbar,i._fillHintByUnusedElements(),i._refreshEditor(),i.mainContainer.removeClass("invalid")):i.mainContainer.addClass("invalid")}),this.hintContainer=new CKEDITOR.dom.element("div"),this.hintContainer.addClass("toolbarModifier-hints"),this._fillHintByUnusedElements(),this.hintContainer.insertBefore(j)},a.prototype._fillHintByUnusedElements=function(){var a=this.getUnusedButtonsArray(this.actualConfig.toolbar,!0),a=this.groupButtonNamesByGroup(a),b=c.map(a,function(a){var b=c.map(a.buttons,function(a){return"<code>"+a+"</code> "}).join("");return["<dt><code>",a.name,"</code></dt><dd>",b,"</dd>"].join("")}).join(" "),d='<dt class="list-header">Toolbar group</dt><dd class="list-header">Unused items</dd>';a.length||(d="<p>All items are in use.</p>"),this.codeContainer.refresh(),this.hintContainer.setHtml("<h3>Unused toolbar items</h3><dl>"+d+b+"</dl>")},a.prototype.getToolbarGroupByButtonName=function(a){var b=this.fullToolbarEditor.buttonNamesByGroup,c;for(c in b)for(var d=b[c],e=d.length;e--;)if(a===d[e])return c;return null},a.prototype.getUnusedButtonsArray=function(b,d,f){d=!0===d?!0:!1;var h=a.mapToolbarCfgToElementsList(b);return b=Object.keys(this.fullToolbarEditor.editorInstance.ui.items),b=c.filter(b,function(a){var b="-"===a;return a=void 0===f||0===a.toLowerCase().indexOf(f.toLowerCase()),!b&&a}),b=c.filter(b,function(a){return-1==CKEDITOR.tools.indexOf(h,a)}),d&&b.sort(),b},a.prototype.groupButtonNamesByGroup=function(a){var b=[],d=JSON.parse(JSON.stringify(this.fullToolbarEditor.buttonNamesByGroup)),e;for(e in d){var f=d[e],f=c.filter(f,function(b){return-1!==CKEDITOR.tools.indexOf(a,b)});f.length&&b.push({name:e,buttons:f})}return b},a.mapToolbarCfgToElementsList=function(a){function b(a){return"-"!==a}for(var d=[],e=a.length,f=0;f<e;f+=1)a[f]&&"string"!=typeof a[f]&&(d=d.concat(c.filter(a[f].items,b)));return d},a.prototype._setupActualConfig=function(a){a=a||this.editorInstance.config,CKEDITOR.tools.isArray(a.toolbar)||(a.toolbarGroups||(a.toolbarGroups=this.fullToolbarEditor.getFullToolbarGroupsConfig(!0)),this._fixGroups(a),a.toolbar=this._mapToolbarGroupsToToolbar(a.toolbarGroups,this.actualConfig.removeButtons),this.actualConfig.toolbar=a.toolbar,this.actualConfig.removeButtons="")},a.prototype._mapToolbarGroupsToToolbar=function(a,b){b=b||this.editorInstance.config.removedBtns,b="string"==typeof b?b.split(","):[];for(var c=a.length;c--;){var d=this._mapToolbarSubgroup(a[c],b);"separator"===a[c].type?a[c]="/":CKEDITOR.tools.isArray(d)&&0===d.length?a.splice(c,1):a[c]="string"==typeof d?d:{name:a[c].name,items:d}}return a},a.prototype._mapToolbarSubgroup=function(a,b){if("string"==typeof a)return a;for(var c=a.groups?a.groups.length:0,d=[],e=0;e<c;e+=1){var f=a.groups[e],f=this.fullToolbarEditor.buttonsByGroup["string"==typeof f?f:f.name]||[],f=this._mapButtonsToButtonsNames(f,b),g=f.length,d=d.concat(f);g&&d.push("-")}return"-"==d[d.length-1]&&d.pop(),d},a.prototype._mapButtonsToButtonsNames=function(a,b){for(var c=a.length;c--;){var d=a[c],d="string"==typeof d?d:this.fullToolbarEditor.getCamelCasedButtonName(d.name);-1!==CKEDITOR.tools.indexOf(b,d)?a.splice(c,1):a[c]=d}return a},a.prototype._evaluateValue=function(a){var b;try{var c={};Function("var CKEDITOR = {}; "+a+"; return CKEDITOR;")().editorConfig(c),b=c;for(var d=b.toolbar.length;d--;)b.toolbar[d]||b.toolbar.splice(d,1)}catch(e){b=null}return b},a.prototype.mapToolbarToToolbarGroups=function(a){function b(a,b){a=a.slice();for(var c=b.length;c--;){var d=a.indexOf(b[c]);-1!==d&&a.splice(d,1)}return a}for(var c={},d=[],e=[],d=a.length,f=0;f<d;f++)if("/"===a[f])e.push("/");else{var g=a[f].items,h={};h.name=a[f].name,h.groups=[];for(var i=g.length,j=0;j<i;j++){var k=g[j];if("-"!==k){var l=this.getToolbarGroupByButtonName(k);-1===h.groups.indexOf(l)&&h.groups.push(l),c[l]=c[l]||{},l=c[l].buttons=c[l].buttons||{},l[k]=l[k]||{used:0,origin:h.name},l[k].used++}}e.push(h)}return d=function(a,c){var d=[],e;for(e in a)var f=a[e],g=c[e].slice(),d=d.concat(b(g,Object.keys(f.buttons)));return d}(c,this.fullToolbarEditor.buttonNamesByGroup),{toolbarGroups:e,removeButtons:d.join(",")}},a})()