import{as as s,U as a,_ as t,P as e,M as l,N as i,W as o,R as n,X as r,Y as c,Q as d,O as p,a9 as u,aa as m,S as f,T as C,aA as k,af as h}from"./index.2d658157.js";import{P as v}from"./PlayOne.a9053696.js";import{a as y,_}from"./Grid.cc39c44f.js";import{_ as g}from"./Skeleton.2e7bf840.js";const x=s("youtube",!0,(function(s){return a("svg",{width:s.size,height:s.size,viewBox:"0 0 48 48",fill:"none"},[a("path",{d:"M11.0637 10.4144C16.6069 10.1381 20.9183 10 23.998 10C27.0781 10 31.3911 10.1382 36.937 10.4145V10.4145C39.9391 10.5641 42.3672 12.9119 42.6176 15.9072C42.8712 18.9412 42.998 21.6134 42.998 23.9238C42.998 26.2626 42.8681 28.972 42.6082 32.0522H42.6082C42.3586 35.0103 39.9833 37.3412 37.021 37.5349C32.2796 37.845 27.9386 38 23.998 38C20.058 38 15.7186 37.845 10.9798 37.5351V37.5351C8.01852 37.3414 5.6437 35.0119 5.39288 32.055C5.12966 28.9518 4.99805 26.2414 4.99805 23.9238C4.99805 21.6341 5.12651 18.961 5.38345 15.9044L5.38346 15.9044C5.63514 12.9103 8.06274 10.564 11.0637 10.4144Z",fill:s.colors[1],stroke:s.colors[0],"stroke-width":s.strokeWidth,"stroke-linejoin":s.strokeLinejoin},null),a("path",{d:"M21 19.6092V28.406C21 28.8794 21.3838 29.2631 21.8571 29.2631C22.0252 29.2631 22.1896 29.2137 22.3298 29.1211L28.9274 24.7605C29.3223 24.4995 29.4308 23.9677 29.1698 23.5728C29.1074 23.4784 29.0269 23.3973 28.933 23.3341L22.3354 18.8979C21.9426 18.6337 21.41 18.7381 21.1458 19.1309C21.0508 19.2723 21 19.4388 21 19.6092Z",fill:s.colors[3],stroke:s.colors[2],"stroke-width":s.strokeWidth,"stroke-linejoin":s.strokeLinejoin},null)])})),j={class:"videolists"},L={class:"cover"},w={class:"num"},z={class:"time"},D={class:"title"},V={class:"name text-hidden"},b=t({__name:"VideoLists",props:{listData:{type:Array,default:[]}},setup(s){const t=e();return(e,b)=>{const M=k,P=h,W=y,A=_,I=g;return l(),i("div",j,[a(C,{mode:"out-in"},{default:o((()=>[s.listData[0]?(l(),n(A,{key:0,id:"list","x-gap":"20","y-gap":"26",cols:"2 s:3 m:4 l:5",responsive:"screen"},{default:o((()=>[(l(!0),i(r,null,c(s.listData,(s=>(l(),n(W,{class:"item",key:s,onClick:a=>d(t).push(`/video?id=${s.id}`)},{default:o((()=>[p("div",L,[a(M,{class:"coverImg",lazy:"","intersection-observer-options":{root:"#list"},src:s.cover.replace(/^http:/,"https:")+"?param=464y260","fallback-src":"/images/pic/default.png"},null,8,["src"]),a(P,{class:"play",size:"40"},{default:o((()=>[a(d(v),{theme:"filled"})])),_:1}),p("div",w,[a(P,{size:"14",component:d(x)},null,8,["component"]),p("span",null,u(s.playCount),1)]),p("div",z,[p("span",null,u(s.duration),1)])]),p("div",D,[p("span",V,u(s.name),1),s.artist?(l(),n(m,{key:0,class:"text-hidden",artistsData:s.artist},null,8,["artistsData"])):f("",!0)])])),_:2},1032,["onClick"])))),128))])),_:1})):(l(),n(A,{key:1,class:"loading","x-gap":"20","y-gap":"26",cols:"2 s:3 m:4 l:5",responsive:"screen"},{default:o((()=>[(l(),i(r,null,c(30,(s=>a(W,{class:"item",key:s},{default:o((()=>[a(I,{class:"pic",sharp:!1}),a(I,{text:"",repeat:1}),a(I,{text:"",style:{width:"60%"}})])),_:2},1024))),64))])),_:1}))])),_:1})])}}},[["__scopeId","data-v-39f4c9ae"]]);export{b as V};