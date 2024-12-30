"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["757654"],{221106:function(e,n,r){r.r(n),r.d(n,{assets:function(){return l},contentTitle:function(){return a},default:function(){return u},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var s=r(792716),i=r(785893),t=r(250065);let o={title:"Apache Doris announced the official release of version 1.1.4",description:"Dear community, Apache Doris team has fixed about 60 issues or performance improvements in version 1.1.4 compared to previous verisons",date:"2022-11-11",author:"Apache Doris",tags:["Release Notes"],image:"/images/release-notes.png"},a="Features",l={authorsImageUrls:[void 0]},c=[];function h(e){let n={a:"a",h1:"h1",li:"li",p:"p",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"In this release, Doris Team has fixed about 60 issues or performance improvement since 1.1.3. This release is a bugfix release on 1.1 and all users are encouraged to upgrade to this release."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Support obs broker load for Huawei Cloud. ",(0,i.jsx)(n.a,{href:"https://github.com/apache/doris/pull/13523",children:"#13523"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["SparkLoad support parquet and orc file.",(0,i.jsx)(n.a,{href:"https://github.com/apache/doris/pull/13438",children:"#13438"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h1,{id:"improvements",children:"Improvements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Do not acquire mutex in metric hook since it will affect query performance during heavy load.",(0,i.jsx)(n.a,{href:"https://github.com/apache/doris/pull/10941",children:"#10941"})]}),"\n"]}),"\n",(0,i.jsx)(n.h1,{id:"bugfix",children:"BugFix"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The where condition does not take effect when spark load loads the file. ",(0,i.jsx)(n.a,{href:"https://github.com/apache/doris/pull/13804",children:"#13804"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If function return error result when there is nullable column in vectorized mode. ",(0,i.jsx)(n.a,{href:"https://github.com/apache/doris/pull/13779",children:"#13779"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Fix incorrect result when using anti join with other join predicates. ",(0,i.jsx)(n.a,{href:"https://github.com/apache/doris/pull/13743",children:"#13743"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["BE crash when call function concat(ifnull). ",(0,i.jsx)(n.a,{href:"https://github.com/apache/doris/pull/13693",children:"#13693"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Fix planner bug when there is a function in group by clause. ",(0,i.jsx)(n.a,{href:"https://github.com/apache/doris/pull/13613",children:"#13613"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Table name and column name is not recognized correctly in lateral view clause. ",(0,i.jsx)(n.a,{href:"https://github.com/apache/doris/pull/13600",children:"#13600"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Unknown column when use MV and table alias. ",(0,i.jsx)(n.a,{href:"https://github.com/apache/doris/pull/13605",children:"#13605"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["JSONReader release memory of both value and parse allocator. ",(0,i.jsx)(n.a,{href:"https://github.com/apache/doris/pull/13513",children:"#13513"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Fix allow create mv using to_bitmap() on negative value columns when enable_vectorized_alter_table is true. ",(0,i.jsx)(n.a,{href:"https://github.com/apache/doris/pull/13448",children:"#13448"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Microsecond in function from_date_format_str is lost. ",(0,i.jsx)(n.a,{href:"https://github.com/apache/doris/pull/13446",children:"#13446"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Sort exprs nullability property may not be right after subsitute using child's smap info. ",(0,i.jsx)(n.a,{href:"https://github.com/apache/doris/pull/13328",children:"#13328"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Fix core dump on case when have 1000 condition. ",(0,i.jsx)(n.a,{href:"https://github.com/apache/doris/pull/13315",children:"#13315"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Fix bug that last line of data lost for stream load. ",(0,i.jsx)(n.a,{href:"https://github.com/apache/doris/pull/13066",children:"#13066"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Restore table or partition with the same replication num as before the backup. ",(0,i.jsx)(n.a,{href:"https://github.com/apache/doris/pull/11942",children:"#11942"})]}),"\n"]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return o}});var s=r(667294);let i={},t=s.createContext(i);function o(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(t.Provider,{value:n},e.children)}},792716:function(e){e.exports=JSON.parse('{"permalink":"/blog/release-note-1.1.4","source":"@site/blog/release-note-1.1.4.md","title":"Apache Doris announced the official release of version 1.1.4","description":"Dear community, Apache Doris team has fixed about 60 issues or performance improvements in version 1.1.4 compared to previous verisons","date":"2022-11-11T00:00:00.000Z","tags":[{"inline":true,"label":"Release Notes","permalink":"/blog/tags/release-notes"}],"hasTruncateMarker":false,"authors":[{"name":"Apache Doris","key":null,"page":null}],"frontMatter":{"title":"Apache Doris announced the official release of version 1.1.4","description":"Dear community, Apache Doris team has fixed about 60 issues or performance improvements in version 1.1.4 compared to previous verisons","date":"2022-11-11","author":"Apache Doris","tags":["Release Notes"],"image":"/images/release-notes.png"},"unlisted":false,"prevItem":{"title":"Apache Doris 1.2 TPC-H performance test report","permalink":"/blog/tpch"},"nextItem":{"title":"Apache Doris announced the official release of version 1.1.3","permalink":"/blog/release-note-1.1.3"}}')}}]);