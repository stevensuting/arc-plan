CKEDITOR.dialog.add("specialchar",function(a){var b,c=a.lang.specialchar,d=function(c){var d;c=c.data?c.data.getTarget():new CKEDITOR.dom.element(c),"a"==c.getName()&&(d=c.getChild(0).getHtml())&&(c.removeClass("cke_light_background"),b.hide(),c=a.document.createElement("span"),c.setHtml(d),a.insertText(c.getText()))},e=CKEDITOR.tools.addFunction(d),f,g=function(a,c){var d;c=c||a.data.getTarget(),"span"==c.getName()&&(c=c.getParent());if("a"==c.getName()&&(d=c.getChild(0).getHtml())){f&&h(null,f);var e=b.getContentElement("info","htmlPreview").getElement();b.getContentElement("info","charPreview").getElement().setHtml(d),e.setHtml(CKEDITOR.tools.htmlEncode(d)),c.getParent().addClass("cke_light_background"),f=c}},h=function(a,c){c=c||a.data.getTarget(),"span"==c.getName()&&(c=c.getParent()),"a"==c.getName()&&(b.getContentElement("info","charPreview").getElement().setHtml("&nbsp;"),b.getContentElement("info","htmlPreview").getElement().setHtml("&nbsp;"),c.getParent().removeClass("cke_light_background"),f=void 0)},i=CKEDITOR.tools.addFunction(function(b){b=new CKEDITOR.dom.event(b);var c=b.getTarget(),e;e=b.getKeystroke();var f="rtl"==a.lang.dir;switch(e){case 38:if(e=c.getParent().getParent().getPrevious())e=e.getChild([c.getParent().getIndex(),0]),e.focus(),h(null,c),g(null,e);b.preventDefault();break;case 40:(e=c.getParent().getParent().getNext())&&(e=e.getChild([c.getParent().getIndex(),0]))&&1==e.type&&(e.focus(),h(null,c),g(null,e)),b.preventDefault();break;case 32:d({data:b}),b.preventDefault();break;case f?37:39:if(e=c.getParent().getNext())e=e.getChild(0),1==e.type?(e.focus(),h(null,c),g(null,e),b.preventDefault(!0)):h(null,c);else if(e=c.getParent().getParent().getNext())(e=e.getChild([0,0]))&&1==e.type?(e.focus(),h(null,c),g(null,e),b.preventDefault(!0)):h(null,c);break;case f?39:37:(e=c.getParent().getPrevious())?(e=e.getChild(0),e.focus(),h(null,c),g(null,e),b.preventDefault(!0)):(e=c.getParent().getParent().getPrevious())?(e=e.getLast().getChild(0),e.focus(),h(null,c),g(null,e),b.preventDefault(!0)):h(null,c)}});return{title:c.title,minWidth:430,minHeight:280,buttons:[CKEDITOR.dialog.cancelButton],charColumns:17,onLoad:function(){for(var b=this.definition.charColumns,d=a.config.specialChars,f=CKEDITOR.tools.getNextId()+"_specialchar_table_label",g=['<table role="listbox" aria-labelledby="'+f+'" style="width: 320px; height: 100%; border-collapse: separate;" align="center" cellspacing="2" cellpadding="2" border="0">'],h=0,j=d.length,l,m;h<j;){g.push('<tr role="presentation">');for(var o=0;o<b;o++,h++){if(l=d[h]){l instanceof Array?(m=l[1],l=l[0]):(m=l.replace("&","").replace(";","").replace("#",""),m=c[m]||l);var r="cke_specialchar_label_"+h+"_"+CKEDITOR.tools.getNextNumber();g.push('<td class="cke_dark_background" style="cursor: default" role="presentation"><a href="javascript: void(0);" role="option" aria-posinset="'+(h+1)+'"',' aria-setsize="'+j+'"',' aria-labelledby="'+r+'"',' class="cke_specialchar" title="',CKEDITOR.tools.htmlEncode(m),'" onkeydown="CKEDITOR.tools.callFunction( '+i+', event, this )" onclick="CKEDITOR.tools.callFunction('+e+', this); return false;" tabindex="-1"><span style="margin: 0 auto;cursor: inherit">'+l+'</span><span class="cke_voice_label" id="'+r+'">'+m+"</span></a>")}else g.push('<td class="cke_dark_background">&nbsp;');g.push("</td>")}g.push("</tr>")}g.push("</tbody></table>",'<span id="'+f+'" class="cke_voice_label">'+c.options+"</span>"),this.getContentElement("info","charContainer").getElement().setHtml(g.join(""))},contents:[{id:"info",label:a.lang.common.generalTab,title:a.lang.common.generalTab,padding:0,align:"top",elements:[{type:"hbox",align:"top",widths:["320px","90px"],children:[{type:"html",id:"charContainer",html:"",onMouseover:g,onMouseout:h,focus:function(){var a=this.getElement().getElementsByTag("a").getItem(0);setTimeout(function(){a.focus(),g(null,a)},0)},onShow:function(){var a=this.getElement().getChild([0,0,0,0,0]);setTimeout(function(){a.focus(),g(null,a)},0)},onLoad:function(a){b=a.sender}},{type:"hbox",align:"top",widths:["100%"],children:[{type:"vbox",align:"top",children:[{type:"html",html:"<div></div>"},{type:"html",id:"charPreview",className:"cke_dark_background",style:"border:1px solid #eeeeee;font-size:28px;height:40px;width:70px;padding-top:9px;font-family:'Microsoft Sans Serif',Arial,Helvetica,Verdana;text-align:center;",html:"<div>&nbsp;</div>"},{type:"html",id:"htmlPreview",className:"cke_dark_background",style:"border:1px solid #eeeeee;font-size:14px;height:20px;width:70px;padding-top:2px;font-family:'Microsoft Sans Serif',Arial,Helvetica,Verdana;text-align:center;",html:"<div>&nbsp;</div>"}]}]}]}]}]}})