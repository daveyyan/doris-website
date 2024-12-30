"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["615945"],{57900:function(e,i,n){n.r(i),n.d(i,{assets:function(){return a},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return h},metadata:function(){return s},toc:function(){return o}});var s=n(896421),r=n(785893),t=n(250065);let h={title:"Apache Doris 2.1.4 just released",summary:"In this update, we have optimized various functional experiences for data lakehouse, with a focus on resolving the abnormal memory usage issue in the previous version.",description:"In this update, we have optimized various functional experiences for data lakehouse scenarios, with a focus on resolving the abnormal memory usage issue in the previous version.",date:"2024-06-26",author:"Apache Doris",tags:["Release Notes"],image:"/images/2.1.4.jpg"},l=void 0,a={authorsImageUrls:[void 0]},o=[{value:"Behavior changes",id:"behavior-changes",level:2},{value:"New features",id:"new-features",level:2},{value:"Query Optimizer",id:"query-optimizer",level:3},{value:"Lakehouse",id:"lakehouse",level:3},{value:"Asynchronous Materialized Views",id:"asynchronous-materialized-views",level:3},{value:"Others",id:"others",level:3},{value:"Improvements",id:"improvements",level:2},{value:"Bug fixes",id:"bug-fixes",level:2},{value:"Query Optimizer",id:"query-optimizer-1",level:3},{value:"Query Execution",id:"query-execution",level:3},{value:"Asynchronous Materialized Views",id:"asynchronous-materialized-views-1",level:3},{value:"Semi-structured",id:"semi-structured",level:3},{value:"Primary Key",id:"primary-key",level:3},{value:"Lakehouse",id:"lakehouse-1",level:3},{value:"Data Import",id:"data-import",level:3},{value:"Data Management",id:"data-management",level:3},{value:"Memory Management",id:"memory-management",level:3},{value:"Permissions",id:"permissions",level:3},{value:"Others",id:"others-1",level:3},{value:"Credits",id:"credits",level:2}];function c(e){let i={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.p,{children:"Dear community, Apache Doris version 2.1.4 was released on June 26, 2024. In this update, we have optimized various functional experiences for data lakehouse scenarios, with a focus on resolving the abnormal memory usage issue in the previous version. Additionally, we have implemented several improvemnents and bug fixes to enhance the stability.  Welcome to download and use it."}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Quick Download:"})," ",(0,r.jsx)(i.a,{href:"https://doris.apache.org/download/",children:"https://doris.apache.org/download/"})]}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"GitHub Release:"})," ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/releases",children:"https://github.com/apache/doris/releases"})]}),"\n",(0,r.jsx)(i.h2,{id:"behavior-changes",children:"Behavior changes"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Non-existent files will be ignored when querying external tables such as Hive. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/35319",children:"#35319"})]}),"\n",(0,r.jsx)(i.p,{children:"The file list is obtained from the meta cache, and it may not be consistent with the actual file list."}),"\n",(0,r.jsx)(i.p,{children:"Ignoring non-existent files helps to avoid query errors."}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["By default, creating a Bitmap Index will no longer be automatically changed to an Inverted Index. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/35521",children:"#35521"})]}),"\n",(0,r.jsxs)(i.p,{children:["This behavior is controlled by the FE configuration item ",(0,r.jsx)(i.code,{children:"enable_create_bitmap_index_as_inverted_index"}),", which defaults to false."]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["When starting FE and BE processes using ",(0,r.jsx)(i.code,{children:"--console"}),", all logs will be output to the standard output and differentiated by prefixes indicating the log type. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/35679",children:"#35679"})]}),"\n",(0,r.jsx)(i.p,{children:"For more infomation, please see the documentations:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.a,{href:"https://doris.apache.org/docs/admin-manual/log-management/fe-log",children:"Log Management - FE Log"})}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.a,{href:"https://doris.apache.org/docs/admin-manual/log-management/be-log",children:"Log Management - BE Log"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["If no table comment is provided when creating a table, the default comment will be empty instead of using the table type as the default comment. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/36025",children:"#36025"})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["The default precision of DECIMALV3 has been adjusted from (9, 0) to (38, 9) to maintain compatibility with the version in which this feature was initially released. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/36316",children:"#36316"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"new-features",children:"New features"}),"\n",(0,r.jsx)(i.h3,{id:"query-optimizer",children:"Query Optimizer"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"Support FE flame graph tool"}),"\n",(0,r.jsxs)(i.p,{children:["For more information, see the ",(0,r.jsx)(i.a,{href:"https://doris.apache.org/community/developer-guide/fe-profiler",children:"documentation"})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Support ",(0,r.jsx)(i.code,{children:"SELECT DISTINCT"})," to be used with aggregation."]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Support single table query rewrite without ",(0,r.jsx)(i.code,{children:"GROUP BY"}),". This is useful for complex filters or expressions. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/35242",children:"#35242"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["The new optimizer fully supports point query functionality ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/36205",children:"#36205"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"lakehouse",children:"Lakehouse"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Support native reader of Apache Paimon deletion vector  ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/35241",children:"#35241"})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Support using Resource in Table Valued Functions ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/35139",children:"#35139"})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"Access controller with Hive Ranger plugin supports Data Mask"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"asynchronous-materialized-views",children:"Asynchronous Materialized Views"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Support partition roll-up during construction. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/31812",children:"#31812"})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Support triggered updates during construction. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/34548",children:"#34548"})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Support specifying the ",(0,r.jsx)(i.code,{children:"store_row_column"})," and ",(0,r.jsx)(i.code,{children:"storage_medium"})," attribute during construction. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/35860",children:"#35860"})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Transparent rewrite supports single table asynchronous materialized views. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/34646",children:"#34646"})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Transparent rewrite supports ",(0,r.jsx)(i.code,{children:"AGG_STATE"})," type aggregation roll-up. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/35026",children:"#35026"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"others",children:"Others"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Added function ",(0,r.jsx)(i.code,{children:"replace_empty"}),"."]}),"\n",(0,r.jsxs)(i.p,{children:["For more information, see ",(0,r.jsx)(i.a,{href:"https://doris.apache.org/docs/sql-manual/sql-functions/string-functions/replace_empty",children:"documentation"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Support ",(0,r.jsx)(i.code,{children:"show storage policy using"})," statement."]}),"\n",(0,r.jsxs)(i.p,{children:["For more information, see ",(0,r.jsx)(i.a,{href:"https://doris.apache.org/docs/sql-manual/sql-statements/Show-Statements/SHOW-STORAGE-POLICY-USING/",children:"documentation"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"Support JVM metrics on the BE side."}),"\n",(0,r.jsxs)(i.p,{children:["By setting ",(0,r.jsx)(i.code,{children:"enable_jvm_monitor=true"})," in ",(0,r.jsx)(i.code,{children:"be.conf"})," to enable this feature."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"improvements",children:"Improvements"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Supported creating inverted indexes for columns with Chinese names. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/36321",children:"#36321"})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Estimate memory consumed by segment cache more accurately so that unused memory can be released more quickly. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/35751",children:"#35751"})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Filter empty partitions before exporting tables to remote storage. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/35542",children:"#35542"})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Optimize routine load task allocation algorithm to balance the load among Backends. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/34778",children:"#34778"})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Provide hints when a related variable is not found during a set operation. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/35775",children:"#35775"})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Support placing Java UDF jar files in the FE's ",(0,r.jsx)(i.code,{children:"custom_lib"})," directory for default loading. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/35984",children:"#35984"})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Add a timeout global variable ",(0,r.jsx)(i.code,{children:"audit_plugin_load_timeout"})," for audit log load jobs."]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"Optimize the performance of transparent rewrite planning for asynchronous materialized views."}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Optimize the ",(0,r.jsx)(i.code,{children:"INSERT"})," operation that when the source is empty, the BE will not execute. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/34418",children:"#34418"})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Support fetching file lists of Hive/Hudi tables in batches. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/35107",children:"#35107"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"bug-fixes",children:"Bug fixes"}),"\n",(0,r.jsx)(i.h3,{id:"query-optimizer-1",children:"Query Optimizer"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Fixed the issue where SQL cache returns old results after truncating a partition. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/34698",children:"#34698"})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Fixed the issue where casting from JSON to other types did not correctly handle nullable attributes. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/34707",children:"#34707"})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Fixed occasional DATETIMEV2 literal simplification errors. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/35153",children:"#35153"})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Fixed the issue where ",(0,r.jsx)(i.code,{children:"COUNT(*)"})," could not be used in window functions. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/35220",children:"#35220"})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Fixed the issue where nullable attributes could be incorrect when all ",(0,r.jsx)(i.code,{children:"SELECT"})," statements under ",(0,r.jsx)(i.code,{children:"UNION ALL"})," have no ",(0,r.jsx)(i.code,{children:"FROM"})," clause. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/35074",children:"#35074"})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Fixed the issue where ",(0,r.jsx)(i.code,{children:"bitmap in join"})," and subquery unnesting could not be used simultaneously. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/35435",children:"#35435"})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Fixed the performance issue where filter conditions could not be pushed down to the CTE producer in specific situations. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/35463",children:"#35463"})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Fixed the issue where aggregate combinators written in uppercase could not be found. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/35540",children:"#35540"})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Fixed the performance issue where window functions were not properly pruned by column pruning. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/35504",children:"#35504"})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Fixed the issue where queries might parse incorrectly leading to wrong results when multiple tables with the same name but in different databases appeared simultaneously in the query. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/35571",children:"#35571"})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Fixed the query error caused by generating runtime filters during schema table scans. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/35655",children:"#35655"})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Fixed the issue where nested correlated subqueries could not execute because the join condition was folded into a null literal. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/35811",children:"#35811"})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Fixed the occasional issue where decimal literals were set with incorrect precision during planning. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/36055",children:"#36055"})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Fixed the occasional issue where multiple layers of aggregation were merged incorrectly during planning. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/36145",children:"#36145"})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Fixed the occasional issue where the input-output mismatch error occurred after aggregate expansion planning. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/36207",children:"#36207"})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Fixed the occasional issue where ",(0,r.jsx)(i.code,{children:"<=>"})," was incorrectly converted to ",(0,r.jsx)(i.code,{children:"="}),". ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/36521",children:"#36521"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"query-execution",children:"Query Execution"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Fixed the issue where the query hangs if the limited rows are reached on the pipeline engine and memory is not released. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/35746",children:"#35746"})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Fixed the BE coredump when ",(0,r.jsx)(i.code,{children:"enable_decimal256"})," is true but falls back to the old planner. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/35731",children:"#35731"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"asynchronous-materialized-views-1",children:"Asynchronous Materialized Views"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Fixed the issue where asynchronous materialized views caused backup and restore exceptions. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/35703",children:"#35703"})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Fixed the issue where partition rewrite could lead to incorrect results. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/35236",children:"#35236"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"semi-structured",children:"Semi-structured"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Fixed the core dump problem when a VARIANT with an empty key is used. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/35671",children:"#35671"})]}),"\n",(0,r.jsxs)(i.li,{children:["Bitmap and BloomFilter index should not perform light index changes. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/35225",children:"#35225"})]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"primary-key",children:"Primary Key"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Fixed the issue where an exception BE restart occurred in the case of partial column updates during import, which could result in duplicate keys. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/35678",children:"#35678"})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Fixed the issue where BE might core dump during clone operations when memory is tight. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/34702",children:"#34702"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"lakehouse-1",children:"Lakehouse"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Fixed the issue where a Hive table could not be created with a fully qualified name such as ",(0,r.jsx)(i.code,{children:"ctl.db.tbl"})," ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/34984",children:"#34984"})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Fixed the issue where the Hive metastore connection did not close when refreshing ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/35426",children:"#35426"})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Fixed a potential meta replay issue when upgrading from 2.0.x to 2.1.x. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/35532",children:"#35532"})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Fixed the issue where the Table Valued Function could not read an empty snappy compressed file. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/34926",children:"#34926"})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Fixed the issue where unable to read Parquet files with invalid min-max column statistics ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/35041",children:"#35041"})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Fixed the issue where unable to handle pushdown predicates with null-aware functions in the Parquet/ORC reader ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/35335",children:"#35335"})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Fixed the issue about the order of partition columns when creating a Hive table ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/35347",children:"#35347"})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Fixed the issue where writing to a Hive table on S3 failed when partition values contained spaces ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/35645",children:"#35645"})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Fixed the issue about incorrect scheme of Aliyun OSS endpoint ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/34907",children:"#34907"})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Fixed the issue where the Parquet format Hive table written by Doris could not be read by Hive ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/34981",children:"#34981"})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Fixed the issue where unable to read ORC files after the schema change of a Hive table ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/35583",children:"#35583"})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Fixed the issue where unable to read Paimon tables via JNI after the schema change of the Paimon table ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/35309",children:"#35309"})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Fixed the issue of too small Row Groups in Parquet format files written out. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/36042",children:"#36042"})," ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/36143",children:"#36143"})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Fixed the issue where unable to read Paimon tables after schema changes ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/36049",children:"#36049"})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Fixed the issue where unable to read Hive Parquet format tables after schema changes ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/36182",children:"#36182"})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Fixed the FE OOM issue caused by Hadoop FS cache ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/36403",children:"#36403"})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Fixed the issue where FE could not start after enabling the Hive Metastore Listener ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/36533",children:"#36533"})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Fixed the issue of query performance degradation with a large number of files ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/36431",children:"#36431"})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Fixed the timezone issue when reading the timestamp column type in Iceberg ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/36435",children:"#36435"})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Fixed DATETIME conversion error and data path error on Iceberg Table. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/35708",children:"#35708"})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Support retain and pass the additional user-defined properties fo Table Valued Functions to the S3 SDK. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/35515",children:"#35515"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"data-import",children:"Data Import"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Fixed the issue where ",(0,r.jsx)(i.code,{children:"CANCEL LOAD"})," did not work ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/35352",children:"#35352"})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Fixed the issue where a null pointer error in the Publish phase of load transactions prevented the load from completing ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/35977",children:"#35977"})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Fixed the issue with bRPC serializing large data files when sent via HTTP ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/36169",children:"#36169"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"data-management",children:"Data Management"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Fixed the isseu that the resource tag in ConnectionContext was not set after forwarding DDL or DML to master FE. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/35618",children:"#35618"})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Fixed the issue where the restored table name was incorrect when ",(0,r.jsx)(i.code,{children:"lower_case_table_names"})," was enabled ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/35508",children:"#35508"})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Fixed the issue where ",(0,r.jsx)(i.code,{children:"admin clean trash"})," could not work ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/35271",children:"#35271"})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Fixed the issue where a storage policy could not be deleted from a partition ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/35874",children:"#35874"})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Fixed the issue of data loss when importing into a multi-replica automatic partition table ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/36586",children:"#36586"})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Fixed the issue where the partition column of a table changed when querying or inserting into an automatic partition table using the old optimizer ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/36514",children:"#36514"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"memory-management",children:"Memory Management"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Fixed the issue of frequent errors in the logs due to failure in obtaining Cgroup meminfo. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/35425",children:"#35425"})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Fixed the issue where the Segment cache size was uncontrolled when using BloomFilter, leading to abnormal process memory growth. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/34871",children:"#34871"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"permissions",children:"Permissions"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Fixed the issue where permission settings were ineffective after enabling case-insensitive table names. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/36557",children:"#36557"})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Fixed the issue where setting LDAP passwords through non-Master FE nodes did not take effect. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/36598",children:"#36598"})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Fixed the issue where authorization could not be checked for the ",(0,r.jsx)(i.code,{children:"SELECT COUNT(*)"})," statement. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/35465",children:"#35465"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"others-1",children:"Others"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Fixed the issue where the client JDBC program could not close the connection if the MySQL connection was broken. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/36616",children:"#36616"})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Fixed MySQL protocol compatibility issue with the ",(0,r.jsx)(i.code,{children:"SHOW PROCEDURE STATUS"})," statement. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/35350",children:"#35350"})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.code,{children:"libevent"})," now forces Keepalive to solve the issue of connection leaks in certain situations. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/36088",children:"#36088"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"credits",children:"Credits"}),"\n",(0,r.jsx)(i.p,{children:"Thanks to every one who contributes to this release."}),"\n",(0,r.jsx)(i.p,{children:"@airborne12, @amorynan, @AshinGau, @BePPPower, @BiteTheDDDDt, @ByteYue, @caiconghui, @CalvinKirs, @cambyzju, @catpineapple, @cjj2010, @csun5285, @DarvenDuan, @dataroaring, @deardeng, @Doris-Extras, @eldenmoon, @englefly, @feiniaofeiafei, @felixwluo, @freemandealer, @Gabriel39, @gavinchou, @GoGoWen, @HappenLee, @hello-stephen, @hubgeter, @hust-hhb, @jacktengg, @jackwener, @jeffreys-cat, @Jibing-Li, @kaijchen, @kaka11chen, @Lchangliang, @liaoxin01, @LiBinfeng-01, @lide-reed, @luennng, @luwei16, @mongo360, @morningman, @morrySnow, @mrhhsg, @Mryange, @mymeiyi, @nextdreamblue, @platoneko, @qidaye, @qzsee, @seawinde, @shuke987, @sollhui, @starocean999, @suxiaogang223, @TangSiyang2001, @Thearas, @Vallishp, @w41ter, @wangbo, @whutpencil, @wsjz, @wuwenchi, @xiaokang, @xiedeyantu, @XieJiann, @xinyiZzz, @XuPengfei-1020, @xy720, @xzj7019, @yiguolei, @yongjinhou, @yujun777, @Yukang-Lian, @Yulei-Yang, @zclllyybb, @zddr, @zfr9527, @zgxme, @zhangbutao, @zhangstar333, @zhannngchen, @zhiqiang-hhhh, @zy-kkk, @zzzxl1993"})]})}function d(e={}){let{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,i,n){n.d(i,{Z:function(){return l},a:function(){return h}});var s=n(667294);let r={},t=s.createContext(r);function h(e){let i=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:h(e.components),s.createElement(t.Provider,{value:i},e.children)}},896421:function(e){e.exports=JSON.parse('{"permalink":"/blog/release-note-2.1.4","source":"@site/blog/release-note-2.1.4.md","title":"Apache Doris 2.1.4 just released","description":"In this update, we have optimized various functional experiences for data lakehouse scenarios, with a focus on resolving the abnormal memory usage issue in the previous version.","date":"2024-06-26T00:00:00.000Z","tags":[{"inline":true,"label":"Release Notes","permalink":"/blog/tags/release-notes"}],"hasTruncateMarker":false,"authors":[{"name":"Apache Doris","key":null,"page":null}],"frontMatter":{"title":"Apache Doris 2.1.4 just released","summary":"In this update, we have optimized various functional experiences for data lakehouse, with a focus on resolving the abnormal memory usage issue in the previous version.","description":"In this update, we have optimized various functional experiences for data lakehouse scenarios, with a focus on resolving the abnormal memory usage issue in the previous version.","date":"2024-06-26","author":"Apache Doris","tags":["Release Notes"],"image":"/images/2.1.4.jpg"},"unlisted":false,"prevItem":{"title":"Apache Doris version 2.0.12 has been released","permalink":"/blog/release-note-2.0.12"},"nextItem":{"title":"Why Apache Doris is the best open source alternative to Rockset","permalink":"/blog/apache-doris-vs-rockset"}}')}}]);