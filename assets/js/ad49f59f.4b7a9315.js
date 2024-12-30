"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["814989"],{378463:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>i,default:()=>h,assets:()=>d,toc:()=>l,frontMatter:()=>o});var r=JSON.parse('{"id":"data-operate/import/load-manual","title":"Loading Overview","description":"\x3c!--","source":"@site/docs/data-operate/import/load-manual.md","sourceDirName":"data-operate/import","slug":"/data-operate/import/load-manual","permalink":"/docs/dev/data-operate/import/load-manual","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Loading Overview","language":"en"},"sidebar":"docs","previous":{"title":"Best Practices","permalink":"/docs/dev/table-design/best-practice"},"next":{"title":"local file","permalink":"/docs/dev/data-operate/import/data-source/local-file"}}'),s=t("785893"),a=t("250065");let o={title:"Loading Overview",language:"en"},i=void 0,d={},l=[{value:"Quick Overview of Import Methods",id:"quick-overview-of-import-methods",level:3}];function c(e){let n={a:"a",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Apache Doris offers various methods for importing and integrating data, allowing you to import data from diverse sources into the database. These methods can be categorized into four types:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Real-Time Writing"}),": Data is written into Doris tables in real-time via HTTP or JDBC, suitable for scenarios requiring immediate analysis and querying."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["For small amounts of data (once every 5 minutes), you can use ",(0,s.jsx)(n.a,{href:"/docs/dev/data-operate/import/import-way/insert-into-manual",children:"JDBC INSERT"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["For higher concurrency or frequency (more than 20 concurrent writes or multiple writes per minute), you can enable enable ",(0,s.jsx)(n.a,{href:"/docs/dev/data-operate/import/group-commit-manual",children:"Group Commit"})," and use JDBC INSERT or Stream Load."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["For high throughput, you can use ",(0,s.jsx)(n.a,{href:"./import-way/stream-load-manual",children:"Stream Load"})," via HTTP."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Streaming Synchronization"}),": Real-time data streams (e.g., Flink, Kafka, transactional databases) are imported into Doris tables, ideal for real-time analysis and querying."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["You can use ",(0,s.jsx)(n.a,{href:"/docs/dev/ecosystem/flink-doris-connector",children:"Flink Doris Connector"})," to write Flink\u2019s real-time data streams into Doris."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["You can use ",(0,s.jsx)(n.a,{href:"/docs/dev/data-operate/import/import-way/routine-load-manual",children:"Routine Load"})," or ",(0,s.jsx)(n.a,{href:"/docs/dev/ecosystem/doris-kafka-connector",children:"Doris Kafka Connector"})," for Kafka\u2019s real-time data streams. Routine Load pulls data from Kafka to Doris and supports CSV and JSON formats, while Kafka Connector writes data to Doris, supporting Avro, JSON, CSV, and Protobuf formats."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["You can use ",(0,s.jsx)(n.a,{href:"/docs/dev/ecosystem/flink-doris-connector",children:"Flink CDC"})," or ",(0,s.jsx)(n.a,{href:"/docs/dev/ecosystem/datax",children:"Datax"})," to write transactional database CDC data streams into Doris."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Batch Import"}),": Data is batch-loaded from external storage systems (e.g., S3, HDFS, local files, NAS) into Doris tables, suitable for non-real-time data import needs."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["You can use ",(0,s.jsx)(n.a,{href:"/docs/dev/data-operate/import/import-way/broker-load-manual",children:"Broker Load"})," to write files from S3 and HDFS into Doris."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["You can use ",(0,s.jsx)(n.a,{href:"/docs/dev/data-operate/import/import-way/insert-into-manual",children:"INSERT INTO SELECT"})," to synchronously load files from S3, HDFS, and NAS into Doris, and you can perform the operation asynchronously using a ",(0,s.jsx)(n.a,{href:"/docs/dev/data-operate/scheduler/job-scheduler",children:"JOB"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["You can use ",(0,s.jsx)(n.a,{href:"./import-way/stream-load-manual",children:"Stream Load"})," or ",(0,s.jsx)(n.a,{href:"/docs/dev/ecosystem/doris-streamloader",children:"Doris Streamloader"})," to write local files into Doris."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"External Data Source Integration"}),": Query and partially import data from external sources (e.g., Hive, JDBC, Iceberg) into Doris tables."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["You can create a ",(0,s.jsx)(n.a,{href:"/docs/dev/lakehouse/lakehouse-overview",children:"Catalog"})," to read data from external sources and use ",(0,s.jsx)(n.a,{href:"/docs/dev/data-operate/import/import-way/insert-into-manual",children:"INSERT INTO SELECT"})," to synchronize this data into Doris, with asynchronous writing via ",(0,s.jsx)(n.a,{href:"/docs/dev/data-operate/scheduler/job-scheduler",children:"JOB"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["You can use ",(0,s.jsx)(n.a,{href:"/docs/dev/data-operate/import/data-source/migrate-data-from-other-olap",children:"X2Doris"})," to migrate data from other AP systems into Doris."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Each import method in Doris is an implicit transaction by default. For more information on transactions, refer to ",(0,s.jsx)(n.a,{href:"/docs/dev/data-operate/transaction",children:"Transactions"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"quick-overview-of-import-methods",children:"Quick Overview of Import Methods"}),"\n",(0,s.jsx)(n.p,{children:"Doris's import process mainly involves various aspects such as data sources, data formats, import methods, error handling, data transformation, and transactions. You can quickly browse the scenarios suitable for each import method and the supported file formats in the table below."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Import Method"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Use Case"}),(0,s.jsx)(n.th,{children:"Supported File Formats"}),(0,s.jsx)(n.th,{children:"Single Import Volume"}),(0,s.jsx)(n.th,{children:"Import Mode"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.a,{href:"./import-way/stream-load-manual",children:"Stream Load"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Importing local files or push data in applications via http."}),(0,s.jsx)(n.td,{children:"csv, json, parquet, orc"}),(0,s.jsx)(n.td,{children:"Less than 10GB"}),(0,s.jsx)(n.td,{children:"Synchronous"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.a,{href:"/docs/dev/data-operate/import/import-way/broker-load-manual",children:"Broker Load"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Importing from object storage, HDFS, etc."}),(0,s.jsx)(n.td,{children:"csv, json, parquet, orc"}),(0,s.jsx)(n.td,{children:"Tens of GB to hundreds of GB"}),(0,s.jsx)(n.td,{children:"Asynchronous"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.a,{href:"/docs/dev/data-operate/import/import-way/insert-into-manual",children:"INSERT INTO VALUES"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Writing data via JDBC."}),(0,s.jsx)(n.td,{children:"SQL"}),(0,s.jsx)(n.td,{children:"Simple testing"}),(0,s.jsx)(n.td,{children:"Synchronous"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.a,{href:"/docs/dev/data-operate/import/import-way/insert-into-manual",children:"INSERT INTO SELECT"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Importing from an external source like a table in a catalog or files in s3."}),(0,s.jsx)(n.td,{children:"SQL"}),(0,s.jsx)(n.td,{children:"Depending on memory size"}),(0,s.jsx)(n.td,{children:"Synchronous, Asynchronous via Job"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.a,{href:"/docs/dev/data-operate/import/import-way/routine-load-manual",children:"Routine Load"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Real-time import from Kafka"}),(0,s.jsx)(n.td,{children:"csv, json"}),(0,s.jsx)(n.td,{children:"Micro-batch import MB to GB"}),(0,s.jsx)(n.td,{children:"Asynchronous"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.a,{href:"/docs/dev/data-operate/import/import-way/mysql-load-manual",children:"MySQL Load"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Importing from local files."}),(0,s.jsx)(n.td,{children:"csv"}),(0,s.jsx)(n.td,{children:"Less than 1GB"}),(0,s.jsx)(n.td,{children:"Synchronous"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.a,{href:"/docs/dev/data-operate/import/group-commit-manual",children:"Group Commit"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Writing with high frequency."}),(0,s.jsx)(n.td,{children:"Depending on the import method used"}),(0,s.jsx)(n.td,{children:"Micro-batch import KB"}),(0,s.jsx)(n.td,{children:"-"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return o}});var r=t(667294);let s={},a=r.createContext(s);function o(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);