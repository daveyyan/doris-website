"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["689402"],{508197:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return r},default:function(){return d},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return c}});var i=n(164964),a=n(785893),s=n(250065);let o={title:"Database dissection: how fast data queries are implemented",description:"What's more important than quick performance itself is the architectural design and mechanism that enable it.",date:"2023-07-16",author:"Rong Hou",tags:["Best Practice"],image:"/images/how-fast-data-queries-are-implemented.png"},r=void 0,l={authorsImageUrls:[void 0]},c=[{value:"How to Enable Quick Queries on Huge Dataset",id:"how-to-enable-quick-queries-on-huge-dataset",level:2},{value:"1.Distribute the data",id:"1distribute-the-data",level:3},{value:"2.Pre-bind a data group to a machine",id:"2pre-bind-a-data-group-to-a-machine",level:3},{value:"3.Merge the operators",id:"3merge-the-operators",level:3},{value:"How to Quickly Ingest Large Amounts of Data",id:"how-to-quickly-ingest-large-amounts-of-data",level:2},{value:"A Vectorized Execution Engine",id:"a-vectorized-execution-engine",level:2},{value:"Conclusion",id:"conclusion",level:2}];function h(e){let t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"In data analytics, fast query performance is more of a result than a guarantee. What's more important than the result itself is the architectural design and mechanism that enables quick performance. This is exactly what this post is about. I will put you into context with a typical use case of Apache Doris, an open-source MPP-based analytic database."}),"\n",(0,a.jsx)(t.p,{children:"The user in this case is an all-category Q&A website. As a billion-dollar listed company, they have their own data management platform. What Doris does is to support the data filtering, packaging, analyzing, and monitoring workloads of that platform. Based on their huge data size, the user demands quick data loading and quick response to queries."}),"\n",(0,a.jsx)(t.h2,{id:"how-to-enable-quick-queries-on-huge-dataset",children:"How to Enable Quick Queries on Huge Dataset"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Scenario"}),": user segmentation for the website"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Data size"}),": 100 billion data objects, 2.4 million tags"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Requirements"}),": query response time < 1 second; result packaging < 10 seconds"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"For these goals, the engineers have made three critical changes in their data processing pipeline."}),"\n",(0,a.jsx)(t.h3,{id:"1distribute-the-data",children:"1.Distribute the data"}),"\n",(0,a.jsx)(t.p,{children:"User segmentation is when analysts pick out a group of website users that share certain characteristics (tags). In the database system, this process is implemented by a bunch of set operations (union, intersection, and difference)."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Narration from the engineers:"})}),"\n",(0,a.jsx)(t.p,{children:"We realize that instead of executing set operations on one big dataset, we can divide our dataset into smaller ones, execute set operations on each of them, and then merge all the results. In this way, each small dataset is computed by one thread/queue. Then we have a queue to do the final merging. It's simple distributed computing thinking."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"distributed-computing-in-database",src:n(284502).Z+"",width:"1280",height:"651"})}),"\n",(0,a.jsx)(t.p,{children:"Example:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["Every 1 million users are put into one group with a ",(0,a.jsx)(t.code,{children:"group_id"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["All user tags in that same group will relate to the corresponding ",(0,a.jsx)(t.code,{children:"group_id"}),"."]}),"\n",(0,a.jsx)(t.li,{children:"Calculate the union/intersection/difference within each group. (Enable multi-thread mode to increase computation efficiency.)"}),"\n",(0,a.jsx)(t.li,{children:"Merge the results from the groups."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"The problem here is, since user tags are randomly distributed across various machines, the computation entails multi-time shuffling, which brings huge network overhead. That leads to the second change."}),"\n",(0,a.jsx)(t.h3,{id:"2pre-bind-a-data-group-to-a-machine",children:"2.Pre-bind a data group to a machine"}),"\n",(0,a.jsx)(t.p,{children:"This is enabled by the Colocate mechanism of Apache Doris. The idea of Colocate is to place data chunks that are often accessed together onto the same node, so as to reduce cross-node data transfer and thus, get lower latency."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"colocate-mechanism",src:n(636474).Z+"",width:"1280",height:"331"})}),"\n",(0,a.jsx)(t.p,{children:"The implementation is simple: Bind one group key to one machine. Then naturally, data corresponding to that group key will be pre-bound to that machine."}),"\n",(0,a.jsx)(t.p,{children:"The following is the query plan before we adopted Collocate: It is complicated, with a lot of data shuffling."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"complicated-data-shuffling",src:n(129389).Z+"",width:"720",height:"765"})}),"\n",(0,a.jsx)(t.p,{children:"This is the query plan after. It is much simpler, which is why queries are much faster and less costly."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"simpler-query-plan-after-colocation-join",src:n(468339).Z+"",width:"1280",height:"616"})}),"\n",(0,a.jsx)(t.h3,{id:"3merge-the-operators",children:"3.Merge the operators"}),"\n",(0,a.jsxs)(t.p,{children:["In data queries, the engineers realized that they often use a couple of functions in combination, so they decided to develop compound functions to further improve execution efficiency. They came to the Doris ",(0,a.jsx)(t.a,{href:"https://t.co/XD4uUSROft",children:"community"})," and talked about their thoughts. The Doris developers provided support for them and soon the compound functions are ready for use on Doris. These are a few examples:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"bitmap_and_count == bitmap_count(bitmap_and(bitmap1, bitmap2))\nbitmap_and_not_count == bitmap_count(bitmap_not(bitmap1, bitmap_and(bitmap1, bitmap2))\northogonal_bitmap_union_count==bitmap_and(bitmap1,bitmap_and(bitmap2,bitmap3)\n"})}),"\n",(0,a.jsx)(t.p,{children:"Query execution with one compound function is much faster than that with a chain of simple functions, as you can tell from the lengths of the flow charts:"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"operator-merging",src:n(337918).Z+"",width:"1280",height:"396"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Multiple Simple functions"}),": This involves three function executions and two intermediate storage. It's a long and slow process."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"One compound function"}),": Simple in and out."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"how-to-quickly-ingest-large-amounts-of-data",children:"How to Quickly Ingest Large Amounts of Data"}),"\n",(0,a.jsx)(t.p,{children:"This is about putting the right workload on the right component. Apache Doris supports a variety of data loading methods. After trials and errors, the user settled on Spark Load and thus decreased their data loading time by 90%."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Narration from the engineers:"})}),"\n",(0,a.jsx)(t.p,{children:"In offline data ingestion, we used to perform most computation in Apache Hive, write the data files to HDFS, and pull data regularly from HDFS to Apache Doris. However, after Doris obtains parquet files from HDFS, it performs a series of operations on them before it can turn them into segment files: decompressing, bucketing, sorting, aggregating, and compressing. These workloads will be borne by Doris backends, which have to undertake a few bitmap operations at the same time. So there is a huge pressure on the CPU."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Broker-Load",src:n(941861).Z+"",width:"1280",height:"629"})}),"\n",(0,a.jsx)(t.p,{children:"So we decided on the Spark Load method. It allows us to split the ingestion process into two parts: computation and storage, so we can move all the bucketing, sorting, aggregating, and compressing to Spark clusters. Then Spark writes the output to HDFS, from which Doris pulls data and flushes it to the local disks."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Spark-Load",src:n(301100).Z+"",width:"1280",height:"372"})}),"\n",(0,a.jsx)(t.p,{children:"When ingesting 1.2 TB data (that's 110 billion rows), the Spark Load method only took 55 minutes."}),"\n",(0,a.jsx)(t.h2,{id:"a-vectorized-execution-engine",children:"A Vectorized Execution Engine"}),"\n",(0,a.jsx)(t.p,{children:"In addition to the above changes, a large part of the performance of a database relies on its execution engine. In the case of Apache Doris, it has fully vectorized its storage and computation layers since version 1.1. The longtime user also witnessed this revolution, so we invited them to test how the vectorized engine worked."}),"\n",(0,a.jsx)(t.p,{children:"They compared query response time before and after the vectorization in seven of its frequent scenarios:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Scenario 1: Simple user segmentation (hundreds of filtering conditions), data packaging of a multi-million user group."}),"\n",(0,a.jsx)(t.li,{children:"Scenario 2: Complicated user segmentation (thousands of filtering conditions), data packaging of a tens-of-million user group."}),"\n",(0,a.jsxs)(t.li,{children:["Scenario 3: Multi-dimensional filtering (6 dimensions), single-table query, ",(0,a.jsx)(t.strong,{children:"single-date flat table"}),", data aggregation, 180 million rows per day."]}),"\n",(0,a.jsxs)(t.li,{children:["Scenario 4: Multi-dimensional filtering (6 dimensions), single-table query, ",(0,a.jsx)(t.strong,{children:"multi-date flat table"}),", data aggregation, 180 million rows per day."]}),"\n",(0,a.jsxs)(t.li,{children:["Scenario 5: ",(0,a.jsx)(t.strong,{children:"Single-table query"}),", COUNT, 180 million rows per day."]}),"\n",(0,a.jsxs)(t.li,{children:["Scenario 6: ",(0,a.jsx)(t.strong,{children:"Multi-table query"}),", (Table A: 180 million rows, SUM, COUNT; Table B: 1.5 million rows, bitmap aggregation), aggregate Table A and Table B, join them with Table C, and then join the sub-tables, six joins in total."]}),"\n",(0,a.jsx)(t.li,{children:"Scenario 7: Single-table query, 500 million rows of itemized data"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"The results are as below:"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"performance-after-vectorization",src:n(157907).Z+"",width:"1280",height:"591"})}),"\n",(0,a.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,a.jsx)(t.p,{children:"In short, what contributed to the fast data loading and data queries in this case?"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"The Colocate mechanism that's designed for distributed computing"}),"\n",(0,a.jsxs)(t.li,{children:["Collaboration between database users and ",(0,a.jsx)(t.a,{href:"https://join.slack.com/t/apachedoriscommunity/shared_invite/zt-2unfw3a3q-MtjGX4pAd8bCGC1UV0sKcw",children:"developers"})," that enables the operator merging"]}),"\n",(0,a.jsx)(t.li,{children:"Support for a wide range of data loading methods to choose from"}),"\n",(0,a.jsx)(t.li,{children:"A vectorized engine that brings overall performance increase"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"It takes efforts from both the database developers and users to make fast performance possible. The user's experience and knowledge of their own status quo will allow them to figure out the quickest path, while a good database design will help pave the way and make users' life easier."})]})}function d(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},284502:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/Zhihu_1-7c5ee52877c98c9502ba57d03becdd9b.png"},636474:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/Zhihu_2-6f75c0c47ef7106018774d6a70bf0e99.png"},129389:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/Zhihu_3-a6af7fe391aa9eaa717e558112e38d18.png"},468339:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/Zhihu_4-ad4a6e9be6d812a88220544a77ce1c73.png"},337918:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/Zhihu_5-8ad26e082d2a60188e8928ab82192330.png"},941861:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/Zhihu_6-10aa0935e2acd8774b0cb1f70d7013e8.png"},301100:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/Zhihu_7-5eacf11ecef47a4bdebd2b820d1f2bd6.png"},157907:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/Zhihu_8-db8b7d375c494f0e806a2286ea9144b0.png"},250065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return o}});var i=n(667294);let a={},s=i.createContext(a);function o(e){let t=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(s.Provider,{value:t},e.children)}},164964:function(e){e.exports=JSON.parse('{"permalink":"/zh-CN/blog/Database-Dissection-How-Fast-Data-Queries-Are-Implemented","source":"@site/blog/Database-Dissection-How-Fast-Data-Queries-Are-Implemented.md","title":"Database dissection: how fast data queries are implemented","description":"What\'s more important than quick performance itself is the architectural design and mechanism that enable it.","date":"2023-07-16T00:00:00.000Z","tags":[{"inline":true,"label":"Best Practice","permalink":"/zh-CN/blog/tags/best-practice"}],"hasTruncateMarker":false,"authors":[{"name":"Rong Hou","key":null,"page":null}],"frontMatter":{"title":"Database dissection: how fast data queries are implemented","description":"What\'s more important than quick performance itself is the architectural design and mechanism that enable it.","date":"2023-07-16","author":"Rong Hou","tags":["Best Practice"],"image":"/images/how-fast-data-queries-are-implemented.png"},"unlisted":false,"prevItem":{"title":"Apache Doris announced the official release of version 1.2.6","permalink":"/zh-CN/blog/release-note-1.2.6"},"nextItem":{"title":"Listen to that poor BI engineer: we need fast joins","permalink":"/zh-CN/blog/Listen-to-That-Poor-BI-Engineer-We-Need-Fast-Joins"}}')}}]);