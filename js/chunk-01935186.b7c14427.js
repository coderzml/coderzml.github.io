(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-01935186"],{1148:function(t,e,s){"use strict";var a=s("a691"),i=s("1d80");t.exports="".repeat||function(t){var e=String(i(this)),s="",n=a(t);if(n<0||n==1/0)throw RangeError("Wrong number of repetitions");for(;n>0;(n>>>=1)&&(e+=e))1&n&&(s+=e);return s}},1368:function(t,e,s){},"1fa6":function(t,e,s){"use strict";var a=s("f6c6"),i=s.n(a);i.a},"408a":function(t,e,s){var a=s("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=a(t))throw TypeError("Incorrect invocation");return+t}},4153:function(t,e,s){"use strict";var a=s("70db"),i=s.n(a);i.a},"4de4":function(t,e,s){"use strict";var a=s("23e7"),i=s("b727").filter,n=s("1dde"),o=s("ae40"),r=n("filter"),c=o("filter");a({target:"Array",proto:!0,forced:!r||!c},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"69ce":function(t,e,s){"use strict";var a=s("1368"),i=s.n(a);i.a},"6ab7":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"datail"}},[s("DetailNav",{ref:"Nav",staticClass:"Nav",on:{DetailNavClick:t.DetailNavClick}}),s("Scroll",{ref:"scroll",staticClass:"centant",attrs:{probeType:3},on:{scroll:t.scrollPosition}},[s("DetailSwiper",{attrs:{topImages:t.topImages}}),s("DetailBaseInfo",{attrs:{Goods:t.Goods}}),s("DetailShopInfo",{attrs:{shop:t.shop}}),s("DetailGoodsInfo",{attrs:{DetailGoods:t.DetailGoods},on:{imgLoad:t._imgLoad}}),s("DetailParamInfo",{ref:"params",attrs:{DetailParam:t.DetailParam}}),s("DetailCommentInfo",{ref:"comment",attrs:{DetailComment:t.DetailComment}}),s("GoodsList",{ref:"recommend",attrs:{goods:t.DetailRecommended}})],1),s("DetailBottomBar",{on:{addCar:t.addCart}}),s("BackTop",{directives:[{name:"show",rawName:"v-show",value:t.isShowBackTop,expression:"isShowBackTop"}],nativeOn:{click:function(e){return t.backTop(e)}}})],1)},i=[],n=(s("a9e3"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Nav",[a("div",{attrs:{slot:"left"},on:{click:t.back},slot:"left"},[a("img",{staticClass:"back",attrs:{src:s("7a74"),alt:""}})]),a("div",{staticClass:"nav",attrs:{slot:"center"},slot:"center"},t._l(t.titles,(function(e,s){return a("div",{key:s,staticClass:"navItem",class:{active:s===t.currentIndex},on:{click:function(e){return t.itemClick(s)}}},[t._v(t._s(e))])})),0)])}),o=[],r=s("4dc2"),c={data:function(){return{titles:["商品","参数","评价","推荐"],currentIndex:0}},components:{Nav:r["a"]},methods:{itemClick:function(t){this.currentIndex=t,this.$emit("DetailNavClick",t)},back:function(){this.$router.back(),this.$bus.$emit("refresh")}}},l=c,u=(s("69ce"),s("2877")),d=Object(u["a"])(l,n,o,!1,null,"505cd35c",null),f=d.exports;s("b0c0");function m(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var p=s("1bab");function h(t){return Object(p["a"])({url:"http://152.136.185.210:8000/api/w6/detail",params:{iid:t}})}function v(){return Object(p["a"])({url:"http://152.136.185.210:8000/api/w6/recommend"})}var C=function t(e,s,a){m(this,t),this.name=a.name,this.title=e.title,this.desc=e.desc,this.newPrice=e.price,this.oldPrice=e.oldPrice,this.discount=e.discountDesc,this.columns=s,this.services=a.services,this.realPrice=e.lowNowPrice},_=function t(e){m(this,t),this.logo=e.shopLogo,this.name=e.name,this.fans=e.cFans,this.sells=e.cSells,this.score=e.score,this.goodsCount=e.cGoods},b=function t(e,s){m(this,t),this.image=e.images?e.images[0]:"",this.infos=e.set,this.sizes=s.tables},g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Swiper",{staticClass:"heightHide"},t._l(t.topImages,(function(t,e){return s("SwiperItem",{key:e},[s("img",{attrs:{src:t,alt:""}})])})),1)],1)},D=[],I=s("dc2c"),w={name:"DetailSwiper",props:{topImages:{type:Array,defaule:function(){return[]}}},data:function(){return{}},components:{Swiper:I["a"],SwiperItem:I["b"]}},k=w,G=(s("f95e"),Object(u["a"])(k,g,D,!1,null,"70ba0dfc",null)),$=G.exports,y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!==Object.keys(t.Goods).length?s("div",{attrs:{id:"Info"}},[s("div",{staticClass:"title"},[t._v(" [ "+t._s(t.Goods.name)+" ] "),s("span",[t._v(t._s(t.Goods.title))])]),s("div",{staticClass:"price"},[s("span",{staticClass:"newPrice"},[t._v(t._s(t.Goods.newPrice))]),s("span",{staticClass:"oldPrice"},[s("del",[t._v(t._s(t.Goods.oldPrice))])]),t.Goods.discount?s("span",{staticClass:"discount"},[t._v(t._s(t.Goods.discount))]):t._e()]),s("div",{staticClass:"BaseInfo"},[s("span",[t._v(t._s(t.Goods.columns[0]))]),s("span",[t._v(t._s(t.Goods.columns[1]))]),s("span",[t._v(t._s(t.Goods.services[t.Goods.services.length-1].name))])]),s("div",{staticClass:"tuihuo"},t._l(t.Goods.services,(function(e,a){return s("span",{key:a,staticClass:"tuihuo-item"},[s("img",{staticClass:"icon",attrs:{src:e.icon,alt:""}}),s("span",{staticClass:"icon-font"},[t._v(t._s(e.name))])])})),0)]):t._e()},x=[],T={props:{Goods:Object},data:function(){return{}},components:{}},P=T,j=(s("a1d3"),Object(u["a"])(P,y,x,!1,null,"60917214",null)),O=j.exports,B=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!==Object.keys(t.shop).length?s("div",{attrs:{id:"shopInfo"}},[s("div",{staticClass:"logo"},[s("img",{staticClass:"logo_img",attrs:{src:t.shop.logo,alt:""}}),s("span",{staticClass:"title"},[t._v(t._s(t.shop.name))])]),s("div",{staticClass:"InfoContent"},[s("div",{staticClass:"left"},[s("div",{staticClass:"left-top"},[s("span",{staticClass:"wan"},[t._v(t._s(t.wan))]),s("span",{staticClass:"AllBaby"},[t._v(t._s(t.shop.goodsCount))])]),s("br"),t._m(0)]),s("div",{staticClass:"right"},[s("table",t._l(t.shop.score,(function(e,a){return s("tr",{key:a,staticClass:"right-font"},[s("td",[t._v(t._s(e.name))]),s("td",{staticClass:"active1",class:{active2:e.isBetter}},[t._v(t._s(e.score))]),s("td",{staticClass:"activeBG1",class:{activeBG2:e.isBetter}},[t._v(t._s(e.isBetter?"高":"低"))])])})),0)])]),t._m(1)]):t._e()},E=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"left-bottom"},[s("span",{staticClass:"Allnum"},[t._v("总销量")]),s("span",{staticClass:"AllBabyFont"},[t._v("全部宝贝")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"jdgg"},[s("div",[t._v("进店逛逛")])])}],N=(s("b680"),{props:{shop:{type:Object,default:function(){return{}}}},data:function(){return{}},components:{},computed:{wan:function(){return(this.shop.sells/1e4).toFixed(1)+"万"}}}),S=N,L=(s("4153"),Object(u["a"])(S,B,E,!1,null,"13e056a2",null)),A=L.exports,Y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!==Object.keys(t.DetailGoods).length?s("div",{attrs:{id:"DetailGoods"}},[s("div",{staticClass:"padding"},[s("div",{staticClass:"header"},[s("div",{staticClass:"top-line"}),s("div",{staticClass:"font"},[t._v(t._s(t.DetailGoods.desc))]),s("div",{staticClass:"bottom-line"})]),s("div",{staticClass:"xiaogou"},[t._v(t._s(t.DetailGoods.detailImage[0].key))])]),t._l(t.DetailGoods.detailImage[0].list,(function(e,a){return s("div",{key:a,staticClass:"img-info"},[s("img",{staticClass:"img-item",attrs:{src:e,alt:""},on:{load:t.imgItemLoad}})])}))],2):t._e()},F=[],R={props:{DetailGoods:{type:Object,default:function(){return{}}}},created:function(){},data:function(){return{imgLength:0,num:0}},components:{},methods:{imgItemLoad:function(){this.$emit("imgLoad")}},watch:{DetailGoods:function(){this.imgLength=this.DetailGoods.detailImage[0].list.length}}},M=R,z=(s("cecd"),Object(u["a"])(M,Y,F,!1,null,"ff8abdc0",null)),J=z.exports,H=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!==Object.keys(t.DetailParam).length?s("div",{attrs:{id:"paramInfo"}},[s("div",{staticClass:"padding"},[s("div",{staticClass:"param1"},[s("table",t._l(t.DetailParam.sizes[0],(function(e,a){return s("tr",{key:a,staticClass:"borderBottom"},t._l(e,(function(e,a){return s("td",{key:a,staticClass:"param-item"},[t._v(t._s(e))])})),0)})),0)]),s("div",{staticClass:"param2"},[s("table",t._l(t.DetailParam.infos,(function(e,a){return s("tr",{key:a,staticClass:"borderBottom"},[s("td",{staticClass:"param2Item1"},[t._v(t._s(e.key))]),s("td",{staticClass:"param2Item2"},[t._v(t._s(e.value))])])})),0)]),0!==t.DetailParam.image.length?s("div",{staticClass:"info-img"},[s("img",{attrs:{src:t.DetailParam.image,alt:""}})]):t._e()])]):t._e()},U=[],V={props:{DetailParam:{type:Object,default:function(){return{}}}},data:function(){return{}},components:{}},W=V,X=(s("cb5a"),Object(u["a"])(W,H,U,!1,null,"620cce58",null)),q=X.exports,K=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!==Object.keys(t.DetailComment).length?s("div",{attrs:{id:"DetailComment"}},[t._m(0),s("div",{staticClass:"content"},[s("div",{staticClass:"name"},[s("div",{staticClass:"bdrs"},[s("img",{attrs:{src:t.DetailComment.user.avatar,alt:""}})]),s("span",[t._v(t._s(t.DetailComment.user.uname))])]),s("div",{staticClass:"font"},[t._v(t._s(t.DetailComment.content))]),s("div",{staticClass:"timeInfo"},[s("span",{staticClass:"time"},[t._v(t._s(t._f("showTime")(t.DetailComment.created)))]),s("span",{staticClass:"style"},[t._v(t._s(t.DetailComment.style))])]),s("div",{staticClass:"CommentImg"},t._l(t.DetailComment.images,(function(t,e){return s("img",{key:e,attrs:{src:t,alt:""}})})),0)]),s("div",{staticClass:"tuijian"},[t._v("推荐")])]):t._e()},Q=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header"},[s("span",{staticClass:"left"},[t._v("用户评价")]),s("span",{staticClass:"right"},[t._v("更多")])])}],Z=s("90b9"),tt={props:{DetailComment:{type:Object,default:function(){return{}}}},data:function(){return{}},components:{},filters:{showTime:function(t){var e=new Date(1e3*t);return Object(Z["b"])(e,"yyyy-MM-dd")}}},et=tt,st=(s("c62b"),Object(u["a"])(et,K,Q,!1,null,"8c55089e",null)),at=st.exports,it=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bottom-bar"},[t._m(0),s("div",{staticClass:"bar-item bar-right"},[s("div",{staticClass:"cart",on:{click:t.ClickAddCar}},[t._v("加入购物车")]),s("div",{staticClass:"buy"},[t._v("购买")])])])},nt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bar-item bar-left"},[s("div",[s("i",{staticClass:"icon service"}),s("span",{staticClass:"text"},[t._v("客服")])]),s("div",[s("i",{staticClass:"icon shop"}),s("span",{staticClass:"text"},[t._v("店铺")])]),s("div",[s("i",{staticClass:"icon select"}),s("span",{staticClass:"text"},[t._v("收藏")])])])}],ot=(s("4de4"),s("eecb")),rt={data:function(){return{}},components:{},computed:{sumCount:function(){return this.$store.state.CarInfoList.filter((function(t){return t.isChecked})).length}},methods:{ClickAddCar:function(){this.$emit("addCar"),this.$store.state.isAll=this.sumCount===this.$store.state.CarInfoList.length,console.log(this.$store.state.isAll+"Car")}}},ct=rt,lt=(s("1fa6"),Object(u["a"])(ct,it,nt,!1,null,"7260722b",null)),ut=lt.exports,dt=s("6d71"),ft=s("5d17"),mt=s("4897"),pt={name:"Detail",data:function(){return{id:null,topImages:null,Goods:{},shop:{},DetailGoods:{},DetailParam:{},DetailComment:{},DetailRecommended:[],tempTopY:[],offsetTopDebounce:null,curentIndex:0,massage:"",isShow:!1}},mixins:[ot["b"],ot["a"]],components:{DetailNav:f,DetailSwiper:$,DetailBaseInfo:O,DetailShopInfo:A,Scroll:ft["a"],DetailGoodsInfo:J,DetailParamInfo:q,DetailCommentInfo:at,GoodsList:dt["a"],DetailBottomBar:ut,Toast:mt["a"]},created:function(){var t=this;this.id=this.$route.params.id,h(this.id).then((function(e){var s=e.result;t.topImages=s.itemInfo.topImages,t.Goods=new C(s.itemInfo,s.columns,s.shopInfo),t.shop=new _(s.shopInfo),t.DetailGoods=s.detailInfo,t.DetailParam=new b(s.itemParams.info,s.itemParams.rule),t.DetailComment=s.rate.list[0]})),v().then((function(e){t.DetailRecommended=e.data.list})),this.offsetTopDebounce=Object(Z["a"])((function(){t.tempTopY=[],t.tempTopY.push(44),t.tempTopY.push(t.$refs.params.$el.offsetTop),t.tempTopY.push(t.$refs.comment.$el.offsetTop),t.tempTopY.push(t.$refs.recommend.$el.offsetTop),t.tempTopY.push(Number.MAX_VALUE)}),300)},mounted:function(){this.$bus.$on("refresh",(function(){}))},deactivated:function(){console.log("路由不活跃")},destroyed:function(){this.$bus.$off("ItemImgLoad",this.ItemImgLoadData)},methods:{_imgLoad:function(){this.refresh(),this.offsetTopDebounce()},DetailNavClick:function(t){this.$refs.scroll.scrollTo(0,40-this.tempTopY[t],300)},scrollPosition:function(t){this.BackTopOffsetTop(t);for(var e=44-t.y,s=0;s<this.tempTopY.length;s++)e>=this.tempTopY[s]&&e<=this.tempTopY[s+1]&&(this.$refs.Nav.currentIndex=s)},addCart:function(){var t=this,e={};e.id=this.id,e.image=this.topImages[0],e.title=this.Goods.title,e.desc=this.Goods.desc,e.price=this.Goods.realPrice,this.$store.dispatch("addCart",e).then((function(e){console.log(e),t.$toast.show(e,1500),console.log(t.$toast)}))}}},ht=pt,vt=(s("9667"),Object(u["a"])(ht,a,i,!1,null,"b757c6dc",null));e["default"]=vt.exports},"70db":function(t,e,s){},"7a74":function(t,e,s){t.exports=s.p+"img/back.26df9036.svg"},"8e28":function(t,e,s){},9667:function(t,e,s){"use strict";var a=s("8e28"),i=s.n(a);i.a},a10c:function(t,e,s){},a1d3:function(t,e,s){"use strict";var a=s("a10c"),i=s.n(a);i.a},af6f:function(t,e,s){},b4b8:function(t,e,s){},b680:function(t,e,s){"use strict";var a=s("23e7"),i=s("a691"),n=s("408a"),o=s("1148"),r=s("d039"),c=1..toFixed,l=Math.floor,u=function(t,e,s){return 0===e?s:e%2===1?u(t,e-1,s*t):u(t*t,e/2,s)},d=function(t){var e=0,s=t;while(s>=4096)e+=12,s/=4096;while(s>=2)e+=1,s/=2;return e},f=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!r((function(){c.call({})}));a({target:"Number",proto:!0,forced:f},{toFixed:function(t){var e,s,a,r,c=n(this),f=i(t),m=[0,0,0,0,0,0],p="",h="0",v=function(t,e){var s=-1,a=e;while(++s<6)a+=t*m[s],m[s]=a%1e7,a=l(a/1e7)},C=function(t){var e=6,s=0;while(--e>=0)s+=m[e],m[e]=l(s/t),s=s%t*1e7},_=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==m[t]){var s=String(m[t]);e=""===e?s:e+o.call("0",7-s.length)+s}return e};if(f<0||f>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(p="-",c=-c),c>1e-21)if(e=d(c*u(2,69,1))-69,s=e<0?c*u(2,-e,1):c/u(2,e,1),s*=4503599627370496,e=52-e,e>0){v(0,s),a=f;while(a>=7)v(1e7,0),a-=7;v(u(10,a,1),0),a=e-1;while(a>=23)C(1<<23),a-=23;C(1<<a),v(1,1),C(2),h=_()}else v(0,s),v(1<<-e,0),h=_()+o.call("0",f);return f>0?(r=h.length,h=p+(r<=f?"0."+o.call("0",f-r)+h:h.slice(0,r-f)+"."+h.slice(r-f))):h=p+h,h}})},c62b:function(t,e,s){"use strict";var a=s("d182"),i=s.n(a);i.a},cb5a:function(t,e,s){"use strict";var a=s("d2a7"),i=s.n(a);i.a},cecd:function(t,e,s){"use strict";var a=s("af6f"),i=s.n(a);i.a},d182:function(t,e,s){},d2a7:function(t,e,s){},f6c6:function(t,e,s){},f95e:function(t,e,s){"use strict";var a=s("b4b8"),i=s.n(a);i.a}}]);
//# sourceMappingURL=chunk-01935186.b7c14427.js.map