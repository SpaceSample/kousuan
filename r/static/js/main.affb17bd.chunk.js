(this.webpackJsonpkousuan=this.webpackJsonpkousuan||[]).push([[0],{164:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(2),o=n.n(c),i=(n(29),n(3)),l=n(7),s=n.n(l),u=n(13),m=n(11),h=n(14),f=n(8),E=n(17),v=n(6),p=n.n(v),d=(n(30),function(e,t){var n=1+(t>e?t-e:e-t);return Math.floor(Math.random()*n)+e}),b=function(){function e(t,n,a){Object(f.a)(this,e),this.n1=t,this.n2=n,this.operator=a,this.answer=""}return Object(E.a)(e,[{key:"toString",value:function(){return this.n1+this.operator+this.n2}},{key:"isCorrect",value:function(){return""!==this.answer&&parseInt(this.answer)===this.res}}]),e}(),g=function(e){function t(e,n,a){var r;return Object(f.a)(this,t),(r=Object(u.a)(this,Object(m.a)(t).call(this,e,n,a))).res="-"===a?e-n:e+n,r}return Object(h.a)(t,e),t}(b);g.random20=function(){var e=d(0,20),t=d(0,20),n=d(0,1)?"+":"-",a=new g(e,t,n);return a.res<0||a.res>20?g.random20():a};var w=function(e){function t(e,n,a){var r;if(Object(f.a)(this,t),(r=Object(u.a)(this,Object(m.a)(t).call(this,e,n,a))).res="\xf7"===a?e/n:e*n,"\xf7"===a){if(0===n)throw new Error(e+" \xf7 0?");var c=e*n;r.res=e,r.n1=c}else r.res=e*n;return r}return Object(h.a)(t,e),t}(b);function j(e){if("20+-"===e)return g.random20();if("99*/"===e)return w.random99();throw new Error("Unknown type")}function O(e){var t=e.data,n=Object(a.useState)(""),c=Object(i.a)(n,2),o=c[0],l=c[1];Object(a.useEffect)((function(){l(t.answer)}),[t]);var s=t.toString()+" = ";return r.a.createElement("div",{className:p.a.question},s,r.a.createElement("input",{type:"text",value:o,onChange:function(e){l(e.target.value),t.answer=e.target.value}}))}function _(e){var t=e.data,n=t.isCorrect();return r.a.createElement("div",{className:p.a.result},r.a.createElement("span",{className:n?p.a.isCorrect:p.a.isWrong},t.toString()+" = "+t.answer),!n&&r.a.createElement("span",null,t.res))}w.random99=function(){var e=d(0,9),t=d(1,9),n=d(0,1)?"\xd7":"\xf7";return new w(e,t,n)};var N=n(24),k=n.n(N);var C=function(e){var t=e.data,n=Object(a.useState)(0),c=Object(i.a)(n,2),o=c[0],l=c[1],s=t[o];return r.a.createElement("div",{className:k.a.exam},r.a.createElement("img",{src:"./hua.png",alt:"hua"}),r.a.createElement(O,{data:s,answer:s.answer}),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){o>0&&l(o-1)},disabled:o<=0},"\u524d\u4e00\u9898"),r.a.createElement("button",{onClick:function(){o<t.length-1&&l(o+1)},disabled:o>=t.length-1},"\u540e\u4e00\u9898")))},I={INIT:1,PLAYING:2,END:3};var S=function(){var e=Object(a.useState)(0),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(0),l=Object(i.a)(o,2),u=l[0],m=l[1],h=Object(a.useState)(0),f=Object(i.a)(h,2),E=f[0],v=f[1],p=Object(a.useState)(I.INIT),d=Object(i.a)(p,2),b=d[0],g=d[1],w=Object(a.useState)([]),O=Object(i.a)(w,2),N=O[0],k=O[1];function S(e){k(function(e){for(var t=[],n=0;n<20;n++)t.push(j(e));return t}(e)),c((new Date).getTime()),g(I.PLAYING)}return r.a.createElement("div",{className:s.a.app},r.a.createElement("header",{className:"App-header"},b===I.INIT&&r.a.createElement("div",{className:s.a.start},r.a.createElement("img",{src:"./hua.png",alt:"hua"}),r.a.createElement("div",{className:s.a.welcome},"\u6b22\u8fce\u53c2\u52a0\u53e3\u7b97\u5927\u6311\u6218\uff01"),r.a.createElement("button",{onClick:function(){return S("20+-")}},"\u4e8c\u5341\u4ee5\u5185\u52a0\u51cf\u6cd5"),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){return S("99*/")}},"\u4e5d\u4e5d\u4e58\u9664\u6cd5")),b===I.PLAYING&&r.a.createElement(C,{data:N}),b===I.PLAYING&&r.a.createElement("button",{onClick:function(){m((new Date).getTime());var e=0;N.forEach((function(t){t.answer&&t.isCorrect()&&e++})),v(e),g(I.END)}},"\u4ea4\u5377"),b===I.END&&r.a.createElement("div",null,r.a.createElement("div",null,"\u7528\u65f6",r.a.createElement("span",null,(u-n)/1e3),"\u79d2"),r.a.createElement("div",null,"\u5171",N.length,"\u9053\u9898\uff0c\u5176\u4e2d",E,"\u9053\u6b63\u786e"),E<N.length/4*3&&r.a.createElement("div",null,"\u7ee7\u7eed\u52aa\u529b\uff01",r.a.createElement("span",{role:"img","aria-label":"come on"},"\ud83d\udcaa\ud83d\udcaa\ud83d\udcaa")),E>=N.length/4*3&&E<N.length&&r.a.createElement("div",null,"\u6210\u7ee9\u4e0d\u9519\u554a\uff01",r.a.createElement("span",{role:"img","aria-label":"smile"},"\ud83d\ude42\ud83d\ude42\ud83d\ude42")),E===N.length&&r.a.createElement("div",null,"\u4f60\u592a\u68d2\u5566\uff0c\u5b8c\u5168\u6b63\u786e",r.a.createElement("span",{role:"img","aria-label":"great"},"\ud83d\udc4d\ud83d\udc4d\ud83d\udc4d")),r.a.createElement("div",null,N.map((function(e){return r.a.createElement(_,{data:e})}))),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){v(0),g(I.INIT)}},"\u91cd\u65b0\u5f00\u59cb")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},24:function(e,t,n){e.exports={exam:"exam_exam__2GNR-"}},25:function(e,t,n){e.exports=n(164)},29:function(e,t,n){},6:function(e,t,n){e.exports={isCorrect:"question_isCorrect__1BT3L",isWrong:"question_isWrong__2rj1S",result:"question_result__1BJYc",question:"question_question__R0nae"}},7:function(e,t,n){e.exports={app:"App_app__1kX79",start:"App_start__op5pH",welcome:"App_welcome__2u-lC"}}},[[25,1,2]]]);
//# sourceMappingURL=main.affb17bd.chunk.js.map