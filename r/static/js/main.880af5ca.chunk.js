(this.webpackJsonpkousuan=this.webpackJsonpkousuan||[]).push([[0],[,,function(e,t,n){e.exports={isCorrect:"question_isCorrect__3pmnd",isWrong:"question_isWrong__2ssu5",index:"question_index__3PcR4",result:"question_result__3IQCY",question:"question_question__2XbRE",keyboard:"question_keyboard__3JERA"}},function(e,t,n){e.exports={app:"App_app__1VlIa",start:"App_start__3CGHP",welcome:"App_welcome__1cuo2",end:"App_end__2Hlrs",info:"App_info__2l2qW"}},,,,,function(e,t,n){e.exports={exam:"exam_exam__2UC2w"}},function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(7),o=n.n(i),c=(n(14),n(1)),u=n(3),l=n.n(u),s=n(4),f=n(5),m=n(2),h=n.n(m),v=function(e,t){if(t===e)return e;var n=1+(t>e?t-e:e-t);return Math.floor(Math.random()*n)+e},E=function(){return v(0,1)>0},b=function(e,t){for(var n=new Array(e),r=0;r<e;r++)n[r]=t(r);return n},p=function(){function e(t,n,r){Object(s.a)(this,e),this.val=r,this.left=t,this.right=n}return Object(f.a)(e,[{key:"toString",value:function(){if("number"===typeof this.val)return this.val.toString();var t=this.left.toString();this.left instanceof e&&this.left.priority<this.priority&&(t="(".concat(t,")"));var n=this.right.toString();return this.right instanceof e&&this.right.priority<=this.priority&&(n="(".concat(n,")")),"".concat(t).concat(this.val).concat(n)}},{key:"priority",get:function(){return"number"===typeof this.val?1e4:"\xd7"===this.val||"\xf7"===this.val?2:"+"===this.val||"-"===this.val?1:0}},{key:"result",get:function(){if("number"===typeof this.val)return this.val;var e="number"===typeof this.left?this.left:this.left.result,t="number"===typeof this.right?this.right:this.right.result;return"+"===this.val?e+t:"-"===this.val?e-t:"\xd7"===this.val?e*t:"\xf7"===this.val?e/t:0}}]),e}(),d=function(){function e(t){Object(s.a)(this,e),this.operatorTree=t,this.answer=""}return Object(f.a)(e,[{key:"toString",value:function(){return this.operatorTree.toString()}},{key:"isCorrect",value:function(){return""!==this.answer&&parseInt(this.answer)===this.res}},{key:"res",get:function(){return this.operatorTree.result}}]),e}(),g=function(){for(var e=[],t=0;t<5;t++){var n=v(3,9),r=v(10-n,9),a=E()?new p(n,r,"+"):new p(r,n,"+"),i=new d(a);e.push(i)}for(var o=0;o<5;o++)e.push(new d(new p(v(3,18),v(0,2),E()?"+":"-")));for(var c=0;c<5;c++){var u=v(3,9),l=v(10-u,9),s=new d(new p(u+l,l,"-"));e.push(s)}for(var f=0;f<5;f++){var m=v(3,9),h=v(10-m,9),b=E()?E()?new p(m,h,"+"):new p(h,m,"+"):new p(h+m,m,"-"),g=E()?new p(b,v(0,20-b.result),"+"):new p(b,v(0,b.result),"-"),w=new d(g);e.push(w)}return e.sort((function(e,t){return v(-1,1)})),e},w=function(){for(var e=[],t=0;t<20;t++){var n=v(0,9),r=v(1,9),a=E()?"\xd7":"\xf7";if("\xf7"===a)n=n*r;var i=new d(new p(n,r,a));e.push(i)}return e},k=function(e){if(e<1)throw new Error("Illegal arguments");for(var t=b(e,(function(e){return e})).sort((function(){return v(-1,1)})),n=["+","-","\xd7","\xf7"],r=b(e,(function(){return n[v(0,3)]})),a=b(e+1,(function(){return v(0,9)})),i=function(e){var n=t[e],i=a[n],o=a[n+1],c=new p(i,o,r[n]);a.forEach((function(e,t){"number"!==typeof e&&(e!==i&&e!==o||(a[t]=c))})),a[n]=c,a[n+1]=c},o=0;o<e;o++)i(o);return a[0]},_=function(){for(var e=[],t=0;t<20;t++)for(;;){var n=k(3),r=n.result;if(console.log("==="),r!==1/0&&r!==-1/0&&r===Math.floor(r)){var a=new d(n);e.push(a);break}}return e},C=function(e){for(var t=[],n=0;n<20;n++){var r=v(0,e),a=v(0,e-r),i=E()?"+":"-";if("-"===i)r=r+a;var o=new d(new p(r,a,i));t.push(o)}return t};function y(e){var t=e.data,n=e.index,i=Object(r.useState)(""),o=Object(c.a)(i,2),u=o[0],l=o[1],s=Object(r.useState)(!0),f=Object(c.a)(s,2),m=f[0],v=f[1];Object(r.useEffect)((function(){l(t.answer)}),[t]);var E=t.toString()+"=",b=function(e){l(e),t.answer=e},p=function(e){"back"===e?u&&b(u.substring(0,u.length-1)):"close"===e?v(!1):b(u+e)};return a.a.createElement("div",null,a.a.createElement("div",{className:h.a.index},"\u7b2c",n+1,"\u9898\uff1a"),a.a.createElement("div",{className:h.a.question},E,a.a.createElement("input",{type:"text",value:u,onChange:function(e){b(e.target.value)}})),m&&a.a.createElement("div",{className:h.a.keyboard},a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){return p("1")}},"1"),a.a.createElement("button",{onClick:function(){return p("2")}},"2"),a.a.createElement("button",{onClick:function(){return p("3")}},"3"),a.a.createElement("button",{onClick:function(){return p("back")}},"<=")),a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){return p("4")}},"4"),a.a.createElement("button",{onClick:function(){return p("5")}},"5"),a.a.createElement("button",{onClick:function(){return p("6")}},"6"),a.a.createElement("button",{onClick:function(){return p("-")}},"-")),a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){return p("7")}},"7"),a.a.createElement("button",{onClick:function(){return p("8")}},"8"),a.a.createElement("button",{onClick:function(){return p("9")}},"9"),a.a.createElement("button",{onClick:function(){return p("0")}},"0")),a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){return p("close")}},"X"))),!m&&a.a.createElement("button",{onClick:function(){return v(!0)}},"\u6570\u5b57\u952e\u76d8"))}function N(e){var t=e.data,n=t.isCorrect();return a.a.createElement("div",{className:h.a.result},a.a.createElement("span",{className:n?h.a.isCorrect:h.a.isWrong},t.toString()+" = "+t.answer),!n&&a.a.createElement("span",null,t.res))}var j=n(8),O=n.n(j);var S=function(e){var t=e.data,n=Object(r.useState)(0),i=Object(c.a)(n,2),o=i[0],u=i[1],l=t[o];return a.a.createElement("div",{className:O.a.exam},a.a.createElement("img",{src:"./hua.png",alt:"hua"}),a.a.createElement(y,{data:l,answer:l.answer,index:o}),a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){o>0&&u(o-1)},disabled:o<=0},"\u524d\u4e00\u9898"),a.a.createElement("button",{onClick:function(){o<t.length-1&&u(o+1)},disabled:o>=t.length-1},"\u540e\u4e00\u9898")))},I={INIT:1,PLAYING:2,END:3};var x=function(){var e=Object(r.useState)(0),t=Object(c.a)(e,2),n=t[0],i=t[1],o=Object(r.useState)(0),u=Object(c.a)(o,2),s=u[0],f=u[1],m=Object(r.useState)(0),h=Object(c.a)(m,2),v=h[0],E=h[1],b=Object(r.useState)(I.INIT),p=Object(c.a)(b,2),d=p[0],k=p[1],y=Object(r.useState)([]),j=Object(c.a)(y,2),O=j[0],x=j[1];function A(e){x(function(e){return function(e){if("20+-"===e)return g();if("100+-"===e)return C(100);if("1000+-"===e)return C(1e3);if("10000+-"===e)return C(1e4);if("99*/"===e)return w();if("+-*/"===e)return _();throw new Error("Unknown type")}(e)}(e)),i((new Date).getTime()),k(I.PLAYING)}return a.a.createElement("div",{className:l.a.app},a.a.createElement("header",{className:"App-header"},d===I.INIT&&a.a.createElement("div",{className:l.a.start},a.a.createElement("img",{src:"./hua.png",alt:"hua"}),a.a.createElement("div",{className:l.a.welcome},"\u6b22\u8fce\u53c2\u52a0\u53e3\u7b97\u5927\u6311\u6218\uff01"),a.a.createElement("button",{onClick:function(){return A("20+-")}},"\u4e8c\u5341\u4ee5\u5185\u52a0\u51cf\u6cd5"),a.a.createElement("br",null),a.a.createElement("button",{onClick:function(){return A("100+-")}},"\u4e00\u767e\u4ee5\u5185\u52a0\u51cf\u6cd5"),a.a.createElement("br",null),a.a.createElement("button",{onClick:function(){return A("1000+-")}},"\u4e00\u5343\u4ee5\u5185\u52a0\u51cf\u6cd5"),a.a.createElement("br",null),a.a.createElement("button",{onClick:function(){return A("10000+-")}},"\u4e00\u4e07\u4ee5\u5185\u52a0\u51cf\u6cd5"),a.a.createElement("br",null),a.a.createElement("button",{onClick:function(){return A("99*/")}},"\u4e5d\u4e5d\u4e58\u9664\u6cd5"),a.a.createElement("br",null),a.a.createElement("button",{onClick:function(){return A("+-*/")}},"\u56db\u5219\u8fd0\u7b97"),a.a.createElement("div",{className:l.a.info},"\u8c28\u4ee5\u6b64\u7a0b\u5e8f\u5411\u5373\u5fd9\u5de5\u4f5c\u53c8\u5f97\u5b8c\u6210\u8001\u5e08\u5e03\u7f6e\u7684\u4f5c\u4e1a\u7684\u5b9d\u7238\u5b9d\u5988\u4eec\u81f4\u656c\uff01",a.a.createElement("br",null),"\u5982\u6709\u9047\u5230\u95ee\u9898\u6216\u8005\u5efa\u8bae\u8bf7\u70b9",a.a.createElement("a",{href:"https://github.com/SpaceSample/kousuan/issues"},"\u8fd9\u91cc"),"\u3002")),d===I.PLAYING&&a.a.createElement(S,{data:O}),d===I.PLAYING&&a.a.createElement("button",{onClick:function(){f((new Date).getTime());var e=0;O.forEach((function(t){t.answer&&t.isCorrect()&&e++})),E(e),k(I.END)}},"\u4ea4\u5377"),d===I.END&&a.a.createElement("div",{className:l.a.end},a.a.createElement("div",null,"\u7528\u65f6",a.a.createElement("span",null,(s-n)/1e3),"\u79d2"),a.a.createElement("div",null,"\u5171",O.length,"\u9053\u9898\uff0c\u5176\u4e2d",v,"\u9053\u6b63\u786e"),v<O.length/4*3&&a.a.createElement("div",null,"\u7ee7\u7eed\u52aa\u529b\uff01",a.a.createElement("span",{role:"img","aria-label":"come on"},"\ud83d\udcaa\ud83d\udcaa\ud83d\udcaa")),v>=O.length/4*3&&v<O.length&&a.a.createElement("div",null,"\u6210\u7ee9\u4e0d\u9519\u554a\uff01",a.a.createElement("span",{role:"img","aria-label":"smile"},"\ud83d\ude42\ud83d\ude42\ud83d\ude42")),v===O.length&&a.a.createElement("div",null,"\u4f60\u592a\u68d2\u5566\uff0c\u5b8c\u5168\u6b63\u786e",a.a.createElement("span",{role:"img","aria-label":"great"},"\ud83d\udc4d\ud83d\udc4d\ud83d\udc4d")),a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){E(0),k(I.INIT)}},"\u91cd\u65b0\u5f00\u59cb")),a.a.createElement("div",null,O.map((function(e,t){return a.a.createElement(N,{data:e,key:t})}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.880af5ca.chunk.js.map