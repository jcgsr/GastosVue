(function(t){function a(a){for(var s,r,i=a[0],l=a[1],c=a[2],d=0,p=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(a);while(p.length)p.shift()();return n.push.apply(n,c||[]),e()}function e(){for(var t,a=0;a<n.length;a++){for(var e=n[a],s=!0,i=1;i<e.length;i++){var l=e[i];0!==o[l]&&(s=!1)}s&&(n.splice(a--,1),t=r(r.s=e[0]))}return t}var s={},o={app:0},n=[];function r(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=s,r.d=function(t,a,e){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)r.d(e,s,function(a){return t[a]}.bind(null,s));return e},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=a,i=i.slice();for(var c=0;c<i.length;c++)a(i[c]);var u=l;n.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"0224":function(t,a,e){"use strict";var s=e("4045"),o=e.n(s);o.a},"034f":function(t,a,e){"use strict";var s=e("85ec"),o=e.n(s);o.a},"1a12":function(t,a,e){},4045:function(t,a,e){},4136:function(t,a,e){"use strict";var s=e("5086"),o=e.n(s);o.a},5086:function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("Navbar"),e("transition",{attrs:{mode:"out-in","enter-active-class":"animate__animated animate__rotateInDownLeft","leave-active-class":"animate__animated animate__rotateOutDownLeft"}},[e("router-view",{on:{authenticated:t.setAuthenticated}})],1),e("Footer")],1)},n=[],r=(e("ac1f"),e("5319"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"nav"},[e("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[t._m(0),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarColor02"}},[e("ul",{staticClass:"navbar-nav mr-auto"},[e("li",{staticClass:"nav-item active"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/form"}},[t._v("Formulário")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/tabela"}},[t._v("Tabela de Gastos")])],1)])])])])}),i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarColor02","aria-controls":"navbarColor02","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])}],l={name:"Navbar"},c=l,u=(e("5dfc"),e("2877")),d=Object(u["a"])(c,r,i,!1,null,null,null),p=d.exports,v=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("p",[t._v(t._s(t.currentDate))]),e("footer",{staticClass:"footer"},[t._v(" ©"+t._s(t.footer)+" "),e("br"),t._v(" "+t._s(t.footer2)+" "),e("br"),e("div",{staticClass:"foot"},[t._v(" "+t._s(t.msg)+" "),e("a",{staticClass:"btn btn-primary",attrs:{href:t.link}},[t._v("Jovane")])])])])},m=[],g={data:function(){return{footer:"2020 - GastosVue.",footer2:"Webapp para registrar os gastos mensais.",msg:"Criado e desenvolvido em Vue.js por ",link:"https://jcgsr.github.io/",currentDate:"Data de hoje..."}},methods:{dataAtual:function(){var t=new Date;this.currentDate=t.toLocaleDateString("pt-BR",{day:"2-digit",month:"short",year:"numeric"})}},mounted:function(){this.dataAtual()}},f=g,_=(e("a31c"),Object(u["a"])(f,v,m,!1,null,"3d3caa80",null)),h=_.exports,b={name:"App",data:function(){return{authenticated:!1,contaGastos:{username:"jovane",password:"8888"}}},mounted:function(){this.authenticated||this.$router.replace({name:"home"})},methods:{setAuthenticated:function(t){this.authenticated=t}},components:{Navbar:p,Footer:h}},C=b,y=(e("034f"),Object(u["a"])(C,o,n,!1,null,null,null)),w=y.exports,x=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"form"}},[e("h2",[t._v(t._s(t.titulo))]),e("form",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.gastos.dataAtual,expression:"gastos.dataAtual"}],attrs:{type:"date",name:"dataAtual",id:"dataAtual"},domProps:{value:t.gastos.dataAtual},on:{input:function(a){a.target.composing||t.$set(t.gastos,"dataAtual",a.target.value)}}}),e("fieldset",[e("label",{staticClass:"control-label"},[t._v("Casa")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.gastos.casa,expression:"gastos.casa"}],staticClass:"form-control",attrs:{name:"casa",id:"casa",type:"number",placeholder:"1.126"},domProps:{value:t.gastos.casa},on:{input:function(a){a.target.composing||t.$set(t.gastos,"casa",a.target.value)}}})]),e("fieldset",[e("label",{staticClass:"control-label"},[t._v("Luz")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.gastos.luz,expression:"gastos.luz"}],staticClass:"form-control",attrs:{name:"luz",id:"luz",type:"number",placeholder:"luz"},domProps:{value:t.gastos.luz},on:{input:function(a){a.target.composing||t.$set(t.gastos,"luz",a.target.value)}}})]),e("fieldset",[e("label",{staticClass:"control-label"},[t._v("Água")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.gastos.agua,expression:"gastos.agua"}],staticClass:"form-control",attrs:{name:"agua",id:"agua",type:"number",placeholder:"água"},domProps:{value:t.gastos.agua},on:{input:function(a){a.target.composing||t.$set(t.gastos,"agua",a.target.value)}}})]),e("fieldset",[e("label",{staticClass:"control-label"},[t._v("Ourocard")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.gastos.ouro,expression:"gastos.ouro"}],staticClass:"form-control",attrs:{name:"ouro",id:"ouro",type:"number",placeholder:"ouro"},domProps:{value:t.gastos.ouro},on:{input:function(a){a.target.composing||t.$set(t.gastos,"ouro",a.target.value)}}})]),e("fieldset",[e("label",{staticClass:"control-label"},[t._v("Net/TV")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.gastos.net_tv,expression:"gastos.net_tv"}],staticClass:"form-control",attrs:{name:"net_tv",id:"net_tv",type:"number",placeholder:"net_tv"},domProps:{value:t.gastos.net_tv},on:{input:function(a){a.target.composing||t.$set(t.gastos,"net_tv",a.target.value)}}})]),e("fieldset",[e("label",{staticClass:"control-label"},[t._v("Saúde")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.gastos.saude,expression:"gastos.saude"}],staticClass:"form-control",attrs:{name:"saude",id:"saude",type:"number",placeholder:"saúde"},domProps:{value:t.gastos.saude},on:{input:function(a){a.target.composing||t.$set(t.gastos,"saude",a.target.value)}}})]),e("fieldset",[e("label",{staticClass:"control-label"},[t._v("Educação")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.gastos.educacao,expression:"gastos.educacao"}],staticClass:"form-control",attrs:{name:"educacao",id:"educacao",type:"number",placeholder:"educação"},domProps:{value:t.gastos.educacao},on:{input:function(a){a.target.composing||t.$set(t.gastos,"educacao",a.target.value)}}})]),e("fieldset",[e("label",{staticClass:"control-label"},[t._v("Carro")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.gastos.carro,expression:"gastos.carro"}],staticClass:"form-control",attrs:{name:"carro",id:"carro",type:"number",placeholder:"528.9"},domProps:{value:t.gastos.carro},on:{input:function(a){a.target.composing||t.$set(t.gastos,"carro",a.target.value)}}})]),e("fieldset",[e("label",{staticClass:"control-label"},[t._v("INSS (Susi)")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.gastos.inss,expression:"gastos.inss"}],staticClass:"form-control",attrs:{name:"inss",id:"inss",type:"number",placeholder:"inss"},domProps:{value:t.gastos.inss},on:{input:function(a){a.target.composing||t.$set(t.gastos,"inss",a.target.value)}}})]),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.inserir(a)}}},[t._v("Inserir Gastos")]),e("hr"),e("table",{staticClass:"table table-hover"},[t._m(0),e("tbody",t._l(t.gastosDados,(function(a,s){return e("tr",{key:s,staticClass:"table-primary"},[e("td",[t._v(t._s(a.dataAtual))]),e("td",[t._v(t._s(a.casa))]),e("td",[t._v(t._s(a.luz))]),e("td",[t._v(t._s(a.agua))]),e("td",[t._v(t._s(a.ouro))]),e("td",[t._v(t._s(a.net_tv))]),e("td",[t._v(t._s(a.saude))]),e("td",[t._v(t._s(a.educacao))]),e("td",[t._v(t._s(a.carro))]),e("td",[t._v(t._s(a.inss))]),e("button",{staticClass:"btn btn-danger btn-sm",attrs:{type:"button"},on:{click:function(a){return t.excluir(s)}}},[t._v("Excluir")]),e("button",{staticClass:"btn btn-warning btn-sm ml-1",attrs:{type:"button"},on:{click:function(a){return t.carregar(s)}}},[t._v("Carregar")])])})),0)]),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.exibir}},[t._v("Alterar Gastos")])]),e("button",{staticClass:"btn btn-warning",attrs:{type:"button"},on:{click:function(a){return t.logout()}}},[t._v("Logout")])])},$=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("Data")]),e("th",{attrs:{scope:"col"}},[t._v("Casa")]),e("th",{attrs:{scope:"col"}},[t._v("Luz")]),e("th",{attrs:{scope:"col"}},[t._v("Água")]),e("th",{attrs:{scope:"col"}},[t._v("Ourocard")]),e("th",{attrs:{scope:"col"}},[t._v("Net/TV")]),e("th",{attrs:{scope:"col"}},[t._v("Saúde")]),e("th",{attrs:{scope:"col"}},[t._v("Educação")]),e("th",{attrs:{scope:"col"}},[t._v("Carro")]),e("th",{attrs:{scope:"col"}},[t._v("Inss")])])])}],j=e("5530"),k={data:function(){return{titulo:"Formulário de Gastos",name:"form",gastosDados:[],id:null,gastos:{dataAtual:"",casa:"",luz:"",agua:"",ouro:"",net_tv:"",saude:"",educacao:"",carro:"",inss:""}}},methods:{limpar:function(){this.gastos.dataAtual="",this.gastos.casa="",this.gastos.luz="",this.gastos.agua="",this.gastos.ouro="",this.gastos.net_tv="",this.gastos.saude="",this.gastos.educacao="",this.gastos.carro="",this.gastos.inss=""},inserir:function(){var t=this,a=this.id?"patch":"post",e=this.id?"/".concat(this.id,".json"):".json";this.$http[a]("/gastos".concat(e),this.gastos).then((function(){return t.limpar()})),alert("Gastos inseridos com sucesso!")},carregar:function(t){this.id=t,this.gastos=Object(j["a"])({},this.gastosDados[t])},exibir:function(){var t=this;this.$http.get("gastos.json").then((function(a){t.gastosDados=a.data,console.log(t.gastosDados)}))},excluir:function(t){this.$http.delete("/gastos/".concat(t,".json")).then((function(){return alert("Dados excluídos com sucesso!")}))},logout:function(){this.$router.replace({name:"home"})}}},O=k,D=(e("4136"),Object(u["a"])(O,x,$,!1,null,null,null)),N=D.exports,P=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"tabela"}},[e("h2",[t._v(t._s(t.titulo))]),e("table",{staticClass:"table table-hover"},[t._m(0),e("tbody",t._l(t.gastosDados,(function(a,s){return e("tr",{key:s,staticClass:"table-primary"},[e("td",[t._v(t._s(a.dataAtual))]),e("td",[t._v(t._s(a.casa))]),e("td",[t._v(t._s(a.luz))]),e("td",[t._v(t._s(a.agua))]),e("td",[t._v(t._s(a.ouro))]),e("td",[t._v(t._s(a.net_tv))]),e("td",[t._v(t._s(a.saude))]),e("td",[t._v(t._s(a.educacao))]),e("td",[t._v(t._s(a.carro))]),e("td",[t._v(t._s(a.inss))])])})),0)]),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.exibir}},[t._v("Exibir Gastos")])])},A=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("Data")]),e("th",{attrs:{scope:"col"}},[t._v("Casa")]),e("th",{attrs:{scope:"col"}},[t._v("Luz")]),e("th",{attrs:{scope:"col"}},[t._v("Água")]),e("th",{attrs:{scope:"col"}},[t._v("Ourocard")]),e("th",{attrs:{scope:"col"}},[t._v("Net/TV")]),e("th",{attrs:{scope:"col"}},[t._v("Saúde")]),e("th",{attrs:{scope:"col"}},[t._v("Educação")]),e("th",{attrs:{scope:"col"}},[t._v("Carro")]),e("th",{attrs:{scope:"col"}},[t._v("Inss")])])])}],E={data:function(){return{titulo:"Tabela de Gastos",gastosDados:[],id:null}},methods:{exibir:function(){var t=this;this.$http.get("gastos.json").then((function(a){t.gastosDados=a.data,console.log(t.gastosDados)}))}}},z=E,S=(e("0224"),Object(u["a"])(z,P,A,!1,null,null,null)),G=S.exports,L=e("8c4f"),T=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"form-group container"},[e("h2",{staticClass:"animate__animated animate__bounceIn"},[t._v(t._s(t.titulo))]),e("label",[t._v("Login")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.input.username,expression:"input.username"}],attrs:{type:"text",name:"username",placeholder:"Login"},domProps:{value:t.input.username},on:{input:function(a){a.target.composing||t.$set(t.input,"username",a.target.value)}}}),e("label",[t._v("Senha")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.input.password,expression:"input.password"}],attrs:{type:"password",name:"password",placeholder:"Senha"},domProps:{value:t.input.password},on:{input:function(a){a.target.composing||t.$set(t.input,"password",a.target.value)}}}),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(a){return t.login()}}},[t._v("Login")])])},I=[],F={data:function(){return{titulo:"Login para Inserir Gastos Mensais no Formulário",input:{username:"",password:""}}},methods:{login:function(){""!=this.input.username&&""!=this.input.password?this.input.username==this.$parent.contaGastos.username&&this.input.password==this.$parent.contaGastos.password?(this.$emit("authenticated",!0),this.$router.replace({name:"form"})):alert("Usuário e/ou senha está incorreta"):alert("Usuário e senha devem ser preenchidos.")}}},M=F,V=(e("e86b"),Object(u["a"])(M,T,I,!1,null,"ff6bdbde",null)),J=V.exports;s["a"].use(L["a"]);var U=new L["a"]({mode:"history",linkExactActiveClass:"link-active",routes:[{path:"/",name:"home",component:J},{path:"/form",name:"form",component:N},{path:"/tabela",name:"tabela",component:G}]}),R=e("bc3a"),B=e.n(R);B.a.defaults.baseURL="https://gastosvue.firebaseio.com/",s["a"].use({install:function(t){t.prototype.$http=B.a}});e("1157"),e("4989"),e("0a8d"),e("77ed");s["a"].config.productionTip=!1,s["a"].component([N,G]),new s["a"]({router:U,axios:void 0,render:function(t){return t(w)}}).$mount("#app")},"5dfc":function(t,a,e){"use strict";var s=e("1a12"),o=e.n(s);o.a},"7fd1":function(t,a,e){},"85ec":function(t,a,e){},a31c:function(t,a,e){"use strict";var s=e("7fd1"),o=e.n(s);o.a},d44d:function(t,a,e){},e86b:function(t,a,e){"use strict";var s=e("d44d"),o=e.n(s);o.a}});
//# sourceMappingURL=app.3b052886.js.map