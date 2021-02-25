(this["webpackJsonpcircles-admin-panel"]=this["webpackJsonpcircles-admin-panel"]||[]).push([[0],{97:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(0),c=n.n(r),i=n(9),o=n.n(i),s=n(46),l=n(33),d=n(138),j=n(139),u=n(140),b=["en_US","pl_PL","de_DE"],h=n(72),x=Object(h.a)({palette:{type:"light",primary:{main:"#449ee2"},background:{default:"#FAFAFA"}}}),m=Object(h.a)({palette:{type:"dark",primary:{main:"#99CC66"}}}),p=n(12),f=n(132),O=n(28),v=n.n(O),g=n(144),y=n(126),N=n(128),w=n(142),C=n(129),k=n(130),S=n(131),_=n.p+"static/media/circles-logo.420d4698.svg",I=Object(f.a)((function(e){return Object(g.a)({root:{},toolbar:{height:"10vh",boxShadow:"rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px",display:"flex",justifyContent:"space-between",alignItems:"center"},navContainer:{display:"flex",alignItems:"center"},logo:{height:"43px",marginRight:"3vw",cursor:"pointer"},navLinks:{display:"flex",alignItems:"center"},navIcon:{marginRight:"5px",color:"#449ee2"},navText:{opacity:.8,fontSize:"14px"},navLink:{display:"flex",alignItems:"center",cursor:"pointer",marginRight:"1.5rem",transition:"0.1s ease",fontSize:"14px",textTransform:"uppercase",letterSpacing:"0.6px","&:hover":{color:"#449ee2"}}})})),T=function(){var e=I(),t=Object(p.f)();return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(y.a,{elevation:0,position:"static",color:"transparent",children:Object(a.jsxs)(N.a,{className:e.toolbar,children:[Object(a.jsxs)(w.a,{className:e.navContainer,children:[Object(a.jsx)("img",{className:e.logo,src:_,onClick:function(){return t.push("/home")}}),Object(a.jsxs)(w.a,{className:e.navLinks,children:[Object(a.jsxs)(w.a,{className:e.navLink,onClick:function(){return t.push("/home")},children:[Object(a.jsx)(C.a,{className:e.navIcon,children:"home"}),Object(a.jsx)(k.a,{className:e.navText,children:"Home"})]}),Object(a.jsxs)(w.a,{className:e.navLink,onClick:function(){return t.push("/home/users")},children:[Object(a.jsx)(C.a,{className:e.navIcon,children:"people_alt"}),Object(a.jsx)(k.a,{className:e.navText,children:"Users"})]}),Object(a.jsxs)(w.a,{className:e.navLink,onClick:function(){return t.push("/home/rooms")},children:[Object(a.jsx)(C.a,{className:e.navIcon,children:"meeting_room"}),Object(a.jsx)(k.a,{className:e.navText,children:"Rooms"})]})]})]}),Object(a.jsx)(S.a,{variant:"outlined",color:"secondary",size:"small",onClick:function(){localStorage.removeItem("token"),t.push("/")},children:"logout"})]})})})},L=n(17),A=n(45),z=n.n(A),D=n(63),P=n(57),B=n(64),F=n(14),R=n(15),W=function(){function e(t){Object(F.a)(this,e),this.url=void 0,this.url=t}return Object(R.a)(e,[{key:"makeArguments",value:function(e){return Object.entries(e).map((function(e){return"".concat(e[0],"=").concat("object"===typeof e[1]?JSON.stringify(e[1]):e[1])})).join("&")}},{key:"execute",value:function(e){var t=this;return new Promise((function(n,a){var r=!1,c=e.exec[0],i=t.makeArguments(e.exec[1]),o="".concat(t.url).concat(c,"?").concat(i),s=new Headers({"Access-Control-Allow-Origin":"*","Content-Type":"multipart/form-data"});fetch(o,{mode:"cors",headers:s}).then((function(e){return e.json()})).then((function(e){if(!r){r=!0;var t=e;console.log("\ud83d\udcf6",c,"=>",t),n(t)}})).catch(a)}))}}]),e}(),E=function(){function e(t){Object(F.a)(this,e),this.exec=void 0,this.status=void 0,this.exec=t,this.status=0}return Object(R.a)(e,[{key:"parse",value:function(e,t){return t}}]),e}(),U=function(){var e=Object(r.useState)(),t=Object(L.a)(e,2)[1];return Object(r.useCallback)((function(){return t({})}),[])},H=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var c=Object(r.useRef)(null),i=U();if(null===c.current){var o=e.apply(void 0,n),s=function(e){c.current[0]=e,i()};c.current=[o,s]}return Object(r.useEffect)((function(){var t=e.apply(void 0,n);c.current[0]!==t&&c.current[1](t)}),[e,n]),c.current},J=function(){var e=Object(r.useState)(function(){var e=localStorage.getItem("token");if(!e)return"";var t=null;try{t=atob(e)}catch(a){}var n=1e3*Number(t);new Date(n);return t}()),t=Object(L.a)(e,2),n=t[0],a=t[1],c=function(){var e=Date.now();return btoa(e.toString())};return{setToken:function(e){e||(e=c()),localStorage.setItem("token",e),a(e)},token:n}},q=new W({host_url:"https://us-central1-ping-82fee.cloudfunctions.net/"}.host_url),M=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var c=Object(r.useRef)(null),i=U();return Object(r.useEffect)((function(){c.current={status:102},function(){var t=Object(B.a)(z.a.mark((function t(){var a,r;return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n||[],t.next=3,q.execute(Object(D.a)(e,Object(P.a)(a)));case 3:r=t.sent,c.current=r,i();case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[]),c.current},Y=n(40),G=n(18),K=n(19),Q=function(e){return null!==e&&102!==e.status},V=function(e){return e.toString().replace(/,/g,", ")},X=function(e,t){var n=typeof t;"object"===n&&(null===t?n="null":Array.isArray(t)&&(n="array"));for(var a=arguments.length,r=new Array(a>2?a-2:0),c=2;c<a;c++)r[c-2]=arguments[c];if(!r.includes(n))throw new Error("Expected ".concat(V(r)," for ").concat(e,", got ").concat(typeof t));return t},Z=function(e,t){for(var n=e[t],a=arguments.length,r=new Array(a>2?a-2:0),c=2;c<a;c++)r[c-2]=arguments[c];return X.apply(void 0,[t,n].concat(r)),n},$=function(e){Object(G.a)(n,e);var t=Object(K.a)(n);function n(e,a){var r;return Object(F.a)(this,n),r=t.call(this,["account-accountList",{volume:a,included:e}]),X("volume",a,"number","undefined"),X("included",e,"array","undefined"),r}return Object(R.a)(n,[{key:"parse",value:function(e,t){return t}}]),n}(E),ee=function(e){Object(G.a)(n,e);var t=Object(K.a)(n);function n(e){var a;return Object(F.a)(this,n),a=t.call(this,["room-roomList",{volume:e}]),X("volume",e,"number","undefined"),a}return Object(R.a)(n,[{key:"parse",value:function(e,t){return 200!==e||(X("data",t,"object"),Z(t,"id","string")),t}}]),n}(E),te=Object(f.a)((function(e){return Object(g.a)({root:{height:"88vh",backgroundColor:"#f2f2f2",padding:"40px 20px",overflowY:"scroll"},title:{fontSize:"120px",fontWeight:"bold",letterSpacing:"1px",opacity:"0.08",textAlign:"center",marginBottom:"30px"},iconContainer:{display:"flex",flexDirection:"column",alignItems:"center"},icon:{fontSize:"90px",color:"#449ee2"},number:{fontSize:"152px",color:"#fff",fontWeight:600,lineHeight:"1",textShadow:"3px 4px 7px rgba(0,0,0,0.3)"}})})),ne=function(e){var t=te(),n=M(ee),r=H((function(e){return Q(e)?e.data:null}),n),c=Object(L.a)(r,1)[0],i=M($,void 0),o=H((function(e){return Q(e)?e.data:null}),i),s=Object(L.a)(o,1)[0];return Object(a.jsxs)("div",{className:v()(t.root,e.className),style:e.style,children:[Object(a.jsx)(k.a,{variant:"h2",className:t.title,children:"Our numbers"}),Object(a.jsxs)(w.a,{display:"flex",justifyContent:"center",children:[Object(a.jsxs)(w.a,{className:t.iconContainer,margin:"0 50px",children:[Object(a.jsx)(C.a,{className:t.icon,children:"people_alt"}),Object(a.jsx)(k.a,{className:t.number,children:null===s||void 0===s?void 0:s.length})]}),Object(a.jsxs)(w.a,{className:t.iconContainer,margin:"0 50px",children:[Object(a.jsx)(C.a,{className:t.icon,children:"meeting_room"}),Object(a.jsx)(k.a,{className:t.number,children:null===c||void 0===c?void 0:c.length})]})]})]})},ae=n(133),re=n(134),ce=n(135),ie=n(136),oe=n(137),se=n(145),le=function(e){var t,n,r,c,i=e.accounts,o=e.path,s=e.setShowSidebar,l=Object(p.f)(),d=ue(),j=i.find((function(e){return e.id===o.match.params.id}));return j?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(w.a,{children:[Object(a.jsx)(w.a,{style:{textAlign:"end"},children:Object(a.jsx)(S.a,{onClick:function(){s(!1),l.push("/home/users")},children:"close"})}),Object(a.jsxs)(w.a,{display:"flex",flexDirection:"column",alignItems:"center",children:[Object(a.jsx)(se.a,{style:{height:"140px",width:"140px",marginTop:"20px"},alt:"profile photo",src:j.avatar_url}),Object(a.jsx)(k.a,{style:{margin:"10px 0 40px 0",fontWeight:"bold"},children:j.label})]}),j.details&&Object(a.jsxs)(w.a,{className:d.detailsContainer,children:[Object(a.jsx)(de,{icon:"people_alt",title:"Names",detail:null===(t=j.details)||void 0===t?void 0:t.first_name,color:"red"}),Object(a.jsx)(de,{icon:"people_alt",title:"Surname",detail:null===(n=j.details)||void 0===n?void 0:n.last_name,color:"green"}),Object(a.jsx)(de,{icon:"cake",title:"Birthdate",detail:null===(r=j.details)||void 0===r?void 0:r.birthdate,color:"blue"}),Object(a.jsx)(de,{icon:"wc",title:"Sex",detail:null===(c=j.details)||void 0===c?void 0:c.sex,color:"pink"})]}),Object(a.jsx)(de,{icon:"email",title:"Email",detail:j.contact.email,color:"darkblue"})]}),Object(a.jsx)(w.a,{})]}):Object(a.jsx)("div",{children:"error"})},de=function(e){var t=ue();return Object(a.jsxs)(w.a,{display:"flex",alignItems:"center",marginBottom:"20px",children:[Object(a.jsx)(w.a,{boxShadow:1,style:{borderRadius:"50%",width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(a.jsx)(C.a,{style:{opacity:.6,fontSize:"21px",color:"".concat(e.color)},children:e.icon})}),Object(a.jsxs)(w.a,{className:t.detailContainer,children:[Object(a.jsx)(k.a,{variant:"h6",className:t.detailTitle,children:e.title}),Object(a.jsx)(k.a,{className:t.detail,children:e.detail})]})]})},je=function(e){var t,n,r,c,i=e.accData,o=e.setShowSidebar,s=ue(),l=Object(p.f)();return console.log(i.details),Object(a.jsxs)(ce.a,{hover:!0,style:{cursor:"pointer"},onClick:function(e){l.push("/home/users/".concat(i.id)),o(!0)},children:[Object(a.jsx)(ie.a,{className:s.avatarContainer,children:Object(a.jsx)(se.a,{className:s.avatar,alt:"profile photo",src:null===i||void 0===i?void 0:i.avatar_url})}),Object(a.jsx)(ie.a,{children:i.details?Object(a.jsxs)(k.a,{className:s.name,children:[null===(t=i.details)||void 0===t?void 0:t.first_name," ",null===(n=i.details)||void 0===n?void 0:n.last_name]}):Object(a.jsx)(k.a,{className:s.notProvided,children:"Not provided"})}),Object(a.jsx)(ie.a,{children:Object(a.jsx)(k.a,{children:i.label})}),Object(a.jsx)(ie.a,{children:Object(a.jsx)(w.a,{className:s.flags,children:Object(a.jsxs)(k.a,{children:[(null===(r=i.flags)||void 0===r?void 0:r.includes("verify_email"))&&"verify"," ",(null===(c=i.flags)||void 0===c?void 0:c.includes("needs_init"))&&"init"]})})}),Object(a.jsx)(ie.a,{children:Object(a.jsx)(C.a,{className:s.trashIcon,color:"secondary",onClick:function(e){e.stopPropagation(),console.log(i.id)},children:"delete_forever"})})]})},ue=Object(f.a)((function(e){return Object(g.a)({root:{height:"90vh",display:"flex",justifyContent:"center",backgroundColor:"#f2f2f2"},sidebar:{width:"25%",minWidth:"300px",padding:"30px",boxShadow:" 4px 3px 7px 0 rgba(0, 0, 0, 0.15)",backgroundColor:"#fff"},tableContainer:{display:"flex",justifyContent:"center",flex:"1",minWidth:"300px",overflowY:"scroll"},table:{marginTop:"40px",width:"92%",backgroundColor:"#fff"},tableRow:{cursor:"pointer"},columnName:{fontSize:"14px",fontWeight:"bold",opacity:.4,margin:"0"},avatarContainer:{padding:"10px 4rem 10px  0",paddingRight:"0px",paddingLeft:"2rem",width:"3%"},avatar:{height:"50px",width:"50px",border:"3.5px solid #449ee2"},name:{fontSize:"16px",fontWeight:"bold"},notProvided:{opacity:.4,textTransform:"uppercase",fontSize:"14px"},flags:{display:"flex"},trashIcon:{},detailsContainer:{},detailContainer:{flex:"1",borderBottom:"2px solid #f2f2f2",marginLeft:"8%"},detailTitle:{fontSize:"12px",fontWeight:"bold",color:"#449ee2",marginBottom:"2px"},detail:{fontWeight:"bold",marginBottom:"4px"}})})),be=function(e){var t=ue(),n=Object(r.useState)(!1),c=Object(L.a)(n,2),i=c[0],o=c[1],s=M($,void 0),l=H((function(e){return Q(e)?e.data:null}),s),d=Object(L.a)(l,1)[0];return d?Object(a.jsxs)(w.a,{className:v()(t.root,e.className),style:e.style,children:[i&&Object(a.jsx)(w.a,{className:t.sidebar,children:Object(a.jsx)(p.c,{children:Object(a.jsx)(p.a,{exact:!0,path:"/home/users/:id",component:function(e){return Object(a.jsx)(le,{accounts:d,path:e,setShowSidebar:o})}})})}),Object(a.jsx)(w.a,{className:t.tableContainer,children:Object(a.jsxs)(ae.a,{className:t.table,children:[Object(a.jsx)(re.a,{children:Object(a.jsxs)(ce.a,{children:[Object(a.jsx)(ie.a,{}),Object(a.jsx)(ie.a,{children:Object(a.jsx)(k.a,{variant:"h4",className:t.columnName,children:"Name"})}),Object(a.jsx)(ie.a,{children:Object(a.jsx)(k.a,{variant:"h4",className:t.columnName,children:"Username"})}),Object(a.jsx)(ie.a,{children:Object(a.jsx)(k.a,{variant:"h4",className:t.columnName,children:"Flags"})}),Object(a.jsx)(ie.a,{children:Object(a.jsx)(k.a,{variant:"h4",className:t.columnName,children:"Action"})})]})}),Object(a.jsx)(oe.a,{children:d.map((function(e,t){return Object(a.jsx)(je,{accData:e,setShowSidebar:o},t)}))})]})})]}):Object(a.jsx)("h4",{children:"Loading..."})},he=function(e){var t=e.roomData;return Object(a.jsxs)(ce.a,{hover:!0,style:{cursor:"pointer"},children:[Object(a.jsx)(ie.a,{children:t.id}),Object(a.jsx)(ie.a,{children:t.label}),Object(a.jsx)(ie.a,{children:" needs date handling"}),Object(a.jsx)(ie.a,{children:"to do parse from string"}),Object(a.jsx)(ie.a,{children:Object(a.jsx)(C.a,{color:"secondary",children:"delete_forever"})})]})},xe=Object(f.a)((function(e){return Object(g.a)({root:{paddingTop:"40px",backgroundColor:"#f2f2f2",display:"flex",justifyContent:"center"},table:{width:"92%",backgroundColor:"#fff"},columnName:{fontSize:"14px",fontWeight:"bold",opacity:.4,margin:"0"},trashIcon:{fontSize:"30px"}})})),me=function(){var e=xe(),t=M(ee),n=H((function(e){return Q(e)?e.data:null}),t),r=Object(L.a)(n,1)[0];return r?Object(a.jsx)(w.a,{className:e.root,children:Object(a.jsxs)(ae.a,{className:e.table,children:[Object(a.jsx)(re.a,{children:Object(a.jsxs)(ce.a,{children:[Object(a.jsx)(ie.a,{children:Object(a.jsx)(k.a,{variant:"h4",className:e.columnName,children:"Room ID"})}),Object(a.jsx)(ie.a,{children:Object(a.jsx)(k.a,{variant:"h4",className:e.columnName,children:"Name"})}),Object(a.jsx)(ie.a,{children:Object(a.jsx)(k.a,{variant:"h4",className:e.columnName,children:"Created at"})}),Object(a.jsx)(ie.a,{children:Object(a.jsx)(k.a,{variant:"h4",className:e.columnName,children:"Access"})}),Object(a.jsx)(ie.a,{children:Object(a.jsx)(k.a,{variant:"h4",className:e.columnName,children:"Action"})})]})}),Object(a.jsx)(oe.a,{children:r.map((function(e,t){return Object(a.jsx)(he,{roomData:e},t)}))})]})}):Object(a.jsx)("h4",{children:"Loading..."})},pe=n(55),fe=n(141),Oe=n(143),ve=Object(f.a)((function(e){return{root:{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"},formContainer:{display:"flex",flexDirection:"column",padding:"30px 40px",borderRadius:"8px",boxShadow:"rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px"},topContainer:{display:"flex",flexDirection:"column",alignItems:"center",marginBottom:"20px"},logo:{width:"60px",marginBottom:"15px"},title:{fontWeight:600,fontSize:"18px",margin:"0 20px"},login:{},password:{marginTop:"15px"},btnContainer:{display:"flex",justifyContent:"center",marginTop:"20px"},loginBtn:{width:"150px"},error:{marginTop:"10px"}}})),ge=function(e){var t={username:"",password:""};return e.username&&"admin"!==e.username&&(t.username="Username is invalid."),e.username||(t.username="Username is required."),e.password&&"123456"!==e.password&&(t.password="Password is invalid."),e.password||(t.password="Password is required."),t},ye=function(e){var t=e.setToken,n=Object(p.f)(),c=ve(),i=Object(r.useState)({username:"",password:""}),o=Object(L.a)(i,2),s=o[0],l=o[1],d=Object(r.useState)({username:"",password:""}),j=Object(L.a)(d,2),u=j[0],b=j[1],h=function(e){l(Object(Y.a)(Object(Y.a)({},s),{},Object(pe.a)({},e.target.id,e.target.value))),b({username:"",password:""})};return Object(a.jsxs)("div",{className:c.root,children:["Home",Object(a.jsxs)("form",{className:c.formContainer,children:[Object(a.jsxs)(w.a,{className:c.topContainer,children:[Object(a.jsx)("img",{className:c.logo,src:_,alt:"logo"}),Object(a.jsx)("h2",{className:c.title,children:"Circles Administration Panel"})]}),Object(a.jsx)(fe.a,{className:c.login,id:"username",label:"Login",variant:"outlined",value:s.username,onChange:h}),u.username&&Object(a.jsx)(Oe.a,{className:c.error,severity:"error",children:u.username}),Object(a.jsx)(fe.a,{className:c.password,type:"password",id:"password",label:"Password",variant:"outlined",value:s.password,onChange:h}),u.password&&Object(a.jsx)(Oe.a,{className:c.error,severity:"error",children:u.password}),Object(a.jsx)(w.a,{className:c.btnContainer,children:Object(a.jsx)(S.a,{className:c.loginBtn,variant:"contained",onClick:function(e){e.preventDefault();var a=ge(s);a.username||a.password?b(a):(t(void 0),n.push("/home"))},children:"login"})})]})]})},Ne=Object(f.a)((function(e){return Object(g.a)({root:{height:"100vh"},toolbar:{height:"10vh",color:e.palette.primary}})})),we=function(e){var t=Ne(),n=J(),r=n.token,c=n.setToken;return r?Object(a.jsxs)("div",{className:v()(t.root,e.className),style:e.style,children:[Object(a.jsx)(T,{}),Object(a.jsxs)(p.c,{children:[Object(a.jsx)(p.a,{exact:!0,path:"/home",component:ne}),Object(a.jsx)(p.a,{path:"/home/users",component:be}),Object(a.jsx)(p.a,{path:"/home/rooms",component:me})]})]}):Object(a.jsx)(ye,{setToken:c})},Ce={title:{en_US:"Page not found",de_DE:"Seite nicht gefunden",pl_PL:"Nie znaleziono strony"}},ke=Object(f.a)((function(e){return Object(g.a)({root:{},h4:{color:e.palette.primary}})})),Se=function(e){var t=Object(s.useLittera)(Ce),n=ke();return Object(a.jsx)("div",{className:v()(n.root,e.className),style:e.style,children:Object(a.jsx)("h4",{className:n.h4,children:t.title})})},_e=function(){var e=J(),t=e.token,n=e.setToken;return t?Object(a.jsxs)(p.c,{children:[Object(a.jsx)(p.a,{exact:!0,path:"/",component:ye}),Object(a.jsx)(p.a,{path:"/home",component:we}),Object(a.jsx)(p.a,{exact:!0,component:Se})]}):Object(a.jsx)(ye,{setToken:n})};var Ie=function(){var e=Object(d.a)("(prefers-color-scheme: dark)"),t=c.a.useMemo((function(){return e?m:x}),[e]);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(j.a,{}),Object(a.jsx)(u.a,{theme:t,children:Object(a.jsx)(s.LitteraProvider,{initialLocale:"en_US",locales:b,children:Object(a.jsx)(l.a,{children:Object(a.jsx)(_e,{})})})})]})},Te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,147)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(Ie,{})}),document.getElementById("root")),Te()}},[[97,1,2]]]);
//# sourceMappingURL=main.3ea81b0e.chunk.js.map