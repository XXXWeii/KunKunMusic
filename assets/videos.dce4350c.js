import{d as e}from"./artist.2ff9ca04.js";import{P as a,r as u,j as t,z as r,M as s,N as o,U as i,Q as l,a1 as n,bD as v}from"./index.2d658157.js";import{V as m}from"./VideoLists.edba3398.js";import{P as p}from"./index.fe593983.js";import"./PlayOne.a9053696.js";import"./Grid.cc39c44f.js";import"./Skeleton.2e7bf840.js";import"./use-houdini.7148f755.js";import"./Select.bcceca04.js";const d={class:"videos"},c={__name:"videos",props:{mvSize:{type:Number,default:0}},setup(c){const f=c,g=a(),b=u(g.currentRoute.value.query.id),y=u([]),h=u(30),j=u(g.currentRoute.value.query.page?Number(g.currentRoute.value.query.page):1),C=u(0),q=(a,u=30,t=0)=>{e(a,u,t).then((e=>{C.value=f.mvSize,y.value=[],e.mvs?e.mvs.forEach((e=>{y.value.push({id:e.id,cover:e.imgurl16v9,name:e.name,artist:[e.artist],playCount:n(e.playCount),duration:v(e.duration)})})):$message.error("搜索内容为空"),$mainContent&&$mainContent.scrollIntoView({behavior:"smooth"})}))},N=e=>{g.push({path:"/artist/videos",query:{id:b.value,page:e}})},P=e=>{h.value=e,q(b.value,e,(j.value-1)*h.value)};return t((()=>{q(b.value,h.value,(j.value-1)*h.value)})),r((()=>g.currentRoute.value),(e=>{b.value=e.query.id,j.value=Number(e.query.page?e.query.page:1),"ar-videos"==e.name&&q(b.value,h.value,(j.value-1)*h.value)})),(e,a)=>(s(),o("div",d,[i(m,{listData:l(y)},null,8,["listData"]),i(p,{totalCount:l(C),pageNumber:l(j),onPageSizeChange:P,onPageNumberChange:N},null,8,["totalCount","pageNumber"])]))}};export{c as default};
