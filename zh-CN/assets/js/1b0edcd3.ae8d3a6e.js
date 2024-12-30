"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["926563"],{396741:function(n,e,t){t.r(e),t.d(e,{metadata:()=>a,contentTitle:()=>l,default:()=>u,assets:()=>d,toc:()=>c,frontMatter:()=>r});var a=JSON.parse('{"id":"query-data/udf/java-user-defined-function","title":"Java UDF, UDAF, UDTF","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/query-data/udf/java-user-defined-function.md","sourceDirName":"query-data/udf","slug":"/query-data/udf/java-user-defined-function","permalink":"/zh-CN/docs/dev/query-data/udf/java-user-defined-function","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Java UDF, UDAF, UDTF","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u522B\u540D\u51FD\u6570","permalink":"/zh-CN/docs/dev/query-data/udf/alias-function"},"next":{"title":"\u590D\u6742\u7C7B\u578B\u67E5\u8BE2","permalink":"/zh-CN/docs/dev/query-data/complex-type"}}'),i=t("785893"),s=t("250065");let r={title:"Java UDF, UDAF, UDTF",language:"zh-CN"},l=void 0,d={},c=[{value:"\u6982\u8FF0",id:"\u6982\u8FF0",level:2},{value:"\u7C7B\u578B\u5BF9\u5E94\u5173\u7CFB",id:"\u7C7B\u578B\u5BF9\u5E94\u5173\u7CFB",level:2},{value:"\u4F7F\u7528\u9650\u5236",id:"\u4F7F\u7528\u9650\u5236",level:2},{value:"\u5FEB\u901F\u4E0A\u624B",id:"\u5FEB\u901F\u4E0A\u624B",level:2},{value:"Java-UDF \u5B9E\u4F8B\u4ECB\u7ECD",id:"java-udf-\u5B9E\u4F8B\u4ECB\u7ECD",level:3},{value:"Java-UDAF \u5B9E\u4F8B\u4ECB\u7ECD",id:"java-udaf-\u5B9E\u4F8B\u4ECB\u7ECD",level:3},{value:"Java-UDTF \u5B9E\u4F8B\u4ECB\u7ECD",id:"java-udtf-\u5B9E\u4F8B\u4ECB\u7ECD",level:3},{value:"\u6700\u4F73\u5B9E\u8DF5",id:"\u6700\u4F73\u5B9E\u8DF5",level:2}];function o(n){let e={a:"a",admonition:"admonition",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"\u6982\u8FF0",children:"\u6982\u8FF0"}),"\n",(0,i.jsx)(e.p,{children:"Java UDF \u4E3A\u7528\u6237\u63D0\u4F9B UDF \u7F16\u5199\u7684 Java \u63A5\u53E3\uFF0C\u4EE5\u65B9\u4FBF\u7528\u6237\u4F7F\u7528 Java \u8BED\u8A00\u8FDB\u884C\u81EA\u5B9A\u4E49\u51FD\u6570\u7684\u6267\u884C\u3002\nDoris \u652F\u6301\u4F7F\u7528 JAVA \u7F16\u5199 UDF\u3001UDAF \u548C UDTF\u3002\u4E0B\u6587\u5982\u65E0\u7279\u6B8A\u8BF4\u660E\uFF0C\u4F7F\u7528 UDF \u7EDF\u79F0\u6240\u6709\u7528\u6237\u81EA\u5B9A\u4E49\u51FD\u6570\u3002"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"Java UDF  \u662F\u8F83\u4E3A\u5E38\u89C1\u7684\u81EA\u5B9A\u4E49\u6807\u91CF\u51FD\u6570 (Scalar Function)\uFF0C\u5373\u6BCF\u8F93\u5165\u4E00\u884C\u6570\u636E\uFF0C\u5C31\u4F1A\u6709\u4E00\u884C\u5BF9\u5E94\u7684\u7ED3\u679C\u8F93\u51FA\uFF0C\u8F83\u4E3A\u5E38\u89C1\u7684\u6709 ABS\uFF0CLENGTH \u7B49\u3002\u503C\u5F97\u4E00\u63D0\u7684\u662F\u5BF9\u4E8E\u7528\u6237\u6765\u8BB2\uFF0CHive UDF \u662F\u53EF\u4EE5\u76F4\u63A5\u8FC1\u79FB\u81F3 Doris \u7684\u3002"}),"\n",(0,i.jsx)(e.li,{children:"Java UDAF \u5373\u4E3A\u81EA\u5B9A\u4E49\u7684\u805A\u5408\u51FD\u6570 (Aggregate Function)\uFF0C\u5373\u5728\u8F93\u5165\u591A\u884C\u6570\u636E\u8FDB\u884C\u805A\u5408\u540E\uFF0C\u4EC5\u8F93\u51FA\u4E00\u884C\u5BF9\u5E94\u7684\u7ED3\u679C\uFF0C\u8F83\u4E3A\u5E38\u89C1\u7684\u6709 MIN\uFF0CMAX\uFF0CCOUNT \u7B49\u3002"}),"\n",(0,i.jsx)(e.li,{children:"JAVA UDTF \u5373\u4E3A\u81EA\u5B9A\u4E49\u7684\u8868\u51FD\u6570 (Table Function)\uFF0C\u5373\u6BCF\u8F93\u4E00\u884C\u6570\u636E\uFF0C\u53EF\u4EE5\u4EA7\u751F\u4E00\u884C\u6216\u591A\u884C\u7684\u7ED3\u679C\uFF0C\u5728 Doris \u4E2D\u9700\u8981\u7ED3\u5408 Lateral View \u4F7F\u7528\u53EF\u4EE5\u8FBE\u5230\u884C\u8F6C\u5217\u7684\u6548\u679C\uFF0C\u8F83\u4E3A\u5E38\u89C1\u7684\u6709 EXPLODE\uFF0CEXPLODE_SPLIT \u7B49\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u7C7B\u578B\u5BF9\u5E94\u5173\u7CFB",children:"\u7C7B\u578B\u5BF9\u5E94\u5173\u7CFB"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Doris \u6570\u636E\u7C7B\u578B"}),(0,i.jsx)(e.th,{children:"Java UDF \u53C2\u6570\u7C7B\u578B"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Bool"}),(0,i.jsx)(e.td,{children:"Boolean"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"TinyInt"}),(0,i.jsx)(e.td,{children:"Byte"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"SmallInt"}),(0,i.jsx)(e.td,{children:"Short"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Int"}),(0,i.jsx)(e.td,{children:"Integer"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"BigInt"}),(0,i.jsx)(e.td,{children:"Long"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"LargeInt"}),(0,i.jsx)(e.td,{children:"BigInteger"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Float"}),(0,i.jsx)(e.td,{children:"Float"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Double"}),(0,i.jsx)(e.td,{children:"Double"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Date"}),(0,i.jsx)(e.td,{children:"LocalDate"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Datetime"}),(0,i.jsx)(e.td,{children:"LocalDateTime"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"IPV4/IPV6"}),(0,i.jsx)(e.td,{children:"InetAddress"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"String"}),(0,i.jsx)(e.td,{children:"String"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Decimal"}),(0,i.jsx)(e.td,{children:"BigDecimal"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"array<Type>"})}),(0,i.jsxs)(e.td,{children:[(0,i.jsx)(e.code,{children:"ArrayList<Type>"}),"\uFF08\u652F\u6301\u5D4C\u5957\uFF09"]})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"map<Type1,Type2>"})}),(0,i.jsxs)(e.td,{children:[(0,i.jsx)(e.code,{children:"HashMap<Type1,Type2>"}),"\uFF08\u652F\u6301\u5D4C\u5957\uFF09"]})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.code,{children:"struct<Type...>"})}),(0,i.jsxs)(e.td,{children:[(0,i.jsx)(e.code,{children:"ArrayList<Object>"}),"\uFF08\u4ECE 3.0.0 \u7248\u672C\u5F00\u59CB\u652F\u6301\uFF09"]})]})]})]}),"\n",(0,i.jsx)(e.admonition,{title:"\u63D0\u793A",type:"tip",children:(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"array"}),"\u3001",(0,i.jsx)(e.code,{children:"map"}),"\u3001",(0,i.jsx)(e.code,{children:"struct"})," \u7C7B\u578B\u53EF\u4EE5\u5D4C\u5957\u5176\u5B83\u7C7B\u578B\u3002\u4F8B\u5982\uFF0CDoris \u4E2D\u7684 ",(0,i.jsx)(e.code,{children:"array<array<int>>"})," \u5BF9\u5E94 Java UDF \u53C2\u6570\u7C7B\u578B\u4E3A ",(0,i.jsx)(e.code,{children:"ArrayList<ArrayList<Integer>>"}),"\uFF0C\u5176\u4ED6\u7C7B\u578B\u4F9D\u6B64\u7C7B\u63A8\u3002"]})}),"\n",(0,i.jsx)(e.admonition,{title:"\u6CE8\u610F",type:"caution",children:(0,i.jsxs)(e.p,{children:["\u5728\u521B\u5EFA\u51FD\u6570\u65F6\uFF0C\u8BF7\u52A1\u5FC5\u4F7F\u7528 ",(0,i.jsx)(e.code,{children:"string"})," \u7C7B\u578B\u800C\u4E0D\u662F ",(0,i.jsx)(e.code,{children:"varchar"}),"\uFF0C\u5426\u5219\u53EF\u80FD\u4F1A\u5BFC\u81F4\u51FD\u6570\u6267\u884C\u5931\u8D25\u3002"]})}),"\n",(0,i.jsx)(e.h2,{id:"\u4F7F\u7528\u9650\u5236",children:"\u4F7F\u7528\u9650\u5236"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"\u4E0D\u652F\u6301\u590D\u6742\u6570\u636E\u7C7B\u578B\uFF08HLL\uFF0CBitmap\uFF09\u3002"}),"\n",(0,i.jsxs)(e.li,{children:["\u5F53\u524D\u5141\u8BB8\u7528\u6237\u81EA\u5DF1\u6307\u5B9A JVM \u6700\u5927\u5806\u5927\u5C0F\uFF0C\u914D\u7F6E\u9879\u662F be.conf \u4E2D\u7684 ",(0,i.jsx)(e.code,{children:"JAVA_OPTS"})," \u7684 -Xmx \u90E8\u5206\u3002\u9ED8\u8BA4 1024m\uFF0C\u5982\u679C\u9700\u8981\u805A\u5408\u6570\u636E\uFF0C\u5EFA\u8BAE\u8C03\u5927\u4E00\u4E9B\uFF0C\u589E\u52A0\u6027\u80FD\uFF0C\u51CF\u5C11\u5185\u5B58\u6EA2\u51FA\u98CE\u9669\u3002"]}),"\n",(0,i.jsx)(e.li,{children:"\u7531\u4E8E jvm \u52A0\u8F7D\u540C\u540D\u7C7B\u7684\u95EE\u9898\uFF0C\u4E0D\u8981\u540C\u65F6\u4F7F\u7528\u591A\u4E2A\u540C\u540D\u7C7B\u4F5C\u4E3A udf \u5B9E\u73B0\uFF0C\u5982\u679C\u60F3\u66F4\u65B0\u67D0\u4E2A\u540C\u540D\u7C7B\u7684 udf\uFF0C\u9700\u8981\u91CD\u542F be \u91CD\u65B0\u52A0\u8F7D classpath\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u5FEB\u901F\u4E0A\u624B",children:"\u5FEB\u901F\u4E0A\u624B"}),"\n",(0,i.jsxs)(e.p,{children:["\u672C\u5C0F\u8282\u4E3B\u8981\u4ECB\u7ECD\u5982\u4F55\u5F00\u53D1\u4E00\u4E2A Java UDF\u3002\u5728 ",(0,i.jsx)(e.code,{children:"samples/doris-demo/java-udf-demo/"})," \u4E0B\u63D0\u4F9B\u4E86\u793A\u4F8B\uFF0C\u53EF\u4F9B\u53C2\u8003\uFF0C\u67E5\u770B\u70B9\u51FB",(0,i.jsx)(e.a,{href:"https://github.com/apache/doris/tree/master/samples/doris-demo/java-udf-demo",children:"\u8FD9\u91CC"})]}),"\n",(0,i.jsxs)(e.p,{children:["UDF \u7684\u4F7F\u7528\u4E0E\u666E\u901A\u7684\u51FD\u6570\u65B9\u5F0F\u4E00\u81F4\uFF0C\u552F\u4E00\u7684\u533A\u522B\u5728\u4E8E\uFF0C\u5185\u7F6E\u51FD\u6570\u7684\u4F5C\u7528\u57DF\u662F\u5168\u5C40\u7684\uFF0C\u800C UDF \u7684\u4F5C\u7528\u57DF\u662F DB \u5185\u90E8\u3002\n\u6240\u4EE5\u5982\u679C\u5F53\u524D\u94FE\u63A5 session \u4F4D\u4E8E\u6570\u636E\u5E93 DB \u5185\u90E8\u65F6\uFF0C\u76F4\u63A5\u4F7F\u7528 UDF \u540D\u5B57\u4F1A\u5728\u5F53\u524D DB \u5185\u90E8\u67E5\u627E\u5BF9\u5E94\u7684 UDF\u3002\u5426\u5219\u7528\u6237\u9700\u8981\u663E\u793A\u7684\u6307\u5B9A UDF \u7684\u6570\u636E\u5E93\u540D\u5B57\uFF0C\u4F8B\u5982 ",(0,i.jsx)(e.code,{children:"dbName.funcName"}),"\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u63A5\u4E0B\u6765\u7684\u7AE0\u8282\u4ECB\u7ECD\u5B9E\u4F8B\uFF0C\u5747\u4F1A\u5728",(0,i.jsx)(e.code,{children:"test_table"})," \u4E0A\u505A\u6D4B\u8BD5\uFF0C\u5BF9\u5E94\u5EFA\u8868\u5982\u4E0B\uFF1A"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:'CREATE TABLE `test_table` (\n    id int NULL,\n    d1 double NULL,\n    str string NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`id`)\nDISTRIBUTED BY HASH(`id`) BUCKETS 1\nPROPERTIES (\n"replication_num" = "1");\n\ninsert into test_table values (1, 111.11, "a,b,c");\ninsert into test_table values (6, 666.66, "d,e");\n'})}),"\n",(0,i.jsx)(e.h3,{id:"java-udf-\u5B9E\u4F8B\u4ECB\u7ECD",children:"Java-UDF \u5B9E\u4F8B\u4ECB\u7ECD"}),"\n",(0,i.jsxs)(e.p,{children:["\u4F7F\u7528 Java \u4EE3\u7801\u7F16\u5199 UDF\uFF0CUDF \u7684\u4E3B\u5165\u53E3\u5FC5\u987B\u4E3A ",(0,i.jsx)(e.code,{children:"evaluate"})," \u51FD\u6570\u3002\u8FD9\u4E00\u70B9\u4E0E Hive \u7B49\u5176\u4ED6\u5F15\u64CE\u4FDD\u6301\u4E00\u81F4\u3002\u5728\u672C\u793A\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u7F16\u5199\u4E86 ",(0,i.jsx)(e.code,{children:"AddOne"})," UDF \u6765\u5B8C\u6210\u5BF9\u6574\u578B\u8F93\u5165\u8FDB\u884C\u52A0\u4E00\u7684\u64CD\u4F5C\u3002"]}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u9996\u5148\u7F16\u5199\u5BF9\u5E94\u7684 Java \u4EE3\u7801\uFF0C\u6253\u5305\u751F\u6210 JAR \u5305\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"public class AddOne extends UDF {\n    public Integer evaluate(Integer value) {\n        return value == null ? null : value + 1;\n    }\n}\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u5728 Doris \u4E2D\u6CE8\u518C\u521B\u5EFA Java-UDF \u51FD\u6570\u3002\u66F4\u591A\u8BED\u6CD5\u5E2E\u52A9\u53EF\u53C2\u9605 ",(0,i.jsx)(e.a,{href:"/zh-CN/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-FUNCTION",children:"CREATE FUNCTION"}),"."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:'CREATE FUNCTION java_udf_add_one(int) RETURNS int PROPERTIES (\n    "file"="file:///path/to/java-udf-demo-jar-with-dependencies.jar",\n    "symbol"="org.apache.doris.udf.AddOne",\n    "always_nullable"="true",\n    "type"="JAVA_UDF"\n);\n'})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u7528\u6237\u4F7F\u7528 UDF \u5FC5\u987B\u62E5\u6709\u5BF9\u5E94\u6570\u636E\u5E93\u7684 ",(0,i.jsx)(e.code,{children:"SELECT"})," \u6743\u9650\u3002\n\u5982\u679C\u60F3\u67E5\u770B\u6CE8\u518C\u6210\u529F\u7684\u5BF9\u5E94 UDF \u51FD\u6570\uFF0C\u53EF\u4EE5\u4F7F\u7528",(0,i.jsx)(e.a,{href:"/zh-CN/docs/dev/sql-manual/sql-statements/Show-Statements/SHOW-FUNCTIONS",children:"SHOW FUNCTIONS"})," \u547D\u4EE4\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"select id,java_udf_add_one(id) from test_table;\n+------+----------------------+\n| id   | java_udf_add_one(id) |\n+------+----------------------+\n|    1 |                    2 |\n|    6 |                    7 |\n+------+----------------------+\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u5F53\u4E0D\u518D\u9700\u8981 UDF \u51FD\u6570\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4E0B\u8FF0\u547D\u4EE4\u6765\u5220\u9664\u4E00\u4E2A UDF \u51FD\u6570\uFF0C\u53EF\u4EE5\u53C2\u8003 ",(0,i.jsx)(e.a,{href:"/zh-CN/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Drop/DROP-FUNCTION",children:"DROP FUNCTION"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u53E6\u5916\uFF0C\u5982\u679C\u5B9A\u4E49\u7684 UDF \u4E2D\u9700\u8981\u52A0\u8F7D\u5F88\u5927\u7684\u8D44\u6E90\u6587\u4EF6\uFF0C\u6216\u8005\u5E0C\u671B\u53EF\u4EE5\u5B9A\u4E49\u5168\u5C40\u7684 static \u53D8\u91CF\uFF0C\u53EF\u4EE5\u53C2\u7167\u6587\u6863\u4E0B\u65B9\u7684 static \u53D8\u91CF\u52A0\u8F7D\u65B9\u5F0F\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"java-udaf-\u5B9E\u4F8B\u4ECB\u7ECD",children:"Java-UDAF \u5B9E\u4F8B\u4ECB\u7ECD"}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u4F7F\u7528 Java \u4EE3\u7801\u7F16\u5199 UDAF \u65F6\uFF0C\u6709\u4E00\u4E9B\u5FC5\u987B\u5B9E\u73B0\u7684\u51FD\u6570 (\u6807\u8BB0 required) \u548C\u4E00\u4E2A\u5185\u90E8\u7C7B State\uFF0C\u4E0B\u9762\u5C06\u4EE5\u5177\u4F53\u7684\u5B9E\u4F8B\u6765\u8BF4\u660E\u3002"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"\u9996\u5148\u7F16\u5199\u5BF9\u5E94\u7684 Java UDAF \u4EE3\u7801\uFF0C\u6253\u5305\u751F\u6210 JAR \u5305\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.details,{children:["\n",(0,i.jsx)(e.summary,{children:" \u793A\u4F8B 1: SimpleDemo \u5C06\u5B9E\u73B0\u4E00\u4E2A\u7C7B\u4F3C\u7684 sum \u7684\u7B80\u5355\u51FD\u6570\uFF0C\u8F93\u5165\u53C2\u6570 INT\uFF0C\u8F93\u51FA\u53C2\u6570\u662F INT"})," \n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:'package org.apache.doris.udf;\n\nimport java.io.DataInputStream;\nimport java.io.DataOutputStream;\nimport java.io.IOException;\nimport java.util.logging.Logger;\n\npublic class SimpleDemo  {\n\nLogger log = Logger.getLogger("SimpleDemo");\n\n//Need an inner class to store data\n/*required*/\npublic static class State {\n    /*some variables if you need */\n    public int sum = 0;\n}\n\n/*required*/\npublic State create() {\n    /* here could do some init work if needed */\n    return new State();\n}\n\n/*required*/\npublic void destroy(State state) {\n    /* here could do some destroy work if needed */\n}\n\n/*Not Required*/\npublic void reset(State state) {\n    /*if you want this udaf function can work with window function.*/\n    /*Must impl this, it will be reset to init state after calculate every window frame*/\n    state.sum = 0;\n}\n\n/*required*/\n//first argument is State, then other types your input\npublic void add(State state, Integer val) throws Exception {\n    /* here doing update work when input data*/\n    if (val != null) {\n        state.sum += val;\n    }\n}\n\n/*required*/\npublic void serialize(State state, DataOutputStream out) throws IOException {\n    /* serialize some data into buffer */\n    out.writeInt(state.sum);\n}\n\n/*required*/\npublic void deserialize(State state, DataInputStream in) throws IOException {\n    /* deserialize get data from buffer before you put */\n    int val = in.readInt();\n    state.sum = val;\n}\n\n/*required*/\npublic void merge(State state, State rhs) throws Exception {\n    /* merge data from state */\n    state.sum += rhs.sum;\n}\n\n/*required*/\n//return Type you defined\npublic Integer getValue(State state) throws Exception {\n    /* return finally result */\n    return state.sum;\n}\n}\n\n'})}),"\n"]}),"\n",(0,i.jsxs)(e.details,{children:["\n",(0,i.jsx)(e.summary,{children:" \u793A\u4F8B 2: MedianUDAF \u662F\u4E00\u4E2A\u8BA1\u7B97\u4E2D\u4F4D\u6570\u7684\u529F\u80FD\uFF0C\u8F93\u5165\u7C7B\u578B\u4E3A (DOUBLE, INT), \u8F93\u51FA\u4E3A DOUBLE "}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:'package org.apache.doris.udf.demo;\n\nimport java.io.DataInputStream;\nimport java.io.DataOutputStream;\nimport java.math.BigDecimal;\nimport java.util.Arrays;\nimport java.util.logging.Logger;\n\n/*UDAF \u8BA1\u7B97\u4E2D\u4F4D\u6570*/\npublic class MedianUDAF {\nLogger log = Logger.getLogger("MedianUDAF");\n\n//\u72B6\u6001\u5B58\u50A8\npublic static class State {\n    //\u8FD4\u56DE\u7ED3\u679C\u7684\u7CBE\u5EA6\n    int scale = 0;\n    //\u662F\u5426\u662F\u67D0\u4E00\u4E2A tablet \u4E0B\u7684\u67D0\u4E2A\u805A\u5408\u6761\u4EF6\u4E0B\u7684\u6570\u636E\u7B2C\u4E00\u6B21\u6267\u884C add \u65B9\u6CD5\n    boolean isFirst = true;\n    //\u6570\u636E\u5B58\u50A8\n    public StringBuilder stringBuilder;\n}\n\n//\u72B6\u6001\u521D\u59CB\u5316\npublic State create() {\n    State state = new State();\n    //\u6839\u636E\u6BCF\u4E2A tablet \u4E0B\u7684\u805A\u5408\u6761\u4EF6\u9700\u8981\u805A\u5408\u7684\u6570\u636E\u91CF\u5927\u5C0F\uFF0C\u9884\u5148\u521D\u59CB\u5316\uFF0C\u589E\u52A0\u6027\u80FD\n    state.stringBuilder = new StringBuilder(1000);\n    return state;\n}\n\n\n//\u5904\u7406\u6267\u884C\u5355\u4F4D\u5904\u7406\u5404\u81EA tablet \u4E0B\u7684\u5404\u81EA\u805A\u5408\u6761\u4EF6\u4E0B\u7684\u6BCF\u4E2A\u6570\u636E\npublic void add(State state, Double val, int scale) throws IOException {\n    if (val != null && state.isFirst) {\n        state.stringBuilder.append(scale).append(",").append(val).append(",");\n        state.isFirst = false;\n    } else if (val != null) {\n        state.stringBuilder.append(val).append(",");\n    }\n}\n\n//\u5904\u7406\u6570\u636E\u5B8C\u9700\u8981\u8F93\u51FA\u7B49\u5F85\u805A\u5408\npublic void serialize(State state, DataOutputStream out) throws IOException {\n    //\u76EE\u524D\u6682\u65F6\u53EA\u63D0\u4F9B DataOutputStream\uFF0C\u5982\u679C\u9700\u8981\u5E8F\u5217\u5316\u5BF9\u8C61\u53EF\u4EE5\u8003\u8651\u62FC\u63A5\u5B57\u7B26\u4E32\uFF0C\u8F6C\u6362 json\uFF0C\u5E8F\u5217\u5316\u6210\u5B57\u8282\u6570\u7EC4\u7B49\u65B9\u5F0F\n    //\u5982\u679C\u8981\u5E8F\u5217\u5316 State \u5BF9\u8C61\uFF0C\u53EF\u80FD\u9700\u8981\u81EA\u5DF1\u5C06 State \u5185\u90E8\u7C7B\u5B9E\u73B0\u5E8F\u5217\u5316\u63A5\u53E3\n    //\u6700\u7EC8\u90FD\u662F\u8981\u901A\u8FC7 DataOutputStream \u4F20\u8F93\n    out.writeUTF(state.stringBuilder.toString());\n}\n\n//\u83B7\u53D6\u5904\u7406\u6570\u636E\u6267\u884C\u5355\u4F4D\u8F93\u51FA\u7684\u6570\u636E\npublic void deserialize(State state, DataInputStream in) throws IOException {\n    String string = in.readUTF();\n    state.scale = Integer.parseInt(String.valueOf(string.charAt(0)));\n    StringBuilder stringBuilder = new StringBuilder(string.substring(2));\n    state.stringBuilder = stringBuilder;\n}\n\n//\u805A\u5408\u6267\u884C\u5355\u4F4D\u6309\u7167\u805A\u5408\u6761\u4EF6\u5408\u5E76\u67D0\u4E00\u4E2A\u952E\u4E0B\u6570\u636E\u7684\u5904\u7406\u7ED3\u679C ,\u6BCF\u4E2A\u952E\u7B2C\u4E00\u6B21\u5408\u5E76\u65F6\uFF0Cstate1 \u53C2\u6570\u662F\u521D\u59CB\u5316\u7684\u5B9E\u4F8B\npublic void merge(State state1, State state2) throws IOException {\n    state1.scale = state2.scale;\n    state1.stringBuilder.append(state2.stringBuilder.toString());\n}\n\n//\u5BF9\u6BCF\u4E2A\u952E\u5408\u5E76\u540E\u7684\u6570\u636E\u8FDB\u884C\u5E76\u8F93\u51FA\u6700\u7EC8\u7ED3\u679C\npublic Double getValue(State state) throws IOException {\n    String[] strings = state.stringBuilder.toString().split(",");\n    double[] doubles = new double[strings.length + 1];\n    doubles = Arrays.stream(strings).mapToDouble(Double::parseDouble).toArray();\n\n    Arrays.sort(doubles);\n    double n = doubles.length - 1;\n    double index = n * 0.5;\n\n    int low = (int) Math.floor(index);\n    int high = (int) Math.ceil(index);\n\n    double value = low == high ? (doubles[low] + doubles[high]) * 0.5 : doubles[high];\n\n    BigDecimal decimal = new BigDecimal(value);\n    return decimal.setScale(state.scale, BigDecimal.ROUND_HALF_UP).doubleValue();\n}\n\n//\u6BCF\u4E2A\u6267\u884C\u5355\u4F4D\u6267\u884C\u5B8C\u90FD\u4F1A\u6267\u884C\npublic void destroy(State state) {\n}\n\n}\n'})}),"\n"]}),"\n",(0,i.jsxs)(e.ol,{start:"2",children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u5728 Doris \u4E2D\u6CE8\u518C\u521B\u5EFA Java-UADF \u51FD\u6570\u3002\u66F4\u591A\u8BED\u6CD5\u5E2E\u52A9\u53EF\u53C2\u9605 ",(0,i.jsx)(e.a,{href:"/zh-CN/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-FUNCTION",children:"CREATE FUNCTION"}),"."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:'CREATE AGGREGATE FUNCTION simple_demo(INT) RETURNS INT PROPERTIES (\n    "file"="file:///pathTo/java-udaf.jar",\n    "symbol"="org.apache.doris.udf.SimpleDemo",\n    "always_nullable"="true",\n    "type"="JAVA_UDF"\n);\n'})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u4F7F\u7528 Java-UDAF, \u53EF\u4EE5\u5206\u7EC4\u805A\u5408\u6216\u8005\u805A\u5408\u5168\u90E8\u7ED3\u679C\uFF1A"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"select simple_demo(id) from test_table group by id;\n+-----------------+\n| simple_demo(id) |\n+-----------------+\n|               1 |\n|               6 |\n+-----------------+\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"select simple_demo(id) from test_table;\n+-----------------+\n| simple_demo(id) |\n+-----------------+\n|               7 |\n+-----------------+\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"java-udtf-\u5B9E\u4F8B\u4ECB\u7ECD",children:"Java-UDTF \u5B9E\u4F8B\u4ECB\u7ECD"}),"\n",(0,i.jsx)(e.admonition,{type:"tip",children:(0,i.jsx)(e.p,{children:"UDTF \u81EA Doris 3.0 \u7248\u672C\u5F00\u59CB\u652F\u6301"})}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u9996\u5148\u7F16\u5199\u5BF9\u5E94\u7684 Java UDTF \u4EE3\u7801\uFF0C\u6253\u5305\u751F\u6210 JAR \u5305\u3002\nUDTF \u548C UDF \u51FD\u6570\u4E00\u6837\uFF0C\u9700\u8981\u7528\u6237\u81EA\u4E3B\u5B9E\u73B0\u4E00\u4E2A ",(0,i.jsx)(e.code,{children:"evaluate"})," \u65B9\u6CD5\uFF0C\u4F46\u662F UDTF \u51FD\u6570\u7684\u8FD4\u56DE\u503C\u5FC5\u987B\u662F Array \u7C7B\u578B\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-JAVA",children:"public class UDTFStringTest {\n    public ArrayList<String> evaluate(String value, String separator) {\n        if (value == null || separator == null) {\n            return null;\n        } else {\n            return new ArrayList<>(Arrays.asList(value.split(separator)));\n        }\n    }\n}\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u5728 Doris \u4E2D\u6CE8\u518C\u521B\u5EFA Java-UDTF \u51FD\u6570\u3002\u6B64\u65F6\u4F1A\u6CE8\u518C\u4E24\u4E2A UTDF \u51FD\u6570\uFF0C\u53E6\u5916\u4E00\u4E2A\u662F\u5728\u51FD\u6570\u540D\u540E\u9762\u52A0\u4E0A",(0,i.jsx)(e.code,{children:"_outer"}),"\u540E\u7F00\uFF0C\u5176\u4E2D\u5E26\u540E\u7F00",(0,i.jsx)(e.code,{children:"_outer"})," \u7684\u662F\u9488\u5BF9\u7ED3\u679C\u4E3A 0 \u884C\u65F6\u7684\u7279\u6B8A\u5904\u7406\uFF0C\u5177\u4F53\u53EF\u67E5\u770B",(0,i.jsx)(e.a,{href:"/zh-CN/docs/dev/sql-manual/sql-functions/table-functions/explode-numbers-outer",children:"OUTER \u7EC4\u5408\u5668"}),"\u3002\n\u66F4\u591A\u8BED\u6CD5\u5E2E\u52A9\u53EF\u53C2\u9605 ",(0,i.jsx)(e.a,{href:"/zh-CN/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-FUNCTION",children:"CREATE FUNCTION"}),"."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:'CREATE TABLES FUNCTION java-utdf(string, string) RETURNS array<string> PROPERTIES (\n    "file"="file:///pathTo/java-udtf.jar",\n    "symbol"="org.apache.doris.udf.demo.UDTFStringTest",\n    "always_nullable"="true",\n    "type"="JAVA_UDF"\n);\n'})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u4F7F\u7528 Java-UDTF, \u5728 Doris \u4E2D\u4F7F\u7528 UDTF \u9700\u8981\u7ED3\u5408 ",(0,i.jsx)(e.a,{href:"/zh-CN/docs/dev/query-data/lateral-view",children:"Lateral View"}),", \u5B9E\u73B0\u884C\u8F6C\u5217\u7684\u6548\u679C :"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"select id, str, e1 from test_table lateral view java_utdf(str,',') tmp as e1;\n+------+-------+------+\n| id   | str   | e1   |\n+------+-------+------+\n|    1 | a,b,c | a    |\n|    1 | a,b,c | b    |\n|    1 | a,b,c | c    |\n|    6 | d,e   | d    |\n|    6 | d,e   | e    |\n+------+-------+------+\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u6700\u4F73\u5B9E\u8DF5",children:"\u6700\u4F73\u5B9E\u8DF5"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.em,{children:"Static \u53D8\u91CF\u52A0\u8F7D"})}),"\n",(0,i.jsxs)(e.p,{children:["\u5F53\u524D\u5728 Doris \u4E2D\uFF0C\u6267\u884C\u4E00\u4E2A UDF \u51FD\u6570\uFF0C\u4F8B\u5982 ",(0,i.jsx)(e.code,{children:"select udf(col) from table"}),", \u6BCF\u4E00\u4E2A\u5E76\u53D1 Instance \u4F1A\u52A0\u8F7D\u4E00\u6B21 udf.jar \u5305\uFF0C\u5728\u8BE5 Instance \u7ED3\u675F\u65F6\u5378\u8F7D\u6389 udf.jar \u5305\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"\u6240\u4EE5\u5F53 udf.jar \u6587\u4EF6\u4E2D\u9700\u8981\u52A0\u8F7D\u4E00\u4E2A\u51E0\u767E MB \u7684\u6587\u4EF6\u65F6\uFF0C\u4F1A\u56E0\u4E3A\u5E76\u53D1\u7684\u539F\u56E0\uFF0C\u4F7F\u5F97\u5360\u636E\u7684\u5185\u5B58\u6025\u5267\u589E\u5927\uFF0C\u5BB9\u6613 OOM\u3002\n\u6216\u8005\u60F3\u4F7F\u7528\u4E00\u4E2A\u8FDE\u63A5\u6C60\u65F6\uFF0C\u8FD9\u6837\u65E0\u6CD5\u505A\u5230\u4EC5\u5728 static \u533A\u57DF\u521D\u59CB\u5316\u4E00\u6B21\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u8FD9\u91CC\u63D0\u4F9B\u4E24\u4E2A\u89E3\u51B3\u65B9\u6848\uFF0C\u5176\u4E2D\u65B9\u6848\u4E8C\u9700\u8981 Doris \u7248\u672C\u5728 branch-3.0 \u4EE5\u4E0A\u624D\u884C\u3002"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.em,{children:"\u89E3\u51B3\u65B9\u6848 1:"})}),"\n",(0,i.jsx)(e.p,{children:"\u662F\u53EF\u4EE5\u5C06\u8D44\u6E90\u52A0\u8F7D\u4EE3\u7801\u62C6\u5206\u5F00\uFF0C\u5355\u72EC\u751F\u6210\u4E00\u4E2A JAR \u5305\u6587\u4EF6\uFF0C\u7136\u540E\u5176\u4ED6\u5305\u76F4\u63A5\u5F15\u7528\u8BE5\u8D44\u6E90 JAR \u5305\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5047\u8BBE\u5DF2\u7ECF\u5C06\u4EE3\u7801\u62C6\u5206\u4E3A\u4E86 DictLibrary \u548C FunctionUdf \u4E24\u4E2A\u6587\u4EF6\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:'public class DictLibrary {\n    private static HashMap<String, String> res = new HashMap<>();\n\n    static {\n        // suppose we built this dictionary from a certain local file.\n        res.put("key1", "value1");\n        res.put("key2", "value2");\n        res.put("key3", "value3");\n        res.put("0", "value4");\n        res.put("1", "value5");\n        res.put("2", "value6");\n    }\n\n    public static String evaluate(String key) {\n        if (key == null) {\n            return null;\n        }\n        return res.get(key);\n    }\n}\n'})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"public class FunctionUdf {\n    public String evaluate(String key) {\n        String value = DictLibrary.evaluate(key);\n        return value;\n    }\n}\n"})}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u5355\u72EC\u7F16\u8BD1 DictLibrary \u6587\u4EF6\uFF0C\u4F7F\u5176\u751F\u6210\u4E00\u4E2A\u72EC\u7ACB\u7684 JAR \u5305\uFF0C\u8FD9\u6837\u53EF\u4EE5\u5F97\u5230\u4E00\u4E2A\u8D44\u6E90\u6587\u4EF6\u5305 DictLibrary.jar:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:"javac   ./DictLibrary.java\njar -cf ./DictLibrary.jar ./DictLibrary.class\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u7F16\u8BD1 FunctionUdf \u6587\u4EF6\uFF0C\u9700\u8981\u5F15\u7528\u4E0A\u4E00\u6B65\u7684\u5230\u7684\u8D44\u6E90\u5305\u6700\u4E3A\u5E93\u4F7F\u7528\uFF0C\u8FD9\u6837\u6253\u5305\u540E\u53EF\u4EE5\u5F97\u5230 UDF \u7684 FunctionUdf.jar \u5305\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:"javac -cp ./DictLibrary.jar  ./FunctionUdf.java\njar  -cvf ./FunctionUdf.jar  ./FunctionUdf.class\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u7531\u4E8E\u60F3\u8BA9\u8D44\u6E90 JAR \u5305\u88AB\u6240\u6709\u7684\u5E76\u53D1\u5F15\u7528\uFF0C\u6240\u4EE5\u60F3\u8BA9\u5B83\u88AB JVM \u76F4\u63A5\u52A0\u8F7D\uFF0C\u53EF\u4EE5\u5C06\u5B83\u653E\u5230\u6307\u5B9A\u8DEF\u5F84 ",(0,i.jsx)(e.code,{children:"be/custom_lib"})," \u4E0B\u9762\uFF0CBE \u670D\u52A1\u91CD\u542F\u4E4B\u540E\u5C31\u53EF\u4EE5\u968F\u7740 JVM \u7684\u542F\u52A8\u52A0\u8F7D\u8FDB\u6765\uFF0C\u56E0\u6B64\u90FD\u4F1A\u968F\u7740\u670D\u52A1\u542F\u52A8\u800C\u52A0\u8F7D\uFF0C\u505C\u6B62\u800C\u91CA\u653E\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u6700\u540E\u5229\u7528 ",(0,i.jsx)(e.code,{children:"CREATE FUNCTION"})," \u8BED\u53E5\u521B\u5EFA\u4E00\u4E2A UDF \u51FD\u6570\uFF0C\u8FD9\u6837\u6BCF\u6B21\u5378\u8F7D\u4EC5\u662F FunctionUdf.jar\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:'CREATE FUNCTION java_udf_dict(string) RETURNS string PROPERTIES (\n "file"="file:///pathTo/FunctionUdf.jar",\n "symbol"="org.apache.doris.udf.FunctionUdf",\n "always_nullable"="true",\n "type"="JAVA_UDF"\n);\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.em,{children:"\u89E3\u51B3\u65B9\u6848 2:"})}),"\n",(0,i.jsx)(e.p,{children:"BE \u5168\u5C40\u7F13\u5B58 JAR \u5305\uFF0C\u81EA\u5B9A\u4E49\u8FC7\u671F\u6DD8\u6C70\u65F6\u95F4\uFF0C\u5728 create function \u65F6\u589E\u52A0\u4E24\u4E2A\u5C5E\u6027\u5B57\u6BB5\uFF0C\u5176\u4E2D\nstatic_load: \u7528\u4E8E\u5B9A\u4E49\u662F\u5426\u4F7F\u7528\u9759\u6001 cache \u52A0\u8F7D\u7684\u65B9\u5F0F\u3002"}),"\n",(0,i.jsx)(e.p,{children:"expiration_time: \u7528\u4E8E\u5B9A\u4E49 JAR \u5305\u7684\u8FC7\u671F\u65F6\u95F4\uFF0C\u5355\u4F4D\u4E3A\u5206\u949F\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u82E5\u4F7F\u7528\u9759\u6001 cache \u52A0\u8F7D\u65B9\u5F0F\uFF0C\u5219\u5728\u7B2C\u4E00\u6B21\u8C03\u7528\u8BE5 UDF \u51FD\u6570\u65F6\uFF0C\u5728\u521D\u59CB\u5316\u4E4B\u540E\u4F1A\u5C06\u8BE5 UDF \u7684\u5B9E\u4F8B\u7F13\u5B58\u8D77\u6765\uFF0C\u5728\u4E0B\u6B21\u8C03\u7528\u8BE5 UDF \u65F6\uFF0C\u9996\u5148\u4F1A\u5728 cache \u4E2D\u8FDB\u884C\u67E5\u627E\uFF0C\u5982\u679C\u6CA1\u6709\u627E\u5230\uFF0C\u5219\u4F1A\u8FDB\u884C\u76F8\u5173\u521D\u59CB\u5316\u64CD\u4F5C\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5E76\u4E14\u540E\u53F0\u6709\u7EBF\u7A0B\u5B9A\u671F\u68C0\u67E5\uFF0C\u5982\u679C\u5728\u914D\u7F6E\u7684\u8FC7\u671F\u6DD8\u6C70\u65F6\u95F4\u5185\uFF0C\u4E00\u76F4\u6CA1\u6709\u88AB\u8C03\u7528\u8FC7\uFF0C\u5219\u4F1A\u4ECE\u7F13\u5B58 cache \u4E2D\u6E05\u7406\u6389\u3002\u5982\u679C\u88AB\u8C03\u7528\u65F6\uFF0C\u5219\u4F1A\u81EA\u52A8\u66F4\u65B0\u7F13\u5B58\u65F6\u95F4\u70B9\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"public class Print extends UDF {\n    static Integer val = 0;\n    public Integer evaluate() {\n        val = val + 1;\n        return val;\n    }\n}\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:'CREATE FUNCTION print_12() RETURNS int \nPROPERTIES (\n    "file" = "file:///path/to/java-udf-demo-jar-with-dependencies.jar",\n    "symbol" = "org.apache.doris.udf.Print", \n    "always_nullable"="true",\n    "type" = "JAVA_UDF",\n    "static_load" = "true", // default value is false\n    "expiration_time" = "60" // default value is 360 minutes\n);\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u53EF\u4EE5\u770B\u5230\u7ED3\u679C\u662F\u4E00\u76F4\u5728\u9012\u589E\u7684\uFF0C\u8BC1\u660E\u52A0\u8F7D\u7684 JAR \u5305\u6CA1\u6709\u88AB\u5378\u8F7D\u540E\u53C8\u52A0\u8F7D\uFF0C\u5BFC\u81F4\u91CD\u65B0\u521D\u59CB\u5316\u53D8\u91CF\u4E3A 0."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"mysql [test_query_qa]>select print_12();\n+------------+\n| print_12() |\n+------------+\n|          1 |\n+------------+\n1 row in set (0.40 sec)\n\nmysql [test_query_qa]>select print_12();\n+------------+\n| print_12() |\n+------------+\n|          2 |\n+------------+\n1 row in set (0.03 sec)\n\nmysql [test_query_qa]>select print_12();\n+------------+\n| print_12() |\n+------------+\n|          3 |\n+------------+\n1 row in set (0.04 sec)\n\n"})})]})}function u(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(o,{...n})}):o(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return l},a:function(){return r}});var a=t(667294);let i={},s=a.createContext(i);function r(n){let e=a.useContext(s);return a.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),a.createElement(s.Provider,{value:e},n.children)}}}]);