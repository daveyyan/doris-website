"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["792245"],{80165:function(e,n,i){i.r(n),i.d(n,{metadata:()=>s,contentTitle:()=>o,default:()=>p,assets:()=>a,toc:()=>l,frontMatter:()=>c});var s=JSON.parse('{"id":"ecosystem/bi/powerbi","title":"Power BI","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/ecosystem/bi/powerbi.md","sourceDirName":"ecosystem/bi","slug":"/ecosystem/bi/powerbi","permalink":"/zh-CN/docs/dev/ecosystem/bi/powerbi","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Power BI","language":"zh-CN"},"sidebar":"docs","previous":{"title":"FineBI","permalink":"/zh-CN/docs/dev/ecosystem/bi/finebi"},"next":{"title":"Tableau","permalink":"/zh-CN/docs/dev/ecosystem/bi/tableau"}}'),t=i("785893"),r=i("250065");let c={title:"Power BI",language:"zh-CN"},o=void 0,a={},l=[{value:"Power BI \u4ECB\u7ECD",id:"power-bi-\u4ECB\u7ECD",level:2},{value:"\u524D\u7F6E\u6761\u4EF6",id:"\u524D\u7F6E\u6761\u4EF6",level:2},{value:"Power BI\u4E0EDoris\u7684Connector\u914D\u7F6E",id:"power-bi\u4E0Edoris\u7684connector\u914D\u7F6E",level:2},{value:"\u672C\u5730\u52A0\u8F7D\u6570\u636E\u4E0E\u521B\u5EFA\u6A21\u578B",id:"\u672C\u5730\u52A0\u8F7D\u6570\u636E\u4E0E\u521B\u5EFA\u6A21\u578B",level:2},{value:"\u8BBE\u7F6E\u6570\u636E\u81EA\u52A8\u5237\u65B0",id:"\u8BBE\u7F6E\u6570\u636E\u81EA\u52A8\u5237\u65B0",level:2}];function d(e){let n={a:"a",admonition:"admonition",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"power-bi-\u4ECB\u7ECD",children:"Power BI \u4ECB\u7ECD"}),"\n",(0,t.jsx)(n.p,{children:"Power BI \u662F\u8F6F\u4EF6\u670D\u52A1\u3001\u5E94\u7528\u8FDE\u63A5\u5668\u7684\u96C6\u5408\uFF0C\u5176\u53EF\u4EE5\u8FDE\u63A5\u5230\u591A\u79CD\u6570\u636E\u6E90\uFF0C\u5305\u62EC Excel\u3001SQL Server\u3001Azure\u3001Google Analytics \u7B49\uFF0C\u4EE5\u4FBF\u7528\u6237\u53EF\u4EE5\u8F7B\u677E\u5F97\u6574\u5408\u548C\u6E05\u6D17\u6570\u636E\u3002\u901A\u8FC7 Power BI \u7684\u6570\u636E\u5EFA\u6A21\uFF0C\u7528\u6237\u53EF\u4EE5\u521B\u5EFA\u5173\u7CFB\u6A21\u578B\u3001\u6570\u636E\u5206\u6790\u8868\u8FBE\u5F0F\u548C\u6570\u636E\u5173\u7CFB\uFF0C\u4EE5\u652F\u6301\u9AD8\u7EA7\u7684\u6570\u636E\u5206\u6790\u548C\u53EF\u89C6\u5316\u3002 Power BI \u63D0\u4F9B\u4E86\u4E30\u5BCC\u7684\u53EF\u89C6\u5316\u9009\u9879\uFF0C\u5305\u62EC\u56FE\u6807\u3001\u5730\u56FE\u3001\u4EEA\u8868\u76D8\u548C\u81EA\u5B9A\u4E49\u53EF\u89C6\u5316\u5DE5\u5177\uFF0C\u4EE5\u5E2E\u52A9\u7528\u6237\u66F4\u76F4\u89C2\u5730\u7406\u89E3\u6570\u636E\u3002"}),"\n",(0,t.jsx)(n.p,{children:"Apache Doris \u9AD8\u5EA6\u517C\u5BB9 MySQL \u534F\u8BAE\uFF0C\u53EF\u4EE5\u901A\u8FC7 MySQL \u9A71\u52A8\u5668\u8FDE\u63A5 Power BI \u4E0E Apache Doris\uFF0C\u5F53\u524D Power BI \u4E2D\u5DF2\u7ECF\u6B63\u5F0F\u652F\u6301\u4E86 Apache Doris \u7684\u5185\u90E8\u6570\u636E\u5EFA\u6A21\u4EE5\u53CA\u6570\u636E\u67E5\u8BE2\u4E0E\u53EF\u89C6\u5316\u5904\u7406\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u524D\u7F6E\u6761\u4EF6",children:"\u524D\u7F6E\u6761\u4EF6"}),"\n",(0,t.jsxs)(n.p,{children:["\u672A\u5B89\u88C5 Power BI Desktop \u53EF\u4EE5\u8BBF\u95EE ",(0,t.jsx)(n.a,{href:"https://www.microsoft.com/zh-cn/power-platform/products/power-bi/desktop",children:"https://www.microsoft.com/zh-cn/power-platform/products/power-bi/desktop"})," \u4E0B\u8F7D\u5B89\u88C5 Power BI\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"power-bi\u4E0Edoris\u7684connector\u914D\u7F6E",children:"Power BI\u4E0EDoris\u7684Connector\u914D\u7F6E"}),"\n",(0,t.jsx)(n.admonition,{title:"Note",type:"info",children:(0,t.jsx)(n.p,{children:"\u9009\u62E98.0.26\u7248\u672C\u7684 MySQL JDBC Connector"})}),"\n",(0,t.jsx)(n.p,{children:"MySQL Connector \u4E0B\u8F7D"}),"\n",(0,t.jsxs)(n.p,{children:["\u4E0B\u8F7D\u94FE\u63A5\uFF1A",(0,t.jsx)(n.a,{href:"https://downloads.mysql.com/archives/c-net/",children:"https://downloads.mysql.com/archives/c-net/"})]}),"\n",(0,t.jsx)(n.h2,{id:"\u672C\u5730\u52A0\u8F7D\u6570\u636E\u4E0E\u521B\u5EFA\u6A21\u578B",children:"\u672C\u5730\u52A0\u8F7D\u6570\u636E\u4E0E\u521B\u5EFA\u6A21\u578B"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u542F\u52A8 Power BI Desktop"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5728 Power BI Desktop \u6253\u5F00\u754C\u9762\u70B9\u51FB\u65B0\u5EFA\u62A5\u8868\u3002\u82E5\u5DF2\u6709\u672C\u5730\u62A5\u8868\u53EF\u4EE5\u9009\u62E9\u6253\u5F00\u5DF2\u6709\u62A5\u8868"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"start page",src:i(555395).Z+"",width:"1280",height:"763"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u70B9\u51FB\u83B7\u53D6\u6570\u636E\uFF0C\u5728\u5F39\u51FA\u7A97\u53E3\u4E2D\u9009\u62E9MySQL\u6570\u636E\u5E93"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"get data",src:i(878615).Z+"",width:"1280",height:"763"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u914D\u7F6E\u6570\u636E\u5E93\u8FDE\u63A5\u4FE1\u606F\uFF0C\u5728\u670D\u52A1\u5668\u8F93\u5165\u6846\u4E2D\u8F93\u5165ip:port\u3002Doris\u9ED8\u8BA4\u7684\u7AEF\u53E3\u53F7\u4E3A9030"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"connection information",src:i(394335).Z+"",width:"1052",height:"407"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'\u4E0A\u4E00\u6B65\u70B9\u51FB\u786E\u5B9A\u540E\u5728\u65B0\u7684\u8FDE\u63A5\u7A97\u53E3\u5904\u9009\u62E9"\u6570\u636E\u5E93"\u8FDE\u63A5\uFF0C\u5E76\u5728\u7528\u6237\u540D\u4E0E\u5BC6\u7801\u5904\u586B\u5199Doris\u7684\u8FDE\u63A5\u4FE1\u606F\u3002'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"uname and pwd",src:i(133209).Z+"",width:"1052",height:"570"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u52A0\u8F7D\u9009\u4E2D\u7684\u8868\uFF0C\u4F7F\u5176\u8868\u4E2D\u6570\u636E\u81F3 Power BI Desktop"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"load data",src:i(328159).Z+"",width:"1280",height:"1018"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u914D\u7F6E\u9700\u8981\u7684\u7EDF\u8BA1\u7F57\u76D8"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"create compass",src:i(615390).Z+"",width:"1280",height:"763"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u628A\u521B\u5EFA\u597D\u7684\u7EDF\u8BA1\u7F57\u76D8\u4FDD\u5B58\u81F3\u672C\u5730"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"savie file",src:i(186917).Z+"",width:"737",height:"700"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8BBE\u7F6E\u6570\u636E\u81EA\u52A8\u5237\u65B0",children:"\u8BBE\u7F6E\u6570\u636E\u81EA\u52A8\u5237\u65B0"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u4E0B\u8F7DOn-premises data gateway\u3002\u4E0B\u8F7D\u5730\u5740\uFF1A",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/power-bi/connect-data/service-gateway-personal-mode",children:"https://learn.microsoft.com/en-us/power-bi/connect-data/service-gateway-personal-mode"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5B89\u88C5On-premises data gateway"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"gateway install",src:i(18209).Z+"",width:"1276",height:"1014"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u767B\u9646 Power BI Online\uFF0C\u5728\u4E2A\u4EBA\u7684\u5DE5\u4F5C\u533A\u4E2D\u628A\u521A\u4FDD\u5B58\u7684\u672C\u5730\u6A21\u578B\u8FDB\u884C\u5BFC\u5165"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"upload",src:i(818387).Z+"",width:"1541",height:"725"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u70B9\u51FB\u6A21\u578B\u914D\u7F6E\u81EA\u52A8\u5237\u65B0\u65F6\u95F4"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"click module",src:i(71402).Z+"",width:"1122",height:"398"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u6570\u636E\u5237\u65B0\u7684\u914D\u7F6E\u9700\u8981\u6709gataway\u8FDE\u63A5\uFF0C\u672C\u5730\u5F00\u542F\u7F51\u5173\u540E\u53EF\u4EE5\u5728\u7F51\u5173\u8FDE\u63A5\u4E2D\u770B\u5230\u672C\u5730\u542F\u52A8\u7684\u7F51\u5173\uFF0C\u9009\u53D6\u672C\u5730\u7684\u7F51\u5173\u5373\u53EF\u3002\u66F4\u591A\u5173\u4E8Egateway\uFF1A",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/zh-cn/power-bi/connect-data/service-gateway-onprem",children:"https://learn.microsoft.com/zh-cn/power-bi/connect-data/service-gateway-onprem"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"config gateway",src:i(93193).Z+"",width:"1280",height:"786"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u914D\u7F6E\u76F8\u5173\u5237\u65B0\u8BA1\u5212\u5373\u53EF\u5B8C\u6210 Power BI\u81EA\u52A8\u6570\u636E\u5237\u65B0"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"make plan",src:i(39363).Z+"",width:"1158",height:"798"})}),"\n"]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},818387:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/bi-powerbi-en-10-zh-a1ef99b2fcfe2feb09e87526ac05ebf6.png"},71402:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/bi-powerbi-en-11-zh-16f4112114074d961fb82a344021e422.png"},93193:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/bi-powerbi-en-12-zh-6520c3a59587727964d7da338590d3a5.png"},39363:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/bi-powerbi-en-13-7a9ee1867ef8cc24d8e1035fc9104c90.png"},555395:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/bi-powerbi-en-2-86c8a6187c67094641645e6f712fcc3e.png"},878615:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/bi-powerbi-en-3-2705e2048068e169882943869d7fb11b.png"},394335:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/bi-powerbi-en-4-ef0c87418aa69b09874142731e4d9688.png"},133209:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/bi-powerbi-en-5-97bf4c9350d57af2038a67a38df112ca.png"},328159:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/bi-powerbi-en-6-6ccb436b829901ecca22fce07a779cc6.png"},615390:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/bi-powerbi-en-7-5a9a7db0cf93e720dcca9dbc858c9f8d.png"},186917:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/bi-powerbi-en-8-2aa802d0739d20c506a6e0cfcbe557dc.png"},18209:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/bi-powerbi-en-9-c6e95be459cdb3200e08eb92a78746d1.png"},250065:function(e,n,i){i.d(n,{Z:function(){return o},a:function(){return c}});var s=i(667294);let t={},r=s.createContext(t);function c(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);