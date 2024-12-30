"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["801606"],{414529:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>h,assets:()=>o,toc:()=>d,frontMatter:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-statements/cluster-management/instance-management/ADD-BACKEND","title":"ADD BACKEND","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-statements/cluster-management/instance-management/ADD-BACKEND.md","sourceDirName":"sql-manual/sql-statements/cluster-management/instance-management","slug":"/sql-manual/sql-statements/cluster-management/instance-management/ADD-BACKEND","permalink":"/docs/sql-manual/sql-statements/cluster-management/instance-management/ADD-BACKEND","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"ADD BACKEND","language":"en"},"sidebar":"docs","previous":{"title":"SHOW FRONTENDS DISKS","permalink":"/docs/sql-manual/sql-statements/cluster-management/instance-management/SHOW-FRONTENDS-DISKS"},"next":{"title":"DROP BACKEND","permalink":"/docs/sql-manual/sql-statements/cluster-management/instance-management/DROP-BACKEND"}}'),a=t("785893"),i=t("250065");let r={title:"ADD BACKEND",language:"en"},l=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:2},{value:"Keywords",id:"keywords",level:2},{value:"Best Practice",id:"best-practice",level:2}];function c(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"The ADD BACKEND command is used to add one or more backend nodes to a Doris OLAP database cluster. This command allows administrators to specify the host and port of the new backend nodes, along with optional properties that configure their behavior."}),"\n",(0,a.jsx)(n.p,{children:"grammar:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'-- Add nodes (add this method if you do not use the multi-tenancy function)\n   ALTER SYSTEM ADD BACKEND "host:heartbeat_port"[,"host:heartbeat_port"...] [PROPERTIES ("key"="value", ...)];\n'})}),"\n",(0,a.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"host"})," can be a hostname or an ip address of the backend node while ",(0,a.jsx)(n.code,{children:"heartbeat_port"})," is the heartbeat port of the node"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:'PROPERTIES ("key"="value", ...)'}),": (Optional) A set of key-value pairs that define additional properties for the backend nodes. These properties can be used to customize the configuration of the backends being added. Available properties include:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:'tag.location: Specifies the resource group where the backend node belongs. For example, PROPERTIES ("tag.location" = "groupb").'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Adding Backends Without Additional Properties"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'ALTER SYSTEM ADD BACKEND "host1:9020,host2:9020";\n'})}),"\n",(0,a.jsx)(n.p,{children:"This command adds two backend nodes to the cluster:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"host1 with port 9020"}),"\n",(0,a.jsx)(n.li,{children:"host2 with port 9020"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"No additional properties are specified, so the default settings will apply to these backends."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Adding Backends With Resource Group"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'ALTER SYSTEM ADD BACKEND "host3:9020" PROPERTIES ("tag.location" = "groupb");\n'})}),"\n",(0,a.jsxs)(n.p,{children:["This command adds a single backend node (host3 with port 9020) to the cluster in resource group ",(0,a.jsx)(n.code,{children:"groupb"}),":"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"keywords",children:"Keywords"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"ALTER, SYSTEM, ADD, BACKEND, PROPERTIES\n"})}),"\n",(0,a.jsx)(n.h2,{id:"best-practice",children:"Best Practice"})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return r}});var s=t(667294);let a={},i=s.createContext(a);function r(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);