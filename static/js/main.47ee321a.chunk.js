(this.webpackJsonpauthentication=this.webpackJsonpauthentication||[]).push([[0],{14:function(e,r,n){},2:function(e,r,n){e.exports={formLogin:"formLogin_formLogin__2NxtA",formLoginError:"formLogin_formLoginError__1bJuJ",formGroup:"formLogin_formGroup__FTdR2",blockPasswordView:"formLogin_blockPasswordView__3OOp1",faViewPassword:"formLogin_faViewPassword__NsQCZ",fromInput:"formLogin_fromInput__1FwSp",formText:"formLogin_formText__1pGZ-",formTextActive:"formLogin_formTextActive__3edaF",submitBtn:"formLogin_submitBtn__2R41W",emptyFieldsError:"formLogin_emptyFieldsError__1zAz5",blockBtn:"formLogin_blockBtn__18riq",submitBtnOff:"formLogin_submitBtnOff__1Ldvj",choiceAuth:"formLogin_choiceAuth__bB1-w",errorFields:"formLogin_errorFields__1Fr1R"}},22:function(e,r,n){},23:function(e,r,n){},24:function(e,r,n){"use strict";n.r(r);var t=n(1),o=n.n(t),i=n(5),a=n.n(i),c=(n(14),n(4)),s=n.n(c),l=n(3),u=function(){return Object(l.b)()},m=l.c,f=n(2),d=n.n(f),j=n(0),b=function(){var e=m((function(e){return e.formSlice.message})),r=m((function(e){return e.formSlice.emptyFields})),n=m((function(e){return e.formSlice.errorFields}));return Object(j.jsxs)("form",{className:n?"".concat(d.a.formLogin," ").concat(d.a.formLoginError):"".concat(d.a.formLogin),children:[Object(j.jsx)(y,{}),Object(j.jsx)(k,{}),"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0448\u043b\u0438 \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435"===e||"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b"===e?null:Object(j.jsx)(N,{}),r?Object(j.jsx)(S,{nameClass:"errorFields",text:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0441\u0435 \u043f\u043e\u043b\u044f"}):null,n?Object(j.jsx)(S,{nameClass:"errorFields",text:"\u041d\u0435\u043a\u043a\u043e\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email \u0438 \u043f\u0430\u0440\u043e\u043b\u044c"}):null]})},g=n(6),h=[{email:"gosha@mail.ru",password:"Gosha15"}],p={email:/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,password:/([a-z]+[A-Z]+[0-9]+|[a-z]+[0-9]+[A-Z]+|[A-Z]+[a-z]+[0-9]+|[A-Z]+[0-9]+[a-z]+|[0-9]+[a-z]+[A-Z]+|[0-9]+[A-Z]+[a-z]+)/},_=Object(g.b)({name:"formSlice",initialState:{email:"",password:"",viewPassword:!1,emptyFields:!1,errorFields:!1,choiceAuth:"enter",message:null,loading:!1},reducers:{changeInput:function(e,r){var n=r.payload,t=n.value,o=n.required;e.emptyFields=!1,e.errorFields=!1,e[o]=t},changeAuth:function(e,r){e.choiceAuth!==r.payload&&(e.emptyFields=!1,e.errorFields=!1,e.email="",e.password="",e.message=null,e.choiceAuth=r.payload)},changePasswordView:function(e,r){e.viewPassword=!e.viewPassword},changeLoading:function(e,r){e.loading=!e.loading},submitForm:function(e,r){e.message=null;var n=e.email,t=e.password;[n,t].every((function(e){return""!==e.trim()}))?!function(e){return e.every((function(e){return p[e.required].test(e.value)}))}([{value:n,required:"email"},{value:t,required:"password"}])?e.errorFields=!0:"enter"===r.payload?!function(e,r){return h.find((function(n){return n.email===e&&n.password===r}))}(n,t)?e.message="\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0435 \u043b\u043e\u0433\u0438\u043d \u0438 \u043f\u0430\u0440\u043e\u043b\u044c":e.message="\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0448\u043b\u0438 \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435":"registration"===r.payload&&(!function(e){if(h.find((function(r){return r.email===e.email})))return!0;h.push(e)}({email:n,password:t})?e.message="\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b":e.message="\u0422\u0430\u043a\u043e\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442"):e.emptyFields=!0}}}),x=_.actions,O=x.changeInput,v=x.changePasswordView,w=x.submitForm,F=x.changeAuth,L=x.changeLoading,A=_.reducer,y=function(){var e=u(),r=m((function(e){return e.formSlice.choiceAuth})),n=function(r,n){e(F(n))},t="enter"===r?"".concat(d.a.formText," ").concat(d.a.formTextActive):d.a.formText,o="registration"===r?"".concat(d.a.formText," ").concat(d.a.formTextActive):d.a.formText;return Object(j.jsxs)("div",{className:d.a.choiceAuth,children:[Object(j.jsx)("p",{onClick:function(e){return n(0,"enter")},className:t,children:"\u0412\u0445\u043e\u0434"}),Object(j.jsx)("p",{onClick:function(e){return n(0,"registration")},className:o,children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})]})},N=function(){var e=u(),r=m((function(e){return e.formSlice.errorFields})),n=m((function(e){return e.formSlice.emptyFields})),t=m((function(e){return e.formSlice.choiceAuth})),o="enter"===t?"\u0412\u043e\u0439\u0442\u0438":"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f";return Object(j.jsx)("button",{onClick:function(o){return function(o){o.preventDefault(),r||n||(e(L()),setTimeout((function(){e(w(t)),e(L())}),1e3))}(o)},className:n||r?"".concat(d.a.submitBtnOff," ").concat(d.a.submitBtn):d.a.submitBtn,type:"submit",children:o})},k=function(){var e=u(),r=m((function(e){return e.formSlice.viewPassword})),n=m((function(e){return e.formSlice.email})),t=m((function(e){return e.formSlice.password})),o=function(r){var n=r.target.value,t=r.target.dataset.required;e(O({value:n,required:t}))};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:d.a.formGroup,children:[Object(j.jsx)("label",{htmlFor:"email",children:"Email"}),Object(j.jsx)("input",{onChange:function(e){return o(e)},value:n,className:d.a.fromInput,type:"email",id:"email",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email","data-required":"email"})]}),Object(j.jsxs)("div",{className:d.a.formGroup,children:[Object(j.jsx)("label",{htmlFor:"password",children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(j.jsxs)("div",{className:d.a.blockPasswordView,children:[Object(j.jsx)("input",{onChange:function(e){return o(e)},value:t,className:d.a.fromInput,type:r?"text":"password",id:"password",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c","data-required":"password"}),Object(j.jsx)("i",{onClick:function(r){e(v())},className:"".concat(d.a.faViewPassword,r?" fa fa-eye-slash fa-lg":" fa fa-eye fa-lg")})]})]})," "]})},S=function(e){var r=e.nameClass,n=e.text;return Object(j.jsx)("p",{className:d.a[r],children:n})},z=(n(22),function(){return Object(j.jsxs)("div",{className:"lds-ring",children:[Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{})]})}),B=function(){var e=m((function(e){return e.formSlice.loading})),r=m((function(e){return e.formSlice.message})),n=r?Object(j.jsx)("p",{className:s.a.message,children:r}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("p",{children:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c \u0432 \u043c\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435"}),Object(j.jsx)("p",{children:"Email \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0442\u0438\u043f\u0430: nick@mail.com."}),Object(j.jsx)("p",{children:"\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0446\u0438\u0444\u0440 \u0438 \u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0438\u0445 \u0431\u0443\u043a\u0432 \u0432\u0435\u0440\u0445\u043d\u0435\u0433\u043e \u0438 \u043d\u0438\u0436\u043d\u0435\u0433\u043e \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430."})]});return Object(j.jsxs)("div",{className:s.a.login,children:[Object(j.jsx)("div",{className:s.a.blockFrom,children:Object(j.jsx)(b,{})}),Object(j.jsx)("div",{className:s.a.blockInfo,children:e?Object(j.jsx)(z,{}):n})]})};n(23);var P=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(B,{})})},T=Object(g.a)({reducer:{formSlice:A}});a.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(l.a,{store:T,children:Object(j.jsx)(P,{})})}),document.getElementById("root"))},4:function(e,r,n){e.exports={login:"login_login__1BJmN",blockInfo:"login_blockInfo__1S9Vd",blockFrom:"login_blockFrom__1wZt7",message:"login_message__1ewjb"}}},[[24,1,2]]]);
//# sourceMappingURL=main.47ee321a.chunk.js.map