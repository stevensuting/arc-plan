CKEDITOR.dialog.add("cellProperties",function(a){function b(a){return function(b){for(var c=a(b[0]),d=1;d<b.length;d++)if(a(b[d])!==c){c=null;break}"undefined"!=typeof c&&(this.setValue(c),CKEDITOR.env.gecko&&"select"==this.type&&!c&&(this.getInputElement().$.selectedIndex=-1))}}function c(a){if(a=h.exec(a.getStyle("width")||a.getAttribute("width")))return a[2]}var d=a.lang.table,e=d.cell,f=a.lang.common,g=CKEDITOR.dialog.validate,h=/^(\d+(?:\.\d+)?)(px|%)$/,i={type:"html",html:"&nbsp;"},j="rtl"==a.lang.dir,k=a.plugins.colordialog;return{title:e.title,minWidth:CKEDITOR.env.ie&&CKEDITOR.env.quirks?450:410,minHeight:CKEDITOR.env.ie&&(CKEDITOR.env.ie7Compat||CKEDITOR.env.quirks)?230:220,contents:[{id:"info",label:e.title,accessKey:"I",elements:[{type:"hbox",widths:["40%","5%","40%"],children:[{type:"vbox",padding:0,children:[{type:"hbox",widths:["70%","30%"],children:[{type:"text",id:"width",width:"100px",label:f.width,validate:g.number(e.invalidWidth),onLoad:function(){var a=this.getDialog().getContentElement("info","widthType").getElement(),b=this.getInputElement(),c=b.getAttribute("aria-labelledby");b.setAttribute("aria-labelledby",[c,a.$.id].join(" "))},setup:b(function(a){var b=parseInt(a.getAttribute("width"),10);return a=parseInt(a.getStyle("width"),10),isNaN(a)?isNaN(b)?"":b:a}),commit:function(a){var b=parseInt(this.getValue(),10),d=this.getDialog().getValueOf("info","widthType")||c(a);isNaN(b)?a.removeStyle("width"):a.setStyle("width",b+d),a.removeAttribute("width")},"default":""},{type:"select",id:"widthType",label:a.lang.table.widthUnit,labelStyle:"visibility:hidden","default":"px",items:[[d.widthPx,"px"],[d.widthPc,"%"]],setup:b(c)}]},{type:"hbox",widths:["70%","30%"],children:[{type:"text",id:"height",label:f.height,width:"100px","default":"",validate:g.number(e.invalidHeight),onLoad:function(){var a=this.getDialog().getContentElement("info","htmlHeightType").getElement(),b=this.getInputElement(),c=b.getAttribute("aria-labelledby");b.setAttribute("aria-labelledby",[c,a.$.id].join(" "))},setup:b(function(a){var b=parseInt(a.getAttribute("height"),10);return a=parseInt(a.getStyle("height"),10),isNaN(a)?isNaN(b)?"":b:a}),commit:function(a){var b=parseInt(this.getValue(),10);isNaN(b)?a.removeStyle("height"):a.setStyle("height",CKEDITOR.tools.cssLength(b)),a.removeAttribute("height")}},{id:"htmlHeightType",type:"html",html:"<br />"+d.widthPx}]},i,{type:"select",id:"wordWrap",label:e.wordWrap,"default":"yes",items:[[e.yes,"yes"],[e.no,"no"]],setup:b(function(a){var b=a.getAttribute("noWrap");if("nowrap"==a.getStyle("white-space")||b)return"no"}),commit:function(a){"no"==this.getValue()?a.setStyle("white-space","nowrap"):a.removeStyle("white-space"),a.removeAttribute("noWrap")}},i,{type:"select",id:"hAlign",label:e.hAlign,"default":"",items:[[f.notSet,""],[f.alignLeft,"left"],[f.alignCenter,"center"],[f.alignRight,"right"],[f.alignJustify,"justify"]],setup:b(function(a){var b=a.getAttribute("align");return a.getStyle("text-align")||b||""}),commit:function(a){var b=this.getValue();b?a.setStyle("text-align",b):a.removeStyle("text-align"),a.removeAttribute("align")}},{type:"select",id:"vAlign",label:e.vAlign,"default":"",items:[[f.notSet,""],[f.alignTop,"top"],[f.alignMiddle,"middle"],[f.alignBottom,"bottom"],[e.alignBaseline,"baseline"]],setup:b(function(a){var b=a.getAttribute("vAlign");a=a.getStyle("vertical-align");switch(a){case"top":case"middle":case"bottom":case"baseline":break;default:a=""}return a||b||""}),commit:function(a){var b=this.getValue();b?a.setStyle("vertical-align",b):a.removeStyle("vertical-align"),a.removeAttribute("vAlign")}}]},i,{type:"vbox",padding:0,children:[{type:"select",id:"cellType",label:e.cellType,"default":"td",items:[[e.data,"td"],[e.header,"th"]],setup:b(function(a){return a.getName()}),commit:function(a){a.renameNode(this.getValue())}},i,{type:"text",id:"rowSpan",label:e.rowSpan,"default":"",validate:g.integer(e.invalidRowSpan),setup:b(function(a){if((a=parseInt(a.getAttribute("rowSpan"),10))&&1!=a)return a}),commit:function(a){var b=parseInt(this.getValue(),10);b&&1!=b?a.setAttribute("rowSpan",this.getValue()):a.removeAttribute("rowSpan")}},{type:"text",id:"colSpan",label:e.colSpan,"default":"",validate:g.integer(e.invalidColSpan),setup:b(function(a){if((a=parseInt(a.getAttribute("colSpan"),10))&&1!=a)return a}),commit:function(a){var b=parseInt(this.getValue(),10);b&&1!=b?a.setAttribute("colSpan",this.getValue()):a.removeAttribute("colSpan")}},i,{type:"hbox",padding:0,widths:["60%","40%"],children:[{type:"text",id:"bgColor",label:e.bgColor,"default":"",setup:b(function(a){var b=a.getAttribute("bgColor");return a.getStyle("background-color")||b}),commit:function(a){this.getValue()?a.setStyle("background-color",this.getValue()):a.removeStyle("background-color"),a.removeAttribute("bgColor")}},k?{type:"button",id:"bgColorChoose","class":"colorChooser",label:e.chooseColor,onLoad:function(){this.getElement().getParent().setStyle("vertical-align","bottom")},onClick:function(){a.getColorFromDialog(function(a){a&&this.getDialog().getContentElement("info","bgColor").setValue(a),this.focus()},this)}}:i]},i,{type:"hbox",padding:0,widths:["60%","40%"],children:[{type:"text",id:"borderColor",label:e.borderColor,"default":"",setup:b(function(a){var b=a.getAttribute("borderColor");return a.getStyle("border-color")||b}),commit:function(a){this.getValue()?a.setStyle("border-color",this.getValue()):a.removeStyle("border-color"),a.removeAttribute("borderColor")}},k?{type:"button",id:"borderColorChoose","class":"colorChooser",label:e.chooseColor,style:(j?"margin-right":"margin-left")+": 10px",onLoad:function(){this.getElement().getParent().setStyle("vertical-align","bottom")},onClick:function(){a.getColorFromDialog(function(a){a&&this.getDialog().getContentElement("info","borderColor").setValue(a),this.focus()},this)}}:i]}]}]}]}],onShow:function(){this.cells=CKEDITOR.plugins.tabletools.getSelectedCells(this._.editor.getSelection()),this.setupContent(this.cells)},onOk:function(){for(var a=this._.editor.getSelection(),b=a.createBookmarks(),c=this.cells,d=0;d<c.length;d++)this.commitContent(c[d]);this._.editor.forceNextSelectionCheck(),a.selectBookmarks(b),this._.editor.selectionChange()},onLoad:function(){var a={};this.foreach(function(b){b.setup&&b.commit&&(b.setup=CKEDITOR.tools.override(b.setup,function(c){return function(){c.apply(this,arguments),a[b.id]=b.getValue()}}),b.commit=CKEDITOR.tools.override(b.commit,function(c){return function(){a[b.id]!==b.getValue()&&c.apply(this,arguments)}}))})}}})