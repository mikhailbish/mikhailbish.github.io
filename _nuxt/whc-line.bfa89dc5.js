import{l as $,_ as f,N as V}from"./line.9fb83edb.js";import{R as N}from"./RunningText.6d836c55.js";import{a as T,o as i,c as _,w as n,i as o,f as t,e as s,t as g,b as p,L,K as h,h as B}from"./entry.b5d24790.js";import"./SmallCircleButton.d2fa7c47.js";import"./data.5e4a9716.js";const C={data:()=>({percentage:13.133616668394318,angle:175.92621334520706}),setup(){try{const e=$("whc-line");console.log("data.value",e.value);const r={...e,img:`../${e.img}`,products:e.products.map(c=>({...c,img:c.img.map(u=>`../${u}`)}))};return console.log("someItems",r),{someItems:r}}catch{}},computed:{lineTitle(){return this.someItems.name.toUpperCase()},lineDescription(){return this.someItems.description}},components:{"detail-view":f,RunningTextVue:N,NextItemVue:V}},R={style:{display:"flex","align-items":"center","justify-content":"center",width:"100%",height:"100%"}},D={style:{justify:"center","text-align":"center",color:"white"}},j={style:{width:"60%",margin:"auto"}},z={style:{"text-align":"center","font-size":"106px",color:"white"}},E={style:{"text-align":"center","font-size":"28.16px",color:"white"},class:"ma-12"},F={class:"nextItem"};function K(e,r,c,u,S,m){const v=o("v-img"),w=o("v-sheet"),l=o("v-col"),a=o("v-row"),x=f,y=o("RunningTextVue"),I=o("NextItemVue"),b=o("v-container");return i(),_(b,{style:{padding:"0"},class:"fill-height row-holder",fluid:""},{default:n(()=>[t(a,{name:"bg-black",class:"content-row","no-gutters":""},{default:n(()=>[t(l,null,{default:n(()=>[t(w,{style:{"background-color":"#000000"}},{default:n(()=>[t(v,{style:{height:"100vh",position:"relative"},gradient:`${e.angle}deg, rgba(248,69,72,1) ${e.percentage}%, rgba(5,1,1,0.4066001400560224) ${e.percentage+.1}%`,src:`${e.someItems.img}`,eager:"",cover:""},{default:n(()=>[s("div",R,[s("div",D,[s("div",j,[s("div",z,g(m.lineTitle),1),s("div",E,[s("p",null,g(m.lineDescription),1)])])])])]),_:1},8,["gradient","src"])]),_:1})]),_:1})]),_:1}),(i(!0),p(h,null,L(e.someItems.products,(k,d)=>(i(),p(h,{key:`product${d}`},[t(a,{name:"bg-black",class:"content-row","no-gutters":""},{default:n(()=>[t(l,null,{default:n(()=>[t(x,{details:k},null,8,["details"])]),_:2},1024)]),_:2},1024),t(a,{name:"bg-black",class:"content-row","no-gutters":""},{default:n(()=>[t(l,null,{default:n(()=>[d!==e.someItems.products.length-1?(i(),_(y,{key:0,text:m.lineTitle},null,8,["text"])):B("",!0)]),_:2},1024)]),_:2},1024)],64))),128)),t(a,{name:"bg-black",class:"content-row","no-gutters":""},{default:n(()=>[t(l,null,{default:n(()=>[s("div",F,[t(I,{pretext:"Next Line",title:e.someItems.next.title,img:`../${e.someItems.next.img}`,route:`/lines/${e.someItems.next.id}`},null,8,["title","img","route"])])]),_:1})]),_:1})]),_:1})}const J=T(C,[["render",K]]);export{J as default};
