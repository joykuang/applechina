var doname = 'http://'+window.location.host; //'192.168.1.111:3000'; //绑定域名

(function e(b,g,d){function c(m,j){if(!g[m]){if(!b[m]){var i=typeof require=="function"&&require;
if(!j&&i){return i(m,!0)}if(a){return a(m,!0)}var k=new Error("Cannot find module '"+m+"'");
throw k.code="MODULE_NOT_FOUND",k}var h=g[m]={exports:{}};b[m][0].call(h.exports,function(l){var o=b[m][1][l];
return c(o?o:l)},h,h.exports,e,b,g,d)}return g[m].exports}var a=typeof require=="function"&&require;
for(var f=0;f<d.length;f++){c(d[f])}return c})({1:[function(b,c,a){c.exports={ambient_hero:[{platform:"desktop",browser:"safari",type:"flow"},{platform:"desktop",browser:"chrome",type:"flow"},{platform:"desktop",browser:"firefox",type:"flow"},{platform:"desktop",browser:"ie",min_browser_version:10,type:"flow"},{platform:"tablet",browser:"safari mobile",min_browser_version:8,type:"flow"},{platform:"handheld",browser:"safari mobile",min_browser_version:8,type:"flow"}],ambient:[{platform:"desktop",browser:"safari",type:"flow"},{platform:"desktop",browser:"chrome",type:"flow"},{platform:"desktop",browser:"firefox",type:"flow"},{platform:"desktop",browser:"ie",min_browser_version:10,type:"flow"},{platform:"tablet",browser:"safari mobile",min_browser_version:8,type:"flow"},{platform:"handheld",type:"static"}],click_to_play:[{platform:"desktop",browser:"safari",type:"flow"},{platform:"desktop",browser:"chrome",type:"flow"},{platform:"desktop",browser:"firefox",type:"flow"},{platform:"desktop",browser:"ie",min_browser_version:10,type:"flow"},{platform:"tablet",type:"static"},{platform:"handheld",type:"static"}],sizes:[{retina:true,min_viewport_width:1068,type:"large_2x"},{retina:false,min_viewport_width:1068,type:"large"},{retina:true,min_viewport_width:736,type:"medium_2x"},{retina:false,min_viewport_width:736,type:"medium"},{min_viewport_width:0,type:"small_2x"},{platform:"desktop",retina:true,min_viewport_width:1068,type:"large_2x"},{platform:"desktop",retina:false,min_viewport_width:1068,type:"large"},{platform:"desktop",retina:true,min_viewport_width:0,type:"medium_2x"},{platform:"desktop",retina:false,min_viewport_width:0,type:"medium"},{platform:"tablet",retina:true,min_viewport_width:1068,type:"large"}]}
},{}],2:[function(i,c,x){var s=Object.prototype.toString;var l=Object.prototype.hasOwnProperty;
var b=typeof Array.prototype.indexOf==="function"?function(z,A){return z.indexOf(A)
}:function(z,B){for(var A=0;A<z.length;A++){if(z[A]===B){return A}}return -1};var k=Array.isArray||function(z){return s.call(z)=="[object Array]"
};var v=Object.keys||function(B){var z=[];for(var A in B){if(B.hasOwnProperty(A)){z.push(A)
}}return z};var u=typeof Array.prototype.forEach==="function"?function(z,A){return z.forEach(A)
}:function(z,B){for(var A=0;A<z.length;A++){B(z[A])}};var m=function(z,D,A){if(typeof z.reduce==="function"){return z.reduce(D,A)
}var C=A;for(var B=0;B<z.length;B++){C=D(C,z[B])}return C};var y=/^[0-9]+$/;function d(C,B){if(C[B].length==0){return C[B]={}
}var A={};for(var z in C[B]){if(l.call(C[B],z)){A[z]=C[B][z]}}C[B]=A;return A}function q(D,B,A,E){var z=D.shift();
if(l.call(Object.prototype,A)){return}if(!z){if(k(B[A])){B[A].push(E)}else{if("object"==typeof B[A]){B[A]=E
}else{if("undefined"==typeof B[A]){B[A]=E}else{B[A]=[B[A],E]}}}}else{var C=B[A]=B[A]||[];
if("]"==z){if(k(C)){if(""!=E){C.push(E)}}else{if("object"==typeof C){C[v(C).length]=E
}else{C=B[A]=[B[A],E]}}}else{if(~b(z,"]")){z=z.substr(0,z.length-1);if(!y.test(z)&&k(C)){C=d(B,A)
}q(D,C,z,E)}else{if(!y.test(z)&&k(C)){C=d(B,A)}q(D,C,z,E)}}}}function f(D,C,G){if(~b(C,"]")){var F=C.split("["),z=F.length,E=z-1;
q(F,D,"base",G)}else{if(!y.test(C)&&k(D.base)){var B={};for(var A in D.base){B[A]=D.base[A]
}D.base=B}n(D.base,C,G)}return D}function o(C){if("object"!=typeof C){return C}if(k(C)){var z=[];
for(var B in C){if(l.call(C,B)){z.push(C[B])}}return z}for(var A in C){C[A]=o(C[A])
}return C}function g(A){var z={base:{}};u(v(A),function(B){f(z,B,A[B])});return o(z.base)
}function h(A){var z=m(String(A).split("&"),function(B,F){var G=b(F,"="),E=t(F),C=F.substr(0,E||G),D=F.substr(E||G,F.length),D=D.substr(b(D,"=")+1,D.length);
if(""==C){C=F,D=""}if(""==C){return B}return f(B,p(C),p(D))},{base:{}}).base;return o(z)
}x.parse=function(z){if(null==z||""==z){return{}}return"object"==typeof z?g(z):h(z)
};var r=x.stringify=function(A,z){if(k(A)){return j(A,z)}else{if("[object Object]"==s.call(A)){return w(A,z)
}else{if("string"==typeof A){return a(A,z)}else{return z+"="+encodeURIComponent(String(A))
}}}};function a(A,z){if(!z){throw new TypeError("stringify expects an object")}return z+"="+encodeURIComponent(A)
}function j(z,C){var A=[];if(!C){throw new TypeError("stringify expects an object")
}for(var B=0;B<z.length;B++){A.push(r(z[B],C+"["+B+"]"))}return A.join("&")}function w(F,E){var A=[],D=v(F),C;
for(var B=0,z=D.length;B<z;++B){C=D[B];if(""==C){continue}if(null==F[C]){A.push(encodeURIComponent(C)+"=")
}else{A.push(r(F[C],E?E+"["+encodeURIComponent(C)+"]":encodeURIComponent(C)))}}return A.join("&")
}function n(B,A,C){var z=B[A];if(l.call(Object.prototype,A)){return}if(undefined===z){B[A]=C
}else{if(k(z)){z.push(C)}else{B[A]=[z,C]}}}function t(C){var z=C.length,B,D;for(var A=0;
A<z;++A){D=C[A];if("]"==D){B=false}if("["==D){B=true}if("="==D&&!B){return A}}}function p(A){try{return decodeURIComponent(A.replace(/\+/g," "))
}catch(z){return A}}},{}],3:[function(b,c,a){var f=b("./ac-base/globals");var h=f.window.AC=f.window.AC||{};
var d=b("./ac-base/Environment");var g=b("./ac-base/Element/onDOMReady");if(d.Browser.IE){if(d.Browser.IE.documentMode<9){b("./ac-base/shims/html5.js")()
}if(d.Browser.IE.documentMode<8){g(b("./ac-base/shims/ie/nonClickableImageBooster"))
}}if(typeof define!=="undefined"){h.define=define;h.require=b}h.adler32=b("./ac-base/adler32");
h.Ajax=b("./ac-base/Ajax");h.Array=b("./ac-base/Array");h.bindEventListeners=b("./ac-base/bindEventListeners");
h.Canvas=b("./ac-base/Canvas");h.Class=b("./ac-base/Class");h.Date=b("./ac-base/Date");
h.DeferredQueue=b("./ac-base/DeferredQueue");h.EasingFunctions=b("./ac-base/EasingFunctions");
h.Element=b("./ac-base/Element");h.Environment=d;h.Event=b("./ac-base/Event");h.Function=b("./ac-base/Function");
h.History=b("./ac-base/History");h.log=b("./ac-base/log");h.namespace=b("./ac-base/namespace");
h.NotificationCenter=b("./ac-base/NotificationCenter");h.Object=b("./ac-base/Object");
h.onDOMReady=g;h.onWindowLoad=b("./ac-base/Element/onWindowLoad");h.queryParameters=b("./ac-base/queryParameters");
h.RegExp=b("./ac-base/RegExp");h.Registry=b("./ac-base/Registry");h.String=b("./ac-base/String");
h.Synthesize=b("./ac-base/Synthesize");h.uid=b("./ac-base/uid");h.Viewport=b("./ac-base/Viewport");
h.windowHasLoaded=false;h.Element.addEventListener(f.window,"load",function(){h.windowHasLoaded=true
});c.exports=h},{"./ac-base/Ajax":4,"./ac-base/Array":8,"./ac-base/Canvas":9,"./ac-base/Class":10,"./ac-base/Date":11,"./ac-base/DeferredQueue":12,"./ac-base/EasingFunctions":13,"./ac-base/Element":14,"./ac-base/Element/onDOMReady":17,"./ac-base/Element/onWindowLoad":18,"./ac-base/Environment":20,"./ac-base/Event":26,"./ac-base/Function":27,"./ac-base/History":28,"./ac-base/NotificationCenter":29,"./ac-base/Object":30,"./ac-base/RegExp":31,"./ac-base/Registry":32,"./ac-base/String":34,"./ac-base/Synthesize":35,"./ac-base/Viewport":36,"./ac-base/adler32":37,"./ac-base/bindEventListeners":38,"./ac-base/globals":39,"./ac-base/log":40,"./ac-base/namespace":41,"./ac-base/queryParameters":42,"./ac-base/shims/html5.js":43,"./ac-base/shims/ie/nonClickableImageBooster":47,"./ac-base/uid":48}],4:[function(c,d,a){var b={};
c("./Ajax/ajax-tracker")(b);c("./Ajax/ajax-response")(b);c("./Ajax/ajax-request")(b);
b.getTransport=function(){return new XMLHttpRequest()};b.checkURL=function(g,i){var f=b.__validateArguments(g,i);
if(f){throw f}var h=b.getTransport();this.__handleReadyStateChange(h,i);h.open("HEAD",g,true);
h.send(null)};b.__handleReadyStateChange=function(g,f){g.onreadystatechange=function(){if(this.readyState===4){if(typeof f==="function"){f(this.status===200)
}}}};b.__validateArguments=function(f,h){var g;if(!f){g="Must provide a url"}if(!h){g="Must provide a callback"
}if(!f&&!h){g="Must provide a url and callback"}return g};d.exports=b},{"./Ajax/ajax-request":5,"./Ajax/ajax-response":6,"./Ajax/ajax-tracker":7}],5:[function(c,d,b){var f=c("../Class");
var a=c("../Object");d.exports=function(g){var h=f();h.prototype={__defaultOptions:{method:"get"},initialize:function(j,i){this._transport=g.getTransport();
this._mimeTypeOverride=null;this._options=null;a.synthesize(this);this.setOptions(a.extend(a.clone(this.__defaultOptions),i||{}));
g.AjaxTracker.sharedInstance().addResponder(this);this.__configureTransport(j)},__configureTransport:function(i){this.transport().onreadystatechange=this.__handleTransportStateChange.bind(this);
this.transport().open(this.options().method,i,true);this.transport().setRequestHeader("Content-Type",this.options().contentType);
this.transport().send(null)},__handleTransportStateChange:function(){if(this.transport().readyState===4){var i=new g.AjaxResponse(this)
}},overrideMimeType:function(i){this._mimeTypeOverride=i;if(this.transport().overrideMimeType){this.transport().overrideMimeType(i)
}},_overrideMimeType:null};g.AjaxRequest=h}},{"../Class":10,"../Object":30}],6:[function(b,c,a){var d=b("../Class");
c.exports=function(f){var g=d();g.prototype={_request:null,_transport:null,initialize:function(i){this._transport=i.transport();
this._request=i;var j=false;var h=this._transport.readyState===4;if(h){this.__triggerCallbacks();
j=true}if(j){if(this._request.options().onComplete){this._request.options().onComplete(this)
}f.AjaxTracker.sharedInstance().removeResponder(i)}},__triggerCallbacks:function(){var k=this._transport.status;
var j=k>=200&&k<300;var i=k>=400&&k<500;var h=k>=500&&k<600||k===0;if(j&&this._request.options().onSuccess){this._request.options().onSuccess(this)
}if(i&&this._request.options().onFailure){this._request.options().onFailure(this)
}if(h&&this._request.options().onError){this._request.options().onError(this)}},responseText:function(){return this._transport.responseText
},responseXML:function(){return this._transport.responseXML},responseJSON:function(){return JSON.parse(this._transport.responseText)
}};f.AjaxResponse=g}},{"../Class":10}],7:[function(b,c,a){var d=b("../Class");c.exports=function(f){var g=d();
g.prototype={__responders:[],initialize:function(){},addResponder:function(h){this.__responders.push(h);
return this.__responders},removeResponder:function(i){var h=this.__responders.length;
this.__responders=this.__responders.filter(function(k){return k!==i});var j=this.__responders.length;
if(h>j){return true}return false}};f.AjaxTracker=g}},{"../Class":10}],8:[function(c,d,b){var f=c("./Environment/Browser");
var a={};a.toArray=function(g){return Array.prototype.slice.call(g)};a.flatten=function(i){var g=[];
var h=function(j){if(Array.isArray(j)){j.forEach(h)}else{g.push(j)}};i.forEach(h);
return g};a.without=function(g,k){var i;var h=g.indexOf(k);var j=g.length;if(h>=0){if(h===(j-1)){i=g.slice(0,(j-1))
}else{if(h===0){i=g.slice(1)}else{i=g.slice(0,h);i=i.concat(g.slice(h+1))}}}else{return g
}return i};if(f.name==="IE"){c("./shims/ie/Array")(a,f)}d.exports=a},{"./Environment/Browser":21,"./shims/ie/Array":44}],9:[function(c,d,b){var f=c("./Element");
var a={};a.imageDataFromFile=function(h,i){if(typeof i!=="function"){throw new TypeError("Need callback method to call when imageData is retrieved.")
}if(typeof h!=="string"||h===""){throw new TypeError("Src for imageData must be an Image Node with a src attribute or a string.")
}var g=new Image();g.onload=function(){i(a.imageDataFromNode(g))};g.src=h};a.imageDataFromNode=function(g){if(!f.isElement(g)||g.getAttribute("src")==="null"||g.width===0){throw new TypeError("Source node must be an IMG tag and must have already loaded.")
}var j;var h=document.createElement("canvas");var i=h.getContext("2d");h.width=g.width;
h.height=g.height;i.drawImage(g,0,0);j=i.getImageData(0,0,g.width,g.height);return j
};d.exports=a},{"./Element":14}],10:[function(d,f,c){var b=d("./Object");var a=d("./Array");
var i=d("./Function");var g=d("./Element/onDOMReady");function h(){var j=a.toArray(arguments);
var n=(typeof j[0]==="function")?j.shift():null;var m=j.shift()||{};var l;var k=function(){var o;
var p;o=((typeof this.initialize==="function"&&k.__shouldInitialize!==false)?this.initialize.apply(this,arguments):false);
if(o===h.Invalidate){p=function(){try{if(this&&this._parentClass&&this._parentClass._sharedInstance===this){this._parentClass._sharedInstance=null
}}catch(q){throw q}};window.setTimeout(p.bind(this),200)}};k.__superclass=n;if(n){if(n.__superclass){l=h(n.__superclass,n.prototype)
}else{l=h(n.prototype)}l.__shouldInitialize=false;k.prototype=new l();b.extend(k.prototype,m);
h.__wrapSuperMethods(k)}else{k.prototype=m}k.sharedInstance=function(){if(!k._sharedInstance){k._sharedInstance=new k();
k._sharedInstance._parentClass=k}return k._sharedInstance};b.synthesize(k.prototype);
k.autocreate=m.__instantiateOnDOMReady||false;delete m.__instantiateOnDOMReady;
if(k.autocreate){g(function(){if(k.autocreate){k.sharedInstance()}})}return k}h.__wrapSuperMethods=function(m){var l=m.prototype;
var k=m.__superclass.prototype;var n;for(n in l){if(l.hasOwnProperty(n)){if(typeof l[n]==="function"){var j=l[n];
var o=i.getParamNames(j);if(o[0]==="$super"){l[n]=(function(q,p){var r=k[q];return function s(){var t=a.toArray(arguments);
return p.apply(this,[r.bind(this)].concat(t))}}(n,j))}}}}return this};h.Invalidate=function(){return false
};f.exports=h},{"./Array":8,"./Element/onDOMReady":17,"./Function":27,"./Object":30}],11:[function(b,c,a){var d={};
d.isDate=function(f){return !!(f&&typeof f.getTime==="function")};c.exports=d},{}],12:[function(c,a,i){var j=c("./Array");
var h=c("./Class");var f=c("./Object");var g={autoplay:false,asynchronous:false};
var d=h({initialize:function(k){if(typeof k!=="object"){k={}}this._options=f.extend(f.clone(g),k);
this._isPlaying=false;this._isRunningAction=false;this._queue=[];this.didFinish=this.__didFinish.bind(this);
this.synthesize()},add:function(m,l){var k={};var n;if(l>0){k.delay=l}n=new d.Action(m,k);
this.queue().push(n);if(!this.isPlaying()&&this._options.autoplay===true){this.start()
}},remove:function(k){this.setQueue(j.without(this.queue(),k))},start:function(){if(this.isPlaying()){return false
}this.setIsPlaying(true);this.__runNextAction()},stop:function(){if(!this.isPlaying()){return false
}this.setIsPlaying(false)},clear:function(){this.setQueue([]);this.stop()},__didFinish:function(){this.setIsRunningAction(false);
this.__runNextAction()},__runNextAction:function(){if(!this.isPlaying()){return false
}if(this.queue().length&&!this.isRunningAction()){var k=this.queue().shift();k.run();
if(this._options.asynchronous===true){this.setIsRunningAction(true);return}this.__runNextAction()
}}});var b={delay:0};d.Action=h({initialize:function(l,k){if(typeof l!=="function"){throw new TypeError("Deferred Queue func must be a function.")
}if(typeof k!=="object"){k={}}this._options=f.extend(f.clone(b),k);this.__func=l;
this.synthesize()},run:function(){var k=this.__func;if(typeof this._options.delay==="number"&&this._options.delay>0){window.setTimeout(function(){k()
},this._options.delay*1000)}else{k()}}});a.exports=d},{"./Array":8,"./Class":10,"./Object":30}],13:[function(b,c,a){var d={linear:function(h,f,i,g){return i*h/g+f
},easeInQuad:function(h,f,i,g){return i*(h/=g)*h+f},easeOutQuad:function(h,f,i,g){return -i*(h/=g)*(h-2)+f
},easeInOutQuad:function(h,f,i,g){if((h/=g/2)<1){return i/2*h*h+f}return -i/2*((--h)*(h-2)-1)+f
},easeInCubic:function(h,f,i,g){return i*(h/=g)*h*h+f},easeOutCubic:function(h,f,i,g){return i*((h=h/g-1)*h*h+1)+f
},easeInOutCubic:function(h,f,i,g){if((h/=g/2)<1){return i/2*h*h*h+f}return i/2*((h-=2)*h*h+2)+f
},easeInQuart:function(h,f,i,g){return i*(h/=g)*h*h*h+f},easeOutQuart:function(h,f,i,g){return -i*((h=h/g-1)*h*h*h-1)+f
},easeInOutQuart:function(h,f,i,g){if((h/=g/2)<1){return i/2*h*h*h*h+f}return -i/2*((h-=2)*h*h*h-2)+f
},easeInQuint:function(h,f,i,g){return i*(h/=g)*h*h*h*h+f},easeOutQuint:function(h,f,i,g){return i*((h=h/g-1)*h*h*h*h+1)+f
},easeInOutQuint:function(h,f,i,g){if((h/=g/2)<1){return i/2*h*h*h*h*h+f}return i/2*((h-=2)*h*h*h*h+2)+f
},easeInSine:function(h,f,i,g){return -i*Math.cos(h/g*(Math.PI/2))+i+f},easeOutSine:function(h,f,i,g){return i*Math.sin(h/g*(Math.PI/2))+f
},easeInOutSine:function(h,f,i,g){return -i/2*(Math.cos(Math.PI*h/g)-1)+f},easeInExpo:function(h,f,i,g){return(h==0)?f:i*Math.pow(2,10*(h/g-1))+f
},easeOutExpo:function(h,f,i,g){return(h==g)?f+i:i*(-Math.pow(2,-10*h/g)+1)+f},easeInOutExpo:function(h,f,i,g){if(h==0){return f
}if(h==g){return f+i}if((h/=g/2)<1){return i/2*Math.pow(2,10*(h-1))+f}return i/2*(-Math.pow(2,-10*--h)+2)+f
},easeInCirc:function(h,f,i,g){return -i*(Math.sqrt(1-(h/=g)*h)-1)+f},easeOutCirc:function(h,f,i,g){return i*Math.sqrt(1-(h=h/g-1)*h)+f
},easeInOutCirc:function(h,f,i,g){if((h/=g/2)<1){return -i/2*(Math.sqrt(1-h*h)-1)+f
}return i/2*(Math.sqrt(1-(h-=2)*h)+1)+f},easeInElastic:function(j,h,l,i){var f=1.70158;
var k=0;var g=l;if(j==0){return h}if((j/=i)==1){return h+l}if(!k){k=i*0.3}if(g<Math.abs(l)){g=l;
f=k/4}else{f=k/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(j-=1))*Math.sin((j*i-f)*(2*Math.PI)/k))+h
},easeOutElastic:function(j,h,l,i){var f=1.70158;var k=0;var g=l;if(j==0){return h
}if((j/=i)==1){return h+l}if(!k){k=i*0.3}if(g<Math.abs(l)){g=l;f=k/4}else{f=k/(2*Math.PI)*Math.asin(l/g)
}return g*Math.pow(2,-10*j)*Math.sin((j*i-f)*(2*Math.PI)/k)+l+h},easeInOutElastic:function(j,h,l,i){var f=1.70158;
var k=0;var g=l;if(j==0){return h}if((j/=i/2)==2){return h+l}if(!k){k=i*(0.3*1.5)
}if(g<Math.abs(l)){g=l;f=k/4}else{f=k/(2*Math.PI)*Math.asin(l/g)}if(j<1){return -0.5*(g*Math.pow(2,10*(j-=1))*Math.sin((j*i-f)*(2*Math.PI)/k))+h
}return g*Math.pow(2,-10*(j-=1))*Math.sin((j*i-f)*(2*Math.PI)/k)*0.5+l+h},easeInBack:function(i,g,j,h,f){if(f==undefined){f=1.70158
}return j*(i/=h)*i*((f+1)*i-f)+g},easeOutBack:function(i,g,j,h,f){if(f==undefined){f=1.70158
}return j*((i=i/h-1)*i*((f+1)*i+f)+1)+g},easeInOutBack:function(i,g,j,h,f){if(f==undefined){f=1.70158
}if((i/=h/2)<1){return j/2*(i*i*(((f*=(1.525))+1)*i-f))+g}return j/2*((i-=2)*i*(((f*=(1.525))+1)*i+f)+2)+g
},easeInBounce:function(h,f,i,g){return i-d.easeOutBounce(g-h,0,i,g)+f},easeOutBounce:function(h,f,i,g){if((h/=g)<(1/2.75)){return i*(7.5625*h*h)+f
}else{if(h<(2/2.75)){return i*(7.5625*(h-=(1.5/2.75))*h+0.75)+f}else{if(h<(2.5/2.75)){return i*(7.5625*(h-=(2.25/2.75))*h+0.9375)+f
}else{return i*(7.5625*(h-=(2.625/2.75))*h+0.984375)+f}}}},easeInOutBounce:function(h,f,i,g){if(h<g/2){return d.easeInBounce(h*2,0,i,g)*0.5+f
}return d.easeOutBounce(h*2-g,0,i,g)*0.5+i*0.5+f}};d.ease=function(h,g){if(g==="ease"){g="easeInOutSine"
}else{if(g==="ease-in"){g="easeInCubic"}else{if(g==="ease-out"){g="easeOutCubic"
}else{if(g==="ease-in-out"){g="easeInOutCubic"}else{if(g==="linear"){g="linear"
}else{if(g==="step-start"){return(h===0)?0:1}else{if(g==="step-end"){return(h===1)?1:0
}else{if(typeof g==="string"&&/^steps\(\d+\,\s*(start|end)\)$/.test(g)){var f=parseInt(g.match(/\d+/)[0]);
var i=g.match(/(start|end)/)[0];var j=(1/f);return Math[(i==="start")?"floor":"ceil"]((h/j))*j
}}}}}}}}if(typeof g==="string"){if(typeof d[g]==="function"&&g!=="ease"){g=d[g]
}else{throw new TypeError('"'+g+'" is not a valid easing type')}}return g(h,0,1,1)
};c.exports=d},{}],14:[function(c,a,d){var h=c("./Viewport");var i=c("./log");var k=c("./Element/events");
var l=c("./Element/vendorTransformHelper");var b=c("./Environment/Browser");var g={addEventListener:k.addEventListener,removeEventListener:k.removeEventListener,addVendorPrefixEventListener:k.addVendorPrefixEventListener,removeVendorPrefixEventListener:k.removeVendorPrefixEventListener,addVendorEventListener:function(n,o,p,m){i("ac-base.Element.addVendorEventListener is deprecated. Please use ac-base.Element.addVendorPrefixEventListener.");
return this.addVendorPrefixEventListener(n,o,p,m)},removeVendorEventListener:function(n,o,p,m){i("ac-base.Element.removeVendorEventListener is deprecated. Please use ac-base.Element.removeVendorPrefixEventListener.");
return this.removeVendorPrefixEventListener(n,o,p,m)}};c("./Element/EventDelegate")(g);
g.getElementById=function(m){if(typeof m==="string"){m=document.getElementById(m)
}if(g.isElement(m)){return m}else{return null}};g.selectAll=function(m,n){if(typeof n==="undefined"){n=document
}else{if(!g.isElement(n)&&n.nodeType!==9&&n.nodeType!==11){throw new TypeError("ac-base.Element.selectAll: Invalid context nodeType")
}}if(typeof m!=="string"){throw new TypeError("ac-base.Element.selectAll: Selector must be a string")
}return Array.prototype.slice.call(n.querySelectorAll(m))};g.select=function(m,n){if(typeof n==="undefined"){n=document
}else{if(!g.isElement(n)&&n.nodeType!==9&&n.nodeType!==11){throw new TypeError("ac-base.Element.select: Invalid context nodeType")
}}if(typeof m!=="string"){throw new TypeError("ac-base.Element.select: Selector must be a string")
}return n.querySelector(m)};var f=window.Element?(function(m){return m.matches||m.matchesSelector||m.webkitMatchesSelector||m.mozMatchesSelector||m.msMatchesSelector||m.oMatchesSelector
}(Element.prototype)):null;g.matchesSelector=function(n,m){return g.isElement(n)?f.call(n,m):false
};g.matches=function(n,m){i("ac-base.Element.matches is deprecated. Use ac-base.Element.filterBySelector instead.");
return g.filterBySelector(m,n)};g.filterBySelector=function(q,n){var m=[];for(var p=0,o=q.length;
p<o;p++){if(g.isElement(q[p])&&f.call(q[p],n)){m[m.length]=q[p]}}return m};g.setOpacity=function(m,n){i("ac-base.Element.setOpacity is deprecated. Use ac-base.Element.setStyle instead.");
return g.setStyle(m,{opacity:n})};g.setStyle=function(n,o){if((typeof o!=="string"&&typeof o!=="object")||Array.isArray(o)){throw new TypeError("styles argument must be either an object or a string")
}n=g.getElementById(n);var m;var p;var q;m=g.setStyle.__explodeStyleStringToObject(o);
for(q in m){if(m.hasOwnProperty(q)){p=q.replace(/-(\w)/g,g.setStyle.__camelCaseReplace);
g.setStyle.__setStyle(n,p,m,m[q])}}return n};g.setStyle.__explodeStyleStringToObject=function(q){var o=(typeof q==="object")?q:{};
var r;var p;var m;var n;if(typeof q==="string"){r=q.split(";");m=r.length;for(n=0;
n<m;n+=1){p=r[n].indexOf(":");if(p>0){o[r[n].substr(0,p).trim()]=r[n].substr(p+1).trim()
}}}return o};g.setStyle.__setStyle=function(o,p,n,m){if(typeof o.style[p]!=="undefined"){o.style[p]=m
}};g.setStyle.__camelCaseReplace=function(n,o,p,m){return(p===0)&&(m.substr(1,3)!=="moz")?o:o.toUpperCase()
};g.getStyle=function(n,o,m){var p;o=o.replace(/-(\w)/g,g.setStyle.__camelCaseReplace);
n=g.getElementById(n);o=(o==="float")?"cssFloat":o;m=m||window.getComputedStyle(n,null);
p=m?m[o]:null;if(o==="opacity"){return p?parseFloat(p):1}return p==="auto"?null:p
};g.cumulativeOffset=function(n){var o=g.getBoundingBox(n);var m=h.scrollOffsets();
var p=[o.top+m.y,o.left+m.x];p.top=p[0];p.left=p[1];return p};g.getBoundingBox=function(n){n=g.getElementById(n);
var p=n.getBoundingClientRect();var m=p.width||p.right-p.left;var o=p.height||p.bottom-p.top;
return{top:p.top,right:p.right,bottom:p.bottom,left:p.left,width:m,height:o}};g.getInnerDimensions=function(p){var s=g.getBoundingBox(p);
var m=s.width;var r=s.height;var q;var n;var o=window.getComputedStyle?window.getComputedStyle(p,null):null;
["padding","border"].forEach(function(t){["Top","Right","Bottom","Left"].forEach(function(u){q=t==="border"?t+u+"Width":t+u;
n=parseFloat(g.getStyle(p,q,o));n=isNaN(n)?0:n;if(u==="Right"||u==="Left"){m-=n
}if(u==="Top"||u==="Bottom"){r-=n}})});return{width:m,height:r}};g.getOuterDimensions=function(o){var r=g.getBoundingBox(o);
var m=r.width;var p=r.height;var q;var n=window.getComputedStyle?window.getComputedStyle(o,null):null;
["margin"].forEach(function(s){["Top","Right","Bottom","Left"].forEach(function(t){q=parseFloat(g.getStyle(o,s+t,n));
q=isNaN(q)?0:q;if(t==="Right"||t==="Left"){m+=q}if(t==="Top"||t==="Bottom"){p+=q
}})});return{width:m,height:p}};g.hasClassName=function(o,n){var m=g.getElementById(o);
if(m&&m.className!==""){return new RegExp("(\\s|^)"+n+"(\\s|$)").test(m.className)
}else{return false}};g.addClassName=function(o,n){var m=g.getElementById(o);if(m.classList){m.classList.add(n)
}else{if(!g.hasClassName(m,n)){m.className+=" "+n}}};g.removeClassName=function(o,n){var m=g.getElementById(o);
if(g.hasClassName(m,n)){var p=new RegExp("(\\s|^)"+n+"(\\s|$)");m.className=m.className.replace(p,"$1").trim()
}};g.toggleClassName=function(o,n){var m=g.getElementById(o);if(m.classList){m.classList.toggle(n)
}else{if(g.hasClassName(m,n)){g.removeClassName(m,n)}else{g.addClassName(m,n)}}};
g.isElement=function(m){return !!(m&&m.nodeType===1)};g.setVendorPrefixStyle=function(m,p,o){if(typeof p!=="string"){throw new TypeError("ac-base.Element.setVendorPrefixStyle: property must be a string")
}if(typeof o!=="string"&&typeof o!=="number"){throw new TypeError("ac-base.Element.setVendorPrefixStyle: value must be a string or a number")
}o+="";m=g.getElementById(m);var n=["","webkit","Moz","ms","O"];var r;var q;p=p.replace(/-(webkit|moz|ms|o)-/i,"");
p=p.replace(/^(webkit|Moz|ms|O)/,"");p=p.charAt(0).toLowerCase()+p.slice(1);p=p.replace(/-(\w)/,function(s,t){return t.toUpperCase()
});o=o.replace(/-(webkit|moz|ms|o)-/,"-vendor-");n.forEach(function(s){r=(s==="")?p:s+p.charAt(0).toUpperCase()+p.slice(1);
q=(s==="")?o.replace("-vendor-",""):o.replace("-vendor-","-"+s.charAt(0).toLowerCase()+s.slice(1)+"-");
if(r in m.style){g.setStyle(m,r+":"+q)}})};g.getVendorPrefixStyle=function(m,p){if(typeof p!=="string"){throw new TypeError("ac-base.Element.getVendorPrefixStyle: property must be a string")
}m=g.getElementById(m);var o=["","webkit","Moz","ms","O"];var n;p=p.replace(/-(webkit|moz|ms|o)-/i,"");
p=p.replace(/^(webkit|Moz|ms|O)/,"").charAt(0).toLowerCase()+p.slice(1);p=p.replace(/-(\w)/,function(q,r){return r.toUpperCase()
});o.some(function(r,q){var s=(r==="")?p:r+p.charAt(0).toUpperCase()+p.slice(1);
if(s in m.style){n=g.getStyle(m,s);return true}});return n};g.insert=function(n,o,m){if(!n||!(n.nodeType===1||n.nodeType===3||n.nodeType===11)){throw new TypeError("ac-base.Element.insert: element must be a valid node of type element, text, or document fragment")
}if(!o||!(o.nodeType===1||o.nodeType===11)){throw new TypeError("ac-base.Element.insert: target must be a valid node of type element or document fragment")
}switch(m){case"before":if(o.nodeType===11){throw new TypeError("ac-base.Element.insert: target cannot be nodeType of documentFragment when using placement ‘before’")
}o.parentNode.insertBefore(n,o);break;case"after":if(o.nodeType===11){throw new TypeError("ac-base.Element.insert: target cannot be nodeType of documentFragment when using placement ‘after’")
}o.parentNode.insertBefore(n,o.nextSibling);break;case"first":o.insertBefore(n,o.firstChild);
break;default:o.appendChild(n)}};g.insertAt=function(q,r,n){var p;var m;var o;q=g.getElementById(q);
r=g.getElementById(r);if(!g.isElement(q)||!g.isElement(r)){throw new TypeError("ac-base.Element.insertAt: element must be a valid DOM element")
}p=g.children(r);if(n<0&&p.length){n+=p.length}if(r.contains(q)&&n>p.indexOf(q)){n++
}if(p&&n<=p.length-1){for(o=0,m=p.length;o<m;o++){if(o===n){r.insertBefore(q,p[o]);
break}}}else{r.appendChild(q)}};g.children=function(o){var p,q;o=g.getElementById(o);
if(!g.isElement(o)){throw new TypeError("ac-base.Element.children: element must be a valid DOM element")
}if(o.children){p=[];for(var n=0,m=o.children.length;n<m;n++){q=o.children[n];if(q&&q.nodeType===1){p.push(q)
}}}return p.length?p:null};g.remove=function(m,o){if(!g.isElement(m)){throw new TypeError("ac-base.Element.remove: element must be a valid DOM element")
}if(o===true){var n=m.parentNode.removeChild(m);return n}else{m.parentNode.removeChild(m)
}};g.viewportOffset=function(m){var n=g.getBoundingBox(m);return{x:n.left,y:n.top}
};g.pixelsInViewport=function(o,n){var p;if(!g.isElement(o)){throw new TypeError("ac-base.Element.pixelsInViewport : element must be a valid DOM element")
}var q=h.dimensions();n=n||g.getBoundingBox(o);var m=n.top;if(m>=0){p=q.height-m;
if(p>n.height){p=n.height}}else{p=n.height+m}if(p<0){p=0}if(p>q.height){p=q.height
}return p};g.percentInViewport=function(n){var m=g.getBoundingBox(n);var o=g.pixelsInViewport(n,m);
return o/m.height};g.isInViewport=function(n,o){if(typeof o!=="number"||1<o||o<0){o=0
}var m=g.percentInViewport(n);return(m>o||m===1)};var j=function(n,o){n=g.getElementById(n);
var m=n.parentNode;while(m&&g.isElement(m)){if(typeof o==="function"){if(o(m)===false){break
}}if(m!==document.body){m=m.parentNode}else{m=null}}};g.ancestors=function(m,n){var o=[];
j(m,function(p){if(n===undefined||g.matchesSelector(p,n)){o.push(p)}});return o
};g.ancestor=function(n,o){n=g.getElementById(n);var m=null;if(n!==null&&o===undefined){return n.parentNode
}j(n,function(p){if(g.matchesSelector(p,o)){m=p;return false}});return m};g.setVendorPrefixTransform=function(m,n){if((typeof n!=="string"&&typeof n!=="object")||Array.isArray(n)||n===null){throw new TypeError("ac-base.Element.setVendorPrefixTransform: transformFunctions argument must be either an object or a string")
}g.setVendorPrefixStyle(m,"transform",l.convert2dFunctions(n))};if(b.name==="IE"){c("./shims/ie/Element")(g,b)
}a.exports=g},{"./Element/EventDelegate":15,"./Element/events":16,"./Element/vendorTransformHelper":19,"./Environment/Browser":21,"./Viewport":36,"./log":40,"./shims/ie/Element":45}],15:[function(b,c,a){c.exports=function(f){function d(h,g){this.element=h;
this.options=g||{}}d.prototype={__findMatchingTarget:function(h){var g=null;if(f.matchesSelector(h,this.options.selector)){g=h
}else{g=f.ancestor(h,this.options.selector)}return g},__generateDelegateMethod:function(){var g=this;
var h=g.options.handler;return function(i){var l=i.target||i.srcElement;var k=g.__findMatchingTarget(l);
var j;if(k!==null){j=new d.Event(i);j.setTarget(k);h(j)}}},attachEventListener:function(){this.__delegateMethod=this.__generateDelegateMethod();
f.addEventListener(this.element,this.options.eventType,this.__delegateMethod);return this.__delegateMethod
},unbind:function(){f.removeEventListener(this.element,this.options.eventType,this.__delegateMethod);
this.__delegateMethod=undefined}};d.instances=[];d.filterInstances=function(g){var h=[];
d.instances.forEach(function(i){if(g(i)===true){h.push(i)}});return h};d.Event=function(g){this.originalEvent=g
};d.Event.prototype.setTarget=function(g){this.target=g;this.currentTarget=g};f.addEventDelegate=function(j,i,h,k){var g=new f.__EventDelegate(j,{eventType:i,selector:h,handler:k});
d.instances.push(g);return g.attachEventListener()};f.removeEventDelegate=function(j,i,h,k){var g=f.__EventDelegate.filterInstances(function(l){var m=l.options;
return l.element===j&&m.selector===h&&m.eventType===i&&m.handler===k});g.forEach(function(l){l.unbind()
})};f.__EventDelegate=d}},{}],16:[function(b,d,a){var c={};c.addEventListener=function(i,g,h,f){if(i.addEventListener){i.addEventListener(g,h,f)
}else{if(i.attachEvent){i.attachEvent("on"+g,h)}else{i["on"+g]=h}}return i};c.dispatchEvent=function(g,f){if(document.createEvent){g.dispatchEvent(new CustomEvent(f))
}else{g.fireEvent("on"+f,document.createEventObject())}return g};c.removeEventListener=function(i,g,h,f){if(i.removeEventListener){i.removeEventListener(g,h,f)
}else{i.detachEvent("on"+g,h)}return i};c.addVendorPrefixEventListener=function(g,h,i,f){if(h.match(/^webkit/i)){h=h.replace(/^webkit/i,"")
}else{if(h.match(/^moz/i)){h=h.replace(/^moz/i,"")}else{if(h.match(/^ms/i)){h=h.replace(/^ms/i,"")
}else{if(h.match(/^o/i)){h=h.replace(/^o/i,"")}else{h=h.charAt(0).toUpperCase()+h.slice(1)
}}}}if(/WebKit/i.test(window.navigator.userAgent)){return c.addEventListener(g,"webkit"+h,i,f)
}else{if(/Opera/i.test(window.navigator.userAgent)){return c.addEventListener(g,"O"+h,i,f)
}else{if(/Gecko/i.test(window.navigator.userAgent)||/Trident/i.test(window.navigator.userAgent)){return c.addEventListener(g,h.toLowerCase(),i,f)
}else{h=h.charAt(0).toLowerCase()+h.slice(1);return c.addEventListener(g,h,i,f)
}}}};c.removeVendorPrefixEventListener=function(g,h,i,f){if(h.match(/^webkit/i)){h=h.replace(/^webkit/i,"")
}else{if(h.match(/^moz/i)){h=h.replace(/^moz/i,"")}else{if(h.match(/^ms/i)){h=h.replace(/^ms/i,"")
}else{if(h.match(/^o/i)){h=h.replace(/^o/i,"")}else{h=h.charAt(0).toUpperCase()+h.slice(1)
}}}}c.removeEventListener(g,"webkit"+h,i,f);c.removeEventListener(g,"O"+h,i,f);
c.removeEventListener(g,h.toLowerCase(),i,f);h=h.charAt(0).toLowerCase()+h.slice(1);
return c.removeEventListener(g,h,i,f)};d.exports=c},{}],17:[function(c,a,d){var f=c("../globals");
var k=c("./events");var b;var g;function h(m){var o=f.document;var n=f.window;if(m.type==="readystatechange"&&o.readyState!=="complete"){return
}var l=g.length;while(l--){g.shift().call(n,m.type||m)}k.removeEventListener(o,"DOMContentLoaded",h,false);
k.removeEventListener(o,"readystatechange",h,false);k.removeEventListener(n,"load",h,false);
clearTimeout(b)}function i(){try{f.document.documentElement.doScroll("left")}catch(l){b=setTimeout(i,50);
return}h("poll")}a.exports=function j(o){var n=f.document;var m=f.window;if(n.readyState==="complete"){o.call(m,"lazy")
}else{if(!g||!g.length){g=[];k.addEventListener(n,"DOMContentLoaded",h,false);k.addEventListener(n,"readystatechange",h,false);
k.addEventListener(m,"load",h,false);if(n.createEventObject&&n.documentElement.doScroll){try{if(!m.frameElement){i()
}}catch(l){}}}g.push(o)}}},{"../globals":39,"./events":16}],18:[function(d,g,b){var i=d("../globals");
var f=d("./events");var a;function h(){var j=a.length;while(j--){a.shift()()}f.removeEventListener(i.window,"load",h)
}g.exports=function c(j){if(i.document.readyState==="complete"){j()}else{if(!a){a=[];
f.addEventListener(i.window,"load",h)}a.push(j)}}},{"../globals":39,"./events":16}],19:[function(c,d,b){var a={__objectifiedFunctions:{},__paramMaps:{translate:"p1, p2, 0",translateX:"p1, 0, 0",translateY:"0, p1, 0",scale:"p1, p2, 1",scaleX:"p1, 1, 1",scaleY:"1, p1, 1",rotate:"0, 0, 1, p1",matrix:"p1, p2, 0, 0, p3, p4, 0, 0, 0, 0, 1, 0, p5, p6, 0, 1"},convert2dFunctions:function(g){var f;
this.__init(g);for(var h in this.__objectifiedFunctions){if(this.__objectifiedFunctions.hasOwnProperty(h)){f=this.__objectifiedFunctions[h].replace(" ","").split(",");
if(h in this.__paramMaps){for(var i in this.__paramMaps){if(h===i){this.valuesToSet.push(this.__stripFunctionAxis(h)+"3d("+this.__map2DTransformParams(f,this.__paramMaps[h])+")")
}}}else{this.valuesToSet.push(h+"("+this.__objectifiedFunctions[h]+")")}}}return this.valuesToSet.join(" ")
},__init:function(f){this.valuesToSet=[];this.__objectifiedFunctions=(typeof f==="object")?f:{};
if(typeof f==="string"){this.__objectifiedFunctions=this.__objectifyFunctionString(f)
}},__map2DTransformParams:function(f,g){f.forEach(function(j,h){g=g.replace("p"+(h+1),j)
});return g},__splitFunctionStringToArray:function(f){return f.match(/[\w]+\(.+?\)/g)
},__splitFunctionNameAndParams:function(f){return f.match(/(.*)\((.*)\)/)},__stripFunctionAxis:function(f){return f.match(/([a-z]+)(|X|Y)$/)[1]
},__objectifyFunctionString:function(f){var g=this;var h;this.__splitFunctionStringToArray(f).forEach(function(i){h=g.__splitFunctionNameAndParams(i);
g.__objectifiedFunctions[h[1]]=h[2]});return this.__objectifiedFunctions}};d.exports=a
},{}],20:[function(b,c,a){var d={Browser:b("./Environment/Browser"),Feature:b("./Environment/Feature")};
c.exports=d},{"./Environment/Browser":21,"./Environment/Feature":24}],21:[function(b,c,a){var d=b("./Browser/BrowserData");
var f=d.create();f.isWebKit=function(g){var h=g||window.navigator.userAgent;return h?!!h.match(/applewebkit/i):false
};f.lowerCaseUserAgent=navigator.userAgent.toLowerCase();if(f.name==="IE"){b("../shims/ie/Environment/Browser")(f)
}c.exports=f},{"../shims/ie/Environment/Browser":46,"./Browser/BrowserData":22}],22:[function(c,d,b){var f=c("./data");
var a=c("../../RegExp");function g(){}g.prototype={__getBrowserVersion:function(i,j){if(!i||!j){return
}var l=f.browser.filter(function(m){return m.identity===j})[0];var h=l.versionSearch||j;
var k=i.indexOf(h);if(k>-1){return parseFloat(i.substring(k+h.length+1))}},__getName:function(h){return this.__getIdentityStringFromArray(h)
},__getIdentity:function(h){if(h.string){return this.__matchSubString(h)}else{if(h.prop){return h.identity
}}},__getIdentityStringFromArray:function(h){for(var m=0,j=h.length,k;m<j;m++){k=this.__getIdentity(h[m]);
if(k){return k}}},__getOS:function(h){return this.__getIdentityStringFromArray(h)
},__getOSVersion:function(j,m){if(!j||!m){return}var l=f.os.filter(function(n){return n.identity===m
})[0];var h=l.versionSearch||m;var k=new RegExp(h+" ([\\d_\\.]+)","i");var i=j.match(k);
if(i!==null){return i[1].replace(/_/g,".")}},__matchSubString:function(i){var h=i.subString;
var j;if(h){j=a.isRegExp(h)&&!!i.string.match(h);if(j||i.string.indexOf(h)>-1){return i.identity
}}}};g.create=function(){var h=new g();var i={};i.name=h.__getName(f.browser);i.version=h.__getBrowserVersion(f.versionString,i.name);
i.os=h.__getOS(f.os);i.osVersion=h.__getOSVersion(f.versionString,i.os);return i
};d.exports=g},{"../../RegExp":31,"./data":23}],23:[function(b,c,a){c.exports={browser:[{string:window.navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:window.navigator.userAgent,subString:/silk/i,identity:"Silk"},{string:window.navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:window.navigator.userAgent,subString:/mobile\/[^\s]*\ssafari\//i,identity:"Safari Mobile",versionSearch:"Version"},{string:window.navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{prop:window.opera,identity:"Opera",versionSearch:"Version"},{string:window.navigator.vendor,subString:"iCab",identity:"iCab"},{string:window.navigator.vendor,subString:"KDE",identity:"Konqueror"},{string:window.navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:window.navigator.vendor,subString:"Camino",identity:"Camino"},{string:window.navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:window.navigator.userAgent,subString:"MSIE",identity:"IE",versionSearch:"MSIE"},{string:window.navigator.userAgent,subString:"Trident",identity:"IE",versionSearch:"rv"},{string:window.navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:window.navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],os:[{string:window.navigator.platform,subString:"Win",identity:"Windows",versionSearch:"Windows NT"},{string:window.navigator.platform,subString:"Mac",identity:"OS X"},{string:window.navigator.userAgent,subString:"iPhone",identity:"iOS",versionSearch:"iPhone OS"},{string:window.navigator.userAgent,subString:"iPad",identity:"iOS",versionSearch:"CPU OS"},{string:window.navigator.userAgent,subString:/android/i,identity:"Android"},{string:window.navigator.platform,subString:"Linux",identity:"Linux"}],versionString:window.navigator.userAgent||window.navigator.appVersion||undefined}
},{}],24:[function(d,f,c){var g=d("../log");var b={localStorageAvailable:d("./Feature/localStorageAvailable")};
var a=Object.prototype.hasOwnProperty;(function(){var j=null;var k=null;var h=null;
var i=null;b.isCSSAvailable=function(l){g("ac-base.Environment.Feature.isCSSAvailable is deprecated. Please use ac-base.Environment.Feature.cssPropertyAvailable instead.");
return this.cssPropertyAvailable(l)};b.cssPropertyAvailable=function(t){if(j===null){j=document.createElement("browserdetect").style
}if(k===null){k=["-webkit-","-moz-","-o-","-ms-","-khtml-",""]}if(h===null){h=["Webkit","Moz","O","ms","Khtml",""]
}if(i===null){i={}}t=t.replace(/([A-Z]+)([A-Z][a-z])/g,"$1\\-$2").replace(/([a-z\d])([A-Z])/g,"$1\\-$2").replace(/^(\-*webkit|\-*moz|\-*o|\-*ms|\-*khtml)\-/,"").toLowerCase();
switch(t){case"gradient":if(i.gradient!==undefined){return i.gradient}t="background-image:";
var r="gradient(linear,left top,right bottom,from(#9f9),to(white));";var q="linear-gradient(left top,#9f9, white);";
j.cssText=(t+k.join(r+t)+k.join(q+t)).slice(0,-t.length);i.gradient=(j.backgroundImage.indexOf("gradient")!==-1);
return i.gradient;case"inset-box-shadow":if(i["inset-box-shadow"]!==undefined){return i["inset-box-shadow"]
}t="box-shadow:";var s="#fff 0 1px 1px inset;";j.cssText=k.join(t+s);i["inset-box-shadow"]=(j.cssText.indexOf("inset")!==-1);
return i["inset-box-shadow"];default:var p=t.split("-");var l=p.length;var o;var n;
var m;if(p.length>0){t=p[0];for(n=1;n<l;n+=1){t+=p[n].substr(0,1).toUpperCase()+p[n].substr(1)
}}o=t.substr(0,1).toUpperCase()+t.substr(1);if(i[t]!==undefined){return i[t]}for(m=h.length-1;
m>=0;m-=1){if(j[h[m]+t]!==undefined||j[h[m]+o]!==undefined){i[t]=true;return true
}}return false}}}());b.supportsThreeD=function(){g("ac-base.Environment.Feature.supportsThreeD is deprecated. Please use ac-base.Environment.Feature.threeDTransformsAvailable instead.");
return this.threeDTransformsAvailable()};b.threeDTransformsAvailable=function(){if(typeof this._threeDTransformsAvailable!=="undefined"){return this._threeDTransformsAvailable
}var j,h;try{this._threeDTransformsAvailable=false;if(a.call(window,"styleMedia")){this._threeDTransformsAvailable=window.styleMedia.matchMedium("(-webkit-transform-3d)")
}else{if(a.call(window,"media")){this._threeDTransformsAvailable=window.media.matchMedium("(-webkit-transform-3d)")
}}if(!this._threeDTransformsAvailable){if(!(h=document.getElementById("supportsThreeDStyle"))){h=document.createElement("style");
h.id="supportsThreeDStyle";h.textContent="@media (transform-3d),(-o-transform-3d),(-moz-transform-3d),(-ms-transform-3d),(-webkit-transform-3d) { #supportsThreeD { height:3px } }";
document.querySelector("head").appendChild(h)}if(!(j=document.querySelector("#supportsThreeD"))){j=document.createElement("div");
j.id="supportsThreeD";document.body.appendChild(j)}this._threeDTransformsAvailable=(j.offsetHeight===3)||h.style.MozTransform!==undefined||h.style.WebkitTransform!==undefined
}return this._threeDTransformsAvailable}catch(i){return false}};b.supportsCanvas=function(){g("ac-base.Environment.Feature.supportsCanvas is deprecated. Please use ac-base.Environment.Feature.canvasAvailable instead.");
return this.canvasAvailable()};b.canvasAvailable=function(){if(typeof this._canvasAvailable!=="undefined"){return this._canvasAvailable
}var h=document.createElement("canvas");this._canvasAvailable=!!(typeof h.getContext==="function"&&h.getContext("2d"));
return this._canvasAvailable};b.sessionStorageAvailable=function(){if(typeof this._sessionStorageAvailable!=="undefined"){return this._sessionStorageAvailable
}try{if(typeof window.sessionStorage!=="undefined"&&typeof window.sessionStorage.setItem==="function"){window.sessionStorage.setItem("ac_browser_detect","test");
this._sessionStorageAvailable=true;window.sessionStorage.removeItem("ac_browser_detect","test")
}else{this._sessionStorageAvailable=false}}catch(h){this._sessionStorageAvailable=false
}return this._sessionStorageAvailable};b.cookiesAvailable=function(){if(typeof this._cookiesAvailable!=="undefined"){return this._cookiesAvailable
}this._cookiesAvailable=(a.call(document,"cookie")&&!!navigator.cookieEnabled)?true:false;
return this._cookiesAvailable};b.__normalizedScreenWidth=function(){if(typeof window.orientation==="undefined"){return window.screen.width
}return window.screen.width<window.screen.height?window.screen.width:window.screen.height
};b.touchAvailable=function(){return !!(("ontouchstart" in window)||window.DocumentTouch&&document instanceof window.DocumentTouch)
};b.isDesktop=function(){if(!this.touchAvailable()&&!window.orientation){return true
}return false};b.isHandheld=function(){return !this.isDesktop()&&!this.isTablet()
};b.isTablet=function(){return !this.isDesktop()&&this.__normalizedScreenWidth()>480
};b.isRetina=function(){var h=["min-device-pixel-ratio:1.5","-webkit-min-device-pixel-ratio:1.5","min-resolution:1.5dppx","min-resolution:144dpi","min--moz-device-pixel-ratio:1.5"];
var j;if(window.devicePixelRatio!==undefined){if(window.devicePixelRatio>=1.5){return true
}}else{for(j=0;j<h.length;j+=1){if(window.matchMedia("("+h[j]+")").matches===true){return true
}}}return false};b.svgAvailable=function(){return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")
};f.exports=b},{"../log":40,"./Feature/localStorageAvailable":25}],25:[function(d,f,b){var a=null;
f.exports=function c(){if(a===null){a=!!(window.localStorage&&window.localStorage.non_existent!==null)
}return a}},{}],26:[function(b,c,a){var d={};d.stop=function(f){if(!f){f=window.event
}if(f.stopPropagation){f.stopPropagation()}else{f.cancelBubble=true}if(f.preventDefault){f.preventDefault()
}f.stopped=true;f.returnValue=false};d.target=function(f){return(typeof f.target!=="undefined")?f.target:f.srcElement
};d.Keys={UP:38,DOWN:40,LEFT:37,RIGHT:39,ESC:27,SPACE:32,BACKSPACE:8,DELETE:46,END:35,HOME:36,PAGEDOWN:34,PAGEUP:33,RETURN:13,TAB:9};
c.exports=d},{}],27:[function(c,d,b){var a=c("./Array");var f={};f.emptyFunction=function(){};
f.bindAsEventListener=function(g,i){var h=a.toArray(arguments).slice(2);return function(j){return g.apply(i,[j||window.event].concat(h))
}};f.getParamNames=function(h){var g=h.toString();return g.slice(g.indexOf("(")+1,g.indexOf(")")).match(/([^\s,]+)/g)||[]
};f.iterateFramesOverAnimationDuration=function(m,l,j){var k=0;var g;var h;var i;
l=l*1000;h=function(n){i=i||n;k=l?Math.min(Math.max(0,(n-i)/l),1):1;m(k);if(k<1){g=window.requestAnimationFrame(h)
}else{window.cancelAnimationFrame(g);if(typeof j==="function"){j()}}};g=window.requestAnimationFrame(h)
};d.exports=f},{"./Array":8}],28:[function(c,f,b){var h=c("./NotificationCenter");
var g=c("./Class");var a=c("./Object");var i=c("./Element");var d={};d.HashChange=g({initialize:function(j){this._boundEventHandler=null;
this._notificationString=j||"ac-history-hashchange";this.synthesize()},__eventHandler:function(j){var k=new d.HashChange.Event(j);
h.publish(this.notificationString(),{data:k},false)},__bindWindowEvent:function(){this.setBoundEventHandler(this.__eventHandler.bind(this));
i.addEventListener(window,"hashchange",this.boundEventHandler())},__unbindWindowEvent:function(){i.removeEventListener(window,"hashchange",this.boundEventHandler());
this.setBoundEventHandler(null)},subscribe:function(j){if(this.boundEventHandler()===null){this.__bindWindowEvent()
}h.subscribe(this.notificationString(),j)},unsubscribe:function(j){h.unsubscribe(this.notificationString(),j);
if(!h.hasSubscribers(this.notificationString())){this.__unbindWindowEvent()}}});
d.HashChange.Event=g({initialize:function(j){this.event=j;a.extend(this,j);if(this.hasOwnProperty("oldURL")&&this.oldURL.match("#")){this.oldHash=this.oldURL.split("#")[1]
}if(this.hasOwnProperty("newURL")&&this.newURL.match("#")){this.newHash=this.newURL.split("#")[1]
}}});f.exports=d},{"./Class":10,"./Element":14,"./NotificationCenter":29,"./Object":30}],29:[function(b,c,a){var d={};
c.exports={publish:function(i,g,f){g=g||{};var h=function(){if((!d[i])||d[i].length<1){return
}d[i].forEach(function(j){if(typeof j!=="undefined"){if(j.target&&g.target){if(j.target===g.target){j.callback(g.data)
}}else{j.callback(g.data)}}})};if(f===true){window.setTimeout(h,10)}else{h()}},subscribe:function(f,h,g){if(!d[f]){d[f]=[]
}d[f].push({callback:h,target:g})},unsubscribe:function(g,i,h){var f=d[g].slice(0);
d[g].forEach(function(k,j){if(typeof k!=="undefined"){if(h){if(i===k.callback&&k.target===h){f.splice(j,1)
}}else{if(i===k.callback){f.splice(j,1)}}}});d[g]=f},hasSubscribers:function(h,j){if((!d[h])||d[h].length<1){return false
}if(!j){return true}var f=d[h].length;var g;while(f--){g=d[h][f];if(g.target&&j){if(g.target===j){return true
}}}return false}}},{}],30:[function(b,a,f){var g=b("./Synthesize");var j=b("qs");
var d={};var c=Object.prototype.hasOwnProperty;d.extend=function h(){var m;var l;
if(arguments.length<2){m=[{},arguments[0]]}else{m=[].slice.call(arguments)}l=m.shift();
m.forEach(function(o){for(var n in o){if(c.call(o,n)){l[n]=o[n]}}});return l};d.clone=function i(l){return d.extend({},l)
};if(Object.getPrototypeOf){d.getPrototypeOf=Object.getPrototypeOf}else{if(typeof this.__proto__==="object"){d.getPrototypeOf=function k(l){return l.__proto__
}}else{d.getPrototypeOf=function k(n){var l=n.constructor;var m;if(c.call(n,"constructor")){m=l;
if(!(delete n.constructor)){return null}l=n.constructor;n.constructor=m}return l?l.prototype:null
}}}d.toQueryParameters=function(l){if(typeof l!=="object"){throw new TypeError("toQueryParameters error: argument is not an object")
}return j.stringify(l)};d.isEmpty=function(l){var m;if(typeof l!=="object"){throw new TypeError("ac-base.Object.isEmpty : Invalid parameter - expected object")
}for(m in l){if(c.call(l,m)){return false}}return true};d.synthesize=function(l){if(typeof l==="object"){d.extend(l,d.clone(g));
l.synthesize();return l}else{throw new TypeError("Argument supplied was not a valid object.")
}};a.exports=d},{"./Synthesize":35,qs:2}],31:[function(c,d,b){var a={};a.isRegExp=function(f){return window.RegExp?f instanceof RegExp:false
};d.exports=a},{}],32:[function(d,f,c){var g=d("./Class");var b=d("./Object");var h=d("./Element");
var a=g();a.Component=d("./Registry/Component");a.prototype={__defaultOptions:{contextInherits:[],matchCatchAll:false},initialize:function(j,i){if(typeof j!=="string"){throw new Error("Prefix not defined for Component Registry")
}if(typeof i!=="object"){i={}}this._options=b.extend(b.clone(this.__defaultOptions),i);
this._prefix=j;this._reservedNames=[];this.__model=[];this.__lookup={};b.synthesize(this)
},addComponent:function(j,l,n,o,k){var m=null;var i;if(!this.__isReserved(j)){if(typeof j==="string"){if(typeof o==="string"){m=this.lookup(o)
}if(!m&&j!=="_base"){m=this.lookup("_base")||this.addComponent("_base")}if(this.lookup(j)){throw new Error("Cannot overwrite existing Component: "+j)
}if(typeof k!=="object"){k={}}if(typeof k.inherits==="undefined"&&Array.isArray(this._options.contextInherits)){k.inherits=this._options.contextInherits
}i=this.__lookup[j]=new a.Component(j,l,n,m,k);this.__addToModel(i);return i}}return null
},match:function(j){var i;if(i=this.__matchName(j)){return i}if(i=this.__matchQualifier(j)){return i
}if(this.options().matchCatchAll===true){if(typeof this.__model[1]!=="undefined"){if(typeof this.__model[1][0]!=="undefined"){return this.__model[1][0]
}else{throw new Error("Catchall Type not defined")}}else{throw new Error("No non-_base types defined at index 1.")
}}return null},__matchName:function(k){if(!h.isElement(k)){return null}var j,l;
for(j=this.__model.length-1;j>=0;j--){if(Array.isArray(this.__model[j])){for(l=this.__model[j].length-1;
l>=0;l--){if(h.hasClassName(k,this._prefix+this.__model[j][l].name())){return this.__model[j][l]
}}}}return null},__matchQualifier:function(k){if(!h.isElement(k)){return null}var j,l;
for(j=this.__model.length-1;j>=0;j--){if(Array.isArray(this.__model[j])){for(l=this.__model[j].length-1;
l>=0;l--){if(typeof this.__model[j][l].qualifier==="function"){if(this.__model[j][l].qualifier.apply(this.__model[j][l],[k,this._prefix])===true){return this.__model[j][l]
}}}}}return null},__addToModel:function(i){if(a.Component.isComponent(i)){if(typeof this.__model[i.level()]==="undefined"){this.__model[i.level()]=[]
}this.__model[i.level()].push(i)}},lookup:function(i){if(typeof i==="string"){if(typeof this.__lookup[i]!=="undefined"){return this.__lookup[i]
}}return null},hasComponent:function(i){var j;if(typeof i==="object"&&typeof i.name==="function"){if(j=this.lookup(i.name())){return j===i
}}return false},reserveName:function(i){if(typeof i==="string"){if(this.lookup(i)!==null){throw new Error("Cannot reserve name: Component with name already exists.")
}else{if(!this.__isReserved(i)){this._reservedNames.push(i)}}}else{throw new Error("Cannot reserve name: Name must be a string")
}},__isReserved:function(i){if(typeof i==="string"){return(this._reservedNames.indexOf(i)!==-1)
}else{throw new Error("Cannot check if this name is reserved because it is not a String.")
}}};f.exports=a},{"./Class":10,"./Element":14,"./Object":30,"./Registry/Component":33}],33:[function(c,f,b){var g=c("../Class");
var h=c("../Function");var a=c("../Object");var d=g();d.prototype={initialize:function(i,k,m,l,j){if(typeof i!=="string"){throw new Error("Cannot create Component without a name")
}this._name=i;this._properties=k||{};this.qualifier=typeof m==="function"?m:h.emptyFunction;
this._parent=l;this._context=j||{};a.synthesize(this)},properties:function(){var i=(typeof this._parent==="undefined"||this._parent===null)?{}:this._parent.properties();
return a.extend(i,this._properties)},context:function(i){if(this._context[i]){return this._context[i]
}else{if(Array.isArray(this._context.inherits)&&this._context.inherits.indexOf[i]!==-1){return(this.parent())?this.parent().context(i):null
}}return null},level:function(){if(typeof this._level!=="undefined"){return this._level
}if(this._name==="_base"){return 0}else{if(typeof this._parent==="undefined"||this._parent.name()==="_base"){return 1
}else{return this._parent.level()+1}}}};d.isComponent=function(i){return(i instanceof d)
};f.exports=d},{"../Class":10,"../Function":27,"../Object":30}],34:[function(d,f,c){var a=d("qs");
var b={};b.isString=function(g){return(typeof g==="string")};b.toCamelCase=function(g){if(!b.isString(g)){throw new TypeError("Argument must be of type String.")
}return g.replace(/-+(.)?/g,function(h,i){return i?i.toUpperCase():""})};b.queryStringToObject=function(g){if(!b.isString(g)){throw new TypeError("QueryStringToObject error: argument must be a string")
}return a.parse(g)};b.toQueryPair=function(g,h){if(!b.isString(g)||!b.isString(h)){throw new TypeError("toQueryPair error: argument must be a string")
}return encodeURIComponent(g)+"="+encodeURIComponent(h)};f.exports=b},{qs:2}],35:[function(d,g,b){var a={};
function f(h,i){var j=h.slice(1,h.length);if(typeof i[j]==="undefined"){i[j]=function(){return i[h]
}}}function c(h,i){var j=h.slice(1,h.length);j="set"+j.slice(0,1).toUpperCase()+j.slice(1,j.length);
if(typeof i[j]==="undefined"){i[j]=function(k){i[h]=k}}}a.synthesize=function(i){if(typeof i!=="object"){i=this
}var h;for(h in i){if(i.hasOwnProperty(h)){if(h.charAt(0)==="_"&&h.charAt(1)!=="_"){if(typeof i[h]!=="function"){f(h,i);
c(h,i)}}}}};g.exports=a},{}],36:[function(b,c,a){var d={};d.scrollOffsets=function(){return{x:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft,y:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop}
};d.dimensions=function(){return{height:window.innerHeight||document.documentElement.clientHeight,width:window.innerWidth||document.documentElement.clientWidth}
};c.exports=d},{}],37:[function(b,d,a){d.exports=function c(h){var f=65521;var k=1;
var g=0;var l;var j;for(j=0;j<h.length;j+=1){l=h.charCodeAt(j);k=(k+l)%f;g=(g+k)%f
}return(g<<16)|k}},{}],38:[function(b,c,a){var f=b("./Element");var g=b("./Function");
c.exports=function d(j,k,i){var l;k=f.getElementById(k);if(!f.isElement(k)){throw"Invalid or non-existent element passed to bindEventListeners."
}for(l in i){if(i.hasOwnProperty(l)){var h=i[l];if(typeof h==="function"){f.addEventListener(k,l,g.bindAsEventListener(h,j))
}else{if(typeof h==="string"){f.addEventListener(k,l,g.bindAsEventListener(j[h],j))
}}}}}},{"./Element":14,"./Function":27}],39:[function(b,c,a){c.exports={console:window.console,document:document,window:window}
},{}],40:[function(f,g,b){var d=f("./Environment/Feature/localStorageAvailable");
var a="f7c9180f-5c45-47b4-8de4-428015f096c0";var c=(d()&&!!window.localStorage.getItem(a));
g.exports=function h(i){if(window.console&&typeof console.log==="function"&&c){console.log(i)
}}},{"./Environment/Feature/localStorageAvailable":25}],41:[function(b,c,a){c.exports=function d(h){var f;
if(!(h&&h.match&&h.match(/\S/))){throw"Attempt to create namespace with no name."
}var g=h.split(/\./);var j=window;for(f=0;f<g.length;f++){j[g[f]]=j[g[f]]||{};j=j[g[f]]
}}},{}],42:[function(d,f,c){var b=d("./String");f.exports=function a(){var g={};
var h=window.location.toString().split("?")[1];if(b.isString(h)){g=b.queryStringToObject(h)
}return g}},{"./String":34}],43:[function(b,c,a){c.exports=function(){var d=["abbr","article","aside","command","details","figcaption","figure","footer","header","hgroup","mark","meter","nav","output","picture","progress","section","source","summary","time","video"];
d.forEach(function(f){document.createElement(f)})}},{}],44:[function(b,c,a){c.exports=function(d,f){if(f.IE.documentMode<=8){d.toArray=function(h){var k=[];
var g=h.length;var j;if(g>0){for(j=0;j<g;j+=1){k.push(h[j])}}return k}}}},{}],45:[function(c,d,b){var a=c("../../Array");
var f=c("../../vendor/Sizzle");d.exports=function(j,i,h){var g=i.IE.documentMode;
h=h||f;if(g<8){j.selectAll=function(k,l){if(typeof l==="undefined"){l=document}else{if(!j.isElement(l)&&l.nodeType!==9&&l.nodeType!==11){throw new TypeError("ac-base.Element.selectAll: Invalid context nodeType")
}}if(typeof k!=="string"){throw new TypeError("ac-base.Element.selectAll: Selector must be a string")
}if(l.nodeType===11){var n=[];var m;a.toArray(l.childNodes).forEach(function(o){if(h.matchesSelector(o,k)){n.push(o)
}if(m=h(k,o).length>0){n.concat(m)}});return n}return h(k,l)}}else{if(g<9){j.selectAll=function(k,l){if(typeof l==="undefined"){l=document
}else{if(!j.isElement(l)&&l.nodeType!==9&&l.nodeType!==11){throw new TypeError("ac-base.Element.selectAll: Invalid context nodeType")
}}if(typeof k!=="string"){throw new TypeError("ac-base.Element.selectAll: Selector must be a string")
}return a.toArray(l.querySelectorAll(k))}}}if(g<8){j.select=function(k,m){if(typeof m==="undefined"){m=document
}else{if(!j.isElement(m)&&m.nodeType!==9&&m.nodeType!==11){throw new TypeError("ac-base.Element.select: Invalid context nodeType")
}}if(typeof k!=="string"){throw new TypeError("ac-base.Element.select: Selector must be a string")
}if(m.nodeType===11){var l=[];var n;a.toArray(m.childNodes).some(function(o){if(h.matchesSelector(o,k)){l=o;
return true}else{if(n=h(k,o).length>0){l=n[0];return true}}});return l}return h(k,m)[0]
}}if(g<9){j.matchesSelector=function(l,k){return h.matchesSelector(l,k)};j.filterBySelector=function(l,k){return h.matches(k,l)
}}if(g<9&&typeof window.getComputedStyle!=="function"){j.getStyle=function(m,n,l){m=j.getElementById(m);
var k;var o;l=l||m.currentStyle;if(l){n=n.replace(/-(\w)/g,j.setStyle.__camelCaseReplace);
n=n==="float"?"styleFloat":n;if(n==="opacity"){k=m.filters["DXImageTransform.Microsoft.Alpha"]||m.filters.Alpha;
if(k){return parseFloat(k.Opacity/100)}return 1}o=l[n]||null;return o==="auto"?null:o
}}}if(g<=8){j.setStyle.__superSetStyle=j.setStyle.__setStyle;j.setStyle.__setStyle=function(m,n,l,k){if(n==="opacity"){j.setStyle.__setOpacity(m,k)
}else{j.setStyle.__superSetStyle(m,n,l,k)}};j.setStyle.__setOpacity=function(l,m){m=(m>1)?1:((m<0.00001)?0:m)*100;
var k=l.filters["DXImageTransform.Microsoft.Alpha"]||l.filters.Alpha;if(k){k.Opacity=m
}else{l.style.filter+=" progid:DXImageTransform.Microsoft.Alpha(Opacity="+m+")"
}}}if(i.version<8){j.getBoundingBox=function(l){l=j.getElementById(l);var o=l.offsetLeft;
var n=l.offsetTop;var k=l.offsetWidth;var m=l.offsetHeight;return{top:n,right:o+k,bottom:n+m,left:o,width:k,height:m}
}}}},{"../../Array":8,"../../vendor/Sizzle":49}],46:[function(b,c,a){c.exports=function(f){function d(){var g;
if(document.documentMode){g=parseInt(document.documentMode,10)}else{g=5;if(document.compatMode){if(document.compatMode==="CSS1Compat"){g=7
}}}return g}f.IE={documentMode:d()}}},{}],47:[function(c,d,b){var f=c("../../Element");
function a(i,j){var g=false;var h=i.parentNode;while(h!==j){if(h){if(h.currentStyle.hasLayout){g=true;
break}h=h.parentNode}}return g}d.exports=function(){var o;var j;var p;var i;var l=[];

var h;
//var m=(location.protocol==="https:"?"https://ssl":"http://images")+".apple.com";
var m=doname+"";

var k="g";var n="url("+m+"/global/elements/blank."+k+"if)";f.selectAll("a > * img").forEach(function(g){o=g.parentNode;
j=f.ancestor(g,"a");if(a(g,j)&&g.height>0&&g.width>0){if(!f.select("ieclickbooster",j)){p=document.createElement("ieclickbooster");
i=f.getStyle(j,"position");if(i==="static"){f.setStyle(j,{position:"relative"})
}f.selectAll("> *",j).forEach(function(q){var r=parseInt(q.currentStyle.zIndex,10);
if(r>0){l.push(r)}});l.sort(function(r,q){return q-r});h=l[0]?l[0].toString():"1";
f.insert(p,j);f.setStyle(p,{display:"block",position:"absolute",top:"0",bottom:"0",left:"0",right:"0",background:n,cursor:"pointer",zIndex:h})
}}})}},{"../../Element":14}],48:[function(b,d,a){var c=0;d.exports=function f(){return c++
}},{}],49:[function(b,c,a){
/*!
 * Sizzle CSS Selector Engine
 *  Copyright 2012, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
(function(ad,v){var ai,D,u,h,n,l=ad.document,o=l.documentElement,L="undefined",p=false,m=true,t=0,y=[].slice,ah=[].push,al=("sizcache"+Math.random()).replace(".",""),O="[\\x20\\t\\r\\n\\f]",x="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])",w="(?:[\\w#_-]|[^\\x00-\\xa0]|\\\\.)",aq="([*^$|!~]?=)",aa="\\["+O+"*("+x+"+)"+O+"*(?:"+aq+O+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+w+"+)|)|)"+O+"*\\]",ar=":("+x+"+)(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|(.*))\\)|)",Q=":(nth|eq|gt|lt|first|last|even|odd)(?:\\((\\d*)\\)|)(?=[^-]|$)",s=O+"*([\\x20\\t\\r\\n\\f>+~])"+O+"*",r="(?=[^\\x20\\t\\r\\n\\f])(?:\\\\.|"+aa+"|"+ar.replace(2,7)+"|[^\\\\(),])+",aj=new RegExp("^"+O+"+|((?:^|[^\\\\])(?:\\\\.)*)"+O+"+$","g"),U=new RegExp("^"+s),I=new RegExp(r+"?(?="+O+"*,|$)","g"),Y=new RegExp("^(?:(?!,)(?:(?:^|,)"+O+"*"+r+")*?|"+O+"*(.*?))(\\)|$)"),ao=new RegExp(r.slice(19,-6)+"\\x20\\t\\r\\n\\f>+~])+|"+s,"g"),Z=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,ae=/[\x20\t\r\n\f]*[+~]/,am=/:not\($/,E=/h\d/i,ab=/input|select|textarea|button/i,H=/\\(?!\\)/g,T={ID:new RegExp("^#("+x+"+)"),CLASS:new RegExp("^\\.("+x+"+)"),NAME:new RegExp("^\\[name=['\"]?("+x+"+)['\"]?\\]"),TAG:new RegExp("^("+x.replace("[-","[-\\*")+"+)"),ATTR:new RegExp("^"+aa),PSEUDO:new RegExp("^"+ar),CHILD:new RegExp("^:(only|nth|last|first)-child(?:\\("+O+"*(even|odd|(([+-]|)(\\d*)n|)"+O+"*(?:([+-]|)"+O+"*(\\d+)|))"+O+"*\\)|)","i"),POS:new RegExp(Q,"ig"),needsContext:new RegExp("^"+O+"*[>+~]|"+Q,"i")},ag={},F=[],A={},J=[],an=function(at){at.sizzleFilter=true;
return at},i=function(at){return function(au){return au.nodeName.toLowerCase()==="input"&&au.type===at
}},G=function(at){return function(av){var au=av.nodeName.toLowerCase();return(au==="input"||au==="button")&&av.type===at
}},W=function(at){var au=false,aw=l.createElement("div");try{au=at(aw)}catch(av){}aw=null;
return au},C=W(function(au){au.innerHTML="<select></select>";var at=typeof au.lastChild.getAttribute("multiple");
return at!=="boolean"&&at!=="string"}),f=W(function(au){au.id=al+0;au.innerHTML="<a name='"+al+"'></a><div name='"+al+"'></div>";
o.insertBefore(au,o.firstChild);var at=l.getElementsByName&&l.getElementsByName(al).length===2+l.getElementsByName(al+0).length;
n=!l.getElementById(al);o.removeChild(au);return at}),k=W(function(at){at.appendChild(l.createComment(""));
return at.getElementsByTagName("*").length===0}),S=W(function(at){at.innerHTML="<a href='#'></a>";
return at.firstChild&&typeof at.firstChild.getAttribute!==L&&at.firstChild.getAttribute("href")==="#"
}),R=W(function(at){at.innerHTML="<div class='hidden e'></div><div class='hidden'></div>";
if(!at.getElementsByClassName||at.getElementsByClassName("e").length===0){return false
}at.lastChild.className="e";return at.getElementsByClassName("e").length!==1});
var ac=function(aw,at,ay,aB){ay=ay||[];at=at||l;var az,au,aA,av,ax=at.nodeType;
if(ax!==1&&ax!==9){return[]}if(!aw||typeof aw!=="string"){return ay}aA=z(at);if(!aA&&!aB){if((az=Z.exec(aw))){if((av=az[1])){if(ax===9){au=at.getElementById(av);
if(au&&au.parentNode){if(au.id===av){ay.push(au);return ay}}else{return ay}}else{if(at.ownerDocument&&(au=at.ownerDocument.getElementById(av))&&P(at,au)&&au.id===av){ay.push(au);
return ay}}}else{if(az[2]){ah.apply(ay,y.call(at.getElementsByTagName(aw),0));return ay
}else{if((av=az[3])&&R&&at.getElementsByClassName){ah.apply(ay,y.call(at.getElementsByClassName(av),0));
return ay}}}}}return ak(aw,at,ay,aB,aA)};var V=ac.selectors={cacheLength:50,match:T,order:["ID","TAG"],attrHandle:{},createPseudo:an,find:{ID:n?function(aw,av,au){if(typeof av.getElementById!==L&&!au){var at=av.getElementById(aw);
return at&&at.parentNode?[at]:[]}}:function(aw,av,au){if(typeof av.getElementById!==L&&!au){var at=av.getElementById(aw);
return at?at.id===aw||typeof at.getAttributeNode!==L&&at.getAttributeNode("id").value===aw?[at]:v:[]
}},TAG:k?function(at,au){if(typeof au.getElementsByTagName!==L){return au.getElementsByTagName(at)
}}:function(at,ax){var aw=ax.getElementsByTagName(at);if(at==="*"){var ay,av=[],au=0;
for(;(ay=aw[au]);au++){if(ay.nodeType===1){av.push(ay)}}return av}return aw}},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(at){at[1]=at[1].replace(H,"");
at[3]=(at[4]||at[5]||"").replace(H,"");if(at[2]==="~="){at[3]=" "+at[3]+" "}return at.slice(0,4)
},CHILD:function(at){at[1]=at[1].toLowerCase();if(at[1]==="nth"){if(!at[2]){ac.error(at[0])
}at[3]=+(at[3]?at[4]+(at[5]||1):2*(at[2]==="even"||at[2]==="odd"));at[4]=+((at[6]+at[7])||at[2]==="odd")
}else{if(at[2]){ac.error(at[0])}}return at},PSEUDO:function(at){var au,av=at[4];
if(T.CHILD.test(at[0])){return null}if(av&&(au=Y.exec(av))&&au.pop()){at[0]=at[0].slice(0,au[0].length-av.length-1);
av=au[0].slice(0,-1)}at.splice(2,3,av||at[3]);return at}},filter:{ID:n?function(at){at=at.replace(H,"");
return function(au){return au.getAttribute("id")===at}}:function(at){at=at.replace(H,"");
return function(av){var au=typeof av.getAttributeNode!==L&&av.getAttributeNode("id");
return au&&au.value===at}},TAG:function(at){if(at==="*"){return function(){return true
}}at=at.replace(H,"").toLowerCase();return function(au){return au.nodeName&&au.nodeName.toLowerCase()===at
}},CLASS:function(at){var au=ag[at];if(!au){au=ag[at]=new RegExp("(^|"+O+")"+at+"("+O+"|$)");
F.push(at);if(F.length>V.cacheLength){delete ag[F.shift()]}}return function(av){return au.test(av.className||(typeof av.getAttribute!==L&&av.getAttribute("class"))||"")
}},ATTR:function(av,au,at){if(!au){return function(aw){return ac.attr(aw,av)!=null
}}return function(ax){var aw=ac.attr(ax,av),ay=aw+"";if(aw==null){return au==="!="
}switch(au){case"=":return ay===at;case"!=":return ay!==at;case"^=":return at&&ay.indexOf(at)===0;
case"*=":return at&&ay.indexOf(at)>-1;case"$=":return at&&ay.substr(ay.length-at.length)===at;
case"~=":return(" "+ay+" ").indexOf(at)>-1;case"|=":return ay===at||ay.substr(0,at.length+1)===at+"-"
}}},CHILD:function(au,aw,ax,av){if(au==="nth"){var at=t++;return function(aB){var ay,aC,aA=0,az=aB;
if(ax===1&&av===0){return true}ay=aB.parentNode;if(ay&&(ay[al]!==at||!aB.sizset)){for(az=ay.firstChild;
az;az=az.nextSibling){if(az.nodeType===1){az.sizset=++aA;if(az===aB){break}}}ay[al]=at
}aC=aB.sizset-av;if(ax===0){return aC===0}else{return(aC%ax===0&&aC/ax>=0)}}}return function(az){var ay=az;
switch(au){case"only":case"first":while((ay=ay.previousSibling)){if(ay.nodeType===1){return false
}}if(au==="first"){return true}ay=az;case"last":while((ay=ay.nextSibling)){if(ay.nodeType===1){return false
}}return true}}},PSEUDO:function(ax,aw,au,at){var av=V.pseudos[ax]||V.pseudos[ax.toLowerCase()];
if(!av){ac.error("unsupported pseudo: "+ax)}if(!av.sizzleFilter){return av}return av(aw,au,at)
}},pseudos:{not:an(function(at,av,au){var aw=q(at.replace(aj,"$1"),av,au);return function(ax){return !aw(ax)
}}),enabled:function(at){return at.disabled===false},disabled:function(at){return at.disabled===true
},checked:function(at){var au=at.nodeName.toLowerCase();return(au==="input"&&!!at.checked)||(au==="option"&&!!at.selected)
},selected:function(at){if(at.parentNode){at.parentNode.selectedIndex}return at.selected===true
},parent:function(at){return !!at.firstChild},empty:function(at){return !at.firstChild
},contains:an(function(at){return function(au){return(au.textContent||au.innerText||d(au)).indexOf(at)>-1
}}),has:an(function(at){return function(au){return ac(at,au).length>0}}),header:function(at){return E.test(at.nodeName)
},text:function(av){var au,at;return av.nodeName.toLowerCase()==="input"&&(au=av.type)==="text"&&((at=av.getAttribute("type"))==null||at.toLowerCase()===au)
},radio:i("radio"),checkbox:i("checkbox"),file:i("file"),password:i("password"),image:i("image"),submit:G("submit"),reset:G("reset"),button:function(au){var at=au.nodeName.toLowerCase();
return at==="input"&&au.type==="button"||at==="button"},input:function(at){return ab.test(at.nodeName)
},focus:function(at){var au=at.ownerDocument;return at===au.activeElement&&(!au.hasFocus||au.hasFocus())&&!!(at.type||at.href)
},active:function(at){return at===at.ownerDocument.activeElement}},setFilters:{first:function(av,au,at){return at?av.slice(1):[av[0]]
},last:function(aw,av,au){var at=aw.pop();return au?aw:[at]},even:function(ay,ax,aw){var av=[],au=aw?1:0,at=ay.length;
for(;au<at;au=au+2){av.push(ay[au])}return av},odd:function(ay,ax,aw){var av=[],au=aw?0:1,at=ay.length;
for(;au<at;au=au+2){av.push(ay[au])}return av},lt:function(av,au,at){return at?av.slice(+au):av.slice(0,+au)
},gt:function(av,au,at){return at?av.slice(0,+au+1):av.slice(+au+1)},eq:function(aw,av,au){var at=aw.splice(+av,1);
return au?aw:at}}};V.setFilters.nth=V.setFilters.eq;V.filters=V.pseudos;if(!S){V.attrHandle={href:function(at){return at.getAttribute("href",2)
},type:function(at){return at.getAttribute("type")}}}if(f){V.order.push("NAME");
V.find.NAME=function(at,au){if(typeof au.getElementsByName!==L){return au.getElementsByName(at)
}}}if(R){V.order.splice(1,0,"CLASS");V.find.CLASS=function(av,au,at){if(typeof au.getElementsByClassName!==L&&!at){return au.getElementsByClassName(av)
}}}try{y.call(o.childNodes,0)[0].nodeType}catch(ap){y=function(au){var av,at=[];
for(;(av=this[au]);au++){at.push(av)}return at}}var z=ac.isXML=function(at){var au=at&&(at.ownerDocument||at).documentElement;
return au?au.nodeName!=="HTML":false};var P=ac.contains=o.compareDocumentPosition?function(au,at){return !!(au.compareDocumentPosition(at)&16)
}:o.contains?function(au,at){var aw=au.nodeType===9?au.documentElement:au,av=at.parentNode;
return au===av||!!(av&&av.nodeType===1&&aw.contains&&aw.contains(av))}:function(au,at){while((at=at.parentNode)){if(at===au){return true
}}return false};var d=ac.getText=function(ax){var aw,au="",av=0,at=ax.nodeType;
if(at){if(at===1||at===9||at===11){if(typeof ax.textContent==="string"){return ax.textContent
}else{for(ax=ax.firstChild;ax;ax=ax.nextSibling){au+=d(ax)}}}else{if(at===3||at===4){return ax.nodeValue
}}}else{for(;(aw=ax[av]);av++){au+=d(aw)}}return au};ac.attr=function(aw,av){var at,au=z(aw);
if(!au){av=av.toLowerCase()}if(V.attrHandle[av]){return V.attrHandle[av](aw)}if(C||au){return aw.getAttribute(av)
}at=aw.getAttributeNode(av);return at?typeof aw[av]==="boolean"?aw[av]?av:null:at.specified?at.value:null:null
};ac.error=function(at){throw new Error("Syntax error, unrecognized expression: "+at)
};[0,0].sort(function(){return(m=0)});if(o.compareDocumentPosition){u=function(au,at){if(au===at){p=true;
return 0}return(!au.compareDocumentPosition||!at.compareDocumentPosition?au.compareDocumentPosition:au.compareDocumentPosition(at)&4)?-1:1
}}else{u=function(aB,aA){if(aB===aA){p=true;return 0}else{if(aB.sourceIndex&&aA.sourceIndex){return aB.sourceIndex-aA.sourceIndex
}}var ay,au,av=[],at=[],ax=aB.parentNode,az=aA.parentNode,aC=ax;if(ax===az){return h(aB,aA)
}else{if(!ax){return -1}else{if(!az){return 1}}}while(aC){av.unshift(aC);aC=aC.parentNode
}aC=az;while(aC){at.unshift(aC);aC=aC.parentNode}ay=av.length;au=at.length;for(var aw=0;
aw<ay&&aw<au;aw++){if(av[aw]!==at[aw]){return h(av[aw],at[aw])}}return aw===ay?h(aB,at[aw],-1):h(av[aw],aA,1)
};h=function(au,at,av){if(au===at){return av}var aw=au.nextSibling;while(aw){if(aw===at){return -1
}aw=aw.nextSibling}return 1}}ac.uniqueSort=function(au){var av,at=1;if(u){p=m;au.sort(u);
if(p){for(;(av=au[at]);at++){if(av===au[at-1]){au.splice(at--,1)}}}}return au};
function B(au,ay,ax,av){var aw=0,at=ay.length;for(;aw<at;aw++){ac(au,ay[aw],ax,av)
}}function X(at,av,az,aA,au,ay){var aw,ax=V.setFilters[av.toLowerCase()];if(!ax){ac.error(av)
}if(at||!(aw=au)){B(at||"*",aA,(aw=[]),au)}return aw.length>0?ax(aw,az,ay):[]}function af(aD,at,aB,av,aH){var ay,au,ax,aJ,aA,aI,aC,aG,aE=0,aF=aH.length,aw=T.POS,az=new RegExp("^"+aw.source+"(?!"+O+")","i"),aK=function(){var aM=1,aL=arguments.length-2;
for(;aM<aL;aM++){if(arguments[aM]===v){ay[aM]=v}}};for(;aE<aF;aE++){aw.exec("");
aD=aH[aE];aJ=[];ax=0;aA=av;while((ay=aw.exec(aD))){aG=aw.lastIndex=ay.index+ay[0].length;
if(aG>ax){aC=aD.slice(ax,ay.index);ax=aG;aI=[at];if(U.test(aC)){if(aA){aI=aA}aA=av
}if((au=am.test(aC))){aC=aC.slice(0,-5).replace(U,"$&*")}if(ay.length>1){ay[0].replace(az,aK)
}aA=X(aC,ay[1],ay[2],aI,aA,au)}}if(aA){aJ=aJ.concat(aA);if((aC=aD.slice(ax))&&aC!==")"){B(aC,aJ,aB,av)
}else{ah.apply(aB,aJ)}}else{ac(aD,at,aB,av)}}return aF===1?aB:ac.uniqueSort(aB)
}function g(az,av,aC){var aE,aD,aF,ax=[],aA=0,aB=Y.exec(az),au=!aB.pop()&&!aB.pop(),aG=au&&az.match(I)||[""],at=V.preFilter,aw=V.filter,ay=!aC&&av!==l;
for(;(aD=aG[aA])!=null&&au;aA++){ax.push(aE=[]);if(ay){aD=" "+aD}while(aD){au=false;
if((aB=U.exec(aD))){aD=aD.slice(aB[0].length);au=aE.push({part:aB.pop().replace(aj," "),captures:aB})
}for(aF in aw){if((aB=T[aF].exec(aD))&&(!at[aF]||(aB=at[aF](aB,av,aC)))){aD=aD.slice(aB.shift().length);
au=aE.push({part:aF,captures:aB})}}if(!au){break}}}if(!au){ac.error(az)}return ax
}function M(ax,aw,av){var at=aw.dir,au=t++;if(!ax){ax=function(ay){return ay===av
}}return aw.first?function(az,ay){while((az=az[at])){if(az.nodeType===1){return ax(az,ay)&&az
}}}:function(aA,az){var ay,aB=au+"."+D,aC=aB+"."+ai;while((aA=aA[at])){if(aA.nodeType===1){if((ay=aA[al])===aC){return false
}else{if(typeof ay==="string"&&ay.indexOf(aB)===0){if(aA.sizset){return aA}}else{aA[al]=aC;
if(ax(aA,az)){aA.sizset=true;return aA}aA.sizset=false}}}}}}function K(at,au){return at?function(ax,aw){var av=au(ax,aw);
return av&&at(av===true?ax:av,aw)}:au}function N(ay,aw,at){var av,ax,au=0;for(;
(av=ay[au]);au++){if(V.relative[av.part]){ax=M(ax,V.relative[av.part],aw)}else{av.captures.push(aw,at);
ax=K(ax,V.filter[av.part].apply(null,av.captures))}}return ax}function j(at){return function(aw,av){var ax,au=0;
for(;(ax=at[au]);au++){if(ax(aw,av)){return true}}return false}}var q=ac.compile=function(at,aw,au){var az,ay,av,ax=A[at];
if(ax&&ax.context===aw){ax.dirruns++;return ax}ay=g(at,aw,au);for(av=0;(az=ay[av]);
av++){ay[av]=N(az,aw,au)}ax=A[at]=j(ay);ax.context=aw;ax.runs=ax.dirruns=0;J.push(at);
if(J.length>V.cacheLength){delete A[J.shift()]}return ax};ac.matches=function(au,at){return ac(au,null,null,at)
};ac.matchesSelector=function(at,au){return ac(au,null,null,[at]).length>0};var ak=function(ax,au,az,aD,aC){ax=ax.replace(aj,"$1");
var at,aE,aA,aF,av,aw,aH,aI,ay,aB=ax.match(I),aG=ax.match(ao),aJ=au.nodeType;if(T.POS.test(ax)){return af(ax,au,az,aD,aB)
}if(aD){at=y.call(aD,0)}else{if(aB&&aB.length===1){if(aG.length>1&&aJ===9&&!aC&&(aB=T.ID.exec(aG[0]))){au=V.find.ID(aB[1],au,aC)[0];
if(!au){return az}ax=ax.slice(aG.shift().length)}aI=((aB=ae.exec(aG[0]))&&!aB.index&&au.parentNode)||au;
ay=aG.pop();aw=ay.split(":not")[0];for(aA=0,aF=V.order.length;aA<aF;aA++){aH=V.order[aA];
if((aB=T[aH].exec(aw))){at=V.find[aH]((aB[1]||"").replace(H,""),aI,aC);if(at==null){continue
}if(aw===ay){ax=ax.slice(0,ax.length-ay.length)+aw.replace(T[aH],"");if(!ax){ah.apply(az,y.call(at,0))
}}break}}}}if(ax){aE=q(ax,au,aC);D=aE.dirruns;if(at==null){at=V.find.TAG("*",(ae.test(ax)&&au.parentNode)||au)
}for(aA=0;(av=at[aA]);aA++){ai=aE.runs++;if(aE(av,au)){az.push(av)}}}return az};
if(l.querySelectorAll){(function(){var ay,az=ak,ax=/'|\\/g,av=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,au=[],at=[":active"],aw=o.matchesSelector||o.mozMatchesSelector||o.webkitMatchesSelector||o.oMatchesSelector||o.msMatchesSelector;
W(function(aA){aA.innerHTML="<select><option selected></option></select>";if(!aA.querySelectorAll("[selected]").length){au.push("\\["+O+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)")
}if(!aA.querySelectorAll(":checked").length){au.push(":checked")}});W(function(aA){aA.innerHTML="<p test=''></p>";
if(aA.querySelectorAll("[test^='']").length){au.push("[*^$]="+O+"*(?:\"\"|'')")
}aA.innerHTML="<input type='hidden'>";if(!aA.querySelectorAll(":enabled").length){au.push(":enabled",":disabled")
}});au=au.length&&new RegExp(au.join("|"));ak=function(aF,aB,aG,aI,aH){if(!aI&&!aH&&(!au||!au.test(aF))){if(aB.nodeType===9){try{ah.apply(aG,y.call(aB.querySelectorAll(aF),0));
return aG}catch(aE){}}else{if(aB.nodeType===1&&aB.nodeName.toLowerCase()!=="object"){var aD=aB.getAttribute("id"),aA=aD||al,aC=ae.test(aF)&&aB.parentNode||aB;
if(aD){aA=aA.replace(ax,"\\$&")}else{aB.setAttribute("id",aA)}try{ah.apply(aG,y.call(aC.querySelectorAll(aF.replace(I,"[id='"+aA+"'] $&")),0));
return aG}catch(aE){}finally{if(!aD){aB.removeAttribute("id")}}}}}return az(aF,aB,aG,aI,aH)
};if(aw){W(function(aB){ay=aw.call(aB,"div");try{aw.call(aB,"[test!='']:sizzle");
at.push(V.match.PSEUDO)}catch(aA){}});at=new RegExp(at.join("|"));ac.matchesSelector=function(aB,aD){aD=aD.replace(av,"='$1']");
if(!z(aB)&&!at.test(aD)&&(!au||!au.test(aD))){try{var aA=aw.call(aB,aD);if(aA||ay||aB.document&&aB.document.nodeType!==11){return aA
}}catch(aC){}}return ac(aD,null,null,[aB]).length>0}}})()}if(typeof c==="object"&&c.exports){c.exports=ac
}else{ad.Sizzle=ac}})(window)},{}],50:[function(b,c,a){b("ac-polyfills/Array/prototype.slice");
b("ac-polyfills/Element/prototype.classList");var d=b("./className/add");c.exports=function f(){var j=Array.prototype.slice.call(arguments);
var h=j.shift(j);var g;if(h.classList&&h.classList.add){h.classList.add.apply(h.classList,j);
return}for(g=0;g<j.length;g++){d(h,j[g])}}},{"./className/add":52,"ac-polyfills/Array/prototype.slice":58,"ac-polyfills/Element/prototype.classList":59}],51:[function(b,c,a){c.exports={add:b("./className/add"),contains:b("./className/contains"),remove:b("./className/remove")}
},{"./className/add":52,"./className/contains":53,"./className/remove":55}],52:[function(b,c,a){var d=b("./contains");
c.exports=function f(h,g){if(!d(h,g)){h.className+=" "+g}}},{"./contains":53}],53:[function(b,c,a){var f=b("./getTokenRegExp");
c.exports=function d(h,g){return f(g).test(h.className)}},{"./getTokenRegExp":54}],54:[function(b,c,a){c.exports=function d(f){return new RegExp("(\\s|^)"+f+"(\\s|$)")
}},{}],55:[function(c,d,b){var f=c("./contains");var g=c("./getTokenRegExp");d.exports=function a(i,h){if(f(i,h)){i.className=i.className.replace(g(h),"$1").trim()
}}},{"./contains":53,"./getTokenRegExp":54}],56:[function(b,d,a){b("ac-polyfills/Element/prototype.classList");
var f=b("./className/contains");d.exports=function c(h,g){if(h.classList&&h.classList.contains){return h.classList.contains(g)
}return f(h,g)}},{"./className/contains":53,"ac-polyfills/Element/prototype.classList":59}],57:[function(b,c,a){c.exports={add:b("./add"),contains:b("./contains"),remove:b("./remove"),toggle:b("./toggle")}
},{"./add":50,"./contains":56,"./remove":60,"./toggle":61}],58:[function(b,c,a){(function(){var d=Array.prototype.slice;
try{d.call(document.documentElement)}catch(f){Array.prototype.slice=function(n,j){j=(typeof j!=="undefined")?j:this.length;
if(Object.prototype.toString.call(this)==="[object Array]"){return d.call(this,n,j)
}var l,h=[],k,g=this.length;var o=n||0;o=(o>=0)?o:g+o;var m=(j)?j:g;if(j<0){m=g+j
}k=m-o;if(k>0){h=new Array(k);if(this.charAt){for(l=0;l<k;l++){h[l]=this.charAt(o+l)
}}else{for(l=0;l<k;l++){h[l]=this[o+l]}}}return h}}}())},{}],59:[function(b,c,a){
/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/
;
if("document" in self){if(!("classList" in document.createElement("_"))){(function(n){if(!("Element" in n)){return
}var d="classList",j="prototype",q=n.Element[j],f=Object,o=String[j].trim||function(){return this.replace(/^\s+|\s+$/g,"")
},g=Array[j].indexOf||function(u){var t=0,s=this.length;for(;t<s;t++){if(t in this&&this[t]===u){return t
}}return -1},r=function(s,t){this.name=s;this.code=DOMException[s];this.message=t
},k=function(t,s){if(s===""){throw new r("SYNTAX_ERR","An invalid or illegal string was specified")
}if(/\s/.test(s)){throw new r("INVALID_CHARACTER_ERR","String contains an invalid character")
}return g.call(t,s)},h=function(w){var v=o.call(w.getAttribute("class")||""),u=v?v.split(/\s+/):[],t=0,s=u.length;
for(;t<s;t++){this.push(u[t])}this._updateClassName=function(){w.setAttribute("class",this.toString())
}},i=h[j]=[],m=function(){return new h(this)};r[j]=Error[j];i.item=function(s){return this[s]||null
};i.contains=function(s){s+="";return k(this,s)!==-1};i.add=function(){var w=arguments,v=0,t=w.length,u,s=false;
do{u=w[v]+"";if(k(this,u)===-1){this.push(u);s=true}}while(++v<t);if(s){this._updateClassName()
}};i.remove=function(){var x=arguments,w=0,t=x.length,v,s=false,u;do{v=x[w]+"";
u=k(this,v);while(u!==-1){this.splice(u,1);s=true;u=k(this,v)}}while(++w<t);if(s){this._updateClassName()
}};i.toggle=function(t,u){t+="";var s=this.contains(t),v=s?u!==true&&"remove":u!==false&&"add";
if(v){this[v](t)}if(u===true||u===false){return u}else{return !s}};i.toString=function(){return this.join(" ")
};if(f.defineProperty){var p={get:m,enumerable:true,configurable:true};try{f.defineProperty(q,d,p)
}catch(l){if(l.number===-2146823252){p.enumerable=false;f.defineProperty(q,d,p)
}}}else{if(f[j].__defineGetter__){q.__defineGetter__(d,m)}}}(self))}else{(function(){var f=document.createElement("_");
f.classList.add("c1","c2");if(!f.classList.contains("c2")){var g=function(i){var h=DOMTokenList.prototype[i];
DOMTokenList.prototype[i]=function(l){var k,j=arguments.length;for(k=0;k<j;k++){l=arguments[k];
h.call(this,l)}}};g("add");g("remove")}f.classList.toggle("c3",false);if(f.classList.contains("c3")){var d=DOMTokenList.prototype.toggle;
DOMTokenList.prototype.toggle=function(h,i){if(1 in arguments&&!this.contains(h)===!i){return i
}else{return d.call(this,h)}}}f=null}())}}},{}],60:[function(d,f,c){d("ac-polyfills/Array/prototype.slice");
d("ac-polyfills/Element/prototype.classList");var b=d("./className/remove");f.exports=function a(){var j=Array.prototype.slice.call(arguments);
var h=j.shift(j);var g;if(h.classList&&h.classList.remove){h.classList.remove.apply(h.classList,j);
return}for(g=0;g<j.length;g++){b(h,j[g])}}},{"./className/remove":55,"ac-polyfills/Array/prototype.slice":58,"ac-polyfills/Element/prototype.classList":59}],61:[function(c,d,b){c("ac-polyfills/Element/prototype.classList");
var f=c("./className");d.exports=function a(j,i,k){var h=(typeof k!=="undefined");
var g;if(j.classList&&j.classList.toggle){if(h){return j.classList.toggle(i,k)}return j.classList.toggle(i)
}if(h){g=!!k}else{g=!f.contains(j,i)}if(g){f.add(j,i)}else{f.remove(j,i)}return g
}},{"./className":51,"ac-polyfills/Element/prototype.classList":59}],62:[function(c,d,b){var g=c("./utils/addEventListener");
var a=c("./shared/getEventType");d.exports=function f(k,i,j,h){i=a(k,i);return g(k,i,j,h)
}},{"./shared/getEventType":72,"./utils/addEventListener":76}],63:[function(d,f,c){var a=d("./utils/dispatchEvent");
var b=d("./shared/getEventType");f.exports=function g(j,i,h){i=b(j,i);return a(j,i,h)
}},{"./shared/getEventType":72,"./utils/dispatchEvent":77}],64:[function(b,c,a){c.exports={addEventListener:b("./addEventListener"),dispatchEvent:b("./dispatchEvent"),preventDefault:b("./preventDefault"),removeEventListener:b("./removeEventListener"),stop:b("./stop"),stopPropagation:b("./stopPropagation"),target:b("./target")}
},{"./addEventListener":62,"./dispatchEvent":63,"./preventDefault":70,"./removeEventListener":71,"./stop":73,"./stopPropagation":74,"./target":75}],65:[function(b,c,a){if(document.createEvent){try{new window.CustomEvent("click")
}catch(d){window.CustomEvent=(function(){function f(h,i){i=i||{bubbles:false,cancelable:false,detail:undefined};
var g=document.createEvent("CustomEvent");g.initCustomEvent(h,i.bubbles,i.cancelable,i.detail);
return g}f.prototype=window.Event.prototype;return f}())}}},{}],66:[function(g,i,d){var h=g("./utils/eventTypeAvailable");
var b=g("./shared/camelCasedEventTypes");var f=g("./shared/prefixHelper");var c={};
i.exports=function a(l,k){var m;var n;var j;k=k||"div";l=l.toLowerCase();if(!(k in c)){c[k]={}
}n=c[k];if(l in n){return n[l]}if(h(l,k)){return n[l]=l}if(l in b){for(j=0;j<b[l].length;
j++){m=b[l][j];if(h(m.toLowerCase(),k)){return n[l]=m}}}for(j=0;j<f.evt.length;
j++){m=f.evt[j]+l;if(h(m,k)){f.reduce(j);return n[l]=m}}return n[l]=false}},{"./shared/camelCasedEventTypes":67,"./shared/prefixHelper":68,"./utils/eventTypeAvailable":69}],67:[function(b,c,a){c.exports={transitionend:["webkitTransitionEnd","MSTransitionEnd"],animationstart:["webkitAnimationStart","MSAnimationStart"],animationend:["webkitAnimationEnd","MSAnimationEnd"],animationiteration:["webkitAnimationIteration","MSAnimationIteration"],fullscreenchange:["MSFullscreenChange"],fullscreenerror:["MSFullscreenError"]}
},{}],68:[function(b,d,a){var i=["-webkit-","-moz-","-ms-"];var f=["Webkit","Moz","ms"];
var h=["webkit","moz","ms"];var c=function(){this.initialize()};var g=c.prototype;
g.initialize=function(){this.reduced=false;this.css=i;this.dom=f;this.evt=h};g.reduce=function(j){if(!this.reduced){this.reduced=true;
this.css=[this.css[j]];this.dom=[this.dom[j]];this.evt=[this.evt[j]]}};d.exports=new c()
},{}],69:[function(c,f,b){var a={window:window,document:document};f.exports=function d(i,g){var h;
i="on"+i;if(!(g in a)){a[g]=document.createElement(g)}h=a[g];if(i in h){return true
}if("setAttribute" in h){h.setAttribute(i,"return;");return(typeof h[i]==="function")
}return false}},{}],70:[function(c,d,a){d.exports=function b(f){f=f||window.event;
if(f.preventDefault){f.preventDefault()}else{f.returnValue=false}}},{}],71:[function(d,f,c){var b=d("./utils/removeEventListener");
var a=d("./shared/getEventType");f.exports=function g(k,i,j,h){i=a(k,i);return b(k,i,j,h)
}},{"./shared/getEventType":72,"./utils/removeEventListener":78}],72:[function(c,f,b){var d=c("ac-prefixer/getEventType");
f.exports=function a(j,i){var h;var g;if("tagName" in j){h=j.tagName}else{if(j===window){h="window"
}else{h="document"}}g=d(i,h);if(g){return g}return i}},{"ac-prefixer/getEventType":66}],73:[function(d,g,b){var a=d("./stopPropagation");
var c=d("./preventDefault");g.exports=function f(h){h=h||window.event;a(h);c(h);
h.stopped=true;h.returnValue=false}},{"./preventDefault":70,"./stopPropagation":74}],74:[function(c,d,b){d.exports=function a(f){f=f||window.event;
if(f.stopPropagation){f.stopPropagation()}else{f.cancelBubble=true}}},{}],75:[function(b,c,a){c.exports=function d(f){f=f||window.event;
return(typeof f.target!=="undefined")?f.target:f.srcElement}},{}],76:[function(b,c,a){c.exports=function d(i,g,h,f){if(i.addEventListener){i.addEventListener(g,h,!!f)
}else{i.attachEvent("on"+g,h)}return i}},{}],77:[function(b,c,a){b("ac-polyfills/CustomEvent");
c.exports=function d(i,h,g){var f;if(i.dispatchEvent){if(g){f=new CustomEvent(h,g)
}else{f=new CustomEvent(h)}i.dispatchEvent(f)}else{f=document.createEventObject();
if(g&&"detail" in g){f.detail=g.detail}i.fireEvent("on"+h,f)}return i}},{"ac-polyfills/CustomEvent":65}],78:[function(b,c,a){c.exports=function d(i,g,h,f){if(i.removeEventListener){i.removeEventListener(g,h,!!f)
}else{i.detachEvent("on"+g,h)}return i}},{}],79:[function(c,d,b){var f=c("ac-prefixer/getStyleProperty");
var g=c("ac-prefixer/stripPrefixes");d.exports=function a(){var k=Array.prototype.slice.call(arguments);
var p=k.shift(k);var m=window.getComputedStyle(p);var l={};var o;var h;var n;var j;
if(typeof k[0]!=="string"){k=k[0]}for(j=0;j<k.length;j++){o=k[j];h=f(o);if(h){o=g(h);
n=m[h];if(!n||n==="auto"){n=null}if(n){n=g(n)}}else{n=null}l[o]=n}return l}},{"ac-prefixer/getStyleProperty":83,"ac-prefixer/stripPrefixes":89}],80:[function(b,c,a){c.exports={getStyle:b("./getStyle"),setStyle:b("./setStyle")}
},{"./getStyle":79,"./setStyle":92}],81:[function(c,d,b){d.exports=function a(j){var h;
var g;var f;if(!j&&j!==0){return""}if(Array.isArray(j)){return j+""}if(typeof j==="object"){h="";
g=Object.keys(j);for(f=0;f<g.length;f++){h+=g[f]+"("+j[g[f]]+") "}return h.trim()
}return j}},{}],82:[function(d,f,c){var b=d("./shared/stylePropertyCache");var h=d("./getStyleProperty");
var g=d("./getStyleValue");f.exports=function a(k,j){var i;k=h(k);if(!k){return false
}i=b[k].css;if(typeof j!=="undefined"){j=g(k,j);if(j===false){return false}i+=":"+j+";"
}return i}},{"./getStyleProperty":83,"./getStyleValue":84,"./shared/stylePropertyCache":87}],83:[function(f,d,h){var a=f("./shared/stylePropertyCache");
var i=f("./shared/getStyleTestElement");var b=f("./utils/toCSS");var k=f("./utils/toDOM");
var j=f("./shared/prefixHelper");var c=function(o,l){var m=b(o);var n=(l===false)?false:b(l);
a[o]=a[l]=a[m]=a[n]={dom:l,css:n};return l};d.exports=function g(p){var n;var l;
var o;var m;p+="";if(p in a){return a[p].dom}o=i();p=k(p);l=p.charAt(0).toUpperCase()+p.substring(1);
if(p==="filter"){n=["WebkitFilter","filter"]}else{n=(p+" "+j.dom.join(l+" ")+l).split(" ")
}for(m=0;m<n.length;m++){if(typeof o.style[n[m]]!=="undefined"){if(m!==0){j.reduce(m-1)
}return c(p,n[m])}}return c(p,false)}},{"./shared/getStyleTestElement":85,"./shared/prefixHelper":86,"./shared/stylePropertyCache":87,"./utils/toCSS":90,"./utils/toDOM":91}],84:[function(d,b,h){var f=d("./getStyleProperty");
var k=d("./shared/styleValueAvailable");var j=d("./shared/prefixHelper");var a=d("./shared/stylePropertyCache");
var i={};var l=/(\([^\)]+\))/gi;var g=/([^ ,;\(]+(\([^\)]+\))?)/gi;b.exports=function c(o,n){var m;
n+="";o=f(o);if(!o){return false}if(k(o,n)){return n}m=a[o].css;n=n.replace(g,function(q){var p;
var t;var s;var r;if(q[0]==="#"||!isNaN(q[0])){return q}t=q.replace(l,"");s=m+":"+t;
if(s in i){if(i[s]===false){return""}return q.replace(t,i[s])}p=j.css.map(function(u){return u+q
});p=[q].concat(p);for(r=0;r<p.length;r++){if(k(o,p[r])){if(r!==0){j.reduce(r-1)
}i[s]=p[r].replace(l,"");return p[r]}}i[s]=false;return""});n=n.trim();return(n==="")?false:n
}},{"./getStyleProperty":83,"./shared/prefixHelper":86,"./shared/stylePropertyCache":87,"./shared/styleValueAvailable":88}],85:[function(c,d,b){var f;
d.exports=function a(){if(!f){f=document.createElement("_")}else{f.style.cssText="";
f.removeAttribute("style")}return f};d.exports.resetElement=function(){f=null}},{}],86:[function(b,c,a){arguments[4][68][0].apply(a,arguments)
},{dup:68}],87:[function(b,c,a){c.exports={}},{}],88:[function(c,b,d){var a=c("./stylePropertyCache");
var f=c("./getStyleTestElement");var i=false;var k;var j;var g=function(){var l;
if(!i){i=true;k=("CSS" in window&&"supports" in window.CSS);j=false;l=f();try{l.style.width="invalid"
}catch(m){j=true}}};b.exports=function h(o,n){var m;var l;g();if(k){o=a[o].css;
return CSS.supports(o,n)}l=f();m=l.style[o];if(j){try{l.style[o]=n}catch(p){return false
}}else{l.style[o]=n}return(l.style[o]&&l.style[o]!==m)};b.exports.resetFlags=function(){i=false
}},{"./getStyleTestElement":85,"./stylePropertyCache":87}],89:[function(c,d,a){var b=/(-webkit-|-moz-|-ms-)|^(webkit|moz|ms)/gi;
d.exports=function f(g){g=String.prototype.replace.call(g,b,"");return g.charAt(0).toLowerCase()+g.substring(1)
}},{}],90:[function(c,d,b){var f=/^(webkit|moz|ms)/gi;d.exports=function a(h){var g;
if(h.toLowerCase()==="cssfloat"){return"float"}if(f.test(h)){h="-"+h}return h.replace(/([A-Z]+)([A-Z][a-z])/g,"$1-$2").replace(/([a-z\d])([A-Z])/g,"$1-$2").toLowerCase()
}},{}],91:[function(b,c,a){var f=/-([a-z])/g;c.exports=function d(h){var g;if(h.toLowerCase()==="float"){return"cssFloat"
}h=h.replace(f,function(j,i){return i.toUpperCase()});if(h.substr(0,2)==="Ms"){h="ms"+h.substring(2)
}return h}},{}],92:[function(d,f,c){var a=d("ac-prefixer/getStyleCSS");var g=d("ac-prefixer/getStyleProperty");
var b=d("./internal/normalizeValue");f.exports=function h(o,l){var k="";var j;var n;
var i;var m;var p;if(typeof l!=="object"){throw new TypeError("setStyle: styles must be an Object")
}for(n in l){m=b(l[n]);if(!m&&m!==0){i=g(n);if("removeAttribute" in o.style){o.style.removeAttribute(i)
}else{o.style[i]=""}}else{j=a(n,m);if(j!==false){k+=" "+j}}}if(k.length){p=o.style.cssText;
if(p.charAt(p.length-1)!==";"){p+=";"}p+=k;o.style.cssText=p}return o}},{"./internal/normalizeValue":81,"ac-prefixer/getStyleCSS":82,"ac-prefixer/getStyleProperty":83}],93:[function(c,f,b){var g=c("ac-dom-nodes/isElement");
var a=c("./matchesSelector");var h=c("./internal/validate");f.exports=function d(k,j,i){h.childNode(k,true,"ancestors");
h.selector(j,false,"ancestors");if(i&&g(k)&&(!j||a(k,j))){return k}if(k!==document.body){while((k=k.parentNode)&&g(k)){if(!j||a(k,j)){return k
}if(k===document.body){break}}}return null}},{"./internal/validate":100,"./matchesSelector":102,"ac-dom-nodes/isElement":114}],94:[function(c,d,b){var g=c("ac-dom-nodes/isElement");
var a=c("./matchesSelector");var h=c("./internal/validate");d.exports=function f(l,j,i){var k=[];
h.childNode(l,true,"ancestors");h.selector(j,false,"ancestors");if(i&&g(l)&&(!j||a(l,j))){k.push(l)
}if(l!==document.body){while((l=l.parentNode)&&g(l)){if(!j||a(l,j)){k.push(l)}if(l===document.body){break
}}}return k}},{"./internal/validate":100,"./matchesSelector":102,"ac-dom-nodes/isElement":114}],95:[function(d,g,c){var b=d("ac-dom-nodes/filterByNodeType");
var a=d("./filterBySelector");var h=d("./internal/validate");g.exports=function f(k,i){var j;
h.parentNode(k,true,"children");h.selector(i,false,"children");j=k.children||k.childNodes;
j=b(j);if(i){j=a(j,i)}return j}},{"./filterBySelector":96,"./internal/validate":100,"ac-dom-nodes/filterByNodeType":110}],96:[function(d,f,c){d("ac-polyfills/Array/prototype.slice");
d("ac-polyfills/Array/prototype.filter");var b=d("./matchesSelector");var g=d("./internal/validate");
f.exports=function a(i,h){g.selector(h,true,"filterBySelector");i=Array.prototype.slice.call(i);
return i.filter(function(j){return b(j,h)})}},{"./internal/validate":100,"./matchesSelector":102,"ac-polyfills/Array/prototype.filter":117,"ac-polyfills/Array/prototype.slice":119}],97:[function(b,d,a){var c=b("./children");
var g=b("./internal/validate");d.exports=function f(j,h){var i;g.parentNode(j,true,"firstChild");
g.selector(h,false,"firstChild");if(j.firstElementChild&&!h){return j.firstElementChild
}i=c(j,h);if(i.length){return i[0]}return null}},{"./children":95,"./internal/validate":100}],98:[function(b,c,a){c.exports={ancestor:b("./ancestor"),ancestors:b("./ancestors"),children:b("./children"),filterBySelector:b("./filterBySelector"),firstChild:b("./firstChild"),lastChild:b("./lastChild"),matchesSelector:b("./matchesSelector"),nextSibling:b("./nextSibling"),nextSiblings:b("./nextSiblings"),previousSibling:b("./previousSibling"),previousSiblings:b("./previousSiblings"),querySelector:b("./querySelector"),querySelectorAll:b("./querySelectorAll"),siblings:b("./siblings")}
},{"./ancestor":93,"./ancestors":94,"./children":95,"./filterBySelector":96,"./firstChild":97,"./lastChild":101,"./matchesSelector":102,"./nextSibling":103,"./nextSiblings":104,"./previousSibling":120,"./previousSiblings":121,"./querySelector":122,"./querySelectorAll":123,"./siblings":127}],99:[function(b,c,a){c.exports=window.Element?(function(d){return d.matches||d.matchesSelector||d.webkitMatchesSelector||d.mozMatchesSelector||d.msMatchesSelector||d.oMatchesSelector
}(Element.prototype)):null},{}],100:[function(g,c,i){g("ac-polyfills/Array/prototype.indexOf");
var o=g("ac-dom-nodes/isNode");var b=g("ac-dom-nodes/COMMENT_NODE");var k=g("ac-dom-nodes/DOCUMENT_FRAGMENT_NODE");
var j=g("ac-dom-nodes/DOCUMENT_NODE");var h=g("ac-dom-nodes/ELEMENT_NODE");var f=g("ac-dom-nodes/TEXT_NODE");
var a=function(r,q){if(!o(r)){return false}if(typeof q==="number"){return(r.nodeType===q)
}return(q.indexOf(r.nodeType)!==-1)};var m=[h,j,k];var n=" must be an Element, Document, or Document Fragment";
var p=[h,f,b];var l=" must be an Element, TextNode, or Comment";var d=" must be a string";
c.exports={parentNode:function(q,t,s,r){r=r||"node";if((q||t)&&!a(q,m)){throw new TypeError(s+": "+r+n)
}},childNode:function(q,t,s,r){r=r||"node";if(!q&&!t){return}if(!a(q,p)){throw new TypeError(s+": "+r+l)
}},selector:function(q,t,s,r){r=r||"selector";if((q||t)&&typeof q!=="string"){throw new TypeError(s+": "+r+d)
}}}},{"ac-dom-nodes/COMMENT_NODE":105,"ac-dom-nodes/DOCUMENT_FRAGMENT_NODE":106,"ac-dom-nodes/DOCUMENT_NODE":107,"ac-dom-nodes/ELEMENT_NODE":108,"ac-dom-nodes/TEXT_NODE":109,"ac-dom-nodes/isNode":115,"ac-polyfills/Array/prototype.indexOf":118}],101:[function(b,d,a){var c=b("./children");
var g=b("./internal/validate");d.exports=function f(j,h){var i;g.parentNode(j,true,"lastChild");
g.selector(h,false,"lastChild");if(j.lastElementChild&&!h){return j.lastElementChild
}i=c(j,h);if(i.length){return i[i.length-1]}return null}},{"./children":95,"./internal/validate":100}],102:[function(d,f,c){var g=d("ac-dom-nodes/isElement");
var i=d("./internal/validate");var a=d("./internal/nativeMatches");var h=d("./shims/matchesSelector");
f.exports=function b(k,j){i.selector(j,true,"matchesSelector");if(!g(k)){return false
}if(!a){return h(k,j)}return a.call(k,j)}},{"./internal/nativeMatches":99,"./internal/validate":100,"./shims/matchesSelector":124,"ac-dom-nodes/isElement":114}],103:[function(c,d,b){var f=c("ac-dom-nodes/isElement");
var a=c("./matchesSelector");var h=c("./internal/validate");d.exports=function g(j,i){h.childNode(j,true,"nextSibling");
h.selector(i,false,"nextSibling");if(j.nextElementSibling&&!i){return j.nextElementSibling
}while(j=j.nextSibling){if(f(j)){if(!i||a(j,i)){return j}}}return null}},{"./internal/validate":100,"./matchesSelector":102,"ac-dom-nodes/isElement":114}],104:[function(d,f,b){var g=d("ac-dom-nodes/isElement");
var a=d("./matchesSelector");var h=d("./internal/validate");f.exports=function c(k,i){var j=[];
h.childNode(k,true,"nextSiblings");h.selector(i,false,"nextSiblings");while(k=k.nextSibling){if(g(k)){if(!i||a(k,i)){j.push(k)
}}}return j}},{"./internal/validate":100,"./matchesSelector":102,"ac-dom-nodes/isElement":114}],105:[function(b,c,a){c.exports=8
},{}],106:[function(b,c,a){c.exports=11},{}],107:[function(b,c,a){c.exports=9},{}],108:[function(b,c,a){c.exports=1
},{}],109:[function(b,c,a){c.exports=3},{}],110:[function(d,f,c){d("ac-polyfills/Array/prototype.slice");
d("ac-polyfills/Array/prototype.filter");var g=d("./internal/isNodeType");var a=d("./ELEMENT_NODE");
f.exports=function b(i,h){h=h||a;i=Array.prototype.slice.call(i);return i.filter(function(j){return g(j,h)
})}},{"./ELEMENT_NODE":108,"./internal/isNodeType":111,"ac-polyfills/Array/prototype.filter":117,"ac-polyfills/Array/prototype.slice":119}],111:[function(b,c,a){var d=b("../isNode");
c.exports=function f(h,g){if(!d(h)){return false}if(typeof g==="number"){return(h.nodeType===g)
}return(g.indexOf(h.nodeType)!==-1)}},{"../isNode":115}],112:[function(g,d,j){var b=g("./isNodeType");
var c=g("../COMMENT_NODE");var k=g("../DOCUMENT_FRAGMENT_NODE");var i=g("../ELEMENT_NODE");
var h=g("../TEXT_NODE");var m=[i,h,c,k];var f=" must be an Element, TextNode, Comment, or Document Fragment";
var p=[i,h,c];var l=" must be an Element, TextNode, or Comment";var n=[i,k];var o=" must be an Element, or Document Fragment";
var a=" must have a parentNode";d.exports={parentNode:function(q,t,s,r){r=r||"target";
if((q||t)&&!b(q,n)){throw new TypeError(s+": "+r+o)}},childNode:function(q,t,s,r){r=r||"target";
if(!q&&!t){return}if(!b(q,p)){throw new TypeError(s+": "+r+l)}},insertNode:function(q,t,s,r){r=r||"node";
if(!q&&!t){return}if(!b(q,m)){throw new TypeError(s+": "+r+f)}},hasParentNode:function(q,s,r){r=r||"target";
if(!q.parentNode){throw new TypeError(s+": "+r+a)}}}},{"../COMMENT_NODE":105,"../DOCUMENT_FRAGMENT_NODE":106,"../ELEMENT_NODE":108,"../TEXT_NODE":109,"./isNodeType":111}],113:[function(c,d,b){var g=c("./internal/isNodeType");
var a=c("./DOCUMENT_FRAGMENT_NODE");d.exports=function f(h){return g(h,a)}},{"./DOCUMENT_FRAGMENT_NODE":106,"./internal/isNodeType":111}],114:[function(c,d,b){var g=c("./internal/isNodeType");
var a=c("./ELEMENT_NODE");d.exports=function f(h){return g(h,a)}},{"./ELEMENT_NODE":108,"./internal/isNodeType":111}],115:[function(b,c,a){c.exports=function d(f){return !!(f&&f.nodeType)
}},{}],116:[function(c,d,b){var f=c("./internal/validate");d.exports=function a(g){f.childNode(g,true,"remove");
if(!g.parentNode){return g}return g.parentNode.removeChild(g)}},{"./internal/validate":112}],117:[function(b,c,a){if(!Array.prototype.filter){Array.prototype.filter=function d(l,k){var j=Object(this);
var f=j.length>>>0;var h;var g=[];if(typeof l!=="function"){throw new TypeError(l+" is not a function")
}for(h=0;h<f;h+=1){if(h in j&&l.call(k,j[h],h,j)){g.push(j[h])}}return g}}},{}],118:[function(b,c,a){if(!Array.prototype.indexOf){Array.prototype.indexOf=function d(g,h){var i=h||0;
var f=0;if(i<0){i=this.length+h-1;if(i<0){throw"Wrapped past beginning of array while looking up a negative start index."
}}for(f=0;f<this.length;f++){if(this[f]===g){return f}}return(-1)}}},{}],119:[function(b,c,a){arguments[4][58][0].apply(a,arguments)
},{dup:58}],120:[function(c,d,b){var g=c("ac-dom-nodes/isElement");var a=c("./matchesSelector");
var h=c("./internal/validate");d.exports=function f(j,i){h.childNode(j,true,"previousSibling");
h.selector(i,false,"previousSibling");if(j.previousElementSibling&&!i){return j.previousElementSibling
}while(j=j.previousSibling){if(g(j)){if(!i||a(j,i)){return j}}}return null}},{"./internal/validate":100,"./matchesSelector":102,"ac-dom-nodes/isElement":114}],121:[function(c,d,b){var f=c("ac-dom-nodes/isElement");
var a=c("./matchesSelector");var h=c("./internal/validate");d.exports=function g(k,i){var j=[];
h.childNode(k,true,"previousSiblings");h.selector(i,false,"previousSiblings");while(k=k.previousSibling){if(f(k)){if(!i||a(k,i)){j.push(k)
}}}return j.reverse()}},{"./internal/validate":100,"./matchesSelector":102,"ac-dom-nodes/isElement":114}],122:[function(c,d,a){var h=c("./internal/validate");
var b=c("./shims/querySelector");var g=("querySelector" in document);d.exports=function f(i,j){j=j||document;
h.parentNode(j,true,"querySelector","context");h.selector(i,true,"querySelector");
if(!g){return b(i,j)}return j.querySelector(i)}},{"./internal/validate":100,"./shims/querySelector":125}],123:[function(b,c,a){b("ac-polyfills/Array/prototype.slice");
var h=b("./internal/validate");var g=b("./shims/querySelectorAll");var f=("querySelectorAll" in document);
c.exports=function d(i,j){j=j||document;h.parentNode(j,true,"querySelectorAll","context");
h.selector(i,true,"querySelectorAll");if(!f){return g(i,j)}return Array.prototype.slice.call(j.querySelectorAll(i))
}},{"./internal/validate":100,"./shims/querySelectorAll":126,"ac-polyfills/Array/prototype.slice":119}],124:[function(c,d,b){var f=c("../querySelectorAll");
d.exports=function a(l,g){var k=l.parentNode||document;var h=f(g,k);var j;for(j=0;
j<h.length;j++){if(h[j]===l){return true}}return false}},{"../querySelectorAll":123}],125:[function(b,c,a){var d=b("./querySelectorAll");
c.exports=function f(h,i){var g=d(h,i);return g.length?g[0]:null}},{"./querySelectorAll":126}],126:[function(c,d,b){var h=c("ac-dom-nodes/isElement");
var g=c("ac-dom-nodes/isDocumentFragment");var a=c("ac-dom-nodes/remove");var i="_ac_qsa";
d.exports=function f(j,l){var o=document.createElement("style");var n;var k=[];
var m;l=l||document;document[i]=[];if(g(l)){l.appendChild(o)}else{document.body.appendChild(o)
}o.styleSheet.cssText=j+"{ac-qsa:expression(document."+i+" && document."+i+".push(this))}";
window.scrollBy(0,0);while(document[i].length){m=document[i].shift();m.style.removeAttribute("ac-qsa");
if(l===document){k.push(m)}else{n=m;while((n=n.parentNode)&&h(n)){if(n===l){k.push(m);
break}}}k.push(m)}document[i]=null;a(o);return k}},{"ac-dom-nodes/isDocumentFragment":113,"ac-dom-nodes/isElement":114,"ac-dom-nodes/remove":116}],127:[function(b,d,a){var c=b("./children");
var g=b("./internal/validate");d.exports=function f(j,h){var i=[];g.childNode(j,true,"siblings");
g.selector(h,false,"siblings");if(j.parentNode){i=c(j.parentNode,h);i=i.filter(function(k){return(k!==j)
})}return i}},{"./children":95,"./internal/validate":100}],128:[function(c,d,b){var g=c("./ac-clock/Clock"),f=c("./ac-clock/ThrottledClock"),a=c("./ac-clock/sharedClockInstance");
a.Clock=g;a.ThrottledClock=f;d.exports=a},{"./ac-clock/Clock":129,"./ac-clock/ThrottledClock":130,"./ac-clock/sharedClockInstance":131}],129:[function(c,d,b){var g;
var f=c("ac-event-emitter").EventEmitter;var a=new Date().getTime();function h(){f.call(this);
this.lastFrameTime=null;this._animationFrame=null;this._active=false;this._startTime=null;
this._boundOnAnimationFrame=this._onAnimationFrame.bind(this);this._getTime=Date.now||function(){return new Date().getTime()
}}g=h.prototype=new f(null);g.start=function(){if(this._active){return}this._tick()
};g.stop=function(){if(this._active){window.cancelAnimationFrame(this._animationFrame)
}this._animationFrame=null;this.lastFrameTime=null;this._active=false};g.destroy=function(){this.stop();
this.off();var j;for(j in this){if(this.hasOwnProperty(j)){this[j]=null}}};g.isRunning=function(){return this._active
};g._tick=function(){if(!this._active){this._active=true}this._animationFrame=window.requestAnimationFrame(this._boundOnAnimationFrame)
};g._onAnimationFrame=function(l){var m=0;var i=this._getTime();if(this.lastFrameTime===null){this.lastFrameTime=i-a
}else{m=l-this.lastFrameTime}var k=0,j;if(m!==0){k=1000/m}j={time:l,delta:m,fps:k,naturalFps:k,timeNow:i};
this.trigger("update",j);this.trigger("draw",j);this._animationFrame=null;this.lastFrameTime=l;
if(this._active!==false){this._tick()}else{this.lastFrameTime=null}};d.exports=h
},{"ac-event-emitter":256}],130:[function(c,d,b){var g;var a=c("./sharedClockInstance"),f=c("ac-event-emitter").EventEmitter;
function h(j,i){if(j===null){return}f.call(this);i=i||{};this._fps=j||null;this._clock=i.clock||a;
this._lastThrottledTime=null;this._clockEvent=null;this._clock.on("update",this._onClockUpdate,this)
}g=h.prototype=new f(null);g.setFps=function(i){this._fps=i;return this};g.getFps=function(){return this._fps
};g.start=function(){this._clock.start();return this};g.stop=function(){this._clock.stop();
return this};g.isRunning=function(){return this._clock.isRunning()};g.destroy=function(){this._clock.off("update",this._onClockUpdate,this);
this._clock.destroy.call(this)};g._onClockUpdate=function(i){if(this._lastThrottledTime===null){this._lastThrottledTime=this._clock.lastFrameTime
}var j=i.time-this._lastThrottledTime;if(!this._fps){throw new TypeError("FPS is not defined.")
}if(j<(1000/this._fps)){return}this._clockEvent=i;this._clockEvent.delta=j;this._clockEvent.fps=1000/j;
this._lastThrottledTime=this._clockEvent.time;this._clock.once("draw",this._onClockDraw,this);
this.trigger("update",this._clockEvent)};g._onClockDraw=function(){this.trigger("draw",this._clockEvent)
};d.exports=h},{"./sharedClockInstance":131,"ac-event-emitter":256}],131:[function(b,c,a){var d=b("./Clock");
c.exports=new d()},{"./Clock":129}],132:[function(b,c,a){c.exports={Clip:b("./ac-clip/Clip")}
},{"./ac-clip/Clip":133}],133:[function(c,b,d){var g=c("ac-object").create;var k=c("ac-easing").createPredefined;
var a=c("ac-clock");var j=c("ac-easing").Ease;var l=c("ac-event-emitter").EventEmitter;
var i="ease";function h(o,n,q,m){m=m||{};this._options=m;this._target=o;this._duration=n*1000;
this._delay=(m.delay||0)*1000;this._remainingDelay=this._delay;this._progress=0;
this._clock=m.clock||a;this._playing=false;this._getTime=Date.now||function(){return new Date().getTime()
};this._isYoyo=m.yoyo;this._direction=1;this._loop=m.loop||0;this._loopCount=0;
this._propsTo=q||{};this._propsFrom=m.propsFrom||{};this._onStart=m.onStart||null;
this._onUpdate=m.onUpdate||null;this._onDraw=m.onDraw||null;this._onComplete=m.onComplete||null;
var p=m.ease||i;this._ease=(typeof p==="function")?new j(p):k(p);this._start=this._start.bind(this);
this._update=this._update.bind(this);this._draw=this._draw.bind(this);this._isPrepared=false;
h._add(this)}var f=h.prototype=g(l.prototype);h.COMPLETE="complete";h.PAUSE="pause";
h.PLAY="play";f.play=function(){if(!this._playing){this._playing=true;if(this._delay===0||this._remainingDelay===0){this._start()
}else{if(!this._isPrepared){this._setDiff();this._updateProps()}this._startTimeout=setTimeout(this._start,this._remainingDelay);
this._delayStart=this._getTime()}}return this};f.pause=function(){if(this._playing){if(this._startTimeout){this._remainingDelay=this._getTime()-this._delayStart;
clearTimeout(this._startTimeout)}this._stop();this.trigger(h.PAUSE,this._getDetails())
}return this};f.destroy=function(){this.pause();this._options=null;this._target=null;
this._storeTarget=null;this._ease=null;this._clock=null;this._propsTo=null;this._propsFrom=null;
this._storePropsTo=null;this._storePropsFrom=null;this._propsDiff=null;this._propsEase=null;
this._onStart=null;this._onUpdate=null;this._onDraw=null;this._onComplete=null;
h._remove(this);return this};f.reset=function(){if(!this._isPrepared){return}this._stop();
this._resetLoop(this._target,this._storeTarget);this._direction=1;this._loop=this._options.loop||0;
this._loopCount=0;this._propsFrom=this._storePropsFrom;this._propsTo=this._storePropsTo;
this._progress=0;this._setStartTime();if(this._onUpdate){this._onUpdate.call(this,this._getDetails())
}if(this._onDraw){this._onDraw.call(this,this._getDetails())}return this};f.isPlaying=function(){return this._playing
};f.getTarget=function(){return this._target};f.setCurrentTime=function(m){this.setProgress(m*1000/this._duration);
return this.getCurrentTime()};f.getCurrentTime=function(){return(this.getProgress()*this._duration)/1000
};f.setProgress=function(m){this._progress=Math.min(1,Math.max(0,m));this._setStartTime();
if(!this._isPrepared){this._setDiff()}if(this._playing&&m===1){this._completeProps();
if(this._onUpdate){this._onUpdate.call(this,this._getDetails())}if(this._onDraw){this._onDraw.call(this,this._getDetails())
}this._complete()}else{this._updateProps();if(this._onUpdate){this._onUpdate.call(this,this._getDetails())
}if(this._onDraw){this._onDraw.call(this,this._getDetails())}}return this.getProgress()
};f.getProgress=function(){return this._progress};f._resetLoop=function(n,m){var o;
for(o in m){if(m.hasOwnProperty(o)){if(m[o]!==null){if(typeof m[o]==="object"){this._resetLoop(n[o],m[o])
}else{n[o]=m[o]}}}}};f._addPropsFrom=function(){var m;for(m in this._propsFrom){if(this._propsFrom.hasOwnProperty(m)&&this._propsTo[m]===undefined&&this._target[m]!==undefined){this._propsTo[m]=this._target[m]
}}};f._cloneTarget=function(){var m={};this._cloneTargetLoop(this._propsTo,this._target,m);
return m};f._cloneTargetLoop=function(q,o,m){var n;var p;for(p in q){if(o.hasOwnProperty(p)){n=typeof o[p];
if(o[p]!==null&&n==="object"){m[p]={};this._cloneTargetLoop(q[p],o[p],m[p])}else{if(q[p]&&n==="number"){m[p]=o[p]
}}}}};f._prepareProperties=function(){if(!this._isPrepared){this._addPropsFrom();
this._storeTarget=this._cloneTarget();this._storePropsTo=this._propsTo;this._storePropsFrom=this._propsFrom;
this._isPrepared=true}};f._setStartTime=function(){this._startTime=this._getTime()-(this.getProgress()*this._duration)
};f._setDiff=function(){if(!this._isPrepared){this._prepareProperties()}this._propsDiff={};
this._setDiffLoop(this._propsTo,this._propsFrom,this._target,this._propsDiff)};
f._setDiffLoop=function(r,q,o,n){var m;var p;for(p in r){if(r.hasOwnProperty(p)){m=typeof r[p];
if(r[p]!==null&&m==="object"){q[p]=q[p]||{};n[p]=n[p]||{};this._setDiffLoop(r[p],q[p],o[p],n[p])
}else{if(m==="number"&&o[p]!==undefined){if(q[p]!==undefined){o[p]=q[p]}else{q[p]=o[p]
}n[p]=r[p]-o[p]}else{r[p]=null;q[p]=null}}}}};f._getDetails=function(){return{target:this.getTarget(),progress:this.getProgress(),clip:this}
};f._start=function(){this._startTimeout=null;this._remainingDelay=0;this._setStartTime();
this._clock.on("update",this._update);this._clock.on("draw",this._draw);if(!this._clock.isRunning()){this._clock.start()
}this._setDiff();this._playing=true;this._running=true;if(this._onStart){this._onStart.call(this,this._getDetails())
}this.trigger(h.PLAY,this._getDetails())};f._stop=function(){this._playing=false;
this._running=false;this._clock.off("update",this._update);this._clock.off("draw",this._draw)
};f._updateProps=function(){var m;if(this._direction===1){m=this._ease.getValue(this._progress)
}else{m=1-this._ease.getValue(1-this._progress)}this._updatePropsLoop(this._propsTo,this._propsFrom,this._target,this._propsDiff,m)
};f._updatePropsLoop=function(r,q,o,n,m){var p;for(p in r){if(r.hasOwnProperty(p)&&r[p]!==null){if(typeof r[p]!=="number"){this._updatePropsLoop(r[p],q[p],o[p],n[p],m)
}else{o[p]=q[p]+(n[p]*m)}}}};f._completeProps=function(){this._completePropsLoop(this._propsTo,this._target)
};f._completePropsLoop=function(o,m){var n;for(n in o){if(o.hasOwnProperty(n)&&o[n]!==null){if(typeof o[n]!=="number"){this._completePropsLoop(o[n],m[n])
}else{m[n]=o[n]}}}};f._complete=function(){if(this._isYoyo&&((this._loop>0&&this._loopCount<=this._loop)||(this._loop===0&&this._loopCount===0))){this._propsFrom=(this._direction===1)?this._storePropsTo:this._storePropsFrom;
this._propsTo=(this._direction===1)?this._storePropsFrom:this._storePropsTo;this._direction*=-1;
if(this._direction===-1){++this._loopCount}this.setProgress(0);this._start()}else{if(this._loopCount<this._loop){++this._loopCount;
this.setProgress(0);this._start()}else{if(this._onComplete){this._onComplete.call(this,this._getDetails())
}this.trigger(h.COMPLETE,this._getDetails());if(this._options&&this._options.destroyOnComplete){this.destroy()
}}}};f._update=function(m){if(this._running){this._progress=(m.timeNow-this._startTime)/this._duration;
if(this._progress>=1){this._progress=1;this._running=false;this._completeProps()
}else{this._updateProps()}if(this._onUpdate){this._onUpdate.call(this,this._getDetails())
}}};f._draw=function(m){if(this._onDraw){this._onDraw.call(this,this._getDetails())
}if(!this._running){this._stop();if(this._progress===1){this._complete()}}};h._instantiate=function(){this._clips=[];
return this};h._add=function(m){this._clips.push(m)};h._remove=function(n){var m=this._clips.indexOf(n);
if(m>-1){this._clips.splice(m,1)}};h.getAll=function(o){if(o!==undefined){var m=[];
var n=this._clips.length;while(n--){if(this._clips[n].getTarget()===o){m.push(this._clips[n])
}}return m}return Array.prototype.slice.call(this._clips)};h.destroyAll=function(o){var m=this.getAll(o);
if(this._clips.length===m.length){this._clips=[]}var n=m.length;while(n--){m[n].destroy()
}return m};h.to=function(o,n,p,m){m=m||{};if(m.destroyOnComplete===undefined){m.destroyOnComplete=true
}return new h(o,n,p,m).play()};h.from=function(p,o,m,n){n=n||{};n.propsFrom=m;if(n.destroyOnComplete===undefined){n.destroyOnComplete=true
}return new h(p,o,n.propsTo,n).play()};b.exports=h._instantiate()},{"ac-clock":128,"ac-easing":166,"ac-event-emitter":256,"ac-object":662}],134:[function(b,c,a){var d=b("./ac-color/Color");
d.decimalToHex=b("./ac-color/static/decimalToHex");d.hexToDecimal=b("./ac-color/static/hexToDecimal");
d.hexToRgb=b("./ac-color/static/hexToRgb");d.isColor=b("./ac-color/static/isColor");
d.isHex=b("./ac-color/static/isHex");d.isRgb=b("./ac-color/static/isRgb");d.isRgba=b("./ac-color/static/isRgba");
d.mixColors=b("./ac-color/static/mixColors");d.rgbaToArray=b("./ac-color/static/rgbaToArray");
d.rgbToArray=b("./ac-color/static/rgbToArray");d.rgbToDecimal=b("./ac-color/static/rgbToDecimal");
d.rgbToHex=b("./ac-color/static/rgbToHex");d.rgbToHsl=b("./ac-color/static/rgbToHsl");
d.rgbToHsv=b("./ac-color/static/rgbToHsv");d.rgbaToObject=b("./ac-color/static/rgbaToObject");
d.rgbToObject=b("./ac-color/static/rgbToObject");d.shortToLongHex=b("./ac-color/static/shortToLongHex");
c.exports={Color:d}},{"./ac-color/Color":135,"./ac-color/static/decimalToHex":137,"./ac-color/static/hexToDecimal":138,"./ac-color/static/hexToRgb":139,"./ac-color/static/isColor":140,"./ac-color/static/isHex":141,"./ac-color/static/isRgb":142,"./ac-color/static/isRgba":143,"./ac-color/static/mixColors":144,"./ac-color/static/rgbToArray":145,"./ac-color/static/rgbToDecimal":146,"./ac-color/static/rgbToHex":147,"./ac-color/static/rgbToHsl":148,"./ac-color/static/rgbToHsv":149,"./ac-color/static/rgbToObject":150,"./ac-color/static/rgbaToArray":151,"./ac-color/static/rgbaToObject":152,"./ac-color/static/shortToLongHex":153}],135:[function(d,a,q){var h=d("./helpers/cssColorNames");
var m=d("./static/hexToRgb");var l=d("./static/isColor");var f=d("./static/isHex");
var b=d("./static/isRgba");var p=d("./static/mixColors");var k=d("./static/rgbaToArray");
var n=d("./static/rgbToArray");var s=d("./static/rgbToDecimal");var i=d("./static/rgbToHex");
var c=d("./static/rgbaToObject");var j=d("./static/rgbToObject");var o=d("./static/shortToLongHex");
function r(t){if(!l(t)&&!h.nameToRgbObject[t]){throw new Error(t+" is not a supported color.")
}this._setColor(t)}var g=r.prototype;g._setColor=function(t){this._color={};if(f(t)){this._color.hex=o(t);
this._color.rgb={color:m(t)}}else{if(b(t)){this._color.rgba={color:t};var v=this.rgbaObject();
this._color.rgb={color:"rgb("+v.r+", "+v.g+", "+v.b+")"}}else{if(h.nameToRgbObject[t]){var u=h.nameToRgbObject[t];
this._color.rgb={object:u,color:"rgb("+u.r+", "+u.g+", "+u.b+")"}}else{this._color.rgb={color:t}
}}}};g.rgb=function(){return this._color.rgb.color};g.rgba=function(){if(this._color.rgba===undefined){var t=this.rgbObject();
this._color.rgba={color:"rgba("+t.r+", "+t.g+", "+t.b+", 1)"}}return this._color.rgba.color
};g.hex=function(){if(this._color.hex===undefined){this._color.hex=i.apply(this,this.rgbArray())
}return this._color.hex};g.decimal=function(){if(this._color.decimal===undefined){this._color.decimal=s(this.rgb())
}return this._color.decimal};g.cssName=function(){return h.rgbToName[this.rgb()]||null
};g.rgbArray=function(){if(this._color.rgb.array===undefined){this._color.rgb.array=n(this.rgb())
}return this._color.rgb.array};g.rgbaArray=function(){if(this._color.rgba===undefined){this.rgba()
}if(this._color.rgba.array===undefined){this._color.rgba.array=k(this.rgba())}return this._color.rgba.array
};g.rgbObject=function(){if(this._color.rgb.object===undefined){this._color.rgb.object=j(this.rgb())
}return this._color.rgb.object};g.rgbaObject=function(){if(this._color.rgba===undefined){this.rgba()
}if(this._color.rgba.object===undefined){this._color.rgba.object=c(this.rgba())
}return this._color.rgba.object};g.getRed=function(){return this.rgbObject().r};
g.getGreen=function(){return this.rgbObject().g};g.getBlue=function(){return this.rgbObject().b
};g.getAlpha=function(){if(this._color.rgba===undefined){return 1}return this.rgbaObject().a
};g.setRed=function(t){if(t!==this.getRed()){this._setColor("rgba("+t+", "+this.getGreen()+", "+this.getBlue()+", "+this.getAlpha()+")")
}return this.rgbObject().r};g.setGreen=function(t){if(t!==this.getGreen()){this._setColor("rgba("+this.getRed()+", "+t+", "+this.getBlue()+", "+this.getAlpha()+")")
}return this.rgbObject().g};g.setBlue=function(t){if(t!==this.getBlue()){this._setColor("rgba("+this.getRed()+", "+this.getGreen()+", "+t+", "+this.getAlpha()+")")
}return this.rgbObject().b};g.setAlpha=function(t){if(t!==this.getAlpha()){this._setColor("rgba("+this.getRed()+", "+this.getGreen()+", "+this.getBlue()+", "+t+")")
}return this.rgbaObject().a};g.mix=function(t,u){var v=j(p(this.rgb(),t,u));this._setColor("rgba("+v.r+", "+v.g+", "+v.b+", "+this.getAlpha()+")");
return this.rgb()};g.clone=function(){return new r(this.rgb())};a.exports=r},{"./helpers/cssColorNames":136,"./static/hexToRgb":139,"./static/isColor":140,"./static/isHex":141,"./static/isRgba":143,"./static/mixColors":144,"./static/rgbToArray":145,"./static/rgbToDecimal":146,"./static/rgbToHex":147,"./static/rgbToObject":150,"./static/rgbaToArray":151,"./static/rgbaToObject":152,"./static/shortToLongHex":153}],136:[function(b,c,a){var d={"rgb(240, 248, 255)":"aliceblue","rgb(250, 235, 215)":"antiquewhite","rgb(0, 0, 0)":"black","rgb(0, 0, 255)":"blue","rgb(0, 255, 255)":"cyan","rgb(0, 0, 139)":"darkblue","rgb(0, 139, 139)":"darkcyan","rgb(0, 100, 0)":"darkgreen","rgb(0, 206, 209)":"darkturquoise","rgb(0, 191, 255)":"deepskyblue","rgb(0, 128, 0)":"green","rgb(0, 255, 0)":"lime","rgb(0, 0, 205)":"mediumblue","rgb(0, 250, 154)":"mediumspringgreen","rgb(0, 0, 128)":"navy","rgb(0, 255, 127)":"springgreen","rgb(0, 128, 128)":"teal","rgb(25, 25, 112)":"midnightblue","rgb(30, 144, 255)":"dodgerblue","rgb(32, 178, 170)":"lightseagreen","rgb(34, 139, 34)":"forestgreen","rgb(46, 139, 87)":"seagreen","rgb(47, 79, 79)":"darkslategray","rgb(50, 205, 50)":"limegreen","rgb(60, 179, 113)":"mediumseagreen","rgb(64, 224, 208)":"turquoise","rgb(65, 105, 225)":"royalblue","rgb(70, 130, 180)":"steelblue","rgb(72, 61, 139)":"darkslateblue","rgb(72, 209, 204)":"mediumturquoise","rgb(75, 0, 130)":"indigo","rgb(85, 107, 47)":"darkolivegreen","rgb(95, 158, 160)":"cadetblue","rgb(100, 149, 237)":"cornflowerblue","rgb(102, 205, 170)":"mediumaquamarine","rgb(105, 105, 105)":"dimgray","rgb(106, 90, 205)":"slateblue","rgb(107, 142, 35)":"olivedrab","rgb(112, 128, 144)":"slategray","rgb(119, 136, 153)":"lightslategray","rgb(123, 104, 238)":"mediumslateblue","rgb(124, 252, 0)":"lawngreen","rgb(127, 255, 212)":"aquamarine","rgb(127, 255, 0)":"chartreuse","rgb(128, 128, 128)":"gray","rgb(128, 0, 0)":"maroon","rgb(128, 128, 0)":"olive","rgb(128, 0, 128)":"purple","rgb(135, 206, 250)":"lightskyblue","rgb(135, 206, 235)":"skyblue","rgb(138, 43, 226)":"blueviolet","rgb(139, 0, 139)":"darkmagenta","rgb(139, 0, 0)":"darkred","rgb(139, 69, 19)":"saddlebrown","rgb(143, 188, 143)":"darkseagreen","rgb(144, 238, 144)":"lightgreen","rgb(147, 112, 219)":"mediumpurple","rgb(148, 0, 211)":"darkviolet","rgb(152, 251, 152)":"palegreen","rgb(153, 50, 204)":"darkorchid","rgb(154, 205, 50)":"yellowgreen","rgb(160, 82, 45)":"sienna","rgb(165, 42, 42)":"brown","rgb(169, 169, 169)":"darkgray","rgb(173, 255, 47)":"greenyellow","rgb(173, 216, 230)":"lightblue","rgb(175, 238, 238)":"paleturquoise","rgb(176, 196, 222)":"lightsteelblue","rgb(176, 224, 230)":"powderblue","rgb(178, 34, 34)":"firebrick","rgb(184, 134, 11)":"darkgoldenrod","rgb(186, 85, 211)":"mediumorchid","rgb(188, 143, 143)":"rosybrown","rgb(189, 183, 107)":"darkkhaki","rgb(192, 192, 192)":"silver","rgb(199, 21, 133)":"mediumvioletred","rgb(205, 92, 92)":"indianred","rgb(205, 133, 63)":"peru","rgb(210, 105, 30)":"chocolate","rgb(210, 180, 140)":"tan","rgb(211, 211, 211)":"lightgray","rgb(216, 191, 216)":"thistle","rgb(218, 165, 32)":"goldenrod","rgb(218, 112, 214)":"orchid","rgb(219, 112, 147)":"palevioletred","rgb(220, 20, 60)":"crimson","rgb(220, 220, 220)":"gainsboro","rgb(221, 160, 221)":"plum","rgb(222, 184, 135)":"burlywood","rgb(224, 255, 255)":"lightcyan","rgb(230, 230, 250)":"lavender","rgb(233, 150, 122)":"darksalmon","rgb(238, 232, 170)":"palegoldenrod","rgb(238, 130, 238)":"violet","rgb(240, 255, 255)":"azure","rgb(240, 255, 240)":"honeydew","rgb(240, 230, 140)":"khaki","rgb(240, 128, 128)":"lightcoral","rgb(244, 164, 96)":"sandybrown","rgb(245, 245, 220)":"beige","rgb(245, 255, 250)":"mintcream","rgb(245, 222, 179)":"wheat","rgb(245, 245, 245)":"whitesmoke","rgb(248, 248, 255)":"ghostwhite","rgb(250, 250, 210)":"lightgoldenrodyellow","rgb(250, 240, 230)":"linen","rgb(250, 128, 114)":"salmon","rgb(253, 245, 230)":"oldlace","rgb(255, 228, 196)":"bisque","rgb(255, 235, 205)":"blanchedalmond","rgb(255, 127, 80)":"coral","rgb(255, 248, 220)":"cornsilk","rgb(255, 140, 0)":"darkorange","rgb(255, 20, 147)":"deeppink","rgb(255, 250, 240)":"floralwhite","rgb(255, 215, 0)":"gold","rgb(255, 105, 180)":"hotpink","rgb(255, 255, 240)":"ivory","rgb(255, 240, 245)":"lavenderblush","rgb(255, 250, 205)":"lemonchiffon","rgb(255, 182, 193)":"lightpink","rgb(255, 160, 122)":"lightsalmon","rgb(255, 255, 224)":"lightyellow","rgb(255, 0, 255)":"magenta","rgb(255, 228, 225)":"mistyrose","rgb(255, 228, 181)":"moccasin","rgb(255, 222, 173)":"navajowhite","rgb(255, 165, 0)":"orange","rgb(255, 69, 0)":"orangered","rgb(255, 239, 213)":"papayawhip","rgb(255, 218, 185)":"peachpuff","rgb(255, 192, 203)":"pink","rgb(255, 0, 0)":"red","rgb(255, 245, 238)":"seashell","rgb(255, 250, 250)":"snow","rgb(255, 99, 71)":"tomato","rgb(255, 255, 255)":"white","rgb(255, 255, 0)":"yellow","rgb(102, 51, 153)":"rebeccapurple"};
var f={aqua:{r:0,g:255,b:255},aliceblue:{r:240,g:248,b:255},antiquewhite:{r:250,g:235,b:215},black:{r:0,g:0,b:0},blue:{r:0,g:0,b:255},cyan:{r:0,g:255,b:255},darkblue:{r:0,g:0,b:139},darkcyan:{r:0,g:139,b:139},darkgreen:{r:0,g:100,b:0},darkturquoise:{r:0,g:206,b:209},deepskyblue:{r:0,g:191,b:255},green:{r:0,g:128,b:0},lime:{r:0,g:255,b:0},mediumblue:{r:0,g:0,b:205},mediumspringgreen:{r:0,g:250,b:154},navy:{r:0,g:0,b:128},springgreen:{r:0,g:255,b:127},teal:{r:0,g:128,b:128},midnightblue:{r:25,g:25,b:112},dodgerblue:{r:30,g:144,b:255},lightseagreen:{r:32,g:178,b:170},forestgreen:{r:34,g:139,b:34},seagreen:{r:46,g:139,b:87},darkslategray:{r:47,g:79,b:79},darkslategrey:{r:47,g:79,b:79},limegreen:{r:50,g:205,b:50},mediumseagreen:{r:60,g:179,b:113},turquoise:{r:64,g:224,b:208},royalblue:{r:65,g:105,b:225},steelblue:{r:70,g:130,b:180},darkslateblue:{r:72,g:61,b:139},mediumturquoise:{r:72,g:209,b:204},indigo:{r:75,g:0,b:130},darkolivegreen:{r:85,g:107,b:47},cadetblue:{r:95,g:158,b:160},cornflowerblue:{r:100,g:149,b:237},mediumaquamarine:{r:102,g:205,b:170},dimgray:{r:105,g:105,b:105},dimgrey:{r:105,g:105,b:105},slateblue:{r:106,g:90,b:205},olivedrab:{r:107,g:142,b:35},slategray:{r:112,g:128,b:144},slategrey:{r:112,g:128,b:144},lightslategray:{r:119,g:136,b:153},lightslategrey:{r:119,g:136,b:153},mediumslateblue:{r:123,g:104,b:238},lawngreen:{r:124,g:252,b:0},aquamarine:{r:127,g:255,b:212},chartreuse:{r:127,g:255,b:0},gray:{r:128,g:128,b:128},grey:{r:128,g:128,b:128},maroon:{r:128,g:0,b:0},olive:{r:128,g:128,b:0},purple:{r:128,g:0,b:128},lightskyblue:{r:135,g:206,b:250},skyblue:{r:135,g:206,b:235},blueviolet:{r:138,g:43,b:226},darkmagenta:{r:139,g:0,b:139},darkred:{r:139,g:0,b:0},saddlebrown:{r:139,g:69,b:19},darkseagreen:{r:143,g:188,b:143},lightgreen:{r:144,g:238,b:144},mediumpurple:{r:147,g:112,b:219},darkviolet:{r:148,g:0,b:211},palegreen:{r:152,g:251,b:152},darkorchid:{r:153,g:50,b:204},yellowgreen:{r:154,g:205,b:50},sienna:{r:160,g:82,b:45},brown:{r:165,g:42,b:42},darkgray:{r:169,g:169,b:169},darkgrey:{r:169,g:169,b:169},greenyellow:{r:173,g:255,b:47},lightblue:{r:173,g:216,b:230},paleturquoise:{r:175,g:238,b:238},lightsteelblue:{r:176,g:196,b:222},powderblue:{r:176,g:224,b:230},firebrick:{r:178,g:34,b:34},darkgoldenrod:{r:184,g:134,b:11},mediumorchid:{r:186,g:85,b:211},rosybrown:{r:188,g:143,b:143},darkkhaki:{r:189,g:183,b:107},silver:{r:192,g:192,b:192},mediumvioletred:{r:199,g:21,b:133},indianred:{r:205,g:92,b:92},peru:{r:205,g:133,b:63},chocolate:{r:210,g:105,b:30},tan:{r:210,g:180,b:140},lightgray:{r:211,g:211,b:211},lightgrey:{r:211,g:211,b:211},thistle:{r:216,g:191,b:216},goldenrod:{r:218,g:165,b:32},orchid:{r:218,g:112,b:214},palevioletred:{r:219,g:112,b:147},crimson:{r:220,g:20,b:60},gainsboro:{r:220,g:220,b:220},plum:{r:221,g:160,b:221},burlywood:{r:222,g:184,b:135},lightcyan:{r:224,g:255,b:255},lavender:{r:230,g:230,b:250},darksalmon:{r:233,g:150,b:122},palegoldenrod:{r:238,g:232,b:170},violet:{r:238,g:130,b:238},azure:{r:240,g:255,b:255},honeydew:{r:240,g:255,b:240},khaki:{r:240,g:230,b:140},lightcoral:{r:240,g:128,b:128},sandybrown:{r:244,g:164,b:96},beige:{r:245,g:245,b:220},mintcream:{r:245,g:255,b:250},wheat:{r:245,g:222,b:179},whitesmoke:{r:245,g:245,b:245},ghostwhite:{r:248,g:248,b:255},lightgoldenrodyellow:{r:250,g:250,b:210},linen:{r:250,g:240,b:230},salmon:{r:250,g:128,b:114},oldlace:{r:253,g:245,b:230},bisque:{r:255,g:228,b:196},blanchedalmond:{r:255,g:235,b:205},coral:{r:255,g:127,b:80},cornsilk:{r:255,g:248,b:220},darkorange:{r:255,g:140,b:0},deeppink:{r:255,g:20,b:147},floralwhite:{r:255,g:250,b:240},fuchsia:{r:255,g:0,b:255},gold:{r:255,g:215,b:0},hotpink:{r:255,g:105,b:180},ivory:{r:255,g:255,b:240},lavenderblush:{r:255,g:240,b:245},lemonchiffon:{r:255,g:250,b:205},lightpink:{r:255,g:182,b:193},lightsalmon:{r:255,g:160,b:122},lightyellow:{r:255,g:255,b:224},magenta:{r:255,g:0,b:255},mistyrose:{r:255,g:228,b:225},moccasin:{r:255,g:228,b:181},navajowhite:{r:255,g:222,b:173},orange:{r:255,g:165,b:0},orangered:{r:255,g:69,b:0},papayawhip:{r:255,g:239,b:213},peachpuff:{r:255,g:218,b:185},pink:{r:255,g:192,b:203},red:{r:255,g:0,b:0},seashell:{r:255,g:245,b:238},snow:{r:255,g:250,b:250},tomato:{r:255,g:99,b:71},white:{r:255,g:255,b:255},yellow:{r:255,g:255,b:0},rebeccapurple:{r:102,g:51,b:153}};
c.exports={rgbToName:d,nameToRgbObject:f}},{}],137:[function(c,d,b){d.exports=function a(f){return"#"+(f).toString(16)
}},{}],138:[function(c,d,a){d.exports=function b(f){return parseInt(f.substr(1),16)
}},{}],139:[function(d,f,c){var a=d("./shortToLongHex");f.exports=function b(h){h=a(h);
var g=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(h);return g?"rgb("+parseInt(g[1],16)+", "+parseInt(g[2],16)+", "+parseInt(g[3],16)+")":null
}},{"./shortToLongHex":153}],140:[function(c,f,b){var h=c("./isRgb");var g=c("./isRgba");
var a=c("./isHex");f.exports=function d(i){return a(i)||h(i)||g(i)}},{"./isHex":141,"./isRgb":142,"./isRgba":143}],141:[function(c,d,b){d.exports=function a(g){var f=/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;
return f.test(g)}},{}],142:[function(b,c,a){c.exports=function d(g){var f=/^rgb\(\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*\)$/;
return f.exec(g)!==null}},{}],143:[function(b,c,a){c.exports=function d(g){var f=/^rgba\(\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*(0(\.\d+)?|1(\.0+)?)\s*\)$/;
return f.exec(g)!==null}},{}],144:[function(d,f,c){var b=d("./isHex");var a=d("./hexToRgb");
var h=d("./rgbToObject");f.exports=function g(n,m,l){n=b(n)?a(n):n;m=b(m)?a(m):m;
n=h(n);m=h(m);var k=n.r+((m.r-n.r)*l);var j=n.g+((m.g-n.g)*l);var i=n.b+((m.b-n.b)*l);
return"rgb("+Math.round(k)+", "+Math.round(j)+", "+Math.round(i)+")"}},{"./hexToRgb":139,"./isHex":141,"./rgbToObject":150}],145:[function(b,c,a){var d=b("./rgbToObject");
c.exports=function f(g){var h=d(g);return[h.r,h.g,h.b]}},{"./rgbToObject":150}],146:[function(d,f,b){var c=d("./hexToDecimal");
var h=d("./rgbToArray");var g=d("./rgbToHex");f.exports=function a(i){var j=g.apply(this,h(i));
return c(j)}},{"./hexToDecimal":138,"./rgbToArray":145,"./rgbToHex":147}],147:[function(b,c,a){c.exports=function d(i,h,f){return"#"+((1<<24)+(i<<16)+(h<<8)+f).toString(16).slice(1)
}},{}],148:[function(c,d,b){d.exports=function a(f,m,o){if(arguments.length!==3){return false
}f/=255;m/=255;o/=255;var p=Math.max(f,m,o);var j=Math.min(f,m,o);var n=p+j;var q=p-j;
var k;var t;var i=(n/2);if(p===j){k=t=0}else{t=i>0.5?q/(2-p-j):q/n;switch(p){case f:k=(m-o)/q;
break;case m:k=2+((o-f)/q);break;case o:k=4+((f-m)/q);break}k*=60;if(k<0){k+=360
}}return([k,Math.round(100*t),Math.round(100*i)])}},{}],149:[function(c,d,a){d.exports=function b(f,m,n){if(arguments.length!==3){return false
}var i=f/255;var j=m/255;var p=n/255;var o=Math.max(i,j,p);var k=Math.min(i,j,p);
var l;var u;var t=o;var q=o-k;u=o===0?0:q/o;if(o===k){l=0}else{switch(o){case i:l=(j-p)/q+(j<p?6:0);
break;case j:l=(p-i)/q+2;break;case p:l=(i-j)/q+4;break}l/=6}return[Math.round(360*l),Math.round(100*u),Math.round(100*t)]
}},{}],150:[function(b,c,a){c.exports=function d(g){var h=/rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)/;
var f=h.exec(g);return{r:Number(f[1]),g:Number(f[2]),b:Number(f[3])}}},{}],151:[function(b,c,a){var f=b("./rgbaToObject");
c.exports=function d(g){var h=f(g);return[h.r,h.g,h.b,h.a]}},{"./rgbaToObject":152}],152:[function(b,c,a){c.exports=function d(g){var h=/rgba\(\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(0(\.\d+)?|1(\.0+)?)\s*\)/;
var f=h.exec(g);return{r:Number(f[1]),g:Number(f[2]),b:Number(f[3]),a:Number(f[4])}
}},{}],153:[function(c,d,b){d.exports=function a(g){var f=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;
g=g.replace(f,function(i,k,j,h){return"#"+k+k+j+j+h+h});return g}},{}],154:[function(d,f,c){var b=d("./utils/getBoundingClientRect");
f.exports=function a(g,i){var h=1;if(i){h=b(g).width/g.offsetWidth}return{width:g.scrollWidth*h,height:g.scrollHeight*h}
}},{"./utils/getBoundingClientRect":165}],155:[function(d,f,c){var b=d("./utils/getBoundingClientRect");
f.exports=function a(g,i){var h;if(i){h=b(g);return{width:h.width,height:h.height}
}return{width:g.offsetWidth,height:g.offsetHeight}}},{"./utils/getBoundingClientRect":165}],156:[function(g,h,f){var c=g("./getDimensions");
var d=g("./utils/getBoundingClientRect");var b=g("./getScrollX");var a=g("./getScrollY");
h.exports=function i(j,p){var l;var o;var m;var k;var n;if(p){l=d(j);o=b();m=a();
return{top:l.top+m,right:l.right+o,bottom:l.bottom+m,left:l.left+o}}k=c(j,p);l={top:j.offsetTop,left:j.offsetLeft,width:k.width,height:k.height};
while(j=j.offsetParent){l.top+=j.offsetTop;l.left+=j.offsetLeft}return{top:l.top,right:l.left+l.width,bottom:l.top+l.height,left:l.left}
}},{"./getDimensions":155,"./getScrollX":160,"./getScrollY":161,"./utils/getBoundingClientRect":165}],157:[function(c,f,b){var a=c("./getDimensions");
var g=c("./getPixelsInViewport");f.exports=function d(j,k){var i=g(j,k);var h=a(j,k).height;
return(i/h)}},{"./getDimensions":155,"./getPixelsInViewport":158}],158:[function(c,d,b){var a=c("./getViewportPosition");
d.exports=function f(h,k){var j=document.documentElement.clientHeight;var g=a(h,k);
var i;if(g.top>=j||g.bottom<=0){return 0}i=(g.bottom-g.top);if(g.top<0){i+=g.top
}if(g.bottom>j){i-=g.bottom-j}return i}},{"./getViewportPosition":162}],159:[function(d,f,c){var a=d("./getDimensions");
var b=d("./utils/getBoundingClientRect");f.exports=function g(i,l){var k;var h;
var j;if(l){k=b(i);if(i.offsetParent){h=b(i.offsetParent);k.top-=h.top;k.left-=h.left
}}else{j=a(i,l);k={top:i.offsetTop,left:i.offsetLeft,width:j.width,height:j.height}
}return{top:k.top,right:k.left+k.width,bottom:k.top+k.height,left:k.left}}},{"./getDimensions":155,"./utils/getBoundingClientRect":165}],160:[function(c,d,b){d.exports=function a(f){var g;
f=f||window;if(f===window){g=window.pageXOffset;if(!g){f=document.documentElement||document.body.parentNode||document.body
}else{return g}}return f.scrollLeft}},{}],161:[function(c,d,b){d.exports=function a(f){var g;
f=f||window;if(f===window){g=window.pageYOffset;if(!g){f=document.documentElement||document.body.parentNode||document.body
}else{return g}}return f.scrollTop}},{}],162:[function(g,h,f){var i=g("./getPagePosition");
var d=g("./utils/getBoundingClientRect");var c=g("./getScrollX");var b=g("./getScrollY");
h.exports=function a(k,n){var j;var m;var l;if(n){j=d(k);return{top:j.top,right:j.right,bottom:j.bottom,left:j.left}
}j=i(k);m=c();l=b();return{top:j.top-l,right:j.right-m,bottom:j.bottom-l,left:j.left-m}
}},{"./getPagePosition":156,"./getScrollX":160,"./getScrollY":161,"./utils/getBoundingClientRect":165}],163:[function(b,c,a){c.exports={getContentDimensions:b("./getContentDimensions"),getDimensions:b("./getDimensions"),getPagePosition:b("./getPagePosition"),getPercentInViewport:b("./getPercentInViewport"),getPixelsInViewport:b("./getPixelsInViewport"),getPosition:b("./getPosition"),getScrollX:b("./getScrollX"),getScrollY:b("./getScrollY"),getViewportPosition:b("./getViewportPosition"),isInViewport:b("./isInViewport")}
},{"./getContentDimensions":154,"./getDimensions":155,"./getPagePosition":156,"./getPercentInViewport":157,"./getPixelsInViewport":158,"./getPosition":159,"./getScrollX":160,"./getScrollY":161,"./getViewportPosition":162,"./isInViewport":164}],164:[function(b,d,a){var g=b("./getPixelsInViewport");
var c=b("./getPercentInViewport");d.exports=function f(j,k,h){var i;h=h||0;if(typeof h==="string"&&h.slice(-2)==="px"){h=parseInt(h,10);
i=g(j,k)}else{i=c(j,k)}return(i>0&&i>=h)}},{"./getPercentInViewport":157,"./getPixelsInViewport":158}],165:[function(c,d,b){d.exports=function a(f){var g=f.getBoundingClientRect();
return{top:g.top,right:g.right,bottom:g.bottom,left:g.left,width:g.width||g.right-g.left,height:g.height||g.bottom-g.top}
}},{}],166:[function(b,c,a){c.exports={createBezier:b("./ac-easing/createBezier"),createPredefined:b("./ac-easing/createPredefined"),createStep:b("./ac-easing/createStep"),Ease:b("./ac-easing/Ease")}
},{"./ac-easing/Ease":167,"./ac-easing/createBezier":168,"./ac-easing/createPredefined":169,"./ac-easing/createStep":170}],167:[function(b,c,a){var g="Ease expects an easing function.";
function f(i,h){if(typeof i!=="function"){throw new TypeError(g)}this.easingFunction=i;
this.cssString=h||null}var d=f.prototype;d.getValue=function(h){return this.easingFunction(h,0,1,1)
};c.exports=f},{}],168:[function(b,c,a){var f=b("./Ease");var h=b("./helpers/KeySpline");
var d="Bezier curve expects exactly four (4) numbers. Given: ";c.exports=function g(j,p,i,o){var q=Array.prototype.slice.call(arguments);
var m=q.every(function(r){return(typeof r==="number")});if(q.length!==4||!m){throw new TypeError(d+q)
}var n=new h(j,p,i,o);var k=function(t,r,u,s){return n.get(t/s)*u+r};var l="cubic-bezier("+q.join(", ")+")";
return new f(k,l)}},{"./Ease":167,"./helpers/KeySpline":171}],169:[function(c,a,d){var i=c("./createStep");
var f=c("./helpers/cssAliases");var b=c("./helpers/easingFunctions");var h=c("./Ease");
var g='Easing function "%TYPE%" not recognized among the following: '+Object.keys(b).join(", ");
a.exports=function j(k){var l;if(k==="step-start"){return i(1,"start")}else{if(k==="step-end"){return i(1,"end")
}else{l=b[k]}}if(!l){throw new Error(g.replace("%TYPE%",k))}return new h(l,f[k])
}},{"./Ease":167,"./createStep":170,"./helpers/cssAliases":172,"./helpers/easingFunctions":173}],170:[function(d,f,c){var g=d("./Ease");
var b="Step function expects a numeric value greater than zero. Given: ";var a='Step function direction must be either "start" or "end" (default). Given: ';
f.exports=function h(i,l){l=l||"end";if(typeof i!=="number"||i<1){throw new TypeError(b+i)
}if(l!=="start"&&l!=="end"){throw new TypeError(a+l)}var k=function(q,m,r,p){var o=r/i;
var n=Math[(l==="start")?"floor":"ceil"](q/p*i);return m+o*n};var j="steps("+i+", "+l+")";
return new g(k,j)}},{"./Ease":167}],171:[function(b,c,a){
/*! MIT License
 *
 * KeySpline - use bezier curve for transition easing function
 * Copyright (c) 2012 Gaetan Renaudeau <renaudeau.gaetan@gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */
;
function d(o,l,n,j){this.get=function(p){if(o===l&&n===j){return p}return g(k(p),l,j)
};function i(p,q){return 1-3*q+3*p}function h(p,q){return 3*q-6*p}function f(p){return 3*p
}function g(r,p,q){return((i(p,q)*r+h(p,q))*r+f(p))*r}function m(r,p,q){return 3*i(p,q)*r*r+2*h(p,q)*r+f(p)
}function k(s){var q=s;for(var r=0;r<4;++r){var t=m(q,o,n);if(t===0){return q}var p=g(q,o,n)-s;
q-=p/t}return q}}c.exports=d},{}],172:[function(c,d,b){var a={linear:"cubic-bezier(0, 0, 1, 1)",ease:"cubic-bezier(0.25, 0.1, 0.25, 1)","ease-in":"cubic-bezier(0.42, 0, 1, 1)","ease-out":"cubic-bezier(0, 0, 0.58, 1)","ease-in-out":"cubic-bezier(0.42, 0, 0.58, 1)","ease-in-cubic":"cubic-bezier(0.55, 0.055, 0.675, 0.19)","ease-out-cubic":"cubic-bezier(0.215, 0.61, 0.355, 1)","ease-in-out-cubic":"cubic-bezier(0.645, 0.045, 0.355, 1)","ease-in-quad":"cubic-bezier(0.55, 0.085, 0.68, 0.53)","ease-out-quad":"cubic-bezier(0.25, 0.46, 0.45, 0.94)","ease-in-out-quad":"cubic-bezier(0.455, 0.03, 0.515, 0.955)","ease-in-quart":"cubic-bezier(0.895, 0.03, 0.685, 0.22)","ease-out-quart":"cubic-bezier(0.165, 0.84, 0.44, 1)","ease-in-out-quart":"cubic-bezier(0.77, 0, 0.175, 1)","ease-in-quint":"cubic-bezier(0.755, 0.05, 0.855, 0.06)","ease-out-quint":"cubic-bezier(0.23, 1, 0.32, 1)","ease-in-out-quint":"cubic-bezier(0.86, 0, 0.07, 1)","ease-in-sine":"cubic-bezier(0.47, 0, 0.745, 0.715)","ease-out-sine":"cubic-bezier(0.39, 0.575, 0.565, 1)","ease-in-out-sine":"cubic-bezier(0.445, 0.05, 0.55, 0.95)","ease-in-expo":"cubic-bezier(0.95, 0.05, 0.795, 0.035)","ease-out-expo":"cubic-bezier(0.19, 1, 0.22, 1)","ease-in-out-expo":"cubic-bezier(1, 0, 0, 1)","ease-in-circ":"cubic-bezier(0.6, 0.04, 0.98, 0.335)","ease-out-circ":"cubic-bezier(0.075, 0.82, 0.165, 1)","ease-in-out-circ":"cubic-bezier(0.785, 0.135, 0.15, 0.86)","ease-in-back":"cubic-bezier(0.6, -0.28, 0.735, 0.045)","ease-out-back":"cubic-bezier(0.175, 0.885, 0.32, 1.275)","ease-in-out-back":"cubic-bezier(0.68, -0.55, 0.265, 1.55)"};
a.easeIn=a["ease-in"];a.easeOut=a["ease-out"];a.easeInOut=a["ease-in-out"];a.easeInCubic=a["ease-in-cubic"];
a.easeOutCubic=a["ease-out-cubic"];a.easeInOutCubic=a["ease-in-out-cubic"];a.easeInQuad=a["ease-in-quad"];
a.easeOutQuad=a["ease-out-quad"];a.easeInOutQuad=a["ease-in-out-quad"];a.easeInQuart=a["ease-in-quart"];
a.easeOutQuart=a["ease-out-quart"];a.easeInOutQuart=a["ease-in-out-quart"];a.easeInQuint=a["ease-in-quint"];
a.easeOutQuint=a["ease-out-quint"];a.easeInOutQuint=a["ease-in-out-quint"];a.easeInSine=a["ease-in-sine"];
a.easeOutSine=a["ease-out-sine"];a.easeInOutSine=a["ease-in-out-sine"];a.easeInExpo=a["ease-in-expo"];
a.easeOutExpo=a["ease-out-expo"];a.easeInOutExpo=a["ease-in-out-expo"];a.easeInCirc=a["ease-in-circ"];
a.easeOutCirc=a["ease-out-circ"];a.easeInOutCirc=a["ease-in-out-circ"];a.easeInBack=a["ease-in-back"];
a.easeOutBack=a["ease-out-back"];a.easeInOutBack=a["ease-in-out-back"];d.exports=a
},{}],173:[function(d,b,F){var J=d("../createBezier");var w=J(0.25,0.1,0.25,1).easingFunction;
var g=J(0.42,0,1,1).easingFunction;var C=J(0,0,0.58,1).easingFunction;var x=J(0.42,0,0.58,1).easingFunction;
var u=function(Q,O,R,P){return R*Q/P+O};var h=function(Q,O,R,P){return R*(Q/=P)*Q+O
};var N=function(Q,O,R,P){return -R*(Q/=P)*(Q-2)+O};var D=function(Q,O,R,P){if((Q/=P/2)<1){return R/2*Q*Q+O
}return -R/2*((--Q)*(Q-2)-1)+O};var i=function(Q,O,R,P){return R*(Q/=P)*Q*Q+O};
var a=function(Q,O,R,P){return R*((Q=Q/P-1)*Q*Q+1)+O};var j=function(Q,O,R,P){if((Q/=P/2)<1){return R/2*Q*Q*Q+O
}return R/2*((Q-=2)*Q*Q+2)+O};var o=function(Q,O,R,P){return R*(Q/=P)*Q*Q*Q+O};
var m=function(Q,O,R,P){return -R*((Q=Q/P-1)*Q*Q*Q-1)+O};var p=function(Q,O,R,P){if((Q/=P/2)<1){return R/2*Q*Q*Q*Q+O
}return -R/2*((Q-=2)*Q*Q*Q-2)+O};var y=function(Q,O,R,P){return R*(Q/=P)*Q*Q*Q*Q+O
};var v=function(Q,O,R,P){return R*((Q=Q/P-1)*Q*Q*Q*Q+1)+O};var z=function(Q,O,R,P){if((Q/=P/2)<1){return R/2*Q*Q*Q*Q*Q+O
}return R/2*((Q-=2)*Q*Q*Q*Q+2)+O};var c=function(Q,O,R,P){return -R*Math.cos(Q/P*(Math.PI/2))+R+O
};var L=function(Q,O,R,P){return R*Math.sin(Q/P*(Math.PI/2))+O};var B=function(Q,O,R,P){return -R/2*(Math.cos(Math.PI*Q/P)-1)+O
};var G=function(Q,O,R,P){return(Q===0)?O:R*Math.pow(2,10*(Q/P-1))+O};var A=function(Q,O,R,P){return(Q===P)?O+R:R*(-Math.pow(2,-10*Q/P)+1)+O
};var r=function(Q,O,R,P){if(Q===0){return O}else{if(Q===P){return O+R}else{if((Q/=P/2)<1){return R/2*Math.pow(2,10*(Q-1))+O
}}}return R/2*(-Math.pow(2,-10*--Q)+2)+O};var l=function(Q,O,R,P){return -R*(Math.sqrt(1-(Q/=P)*Q)-1)+O
};var f=function(Q,O,R,P){return R*Math.sqrt(1-(Q=Q/P-1)*Q)+O};var I=function(Q,O,R,P){if((Q/=P/2)<1){return -R/2*(Math.sqrt(1-Q*Q)-1)+O
}return R/2*(Math.sqrt(1-(Q-=2)*Q)+1)+O};var E=function(S,Q,U,R){var O=1.70158;
var T=0;var P=U;if(S===0){return Q}else{if((S/=R)===1){return Q+U}}if(!T){T=R*0.3
}if(P<Math.abs(U)){P=U;O=T/4}else{O=T/(2*Math.PI)*Math.asin(U/P)}return -(P*Math.pow(2,10*(S-=1))*Math.sin((S*R-O)*(2*Math.PI)/T))+Q
};var H=function(S,Q,U,R){var O=1.70158;var T=0;var P=U;if(S===0){return Q}else{if((S/=R)===1){return Q+U
}}if(!T){T=R*0.3}if(P<Math.abs(U)){P=U;O=T/4}else{O=T/(2*Math.PI)*Math.asin(U/P)
}return P*Math.pow(2,-10*S)*Math.sin((S*R-O)*(2*Math.PI)/T)+U+Q};var t=function(S,Q,U,R){var O=1.70158;
var T=0;var P=U;if(S===0){return Q}else{if((S/=R/2)===2){return Q+U}}if(!T){T=R*(0.3*1.5)
}if(P<Math.abs(U)){P=U;O=T/4}else{O=T/(2*Math.PI)*Math.asin(U/P)}if(S<1){return -0.5*(P*Math.pow(2,10*(S-=1))*Math.sin((S*R-O)*(2*Math.PI)/T))+Q
}return P*Math.pow(2,-10*(S-=1))*Math.sin((S*R-O)*(2*Math.PI)/T)*0.5+U+Q};var s=function(R,P,S,Q,O){if(O===undefined){O=1.70158
}return S*(R/=Q)*R*((O+1)*R-O)+P};var q=function(R,P,S,Q,O){if(O===undefined){O=1.70158
}return S*((R=R/Q-1)*R*((O+1)*R+O)+1)+P};var k=function(R,P,S,Q,O){if(O===undefined){O=1.70158
}if((R/=Q/2)<1){return S/2*(R*R*(((O*=(1.525))+1)*R-O))+P}return S/2*((R-=2)*R*(((O*=(1.525))+1)*R+O)+2)+P
};var K=function(Q,O,R,P){if((Q/=P)<(1/2.75)){return R*(7.5625*Q*Q)+O}else{if(Q<(2/2.75)){return R*(7.5625*(Q-=(1.5/2.75))*Q+0.75)+O
}else{if(Q<(2.5/2.75)){return R*(7.5625*(Q-=(2.25/2.75))*Q+0.9375)+O}}}return R*(7.5625*(Q-=(2.625/2.75))*Q+0.984375)+O
};var n=function(Q,O,R,P){return R-K(P-Q,0,R,P)+O};var M=function(Q,O,R,P){if(Q<P/2){return n(Q*2,0,R,P)*0.5+O
}return K(Q*2-P,0,R,P)*0.5+R*0.5+O};b.exports={linear:u,ease:w,easeIn:g,"ease-in":g,easeOut:C,"ease-out":C,easeInOut:x,"ease-in-out":x,easeInCubic:i,"ease-in-cubic":i,easeOutCubic:a,"ease-out-cubic":a,easeInOutCubic:j,"ease-in-out-cubic":j,easeInQuad:h,"ease-in-quad":h,easeOutQuad:N,"ease-out-quad":N,easeInOutQuad:D,"ease-in-out-quad":D,easeInQuart:o,"ease-in-quart":o,easeOutQuart:m,"ease-out-quart":m,easeInOutQuart:p,"ease-in-out-quart":p,easeInQuint:y,"ease-in-quint":y,easeOutQuint:v,"ease-out-quint":v,easeInOutQuint:z,"ease-in-out-quint":z,easeInSine:c,"ease-in-sine":c,easeOutSine:L,"ease-out-sine":L,easeInOutSine:B,"ease-in-out-sine":B,easeInExpo:G,"ease-in-expo":G,easeOutExpo:A,"ease-out-expo":A,easeInOutExpo:r,"ease-in-out-expo":r,easeInCirc:l,"ease-in-circ":l,easeOutCirc:f,"ease-out-circ":f,easeInOutCirc:I,"ease-in-out-circ":I,easeInBack:s,"ease-in-back":s,easeOutBack:q,"ease-out-back":q,easeInOutBack:k,"ease-in-out-back":k,easeInElastic:E,"ease-in-elastic":E,easeOutElastic:H,"ease-out-elastic":H,easeInOutElastic:t,"ease-in-out-elastic":t,easeInBounce:n,"ease-in-bounce":n,easeOutBounce:K,"ease-out-bounce":K,easeInOutBounce:M,"ease-in-out-bounce":M}
},{"../createBezier":168}],174:[function(b,c,a){var g=b("./helpers/globals");var f=b("ac-function/once");
var d=function(){var h=g.getDocument();var i=h.createElement("canvas");return !!(typeof i.getContext==="function"&&i.getContext("2d"))
};c.exports=f(d);c.exports.original=d},{"./helpers/globals":182,"ac-function/once":195}],175:[function(c,d,b){var h=c("ac-browser");
var a=c("./touchAvailable").original;var f=c("ac-function/once");function g(){return(!a()||(h.os==="iOS"&&h.version>=8)||h.name==="Chrome")
}d.exports=f(g);d.exports.original=g},{"./touchAvailable":210,"ac-browser":190,"ac-function/once":195}],176:[function(c,d,b){var g=c("./helpers/globals");
var f=c("ac-function/once");function a(){var k=false;var h=g.getDocument();var j=g.getNavigator();
try{if("cookie" in h&&!!j.cookieEnabled){h.cookie="ac_feature_cookie=1";k=(h.cookie.indexOf("ac_feature_cookie")!==-1);
h.cookie="ac_feature_cookie=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"}}catch(i){}return k
}d.exports=f(a);d.exports.original=a},{"./helpers/globals":182,"ac-function/once":195}],177:[function(c,d,b){var g=c("ac-prefixer/getStyleValue");
var f=c("ac-function/once");function a(){var h=["linear-gradient(to bottom right, #9f9, white)","linear-gradient(top left, #9f9, white)","gradient(linear, left top, right bottom, from(#9f9), to(white))"];
return h.some(function(i){return !!g("background-image",i)})}d.exports=f(a);d.exports.original=a
},{"ac-function/once":195,"ac-prefixer/getStyleValue":198}],178:[function(c,d,b){var g=c("ac-prefixer/getStyleValue");
var f=c("ac-prefixer/getStyleProperty");var h=c("ac-function/memoize");function a(j,i){if(typeof i!=="undefined"){return !!g(j,i)
}else{return !!f(j)}}d.exports=h(a);d.exports.original=a},{"ac-function/memoize":194,"ac-prefixer/getStyleProperty":197,"ac-prefixer/getStyleValue":198}],179:[function(b,c,a){var f=b("ac-prefixer/getStyleValue");
var d=b("ac-function/once");function g(){return !!f("margin","1vw 1vh")}c.exports=d(g);
c.exports.original=g},{"ac-function/once":195,"ac-prefixer/getStyleValue":198}],180:[function(b,d,a){var f=b("./helpers/globals");
var g=b("ac-function/memoize");function c(h,j){var i=f.getDocument();var k;j=j||"div";
k=i.createElement(j);return(h in k)}d.exports=g(c);d.exports.original=c},{"./helpers/globals":182,"ac-function/memoize":194}],181:[function(c,f,b){var a=c("ac-prefixer/getEventType");
var g=c("ac-function/memoize");function d(i,h){return !!a(i,h)}f.exports=g(d);f.exports.original=d
},{"ac-function/memoize":194,"ac-prefixer/getEventType":196}],182:[function(b,c,a){c.exports={getWindow:function(){return window
},getDocument:function(){return document},getNavigator:function(){return navigator
}}},{}],183:[function(b,c,a){c.exports={canvasAvailable:b("./canvasAvailable"),continuousScrollEventsAvailable:b("./continuousScrollEventsAvailable"),cookiesAvailable:b("./cookiesAvailable"),cssLinearGradientAvailable:b("./cssLinearGradientAvailable"),cssPropertyAvailable:b("./cssPropertyAvailable"),cssViewportUnitsAvailable:b("./cssViewportUnitsAvailable"),elementAttributeAvailable:b("./elementAttributeAvailable"),eventTypeAvailable:b("./eventTypeAvailable"),isDesktop:b("./isDesktop"),isHandheld:b("./isHandheld"),isRetina:b("./isRetina"),isTablet:b("./isTablet"),localStorageAvailable:b("./localStorageAvailable"),mediaElementsAvailable:b("./mediaElementsAvailable"),sessionStorageAvailable:b("./sessionStorageAvailable"),svgAvailable:b("./svgAvailable"),threeDTransformsAvailable:b("./threeDTransformsAvailable"),touchAvailable:b("./touchAvailable"),webGLAvailable:b("./webGLAvailable")}
},{"./canvasAvailable":174,"./continuousScrollEventsAvailable":175,"./cookiesAvailable":176,"./cssLinearGradientAvailable":177,"./cssPropertyAvailable":178,"./cssViewportUnitsAvailable":179,"./elementAttributeAvailable":180,"./eventTypeAvailable":181,"./isDesktop":184,"./isHandheld":185,"./isRetina":186,"./isTablet":187,"./localStorageAvailable":188,"./mediaElementsAvailable":189,"./sessionStorageAvailable":207,"./svgAvailable":208,"./threeDTransformsAvailable":209,"./touchAvailable":210,"./webGLAvailable":211}],184:[function(d,f,b){var a=d("./touchAvailable").original;
var h=d("./helpers/globals");var g=d("ac-function/once");function c(){var i=h.getWindow();
return(!a()&&!i.orientation)}f.exports=g(c);f.exports.original=c},{"./helpers/globals":182,"./touchAvailable":210,"ac-function/once":195}],185:[function(f,g,c){var d=f("./isDesktop").original;
var a=f("./isTablet").original;var h=f("ac-function/once");function b(){return(!d()&&!a())
}g.exports=h(b);g.exports.original=b},{"./isDesktop":184,"./isTablet":187,"ac-function/once":195}],186:[function(b,c,a){var d=b("./helpers/globals");
c.exports=function f(){var g=d.getWindow();return("devicePixelRatio" in g&&g.devicePixelRatio>=1.5)
}},{"./helpers/globals":182}],187:[function(d,f,b){var c=d("./isDesktop").original;
var h=d("./helpers/globals");var g=d("ac-function/once");function a(){var j=h.getWindow();
var i=j.screen.width;if(j.orientation&&j.screen.height<i){i=j.screen.height}return(!c()&&i>=600)
}f.exports=g(a);f.exports.original=a},{"./helpers/globals":182,"./isDesktop":184,"ac-function/once":195}],188:[function(c,d,a){var g=c("./helpers/globals");
var f=c("ac-function/once");function b(){var j=g.getWindow();var i=false;try{i=!!(j.localStorage&&j.localStorage.non_existent!==null)
}catch(h){}return i}d.exports=f(b);d.exports.original=b},{"./helpers/globals":182,"ac-function/once":195}],189:[function(b,c,a){var g=b("./helpers/globals");
var d=b("ac-function/once");function f(){var h=g.getWindow();return("HTMLMediaElement" in h)
}c.exports=d(f);c.exports.original=f},{"./helpers/globals":182,"ac-function/once":195}],190:[function(d,f,b){var g=d("./ac-browser/BrowserData");
var a=/applewebkit/i;var h=d("./ac-browser/IE");var c=g.create();c.isWebKit=function(i){var j=i||window.navigator.userAgent;
return j?!!a.test(j):false};c.lowerCaseUserAgent=navigator.userAgent.toLowerCase();
if(c.name==="IE"){c.IE={documentMode:h.getDocumentMode()}}f.exports=c},{"./ac-browser/BrowserData":191,"./ac-browser/IE":192}],191:[function(b,c,a){var d=b("./data");
function f(){}f.prototype={__getBrowserVersion:function(h,i){var g;if(!h||!i){return
}var j=d.browser.filter(function(k){return k.identity===i});j.some(function(m){var k=m.versionSearch||i;
var l=h.indexOf(k);if(l>-1){g=parseFloat(h.substring(l+k.length+1));return true
}});return g},__getName:function(g){return this.__getIdentityStringFromArray(g)
},__getIdentity:function(g){if(g.string){return this.__matchSubString(g)}else{if(g.prop){return g.identity
}}},__getIdentityStringFromArray:function(g){for(var k=0,h=g.length,j;k<h;k++){j=this.__getIdentity(g[k]);
if(j){return j}}},__getOS:function(g){return this.__getIdentityStringFromArray(g)
},__getOSVersion:function(i,l){if(!i||!l){return}var k=d.os.filter(function(m){return m.identity===l
})[0];var g=k.versionSearch||l;var j=new RegExp(g+" ([\\d_\\.]+)","i");var h=i.match(j);
if(h!==null){return h[1].replace(/_/g,".")}},__matchSubString:function(h){var g=h.subString;
if(g){var i=g.test?!!g.test(h.string):h.string.indexOf(g)>-1;if(i){return h.identity
}}}};f.create=function(){var g=new f();var h={};h.name=g.__getName(d.browser);h.version=g.__getBrowserVersion(d.versionString,h.name);
h.os=g.__getOS(d.os);h.osVersion=g.__getOSVersion(d.versionString,h.os);return h
};c.exports=f},{"./data":193}],192:[function(b,c,a){c.exports={getDocumentMode:function(){var d;
if(document.documentMode){d=parseInt(document.documentMode,10)}else{d=5;if(document.compatMode){if(document.compatMode==="CSS1Compat"){d=7
}}}return d}}},{}],193:[function(b,c,a){arguments[4][23][0].apply(a,arguments)},{dup:23}],194:[function(c,d,b){var a=function(){var h="";
var g;for(g=0;g<arguments.length;g++){if(g>0){h+=","}h+=arguments[g]}return h};
d.exports=function f(i,h){h=h||a;var g=function(){var j=arguments;var k=h.apply(this,j);
if(!(k in g.cache)){g.cache[k]=i.apply(this,j)}return g.cache[k]};g.cache={};return g
}},{}],195:[function(b,c,a){c.exports=function d(g){var f;return function(){if(typeof f==="undefined"){f=g.apply(this,arguments)
}return f}}},{}],196:[function(b,c,a){arguments[4][66][0].apply(a,arguments)},{"./shared/camelCasedEventTypes":199,"./shared/prefixHelper":201,"./utils/eventTypeAvailable":204,dup:66}],197:[function(b,c,a){arguments[4][83][0].apply(a,arguments)
},{"./shared/getStyleTestElement":200,"./shared/prefixHelper":201,"./shared/stylePropertyCache":202,"./utils/toCSS":205,"./utils/toDOM":206,dup:83}],198:[function(b,c,a){arguments[4][84][0].apply(a,arguments)
},{"./getStyleProperty":197,"./shared/prefixHelper":201,"./shared/stylePropertyCache":202,"./shared/styleValueAvailable":203,dup:84}],199:[function(b,c,a){arguments[4][67][0].apply(a,arguments)
},{dup:67}],200:[function(b,c,a){arguments[4][85][0].apply(a,arguments)},{dup:85}],201:[function(b,c,a){arguments[4][68][0].apply(a,arguments)
},{dup:68}],202:[function(b,c,a){arguments[4][87][0].apply(a,arguments)},{dup:87}],203:[function(b,c,a){arguments[4][88][0].apply(a,arguments)
},{"./getStyleTestElement":200,"./stylePropertyCache":202,dup:88}],204:[function(b,c,a){arguments[4][69][0].apply(a,arguments)
},{dup:69}],205:[function(b,c,a){arguments[4][90][0].apply(a,arguments)},{dup:90}],206:[function(b,c,a){arguments[4][91][0].apply(a,arguments)
},{dup:91}],207:[function(c,d,b){var g=c("./helpers/globals");var f=c("ac-function/once");
function a(){var j=g.getWindow();var h=false;try{if("sessionStorage" in j&&typeof j.sessionStorage.setItem==="function"){j.sessionStorage.setItem("ac_feature","test");
h=true;j.sessionStorage.removeItem("ac_feature","test")}}catch(i){}return h}d.exports=f(a);
d.exports.original=a},{"./helpers/globals":182,"ac-function/once":195}],208:[function(c,d,b){var g=c("./helpers/globals");
var f=c("ac-function/once");function a(){var h=g.getDocument();return !!h.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")
}d.exports=f(a);d.exports.original=a},{"./helpers/globals":182,"ac-function/once":195}],209:[function(b,c,a){var g=b("ac-prefixer/getStyleValue");
var d=b("ac-function/once");function f(){return !!(g("perspective","1px")&&g("transform","translateZ(0)"))
}c.exports=d(f);c.exports.original=f},{"ac-function/once":195,"ac-prefixer/getStyleValue":198}],210:[function(c,d,b){var g=c("./helpers/globals");
var f=c("ac-function/once");function a(){var j=g.getWindow();var h=g.getDocument();
var i=g.getNavigator();return !!(("ontouchstart" in j)||(j.DocumentTouch&&h instanceof j.DocumentTouch)||(i.maxTouchPoints>0)||(i.msMaxTouchPoints>0))
}d.exports=f(a);d.exports.original=a},{"./helpers/globals":182,"ac-function/once":195}],211:[function(c,d,b){var g=c("./helpers/globals");
var f=c("ac-function/once");function a(){var h=g.getDocument();var i=h.createElement("canvas");
return !!(typeof i.getContext==="function"&&i.getContext("webgl"))}d.exports=f(a);
d.exports.original=a},{"./helpers/globals":182,"ac-function/once":195}],212:[function(b,c,a){(function(){var d={};
if(typeof(a)==="undefined"){if(typeof define=="function"&&typeof define.amd=="object"&&define.amd){d.exports={};
define(function(){return d.exports})}else{d.exports=window}}else{d.exports=a}(function(n){if(!u){var u=0.000001
}if(!h){var h=(typeof Float32Array!=="undefined")?Float32Array:Array}var i={};i.setMatrixArrayType=function(w){h=w
};if(typeof(n)!=="undefined"){n.glMatrix=i}var q={};q.create=function(){var w=new h(2);
w[0]=0;w[1]=0;return w};q.clone=function(w){var x=new h(2);x[0]=w[0];x[1]=w[1];
return x};q.fromValues=function(w,A){var z=new h(2);z[0]=w;z[1]=A;return z};q.copy=function(x,w){x[0]=w[0];
x[1]=w[1];return x};q.set=function(z,w,A){z[0]=w;z[1]=A;return z};q.add=function(y,x,w){y[0]=x[0]+w[0];
y[1]=x[1]+w[1];return y};q.subtract=function(y,x,w){y[0]=x[0]-w[0];y[1]=x[1]-w[1];
return y};q.sub=q.subtract;q.multiply=function(y,x,w){y[0]=x[0]*w[0];y[1]=x[1]*w[1];
return y};q.mul=q.multiply;q.divide=function(y,x,w){y[0]=x[0]/w[0];y[1]=x[1]/w[1];
return y};q.div=q.divide;q.min=function(y,x,w){y[0]=Math.min(x[0],w[0]);y[1]=Math.min(x[1],w[1]);
return y};q.max=function(y,x,w){y[0]=Math.max(x[0],w[0]);y[1]=Math.max(x[1],w[1]);
return y};q.scale=function(y,x,w){y[0]=x[0]*w;y[1]=x[1]*w;return y};q.distance=function(A,z){var w=z[0]-A[0],B=z[1]-A[1];
return Math.sqrt(w*w+B*B)};q.dist=q.distance;q.squaredDistance=function(A,z){var w=z[0]-A[0],B=z[1]-A[1];
return w*w+B*B};q.sqrDist=q.squaredDistance;q.length=function(z){var w=z[0],A=z[1];
return Math.sqrt(w*w+A*A)};q.len=q.length;q.squaredLength=function(z){var w=z[0],A=z[1];
return w*w+A*A};q.sqrLen=q.squaredLength;q.negate=function(x,w){x[0]=-w[0];x[1]=-w[1];
return x};q.normalize=function(B,A){var z=A[0],C=A[1];var w=z*z+C*C;if(w>0){w=1/Math.sqrt(w);
B[0]=A[0]*w;B[1]=A[1]*w}return B};q.dot=function(x,w){return x[0]*w[0]+x[1]*w[1]
};q.cross=function(y,x,w){var A=x[0]*w[1]-x[1]*w[0];y[0]=y[1]=0;y[2]=A;return y
};q.lerp=function(y,x,w,z){var B=x[0],A=x[1];y[0]=B+z*(w[0]-B);y[1]=A+z*(w[1]-A);
return y};q.transformMat2=function(B,A,z){var w=A[0],C=A[1];B[0]=z[0]*w+z[2]*C;
B[1]=z[1]*w+z[3]*C;return B};q.transformMat2d=function(B,A,z){var w=A[0],C=A[1];
B[0]=z[0]*w+z[2]*C+z[4];B[1]=z[1]*w+z[3]*C+z[5];return B};q.transformMat3=function(B,A,z){var w=A[0],C=A[1];
B[0]=z[0]*w+z[3]*C+z[6];B[1]=z[1]*w+z[4]*C+z[7];return B};q.transformMat4=function(B,A,z){var w=A[0],C=A[1];
B[0]=z[0]*w+z[4]*C+z[12];B[1]=z[1]*w+z[5]*C+z[13];return B};q.forEach=(function(){var w=q.create();
return function(z,D,E,C,B,x){var A,y;if(!D){D=2}if(!E){E=0}if(C){y=Math.min((C*D)+E,z.length)
}else{y=z.length}for(A=E;A<y;A+=D){w[0]=z[A];w[1]=z[A+1];B(w,w,x);z[A]=w[0];z[A+1]=w[1]
}return z}})();q.str=function(w){return"vec2("+w[0]+", "+w[1]+")"};if(typeof(n)!=="undefined"){n.vec2=q
}var p={};p.create=function(){var w=new h(3);w[0]=0;w[1]=0;w[2]=0;return w};p.clone=function(w){var x=new h(3);
x[0]=w[0];x[1]=w[1];x[2]=w[2];return x};p.fromValues=function(w,C,B){var A=new h(3);
A[0]=w;A[1]=C;A[2]=B;return A};p.copy=function(x,w){x[0]=w[0];x[1]=w[1];x[2]=w[2];
return x};p.set=function(A,w,C,B){A[0]=w;A[1]=C;A[2]=B;return A};p.add=function(y,x,w){y[0]=x[0]+w[0];
y[1]=x[1]+w[1];y[2]=x[2]+w[2];return y};p.subtract=function(y,x,w){y[0]=x[0]-w[0];
y[1]=x[1]-w[1];y[2]=x[2]-w[2];return y};p.sub=p.subtract;p.multiply=function(y,x,w){y[0]=x[0]*w[0];
y[1]=x[1]*w[1];y[2]=x[2]*w[2];return y};p.mul=p.multiply;p.divide=function(y,x,w){y[0]=x[0]/w[0];
y[1]=x[1]/w[1];y[2]=x[2]/w[2];return y};p.div=p.divide;p.min=function(y,x,w){y[0]=Math.min(x[0],w[0]);
y[1]=Math.min(x[1],w[1]);y[2]=Math.min(x[2],w[2]);return y};p.max=function(y,x,w){y[0]=Math.max(x[0],w[0]);
y[1]=Math.max(x[1],w[1]);y[2]=Math.max(x[2],w[2]);return y};p.scale=function(y,x,w){y[0]=x[0]*w;
y[1]=x[1]*w;y[2]=x[2]*w;return y};p.distance=function(B,A){var w=A[0]-B[0],D=A[1]-B[1],C=A[2]-B[2];
return Math.sqrt(w*w+D*D+C*C)};p.dist=p.distance;p.squaredDistance=function(B,A){var w=A[0]-B[0],D=A[1]-B[1],C=A[2]-B[2];
return w*w+D*D+C*C};p.sqrDist=p.squaredDistance;p.length=function(A){var w=A[0],C=A[1],B=A[2];
return Math.sqrt(w*w+C*C+B*B)};p.len=p.length;p.squaredLength=function(A){var w=A[0],C=A[1],B=A[2];
return w*w+C*C+B*B};p.sqrLen=p.squaredLength;p.negate=function(x,w){x[0]=-w[0];
x[1]=-w[1];x[2]=-w[2];return x};p.normalize=function(C,B){var A=B[0],E=B[1],D=B[2];
var w=A*A+E*E+D*D;if(w>0){w=1/Math.sqrt(w);C[0]=B[0]*w;C[1]=B[1]*w;C[2]=B[2]*w}return C
};p.dot=function(x,w){return x[0]*w[0]+x[1]*w[1]+x[2]*w[2]};p.cross=function(x,C,B){var w=C[0],E=C[1],D=C[2],A=B[0],z=B[1],y=B[2];
x[0]=E*y-D*z;x[1]=D*A-w*y;x[2]=w*z-E*A;return x};p.lerp=function(y,x,w,z){var C=x[0],B=x[1],A=x[2];
y[0]=C+z*(w[0]-C);y[1]=B+z*(w[1]-B);y[2]=A+z*(w[2]-A);return y};p.transformMat4=function(C,B,A){var w=B[0],E=B[1],D=B[2];
C[0]=A[0]*w+A[4]*E+A[8]*D+A[12];C[1]=A[1]*w+A[5]*E+A[9]*D+A[13];C[2]=A[2]*w+A[6]*E+A[10]*D+A[14];
return C};p.transformQuat=function(F,L,w){var M=L[0],K=L[1],J=L[2],H=w[0],G=w[1],E=w[2],I=w[3],C=I*M+G*J-E*K,B=I*K+E*M-H*J,A=I*J+H*K-G*M,D=-H*M-G*K-E*J;
F[0]=C*I+D*-H+B*-E-A*-G;F[1]=B*I+D*-G+A*-H-C*-E;F[2]=A*I+D*-E+C*-G-B*-H;return F
};p.forEach=(function(){var w=p.create();return function(z,D,E,C,B,x){var A,y;if(!D){D=3
}if(!E){E=0}if(C){y=Math.min((C*D)+E,z.length)}else{y=z.length}for(A=E;A<y;A+=D){w[0]=z[A];
w[1]=z[A+1];w[2]=z[A+2];B(w,w,x);z[A]=w[0];z[A+1]=w[1];z[A+2]=w[2]}return z}})();
p.str=function(w){return"vec3("+w[0]+", "+w[1]+", "+w[2]+")"};if(typeof(n)!=="undefined"){n.vec3=p
}var o={};o.create=function(){var w=new h(4);w[0]=0;w[1]=0;w[2]=0;w[3]=0;return w
};o.clone=function(w){var x=new h(4);x[0]=w[0];x[1]=w[1];x[2]=w[2];x[3]=w[3];return x
};o.fromValues=function(A,E,D,B){var C=new h(4);C[0]=A;C[1]=E;C[2]=D;C[3]=B;return C
};o.copy=function(x,w){x[0]=w[0];x[1]=w[1];x[2]=w[2];x[3]=w[3];return x};o.set=function(C,A,E,D,B){C[0]=A;
C[1]=E;C[2]=D;C[3]=B;return C};o.add=function(y,x,w){y[0]=x[0]+w[0];y[1]=x[1]+w[1];
y[2]=x[2]+w[2];y[3]=x[3]+w[3];return y};o.subtract=function(y,x,w){y[0]=x[0]-w[0];
y[1]=x[1]-w[1];y[2]=x[2]-w[2];y[3]=x[3]-w[3];return y};o.sub=o.subtract;o.multiply=function(y,x,w){y[0]=x[0]*w[0];
y[1]=x[1]*w[1];y[2]=x[2]*w[2];y[3]=x[3]*w[3];return y};o.mul=o.multiply;o.divide=function(y,x,w){y[0]=x[0]/w[0];
y[1]=x[1]/w[1];y[2]=x[2]/w[2];y[3]=x[3]/w[3];return y};o.div=o.divide;o.min=function(y,x,w){y[0]=Math.min(x[0],w[0]);
y[1]=Math.min(x[1],w[1]);y[2]=Math.min(x[2],w[2]);y[3]=Math.min(x[3],w[3]);return y
};o.max=function(y,x,w){y[0]=Math.max(x[0],w[0]);y[1]=Math.max(x[1],w[1]);y[2]=Math.max(x[2],w[2]);
y[3]=Math.max(x[3],w[3]);return y};o.scale=function(y,x,w){y[0]=x[0]*w;y[1]=x[1]*w;
y[2]=x[2]*w;y[3]=x[3]*w;return y};o.distance=function(D,B){var A=B[0]-D[0],F=B[1]-D[1],E=B[2]-D[2],C=B[3]-D[3];
return Math.sqrt(A*A+F*F+E*E+C*C)};o.dist=o.distance;o.squaredDistance=function(D,B){var A=B[0]-D[0],F=B[1]-D[1],E=B[2]-D[2],C=B[3]-D[3];
return A*A+F*F+E*E+C*C};o.sqrDist=o.squaredDistance;o.length=function(C){var A=C[0],E=C[1],D=C[2],B=C[3];
return Math.sqrt(A*A+E*E+D*D+B*B)};o.len=o.length;o.squaredLength=function(C){var A=C[0],E=C[1],D=C[2],B=C[3];
return A*A+E*E+D*D+B*B};o.sqrLen=o.squaredLength;o.negate=function(x,w){x[0]=-w[0];
x[1]=-w[1];x[2]=-w[2];x[3]=-w[3];return x};o.normalize=function(E,D){var B=D[0],G=D[1],F=D[2],C=D[3];
var A=B*B+G*G+F*F+C*C;if(A>0){A=1/Math.sqrt(A);E[0]=D[0]*A;E[1]=D[1]*A;E[2]=D[2]*A;
E[3]=D[3]*A}return E};o.dot=function(x,w){return x[0]*w[0]+x[1]*w[1]+x[2]*w[2]+x[3]*w[3]
};o.lerp=function(y,x,w,z){var C=x[0],B=x[1],A=x[2],D=x[3];y[0]=C+z*(w[0]-C);y[1]=B+z*(w[1]-B);
y[2]=A+z*(w[2]-A);y[3]=D+z*(w[3]-D);return y};o.transformMat4=function(E,D,B){var A=D[0],G=D[1],F=D[2],C=D[3];
E[0]=B[0]*A+B[4]*G+B[8]*F+B[12]*C;E[1]=B[1]*A+B[5]*G+B[9]*F+B[13]*C;E[2]=B[2]*A+B[6]*G+B[10]*F+B[14]*C;
E[3]=B[3]*A+B[7]*G+B[11]*F+B[15]*C;return E};o.transformQuat=function(F,L,w){var M=L[0],K=L[1],J=L[2],H=w[0],G=w[1],E=w[2],I=w[3],C=I*M+G*J-E*K,B=I*K+E*M-H*J,A=I*J+H*K-G*M,D=-H*M-G*K-E*J;
F[0]=C*I+D*-H+B*-E-A*-G;F[1]=B*I+D*-G+A*-H-C*-E;F[2]=A*I+D*-E+C*-G-B*-H;return F
};o.forEach=(function(){var w=o.create();return function(z,D,E,C,B,x){var A,y;if(!D){D=4
}if(!E){E=0}if(C){y=Math.min((C*D)+E,z.length)}else{y=z.length}for(A=E;A<y;A+=D){w[0]=z[A];
w[1]=z[A+1];w[2]=z[A+2];w[3]=z[A+3];B(w,w,x);z[A]=w[0];z[A+1]=w[1];z[A+2]=w[2];
z[A+3]=w[3]}return z}})();o.str=function(w){return"vec4("+w[0]+", "+w[1]+", "+w[2]+", "+w[3]+")"
};if(typeof(n)!=="undefined"){n.vec4=o}var j={};var t=new Float32Array([1,0,0,1]);
j.create=function(){var w=new h(4);w[0]=1;w[1]=0;w[2]=0;w[3]=1;return w};j.clone=function(w){var x=new h(4);
x[0]=w[0];x[1]=w[1];x[2]=w[2];x[3]=w[3];return x};j.copy=function(x,w){x[0]=w[0];
x[1]=w[1];x[2]=w[2];x[3]=w[3];return x};j.identity=function(w){w[0]=1;w[1]=0;w[2]=0;
w[3]=1;return w};j.transpose=function(y,x){if(y===x){var w=x[1];y[1]=x[2];y[2]=w
}else{y[0]=x[0];y[1]=x[2];y[2]=x[1];y[3]=x[3]}return y};j.invert=function(A,y){var z=y[0],x=y[1],w=y[2],C=y[3],B=z*C-w*x;
if(!B){return null}B=1/B;A[0]=C*B;A[1]=-x*B;A[2]=-w*B;A[3]=z*B;return A};j.adjoint=function(y,w){var x=w[0];
y[0]=w[3];y[1]=-w[1];y[2]=-w[2];y[3]=x;return y};j.determinant=function(w){return w[0]*w[3]-w[2]*w[1]
};j.multiply=function(A,F,D){var z=F[0],y=F[1],x=F[2],w=F[3];var G=D[0],E=D[1],C=D[2],B=D[3];
A[0]=z*G+y*C;A[1]=z*E+y*B;A[2]=x*G+w*C;A[3]=x*E+w*B;return A};j.mul=j.multiply;
j.rotate=function(A,D,C){var z=D[0],y=D[1],x=D[2],w=D[3],E=Math.sin(C),B=Math.cos(C);
A[0]=z*B+y*E;A[1]=z*-E+y*B;A[2]=x*B+w*E;A[3]=x*-E+w*B;return A};j.scale=function(A,B,D){var z=B[0],y=B[1],x=B[2],w=B[3],E=D[0],C=D[1];
A[0]=z*E;A[1]=y*C;A[2]=x*E;A[3]=w*C;return A};j.str=function(w){return"mat2("+w[0]+", "+w[1]+", "+w[2]+", "+w[3]+")"
};if(typeof(n)!=="undefined"){n.mat2=j}var s={};var l=new Float32Array([1,0,0,1,0,0]);
s.create=function(){var w=new h(6);w[0]=1;w[1]=0;w[2]=0;w[3]=1;w[4]=0;w[5]=0;return w
};s.clone=function(w){var x=new h(6);x[0]=w[0];x[1]=w[1];x[2]=w[2];x[3]=w[3];x[4]=w[4];
x[5]=w[5];return x};s.copy=function(x,w){x[0]=w[0];x[1]=w[1];x[2]=w[2];x[3]=w[3];
x[4]=w[4];x[5]=w[5];return x};s.identity=function(w){w[0]=1;w[1]=0;w[2]=0;w[3]=1;
w[4]=0;w[5]=0;return w};s.invert=function(x,B){var w=B[0],E=B[1],D=B[2],C=B[3],z=B[4],y=B[5];
var A=w*C-E*D;if(!A){return null}A=1/A;x[0]=C*A;x[1]=-E*A;x[2]=-D*A;x[3]=w*A;x[4]=(D*y-C*z)*A;
x[5]=(E*z-w*y)*A;return x};s.determinant=function(w){return w[0]*w[3]-w[1]*w[2]
};s.multiply=function(x,H,G){var w=H[0],K=H[1],J=H[2],I=H[3],z=H[4],y=H[5],E=G[0],C=G[1],B=G[2],A=G[3],F=G[4],D=G[5];
x[0]=w*E+K*B;x[1]=w*C+K*A;x[2]=J*E+I*B;x[3]=J*C+I*A;x[4]=E*z+B*y+F;x[5]=C*z+A*y+D;
return x};s.mul=s.multiply;s.rotate=function(x,C,B){var w=C[0],G=C[1],F=C[2],D=C[3],A=C[4],y=C[5],E=Math.sin(B),z=Math.cos(B);
x[0]=w*z+G*E;x[1]=-w*E+G*z;x[2]=F*z+D*E;x[3]=-F*E+z*D;x[4]=z*A+E*y;x[5]=z*y-E*A;
return x};s.scale=function(y,w,x){var A=x[0],z=x[1];y[0]=w[0]*A;y[1]=w[1]*z;y[2]=w[2]*A;
y[3]=w[3]*z;y[4]=w[4]*A;y[5]=w[5]*z;return y};s.translate=function(y,w,x){y[0]=w[0];
y[1]=w[1];y[2]=w[2];y[3]=w[3];y[4]=w[4]+x[0];y[5]=w[5]+x[1];return y};s.str=function(w){return"mat2d("+w[0]+", "+w[1]+", "+w[2]+", "+w[3]+", "+w[4]+", "+w[5]+")"
};if(typeof(n)!=="undefined"){n.mat2d=s}var g={};var m=new Float32Array([1,0,0,0,1,0,0,0,1]);
g.create=function(){var w=new h(9);w[0]=1;w[1]=0;w[2]=0;w[3]=0;w[4]=1;w[5]=0;w[6]=0;
w[7]=0;w[8]=1;return w};g.clone=function(w){var x=new h(9);x[0]=w[0];x[1]=w[1];
x[2]=w[2];x[3]=w[3];x[4]=w[4];x[5]=w[5];x[6]=w[6];x[7]=w[7];x[8]=w[8];return x};
g.copy=function(x,w){x[0]=w[0];x[1]=w[1];x[2]=w[2];x[3]=w[3];x[4]=w[4];x[5]=w[5];
x[6]=w[6];x[7]=w[7];x[8]=w[8];return x};g.identity=function(w){w[0]=1;w[1]=0;w[2]=0;
w[3]=0;w[4]=1;w[5]=0;w[6]=0;w[7]=0;w[8]=1;return w};g.transpose=function(y,x){if(y===x){var A=x[1],z=x[2],w=x[5];
y[1]=x[3];y[2]=x[6];y[3]=A;y[5]=x[7];y[6]=z;y[7]=w}else{y[0]=x[0];y[1]=x[3];y[2]=x[6];
y[3]=x[1];y[4]=x[4];y[5]=x[7];y[6]=x[2];y[7]=x[5];y[8]=x[8]}return y};g.invert=function(A,H){var z=H[0],y=H[1],x=H[2],K=H[3],J=H[4],I=H[5],F=H[6],E=H[7],C=H[8],B=C*J-I*E,w=-C*K+I*F,G=E*K-J*F,D=z*B+y*w+x*G;
if(!D){return null}D=1/D;A[0]=B*D;A[1]=(-C*y+x*E)*D;A[2]=(I*y-x*J)*D;A[3]=w*D;A[4]=(C*z-x*F)*D;
A[5]=(-I*z+x*K)*D;A[6]=G*D;A[7]=(-E*z+y*F)*D;A[8]=(J*z-y*K)*D;return A};g.adjoint=function(z,D){var y=D[0],x=D[1],w=D[2],G=D[3],F=D[4],E=D[5],C=D[6],B=D[7],A=D[8];
z[0]=(F*A-E*B);z[1]=(w*B-x*A);z[2]=(x*E-w*F);z[3]=(E*C-G*A);z[4]=(y*A-w*C);z[5]=(w*G-y*E);
z[6]=(G*B-F*C);z[7]=(x*C-y*B);z[8]=(y*F-x*G);return z};g.determinant=function(C){var y=C[0],x=C[1],w=C[2],F=C[3],E=C[4],D=C[5],B=C[6],A=C[7],z=C[8];
return y*(z*E-D*A)+x*(-z*F+D*B)+w*(A*F-E*B)};g.multiply=function(I,N,M){var Q=N[0],P=N[1],O=N[2],B=N[3],A=N[4],z=N[5],H=N[6],G=N[7],F=N[8],E=M[0],D=M[1],C=M[2],L=M[3],K=M[4],J=M[5],y=M[6],x=M[7],w=M[8];
I[0]=E*Q+D*B+C*H;I[1]=E*P+D*A+C*G;I[2]=E*O+D*z+C*F;I[3]=L*Q+K*B+J*H;I[4]=L*P+K*A+J*G;
I[5]=L*O+K*z+J*F;I[6]=y*Q+x*B+w*H;I[7]=y*P+x*A+w*G;I[8]=y*O+x*z+w*F;return I};g.mul=g.multiply;
g.translate=function(B,H,J){var A=H[0],z=H[1],w=H[2],L=H[3],K=H[4],I=H[5],E=H[6],D=H[7],C=H[8],G=J[0],F=J[1];
B[0]=A;B[1]=z;B[2]=w;B[3]=L;B[4]=K;B[5]=I;B[6]=G*A+F*L+E;B[7]=G*z+F*K+D;B[8]=G*w+F*I+C;
return B};g.rotate=function(z,F,E){var y=F[0],x=F[1],w=F[2],I=F[3],H=F[4],G=F[5],C=F[6],B=F[7],A=F[8],J=Math.sin(E),D=Math.cos(E);
z[0]=D*y+J*I;z[1]=D*x+J*H;z[2]=D*w+J*G;z[3]=D*I-J*y;z[4]=D*H-J*x;z[5]=D*G-J*w;z[6]=C;
z[7]=B;z[8]=A;return z};g.scale=function(B,z,A){var w=A[0],C=A[2];B[0]=w*z[0];B[1]=w*z[1];
B[2]=w*z[2];B[3]=C*z[3];B[4]=C*z[4];B[5]=C*z[5];B[6]=z[6];B[7]=z[7];B[8]=z[8];return B
};g.fromMat2d=function(x,w){x[0]=w[0];x[1]=w[1];x[2]=0;x[3]=w[2];x[4]=w[3];x[5]=0;
x[6]=w[4];x[7]=w[5];x[8]=1;return x};g.fromQuat=function(M,K){var G=K[0],F=K[1],E=K[2],H=K[3],N=G+G,A=F+F,I=E+E,D=G*N,C=G*A,B=G*I,L=F*A,J=F*I,Q=E*I,R=H*N,P=H*A,O=H*I;
M[0]=1-(L+Q);M[1]=C+O;M[2]=B-P;M[3]=C-O;M[4]=1-(D+Q);M[5]=J+R;M[6]=B+P;M[7]=J-R;
M[8]=1-(D+L);return M};g.str=function(w){return"mat3("+w[0]+", "+w[1]+", "+w[2]+", "+w[3]+", "+w[4]+", "+w[5]+", "+w[6]+", "+w[7]+", "+w[8]+")"
};if(typeof(n)!=="undefined"){n.mat3=g}var f={};var r=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);
f.create=function(){var w=new h(16);w[0]=1;w[1]=0;w[2]=0;w[3]=0;w[4]=0;w[5]=1;w[6]=0;
w[7]=0;w[8]=0;w[9]=0;w[10]=1;w[11]=0;w[12]=0;w[13]=0;w[14]=0;w[15]=1;return w};
f.clone=function(w){var x=new h(16);x[0]=w[0];x[1]=w[1];x[2]=w[2];x[3]=w[3];x[4]=w[4];
x[5]=w[5];x[6]=w[6];x[7]=w[7];x[8]=w[8];x[9]=w[9];x[10]=w[10];x[11]=w[11];x[12]=w[12];
x[13]=w[13];x[14]=w[14];x[15]=w[15];return x};f.copy=function(x,w){x[0]=w[0];x[1]=w[1];
x[2]=w[2];x[3]=w[3];x[4]=w[4];x[5]=w[5];x[6]=w[6];x[7]=w[7];x[8]=w[8];x[9]=w[9];
x[10]=w[10];x[11]=w[11];x[12]=w[12];x[13]=w[13];x[14]=w[14];x[15]=w[15];return x
};f.identity=function(w){w[0]=1;w[1]=0;w[2]=0;w[3]=0;w[4]=0;w[5]=1;w[6]=0;w[7]=0;
w[8]=0;w[9]=0;w[10]=1;w[11]=0;w[12]=0;w[13]=0;w[14]=0;w[15]=1;return w};f.transpose=function(z,y){if(z===y){var D=y[1],B=y[2],A=y[3],w=y[6],C=y[7],x=y[11];
z[1]=y[4];z[2]=y[8];z[3]=y[12];z[4]=D;z[6]=y[9];z[7]=y[13];z[8]=B;z[9]=w;z[11]=y[14];
z[12]=A;z[13]=C;z[14]=x}else{z[0]=y[0];z[1]=y[4];z[2]=y[8];z[3]=y[12];z[4]=y[1];
z[5]=y[5];z[6]=y[9];z[7]=y[13];z[8]=y[2];z[9]=y[6];z[10]=y[10];z[11]=y[14];z[12]=y[3];
z[13]=y[7];z[14]=y[11];z[15]=y[15]}return z};f.invert=function(P,U){var Y=U[0],W=U[1],V=U[2],S=U[3],A=U[4],z=U[5],y=U[6],x=U[7],O=U[8],N=U[9],M=U[10],L=U[11],aa=U[12],Z=U[13],X=U[14],T=U[15],K=Y*z-W*A,J=Y*y-V*A,I=Y*x-S*A,H=W*y-V*z,G=W*x-S*z,F=V*x-S*y,E=O*Z-N*aa,D=O*X-M*aa,C=O*T-L*aa,B=N*X-M*Z,R=N*T-L*Z,Q=M*T-L*X,w=K*Q-J*R+I*B+H*C-G*D+F*E;
if(!w){return null}w=1/w;P[0]=(z*Q-y*R+x*B)*w;P[1]=(V*R-W*Q-S*B)*w;P[2]=(Z*F-X*G+T*H)*w;
P[3]=(M*G-N*F-L*H)*w;P[4]=(y*C-A*Q-x*D)*w;P[5]=(Y*Q-V*C+S*D)*w;P[6]=(X*I-aa*F-T*J)*w;
P[7]=(O*F-M*I+L*J)*w;P[8]=(A*R-z*C+x*E)*w;P[9]=(W*C-Y*R-S*E)*w;P[10]=(aa*G-Z*I+T*K)*w;
P[11]=(N*I-O*G-L*K)*w;P[12]=(z*D-A*B-y*E)*w;P[13]=(Y*B-W*D+V*E)*w;P[14]=(Z*J-aa*H-X*K)*w;
P[15]=(O*H-N*J+M*K)*w;return P};f.adjoint=function(E,H){var L=H[0],J=H[1],I=H[2],F=H[3],z=H[4],y=H[5],x=H[6],w=H[7],D=H[8],C=H[9],B=H[10],A=H[11],N=H[12],M=H[13],K=H[14],G=H[15];
E[0]=(y*(B*G-A*K)-C*(x*G-w*K)+M*(x*A-w*B));E[1]=-(J*(B*G-A*K)-C*(I*G-F*K)+M*(I*A-F*B));
E[2]=(J*(x*G-w*K)-y*(I*G-F*K)+M*(I*w-F*x));E[3]=-(J*(x*A-w*B)-y*(I*A-F*B)+C*(I*w-F*x));
E[4]=-(z*(B*G-A*K)-D*(x*G-w*K)+N*(x*A-w*B));E[5]=(L*(B*G-A*K)-D*(I*G-F*K)+N*(I*A-F*B));
E[6]=-(L*(x*G-w*K)-z*(I*G-F*K)+N*(I*w-F*x));E[7]=(L*(x*A-w*B)-z*(I*A-F*B)+D*(I*w-F*x));
E[8]=(z*(C*G-A*M)-D*(y*G-w*M)+N*(y*A-w*C));E[9]=-(L*(C*G-A*M)-D*(J*G-F*M)+N*(J*A-F*C));
E[10]=(L*(y*G-w*M)-z*(J*G-F*M)+N*(J*w-F*y));E[11]=-(L*(y*A-w*C)-z*(J*A-F*C)+D*(J*w-F*y));
E[12]=-(z*(C*K-B*M)-D*(y*K-x*M)+N*(y*B-x*C));E[13]=(L*(C*K-B*M)-D*(J*K-I*M)+N*(J*B-I*C));
E[14]=-(L*(y*K-x*M)-z*(J*K-I*M)+N*(J*x-I*y));E[15]=(L*(y*B-x*C)-z*(J*B-I*C)+D*(J*x-I*y));
return E};f.determinant=function(R){var W=R[0],U=R[1],S=R[2],Q=R[3],z=R[4],y=R[5],x=R[6],w=R[7],N=R[8],M=R[9],L=R[10],K=R[11],Y=R[12],X=R[13],V=R[14],T=R[15],J=W*y-U*z,I=W*x-S*z,H=W*w-Q*z,G=U*x-S*y,F=U*w-Q*y,E=S*w-Q*x,D=N*X-M*Y,C=N*V-L*Y,B=N*T-K*Y,A=M*V-L*X,P=M*T-K*X,O=L*T-K*V;
return J*O-I*P+H*A+G*B-F*C+E*D};f.multiply=function(I,M,J){var Q=M[0],P=M[1],N=M[2],K=M[3],C=M[4],A=M[5],y=M[6],w=M[7],H=M[8],G=M[9],F=M[10],E=M[11],S=M[12],R=M[13],O=M[14],L=M[15];
var D=J[0],B=J[1],z=J[2],x=J[3];I[0]=D*Q+B*C+z*H+x*S;I[1]=D*P+B*A+z*G+x*R;I[2]=D*N+B*y+z*F+x*O;
I[3]=D*K+B*w+z*E+x*L;D=J[4];B=J[5];z=J[6];x=J[7];I[4]=D*Q+B*C+z*H+x*S;I[5]=D*P+B*A+z*G+x*R;
I[6]=D*N+B*y+z*F+x*O;I[7]=D*K+B*w+z*E+x*L;D=J[8];B=J[9];z=J[10];x=J[11];I[8]=D*Q+B*C+z*H+x*S;
I[9]=D*P+B*A+z*G+x*R;I[10]=D*N+B*y+z*F+x*O;I[11]=D*K+B*w+z*E+x*L;D=J[12];B=J[13];
z=J[14];x=J[15];I[12]=D*Q+B*C+z*H+x*S;I[13]=D*P+B*A+z*G+x*R;I[14]=D*N+B*y+z*F+x*O;
I[15]=D*K+B*w+z*E+x*L;return I};f.mul=f.multiply;f.translate=function(L,N,G){var F=G[0],E=G[1],D=G[2],Q,P,O,M,C,B,A,w,K,J,I,H;
if(N===L){L[12]=N[0]*F+N[4]*E+N[8]*D+N[12];L[13]=N[1]*F+N[5]*E+N[9]*D+N[13];L[14]=N[2]*F+N[6]*E+N[10]*D+N[14];
L[15]=N[3]*F+N[7]*E+N[11]*D+N[15]}else{Q=N[0];P=N[1];O=N[2];M=N[3];C=N[4];B=N[5];
A=N[6];w=N[7];K=N[8];J=N[9];I=N[10];H=N[11];L[0]=Q;L[1]=P;L[2]=O;L[3]=M;L[4]=C;
L[5]=B;L[6]=A;L[7]=w;L[8]=K;L[9]=J;L[10]=I;L[11]=H;L[12]=Q*F+C*E+K*D+N[12];L[13]=P*F+B*E+J*D+N[13];
L[14]=O*F+A*E+I*D+N[14];L[15]=M*F+w*E+H*D+N[15]}return L};f.scale=function(C,A,B){var w=B[0],E=B[1],D=B[2];
C[0]=A[0]*w;C[1]=A[1]*w;C[2]=A[2]*w;C[3]=A[3]*w;C[4]=A[4]*E;C[5]=A[5]*E;C[6]=A[6]*E;
C[7]=A[7]*E;C[8]=A[8]*D;C[9]=A[9]*D;C[10]=A[10]*D;C[11]=A[11]*D;C[12]=A[12];C[13]=A[13];
C[14]=A[14];C[15]=A[15];return C};f.rotate=function(T,aa,ac,w){var J=w[0],I=w[1],H=w[2],U=Math.sqrt(J*J+I*I+H*H),O,Y,N,ae,ad,ab,Z,G,F,E,D,S,R,Q,P,M,L,K,X,W,V,C,B,A;
if(Math.abs(U)<u){return null}U=1/U;J*=U;I*=U;H*=U;O=Math.sin(ac);Y=Math.cos(ac);
N=1-Y;ae=aa[0];ad=aa[1];ab=aa[2];Z=aa[3];G=aa[4];F=aa[5];E=aa[6];D=aa[7];S=aa[8];
R=aa[9];Q=aa[10];P=aa[11];M=J*J*N+Y;L=I*J*N+H*O;K=H*J*N-I*O;X=J*I*N-H*O;W=I*I*N+Y;
V=H*I*N+J*O;C=J*H*N+I*O;B=I*H*N-J*O;A=H*H*N+Y;T[0]=ae*M+G*L+S*K;T[1]=ad*M+F*L+R*K;
T[2]=ab*M+E*L+Q*K;T[3]=Z*M+D*L+P*K;T[4]=ae*X+G*W+S*V;T[5]=ad*X+F*W+R*V;T[6]=ab*X+E*W+Q*V;
T[7]=Z*X+D*W+P*V;T[8]=ae*C+G*B+S*A;T[9]=ad*C+F*B+R*A;T[10]=ab*C+E*B+Q*A;T[11]=Z*C+D*B+P*A;
if(aa!==T){T[12]=aa[12];T[13]=aa[13];T[14]=aa[14];T[15]=aa[15]}return T};f.rotateX=function(w,D,C){var I=Math.sin(C),B=Math.cos(C),H=D[4],G=D[5],F=D[6],E=D[7],A=D[8],z=D[9],y=D[10],x=D[11];
if(D!==w){w[0]=D[0];w[1]=D[1];w[2]=D[2];w[3]=D[3];w[12]=D[12];w[13]=D[13];w[14]=D[14];
w[15]=D[15]}w[4]=H*B+A*I;w[5]=G*B+z*I;w[6]=F*B+y*I;w[7]=E*B+x*I;w[8]=A*B-H*I;w[9]=z*B-G*I;
w[10]=y*B-F*I;w[11]=x*B-E*I;return w};f.rotateY=function(A,H,G){var I=Math.sin(G),F=Math.cos(G),z=H[0],y=H[1],x=H[2],w=H[3],E=H[8],D=H[9],C=H[10],B=H[11];
if(H!==A){A[4]=H[4];A[5]=H[5];A[6]=H[6];A[7]=H[7];A[12]=H[12];A[13]=H[13];A[14]=H[14];
A[15]=H[15]}A[0]=z*F-E*I;A[1]=y*F-D*I;A[2]=x*F-C*I;A[3]=w*F-B*I;A[8]=z*I+E*F;A[9]=y*I+D*F;
A[10]=x*I+C*F;A[11]=w*I+B*F;return A};f.rotateZ=function(A,D,C){var I=Math.sin(C),B=Math.cos(C),z=D[0],y=D[1],x=D[2],w=D[3],H=D[4],G=D[5],F=D[6],E=D[7];
if(D!==A){A[8]=D[8];A[9]=D[9];A[10]=D[10];A[11]=D[11];A[12]=D[12];A[13]=D[13];A[14]=D[14];
A[15]=D[15]}A[0]=z*B+H*I;A[1]=y*B+G*I;A[2]=x*B+F*I;A[3]=w*B+E*I;A[4]=H*B-z*I;A[5]=G*B-y*I;
A[6]=F*B-x*I;A[7]=E*B-w*I;return A};f.fromRotationTranslation=function(N,L,J){var G=L[0],F=L[1],E=L[2],H=L[3],O=G+G,A=F+F,I=E+E,D=G*O,C=G*A,B=G*I,M=F*A,K=F*I,R=E*I,S=H*O,Q=H*A,P=H*I;
N[0]=1-(M+R);N[1]=C+P;N[2]=B-Q;N[3]=0;N[4]=C-P;N[5]=1-(D+R);N[6]=K+S;N[7]=0;N[8]=B+Q;
N[9]=K-S;N[10]=1-(D+M);N[11]=0;N[12]=J[0];N[13]=J[1];N[14]=J[2];N[15]=1;return N
};f.fromQuat=function(M,K){var G=K[0],F=K[1],E=K[2],H=K[3],N=G+G,A=F+F,I=E+E,D=G*N,C=G*A,B=G*I,L=F*A,J=F*I,Q=E*I,R=H*N,P=H*A,O=H*I;
M[0]=1-(L+Q);M[1]=C+O;M[2]=B-P;M[3]=0;M[4]=C-O;M[5]=1-(D+Q);M[6]=J+R;M[7]=0;M[8]=B+P;
M[9]=J-R;M[10]=1-(D+L);M[11]=0;M[12]=0;M[13]=0;M[14]=0;M[15]=1;return M};f.frustum=function(A,x,F,w,E,C,B){var D=1/(F-x),z=1/(E-w),y=1/(C-B);
A[0]=(C*2)*D;A[1]=0;A[2]=0;A[3]=0;A[4]=0;A[5]=(C*2)*z;A[6]=0;A[7]=0;A[8]=(F+x)*D;
A[9]=(E+w)*z;A[10]=(B+C)*y;A[11]=-1;A[12]=0;A[13]=0;A[14]=(B*C*2)*y;A[15]=0;return A
};f.perspective=function(z,y,x,A,w){var C=1/Math.tan(y/2),B=1/(A-w);z[0]=C/x;z[1]=0;
z[2]=0;z[3]=0;z[4]=0;z[5]=C;z[6]=0;z[7]=0;z[8]=0;z[9]=0;z[10]=(w+A)*B;z[11]=-1;
z[12]=0;z[13]=0;z[14]=(2*w*A)*B;z[15]=0;return z};f.ortho=function(z,x,F,w,D,C,B){var A=1/(x-F),E=1/(w-D),y=1/(C-B);
z[0]=-2*A;z[1]=0;z[2]=0;z[3]=0;z[4]=0;z[5]=-2*E;z[6]=0;z[7]=0;z[8]=0;z[9]=0;z[10]=2*y;
z[11]=0;z[12]=(x+F)*A;z[13]=(D+w)*E;z[14]=(B+C)*y;z[15]=1;return z};f.lookAt=function(K,R,S,C){var Q,P,N,y,x,w,F,E,D,L,O=R[0],M=R[1],J=R[2],B=C[0],A=C[1],z=C[2],I=S[0],H=S[1],G=S[2];
if(Math.abs(O-I)<u&&Math.abs(M-H)<u&&Math.abs(J-G)<u){return f.identity(K)}F=O-I;
E=M-H;D=J-G;L=1/Math.sqrt(F*F+E*E+D*D);F*=L;E*=L;D*=L;Q=A*D-z*E;P=z*F-B*D;N=B*E-A*F;
L=Math.sqrt(Q*Q+P*P+N*N);if(!L){Q=0;P=0;N=0}else{L=1/L;Q*=L;P*=L;N*=L}y=E*N-D*P;
x=D*Q-F*N;w=F*P-E*Q;L=Math.sqrt(y*y+x*x+w*w);if(!L){y=0;x=0;w=0}else{L=1/L;y*=L;
x*=L;w*=L}K[0]=Q;K[1]=y;K[2]=F;K[3]=0;K[4]=P;K[5]=x;K[6]=E;K[7]=0;K[8]=N;K[9]=w;
K[10]=D;K[11]=0;K[12]=-(Q*O+P*M+N*J);K[13]=-(y*O+x*M+w*J);K[14]=-(F*O+E*M+D*J);
K[15]=1;return K};f.str=function(w){return"mat4("+w[0]+", "+w[1]+", "+w[2]+", "+w[3]+", "+w[4]+", "+w[5]+", "+w[6]+", "+w[7]+", "+w[8]+", "+w[9]+", "+w[10]+", "+w[11]+", "+w[12]+", "+w[13]+", "+w[14]+", "+w[15]+")"
};if(typeof(n)!=="undefined"){n.mat4=f}var k={};var v=new Float32Array([0,0,0,1]);
k.create=function(){var w=new h(4);w[0]=0;w[1]=0;w[2]=0;w[3]=1;return w};k.clone=o.clone;
k.fromValues=o.fromValues;k.copy=o.copy;k.set=o.set;k.identity=function(w){w[0]=0;
w[1]=0;w[2]=0;w[3]=1;return w};k.setAxisAngle=function(x,z,w){w=w*0.5;var y=Math.sin(w);
x[0]=y*z[0];x[1]=y*z[1];x[2]=y*z[2];x[3]=Math.cos(w);return x};k.add=o.add;k.multiply=function(y,E,D){var w=E[0],G=E[1],F=E[2],x=E[3],B=D[0],A=D[1],z=D[2],C=D[3];
y[0]=w*C+x*B+G*z-F*A;y[1]=G*C+x*A+F*B-w*z;y[2]=F*C+x*z+w*A-G*B;y[3]=x*C-w*B-G*A-F*z;
return y};k.mul=k.multiply;k.scale=o.scale;k.rotateX=function(y,C,A){A*=0.5;var w=C[0],E=C[1],D=C[2],x=C[3],z=Math.sin(A),B=Math.cos(A);
y[0]=w*B+x*z;y[1]=E*B+D*z;y[2]=D*B-E*z;y[3]=x*B-w*z;return y};k.rotateY=function(y,C,A){A*=0.5;
var w=C[0],E=C[1],D=C[2],x=C[3],z=Math.sin(A),B=Math.cos(A);y[0]=w*B-D*z;y[1]=E*B+x*z;
y[2]=D*B+w*z;y[3]=x*B-E*z;return y};k.rotateZ=function(y,C,A){A*=0.5;var w=C[0],E=C[1],D=C[2],x=C[3],z=Math.sin(A),B=Math.cos(A);
y[0]=w*B+E*z;y[1]=E*B-w*z;y[2]=D*B+x*z;y[3]=x*B-D*z;return y};k.calculateW=function(B,A){var w=A[0],D=A[1],C=A[2];
B[0]=w;B[1]=D;B[2]=C;B[3]=-Math.sqrt(Math.abs(1-w*w-D*D-C*C));return B};k.dot=o.dot;
k.lerp=o.lerp;k.slerp=function(A,J,I,L){var w=J[0],M=J[1],K=J[2],x=J[3],G=I[0],F=I[1],D=I[2],H=I[3];
var z=w*G+M*F+K*D+x*H,B,y,E,C;if(Math.abs(z)>=1){if(A!==J){A[0]=w;A[1]=M;A[2]=K;
A[3]=x}return A}B=Math.acos(z);y=Math.sqrt(1-z*z);if(Math.abs(y)<0.001){A[0]=(w*0.5+G*0.5);
A[1]=(M*0.5+F*0.5);A[2]=(K*0.5+D*0.5);A[3]=(x*0.5+H*0.5);return A}E=Math.sin((1-L)*B)/y;
C=Math.sin(L*B)/y;A[0]=(w*E+G*C);A[1]=(M*E+F*C);A[2]=(K*E+D*C);A[3]=(x*E+H*C);return A
};k.invert=function(C,y){var A=y[0],x=y[1],w=y[2],D=y[3],z=A*A+x*x+w*w+D*D,B=z?1/z:0;
C[0]=-A*B;C[1]=-x*B;C[2]=-w*B;C[3]=D*B;return C};k.conjugate=function(x,w){x[0]=-w[0];
x[1]=-w[1];x[2]=-w[2];x[3]=w[3];return x};k.length=o.length;k.len=k.length;k.squaredLength=o.squaredLength;
k.sqrLen=k.squaredLength;k.normalize=o.normalize;k.fromMat3=(function(){var w=[1,2,0];
return function(B,x){var y=x[0]+x[4]+x[8];var D;if(y>0){D=Math.sqrt(y+1);B[3]=0.5*D;
D=0.5/D;B[0]=(x[7]-x[5])*D;B[1]=(x[2]-x[6])*D;B[2]=(x[3]-x[1])*D}else{var C=0;if(x[4]>x[0]){C=1
}if(x[8]>x[C*3+C]){C=2}var A=w[C];var z=w[A];D=Math.sqrt(x[C*3+C]-x[A*3+A]-x[z*3+z]+1);
B[C]=0.5*D;D=0.5/D;B[3]=(x[z*3+A]-x[A*3+z])*D;B[A]=(x[A*3+C]+x[C*3+A])*D;B[z]=(x[z*3+C]+x[C*3+z])*D
}return B}})();k.str=function(w){return"quat("+w[0]+", "+w[1]+", "+w[2]+", "+w[3]+")"
};if(typeof(n)!=="undefined"){n.quat=k}})(d.exports)})()},{}],213:[function(b,c,a){c.exports={Transform:b("./ac-transform/Transform")}
},{"./ac-transform/Transform":214}],214:[function(m,d,I){var l=m("gl-matrix").mat4;
var b=m("gl-matrix").vec3;var a=m("gl-matrix").vec4;var f=m("gl-matrix").quat;var g=Math.PI/180;
var c=180/Math.PI;var G=0,z=0,E=1,y=1,C=2,A=3;var k=4,x=4,j=5,w=5,i=6,h=7;var u=8,r=9,p=10,o=11;
var H=12,v=12,F=13,t=13,D=14,B=15;function q(){this.m=l.create()}var s=q.prototype;
s.rotateX=function(K){var J=g*K;l.rotateX(this.m,this.m,J);return this};s.rotateY=function(K){var J=g*K;
l.rotateY(this.m,this.m,J);return this};s.rotateZ=function(K){var J=g*K;l.rotateZ(this.m,this.m,J);
return this};s.rotate=s.rotateZ;s.rotate3d=function(K,N,M,L){if(N===null||N===undefined){N=K
}if(M===null||N===undefined){M=K}var J=g*L;l.rotate(this.m,this.m,J,[K,N,M]);return this
};s.rotateAxisAngle=s.rotate3d;s.scale=function(K,J){J=J||K;l.scale(this.m,this.m,[K,J,1]);
return this};s.scaleX=function(J){l.scale(this.m,this.m,[J,1,1]);return this};s.scaleY=function(J){l.scale(this.m,this.m,[1,J,1]);
return this};s.scaleZ=function(J){l.scale(this.m,this.m,[1,1,J]);return this};s.scale3d=function(L,K,J){l.scale(this.m,this.m,[L,K,J]);
return this};s.skew=function(L,K){if(K===null||K===undefined){return this.skewX(L)
}L=g*L;K=g*K;var J=l.create();J[x]=Math.tan(L);J[y]=Math.tan(K);l.multiply(this.m,this.m,J);
return this};s.skewX=function(K){K=g*K;var J=l.create();J[x]=Math.tan(K);l.multiply(this.m,this.m,J);
return this};s.skewY=function(K){K=g*K;var J=l.create();J[y]=Math.tan(K);l.multiply(this.m,this.m,J);
return this};s.translate=function(K,J){J=J||0;l.translate(this.m,this.m,[K,J,0]);
return this};s.translate3d=function(K,J,L){l.translate(this.m,this.m,[K,J,L]);return this
};s.translateX=function(J){l.translate(this.m,this.m,[J,0,0]);return this};s.translateY=function(J){l.translate(this.m,this.m,[0,J,0]);
return this};s.translateZ=function(J){l.translate(this.m,this.m,[0,0,J]);return this
};s.perspective=function(K){var J=l.create();if(K!==0){J[o]=-1/K}l.multiply(this.m,this.m,J)
};s.inverse=function(){var J=this.clone();J.m=l.invert(J.m,this.m);return J};s.reset=function(){l.identity(this.m);
return this};s.clone=function(){var J=new q();J.m=l.clone(this.m);return J};s.toArray=function(){var J=this.m;
if(this.isAffine()){return[J[z],J[y],J[x],J[w],J[v],J[t]]}return[J[G],J[E],J[C],J[A],J[k],J[j],J[i],J[h],J[u],J[r],J[p],J[o],J[H],J[F],J[D],J[B]]
};s.fromArray=function(J){this.m=Array.prototype.slice.call(J);return this};s.setMatrixValue=function(K){K=String(K).trim();
var J=l.create();if(K==="none"){this.m=J;return this}var M=K.slice(0,K.indexOf("(")),N,L;
if(M==="matrix3d"){N=K.slice(9,-1).split(",");for(L=0;L<N.length;L++){J[L]=parseFloat(N[L])
}}else{if(M==="matrix"){N=K.slice(7,-1).split(",");for(L=N.length;L--;){N[L]=parseFloat(N[L])
}J[G]=N[0];J[E]=N[1];J[H]=N[4];J[k]=N[2];J[j]=N[3];J[F]=N[5]}else{throw new TypeError("Invalid Matrix Value")
}}this.m=J;return this};s.decompose=function(U){U=U||false;var Y=l.clone(this.m);
var P=b.create();var ae=b.create();var M=b.create();var R=a.create();var K=a.create();
var L=b.create();for(var aa=0;aa<16;aa++){Y[aa]/=Y[B]}var W=l.clone(Y);W[A]=0;W[h]=0;
W[o]=0;W[B]=1;var ab=Y[3],N=Y[7],Q=Y[11],ag=Y[12],af=Y[13],ad=Y[14],ac=Y[15];var T=a.create();
if(!n(Y[A])||!n(Y[h])||!n(Y[o])){T[0]=Y[A];T[1]=Y[h];T[2]=Y[o];T[3]=Y[B];var Z=l.invert(l.create(),W);
var S=l.transpose(l.create(),Z);R=a.transformMat4(R,T,S)}else{R=a.fromValues(0,0,0,1)
}P[0]=ag;P[1]=af;P[2]=ad;var O=[b.create(),b.create(),b.create()];O[0][0]=Y[0];
O[0][1]=Y[1];O[0][2]=Y[2];O[1][0]=Y[4];O[1][1]=Y[5];O[1][2]=Y[6];O[2][0]=Y[8];O[2][1]=Y[9];
O[2][2]=Y[10];ae[0]=b.length(O[0]);b.normalize(O[0],O[0]);M[0]=b.dot(O[0],O[1]);
O[1]=this._combine(O[1],O[0],1,-M[0]);ae[1]=b.length(O[1]);b.normalize(O[1],O[1]);
M[0]/=ae[1];M[1]=b.dot(O[0],O[2]);O[2]=this._combine(O[2],O[0],1,-M[1]);M[2]=b.dot(O[1],O[2]);
O[2]=this._combine(O[2],O[1],1,-M[2]);ae[2]=b.length(O[2]);b.normalize(O[2],O[2]);
M[1]/=ae[2];M[2]/=ae[2];var X=b.cross(b.create(),O[1],O[2]);if(b.dot(O[0],X)<0){for(aa=0;
aa<3;aa++){ae[aa]*=-1;O[aa][0]*=-1;O[aa][1]*=-1;O[aa][2]*=-1}}K[0]=0.5*Math.sqrt(Math.max(1+O[0][0]-O[1][1]-O[2][2],0));
K[1]=0.5*Math.sqrt(Math.max(1-O[0][0]+O[1][1]-O[2][2],0));K[2]=0.5*Math.sqrt(Math.max(1-O[0][0]-O[1][1]+O[2][2],0));
K[3]=0.5*Math.sqrt(Math.max(1+O[0][0]+O[1][1]+O[2][2],0));if(O[2][1]>O[1][2]){K[0]=-K[0]
}if(O[0][2]>O[2][0]){K[1]=-K[1]}if(O[1][0]>O[0][1]){K[2]=-K[2]}var J=a.fromValues(K[0],K[1],K[2],2*Math.acos(K[3]));
var V=this._rotationFromQuat(K);if(U){M[0]=Math.round(M[0]*c*100)/100;M[1]=Math.round(M[1]*c*100)/100;
M[2]=Math.round(M[2]*c*100)/100;V[0]=Math.round(V[0]*c*100)/100;V[1]=Math.round(V[1]*c*100)/100;
V[2]=Math.round(V[2]*c*100)/100;J[3]=Math.round(J[3]*c*100)/100}return{translation:P,scale:ae,skew:M,perspective:R,quaternion:K,eulerRotation:V,axisAngle:J}
};s.recompose=function(P,O,L,M,N){P=P||b.create();O=O||b.create();L=L||b.create();
M=M||a.create();N=N||a.create();var K=l.fromRotationTranslation(l.create(),N,P);
K[A]=M[0];K[h]=M[1];K[o]=M[2];K[B]=M[3];var J=l.create();if(L[2]!==0){J[r]=L[2];
l.multiply(K,K,J)}if(L[1]!==0){J[r]=0;J[u]=L[1];l.multiply(K,K,J)}if(L[0]){J[u]=0;
J[4]=L[0];l.multiply(K,K,J)}l.scale(K,K,O);this.m=K;return this};s.isAffine=function(){return(this.m[C]===0&&this.m[A]===0&&this.m[i]===0&&this.m[h]===0&&this.m[u]===0&&this.m[r]===0&&this.m[p]===1&&this.m[o]===0&&this.m[D]===0&&this.m[B]===1)
};s.toString=function(){var J=this.m;if(this.isAffine()){return"matrix("+J[z]+", "+J[y]+", "+J[x]+", "+J[w]+", "+J[v]+", "+J[t]+")"
}return"matrix3d("+J[G]+", "+J[E]+", "+J[C]+", "+J[A]+", "+J[k]+", "+J[j]+", "+J[i]+", "+J[h]+", "+J[u]+", "+J[r]+", "+J[p]+", "+J[o]+", "+J[H]+", "+J[F]+", "+J[D]+", "+J[B]+")"
};s.toCSSString=s.toString;s._combine=function(K,N,M,L){var J=b.create();J[0]=(M*K[0])+(L*N[0]);
J[1]=(M*K[1])+(L*N[1]);J[2]=(M*K[2])+(L*N[2]);return J};s._matrix2dToMat4=function(J){var L=l.create();
for(var M=0;M<4;M++){for(var K=0;K<4;K++){L[M*4+K]=J[M][K]}}return L};s._mat4ToMatrix2d=function(M){var J=[];
for(var L=0;L<4;L++){J[L]=[];for(var K=0;K<4;K++){J[L][K]=M[L*4+K]}}return J};s._rotationFromQuat=function(J){var N=J[3]*J[3];
var M=J[0]*J[0];var L=J[1]*J[1];var K=J[2]*J[2];var S=M+L+K+N;var O=J[0]*J[1]+J[2]*J[3];
var R,Q,P;if(O>0.499*S){Q=2*Math.atan2(J[0],J[3]);P=Math.PI/2;R=0;return b.fromValues(R,Q,P)
}if(O<-0.499*S){Q=-2*Math.atan2(J[0],J[3]);P=-Math.PI/2;R=0;return b.fromValues(R,Q,P)
}Q=Math.atan2(2*J[1]*J[3]-2*J[0]*J[2],M-L-K+N);P=Math.asin(2*O/S);R=Math.atan2(2*J[0]*J[3]-2*J[1]*J[2],-M+L-K+N);
return b.fromValues(R,Q,P)};var n=function(J){return Math.abs(J)<0.0001};d.exports=q
},{"gl-matrix":212}],215:[function(b,c,a){c.exports={Clip:b("./ac-eclipse/ClipFactory"),Timeline:b("./ac-eclipse/Timeline")}
},{"./ac-eclipse/ClipFactory":216,"./ac-eclipse/Timeline":217}],216:[function(g,d,h){g("./helpers/Float32Array");
var c=g("./helpers/transitionEnd");var i=g("ac-clip").Clip;var k=g("./clips/ClipEasing");
var f=g("./clips/ClipInlineCss");var j=g("./clips/ClipTransitionCss");function b(n,m,o,l){if(n.nodeType){if(c===undefined||(l&&l.inlineStyles)){return new f(n,m,o,l)
}return new j(n,m,o,l)}return new k(n,m,o,l)}for(var a in i){if(typeof i[a]==="function"&&a.substr(0,1)!=="_"){b[a]=i[a].bind(i)
}}b.to=function(n,m,o,l){l=l||{};if(l.destroyOnComplete===undefined){l.destroyOnComplete=true
}return new b(n,m,o,l).play()};b.from=function(o,n,l,m){m=m||{};m.propsFrom=l;if(m.destroyOnComplete===undefined){m.destroyOnComplete=true
}return new b(o,n,m.propsTo,m).play()};d.exports=b},{"./clips/ClipEasing":218,"./clips/ClipInlineCss":219,"./clips/ClipTransitionCss":220,"./helpers/Float32Array":223,"./helpers/transitionEnd":233,"ac-clip":132}],217:[function(c,f,a){var d=c("ac-object").create;
var b=c("ac-clip").Clip;var h=c("ac-event-emitter").EventEmitter;function i(j){j=j||{}
}var g=i.prototype=d(h.prototype);f.exports=i},{"ac-clip":132,"ac-event-emitter":256,"ac-object":662}],218:[function(b,a,c){var k=b("ac-object").clone;
var g=b("ac-object").create;var n=b("ac-easing").createPredefined;var l=b("../helpers/isCssCubicBezierString");
var f=b("../helpers/BezierCurveCssManager");var h=b("ac-clip").Clip;var j=b("ac-easing").Ease;
var i="ease";function m(q,p,r,o){if(o&&l(o.ease)){o.ease=f.create(o.ease).toEasingFunction()
}o=o||{};this._propsEase=k(o.propsEase||{},true);h.call(this,q,p,r,o)}var d=m.prototype=g(h.prototype);
d.reset=function(){var p=h.prototype.reset.call(this);if(this._clips){var o=this._clips.length;
while(o--){this._clips[o].reset()}}return p};d.destroy=function(){var p=h.prototype.destroy.call(this);
if(this._clips){var o=this._clips.length;while(o--){this._clips[o].reset()}this._clips=null
}this._eases=null;this._storeOnUpdate=null;return p};d._prepareProperties=function(){var o=0;
var r={};var p={};var s={};var v,u;if(this._propsEase){for(v in this._propsTo){if(this._propsTo.hasOwnProperty(v)){u=this._propsEase[v];
if(l(u)){u=f.create(this._propsEase[v]).toEasingFunction()}if(u===undefined){if(r[this._ease]===undefined){r[this._ease]={};
p[this._ease]={};s[this._ease]=this._ease.easingFunction;o++}r[this._ease][v]=this._propsTo[v];
p[this._ease][v]=this._propsFrom[v]}else{if(typeof u==="function"){r[o]={};p[o]={};
r[o][v]=this._propsTo[v];p[o][v]=this._propsFrom[v];s[o]=u;o++}else{if(r[u]===undefined){r[u]={};
p[u]={};s[u]=u;o++}r[u][v]=this._propsTo[v];p[u][v]=this._propsFrom[v]}}}}if(o>1){var q=k(this._options||{},true);
var t=this._duration*0.001;this._storeOnUpdate=this._onUpdate;this._onUpdate=this._onUpdateClips;
q.onStart=null;q.onUpdate=null;q.onDraw=null;q.onComplete=null;this._clips=[];for(u in r){if(r.hasOwnProperty(u)){q.ease=s[u];
q.propsFrom=p[u];this._clips.push(new h(this._target,t,r[u],q))}}u="linear";this._propsTo={};
this._propsFrom={}}else{for(v in s){if(s.hasOwnProperty(v)){u=s[v]}}}if(u!==undefined){this._ease=(typeof u==="function")?new j(u):n(u)
}}return h.prototype._prepareProperties.call(this)};d._onUpdateClips=function(o){var p=(this._direction===1)?o.progress:1-o.progress;
var q=this._clips.length;while(q--){this._clips[q].setProgress(p)}if(typeof this._storeOnUpdate==="function"){this._storeOnUpdate.call(this,o)
}};a.exports=m},{"../helpers/BezierCurveCssManager":222,"../helpers/isCssCubicBezierString":229,"ac-clip":132,"ac-easing":166,"ac-object":662}],219:[function(f,c,g){var b=f("../helpers/convertToStyleObject");
var d=f("../helpers/convertToTransitionableObjects");var l=f("ac-object").clone;
var j=f("ac-object").create;var k=f("../helpers/removeTransitions");var i=f("../helpers/BezierCurveCssManager");
var n=f("./ClipEasing");var m=f("ac-dom-styles");function a(q,p,r,o){o=o||{};this._el=q;
this._storeOnStart=o.onStart||null;this._storeOnDraw=o.onDraw||null;this._storeOnComplete=o.onComplete||null;
o.onStart=this._onStart;o.onDraw=this._onDraw;o.onComplete=this._onComplete;n.call(this,{},p,r,o)
}var h=a.prototype=j(n.prototype);h.play=function(){var o=n.prototype.play.call(this);
if(this._remainingDelay!==0){m.setStyle(this._el,b(this._target))}return o};h.reset=function(){var o=n.prototype.reset.call(this);
m.setStyle(this._el,b(this._target));return o};h.destroy=function(){var o=n.prototype.destroy.call(this);
this._el=null;this._completeStyles=null;this._storeOnStart=null;this._storeOnDraw=null;
this._storeOnComplete=null;return o};h.getTarget=function(){return this._el};h._prepareProperties=function(){var r=d(this._el,this._propsTo,this._propsFrom);
this._target=r.target;this._propsFrom=r.propsFrom;this._propsTo=r.propsTo;k(this._el,this._target);
var p=(this._isYoyo)?this._propsFrom:this._propsTo;this._completeStyles=b(p);if(this._options.removeStylesOnComplete!==undefined){var s;
var q=this._options.removeStylesOnComplete;if(typeof q==="boolean"&&q){for(s in this._completeStyles){if(this._completeStyles.hasOwnProperty(s)){this._completeStyles[s]=null
}}}else{if(typeof q==="object"&&q.length){var o=q.length;while(o--){s=q[o];if(this._completeStyles.hasOwnProperty(s)){this._completeStyles[s]=null
}}}}}return n.prototype._prepareProperties.call(this)};h._onStart=function(o){if(this.isPlaying()&&this._direction===1&&this._delay===0){m.setStyle(this._el,b(this._propsFrom))
}if(typeof this._storeOnStart==="function"){this._storeOnStart.call(this,o)}};h._onDraw=function(o){m.setStyle(this._el,b(this._target));
if(typeof this._storeOnDraw==="function"){this._storeOnDraw.call(this,o)}};h._onComplete=function(o){m.setStyle(this._el,this._completeStyles);
if(typeof this._storeOnComplete==="function"){this._storeOnComplete.call(this,o)
}};c.exports=a},{"../helpers/BezierCurveCssManager":222,"../helpers/convertToStyleObject":226,"../helpers/convertToTransitionableObjects":227,"../helpers/removeTransitions":230,"./ClipEasing":218,"ac-dom-styles":80,"ac-object":662}],220:[function(k,b,y){var d=k("../helpers/convertToStyleObject");
var p=k("../helpers/convertToTransitionableObjects");var w=k("ac-object").clone;
var n=k("ac-object").create;var t=k("ac-easing").createPredefined;var m=k("../helpers/isCssCubicBezierString");
var u=k("../helpers/removeTransitions");var h=k("../helpers/splitUnits");var c=k("../helpers/toCamCase");
var j=k("../helpers/transitionEnd");var o=k("../helpers/waitAnimationFrames");var v=k("../helpers/BezierCurveCssManager");
var a=k("ac-clip").Clip;var r=k("./ClipEasing");var x=k("ac-dom-styles");var s=k("../helpers/PageVisibilityManager");
var f="ease";var i="%EASE% is not a supported predefined ease when transitioning with Elements and CSS transition. If you need to use %EASE% then pass the inlineStyle:true option.";
var l="Function eases are not supported when using CSS transitions with Elements. Either use a cubic-bezier string (e.g. 'cubic-bezier(0, 0, 1, 1)' or pass the inlineStyle option as `true` to render styles each frame instead of using CSS transitions.";
function g(B,A,C,z){z=z||{};this._el=B;this._storeEase=z.ease;if(typeof this._storeEase==="function"){throw new Error(l)
}this._storeOnStart=z.onStart||null;this._storeOnComplete=z.onComplete||null;z.onStart=this._onStart.bind(this);
z.onComplete=this._onComplete.bind(this);r.call(this,{},A,C,z)}var q=g.prototype=n(r.prototype);
q.play=function(){var z=r.prototype.play.call(this);if(this._direction===1&&this.getProgress()===0&&this._remainingDelay!==0){this._applyStyles(0,d(this._stylesFrom))
}return z};q.reset=function(){var z=r.prototype.reset.call(this);this._applyStyles(0,d(this._target));
return z};q.destroy=function(){var z=r.prototype.destroy.call(this);s.off("changed",this._onVisibilityChanged);
this._removeTransitionListener();this._el=null;this._propsArray=null;this._propsComplete=null;
this._styles=null;this._stylesFrom=null;this._stylesTo=null;this._completeStyles=null;
this._storeOnStart=null;this._storeOnComplete=null;this._onTransitionEnded=null;
return z};q.getTarget=function(){return this._el};q.setProgress=function(z){var A=r.prototype.setProgress.call(this,z);
this._applyStyles(0,d(this._target));if(this.isPlaying()){this._isWaitingForStylesToBeApplied=true;
o(this._setStylesAfterWaiting,2)}return A};q._prepareProperties=function(){var D=p(this._el,this._propsTo,this._propsFrom);
this._target=D.target;this._propsFrom=D.propsFrom;this._propsTo=D.propsTo;this._stylesTo=w(this._propsTo,true);
this._stylesFrom=w(this._propsFrom,true);var E=this._storeEase||f;this._eases={};
this._propsArray=[];this._propsComplete={};var G;var C=d(this._stylesTo);var z=d(this._stylesFrom);
this._propsEaseKeys={};var F;for(F in this._stylesTo){if(this._stylesTo.hasOwnProperty(F)){this._propsArray[this._propsArray.length]=F;
this._propsComplete[c(F)]={"1":C[F],"-1":z[F]};if(this._propsEase[F]===undefined){if(this._eases[E]===undefined){G=this._convertEase(E);
this._eases[E]=G.css}this._propsEaseKeys[F]=E}else{if(this._eases[this._propsEase[F]]===undefined){G=this._convertEase(this._propsEase[F]);
this._eases[this._propsEase[F]]=G.css;this._propsEaseKeys[F]=this._propsEase[F];
this._propsEase[F]=G.js}else{if(m(this._propsEase[F])){this._propsEaseKeys[F]=this._propsEase[F];
this._propsEase[F]=this._eases[this._propsEase[F]]["1"].toEasingFunction()}}}}}this.on("pause",this._onPaused);
this._setOtherTransitions();this._currentTransitionStyles=this._otherTransitions;
this._completeStyles=d((this._isYoyo)?this._stylesFrom:this._stylesTo);if(this._options.removeStylesOnComplete!==undefined){var B=this._options.removeStylesOnComplete;
if(typeof B==="boolean"&&B){for(F in this._stylesTo){this._completeStyles[F]=null
}}else{if(typeof B==="object"&&B.length){var A=B.length;while(A--){this._completeStyles[B[A]]=null
}}}}this._onTransitionEnded=this._onTransitionEnded.bind(this);this._setStylesAfterWaiting=this._setStylesAfterWaiting.bind(this);
this._onVisibilityChanged=this._onVisibilityChanged.bind(this);s.on(s.CHANGED,this._onVisibilityChanged);
return r.prototype._prepareProperties.call(this)};q._convertEase=function(B){if(typeof B==="function"){throw new Error(l)
}var z;var A;if(m(B)){z=v.create(B);A=z.toEasingFunction()}else{var C=t(B);if(C.cssString===null){throw new Error(i.replace(/%EASE%/g,B))
}z=v.create(C.cssString);A=B}return{css:{"1":z,"-1":z.reversed()},js:A}};q._complete=function(){if((this._isWaitingForStylesToBeApplied||this._isTransitionEnded)&&this.getProgress()===1){this._isWaitingForStylesToBeApplied=false;
r.prototype._complete.call(this)}};q._onTransitionEnded=function(){this._isTransitionEnded=true;
this._complete()};q._addTransitionListener=function(){if(!this._isListeningForTransitionEnd&&this._el&&this._onTransitionEnded){this._isListeningForTransitionEnd=true;
this._isTransitionEnded=false;this._el.addEventListener(j,this._onTransitionEnded)
}};q._removeTransitionListener=function(){if(this._isListeningForTransitionEnd&&this._el&&this._onTransitionEnded){this._isListeningForTransitionEnd=false;
this._isTransitionEnded=false;this._el.removeEventListener(j,this._onTransitionEnded)
}};q._applyStyles=function(B,z){if(B>0){var C="";var A={};var D;for(D in this._eases){if(this._eases.hasOwnProperty(D)){A[D]=this._eases[D][this._direction].splitAt(this.getProgress()).toCSSString()
}}for(D in this._stylesTo){if(this._stylesTo.hasOwnProperty(D)){C+=D+" "+B+"ms "+A[this._propsEaseKeys[D]]+" 0ms, "
}}this._currentTransitionStyles=C.substr(0,C.length-2);this._addTransitionListener()
}else{this._currentTransitionStyles="";this._removeTransitionListener()}z.transition=this._getOtherClipTransitionStyles()+this._currentTransitionStyles;
x.setStyle(this._el,z)};q._setStylesAfterWaiting=function(){this._isWaitingForStylesToBeApplied=false;
if(this.isPlaying()){var A=this._duration*(1-this.getProgress());var z=d((this._direction>0)?this._stylesTo:this._stylesFrom);
this._applyStyles(A,z)}};q._setOtherTransitions=function(){u(this._el,this._stylesTo);
var z=a.getAll(this._el);var A=z.length;while(A--){if(z[A]!==this&&z[A].isPlaying()&&z[A]._otherTransitions&&z[A]._otherTransitions.length){this._otherTransitions=z[A]._otherTransitions;
return}}this._otherTransitions=x.getStyle(this._el,"transition").transition;if(this._otherTransitions===null||this._otherTransitions==="all 0s ease 0s"){this._otherTransitions=""
}};q._getTransitionStyles=function(){var z=this._getOtherClipTransitionStyles();
if(this._otherTransitions.length){z+=this._otherTransitions}else{if(z.length){z=z.substr(0,z.length-2)
}}return z};q._getOtherClipTransitionStyles=function(){var B="";var z=a.getAll(this._el);
var A=z.length;while(A--){if(z[A]!==this&&z[A].isPlaying()&&z[A]._currentTransitionStyles&&z[A]._currentTransitionStyles.length){B+=z[A]._currentTransitionStyles+", "
}}return B};q._onVisibilityChanged=function(z){if(this.isPlaying()&&!z.hiddenState){this._update({timeNow:this._getTime()});
this.setProgress(this.getProgress())}};q._onPaused=function(z){var A=x.getStyle.apply(this,[this._el].concat([this._propsArray]));
A.transition=this._getTransitionStyles();this._removeTransitionListener();x.setStyle(this._el,A)
};q._onStart=function(z){var A=(this._direction===1&&this.getProgress()===0&&this._delay===0)?2:0;
if(A){this._isWaitingForStylesToBeApplied=true;this._applyStyles(0,d(this._stylesFrom))
}o(this._setStylesAfterWaiting,A);if(typeof this._storeOnStart==="function"){this._storeOnStart.call(this,z)
}};q._onComplete=function(z){this._removeTransitionListener();this._completeStyles.transition=this._getTransitionStyles();
x.setStyle(this._el,this._completeStyles);if(typeof this._storeOnComplete==="function"){this._storeOnComplete.call(this,z)
}};b.exports=g},{"../helpers/BezierCurveCssManager":222,"../helpers/PageVisibilityManager":224,"../helpers/convertToStyleObject":226,"../helpers/convertToTransitionableObjects":227,"../helpers/isCssCubicBezierString":229,"../helpers/removeTransitions":230,"../helpers/splitUnits":231,"../helpers/toCamCase":232,"../helpers/transitionEnd":233,"../helpers/waitAnimationFrames":234,"./ClipEasing":218,"ac-clip":132,"ac-dom-styles":80,"ac-easing":166,"ac-object":662}],221:[function(c,d,a){var g=c("ac-easing").createBezier;
function b(i,h){this.manager=h;this.p1={x:i[0],y:i[1]};this.p2={x:i[2],y:i[3]};
this._cacheSplits={}}var f=b.prototype;f.splitAt=function(k){if(k===0){return this
}else{if(this._cacheSplits[k]!==undefined){return this._cacheSplits[k]}}var q=[this.p1.x,this.p2.x];
var n=[this.p1.y,this.p2.y];var m=0;var o=k;var i=0;var p=1;var j=this._getStartX(k,q);
while(o!==j&&m<1000){if(o<j){p=k}else{i=k}k=i+((p-i)*0.5);j=this._getStartX(k,q);
++m}var l=this._splitBezier(k,q,n);var r=this._normalize(l);var h=this.manager.create(r);
this._cacheSplits[o]=h;return h};f.reversed=function(){var h=this.toArray();return this.manager.create([0.5-(h[2]-0.5),0.5-(h[3]-0.5),0.5-(h[0]-0.5),0.5-(h[1]-0.5)])
};f.toArray=function(){var h=[this.p1.x,this.p1.y,this.p2.x,this.p2.y];return Array.prototype.slice.call(h)
};f.toCSSString=function(){return"cubic-bezier("+this.p1.x+", "+this.p1.y+", "+this.p2.x+", "+this.p2.y+")"
};f.toEasingFunction=function(){return g.apply(this,this.toArray()).easingFunction
};f._getStartX=function(m,h){var l=m-1;var k=m*m;var j=l*l;var i=k*m;return i-3*k*l*h[1]+3*m*j*h[0]
};f._splitBezier=function(m,h,n){var l=m-1;var k=m*m;var j=l*l;var i=k*m;return[i-3*k*l*h[1]+3*m*j*h[0],i-3*k*l*n[1]+3*m*j*n[0],k-2*m*l*h[1]+j*h[0],k-2*m*l*n[1]+j*n[0],m-l*h[1],m-l*n[1]]
};f._normalize=function(h){return[(h[2]-h[0])/(1-h[0]),(h[3]-h[1])/(1-h[1]),(h[4]-h[0])/(1-h[0]),(h[5]-h[1])/(1-h[1])]
};d.exports=b},{"ac-easing":166}],222:[function(c,d,a){var b=c("./BezierCurveCss");
function g(){this._instances={}}var f=g.prototype;f.create=function(k){var j;if(typeof k==="string"){j=k.replace(/ /g,"")
}else{j="cubic-bezier("+k.join(",")+")"}if(this._instances[j]===undefined){if(typeof k==="string"){k=k.match(/\d*\.?\d+/g);
var h=k.length;while(h--){k[h]=Number(k[h])}}this._instances[j]=new b(k,this)}return this._instances[j]
};d.exports=new g()},{"./BezierCurveCss":221}],223:[function(b,c,a){if(typeof window.Float32Array==="undefined"){window.Float32Array=function(){}
}},{}],224:[function(c,f,b){var d=c("ac-object").create;var h=c("ac-event-emitter").EventEmitter;
function a(){var i;if(typeof document.hidden!=="undefined"){this._hidden="hidden";
i="visibilitychange"}else{if(typeof document.mozHidden!=="undefined"){this._hidden="mozHidden";
i="mozvisibilitychange"}else{if(typeof document.msHidden!=="undefined"){this._hidden="msHidden";
i="msvisibilitychange"}else{if(typeof document.webkitHidden!=="undefined"){this._hidden="webkitHidden";
i="webkitvisibilitychange"}}}}if(typeof document[this._hidden]==="undefined"){this.isHidden=false
}else{this.isHidden=document[this._hidden]}document.addEventListener(i,this._handleVisibilityChange.bind(this),false)
}var g=a.prototype=d(h.prototype);g.CHANGED="changed";g._handleVisibilityChange=function(i){this.isHidden=document[this._hidden];
this.trigger(this.CHANGED,{hiddenState:this.isHidden})};f.exports=new a()},{"ac-event-emitter":256,"ac-object":662}],225:[function(d,f,c){var b=d("./splitUnits");
var h=d("ac-dom-metrics");var a={translateX:"width",translateY:"height"};function i(j,l,m){this._transform=j;
var k;var n;var o;for(o in m){if(m.hasOwnProperty(o)&&typeof this._transform[o]==="function"){k=b(m[o]);
if(k.unit==="%"){n=this._convertPercentToPixelValue(o,k.value,l)}else{n=k.value
}this._transform[o].call(this._transform,n)}}}var g=i.prototype;g._convertPercentToPixelValue=function(m,l,k){m=a[m];
var j=h.getDimensions(k);if(j[m]){l*=0.01;return j[m]*l}return l};g.toArray=function(){return this._transform.toArray()
};g.toCSSString=function(){return this._transform.toCSSString()};f.exports=i},{"./splitUnits":231,"ac-dom-metrics":163}],226:[function(b,c,a){c.exports=function d(h){var g={};
var f;var i;for(i in h){if(h.hasOwnProperty(i)&&h[i]!==null){if(h[i].isColor){if(h[i].isRgb){g[i]="rgb("+Math.round(h[i].r)+", "+Math.round(h[i].g)+", "+Math.round(h[i].b)+")"
}else{if(h[i].isRgba){g[i]="rgba("+Math.round(h[i].r)+", "+Math.round(h[i].g)+", "+Math.round(h[i].b)+", "+h[i].a+")"
}}}else{if(i==="transform"){f=(h[i].length===6)?"matrix":"matrix3d";g[i]=f+"("+h[i].join(",")+")"
}else{g[i]=h[i].value+h[i].unit}}}}return g}},{}],227:[function(h,d,j){var n=h("ac-object").clone;
var f=h("./splitUnits");var b=h("./toCamCase");var c=h("ac-color").Color;var q=h("ac-dom-styles");
var m=h("ac-feature");var i=h("ac-transform").Transform;var a=h("./TransformMatrix");
var l=function(s){if(c.isRgba(s)){s=new c(s).rgbaObject();s.isRgba=true}else{s=new c(s).rgbObject();
s.isRgb=true}s.isColor=true;return s};var r=function(s){if(s.isRgb){s.isRgb=false;
s.isRgba=true;s.a=1}};var p=function(t,s,u){if(t.isRgba||s.isRgba||u.isRgba){r(t);
r(s);r(u)}};var o=function(s){return[s[0],s[1],0,0,s[2],s[3],0,0,0,0,1,0,s[4],s[5],0,1]
};var k=function(t,s,u){if(t.transform.length===16||s.transform.length===16||u.transform.length===16){if(t.transform.length===6){t.transform=o(t.transform)
}if(s.transform.length===6){s.transform=o(s.transform)}if(u.transform.length===6){u.transform=o(u.transform)
}}};d.exports=function g(u,A,z){var w={};A=n(A,true);z=n(z,true);var t;var B,x,y;
var v=m.cssPropertyAvailable("transform");var s;for(s in A){if(A.hasOwnProperty(s)&&A[s]!==null){if(s==="transform"){if(v){B=new i();
t=q.getStyle(u,"transform")["transform"]||"none";B.setMatrixValue(t);x=new a(new i(),u,A[s])
}if(x&&x.toCSSString()!==B.toCSSString()){y=new a(z[s]?new i():B.clone(),u,z[s]);
w[s]=B.toArray();A[s]=x.toArray();z[s]=y.toArray()}else{w[s]=null;A[s]=null}}else{t=q.getStyle(u,s)[b(s)]||z[s];
if(c.isColor(t)){w[s]=l(t);z[s]=(z[s]!==undefined)?l(z[s]):n(w[s],true);A[s]=l(A[s])
}else{w[s]=f(t);z[s]=(z[s]!==undefined)?f(z[s]):n(w[s],true);A[s]=f(A[s])}}}}for(s in z){if(z.hasOwnProperty(s)&&z[s]!==null&&(A[s]===undefined||A[s]===null)){if(s==="transform"){if(v){B=new i();
B.setMatrixValue(getComputedStyle(u).transform||getComputedStyle(u).webkitTransform||"none");
y=new a(new i(),u,z[s])}if(y&&y.toCSSString()!==B.toCSSString()){x=new a(B.clone());
w[s]=B.toArray();A[s]=x.toArray();z[s]=y.toArray()}else{w[s]=null;A[s]=null;z[s]=null
}}else{t=q.getStyle(u,s)[b(s)];if(c.isColor(t)){w[s]=l(t);A[s]=n(w[s],true);z[s]=l(z[s])
}else{w[s]=f(t);z[s]=f(z[s]);A[s]=n(w[s],true)}}}if(w[s].isColor){p(w[s],z[s],A[s])
}}if(w.transform){k(w,z,A)}return{target:w,propsTo:A,propsFrom:z}}},{"./TransformMatrix":225,"./splitUnits":231,"./toCamCase":232,"ac-color":134,"ac-dom-styles":80,"ac-feature":183,"ac-object":662,"ac-transform":213}],228:[function(b,c,a){c.exports=function d(j){if(j.transitionProperty){var m="";
var h=j.transitionProperty.split(", ");var k=j.transitionDuration.split(", ");var l=j.transitionTimingFunction.replace(/\d+[,]+[\s]/gi,function(i){return i.substr(0,i.length-1)
}).split(", ");var f=j.transitionDelay.split(", ");var g=h.length;while(g--){m+=h[g]+" "+k[g]+" "+l[g]+" "+f[g]+", "
}return m.substr(0,m.length-2)}return false}},{}],229:[function(c,d,b){d.exports=function a(f){return typeof f==="string"&&f.substr(0,13)==="cubic-bezier("
}},{}],230:[function(c,d,b){var g=c("./getShorthandTransition");var f=c("ac-dom-styles");
d.exports=function a(k,m){var l=f.getStyle(k,"transition","transition-property","transition-duration","transition-timing-function","transition-delay");
l=l.transition||g(l);if(l&&l.length){l=l.split(",");var j=0;var n;var h=l.length;
while(h--){n=l[h].trim().split(" ")[0];if(m[n]!==undefined){l.splice(h,1);++j}}if(j){if(l.length===0){l=["all"]
}f.setStyle(k,{transition:l.join(",").trim()})}}}},{"./getShorthandTransition":228,"ac-dom-styles":80}],231:[function(c,d,b){d.exports=function a(i){i=String(i);
if(i.indexOf(" ")>-1){throw new Error("Shorthand CSS is not supported. Please use longhand CSS only.")
}var h=/(\d*\.?\d*)(.*)/;var f=1;if(i&&i.substr(0,1)==="-"){i=i.substr(1);f=-1}var g=String(i).match(h);
return{value:Number(g[1])*f,unit:g[2]}}},{}],232:[function(c,d,b){d.exports=function a(g){var f=function(i,j,k,h){return(k===0)&&(h.substr(1,3)!=="moz")?j:j.toUpperCase()
};return g.replace(/-(\w)/g,f)}},{}],233:[function(d,f,c){var a;f.exports=(function b(){if(a){return a
}var g;var h=document.createElement("fakeelement");var i={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};
for(g in i){if(h.style[g]!==undefined){a=i[g];return a}}})()},{}],234:[function(d,f,b){var a=d("./PageVisibilityManager");
f.exports=function c(k,i){if(i){var j=function(l){if(a.isHidden){setTimeout(l,16)
}else{window.requestAnimationFrame(l)}};var h=0;var g=function(){if(h===i){k.call(this)
}else{++h;j(g)}};g()}else{k.call(this)}}},{"./PageVisibilityManager":224}],235:[function(b,c,a){c.exports.DOMEmitter=b("./ac-dom-emitter/DOMEmitter")
},{"./ac-dom-emitter/DOMEmitter":236}],236:[function(b,c,a){var g;var f=b("ac-event-emitter").EventEmitter;
var d="dom-emitter";function h(i){if(i===null){return}this.el=i;this._bindings={};
this._eventEmitter=new f()}g=h.prototype;g._parseEventNames=function(i){if(!i){return[i]
}return i.split(" ")};g._onListenerEvent=function(j,i){this.trigger(j,i,false)};
g._setListener=function(i){this._bindings[i]=this._onListenerEvent.bind(this,i);
this._addEventListener(i,this._bindings[i])};g._removeListener=function(i){this._removeEventListener(i,this._bindings[i]);
delete this._bindings[i]};g._addEventListener=function(j,k,i){if(this.el.addEventListener){this.el.addEventListener(j,k,i)
}else{if(this.el.attachEvent){this.el.attachEvent("on"+j,k)}else{target["on"+j]=k
}}return this};g._removeEventListener=function(j,k,i){if(this.el.removeEventListener){this.el.removeEventListener(j,k,i)
}else{this.el.detachEvent("on"+j,k)}return this};g._triggerInternalEvent=function(i,j){this.trigger(d+":"+i,j)
};g.on=function(i,k,j){i=this._parseEventNames(i);i.forEach(function(n,m,l){if(!this.has(l)){this._setListener(l)
}this._triggerInternalEvent("willon",{evt:l,callback:n,context:m});this._eventEmitter.on(l,n,m);
this._triggerInternalEvent("didon",{evt:l,callback:n,context:m})}.bind(this,k,j));
return this};g.off=function(i,l,k){var j=Array.prototype.slice.call(arguments,0);
i=this._parseEventNames(i);i.forEach(function(q,p,n,m){if(n.length===0){this._eventEmitter.off();
var o;for(o in this._bindings){if(this._bindings.hasOwnProperty(o)){this._removeListener(o)
}}return}this._triggerInternalEvent("willoff",{evt:m,callback:q,context:p});this._eventEmitter.off(m,q,p);
this._triggerInternalEvent("didoff",{evt:m,callback:q,context:p});if(!this.has(m)){this._removeListener(m)
}}.bind(this,l,k,j));return this};g.once=function(i,k,j){i=this._parseEventNames(i);
i.forEach(function(n,m,l){if(!this.has(l)){this._setListener(l)}this._triggerInternalEvent("willonce",{evt:l,callback:n,context:m});
this._eventEmitter.once.call(this,l,n,m);this._triggerInternalEvent("didonce",{evt:l,callback:n,context:m})
}.bind(this,k,j));return this};g.has=function(i,k,j){if(this._eventEmitter&&this._eventEmitter.has.apply(this._eventEmitter,arguments)){return true
}return false};g.trigger=function(i,j,k){i=this._parseEventNames(i);i.forEach(function(m,n,l){this._eventEmitter.trigger(l,m,n)
}.bind(this,j,k));return this};g.destroy=function(){this._triggerInternalEvent("willdestroy");
this.off();this.el=this._eventEmitter=this._bindings=null};c.exports=h},{"ac-event-emitter":256}],237:[function(b,c,a){c.exports.WindowDelegate=b("./window-delegate/WindowDelegate");
c.exports.windowEmitter=b("./window-delegate/windowEmitter")},{"./window-delegate/WindowDelegate":238,"./window-delegate/windowEmitter":239}],238:[function(c,f,a){var g;
var b=c("./windowEmitter");function d(){this._emitter=b;this._setWindowDimensionValues();
this._setScrollValues();this.on("resize",this._setWindowDimensionValues.bind(this));
this.on("scroll",this._setScrollValues.bind(this));this.on("touchstart",this._touchScrollStart.bind(this));
this.on("touchend",this._setZoomValues.bind(this))}g=d.prototype;g.on=function(){this._emitter.on.apply(this._emitter,arguments);
return this};g.once=function(){this._emitter.once.apply(this._emitter,arguments);
return this};g.off=function(){this._emitter.off.apply(this._emitter,arguments);
return this};g.has=function(){return this._emitter.has.apply(this._emitter,arguments)
};g.trigger=function(){this._emitter.trigger.apply(this._emitter,arguments);return this
};g.propagateTo=function(){this._emitter.propagateTo.apply(this._emitter,arguments);
return this};g.stopPropagatingTo=function(){this._emitter.stopPropagatingTo.apply(this._emitter,arguments);
return this};g.isZoomed=function(){return this.clientWidth>this.innerWidth};g._setWindowDimensionValues=function(){this.clientWidth=document.documentElement.clientWidth;
this.clientHeight=document.documentElement.clientHeight;this.innerWidth=window.innerWidth||this.clientWidth;
this.innerHeight=window.innerHeight||this.clientHeight};g._setZoomValues=function(){var h=this.innerWidth;
this.innerWidth=window.innerWidth;if(h!==this.innerWidth){this.innerHeight=window.innerHeight;
this.trigger("zoom");if(h<this.innerWidth){this.trigger("zoomIn")}else{this.trigger("zoomOut")
}}else{setTimeout(this._setZoomValues.bind(this),500)}};g._updateScrollX=function(){this.scrollX=(window.pageXOffset!==undefined)?window.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft;
this.maxScrollX=document.body.scrollWidth-this.innerWidth;return this.scrollX};
g._updateScrollY=function(){this.scrollY=(window.pageYOffset!==undefined)?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;
this.maxScrollY=document.body.scrollHeight-this.innerHeight;return this.scrollY
};g._setScrollValues=function(){var i=this.scrollX,h=this.scrollY;this._updateScrollX();
this._updateScrollY();if(this.scrollX!==i){this.trigger("scrollX")}if(this.scrollY!==h){this.trigger("scrollY")
}this._scrollStop()};g._scrollStop=function(){if(typeof window.ontouchstart==="undefined"){if(this._scrollStopTimer){clearTimeout(this._scrollStopTimer)
}this._scrollStopTimer=setTimeout(function(){clearTimeout(this._scrollStopTimer);
this.trigger("scrollStop")}.bind(this),300)}};g._touchScrollStart=function(){this._updateScrollX();
this._updateScrollY();this.once("touchend",this._touchScrollStop.bind(this,this.scrollX,this.scrollY))
};g._touchScrollStop=function(i,h,j){this._updateScrollX();this._updateScrollY();
if(i!==this.scrollX||h!==this.scrollY){setTimeout(this._touchScrollStop.bind(this,this.scrollX,this.scrollY,true),300)
}else{if(j){this.trigger("scrollStop")}}};f.exports=new d()},{"./windowEmitter":239}],239:[function(b,c,a){var d=b("ac-dom-emitter").DOMEmitter;
c.exports=new d(window)},{"ac-dom-emitter":235}],240:[function(b,c,a){var d=b("./ac-element-tracker/ElementTracker");
c.exports=new d();c.exports.ElementTracker=d},{"./ac-element-tracker/ElementTracker":241}],241:[function(c,b,g){var h;
var f=c("ac-object");var i=c("ac-base").Element;var k=c("ac-base").Array;var m=c("window-delegate").WindowDelegate;
var j=c("./TrackedElement");var n=c("ac-event-emitter").EventEmitter;var d={autoStart:false};
function a(p,o){this.options=f.clone(d);this.options=typeof o==="object"?f.extend(this.options,o):this.options;
this.windowDelegate=m;this.tracking=false;this.elements=[];if(p&&(Array.isArray(p)||this._isNodeList(p)||i.isElement(p))){this.addElements(p)
}if(this.options.autoStart){this.start()}}h=a.prototype=new n();var l=/^\[object (HTMLCollection|NodeList|Object)\]$/;
h._isNodeList=function(o){if(!o){return false}if(typeof o.length!=="number"){return false
}if(typeof o[0]==="object"&&(!o[0]||!o[0].nodeType)){return false}return l.test(Object.prototype.toString.call(o))
};h._registerElements=function(o){o=[].concat(o);o.forEach(function(q){if(this._elementInDOM(q)){var p=new j(q);
p.offsetTop=p.element.offsetTop;this.elements.push(p)}},this)};h._registerTrackedElements=function(o){var p=[].concat(o);
p.forEach(function(q){if(this._elementInDOM(q.element)){q.offsetTop=q.element.offsetTop;
this.elements.push(q)}},this)};h._elementInDOM=function(q){var p=false;var o=document.getElementsByTagName("body")[0];
if(i.isElement(q)&&o.contains(q)){p=true}return p};h._onVPChange=function(){this.elements.forEach(function(o){this.refreshElementState(o)
},this)};h._elementPercentInView=function(o){return o.pixelsInView/o.height};h._elementPixelsInView=function(p){var s=0;
var r=p.top;var q=p.bottom;var o=this.windowDelegate.innerHeight;if(r<=0&&q>=o){s=o
}else{if(r>=0&&r<o&&q>o){s=o-r}else{if(r<0&&(q<o&&q>=0)){s=p.bottom}else{if(r>=0&&q<=o){s=p.height
}}}}return s};h._ifInView=function(o,p){if(!p){o.trigger("enterview",o)}};h._ifAlreadyInView=function(o){if(!o.inView){o.trigger("exitview",o)
}};h.addElements=function(o){o=this._isNodeList(o)?k.toArray(o):[].concat(o);o.forEach(function(p){this.addElement(p)
},this)};h.addElement=function(p){var o;if(i.isElement(p)){o=new j(p);this._registerTrackedElements(o)
}return o};h.removeElement=function(q){var p=[];var o;this.elements.forEach(function(r,s){if(r===q||r.element===q){p.push(s)
}});o=this.elements.filter(function(s,r){return p.indexOf(r)<0?true:false});this.elements=o
};h.stop=function(){if(this.tracking===true){this.tracking=false;this.windowDelegate.off("scroll resize orientationchange",this._onVPChange)
}};h.start=function(){if(this.tracking===false){this.tracking=true;this.windowDelegate.on("scroll resize orientationchange",this._onVPChange,this);
this.refreshAllElementStates()}};h.refreshAllElementStates=function(){this.elements.forEach(function(o){this.refreshElementState(o)
},this)};h.refreshElementState=function(o){var p=i.getBoundingBox(o.element);var q=o.inView;
o=f.extend(o,p);o.pixelsInView=this._elementPixelsInView(o);o.percentInView=this._elementPercentInView(o);
o.inView=o.pixelsInView>0;if(o.inView){this._ifInView(o,q)}if(q){this._ifAlreadyInView(o)
}return o};b.exports=a},{"./TrackedElement":242,"ac-base":3,"ac-event-emitter":256,"ac-object":244,"window-delegate":237}],242:[function(b,c,a){var d;
var g=b("ac-dom-emitter").DOMEmitter;function f(h){if(h.nodeType&&h.nodeType>0){this.element=h
}else{throw new TypeError("TrackedElement: "+h+" is not a valid DOM element")}this.inView=false;
this.percentInView=0;this.pixelsInView=0;this.offsetTop=0;this.top=0;this.right=0;
this.bottom=0;this.left=0;this.width=0;this.height=0;g.call(this,h)}d=f.prototype=new g(null);
c.exports=f},{"ac-dom-emitter":235}],243:[function(b,c,a){arguments[4][2][0].apply(a,arguments)
},{dup:2}],244:[function(b,c,a){c.exports={clone:b("./ac-object/clone"),create:b("./ac-object/create"),defaults:b("./ac-object/defaults"),extend:b("./ac-object/extend"),getPrototypeOf:b("./ac-object/getPrototypeOf"),isDate:b("./ac-object/isDate"),isEmpty:b("./ac-object/isEmpty"),isRegExp:b("./ac-object/isRegExp"),toQueryParameters:b("./ac-object/toQueryParameters")}
},{"./ac-object/clone":245,"./ac-object/create":246,"./ac-object/defaults":247,"./ac-object/extend":248,"./ac-object/getPrototypeOf":249,"./ac-object/isDate":250,"./ac-object/isEmpty":251,"./ac-object/isRegExp":252,"./ac-object/toQueryParameters":253}],245:[function(b,c,a){var f=b("./extend");
c.exports=function d(g){return f({},g)}},{"./extend":248}],246:[function(b,d,a){var f=function(){};
d.exports=function c(g){if(arguments.length>1){throw new Error("Second argument not supported")
}if(g===null||typeof g!=="object"){throw new TypeError("Object prototype may only be an Object.")
}if(typeof Object.create==="function"){return Object.create(g)}else{f.prototype=g;
return new f()}}},{}],247:[function(b,c,a){var f=b("./extend");c.exports=function d(h,g){if(typeof h!=="object"){throw new TypeError("defaults: must provide a defaults object")
}g=g||{};if(typeof g!=="object"){throw new TypeError("defaults: options must be a typeof object")
}return f({},h,g)}},{"./extend":248}],248:[function(c,d,b){var a=Object.prototype.hasOwnProperty;
d.exports=function f(){var h;var g;if(arguments.length<2){h=[{},arguments[0]]}else{h=[].slice.call(arguments)
}g=h.shift();h.forEach(function(j){if(j!=null){for(var i in j){if(a.call(j,i)){g[i]=j[i]
}}}});return g}},{}],249:[function(c,d,b){var a=Object.prototype.hasOwnProperty;
d.exports=function f(i){if(Object.getPrototypeOf){return Object.getPrototypeOf(i)
}else{if(typeof i!=="object"){throw new Error("Requested prototype of a value that is not an object.")
}else{if(typeof this.__proto__==="object"){return i.__proto__}else{var g=i.constructor;
var h;if(a.call(i,"constructor")){h=g;if(!(delete i.constructor)){return null}g=i.constructor;
i.constructor=h}return g?g.prototype:null}}}}},{}],250:[function(b,d,a){d.exports=function c(f){return Object.prototype.toString.call(f)==="[object Date]"
}},{}],251:[function(c,d,b){var a=Object.prototype.hasOwnProperty;d.exports=function f(g){var h;
if(typeof g!=="object"){throw new TypeError("ac-base.Object.isEmpty : Invalid parameter - expected object")
}for(h in g){if(a.call(g,h)){return false}}return true}},{}],252:[function(c,d,b){d.exports=function a(f){return window.RegExp?f instanceof RegExp:false
}},{}],253:[function(c,f,b){var a=c("qs");f.exports=function d(g){if(typeof g!=="object"){throw new TypeError("toQueryParameters error: argument is not an object")
}return a.stringify(g)}},{qs:243}],254:[function(b,d,a){var c=b("./ac-element-engagement/ElementEngagement");
d.exports=new c();d.exports.ElementEngagement=c},{"./ac-element-engagement/ElementEngagement":255}],255:[function(c,b,f){var g;
var d=c("ac-object");var h=c("ac-base").Element;var i=c("ac-element-tracker").ElementTracker;
var k={timeToEngage:500,inViewThreshold:0.75,stopOnEngaged:true};var j={thresholdEnterTime:0,thresholdExitTime:0,inThreshold:false,engaged:false,tracking:true};
var a=function(){i.call(this)};g=a.prototype=new i();g._decorateTrackedElement=function(m,l){var n;
n=d.defaults(k,l||{});d.extend(m,n);d.extend(m,j)};g._attachElementListeners=function(l){l.on("thresholdenter",this._thresholdEnter,this);
l.on("thresholdexit",this._thresholdExit,this);l.on("enterview",this._enterView,this);
l.on("exitview",this._exitView,this)};g._removeElementListeners=function(l){l.off("thresholdenter",this._thresholdEnter);
l.off("thresholdexit",this._thresholdExit);l.off("enterview",this._enterView);l.off("exitview",this._exitView)
};g._attachAllElementListeners=function(){this.elements.forEach(function(l){if(!l.stopOnEngaged){this._attachElementListeners(l)
}else{if(!l.engaged){this._attachElementListeners(l)}}},this)};g._removeAllElementListeners=function(){this.elements.forEach(function(l){this._removeElementListeners(l)
},this)};g._elementInViewPastThreshold=function(n){var l=this.windowDelegate.innerHeight;
var m=false;if(n.pixelsInView===l){m=true}else{m=(n.percentInView>n.inViewThreshold)
}return m};g._ifInView=function(l,n){var m=l.inThreshold;i.prototype._ifInView.apply(this,arguments);
if(!m&&this._elementInViewPastThreshold(l)){l.inThreshold=true;l.trigger("thresholdenter",l);
if(typeof l.timeToEngage==="number"&&l.timeToEngage>=0){l.engagedTimeout=window.setTimeout(this._engaged.bind(this,l),l.timeToEngage)
}}};g._ifAlreadyInView=function(l){var m=l.inThreshold;i.prototype._ifAlreadyInView.apply(this,arguments);
if(m&&!this._elementInViewPastThreshold(l)){l.inThreshold=false;l.trigger("thresholdexit",l);
if(l.engagedTimeout){window.clearTimeout(l.engagedTimeout);l.engagedTimeout=null
}}};g._engaged=function(l){l.engagedTimeout=null;this._elementEngaged(l);l.trigger("engaged",l);
this.trigger("engaged",l)};g._thresholdEnter=function(l){l.thresholdEnterTime=Date.now();
l.thresholdExitTime=0;this.trigger("thresholdenter",l)};g._thresholdExit=function(l){l.thresholdExitTime=Date.now();
this.trigger("thresholdexit",l)};g._enterView=function(l){this.trigger("enterview",l)
};g._exitView=function(l){this.trigger("exitview",l)};g._elementEngaged=function(l){l.engaged=true;
if(l.stopOnEngaged){this.stop(l)}};g.stop=function(l){if(this.tracking&&!l){this._removeAllElementListeners();
i.prototype.stop.call(this)}if(l&&l.tracking){l.tracking=false;this._removeElementListeners(l)
}};g.start=function(l){if(!l){this._attachAllElementListeners();i.prototype.start.call(this)
}if(l&&!l.tracking){if(!l.stopOnEngaged){l.tracking=true;this._attachElementListeners(l)
}else{if(!l.engaged){l.tracking=true;this._attachElementListeners(l)}}}};g.addElement=function(n,l){var m=i.prototype.addElement.call(this,n);
this._decorateTrackedElement(m,l);return m};g.addElements=function(m,l){[].forEach.call(m,function(n){this.addElement(n,l)
},this)};b.exports=a},{"ac-base":3,"ac-element-tracker":240,"ac-object":244}],256:[function(b,c,a){c.exports.EventEmitter=b("./ac-event-emitter/EventEmitter")
},{"./ac-event-emitter/EventEmitter":257}],257:[function(d,c,f){var h="EventEmitter:propagation";
var k=function(l){if(l){this.context=l}};var g=k.prototype;var i=function(){if(!this.hasOwnProperty("_events")&&typeof this._events!=="object"){this._events={}
}return this._events};var a=function(m,o){var p=m[0];var q=m[1];var n=m[2];if((typeof p!=="string"&&typeof p!=="object")||p===null||Array.isArray(p)){throw new TypeError("Expecting event name to be a string or object.")
}if((typeof p==="string")&&!q){throw new Error("Expecting a callback function to be provided.")
}if(q&&(typeof q!=="function")){if(typeof p==="object"&&typeof q==="object"){n=q
}else{throw new TypeError("Expecting callback to be a function.")}}if(typeof p==="object"){for(var l in p){o.call(this,l,p[l],n)
}}if(typeof p==="string"){p=p.split(" ");p.forEach(function(r){o.call(this,r,q,n)
},this)}};var j=function(o,p){var l;var m;var n;l=i.call(this)[o];if(!l||l.length===0){return
}l=l.slice();this._stoppedImmediatePropagation=false;for(m=0,n=l.length;m<n;m++){if(this._stoppedImmediatePropagation||p(l[m],m)){break
}}};var b=function(m,n,o){var l=-1;j.call(this,n,function(q,p){if(q.callback===o){l=p;
return true}});if(l===-1){return}m[n].splice(l,1)};g.on=function(){var l=i.call(this);
a.call(this,arguments,function(n,o,m){l[n]=l[n]||(l[n]=[]);l[n].push({callback:o,context:m})
});return this};g.once=function(){a.call(this,arguments,function(m,o,l){var n=function(p){o.call(l||this,p);
this.off(m,n)};this.on(m,n,this)});return this};g.off=function(n,p){var m=i.call(this);
if(arguments.length===0){this._events={}}else{if(!n||(typeof n!=="string"&&typeof n!=="object")||Array.isArray(n)){throw new TypeError("Expecting event name to be a string or object.")
}}if(typeof n==="object"){for(var o in n){b.call(this,m,o,n[o])}}if(typeof n==="string"){var l=n.split(" ");
if(l.length===1){if(p){b.call(this,m,n,p)}else{m[n]=[]}}else{l.forEach(function(q){m[q]=[]
})}}return this};g.trigger=function(m,n,l){if(!m){throw new Error("trigger method requires an event name")
}if(typeof m!=="string"){throw new TypeError("Expecting event names to be a string.")
}if(l&&typeof l!=="boolean"){throw new TypeError("Expecting doNotPropagate to be a boolean.")
}m=m.split(" ");m.forEach(function(o){j.call(this,o,function(p){p.callback.call(p.context||this.context||this,n)
}.bind(this));if(!l){j.call(this,h,function(q){var p=o;if(q.prefix){p=q.prefix+p
}q.emitter.trigger(p,n)})}},this);return this};g.propagateTo=function(m,n){var l=i.call(this);
if(!l[h]){this._events[h]=[]}l[h].push({emitter:m,prefix:n})};g.stopPropagatingTo=function(o){var m=i.call(this);
if(!o){m[h]=[];return}var p=m[h];var n=p.length;var l;for(l=0;l<n;l++){if(p[l].emitter===o){p.splice(l,1);
break}}};g.stopImmediatePropagation=function(){this._stoppedImmediatePropagation=true
};g.has=function(l,s,p){var o=i.call(this);var m=o[l];if(arguments.length===0){return Object.keys(o)
}if(!m){return false}if(!s){return(m.length>0)?true:false}for(var n=0,q=m.length;
n<q;n++){var r=m[n];if(p&&s&&r.context===p&&r.callback===s){return true}else{if(s&&!p&&r.callback===s){return true
}}}return false};c.exports=k},{}],258:[function(b,c,a){arguments[4][190][0].apply(a,arguments)
},{"./ac-browser/BrowserData":259,"./ac-browser/IE":260,dup:190}],259:[function(b,c,a){arguments[4][191][0].apply(a,arguments)
},{"./data":261,dup:191}],260:[function(b,c,a){arguments[4][192][0].apply(a,arguments)
},{dup:192}],261:[function(b,c,a){arguments[4][23][0].apply(a,arguments)},{dup:23}],262:[function(c,f,b){var d={cssPropertyAvailable:c("./ac-feature/cssPropertyAvailable"),localStorageAvailable:c("./ac-feature/localStorageAvailable")};
var a=Object.prototype.hasOwnProperty;d.threeDTransformsAvailable=function(){if(typeof this._threeDTransformsAvailable!=="undefined"){return this._threeDTransformsAvailable
}var i,g;try{this._threeDTransformsAvailable=false;if(a.call(window,"styleMedia")){this._threeDTransformsAvailable=window.styleMedia.matchMedium("(-webkit-transform-3d)")
}else{if(a.call(window,"media")){this._threeDTransformsAvailable=window.media.matchMedium("(-webkit-transform-3d)")
}}if(!this._threeDTransformsAvailable){if(!(g=document.getElementById("supportsThreeDStyle"))){g=document.createElement("style");
g.id="supportsThreeDStyle";g.textContent="@media (transform-3d),(-o-transform-3d),(-moz-transform-3d),(-ms-transform-3d),(-webkit-transform-3d) { #supportsThreeD { height:3px } }";
document.querySelector("head").appendChild(g)}if(!(i=document.querySelector("#supportsThreeD"))){i=document.createElement("div");
i.id="supportsThreeD";document.body.appendChild(i)}this._threeDTransformsAvailable=(i.offsetHeight===3)||g.style.MozTransform!==undefined||g.style.WebkitTransform!==undefined
}return this._threeDTransformsAvailable}catch(h){return false}};d.canvasAvailable=function(){if(typeof this._canvasAvailable!=="undefined"){return this._canvasAvailable
}var g=document.createElement("canvas");this._canvasAvailable=!!(typeof g.getContext==="function"&&g.getContext("2d"));
return this._canvasAvailable};d.sessionStorageAvailable=function(){if(typeof this._sessionStorageAvailable!=="undefined"){return this._sessionStorageAvailable
}try{if(typeof window.sessionStorage!=="undefined"&&typeof window.sessionStorage.setItem==="function"){window.sessionStorage.setItem("ac_browser_detect","test");
this._sessionStorageAvailable=true;window.sessionStorage.removeItem("ac_browser_detect","test")
}else{this._sessionStorageAvailable=false}}catch(g){this._sessionStorageAvailable=false
}return this._sessionStorageAvailable};d.cookiesAvailable=function(){if(typeof this._cookiesAvailable!=="undefined"){return this._cookiesAvailable
}this._cookiesAvailable=(a.call(document,"cookie")&&!!navigator.cookieEnabled)?true:false;
return this._cookiesAvailable};d.__normalizedScreenWidth=function(){if(typeof window.orientation==="undefined"){return window.screen.width
}return window.screen.width<window.screen.height?window.screen.width:window.screen.height
};d.touchAvailable=function(){return !!(("ontouchstart" in window)||window.DocumentTouch&&document instanceof window.DocumentTouch)
};d.isDesktop=function(){if(!this.touchAvailable()&&!window.orientation){return true
}return false};d.isHandheld=function(){return !this.isDesktop()&&!this.isTablet()
};d.isTablet=function(){return !this.isDesktop()&&this.__normalizedScreenWidth()>480
};d.isRetina=function(){var g=["min-device-pixel-ratio:1.5","-webkit-min-device-pixel-ratio:1.5","min-resolution:1.5dppx","min-resolution:144dpi","min--moz-device-pixel-ratio:1.5"];
var h;if(window.devicePixelRatio!==undefined){if(window.devicePixelRatio>=1.5){return true
}}else{for(h=0;h<g.length;h+=1){if(window.matchMedia("("+g[h]+")").matches===true){return true
}}}return false};d.svgAvailable=function(){return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")
};f.exports=d},{"./ac-feature/cssPropertyAvailable":263,"./ac-feature/localStorageAvailable":264}],263:[function(c,f,b){var g=null;
var h=null;var a=null;var d=null;f.exports=function(s){if(g===null){g=document.createElement("browserdetect").style
}if(h===null){h=["-webkit-","-moz-","-o-","-ms-","-khtml-",""]}if(a===null){a=["Webkit","Moz","O","ms","Khtml",""]
}if(d===null){d={}}s=s.replace(/([A-Z]+)([A-Z][a-z])/g,"$1\\-$2").replace(/([a-z\d])([A-Z])/g,"$1\\-$2").replace(/^(\-*webkit|\-*moz|\-*o|\-*ms|\-*khtml)\-/,"").toLowerCase();
switch(s){case"gradient":if(d.gradient!==undefined){return d.gradient}s="background-image:";
var q="gradient(linear,left top,right bottom,from(#9f9),to(white));";var p="linear-gradient(left top,#9f9, white);";
g.cssText=(s+h.join(q+s)+h.join(p+s)).slice(0,-s.length);d.gradient=(g.backgroundImage.indexOf("gradient")!==-1);
return d.gradient;case"inset-box-shadow":if(d["inset-box-shadow"]!==undefined){return d["inset-box-shadow"]
}s="box-shadow:";var r="#fff 0 1px 1px inset;";g.cssText=h.join(s+r);d["inset-box-shadow"]=(g.cssText.indexOf("inset")!==-1);
return d["inset-box-shadow"];default:var o=s.split("-");var k=o.length;var n;var m;
var l;if(o.length>0){s=o[0];for(m=1;m<k;m+=1){s+=o[m].substr(0,1).toUpperCase()+o[m].substr(1)
}}n=s.substr(0,1).toUpperCase()+s.substr(1);if(d[s]!==undefined){return d[s]}for(l=a.length-1;
l>=0;l-=1){if(g[a[l]+s]!==undefined||g[a[l]+n]!==undefined){d[s]=true;return true
}}return false}}},{}],264:[function(d,f,b){var a=null;f.exports=function c(){if(a===null){a=!!(window.localStorage&&window.localStorage.non_existent!==null)
}return a}},{}],265:[function(b,c,a){var d=b("./ac-experience-reporter/ExperienceReporter");
c.exports=new d();c.exports.ExperienceReporter=d},{"./ac-experience-reporter/ExperienceReporter":267}],266:[function(b,d,a){var c=function(h,g){this._data=h;
this._environment=g;this.experienceObject=this._matchExperienceToEnvironment()||{};
this.experience=this.experienceObject.type||"static";return this};var f=c.prototype;
f._matchExperienceToEnvironment=function(){var g=false;var h=this._filterByEnvironment();
if(h.length>0){g=h.length===1?h[0]:this._filterBySpecificity(h)}return g};f._filterByEnvironment=function(){var g=this._data.filter(function(i){var h=false;
for(var j in i){if(j!=="type"&&i.hasOwnProperty(j)){if(/^min_/.test(j)){h=this._environment[j.replace(/^min_/,"")]>=i[j]
}else{if(/^max_/.test(j)){h=this._environment[j.replace(/^max_/,"")]<=i[j]}else{h=i[j]===this._environment[j]
}}if(!h){break}}}return h},this);return g};f._filterBySpecificity=function(j){var i=j;
var g=0;var h=[];i.forEach(function(l){var k=Object.keys(l).length;g=k>g?k:g});
i.forEach(function(l){var k=Object.keys(l).length;if(k===g){h.push(l)}});return h[0]
};d.exports=c},{}],267:[function(c,a,f){var i=c("ac-browser");var d=c("ac-feature");
var h=c("../utils/castToFloat");var b=c("./ExperienceObject");function j(){this._environment=this._setEnvironment()
}var g=j.prototype;g.newExperience=function(k){k.forEach(function(l){var m;for(m in l){if(l.hasOwnProperty(m)){if(/(^(min_|max_))|((_version|_width|_height)$)/.test(m)){l[m]=h(l[m])
}}}});return new b(k,this._environment)};g.getEnvironment=function(){return this._environment
};g._setEnvironment=function(){var k={platform:this._setPlatform(),os:i.os.toLowerCase(),os_version:h(i.osVersion),browser:i.name.toLowerCase(),browser_version:h(i.version),retina:d.isRetina(),viewport_width:window.innerWidth,viewport_height:window.innerHeight};
return k};g._setPlatform=function(){var k="desktop";if(d.isTablet()){k="tablet"
}else{if(d.isHandheld()){k="handheld"}}return k};a.exports=j},{"../utils/castToFloat":268,"./ExperienceObject":266,"ac-browser":258,"ac-feature":262}],268:[function(c,d,b){d.exports=function a(f){return window.parseFloat(f,10)
}},{}],269:[function(b,c,a){arguments[4][128][0].apply(a,arguments)},{"./ac-clock/Clock":270,"./ac-clock/ThrottledClock":271,"./ac-clock/sharedClockInstance":272,dup:128}],270:[function(b,c,a){arguments[4][129][0].apply(a,arguments)
},{"ac-event-emitter":256,dup:129}],271:[function(b,c,a){arguments[4][130][0].apply(a,arguments)
},{"./sharedClockInstance":272,"ac-event-emitter":256,dup:130}],272:[function(b,c,a){arguments[4][131][0].apply(a,arguments)
},{"./Clock":270,dup:131}],273:[function(b,c,a){c.exports={log:b("./ac-console/log")}
},{"./ac-console/log":274}],274:[function(d,f,b){var a="f7c9180f-5c45-47b4-8de4-428015f096c0";
var c=!!(function(){try{return window.localStorage.getItem(a)}catch(h){}}());f.exports=function g(){if(window.console&&typeof console.log!=="undefined"&&c){console.log.apply(console,Array.prototype.slice.call(arguments,0))
}}},{}],275:[function(b,c,a){arguments[4][154][0].apply(a,arguments)},{"./utils/getBoundingClientRect":286,dup:154}],276:[function(b,c,a){arguments[4][155][0].apply(a,arguments)
},{"./utils/getBoundingClientRect":286,dup:155}],277:[function(b,c,a){arguments[4][156][0].apply(a,arguments)
},{"./getDimensions":276,"./getScrollX":281,"./getScrollY":282,"./utils/getBoundingClientRect":286,dup:156}],278:[function(b,c,a){arguments[4][157][0].apply(a,arguments)
},{"./getDimensions":276,"./getPixelsInViewport":279,dup:157}],279:[function(b,c,a){arguments[4][158][0].apply(a,arguments)
},{"./getViewportPosition":283,dup:158}],280:[function(b,c,a){arguments[4][159][0].apply(a,arguments)
},{"./getDimensions":276,"./utils/getBoundingClientRect":286,dup:159}],281:[function(b,c,a){arguments[4][160][0].apply(a,arguments)
},{dup:160}],282:[function(b,c,a){arguments[4][161][0].apply(a,arguments)},{dup:161}],283:[function(b,c,a){arguments[4][162][0].apply(a,arguments)
},{"./getPagePosition":277,"./getScrollX":281,"./getScrollY":282,"./utils/getBoundingClientRect":286,dup:162}],284:[function(b,c,a){arguments[4][163][0].apply(a,arguments)
},{"./getContentDimensions":275,"./getDimensions":276,"./getPagePosition":277,"./getPercentInViewport":278,"./getPixelsInViewport":279,"./getPosition":280,"./getScrollX":281,"./getScrollY":282,"./getViewportPosition":283,"./isInViewport":285,dup:163}],285:[function(b,c,a){arguments[4][164][0].apply(a,arguments)
},{"./getPercentInViewport":278,"./getPixelsInViewport":279,dup:164}],286:[function(b,c,a){arguments[4][165][0].apply(a,arguments)
},{dup:165}],287:[function(b,c,a){arguments[4][105][0].apply(a,arguments)},{dup:105}],288:[function(b,c,a){arguments[4][106][0].apply(a,arguments)
},{dup:106}],289:[function(b,c,a){arguments[4][107][0].apply(a,arguments)},{dup:107}],290:[function(b,c,a){c.exports=10
},{}],291:[function(b,c,a){arguments[4][108][0].apply(a,arguments)},{dup:108}],292:[function(b,c,a){arguments[4][109][0].apply(a,arguments)
},{dup:109}],293:[function(c,d,b){d.exports=function a(g){var f=document.createDocumentFragment();
var h;if(g){h=document.createElement("div");h.innerHTML=g;while(h.firstChild){f.appendChild(h.firstChild)
}}return f}},{}],294:[function(b,c,a){arguments[4][110][0].apply(a,arguments)},{"./ELEMENT_NODE":291,"./internal/isNodeType":300,"ac-polyfills/Array/prototype.filter":310,"ac-polyfills/Array/prototype.slice":311,dup:110}],295:[function(b,c,a){c.exports={createDocumentFragment:b("./createDocumentFragment"),filterByNodeType:b("./filterByNodeType"),insertAfter:b("./insertAfter"),insertBefore:b("./insertBefore"),insertFirstChild:b("./insertFirstChild"),insertLastChild:b("./insertLastChild"),isComment:b("./isComment"),isDocument:b("./isDocument"),isDocumentFragment:b("./isDocumentFragment"),isDocumentType:b("./isDocumentType"),isElement:b("./isElement"),isNode:b("./isNode"),isNodeList:b("./isNodeList"),isTextNode:b("./isTextNode"),remove:b("./remove"),replace:b("./replace"),COMMENT_NODE:b("./COMMENT_NODE"),DOCUMENT_FRAGMENT_NODE:b("./DOCUMENT_FRAGMENT_NODE"),DOCUMENT_NODE:b("./DOCUMENT_NODE"),DOCUMENT_TYPE_NODE:b("./DOCUMENT_TYPE_NODE"),ELEMENT_NODE:b("./ELEMENT_NODE"),TEXT_NODE:b("./TEXT_NODE")}
},{"./COMMENT_NODE":287,"./DOCUMENT_FRAGMENT_NODE":288,"./DOCUMENT_NODE":289,"./DOCUMENT_TYPE_NODE":290,"./ELEMENT_NODE":291,"./TEXT_NODE":292,"./createDocumentFragment":293,"./filterByNodeType":294,"./insertAfter":296,"./insertBefore":297,"./insertFirstChild":298,"./insertLastChild":299,"./isComment":302,"./isDocument":303,"./isDocumentFragment":304,"./isDocumentType":305,"./isElement":306,"./isNode":307,"./isNodeList":308,"./isTextNode":309,"./remove":312,"./replace":313}],296:[function(b,c,a){var f=b("./internal/validate");
c.exports=function d(g,h){f.insertNode(g,true,"insertAfter");f.childNode(h,true,"insertAfter");
f.hasParentNode(h,"insertAfter");if(!h.nextSibling){return h.parentNode.appendChild(g)
}return h.parentNode.insertBefore(g,h.nextSibling)}},{"./internal/validate":301}],297:[function(c,d,a){var f=c("./internal/validate");
d.exports=function b(g,h){f.insertNode(g,true,"insertBefore");f.childNode(h,true,"insertBefore");
f.hasParentNode(h,"insertBefore");return h.parentNode.insertBefore(g,h)}},{"./internal/validate":301}],298:[function(c,d,b){var f=c("./internal/validate");
d.exports=function a(g,h){f.insertNode(g,true,"insertFirstChild");f.parentNode(h,true,"insertFirstChild");
if(!h.firstChild){return h.appendChild(g)}return h.insertBefore(g,h.firstChild)
}},{"./internal/validate":301}],299:[function(b,c,a){var d=b("./internal/validate");
c.exports=function f(g,h){d.insertNode(g,true,"insertLastChild");d.parentNode(h,true,"insertLastChild");
return h.appendChild(g)}},{"./internal/validate":301}],300:[function(b,c,a){arguments[4][111][0].apply(a,arguments)
},{"../isNode":307,dup:111}],301:[function(b,c,a){arguments[4][112][0].apply(a,arguments)
},{"../COMMENT_NODE":287,"../DOCUMENT_FRAGMENT_NODE":288,"../ELEMENT_NODE":291,"../TEXT_NODE":292,"./isNodeType":300,dup:112}],302:[function(c,d,a){var g=c("./internal/isNodeType");
var f=c("./COMMENT_NODE");d.exports=function b(h){return g(h,f)}},{"./COMMENT_NODE":287,"./internal/isNodeType":300}],303:[function(c,d,b){var g=c("./internal/isNodeType");
var a=c("./DOCUMENT_NODE");d.exports=function f(h){return g(h,a)}},{"./DOCUMENT_NODE":289,"./internal/isNodeType":300}],304:[function(b,c,a){arguments[4][113][0].apply(a,arguments)
},{"./DOCUMENT_FRAGMENT_NODE":288,"./internal/isNodeType":300,dup:113}],305:[function(b,c,a){var g=b("./internal/isNodeType");
var f=b("./DOCUMENT_TYPE_NODE");c.exports=function d(h){return g(h,f)}},{"./DOCUMENT_TYPE_NODE":290,"./internal/isNodeType":300}],306:[function(b,c,a){arguments[4][114][0].apply(a,arguments)
},{"./ELEMENT_NODE":291,"./internal/isNodeType":300,dup:114}],307:[function(b,c,a){arguments[4][115][0].apply(a,arguments)
},{dup:115}],308:[function(c,d,b){var f=/^\[object (HTMLCollection|NodeList|Object)\]$/;
d.exports=function a(g){if(!g){return false}if(typeof g.length!=="number"){return false
}if(typeof g[0]==="object"&&(!g[0]||!g[0].nodeType)){return false}return f.test(Object.prototype.toString.call(g))
}},{}],309:[function(c,d,a){var g=c("./internal/isNodeType");var b=c("./TEXT_NODE");
d.exports=function f(h){return g(h,b)}},{"./TEXT_NODE":292,"./internal/isNodeType":300}],310:[function(b,c,a){arguments[4][117][0].apply(a,arguments)
},{dup:117}],311:[function(b,c,a){arguments[4][58][0].apply(a,arguments)},{dup:58}],312:[function(b,c,a){arguments[4][116][0].apply(a,arguments)
},{"./internal/validate":301,dup:116}],313:[function(b,d,a){var f=b("./internal/validate");
d.exports=function c(g,h){f.insertNode(g,true,"insertFirstChild","newNode");f.childNode(h,true,"insertFirstChild","oldNode");
f.hasParentNode(h,"insertFirstChild","oldNode");return h.parentNode.replaceChild(g,h)
}},{"./internal/validate":301}],314:[function(b,c,a){arguments[4][79][0].apply(a,arguments)
},{"ac-prefixer/getStyleProperty":318,"ac-prefixer/stripPrefixes":324,dup:79}],315:[function(b,c,a){arguments[4][80][0].apply(a,arguments)
},{"./getStyle":314,"./setStyle":327,dup:80}],316:[function(b,c,a){arguments[4][81][0].apply(a,arguments)
},{dup:81}],317:[function(b,c,a){arguments[4][82][0].apply(a,arguments)},{"./getStyleProperty":318,"./getStyleValue":319,"./shared/stylePropertyCache":322,dup:82}],318:[function(b,c,a){arguments[4][83][0].apply(a,arguments)
},{"./shared/getStyleTestElement":320,"./shared/prefixHelper":321,"./shared/stylePropertyCache":322,"./utils/toCSS":325,"./utils/toDOM":326,dup:83}],319:[function(b,c,a){arguments[4][84][0].apply(a,arguments)
},{"./getStyleProperty":318,"./shared/prefixHelper":321,"./shared/stylePropertyCache":322,"./shared/styleValueAvailable":323,dup:84}],320:[function(b,c,a){arguments[4][85][0].apply(a,arguments)
},{dup:85}],321:[function(b,c,a){arguments[4][68][0].apply(a,arguments)},{dup:68}],322:[function(b,c,a){arguments[4][87][0].apply(a,arguments)
},{dup:87}],323:[function(b,c,a){arguments[4][88][0].apply(a,arguments)},{"./getStyleTestElement":320,"./stylePropertyCache":322,dup:88}],324:[function(b,c,a){arguments[4][89][0].apply(a,arguments)
},{dup:89}],325:[function(b,c,a){arguments[4][90][0].apply(a,arguments)},{dup:90}],326:[function(b,c,a){arguments[4][91][0].apply(a,arguments)
},{dup:91}],327:[function(b,c,a){arguments[4][92][0].apply(a,arguments)},{"./internal/normalizeValue":316,"ac-prefixer/getStyleCSS":317,"ac-prefixer/getStyleProperty":318,dup:92}],328:[function(b,c,a){arguments[4][132][0].apply(a,arguments)
},{"./ac-clip/Clip":329,dup:132}],329:[function(b,c,a){arguments[4][133][0].apply(a,arguments)
},{"ac-clock":269,"ac-easing":343,"ac-event-emitter":256,"ac-object":662,dup:133}],330:[function(b,c,a){c.exports={decimalToHex:b("./ac-color/decimalToHex"),hexToDecimal:b("./ac-color/hexToDecimal"),hexToRgb:b("./ac-color/hexToRgb"),isColor:b("./ac-color/isColor"),isHex:b("./ac-color/isHex"),isRgb:b("./ac-color/isRgb"),mixColors:b("./ac-color/mixColors"),rgbToArray:b("./ac-color/rgbToArray"),rgbToDecimal:b("./ac-color/rgbToDecimal"),rgbToHex:b("./ac-color/rgbToHex"),rgbToObject:b("./ac-color/rgbToObject"),shortToLongHex:b("./ac-color/shortToLongHex")}
},{"./ac-color/decimalToHex":331,"./ac-color/hexToDecimal":332,"./ac-color/hexToRgb":333,"./ac-color/isColor":334,"./ac-color/isHex":335,"./ac-color/isRgb":336,"./ac-color/mixColors":337,"./ac-color/rgbToArray":338,"./ac-color/rgbToDecimal":339,"./ac-color/rgbToHex":340,"./ac-color/rgbToObject":341,"./ac-color/shortToLongHex":342}],331:[function(c,d,b){d.exports=function a(f){return"#"+(f).toString(16)
}},{}],332:[function(c,d,a){d.exports=function b(f){return parseInt(f.substr(1),16)
}},{}],333:[function(d,f,c){var a=d("./shortToLongHex");f.exports=function b(h){h=a(h);
var g=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(h);return g?"rgb("+parseInt(g[1],16)+", "+parseInt(g[2],16)+", "+parseInt(g[3],16)+")":null
}},{"./shortToLongHex":342}],334:[function(c,f,b){var g=c("./isRgb");var a=c("./isHex");
f.exports=function d(h){return g(h)||a(h)}},{"./isHex":335,"./isRgb":336}],335:[function(c,d,b){d.exports=function a(g){var f=/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;
return f.test(g)}},{}],336:[function(b,c,a){c.exports=function d(f){return typeof f==="string"&&f.indexOf("rgb(")===0
}},{}],337:[function(d,f,c){var b=d("./isHex");var a=d("./hexToRgb");var h=d("./rgbToObject");
f.exports=function g(n,m,l){n=b(n)?a(n):n;m=b(m)?a(m):m;n=h(n);m=h(m);var k=n.r+((m.r-n.r)*l);
var j=n.g+((m.g-n.g)*l);var i=n.b+((m.b-n.b)*l);return"rgb("+k+", "+j+", "+i+")"
}},{"./hexToRgb":333,"./isHex":335,"./rgbToObject":341}],338:[function(b,c,a){var d=b("./rgbToObject");
c.exports=function f(g){var h=d(g);return[h.r,h.g,h.b]}},{"./rgbToObject":341}],339:[function(d,f,b){var c=d("./hexToDecimal");
var h=d("./rgbToArray");var g=d("./rgbToHex");f.exports=function a(i){var j=g.apply(this,h(i));
return c(j)}},{"./hexToDecimal":332,"./rgbToArray":338,"./rgbToHex":340}],340:[function(b,c,a){c.exports=function d(i,h,f){return"#"+((1<<24)+(i<<16)+(h<<8)+f).toString(16).slice(1)
}},{}],341:[function(b,c,a){c.exports=function d(g){var h=/rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/;
var f=h.exec(g);return{r:Number(f[1]),g:Number(f[2]),b:Number(f[3])}}},{}],342:[function(c,d,b){d.exports=function a(g){var f=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;
g=g.replace(f,function(i,k,j,h){return"#"+k+k+j+j+h+h});return g}},{}],343:[function(b,c,a){arguments[4][166][0].apply(a,arguments)
},{"./ac-easing/Ease":344,"./ac-easing/createBezier":345,"./ac-easing/createPredefined":346,"./ac-easing/createStep":347,dup:166}],344:[function(b,c,a){arguments[4][167][0].apply(a,arguments)
},{dup:167}],345:[function(b,c,a){arguments[4][168][0].apply(a,arguments)},{"./Ease":344,"./helpers/KeySpline":348,dup:168}],346:[function(b,c,a){arguments[4][169][0].apply(a,arguments)
},{"./Ease":344,"./createStep":347,"./helpers/cssAliases":349,"./helpers/easingFunctions":350,dup:169}],347:[function(b,c,a){arguments[4][170][0].apply(a,arguments)
},{"./Ease":344,dup:170}],348:[function(b,c,a){arguments[4][171][0].apply(a,arguments)
},{dup:171}],349:[function(b,c,a){arguments[4][172][0].apply(a,arguments)},{dup:172}],350:[function(b,c,a){arguments[4][173][0].apply(a,arguments)
},{"../createBezier":345,dup:173}],351:[function(b,c,a){arguments[4][212][0].apply(a,arguments)
},{dup:212}],352:[function(b,c,a){arguments[4][213][0].apply(a,arguments)},{"./ac-transform/Transform":353,dup:213}],353:[function(b,c,a){arguments[4][214][0].apply(a,arguments)
},{dup:214,"gl-matrix":351}],354:[function(b,c,a){c.exports={Clip:b("./ac-eclipse/Clip"),Timeline:b("./ac-eclipse/Timeline")}
},{"./ac-eclipse/Clip":355,"./ac-eclipse/Timeline":356}],355:[function(g,h,d){g("./helpers/Float32Array");
var b=g("./helpers/transitionEnd");var c=g("./clips/ClipEasing");var a=g("./clips/ClipInlineCss");
var i=g("./clips/ClipTransitionCss");function f(l,k,m,j){if(l.nodeType){if(b===undefined||(j&&j.inlineStyles)){return new a(l,k,m,j)
}return new i(l,k,m,j)}return new c(l,k,m,j)}h.exports=f},{"./clips/ClipEasing":357,"./clips/ClipInlineCss":358,"./clips/ClipTransitionCss":359,"./helpers/Float32Array":362,"./helpers/transitionEnd":372}],356:[function(b,c,a){arguments[4][217][0].apply(a,arguments)
},{"ac-clip":328,"ac-event-emitter":256,"ac-object":662,dup:217}],357:[function(b,a,c){var j=b("ac-object").clone;
var g=b("ac-object").create;var k=b("../helpers/isCssCubicBezierString");var f=b("../helpers/BezierCurveCssManager");
var h=b("ac-clip").Clip;var i="ease";function l(s,r,x,B){var u=j(B||{},true);var A=0;
var m={};var w={};var v=u.propsFrom||{};var z={};var n,q;if(k(u.ease)){u.ease=f.create(u.ease).toEasingFunction()
}if(u.propsEase){var o=u.ease||i;for(n in x){if(x.hasOwnProperty(n)){q=u.propsEase[n];
if(k(q)){q=f.create(u.propsEase[n]).toEasingFunction()}if(q===undefined){if(m[o]===undefined){m[o]={};
w[o]={};z[o]=o;A++}m[o][n]=x[n];w[o][n]=v[n]}else{if(typeof q==="function"){m[A]={};
w[A]={};m[A][n]=x[n];w[A][n]=v[n];z[A]=q;A++}else{if(m[q]===undefined){m[q]={};
w[q]={};z[q]=q;A++}m[q][n]=x[n];w[q][n]=v[n]}}}}}if(A>1){this._storeOnUpdate=u.onUpdate||null;
u.onUpdate=null;var t=u.onStart;var y=u.onDraw;var p=u.onComplete;u.onStart=null;
u.onDraw=null;u.onComplete=null;this._clips=[];for(q in m){if(m.hasOwnProperty(q)){u.ease=z[q];
u.propsFrom=w[q];this._clips.push(new h(s,r,m[q],u))}}u.onUpdate=this._onUpdate;
u.onStart=t;u.onDraw=y;u.onComplete=p;u.propsFrom=null;u.ease="linear";x={}}else{for(n in z){if(z.hasOwnProperty(n)){u.ease=z[n]
}}}h.call(this,s,r,x,u)}var d=l.prototype=g(h.prototype);d.reset=function(){var n=h.prototype.reset.call(this);
if(this._clips){var m=this._clips.length;while(m--){this._clips[m].reset()}}return n
};d.destroy=function(){var n=h.prototype.destroy.call(this);if(this._clips){var m=this._clips.length;
while(m--){this._clips[m].reset()}this._clips=null}this._eases=null;this._storeOnUpdate=null;
return n};d._onUpdate=function(m){var n=(this._direction===1)?m.progress:1-m.progress;
var o=this._clips.length;while(o--){this._clips[o].setProgress(n)}if(typeof this._storeOnUpdate==="function"){this._storeOnUpdate.call(this,m)
}};a.exports=l},{"../helpers/BezierCurveCssManager":361,"../helpers/isCssCubicBezierString":368,"ac-clip":328,"ac-object":662}],358:[function(f,c,g){var b=f("../helpers/convertToStyleObject");
var d=f("../helpers/convertToTransitionableObjects");var l=f("ac-object").clone;
var j=f("ac-object").create;var k=f("../helpers/removeTransitions");var i=f("../helpers/BezierCurveCssManager");
var n=f("./ClipEasing");var m=f("ac-dom-styles");function a(r,p,t,x){var s=l(x||{},true);
this._el=r;var v=d(this._el,t||{},s.propsFrom||{});this._styles=v.target;this._stylesFrom=v.propsFrom;
t=v.propsTo;var o;this._storeOnStart=s.onStart||null;this._storeOnDraw=s.onDraw||null;
this._storeOnComplete=s.onComplete||null;s.onStart=this._onStart;s.onDraw=this._onDraw;
s.onComplete=this._onComplete;s.propsFrom=v.propsFrom;n.call(this,this._styles,p,t,s);
k(this._el,this._styles);var u=(this._isYoyo)?this._stylesFrom:t;this._completeStyles=b(u);
if(s.removeStylesOnComplete!==undefined){var w=s.removeStylesOnComplete;if(typeof w==="boolean"&&w){for(o in this._completeStyles){if(this._completeStyles.hasOwnProperty(o)){this._completeStyles[o]=null
}}}else{if(typeof w==="object"&&w.length){var q=w.length;while(q--){o=w[q];if(this._completeStyles.hasOwnProperty(o)){this._completeStyles[o]=null
}}}}}}var h=a.prototype=j(n.prototype);h.reset=function(){var o=n.prototype.reset.call(this);
m.setStyle(this._el,b(this._styles));return o};h.destroy=function(){var o=n.prototype.destroy.call(this);
this._el=null;this._styles=null;this._stylesFrom=null;this._stylesTo=null;this._completeStyles=null;
this._storeOnStart=null;this._storeOnDraw=null;this._storeOnComplete=null;return o
};h.getTarget=function(){return this._el};h._onStart=function(o){if(this.isPlaying()&&this._direction===1){m.setStyle(this._el,b(this._stylesFrom))
}if(typeof this._storeOnStart==="function"){this._storeOnStart.call(this,o)}};h._onDraw=function(o){m.setStyle(this._el,b(this._styles));
if(typeof this._storeOnDraw==="function"){this._storeOnDraw.call(this,o)}};h._onComplete=function(o){m.setStyle(this._el,this._completeStyles);
if(typeof this._storeOnComplete==="function"){this._storeOnComplete.call(this,o)
}};c.exports=a},{"../helpers/BezierCurveCssManager":361,"../helpers/convertToStyleObject":364,"../helpers/convertToTransitionableObjects":365,"../helpers/removeTransitions":369,"./ClipEasing":357,"ac-dom-styles":315,"ac-object":662}],359:[function(i,a,u){var c=i("../helpers/convertToStyleObject");
var m=i("../helpers/convertToTransitionableObjects");var s=i("ac-object").clone;
var k=i("ac-object").create;var p=i("ac-easing").createPredefined;var j=i("../helpers/isCssCubicBezierString");
var q=i("../helpers/removeTransitions");var g=i("../helpers/splitUnits");var b=i("../helpers/toCamCase");
var h=i("../helpers/transitionEnd");var l=i("../helpers/waitAnimationFrames");var r=i("../helpers/BezierCurveCssManager");
var o=i("./ClipEasing");var t=i("ac-dom-styles");var d="ease";function f(B,y,D,H){var C=s(H||{},true);
this._el=B;var E=m(this._el,D||{},C.propsFrom||{});this._styles=E.target;this._propsTo=E.propsTo;
this._propsFrom=E.propsFrom;this._storeOnStart=C.onStart||null;this._storeOnComplete=C.onComplete||null;
C.onStart=this._onStart;C.onComplete=this._onComplete;C.propsFrom=this._propsFrom;
this._stylesTo=s(this._propsTo,true);this._stylesFrom=s(this._propsFrom,true);C.ease=C.ease||d;
this._eases={};this._propsArray=[];this._propsComplete={};var G;var x;var w=c(this._stylesTo);
var A=c(this._stylesFrom);this._propsEase=s(C.propsEase||{},true);var v;for(v in this._stylesTo){if(this._stylesTo.hasOwnProperty(v)){this._propsArray[this._propsArray.length]=v;
this._propsComplete[b(v)]={"1":w[v],"-1":A[v]};if(this._propsEase[v]===undefined){if(this._eases[C.ease]===undefined){G=this._convertEase(C.ease);
this._eases[C.ease]=G.css;x=G.js}this._propsEase[v]=C.ease}else{if(this._eases[this._propsEase[v]]===undefined){G=this._convertEase(this._propsEase[v]);
this._eases[this._propsEase[v]]=G.css;C.propsEase[v]=G.js}else{if(j(this._propsEase[v])){C.propsEase[v]=this._eases[this._propsEase[v]]["1"].toEasingFunction()
}}}}}C.ease=x;o.call(this,this._styles,y,this._propsTo,C);this._onTransitionEnded=this._onTransitionEnded.bind(this);
this.on("pause",this._onPaused);q(this._el,this._stylesTo);this._otherTransitions=t.getStyle(this._el,"transition").transition;
if(this._otherTransitions===null||this._otherTransitions==="all 0s ease 0s"){this._otherTransitions=""
}this._completeStyles={transition:this._otherTransitions};if(C.removeStylesOnComplete!==undefined){var F=C.removeStylesOnComplete;
if(typeof F==="boolean"&&F){for(v in this._stylesTo){this._completeStyles[v]=null
}}else{if(typeof F==="object"&&F.length){var z=F.length;while(z--){this._completeStyles[F[z]]=null
}}}}}var n=f.prototype=k(o.prototype);n.reset=function(){var v=o.prototype.reset.call(this);
this._applyStyles(0,c(this._target));return v};n.destroy=function(){var v=o.prototype.destroy.call(this);
this._removeTransitionListener();this._el=null;this._propsArray=null;this._propsComplete=null;
this._styles=null;this._stylesFrom=null;this._stylesTo=null;this._completeStyles=null;
this._storeOnStart=null;this._storeOnComplete=null;this._onTransitionEnded=null;
return v};n.getTarget=function(){return this._el};n.setProgress=function(v){var w=o.prototype.setProgress.call(this,v);
this._applyStyles(0,c(this._target));if(this.isPlaying()){l(function(){if(this.isPlaying()){var y=this._duration*(1-this.getProgress());
var x=c((this._direction>0)?this._stylesTo:this._stylesFrom);this._applyStyles(y,x)
}}.bind(this),2)}return w};n._convertEase=function(x){var v;var w;if(j(x)){v=r.create(x);
w=v.toEasingFunction()}else{v=r.create(p(x).cssString);w=x}return{css:{"1":v,"-1":v.reversed()},js:w}
};n._stop=function(){this._removeTransitionListener();o.prototype._stop.call(this)
};n._complete=function(){if(this._isComplete()){o.prototype._complete.call(this)
}else{this._el.addEventListener(h,this._onTransitionEnded)}};n._onTransitionEnded=function(){this._removeTransitionListener();
o.prototype._complete.call(this)};n._removeTransitionListener=function(){if(this._el&&this._onTransitionEnded){this._el.removeEventListener(h,this._onTransitionEnded)
}};n._isComplete=function(){var v=t.getStyle.apply(this,[this._el].concat([this._propsArray]));
v.transform=null;var w;var x;for(x in v){if(v.hasOwnProperty(x)&&v[x]!==null){w=this._propsComplete[x][this._direction];
if(v[x]!==w&&this._el.style[x]!==w&&String(g(v[x]).value)!==w){return false}}}return true
};n._applyStyles=function(x,v){if(x>0){var y=this._otherTransitions+((this._otherTransitions.length)?", ":"");
var w={};var z;for(z in this._eases){if(this._eases.hasOwnProperty(z)){w[z]=this._eases[z][this._direction].splitAt(this.getProgress()).toCSSString()
}}for(z in this._stylesTo){if(this._stylesTo.hasOwnProperty(z)){y+=z+" "+x+"ms "+w[this._propsEase[z]]+" 0ms, "
}}v.transition=y.substr(0,y.length-2)}else{v.transition=this._otherTransitions}t.setStyle(this._el,v)
};n._onPaused=function(v){var w=t.getStyle.apply(this,[this._el].concat([this._propsArray]));
w.transition=this._otherTransitions;t.setStyle(this._el,w)};n._onStart=function(v){var w=(this._direction===1&&this.getProgress()===0)?2:0;
if(w){this._applyStyles(0,c(this._stylesFrom))}l(function(){if(this.isPlaying()){var y=this._duration*(1-this.getProgress());
var x=c((this._direction>0)?this._stylesTo:this._stylesFrom);this._applyStyles(y,x)
}}.bind(this),w);if(typeof this._storeOnStart==="function"){this._storeOnStart.call(this,v)
}};n._onComplete=function(v){t.setStyle(this._el,this._completeStyles);if(typeof this._storeOnComplete==="function"){this._storeOnComplete.call(this,v)
}};a.exports=f},{"../helpers/BezierCurveCssManager":361,"../helpers/convertToStyleObject":364,"../helpers/convertToTransitionableObjects":365,"../helpers/isCssCubicBezierString":368,"../helpers/removeTransitions":369,"../helpers/splitUnits":370,"../helpers/toCamCase":371,"../helpers/transitionEnd":372,"../helpers/waitAnimationFrames":373,"./ClipEasing":357,"ac-dom-styles":315,"ac-easing":343,"ac-object":662}],360:[function(b,c,a){arguments[4][221][0].apply(a,arguments)
},{"ac-easing":343,dup:221}],361:[function(b,c,a){arguments[4][222][0].apply(a,arguments)
},{"./BezierCurveCss":360,dup:222}],362:[function(b,c,a){arguments[4][223][0].apply(a,arguments)
},{dup:223}],363:[function(b,c,a){arguments[4][225][0].apply(a,arguments)},{"./splitUnits":370,"ac-dom-metrics":284,dup:225}],364:[function(b,c,a){c.exports=function d(g){var f={};
var h;for(h in g){if(g.hasOwnProperty(h)&&g[h]!==null){if(g[h].isColor){f[h]="rgb("+Math.round(g[h].r)+", "+Math.round(g[h].g)+", "+Math.round(g[h].b)+")"
}else{if(h==="transform"){f[h]="matrix("+g[h].join(",")+")"}else{f[h]=g[h].value+g[h].unit
}}}}return f}},{}],365:[function(g,c,j){var l=g("ac-object").clone;var h=g("./cssColorNames");
var d=g("./splitUnits");var b=g("./toCamCase");var o=g("ac-color");var n=g("ac-dom-styles");
var k=g("ac-feature");var i=g("ac-transform").Transform;var a=g("./TransformMatrix");
var m=function(p){if(h[p]){p=h[p]}else{if(o.isHex(p)){p=o.hexToRgb(p)}p=o.rgbToObject(p)
}p.isColor=true;return p};c.exports=function f(r,x,w){var t={};x=l(x,true);w=l(w,true);
var q;var y,u,v;var s=k.cssPropertyAvailable("transform");var p;for(p in x){if(x.hasOwnProperty(p)&&x[p]!==null){if(p==="transform"){if(s){y=new i();
q=n.getStyle(r,"transform")["transform"]||"none";y.setMatrixValue(q);u=new a(new i(),r,x[p])
}if(u&&u.toCSSString()!==y.toCSSString()){v=new a(w[p]?new i():y.clone(),r,w[p]);
t[p]=y.toArray();x[p]=u.toArray();w[p]=v.toArray()}else{t[p]=null;x[p]=null}}else{q=n.getStyle(r,p)[b(p)];
if(o.isColor(q)){t[p]=m(q);w[p]=(w[p]!==undefined)?m(w[p]):l(t[p],true);x[p]=m(x[p])
}else{t[p]=d(q);w[p]=(w[p]!==undefined)?d(w[p]):l(t[p],true);x[p]=d(x[p])}}}}for(p in w){if(w.hasOwnProperty(p)&&w[p]!==null&&(x[p]===undefined||x[p]===null)){if(p==="transform"){if(s){y=new i();
y.setMatrixValue(getComputedStyle(r).transform||getComputedStyle(r).webkitTransform||"none");
v=new a(new i(),r,w[p])}if(v&&v.toCSSString()!==y.toCSSString()){u=new a(y.clone());
t[p]=y.toArray();x[p]=u.toArray();w[p]=v.toArray()}else{t[p]=null;x[p]=null;w[p]=null
}}else{q=n.getStyle(r,p)[b(p)];if(o.isColor(q)){t[p]=m(q);x[p]=l(t[p],true);w[p]=m(w[p])
}else{t[p]=d(q);w[p]=d(w[p]);x[p]=l(t[p],true)}}}}return{target:t,propsTo:x,propsFrom:w}
}},{"./TransformMatrix":363,"./cssColorNames":366,"./splitUnits":370,"./toCamCase":371,"ac-color":330,"ac-dom-styles":315,"ac-feature":453,"ac-object":662,"ac-transform":352}],366:[function(b,d,a){var c={aqua:{r:0,g:255,b:255},aliceblue:{r:240,g:248,b:255},antiquewhite:{r:250,g:235,b:215},black:{r:0,g:0,b:0},blue:{r:0,g:0,b:255},cyan:{r:0,g:255,b:255},darkblue:{r:0,g:0,b:139},darkcyan:{r:0,g:139,b:139},darkgreen:{r:0,g:100,b:0},darkturquoise:{r:0,g:206,b:209},deepskyblue:{r:0,g:191,b:255},green:{r:0,g:128,b:0},lime:{r:0,g:255,b:0},mediumblue:{r:0,g:0,b:205},mediumspringgreen:{r:0,g:250,b:154},navy:{r:0,g:0,b:128},springgreen:{r:0,g:255,b:127},teal:{r:0,g:128,b:128},midnightblue:{r:25,g:25,b:112},dodgerblue:{r:30,g:144,b:255},lightseagreen:{r:32,g:178,b:170},forestgreen:{r:34,g:139,b:34},seagreen:{r:46,g:139,b:87},darkslategray:{r:47,g:79,b:79},darkslategrey:{r:47,g:79,b:79},limegreen:{r:50,g:205,b:50},mediumseagreen:{r:60,g:179,b:113},turquoise:{r:64,g:224,b:208},royalblue:{r:65,g:105,b:225},steelblue:{r:70,g:130,b:180},darkslateblue:{r:72,g:61,b:139},mediumturquoise:{r:72,g:209,b:204},indigo:{r:75,g:0,b:130},darkolivegreen:{r:85,g:107,b:47},cadetblue:{r:95,g:158,b:160},cornflowerblue:{r:100,g:149,b:237},mediumaquamarine:{r:102,g:205,b:170},dimgray:{r:105,g:105,b:105},dimgrey:{r:105,g:105,b:105},slateblue:{r:106,g:90,b:205},olivedrab:{r:107,g:142,b:35},slategray:{r:112,g:128,b:144},slategrey:{r:112,g:128,b:144},lightslategray:{r:119,g:136,b:153},lightslategrey:{r:119,g:136,b:153},mediumslateblue:{r:123,g:104,b:238},lawngreen:{r:124,g:252,b:0},aquamarine:{r:127,g:255,b:212},chartreuse:{r:127,g:255,b:0},gray:{r:128,g:128,b:128},grey:{r:128,g:128,b:128},maroon:{r:128,g:0,b:0},olive:{r:128,g:128,b:0},purple:{r:128,g:0,b:128},lightskyblue:{r:135,g:206,b:250},skyblue:{r:135,g:206,b:235},blueviolet:{r:138,g:43,b:226},darkmagenta:{r:139,g:0,b:139},darkred:{r:139,g:0,b:0},saddlebrown:{r:139,g:69,b:19},darkseagreen:{r:143,g:188,b:143},lightgreen:{r:144,g:238,b:144},mediumpurple:{r:147,g:112,b:219},darkviolet:{r:148,g:0,b:211},palegreen:{r:152,g:251,b:152},darkorchid:{r:153,g:50,b:204},yellowgreen:{r:154,g:205,b:50},sienna:{r:160,g:82,b:45},brown:{r:165,g:42,b:42},darkgray:{r:169,g:169,b:169},darkgrey:{r:169,g:169,b:169},greenyellow:{r:173,g:255,b:47},lightblue:{r:173,g:216,b:230},paleturquoise:{r:175,g:238,b:238},lightsteelblue:{r:176,g:196,b:222},powderblue:{r:176,g:224,b:230},firebrick:{r:178,g:34,b:34},darkgoldenrod:{r:184,g:134,b:11},mediumorchid:{r:186,g:85,b:211},rosybrown:{r:188,g:143,b:143},darkkhaki:{r:189,g:183,b:107},silver:{r:192,g:192,b:192},mediumvioletred:{r:199,g:21,b:133},indianred:{r:205,g:92,b:92},peru:{r:205,g:133,b:63},chocolate:{r:210,g:105,b:30},tan:{r:210,g:180,b:140},lightgray:{r:211,g:211,b:211},lightgrey:{r:211,g:211,b:211},thistle:{r:216,g:191,b:216},goldenrod:{r:218,g:165,b:32},orchid:{r:218,g:112,b:214},palevioletred:{r:219,g:112,b:147},crimson:{r:220,g:20,b:60},gainsboro:{r:220,g:220,b:220},plum:{r:221,g:160,b:221},burlywood:{r:222,g:184,b:135},lightcyan:{r:224,g:255,b:255},lavender:{r:230,g:230,b:250},darksalmon:{r:233,g:150,b:122},palegoldenrod:{r:238,g:232,b:170},violet:{r:238,g:130,b:238},azure:{r:240,g:255,b:255},honeydew:{r:240,g:255,b:240},khaki:{r:240,g:230,b:140},lightcoral:{r:240,g:128,b:128},sandybrown:{r:244,g:164,b:96},beige:{r:245,g:245,b:220},mintcream:{r:245,g:255,b:250},wheat:{r:245,g:222,b:179},whitesmoke:{r:245,g:245,b:245},ghostwhite:{r:248,g:248,b:255},lightgoldenrodyellow:{r:250,g:250,b:210},linen:{r:250,g:240,b:230},salmon:{r:250,g:128,b:114},oldlace:{r:253,g:245,b:230},bisque:{r:255,g:228,b:196},blanchedalmond:{r:255,g:235,b:205},coral:{r:255,g:127,b:80},cornsilk:{r:255,g:248,b:220},darkorange:{r:255,g:140,b:0},deeppink:{r:255,g:20,b:147},floralwhite:{r:255,g:250,b:240},fuchsia:{r:255,g:0,b:255},gold:{r:255,g:215,b:0},hotpink:{r:255,g:105,b:180},ivory:{r:255,g:255,b:240},lavenderblush:{r:255,g:240,b:245},lemonchiffon:{r:255,g:250,b:205},lightpink:{r:255,g:182,b:193},lightsalmon:{r:255,g:160,b:122},lightyellow:{r:255,g:255,b:224},magenta:{r:255,g:0,b:255},mistyrose:{r:255,g:228,b:225},moccasin:{r:255,g:228,b:181},navajowhite:{r:255,g:222,b:173},orange:{r:255,g:165,b:0},orangered:{r:255,g:69,b:0},papayawhip:{r:255,g:239,b:213},peachpuff:{r:255,g:218,b:185},pink:{r:255,g:192,b:203},red:{r:255,g:0,b:0},seashell:{r:255,g:245,b:238},snow:{r:255,g:250,b:250},tomato:{r:255,g:99,b:71},white:{r:255,g:255,b:255},yellow:{r:255,g:255,b:0},rebeccapurple:{r:102,g:51,b:153}};
d.exports=c},{}],367:[function(b,c,a){arguments[4][228][0].apply(a,arguments)},{dup:228}],368:[function(b,c,a){arguments[4][229][0].apply(a,arguments)
},{dup:229}],369:[function(b,c,a){arguments[4][230][0].apply(a,arguments)},{"./getShorthandTransition":367,"ac-dom-styles":315,dup:230}],370:[function(b,c,a){arguments[4][231][0].apply(a,arguments)
},{dup:231}],371:[function(b,c,a){arguments[4][232][0].apply(a,arguments)},{dup:232}],372:[function(b,c,a){arguments[4][233][0].apply(a,arguments)
},{dup:233}],373:[function(c,d,a){d.exports=function b(i,h){if(h){var g=0;var f=function(){if(g===h){i.call(this)
}else{++g;window.requestAnimationFrame(f)}};f()}else{i.call(this)}}},{}],374:[function(b,c,a){c.exports={flatten:b("./ac-array/flatten"),intersection:b("./ac-array/intersection"),toArray:b("./ac-array/toArray"),union:b("./ac-array/union"),unique:b("./ac-array/unique"),without:b("./ac-array/without")}
},{"./ac-array/flatten":375,"./ac-array/intersection":376,"./ac-array/toArray":377,"./ac-array/union":378,"./ac-array/unique":379,"./ac-array/without":380}],375:[function(b,c,a){c.exports=function d(h){var f=[];
var g=function(i){if(Array.isArray(i)){i.forEach(g)}else{f.push(i)}};h.forEach(g);
return f}},{}],376:[function(b,c,a){c.exports=function d(n){if(!n){return[]}var m=arguments.length;
var k=0;var g=n.length;var f=[];var l;for(k;k<g;k++){l=n[k];if(f.indexOf(l)>-1){continue
}for(var h=1;h<m;h++){if(arguments[h].indexOf(l)<0){break}}if(h===m){f.push(l)}}return f
}},{}],377:[function(b,d,a){d.exports=function c(f){return Array.prototype.slice.call(f)
}},{}],378:[function(b,c,a){var g=b("./flatten");var f=b("./unique");c.exports=function d(h){return f(g(Array.prototype.slice.call(arguments)))
}},{"./flatten":375,"./unique":379}],379:[function(b,c,a){c.exports=function d(g){var f=function(h,i){if(h.indexOf(i)<0){h.push(i)
}return h};return g.reduce(f,[])}},{}],380:[function(b,d,a){d.exports=function c(f,n,m){var k;
var h=f.indexOf(n);var l=f.length;if(h>=0){if(m){k=f.slice(0,l);var j,g=0;for(j=h;
j<l;j++){if(f[j]===n){k.splice(j-g,1);g++}}}else{if(h===(l-1)){k=f.slice(0,(l-1))
}else{if(h===0){k=f.slice(1)}else{k=f.slice(0,h);k=k.concat(f.slice(h+1))}}}}else{return f
}return k}},{}],381:[function(b,c,a){arguments[4][235][0].apply(a,arguments)},{"./ac-dom-emitter/DOMEmitter":382,dup:235}],382:[function(b,c,a){arguments[4][236][0].apply(a,arguments)
},{"ac-event-emitter":256,dup:236}],383:[function(c,d,b){var a=c("./ac-dom-styles/vendorTransformHelper");
var f={};f.setStyle=function(h,i){var g;var j;var k;if((typeof i!=="string"&&typeof i!=="object")||Array.isArray(i)){throw new TypeError("styles argument must be either an object or a string")
}g=f.setStyle.__explodeStyleStringToObject(i);for(k in g){if(g.hasOwnProperty(k)){j=k.replace(/-(\w)/g,f.setStyle.__camelCaseReplace);
f.setStyle.__setStyle(h,j,g,g[k])}}return h};f.setStyle.__explodeStyleStringToObject=function(l){var j=(typeof l==="object")?l:{};
var m;var k;var g;var h;if(typeof l==="string"){m=l.split(";");g=m.length;for(h=0;
h<g;h+=1){k=m[h].indexOf(":");if(k>0){j[m[h].substr(0,k).trim()]=m[h].substr(k+1).trim()
}}}return j};f.setStyle.__setStyle=function(i,j,h,g){if(typeof i.style[j]!=="undefined"){i.style[j]=g
}};f.setStyle.__camelCaseReplace=function(h,i,j,g){return(j===0)&&(g.substr(1,3)!=="moz")?i:i.toUpperCase()
};f.getStyle=function(h,j,g){var i;j=j.replace(/-(\w)/g,f.setStyle.__camelCaseReplace);
j=(j==="float")?"cssFloat":j;g=g||window.getComputedStyle(h,null);i=g?g[j]:null;
if(j==="opacity"){return i?parseFloat(i):1}return i==="auto"?null:i};f.setVendorPrefixStyle=function(g,j,i){if(typeof j!=="string"){throw new TypeError("ac-dom-styles.setVendorPrefixStyle: property must be a string")
}if(typeof i!=="string"&&typeof i!=="number"){throw new TypeError("ac-dom-styles.setVendorPrefixStyle: value must be a string or a number")
}var h=["","webkit","Moz","ms","O"];var l;var k;i+="";j=j.replace(/-(webkit|moz|ms|o)-/i,"");
j=j.replace(/^(webkit|Moz|ms|O)/,"");j=j.charAt(0).toLowerCase()+j.slice(1);j=j.replace(/-(\w)/,function(m,n){return n.toUpperCase()
});i=i.replace(/-(webkit|moz|ms|o)-/,"-vendor-");h.forEach(function(m){l=(m==="")?j:m+j.charAt(0).toUpperCase()+j.slice(1);
k=(m==="")?i.replace("-vendor-",""):i.replace("-vendor-","-"+m.charAt(0).toLowerCase()+m.slice(1)+"-");
if(l in g.style){f.setStyle(g,l+":"+k)}})};f.getVendorPrefixStyle=function(h,j){if(typeof j!=="string"){throw new TypeError("ac-dom-styles.getVendorPrefixStyle: property must be a string")
}var i=["","webkit","Moz","ms","O"];var g;j=j.replace(/-(webkit|moz|ms|o)-/i,"");
j=j.replace(/^(webkit|Moz|ms|O)/,"").charAt(0).toLowerCase()+j.slice(1);j=j.replace(/-(\w)/,function(k,l){return l.toUpperCase()
});i.some(function(l,k){var m=(l==="")?j:l+j.charAt(0).toUpperCase()+j.slice(1);
if(m in h.style){g=f.getStyle(h,m);return true}});return g};f.setVendorPrefixTransform=function(g,h){if((typeof h!=="string"&&typeof h!=="object")||Array.isArray(h)||h===null){throw new TypeError("ac-dom-styles.setVendorPrefixTransform: transformFunctions argument must be either an object or a string")
}f.setVendorPrefixStyle(g,"transform",a.convert2dFunctions(h))};c("./ac-dom-styles/ie")(f);
d.exports=f},{"./ac-dom-styles/ie":384,"./ac-dom-styles/vendorTransformHelper":385}],384:[function(b,c,a){c.exports=function(d){if(typeof window.getComputedStyle!=="function"){d.getStyle=function(i,h,g){var f;
var j;g=g||i.currentStyle;if(g){h=h.replace(/-(\w)/g,d.setStyle.__camelCaseReplace);
h=h==="float"?"styleFloat":h;j=g[h]||null;return j==="auto"?null:j}}}}},{}],385:[function(c,d,b){var a={__objectifiedFunctions:{},__paramMaps:{translate:"p1, p2, 0",translateX:"p1, 0, 0",translateY:"0, p1, 0",scale:"p1, p2, 1",scaleX:"p1, 1, 1",scaleY:"1, p1, 1",rotate:"0, 0, 1, p1",matrix:"p1, p2, 0, 0, p3, p4, 0, 0, 0, 0, 1, 0, p5, p6, 0, 1"},convert2dFunctions:function(g){var f;
this.__init(g);for(var h in this.__objectifiedFunctions){if(this.__objectifiedFunctions.hasOwnProperty(h)){f=this.__objectifiedFunctions[h].replace(" ","").split(",");
if(h in this.__paramMaps){for(var i in this.__paramMaps){if(h===i){this.valuesToSet.push(this.__stripFunctionAxis(h)+"3d("+this.__map2DTransformParams(f,this.__paramMaps[h])+")")
}}}else{this.valuesToSet.push(h+"("+this.__objectifiedFunctions[h]+")")}}}return this.valuesToSet.join(" ")
},__init:function(f){this.valuesToSet=[];this.__objectifiedFunctions=(typeof f==="object")?f:{};
if(typeof f==="string"){this.__objectifiedFunctions=this.__objectifyFunctionString(f)
}},__map2DTransformParams:function(f,g){f.forEach(function(j,h){g=g.replace("p"+(h+1),j)
});return g},__splitFunctionStringToArray:function(f){return f.match(/[\w]+\(.+?\)/g)
},__splitFunctionNameAndParams:function(f){return f.match(/(.*)\((.*)\)/)},__stripFunctionAxis:function(f){return f.match(/([a-z]+)(|X|Y)$/)[1]
},__objectifyFunctionString:function(f){var g=this;var h;this.__splitFunctionStringToArray(f).forEach(function(i){h=g.__splitFunctionNameAndParams(i);
g.__objectifiedFunctions[h[1]]=h[2]});return this.__objectifiedFunctions}};d.exports=a
},{}],386:[function(b,c,a){var g=b("ac-dom-styles");var h={};var f=function(){return{x:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft,y:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop}
};var d=function(){return{height:window.innerHeight||document.documentElement.clientHeight,width:window.innerWidth||document.documentElement.clientWidth}
};h.cumulativeOffset=function(j){var k=h.getBoundingBox(j);var i=f();var l=[k.top+i.y,k.left+i.x];
l.top=l[0];l.left=l[1];return l};h.getBoundingBox=function(k){var l=k.getBoundingClientRect();
var j=l.width||l.right-l.left;var i=l.height||l.bottom-l.top;return{top:l.top,right:l.right,bottom:l.bottom,left:l.left,width:j,height:i}
};h.getInnerDimensions=function(n){var o=h.getBoundingBox(n);var m=o.width;var i=o.height;
var l;var j;var k=window.getComputedStyle?window.getComputedStyle(n,null):null;
["padding","border"].forEach(function(p){["Top","Right","Bottom","Left"].forEach(function(q){l=p==="border"?p+q+"Width":p+q;
j=parseFloat(g.getStyle(n,l,k));j=isNaN(j)?0:j;if(q==="Right"||q==="Left"){m-=j
}if(q==="Top"||q==="Bottom"){i-=j}})});return{width:m,height:i}};h.getOuterDimensions=function(l){var n=h.getBoundingBox(l);
var k=n.width;var i=n.height;var m;var j=window.getComputedStyle?window.getComputedStyle(l,null):null;
["margin"].forEach(function(o){["Top","Right","Bottom","Left"].forEach(function(p){m=parseFloat(g.getStyle(l,o+p,j));
m=isNaN(m)?0:m;if(p==="Right"||p==="Left"){k+=m}if(p==="Top"||p==="Bottom"){i+=m
}})});return{width:k,height:i}};h.pixelsInViewport=function(k,j){var l;var m=d();
j=j||h.getBoundingBox(k);var i=j.top;if(i>=0){l=m.height-i;if(l>j.height){l=j.height
}}else{l=j.height+i}if(l<0){l=0}if(l>m.height){l=m.height}return l};h.percentInViewport=function(j){var i=h.getBoundingBox(j);
var k=h.pixelsInViewport(j,i);return k/i.height};h.isInViewport=function(k,j){var i=h.percentInViewport(k);
if(typeof j!=="number"||1<j||j<0){j=0}return(i>j||i===1)};b("./ac-dom-metrics/ie")(h);
c.exports=h},{"./ac-dom-metrics/ie":387,"ac-dom-styles":383}],387:[function(b,c,a){c.exports=function(d){if(!("getBoundingClientRect" in document.createElement("_"))){d.getBoundingBox=function(h){var j=h.offsetLeft;
var i=h.offsetTop;var g=h.offsetWidth;var f=h.offsetHeight;return{top:i,right:j+g,bottom:i+f,left:j,width:g,height:f}
}}}},{}],388:[function(b,c,a){arguments[4][2][0].apply(a,arguments)},{dup:2}],389:[function(b,c,a){arguments[4][244][0].apply(a,arguments)
},{"./ac-object/clone":390,"./ac-object/create":391,"./ac-object/defaults":392,"./ac-object/extend":393,"./ac-object/getPrototypeOf":394,"./ac-object/isDate":395,"./ac-object/isEmpty":396,"./ac-object/isRegExp":397,"./ac-object/toQueryParameters":398,dup:244}],390:[function(b,c,a){arguments[4][245][0].apply(a,arguments)
},{"./extend":393,dup:245}],391:[function(b,c,a){arguments[4][246][0].apply(a,arguments)
},{dup:246}],392:[function(b,c,a){arguments[4][247][0].apply(a,arguments)},{"./extend":393,dup:247}],393:[function(b,c,a){arguments[4][248][0].apply(a,arguments)
},{dup:248}],394:[function(b,c,a){arguments[4][249][0].apply(a,arguments)},{dup:249}],395:[function(b,c,a){arguments[4][250][0].apply(a,arguments)
},{dup:250}],396:[function(b,c,a){arguments[4][251][0].apply(a,arguments)},{dup:251}],397:[function(b,c,a){arguments[4][252][0].apply(a,arguments)
},{dup:252}],398:[function(b,c,a){arguments[4][253][0].apply(a,arguments)},{dup:253,qs:388}],399:[function(b,d,a){var c={};
c.addEventListener=function(j,h,i,g){if(j.addEventListener){j.addEventListener(h,i,g)
}else{if(j.attachEvent){j.attachEvent("on"+h,i)}else{j["on"+h]=i}}return j};c.dispatchEvent=function(h,g){if(document.createEvent){h.dispatchEvent(new CustomEvent(g))
}else{h.fireEvent("on"+g,document.createEventObject())}return h};c.removeEventListener=function(j,h,i,g){if(j.removeEventListener){j.removeEventListener(h,i,g)
}else{j.detachEvent("on"+h,i)}return j};var f=/^(webkit|moz|ms|o)/i;c.addVendorPrefixEventListener=function(j,h,i,g){if(f.test(h)){h=h.replace(f,"")
}else{h=h.charAt(0).toUpperCase()+h.slice(1)}if(/WebKit/i.test(window.navigator.userAgent)){return c.addEventListener(j,"webkit"+h,i,g)
}else{if(/Opera/i.test(window.navigator.userAgent)){return c.addEventListener(j,"O"+h,i,g)
}else{if(/Gecko/i.test(window.navigator.userAgent)){return c.addEventListener(j,h.toLowerCase(),i,g)
}else{h=h.charAt(0).toLowerCase()+h.slice(1);return c.addEventListener(j,h,i,g)
}}}};c.removeVendorPrefixEventListener=function(j,h,i,g){if(f.test(h)){h=h.replace(f,"")
}else{h=h.charAt(0).toUpperCase()+h.slice(1)}c.removeEventListener(j,"webkit"+h,i,g);
c.removeEventListener(j,"O"+h,i,g);c.removeEventListener(j,h.toLowerCase(),i,g);
h=h.charAt(0).toLowerCase()+h.slice(1);return c.removeEventListener(j,h,i,g)};c.stop=function(g){if(!g){g=window.event
}if(g.stopPropagation){g.stopPropagation()}else{g.cancelBubble=true}if(g.preventDefault){g.preventDefault()
}g.stopped=true;g.returnValue=false};c.target=function(g){return(typeof g.target!=="undefined")?g.target:g.srcElement
};d.exports=c},{}],400:[function(b,c,a){var d={querySelector:b("./ac-dom-traversal/querySelector"),querySelectorAll:b("./ac-dom-traversal/querySelectorAll"),ancestor:b("./ac-dom-traversal/ancestor"),ancestors:b("./ac-dom-traversal/ancestors"),children:b("./ac-dom-traversal/children"),firstChild:b("./ac-dom-traversal/firstChild"),lastChild:b("./ac-dom-traversal/lastChild"),siblings:b("./ac-dom-traversal/siblings"),nextSibling:b("./ac-dom-traversal/nextSibling"),nextSiblings:b("./ac-dom-traversal/nextSiblings"),previousSibling:b("./ac-dom-traversal/previousSibling"),previousSiblings:b("./ac-dom-traversal/previousSiblings"),filterBySelector:b("./ac-dom-traversal/filterBySelector"),matchesSelector:b("./ac-dom-traversal/matchesSelector")};
b("./ac-dom-traversal/shims/ie")(d);c.exports=d},{"./ac-dom-traversal/ancestor":401,"./ac-dom-traversal/ancestors":402,"./ac-dom-traversal/children":403,"./ac-dom-traversal/filterBySelector":404,"./ac-dom-traversal/firstChild":405,"./ac-dom-traversal/lastChild":408,"./ac-dom-traversal/matchesSelector":409,"./ac-dom-traversal/nextSibling":410,"./ac-dom-traversal/nextSiblings":411,"./ac-dom-traversal/previousSibling":412,"./ac-dom-traversal/previousSiblings":413,"./ac-dom-traversal/querySelector":414,"./ac-dom-traversal/querySelectorAll":415,"./ac-dom-traversal/shims/ie":416,"./ac-dom-traversal/siblings":417}],401:[function(d,g,c){var a=d("ac-dom-nodes");
var b=d("./matchesSelector");var h=d("./helpers/validate");g.exports=function f(j,i){h.childNode(j,true,"ancestors");
h.selector(i,false,"ancestors");if(j!==document.body){while((j=j.parentNode)&&a.isElement(j)){if(!i||b(j,i)){return j
}if(j===document.body){break}}}return null}},{"./helpers/validate":407,"./matchesSelector":409,"ac-dom-nodes":295}],402:[function(d,f,c){var a=d("ac-dom-nodes");
var b=d("./matchesSelector");var h=d("./helpers/validate");f.exports=function g(k,i){var j=[];
h.childNode(k,true,"ancestors");h.selector(i,false,"ancestors");if(k!==document.body){while((k=k.parentNode)&&a.isElement(k)){if(!i||b(k,i)){j.push(k)
}if(k===document.body){break}}}return j}},{"./helpers/validate":407,"./matchesSelector":409,"ac-dom-nodes":295}],403:[function(d,g,c){var a=d("ac-dom-nodes");
var b=d("./filterBySelector");var h=d("./helpers/validate");g.exports=function f(k,i){var j;
h.parentNode(k,true,"children");h.selector(i,false,"children");j=k.children||k.childNodes;
j=a.filterByNodeType(j);if(i){j=b(j,i)}return j}},{"./filterBySelector":404,"./helpers/validate":407,"ac-dom-nodes":295}],404:[function(d,f,c){var b=d("./matchesSelector");
var g=d("./helpers/validate");f.exports=function a(i,h){g.selector(h,true,"filterBySelector");
i=Array.prototype.slice.call(i);return i.filter(function(j){return b(j,h)})}},{"./helpers/validate":407,"./matchesSelector":409}],405:[function(b,d,a){var c=b("./children");
var g=b("./helpers/validate");d.exports=function f(j,h){var i;g.parentNode(j,true,"firstChild");
g.selector(h,false,"firstChild");if(j.firstElementChild&&!h){return j.firstElementChild
}i=c(j,h);if(i.length){return i[0]}return null}},{"./children":403,"./helpers/validate":407}],406:[function(b,c,a){c.exports=window.Element?(function(d){return d.matches||d.matchesSelector||d.webkitMatchesSelector||d.mozMatchesSelector||d.msMatchesSelector||d.oMatchesSelector
}(Element.prototype)):null},{}],407:[function(d,b,f){var j=d("ac-dom-nodes");var a=function(m,l){if(!j.isNode(m)){return false
}if(typeof l==="number"){return(m.nodeType===l)}return(l.indexOf(m.nodeType)!==-1)
};var h=[j.ELEMENT_NODE,j.DOCUMENT_NODE,j.DOCUMENT_FRAGMENT_NODE];var i=" must be an Element, Document, or Document Fragment";
var k=[j.ELEMENT_NODE,j.TEXT_NODE,j.COMMENT_NODE];var g=" must be an Element, TextNode, or Comment";
var c=" must be a string";b.exports={parentNode:function(l,o,n,m){m=m||"node";if((l||o)&&!a(l,h)){throw new TypeError(n+": "+m+i)
}},childNode:function(l,o,n,m){m=m||"node";if(!l&&!o){return}if(!a(l,k)){throw new TypeError(n+": "+m+g)
}},selector:function(l,o,n,m){m=m||"selector";if((l||o)&&typeof l!=="string"){throw new TypeError(n+": "+m+c)
}}}},{"ac-dom-nodes":295}],408:[function(b,d,a){var c=b("./children");var g=b("./helpers/validate");
d.exports=function f(j,h){var i;g.parentNode(j,true,"lastChild");g.selector(h,false,"lastChild");
if(j.lastElementChild&&!h){return j.lastElementChild}i=c(j,h);if(i.length){return i[i.length-1]
}return null}},{"./children":403,"./helpers/validate":407}],409:[function(f,g,d){var b=f("ac-dom-nodes");
var a=f("./helpers/nativeMatches");var h=f("./helpers/validate");g.exports=function c(j,i){h.selector(i,true,"matchesSelector");
return b.isElement(j)?a.call(j,i):false}},{"./helpers/nativeMatches":406,"./helpers/validate":407,"ac-dom-nodes":295}],410:[function(d,f,c){var a=d("ac-dom-nodes");
var b=d("./matchesSelector");var h=d("./helpers/validate");f.exports=function g(j,i){h.childNode(j,true,"nextSibling");
h.selector(i,false,"nextSibling");if(j.nextElementSibling&&!i){return j.nextElementSibling
}while(j=j.nextSibling){if(a.isElement(j)){if(!i||b(j,i)){return j}}}return null
}},{"./helpers/validate":407,"./matchesSelector":409,"ac-dom-nodes":295}],411:[function(f,g,c){var a=f("ac-dom-nodes");
var b=f("./matchesSelector");var h=f("./helpers/validate");g.exports=function d(k,i){var j=[];
h.childNode(k,true,"nextSiblings");h.selector(i,false,"nextSiblings");while(k=k.nextSibling){if(a.isElement(k)){if(!i||b(k,i)){j.push(k)
}}}return j}},{"./helpers/validate":407,"./matchesSelector":409,"ac-dom-nodes":295}],412:[function(d,f,c){var a=d("ac-dom-nodes");
var b=d("./matchesSelector");var h=d("./helpers/validate");f.exports=function g(j,i){h.childNode(j,true,"previousSibling");
h.selector(i,false,"previousSibling");if(j.previousElementSibling&&!i){return j.previousElementSibling
}while(j=j.previousSibling){if(a.isElement(j)){if(!i||b(j,i)){return j}}}return null
}},{"./helpers/validate":407,"./matchesSelector":409,"ac-dom-nodes":295}],413:[function(d,f,c){var a=d("ac-dom-nodes");
var b=d("./matchesSelector");var h=d("./helpers/validate");f.exports=function g(k,i){var j=[];
h.childNode(k,true,"previousSiblings");h.selector(i,false,"previousSiblings");while(k=k.previousSibling){if(a.isElement(k)){if(!i||b(k,i)){j.push(k)
}}}return j.reverse()}},{"./helpers/validate":407,"./matchesSelector":409,"ac-dom-nodes":295}],414:[function(b,c,a){var f=b("./helpers/validate");
c.exports=function d(g,h){h=h||document;f.parentNode(h,true,"querySelector","context");
f.selector(g,true,"querySelector");return h.querySelector(g)}},{"./helpers/validate":407}],415:[function(b,c,a){var f=b("./helpers/validate");
c.exports=function d(g,h){h=h||document;f.parentNode(h,true,"querySelectorAll","context");
f.selector(g,true,"querySelectorAll");return Array.prototype.slice.call(h.querySelectorAll(g))
}},{"./helpers/validate":407}],416:[function(d,f,c){var g=d("../vendor/sizzle/sizzle");
var b=d("ac-dom-nodes");var a=d("../helpers/nativeMatches");var h=d("../helpers/validate");
f.exports=function(j,i){if(i||!("querySelectorAll" in document)){j.querySelectorAll=function(k,m){var l;
var n;m=m||document;h.parentNode(m,true,"querySelectorAll","context");h.selector(k,true,"querySelectorAll");
if(b.isDocumentFragment(m)){l=j.children(m);n=[];l.forEach(function(p){var o;if(g.matchesSelector(p,k)){n.push(p)
}o=g(k,p);if(o.length){n=n.concat(o)}});return n}return g(k,m)};j.querySelector=function(l,m){var k;
m=m||document;h.parentNode(m,true,"querySelector","context");h.selector(l,true,"querySelector");
k=j.querySelectorAll(l,m);return k.length?k[0]:null}}if(i||!a){j.matchesSelector=function(l,k){return g.matchesSelector(l,k)
}}}},{"../helpers/nativeMatches":406,"../helpers/validate":407,"../vendor/sizzle/sizzle":418,"ac-dom-nodes":295}],417:[function(b,d,a){var c=b("./children");
var g=b("./helpers/validate");d.exports=function f(j,h){var i=[];g.childNode(j,true,"siblings");
g.selector(h,false,"siblings");if(j.parentNode){i=c(j.parentNode,h);i=i.filter(function(k){return(k!==j)
})}return i}},{"./children":403,"./helpers/validate":407}],418:[function(b,c,a){
/*!
 * Sizzle CSS Selector Engine
 *  Copyright 2012, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
(function(ad,v){var ai,D,u,h,n,l=ad.document,o=l.documentElement,L="undefined",p=false,m=true,t=0,y=[].slice,ah=[].push,al=("sizcache"+Math.random()).replace(".",""),O="[\\x20\\t\\r\\n\\f]",x="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])",w="(?:[\\w#_-]|[^\\x00-\\xa0]|\\\\.)",aq="([*^$|!~]?=)",aa="\\["+O+"*("+x+"+)"+O+"*(?:"+aq+O+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+w+"+)|)|)"+O+"*\\]",ar=":("+x+"+)(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|(.*))\\)|)",Q=":(nth|eq|gt|lt|first|last|even|odd)(?:\\((\\d*)\\)|)(?=[^-]|$)",s=O+"*([\\x20\\t\\r\\n\\f>+~])"+O+"*",r="(?=[^\\x20\\t\\r\\n\\f])(?:\\\\.|"+aa+"|"+ar.replace(2,7)+"|[^\\\\(),])+",aj=new RegExp("^"+O+"+|((?:^|[^\\\\])(?:\\\\.)*)"+O+"+$","g"),U=new RegExp("^"+s),I=new RegExp(r+"?(?="+O+"*,|$)","g"),Y=new RegExp("^(?:(?!,)(?:(?:^|,)"+O+"*"+r+")*?|"+O+"*(.*?))(\\)|$)"),ao=new RegExp(r.slice(19,-6)+"\\x20\\t\\r\\n\\f>+~])+|"+s,"g"),Z=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,ae=/[\x20\t\r\n\f]*[+~]/,am=/:not\($/,E=/h\d/i,ab=/input|select|textarea|button/i,H=/\\(?!\\)/g,T={ID:new RegExp("^#("+x+"+)"),CLASS:new RegExp("^\\.("+x+"+)"),NAME:new RegExp("^\\[name=['\"]?("+x+"+)['\"]?\\]"),TAG:new RegExp("^("+x.replace("[-","[-\\*")+"+)"),ATTR:new RegExp("^"+aa),PSEUDO:new RegExp("^"+ar),CHILD:new RegExp("^:(only|nth|last|first)-child(?:\\("+O+"*(even|odd|(([+-]|)(\\d*)n|)"+O+"*(?:([+-]|)"+O+"*(\\d+)|))"+O+"*\\)|)","i"),POS:new RegExp(Q,"ig"),needsContext:new RegExp("^"+O+"*[>+~]|"+Q,"i")},ag={},F=[],A={},J=[],an=function(at){at.sizzleFilter=true;
return at},i=function(at){return function(au){return au.nodeName.toLowerCase()==="input"&&au.type===at
}},G=function(at){return function(av){var au=av.nodeName.toLowerCase();return(au==="input"||au==="button")&&av.type===at
}},W=function(at){var au=false,aw=l.createElement("div");try{au=at(aw)}catch(av){}aw=null;
return au},C=W(function(au){au.innerHTML="<select></select>";var at=typeof au.lastChild.getAttribute("multiple");
return at!=="boolean"&&at!=="string"}),f=W(function(au){au.id=al+0;au.innerHTML="<a name='"+al+"'></a><div name='"+al+"'></div>";
o.insertBefore(au,o.firstChild);var at=l.getElementsByName&&l.getElementsByName(al).length===2+l.getElementsByName(al+0).length;
n=!l.getElementById(al);o.removeChild(au);return at}),k=W(function(at){at.appendChild(l.createComment(""));
return at.getElementsByTagName("*").length===0}),S=W(function(at){at.innerHTML="<a href='#'></a>";
return at.firstChild&&typeof at.firstChild.getAttribute!==L&&at.firstChild.getAttribute("href")==="#"
}),R=W(function(at){at.innerHTML="<div class='hidden e'></div><div class='hidden'></div>";
if(!at.getElementsByClassName||at.getElementsByClassName("e").length===0){return false
}at.lastChild.className="e";return at.getElementsByClassName("e").length!==1});
var ac=function(aw,at,ay,aB){ay=ay||[];at=at||l;var az,au,aA,av,ax=at.nodeType;
if(ax!==1&&ax!==9){return[]}if(!aw||typeof aw!=="string"){return ay}aA=z(at);if(!aA&&!aB){if((az=Z.exec(aw))){if((av=az[1])){if(ax===9){au=at.getElementById(av);
if(au&&au.parentNode){if(au.id===av){ay.push(au);return ay}}else{return ay}}else{if(at.ownerDocument&&(au=at.ownerDocument.getElementById(av))&&P(at,au)&&au.id===av){ay.push(au);
return ay}}}else{if(az[2]){ah.apply(ay,y.call(at.getElementsByTagName(aw),0));return ay
}else{if((av=az[3])&&R&&at.getElementsByClassName){ah.apply(ay,y.call(at.getElementsByClassName(av),0));
return ay}}}}}return ak(aw,at,ay,aB,aA)};var V=ac.selectors={cacheLength:50,match:T,order:["ID","TAG"],attrHandle:{},createPseudo:an,find:{ID:n?function(aw,av,au){if(typeof av.getElementById!==L&&!au){var at=av.getElementById(aw);
return at&&at.parentNode?[at]:[]}}:function(aw,av,au){if(typeof av.getElementById!==L&&!au){var at=av.getElementById(aw);
return at?at.id===aw||typeof at.getAttributeNode!==L&&at.getAttributeNode("id").value===aw?[at]:v:[]
}},TAG:k?function(at,au){if(typeof au.getElementsByTagName!==L){return au.getElementsByTagName(at)
}}:function(at,ax){var aw=ax.getElementsByTagName(at);if(at==="*"){var ay,av=[],au=0;
for(;(ay=aw[au]);au++){if(ay.nodeType===1){av.push(ay)}}return av}return aw}},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(at){at[1]=at[1].replace(H,"");
at[3]=(at[4]||at[5]||"").replace(H,"");if(at[2]==="~="){at[3]=" "+at[3]+" "}return at.slice(0,4)
},CHILD:function(at){at[1]=at[1].toLowerCase();if(at[1]==="nth"){if(!at[2]){ac.error(at[0])
}at[3]=+(at[3]?at[4]+(at[5]||1):2*(at[2]==="even"||at[2]==="odd"));at[4]=+((at[6]+at[7])||at[2]==="odd")
}else{if(at[2]){ac.error(at[0])}}return at},PSEUDO:function(at){var au,av=at[4];
if(T.CHILD.test(at[0])){return null}if(av&&(au=Y.exec(av))&&au.pop()){at[0]=at[0].slice(0,au[0].length-av.length-1);
av=au[0].slice(0,-1)}at.splice(2,3,av||at[3]);return at}},filter:{ID:n?function(at){at=at.replace(H,"");
return function(au){return au.getAttribute("id")===at}}:function(at){at=at.replace(H,"");
return function(av){var au=typeof av.getAttributeNode!==L&&av.getAttributeNode("id");
return au&&au.value===at}},TAG:function(at){if(at==="*"){return function(){return true
}}at=at.replace(H,"").toLowerCase();return function(au){return au.nodeName&&au.nodeName.toLowerCase()===at
}},CLASS:function(at){var au=ag[at];if(!au){au=ag[at]=new RegExp("(^|"+O+")"+at+"("+O+"|$)");
F.push(at);if(F.length>V.cacheLength){delete ag[F.shift()]}}return function(av){return au.test(av.className||(typeof av.getAttribute!==L&&av.getAttribute("class"))||"")
}},ATTR:function(av,au,at){if(!au){return function(aw){return ac.attr(aw,av)!=null
}}return function(ax){var aw=ac.attr(ax,av),ay=aw+"";if(aw==null){return au==="!="
}switch(au){case"=":return ay===at;case"!=":return ay!==at;case"^=":return at&&ay.indexOf(at)===0;
case"*=":return at&&ay.indexOf(at)>-1;case"$=":return at&&ay.substr(ay.length-at.length)===at;
case"~=":return(" "+ay+" ").indexOf(at)>-1;case"|=":return ay===at||ay.substr(0,at.length+1)===at+"-"
}}},CHILD:function(au,aw,ax,av){if(au==="nth"){var at=t++;return function(aB){var ay,aC,aA=0,az=aB;
if(ax===1&&av===0){return true}ay=aB.parentNode;if(ay&&(ay[al]!==at||!aB.sizset)){for(az=ay.firstChild;
az;az=az.nextSibling){if(az.nodeType===1){az.sizset=++aA;if(az===aB){break}}}ay[al]=at
}aC=aB.sizset-av;if(ax===0){return aC===0}else{return(aC%ax===0&&aC/ax>=0)}}}return function(az){var ay=az;
switch(au){case"only":case"first":while((ay=ay.previousSibling)){if(ay.nodeType===1){return false
}}if(au==="first"){return true}ay=az;case"last":while((ay=ay.nextSibling)){if(ay.nodeType===1){return false
}}return true}}},PSEUDO:function(ax,aw,au,at){var av=V.pseudos[ax]||V.pseudos[ax.toLowerCase()];
if(!av){ac.error("unsupported pseudo: "+ax)}if(!av.sizzleFilter){return av}return av(aw,au,at)
}},pseudos:{not:an(function(at,av,au){var aw=q(at.replace(aj,"$1"),av,au);return function(ax){return !aw(ax)
}}),enabled:function(at){return at.disabled===false},disabled:function(at){return at.disabled===true
},checked:function(at){var au=at.nodeName.toLowerCase();return(au==="input"&&!!at.checked)||(au==="option"&&!!at.selected)
},selected:function(at){if(at.parentNode){at.parentNode.selectedIndex}return at.selected===true
},parent:function(at){return !!at.firstChild},empty:function(at){return !at.firstChild
},contains:an(function(at){return function(au){return(au.textContent||au.innerText||d(au)).indexOf(at)>-1
}}),has:an(function(at){return function(au){return ac(at,au).length>0}}),header:function(at){return E.test(at.nodeName)
},text:function(av){var au,at;return av.nodeName.toLowerCase()==="input"&&(au=av.type)==="text"&&((at=av.getAttribute("type"))==null||at.toLowerCase()===au)
},radio:i("radio"),checkbox:i("checkbox"),file:i("file"),password:i("password"),image:i("image"),submit:G("submit"),reset:G("reset"),button:function(au){var at=au.nodeName.toLowerCase();
return at==="input"&&au.type==="button"||at==="button"},input:function(at){return ab.test(at.nodeName)
},focus:function(at){var au=at.ownerDocument;return at===au.activeElement&&(!au.hasFocus||au.hasFocus())&&!!(at.type||at.href)
},active:function(at){return at===at.ownerDocument.activeElement}},setFilters:{first:function(av,au,at){return at?av.slice(1):[av[0]]
},last:function(aw,av,au){var at=aw.pop();return au?aw:[at]},even:function(ay,ax,aw){var av=[],au=aw?1:0,at=ay.length;
for(;au<at;au=au+2){av.push(ay[au])}return av},odd:function(ay,ax,aw){var av=[],au=aw?0:1,at=ay.length;
for(;au<at;au=au+2){av.push(ay[au])}return av},lt:function(av,au,at){return at?av.slice(+au):av.slice(0,+au)
},gt:function(av,au,at){return at?av.slice(0,+au+1):av.slice(+au+1)},eq:function(aw,av,au){var at=aw.splice(+av,1);
return au?aw:at}}};V.setFilters.nth=V.setFilters.eq;V.filters=V.pseudos;if(!S){V.attrHandle={href:function(at){return at.getAttribute("href",2)
},type:function(at){return at.getAttribute("type")}}}if(f){V.order.push("NAME");
V.find.NAME=function(at,au){if(typeof au.getElementsByName!==L){return au.getElementsByName(at)
}}}if(R){V.order.splice(1,0,"CLASS");V.find.CLASS=function(av,au,at){if(typeof au.getElementsByClassName!==L&&!at){return au.getElementsByClassName(av)
}}}try{y.call(o.childNodes,0)[0].nodeType}catch(ap){y=function(au){var av,at=[];
for(;(av=this[au]);au++){at.push(av)}return at}}var z=ac.isXML=function(at){var au=at&&(at.ownerDocument||at).documentElement;
return au?au.nodeName!=="HTML":false};var P=ac.contains=o.compareDocumentPosition?function(au,at){return !!(au.compareDocumentPosition(at)&16)
}:o.contains?function(au,at){var aw=au.nodeType===9?au.documentElement:au,av=at.parentNode;
return au===av||!!(av&&av.nodeType===1&&aw.contains&&aw.contains(av))}:function(au,at){while((at=at.parentNode)){if(at===au){return true
}}return false};var d=ac.getText=function(ax){var aw,au="",av=0,at=ax.nodeType;
if(at){if(at===1||at===9||at===11){if(typeof ax.textContent==="string"){return ax.textContent
}else{for(ax=ax.firstChild;ax;ax=ax.nextSibling){au+=d(ax)}}}else{if(at===3||at===4){return ax.nodeValue
}}}else{for(;(aw=ax[av]);av++){au+=d(aw)}}return au};ac.attr=function(aw,av){var at,au=z(aw);
if(!au){av=av.toLowerCase()}if(V.attrHandle[av]){return V.attrHandle[av](aw)}if(C||au){return aw.getAttribute(av)
}at=aw.getAttributeNode(av);return at?typeof aw[av]==="boolean"?aw[av]?av:null:at.specified?at.value:null:null
};ac.error=function(at){throw new Error("Syntax error, unrecognized expression: "+at)
};[0,0].sort(function(){return(m=0)});if(o.compareDocumentPosition){u=function(au,at){if(au===at){p=true;
return 0}return(!au.compareDocumentPosition||!at.compareDocumentPosition?au.compareDocumentPosition:au.compareDocumentPosition(at)&4)?-1:1
}}else{u=function(aB,aA){if(aB===aA){p=true;return 0}else{if(aB.sourceIndex&&aA.sourceIndex){return aB.sourceIndex-aA.sourceIndex
}}var ay,au,av=[],at=[],ax=aB.parentNode,az=aA.parentNode,aC=ax;if(ax===az){return h(aB,aA)
}else{if(!ax){return -1}else{if(!az){return 1}}}while(aC){av.unshift(aC);aC=aC.parentNode
}aC=az;while(aC){at.unshift(aC);aC=aC.parentNode}ay=av.length;au=at.length;for(var aw=0;
aw<ay&&aw<au;aw++){if(av[aw]!==at[aw]){return h(av[aw],at[aw])}}return aw===ay?h(aB,at[aw],-1):h(av[aw],aA,1)
};h=function(au,at,av){if(au===at){return av}var aw=au.nextSibling;while(aw){if(aw===at){return -1
}aw=aw.nextSibling}return 1}}ac.uniqueSort=function(au){var av,at=1;if(u){p=m;au.sort(u);
if(p){for(;(av=au[at]);at++){if(av===au[at-1]){au.splice(at--,1)}}}}return au};
function B(au,ay,ax,av){var aw=0,at=ay.length;for(;aw<at;aw++){ac(au,ay[aw],ax,av)
}}function X(at,av,az,aA,au,ay){var aw,ax=V.setFilters[av.toLowerCase()];if(!ax){ac.error(av)
}if(at||!(aw=au)){B(at||"*",aA,(aw=[]),au)}return aw.length>0?ax(aw,az,ay):[]}function af(aD,at,aB,av,aH){var ay,au,ax,aJ,aA,aI,aC,aG,aE=0,aF=aH.length,aw=T.POS,az=new RegExp("^"+aw.source+"(?!"+O+")","i"),aK=function(){var aM=1,aL=arguments.length-2;
for(;aM<aL;aM++){if(arguments[aM]===v){ay[aM]=v}}};for(;aE<aF;aE++){aw.exec("");
aD=aH[aE];aJ=[];ax=0;aA=av;while((ay=aw.exec(aD))){aG=aw.lastIndex=ay.index+ay[0].length;
if(aG>ax){aC=aD.slice(ax,ay.index);ax=aG;aI=[at];if(U.test(aC)){if(aA){aI=aA}aA=av
}if((au=am.test(aC))){aC=aC.slice(0,-5).replace(U,"$&*")}if(ay.length>1){ay[0].replace(az,aK)
}aA=X(aC,ay[1],ay[2],aI,aA,au)}}if(aA){aJ=aJ.concat(aA);if((aC=aD.slice(ax))&&aC!==")"){B(aC,aJ,aB,av)
}else{ah.apply(aB,aJ)}}else{ac(aD,at,aB,av)}}return aF===1?aB:ac.uniqueSort(aB)
}function g(az,av,aC){var aE,aD,aF,ax=[],aA=0,aB=Y.exec(az),au=!aB.pop()&&!aB.pop(),aG=au&&az.match(I)||[""],at=V.preFilter,aw=V.filter,ay=!aC&&av!==l;
for(;(aD=aG[aA])!=null&&au;aA++){ax.push(aE=[]);if(ay){aD=" "+aD}while(aD){au=false;
if((aB=U.exec(aD))){aD=aD.slice(aB[0].length);au=aE.push({part:aB.pop().replace(aj," "),captures:aB})
}for(aF in aw){if((aB=T[aF].exec(aD))&&(!at[aF]||(aB=at[aF](aB,av,aC)))){aD=aD.slice(aB.shift().length);
au=aE.push({part:aF,captures:aB})}}if(!au){break}}}if(!au){ac.error(az)}return ax
}function M(ax,aw,av){var at=aw.dir,au=t++;if(!ax){ax=function(ay){return ay===av
}}return aw.first?function(az,ay){while((az=az[at])){if(az.nodeType===1){return ax(az,ay)&&az
}}}:function(aA,az){var ay,aB=au+"."+D,aC=aB+"."+ai;while((aA=aA[at])){if(aA.nodeType===1){if((ay=aA[al])===aC){return false
}else{if(typeof ay==="string"&&ay.indexOf(aB)===0){if(aA.sizset){return aA}}else{aA[al]=aC;
if(ax(aA,az)){aA.sizset=true;return aA}aA.sizset=false}}}}}}function K(at,au){return at?function(ax,aw){var av=au(ax,aw);
return av&&at(av===true?ax:av,aw)}:au}function N(ay,aw,at){var av,ax,au=0;for(;
(av=ay[au]);au++){if(V.relative[av.part]){ax=M(ax,V.relative[av.part],aw)}else{av.captures.push(aw,at);
ax=K(ax,V.filter[av.part].apply(null,av.captures))}}return ax}function j(at){return function(aw,av){var ax,au=0;
for(;(ax=at[au]);au++){if(ax(aw,av)){return true}}return false}}var q=ac.compile=function(at,aw,au){var az,ay,av,ax=A[at];
if(ax&&ax.context===aw){ax.dirruns++;return ax}ay=g(at,aw,au);for(av=0;(az=ay[av]);
av++){ay[av]=N(az,aw,au)}ax=A[at]=j(ay);ax.context=aw;ax.runs=ax.dirruns=0;J.push(at);
if(J.length>V.cacheLength){delete A[J.shift()]}return ax};ac.matches=function(au,at){return ac(au,null,null,at)
};ac.matchesSelector=function(at,au){return ac(au,null,null,[at]).length>0};var ak=function(ax,au,az,aD,aC){ax=ax.replace(aj,"$1");
var at,aE,aA,aF,av,aw,aH,aI,ay,aB=ax.match(I),aG=ax.match(ao),aJ=au.nodeType;if(T.POS.test(ax)){return af(ax,au,az,aD,aB)
}if(aD){at=y.call(aD,0)}else{if(aB&&aB.length===1){if(aG.length>1&&aJ===9&&!aC&&(aB=T.ID.exec(aG[0]))){au=V.find.ID(aB[1],au,aC)[0];
if(!au){return az}ax=ax.slice(aG.shift().length)}aI=((aB=ae.exec(aG[0]))&&!aB.index&&au.parentNode)||au;
ay=aG.pop();aw=ay.split(":not")[0];for(aA=0,aF=V.order.length;aA<aF;aA++){aH=V.order[aA];
if((aB=T[aH].exec(aw))){at=V.find[aH]((aB[1]||"").replace(H,""),aI,aC);if(at==null){continue
}if(aw===ay){ax=ax.slice(0,ax.length-ay.length)+aw.replace(T[aH],"");if(!ax){ah.apply(az,y.call(at,0))
}}break}}}}if(ax){aE=q(ax,au,aC);D=aE.dirruns;if(at==null){at=V.find.TAG("*",(ae.test(ax)&&au.parentNode)||au)
}for(aA=0;(av=at[aA]);aA++){ai=aE.runs++;if(aE(av,au)){az.push(av)}}}return az};
if(l.querySelectorAll){(function(){var ay,az=ak,ax=/'|\\/g,av=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,au=[],at=[":active"],aw=o.matchesSelector||o.mozMatchesSelector||o.webkitMatchesSelector||o.oMatchesSelector||o.msMatchesSelector;
W(function(aA){aA.innerHTML="<select><option selected></option></select>";if(!aA.querySelectorAll("[selected]").length){au.push("\\["+O+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)")
}if(!aA.querySelectorAll(":checked").length){au.push(":checked")}});W(function(aA){aA.innerHTML="<p test=''></p>";
if(aA.querySelectorAll("[test^='']").length){au.push("[*^$]="+O+"*(?:\"\"|'')")
}aA.innerHTML="<input type='hidden'>";if(!aA.querySelectorAll(":enabled").length){au.push(":enabled",":disabled")
}});au=au.length&&new RegExp(au.join("|"));ak=function(aF,aB,aG,aI,aH){if(!aI&&!aH&&(!au||!au.test(aF))){if(aB.nodeType===9){try{ah.apply(aG,y.call(aB.querySelectorAll(aF),0));
return aG}catch(aE){}}else{if(aB.nodeType===1&&aB.nodeName.toLowerCase()!=="object"){var aD=aB.getAttribute("id"),aA=aD||al,aC=ae.test(aF)&&aB.parentNode||aB;
if(aD){aA=aA.replace(ax,"\\$&")}else{aB.setAttribute("id",aA)}try{ah.apply(aG,y.call(aC.querySelectorAll(aF.replace(I,"[id='"+aA+"'] $&")),0));
return aG}catch(aE){}finally{if(!aD){aB.removeAttribute("id")}}}}}return az(aF,aB,aG,aI,aH)
};if(aw){W(function(aB){ay=aw.call(aB,"div");try{aw.call(aB,"[test!='']:sizzle");
at.push(V.match.PSEUDO)}catch(aA){}});at=new RegExp(at.join("|"));ac.matchesSelector=function(aB,aD){aD=aD.replace(av,"='$1']");
if(!z(aB)&&!at.test(aD)&&(!au||!au.test(aD))){try{var aA=aw.call(aB,aD);if(aA||ay||aB.document&&aB.document.nodeType!==11){return aA
}}catch(aC){}}return ac(aD,null,null,[aB]).length>0}}})()}if(typeof c==="object"&&c.exports){c.exports=ac
}else{ad.Sizzle=ac}})(window)},{}],419:[function(b,c,a){c.exports={DOMEmitter:b("./ac-dom-emitter/DOMEmitter")}
},{"./ac-dom-emitter/DOMEmitter":420}],420:[function(c,b,d){var f;var j=c("ac-event-emitter").EventEmitter,g=c("ac-dom-events"),a=c("ac-dom-traversal");
var i="dom-emitter";function h(k){if(k===null){return}this.el=k;this._bindings={};
this._delegateFuncs={};this._eventEmitter=new j()}f=h.prototype;f._parseEventNames=function(k){if(!k){return[k]
}return k.split(" ")};f._onListenerEvent=function(l,k){this.trigger(l,k,false)};
f._setListener=function(k){this._bindings[k]=this._onListenerEvent.bind(this,k);
g.addEventListener(this.el,k,this._bindings[k])};f._removeListener=function(k){g.removeEventListener(this.el,k,this._bindings[k]);
this._bindings[k]=null};f._triggerInternalEvent=function(k,l){this.trigger(i+":"+k,l)
};f._normalizeArgumentsAndCall=function(k,m){var q={};if(k.length===0){m.call(this,q);
return}if(typeof k[0]==="string"||k[0]===null){k=this._cleanStringData(k);q.events=k[0];
if(typeof k[1]==="string"){q.delegateQuery=k[1];q.callback=k[2];q.context=k[3]}else{q.callback=k[1];
q.context=k[2]}m.call(this,q);return}var l,o,p=":",n=k[0];for(l in n){if(n.hasOwnProperty(l)){q={};
o=this._cleanStringData(l.split(p));q.events=o[0];q.delegateQuery=o[1];q.callback=n[l];
q.context=k[1];m.call(this,q)}}};f._registerDelegateFunc=function(m,o,p,k,n){var l=this._delegateFunc.bind(this,m,o,p,n);
this._delegateFuncs[o]=this._delegateFuncs[o]||{};this._delegateFuncs[o][m]=this._delegateFuncs[o][m]||[];
this._delegateFuncs[o][m].push({func:k,context:n,delegateFunc:l});return l};f._cleanStringData=function(n){var m=false;
if(typeof n==="string"){n=[n];m=true}var l=[],p,r,q,o,k=n.length;for(p=0;p<k;p++){r=n[p];
if(typeof r==="string"){if(r===""||r===" "){continue}q=r.length;while(r[0]===" "){r=r.slice(1,q);
q--}while(r[q-1]===" "){r=r.slice(0,q-1);q--}}l.push(r)}if(m){return l[0]}return l
};f._unregisterDelegateFunc=function(m,p,k,o){if(!this._delegateFuncs[p]||!this._delegateFuncs[p][m]){return
}var n=this._getDelegateFuncBindingIdx(m,p,k,o),l;if(n>-1){l=this._delegateFuncs[p][m][n].delegateFunc;
this._delegateFuncs[p][m].splice(n,1);if(this._delegateFuncs[p][m].length===0){this._delegateFuncs[p][m]=null
}}return l};f._unregisterDelegateFuncs=function(k,m){if(!this._delegateFuncs[m]){return
}if(k!==null&&!this._delegateFuncs[m][k]){return}if(k===null){var l;for(l in this._delegateFuncs[m]){if(this._delegateFuncs[m].hasOwnProperty(l)){this._unbindDelegateFunc(l,m)
}}return}this._unbindDelegateFunc(k,m)};f._unbindDelegateFunc=function(k,m){var n,o,l=0;
while(this._delegateFuncs[m][k]&&this._delegateFuncs[m][k][l]){n=this._delegateFuncs[m][k][l];
o=this._delegateFuncs[m][k][l].length;this._off({events:k,delegateQuery:m,callback:n.func,context:n.context});
if(this._delegateFuncs[m][k]&&o===this._delegateFuncs[m][k].length){l++}}n=o=null
};f._unregisterDelegateFuncsByEvent=function(k){var l;for(l in this._delegateFuncs){if(this._delegateFuncs.hasOwnProperty(l)){this._unregisterDelegateFuncs(k,l)
}}};f._delegateFunc=function(k,o,q,m,p){if(a.matchesSelector(g.target(p),o)){var l=Array.prototype.slice.call(arguments,0),n=l.slice(4,l.length);
m=m||window;if(typeof p.detail==="object"){n[0]=p.detail}q.call(m,n)}};f.on=function(){this._normalizeArgumentsAndCall(Array.prototype.slice.call(arguments,0),this._on);
return this};f.once=function(){this._normalizeArgumentsAndCall(Array.prototype.slice.call(arguments,0),this._once);
return this};f.off=function(){this._normalizeArgumentsAndCall(Array.prototype.slice.call(arguments,0),this._off);
return this};f._on=function(o){var l=o.events,p=o.callback,n=o.delegateQuery,m=o.context,k=o.unboundCallback||p;
l=this._parseEventNames(l);l.forEach(function(u,q,s,t,r){if(!this.has(r)){this._setListener(r)
}if(typeof t==="string"){u=this._registerDelegateFunc(r,t,u,q,s)}this._triggerInternalEvent("willon",{evt:r,callback:u,context:s,delegateQuery:t});
this._eventEmitter.on(r,u,s);this._triggerInternalEvent("didon",{evt:r,callback:u,context:s,delegateQuery:t})
}.bind(this,p,k,m,n));l=p=k=n=m=null};f._off=function(p){var l=p.events,q=p.callback,o=p.delegateQuery,n=p.context,k=p.unboundCallback||q;
if(typeof l==="undefined"){this._eventEmitter.off();var m;for(m in this._bindings){if(this._bindings.hasOwnProperty(m)){this._removeListener(m)
}}for(m in this._delegateFuncs){if(this._delegateFuncs.hasOwnProperty(m)){this._delegateFuncs[m]=null
}}return}l=this._parseEventNames(l);l.forEach(function(v,r,t,u,s){if(typeof u==="string"&&typeof r==="function"){v=this._unregisterDelegateFunc(s,u,r,t);
if(!v){return}}if(typeof u==="string"&&typeof v==="undefined"){this._unregisterDelegateFuncs(s,u);
return}if(typeof s==="string"&&typeof v==="undefined"){this._unregisterDelegateFuncsByEvent(s);
if(typeof u==="string"){return}}this._triggerInternalEvent("willoff",{evt:s,callback:v,context:t,delegateQuery:u});
this._eventEmitter.off(s,v,t);this._triggerInternalEvent("didoff",{evt:s,callback:v,context:t,delegateQuery:u});
if(!this.has(s)){this._removeListener(s)}}.bind(this,q,k,n,o));l=q=k=o=n=null};
f._once=function(n){var k=n.events,o=n.callback,m=n.delegateQuery,l=n.context;k=this._parseEventNames(k);
k.forEach(function(s,q,r,p){if(typeof r==="string"){return this._handleDelegateOnce(p,s,q,r)
}if(!this.has(p)){this._setListener(p)}this._triggerInternalEvent("willonce",{evt:p,callback:s,context:q,delegateQuery:r});
this._eventEmitter.once.call(this,p,s,q);this._triggerInternalEvent("didonce",{evt:p,callback:s,context:q,delegateQuery:r})
}.bind(this,o,l,m));k=o=m=l=null};f._handleDelegateOnce=function(k,n,l,m){this._triggerInternalEvent("willonce",{evt:k,callback:n,context:l,delegateQuery:m});
this._on({events:k,context:l,delegateQuery:m,callback:this._getDelegateOnceCallback.bind(this,k,n,l,m),unboundCallback:n});
this._triggerInternalEvent("didonce",{evt:k,callback:n,context:l,delegateQuery:m});
return this};f._getDelegateOnceCallback=function(k,p,m,o){var l=Array.prototype.slice.call(arguments,0),n=l.slice(4,l.length);
p.apply(m,n);this._off({events:k,delegateQuery:o,callback:p,context:m})};f._getDelegateFuncBindingIdx=function(r,o,m,k,s){var q=-1;
if(this._delegateFuncs[o]&&this._delegateFuncs[o][r]){var n,l,p=this._delegateFuncs[o][r].length;
for(n=0;n<p;n++){l=this._delegateFuncs[o][r][n];if(s&&typeof m==="undefined"){m=l.func
}if(l.func===m&&l.context===k){q=n;break}}}return q};f._triggerDelegateEvents=function(n,p,q){var m=a.querySelectorAll(p,this.el);
var o,r,k=m.length;for(o=0;o<k;o++){r=m[o];if(document.createEvent){r.dispatchEvent(new CustomEvent(n,{bubbles:true,cancelable:false,detail:q}))
}else{var l=document.createEventObject();l.detail=q;r.fireEvent("on"+n,l)}return r
}};f.has=function(k,p,o,m){var n,q;if(typeof p==="string"){n=p;q=o}else{q=p;m=o
}if(n){var l=this._getDelegateFuncBindingIdx(k,n,q,m,true);if(l>-1){return true
}return false}if(this._eventEmitter&&this._eventEmitter.has.apply(this._eventEmitter,arguments)){return true
}return false};f.trigger=function(l,k,m,p){l=this._parseEventNames(l);var n,o;if(typeof k==="string"){n=this._cleanStringData(k);
o=m}else{o=k;p=m}l=this._cleanStringData(l);l.forEach(function(r,s,t,q){if(r){this._triggerDelegateEvents(q,r,s);
return}this._eventEmitter.trigger(q,s,t)}.bind(this,n,o,p));return this};f.propagateTo=function(k,l){this._eventEmitter.propagateTo(k,l);
return this};f.stopPropagatingTo=function(k){this._eventEmitter.stopPropagatingTo(k);
return this};f.destroy=function(){this._triggerInternalEvent("willdestroy");this.off();
this.el=this._eventEmitter=this._bindings=this._delegateFuncs=null};b.exports=h
},{"ac-dom-events":399,"ac-dom-traversal":400,"ac-event-emitter":256}],421:[function(b,c,a){c.exports={SharedInstance:b("./ac-shared-instance/SharedInstance")}
},{"./ac-shared-instance/SharedInstance":422}],422:[function(d,h,c){var i=window,g="AC",a="SharedInstance",f=i[g];
var b=(function(){var j={};return{get:function(l,k){var m=null;if(j[l]&&j[l][k]){m=j[l][k]
}return m},set:function(m,k,l){if(!j[m]){j[m]={}}if(typeof l==="function"){j[m][k]=new l()
}else{j[m][k]=l}return j[m][k]},share:function(m,k,l){var n=this.get(m,k);if(!n){n=this.set(m,k,l)
}return n},remove:function(l,k){var m=typeof k;if(m==="string"||m==="number"){if(!j[l]||!j[l][k]){return
}j[l][k]=null;return}if(j[l]){j[l]=null}}}}());if(!f){f=i[g]={}}if(!f[a]){f[a]=b
}h.exports=f[a]},{}],423:[function(b,c,a){c.exports={WindowDelegate:b("./ac-window-delegate/WindowDelegate"),WindowDelegateOptimizer:b("./ac-window-delegate/WindowDelegateOptimizer"),WindowDelegateCustomEvent:b("./ac-window-delegate/WindowDelegateCustomEvent")}
},{"./ac-window-delegate/WindowDelegate":426,"./ac-window-delegate/WindowDelegateCustomEvent":427,"./ac-window-delegate/WindowDelegateOptimizer":428}],424:[function(b,c,a){var f=b("ac-event-emitter").EventEmitter;
var g=function(){this._emitter=new f();this._customEvents={}};var d=g.prototype;
d.on=function(h,j,i){this._activateCustomEvents(h);this._emitterOn.apply(this,arguments);
return this};d.once=function(h,j,i){this._emitterOnce.apply(this,arguments);return this
};d.off=function(h,j,i){this._emitterOff.apply(this,arguments);this._deactivateCustomEvents(h);
return this};d.has=function(h,j,i){return this._emitter.has.apply(this._emitter,arguments)
};d.trigger=function(){this._emitter.trigger.apply(this._emitter,arguments);return this
};d.propagateTo=function(){this._emitter.propagateTo.apply(this._emitter,arguments);
return this};d.stopPropagatingTo=function(){this._emitter.stopPropagatingTo.apply(this._emitter,arguments);
return this};d.add=function(h){this._customEvents[h.name]=h};d.canHandleCustomEvent=function(h){return this._customEvents.hasOwnProperty(h)
};d.isHandlingCustomEvent=function(h){if(this._customEvents[h]&&this._customEvents[h].active){return true
}return false};d._activateCustomEvents=function(l){var j=l.split(" "),k,m,h=j.length;
for(m=0;m<h;m++){k=j[m];if(this._customEvents[k]&&!this._customEvents[k].active){this._customEvents[k].initialize();
this._customEvents[k].active=true}}};d._deactivateCustomEvents=function(k){var l;
if(!k||k.length===0){for(l in this._customEvents){if(this._customEvents.hasOwnProperty(l)){this._deactivateCustomEvent(l)
}}return}var j=k.split(" "),h=j.length;for(l=0;l<h;l++){this._deactivateCustomEvent(j[l])
}};d._deactivateCustomEvent=function(h){if(!this.has(h)&&this._customEvents[h]&&this._customEvents[h].active){this._customEvents[h].deinitialize();
this._customEvents[h].active=false}};d._emitterOn=function(){this._emitter.on.apply(this._emitter,arguments)
};d._emitterOnce=function(){this._emitter.once.apply(this._emitter,arguments)};
d._emitterOff=function(){this._emitter.off.apply(this._emitter,arguments)};c.exports=g
},{"ac-event-emitter":256}],425:[function(b,c,a){var g=b("ac-event-emitter").EventEmitter;
var f;var d=function(h){g.call(this);this.optimizers=h;this._events={};this._properties={};
this._initialize()};f=d.prototype=new g(null);f.canOptimizeEvent=function(h){return this._events.hasOwnProperty(h)
};f.canOptimizeProperty=function(h){return this._properties.hasOwnProperty(h)};
f.isOptimizingEvent=function(h){if(this._events[h]&&this._events[h].active){return true
}return false};f.isOptimizingProperty=function(h){if(this._properties[h]&&this._properties[h].active){return true
}return false};f.add=function(h){this._setOptimizerEvents(h);this._setOptimizerProperties(h);
h.on("update",this._onUpdate,this);h.on("activate",this._onActivate,this);h.on("deactivate",this._onDeactivate,this)
};f.get=function(h){if(this.isOptimizingProperty(h)){return this._properties[h].value
}return null};f.set=function(i,h){if(!this._properties[i]){return false}this._properties[i].value=h;
return this};f.getOptimizerByEvent=function(h){if(this._events[h]){return this._events[h]
}return null};f._initialize=function(){var j,h;for(j in this.optimizers){if(this.optimizers.hasOwnProperty(j)){this.add(this.optimizers[j])
}}};f._onUpdate=function(h){this.set(h.prop,h.val)};f._onActivate=function(j){var k=j.propertyNames,l,h=k.length;
for(l=0;l<h;l++){this._properties[k[l]].active=true}};f._onDeactivate=function(j){var k=j.propertyNames,l,h=k.length;
for(l=0;l<h;l++){this._properties[k[l]].active=false}};f._setOptimizerEvents=function(j){var l,k=j.eventNames,h=k.length;
for(l=0;l<h;l++){this._setOptimizerEvent(k[l],j)}};f._setOptimizerEvent=function(i,h){if(this._events[i]){return
}this._events[i]=h};f._setOptimizerProperties=function(k){var l,j=k.propertyNames,h=j.length;
for(l=0;l<h;l++){this._setOptimizerProperty(j[l])}};f._setOptimizerProperty=function(h){if(this._properties.hasOwnProperty(h)){return
}this._properties[h]={};this._properties[h].active=false;this._properties[h].value=null
};c.exports=d},{"ac-event-emitter":256}],426:[function(d,b,g){var i;var c=d("ac-shared-instance").SharedInstance,l=d("ac-dom-emitter").DOMEmitter,j=d("./OptimizerController"),f=d("./CustomEventController"),h=d("./queries/queries"),m=d("./optimizers/optimizers");
var k="ac-window-delegate:WindowDelegate",a="2.0.1";function n(){this._emitter=new l(window);
this._controllers={optimizer:new j(m),customEvent:new f()};var o;for(o in h){if(h.hasOwnProperty(o)){this[o]=this._getProperty.bind(this,o);
h[o]=h[o].bind(this)}}this._bindEvents()}i=n.prototype;i.on=function(o,r,p){var q=this._seperateCustomEvents(o);
this._optimizeEvents(q.standardEvents);this._customEventOn(q.customEvents,r,p);
this._emitterOn.apply(this,arguments);return this};i.once=function(o,r,p){var q=this._seperateCustomEvents(o);
this._optimizeEvents(q.standardEvents);this._customEventOnce(q.customEvents,r,p);
this._emitterOnce.apply(this,arguments);return this};i.off=function(p,u,q){var t=this._seperateCustomEvents(p),r=false;
if(!p){r=true}this._customEventOff(t.customEvents,u,q,r);this._emitterOff.apply(this,arguments);
if(r){try{var o;for(o in this._controllers.optimizer._events){if(this._controllers.optimizer._events.hasOwnProperty(o)&&this._shouldDeoptimizeEvent(o,true)){this._deoptimizeEvent(o)
}}this._bindEvents()}catch(s){}}return this};i.has=function(o,q,p){return this._emitter.has.apply(this._emitter,arguments)
};i.trigger=function(){this._emitter.trigger.apply(this._emitter,arguments);return this
};i.propagateTo=function(){this._emitter.propagateTo.apply(this._emitter,arguments);
return this};i.stopPropagatingTo=function(){this._emitter.stopPropagatingTo.apply(this._emitter,arguments);
return this};i.addOptimizer=function(o){this._controllers.optimizer.add(o);return this
};i.addCustomEvent=function(o){this._controllers.customEvent.add(o);return this
};i._emitterOn=function(){this._emitter.on.apply(this._emitter,arguments)};i._emitterOnce=function(){this._emitter.once.apply(this._emitter,arguments)
};i._emitterOff=function(){this._emitter.off.apply(this._emitter,arguments)};i._onEventUnbound=function(p){var o=p.evt;
if(this._shouldDeoptimizeEvent(o)){this._deoptimizeEvent(o)}};i._customEventOn=function(o,q,p){if(o.length===0){return
}this._controllers.customEvent.on(o.join(" "),q,p)};i._customEventOnce=function(o,q,p){if(o.length===0){return
}this._controllers.customEvent.once(o.join(" "),q,p)};i._customEventOff=function(o,r,p,q){if(!q&&o.length===0){return
}if(q&&o.length===0){this._controllers.customEvent.off();return}this._controllers.customEvent.off(o.join(" "),r,p)
};i._getProperty=function(q,o){var p=null;if(!o){p=this._getOptimizedValue(q)}if(p===null){p=h[q].call(this,o)
}return p};i._optimizeEvents=function(q){var p,r,o=q.length;for(r=0;r<o;r++){p=q[r];
if(this._shouldOptimizeEvent(p)){this._optimizeEvent(p)}}};i._shouldOptimizeEvent=function(o){if(this._controllers.optimizer.canOptimizeEvent(o)&&!this._controllers.optimizer.isOptimizingEvent(o)){return true
}return false};i._shouldDeoptimizeEvent=function(o,p){if(this._controllers.optimizer.isOptimizingEvent(o)&&(p||this._emitter._eventEmitter._events[o].length<=1)){return true
}return false};i._optimizeEvent=function(p){var o=this._controllers.optimizer.getOptimizerByEvent(p);
o.activate();this._emitterOn(p,o.callback,o)};i._deoptimizeEvent=function(p){var o=this._controllers.optimizer.getOptimizerByEvent(p);
o.deactivate();this._emitterOff(p,o.callback,o)};i._getOptimizedValue=function(o){return this._controllers.optimizer.get(o)
};i._seperateCustomEvents=function(s){var p={customEvents:[],standardEvents:[]};
if(typeof s==="string"){var t=s.split(" "),q,r,o=t.length;for(r=0;r<o;r++){q=t[r];
if(this._controllers.customEvent.canHandleCustomEvent(q)){p.customEvents.push(q)
}else{p.standardEvents.push(q)}}}return p};i._bindEvents=function(){this._emitter.on("dom-emitter:didoff",this._onEventUnbound,this)
};b.exports=c.share(k,a,n)},{"./CustomEventController":424,"./OptimizerController":425,"./optimizers/optimizers":431,"./queries/queries":440,"ac-dom-emitter":419,"ac-shared-instance":421}],427:[function(c,d,a){var g=c("ac-event-emitter").EventEmitter;
function b(h,j,i){g.call(this);this.name=h;this.active=false;this._initializeFunc=j;
this._deinitializeFunc=i}var f=b.prototype=new g(null);f.initialize=function(){if(this._initializeFunc){this._initializeFunc()
}return this};f.deinitialize=function(){if(this._deinitializeFunc){this._deinitializeFunc()
}return this};d.exports=b},{"ac-event-emitter":256}],428:[function(c,d,b){var g=c("ac-event-emitter").EventEmitter;
function a(h,i){g.call(this);this.active=false;this.eventNames=h.eventNames;this.propertyNames=h.propertyNames;
this.options=h.options||{};this.callback=i}var f=a.prototype=new g(null);f.update=function(i,h){this.trigger("update",{prop:i,val:h})
};f.activate=function(){this.active=true;this.trigger("activate",this)};f.deactivate=function(){this.active=false;
this.trigger("deactivate",this)};d.exports=a},{"ac-event-emitter":256}],429:[function(f,g,b){var a=f("../../WindowDelegateOptimizer"),d=f("../../queries/queries");
var c={eventNames:["resize"],propertyNames:["clientWidth","clientHeight","innerWidth","innerHeight"]};
var h=new a(c,function(m){var l,k=c.propertyNames,j=k.length;for(l=0;l<j;l++){this.update(k[l],d[k[l]](true))
}});g.exports=h},{"../../WindowDelegateOptimizer":428,"../../queries/queries":440}],430:[function(g,h,b){var a=g("../../WindowDelegateOptimizer"),f=g("../../queries/queries");
var d={eventNames:["scroll"],propertyNames:["scrollX","scrollY","maxScrollX","maxScrollY"]};
var c=new a(d,function(m){var l,k=d.propertyNames,j=k.length;for(l=0;l<j;l++){this.update(k[l],f[k[l]](true))
}});h.exports=c},{"../../WindowDelegateOptimizer":428,"../../queries/queries":440}],431:[function(d,f,b){var c=d("./events/resize"),a=d("./events/scroll");
f.exports=[c,a]},{"./events/resize":429,"./events/scroll":430}],432:[function(b,c,a){var d=function(f){return document.documentElement.clientHeight
};c.exports=d},{}],433:[function(b,c,a){var d=function(f){return document.documentElement.clientWidth
};c.exports=d},{}],434:[function(b,d,a){var c=function(f){return window.innerHeight||this.clientHeight(f)
};d.exports=c},{}],435:[function(b,c,a){var d=function(f){return window.innerWidth||this.clientWidth(f)
};c.exports=d},{}],436:[function(c,d,a){var b=function(f){return document.body.scrollWidth-this.innerWidth()
};d.exports=b},{}],437:[function(c,d,b){var a=function(f){return document.body.scrollHeight-this.innerHeight()
};d.exports=a},{}],438:[function(b,c,a){var d=function(f){var h=window.pageXOffset;
if(!h){var g=document.documentElement||document.body.parentNode||document.body;
h=g.scrollLeft}return h};c.exports=d},{}],439:[function(b,c,a){var d=function(f){var h=window.pageYOffset;
if(!h){var g=document.documentElement||document.body.parentNode||document.body;
h=g.scrollTop}return h};c.exports=d},{}],440:[function(i,g,k){var b=i("./methods/innerWidth"),j=i("./methods/innerHeight"),d=i("./methods/clientWidth"),l=i("./methods/clientHeight"),c=i("./methods/scrollX"),a=i("./methods/scrollY"),h=i("./methods/maxScrollX"),f=i("./methods/maxScrollY");
g.exports={innerWidth:b,innerHeight:j,clientWidth:d,clientHeight:l,scrollX:c,scrollY:a,maxScrollX:h,maxScrollY:f}
},{"./methods/clientHeight":432,"./methods/clientWidth":433,"./methods/innerHeight":434,"./methods/innerWidth":435,"./methods/maxScrollX":436,"./methods/maxScrollY":437,"./methods/scrollX":438,"./methods/scrollY":439}],441:[function(b,c,a){var d=b("./ac-element-tracker/ElementTracker");
c.exports=new d();c.exports.ElementTracker=d},{"./ac-element-tracker/ElementTracker":442}],442:[function(d,c,h){var i;
var g=d("ac-object");var k=d("ac-dom-nodes");var a=d("ac-dom-metrics");var l=d("ac-array");
var n=d("ac-window-delegate").WindowDelegate;var j=d("./TrackedElement");var o=d("ac-event-emitter").EventEmitter;
var f={autoStart:false};function b(q,p){this.options=g.clone(f);this.options=typeof p==="object"?g.extend(this.options,p):this.options;
this.windowDelegate=n;this.tracking=false;this.elements=[];if(q&&(Array.isArray(q)||k.isNodeList(q)||k.isElement(q))){this.addElements(q)
}if(this.options.autoStart){this.start()}}i=b.prototype=g.create(o.prototype);var m=/^\[object (HTMLCollection|NodeList|Object)\]$/;
i._registerElements=function(p){p=[].concat(p);p.forEach(function(r){if(this._elementInDOM(r)){var q=new j(r);
q.offsetTop=q.element.offsetTop;this.elements.push(q)}},this)};i._registerTrackedElements=function(p){var q=[].concat(p);
q.forEach(function(r){if(this._elementInDOM(r.element)){r.offsetTop=r.element.offsetTop;
this.elements.push(r)}},this)};i._elementInDOM=function(r){var q=false;var p=document.getElementsByTagName("body")[0];
if(k.isElement(r)&&p.contains(r)){q=true}return q};i._onVPChange=function(){this.elements.forEach(function(p){this.refreshElementState(p)
},this)};i._elementPercentInView=function(p){return p.pixelsInView/p.height};i._elementPixelsInView=function(q){var t=0;
var s=q.top;var r=q.bottom;var p=this.windowDelegate.innerHeight();if(s<=0&&r>=p){t=p
}else{if(s>=0&&s<p&&r>p){t=p-s}else{if(s<0&&(r<p&&r>=0)){t=q.bottom}else{if(s>=0&&r<=p){t=q.height
}}}}return t};i._ifInView=function(p,q){if(!q){p.trigger("enterview",p)}};i._ifAlreadyInView=function(p){if(!p.inView){p.trigger("exitview",p)
}};i.addElements=function(p){p=k.isNodeList(p)?l.toArray(p):[].concat(p);p.forEach(function(q){this.addElement(q)
},this)};i.addElement=function(q){var p;if(k.isElement(q)){p=new j(q);this._registerTrackedElements(p)
}return p};i.removeElement=function(r){var q=[];var p;this.elements.forEach(function(s,t){if(s===r||s.element===r){q.push(t)
}});p=this.elements.filter(function(t,s){return q.indexOf(s)<0?true:false});this.elements=p
};i.stop=function(){if(this.tracking===true){this.tracking=false;this.windowDelegate.off("scroll resize orientationchange",this._onVPChange)
}};i.start=function(){if(this.tracking===false){this.tracking=true;this.windowDelegate.on("scroll resize orientationchange",this._onVPChange,this);
this.refreshAllElementStates()}};i.refreshAllElementStates=function(){this.elements.forEach(function(p){this.refreshElementState(p)
},this)};i.refreshElementState=function(p){var q=a.getBoundingBox(p.element);var r=p.inView;
p=g.extend(p,q);p.pixelsInView=this._elementPixelsInView(p);p.percentInView=this._elementPercentInView(p);
p.inView=p.pixelsInView>0;if(p.inView){this._ifInView(p,r)}if(r){this._ifAlreadyInView(p)
}return p};c.exports=b},{"./TrackedElement":443,"ac-array":374,"ac-dom-metrics":386,"ac-dom-nodes":295,"ac-event-emitter":256,"ac-object":389,"ac-window-delegate":423}],443:[function(d,f,c){var g;
var i=d("ac-dom-emitter").DOMEmitter;var a=d("ac-dom-nodes");var b=d("ac-object");
function h(j){if(a.isElement(j)){this.element=j}else{throw new TypeError("TrackedElement: "+j+" is not a valid DOM element")
}this.inView=false;this.percentInView=0;this.pixelsInView=0;this.offsetTop=0;this.top=0;
this.right=0;this.bottom=0;this.left=0;this.width=0;this.height=0;i.call(this,j)
}g=h.prototype=b.create(i.prototype);f.exports=h},{"ac-dom-emitter":381,"ac-dom-nodes":295,"ac-object":389}],444:[function(b,c,a){arguments[4][174][0].apply(a,arguments)
},{"./helpers/globals":452,"ac-function/once":482,dup:174}],445:[function(b,c,a){arguments[4][175][0].apply(a,arguments)
},{"./touchAvailable":478,"ac-browser":460,"ac-function/once":482,dup:175}],446:[function(b,c,a){arguments[4][176][0].apply(a,arguments)
},{"./helpers/globals":452,"ac-function/once":482,dup:176}],447:[function(b,c,a){arguments[4][177][0].apply(a,arguments)
},{"ac-function/once":482,"ac-prefixer/getStyleValue":466,dup:177}],448:[function(b,c,a){arguments[4][178][0].apply(a,arguments)
},{"ac-function/memoize":481,"ac-prefixer/getStyleProperty":465,"ac-prefixer/getStyleValue":466,dup:178}],449:[function(b,c,a){arguments[4][179][0].apply(a,arguments)
},{"ac-function/once":482,"ac-prefixer/getStyleValue":466,dup:179}],450:[function(b,c,a){arguments[4][180][0].apply(a,arguments)
},{"./helpers/globals":452,"ac-function/memoize":481,dup:180}],451:[function(b,c,a){arguments[4][181][0].apply(a,arguments)
},{"ac-function/memoize":481,"ac-prefixer/getEventType":464,dup:181}],452:[function(b,c,a){arguments[4][182][0].apply(a,arguments)
},{dup:182}],453:[function(b,c,a){arguments[4][183][0].apply(a,arguments)},{"./canvasAvailable":444,"./continuousScrollEventsAvailable":445,"./cookiesAvailable":446,"./cssLinearGradientAvailable":447,"./cssPropertyAvailable":448,"./cssViewportUnitsAvailable":449,"./elementAttributeAvailable":450,"./eventTypeAvailable":451,"./isDesktop":454,"./isHandheld":455,"./isRetina":456,"./isTablet":457,"./localStorageAvailable":458,"./mediaElementsAvailable":459,"./sessionStorageAvailable":475,"./svgAvailable":476,"./threeDTransformsAvailable":477,"./touchAvailable":478,"./webGLAvailable":479,dup:183}],454:[function(b,c,a){arguments[4][184][0].apply(a,arguments)
},{"./helpers/globals":452,"./touchAvailable":478,"ac-function/once":482,dup:184}],455:[function(b,c,a){arguments[4][185][0].apply(a,arguments)
},{"./isDesktop":454,"./isTablet":457,"ac-function/once":482,dup:185}],456:[function(b,c,a){arguments[4][186][0].apply(a,arguments)
},{"./helpers/globals":452,dup:186}],457:[function(b,c,a){arguments[4][187][0].apply(a,arguments)
},{"./helpers/globals":452,"./isDesktop":454,"ac-function/once":482,dup:187}],458:[function(b,c,a){arguments[4][188][0].apply(a,arguments)
},{"./helpers/globals":452,"ac-function/once":482,dup:188}],459:[function(b,c,a){arguments[4][189][0].apply(a,arguments)
},{"./helpers/globals":452,"ac-function/once":482,dup:189}],460:[function(b,c,a){arguments[4][190][0].apply(a,arguments)
},{"./ac-browser/BrowserData":461,"./ac-browser/IE":462,dup:190}],461:[function(b,c,a){arguments[4][191][0].apply(a,arguments)
},{"./data":463,dup:191}],462:[function(b,c,a){arguments[4][192][0].apply(a,arguments)
},{dup:192}],463:[function(b,c,a){arguments[4][23][0].apply(a,arguments)},{dup:23}],464:[function(b,c,a){arguments[4][66][0].apply(a,arguments)
},{"./shared/camelCasedEventTypes":467,"./shared/prefixHelper":469,"./utils/eventTypeAvailable":472,dup:66}],465:[function(b,c,a){arguments[4][83][0].apply(a,arguments)
},{"./shared/getStyleTestElement":468,"./shared/prefixHelper":469,"./shared/stylePropertyCache":470,"./utils/toCSS":473,"./utils/toDOM":474,dup:83}],466:[function(b,c,a){arguments[4][84][0].apply(a,arguments)
},{"./getStyleProperty":465,"./shared/prefixHelper":469,"./shared/stylePropertyCache":470,"./shared/styleValueAvailable":471,dup:84}],467:[function(b,c,a){arguments[4][67][0].apply(a,arguments)
},{dup:67}],468:[function(b,c,a){arguments[4][85][0].apply(a,arguments)},{dup:85}],469:[function(b,c,a){arguments[4][68][0].apply(a,arguments)
},{dup:68}],470:[function(b,c,a){arguments[4][87][0].apply(a,arguments)},{dup:87}],471:[function(b,c,a){arguments[4][88][0].apply(a,arguments)
},{"./getStyleTestElement":468,"./stylePropertyCache":470,dup:88}],472:[function(b,c,a){arguments[4][69][0].apply(a,arguments)
},{dup:69}],473:[function(b,c,a){arguments[4][90][0].apply(a,arguments)},{dup:90}],474:[function(b,c,a){arguments[4][91][0].apply(a,arguments)
},{dup:91}],475:[function(b,c,a){arguments[4][207][0].apply(a,arguments)},{"./helpers/globals":452,"ac-function/once":482,dup:207}],476:[function(b,c,a){arguments[4][208][0].apply(a,arguments)
},{"./helpers/globals":452,"ac-function/once":482,dup:208}],477:[function(b,c,a){arguments[4][209][0].apply(a,arguments)
},{"ac-function/once":482,"ac-prefixer/getStyleValue":466,dup:209}],478:[function(b,c,a){arguments[4][210][0].apply(a,arguments)
},{"./helpers/globals":452,"ac-function/once":482,dup:210}],479:[function(b,c,a){arguments[4][211][0].apply(a,arguments)
},{"./helpers/globals":452,"ac-function/once":482,dup:211}],480:[function(c,d,b){function a(f,h){var g;
return function(){var j=arguments;var k=this;var i=function(){g=null;f.apply(k,j)
};clearTimeout(g);g=setTimeout(i,h)}}d.exports=a},{}],481:[function(b,c,a){arguments[4][194][0].apply(a,arguments)
},{dup:194}],482:[function(b,c,a){arguments[4][195][0].apply(a,arguments)},{dup:195}],483:[function(d,f,b){var c=d("ac-dom-events/preventDefault");
var a=d("ac-dom-events/stopPropagation");function h(j){if(j.touches&&j.touches.length===0){return false
}if(typeof j.pageX!=="number"){return false}return true}function g(j){this.originalEvent=j;
if(h(j)){this.pageX=j.touches?j.touches[0].pageX:this.originalEvent.pageX;this.pageY=j.touches?j.touches[0].pageY:this.originalEvent.pageY
}}var i=g.prototype;i.preventDefault=function(){c(this.originalEvent)};i.stopPropagation=function(){a(this.originalEvent)
};f.exports=g},{"ac-dom-events/preventDefault":70,"ac-dom-events/stopPropagation":74}],484:[function(d,b,h){var l=d("ac-event-emitter").EventEmitter;
var f=d("ac-dom-events/addEventListener");var c=d("ac-dom-events/removeEventListener");
var g=d("./PointerEvent");var k=d("ac-object/create");var j=d("./util/inputs");
function a(n,m){this.options=m||{};this.element=n;this._listeners=[];if(m.mouse===true){this._listeners.push(j.MOUSE)
}if(m.touch===true){this._listeners.push(j.TOUCH)}this._boundMove=this._move.bind(this);
this._boundEnd=this._end.bind(this);this._boundCancel=this._cancel.bind(this);this._boundStart=this._start.bind(this);
this._hasFiredStart=false;this._startEvent=null}var i=a.prototype=k(l.prototype);
i._start=function(n){for(var m=0;m<this._listeners.length;m+=1){f(this.element,this._listeners[m].MOVE_EVENT,this._boundMove);
f(this.element,this._listeners[m].END_EVENT,this._boundEnd);f(this.element,this._listeners[m].CANCEL_EVENT,this._boundCancel)
}this._startEvent=new g(n)};i._move=function(m){if(this._hasFiredStart===false){this._hasFiredStart=true;
this.trigger("start",this._startEvent)}this.trigger("move",new g(m))};i._end=function(m){this._removeAllListeners();
this.trigger("end",new g(m));this._hasFiredStart=false;this._startEvent=null};i._cancel=function(m){this._removeAllListeners();
this.trigger("cancel",new g(m));this._hasFiredStart=false;this._startEvent=null
};i._removeAllListeners=function(){for(var m=0;m<this._listeners.length;m+=1){c(this.element,this._listeners[m].MOVE_EVENT,this._boundMove);
c(this.element,this._listeners[m].END_EVENT,this._boundEnd);c(this.element,this._listeners[m].CANCEL_EVENT,this._boundCancel)
}};i.activate=function(){for(var m=0;m<this._listeners.length;m+=1){f(this.element,this._listeners[m].START_EVENT,this._boundStart)
}};i.destroy=function(){this._boundStart=null;this._boundEnd=null;this._boundCancel=null
};a.create=function(n,m){return new a(n,m)};b.exports=a},{"./PointerEvent":483,"./util/inputs":485,"ac-dom-events/addEventListener":62,"ac-dom-events/removeEventListener":71,"ac-event-emitter":256,"ac-object/create":658}],485:[function(c,d,b){var a={MOUSE:{START_EVENT:"mousedown",MOVE_EVENT:"mousemove",END_EVENT:"mouseup",CANCEL_EVENT:"mouseleave"},TOUCH:{START_EVENT:"touchstart",MOVE_EVENT:"touchmove",END_EVENT:"touchend",CANCEL_EVENT:"touchcancel"}};
d.exports=a},{}],486:[function(b,c,a){arguments[4][374][0].apply(a,arguments)},{"./ac-array/flatten":487,"./ac-array/intersection":488,"./ac-array/toArray":489,"./ac-array/union":490,"./ac-array/unique":491,"./ac-array/without":492,dup:374}],487:[function(b,c,a){arguments[4][375][0].apply(a,arguments)
},{dup:375}],488:[function(b,c,a){arguments[4][376][0].apply(a,arguments)},{dup:376}],489:[function(b,c,a){arguments[4][377][0].apply(a,arguments)
},{dup:377}],490:[function(b,c,a){arguments[4][378][0].apply(a,arguments)},{"./flatten":487,"./unique":491,dup:378}],491:[function(b,c,a){arguments[4][379][0].apply(a,arguments)
},{dup:379}],492:[function(b,c,a){arguments[4][380][0].apply(a,arguments)},{dup:380}],493:[function(b,c,a){arguments[4][421][0].apply(a,arguments)
},{"./ac-shared-instance/SharedInstance":494,dup:421}],494:[function(b,c,a){arguments[4][422][0].apply(a,arguments)
},{dup:422}],495:[function(b,c,a){c.exports={CID:b("./ac-mvc-cid/CID")}},{"./ac-mvc-cid/CID":496}],496:[function(c,f,b){var a=c("ac-shared-instance").SharedInstance;
var g="ac-mvc-cid:CID",d="1.0.0";function i(){this._idCount=0}var h=i.prototype;
h._cidPrefix="cid";h.getNewCID=function(){var j=this._cidPrefix+"-"+this._idCount;
this._idCount++;return j};f.exports=a.share(g,d,i)},{"ac-shared-instance":493}],497:[function(b,c,a){arguments[4][2][0].apply(a,arguments)
},{dup:2}],498:[function(b,c,a){arguments[4][244][0].apply(a,arguments)},{"./ac-object/clone":499,"./ac-object/create":500,"./ac-object/defaults":501,"./ac-object/extend":502,"./ac-object/getPrototypeOf":503,"./ac-object/isDate":504,"./ac-object/isEmpty":505,"./ac-object/isRegExp":506,"./ac-object/toQueryParameters":507,dup:244}],499:[function(b,c,a){arguments[4][245][0].apply(a,arguments)
},{"./extend":502,dup:245}],500:[function(b,c,a){arguments[4][246][0].apply(a,arguments)
},{dup:246}],501:[function(b,c,a){arguments[4][247][0].apply(a,arguments)},{"./extend":502,dup:247}],502:[function(b,c,a){arguments[4][248][0].apply(a,arguments)
},{dup:248}],503:[function(b,c,a){arguments[4][249][0].apply(a,arguments)},{dup:249}],504:[function(b,c,a){arguments[4][250][0].apply(a,arguments)
},{dup:250}],505:[function(b,c,a){arguments[4][251][0].apply(a,arguments)},{dup:251}],506:[function(b,c,a){arguments[4][252][0].apply(a,arguments)
},{dup:252}],507:[function(b,c,a){arguments[4][253][0].apply(a,arguments)},{dup:253,qs:497}],508:[function(b,c,a){c.exports={Collection:b("./ac-mvc-collection/Collection")}
},{"./ac-mvc-collection/Collection":509}],509:[function(d,b,j){var g=d("ac-object"),m=d("ac-array"),c=d("ac-mvc-cid").CID,n=d("ac-event-emitter").EventEmitter;
var i=["every","filter","forEach","map","reduce","reduceRight","some","slice","sort","reverse","indexOf","lastIndexOf"];
var l=["intersection","union","unique","without"];var a={add:"add",remove:"remove",set:"set",reset:"reset",empty:"empty",destroy:"destroy"};
function f(r,o,p,q){if(typeof r[o]!=="undefined"){return}r[o]=(function(s,t){return function(){var v=m.toArray(arguments),u=t.concat(v);
return s.apply(this,u)}}(p,q))}function h(o){n.call(this);this.options=g.defaults(this.defaultOptions,o||{});
this.models=[];this.cid=c.getNewCID();if(this.options.ModelType){this.ModelType=this.options.ModelType
}if(this.ModelType){this._modelsObject={}}this.on(a.add,this._addToModelsObject,this);
this.on(a.remove,this._removeFromModelsObject,this);if(this.options.models){this.add(this.options.models)
}}var k=h.prototype=g.create(n.prototype);k.defaultOptions={};k.count=function(){if(!this.models){return null
}return this.models.length};k.add=function(p,o){o=o||{};if(typeof p==="undefined"){p=[]
}p=this._returnAsArray(p);p=this._createModels(p);if(this.models.length===0){this.models=p
}else{this.models=this.models.concat(p)}this._trigger(a.add,{models:p},o);return this
};k.remove=function(t,r){r=r||{};if(!t){return[]}t=this._returnAsArray(t);var q=[],s,p,o=t.length;
for(s=0;s<o;s++){p=this.indexOf(t[s]);if(p>-1){q.push(t[s]);this.spliceWithOptions([p,1],{silent:true})
}}if(q.length>0){this._trigger(a.remove,{models:q},r)}return q};k.reset=function(p,o){o=o||{};
this.empty(o);this.add(p,o);this._trigger(a.reset,{models:this.models},o);return this
};k.empty=function(p){p=p||{};var o=this.slice(0);this.models=[];if(this._modelsObject){this._modelsObject={}
}if(o.length>0){this._trigger(a.remove,{models:o},p);this._trigger(a.empty,{models:o},p)
}return o};k.destroy=function(o){o=o||{};var q=this.empty(o);this._trigger(a.destroy,{models:q},o);
this.off();var p;for(p in this){if(this.hasOwnProperty(p)){this[p]=null}}};k.get=function(r){var p=this._getModelByID(r);
if(p){return p}var q,o=this.models.length;for(q=0;q<o;q++){if((typeof this.models[q].id!=="undefined"&&this.models[q].id===r)||(typeof this.models[q].cid!=="undefined"&&this.models[q].cid===r)){p=this.models[q];
break}}return p};k.set=function(s,A){A=A||{};if(typeof s==="undefined"){s=[]}s=this._returnAsArray(s);
var t,o="id",x=s.length,y=[],B=[],r={},z;if(this.ModelType&&this.ModelType.prototype.idAttribute){o=this.ModelType.prototype.idAttribute
}if(A.matchParameter){o=A.matchParameter}for(t=0;t<x;t++){z=null;if(typeof s[t]==="object"){z=this.get(s[t][o])
}if(z){if(this.ModelType){z.set(s[t]);r[z.cid]=true}else{z=s[t]}B.push(z);continue
}if(this.ModelType){s[t]=this._createModel(s[t])}if(this.ModelType||this.indexOf(s[t])===-1){y.push(s[t])
}B.push(s[t])}var q,v=B.length,w=[],p,u;x=this.models.length;for(t=0;t<x;t++){u=this.models[t];
if(this.ModelType){p=true;if(r[u.cid]){p=false}}else{p=true;for(q=0;q<v;q++){if(u===B[q]){p=false;
break}}}if(p){w.push(u)}}this.models=B;if(y.length>0){this._trigger(a.add,{models:y},A)
}if(w.length>0){this._trigger(a.remove,{models:w},A)}this._trigger(a.set,{models:B},A);
return w};k.at=function(o){if(!this.models){return}return this.models[o]};k.find=function(v,x){if(typeof v!=="object"){console.warn("Collection.protoype.find query needs to be an object");
return[]}x=x||{};var y=[],u=false,s=0,r,q,o=null,w=0,t=this.models.length,p=t;if(x.reverse){w=t-1;
p=-1;u=true}if(x.limit){o=x.limit}for(q=w;(u?q>p:q<p);(u?q--:q++)){r=this.models[q];
if(this._modelMatchesProperties(r,v)){if(u){y.unshift(r)}else{y.push(r)}s++;if(o&&s>=o){break
}}}return y};k.push=function(){return this.pushWithOptions(m.toArray(arguments))
};k.pop=function(){return this.popWithOptions(m.toArray(arguments))};k.shift=function(){return this.shiftWithOptions(m.toArray(arguments))
};k.unshift=function(){return this.unshiftWithOptions(m.toArray(arguments))};k.splice=function(){return this.spliceWithOptions(m.toArray(arguments))
};k.pushWithOptions=function(q,p){p=p||{};var r=this._createModels(q),o=Array.prototype.push.apply(this.models,r);
if(r.length>0){this._trigger(a.add,{models:r},p)}return o};k.popWithOptions=function(p,o){o=o||{};
var q=Array.prototype.pop.call(this.models);if(q){this._trigger(a.remove,{models:[q]},o)
}return q};k.shiftWithOptions=function(p,o){o=o||{};var q=Array.prototype.shift.call(this.models);
if(q){this._trigger(a.remove,{models:[q]},o)}return q};k.unshiftWithOptions=function(q,p){p=p||{};
var r=this._createModels(q),o=Array.prototype.unshift.apply(this.models,r);if(r.length>0){this._trigger(a.add,{models:r},p)
}return o};k.spliceWithOptions=function(q,p){p=p||{};var r=[q[0],q[1]],o,t,s;if(q.length>2){o=q.slice(2,q.length);
t=this._createModels(o);r=r.concat(t)}s=Array.prototype.splice.apply(this.models,r);
if(s.length>0){this._trigger(a.remove,{models:s},p)}if(t){this._trigger(a.add,{models:t},p)
}return s};k._trigger=function(o,q,p){p=p||{};if(!p.silent){this.trigger(o,q)}};
k._getModelByID=function(o){if(this.ModelType&&this._modelsObject&&this._modelsObject[o]){return this._modelsObject[o]
}return null};k._createModel=function(o){if(o instanceof this.ModelType||o instanceof h){return o
}return new this.ModelType(o)};k._createModels=function(q){if(!this.ModelType){return Array.prototype.slice.call(q,0)
}var p=[],r,s,o=q.length;for(s=0;s<o;s++){r=q[s];if(!(r instanceof this.ModelType)){r=this._createModel(r)
}p.push(r)}return p};k._modelMatchesProperties=function(o,q){var p;for(p in q){if(q.hasOwnProperty(p)){if(this._getPropFromModel(o,p)!==q[p]){return false
}}}return true};k._getPropFromModel=function(o,p){if(this.ModelType){return o.get(p)
}return o[p]};k._addToModelsObject=function(o){if(!this._modelsObject||!o.models){this._modelsObject={}
}o.models.forEach(function(p){this._modelsObject[p.id]=p;this._modelsObject[p.cid]=p
},this)};k._removeFromModelsObject=function(o){if(!this._modelsObject||!o.models){this._modelsObject={}
}o.models.forEach(function(p){this._modelsObject[p.id]=null;this._modelsObject[p.cid]=null
},this)};k._returnAsArray=function(o){if(!Array.isArray(o)){o=[o]}return o};k._acArrayProxy=function(p){var o=m.toArray(arguments);
o[0]=this.models;return m[p].apply(m,o)};k._arrayPrototypeProxy=function(p){var o=m.toArray(arguments);
o.shift();return Array.prototype[p].apply(this.models,o)};i.forEach(function(o){if(typeof Array.prototype[o]==="function"){f(this,o,this._arrayPrototypeProxy,[o])
}},k);l.forEach(function(o){if(typeof m[o]==="function"){f(this,o,this._acArrayProxy,[o])
}},k);b.exports=h},{"ac-array":486,"ac-event-emitter":256,"ac-mvc-cid":495,"ac-object":498}],510:[function(b,c,a){arguments[4][421][0].apply(a,arguments)
},{"./ac-shared-instance/SharedInstance":511,dup:421}],511:[function(b,c,a){arguments[4][422][0].apply(a,arguments)
},{dup:422}],512:[function(b,c,a){arguments[4][495][0].apply(a,arguments)},{"./ac-mvc-cid/CID":513,dup:495}],513:[function(b,c,a){arguments[4][496][0].apply(a,arguments)
},{"ac-shared-instance":510,dup:496}],514:[function(b,c,a){arguments[4][2][0].apply(a,arguments)
},{dup:2}],515:[function(b,c,a){arguments[4][244][0].apply(a,arguments)},{"./ac-object/clone":516,"./ac-object/create":517,"./ac-object/defaults":518,"./ac-object/extend":519,"./ac-object/getPrototypeOf":520,"./ac-object/isDate":521,"./ac-object/isEmpty":522,"./ac-object/isRegExp":523,"./ac-object/toQueryParameters":524,dup:244}],516:[function(b,c,a){arguments[4][245][0].apply(a,arguments)
},{"./extend":519,dup:245}],517:[function(b,c,a){arguments[4][246][0].apply(a,arguments)
},{dup:246}],518:[function(b,c,a){arguments[4][247][0].apply(a,arguments)},{"./extend":519,dup:247}],519:[function(b,c,a){arguments[4][248][0].apply(a,arguments)
},{dup:248}],520:[function(b,c,a){arguments[4][249][0].apply(a,arguments)},{dup:249}],521:[function(b,c,a){arguments[4][250][0].apply(a,arguments)
},{dup:250}],522:[function(b,c,a){arguments[4][251][0].apply(a,arguments)},{dup:251}],523:[function(b,c,a){arguments[4][252][0].apply(a,arguments)
},{dup:252}],524:[function(b,c,a){arguments[4][253][0].apply(a,arguments)},{dup:253,qs:514}],525:[function(b,c,a){c.exports={Model:b("./ac-mvc-model/Model")}
},{"./ac-mvc-model/Model":526}],526:[function(c,d,b){var g=c("ac-event-emitter").EventEmitter;
var a=c("ac-object");var h=c("ac-mvc-cid").CID;var i=function(j){this.attributes=a.defaults(this.defaultAttributes,j||{});
this.cid=h.getNewCID();if(this.attributes[this.idAttribute]){this.id=this.attributes[this.idAttribute]
}};var f=i.prototype=a.create(g.prototype);f.defaultAttributes={};f.idAttribute="id";
f._trigger=function(l,k,j){j=j||{};if(j.silent!==true){this.trigger(l,k)}};f._triggerChange=function(l,k,j){return this._trigger("change:"+l,k,j)
};f.get=function(j){if(!this.attributes){return}return this.attributes[j]};f.set=function(k,j){if(!this.attributes){return
}var o;var n;var m;var l={};var p=false;for(o in k){if(k.hasOwnProperty(o)){m=this.get(o);
if((typeof m==="object"&&typeof k[o]==="object"&&JSON.stringify(m)===JSON.stringify(k[o]))||(m===k[o])){continue
}p=true;this.attributes[o]=k[o];n={value:k[o],previous:m};l[o]=n;this._triggerChange(o,n,j)
}}if(p){this._trigger("change",l,j)}};f.has=function(j){if(!this.attributes){return false
}return(this.attributes[j]!==undefined)};f.eachAttribute=function(k,j){if(!this.attributes){return
}var l;for(l in this.attributes){if(this.attributes.hasOwnProperty(l)){k.call(j,{attribute:l,value:this.attributes[l]})
}}};f.destroy=function(){this.trigger("destroy");this.off();var j;for(j in this){if(this.hasOwnProperty(j)){this[j]=null
}}};d.exports=i},{"ac-event-emitter":256,"ac-mvc-cid":512,"ac-object":515}],527:[function(b,d,a){function c(h,f){var g=h.mass;
return{equilibrium:f,stiffness:-30,damping:-8,update:function(l){var j;if(l.fps===0){return
}j=1/l.fps;var k=this.stiffness*((h.position.x-0)-this.equilibrium);var m=this.damping*h.velocity.x;
var i=(k+m)/g;h.velocity.x+=i*j;h.position.x+=h.velocity.x*j}}}d.exports={create:c}
},{}],528:[function(b,c,a){c.exports={Routes:b("./ac-routes/Routes"),Route:b("./ac-routes/Route")}
},{"./ac-routes/Route":529,"./ac-routes/Routes":530}],529:[function(b,c,a){function f(i,k,h,j,g){this.path=i;
this.callback=k;this.context=h;this.greedy=j||false;this.priority=g||0;if(typeof this.priority!=="number"){throw new Error("Priority must be a Number.")
}this.identifierPattern="([a-zA-Z0-9\\-\\_]+)";this.tokensRe=new RegExp(":"+this.identifierPattern,"g");
this.matcher=this._createRouteMatcher(i)}var d=f.prototype;d._createRouteMatcher=function(h){if(h&&h.exec){return{pattern:h}
}else{if(h==="/"){return{pattern:/^\/$/}}else{if(typeof h!=="string"){throw new Error("path must be either a string or regex")
}}}var g=this._extractRouteTokens(h);var j=h.replace(this.tokensRe,this.identifierPattern);
var i=new RegExp(j,"g");return{pattern:i,routeTokens:g}};d._extractRouteTokens=function(j){var g=j.replace(this.tokensRe,":"+this.identifierPattern);
var i=new RegExp(g,"g");var h=i.exec(j);if(h&&h.length>1){h=h.slice(1)}else{h=null
}return h};d.match=function(h){this.matcher.pattern.lastIndex=0;var g=this.matcher.pattern.exec(h);
if(g){var i=(g.length)?g.slice(1):[];var j=this.callback;if(j&&typeof j==="function"){j.apply(this.context||this,i);
return true}}return false};c.exports=f},{}],530:[function(c,d,b){var g=c("./Route");
function a(h){this._routes={};if(h){this.addRoutes(h)}}var f=a.prototype;f._getIndex=function(k,l,j){if(this._routes[k]!==undefined){var h=this._routes[k].length;
while(--h>-1){if(this._routes[k][h].callback===l&&this._routes[k][h].context===j){return h
}}}return -1};f.match=function(k){var j,h;for(j in this._routes){h=this._routes[j].length;
while(--h>-1){if(this._routes[j][h].match(k)&&this._routes[j][h].greedy){break}}}};
f.add=function(j){if(this._routes[j.path]===undefined){this._routes[j.path]=[j]
}else{if(!this.get(j.path,j.callback,j.context)){var k,h=this._routes[j.path].length;
if(h>0){for(k=0;k<h;++k){if(this._routes[j.path][k].priority>j.priority){this._routes[j.path].splice(k,0,j);
return j}}}this._routes[j.path].push(j)}}return j};f.remove=function(h){var j=this._getIndex(h.path,h.callback,h.context);
if(j>-1){this._routes[h.path].splice(j,1);return h}return false};f.get=function(k,l,j){var h=this._getIndex(k,l,j);
if(h>-1){return this._routes[k][h]}return false};f.createRoute=function(k,m,j,l,i){var h=new g(k,m,j,l,i);
this.add(h);return h};f.addRoutes=function(j){if(j instanceof Array){var l,k,h=j.length;
for(l=0;l<h;++l){k=j[l];if(k&&typeof k==="object"){this.add(k)}}}else{throw new Error("routes must be an Array.")
}};f.removeRoutes=function(j){if(j instanceof Array){var l,k,h=j.length;for(l=0;
l<h;++l){k=j[l];if(k&&typeof k==="object"){this.remove(k)}}}else{throw new Error("routes must be an Array.")
}};f.getRoutes=function(h){if(this._routes[h]===undefined){return[]}return this._routes[h]
};d.exports=a},{"./Route":529}],531:[function(c,d,b){function a(g){this.options=g||{}
}var f=a.prototype;f.onExit=function(){};f.onEnter=function(){};d.exports=a},{}],532:[function(d,f,b){var c=d("ac-object");
var h=d("ac-event-emitter").EventEmitter;function a(i){this.options=i||{};this.previousState=null;
this.currentState=i.currentState||null}var g=a.prototype=c.create(h.prototype);
g.handleInput=function(j,k){var i=this.currentState[j];if(typeof i==="function"){return this.currentState[j](this,k)
}};g.gotoPreviousState=function(i){this.changeState(this.previousState,i)};g.changeState=function(k,j){this.previousState=this.currentState;
this.currentState=k;var i=[this.previousState.onExit(this,j),this.currentState.onEnter(this,j)];
return Promise.all(i)};f.exports=a},{"ac-event-emitter":256,"ac-object":662}],533:[function(b,c,a){c.exports={StateMachine:b("./StateMachine"),State:b("./State")}
},{"./State":531,"./StateMachine":532}],534:[function(b,c,a){var g=b("./ac-gallery/Gallery");
var f=b("./ac-gallery/SlideGallery");var d=b("./ac-gallery/FadeGallery");c.exports={Gallery:g,SlideGallery:f,FadeGallery:d}
},{"./ac-gallery/FadeGallery":535,"./ac-gallery/Gallery":536,"./ac-gallery/SlideGallery":537}],535:[function(c,d,a){var h=c("./Gallery");
var b=c("ac-eclipse").Clip;var f=c("ac-dom-styles/setStyle");var g=h.extend({initialize:function(){this._boundCreateClip=this._createClip.bind(this);
this.canSpring=false},_createClip:function(l,i,m,n,k){var j=new b(l,m,{opacity:1},{onStart:function(){f(i,{zIndex:1});
f(l,{zIndex:2})},onComplete:function(){f(i,{opacity:0});window.requestAnimationFrame(k)
},ease:n});return j},drawInitial:function(j){var i=j.get("element");f(i,{zIndex:2,opacity:1});
this.model.forEach(function(k){if(k!==j){f(k.get("element"),{zIndex:1,opacity:0})
}},this)},draw:function(i,k,j){var m=i.get("element");var l=k.get("element");var o=j.easing||this.getEasing();
var n=j.duration||this.getDuration();return new Promise(function(r,q){var p=this._createClip(m,l,n,o,r);
p.play()}.bind(this))},destroy:function(){this._boundCreateClip=null}});d.exports=g
},{"./Gallery":536,"ac-dom-styles/setStyle":327,"ac-eclipse":354}],536:[function(c,b,h){var f=c("ac-object/defaults");
var m=c("ac-object/create");var o=c("ac-object/extend");var n=c("./model/GalleryCollection");
var q=c("ac-event-emitter").EventEmitter;var a=c("ac-routes").Routes;var p=c("ac-state-machine").StateMachine;
var g=c("./states/factory");var k='Could not create gallery: "id" is missing';var i='Could not create gallery: "el" was not specified';
var d={duration:0.4,easing:"linear",endless:false,initial:0};function l(r){this.options=f(d,r||{});
this.id=this.options.id;if(!this.id){throw new Error(k)}this.model=this.options.model||new n();
this.model.setSelected(this.options.initial);this.stateMachine=new p({currentState:g.create("initialize",this)});
this.routes=r.routes||new a();this.routes.add(this.routes.createRoute(this.id+"/show/:id",this.show,this));
this.routes.add(this.routes.createRoute(this.id+"/previous",this.showPrevious,this));
this.routes.add(this.routes.createRoute(this.id+"/next",this.showNext,this));this.el=this.options.el;
if(!this.el){throw new Error(i)}this.easing=this.options.easing||this.easing;this.duration=this.options.duration||this.duration;
this.initialize(r);this.show(this.model.getSelected())}var j=l.prototype=m(q.prototype);
j.sendGalleryEvent=function(r){this.trigger(r.type,r.data)};j.easing="linear";j.duration=0.4;
j.getSlideAt=function(r){return this.model.at(r)};j.setDuration=function(r){this.duration=r
};j.getDuration=function(){return this.duration};j.setEasing=function(r){this.easing=r
};j.getEasing=function(){return this.easing};j.cancelDraw=function(){};j.initialize=function(){};
j.drawInitial=function(){};j.beforeDraw=function(){};j.draw=function(){};j.afterDraw=function(){};
j.destroy=function(){};j.drawBounceInProgress=function(){};j.drawBounceOutProgress=function(){};
j.drawProgress=function(){};j.drawSnap=function(){};j.drawResize=function(){};j.removeStyles=function(){};
j.resize=function(){};j.setProgress=function(r){this.stateMachine.handleInput("seek",{progress:r})
};j.snap=function(r){this.stateMachine.handleInput("pointerUp",{progress:r})};j.getSelected=function(){return this.model.getSelected()
};j.getItems=function(){return this.model.models};j.setEngaged=function(r){this.stateMachine.handleInput("engagementChange",{engaged:r})
};j.slideAt=function(){var r=this.model.at.apply(this.model,arguments);if(!r){return null
}return r};j.getPreviousState=function(){return this.stateMachine.previousState
};j.getCurrentState=function(){return this.stateMachine.currentState};j.isEndless=function(){return this.model.isEndless()
};j.indexOf=function(r){return this.model.indexOf(r)};j.count=function(){return this.model.count()
};j.getNext=function(){return this.model.getNext()};j.getPrevious=function(){return this.model.getPrevious()
};j.getSelectedIndex=function(){return this.model.indexOfSelected()};j.showNext=function(r){var s=this.model.getNext();
return this.show(s,r)};j.showPrevious=function(r){var s=this.model.getPrevious();
return this.show(s,r)};j.getLastIndex=function(){return this.model.count()-1};j.getLast=function(){return this.model.getLast()
};j.getFirst=function(){return this.model.at(0)};j.show=function(s,r){this.stateMachine.handleInput("onDraw",{query:s,options:r})
};j.clear=function(){this.stateMachine.handleInput("onClear")};j.dealloc=function(){this.stateMachine.handleInput("onDealloc")
};l.create=c("./factory/create");l.extend=function(u){var t=this;var s=function(){t.apply(this,arguments)
};var r=m(this.prototype);s.prototype=o(r,u);o(s,this);return s};b.exports=l},{"./factory/create":539,"./model/GalleryCollection":545,"./states/factory":555,"ac-event-emitter":256,"ac-object/create":658,"ac-object/defaults":659,"ac-object/extend":660,"ac-routes":528,"ac-state-machine":533}],537:[function(c,a,f){var k=c("./Gallery");
var j=c("ac-eclipse").Clip;var h=c("ac-dom-styles/setStyle");var i=c("ac-dom-metrics/getDimensions");
var m=c("ac-dom-events/addEventListener");var n=c("ac-dom-events/removeEventListener");
var g=c("./SlideGallery/feature-detect");var d=c("./model/SlideGalleryTransformData");
var l="Could not create SlideGallery: no `slideEl` option was specified";var b=k.extend({_bounceInClip:null,_bounceOutClip:null,_getBounceInClip:function(){if(this._bounceInClip!==null){return this._bounceInClip
}var p=this._getTransformStyles(this.getFirst(),this.getFirst(),{addDistance:i(this.options.el).width});
var o=this._getTransformStyles(this.getFirst(),this.getLast());this._bounceInClip=new j(this.options.slideEl,this.getDuration()*this.count(),p,{ease:"linear",propsFrom:o});
return this._bounceInClip},_getBounceOutClip:function(){if(this._bounceOutClip!==null){return this._bounceOutClip
}var p=this._getTransformStyles(this.getLast(),this.getFirst(),{addDistance:-i(this.options.el).width});
var o=this._getTransformStyles(this.getLast(),this.getFirst());this._bounceOutClip=new j(this.options.slideEl,this.getDuration(),p,{ease:"linear",propsFrom:o});
return this._bounceOutClip},_renderProgress:function(p,o){p.setProgress(o)},_clip:null,_toClip:function(){if(this._clip){return this._clip
}var p=this._getTransformStyles(this.getLast(),this.getFirst());var o=this._getTransformStyles(this.getFirst(),this.getLast());
this._clip=new j(this.options.slideEl,this.getDuration(),p,{ease:"linear",propsFrom:o});
return this._clip},initialize:function(o){if(!o.slideEl){throw new Error(l)}},drawBounceOutProgress:function(o){var p=this._getBounceOutClip();
this._renderProgress(p,o)},drawBounceInProgress:function(o){var p=this._getBounceInClip();
this._renderProgress(p,o)},drawProgress:function(o){var p=this._toClip();return this._renderProgress(p,o)
},drawInitial:function(o){this.drawSnap(o)},drawSnap:function(p,s,r){var t=this._toClip();
var o=this.indexOf(p);var q=o/(this.count()-1);t.setProgress(q)},removeStyles:function(){h(this.options.slideEl,{transition:null,transform:null})
},drawResize:function(o,q,p){this._clip=null;this.drawSnap(o,q,p)},_getTransitionProp:function(){if(g.canUseTransform()){return"transform"
}return"left"},_transitionEndString:"transitionend",_drawCSSTransition:function(p,r,q){var o=this._getTransitionProp();
return new Promise(function(u,t){var s=function(v){if(v.target===this.options.slideEl){h(this.options.slideEl,{transition:null});
n(this.options.slideEl,this._transitionEndString,s);u()}}.bind(this);m(this.options.slideEl,this._transitionEndString,s);
p.transition=o+" "+q+"s "+r;h(this.options.slideEl,p)}.bind(this))},_drawRAFTransition:function(o,q,p){return new Promise(function(t,s){var r=new j(this.options.slideEl,p,o,{easing:q,onComplete:t,inlineStyles:true});
r.play()}.bind(this))},_getTransformStyles:function(o,r,q){var p=new d(this,o,r,q);
p.calculate();p.setStyles(this.didCalculateStyles(p.styles,o,r));return p.renderStylesObject()
},didCalculateStyles:function(q,o,p){return q},draw:function(o,q,p){var s=p.duration||this.getDuration();
var t=p.easing||this.getEasing();var r=this._getTransformStyles(o,q);if(g.canUseCSSTransitions()){return this._drawCSSTransition(r,t,s)
}else{return this._drawRAFTransition(r,t,s)}},destroy:function(){this.removeStyles();
this._bounceInClip=null;this._bounceOutClip=null;this._clip=null}});a.exports=b
},{"./Gallery":536,"./SlideGallery/feature-detect":538,"./model/SlideGalleryTransformData":547,"ac-dom-events/addEventListener":62,"ac-dom-events/removeEventListener":71,"ac-dom-metrics/getDimensions":276,"ac-dom-styles/setStyle":327,"ac-eclipse":354}],538:[function(c,d,b){var a=c("ac-feature/cssPropertyAvailable");
d.exports={canUseCSSTransitions:function(){return a("transition")},canUseTransform:function(){return a("transform")
}}},{"ac-feature/cssPropertyAvailable":448}],539:[function(f,b,q){var d=f("./../model/GalleryCollection");
var g=f("ac-object/defaults");var l=f("ac-dom-nodes/isElement");var i=f("./../inputs/pointer");
var m=f("./../inputs/Trigger");var r=f("./../inputs/Keyboard");var s=f("./../inputs/Engagement");
var c=f("./../inputs/resize");var p=f("./../observer/analytics");var j=f("./../observer/trigger");
var o="Could not create gallery: triggerSelector should be a string";var h='Could not create gallery: no "model" was specified';
var n={keyboard:true,trigger:{events:["click"]}};function k(u,t){t=t||{};t.models=u.map(function(v){if(l(v)){return{id:v.id,element:v}
}return v});return new d(t)}b.exports=function a(y){y=y||{};y=g(n,y);if(!y.model){throw new Error(h)
}y.model=k(y.model,{endless:y.endless});var x=new this(y);var w={};var A={};w.resize=c(x,y.resize);
if(y.pointer){var v=y.pointer;v.element=v.el||x.el;w.pointer=i(x,v)}if(y.triggerSelector){if(typeof y.triggerSelector!=="string"){throw new Error(o)
}else{w.trigger=m(x,{selector:y.triggerSelector,events:y.trigger.events});A.trigger=j(x,{selector:y.triggerSelector})
}}if(y.keyboard===true){x.keyboard=r(x)}var u=y.engagementElement||x.el;w.engagement=s(x,{el:u});
var z=x.id;if(x.el&&x.el.getAttribute("data-analytics-id")){z=x.el.getAttribute("data-analytics-id")
}var t={galleryName:z};p(x,t);x.inputs=w;x.observers=A;return x}},{"./../inputs/Engagement":540,"./../inputs/Keyboard":541,"./../inputs/Trigger":542,"./../inputs/pointer":543,"./../inputs/resize":544,"./../model/GalleryCollection":545,"./../observer/analytics":549,"./../observer/trigger":550,"ac-dom-nodes/isElement":306,"ac-object/defaults":659}],540:[function(c,d,b){var h=c("ac-element-tracker").ElementTracker;
var f=c("ac-object/create");var a={handleEngagementChange:function(i){this.stateMachine.handleInput("engagementChange",{engaged:i})
},isNotEngaged:function(){this.handleEngagementChange(false)},isEngaged:function(){this.handleEngagementChange(true)
},onEnterView:function(){this.isEngaged()},onExitView:function(){this.isNotEngaged()
}};d.exports=function g(i,j){j=j||{};var l=new h();var k=l.addElement(j.el);var m=f(a);
m.stateMachine=i.stateMachine;l.refreshElementState(k);if(k.inView){m.onEnterView()
}else{m.onExitView()}k.on("enterview",m.onEnterView,m);k.on("exitview",m.onExitView,m);
l.start();i.once("destroy",function(){k.off("enterview",m.onEnterView,m);k.off("exitview",m.onExitView,m);
l=null;k=null});return m}},{"ac-element-tracker":441,"ac-object/create":658}],541:[function(f,g,d){var i=f("ac-dom-events/addEventListener");
var b=f("ac-dom-events/removeEventListener");var h=f("ac-object/create");var c={keyDown:function(j){this.stateMachine.handleInput("keydown",{interactionEvent:j})
}};g.exports=function a(l,m){m=m||{};var j=h(c);j.stateMachine=l.stateMachine;var k=function(n){j.keyDown(n)
};i(document,"keydown",k);l.once("destroy",function(){b(document,"keydown",k);k=null
});return j}},{"ac-dom-events/addEventListener":62,"ac-dom-events/removeEventListener":71,"ac-object/create":658}],542:[function(b,a,c){var j=b("ac-dom-events/addEventListener");
var l=b("ac-dom-events/removeEventListener");var h=b("ac-dom-events");var i=b("ac-object/create");
var k=b("ac-dom-traversal/matchesSelector");var f=b("ac-dom-traversal/ancestor");
var g={triggerInteraction:function(n){var m=h.target(n);var o=null;if(k(m,this.selector)){o=m
}else{if(k(m,this.selector+" *")){o=f(m,this.selector)}}if(o){h.preventDefault(n);
this.stateMachine.handleInput("trigger",{interactionEvent:n,target:o})}}};a.exports=function d(m,o){var n=i(g);
n.selector=o.selector;n.stateMachine=m.stateMachine;var p=function(q){n.triggerInteraction(q)
};o.events.forEach(function(q){j(document,q,p)});m.once("destroy",function(){o.events.forEach(function(q){l(document,q,p)
});n=null});return n}},{"ac-dom-events":64,"ac-dom-events/addEventListener":62,"ac-dom-events/removeEventListener":71,"ac-dom-traversal/ancestor":93,"ac-dom-traversal/matchesSelector":102,"ac-object/create":658}],543:[function(c,d,b){var h=c("ac-gesture/PointerMove");
var f=c("ac-object/create");var i={onPointerMove:function(j){this.stateMachine.handleInput("pointerMove",{interactionEvent:j})
},onPointerDown:function(k){var j={interactionEvent:k,element:this.gesture.element};
this.stateMachine.handleInput("pointerDown",j)},onPointerUp:function(j){this.stateMachine.handleInput("pointerUp",{interactionEvent:j})
}};var g={interactions:[],handledDown:false,isMovingHorizontal:function(){if(this.interactions.length<4){return null
}var p=this.interactions[0];var l=this.interactions[this.interactions.length-1];
var q=l.pageX-p.pageX;var o=l.pageY-p.pageY;var k=Math.atan2(o,q);var n=k*(180/Math.PI);
var j=75;var m=Math.abs(n)<j||Math.abs(n)>(180-j);return m},onPointerMove:function(j){if(this.interactions.length<4){this.interactions.push(j);
return}if(this.isMovingHorizontal()){if(!this.handledDown){this.handledDown=true;
this.parent.onPointerDown(this.interactions[0])}this.parent.onPointerMove(j)}},onPointerDown:function(j){this.interactions.push(j)
},onPointerUp:function(j){if(this.handledDown===true){this.parent.onPointerUp(j)
}this.interactions=[];this.handledDown=false}};d.exports=function a(j,k){k=k||{};
var l=h.create(k.element,k);var n=f(i);n.stateMachine=j.stateMachine;n.gesture=l;
var m=f(g);m.parent=n;l.on("start",function(o){m.onPointerDown(o)});l.on("move",function(o){m.onPointerMove(o)
});l.on("end",function(o){m.onPointerUp(o)});l.on("cancel",function(o){m.onPointerUp(o)
});l.activate();j.once("destroy",function(){l.off();l._removeAllListeners();l.destroy();
l=null});return m}},{"ac-gesture/PointerMove":484,"ac-object/create":658}],544:[function(d,f,c){var b=d("ac-function/debounce");
var h=d("ac-dom-events/addEventListener");var a=d("ac-dom-events/removeEventListener");
var g=d("ac-object/create");var i={resize:function(j){this.stateMachine.handleInput("resize",j)
}};f.exports=function(k,m){m=m||{};if(typeof m.debounceTimeout==="number"){m.debounceTimeout=m.debounceTimeout
}else{m.debounceTimeout=300}var l=g(i);l.stateMachine=k.stateMachine;var n=b(function(o){l.resize(o)
},m.debounceTimeout);h(window,"resize",n);function j(){a(window,"resize",n);n=null
}k.once("destroy",j);return l}},{"ac-dom-events/addEventListener":62,"ac-dom-events/removeEventListener":71,"ac-function/debounce":480,"ac-object/create":658}],545:[function(c,d,b){var g=c("ac-mvc-collection").Collection;
var i=c("ac-mvc-model").Model;var f=c("ac-object/create");function a(){g.apply(this,arguments);
this._selected=null}var h=a.prototype=f(g.prototype);h.ModelType=i;h.query=function(k){var j;
if(typeof k==="number"){j=this.at(k)}else{if(typeof k==="string"){j=this.get(k)
}else{if(this.indexOf(k)!==-1){j=k}}}return j};h.isEndless=function(){return !!this.options.endless
};h.getPrevious=function(){var j=this.indexOf(this._selected)-1;var k;if(this.isEndless()===true&&j<0){j=this.models.length-1
}k=this.models[j];if(k===undefined){k=null}return k};h.getNext=function(){var j=this.indexOf(this._selected)+1;
var k;if(this.isEndless()===true&&j===this.models.length){j=0}k=this.at(j);if(k===undefined){k=null
}return k};h.getFirst=function(){return this.at(0)};h.getLast=function(){return this.at(this.models.length-1)
};h.count=function(){return this.models.length};h.setSelected=function(j){this._selected=this.query(j)
};h.getSelected=function(){return this._selected};h.indexOfSelected=function(){return this.indexOf(this._selected)
};d.exports=a},{"ac-mvc-collection":508,"ac-mvc-model":525,"ac-object/create":658}],546:[function(c,d,b){var g="Could not trigger event: Event data is invalid";
function f(h,i){i=i||{};this.data=i||{};this.type=h}function a(h){if(!h||!h.incoming||!h.outgoing){throw new TypeError(g)
}}f.create=function(h,i){return new f(h,i)};f.createWillShowEvent=function(h){a(h);
return new f("willShow",h)};f.createDidShowEvent=function(h){a(h);return new f("didShow",h)
};d.exports=f},{}],547:[function(d,f,c){var h=d("./../SlideGallery/feature-detect");
var b=d("ac-dom-metrics/getDimensions");function a(j,i,l,k){this.gallery=j;this.incoming=i;
this.outgoing=l;this.options=k||{};this.styles={}}var g=a.prototype;g._getTranslateXDistance=function(j){var k=this.gallery.indexOf(j);
var m=0;for(var l=0;l<k;l+=1){m+=b(this.gallery.slideAt(l).get("element")).width
}return -m};g._convertTranslateXToLeftIfNoTransformSupport=function(){if(!h.canUseTransform()){this.styles.left=this.styles.transform.translateX;
this.styles.transform=undefined}};g.calculate=function(){var i=this._getTranslateXDistance(this.incoming);
this.styles=this._buildTransformObject(i)};g.setStyles=function(i){this.styles=i
};g._buildTransformObject=function(i){return{transform:{translateX:i,translateZ:0}}
};g._addUnits=function(){if(!/px/.test(this.styles.transform.translateX)){this.styles.transform.translateX+="px"
}};g.renderStylesObject=function(){if(typeof this.options.addDistance==="number"){this.styles.transform.translateX=parseInt(this.styles.transform.translateX)+this.options.addDistance
}if(this.options.invert===true){this.styles.transform.translateX=-(parseInt(this.styles.transform.translateX))
}this._addUnits();this._convertTranslateXToLeftIfNoTransformSupport();return this.styles
};f.exports=a},{"./../SlideGallery/feature-detect":538,"ac-dom-metrics/getDimensions":276}],548:[function(b,c,a){function f(g){this.options=g||{};
this._interactions=[];this._particle=this.options.particle;this.pixelDistance=this.options.pixelDistance;
this.distance=this.options.distance}var d=f.prototype;d.destroy=function(){this._particle=null
};d._updateFromInteraction=function(){if(this._interactions.length<2){return}var l=this._interactions[0];
var k=this._interactions[1];var m=-(k.pageX-l.pageX);var h=this.pixelDistance;var j=this.distance;
var g=m/h;var i=(j*g);this._particle.velocity={x:i,y:i};this._particle.position.x+=this._particle.velocity.x;
this._particle.position.y+=this._particle.velocity.y;this._removeInteraction()};
d._onUpdate=function(g){this._updateFromInteraction()};d._removeInteraction=function(){this._interactions.shift()
};d.addInteraction=function(g){if(this._interactions.length===2){this._removeInteraction()
}this._interactions.push(g);this._onUpdate()};d.onPointerDown=function(g){this.addInteraction(g)
};d.onPointerMove=function(g){g.preventDefault();this.addInteraction(g)};d.onPointerUp=function(g){this._interactions=[]
};d.isMovingHorizontally=function(){if(this._interactions.length<4){return null
}var k=this._interactions[0];var h=this._interactions[this._interactions.length-1];
var l=h.x-k.x;var j=h.y-k.y;var g=Math.atan2(j,l);var i=g*(180/Math.PI);return(i<15)
};c.exports=f},{}],549:[function(c,d,b){var f;try{f=c("ac-analytics").observer.Gallery
}catch(g){}d.exports=function a(i,h){if(!f){return}var j=new f(i,h);i.once("destroy",function(){if(j.gallery){j.removeListener()
}j=null})}},{"ac-analytics":"ac-analytics"}],550:[function(d,c,f){var j=d("ac-object/create");
var b=d("ac-dom-traversal/querySelectorAll");var i=d("ac-classlist/add");var g=d("ac-classlist/remove");
var a="current";var k="disabled";var h={paintPaddleNavs:function(l,m){if(this.gallery.isEndless()){return
}if(l===this.gallery.getFirst()){this.disablePreviousPaddles()}else{if(m&&m===this.gallery.getFirst()){this.enablePreviousPaddles()
}}if(l===this.gallery.getLast()){this.disableNextPaddles()}else{if(m&&m===this.gallery.getLast()){this.enableNextPaddles()
}}},generateFullSelector:function(m,l){return this.selector+'[href="#'+m+"/show/"+l+'"]'
},addClassNameToElements:function(m,l){m.forEach(function(n){i(n,l)})},removeClassNameFromElements:function(m,l){m.forEach(function(n){g(n,l)
})},getElementsPointingToSlide:function(m){var l=this.generateFullSelector(this.gallery.id,m.id);
return b(l)},getNextPaddleNavs:function(){var l=this.selector+'[href="#'+this.gallery.id+'/next"]';
return b(l)},getPreviousPaddleNavs:function(){var l=this.selector+'[href="#'+this.gallery.id+'/previous"]';
return b(l)},disableNextPaddles:function(){var l=this.getNextPaddleNavs();this.addClassNameToElements(l,k)
},enableNextPaddles:function(){var l=this.getNextPaddleNavs();this.removeClassNameFromElements(l,k)
},disablePreviousPaddles:function(){var l=this.getPreviousPaddleNavs();this.addClassNameToElements(l,k)
},enablePreviousPaddles:function(){var l=this.getPreviousPaddleNavs();this.removeClassNameFromElements(l,k)
},onWillShow:function(l){var m=this.getElementsPointingToSlide(l.incoming);this.addClassNameToElements(m,a);
var n=this.getElementsPointingToSlide(l.outgoing);this.removeClassNameFromElements(n,a);
if(this.gallery.isEndless()){return}if(l.incoming===this.gallery.getFirst()){this.disablePreviousPaddles()
}else{if(l.outgoing===this.gallery.getFirst()){this.enablePreviousPaddles()}}if(l.incoming===this.gallery.getLast()){this.disableNextPaddles()
}else{if(l.outgoing===this.gallery.getLast()){this.enableNextPaddles()}}this.paintPaddleNavs(l.incoming,l.outgoing)
},onReady:function(){var m=this.gallery.getSelected();var l=b(this.selector);this.removeClassNameFromElements(l,a);
var n=this.getElementsPointingToSlide(m);this.addClassNameToElements(n,a);this.paintPaddleNavs(m)
}};c.exports=function(l,n){n=n||{};var m=j(h);m.selector=n.selector;m.gallery=l;
l.on("willShow",m.onWillShow,m);l.once("ready",m.onReady,m);l.once("destroy",function(){l.off("willShow",m.onWillShow,m);
l.off("ready",m.onReady,m);var o=m.getElementsPointingToSlide(l.getSelected());
m.removeClassNameFromElements(o,a);m=null});return m}},{"ac-classlist/add":50,"ac-classlist/remove":60,"ac-dom-traversal/querySelectorAll":123,"ac-object/create":658}],551:[function(c,d,b){var a=c("ac-state-machine").State;
var f=c("ac-object/create");var i=c("./factory");var h=function(j,k){a.apply(this,arguments);
this.gallery=j;this.options=k||{}};var g=h.prototype=f(a.prototype);g.onDealloc=function(k,j){k.changeState(i.create("dealloc",this.gallery),j)
};d.exports=h},{"./factory":555,"ac-object/create":658,"ac-state-machine":533}],552:[function(b,c,a){var g=b("./GalleryState");
var d=b("ac-object/create");var h=function(){g.apply(this,arguments)};var f=h.prototype=d(g.prototype);
f.name="dealloc";f.onEnter=function(j,i){this.gallery.destroy();this.gallery.trigger("destroy");
this.gallery.off()};c.exports=h},{"./GalleryState":551,"ac-object/create":658}],553:[function(b,a,f){var d=b("./GalleryState");
var h=b("ac-object/create");var j=b("./../model/UserDrag");var c=b("./factory");
function i(){d.apply(this,arguments);this.index=(typeof this.options.startIndex==="number")?this.options.startIndex:this.gallery.getSelectedIndex();
this.count=this.gallery.count();this.stops=this._generateStops();this.particle=this.options.particle||this._createParticle();
this.distance=this.stops[1]}var g=i.prototype=h(d.prototype);g.name="dragging";
g._createParticle=function(){return{position:{x:this.stops[this.index],y:this.stops[this.index]},mass:0.5}
};g._generateStops=function(){var m=this.count-1;var l=[];var k=0;while(k<=m){l.push(k/m);
k+=1}return l};g.onEnter=function(l,k){if(l.previousState.name!=="seeking"){this.userDragModel=new j({pixelDistance:k.element.offsetWidth,startIndex:this.startIndex,count:this.count,particle:this.particle,distance:this.distance});
this.userDragModel.onPointerDown(k.interactionEvent);l.changeState(c.create("seeking",this.gallery),{progress:this.particle.position.x})
}};g.onExit=function(l,k){if(l.currentState.name!=="seeking"){this.userDragModel.destroy();
this.userDragModel=null;this.boundOnPointerComplete=null;this.gallery=null}};g.pointerMove=function(m,l){this.userDragModel.onPointerMove(l.interactionEvent);
var k=this.particle.position;m.changeState(c.create("seeking",this.gallery),{progress:k.x})
};g.getNextPosition=function(){var k=this.index;if(this.particle.velocity.x>0){k+=1;
if(k>=this.stops.length){k=this.stops.length-1}}else{k-=1;if(k<0){k=0}}return this.stops[k]
};g.getNextIndex=function(){return this.stops.indexOf(this.getNextPosition())};
g.pointerUp=function(l,k){this.userDragModel.onPointerUp(k.interactionEvent);if(this.gallery.canSpring!==false){l.changeState(c.create("springing",this.gallery,{particle:this.particle,equilibrium:this.getNextPosition(),index:this.getNextIndex(),interactionEvent:k.interactionEvent}),k)
}else{k=k||{};k.incoming=this.gallery.slideAt(this.getNextIndex());k.outgoing=this.gallery.getSelected();
l.changeState(c.create("drawing",this.gallery),k)}};a.exports=i},{"./../model/UserDrag":548,"./GalleryState":551,"./factory":555,"ac-object/create":658}],554:[function(c,b,h){var a=c("ac-console");
var j=c("ac-object/create");var f=c("./GalleryState");var d=c("./factory");var g=c("./../model/GalleryEvent");
var k=function(){f.apply(this,arguments);this._nextState="idle"};var i=k.prototype=j(f.prototype);
i.name="drawing";i.engagementChange=function(m,l){this._nextState="not_engaged"
};i.pointerMove=function(m,l){l.interactionEvent.preventDefault()};i.onDealloc=function(m,l){this._nextState="dealloc"
};i.onEnter=function(n,o){var t=this.gallery;var m=o.incoming;var p=o.outgoing;
var s=o.options||{};var l=s.interactionEvent||t.interactionEvent;var q={incoming:m,outgoing:p,interactionEvent:l,options:s};
var r=Promise.resolve();if(m!==p){t.sendGalleryEvent(g.createWillShowEvent(q));
r=r.then(t.beforeDraw.bind(t,m,p,s)).then(t.draw.bind(t,m,p,s)).then(t.afterDraw.bind(t,m,p,s))
}else{this._nextState="idle"}return r.then(function(){n.changeState(d.create(this._nextState,t),{incoming:m,outgoing:p,event:q})
}.bind(this))["catch"](function(u){a.log(u)})};i.onExit=function(n,m){var l=this.gallery;
if(n.currentState.name!=="dealloc"&&l.getSelected()!==m.incoming){l.model.setSelected(m.incoming);
l.sendGalleryEvent(g.createDidShowEvent(m.event))}this._nextState=null};b.exports=k
},{"./../model/GalleryEvent":546,"./GalleryState":551,"./factory":555,"ac-console":273,"ac-object/create":658}],555:[function(c,d,b){var a;
d.exports={create:function f(i,g,h){var j=a[i];if(!j){throw new Error('Could not create state: state "'+i+'" not found')
}return new j(g,h)}};a={initialize:c("./initialize"),idle:c("./idle"),not_engaged:c("./not_engaged"),seeking:c("./seeking"),resize:c("./resize"),dealloc:c("./dealloc"),drawing:c("./drawing"),dragging:c("./dragging"),springing:c("./springing")}
},{"./dealloc":552,"./dragging":553,"./drawing":554,"./idle":556,"./initialize":557,"./not_engaged":558,"./resize":559,"./seeking":560,"./springing":561}],556:[function(b,c,a){var g=b("./GalleryState");
var d=b("ac-object/create");var h=b("./factory");var i=function(){g.apply(this,arguments)
};var f=i.prototype=d(g.prototype);f.name="idle";f.engagementChange=function(k,j){if(j.engaged===false){k.changeState(h.create("not_engaged",this.gallery),j)
}};f.seek=function(k,j){k.changeState(h.create("seeking",this.gallery),j)};f.trigger=function(l,j){var k=j.target;
this.gallery.interactionEvent=j.interactionEvent;this.gallery.routes.match(k.getAttribute("href"))
};f.keydown=function(m,l){var k=l.interactionEvent;var j=("which" in k)?k.which:k.keyCode;
if(j===37){this.gallery.showPrevious(l)}else{if(j===39){this.gallery.showNext(l)
}}};f.resize=function(k,j){k.changeState(h.create("resize",this.gallery),j)};f.onClear=function(){this.gallery.removeStyles()
};f.pointerDown=function(k,j){k.changeState(h.create("dragging",this.gallery),j)
};f.seek=function(k,j){k.changeState(h.create("seeking",this.gallery),j)};f.onDraw=function(n,m){var j=this.gallery.model.query(m.query);
var l=this.gallery.model.getSelected();var k=m.options||{};if(!j||j===l){return
}n.changeState(h.create("drawing",this.gallery),{incoming:j,outgoing:l,options:k})
};c.exports=i},{"./GalleryState":551,"./factory":555,"ac-object/create":658}],557:[function(b,a,g){var d=b("./GalleryState");
var i=b("ac-object/create");var f=b("./../model/GalleryEvent");var c=b("./factory");
function j(){d.apply(this,arguments);this._engaged=true}var h=j.prototype=i(d.prototype);
h.name="initialize";h.engagementChange=function(l,k){this._engaged=k.engaged};h.onDraw=function(n,l){var k=this.gallery.model.query(l.query);
var m=this.gallery.drawInitial(k);return Promise.resolve().then(m).then(function(){var o="idle";
if(this._engaged===false){o="not_engaged"}n.changeState(c.create(o,this.gallery))
}.bind(this))};h.onExit=function(m,l){var k=f.create("ready",{incoming:this.gallery.getSelected()});
this.gallery.sendGalleryEvent(k);this._engaged=null};a.exports=j},{"./../model/GalleryEvent":546,"./GalleryState":551,"./factory":555,"ac-object/create":658}],558:[function(c,d,b){var h=c("./GalleryState");
var f=c("ac-object/create");var i=c("./factory");function a(){h.apply(this,arguments)
}var g=a.prototype=f(h.prototype);g.name="not_engaged";g.resize=function(k,j){k.changeState(i.create("resize",this.gallery),j)
};g.engagementChange=function(k,j){if(j.engaged===true){k.changeState(i.create("idle",this.gallery))
}};d.exports=a},{"./GalleryState":551,"./factory":555,"ac-object/create":658}],559:[function(c,d,b){var i=c("./GalleryState");
var g=c("./../model/GalleryEvent");var f=c("ac-object/create");var a=function(){i.apply(this,arguments)
};var h=a.prototype=f(i.prototype);h.name="resize";h.onEnter=function(l,k){this.gallery.sendGalleryEvent(g.create("resizing"));
var j=this.gallery.getSelected();Promise.resolve().then(this.gallery.drawResize.bind(this.gallery,j)).then(function(){l.changeState(l.previousState,k)
}.bind(this))};h.onExit=function(k,j){this.gallery.sendGalleryEvent(g.create("resized"))
};d.exports=a},{"./../model/GalleryEvent":546,"./GalleryState":551,"ac-object/create":658}],560:[function(c,d,b){var i=c("./GalleryState");
var g=c("ac-object/create");var f=c("./../model/GalleryEvent");function a(){i.apply(this,arguments)
}var h=a.prototype=g(i.prototype);h.name="seeking";h.drawProgress=function(j){if(j<0){return this.gallery.drawBounceInProgress(Math.abs(j))
}else{if(j>1){return this.gallery.drawBounceOutProgress(j-1)}else{return this.gallery.drawProgress(j)
}}};h.onEnter=function(l,j){var k={progress:j.progress};this.gallery.sendGalleryEvent(f.create("willseek",k));
this.drawProgress(j.progress);this.gallery.sendGalleryEvent(f.create("didseek",k));
l.changeState(l.previousState,j)};h.onExit=function(k,j){this.gallery=null};d.exports=a
},{"./../model/GalleryEvent":546,"./GalleryState":551,"ac-object/create":658}],561:[function(d,b,h){var g=d("./GalleryState");
var j=d("ac-object/create");var f=d("./factory");var a=d("ac-clock").Clock;var c=d("ac-physics/spring");
function k(){g.apply(this,arguments);this.particle=this.options.particle;this.equilibrium=this.options.equilibrium;
this.index=this.options.index;this.spring=c.create(this.particle,this.equilibrium);
this.spring.stiffness=-60;this.spring.damping=-10;this.interactionEvent=null;this.clock=new a();
this.clock.start();this.clock.on("update",this._clockUpdate,this);this.clock.on("draw",this._clockDraw,this)
}var i=k.prototype=j(g.prototype);i.name="springing";i.onEnter=function(m,l){if(m.previousState.name!=="seeking"){if(l.interactionEvent.originalEvent){this.interactionEvent=l.interactionEvent.originalEvent
}else{this.interactionEvent=l.interactionEvent}this._setLastPosition();this.fsm=m
}};i.onExit=function(m,l){if(m.currentState.name!=="seeking"){this.clock.stop();
this.clock.off();this.equilibrium=null;this.index=null;this.fsm=null;this.particle=null;
this.spring=null;this.clock=null;this.lastPosition=null;this.interactionEvent=null
}};i.pointerDown=function(m,l){m.changeState(f.create("dragging",this.gallery,{particle:this.particle,startIndex:this.index}),l)
};i._clockUpdate=function(l){var m=Math.abs(this.particle.position.x-this.spring.equilibrium);
if(l.fps===0){return}if(m>0.0005){this.spring.update(l)}else{this.particle.position.x=this.spring.equilibrium
}};i._clockDraw=function(l){var m;if(this._shouldDraw()){m=Math.abs(this.particle.position.x-this.spring.equilibrium);
this._setLastPosition();if(m!==0){this.fsm.changeState(f.create("seeking",this.gallery),{progress:this.particle.position.x})
}else{this.fsm.changeState(f.create("drawing",this.gallery),{incoming:this.gallery.slideAt(this.index),outgoing:this.gallery.getSelected(),options:{interactionEvent:this.interactionEvent}})
}}};i._setLastPosition=function(){this.lastPosition={x:this.particle.position.x,y:this.particle.position.y}
};i._shouldDraw=function(){if(this.lastPosition.x===this.particle.position.x&&this.lastPosition.y===this.particle.position.y){return false
}return true};b.exports=k},{"./GalleryState":551,"./factory":555,"ac-clock":269,"ac-object/create":658,"ac-physics/spring":527}],562:[function(c,g,b){var f=c("./Request");
var h=c("./XDomain-request");var a=c("./URLParser");var d=function(){};d._Request=f;
d.prototype={_defaults:{method:"get",timeout:5000},_extend:function(){for(var k=1;
k<arguments.length;k++){for(var j in arguments[k]){if(arguments[k].hasOwnProperty(j)){arguments[0][j]=arguments[k][j]
}}}return arguments[0]},_getOptions:function(i,j){return this._extend({},this._defaults,j,i)
},_isCrossDomainRequest:function(l){var k=new a();var j=k.parse(window.location.href).origin;
var i=k.parse(l).origin;k.destroy();return(i!==j)},create:function(i){return new f(i)
},cors:function(j){var i=(window.XDomainRequest&&document.documentMode<10)?h:f;
return new i(j)},get:function(j){var i;j=this._getOptions({method:"get"},j);if(this._isCrossDomainRequest(j.url)){i=this.cors(j)
}else{i=this.create(j)}return i.send()},getJSON:function(i){return this.get(i).then(function(j){return JSON.parse(j.responseText)
})},head:function(i){i=this._getOptions({method:"head"},i);return this.create(i).send()
},isCrossDomainRequest:function(i){return this._isCrossDomainRequest(i)},post:function(i){i=this._getOptions({method:"post"},i);
return this.create(i).send()}};g.exports=d},{"./Request":563,"./URLParser":564,"./XDomain-request":565}],563:[function(b,d,a){var c=function(f){this._initialize(f)
};c.create=function(){var f=function(){};f.prototype=c.prototype;return new f()
};c.prototype={_addReadyStateChangeHandler:function(){this.xhr.onreadystatechange=function(f){if(this.xhr.readyState===4){clearTimeout(this._timeout);
if(this.xhr.status>=200&&this.xhr.status<300){this.resolve(this.xhr)}else{this.reject(this.xhr)
}}}.bind(this)},_getPromise:function(){this.promise=new Promise(function(g,f){this.resolve=g;
this.reject=f}.bind(this))},_getTransport:function(){return new XMLHttpRequest()
},_initialize:function(h){var g=this._validateConfiguration(h);if(g){throw g}this._configuration=h;
var f=this._configuration.method.toUpperCase();this.xhr=this._getTransport();this._getPromise();
this.xhr.open(f,this._configuration.url);this._setRequestHeaders(h.headers);this._addReadyStateChangeHandler()
},_sendXHR:function(){if(this.xhr){if(this._configuration&&this._configuration.data){this.xhr.send(this._configuration.data)
}else{this.xhr.send()}}},_setRequestHeaders:function(f){if(f){f.forEach(function(g){this.xhr.setRequestHeader(g.name,g.value)
},this)}},_setTimeout:function(f){if(!f){if(this._configuration&&this._configuration.timeout){f=this._configuration.timeout
}else{clearTimeout(this._timeout);this._timeout=null}}if(this._timeout!==null){clearTimeout(this._timeout)
}if(f>0){this._timeout=setTimeout(function(){this.xhr.abort();this.reject()}.bind(this),f)
}},_timeout:null,_validateConfiguration:function(h){if(!h){return"Must provide a configuration object"
}var g=[];var f=h.headers;if(!h.url){g.push("Must provide a url")}if(!h.method){g.push("Must provide a method")
}if(f){if(!Array.isArray(f)){return"Must provide an array of headers"}this._validateHeaders(f,g)
}return g.join(", ")},_validateHeaders:function(h,j){for(var g=0,f=h.length;g<f;
g++){if(!h[g].hasOwnProperty("name")||!h[g].hasOwnProperty("value")){j.push("Must provide a name and value key for all headers");
break}}},promise:null,reject:null,resolve:null,send:function(){this._setTimeout();
this._sendXHR();return this.promise},xhr:null};d.exports=c},{}],564:[function(c,d,b){var a=function(){this.parser=null
};var f=a.prototype;f.parse=function(k){var i;var l;var h;var g;var j;if(typeof k!=="string"){throw new TypeError(k+" must be a string")
}if(!this.parser){this.parser=document.createElement("a")}this._qualifyPath(k);
h=this.parser.hostname;l=this.parser.protocol;g=this._normalizePort(this.parser);
i=this.parser.origin||this._constructOriginString(this.parser,g);j=this.parser.search;
return{originalPath:k,qualifiedPath:this.parser.href,protocol:l,hostname:h,origin:i,port:g,search:j}
};f.destroy=function(){this.parser=null};f._constructOriginString=function(i,g){var h=g?":"+g:"";
return i.protocol+"//"+i.hostname+h};f._normalizePort=function(g){return(g.port==="80"||g.port==="443"||g.port==="0")?"":g.port
};f._qualifyPath=function(g){this.parser.href=g;this.parser.href=this.parser.href
};d.exports=a},{}],565:[function(b,d,a){var c=b("./Request");var f=function(g){c.apply(this,arguments)
};f.prototype=c.create();f.prototype._getTransport=function(){return new XDomainRequest()
};f.prototype._addReadyStateChangeHandler=function(){this.xhr.ontimeout=function(){this.reject(this.xhr)
}.bind(this);this.xhr.onerror=function(){this.reject(this.xhr)}.bind(this);this.xhr.onload=function(){this.resolve(this.xhr)
}.bind(this)};f.prototype._setTimeout=function(g){if(!g){if(this._configuration&&this._configuration.timeout){g=this._configuration.timeout
}}if(g>0){this.xhr.timeout=g}};f.prototype._sendXHR=function(){setTimeout(function(){c.prototype._sendXHR.call(this)
}.bind(this),0)};d.exports=f},{"./Request":563}],566:[function(b,f,a){var d=b("./ac-ajax/Ajax");
var c=b("./ac-ajax/Request");f.exports=new d();f.exports.Ajax=d;f.exports.Request=c
},{"./ac-ajax/Ajax":562,"./ac-ajax/Request":563}],567:[function(c,g,b){var f=c("./Request");
var h=c("./XDomain-request");var a=c("./URLParser");var d=function(){};d._Request=f;
d.prototype={_defaults:{method:"get",timeout:5000},_extend:function(){for(var k=1;
k<arguments.length;k++){for(var j in arguments[k]){if(arguments[k].hasOwnProperty(j)){arguments[0][j]=arguments[k][j]
}}}return arguments[0]},_getOptions:function(i,j){return this._extend({},this._defaults,j,i)
},create:function(i){return new f(i)},cors:function(j){var i=(window.XDomainRequest&&document.documentMode<10)?h:f;
return new i(j)},_isCrossDomainRequest:function(l){var k=new a();var j=k.parse(window.location.href).origin;
var i=k.parse(l).origin;k.destroy();return(i!==j)},get:function(j){var i;j=this._getOptions({method:"get"},j);
if(this._isCrossDomainRequest(j.url)){i=this.cors(j)}else{i=this.create(j)}return i.send()
},getJSON:function(i){return this.get(i).then(function(j){return JSON.parse(j.responseText)
})},head:function(i){i=this._getOptions({method:"head"},i);return this.create(i).send()
},post:function(i){i=this._getOptions({method:"post"},i);return this.create(i).send()
}};g.exports=d},{"./Request":568,"./URLParser":569,"./XDomain-request":570}],568:[function(b,c,a){arguments[4][563][0].apply(a,arguments)
},{dup:563}],569:[function(b,c,a){arguments[4][564][0].apply(a,arguments)},{dup:564}],570:[function(b,d,a){var c=b("./Request");
var f=function(g){c.apply(this,arguments)};f.prototype=c.create();f.prototype._getTransport=function(){return new XDomainRequest()
};f.prototype._addReadyStateChangeHandler=function(){this.xhr.ontimeout=function(){this.reject(this.xhr)
}.bind(this);this.xhr.onerror=function(){this.reject(this.xhr)}.bind(this);this.xhr.onload=function(){this.resolve(this.xhr)
}.bind(this)};f.prototype._setTimeout=function(g){if(!g){if(this._configuration&&this._configuration.timeout){g=this._configuration.timeout
}}if(g>0){this.xhr.timeout=g}};d.exports=f},{"./Request":568}],571:[function(b,c,a){arguments[4][566][0].apply(a,arguments)
},{"./ac-ajax/Ajax":567,"./ac-ajax/Request":568,dup:566}],572:[function(b,c,a){arguments[4][262][0].apply(a,arguments)
},{"./ac-feature/cssPropertyAvailable":573,"./ac-feature/localStorageAvailable":574,dup:262}],573:[function(b,c,a){arguments[4][263][0].apply(a,arguments)
},{dup:263}],574:[function(b,c,a){arguments[4][264][0].apply(a,arguments)},{dup:264}],575:[function(require,module,exports){(function(process,global){(function(){var _slice=Array.prototype.slice;
try{_slice.call(document.documentElement)}catch(e){Array.prototype.slice=function(begin,end){end=(typeof end!=="undefined")?end:this.length;
if(Object.prototype.toString.call(this)==="[object Array]"){return _slice.call(this,begin,end)
}var i,cloned=[],size,len=this.length;var start=begin||0;start=(start>=0)?start:len+start;
var upTo=(end)?end:len;if(end<0){upTo=len+end}size=upTo-start;if(size>0){cloned=new Array(size);
if(this.charAt){for(i=0;i<size;i++){cloned[i]=this.charAt(start+i)}}else{for(i=0;
i<size;i++){cloned[i]=this[start+i]}}}return cloned}}}());
/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/
;
if(typeof document!=="undefined"&&!("classList" in document.createElement("a"))){(function(view){if(!("HTMLElement" in view)&&!("Element" in view)){return
}var classListProp="classList",protoProp="prototype",elemCtrProto=(view.HTMLElement||view.Element)[protoProp],objCtr=Object,strTrim=String[protoProp].trim||function(){return this.replace(/^\s+|\s+$/g,"")
},arrIndexOf=Array[protoProp].indexOf||function(item){var i=0,len=this.length;for(;
i<len;i++){if(i in this&&this[i]===item){return i}}return -1},DOMEx=function(type,message){this.name=type;
this.code=DOMException[type];this.message=message},checkTokenAndGetIndex=function(classList,token){if(token===""){throw new DOMEx("SYNTAX_ERR","An invalid or illegal string was specified")
}if(/\s/.test(token)){throw new DOMEx("INVALID_CHARACTER_ERR","String contains an invalid character")
}return arrIndexOf.call(classList,token)},ClassList=function(elem){var trimmedClasses=strTrim.call(elem.className),classes=trimmedClasses?trimmedClasses.split(/\s+/):[],i=0,len=classes.length;
for(;i<len;i++){this.push(classes[i])}this._updateClassName=function(){elem.className=this.toString()
}},classListProto=ClassList[protoProp]=[],classListGetter=function(){return new ClassList(this)
};DOMEx[protoProp]=Error[protoProp];classListProto.item=function(i){return this[i]||null
};classListProto.contains=function(token){token+="";return checkTokenAndGetIndex(this,token)!==-1
};classListProto.add=function(){var tokens=arguments,i=0,l=tokens.length,token,updated=false;
do{token=tokens[i]+"";if(checkTokenAndGetIndex(this,token)===-1){this.push(token);
updated=true}}while(++i<l);if(updated){this._updateClassName()}};classListProto.remove=function(){var tokens=arguments,i=0,l=tokens.length,token,updated=false;
do{token=tokens[i]+"";var index=checkTokenAndGetIndex(this,token);if(index!==-1){this.splice(index,1);
updated=true}}while(++i<l);if(updated){this._updateClassName()}};classListProto.toggle=function(token,forse){token+="";
var result=this.contains(token),method=result?forse!==true&&"remove":forse!==false&&"add";
if(method){this[method](token)}return !result};classListProto.toString=function(){return this.join(" ")
};if(objCtr.defineProperty){var classListPropDesc={get:classListGetter,enumerable:true,configurable:true};
try{objCtr.defineProperty(elemCtrProto,classListProp,classListPropDesc)}catch(ex){if(ex.number===-2146823252){classListPropDesc.enumerable=false;
objCtr.defineProperty(elemCtrProto,classListProp,classListPropDesc)}}}else{if(objCtr[protoProp].__defineGetter__){elemCtrProto.__defineGetter__(classListProp,classListGetter)
}}}(self))}if(document.createEvent){try{new window.CustomEvent("click")}catch(err){window.CustomEvent=(function(){function CustomEvent(event,params){params=params||{bubbles:false,cancelable:false,detail:undefined};
var evt=document.createEvent("CustomEvent");evt.initCustomEvent(event,params.bubbles,params.cancelable,params.detail);
return evt}CustomEvent.prototype=window.Event.prototype;return CustomEvent}())}}if(!Function.prototype.bind){Function.prototype.bind=function(originalContext){if(typeof this!=="function"){throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable")
}var applicableArgs=Array.prototype.slice.call(arguments,1);var functionToBind=this;
var fnOriginalPrototype=function(){};var fnBound=function(){return functionToBind.apply((this instanceof fnOriginalPrototype&&originalContext)?this:originalContext,applicableArgs.concat(Array.prototype.slice.call(arguments)))
};fnOriginalPrototype.prototype=this.prototype;fnBound.prototype=new fnOriginalPrototype();
return fnBound}}if(!Array.isArray){Array.isArray=function isArray(object){return(object&&typeof object==="object"&&"splice" in object&&"join" in object)
}}if(!Array.prototype.every){Array.prototype.every=function every(callback,thisObj){var arrayObject=Object(this);
var len=arrayObject.length>>>0;var i;if(typeof callback!=="function"){throw new TypeError(callback+" is not a function")
}for(i=0;i<len;i+=1){if(i in arrayObject&&!callback.call(thisObj,arrayObject[i],i,arrayObject)){return false
}}return true}}if(!Array.prototype.filter){Array.prototype.filter=function filter(callback,thisObj){var arrayObject=Object(this);
var len=arrayObject.length>>>0;var i;var results=[];if(typeof callback!=="function"){throw new TypeError(callback+" is not a function")
}for(i=0;i<len;i+=1){if(i in arrayObject&&callback.call(thisObj,arrayObject[i],i,arrayObject)){results.push(arrayObject[i])
}}return results}}if(!Array.prototype.forEach){Array.prototype.forEach=function forEach(callback,thisObj){var arrayObject=Object(this);
var i;var currentValue;if(typeof callback!=="function"){throw new TypeError("No function object passed to forEach.")
}for(i=0;i<this.length;i+=1){currentValue=arrayObject[i];callback.call(thisObj,currentValue,i,arrayObject)
}}}if(!Array.prototype.indexOf){Array.prototype.indexOf=function indexOf(searchElement,fromIndex){var startIndex=fromIndex||0;
var currentIndex=0;if(startIndex<0){startIndex=this.length+fromIndex-1;if(startIndex<0){throw"Wrapped past beginning of array while looking up a negative start index."
}}for(currentIndex=0;currentIndex<this.length;currentIndex++){if(this[currentIndex]===searchElement){return currentIndex
}}return(-1)}}if(!Array.prototype.lastIndexOf){Array.prototype.lastIndexOf=function lastIndexOf(value,fromIndex){var arrayObj=Object(this);
var len=arrayObj.length>>>0;var i;fromIndex=parseInt(fromIndex,10);if(len<=0){return -1
}i=(typeof fromIndex==="number")?Math.min(len-1,fromIndex):len-1;i=i>=0?i:len-Math.abs(i);
for(;i>=0;i-=1){if(i in arrayObj&&value===arrayObj[i]){return i}}return -1}}if(!Array.prototype.map){Array.prototype.map=function map(callback,thisObj){var arrayObj=Object(this);
var len=arrayObj.length>>>0;var i;var result=new Array(len);if(typeof callback!=="function"){throw new TypeError(callback+" is not a function")
}for(i=0;i<len;i+=1){if(i in arrayObj){result[i]=callback.call(thisObj,arrayObj[i],i,arrayObj)
}}return result}}if(!Array.prototype.reduce){Array.prototype.reduce=function reduce(callback,initialValue){var arrayObj=Object(this);
var len=arrayObj.length>>>0;var i=0;var result;if(typeof callback!=="function"){throw new TypeError(callback+" is not a function")
}if(typeof initialValue==="undefined"){if(!len){throw new TypeError("Reduce of empty array with no initial value")
}result=arrayObj[0];i=1}else{result=initialValue}while(i<len){if(i in arrayObj){result=callback.call(undefined,result,arrayObj[i],i,arrayObj);
i+=1}}return result}}if(!Array.prototype.reduceRight){Array.prototype.reduceRight=function reduceRight(callback,initialValue){var arrayObj=Object(this);
var len=arrayObj.length>>>0;var i=len-1;var result;if(typeof callback!=="function"){throw new TypeError(callback+" is not a function")
}if(initialValue===undefined){if(!len){throw new TypeError("Reduce of empty array with no initial value")
}result=arrayObj[len-1];i=len-2}else{result=initialValue}while(i>=0){if(i in arrayObj){result=callback.call(undefined,result,arrayObj[i],i,arrayObj);
i-=1}}return result}}if(!Array.prototype.some){Array.prototype.some=function some(callback,thisObj){var arrayObj=Object(this);
var len=arrayObj.length>>>0;var i;if(typeof callback!=="function"){throw new TypeError(callback+" is not a function")
}for(i=0;i<len;i+=1){if(i in arrayObj&&callback.call(thisObj,arrayObj[i],i,arrayObj)===true){return true
}}return false}}if(!Date.now){Date.now=function now(){return new Date().getTime()
}}if(!Date.prototype.toISOString){Date.prototype.toISOString=function toISOString(){if(!isFinite(this)){throw new RangeError("Date.prototype.toISOString called on non-finite value.")
}var parts={year:this.getUTCFullYear(),month:this.getUTCMonth()+1,day:this.getUTCDate(),hours:this.getUTCHours(),minutes:this.getUTCMinutes(),seconds:this.getUTCSeconds(),mseconds:(this.getUTCMilliseconds()/1000).toFixed(3).substr(2,3)};
var prop;var prefix;for(prop in parts){if(parts.hasOwnProperty(prop)&&prop!=="year"&&prop!=="mseconds"){parts[prop]=String(parts[prop]).length===1?"0"+String(parts[prop]):String(parts[prop])
}}if(parts.year<0||parts.year>9999){prefix=parts.year<0?"-":"+";parts.year=prefix+String(Math.abs(parts.year/1000000)).substr(2,6)
}return parts.year+"-"+parts.month+"-"+parts.day+"T"+parts.hours+":"+parts.minutes+":"+parts.seconds+"."+parts.mseconds+"Z"
}}if(!Date.prototype.toJSON){Date.prototype.toJSON=function(key){var obj=Object(this);
var prim;var isPrimitive=function(input){var type=typeof input;var types=[null,"undefined","boolean","string","number"].some(function(value){return value===type
});if(types){return true}return false};var toPrimitive=function(input){var value;
if(isPrimitive(input)){return input}value=(typeof input.valueOf==="function")?input.valueOf():(typeof input.toString==="function")?input.toString():null;
if(value&&isPrimitive(value)){return value}throw new TypeError(input+" cannot be converted to a primitive")
};prim=toPrimitive(obj);if(typeof prim==="number"&&!isFinite(prim)){return null
}if(typeof obj.toISOString!=="function"){throw new TypeError("toISOString is not callable")
}return obj.toISOString.call(obj)}}if(!String.prototype.trim){String.prototype.trim=function trim(){return this.replace(/^\s+|\s+$/g,"")
}}if(!Object.keys){Object.keys=function keys(obj){var keysArray=[];var currentKey;
if((!obj)||(typeof obj.hasOwnProperty!=="function")){throw"Object.keys called on non-object."
}for(currentKey in obj){if(obj.hasOwnProperty(currentKey)){keysArray.push(currentKey)
}}return keysArray}}if(typeof JSON=="undefined"||!("stringify" in JSON&&"parse" in JSON)){if(!this.JSON){this.JSON={}
}(function(){function f(n){return n<10?"0"+n:n}if(typeof String.prototype.toJSON!=="function"){String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()
}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;
function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];
return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)
})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];
if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)
}if(typeof rep==="function"){value=rep.call(holder,key,value)}switch(typeof value){case"string":return quote(value);
case"number":return isFinite(value)?String(value):"null";case"boolean":case"null":return String(value);
case"object":if(!value){return"null"}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;
for(i=0;i<length;i+=1){partial[i]=str(i,value)||"null"}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";
gap=mind;return v}if(rep&&typeof rep==="object"){length=rep.length;for(i=0;i<length;
i+=1){k=rep[i];if(typeof k==="string"){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)
}}}}else{for(k in value){if(Object.hasOwnProperty.call(value,k)){v=str(k,value);
if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";
gap=mind;return v}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(value,replacer,space){var i;
gap="";indent="";if(typeof space==="number"){for(i=0;i<space;i+=1){indent+=" "}}else{if(typeof space==="string"){indent=space
}}rep=replacer;if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")
}return str("",{"":value})}}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;
function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==="object"){for(k in value){if(Object.hasOwnProperty.call(value,k)){v=walk(value,k);
if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)
}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)
})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");
return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")
}}}())}window.matchMedia=window.matchMedia||(function(doc,undefined){var bool,docElem=doc.documentElement,refNode=docElem.firstElementChild||docElem.firstChild,fakeBody=doc.createElement("body"),div=doc.createElement("div");
div.id="mq-test-1";div.style.cssText="position:absolute;top:-100em";fakeBody.style.background="none";
fakeBody.appendChild(div);return function(q){div.innerHTML='&shy;<style media="'+q+'"> #mq-test-1 { width:42px; }</style>';
docElem.insertBefore(fakeBody,refNode);bool=div.offsetWidth===42;docElem.removeChild(fakeBody);
return{matches:bool,media:q}}}(document));(function(){var lastTime=0;var vendors=["ms","moz","webkit","o"];
for(var x=0;x<vendors.length&&!window.requestAnimationFrame;++x){window.requestAnimationFrame=window[vendors[x]+"RequestAnimationFrame"];
window.cancelAnimationFrame=window[vendors[x]+"CancelAnimationFrame"]||window[vendors[x]+"CancelRequestAnimationFrame"]
}if(!window.requestAnimationFrame){window.requestAnimationFrame=function(callback,element){var currTime=Date.now();
var timeToCall=Math.max(0,16-(currTime-lastTime));var id=window.setTimeout(function(){callback(currTime+timeToCall)
},timeToCall);lastTime=currTime+timeToCall;return id}}if(!window.cancelAnimationFrame){window.cancelAnimationFrame=function(id){clearTimeout(id)
}}}());window.XMLHttpRequest=window.XMLHttpRequest||function(){var request;try{request=new ActiveXObject("Msxml2.XMLHTTP")
}catch(exception){try{request=new ActiveXObject("Microsoft.XMLHTTP")}catch(exception){request=false
}}return request};!function(){var a,b,c,d;!function(){var e={},f={};a=function(a,b,c){e[a]={deps:b,callback:c}
},d=c=b=function(a){function c(b){if("."!==b.charAt(0)){return b}for(var c=b.split("/"),d=a.split("/").slice(0,-1),e=0,f=c.length;
f>e;e++){var g=c[e];if(".."===g){d.pop()}else{if("."===g){continue}d.push(g)}}return d.join("/")
}if(d._eak_seen=e,f[a]){return f[a]}if(f[a]={},!e[a]){throw new Error("Could not find module "+a)
}for(var g,h=e[a],i=h.deps,j=h.callback,k=[],l=0,m=i.length;m>l;l++){"exports"===i[l]?k.push(g={}):k.push(b(c(i[l])))
}var n=j.apply(this,k);return f[a]=g||n}}(),a("promise/all",["./utils","exports"],function(a,b){function c(a){var b=this;
if(!d(a)){throw new TypeError("You must pass an array to all.")}return new b(function(b,c){function d(a){return function(b){f(a,b)
}}function f(a,c){h[a]=c,0===--i&&b(h)}var g,h=[],i=a.length;0===i&&b([]);for(var j=0;
j<a.length;j++){g=a[j],g&&e(g.then)?g.then(d(j),c):f(j,g)}})}var d=a.isArray,e=a.isFunction;
b.all=c}),a("promise/asap",["exports"],function(a){function b(){return function(){process.nextTick(e)
}}function c(){var a=0,b=new i(e),c=document.createTextNode("");return b.observe(c,{characterData:!0}),function(){c.data=a=++a%2
}}function d(){return function(){j.setTimeout(e,1)}}function e(){for(var a=0;a<k.length;
a++){var b=k[a],c=b[0],d=b[1];c(d)}k=[]}function f(a,b){var c=k.push([a,b]);1===c&&g()
}var g,h="undefined"!=typeof window?window:{},i=h.MutationObserver||h.WebKitMutationObserver,j="undefined"!=typeof global?global:void 0===this?window:this,k=[];
g="undefined"!=typeof process&&"[object process]"==={}.toString.call(process)?b():i?c():d(),a.asap=f
}),a("promise/config",["exports"],function(a){function b(a,b){return 2!==arguments.length?c[a]:(c[a]=b,void 0)
}var c={instrument:!1};a.config=c,a.configure=b}),a("promise/polyfill",["./promise","./utils","exports"],function(a,b,c){function d(){var a;
a="undefined"!=typeof global?global:"undefined"!=typeof window&&window.document?window:self;
var b="Promise" in a&&"resolve" in a.Promise&&"reject" in a.Promise&&"all" in a.Promise&&"race" in a.Promise&&function(){var b;
return new a.Promise(function(a){b=a}),f(b)}();b||(a.Promise=e)}var e=a.Promise,f=b.isFunction;
c.polyfill=d}),a("promise/promise",["./config","./utils","./all","./race","./resolve","./reject","./asap","exports"],function(a,b,c,d,e,f,g,h){function i(a){if(!v(a)){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
}if(!(this instanceof i)){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
}this._subscribers=[],j(a,this)}function j(a,b){function c(a){o(b,a)}function d(a){q(b,a)
}try{a(c,d)}catch(e){d(e)}}function k(a,b,c,d){var e,f,g,h,i=v(c);if(i){try{e=c(d),g=!0
}catch(j){h=!0,f=j}}else{e=d,g=!0}n(b,e)||(i&&g?o(b,e):h?q(b,f):a===D?o(b,e):a===E&&q(b,e))
}function l(a,b,c,d){var e=a._subscribers,f=e.length;e[f]=b,e[f+D]=c,e[f+E]=d}function m(a,b){for(var c,d,e=a._subscribers,f=a._detail,g=0;
g<e.length;g+=3){c=e[g],d=e[g+b],k(b,c,d,f)}a._subscribers=null}function n(a,b){var c,d=null;
try{if(a===b){throw new TypeError("A promises callback cannot return that same promise.")
}if(u(b)&&(d=b.then,v(d))){return d.call(b,function(d){return c?!0:(c=!0,b!==d?o(a,d):p(a,d),void 0)
},function(b){return c?!0:(c=!0,q(a,b),void 0)}),!0}}catch(e){return c?!0:(q(a,e),!0)
}return !1}function o(a,b){a===b?p(a,b):n(a,b)||p(a,b)}function p(a,b){a._state===B&&(a._state=C,a._detail=b,t.async(r,a))
}function q(a,b){a._state===B&&(a._state=C,a._detail=b,t.async(s,a))}function r(a){m(a,a._state=D)
}function s(a){m(a,a._state=E)}var t=a.config,u=(a.configure,b.objectOrFunction),v=b.isFunction,w=(b.now,c.all),x=d.race,y=e.resolve,z=f.reject,A=g.asap;
t.async=A;var B=void 0,C=0,D=1,E=2;i.prototype={constructor:i,_state:void 0,_detail:void 0,_subscribers:void 0,then:function(a,b){var c=this,d=new this.constructor(function(){});
if(this._state){var e=arguments;t.async(function(){k(c._state,d,e[c._state-1],c._detail)
})}else{l(this,d,a,b)}return d},"catch":function(a){return this.then(null,a)}},i.all=w,i.race=x,i.resolve=y,i.reject=z,h.Promise=i
}),a("promise/race",["./utils","exports"],function(a,b){function c(a){var b=this;
if(!d(a)){throw new TypeError("You must pass an array to race.")}return new b(function(b,c){for(var d,e=0;
e<a.length;e++){d=a[e],d&&"function"==typeof d.then?d.then(b,c):b(d)}})}var d=a.isArray;
b.race=c}),a("promise/reject",["exports"],function(a){function b(a){var b=this;
return new b(function(b,c){c(a)})}a.reject=b}),a("promise/resolve",["exports"],function(a){function b(a){if(a&&"object"==typeof a&&a.constructor===this){return a
}var b=this;return new b(function(b){b(a)})}a.resolve=b}),a("promise/utils",["exports"],function(a){function b(a){return c(a)||"object"==typeof a&&null!==a
}function c(a){return"function"==typeof a}function d(a){return"[object Array]"===Object.prototype.toString.call(a)
}var e=Date.now||function(){return(new Date).getTime()};a.objectOrFunction=b,a.isFunction=c,a.isArray=d,a.now=e
}),b("promise/polyfill").polyfill()}()}).call(this,require("_process"),typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})
},{_process:968}],576:[function(b,c,a){b("ac-polyfills");c.exports.Asset=b("./ac-asset-loader/AssetLoader/Asset");
c.exports.Asset.Ajax=b("./ac-asset-loader/AssetLoader/Asset/Ajax");c.exports.Asset.Ajax.JSON=b("./ac-asset-loader/AssetLoader/Asset/Ajax/JSON");
c.exports.Asset.Img=b("./ac-asset-loader/AssetLoader/Asset/Img");c.exports.Asset.Video=b("./ac-asset-loader/AssetLoader/Asset/Video");
c.exports.Asset.Video.Element=b("./ac-asset-loader/AssetLoader/Asset/Video/Element");
c.exports.Asset.Binary=b("./ac-asset-loader/AssetLoader/Asset/Binary");c.exports.Asset.Binary.Chunk=b("./ac-asset-loader/AssetLoader/Asset/Binary/Chunk");
c.exports.AssetLoader=b("./ac-asset-loader/AssetLoader");c.exports.AssetLoader.Queue=b("./ac-asset-loader/AssetLoader/Queue")
},{"./ac-asset-loader/AssetLoader":577,"./ac-asset-loader/AssetLoader/Asset":578,"./ac-asset-loader/AssetLoader/Asset/Ajax":579,"./ac-asset-loader/AssetLoader/Asset/Ajax/JSON":580,"./ac-asset-loader/AssetLoader/Asset/Binary":581,"./ac-asset-loader/AssetLoader/Asset/Binary/Chunk":582,"./ac-asset-loader/AssetLoader/Asset/Img":583,"./ac-asset-loader/AssetLoader/Asset/Video":586,"./ac-asset-loader/AssetLoader/Asset/Video/Element":587,"./ac-asset-loader/AssetLoader/Queue":588,"ac-polyfills":575}],577:[function(b,a,h){var j;
var g=b("ac-object");var o=b("ac-event-emitter").EventEmitter;var n=b("./AssetLoader/Asset/Ajax");
var f=b("./AssetLoader/Asset/Ajax/JSON");var i=b("./AssetLoader/Asset/Img");var m=b("./AssetLoader/Asset/Video");
var l=b("../utils/destroy");var c=b("./AssetLoader/Queue");var d={};function k(r,p){this.options=g.defaults(d,p||{});
var q=this._generateAssets(r);this._queue=new c(q,this.options);this._timeoutDuration=this.options.timeout;
this._timeout=null;this._proxyListeners()}j=k.prototype=new o();j.load=function(){if(this._timeoutDuration){this._timeout=window.setTimeout(this._onTimeout.bind(this),this._timeoutDuration)
}return this._queue.start()};j._clearTimeout=function(){window.clearTimeout(this._timeout);
this._timeout=null};j.pause=function(){this._clearTimeout();return this._queue.pause()
};j.destroy=function(){l(this,true)};j._onTimeout=function(){this._queue.abort();
this._queue.destroy();this.trigger("timeout")};j._generateAssets=function(q){if(this._boundGenerateAsset===undefined){this._boundGenerateAsset=this._generateAsset.bind(this)
}q=[].concat(q);var p=q.map(this._boundGenerateAsset);return p};j._generateAsset=function(q,p){if(k.isValidAsset(q)){q.index=p;
return q}if(typeof q!=="string"||q===""){return null}if(!!q.match(/\.json$/)){return new f(q,p)
}if(!!q.match(/\.(xml|txt)$/)){return new n(q,p)}return new i(q,p)};j._proxyListeners=function(){this._boundOnResolved=this._onResolved.bind(this);
this._boundOnRejected=this._onRejected.bind(this);this._boundOnProgress=this._onProgress.bind(this);
this._queue.on("resolved",this._boundOnResolved);this._queue.on("rejected",this._boundOnRejected);
this._queue.on("progress",this._boundOnProgress)};j._onResolved=function(p){this._clearTimeout();
this.trigger("loaded",p)};j._onRejected=function(p){this.trigger("error",p)};j._onProgress=function(p){this.trigger("progress",p)
};k.isValidAsset=function(p){return !!(p&&(typeof p.load==="function")&&(typeof p.destroy==="function"))
};k.isValidAssetLoader=function(p){return !!(p&&(typeof p.load==="function")&&(typeof p.pause==="function")&&(typeof p.destroy==="function"))
};a.exports=k},{"../utils/destroy":589,"./AssetLoader/Asset/Ajax":579,"./AssetLoader/Asset/Ajax/JSON":580,"./AssetLoader/Asset/Img":583,"./AssetLoader/Asset/Video":586,"./AssetLoader/Queue":588,"ac-event-emitter":256,"ac-object":632}],578:[function(d,g,b){var i;
var c=d("ac-deferred").Deferred;var h=d("ac-event-emitter").EventEmitter;var f=d("../../utils/destroy");
function a(k,j){this.src=k;this.index=j;this.data=null;this._boundOnLoad=this._onLoad.bind(this);
this._boundOnError=this._onError.bind(this)}i=a.prototype=new h();i.load=function(){this._load()
};i.destroy=function(){f(this)};i._load=function(){this.data={src:this.src};window.setTimeout(this._onLoad.bind(this),20)
};i._onLoad=function(){this.trigger("loaded",this)};i._onError=function(){this.trigger("error",this.data)
};g.exports=a},{"../../utils/destroy":589,"ac-deferred":597,"ac-event-emitter":256}],579:[function(d,g,b){var i;
var c=d("ac-ajax");var a=d("ac-object");var h=d("../Asset");function f(k,j){h.apply(this,arguments)
}i=f.prototype=a.create(h.prototype);i._load=function(){c.get({url:this.src}).then(this._boundOnLoad,this._boundOnError)
};i._onLoad=function(j){this.data=j.response;h.prototype._onLoad.call(this)};g.exports=f
},{"../Asset":578,"ac-ajax":571,"ac-object":632}],580:[function(c,d,b){var g;var a=c("ac-object");
var f=c("../Ajax");function h(i){f.apply(this,arguments)}g=h.prototype=a.create(f.prototype);
g._onLoad=function(j){try{f.prototype._onLoad.call(this,{response:JSON.parse(j.response)})
}catch(i){this._onError(i)}};d.exports=h},{"../Ajax":579,"ac-object":632}],581:[function(b,a,f){var k=b("ac-ajax");
var d=b("ac-object");var j=b("./Binary/Chunk");var i=b("./../Asset");var c={chunkSize:1024*1024};
function g(m,l){i.apply(this,arguments);this.options=d.defaults(c,l||{});this._totalSize=null;
this._rangeObjects={};this._contentType=null;this._request=null;this._numLoaded=0;
this._numRanges=0}var h=g.prototype=d.create(i.prototype);h.pause=function(){var l;
if(this._request!==null){this._request.xhr.abort()}for(l in this._rangeObjects){if(this._rangeObjects[l].isLoaded()===false){this._rangeObjects[l].pause()
}}};h._load=function(){if(this._boundQueueRangeRequests===undefined){this._boundQueueRangeRequests=this._queueRangeRequests.bind(this)
}if(this._totalSize===null){this._getMetaData().then(this._boundQueueRangeRequests)
}else{this._queueRangeRequests()}};h._getOrCreateRangeObject=function(n){var m=this._rangeObjects[n.toString()];
var l;var o;if(m===undefined){l=(this.options.chunkSize-1);o=n+l;if(o>this._totalSize){l=null
}m=this._rangeObjects[n.toString()]=new j(this.src,{start:n,length:l});this._numRanges+=1
}return m};h._onRangeLoad=function(){this._numLoaded+=1;if(this._numLoaded===this._numRanges){this._afterAllChunksLoaded()
}};h._queueRangeRequests=function(){var p;var o=[];var q;var l;var m;for(var n=0;
n<this._totalSize;n+=this.options.chunkSize){m=this._getOrCreateRangeObject(n);
m.on("loaded",this._onRangeLoad,this);m.load()}};h._afterAllChunksLoaded=function(){var l;
var n=[];for(var m in this._rangeObjects){n.push(this._rangeObjects[m].data)}l=new Blob(n,{type:this._contentType});
this.trigger("loaded",l)};h._afterHeadRequest=function(l){this._totalSize=parseInt(l.getResponseHeader(["Content-Length"]));
this._contentType=l.getResponseHeader(["Content-Type"]);this._request=null};h._getMetaData=function(){if(!this._boundAfterHeadRequest){this._boundAfterHeadRequest=this._afterHeadRequest.bind(this)
}this._request=k.create({method:"HEAD",url:this.src,timeout:2*1000});return this._request.send().then(this._boundAfterHeadRequest,this._boundOnError)
};a.exports=g},{"./../Asset":578,"./Binary/Chunk":582,"ac-ajax":571,"ac-object":632}],582:[function(b,a,f){var g;
var j=b("ac-ajax");var d=b("ac-object");var h=b("../../Asset");var c={start:0,length:null};
function i(l,k){h.apply(this,arguments);this.options=d.defaults(c,k||{});this._request=null;
this.data=null}g=i.prototype=d.create(h.prototype);g.pause=function(){if(this._request!==null){this._request.xhr.abort();
this._request=null}};g.isLoaded=function(){return(this.data!==null)};g._load=function(){this._request=j.create({url:this.src+"?"+this._buildQueryString(),method:"get",timeout:30*1000,headers:[{name:"Range",value:this._buildRangeString()}]});
this._request.xhr.responseType="arraybuffer";this._request.send().then(this._boundOnLoad)
};g._onLoad=function(k){this.data=k.response;this._request=null;h.prototype._onLoad.call(this,this.data)
};g._buildRangeString=function(){var k="bytes="+this.options.start+"-";if(this.options.length!==null){k+=(this.options.start+this.options.length)
}return k};g._buildQueryString=function(){var k=this.options.start.toString();if(this.options.length!==undefined){k+=(this.options.start+this.options.length)
}return k};a.exports=i},{"../../Asset":578,"ac-ajax":571,"ac-object":632}],583:[function(c,d,b){var g;
var a=c("ac-object");var f=c("../Asset");function h(j,i){f.apply(this,arguments)
}g=h.prototype=a.create(f.prototype);g._load=function(){var i=new Image();this.data=i;
this._boundOnLoad=this._onLoad.bind(this);i.onload=this._boundOnLoad;i.onerror=this._boundOnError;
i.src=this.src};d.exports=h},{"../Asset":578,"ac-object":632}],584:[function(d,a,h){var k=d("ac-ajax").Ajax,g=d("ac-object"),j=d("./SplitFile/Chunk"),b=d("../Asset");
var i;var f={splitManifestTimeout:5000,splitChunkTimeout:null};var c=function(m,l){b.apply(this,arguments);
if(m.lastIndexOf("/")!==m.length-1){m=m+"/"}this.options=g.extend(f,l||{});this._manifestPath=m+"manifest.json";
this._ajax=new k();this._request=null;this._chunksLoaded=0;this._chunksLen=null;
this._chunks=[];this._boundOnManifestLoaded=this._onManifestLoaded.bind(this)};
i=c.prototype=g.create(b.prototype);i._load=function(){var l={method:"get",url:this._manifestPath,timeout:this.options.manifestTimeout};
this._request=this._ajax.create(l);this._request.send().then(this._boundOnManifestLoaded)
};i._onManifestLoaded=function(p){this._manifest=JSON.parse(p.responseText);this._chunksLen=this._manifest.files.length;
var n,o=this._manifest.files,m,l=this._chunksLen;for(n=0;n<l;n++){m=this._getOrCreateChunkObject(o[n],n);
m.once("loaded",this._onChunkLoaded,this);m.load()}this._request=null;this._ajax=null
};i._getOrCreateChunkObject=function(n,l){var o=this.options.splitChunkTimeout?{timeout:this.options.splitChunkTimeout}:null;
if(!this._chunks[l]){var q=n.path;if(!q.match(/(^http(s?))/)){q=this.src+"/"+q}else{if(!!this.src.match(/(^http(s?))/)){var p=q.indexOf("/",10);
var m=this.src.indexOf("/",10);q=this.src.substring(0,m)+q.substring(p)}}this._chunks[l]=new j(q,o)
}return this._chunks[l]};i._onChunkLoaded=function(){this._chunksLoaded++;if(this._chunksLoaded===this._chunksLen){var n,l=this._chunks.length,m=[];
for(n=0;n<l;n++){m.push(this._chunks[n].data);this._chunks[n].off()}this.data=new Blob(m,{type:this._manifest.mimeType});
m=this._chunks=null;this.trigger("loaded",this.data)}};i.pause=function(){if(this._request!==null){if(this._request.xhr!==null){this._request.xhr.abort()
}this._request=null}this.data=null;this._chunks=null};a.exports=c},{"../Asset":578,"./SplitFile/Chunk":585,"ac-ajax":571,"ac-object":632}],585:[function(c,a,g){var h;
var j=c("ac-ajax");var f=c("ac-object");var b=c("../../Asset");var d={timeout:30*1000};
function i(l,k){b.apply(this,arguments);this.options=f.extend(d,k||{});this._request=null;
this.data=null}h=i.prototype=f.create(b.prototype);h.pause=function(){if(this._request!==null){this._request.xhr.abort();
this._request=null}};h.isLoaded=function(){return(this.data!==null)};h._load=function(){this._request=j.create({url:this.src,method:"get",timeout:this.options.timeout});
this._request.xhr.responseType="arraybuffer";this._request.send().then(this._boundOnLoad)
};h._onLoad=function(k){this.data=k.response;this._request=null;b.prototype._onLoad.call(this,this.data)
};a.exports=i},{"../../Asset":578,"ac-ajax":571,"ac-object":632}],586:[function(c,a,h){var k;
var g=c("ac-feature");var f=c("ac-object");var i=c("./Binary");var l=c("../Asset");
var j=c("./Video/Element");var b=c("./SplitFile");var d={chunkSize:1024*1024,forceElementLoading:false,split:false};
function m(o,n){l.apply(this,arguments);this.options=f.defaults(d,n||{});this._binary=this.options.binary||this._createAssetType()
}k=m.prototype=f.create(l.prototype);k._canUseBlob=function(){return(window.Blob!==undefined&&window.URL!==undefined&&typeof window.URL.createObjectURL==="function"&&g.isDesktop()===true)
};k._createAssetType=function(){if(this._canUseBlob()&&this.options.forceElementLoading!==true){if(this.options.split){return new b(this.src,this.options)
}return new i(this.src,this.options)}return new j(this.src,this.options)};k._load=function(){this._binary.on("loaded",this._boundOnLoad);
this._binary.on("error",this._boundOnError);this._binary.load()};k._onLoad=function(o){var n=o;
if(o instanceof window.Blob){n=this.options.element;if(!n){n=document.createElement("video")
}if(n.getAttribute("type")!==o.type){n.setAttribute("type",o.type)}n.src=window.URL.createObjectURL(o)
}l.prototype._onLoad.call(this,n)};k.pause=function(){this._binary.pause()};k.destroy=function(){this._binary.destroy();
l.prototype.destroy.call(this)};a.exports=m},{"../Asset":578,"./Binary":581,"./SplitFile":584,"./Video/Element":587,"ac-feature":572,"ac-object":632}],587:[function(b,a,g){var f=b("ac-feature");
var d=b("ac-object");var k=b("./../../../../utils/round");var j=b("./../../Asset");
var c={};function i(m,l){j.apply(this,arguments);this.options=d.defaults(c,l||{});
this._boundOnVideoProgress=null;this._boundOnTimeUpdate=null;this._boundOnCanPlayThrough=null;
this._videoDuration=null}var h=i.prototype=d.create(j.prototype);h._onVideoProgress=function(l){if(this.data&&this.data.buffered.length>0&&this._videoDuration&&k(this.data.buffered.end(0),4)===k(this._videoDuration,4)){this._unbindEvent("canplaythrough",this._boundOnCanPlayThrough);
this._unbindEvent("timeupdate",this._boundOnTimeUpdate);this._unbindEvent("progress",this._boundOnVideoProgress);
this._unbindEvent("loadedmetadata",this._boundMetaDataLoaded);this._boundOnVideoProgress=null;
this.data.muted=false;this._onLoad()}};h._onTimeUpdate=function(l){this.data.pause();
this.data.currentTime=0;this.data.removeEventListener("timeupdate",this._boundOnTimeUpdate);
this._boundOnTimeUpdate=null};h._onCanPlayThrough=function(l){if(this._boundOnTimeUpdate===null){this._boundOnTimeUpdate=this._onTimeUpdate.bind(this)
}if(f.isDesktop()){this.data.addEventListener("timeupdate",this._boundOnTimeUpdate);
this.data.play()}this._unbindEvent("canplaythrough",this._boundOnCanPlayThrough);
this._boundOnCanPlayThrough=null};h._onMetaDataLoaded=function(l){this._videoDuration=this.data.duration;
this._onVideoProgress(l)};h._load=function(){this.data=this.options.element;if(!this.data){this.data=document.createElement("video")
}this.data.muted=true;if(this.options.type){this.data.setAttribute("type",this.options.type)
}if(this._boundOnVideoProgress===null){this._boundOnVideoProgress=this._onVideoProgress.bind(this);
this._boundOnCanPlayThrough=this._onCanPlayThrough.bind(this);this._boundMetaDataLoaded=this._onMetaDataLoaded.bind(this);
this.data.addEventListener("progress",this._boundOnVideoProgress);this.data.addEventListener("canplaythrough",this._boundOnCanPlayThrough);
this.data.addEventListener("loadedmetadata",this._boundMetaDataLoaded)}this.data.setAttribute("preload","auto");
this.data.src=this.src;this.data.load()};h._unbindEvent=function(l,m){if(typeof m==="function"){this.data.removeEventListener(l,m)
}};h.pause=function(){this._unbindEvent("canplaythrough",this._boundOnCanPlayThrough);
this._unbindEvent("timeupdate",this._boundOnTimeUpdate);this._unbindEvent("progress",this._boundOnVideoProgress);
this._unbindEvent("loadedmetadata",this._boundMetaDataLoaded);this._boundOnVideoProgress=null;
this._boundOnCanPlayThrough=null;this._boundOnTimeUpdate=null;this._boundMetaDataLoaded=null;
this.data.removeAttribute("src");this.data=undefined;this.trigger("pause")};a.exports=i
},{"./../../../../utils/round":590,"./../../Asset":578,"ac-feature":572,"ac-object":632}],588:[function(b,a,g){var h;
var f=b("ac-object");var i=b("ac-deferred").Deferred;var k=b("ac-event-emitter").EventEmitter;
var j=b("../../utils/destroy");var d={threads:4};function c(m,l){this.options=f.defaults(d,l||{});
this._queue=m;this._active=[];this._allowedThreads=this.options.threads;this._availableThreads=this._allowedThreads;
this._deferred=new i();this._data=[];this.paused=true;this.loaded=false;this.promise=this._deferred.promise()
}h=c.prototype=new k();h.start=function(){var m=this._availableThreads;var l;this.paused=false;
if(m>this._queue.length){m=this._queue.length}for(l=1;l<=m;l++){this._startNewThread()
}return this.promise};h.pause=function(){this.paused=true;var l=[];this._active.forEach(function(n,m){if(typeof n.pause==="function"){this._queue.unshift(n);
this._releaseThread();n.off("loaded");n.off("error");n.pause();l.push(m)}},this);
l.forEach(function(m){this._active.splice(m,1)},this)};h.destroy=function(){this.pause();
j(this)};h._startNewThread=function(){var m=this._queue.shift();this._occupyThread();
if(m&&typeof m.load==="function"){var l=function(o){this._onProgress(o);this._active.splice(this._active.indexOf(m),1);
m.off("error",n)};var n=function(o){this._onError();m.off("loaded",l)};m.once("loaded",l,this);
m.once("error",n,this);m.load()}else{this._onError()}this._active.push(m)};h._onResolved=function(){if(this._errored){return false
}this._deferred.resolve(this._data);this.trigger("resolved",this._data)};h._onError=function(l){if(this._errored){return false
}this._errored=true;this._deferred.reject(l);this.trigger("rejected",l)};h.abort=function(){this._deferred.reject()
};h._onProgress=function(l){if(this._errored){return false}this._releaseThread();
this._data[l.index]=l.data;this.trigger("progress",l.data);if(this._queue.length<=0){if(this._availableThreads>=this._allowedThreads){this._onResolved()
}}else{if(!this.paused&&!this._errored){this._startNewThread()}}};h._occupyThread=function(){this._availableThreads--;
if(this._availableThreads<0){throw"AssetLoader.Queue: Available thread count cannot be negative."
}};h._releaseThread=function(){this._availableThreads++;if(this._availableThreads>this._allowedThreads){throw"AssetLoader.Queue: Available thread count cannot be more than allowed thread amount."
}};a.exports=c},{"../../utils/destroy":589,"ac-deferred":597,"ac-event-emitter":256,"ac-object":632}],589:[function(b,d,a){d.exports=function c(f,g){if(typeof f.off==="function"){f.off()
}function h(j){var i=true;for(var k in j){if(j.hasOwnProperty(k)){if(j[k]!==null){i=false;
break}}}return i}window.setTimeout(function(){var i;for(i in f){if(f.hasOwnProperty(i)){if(g&&f[i]&&typeof f[i].destroy==="function"&&!h(f[i])){f[i].destroy()
}f[i]=null}}})}},{}],590:[function(b,c,a){c.exports=function(d,f){return Math.round(d*Math.pow(10,f))/Math.pow(10,f)
}},{}],591:[function(b,c,a){arguments[4][128][0].apply(a,arguments)},{"./ac-clock/Clock":592,"./ac-clock/ThrottledClock":593,"./ac-clock/sharedClockInstance":594,dup:128}],592:[function(b,c,a){arguments[4][129][0].apply(a,arguments)
},{"ac-event-emitter":256,dup:129}],593:[function(b,c,a){arguments[4][130][0].apply(a,arguments)
},{"./sharedClockInstance":594,"ac-event-emitter":256,dup:130}],594:[function(b,c,a){arguments[4][131][0].apply(a,arguments)
},{"./Clock":592,dup:131}],595:[function(b,c,a){(function(d,f){if(typeof a==="object"&&a){c.exports=f
}else{if(typeof define==="function"&&define.amd){define(f)}else{d.Deferred=f}}}(this,(function(){var g={};
var f,l,n,d,k,j,m,h;f={0:"pending",1:"resolved",2:"rejected"};l=function(r,t){var q,u,s,p,o;
if(this._status!==0){if(console&&console.warn){console.warn("Trying to fulfill more than once.")
}return false}this.data=t;u=this.pending;s=u.length;for(q=0;q<s;q++){p=u[q];if(p[r]){o=p[r](t)
}if(typeof o==="object"&&o.hasOwnProperty("then")&&o.hasOwnProperty("status")){o.then(function(v){p.deferred.resolve(v)
},function(v){p.deferred.reject(v)},function(v){p.deferred.progress(v)})}else{p.deferred[r](o||undefined)
}}if(r!=="progress"){u=[]}return true};j=function(p,o){this.then=p;this.status=o
};m=j.prototype;h=function(o){return o};m.success=function(p,o){return this.then(p.bind(o),h,h)
};m.fail=function(p,o){return this.then(h,p.bind(o),h)};m.progress=function(p,o){return this.then(h,h,p.bind(o))
};d=function(o){if(typeof o!=="function"){return function(){}}return o};n=function(q,p,o){this.resolve=d(q);
this.reject=d(p);this.progress=d(o);this.deferred=new k()};k=function(){this.pending=[];
this._status=0;this._promise=new j(this.then.bind(this),this.status.bind(this))
};k.prototype={status:function(){return f[this._status]},promise:function(){return this._promise
},progress:function(o){l.call(this,"progress",o);return this._promise},resolve:function(o){l.call(this,"resolve",o);
if(this._status===0){this._status=1}return this._promise},reject:function(o){l.call(this,"reject",o);
if(this._status===0){this._status=2}return this._promise},then:function(s,q,p){var o,r;
r=new n(s,q,p);if(this._status===0){this.pending.push(r)}else{if(this._status===1&&typeof s==="function"){o=s(this.data);
if(typeof o==="object"&&o.hasOwnProperty("then")&&o.hasOwnProperty("status")){o.then(function(t){r.deferred.resolve(t)
},function(t){r.deferred.reject(t)},function(t){r.deferred.progress(t)})}else{r.deferred.resolve(o)
}}else{if(this._status===2&&typeof q==="function"){o=q(this.data);r.deferred.reject(o)
}}}return r.deferred.promise()}};var i=function(){var q,p,s,r,o;q=[].slice.call(arguments);
p=new k();s=0;r=function(u){s--;var t=q.indexOf(this);q[t]=u;if(s===0){p.resolve(q)
}};o=function(t){p.reject(t)};q.forEach(function(t){if(t.then){s++}});q.forEach(function(t){if(t.then){t.then(r.bind(t),o)
}});return p.promise()};k.when=i;g.Deferred=k;return g}())))},{}],596:[function(c,b,d){function g(){}g.prototype={resolve:function h(){this._defer.resolve.apply(this._defer,Array.prototype.slice.call(arguments));
return this.promise()},reject:function j(){this._defer.reject.apply(this._defer,Array.prototype.slice.call(arguments));
return this.promise()},progress:function a(){var k="ac-defer.progress is deprecated since it is not part of the A+ spec. Recommend using ac-event-emitter for progress signaling";
console.warn(k);this._defer.progress.apply(this._defer,Array.prototype.slice.call(arguments));
return this.promise()},then:function f(){this._defer.then.apply(this._defer,Array.prototype.slice.call(arguments));
return this.promise()},promise:function i(){return this._defer.promise.apply(this._defer,Array.prototype.slice.call(arguments))
}};b.exports=g},{}],597:[function(c,d,a){var h=new (c("./ac-deferred/Deferred"))(),g=c("smartsign-deferred").Deferred;
function b(){this._defer=new g()}b.prototype=h;d.exports.join=function i(){return g.when.apply(null,[].slice.call(arguments))
};d.exports.all=function f(j){return g.when.apply(null,j)};d.exports.Deferred=b
},{"./ac-deferred/Deferred":596,"smartsign-deferred":595}],598:[function(b,c,a){arguments[4][235][0].apply(a,arguments)
},{"./ac-dom-emitter/DOMEmitter":599,dup:235}],599:[function(b,c,a){var f;var d=b("ac-event-emitter").EventEmitter;
function g(h){if(h===null){return}this.el=h;this._bindings={};this._eventEmitter=new d()
}f=g.prototype;f._parseEventNames=function(h){if(!h){return[h]}return h.split(" ")
};f._onListenerEvent=function(i,h){this.trigger(i,h,false)};f._setListener=function(h){this._bindings[h]=this._onListenerEvent.bind(this,h);
this._addEventListener(h,this._bindings[h])};f._removeListener=function(h){this._removeEventListener(h,this._bindings[h]);
delete this._bindings[h]};f._addEventListener=function(i,j,h){if(this.el.addEventListener){this.el.addEventListener(i,j,h)
}else{if(this.el.attachEvent){this.el.attachEvent("on"+i,j)}else{target["on"+i]=j
}}return this};f._removeEventListener=function(i,j,h){if(this.el.removeEventListener){this.el.removeEventListener(i,j,h)
}else{this.el.detachEvent("on"+i,j)}return this};f.on=function(h,j,i){h=this._parseEventNames(h);
h.forEach(function(m,l,k){if(!this.has(k)){this._setListener(k)}this._eventEmitter.on(k,m,l)
}.bind(this,j,i));return this};f.off=function(h,k,j){var i=Array.prototype.slice.call(arguments,0);
h=this._parseEventNames(h);h.forEach(function(p,o,m,l){if(m.length===0){this._eventEmitter.off();
var n;for(n in this._bindings){if(this._bindings.hasOwnProperty(n)){this._removeListener(n)
}}return}this._eventEmitter.off(l,p,o);if(!this.has(l)){this._removeListener(l)
}}.bind(this,k,j,i));return this};f.once=function(h,j,i){h=this._parseEventNames(h);
h.forEach(function(m,l,k){if(!this.has(k)){this._setListener(k)}this._eventEmitter.once.call(this,k,m,l)
}.bind(this,j,i));return this};f.has=function(h){if(this._eventEmitter&&this._eventEmitter.has(h)){return true
}return false};f.trigger=function(h,i,j){h=this._parseEventNames(h);h.forEach(function(l,m,k){this._eventEmitter.trigger(k,l,m)
}.bind(this,i,j));return this};f.destroy=function(){this.off();this.el=this._eventEmitter=this._bindings=null
};c.exports=g},{"ac-event-emitter":256}],600:[function(b,c,a){c.exports.playerFactory=b("./ac-flow-x/flow/playerFactory");
c.exports.Flow=b("./ac-flow-x/flow/FlowController");c.exports.SyncPlayer=b("./ac-flow-x/flow/SyncPlayer");
c.exports.MaskedFlow=b("./ac-flow-x/flow/MaskedFlow")},{"./ac-flow-x/flow/FlowController":602,"./ac-flow-x/flow/MaskedFlow":604,"./ac-flow-x/flow/SyncPlayer":606,"./ac-flow-x/flow/playerFactory":629}],601:[function(b,a,c){var f,j=false,i=b("ac-deferred").Deferred,l=b("ac-deferred").all,o=b("ac-event-emitter").EventEmitter,k=b("./compositor/decorator/Keyframe"),h=b("./compositor/decorator/Superframe"),g=b("./compositor/decorator/SuperKeyframe"),n=b("./compositor/decorator/Cache"),m=b("./compositor/decorator/Benchmark");
function d(p,q){o.call(this);this._compositor=p;this.options=q||{};this.gotoFrame
}f=d.prototype=new o(null);f._gotoImageFrame=function(p){if(this._rendering){return(new i()).resolve()
}else{if(this._currentFrame===p){return(new i()).resolve()}}this._rendering=true;
if(j){console.groupCollapsed("gotoFrame:"+p+" currentFrame:"+this._currentFrame)
}return this._compositor.compositeFrames(this._currentFrame,p).then(function(){this._rendering=false;
this._currentFrame=p;if(j){console.groupEnd()}}.bind(this))};f._gotoBinaryFrame=function(p){if(this._currentFrame===p){return(new i()).resolve()
}return this._compositor.compositeFrames(this._currentFrame,p).then(function(q){if(q){this._compositor.applyBinaryFrame(q)
}this._currentFrame=p;this.trigger("composite")}.bind(this))};f.init=function(q){var p;
if(q.nodeName==="CANVAS"){p=q}else{p=document.createElement("canvas");q.appendChild(p)
}if(this.options.renderType==="binary"){this.gotoFrame=this._gotoBinaryFrame}else{if(this.options.renderType==="default"){this.gotoFrame=this._gotoImageFrame
}}return this._compositor.init(p).then(function(r){return l([this._compositor.createDiffRender(r).then(this._decorateCompositor.bind(this))])
}.bind(this))};f._decorateCompositor=function(){var p=this._compositor,r=this._compositor._diffRender.flowData,q=this._compositor.canvas;
if(this.options.renderType==="binary"){}else{if(r.superframeFrequency){p=new h(p,r.superframeFrequency)
}if(r.version===3){p=new k(p)}if(r.version===3&&r.superframeFrequency){p=new g(p)
}if(this.options.keyframeCache){p=new n(p,this.options.keyframeCache)}if(this.options.benchmark){p=new m(p)
}}if(p===this._compositor){return(new i()).resolve()}else{this._compositor=p;return this._compositor.init(q)
}};if(typeof Object.defineProperties!=="function"){return function(){}}Object.defineProperties(f,{_currentFrame:{value:0,enumerable:false,writable:true},frameCount:{get:function(){return this._compositor.frameCount
},enumerable:true}});a.exports=d},{"./compositor/decorator/Benchmark":609,"./compositor/decorator/Cache":610,"./compositor/decorator/Keyframe":611,"./compositor/decorator/SuperKeyframe":612,"./compositor/decorator/Superframe":613,"ac-deferred":597,"ac-event-emitter":256}],602:[function(f,b,g){var i,h=f("./Flow"),d=f("./Player"),m=f("./LoadController"),k=f("./compositor/BinaryCompositor"),j=f("./compositor/Sequence");
var c={fileFormat:"jpg",baseName:"flow",imageUrlPattern:"###",startframeFileFormat:null,endframeFileFormat:null,basePath:null,manifestPath:null,manifestFileFormat:"json",diffPath:null,framePath:null};
var a={superframes:false,reversable:false,keyframeCache:8,benchmark:false,preload:true,multithread:false,preventDraw:false,renderType:"default"};
var l=function(n,o){n=n||{};o=o||{};this._flow=null;this._compositor=null;this._oader=null;
this.options=this._setDefaults(n,a);this._dataOptions=this._setDefaults(o,c);if(!this.options.element){this.options.element=document.createElement("canvas")
}this._flow=this._createFlow(this._compositor,this.options,this._dataOptions);d.call(this,this.options.element,this._flow);
if(this.options.preload){this.load()}};i=l.prototype=new d(null);i.destroy=function(){this.pause();
this.off();this._flow.off();this._flow=this._nullProperties(this._flow);this._nullProperties(this)
};i._nullProperties=function(o){var n;for(n in o){if(o.hasOwnProperty(n)){o[n]=null
}}return o};i._createFlow=function(o,p,r){var n=this._assembleAssetPaths(r);var q=[n.startframe,n.endframe];
this.loader=new m(this,n.manifest,q,n.imageUrlPattern);if(p.renderType==="binary"){this._compositor=new k(q,n.imageUrlPattern,this.loader,p.multithread,p.preventDraw)
}else{this._compositor=new j(q,n.imageUrlPattern,this.loader)}return new h(this._compositor,p)
};i._assembleAssetPaths=function(t){var s=t.basePath?this._forceTrailingSlash(t.basePath):null;
var p=t.framePath?this._forceTrailingSlash(t.framePath):null;var o=t.diffPath?this._forceTrailingSlash(t.diffPath):null;
var r=t.manifestPath?this._forceTrailingSlash(t.manifestPath):null;var n=t.baseName+"_";
var q={};q.startframe=(p||s)+n+"startframe."+(t.startframeFileFormat||t.fileFormat);
q.endframe=(p||s)+n+"endframe."+(t.endframeFileFormat||t.fileFormat);q.imageUrlPattern=(o||s)+n+t.imageUrlPattern+"."+t.fileFormat;
q.manifest=(r||s)+n+"manifest."+t.manifestFileFormat;return q};i._forceTrailingSlash=function(n){if(n.lastIndexOf("/")!==n.length-1){n=n+"/"
}return n};i._setDefaults=function(o,p){var n;for(n in p){if(p.hasOwnProperty(n)){if(typeof o[n]==="undefined"){o[n]=p[n]
}}}return o};b.exports=l},{"./Flow":601,"./LoadController":603,"./Player":605,"./compositor/BinaryCompositor":607,"./compositor/Sequence":608}],603:[function(b,a,c){var d,h=b("ac-asset-loader").AssetLoader,l=b("ac-event-emitter").EventEmitter,f=b("./data/provider/Async"),g=b("ac-deferred").Deferred,i=b("ac-deferred").all;
var k={start:"start",pause:"pause",error:"error",complete:"loaded",destroy:"destroy"};
var j=function(o,m,n,p){this._flow=o;this._manifestUrl=m;this._keyframeUrls=n;this._imageUrlPattern=p;
this.state={manifestLoaded:false,keyframesLoaded:false,diffsLoaded:false,diffCountLoaded:0,totalDiffs:null};
this.assets={keyframes:null,manifest:null,diffs:null};this._promises={};this._loaders={};
this._activeLoaders=[];this._resumeQueue=[];this._paused=true;this._shouldPause=false;
this._boundOnManifestLoaded=this._onManifestLoaded.bind(this);this._boundOnKeyframesLoaded=this._onKeyframesLoaded.bind(this);
this._boundOnDiffsLoaded=this._onDiffsLoaded.bind(this);this._boundOnManifestAndKeyframesLoaded=this._onManifestAndKeyframesLoaded.bind(this);
this._boundOnComplete=this._onComplete.bind(this)};d=j.prototype=new l(null);d.setManifestUrl=function(m){this._manifestUrl=m;
return this};d.setKeyframeUrls=function(m){this._keyframeUrls=m;return this};d.setImageUrlPattern=function(m){this._imageUrlPattern=m;
return this};d.load=function(){if(this._paused&&(this._activeLoaders.length>0||this._resumeQueue.length>0)){this._resume();
return}this._flow.load().then(this._boundOnComplete);return};d.pause=function(){this._shouldPause=true;
var n,m=this._activeLoaders.length;for(n=0;n<m;n++){this._activeLoaders[n].pause()
}this._paused=true};d.destroy=function(){var n,m,o;this.trigger(k.destroy);this.off();
for(n in this._loaders){if(this._loaders.hasOwnProperty(n)){}}for(m in this._promises){if(this._promises.hasOwnProperty(m)){if(this._promises[m].promise().status()==="pending"){this._promises[m].reject()
}}}for(o in this){if(this.hasOwnProperty(o)){this[o]=null}}};d._resume=function(){this._shouldPause=false;
var p,m=this._activeLoaders.length;for(p=0;p<m;p++){this._activeLoaders[p].load()
}var o,n=this._resumeQueue.length;for(o=0;o<n;o++){this._resumeQueue[o].call(this)
}this._resumeQueue=[];this._paused=false};d.loadManifest=function(){this._promises.manifest=this._promises.manifest||new g();
var m=this._promises.manifest.promise();if(this._shouldPause){this._resumeQueue.push(this.loadManifest);
return m}if(this.assets.manifest){return this._promises.manifest.resolve(this.assets.manifest)
}this._paused=false;this._loaders.manifest=new f(this._getManifestAssetsData());
this._activeLoaders.push(this._loaders.manifest);this._loaders.manifest.load().then(this._boundOnManifestLoaded);
return m};d.loadKeyframes=function(){this._promises.keyframes=this._promises.keyframes||new g();
var m=this._promises.keyframes.promise();if(this._shouldPause){this._resumeQueue.push(this.loadKeyframes);
return m}if(this.assets.keyframes){return this._promises.keyframes.resolve(this.assets.keyframes)
}this._paused=false;this._loaders.keyframes=new h(this._getKeyframesAssetsData());
this._activeLoaders.push(this._loaders.keyframes);this._loaders.keyframes.load().then(this._boundOnKeyframesLoaded);
return m};d.loadDiffs=function(){this._promises.diffs=this._promises.diffs||new g();
var m=this._promises.diffs.promise();if(this._shouldPause){this._resumeQueue.push(this.loadDiffs);
return m}if(this.assets.diffs){return this._promises.diffs.resolve(this.assets.diffs)
}this._paused=false;this._loaders.diffs=new h(this._getDiffsAssetsData());this._activeLoaders.push(this._loaders.diffs);
this._loaders.diffs.load().then(this._boundOnDiffsLoaded);return m};d._getManifestAssetsData=function(){return this._manifestUrl
};d._getKeyframesAssetsData=function(){return this._keyframeUrls};d._getDiffsAssetsData=function(){var o=this.assets.manifest.imagesRequired,m=[],p,n,q=this._imageUrlPattern.match(/#/g).length;
for(p=1;p<=o;p++){n="0000"+p;n=n.substring(n.length-q);m.push(this._imageUrlPattern.replace(/#{2,}/g,n))
}return m};d._onManifestLoaded=function(m){if(this.assets){this.assets.manifest=m;
this.state.manifestLoaded=true;this._paused=true;this._removeFromActiveLoaders(this._loaders.manifest);
this._promises.manifest.resolve(this.assets.manifest)}};d._onKeyframesLoaded=function(m){if(this.assets){this.assets.keyframes=m;
this.state.keyframeLoaded=true;this._paused=true;this._removeFromActiveLoaders(this._loaders.keyframes);
this._promises.keyframes.resolve(this.assets.keyframes)}};d._onDiffsLoaded=function(m){if(this.assets){this.assets.diffs=m;
this.state.diffsLoaded=true;this._paused=true;this._removeFromActiveLoaders(this._loaders.diffs);
this._promises.diffs.resolve(this.assets.diffs)}};d._onManifestAndKeyframesLoaded=function(){if(!this.state.diffsLoaded){this.loadDiffs()
}return this._promises.diffs};d._removeFromActiveLoaders=function(o){var n,m=this._activeLoaders.length;
for(n=0;n<m;n++){if(this._activeLoaders[n]===o){this._activeLoaders.splice(n,1);
return}}};d._onComplete=function(){this.trigger(k.complete)};a.exports=j},{"./data/provider/Async":621,"ac-asset-loader":576,"ac-deferred":597,"ac-event-emitter":256}],604:[function(b,a,f){var h,g=b("./FlowController"),d=b("./SyncPlayer"),i=b("ac-deferred").Deferred,k=b("ac-deferred").all;
var c={preventDraw:true,renderType:"binary"};function j(p,q,m,o,l,n){m=this._setDefaultOptions(m);
o=this._setDefaultOptions(o);this.flow=new g(p,m,l);this.mask=new g(q,o,n);d.apply(this,[this.flow,this.mask]);
this._flowDefer=null;this._maskDefer=null;this._boundOnSyncRender=this._onSyncRender.bind(this);
this._boundOnFlowTimeUpdate=this._onFlowTimeUpdate.bind(this);this._boundOnMaskTimeUpdate=this._onMaskTimeUpdate.bind(this);
this.flow._flow.on("composite",this._boundOnFlowTimeUpdate);this.mask._flow.on("composite",this._boundOnMaskTimeUpdate);
this._bindSyncRender()}h=j.prototype=new d(null);h._setDefaultOptions=function(l){l=l||{};
var m;for(m in c){if(c.hasOwnProperty(m)){if(typeof l[m]==="undefined"){l[m]=c[m]
}}}return l};h._bindSyncRender=function(){this._flowDefer=new i();this._maskDefer=new i();
k([this._flowDefer,this._maskDefer]).then(this._boundOnSyncRender)};h._onFlowTimeUpdate=function(){if(this._flowDefer){this._flowDefer.resolve()
}};h._onMaskTimeUpdate=function(){if(this._maskDefer){this._maskDefer.resolve()
}};h._onSyncRender=function(){this._flowDefer=this._maskDefer=null;this._applyMask();
this._bindSyncRender()};h._applyMask=function(){if(!this.flow._compositor.imageData){return
}var n=this.flow._compositor.imageData.data,o=this.mask._compositor.imageData.data,m,l=n.length;
for(m=0;m<l;m+=4){n[m+3]=o[m]}this.flow._compositor.applyBinaryFrame({buf8:n},true)
};a.exports=j},{"./FlowController":602,"./SyncPlayer":606,"ac-deferred":597}],605:[function(d,f,b){var h,a=false,c=d("ac-deferred").Deferred,i=d("ac-dom-emitter").DOMEmitter;
function g(k,j){this._flow=j;this._domEmitter=new i(k);this._frameRate=30;this.element=k;
this.paused=true;this.loop=false;this._boundAdvanceTimeToGlobal=this._advanceToTimeGlobal.bind(this);
this._onBoundGlobalTimeUpdate=this._onGlobalTimeUpdate.bind(this);this._onBoundLocalTimeUpdate=this._onLocalTimeUpdate.bind(this)
}h=g.prototype;h._timeToFrame=function(j){var k;k=Math.round(j/this.duration*this._flow.frameCount);
k=k%(this._flow.frameCount+1);return(k<0)?this._flow.frameCount+k:k};h._advanceToTimeGlobal=function(j){this._prevTime=this._prevTime||j;
this._currentTime+=((j-this._prevTime)/1000)*this.playbackRate;this._prevTime=j;
this._pauseAfterRender=false;var k=this._timeToFrame(this._currentTime);if(!this.loop){if(this.playbackRate>0&&this._currentTime>this.duration){k=this._flow.frameCount;
this._currentTime=this.duration;this._pauseAfterRender=true}else{if(this.playbackRate<0&&this._currentTime<0){k=0;
this._currentTime=0;this._pauseAfterRender=true}}}else{this._currentTime=(this.duration+this._currentTime)%this.duration
}if(!this.paused&&!this.seeking){return this._flow.gotoFrame(k).then(this._onBoundGlobalTimeUpdate)
}else{return(new c()).reject()}};h._onGlobalTimeUpdate=function(){this.trigger("timeupdate");
if(this._pauseAfterRender){this.paused=true;this.trigger("ended")}else{this._requestAnimationFrame=window.requestAnimationFrame(this._boundAdvanceTimeToGlobal)
}};h._onLocalTimeUpdate=function(){this.seeking=false;this.trigger("timeupdate");
this.trigger("seeked");this._requestAnimationFrame=window.requestAnimationFrame(this._boundAdvanceTimeToGlobal)
};h._advanceToTimeLocal=function(j){if(!this.seeking){this.seeking=true;this.trigger("seeking");
this._currentTime=1*j;this._prevTime=null;window.cancelAnimationFrame(this._requestAnimationFrame);
this._flow.gotoFrame(this._timeToFrame(j)).then(this._onBoundLocalTimeUpdate)}if(a){console.log("advance to time "+j+" from "+this._currentTime)
}};h.load=function(){this.trigger("loadstart");return this._flow.init(this.element).then(this.trigger.bind(this,"canplaythrough"))
};h.play=function(){if(this.paused){this.paused=false;this.trigger("play");this._prevTime=null;
this._requestAnimationFrame=window.requestAnimationFrame(this._boundAdvanceTimeToGlobal)
}return this};h.pause=function(){if(!this.paused){this.paused=true;window.cancelAnimationFrame(this._requestAnimationFrame);
this.trigger("pause")}return this};h.on=function(){this._domEmitter.on.apply(this._domEmitter,arguments)
};h.once=function(){this._domEmitter.once.apply(this._domEmitter,arguments)};h.trigger=function(){this._domEmitter.trigger.apply(this._domEmitter,arguments)
};h.off=function(){this._domEmitter.off.apply(this._domEmitter,arguments)};h.setRenderOperation=function(j){if(this._flow&&this._flow._compositor&&this._flow._compositor._diffRender){this._flow._compositor._diffRender.renderOperation=j
}return this};h.setBeforeRenderOperation=function(j){if(this._flow&&this._flow._compositor&&this._flow._compositor._diffRender){this._flow._compositor._diffRender.beforeRenderOperation=j
}};h.setBeforeDrawOperation=function(j){if(this._flow&&this._flow._compositor){this._flow._compositor.beforeDrawOperation=j
}};h.setAfterDrawOperation=function(j){if(this._flow&&this._flow._compositor){this._flow._compositor.afterDrawOperation=j
}};if(typeof Object.defineProperties!=="function"){return function(){}}Object.defineProperties(h,{_currentTime:{value:0,enumerable:false,writable:true},_playbackRate:{value:1,enumerable:false,writable:true},currentTime:{get:function(){return this._currentTime*1
},set:h._advanceToTimeLocal,enumerable:true},frameRate:{get:function(){return this._frameRate
},set:function(j){if(isFinite(j)){this._frameRate=j;this.trigger("durationchange")
}},enumerable:true},playbackRate:{get:function(){return this._playbackRate*1},set:function(j){if(isFinite(j)){this._playbackRate=1*j;
this.trigger("ratechange")}},enumerable:true},duration:{get:function(){return this._flow.frameCount/this.frameRate
},enumerable:true}});f.exports=g},{"ac-deferred":597,"ac-dom-emitter":598}],606:[function(d,f,b){var h,c=d("ac-deferred").Deferred,a=d("ac-deferred").all;
function g(){this.flows=Array.prototype.slice.call(arguments,0)}h=g.prototype;h.on=function(){return this._each("on",arguments)
};h.off=function(){return this._each("off",arguments)};h.load=function(){var n=new c(),m=[],l,j=this.flows.length,k;
for(l=0;l<j;l++){k=this.flows[l];m.push(k.load())}a(m).then(n.resolve.bind(n));
return n.promise()};h.play=function(){return this._each("play",arguments)};h.pause=function(){return this._each("pause",arguments)
};h.destroy=function(){this._each("destroy",arguments);var j;for(j in this){if(this.hasOwnProperty(j)){if(this[j] instanceof c){this[j].reject()
}this[j]=null}}};h.setRenderOperation=function(){return this._each("setRenderOperation",arguments)
};h.setBeforeRenderOperation=function(){return this._each("setBeforeRenderOperation",arguments)
};h.setBeforeDrawOperation=function(){return this._each("setBeforeDrawOperation",arguments)
};h.setAfterDrawOperation=function(){return this._each("setAfterDrawOperation",arguments)
};h._dispatchEvent=function(i){return this._each("_dispatchEvent",arguments)};h._advanceToTimeGlobal=function(){return this._each("_advanceToTimeGlobal",arguments)
};h._advanceToTimeLocal=function(){return this._each("_advanceToTimeLocal",arguments)
};h._each=function(n,l){l=Array.prototype.slice.call(l,0);var m,j=this.flows.length,k;
for(m=0;m<j;m++){k=this.flows[m];k[n].apply(k,l)}return this};Object.defineProperties(h,{_currentTime:{value:0,enumerable:false,writable:true},_playbackRate:{value:1,enumerable:false,writable:true},_loop:{value:false,enumerable:false,writable:true},currentTime:{get:function(){return this._currentTime*1
},set:h._advanceToTimeLocal,enumerable:true},frameRate:{get:function(){return this._frameRate
},set:function(i){if(isFinite(i)){this._frameRate=i;this._dispatchEvent("durationchange")
}},enumerable:true},playbackRate:{get:function(){return this._playbackRate*1},set:function(i){if(isFinite(i)){this._playbackRate=1*i;
this.flows.forEach(function(k,j){j.playbackRate=k}.bind(this,this._playbackRate))
}},enumerable:true},duration:{get:function(){return this._flow[0].frameCount/this.frameRate
},enumerable:true},loop:{get:function(){return this._loop},set:function(i){if(typeof i==="boolean"){this._loop=i;
this.flows.forEach(function(j,k){k.loop=j}.bind(this,this._loop))}},enumerable:true}});
f.exports=g},{"ac-deferred":597}],607:[function(c,b,d){var f,j=false,a=c("../diff/BinaryRender"),g=c("../diff/BinaryMultithreadRender"),i=c("ac-deferred").Deferred;
var h=function(o,m,n,l,k){this._keyframes=o;this._imageUrlPattern=m;this._loadController=n;
this._useMultithreading=l;this._preventDraw=k};f=h.prototype;f._getURLObject=function(){return window.URL||window.webkitURL||null
};f._supportsMultithread=function(){if(this._getURLObject()&&window.Worker&&window.Blob){return true
}return false};f._initDiffRender=function(k){this._images=k;this.canvas.height=k[0].height;
this.canvas.width=k[0].width;this.applyFrame(k[0])};f.init=function(k){this.canvas=k||document.createElement("canvas");
this.context=k.getContext("2d");return this._loadController.loadKeyframes().then(this._initDiffRender.bind(this)).then(this._loadController.loadManifest.bind(this._loadController))
};f.createDiffRender=function(k){if(this._useMultithreading&&this._supportsMultithread()){this._diffRender=new g(k,this._imageUrlPattern)
}else{this._diffRender=new a(k,this._imageUrlPattern,this._loadController)}return this._diffRender.init()
};f.applyFrame=function(m){var l=this.context,k;l.drawImage(m,0,0);if(this._diffRender){this._diffRender.forceBinaryComposite();
k=this._diffRender.forceKeyframeRender(this.canvas,this.context);if(!this.imageData){this.imageData=this.context.createImageData(k.width,k.height)
}this.imageData.data.set(k.buf8)}};f.applyBinaryFrame=function(k,l){if(!this.imageData){this.imageData=this.context.createImageData(k.width,k.height)
}if(this._beforeDrawOperation){k=this._beforeDrawOperation(k)}this.imageData.data.set(k.buf8);
if(!this._preventDraw||l){this.context.putImageData(this.imageData,0,0)}if(this._afterDrawOperation){k=this._afterDrawOperation(k)
}};f.calculateRenderCount=function(k,l){var m=0;if(Math.abs(l-k)>=l){k=1;m=1}else{if(Math.abs(l-k)>=(this.frameCount-l)&&this._images[1]){k=this.frameCount-2;
m=1}}if(l>0&&l<this.frameCount-1){return Math.abs(k-l)+m}else{return m}};f.compositeFrames=function(l,o){var n=new i(),m;
o=(this.frameCount<o)?this.frameCount-1:(o<0)?0:o;l=(this.frameCount-2<l)?this.frameCount-2:(l<0)?0:l;
var p,k,m;if(Math.abs(o-l)>=o){l=1;if(j){console.log("applying start keyframe")
}this.applyFrame(this._images[0]);return n.resolve()}else{if(Math.abs(o-l)>=(this.frameCount-o)&&this._images[1]){l=this.frameCount-2;
if(j){console.log("applying end keyframe")}this.applyFrame(this._images[1]);return n.resolve()
}}p=(l>o)?-1:(l<o)?1:0;if(o>0&&o<this.frameCount-1){while(l!==o){k=this._diffRender.renderDiff(this.canvas,l,this.context);
l+=p}}if(k){k.then(n.resolve.bind(n))}else{n.resolve()}return n.promise()};if(typeof Object.defineProperties!=="function"){return function(){}
}Object.defineProperties(f,{frameCount:{get:function(){return this._diffRender.frames.length+2
},enumerable:true},canvas:{get:function(){return this._canvas},set:function(k){return this._canvas=k
},enumerable:true},mainCompositor:{get:function(){var k=this;while(k._compositor){k=k._compositor
}return k},enumerable:true},_beforeDrawOperation:{value:undefined,enumerable:false,writable:true},_afterDrawOperation:{value:undefined,enumerable:false,writable:true},beforeDrawOperation:{get:function(){return this._beforeDrawOperation
},set:function(k){if(typeof k==="function"){this._beforeDrawOperation=k;return}this._beforeDrawOperation=undefined
},enumerable:true},afterDrawOperation:{get:function(){return this._afterDrawOperation
},set:function(k){if(typeof k==="function"){this._afterDrawOperation=k;return}this._afterDrawOperation=undefined
},enumerable:true}});b.exports=h},{"../diff/BinaryMultithreadRender":623,"../diff/BinaryRender":624,"ac-deferred":597}],608:[function(d,c,f){var i=0,b;
function k(){if(!b){b=document.getElementById("counter")}i++;b.textContent=i}var g,l=false,h=d("../diff/Render"),j=d("ac-deferred").Deferred;
function a(p,m,o,n){this._keyframes=p;this._imageUrlPattern=m;this._loadController=o;
this._renderType=n||"default"}g=a.prototype;g._initDiffRender=function(m){this._images=m;
this.canvas.height=m[0].height;this.canvas.width=m[0].width;this.applyFrame(m[0]);
return new j().resolve()};g.init=function(m){this.canvas=m||document.createElement("canvas");
this.context=m.getContext("2d");return this._loadController.loadKeyframes().then(this._initDiffRender.bind(this)).then(this._loadController.loadManifest.bind(this._loadController))
};g.createDiffRender=function(m){this._diffRender=new h(m,this._imageUrlPattern,this._loadController);
return this._diffRender.init()};g.applyFrame=function(n){var m=this.context;m.drawImage(n,0,0)
};g.calculateRenderCount=function(m,n){var o=0;if(Math.abs(n-m)>=n){m=1;o=1}else{if(Math.abs(n-m)>=(this.frameCount-n)&&this._images[1]){m=this.frameCount-2;
o=1}}if(n>0&&n<this.frameCount-1){return Math.abs(m-n)+o}else{return o}};g.compositeFrames=function(m,o){var n=new j();
o=(this.frameCount<o)?this.frameCount-1:(o<0)?0:o;m=(this.frameCount-2<m)?this.frameCount-2:(m<0)?0:m;
var p;if(l){console.groupCollapsed("Rendering diff frames: "+m+"..."+o)}if(Math.abs(o-m)>=o){m=1;
if(l){console.log("applying start keyframe")}this.applyFrame(this._images[0])}else{if(Math.abs(o-m)>=(this.frameCount-o)&&this._images[1]){m=this.frameCount-2;
if(l){console.log("applying end keyframe")}this.applyFrame(this._images[1])}}p=(m>o)?-1:(m<o)?1:0;
if(o>0&&o<this.frameCount-1){while(m!==o){this._diffRender.renderDiff(this.canvas,m);
m+=p}}if(l){console.groupEnd()}n.resolve(m);return n.promise()};if(typeof Object.defineProperties!=="function"){return function(){}
}Object.defineProperties(g,{frameCount:{get:function(){return this._diffRender.frames.length+2
},enumerable:true},canvas:{get:function(){return this._canvas},set:function(m){return this._canvas=m
},enumerable:true},mainCompositor:{get:function(){var m=this;while(m._compositor){m=m._compositor
}return m},enumerable:true}});c.exports=a},{"../diff/Render":626,"ac-deferred":597}],609:[function(b,c,a){var d,g=b("../../../stats/Benchmark");
function f(h){this._compositor=h}d=f.prototype;d.init=function(h){var i=new g("init");
i.start();return this._compositor.init.apply(this._compositor,arguments).then(i.end.bind(i))
};d.applyFrame=function(){var h=new g("applyFrame");h.start();this._compositor.applyFrame.apply(this._compositor,arguments);
h.end.bind(h)};d.calculateRenderCount=function(){return this._compositor.calculateRenderCount.apply(this._compositor,arguments)
};d.compositeFrames=function(){var h=new g("renderFrames");h.start();return this._compositor.compositeFrames.apply(this._compositor,arguments).then(h.end.bind(h))
};if(typeof Object.defineProperties!=="function"){return function(){}}Object.defineProperties(d,{frameCount:{get:function(){return this._compositor.frameCount
},enumerable:true},canvas:{get:function(){return this._compositor.canvas},set:function(h){return this._compositor.canvas=h
},enumerable:true}});f.prototype=d;c.exports=f},{"../../../stats/Benchmark":630}],610:[function(d,f,c){var g,b=false;
function a(i,h){this._compositor=i;this._keyframeInterval=h||8;this._keyframes=[]
}g=a.prototype;g._getClosestKeyframe=function(h){var i=h%this._keyframeInterval,j=Math.floor(h/this._keyframeInterval)+((i>(this._keyframeInterval/2))?1:0);
return j};g._getFrameFromKeyframe=function(h){return h*this._keyframeInterval};
g._saveKeyframe=function(j){var h,i=Math.floor(j/this._keyframeInterval);if(j%this._keyframeInterval===0&&!this._keyframes[i]){if(b){console.log("saving keyframe "+j)
}h=document.createElement("canvas");h.width=this._compositor.canvas.width;h.height=this._compositor.canvas.height;
h.getContext("2d").drawImage(this._compositor.canvas,0,0);this._keyframes[i]=h}};
g.init=function(h){return this._compositor.init.apply(this._compositor,arguments)
};g.applyFrame=function(){this._compositor.applyFrame.apply(this._compositor,arguments)
};g.calculateRenderCount=function(h,i){h=this._getFrameFromKeyframe(this._getClosestKeyframe(i));
return this._compositor.calculateRenderCount(h,i)+1};g.compositeFrames=function(h,j){var k=this._getClosestKeyframe(j);
if(b){console.groupCollapsed("Rendering frames: "+h+"..."+j)}if(this._keyframes[k]&&(this._compositor.calculateRenderCount(h,j)>this.calculateRenderCount(h,j))){h=this._getFrameFromKeyframe(k);
if(b){console.log("applying prerendered keyframe: "+h)}this.applyFrame(this._keyframes[k]);
return this._compositor.compositeFrames(h,j).then(function i(){if(b){console.groupEnd()
}})}else{return this._compositor.compositeFrames(h,j).then(function i(){if(b){console.groupEnd()
}},null,this._saveKeyframe.bind(this))}};if(typeof Object.defineProperties!=="function"){return function(){}
}Object.defineProperties(g,{frameCount:{get:function(){return this._compositor.frameCount
},enumerable:true},canvas:{get:function(){return this._compositor.canvas},set:function(h){return this._compositor.canvas=h
},enumerable:true}});f.exports=a},{}],611:[function(f,g,b){var h,a=false,d=f("../../keyframe/Render"),c=f("ac-deferred").Deferred;
function i(j){this._compositor=j;this._flowDataProvider=this.mainCompositor._loadController._loaders.manifest
}h=i.prototype;h.init=function(j){this._keyframeDiffRender=new d(this._flowDataProvider._data,this.mainCompositor._imageUrlPattern);
return this._keyframeDiffRender.init()};h.applyFrame=function(j){return this._compositor.applyFrame.apply(this._compositor,arguments)
};h.applyKeyframe=function(j,k){this._keyframeDiffRender.renderKeyframe(this.canvas,j,k)
};h.compositeFrames=function(j,l){if(!this._isKeyframeDiff(l-1)){return this._compositor.compositeFrames.apply(this._compositor,arguments)
}var k=new c();if(a){console.groupCollapsed("Rendering keyframe diff image: "+(j-1))
}this.applyKeyframe(l-1);if(a){console.groupEnd()}k.resolve(j-1);return k.promise()
};h._isKeyframeDiff=function(j){return j in this._keyframeDiffRender._loader._keyframes
};h.calculateRenderCount=function(j,k){return this._compositor.calculateRenderCount.apply(this._compositor,arguments)
};if(typeof Object.defineProperties!=="function"){return function(){}}Object.defineProperties(h,{frameCount:{get:function(){return this._compositor.frameCount
},enumerable:true},canvas:{get:function(){return this._compositor.canvas},set:function(j){return this._compositor.canvas=j
},enumerable:true},mainCompositor:{get:function(){return this._compositor.mainCompositor
},enumerable:true}});g.exports=i},{"../../keyframe/Render":628,"ac-deferred":597}],612:[function(d,f,b){var g,a=false,c=d("ac-deferred").Deferred;
function h(i){this._compositor=i;this._frames=this.mainCompositor._loadController._loaders.manifest._data.frames;
this._superframeInterval=this.mainCompositor._diffRender.flowData.superframeFrequency
}g=h.prototype;g.init=function(i){return this._compositor.init.apply(this._compositor,arguments)
};g.applyFrame=function(i){return this._compositor.applyFrame.apply(this._compositor,arguments)
};g.applyKeyframe=function(i,j){this._compositor.applyKeyframe.apply(this._compositor,arguments)
};g.compositeFrames=function(i,l){var m,k,j=new c();if(l<1||l>this.frameCount-2){return this._compositor.compositeFrames.apply(this._compositor,arguments)
}if(this._isKeyframeDiff(l-1)){m=Math.abs(i-l)===1?true:false;if(a){console.groupCollapsed("Drawing superKeyframe image: "+(l-1))
}this.applyKeyframe(l-1,m);if(a){console.groupEnd()}j.resolve(i-1);return j.promise()
}if(Math.abs(l-i)>this._superframeInterval){k=this._getShortestRender(i,l);if(this._isKeyframeDiff(k-1)||k<=0||k>=this.frameCount-2){return this._compositeFromSuperKeyframe(k,l)
}}if(a){console.log("SuperKeyframe compositor handing off to slave compositor: fromFrame:"+i+" toFrame:"+l)
}return this._compositor.compositeFrames.apply(this._compositor,[i,l])};g._getShortestRender=function(i,k){var m=this._compositor.calculateRenderCount,l=this._getClosestSuperKeyframe(k-1),j=m.apply(this._compositor,[l,k])+1,n=m.apply(this._compositor,[i,k]);
if(j<=n){return l}else{return i}};g._compositeFromSuperKeyframe=function(m,k){var i=this.canvas.getContext("2d"),j=(m<=0)?this.mainCompositor._images[0]:(m>=this.frameCount-2?this.mainCompositor._images[1]:this._frames[m-1].image),l;
if(a){console.log("Drawing superKeyframe for composite base: superKeyframe "+(m-1))
}i.drawImage(j,0,0);return this._compositor.compositeFrames.call(this._compositor,m,k)
};g._getClosestSuperFrame=function(i){return Math.round(i/this._superframeInterval)*this._superframeInterval
};g._getClosestSuperKeyframe=function(k){var n,o,m,l,j=this._frames.length;if(k<j+1&&k>0){l=k-1;
while(l>=0){if(this._frames[l].type==="keyframe"){n=l+1;break}l-=1}l=k+1;while(l<=j-1){if(this._frames[l].type==="keyframe"){o=l+1;
break}l+=1}}n=n?n:0;o=o?o:this.frameCount;m=(k-n)<(o-k)?n:o;return m};g._isKeyframeDiff=function(i){return this._compositor._isKeyframeDiff.apply(this._compositor,arguments)
};if(typeof Object.defineProperties!=="function"){return function(){}}Object.defineProperties(g,{frameCount:{get:function(){return this._compositor.frameCount
},enumerable:true},canvas:{get:function(){return this._compositor.canvas},set:function(i){return this._compositor.canvas=i
},enumerable:true},mainCompositor:{get:function(){return this._compositor.mainCompositor
},enumerable:true}});f.exports=h},{"ac-deferred":597}],613:[function(c,d,b){var f,a=false;
function g(i,h){this._compositor=i;this._superframeInterval=h||4}f=g.prototype;
f._getClosestSuperframe=function(h){return Math.round(h/this._superframeInterval)*this._superframeInterval
};f.init=function(h){this._screenCanvas=h};f.applyFrame=function(){this._compositor.applyFrame.apply(this._compositor,arguments)
};f.calculateRenderCount=function(h,j){var i=this._getClosestSuperframe(h);if(Math.abs(i-j)>this._superframeInterval/2){h=i+((h>j)?-1:1)*this._superframeInterval;
return this.calculateRenderCount(h,j)+1}else{return Math.abs(i-j)+1}};f.compositeFrames=function(h,k){var l,i;
if(k<=0||k>=this.frameCount-2){this._compositor.compositeFrames(h,k)}if(h>this.frameCount-2){h=this.frameCount-2
}else{if(h<=0){h=1}}i=this._getClosestSuperframe(h);if(a){console.groupCollapsed("Rendering : "+h+"..."+k)
}if(this._compositor.calculateRenderCount(h,k)>this.calculateRenderCount(h,k)){if(a){console.groupCollapsed("Rendering (superframe) : "+i)
}l=this._compositor.compositeFrames(i,i).then(function j(){if(a){console.groupEnd()
}var m=i+((h>k)?-1:1)*this._superframeInterval;this._compositor.compositeFrames(i,m).then(function(){return this.compositeFrames(m,k)
}.bind(this))}.bind(this))}else{if(a){console.groupCollapsed("Rendering (final frames) : "+h+"..."+k)
}l=this._compositor.compositeFrames(h,k).then(function j(){if(a){console.groupEnd()
}}.bind(this))}l.then(function j(){if(a){console.groupEnd()}}.bind(this));return l
};if(typeof Object.defineProperties!=="function"){return function(){}}Object.defineProperties(f,{frameCount:{get:function(){return this._compositor.frameCount
},enumerable:true},canvas:{get:function(){return this._compositor.canvas},set:function(h){return this._compositor.canvas=h
},enumerable:true},mainCompositor:{get:function(){return this._compositor.mainCompositor
},enumerable:true}});d.exports=g},{}],614:[function(d,f,c){var h,g=d("ac-event-emitter").EventEmitter,a=d("./MultithreadProcess"),i=d("./MultithreadProcessInterface");
var b=function(j){g.call(this);this._function=j};h=b.prototype=new g(null);h.exec=function(l,k){k=k||{};
if(!this._processURL){this._processURL=this._createThreadProcessURL(this._function)
}if(this._process){this.terminateProcess()}if(!this._process){this._process=new window.Worker(this._processURL);
this._process.onmessage=this._onMessage.bind(this)}var j;if(k.transfer){j=[l]}this._process.postMessage(l,j);
return this};h.run=function(n,m,k){k=k||{};var l={name:n,data:m||{}};var j;if(k.transfer){j=[l]
}this._process.postMessage(l,j);this.trigger(n,m)};h.destroy=function(){this.terminateProcess();
this._function=null;this._processURL=null;return this};h.terminateProcess=function(){if(this._process){this._process.terminate();
this._process=null}return this};h._createThreadProcessURL=function(l){var k=this._compileProcess(l),j=new window.Blob([k],{type:"text/javascript"});
return this._getURLObject().createObjectURL(j)};h._getURLObject=function(){return window.URL||window.webkitURL||null
};h._compileProcess=function(l){var o=a.toString();var j=/(['|"]){{INTERFACE}}\1/,k=/(['|"]){{PROCESS}}\1/;
o=o.replace(j,"("+i.toString()+")();");o=o.replace(k,l.toString());var m="(",n=")();";
return m+o+n};h._handleTrigger=function(j,k){this.trigger(j,k)};h._onMessage=function(l){if(!l.data){return
}var j=l.data.evt,k=l.data.data;if(j==="__trigger__"){this._handleTrigger(k.trigger,k.data)
}return this};f.exports=b},{"./MultithreadProcess":615,"./MultithreadProcessInterface":616,"ac-event-emitter":256}],615:[function(c,d,b){var a=function(){var g="{{PROCESS}}",f="{{INTERFACE}}";
this.processInstance;this.onmessage=function(j,h,i){i=i||{};if(!h.processInstance){h.processInstance=new j(this)
}else{h.processInstance._onMessage(i.data.name,i.data.data)}}.bind(f,g,this)};d.exports=a
},{}],616:[function(b,c,a){var d=function(){return{trigger:function(i,h,f){var g={trigger:i,data:h};
this._post("__trigger__",g,f)},_post:function(f,j,h){h=h||{};var g,i={evt:f,data:j};
if(h.transfer){g=[j]}postMessage(i,g)}}};c.exports=d},{}],617:[function(b,c,a){var d;
var f=function(g){this._interface=g;this.trigger=function(j,i,h){this._interface.trigger(j,i,h);
return this};this.renderFrameDiffs=function(m){var j=m.binaryFrame,o=m.compositingData,n=m.frameData,l=m.sourceImagesData,h=n.length,k;
for(k=0;k<h;k++){j=this._applyBlocksToBinaryFrame(j,n[k],l,o)}this.trigger("frameReady",j)
};this._applyBlocksToBinaryFrame=function(i,t,z,A){var l=t.block,G=Math.floor(l/A.blocksPerFullDiff),p=A.imageWidth,F=t.length,D=A.columnsInCanvas,C=A.canvasWidth,E=l%A.blocksPerFullDiff,h=p/A.blockSize;
var w=(E%h)*A.blockSize,v=Math.floor(E/(h||1))*A.blockSize,o=(t.location%D)*A.blockSize,n=Math.floor(t.location/D)*A.blockSize;
var r,q,u,k,j,B,s,m;while(F>0){s=Math.min((F*A.blockSize),C-o,p-w);m=s/A.blockSize;
k=z[G];for(q=0;q<A.blockSize;q++){for(r=0;r<s;r++){j=(v+q)*p+(w+r);B=(n+q)*C+(o+r);
i.buf32[B]=k[j]}}F-=m;if(F>0){if((w+=s)>=p){w=0;v+=A.blockSize}if((E+=m)>=A.blocksPerFullDiff){E=0;
w=0;v=0;G+=1;if(G===A.imagesRequired-1){p=A.imageWidth}}if((o+=s)>=C){o=0;n+=A.blockSize
}l+=m}}return i};this._onMessage=function(i,h){if(typeof this[i]==="function"){this[i](h)
}}};c.exports=f},{}],618:[function(b,c,a){function d(f,g){this.location=f;this.length=g
}c.exports=d},{}],619:[function(c,d,b){function a(){}d.exports=a},{}],620:[function(c,d,b){var h=c("./Manifest"),a=c("./Block"),g;
var f={parseData:function(i){g=0;var j=i.frames.map(this._parseFrame,this);return Object.create(h.prototype,{version:{value:i.version},framecount:{value:i.frameCount},blockSize:{value:i.blockSize},imagesRequired:{value:i.imagesRequired},reversible:{value:i.reversible},superframeFrequency:{value:i.superframeFrequency},frames:{value:j}})
},_valueForCharAt:function(k,i){var j=k.charCodeAt(i);if(j>64&&j<91){return j-65
}if(j>96&&j<123){return j-71}if(j>47&&j<58){return j+4}if(j===43){return 62}if(j===47){return 63
}throw"Invalid Bas64 character: "+k.charAt(i)},_createNumberFromBase64Range:function(m,i,l){var k=0,j;
while(l--){j=this._valueForCharAt(m,i++);k+=(j<<l*6)}return k},_parseFrame:function(k){var l,n=[],k=k.value||k,m,j;
for(l=0;l<k.length;l+=5){j=this._createNumberFromBase64Range(k,l,3);m=this._createNumberFromBase64Range(k,l+3,2);
n.push(Object.create(a.prototype,{location:{value:j,enumerable:true},length:{value:m,enumerable:true},block:{value:(g+=m)-m,enumerable:true}}))
}return n}};d.exports=f},{"./Block":618,"./Manifest":619}],621:[function(c,d,a){var g,b=c("ac-asset-loader").AssetLoader,h=c("../processor");
function f(i){this._assetLoader=new b([i])}g=f.prototype;g.load=function(){return this._assetLoader.load().then(function(j){var i;
if(j&&j.length){i=h.parseData(j[0]);this._data=i}return i}.bind(this))};d.exports=f
},{"../processor":620,"ac-asset-loader":576}],622:[function(c,d,a){var g,b=c("ac-deferred").Deferred;
var f=function(h){if(typeof h==="string"){h=[h]}this.srcArr=h};g=f.prototype;g._request=function(j){var h=new b();
var i=new XMLHttpRequest();i.addEventListener("load",function(){var k=i.response;
h.resolve(k)});i.responseType="arrayBuffer";i.open("get",j,true);i.send();return h.promise()
};g.load=function(){this._deferred=new b();var l=[];var k,j=this.srcArr,h=j.length;
for(k=0;k<h;k++){l.push(this._request(j[k]))}b.all(l).then(function(i){this._deferred.resolve(i)
}.bind(this));return this._deferred.promise()};d.exports=f},{"ac-deferred":597}],623:[function(c,b,d){var i=false;
var g,k=c("./Loader"),h=c("ac-deferred").Deferred,a=c("../compositor/multithread/MultithreadController"),f=c("../compositor/multithread/MultithreadRenderer");
function j(m,l){this.flowData=m;this.flowData.imageUrlPattern=l;this.ArrayBufferCompositor=document.createElement("canvas");
this.ArrayBufferCompositorContext=this.ArrayBufferCompositor.getContext("2d");this.sourceImagesData={};
this._processor=new a(f);this._processor.exec();window.processor=this._processor
}g=j.prototype;g._storeImages=function(l){if(i){console.log("loaded images")}this.images=l;
this._blocksPerFullDiff=(l[0].width/this.flowData.blockSize)*(l[0].height/this.flowData.blockSize);
return(new h()).resolve()};g._getImageDataAsArrayBuffer=function(n,o,m){m=m||o;
this.ArrayBufferCompositor.width=o;this.ArrayBufferCompositor.height=m;this.ArrayBufferCompositorContext.drawImage(n,0,0);
var l=new Uint32Array(this.ArrayBufferCompositorContext.getImageData(0,0,o,m).data.buffer);
return l};g._processDataConstants=function(){this._compositingConstants={images:[]};
var m,l=this.images.length;for(m=0;m<l;m++){this._compositingConstants.images[m]={};
this._compositingConstants.images[m].width=this.images[m].width}return(new h()).resolve()
};g._setFrameRequirements=function(q){var p=q[0],n=q[q.length-1];var o=this._getImageIndexOfBlock(p.block),l=this._getImageIndexOfBlock(n.block+n.length);
var m,r={};for(m=o;m<l+1;m++){if(this.sourceImagesData[m]){r[m]=this.sourceImagesData[m]
}else{r[m]=this._getImageDataAsArrayBuffer(this.images[m],this.images[m].width)
}}this.sourceImagesData=r;return r};g._getImageIndexOfBlock=function(l){return Math.floor(l/this._blocksPerFullDiff)
};g._setCompositingData=function(l,m){this._compositingData={imageWidth:this._compositingConstants.images[0].width,canvasWidth:m.canvas.width,canvasHeight:m.canvas.height,blocksPerFullDiff:this._blocksPerFullDiff,blockSize:this.flowData.blockSize,imagesRequired:this.flowData.imagesRequired};
var n=m.getImageData(0,0,this._compositingData.canvasWidth,this._compositingData.canvasHeight).data;
this._compositingData.columnsInCanvas=this._compositingData.canvasWidth/this.flowData.blockSize,this._compositingData.imageData=new Uint8ClampedArray(n)
};g._createBinaryFrame=function(n,m,l){return{buf8:n,buf32:new Uint32Array(n.buffer),width:m,height:l}
};g._getBinaryImageArrayLength=function(l){return l.canvasWidth};g._compositeBinaryFrame=function(r,q){var o,l=r.length,n=new h();
var p=this._setFrameRequirements(r);var m;if(this._lastBinaryFrame){m=this._lastBinaryFrame
}else{m=this._createBinaryFrame(q.imageData,q.canvasWidth,q.canvasHeight)}this._processor.run("renderFrameDiffs",{binaryFrame:m,frameData:r,compositingData:q,sourceImagesData:p});
this._processor.once("frameReady",n.resolve.bind(n));return n.promise()};g._getSourceImageAs32Bit=function(l){return new Uint32Array(this.sourceImagesData[l].data.buffer)
};g._applyBlocksToBinaryFrame=function(m,z,D){var p=z.block,J=Math.floor(p/this._blocksPerFullDiff),t=this._compositingConstants.images[J].width,I=z.length,G=D.columnsInCanvas,F=D.canvasWidth,H=p%this._blocksPerFullDiff,l=t/this.flowData.blockSize;
var C=(H%l)*this.flowData.blockSize,B=Math.floor(H/(l||1))*this.flowData.blockSize,s=(z.location%G)*this.flowData.blockSize,r=Math.floor(z.location/G)*this.flowData.blockSize;
var v,u,A,o,n,E,w,q;while(I>0){w=Math.min((I*this.flowData.blockSize),F-s,t-C);
q=w/this.flowData.blockSize;o=this.sourceImagesData[J];for(u=0;u<this.flowData.blockSize;
u++){for(v=0;v<w;v++){n=(B+u)*t+(C+v);E=(r+u)*F+(s+v);m.buf32[E]=o[n]}}I-=q;if(I>0){if((C+=w)>=t){C=0;
B+=this.flowData.blockSize}if((H+=q)>=this._blocksPerFullDiff){H=0;C=0;B=0;J+=1;
if(J===this.flowData.imagesRequired-1){t=this._compositingConstants.images[J].width
}}if((s+=w)>=F){s=0;r+=this.flowData.blockSize}p+=q}}return m};g.init=function(){console.log("LOADED BINARY");
if(i){console.log("load images")}return new k(this.flowData.imageUrlPattern,this.flowData.imagesRequired).load({binary:true}).then(this._storeImages.bind(this)).then(this._processDataConstants.bind(this))
};g.renderDiff=function(n,p){var o=n.getContext("2d"),m=new h();if(!this._compositingData){this._setCompositingData(n,o)
}p-=1;if(i){this._frameToRender=p}var l=this._compositeBinaryFrame(this.frames[p],this._compositingData);
l.then(function(r,q){this._lastBinaryFrame=q;r.resolve(q)}.bind(this,m));return m.promise()
};g.getBinaryDataFromFlowDataBlock=function(l){};if(typeof Object.defineProperties!=="function"){return function(){}
}Object.defineProperties(g,{frames:{get:function(){return this.flowData.frames},set:function(l){this.flowData.frames=l
},enumerable:true}});b.exports=j},{"../compositor/multithread/MultithreadController":614,"../compositor/multithread/MultithreadRenderer":617,"./Loader":625,"ac-deferred":597}],624:[function(f,g,c){var h,b=false,d=f("ac-deferred").Deferred;
function a(k,i,j){this.flowData=k;this.flowData.imageUrlPattern=i;this._loadController=j;
this.ArrayBufferCompositor=document.createElement("canvas");this.ArrayBufferCompositorContext=this.ArrayBufferCompositor.getContext("2d");
this.sourceImagesData={};this._forceBinaryComposite=true}h=a.prototype;h._storeImages=function(i){if(b){console.log("loaded images")
}this.images=i;this._blocksPerFullDiff=(i[0].width/this.flowData.blockSize)*(i[0].height/this.flowData.blockSize);
return(new d()).resolve()};h._getImageDataAsArrayBuffer=function(k,l,j){j=j||l;
if(this.ArrayBufferCompositor.width!==l){this.ArrayBufferCompositor.width=l}if(this.ArrayBufferCompositor.height!==j){this.ArrayBufferCompositor.height=j
}this.ArrayBufferCompositorContext.drawImage(k,0,0);var i={buf8:this.ArrayBufferCompositorContext.getImageData(0,0,l,j).data};
i.buf32=new Uint32Array(i.buf8.buffer);return i};h._processDataConstants=function(){this._compositingConstants={images:[]};
var k,j=this.images.length;for(k=0;k<j;k++){this._compositingConstants.images[k]={};
this._compositingConstants.images[k].width=this.images[k].width}return(new d()).resolve()
};h._setFrameRequirements=function(p){var o=p[0],l=p[p.length-1];var n=this._getImageIndexOfBlock(o.block),j=this._getImageIndexOfBlock(l.block+l.length),m=j+1;
var k,q={};for(k=n;k<m;k++){if(this.sourceImagesData[k]){q[k]=this.sourceImagesData[k]
}else{q[k]=this._getImageDataAsArrayBuffer(this.images[k],this.images[k].width)
}}this.sourceImagesData=q};h._getImageIndexOfBlock=function(i){return Math.floor(i/this._blocksPerFullDiff)
};h._setCompositingData=function(i,j){this._compositingData={imageWidth:this._compositingConstants.images[0].width,canvasWidth:j.canvas.width,canvasHeight:j.canvas.height};
var k=j.getImageData(0,0,this._compositingData.canvasWidth,this._compositingData.canvasHeight).data;
this._compositingData.columnsInCanvas=this._compositingData.canvasWidth/this.flowData.blockSize,this._compositingData.imageData=new Uint8ClampedArray(k)
};h._createBinaryFrame=function(k,j,i){return{buf8:k,buf32:new Uint32Array(k.buffer),width:j,height:i}
};h._getBinaryImageArrayLength=function(i){return i.canvasWidth};h._compositeBinaryFrame=function(n,m){var l,j=n.length;
this._setFrameRequirements(n);var k;if(this._lastBinaryFrame&&!this._forceBinaryComposite){k=this._lastBinaryFrame
}else{k=this._createBinaryFrame(m.imageData,m.canvasWidth,m.canvasHeight);if(this._renderOperation){this._cleanBinaryFrame=this._cloneBinaryFrame(k);
k=this.forceApplyFilter(k,m)}else{if(this._cleanBinaryFrame){this._cleanBinaryFrame=null
}}this._forceBinaryComposite=false}if(this._beforeRenderOperation){k=this._beforeRenderOperation(k)
}for(l=0;l<j;l++){k=this._applyBlocksToBinaryFrame(k,n[l],m)}return k};h._applyBlocksToBinaryFrame=function(j,A,F){var s=this.flowData.blockSize,C=this._blocksPerFullDiff,H=this.flowData.imagesRequired,n=A.block,M=Math.floor(n/C),r=this._compositingConstants.images[M].width,L=A.length,J=F.columnsInCanvas,I=F.canvasWidth,m=F.canvasHeight,K=n%C,i=r/s;
var E=(K%i)*s,D=Math.floor(K/(i||1))*s,q=(A.location%J)*s,p=Math.floor(A.location/J)*s;
var w,v,u,t,B,l,k,G,z,o;while(L>0){z=Math.min((L*s),I-q,r-E);o=z/s;l=this.sourceImagesData[M];
for(v=0;v<s;v++){for(w=0;w<z;w++){u=q+w;t=p+v;k=(D+v)*r+(E+w);G=t*I+u;if(this._renderOperation){this._cleanBinaryFrame.buf32[G]=l.buf32[k];
l=this._renderOperation(l,(k*4),u,t,I,m)}j.buf32[G]=l.buf32[k]}}L-=o;if(L>0){if((E+=z)>=r){E=0;
D+=s}if((K+=o)>=C){K=0;E=0;D=0;M+=1;if(M===H-1){r=this._compositingConstants.images[M].width
}}if((q+=z)>=I){q=0;p+=s}n+=o}}return j};h._cloneBinaryFrame=function(i){var j=i.buf8.buffer.slice(0);
return{buf8:new Uint8ClampedArray(j),buf32:new Uint32Array(j),width:i.width,height:i.height}
};h.init=function(){if(b){console.log("load images")}return this._loadController.loadDiffs().then(this._storeImages.bind(this)).then(this._processDataConstants.bind(this))
};h.renderDiff=function(j,l,k){var k=k||j.getContext("2d");if(!this._compositingData||this._forceBinaryComposite){this._setCompositingData(j,k)
}l-=1;if(b){this._frameToRender=l}var i=this._compositeBinaryFrame(this.frames[l],this._compositingData);
this._lastBinaryFrame=i;return new d().resolve(i)};h.forceBinaryComposite=function(){this._forceBinaryComposite=true;
return this};h.forceApplyFilter=function(q,j){if(this._renderOperation){var n,s,r,l,k,m=j.canvasWidth,o=j.canvasHeight,p=q.buf32.length;
for(n=0;n<p;n++){s=n%m;if(n>0){r=Math.floor(n/m)}else{r=0}q=this._renderOperation(q,(n*4),s,r,m,o)
}}return q};h.forceKeyframeRender=function(j,k){this._setCompositingData(j,k);var l=this._compositingData,i=this._createBinaryFrame(l.imageData,l.canvasWidth,l.canvasHeight);
if(this._renderOperation){this._cleanBinaryFrame=this._cloneBinaryFrame(i);i=this.forceApplyFilter(i,l)
}return i};if(typeof Object.defineProperties!=="function"){return function(){}}Object.defineProperties(h,{frames:{get:function(){return this.flowData.frames
},set:function(i){this.flowData.frames=i},enumerable:true},_beforeRenderOperation:{value:undefined,enumerable:false,writable:true},_renderOperation:{value:undefined,enumerable:false,writable:true},beforeRenderOperation:{get:function(){return this._beforeRenderOperation
},set:function(i){if(typeof i==="function"){this._beforeRenderOperation=i;return
}this._beforeRenderOperation=undefined},enumerable:true},renderOperation:{get:function(){return this._renderOperation
},set:function(i){if(typeof i==="function"){this.forceBinaryComposite();this._renderOperation=i;
return}this._renderOperation=undefined;this.forceBinaryComposite()},enumerable:true}});
g.exports=a},{"ac-deferred":597}],625:[function(c,d,b){var g,a=c("ac-asset-loader").AssetLoader,f=c("./BinaryLoader");
function h(l,j){var k,n,m=l.match(/#/g).length;this.imagesUrls=[];if(!j){throw new Error("0 images provided")
}for(k=1;k<=j;k++){n="0000"+k;n=n.substring(n.length-m);this.imagesUrls.push(l.replace(/#{2,}/g,n))
}}g=h.prototype;g.load=function(i){i=i||{};return new a(this.imagesUrls).load()
};d.exports=h},{"./BinaryLoader":622,"ac-asset-loader":576}],626:[function(f,g,c){var h,b=false,d=f("ac-deferred").Deferred;
function a(k,i,j){this.flowData=k;this.flowData.imageUrlPattern=i;this._loadController=j
}h=a.prototype;h._storeImages=function(i){if(b){console.log("loaded images")}this.images=i;
this._blocksPerFullDiff=(i[0].width/this.flowData.blockSize)*(i[0].height/this.flowData.blockSize);
return(new d()).resolve()};h._applyDiffRange=function(k,r){var p=r.block,l=r.length,j=k.canvas.width/this.flowData.blockSize,n=Math.floor(p/this._blocksPerFullDiff),w=this.images[n].width,i=p%this._blocksPerFullDiff,v=w/this.flowData.blockSize,u=(i%v)*this.flowData.blockSize,t=Math.floor(i/(v||1))*this.flowData.blockSize,q=(r.location%j)*this.flowData.blockSize,o=Math.floor(r.location/j)*this.flowData.blockSize,m,s;
while(l){m=Math.min((l*this.flowData.blockSize),k.canvas.width-q,w-u);s=m/this.flowData.blockSize;
if(b){if(typeof this.renderDebugger!=="undefined"&&this._frameToRender>0){this.renderDebugger.registerComparison(this._frameToRender,{image:n,block:p,x:u,y:t})
}}k.drawImage(this.images[n],u,t,m,this.flowData.blockSize,q,o,m,this.flowData.blockSize);
l-=s;if(l){if((u+=m)>=w){u=0;t+=this.flowData.blockSize}if((i+=s)>=this._blocksPerFullDiff){i=0;
u=0;t=0;n+=1;if(n===this.flowData.imagesRequired-1){w=this.images[n].width}}if((q+=m)>=k.canvas.width){q=0;
o+=this.flowData.blockSize}p+=s}}};h.init=function(){if(b){console.log("load images")
}return this._loadController.loadDiffs().then(this._storeImages.bind(this))};h.renderDiff=function(i,l){var j=i.getContext("2d");
l-=1;if(b){this._frameToRender=l;console.log("applying diff frame : "+(l+1))}this.frames[l].forEach(function k(m){this._applyDiffRange(j,m)
}.bind(this))};if(typeof Object.defineProperties!=="function"){return function(){}
}Object.defineProperties(h,{frames:{get:function(){return this.flowData.frames},set:function(i){this.flowData.frames=i
},enumerable:true}});g.exports=a},{"ac-deferred":597}],627:[function(f,g,c){var h,a=f("ac-asset-loader").AssetLoader,d=f("ac-deferred").Deferred;
function b(i,l){var k,j=i.match(/#/g).length;this._keyframes={};i=i.replace(/([^#]+)(#+)(\..*)/,"$1key_$2$3");
this._imageUrls=[];if(l.frames){l.frames.forEach(function(n,m){if(n.type==="keyframe"){k="0000"+m;
k=k.substring(k.length-j);this._imageUrls.push(i.replace(/#+/g,k));this._keyframes[m]=n
}}.bind(this))}}h=b.prototype;h.load=function(){if(this._imageUrls.length>0){return new a(this._imageUrls).load()
}return(new d()).resolve()};if(typeof Object.defineProperties!=="function"){return function(){}
}Object.defineProperties(h,{keyframes:{get:function(){return this._keyframes},enumerable:true}});
g.exports=b},{"ac-asset-loader":576,"ac-deferred":597}],628:[function(c,d,b){var f,a=false,h=c("./Loader");
function g(j,i){this.flowData=j;this.flowData.imageUrlPattern=i}f=g.prototype;f._storeImages=function(j){var l=0,m;
if(j&&j.length>0){if(a){console.log("loaded keyframe diff images")}for(var k in this._loader._keyframes){if(this._loader._keyframes.hasOwnProperty(k)){m=j[l];
this._loader._keyframes[k].image=m;l+=1}}}if(a){if(!j||j.length===0){console.log("no keyframe diff images to load")
}}};f.init=function(){if(a){console.log("loading keyframe diff images")}this._loader=new h(this.flowData.imageUrlPattern,this.flowData);
return this._loader.load().then(this._storeImages.bind(this))};f.renderKeyframe=function(k,j,r){var i=k.getContext("2d"),l=this._loader.keyframes[j],m=l.image,p=l.x,o=l.y,q=l.width,n=l.height;
if(a){console.log("applying keyframe diff image: "+j);console.log("x:"+p+" y:"+o+" w:"+q+" h:"+n)
}if(r===true){if(a){console.log("drawing superKeyframe sub-rectangle")}i.drawImage(m,p,o,q,n,p,o,q,n)
}else{if(this.flowData.reversible){if(a){console.log("drawing superKeyframe full image")
}i.drawImage(m,0,0)}else{if(a){console.log("drawing keyframe full image")}i.drawImage(m,p,o,q,n)
}}};d.exports=g},{"./Loader":627}],629:[function(b,c,a){function d(i,j,m,k,n){var g,h,l,f;
n=n||{};n={keyframeCache:(typeof n.keyframeCache==="undefined")?8:n.keyframeCache,benchmark:(typeof n.benchmark==="undefined")?false:n.benchmark,preload:(typeof n.preload==="undefined")?true:n.preload,renderType:n.renderType||"default",multithread:n.multithread||false};
j=j||[i.getAttribute("data-start-frame")];if(i.getAttribute("data-end-frame")){j.push(i.getAttribute("data-end-frame"))
}m=m||i.getAttribute("data-image-url-pattern");l=(typeof k==="string")?new FlowDataProviderAsync(k):new FlowDataProviderSync(k);
if(n.renderType==="binary"){g=new AC_BinaryCompositor(j,m,l,n.multithread)}else{if(n.renderType==="default"){g=new AC_FlowCompositorSequence(j,m,l)
}}h=new AC_FlowPlayer(i,new AC_Flow(g,n));if(n.preload){h.load()}return h}c.exports=d
},{}],630:[function(b,c,a){var f;function d(g){this.name=g}f=d.prototype;f.start=function(){if(DEBUG){console.log("▼▼▼ start "+this.name+" benchmark");
this.startTime=new Date().getTime();console.time(this.name)}};f.end=function(){if(DEBUG){this.endTime=new Date().getTime();
console.log("▲▲▲ end "+this.name+" benchmark "+(this.endTime-this.startTime)/1000+" sec");
console.time(this.timeEnd)}};c.exports=d},{}],631:[function(b,c,a){arguments[4][2][0].apply(a,arguments)
},{dup:2}],632:[function(b,c,a){arguments[4][244][0].apply(a,arguments)},{"./ac-object/clone":633,"./ac-object/create":634,"./ac-object/defaults":635,"./ac-object/extend":636,"./ac-object/getPrototypeOf":637,"./ac-object/isDate":638,"./ac-object/isEmpty":639,"./ac-object/isRegExp":640,"./ac-object/toQueryParameters":641,dup:244}],633:[function(b,c,a){arguments[4][245][0].apply(a,arguments)
},{"./extend":636,dup:245}],634:[function(b,c,a){arguments[4][246][0].apply(a,arguments)
},{dup:246}],635:[function(b,c,a){arguments[4][247][0].apply(a,arguments)},{"./extend":636,dup:247}],636:[function(b,c,a){arguments[4][248][0].apply(a,arguments)
},{dup:248}],637:[function(b,c,a){arguments[4][249][0].apply(a,arguments)},{dup:249}],638:[function(b,c,a){arguments[4][250][0].apply(a,arguments)
},{dup:250}],639:[function(b,c,a){arguments[4][251][0].apply(a,arguments)},{dup:251}],640:[function(b,c,a){arguments[4][252][0].apply(a,arguments)
},{dup:252}],641:[function(b,c,a){arguments[4][253][0].apply(a,arguments)},{dup:253,qs:631}],642:[function(c,f,a){var d=c("./ac-media-object/create");
var b=c("./ac-media-object/cname");f.exports={create:d,cname:b}},{"./ac-media-object/cname":652,"./ac-media-object/create":653}],643:[function(c,b,f){var j=c("ac-event-emitter").EventEmitter;
var a=c("../eventNames");var i=c("../utils/propertiesAreNull");var h=2;function k(){this._items=[];
this._loadingItem=null;this._active=false}var g=k.prototype=new j();g.load=function(){this._active=true;
return this._loadNext()};g._loadNext=function(){if(this._items.length===0){return
}this._loadingItem=this._items.shift();this._loadItem(this._loadingItem)};g._loadItem=function(l){var m;
this._loadingItem=l;if(l&&l.asset&&!i(l.asset)){l.asset.on(a.loaded,this._itemLoaded.bind(this,l));
l.asset.load()}else{if(this._active){this._loadNext()}}return m};g._itemLoaded=function(m,l){this.trigger(a.progress,{asset:m.asset,binaries:l});
if(this._active===true){this._loadNext()}};g.pause=function(){if(this._loadingItem){this._loadingItem.asset.pause();
this._items.unshift(this._loadingItem);this._loadingItem=null}this._active=false
};g.getItems=function(){return this._items};g.remove=function(o){var n=this._active;
var m;var p;var l=null;if(this._loadingItem&&this._loadingItem.asset===o){p=this._loadingItem;
this.pause()}for(m=0;m<this._items.length;m+=1){if(this._items[m].asset===o){p=this._items[m];
l=m;break}}p.asset.destroy();if(l!==null){this._items.splice(l,1)}if(n&&this._active===false){this.load()
}};g.add=function(n,l){var m=this._active;var o=true;l=(typeof l==="number")?l:h;
if(this._loadingItem&&this._loadingItem.priority<=l){o=false}if(o===true){this.pause()
}this._items.push({asset:n,priority:l});this._sort();if(m&&this._active===false){this.load()
}};g._sort=function(){this._items.sort(function(m,l){if(m.priority<l.priority){return -1
}return 1})};var d=new k();d.load();d.LoadingQueue=k;b.exports=d},{"../eventNames":654,"../utils/propertiesAreNull":656,"ac-event-emitter":256}],644:[function(h,d,k){var m=h("ac-base").Element;
var j=h("ac-object");var p=h("ac-ajax");var n=h("../utils/destroy");var q=h("ac-event-emitter").EventEmitter;
var c=h("../eventNames");var b=h("./MediaObject/Loader");var g=h("./MediaObject/Loader/QueuedLoader");
var a=h("./MediaObject/View");var l;var i={preload:false,autoplay:false,fadeToEndframe:false,transitionDuration:0.4,frameRate:24,queueLoading:false,loadPriority:null};
var f={posterframeSrc:".posterframe",endstateSrc:".endstate"};var o=function(r,t,s){this.container=m.getElementById(r);
if(!this.container){throw"MediaObject: requires valid DOM Node for ‘container’"
}this.options=j.defaults(i,s||{});this.mediaSrc=j.defaults(f,t||{});if(this.mediaSrc.basePath){this.mediaSrc.basePath=this._forceTrailingSlash(this.mediaSrc.basePath)
}this._media=null;this._mediaElement=null;this._mediaEmitter=null;this._loadObject=null;
this._totalFrames=null;this.duration=null;this.ended=false;this.loader=null;this.dataOptionsAttribute="mediaObject";
this.dataAssetOptionsAttribute="mediaObject-asset";this.ready=false;this._updateOptionsFromDataAttribute();
this._mediaExistsSrc=this._constructMediaExistsSrc();this.view=new a(this);if(this.options.preload===true||this.options.autoplay===true){this.load()
}};l=o.prototype=new q();l.enhance=function(){if(!this.view.enhanced){this._generate();
this.view.enhance().then(function(){this.trigger(c.enhance,this)}.bind(this))}};
l.degrade=function(){if(this._media){this.pause()}if(this.view){this.view.degrade();
this.trigger(c.degrade,this)}};l._generate=function(){if(this.loader===null){if(this.options.queueLoading){this.loader=new g(this._loadObject,this.options.loadPriority);
this.prioritize=this.loader.prioritize.bind(this.loader)}else{this.loader=new b(this._loadObject)
}this._addEventListeners()}};l._forceTrailingSlash=function(r){if(r&&r.lastIndexOf("/")!==r.length-1){r=r+"/"
}return r};l._updateOptionsFromDataAttribute=function(){var r=this._parseDataAttributeOptions(this.container,this.dataOptionsAttribute);
var s=this._parseDataAttributeOptions(this.container,this.dataAssetOptionsAttribute);
j.defaults(this.options,r||{});j.defaults(this.mediaSrc,s||{})};l._parseDataAttributeOptions=function(u,s){u=m.getElementById(u);
var v=u.getAttribute("data-"+s);var r;var t={};var w;if(v&&v.length>0){r=v.split(",");
if(r&&r.length>0){r.forEach(function(x){w=x.split(":");t[w[0]]=w[1]})}}return t
};l._constructMediaExistsSrc=function(){var r="";var s=this.mediaSrc.basePath?this._forceTrailingSlash(this.mediaSrc.basePath):"";
if(this.mediaSrc.splitFileLoading===true){r=s}else{r=s+this.mediaSrc.filename+"."+this.mediaSrc.fileFormat
}return r};l.load=function(){if(this.loader===null||this.loader.loaded!==true){this._generate();
this.trigger(c.loadstart,this);this._load();return this.loader.load()}};l._load=function(){this.once(c.loaded,this._onReady,this)
};l.play=function(r){if(!this.ready){this.load();this.options.autoplay=true;return
}if(!this._media.paused){return false}this._play(r);this.trigger(c.play,this)};
l._play=function(r){if(this.ready&&this._media!==null){if(typeof r==="number"){this.setPlaybackRate(r)
}this._media.play()}};l.pause=function(){if(this._media.paused){return false}this._pause();
this.trigger(c.pause,this)};l._pause=function(){this._media.pause()};l.reset=function(){this._reset()
};l._reset=function(){if(this.ready){this.setTime(0)}};l.stop=function(){this.options.autoplay=false;
this._stop();this.trigger(c.stop,this)};l._stop=function(){this._pause();this.reset()
};l.setTime=function(r){if(r<0){r=0}if(r>this.duration){r=this.duration}return this._media.currentTime=r
};l.goToFrame=function(s){var r=s/this.options.frameRate;return this.setTime(r)
};l.goToDurationPercent=function(r){var s=r*this.duration;return this.setTime(s)
};l.currentFrame=function(){return Math.floor(this.currentTime()*this.options.frameRate)
};l.currentTime=function(){return this._media.currentTime};l.getCurrentTime=function(){return this._media.currentTime
};l.getPlaybackRate=function(){return this._media.playbackRate};l.setPlaybackRate=function(r){return this._media.playbackRate=r
};l._addEventListeners=function(){this._mediaEmitter.on(c.ended,this._onEnded,this);
this.loader.once(c.loaded,this._onLoad,this);this.loader.once(c.errored,this._onError,this)
};l.destroy=function(){this.trigger(c.destroy,this);this._mediaEmitter.off();n(this,true)
};l._getTotalFrames=function(){return this.duration*this.options.frameRate};l.mediaExists=function(){this._request=p.create({method:"HEAD",url:this._mediaExistsSrc,timeout:2000});
return this._request.send()};l._onReady=function(){this.ready=true;this.duration=this._media.duration;
this._totalFrames=this._getTotalFrames();this._mediaEmitter.on("durationchange",function(){this.duration=this._media.duration;
this._totalFrames=this._getTotalFrames()},this);this.trigger(c.ready,this);if(this.options.autoplay===true){this.options.autoplay=false;
if(this.view.enhanced===false){this.enhance()}this.play()}};l._onEnded=function(){this.ended=true;
this.trigger(c.ended,this)};l._onLoad=function(){this.loaded=true;this.trigger(c.loaded,this)
};l._onError=function(){this.degrade()};d.exports=o},{"../eventNames":654,"../utils/destroy":655,"./MediaObject/Loader":646,"./MediaObject/Loader/QueuedLoader":647,"./MediaObject/View":649,"ac-ajax":566,"ac-base":3,"ac-event-emitter":256,"ac-object":632}],645:[function(f,c,j){try{var b=f("ac-flow-x").Flow
}catch(h){}var i=f("ac-object");var a=f("../../eventNames");var m=f("../MediaObject");
var l;var g={};var d={};var k=function(n,p,o){p=i.defaults(d,p||{});o=i.defaults(g,o||{});
this.canvas=null;m.apply(this,arguments)};l=k.prototype=i.create(m.prototype);l._generate=function(){if(this._media!==null||b===undefined){return
}var o;var p=document.createElement("canvas");var n={element:p,preload:false,superFrames:this.options.superFrames||false,reversable:this.options.reversable||false,keyframeCache:this.options.keyframeCache||false,benchmark:this.options.benchmark||false,multithread:this.options.multithread||false,preventDraw:this.options.preventDraw||false,renderType:this.options.renderType||"default"};
var q={basePath:this.mediaSrc.basePath||null,baseName:this.mediaSrc.filename||"flow",imageUrlPattern:this.mediaSrc.imageUrlPattern||"###",fileFormat:this.mediaSrc.fileFormat||"jpg",startframeFileFormat:this.mediaSrc.startframeFileFormat||null,endframeFileFormat:this.mediaSrc.endframeFileFormat||null,manifestPath:this.mediaSrc.manifestPath||null,manifestFileFormat:this.mediaSrc.manifestFileFormat||"json",diffPath:this.mediaSrc.diffPath||null,framePath:this.mediaSrc.framePath||null};
o=new b(n,q);o.frameRate=this.options.frameRate;this._media=o;this._mediaElement=o.element;
this._mediaEmitter=o;this._loadObject=o.loader;m.prototype._generate.call(this);
return this.mediaObject};l._constructMediaExistsSrc=function(){var o="";var q=this.mediaSrc.basePath?this._forceTrailingSlash(this.mediaSrc.basePath):null;
var n=this.mediaSrc.filename?this.mediaSrc.filename+"_":"_";var p=this.mediaSrc.manifestPath?this._forceTrailingSlash(this.mediaSrc.manifestPath):null;
o=(p||q)+n+"manifest."+(this.mediaSrc.manifestFileFormat||"json");return o};l._load=function(){this._mediaEmitter.once("canplaythrough",this._onReady,this)
};c.exports=k},{"../../eventNames":654,"../MediaObject":644,"ac-flow-x":600,"ac-object":632}],646:[function(d,c,f){var i=d("../../utils/destroy");
var h=d("../../utils/propertiesAreNull");var j=d("ac-event-emitter").EventEmitter;
var b=d("../../eventNames");var g;var a=function(k){this.loadObject=k;this.loaded=false;
this.loadObject.once(b.loaded,this._onLoad,this);this.loadObject.once(b.errored,this._onError,this)
};g=a.prototype=new j();g.load=function(){if(!this.loaded){return this._load()}};
g.pause=function(){if(!this.loaded){this.loadObject.pause()}};g._load=function(){return this.loadObject.load()
};g._onLoad=function(){this.loaded=true;this.trigger(b.loaded)};g._onError=function(){this.trigger(b.errored)
};g.destroy=function(){if(!h(this.loadObject)){this.pause();if(typeof this.loadObject.destroy==="function"){this.loadObject.destroy()
}}i(this,false)};c.exports=a},{"../../eventNames":654,"../../utils/destroy":655,"../../utils/propertiesAreNull":656,"ac-event-emitter":256}],647:[function(d,b,h){var f=d("ac-object");
var a=d("../../../eventNames");var g=d("../../LoadingQueue");var j=d("../Loader");
var i;var c=function(l,k){this.priority=k;j.apply(this,[l])};i=c.prototype=f.create(j.prototype);
i.prioritize=function(k){this.priority=k;this.loadObject.pause();g.remove(this.loadObject);
this.load()};i._load=function(){if(this.promise){g.add(this.loadObject,this.priority)
}else{this.promise=new Promise(function(l,k){this.loadObject.once(a.loaded,l);this.loadObject.once(a.errored,k);
g.add(this.loadObject,this.priority)}.bind(this))}return this.promise};b.exports=c
},{"../../../eventNames":654,"../../LoadingQueue":643,"../Loader":646,"ac-object":632}],648:[function(d,b,h){var o=d("ac-base").Environment;
var g=d("ac-object");var n=d("ac-asset-loader").AssetLoader;var l=d("ac-deferred").Deferred;
var j=d("ac-deferred").all;var m=d("ac-dom-emitter").DOMEmitter;var a=d("../../eventNames");
var k=d("../MediaObject");var q=d("ac-asset-loader").Asset.Video;var i;var f={loop:false};
var c={filename:"h264",fileFormat:"mp4",splitFileLoading:false};var p=function(r,t,s){t=g.defaults(c,t||{});
s=g.defaults(f,s||{});k.call(this,r,t,s)};i=p.prototype=g.create(k.prototype);i._generate=function(){if(this._media!==null){return
}var s=document.createElement("video");var r={element:s,forceElementLoading:this.options.forceElementLoading,split:this.mediaSrc.splitFileLoading};
var t=this._mediaExistsSrc;var v=new q(t,r);var u=new n(v);if(this.options.loop===true){s.setAttribute("loop","true")
}this._media=s;this._mediaElement=s;this._mediaEmitter=new m(s);this._loadObject=u;
k.prototype._generate.call(this)};i._triggerEndedWhilePlayingInReverse=function(){if(this._media.currentTime===0){this._media.pause();
this.trigger(a.ended,this);this._mediaEmitter.off("timeupdate",this._triggerEndedWhilePlayingInReverse)
}};i._hidePosterOnTimeupdate=function(){if(this._media.currentTime>0){this.view.hideCoverElement(this.view.posterframe);
this._mediaEmitter.off("timeupdate",this._hidePosterOnTimeupdate)}};i._load=function(){var s;
var t=new l();var r=new l();if(typeof this._boundOnReady!=="function"){this._boundOnReady=this._onReady.bind(this)
}this._mediaEmitter.once("loadedmetadata",function(){if(s){window.clearInterval(s)
}t.resolve()},this);this.once(a.loaded,function(){r.resolve();if(o.Browser.name==="Safari"&&!!this._media.src.match(/^blob/)&&t.promise().status()==="pending"){s=window.setInterval(function(){if(!this._media||!this._media.duration){return true
}return isNaN(this._media.duration)}.bind(this),20);window.setTimeout(function(){window.clearInterval(s)
},7000)}},this);return j([t.promise(),r.promise()]).then(this._boundOnReady)};i._play=function(r){this._mediaEmitter.on("timeupdate",this._hidePosterOnTimeupdate,this);
k.prototype._play.apply(this,arguments);if(this.getPlaybackRate()<0){this._mediaEmitter.on("timeupdate",this._triggerEndedWhilePlayingInReverse,this)
}};i._stop=function(){this._mediaEmitter.off("timeupdate",this._hidePosterOnTimeupdate);
this._mediaEmitter.off("timeupdate",this._triggerEndedWhilePlayingInReverse);k.prototype._stop.call(this)
};i._onReady=function(){k.prototype._onReady.call(this);this._boundOnReady=null
};b.exports=p},{"../../eventNames":654,"../MediaObject":644,"ac-asset-loader":576,"ac-base":3,"ac-deferred":597,"ac-dom-emitter":598,"ac-object":632}],649:[function(f,d,g){var i=f("ac-base").Element;
var c=f("../../eventNames");var m=f("ac-asset-loader").AssetLoader;var j=f("ac-deferred").Deferred;
var l=f("ac-deferred").all;var k=/\w+\.(?:jpg|png)$/;var a={posterframe:"mediaObject-posterframe",endstate:"mediaObject-endstate"};
function b(n){this.container=n.container;this.mediaObject=n;this.enhanced=false;
this.posterframe=null;this.endstate=null;this.mediaObject.on(c.play,this._onPlay,this);
this.mediaObject.on(c.pause,this._onPause,this);this.mediaObject.on(c.ended,this._onEnded,this)
}var h=b.prototype;h.enhance=function(){var r=new j();var q;var s;var p=function(t){this.posterframe=t||null
}.bind(this);var o=function(t){this.endstate=t||null}.bind(this);var n=function(){if(this.mediaObject&&this.mediaObject._mediaElement){i.addClassName(this.container,"mediaObject-enhanced");
i.addClassName(this.mediaObject._mediaElement,"mediaObject-element");this.enhanced=true;
window.requestAnimationFrame(function(){if(this.mediaObject&&this.mediaObject._mediaElement){this.hideCoverElement(this.endstate);
this._inject();i.setStyle(this.mediaObject._mediaElement,{visibility:"hidden"});
window.requestAnimationFrame(function(){if(this.mediaObject&&this.mediaObject._mediaElement){i.getBoundingBox(this.mediaObject._mediaElement);
i.setStyle(this.mediaObject._mediaElement,{visibility:"visible"});r.resolve()}}.bind(this))
}}.bind(this))}}.bind(this);if(!this.enhanced){s=this._createCoverElement(this.mediaObject.mediaSrc.posterframeSrc,a.posterframe);
q=this._createCoverElement(this.mediaObject.mediaSrc.endstateSrc,a.endstate);s.then(p);
q.then(o);l([s,q]).then(n)}else{r.reject()}return r};h.degrade=function(){this.showCoverElement(this.endstate,false);
window.requestAnimationFrame(function(){this._remove();this.posterframe=null;this.endstate=null;
this.enhanced=false;i.addClassName(this.container,"mediaObject-degraded");this.mediaObject.destroy()
}.bind(this))};h._createCoverElement=function(q,n){var o;var p;if(k.test(q)){p=this._loadImage(q,n)
}else{o=i.select(q,this.container);p=new j().resolve(o)}return p};h._loadImage=function(q,o){var n=new m([q]);
function p(s){var r=s[0];r.width=r.width;r.height=r.height;r.alt="";r.className=o;
return r}return n.load().then(p)};h._inject=function(){i.insert(this.mediaObject._mediaElement,this.container);
[this.posterframe,this.endstate].forEach(function(n){if(n&&!this.container.contains(n)){i.insert(n,this.container)
}},this)};h._remove=function(){var n=[this.mediaObject._mediaElement];if(!k.test(this.mediaObject.posterframeSrc)){n.push(this.posterframe)
}n.forEach(function(o){if(i.isElement(o)&&this.container.contains(o)){this.container.removeChild(o)
}},this)};h.hideCoverElements=function(){this.hideCoverElement(this.posterframe);
this.hideCoverElement(this.endstate)};h.hideCoverElement=function(o,n){if(o){if(n){this._addOpacityTransition(o)
}else{this._removeTransition(o)}window.requestAnimationFrame(function(){i.setStyle(o,{opacity:0,zIndex:1})
}.bind(this))}};h.showCoverElement=function(p,o){var n=function(){this._removeTransition.bind(this,p);
i.removeVendorPrefixEventListener(p,"transitionEnd",n)}.bind(this);if(p){if(o){this._addOpacityTransition(p);
i.addVendorPrefixEventListener(p,"transitionEnd",n)}else{this._removeTransition(p)
}window.requestAnimationFrame(function(){i.setStyle(p,{opacity:1,zIndex:1001})}.bind(this))
}};h._removeTransition=function(n){i.setVendorPrefixStyle(n,"transition","none")
};h._addOpacityTransition=function(n){i.setVendorPrefixStyle(n,"transition","opacity "+this.mediaObject.options.transitionDuration+"s ease-out")
};h._onPlay=function(){i.removeClassName(this.container,"mediaObject-ended");i.addClassName(this.container,"mediaObject-playing");
this.hideCoverElements()};h._onPause=function(){i.removeClassName(this.container,"mediaObject-playing")
};h._onEnded=function(){i.removeClassName(this.container,"mediaObject-playing");
i.addClassName(this.container,"mediaObject-ended");if(this.endstateElement){this.showCoverElement(this.endstate,false)
}};d.exports=b},{"../../eventNames":654,"ac-asset-loader":576,"ac-base":3,"ac-deferred":597}],650:[function(c,b,g){var i=c("./KeyframeOnPause/ImageOverlayController");
var h,d=c("ac-object"),a=c("ac-clock");var f={overlayLoadDelay:250,overlayClassName:"image-overlay",overlayDirPath:"./overlay",overlayPrefix:"image_",overlayPattern:"####",overlayFileType:"png",clock:a};
var j=function(){};h=j.prototype;h.decorate=function(m,k){var l=d.defaults(f,k);
m.keyframeOnPauseController=new i(m,l);m.container.appendChild(m.keyframeOnPauseController.el);
return m};b.exports=new j()},{"./KeyframeOnPause/ImageOverlayController":651,"ac-clock":591,"ac-object":632}],651:[function(b,c,a){var g,f=b("ac-event-emitter").EventEmitter,h=b("ac-dom-emitter").DOMEmitter;
var d=function(j,i){this.mediaObject=j;this.options=i;this.active=false;this.el=this._createOverlay();
this._overlaySetTime=null;this._setEventTarget();this._bindEvents()};g=d.prototype;
g.applyOverlay=function(k){k=k||this.mediaObject.currentFrame();var i=this._getImagePath(k),j=this._getContainerDimensions(this.mediaObject.container);
this.el.style.backgroundImage="url("+i+")";this.el.style.backgroundSize=j.width+"px "+j.height+"px";
this.active=true;this.mediaObject.trigger("overlay-applied")};g.removeOverlay=function(){this.el.style.backgroundImage="inherit";
this.active=false;this.mediaObject.trigger("overlay-removed")};g._createOverlay=function(){var i=document.createElement("div");
i.className=this.options.overlayClassName;return i};g._onMetadataLoaded=function(){var j=this.mediaObject.width,i=this.mediaObject.height;
this.el.style.width=j;this.el.style.height=i};g._getContainerDimensions=function(j){j=j||this.mediaObject.container;
var i={width:j.offsetWidth,height:j.offsetHeight},k;if(!i.width||!i.height){k=j.getBoundingClientRect();
i.width=k.width;i.height=k.height}return i};g._getImagePath=function(m){var p=this.options.overlayDirPath,j=this.options.overlayFileType,l=this.options.overlayPrefix,k=this.options.overlayPattern,o=k.length,n=m+"",i=n.length;
while(i<o){n="0"+n;i++}return p+"/"+l+n+"."+j};g._bindEvents=function(){this._eventsTarget.on("timeupdate pause",this._onMediaObjectScrub,this);
this._eventsTarget.on("play",this._onMediaObjectPlay,this);this.options.clock.on("draw",this._clockApplyImageOverlay,this)
};g._setEventTarget=function(){this._eventsTarget=this.mediaObject._mediaEmitter
};g._onMediaObjectPlay=function(){this.removeOverlay()};g._onMediaObjectScrub=function(){this._debounceImageOverlay()
};g._debounceImageOverlay=function(){this._overlaySetTime=Date.now()+this.options.overlayLoadDelay
};g._clockApplyImageOverlay=function(){if(!this.mediaObject._media.paused||!this._overlaySetTime||this._overlaySetTime>Date.now()){return
}this._overlaySetTime=null;this.applyOverlay()};c.exports=d},{"ac-dom-emitter":598,"ac-event-emitter":256}],652:[function(c,d,a){var f=(function(){
//var g="http://images.apple.com/global/elements/blank.gif";
var g=doname+"/global/elements/blank.gif";
return g.replace(/global\/.*/,"")}());d.exports=function b(g){if(!!g.match(/(^http(s?))/)){return g
}if(g.match(/^\/(?!\/)/)){g=f+g.replace(/^\//,"");g=g.replace(/(^.+)(\/105\/)/,"$1/")
}return g}},{}],653:[function(c,f,b){var h=c("./MediaObject/Flow");var a=c("./MediaObject/Video");
var g=c("./MediaObject/decorators/KeyframeOnPause");f.exports=function d(i,l,k){k=k||{};
var j=null;if(k.type==="h264"){j=new a(i,l,k)}if(k.type==="flow"){j=new h(i,l,k)
}if(k.keyframeOverlay){j=g.decorate(j,k.keyframeOverlay)}return j}},{"./MediaObject/Flow":645,"./MediaObject/Video":648,"./MediaObject/decorators/KeyframeOnPause":650}],654:[function(b,c,a){c.exports={degrade:"degrade",destroy:"destroy",ended:"ended",enhance:"enhance",errored:"error",loaded:"loaded",loadstart:"loadstart",pause:"pause",play:"play",progress:"progress",ready:"ready",stop:"stop"}
},{}],655:[function(b,d,a){var f=b("./propertiesAreNull");d.exports=function c(g,h){if(typeof g.off==="function"){g.off()
}window.setTimeout(function(){var i;for(i in g){if(g.hasOwnProperty(i)){if(h&&g[i]&&typeof g[i].destroy==="function"&&!f(g[i])){g[i].destroy()
}g[i]=null}}})}},{"./propertiesAreNull":656}],656:[function(b,c,a){c.exports=function d(g){var f=true;
for(var h in g){if(g.hasOwnProperty(h)){if(g[h]!==null){f=false;break}}}return f
}},{}],657:[function(c,d,b){c("ac-polyfills/Array/isArray");var h=c("./extend");
var a=Object.prototype.hasOwnProperty;var f=function(i,j){var k;for(k in j){if(a.call(j,k)){if(j[k]===null){i[k]=null
}else{if(typeof j[k]==="object"){i[k]=Array.isArray(j[k])?[]:{};f(i[k],j[k])}else{i[k]=j[k]
}}}}return i};d.exports=function g(j,i){if(i){return f({},j)}return h({},j)}},{"./extend":660,"ac-polyfills/Array/isArray":666}],658:[function(b,c,a){arguments[4][246][0].apply(a,arguments)
},{dup:246}],659:[function(b,c,a){arguments[4][247][0].apply(a,arguments)},{"./extend":660,dup:247}],660:[function(c,d,b){c("ac-polyfills/Array/prototype.forEach");
var a=Object.prototype.hasOwnProperty;d.exports=function f(){var h;var g;if(arguments.length<2){h=[{},arguments[0]]
}else{h=[].slice.call(arguments)}g=h.shift();h.forEach(function(j){if(j!=null){for(var i in j){if(a.call(j,i)){g[i]=j[i]
}}}});return g}},{"ac-polyfills/Array/prototype.forEach":667}],661:[function(b,c,a){arguments[4][249][0].apply(a,arguments)
},{dup:249}],662:[function(b,c,a){c.exports={clone:b("./clone"),create:b("./create"),defaults:b("./defaults"),extend:b("./extend"),getPrototypeOf:b("./getPrototypeOf"),isDate:b("./isDate"),isEmpty:b("./isEmpty"),isRegExp:b("./isRegExp"),toQueryParameters:b("./toQueryParameters")}
},{"./clone":657,"./create":658,"./defaults":659,"./extend":660,"./getPrototypeOf":661,"./isDate":663,"./isEmpty":664,"./isRegExp":665,"./toQueryParameters":669}],663:[function(b,c,a){arguments[4][250][0].apply(a,arguments)
},{dup:250}],664:[function(b,c,a){arguments[4][251][0].apply(a,arguments)},{dup:251}],665:[function(b,c,a){arguments[4][252][0].apply(a,arguments)
},{dup:252}],666:[function(b,c,a){if(!Array.isArray){Array.isArray=function(d){return Object.prototype.toString.call(d)==="[object Array]"
}}},{}],667:[function(b,c,a){if(!Array.prototype.forEach){Array.prototype.forEach=function d(k,j){var h=Object(this);
var f;var g;if(typeof k!=="function"){throw new TypeError("No function object passed to forEach.")
}for(f=0;f<this.length;f+=1){g=h[f];k.call(j,g,f,h)}}}},{}],668:[function(b,c,a){arguments[4][2][0].apply(a,arguments)
},{dup:2}],669:[function(b,c,a){arguments[4][253][0].apply(a,arguments)},{dup:253,qs:668}],670:[function(b,c,a){arguments[4][128][0].apply(a,arguments)
},{"./ac-clock/Clock":671,"./ac-clock/ThrottledClock":672,"./ac-clock/sharedClockInstance":673,dup:128}],671:[function(b,c,a){arguments[4][129][0].apply(a,arguments)
},{"ac-event-emitter":256,dup:129}],672:[function(b,c,a){arguments[4][130][0].apply(a,arguments)
},{"./sharedClockInstance":673,"ac-event-emitter":256,dup:130}],673:[function(b,c,a){arguments[4][131][0].apply(a,arguments)
},{"./Clock":671,dup:131}],674:[function(b,c,a){c.exports={DeferredQueue:b("./ac-deferredqueue/DeferredQueue"),Action:b("./ac-deferredqueue/Action")}
},{"./ac-deferredqueue/Action":675,"./ac-deferredqueue/DeferredQueue":676}],675:[function(b,d,a){function c(h,g){if(typeof h!=="function"){throw new TypeError("Deferred Queue func must be a function.")
}this._options=g||{};this._options.delay=this._options.delay||0;this.__func=h}var f=c.prototype;
f.run=function(){var g=this.__func;if(typeof this._options.delay==="number"&&this._options.delay>0){window.setTimeout(function(){g()
},this._options.delay*1000)}else{g()}};d.exports=c},{}],676:[function(c,f,a){var d=c("./Action");
function b(h){this._options=h||{};this._options.autoplay=this._options.autoplay||false;
this._options.asynchronous=this._options.asynchronous||false;this._isPlaying=false;
this._isRunningAction=false;this._queue=[];this.didFinish=this.__didFinish.bind(this)
}var g=b.prototype;g.add=function(j,i){var h={};var k;if(i>0){h.delay=i}k=new d(j,h);
this._queue.push(k);if(!this._isPlaying&&this._options.autoplay===true){this.start()
}else{if(this._isPlaying){this.__runNextAction()}}};g.remove=function(h){this._queue=this._queue.filter(function(i){return i!==h
})};g.start=function(){if(this._isPlaying){return false}this._isPlaying=true;this.__runNextAction()
};g.stop=function(){if(!this._isPlaying){return false}this._isPlaying=false};g.clear=function(){this._queue=[];
this.stop()};g.__didFinish=function(){this._isRunningAction=false;this.__runNextAction()
};g.__runNextAction=function(){if(!this._isPlaying){return false}if(this._queue.length&&!this._isRunningAction){var h=this._queue.shift();
h.run();if(this._options.asynchronous===true){this._isRunningAction=true;return
}this.__runNextAction()}};f.exports=b},{"./Action":675}],677:[function(b,c,a){arguments[4][374][0].apply(a,arguments)
},{"./ac-array/flatten":678,"./ac-array/intersection":679,"./ac-array/toArray":680,"./ac-array/union":681,"./ac-array/unique":682,"./ac-array/without":683,dup:374}],678:[function(b,c,a){arguments[4][375][0].apply(a,arguments)
},{dup:375}],679:[function(b,c,a){arguments[4][376][0].apply(a,arguments)},{dup:376}],680:[function(b,c,a){arguments[4][377][0].apply(a,arguments)
},{dup:377}],681:[function(b,c,a){arguments[4][378][0].apply(a,arguments)},{"./flatten":678,"./unique":682,dup:378}],682:[function(b,c,a){arguments[4][379][0].apply(a,arguments)
},{dup:379}],683:[function(b,c,a){arguments[4][380][0].apply(a,arguments)},{dup:380}],684:[function(b,c,a){arguments[4][235][0].apply(a,arguments)
},{"./ac-dom-emitter/DOMEmitter":685,dup:235}],685:[function(b,c,a){arguments[4][236][0].apply(a,arguments)
},{"ac-event-emitter":256,dup:236}],686:[function(b,c,a){arguments[4][383][0].apply(a,arguments)
},{"./ac-dom-styles/ie":687,"./ac-dom-styles/vendorTransformHelper":688,dup:383}],687:[function(b,c,a){arguments[4][384][0].apply(a,arguments)
},{dup:384}],688:[function(b,c,a){arguments[4][385][0].apply(a,arguments)},{dup:385}],689:[function(b,c,a){arguments[4][386][0].apply(a,arguments)
},{"./ac-dom-metrics/ie":690,"ac-dom-styles":686,dup:386}],690:[function(b,c,a){arguments[4][387][0].apply(a,arguments)
},{dup:387}],691:[function(b,c,a){arguments[4][105][0].apply(a,arguments)},{dup:105}],692:[function(b,c,a){arguments[4][106][0].apply(a,arguments)
},{dup:106}],693:[function(b,c,a){arguments[4][107][0].apply(a,arguments)},{dup:107}],694:[function(b,c,a){arguments[4][290][0].apply(a,arguments)
},{dup:290}],695:[function(b,c,a){arguments[4][108][0].apply(a,arguments)},{dup:108}],696:[function(b,c,a){arguments[4][109][0].apply(a,arguments)
},{dup:109}],697:[function(b,c,a){arguments[4][293][0].apply(a,arguments)},{dup:293}],698:[function(b,c,a){arguments[4][110][0].apply(a,arguments)
},{"./ELEMENT_NODE":695,"./internal/isNodeType":704,"ac-polyfills/Array/prototype.filter":714,"ac-polyfills/Array/prototype.slice":715,dup:110}],699:[function(b,c,a){arguments[4][295][0].apply(a,arguments)
},{"./COMMENT_NODE":691,"./DOCUMENT_FRAGMENT_NODE":692,"./DOCUMENT_NODE":693,"./DOCUMENT_TYPE_NODE":694,"./ELEMENT_NODE":695,"./TEXT_NODE":696,"./createDocumentFragment":697,"./filterByNodeType":698,"./insertAfter":700,"./insertBefore":701,"./insertFirstChild":702,"./insertLastChild":703,"./isComment":706,"./isDocument":707,"./isDocumentFragment":708,"./isDocumentType":709,"./isElement":710,"./isNode":711,"./isNodeList":712,"./isTextNode":713,"./remove":716,"./replace":717,dup:295}],700:[function(b,c,a){arguments[4][296][0].apply(a,arguments)
},{"./internal/validate":705,dup:296}],701:[function(b,c,a){arguments[4][297][0].apply(a,arguments)
},{"./internal/validate":705,dup:297}],702:[function(b,c,a){arguments[4][298][0].apply(a,arguments)
},{"./internal/validate":705,dup:298}],703:[function(b,c,a){arguments[4][299][0].apply(a,arguments)
},{"./internal/validate":705,dup:299}],704:[function(b,c,a){arguments[4][111][0].apply(a,arguments)
},{"../isNode":711,dup:111}],705:[function(b,c,a){arguments[4][112][0].apply(a,arguments)
},{"../COMMENT_NODE":691,"../DOCUMENT_FRAGMENT_NODE":692,"../ELEMENT_NODE":695,"../TEXT_NODE":696,"./isNodeType":704,dup:112}],706:[function(b,c,a){arguments[4][302][0].apply(a,arguments)
},{"./COMMENT_NODE":691,"./internal/isNodeType":704,dup:302}],707:[function(b,c,a){arguments[4][303][0].apply(a,arguments)
},{"./DOCUMENT_NODE":693,"./internal/isNodeType":704,dup:303}],708:[function(b,c,a){arguments[4][113][0].apply(a,arguments)
},{"./DOCUMENT_FRAGMENT_NODE":692,"./internal/isNodeType":704,dup:113}],709:[function(b,c,a){arguments[4][305][0].apply(a,arguments)
},{"./DOCUMENT_TYPE_NODE":694,"./internal/isNodeType":704,dup:305}],710:[function(b,c,a){arguments[4][114][0].apply(a,arguments)
},{"./ELEMENT_NODE":695,"./internal/isNodeType":704,dup:114}],711:[function(b,c,a){arguments[4][115][0].apply(a,arguments)
},{dup:115}],712:[function(b,c,a){arguments[4][308][0].apply(a,arguments)},{dup:308}],713:[function(b,c,a){arguments[4][309][0].apply(a,arguments)
},{"./TEXT_NODE":696,"./internal/isNodeType":704,dup:309}],714:[function(b,c,a){arguments[4][117][0].apply(a,arguments)
},{dup:117}],715:[function(b,c,a){arguments[4][58][0].apply(a,arguments)},{dup:58}],716:[function(b,c,a){arguments[4][116][0].apply(a,arguments)
},{"./internal/validate":705,dup:116}],717:[function(b,c,a){arguments[4][313][0].apply(a,arguments)
},{"./internal/validate":705,dup:313}],718:[function(b,c,a){arguments[4][399][0].apply(a,arguments)
},{dup:399}],719:[function(b,c,a){arguments[4][400][0].apply(a,arguments)},{"./ac-dom-traversal/ancestor":720,"./ac-dom-traversal/ancestors":721,"./ac-dom-traversal/children":722,"./ac-dom-traversal/filterBySelector":723,"./ac-dom-traversal/firstChild":724,"./ac-dom-traversal/lastChild":727,"./ac-dom-traversal/matchesSelector":728,"./ac-dom-traversal/nextSibling":729,"./ac-dom-traversal/nextSiblings":730,"./ac-dom-traversal/previousSibling":731,"./ac-dom-traversal/previousSiblings":732,"./ac-dom-traversal/querySelector":733,"./ac-dom-traversal/querySelectorAll":734,"./ac-dom-traversal/shims/ie":735,"./ac-dom-traversal/siblings":736,dup:400}],720:[function(b,c,a){arguments[4][401][0].apply(a,arguments)
},{"./helpers/validate":726,"./matchesSelector":728,"ac-dom-nodes":699,dup:401}],721:[function(b,c,a){arguments[4][402][0].apply(a,arguments)
},{"./helpers/validate":726,"./matchesSelector":728,"ac-dom-nodes":699,dup:402}],722:[function(b,c,a){arguments[4][403][0].apply(a,arguments)
},{"./filterBySelector":723,"./helpers/validate":726,"ac-dom-nodes":699,dup:403}],723:[function(b,c,a){arguments[4][404][0].apply(a,arguments)
},{"./helpers/validate":726,"./matchesSelector":728,dup:404}],724:[function(b,c,a){arguments[4][405][0].apply(a,arguments)
},{"./children":722,"./helpers/validate":726,dup:405}],725:[function(b,c,a){arguments[4][406][0].apply(a,arguments)
},{dup:406}],726:[function(b,c,a){arguments[4][407][0].apply(a,arguments)},{"ac-dom-nodes":699,dup:407}],727:[function(b,c,a){arguments[4][408][0].apply(a,arguments)
},{"./children":722,"./helpers/validate":726,dup:408}],728:[function(b,c,a){arguments[4][409][0].apply(a,arguments)
},{"./helpers/nativeMatches":725,"./helpers/validate":726,"ac-dom-nodes":699,dup:409}],729:[function(b,c,a){arguments[4][410][0].apply(a,arguments)
},{"./helpers/validate":726,"./matchesSelector":728,"ac-dom-nodes":699,dup:410}],730:[function(b,c,a){arguments[4][411][0].apply(a,arguments)
},{"./helpers/validate":726,"./matchesSelector":728,"ac-dom-nodes":699,dup:411}],731:[function(b,c,a){arguments[4][412][0].apply(a,arguments)
},{"./helpers/validate":726,"./matchesSelector":728,"ac-dom-nodes":699,dup:412}],732:[function(b,c,a){arguments[4][413][0].apply(a,arguments)
},{"./helpers/validate":726,"./matchesSelector":728,"ac-dom-nodes":699,dup:413}],733:[function(b,c,a){arguments[4][414][0].apply(a,arguments)
},{"./helpers/validate":726,dup:414}],734:[function(b,c,a){arguments[4][415][0].apply(a,arguments)
},{"./helpers/validate":726,dup:415}],735:[function(b,c,a){arguments[4][416][0].apply(a,arguments)
},{"../helpers/nativeMatches":725,"../helpers/validate":726,"../vendor/sizzle/sizzle":737,"ac-dom-nodes":699,dup:416}],736:[function(b,c,a){arguments[4][417][0].apply(a,arguments)
},{"./children":722,"./helpers/validate":726,dup:417}],737:[function(b,c,a){arguments[4][418][0].apply(a,arguments)
},{dup:418}],738:[function(b,c,a){arguments[4][419][0].apply(a,arguments)},{"./ac-dom-emitter/DOMEmitter":739,dup:419}],739:[function(b,c,a){arguments[4][420][0].apply(a,arguments)
},{"ac-dom-events":718,"ac-dom-traversal":719,"ac-event-emitter":256,dup:420}],740:[function(b,c,a){arguments[4][421][0].apply(a,arguments)
},{"./ac-shared-instance/SharedInstance":741,dup:421}],741:[function(b,c,a){arguments[4][422][0].apply(a,arguments)
},{dup:422}],742:[function(b,c,a){arguments[4][423][0].apply(a,arguments)},{"./ac-window-delegate/WindowDelegate":745,"./ac-window-delegate/WindowDelegateCustomEvent":746,"./ac-window-delegate/WindowDelegateOptimizer":747,dup:423}],743:[function(b,c,a){arguments[4][424][0].apply(a,arguments)
},{"ac-event-emitter":256,dup:424}],744:[function(b,c,a){arguments[4][425][0].apply(a,arguments)
},{"ac-event-emitter":256,dup:425}],745:[function(b,c,a){arguments[4][426][0].apply(a,arguments)
},{"./CustomEventController":743,"./OptimizerController":744,"./optimizers/optimizers":750,"./queries/queries":759,"ac-dom-emitter":738,"ac-shared-instance":740,dup:426}],746:[function(b,c,a){arguments[4][427][0].apply(a,arguments)
},{"ac-event-emitter":256,dup:427}],747:[function(b,c,a){arguments[4][428][0].apply(a,arguments)
},{"ac-event-emitter":256,dup:428}],748:[function(b,c,a){arguments[4][429][0].apply(a,arguments)
},{"../../WindowDelegateOptimizer":747,"../../queries/queries":759,dup:429}],749:[function(b,c,a){arguments[4][430][0].apply(a,arguments)
},{"../../WindowDelegateOptimizer":747,"../../queries/queries":759,dup:430}],750:[function(b,c,a){arguments[4][431][0].apply(a,arguments)
},{"./events/resize":748,"./events/scroll":749,dup:431}],751:[function(b,c,a){arguments[4][432][0].apply(a,arguments)
},{dup:432}],752:[function(b,c,a){arguments[4][433][0].apply(a,arguments)},{dup:433}],753:[function(b,c,a){arguments[4][434][0].apply(a,arguments)
},{dup:434}],754:[function(b,c,a){arguments[4][435][0].apply(a,arguments)},{dup:435}],755:[function(b,c,a){arguments[4][436][0].apply(a,arguments)
},{dup:436}],756:[function(b,c,a){arguments[4][437][0].apply(a,arguments)},{dup:437}],757:[function(b,c,a){arguments[4][438][0].apply(a,arguments)
},{dup:438}],758:[function(b,c,a){arguments[4][439][0].apply(a,arguments)},{dup:439}],759:[function(b,c,a){arguments[4][440][0].apply(a,arguments)
},{"./methods/clientHeight":751,"./methods/clientWidth":752,"./methods/innerHeight":753,"./methods/innerWidth":754,"./methods/maxScrollX":755,"./methods/maxScrollY":756,"./methods/scrollX":757,"./methods/scrollY":758,dup:440}],760:[function(b,c,a){arguments[4][441][0].apply(a,arguments)
},{"./ac-element-tracker/ElementTracker":761,dup:441}],761:[function(b,c,a){arguments[4][442][0].apply(a,arguments)
},{"./TrackedElement":762,"ac-array":677,"ac-dom-metrics":689,"ac-dom-nodes":699,"ac-event-emitter":256,"ac-object":766,"ac-window-delegate":742,dup:442}],762:[function(b,c,a){arguments[4][443][0].apply(a,arguments)
},{"ac-dom-emitter":684,"ac-dom-nodes":699,"ac-object":766,dup:443}],763:[function(b,c,a){arguments[4][254][0].apply(a,arguments)
},{"./ac-element-engagement/ElementEngagement":764,dup:254}],764:[function(c,b,f){var g;
var d=c("ac-object");var h=c("ac-element-tracker").ElementTracker;var j={timeToEngage:500,inViewThreshold:0.75,stopOnEngaged:true};
var i={thresholdEnterTime:0,thresholdExitTime:0,inThreshold:false,engaged:false,tracking:true};
var a=function(){h.call(this)};g=a.prototype=d.create(h.prototype);g._decorateTrackedElement=function(l,k){var m;
m=d.defaults(j,k||{});d.extend(l,m);d.extend(l,i)};g._attachElementListeners=function(k){k.on("thresholdenter",this._thresholdEnter,this);
k.on("thresholdexit",this._thresholdExit,this);k.on("enterview",this._enterView,this);
k.on("exitview",this._exitView,this)};g._removeElementListeners=function(k){k.off("thresholdenter",this._thresholdEnter);
k.off("thresholdexit",this._thresholdExit);k.off("enterview",this._enterView);k.off("exitview",this._exitView)
};g._attachAllElementListeners=function(){this.elements.forEach(function(k){if(!k.stopOnEngaged){this._attachElementListeners(k)
}else{if(!k.engaged){this._attachElementListeners(k)}}},this)};g._removeAllElementListeners=function(){this.elements.forEach(function(k){this._removeElementListeners(k)
},this)};g._elementInViewPastThreshold=function(m){var k=this.windowDelegate.innerHeight();
var l=false;if(m.pixelsInView===k){l=true}else{l=(m.percentInView>m.inViewThreshold)
}return l};g._ifInView=function(k,m){var l=k.inThreshold;h.prototype._ifInView.apply(this,arguments);
if(!l&&this._elementInViewPastThreshold(k)){k.inThreshold=true;k.trigger("thresholdenter",k);
if(typeof k.timeToEngage==="number"&&k.timeToEngage>=0){k.engagedTimeout=window.setTimeout(this._engaged.bind(this,k),k.timeToEngage)
}}};g._ifAlreadyInView=function(k){var l=k.inThreshold;h.prototype._ifAlreadyInView.apply(this,arguments);
if(l&&!this._elementInViewPastThreshold(k)){k.inThreshold=false;k.trigger("thresholdexit",k);
if(k.engagedTimeout){window.clearTimeout(k.engagedTimeout);k.engagedTimeout=null
}}};g._engaged=function(k){k.engagedTimeout=null;this._elementEngaged(k);k.trigger("engaged",k);
this.trigger("engaged",k)};g._thresholdEnter=function(k){k.thresholdEnterTime=Date.now();
k.thresholdExitTime=0;this.trigger("thresholdenter",k)};g._thresholdExit=function(k){k.thresholdExitTime=Date.now();
this.trigger("thresholdexit",k)};g._enterView=function(k){this.trigger("enterview",k)
};g._exitView=function(k){this.trigger("exitview",k)};g._elementEngaged=function(k){k.engaged=true;
if(k.stopOnEngaged){this.stop(k)}};g.stop=function(k){if(this.tracking&&!k){this._removeAllElementListeners();
h.prototype.stop.call(this)}if(k&&k.tracking){k.tracking=false;this._removeElementListeners(k)
}};g.start=function(k){if(!k){this._attachAllElementListeners()}if(k&&!k.tracking){if(!k.stopOnEngaged){k.tracking=true;
this._attachElementListeners(k)}else{if(!k.engaged){k.tracking=true;this._attachElementListeners(k)
}}}if(!this.tracking){h.prototype.start.call(this)}else{this.refreshAllElementStates()
}};g.addElement=function(m,k){var l=h.prototype.addElement.call(this,m);this._decorateTrackedElement(l,k);
return l};g.addElements=function(l,k){[].forEach.call(l,function(m){this.addElement(m,k)
},this)};b.exports=a},{"ac-element-tracker":760,"ac-object":766}],765:[function(b,c,a){arguments[4][2][0].apply(a,arguments)
},{dup:2}],766:[function(b,c,a){arguments[4][244][0].apply(a,arguments)},{"./ac-object/clone":767,"./ac-object/create":768,"./ac-object/defaults":769,"./ac-object/extend":770,"./ac-object/getPrototypeOf":771,"./ac-object/isDate":772,"./ac-object/isEmpty":773,"./ac-object/isRegExp":774,"./ac-object/toQueryParameters":775,dup:244}],767:[function(b,c,a){arguments[4][245][0].apply(a,arguments)
},{"./extend":770,dup:245}],768:[function(b,c,a){arguments[4][246][0].apply(a,arguments)
},{dup:246}],769:[function(b,c,a){arguments[4][247][0].apply(a,arguments)},{"./extend":770,dup:247}],770:[function(b,c,a){arguments[4][248][0].apply(a,arguments)
},{dup:248}],771:[function(b,c,a){arguments[4][249][0].apply(a,arguments)},{dup:249}],772:[function(b,c,a){arguments[4][250][0].apply(a,arguments)
},{dup:250}],773:[function(b,c,a){arguments[4][251][0].apply(a,arguments)},{dup:251}],774:[function(b,c,a){arguments[4][252][0].apply(a,arguments)
},{dup:252}],775:[function(b,c,a){arguments[4][253][0].apply(a,arguments)},{dup:253,qs:765}],776:[function(b,c,a){arguments[4][235][0].apply(a,arguments)
},{"./ac-dom-emitter/DOMEmitter":777,dup:235}],777:[function(b,c,a){arguments[4][236][0].apply(a,arguments)
},{"ac-event-emitter":256,dup:236}],778:[function(b,c,a){c.exports.ValueSmoother=b("./ac-value-smoother/ValueSmoother")
},{"./ac-value-smoother/ValueSmoother":779}],779:[function(c,d,b){function a(g){g=g||this.sampling;
this.pool=new Array(g);this.raw=0;this.value=0}var f=a.prototype;f.sampling=3;f.smooth=function(h,m){var k=0;
var g=this.pool.length;if(typeof this.pool[g-this.sampling]!=="undefined"){for(var j=this.sampling;
j>0;j--){k+=this.pool[g-j]}k+=h;k/=(this.sampling+1)}else{k=h}if(!m){this.raw=h;
this._track(k,true)}return k};f._track=function(h,g){if(g){this.value=h}else{this.raw=this.value=h
}this.pool.push(h);this.pool.shift()};d.exports=a},{}],780:[function(b,c,a){arguments[4][399][0].apply(a,arguments)
},{dup:399}],781:[function(b,c,a){arguments[4][105][0].apply(a,arguments)},{dup:105}],782:[function(b,c,a){arguments[4][106][0].apply(a,arguments)
},{dup:106}],783:[function(b,c,a){arguments[4][107][0].apply(a,arguments)},{dup:107}],784:[function(b,c,a){arguments[4][290][0].apply(a,arguments)
},{dup:290}],785:[function(b,c,a){arguments[4][108][0].apply(a,arguments)},{dup:108}],786:[function(b,c,a){arguments[4][109][0].apply(a,arguments)
},{dup:109}],787:[function(b,c,a){arguments[4][293][0].apply(a,arguments)},{dup:293}],788:[function(b,c,a){arguments[4][110][0].apply(a,arguments)
},{"./ELEMENT_NODE":785,"./internal/isNodeType":794,"ac-polyfills/Array/prototype.filter":804,"ac-polyfills/Array/prototype.slice":805,dup:110}],789:[function(b,c,a){arguments[4][295][0].apply(a,arguments)
},{"./COMMENT_NODE":781,"./DOCUMENT_FRAGMENT_NODE":782,"./DOCUMENT_NODE":783,"./DOCUMENT_TYPE_NODE":784,"./ELEMENT_NODE":785,"./TEXT_NODE":786,"./createDocumentFragment":787,"./filterByNodeType":788,"./insertAfter":790,"./insertBefore":791,"./insertFirstChild":792,"./insertLastChild":793,"./isComment":796,"./isDocument":797,"./isDocumentFragment":798,"./isDocumentType":799,"./isElement":800,"./isNode":801,"./isNodeList":802,"./isTextNode":803,"./remove":806,"./replace":807,dup:295}],790:[function(b,c,a){arguments[4][296][0].apply(a,arguments)
},{"./internal/validate":795,dup:296}],791:[function(b,c,a){arguments[4][297][0].apply(a,arguments)
},{"./internal/validate":795,dup:297}],792:[function(b,c,a){arguments[4][298][0].apply(a,arguments)
},{"./internal/validate":795,dup:298}],793:[function(b,c,a){arguments[4][299][0].apply(a,arguments)
},{"./internal/validate":795,dup:299}],794:[function(b,c,a){arguments[4][111][0].apply(a,arguments)
},{"../isNode":801,dup:111}],795:[function(b,c,a){arguments[4][112][0].apply(a,arguments)
},{"../COMMENT_NODE":781,"../DOCUMENT_FRAGMENT_NODE":782,"../ELEMENT_NODE":785,"../TEXT_NODE":786,"./isNodeType":794,dup:112}],796:[function(b,c,a){arguments[4][302][0].apply(a,arguments)
},{"./COMMENT_NODE":781,"./internal/isNodeType":794,dup:302}],797:[function(b,c,a){arguments[4][303][0].apply(a,arguments)
},{"./DOCUMENT_NODE":783,"./internal/isNodeType":794,dup:303}],798:[function(b,c,a){arguments[4][113][0].apply(a,arguments)
},{"./DOCUMENT_FRAGMENT_NODE":782,"./internal/isNodeType":794,dup:113}],799:[function(b,c,a){arguments[4][305][0].apply(a,arguments)
},{"./DOCUMENT_TYPE_NODE":784,"./internal/isNodeType":794,dup:305}],800:[function(b,c,a){arguments[4][114][0].apply(a,arguments)
},{"./ELEMENT_NODE":785,"./internal/isNodeType":794,dup:114}],801:[function(b,c,a){arguments[4][115][0].apply(a,arguments)
},{dup:115}],802:[function(b,c,a){arguments[4][308][0].apply(a,arguments)},{dup:308}],803:[function(b,c,a){arguments[4][309][0].apply(a,arguments)
},{"./TEXT_NODE":786,"./internal/isNodeType":794,dup:309}],804:[function(b,c,a){arguments[4][117][0].apply(a,arguments)
},{dup:117}],805:[function(b,c,a){arguments[4][58][0].apply(a,arguments)},{dup:58}],806:[function(b,c,a){arguments[4][116][0].apply(a,arguments)
},{"./internal/validate":795,dup:116}],807:[function(b,c,a){arguments[4][313][0].apply(a,arguments)
},{"./internal/validate":795,dup:313}],808:[function(b,c,a){arguments[4][400][0].apply(a,arguments)
},{"./ac-dom-traversal/ancestor":809,"./ac-dom-traversal/ancestors":810,"./ac-dom-traversal/children":811,"./ac-dom-traversal/filterBySelector":812,"./ac-dom-traversal/firstChild":813,"./ac-dom-traversal/lastChild":816,"./ac-dom-traversal/matchesSelector":817,"./ac-dom-traversal/nextSibling":818,"./ac-dom-traversal/nextSiblings":819,"./ac-dom-traversal/previousSibling":820,"./ac-dom-traversal/previousSiblings":821,"./ac-dom-traversal/querySelector":822,"./ac-dom-traversal/querySelectorAll":823,"./ac-dom-traversal/shims/ie":824,"./ac-dom-traversal/siblings":825,dup:400}],809:[function(b,c,a){arguments[4][401][0].apply(a,arguments)
},{"./helpers/validate":815,"./matchesSelector":817,"ac-dom-nodes":789,dup:401}],810:[function(b,c,a){arguments[4][402][0].apply(a,arguments)
},{"./helpers/validate":815,"./matchesSelector":817,"ac-dom-nodes":789,dup:402}],811:[function(b,c,a){arguments[4][403][0].apply(a,arguments)
},{"./filterBySelector":812,"./helpers/validate":815,"ac-dom-nodes":789,dup:403}],812:[function(b,c,a){arguments[4][404][0].apply(a,arguments)
},{"./helpers/validate":815,"./matchesSelector":817,dup:404}],813:[function(b,c,a){arguments[4][405][0].apply(a,arguments)
},{"./children":811,"./helpers/validate":815,dup:405}],814:[function(b,c,a){arguments[4][406][0].apply(a,arguments)
},{dup:406}],815:[function(b,c,a){arguments[4][407][0].apply(a,arguments)},{"ac-dom-nodes":789,dup:407}],816:[function(b,c,a){arguments[4][408][0].apply(a,arguments)
},{"./children":811,"./helpers/validate":815,dup:408}],817:[function(b,c,a){arguments[4][409][0].apply(a,arguments)
},{"./helpers/nativeMatches":814,"./helpers/validate":815,"ac-dom-nodes":789,dup:409}],818:[function(b,c,a){arguments[4][410][0].apply(a,arguments)
},{"./helpers/validate":815,"./matchesSelector":817,"ac-dom-nodes":789,dup:410}],819:[function(b,c,a){arguments[4][411][0].apply(a,arguments)
},{"./helpers/validate":815,"./matchesSelector":817,"ac-dom-nodes":789,dup:411}],820:[function(b,c,a){arguments[4][412][0].apply(a,arguments)
},{"./helpers/validate":815,"./matchesSelector":817,"ac-dom-nodes":789,dup:412}],821:[function(b,c,a){arguments[4][413][0].apply(a,arguments)
},{"./helpers/validate":815,"./matchesSelector":817,"ac-dom-nodes":789,dup:413}],822:[function(b,c,a){arguments[4][414][0].apply(a,arguments)
},{"./helpers/validate":815,dup:414}],823:[function(b,c,a){arguments[4][415][0].apply(a,arguments)
},{"./helpers/validate":815,dup:415}],824:[function(b,c,a){arguments[4][416][0].apply(a,arguments)
},{"../helpers/nativeMatches":814,"../helpers/validate":815,"../vendor/sizzle/sizzle":826,"ac-dom-nodes":789,dup:416}],825:[function(b,c,a){arguments[4][417][0].apply(a,arguments)
},{"./children":811,"./helpers/validate":815,dup:417}],826:[function(b,c,a){arguments[4][418][0].apply(a,arguments)
},{dup:418}],827:[function(b,c,a){arguments[4][419][0].apply(a,arguments)},{"./ac-dom-emitter/DOMEmitter":828,dup:419}],828:[function(b,c,a){arguments[4][420][0].apply(a,arguments)
},{"ac-dom-events":780,"ac-dom-traversal":808,"ac-event-emitter":256,dup:420}],829:[function(b,c,a){arguments[4][421][0].apply(a,arguments)
},{"./ac-shared-instance/SharedInstance":830,dup:421}],830:[function(b,c,a){arguments[4][422][0].apply(a,arguments)
},{dup:422}],831:[function(b,c,a){arguments[4][423][0].apply(a,arguments)},{"./ac-window-delegate/WindowDelegate":834,"./ac-window-delegate/WindowDelegateCustomEvent":835,"./ac-window-delegate/WindowDelegateOptimizer":836,dup:423}],832:[function(b,c,a){arguments[4][424][0].apply(a,arguments)
},{"ac-event-emitter":256,dup:424}],833:[function(b,c,a){arguments[4][425][0].apply(a,arguments)
},{"ac-event-emitter":256,dup:425}],834:[function(b,c,a){arguments[4][426][0].apply(a,arguments)
},{"./CustomEventController":832,"./OptimizerController":833,"./optimizers/optimizers":839,"./queries/queries":848,"ac-dom-emitter":827,"ac-shared-instance":829,dup:426}],835:[function(b,c,a){arguments[4][427][0].apply(a,arguments)
},{"ac-event-emitter":256,dup:427}],836:[function(b,c,a){arguments[4][428][0].apply(a,arguments)
},{"ac-event-emitter":256,dup:428}],837:[function(b,c,a){arguments[4][429][0].apply(a,arguments)
},{"../../WindowDelegateOptimizer":836,"../../queries/queries":848,dup:429}],838:[function(b,c,a){arguments[4][430][0].apply(a,arguments)
},{"../../WindowDelegateOptimizer":836,"../../queries/queries":848,dup:430}],839:[function(b,c,a){arguments[4][431][0].apply(a,arguments)
},{"./events/resize":837,"./events/scroll":838,dup:431}],840:[function(b,c,a){arguments[4][432][0].apply(a,arguments)
},{dup:432}],841:[function(b,c,a){arguments[4][433][0].apply(a,arguments)},{dup:433}],842:[function(b,c,a){arguments[4][434][0].apply(a,arguments)
},{dup:434}],843:[function(b,c,a){arguments[4][435][0].apply(a,arguments)},{dup:435}],844:[function(b,c,a){arguments[4][436][0].apply(a,arguments)
},{dup:436}],845:[function(b,c,a){arguments[4][437][0].apply(a,arguments)},{dup:437}],846:[function(b,c,a){arguments[4][438][0].apply(a,arguments)
},{dup:438}],847:[function(b,c,a){arguments[4][439][0].apply(a,arguments)},{dup:439}],848:[function(b,c,a){arguments[4][440][0].apply(a,arguments)
},{"./methods/clientHeight":840,"./methods/clientWidth":841,"./methods/innerHeight":842,"./methods/innerWidth":843,"./methods/maxScrollX":844,"./methods/maxScrollY":845,"./methods/scrollX":846,"./methods/scrollY":847,dup:440}],849:[function(b,c,a){c.exports={ScrollTimeUpdate:b("./ac-scroll-time-update/ScrollTimeUpdate"),ElementScrollTimeUpdate:b("./ac-scroll-time-update/ElementScrollTimeUpdate")}
},{"./ac-scroll-time-update/ElementScrollTimeUpdate":850,"./ac-scroll-time-update/ScrollTimeUpdate":851}],850:[function(c,g,b){var f=c("./ScrollTimeUpdate"),d=c("ac-window-delegate").WindowDelegate;
var h;var a=function(j,i){i=i||{};this.el=j;this._updateOnResize=false;f.call(this,0,0,i);
this.setOffsets();this._clock.on("update",this._onResizeClockUpdate,this);this._clock.on("draw",this._onResizeClockDraw,this);
d.on("resize orientationchange",this._onResize,this)};h=a.prototype=new f(null);
h.setOffsets=function(){var k=this.el.getBoundingClientRect(),j=d.scrollY(),l=k.top+j,i=k.bottom+j;
if(this.options.startInView){l=l-d.innerHeight()}if(typeof this.options.offsetTop==="function"){l=l+this.options.offsetTop()
}else{if(typeof this.options.offsetTop==="number"){l=l+this.options.offsetTop}}if(typeof this.options.offsetBottom==="function"){i=i-this.options.offsetBottom()
}else{if(typeof this.options.offsetBottom==="number"){i=i-this.options.offsetBottom
}}this.min=l;this.max=i;this._distance=this.max-this.min;return this};h._onResize=function(){this._updateOnResize=true
};h._onResizeClockUpdate=function(){if(!this._updateOnResize){return}this.setOffsets()
};h._onResizeClockDraw=function(){if(!this._updateOnResize){return}this.setCurrentTime();
this._updateOnResize=false};g.exports=a},{"./ScrollTimeUpdate":851,"ac-window-delegate":831}],851:[function(d,b,f){var g,j=d("ac-event-emitter").EventEmitter,a=d("ac-clock"),k=d("ac-window-delegate").WindowDelegate,c=d("ac-value-smoother").ValueSmoother,i=d("ac-dom-emitter").DOMEmitter;
var h=function(n,l,m){if(n===null){return}j.call(this);this.options=m||{};this.min=n;
this.max=l;this._distance=l-n;this._clock=this.options.clock||a;this._emitter=k;
this._lastTime=null;this._timeObj=null;if(this.options.el){this._target=this.options.el;
this._emitter=new i(this.options.el)}this._shouldUpdate=false;this._shouldDraw=false;
this._didInitializeSmoothing=false;this._emitter.on("scroll",this._debounceTimeUpdate,this);
this._clock.on("update",this._onClockUpdate,this);this._clock.on("draw",this._onClockDraw,this);
if(this.options.smooth){this._enableSmoothing(true)}};g=h.prototype=new j(null);
g.setCurrentTime=function(l,m){l=l||this._getCalculatedCurrentTime();if(l===this._lastTime){return
}this._timeObj={time:l,lastTime:this._lastTime};this._triggerUpdate();if(m){this._triggerDraw()
}else{this._shouldDraw=true}this._lastTime=l};g.start=function(){this._clock.start()
};g.stop=function(){this._clock.stop()};g.setSmoothing=function(l){if(typeof l!=="boolean"){return
}if(l){this._enableSmoothing();return}this._disableSmoothing()};g._getCalculatedCurrentTime=function(){var n=k.scrollY(),m=this.min,l=this.max,o=this._distance;
if(this._target){n=this._target.scrollTop}if(n<m){n=m}if(n>l){n=l}return(n-m)/(o)
};g._debounceTimeUpdate=function(){this._shouldUpdate=true};g._triggerUpdate=function(){this.trigger("_update",this._timeObj);
if(!this.options.smooth){this.trigger("update",this._timeObj)}};g._triggerDraw=function(){this.trigger("_draw",this._timeObj);
if(!this.options.smooth){this.trigger("draw",this._timeObj)}};g._onClockUpdate=function(){if(!this._shouldUpdate){return
}this.setCurrentTime();this._shouldUpdate=false};g._onClockDraw=function(){if(!this._shouldDraw){return
}this._triggerDraw();this._shouldDraw=false};g._initializeSmoothing=function(){this.options.smoothingPrecision=this.options.smoothingPrecision||4;
this.options.smoothingPoolSize=this.options.smoothingPoolSize||c.prototype.sampling;
this._smoother=new c(this.options.smoothingPoolSize);this._smoothedValues=this._lastSmoothedValues=this._lastUpdateEvent={time:null,lastTime:null};
this._didUpdateSmootherTrack=false;this._shouldUpdateAndDraw=false;this._didInitializeSmoothing=true
};g._enableSmoothing=function(l){if(!this._didInitializeSmoothing){this._initializeSmoothing()
}if(!this.options.smooth||l){this.on("_update",this._updateSmoothing,this);this._clock.on("update",this._smoothOnUpdate,this);
this._clock.on("draw",this._smoothOnDraw,this);this.options.smooth=true}};g._disableSmoothing=function(){this.off("_update",this._updateSmoothing,this);
this._clock.off("update",this._smoothOnUpdate,this);this._clock.off("draw",this._smoothOnDraw,this);
this.options.smooth=false};g._updateSmoothing=function(l){l.lastTime=l.lastTime||0;
this._lastUpdateEvent=l;this._didUpdateSmootherTrack=true};g._smoothOnUpdate=function(){var l=(this._didUpdateSmootherTrack||this._lastSmoothedValues.time!==this._smoothedValues.time||this._lastSmoothedValues.lastTime!==this._smoothedValues.lastTime);
if(!l){this._shouldUpdateAndDraw=false;return}this._didUpdateSmootherTrack=false;
var n=this._lastUpdateEvent.lastTime,m={};m.lastTime=this._smoothedValues.time;
m.time=this._smoother.smooth(this._lastUpdateEvent.time);if(m.lastTime===null){m.lastTime=parseFloat(n.toFixed(this.options.smoothingPrecision))
}m.time=parseFloat(m.time.toFixed(this.options.smoothingPrecision));m.lastTime=m.lastTime;
this._lastSmoothedValues=this._smoothedValues;this._smoothedValues=m;this._shouldUpdateAndDraw=true;
this.trigger("update",this._smoothedValues)};g._smoothOnDraw=function(l){if(!this._shouldUpdateAndDraw){return
}this.trigger("draw",this._smoothedValues);this._shouldUpdateAndDraw=false};b.exports=h
},{"ac-clock":670,"ac-dom-emitter":776,"ac-event-emitter":256,"ac-value-smoother":778,"ac-window-delegate":831}],852:[function(b,c,a){arguments[4][235][0].apply(a,arguments)
},{"./ac-dom-emitter/DOMEmitter":853,dup:235}],853:[function(b,c,a){arguments[4][599][0].apply(a,arguments)
},{"ac-event-emitter":256,dup:599}],854:[function(b,c,a){a.ScrollView=b("./ac-scrollview/ScrollView")
},{"./ac-scrollview/ScrollView":861}],855:[function(c,d,a){function b(){}b.prototype={on:function(){return this._parent.on.apply(this._parent,arguments)
},off:function(){return this._parent.off.apply(this._parent,arguments)},trigger:function(){return this._parent.trigger.apply(this._parent,arguments)
},once:function(){return this._parent.once.apply(this._parent,arguments)},setEnabled:function(f){this._parent.setEnabled.apply(this._parent,arguments)
},isEnabled:function(){return this._parent.isEnabled.apply(this._parent,arguments)
}};d.exports=b},{}],856:[function(f,g,d){var a=function(j,i){return Math.max(0,Math.min(j,i))
};var h=function(i,j){var k={x:0,y:0};if(i.x<0){k.x=-i.x}else{if(i.x>j.x){k.x=j.x-i.x
}}if(i.y<0){k.y=-i.y}else{if(i.y>j.y){k.y=j.y-i.y}}return k};var c=function(i,j){i.x=a(i.x,j.x);
i.y=a(i.y,j.y);return i};var b=function(j,i,k){var l=h(i,k);if(l.x!==0){i.x=j.x+((i.x-j.x)*0.5)
}if(l.y!==0){i.y=j.y+((i.y-j.y)*0.5)}return i};g.exports={calculateOverscrollAmount:h,constrainValue:a,constrainToScrollBounds:c,halfInputIfOutsideOfScrollBounds:b}
},{}],857:[function(b,c,a){var h=b("./BaseInputDecorator");var f=4;function g(i){this._parent=i;
this._currentAxis=undefined}var d=g.prototype=new h();d.inputStart=function(i,l,j,k){this._currentAxis=false;
this._firstTouch={x:i,y:l};this._parent.inputStart.apply(this._parent,arguments)
};d.inputMove=function(i,l,j,k){if(!this._currentAxis){if(Math.abs(i-this._firstTouch.x)>f){this._currentAxis="x"
}else{if(Math.abs(l-this._firstTouch.y)>f){this._currentAxis="y"}}}if(this._currentAxis==="x"){l=this._firstTouch.y
}else{if(this._currentAxis==="y"){i=this._firstTouch.x}}this._parent.inputMove.apply(this._parent,arguments)
};d.inputEnd=function(i,j){this._parent.inputEnd.apply(this._parent,arguments)};
c.exports=g},{"./BaseInputDecorator":855}],858:[function(c,b,f){var k=c("./utilities").assign;
var j=c("./Constraints");var i=c("./utilities").fastFivePointPrecision;var h=(1000/60);
var d={friction:{x:0.95,y:0.95},outOfBounds:{deceleration:0.05,acceleration:0.1}};
function a(l){this.options=k({},d,l||{});if(l&&l.friction){var m=l.friction;if(typeof m!=="object"||!("x" in m)||!("y" in m)){throw new TypeError("InertiaCalculator expects custom friction to be an object with numeric x/y properties.")
}}if(l&&l.outOfBounds){var n=l.outOfBounds;if(typeof n!=="object"||!("acceleration" in n)||!("deceleration" in n)){throw new TypeError("InertiaCalculator expects custom outOfBounds coefficients to be an object with numeric acceleration/deceleration properties.")
}}}var g=a.prototype;g.calculateInertiaPositions=function(l,o,m,q,p){var s=[];if(!p){p=this.options.friction
}o={x:o.x*h,y:o.y*h};if(m.x===0){o.x=0}if(m.y===0){o.y=0}while(Math.abs(o.x)>0.01||Math.abs(o.y)>0.01){if(s.length>5000){console.warn("potential loop detected.");
return s}l.x=l.x+o.x;l.y=l.y+o.y;o.x=o.x*p.x;o.y=o.y*p.y;l.x=i(l.x);l.y=i(l.y);
var r=j.calculateOverscrollAmount(l,m);if(r.x!==0){if(r.x*o.x<=0){o.x+=r.x*this.options.outOfBounds.deceleration
}else{o.x=r.x*this.options.outOfBounds.acceleration}}if(r.y!==0){if(r.y*o.y<=0){o.y+=r.y*this.options.outOfBounds.deceleration
}else{o.y=r.y*this.options.outOfBounds.acceleration}}if(q){j.constrainToScrollBounds(l,m)
}s.push({x:l.x,y:l.y,velocity:{x:i(o.x/h),y:i(o.y/h)}})}if(s.length>1){var n=s[s.length-1];
n.x=Math.round(n.x);n.y=Math.round(n.y);j.constrainToScrollBounds(n,m)}return s
};g.calculateInitialVelocity=function(o,q){var p={};var m=1-this.options.friction.x;
var r=1-this.options.friction.y;var n=q.x-o.x;p.x=i((m*n)/h);var l=q.y-o.y;p.y=i((r*l)/h);
return p};g.calculateFrictionToStopAtPoint=function(p,n,o){var q={};var m=Math.abs(o.x-p.x);
q.x=i(1-((Math.abs(n.x)*h)/m));var l=Math.abs(o.y-p.y);q.y=i(1-((Math.abs(n.y)*h)/l));
q.y=Math.min(1,q.y);q.x=Math.min(1,Math.max(0,q.x));q.y=Math.min(1,Math.max(0,q.y));
if(isNaN(q.x)){q.x=0}if(isNaN(q.y)){q.y=0}return q};b.exports=a},{"./Constraints":856,"./utilities":868}],859:[function(c,d,b){var g=c("ac-event-emitter").EventEmitter;
var h=c("ac-clock").Clock;function a(i){this._clock=new h();this._isPlaying=false;
this._scroll=i;this._currentFrameCnt=0;this._accumulatedTime=0;this._currentAnimationDuration=0;
this._clock.on("draw",this._draw,this)}var f=a.prototype=new g();f.stop=function(){if(this._isPlaying){this._clock.stop();
this._isPlaying=false;this.trigger("end")}this._frames=[]};f.isPlaying=function(){return this._isPlaying
};f.getCurrentFrame=function(){return this._currentFrame};f.getNextFrame=function(j){this._accumulatedTime+=j.delta;
var i=Math.round(this._accumulatedTime/(1000/60));this._currentFrame=this._frames[i];
return this._currentFrame};f._draw=function(j){var i=this.getNextFrame(j);if(!this._isPlaying||(this._accumulatedTime>this._currentAnimationDuration)){this._isPlaying=false;
this.trigger("end");this._clock.stop();return}this._scroll.setPosition(i)};f.play=function(i){if(this._isPlaying){return
}this._frames=i;this._isPlaying=true;this._accumulatedTime=0;this._currentFrameCnt=this._frames.length-1;
this._currentFrame=this._frames[0];this._currentAnimationDuration=(this._currentFrameCnt/60)*1000;
this._clock.start()};d.exports=a},{"ac-clock":670,"ac-event-emitter":256}],860:[function(b,c,a){var i=b("./BaseInputDecorator");
var h=45;var g=-h;function d(j,k){this._parent=j;this._axis=k;this._inputs=[];this._startTouchMove=null;
this._shouldPreventDefault=null}var f=d.prototype=new i();f._calculateTouchAngles=function(){var q={x:0,y:0};
var l=this._inputs[this._inputs.length-1];var n=this._inputs[0];var j=l.x-n.x;var p=l.y-n.y;
var o=Math.sqrt(j*j+p*p);if(o===0){return false}var m=Math.asin(p/o);var k=Math.acos(j/o);
q.x=m*(180/Math.PI);q.y=k*(180/Math.PI);q.y-=90;return q};f.inputStart=function(j,m,k,l){this._inputs=[{x:j,y:m}];
this._startTouchMove={x:j,y:m,timeStamp:k,e:l};this._checkToPreventDefault=true;
this._parent.inputStart.apply(this._parent,arguments)};f._angleTest=function(j){return(j<=h&&j>=g)?true:false
};f._preventDefault=function(j,m,k,l){l.preventDefault();this._shouldPreventDefault=true;
this._parent.inputMove.apply(this._parent,arguments)};f.inputMove=function(j,n,k,l){this._inputs[1]={x:j,y:n};
var m=this._calculateTouchAngles();if((this._axis==="y"&&this._angleTest(m.y))||(this._axis==="x"&&this._angleTest(m.x))||(this._axis===true&&(this._angleTest(m.x)||this._angleTest(m.y)))){if(this._shouldPreventDefault!==false){this._preventDefault.apply(this,arguments)
}}else{if(this._shouldPreventDefault===true){this._preventDefault.apply(this,arguments)
}else{this._shouldPreventDefault=false}}};f.inputEnd=function(j,k){this._shouldPreventDefault=true;
this._parent.inputEnd.apply(this._parent,arguments)};c.exports=d},{"./BaseInputDecorator":855}],861:[function(h,a,s){var l=h("./utilities").assign;
var d=h("ac-event-emitter").EventEmitter;var p=h("./InertiaCalculator");var b=h("./input/MouseWheel");
var g=h("./input/MouseDrag");var m=h("./input/Touch");var n=h("./input/Input");
var q=h("./InputPreventDefault");var o=h("./DirectionalLock");var t=h("./model/Scroll");
var c=h("./Transition");var f=h("./Constraints");var j=h("./InertiaPlayer");var i={alwaysBounceHorizontal:false,alwaysBounceVertical:false,bounces:true,directionalLockEnabled:false,mouseDrag:true,mouseWheel:true,preventDefault:true,scrollingEnabled:true,touch:true};
function r(v,u){if(!v||!v instanceof Element){throw new Error("Element required as first argument for constructor.")
}if(!u||u===null||!u.width||!u.height||!u.contentSize){throw new Error("Scroll View requires a second argument, an object, specifying width, height, and contentSize.")
}this.options=l({},i,u);l(this,{_element:v,_width:this.options.width,_height:this.options.height,_contentSize:this.options.contentSize,_isDecelerating:false});
this._scroll=new t();this._inputNormalize=new n(this._scroll);this._inputNormalize.setEnabled(this.options.scrollingEnabled);
if(this.options.preventDefault){this._inputNormalize=new q(this._inputNormalize,this.options.preventDefault)
}if(this.options.directionalLockEnabled){this._inputNormalize=new o(this._inputNormalize)
}this._inputNormalize.on("input_start",this.inputStart,this);this._inputNormalize.on("input_move",this.inputMove,this);
this._inputNormalize.on("input_end",this.inputEnd,this);if(this.options.touch===true){this._touch=new m(this._inputNormalize,v)
}if(this.options.mouseWheel===true){this._mouseWheel=new b(this._inputNormalize,v)
}if(this.options.mouseDrag===true){this._mouseDrag=new g(this._inputNormalize,v)
}this._inertiaCalculator=new p(this.options);this._inertiaPlayer=new j(this._scroll);
this._inertiaPlayer.on("end",function(){this._isDecelerating=false;this.trigger("didEndDecelerating")
},this);this._scroll.propagateTo(this)}var k=r.prototype=new d();k.isDecelerating=function(){return this._isDecelerating
};k._animateToPosition=function(u){var v=this;var w=this.getPosition();this._transition=new c({draw:function(x){v.setPosition({y:w.y+(u.y-w.y)*x,x:w.x+(u.x-w.x)*x})
}});this._transition.play()};k._handleConstraints=function(v){var y=this.getContentSize();
var u=this.getHeight();var x=this.getWidth();var w=this.getScrollDistance();v=f.halfInputIfOutsideOfScrollBounds(this.getPosition(),v,w);
if(!this.options.alwaysBounceHorizontal&&y.height>u&&y.width<=x){v.x=0}if(!this.options.alwaysBounceVertical&&y.width>x&&y.height<=u){v.y=0
}if(this.options.bounces===false){return f.constrainToScrollBounds(v,w)}return v
};k.setScrollingEnabled=function(u){this._inputNormalize.setEnabled(u)};k.isScrollingEnabled=function(){return this._inputNormalize.isEnabled()
};k.getPosition=function(){return this._scroll.getPosition()};k.setPosition=function(u,v){if(v===undefined){this._scroll.setPosition(u);
if(this._inertiaPlayer.isPlaying()){var x=this.getPosition();var w=this._inertiaPlayer.getCurrentFrame();
var y=this._inertiaCalculator.calculateInertiaPositions(x,w.velocity,this.getScrollDistance(),!this.options.bounces);
this._inertiaPlayer.stop();this._inertiaPlayer.play(y)}}else{if(v===false){this._inertiaPlayer.stop();
this._scroll.setPosition(u)}else{this._inertiaPlayer.stop();this._animateToPosition(u)
}}};k.inertialScrollTo=function(u,v){if(this._inertiaPlayer.isPlaying()){this._inertiaPlayer.stop()
}var x=this.getPosition();var z=f.calculateOverscrollAmount(x,this.getScrollDistance());
if(z.x!==0){v.x=0.1}if(z.y!==0){v.y=0.1}var w=this._inertiaCalculator.calculateFrictionToStopAtPoint(this.getPosition(),v,u);
var y=this._inertiaCalculator.calculateInertiaPositions(x,v,this.getScrollDistance(),!this.options.bounces,w);
this._inertiaPlayer.play(y)};k.setHeight=function(u){this._height=u};k.setWidth=function(u){this._width=u
};k.getHeight=function(){return this._height};k.getWidth=function(){return this._width
};k.setContentSize=function(u){this._contentSize.height=u.height;this._contentSize.width=u.width;
return this};k.getContentSize=function(){return this._contentSize};k.getScrollYDistance=function(){var u=this._contentSize.height-this._height;
if(u<0){u=0}return u};k.getScrollXDistance=function(){var u=this._contentSize.width-this._width;
if(u<0){u=0}return u};k.getScrollDistance=function(){return{x:this.getScrollXDistance(),y:this.getScrollYDistance()}
};k.inputStart=function(u){this._tracking=false;this._isDecelerating=false;this._inertiaPlayer.stop();
this.trigger("inputStart",u)};k.inputMove=function(u){if(!this._tracking){this._tracking=true;
this.trigger("willBeginTracking")}if(u&&u.originalEvent&&u.originalEvent.type==="mousewheel"){u=f.constrainToScrollBounds(u,this.getScrollDistance())
}u=this._handleConstraints(u);this._scroll.setPosition({x:u.x,y:u.y,timeStamp:u.timeStamp,originalEvent:u.originalEvent})
};k.inputEnd=function(w){var z=w.velocity;var A=this.getPosition();var v=this.getScrollDistance();
var B=f.calculateOverscrollAmount(A,v);var x=this._inertiaCalculator.calculateInitialVelocity(B,{x:0,y:0});
if(this._contentSize.width===this._width&&!this.options.alwaysBounceHorizontal){z.x=0
}else{if(this._contentSize.height===this._height&&!this.options.alwaysBounceVertical){z.y=0
}}if(z.x===0&&B.x!==0){z.x=x.x}if(z.y===0&&B.y!==0){z.y=x.y}if(z.x===0&&z.y===0){this.trigger("didEndTracking",false);
this.trigger("willEndTracking",{velocity:z,targetPosition:A,originalEvent:w.originalEvent})
}else{var u=this._inertiaCalculator.calculateInertiaPositions(A,z,this.getScrollDistance(),!this.options.bounces);
var y=u[u.length-1];this.trigger("willEndTracking",{velocity:z,targetPosition:y,originalEvent:w.originalEvent});
this.trigger("didEndTracking",true);this._isDecelerating=true;this.trigger("willBeginDecelerating");
this._inertiaPlayer.play(u)}};a.exports=r},{"./Constraints":856,"./DirectionalLock":857,"./InertiaCalculator":858,"./InertiaPlayer":859,"./InputPreventDefault":860,"./Transition":862,"./input/Input":863,"./input/MouseDrag":864,"./input/MouseWheel":865,"./input/Touch":866,"./model/Scroll":867,"./utilities":868,"ac-event-emitter":256}],862:[function(c,b,f){var j=c("./utilities").assign;
var d={duration:350};var i=function(l,k,n,m){l/=m/2;if(l<1){return n/2*l*l+k}l--;
return -n/2*(l*(l-2)-1)+k};var a=function(l,k,n,m){l/=m;return -n*l*(l-2)+k};function h(k){j(this,d,k);
if(!k.draw){throw new Error("no draw function specified")}}var g=h.prototype;g.update=function(m){if(!this.startTime){this.startTime=m
}var l=(m-this.startTime)/this.duration;var k=i(l,0,1,1);if(l<1){this.draw(k);this._raf=window.requestAnimationFrame(this.update.bind(this))
}else{this.draw(1)}};g.play=function(){window.requestAnimationFrame(this.update.bind(this))
};g.stop=function(){window.cancelAnimationFrame(this._raf)};b.exports=h},{"./utilities":868}],863:[function(b,c,a){var f=b("ac-event-emitter").EventEmitter;
var h=b("../utilities").fastFivePointPrecision;function g(i){this._startingInputPosition=null;
this._lastInputPosition=null;this._inputPositions=[];this._scroll=i;this._enabled=true
}var d=g.prototype=new f();d._addPosition=function(i){this._inputPositions.push(i);
var j=Date.now();if(this._inputPositions.length>=3&&(j-this._inputPositions[0].timeStamp>100)){this._inputPositions.shift()
}};d._pruneOldPositions=function(){var i=Date.now();this._inputPositions=this._inputPositions.filter(function(j){if(i-j.timeStamp<100){return j
}})};d._calculateVelocity=function(){var k={x:0,y:0};this._pruneOldPositions();
if(this._inputPositions.length<2){return k}var l=this._inputPositions[0];var i=this._inputPositions[this._inputPositions.length-1];
var j=(i.timeStamp-l.timeStamp);k.x=-(i.x-l.x)/j;k.y=-(i.y-l.y)/j;k.x=h(k.x);k.y=h(k.y);
return k};d.setEnabled=function(i){this._enabled=i};d.isEnabled=function(){return this._enabled
};d.inputStart=function(i,m,k,j){if(!this._enabled){return}var l={x:i,y:m,timeStamp:k};
this._addPosition(l);this._startingInputPosition=l;this.trigger("input_start",{timeStamp:k,originalEvent:j})
};d.inputMove=function(i,n,l,j){if(!this._enabled){return}var m={x:i,y:n,timeStamp:l};
this._addPosition(m);this._lastInputPosition=m;var k=this.getScrollValues();this.trigger("input_move",{x:k.x,y:k.y,timeStamp:l,originalEvent:j})
};d.inputEnd=function(j,i){if(!this._enabled){return}this.trigger("input_end",{lastInputPosition:this._lastInputPosition,timeStamp:j,originalEvent:i,velocity:this._calculateVelocity()});
this._positions=[];this._lastInputPosition=null;this._startingInputPosition=null
};d.getScrollValues=function(){var j=this._inputPositions[this._inputPositions.length-2];
var i=this._scroll.getPosition();return{x:(j.x-this._lastInputPosition.x)+i.x,y:(j.y-this._lastInputPosition.y)+i.y}
};c.exports=g},{"../utilities":868,"ac-event-emitter":256}],864:[function(b,c,a){var f=b("ac-dom-emitter").DOMEmitter;
function d(g,h){this._input=g;this._element=h;this._domEmitter=new f(h);h.style.webkitUserSelect="none";
this.bindDOMEvents()}d.prototype={bindDOMEvents:function(){var h=this._input;var j=this._element;
var i=this;var k=function(l){h.inputMove(l.pageX,l.pageY,l.timeStamp,l)};var g=function(l){if(l.type==="mouseout"&&j.contains(l.relatedTarget)){return
}i._domEmitter.off("mousemove",k);i._domEmitter.off("mouseup",g);i._domEmitter.off("mouseout",g);
h.inputEnd(l.timeStamp,l)};i._domEmitter.on("mousedown",function(l){if(l.target.tagName.match(/input|textarea|select/i)){return
}h.inputStart(l.pageX,l.pageY,l.timeStamp,l);i._domEmitter.on("mousemove",k);i._domEmitter.on("mouseup",g);
i._domEmitter.on("mouseout",g)})}};c.exports=d},{"ac-dom-emitter":852}],865:[function(d,f,c){var g=d("ac-dom-emitter").DOMEmitter;
var b=d("../utilities").assign;function a(h,i){this._inputController=h;this._element=i;
this._domEmitter=new g(i);this._scrollTop=0;this._scrollLeft=0;this._timeout=null;
this._hasStarted=false;this._boundMouseWheelComplete=this.mouseWheelComplete.bind(this);
this._lastEvent=null;this._velocities=[];this.bindDOMEvents()}a.prototype={mouseWheelComplete:function(){this._scrollTop=0;
this._scrollLeft=0;this._hasStarted=false;this._inputController.inputEnd(new Date().getTime(),this._lastEvent);
this._lastEvent=null},onMouseWheel:function(k){var i;var h;var j;if(this._hasStarted===false){this._inputController.inputStart(this._scrollLeft,this._scrollTop,k.timeStamp,k);
this._hasStarted=true}i=this._scrollTop+k.wheelDeltaY;h=this._scrollLeft+k.wheelDeltaX;
this._lastEvent=b({},k);this._scrollTop=i;this._scrollLeft=h;this._inputController.inputMove(this._scrollLeft,this._scrollTop,k.timeStamp,k);
window.clearTimeout(this._timeout);this._timeout=window.setTimeout(this._boundMouseWheelComplete,100)
},bindDOMEvents:function(){this._domEmitter.on("mousewheel",this.onMouseWheel.bind(this))
}};f.exports=a},{"../utilities":868,"ac-dom-emitter":852}],866:[function(c,d,a){var f=c("ac-dom-emitter").DOMEmitter;
function b(g,h){this._input=g;this._element=h;this._domEmitter=new f(h);this.bindDOMEvents()
}b.prototype={bindDOMEvents:function(){var g=this._input;var h=this._element;this._domEmitter.on("touchstart",function(i){if(i.touches&&i.touches[0]&&i.touches[0].target&&i.touches[0].target.tagName.match(/input|textarea|select/i)){return
}g.inputStart(i.pageX,i.pageY,i.timeStamp,i)});this._domEmitter.on("touchmove",function(i){g.inputMove(i.pageX,i.pageY,i.timeStamp,i)
});this._domEmitter.on("touchend touchcancel",function(i){g.inputEnd(i.timeStamp,i)
})}};d.exports=b},{"ac-dom-emitter":852}],867:[function(b,c,a){var f=b("ac-event-emitter").EventEmitter;
function g(){this.x=0;this.y=0}var d=g.prototype=new f();d.setPosition=function(h){if(h.x===this.x&&h.y===this.y){return
}this.x=h.x;this.y=h.y;this.trigger("scroll",{x:this.x,y:this.y,originalEvent:h.originalEvent})
};d.getPosition=function(){return{x:this.x,y:this.y}};c.exports=g},{"ac-event-emitter":256}],868:[function(d,f,c){var b=function(i,h){var j=Math.pow(10,h);
return ~~(i*j)/j};var g=function(h){return b(h,5)};var a=function(n,m){var h=function(i){if(typeof i!=="object"||i===null||i===undefined){throw new TypeError("assign: target and sources must be objects")
}return i};var o=function(i){n[i]=k[i]};n=h(n);var k;for(var j=1,l=arguments.length;
j<l;j++){k=h(arguments[j]);Object.keys(k).forEach(o)}return n};f.exports={assign:a,fastFivePointPrecision:g,fastPrecision:b}
},{}],869:[function(b,c,a){c.exports={BreakpointsDelegate:b("./ac-breakpoints-delegate/BreakpointsDelegate")}
},{"./ac-breakpoints-delegate/BreakpointsDelegate":870}],870:[function(f,b,i){var d=f("ac-shared-instance").SharedInstance,g=f("ac-object"),p=f("ac-window-delegate").WindowDelegate,c=f("ac-window-delegate").WindowDelegateCustomEvent,o=f("ac-event-emitter").EventEmitter;
var l="ac-breakpoints-delegate:BreakpointsDelegate",a="1.0.1";var m="breakpoint",n="resize orientationchange";
var h={small:{width:0,maxDeviceWidth:768},medium:{width:736},large:{width:1025,oldIE:true},xlarge:{width:1442}};
function k(q){this.breakpoints=g.clone(h);this._customEvent=new c(m,this._onBreakpointListenerAdded.bind(this),this._onBreakpointListenerRemoved.bind(this));
this.initialize()}var j=k.prototype;j.initialize=function(){this._breakpoint=null;
this._lastBreakpoint=null;this._handleOldIE();this._handleDevices();this._breakpointOrder=this._setBreakpointOrder();
if(!this._isOldIE){this._handleResize()}};j.getCustomEvent=function(){return this._customEvent
};j.getBreakpoint=function(){if(!this._customEvent.active){this._handleResize()
}return this._breakpoint};j._handleResize=function(){var u=p.innerWidth(),v;var t,s,r,q=this._breakpointOrder.length;
for(t=0;t<q;t++){s=this._breakpointOrder[t];r=this.breakpoints[s];if(r.width>u){break
}}if(t>0){t=t-1}v=this.breakpoints[this._breakpointOrder[t]];if(!this._breakpoint){this._breakpoint=v;
return}if(v.name===this._breakpoint.name){return}this._lastBreakpoint=this._breakpoint;
this._breakpoint=v;p.trigger(m,{incoming:this._breakpoint,outgoing:this._lastBreakpoint})
};j._setBreakpointOrder=function(){var r=[],q=[],s;for(s in this.breakpoints){if(this.breakpoints.hasOwnProperty(s)){this.breakpoints[s].name=s;
r.push(this.breakpoints[s].width)}}r.sort(function(u,t){return u-t});r.forEach(function(u){var t;
for(t in this.breakpoints){if(this.breakpoints.hasOwnProperty(t)){if(this.breakpoints[t].width===u){q.push(t)
}}}}.bind(this));return q};j._handleOldIE=function(){var q=document.documentElement,r="oldie";
if(q.className.indexOf("no-"+r)>-1||q.className.indexOf(r)===-1){return}this._breakpoint=this.breakpoints.large;
this._isOldIE=true;this._replaceBreakpoints(function(s){return s.oldIE===true})
};j._handleDevices=function(){this._replaceBreakpoints(function(q){if(typeof q.maxDeviceWidth!=="number"){return true
}if(window.screen&&window.screen.width<=q.maxDeviceWidth){return true}return false
})};j._replaceBreakpoints=function(t){var r,s={},q;for(r in this.breakpoints){if(this.breakpoints.hasOwnProperty(r)){q=this.breakpoints[r];
if(t(q)){s[r]=g.clone(this.breakpoints[r])}}}this.breakpoints=s};j._onBreakpointListenerAdded=function(){p.on(n,this._handleResize,this)
};j._onBreakpointListenerRemoved=function(){p.off(n,this._handleResize,this)};b.exports=d.share(l,a,k)
},{"ac-event-emitter":256,"ac-object":766,"ac-shared-instance":871,"ac-window-delegate":922}],871:[function(b,c,a){arguments[4][421][0].apply(a,arguments)
},{"./ac-shared-instance/SharedInstance":872,dup:421}],872:[function(b,c,a){arguments[4][422][0].apply(a,arguments)
},{dup:422}],873:[function(b,c,a){arguments[4][399][0].apply(a,arguments)},{dup:399}],874:[function(b,c,a){arguments[4][105][0].apply(a,arguments)
},{dup:105}],875:[function(b,c,a){arguments[4][106][0].apply(a,arguments)},{dup:106}],876:[function(b,c,a){arguments[4][107][0].apply(a,arguments)
},{dup:107}],877:[function(b,c,a){arguments[4][290][0].apply(a,arguments)},{dup:290}],878:[function(b,c,a){arguments[4][108][0].apply(a,arguments)
},{dup:108}],879:[function(b,c,a){arguments[4][109][0].apply(a,arguments)},{dup:109}],880:[function(b,c,a){arguments[4][293][0].apply(a,arguments)
},{dup:293}],881:[function(b,c,a){arguments[4][110][0].apply(a,arguments)},{"./ELEMENT_NODE":878,"./internal/isNodeType":887,"ac-polyfills/Array/prototype.filter":897,"ac-polyfills/Array/prototype.slice":898,dup:110}],882:[function(b,c,a){arguments[4][295][0].apply(a,arguments)
},{"./COMMENT_NODE":874,"./DOCUMENT_FRAGMENT_NODE":875,"./DOCUMENT_NODE":876,"./DOCUMENT_TYPE_NODE":877,"./ELEMENT_NODE":878,"./TEXT_NODE":879,"./createDocumentFragment":880,"./filterByNodeType":881,"./insertAfter":883,"./insertBefore":884,"./insertFirstChild":885,"./insertLastChild":886,"./isComment":889,"./isDocument":890,"./isDocumentFragment":891,"./isDocumentType":892,"./isElement":893,"./isNode":894,"./isNodeList":895,"./isTextNode":896,"./remove":899,"./replace":900,dup:295}],883:[function(b,c,a){arguments[4][296][0].apply(a,arguments)
},{"./internal/validate":888,dup:296}],884:[function(b,c,a){arguments[4][297][0].apply(a,arguments)
},{"./internal/validate":888,dup:297}],885:[function(b,c,a){arguments[4][298][0].apply(a,arguments)
},{"./internal/validate":888,dup:298}],886:[function(b,c,a){arguments[4][299][0].apply(a,arguments)
},{"./internal/validate":888,dup:299}],887:[function(b,c,a){arguments[4][111][0].apply(a,arguments)
},{"../isNode":894,dup:111}],888:[function(b,c,a){arguments[4][112][0].apply(a,arguments)
},{"../COMMENT_NODE":874,"../DOCUMENT_FRAGMENT_NODE":875,"../ELEMENT_NODE":878,"../TEXT_NODE":879,"./isNodeType":887,dup:112}],889:[function(b,c,a){arguments[4][302][0].apply(a,arguments)
},{"./COMMENT_NODE":874,"./internal/isNodeType":887,dup:302}],890:[function(b,c,a){arguments[4][303][0].apply(a,arguments)
},{"./DOCUMENT_NODE":876,"./internal/isNodeType":887,dup:303}],891:[function(b,c,a){arguments[4][113][0].apply(a,arguments)
},{"./DOCUMENT_FRAGMENT_NODE":875,"./internal/isNodeType":887,dup:113}],892:[function(b,c,a){arguments[4][305][0].apply(a,arguments)
},{"./DOCUMENT_TYPE_NODE":877,"./internal/isNodeType":887,dup:305}],893:[function(b,c,a){arguments[4][114][0].apply(a,arguments)
},{"./ELEMENT_NODE":878,"./internal/isNodeType":887,dup:114}],894:[function(b,c,a){arguments[4][115][0].apply(a,arguments)
},{dup:115}],895:[function(b,c,a){arguments[4][308][0].apply(a,arguments)},{dup:308}],896:[function(b,c,a){arguments[4][309][0].apply(a,arguments)
},{"./TEXT_NODE":879,"./internal/isNodeType":887,dup:309}],897:[function(b,c,a){arguments[4][117][0].apply(a,arguments)
},{dup:117}],898:[function(b,c,a){arguments[4][58][0].apply(a,arguments)},{dup:58}],899:[function(b,c,a){arguments[4][116][0].apply(a,arguments)
},{"./internal/validate":888,dup:116}],900:[function(b,c,a){arguments[4][313][0].apply(a,arguments)
},{"./internal/validate":888,dup:313}],901:[function(b,c,a){arguments[4][400][0].apply(a,arguments)
},{"./ac-dom-traversal/ancestor":902,"./ac-dom-traversal/ancestors":903,"./ac-dom-traversal/children":904,"./ac-dom-traversal/filterBySelector":905,"./ac-dom-traversal/firstChild":906,"./ac-dom-traversal/lastChild":909,"./ac-dom-traversal/matchesSelector":910,"./ac-dom-traversal/nextSibling":911,"./ac-dom-traversal/nextSiblings":912,"./ac-dom-traversal/previousSibling":913,"./ac-dom-traversal/previousSiblings":914,"./ac-dom-traversal/querySelector":915,"./ac-dom-traversal/querySelectorAll":916,"./ac-dom-traversal/shims/ie":917,"./ac-dom-traversal/siblings":918,dup:400}],902:[function(b,c,a){arguments[4][401][0].apply(a,arguments)
},{"./helpers/validate":908,"./matchesSelector":910,"ac-dom-nodes":882,dup:401}],903:[function(b,c,a){arguments[4][402][0].apply(a,arguments)
},{"./helpers/validate":908,"./matchesSelector":910,"ac-dom-nodes":882,dup:402}],904:[function(b,c,a){arguments[4][403][0].apply(a,arguments)
},{"./filterBySelector":905,"./helpers/validate":908,"ac-dom-nodes":882,dup:403}],905:[function(b,c,a){arguments[4][404][0].apply(a,arguments)
},{"./helpers/validate":908,"./matchesSelector":910,dup:404}],906:[function(b,c,a){arguments[4][405][0].apply(a,arguments)
},{"./children":904,"./helpers/validate":908,dup:405}],907:[function(b,c,a){arguments[4][406][0].apply(a,arguments)
},{dup:406}],908:[function(b,c,a){arguments[4][407][0].apply(a,arguments)},{"ac-dom-nodes":882,dup:407}],909:[function(b,c,a){arguments[4][408][0].apply(a,arguments)
},{"./children":904,"./helpers/validate":908,dup:408}],910:[function(b,c,a){arguments[4][409][0].apply(a,arguments)
},{"./helpers/nativeMatches":907,"./helpers/validate":908,"ac-dom-nodes":882,dup:409}],911:[function(b,c,a){arguments[4][410][0].apply(a,arguments)
},{"./helpers/validate":908,"./matchesSelector":910,"ac-dom-nodes":882,dup:410}],912:[function(b,c,a){arguments[4][411][0].apply(a,arguments)
},{"./helpers/validate":908,"./matchesSelector":910,"ac-dom-nodes":882,dup:411}],913:[function(b,c,a){arguments[4][412][0].apply(a,arguments)
},{"./helpers/validate":908,"./matchesSelector":910,"ac-dom-nodes":882,dup:412}],914:[function(b,c,a){arguments[4][413][0].apply(a,arguments)
},{"./helpers/validate":908,"./matchesSelector":910,"ac-dom-nodes":882,dup:413}],915:[function(b,c,a){arguments[4][414][0].apply(a,arguments)
},{"./helpers/validate":908,dup:414}],916:[function(b,c,a){arguments[4][415][0].apply(a,arguments)
},{"./helpers/validate":908,dup:415}],917:[function(b,c,a){arguments[4][416][0].apply(a,arguments)
},{"../helpers/nativeMatches":907,"../helpers/validate":908,"../vendor/sizzle/sizzle":919,"ac-dom-nodes":882,dup:416}],918:[function(b,c,a){arguments[4][417][0].apply(a,arguments)
},{"./children":904,"./helpers/validate":908,dup:417}],919:[function(b,c,a){arguments[4][418][0].apply(a,arguments)
},{dup:418}],920:[function(b,c,a){arguments[4][419][0].apply(a,arguments)},{"./ac-dom-emitter/DOMEmitter":921,dup:419}],921:[function(b,c,a){arguments[4][420][0].apply(a,arguments)
},{"ac-dom-events":873,"ac-dom-traversal":901,"ac-event-emitter":256,dup:420}],922:[function(b,c,a){arguments[4][423][0].apply(a,arguments)
},{"./ac-window-delegate/WindowDelegate":925,"./ac-window-delegate/WindowDelegateCustomEvent":926,"./ac-window-delegate/WindowDelegateOptimizer":927,dup:423}],923:[function(b,c,a){arguments[4][424][0].apply(a,arguments)
},{"ac-event-emitter":256,dup:424}],924:[function(b,c,a){arguments[4][425][0].apply(a,arguments)
},{"ac-event-emitter":256,dup:425}],925:[function(b,c,a){arguments[4][426][0].apply(a,arguments)
},{"./CustomEventController":923,"./OptimizerController":924,"./optimizers/optimizers":930,"./queries/queries":939,"ac-dom-emitter":920,"ac-shared-instance":871,dup:426}],926:[function(b,c,a){arguments[4][427][0].apply(a,arguments)
},{"ac-event-emitter":256,dup:427}],927:[function(b,c,a){arguments[4][428][0].apply(a,arguments)
},{"ac-event-emitter":256,dup:428}],928:[function(b,c,a){arguments[4][429][0].apply(a,arguments)
},{"../../WindowDelegateOptimizer":927,"../../queries/queries":939,dup:429}],929:[function(b,c,a){arguments[4][430][0].apply(a,arguments)
},{"../../WindowDelegateOptimizer":927,"../../queries/queries":939,dup:430}],930:[function(b,c,a){arguments[4][431][0].apply(a,arguments)
},{"./events/resize":928,"./events/scroll":929,dup:431}],931:[function(b,c,a){arguments[4][432][0].apply(a,arguments)
},{dup:432}],932:[function(b,c,a){arguments[4][433][0].apply(a,arguments)},{dup:433}],933:[function(b,c,a){arguments[4][434][0].apply(a,arguments)
},{dup:434}],934:[function(b,c,a){arguments[4][435][0].apply(a,arguments)},{dup:435}],935:[function(b,c,a){arguments[4][436][0].apply(a,arguments)
},{dup:436}],936:[function(b,c,a){arguments[4][437][0].apply(a,arguments)},{dup:437}],937:[function(b,c,a){arguments[4][438][0].apply(a,arguments)
},{dup:438}],938:[function(b,c,a){arguments[4][439][0].apply(a,arguments)},{dup:439}],939:[function(b,c,a){arguments[4][440][0].apply(a,arguments)
},{"./methods/clientHeight":931,"./methods/clientWidth":932,"./methods/innerHeight":933,"./methods/innerWidth":934,"./methods/maxScrollX":935,"./methods/maxScrollY":936,"./methods/scrollX":937,"./methods/scrollY":938,dup:440}],940:[function(b,c,a){c.exports={Viewport:b("./ac-viewport/Viewport")}
},{"./ac-viewport/Viewport":941}],941:[function(d,b,g){var c=d("ac-shared-instance").SharedInstance,k=d("ac-window-delegate").WindowDelegate,i=d("ac-breakpoints-delegate").BreakpointsDelegate;
var j="ac-viewport:Viewport",a="1.0.0";var h;function f(m){var n,l=k;for(n in l){if(l.hasOwnProperty(n)){this[n]=l[n]
}else{h[n]=l[n]}}this.addCustomEvent(i.getCustomEvent())}h=f.prototype;h.getBreakpoint=function(){return i.getBreakpoint()
};b.exports=c.share(j,a,f)},{"ac-breakpoints-delegate":869,"ac-shared-instance":871,"ac-window-delegate":922}],942:[function(b,c,a){c.exports.createAmbient=b("./factories/createAmbient");
c.exports.createBasicPlayer=b("./factories/createBasicPlayer");c.exports.createClickToPlay=b("./factories/createClickToPlay");
c.exports.createGrabber=b("./factories/createGrabber");c.exports.createScrubOnScroll=b("./factories/createScrubOnScroll")
},{"./factories/createAmbient":961,"./factories/createBasicPlayer":962,"./factories/createClickToPlay":963,"./factories/createGrabber":964,"./factories/createScrubOnScroll":965}],943:[function(c,f,b){var a=c("ac-object");
var d=c("../utils/destroy");var g;var i={};function h(l,k,j){this.options=a.defaults(i,j||{});
this.mediaObject=l;if(k&&this.View){this.view=new this.View(k,this.options)}this._setupMediaObjectListeners()
}g=h.prototype={};g.View=c("./Controller/View");g.destroy=function(){this._unbindMediaObjectListeners();
d(this,false)};g._setupMediaObjectListeners=function(){this._getMediaObjectListeners().forEach(function(j){this.mediaObject[j.method](j.event,j.callback,this)
},this)};g._getMediaObjectListeners=function(){return[{method:"on",event:"play",callback:this._onPlay},{method:"on",event:"ended",callback:this._onEnded},{method:"on",event:"pause",callback:this._onPause},{method:"on",event:"stop",callback:this._onStop},{method:"on",event:"timeupdate",callback:this._onTimeupdate},{method:"once",event:"loadstart",callback:this._onLoadstart},{method:"once",event:"loaded",callback:this._onLoad},{method:"once",event:"ready",callback:this._onReady},{method:"once",event:"degrade",callback:this.destroy}]
};g._onPlay=function(){};g._onEnded=function(){};g._onPause=function(){};g._onStop=function(){};
g._onTimeupdate=function(){};g._onLoadstart=function(){};g._onLoad=function(){};
g._onReady=function(){};g._unbindMediaObjectListeners=function(){this._getMediaObjectListeners().forEach(function(j){if(this.mediaObject&&typeof this.mediaObject.off==="function"){this.mediaObject.off(j.event,j.callback)
}},this)};f.exports=h},{"../utils/destroy":966,"./Controller/View":948,"ac-object":766}],944:[function(c,f,b){var a=c("ac-object");
var h=c("../Controller");var g;var i={behavior:"play",stopableWhilePlaying:true,disableWhilePlaying:false};
function d(l,k,j){h.call(this,l,k,a.defaults(i,j||{}));this.view.on("click",this._onTriggerClicked,this);
if(this.options.behavior==="stop"||this.options.behavior==="pause"){this.view.disable()
}}g=d.prototype=a.create(h.prototype);g.View=c("./View/Trigger");g._onTriggerClicked=function(j){if(this.options.behavior==="play"){if(this.view.active&&this.options.stopableWhilePlaying){this.mediaObject.stop()
}else{if(this.mediaObject.currentTime()===this.mediaObject.duration){this.mediaObject.reset()
}this.mediaObject.play()}}else{if(this.options.behavior==="stop"){this.mediaObject.stop()
}else{if(this.options.behavior==="pause"){this.mediaObject.pause()}}}};g._reset=function(){this.view.deactivate();
this.view.enable()};g._setupMediaObjectListeners=function(){this.mediaObject.on("play",this._onPlay,this);
this.mediaObject.on("pause",this._onPause,this);this.mediaObject.on("ended",this._onEnded,this);
this.mediaObject.on("stop",this._onStop,this);this.mediaObject.once("degrade",this.destroy,this)
};g._unbindMediaObjectListeners=function(){this.mediaObject.off("play",this._onPlay);
this.mediaObject.off("pause",this._onPause);this.mediaObject.off("ended",this._onEnded);
this.mediaObject.off("stop",this._onStop);this.view.off("click",this._onTriggerClicked)
};g._onPlay=function(){if(this.options.behavior==="play"){this.view.activate()}else{if(this.options.behavior==="pause"){this.view.deactivate()
}}if(this.options.disableWhilePlaying){this.view.disable()}else{if(this.options.behavior==="stop"||this.options.behavior==="pause"){this.view.enable()
}}};g._onPause=function(){if(this.options.behavior==="play"){this.view.removeReplayState();
this.view.deactivate();this.view.enable()}else{if(this.options.behavior==="pause"){this.view.activate()
}}};g._onStop=function(){this._onEnded()};g._onEnded=function(){if(this.options.behavior==="play"){this.view.addReplayState();
this.view.enable()}else{if(this.options.behavior==="stop"||this.options.behavior==="pause"){this.view.disable()
}else{this.view.enable()}}this.view.deactivate()};f.exports=d},{"../Controller":943,"./View/Trigger":950,"ac-object":766}],945:[function(c,a,h){var f=c("ac-object");
var j=c("ac-base").Element;var g=c("ac-scrollview").ScrollView;var k=c("../Controller");
var b=c("ac-clock");var i;var d={continuous:true,speed:0.25,direction:1,mouseWheel:false,mouseDrag:true,friction:0.88,bounces:false,clock:b};
function l(o,n,m){k.call(this,o,n,f.defaults(d,m||{}));this._value=null;this._setupScrollView();
this._trackScrollView();this._setupClock()}i=l.prototype=f.create(k.prototype);
i.View=c("./View/Grabbable");i._setupMediaObjectListeners=function(){};i._setupScrollView=function(){var m=j.getBoundingBox(this.view.element);
this._totalDistance=m.width*(1/this.options.speed);this._scrollview=new g(this.view.element,{contentSize:{width:this._totalDistance*2,height:m.height},friction:{x:this.options.friction,y:0.95},width:this._totalDistance,height:this._totalDistance,mouseWheel:this.options.mouseWheel,mouseDrag:this.options.mouseDrag,preventDefault:true,bounces:!this.options.continuous&&this.options.bounces});
this._scrollview.setPosition({x:this._totalDistance,y:0})};i._trackScrollView=function(){this._scrollview.on("willBeginTracking",function(m){this.view.setGrabbing(true)
},this);this._scrollview.on("didEndTracking",function(m){this.view.setGrabbing(false)
},this);this._scrollview.on("scroll",this._onScroll,this)};i._setupClock=function(){if(!this.options.clock.isRunning()){this.options.clock.start()
}this.options.clock.on("draw",this._draw,this)};i._onScroll=function(m){if(m.x>=this._totalDistance||m.x<=0){if(this.options.continuous){this._scrollview.setPosition({x:(this._totalDistance/2),y:0})
}else{}}this._value=(m.x%(this._totalDistance/2))/(this._totalDistance/2);this._value=(this.options.direction<0)?1-this._value:this._value
};i._draw=function(m){if(this._value!==null){this.mediaObject.goToDurationPercent(this._value)
}this._value=null};a.exports=l},{"../Controller":943,"./View/Grabbable":949,"ac-base":3,"ac-clock":670,"ac-object":766,"ac-scrollview":854}],946:[function(c,b,h){var j=c("ac-base").Element;
var f=c("ac-object");var a=c("ac-scroll-time-update").ElementScrollTimeUpdate;var k=c("../Controller");
var l=c("ac-viewport").Viewport;var i;var m=false;var d={reversed:false,smooth:true,startInView:false,offsetTop:false,offsetBottom:false};
function g(o,n){this.tracker=null;k.call(this,o,null,f.defaults(d,n||{}))}i=g.prototype=f.create(k.prototype);
i.View=null;i.start=function(){this.tracker.on("draw",this._draw,this);this.tracker.start()
};i.stop=function(){this.tracker.off("draw",this._draw);this.tracker.stop()};i.setSmoothing=function(n){this.options.smooth=!!n;
if(this.tracker){this.tracker.setSmoothing(this.options.smooth)}};i.setOffsets=function(o,n){if(this.tracker){o=this._parseOffset(o);
n=this._parseOffset(n);if(o){this.tracker.options.offsetTop=o}if(n){this.tracker.options.offsetBottom=n
}this.tracker.setOffsets();this.tracker.setCurrentTime(null,true)}};i._parseOffset=function(p){var o;
var n;if(typeof p==="number"||typeof p==="function"){return p}else{if(typeof p==="string"){if(/\%$/.test(p)){p=(parseFloat(p,10)/100);
n=function(){if(m){l.off("resize orientationchange",n)}o=j.getBoundingBox(this).height;
return o}.bind(this.mediaObject.view.container);l.on("resize orientationchange",n);
n();return function(){return p*o}}else{if(/vh$/.test(p)){p=(parseFloat(p,10)/100);
return function(){return p*l.innerHeight()}}}}}return false};i._setupMediaObjectListeners=function(){if(this.mediaObject.ready){this._onReady()
}else{this.mediaObject.once("ready",this._onReady,this)}};i._unbindMediaObjectListeners=function(){this.mediaObject.off("ready",this._onReady);
m=true};i._onReady=function(){var n=f.clone(this.options);n.startInView=!n.startInView;
n.offsetTop=this._parseOffset(n.offsetTop);n.offsetBottom=this._parseOffset(n.offsetBottom);
this.tracker=new a(this.mediaObject.container,n);this.start()};i._draw=function(n){if(this.options.reversed){this.mediaObject.goToDurationPercent(1-n.time)
}else{this.mediaObject.goToDurationPercent(n.time)}};b.exports=g},{"../Controller":943,"ac-base":3,"ac-object":766,"ac-scroll-time-update":849,"ac-viewport":940}],947:[function(c,b,g){var f=c("ac-object");
var a=c("ac-element-engagement");var i=c("../Controller");var h;var d={loopInterval:false,reversed:false,timeToEngage:500};
function j(l,k){i.call(this,l,null,f.defaults(d,k||{}))}h=j.prototype={};h.destroy=function(){a.stop(this.tracker);
if(this.tracker&&typeof this.tracker.off==="function"){this.tracker.off()}i.prototype.destroy.call(this)
};h._setupMediaObjectListeners=function(){this.mediaObject.once("degrade",this.destroy,this);
if(this.mediaObject.ready){this._onReady()}else{this.mediaObject.once("ready",this._onReady,this)
}};h._onReady=function(){this.tracker=a.addElement(this.mediaObject.container);
if(!a.tracking){a.start()}this.tracker.on("engaged",this._onEngaged,this)};h._onEngaged=function(){if(typeof this.options.loopInterval==="number"){this._startLoop()
}else{this.tracker.off("engaged",this._onEngaged,this)}if(this.options.reversed){this.mediaObject.setTime(this.mediaObject.duration);
this.mediaObject.setPlaybackRate(-1)}this.mediaObject.play();this.tracker.once("exitview",this._onExitView,this)
};h._onExitView=function(){this.mediaObject.stop()};h._startLoop=function(){this.mediaObject.once("stop pause",this._cancelLoop,this);
this.mediaObject.on("ended",this._startLoopInterval,this)};h._cancelLoop=function(){if(this._loopIntervalTimeout){window.clearTimeout(this._loopIntervalTimeout)
}this.mediaObject.off("ended",this._startLoopInterval,this)};h._startLoopInterval=function(){if(this.options.loopInterval>0){this._loopIntervalTimeout=window.setTimeout(function(){this.mediaObject.reset();
this.mediaObject.play();this._loopIntervalTimeout=null}.bind(this),this.options.loopInterval)
}else{this.mediaObject.reset();this.mediaObject.play()}};h._unbindMediaObjectListeners=function(){if(this.mediaObject&&typeof this.mediaObject.off==="function"){this.mediaObject.off("exitview",this._onExitView);
this.mediaObject.off("ended",this._startLoopInterval);this.mediaObject.off("stop pause",this._cancelLoop);
this.mediaObject.off("ready",this._onReady)}};b.exports=j},{"../Controller":943,"ac-element-engagement":763,"ac-object":766}],948:[function(c,b,g){var i=c("ac-base").Element;
var f=c("ac-object");var j=c("../../utils/destroy");var k=c("ac-event-emitter").EventEmitter;
var h;var d={stateNameActive:"renderplayer-active",stateNameDisabled:"renderplayer-disabled",stateNameReplay:"renderplayer-replay"};
function a(m,l){this.options=f.defaults(d,l||{});this.element=i.getElementById(m);
if(this.element===null){throw"RenderPlayer.Controller.View: Incorrect view element reference."
}}h=a.prototype=new k();h.addReplayState=function(){i.addClassName(this.element,this.options.stateNameReplay)
};h.removeReplayState=function(){i.removeClassName(this.element,this.options.stateNameReplay)
};h.activate=function(){this.active=true;i.addClassName(this.element,this.options.stateNameActive)
};h.deactivate=function(){this.active=false;i.removeClassName(this.element,this.options.stateNameActive)
};h.disable=function(){this.disabled=true;i.addClassName(this.element,this.options.stateNameDisabled)
};h.enable=function(){this.disabled=false;i.removeClassName(this.element,this.options.stateNameDisabled)
};h.destroy=function(){j(this)};b.exports=a},{"../../utils/destroy":966,"ac-base":3,"ac-event-emitter":256,"ac-object":766}],949:[function(b,a,f){var h=b("ac-base").Element;
var d=b("ac-object");var i=b("../View");var c={};function j(l,k){i.call(this,l,d.defaults(c,k||{}));
h.addClassName(this.element,"renderplayer-grabbable")}var g=j.prototype=d.create(i.prototype);
g.setGrabbing=function(k){if(k){h.addClassName(document.body,"renderplayer-grabbing")
}else{h.removeClassName(document.body,"renderplayer-grabbing")}};a.exports=j},{"../View":948,"ac-base":3,"ac-object":766}],950:[function(c,b,g){var i=c("ac-base").Element;
var k=c("ac-base").Function;var a=c("ac-base").Event;var f=c("ac-object");var j=c("../View");
var d={};function l(n,m){j.call(this,n,f.defaults(d,m||{}));this._boundOnClick=k.bindAsEventListener(this._onClick,this);
i.addEventListener(this.element,"click",this._boundOnClick)}var h=l.prototype=f.create(j.prototype);
h._onClick=function(m){a.stop(m);if(!this._disabled){this.trigger("click",m)}};
b.exports=l},{"../View":948,"ac-base":3,"ac-object":766}],951:[function(b,f,a){var d=b("../utils/destroy");
var g;function c(h,j,i){this.mediaObject=h;this.enhanceFunc=j;this.options=i||{};
this.didEnhance=false;this.mediaObject.once("enhance",this._onEnhance,this);this.mediaObject.once("degrade",this.destroy,this);
this._loadedCheck()}g=c.prototype={};g._enhance=function(){if(this.didEnhance||(this.options&&this.options.autoEnhance===false)){return
}if(this.mediaObject&&this.mediaObject.view&&!this.mediaObject.view.enhanced){this.mediaObject.enhance();
this.didEnhance=true}};g.destroy=function(){if(this.mediaObject&&typeof this.mediaObject.off==="function"){this.mediaObject.off("enhance",this._onEnhance);
this.mediaObject.off("ready",this._onReady);this.mediaObject.off("destroy",this.destroy)
}d(this,false)};g._loadedCheck=function(){if(this.mediaObject.ready){this._onReady()
}else{this.mediaObject.load();this.mediaObject.once("ready",this._onReady,this)
}};g._onEnhance=function(){this.mediaObject.off("ready",this._onReady,this);this.enhanceFunc();
this.destroy()};g._onReady=function(){this._enhance()};f.exports=c},{"../utils/destroy":966}],952:[function(d,c,g){var f=d("ac-object");
var j=d("../../utils/destroy");var a=d("ac-element-engagement");var i=d("../Enhancer");
var h;function b(k,m,l){i.apply(this,arguments)}h=b.prototype=f.create(i.prototype);
h._inViewCheck=function(){if(!this.didEnhance&&this.mediaObject&&this.mediaObject.view&&!this.mediaObject.view.enhanced){this.tracker=a.addElement(this.mediaObject.container);
if(!a.tracking){a.start()}a.refreshElementState(this.tracker);if(!this.tracker.inView){this._enhance()
}else{this.tracker.once("exitview",this._enhance,this)}}};h.destroy=function(){if(this.tracker&&typeof this.tracker.off==="function"){a.stop(this.tracker);
this.tracker.off("exitview",this._enhance)}i.prototype.destroy.call(this)};h._onReady=function(){this._inViewCheck()
};c.exports=b},{"../../utils/destroy":966,"../Enhancer":951,"ac-element-engagement":763,"ac-object":766}],953:[function(c,d,a){var f;
function b(){this._active=null}f=b.prototype;f.add=function(h){h._originalPlayMethod=h.play;
h.play=this.play.bind(this,h)};f.play=function(h){if(h){this._play(h)}};f._play=function(h){if(this._active!==h){this.stop()
}this._active=h;if(!this._active._originalPlayMethod){this.add(this._active)}this._active._originalPlayMethod.call(this._active);
this._active.once("pause",this.stop,this);this._active.once("stop",this.stop,this);
this._active.once("ended",this.stop,this)};f.stop=function(h){if(this._active){this._active.off("pause",this.stop);
this._active.off("stop",this.stop);this._active.off("ended",this.stop);if(h===undefined){this._active.stop()
}}this._active=null};var g=new b();g.PlayController=b;d.exports=g},{}],954:[function(b,a,d){var c=b("ac-object");
var j=b("ac-deferredqueue").DeferredQueue;var i=b("../PlayController").PlayController;
var g;function h(){i.call(this);this.deferredQueue=new j({autoplay:true,asynchronous:true})
}g=h.prototype=c.create(i.prototype);g._play=function(k){k.once("play",this._onPlay,this);
this.deferredQueue.add(k._originalPlayMethod.bind(k))};g._onPlay=function(k){this._active=k;
this._active.once("pause",this.stop,this);this._active.once("stop",this.stop,this);
this._active.once("ended",this.stop,this)};g.stop=function(k){i.prototype.stop.call(this,k);
this.deferredQueue.didFinish()};var f=new h();f.QueuedPlayController=h;a.exports=f
},{"../PlayController":953,"ac-deferredqueue":674,"ac-object":766}],955:[function(c,d,a){d.exports=function b(f){if(f!==null){f.container.classList.add("renderplayer-canplay");
return true}return false}},{}],956:[function(b,c,a){var d=b("ac-clock").ThrottledClock;
c.exports=function(f){f=isNaN(f)?30:f;return new d(f)}},{"ac-clock":670}],957:[function(b,d,a){d.exports=function c(h,f){var g=document.createElement("a");
if(h){g.innerHTML=h}g.setAttribute("href","#");if(f&&f.parentNode){f.parentNode.replaceChild(g,f);
g.appendChild(f)}return g}},{}],958:[function(b,c,a){var d=b("ac-viewport").Viewport;
c.exports=function(j,f){f=f||{};var k=typeof f.callback==="function"?f.callback:null;
var h=Array.isArray(f.degradeOnBreakpointBlacklist)?f.degradeOnBreakpointBlacklist:null;
function g(){d.off("breakpoint",i)}function i(l){if(h&&h.indexOf(l.incoming)>-1){return
}else{j.degrade();if(k){k()}}}d.on("breakpoint",i);j.once("destroy",g)}},{"ac-viewport":940}],959:[function(d,f,c){var b=d("ac-object");
var g;var h={pause:true,stop:true,ended:true};f.exports=function a(m,l,j){j=b.defaults(h,j||{});
var k=function(){l();l=function(){}};for(var i in j){if(j[i]){m.once(i,k)}}}},{"ac-object":766}],960:[function(b,c,a){c.exports=function d(f){f.once("loadstart",function(){f.container.classList.add("loading")
});f.once("loaded",function(){f.container.classList.remove("loading")})}},{}],961:[function(d,c,i){var l=d("ac-base").Element;
var g=d("ac-object");var m=d("./behaviors/canPlay");var j=d("./../ac-renderplayer/Controller/UserEngaged");
var p=d("./createScrubOnScroll");var o=d("./behaviors/doAfterPlay");var h=d("../ac-renderplayer/Enhancer");
var b=d("../ac-renderplayer/Enhancer/OutOfViewEnhancer");var k=d("../ac-renderplayer/PlayController/QueuedPlayController");
var a=d("./behaviors/degradeOnBreakpointChange");var f={reversed:false,startInView:false,tiedToScrollAfterPlayed:false,loopInterval:false,degradeAfterPlayed:true};
c.exports=function n(u,s,v){var t={};var r;var q;s=g.defaults(f,s||{});if(!m(u)){return null
}k.add(u);if(s.startInView){new h(u,function(){r=new j(u,{reversed:s.reversed,loopInterval:s.loopInterval})
},v)}else{new b(u,function(){r=new j(u,{reversed:s.reversed,loopInterval:s.loopInterval})
},v)}t.controllers=[r];if(typeof s.loopInterval!=="number"){if(s.tiedToScrollAfterPlayed){o(u,function(){var w;
var y=l.cumulativeOffset(u.container);var x={};if(s.startInView){x.startInView=true;
x.reversed=!s.reversed;x.offsetTop=y.top*-1}w=p(u,x);t.controllers.push(w)},{ended:s.startInView})
}else{if(s.degradeAfterPlayed){o(u,function(){u.degrade.call(u)})}}}if(s.degradeOnBreakpointChange){q={degradeOnBreakpointBlacklist:s.degradeOnBreakpointBlacklist};
a(u,q)}return t}},{"../ac-renderplayer/Enhancer":951,"../ac-renderplayer/Enhancer/OutOfViewEnhancer":952,"../ac-renderplayer/PlayController/QueuedPlayController":954,"./../ac-renderplayer/Controller/UserEngaged":947,"./behaviors/canPlay":955,"./behaviors/degradeOnBreakpointChange":958,"./behaviors/doAfterPlay":959,"./createScrubOnScroll":965,"ac-base":3,"ac-object":766}],962:[function(c,b,h){var i=c("ac-base").Element;
var j=c("./behaviors/canPlay");var f=c("../ac-renderplayer/Controller");var g=c("../ac-renderplayer/Enhancer");
var a=c("./behaviors/degradeOnBreakpointChange");b.exports=function d(p,n){n=n||{};
var o={};var l;var k;if(!j(p)){return null}var m=function(){var q=new f(p);o.controllers=[q]
};new g(p,m,n);if(n.degradeOnBreakpointChange){k={degradeOnBreakpointBlacklist:n.degradeOnBreakpointBlacklist};
a(p,k)}return o}},{"../ac-renderplayer/Controller":943,"../ac-renderplayer/Enhancer":951,"./behaviors/canPlay":955,"./behaviors/degradeOnBreakpointChange":958,"ac-base":3}],963:[function(g,f,k){var m=g("ac-base").Element;
var i=g("ac-object");var n=g("./behaviors/canPlay");var l=g("../ac-renderplayer/Controller/ClickToPlay");
var c=g("./behaviors/createTrigger");var b=g("../ac-renderplayer/PlayController");
var p=g("./behaviors/spinner");var d=g("./behaviors/degradeOnBreakpointChange");
var h={trigger:null};var j=function(r,u){var q={};var s=m.isElement(r)?r:c("",u.container);
var t=s.href.replace(/.*#/,"");if(t==="play"||t==="stop"||t==="pause"){q.behavior=t
}else{if(t==="replay"){q.behavior="play";q.stopableWhilePlaying=false;q.disableWhilePlaying=true
}}return new l(u,s,q)};var a=function(s,q){if(typeof s==="string"){s=m.selectAll(s)
}s=[].concat(s);var r=s.map(function(t){return j(t,q)});return r};f.exports=function o(t,r){var s={};
var q;r=i.defaults(h,r||{});if(!n(t)){return null}b.add(t);p(t);s.controllers=a(r.trigger,t);
if(r.degradeOnBreakpointChange){q={degradeOnBreakpointBlacklist:r.degradeOnBreakpointBlacklist};
d(t,q)}t.enhance();return s}},{"../ac-renderplayer/Controller/ClickToPlay":944,"../ac-renderplayer/PlayController":953,"./behaviors/canPlay":955,"./behaviors/createTrigger":957,"./behaviors/degradeOnBreakpointChange":958,"./behaviors/spinner":960,"ac-base":3,"ac-object":766}],964:[function(c,b,i){var g=c("ac-object");
var j=c("./behaviors/canPlay");var d=c("./behaviors/clock30fps");var k=c("../ac-renderplayer/Controller/Grabber");
var h=c("../ac-renderplayer/Enhancer");var l=c("./behaviors/spinner");var a=c("./behaviors/degradeOnBreakpointChange");
var f={clock:d()};b.exports=function m(q,o){var p={};var n;o=g.defaults(f,o||{});
if(!j(q)){return null}l(q);new h(q,function(){var r=new k(q,q.container,o);p.controllers=[r]
});if(o.degradeOnBreakpointChange){n={degradeOnBreakpointBlacklist:o.degradeOnBreakpointBlacklist};
a(q,n)}return p}},{"../ac-renderplayer/Controller/Grabber":945,"../ac-renderplayer/Enhancer":951,"./behaviors/canPlay":955,"./behaviors/clock30fps":956,"./behaviors/degradeOnBreakpointChange":958,"./behaviors/spinner":960,"ac-object":766}],965:[function(d,c,j){var h=d("ac-object");
var k=d("./behaviors/canPlay");var f=d("./behaviors/clock30fps");var n=d("./../ac-renderplayer/Controller/ScrubOnScroll");
var i=d("../ac-renderplayer/Enhancer");var l=d("../utils/getAttribute");var b=d("../ac-renderplayer/Enhancer/OutOfViewEnhancer");
var a=d("./behaviors/degradeOnBreakpointChange");var g={clock:f(),enhanceInView:false};
c.exports=function m(s,q,t){var r={};var o;q=h.defaults(g,q||{});q.offsetTop=q.offsetTop||l(s.container,"data-offsetTop",true);
q.offsetBottom=q.offsetBottom||l(s.container,"data-offsetBottom",true);if(!k(s)){return null
}var p=function(){var u=new n(s,q);r.setOffsets=function(w,v){u.setOffsets(w,v)
};r.setSmoothing=function(v){u.setSmoothing(v)};r.controllers=[u]};if(q.startInView||q.enhanceInView){new i(s,p,t)
}else{new b(s,p,t)}if(q.degradeOnBreakpointChange){o={degradeOnBreakpointBlacklist:q.degradeOnBreakpointBlacklist};
a(s,o)}return r}},{"../ac-renderplayer/Enhancer":951,"../ac-renderplayer/Enhancer/OutOfViewEnhancer":952,"../utils/getAttribute":967,"./../ac-renderplayer/Controller/ScrubOnScroll":946,"./behaviors/canPlay":955,"./behaviors/clock30fps":956,"./behaviors/degradeOnBreakpointChange":958,"ac-object":766}],966:[function(b,c,a){arguments[4][589][0].apply(a,arguments)
},{dup:589}],967:[function(c,d,a){d.exports=function b(h,g,f){var i=h.getAttribute(g)||null;
if(i){if(i==="true"){i=true}else{if(i==="false"){i=false}else{if(f){i=parseFloat(i,10)
}}}}return i}},{}],968:[function(c,d,b){var h=d.exports={};var a=[];var i=false;
function g(){if(i){return}i=true;var l;var j=a.length;while(j){l=a;a=[];var k=-1;
while(++k<j){l[k]()}j=a.length}i=false}h.nextTick=function(j){a.push(j);if(!i){setTimeout(g,0)
}};h.title="browser";h.browser=true;h.env={};h.argv=[];h.version="";h.versions={};
function f(){}h.on=f;h.addListener=f;h.once=f;h.off=f;h.removeListener=f;h.removeAllListeners=f;
h.emit=f;h.binding=function(j){throw new Error("process.binding is not supported")
};h.cwd=function(){return"/"};h.chdir=function(j){throw new Error("process.chdir is not supported")
};h.umask=function(){return 0}},{}],969:[function(f,c,h){var m=f("./RenderPlayerFactory/generateMediaObject");
var l=f("./RenderPlayerFactory/renderConfigs");var i=f("./RenderPlayerFactory/ReplayRender");
var b=f("ac-dom-traversal/querySelectorAll");var g=f("ac-classlist");var d=!(/\?A8E4D41E3E051CA502E82E36124536CD$/.test(window.location.href));
var j="data-renderplayer";var a;var o=function(r){var p=r.getAttribute(j);var A=r.getAttribute(j+"-locale")||"us";
var s=l[p];var v;var t;var B=null;var w=true;var y,q,u,x;if(s){if(s.replayable){u=s.replayable||false
}if(typeof s.factory!=="function"){throw"RenderPlayerFactory: No factory method assigned to render `"+p+"`"
}if(!s.priority){w=false}if(s.playerOptions){v=s.playerOptions||{}}if(s.mediaObjectOptions){t=s.mediaObjectOptions||{}
}if(s.size){x=s.size.replace("_2x","")}for(var z in s.staticBreakpoints){if(s.staticBreakpoints[z]===x){return
}}y=m(r,A,p,s.type,s.size,s.priority,!!s.keyframes,!!s.loop,t,w);B=s.factory(y,v)
}else{throw"RenderPlayerFactory: No config found for render `"+p+"`"}return{container:r,replayable:u,player:B,mediaObject:y,size:x}
};function k(p){g.remove(p.container,"mediaObject-playing")}c.exports={init:function n(){if(d!==true){return
}var r=b("["+j+"]",document);var p;a=r.map(o);p=a.length;for(var q=0;q<p;q++){if(a[q]){if(a[q].mediaObject){a[q].mediaObject.on("stop",k,a[q]);
if(a[q].replayable){new i(a[q])}}}}return a}}},{"./RenderPlayerFactory/ReplayRender":970,"./RenderPlayerFactory/generateMediaObject":971,"./RenderPlayerFactory/renderConfigs":972,"ac-classlist":57,"ac-dom-traversal/querySelectorAll":123}],970:[function(d,f,b){var c=d("ac-classlist");
var h=d("ac-dom-events/addEventListener");var a=function(i){this.render=i;this.triggerAttribute="data-renderplayer-trigger";
this.triggerId=i.container.getAttribute(this.triggerAttribute);this.replayBtn=document.getElementById(this.triggerId);
this.init()};var g=a.prototype;g.init=function(){this.replayerMediaObj=this.render.mediaObject;
var i=this;h(this.replayBtn,"click",function(j){if(c.contains(this.replayBtn,"active")){j.preventDefault();
j.stopPropagation();i.replay(i)}}.bind(this));this.replayerMediaObj.on("ended",this.activate,this);
this.replayerMediaObj.on("degrade",this.degrade,this);this.replayerMediaObj.on("stop",this.activate,this)
};g.activate=function(){c.remove(this.replayBtn,"playing");c.add(this.replayBtn,"active");
c.add(this.render.container,"replayEnded")};g.degrade=function(){c.remove(this.replayBtn,"playing");
c.remove(this.replayBtn,"active");c.add(this.replayBtn,"degraded")};g.replay=function(i){i.replayerMediaObj.reset();
i.replayerMediaObj.play();c.remove(i.replayBtn,"active");c.remove(i.render.container,"replayEnded");
c.add(i.replayBtn,"playing")};f.exports=a},{"ac-classlist":57,"ac-dom-events/addEventListener":62}],971:[function(d,g,c){var h=d("ac-media-object");
var b=d("ac-object");var f="jpg";g.exports=function a(j,s,i,q,v,r,n,o,u,l){var t=h.cname("/105/media/"+s+"/watchos-2-preview/2015/c60ca33d_d6df_46df_86fd_0dee4b507f3b/"+i+"/"+v+"/");
var p={basePath:t+q+"/",filename:q,fileFormat:((q==="flow")?"jpg":"mp4"),loop:!!o};
var k={type:q,queueLoading:l,loadPriority:r};u=b.defaults(k,u||{});if(n){if(q==="h264"){p.posterframeSrc=t+"h264/h264_startframe."+f;
p.endstateSrc=t+"h264/h264_endframe."+f}else{p.posterframeSrc=t+"flow/flow_startframe."+f;
p.endstateSrc=t+"flow/flow_endframe."+f}}var m=h.create(j,p,u);return m}},{"ac-media-object":642,"ac-object":662}],972:[function(c,b,g){var d=c("../experienceReport");
var f=c("ac-renderplayer");var i=(d.ambient.experienceObject.platform==="tablet");
var j=(d.ambient.experienceObject.platform==="handheld");var h=j&&window.screen.width<375;
var a=d.ambient_hero.experience;if(h||(j&&window.innerWidth>=736)){a="static"}b.exports={"watch-os-preview/technology-hero":{factory:f.createAmbient,type:a,size:d.sizes.experience,priority:2,keyframes:false,mediaObjectOptions:{frameRate:30},playerOptions:{degradeOnBreakpointBlacklist:["xlarge"],degradeOnBreakpointChange:true,degradeAfterPlayed:true,startInView:true}},"watch-os-preview/timelapse-hongkong":{factory:f.createClickToPlay,type:d.click_to_play.experience,size:d.sizes.experience,keyframes:false,mediaObjectOptions:{frameRate:30},playerOptions:{trigger:".timelapse-hongkong-trigger",degradeOnBreakpointBlacklist:["xlarge"],degradeOnBreakpointChange:true,degradeAfterPlayed:false}},"watch-os-preview/timelapse-london":{factory:f.createClickToPlay,type:d.click_to_play.experience,size:d.sizes.experience,keyframes:false,mediaObjectOptions:{frameRate:30},playerOptions:{trigger:".timelapse-london-trigger",degradeOnBreakpointBlacklist:["xlarge"],degradeOnBreakpointChange:true,degradeAfterPlayed:false}},"watch-os-preview/timelapse-macklake":{factory:f.createClickToPlay,type:d.click_to_play.experience,size:d.sizes.experience,keyframes:false,mediaObjectOptions:{frameRate:30},playerOptions:{trigger:".timelapse-macklake-trigger",degradeOnBreakpointBlacklist:["xlarge"],degradeOnBreakpointChange:true,degradeAfterPlayed:false}},"watch-os-preview/timelapse-newyork":{factory:f.createClickToPlay,type:d.click_to_play.experience,size:d.sizes.experience,keyframes:false,mediaObjectOptions:{frameRate:30},playerOptions:{trigger:".timelapse-newyork-trigger",degradeOnBreakpointBlacklist:["xlarge"],degradeOnBreakpointChange:true,degradeAfterPlayed:false}},"watch-os-preview/timelapse-shanghai":{factory:f.createClickToPlay,type:d.click_to_play.experience,size:d.sizes.experience,keyframes:false,mediaObjectOptions:{frameRate:30},playerOptions:{trigger:".timelapse-shanghai-trigger",degradeOnBreakpointBlacklist:["xlarge"],degradeOnBreakpointChange:true,degradeAfterPlayed:false}},"watch-os-preview/timetravel":{factory:f.createAmbient,type:d.ambient.experience,size:d.sizes.experience,priority:2,keyframes:true,replayable:true,mediaObjectOptions:{frameRate:30},playerOptions:{degradeOnBreakpointBlacklist:["xlarge"],degradeOnBreakpointChange:true,degradeAfterPlayed:false}},"watch-os-preview/email":{factory:f.createAmbient,type:d.ambient.experience,size:d.sizes.experience,priority:2,keyframes:true,replayable:true,mediaObjectOptions:{frameRate:30},playerOptions:{degradeOnBreakpointBlacklist:["xlarge"],degradeOnBreakpointChange:true,degradeAfterPlayed:false}},"watch-os-preview/friends":{factory:f.createAmbient,type:d.ambient.experience,size:d.sizes.experience,priority:2,keyframes:true,replayable:true,mediaObjectOptions:{frameRate:30},playerOptions:{degradeOnBreakpointBlacklist:["xlarge"],degradeOnBreakpointChange:true,degradeAfterPlayed:false}},"watch-os-preview/sketch":{factory:f.createAmbient,type:d.ambient.experience,size:d.sizes.experience,priority:2,keyframes:true,replayable:true,mediaObjectOptions:{frameRate:30},playerOptions:{degradeOnBreakpointBlacklist:["xlarge"],degradeOnBreakpointChange:true,degradeAfterPlayed:false}}}
},{"../experienceReport":973,"ac-renderplayer":942}],973:[function(b,c,a){(function(){var f=b("ac-experience-reporter");
var d=b("../../../../build/asset-type-matrix.json");function g(){var h={};Object.keys(d).forEach(function(i){h[i]=f.newExperience(d[i])
});return h}c.exports=g()}())},{"../../../../build/asset-type-matrix.json":1,"ac-experience-reporter":265}],974:[function(h,d,j){var a=h("ac-dom-traversal");
var i=h("ac-classlist");var f=h("../_shared/RenderPlayerFactory");var b=h("ac-element-engagement").ElementEngagement;
var k=h("ac-gallery").FadeGallery;var g=h("ac-gallery").SlideGallery;var l=h("ac-dom-styles").setStyle;
var m=h("ac-eclipse").Clip;var c=new b();var n=(function(){return{initialize:function(){f.init();
var v=document.getElementById("complications-gallery");var x=document.getElementById("complications-gallery-element");
var u=a.querySelector(".slide-mask",v);var r=a.querySelector(".swapview",v);var A=a.querySelectorAll("#complications-gallery-element .gallery-content");
g.create({triggerSelector:".complications-gallery-trigger",id:"complications-gallery",el:x,mask:u,slideEl:r,model:A,easing:"ease",pointer:{mouse:true,touch:true}});
var q=document.getElementById("nightstand-lifestyle-section");var y=c.addElement(q,{stopOnEngaged:true});
y.on("thresholdenter",function(C){if(C.element){i.add(C.element,"engaged")}});if(document.getElementById("face-gallery")){var z=document.getElementById("face-gallery"),B="face-gallery",t=a.querySelectorAll(".face-image.ac-gallery-content");
var o=k.extend({_createClip:function(F,C,G,H,E){var D=new m(F,0.3,{opacity:1},{delay:0.15,onStart:function(){l(C,{zIndex:1});
l(F,{zIndex:2})},onDraw:function(I){l(C,{opacity:1-(I.progress)});l(F,{opacity:0+(I.progress)})
},onComplete:function(){window.requestAnimationFrame(E)},destroyOnComplete:true,ease:"ease-in-out"});
return D}});var p=o.create({id:B,el:z,model:t,endless:true});var w;var s=c.addElement(z,{timeToEngage:0});
s.on("enterview",function(C){w=setInterval(function(){p.showNext()},3150)});s.on("exitview",function(C){clearInterval(w)
})}else{var z=a.querySelector("#face-gallery-wrapper");var s=c.addElement(z,{stopOnEngaged:false,inViewThreshold:0});
s.on("enterview",function(){i.add(z,"engaged");setTimeout(function(){i.add(z,"black")
},1000)});s.on("exitview",function(){i.remove(z,"engaged");i.remove(z,"black")})
}c.start();return this}}}());d.exports=n.initialize()},{"../_shared/RenderPlayerFactory":969,"ac-classlist":57,"ac-dom-styles":80,"ac-dom-traversal":98,"ac-eclipse":215,"ac-element-engagement":254,"ac-gallery":534}]},{},[974]);