import{_ as a,P as s,r as e,z as t,bz as l,M as u,N as n,U as o,W as d,at as r,Q as i,O as p,aE as m,$ as f,R as c,T as v,bA as _,bB as b}from"./index.2d658157.js";import{a as h,_ as j}from"./Tabs.aeef60ff.js";import"./Add.4fe37192.js";const x={class:"discover"},R={class:"content"},g=a({__name:"index",setup(a){const g=s(),y=e(g.currentRoute.value.path.split("/")[2]),z=a=>{g.push({path:`/discover/${a}`,page:1})};return t((()=>g.currentRoute.value),(a=>{y.value=a.path.split("/")[2]})),(a,s)=>{const e=m,t=j,g=h,A=l("router-view");return u(),n("div",x,[o(e,{class:"title"},{default:d((()=>[f("发现")])),_:1}),o(g,{class:"main-tab",type:"segment","onUpdate:value":[z,s[0]||(s[0]=a=>r(y)?y.value=a:null)],value:i(y)},{default:d((()=>[o(t,{name:"playlists"},{default:d((()=>[f(" 歌单 ")])),_:1}),o(t,{name:"toplists"},{default:d((()=>[f(" 排行榜 ")])),_:1}),o(t,{name:"artists"},{default:d((()=>[f(" 歌手 ")])),_:1})])),_:1},8,["value"]),p("main",R,[o(A,null,{default:d((({Component:a})=>[(u(),c(b,null,[o(v,{name:"move",mode:"out-in"},{default:d((()=>[(u(),c(_(a)))])),_:2},1024)],1024))])),_:1})])])}}},[["__scopeId","data-v-4f2ba27c"]]);export{g as default};
