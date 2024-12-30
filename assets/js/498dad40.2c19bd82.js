"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["576079"],{431353:function(e,n,i){i.r(n),i.d(n,{assets:function(){return l},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return o},metadata:function(){return t},toc:function(){return c}});var t=i(718259),s=i(785893),r=i(250065);let o={title:"Migrating from ClickHouse to Apache Doris: what happened?",description:"A user of Apache Doris has written down their migration process from ClickHouse to Doris, including why they need the change, what needs to be taken care of, and how they compare the performance of the two databases in their environment. ",date:"2023-10-11",author:"Chuang Li",tags:["Best Practice"],image:"/images/e-commerce.png"},a=void 0,l={authorsImageUrls:[void 0]},c=[{value:"Replacing Kylin, ClickHouse, and Druid with Apache Doris",id:"replacing-kylin-clickhouse-and-druid-with-apache-doris",level:2},{value:"The Replacement Surgery",id:"the-replacement-surgery",level:2},{value:"Changes in SQL statements",id:"changes-in-sql-statements",level:3},{value:"Changes in data ingestion methods",id:"changes-in-data-ingestion-methods",level:3},{value:"Pressure Test",id:"pressure-test",level:2},{value:"SQL query performance",id:"sql-query-performance",level:3},{value:"Join query performance",id:"join-query-performance",level:3},{value:"Future Directions",id:"future-directions",level:2}];function h(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Migrating from one OLAP database to another is huge. Even if you're unhappy with your current data tool and have found some promising candidate, you might still hesitate to do the big surgery on your data architecture, because you're uncertain about how things are going to work. So you need experience shared by someone who has walked the path."}),"\n",(0,s.jsx)(n.p,{children:"Luckily, a user of Apache Doris has written down their migration process from ClickHouse to Doris, including why they need the change, what needs to be taken care of, and how they compare the performance of the two databases in their environment."}),"\n",(0,s.jsx)(n.p,{children:"To decide whether you want to continue reading, check if you tick one of the following boxes:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"You need your join queries to be executed faster."}),"\n",(0,s.jsx)(n.li,{children:"You need flexible data updates."}),"\n",(0,s.jsx)(n.li,{children:"You need real-time data analysis."}),"\n",(0,s.jsx)(n.li,{children:"You need to minimize your components."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"If you do, this post might be of some help to you."}),"\n",(0,s.jsx)(n.h2,{id:"replacing-kylin-clickhouse-and-druid-with-apache-doris",children:"Replacing Kylin, ClickHouse, and Druid with Apache Doris"}),"\n",(0,s.jsx)(n.p,{children:"The user undergoing this change is an e-commerce SaaS provider. Its data system serves realtime and offline reporting, customer segmentation, and log analysis. Initially, they used different OLAP engines for these various purposes:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Apache Kylin for offline reporting"}),": The system provides offline reporting services for over 5 million sellers. The big ones among them have more than 10 million registered members and 100,000 SKU, and the detailed information is put into over 400 data cubes on the platform."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ClickHouse for customer segmentation and Top-N log queries"}),": This entails high-frequency updates, high QPS, and complicated SQL."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Apache Druid for real-time reporting"}),": Sellers extract data they need by combining different dimensions, and such real-time reporting requires quick data updates, quick query response, and strong stability of the system."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"ClickHouse-Druid-Apache-Kylin",src:i(133120).Z+"",width:"1280",height:"529"})}),"\n",(0,s.jsx)(n.p,{children:"The three components have their own sore spots."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Apache Kylin"})," runs well with a fixed table schema, but every time you want to add a dimension, you need to create a new data cube and refill the historical data in it."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ClickHouse"})," is not designed for multi-table processing, so you might need an extra solution for federated queries and multi-table join queries. And in this case, it was below expectation in high-concurrency scenarios."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Apache Druid"})," implements idempotent writing so it does not support data updating or deletion itself. That means when there is something wrong at the upstream, you will need a full data replacement. And such data fixing is a multi-step process if you think it all the way through, because of all the data backups and movements. Plus, newly ingested data will not be accessible for queries until it is put in segments in Druid. That means a longer window such that data inconsistency between upstream and downstream."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"As they work together, this architecture might be too demanding to navigate because it requires knowledge of all these components in terms of development, monitoring, and maintenance. Also, every time the user scales a cluster, they must stop the current cluster and migrate all databases and tables, which is not only a big undertaking but also a huge interruption to business."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Replace-ClickHouse-Druid-Apache-Kylin-with-Apache-Doris",src:i(250040).Z+"",width:"1280",height:"529"})}),"\n",(0,s.jsx)(n.p,{children:"Apache Doris fills these gaps."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Query performance"}),": Doris is good at high-concurrency queries and join queries, and it is now equipped with inverted index to speed up searches in logs."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Data update"}),": The Unique Key model of Doris supports both large-volume update and high-freqency real-time writing, and the Duplicate Key model and Unique Key model supports partial column update. It also provides exactly-once guarantee in data writing and ensures consistency between base tables, materialized views, and replicas."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Maintenance"}),": Doris is MySQL-compatible. It supports easy scaling and light schema change. It comes with its own integration tools such as Flink-Doris-Connector and Spark-Doris-Connector."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"So they plan on the migration."}),"\n",(0,s.jsx)(n.h2,{id:"the-replacement-surgery",children:"The Replacement Surgery"}),"\n",(0,s.jsx)(n.p,{children:"ClickHouse was the main performance bottleneck in the old data architecture and why the user wanted the change in the first place, so they started with ClickHouse."}),"\n",(0,s.jsx)(n.h3,{id:"changes-in-sql-statements",children:"Changes in SQL statements"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Table creation statements"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"table-creation-statements-in-ClickHouse-and-Apache-Doris",src:i(844106).Z+"",width:"1280",height:"426"})}),"\n",(0,s.jsx)(n.p,{children:"The user built their own SQL rewriting tool that can convert a ClickHouse table creation statement into a Doris table creation statement. The tool can automate the following changes:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Mapping the field types"}),": It converts ClickHouse field types into the corresponding ones in Doris. For example, it converts String as a Key into Varchar, and String as a partitioning field into Date V2."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Setting the number of historical partitions in dynamic partitioning tables"}),': Some tables have historical partitions and the number of partitions should be specified upon table creation in Doris, otherwise a "No Partition" error will be thrown.']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Determining the number of buckets"}),": It decides the number of buckets based on the data volume of historical partitions; for non-partitioned tables, it decides the bucketing configurations based on the historical data volume."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Determining TTL"}),": It decides the time to live of partitions in dynamic partitioning tables."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Setting the import sequence"}),": For the Unique Key model of Doris, it can specify the data import order based on the Sequence column to ensure orderliness in data ingestion."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"changes-in-table-creation-statements-from-ClickHouse-to-Apache-Doris",src:i(676750).Z+"",width:"1280",height:"881"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Query statements"})}),"\n",(0,s.jsx)(n.p,{children:"Similarly, they have their own tool to transform the ClickHouse query statements into Doris query statements. This is to prepare for the comparison test between ClickHouse and Doris. The key considerations in the conversions include:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Conversion of table names"}),": This is simple given the mapping rules in table creation statements."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Conversion of functions"}),": For example, the ",(0,s.jsx)(n.code,{children:"COUNTIF"})," function in ClickHouse is equivalent to ",(0,s.jsx)(n.code,{children:"SUM(CASE WHEN_THEN 1 ELSE 0)"}),", ",(0,s.jsx)(n.code,{children:"Array Join"})," is equivalent to ",(0,s.jsx)(n.code,{children:"Explode"})," and ",(0,s.jsx)(n.code,{children:"Lateral View"}),", and ",(0,s.jsx)(n.code,{children:"ORDER BY"})," and ",(0,s.jsx)(n.code,{children:"GROUP BY"})," should be converted to window functions."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Difference"})," ",(0,s.jsx)(n.strong,{children:"in semantics"}),": ClickHouse goes by its own protocol while Doris is MySQL-compatible, so there needs to be alias for subqueries. In this use case, subqueries are common in customer segmentation, so they use ",(0,s.jsx)(n.code,{children:"sqlparse"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"changes-in-data-ingestion-methods",children:"Changes in data ingestion methods"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"changes-in-data-ingestion-methods-from-ClickHouse-to-Apache-Doris",src:i(442519).Z+"",width:"1280",height:"642"})}),"\n",(0,s.jsx)(n.p,{children:"Apache Doris provides broad options of data writing methods. For the real-time link, the user adopts Stream Load to ingest data from NSQ and Kafka."}),"\n",(0,s.jsx)(n.p,{children:"For the sizable offline data, the user tested different methods and here are the takeouts:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Insert Into"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Using Multi-Catalog to read external data sources and ingesting with Insert Into can serve most needs in this use case."}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Stream Load"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The Spark-Doris-Connector is a more general method. It can handle large data volumes and ensure writing stability. The key is to find the right writing pace and parallelism."}),"\n",(0,s.jsx)(n.p,{children:"The Spark-Doris-Connector also supports Bitmap. It allows you to move the computation workload of Bitmap data in Spark clusters."}),"\n",(0,s.jsx)(n.p,{children:"Both the Spark-Doris-Connector and the Flink-Doris-Connector rely on Stream Load. CSV is the recommended format choice. Tests on the user's billions of rows showed that CSV was 40% faster than JSON."}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Spark Load"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The Spark Load method utilizes Spark resources for data shuffling and ranking. The computation results are put in HDFS, and then Doris reads the files from HDFS directly (via Broker Load). This approach is ideal for huge data ingestion. The more data there is, the faster and more resource-efficient the ingestion is."}),"\n",(0,s.jsx)(n.h2,{id:"pressure-test",children:"Pressure Test"}),"\n",(0,s.jsx)(n.p,{children:"The user compared performance of the two components on their SQL and join query scenarios, and calculated the CPU and memory consumption of Apache Doris."}),"\n",(0,s.jsx)(n.h3,{id:"sql-query-performance",children:"SQL query performance"}),"\n",(0,s.jsx)(n.p,{children:"Apache Doris outperformed ClickHouse in 10 of the 16 SQL queries, and the biggest performance gap was a ratio of almost 30. Overall, Apache Doris was 2~3 times faster than ClickHouse."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"SQL-query-performance-ClickHouse-VS-Apache-Doris",src:i(260858).Z+"",width:"1313",height:"1057"})}),"\n",(0,s.jsx)(n.h3,{id:"join-query-performance",children:"Join query performance"}),"\n",(0,s.jsx)(n.p,{children:"For join query tests, the user used different sizes of main tables and dimension tables."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Primary tables"}),": user activity table (4 billion rows), user attribute table (25 billion rows), and user attribute table (96 billion rows)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Dimension tables"}),": 1 million rows, 10 million rows, 50 million rows, 100 million rows, 500 million rows, 1 billion rows, and 2.5 billion rows."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The tests include ",(0,s.jsx)(n.strong,{children:"full join queries"})," and ",(0,s.jsx)(n.strong,{children:"filtering join queries"}),". Full join queries join all rows of the primary table and dimension tables, while filtering join queries retrieve data of a certain seller ID with a ",(0,s.jsx)(n.code,{children:"WHERE"})," filter. The results are concluded as follows:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Primary table (4 billion rows):"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Full join queries: Doris outperforms ClickHouse in full join queries with all dimension tables. The performance gap widens as the dimension tables get larger. The largest difference is a ratio of 5."}),"\n",(0,s.jsx)(n.li,{children:"Filtering join queries: Based on the seller ID, the filter screened out 41 million rows from the primary table. With small dimension tables, Doris was 2~3 times faster than ClickHouse; with large dimension tables, Doris was over 10 times faster; with dimension tables larger than 100 million rows, ClickHouse threw an OOM error and Doris functions normally."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Primary table (25 billion rows):"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Full join queries: Doris outperforms ClickHouse in full join queries with all dimension tables. ClickHouse produced an OOM error with dimension tables larger than 50 million rows."}),"\n",(0,s.jsx)(n.li,{children:"Filtering join queries: The filter screened out 570 million rows from the primary table. Doris responded within seconds and ClickHouse finished within minutes and broke down when joining large dimension tables."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Primary table (96 billion rows):"})}),"\n",(0,s.jsx)(n.p,{children:"Doris delivered relatively quick performance in all queries and ClickHouse was unable to execute all of them."}),"\n",(0,s.jsx)(n.p,{children:"In terms of CPU and memory consumption, Apache Doris maintained stable cluster loads in all sizes of join queries."}),"\n",(0,s.jsx)(n.h2,{id:"future-directions",children:"Future Directions"}),"\n",(0,s.jsxs)(n.p,{children:["As the migration goes on, the user works closely with the ",(0,s.jsx)(n.a,{href:"https://join.slack.com/t/apachedoriscommunity/shared_invite/zt-2unfw3a3q-MtjGX4pAd8bCGC1UV0sKcw",children:"Doris community"}),", and their feedback has contributed to the making of ",(0,s.jsx)(n.a,{href:"https://doris.apache.org/docs/dev/releasenotes/release-2.0.0/",children:"Apache Doris 2.0.0"}),". We will continue assisting them in their migration from Kylin and Druid to Doris, and we look forward to see their Doris-based unified data platform come into being."]})]})}function d(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},133120:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/youzan-1-21f1d14ff97ac4bbf038e58c72a95e85.png"},250040:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/youzan-2-2f605efbaf41cb9b534ea86c82b209a8.png"},844106:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/youzan-3-80a2c58fe513a6bbf303d5b95a023fd9.png"},676750:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/youzan-4-3ee70bd47be6c98aeef15c24027bfb07.png"},442519:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/youzan-5-8223b76f140f27992ef2d3843ed7d572.png"},260858:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/youzan-6-a4a80e719c4ef27b9db683b502796fce.png"},250065:function(e,n,i){i.d(n,{Z:function(){return a},a:function(){return o}});var t=i(667294);let s={},r=t.createContext(s);function o(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}},718259:function(e){e.exports=JSON.parse('{"permalink":"/blog/migrating-from-clickhouse-to-apache-doris-what-happened","source":"@site/blog/migrating-from-clickhouse-to-apache-doris-what-happened.md","title":"Migrating from ClickHouse to Apache Doris: what happened?","description":"A user of Apache Doris has written down their migration process from ClickHouse to Doris, including why they need the change, what needs to be taken care of, and how they compare the performance of the two databases in their environment. ","date":"2023-10-11T00:00:00.000Z","tags":[{"inline":true,"label":"Best Practice","permalink":"/blog/tags/best-practice"}],"hasTruncateMarker":false,"authors":[{"name":"Chuang Li","key":null,"page":null}],"frontMatter":{"title":"Migrating from ClickHouse to Apache Doris: what happened?","description":"A user of Apache Doris has written down their migration process from ClickHouse to Doris, including why they need the change, what needs to be taken care of, and how they compare the performance of the two databases in their environment. ","date":"2023-10-11","author":"Chuang Li","tags":["Best Practice"],"image":"/images/e-commerce.png"},"unlisted":false,"prevItem":{"title":"Apache Doris announced the official release of version 2.0.2","permalink":"/blog/release-2.0.2"},"nextItem":{"title":"Introduction to Apache Doris: a next-generation real-time data warehouse","permalink":"/blog/introduction-to-apache-doris-a-next-generation-real-time-data-warehouse"}}')}}]);