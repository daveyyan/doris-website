"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["558229"],{650683:function(e,n,i){i.r(n),i.d(n,{assets:function(){return r},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var s=i(152158),t=i(785893),a=i(250065);let o={title:"Apache Doris announced the official release of version 1.2.4",description:"Dear community, Apache Doris 1.2.4 is now available, with several enhancements and bug fixes based on 1.2.0\uFF0Cenabling smoother user experience.",date:"2023-06-05",author:"Apache Doris",tags:["Release Notes"],image:"/images/1.2.4-release.png"},l=void 0,r={authorsImageUrls:[void 0]},c=[{value:"Behavior Changed",id:"behavior-changed",level:2},{value:"Improvements",id:"improvements",level:2},{value:"JDBC Catalog",id:"jdbc-catalog",level:3},{value:"Spark Load",id:"spark-load",level:3},{value:"Bug Fixes",id:"bug-fixes",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"behavior-changed",children:"Behavior Changed"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["For ",(0,t.jsx)(n.code,{children:"DateV2"}),"/",(0,t.jsx)(n.code,{children:"DatetimeV2"})," and ",(0,t.jsx)(n.code,{children:"DecimalV3"})," type, in the results of ",(0,t.jsx)(n.code,{children:"DESCRIBLE"})," and ",(0,t.jsx)(n.code,{children:"SHOW CREATE TABLE"})," statements, they will no longer be displayed as ",(0,t.jsx)(n.code,{children:"DateV2"}),"/",(0,t.jsx)(n.code,{children:"DatetimeV2"})," or ",(0,t.jsx)(n.code,{children:"DecimalV3"}),", but directly displayed as ",(0,t.jsx)(n.code,{children:"Date"}),"/",(0,t.jsx)(n.code,{children:"Datetime"})," or ",(0,t.jsx)(n.code,{children:"Decimal"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["This change is for compatibility with some BI tools. If you want to see the actual type of the column, you can check it with the ",(0,t.jsx)(n.code,{children:"DESCRIBE ALL"})," statement."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["When querying tables in the ",(0,t.jsx)(n.code,{children:"information_schema"})," database, the meta information(database, table, column, etc.) in the external catalog is no longer returned by default."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["This change avoids the problem that the ",(0,t.jsx)(n.code,{children:"information_schema"})," database cannot be queried due to the connection problem of some external catalog, so as to solve the problem of using some BI tools with Doris. It can be controlled by the FE configuration  ",(0,t.jsx)(n.code,{children:"infodb_support_ext_catalog"}),", and the default value is ",(0,t.jsx)(n.code,{children:"false"}),", that is, the meta information of external catalog will not be returned."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"improvements",children:"Improvements"}),"\n",(0,t.jsx)(n.h3,{id:"jdbc-catalog",children:"JDBC Catalog"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Supports connecting to Trino/Presto via JDBC Catalog"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u200B        Refer to: ",(0,t.jsx)(n.a,{href:"https://doris.apache.org/docs/dev/lakehouse/multi-catalog/jdbc#trino",children:"https://doris.apache.org/docs/dev/lakehouse/multi-catalog/jdbc#trino"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"JDBC Catalog connects to Clickhouse data source and supports Array type mapping"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u200B        Refer to: ",(0,t.jsx)(n.a,{href:"https://doris.apache.org/docs/dev/lakehouse/multi-catalog/jdbc#clickhouse",children:"https://doris.apache.org/docs/dev/lakehouse/multi-catalog/jdbc#clickhouse"})]}),"\n",(0,t.jsx)(n.h3,{id:"spark-load",children:"Spark Load"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Spark Load supports Resource Manager HA related configuration"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u200B        Refer to: ",(0,t.jsx)(n.a,{href:"https://github.com/apache/doris/pull/15000",children:"https://github.com/apache/doris/pull/15000"})]}),"\n",(0,t.jsx)(n.h2,{id:"bug-fixes",children:"Bug Fixes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Fixed several connectivity issues with Hive Catalog."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Fixed ClassNotFound issues with Hudi Catalog."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Optimize the connection pool of JDBC Catalog to avoid too many connections."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Fix the problem that OOM will occur when importing data from another Doris cluster through JDBC Catalog."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Fixed serveral queries and imports planning issues."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Fixed several issues with Unique Key Merge-On-Write data model."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Fix several BDBJE issues and solve the problem of abnormal FE metadata in some cases."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Fix the problem that the ",(0,t.jsx)(n.code,{children:"CREATE VIEW"})," statement does not support Table Valued Function."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Fixed several memory statistics issues."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Fixed several issues reading Parquet/ORC format."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Fixed several issues with DecimalV3."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Fixed several issues with SHOW QUERY/LOAD PROFILE."}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return l},a:function(){return o}});var s=i(667294);let t={},a=s.createContext(t);function o(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(a.Provider,{value:n},e.children)}},152158:function(e){e.exports=JSON.parse('{"permalink":"/zh-CN/blog/release-note-1.2.4","source":"@site/blog/release-note-1.2.4.md","title":"Apache Doris announced the official release of version 1.2.4","description":"Dear community, Apache Doris 1.2.4 is now available, with several enhancements and bug fixes based on 1.2.0\uFF0Cenabling smoother user experience.","date":"2023-06-05T00:00:00.000Z","tags":[{"inline":true,"label":"Release Notes","permalink":"/zh-CN/blog/tags/release-notes"}],"hasTruncateMarker":false,"authors":[{"name":"Apache Doris","key":null,"page":null}],"frontMatter":{"title":"Apache Doris announced the official release of version 1.2.4","description":"Dear community, Apache Doris 1.2.4 is now available, with several enhancements and bug fixes based on 1.2.0\uFF0Cenabling smoother user experience.","date":"2023-06-05","author":"Apache Doris","tags":["Release Notes"],"image":"/images/1.2.4-release.png"},"unlisted":false,"prevItem":{"title":"Understanding data compaction in 3 minutes","permalink":"/zh-CN/blog/Understanding-Data-Compaction-in-3-Minutes"},"nextItem":{"title":"A/B Testing was a handful, until we found the replacement for Druid","permalink":"/zh-CN/blog/AB-Testing-was-a-Handful-Until-we-Found-the-Replacement-for-Druid"}}')}}]);