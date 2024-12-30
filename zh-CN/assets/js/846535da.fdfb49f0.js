"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["92095"],{429903:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return r},metadata:function(){return i},toc:function(){return l}});var i=a(436223),s=a(785893),n=a(250065);let r={title:"From Elasticsearch to Apache Doris: upgrading an observability platform",description:"GuanceDB, an observability platform, replaces Elasticsearch with Apache Doris as its query and storage engine and realizes 70% less storage costs and 200%~400% data query performance.",date:"2023-12-14",author:"Apache Doris",tags:["Best Practice"],image:"/images/from-elasticsearch-to-apache-doris-upgrading-an-observability-platform.jpg"},o=void 0,c={authorsImageUrls:[void 0]},l=[{value:"GuanceDB",id:"guancedb",level:2},{value:"Data integration",id:"data-integration",level:3},{value:"Query &amp; storage engine",id:"query--storage-engine",level:3},{value:"DQL",id:"dql",level:2},{value:"Observations",id:"observations",level:2},{value:"Storage cost 70% down, query speed 300% up",id:"storage-cost-70-down-query-speed-300-up",level:3},{value:"Inverted index for full-text search",id:"inverted-index-for-full-text-search",level:3},{value:"A new data type for dynamic schema change",id:"a-new-data-type-for-dynamic-schema-change",level:3},{value:"Conclusion",id:"conclusion",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Observability platforms are akin to the immune system. Just like immune cells are everywhere in human bodies, an observability platform patrols every corner of your devices, components, and architectures, identifying any potential threats and proactively mitigating them. However, I might have gone too far with that metaphor, because till these days, we have never invented a system as sophisticated as the human body, but we can always make advancements."}),"\n",(0,s.jsx)(t.p,{children:"The key to upgrading an observability platform is to increase data processing speed and reduce costs. This is based on two reasons:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"The faster you can identify abnormalities from your data, the more you can contain the potential damage."}),"\n",(0,s.jsx)(t.li,{children:"An observability platform needs to store a sea of data, and low storage cost is the only way to make that sustainable."}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["This post is about how GuanceDB, an observability platform, makes progress in these two aspects by replacing Elasticsearch with Apache Doris as its query and storage engine. ",(0,s.jsx)(t.strong,{children:"The result is 70% less storage costs and 200%\uFF5E400% data query performance."})]}),"\n",(0,s.jsx)(t.h2,{id:"guancedb",children:"GuanceDB"}),"\n",(0,s.jsx)(t.p,{children:"GuanceDB is an all-around observability solution. It provides services including data analytics, data visualization, monitoring and alerting, and security inspection. From GuanceDB, users can have an understanding of their objects, network performance, applications, user experience, system availability, etc."}),"\n",(0,s.jsx)(t.p,{children:"From the standpoint of a data pipeline, GuanceDB can be divided into two parts: data ingestion and data analysis. I will get to them one by one."}),"\n",(0,s.jsx)(t.h3,{id:"data-integration",children:"Data integration"}),"\n",(0,s.jsx)(t.p,{children:"For data integration, GuanceDB uses its self-made tool called DataKit. It is an all-in-one data collector that extracts from different end devices, business systems, middleware, and data infrastructure. It can also preprocess data and relate it with metadata. It provides extensive support for data, from logs, and time series metrics, to data of distributed tracing, security events, and user behaviors from mobile APPs and web browsers. To cater to diverse needs across multiple scenarios, it ensures compatibility with various open-source probes and collectors as well as data sources of custom formats."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"observability-platform-architecture",src:a(40887).Z+"",width:"2000",height:"930"})}),"\n",(0,s.jsx)(t.h3,{id:"query--storage-engine",children:"Query & storage engine"}),"\n",(0,s.jsx)(t.p,{children:"Data collected by DataKit, goes through the core computation layer and arrive in GuanceDB, which is a multil-model database that combines various database technologies. It consists of the query engine layer and the storage engine layer. By decoupling the query engine and the storage engine, it enables pluggable and interchangeable architecture."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"observability-platform-query-engine-storage-engine",src:a(152326).Z+"",width:"2400",height:"1060"})}),"\n",(0,s.jsx)(t.p,{children:"For time series data, they built Metric Store, which is a self-developed storage engine based on VictoriaMetrics. For logs, they integrate Elasticsearch and OpenSearch. GuanceDB is performant in this architecture, while Elasticsearch demonstrates room for improvement:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Data writing"}),": Elasticsearch consumes a big share of CPU and memory resources. It is not only costly but also disruptive to query execution."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Schemaless support"}),": Elasticsearch provides schemaless support by Dynamic Mapping, but that's not enough to handle large amounts of user-defined fields. In this case, it can lead to field type conflict and thus data loss."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Data aggregation"}),": Large aggregation tasks often trigger a timeout error in Elasticsearch."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["So this is where the upgrade happens. GuanceDB tried and replaced Elasticsearch with ",(0,s.jsx)(t.a,{href:"https://doris.apache.org/",children:"Apache Doris"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"dql",children:"DQL"}),"\n",(0,s.jsx)(t.p,{children:"In the GuanceDB observability platform, almost all queries involve timestamp filtering. Meanwhile, most data aggregations need to be performed within specified time windows. Additionally, there is a need to perform rollups of time series data on individual sequences within a time window. Expressing these semantics using SQL often requires nested subqueries, resulting in complex and cumbersome statements."}),"\n",(0,s.jsx)(t.p,{children:"That's why GuanceDB developed their own Data Query Language (DQL). With simplified syntax elements and computing functions optimized for observability use cases, this DQL can query metrics, logs, object data, and data from distributed tracing."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"observability-platform-query-engine-storage-engine-apache-doris",src:a(223450).Z+"",width:"2400",height:"878"})}),"\n",(0,s.jsx)(t.p,{children:"This is how DQL works together with Apache Doris. GuanceDB has found a way to make full use of the analytic power of Doris, while complementing its SQL functionalities."}),"\n",(0,s.jsx)(t.p,{children:"As is shown below, Guance-Insert is the data writing component, while Guance-Select is the DQL query engine."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Guance-Insert"}),": It allows data of different tenants to be accumulated in different batches, and strikes a balance between writing throughput and writing latency. When logs are generated in large volumes, it can maintain a low data latency of 2~3 seconds."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Guance-Select"}),": For query execution, if the query SQL semantics or function is supported in Doris, Guance-Select will push the query down to the Doris Frontend for computation; if not, it will go for a fallback option: acquire columnar data in Arrow format via the Thrift RPC interface, and then finish computation in Guance-Select. The catch is that it cannot push the computation logic down to Doris Backend, so it can be slightly slower than executing queries in Doris Frontend."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"DQL-GranceDB-apache-doris",src:a(907905).Z+"",width:"2400",height:"984"})}),"\n",(0,s.jsx)(t.h2,{id:"observations",children:"Observations"}),"\n",(0,s.jsx)(t.h3,{id:"storage-cost-70-down-query-speed-300-up",children:"Storage cost 70% down, query speed 300% up"}),"\n",(0,s.jsxs)(t.p,{children:["Previously, with Elasticsearch clusters, they used 20 cloud virtual machines (16vCPU 64GB) and had independent index writing services (that's another 20 cloud virtual machines). Now with Apache Doris, they only need 13 cloud virtual machines of the same configuration in total, representing ",(0,s.jsx)(t.strong,{children:"a 67% cost reduction"}),". This is contributed by three capabilities of Apache Doris:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"High writing throughput"}),": Under a consistent writing throughput of 1GB/s, Doris maintains a CPU usage of less than 20%. That equals 2.6 cloud virtual machines. With low CPU usage, the system is more stable and better prepared for sudden writing peaks."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"writing-throughput-cpu-usage-apache-doris",src:a(163775).Z+"",width:"1948",height:"886"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"High data compression ratio"}),": Doris utilizes the ZSTD compression algorithm on top of columnar storage. It can realize a compression ratio of 8:1. Compared to 1.5:1 in Elasticsearch, Doris can reduce storage costs by around 80%."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"https://doris.apache.org/blog/Tiered-Storage-for-Hot-and-Cold-Data-What-Why-and-How",children:"Tiered storage"})}),': Doris allows a more cost-effective way to store data: to put hot data in local disks and cold data object storage. Once the storage policy is set, Doris can automatically manage the "cooldown" process of hot data and move cold data to object storage. Such data lifecycle is transparent to the data application layer so it is user-friendly. Also, Doris speeds up cold data queries by local cache.']}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"With lower storage costs, Doris does not compromise query performance. It doubles the execution speed of queries that return a single row and those that return a result set. For aggregation queries without sampling, Doris runs at 4 times the speed of Elasticsearch."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"To sum up, Apache Doris achieves 2~4 times the query performance of Elasticsearch with only 1/3 of the storage cost it consumes."})}),"\n",(0,s.jsx)(t.h3,{id:"inverted-index-for-full-text-search",children:"Inverted index for full-text search"}),"\n",(0,s.jsx)(t.p,{children:"Inverted index is the magic potion for log analytics because it can considerably increase full-text search performance and reduce query overheads."}),"\n",(0,s.jsx)(t.p,{children:"It is especially useful in these scenarios:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Full-text search by ",(0,s.jsx)(t.code,{children:"MATCH_ALL"}),", ",(0,s.jsx)(t.code,{children:"MATCH_ANY"}),", and ",(0,s.jsx)(t.code,{children:"MATCH_PHRASE"}),". ",(0,s.jsx)(t.code,{children:"MATCH_PHRASE"})," in combination with inverted index is the alternative to the Elasticsearch full-text search functionality."]}),"\n",(0,s.jsx)(t.li,{children:"Equivalence queries (=, ! =, IN), range queries (>, >=, <, <=), and support for numerics, datetime, and strings."}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-SQL",children:'CREATE TABLE httplog\n(\n  `ts` DATETIME,\n  `clientip` VARCHAR(20),\n  `request` TEXT,\n  INDEX idx_ip (`clientip`) USING INVERTED,\n  INDEX idx_req (`request`) USING INVERTED PROPERTIES("parser" = "english") \n)\nDUPLICATE KEY(`ts`)\n...\n\n-- Retrieve the latest 10 records of Client IP "8.8.8.8"\nSELECT * FROM httplog WHERE clientip = \'8.8.8.8\' ORDER BY ts DESC LIMIT 10;\n-- Retrieve the latest 10 records with "error" or "404" in the "request" field\nSELECT * FROM httplog WHERE request MATCH_ANY \'error 404\' ORDER BY ts DESC LIMIT 10;\n-- Retrieve the latest 10 records with "image" and "faq" in the "request" field\nSELECT * FROM httplog WHERE request MATCH_ALL \'image faq\' ORDER BY ts DESC LIMIT 10;\n-- Retrieve the latest 10 records with "query error" in the "request" field\nSELECT * FROM httplog WHERE request MATCH_PHRASE \'query error\' ORDER BY ts DESC LIMIT 10;\n'})}),"\n",(0,s.jsx)(t.p,{children:"As a powerful accelerator for full-text searches, inverted index in Doris is flexible because we witness the need for on-demand adjustments. In Elasticsearch, indexes are fixed upon creation, so there needs to be good planning of which fields need to be indexed, otherwise, any changes to the index will require a complete rewrite."}),"\n",(0,s.jsx)(t.p,{children:"In contrast, Doris allows for dynamic indexing. You can add inverted index to a field during runtime and it will take effect immediately. You can also decide which data partitions to create indexes on."}),"\n",(0,s.jsx)(t.h3,{id:"a-new-data-type-for-dynamic-schema-change",children:"A new data type for dynamic schema change"}),"\n",(0,s.jsx)(t.p,{children:"By nature, an observability platform requires support for dynamic schema, because the data it collects is prone to changes. Every click by a user on the webpage might add a new metric to the database."}),"\n",(0,s.jsx)(t.p,{children:"Looking around the database landscape, you will find that static schema is the norm. Some databases take a step further. For example, Elasticsearch realizes dynamic schema by mapping. However, this functionality can be easily interrupted by field type conflicts or unexpired historical fields."}),"\n",(0,s.jsx)(t.p,{children:"The Doris solution for dynamic schema is a newly-introduced data type: Variant, and GuanceDB is among the first to try it out. (It will officially be available in Apache Doris V2.1.)"}),"\n",(0,s.jsx)(t.p,{children:"The Variant data type is the move of Doris to embrace semi-structured data analytics. It can solve a lot of the problems that often harass database users:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"JSON"})," ",(0,s.jsx)(t.strong,{children:"data storage"}),": A Variant column in Doris can accommodate any legal JSON data, and can automatically recognize the subfields and data types."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Schema explosion due to too many fields"}),": The frequently occurring subfields will be stored in a column-oriented manner to facilitate analysis, while the less frequently seen subfields will be merged into the same column to streamline the data schema."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Write failure due to data type conflicts"}),": A Variant column allows different types of data in the same field, and applies different storage for different data types."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Difference"})," ",(0,s.jsx)(t.strong,{children:"between Variant and Dynamic Mapping"})]}),"\n",(0,s.jsx)(t.p,{children:"From a functional perspective, the biggest difference between Variant in Doris and Dynamic Mapping in Elasticsearch is that the scope of Dynamic Mapping extends throughout the entire lifecycle of the current table, while that of Variant can be limited to the current data partition."}),"\n",(0,s.jsxs)(t.p,{children:["For example, if a user has changed the business logic and renamed some Variant fields today, the old field name will remain on the partitions before today, but will not appear on the new partitions since tomorrow. ",(0,s.jsx)(t.strong,{children:"So there is a lower risk of data type conflict."})]}),"\n",(0,s.jsxs)(t.p,{children:["In the case of field type conflicts in the same partition, the two fields will be changed to JSON type to avoid data error or data loss. For example, there are two ",(0,s.jsx)(t.code,{children:"status"})," fields in the user's business system: One is strings, and the other is numerics, so in queries, the user can decide whether to query the string field, or the nuemric field, or both. (E.g. If you specify ",(0,s.jsx)(t.code,{children:'status = "ok"'})," in the filters, the query will only be executed on the string field.)"]}),"\n",(0,s.jsx)(t.p,{children:"From the users' perspective, they can use the Variant type as simply as other data types. They can add or remove Variant fields based on their business needs, and no extra syntax or annotation is required."}),"\n",(0,s.jsx)(t.p,{children:"Currently, the Variant type requires extra type assertion, we plan to automate this process in future versions of Doris. GuanceDB is one step faster in this aspect. They have realized auto type assertion for their DQL queries. In most cases, type assertion is based on the actual data type of Variant fields. In some rare cases when there is a type conflict, the Variant fields will be upgraded to JSON fields, and then type assertion will be based on the semantics of operators in DQL queries."}),"\n",(0,s.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsxs)(t.p,{children:["GuanceDB's transition from Elasticsearch to Apache Doris showcases a big stride in improving data processing speed and reducing costs. For these purposes, Apache Doris has optimized itself in the two major aspects of data processing: data integration and data analysis. It has expanded its schemaless support to flexibly accommodate more data types, introduced features like inverted index and tiered storage to enable faster and more cost-effective queries. Evolution is an ongoing process. Apache Doris has never stopped improving itself. We have a lot of new features under development and the Doris ",(0,s.jsx)(t.a,{href:"https://join.slack.com/t/apachedoriscommunity/shared_invite/zt-2unfw3a3q-MtjGX4pAd8bCGC1UV0sKcw",children:"community"})," embrace any input and feedback."]}),"\n",(0,s.jsxs)(t.p,{children:["Check Apache Doris GitHub ",(0,s.jsx)(t.a,{href:"https://github.com/apache/doris",children:"repo"})]}),"\n",(0,s.jsxs)(t.p,{children:["Find Apache Doris makers on ",(0,s.jsx)(t.a,{href:"https://join.slack.com/t/apachedoriscommunity/shared_invite/zt-2unfw3a3q-MtjGX4pAd8bCGC1UV0sKcw",children:"Slack"})]})]})}function h(e={}){let{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},907905:function(e,t,a){a.d(t,{Z:function(){return i}});let i=a.p+"assets/images/DQL-GranceDB-apache-doris-8e46a296f0c966f5742651d64d85cd2a.png"},40887:function(e,t,a){a.d(t,{Z:function(){return i}});let i=a.p+"assets/images/observability-platform-architecture-e6d61cc145b4fcaa0e8f81f9a3453836.png"},223450:function(e,t,a){a.d(t,{Z:function(){return i}});let i=a.p+"assets/images/observability-platform-query-engine-storage-engine-apache-doris-b7491e169fe7abf5488259b2d973ed8b.png"},152326:function(e,t,a){a.d(t,{Z:function(){return i}});let i=a.p+"assets/images/observability-platform-query-engine-storage-engine-59ec8b8bcce25f1d2e401c8ef964a742.png"},163775:function(e,t,a){a.d(t,{Z:function(){return i}});let i=a.p+"assets/images/writing-throughput-cpu-usage-apache-doris-a629606fb8dc90bc682efb76c80f7cc9.png"},250065:function(e,t,a){a.d(t,{Z:function(){return o},a:function(){return r}});var i=a(667294);let s={},n=i.createContext(s);function r(e){let t=i.useContext(n);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(n.Provider,{value:t},e.children)}},436223:function(e){e.exports=JSON.parse('{"permalink":"/zh-CN/blog/from-elasticsearch-to-apache-doris-upgrading-an-observability-platform","source":"@site/blog/from-elasticsearch-to-apache-doris-upgrading-an-observability-platform.md","title":"From Elasticsearch to Apache Doris: upgrading an observability platform","description":"GuanceDB, an observability platform, replaces Elasticsearch with Apache Doris as its query and storage engine and realizes 70% less storage costs and 200%~400% data query performance.","date":"2023-12-14T00:00:00.000Z","tags":[{"inline":true,"label":"Best Practice","permalink":"/zh-CN/blog/tags/best-practice"}],"hasTruncateMarker":false,"authors":[{"name":"Apache Doris","key":null,"page":null}],"frontMatter":{"title":"From Elasticsearch to Apache Doris: upgrading an observability platform","description":"GuanceDB, an observability platform, replaces Elasticsearch with Apache Doris as its query and storage engine and realizes 70% less storage costs and 200%~400% data query performance.","date":"2023-12-14","author":"Apache Doris","tags":["Best Practice"],"image":"/images/from-elasticsearch-to-apache-doris-upgrading-an-observability-platform.jpg"},"unlisted":false,"prevItem":{"title":"Apache Doris speeds up data reporting, tagging, and data lake analytics","permalink":"/zh-CN/blog/apache-doris-speeds-up-data-reporting-tagging-and-data-lake-analytics"},"nextItem":{"title":"Apache Doris 2.0.3 just released","permalink":"/zh-CN/blog/release-note-2.0.3"}}')}}]);