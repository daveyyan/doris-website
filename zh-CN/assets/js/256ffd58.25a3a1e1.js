"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["959853"],{542983:function(e,n,r){r.r(n),r.d(n,{metadata:()=>a,contentTitle:()=>l,default:()=>u,assets:()=>c,toc:()=>o,frontMatter:()=>s});var a=JSON.parse('{"id":"sql-manual/sql-functions/array-functions/array-difference","title":"ARRAY_DIFFERENCE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/array-functions/array-difference.md","sourceDirName":"sql-manual/sql-functions/array-functions","slug":"/sql-manual/sql-functions/array-functions/array-difference","permalink":"/zh-CN/docs/sql-manual/sql-functions/array-functions/array-difference","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"ARRAY_DIFFERENCE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ARRAY_DISTINCT","permalink":"/zh-CN/docs/sql-manual/sql-functions/array-functions/array-distinct"},"next":{"title":"ARRAY_UNION","permalink":"/zh-CN/docs/sql-manual/sql-functions/array-functions/array-union"}}'),t=r("785893"),i=r("250065");let s={title:"ARRAY_DIFFERENCE",language:"zh-CN"},l=void 0,c={},o=[{value:"array_difference",id:"array_difference",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"array_difference",children:"array_difference"}),"\n",(0,t.jsx)(n.p,{children:"array_difference"}),"\n",(0,t.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,t.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"ARRAY<T> array_difference(ARRAY<T> arr)"})}),"\n",(0,t.jsx)(n.p,{children:"\u8BA1\u7B97\u76F8\u90BB\u6570\u7EC4\u5143\u7D20\u4E4B\u95F4\u7684\u5DEE\u5F02\u3002\u8FD4\u56DE\u4E00\u4E2A\u6570\u7EC4\uFF0C\u5176\u4E2D\u7B2C\u4E00\u4E2A\u5143\u7D20\u5C06\u4E3A0\uFF0C\u7B2C\u4E8C\u4E2A\u5143\u7D20\u662Fa[1]-a[0]\u4E4B\u95F4\u7684\u5DEE\u503C\u3002\n\u6CE8\u610F\u82E5 NULL \u503C\u5B58\u5728\uFF0C\u8FD4\u56DE\u7ED3\u679C\u4E3ANULL"}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"mysql> select *,array_difference(k2) from array_type_table;\n+------+-----------------------------+---------------------------------+\n| k1   | k2                          | array_difference(`k2`)          |\n+------+-----------------------------+---------------------------------+\n|    0 | []                          | []                              |\n|    1 | [NULL]                      | [NULL]                          |\n|    2 | [1, 2, 3]                   | [0, 1, 1]                       |\n|    3 | [1, NULL, 3]                | [0, NULL, NULL]                 |\n|    4 | [0, 1, 2, 3, NULL, 4, 6]    | [0, 1, 1, 1, NULL, NULL, 2]     |\n|    5 | [1, 2, 3, 4, 5, 4, 3, 2, 1] | [0, 1, 1, 1, 1, -1, -1, -1, -1] |\n|    6 | [6, 7, 8]                   | [0, 1, 1]                       |\n+------+-----------------------------+---------------------------------+\n\n"})}),"\n",(0,t.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,t.jsx)(n.p,{children:"ARRAY, DIFFERENCE, ARRAY_DIFFERENCE"})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return s}});var a=r(667294);let t={},i=a.createContext(t);function s(e){let n=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);