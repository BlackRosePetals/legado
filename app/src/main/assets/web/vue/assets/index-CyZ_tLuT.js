const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./BookShelf-OCI2jMxW.js","./vendor-UVL3l2rb.js","./vendor-S5atAh6y.css","./loading--qckEkbY.js","./bookStore-O1g6rLjj.js","./loading-B7pvk95E.css","./BookShelf-DZhbjTIU.css","./BookChapter-txg2S1ZU.js","./BookChapter-B8PYup72.css","./config-BsTATf_v.js","./config-B2IgxNHB.css"])))=>i.map(i=>d[i]);
import{r as xe,o as c,c as U,a as re,b as le,d as I,e as m,w as u,f,u as r,l as L,g as h,F as $,E as Be,h as ge,i as D,j as Ie,k as C,m as Ve,s as X,n as z,t as Q,p as me,q as Se,v as se,x as Ne,y as j,z as he,A as Te,B as Re,C as ue,V as Oe,D as Le,G as Y,H as $e,I as ye,J as De,K as R,L as Je,M as Pe,N as A,O as fe,P as _e,Q as H,R as Ae,S as je,T as Ke,U as He,W as Me,X as qe,Y as Fe,Z as We,_ as ze,$ as Ge}from"./vendor-UVL3l2rb.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const p of s.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&l(p)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();const Qe="modulepreload",Xe=function(e,o){return new URL(e,o).href},ce={},oe=function(o,t,l){let n=Promise.resolve();if(t&&t.length>0){const p=document.getElementsByTagName("link"),g=document.querySelector("meta[property=csp-nonce]"),_=(g==null?void 0:g.nonce)||(g==null?void 0:g.getAttribute("nonce"));n=Promise.allSettled(t.map(b=>{if(b=Xe(b,l),b in ce)return;ce[b]=!0;const E=b.endsWith(".css"),B=E?'[rel="stylesheet"]':"";if(!!l)for(let d=p.length-1;d>=0;d--){const v=p[d];if(v.href===b&&(!E||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${b}"]${B}`))return;const i=document.createElement("link");if(i.rel=E?"stylesheet":Qe,E||(i.as="script"),i.crossOrigin="",i.href=b,_&&i.setAttribute("nonce",_),document.head.appendChild(i),E)return new Promise((d,v)=>{i.addEventListener("load",d),i.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${b}`)))})}))}function s(p){const g=new Event("vite:preloadError",{cancelable:!0});if(g.payload=p,window.dispatchEvent(g),!g.defaultPrevented)throw p}return n.then(p=>{for(const g of p||[])g.status==="rejected"&&s(g.reason);return o().catch(s)})},J=(e,o)=>{const t=e.__vccOpts||e;for(const[l,n]of o)t[l]=n;return t},Ye={};function Ze(e,o){const t=xe("router-view");return c(),U(t)}const et=J(Ye,[["render",Ze]]),be=[{path:"/",name:"shelf",component:()=>oe(()=>import("./BookShelf-OCI2jMxW.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url)},{path:"/chapter",name:"chapter",component:()=>oe(()=>import("./BookChapter-txg2S1ZU.js"),__vite__mapDeps([7,1,2,3,4,5,8]),import.meta.url)}];re({history:le(),routes:be});const tt={style:{"margin-top":"20px"}},ot={__name:"SourceHelp",setup(e){return(o,t)=>{const l=Be,n=ge;return c(),I($,null,[m(l,{icon:r(L),href:"/help/#appHelp",target:"_blank"},{default:u(()=>t[0]||(t[0]=[f("APP帮助文档")])),_:1},8,["icon"]),t[19]||(t[19]=h("br",null,null,-1)),m(l,{icon:r(L),href:"/help/#ruleHelp",target:"_blank"},{default:u(()=>t[1]||(t[1]=[f("书源制作教程")])),_:1},8,["icon"]),t[20]||(t[20]=h("br",null,null,-1)),m(l,{icon:r(L),href:"/help/#jsHelp",target:"_blank"},{default:u(()=>t[2]||(t[2]=[f("js变量和函数")])),_:1},8,["icon"]),t[21]||(t[21]=h("br",null,null,-1)),m(l,{icon:r(L),href:"/help/#xpathHelp",target:"_blank"},{default:u(()=>t[3]||(t[3]=[f("xpath语法教程")])),_:1},8,["icon"]),t[22]||(t[22]=h("br",null,null,-1)),m(l,{icon:r(L),href:"/help/#regexHelp",target:"_blank"},{default:u(()=>t[4]||(t[4]=[f("正则表达式教程")])),_:1},8,["icon"]),t[23]||(t[23]=h("br",null,null,-1)),m(l,{icon:r(L),href:"/help/#txtTocRuleHelp",target:"_blank"},{default:u(()=>t[5]||(t[5]=[f("txt目录正则说明")])),_:1},8,["icon"]),t[24]||(t[24]=h("br",null,null,-1)),m(l,{icon:r(L),href:"/help/#debugHelp",target:"_blank"},{default:u(()=>t[6]||(t[6]=[f("书源调试说明")])),_:1},8,["icon"]),t[25]||(t[25]=h("br",null,null,-1)),m(l,{icon:r(L),href:"/help/#httpTTSHelp",target:"_blank"},{default:u(()=>t[7]||(t[7]=[f("在线朗读规则")])),_:1},8,["icon"]),t[26]||(t[26]=h("br",null,null,-1)),m(l,{icon:r(L),href:"/help/#webDavBookHelp",target:"_blank"},{default:u(()=>t[8]||(t[8]=[f(" WebDav书籍简明使用教程")])),_:1},8,["icon"]),t[27]||(t[27]=h("br",null,null,-1)),m(l,{icon:r(L),href:"/help/#webDavHelp",target:"_blank"},{default:u(()=>t[9]||(t[9]=[f(" WebDav备份教程")])),_:1},8,["icon"]),t[28]||(t[28]=h("br",null,null,-1)),m(l,{icon:r(L),href:"https://regexr-cn.com/",target:"_blank"},{default:u(()=>t[10]||(t[10]=[f("正则表达式在线验证工具")])),_:1},8,["icon"]),t[29]||(t[29]=h("br",null,null,-1)),h("div",tt,[h("span",null,[m(n,null,{default:u(()=>t[11]||(t[11]=[h("code",null,"^$()[]{}.?+*|",-1),f(" 这些是Java正则特殊符号,匹配需转义")])),_:1})]),t[15]||(t[15]=h("br",null,null,-1)),h("span",null,[m(n,null,{default:u(()=>t[12]||(t[12]=[h("code",null,"(?s)",-1),f(" 前缀表示跨行解析")])),_:1})]),t[16]||(t[16]=h("br",null,null,-1)),h("span",null,[m(n,null,{default:u(()=>t[13]||(t[13]=[h("code",null,"(?m)",-1),f(" 前缀表示逐行匹配")])),_:1})]),t[17]||(t[17]=h("br",null,null,-1)),h("span",null,[m(n,null,{default:u(()=>t[14]||(t[14]=[h("code",null,"(?i)",-1),f(" 前缀表示忽略大小写")])),_:1})]),t[18]||(t[18]=h("br",null,null,-1))])],64)}}},nt=J(ot,[["__scopeId","data-v-35b7188a"]]),rt=1e3,ke=D(localStorage.getItem("remoteIp")),x=Ie.create({timeout:120*rt});x.interceptors.request.use(e=>(e.baseURL=ie(),e));const oo=e=>{ke.value=e,localStorage.setItem("remoteIp",e)},ie=()=>ke.value||location.origin,ve=()=>{const{hostname:e,port:o}=new URL(ie());return`${e}:${Number(o)+1}`},lt=/source/i.test(location.href),st=e=>{throw lt&&C({message:"后端错误，检查网络或者阅读app",type:"error"}),e};x.interceptors.response.use(e=>e,st);const it=()=>x.get("/getReadConfig"),at=e=>x.post("/saveReadConfig",e),ut=e=>x.post("/saveBookProgress",e),ct=e=>{e&&navigator.sendBeacon(`${ie()}/saveBookProgress`,JSON.stringify(e))},dt=()=>x.get("/getBookshelf"),pt=e=>x.get("/getChapterList?url="+encodeURIComponent(e)),gt=(e,o)=>x.get("/getBookContent?url="+encodeURIComponent(e)+"&index="+o),mt=(e,o,t)=>{const l=`ws://${ve()}/searchBook`,n=new WebSocket(l);n.onopen=()=>{n.send(`{"key":"${e}"}`)},n.onmessage=({data:s})=>o(s),n.onclose=()=>{t()}},St=e=>x.post("/saveBook",e),ht=e=>x.post("/deleteBook",e),G=/bookSource/i.test(location.href),yt=()=>G?x.get("/getBookSources"):x.get("/getRssSources"),ft=e=>G?x.post("/saveBookSource",e):x.post("/saveRssSource",e),_t=e=>G?x.post("/saveBookSources",e):x.post("/saveRssSources",e),bt=e=>G?x.post("/deleteBookSources",e):x.post("/deleteRssSources",e),kt=(e,o,t,l)=>{const n=`ws://${ve()}/${G?"bookSource":"rssSource"}Debug`,s=new WebSocket(n);s.onopen=()=>{s.send(JSON.stringify({tag:e,key:o}))},s.onmessage=({data:p})=>t(p),s.onclose=()=>{C({message:"调试已关闭！",type:"info"}),l()}},q={getReadConfig:it,saveReadConfig:at,saveBookProgress:ut,saveBookProgressWithBeacon:ct,getBookShelf:dt,getChapterList:pt,getBookContent:gt,search:mt,saveBook:St,deleteBook:ht,getSources:yt,saveSources:_t,saveSource:ft,deleteSource:bt,debug:kt},W=e=>e==null||e.length===0||/^\s+$/.test(e),ae=e=>"bookSourceName"in e,vt=e=>ae(e)?!W(e.bookSourceName)&&!W(e.bookSourceUrl)&&!W(e.bookSourceType):!W(e.sourceName)&&!W(e.sourceName),Z=e=>ae(e)?e.bookSourceUrl:e.sourceUrl,wt=(e,o)=>{var t,l,n,s,p,g,_,b;return ae(e)?(((t=e.bookSourceName)==null?void 0:t.includes(o))||((l=e.bookSourceUrl)==null?void 0:l.includes(o))||((n=e.bookSourceGroup)==null?void 0:n.includes(o))||((s=e.bookSourceComment)==null?void 0:s.includes(o)))??!1:(((p=e.sourceName)==null?void 0:p.includes(o))||((g=e.sourceUrl)==null?void 0:g.includes(o))||((_=e.sourceGroup)==null?void 0:_.includes(o))||((b=e.sourceComment)==null?void 0:b.includes(o)))??!1},ne=e=>{const o=new Map;return e.forEach(t=>o.set(Z(t),t)),o},Ut={ruleSearch:{},ruleBookInfo:{},ruleToc:{},ruleContent:{},ruleReview:{},ruleExplore:{}},Et={},M=/bookSource/i.test(location.href),de=M?Ut:Et,K=Ve("source",{state:()=>({bookSources:[],rssSources:[],savedSources:[],currentSource:de,currentTab:localStorage.getItem("tabName")||"editTab",editTabSource:{},isDebuging:!1}),getters:{sources:e=>M?e.bookSources:e.rssSources,sourcesMap:e=>ne(e.sources),savedSourcesMap:e=>ne(e.savedSources),currentSourceUrl:e=>M?e.currentSource.bookSourceUrl:e.currentSource.sourceUrl,searchKey:e=>M?e.currentSource.ruleSearch.checkKeyWord||"我的":null},actions:{startDebug(){this.currentTab="editDebug",this.isDebuging=!0},debugFinish(){this.isDebuging=!1},saveSources(e){M?this.bookSources=e:this.rssSources=e},setPushReturnSources(e){this.savedSources=e},deleteSources(e){let o=M?this.bookSources:this.rssSources;e.forEach(t=>{let l=o.indexOf(t);l>-1&&o.splice(l,1)})},saveCurrentSource(){let e=this.currentSource,o=this.sourcesMap;o.set(Z(e),JSON.parse(JSON.stringify(e))),this.saveSources(Array.from(o.values()))},changeCurrentSource(e){this.currentSource=JSON.parse(JSON.stringify(e))},changeTabName(e){this.currentTab=e,localStorage.setItem("tabName",e)},changeEditTabSource(e){this.editTabSource=JSON.parse(JSON.stringify(e))},editHistory(e){let o;if(localStorage.getItem("history"))o=JSON.parse(localStorage.getItem("history")),o.new.push(e),o.new.length>50&&o.new.shift(),o.old.length>50&&o.old.shift(),localStorage.setItem("history",JSON.stringify(o));else{const t={new:[e],old:[]};localStorage.setItem("history",JSON.stringify(t))}},editHistoryUndo(){if(localStorage.getItem("history")){let e=JSON.parse(localStorage.getItem("history"));e.old.push(this.currentSource),e.new.length&&(this.currentSource=e.new.pop()),localStorage.setItem("history",JSON.stringify(e))}},clearAllHistory(){localStorage.setItem("history",JSON.stringify({new:[],old:[]}))},clearEdit(){this.editTabSource={},this.currentSource=de},clearAllSource(){this.bookSources=[],this.rssSources=[],this.savedSources=[]}}}),Ct={__name:"SourceItem",props:["source"],setup(e){const o=e,t=K(),{savedSourcesMap:l,currentSourceUrl:n}=X(t),s=z(()=>Z(o.source)),p=_=>{t.changeCurrentSource(_)},g=z(()=>{const _=l.value;return _.size==0?!1:!_.has(s.value)});return(_,b)=>{const E=se,B=Ne;return c(),U(B,{size:"large",border:"",label:r(s),class:Se({error:r(g),edit:r(s)==r(n)})},{default:u(()=>[f(Q(e.source.bookSourceName||e.source.sourceName)+" ",1),m(E,{text:"",icon:r(me),onClick:b[0]||(b[0]=w=>p(e.source))},null,8,["icon"])]),_:1},8,["label","class"])}}},xt=J(Ct,[["__scopeId","data-v-830cee5a"]]),Bt={class:"tool"},It={__name:"SourceList",setup(e){const o=K(),t=D([]),l=D(""),{sources:n,sourcesMap:s}=X(o),p=z(()=>{const i=l.value;return i===""?n.value:n.value.filter(d=>wt(d,i))}),g=z(()=>{const i=t.value;if(i.length==0)return[];const d=l.value==""?s.value:ne(p.value);return i.reduce((v,k)=>{const V=d.get(k);return V&&v.push(V),v},[])}),_=()=>{const i=g.value;q.deleteSource(i).then(({data:d})=>{if(!d.isSuccess)return C.error(d.errorMsg);o.deleteSources(i);const v=Le(t.value);i.forEach(k=>{const V=v.indexOf(Z(k));V>-1&&v.splice(V,1)}),t.value=v})},b=()=>{o.clearAllSource(),t.value=[]},E=()=>{const i=document.createElement("input");i.type="file",i.accept=".json,.txt",i.addEventListener("change",d=>{const v=d.target.files[0];var k=new FileReader;k.readAsText(v),k.onload=()=>{try{const V=JSON.parse(k.result);o.saveSources(V)}catch{C({message:"上传的源格式错误",type:"error"})}}}),i.click()},B=/bookSource/.test(window.location.href),w=()=>{const i=document.createElement("a");let d=t.value.length===0?p.value:g.value,v=B?"BookSource":"RssSource";i.download=`${v}_${Date().replace(/.*?\s(\d+)\s(\d+)\s(\d+:\d+:\d+).*/,"$2$1$3").replace(/:/g,"")}.json`;let k=new Blob([JSON.stringify(d,null,4)],{type:"application/json"});i.href=window.URL.createObjectURL(k),i.click()};return(i,d)=>{const v=Y,k=se,V=$e;return c(),I($,null,[m(v,{modelValue:r(l),"onUpdate:modelValue":d[0]||(d[0]=N=>j(l)?l.value=N:null),class:"search","prefix-icon":r(he),placeholder:"筛选源"},null,8,["modelValue","prefix-icon"]),h("div",Bt,[m(k,{onClick:E,icon:r(Te)},{default:u(()=>d[2]||(d[2]=[f("打开")])),_:1},8,["icon"]),m(k,{disabled:r(p).length===0,onClick:w,icon:r(Re)},{default:u(()=>d[3]||(d[3]=[f(" 导出")])),_:1},8,["disabled","icon"]),m(k,{type:"danger",icon:r(ue),onClick:_,disabled:r(g).length===0},{default:u(()=>d[4]||(d[4]=[f("删除")])),_:1},8,["icon","disabled"]),m(k,{type:"danger",icon:r(ue),onClick:b,disabled:r(n).length===0},{default:u(()=>d[5]||(d[5]=[f("清空")])),_:1},8,["icon","disabled"])]),m(V,{id:"source-list",modelValue:r(t),"onUpdate:modelValue":d[1]||(d[1]=N=>j(t)?t.value=N:null)},{default:u(()=>[m(r(Oe),{style:{height:"100%","overflow-y":"auto","overflow-x":"hidden"},"data-key":N=>N.bookSourceUrl||N.sourceUrl,"data-sources":r(p),"data-component":xt,"estimate-size":45},null,8,["data-key","data-sources"])]),_:1},8,["modelValue"])],64)}}},Vt=J(It,[["__scopeId","data-v-cd1572ca"]]),Nt={__name:"SourceDebug",setup(e){const o=K(),t=D(""),l=D("");ye(()=>o.isDebuging,()=>{o.isDebuging&&s()});const n=g=>{let _=document.querySelector("#debug-text");_.scrollTop=_.scrollHeight,t.value+=g+`
`},s=async()=>{t.value="";try{await q.saveSource(o.currentSource)}catch(g){throw o.debugFinish(),g}q.debug(o.currentSourceUrl,l.value||o.searchKey,n,o.debugFinish)},p=z(()=>/bookSource/.test(window.location.href));return(g,_)=>{const b=Y;return c(),I($,null,[r(p)?(c(),U(b,{key:0,id:"debug-key",modelValue:r(l),"onUpdate:modelValue":_[0]||(_[0]=E=>j(l)?l.value=E:null),placeholder:"搜索书名、作者","prefix-icon":r(he),style:{"padding-bottom":"4px"},onKeydown:De(s,["enter"])},null,8,["modelValue","prefix-icon"])):R("",!0),m(b,{id:"debug-text",modelValue:r(t),"onUpdate:modelValue":_[1]||(_[1]=E=>j(t)?t.value=E:null),type:"textarea",readonly:"",rows:"29",placeholder:"这里用于输出调试信息"},null,8,["modelValue"])],64)}}},Tt=J(Nt,[["__scopeId","data-v-97ed449e"]]),Rt=Je(),Ot={__name:"SourceJson",setup(e){const o=K(),t=D(""),l=async n=>{try{o.changeEditTabSource(JSON.parse(n))}catch{C({message:"粘贴的源格式错误",type:"error"})}};return Pe(async()=>{let n=o.editTabSource;Object.keys(n).length>0?t.value=JSON.stringify(n,null,4):t.value=""}),(n,s)=>{const p=Y;return c(),U(p,{id:"source-json",modelValue:r(t),"onUpdate:modelValue":s[0]||(s[0]=g=>j(t)?t.value=g:null),type:"textarea",placeholder:"这里输出序列化的JSON数据,可直接导入'阅读'APP",rows:"30",onChange:l,style:{"margin-bottom":"4px"}},null,8,["modelValue"])}}},Lt=J(Ot,[["__scopeId","data-v-7e91a802"]]),$t={__name:"SourceTabTools",setup(e){const o=K(),{currentTab:t}=X(o),l=D([["editTab","编辑源"],["editDebug","调试源"],["editList","源列表"],["editHelp","帮助信息"]]);return(n,s)=>{const p=Lt,g=Tt,_=Vt,b=nt,E=fe,B=_e;return c(),U(B,{modelValue:r(t),"onUpdate:modelValue":s[0]||(s[0]=w=>j(t)?t.value=w:null)},{default:u(()=>[(c(!0),I($,null,A(r(l),(w,i)=>(c(),U(E,{key:w[0],name:w[0],label:w[1]},{default:u(()=>[i==0?(c(),U(p,{key:0})):R("",!0),i==1?(c(),U(g,{key:1})):R("",!0),i==2?(c(),U(_,{key:2})):R("",!0),i==3?(c(),U(b,{key:3})):R("",!0)]),_:2},1032,["name","label"]))),128))]),_:1},8,["modelValue"])}}},Dt=J($t,[["__scopeId","data-v-dcce2457"]]),Jt={class:"menu flex-column-center"},Pt={class:"hotkeys-header flex-space-between"},At=["id"],jt={key:0},Kt={class:"hotkeys-settings flex-column-center"},Ht={class:"title"},Mt={class:"hotkeys-item__content"},qt={key:0},Ft={key:0},Wt={__name:"ToolBar",setup(e){const o=K(),t=()=>{const y=C({message:"加载中……",showClose:!0,duration:0});q.getSources().then(({data:a})=>{a.isSuccess?(o.changeTabName("editList"),o.saveSources(a.data),C({message:`成功拉取${a.data.length}条源`,type:"success"})):C({message:a.errorMsg??"后端错误",type:"error"})}).finally(()=>y.close())},l=()=>{let y=o.sources;if(o.changeTabName("editList"),y.length===0)return C({message:"空空如也",type:"info"});C({message:"正在推送中",type:"info"}),q.saveSources(y).then(({data:a})=>{if(a.isSuccess){let S=a.data;if(Array.isArray(S)){let P="";y.length>S.length&&(P=`
推送失败的源将用红色字体标注!`,o.setPushReturnSources(S)),C({message:`批量推送源到「阅读3.0APP」
共计: ${y.length} 条
成功: ${S.length} 条
失败: ${y.length-S.length} 条${P}`,type:"success"})}}else C({message:`批量推送源失败!
ErrorMsg: ${a.errorMsg}`,type:"error"})})},n=()=>{o.changeTabName("editTab"),o.changeEditTabSource(o.currentSource)},s=()=>{o.changeCurrentSource(o.editTabSource)},p=()=>{o.editHistoryUndo()},g=()=>{o.clearEdit(),C({message:"已清除",type:"success"})},_=()=>{o.clearEdit(),o.clearAllHistory(),C({message:"已清除所有历史记录",type:"success"})},b=()=>{let y=/bookSource/.test(location.href),a=o.currentSource;vt(a)?q.saveSource(a).then(({data:S})=>{S.isSuccess?(C({message:`源《${y?a.bookSourceName:a.sourceName}》已成功保存到「阅读3.0APP」`,type:"success"}),o.saveCurrentSource()):C({message:`源《${y?a.bookSourceName:a.sourceName}》保存失败!
ErrorMsg: ${S.errorMsg}`,type:"error"})}):C({message:"请检查<必填>项是否全部填写",type:"error"})},E=()=>{o.startDebug()},B=D(Array.of({name:"⇈推送源",hotKeys:[],action:l},{name:"⇊拉取源",hotKeys:[],action:t},{name:"⋙生成源",hotKeys:[],action:n},{name:"⋘编辑源",hotKeys:[],action:s},{name:"✗清空表单",hotKeys:[],action:g},{name:"↶撤销操作",hotKeys:[],action:p},{name:"↷重做操作",hotKeys:[],action:_},{name:"⇏调试源",hotKeys:[],action:E},{name:"✓保存源",hotKeys:[],action:b})),w=D(!0),i=D(!1),d=D(-1),v=()=>{i.value||(w.value=!1),i.value=!1};ye(w,y=>{if(!y){H.unbind("*"),F(),N();return}F(),H.unbind(),H("*",a=>{a.preventDefault();let S=H.getPressedKeyString();S.length==1&&S[0]=="esc"||i.value&&d.value>-1&&(B.value[d.value].hotKeys=S)})},{immediate:!0});const k=y=>{i.value=!0,C({message:"按ESC键或者点击空白处结束录入",type:"info"}),B.value[y].hotKeys=[],d.value=y},V=()=>{const y=[];B.value.forEach(({hotKeys:a})=>{y.push(a)}),O(y),w.value=!1},N=()=>{H.filter=()=>!0,B.value.forEach(({hotKeys:y,action:a})=>{y.length!=0&&H(y.join("+"),S=>{S.preventDefault(),a.call(null)})})},O=y=>{localStorage.setItem("legado_web_hotkeys",JSON.stringify(y))};function F(){try{const y=JSON.parse(localStorage.getItem("legado_web_hotkeys"));return!Array.isArray(y)||y.length==0?!1:(B.value.forEach((a,S)=>a.hotKeys=y[S]),!0)}catch{C({message:"快捷键配置错误",type:"error"}),localStorage.removeItem("legado_web_hotkeys")}return!1}return Ae(()=>{F()&&(w.value=!1)}),(y,a)=>{const S=se,P=ge,Ee=Ke;return c(),I($,null,[h("div",Jt,[(c(!0),I($,null,A(r(B),T=>(c(),U(S,{size:"large",key:T.name,onClick:T.action},{default:u(()=>[f(Q(T.name),1)]),_:2},1032,["onClick"]))),128)),m(S,{size:"large",onClick:a[0]||(a[0]=()=>w.value=!0)},{default:u(()=>a[2]||(a[2]=[f("快捷键")])),_:1})]),m(Ee,{modelValue:r(w),"onUpdate:modelValue":a[1]||(a[1]=T=>j(w)?w.value=T:null),"show-close":!1,"before-close":v},{header:u(({titleClass:T,titleId:ee})=>[h("div",Pt,[h("div",{id:ee,class:Se(T)},[a[4]||(a[4]=f(" 快捷键设置 ")),r(i)?(c(),I("span",jt,[m(P,null,{default:u(()=>a[3]||(a[3]=[f(" / 录入中 ")])),_:1})])):R("",!0)],10,At),m(S,{disabled:r(i),onClick:V,icon:r(je)},{default:u(()=>a[5]||(a[5]=[f("保存")])),_:1},8,["disabled","icon"])])]),default:u(()=>[h("div",Kt,[(c(!0),I($,null,A(r(B),(T,ee)=>(c(),I("div",{key:T.name,class:"hotkeys-item flex-space-between"},[h("span",Ht,[m(P,null,{default:u(()=>[f(Q(T.name),1)]),_:2},1024)]),h("div",Mt,[(c(!0),I($,null,A(T.hotKeys,(te,Ce)=>(c(),I("div",{key:te},[h("kbd",null,Q(te),1),Ce+1<T.hotKeys.length?(c(),I("span",qt,[m(P,null,{default:u(()=>a[6]||(a[6]=[f("+")])),_:1})])):R("",!0)]))),128)),T.hotKeys.length==0?(c(),I("span",Ft,"未设置")):R("",!0)]),m(S,{disabled:r(i),text:"",icon:r(me),onClick:te=>k(ee)},{default:u(()=>a[7]||(a[7]=[f("编辑")])),_:2},1032,["disabled","icon","onClick"])]))),128))])]),_:1},8,["modelValue"])],64)}}},zt=J(Wt,[["__scopeId","data-v-9fd45dad"]]),Gt={__name:"SourceTabForm",props:["config"],setup(e){const o=K(),{currentSource:t}=X(o);return(l,n)=>{const s=Y,p=He,g=Me,_=qe,b=Fe,E=We,B=ze,w=fe,i=_e;return c(),U(i,{id:"source-edit"},{default:u(()=>[(c(!0),I($,null,A(Object.values(e.config),({name:d,children:v})=>(c(),U(w,{label:d,key:d},{default:u(()=>[m(B,{"label-position":"right","label-width":"auto"},{default:u(()=>[(c(!0),I($,null,A(v,({type:k,title:V,namespace:N,id:O,array:F,hint:y,required:a})=>(c(),U(E,{label:V,key:V,required:a},{default:u(()=>[k=="String"&&typeof N>"u"?(c(),U(s,{key:0,type:"textarea",modelValue:r(t)[O],"onUpdate:modelValue":S=>r(t)[O]=S,placeholder:y,autosize:""},null,8,["modelValue","onUpdate:modelValue","placeholder"])):R("",!0),k=="String"&&typeof N<"u"?(c(),U(s,{key:1,type:"textarea",modelValue:r(t)[N][O],"onUpdate:modelValue":S=>r(t)[N][O]=S,placeholder:y,autosize:""},null,8,["modelValue","onUpdate:modelValue","placeholder"])):R("",!0),k=="Boolean"?(c(),U(p,{key:2,modelValue:r(t)[O],"onUpdate:modelValue":S=>r(t)[O]=S},null,8,["modelValue","onUpdate:modelValue"])):R("",!0),k=="Number"?(c(),U(g,{key:3,modelValue:r(t)[O],"onUpdate:modelValue":S=>r(t)[O]=S,min:0},null,8,["modelValue","onUpdate:modelValue"])):R("",!0),k=="Array"?(c(),U(b,{key:4,modelValue:r(t)[O],"onUpdate:modelValue":S=>r(t)[O]=S},{default:u(()=>[(c(!0),I($,null,A(F,(S,P)=>(c(),U(_,{value:P,key:S,label:S},null,8,["value","label"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])):R("",!0)]),_:2},1032,["label","required"]))),128))]),_:2},1024)]),_:2},1032,["label"]))),128))]),_:1})}}},Qt=J(Gt,[["__scopeId","data-v-bced2b97"]]),Xt={base:{name:"基础",children:[{title:"源类型",id:"bookSourceType",type:"Array",array:["文本","音频","图片","文件"],required:!0},{title:"源域名",id:"bookSourceUrl",type:"String",hint:"通常填写网站主页,例: https://www.qidian.com",required:!0},{title:"源名称",id:"bookSourceName",type:"String",hint:"会显示在源列表",required:!0},{title:"源分组",id:"bookSourceGroup",type:"String",hint:"描述源的特征信息"},{title:"源注释",id:"bookSourceComment",type:"String",hint:"描述源作者和状态"},{title:"登录地址",id:"loginUrl",type:"String",hint:"填写网站登录网址,仅在需要登录的源有用"},{title:"登录界面",id:"loginUi",type:"String",hint:"自定义登录界面"},{title:"登录检测",id:"loginCheckJs",type:"String",hint:"登录检测js"},{title:"封面解密",id:"coverDecodeJs",type:"String",hint:"封面解密js"},{title:"链接验证",id:"bookUrlPattern",type:"String",hint:"书籍URL正则，当详情页URL与源URL的域名不一致时有效，用于添加网址"},{title:"请求头",id:"header",type:"String",hint:"客户端标识"},{title:"变量说明",id:"variableComment",type:"String",hint:"书源变量说明"},{title:"并发率",id:"concurrentRate",type:"String",hint:"并发率，如1000(访问间隔1000ms)或者1/1000(1000ms内访问1次)"},{title:"js库",id:"jsLib",type:"String",hint:"js库, 可填写js或者key-value object获取在线js文件"}]},search:{name:"搜索",children:[{title:"搜索地址",id:"searchUrl",type:"String",hint:"[域名可省略]/search.php@kw={{key}}"},{title:"校验文字",namespace:"ruleSearch",id:"checkKeyWord",type:"String",hint:"校验关键字，强烈建议填写"},{title:"列表规则",namespace:"ruleSearch",id:"bookList",type:"String",hint:"选择书籍节点 (规则结果为List<Element>)"},{title:"书名规则",namespace:"ruleSearch",id:"name",type:"String",hint:"选择节点书名 (规则结果为String)"},{title:"作者规则",namespace:"ruleSearch",id:"author",type:"String",hint:"选择节点作者 (规则结果为String)"},{title:"分类规则",namespace:"ruleSearch",id:"kind",type:"String",hint:"选择节点分类信息 (规则结果为String)"},{title:"字数规则",namespace:"ruleSearch",id:"wordCount",type:"String",hint:"选择节点字数信息 (规则结果为String)"},{title:"最新章节",namespace:"ruleSearch",id:"lastChapter",type:"String",hint:"选择节点最新章节 (规则结果为String)"},{title:"简介规则",namespace:"ruleSearch",id:"intro",type:"String",hint:"选择节点书籍简介 (规则结果为String)"},{title:"封面规则",namespace:"ruleSearch",id:"coverUrl",type:"String",hint:"选择节点书籍封面 (规则结果为String类型的url)"},{title:"详情地址",namespace:"ruleSearch",id:"bookUrl",type:"String",hint:"选择书籍详情页网址 (规则结果为String类型的url)"}]},find:{name:"发现",children:[{title:"发现地址",id:"exploreUrl",type:"String",hint:"单个发现格式<name>::<url>或者{url:<url>,title:<name>,style:...}；前者用换行符或者&&连接，后者放在数组内；可用js动态生成"},{title:"列表规则",namespace:"ruleExplore",id:"bookList",type:"String",hint:"选择书籍节点 (规则结果为List<Element>)"},{title:"书名规则",namespace:"ruleExplore",id:"name",type:"String",hint:"选择节点书名 (规则结果为String)"},{title:"作者规则",namespace:"ruleExplore",id:"author",type:"String",hint:"选择节点作者 (规则结果为String)"},{title:"分类规则",namespace:"ruleExplore",id:"kind",type:"String",hint:"选择节点分类信息 (规则结果为String)"},{title:"字数规则",namespace:"ruleExplore",id:"wordCount",type:"String",hint:"选择节点字数信息 (规则结果为String)"},{title:"最新章节",namespace:"ruleExplore",id:"lastChapter",type:"String",hint:"选择节点最新章节 (规则结果为String)"},{title:"简介规则",namespace:"ruleExplore",id:"intro",type:"String",hint:"选择节点书籍简介 (规则结果为String)"},{title:"封面规则",namespace:"ruleExplore",id:"coverUrl",type:"String",hint:"选择节点书籍封面 (规则结果为String类型的url)"},{title:"详情地址",namespace:"ruleExplore",id:"bookUrl",type:"String",hint:"选择书籍详情页网址 (规则结果为String类型的url)"}]},detail:{name:"详情",children:[{title:"预处理",namespace:"ruleBookInfo",id:"init",type:"String",hint:"用于加速详情信息检索，只支持AllInOne规则"},{title:"书名规则",namespace:"ruleBookInfo",id:"name",type:"String",hint:"选择节点书名 (规则结果为String)"},{title:"作者规则",namespace:"ruleBookInfo",id:"author",type:"String",hint:"选择节点作者 (规则结果为String)"},{title:"分类规则",namespace:"ruleBookInfo",id:"kind",type:"String",hint:"选择节点分类信息 (规则结果为String)"},{title:"字数规则",namespace:"ruleBookInfo",id:"wordCount",type:"String",hint:"选择节点字数信息 (规则结果为String)"},{title:"最新章节",namespace:"ruleBookInfo",id:"lastChapter",type:"String",hint:"选择节点最新章节 (规则结果为String)"},{title:"简介规则",namespace:"ruleBookInfo",id:"intro",type:"String",hint:"选择节点书籍简介 (规则结果为String)"},{title:"封面规则",namespace:"ruleBookInfo",id:"coverUrl",type:"String",hint:"选择节点书籍封面 (规则结果为String类型的url)"},{title:"目录地址",namespace:"ruleBookInfo",id:"tocUrl",type:"String",hint:"选择书籍详情页网址 (规则结果为String类型的url, 与详情页相同时可省略)"},{title:"修改书籍",namespace:"ruleBookInfo",id:"canReName",type:"String",hint:"允许修改书名作者(规则结果为String类型, 默认不允许)"},{title:"下载URL",namespace:"ruleBookInfo",id:"downloadUrls",type:"String",hint:"文件类书源下载地址 (规则结果为String类型的url, 多个链接返回数组)"}]},directory:{name:"目录",children:[{title:"更新前JS",namespace:"ruleToc",id:"preUpdateJs",type:"String",hint:"更新目录前调用JS 动态更新目录链接"},{title:"列表规则",namespace:"ruleToc",id:"chapterList",type:"String",hint:"选择目录列表的章节节点 (规则结果为List<Element>)"},{title:"章节名称",namespace:"ruleToc",id:"chapterName",type:"String",hint:"选择章节名称 (规则结果为String)"},{title:"章节地址",namespace:"ruleToc",id:"chapterUrl",type:"String",hint:"选择章节链接 (规则结果为String类型的Url)"},{title:"标题处理",namespace:"ruleToc",id:"formatJs",type:"String",hint:"遍历去重后的章节列表的回调，提供index(章节序号从1开始)、title(章节标题)变量，额外提供gInt(初始值0)，返回值作为新的标题"},{title:"卷名标识",namespace:"ruleToc",id:"isVolume",type:"String",hint:"章节名称是否是卷名 (规则结果为Bool)"},{title:"章节信息",namespace:"ruleToc",id:"updateTime",type:"String",hint:"选择章节信息（如更新时间） (规则结果为String)"},{title:"收费标识",namespace:"ruleToc",id:"isVip",type:"String",hint:"章节是否为VIP章节 (规则结果为Bool)"},{title:"购买标识",namespace:"ruleToc",id:"isPay",type:"String",hint:"章节是否为已购买 (规则结果为Bool)"},{title:"翻页规则",namespace:"ruleToc",id:"nextTocUrl",type:"String",hint:"选择目录下一页链接 (规则结果为List<String>或String)"}]},content:{name:"正文",children:[{title:"正文规则",namespace:"ruleContent",id:"content",type:"String",hint:"选择正文内容 (规则结果为String)"},{title:"标题规则",namespace:"ruleContent",id:"title",type:"String",hint:"获取结果将会覆盖章节标题 (规则结果为String)"},{title:"翻页规则",namespace:"ruleContent",id:"nextContentUrl",type:"String",hint:"选择下一分页(不是下一章)链接 (规则结果为String类型的Url)"},{title:"脚本注入",namespace:"ruleContent",id:"webJs",type:"String",hint:"注入javascript，用于模拟鼠标点击等，必须有返回值，一般为String类型"},{title:"资源正则",namespace:"ruleContent",id:"sourceRegex",type:"String",hint:"匹配资源的url特征，用于嗅探"},{title:"替换规则",namespace:"ruleContent",id:"replaceRegex",type:"String",hint:"多页内容合并后替换，用于正文净化"},{title:"图片样式",namespace:"ruleContent",id:"imageStyle",type:"String",hint:"FULL:铺满 不填:默认样式"},{title:"图片解密",namespace:"ruleContent",id:"imageDecode",type:"String",hint:"填写JavaScript 返回解密图片的bytes "},{title:"购买操作",namespace:"ruleContent",id:"payAction",type:"String",hint:"填写JavaScript 返回购买链接或者调用购买接口"}]},other:{name:"其他",children:[{title:"启用搜索",id:"enabled",type:"Boolean"},{title:"启用发现",id:"enabledExplore",type:"Boolean"},{title:"CookieJar",id:"enabledCookieJar",type:"Boolean"},{title:"搜索权重",id:"weight",type:"Number"},{title:"排序编号",id:"customOrder",type:"Number"}]}},Yt={base:{name:"基础",children:[{title:"源域名",id:"sourceUrl",type:"String",hint:"通常填写网站主页,例: https://www.qidian.com",required:!0},{title:"图标",id:"sourceIcon",type:"String",hint:"填写图片网络链接"},{title:"源名称",id:"sourceName",type:"String",hint:"会显示在源列表",required:!0},{title:"源分组",id:"sourceGroup",type:"String",hint:"描述源的特征信息"},{title:"源注释",id:"sourceComment",type:"String",hint:"描述源作者和状态"},{title:"分类地址",id:"sortUrl",type:"String",hint:`名称1::链接1
名称2::链接2`},{title:"登录地址",id:"loginUrl",type:"String",hint:"填写网站登录网址,仅在需要登录的源有用"},{title:"登录界面",id:"loginUi",type:"String",hint:"自定义登录界面"},{title:"登录检测",id:"loginCheckJs",type:"String",hint:"登录检测js"},{title:"封面解密",id:"coverDecodeJs",type:"String",hint:"封面解密js"},{title:"请求头",id:"header",type:"String",hint:"客户端标识"},{title:"变量说明",id:"variableComment",type:"String",hint:"源变量说明"},{title:"并发率",id:"concurrentRate",type:"String",hint:"并发率"}]},list:{name:"列表",children:[{title:"列表规则",id:"ruleArticles",type:"String",hint:"规则结果为List<Element>"},{title:"翻页规则",id:"ruleNextPage",type:"String",hint:"下一页链接 规则结果为List<String>或String"},{title:"标题规则",id:"ruleTitle",type:"String",hint:"文章标题 规则结果为String"},{title:"时间规则",id:"rulePubDate",type:"String",hint:"文章发布时间 规则结果为String"},{title:"描述规则",id:"ruleDescription",type:"String",hint:"文章简要描述 规则结果为String"},{title:"图片规则",id:"ruleImage",type:"String",hint:"文章图片链接 规则结果为String"},{title:"链接规则",id:"ruleLink",type:"String",hint:"文章链接 规则结果为String"}]},webView:{name:"WebView",children:[{title:"内容规则",id:"ruleContent",type:"String",hint:"文章正文"},{title:"样式规则",id:"style",type:"String",hint:"文章正文样式 填写css"},{title:"注入规则",id:"injectJs",type:"String",hint:"注入网页的JavaScript"},{title:"黑名单",id:"contentBlacklist",type:"String",hint:"webView链接加载黑名单，英文逗号隔开"},{title:"白名单",id:"contentWhitelist",type:"String",hint:"webView链接加载白名单，英文逗号隔开"},{title:"链接拦截",id:"shouldOverrideUrlLoading",type:"String",hint:"填写js，变量url为当前资源链接，返回true拦截"}]},other:{name:"其他",children:[{title:"列表样式",id:"articleStyle",type:"Array",array:["默认","大图","双列"]},{title:"加载地址",id:"loadWithBaseUrl",type:"Boolean"},{title:"启用JS",id:"enableJs",type:"Boolean"},{title:"启用",id:"enabled",type:"Boolean"},{title:"Cookie",id:"enabledCookieJar",type:"Boolean"},{title:"单URL",id:"singleUrl",type:"Boolean"},{title:"排序编号",id:"customOrder",type:"Number"}]}},Zt={class:"editor"},eo={__name:"SourceEditor",setup(e){let o;return/bookSource/i.test(location.href)?(o=Xt,document.title="书源管理"):(o=Yt,document.title="订阅源管理"),(t,l)=>{const n=Qt,s=zt,p=Dt;return c(),I("div",Zt,[m(n,{class:"left",config:r(o)},null,8,["config"]),m(s),m(p,{class:"right"})])}}},pe=J(eo,[["__scopeId","data-v-5fe2b79d"]]),we=[{path:"/bookSource",name:"book-home",component:pe},{path:"/rssSource",name:"rss-home",component:pe}];re({history:le(),routes:we});const Ue=re({history:le(),routes:be.concat(we)});Ue.afterEach(e=>{e.name=="shelf"&&(document.title="书架")});Ge(et).use(Rt).use(Ue).mount("#app");oe(()=>import("./config-BsTATf_v.js"),__vite__mapDeps([9,4,1,2,10]),import.meta.url);export{q as A,J as _,ie as b,oo as s};
