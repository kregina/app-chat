import{j as s}from"./index-yzacaGOW.js";const p="_button_1b7u9_1",r="_icon_1b7u9_24",c={button:p,icon:r},h=e=>{const{isEnabled:a=!0,onClick:o,children:l,id:n,className:t,type:u}=e;return s.jsx("button",{"data-testid":`button-${n}`,"data-cy":`button-${n}`,className:`${c.button} ${t?c[t]:""}`,disabled:!a,onClick:o,type:u,children:l})},d="_label_jgph_1",_="_input_jgph_14",i={label:d,input:_},j=e=>{const{value:a,onValueChange:o,message:l,placeholder:n,id:t,withValidation:u}=e;return s.jsxs("label",{htmlFor:t,className:i.label,children:[s.jsx("input",{className:i.input,type:"text",id:t,autoFocus:!0,onChange:b=>o(b.target.value),autoComplete:"off",value:a,"data-cy":`${t}-input`,placeholder:n}),u&&s.jsx("small",{children:l})]})};export{h as B,j as I};
