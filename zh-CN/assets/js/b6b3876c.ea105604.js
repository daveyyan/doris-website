"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["670514"],{126179:function(n,e,r){r.r(e),r.d(e,{metadata:()=>a,contentTitle:()=>o,default:()=>d,assets:()=>l,toc:()=>c,frontMatter:()=>s});var a=JSON.parse('{"id":"sql-manual/sql-functions/array-functions/array-position","title":"ARRAY_POSITION","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/array-functions/array-position.md","sourceDirName":"sql-manual/sql-functions/array-functions","slug":"/sql-manual/sql-functions/array-functions/array-position","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/array-position","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"ARRAY_POSITION","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ARRAY_REVERSE_SPLIT","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/array-reverse-split"},"next":{"title":"ARRAY_CONTAINS","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/array-contains"}}'),i=r("785893"),t=r("250065");let s={title:"ARRAY_POSITION",language:"zh-CN"},o=void 0,l={},c=[{value:"array_position",id:"array_position",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"array_position",children:"array_position"}),"\n",(0,i.jsx)(e.p,{children:"array_position"}),"\n",(0,i.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,i.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.code,{children:"BIGINT array_position(ARRAY<T> arr, T value)"})}),"\n",(0,i.jsxs)(e.p,{children:["\u8FD4\u56DE",(0,i.jsx)(e.code,{children:"value"}),"\u5728\u6570\u7EC4\u4E2D\u7B2C\u4E00\u6B21\u51FA\u73B0\u7684\u4F4D\u7F6E/\u7D22\u5F15\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"position - value\u5728array\u4E2D\u7684\u4F4D\u7F6E\uFF08\u4ECE1\u5F00\u59CB\u8BA1\u7B97\uFF09\uFF1B\n0        - \u5982\u679Cvalue\u5728array\u4E2D\u4E0D\u5B58\u5728\uFF1B\nNULL     - \u5982\u679C\u6570\u7EC4\u4E3ANULL\u3002\n"})}),"\n",(0,i.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"mysql> SELECT id,c_array,array_position(c_array, 5) FROM `array_test`;\n+------+-----------------+------------------------------+\n| id   | c_array         | array_position(`c_array`, 5) |\n+------+-----------------+------------------------------+\n|    1 | [1, 2, 3, 4, 5] |                            5 |\n|    2 | [6, 7, 8]       |                            0 |\n|    3 | []              |                            0 |\n|    4 | NULL            |                         NULL |\n+------+-----------------+------------------------------+\n\nmysql> select array_position([1, null], null);\n+--------------------------------------+\n| array_position(ARRAY(1, NULL), NULL) |\n+--------------------------------------+\n|                                    2 |\n+--------------------------------------+\n1 row in set (0.01 sec)\n"})}),"\n",(0,i.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(e.p,{children:"ARRAY,POSITION,ARRAY_POSITION"})]})}function d(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},250065:function(n,e,r){r.d(e,{Z:function(){return o},a:function(){return s}});var a=r(667294);let i={},t=a.createContext(i);function s(n){let e=a.useContext(t);return a.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),a.createElement(t.Provider,{value:e},n.children)}}}]);