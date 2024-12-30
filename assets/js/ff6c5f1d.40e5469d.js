"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["577019"],{804822:function(e,n,a){a.r(n),a.d(n,{metadata:()=>t,contentTitle:()=>i,default:()=>m,assets:()=>d,toc:()=>s,frontMatter:()=>c});var t=JSON.parse('{"id":"admin-manual/data-admin/recyclebin","title":"Recover from Recycle Bin","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/admin-manual/data-admin/recyclebin.md","sourceDirName":"admin-manual/data-admin","slug":"/admin-manual/data-admin/recyclebin","permalink":"/docs/3.0/admin-manual/data-admin/recyclebin","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"Recover from Recycle Bin","language":"en"},"sidebar":"docs","previous":{"title":"CCR (Cross Cluster Replication)","permalink":"/docs/3.0/admin-manual/data-admin/ccr"},"next":{"title":"Overview","permalink":"/docs/3.0/admin-manual/workload-management/workload-management-summary"}}'),r=a("785893"),l=a("250065");let c={title:"Recover from Recycle Bin",language:"en"},i=void 0,d={},s=[{value:"Data Lifecycle",id:"data-lifecycle",level:2},{value:"Recover from Recycle Bin",id:"recover-from-recycle-bin",level:2},{value:"Query Recycle Bin",id:"query-recycle-bin",level:3},{value:"Start Data Recovery",id:"start-data-recovery",level:3}];function o(e){let n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"data-lifecycle",children:"Data Lifecycle"}),"\n",(0,r.jsxs)(n.p,{children:["When a user executes the ",(0,r.jsx)(n.code,{children:"DROP DATABASE/TABLE/PARTITION"})," command without ",(0,r.jsx)(n.code,{children:"FORCE"}),", Doris moves the deleted database, table, or partition to the recycle bin. The ",(0,r.jsx)(n.code,{children:"RECOVER"})," command can be used to restore all data of the deleted database, table, or partition from the recycle bin, making them visible again."]}),"\n",(0,r.jsx)(n.h2,{id:"recover-from-recycle-bin",children:"Recover from Recycle Bin"}),"\n",(0,r.jsxs)(n.p,{children:["In order to avoid disasters caused by misoperation, Doris supports data recovery of accidentally deleted databases, tables, and partitions. After dropping a table or database, Doris does not physically delete the data immediately. Instead, it is moved to the trash for a certain period of time (the default is 1 day, which can be configured through the ",(0,r.jsx)(n.code,{children:"catalog_trash_expire_second"})," parameter in ",(0,r.jsx)(n.code,{children:"fe.conf"}),"). The administrator can use the ",(0,r.jsx)(n.code,{children:"RECOVER"})," command to restore accidentally deleted data."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," If the deletion was performed using ",(0,r.jsx)(n.code,{children:"DROP FORCE"}),", the data will be immediately deleted and cannot be recovered."]}),"\n",(0,r.jsx)(n.h3,{id:"query-recycle-bin",children:"Query Recycle Bin"}),"\n",(0,r.jsx)(n.p,{children:"You can query the Recycle Bin with the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'SHOW CATALOG RECYCLE BIN [WHERE NAME [= "name" | LIKE "name_matcher"]];\n'})}),"\n",(0,r.jsxs)(n.p,{children:["For more detailed syntax and best practices, please refer to the ",(0,r.jsx)(n.a,{href:"../../sql-manual/sql-statements/Show-Statements/SHOW-CATALOG-RECYCLE-BIN.md",children:"SHOW-CATALOG-RECYCLE-BIN"})," command manual, You can also type ",(0,r.jsx)(n.code,{children:"help SHOW CATALOG RECYCLE BIN"})," on the MySql client command line for more help."]}),"\n",(0,r.jsx)(n.h3,{id:"start-data-recovery",children:"Start Data Recovery"}),"\n",(0,r.jsx)(n.p,{children:"To recover deleted data, you can use the following commands:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"Recover the database"})," named ",(0,r.jsx)(n.code,{children:"example_db"}),":"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"RECOVER DATABASE example_db;\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"Recover the table"})," named ",(0,r.jsx)(n.code,{children:"example_tbl"}),":"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"RECOVER TABLE example_db.example_tbl;\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"Recover partition"})," named p1 in table example_tbl:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"RECOVER PARTITION p1 FROM example_tbl;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["For more detailed syntax and best practices used by RECOVER, please refer to the ",(0,r.jsx)(n.a,{href:"../../sql-manual/sql-statements/Database-Administration-Statements/RECOVER.md",children:"RECOVER"})," command manual, You can also type ",(0,r.jsx)(n.code,{children:"HELP RECOVER"})," on the MySql client command line for more help."]})]})}function m(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return i},a:function(){return c}});var t=a(667294);let r={},l=t.createContext(r);function c(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);