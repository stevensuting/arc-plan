CKEDITOR.dialog.add("scaytDialog",function(a){var b=a.scayt,c='<p><img src="'+b.getLogo()+'" /></p><p>'+b.getLocal("version")+b.getVersion()+"</p><p>"+b.getLocal("text_copyrights")+"</p>",d=CKEDITOR.document,e={isChanged:function(){return null===this.newLang||this.currentLang===this.newLang?!1:!0},currentLang:b.getLang(),newLang:null,reset:function(){this.currentLang=b.getLang(),this.newLang=null},id:"lang"},c=[{id:"options",label:b.getLocal("tab_options"),onShow:function(){},elements:[{type:"vbox",id:"scaytOptions",children:function(){var a=b.getApplicationConfig(),c=[],d={"ignore-all-caps-words":"label_allCaps","ignore-domain-names":"label_ignoreDomainNames","ignore-words-with-mixed-cases":"label_mixedCase","ignore-words-with-numbers":"label_mixedWithDigits"},e;for(e in a)a={type:"checkbox"},a.id=e,a.label=b.getLocal(d[e]),c.push(a);return c}(),onShow:function(){this.getChild();for(var b=a.scayt,c=0;c<this.getChild().length;c++)this.getChild()[c].setValue(b.getApplicationConfig()[this.getChild()[c].id])}}]},{id:"langs",label:b.getLocal("tab_languages"),elements:[{id:"leftLangColumn",type:"vbox",align:"left",widths:["100"],children:[{type:"html",id:"langBox",style:"overflow: hidden; white-space: normal;",html:'<div><div style="float:left;width:45%;margin-left:5px;" id="left-col-'+a.name+'"></div><div style="float:left;width:45%;margin-left:15px;" id="right-col-'+a.name+'"></div></div>',onShow:function(){var b=a.scayt.getLang();d.getById("scaytLang_"+b).$.checked=!0}}]}]},{id:"dictionaries",label:b.getLocal("tab_dictionaries"),elements:[{type:"vbox",id:"rightCol_col__left",children:[{type:"html",id:"dictionaryNote",html:""},{type:"text",id:"dictionaryName",label:b.getLocal("label_fieldNameDic")||"Dictionary name",onShow:function(b){var c=b.sender,d=a.scayt;setTimeout(function(){c.getContentElement("dictionaries","dictionaryNote").getElement().setText(""),null!=d.getUserDictionaryName()&&""!=d.getUserDictionaryName()&&c.getContentElement("dictionaries","dictionaryName").setValue(d.getUserDictionaryName())},0)}},{type:"hbox",id:"notExistDic",align:"left",style:"width:auto;",widths:["50%","50%"],children:[{type:"button",id:"createDic",label:b.getLocal("btn_createDic"),title:b.getLocal("btn_createDic"),onClick:function(){var b=this.getDialog(),c=f,d=a.scayt,e=b.getContentElement("dictionaries","dictionaryName").getValue();d.createUserDictionary(e,function(d){d.error||c.toggleDictionaryButtons.call(b,!0),d.dialog=b,d.command="create",d.name=e,a.fire("scaytUserDictionaryAction",d)},function(c){c.dialog=b,c.command="create",c.name=e,a.fire("scaytUserDictionaryActionError",c)})}},{type:"button",id:"restoreDic",label:b.getLocal("btn_restoreDic"),title:b.getLocal("btn_restoreDic"),onClick:function(){var b=this.getDialog(),c=a.scayt,d=f,e=b.getContentElement("dictionaries","dictionaryName").getValue();c.restoreUserDictionary(e,function(c){c.dialog=b,c.error||d.toggleDictionaryButtons.call(b,!0),c.command="restore",c.name=e,a.fire("scaytUserDictionaryAction",c)},function(c){c.dialog=b,c.command="restore",c.name=e,a.fire("scaytUserDictionaryActionError",c)})}}]},{type:"hbox",id:"existDic",align:"left",style:"width:auto;",widths:["50%","50%"],children:[{type:"button",id:"removeDic",label:b.getLocal("btn_deleteDic"),title:b.getLocal("btn_deleteDic"),onClick:function(){var b=this.getDialog(),c=a.scayt,d=f,e=b.getContentElement("dictionaries","dictionaryName"),g=e.getValue();c.removeUserDictionary(g,function(c){e.setValue(""),c.error||d.toggleDictionaryButtons.call(b,!1),c.dialog=b,c.command="remove",c.name=g,a.fire("scaytUserDictionaryAction",c)},function(c){c.dialog=b,c.command="remove",c.name=g,a.fire("scaytUserDictionaryActionError",c)})}},{type:"button",id:"renameDic",label:b.getLocal("btn_renameDic"),title:b.getLocal("btn_renameDic"),onClick:function(){var b=this.getDialog(),c=a.scayt,d=b.getContentElement("dictionaries","dictionaryName").getValue();c.renameUserDictionary(d,function(c){c.dialog=b,c.command="rename",c.name=d,a.fire("scaytUserDictionaryAction",c)},function(c){c.dialog=b,c.command="rename",c.name=d,a.fire("scaytUserDictionaryActionError",c)})}}]},{type:"html",id:"dicInfo",html:'<div id="dic_info_editor1" style="margin:5px auto; width:95%;white-space:normal;">'+b.getLocal("text_descriptionDic")+"</div>"}]}]},{id:"about",label:b.getLocal("tab_about"),elements:[{type:"html",id:"about",style:"margin: 5px 5px;",html:'<div><div id="scayt_about_">'+c+"</div></div>"}]}];a.on("scaytUserDictionaryAction",function(a){var b=SCAYT.prototype.UILib,c=a.data.dialog,d=c.getContentElement("dictionaries","dictionaryNote").getElement(),e=a.editor.scayt,f;void 0===a.data.error?(f=e.getLocal("message_success_"+a.data.command+"Dic"),f=f.replace("%s",a.data.name),d.setText(f),b.css(d.$,{color:"blue"})):(""===a.data.name?d.setText(e.getLocal("message_info_emptyDic")):(f=e.getLocal("message_error_"+a.data.command+"Dic"),f=f.replace("%s",a.data.name),d.setText(f)),b.css(d.$,{color:"red"}),null!=e.getUserDictionaryName()&&""!=e.getUserDictionaryName()?c.getContentElement("dictionaries","dictionaryName").setValue(e.getUserDictionaryName()):c.getContentElement("dictionaries","dictionaryName").setValue(""))}),a.on("scaytUserDictionaryActionError",function(a){var b=SCAYT.prototype.UILib,c=a.data.dialog,d=c.getContentElement("dictionaries","dictionaryNote").getElement(),e=a.editor.scayt,f;""===a.data.name?d.setText(e.getLocal("message_info_emptyDic")):(f=e.getLocal("message_error_"+a.data.command+"Dic"),f=f.replace("%s",a.data.name),d.setText(f)),b.css(d.$,{color:"red"}),null!=e.getUserDictionaryName()&&""!=e.getUserDictionaryName()?c.getContentElement("dictionaries","dictionaryName").setValue(e.getUserDictionaryName()):c.getContentElement("dictionaries","dictionaryName").setValue("")});var f={title:b.getLocal("text_title"),resizable:CKEDITOR.DIALOG_RESIZE_BOTH,minWidth:340,minHeight:260,onLoad:function(){if(0!=a.config.scayt_uiTabs[1]){var b=f,c=b.getLangBoxes.call(this);c.getParent().setStyle("white-space","normal"),b.renderLangList(c),this.definition.minWidth=this.getSize().width,this.resize(this.definition.minWidth,this.definition.minHeight)}},onCancel:function(){e.reset()},onHide:function(){a.unlockSelection()},onShow:function(){a.fire("scaytDialogShown",this);if(0!=a.config.scayt_uiTabs[2]){var b=a.scayt,c=this.getContentElement("dictionaries","dictionaryName"),d=this.getContentElement("dictionaries","existDic").getElement().getParent(),e=this.getContentElement("dictionaries","notExistDic").getElement().getParent();d.hide(),e.hide(),null!=b.getUserDictionaryName()&&""!=b.getUserDictionaryName()?(this.getContentElement("dictionaries","dictionaryName").setValue(b.getUserDictionaryName()),d.show()):(c.setValue(""),e.show())}},onOk:function(){var b=f,c=a.scayt;this.getContentElement("options","scaytOptions"),b=b.getChangedOption.call(this),c.commitOption({changedOptions:b})},toggleDictionaryButtons:function(a){var b=this.getContentElement("dictionaries","existDic").getElement().getParent(),c=this.getContentElement("dictionaries","notExistDic").getElement().getParent();a?(b.show(),c.hide()):(b.hide(),c.show())},getChangedOption:function(){var b={};if(1==a.config.scayt_uiTabs[0])for(var c=this.getContentElement("options","scaytOptions").getChild(),d=0;d<c.length;d++)c[d].isChanged()&&(b[c[d].id]=c[d].getValue());return e.isChanged()&&(b[e.id]=a.config.scayt_sLang=e.currentLang=e.newLang),b},buildRadioInputs:function(b,c){var d=new CKEDITOR.dom.element("div");CKEDITOR.document.createElement("div");var f="scaytLang_"+c,g=CKEDITOR.dom.element.createFromHtml('<input id="'+f+'" type="radio"  value="'+c+'" name="scayt_lang" />'),h=new CKEDITOR.dom.element("label"),i=a.scayt;return d.setStyles({"white-space":"normal",position:"relative","padding-bottom":"2px"}),g.on("click",function(a){e.newLang=a.sender.getValue()}),h.appendText(b),h.setAttribute("for",f),d.append(g),d.append(h),c===i.getLang()&&(g.setAttribute("checked",!0),g.setAttribute("defaultChecked","defaultChecked")),d},renderLangList:function(c){var d=c.find("#left-col-"+a.name).getItem(0);c=c.find("#right-col-"+a.name).getItem(0);var e=b.getLangList(),f={},h=[],i=0,j;for(j in e.ltr)f[j]=e.ltr[j];for(j in e.rtl)f[j]=e.rtl[j];for(j in f)h.push([j,f[j]]);h.sort(function(a,b){var c=0;return a[1]>b[1]?c=1:a[1]<b[1]&&(c=-1),c}),f={};for(e=0;e<h.length;e++)f[h[e][0]]=h[e][1];h=Math.round(h.length/2);for(j in f)i++,this.buildRadioInputs(f[j],j).appendTo(i<=h?d:c)},getLangBoxes:function(){return this.getContentElement("langs","langBox").getElement()},contents:function(a,b){var c=[],d=b.config.scayt_uiTabs;if(!d)return a;for(var e in d)1==d[e]&&c.push(a[e]);return c.push(a[a.length-1]),c}(c,a)};return f})