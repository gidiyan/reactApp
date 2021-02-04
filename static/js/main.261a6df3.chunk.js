(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{3:function(e,t,n){e.exports={header:"main_header__33rSF",headerWrapper:"main_headerWrapper__2G-RP",mainCard:"main_mainCard__2QfXi",img:"main_img__JENrv",item:"main_item__CeEFB",search:"main_search__38v6_",newCount:"main_newCount__1APBI",footer:"main_footer__16qdW",arrow:"main_arrow__Re4PG",buttonStyles:"main_buttonStyles__dAvyc"}},54:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(2),c=n(23),s=n.n(c),i=n(6),o=n(7),l=n(9),u=n(8),j=n(14),d=n(24),h=n.n(d),b=n(3),p=n.n(b),O=(p.a.header,p.a.headerWrapper,p.a.newCount,function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.backUp,n=e.countries;return Object(a.jsx)("div",{className:p.a.header,children:Object(a.jsxs)("div",{className:p.a.headerWrapper,children:[Object(a.jsx)("h3",{children:"WORLD COUNTRIES DATA"}),Object(a.jsxs)("h6",{children:["Currently, we have ",t.length," countries"]}),Object(a.jsxs)("h6",{id:"newCount",style:{display:"none"},className:p.a.newCount,children:[n.length>0?n.length:0," "," satisfied the search criteria"]})]})})}}]),n}(r.Component)),x=n(12),g=n(11),m=(p.a.footer,p.a.arrow,function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("footer",{className:p.a.footer,children:[Object(a.jsx)("h3",{children:"First React App"}),Object(a.jsxs)("div",{children:[Object(a.jsx)(x.b,{}),Object(a.jsx)(x.a,{}),Object(a.jsx)(x.c,{})]}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("small",{children:[" Copyright \xa9 ",(new Date).getFullYear()," "]}),Object(a.jsxs)("small",{children:["Developed by ",Object(a.jsx)("a",{href:"https://github.com/gidiyan",target:"_blank",children:"Hidiyan Eugene"})]})]}),Object(a.jsx)("div",{className:p.a.arrow,children:Object(a.jsx)("a",{href:"#root",children:Object(a.jsx)(g.a,{color:"orange"})})})]})}}]),n}(r.Component)),f=n(67),y=(p.a.header,p.a.headerWrapper,p.a.img),v=(p.a.mainCard,p.a.search,p.a.newCount,p.a.arrow),C=p.a.buttonStyles,_=function(e){var t=e.onChange;return Object(a.jsxs)("div",{style:{paddingTop:"10px",backgroundColor:"#f1f1f1"},children:[Object(a.jsx)("div",{className:p.a.search,children:Object(a.jsx)("input",{type:"text",placeholder:"Search countries by name, city and languages",onChange:t})}),Object(a.jsx)("div",{className:v,style:{textAlign:"center"},children:Object(a.jsx)("a",{href:"#countriesTable",children:Object(a.jsx)(g.b,{color:"orange"})})})]})},k=function(e){var t=e.countries,n=e.onMouseOnHandler;return t.map((function(e){var t=e.languages.length>1?"Languages":"Language",r=e.languages.map((function(e){return e.name})).join(", ");return Object(a.jsx)(f.a,{item:!0,xs:6,md:4,lg:3,xl:2,children:Object(a.jsxs)("div",{className:"country "+p.a.mainCard,id:"country "+e.numericCode,onMouseOver:n,onMouseOut:n,children:[Object(a.jsx)("img",{src:e.flag,className:y,alt:e.name}),Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:e.name}),Object(a.jsxs)("p",{children:["Capital: ",e.capital]}),Object(a.jsxs)("p",{children:[t,": ",r]}),Object(a.jsxs)("p",{children:["Population: ",e.population.toLocaleString("en-IN")]})]})]})},e.name)}))},w=function(e){var t=e.countries;t.sort((function(e,t){return e.population>t.population?-1:1}));var n=t.slice(0,9).map((function(e){return S(e,t)}));return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{style:{textAlign:"center",fontWeight:"bold",paddingBottom:20},children:"10 Most populated countries in the world"}),Object(a.jsxs)("table",{style:{margin:"auto",padding:20},children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{}),Object(a.jsx)("th",{}),Object(a.jsx)("th",{})]})}),Object(a.jsx)("tbody",{children:n})]})]})},N=function(e){var t=e.countries,n={};t.map((function(e){return e.languages.forEach((function(e){return 0===n.length?n[e.name]=1:Object.keys(n).includes(e.name)?++n[e.name]:n[e.name]=1}))}));var r=Object.entries(n).sort((function(e,t){return t[1]-e[1]})).slice(0,9).map((function(e){var t=Math.max.apply(Math,Object(j.a)(Object.values(n))),r=600*e[1]/t;return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{style:{textAlign:"center"},children:e[0]}),Object(a.jsx)("td",{className:"progress-bar",children:Object(a.jsx)("span",{style:{backgroundColor:"orange",width:r}})}),Object(a.jsx)("td",{style:{textAlign:"center"},children:e[1].toLocaleString("en-US")})]},e[0])}));return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{style:{textAlign:"center",fontWeight:"bold",paddingBottom:20},children:"10 Most populated languages in the world"}),Object(a.jsxs)("table",{style:{margin:"auto",padding:20},children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{}),Object(a.jsx)("th",{}),Object(a.jsx)("th",{})]})}),Object(a.jsx)("tbody",{children:r})]})]})},S=function(e,t){var n=t.map((function(e){return e.population})),r=Math.max.apply(Math,Object(j.a)(n)),c=600*e.population/r;return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{style:{textAlign:"center"},children:e.name}),Object(a.jsx)("td",{className:"progress-bar",children:Object(a.jsx)("span",{style:{backgroundColor:"orange",width:c}})}),Object(a.jsx)("td",{style:{textAlign:"center"},children:e.population.toLocaleString("en-US")})]},e.name)},A=function(e){var t=e.onClick;e.isTrue;return Object(a.jsxs)("div",{style:{textAlign:"center"},id:"countriesTable",children:[Object(a.jsx)("button",{className:C,value:"population",onClick:t,children:"Population"}),Object(a.jsx)("button",{className:C,value:"language",onClick:t,children:"Languages"})]})},U=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={countries:[],backUp:[],style:{transition:"1s"},transform:"",filter:"",isTrue:"population"},a.onMouseOnHandler=function(e){var t=""===a.state.transform?"scale(1.05)":"";e.target.closest(".country").style.transform=t,e.target.closest(".country").style.transition="1s",a.setState({transform:t})},a.onChange=function(e){var t=e.target.value.toLowerCase(),n=[],r=document.getElementById("newCount");r.style.display=""!==t?"block":"none",t>""?(n=a.state.backUp.filter((function(e){return e.name.toLowerCase().includes(t)})).concat(a.state.backUp.filter((function(e){return e.capital.toLowerCase().includes(t)}))),a.state.backUp.forEach((function(e){e.languages.forEach((function(a){a.name.toLowerCase().includes(t)&&n.push(e)}))})),n=n.filter((function(e,t){return n.indexOf(e)===t}))):n=a.state.backUp,a.setState({countries:n})},a.changeHandle=function(e){e.preventDefault(),"language"===e.target.value?a.setState({isTrue:"language"}):a.setState({isTrue:"population"})},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;h.a.get("https://restcountries.eu/rest/v2/all").then((function(t){e.setState({countries:t.data});var n=e.state.countries;e.setState({backUp:n})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(O,{backUp:this.state.backUp,countries:this.state.countries}),Object(a.jsx)(_,{onChange:this.onChange}),Object(a.jsx)(f.a,{className:"grid",container:!0,justify:"center",spacing:5,children:Object(a.jsx)(k,{countries:this.state.countries,onMouseOnHandler:this.onMouseOnHandler})}),Object(a.jsx)(A,{onClick:this.changeHandle,isTrue:this.state.isTrue}),"population"==this.state.isTrue?Object(a.jsx)(w,{countries:this.state.backUp}):Object(a.jsx)(N,{countries:this.state.backUp}),Object(a.jsx)(m,{})]})}}]),n}(r.Component),M=document.getElementById("root");s.a.render(Object(a.jsx)(U,{}),M)}},[[54,1,2]]]);
//# sourceMappingURL=main.261a6df3.chunk.js.map