(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{33:function(e,t,s){},36:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s(0),i=s.n(n),c=s(10),r=s.n(c),u=(s(32),s(26)),l=s(6);s(33);var o=function(e){var t=Object(n.useState)(!1),s=Object(l.a)(t,2),a=s[0],i=s[1];function c(t){t.key===e&&i(!0)}var r=function(t){t.key===e&&i(!1)};return Object(n.useEffect)((function(){return window.addEventListener("keydown",c),window.addEventListener("keyup",r),function(){window.removeEventListener("keydown",c),window.removeEventListener("keyup",r)}}),[]),a};var j=function(e,t){Object(n.useEffect)((function(){var s=function(s){e.current&&!e.current.contains(s.target)&&t(s)};return document.addEventListener("mousedown",s),document.addEventListener("touchstart",s),function(){document.removeEventListener("mousedown",s),document.removeEventListener("touchstart",s)}}),[e,t])},m=s(23),d=s.n(m);var b=function(e){var t=Object(n.useState)(!1),s=Object(l.a)(t,2),i=s[0],c=s[1],r=Object(n.useState)(e.text),u=Object(l.a)(r,2),m=u[0],b=u[1],O=Object(n.useRef)(null),x=Object(n.useRef)(null),v=Object(n.useRef)(null),k=o("Enter"),h=o("Escape"),f=e.onSetText;j(O,(function(){i&&(f(m),c(!1))}));var p=Object(n.useCallback)((function(){k&&(f(m),c(!1))}),[k,m,f]),g=Object(n.useCallback)((function(){h&&(b(e.text),c(!1))}),[h,e.text]);Object(n.useEffect)((function(){i&&v.current.focus()}),[i]),Object(n.useEffect)((function(){i&&(p(),g())}),[p,g,i]);var y=Object(n.useCallback)((function(e){b(d.a.sanitize(e.target.value))}),[b]),S=Object(n.useCallback)((function(){return c(!0)}),[c]);return Object(a.jsxs)("span",{className:"inline-text",ref:O,children:[Object(a.jsx)("span",{ref:x,onClick:S,className:"inline-text_copy inline-text_copy--".concat(i?"hidden":"active"),children:e.text}),Object(a.jsx)("input",{ref:v,style:{minWidth:Math.ceil(m.length)+"ch"},value:m,onChange:y,className:"inline-text_input inline-text_input--".concat(i?"active":"hidden")})]})},O=[{title:"Ry\u0161ys",elements:["Pri\u0117mimas","\u012esitraukimas","Pritarimas","\u0160velnumas","\u012evertinimas","Priklausymas","Bendrumas","R\u016bpinimasis","Atidumas","Globa","Artumas","Komunikacija","Bendravimas","Bendruomen\u0117","Draugija","Draugyst\u0117","Atjauta","U\u017euojauta","D\u0117mesys","Empatija","\u012ekv\u0117pimas","Vientisumas","Intymumas","Meil\u0117"]},{title:"Prasm\u0117",elements:["S\u0105moningumas","\u0160ventimas","I\u0161\u0161\u016bkis","K\u016brybi\u0161kumas","Ai\u0161kumas","Skaidrumas","Sugeb\u0117jimas","Savimon\u0117","Prisid\u0117jimas","Atradimas","Naudingumas","Veiksmingumas","Produktyvumas","Pasisekimas","Augimas","Mokymasis","Ged\u0117jimas","Veiksmas","Dalyvavimas","Po\u017ei\u016bris","Perspektyva","Galimyb\u0117","Pa\u017eanga","Progresas","Tikslas","Stimulas","Tik\u0117jimas"]},{title:"Taika",elements:["Ramyb\u0117","Pusiausvyra","Balansas","Pakankamumas","Gro\u017eis","Bendryst\u0117","Lengvumas","Sklandumas","Darna","Viltis","Tvarka","Nuoseklumas"]},{title:"Autenti\u0161kumas",elements:["S\u0105\u017einingumas","Principingumas","Buvimas"]},{title:"Fizin\u0117 Gerov\u0117",elements:["Oras","Vanduo","Komfortas","Maistas","Jud\u0117jimas","Poilsis","Saugumas","Seksualumo i\u0161rai\u0161ka","Pastog\u0117","Prisilietimas"]},{title:"Autonomija",elements:["Pasirinkimas","Orumas","Nepriklausomyb\u0117","Savirai\u0161ka","Erdv\u0117","Spontani\u0161kumas"]},{title:"\u017daidimas",elements:["Nuotykis","Susijaudinimas","Entuziazmas","Linksmumas","Smagumas","Humoras","D\u017eiaugsmas","Atsipalaidavimas","Stimuliavimas"]}],x=s(39),v=s(44),k=s(43),h=s(45),f=s(40),p=s(41),g=s(42);function y(){var e="black",t=Object(n.useState)([]),s=Object(l.a)(t,2),i=s[0],c=s[1],r=Object(n.useState)({color:e}),o=Object(l.a)(r,2),j=o[0],m=(o[1],Object(n.useState)("1 pus\u0117")),d=Object(l.a)(m,2),y=d[0],S=d[1],P=Object(n.useState)("2 pus\u0117"),E=Object(l.a)(P,2),w=E[0],A=E[1],C=Object(n.useState)("3 pus\u0117"),L=Object(l.a)(C,2),N=L[0],T=L[1],B=Object(n.useState)([]),K=Object(l.a)(B,2),D=K[0],R=K[1],G="Pirma pus\u0117",M="Antra pus\u0117",V="Abi pus\u0117s",z=function(t){var s=t.target.style.color,a=t.target.tagName,n=i==G?"red":i==M?"blue":i==V?"green":void 0,c=t.target.textContent;console.log("target color: ".concat(s," choice color: ").concat(n,"\tagName: ").concat(a," text: ").concat(c));var r=e;s!=n&&null!=r&&void 0!=n&&"LI"==a?(r=n,-1===D.indexOf(c)?R((function(e){return[].concat(Object(u.a)(e),[c])})):console.log("This item already exists")):(r=null,R(D.filter((function(e){return e!==c})))),t.target.style.color=r,console.log(s),console.log(r)};return Object(a.jsxs)(x.a,{fluid:"false",style:{backgroundColor:"whitesmoke"},children:[Object(a.jsxs)(v.a,{variant:"info",children:["Pasirinkta: ",Object(a.jsx)("b",{children:i}),Object(a.jsxs)("div",{class:"puses",children:[Object(a.jsxs)("div",{class:"pusesElementas",onClick:function(e){return c(G)},children:[Object(a.jsx)("div",{class:"red column"}),Object(a.jsx)(b,{text:y,onSetText:function(e){return S(e)}})]}),Object(a.jsxs)("div",{class:"pusesElementas",onClick:function(){return c(M)},children:[Object(a.jsx)("div",{class:"blue column"}),Object(a.jsx)(b,{text:w,onSetText:function(e){return A(e)}})]}),Object(a.jsxs)("div",{class:"pusesElementas",onClick:function(){return c(V)},children:[Object(a.jsx)("div",{class:"green column"}),Object(a.jsx)(b,{text:N,onSetText:function(e){return T(e)}})]})]})]}),Object(a.jsx)(k.a,{defaultActiveKey:"0",children:Object(a.jsxs)(h.a,{children:[Object(a.jsx)(h.a.Header,{children:Object(a.jsx)(k.a.Toggle,{as:f.a,variant:"link",eventKey:"0",children:"Poreikiai"})}),Object(a.jsx)(k.a.Collapse,{eventKey:"0",children:Object(a.jsxs)(h.a.Body,{children:[" ",Object(a.jsx)("div",{className:"Column",children:Object(a.jsx)(p.a,{children:O.map((function(e){return Object(a.jsxs)("div",{class:"poreikiai",children:[Object(a.jsx)("h4",{children:e.title}),Object(a.jsx)("div",{style:j,onClick:function(e){return z(e)},children:Object(a.jsx)("ol",{children:e.elements.map((function(e){return Object(a.jsx)(g.a,{children:Object(a.jsx)("li",{children:e},e)})}))})})]})}))})})]})})]})}),Object(a.jsx)("hr",{}),Object(a.jsxs)(x.a,{children:[Object(a.jsx)("p",{children:"Konstruktyvus konflikto deeskalavimas atsi\u017evelgiant \u012f abiej\u0173 pusi\u0173 poreikius ir jausmus."}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"1. \u017dingsnis."})," Atspind\u0117jimas kitos pus\u0117s jausmus ir poreikius."]}),Object(a.jsxs)(p.a,{children:[Object(a.jsxs)(g.a,{children:[Object(a.jsx)("p",{children:Object(a.jsx)("b",{children:"Steb\u0117jimas"})})," ",Object(a.jsx)("i",{children:"kai matau / gird\u017eiu"})]}),Object(a.jsxs)(g.a,{children:[Object(a.jsx)("p",{children:Object(a.jsx)("b",{children:"Jausmas"})})," ",Object(a.jsx)("i",{children:"atrodo, kad jauti"})]}),Object(a.jsxs)(g.a,{children:[Object(a.jsx)("p",{children:Object(a.jsx)("b",{children:"Poreikis"})})," ",Object(a.jsx)("p",{children:Object(a.jsx)("i",{children:"nes yra noras?"})}),D.map((function(e){return Object(a.jsx)("p",{children:e})}))]}),Object(a.jsx)(g.a,{children:"Ar gerai tave suprantu?"})]})]})]})}var S=document.getElementById("root");r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(y,{})}),S)}},[[36,1,2]]]);
//# sourceMappingURL=main.d1195fb9.chunk.js.map