import{a5 as s,j as t,M as i,N as r,U as a,Q as e}from"./index.2d658157.js";import{A as o}from"./ArtistLists.9ff480b6.js";import"./artist.2ff9ca04.js";import"./Grid.cc39c44f.js";import"./Skeleton.2e7bf840.js";import"./use-houdini.7148f755.js";const f={class:"artists"},l={__name:"artists",setup(l){const m=s();return t((()=>{$setSiteTitle("音乐库 - 收藏的歌手"),m.getUserArtistLists.has||m.getUserArtistLists.isLoading||m.setUserArtistLists()})),(s,t)=>(i(),r("div",f,[a(o,{listData:e(m).getUserArtistLists.list},null,8,["listData"])]))}};export{l as default};