import{o as r,c,a as t,F as p,r as h,u as e,t as o,b as m,d as _,e as w}from"./vendor.20ee7b34.js";const k=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))d(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const g of i.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&d(g)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function d(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};k();var C="/inovola-task/assets/chat.b2acd0ec.svg",H="/inovola-task/assets/arrow.b3243d50.svg",F="/inovola-task/assets/header-ar.36314d1d.png";const S={main:"\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629",categories:"\u0627\u0644\u062A\u0635\u0646\u064A\u0641\u0627\u062A",applications:"\u0627\u0644\u062A\u0637\u0628\u064A\u0642\u0627\u062A",deveopment:"\u0637\u0648\u0631 \u062A\u0637\u0628\u064A\u0642"},j="\u0637\u0648\u0631 \u0645\u062A\u062C\u0631\u0643 \u0648 \u0648\u0633\u0639 \u0622\u0641\u0627\u0642 \u062A\u062C\u0627\u0631\u062A\u0643 \u0645\u0639 \u0633\u0648\u0642 \u062A\u0637\u0628\u064A\u0642\u0627\u062A \u0632\u062F",L="\u0637\u0648\u0631 \u062A\u062C\u0627\u0631\u062A\u0643 \u0645\u0646 \u062E\u0644\u0627\u0644 \u062A\u0637\u0628\u064A\u0642\u0627\u062A \u0648\u062D\u0644\u0648\u0644 \u0633\u0648\u0642 \u062A\u0637\u0628\u064A\u0642\u0627\u062A \u0632\u062F \u0627\u0644\u062A\u064A \u062A\u0633\u0627\u0639\u062F\u0643 \u0641\u064A \u0646\u0645\u0648 \u0623\u0631\u0628\u0627\u062D\u0643 \u0639\u0628\u0631 \u0625\u062F\u0627\u0631\u0629 \u0639\u0645\u0644\u064A\u0627\u062A \u0645\u062A\u062C\u0631\u0643 \u0628\u0634\u0643\u0644 \u0641\u0639\u0627\u0644 \u0648\u0627\u062D\u062A\u0631\u0627\u0641\u064A",v="\u062A\u0635\u0641\u062D \u0627\u0644\u062A\u0637\u0628\u064A\u0642\u0627\u062A",N="\u0643\u0644 \u0645\u0627 \u062A\u062D\u062A\u0627\u062C\u0647 \u0644\u0646\u0645\u0648 \u0645\u062A\u062C\u0631\u0643 \u0641\u064A \u0645\u0643\u0627\u0646 \u0648\u0627\u062D\u062F",O="\u0645\u0645\u064A\u0632\u0627\u062A \u0633\u0648\u0642 \u062A\u0637\u0628\u064A\u0642\u0627 \u0632\u062F \u062A\u0633\u0627\u0639\u062F\u0643 \u0641\u064A \u0633\u0647\u0648\u0644\u0647 \u0648\u0633\u0631\u0639\u0647 \u0627\u0644\u0627\u0633\u062A\u0641\u0627\u062F\u0629 \u0645\u0646 \u062E\u062F\u0645\u0627\u062A \u0648\u062D\u0644\u0648\u0644 \u0633\u0648\u0641 \u0627\u0644\u062A\u0637\u0628\u064A\u0642\u0627\u062A \u0644\u0646\u0645\u0648 \u0645\u062A\u062C\u0631\u0643 \u0648\u0645\u0636\u0627\u0639\u0641\u0647 \u0623\u0631\u0628\u0627\u062D\u0643",u=[{icon:"check",title:"\u0633\u0647\u0648\u0644\u0647 \u0627\u062F\u0627\u0631\u0647 \u0648\u062A\u0641\u0639\u064A\u0644 \u062A\u0637\u0628\u064A\u0642\u0627\u062A\u0643 \u0645\u0646 \u0646\u0641\u0633 \u0644\u0648\u062D\u0647 \u062A\u062D\u0643\u0645 \u0645\u062A\u062C\u0631\u0643"},{icon:"help",title:"\u062F\u0639\u0645 \u0641\u0646\u064A \u0648\u062A\u0642\u0646\u064A \u0645\u062A\u0643\u0627\u0645\u0644 \u0639\u0644\u0649 \u0645\u062F\u0627\u0631 \u0627\u0644\u0633\u0627\u0639\u0629"},{icon:"sale",title:"\u0627\u0633\u0639\u0627\u0631 \u062A\u0646\u0627\u0641\u0633\u064A\u0647 \u0645\u0639 \u062A\u062C\u0631\u0628\u0647 \u0645\u062C\u0627\u0646\u064A\u0629 \u0648\u0628\u0627\u0642\u0627\u062A \u0627\u0634\u062A\u0631\u0627\u0643 \u0645\u062A\u0646\u0648\u0639\u0629"}],z="\u0627\u0644\u062A\u0637\u0628\u064A\u0642\u0627\u062A \u0627\u0644\u0645\u0645\u064A\u0632\u0647",A="\u062A\u0637\u0628\u064A\u0642\u0627\u062A \u062A\u0642\u062F\u0645 \u062D\u0644\u0648\u0644 \u0648\u062E\u062F\u0645\u0627\u062A \u0645\u0645\u064A\u0632\u0629 \u0646\u0648\u0635\u064A \u0628\u062A\u062C\u0631\u0628\u062A\u0647\u0627",f={name:"\u0642\u0645\u0631\u0629",creator:"\u0639\u0645\u0631 \u0628\u0631\u0647\u0648\u0645",nos:"5",description:"\u0646\u0638\u0627\u0645 \u0627\u0644\u0648\u0644\u0627\u0621 \u0627\u0644\u0627\u0645\u062B\u0644 \u0627\u0644\u0630\u064A \u064A\u0645\u0643\u0646\u0643 \u0645\u0646 \u0631\u0641\u0639 \u0645\u0628\u064A\u0639\u0627\u062A\u0643"},B={class:"flex items-center flex-row-reverse gap-10 my-4 max-w-5xl mx-auto md:px-10"},E=t("img",{src:F,alt:"Main logo image",class:"w-40"},null,-1),V={class:"flex items-center gap-10 flex-row-reverse text-lg font-medium"},D={href:"#"},M={setup(a){return(l,n)=>(r(),c("header",B,[E,t("ul",V,[(r(!0),c(p,null,h(e(S),d=>(r(),c("li",null,[t("a",D,o(d),1)]))),256))])]))}};var $="/inovola-task/assets/hero.407ac296.gif",x=(a,l)=>{const n=a.__vccOpts||a;for(const[d,s]of l)n[d]=s;return n};const P={},q={height:"300",width:"300",class:"absolute -bottom-20 right-10"},G=t("circle",{cx:"150",cy:"150",r:"150",fill:"#FED14A"},null,-1),I=[G];function K(a,l){return r(),c("svg",q,I)}var b=x(P,[["render",K]]);const T={},J={class:"absolute left-14 -top-9 flex gap-2"},Q={class:"flex flex-col gap-2"},R={height:"6",width:"6"},U=t("circle",{cx:"3",cy:"3",r:"3",fill:"#42A584"},null,-1),W=[U];function X(a,l){return r(),c("div",J,[(r(),c(p,null,h(12,n=>t("div",Q,[(r(),c(p,null,h(12,d=>t("svg",R,W)),64))])),64))])}var y=x(T,[["render",X]]);const Y={class:"flex flex-col gap-10 items-center justify-center my-20"},Z={class:"text-4xl font-bold text-center text-pri"},tt={class:"w-2/5 text-center text-lg font-semibold"},et={href:"#",class:"text-xl bg-pri text-sec font-bold rounded-lg px-20 py-4"},st=t("span",{class:"mr-3"},"<",-1),ot={class:"relative my-16 z-0 flex justify-center"},lt=t("img",{src:$,class:"relative rounded-3xl z-10 w-3/4",alt:"Cool gif card"},null,-1),rt={setup(a){return(l,n)=>(r(),c("section",Y,[t("h1",Z,o(e(j)),1),t("h2",tt,o(e(L)),1),t("a",et,[st,m(" "+o(e(v)),1)]),t("div",ot,[lt,_(b),_(y)])]))}};var ct="/inovola-task/assets/check.a82fd428.svg",at="/inovola-task/assets/help.ea92e0eb.svg",it="/inovola-task/assets/sale.54d9de44.svg";const nt={class:"flex flex-row-reverse justify-between bg-feat pt-20 pb-6"},_t={class:"flex-1 text-right my-10 p-10"},dt={class:"text-pri text-3xl font-bold"},ut={class:"font-medium"},pt={class:"flex flex-col gap-5 items-end my-5 font-medium"},ft={class:"flex gap-3 items-center"},ht=["alt"],mt={class:"flex gap-3 items-center"},gt=["alt"],xt={class:"flex gap-3 items-center"},vt=["alt"],$t={class:"relative my-10 z-0 flex justify-center -m-24"},bt=t("img",{src:$,class:"relative rounded-3xl z-10 w-3/4",alt:"Cool gif card"},null,-1),yt={setup(a){return(l,n)=>(r(),c("section",nt,[t("div",_t,[t("h2",dt,o(e(N)),1),t("h3",ut,o(e(O)),1),t("ul",pt,[t("li",ft,[t("p",null,o(e(u)[0].title),1),t("img",{src:ct,alt:e(u)[2].title,class:"bg-white p-4 rounded-full filter drop-shadow-2xl"},null,8,ht)]),t("li",mt,[t("p",null,o(e(u)[1].title),1),t("img",{src:at,alt:e(u)[2].title,class:"bg-white p-4 rounded-full filter drop-shadow-2xl"},null,8,gt)]),t("li",xt,[t("p",null,o(e(u)[2].title),1),t("img",{src:it,alt:e(u)[2].title,class:"bg-white p-4 rounded-full filter drop-shadow-2xl"},null,8,vt)])])]),t("div",$t,[bt,_(b),_(y)])]))}};var wt="/inovola-task/assets/store.6d1c4cec.svg",kt="/inovola-task/assets/star.c743b116.svg";const Ct={class:"py-20"},Ht={class:"text-3xl font-bold text-center text-pri"},Ft={class:"text-center"},St={class:"flex gap-2 items-center justify-center my-10"},jt={class:"flex flex-row-reverse bg-spec p-3 rounded-lg"},Lt=t("img",{src:wt,alt:"Cool descriptive alt attr",class:"self-start p-3 bg-tert rounded-lg"},null,-1),Nt={class:"pr-2"},Ot={class:"flex gap-3 flex-row-reverse"},zt={class:"text-pri font-bold"},At=t("img",{src:kt,alt:"Cool descriptive alt attr",class:"inline w-4"},null,-1),Bt={class:"text-sm text-right"},Et=m("\u062A\u0637\u0648\u064A\u0631: "),Vt={class:"flex flex-col text-xs text-right"},Dt={href:"#",class:"text-xl text-center block text-sec font-bold rounded-lg px-20 py-4"},Mt=t("span",{class:"mr-3"},"<",-1),Pt={setup(a){return(l,n)=>(r(),c("section",Ct,[t("h2",Ht,o(e(z)),1),t("h3",Ft,o(e(A)),1),t("ul",St,[(r(),c(p,null,h(4,d=>t("li",jt,[Lt,t("div",Nt,[t("div",null,[t("div",Ot,[t("h4",zt,o(e(f).name),1),t("p",null,[m(o(e(f).nos)+" ",1),At])]),t("p",Bt,[Et,t("span",null,o(e(f).creator),1)])]),t("div",Vt,[t("p",null,o(e(f).description),1),t("p",null,o(e(f).description),1)])])])),64))]),t("a",Dt,[Mt,m(" "+o(e(v)),1)])]))}};var qt="/inovola-task/assets/memo.1ac3521d.png",Gt="/inovola-task/assets/youtube.b12d790d.svg",It="/inovola-task/assets/linkedin.0bb24c58.svg",Kt="/inovola-task/assets/instagram.77c94f27.svg",Tt="/inovola-task/assets/twitter.e258ceaa.svg";const Jt={},Qt={class:"bg-pri flex flex-col items-center gap-6 pt-10 pb-16"},Rt=t("img",{src:qt,alt:"Cool descriptive alt attr",class:"w-60"},null,-1),Ut=t("ul",{class:"flex justify-center gap-8"},[t("li",null,[t("a",{href:"#"},[t("img",{src:Gt,alt:"Cool descriptive alt attr",class:"w-5"})])]),t("li",null,[t("a",{href:"#"},[t("img",{src:It,alt:"Cool descriptive alt attr",class:"w-5"})])]),t("li",null,[t("a",{href:"#"},[t("img",{src:Kt,alt:"Cool descriptive alt attr",class:"w-5"})])]),t("li",null,[t("a",{href:"#"},[t("img",{src:Tt,alt:"Cool descriptive alt attr",class:"w-5"})])])],-1),Wt=[Rt,Ut];function Xt(a,l){return r(),c("footer",Qt,Wt)}var Yt=x(Jt,[["render",Xt]]);const Zt=t("button",{class:"fixed bottom-4 right-4 p-4 rounded-full bg-tert"},[t("img",{src:C,alt:"",class:"w-8"})],-1),te=t("button",{class:"fixed bottom-4 left-4 p-3 rounded-full bg-tert"},[t("img",{src:H,alt:"",class:"w-6"})],-1),ee={setup(a){return(l,n)=>(r(),c(p,null,[_(M),_(rt),_(yt),_(Pt),_(Yt),Zt,te],64))}};w(ee).mount("#app");
