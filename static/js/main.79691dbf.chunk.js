(this["webpackJsonpczech-events"]=this["webpackJsonpczech-events"]||[]).push([[0],{16:function(e,t,n){e.exports=n(30)},21:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(9),c=n.n(o);n(21),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=n(13),i=n(1),s=n.n(i),u=n(3),m=n(4),h=n(14),v=n(10),d=n(15),p=function(){function e(t,n){Object(u.a)(this,e),this.from=t,this.to=n}return Object(m.a)(e,[{key:"isIn",value:function(e){return!(this.from&&this.from>e)&&!(this.to&&this.to<e)}}],[{key:"fromConstants",value:function(t,n){return new e(e.fromConstant(t).from,e.fromConstant(n).to)}},{key:"fromConstant",value:function(t){var n=new Date;switch(t){case"NOW":return new e(n,n);case"CURRENT_MONTH":return e.forMonth(n);case"NEXT_MONTH":return e.forMonth(new Date(n.getFullYear(),n.getMonth()+1,1));case"NEXT_NEXT_MONTH":return e.forMonth(new Date(n.getFullYear(),n.getMonth()+2,1));case"INFINITY":return new e;default:throw new Error('Unknown range constant "'.concat(t,'".'))}}},{key:"forMonth",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,n=t.getMonth(),r=t.getFullYear(),a=new Date(r,n,1),o=new Date(r,n+1,-1);return new e(a,o)}}]),e}();p.ALL=new p,p.CURRENT_MONTH=p.forMonth(),p.FROM_CURRENT_MONTH=new p(p.CURRENT_MONTH.from);var f,E,g=n(6),y=g.ConfigChecker.from({EVENTS_CSV_URL:"https://docs.google.com/spreadsheets/d/e/2PACX-1vRq0s15Wi8g4c61FOqIhpn0Lw4azPJdgQ3XmJ3uLDSCqQVs52nJa99YJjOGhl-XJZ713zCprzuYOpVu/pub?gid=0&single=true&output=csv"}).get("EVENTS_CSV_URL").url().required().value,b=n(5),w=n(11),N=n.n(w);function T(e){return Object.keys(e).map((function(t){return e[t]})).filter((function(e){return"string"===typeof e}))}!function(e){e.CONFERENCE="CONFERENCE",e.MEETUP="MEETUP",e.WORKSHOP="WORKSHOP",e.HACKATHON="HACKATHON"}(f||(f={})),function(e){e[e.CZK=0]="CZK",e[e.EUR=1]="EUR"}(E||(E={}));var O=function(){function e(t){Object(u.a)(this,e),this.name=void 0,this.topic=void 0,this.city=void 0,this.year=void 0,this.month=void 0,this.day=void 0,this.days=void 0,this.date=void 0,this.time=void 0,this.priceAmount=void 0,this.priceCurrency=void 0,this.codeName=void 0,this.codePercent=void 0,this.type=void 0,this.web=void 0,this.inMail=void 0,this.topParagraph=void 0,this.topParagraphOrder=void 0;var n=g.ConfigChecker.from(t);if(this.name=n.get("name").required().value,this.topic=n.get("topic").value,this.city=n.get("city").value,this.year=n.get("year").number().value,this.month=n.get("month").number().value,this.days=n.get("days").value,this.days&&(this.day=parseInt(this.days.split("-")[0].trim())),this.day&&isNaN(this.day))throw new Error('Day parsed from "'.concat(this.days,'" is NaN.'));if(this.year&&this.month&&this.day)try{if(this.date=new Date(this.year,this.month-1,this.day),isNaN(this.date.getDate()))throw new Error}catch(r){throw new Error("Cannot create a valie new Date(".concat(this.year,", ").concat(this.month," - 1, ").concat(this.day,");"))}if(this.time=n.get("time").value,this.priceAmount=n.get("priceAmount").number().value,this.priceCurrency=n.get("priceCurrency").value,this.codeName=n.get("codeName").value,this.codePercent=n.get("codePercent").number().value,this.codePercent&&(this.codePercent=this.codePercent/100),this.type=n.get("type").required().asType().value,!T(f).includes(this.type))throw new Error('Wrong type "'.concat(this.type,'".'));this.web=n.get("web").url().required().value,this.inMail=n.get("inMail").boolean().required().value,this.topParagraph=n.get("topParagraph").value,this.topParagraphOrder=n.get("topParagraphOrder").number().default(999).value}return Object(m.a)(e,[{key:"dateToCompare",get:function(){if(this.date)return this.date;if(this.year&&this.month)return new Date(this.year,this.month-1,25);var e=new Date;return e.setDate(e.getDate()+1e3),e}}]),e}();function C(e,t){return"string"===typeof e&&(e=void 0),"string"===typeof t&&(t=void 0),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Date;try{var n=new Date(t)-new Date(e);return n>0?-1:n<0?1:0}catch(r){return console.warn(r),-1}}(e?e.dateToCompare:void 0,t?t.dateToCompare:void 0)}function k(){var e,t,n,r;return s.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s.a.awrap(fetch(y.toString(),{cache:"reload"}));case 2:return e=a.sent,a.next=5,s.a.awrap(e.text());case 5:return t=a.sent,n=N.a.parse(t,{header:!0}),r=n.data,a.abrupt("return",r.map((function(e){return Object(b.emptyKeysAsUndefined)(e,(function(e){return!["","write","NULL"].includes((e||"").trim())}))})).map(b.decapitalize).filter(b.isNotEmpty).map((function(e){try{return new O(e)}catch(t){return t.message}})).sort(C));case 8:case"end":return a.stop()}}))}function j(e){var t=e.children;return r.createElement(r.Fragment,null,r.createElement("div",{className:"error"},t))}function P(){return r.createElement(r.Fragment,null,r.createElement("form",{action:"https://www.pavolhejny.com/wp-json/contact-form-7/v1/contact-forms/2466/feedback",method:"post",target:"_blank",onSubmit:function(e){var t,n,r;return s.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(e.preventDefault(),t=e.target,(n=new FormData(t)).get("gdpr")){a.next=6;break}return alert("Pot\u0159ebujeme od V\xe1s za\u0161krtnout souhlas se zpracov\xe1n\xedm osobn\xedch \xfadaj\u016f."),a.abrupt("return");case 6:return a.prev=6,a.t0=s.a,a.next=10,s.a.awrap(fetch(t.action,{method:"POST",body:n}));case 10:return a.t1=a.sent.json(),a.next=13,a.t0.awrap.call(a.t0,a.t1);case 13:if("mail_sent"===(r=a.sent).status){a.next=16;break}throw new Error(r.message);case 16:t.reset(),alert("D\u011bkujeme, m\u016f\u017eete se t\u011b\u0161it na dal\u0161\xed email!"),a.next=23;break;case 20:a.prev=20,a.t2=a.catch(6),alert(a.t2.message);case 23:case"end":return a.stop()}}),null,null,[[6,20]])}},r.createElement("input",{type:"hidden",name:"source",value:window.location.toString()}),r.createElement("div",{className:"group"},r.createElement("input",{type:"text",name:"fullname",className:"field"}),r.createElement("label",{htmlFor:"name"},"Va\u0161e jm\xe9no:"),r.createElement("div",{className:"bar"})),r.createElement("div",{className:"group"},r.createElement("input",{type:"email",name:"email",required:!0,defaultValue:"@",className:"field"}),r.createElement("label",{htmlFor:"email"},"E-mail: *"),r.createElement("div",{className:"bar"})),r.createElement("div",{className:"group"},r.createElement("label",null,r.createElement("input",{type:"checkbox",name:"gdpr"}),"Souhlas\xedm se zpracov\xe1n\xedm osobn\xedch \xfadaj\u016f")),r.createElement("div",{className:"center"},r.createElement("input",{value:"P\u0159ihl\xe1sit se ",type:"submit",id:"submit",name:"submit",className:"button"}))))}function M(){return r.createElement(r.Fragment,null,r.createElement("div",{className:"loading"},"Na\u010d\xedt\xe1n\xed..."))}var F=n(12);function z(e){var t=e.event,n=e.price;return n||(n=t.priceAmount),Object(F.isNullOrUndefined)(n)?r.createElement(r.Fragment,null):0===n?r.createElement(r.Fragment,null,"\ud83d\udcb8\xa0Zdarma"):r.createElement(r.Fragment,null,"\ud83d\udcb8\xa0","".concat(Math.ceil(100*n)/100," ").concat(function(e){switch(e){case"CZK":case E.CZK:return"K\u010d";case"EUR":case E.EUR:return"\u200e\u20ac";default:return e}}(t.priceCurrency)))}function _(e){var t=e.event,n=e.verbose;return r.createElement(r.Fragment,null,t.codeName&&t.codePercent&&t.priceAmount&&t.priceCurrency&&r.createElement(r.Fragment,null,r.createElement("br",null),"A s k\xf3dem ",r.createElement("b",null,t.codeName)," to budete m\xedt o ",Math.floor(100*t.codePercent),"% levn\u011bj\u0161\xed",n&&r.createElement(r.Fragment,null,", tzn. za ",r.createElement(z,{event:t,price:t.priceAmount*(1-t.codePercent)})),"."))}var R=n(2),D=n.n(R);n(8);function S(e){return e.substr(0,1).toUpperCase()+e.substr(1).toLowerCase()}function H(e){var t=e.event,n=t.date,a=t.year,o=t.month;if(!n){if(a&&o){var c=D()(o,"M").format("MMMM");return c=(c=S(c)).replace("\u010cervnaec","\u010cervenec"),r.createElement(r.Fragment,null,"\ud83d\udcc5\xa0",c," ",a)}return r.createElement(r.Fragment,null)}try{D.a.locale("cs");var l=D()(n).format("LLLL");return l=S(l=(l=(l=(l=(l=(l=(l=(l=(l=(l=(l=(l=(l=(l=l.split("0:00")[0]).replace("leden","ledna")).replace("\xfanor","\xfanora")).replace("b\u0159ezen","b\u0159ezna")).replace("duben","dubna")).replace("kv\u011bten","kv\u011btna")).replace("\u010derven","\u010dervna")).replace("\u010dervnaec","\u010dervenec")).replace("\u010dervenec","\u010dervence")).replace("srpen","srpna")).replace("z\xe1\u0159\xed","z\xe1\u0159\xed")).replace("\u0159\xedjen","\u0159\xedjna")).replace("listopad","listopadu")).replace("prosinec","prosince")),r.createElement(r.Fragment,null,"\ud83d\udcc5\xa0",l)}catch(i){return console.error("Problem when parsing moment('".concat(n,"').format('LLLL'); See more below:")),console.error(i),r.createElement(r.Fragment,null)}}function x(e){var t=e.event.time;if(!t)return r.createElement(r.Fragment,null);try{D.a.locale("cs");var n=D()(t,"hh A").format("LT");if("Invalid date"===n)throw new Error('Time was parsed as "Invalid date".');return r.createElement(r.Fragment,null,"\u23f1\ufe0f\xa0",n)}catch(a){return console.error("Problem when parsing moment('2010-10-20 ' + '".concat(t,"').format('LT'); See more below:")),console.error(a),r.createElement(r.Fragment,null)}}function I(e){var t=e.event;return r.createElement("span",{className:t.dateToCompare<new Date?"past":""},t.topParagraph?"\u2b50":"",r.createElement("a",{href:t.web.toString(),target:"_blank",rel:"nofolow noopener noreferrer"},r.createElement("b",null,t.name),t.topic?" \u2013 ".concat(t.topic):""),r.createElement("br",null),r.createElement(r.Fragment,null,"\ud83c\udf06\xa0",t.city),"\xa0",r.createElement(H,{event:t}),r.createElement(x,{event:t}),"\xa0",r.createElement(z,{event:t}),r.createElement(_,{event:t,verbose:!0}),r.createElement("br",null),r.createElement("br",null))}function U(e){var t=e.events,n=e.range,a=t.filter((function(e){return!(e instanceof O)||e.inMail})).filter((function(e){return!(e instanceof O)||n.isIn(e.dateToCompare)})),o=function(e){var t={},n=!0,r=!1,a=void 0;try{for(var o,c=T(f)[Symbol.iterator]();!(n=(o=c.next()).done);n=!0){t[o.value]=[]}}catch(y){r=!0,a=y}finally{try{n||null==c.return||c.return()}finally{if(r)throw a}}var l=!0,i=!1,s=void 0;try{for(var u,m=e[Symbol.iterator]();!(l=(u=m.next()).done);l=!0){var h=u.value,v=void 0;t[v=h instanceof O?h.type:"errors"]=t[v]||[],t[v].push(h)}}catch(y){i=!0,s=y}finally{try{l||null==m.return||m.return()}finally{if(i)throw s}}for(var d={},p=0,E=Object.keys(t);p<E.length;p++){var g=E[p];t[g].length>0&&(d[g]=t[g])}return d}(a);return r.createElement(r.Fragment,null,r.createElement("h2",null,"\ud83d\udcc5 Konference / meetupy / hackathony \u2013 co se d\u011bje z IT / Startupov\xe9 akce \ud83c\udf06"),"Ahoj,",r.createElement("br",null),"op\u011bt jsme dali dohromady seznam ud\xe1lost\xed, na kter\xe9 se vyplat\xed zaj\xedt:",r.createElement("br",null),a.filter((function(e){return e instanceof O})).filter((function(e){return e.topParagraph})).sort((function(e,t){return e.topParagraphOrder>t.topParagraphOrder?1:-1})).map((function(e,t){return r.createElement("p",{key:t,className:e.dateToCompare<new Date?"past":""},e.topParagraph,r.createElement(_,{event:e,verbose:!1}))})),Object.keys(o).map((function(e){return r.createElement("div",{key:e},r.createElement("br",null),r.createElement("h2",null,function(e){switch(e){case f.HACKATHON:return"Hackathony";case f.CONFERENCE:return"\u200eKonference";case f.MEETUP:return"\u200eMeetupy";case f.WORKSHOP:return"\u200eWorkshopy"}}(e)),r.createElement("span",null,o[e].map((function(e,t){return e instanceof O?r.createElement(I,{event:e,key:t}):r.createElement(j,{key:t},e)}))))})),r.createElement("br",null)," ",r.createElement("br",null),r.createElement("i",null,"PS: ",r.createElement("b",null,"Budeme r\xe1di za va\u0161e n\xe1vrhy a p\u0159ipom\xednky"),", m\u016f\u017eete ",r.createElement("b",null,"odpov\u011bd\u011bt rovnou na email"),".",r.createElement("br",null),"PPS: E-mail pos\xedl\xe1me na z\xe1klad\u011b Va\u0161\xed registrace na str\xe1nce"," ",r.createElement("a",{href:"https://czech.events/?utm_source=mail&utm_medium=referral&utm_campaign=2020-02_unsubscribe"},"czech.events"),". Pokud u\u017e dal\u0161\xed email nechcete dostat, napi\u0161te n\xe1m rychlou odpov\u011b\u010f."),r.createElement("br",null),r.createElement("br",null),r.createElement("a",{href:"https://www.pavolhejny.com/?utm_source=czech.events-mail&utm_medium=referral&utm_campaign=signature"},"Pavol Hejn\xfd"),"\xa0&\xa0",r.createElement("a",{href:"https://www.linkedin.com/in/tereza-texlova/"},"Tereza Texlov\xe1"))}var A=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(h.a)(this,Object(v.a)(t).call(this,e))).state={error:null,range:p.fromConstants("CURRENT_MONTH","NEXT_MONTH"),events:null},n.loadEvents(),n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"loadEvents",value:function(){var e;return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.awrap(k());case 3:e=t.sent,this.setState({events:e}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),this.setState({error:t.t0.message});case 10:case"end":return t.stop()}}),null,this,[[0,7]])}},{key:"render",value:function(){var e=this;return r.createElement(r.Fragment,null,r.createElement("div",{className:"content"},r.createElement("div",{className:"front black"},r.createElement("div",{className:"inner"},r.createElement("h1",null,"M\u011bjte p\u0159ehled o nejzaj\xedmav\u011bj\u0161\xedch ud\xe1lostech z IT & startupov\xe9ho sv\u011bta."),r.createElement("h2",{className:"font-light"},"Dejte n\xe1m Va\u0161\xed emailovou adresu a my V\xe1m budeme pravideln\u011b jednou za m\u011bs\xedc pos\xedlat co se d\u011bje:"),r.createElement(P,null),r.createElement("h2",{className:"separator font-light"},"A jak takov\xfd mail vypad\xe1? Tady m\xe1te \u017eivou uk\xe1zku z rozpracovan\xe9ho mailu",r.createElement("select",{className:"font-light option-in-text",onChange:function(t){var n=t.target.value.split("-"),r=Object(l.a)(n,2),a=r[0],o=r[1],c=p.fromConstants(a,o);e.setState({range:c})}},r.createElement("option",{value:"CURRENT_MONTH-NEXT_MONTH"},"na dal\u0161\xed m\u011bs\xedc + ud\xe1losti tohoto m\u011bs\xedce:"),r.createElement("option",{value:"NEXT_MONTH-NEXT_NEXT_MONTH"},"na dal\u0161\xed m\u011bs\xedc:"),r.createElement("option",{value:"NOW-INFINITY"},"se v\u0161emi ud\xe1lostmi, co pr\xe1v\u011b evidujeme do budoucna:"),r.createElement("option",{value:"INFINITY-INFINITY"},"se v\u0161emi ud\xe1lostmi, co pr\xe1v\u011b evidujeme:"))))),r.createElement("div",{className:"letter white"},r.createElement("div",{className:"inner"},this.state.error?r.createElement(j,null,r.createElement("pre",null,this.state.error)):this.state.events?r.createElement(U,{events:this.state.events,range:this.state.range}):r.createElement(M,null))),r.createElement("footer",{className:"footer black"})))}}]),t}(r.Component);c.a.render(a.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[16,1,2]]]);
//# sourceMappingURL=main.79691dbf.chunk.js.map