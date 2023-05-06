import{d as e,r as t,aF as n,aG as a,h as r,aH as o,aI as i,aJ as s,aK as l,b as d,i as c,a as b,g as f,am as p,X as v,aL as u,aM as h,aN as g,aO as x,l as m,q as y,n as w,m as $,aP as z,e as R,B as C,aQ as P,E as S,v as T,z as A,p as L,w as B,aR as W,x as _,D as k,aS as j,V as N,aT as E,A as O,G as H,aU as F,c as I,aV as V,aq as D,H as M}from"./index.2d658157.js";import{A as X}from"./Add.4fe37192.js";const U=o(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[o("&::-webkit-scrollbar",{width:0,height:0})]),q=e({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=t(null);const r=n();U.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:a,ssr:r});const o={scrollTo(...t){var n;null===(n=e.value)||void 0===n||n.scrollTo(...t)}};return Object.assign({selfRef:e,handleWheel:function(e){e.currentTarget.offsetWidth<e.currentTarget.scrollWidth&&0!==e.deltaY&&(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}},o)},render(){return r("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}});var G=/\s/;var Y=/^\s+/;function J(e){return e?e.slice(0,function(e){for(var t=e.length;t--&&G.test(e.charAt(t)););return t}(e)+1).replace(Y,""):e}var K=NaN,Q=/^[-+]0x[0-9a-f]+$/i,Z=/^0b[01]+$/i,ee=/^0o[0-7]+$/i,te=parseInt;function ne(e){if("number"==typeof e)return e;if(i(e))return K;if(s(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=s(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=J(e);var n=Z.test(e);return n||ee.test(e)?te(e.slice(2),n?2:8):Q.test(e)?K:+e}const ae=function(){return l.Date.now()};var re="Expected a function",oe=Math.max,ie=Math.min;function se(e,t,n){var a,r,o,i,l,d,c=0,b=!1,f=!1,p=!0;if("function"!=typeof e)throw new TypeError(re);function v(t){var n=a,o=r;return a=r=void 0,c=t,i=e.apply(o,n)}function u(e){var n=e-d;return void 0===d||n>=t||n<0||f&&e-c>=o}function h(){var e=ae();if(u(e))return g(e);l=setTimeout(h,function(e){var n=t-(e-d);return f?ie(n,o-(e-c)):n}(e))}function g(e){return l=void 0,p&&a?v(e):(a=r=void 0,i)}function x(){var e=ae(),n=u(e);if(a=arguments,r=this,d=e,n){if(void 0===l)return function(e){return c=e,l=setTimeout(h,t),b?v(e):i}(d);if(f)return clearTimeout(l),l=setTimeout(h,t),v(d)}return void 0===l&&(l=setTimeout(h,t)),i}return t=ne(t)||0,s(n)&&(b=!!n.leading,o=(f="maxWait"in n)?oe(ne(n.maxWait)||0,t):o,p="trailing"in n?!!n.trailing:p),x.cancel=function(){void 0!==l&&clearTimeout(l),c=0,a=d=r=l=void 0},x.flush=function(){return void 0===l?i:g(ae())},x}function le(e,t,n){var a=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return s(n)&&(a="leading"in n?!!n.leading:a,r="trailing"in n?!!n.trailing:r),se(e,t,{leading:a,maxWait:t,trailing:r})}const de=d("n-tabs"),ce={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},be=e({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:ce,setup(e){const t=c(de,null);return t||b("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:t.paneStyleRef,class:t.paneClassRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){return r("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),fe=e({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},x(ce,["displayDirective"])),setup(e){const{mergedClsPrefixRef:t,valueRef:n,typeRef:a,closableRef:r,tabStyleRef:o,tabChangeIdRef:i,onBeforeLeaveRef:s,triggerRef:l,handleAdd:d,activateTab:b,handleClose:p}=c(de);return{trigger:l,mergedClosable:f((()=>{if(e.internalAddable)return!1;const{closable:t}=e;return void 0===t?r.value:t})),style:o,clsPrefix:t,value:n,type:a,handleClose(t){t.stopPropagation(),e.disabled||p(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable)return void d();const{name:t}=e,a=++i.id;if(t!==n.value){const{value:r}=s;r?Promise.resolve(r(e.name,n.value)).then((e=>{e&&i.id===a&&b(t)})):b(t)}}}},render(){const{internalAddable:e,clsPrefix:t,name:n,disabled:a,label:o,tab:i,value:s,mergedClosable:l,style:d,trigger:c,$slots:{default:b}}=this,f=null!=o?o:i;return r("div",{class:`${t}-tabs-tab-wrapper`},this.internalLeftPadded?r("div",{class:`${t}-tabs-tab-pad`}):null,r("div",Object.assign({key:n,"data-name":n,"data-disabled":!!a||void 0},p({class:[`${t}-tabs-tab`,s===n&&`${t}-tabs-tab--active`,a&&`${t}-tabs-tab--disabled`,l&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`],onClick:"click"===c?this.activateTab:void 0,onMouseenter:"hover"===c?this.activateTab:void 0,style:e?void 0:d},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),r("span",{class:`${t}-tabs-tab__label`},e?r(v,null,r("div",{class:`${t}-tabs-tab__height-placeholder`}," "),r(u,{clsPrefix:t},{default:()=>r(X,null)})):b?b():"object"==typeof f?f:h(null!=f?f:n)),l&&"card"===this.type?r(g,{clsPrefix:t,class:`${t}-tabs-tab__close`,onClick:this.handleClose,disabled:a}):null))}}),pe=m("tabs","\n box-sizing: border-box;\n width: 100%;\n display: flex;\n flex-direction: column;\n transition:\n background-color .3s var(--n-bezier),\n border-color .3s var(--n-bezier);\n",[y("segment-type",[m("tabs-rail",[w("&.transition-disabled","color: red;",[m("tabs-tab","\n transition: none;\n ")])])]),y("left, right","\n flex-direction: row;\n ",[m("tabs-bar","\n width: 2px;\n right: 0;\n transition:\n top .2s var(--n-bezier),\n max-height .2s var(--n-bezier),\n background-color .3s var(--n-bezier);\n "),m("tabs-tab","\n padding: var(--n-tab-padding-vertical); \n ")]),y("right","\n flex-direction: row-reverse;\n ",[m("tabs-bar","\n left: 0;\n ")]),y("bottom","\n flex-direction: column-reverse;\n justify-content: flex-end;\n ",[m("tabs-bar","\n top: 0;\n ")]),m("tabs-rail","\n padding: 3px;\n border-radius: var(--n-tab-border-radius);\n width: 100%;\n background-color: var(--n-color-segment);\n transition: background-color .3s var(--n-bezier);\n display: flex;\n align-items: center;\n ",[m("tabs-tab-wrapper","\n flex-basis: 0;\n flex-grow: 1;\n display: flex;\n align-items: center;\n justify-content: center;\n ",[m("tabs-tab","\n overflow: hidden;\n border-radius: var(--n-tab-border-radius);\n width: 100%;\n display: flex;\n align-items: center;\n justify-content: center;\n ",[y("active","\n font-weight: var(--n-font-weight-strong);\n color: var(--n-tab-text-color-active);\n background-color: var(--n-tab-color-segment);\n box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);\n "),w("&:hover","\n color: var(--n-tab-text-color-hover);\n ")])])]),y("flex",[m("tabs-nav",{width:"100%"},[m("tabs-wrapper",{width:"100%"},[m("tabs-tab",{marginRight:0})])])]),m("tabs-nav","\n box-sizing: border-box;\n line-height: 1.5;\n display: flex;\n transition: border-color .3s var(--n-bezier);\n ",[$("prefix, suffix","\n display: flex;\n align-items: center;\n "),$("prefix","padding-right: 16px;"),$("suffix","padding-left: 16px;")]),m("tabs-nav-scroll-wrapper","\n flex: 1;\n position: relative;\n overflow: hidden;\n ",[y("shadow-before",[w("&::before","\n box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);\n ")]),y("shadow-after",[w("&::after","\n box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);\n ")]),m("tabs-nav-y-scroll","\n height: 100%;\n width: 100%;\n overflow-y: auto; \n scrollbar-width: none;\n ",[w("&::-webkit-scrollbar","\n width: 0;\n height: 0;\n ")]),w("&::before, &::after",'\n transition: box-shadow .3s var(--n-bezier);\n pointer-events: none;\n content: "";\n position: absolute;\n top: 0;\n bottom: 0;\n width: 20px;\n z-index: 1;\n '),w("&::before","\n left: 0;\n "),w("&::after","\n right: 0;\n ")]),m("tabs-nav-scroll-content","\n display: flex;\n position: relative;\n min-width: 100%;\n width: fit-content;\n "),m("tabs-wrapper","\n display: inline-flex;\n flex-wrap: nowrap;\n position: relative;\n "),m("tabs-tab-wrapper","\n display: flex;\n flex-wrap: nowrap;\n flex-shrink: 0;\n flex-grow: 0;\n "),m("tabs-tab","\n cursor: pointer;\n white-space: nowrap;\n flex-wrap: nowrap;\n display: inline-flex;\n align-items: center;\n color: var(--n-tab-text-color);\n font-size: var(--n-tab-font-size);\n background-clip: padding-box;\n padding: var(--n-tab-padding);\n transition:\n box-shadow .3s var(--n-bezier),\n color .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n border-color .3s var(--n-bezier);\n ",[y("disabled",{cursor:"not-allowed"}),$("close","\n margin-left: 6px;\n transition:\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier);\n "),$("label","\n display: flex;\n align-items: center;\n ")]),m("tabs-bar","\n position: absolute;\n bottom: 0;\n height: 2px;\n border-radius: 1px;\n background-color: var(--n-bar-color);\n transition:\n left .2s var(--n-bezier),\n max-width .2s var(--n-bezier),\n background-color .3s var(--n-bezier);\n ",[w("&.transition-disabled","\n transition: none;\n "),y("disabled","\n background-color: var(--n-tab-text-color-disabled)\n ")]),m("tabs-pane-wrapper","\n position: relative;\n overflow: hidden;\n transition: max-height .2s var(--n-bezier);\n "),m("tab-pane","\n color: var(--n-pane-text-color);\n width: 100%;\n padding: var(--n-pane-padding);\n transition:\n color .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n opacity .2s var(--n-bezier);\n left: 0;\n right: 0;\n top: 0;\n ",[w("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active","\n transition:\n color .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n transform .2s var(--n-bezier),\n opacity .2s var(--n-bezier);\n "),w("&.next-transition-leave-active, &.prev-transition-leave-active","\n position: absolute;\n "),w("&.next-transition-enter-from, &.prev-transition-leave-to","\n transform: translateX(32px);\n opacity: 0;\n "),w("&.next-transition-leave-to, &.prev-transition-enter-from","\n transform: translateX(-32px);\n opacity: 0;\n "),w("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to","\n transform: translateX(0);\n opacity: 1;\n ")]),m("tabs-tab-pad","\n width: var(--n-tab-gap);\n flex-grow: 0;\n flex-shrink: 0;\n "),y("line-type, bar-type",[m("tabs-tab","\n font-weight: var(--n-tab-font-weight);\n box-sizing: border-box;\n vertical-align: bottom;\n ",[w("&:hover",{color:"var(--n-tab-text-color-hover)"}),y("active","\n color: var(--n-tab-text-color-active);\n font-weight: var(--n-tab-font-weight-active);\n "),y("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),m("tabs-nav",[y("line-type",[$("prefix, suffix","\n transition: border-color .3s var(--n-bezier);\n border-bottom: 1px solid var(--n-tab-border-color);\n "),m("tabs-nav-scroll-content","\n transition: border-color .3s var(--n-bezier);\n border-bottom: 1px solid var(--n-tab-border-color);\n "),m("tabs-bar","\n border-radius: 0;\n bottom: -1px;\n ")]),y("card-type",[$("prefix, suffix","\n transition: border-color .3s var(--n-bezier);\n border-bottom: 1px solid var(--n-tab-border-color);\n "),m("tabs-pad","\n flex-grow: 1;\n transition: border-color .3s var(--n-bezier);\n border-bottom: 1px solid var(--n-tab-border-color);\n "),m("tabs-tab-pad","\n transition: border-color .3s var(--n-bezier);\n border-bottom: 1px solid var(--n-tab-border-color);\n "),m("tabs-tab","\n font-weight: var(--n-tab-font-weight);\n border: 1px solid var(--n-tab-border-color);\n border-top-left-radius: var(--n-tab-border-radius);\n border-top-right-radius: var(--n-tab-border-radius);\n background-color: var(--n-tab-color);\n box-sizing: border-box;\n position: relative;\n vertical-align: bottom;\n display: flex;\n justify-content: space-between;\n font-size: var(--n-tab-font-size);\n color: var(--n-tab-text-color);\n ",[y("addable","\n padding-left: 8px;\n padding-right: 8px;\n font-size: 16px;\n ",[$("height-placeholder","\n width: 0;\n font-size: var(--n-tab-font-size);\n "),z("disabled",[w("&:hover","\n color: var(--n-tab-text-color-hover);\n ")])]),y("closable","padding-right: 6px;"),y("active","\n border-bottom: 1px solid #0000;\n background-color: #0000;\n font-weight: var(--n-tab-font-weight-active);\n color: var(--n-tab-text-color-active);\n "),y("disabled","color: var(--n-tab-text-color-disabled);")]),m("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);")]),y("left, right",[m("tabs-wrapper","\n flex-direction: column;\n ",[m("tabs-tab-wrapper","\n flex-direction: column;\n ",[m("tabs-tab-pad","\n height: var(--n-tab-gap);\n width: 100%;\n ")])]),m("tabs-nav-scroll-content","\n border-bottom: none;\n ")]),y("left",[m("tabs-nav-scroll-content","\n box-sizing: border-box;\n border-right: 1px solid var(--n-tab-border-color);\n ")]),y("right",[m("tabs-nav-scroll-content","\n border-left: 1px solid var(--n-tab-border-color);\n ")]),y("bottom",[m("tabs-nav-scroll-content","\n border-top: 1px solid var(--n-tab-border-color);\n border-bottom: none;\n ")])])]),ve=e({name:"Tabs",props:Object.assign(Object.assign({},C.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},placement:{type:String,default:"top"},tabStyle:[String,Object],barWidth:Number,paneClass:String,paneStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),setup(e,{slots:n}){var a,r,o,i;const{mergedClsPrefixRef:s,inlineThemeDisabled:l}=R(e),d=C("Tabs","-tabs",pe,V,e,s),c=t(null),b=t(null),p=t(null),v=t(null),u=t(null),h=t(!0),g=t(!0),x=P(e,["labelSize","size"]),m=P(e,["activeName","value"]),y=t(null!==(r=null!==(a=m.value)&&void 0!==a?a:e.defaultValue)&&void 0!==r?r:n.default?null===(i=null===(o=S(n.default())[0])||void 0===o?void 0:o.props)||void 0===i?void 0:i.name:null),w=T(m,y),$={id:0},z=f((()=>{if(e.justifyContent&&"card"!==e.type)return{display:"flex",justifyContent:e.justifyContent}}));function j(){var e;const{value:t}=w;if(null===t)return null;return null===(e=c.value)||void 0===e?void 0:e.querySelector(`[data-name="${t}"]`)}function N(e){const{value:t}=b;if(t)for(const n of e)t.style[n]=""}function H(){if("card"===e.type)return;const t=j();t&&function(t){if("card"===e.type)return;const{value:n}=b;if(n&&t){const a=`${s.value}-tabs-bar--disabled`,{barWidth:r,placement:o}=e;if("true"===t.dataset.disabled?n.classList.add(a):n.classList.remove(a),["top","bottom"].includes(o)){if(N(["top","maxHeight","height"]),"number"==typeof r&&t.offsetWidth>=r){const e=Math.floor((t.offsetWidth-r)/2)+t.offsetLeft;n.style.left=`${e}px`,n.style.maxWidth=`${r}px`}else n.style.left=`${t.offsetLeft}px`,n.style.maxWidth=`${t.offsetWidth}px`;n.style.width="8192px",n.offsetWidth}else{if(N(["left","maxWidth","width"]),"number"==typeof r&&t.offsetHeight>=r){const e=Math.floor((t.offsetHeight-r)/2)+t.offsetTop;n.style.top=`${e}px`,n.style.maxHeight=`${r}px`}else n.style.top=`${t.offsetTop}px`,n.style.maxHeight=`${t.offsetHeight}px`;n.style.height="8192px",n.offsetHeight}}}(t)}function F(e){var t;const n=null===(t=u.value)||void 0===t?void 0:t.$el;if(!n)return;const a=j();if(!a)return;const{scrollLeft:r,offsetWidth:o}=n,{offsetLeft:i,offsetWidth:s}=a;r>i?n.scrollTo({top:0,left:i,behavior:"smooth"}):i+s>r+o&&n.scrollTo({top:0,left:i+s-o,behavior:"smooth"})}A(w,(()=>{$.id=0,H(),F()}));const I=t(null);let M=0,X=null;const U={value:[]},q=t("next");function G(){const{value:e}=b;if(!e)return;const t="transition-disabled";e.classList.add(t),H(),e.classList.remove(t)}let Y=0;const J=le((function(t){var n;if(0===t.contentRect.width&&0===t.contentRect.height)return;if(Y===t.contentRect.width)return;Y=t.contentRect.width;const{type:a}=e;"line"!==a&&"bar"!==a||G(),"segment"!==a&&Z(null===(n=u.value)||void 0===n?void 0:n.$el)}),64);A([()=>e.justifyContent,()=>e.size],(()=>{O((()=>{const{type:t}=e;"line"!==t&&"bar"!==t||G()}))}));const K=t(!1);const Q=le((function(e){var t;const{target:n,contentRect:{width:a}}=e,r=n.parentElement.offsetWidth;if(K.value){const{value:e}=v;if(!e)return;r-a>e.$el.offsetWidth&&(K.value=!1)}else r<a&&(K.value=!0);Z(null===(t=u.value)||void 0===t?void 0:t.$el)}),64);function Z(e){if(!e)return;const{scrollLeft:t,scrollWidth:n,offsetWidth:a}=e;h.value=t<=0,g.value=t+a>=n}const ee=le((e=>{Z(e.target)}),64);L(de,{triggerRef:B(e,"trigger"),tabStyleRef:B(e,"tabStyle"),paneClassRef:B(e,"paneClass"),paneStyleRef:B(e,"paneStyle"),mergedClsPrefixRef:s,typeRef:B(e,"type"),closableRef:B(e,"closable"),valueRef:w,tabChangeIdRef:$,onBeforeLeaveRef:B(e,"onBeforeLeave"),activateTab:function(t){const n=w.value;let a="next";for(const e of U.value){if(e===n)break;if(e===t){a="prev";break}}q.value=a,function(t){const{onActiveNameChange:n,onUpdateValue:a,"onUpdate:value":r}=e;n&&E(n,t);a&&E(a,t);r&&E(r,t);y.value=t}(t)},handleClose:function(t){const{onClose:n}=e;n&&E(n,t)},handleAdd:function(){const{onAdd:t}=e;t&&t(),O((()=>{const e=j(),{value:t}=u;e&&t&&t.scrollTo({left:e.offsetLeft,top:0,behavior:"smooth"})}))}}),W((()=>{H(),F()})),_((()=>{const{value:t}=p;if(!t||["left","right"].includes(e.placement))return;const{value:n}=s,a=`${n}-tabs-nav-scroll-wrapper--shadow-before`,r=`${n}-tabs-nav-scroll-wrapper--shadow-after`;h.value?t.classList.remove(a):t.classList.add(a),g.value?t.classList.remove(r):t.classList.add(r)}));const te=t(null);A(w,(()=>{if("segment"===e.type){const e=te.value;e&&O((()=>{e.classList.add("transition-disabled"),e.offsetWidth,e.classList.remove("transition-disabled")}))}}));const ne={syncBarPosition:()=>{H()}},ae=f((()=>{const{value:t}=x,{type:n}=e,a=`${t}${{card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[n]}`,{self:{barColor:r,closeIconColor:o,closeIconColorHover:i,closeIconColorPressed:s,tabColor:l,tabBorderColor:c,paneTextColor:b,tabFontWeight:f,tabBorderRadius:p,tabFontWeightActive:v,colorSegment:u,fontWeightStrong:h,tabColorSegment:g,closeSize:m,closeIconSize:y,closeColorHover:w,closeColorPressed:$,closeBorderRadius:z,[D("panePadding",t)]:R,[D("tabPadding",a)]:C,[D("tabPaddingVertical",a)]:P,[D("tabGap",a)]:S,[D("tabTextColor",n)]:T,[D("tabTextColorActive",n)]:A,[D("tabTextColorHover",n)]:L,[D("tabTextColorDisabled",n)]:B,[D("tabFontSize",t)]:W},common:{cubicBezierEaseInOut:_}}=d.value;return{"--n-bezier":_,"--n-color-segment":u,"--n-bar-color":r,"--n-tab-font-size":W,"--n-tab-text-color":T,"--n-tab-text-color-active":A,"--n-tab-text-color-disabled":B,"--n-tab-text-color-hover":L,"--n-pane-text-color":b,"--n-tab-border-color":c,"--n-tab-border-radius":p,"--n-close-size":m,"--n-close-icon-size":y,"--n-close-color-hover":w,"--n-close-color-pressed":$,"--n-close-border-radius":z,"--n-close-icon-color":o,"--n-close-icon-color-hover":i,"--n-close-icon-color-pressed":s,"--n-tab-color":l,"--n-tab-font-weight":f,"--n-tab-font-weight-active":v,"--n-tab-padding":C,"--n-tab-padding-vertical":P,"--n-tab-gap":S,"--n-pane-padding":R,"--n-font-weight-strong":h,"--n-tab-color-segment":g}})),re=l?k("tabs",f((()=>`${x.value[0]}${e.type[0]}`)),ae,e):void 0;return Object.assign({mergedClsPrefix:s,mergedValue:w,renderedNames:new Set,tabsRailElRef:te,tabsPaneWrapperRef:I,tabsElRef:c,barElRef:b,addTabInstRef:v,xScrollInstRef:u,scrollWrapperElRef:p,addTabFixed:K,tabWrapperStyle:z,handleNavResize:J,mergedSize:x,handleScroll:ee,handleTabsResize:Q,cssVars:l?void 0:ae,themeClass:null==re?void 0:re.themeClass,animationDirection:q,renderNameListRef:U,onAnimationBeforeLeave:function(e){const t=I.value;if(t){M=e.getBoundingClientRect().height;const n=`${M}px`,a=()=>{t.style.height=n,t.style.maxHeight=n};X?(a(),X(),X=null):X=a}},onAnimationEnter:function(e){const t=I.value;if(t){const n=e.getBoundingClientRect().height,a=()=>{document.body.offsetHeight,t.style.maxHeight=`${n}px`,t.style.height=`${Math.max(M,n)}px`};X?(X(),X=null,a()):X=a}},onAnimationAfterEnter:function(){const e=I.value;e&&(e.style.maxHeight="",e.style.height="")},onRender:null==re?void 0:re.onRender},ne)},render(){const{mergedClsPrefix:e,type:t,placement:n,addTabFixed:a,addable:o,mergedSize:i,renderNameListRef:s,onRender:l,$slots:{default:d,prefix:c,suffix:b}}=this;null==l||l();const f=d?S(d()).filter((e=>!0===e.type.__TAB_PANE__)):[],p=d?S(d()).filter((e=>!0===e.type.__TAB__)):[],v=!p.length,u="card"===t,h="segment"===t,g=!u&&!h&&this.justifyContent;s.value=[];const x=()=>{const t=r("div",{style:this.tabWrapperStyle,class:[`${e}-tabs-wrapper`]},g?null:r("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}),v?f.map(((e,t)=>(s.value.push(e.props.name),xe(r(fe,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:0!==t&&(!g||"center"===g||"start"===g||"end"===g)}),e.children?{default:e.children.tab}:void 0))))):p.map(((e,t)=>(s.value.push(e.props.name),xe(0===t||g?e:ge(e))))),!a&&o&&u?he(o,0!==(v?f.length:p.length)):null,g?null:r("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return r("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},u&&o?r(N,{onResize:this.handleTabsResize},{default:()=>t}):t,u?r("div",{class:`${e}-tabs-pad`}):null,u?null:r("div",{ref:"barElRef",class:`${e}-tabs-bar`}))};return r("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${i}-size`,g&&`${e}-tabs--flex`,`${e}-tabs--${n}`],style:this.cssVars},r("div",{class:[`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav--${n}`,`${e}-tabs-nav`]},j(c,(t=>t&&r("div",{class:`${e}-tabs-nav__prefix`},t))),h?r("div",{class:`${e}-tabs-rail`,ref:"tabsRailElRef"},v?f.map(((e,t)=>(s.value.push(e.props.name),r(fe,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:0!==t}),e.children?{default:e.children.tab}:void 0)))):p.map(((e,t)=>(s.value.push(e.props.name),0===t?e:ge(e))))):r(N,{onResize:this.handleNavResize},{default:()=>r("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(n)?r(q,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:x}):r("div",{class:`${e}-tabs-nav-y-scroll`},x()))}),a&&o&&u?he(o,!0):null,j(b,(t=>t&&r("div",{class:`${e}-tabs-nav__suffix`},t)))),v&&(this.animated?r("div",{ref:"tabsPaneWrapperRef",class:`${e}-tabs-pane-wrapper`},ue(f,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):ue(f,this.mergedValue,this.renderedNames)))}});function ue(e,t,n,a,o,i,s){const l=[];return e.forEach((e=>{const{name:a,displayDirective:r,"display-directive":o}=e.props,i=e=>r===e||o===e,s=t===a;if(void 0!==e.key&&(e.key=a),s||i("show")||i("show:lazy")&&n.has(a)){n.has(a)||n.add(a);const t=!i("if");l.push(t?H(e,[[M,s]]):e)}})),s?r(F,{name:`${s}-transition`,onBeforeLeave:a,onEnter:o,onAfterEnter:i},{default:()=>l}):l}function he(e,t){return r(fe,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:"object"==typeof e&&e.disabled})}function ge(e){const t=I(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function xe(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}export{fe as _,ve as a,be as b};