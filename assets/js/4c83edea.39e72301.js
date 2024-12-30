"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["347158"],{129075:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>i,default:()=>S,assets:()=>c,toc:()=>o,frontMatter:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-statements/Show-Statements/SHOW-DATABASES","title":"SHOW-DATABASES","description":"\x3c!--","source":"@site/docs/sql-manual/sql-statements/Show-Statements/SHOW-DATABASES.md","sourceDirName":"sql-manual/sql-statements/Show-Statements","slug":"/sql-manual/sql-statements/Show-Statements/SHOW-DATABASES","permalink":"/docs/dev/sql-manual/sql-statements/Show-Statements/SHOW-DATABASES","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"SHOW-DATABASES","language":"en"},"sidebar":"docs","previous":{"title":"SHOW-CONVERT-LIGHT-SCHEMA-CHANGE-PROCESS","permalink":"/docs/dev/sql-manual/sql-statements/Show-Statements/SHOW-CONVERT-LIGHT-SCHEMA-CHANGE-PROCESS"},"next":{"title":"SHOW DATA SKEW","permalink":"/docs/dev/sql-manual/sql-statements/Show-Statements/SHOW-DATA-SKEW"}}'),a=t("785893"),l=t("250065");let r={title:"SHOW-DATABASES",language:"en"},i=void 0,c={},o=[{value:"SHOW-DATABASES",id:"show-databases",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"show-databases",children:"SHOW-DATABASES"}),"\n",(0,a.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,a.jsx)(n.p,{children:"SHOW DATABASES"}),"\n",(0,a.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"This statement is used to display the currently visible db"}),"\n",(0,a.jsx)(n.p,{children:"grammar:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SHOW DATABASES [FROM catalog] [filter expr];\n"})}),"\n",(0,a.jsx)(n.p,{children:"illustrate:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"SHOW DATABASES"})," will get all database names from current catalog."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"SHOW DATABASES FROM catalog"})," will all database names from the catalog named 'catalog'."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"SHOW DATABASES filter_expr"})," will get filtered database names from current catalog."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"SHOW DATABASES FROM catalog filter_expr"})," is not support yet."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Display all the database names from current catalog."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SHOW DATABASES;\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"+--------------------+\n| Database           |\n+--------------------+\n| test               |\n| information_schema |\n+--------------------+"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"\n2. Display all database names from the catalog named 'hms_catalog'.\n\n```sql\nSHOW DATABASES from hms_catalog;\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"+---------------+\n| Database      |\n+---------------+\n| default       |\n| tpch          |\n+---------------+\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Display the filtered database names from current catalog with the expr 'like'."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SHOW DATABASES like 'infor%';\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"+--------------------+\n| Database           |\n+--------------------+\n| information_schema |\n+--------------------+"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"\n### Keywords\n\n SHOW, DATABASES\n\n### Best Practice\n\n"})})]})}function S(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return r}});var s=t(667294);let a={},l=s.createContext(a);function r(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);