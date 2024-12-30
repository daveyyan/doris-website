"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["80421"],{840115:function(e,n,l){l.r(n),l.d(n,{metadata:()=>s,contentTitle:()=>o,default:()=>d,assets:()=>c,toc:()=>h,frontMatter:()=>r});var s=JSON.parse('{"id":"releasenotes/v2.1/release-2.1.2","title":"Release 2.1.2","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/releasenotes/v2.1/release-2.1.2.md","sourceDirName":"releasenotes/v2.1","slug":"/releasenotes/v2.1/release-2.1.2","permalink":"/docs/3.0/releasenotes/v2.1/release-2.1.2","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"Release 2.1.2","language":"en"},"sidebar":"docs","previous":{"title":"Release 2.1.3","permalink":"/docs/3.0/releasenotes/v2.1/release-2.1.3"},"next":{"title":"Release 2.1.1","permalink":"/docs/3.0/releasenotes/v2.1/release-2.1.1"}}'),i=l("785893"),t=l("250065");let r={title:"Release 2.1.2",language:"en"},o=void 0,c={},h=[{value:"Behavior Changed",id:"behavior-changed",level:2},{value:"Upgrade Problem",id:"upgrade-problem",level:2},{value:"New Feature",id:"new-feature",level:2},{value:"Optimization",id:"optimization",level:2},{value:"Bugfix",id:"bugfix",level:2}];function a(e){let n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"behavior-changed",children:"Behavior Changed"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Set the default value of the ",(0,i.jsx)(n.code,{children:"data_consistence"})," property of EXPORT to partition to make export more stable during load."]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/apache/doris/pull/32830",children:"https://github.com/apache/doris/pull/32830"})}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"Some of MySQL Connector (eg, dotnet MySQL.Data) rely on variable's column type to make connection."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["eg, select @",(0,i.jsx)(n.a,{href:"%5B@autocommit%5D(https://github.com/autocommit)",children:"@autocommit"})," should with column type BIGINT, not BIT, otherwise it will throw error. So we change column type of @",(0,i.jsx)(n.a,{href:"https://github.com/autocommit",children:"@autocommit"})," to BIGINT."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/apache/doris/pull/33282",children:"https://github.com/apache/doris/pull/33282"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"upgrade-problem",children:"Upgrade Problem"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Normal workload group is not created when upgrade from 2.0 or other old versions."}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/apache/doris/pull/33197",children:"https://github.com/apache/doris/pull/33197"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"new-feature",children:"New Feature"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Add processlist table in information_schema database, users could use this table to query active connections."}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/apache/doris/pull/32511",children:"https://github.com/apache/doris/pull/32511"})}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["Add a new table valued function ",(0,i.jsx)(n.code,{children:"LOCAL"})," to allow access file system like shared storage."]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/apache/doris-website/pull/494",children:"https://github.com/apache/doris-website/pull/494"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"optimization",children:"Optimization"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Skip some useless process to make graceful stop more quickly in K8s env."}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/apache/doris/pull/33212",children:"https://github.com/apache/doris/pull/33212"})}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"Add rollup table name in profile to help find the mv selection problem."}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/apache/doris/pull/33137",children:"https://github.com/apache/doris/pull/33137"})}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"Add test connection function to DB2 database to allow user check the connection when create DB2 Catalog."}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/apache/doris/pull/33335",children:"https://github.com/apache/doris/pull/33335"})}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsx)(n.li,{children:"Add DNS Cache for FQDN to accelerate the connect process among BEs in K8s env."}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/apache/doris/pull/32869",children:"https://github.com/apache/doris/pull/32869"})}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsx)(n.li,{children:"Refresh external table's rowcount async to make the query plan more stable."}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/apache/doris/pull/32997",children:"https://github.com/apache/doris/pull/32997"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"bugfix",children:"Bugfix"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:'Fix Iceberg Catalog of HMS and Hadoop do not support Iceberg properties like "io.manifest.cache-enabled" to enable manifest cache in Iceberg.'}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/apache/doris/pull/33113",children:"https://github.com/apache/doris/pull/33113"})}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["The offset params in ",(0,i.jsx)(n.code,{children:"LEAD"}),"/",(0,i.jsx)(n.code,{children:"LAG"})," function could use 0 as offset."]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/apache/doris/pull/33174",children:"https://github.com/apache/doris/pull/33174"})}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"Fix some timeout issues with load."}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/apache/doris/pull/33077",children:"https://github.com/apache/doris/pull/33077"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/apache/doris/pull/33260",children:"https://github.com/apache/doris/pull/33260"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsxs)(n.li,{children:["Fix core problem related with ",(0,i.jsx)(n.code,{children:"ARRAY"}),"/",(0,i.jsx)(n.code,{children:"MAP"}),"/",(0,i.jsx)(n.code,{children:"STRUCT"})," compaction process."]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/apache/doris/pull/33130",children:"https://github.com/apache/doris/pull/33130"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/apache/doris/pull/33295",children:"https://github.com/apache/doris/pull/33295"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsx)(n.li,{children:"Fix runtime filter wait timeout."}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/apache/doris/pull/33369",children:"https://github.com/apache/doris/pull/33369"})}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"6",children:["\n",(0,i.jsxs)(n.li,{children:["Fix ",(0,i.jsx)(n.code,{children:"unix_timestamp"})," core for string input in auto partition."]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/apache/doris/pull/32871",children:"https://github.com/apache/doris/pull/32871"})}),"\n"]})]})}function d(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return o},a:function(){return r}});var s=l(667294);let i={},t=s.createContext(i);function r(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);