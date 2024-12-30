"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["322866"],{235633:function(e,n,t){t.r(n),t.d(n,{metadata:()=>a,contentTitle:()=>l,default:()=>m,assets:()=>d,toc:()=>r,frontMatter:()=>i});var a=JSON.parse('{"id":"sql-manual/sql-statements/data-modification/load-and-export/RESUME-SYNC-JOB","title":"RESUME SYNC JOB","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-statements/data-modification/load-and-export/RESUME-SYNC-JOB.md","sourceDirName":"sql-manual/sql-statements/data-modification/load-and-export","slug":"/sql-manual/sql-statements/data-modification/load-and-export/RESUME-SYNC-JOB","permalink":"/docs/3.0/sql-manual/sql-statements/data-modification/load-and-export/RESUME-SYNC-JOB","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"RESUME SYNC JOB","language":"en"},"sidebar":"docs","previous":{"title":"PAUSE SYNC JOB","permalink":"/docs/3.0/sql-manual/sql-statements/data-modification/load-and-export/PAUSE-SYNC-JOB"},"next":{"title":"STOP SYNC JOB","permalink":"/docs/3.0/sql-manual/sql-statements/data-modification/load-and-export/STOP-SYNC-JOB"}}'),s=t("785893"),o=t("250065");let i={title:"RESUME SYNC JOB",language:"en"},l=void 0,d={},r=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"Keywords",id:"keywords",level:2},{value:"Best Practice",id:"best-practice",level:2}];function c(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["Resume a resident data synchronization job whose current database has been suspended by ",(0,s.jsx)(n.code,{children:"job_name"}),", and the job will continue to synchronize data from the latest position before the last suspension."]}),"\n",(0,s.jsx)(n.p,{children:"grammar:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"RESUME SYNC JOB [db.]job_name\n"})}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Resume the data synchronization job named ",(0,s.jsx)(n.code,{children:"job_name"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"RESUME SYNC JOB `job_name`;\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"keywords",children:"Keywords"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"RESUME, SYNC, LOAD\n"})}),"\n",(0,s.jsx)(n.h2,{id:"best-practice",children:"Best Practice"})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var a=t(667294);let s={},o=a.createContext(s);function i(e){let n=a.useContext(o);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);