import{P as s,r as t,z as a,j as e,M as r,N as i,U as o,Q as u,bC as l}from"./index.2d658157.js";import{A as n}from"./ArtistLists.9ff480b6.js";import"./artist.2ff9ca04.js";import"./Grid.cc39c44f.js";import"./Skeleton.2e7bf840.js";import"./use-houdini.7148f755.js";const m={class:"artists"},v={__name:"artists",setup(v){const c=s(),f=t(c.currentRoute.value.query.keywords),d=t([]),p=t(30),j=t(1),h=t(0),b=(s,t=30,a=0,e=100)=>{l(s,t,a,e).then((s=>{h.value=s.result.artistCount,d.value=[],s.result.artists?s.result.artists.forEach((s=>{d.value.push({id:s.id,name:s.name,cover:s.img1v1Url})})):$message.error("搜索内容为空"),$mainContent&&$mainContent.scrollIntoView({behavior:"smooth"})}))};return a((()=>c.currentRoute.value),(s=>{f.value=s.query.keywords,"s-artists"==s.name&&b(f.value,p.value,(j.value-1)*p.value)})),e((()=>{b(f.value)})),(s,t)=>(r(),i("div",m,[o(n,{listData:u(d)},null,8,["listData"])]))}};export{v as default};