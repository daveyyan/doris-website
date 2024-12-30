"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["77994"],{672816:function(e,t,n){n.r(t),n.d(t,{metadata:()=>s,contentTitle:()=>r,default:()=>p,assets:()=>d,toc:()=>o,frontMatter:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-statements/Database-Administration-Statements/ADMIN-SET-REPLICA-STATUS","title":"ADMIN-SET-REPLICA-STATUS","description":"\x3c!--","source":"@site/docs/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-SET-REPLICA-STATUS.md","sourceDirName":"sql-manual/sql-statements/Database-Administration-Statements","slug":"/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-SET-REPLICA-STATUS","permalink":"/docs/dev/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-SET-REPLICA-STATUS","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"ADMIN-SET-REPLICA-STATUS","language":"en"},"sidebar":"docs","previous":{"title":"UNINSTALL-PLUGIN","permalink":"/docs/dev/sql-manual/sql-statements/Database-Administration-Statements/UNINSTALL-PLUGIN"},"next":{"title":"ADMIN-SET-REPLICA-VERSION","permalink":"/docs/dev/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-SET-REPLICA-VERSION"}}'),a=n("785893"),i=n("250065");let l={title:"ADMIN-SET-REPLICA-STATUS",language:"en"},r=void 0,d={},o=[{value:"ADMIN-SET-REPLICA-STATUS",id:"admin-set-replica-status",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function c(e){let t={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"admin-set-replica-status",children:"ADMIN-SET-REPLICA-STATUS"}),"\n",(0,a.jsx)(t.h3,{id:"name",children:"Name"}),"\n",(0,a.jsx)(t.p,{children:"ADMIN SET REPLICA STATUS"}),"\n",(0,a.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,a.jsx)(t.p,{children:"This statement is used to set the state of the specified replica."}),"\n",(0,a.jsx)(t.p,{children:"This command is currently only used to manually set the status of certain replicas to BAD, DROP or OK, allowing the system to automatically repair these replicas"}),"\n",(0,a.jsx)(t.p,{children:"grammar:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:'ADMIN SET REPLICA STATUS\n        PROPERTIES ("key" = "value", ...);\n'})}),"\n",(0,a.jsx)(t.p,{children:"The following properties are currently supported:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:'"tablet_id": Required. Specify a Tablet Id.'}),"\n",(0,a.jsx)(t.li,{children:'"backend_id": Required. Specify Backend Id.'}),"\n",(0,a.jsx)(t.li,{children:'"status": Required. Specifies the state. Currently only "bad", "drop" or "ok" are supported'}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"If the specified replica does not exist, or the status is already bad, it will be ignored."}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Note:"}),"\n",(0,a.jsx)(t.p,{children:"A replica set to Bad, it will not be able to read or write. In addition, sometimes the setting may not working, when be report tablet ok, fe will auto change its status to ok. This operation may delete the replica immediately, so please operate with caution."}),"\n",(0,a.jsx)(t.p,{children:"A replica set to Drop, it can still be read and written. A healthy replica will be added to other machines first, and then this replica will be deleted. Compared with setting Bad, setting Drop is safer."}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Set the replica status of tablet 10003 on BE 10001 to bad."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:'ADMIN SET REPLICA STATUS PROPERTIES("tablet_id" = "10003", "backend_id" = "10001", "status" = "bad");\n'})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Set the replica status of tablet 10003 on BE 10001 to drop."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:'ADMIN SET REPLICA STATUS PROPERTIES("tablet_id" = "10003", "backend_id" = "10001", "status" = "drop");\n'})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Set the replica status of tablet 10003 on BE 10001 to ok."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:'ADMIN SET REPLICA STATUS PROPERTIES("tablet_id" = "10003", "backend_id" = "10001", "status" = "ok");\n'})}),"\n",(0,a.jsx)(t.h3,{id:"keywords",children:"Keywords"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"ADMIN, SET, REPLICA, STATUS\n"})}),"\n",(0,a.jsx)(t.h3,{id:"best-practice",children:"Best Practice"})]})}function p(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return l}});var s=n(667294);let a={},i=s.createContext(a);function l(e){let t=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);