import{a as m,o as u,b as v,e as l,j as b,r as o,c as j,w as t,f as e,t as h,h as V,F as I,k as T,l as G,m as r,p as R,q as A,s as C}from"./entry.b859ccac.js";import{u as N}from"./fetch.f4b81816.js";/* empty css                      *//* empty css                      */const O={props:["href","img"]},D={style:{"z-level":"3"}},F=["href"],z=["src"];function L(c,i,n,d,g,_){return u(),v("div",D,[l("a",{href:n.href},[l("img",{class:"spinning",width:"175px",src:n.img},null,8,z)],8,F)])}const P=m(O,[["render",L],["__scopeId","data-v-fa6de94e"]]);var Q=typeof b=="object"&&b&&b.Object===Object&&b,U=Q,E=U,W=typeof self=="object"&&self&&self.Object===Object&&self,Y=E||W||Function("return this")(),X=Y,Z=X,H=Z.Symbol,S=H,w=S;w&&w.toStringTag;var $=S;$&&$.toStringTag;const J={props:["type","title","detail","bigimage","reverse"],components:{},data:()=>({isUserScrolling:!1,scrollOld:0,scrollNow:0}),computed:{delta(){return this.scrollOld-this.scrollNow}}};function K(c,i,n,d,g,_){const s=o("v-col"),a=o("v-row"),p=o("v-container"),f=o("v-parallax");return u(),j(p,{style:{padding:"0"},class:"fill-height",fluid:""},{default:t(()=>[e(a,{class:"","no-gutters":""},{default:t(()=>[e(s,{cols:"6",xs:"12",order:n.reverse?2:1},{default:t(()=>[e(p,{class:"fill-height ma-15 pa-15",style:{"vertical-align":"middle",margin:"auto"}},{default:t(()=>[e(a,{class:"pb-5"},{default:t(()=>[e(s,null,{default:t(()=>[e(p,null,{default:t(()=>[e(a,null,{default:t(()=>[e(s,null,{default:t(()=>[l("h5",null,h(n.type),1)]),_:1})]),_:1}),e(a,{class:"pb-5"},{default:t(()=>[e(s,null,{default:t(()=>[l("h2",null,h(n.title),1)]),_:1})]),_:1}),e(a,{class:"pb-5"},{default:t(()=>[e(s,null,{default:t(()=>[l("p",null,h(n.detail),1)]),_:1})]),_:1}),e(a,{justify:"start",class:"pb-5"},{default:t(()=>[V(c.$slots,"default",{},void 0,!0)]),_:3})]),_:3})]),_:3})]),_:3})]),_:3})]),_:3},8,["order"]),e(s,{cols:"6",xs:"12",order:n.reverse?1:2},{default:t(()=>[e(f,{class:"outer-image",src:n.bigimage},null,8,["src"])]),_:1},8,["order"])]),_:3})]),_:3})}const k=m(J,[["render",K],["__scopeId","data-v-98c37de3"]]);const M={props:{text:{type:String,required:!0},reverse:{type:Boolean,default:!1}},computed:{marqueeClasses(){return{"marquee--reverse":this.reverse}}}},ee={class:"enable-animation"},te={class:"marquee__content"};function le(c,i,n,d,g,_){return u(),v("div",ee,[l("div",{class:G(["marquee",_.marqueeClasses])},[l("ul",te,[(u(),v(I,null,T(15,s=>l("li",{key:`${n.text}marquee${s}`,class:"stylish-marquee"},h(n.text)+"\xA0",1)),64))])],2)])}const x=m(M,[["render",le],["__scopeId","data-v-f390052d"]]);const se={props:["backtext","fronttext","imgsrc","alt"],components:{RunningTextVue:x}},ne={class:"middle"},ae={style:{width:"100%",height:"100%",display:"flex"}},oe={class:"center"};function ce(c,i,n,d,g,_){const s=o("RunningTextVue"),a=o("v-img");return u(),v("div",ne,[e(a,{style:{"max-height":"100vh",position:"relative"},src:n.imgsrc,cover:""},{default:t(()=>[l("div",ae,[l("div",oe,[e(s,{class:"front",text:n.fronttext},null,8,["text"]),e(s,{class:"back",text:n.backtext,reverse:!0},null,8,["text"])])])]),_:1},8,["src"])])}const ie=m(se,[["render",ce],["__scopeId","data-v-ac4495bf"]]);const re={props:["imgs"]},_e=["src"],ue=l("b",null,[l("u",null,"sport equipment")],-1),de=["src"],me=["src"],ge=["src"],pe=l("b",null,[l("u",null,"during our build process.")],-1);function fe(c,i,n,d,g,_){return u(),v("h2",null,[r("We're "),l("span",null,[l("img",{class:"text-img",src:n.imgs[0]},null,8,_e)]),r(" changing the way "),ue,r(" is "),l("span",null,[l("img",{class:"text-img",src:n.imgs[1]},null,8,de)]),r(" built for clients by utilizing Virtual Reality "),l("span",null,[l("img",{class:"text-img",src:n.imgs[2]},null,8,me)]),r(" to provide "),l("span",null,[l("img",{class:"text-img",src:n.imgs[3]},null,8,ge)]),r(" immersive previews "),pe])}const he=m(re,[["render",fe]]);const q=c=>(A("data-v-ab0ad84c"),c=c(),C(),c),ve={style:{color:"white"}},be={style:{width:"100%",height:"100%",display:"flex"}},xe={class:"scroll-down-holder center"},ye=q(()=>l("div",null,[l("h2",null,"30+"),l("p",null,"Years of experience")],-1)),we=q(()=>l("div",null,[l("h2",null,"10x"),l("p",null,"Builder of the year")],-1)),$e={__name:"index",async setup(c){let i,n;return[i,n]=R(()=>N("/api/products","$wwVYWyoTZd")),i=await i,n(),(d,g)=>{const _=o("v-sheet"),s=o("v-col"),a=o("v-row"),p=o("v-img"),f=o("v-chip"),y=o("v-container"),B=o("v-parallax");return u(),j(y,{style:{padding:"0"},class:"fill-height row-holder",fluid:""},{default:t(()=>[e(a,{name:"bg-black",class:"content-row","no-gutters":""},{default:t(()=>[e(s,null,{default:t(()=>[e(_,{style:{"background-color":"#000000"}},{default:t(()=>[l("h1",ve,h(d.$t("text")),1)]),_:1})]),_:1})]),_:1}),e(a,{name:"bg-black",class:"content-row","no-gutters":""},{default:t(()=>[e(s,null,{default:t(()=>[e(_,{style:{"background-color":"#000000"}},{default:t(()=>[e(p,{style:{"max-height":"100vh",position:"relative"},class:"img-opacity",src:"img/BG1-scaled.jpg",cover:""},{default:t(()=>[l("div",be,[l("div",xe,[e(P,{img:"img/red-scroll-down.png",class:"scroll-down",href:"#intro"},null,8,["img"])])])]),_:1})]),_:1})]),_:1})]),_:1}),e(a,{id:"intro",name:"bg-white",class:"content-row","no-gutters":""},{default:t(()=>[e(s,null,{default:t(()=>[e(k,{type:"Residental",title:"Iconic architecture expertly developed",bigimage:"img/Block2BG.jpg",detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla est sapien, nec semper neque auctor nec. Duis vehicula quis mi at vehicula. Vivamus at."},{default:t(()=>[e(s,null,{default:t(()=>[ye]),_:1}),e(s,null,{default:t(()=>[we]),_:1})]),_:1})]),_:1})]),_:1}),e(a,{name:"bg-white",class:"content-row","no-gutters":""},{default:t(()=>[e(s,null,{default:t(()=>[e(x,{text:"StreetBarbell"})]),_:1})]),_:1}),e(a,{name:"bg-white",class:"content-row","no-gutters":""},{default:t(()=>[e(s,null,{default:t(()=>[e(k,{type:"Residental",title:"Iconic architecture expertly developed",reverse:"true",bigimage:"img/Block3BG.jpg",detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla est sapien, nec semper neque auctor nec. Duis vehicula quis mi at vehicula. Vivamus at."},{default:t(()=>[e(s,null,{default:t(()=>[e(f,null,{default:t(()=>[r("Award winning")]),_:1})]),_:1}),e(s,null,{default:t(()=>[e(f,null,{default:t(()=>[r("Established team")]),_:1})]),_:1}),e(s,null,{default:t(()=>[e(f,null,{default:t(()=>[r("Contact Us")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(a,{name:"bg-white",class:"content-row","no-gutters":""},{default:t(()=>[e(s,null,{default:t(()=>[e(x,{text:"Outdoor Gym"})]),_:1})]),_:1}),e(a,{name:"bg-white",class:"content-row","no-gutters":""},{default:t(()=>[e(s,null,{default:t(()=>[e(y,null,{default:t(()=>[e(a,{justify:"center"},{default:t(()=>[e(s,{cols:"12",xl:"5",lg:"7",md:"8",sm:"12"},{default:t(()=>[e(he,{imgs:["img/sergei-sushchik-DQpUeNzRj6s-unsplash-140x140.jpg","img/pierre-chatel-innocenti-Lk-nu_hX6ms-unsplash-140x140.jpg","img/kristijan-arsov-N90Bi6j-Ax8-unsplash-2-140x140.jpg","img/norman-brown-FVaimgno3dw-unsplash-140x140.jpg"]},null,8,["imgs"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(a,{name:"bg-black",class:"content-row","no-gutters":""},{default:t(()=>[e(s,null,{default:t(()=>[e(B,{src:"img/Block6BG-scaled.jpg"})]),_:1})]),_:1}),e(a,{name:"bg-black",style:{"background-image":"linear-gradient(183deg, rgb(158,190,231) 5%, rgb(220,240,255) 90%)"},class:"content-row","no-gutters":""},{default:t(()=>[e(s,null,{default:t(()=>[e(ie,{backtext:"fitness equipment",fronttext:"street barbell",imgsrc:"img/Pair_of_dumbbells.png"})]),_:1})]),_:1})]),_:1})}}},Be=m($e,[["__scopeId","data-v-ab0ad84c"]]);export{Be as default};