"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["55971"],{177103:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>i,default:()=>u,assets:()=>c,toc:()=>o,frontMatter:()=>l});var t=JSON.parse('{"id":"sql-manual/sql-functions/array-functions/array-product","title":"ARRAY_PRODUCT","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/array-functions/array-product.md","sourceDirName":"sql-manual/sql-functions/array-functions","slug":"/sql-manual/sql-functions/array-functions/array-product","permalink":"/docs/dev/sql-manual/sql-functions/array-functions/array-product","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"ARRAY_PRODUCT","language":"en"},"sidebar":"docs","previous":{"title":"ARRAY_EXCEPT","permalink":"/docs/dev/sql-manual/sql-functions/array-functions/array-except"},"next":{"title":"ARRAY_INTERSECT","permalink":"/docs/dev/sql-manual/sql-functions/array-functions/array-intersect"}}'),a=r("785893"),s=r("250065");let l={title:"ARRAY_PRODUCT",language:"en"},i=void 0,c={},o=[{value:"array_product",id:"array_product",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"array_product",children:"array_product"}),"\n",(0,a.jsx)(n.p,{children:"array_product"}),"\n",(0,a.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,a.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"T array_product(ARRAY<T> arr)"})}),"\n",(0,a.jsxs)(n.p,{children:["Get the product of all elements in an array (",(0,a.jsx)(n.code,{children:"NULL"})," values are skipped).\nWhen the array is empty or all elements in the array are ",(0,a.jsx)(n.code,{children:"NULL"})," values, the function returns ",(0,a.jsx)(n.code,{children:"NULL"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"mysql> create table array_type_table(k1 INT, k2 Array<int>) duplicate key (k1)\n    -> distributed by hash(k1) buckets 1 properties('replication_num' = '1');\nmysql> insert into array_type_table values (0, []), (1, [NULL]), (2, [1, 2, 3]), (3, [1, NULL, 3]);\nmysql> select k2, array_product(k2) from array_type_table;\n+--------------+---------------------+\n| k2           | array_product(`k2`) |\n+--------------+---------------------+\n| []           |                NULL |\n| [NULL]       |                NULL |\n| [1, 2, 3]    |                   6 |\n| [1, NULL, 3] |                   3 |\n+--------------+---------------------+\n4 rows in set (0.01 sec)\n\n"})}),"\n",(0,a.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,a.jsx)(n.p,{children:"ARRAY,PRODUCT,ARRAY_PRODUCT"})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return l}});var t=r(667294);let a={},s=t.createContext(a);function l(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);