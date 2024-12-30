"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["427687"],{580364:function(e,n,a){a.r(n),a.d(n,{metadata:()=>r,contentTitle:()=>l,default:()=>d,assets:()=>c,toc:()=>o,frontMatter:()=>i});var r=JSON.parse('{"id":"sql-manual/sql-functions/array-functions/array_max","title":"array_max","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/array-functions/array_max.md","sourceDirName":"sql-manual/sql-functions/array-functions","slug":"/sql-manual/sql-functions/array-functions/array_max","permalink":"/zh-CN/docs/1.2/sql-manual/sql-functions/array-functions/array_max","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"array_max","language":"zh-CN"},"sidebar":"docs","previous":{"title":"array","permalink":"/zh-CN/docs/1.2/sql-manual/sql-functions/array-functions/array"},"next":{"title":"array_min","permalink":"/zh-CN/docs/1.2/sql-manual/sql-functions/array-functions/array_min"}}'),t=a("785893"),s=a("250065");let i={title:"array_max",language:"zh-CN"},l=void 0,c={},o=[{value:"array_max",id:"array_max",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"array_max",children:"array_max"}),"\n",(0,t.jsx)(n.p,{children:"array_max"}),"\n",(0,t.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,t.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"T array_max(ARRAY<T> array1)"})}),"\n",(0,t.jsxs)(n.p,{children:["\u8FD4\u56DE\u6570\u7EC4\u4E2D\u6700\u5927\u7684\u5143\u7D20\uFF0C\u6570\u7EC4\u4E2D\u7684",(0,t.jsx)(n.code,{children:"NULL"}),"\u503C\u4F1A\u88AB\u8DF3\u8FC7\u3002\u7A7A\u6570\u7EC4\u4EE5\u53CA\u5143\u7D20\u5168\u4E3A",(0,t.jsx)(n.code,{children:"NULL"}),"\u503C\u7684\u6570\u7EC4\uFF0C\u7ED3\u679C\u8FD4\u56DE",(0,t.jsx)(n.code,{children:"NULL"}),"\u503C\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"mysql> create table array_type_table(k1 INT, k2 Array<int>) duplicate key (k1)\n    -> distributed by hash(k1) buckets 1 properties('replication_num' = '1');\nmysql> insert into array_type_table values (0, []), (1, [NULL]), (2, [1, 2, 3]), (3, [1, NULL, 3]);\nmysql> select k2, array_max(k2) from array_type_table;\n+--------------+-----------------+\n| k2           | array_max(`k2`) |\n+--------------+-----------------+\n| []           |            NULL |\n| [NULL]       |            NULL |\n| [1, 2, 3]    |               3 |\n| [1, NULL, 3] |               3 |\n+--------------+-----------------+\n4 rows in set (0.02 sec)\n\n"})}),"\n",(0,t.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,t.jsx)(n.p,{children:"ARRAY,MAX,ARRAY_MAX"})]})}function d(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return l},a:function(){return i}});var r=a(667294);let t={},s=r.createContext(t);function i(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);