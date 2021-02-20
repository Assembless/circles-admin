(this["webpackJsonpcircles-admin-panel"]=this["webpackJsonpcircles-admin-panel"]||[]).push([[0],{97:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(0),c=n.n(r),i=n(9),s=n.n(i),o=n(18),l=n(34),d=n(136),u=n(137),j=n(138),p=["en_US","pl_PL","de_DE"],h=n(72),b=Object(h.a)({palette:{type:"light",primary:{main:"#449ee2"},secondary:{main:"#99d8ff"},background:{default:"#FAFAFA"}}}),x=Object(h.a)({palette:{type:"dark",primary:{main:"#99CC66"}}}),m=n(12),O=n(130),f=n(29),v=n.n(f),g=n(142),y={title:{en_US:"Home",de_DE:"Startseite",pl_PL:"Strona g\u0142\xf3wna"}},N=n(126),w=n(128),_=n(129),C={example:{en_US:"Example",de_DE:"Beispiel",pl_PL:"Przyk\u0142ad"}},S=n.p+"static/media/circles-logo.420d4698.svg",P=Object(O.a)((function(e){return Object(g.a)({root:{},toolbar:{height:"10vh",boxShadow:"rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px"},logo:{height:"50px",marginRight:"4%",cursor:"pointer"},navlink:{margin:"0 1.2%"}})})),k=function(e){Object(o.useLittera)(C);var t=P(),n=Object(m.f)();return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(N.a,{elevation:0,position:"static",color:"transparent",children:Object(a.jsxs)(w.a,{className:t.toolbar,children:[Object(a.jsx)("img",{className:t.logo,src:S,onClick:function(){return n.push("/home")}}),Object(a.jsx)(_.a,{className:t.navlink,variant:"contained",color:"secondary",onClick:function(){return n.push("/home")},children:"Home"}),Object(a.jsx)(_.a,{className:t.navlink,variant:"contained",color:"secondary",onClick:function(){return n.push("/home/users")},children:"Users"}),Object(a.jsx)(_.a,{className:t.navlink,variant:"contained",color:"secondary",onClick:function(){return n.push("/home/rooms")},children:"Rooms"})]})})})},A=n(140),L={example:{en_US:"Example",de_DE:"Beispiel",pl_PL:"Przyk\u0142ad"}},E=Object(O.a)((function(e){return Object(g.a)({root:{height:"88vh",display:"flex",flexWrap:"wrap"},container1:{flex:"1",minWidth:"300px",padding:"30px"},top1:{boxShadow:"rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px",padding:"30px",marginBottom:"30px",borderRadius:"4px"},bottom1:{boxShadow:"rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px",padding:"30px",borderRadius:"4px"},statContainer:{height:"130px",borderRadius:"8px"},container2:{flex:"1",padding:"30px"}})})),D=function(e){Object(o.useLittera)(L);var t=E();return Object(a.jsxs)("div",{className:v()(t.root,e.className),style:e.style,children:[Object(a.jsxs)(A.a,{className:t.container1,children:[Object(a.jsxs)(A.a,{className:t.top1,children:[Object(a.jsx)("h2",{children:"Hello 'username'"}),Object(a.jsx)("h3",{children:"Thank you for your contribution in Assembless!"}),Object(a.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolores aut eaque nihil aperiam? Porro velit id odio, distinctio impedit at itaque laboriosam incidunt eum! Nemo doloremque nisi in, iure odio incidunt aperiam laudantium dolores molestias explicabo aspernatur? Ipsam, doloribus?"})]}),Object(a.jsxs)(A.a,{className:t.bottom1,children:[Object(a.jsx)("h3",{children:"Circles Web in numbers"}),Object(a.jsx)(A.a,{className:t.statContainer})]})]}),Object(a.jsx)(A.a,{className:t.container2,children:Object(a.jsx)("h2",{children:"Circles Web"})})]})},R=n(27),T=n(131),F=n(132),U=n(133),W=n(134),B=n(135),I=n(143),H=n(46),z=n.n(H),q=n(63),J=n(57),K=n(64),G=n(15),M=n(16),V=function(){function e(t){Object(G.a)(this,e),this.url=void 0,this.url=t}return Object(M.a)(e,[{key:"makeArguments",value:function(e){return Object.entries(e).map((function(e){return"".concat(e[0],"=").concat("object"===typeof e[1]?JSON.stringify(e[1]):e[1])})).join("&")}},{key:"execute",value:function(e){var t=this;return new Promise((function(n,a){var r=!1,c=e.exec[0],i=t.makeArguments(e.exec[1]),s="".concat(t.url).concat(c,"?").concat(i),o=new Headers({"Access-Control-Allow-Origin":"*","Content-Type":"multipart/form-data"});fetch(s,{mode:"cors",headers:o}).then((function(e){return e.json()})).then((function(e){if(!r){r=!0;var t=e;console.log("\ud83d\udcf6",c,"=>",t),n(t)}})).catch(a)}))}}]),e}(),Y=function(){function e(t){Object(G.a)(this,e),this.exec=void 0,this.status=void 0,this.exec=t,this.status=0}return Object(M.a)(e,[{key:"parse",value:function(e,t){return t}}]),e}(),Q=function(){var e=Object(r.useState)(),t=Object(R.a)(e,2)[1];return Object(r.useCallback)((function(){return t({})}),[])},X=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var c=Object(r.useRef)(null),i=Q();if(null===c.current){var s=e.apply(void 0,n),o=function(e){c.current[0]=e,i()};c.current=[s,o]}return Object(r.useEffect)((function(){var t=e.apply(void 0,n);c.current[0]!==t&&c.current[1](t)}),[e,n]),c.current},Z=new V({host_url:"https://us-central1-ping-82fee.cloudfunctions.net/"}.host_url),$=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var c=Object(r.useRef)(null),i=Q();return Object(r.useEffect)((function(){c.current={status:102},function(){var t=Object(K.a)(z.a.mark((function t(){var a,r;return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n||[],t.next=3,Z.execute(Object(q.a)(e,Object(J.a)(a)));case 3:r=t.sent,c.current=r,i();case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[]),c.current},ee=n(41),te=n(20),ne=n(21),ae=function(e){return null!==e&&102!==e.status},re=function(e){return e.toString().replace(/,/g,", ")},ce=function(e,t){var n=typeof t;"object"===n&&(null===t?n="null":Array.isArray(t)&&(n="array"));for(var a=arguments.length,r=new Array(a>2?a-2:0),c=2;c<a;c++)r[c-2]=arguments[c];if(!r.includes(n))throw new Error("Expected ".concat(re(r)," for ").concat(e,", got ").concat(typeof t));return t},ie=function(e,t){for(var n=e[t],a=arguments.length,r=new Array(a>2?a-2:0),c=2;c<a;c++)r[c-2]=arguments[c];return ce.apply(void 0,[t,n].concat(r)),n},se=function(e){Object(te.a)(n,e);var t=Object(ne.a)(n);function n(e,a){var r;return Object(G.a)(this,n),r=t.call(this,["account-accountList",{volume:a,included:e}]),ce("volume",a,"number","undefined"),ce("included",e,"array","undefined"),r}return Object(M.a)(n,[{key:"parse",value:function(e,t){return t}}]),n}(Y),oe=function(e){Object(te.a)(n,e);var t=Object(ne.a)(n);function n(e){var a;return Object(G.a)(this,n),a=t.call(this,["room-roomList",{volume:e}]),ce("volume",e,"number","undefined"),a}return Object(M.a)(n,[{key:"parse",value:function(e,t){return 200!==e||(ce("data",t,"object"),ie(t,"id","string"),ie(t,"label","string")),t}}]),n}(Y),le={example:{en_US:"Example",de_DE:"Beispiel",pl_PL:"Przyk\u0142ad"}},de=function(){return Object(a.jsx)("div",{children:"userDetails"})},ue=function(e){var t,n,r=e.accounts,c=e.path,i=r.find((function(e){return e.id===c.match.params.id}));return i?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(A.a,{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(a.jsx)(I.a,{style:{height:"110px",width:"110px",marginTop:"20px"},alt:"profile photo",src:i.avatar_url}),(null===(t=i.details)||void 0===t?void 0:t.first_name)&&Object(a.jsx)("h3",{children:null===(n=i.details)||void 0===n?void 0:n.first_name}),Object(a.jsx)("h4",{children:i.label})]}),Object(a.jsx)(A.a,{})]}):Object(a.jsx)("div",{children:"error"})},je=function(e){var t,n,r,c,i,s,o=e.accData,l=pe(),d=Object(m.f)();return Object(a.jsxs)(U.a,{style:{cursor:"pointer"},onClick:function(e){d.push("/home/users/".concat(o.id))},children:[Object(a.jsx)(W.a,{className:l.avatarContainer,children:Object(a.jsx)(I.a,{className:l.avatar,alt:"profile photo",src:null===o||void 0===o?void 0:o.avatar_url})}),Object(a.jsxs)(W.a,{className:l.name,children:[(null===(t=o.details)||void 0===t?void 0:t.first_name)&&(null===(n=o.details)||void 0===n?void 0:n.first_name)," ",(null===(r=o.details)||void 0===r?void 0:r.last_name)&&(null===(c=o.details)||void 0===c?void 0:c.last_name)]}),Object(a.jsx)(W.a,{children:o.label}),Object(a.jsx)(W.a,{children:Object(a.jsxs)(A.a,{className:l.flags,children:[(null===(i=o.flags)||void 0===i?void 0:i.includes("verify_email"))&&Object(a.jsx)("p",{children:"verify"}),(null===(s=o.flags)||void 0===s?void 0:s.includes("needs_init"))&&Object(a.jsx)("p",{children:"init"})]})})]})},pe=Object(O.a)((function(e){return Object(g.a)({root:{height:"90vh",display:"flex"},leftContainer:{width:"25%",minWidth:"300px",padding:"30px",borderRight:"4px solid #e0e0e0"},rightContainer:{flex:"1",minWidth:"300px",overflowY:"scroll"},tableRow:{cursor:"pointer"},categoryName:{opacity:.5,margin:"0"},avatarContainer:{paddingRight:"0px",paddingLeft:"2rem",width:"3%"},avatar:{height:"50px",width:"50px",border:"3px solid #449ee2"},name:{fontSize:"16px",fontWeight:600},flags:{display:"flex"}})})),he=function(e){Object(o.useLittera)(le);var t=pe(),n=$(se,void 0),r=X((function(e){return ae(e)?e.data:null}),n),c=Object(R.a)(r,1)[0];return c?Object(a.jsxs)(A.a,{className:v()(t.root,e.className),style:e.style,children:[Object(a.jsx)(A.a,{className:t.leftContainer,children:Object(a.jsxs)(m.c,{children:[Object(a.jsx)(m.a,{exact:!0,path:"/home/users",component:de}),Object(a.jsx)(m.a,{exact:!0,path:"/home/users/:id",component:function(e){return Object(a.jsx)(ue,{accounts:c,path:e})}})]})}),Object(a.jsx)(A.a,{className:t.rightContainer,children:Object(a.jsxs)(T.a,{children:[Object(a.jsx)(F.a,{children:Object(a.jsxs)(U.a,{children:[Object(a.jsx)(W.a,{}),Object(a.jsx)(W.a,{children:Object(a.jsx)("h4",{className:t.categoryName,children:"Name"})}),Object(a.jsx)(W.a,{children:Object(a.jsx)("h4",{className:t.categoryName,children:"Username"})}),Object(a.jsx)(W.a,{children:Object(a.jsx)("h4",{className:t.categoryName,children:"Flags"})})]})}),Object(a.jsx)(B.a,{children:c.map((function(e,t){return Object(a.jsx)(je,{accData:e},t)}))})]})})]}):Object(a.jsx)("h4",{children:"Loading..."})},be=function(e){var t=e.roomData;return Object(a.jsxs)(U.a,{style:{cursor:"pointer"},children:[Object(a.jsx)(W.a,{children:t.id}),Object(a.jsx)(W.a,{children:t.label}),Object(a.jsx)(W.a,{children:" needs date handling"}),Object(a.jsx)(W.a,{children:"to do parse from string"})]})},xe=Object(O.a)((function(e){return Object(g.a)({root:{},h4:{color:e.palette.primary}})})),me=function(){xe();var e=$(oe),t=X((function(e){return ae(e)?e.data:null}),e),n=Object(R.a)(t,1)[0];return n?Object(a.jsx)(A.a,{children:Object(a.jsxs)(T.a,{children:[Object(a.jsx)(F.a,{children:Object(a.jsxs)(U.a,{children:[Object(a.jsx)(W.a,{children:Object(a.jsx)("h4",{children:"Room ID"})}),Object(a.jsx)(W.a,{children:Object(a.jsx)("h4",{children:"Name"})}),Object(a.jsx)(W.a,{children:Object(a.jsx)("h4",{children:"Created at"})}),Object(a.jsx)(W.a,{children:Object(a.jsx)("h4",{children:"Access"})})]})}),Object(a.jsx)(B.a,{children:n.map((function(e,t){return Object(a.jsx)(be,{roomData:e},t)}))})]})}):Object(a.jsx)("h4",{children:"Loading..."})},Oe=Object(O.a)((function(e){return Object(g.a)({root:{height:"100vh"},toolbar:{height:"10vh",color:e.palette.primary}})})),fe=function(e){Object(o.useLittera)(y);var t=Oe();return Object(a.jsxs)("div",{className:v()(t.root,e.className),style:e.style,children:[Object(a.jsx)(k,{}),Object(a.jsxs)(m.c,{children:[Object(a.jsx)(m.a,{exact:!0,path:"/home",component:D}),Object(a.jsx)(m.a,{path:"/home/users",component:he}),Object(a.jsx)(m.a,{path:"/home/rooms",component:me})]})]})},ve={title:{en_US:"Page not found",de_DE:"Seite nicht gefunden",pl_PL:"Nie znaleziono strony"}},ge=Object(O.a)((function(e){return Object(g.a)({root:{},h4:{color:e.palette.primary}})})),ye=function(e){var t=Object(o.useLittera)(ve),n=ge();return Object(a.jsx)("div",{className:v()(n.root,e.className),style:e.style,children:Object(a.jsx)("h4",{className:n.h4,children:t.title})})},Ne=n(55),we=n(139),_e=n(141),Ce=Object(O.a)((function(e){return{root:{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"},formContainer:{display:"flex",flexDirection:"column",padding:"30px 40px",borderRadius:"8px",boxShadow:"rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px"},topContainer:{display:"flex",flexDirection:"column",alignItems:"center",marginBottom:"20px"},logo:{width:"60px",marginBottom:"15px"},title:{fontWeight:600,fontSize:"18px",margin:"0 20px"},login:{},password:{marginTop:"15px"},btnContainer:{display:"flex",justifyContent:"center",marginTop:"20px"},loginBtn:{width:"150px"},error:{marginTop:"10px"}}})),Se=function(e){var t=Object({NODE_ENV:"production",PUBLIC_URL:"/circles-admin",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_LOGIN:"admin",REACT_APP_PASSWORD:"123456"}),n=t.REACT_APP_LOGIN,a=t.REACT_APP_PASSWORD,r={username:"",password:""};return e.username&&e.username!==n&&(r.username="Username is invalid."),e.username||(r.username="Username is required."),e.password&&e.password!==a&&(r.password="Password is invalid."),e.password||(r.password="Password is required."),r},Pe=function(){var e=Object(m.f)(),t=Ce(),n=Object(r.useState)({username:"",password:""}),c=Object(R.a)(n,2),i=c[0],s=c[1],o=Object(r.useState)({username:"",password:""}),l=Object(R.a)(o,2),d=l[0],u=l[1],j=function(e){s(Object(ee.a)(Object(ee.a)({},i),{},Object(Ne.a)({},e.target.id,e.target.value))),u({username:"",password:""})};return Object(a.jsxs)("div",{className:t.root,children:["Home",Object(a.jsxs)("form",{className:t.formContainer,children:[Object(a.jsxs)(A.a,{className:t.topContainer,children:[Object(a.jsx)("img",{className:t.logo,src:S,alt:"logo"}),Object(a.jsx)("h2",{className:t.title,children:"Circles Administration Panel"})]}),Object(a.jsx)(we.a,{className:t.login,id:"username",label:"Login",variant:"outlined",value:i.username,onChange:j}),d.username&&Object(a.jsx)(_e.a,{className:t.error,severity:"error",children:d.username}),Object(a.jsx)(we.a,{className:t.password,type:"password",id:"password",label:"Password",variant:"outlined",value:i.password,onChange:j}),d.password&&Object(a.jsx)(_e.a,{className:t.error,severity:"error",children:d.password}),Object(a.jsx)(A.a,{className:t.btnContainer,children:Object(a.jsx)(_.a,{className:t.loginBtn,variant:"contained",onClick:function(){var t=Se(i);t.username||t.password?u(t):e.push("/home")},children:"login"})})]})]})},ke=function(){Object(m.g)();return Object(a.jsxs)(m.c,{children:[Object(a.jsx)(m.a,{exact:!0,path:"/",component:Pe}),Object(a.jsx)(m.a,{path:"/home",component:fe}),Object(a.jsx)(m.a,{exact:!0,component:ye})]})};var Ae=function(){var e=Object(d.a)("(prefers-color-scheme: dark)"),t=c.a.useMemo((function(){return e?x:b}),[e]);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(u.a,{}),Object(a.jsx)(j.a,{theme:t,children:Object(a.jsx)(o.LitteraProvider,{initialLocale:"en_US",locales:p,children:Object(a.jsx)(l.a,{children:Object(a.jsx)(ke,{})})})})]})},Le=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,145)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(Ae,{})}),document.getElementById("root")),Le()}},[[97,1,2]]]);
//# sourceMappingURL=main.35453df1.chunk.js.map