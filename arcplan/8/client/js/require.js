/** vim: et:ts=4:sw=4:sts=4
* @license RequireJS 2.1.1 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
* Available via the MIT or new BSD license.
* see: http://github.com/jrburke/requirejs for details
*/
var requirejs,require,define;(function(global){function isFunction(a){return ostring.call(a)==="[object Function]"}function isArray(a){return ostring.call(a)==="[object Array]"}function each(a,b){if(a){var c;for(c=0;c<a.length;c+=1)if(a[c]&&b(a[c],c,a))break}}function eachReverse(a,b){if(a){var c;for(c=a.length-1;c>-1;c-=1)if(a[c]&&b(a[c],c,a))break}}function hasProp(a,b){return hasOwn.call(a,b)}function eachProp(a,b){var c;for(c in a)if(a.hasOwnProperty(c)&&b(a[c],c))break}function mixin(a,b,c,d){return b&&eachProp(b,function(b,e){if(c||!hasProp(a,e))d&&typeof b!="string"?(a[e]||(a[e]={}),mixin(a[e],b,c,d)):a[e]=b}),a}function bind(a,b){return function(){return b.apply(a,arguments)}}function scripts(){return document.getElementsByTagName("script")}function getGlobal(a){if(!a)return a;var b=global;return each(a.split("."),function(a){b=b[a]}),b}function makeError(a,b,c,d){var e=new Error(b+"\nhttp://requirejs.org/docs/errors.html#"+a);return e.requireType=a,e.requireModules=d,c&&(e.originalError=c),e}function newContext(a){function o(a){var b,c;for(b=0;a[b];b+=1){c=a[b];if(c===".")a.splice(b,1),b-=1;else if(c==="..")if(b!==1||a[2]!==".."&&a[0]!=="..")b>0&&(a.splice(b-1,2),b-=2);else break}}function p(a,b,c){var d,e,f,h,i,j,k,l,m,n,p,q=b&&b.split("/"),r=q,s=g.map,t=s&&s["*"];a&&a.charAt(0)==="."&&(b?(g.pkgs[b]?r=q=[b]:r=q.slice(0,q.length-1),a=r.concat(a.split("/")),o(a),e=g.pkgs[d=a[0]],a=a.join("/"),e&&a===d+"/"+e.main&&(a=d)):a.indexOf("./")===0&&(a=a.substring(2)));if(c&&(q||t)&&s){h=a.split("/");for(i=h.length;i>0;i-=1){k=h.slice(0,i).join("/");if(q)for(j=q.length;j>0;j-=1){f=s[q.slice(0,j).join("/")];if(f){f=f[k];if(f){l=f,m=i;break}}}if(l)break;!n&&t&&t[k]&&(n=t[k],p=i)}!l&&n&&(l=n,m=p),l&&(h.splice(0,m,l),a=h.join("/"))}return a}function q(a){isBrowser&&each(scripts(),function(b){if(b.getAttribute("data-requiremodule")===a&&b.getAttribute("data-requirecontext")===d.contextName)return b.parentNode.removeChild(b),!0})}function r(a){var b=g.paths[a];if(b&&isArray(b)&&b.length>1)return q(a),b.shift(),d.require.undef(a),d.require([a]),!0}function s(a){var b,c=a?a.indexOf("!"):-1;return c>-1&&(b=a.substring(0,c),a=a.substring(c+1,a.length)),[b,a]}function t(a,b,c,e){var f,g,h,i,j=null,l=b?b.name:null,o=a,q=!0,r="";return a||(q=!1,a="_@r"+(m+=1)),i=s(a),j=i[0],a=i[1],j&&(j=p(j,l,e),g=k[j]),a&&(j?g&&g.normalize?r=g.normalize(a,function(a){return p(a,l,e)}):r=p(a,l,e):(r=p(a,l,e),i=s(r),j=i[0],r=i[1],c=!0,f=d.nameToUrl(r))),h=j&&!g&&!c?"_unnormalized"+(n+=1):"",{prefix:j,name:r,parentMap:b,unnormalized:!!h,url:f,originalName:o,isDefine:q,id:(j?j+"!"+r:r)+h}}function u(a){var b=a.id,c=h[b];return c||(c=h[b]=new d.Module(a)),c}function v(a,b,c){var d=a.id,e=h[d];hasProp(k,d)&&(!e||e.defineEmitComplete)?b==="defined"&&c(k[d]):u(a).on(b,c)}function w(a,b){var c=a.requireModules,d=!1;b?b(a):(each(c,function(b){var c=h[b];c&&(c.error=a,c.events.error&&(d=!0,c.emit("error",a)))}),d||req.onError(a))}function x(){globalDefQueue.length&&(apsp.apply(j,[j.length-1,0].concat(globalDefQueue)),globalDefQueue=[])}function y(a){delete h[a]}function z(a,b,c){var d=a.map.id;a.error?a.emit("error",a.error):(b[d]=!0,each(a.depMaps,function(d,e){var f=d.id,g=h[f];g&&!a.depMatched[e]&&!c[f]&&(b[f]?(a.defineDep(e,k[f]),a.check()):z(g,b,c))}),c[d]=!0)}function A(){var a,c,e,i,j=g.waitSeconds*1e3,k=j&&d.startTime+j<(new Date).getTime(),l=[],m=[],n=!1,o=!0;if(b)return;b=!0,eachProp(h,function(b){a=b.map,c=a.id;if(!b.enabled)return;a.isDefine||m.push(b);if(!b.error)if(!b.inited&&k)r(c)?(i=!0,n=!0):(l.push(c),q(c));else if(!b.inited&&b.fetched&&a.isDefine){n=!0;if(!a.prefix)return o=!1}});if(k&&l.length)return e=makeError("timeout","Load timeout for modules: "+l,null,l),e.contextName=d.contextName,w(e);o&&each(m,function(a){z(a,{},{})}),(!k||i)&&n&&(isBrowser||isWebWorker)&&!f&&(f=setTimeout(function(){f=0,A()},50)),b=!1}function B(a){u(t(a[0],null,!0)).init(a[1],a[2])}function C(a,b,c,d){a.detachEvent&&!isOpera?d&&a.detachEvent(d,b):a.removeEventListener(c,b,!1)}function D(a){var b=a.currentTarget||a.srcElement;return C(b,d.onScriptLoad,"load","onreadystatechange"),C(b,d.onScriptError,"error"),{node:b,id:b&&b.getAttribute("data-requiremodule")}}function E(){var a;x();while(j.length){a=j.shift();if(a[0]===null)return w(makeError("mismatch","Mismatched anonymous define() module: "+a[a.length-1]));B(a)}}var b,c,d,e,f,g={waitSeconds:7,baseUrl:"./",paths:{},pkgs:{},shim:{},map:{},config:{}},h={},i={},j=[],k={},l={},m=1,n=1;return e={require:function(a){return a.require?a.require:a.require=d.makeRequire(a.map)},exports:function(a){a.usingExports=!0;if(a.map.isDefine)return a.exports?a.exports:a.exports=k[a.map.id]={}},module:function(a){return a.module?a.module:a.module={id:a.map.id,uri:a.map.url,config:function(){return g.config&&g.config[a.map.id]||{}},exports:k[a.map.id]}}},c=function(a){this.events=i[a.id]||{},this.map=a,this.shim=g.shim[a.id],this.depExports=[],this.depMaps=[],this.depMatched=[],this.pluginMaps={},this.depCount=0},c.prototype={init:function(a,b,c,d){d=d||{};if(this.inited)return;this.factory=b,c?this.on("error",c):this.events.error&&(c=bind(this,function(a){this.emit("error",a)})),this.depMaps=a&&a.slice(0),this.errback=c,this.inited=!0,this.ignore=d.ignore,d.enabled||this.enabled?this.enable():this.check()},defineDep:function(a,b){this.depMatched[a]||(this.depMatched[a]=!0,this.depCount-=1,this.depExports[a]=b)},fetch:function(){if(this.fetched)return;this.fetched=!0,d.startTime=(new Date).getTime();var a=this.map;if(this.shim)d.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],bind(this,function(){return a.prefix?this.callPlugin():this.load()}));else return a.prefix?this.callPlugin():this.load()},load:function(){var a=this.map.url;l[a]||(l[a]=!0,d.load(this.map.id,a))},check:function(){if(!this.enabled||this.enabling)return;var a,b,c=this.map.id,e=this.depExports,f=this.exports,g=this.factory;if(!this.inited)this.fetch();else if(this.error)this.emit("error",this.error);else if(!this.defining){this.defining=!0;if(this.depCount<1&&!this.defined){if(isFunction(g)){if(this.events.error)try{f=d.execCb(c,g,e,f)}catch(i){a=i}else f=d.execCb(c,g,e,f);this.map.isDefine&&(b=this.module,b&&b.exports!==undefined&&b.exports!==this.exports?f=b.exports:f===undefined&&this.usingExports&&(f=this.exports));if(a)return a.requireMap=this.map,a.requireModules=[this.map.id],a.requireType="define",w(this.error=a)}else f=g;this.exports=f,this.map.isDefine&&!this.ignore&&(k[c]=f,req.onResourceLoad&&req.onResourceLoad(d,this.map,this.depMaps)),delete h[c],this.defined=!0}this.defining=!1,this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit("defined",this.exports),this.defineEmitComplete=!0)}},callPlugin:function(){var a=this.map,b=a.id,c=t(a.prefix);this.depMaps.push(c),v(c,"defined",bind(this,function(c){var e,f,i,j=this.map.name,k=this.map.parentMap?this.map.parentMap.name:null,l=d.makeRequire(a.parentMap,{enableBuildCallback:!0,skipMap:!0});if(this.map.unnormalized){c.normalize&&(j=c.normalize(j,function(a){return p(a,k,!0)})||""),f=t(a.prefix+"!"+j,this.map.parentMap),v(f,"defined",bind(this,function(a){this.init([],function(){return a},null,{enabled:!0,ignore:!0})})),i=h[f.id],i&&(this.depMaps.push(f),this.events.error&&i.on("error",bind(this,function(a){this.emit("error",a)})),i.enable());return}e=bind(this,function(a){this.init([],function(){return a},null,{enabled:!0})}),e.error=bind(this,function(a){this.inited=!0,this.error=a,a.requireModules=[b],eachProp(h,function(a){a.map.id.indexOf(b+"_unnormalized")===0&&y(a.map.id)}),w(a)}),e.fromText=bind(this,function(b,c){var f=a.name,g=t(f),h=useInteractive;c&&(b=c),h&&(useInteractive=!1),u(g);try{req.exec(b)}catch(i){throw new Error("fromText eval for "+f+" failed: "+i)}h&&(useInteractive=!0),this.depMaps.push(g),d.completeLoad(f),l([f],e)}),c.load(a.name,l,e,g)})),d.enable(c,this),this.pluginMaps[c.id]=c},enable:function(){this.enabled=!0,this.enabling=!0,each(this.depMaps,bind(this,function(a,b){var c,f,g;if(typeof a=="string"){a=t(a,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap),this.depMaps[b]=a,g=e[a.id];if(g){this.depExports[b]=g(this);return}this.depCount+=1,v(a,"defined",bind(this,function(a){this.defineDep(b,a),this.check()})),this.errback&&v(a,"error",this.errback)}c=a.id,f=h[c],!e[c]&&f&&!f.enabled&&d.enable(a,this)})),eachProp(this.pluginMaps,bind(this,function(a){var b=h[a.id];b&&!b.enabled&&d.enable(a,this)})),this.enabling=!1,this.check()},on:function(a,b){var c=this.events[a];c||(c=this.events[a]=[]),c.push(b)},emit:function(a,b){each(this.events[a],function(a){a(b)}),a==="error"&&delete this.events[a]}},d={config:g,contextName:a,registry:h,defined:k,urlFetched:l,defQueue:j,Module:c,makeModuleMap:t,nextTick:req.nextTick,configure:function(a){a.baseUrl&&a.baseUrl.charAt(a.baseUrl.length-1)!=="/"&&(a.baseUrl+="/");var b=g.pkgs,c=g.shim,e={paths:!0,config:!0,map:!0};eachProp(a,function(a,b){e[b]?b==="map"?mixin(g[b],a,!0,!0):mixin(g[b],a,!0):g[b]=a}),a.shim&&(eachProp(a.shim,function(a,b){isArray(a)&&(a={deps:a}),a.exports&&!a.exportsFn&&(a.exportsFn=d.makeShimExports(a)),c[b]=a}),g.shim=c),a.packages&&(each(a.packages,function(a){var c;a=typeof a=="string"?{name:a}:a,c=a.location,b[a.name]={name:a.name,location:c||a.name,main:(a.main||"main").replace(currDirRegExp,"").replace(jsSuffixRegExp,"")}}),g.pkgs=b),eachProp(h,function(a,b){!a.inited&&!a.map.unnormalized&&(a.map=t(b))}),(a.deps||a.callback)&&d.require(a.deps||[],a.callback)},makeShimExports:function(a){function b(){var b;return a.init&&(b=a.init.apply(global,arguments)),b||getGlobal(a.exports)}return b},makeRequire:function(b,c){function f(g,i,j){var l,m,n;return c.enableBuildCallback&&i&&isFunction(i)&&(i.__requireJsBuild=!0),typeof g=="string"?isFunction(i)?w(makeError("requireargs","Invalid require call"),j):b&&e[g]?e[g](h[b.id]):req.get?req.get(d,g,b):(m=t(g,b,!1,!0),l=m.id,hasProp(k,l)?k[l]:w(makeError("notloaded",'Module name "'+l+'" has not been loaded yet for context: '+a+(b?"":". Use require([])")))):(E(),d.nextTick(function(){E(),n=u(t(null,b)),n.skipMap=c.skipMap,n.init(g,i,j,{enabled:!0}),A()}),f)}return c=c||{},mixin(f,{isBrowser:isBrowser,toUrl:function(a){var c=a.lastIndexOf("."),e=null;return c!==-1&&(e=a.substring(c,a.length),a=a.substring(0,c)),d.nameToUrl(p(a,b&&b.id,!0),e)},defined:function(a){return hasProp(k,t(a,b,!1,!0).id)},specified:function(a){return a=t(a,b,!1,!0).id,hasProp(k,a)||hasProp(h,a)}}),b||(f.undef=function(a){x();var c=t(a,b,!0),d=h[a];delete k[a],delete l[c.url],delete i[a],d&&(d.events.defined&&(i[a]=d.events),y(a))}),f},enable:function(a,b){var c=h[a.id];c&&u(a).enable()},completeLoad:function(a){var b,c,d,e=g.shim[a]||{},f=e.exports;x();while(j.length){c=j.shift();if(c[0]===null){c[0]=a;if(b)break;b=!0}else c[0]===a&&(b=!0);B(c)}d=h[a];if(!b&&!k[a]&&d&&!d.inited){if(g.enforceDefine&&(!f||!getGlobal(f))){if(r(a))return;return w(makeError("nodefine","No define call for "+a,null,[a]))}B([a,e.deps||[],e.exportsFn])}A()},nameToUrl:function(a,b){var c,d,e,f,h,i,j,k,l;if(req.jsExtRegExp.test(a))k=a+(b||"");else{c=g.paths,d=g.pkgs,h=a.split("/");for(i=h.length;i>0;i-=1){j=h.slice(0,i).join("/"),e=d[j],l=c[j];if(l){isArray(l)&&(l=l[0]),h.splice(0,i,l);break}if(e){a===e.name?f=e.location+"/"+e.main:f=e.location,h.splice(0,i,f);break}}k=h.join("/"),k+=b||(/\?/.test(k)?"":".js"),k=(k.charAt(0)==="/"||k.match(/^[\w\+\.\-]+:/)?"":g.baseUrl)+k}return g.urlArgs?k+((k.indexOf("?")===-1?"?":"&")+g.urlArgs):k},load:function(a,b){req.load(d,a,b)},execCb:function(a,b,c,d){return b.apply(d,c)},onScriptLoad:function(a){if(a.type==="load"||readyRegExp.test((a.currentTarget||a.srcElement).readyState)){interactiveScript=null;var b=D(a);d.completeLoad(b.id)}},onScriptError:function(a){var b=D(a);if(!r(b.id))return w(makeError("scripterror","Script error",a,[b.id]))}},d.require=d.makeRequire(),d}function getInteractiveScript(){return interactiveScript&&interactiveScript.readyState==="interactive"?interactiveScript:(eachReverse(scripts(),function(a){if(a.readyState==="interactive")return interactiveScript=a}),interactiveScript)}var req,s,head,baseElement,dataMain,src,interactiveScript,currentlyAddingScript,mainScript,subPath,version="2.1.1",commentRegExp=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,cjsRequireRegExp=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,jsSuffixRegExp=/\.js$/,currDirRegExp=/^\.\//,op=Object.prototype,ostring=op.toString,hasOwn=op.hasOwnProperty,ap=Array.prototype,aps=ap.slice,apsp=ap.splice,isBrowser=typeof window!="undefined"&&!!navigator&&!!document,isWebWorker=!isBrowser&&typeof importScripts!="undefined",readyRegExp=isBrowser&&navigator.platform==="PLAYSTATION 3"?/^complete$/:/^(complete|loaded)$/,defContextName="_",isOpera=typeof opera!="undefined"&&opera.toString()==="[object Opera]",contexts={},cfg={},globalDefQueue=[],useInteractive=!1;if(typeof define!="undefined")return;if(typeof requirejs!="undefined"){if(isFunction(requirejs))return;cfg=requirejs,requirejs=undefined}typeof require!="undefined"&&!isFunction(require)&&(cfg=require,require=undefined),req=requirejs=function(a,b,c,d){var e,f,g=defContextName;return!isArray(a)&&typeof a!="string"&&(f=a,isArray(b)?(a=b,b=c,c=d):a=[]),f&&f.context&&(g=f.context),e=contexts[g],e||(e=contexts[g]=req.s.newContext(g)),f&&e.configure(f),e.require(a,b,c)},req.config=function(a){return req(a)},req.nextTick=typeof setTimeout!="undefined"?function(a){setTimeout(a,4)}:function(a){a()},require||(require=req),req.version=version,req.jsExtRegExp=/^\/|:|\?|\.js$/,req.isBrowser=isBrowser,s=req.s={contexts:contexts,newContext:newContext},req({}),each(["toUrl","undef","defined","specified"],function(a){req[a]=function(){var b=contexts[defContextName];return b.require[a].apply(b,arguments)}}),isBrowser&&(head=s.head=document.getElementsByTagName("head")[0],baseElement=document.getElementsByTagName("base")[0],baseElement&&(head=s.head=baseElement.parentNode)),req.onError=function(a){throw a},req.load=function(a,b,c){var d=a&&a.config||{},e;if(isBrowser)return e=d.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script"),e.type=d.scriptType||"text/javascript",e.charset="utf-8",e.async=!0,e.setAttribute("data-requirecontext",a.contextName),e.setAttribute("data-requiremodule",b),e.attachEvent&&!(e.attachEvent.toString&&e.attachEvent.toString().indexOf("[native code")<0)&&!isOpera?(useInteractive=!0,e.attachEvent("onreadystatechange",a.onScriptLoad)):(e.addEventListener("load",a.onScriptLoad,!1),e.addEventListener("error",a.onScriptError,!1)),e.src=c,currentlyAddingScript=e,baseElement?head.insertBefore(e,baseElement):head.appendChild(e),currentlyAddingScript=null,e;isWebWorker&&(importScripts(c),a.completeLoad(b))},isBrowser&&eachReverse(scripts(),function(a){head||(head=a.parentNode),dataMain=a.getAttribute("data-main");if(dataMain)return cfg.baseUrl||(src=dataMain.split("/"),mainScript=src.pop(),subPath=src.length?src.join("/")+"/":"./",cfg.baseUrl=subPath,dataMain=mainScript),dataMain=dataMain.replace(jsSuffixRegExp,""),cfg.deps=cfg.deps?cfg.deps.concat(dataMain):[dataMain],!0}),define=function(a,b,c){var d,e;typeof a!="string"&&(c=b,b=a,a=null),isArray(b)||(c=b,b=[]),!b.length&&isFunction(c)&&c.length&&(c.toString().replace(commentRegExp,"").replace(cjsRequireRegExp,function(a,c){b.push(c)}),b=(c.length===1?["require"]:["require","exports","module"]).concat(b)),useInteractive&&(d=currentlyAddingScript||getInteractiveScript(),d&&(a||(a=d.getAttribute("data-requiremodule")),e=contexts[d.getAttribute("data-requirecontext")])),(e?e.defQueue:globalDefQueue).push([a,b,c])},define.amd={jQuery:!0},req.exec=function(text){return eval(text)},req(cfg)})(this)