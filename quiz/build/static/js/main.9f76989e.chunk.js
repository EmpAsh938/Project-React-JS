(this.webpackJsonpquiz=this.webpackJsonpquiz||[]).push([[0],{15:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(1),a=c.n(n),r=c(8),i=c.n(r),o=(c(15),c(7)),l=c.n(o),j=c(5),u=c(9),b=c(2),d=a.a.createContext(),h={sports:21,history:23,politics:24},O=function(e){var t=e.children,c=Object(n.useState)(!1),a=Object(b.a)(c,2),r=a[0],i=a[1],o=Object(n.useState)(!1),O=Object(b.a)(o,2),m=O[0],x=O[1],p=Object(n.useState)(1),f=Object(b.a)(p,2),v=f[0],y=f[1],N=Object(n.useState)("sports"),g=Object(b.a)(N,2),w=g[0],S=g[1],q=Object(n.useState)("easy"),C=Object(b.a)(q,2),k=C[0],_=C[1],F=Object(n.useState)([]),M=Object(b.a)(F,2),z=M[0],I=M[1],L=Object(n.useState)(!1),Q=Object(b.a)(L,2),A=Q[0],J=Q[1],P=Object(n.useState)(0),R=Object(b.a)(P,2),B=R[0],D=R[1],E=Object(n.useState)(0),H=Object(b.a)(E,2),T=H[0],Y=H[1],G=Object(n.useState)(0),K=Object(b.a)(G,2),U=K[0],V=K[1],W=Object(n.useState)(!1),X=Object(b.a)(W,2),Z=X[0],$=X[1],ee=Object(n.useState)(0),te=Object(b.a)(ee,2),ce=te[0],se=te[1],ne=function(){var e=Object(u.a)(l.a.mark((function e(t){var c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.prev=1,e.next=4,fetch(t);case 4:return c=e.sent,e.next=7,c.json();case 7:s=e.sent,I(Object(j.a)(s.results)),J(!0),i(!1),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(s.jsx)(d.Provider,{value:{isLoading:r,error:m,index:v,subject:w,level:k,handleChange:function(e){var t=e.target.name,c=e.target.value;"number"===t?y(c):"category"===t?S(c):"difficulty"===t&&_(c)},handleStart:function(e){e.preventDefault(),v?(x(!1),ne("https://opentdb.com/api.php?amount=".concat(v,"&category=").concat(h[w],"&difficulty=").concat(k,"&type=multiple"))):x(!0)},showQuestion:A,questions:z,checkAnswer:function(e){if(e===z[U].correct_answer?D(B+1):D(B),Y(T+1),U===v-1){V(U),$(!0);var t=parseInt(B/T*100);se(t.toPrecision())}else V(U+1)},score:B,total:U,showResult:Z,count:T,handleScore:function(){J(!1),i(!1),I(!1),$(!1)},answerCorrectness:ce},children:t})},m=function(){return Object(n.useContext)(d)},x=function(){var e=m(),t=e.handleScore,c=e.answerCorrectness;return Object(s.jsx)("section",{className:"final",children:Object(s.jsxs)("article",{className:"final-box",children:[Object(s.jsx)("h2",{className:"header",children:"congrats!"}),Object(s.jsxs)("p",{className:"final-header",children:["You answered ",c,"% of questions correctly"]}),Object(s.jsx)("button",{onClick:t,className:"btn btn-replay",children:"play again"})]})})},p=function(){var e=m(),t=e.error,c=e.index,n=e.subject,a=e.level,r=e.handleChange,i=e.handleStart;return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("section",{className:"modal",children:Object(s.jsxs)("div",{className:"modal-box",children:[Object(s.jsx)("h2",{className:"header",children:"setup quiz"}),Object(s.jsxs)("form",{className:"modal-form",onSubmit:i,children:[Object(s.jsxs)("div",{className:"form-input",children:[Object(s.jsx)("label",{htmlFor:"questions",number:!0,of:!0,questions:!0,children:"Number of Questions"}),Object(s.jsx)("input",{type:"number",name:"number",id:"questions",min:"1",max:"50",value:c,onChange:r})]}),Object(s.jsxs)("div",{className:"form-input",children:[Object(s.jsx)("label",{htmlFor:"category",children:"category"}),Object(s.jsxs)("select",{name:"category",id:"category",value:n,onChange:r,children:[Object(s.jsx)("option",{value:"sports",children:"sports"}),Object(s.jsx)("option",{value:"history",children:"history"}),Object(s.jsx)("option",{value:"politics",children:"politics"})]})]}),Object(s.jsxs)("div",{className:"form-input",children:[Object(s.jsx)("label",{htmlFor:"difficulty",children:"select difficulty"}),Object(s.jsxs)("select",{name:"difficulty",id:"difficulty",value:a,onChange:r,children:[Object(s.jsx)("option",{value:"easy",children:"easy"}),Object(s.jsx)("option",{value:"medium",children:"medium"}),Object(s.jsx)("option",{value:"hard",children:"hard"})]})]}),Object(s.jsxs)("div",{className:"modal-btn",children:[t&&Object(s.jsx)("p",{className:"error",children:"can't generate questions, please try different options"}),Object(s.jsx)("button",{className:"btn btn-next",onClick:i,children:"start"})]})]})]})})})},f=function(){var e=m().isLoading;return Object(s.jsx)("section",{className:e?"section-loader show-loader":"section-loader",children:Object(s.jsx)("div",{className:"loader"})})},v=function(){var e=m(),t=e.questions,c=e.checkAnswer,n=e.score,a=e.total,r=e.count,i=t[a].question,o=Object(j.a)(t[a].incorrect_answers),l=Math.floor(Math.random()*o.length);return o.splice(l,0,t[a].correct_answer),Object(s.jsx)("div",{className:"question-cont",children:Object(s.jsxs)("section",{className:"question",children:[Object(s.jsxs)("p",{className:"check-answer",children:["correct answers: ",n,"/",r]}),Object(s.jsxs)("article",{className:"question-box",children:[Object(s.jsx)("h2",{className:"header question-header",dangerouslySetInnerHTML:{__html:i}}),Object(s.jsx)("div",{className:"question-btn",children:o.map((function(e,t){return Object(s.jsx)("button",{onClick:function(){return c(e)},className:"btn btn-options",children:e},t)}))})]}),Object(s.jsx)("button",{onClick:c,className:"btn btn-next btn-question",children:"next question"})]})})};var y=function(){var e=m(),t=e.showQuestion,c=e.showResult;return Object(s.jsxs)("main",{children:[Object(s.jsx)(p,{}),Object(s.jsx)(f,{}),t&&Object(s.jsx)(v,{}),c&&Object(s.jsx)(x,{})]})};i.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(O,{children:Object(s.jsx)(y,{})})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.9f76989e.chunk.js.map