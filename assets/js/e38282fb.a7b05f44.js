"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["484717"],{418847:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>i,default:()=>u,assets:()=>o,toc:()=>a,frontMatter:()=>c});var s=JSON.parse('{"id":"sql-manual/sql-functions/math-functions/greatest","title":"greatest","description":"\x3c!--","source":"@site/versioned_docs/version-1.2/sql-manual/sql-functions/math-functions/greatest.md","sourceDirName":"sql-manual/sql-functions/math-functions","slug":"/sql-manual/sql-functions/math-functions/greatest","permalink":"/docs/1.2/sql-manual/sql-functions/math-functions/greatest","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"greatest","language":"en"},"sidebar":"docs","previous":{"title":"negative","permalink":"/docs/1.2/sql-manual/sql-functions/math-functions/negative"},"next":{"title":"least","permalink":"/docs/1.2/sql-manual/sql-functions/math-functions/least"}}'),l=t("785893"),r=t("250065");let c={title:"greatest",language:"en"},i=void 0,o={},a=[{value:"greatest",id:"greatest",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"greatest",children:"greatest"}),"\n",(0,l.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,l.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"greatest(col_a, col_b, \u2026, col_n)"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"column"})," supports the following types: ",(0,l.jsx)(n.code,{children:"TINYINT"})," ",(0,l.jsx)(n.code,{children:"SMALLINT"})," ",(0,l.jsx)(n.code,{children:"INT"})," ",(0,l.jsx)(n.code,{children:"BIGINT"})," ",(0,l.jsx)(n.code,{children:"LARGEINT"})," ",(0,l.jsx)(n.code,{children:"FLOAT"})," ",(0,l.jsx)(n.code,{children:"DOUBLE"})," ",(0,l.jsx)(n.code,{children:"STRING"})," ",(0,l.jsx)(n.code,{children:"DATETIME"})," ",(0,l.jsx)(n.code,{children:"DECIMAL"})]}),"\n",(0,l.jsxs)(n.p,{children:["Compares the size of ",(0,l.jsx)(n.code,{children:"n columns"})," and returns the largest among them. If there is ",(0,l.jsx)(n.code,{children:"NULL"})," in ",(0,l.jsx)(n.code,{children:"column"}),", it returns ",(0,l.jsx)(n.code,{children:"NULL"}),"."]}),"\n",(0,l.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"mysql> select greatest(-1, 0, 5, 8);\n+-----------------------+\n| greatest(-1, 0, 5, 8) |\n+-----------------------+\n|                     8 |\n+-----------------------+\nmysql> select greatest(-1, 0, 5, NULL);\n+--------------------------+\n| greatest(-1, 0, 5, NULL) |\n+--------------------------+\n| NULL                     |\n+--------------------------+\nmysql> select greatest(6.3, 4.29, 7.6876);\n+-----------------------------+\n| greatest(6.3, 4.29, 7.6876) |\n+-----------------------------+\n|                      7.6876 |\n+-----------------------------+\nmysql> select greatest(\"2022-02-26 20:02:11\",\"2020-01-23 20:02:11\",\"2020-06-22 20:02:11\");\n+-------------------------------------------------------------------------------+\n| greatest('2022-02-26 20:02:11', '2020-01-23 20:02:11', '2020-06-22 20:02:11') |\n+-------------------------------------------------------------------------------+\n| 2022-02-26 20:02:11                                                           |\n+-------------------------------------------------------------------------------+\n"})}),"\n",(0,l.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"GREATEST\n"})})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return c}});var s=t(667294);let l={},r=s.createContext(l);function c(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);