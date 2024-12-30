"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["185907"],{510109:function(e,t,s){s.r(t),s.d(t,{metadata:()=>n,contentTitle:()=>l,default:()=>p,assets:()=>i,toc:()=>d,frontMatter:()=>r});var n=JSON.parse('{"id":"data-operate/export/export-with-mysql-dump","title":"MySQL Dump","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/data-operate/export/export-with-mysql-dump.md","sourceDirName":"data-operate/export","slug":"/data-operate/export/export-with-mysql-dump","permalink":"/docs/3.0/data-operate/export/export-with-mysql-dump","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"MySQL Dump","language":"en"},"sidebar":"docs","previous":{"title":"Select Into Outfile","permalink":"/docs/3.0/data-operate/export/outfile"},"next":{"title":"MySQL Compatibility","permalink":"/docs/3.0/query-data/mysql-compatibility"}}'),o=s("785893"),a=s("250065");let r={title:"MySQL Dump",language:"en"},l=void 0,i={},d=[{value:"Examples",id:"examples",level:2},{value:"Export",id:"export",level:3},{value:"Import",id:"import",level:3},{value:"Notice",id:"notice",level:2}];function c(e){let t={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["Doris has supported exporting data or table structures through the ",(0,o.jsx)(t.code,{children:"mysqldump"})," tool after version 0.15"]}),"\n",(0,o.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(t.h3,{id:"export",children:"Export"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Export the table1 table in the test database: ",(0,o.jsx)(t.code,{children:"mysqldump -h127.0.0.1 -P9030 -uroot --no-tablespaces --databases test --tables table1"})]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Export the table1 table structure in the test database: ",(0,o.jsx)(t.code,{children:"mysqldump -h127.0.0.1 -P9030 -uroot --no-tablespaces --databases test --tables table1 --no-data"})]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Export all tables in the test1, test2 database: ",(0,o.jsx)(t.code,{children:"mysqldump -h127.0.0.1 -P9030 -uroot --no-tablespaces --databases test1 test2"})]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Export all databases and tables ",(0,o.jsx)(t.code,{children:"mysqldump -h127.0.0.1 -P9030 -uroot --no-tablespaces --all-databases"}),"\nFor more usage parameters, please refer to the manual of ",(0,o.jsx)(t.code,{children:"mysqldump"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"import",children:"Import"}),"\n",(0,o.jsxs)(t.p,{children:["The results exported by ",(0,o.jsx)(t.code,{children:"mysqldump"})," can be redirected to a file, which can then be imported into Doris through the source command ",(0,o.jsx)(t.code,{children:"source filename.sql"})]}),"\n",(0,o.jsx)(t.h2,{id:"notice",children:"Notice"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Since there is no concept of tablespace in mysql in Doris, add the ",(0,o.jsx)(t.code,{children:"--no-tablespaces"})," parameter when using ",(0,o.jsx)(t.code,{children:"mysqldump"})]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Using mysqldump to export data and table structure is only used for development and testing or when the amount of data is small. Do not use it in a production environment with a large amount of data."}),"\n"]}),"\n"]})]})}function p(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,t,s){s.d(t,{Z:function(){return l},a:function(){return r}});var n=s(667294);let o={},a=n.createContext(o);function r(e){let t=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);