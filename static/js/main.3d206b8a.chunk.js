(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{36:function(e,t,s){},40:function(e,t,s){"use strict";s.r(t);var a=s(1),i=s(0),n=s.n(i),r=s(12),c=s.n(r),l=(s(35),s(11)),u=s(6);s(36);var j=function(e){var t=Object(i.useState)(!1),s=Object(u.a)(t,2),a=s[0],n=s[1];function r(t){t.key===e&&n(!0)}var c=function(t){t.key===e&&n(!1)};return Object(i.useEffect)((function(){return window.addEventListener("keydown",r),window.addEventListener("keyup",c),function(){window.removeEventListener("keydown",r),window.removeEventListener("keyup",c)}}),[]),a};var o=function(e,t){Object(i.useEffect)((function(){var s=function(s){e.current&&!e.current.contains(s.target)&&t(s)};return document.addEventListener("mousedown",s),document.addEventListener("touchstart",s),function(){document.removeEventListener("mousedown",s),document.removeEventListener("touchstart",s)}}),[e,t])},d=s(26),m=s.n(d);var b=function(e){var t=Object(i.useState)(!1),s=Object(u.a)(t,2),n=s[0],r=s[1],c=Object(i.useState)(e.text),l=Object(u.a)(c,2),d=l[0],b=l[1],O=Object(i.useRef)(null),x=Object(i.useRef)(null),h=Object(i.useRef)(null),k=j("Enter"),p=j("Escape"),v=e.onSetText;o(O,(function(){n&&(v(d),r(!1))}));var g=Object(i.useCallback)((function(){k&&(v(d),r(!1))}),[k,d,v]),f=Object(i.useCallback)((function(){p&&(b(e.text),r(!1))}),[p,e.text]);Object(i.useEffect)((function(){n&&h.current.focus()}),[n]),Object(i.useEffect)((function(){n&&(g(),f())}),[g,f,n]);var y=Object(i.useCallback)((function(e){b(m.a.sanitize(e.target.value))}),[b]),S=Object(i.useCallback)((function(){return r(!0)}),[r]);return Object(a.jsxs)("span",{className:"inline-text",ref:O,children:[Object(a.jsx)("span",{ref:x,onClick:S,className:"inline-text_copy inline-text_copy--".concat(n?"hidden":"active"),children:e.text}),Object(a.jsx)("input",{ref:h,style:{minWidth:Math.ceil(d.length)+"ch"},value:d,onChange:y,className:"inline-text_input inline-text_input--".concat(n?"active":"hidden")})]})},O=[{title:"Ry\u0161ys",elements:["Pri\u0117mimas","Pagarba","Dalijimasis","\u012esitraukimas","Pritarimas","\u0160velnumas","\u012evertinimas","Priklausymas","Bendrumas","R\u016bpinimasis","Atidumas","Globa","Artumas","Komunikacija","Bendravimas","Bendruomen\u0117","Draugija","Draugyst\u0117","Atjauta","U\u017euojauta","D\u0117mesys","Empatija","\u012ekv\u0117pimas","Vientisumas","Intymumas","Meil\u0117","Partneryst\u0117"]},{title:"Ry\u0161ys ",elements:["Buvimas kartu","Savigarba","Sav\u0119s pri\u0117mimas","R\u016bpinimasis savimi","Ry\u0161ys su savimi","Sav\u0119s i\u0161rei\u0161kimas","Gird\u0117ti ir b\u016bti i\u0161girstu","Bendra tikrov\u0117","Dalinimasis tikrove","Stabilumas","Palaikymas","Pa\u017einti","B\u016bti pa\u017eintam","Pasteb\u0117ti","B\u016bti pasteb\u0117tam","Pasitik\u0117jimas","Supratimas"]},{title:"Prasm\u0117",elements:["S\u0105moningumas","\u0160ventimas","I\u0161\u0161\u016bkis","K\u016brybi\u0161kumas","Ai\u0161kumas","Skaidrumas","Sugeb\u0117jimas","Savimon\u0117","Prisid\u0117jimas","Atradimas","Naudingumas","Veiksmingumas","Produktyvumas","Pasisekimas","Augimas","Mokymasis","Ged\u0117jimas","Veiksmas","Dalyvavimas","Po\u017ei\u016bris","Perspektyva","Galimyb\u0117","Pa\u017eanga","Progresas","Tikslas","Stimulas","Tik\u0117jimas"]},{title:"Taika",elements:["Ramyb\u0117","Pusiausvyra","Balansas","Pakankamumas","Gro\u017eis","Bendryst\u0117","Lengvumas","Sklandumas","Darna","Viltis","Tvarka","Nuoseklumas"]},{title:"Autenti\u0161kumas",elements:["S\u0105\u017einingumas","Principingumas","Buvimas"]},{title:"Fizin\u0117 Gerov\u0117",elements:["Oras","Vanduo","Komfortas","Maistas","Jud\u0117jimas","Poilsis","Saugumas","Seksualumo i\u0161rai\u0161ka","Pastog\u0117","Prisilietimas"]},{title:"Autonomija",elements:["Laisv\u0117","Pasirinkimas","Orumas","Nepriklausomyb\u0117","Savirai\u0161ka","Erdv\u0117","Spontani\u0161kumas"]},{title:"\u017daidimas",elements:["Nuotykis","Susijaudinimas","Entuziazmas","Linksmumas","Smagumas","Humoras","D\u017eiaugsmas","Atsipalaidavimas","Stimuliavimas"]}],x=[{needs:"met",title:"Mylintis",elements:["Atjau\u010diantis","Gailestingas","Draugi\u0161kas","Meilus","Atvira\u0161irdis","Simpatizuojantis","\u0160velnus","\u0160iltas"]},{needs:"met",title:"Palaima",elements:["Ekstaz\u0117","Pakili nuotaika","\u017dvalus"]},{needs:"met",title:"D\u017eiaugsmas",elements:["Linksmas","Malonumas","D\u017eiugesys","Laim\u0117"]},{needs:"met",title:"\u012esitrauk\u0119s",elements:["Budrus","Smalsus","Paker\u0117tas","Transe","Su\u017eav\u0117tas","Susidom\u0117j\u0119s","Suintriguotas"]},{needs:"met",title:"Atsigav\u0119s",elements:["Pagyv\u0117j\u0119s","Atjaun\u0117j\u0119s","Atsinaujin\u0119s","Pails\u0117j\u0119s","Atsigaivin\u0119s"]},{needs:"met",title:"Taikus",elements:["Ramus","Ai\u0161kumas","Patogumas","Balansas","Patenkintas","Pasiruo\u0161\u0119s","Atsipalaidav\u0119s","Palengv\u0117jimas","Giedras","Romus"]},{needs:"met",title:"\u012ekv\u0117ptas",elements:["Steb\u0117tis","Nuostaba"]},{needs:"met",title:"Viltingas",elements:["Laukiantis","Padr\u0105sintas","Optimisti\u0161kas"]},{needs:"met",title:"D\u0117kingas",elements:["Vertinantis","Pakyl\u0117tas","Palyt\u0117tas"]},{needs:"met",title:"Sujaudintas",elements:["Gyvas","Judrus","U\u017esideg\u0119s","Su\u017eadintas","Susi\u017eav\u0117j\u0119s","Nekantraujantis","Trok\u0161tantis","Energingas","Entuziastingas","Apsvaig\u0119s","Gyvybingas","Aistringas","Kunkuliuojantis","Virpantis"]},{needs:"met",title:"Pasitikintis",elements:["\u012egalintas","Judrus","U\u017esideg\u0119s","Su\u017eadintas","Susi\u017eav\u0117j\u0119s","Nekantraujantis","Trok\u0161tantis","Energingas","Entuziastingas","Apsvaig\u0119s","Gyvybingas","Aistringas","Kunkuliuojantis","Virpantis"]}],h=[{needs:"unmet",title:"Sumi\u0161\u0119s",elements:["Priblok\u0161tas","Apsiblaus\u0119s","Dvejojantis","Ambivalenti\u0161kas","Nery\u017etingas","Pasimet\u0119s","Suglum\u0119s","Persipl\u0117\u0161\u0119s"]},{needs:"unmet",title:"\u012etampa",elements:["Kaprizingas","Susikrimt\u0119s","Pami\u0161\u0119s","Bruzdus","Nepas\u0117dus","Nerimastingas","Nervingas","Sukr\u0117stas","Nerimstantis","Nenustygstantis","Stresuojantis","Sugniu\u017edytas"]},{needs:"unmet",title:"Neramus",elements:["Susijaudin\u0119s","Sunerim\u0119s","Sutrik\u0119s","Susinervin\u0119s","\u0160okiruotas","Pritrenktas","Nusteb\u0119s","Audringas","Nepatogumas","Susir\u016bpin\u0119s","Permainingas"]},{needs:"unmet",title:"I\u0161sigand\u0119s",elements:["Nuog\u0105staujantis","Baim\u0117","Nuojauta","Nepatiklus","Panika","Suakmen\u0117j\u0119s","\u012etarus","Atsargus","Apdairus"]},{needs:"unmet",title:"Pa\u017eeid\u017eiamas",elements:["Trapus","Bej\u0117gis","Nesaugus","Sant\u016brus","U\u017edaras","U\u017esisklend\u0119s","Jautrus","Drebantis"]},{needs:"unmet",title:"Susig\u0117d\u0119s",elements:["Drovus","G\u0117da","Savigrau\u017ea","Kaltas","Susinepatogin\u0119s"]},{needs:"unmet",title:"Atsiskyr\u0119s",elements:["Padrikas","Neri\u0161lus","Svetimas","Nutol\u0119s","Nuobod\u017eiaujantis","\u0160altas","Tolimas","I\u0161sibla\u0161k\u0119s","Abejingas","Nutirp\u0119s","Nusi\u0161alin\u0119s","Nesuinteresuotas","Atsitrauk\u0119s","U\u017esisklend\u0119s"]},{needs:"unmet",title:"Susierzin\u0119s",elements:["Apmaudas","Irzlus","Nepatenkintas","Suirz\u0119s","Frustracija","Nekantrus","Sudirg\u0119s"]},{needs:"unmet",title:"Antipatija",elements:["Prie\u0161i\u0161kas","Pasibais\u0117j\u0119s","Panieka","\u0160leik\u0161tulys","Nem\u0117gimas","Neapykanta","Siaubas"]},{needs:"unmet",title:"Piktas",elements:["\u012esiut\u0119s","Pasiut\u0119s","\u012enir\u0161\u0119s","Pasipiktin\u0119s","\u012et\u016b\u017e\u0119s","\u012esi\u017eeid\u0119s","Ker\u0161tingas","Pagie\u017ea"]},{needs:"unmet",title:"Nuovargis",elements:["I\u0161sek\u0119s","I\u0161sieikvoj\u0119s","Mieguistas","Apati\u0161kas","I\u0161varg\u0119s","Nusikamav\u0119s"]},{needs:"unmet",title:"Li\u016bdnas",elements:["Prisl\u0117gtas","Nusimin\u0119s","Nusivyl\u0119s","Nedr\u0105sus","Bevilti\u0161kas","Vieni\u0161as","Ni\u016brus","Melancholija"]},{needs:"unmet",title:"Ilgesys",elements:["Pavydas","Pavyduliavimas","Tro\u0161kimas","Nostalgija","Kamavimasis"]},{needs:"unmet",title:"Skausmas",elements:["Agonija","Sielvartas","\u0160irdg\u0117la","Ged\u0117jimas","Susisieloj\u0119s","Su\u017eeistas","Nelaimingas","Apgailestaujantis","Atgailaujantis"]}],k=s(43),p=s(48),v=s(47),g=s(49),f=s(44),y=s(45),S=s(29),P=s(46);function N(){var e="black",t=Object(i.useState)([]),s=Object(u.a)(t,2),n=s[0],r=s[1],c=Object(i.useState)({color:e}),j=Object(u.a)(c,2),o=j[0],d=(j[1],Object(i.useState)("1 pus\u0117")),m=Object(u.a)(d,2),N=m[0],A=m[1],C=Object(i.useState)("2 pus\u0117"),E=Object(u.a)(C,2),T=E[0],w=E[1],B=Object(i.useState)("3 pus\u0117"),K=Object(u.a)(B,2),G=K[0],I=K[1],L=Object(i.useState)([]),D=Object(u.a)(L,2),z=(D[0],D[1],Object(i.useState)([])),J=Object(u.a)(z,2),R=J[0],M=J[1],V=Object(i.useState)([]),F=Object(u.a)(V,2),H=F[0],U=F[1],_=Object(i.useState)([]),W=Object(u.a)(_,2),q=W[0],Q=W[1],X=Object(i.useState)([]),Y=Object(u.a)(X,2),Z=(Y[0],Y[1],Object(i.useState)([])),$=Object(u.a)(Z,2),ee=$[0],te=$[1],se=Object(i.useState)([]),ae=Object(u.a)(se,2),ie=ae[0],ne=ae[1],re=Object(i.useState)([]),ce=Object(u.a)(re,2),le=ce[0],ue=ce[1],je="Pirma pus\u0117",oe="Antra pus\u0117",de="Abi pus\u0117s",me=function(t){var s=t.target.style.color,a=t.target.tagName,i=n==je?"red":n==oe?"blue":n==de?"green":void 0,r=t.target.textContent,c=t.target.parentElement.parentElement.parentElement.parentElement.className;console.log("target color: ".concat(s," choice color: ").concat(i,"\tagName: ").concat(a," text: ").concat(r," class: ").concat(c));var u=e;s!=i&&null!=u&&void 0!=i&&"LI"==a?(u=i,"poreikiai"==c&&(n==je&&-1===R.indexOf(r)&&(M((function(e){return[].concat(Object(l.a)(e),[r])})),U(H.filter((function(e){return e!==r}))),Q(q.filter((function(e){return e!==r})))),n==oe&&-1===H.indexOf(r)&&(U((function(e){return[].concat(Object(l.a)(e),[r])})),M(R.filter((function(e){return e!==r}))),Q(q.filter((function(e){return e!==r})))),n==de&&-1===q.indexOf(r)&&(Q((function(e){return[].concat(Object(l.a)(e),[r])})),M(R.filter((function(e){return e!==r}))),U(H.filter((function(e){return e!==r}))))),"jausmai"==c&&(n==je&&-1===ee.indexOf(r)&&(te((function(e){return[].concat(Object(l.a)(e),[r])})),ne(ie.filter((function(e){return e!==r}))),ue(le.filter((function(e){return e!==r})))),n==oe&&-1===ie.indexOf(r)&&(ne((function(e){return[].concat(Object(l.a)(e),[r])})),te(ee.filter((function(e){return e!==r}))),ue(le.filter((function(e){return e!==r})))),n==de&&-1===le.indexOf(r)&&(ue((function(e){return[].concat(Object(l.a)(e),[r])})),te(ee.filter((function(e){return e!==r}))),ne(ie.filter((function(e){return e!==r})))))):(u=null,"poreikiai"==c&&(M(R.filter((function(e){return e!==r}))),U(H.filter((function(e){return e!==r}))),Q(q.filter((function(e){return e!==r})))),"jausmai"==c&&(te(ee.filter((function(e){return e!==r}))),ne(ie.filter((function(e){return e!==r}))),ue(le.filter((function(e){return e!==r}))))),t.target.style.color=u,console.log(s),console.log(u)};return Object(a.jsxs)(k.a,{fluid:"false",style:{backgroundColor:"whitesmoke"},children:[Object(a.jsxs)(p.a,{variant:"info",children:["Pasirinkta: ",Object(a.jsx)("b",{children:n}),Object(a.jsxs)("div",{class:"puses",children:[Object(a.jsxs)("div",{class:"pusesElementas",onClick:function(e){return r(je)},children:[Object(a.jsx)("div",{class:"red column"}),Object(a.jsx)(b,{text:N,onSetText:function(e){return A(e)}})]}),Object(a.jsxs)("div",{class:"pusesElementas",onClick:function(){return r(oe)},children:[Object(a.jsx)("div",{class:"blue column"}),Object(a.jsx)(b,{text:T,onSetText:function(e){return w(e)}})]}),Object(a.jsxs)("div",{class:"pusesElementas",onClick:function(){return r(de)},children:[Object(a.jsx)("div",{class:"green column"}),Object(a.jsx)(b,{text:G,onSetText:function(e){return I(e)}})]})]})]}),Object(a.jsx)(v.a,{defaultActiveKey:"0",children:Object(a.jsxs)(g.a,{children:[Object(a.jsx)(g.a.Header,{children:Object(a.jsx)(v.a.Toggle,{as:f.a,variant:"link",eventKey:"0",children:"Poreikiai"})}),Object(a.jsx)(v.a.Collapse,{eventKey:"0",children:Object(a.jsxs)(g.a.Body,{children:[" ",Object(a.jsx)("div",{className:"Column",children:Object(a.jsx)(y.a,{children:O.map((function(e){return Object(a.jsxs)("div",{class:"poreikiai",children:[Object(a.jsx)("h4",{children:e.title}),Object(a.jsx)("div",{style:o,onClick:function(e){return me(e)},children:Object(a.jsx)("ol",{children:e.elements.map((function(e){return Object(a.jsx)(S.a,{children:Object(a.jsx)("li",{children:e},e)})}))})})]})}))})})]})})]})}),Object(a.jsx)(v.a,{children:Object(a.jsxs)(g.a,{children:[Object(a.jsx)(g.a.Header,{children:Object(a.jsx)(v.a.Toggle,{as:f.a,variant:"link",eventKey:"0",children:"Jausmai, kai poreikiai n\u0117ra patenkinti"})}),Object(a.jsx)(v.a.Collapse,{eventKey:"0",children:Object(a.jsxs)(g.a.Body,{children:[" ",Object(a.jsx)("div",{className:"Column",children:Object(a.jsx)(y.a,{children:h.map((function(e){return Object(a.jsxs)("div",{class:"jausmai",children:[Object(a.jsx)("h4",{children:e.title}),Object(a.jsx)("div",{style:o,onClick:function(e){return me(e)},children:Object(a.jsx)("ol",{children:e.elements.map((function(e){return Object(a.jsx)(S.a,{children:Object(a.jsx)("li",{children:e},e)})}))})})]})}))})})]})})]})}),Object(a.jsx)(v.a,{children:Object(a.jsxs)(g.a,{children:[Object(a.jsx)(g.a.Header,{children:Object(a.jsx)(v.a.Toggle,{as:f.a,variant:"link",eventKey:"0",children:"Jausmai, kai poreikiai patenkinti"})}),Object(a.jsx)(v.a.Collapse,{eventKey:"0",children:Object(a.jsxs)(g.a.Body,{children:[" ",Object(a.jsx)("div",{className:"Column",children:Object(a.jsx)(y.a,{children:x.map((function(e){return Object(a.jsxs)("div",{class:"jausmai",children:[Object(a.jsx)("h4",{children:e.title}),Object(a.jsx)("div",{style:o,onClick:function(e){return me(e)},children:Object(a.jsx)("ol",{children:e.elements.map((function(e){return Object(a.jsx)(S.a,{children:Object(a.jsx)("li",{children:e},e)})}))})})]})}))})})]})})]})}),Object(a.jsx)("hr",{}),Object(a.jsxs)(k.a,{children:[Object(a.jsx)("p",{children:"Konstruktyvus konflikto deeskalavimas atsi\u017evelgiant \u012f abiej\u0173 pusi\u0173 poreikius ir jausmus."}),Object(a.jsx)(v.a,{defaultActiveKey:"0",children:Object(a.jsx)("div",{className:"text",children:Object(a.jsxs)(g.a,{children:[Object(a.jsx)(g.a.Header,{children:Object(a.jsxs)(v.a.Toggle,{as:f.a,variant:"link",eventKey:"0",children:[Object(a.jsx)("b",{children:"1. \u017dingsnis."})," Atspind\u0117jimas kitos pus\u0117s jausmus ir poreikius."]})}),Object(a.jsx)(v.a.Collapse,{eventKey:"0",children:Object(a.jsx)(g.a.Body,{children:Object(a.jsxs)(y.a,{children:[Object(a.jsxs)(S.a,{children:[Object(a.jsx)("p",{children:Object(a.jsx)("b",{children:"Steb\u0117jimas"})})," ",Object(a.jsx)("p",{children:Object(a.jsx)("i",{children:"kai matau / gird\u017eiu"})}),Object(a.jsx)(P.a,{children:Object(a.jsx)(P.a.Group,{controlId:"exampleForm.ControlTextarea1",children:Object(a.jsx)(P.a.Control,{as:"textarea",rows:3})})})]}),Object(a.jsxs)(S.a,{children:[Object(a.jsx)("p",{children:Object(a.jsx)("b",{children:"Jausmai"})})," ",Object(a.jsx)("p",{children:Object(a.jsx)("i",{children:"atrodo, kad jauti"})}),le.map((function(e){return Object(a.jsx)("p",{class:"text ",style:{color:"green"},children:e})}))," ",ee.map((function(e){return Object(a.jsx)("p",{class:"text ",style:{color:"red"},children:e})}))," ",ie.map((function(e){return Object(a.jsx)("p",{class:"text ",style:{color:"blue"},children:e})}))," ",Object(a.jsx)(P.a,{children:Object(a.jsx)(P.a.Group,{controlId:"exampleForm.ControlTextarea1",children:Object(a.jsx)(P.a.Control,{as:"textarea",rows:3})})})]}),Object(a.jsxs)(S.a,{children:[Object(a.jsx)("p",{children:Object(a.jsx)("b",{children:"Poreikis"})})," ",Object(a.jsx)("p",{children:Object(a.jsx)("i",{children:"nes yra noras?"})}),q.map((function(e){return Object(a.jsx)("p",{class:"text ",style:{color:"green"},children:e})}))," ",R.map((function(e){return Object(a.jsx)("p",{class:"text ",style:{color:"red"},children:e})}))," ",H.map((function(e){return Object(a.jsx)("p",{class:"text ",style:{color:"blue"},children:e})}))," ",Object(a.jsx)(P.a,{children:Object(a.jsx)(P.a.Group,{controlId:"exampleForm.ControlTextarea1",children:Object(a.jsx)(P.a.Control,{as:"textarea",rows:3})})})]}),Object(a.jsx)(S.a,{children:"Ar gerai tave suprantu?"})]})})})]})})}),Object(a.jsx)("hr",{}),Object(a.jsx)(v.a,{className:"text",children:Object(a.jsxs)(g.a,{children:[Object(a.jsx)(g.a.Header,{children:Object(a.jsxs)(v.a.Toggle,{as:f.a,variant:"link",eventKey:"0",children:[Object(a.jsx)("b",{children:"2. \u017dingsnis."})," I\u0161sakymas savo jausm\u0173 ir poreiki\u0173."]})}),Object(a.jsx)(v.a.Collapse,{eventKey:"0",children:Object(a.jsx)(g.a.Body,{children:Object(a.jsxs)(y.a,{children:[Object(a.jsxs)(S.a,{children:[Object(a.jsx)("p",{children:Object(a.jsx)("b",{children:"Steb\u0117jimas"})})," ",Object(a.jsx)("p",{children:Object(a.jsx)("i",{children:"Pastebiu, kad:"})}),Object(a.jsx)(P.a,{children:Object(a.jsx)(P.a.Group,{controlId:"exampleForm.ControlTextarea1",children:Object(a.jsx)(P.a.Control,{as:"textarea",rows:3})})})]}),Object(a.jsxs)(S.a,{children:[Object(a.jsx)("p",{children:Object(a.jsx)("b",{children:"Jausmai"})})," ",Object(a.jsx)("p",{children:Object(a.jsx)("i",{children:"Jau\u010diu:"})}),Object(a.jsx)(P.a,{children:Object(a.jsx)(P.a.Group,{controlId:"exampleForm.ControlTextarea1",children:Object(a.jsx)(P.a.Control,{as:"textarea",rows:3})})})]}),Object(a.jsxs)(S.a,{children:[Object(a.jsx)("p",{children:Object(a.jsx)("b",{children:"Poreikis"})})," ",Object(a.jsx)("p",{children:Object(a.jsx)("i",{children:"Nes norisi:"})}),Object(a.jsx)(P.a,{children:Object(a.jsx)(P.a.Group,{controlId:"exampleForm.ControlTextarea1",children:Object(a.jsx)(P.a.Control,{as:"textarea",rows:3})})})]}),Object(a.jsxs)(S.a,{children:[Object(a.jsx)("p",{children:Object(a.jsx)("b",{children:"Pra\u0161umas"})})," ",Object(a.jsx)("p",{children:Object(a.jsx)("i",{children:"Ar tau tikt\u0173 jeigu...?"})}),Object(a.jsx)(P.a,{children:Object(a.jsx)(P.a.Group,{controlId:"exampleForm.ControlTextarea1",children:Object(a.jsx)(P.a.Control,{as:"textarea",rows:3})})})]})]})})})]})})]})]})}var A=document.getElementById("root");c.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(N,{})}),A)}},[[40,1,2]]]);
//# sourceMappingURL=main.3d206b8a.chunk.js.map