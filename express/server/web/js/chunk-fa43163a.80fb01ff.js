(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fa43163a"],{"5d88":function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.model?e("div",{staticClass:"page-hero"},[e("div",{staticClass:"topbar bg-black py-2 text-white px-3 d-flex ai-center"},[e("img",{attrs:{src:i("cfe5"),height:"30"}}),t._m(0),e("router-link",{attrs:{to:"/",tag:"div"}},[t._v(" 更多英雄 > ")])],1),e("div",{staticClass:"top",style:{"background-image":"url("+t.model.banner+")"}},[e("div",{staticClass:"info text-white p-3 h-100 d-flex flex-column jc-end"},[e("h3",{staticClass:"my-2"},[t._v(t._s(t.model.name))]),e("div",[t._v(t._s(t.model.categories.map((function(t){return t.name})).join("")))]),t.model.stars?e("div",{staticClass:"py-2"},[e("div",{staticClass:"d-flex ai-center "},[e("div",{staticClass:"text-white fs-sm mr-2"},[t._v(" 生存能力 ")]),e("div",{staticClass:"progress-bar"},[e("div",{staticClass:"progress bg-blue",style:{width:t.model.stars.survive+"0%"}})])]),e("div",{staticClass:"d-flex ai-center "},[e("div",{staticClass:"text-white fs-sm mr-2"},[t._v(" 攻击伤害 ")]),e("div",{staticClass:"progress-bar"},[e("div",{staticClass:"progress bg-yellow",style:{width:t.model.stars.attack+"0%"}})])]),e("div",{staticClass:"d-flex ai-center "},[e("div",{staticClass:"text-white fs-sm mr-2"},[t._v(" 技能效果 ")]),e("div",{staticClass:"progress-bar"},[e("div",{staticClass:"progress bg-green",style:{width:t.model.stars.skill+"0%"}})])]),e("div",{staticClass:"d-flex ai-center "},[e("div",{staticClass:"text-white fs-sm mr-2"},[t._v(" 上手难度 ")]),e("div",{staticClass:"progress-bar"},[e("div",{staticClass:"progress bg-red",style:{width:t.model.stars.difficult+"0%"}})])])]):t._e()])]),e("div",[t._m(1),e("swiper",[e("swiper-slide",[e("div",[e("div",{staticClass:"p-2 bg-white border-bottom"},[e("div",{staticClass:"d-flex"},[e("router-link",{staticClass:"flex-1 btn btn-lg",attrs:{tag:"button",to:"/"}},[e("i",{staticClass:"iconfont icon-wenjianjia"}),t._v(" 英雄视频介绍 ")]),e("router-link",{staticClass:"flex-1 ml-2 btn btn-lg",attrs:{tag:"button",to:"/"}},[e("i",{staticClass:"iconfont icon-card-hero "}),t._v(" 一图识英雄 ")])],1),e("div",{staticClass:"skills bg-white mt-4"},[e("div",{staticClass:"d-flex jc-around"},t._l(t.model.skills,(function(s,i){return e("img",{key:s._id,staticClass:"icon",class:{active:t.currentSkillIndex===i},attrs:{src:s.icon},on:{click:function(s){t.currentSkillIndex=i}}})})),0),t.currentSkill?e("div",[e("div",{staticClass:"pt-3 d-flex pb-2"},[e("b",{staticClass:"m-0"},[t._v(" "+t._s(t.currentSkill.name)+" ")]),e("span",{staticClass:"text-grey ml-4 fs-sm"},[t._v(" ("+t._s(t.currentSkill.cd)+") ")])]),e("p",[t._v(t._s(t.currentSkill.description))])]):t._e()])]),e("m-card",{staticClass:"hero-items",attrs:{plain:"",icon:"remind_fill",title:"出装推荐"}},[e("div",{staticClass:"fs-md py-2"},[t._v(" 顺风出装 ")]),e("div",{staticClass:"d-flex jc-around text-center"},t._l(t.model.leading_weapons,(function(s){return e("div",{key:s.name},[e("img",{attrs:{src:s.icon}}),e("div",{staticClass:"fs-xs pb-2"},[t._v(t._s(s.name))])])})),0),e("div",{staticClass:"fs-md py-2 border-top"},[t._v(" 逆风出装 ")]),e("div",{staticClass:"d-flex jc-around text-center"},t._l(t.model.losing_weapons,(function(s){return e("div",{key:s.name},[e("img",{attrs:{src:s.icon}}),e("div",{staticClass:"fs-xs"},[t._v(t._s(s.name))])])})),0)]),e("m-card",{attrs:{plain:"",icon:"people_fill",title:"英雄关系"}},[e("div",{staticClass:"nav jc-between"},t._l(t.model.partners.map((function(t){return t.relationship})),(function(s,i){return e("div",{key:i,staticClass:"nav-item",class:{active:t.active===i},on:{click:function(s){return t.$refs.list.swiper.slideTo(i)}}},[e("div",{staticClass:"nav-link"},[t._v(" "+t._s(s)+" ")])])})),0),e("div",{staticClass:"slider"}),e("div",{staticClass:"content pt-2"},[e("swiper",{ref:"list",attrs:{options:{autoHeight:!0}},on:{"slide-change":function(){return t.active=t.$refs.list.swiper.realIndex}}},t._l(t.model.partners,(function(s,i){return e("swiper-slide",{key:i},[e("div",{staticClass:"d-flex hero-items"},[t._l(s.hero,(function(t){return e("div",{key:t._id,staticClass:"px-3"},[e("img",{attrs:{src:t.avatar}})])})),e("div",[t._v(t._s(s.description))])],2)])})),1)],1)])],1)]),e("swiper-slide")],1)],1)]):t._e()},a=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"px-3 flex-1"},[i("span",{staticClass:"text-grey-dark ml-2"},[t._v("攻略站")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"px-3 bg-white"},[i("div",{staticClass:"nav d-flex jc-around pt-1 pb-1 border-bottom"},[i("div",{staticClass:"nav-item active"},[i("div",{staticClass:"nav-link"},[t._v(" 英雄初识 ")])]),i("div",{staticClass:"nav-item"},[i("div",{staticClass:"nav-link"},[t._v(" 进阶攻略 ")])])])])}],r=(i("6a61"),i("2e91")),l={props:{id:{required:!0}},data:function(){return{model:null,currentSkillIndex:0,active:0}},computed:{currentSkill:function(){return this.model.skills[this.currentSkillIndex]}},methods:{fetch:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function s(){var i;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,t.$http.get("heroes/".concat(t.id));case 2:i=s.sent,t.model=i.data;case 4:case"end":return s.stop()}}),s)})))()},addActive:function(t){console.log(t)}},created:function(){this.fetch()}},n=l,c=(i("6e94"),i("c701")),d=Object(c["a"])(n,e,a,!1,null,null,null);s["default"]=d.exports},"6e94":function(t,s,i){"use strict";i("b7db")},b7db:function(t,s,i){}}]);
//# sourceMappingURL=chunk-fa43163a.80fb01ff.js.map