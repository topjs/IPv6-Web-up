webpackJsonp([20],{139:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"vue-particles",props:{color:{type:String,default:"#dedede"},particleOpacity:{type:Number,default:.7},particlesNumber:{type:Number,default:80},shapeType:{type:String,default:"circle"},particleSize:{type:Number,default:4},linesColor:{type:String,default:"#dedede"},linesWidth:{type:Number,default:1},lineLinked:{type:Boolean,default:!0},lineOpacity:{type:Number,default:.4},linesDistance:{type:Number,default:150},moveSpeed:{type:Number,default:3},hoverEffect:{type:Boolean,default:!0},hoverMode:{type:String,default:"grab"},clickEffect:{type:Boolean,default:!0},clickMode:{type:String,default:"push"}},mounted:function(){var e=this;n(209),this.$nextTick(function(){e.initParticleJS(e.color,e.particleOpacity,e.particlesNumber,e.shapeType,e.particleSize,e.linesColor,e.linesWidth,e.lineLinked,e.lineOpacity,e.linesDistance,e.moveSpeed,e.hoverEffect,e.hoverMode,e.clickEffect,e.clickMode)})},methods:{initParticleJS:function(e,t,n,i,a,o,c,r,l,u,s,p,d,f,h){particlesJS("particles-js",{particles:{number:{value:n,density:{enable:!0,value_area:800}},color:{value:e},shape:{type:i,stroke:{width:0,color:"#192231"},polygon:{nb_sides:5}},opacity:{value:t,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:a,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:r,distance:u,color:o,opacity:l,width:c},move:{enable:!0,speed:s,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:p,mode:d},onclick:{enable:f,mode:h},onresize:{enable:!0,density_auto:!0,density_area:400}},modes:{grab:{distance:140,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})}}}},140:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app",data:function(){return{visible:!1}}}},141:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(4),a=n(94),o=n.n(a),c=n(92),r=n(31),l=n.n(r),u=n(93),s=(n.n(u),n(95)),p=n(56);i.default.use(s.a),i.default.use(l.a),i.default.prototype.$axios=p.a,i.default.config.productionTip=!1,new i.default({el:"#app",router:c.a,template:"<App/>",components:{App:o.a}})},142:function(e,t,n){"use strict";var i=function(){setTimeout(function(){location.reload()},1e3)};t.a=[{path:"home",alias:"/admin/",component:function(e){return n.e(1).then(function(){var t=[n(227)];e.apply(null,t)}.bind(this)).catch(i.bind(this))}},{path:"administrator",component:function(e){return n.e(13).then(function(){var t=[n(226)];e.apply(null,t)}.bind(this)).catch(i.bind(this))}},{path:"user",component:function(e){return n.e(12).then(function(){var t=[n(232)];e.apply(null,t)}.bind(this)).catch(i.bind(this))}},{path:"addr",component:function(e){return n.e(14).then(function(){var t=[n(224)];e.apply(null,t)}.bind(this)).catch(i.bind(this))}},{path:"server",component:function(e){return n.e(6).then(function(){var t=[n(230)];e.apply(null,t)}.bind(this)).catch(i.bind(this))}},{path:"site",component:function(e){return n.e(5).then(function(){var t=[n(231)];e.apply(null,t)}.bind(this)).catch(i.bind(this))}},{path:"v6addr",component:function(e){return n.e(10).then(function(){var t=[n(234)];e.apply(null,t)}.bind(this)).catch(i.bind(this))}},{path:"v6Upgrade",component:function(e){return n.e(11).then(function(){var t=[n(233)];e.apply(null,t)}.bind(this)).catch(i.bind(this))}},{path:"me",component:function(e){return n.e(18).then(function(){var t=[n(229)];e.apply(null,t)}.bind(this)).catch(i.bind(this))}}]},143:function(e,t,n){"use strict";var i=function(){setTimeout(function(){location.reload()},1e3)};t.a=[{path:"index",component:function(e){return n.e(0).then(function(){var t=[n(236)];e.apply(null,t)}.bind(this)).catch(i.bind(this))},alias:"/user/"},{path:"user",component:function(e){return n.e(9).then(function(){var t=[n(240)];e.apply(null,t)}.bind(this)).catch(i.bind(this))}},{path:"v6addr",component:function(e){return n.e(7).then(function(){var t=[n(242)];e.apply(null,t)}.bind(this)).catch(i.bind(this))}},{path:"site",component:function(e){return n.e(4).then(function(){var t=[n(239)];e.apply(null,t)}.bind(this)).catch(i.bind(this))}},{path:"v6Upgrade",component:function(e){return n.e(8).then(function(){var t=[n(241)];e.apply(null,t)}.bind(this)).catch(i.bind(this))}},{path:"me",component:function(e){return n.e(17).then(function(){var t=[n(238)];e.apply(null,t)}.bind(this)).catch(i.bind(this))}}]},202:function(e,t){},216:function(e,t,n){var i=n(53)(n(139),n(218),null,null,null);e.exports=i.exports},217:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},218:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{attrs:{id:"particles-js",color:e.color,particleOpacity:e.particleOpacity,linesColor:e.linesColor,particlesNumber:e.particlesNumber,shapeType:e.shapeType,particleSize:e.particleSize,linesWidth:e.linesWidth,lineLinked:e.lineLinked,lineOpacity:e.lineOpacity,linesDistance:e.linesDistance,moveSpeed:e.moveSpeed,hoverEffect:e.hoverEffect,hoverMode:e.hoverMode,clickEffect:e.clickEffect,clickMode:e.clickMode}})},staticRenderFns:[]}},56:function(e,t,n){"use strict";var i=n(18),a=n.n(i),o=n(144),c=n.n(o),r=n(120),l=n.n(r),u=n(210),s=n.n(u),p=n(31);n.n(p);l.a.defaults.timeout=5e3,l.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8",l.a.defaults.baseURL="/api.php/",l.a.freshToken=function(){var e=window.localStorage.getItem("token"),t=window.localStorage.getItem("uid"),n=window.localStorage.getItem("kind");e&&(this.defaults.headers.common.token=e),t&&(this.defaults.headers.common.uid=t),n&&(this.defaults.headers.common.kind=n)},l.a.freshToken();var d=null;l.a.interceptors.request.use(function(e){return null!=d||"Eload"in e||(d=p.Loading.service({target:"#body",text:"拼命加载中..."})),e.data=s.a.stringify(e.data),e},function(e){return d&&d.close(),d=null,c.a.reject(e)}),l.a.interceptors.response.use(function(e){return d&&d.close(),d=null,e},function(e){if(d&&d.close(),d=null,void 0!==e.response){if(401==e.response.status)setTimeout(function(){p.Notification.error({title:"错误",message:"认证过期，请重新登录"})},500),localStorage.clear(),location.href="#/";else{var t="object"==a()(e.response.data)?e.response.data.info:"网络错误";p.Notification.error({title:"错误",message:t})}return c.a.reject(e)}}),t.a=l.a},92:function(e,t,n){"use strict";var i=n(4),a=n(219),o=n(143),c=n(142);i.default.use(a.a),t.a=new a.a({routes:[{path:"/",component:function(e){return n.e(15).then(function(){var t=[n(235)];e.apply(null,t)}.bind(this)).catch(n.oe)},beforeEnter:function(e,t,n){location.hostname.indexOf("adm")>=0?n("/adminLogin"):0==localStorage.getItem("kind")?n("/user/"):n()},alias:"login"},{path:"/user",component:function(e){return n.e(2).then(function(){var t=[n(237)];e.apply(null,t)}.bind(this)).catch(n.oe)},beforeEnter:function(e,t,n){location.hostname.indexOf("adm")>=0?n("/adminLogin"):n()},children:o.a},{path:"/adminLogin",component:function(e){return n.e(16).then(function(){var t=[n(225)];e.apply(null,t)}.bind(this)).catch(n.oe)},beforeEnter:function(e,t,n){location.hostname.indexOf("user")>=0?n("/"):1==localStorage.getItem("kind")?n("/admin/home"):n()}},{path:"/admin",component:function(e){return n.e(3).then(function(){var t=[n(228)];e.apply(null,t)}.bind(this)).catch(n.oe)},beforeEnter:function(e,t,n){location.hostname.indexOf("user")>=0?n("/"):1!=localStorage.getItem("kind")?n("/adminLogin"):n()},children:c.a},{path:"*",beforeEnter:function(e,t,n){n(location.hostname.indexOf("adm")>=0?"/adminLogin":"/")}}]})},93:function(e,t){},94:function(e,t,n){function i(e){n(202)}var a=n(53)(n(140),n(217),i,"data-v-114f4192",null);e.exports=a.exports}},[141]);