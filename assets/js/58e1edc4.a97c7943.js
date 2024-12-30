"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["644575"],{173379:function(e,t,n){n.r(t),n.d(t,{metadata:()=>s,contentTitle:()=>r,default:()=>m,assets:()=>l,toc:()=>d,frontMatter:()=>o});var s=JSON.parse('{"id":"sql-manual/sql-statements/data-modification/backup-and-restore/SHOW-RESTORE","title":"SHOW RESTORE","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-statements/data-modification/backup-and-restore/SHOW-RESTORE.md","sourceDirName":"sql-manual/sql-statements/data-modification/backup-and-restore","slug":"/sql-manual/sql-statements/data-modification/backup-and-restore/SHOW-RESTORE","permalink":"/docs/sql-manual/sql-statements/data-modification/backup-and-restore/SHOW-RESTORE","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"SHOW RESTORE","language":"en"},"sidebar":"docs","previous":{"title":"RESTORE","permalink":"/docs/sql-manual/sql-statements/data-modification/backup-and-restore/RESTORE"},"next":{"title":"CANCEL RESTORE","permalink":"/docs/sql-manual/sql-statements/data-modification/backup-and-restore/CANCEL-RESTORE"}}'),a=n("785893"),i=n("250065");let o={title:"SHOW RESTORE",language:"en"},r=void 0,l={},d=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Keywords",id:"keywords",level:2},{value:"Best Practice",id:"best-practice",level:2}];function c(e){let t={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(t.p,{children:"This statement is used to view RESTORE tasks"}),"\n",(0,a.jsx)(t.p,{children:"grammar:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-SQL",children:"SHOW [BRIEF] RESTORE [FROM DB_NAME]\n"})}),"\n",(0,a.jsx)(t.p,{children:"illustrate:\n1. Only the most recent RESTORE task is saved in Doris.\n2. The meaning of each column is as follows:\nJobId: Unique job id\nLabel: The name of the backup to restore\nTimestamp: The time version of the backup to restore\nDbName: belongs to the database\nState: current stage\nPENDING: The initial state after submitting the job\nSNAPSHOTING: Executing snapshot\nDOWNLOAD: The snapshot is complete, ready to download the snapshot in the repository\nDOWNLOADING: Snapshot downloading\nCOMMIT: Snapshot download is complete, ready to take effect\nCOMMITING: in effect\nFINISHED: The job was successful\nCANCELLED: Job failed\nAllowLoad: Whether to allow import when restoring (currently not supported)\nReplicationNum: Specifies the number of replicas to restore\nRestoreJobs: Tables and partitions to restore\nCreateTime: task submission time\nMetaPreparedTime: Metadata preparation completion time\nSnapshotFinishedTime: Snapshot completion time\nDownloadFinishedTime: Snapshot download completion time\nFinishedTime: Job finish time\nUnfinishedTasks: Displays unfinished subtask ids during SNAPSHOTING, DOWNLOADING and COMMITING stages\nStatus: If the job fails, display the failure message\nTimeout: Job timeout, in seconds"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"    2. brief: only show key information of RESTORE tasks, columns RestoreObjs, Progress, TaskErrMsg will not show\n"})}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"View the latest RESTORE task under example_db."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"SHOW RESTORE FROM example_db;\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"keywords",children:"Keywords"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"SHOW, RESTORE\n"})}),"\n",(0,a.jsx)(t.h2,{id:"best-practice",children:"Best Practice"})]})}function m(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return o}});var s=n(667294);let a={},i=s.createContext(a);function o(e){let t=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);