webpackJsonp([1],{0:function(l,n,u){l.exports=u("l57A")},l57A:function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=u("/oeL");u("tnZk"),u("eFQL");function t(){return window.location.origin}function i(){return{cookie:document.cookie}}var d=function(){return function(){}}(),o=this&&this.__awaiter||function(l,n,u,e){return new(u||(u=Promise))(function(t,i){function d(l){try{r(e.next(l))}catch(l){i(l)}}function o(l){try{r(e.throw(l))}catch(l){i(l)}}function r(l){l.done?t(l.value):new u(function(n){n(l.value)}).then(d,o)}r((e=e.apply(l,n||[])).next())})},r=this&&this.__generator||function(l,n){var u,e,t,i,d={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return i={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function o(i){return function(o){return function(i){if(u)throw new TypeError("Generator is already executing.");for(;d;)try{if(u=1,e&&(t=e[2&i[0]?"return":i[0]?"throw":"next"])&&!(t=t.call(e,i[1])).done)return t;switch(e=0,t&&(i=[0,t.value]),i[0]){case 0:case 1:t=i;break;case 4:return d.label++,{value:i[1],done:!1};case 5:d.label++,e=i[1],i=[0];continue;case 7:i=d.ops.pop(),d.trys.pop();continue;default:if(!(t=(t=d.trys).length>0&&t[t.length-1])&&(6===i[0]||2===i[0])){d=0;continue}if(3===i[0]&&(!t||i[1]>t[0]&&i[1]<t[3])){d.label=i[1];break}if(6===i[0]&&d.label<t[1]){d.label=t[1],t=i;break}if(t&&d.label<t[2]){d.label=t[2],d.ops.push(i);break}t[2]&&d.ops.pop(),d.trys.pop();continue}i=n.call(l,d)}catch(l){i=[6,l],e=0}finally{u=t=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,o])}}},s=function(){function l(){this.musicAuthorList=[],this.musicList=[],this.displayMusicList=[],this.userExist=!0,this.accountList=[],this.isUserLogedIn=!1,this.musicListExist=!1,this.accountExist=!0,this.musicDetailsExist=!1,this.selectedAuthor="All"}return l.prototype.ngOnInit=function(){this.musicAuthorList=window.TRANSFER_CACHE.fromDotnet.authors,this.musicList=window.TRANSFER_CACHE.fromDotnet.products,this.displayMusicList=window.TRANSFER_CACHE.fromDotnet.products},l.prototype.changeForm=function(){this.userExist=!this.userExist},l.prototype.registration=function(l){l.invalid||(this.accountList.push({name:l.value.name,password:l.value.password}),this.changeForm(),console.log(l))},l.prototype.login=function(l){return o(this,void 0,void 0,function(){return r(this,function(n){return l.invalid?[2]:(this.accountData=this.accountList.filter(function(n){return n.name==l.value.name&&n.password==l.value.password})[0],null==this.accountData?[2]:(this.accountExist=!1,this.musicListExist=!0,this.accountData=l,console.log(l),[2]))})})},l.prototype.filterMusic=function(l){l?(this.displayMusicList=this.musicList.filter(function(n){return n.author===l}),this.selectedAuthor=this.musicAuthorList.filter(function(n){return n===l})[0].name):(this.displayMusicList=this.musicList,this.selectedAuthor="All")},l.prototype.detailsMusic=function(l){this.musicListExist=!this.musicListExist,this.musicDetailsExist=!this.musicDetailsExist,this.detailsProduct=l},l}(),a=u("bm2B"),c=u("qbdv"),p=[[""]],m=e["\u0275crt"]({encapsulation:0,styles:p,data:{}});function g(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,56,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var t=!0,i=l.component;"submit"===n&&(t=!1!==e["\u0275nov"](l,2).onSubmit(u)&&t);"reset"===n&&(t=!1!==e["\u0275nov"](l,2).onReset()&&t);"ngSubmit"===n&&(t=!1!==i.registration(e["\u0275nov"](l,2))&&t);return t},null,null)),e["\u0275did"](1,16384,null,0,a.n,[],null,null),e["\u0275did"](2,16384,[["registrationForm",4]],0,a.j,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),e["\u0275prd"](2048,null,a.b,null,[a.j]),e["\u0275did"](4,16384,null,0,a.i,[a.b],null,null),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](6,0,null,null,13,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](8,0,null,null,1,"label",[["for","email"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Email"])),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](11,0,null,null,7,"input",[["aria-describedby","emailHelp"],["class","form-control"],["id","email"],["name","email"],["ngModel",""],["placeholder","Enter Email"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0;"input"===n&&(t=!1!==e["\u0275nov"](l,12)._handleInput(u.target.value)&&t);"blur"===n&&(t=!1!==e["\u0275nov"](l,12).onTouched()&&t);"compositionstart"===n&&(t=!1!==e["\u0275nov"](l,12)._compositionStart()&&t);"compositionend"===n&&(t=!1!==e["\u0275nov"](l,12)._compositionEnd(u.target.value)&&t);return t},null,null)),e["\u0275did"](12,16384,null,0,a.c,[e.Renderer2,e.ElementRef,[2,a.a]],null,null),e["\u0275did"](13,16384,null,0,a.l,[],{required:[0,"required"]},null),e["\u0275prd"](1024,null,a.e,function(l){return[l]},[a.l]),e["\u0275prd"](1024,null,a.f,function(l){return[l]},[a.c]),e["\u0275did"](16,671744,null,0,a.k,[[2,a.b],[2,a.e],[8,null],[2,a.f]],{name:[0,"name"],model:[1,"model"]},null),e["\u0275prd"](2048,null,a.g,null,[a.k]),e["\u0275did"](18,16384,null,0,a.h,[a.g],null,null),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](21,0,null,null,13,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](23,0,null,null,1,"label",[["for","name"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["User Name"])),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](26,0,null,null,7,"input",[["class","form-control"],["id","name"],["name","name"],["ngModel",""],["placeholder","Enter User Name"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0;"input"===n&&(t=!1!==e["\u0275nov"](l,27)._handleInput(u.target.value)&&t);"blur"===n&&(t=!1!==e["\u0275nov"](l,27).onTouched()&&t);"compositionstart"===n&&(t=!1!==e["\u0275nov"](l,27)._compositionStart()&&t);"compositionend"===n&&(t=!1!==e["\u0275nov"](l,27)._compositionEnd(u.target.value)&&t);return t},null,null)),e["\u0275did"](27,16384,null,0,a.c,[e.Renderer2,e.ElementRef,[2,a.a]],null,null),e["\u0275did"](28,16384,null,0,a.l,[],{required:[0,"required"]},null),e["\u0275prd"](1024,null,a.e,function(l){return[l]},[a.l]),e["\u0275prd"](1024,null,a.f,function(l){return[l]},[a.c]),e["\u0275did"](31,671744,null,0,a.k,[[2,a.b],[2,a.e],[8,null],[2,a.f]],{name:[0,"name"],model:[1,"model"]},null),e["\u0275prd"](2048,null,a.g,null,[a.k]),e["\u0275did"](33,16384,null,0,a.h,[a.g],null,null),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](36,0,null,null,13,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](38,0,null,null,1,"label",[["for","password"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Password"])),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](41,0,null,null,7,"input",[["class","form-control"],["id","password"],["name","password"],["ngModel",""],["placeholder","Password"],["required",""],["type","password"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0;"input"===n&&(t=!1!==e["\u0275nov"](l,42)._handleInput(u.target.value)&&t);"blur"===n&&(t=!1!==e["\u0275nov"](l,42).onTouched()&&t);"compositionstart"===n&&(t=!1!==e["\u0275nov"](l,42)._compositionStart()&&t);"compositionend"===n&&(t=!1!==e["\u0275nov"](l,42)._compositionEnd(u.target.value)&&t);return t},null,null)),e["\u0275did"](42,16384,null,0,a.c,[e.Renderer2,e.ElementRef,[2,a.a]],null,null),e["\u0275did"](43,16384,null,0,a.l,[],{required:[0,"required"]},null),e["\u0275prd"](1024,null,a.e,function(l){return[l]},[a.l]),e["\u0275prd"](1024,null,a.f,function(l){return[l]},[a.c]),e["\u0275did"](46,671744,null,0,a.k,[[2,a.b],[2,a.e],[8,null],[2,a.f]],{name:[0,"name"],model:[1,"model"]},null),e["\u0275prd"](2048,null,a.g,null,[a.k]),e["\u0275did"](48,16384,null,0,a.h,[a.g],null,null),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](51,0,null,null,1,"button",[["class","btn btn-secondary"],["type","button"]],null,[[null,"click"]],function(l,n,u){var e=!0,t=l.component;"click"===n&&(e=!1!==t.changeForm()&&e);return e},null,null)),(l()(),e["\u0275ted"](-1,null,["Back to Login"])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](54,0,null,null,1,"button",[["class","btn btn-success float-right"],["type","submit"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Registration"])),(l()(),e["\u0275ted"](-1,null,["\n        "]))],function(l,n){l(n,13,0,"");l(n,16,0,"email","");l(n,28,0,"");l(n,31,0,"name","");l(n,43,0,"");l(n,46,0,"password","")},function(l,n){l(n,0,0,e["\u0275nov"](n,4).ngClassUntouched,e["\u0275nov"](n,4).ngClassTouched,e["\u0275nov"](n,4).ngClassPristine,e["\u0275nov"](n,4).ngClassDirty,e["\u0275nov"](n,4).ngClassValid,e["\u0275nov"](n,4).ngClassInvalid,e["\u0275nov"](n,4).ngClassPending),l(n,11,0,e["\u0275nov"](n,13).required?"":null,e["\u0275nov"](n,18).ngClassUntouched,e["\u0275nov"](n,18).ngClassTouched,e["\u0275nov"](n,18).ngClassPristine,e["\u0275nov"](n,18).ngClassDirty,e["\u0275nov"](n,18).ngClassValid,e["\u0275nov"](n,18).ngClassInvalid,e["\u0275nov"](n,18).ngClassPending),l(n,26,0,e["\u0275nov"](n,28).required?"":null,e["\u0275nov"](n,33).ngClassUntouched,e["\u0275nov"](n,33).ngClassTouched,e["\u0275nov"](n,33).ngClassPristine,e["\u0275nov"](n,33).ngClassDirty,e["\u0275nov"](n,33).ngClassValid,e["\u0275nov"](n,33).ngClassInvalid,e["\u0275nov"](n,33).ngClassPending),l(n,41,0,e["\u0275nov"](n,43).required?"":null,e["\u0275nov"](n,48).ngClassUntouched,e["\u0275nov"](n,48).ngClassTouched,e["\u0275nov"](n,48).ngClassPristine,e["\u0275nov"](n,48).ngClassDirty,e["\u0275nov"](n,48).ngClassValid,e["\u0275nov"](n,48).ngClassInvalid,e["\u0275nov"](n,48).ngClassPending)})}function f(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,38,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var t=!0,i=l.component;"submit"===n&&(t=!1!==e["\u0275nov"](l,2).onSubmit(u)&&t);"reset"===n&&(t=!1!==e["\u0275nov"](l,2).onReset()&&t);"ngSubmit"===n&&(t=!1!==i.login(e["\u0275nov"](l,2))&&t);return t},null,null)),e["\u0275did"](1,16384,null,0,a.n,[],null,null),e["\u0275did"](2,16384,[["loginForm",4]],0,a.j,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),e["\u0275prd"](2048,null,a.b,null,[a.j]),e["\u0275did"](4,16384,null,0,a.i,[a.b],null,null),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](6,0,null,null,13,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](8,0,null,null,1,"label",[["for","login"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Login"])),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](11,0,null,null,7,"input",[["class","form-control"],["id","name"],["name","name"],["ngModel",""],["placeholder","Enter Login"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0;"input"===n&&(t=!1!==e["\u0275nov"](l,12)._handleInput(u.target.value)&&t);"blur"===n&&(t=!1!==e["\u0275nov"](l,12).onTouched()&&t);"compositionstart"===n&&(t=!1!==e["\u0275nov"](l,12)._compositionStart()&&t);"compositionend"===n&&(t=!1!==e["\u0275nov"](l,12)._compositionEnd(u.target.value)&&t);return t},null,null)),e["\u0275did"](12,16384,null,0,a.c,[e.Renderer2,e.ElementRef,[2,a.a]],null,null),e["\u0275did"](13,16384,null,0,a.l,[],{required:[0,"required"]},null),e["\u0275prd"](1024,null,a.e,function(l){return[l]},[a.l]),e["\u0275prd"](1024,null,a.f,function(l){return[l]},[a.c]),e["\u0275did"](16,671744,null,0,a.k,[[2,a.b],[2,a.e],[8,null],[2,a.f]],{name:[0,"name"],model:[1,"model"]},null),e["\u0275prd"](2048,null,a.g,null,[a.k]),e["\u0275did"](18,16384,null,0,a.h,[a.g],null,null),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](21,0,null,null,13,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](23,0,null,null,1,"label",[["for","password"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Password"])),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](26,0,null,null,7,"input",[["class","form-control"],["id","password"],["name","password"],["ngModel",""],["placeholder","Password"],["required",""],["type","password"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0;"input"===n&&(t=!1!==e["\u0275nov"](l,27)._handleInput(u.target.value)&&t);"blur"===n&&(t=!1!==e["\u0275nov"](l,27).onTouched()&&t);"compositionstart"===n&&(t=!1!==e["\u0275nov"](l,27)._compositionStart()&&t);"compositionend"===n&&(t=!1!==e["\u0275nov"](l,27)._compositionEnd(u.target.value)&&t);return t},null,null)),e["\u0275did"](27,16384,null,0,a.c,[e.Renderer2,e.ElementRef,[2,a.a]],null,null),e["\u0275did"](28,16384,null,0,a.l,[],{required:[0,"required"]},null),e["\u0275prd"](1024,null,a.e,function(l){return[l]},[a.l]),e["\u0275prd"](1024,null,a.f,function(l){return[l]},[a.c]),e["\u0275did"](31,671744,null,0,a.k,[[2,a.b],[2,a.e],[8,null],[2,a.f]],{name:[0,"name"],model:[1,"model"]},null),e["\u0275prd"](2048,null,a.g,null,[a.k]),e["\u0275did"](33,16384,null,0,a.h,[a.g],null,null),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](36,0,null,null,1,"button",[["class","btn btn-success"],["type","submit"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Login"])),(l()(),e["\u0275ted"](-1,null,["\n        "]))],function(l,n){l(n,13,0,"");l(n,16,0,"name","");l(n,28,0,"");l(n,31,0,"password","")},function(l,n){l(n,0,0,e["\u0275nov"](n,4).ngClassUntouched,e["\u0275nov"](n,4).ngClassTouched,e["\u0275nov"](n,4).ngClassPristine,e["\u0275nov"](n,4).ngClassDirty,e["\u0275nov"](n,4).ngClassValid,e["\u0275nov"](n,4).ngClassInvalid,e["\u0275nov"](n,4).ngClassPending),l(n,11,0,e["\u0275nov"](n,13).required?"":null,e["\u0275nov"](n,18).ngClassUntouched,e["\u0275nov"](n,18).ngClassTouched,e["\u0275nov"](n,18).ngClassPristine,e["\u0275nov"](n,18).ngClassDirty,e["\u0275nov"](n,18).ngClassValid,e["\u0275nov"](n,18).ngClassInvalid,e["\u0275nov"](n,18).ngClassPending),l(n,26,0,e["\u0275nov"](n,28).required?"":null,e["\u0275nov"](n,33).ngClassUntouched,e["\u0275nov"](n,33).ngClassTouched,e["\u0275nov"](n,33).ngClassPristine,e["\u0275nov"](n,33).ngClassDirty,e["\u0275nov"](n,33).ngClassValid,e["\u0275nov"](n,33).ngClassInvalid,e["\u0275nov"](n,33).ngClassPending)})}function v(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,7,"div",[["class","col-lg-12"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](2,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Have you got any account? Click\n          "])),(l()(),e["\u0275eld"](4,0,null,null,1,"a",[["href","javascript:void(0);"]],null,[[null,"click"]],function(l,n,u){var e=!0,t=l.component;"click"===n&&(e=!1!==t.changeForm()&&e);return e},null,null)),(l()(),e["\u0275ted"](-1,null,["here"])),(l()(),e["\u0275ted"](-1,null,["."])),(l()(),e["\u0275ted"](-1,null,["\n      "]))],null,null)}function h(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,19,"div",[["class","album py-5 bg-light"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n  "])),(l()(),e["\u0275eld"](2,0,null,null,16,"div",[["class","container"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275eld"](4,0,null,null,13,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275eld"](6,0,null,null,7,"div",[["class","col-lg-4"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275and"](16777216,null,null,1,null,g)),e["\u0275did"](9,16384,null,0,c.d,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275and"](16777216,null,null,1,null,f)),e["\u0275did"](12,16384,null,0,c.d,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275and"](16777216,null,null,1,null,v)),e["\u0275did"](16,16384,null,0,c.d,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275ted"](-1,null,["\n  "])),(l()(),e["\u0275ted"](-1,null,["\n"]))],function(l,n){var u=n.component;l(n,9,0,!u.userExist),l(n,12,0,u.userExist),l(n,16,0,u.userExist)},null)}function b(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,4,"li",[["class","list-group-item"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275eld"](2,0,null,null,1,"a",[["href","#"]],null,[[null,"click"]],function(l,n,u){var e=!0,t=l.component;"click"===n&&(e=!1!==t.filterMusic(l.context.$implicit)&&e);return e},null,null)),(l()(),e["\u0275ted"](3,null,["",""])),(l()(),e["\u0275ted"](-1,null,["\n            "]))],null,function(l,n){l(n,3,0,n.context.$implicit)})}function y(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,21,"div",[["class","col-md-4"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275eld"](2,0,null,null,18,"div",[["class","card mb-4 box-shadow"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                "])),(l()(),e["\u0275eld"](4,0,null,null,0,"img",[["class","card-img-top"],["style","height: 225px; width: 100%; display: block;"]],[[8,"src",4]],null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                "])),(l()(),e["\u0275eld"](6,0,null,null,13,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                  "])),(l()(),e["\u0275eld"](8,0,null,null,1,"p",[["class","card-text"]],null,null,null,null,null)),(l()(),e["\u0275ted"](9,null,["",""])),(l()(),e["\u0275ted"](-1,null,["\n                  "])),(l()(),e["\u0275eld"](11,0,null,null,7,"div",[["class","d-flex justify-content-between align-items-center"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                    "])),(l()(),e["\u0275eld"](13,0,null,null,4,"div",[["class","btn-group"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                      "])),(l()(),e["\u0275eld"](15,0,null,null,1,"button",[["class","btn btn-sm btn-outline-secondary"],["type","button"]],null,[[null,"click"]],function(l,n,u){var e=!0,t=l.component;"click"===n&&(e=!1!==t.detailsMusic(l.context.$implicit)&&e);return e},null,null)),(l()(),e["\u0275ted"](-1,null,["Details"])),(l()(),e["\u0275ted"](-1,null,["\n                    "])),(l()(),e["\u0275ted"](-1,null,["\n                  "])),(l()(),e["\u0275ted"](-1,null,["\n                "])),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275ted"](-1,null,["\n            "]))],null,function(l,n){l(n,4,0,n.context.$implicit.image),l(n,9,0,n.context.$implicit.name)})}function C(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,43,"div",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n  "])),(l()(),e["\u0275eld"](2,0,null,null,40,"div",[["class","album py-5 bg-light"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275eld"](4,0,null,null,37,"div",[["class","container"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275eld"](6,0,null,null,34,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](8,0,null,null,13,"div",[["class","col-md-3"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](10,0,null,null,10,"ul",[["class","list-group"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](12,0,null,null,4,"li",[["class","list-group-item"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275eld"](14,0,null,null,1,"a",[["href","#"]],null,[[null,"click"]],function(l,n,u){var e=!0,t=l.component;"click"===n&&(e=!1!==t.filterMusic(null)&&e);return e},null,null)),(l()(),e["\u0275ted"](-1,null,["All"])),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275and"](16777216,null,null,1,null,b)),e["\u0275did"](19,802816,null,0,c.c,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](23,0,null,null,16,"div",[["class","col-md-9"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](25,0,null,null,7,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](27,0,null,null,4,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275eld"](29,0,null,null,1,"h3",[["class","mb-3"]],null,null,null,null,null)),(l()(),e["\u0275ted"](30,null,[""," Authors"])),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](34,0,null,null,4,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275and"](16777216,null,null,1,null,y)),e["\u0275did"](37,802816,null,0,c.c,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275ted"](-1,null,["\n  "])),(l()(),e["\u0275ted"](-1,null,["\n\n"]))],function(l,n){var u=n.component;l(n,19,0,u.musicAuthorList),l(n,37,0,u.displayMusicList)},function(l,n){l(n,30,0,n.component.selectedAuthor)})}function w(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,63,"div",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\n  "])),(l()(),e["\u0275eld"](2,0,null,null,60,"div",[["class","album py-5 bg-light"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275eld"](4,0,null,null,57,"div",[["class","container"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275eld"](6,0,null,null,54,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](8,0,null,null,10,"div",[["class","col-md-3"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](10,0,null,null,7,"div",[["class","d-flex justify-content-between align-items-center"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](12,0,null,null,4,"div",[["class","btn-group"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275eld"](14,0,null,null,1,"button",[["class","btn btn-sm btn-outline-secondary"],["type","button"]],null,[[null,"click"]],function(l,n,u){var e=!0,t=l.component;"click"===n&&(e=!1!==t.detailsMusic(t.music)&&e);return e},null,null)),(l()(),e["\u0275ted"](-1,null,["Back"])),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](20,0,null,null,39,"div",[["class","col-md-9"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](22,0,null,null,7,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](24,0,null,null,4,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275eld"](26,0,null,null,1,"h3",[["class","mb-3"]],null,null,null,null,null)),(l()(),e["\u0275ted"](27,null,[""," "])),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](31,0,null,null,27,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](33,0,null,null,6,"div",[["class","col-md-4"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275eld"](35,0,null,null,3,"div",[["class","card mb-4 box-shadow"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                "])),(l()(),e["\u0275eld"](37,0,null,null,0,"img",[["class","card-img-top"],["style","height: 225px; width: 100%; display: block;"]],[[8,"src",4]],null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\n              "])),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](41,0,null,null,16,"div",[["class","col-md-4"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275eld"](43,0,null,null,13,"div",[["class","card mb-4 box-shadow"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                "])),(l()(),e["\u0275eld"](45,0,null,null,10,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                  "])),(l()(),e["\u0275eld"](47,0,null,null,1,"p",[["class","card-text"]],null,null,null,null,null)),(l()(),e["\u0275ted"](48,null,["Author: ",""])),(l()(),e["\u0275ted"](-1,null,["\n                  "])),(l()(),e["\u0275eld"](50,0,null,null,1,"p",[["class","card-text"]],null,null,null,null,null)),(l()(),e["\u0275ted"](51,null,["Price$: ",""])),(l()(),e["\u0275ted"](-1,null,["\n                  "])),(l()(),e["\u0275eld"](53,0,null,null,1,"p",[["class","card-text"]],null,null,null,null,null)),(l()(),e["\u0275ted"](54,null,["Duration: ","min"])),(l()(),e["\u0275ted"](-1,null,["\n                "])),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275ted"](-1,null,["\n  "])),(l()(),e["\u0275ted"](-1,null,["\n"]))],null,function(l,n){var u=n.component;l(n,27,0,u.detailsProduct.name),l(n,37,0,u.detailsProduct.image),l(n,48,0,u.detailsProduct.author),l(n,51,0,u.detailsProduct.price),l(n,54,0,u.detailsProduct.duration)})}function E(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,13,"header",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n  "])),(l()(),e["\u0275eld"](2,0,null,null,10,"div",[["class","navbar navbar-dark bg-dark box-shadow"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275eld"](4,0,null,null,7,"div",[["class","container d-flex justify-content-between"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275eld"](6,0,null,null,4,"a",[["class","navbar-brand d-flex align-items-center"],["href","#"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](8,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["MusicShop"])),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275ted"](-1,null,["\n  "])),(l()(),e["\u0275ted"](-1,null,["\n"])),(l()(),e["\u0275ted"](-1,null,["\n\n"])),(l()(),e["\u0275and"](16777216,null,null,1,null,h)),e["\u0275did"](16,16384,null,0,c.d,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275ted"](-1,null,["\n\n"])),(l()(),e["\u0275and"](16777216,null,null,1,null,C)),e["\u0275did"](19,16384,null,0,c.d,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275ted"](-1,null,["\n"])),(l()(),e["\u0275and"](16777216,null,null,1,null,w)),e["\u0275did"](22,16384,null,0,c.d,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,16,0,u.accountExist),l(n,19,0,u.musicListExist),l(n,22,0,u.musicDetailsExist)},null)}var R=e["\u0275ccf"]("app-root",s,function(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-root",[],null,null,null,E,m)),e["\u0275did"](1,114688,null,0,s,[],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),k=u("fc+i"),I=u("XKz0"),x=function(){function l(){this._map=new Map}return l.prototype.keys=function(){return this._map.keys()},l.prototype.get=function(l){var n=this._map.get(l);return this._map.delete(l),n},l.prototype.set=function(l,n){return this._map.set(l,n)},l.prototype.toJson=function(){var l=this,n={};return Array.from(this.keys()).forEach(function(u){n[u]=l.get(u)}),n},l.prototype.initialize=function(l){var n=this;Object.keys(l).forEach(function(u){n.set(u,l[u])})},l.prototype.inject=function(){},l.ctorParameters=function(){return[]},l}();function A(){var l=new x;return l.initialize(window.TRANSFER_STATE||{}),l}var P=function(){return function(){}}(),_=u("d1bD"),L=e["\u0275cmf"](d,[s],function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[R]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](5120,e.LOCALE_ID,e["\u0275m"],[[3,e.LOCALE_ID]]),e["\u0275mpd"](4608,c.f,c.e,[e.LOCALE_ID]),e["\u0275mpd"](4608,e.Compiler,e.Compiler,[]),e["\u0275mpd"](5120,e.IterableDiffers,e["\u0275k"],[]),e["\u0275mpd"](5120,e.KeyValueDiffers,e["\u0275l"],[]),e["\u0275mpd"](4608,k.b,k.t,[c.b]),e["\u0275mpd"](6144,e.Sanitizer,null,[k.b]),e["\u0275mpd"](4608,k.e,k.f,[]),e["\u0275mpd"](5120,k.c,function(l,n,u,e){return[new k.k(l),new k.o(n),new k.n(u,e)]},[c.b,c.b,c.b,k.e]),e["\u0275mpd"](4608,k.d,k.d,[k.c,e.NgZone]),e["\u0275mpd"](135680,k.m,k.m,[c.b]),e["\u0275mpd"](4608,k.l,k.l,[k.d,k.m]),e["\u0275mpd"](6144,e.RendererFactory2,null,[k.l]),e["\u0275mpd"](6144,k.p,null,[k.m]),e["\u0275mpd"](4608,e.Testability,e.Testability,[e.NgZone]),e["\u0275mpd"](4608,k.g,k.g,[c.b]),e["\u0275mpd"](4608,k.i,k.i,[c.b]),e["\u0275mpd"](4608,I.h,I.m,[c.b,e.PLATFORM_ID,I.k]),e["\u0275mpd"](4608,I.n,I.n,[I.h,I.l]),e["\u0275mpd"](5120,I.a,function(l){return[l]},[I.n]),e["\u0275mpd"](4608,I.j,I.j,[]),e["\u0275mpd"](6144,I.i,null,[I.j]),e["\u0275mpd"](4608,I.g,I.g,[I.i]),e["\u0275mpd"](6144,I.b,null,[I.g]),e["\u0275mpd"](5120,I.f,I.o,[I.b,[2,I.a]]),e["\u0275mpd"](4608,I.c,I.c,[I.f]),e["\u0275mpd"](5120,x,A,[]),e["\u0275mpd"](4608,a.o,a.o,[]),e["\u0275mpd"](5120,_.ORIGIN_URL,t,[]),e["\u0275mpd"](5120,_.REQUEST,i,[]),e["\u0275mpd"](512,c.a,c.a,[]),e["\u0275mpd"](1024,e.ErrorHandler,k.r,[]),e["\u0275mpd"](256,e.APP_ID,"my-app-site",[]),e["\u0275mpd"](2048,k.q,null,[e.APP_ID]),e["\u0275mpd"](1024,e.APP_INITIALIZER,function(l,n,u,e,t){return[k.s(l,n),k.u(u,e,t)]},[[2,k.h],[2,e.NgProbeToken],k.q,c.b,e.Injector]),e["\u0275mpd"](512,e.ApplicationInitStatus,e.ApplicationInitStatus,[[2,e.APP_INITIALIZER]]),e["\u0275mpd"](131584,e["\u0275e"],e["\u0275e"],[e.NgZone,e["\u0275Console"],e.Injector,e.ErrorHandler,e.ComponentFactoryResolver,e.ApplicationInitStatus]),e["\u0275mpd"](2048,e.ApplicationRef,null,[e["\u0275e"]]),e["\u0275mpd"](512,e.ApplicationModule,e.ApplicationModule,[e.ApplicationRef]),e["\u0275mpd"](512,k.a,k.a,[[3,k.a]]),e["\u0275mpd"](512,I.e,I.e,[]),e["\u0275mpd"](512,I.d,I.d,[]),e["\u0275mpd"](512,P,P,[]),e["\u0275mpd"](512,a.m,a.m,[]),e["\u0275mpd"](512,a.d,a.d,[]),e["\u0275mpd"](512,d,d,[]),e["\u0275mpd"](256,I.k,"XSRF-TOKEN",[]),e["\u0275mpd"](256,I.l,"X-XSRF-TOKEN",[])])});Object(e.enableProdMode)(),Object(k.j)().bootstrapModuleFactory(L).catch(function(l){return console.log(l)})},opek:function(l,n){function u(l){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+l+"'.")})}u.keys=function(){return[]},u.resolve=u,l.exports=u,u.id="opek"},tnZk:function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=u("+iEx");u.n(e)}},[0]);