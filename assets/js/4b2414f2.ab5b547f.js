"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["451582"],{660325:function(e,n,l){l.r(n),l.d(n,{metadata:()=>t,contentTitle:()=>a,default:()=>u,assets:()=>i,toc:()=>c,frontMatter:()=>r});var t=JSON.parse('{"id":"sql-manual/sql-functions/table-functions/explode","title":"EXPLODE","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/table-functions/explode.md","sourceDirName":"sql-manual/sql-functions/table-functions","slug":"/sql-manual/sql-functions/table-functions/explode","permalink":"/docs/dev/sql-manual/sql-functions/table-functions/explode","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"EXPLODE","language":"en"},"sidebar":"docs","previous":{"title":"EXPLODE_JSON_ARRAY","permalink":"/docs/dev/sql-manual/sql-functions/table-functions/explode-json-array"},"next":{"title":"POSEXPLODE","permalink":"/docs/dev/sql-manual/sql-functions/table-functions/posexplode"}}'),s=l("785893"),o=l("250065");let r={title:"EXPLODE",language:"en"},a=void 0,i={},c=[{value:"explode",id:"explode",level:2},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"explode",children:"explode"}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,s.jsx)(n.p,{children:"Table functions must be used in conjunction with Lateral View."}),"\n",(0,s.jsxs)(n.p,{children:["explode array column to rows. ",(0,s.jsx)(n.code,{children:"explode_outer"})," will return NULL, while ",(0,s.jsx)(n.code,{children:"array"})," is NULL or empty.\n",(0,s.jsx)(n.code,{children:"explode"})," and ",(0,s.jsx)(n.code,{children:"explode_outer"})," both keep the nested NULL elements of array."]}),"\n",(0,s.jsx)(n.h4,{id:"syntax",children:"syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"explode(expr)\nexplode_outer(expr)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"mysql> select e1 from (select 1 k1) as t lateral view explode([1,2,3]) tmp1 as e1;\n+------+\n| e1   |\n+------+\n|    1 |\n|    2 |\n|    3 |\n+------+\n\nmysql> select e1 from (select 1 k1) as t lateral view explode_outer(null) tmp1 as e1;\n+------+\n| e1   |\n+------+\n| NULL |\n+------+\n\nmysql> select e1 from (select 1 k1) as t lateral view explode([]) tmp1 as e1;\nEmpty set (0.010 sec)\n\nmysql> select e1 from (select 1 k1) as t lateral view explode([null,1,null]) tmp1 as e1;\n+------+\n| e1   |\n+------+\n| NULL |\n|    1 |\n| NULL |\n+------+\n\nmysql> select e1 from (select 1 k1) as t lateral view explode_outer([null,1,null]) tmp1 as e1;\n+------+\n| e1   |\n+------+\n| NULL |\n|    1 |\n| NULL |\n+------+\n"})}),"\n",(0,s.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(n.p,{children:"EXPLODE,EXPLODE_OUTER,ARRAY"})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return a},a:function(){return r}});var t=l(667294);let s={},o=t.createContext(s);function r(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);