(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{166:function(e,t,a){},167:function(e,t,a){},488:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(14),c=a.n(r),i=(a(166),a(11)),o=a.n(i),l=a(19),h=a(6),u=a(7),d=a(9),j=a(8),m=(a(167),a(39)),b=a(13),p=a(1),O=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(h.a)(this,a),(s=t.call(this,e)).Logout=function(){s.props.Logout()},s.GoHome=function(){s.props.history.push({pathname:"/"})},s.state={isAuthentication:!1},s}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.store.subscribe((function(){t.setState({isAuthentication:t.props.store.getState().Users.isAuthenticated})}));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(p.jsx)(n.a.Fragment,{children:Object(p.jsxs)("div",{className:"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm",children:[Object(p.jsx)("h5",{onClick:this.GoHome,className:"my-0 mr-md-auto font-weight-normal",children:"SpyCode\xa9"}),Object(p.jsxs)("nav",{className:"my-2 my-md-0 mr-md-3",children:[this.state.isAuthentication?Object(p.jsxs)(m.b,{to:"/Profile",className:"p-2 text-dark",children:[Object(p.jsx)("i",{className:"fas fa-user"})," Perfil"]}):" ",Object(p.jsxs)(m.b,{to:"/Favorite",className:"p-2 text-dark",children:[Object(p.jsx)("i",{className:"fas fa-heart"}),"Favoritos"]})]}),this.state.isAuthentication?Object(p.jsx)("button",{onClick:this.Logout,className:"btn btn-outline-danger",children:"Cerrar Sesi\xf3n"}):Object(p.jsx)(m.b,{to:"/LoginRegister",className:"p-2 text-dark",children:Object(p.jsx)("button",{className:"btn btn-outline-primary",children:"Iniciar Sesi\xf3n"})})]})})}}]),a}(s.Component),v=Object(b.f)(O),f=a(15),g=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(h.a)(this,a),(s=t.call(this,e)).handleChange=function(e){s.setState((function(){return{checked:!s.state.checked}})),console.log(s.state.checked,"checked")},s.Search=function(e){if(console.log(s.state.Data),""===s.state.Data)return alert("\xa1El campo Nombre de Usuario no puede estar vacio!");s.state.checked?s.props.history.push({pathname:"/Specific/".concat(s.state.Data)}):s.props.history.push({pathname:"/Data/".concat(s.state.Data)})},s.state={Data:"",checked:!1},s}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return Object(p.jsx)(n.a.Fragment,{children:Object(p.jsx)("section",{className:"mainPage",children:Object(p.jsx)("center",{children:Object(p.jsx)("div",{className:"main",id:"main",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-lg-12 col-md-12",children:[Object(p.jsxs)("div",{className:"main__text-container",children:[Object(p.jsx)("img",{src:"https://github.githubassets.com/images/modules/logos_page/Octocat.png",className:"GitLogo",alt:""}),Object(p.jsx)("h1",{className:"main__title",children:"GitFetch - Buscador de Perfil de GitHub"}),Object(p.jsx)("p",{className:"main__subtitle",children:"Obten informaci\xf3n acerca de los repositorios, seguidores y m\xe1s, solo ingresando el nombre de usuario."})]}),Object(p.jsxs)("div",{className:"container",children:[Object(p.jsxs)("div",{className:"check",children:[Object(p.jsx)("input",{className:"",type:"checkbox",name:"checked",onChange:this.handleChange,value:this.state.checked})," Ir directamente al perfil del usuario"]}),Object(p.jsx)("br",{}),Object(p.jsxs)("div",{children:[Object(p.jsx)("input",{type:"text",id:"search",name:"Data",className:"btn btn-outline-primary",placeholder:this.state.checked?"Ir directamente al Perfil":"Nombre de Usuario",value:this.state.Data,onChange:function(t){e.setState(Object(f.a)({},t.target.name,t.target.value))}}),Object(p.jsx)("span",{children:Object(p.jsx)("button",{onClick:this.Search,className:"btn btn-outline-primary",children:"Buscar"})})]})]})]})})})})})})})}}]),a}(s.Component),x=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(h.a)(this,a),(s=t.call(this,e)).state={user:[]},console.log("username",e.match.params.id),function(){var e=Object(l.a)(o.a.mark((function e(t){var a,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/search/users?q=".concat(t));case 2:return a=e.sent,e.next=5,a.json();case 5:return s=e.sent,e.abrupt("return",{data:s});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()(e.match.params.id).then((function(e){s.setState({user:e.data.items}),console.log("Los datos",e.data.items)})),s}return Object(u.a)(a,[{key:"GoFetchOneUser",value:function(e){this.props.history.push({pathname:"/Specific/".concat(e)})}},{key:"render",value:function(){var e=this;return Object(p.jsx)(n.a.Fragment,{children:Object(p.jsx)("main",{role:"main",children:Object(p.jsx)("div",{className:"album py-5 bg-light",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"row",children:this.state.user.map((function(t){return Object(p.jsx)("div",{className:"col-md-3 cp",onClick:function(){e.GoFetchOneUser(t.login)},children:Object(p.jsxs)("div",{className:"card mb-4 shadow-sm",children:[Object(p.jsx)("img",{className:"bd-placeholder-img card-img-top",width:"100%",height:"225",src:t.avatar_url,alt:""}),Object(p.jsx)("div",{className:"card-body",children:Object(p.jsxs)("p",{className:"card-text text-center",children:["Nombre : ",t.login]})})]})},t.id)}))})})})})})}}]),a}(s.Component),N=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(h.a)(this,a),(s=t.call(this,e)).state={repos:[]},function(){var e=Object(l.a)(o.a.mark((function e(t){var a,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/users/".concat(t,"/repos"));case 2:return a=e.sent,e.next=5,a.json();case 5:return s=e.sent,e.abrupt("return",{data:s});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()(e.user).then((function(e){if(e.data.length>0&!e.data.message)for(var t=[],a=0;a<5;a++)t.push(e.data[a]),console.log(t),4===a&&s.setState({repos:t})})),s}return Object(u.a)(a,[{key:"render",value:function(){return Object(p.jsx)(n.a.Fragment,{children:Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{children:"\xdaltimos 5 repositorios:"}),Object(p.jsx)("div",{className:"lastfiveRepo",children:this.state.repos.map((function(e){return Object(p.jsx)("div",{children:Object(p.jsx)("a",{href:e.html_url,children:e.name},e.id)},e.id)}))})]})})}}]),a}(s.Component),y=a(40),F="GET_FAVORITES",S="ADD_TO_FAVORITES",k="DELETE_FROM_FAVORITES",C="RE_USER_STATE";function w(){return{type:F}}function D(e){return{type:S,payload:e}}function _(e){return{type:k,payload:e}}function E(e){return{type:C,payload:e}}var R=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(h.a)(this,a),(s=t.call(this,e)).AddToFav=function(){s.props.AddToFavorite(s.state.user.login),s.setState({is_Favorite:!0})},s.RemoveFromFav=function(){s.props.DelFromFavorite(s.state.user.login),s.setState({is_Favorite:!1})},s.state={user:[],is_Favorite:!1},s.props.GETFavoriteState(),function(){var e=Object(l.a)(o.a.mark((function e(t){var a,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/users/".concat(t));case 2:return a=e.sent,e.next=5,a.json();case 5:return s=e.sent,e.abrupt("return",{data:s});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()(e.match.params.login).then((function(e){e.data.message||s.setState({user:e.data})})),s}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t,a,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(console.log("specific",this.props.Favorite.FavoriteData),t=this.props.Favorite.FavoriteData,a=this.props.match.params.login,s=0;s<t.length;s++)t[s]===a&&this.setState({is_Favorite:!0});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"Data",value:function(){return 0===this.state.user.length?Object(p.jsx)("i",{children:"No se encontr\xf3 a nadie con este nombre de usuario."}):Object(p.jsx)("center",{children:Object(p.jsx)("section",{className:"Specific",children:Object(p.jsx)("div",{className:"main",id:"main",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsx)("div",{className:"col-lg-12 col-md-12",children:Object(p.jsxs)("div",{className:"SUsersData",children:[!1===this.state.is_Favorite?Object(p.jsx)("i",{onClick:this.AddToFav,className:"fas fa-heart  NotFave"}):Object(p.jsx)("i",{onClick:this.RemoveFromFav,className:"fas fa-heart  Fave"}),Object(p.jsxs)("h4",{children:["Nombre : ",Object(p.jsx)("i",{className:"bl",children:this.state.user.name})]}),Object(p.jsx)("img",{src:this.state.user.avatar_url,alt:""}),Object(p.jsxs)("h4",{children:["Seguidores : ",Object(p.jsx)("i",{className:"bl",children:this.state.user.followers}),"  "]}),Object(p.jsxs)("h4",{children:["Ubicaci\xf3n : ",Object(p.jsx)("i",{className:"bl",children:this.state.user.location})," "]}),Object(p.jsx)(N,{user:this.props.match.params.login})]})})})})})})})}},{key:"render",value:function(){return Object(p.jsxs)(n.a.Fragment,{children:[this.Data(),";"]})}}]),a}(s.Component),A=Object(y.b)((function(e){return{Favorite:e.Favorite}}),{AddToFavorite:D,DelFromFavorite:_,GETFavoriteState:w})(R),U=a(74),L={isAuthenticated:Boolean,FavoriteData:[]};var T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:var a=JSON.parse(localStorage.getItem("Fav"));return a&&(e.FavoriteData=a),e;case S:for(var s=!1,n=t.payload,r=0;r<e.FavoriteData.length;r++){var c=e.FavoriteData[r];c===n&&(s=!0)}if(!1===s){var i=e.FavoriteData;i.push(t.payload),e.FavoriteData=i,localStorage.setItem("Fav",JSON.stringify(i))}else console.log("Este item ya existe.");return e;case k:var o=t.payload,l=e.FavoriteData;return l=l.filter((function(e){return e!==o})),e.FavoriteData=l,localStorage.setItem("Fav",JSON.stringify(l)),e;default:return e}},I=(a(106),{isAuthenticated:Boolean});var P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return console.log("pay",t.payload),e.isAuthenticated=t.payload,e;default:return e}},G=Object(U.a)({Favorite:T,Users:P}),B=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(h.a)(this,a),(s=t.call(this,e)).state={users:[]},s.props.GETFavoriteState(),console.log("Store 2",e),s.Data(),s}return Object(u.a)(a,[{key:"Data",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t,a,s,n,r=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Store2",this.props),e.next=3,this.props.Favorite.FavoriteData;case 3:for(t=e.sent,a=[],s=0;s<t.length;s++)n=t[s],function(){var e=Object(l.a)(o.a.mark((function e(t){var a,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/users/".concat(t));case 2:return a=e.sent,e.next=5,a.json();case 5:return s=e.sent,e.abrupt("return",{data:s});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()(n).then((function(e){e.data.message||(e.data.is_user_in_Favorite=!0,a.push(e.data),r.setState({users:a}))}));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"RemoveFromFav",value:function(e){this.props.DelFromFavorite(e);for(var t=this.state.users,a=[],s=0;s<t.length;s++){var n=t[s];n.login===e&&(n.is_user_in_Favorite=!1),a.push(n)}this.setState({users:a})}},{key:"ReAddToFav",value:function(e){this.props.AddToFavorite(e);for(var t=this.state.users,a=[],s=0;s<t.length;s++){var n=t[s];n.login===e&&(n.is_user_in_Favorite=!0),a.push(n)}this.setState({users:a})}},{key:"GoFetchOnNewUser",value:function(e){this.props.history.push({pathname:"/Specific/".concat(e)})}},{key:"render",value:function(){var e=this;return Object(p.jsx)(n.a.Fragment,{children:Object(p.jsx)("main",{role:"main",children:Object(p.jsx)("div",{className:"album py-5 bg-light",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"row",children:this.state.users.map((function(t){var a;return Object(p.jsx)("div",{className:"col-md-4",children:Object(p.jsxs)("div",{className:"card mb-4 shadow-sm",children:[Object(p.jsx)("img",{className:"bd-placeholder-img card-img-top",width:"100%",height:"225",src:t.avatar_url,alt:""}),Object(p.jsxs)("div",{className:"card-body",children:[Object(p.jsxs)("p",{className:"card-text text-center",children:["Nombre : ",t.login]}),Object(p.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(p.jsx)("div",{className:"btn-group",children:Object(p.jsx)("button",{type:"button",onClick:function(){e.GoFetchOnNewUser(t.login)},className:"btn btn-sm btn-outline-secondary",children:"Ver Perfil"},t.id)}),t.is_user_in_Favorite?Object(p.jsx)("button",{type:"button",onClick:function(){e.RemoveFromFav(t.login)},className:"btn btn-sm ",children:Object(p.jsx)("i",{className:"fas fa-heart Fave"})}):Object(p.jsx)("button",(a={type:"button",onClick:function(){e.ReAddToFav(t.login)}},Object(f.a)(a,"type","button"),Object(f.a)(a,"className","btn btn-sm "),Object(f.a)(a,"children",Object(p.jsx)("i",{className:"fas fa-heart NotFave"})),a))]})]})]},t.id)},t.id)}))})})})})})}}]),a}(s.Component),M=Object(y.b)((function(e){return{Favorite:e.Favorite}}),{AddToFavorite:D,DelFromFavorite:_,GETFavoriteState:w})(B),V=a(41),H=a.n(V),J=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(h.a)(this,a),(s=t.call(this,e)).onChange=function(e){s.setState(Object(f.a)({},e.target.name,e.target.value))},s.Login=function(e){e.preventDefault(),s.setState(Object(f.a)({},e.target.name,e.target.value));var t={password:s.state.password,email:s.state.email};H.a.post("".concat(s.props.URL_Backend,"/Login"),{Data:t}).then((function(e){if(console.log(e),e.data.token&&(console.log(e.data.token),localStorage.setItem("token",e.data.token),s.props.ReUserState(!0),s.props.props.history.push("/Profile")),e.data.message){var t=e.data.message;s.setState({errors:t})}})).catch((function(e){return s.setState({errors:"Correo o contrase\xf1a incorrecto."})}))},s.state={email:"",password:"",errors:""},s}return Object(u.a)(a,[{key:"render",value:function(){return Object(p.jsxs)(n.a.Fragment,{children:[this.state.errors?Object(p.jsx)("i",{className:"alert alert-danger",role:"alert",children:this.state.errors}):"",Object(p.jsx)("hr",{}),Object(p.jsxs)("form",{className:"form-signin",children:[Object(p.jsx)("h4",{className:"h3 mb-3 font-weight-normal grey",children:"Iniciar Sesi\xf3n"}),Object(p.jsx)("input",{value:this.state.email,onChange:this.onChange,name:"email",type:"email",className:"form-control",placeholder:"E-mail"}),Object(p.jsx)("input",{value:this.state.password,onChange:this.onChange,name:"password",type:"password",className:"form-control",placeholder:"Contrase\xf1a"}),Object(p.jsx)("button",{onClick:this.Login,className:"btn btn-md btn-primary btn-block",type:"submit",children:"Ingresar"})]})]})}}]),a}(s.Component),X=Object(y.b)((function(e){return{Users:e.Users}}),{ReUserState:E})(J),q=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(h.a)(this,a),(s=t.call(this,e)).onChange=function(e){s.setState(Object(f.a)({},e.target.name,e.target.value))},s.Register=function(e){e.preventDefault(),s.setState(Object(f.a)({},e.target.name,e.target.value));var t={name:s.state.name,password:s.state.password,email:s.state.email};H.a.post("".concat(s.props.URL_Backend,"/Register"),{Data:t}).then((function(e){console.log(e),console.log(e.data.message);var t=e.data.message;if(s.setState({errors:t}),!t){alert("Registro exitoso");var a=s.state.email,n=s.state.password;s.setState({emai:a,password:n})}})).catch((function(e){console.log(e)}))},s.state={name:"",email:"",password:"",errors:""},s}return Object(u.a)(a,[{key:"render",value:function(){return Object(p.jsxs)(n.a.Fragment,{children:[this.state.errors?Object(p.jsx)("i",{className:"alert alert-danger",role:"alert",children:this.state.errors}):"",Object(p.jsx)("hr",{}),Object(p.jsxs)("form",{class:"form-Register",children:[Object(p.jsx)("h4",{class:"h3 mb-3 font-weight-normal grey",children:"\xa1Registrate!"}),Object(p.jsx)("input",{value:this.state.name,onChange:this.onChange,name:"name",type:"text",className:"form-control",placeholder:"Nombre"}),Object(p.jsx)("input",{value:this.state.email,onChange:this.onChange,name:"email",type:"email",className:"form-control",placeholder:"E-mail"}),Object(p.jsx)("input",{value:this.state.password,onChange:this.onChange,name:"password",type:"password",className:"form-control",placeholder:"Contrase\xf1a"}),Object(p.jsx)("button",{onClick:this.Register,className:"btn btn-md btn-success btn-block",type:"submit",children:"Registrarme"})]})]})}}]),a}(s.Component),W="https://spycode-app.herokuapp.com/api/users",z=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(h.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={},e}return Object(u.a)(a,[{key:"render",value:function(){return Object(p.jsxs)(n.a.Fragment,{children:[Object(p.jsx)("center",{children:Object(p.jsx)("section",{className:"Specific",children:Object(p.jsx)("div",{className:"main",id:"main",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsx)("div",{className:"col-lg-12 col-md-12",children:Object(p.jsx)(X,{props:this.props,URL_Backend:W})})})})})})}),Object(p.jsx)("center",{children:Object(p.jsx)("section",{className:"Specific",children:Object(p.jsx)("div",{className:"main",id:"main",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsx)("div",{className:"col-lg-12 col-md-12",children:Object(p.jsx)(q,{props:this.props,URL_Backend:W})})})})})})})]})}}]),a}(s.Component),Y=a(61),K=a(162),Q=["component","Auth","Logout"];var Z=function(e){var t=e.component,a=e.Auth,s=e.Logout,n=Object(K.a)(e,Q);return Object(p.jsx)(b.b,Object(Y.a)(Object(Y.a)({},n),{},{render:function(e){return a?Object(p.jsx)(t,Object(Y.a)(Object(Y.a)({},e),{},{Logout:s})):Object(p.jsx)(b.a,{to:"/LoginRegister"})}}))},$=a(491),ee=a(492),te=a(493),ae=a(103),se=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(h.a)(this,a),(e=t.call(this)).state={inPutData:""},e}return Object(u.a)(a,[{key:"handleOnClick",value:function(){var e=this,t=this.props.proceed;return function(){t({input:e.state.inPutData})}}},{key:"render",value:function(){var e=this,t=this.props,a=t.show,s=t.dismiss,n=t.cancel,r=t.message;return Object(p.jsx)("div",{className:"static-modal",children:Object(p.jsxs)($.a,{show:a,onHide:s,children:[Object(p.jsx)($.a.Header,{children:Object(p.jsx)($.a.Title,{})}),Object(p.jsx)($.a.Body,{children:r}),Object(p.jsxs)($.a.Footer,{children:[Object(p.jsx)(ee.a,{type:"password",value:this.state.inPutData,onChange:function(t){e.setState({inPutData:t.target.value})}}),Object(p.jsx)(te.a,{onClick:n,children:"Cancelar"}),Object(p.jsx)(te.a,{className:"button-1",onClick:this.handleOnClick(),children:"Ok"})]})]})})}}]),a}(n.a.Component),ne=Object(ae.createConfirmation)(Object(ae.confirmable)(se)),re="https://spycode-app.herokuapp.com/api/users",ce=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(h.a)(this,a),(s=t.call(this,e)).mounted=!1,s.pic=function(){return"No definido"!==s.state.pic&&void 0!==s.state.pic&&null!==s.state.pic&&""!==s.state.pic},s.EditUserData=function(){console.log("Editar"),s.setState({IsEdit:!0})},s.onChange=function(e){s.setState(Object(f.a)({},e.target.name,e.target.value))},s.__handleimageChange=function(e){e.preventDefault();var t=new FileReader,a=e.target.files[0];t.onloadend=function(){s.setState({file:a,pic:t.result})},t.readAsDataURL(a)},s.SaveUserData=function(e){s.setState(Object(f.a)({},e.target.name,e.target.value)),s.setState({IsEdit:!1});var t=s.state.file,a=new FormData;a.append("name",s.state.name),a.append("address",s.state.address),a.append("pic",s.state.pic),a.append("image",t),H.a.put("".concat(re,"/edit/").concat(s.state.id),a).then((function(e){console.log(e)})).catch((function(e){return console.log(e)}))},s.handleOnClickRemove=function(){ne({password:" Ingresa tu contrase\xf1a por favor."}).then((function(e){var t=e.input;s.setState({password:t}),s.RequestToRemove()}),(function(){s.setState({password:"canceled"})}))},s.RequestToRemove=function(){var e=s.state.password;H.a.delete("".concat(re,"/delete/").concat(s.state.id,"/").concat(e)).then((function(e){console.log(e.data.message),s.props.Logout()})).catch(s.setState({errors:"La contrase\xf1a es incorrecta"}))},s.state={id:"",name:"",address:"",email:"",pic:"",IsEdit:!1,file:"",password:"",errors:""},s}return Object(u.a)(a,[{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"componentWillMount",value:function(){var e=this;this.mounted=!0;var t=localStorage.getItem("token");t&&H.a.get("".concat(re,"/GetUserData"),{headers:{Authorization:t}}).then((function(t){if(console.log("res",t),console.log("res",t.data.result[0]),e.mounted){var a=t.data.result[0];e.setState({id:a.id,name:a.name,address:a.adress,email:a.email,pic:a.pic})}}))}},{key:"render",value:function(){return Object(p.jsx)(n.a.Fragment,{children:Object(p.jsxs)("center",{children:[this.state.errors?Object(p.jsx)("i",{className:"alert alert-danger",role:"alert",children:this.state.errors}):"",Object(p.jsx)("section",{className:"Specific",children:Object(p.jsx)("div",{className:"main",id:"main",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-lg-12 col-md-12",children:[this.state.IsEdit?Object(p.jsxs)("div",{className:"SUsersData",children:[Object(p.jsxs)("button",{className:"edit btn btn-danger",children:[Object(p.jsx)("i",{className:"fas fa-edit"})," Edit"]}),Object(p.jsx)("h4",{children:Object(p.jsx)("i",{className:"bl",children:"Your Profile Data"})}),this.pic()?Object(p.jsx)("img",{src:this.state.pic,alt:""}):Object(p.jsx)("img",{src:"https://university.cpanel.net/assets/img/user-profile-picture-default.png",alt:""}),Object(p.jsx)("div",{className:"clear"}),Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{htmlFor:"file-upload",className:"custom-file-upload",children:"Cargar"}),Object(p.jsx)("input",{id:"file-upload",type:"file",onChange:this.__handleimageChange})]}),Object(p.jsx)("input",{type:"text",name:"name",placeholder:"name",className:"form-control m-2",value:this.state.name?this.state.name:"",onChange:this.onChange}),Object(p.jsx)("input",{type:"text",name:"email",placeholder:"email",className:"form-control m-2",value:this.state.email,onChange:this.onChange,disabled:!0}),Object(p.jsx)("input",{type:"text",name:"address",placeholder:"address",className:"form-control m-2",value:this.state.address?this.state.address:"",onChange:this.onChange}),Object(p.jsxs)("button",{onClick:this.SaveUserData,class:"edit btn btn-primary",children:[Object(p.jsx)("i",{class:"fas fa-edit"})," Save"]})]}):Object(p.jsxs)("div",{className:"SUsersData",children:[Object(p.jsxs)("button",{onClick:this.EditUserData,className:"edit btn btn-danger",children:[Object(p.jsx)("i",{className:"fas fa-edit"})," Edit"]}),Object(p.jsx)("h4",{children:Object(p.jsx)("i",{className:"bl",children:"Tus Datos Personales"})}),this.pic()?Object(p.jsx)("img",{src:this.state.pic,alt:" "}):Object(p.jsx)("img",{src:"https://university.cpanel.net/assets/img/user-profile-picture-default.png",alt:""}),Object(p.jsxs)("h4",{children:["Nombre  :",Object(p.jsxs)("i",{className:"bl",children:[this.state.name?this.state.name:""," "]})," "]}),Object(p.jsxs)("h4",{children:["E-mail  :",Object(p.jsx)("i",{className:"bl",children:this.state.email})]}),Object(p.jsxs)("h4",{children:["Direcci\xf3n  :",Object(p.jsxs)("i",{className:"bl",children:[this.state.address?this.state.address:""," "]})]})]}),Object(p.jsx)("div",{className:"REMOVEU",children:Object(p.jsx)("butt",{className:"btn btn-danger m-2",onClick:this.handleOnClickRemove,children:"Eliminar Cuenta"})})]})})})})})]})})}}]),a}(s.Component),ie=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(h.a)(this,a),(s=t.call(this,e)).Logout=function(){console.log("logout"),localStorage.removeItem("token"),s.store.dispatch(E(!1)),s.setState({auth:!1})},s.state={isAuthentication:!1},s.store=Object(U.b)(G,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),s}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.getItem("token")?(this.store.dispatch(E(!0)),this.setState({isAuthentication:!0})):(this.store.dispatch(E(!1)),this.setState({isAuthentication:!1})),e.next=3,this.store.subscribe((function(){t.setState({isAuthentication:t.store.getState().Users.isAuthenticated})}));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(p.jsx)(n.a.Fragment,{children:Object(p.jsx)(y.a,{store:this.store,children:Object(p.jsxs)(m.a,{children:[Object(p.jsx)(v,{Logout:this.Logout,store:this.store}),Object(p.jsx)(b.b,{exact:!0,path:"/",component:g}),Object(p.jsx)(b.b,{exact:!0,path:"/Data/:id",component:x}),Object(p.jsx)(b.b,{exact:!0,path:"/Specific/:login",component:A}),Object(p.jsx)(b.b,{exact:!0,path:"/Favorite",component:M}),Object(p.jsx)(b.b,{exact:!0,path:"/LoginRegister",component:z}),Object(p.jsx)(Z,{exact:!0,path:"/Profile",Logout:this.Logout,Auth:this.state.isAuthentication,component:ce})]})})})}}]),a}(s.Component),oe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,494)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),s(e),n(e),r(e),c(e)}))};c.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(ie,{})}),document.getElementById("root")),oe()}},[[488,1,2]]]);
//# sourceMappingURL=main.3e33c841.chunk.js.map