import{_ as e,P as a,a4 as t,r as s,cm as o,j as l,z as n,M as m,N as u,U as r,W as i,T as c,Q as d,S as p,O as g,X as y,Y as C,bK as v,aw as f,R as h,$ as k,a9 as b,a7 as D,a8 as x}from"./index.2d658157.js";import{g as _,C as S}from"./index.cc4a2419.js";import{S as j}from"./SmallSongData.9d069edf.js";import{P as q}from"./index.fe593983.js";import{a as P}from"./headers.f4910964.js";import{_ as w}from"./Skeleton.2e7bf840.js";import"./Select.bcceca04.js";import"./use-houdini.7148f755.js";const N=e=>(D("data-v-da3331ee"),e=e(),x(),e),R={class:"comment"},$={key:0,class:"title"},I=N((()=>g("span",{class:"key"},"全部评论",-1))),z={key:1,class:"title"},B=N((()=>g("span",{class:"key"},"缺少必要参数",-1))),T=N((()=>g("br",null,null,-1))),V={key:2,class:"commentData"},K={key:0,class:"hotComments"},M={key:0,class:"loading"},O={class:"content"},Q={class:"allComments",ref:"allCommentsRef"},U={class:"count"},W={key:0,class:"loading"},X={class:"content"},Y=e({__name:"CommentView",setup(e){const D=a(),x=t(),N=s(D.currentRoute.value.query.id),Y=s(D.currentRoute.value.query.page?Number(D.currentRoute.value.query.page):1),A=o({hotComments:[],allComments:[]}),E=s(0),F=(e,a=0)=>{let t=null;A.allComments[0]&&a>=5e3&&(t=A.allComments[A.allComments.length-1].time),_(e,a,t).then((e=>{e.comments&&e.comments[0]?(e.hotComments?A.hotComments=e.hotComments:A.hotComments=[],A.allComments=e.comments,E.value=e.total):($message.info("暂无评论"),D.go(-1)),$mainContent&&$mainContent.scrollIntoView({behavior:"smooth"})}))},G=e=>{D.push({path:"/comment",query:{id:N.value,page:e}})};return l((()=>{$setSiteTitle("全部评论"),N.value&&F(N.value,20*(Y.value-1))})),n((()=>D.currentRoute.value),(e=>{Y.value=Number(e.query.page?e.query.page:1),"comment"==e.name&&(N.value=e.query.id,F(e.query.id,20*(Y.value-1)))})),(e,a)=>{const t=v,s=f,o=P,l=w;return m(),u("div",R,[r(c,{name:"up"},{default:i((()=>[d(x).getPlaySongData&&d(x).getPlaySongData.id!=d(N)?(m(),h(t,{key:0,class:"goback",onClick:a[0]||(a[0]=e=>d(D).push(`/comment?id=${d(x).getPlaySongData.id}&page=1`)),"content-style":"padding: 6px"},{default:i((()=>[k("前往当前播放歌曲 ")])),_:1})):p("",!0)])),_:1}),d(N)?(m(),u("div",$,[I,r(t,{class:"song"},{default:i((()=>[r(j,{getDataByID:d(N)},null,8,["getDataByID"])])),_:1})])):(m(),u("div",z,[B,T,r(s,{strong:"",secondary:"",onClick:a[1]||(a[1]=e=>d(D).go(-1)),style:{"margin-top":"20px"}},{default:i((()=>[k(" 返回上一页 ")])),_:1})])),d(N)&&d(A).allComments[0]?(m(),u("div",V,[d(A).hotComments[0]?(m(),u("div",K,[r(o,{prefix:"bar"},{default:i((()=>[k(" 热门评论 ")])),_:1}),d(A).hotComments[0]?p("",!0):(m(),u("div",M,[r(l,{text:"",repeat:3}),r(l,{text:"",style:{width:"60%"}})])),g("div",O,[(m(!0),u(y,null,C(d(A).hotComments,(e=>(m(),h(S,{key:e,commentData:e},null,8,["commentData"])))),128))])])):p("",!0),g("div",Q,[r(o,{prefix:"bar"},{default:i((()=>[k(" 全部评论 "),g("span",U,b(d(E))+" 条",1)])),_:1}),d(A).allComments[0]?p("",!0):(m(),u("div",W,[r(l,{text:"",repeat:3}),r(l,{text:"",style:{width:"60%"}})])),g("div",X,[(m(!0),u(y,null,C(d(A).allComments,(e=>(m(),h(S,{key:e,commentData:e},null,8,["commentData"])))),128))])],512),r(q,{totalCount:d(E),pageNumber:d(Y),showSizePicker:!1,onPageNumberChange:G},null,8,["totalCount","pageNumber"])])):p("",!0)])}}},[["__scopeId","data-v-da3331ee"]]);export{Y as default};
