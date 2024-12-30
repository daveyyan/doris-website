"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["284903"],{134091:function(n,e,r){r.r(e),r.d(e,{metadata:()=>a,contentTitle:()=>l,default:()=>d,assets:()=>o,toc:()=>i,frontMatter:()=>s});var a=JSON.parse('{"id":"sql-manual/sql-functions/array-functions/array_concat","title":"array_concat","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/array-functions/array_concat.md","sourceDirName":"sql-manual/sql-functions/array-functions","slug":"/sql-manual/sql-functions/array-functions/array_concat","permalink":"/zh-CN/docs/1.2/sql-manual/sql-functions/array-functions/array_concat","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"array_concat","language":"zh-CN"},"sidebar":"docs","previous":{"title":"array_compact","permalink":"/zh-CN/docs/1.2/sql-manual/sql-functions/array-functions/array_compact"},"next":{"title":"array_shuffle","permalink":"/zh-CN/docs/1.2/sql-manual/sql-functions/array-functions/array_shuffle"}}'),c=r("785893"),t=r("250065");let s={title:"array_concat",language:"zh-CN"},l=void 0,o={},i=[{value:"array_concat",id:"array_concat",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Returned value",id:"returned-value",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",version:"version",...(0,t.a)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h2,{id:"array_concat",children:"array_concat"}),"\n",(0,c.jsxs)(e.version,{since:"2.0.0",children:["\n",(0,c.jsx)(e.p,{children:"array_concat"}),"\n"]}),"\n",(0,c.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,c.jsx)(e.p,{children:"\u5C06\u8F93\u5165\u7684\u6240\u6709\u6570\u7EC4\u62FC\u63A5\u4E3A\u4E00\u4E2A\u6570\u7EC4"}),"\n",(0,c.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.code,{children:"Array<T> array_concat(Array<T>, ...)"})}),"\n",(0,c.jsx)(e.h4,{id:"returned-value",children:"Returned value"}),"\n",(0,c.jsx)(e.p,{children:"\u62FC\u63A5\u597D\u7684\u6570\u7EC4"}),"\n",(0,c.jsx)(e.p,{children:"\u7C7B\u578B: Array."}),"\n",(0,c.jsx)(e.h3,{id:"notice",children:"notice"}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.code,{children:"\u53EA\u652F\u6301\u5728\u5411\u91CF\u5316\u5F15\u64CE\u4E2D\u4F7F\u7528"})}),"\n",(0,c.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"mysql> select array_concat([1, 2], [7, 8], [5, 6]);\n+-----------------------------------------------------+\n| array_concat(ARRAY(1, 2), ARRAY(7, 8), ARRAY(5, 6)) |\n+-----------------------------------------------------+\n| [1, 2, 7, 8, 5, 6]                                  |\n+-----------------------------------------------------+\n1 row in set (0.02 sec)\n\nmysql> select col2, col3, array_concat(col2, col3) from array_test;\n+--------------+-----------+------------------------------+\n| col2         | col3      | array_concat(`col2`, `col3`) |\n+--------------+-----------+------------------------------+\n| [1, 2, 3]    | [3, 4, 5] | [1, 2, 3, 3, 4, 5]           |\n| [1, NULL, 2] | [NULL]    | [1, NULL, 2, NULL]           |\n| [1, 2, 3]    | NULL      | NULL                         |\n| []           | []        | []                           |\n+--------------+-----------+------------------------------+\n"})}),"\n",(0,c.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,c.jsx)(e.p,{children:"ARRAY,CONCAT,ARRAY_CONCAT"})]})}function d(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(u,{...n})}):u(n)}},250065:function(n,e,r){r.d(e,{Z:function(){return l},a:function(){return s}});var a=r(667294);let c={},t=a.createContext(c);function s(n){let e=a.useContext(t);return a.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:s(n.components),a.createElement(t.Provider,{value:e},n.children)}}}]);