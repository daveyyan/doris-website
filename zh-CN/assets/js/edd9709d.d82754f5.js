"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["499739"],{715452:function(n,e,t){t.r(e),t.d(e,{metadata:()=>s,contentTitle:()=>i,default:()=>d,assets:()=>u,toc:()=>a,frontMatter:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-functions/struct-functions/named-struct","title":"NAMED_STRUCT","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/struct-functions/named-struct.md","sourceDirName":"sql-manual/sql-functions/struct-functions","slug":"/sql-manual/sql-functions/struct-functions/named-struct","permalink":"/zh-CN/docs/sql-manual/sql-functions/struct-functions/named-struct","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"NAMED_STRUCT","language":"zh-CN"},"sidebar":"docs","previous":{"title":"STRUCT","permalink":"/zh-CN/docs/sql-manual/sql-functions/struct-functions/struct"},"next":{"title":"STRUCT_ELEMENT","permalink":"/zh-CN/docs/sql-manual/sql-functions/struct-functions/struct-element"}}'),c=t("785893"),r=t("250065");let l={title:"NAMED_STRUCT",language:"zh-CN"},i=void 0,u={},a=[{value:"named_struct",id:"named_struct",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function o(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h2,{id:"named_struct",children:"named_struct"}),"\n",(0,c.jsx)(e.p,{children:"named_struct"}),"\n",(0,c.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,c.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.code,{children:"STRUCT<T1, T2, T3, ...> named_struct({VARCHAR, T1}, {VARCHAR, T2}, ...)"})}),"\n",(0,c.jsx)(e.p,{children:"\u6839\u636E\u7ED9\u5B9A\u7684\u5B57\u7B26\u4E32\u548C\u503C\u6784\u9020\u5E76\u8FD4\u56DEstruct"}),"\n",(0,c.jsx)(e.p,{children:"\u53C2\u6570\u4E2A\u6570\u5FC5\u987B\u4E3A\u975E0\u5076\u6570\uFF0C\u5947\u6570\u4F4D\u662Ffield\u7684\u540D\u5B57\uFF0C\u5FC5\u987B\u4E3A\u5E38\u91CF\u5B57\u7B26\u4E32\uFF0C\u5076\u6570\u4F4D\u662Ffield\u7684\u503C\uFF0C\u53EF\u4EE5\u662F\u591A\u5217\u6216\u5E38\u91CF"}),"\n",(0,c.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"mysql> select named_struct('f1', 1, 'f2', 'a', 'f3', \"abc\");\n+-----------------------------------------------+\n| named_struct('f1', 1, 'f2', 'a', 'f3', 'abc') |\n+-----------------------------------------------+\n| {1, 'a', 'abc'}                               |\n+-----------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> select named_struct('a', null, 'b', \"v\");\n+-----------------------------------+\n| named_struct('a', NULL, 'b', 'v') |\n+-----------------------------------+\n| {NULL, 'v'}                       |\n+-----------------------------------+\n1 row in set (0.01 sec)\n\nmysql> select named_struct('f1', k1, 'f2', k2, 'f3', null) from test_tb;\n+--------------------------------------------------+\n| named_struct('f1', `k1`, 'f2', `k2`, 'f3', NULL) |\n+--------------------------------------------------+\n| {1, 'a', NULL}                                   |\n+--------------------------------------------------+\n1 row in set (0.02 sec)\n"})}),"\n",(0,c.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,c.jsx)(e.p,{children:"NAMED, STRUCT, NAMED_STRUCT"})]})}function d(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(o,{...n})}):o(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return i},a:function(){return l}});var s=t(667294);let c={},r=s.createContext(c);function l(n){let e=s.useContext(r);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:l(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);