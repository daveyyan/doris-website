"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["268703"],{539343:function(e,r,n){n.r(r),n.d(r,{metadata:()=>t,contentTitle:()=>o,default:()=>h,assets:()=>c,toc:()=>l,frontMatter:()=>a});var t=JSON.parse('{"id":"db-connect/arrow-flight-sql-connect","title":"\u57FA\u4E8E Arrow Flight SQL \u7684\u9AD8\u901F\u6570\u636E\u4F20\u8F93\u94FE\u8DEF","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/db-connect/arrow-flight-sql-connect.md","sourceDirName":"db-connect","slug":"/db-connect/arrow-flight-sql-connect","permalink":"/zh-CN/docs/db-connect/arrow-flight-sql-connect","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"\u57FA\u4E8E Arrow Flight SQL \u7684\u9AD8\u901F\u6570\u636E\u4F20\u8F93\u94FE\u8DEF","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u6570\u636E\u5E93\u8FDE\u63A5","permalink":"/zh-CN/docs/db-connect/database-connect"},"next":{"title":"\u6982\u89C8","permalink":"/zh-CN/docs/table-design/overview"}}'),s=n("785893"),i=n("250065");let a={title:"\u57FA\u4E8E Arrow Flight SQL \u7684\u9AD8\u901F\u6570\u636E\u4F20\u8F93\u94FE\u8DEF",language:"zh-CN"},o=void 0,c={},l=[{value:"\u7528\u9014",id:"\u7528\u9014",level:2},{value:"Python \u4F7F\u7528\u65B9\u6CD5",id:"python-\u4F7F\u7528\u65B9\u6CD5",level:2},{value:"\u5B89\u88C5 Library",id:"\u5B89\u88C5-library",level:3},{value:"\u8FDE\u63A5 Doris",id:"\u8FDE\u63A5-doris",level:3},{value:"\u5EFA\u8868\u4E0E\u83B7\u53D6\u5143\u6570\u636E",id:"\u5EFA\u8868\u4E0E\u83B7\u53D6\u5143\u6570\u636E",level:3},{value:"\u5BFC\u5165\u6570\u636E",id:"\u5BFC\u5165\u6570\u636E",level:3},{value:"\u6267\u884C\u67E5\u8BE2",id:"\u6267\u884C\u67E5\u8BE2",level:3},{value:"\u5B8C\u6574\u4EE3\u7801",id:"\u5B8C\u6574\u4EE3\u7801",level:3},{value:"JDBC Connector with Arrow Flight SQL",id:"jdbc-connector-with-arrow-flight-sql",level:2},{value:"Java \u4F7F\u7528\u65B9\u6CD5",id:"java-\u4F7F\u7528\u65B9\u6CD5",level:2},{value:"ADBC Driver",id:"adbc-driver",level:3},{value:"JDBC Driver",id:"jdbc-driver",level:3},{value:"JDBC \u548C Java \u8FDE\u63A5\u65B9\u5F0F\u7684\u9009\u62E9",id:"jdbc-\u548C-java-\u8FDE\u63A5\u65B9\u5F0F\u7684\u9009\u62E9",level:3},{value:"\u4E0E\u5176\u4ED6\u5927\u6570\u636E\u7EC4\u4EF6\u4EA4\u4E92",id:"\u4E0E\u5176\u4ED6\u5927\u6570\u636E\u7EC4\u4EF6\u4EA4\u4E92",level:2},{value:"Spark &amp; Flink",id:"spark--flink",level:3},{value:"FAQ",id:"faq",level:2}];function d(e){let r={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.admonition,{type:"tip",children:(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"since 2.1"}),"\n"]})}),"\n",(0,s.jsx)(r.p,{children:"Doris \u57FA\u4E8E Arrow Flight SQL \u534F\u8BAE\u5B9E\u73B0\u4E86\u9AD8\u901F\u6570\u636E\u94FE\u8DEF\uFF0C\u652F\u6301\u591A\u79CD\u8BED\u8A00\u4F7F\u7528 SQL \u4ECE Doris \u9AD8\u901F\u8BFB\u53D6\u5927\u6279\u91CF\u6570\u636E\u3002"}),"\n",(0,s.jsx)(r.h2,{id:"\u7528\u9014",children:"\u7528\u9014"}),"\n",(0,s.jsx)(r.p,{children:"\u4ECE Doris \u52A0\u8F7D\u5927\u6279\u91CF\u6570\u636E\u5230\u5176\u4ED6\u7EC4\u4EF6\uFF0C\u5982 Python/Java/Spark/Flink\uFF0C\u53EF\u4EE5\u4F7F\u7528\u57FA\u4E8E Arrow Flight SQL \u7684 ADBC/JDBC \u66FF\u4EE3\u8FC7\u53BB\u7684 JDBC/PyMySQL/Pandas \u6765\u83B7\u5F97\u66F4\u9AD8\u7684\u8BFB\u53D6\u6027\u80FD\uFF0C\u8FD9\u5728\u6570\u636E\u79D1\u5B66\u3001\u6570\u636E\u6E56\u5206\u6790\u7B49\u573A\u666F\u4E2D\u7ECF\u5E38\u9047\u5230\u3002"}),"\n",(0,s.jsx)(r.p,{children:"Apache Arrow Flight SQL \u662F\u4E00\u4E2A\u7531 Apache Arrow \u793E\u533A\u5F00\u53D1\u7684\u4E0E\u6570\u636E\u5E93\u7CFB\u7EDF\u4EA4\u4E92\u7684\u534F\u8BAE\uFF0C\u7528\u4E8E ADBC \u5BA2\u6237\u7AEF\u4F7F\u7528 Arrow \u6570\u636E\u683C\u5F0F\u4E0E\u5B9E\u73B0\u4E86 Arrow Flight SQL \u534F\u8BAE\u7684\u6570\u636E\u5E93\u4EA4\u4E92\uFF0C\u5177\u6709 Arrow Flight \u7684\u901F\u5EA6\u4F18\u52BF\u4EE5\u53CA JDBC/ODBC \u7684\u6613\u7528\u6027\u3002"}),"\n",(0,s.jsxs)(r.p,{children:["Doris \u652F\u6301 Arrow Flight SQL \u7684\u52A8\u673A\u3001\u8BBE\u8BA1\u4E0E\u5B9E\u73B0\u3001\u6027\u80FD\u6D4B\u8BD5\u7ED3\u679C\u3001\u4EE5\u53CA\u6709\u5173 Arrow Flight\u3001ADBC \u7684\u66F4\u591A\u6982\u5FF5\u53EF\u4EE5\u770B ",(0,s.jsx)(r.a,{href:"https://github.com/apache/doris/issues/25514",children:"GitHub Issue"}),"\uFF0C\u8FD9\u7BC7\u6587\u6863\u4E3B\u8981\u4ECB\u7ECD Doris Arrow Flight SQL \u7684\u4F7F\u7528\u65B9\u6CD5\uFF0C\u4EE5\u53CA\u4E00\u4E9B\u5E38\u89C1\u95EE\u9898\u3002"]}),"\n",(0,s.jsxs)(r.p,{children:["\u5B89\u88C5 Apache Arrow \u4F60\u53EF\u4EE5\u53BB\u5B98\u65B9\u6587\u6863\uFF08\n",(0,s.jsx)(r.a,{href:"https://arrow.apache.org/install/",children:"Apache Arrow"}),"\uFF09\u627E\u5230\u8BE6\u7EC6\u7684\u5B89\u88C5\u6559\u7A0B\u3002"]}),"\n",(0,s.jsx)(r.h2,{id:"python-\u4F7F\u7528\u65B9\u6CD5",children:"Python \u4F7F\u7528\u65B9\u6CD5"}),"\n",(0,s.jsx)(r.p,{children:"\u4F7F\u7528 Python \u7684 ADBC Driver \u8FDE\u63A5 Doris \u5B9E\u73B0\u6570\u636E\u7684\u6781\u901F\u8BFB\u53D6\uFF0C\u4E0B\u9762\u7684\u6B65\u9AA4\u4F7F\u7528 Python\uFF08\u7248\u672C >= 3.9\uFF09\u7684 ADBC Driver \u6267\u884C\u4E00\u7CFB\u5217\u5E38\u89C1\u7684\u6570\u636E\u5E93\u8BED\u6CD5\u64CD\u4F5C\uFF0C\u5305\u62EC DDL\u3001DML\u3001\u8BBE\u7F6E Session \u53D8\u91CF\u4EE5\u53CA Show \u8BED\u53E5\u7B49\u3002"}),"\n",(0,s.jsx)(r.h3,{id:"\u5B89\u88C5-library",children:"\u5B89\u88C5 Library"}),"\n",(0,s.jsx)(r.p,{children:"Library \u88AB\u53D1\u5E03\u5728 PyPI\uFF0C\u53EF\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u7B80\u5355\u5B89\u88C5\uFF1A"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"pip install adbc_driver_manager\npip install adbc_driver_flightsql\n"})}),"\n",(0,s.jsx)(r.p,{children:"\u5728\u4EE3\u7801\u4E2Dimport \u4EE5\u4E0B\u6A21\u5757/\u5E93\u6765\u4F7F\u7528\u5DF2\u5B89\u88C5\u7684 Library\uFF1A"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-Python",children:"import adbc_driver_manager\nimport adbc_driver_flightsql.dbapi as flight_sql\n\n>>> print(adbc_driver_manager.__version__)\n1.1.0\n>>> print(adbc_driver_flightsql.__version__)\n1.1.0\n"})}),"\n",(0,s.jsx)(r.h3,{id:"\u8FDE\u63A5-doris",children:"\u8FDE\u63A5 Doris"}),"\n",(0,s.jsx)(r.p,{children:"\u521B\u5EFA\u4E0E Doris Arrow Flight SQL \u670D\u52A1\u4EA4\u4E92\u7684\u5BA2\u6237\u7AEF\u3002\u9700\u63D0\u4F9B Doris FE \u7684 Host\u3001Arrow Flight Port \u3001\u767B\u9646\u7528\u6237\u540D\u4EE5\u53CA\u5BC6\u7801\uFF0C\u5E76\u8FDB\u884C\u4EE5\u4E0B\u914D\u7F6E\u3002\n\u4FEE\u6539 Doris FE \u548C BE \u7684\u914D\u7F6E\u53C2\u6570\uFF1A"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u4FEE\u6539fe/conf/fe.conf \u4E2D arrow_flight_sql_port \u4E3A\u4E00\u4E2A\u53EF\u7528\u7AEF\u53E3\uFF0C\u5982 9090\u3002"}),"\n",(0,s.jsx)(r.li,{children:"\u4FEE\u6539 be/conf/be.conf\u4E2D arrow_flight_sql_port \u4E3A\u4E00\u4E2A\u53EF\u7528\u7AEF\u53E3\uFF0C\u5982 9091\u3002"}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"\u6CE8: fe.conf \u4E0E be.conf \u4E2D\u914D\u7F6E\u7684 arrow_flight_sql_port \u4E0D\u76F8\u540C"})}),"\n",(0,s.jsx)(r.p,{children:"\u5047\u8BBE Doris \u5B9E\u4F8B\u4E2D FE \u548C BE \u7684 Arrow Flight SQL \u670D\u52A1\u5C06\u5206\u522B\u5728\u7AEF\u53E3 9090 \u548C 9091 \u4E0A\u8FD0\u884C\uFF0C\u4E14 Doris \u7528\u6237\u540D/\u5BC6\u7801\u4E3A\u201Cuser\u201D/\u201Cpass\u201D\uFF0C\u90A3\u4E48\u8FDE\u63A5\u8FC7\u7A0B\u5982\u4E0B\u6240\u793A\uFF1A"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-Python",children:'conn = flight_sql.connect(uri="grpc://{FE_HOST}:{fe.conf:arrow_flight_sql_port}", db_kwargs={\n            adbc_driver_manager.DatabaseOptions.USERNAME.value: "user",\n            adbc_driver_manager.DatabaseOptions.PASSWORD.value: "pass",\n        })\ncursor = conn.cursor()\n'})}),"\n",(0,s.jsx)(r.p,{children:"\u8FDE\u63A5\u5B8C\u6210\u540E\uFF0C\u53EF\u4EE5\u901A\u8FC7 SQL \u4F7F\u8FD4\u56DE\u7684 Cursor \u4E0E Doris \u4EA4\u4E92\uFF0C\u6267\u884C\u4F8B\u5982\u5EFA\u8868\u3001\u83B7\u53D6\u5143\u6570\u636E\u3001\u5BFC\u5165\u6570\u636E\u3001\u67E5\u8BE2\u7B49\u64CD\u4F5C\u3002"}),"\n",(0,s.jsx)(r.h3,{id:"\u5EFA\u8868\u4E0E\u83B7\u53D6\u5143\u6570\u636E",children:"\u5EFA\u8868\u4E0E\u83B7\u53D6\u5143\u6570\u636E"}),"\n",(0,s.jsx)(r.p,{children:"\u5C06 Query \u4F20\u9012\u7ED9 cursor.execute\uFF08\uFF09\u51FD\u6570\uFF0C\u6267\u884C\u5EFA\u8868\u4E0E\u83B7\u53D6\u5143\u6570\u636E\u64CD\u4F5C\uFF1A"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-Python",children:'cursor.execute("DROP DATABASE IF EXISTS arrow_flight_sql FORCE;")\nprint(cursor.fetchallarrow().to_pandas())\n\ncursor.execute("create database arrow_flight_sql;")\nprint(cursor.fetchallarrow().to_pandas())\n\ncursor.execute("show databases;")\nprint(cursor.fetchallarrow().to_pandas())\n\ncursor.execute("use arrow_flight_sql;")\nprint(cursor.fetchallarrow().to_pandas())\n\ncursor.execute("""CREATE TABLE arrow_flight_sql_test\n    (\n         k0 INT,\n         k1 DOUBLE,\n         K2 varchar(32) NULL DEFAULT "" COMMENT "",\n         k3 DECIMAL(27,9) DEFAULT "0",\n         k4 BIGINT NULL DEFAULT \'10\',\n         k5 DATE,\n    )\n    DISTRIBUTED BY HASH(k5) BUCKETS 5\n    PROPERTIES("replication_num" = "1");""")\nprint(cursor.fetchallarrow().to_pandas())\n\ncursor.execute("show create table arrow_flight_sql_test;")\nprint(cursor.fetchallarrow().to_pandas())\n'})}),"\n",(0,s.jsx)(r.p,{children:"\u5982\u679C StatusResult \u8FD4\u56DE 0 \uFF0C\u5219\u8BF4\u660E Query \u6267\u884C\u6210\u529F\uFF08\u8FD9\u6837\u8BBE\u8BA1\u7684\u539F\u56E0\u662F\u4E3A\u4E86\u517C\u5BB9 JDBC\uFF09\u3002"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"  StatusResult\n0            0\n\n  StatusResult\n0            0\n\n                   Database\n0         __internal_schema\n1          arrow_flight_sql\n..                      ...\n507             udf_auth_db\n\n[508 rows x 1 columns]\n\n  StatusResult\n0            0\n\n  StatusResult\n0            0\n                   Table                                       Create Table\n0  arrow_flight_sql_test  CREATE TABLE `arrow_flight_sql_test` (\\n  `k0`...\n"})}),"\n",(0,s.jsx)(r.h3,{id:"\u5BFC\u5165\u6570\u636E",children:"\u5BFC\u5165\u6570\u636E"}),"\n",(0,s.jsx)(r.p,{children:"\u6267\u884C INSERT INTO\uFF0C\u5411\u6240\u521B\u5EFA\u8868\u4E2D\u5BFC\u5165\u5C11\u91CF\u6D4B\u8BD5\u6570\u636E\uFF1A"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-Python",children:"cursor.execute(\"\"\"INSERT INTO arrow_flight_sql_test VALUES\n        ('0', 0.1, \"ID\", 0.0001, 9999999999, '2023-10-21'),\n        ('1', 0.20, \"ID_1\", 1.00000001, 0, '2023-10-21'),\n        ('2', 3.4, \"ID_1\", 3.1, 123456, '2023-10-22'),\n        ('3', 4, \"ID\", 4, 4, '2023-10-22'),\n        ('4', 122345.54321, \"ID\", 122345.54321, 5, '2023-10-22');\"\"\")\nprint(cursor.fetchallarrow().to_pandas())\n"})}),"\n",(0,s.jsx)(r.p,{children:"\u5982\u4E0B\u6240\u793A\u5219\u8BC1\u660E\u5BFC\u5165\u6210\u529F\uFF1A"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"  StatusResult\n0            0\n"})}),"\n",(0,s.jsx)(r.p,{children:"\u5982\u679C\u9700\u8981\u5BFC\u5165\u5927\u6279\u91CF\u6570\u636E\u5230 Doris\uFF0C\u53EF\u4EE5\u4F7F\u7528 pydoris \u6267\u884C Stream Load \u6765\u5B9E\u73B0\u3002"}),"\n",(0,s.jsx)(r.h3,{id:"\u6267\u884C\u67E5\u8BE2",children:"\u6267\u884C\u67E5\u8BE2"}),"\n",(0,s.jsx)(r.p,{children:"\u63A5\u7740\u5BF9\u4E0A\u9762\u5BFC\u5165\u7684\u8868\u8FDB\u884C\u67E5\u8BE2\u67E5\u8BE2\uFF0C\u5305\u62EC\u805A\u5408\u3001\u6392\u5E8F\u3001Set Session Variable \u7B49\u64CD\u4F5C\u3002"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-Python",children:'cursor.execute("select * from arrow_flight_sql_test order by k0;")\nprint(cursor.fetchallarrow().to_pandas())\n\ncursor.execute("set exec_mem_limit=2000;")\nprint(cursor.fetchallarrow().to_pandas())\n\ncursor.execute("show variables like \\"%exec_mem_limit%\\";")\nprint(cursor.fetchallarrow().to_pandas())\n\ncursor.execute("select k5, sum(k1), count(1), avg(k3) from arrow_flight_sql_test group by k5;")\nprint(cursor.fetchallarrow().to_pandas())\n'})}),"\n",(0,s.jsx)(r.p,{children:"\u7ED3\u679C\u5982\u4E0B\u6240\u793A\uFF1A"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"   k0            k1    K2                k3          k4          k5\n0   0       0.10000    ID       0.000100000  9999999999  2023-10-21\n1   1       0.20000  ID_1       1.000000010           0  2023-10-21\n2   2       3.40000  ID_1       3.100000000      123456  2023-10-22\n3   3       4.00000    ID       4.000000000           4  2023-10-22\n4   4  122345.54321    ID  122345.543210000           5  2023-10-22\n\n[5 rows x 6 columns]\n\n  StatusResult\n0            0\n\n    Variable_name Value Default_Value Changed\n0  exec_mem_limit  2000    2147483648       1\n\n           k5  Nullable(Float64)_1  Int64_2 Nullable(Decimal(38, 9))_3\n0  2023-10-22         122352.94321        3            40784.214403333\n1  2023-10-21              0.30000        2                0.500050005\n\n[2 rows x 5 columns]\n"})}),"\n",(0,s.jsx)(r.h3,{id:"\u5B8C\u6574\u4EE3\u7801",children:"\u5B8C\u6574\u4EE3\u7801"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-Python",children:'# Doris Arrow Flight SQL Test\n\n# step 1, library is released on PyPI and can be easily installed.\n# pip install adbc_driver_manager\n# pip install adbc_driver_flightsql\nimport adbc_driver_manager\nimport adbc_driver_flightsql.dbapi as flight_sql\n\n# step 2, create a client that interacts with the Doris Arrow Flight SQL service.\n# Modify arrow_flight_sql_port in fe/conf/fe.conf to an available port, such as 9090.\n# Modify arrow_flight_sql_port in be/conf/be.conf to an available port, such as 9091.\nconn = flight_sql.connect(uri="grpc://{FE_HOST}:{fe.conf:arrow_flight_sql_port}", db_kwargs={\n            adbc_driver_manager.DatabaseOptions.USERNAME.value: "root",\n            adbc_driver_manager.DatabaseOptions.PASSWORD.value: "",\n        })\ncursor = conn.cursor()\n\n# interacting with Doris via SQL using Cursor\ndef execute(sql):\n    print("\\n### execute query: ###\\n " + sql)\n    cursor.execute(sql)\n    print("### result: ###")\n    print(cursor.fetchallarrow().to_pandas())\n\n# step3, execute DDL statements, create database/table, show stmt.\nexecute("DROP DATABASE IF EXISTS arrow_flight_sql FORCE;")\nexecute("show databases;")\nexecute("create database arrow_flight_sql;")\nexecute("show databases;")\nexecute("use arrow_flight_sql;")\nexecute("""CREATE TABLE arrow_flight_sql_test\n    (\n         k0 INT,\n         k1 DOUBLE,\n         K2 varchar(32) NULL DEFAULT "" COMMENT "",\n         k3 DECIMAL(27,9) DEFAULT "0",\n         k4 BIGINT NULL DEFAULT \'10\',\n         k5 DATE,\n    )\n    DISTRIBUTED BY HASH(k5) BUCKETS 5\n    PROPERTIES("replication_num" = "1");""")\nexecute("show create table arrow_flight_sql_test;")\n\n\n# step4, insert into\nexecute("""INSERT INTO arrow_flight_sql_test VALUES\n        (\'0\', 0.1, "ID", 0.0001, 9999999999, \'2023-10-21\'),\n        (\'1\', 0.20, "ID_1", 1.00000001, 0, \'2023-10-21\'),\n        (\'2\', 3.4, "ID_1", 3.1, 123456, \'2023-10-22\'),\n        (\'3\', 4, "ID", 4, 4, \'2023-10-22\'),\n        (\'4\', 122345.54321, "ID", 122345.54321, 5, \'2023-10-22\');""")\n\n\n# step5, execute queries, aggregation, sort, set session variable\nexecute("select * from arrow_flight_sql_test order by k0;")\nexecute("set exec_mem_limit=2000;")\nexecute("show variables like \\"%exec_mem_limit%\\";")\nexecute("select k5, sum(k1), count(1), avg(k3) from arrow_flight_sql_test group by k5;")\n\n# step6, close cursor \ncursor.close()\n'})}),"\n",(0,s.jsx)(r.h2,{id:"jdbc-connector-with-arrow-flight-sql",children:"JDBC Connector with Arrow Flight SQL"}),"\n",(0,s.jsx)(r.p,{children:"Arrow Flight SQL \u534F\u8BAE\u7684\u5F00\u6E90 JDBC \u9A71\u52A8\u517C\u5BB9\u6807\u51C6\u7684 JDBC API\uFF0C\u53EF\u7528\u4E8E\u5927\u591A\u6570 BI \u5DE5\u5177\u901A\u8FC7 JDBC \u8BBF\u95EE Doris\uFF0C\u5E76\u652F\u6301\u9AD8\u901F\u4F20\u8F93 Apache Arrow \u6570\u636E\u3002\u4F7F\u7528\u65B9\u6CD5\u4E0E\u901A\u8FC7 MySQL \u534F\u8BAE\u7684 JDBC \u9A71\u52A8\u8FDE\u63A5 Doris \u7C7B\u4F3C\uFF0C\u53EA\u9700\u5C06\u94FE\u63A5 URL \u4E2D\u7684 jdbc:mysql \u534F\u8BAE\u6362\u6210 jdbc:arrow-flight-sql \u534F\u8BAE\uFF0C\u67E5\u8BE2\u8FD4\u56DE\u7684\u7ED3\u679C\u4F9D\u7136\u662F JDBC \u7684 ResultSet \u6570\u636E\u7ED3\u6784\u3002"}),"\n",(0,s.jsx)(r.p,{children:"POM dependency:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-Java",children:"<properties>\n    <arrow.version>15.0.1</arrow.version>\n</properties>\n<dependencies>\n    <dependency>\n        <groupId>org.apache.arrow</groupId>\n        <artifactId>flight-sql-jdbc-core</artifactId>\n        <version>${arrow.version}</version>\n    </dependency>\n</dependencies>\n"})}),"\n",(0,s.jsx)(r.p,{children:"\u4F7F\u7528 Java 9 \u6216\u66F4\u9AD8\u7248\u672C\u65F6\uFF0C\u5FC5\u987B\u901A\u8FC7\u5728 Java \u547D\u4EE4\u4E2D\u6DFB\u52A0 --add-opens=java.base/java.nio=org.apache.arrow.memory.core,ALL-UNNAMED \u6765\u66B4\u9732\u67D0\u4E9B JDK \u5185\u90E8\u7ED3\u6784\uFF1A"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-shell",children:'# Directly on the command line\n$ java --add-opens=java.base/java.nio=org.apache.arrow.memory.core,ALL-UNNAMED -jar ...\n# Indirectly via environment variables\n$ env _JAVA_OPTIONS="--add-opens=java.base/java.nio=org.apache.arrow.memory.core,ALL-UNNAMED" java -jar ...\n'})}),"\n",(0,s.jsxs)(r.p,{children:["\u5426\u5219\uFF0C\u60A8\u53EF\u80FD\u4F1A\u770B\u5230\u4E00\u4E9B\u9519\u8BEF\uFF0C\u5982 ",(0,s.jsx)(r.code,{children:'module java.base does not "opens java.nio" to unnamed module'})," \u6216\u8005 ",(0,s.jsx)(r.code,{children:'module java.base does not "opens java.nio" to org.apache.arrow.memory.core'})," \u6216\u8005 ",(0,s.jsx)(r.code,{children:"ava.lang.NoClassDefFoundError: Could not initialize class org.apache.arrow.memory.util.MemoryUtil (Internal; Prepare)"})]}),"\n",(0,s.jsxs)(r.p,{children:["\u5982\u679C\u60A8\u5728 IntelliJ IDEA \u4E2D\u8C03\u8BD5\uFF0C\u9700\u8981\u5728 ",(0,s.jsx)(r.code,{children:"Run/Debug Configurations"})," \u7684 ",(0,s.jsx)(r.code,{children:"Build and run"})," \u4E2D\u589E\u52A0 ",(0,s.jsx)(r.code,{children:"--add-opens=java.base/java.nio=ALL-UNNAMED"}),"\uFF0C\u53C2\u7167\u4E0B\u9762\u7684\u56FE\u7247:"]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:"https://github.com/user-attachments/assets/7439ee6d-9013-40bf-89af-0365925d3fdb",alt:"IntelliJ IDEA"})}),"\n",(0,s.jsx)(r.p,{children:"\u8FDE\u63A5\u4EE3\u7801\u793A\u4F8B\u5982\u4E0B\uFF1A"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-Java",children:'import java.sql.Connection;\nimport java.sql.DriverManager;\nimport java.sql.ResultSet;\nimport java.sql.Statement;\n\nClass.forName("org.apache.arrow.driver.jdbc.ArrowFlightJdbcDriver");\nString DB_URL = "jdbc:arrow-flight-sql://{FE_HOST}:{fe.conf:arrow_flight_sql_port}?useServerPrepStmts=false"\n        + "&cachePrepStmts=true&useSSL=false&useEncryption=false";\nString USER = "root";\nString PASS = "";\n\nConnection conn = DriverManager.getConnection(DB_URL, USER, PASS);\nStatement stmt = conn.createStatement();\nResultSet resultSet = stmt.executeQuery("select * from information_schema.tables;");\nwhile (resultSet.next()) {\n    System.out.println(resultSet.toString());\n}\n\nresultSet.close();\nstmt.close();\nconn.close();\n'})}),"\n",(0,s.jsx)(r.h2,{id:"java-\u4F7F\u7528\u65B9\u6CD5",children:"Java \u4F7F\u7528\u65B9\u6CD5"}),"\n",(0,s.jsx)(r.p,{children:"\u9664\u4E86\u4F7F\u7528 JDBC\uFF0C\u4E0E Python \u7C7B\u4F3C\uFF0CJava \u4E5F\u53EF\u4EE5\u521B\u5EFA Driver \u8BFB\u53D6 Doris \u5E76\u8FD4\u56DE Arrow \u683C\u5F0F\u7684\u6570\u636E\uFF0C\u4E0B\u9762\u5206\u522B\u662F\u4F7F\u7528 AdbcDriver \u548C JdbcDriver \u8FDE\u63A5 Doris Arrow Flight Server\u3002"}),"\n",(0,s.jsx)(r.p,{children:"POM dependency:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-Java",children:"<properties>\n    <adbc.version>0.12.0</adbc.version>\n</properties>\n\n<dependencies>\n    <dependency>\n        <groupId>org.apache.arrow.adbc</groupId>\n        <artifactId>adbc-driver-jdbc</artifactId>\n        <version>${adbc.version}</version>\n    </dependency>\n    <dependency>\n        <groupId>org.apache.arrow.adbc</groupId>\n        <artifactId>adbc-core</artifactId>\n        <version>${adbc.version}</version>\n    </dependency>\n    <dependency>\n        <groupId>org.apache.arrow.adbc</groupId>\n        <artifactId>adbc-driver-manager</artifactId>\n        <version>${adbc.version}</version>\n    </dependency>\n    <dependency>\n        <groupId>org.apache.arrow.adbc</groupId>\n        <artifactId>adbc-sql</artifactId>\n        <version>${adbc.version}</version>\n    </dependency>\n    <dependency>\n        <groupId>org.apache.arrow.adbc</groupId>\n        <artifactId>adbc-driver-flight-sql</artifactId>\n        <version>${adbc.version}</version>\n    </dependency>\n</dependencies>\n"})}),"\n",(0,s.jsx)(r.h3,{id:"adbc-driver",children:"ADBC Driver"}),"\n",(0,s.jsx)(r.p,{children:"\u8FDE\u63A5\u4EE3\u7801\u793A\u4F8B\u5982\u4E0B\uFF1A"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-Java",children:'// 1. new driver\nfinal BufferAllocator allocator = new RootAllocator();\nFlightSqlDriver driver = new FlightSqlDriver(allocator);\nMap<String, Object> parameters = new HashMap<>();\nAdbcDriver.PARAM_URI.set(parameters, Location.forGrpcInsecure("{FE_HOST}", {fe.conf:arrow_flight_sql_port}).getUri().toString());\nAdbcDriver.PARAM_USERNAME.set(parameters, "root");\nAdbcDriver.PARAM_PASSWORD.set(parameters, "");\nAdbcDatabase adbcDatabase = driver.open(parameters);\n\n// 2. new connection\nAdbcConnection connection = adbcDatabase.connect();\nAdbcStatement stmt = connection.createStatement();\n\n// 3. execute query\nstmt.setSqlQuery("select * from information_schema.tables;");\nQueryResult queryResult = stmt.executeQuery();\nArrowReader reader = queryResult.getReader();\n\n// 4. load result\nList<String> result = new ArrayList<>();\nwhile (reader.loadNextBatch()) {\n    VectorSchemaRoot root = reader.getVectorSchemaRoot();\n    String tsvString = root.contentToTSVString();\n    result.add(tsvString);\n}\nSystem.out.printf("batchs %d\\n", result.size());\n\n// 5. close\nreader.close();\nqueryResult.close();\nstmt.close();\nconnection.close();\n'})}),"\n",(0,s.jsx)(r.h3,{id:"jdbc-driver",children:"JDBC Driver"}),"\n",(0,s.jsx)(r.p,{children:"\u8FDE\u63A5\u4EE3\u7801\u793A\u4F8B\u5982\u4E0B\uFF1A"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-Java",children:'final Map<String, Object> parameters = new HashMap<>();\nAdbcDriver.PARAM_URI.set(\n        parameters,"jdbc:arrow-flight-sql://{FE_HOST}:{fe.conf:arrow_flight_sql_port}?useServerPrepStmts=false&cachePrepStmts=true&useSSL=false&useEncryption=false");\nAdbcDriver.PARAM_USERNAME.set(parameters, "root");\nAdbcDriver.PARAM_PASSWORD.set(parameters, "");\ntry (\n        BufferAllocator allocator = new RootAllocator();\n        AdbcDatabase db = new JdbcDriver(allocator).open(parameters);\n        AdbcConnection connection = db.connect();\n        AdbcStatement stmt = connection.createStatement()\n) {\n    stmt.setSqlQuery("select * from information_schema.tables;");\n    AdbcStatement.QueryResult queryResult = stmt.executeQuery();\n    ArrowReader reader = queryResult.getReader();\n    List<String> result = new ArrayList<>();\n    while (reader.loadNextBatch()) {\n        VectorSchemaRoot root = reader.getVectorSchemaRoot();\n        String tsvString = root.contentToTSVString();\n        result.add(tsvString);\n    }\n    long etime = System.currentTimeMillis();\n    System.out.printf("batchs %d\\n", result.size());\n\n    reader.close();\n    queryResult.close();\n    stmt.close();\n}  catch (Exception e) {\n    e.printStackTrace();\n}\n'})}),"\n",(0,s.jsx)(r.h3,{id:"jdbc-\u548C-java-\u8FDE\u63A5\u65B9\u5F0F\u7684\u9009\u62E9",children:"JDBC \u548C Java \u8FDE\u63A5\u65B9\u5F0F\u7684\u9009\u62E9"}),"\n",(0,s.jsxs)(r.p,{children:["\u5BF9\u6BD4\u4F20\u7EDF\u7684 ",(0,s.jsx)(r.code,{children:"jdbc:mysql"})," \u8FDE\u63A5\u65B9\u5F0F\uFF0CJdbc \u548C Java \u7684 Arrow Flight SQL \u8FDE\u63A5\u65B9\u5F0F\u7684\u6027\u80FD\u6D4B\u8BD5\u89C1 ",(0,s.jsx)(r.a,{href:"https://github.com/apache/doris/issues/25514",children:"GitHub Issue"}),"\uFF0C\u8FD9\u91CC\u57FA\u4E8E\u6D4B\u8BD5\u7ED3\u8BBA\u7ED9\u51FA\u4E00\u4E9B\u4F7F\u7528\u5EFA\u8BAE\u3002"]}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"\u4E0A\u8FF0\u4E09\u79CD Java Arrow Flight SQL \u8FDE\u63A5\u65B9\u5F0F\u7684\u9009\u62E9\u4E0A\uFF0C\u5982\u679C\u540E\u7EED\u7684\u6570\u636E\u5206\u6790\u5C06\u57FA\u4E8E\u884C\u5B58\u7684\u6570\u636E\u683C\u5F0F\uFF0C\u90A3\u4E48\u4F7F\u7528 jdbc:arrow-flight-sql\uFF0C\u8FD9\u5C06\u8FD4\u56DE JDBC ResultSet \u683C\u5F0F\u7684\u6570\u636E\uFF1B\u5982\u679C\u540E\u7EED\u7684\u6570\u636E\u5206\u6790\u53EF\u4EE5\u57FA\u4E8E Arrow \u683C\u5F0F\u6216\u5176\u4ED6\u5217\u5B58\u6570\u636E\u683C\u5F0F\uFF0C\u90A3\u4E48\u4F7F\u7528 Flight AdbcDriver \u6216 Flight JdbcDriver \u76F4\u63A5\u8FD4\u56DE Arrow \u683C\u5F0F\u7684\u6570\u636E\uFF0C\u8FD9\u5C06\u907F\u514D\u884C\u5217\u8F6C\u6362\uFF0C\u5E76\u53EF\u5229\u7528 Arrow \u7684\u7279\u6027\u52A0\u901F\u6570\u636E\u89E3\u6790\u3002"}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["\u65E0\u8BBA\u89E3\u6790 JDBC ResultSet \u8FD8\u662F Arrow \u683C\u5F0F\u7684\u6570\u636E\uFF0C\u6240\u8017\u8D39\u7684\u65F6\u95F4\u90FD\u5927\u4E8E\u8BFB\u53D6\u6570\u636E\u7684\u8017\u65F6\uFF0C\u5982\u679C\u4F60\u90A3\u91CC\u4F7F\u7528 Arrow Flight SQL \u7684\u6027\u80FD\u4E0D\u7B26\u5408\u9884\u671F\uFF0C\u548C ",(0,s.jsx)(r.code,{children:"jdbc:mysql://"})," \u76F8\u6BD4\u63D0\u5347\u6709\u9650\uFF0C\u4E0D\u59A8\u5206\u6790\u4E0B\u662F\u5426\u89E3\u6790\u6570\u636E\u8017\u65F6\u592A\u957F\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"\u5BF9\u6240\u6709\u8FDE\u63A5\u65B9\u5F0F\u800C\u8A00\uFF0CJDK 17 \u90FD\u6BD4 JDK 1.8 \u8BFB\u53D6\u6570\u636E\u7684\u901F\u5EA6\u66F4\u5FEB\u3002"}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["\u5F53\u8BFB\u53D6\u6570\u636E\u91CF\u975E\u5E38\u5927\u65F6\uFF0C\u4F7F\u7528 Arrow Flight SQL \u5C06\u6BD4 ",(0,s.jsx)(r.code,{children:"jdbc:mysql://"})," \u4F7F\u7528\u66F4\u5C11\u7684\u5185\u5B58\uFF0C\u6240\u4EE5\u5982\u679C\u4F60\u53D7\u5185\u5B58\u4E0D\u8DB3\u56F0\u6270\uFF0C\u540C\u6837\u53EF\u4EE5\u5C1D\u8BD5\u4E0B Arrow Flight SQL\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"\u9664\u4E86\u4E0A\u8FF0\u4E09\u79CD\u8FDE\u63A5\u65B9\u5F0F\uFF0C\u8FD8\u53EF\u4EE5\u4F7F\u7528\u539F\u751F\u7684 FlightClient \u8FDE\u63A5 Arrow Flight Server\uFF0C\u53EF\u4EE5\u66F4\u52A0\u7075\u6D3B\u7684\u5E76\u884C\u8BFB\u53D6\u591A\u4E2A Endpoints\u3002Flight AdbcDriver\u4E5F\u662F\u57FA\u4E8E FlightClient \u521B\u5EFA\u7684\u94FE\u63A5\uFF0C\u76F8\u8F83\u4E8E\u76F4\u63A5\u4F7F\u7528 FlightClient \u66F4\u7B80\u5355\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"\u4E0E\u5176\u4ED6\u5927\u6570\u636E\u7EC4\u4EF6\u4EA4\u4E92",children:"\u4E0E\u5176\u4ED6\u5927\u6570\u636E\u7EC4\u4EF6\u4EA4\u4E92"}),"\n",(0,s.jsx)(r.h3,{id:"spark--flink",children:"Spark & Flink"}),"\n",(0,s.jsxs)(r.p,{children:["Arrow Flight \u5B98\u65B9\u76EE\u524D\u6CA1\u6709\u652F\u6301 Spark \u548C Flink \u7684\u8BA1\u5212\uFF08\u89C1 ",(0,s.jsx)(r.a,{href:"https://github.com/apache/arrow-adbc/issues/1490",children:"GitHub Issue"}),"\uFF09\uFF0C",(0,s.jsx)(r.a,{href:"https://github.com/apache/doris-spark-connector",children:"Doris Spark Connector"})," \u548C ",(0,s.jsx)(r.a,{href:"https://github.com/apache/doris-flink-connector",children:"Doris Flink Connector"})," \u76EE\u524D\u8FD8\u4E0D\u652F\u6301\u901A\u8FC7 Arrow Flight SQL \u8BBF\u95EE Doris\u3002\u5176\u4E2D Doris Flink Connector \u652F\u6301 Arrow Flight SQL \u6B63\u5728\u5F00\u53D1\u4E2D\uFF0C\u9884\u671F\u80FD\u63D0\u5347\u6570\u500D\u8BFB\u53D6\u6027\u80FD\u3002"]}),"\n",(0,s.jsxs)(r.p,{children:["\u793E\u533A\u4E4B\u524D\u53C2\u8003\u5F00\u6E90\u7684 ",(0,s.jsx)(r.a,{href:"https://github.com/qwshen/spark-flight-connector",children:"Spark-Flight-Connector"}),"\uFF0C\u5728 Spark \u4E2D\u4F7F\u7528 FlightClient \u8FDE\u63A5 Doris \u6D4B\u8BD5\uFF0C\u53D1\u73B0 Arrow \u4E0E Doris Block \u4E4B\u95F4\u6570\u636E\u683C\u5F0F\u8F6C\u6362\u7684\u901F\u5EA6\u66F4\u5FEB\uFF0C\u662F CSV \u683C\u5F0F\u4E0E Doris Block \u4E4B\u95F4\u8F6C\u6362\u901F\u5EA6\u7684 10 \u500D\uFF0C\u800C\u4E14\u5BF9 Map\uFF0CArray \u7B49\u590D\u6742\u7C7B\u578B\u7684\u652F\u6301\u66F4\u597D\uFF0C\u8FD9\u662F\u56E0\u4E3AArrow \u6570\u636E\u683C\u5F0F\u7684\u538B\u7F29\u7387\u9AD8\uFF0C\u4F20\u8F93\u65F6\u7F51\u7EDC\u5F00\u9500\u5C0F\u3002\u4E0D\u8FC7\u76EE\u524D Doris Arrow Flight \u8FD8\u6CA1\u6709\u5B9E\u73B0\u591A\u8282\u70B9\u5E76\u884C\u8BFB\u53D6\uFF0C\u4ECD\u662F\u5C06\u67E5\u8BE2\u7ED3\u679C\u6C47\u603B\u5230\u4E00\u53F0 BE \u8282\u70B9\u540E\u8FD4\u56DE\uFF0C\u5BF9\u7B80\u5355\u7684\u6279\u91CF\u5BFC\u51FA\u6570\u636E\u800C\u8A00\uFF0C\u6027\u80FD\u53EF\u80FD\u6CA1\u6709 Doris Spark Connector \u5FEB\uFF0C\u540E\u8005\u652F\u6301 Tablet \u7EA7\u522B\u7684\u5E76\u884C\u8BFB\u53D6\u3002\u5982\u679C\u4F60\u5E0C\u671B\u5728 Spark \u4F7F\u7528 Arrow Flight SQL \u8FDE\u63A5 Doris\uFF0C\u53EF\u4EE5\u53C2\u8003\u5F00\u6E90\u7684 ",(0,s.jsx)(r.a,{href:"https://github.com/qwshen/spark-flight-connector",children:"Spark-Flight-Connector"})," \u548C ",(0,s.jsx)(r.a,{href:"https://github.com/dremio-hub/dremio-flight-connector",children:"Dremio-Flight-Connector"})," \u81EA\u884C\u5B9E\u73B0\u3002"]}),"\n",(0,s.jsx)(r.h2,{id:"faq",children:"FAQ"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["ARM \u73AF\u5883\u62A5\u9519 ",(0,s.jsx)(r.code,{children:"get flight info statement failed, arrow flight schema timeout, TimeoutException: Waited 5000 milliseconds for io.grpc.stub.Client"}),"\uFF0C\u5982\u679C Linux \u5185\u6838\u7248\u672C <= 4.19.90\uFF0C\u9700\u8981\u5347\u7EA7\u5230 4.19.279 \u53CA\u4EE5\u4E0A\uFF0C\u6216\u8005\u5728\u4F4E\u7248\u672C Linux \u5185\u6838\u7684\u73AF\u5883\u4E2D\u91CD\u65B0\u7F16\u8BD1 Doris BE\uFF0C\u5177\u4F53\u7F16\u8BD1\u65B9\u6CD5\u53C2\u8003\u6587\u6863<docs/dev/install/source-install/compilation-arm>"]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["\u95EE\u9898\u539F\u56E0\uFF1A\u8FD9\u662F\u56E0\u4E3A\u8001\u7248\u672C Linux \u5185\u6838\u548C Arrow \u5B58\u5728\u517C\u5BB9\u6027\u95EE\u9898\uFF0C",(0,s.jsx)(r.code,{children:"cpp: arrow::RecordBatch::MakeEmpty()"})," \u6784\u9020 Arrow Record Batch \u65F6\u4F1A\u5361\u4F4F\uFF0C\u5BFC\u81F4 Doris BE \u7684 Arrow Flight Server \u5728 5000ms \u5185\u6CA1\u6709\u56DE\u5E94 Doris FE \u7684 Arrow Flight Server \u7684 RPC \u8BF7\u6C42\uFF0C\u5BFC\u81F4 FE \u7ED9 Client \u8FD4\u56DE rpc timeout failed\u3002Spark \u548C Flink \u8BFB\u53D6 Doris \u65F6\u4E5F\u662F\u5C06\u67E5\u8BE2\u7ED3\u679C\u8F6C\u6362\u6210 Arrow Record Batch \u540E\u8FD4\u56DE\uFF0C\u6240\u4EE5\u4E5F\u5B58\u5728\u540C\u6837\u7684\u95EE\u9898\u3002"]}),"\n",(0,s.jsx)(r.p,{children:"kylinv10 SP2 \u548C SP3 \u7684 Linux \u5185\u6838\u7248\u672C\u6700\u9AD8\u53EA\u6709 4.19.90-24.4.v2101.ky10.aarch64\uFF0C\u65E0\u6CD5\u7EE7\u7EED\u5347\u7EA7\u5185\u6838\u7248\u672C\uFF0C\u53EA\u80FD\u5728 kylinv10 \u4E0A\u91CD\u65B0\u7F16\u8BD1 Doris BE\uFF0C\u5982\u679C\u4F7F\u7528\u65B0\u7248\u672C ldb_toolchain \u7F16\u8BD1 Doris  BE \u540E\u95EE\u9898\u4F9D\u7136\u5B58\u5728\uFF0C\u53EF\u4EE5\u5C1D\u8BD5\u4F7F\u7528\u4F4E\u7248\u672C ldb_toolchain v0.17 \u7F16\u8BD1\uFF0C\u5982\u679C\u4F60\u7684 ARM \u73AF\u5883\u65E0\u6CD5\u8FDE\u5916\u7F51\uFF0C\u534E\u4E3A\u4E91\u63D0\u4F9B ARM + kylinv10\uFF0C\u963F\u91CC\u4E91\u63D0\u4F9B x86 + kylinv10"}),"\n",(0,s.jsxs)(r.ol,{start:"2",children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["\u76EE\u524D ",(0,s.jsx)(r.code,{children:"jdbc:arrow-flight-sql"})," \u548C Java ADBC/JDBCDriver \u4E0D\u652F\u6301 prepared statement \u4F20\u9012\u53C2\u6570\uFF0C\u7C7B\u4F3C",(0,s.jsx)(r.code,{children:"select * from xxx where id=?"}),"\uFF0C\u5C06\u62A5\u9519 ",(0,s.jsx)(r.code,{children:"parameter ordinal 1 out of range"}),"\uFF0C\u8FD9\u662F Arrow Flight SQL \u7684\u4E00\u4E2ABUG\uFF08",(0,s.jsx)(r.a,{href:"https://github.com/apache/arrow/issues/40118",children:"GitHub Issue"}),"\uFF09"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["\u4FEE\u6539 ",(0,s.jsx)(r.code,{children:"jdbc:arrow-flight-sql"})," \u6BCF\u6B21\u8BFB\u53D6\u7684\u6279\u6B21\u5927\u5C0F\uFF0C\u5728\u67D0\u4E9B\u573A\u666F\u4E0B\u53EF\u4EE5\u63D0\u5347\u6027\u80FD\uFF0C\u901A\u8FC7\u4FEE\u6539",(0,s.jsx)(r.code,{children:"org.apache.arrow.adbc.driver.jdbc.JdbcArrowReader"}),"\u6587\u4EF6\u4E2D",(0,s.jsx)(r.code,{children:"makeJdbcConfig"}),"\u65B9\u6CD5\u4E2D\u7684 ",(0,s.jsx)(r.code,{children:"setTargetBatchSize"}),"\uFF0C\u9ED8\u8BA4\u662F1024\uFF0C\u7136\u540E\u5C06\u4FEE\u6539\u540E\u7684\u6587\u4EF6\u4FDD\u5B58\u5230\u672C\u5730\u540C\u540D\u8DEF\u5F84\u76EE\u5F55\u4E0B\uFF0C\u4ECE\u800C\u8986\u76D6\u539F\u6587\u4EF6\u751F\u6548\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["ADBC v0.10\uFF0CJDBC \u548C Java ADBC/JDBCDriver \u8FD8\u4E0D\u652F\u6301\u5E76\u884C\u8BFB\u53D6\uFF0C\u6CA1\u6709\u5B9E\u73B0",(0,s.jsx)(r.code,{children:"stmt.executePartitioned()"}),"\u8FD9\u4E2A\u65B9\u6CD5\uFF0C\u53EA\u80FD\u4F7F\u7528\u539F\u751F\u7684 FlightClient \u5B9E\u73B0\u5E76\u884C\u8BFB\u53D6\u591A\u4E2A Endpoints, \u4F7F\u7528\u65B9\u6CD5",(0,s.jsx)(r.code,{children:"sqlClient=new FlightSqlClient, execute=sqlClient.execute(sql), endpoints=execute.getEndpoints(), for(FlightEndpoint endpoint: endpoints)"}),"\uFF0C\u6B64\u5916\uFF0CADBC V0.10 \u9ED8\u8BA4\u7684AdbcStatement\u5B9E\u9645\u662FJdbcStatement\uFF0CexecuteQuery\u540E\u5C06\u884C\u5B58\u683C\u5F0F\u7684 JDBC ResultSet \u53C8\u91CD\u65B0\u8F6C\u6210\u7684Arrow\u5217\u5B58\u683C\u5F0F\uFF0C\u9884\u671F\u5230 ADBC 1.0.0 \u65F6 Java ADBC \u5C06\u529F\u80FD\u5B8C\u5584 ",(0,s.jsx)(r.a,{href:"https://github.com/apache/arrow-adbc/issues/1490",children:"GitHub Issue"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["\u622A\u6B62Arrow v15.0\uFF0CArrow JDBC Connector \u4E0D\u652F\u6301\u5728 URL \u4E2D\u6307\u5B9A database name\uFF0C\u6BD4\u5982 ",(0,s.jsx)(r.code,{children:"jdbc:arrow-flight-sql://{FE_HOST}:{fe.conf:arrow_flight_sql_port}/test?useServerPrepStmts=false"})," \u4E2D\u6307\u5B9A\u8FDE\u63A5",(0,s.jsx)(r.code,{children:"test"})," database\u65E0\u6548\uFF0C\u53EA\u80FD\u624B\u52A8\u6267\u884CSQL ",(0,s.jsx)(r.code,{children:"use database"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["Doris 2.1.4 version \u5B58\u5728\u4E00\u4E2ABug\uFF0C\u8BFB\u53D6\u5927\u6570\u636E\u91CF\u65F6\u6709\u51E0\u7387\u62A5\u9519\uFF0C\u5728 ",(0,s.jsx)(r.a,{href:"https://github.com/apache/doris/pull/36827",children:"Fix arrow flight result sink #36827"})," \u8FD9\u4E2Apr\u4FEE\u590D\uFF0C\u5347\u7EA7 Doris 2.1.5 version \u53EF\u4EE5\u89E3\u51B3\u3002\u95EE\u9898\u8BE6\u60C5\u89C1\uFF1A",(0,s.jsx)(r.a,{href:"https://ask.selectdb.com/questions/D1Ia1/arrow-flight-sql-shi-yong-python-de-adbc-driver-lian-jie-doris-zhi-xing-cha-xun-sql-du-qu-bu-dao-shu-ju",children:"Questions"})]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"Warning: Cannot disable autocommit; conn will not be DB-API 2.0 compliant"})," \u4F7F\u7528 Python \u65F6\u5FFD\u7565\u8FD9\u4E2A Warning\uFF0C\u8FD9\u662F Python ADBC Client \u7684\u95EE\u9898\uFF0C\u8FD9\u4E0D\u4F1A\u5F71\u54CD\u67E5\u8BE2\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["Python \u62A5\u9519 ",(0,s.jsx)(r.code,{children:"grpc: received message larger than max (20748753 vs. 16777216)"}),"\uFF0C\u53C2\u8003 ",(0,s.jsx)(r.a,{href:"https://github.com/apache/arrow-adbc/issues/2078",children:"Python: grpc: received message larger than max (20748753 vs. 16777216) #2078"})," \u5728 Database Option \u4E2D\u589E\u52A0 ",(0,s.jsx)(r.code,{children:"adbc_driver_flightsql.DatabaseOptions.WITH_MAX_MSG_SIZE.value"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["Doris version 2.1.7 \u7248\u672C\u4E4B\u524D\uFF0C\u62A5\u9519 ",(0,s.jsx)(r.code,{children:"Reach limit of connections"}),"\uFF0C\u8FD9\u662F\u56E0\u4E3A\u6CA1\u6709\u9650\u5236\u5355\u4E2A\u7528\u6237\u7684 Arrow Flight \u8FDE\u63A5\u6570\u5C0F\u4E8E ",(0,s.jsx)(r.code,{children:"UserProperty"})," \u4E2D\u7684 ",(0,s.jsx)(r.code,{children:"max_user_connections"}),"\uFF0C\u9ED8\u8BA4100\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",(0,s.jsx)(r.code,{children:"SET PROPERTY FOR 'Billie' 'max_user_connections' = '1000';"})," \u4FEE\u6539 Billie \u7528\u6237\u7684\u5F53\u524D\u6700\u5927\u8FDE\u63A5\u6570\u5230 100\uFF0C\u6216\u8005\u5728 ",(0,s.jsx)(r.code,{children:"fe.conf"})," \u4E2D\u589E\u52A0 ",(0,s.jsx)(r.code,{children:"arrow_flight_token_cache_size=50"})," \u6765\u9650\u5236\u6574\u4F53\u7684 Arrow Flight \u8FDE\u63A5\u6570\u3002Doris version 2.1.7 \u7248\u672C\u4E4B\u524D Arrow Flight \u8FDE\u63A5\u9ED8\u8BA4 3\u5929 \u8D85\u65F6\u65AD\u5F00\uFF0C\u53EA\u5F3A\u5236\u8FDE\u63A5\u6570\u5C0F\u4E8E ",(0,s.jsx)(r.code,{children:"qe_max_connection/2"}),"\uFF0C\u8D85\u8FC7\u65F6\u4F9D\u636Elru\u6DD8\u6C70\uFF0C",(0,s.jsx)(r.code,{children:"qe_max_connection"})," \u662Ffe\u6240\u6709\u7528\u6237\u7684\u603B\u8FDE\u63A5\u6570\uFF0C\u9ED8\u8BA41024\u3002\u5177\u4F53\u53EF\u4EE5\u770B ",(0,s.jsx)(r.code,{children:"arrow_flight_token_cache_size"})," \u8FD9\u4E2Aconf\u7684\u4ECB\u7ECD\u3002\u5728 ",(0,s.jsx)(r.a,{href:"https://github.com/apache/doris/pull/39127",children:"Fix exceed user property max connection cause Reach limit of connections #39127"})," \u4FEE\u590D\uFF0C\u95EE\u9898\u8BE6\u60C5\u89C1\uFF1A",(0,s.jsx)(r.a,{href:"https://ask.selectdb.com/questions/D18b1/2-1-4-ban-ben-python-shi-yong-arrow-flight-sql-lian-jie-bu-hui-duan-kai-lian-jie-shu-zhan-man-da-dao-100/E1ic1?commentId=10070000000005324",children:"Questions"})]}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return o},a:function(){return a}});var t=n(667294);let s={},i=t.createContext(s);function a(e){let r=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);