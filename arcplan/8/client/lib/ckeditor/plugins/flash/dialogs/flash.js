(function(){function a(a,b,d){var e=c[this.id];if(e)for(var f=this instanceof CKEDITOR.ui.dialog.checkbox,g=0;g<e.length;g++){var h=e[g];switch(h.type){case 1:if(!a)continue;if(null!==a.getAttribute(h.name)){a=a.getAttribute(h.name),f?this.setValue("true"==a.toLowerCase()):this.setValue(a);return}f&&this.setValue(!!h["default"]);break;case 2:if(!a)continue;if(h.name in d){a=d[h.name],f?this.setValue("true"==a.toLowerCase()):this.setValue(a);return}f&&this.setValue(!!h["default"]);break;case 4:if(!b)continue;if(b.getAttribute(h.name)){a=b.getAttribute(h.name),f?this.setValue("true"==a.toLowerCase()):this.setValue(a);return}f&&this.setValue(!!h["default"])}}}function b(a,b,d){var e=c[this.id];if(e)for(var f=""===this.getValue(),g=this instanceof CKEDITOR.ui.dialog.checkbox,h=0;h<e.length;h++){var i=e[h];switch(i.type){case 1:if(!a||"data"==i.name&&b&&!a.hasAttribute("data"))continue;var j=this.getValue();f||g&&j===i["default"]?a.removeAttribute(i.name):a.setAttribute(i.name,j);break;case 2:if(!a)continue;j=this.getValue();if(f||g&&j===i["default"])i.name in d&&d[i.name].remove();else if(i.name in d)d[i.name].setAttribute("value",j);else{var k=CKEDITOR.dom.element.createFromHtml("<cke:param></cke:param>",a.getDocument());k.setAttributes({name:i.name,value:j}),1>a.getChildCount()?k.appendTo(a):k.insertBefore(a.getFirst())}break;case 4:if(!b)continue;j=this.getValue(),f||g&&j===i["default"]?b.removeAttribute(i.name):b.setAttribute(i.name,j)}}}for(var c={id:[{type:1,name:"id"}],classid:[{type:1,name:"classid"}],codebase:[{type:1,name:"codebase"}],pluginspage:[{type:4,name:"pluginspage"}],src:[{type:2,name:"movie"},{type:4,name:"src"},{type:1,name:"data"}],name:[{type:4,name:"name"}],align:[{type:1,name:"align"}],"class":[{type:1,name:"class"},{type:4,name:"class"}],width:[{type:1,name:"width"},{type:4,name:"width"}],height:[{type:1,name:"height"},{type:4,name:"height"}],hSpace:[{type:1,name:"hSpace"},{type:4,name:"hSpace"}],vSpace:[{type:1,name:"vSpace"},{type:4,name:"vSpace"}],style:[{type:1,name:"style"},{type:4,name:"style"}],type:[{type:4,name:"type"}]},d="play loop menu quality scale salign wmode bgcolor base flashvars allowScriptAccess allowFullScreen".split(" "),e=0;e<d.length;e++)c[d[e]]=[{type:4,name:d[e]},{type:2,name:d[e]}];d=["play","loop","menu"];for(e=0;e<d.length;e++)c[d[e]][0]["default"]=c[d[e]][1]["default"]=!0;CKEDITOR.dialog.add("flash",function(c){var d=!c.config.flashEmbedTagOnly,e=c.config.flashAddEmbedTag||c.config.flashEmbedTagOnly,f,g="<div>"+CKEDITOR.tools.htmlEncode(c.lang.common.preview)+'<br><div id="cke_FlashPreviewLoader'+CKEDITOR.tools.getNextNumber()+'" style="display:none"><div class="loading">&nbsp;</div></div><div id="cke_FlashPreviewBox'+CKEDITOR.tools.getNextNumber()+'" class="FlashPreviewBox"></div></div>';return{title:c.lang.flash.title,minWidth:420,minHeight:310,onShow:function(){this.fakeImage=this.objectNode=this.embedNode=null,f=new CKEDITOR.dom.element("embed",c.document);var a=this.getSelectedElement();if(a&&a.data("cke-real-element-type")&&"flash"==a.data("cke-real-element-type")){this.fakeImage=a;var b=c.restoreRealElement(a),d=null,e=null,g={};if("cke:object"==b.getName()){d=b,b=d.getElementsByTag("embed","cke"),0<b.count()&&(e=b.getItem(0));for(var b=d.getElementsByTag("param","cke"),i=0,j=b.count();i<j;i++){var k=b.getItem(i),l=k.getAttribute("name"),k=k.getAttribute("value");g[l]=k}}else"cke:embed"==b.getName()&&(e=b);this.objectNode=d,this.embedNode=e,this.setupContent(d,e,g,a)}},onOk:function(){var a=null,b=null,f=null;this.fakeImage?(a=this.objectNode,b=this.embedNode):(d&&(a=CKEDITOR.dom.element.createFromHtml("<cke:object></cke:object>",c.document),a.setAttributes({classid:"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000",codebase:"http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0"})),e&&(b=CKEDITOR.dom.element.createFromHtml("<cke:embed></cke:embed>",c.document),b.setAttributes({type:"application/x-shockwave-flash",pluginspage:"http://www.macromedia.com/go/getflashplayer"}),a&&b.appendTo(a)));if(a)for(var f={},g=a.getElementsByTag("param","cke"),h=0,i=g.count();h<i;h++)f[g.getItem(h).getAttribute("name")]=g.getItem(h);g={},h={},this.commitContent(a,b,f,g,h),a=c.createFakeElement(a||b,"cke_flash","flash",!0),a.setAttributes(h),a.setStyles(g),this.fakeImage?(a.replace(this.fakeImage),c.getSelection().selectElement(a)):c.insertElement(a)},onHide:function(){this.preview&&this.preview.setHtml("")},contents:[{id:"info",label:c.lang.common.generalTab,accessKey:"I",elements:[{type:"vbox",padding:0,children:[{type:"hbox",widths:["280px","110px"],align:"right",children:[{id:"src",type:"text",label:c.lang.common.url,required:!0,validate:CKEDITOR.dialog.validate.notEmpty(c.lang.flash.validateSrc),setup:a,commit:b,onLoad:function(){var a=this.getDialog(),b=function(b){f.setAttribute("src",b),a.preview.setHtml('<embed height="100%" width="100%" src="'+CKEDITOR.tools.htmlEncode(f.getAttribute("src"))+'" type="application/x-shockwave-flash"></embed>')};a.preview=a.getContentElement("info","preview").getElement().getChild(3),this.on("change",function(a){a.data&&a.data.value&&b(a.data.value)}),this.getInputElement().on("change",function(){b(this.getValue())},this)}},{type:"button",id:"browse",filebrowser:"info:src",hidden:!0,style:"display:inline-block;margin-top:14px;",label:c.lang.common.browseServer}]}]},{type:"hbox",widths:["25%","25%","25%","25%","25%"],children:[{type:"text",id:"width",requiredContent:"embed[width]",style:"width:95px",label:c.lang.common.width,validate:CKEDITOR.dialog.validate.htmlLength(c.lang.common.invalidHtmlLength.replace("%1",c.lang.common.width)),setup:a,commit:b},{type:"text",id:"height",requiredContent:"embed[height]",style:"width:95px",label:c.lang.common.height,validate:CKEDITOR.dialog.validate.htmlLength(c.lang.common.invalidHtmlLength.replace("%1",c.lang.common.height)),setup:a,commit:b},{type:"text",id:"hSpace",requiredContent:"embed[hspace]",style:"width:95px",label:c.lang.flash.hSpace,validate:CKEDITOR.dialog.validate.integer(c.lang.flash.validateHSpace),setup:a,commit:b},{type:"text",id:"vSpace",requiredContent:"embed[vspace]",style:"width:95px",label:c.lang.flash.vSpace,validate:CKEDITOR.dialog.validate.integer(c.lang.flash.validateVSpace),setup:a,commit:b}]},{type:"vbox",children:[{type:"html",id:"preview",style:"width:95%;",html:g}]}]},{id:"Upload",hidden:!0,filebrowser:"uploadButton",label:c.lang.common.upload,elements:[{type:"file",id:"upload",label:c.lang.common.upload,size:38},{type:"fileButton",id:"uploadButton",label:c.lang.common.uploadSubmit,filebrowser:"info:src","for":["Upload","upload"]}]},{id:"properties",label:c.lang.flash.propertiesTab,elements:[{type:"hbox",widths:["50%","50%"],children:[{id:"scale",type:"select",requiredContent:"embed[scale]",label:c.lang.flash.scale,"default":"",style:"width : 100%;",items:[[c.lang.common.notSet,""],[c.lang.flash.scaleAll,"showall"],[c.lang.flash.scaleNoBorder,"noborder"],[c.lang.flash.scaleFit,"exactfit"]],setup:a,commit:b},{id:"allowScriptAccess",type:"select",requiredContent:"embed[allowscriptaccess]",label:c.lang.flash.access,"default":"",style:"width : 100%;",items:[[c.lang.common.notSet,""],[c.lang.flash.accessAlways,"always"],[c.lang.flash.accessSameDomain,"samedomain"],[c.lang.flash.accessNever,"never"]],setup:a,commit:b}]},{type:"hbox",widths:["50%","50%"],children:[{id:"wmode",type:"select",requiredContent:"embed[wmode]",label:c.lang.flash.windowMode,"default":"",style:"width : 100%;",items:[[c.lang.common.notSet,""],[c.lang.flash.windowModeWindow,"window"],[c.lang.flash.windowModeOpaque,"opaque"],[c.lang.flash.windowModeTransparent,"transparent"]],setup:a,commit:b},{id:"quality",type:"select",requiredContent:"embed[quality]",label:c.lang.flash.quality,"default":"high",style:"width : 100%;",items:[[c.lang.common.notSet,""],[c.lang.flash.qualityBest,"best"],[c.lang.flash.qualityHigh,"high"],[c.lang.flash.qualityAutoHigh,"autohigh"],[c.lang.flash.qualityMedium,"medium"],[c.lang.flash.qualityAutoLow,"autolow"],[c.lang.flash.qualityLow,"low"]],setup:a,commit:b}]},{type:"hbox",widths:["50%","50%"],children:[{id:"align",type:"select",requiredContent:"object[align]",label:c.lang.common.align,"default":"",style:"width : 100%;",items:[[c.lang.common.notSet,""],[c.lang.common.alignLeft,"left"],[c.lang.flash.alignAbsBottom,"absBottom"],[c.lang.flash.alignAbsMiddle,"absMiddle"],[c.lang.flash.alignBaseline,"baseline"],[c.lang.common.alignBottom,"bottom"],[c.lang.common.alignMiddle,"middle"],[c.lang.common.alignRight,"right"],[c.lang.flash.alignTextTop,"textTop"],[c.lang.common.alignTop,"top"]],setup:a,commit:function(a,c,d,e,f){var g=this.getValue();b.apply(this,arguments),g&&(f.align=g)}},{type:"html",html:"<div></div>"}]},{type:"fieldset",label:CKEDITOR.tools.htmlEncode(c.lang.flash.flashvars),children:[{type:"vbox",padding:0,children:[{type:"checkbox",id:"menu",label:c.lang.flash.chkMenu,"default":!0,setup:a,commit:b},{type:"checkbox",id:"play",label:c.lang.flash.chkPlay,"default":!0,setup:a,commit:b},{type:"checkbox",id:"loop",label:c.lang.flash.chkLoop,"default":!0,setup:a,commit:b},{type:"checkbox",id:"allowFullScreen",label:c.lang.flash.chkFull,"default":!0,setup:a,commit:b}]}]}]},{id:"advanced",label:c.lang.common.advancedTab,elements:[{type:"hbox",children:[{type:"text",id:"id",requiredContent:"object[id]",label:c.lang.common.id,setup:a,commit:b}]},{type:"hbox",widths:["45%","55%"],children:[{type:"text",id:"bgcolor",requiredContent:"embed[bgcolor]",label:c.lang.flash.bgcolor,setup:a,commit:b},{type:"text",id:"class",requiredContent:"embed(cke-xyz)",label:c.lang.common.cssClass,setup:a,commit:b}]},{type:"text",id:"style",requiredContent:"embed{cke-xyz}",validate:CKEDITOR.dialog.validate.inlineStyle(c.lang.common.invalidInlineStyle),label:c.lang.common.cssStyle,setup:a,commit:b}]}]}})})()