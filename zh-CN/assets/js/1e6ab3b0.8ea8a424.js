"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["900565"],{36656:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return r},metadata:function(){return i},toc:function(){return c}});var i=n(713798),a=n(785893),s=n(250065);let r={title:"LLM-powered OLAP: the Tencent application with Apache Doris",description:"The exploration of a LLM+OLAP solution is a bumpy journey, but phew, it now works well for the Tencent case, and they're writing down every lesson learned to share with you.",date:"2023-08-29",author:"Jun Zhang & Lei Luo",tags:["Best Practice"],image:"/images/tme.png"},o=void 0,l={authorsImageUrls:[void 0]},c=[{value:"LLM + OLAP",id:"llm--olap",level:2},{value:"1. A semantic layer",id:"1-a-semantic-layer",level:3},{value:"2. LLM parsing rules",id:"2-llm-parsing-rules",level:3},{value:"3. Schema Mapper and external knowledge base",id:"3-schema-mapper-and-external-knowledge-base",level:3},{value:"4. Plugins",id:"4-plugins",level:3},{value:"The SuperSonic framework",id:"the-supersonic-framework",level:2},{value:"OLAP Architecture",id:"olap-architecture",level:2},{value:"Other Tricks",id:"other-tricks",level:2},{value:"What&#39;s Next",id:"whats-next",level:2}];function h(e){let t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["Six months ago, I wrote about ",(0,a.jsx)(t.a,{href:"https://doris.apache.org/blog/Tencent-Data-Engineers-Why-We-Went-from-ClickHouse-to-Apache-Doris",children:"why we replaced ClickHouse with Apache Doris as an OLAP engine"})," for our data management system. Back then, we were struggling with the auto-generation of SQL statements. As days pass, we have made progresses big enough to be references for you (I think), so here I am again."]}),"\n",(0,a.jsx)(t.p,{children:"We have adopted Large Language Models (LLM) to empower our Doris-based OLAP services."}),"\n",(0,a.jsx)(t.h2,{id:"llm--olap",children:"LLM + OLAP"}),"\n",(0,a.jsx)(t.p,{children:"Our incentive was to save our internal staff from the steep learning curve of SQL writing. Thus, we used LLM as an intermediate. It transforms natural language questions into SQL statements and sends the SQLs to the OLAP engine for execution."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"LLM-OLAP-solution",src:n(612788).Z+"",width:"1280",height:"253"})}),"\n",(0,a.jsx)(t.p,{children:"Like every AI-related experience, we came across some friction:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:'LLM does not understand data jargons, like "fields", "rows", "columns" and "tables". Instead, they can perfectly translate business terms like "corporate income" and "DAU", which are basically what the fields/rows/columns are about. That means it can work well only if the analysts use the exact right word to refer to the metric they need when typing their questions.'}),"\n",(0,a.jsx)(t.li,{children:"The LLM we are using is slow in inference. It takes over 10 seconds to respond. As it charges fees by token, cost-effectiveness becomes a problem."}),"\n",(0,a.jsx)(t.li,{children:"Although the LLM is trained on a large collection of public datasets, it is under-informed of niche knowledge. In our case, the LLM is super unfamiliar with indie songs, so even if the songs are included in our database, the LLM will not able to identify them properly."}),"\n",(0,a.jsx)(t.li,{children:"Sometimes our input questions require adequate and latest legal, political, financial, and regulatory information, which is hard to be included in a training dataset or knowledge base. We need to connect the LLM to wider info bases in order to perform more diversified tasks."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"We knock these problems down one by one."}),"\n",(0,a.jsx)(t.h3,{id:"1-a-semantic-layer",children:"1. A semantic layer"}),"\n",(0,a.jsx)(t.p,{children:"For problem No.1, we introduce a semantic layer between the LLM and the OLAP engine. This layer translates business terms into the corresponding data fields. It can identify data filtering conditions from the various natural language wordings, relate them to the metrics involved, and then generate SQL statements."}),"\n",(0,a.jsx)(t.p,{children:"Besides that, the semantic layer can optimize the computation logic. When analysts input a question that involves a complicated query, let's say, a multi-table join, the semantic layer can split that into multiple single-table queries to reduce semantic distortion."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"LLM-OLAP-semantic-layer",src:n(169566).Z+"",width:"1280",height:"289"})}),"\n",(0,a.jsx)(t.h3,{id:"2-llm-parsing-rules",children:"2. LLM parsing rules"}),"\n",(0,a.jsx)(t.p,{children:"To increase cost-effectiveness in using LLM, we evaluate the computation complexity of all scenarios, such as metric computation, detailed record retrieval, and user segmentation. Then, we create rules and dedicate the LLM-parsing step to only complicated tasks. That means for the simple computation tasks, it will skip the parsing."}),"\n",(0,a.jsx)(t.p,{children:'For example, when an analyst inputs "tell me the earnings of the major musical platforms", the LLM identifies that this question only entails several metrics or dimensions, so it will not further parse it but send it straight for SQL generation and execution. This can largely shorten query response time and reduce API expenses.'}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"LLM-OLAP-parsing-rules",src:n(259256).Z+"",width:"1280",height:"406"})}),"\n",(0,a.jsx)(t.h3,{id:"3-schema-mapper-and-external-knowledge-base",children:"3. Schema Mapper and external knowledge base"}),"\n",(0,a.jsx)(t.p,{children:"To empower the LLM with niche knowledge, we added a Schema Mapper upstream from the LLM. The Schema Mapper maps the input question to an external knowledge base, and then the LLM will do parsing."}),"\n",(0,a.jsx)(t.p,{children:"We are constantly testing and optimizing the Schema Mapper. We categorize and rate content in the external knowledge base, and do various levels of mapping (full-text mapping and fuzzy mapping) to enable better semantic parsing."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"LLM-OLAP-schema-mapper",src:n(178104).Z+"",width:"2001",height:"647"})}),"\n",(0,a.jsx)(t.h3,{id:"4-plugins",children:"4. Plugins"}),"\n",(0,a.jsx)(t.p,{children:"We used plugins to connect the LLM to more fields of information, and we have different integration methods for different types of plugins:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Embedding local files"}),': This is especially useful when we need to "teach" the LLM the latest regulatory policies, which are often text files. Firstly, the system vectorizes the local text file, executes semantic searches to find matching or similar terms in the local file, extracts the relevant contents and puts them into the LLM parsing window to generate output.']}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Third-party plugins"}),": The marketplace is full of third-party plugins that are designed for all kinds of sectors. With them, the LLM is able to deal with wide-ranging topics. Each plugin has its own prompts and calling function. Once the input question hits a prompt, the relevant plugin will be called."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"LLM-OLAP-plugins",src:n(195837).Z+"",width:"2001",height:"645"})}),"\n",(0,a.jsx)(t.p,{children:"After we are done with above four optimizations, the SuperSonic framework comes into being."}),"\n",(0,a.jsx)(t.h2,{id:"the-supersonic-framework",children:"The SuperSonic framework"}),"\n",(0,a.jsxs)(t.p,{children:["Now let me walk you through this ",(0,a.jsx)(t.a,{href:"https://github.com/tencentmusic/supersonic",children:"framework"}),":"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"LLM-OLAP-supersonic-framework",src:n(698090).Z+"",width:"1280",height:"1117"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"An analyst inputs a question."}),"\n",(0,a.jsx)(t.li,{children:"The Schema Mapper maps the question to an external knowledge base."}),"\n",(0,a.jsx)(t.li,{children:"If there are matching fields in the external knowledge base, the question will not be parsed by the LLM. Instead, a metric computation formula will trigger the OLAP engine to start querying. If there is no matching field, the question will enter the LLM."}),"\n",(0,a.jsx)(t.li,{children:"Based on the pre-defined rules, the LLM rates the complexity level of the question. If it is a simple query, it will go directly to the OLAP engine; if it is a complicated query, it will be semantically parsed and converted to a DSL statement."}),"\n",(0,a.jsx)(t.li,{children:"At the Semantic Layer, the DSL statement will be split based on its query scenario. For example, if it is a multi-table join query, this layer will generate multiple single-table query SQL statements."}),"\n",(0,a.jsx)(t.li,{children:"If the question involves external knowledge, the LLM will call a third-party plugin."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Example"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"LLM-OLAP-chatbot-query-interface",src:n(285703).Z+"",width:"2001",height:"1126"})}),"\n",(0,a.jsx)(t.p,{children:"To answer whether a certain song can be performed on variety shows, the system retrieves the OLAP data warehouse for details about the song, and presents it with results from the Commercial Use Query third-party plugin."}),"\n",(0,a.jsx)(t.h2,{id:"olap-architecture",children:"OLAP Architecture"}),"\n",(0,a.jsx)(t.p,{children:"As for the OLAP part of this framework, after several rounds of architectural evolution, this is what our current OLAP pipeline looks like."}),"\n",(0,a.jsx)(t.p,{children:"Raw data is sorted into tags and metrics, which are custom-defined by the analysts. The tags and metrics are under unified management in order to avoid inconsistent definitions. Then, they are combined into various tagsets and metricsets for various queries."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"LLM-OLAP-architecture",src:n(464059).Z+"",width:"1709",height:"1119"})}),"\n",(0,a.jsx)(t.p,{children:"We have drawn two main takeaways for you from our architectural optimization experience."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"1. Streamline the links"})}),"\n",(0,a.jsx)(t.p,{children:"Before we adopted Apache Doris, we used to have ClickHouse to accelerate the computation of tags and metrics, and Elasticsearch to process dimensional data. That's two analytic engines and requires us to adapt the query statements to both of them. It was high-maintenance."}),"\n",(0,a.jsxs)(t.p,{children:["Thus, we replaced ClickHouse with Apache Doris, and utilized the ",(0,a.jsx)(t.a,{href:"https://doris.apache.org/docs/lakehouse/database/es",children:"Elasticsearch Catalog"})," functionality to connect Elasticsearch data to Doris. In this way, we make Doris our unified query gateway."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"2. Split the flat tables"})}),"\n",(0,a.jsx)(t.p,{children:"In early versions of our OLAP architecture, we used to put data into flat tables, which made things tricky. For one thing, flat tables absorbed all the writing latency from upstreams, and that added up to considerable loss in data realtimeliness. For another, 50% of data in a flat table was dimensional data, which was rarely updated. With every new flat table came some bulky dimensional data that consumed lots of storage space."}),"\n",(0,a.jsx)(t.p,{children:"Therefore, we split the flat tables into metric tables and dimension tables. As they are updated in different paces, we put them into different data models."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Metric tables"}),": We arrange metric data in the Aggregate Key model of Apache Doris, which means new data will be merged with the old data by way of SUM, MAX, MIN, etc."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Dimension tables"}),": These tables are in the Unique Key model of Apache Doris, which means new data record will replace the old. This can greatly increase performance in our query scenarios."]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["You might ask, does this cause trouble in queries, since most queries require data from both types of tables? Don't worry, we address that with the Rollup feature of Doris. On the basis of the base tables, we can select the dimensions we need to create Rollup views, which will automatically execute ",(0,a.jsx)(t.code,{children:"GROUP BY"}),". This relieves us of the need to define tags for each Rollup view and largely speed up queries."]}),"\n",(0,a.jsx)(t.h2,{id:"other-tricks",children:"Other Tricks"}),"\n",(0,a.jsx)(t.p,{children:"In our experience with Apache Doris, we also find some other functionalities handy, so I list them here for you, too:"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"1. Materialized View"})}),"\n",(0,a.jsxs)(t.p,{children:["A Materialized View is a pre-computed dataset. It is a way to accelerate queries when you frequently need to access data of certain dimensions. In these scenarios, we define derived tags and metrics based on the original ones. For example, we create a derived metric by combining Metric 1, Metric 2, and Metric 3: ",(0,a.jsx)(t.code,{children:"sum(m1+m2+m3)"}),". Then, we can create a Materialized View for it. According to the Doris release schedule, version 2.1 will support multi-table Materialized Views, and we look forward to that."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"2. Flink-Doris-Connector"})}),"\n",(0,a.jsx)(t.p,{children:"This is for Exactly-Once guarantee in data ingestion. The Flink-Doris-Connector implements a checkpoint mechanism and two-stage commit, and allows for auto data synchronization from relational databases to Doris."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"3. Compaction"})}),"\n",(0,a.jsx)(t.p,{children:"When the number of aggregation tasks or data volume becomes overwhelming for Flink, there might be huge latency in data compaction. We solve that with Vertical Compaction and Segment Compaction. Vertical Compaction supports loading of only part of the columns, so it can reduce storage consumption when compacting flat tables. Segment Compaction can avoid generating too much segments during data writing, and allows for compaction while writing simultaneously."}),"\n",(0,a.jsx)(t.h2,{id:"whats-next",children:"What's Next"}),"\n",(0,a.jsx)(t.p,{children:"With an aim to reduce costs and increase service availability, we plan to test the newly released Storage-Compute Separation and Cross-Cluster Replication of Doris, and we embrace any ideas and inputs about the SuperSonic framework and the Apache Doris project."})]})}function d(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},612788:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/Tencent_LLM_1-6672112c0d09d75171d8ed9a749ff196.png"},169566:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/Tencent_LLM_2-bb2fdaed64ef15214c0542204dd45832.png"},259256:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/Tencent_LLM_3-3ab023081e1acb069d34a4ce24aef010.png"},178104:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/Tencent_LLM_4-261ee680cf77335b25f32e41d7a4924b.png"},195837:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/Tencent_LLM_5-70a170e771dd9eadcc1488b94d892478.png"},698090:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/Tencent_LLM_6-cbbbb25041c807376b2b9d14609e82c8.png"},285703:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/Tencent_LLM_7-c20b3cc2b0b00b32bc2825c1d62b1d5d.png"},464059:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/Tencent_LLM_8-6d517a787c782510bf3869176730ce3a.png"},250065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return r}});var i=n(667294);let a={},s=i.createContext(a);function r(e){let t=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:t},e.children)}},713798:function(e){e.exports=JSON.parse('{"permalink":"/zh-CN/blog/Tencent-LLM","source":"@site/blog/Tencent-LLM.md","title":"LLM-powered OLAP: the Tencent application with Apache Doris","description":"The exploration of a LLM+OLAP solution is a bumpy journey, but phew, it now works well for the Tencent case, and they\'re writing down every lesson learned to share with you.","date":"2023-08-29T00:00:00.000Z","tags":[{"inline":true,"label":"Best Practice","permalink":"/zh-CN/blog/tags/best-practice"}],"hasTruncateMarker":false,"authors":[{"name":"Jun Zhang & Lei Luo","key":null,"page":null}],"frontMatter":{"title":"LLM-powered OLAP: the Tencent application with Apache Doris","description":"The exploration of a LLM+OLAP solution is a bumpy journey, but phew, it now works well for the Tencent case, and they\'re writing down every lesson learned to share with you.","date":"2023-08-29","author":"Jun Zhang & Lei Luo","tags":["Best Practice"],"image":"/images/tme.png"},"unlisted":false,"prevItem":{"title":"Apache Doris announced the official release of version 2.0.1","permalink":"/zh-CN/blog/release-note-2.0.1"},"nextItem":{"title":"Choosing an OLAP engine for financial risk management: what to consider?","permalink":"/zh-CN/blog/Choosing-an-OLAP-Engine-for-Financial-Risk-Management-What-to-Consider"}}')}}]);