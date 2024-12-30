"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["128082"],{291020:function(e,n,i){i.r(n),i.d(n,{metadata:()=>r,contentTitle:()=>c,default:()=>h,assets:()=>a,toc:()=>d,frontMatter:()=>l});var r=JSON.parse('{"id":"query-acceleration/tuning/tuning-plan/transparent-rewriting-with-sync-mv","title":"\u4F7F\u7528\u540C\u6B65\u7269\u5316\u89C6\u56FE\u900F\u660E\u6539\u5199","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/query-acceleration/tuning/tuning-plan/transparent-rewriting-with-sync-mv.md","sourceDirName":"query-acceleration/tuning/tuning-plan","slug":"/query-acceleration/tuning/tuning-plan/transparent-rewriting-with-sync-mv","permalink":"/zh-CN/docs/query-acceleration/tuning/tuning-plan/transparent-rewriting-with-sync-mv","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"\u4F7F\u7528\u540C\u6B65\u7269\u5316\u89C6\u56FE\u900F\u660E\u6539\u5199","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u4F7F\u7528\u5206\u533A\u88C1\u526A\u4F18\u5316\u626B\u8868","permalink":"/zh-CN/docs/query-acceleration/tuning/tuning-plan/optimizing-table-scanning"},"next":{"title":"\u4F7F\u7528\u5F02\u6B65\u7269\u5316\u89C6\u56FE\u900F\u660E\u6539\u5199","permalink":"/zh-CN/docs/query-acceleration/tuning/tuning-plan/transparent-rewriting-with-async-mv"}}'),s=i("785893"),t=i("250065");let l={title:"\u4F7F\u7528\u540C\u6B65\u7269\u5316\u89C6\u56FE\u900F\u660E\u6539\u5199",language:"zh-CN"},c=void 0,a={},d=[{value:"\u6982\u8FF0",id:"\u6982\u8FF0",level:2},{value:"\u6848\u4F8B",id:"\u6848\u4F8B",level:2},{value:"\u521B\u5EFA\u540C\u6B65\u7269\u5316\u89C6\u56FE",id:"\u521B\u5EFA\u540C\u6B65\u7269\u5316\u89C6\u56FE",level:3},{value:"\u900F\u660E\u6539\u5199",id:"\u900F\u660E\u6539\u5199",level:3},{value:"\u603B\u7ED3",id:"\u603B\u7ED3",level:2}];function o(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u6982\u8FF0",children:"\u6982\u8FF0"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/zh-CN/docs/query-acceleration/materialized-view/sync-materialized-view",children:"\u540C\u6B65\u7269\u5316\u89C6\u56FE"})," \uFF08Sync-Materialized View\uFF09 \u662F\u4E00\u79CD\u7279\u6B8A\u7684\u8868\uFF0C\u5B83\u9884\u5148\u6839\u636E\u5B9A\u4E49\u597D\u7684 SELECT \u8BED\u53E5\u8BA1\u7B97\u5E76\u5B58\u50A8\u6570\u636E\u3002\u5176\u4E3B\u8981\u76EE\u7684\u662F\u6EE1\u8DB3\u7528\u6237\u5BF9\u539F\u59CB\u660E\u7EC6\u6570\u636E\u7684\u4EFB\u610F\u7EF4\u5EA6\u5206\u6790\u9700\u6C42\uFF0C\u540C\u65F6\u4E5F\u80FD\u5FEB\u901F\u5730\u8FDB\u884C\u56FA\u5B9A\u7EF4\u5EA6\u7684\u5206\u6790\u67E5\u8BE2\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u540C\u6B65\u7269\u5316\u89C6\u56FE\u7684\u9002\u7528\u573A\u666F\u4E3A\uFF1A"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u5206\u6790\u9700\u6C42\u540C\u65F6\u6DB5\u76D6\u660E\u7EC6\u6570\u636E\u67E5\u8BE2\u548C\u56FA\u5B9A\u7EF4\u5EA6\u67E5\u8BE2\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u67E5\u8BE2\u4EC5\u6D89\u53CA\u8868\u4E2D\u7684\u5C11\u90E8\u5206\u5217\u6216\u884C\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u67E5\u8BE2\u5305\u542B\u8017\u65F6\u7684\u5904\u7406\u64CD\u4F5C\uFF0C\u4F8B\u5982\u957F\u65F6\u95F4\u7684\u805A\u5408\u64CD\u4F5C\u7B49\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u67E5\u8BE2\u9700\u8981\u5339\u914D\u4E0D\u540C\u7684\u524D\u7F00\u7D22\u5F15\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u5BF9\u4E8E\u9891\u7E41\u91CD\u590D\u4F7F\u7528\u76F8\u540C\u5B50\u67E5\u8BE2\u7ED3\u679C\u7684\u67E5\u8BE2\uFF0C\u540C\u6B65\u7269\u5316\u89C6\u56FE\u80FD\u663E\u8457\u63D0\u5347\u6027\u80FD\u3002Doris \u4F1A\u81EA\u52A8\u7EF4\u62A4\u7269\u5316\u89C6\u56FE\u7684\u6570\u636E\uFF0C\u786E\u4FDD\u57FA\u7840\u8868 \uFF08Base Table\uFF09 \u548C\u7269\u5316\u89C6\u56FE\u8868\u7684\u6570\u636E\u4E00\u81F4\u6027\uFF0C\u65E0\u9700\u989D\u5916\u7684\u4EBA\u5DE5\u7EF4\u62A4\u6210\u672C\u3002\u5728\u67E5\u8BE2\u65F6\uFF0C\u7CFB\u7EDF\u4F1A\u81EA\u52A8\u5339\u914D\u5230\u6700\u4F18\u7684\u7269\u5316\u89C6\u56FE\uFF0C\u5E76\u76F4\u63A5\u4ECE\u7269\u5316\u89C6\u56FE\u4E2D\u8BFB\u53D6\u6570\u636E\u3002"}),"\n",(0,s.jsx)(n.admonition,{title:"\u6CE8\u610F\u4E8B\u9879",type:"tip",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5728 Doris 2.0 \u53CA\u540E\u7EED\u7248\u672C\u4E2D\uFF0C\u7269\u5316\u89C6\u56FE\u5177\u5907\u4E86\u4E00\u4E9B\u589E\u5F3A\u529F\u80FD\u3002\u5EFA\u8BAE\u7528\u6237\u5728\u6B63\u5F0F\u7684\u751F\u4EA7\u73AF\u5883\u4E2D\u4F7F\u7528\u7269\u5316\u89C6\u56FE\u4E4B\u524D\uFF0C\u5148\u5728\u6D4B\u8BD5\u73AF\u5883\u4E2D\u786E\u8BA4\u9884\u671F\u4E2D\u7684\u67E5\u8BE2\u80FD\u5426\u547D\u4E2D\u60F3\u8981\u521B\u5EFA\u7684\u7269\u5316\u89C6\u56FE\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u4E0D\u5EFA\u8BAE\u5728\u540C\u4E00\u5F20\u8868\u4E0A\u521B\u5EFA\u591A\u4E2A\u5F62\u6001\u7C7B\u4F3C\u7684\u7269\u5316\u89C6\u56FE\uFF0C\u56E0\u4E3A\u8FD9\u53EF\u80FD\u4F1A\u5BFC\u81F4\u591A\u4E2A\u7269\u5316\u89C6\u56FE\u4E4B\u95F4\u7684\u51B2\u7A81\uFF0C\u4ECE\u800C\u4F7F\u67E5\u8BE2\u547D\u4E2D\u5931\u8D25\u3002"}),"\n"]})}),"\n",(0,s.jsx)(n.h2,{id:"\u6848\u4F8B",children:"\u6848\u4F8B"}),"\n",(0,s.jsx)(n.p,{children:"\u4E0B\u9762\u901A\u8FC7\u4E00\u4E2A\u5177\u4F53\u4F8B\u5B50\u6765\u5C55\u793A\u4F7F\u7528\u540C\u6B65\u7269\u5316\u89C6\u56FE\u8FDB\u884C\u67E5\u8BE2\u52A0\u901F\u7684\u6D41\u7A0B\uFF1A"}),"\n",(0,s.jsxs)(n.p,{children:["\u5047\u8BBE\u6211\u4EEC\u62E5\u6709\u4E00\u5F20\u9500\u552E\u8BB0\u5F55\u660E\u7EC6\u8868 ",(0,s.jsx)(n.code,{children:"sales_records"}),"\uFF0C\u8BE5\u8868\u8BE6\u7EC6\u8BB0\u5F55\u4E86\u6BCF\u7B14\u4EA4\u6613\u7684\u5404\u9879\u4FE1\u606F\uFF0C\u5305\u62EC\u4EA4\u6613 ID\u3001\u9500\u552E\u5458 ID\u3001\u552E\u5356\u95E8\u5E97 ID\u3001\u9500\u552E\u65E5\u671F\u4EE5\u53CA\u4EA4\u6613\u91D1\u989D\u3002\u73B0\u5728\uFF0C\u6211\u4EEC\u7ECF\u5E38\u9700\u8981\u9488\u5BF9\u4E0D\u540C\u95E8\u5E97\u7684\u9500\u552E\u91CF\u8FDB\u884C\u5206\u6790\u67E5\u8BE2\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4E3A\u4E86\u4F18\u5316\u8FD9\u4E9B\u67E5\u8BE2\u7684\u6027\u80FD\uFF0C\u6211\u4EEC\u53EF\u4EE5\u521B\u5EFA\u4E00\u4E2A\u7269\u5316\u89C6\u56FE ",(0,s.jsx)(n.code,{children:"store_amt"}),"\uFF0C\u8BE5\u89C6\u56FE\u6309\u552E\u5356\u95E8\u5E97\u8FDB\u884C\u5206\u7EC4\uFF0C\u5E76\u5BF9\u540C\u4E00\u95E8\u5E97\u7684\u9500\u552E\u989D\u8FDB\u884C\u6C42\u548C\u3002\u5177\u4F53\u6B65\u9AA4\u5982\u4E0B\uFF1A"]}),"\n",(0,s.jsx)(n.h3,{id:"\u521B\u5EFA\u540C\u6B65\u7269\u5316\u89C6\u56FE",children:"\u521B\u5EFA\u540C\u6B65\u7269\u5316\u89C6\u56FE"}),"\n",(0,s.jsxs)(n.p,{children:["\u9996\u5148\uFF0C\u6211\u4EEC\u4F7F\u7528\u4EE5\u4E0B SQL \u8BED\u53E5\u6765\u521B\u5EFA\u7269\u5316\u89C6\u56FE ",(0,s.jsx)(n.code,{children:"store_amt"}),"\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE MATERIALIZED VIEW store_amt AS \nSELECT store_id, SUM(sale_amt) \nFROM sales_records\nGROUP BY store_id;\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u63D0\u4EA4\u521B\u5EFA\u4EFB\u52A1\u540E\uFF0CDoris \u4F1A\u5728\u540E\u53F0\u5F02\u6B65\u6784\u5EFA\u8FD9\u4E2A\u7269\u5316\u89C6\u56FE\u3002\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u6765\u67E5\u770B\u7269\u5316\u89C6\u56FE\u7684\u521B\u5EFA\u8FDB\u5EA6\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SHOW ALTER TABLE MATERIALIZED VIEW FROM db_name;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5F53 ",(0,s.jsx)(n.code,{children:"State"})," \u5B57\u6BB5\u53D8\u4E3A ",(0,s.jsx)(n.code,{children:"FINISHED"})," \u65F6\uFF0C\u5C31\u8868\u793A ",(0,s.jsx)(n.code,{children:"store_amt"})," \u7269\u5316\u89C6\u56FE\u5DF2\u7ECF\u6210\u529F\u521B\u5EFA\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u900F\u660E\u6539\u5199",children:"\u900F\u660E\u6539\u5199"}),"\n",(0,s.jsxs)(n.p,{children:["\u7269\u5316\u89C6\u56FE\u521B\u5EFA\u5B8C\u6210\u540E\uFF0C\u5F53\u6211\u4EEC\u67E5\u8BE2\u4E0D\u540C\u95E8\u5E97\u7684\u9500\u552E\u91CF\u65F6\uFF0CDoris \u4F1A\u81EA\u52A8\u5339\u914D\u5230 ",(0,s.jsx)(n.code,{children:"store_amt"})," \u7269\u5316\u89C6\u56FE\uFF0C\u5E76\u76F4\u63A5\u4ECE\u4E2D\u8BFB\u53D6\u9884\u5148\u805A\u5408\u597D\u7684\u6570\u636E\uFF0C\u4ECE\u800C\u663E\u8457\u63D0\u5347\u67E5\u8BE2\u6548\u7387\u3002\u67E5\u8BE2\u8BED\u53E5\u5982\u4E0B\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT store_id, SUM(sale_amt) FROM sales_records GROUP BY store_id;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u6211\u4EEC\u8FD8\u53EF\u4EE5\u901A\u8FC7 ",(0,s.jsx)(n.code,{children:"EXPLAIN"})," \u547D\u4EE4\u6765\u68C0\u67E5\u67E5\u8BE2\u662F\u5426\u6210\u529F\u547D\u4E2D\u4E86\u7269\u5316\u89C6\u56FE\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"EXPLAIN SELECT store_id, SUM(sale_amt) FROM sales_records GROUP BY store_id;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u6267\u884C\u8BA1\u5212\u7684\u6700\u672B\u5C3E\uFF0C\u5982\u679C\u663E\u793A\u7C7B\u4F3C\u4EE5\u4E0B\u5185\u5BB9\uFF0C\u5219\u8868\u793A\u67E5\u8BE2\u6210\u529F\u547D\u4E2D\u4E86 ",(0,s.jsx)(n.code,{children:"store_amt"})," \u7269\u5316\u89C6\u56FE\uFF1A"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"TABLE: default_cluster:test.sales_records(store_amt), PREAGGREGATION: ON\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u901A\u8FC7\u4EE5\u4E0A\u6B65\u9AA4\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5229\u7528\u540C\u6B65\u7269\u5316\u89C6\u56FE\u6765\u4F18\u5316\u67E5\u8BE2\u6027\u80FD\uFF0C\u63D0\u9AD8\u6570\u636E\u5206\u6790\u7684\u6548\u7387\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u603B\u7ED3",children:"\u603B\u7ED3"}),"\n",(0,s.jsx)(n.p,{children:"\u901A\u8FC7\u521B\u5EFA\u540C\u6B65\u7269\u5316\u89C6\u56FE\uFF0C\u6211\u4EEC\u80FD\u591F\u663E\u8457\u63D0\u5347\u76F8\u5173\u805A\u5408\u5206\u6790\u7684\u67E5\u8BE2\u901F\u5EA6\u3002\u540C\u6B65\u7269\u5316\u89C6\u56FE\u4E0D\u4EC5\u4F7F\u6211\u4EEC\u80FD\u591F\u5FEB\u901F\u8FDB\u884C\u7EDF\u8BA1\u5206\u6790\uFF0C\u800C\u4E14\u8FD8\u7075\u6D3B\u5730\u652F\u6301\u4E86\u660E\u7EC6\u6570\u636E\u7684\u67E5\u8BE2\u9700\u6C42\uFF0C\u662F Doris \u4E2D\u4E00\u9879\u975E\u5E38\u5F3A\u5927\u7684\u529F\u80FD\u3002"})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return c},a:function(){return l}});var r=i(667294);let s={},t=r.createContext(s);function l(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);