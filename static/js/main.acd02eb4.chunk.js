(this["webpackJsonpreact-viacep"]=this["webpackJsonpreact-viacep"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),a=n(8),i=n.n(a),o=(n(17),n(2)),s=(n(18),function(e){return Object(c.jsx)("div",Object(o.a)(Object(o.a)({},e),{},{children:e.children}))}),u=(n(19),function(e){return Object(c.jsx)("button",Object(o.a)(Object(o.a)({},e),{},{children:e.children}))});u.defaultProps={type:"button"};var l=u,j=n(3),b=n(5),d=n(11),f=n(10),p=(n(20),function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{className:"form__group",children:Object(c.jsx)("input",Object(o.a)(Object(o.a)({},this.props),{},{className:"form__field"}))})}}]),n}(r.Component));p.defaultProps={type:"text"};var h=p,O=n.p+"static/media/map.69228c7a.svg",v=(n(21),function(e){return Object(c.jsx)("img",Object(o.a)({className:"map__location",src:O,alt:"Mapa de localiza\xe7\xe3o"},e))}),m=(n(22),function(e){return Object(c.jsx)("div",{className:"location",children:Object.keys(e.location).map((function(t,n){return Object(c.jsxs)("div",{className:"location__item",children:[Object(c.jsxs)("strong",{children:[t.toUpperCase(),":"]}),e.location[t]]},n)}))})}),x=n(4),g=function e(){Object(j.a)(this,e)};g.size=8,g.isValid=function(e){return/^[0-9]{8}$/.test(e)},g.crop=function(e,t,n){return e.substring(t,n)},g.hasHyphen=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-";return-1!==e.indexOf(t)},g.mask=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-",n=g.crop(e,0,e.length-3),c=g.crop(e,e.length-3,e.length),r=e;return g.hasHyphen(e)||(r="".concat(n).concat(t).concat(c)),r};var y=n(7),_=n.n(y),k=n(9),N=function(e){return"https://viacep.com.br/ws/".concat(e,"/json/")},C=function(){function e(){Object(j.a)(this,e)}return Object(b.a)(e,null,[{key:"getByCep",value:function(){var e=Object(k.a)(_.a.mark((function e(t){var n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(g.isValid(t)){e.next=2;break}throw Error("CEP inv\xe1lido!");case 2:return n=N(t),e.abrupt("return",fetch(n,{method:"GET"}).then((function(e){return e.json()})).catch((function(e){throw console.error(e),new Error("N\xe3o foi poss\xedvel encontrar o endere\xe7o. Por favor, tente novamente utilizando outro CEP.")})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),E=(n(24),function(e){var t,n,a,i=function(){var e=Object(r.useState)(""),t=Object(x.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),i=Object(x.a)(a,2),o=i[0],s=i[1],u=Object(r.useState)(!1),l=Object(x.a)(u,2),j=l[0],b=l[1];return[n,o,j,function(){s(""),c(""),b(!1)},function(){if(n.length<g.size)b(!0);else if(n.length>=g.size&&!g.isValid(n)){var e=g.mask(n);c(e),b(!1)}},function(e){var t=e.location,n=e.invalidZipcode;s(t),b(n)},function(e){var t=e.zipcode;return c(t)}]}(),u=Object(x.a)(i,7),j=u[0],b=u[1],d=u[2],f=u[3],p=u[4],O=u[5],v=u[6];return!0===d&&(t=Object(c.jsx)(s,{className:"alert alert__error",children:"Informe um CEP v\xe1lido."})),Object.keys(b).length>1&&(n=Object(c.jsx)(m,{location:b}),a=Object(c.jsx)(l,{onClick:f,className:"btn btn__danger",children:"Limpar resultados"})),Object(c.jsxs)("div",{children:[Object(c.jsxs)("form",Object(o.a)(Object(o.a)({},e),{},{onSubmit:function(e){e.preventDefault(),g.isValid(j)?C.getByCep(j).then((function(e){Object.keys(e).length>1?O({location:e,invalidZipcode:!1}):O({location:"",invalidZipcode:!0})})):O({location:"",invalidZipcode:!0})},className:"form-zipcode inline",children:[Object(c.jsx)(h,{type:"tel",value:j,onBlur:p,onChange:function(e){return v({zipcode:e.target.value})},placeholder:"Ex.: 99999999",maxLength:"8",name:"cep"}),Object(c.jsx)("div",{className:"form__group",children:Object(c.jsx)(l,{type:"submit",className:"btn btn__success",children:"Consultar"})})]})),t,n,a]})}),w=function(){return Object(c.jsxs)("div",{className:"app",children:[Object(c.jsx)(v,{height:"200"}),Object(c.jsx)("h1",{children:"Buscar endere\xe7o pelo CEP"}),Object(c.jsx)(E,{})]})},z=function(){return Object(c.jsx)(w,{})};i.a.render(Object(c.jsx)(z,{}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.acd02eb4.chunk.js.map