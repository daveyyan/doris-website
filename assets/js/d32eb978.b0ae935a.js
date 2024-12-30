"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["524400"],{509573:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>o,default:()=>c,assets:()=>s,toc:()=>d,frontMatter:()=>r});var i=JSON.parse('{"id":"ecosystem/hive-hll-udf","title":"Hive HLL UDF","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/ecosystem/hive-hll-udf.md","sourceDirName":"ecosystem","slug":"/ecosystem/hive-hll-udf","permalink":"/docs/ecosystem/hive-hll-udf","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Hive HLL UDF","language":"en"},"sidebar":"docs","previous":{"title":"Hive Bitmap UDF","permalink":"/docs/ecosystem/hive-bitmap-udf"},"next":{"title":"Install Error","permalink":"/docs/faq/install-faq"}}'),a=t("785893"),l=t("250065");let r={title:"Hive HLL UDF",language:"en"},o="Hive HLL UDF",s={},d=[{value:"Usage",id:"usage",level:2},{value:"Create a Hive table and insert test data",id:"create-a-hive-table-and-insert-test-data",level:3},{value:"Use Hive HLL UDF:",id:"use-hive-hll-udf",level:3},{value:"Hive HLL UDF Explanation",id:"hive-hll-udf-explanation",level:3},{value:"Importing Hive HLL to Doris",id:"importing-hive-hll-to-doris",level:2},{value:"Method 1: Catalog (Recommended)",id:"method-1-catalog-recommended",level:3},{value:"Method 2: Spark Load",id:"method-2-spark-load",level:3}];function h(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"hive-hll-udf",children:"Hive HLL UDF"})}),"\n",(0,a.jsxs)(n.p,{children:["The Hive HLL UDF provides a set of UDFs for generating HLL operations in Hive tables, which are identical to Doris HLL. Hive HLL can be imported into Doris through Spark HLL Load. For more information about HLL, please refer to Using HLL for Approximate Deduplication.:",(0,a.jsx)(n.a,{href:"https://doris.apache.org/docs/query-acceleration/distinct-counts/using-hll/",children:"Approximate Deduplication Using HLL"})]}),"\n",(0,a.jsx)(n.p,{children:"Function Introduction:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"UDAF"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"\xb7 to_hll: An aggregate function that returns a Doris HLL column, similar to the to_bitmap function\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"\xb7 hll_union\uFF1AAn aggregate function that calculates the union of groups, returning a Doris HLL column, similar to the bitmap_union function\n"})}),"\n",(0,a.jsx)(n.p,{children:"2. UDF"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"\xb7 hll_cardinality: Returns the number of distinct elements added to the HLL, similar to the bitmap_count function\n"})}),"\n",(0,a.jsx)(n.p,{children:"Main Purpose:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Reduce data import time to Doris by eliminating the need for dictionary construction and HLL pre-aggregation"}),"\n",(0,a.jsx)(n.li,{children:"Save Hive storage by compressing data using HLL, significantly reducing storage costs compared to Bitmap statistics"}),"\n",(0,a.jsx)(n.li,{children:"Provide flexible HLL operations in Hive, including union and cardinality statistics, and allow the resulting HLL to be directly imported into Doris"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Note:\nHLL statistics are approximate calculations with an error rate of around 1% to 2%."}),"\n",(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(n.h3,{id:"create-a-hive-table-and-insert-test-data",children:"Create a Hive table and insert test data"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"-- Create a test database, e.g., hive_test\nuse hive_test;\n\n-- Create a Hive HLL table\nCREATE TABLE IF NOT EXISTS `hive_hll_table`(\n  `k1`   int       COMMENT '',\n  `k2`   String    COMMENT '',\n  `k3`   String    COMMENT '',\n  `uuid` binary    COMMENT 'hll'\n) comment  'comment'\n\n-- Create a normal Hive table and insert test data\nCREATE TABLE IF NOT EXISTS `hive_table`(\n    `k1`   int       COMMENT '',\n    `k2`   String    COMMENT '',\n    `k3`   String    COMMENT '',\n    `uuid` int       COMMENT ''\n) comment  'comment'\n\ninsert into hive_table select 1, 'a', 'b', 12345;\ninsert into hive_table select 1, 'a', 'c', 12345;\ninsert into hive_table select 2, 'b', 'c', 23456;\ninsert into hive_table select 3, 'c', 'd', 34567;\n"})}),"\n",(0,a.jsx)(n.h3,{id:"use-hive-hll-udf",children:"Use Hive HLL UDF:"}),"\n",(0,a.jsxs)(n.p,{children:["Hive HLL UDF needs to be used in Hive/Spark. First, compile the FE to obtain the hive-udf.jar file.\nCompilation preparation: If you have compiled the ldb source code, you can directly compile the FE. If not, you need to manually install thrift, refer to ",(0,a.jsx)(n.a,{href:"https://doris.apache.org/community/developer-guide/fe-idea-dev/",children:"Setting Up Dec Env for FE - IntelliJ IDEA"})," for compilation and installation."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"-- Clone the Doris source code\ngit clone https://github.com/apache/doris.git\ncd doris\ngit submodule update --init --recursive\n\n-- Install thrift (skip if already installed)\n-- Enter the FE directory\ncd fe\n\n-- Execute the Maven packaging command (all FE submodules will be packaged)\nmvn package -Dmaven.test.skip=true\n-- Or package only the hive-udf module\nmvn package -pl hive-udf -am -Dmaven.test.skip=true\n\n-- The packaged hive-udf.jar file will be generated in the target directory\n-- Upload the compiled hive-udf.jar file to HDFS, e.g., to the root directory\nhdfs dfs -put hive-udf/target/hive-udf.jar /\n\n"})}),"\n",(0,a.jsx)(n.p,{children:"Then, enter Hive and execute the following SQL statements:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"-- Load the hive hll udf jar package, modify the hostname and port according to your actual situation\nadd jar hdfs://hostname:port/hive-udf.jar;\n\n-- Create UDAF functions\ncreate temporary function to_hll as 'org.apache.doris.udf.ToHllUDAF' USING JAR 'hdfs://hostname:port/hive-udf.jar';\ncreate temporary function hll_union as 'org.apache.doris.udf.HllUnionUDAF' USING JAR 'hdfs://hostname:port/hive-udf.jar';\n\n\n-- Create UDF functions\ncreate temporary function hll_cardinality as 'org.apache.doris.udf.HllCardinalityUDF' USING JAR 'hdfs://node:9000/hive-udf.jar';\n\n\n-- Example: Use the to_hll UDAF to aggregate and generate HLL, and write it to the Hive HLL table\ninsert into hive_hll_table\nselect \n    k1,\n    k2,\n    k3,\n    to_hll(uuid) as uuid\nfrom \n    hive_table\ngroup by \n    k1,\n    k2,\n    k3\n\n-- Example: Use hll_cardinality to calculate the number of elements in the HLL\nselect k1, k2, k3, hll_cardinality(uuid) from hive_hll_table;\n+-----+-----+-----+------+\n| k1  | k2  | k3  | _c3  |\n+-----+-----+-----+------+\n| 1   | a   | b   | 1    |\n| 1   | a   | c   | 1    |\n| 2   | b   | c   | 1    |\n| 3   | c   | d   | 1    |\n+-----+-----+-----+------+\n\n-- Example: Use hll_union to calculate the union of groups, returning 3 rows\nselect k1, hll_union(uuid) from hive_hll_table group by k1;\n\n-- Example: Also can merge and then continue to statistics\nselect k3, hll_cardinality(hll_union(uuid)) from hive_hll_table group by k3;\n+-----+------+\n| k3  | _c1  |\n+-----+------+\n| b   | 1    |\n| c   | 2    |\n| d   | 1    |\n+-----+------+\n"})}),"\n",(0,a.jsx)(n.h3,{id:"hive-hll-udf-explanation",children:"Hive HLL UDF Explanation"}),"\n",(0,a.jsx)(n.h2,{id:"importing-hive-hll-to-doris",children:"Importing Hive HLL to Doris"}),"\n",(0,a.jsx)(n.h3,{id:"method-1-catalog-recommended",children:"Method 1: Catalog (Recommended)"}),"\n",(0,a.jsxs)(n.p,{children:["Create Hive table specified as TEXT format. For Binary type, Hive will save it as a base64 encoded string. At this time, you can use the Hive Catalog to directly import the HLL data into Doris using the ",(0,a.jsx)(n.a,{href:"/docs/sql-manual/sql-functions/hll-functions/hll-from-base64",children:"hll_from_base64"})," function."]}),"\n",(0,a.jsx)(n.p,{children:"Here is a complete example:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Create a Hive table"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE IF NOT EXISTS `hive_hll_table`(\n`k1`   int       COMMENT '',\n`k2`   String    COMMENT '',\n`k3`   String    COMMENT '',\n`uuid` binary    COMMENT 'hll'\n) stored as textfile\n\n-- then reuse the previous steps to insert data from a normal table into it using the to_hll function\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs/lakehouse/datalake-analytics/hive",children:"Create a Doris catalog"})}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"CREATE CATALOG hive PROPERTIES (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://127.0.0.1:9083'\n);\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsx)(n.li,{children:"Create a Doris internal table"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE IF NOT EXISTS `doris_test`.`doris_hll_table`(\n    `k1`   int                   COMMENT '',\n    `k2`   varchar(10)           COMMENT '',\n    `k3`   varchar(10)           COMMENT '',\n    `uuid` HLL  HLL_UNION  COMMENT 'hll'\n)\nAGGREGATE KEY(k1, k2, k3)\nDISTRIBUTED BY HASH(`k1`) BUCKETS 1\nPROPERTIES (\n    \"replication_allocation\" = \"tag.location.default: 1\"\n);\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"4",children:["\n",(0,a.jsx)(n.li,{children:"Import data from Hive to Doris"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"insert into doris_hll_table select k1, k2, k3, hll_from_base64(uuid) from hive.hive_test.hive_hll_table;\n\n-- View the imported data, combining hll_to_base64 for decoding\nselect *, hll_to_base64(uuid) from doris_hll_table;\n+------+------+------+------+---------------------+\n| k1   | k2   | k3   | uuid | hll_to_base64(uuid) |\n+------+------+------+------+---------------------+\n|    1 | a    | b    | NULL | AQFw+a9MhpKhoQ==    |\n|    1 | a    | c    | NULL | AQFw+a9MhpKhoQ==    |\n|    2 | b    | c    | NULL | AQGyB7kbWBxh+A==    |\n|    3 | c    | d    | NULL | AQFYbJB5VpNBhg==    |\n+------+------+------+------+---------------------+\n\n-- Also can use Doris's native HLL functions for statistics, and see that the results are consistent with the previous statistics in Hive\nselect k3, hll_cardinality(hll_union(uuid)) from doris_hll_table group by k3;\n+------+----------------------------------+\n| k3   | hll_cardinality(hll_union(uuid)) |\n+------+----------------------------------+\n| b    |                                1 |\n| d    |                                1 |\n| c    |                                2 |\n+------+----------------------------------+\n\n-- At this time, querying the external table data, i.e., the data before import, can also verify the correctness of the data\nselect k3, hll_cardinality(hll_union(hll_from_base64(uuid))) from hive.hive_test.hive_hll_table group by k3;\n+------+---------------------------------------------------+\n| k3   | hll_cardinality(hll_union(hll_from_base64(uuid))) |\n+------+---------------------------------------------------+\n| d    |                                                 1 |\n| b    |                                                 1 |\n| c    |                                                 2 |\n+------+---------------------------------------------------+\n"})}),"\n",(0,a.jsx)(n.h3,{id:"method-2-spark-load",children:"Method 2: Spark Load"}),"\n",(0,a.jsxs)(n.p,{children:["See details: ",(0,a.jsx)(n.a,{href:"https://doris.apache.org/zh-CN/docs/1.2/data-operate/import/import-way/spark-load-manual",children:"Spark Load"})," -> Basic operation -> Creating Load (Example 3: when the upstream data source is hive binary type table)"]})]})}function c(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return r}});var i=t(667294);let a={},l=i.createContext(a);function r(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);