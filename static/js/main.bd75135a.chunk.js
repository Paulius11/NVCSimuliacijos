(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{36:function(e,s,t){},40:function(e,s,t){"use strict";t.r(s);var a=t(1),i=t(0),n=t.n(i),r=t(11),c=t.n(r),l=(t(35),t(24)),j=t(7);t(36);var u=function(e){var s=Object(i.useState)(!1),t=Object(j.a)(s,2),a=t[0],n=t[1];function r(s){s.key===e&&n(!0)}var c=function(s){s.key===e&&n(!1)};return Object(i.useEffect)((function(){return window.addEventListener("keydown",r),window.addEventListener("keyup",c),function(){window.removeEventListener("keydown",r),window.removeEventListener("keyup",c)}}),[]),a};var o=function(e,s){Object(i.useEffect)((function(){var t=function(t){e.current&&!e.current.contains(t.target)&&s(t)};return document.addEventListener("mousedown",t),document.addEventListener("touchstart",t),function(){document.removeEventListener("mousedown",t),document.removeEventListener("touchstart",t)}}),[e,s])},d=t(26),m=t.n(d);var b=function(e){var s=Object(i.useState)(!1),t=Object(j.a)(s,2),n=t[0],r=t[1],c=Object(i.useState)(e.text),l=Object(j.a)(c,2),d=l[0],b=l[1],x=Object(i.useRef)(null),O=Object(i.useRef)(null),h=Object(i.useRef)(null),k=u("Enter"),v=u("Escape"),p=e.onSetText;o(x,(function(){n&&(p(d),r(!1))}));var g=Object(i.useCallback)((function(){k&&(p(d),r(!1))}),[k,d,p]),y=Object(i.useCallback)((function(){v&&(b(e.text),r(!1))}),[v,e.text]);Object(i.useEffect)((function(){n&&h.current.focus()}),[n]),Object(i.useEffect)((function(){n&&(g(),y())}),[g,y,n]);var f=Object(i.useCallback)((function(e){b(m.a.sanitize(e.target.value))}),[b]),S=Object(i.useCallback)((function(){return r(!0)}),[r]);return Object(a.jsxs)("span",{className:"inline-text",ref:x,children:[Object(a.jsx)("span",{ref:O,onClick:S,className:"inline-text_copy inline-text_copy--".concat(n?"hidden":"active"),children:e.text}),Object(a.jsx)("input",{ref:h,style:{minWidth:Math.ceil(d.length)+"ch"},value:d,onChange:f,className:"inline-text_input inline-text_input--".concat(n?"active":"hidden")})]})},x=[{needs:"met",title:"Mylintis",elements:["Atjau\u010diantis","Gailestingas","Draugi\u0161kas","Meilus","Atvira\u0161irdis","Simpatizuojantis","\u0160velnus","\u0160iltas"]},{needs:"met",title:"Palaima",elements:["Ekstaz\u0117","Pakili nuotaika","\u017dvalus"]},{needs:"met",title:"D\u017eiaugsmas",elements:["Linksmas","Malonumas","D\u017eiugesys","Laim\u0117"]},{needs:"met",title:"\u012esitrauk\u0119s",elements:["Budrus","Smalsus","Paker\u0117tas","Transe","Su\u017eav\u0117tas","Susidom\u0117j\u0119s","Suintriguotas"]},{needs:"met",title:"Atsigav\u0119s",elements:["Pagyv\u0117j\u0119s","Atjaun\u0117j\u0119s","Atsinaujin\u0119s","Pails\u0117j\u0119s","Atsigaivin\u0119s"]},{needs:"met",title:"Taikus",elements:["Ramus","Ai\u0161kumas","Patogumas","Balansas","Patenkintas","Pasiruo\u0161\u0119s","Atsipalaidav\u0119s","Palengv\u0117jimas","Giedras","Romus"]},{needs:"met",title:"\u012ekv\u0117ptas",elements:["Steb\u0117tis","Nuostaba"]},{needs:"met",title:"Viltingas",elements:["Laukiantis","Padr\u0105sintas","Optimisti\u0161kas"]},{needs:"met",title:"D\u0117kingas",elements:["Vertinantis","Pakyl\u0117tas","Palyt\u0117tas"]},{needs:"met",title:"Sujaudintas",elements:["Gyvas","Judrus","U\u017esideg\u0119s","Su\u017eadintas","Susi\u017eav\u0117j\u0119s","Nekantraujantis","Trok\u0161tantis","Energingas","Entuziastingas","Apsvaig\u0119s","Gyvybingas","Aistringas","Kunkuliuojantis","Virpantis"]},{needs:"met",title:"Pasitikintis",elements:["\u012egalintas","Judrus","U\u017esideg\u0119s","Su\u017eadintas","Susi\u017eav\u0117j\u0119s","Nekantraujantis","Trok\u0161tantis","Energingas","Entuziastingas","Apsvaig\u0119s","Gyvybingas","Aistringas","Kunkuliuojantis","Virpantis"]}],O=[{needs:"unmet",title:"Sumi\u0161\u0119s",elements:["Priblok\u0161tas","Apsiblaus\u0119s","Dvejojantis","Ambivalenti\u0161kas","Nery\u017etingas","Pasimet\u0119s","Suglum\u0119s","Persipl\u0117\u0161\u0119s"]},{needs:"unmet",title:"\u012etampa",elements:["Kaprizingas","Susikrimt\u0119s","Pami\u0161\u0119s","Bruzdus","Nepas\u0117dus","Nerimastingas","Nervingas","Sukr\u0117stas","Nerimstantis","Nenustygstantis","Stresuojantis","Sugniu\u017edytas"]},{needs:"unmet",title:"Neramus",elements:["Susijaudin\u0119s","Sunerim\u0119s","Sutrik\u0119s","Susinervin\u0119s","\u0160okiruotas","Pritrenktas","Nusteb\u0119s","Audringas","Nepatogumas","Susir\u016bpin\u0119s","Permainingas"]},{needs:"unmet",title:"I\u0161sigand\u0119s",elements:["Nuog\u0105staujantis","Baim\u0117","Nuojauta","Nepatiklus","Panika","Suakmen\u0117j\u0119s","\u012etarus","Atsargus","Apdairus"]},{needs:"unmet",title:"Pa\u017eeid\u017eiamas",elements:["Trapus","Bej\u0117gis","Nesaugus","Sant\u016brus","U\u017edaras","U\u017esisklend\u0119s","Jautrus","Drebantis"]},{needs:"unmet",title:"Susig\u0117d\u0119s",elements:["Drovus","G\u0117da","Savigrau\u017ea","Kaltas","Susinepatogin\u0119s"]},{needs:"unmet",title:"Atsiskyr\u0119s",elements:["Padrikas","Neri\u0161lus","Svetimas","Nutol\u0119s","Nuobod\u017eiaujantis","\u0160altas","Tolimas","I\u0161sibla\u0161k\u0119s","Abejingas","Nutirp\u0119s","Nusi\u0161alin\u0119s","Nesuinteresuotas","Atsitrauk\u0119s","U\u017esisklend\u0119s"]},{needs:"unmet",title:"Susierzin\u0119s",elements:["Apmaudas","Irzlus","Nepatenkintas","Suirz\u0119s","Frustracija","Nekantrus","Sudirg\u0119s"]},{needs:"unmet",title:"Antipatija",elements:["Prie\u0161i\u0161kas","Pasibais\u0117j\u0119s","Panieka","\u0160leik\u0161tulys","Nem\u0117gimas","Neapykanta","Siaubas"]},{needs:"unmet",title:"Piktas",elements:["\u012esiut\u0119s","Pasiut\u0119s","\u012enir\u0161\u0119s","Pasipiktin\u0119s","\u012et\u016b\u017e\u0119s","\u012esi\u017eeid\u0119s","Ker\u0161tingas","Pagie\u017ea"]},{needs:"unmet",title:"Nuovargis",elements:["I\u0161sek\u0119s","I\u0161sieikvoj\u0119s","Mieguistas","Apati\u0161kas","I\u0161varg\u0119s","Nusikamav\u0119s"]},{needs:"unmet",title:"Li\u016bdnas",elements:["Prisl\u0117gtas","Nusimin\u0119s","Nusivyl\u0119s","Nedr\u0105sus","Bevilti\u0161kas","Vieni\u0161as","Ni\u016brus","Melancholija"]},{needs:"unmet",title:"Ilgesys",elements:["Pavydas","Pavyduliavimas","Tro\u0161kimas","Nostalgija","Kamavimasis"]},{needs:"unmet",title:"Skausmas",elements:["Agonija","Sielvartas","\u0160irdg\u0117la","Ged\u0117jimas","Susisieloj\u0119s","Su\u017eeistas","Nelaimingas","Apgailestaujantis","Atgailaujantis"]}],h=[{title:"Ry\u0161ys",elements:["Pri\u0117mimas","\u012esitraukimas","Pritarimas","\u0160velnumas","\u012evertinimas","Priklausymas","Bendrumas","R\u016bpinimasis","Atidumas","Globa","Artumas","Komunikacija","Bendravimas","Bendruomen\u0117","Draugija","Draugyst\u0117","Atjauta","U\u017euojauta","D\u0117mesys","Empatija","\u012ekv\u0117pimas","Vientisumas","Intymumas","Meil\u0117","Partneryst\u0117","Stabilumas"]},{title:"Prasm\u0117",elements:["S\u0105moningumas","\u0160ventimas","I\u0161\u0161\u016bkis","K\u016brybi\u0161kumas","Ai\u0161kumas","Skaidrumas","Sugeb\u0117jimas","Savimon\u0117","Prisid\u0117jimas","Atradimas","Naudingumas","Veiksmingumas","Produktyvumas","Pasisekimas","Augimas","Mokymasis","Ged\u0117jimas","Veiksmas","Dalyvavimas","Po\u017ei\u016bris","Perspektyva","Galimyb\u0117","Pa\u017eanga","Progresas","Tikslas","Stimulas","Tik\u0117jimas"]},{title:"Taika",elements:["Ramyb\u0117","Pusiausvyra","Balansas","Pakankamumas","Gro\u017eis","Bendryst\u0117","Lengvumas","Sklandumas","Darna","Viltis","Tvarka","Nuoseklumas"]},{title:"Autenti\u0161kumas",elements:["S\u0105\u017einingumas","Principingumas","Buvimas"]},{title:"Fizin\u0117 Gerov\u0117",elements:["Oras","Vanduo","Komfortas","Maistas","Jud\u0117jimas","Poilsis","Saugumas","Seksualumo i\u0161rai\u0161ka","Pastog\u0117","Prisilietimas"]},{title:"Autonomija",elements:["Laisv\u0117","Pasirinkimas","Orumas","Nepriklausomyb\u0117","Savirai\u0161ka","Erdv\u0117","Spontani\u0161kumas"]},{title:"\u017daidimas",elements:["Nuotykis","Susijaudinimas","Entuziazmas","Linksmumas","Smagumas","Humoras","D\u017eiaugsmas","Atsipalaidavimas","Stimuliavimas"]}],k=t(43),v=t(48),p=t(47),g=t(49),y=t(44),f=t(45),S=t(29),P=t(46);function N(){var e="black",s=Object(i.useState)([]),t=Object(j.a)(s,2),n=t[0],r=t[1],c=Object(i.useState)({color:e}),u=Object(j.a)(c,2),o=u[0],d=(u[1],Object(i.useState)("1 pus\u0117")),m=Object(j.a)(d,2),N=m[0],A=m[1],C=Object(i.useState)("2 pus\u0117"),E=Object(j.a)(C,2),T=E[0],w=E[1],K=Object(i.useState)("3 pus\u0117"),G=Object(j.a)(K,2),I=G[0],B=G[1],L=Object(i.useState)([]),z=Object(j.a)(L,2),D=z[0],J=z[1],M=Object(i.useState)([]),V=Object(j.a)(M,2),F=V[0],R=V[1],H="Pirma pus\u0117",U="Antra pus\u0117",_="Abi pus\u0117s",W=function(s){var t=s.target.style.color,a=s.target.tagName,i=n==H?"red":n==U?"blue":n==_?"green":void 0,r=s.target.textContent,c=s.target.parentElement.parentElement.parentElement.parentElement.className;console.log("target color: ".concat(t," choice color: ").concat(i,"\tagName: ").concat(a," text: ").concat(r," class: ").concat(c));var j=e;t!=i&&null!=j&&void 0!=i&&"LI"==a?(j=i,"poreikiai"==c&&(-1===D.indexOf(r)?J((function(e){return[].concat(Object(l.a)(e),[r])})):console.log("This item already exists")),"jausmai"==c&&(-1===F.indexOf(r)?R((function(e){return[].concat(Object(l.a)(e),[r])})):console.log("This item already exists"))):(j=null,"poreikiai"==c&&J(D.filter((function(e){return e!==r}))),"jausmai"==c&&R(F.filter((function(e){return e!==r})))),s.target.style.color=j,console.log(t),console.log(j)};return Object(a.jsxs)(k.a,{fluid:"false",style:{backgroundColor:"whitesmoke"},children:[Object(a.jsxs)(v.a,{variant:"info",children:["Pasirinkta: ",Object(a.jsx)("b",{children:n}),Object(a.jsxs)("div",{class:"puses",children:[Object(a.jsxs)("div",{class:"pusesElementas",onClick:function(e){return r(H)},children:[Object(a.jsx)("div",{class:"red column"}),Object(a.jsx)(b,{text:N,onSetText:function(e){return A(e)}})]}),Object(a.jsxs)("div",{class:"pusesElementas",onClick:function(){return r(U)},children:[Object(a.jsx)("div",{class:"blue column"}),Object(a.jsx)(b,{text:T,onSetText:function(e){return w(e)}})]}),Object(a.jsxs)("div",{class:"pusesElementas",onClick:function(){return r(_)},children:[Object(a.jsx)("div",{class:"green column"}),Object(a.jsx)(b,{text:I,onSetText:function(e){return B(e)}})]})]})]}),Object(a.jsx)(p.a,{defaultActiveKey:"0",children:Object(a.jsxs)(g.a,{children:[Object(a.jsx)(g.a.Header,{children:Object(a.jsx)(p.a.Toggle,{as:y.a,variant:"link",eventKey:"0",children:"Poreikiai"})}),Object(a.jsx)(p.a.Collapse,{eventKey:"0",children:Object(a.jsxs)(g.a.Body,{children:[" ",Object(a.jsx)("div",{className:"Column",children:Object(a.jsx)(f.a,{children:h.map((function(e){return Object(a.jsxs)("div",{class:"poreikiai",children:[Object(a.jsx)("h4",{children:e.title}),Object(a.jsx)("div",{style:o,onClick:function(e){return W(e)},children:Object(a.jsx)("ol",{children:e.elements.map((function(e){return Object(a.jsx)(S.a,{children:Object(a.jsx)("li",{children:e},e)})}))})})]})}))})})]})})]})}),Object(a.jsx)(p.a,{children:Object(a.jsxs)(g.a,{children:[Object(a.jsx)(g.a.Header,{children:Object(a.jsx)(p.a.Toggle,{as:y.a,variant:"link",eventKey:"0",children:"Jausmai, kai poreikiai n\u0117ra patenkinti"})}),Object(a.jsx)(p.a.Collapse,{eventKey:"0",children:Object(a.jsxs)(g.a.Body,{children:[" ",Object(a.jsx)("div",{className:"Column",children:Object(a.jsx)(f.a,{children:O.map((function(e){return Object(a.jsxs)("div",{class:"jausmai",children:[Object(a.jsx)("h4",{children:e.title}),Object(a.jsx)("div",{style:o,onClick:function(e){return W(e)},children:Object(a.jsx)("ol",{children:e.elements.map((function(e){return Object(a.jsx)(S.a,{children:Object(a.jsx)("li",{children:e},e)})}))})})]})}))})})]})})]})}),Object(a.jsx)(p.a,{children:Object(a.jsxs)(g.a,{children:[Object(a.jsx)(g.a.Header,{children:Object(a.jsx)(p.a.Toggle,{as:y.a,variant:"link",eventKey:"0",children:"Jausmai, kai poreikiai patenkinti"})}),Object(a.jsx)(p.a.Collapse,{eventKey:"0",children:Object(a.jsxs)(g.a.Body,{children:[" ",Object(a.jsx)("div",{className:"Column",children:Object(a.jsx)(f.a,{children:x.map((function(e){return Object(a.jsxs)("div",{class:"jausmai",children:[Object(a.jsx)("h4",{children:e.title}),Object(a.jsx)("div",{style:o,onClick:function(e){return W(e)},children:Object(a.jsx)("ol",{children:e.elements.map((function(e){return Object(a.jsx)(S.a,{children:Object(a.jsx)("li",{children:e},e)})}))})})]})}))})})]})})]})}),Object(a.jsx)("hr",{}),Object(a.jsxs)(k.a,{children:[Object(a.jsx)("p",{children:"Konstruktyvus konflikto deeskalavimas atsi\u017evelgiant \u012f abiej\u0173 pusi\u0173 poreikius ir jausmus."}),Object(a.jsx)(p.a,{defaultActiveKey:"0",children:Object(a.jsx)("div",{className:"text",children:Object(a.jsxs)(g.a,{children:[Object(a.jsx)(g.a.Header,{children:Object(a.jsxs)(p.a.Toggle,{as:y.a,variant:"link",eventKey:"0",children:[Object(a.jsx)("b",{children:"1. \u017dingsnis."})," Atspind\u0117jimas kitos pus\u0117s jausmus ir poreikius."]})}),Object(a.jsx)(p.a.Collapse,{eventKey:"0",children:Object(a.jsx)(g.a.Body,{children:Object(a.jsxs)(f.a,{children:[Object(a.jsxs)(S.a,{children:[Object(a.jsx)("p",{children:Object(a.jsx)("b",{children:"Steb\u0117jimas"})})," ",Object(a.jsx)("p",{children:Object(a.jsx)("i",{children:"kai matau / gird\u017eiu"})}),Object(a.jsx)(P.a,{children:Object(a.jsx)(P.a.Group,{controlId:"exampleForm.ControlTextarea1",children:Object(a.jsx)(P.a.Control,{as:"textarea",rows:3})})})]}),Object(a.jsxs)(S.a,{children:[Object(a.jsx)("p",{children:Object(a.jsx)("b",{children:"Jausmai"})})," ",Object(a.jsx)("p",{children:Object(a.jsx)("i",{children:"atrodo, kad jauti"})}),F.map((function(e){return Object(a.jsx)("p",{class:"text",children:e})})),Object(a.jsx)(P.a,{children:Object(a.jsx)(P.a.Group,{controlId:"exampleForm.ControlTextarea1",children:Object(a.jsx)(P.a.Control,{as:"textarea",rows:3})})})]}),Object(a.jsxs)(S.a,{children:[Object(a.jsx)("p",{children:Object(a.jsx)("b",{children:"Poreikis"})})," ",Object(a.jsx)("p",{children:Object(a.jsx)("i",{children:"nes yra noras?"})}),D.map((function(e){return Object(a.jsx)("p",{class:"text",children:e})})),"                 ",Object(a.jsx)(P.a,{children:Object(a.jsx)(P.a.Group,{controlId:"exampleForm.ControlTextarea1",children:Object(a.jsx)(P.a.Control,{as:"textarea",rows:3})})})]}),Object(a.jsx)(S.a,{children:"Ar gerai tave suprantu?"})]})})})]})})}),Object(a.jsx)("hr",{}),Object(a.jsx)(p.a,{className:"text",children:Object(a.jsxs)(g.a,{children:[Object(a.jsx)(g.a.Header,{children:Object(a.jsxs)(p.a.Toggle,{as:y.a,variant:"link",eventKey:"0",children:[Object(a.jsx)("b",{children:"2. \u017dingsnis."})," I\u0161sakymas savo jausm\u0173 ir poreiki\u0173."]})}),Object(a.jsx)(p.a.Collapse,{eventKey:"0",children:Object(a.jsx)(g.a.Body,{children:Object(a.jsxs)(f.a,{children:[Object(a.jsxs)(S.a,{children:[Object(a.jsx)("p",{children:Object(a.jsx)("b",{children:"Steb\u0117jimas"})})," ",Object(a.jsx)("p",{children:Object(a.jsx)("i",{children:"Pastebiu, kad:"})}),Object(a.jsx)(P.a,{children:Object(a.jsx)(P.a.Group,{controlId:"exampleForm.ControlTextarea1",children:Object(a.jsx)(P.a.Control,{as:"textarea",rows:3})})})]}),Object(a.jsxs)(S.a,{children:[Object(a.jsx)("p",{children:Object(a.jsx)("b",{children:"Jausmai"})})," ",Object(a.jsx)("p",{children:Object(a.jsx)("i",{children:"Jau\u010diu:"})}),Object(a.jsx)(P.a,{children:Object(a.jsx)(P.a.Group,{controlId:"exampleForm.ControlTextarea1",children:Object(a.jsx)(P.a.Control,{as:"textarea",rows:3})})})]}),Object(a.jsxs)(S.a,{children:[Object(a.jsx)("p",{children:Object(a.jsx)("b",{children:"Poreikis"})})," ",Object(a.jsx)("p",{children:Object(a.jsx)("i",{children:"Nes norisi:"})}),Object(a.jsx)(P.a,{children:Object(a.jsx)(P.a.Group,{controlId:"exampleForm.ControlTextarea1",children:Object(a.jsx)(P.a.Control,{as:"textarea",rows:3})})})]}),Object(a.jsxs)(S.a,{children:[Object(a.jsx)("p",{children:Object(a.jsx)("b",{children:"Pra\u0161umas"})})," ",Object(a.jsx)("p",{children:Object(a.jsx)("i",{children:"Ar tau tikt\u0173 jeigu...?"})}),Object(a.jsx)(P.a,{children:Object(a.jsx)(P.a.Group,{controlId:"exampleForm.ControlTextarea1",children:Object(a.jsx)(P.a.Control,{as:"textarea",rows:3})})})]})]})})})]})})]})]})}var A=document.getElementById("root");c.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(N,{})}),A)}},[[40,1,2]]]);
//# sourceMappingURL=main.bd75135a.chunk.js.map