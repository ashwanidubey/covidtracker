(this.webpackJsonplivecovidtracker=this.webpackJsonplivecovidtracker||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),i=n(5),s=n.n(i),o=(n(11),n(12),n(4)),a=n.n(o),d=n(6),u=n(2),l=n(0);var j=function(e){var t=e.state,n=e.confirmed,c=e.active,r=e.recovered,i=e.deaths;return Object(l.jsxs)("div",{id:"card",children:[Object(l.jsxs)("h1",{id:"heading",children:[t," "]}),Object(l.jsxs)("h2",{children:[" confirmed:",n]}),Object(l.jsxs)("h2",{children:[" active:",c]}),Object(l.jsxs)("h2",{children:[" recovered:",r]}),Object(l.jsxs)("h2",{children:[" deaths:",i]})]})};var f=function(e){var t=e.states,n=e.setselectedstates;return console.log("myform"),Object(l.jsxs)("div",{id:"myform",children:[Object(l.jsx)("h1",{children:"Select State"}),Object(l.jsx)("select",{id:"myselect",onChange:function(e){console.log("uff",e.target.value),n(e.target.value)},children:t.map((function(e){return Object(l.jsx)("option",{value:e,onSelect:function(){console.log(e,"uff"),n(e)},onClick:function(){console.log(e,"uff"),n(e)},children:e})}))})]})},h=(n(15),function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)([]),s=Object(u.a)(i,2),o=s[0],h=s[1],v=Object(c.useState)(""),b=Object(u.a)(v,2),O=b[0],x=b[1],g=function(){var e=Object(d.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("getcovid called"),e.next=3,fetch("https://api.covid19india.org/data.json").then((function(e){return e.json()})).then((function(e){return e.statewise}));case 3:t=e.sent,r(t),n=(n=t.map((function(e){return e.state}))).filter((function(e){return"State Unassigned"!==e&&"Total"!==e})),console.log("grat"+t),h(n);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){console.log("state",O),g(),console.log(n[0])}),[O]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{id:"header",children:[Object(l.jsx)("h1",{children:"\ud83d\udd34 Live"}),Object(l.jsx)("h2",{children:"COVID-19 Coronavirus Update"})]}),Object(l.jsx)(f,{states:o,setselectedstates:x}),Object(l.jsxs)("div",{id:"mycontainer",children:[Object(l.jsx)("div",{id:"mycountry",children:n.length&&Object(l.jsx)(j,{state:"INDIA",confirmed:n[0].confirmed,active:n[0].active,recovered:n[0].recovered,deaths:n[0].deaths})}),Object(l.jsx)("div",{id:"mystate",children:""!=O?Object(l.jsx)(j,{state:n.filter((function(e){return e.state==O}))[0].state,confirmed:n.filter((function(e){return e.state==O}))[0].confirmed,active:n.filter((function(e){return e.state==O}))[0].active,recovered:n.filter((function(e){return e.state==O}))[0].recovered,deaths:n.filter((function(e){return e.state==O}))[0].deaths}):Object(l.jsx)("h1",{children:"no state selected"})})]})]})});var v=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(h,{})})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),i(e),s(e)}))};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root")),b()}},[[16,1,2]]]);
//# sourceMappingURL=main.e40cf5ef.chunk.js.map