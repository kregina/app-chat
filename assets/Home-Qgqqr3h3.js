import{u as d,a as g,j as e,A as _,U as x,P as p,r as u}from"./index-7QT37K0J.js";import{B as j,F as f,f as A}from"./index.es-znR5g30y.js";import{I as S}from"./Input-MtQM5Ef4.js";const U="_container_uit6a_3",v={container:U},E="_container_cz8nm_3",L="_content_cz8nm_14",b="_h1_cz8nm_20",y="_form_cz8nm_24",z="_icon_cz8nm_31",N="_animate_cz8nm_35",$="_bounceRight_cz8nm_1",n={container:E,content:L,h1:b,form:y,icon:z,animate:N,bounceRight:$},w=r=>{const{username:t,isUsernameValid:s,message:i,onUsernameChange:m}=r,{state:o,dispatch:l}=d(),c=g(),h=a=>{a.preventDefault(),s&&t&&(l({type:_.ADD_USER,payload:{id:0,username:t.trim(),theme:o.theme,status:x.AVAILABLE,isOnline:!0,lastSeenAt:new Date().toISOString()}}),c(p.LOBBY))};return e.jsxs("form",{className:n.form,children:[e.jsx(S,{id:"username",value:t,onValueChange:m,message:i,placeholder:"Choose a cool username!",withValidation:!0}),e.jsxs(j,{isEnabled:s,onClick:h,id:"login",children:[e.jsx("span",{children:"Enter"}),e.jsx(f,{"data-testid":"button-icon",icon:A,className:`${s?n.animate:""} ${n.icon}`})]})]})},C=()=>e.jsxs(e.Fragment,{children:[e.jsx("h4",{children:"Welcome to"}),e.jsx("h1",{className:n.h1,children:e.jsx("strong",{children:"The Lobby™"})}),e.jsx("p",{children:"Step right up! where the chat never stops and your next adventure is just a username away!"})]}),I=()=>{const{state:r}=d(),{theme:t}=r,[s,i]=u.useState(""),[m,o]=u.useState(!1),[l,c]=u.useState(""),h=a=>{i(a),a.length>=3?(o(!0),c(` (You are good to go ${a}!😉)`)):(o(!1),c(" (Oops! at least 3 characters.😅)"))};return e.jsx("div",{className:`${n.container} ${t}`,"data-testid":"login",children:e.jsxs("div",{className:n.content,children:[e.jsx(C,{}),e.jsx(w,{username:s,isUsernameValid:m,message:l,onUsernameChange:h})]})})};function D(){return e.jsx("div",{className:v.container,"data-testid":"home",children:e.jsx(I,{})})}export{D as default};
