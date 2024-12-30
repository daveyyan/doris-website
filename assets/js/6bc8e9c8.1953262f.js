"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["734198"],{423825:function(n,e,a){a.r(e),a.d(e,{metadata:()=>r,contentTitle:()=>i,default:()=>d,assets:()=>o,toc:()=>u,frontMatter:()=>s});var r=JSON.parse('{"id":"sql-manual/sql-functions/array-functions/array-union","title":"ARRAY_UNION","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/array-functions/array-union.md","sourceDirName":"sql-manual/sql-functions/array-functions","slug":"/sql-manual/sql-functions/array-functions/array-union","permalink":"/docs/3.0/sql-manual/sql-functions/array-functions/array-union","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"ARRAY_UNION","language":"en"},"sidebar":"docs","previous":{"title":"ARRAY_DIFFERENCE","permalink":"/docs/3.0/sql-manual/sql-functions/array-functions/array-difference"},"next":{"title":"ARRAY_JOIN","permalink":"/docs/3.0/sql-manual/sql-functions/array-functions/array-join"}}'),l=a("785893"),t=a("250065");let s={title:"ARRAY_UNION",language:"en"},i=void 0,o={},u=[{value:"array_union",id:"array_union",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function c(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"array_union",children:"array_union"}),"\n",(0,l.jsx)(e.p,{children:"array_union"}),"\n",(0,l.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,l.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.code,{children:"ARRAY<T> array_union(ARRAY<T> array1, ARRAY<T> array2)"})}),"\n",(0,l.jsx)(e.p,{children:"Returns an array of the elements in the union of array1 and array2, without duplicates. If the input parameter is null, null is returned."}),"\n",(0,l.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"mysql> select k1,k2,k3,array_union(k2,k3) from array_type_table;\n+------+-----------------+--------------+-------------------------+\n| k1   | k2              | k3           | array_union(`k2`, `k3`) |\n+------+-----------------+--------------+-------------------------+\n|    1 | [1, 2, 3]       | [2, 4, 5]    | [1, 2, 3, 4, 5]         |\n|    2 | [2, 3]          | [1, 5]       | [2, 3, 1, 5]            |\n|    3 | [1, 1, 1]       | [2, 2, 2]    | [1, 2]                  |\n+------+-----------------+--------------+-------------------------+\n\nmysql> select k1,k2,k3,array_union(k2,k3) from array_type_table_nullable;\n+------+-----------------+--------------+-------------------------+\n| k1   | k2              | k3           | array_union(`k2`, `k3`) |\n+------+-----------------+--------------+-------------------------+\n|    1 | [1, NULL, 3]    | [1, 3, 5]    | [1, NULL, 3, 5]         |\n|    2 | [NULL, NULL, 2] | [2, NULL, 4] | [NULL, 2, 4]            |\n|    3 | NULL            | [1, 2, 3]    | NULL                    |\n+------+-----------------+--------------+-------------------------+\n\nmysql> select k1,k2,k3,array_union(k2,k3) from array_type_table_varchar;\n+------+----------------------------+----------------------------------+---------------------------------------------------+\n| k1   | k2                         | k3                               | array_union(`k2`, `k3`)                           |\n+------+----------------------------+----------------------------------+---------------------------------------------------+\n|    1 | ['hello', 'world', 'c++']  | ['I', 'am', 'c++']               | ['hello', 'world', 'c++', 'I', 'am']              |\n|    2 | ['a1', 'equals', 'b1']     | ['a2', 'equals', 'b2']           | ['a1', 'equals', 'b1', 'a2', 'b2']                |\n|    3 | ['hasnull', NULL, 'value'] | ['nohasnull', 'nonull', 'value'] | ['hasnull', NULL, 'value', 'nohasnull', 'nonull'] |\n|    4 | ['hasnull', NULL, 'value'] | ['hasnull', NULL, 'value']       | ['hasnull', NULL, 'value']                        |\n+------+----------------------------+----------------------------------+---------------------------------------------------+\n\nmysql> select k1,k2,k3,array_union(k2,k3) from array_type_table_decimal;\n+------+------------------+-------------------+----------------------------+\n| k1   | k2               | k3                | array_union(`k2`, `k3`)    |\n+------+------------------+-------------------+----------------------------+\n|    1 | [1.1, 2.1, 3.44] | [2.1, 3.4, 5.4]   | [1.1, 2.1, 3.44, 3.4, 5.4] |\n|    2 | [NULL, 2, 5]     | [NULL, NULL, 5.4] | [NULL, 2, 5, 5.4]          |\n|    4 | [1, NULL, 2, 5]  | [1, 3.1, 5.4]     | [1, NULL, 2, 5, 3.1, 5.4]  |\n+------+------------------+-------------------+----------------------------+\n\n"})}),"\n",(0,l.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,l.jsx)(e.p,{children:"ARRAY,UNION,ARRAY_UNION"})]})}function d(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(c,{...n})}):c(n)}},250065:function(n,e,a){a.d(e,{Z:function(){return i},a:function(){return s}});var r=a(667294);let l={},t=r.createContext(l);function s(n){let e=r.useContext(t);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:s(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);