(function(e){function t(t){for(var o,n,l=t[0],i=t[1],c=t[2],f=0,p=[];f<l.length;f++)n=l[f],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&p.push(a[n][0]),a[n]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);u&&u(t);while(p.length)p.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],o=!0,l=1;l<r.length;l++){var i=r[l];0!==a[i]&&(o=!1)}o&&(s.splice(t--,1),e=n(n.s=r[0]))}return e}var o={},a={app:0},s=[];function n(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=o,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=i;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var o=r("85ec"),a=r.n(o);a.a},"4b13":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var o=r("2b0e"),a=r("5c96"),s=r.n(a),n=(r("0fae"),r("8be7"),r("4b13"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)}),l=[],i={name:"app"},c=i,u=(r("034f"),r("2877")),f=Object(u["a"])(c,n,l,!1,null,null,null),p=f.exports,m=r("8c4f"),d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("nav",[r("router-link",{attrs:{to:"/home"}},[e._v("首页")]),r("router-link",{attrs:{to:"/login"}},[e._v("登录")]),r("router-link",{attrs:{to:"/register"}},[e._v("注册")])],1),r("h1",[e._v("我是首页")])])},g=[],h={},b=h,v=Object(u["a"])(b,d,g,!1,null,null,null),w=v.exports,x=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"box"},[r("h2",[r("router-link",{staticClass:"text-secondary",attrs:{to:"/login"}},[e._v("登录")]),r("span",{staticClass:"text-dark"},[e._v("·")]),r("router-link",{staticClass:"text-secondary",attrs:{to:"/register"}},[e._v("注册")])],1),r("el-form",{ref:"loginForm",attrs:{model:e.formData,"label-width":"0px"}},[r("el-form-item",{attrs:{prop:"logUsername"}},[r("el-input",{attrs:{placeholder:"用户名"},model:{value:e.formData.logUsername,callback:function(t){e.$set(e.formData,"logUsername",t)},expression:"formData.logUsername"}},[r("i",{staticClass:"el-input__icon el-icon-user-solid",attrs:{slot:"prefix"},slot:"prefix"})])],1),r("el-form-item",{attrs:{prop:"logPassword"}},[r("el-input",{attrs:{type:"password",placeholder:"密码"},model:{value:e.formData.logPassword,callback:function(t){e.$set(e.formData,"logPassword",t)},expression:"formData.logPassword"}},[r("i",{staticClass:"el-input__icon el-icon-lock",attrs:{slot:"prefix"},slot:"prefix"})])],1),r("el-form-item",[r("el-button",{staticClass:"myw",attrs:{type:"primary"},on:{click:function(t){return e.onSubmitForm("loginForm")}}},[e._v("立即登录")])],1)],1)],1)},_=[],y={data:function(){return{formData:{logUsername:"",logPassword:""},rules:{logUsername:[{required:!0,message:"请输入用户名",trigger:"blur"}],logPassword:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},methods:{onSubmitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;console.log("submit!"),t.axios.post("http://127.0.0.1:3000/user/login",t.formData).then((function(e){console.log(e.data),1!=e.data.code&&2!=e.data.code&&3!=e.data.code?0==e.data.code&&(t.$message({message:e.data.message,type:"success"}),t.$router.push("/home")):t.$message({showClose:!0,message:e.data.message,type:"warning"})})).catch((function(e){console.error(e)}))}))}}},k=y,P=Object(u["a"])(k,x,_,!1,null,"62cc18a2",null),D=P.exports,$=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"box"},[r("h2",[r("router-link",{staticClass:"text-secondary",attrs:{to:"/login"}},[e._v("登录")]),r("span",{staticClass:"text-dark"},[e._v("·")]),r("router-link",{staticClass:"text-secondary",attrs:{to:"/register"}},[e._v("注册")])],1),r("el-form",{ref:"regForm",attrs:{model:e.formData,rules:e.rules,"label-width":"0px"}},[r("el-form-item",{attrs:{prop:"regUsername"}},[r("el-input",{attrs:{placeholder:"用户名"},model:{value:e.formData.regUsername,callback:function(t){e.$set(e.formData,"regUsername",t)},expression:"formData.regUsername"}},[r("i",{staticClass:"el-input__icon el-icon-user-solid",attrs:{slot:"prefix"},slot:"prefix"})])],1),r("el-form-item",{attrs:{label:"",prop:"regPassword"}},[r("el-input",{attrs:{type:"password",autocomplete:"off",placeholder:"密码"},model:{value:e.formData.regPassword,callback:function(t){e.$set(e.formData,"regPassword",t)},expression:"formData.regPassword"}},[r("i",{staticClass:"el-input__icon el-icon-lock",attrs:{slot:"prefix"},slot:"prefix"})])],1),r("el-form-item",{attrs:{label:"",prop:"checkPassword"}},[r("el-input",{attrs:{type:"password",autocomplete:"off",placeholder:"确认密码"},model:{value:e.formData.checkPassword,callback:function(t){e.$set(e.formData,"checkPassword",t)},expression:"formData.checkPassword"}},[r("i",{staticClass:"el-input__icon el-icon-lock",attrs:{slot:"prefix"},slot:"prefix"})])],1),r("el-form-item",[r("el-button",{staticClass:"myw",attrs:{type:"success"},on:{click:function(t){return e.onRegForm("regForm")}}},[e._v("立即注册")])],1)],1),r("p",{staticClass:"text-center text-secondary"},[e._v("点击 “注册” 即表示您同意并愿意遵守协议")])],1)},C=[],O={data:function(){var e=this,t=function(e,t,r){var o=/^\w{3,15}$/;o.test(t)?r():r(new Error("字母、数字、下划线组成"))},r=function(t,r,o){""===r?o(new Error("请再次输入密码")):r!==e.formData.regPassword?o(new Error("两次输入密码不一致!")):o()};return{formData:{regUsername:"",regPassword:"",checkPassword:""},rules:{regUsername:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:3,max:15,message:"长度3-16位之间",trigger:"blur"},{validator:t,trigger:"blur"}],regPassword:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:15,message:"长度6-15位之间",trigger:"blur"}],checkPassword:[{min:6,max:15,message:"长度6-15位之间",trigger:"blur"},{validator:r,trigger:"blur"}]}}},methods:{onRegForm:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;console.log("submit!"),t.axios.post("http://127.0.0.1:3000/user/register",t.formData).then((function(e){console.log(e.data),4!=e.data.code?0==e.data.code&&(t.$message({message:"恭喜您，注册成功",type:"success"}),t.$router.push("/login")):t.$message({showClose:!0,message:e.data.message,type:"warning"})})).catch((function(e){console.error(e)}))}))}}},j=O,U=Object(u["a"])(j,$,C,!1,null,"baa5d8ee",null),F=U.exports;o["default"].use(m["a"]);var E=new m["a"]({mode:"history",routes:[{path:"/",redirect:"/home"},{path:"/home",component:w},{path:"/login",component:D},{path:"/register",component:F}]}),S=E,q=r("bc3a"),M=r.n(q);o["default"].prototype.axios=M.a,o["default"].use(s.a),o["default"].config.productionTip=!1,new o["default"]({router:S,render:function(e){return e(p)}}).$mount("#app")},"85ec":function(e,t,r){},"8be7":function(e,t,r){}});
//# sourceMappingURL=app.c45ee4dc.js.map