import{b as a}from"./artist.2ff9ca04.js";import{_ as s,P as e,r as t,j as r,z as o,M as l,N as n,U as u,Q as i,R as m,W as d,S as f,bD as p,ax as c,$ as v,aw as j}from"./index.2d658157.js";import{D as g}from"./DataLists.3ba2b8b8.js";import"./SmallSongData.9d069edf.js";import"./InputNumber.6e3256f5.js";import"./Add.4fe37192.js";import"./FormItem.8e86c8fa.js";import"./PlayOne.a9053696.js";const b={class:"songs"},_=s({__name:"songs",setup(s){const _=e(),y=t(_.currentRoute.value.query.id),D=t([]),h=s=>{a(s).then((a=>{D.value=[],a.hotSongs.forEach(((a,s)=>{D.value.push({id:a.id,num:s+1,name:a.name,artist:a.ar,album:a.al,alia:a.alia,time:p(a.dt),fee:a.fee,pc:a.pc?a.pc:null,mv:a.mv?a.mv:null})}))}))};return r((()=>{h(y.value)})),o((()=>_.currentRoute.value),(a=>{y.value=a.query.id,"ar-songs"==a.name&&h(y.value)})),(a,s)=>{const e=j,t=c;return l(),n("div",b,[u(g,{listData:i(D)},null,8,["listData"]),i(D)[0]?(l(),m(t,{key:0,justify:"center"},{default:d((()=>[u(e,{class:"more",size:"large",strong:"",secondary:"",round:"",onClick:s[0]||(s[0]=a=>i(_).push(`/all-songs?id=${i(y)}&page=1`))},{default:d((()=>[v(" 全部歌曲 ")])),_:1})])),_:1})):f("",!0)])}}},[["__scopeId","data-v-42fef623"]]);export{_ as default};