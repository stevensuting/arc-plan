"function"!=typeof Object.create&&function(){var a=function(){};Object.create=function(b){if(1<arguments.length)throw Error("Second argument not supported");if(null===b)throw Error("Cannot set a null [[Prototype]]");if("object"!=typeof b)throw TypeError("Argument must be an object");return a.prototype=b,new a}}(),CKEDITOR.plugins.add("toolbarconfiguratorarea",{afterInit:function(a){a.addMode("wysiwyg",function(b){var c=CKEDITOR.dom.element.createFromHtml('<div class="cke_wysiwyg_div cke_reset" hidefocus="true"></div>');a.ui.space("contents").append(c),c=a.editable(c),c.detach=CKEDITOR.tools.override(c.detach,function(a){return function(){a.apply(this,arguments),this.remove()}}),a.setData(a.getData(1),b),a.fire("contentDom")}),a.dataProcessor.toHtml=function(a){return a},a.dataProcessor.toDataFormat=function(a){return a}}}),Object.keys||(Object.keys=function(){var a=Object.prototype.hasOwnProperty,b=!{toString:null}.propertyIsEnumerable("toString"),c="toString toLocaleString valueOf hasOwnProperty isPrototypeOf propertyIsEnumerable constructor".split(" "),d=c.length;return function(f){if("object"==typeof f||"function"==typeof f&&null!==f){var g=[],h;for(h in f)a.call(f,h)&&g.push(h);if(b)for(h=0;h<d;h++)a.call(f,c[h])&&g.push(c[h]);return g}throw new TypeError("Object.keys called on non-object")}}()),function(){function a(a,b){this.cfg=b||{},this.hidden=!1,this.editorId=a,this.fullToolbarEditor=new ToolbarConfigurator.FullToolbarEditor,this.actualConfig=this.originalConfig=this.mainContainer=null,this.isEditableVisible=this.waitForReady=!1,this.toolbarContainer=null,this.toolbarButtons=[]}ToolbarConfigurator.AbstractToolbarModifier=a,a.prototype.setConfig=function(a){this._onInit(void 0,a,!0)},a.prototype.init=function(a){var b=this;this.mainContainer=new CKEDITOR.dom.element("div");if(null!==this.fullToolbarEditor.editorInstance)throw"Only one instance of ToolbarModifier is allowed";return this.editorInstance||this._createEditor(!1),this.editorInstance.once("loaded",function(){b.fullToolbarEditor.init(function(){b._onInit(a),"function"==typeof b.onRefresh&&b.onRefresh()},b.editorInstance.config)}),this.mainContainer},a.prototype._onInit=function(a,b){this.originalConfig=this.editorInstance.config,this.actualConfig=b?JSON.parse(b):JSON.parse(JSON.stringify(this.originalConfig));if(!this.actualConfig.toolbarGroups&&!this.actualConfig.toolbar){for(var c=this.actualConfig,d=this.editorInstance.toolbar,e=[],f=d.length,g=0;g<f;g++){var h=d[g];"string"==typeof h?e.push(h):e.push({name:h.name,groups:h.groups?h.groups.slice():[]})}c.toolbarGroups=e}"function"==typeof a&&a(this.mainContainer)},a.prototype._createModifier=function(){return this.mainContainer.addClass("unselectable"),this.modifyContainer&&this.modifyContainer.remove(),this.modifyContainer=new CKEDITOR.dom.element("div"),this.modifyContainer.addClass("toolbarModifier"),this.mainContainer.append(this.modifyContainer),this.mainContainer},a.prototype.getEditableArea=function(){return this.editorInstance.container.findOne("#"+this.editorInstance.id+"_contents")},a.prototype._hideEditable=function(){var a=this.getEditableArea();this.isEditableVisible=!1,this.lastEditableAreaHeight=a.getStyle("height"),a.setStyle("height","0")},a.prototype._showEditable=function(){this.isEditableVisible=!0,this.getEditableArea().setStyle("height",this.lastEditableAreaHeight||"auto")},a.prototype._toggleEditable=function(){this.isEditableVisible?this._hideEditable():this._showEditable()},a.prototype._refreshEditor=function(){function a(){b.editorInstance.destroy(),b._createEditor(!0,b.getActualConfig()),b.waitForReady=!1}var b=this,c=this.editorInstance.status;this.waitForReady||("unloaded"==c||"loaded"==c?(this.waitForReady=!0,this.editorInstance.once("instanceReady",function(){a()},this)):a())},a.prototype._createEditor=function(b,c){function d(){}var e=this;this.editorInstance=CKEDITOR.replace(this.editorId),this.editorInstance.on("configLoaded",function(){var b=e.editorInstance.config;c&&CKEDITOR.tools.extend(b,c,!0),a.extendPluginsConfig(b)}),this.editorInstance.on("uiSpace",function(a){"top"!=a.data.space&&a.stop()},null,null,-999),this.editorInstance.once("loaded",function(){var a=e.editorInstance.ui.instances,c;for(c in a)a[c]&&(a[c].click=d,a[c].onClick=d);e.isEditableVisible||e._hideEditable(),e.currentActive&&e.currentActive.name&&e._highlightGroup(e.currentActive.name),e.hidden?e.hideUI():e.showUI(),b&&"function"==typeof e.onRefresh&&e.onRefresh()})},a.prototype.getActualConfig=function(){return JSON.parse(JSON.stringify(this.actualConfig))},a.prototype._createToolbar=function(){if(this.toolbarButtons.length){this.toolbarContainer=new CKEDITOR.dom.element("div"),this.toolbarContainer.addClass("toolbar");for(var a=this.toolbarButtons.length,b=0;b<a;b+=1)this._createToolbarBtn(this.toolbarButtons[b])}},a.prototype._createToolbarBtn=function(a){var b=ToolbarConfigurator.FullToolbarEditor.createButton("string"==typeof a.text?a.text:a.text.inactive,a.cssClass);return this.toolbarContainer.append(b),b.data("group",a.group),b.addClass(a.position),b.on("click",function(){a.clickCallback.call(this,b,a)},this),b},a.prototype._fixGroups=function(a){a=a.toolbarGroups||[];for(var b=a.length,c=0;c<b;c+=1){var d=a[c];"/"==d?(d=a[c]={},d.type="separator",d.name="separator"+CKEDITOR.tools.getNextNumber()):(d.groups=d.groups||[],-1==CKEDITOR.tools.indexOf(d.groups,d.name)&&(this.editorInstance.ui.addToolbarGroup(d.name,d.groups[d.groups.length-1],d.name),d.groups.push(d.name)),this._fixSubgroups(d))}},a.prototype._fixSubgroups=function(a){a=a.groups;for(var b=a.length,c=0;c<b;c+=1){var d=a[c];a[c]={name:d,totalBtns:ToolbarConfigurator.ToolbarModifier.getTotalSubGroupButtonsNumber(d,this.fullToolbarEditor)}}},a.stringifyJSONintoOneLine=function(a,b){b=b||{};var c=JSON.stringify(a,null,""),c=c.replace(/\n/g,"");return b.addSpaces&&(c=c.replace(/(\{|:|,|\[|\])/g,function(a){return a+" "}),c=c.replace(/(\])/g,function(a){return" "+a})),b.noQuotesOnKey&&(c=c.replace(/"(\w*)":/g,function(a,b){return b+":"})),b.singleQuotes&&(c=c.replace(/\"/g,"'")),c},a.prototype.hideUI=function(){this.hidden=!0,this.mainContainer.hide(),this.editorInstance.container&&this.editorInstance.container.hide()},a.prototype.showUI=function(){this.hidden=!1,this.mainContainer.show(),this.editorInstance.container&&this.editorInstance.container.show()},a.extendPluginsConfig=function(a){var b=a.extraPlugins;a.extraPlugins=(b?b+",":"")+"toolbarconfiguratorarea"}}()