(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{12:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(7),s=n.n(a),o=(n(12),n(3)),u=n.n(o),i=n(4),l=n(2),b=n(0),j=Object(r.createContext)({changeOpenSlot:function(){},openSlot:-1,addListener:function(){}}),d=function(e){var t=e.children,n=e.openSlot,c=e.onChange,a=Object(r.useRef)((function(){}));return Object(b.jsx)("div",{className:"accordion-wrapper",children:Object(b.jsx)(j.Provider,{value:{openSlot:n,changeOpenSlot:function(e){c&&c(e,n),a.current(e)},addListener:function(e){a.current=e}},children:t})})};d.defaultProps={onChange:void 0};var O=d,m=function(e){var t=e.children,n=e.title,c=e.slotKey,a=e.onNext,s=e.onClose,o=Object(r.useContext)(j),u=o.openSlot,i=o.changeOpenSlot,l=o.addListener,d=u===c;return Object(r.useEffect)((function(){d&&l((function(e){s(e)}))}),[s]),Object(b.jsxs)("div",{className:"accordion-tab-wrapper",children:[Object(b.jsx)("div",{role:"button",onKeyPress:function(e){"Enter"!==e.key||d||i(c)},className:"accordion-tab-title",onClick:function(){d||i(c)},tabIndex:0,children:Object(b.jsx)("p",{children:n})}),Object(b.jsxs)("div",{className:"accordion-tab-body".concat(d?" show":""),children:[t,Object(b.jsx)("button",{type:"button",className:"accordion-next-button",onClick:a,children:"Next >"})]})]})},p=/^[a-z ,.'-]+$/i,f=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,h=/^[0-9]*$/,x={firstname:function(e){return p.test(e)&&e.length>1&&e.length<=30},surname:function(e){return p.test(e)&&e.length>1&&e.length<=30},email:function(e){return f.test(e)&&e.length>5&&e.length<=80},dob:function(e){return e instanceof Date},gender:function(e){return"M"===e||"F"===e},telephone:function(e){return h.test(e)&&e.length>1&&e.length<=30},comments:function(e){return e.length<=300}},v=function(e){var t=e.onComplete,n=Object(r.useState)(""),c=Object(l.a)(n,2),a=c[0],s=c[1],o=Object(r.useState)(!1),u=Object(l.a)(o,2),i=u[0],j=u[1],d=Object(r.useState)(""),O=Object(l.a)(d,2),p=O[0],f=O[1],h=Object(r.useState)(!1),v=Object(l.a)(h,2),g=v[0],N=v[1],S=Object(r.useState)(""),y=Object(l.a)(S,2),C=y[0],w=y[1],k=Object(r.useState)(!1),L=Object(l.a)(k,2),B=L[0],D=L[1],F=Object(r.useState)(!1),E=Object(l.a)(F,2),P=E[0],T=E[1],K=function(){var e=!1;return x.firstname(a)?j(!1):(j(!0),e=!0),x.surname(p)?N(!1):(N(!0),e=!0),x.email(C)?D(!1):(D(!0),e=!0),!e};return Object(b.jsxs)(m,{slotKey:"details",title:"Step 1: Your details",onNext:function(){K()?t({firstname:a,surname:p,email:C}):T(!0)},onClose:function(e){K()?t({firstname:a,surname:p,email:C},e):T(!0)},children:[Object(b.jsxs)("label",{className:"input-label".concat(i?" error":""),children:[Object(b.jsx)("p",{children:"First Name"}),Object(b.jsx)("input",{type:"text",maxLength:30,value:a,onChange:function(e){s(e.target.value)},onBlur:function(){P&&K()}})]}),Object(b.jsxs)("label",{className:"input-label".concat(g?" error":""),children:[Object(b.jsx)("p",{children:"Surname"}),Object(b.jsx)("input",{type:"text",maxLength:30,value:p,onChange:function(e){f(e.target.value)},onBlur:function(){P&&K()}})]}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{className:"input-label".concat(B?" error":""),children:[Object(b.jsx)("p",{children:"Email Address"}),Object(b.jsx)("input",{type:"email",maxLength:80,value:C,onChange:function(e){w(e.target.value)},onBlur:function(){P&&K()}})]})]})},g=function(e){var t=e.onComplete,n=Object(r.useState)(""),c=Object(l.a)(n,2),a=c[0],s=c[1],o=Object(r.useState)(!1),u=Object(l.a)(o,2),i=u[0],j=u[1],d=Object(r.useState)(!1),O=Object(l.a)(d,2),p=O[0],f=O[1],h=function(){var e=!1;return x.comments(a)?j(!1):(j(!0),e=!0),!e};return Object(b.jsx)(m,{slotKey:"final",title:"Step 3: Final comments",onNext:function(){h()?t({comments:a}):f(!0)},onClose:function(e){h()?t({comments:a},e):f(!0)},children:Object(b.jsxs)("label",{className:"input-label".concat(i?" error":""),children:[Object(b.jsx)("p",{children:"Comments"}),Object(b.jsx)("textarea",{onBlur:function(){p&&h()},value:a,onChange:function(e){s(e.target.value)}})]})})},N=n(5),S=function(e){var t=e.onComplete,n=Object(r.useState)(""),c=Object(l.a)(n,2),a=c[0],s=c[1],o=Object(r.useState)(!1),u=Object(l.a)(o,2),i=u[0],j=u[1],d=Object(r.useState)(""),O=Object(l.a)(d,2),p=O[0],f=O[1],h=Object(r.useState)(!1),v=Object(l.a)(h,2),g=v[0],S=v[1],y=Object(r.useState)({mm:0,yy:0,dd:0}),w=Object(l.a)(y,2),k=w[0],L=w[1],B=Object(r.useState)(!1),D=Object(l.a)(B,2),F=D[0],E=D[1],P=Object(r.useState)(!1),T=Object(l.a)(P,2),K=T[0],M=T[1],A=function(){var e=!1;return x.telephone(a)?j(!1):(j(!0),e=!0),x.gender(p)?S(!1):(S(!0),e=!0),x.dob(C(k))?E(!1):(E(!0),e=!0),!e};return Object(b.jsxs)(m,{slotKey:"more",title:"Step 2: More comments",onNext:function(){A()?t({phoneNumber:a,gender:p,dob:k}):M(!0)},onClose:function(e){A()?t({phoneNumber:a,gender:p,dob:k},e):M(!0)},children:[Object(b.jsxs)("label",{className:"input-label".concat(i?" error":""),children:[Object(b.jsx)("p",{children:"Telephone Number"}),Object(b.jsx)("input",{maxLength:30,type:"number",value:a,onChange:function(e){s(e.target.value)},onBlur:function(){K&&A()}})]}),Object(b.jsxs)("label",{className:"input-label".concat(g?" error":""),children:[Object(b.jsx)("p",{children:"Gender"}),Object(b.jsxs)("div",{className:"select-wrapper",children:[Object(b.jsx)("span",{className:"select-v",children:"v"}),Object(b.jsxs)("select",{onBlur:function(){K&&A()},onChange:function(e){f(e.target.value),S(!1)},value:p,children:[Object(b.jsx)("option",{className:"select-placeholder",value:"",disabled:!0,selected:!0,hidden:!0,children:"Select Gender"}),Object(b.jsx)("option",{children:"M"}),Object(b.jsx)("option",{children:"F"})]})]})]}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{className:"input-label".concat(F?" error":""),children:[Object(b.jsx)("p",{children:"Dob"}),Object(b.jsx)("input",{type:"number",maxLength:2,value:k.dd||"",className:"dob-input",onBlur:function(){K&&A()},onChange:function(e){L((function(t){var n=Object(N.a)({},t);return n.dd=Number(e.target.value),n}))}}),Object(b.jsx)("input",{type:"number",maxLength:2,value:k.mm||"",className:"dob-input",onBlur:function(){K&&A()},onChange:function(e){L((function(t){var n=Object(N.a)({},t);return n.mm=Number(e.target.value),n}))}}),Object(b.jsx)("input",{type:"number",maxLength:4,value:k.yy||"",className:"dob-input",onBlur:function(){K&&A()},onChange:function(e){L((function(t){var n=Object(N.a)({},t);return n.yy=Number(e.target.value),n}))}})]})]})},y=function(){return Object(b.jsx)("div",{style:{position:"fixed",top:20,width:"100%",color:"red",textAlign:"center"},children:"There was an Error posting your details to the server."})},C=function(e){var t=e.mm,n=e.yy,r=e.dd;if(r>31||r<1||t>12||t<1||n<1900||n>2021)return!1;var c=new Date;return c.setFullYear(n,t,r),c};var w=function(e){var t=e.sendData,n=e.networkError,c=Object(r.useState)("details"),a=Object(l.a)(c,2),s=a[0],o=a[1],u=Object(r.useRef)({});return Object(b.jsxs)("div",{className:"Main",children:[n?Object(b.jsx)(y,{}):null,Object(b.jsxs)(O,{openSlot:s,children:[Object(b.jsx)(v,{onComplete:function(e,t){u.current.details=e,o(t||"more")}}),Object(b.jsx)(S,{onComplete:function(e,t){u.current.more=e,o(t||"final")}}),Object(b.jsx)(g,{onComplete:function(e,n){u.current.final=e,n?o(n):u.current.details?u.current.more?t(u.current):o("more"):o("details")}})]})]})},k=function(){var e=Object(i.a)(u.a.mark((function e(t){var n,r,c,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.details&&t.final&&t.more){e.next=2;break}return e.abrupt("return",!1);case 2:if(n=C(t.more.dob)){e.next=5;break}return e.abrupt("return",!1);case 5:return r={firstname:t.details.firstname,surname:t.details.surname,email:t.details.email,dob:n,gender:t.more.gender,comments:t.final.comments,telephone:t.more.phoneNumber},e.prev=6,e.next=9,fetch("/api/saveDetails",{method:"POST",cache:"no-cache",headers:{"Content-Type":"application/json"},referrerPolicy:"no-referrer",body:JSON.stringify(r)});case 9:if(c=e.sent){e.next=12;break}return e.abrupt("return",!1);case 12:return e.next=14,c.json();case 14:return a=e.sent,e.abrupt("return",a);case 18:return e.prev=18,e.t0=e.catch(6),console.error(e.t0),e.abrupt("return",!1);case 22:case"end":return e.stop()}}),e,null,[[6,18]])})));return function(t){return e.apply(this,arguments)}}(),L=(n(15),function(e){var t=e.responseData;return Object(b.jsxs)("div",{className:"results",children:[Object(b.jsx)("h2",{children:"Great! Thanks for submitting your response!"}),Object(b.jsx)("div",{className:"results-details-list",children:Object.entries(t).map((function(e){var t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(b.jsxs)("div",{className:"result-line",children:[Object(b.jsx)("span",{className:"result-details-key",children:n}),":"," ",Object(b.jsx)("span",{className:"result-details-text",children:r})]},n)}))})]})});var B=function(){var e=Object(r.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(),s=Object(l.a)(a,2),o=s[0],j=s[1],d=function(){var e=Object(i.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(t);case 2:(n=e.sent)?(j(n),c(!1)):c(!0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return o?Object(b.jsx)(L,{responseData:o}):Object(b.jsx)(w,{networkError:n,sendData:d})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(B,{})}),document.getElementById("root")),D()}},[[16,1,2]]]);
//# sourceMappingURL=main.af9750a3.chunk.js.map