"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["108247"],{144154:function(e,t,n){n.r(t),n.d(t,{metadata:()=>s,contentTitle:()=>a,default:()=>h,assets:()=>r,toc:()=>d,frontMatter:()=>c});var s=JSON.parse('{"id":"sql-manual/sql-statements/statistics/SHOW-ANALYZE","title":"SHOW ANALYZE","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-statements/statistics/SHOW-ANALYZE.md","sourceDirName":"sql-manual/sql-statements/statistics","slug":"/sql-manual/sql-statements/statistics/SHOW-ANALYZE","permalink":"/docs/3.0/sql-manual/sql-statements/statistics/SHOW-ANALYZE","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"SHOW ANALYZE","language":"en"},"sidebar":"docs","previous":{"title":"KILL ANALYZE JOB","permalink":"/docs/3.0/sql-manual/sql-statements/statistics/KILL-ANALYZE-JOB"},"next":{"title":"ADD FOLLOWER","permalink":"/docs/3.0/sql-manual/sql-statements/cluster-management/instance-management/ADD-FOLLOWER"}}'),l=n("785893"),i=n("250065");let c={title:"SHOW ANALYZE",language:"en"},a=void 0,r={},d=[{value:"Description",id:"description",level:2},{value:"Keywords",id:"keywords",level:2}];function o(e){let t={br:"br",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(t.p,{children:["Use ",(0,l.jsx)(t.code,{children:"SHOW ANALYZE"})," to view information about statistics collection jobs."]}),"\n",(0,l.jsx)(t.p,{children:"Syntax:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-SQL",children:'SHOW [AUTO] ANALYZE < table_name | job_id >\n    [ WHERE [ STATE = [ "PENDING" | "RUNNING" | "FINISHED" | "FAILED" ] ] ];\n'})}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"AUTO: Show historical information for automatic collection jobs only. Note that, by default, the status of only the last 20,000 completed automatic collection jobs is retained."}),"\n",(0,l.jsxs)(t.li,{children:["table_name: Table name, specify to view statistics job information for that table. It can be in the format ",(0,l.jsx)(t.code,{children:"db_name.table_name"}),". When not specified, it returns information for all statistics jobs."]}),"\n",(0,l.jsxs)(t.li,{children:["job_id: Job ID for statistics collection, obtained when executing ",(0,l.jsx)(t.code,{children:"ANALYZE"}),". When not specified, this command returns information for all statistics jobs."]}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:"Output:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Column Name"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"job_id"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Job ID"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"catalog_name"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Catalog Name"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"db_name"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Database Name"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"tbl_name"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Table Name"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"col_name"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Column Name List"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"job_type"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Job Type"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"analysis_type"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Analysis Type"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"message"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Job Information"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"last_exec_time_in_ms"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Last Execution Time"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"state"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Job Status"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"schedule_type"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Scheduling Method"})]})]})]}),"\n",(0,l.jsx)(t.p,{children:"Here's an example:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:"mysql> show analyze 245073\\G;\n*************************** 1. row ***************************\n              job_id: 245073\n        catalog_name: internal\n             db_name: default_cluster:tpch\n            tbl_name: lineitem\n            col_name: [l_returnflag,l_receiptdate,l_tax,l_shipmode,l_suppkey,l_shipdate,l_commitdate,l_partkey,l_orderkey,l_quantity,l_linestatus,l_comment,l_extendedprice,l_linenumber,l_discount,l_shipinstruct]\n            job_type: MANUAL\n       analysis_type: FUNDAMENTALS\n             message: \nlast_exec_time_in_ms: 2023-11-07 11:00:52\n               state: FINISHED\n            progress: 16 Finished  |  0 Failed  |  0 In Progress  |  16 Total\n       schedule_type: ONCE\n"})}),"\n",(0,l.jsx)(t.br,{}),"\n",(0,l.jsx)(t.p,{children:"Each collection job can contain one or more tasks, with each task corresponding to the collection of a column. Users can use the following command to view the completion status of statistics collection for each column."}),"\n",(0,l.jsx)(t.p,{children:"Syntax:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:"SHOW ANALYZE TASK STATUS [job_id]\n"})}),"\n",(0,l.jsx)(t.p,{children:"Here's an example:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{children:"mysql> show analyze task status 20038 ;\n+---------+----------+---------+----------------------+----------+\n| task_id | col_name | message | last_exec_time_in_ms | state    |\n+---------+----------+---------+----------------------+----------+\n| 20039   | col4     |         | 2023-06-01 17:22:15  | FINISHED |\n| 20040   | col2     |         | 2023-06-01 17:22:15  | FINISHED |\n| 20041   | col3     |         | 2023-06-01 17:22:15  | FINISHED |\n| 20042   | col1     |         | 2023-06-01 17:22:15  | FINISHED |\n+---------+----------+---------+----------------------+----------+\n"})}),"\n",(0,l.jsx)(t.h2,{id:"keywords",children:"Keywords"}),"\n",(0,l.jsx)(t.p,{children:"SHOW, ANALYZE"})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return c}});var s=n(667294);let l={},i=s.createContext(l);function c(e){let t=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);