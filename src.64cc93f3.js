parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KA2S":[function(require,module,exports) {
var define;
var t,r=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(P){u=function(t,r,e){return t[r]=e}}function h(t,r,e,n){var o=r&&r.prototype instanceof d?r:d,i=Object.create(o.prototype),a=new G(n||[]);return i._invoke=function(t,r,e){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw i;return F()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=j(a,e);if(c){if(c===v)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===l)throw n=y,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=p;var u=f(t,r,e);if("normal"===u.type){if(n=e.done?y:s,u.arg===v)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=y,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(P){return{type:"throw",arg:P}}}t.wrap=h;var l="suspendedStart",s="suspendedYield",p="executing",y="completed",v={};function d(){}function g(){}function m(){}var w={};w[i]=function(){return this};var L=Object.getPrototypeOf,x=L&&L(L(N([])));x&&x!==e&&n.call(x,i)&&(w=x);var b=m.prototype=d.prototype=Object.create(w);function E(t){["next","throw","return"].forEach(function(r){u(t,r,function(t){return this._invoke(r,t)})})}function _(t,r){var e;this._invoke=function(o,i){function a(){return new r(function(e,a){!function e(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var h=u.arg,l=h.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then(function(t){e("next",t,a,c)},function(t){e("throw",t,a,c)}):r.resolve(l).then(function(t){h.value=t,a(h)},function(t){return e("throw",t,a,c)})}c(u.arg)}(o,i,e,a)})}return e=e?e.then(a,a):a()}}function j(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,j(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function k(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:F}}function F(){return{value:r,done:!0}}return g.prototype=b.constructor=m,m.constructor=g,g.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},E(_.prototype),_.prototype[a]=function(){return this},t.AsyncIterator=_,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new _(h(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},E(b),u(b,c,"Generator"),b[i]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=N,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),k(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;k(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}},t}("object"==typeof module?module.exports:{});try{regeneratorRuntime=r}catch(e){Function("r","regeneratorRuntime = r")(r)}
},{}],"HAY5":[function(require,module,exports) {
module.exports="top_of_head.c27656b8.png";
},{}],"ovis":[function(require,module,exports) {
module.exports="bottom_of_head.66310774.png";
},{}],"YMBK":[function(require,module,exports) {
module.exports="head.c27656b8.png";
},{}],"pfDt":[function(require,module,exports) {
module.exports="bottom.66310774.png";
},{}],"OjyL":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.startTimer=m,exports.noTimeLeft=void 0;var e=16,t=8,n=4,r=!1;exports.noTimeLeft=r;var a,i={info:{color:"green"},warning:{color:"orange",threshold:t},alert:{color:"red",threshold:n}},o=i.info.color,s=0,c=e;function l(e){var t=e%60;return t<10&&(t="0".concat(t)),t}function m(){exports.noTimeLeft=r=!1,document.getElementById("app").innerHTML="",h(),s=0,clearInterval(a),a=setInterval(function(){var t=document.querySelector(".rest");s=s+=1,(c=e-s)<=0&&(exports.noTimeLeft=r=!0),null!=t?r||(document.getElementById("timerLabel").innerHTML=l(c),g(),u(c)):clearInterval(a)},1e3)}function d(){var t=c/e;return t-1/e*(1-t)}function g(){var e="".concat((283*d()).toFixed(0)," 283");document.getElementById("timerPathRemaining").setAttribute("stroke-dasharray",e)}function u(e){var t=i.alert,n=i.warning,r=i.info;e<=t.threshold?(document.getElementById("timerPathRemaining").classList.remove(n.color),document.getElementById("timerPathRemaining").classList.add(t.color)):e<=n.threshold&&(document.getElementById("timerPathRemaining").classList.remove(r.color),document.getElementById("timerPathRemaining").classList.add(n.color))}function h(){document.getElementById("app").innerHTML='\n  <div class = "timerContainer">\n    <svg class = "base-timer__svg" viewBox = "0 0 100 100" xmlns = "http://www.w3.org/2000/svg">\n      <g class = "timerCircle">\n        <circle class = "timerPath" cx = "50" cy = "50" r = "45"></circle>\n        <path\n          id="timerPathRemaining"\n          stroke-dasharray="283"\n          class="timerPathRemaining '.concat(o,'"\n          d="\n            M 50, 50\n            m -45, 0\n            a 45,45 0 1,0 90,0\n            a 45,45 0 1,0 -90,0\n          "></path>\n      </g>\n    </svg>\n    <span id = "timerLabel" class = "timerLabel">\n    </span>\n  </div>')}
},{}],"rbXG":[function(require,module,exports) {
module.exports="img1.66c77d2f.png";
},{}],"LZ8M":[function(require,module,exports) {
module.exports="img2.832972d9.png";
},{}],"nhYh":[function(require,module,exports) {
module.exports="img4.a3cc1207.png";
},{}],"vVs5":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.showWorkInProgress=i;var e=n(require("./../../styles/img/img4.png")),t=require("./mainPage"),r=require("./categoryPage");function n(e){return e&&e.__esModule?e:{default:e}}var a=document.getElementById("main-wrap");function i(){c()}function c(){a.innerHTML="";var n=(0,t.createNewElement)("div","workwrap",a);(0,t.createNewImgElement)("bulbimg",e.default,n);var i=(0,t.createNewElement)("div","titleswrap",n),c=(0,t.createNewElement)("div","startwrap",n),l=(0,t.createNewElement)("div","backwrap",n);(0,t.createNewElement)("h1","creditstitle",i,"work in progress"),(0,t.createNewElement)("h2","creditssubtitle",i,"play solo:");var s=(0,t.createNewElement)("button","btn primary single",c,"single"),o=(0,t.createNewElement)("button","btn secondary backbtn",l,"back");s.addEventListener("click",r.renderCategoryScreen),o.addEventListener("click",t.showMainMenu)}
},{"./../../styles/img/img4.png":"nhYh","./mainPage":"LNMK","./categoryPage":"xWMB"}],"qHUR":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.showLeaderboardScreen=u;var e=n(require("./../../styles/img/top_of_head.png")),r=n(require("./../../styles/img/bottom_of_head.png")),t=require("./mainPage"),o=require("./difficultyLevel");function n(e){return e&&e.__esModule?e:{default:e}}var i=document.querySelector("#main-wrap"),a=[],s=[];function u(){m()}function c(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=document.createElement("div");return o.className=e,r.appendChild(o),o.innerText=t,o}function m(){i.innerHTML="";var e=c("leaderboardWrapper",i);s=JSON.parse(localStorage.getItem("highScores")),l(e),d(e),p(e),f(e),h(e)}function l(e){c("titleDiv",e,"Leaders")}function d(e){var r=c("top3Container",e),t=c("item2",r),o=c("item1",r),n=c("item3",r);s.length>=1?(c("position1",o,"1"),c("userName1",o,s[0].name),c("score1",o,s[0].score+" points")):(c("position1",o,"1"),c("userName1",o,"userName"),c("score1",o,"userScore")),s.length>=2?(c("position2",t,"2"),c("userName2",t,s[1].name),c("score2",t,s[1].score+" points")):(c("position2",t,"2"),c("userName2",t,"userName"),c("score2",t,"userScore")),s.length>=3?(c("position3",n,"3"),c("userName3",n,s[2].name),c("score3",n,s[2].score+" points")):(c("position3",n,"3"),c("userName3",n,"userName"),c("score3",n,"userScore"))}function p(e){for(var r=c("listContainer",e),t=4;t<11;t++)a[t]=c("listElementBox",r);for(var o=4;o<=s.length;o++)c("userName",a[o],[o]+". "+s[o-1].name);for(var n=4;n<=s.length;n++)c("score",a[n],s[n-1].score+" points")}function f(e){var r=c("backToMenuButton",e);r.textContent="MENU",r.addEventListener("click",function(){(0,t.showMainMenu)()})}function h(t){(0,o.createIMG)(e.default,t,"headTop"),(0,o.createIMG)(r.default,t,"headBottom")}
},{"./../../styles/img/top_of_head.png":"HAY5","./../../styles/img/bottom_of_head.png":"ovis","./mainPage":"LNMK","./difficultyLevel":"xXp8"}],"dFmu":[function(require,module,exports) {
module.exports="img3.b6417a45.png";
},{}],"gchT":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.showCredits=n;var e=a(require("./../../styles/img/img3.png")),t=require("./mainPage");function a(e){return e&&e.__esModule?e:{default:e}}var i=document.getElementById("main-wrap");function n(){r()}function r(){i.innerHTML="";var a=(0,t.createNewElement)("div","creditswrap",i);(0,t.createNewImgElement)("heartimg",e.default,a);var n=(0,t.createNewElement)("div","titleswrap",a),r=(0,t.createNewElement)("div","authorswrap",a),s=(0,t.createNewElement)("div","backwrap",a);(0,t.createNewElement)("h1","creditstitle",n,"we made this!"),(0,t.createNewElement)("h2","creditssubtitle",n,"check our githubs:"),c("https://github.com/KamilaGumkowska","Kamila Gumkowska",r),c("https://github.com/MateuszLepecki","Mateusz Łepecki",r),c("https://github.com/kcodex","Katarzyna Ratajska",r),c("https://github.com/sabinarusielik","Sabina Rusielik",r),c("https://github.com/SebastianSiwek","Sebastian Siwek",r),c("https://github.com/tarchal","Wojciech Tarchalski",r),(0,t.createNewElement)("button","btn secondary backbtn",s,"back").addEventListener("click",t.showMainMenu)}function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2?arguments[2]:void 0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"link",n=document.createElement("a");n.href=e,n.innerHTML=t,n.className=i,n.target="_blank",a.appendChild(n)}
},{"./../../styles/img/img3.png":"dFmu","./mainPage":"LNMK"}],"v6E6":[function(require,module,exports) {
module.exports="mario.8e3f3b5a.mp3";
},{}],"tI9P":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.music=void 0;var u=e(require("../music/mario.mp3"));function e(u){return u&&u.__esModule?u:{default:u}}var t={audio:new Audio(u.default),state:0,playMusic:function(){t.audio.play(),t.audio.muted=!1,t.state=1},muteMusic:function(){t.audio.muted=!0,t.state=0}};exports.music=t,t.audio.loop=!0,t.audio.volume=.35;
},{"../music/mario.mp3":"v6E6"}],"O5kf":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.showOptionsScreen=O,exports.defaultNickFromOptions=void 0;var t,e=require("./mainPage"),n=require("./difficultyLevel"),o=require("./music"),i="p",r="div",c="input",a="button",u="SET DEFAULT NICKNAME",s="RESET LEADERBOARD",l="MUSIC OFF",p="SUBMIT",m=document.querySelector("#main-wrap");function O(){d()}exports.defaultNickFromOptions=t;var d=function(){m.innerHTML="";var t=(0,n.createDOMElement)(r,"optionsScreen",m);M(t),k(t),(0,n.createImageSection)(t)},M=function(t){var e=(0,n.createDOMElement)(r,"OptionsButtonsContainer",t),o=(0,n.createDOMElement)(a,"resetLeaderboard btn secondary optionButton OptionFont",e),i=(0,n.createDOMElement)(a,"musicButton btn secondary optionButton OptionFont",e);o.textContent=s,i.textContent=l,o.addEventListener("click",function(){localStorage.clear()}),i.addEventListener("click",S),E(t)},E=function(e){var o=(0,n.createDOMElement)(r,"nickContainer",e);v(o),(0,n.createDOMElement)(c,"nickInput btn secondary OptionFont",o).setAttribute("placeholder","YOUR NICKNAME");var i=(0,n.createDOMElement)(a,"nickSubmit btn teritary optionButton",o);i.innerHTML=p,i.addEventListener("click",function(){var e=document.querySelector(".nickInput"),n=document.querySelector(".nickOutput");exports.defaultNickFromOptions=t=e.value,e.value="",n.innerText=t}),f(o)},f=function(e){(0,n.createDOMElement)(r,"nickOutput font",e,t)},v=function(t){(0,n.createDOMElement)(i,"nickParagraphOption font",t,u)},k=function(t){var e=(0,n.createDOMElement)(r,"backButtonContainer",t),o=(0,n.createDOMElement)("button","backToMainPageButton btn primary OptionFont",e);o.textContent="BACK",o.addEventListener("click",C)},S=function(){var t=document.querySelector(".musicButton");1==o.music.state?(o.music.muteMusic(),t.textContent="MUSIC OFF"):(o.music.playMusic(),t.textContent="MUSIC ON")},C=function(){m.innerHTML="",(0,e.showMainMenu)()};
},{"./mainPage":"LNMK","./difficultyLevel":"xXp8","./music":"tI9P"}],"LNMK":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.showMainMenu=d,exports.goToScreenOnClick=l,exports.createNewElement=m,exports.createNewImgElement=p;var e=s(require("./../../styles/img/img1.png")),r=s(require("./../../styles/img/img2.png")),t=require("./workInProgress"),n=require("./leaderboard"),i=require("./credits.js"),a=require("./optionsScreen"),o=require("./categoryPage");function s(e){return e&&e.__esModule?e:{default:e}}function d(){c()}var u=document.getElementById("main-wrap");function c(){u.innerHTML="";var s=document.createElement("div");s.id="startwrap",u.appendChild(s);var d=m("div","main-game",s),c=m("div","leaderboard-wrap",s),g=m("div","credits-wrap",s),b=m("div","options-wrap",s);p("headimg",e.default,s),p("blueimg",r.default,s),m("h1","title",d,"brains out quiz"),m("h2","subtitle",d,"starts here:");var v=m("button","btn primary single",d,"single"),h=m("button","btn primary multi",d,"multi");m("h2","subtitle",c,"ends here:");var w=m("button","btn secondary leaderboard",c,"see our leaders"),y=m("button","btn teritary credits",g,"credits"),f=m("button","btn teritary options",b,"options");l(v,o.renderCategoryScreen),l(h,t.showWorkInProgress),l(w,n.showLeaderboardScreen),l(y,i.showCredits),l(f,a.showOptionsScreen)}function l(e,r){e.addEventListener("click",r)}function m(e,r,t){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=document.createElement(e);return i.className=r,i.innerHTML=n,t.appendChild(i),i}function p(e,r,t){var n=document.createElement("img");return n.className=e,n.src=r,t.appendChild(n),n}
},{"./../../styles/img/img1.png":"rbXG","./../../styles/img/img2.png":"LZ8M","./workInProgress":"vVs5","./leaderboard":"qHUR","./credits.js":"gchT","./optionsScreen":"O5kf","./categoryPage":"xWMB"}],"SB0e":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.showResults=u;var e=l(require("./../../styles/img/img1.png")),t=l(require("./../../styles/img/img2.png")),r=require("./App"),n=require("./mainPage"),a=require("./game"),i=require("./optionsScreen"),o=require("./leaderboard");function l(e){return e&&e.__esModule?e:{default:e}}function u(){c()}function c(){var l="your score is: "+Math.floor(100*a.finalScore/(15*r.quizSettings.numberOfQuestions))+"/100",u=document.getElementById("main-wrap");u.innerHTML="";var c=document.createElement("div");c.id="resultswrap",u.appendChild(c);var s=(0,n.createNewElement)("div","endgame",c),d=((0,n.createNewImgElement)("headimg",e.default,c),(0,n.createNewImgElement)("blueimg",t.default,c),(0,n.createNewElement)("h1","title",s,"quiz result"),(0,n.createNewElement)("h2","subtitle",s,l),(0,n.createNewElement)("input","btn secondary nickInput",s,"nickname"));i.defaultNickFromOptions?d.value=i.defaultNickFromOptions:d.value="";var p=(0,n.createNewElement)("button","btn secondary submitBtn",s,"submit score"),g=(0,n.createNewElement)("button","btn secondary leaderBtn",s,"leaderboard");g.style.display="none";var y=(0,n.createNewElement)("button","btn primary try-again",s,"try again"),b=(0,n.createNewElement)("button","btn priary main-page",s,"main page");p.addEventListener("click",m),y.addEventListener("click",a.createGameScreen),b.addEventListener("click",n.showMainMenu),g.addEventListener("click",o.showLeaderboardScreen)}var s=JSON.parse(localStorage.getItem("highScores"))||[];function m(){var e=document.querySelector(".nickInput"),t=document.querySelector(".submitBtn"),n=document.querySelector(".leaderBtn"),i=document.querySelector(".subtitle");if(""!=e.value){var o={score:Math.floor(100*a.finalScore/(15*r.quizSettings.numberOfQuestions)),name:e.value};s.push(o),s.sort(function(e,t){return t.score-e.score}),s.splice(10),localStorage.setItem("highScores",JSON.stringify(s)),t.style.display="none",n.style.display="block",i.text="score saved!"}else alert("Enter your name!")}
},{"./../../styles/img/img1.png":"rbXG","./../../styles/img/img2.png":"LZ8M","./App":"rDxQ","./mainPage":"LNMK","./game":"zPJW","./optionsScreen":"O5kf","./leaderboard":"qHUR"}],"zPJW":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createGameScreen=g,exports.finalScore=void 0;var e=a(require("./../../styles/img/head.png")),n=a(require("./../../styles/img/bottom.png")),t=require("./App"),r=require("./timer"),o=require("./showResults"),i=require("./mainPage");function a(e){return e&&e.__esModule?e:{default:e}}function c(e){return m(e)||l(e)||u(e)||s()}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,n){if(e){if("string"==typeof e)return f(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?f(e,n):void 0}}function l(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function m(e){if(Array.isArray(e))return f(e)}function f(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function d(e,n,t,r,o,i,a){try{var c=e[i](a),s=c.value}catch(u){return void t(u)}c.done?n(s):Promise.resolve(s).then(r,o)}function p(e){return function(){var n=this,t=arguments;return new Promise(function(r,o){var i=e.apply(n,t);function a(e){d(i,r,o,a,c,"next",e)}function c(e){d(i,r,o,a,c,"throw",e)}a(void 0)})}}var h=4;function g(){T(),O()}var y,v=0;exports.finalScore=v;var w,b=[],q={},S=0,E=[];function M(){return k.apply(this,arguments)}function k(){return(k=p(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return b=[],e.next=3,fetch("https://opentdb.com/api.php?amount=".concat(t.quizSettings.numberOfQuestions,"&category=").concat(t.quizSettings.category,"&difficulty=").concat(t.quizSettings.difficultyLevel)).then(function(e){return e.json()}).then(function(e){e.results.forEach(function(e){var n=[e.correct_answer].concat(c(e.incorrect_answers));b.push({question:e.question,category:e.category,difficulty:e.difficulty,correct_answer:e.correct_answer,answers:x(n)})})}).catch(function(e){console.error(e)});case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}function x(e){for(var n=e.length-1;n>0;n--){var t=Math.floor(Math.random()*n),r=e[n];e[n]=e[t],e[t]=r}return e}function T(){return A.apply(this,arguments)}function A(){return(A=p(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return exports.finalScore=v=0,e.next=3,M();case 3:I(),L(),R(),j(),B(),H();case 9:case"end":return e.stop()}},e)}))).apply(this,arguments)}function I(){S=0,E=c(b),_()}function _(){if(S++,0===E.length)setTimeout(function(){var e=document.getElementById("main-wrap"),n=document.querySelector(".rest");e.className="",n&&n.remove(),(0,o.showResults)()},100);else{var e=Math.floor(Math.random()*E.length);q=E[e],E.splice(e,1),(0,r.startTimer)(),P().then(function(){_(),j(),B(),H()})}}function B(){q.answers.length<h&&(document.getElementById("third-option").style.display="none",document.getElementById("fourth-option").style.display="none")}function L(){switch(q.category){case"Entertainment: Video Games":y="https://img.icons8.com/color/48/000000/visual-game-boy.png";break;case"Science & Nature":y="https://img.icons8.com/color/48/000000/natural-food.png";break;case"Entertainment: Music":y="https://img.icons8.com/color/48/000000/piano.png";break;case"General Knowledge":y="https://img.icons8.com/color/48/000000/idea-sharing.png";break;case"History":y="https://img.icons8.com/color/48/000000/anubis.png";break;case"Geography":y="https://img.icons8.com/color/48/000000/america.png";break;default:y="https://img.icons8.com/color/48/000000/film-reel.png"}}function j(){var e=document.getElementById("main-wrap");e.className="question",e.innerHTML='\n        <h3>Question <img class = "icon" src="'.concat(y,'" alt="').concat(q.category,'"/></h3>\n        <p id="question-asked">').concat(q.question,'</p>\n        <div class="answer">\n            <p>').concat(q.answers[0],'</p>\n        </div>\n        <div class="answer">\n            <p>').concat(q.answers[1],'</p>\n        </div>\n        <div class="answer" id="third-option">\n            <p>').concat(q.answers[2],'</p>\n        </div>\n        <div class="answer" id="fourth-option">\n            <p>').concat(q.answers[3],'</p>\n        </div>\n        <div id="level" class="level">\n            <p>level ').concat(w,"</p>\n        </div>\n    ")}function H(){Array.from(document.getElementsByClassName("answer")).forEach(function(e){e.addEventListener("click",function(n){q.correct_answer===e.children[0].innerHTML?exports.finalScore=v+=15:exports.finalScore=v+=0,_(),j(),B(),H()})})}function N(){document.getElementById("quit").addEventListener("click",function(e){var n=document.querySelector(".rest");document.getElementById("main-wrap").className="",n.innerHTML="",n.remove(),(0,i.showMainMenu)()})}function R(){switch(q.difficulty){case"hard":w="Hard";break;case"medium":w="Medium";break;case"easy":w="Easy"}}function O(){var t=document.createElement("div");t.className="rest",document.body.appendChild(t),t.innerHTML='\n        <img class="top-img" src='.concat(e.default,' alt="Top part of the man\'s head">\n        <div id="app" class="timer"></div>\n        <div id="quit"class="quit">\n            <p>Quit</p>\n        </div>\n        <img class="bottom-img" src=').concat(n.default,' alt="Bottom part of the man\'s head">\n    '),N()}function P(){return new Promise(function(e,n){!function n(){if(r.noTimeLeft)return e();setTimeout(n,1e3)}()})}
},{"./../../styles/img/head.png":"YMBK","./../../styles/img/bottom.png":"pfDt","./App":"rDxQ","./timer":"OjyL","./showResults":"SB0e","./mainPage":"LNMK"}],"xXp8":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.showDifficultyLevelScreen=i,exports.createIMG=exports.createImageSection=exports.createDOMElement=void 0;var e=a(require("./../../styles/img/top_of_head.png")),n=a(require("./../../styles/img/bottom_of_head.png")),t=require("./categoryPage"),r=require("./game");function a(e){return e&&e.__esModule?e:{default:e}}var o=["EASY","MEDIUM","HARD"],u=document.querySelector("#main-wrap");function i(e){l(),f(),v(e)}var c=function(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",a=document.createElement(e);return a.className=n,a.innerText=r,t.appendChild(a),a};exports.createDOMElement=c;var l=function(){u.innerHTML="";var e=c("div","levelScreenWrapper",u);s(e),d(e),p(e),b(e)},s=function(e){var n=c("div","numberOfQuestionsContainer",e);c("p","numberOfQuestionsParagraph font",n,"NUMBER OF QUESTIONS");c("div","numberOfQuestionsInputWrapper",n).innerHTML='\n            <output class="bubble"></output>\n            <input type="range" id="numberOfQuestionsInput" class="range numberOfQuestions" min="10" max="50" step="1"/>'},d=function(e){var n=c("div","levelContainer",e);c("p","levelParagraph font",n,"LEVEL");c("div","levelInputWrapper",n).innerHTML='<input type="range" class="differenceLevel" min="0" max="2" step="1"/>';var t=c("div","levelLabelsContainer",n);o.forEach(function(e,n){c("p","levelLabel font",t,o[n])})},f=function(){var e=document.querySelector(".range"),n=document.querySelector(".bubble");e.addEventListener("input",function(){m(e,n)}),m(e,n)},m=function(e,n){var t=e.value,r=e.min?e.min:0,a=e.max?e.max:100,o=Number(100*(t-r)/(a-r));n.innerHTML=t,n.style.left="calc(".concat(o,"% + (").concat(7-.14*o,"%))")},v=function(e){document.querySelector(".confirmLevelButton").addEventListener("click",function(){var n;0==document.querySelector(".differenceLevel").value&&(n="easy"),1==document.querySelector(".differenceLevel").value&&(n="medium"),2==document.querySelector(".differenceLevel").value&&(n="hard");var t=document.querySelector(".numberOfQuestions").value;e.difficultyLevel=n,e.numberOfQuestions=t,u.innerHTML="",(0,r.createGameScreen)()})},p=function(e){var n=c("div","buttonsContainer",e),r=c("button","backToCategoryPageButton btn primary",n),a=c("button","confirmLevelButton btn primary",n);r.textContent="BACK",r.addEventListener("click",function(){u.innerHTML="",(0,t.renderCategoryScreen)()}),a.textContent="LET'S PLAY!"},b=function(t){L(e.default,t,"headTop"),L(n.default,t,"headBottom")};exports.createImageSection=b;var L=function(e,n,t){var r=document.createElement("img");r.className=t,r.src=e,n.appendChild(r)};exports.createIMG=L;
},{"./../../styles/img/top_of_head.png":"HAY5","./../../styles/img/bottom_of_head.png":"ovis","./categoryPage":"xWMB","./game":"zPJW"}],"xWMB":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.renderCategoryScreen=m;var e=require("./App.js"),t=require("./difficultyLevel"),i=require("./mainPage"),n=o(require("./../../styles/img/top_of_head.png")),r=o(require("./../../styles/img/bottom_of_head.png"));function o(e){return e&&e.__esModule?e:{default:e}}var a,c,u,g,s=document.querySelector("#main-wrap"),l=0,d=[],f=[],y=["VIDEO GAMES","SCIENCE & NATURE","MUSIC","HISTORY","GEOGRAPHY","GENERAL KNOWLEDGE"],b=["bg one","bg two","bg three","bg four","bg five","bg six"],v=function(e,t,i){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r=document.createElement(e);return r.className=t,r.innerText=n,i.appendChild(r),r};function E(){s.innerHTML=" ",a=v("div","categoryScreen",s),(0,t.createIMG)(n.default,a,"headTop"),v("h1","categoryTitle",a,"CATEGORY");for(var e=0;e<8;e++)f[e]=v("a","a",a)}function S(){for(var e=0;e<y.length;e++)d[e]=v("div",b[e],f[e],y[e])}function p(){u=v("button","bg primary categoryBtn",f[6],"BACK"),g=v("button","bg primary categoryBtn submit",f[7],"NEXT"),(0,t.createIMG)(r.default,a,"headBottom"),c=v("h2","tip",a,"SELECT CATEGORY")}function h(){for(var t=function(t){d[t].addEventListener("click",function(){l>0&&(d[l-1].style.backgroundColor="rgba(0,0,0,0)"),c.style.visibility="hidden",l=t+1,d[t].style.backgroundColor="#FDB813",1==l?e.quizSettings.category=15:2==l?e.quizSettings.category=17:3==l?e.quizSettings.category=12:4==l?e.quizSettings.category=23:5==l?e.quizSettings.category=22:6==l&&(e.quizSettings.category=9),console.log(e.quizSettings.category)})},i=0;i<d.length;i++)t(i)}function q(){g.addEventListener("click",function(){console.log(l),0===l?(g.disabled=!1,c.style.visibility="visible"):(0,t.showDifficultyLevelScreen)(e.quizSettings)}),u.addEventListener("click",function(e){(0,i.showMainMenu)()})}function m(){l=0,E(),S(),p(),h(),q()}
},{"./App.js":"rDxQ","./difficultyLevel":"xXp8","./mainPage":"LNMK","./../../styles/img/top_of_head.png":"HAY5","./../../styles/img/bottom_of_head.png":"ovis"}],"rDxQ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.App=exports.quizSettings=void 0;var e=require("./categoryPage"),r=require("./difficultyLevel"),i=require("./mainPage"),t=require("./leaderboard"),u=require("./showResults"),o=require("./game"),s=require("./music");function n(e){if(null==e)throw new TypeError("Cannot destructure undefined")}var a={category:11,difficultyLevel:"easy",numberOfQuestions:20};exports.quizSettings=a;var p=function(e){n(e),(0,i.showMainMenu)()};exports.App=p;
},{"./categoryPage":"xWMB","./difficultyLevel":"xXp8","./mainPage":"LNMK","./leaderboard":"qHUR","./showResults":"SB0e","./game":"zPJW","./music":"tI9P"}],"H99C":[function(require,module,exports) {
"use strict";require("regenerator-runtime/runtime");var r=require("./app/App");window.onload=function(){return(0,r.App)({})};
},{"regenerator-runtime/runtime":"KA2S","./app/App":"rDxQ"}]},{},["H99C"], null)
//# sourceMappingURL=src.64cc93f3.js.map