(this["webpackJsonphacker-news"]=this["webpackJsonphacker-news"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(2),r=n.n(c),s=n(5),o=n.n(s),i=(n(13),n(1)),u=n(4),l=n.n(u),b=n(6),j=n(7),h="SET_LOADING",d="SET_STORIES",p="REMOVE_STORY",O="HANDLE_PAGE",_="HANDLE_SEARCH",f=function(e,t){switch(t.type){case h:return Object(i.a)(Object(i.a)({},e),{},{isLoading:!0});case d:return Object(i.a)(Object(i.a)({},e),{},{isLoading:!1,hits:t.payload.hits,nbPages:t.payload.nbPages});case O:if("INCREMENT"===t.payload.behaviour){var n=e.page+1;return n>e.nbPages&&(n=0),Object(i.a)(Object(i.a)({},e),{},{page:n})}if("DECREMENT"===t.payload.behaviour){var a=e.page-1;return a<0&&(a=50),Object(i.a)(Object(i.a)({},e),{},{page:a})}break;case p:var c=e.hits.filter((function(e){return e.objectID!==t.payload}));return Object(i.a)(Object(i.a)({},e),{},{hits:c});case _:return Object(i.a)(Object(i.a)({},e),{},{query:t.payload});default:throw new Error("no matching type action")}},m={isLoading:!1,hits:[],nbPages:0,page:0,query:""},x=r.a.createContext(),v=function(e){var t=e.children,n=Object(c.useReducer)(f,m),r=Object(j.a)(n,2),s=r[0],o=r[1],u=function(){var e=Object(b.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o({type:h}),e.prev=1,e.next=4,fetch(t);case 4:return n=e.sent,e.next=7,n.json();case 7:a=e.sent,o({type:d,payload:{hits:a.hits,nbPages:a.nbPages}}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){u("".concat("https://hn.algolia.com/api/v1/search?","query=").concat(s.query,"&page=").concat(s.page))}),[s.page,s.query]);return Object(a.jsx)(x.Provider,{value:Object(i.a)(Object(i.a)({},s),{},{handleClick:function(e){o({type:O,payload:{behaviour:e}})},handleRemove:function(e){o({type:p,payload:e})},handleSearch:function(e){o({type:_,payload:e})}}),children:t})},g=function(){return Object(c.useContext)(x)},y=function(){var e=g(),t=e.query,n=e.handleSearch,r=Object(c.useRef)(null);return Object(c.useEffect)((function(){r.current.focus()}),[]),Object(a.jsxs)("form",{className:"form-container",onSubmit:function(e){return e.preventDefault()},children:[Object(a.jsx)("h1",{className:"form-container__header",children:"Search hacker news"}),Object(a.jsx)("input",{type:"text",className:"form-container__input",value:t,ref:r,onChange:function(e){return n(e.target.value)}})]})},N=function(){var e=g(),t=e.handleClick,n=e.page,c=e.nbPages;return Object(a.jsxs)("div",{className:"button-container",children:[Object(a.jsx)("button",{className:"button-container__btn",onClick:function(){return t("DECREMENT")},children:"prev"}),Object(a.jsxs)("p",{className:"button-container__text",children:[" ",n," of ",c]}),Object(a.jsx)("button",{className:"button-container__btn",onClick:function(){return t("INCREMENT")},children:"next"})]})},E=function(){var e=g(),t=e.isLoading,n=e.hits,c=e.handleRemove;return t?Object(a.jsx)("div",{className:"loader"}):0===n.length?Object(a.jsx)("div",{className:"article__content__header error",children:"Could Not Found"}):Object(a.jsx)("div",{className:"article",children:n.map((function(e){var t=e.title,n=e.url,r=e.author,s=e.points,o=e.num_comments,i=e.objectID;return Object(a.jsxs)("article",{className:"article__content",children:[Object(a.jsx)("h3",{className:"article__content__header",children:t}),Object(a.jsxs)("p",{className:"article__content__text",children:[s," points by ",r," | ",o," comments"]}),Object(a.jsxs)("div",{className:"article__content__btn-container",children:[Object(a.jsx)("a",{href:n,target:"_blank",rel:"noopener noreferrer",className:"article__content__btn-container__link",children:"Read more"}),Object(a.jsx)("button",{className:"article__content__btn-container__btn",onClick:function(){return c(i)},children:"remove"})]})]},i)}))})};var k=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(y,{}),Object(a.jsx)(N,{}),Object(a.jsx)(E,{})]})};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(v,{children:Object(a.jsx)(k,{})})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.8debd0ca.chunk.js.map