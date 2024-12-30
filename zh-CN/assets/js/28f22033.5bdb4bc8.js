"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["841280"],{384974:function(e,n,s){s.r(n),s.d(n,{metadata:()=>l,contentTitle:()=>d,default:()=>o,assets:()=>t,toc:()=>c,frontMatter:()=>a});var l=JSON.parse('{"id":"data-operate/import/import-way/insert-into-manual","title":"Insert Into Select","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/data-operate/import/import-way/insert-into-manual.md","sourceDirName":"data-operate/import/import-way","slug":"/data-operate/import/import-way/insert-into-manual","permalink":"/zh-CN/docs/data-operate/import/import-way/insert-into-manual","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Insert Into Select","language":"zh-CN"},"sidebar":"docs","previous":{"title":"Routine Load","permalink":"/zh-CN/docs/data-operate/import/import-way/routine-load-manual"},"next":{"title":"Insert Into Values","permalink":"/zh-CN/docs/data-operate/import/import-way/insert-into-values-manual"}}'),i=s("785893"),r=s("250065");let a={title:"Insert Into Select",language:"zh-CN"},d=void 0,t={},c=[{value:"\u4F7F\u7528\u573A\u666F",id:"\u4F7F\u7528\u573A\u666F",level:2},{value:"\u57FA\u672C\u539F\u7406",id:"\u57FA\u672C\u539F\u7406",level:2},{value:"\u5FEB\u901F\u4E0A\u624B",id:"\u5FEB\u901F\u4E0A\u624B",level:2},{value:"\u524D\u7F6E\u68C0\u67E5",id:"\u524D\u7F6E\u68C0\u67E5",level:3},{value:"\u521B\u5EFA\u5BFC\u5165\u4F5C\u4E1A",id:"\u521B\u5EFA\u5BFC\u5165\u4F5C\u4E1A",level:3},{value:"\u67E5\u770B\u5BFC\u5165\u4F5C\u4E1A",id:"\u67E5\u770B\u5BFC\u5165\u4F5C\u4E1A",level:3},{value:"\u53D6\u6D88\u5BFC\u5165\u4F5C\u4E1A",id:"\u53D6\u6D88\u5BFC\u5165\u4F5C\u4E1A",level:3},{value:"\u53C2\u8003\u624B\u518C",id:"\u53C2\u8003\u624B\u518C",level:2},{value:"\u5BFC\u5165\u547D\u4EE4",id:"\u5BFC\u5165\u547D\u4EE4",level:3},{value:"\u5BFC\u5165\u914D\u7F6E\u53C2\u6570",id:"\u5BFC\u5165\u914D\u7F6E\u53C2\u6570",level:3},{value:"\u5BFC\u5165\u8FD4\u56DE\u503C",id:"\u5BFC\u5165\u8FD4\u56DE\u503C",level:3},{value:"\u5BFC\u5165\u6700\u4F73\u5B9E\u8DF5",id:"\u5BFC\u5165\u6700\u4F73\u5B9E\u8DF5",level:2},{value:"\u6570\u636E\u91CF",id:"\u6570\u636E\u91CF",level:3},{value:"\u67E5\u770B\u9519\u8BEF\u884C",id:"\u67E5\u770B\u9519\u8BEF\u884C",level:3},{value:"\u901A\u8FC7\u5916\u90E8\u8868 Multi-Catalog \u5BFC\u5165\u6570\u636E",id:"\u901A\u8FC7\u5916\u90E8\u8868-multi-catalog-\u5BFC\u5165\u6570\u636E",level:2},{value:"\u521B\u5EFA Hive Catalog",id:"\u521B\u5EFA-hive-catalog",level:3},{value:"\u5BFC\u5165\u6570\u636E",id:"\u5BFC\u5165\u6570\u636E",level:3},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:3},{value:"\u901A\u8FC7 TVF \u5BFC\u5165\u6570\u636E",id:"\u901A\u8FC7-tvf-\u5BFC\u5165\u6570\u636E",level:2},{value:"\u81EA\u52A8\u63A8\u65AD\u6587\u4EF6\u5217\u7C7B\u578B",id:"\u81EA\u52A8\u63A8\u65AD\u6587\u4EF6\u5217\u7C7B\u578B",level:3},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879-1",level:3},{value:"\u66F4\u591A\u5E2E\u52A9",id:"\u66F4\u591A\u5E2E\u52A9",level:2}];function h(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"INSERT INTO \u652F\u6301\u5C06 Doris \u67E5\u8BE2\u7684\u7ED3\u679C\u5BFC\u5165\u5230\u53E6\u4E00\u4E2A\u8868\u4E2D\u3002INSERT INTO \u662F\u4E00\u4E2A\u540C\u6B65\u5BFC\u5165\u65B9\u5F0F\uFF0C\u6267\u884C\u5BFC\u5165\u540E\u8FD4\u56DE\u5BFC\u5165\u7ED3\u679C\u3002\u53EF\u4EE5\u901A\u8FC7\u8BF7\u6C42\u7684\u8FD4\u56DE\u5224\u65AD\u5BFC\u5165\u662F\u5426\u6210\u529F\u3002INSERT INTO \u53EF\u4EE5\u4FDD\u8BC1\u5BFC\u5165\u4EFB\u52A1\u7684\u539F\u5B50\u6027\uFF0C\u8981\u4E48\u5168\u90E8\u5BFC\u5165\u6210\u529F\uFF0C\u8981\u4E48\u5168\u90E8\u5BFC\u5165\u5931\u8D25\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u4F7F\u7528\u573A\u666F",children:"\u4F7F\u7528\u573A\u666F"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u7528\u6237\u5E0C\u671B\u5C06\u5DF2\u7ECF\u5728 Doris \u8868\u4E2D\u7684\u6570\u636E\u8FDB\u884C ETL \u8F6C\u6362\u5E76\u5BFC\u5165\u5230\u4E00\u4E2A\u65B0\u7684 Doris \u8868\u4E2D\uFF0C\u6B64\u65F6\u9002\u5408\u4F7F\u7528 INSERT INTO SELECT \u8BED\u6CD5\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u4E0E Multi-Catalog \u5916\u90E8\u8868\u673A\u5236\u8FDB\u884C\u914D\u5408\uFF0C\u5982\u901A\u8FC7 Multi-Catalog \u6620\u5C04 MySQL \u6216\u8005 Hive \u7CFB\u7EDF\u4E2D\u7684\u8868\uFF0C\u7136\u540E\u901A\u8FC7 INSERT INTO SELECT \u8BED\u6CD5\u5C06\u5916\u90E8\u8868\u4E2D\u7684\u6570\u636E\u5BFC\u5165\u5230 Doris \u8868\u4E2D\u5B58\u50A8\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u901A\u8FC7 Table Value Function\uFF08TVF\uFF09\u529F\u80FD\uFF0C\u53EF\u4EE5\u76F4\u63A5\u5C06\u5BF9\u8C61\u5B58\u50A8\u6216 HDFS \u4E0A\u7684\u6587\u4EF6\u4F5C\u4E3A Table \u8FDB\u884C\u67E5\u8BE2\uFF0C\u5E76\u4E14\u652F\u6301\u81EA\u52A8\u7684\u5217\u7C7B\u578B\u63A8\u65AD\u3002\u7136\u540E\uFF0C\u901A\u8FC7 INSERT INTO SELECT \u8BED\u6CD5\u5C06\u5916\u90E8\u8868\u4E2D\u7684\u6570\u636E\u5BFC\u5165\u5230 Doris \u8868\u4E2D\u5B58\u50A8\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u57FA\u672C\u539F\u7406",children:"\u57FA\u672C\u539F\u7406"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u4F7F\u7528 INSERT INTO \u65F6\uFF0C\u9700\u8981\u901A\u8FC7 MySQL \u534F\u8BAE\u53D1\u8D77\u5BFC\u5165\u4F5C\u4E1A\u7ED9 FE \u8282\u70B9\uFF0CFE \u4F1A\u751F\u6210\u6267\u884C\u8BA1\u5212\uFF0C\u6267\u884C\u8BA1\u5212\u4E2D\u524D\u90E8\u662F\u67E5\u8BE2\u76F8\u5173\u7684\u7B97\u5B50\uFF0C\u6700\u540E\u4E00\u4E2A\u662F OlapTableSink \u7B97\u5B50\uFF0C\u7528\u4E8E\u5C06\u67E5\u8BE2\u7ED3\u679C\u5199\u5230\u76EE\u6807\u8868\u4E2D\u3002\u6267\u884C\u8BA1\u5212\u4F1A\u88AB\u53D1\u9001\u7ED9 BE \u8282\u70B9\u6267\u884C\uFF0CDoris \u4F1A\u9009\u5B9A\u4E00\u4E2A\u8282\u70B9\u505A\u4E3A Coordinator \u8282\u70B9\uFF0CCoordinator \u8282\u70B9\u8D1F\u8D23\u63A5\u53D7\u6570\u636E\u5E76\u5206\u53D1\u6570\u636E\u5230\u5176\u4ED6\u8282\u70B9\u4E0A\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u5FEB\u901F\u4E0A\u624B",children:"\u5FEB\u901F\u4E0A\u624B"}),"\n",(0,i.jsx)(n.p,{children:"INSERT INTO \u901A\u8FC7 MySQL \u534F\u8BAE\u63D0\u4EA4\u548C\u4F20\u8F93\u3002\u4E0B\u4F8B\u4EE5 MySQL \u547D\u4EE4\u884C\u4E3A\u4F8B\uFF0C\u6F14\u793A\u901A\u8FC7 INSERT INTO \u63D0\u4EA4\u5BFC\u5165\u4F5C\u4E1A\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u8BE6\u7EC6\u8BED\u6CD5\u53EF\u4EE5\u53C2\u89C1 ",(0,i.jsx)(n.a,{href:"/zh-CN/docs/sql-manual/sql-statements/data-modification/DML/INSERT",children:"INSERT INTO"}),"\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"\u524D\u7F6E\u68C0\u67E5",children:"\u524D\u7F6E\u68C0\u67E5"}),"\n",(0,i.jsxs)(n.p,{children:["INSERT INTO \u9700\u8981\u5BF9\u76EE\u6807\u8868\u7684 INSERT \u6743\u9650\u3002\u5982\u679C\u6CA1\u6709 INSERT \u6743\u9650\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",(0,i.jsx)(n.a,{href:"../../../sql-manual/sql-statements/account-management/GRANT-TO",children:"GRANT"})," \u547D\u4EE4\u7ED9\u7528\u6237\u6388\u6743\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"\u521B\u5EFA\u5BFC\u5165\u4F5C\u4E1A",children:"\u521B\u5EFA\u5BFC\u5165\u4F5C\u4E1A"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u521B\u5EFA\u6E90\u8868"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE testdb.test_table(\n    user_id            BIGINT       NOT NULL COMMENT "user id",\n    name               VARCHAR(20)           COMMENT "name",\n    age                INT                   COMMENT "age"\n)\nDUPLICATE KEY(user_id)\nDISTRIBUTED BY HASH(user_id) BUCKETS 10;\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"\u4F7F\u7528\u4EFB\u4F55\u65B9\u5F0F\u5411\u6E90\u8868\u5BFC\u5165\u6570\u636E\uFF08\u8FD9\u91CC\u4EE5 INSERT INTO VALUES \u4E3A\u4F8B\uFF09"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'INSERT INTO testdb.test_table (user_id, name, age)\nVALUES (1, "Emily", 25),\n       (2, "Benjamin", 35),\n       (3, "Olivia", 28),\n       (4, "Alexander", 60),\n       (5, "Ava", 17);\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"\u5728\u4E0A\u8FF0\u64CD\u4F5C\u7684\u57FA\u7840\u4E0A\uFF0C\u521B\u5EFA\u4E00\u4E2A\u65B0\u8868\u4F5C\u4E3A\u76EE\u6807\u8868\uFF08\u5176 schema \u4E0E\u6E90\u8868\u76F8\u540C\uFF09"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE testdb.test_table2 LIKE testdb.test_table;\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsx)(n.li,{children:"\u4F7F\u7528 INSERT INTO SELECT \u5BFC\u5165\u5230\u65B0\u8868"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"INSERT INTO testdb.test_table2\nSELECT * FROM testdb.test_table WHERE age < 30;\nQuery OK, 3 rows affected (0.544 sec)\n{'label':'label_9c2bae970023407d_b2c5b78b368e78a7', 'status':'VISIBLE', 'txnId':'9084'}\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsx)(n.li,{children:"\u67E5\u770B\u5BFC\u5165\u6570\u636E"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"MySQL> SELECT * FROM testdb.test_table2 ORDER BY age;\n+---------+--------+------+\n| user_id | name   | age  |\n+---------+--------+------+\n|       5 | Ava    |   17 |\n|       1 | Emily  |   25 |\n|       3 | Olivia |   28 |\n+---------+--------+------+\n3 rows in set (0.02 sec)\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"6",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u53EF\u4EE5\u4F7F\u7528 ",(0,i.jsx)(n.a,{href:"../../scheduler/job-scheduler.md",children:"JOB"})," \u5F02\u6B65\u6267\u884C INSERT\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u6570\u636E\u6E90\u53EF\u4EE5\u662F ",(0,i.jsx)(n.a,{href:"/zh-CN/docs/lakehouse/file",children:"tvf"})," \u6216\u8005 ",(0,i.jsx)(n.a,{href:"../../../lakehouse/database",children:"catalog"})," \u4E2D\u7684\u8868\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u67E5\u770B\u5BFC\u5165\u4F5C\u4E1A",children:"\u67E5\u770B\u5BFC\u5165\u4F5C\u4E1A"}),"\n",(0,i.jsx)(n.p,{children:"\u53EF\u4EE5\u901A\u8FC7 show  load \u547D\u4EE4\u67E5\u770B\u5DF2\u5B8C\u6210\u7684 INSERT INTO \u4EFB\u52A1\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'MySQL> SHOW LOAD FROM testdb;\n+--------+-----------------------------------------+----------+--------------------+--------+---------+----------------------------------------------------------------------+----------+---------------------+---------------------+---------------------+---------------------+---------------------+------+-----------------------------------------------------------------------------------------------------------------------+---------------+--------------+------+---------+\n| JobId  | Label                                   | State    | Progress           | Type   | EtlInfo | TaskInfo                                                             | ErrorMsg | CreateTime          | EtlStartTime        | EtlFinishTime       | LoadStartTime       | LoadFinishTime      | URL  | JobDetails                                                                                                            | TransactionId | ErrorTablets | User | Comment |\n+--------+-----------------------------------------+----------+--------------------+--------+---------+----------------------------------------------------------------------+----------+---------------------+---------------------+---------------------+---------------------+---------------------+------+-----------------------------------------------------------------------------------------------------------------------+---------------+--------------+------+---------+\n| 376416 | label_3e52da787aab4222_9126d2fce8f6d1e5 | FINISHED | Unknown id: 376416 | INSERT | NULL    | cluster:N/A; timeout(s):26200; max_filter_ratio:0.0; priority:NORMAL | NULL     | 2024-02-27 01:22:17 | 2024-02-27 01:22:17 | 2024-02-27 01:22:17 | 2024-02-27 01:22:17 | 2024-02-27 01:22:18 |      | {"Unfinished backends":{},"ScannedRows":0,"TaskNumber":0,"LoadBytes":0,"All backends":{},"FileNumber":0,"FileSize":0} | 9081          | {}           | root |         |\n| 376664 | label_9c2bae970023407d_b2c5b78b368e78a7 | FINISHED | Unknown id: 376664 | INSERT | NULL    | cluster:N/A; timeout(s):26200; max_filter_ratio:0.0; priority:NORMAL | NULL     | 2024-02-27 01:39:37 | 2024-02-27 01:39:37 | 2024-02-27 01:39:37 | 2024-02-27 01:39:37 | 2024-02-27 01:39:38 |      | {"Unfinished backends":{},"ScannedRows":0,"TaskNumber":0,"LoadBytes":0,"All backends":{},"FileNumber":0,"FileSize":0} | 9084          | {}           | root |         |\n+--------+-----------------------------------------+----------+--------------------+--------+---------+----------------------------------------------------------------------+----------+---------------------+---------------------+---------------------+---------------------+---------------------+------+-----------------------------------------------------------------------------------------------------------------------+---------------+--------------+------+---------+\n'})}),"\n",(0,i.jsx)(n.h3,{id:"\u53D6\u6D88\u5BFC\u5165\u4F5C\u4E1A",children:"\u53D6\u6D88\u5BFC\u5165\u4F5C\u4E1A"}),"\n",(0,i.jsx)(n.p,{children:"\u7528\u6237\u53EF\u4EE5\u901A\u8FC7 Ctrl-C \u53D6\u6D88\u5F53\u524D\u6B63\u5728\u6267\u884C\u7684 INSERT INTO \u4F5C\u4E1A\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u53C2\u8003\u624B\u518C",children:"\u53C2\u8003\u624B\u518C"}),"\n",(0,i.jsx)(n.h3,{id:"\u5BFC\u5165\u547D\u4EE4",children:"\u5BFC\u5165\u547D\u4EE4"}),"\n",(0,i.jsx)(n.p,{children:"INSERT INTO SELECT \u4E00\u822C\u7528\u4E8E\u5C06\u67E5\u8BE2\u7ED3\u679C\u4FDD\u5B58\u5230\u76EE\u6807\u8868\u4E2D\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"INSERT INTO target_table SELECT ... FROM source_table;\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5176\u4E2D SELECT \u8BED\u53E5\u540C\u4E00\u822C\u7684 SELECT \u67E5\u8BE2\u8BED\u53E5\uFF0C\u53EF\u4EE5\u5305\u542B WHERE JOIN \u7B49\u64CD\u4F5C\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u5BFC\u5165\u914D\u7F6E\u53C2\u6570",children:"\u5BFC\u5165\u914D\u7F6E\u53C2\u6570"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"01 FE \u914D\u7F6E"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"insert_load_default_timeout_second"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u9ED8\u8BA4\u503C\uFF1A14400\uFF084 \u5C0F\u65F6\uFF09"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u53C2\u6570\u63CF\u8FF0\uFF1A\u5BFC\u5165\u4EFB\u52A1\u7684\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\uFF1A\u79D2\u3002\u5BFC\u5165\u4EFB\u52A1\u5728\u8BE5\u8D85\u65F6\u65F6\u95F4\u5185\u672A\u5B8C\u6210\u5219\u4F1A\u88AB\u7CFB\u7EDF\u53D6\u6D88\uFF0C\u53D8\u6210 CANCELLED\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"02 \u73AF\u5883\u53D8\u91CF"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"insert_timeout"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u9ED8\u8BA4\u503C\uFF1A14400\uFF084 \u5C0F\u65F6\uFF09"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u53C2\u6570\u63CF\u8FF0\uFF1AINSERT INTO \u4F5C\u4E3A SQL \u8BED\u53E5\u7684\u7684\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\uFF1A\u79D2\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"enable_insert_strict"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u9ED8\u8BA4\u503C\uFF1Atrue"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u53C2\u6570\u63CF\u8FF0\uFF1A\u5982\u679C\u8BBE\u7F6E\u4E3A true\uFF0C\u5F53 INSERT INTO \u9047\u5230\u4E0D\u5408\u683C\u6570\u636E\u65F6\u5BFC\u5165\u4F1A\u5931\u8D25\u3002\u5982\u679C\u8BBE\u7F6E\u4E3A false\uFF0CINSERT INTO \u4F1A\u5FFD\u7565\u4E0D\u5408\u683C\u7684\u884C\uFF0C\u53EA\u8981\u6709\u4E00\u6761\u6570\u636E\u88AB\u6B63\u786E\u5BFC\u5165\uFF0C\u5BFC\u5165\u5C31\u4F1A\u6210\u529F\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u89E3\u91CA\uFF1A\u5728 2.1.4 \u53CA\u4EE5\u524D\u7684\u7248\u672C\u4E2D\u3002INSERT INTO \u65E0\u6CD5\u63A7\u5236\u9519\u8BEF\u7387\uFF0C\u53EA\u80FD\u901A\u8FC7\u8BE5\u53C2\u6570\u8BBE\u7F6E\u4E3A\u4E25\u683C\u68C0\u67E5\u6570\u636E\u8D28\u91CF\u6216\u5B8C\u5168\u5FFD\u7565\u9519\u8BEF\u6570\u636E\u3002\u5E38\u89C1\u7684\u6570\u636E\u4E0D\u5408\u683C\u7684\u539F\u56E0\u6709\uFF1A\u6E90\u6570\u636E\u5217\u957F\u5EA6\u8D85\u8FC7\u76EE\u7684\u6570\u636E\u5217\u957F\u5EA6\u3001\u5217\u7C7B\u578B\u4E0D\u5339\u914D\u3001\u5206\u533A\u4E0D\u5339\u914D\u3001\u5217\u987A\u5E8F\u4E0D\u5339\u914D\u7B49\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"insert_max_filter_ratio"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u9ED8\u8BA4\u503C\uFF1A1.0"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u53C2\u6570\u63CF\u8FF0\uFF1A\u81EA 2.1.5 \u7248\u672C\u3002\u4EC5\u5F53 ",(0,i.jsx)(n.code,{children:"enable_insert_strict"})," \u503C\u4E3A false \u65F6\u751F\u6548\u3002\u7528\u4E8E\u63A7\u5236\u5F53\u4F7F\u7528 ",(0,i.jsx)(n.code,{children:"INSERT INTO FROM S3/HDFS/LOCAL()"})," \u65F6\uFF0C\u8BBE\u5B9A\u9519\u8BEF\u5BB9\u5FCD\u7387\u7684\u3002\u9ED8\u8BA4\u4E3A 1.0 \u8868\u793A\u5BB9\u5FCD\u6240\u6709\u9519\u8BEF\u3002\u53EF\u4EE5\u53D6\u503C 0 ~ 1 \u4E4B\u95F4\u7684\u5C0F\u6570\u3002\u8868\u793A\u5F53\u9519\u8BEF\u884C\u6570\u8D85\u8FC7\u8BE5\u6BD4\u4F8B\u540E\uFF0CINSERT \u4EFB\u52A1\u4F1A\u5931\u8D25\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u5BFC\u5165\u8FD4\u56DE\u503C",children:"\u5BFC\u5165\u8FD4\u56DE\u503C"}),"\n",(0,i.jsx)(n.p,{children:"INSERT INTO \u662F\u4E00\u4E2A SQL \u8BED\u53E5\uFF0C\u5176\u8FD4\u56DE\u7ED3\u679C\u4F1A\u6839\u636E\u67E5\u8BE2\u7ED3\u679C\u7684\u4E0D\u540C\uFF0C\u5206\u4E3A\u4EE5\u4E0B\u51E0\u79CD\uFF1A"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u7ED3\u679C\u96C6\u4E3A\u7A7A"})}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679C INSERT INTO \u4E2D\u7684 SELECT \u8BED\u53E5\u7684\u67E5\u8BE2\u7ED3\u679C\u96C6\u4E3A\u7A7A\uFF0C\u5219\u8FD4\u56DE\u5982\u4E0B\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"mysql> INSERT INTO tbl1 SELECT * FROM empty_tbl;\nQuery OK, 0 rows affected (0.02 sec)\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Query OK"})," \u8868\u793A\u6267\u884C\u6210\u529F\u3002",(0,i.jsx)(n.code,{children:"0 rows affected"})," \u8868\u793A\u6CA1\u6709\u6570\u636E\u88AB\u5BFC\u5165\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u7ED3\u679C\u96C6\u4E0D\u4E3A\u7A7A\u4E14 INSERT \u6267\u884C\u6210\u529F"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"mysql> INSERT INTO tbl1 SELECT * FROM tbl2;\nQuery OK, 4 rows affected (0.38 sec)\n{'label':'INSERT_8510c568-9eda-4173-9e36-6adc7d35291c', 'status':'visible', 'txnId':'4005'}\n\nmysql> INSERT INTO tbl1 WITH LABEL my_label1 SELECT * FROM tbl2;\nQuery OK, 4 rows affected (0.38 sec)\n{'label':'my_label1', 'status':'visible', 'txnId':'4005'}\n\nmysql> INSERT INTO tbl1 SELECT * FROM tbl2;\nQuery OK, 2 rows affected, 2 warnings (0.31 sec)\n{'label':'INSERT_f0747f0e-7a35-46e2-affa-13a235f4020d', 'status':'visible', 'txnId':'4005'}\n\nmysql> INSERT INTO tbl1 SELECT * FROM tbl2;\nQuery OK, 2 rows affected, 2 warnings (0.31 sec)\n{'label':'INSERT_f0747f0e-7a35-46e2-affa-13a235f4020d', 'status':'committed', 'txnId':'4005'}\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Query OK"})," \u8868\u793A\u6267\u884C\u6210\u529F\u3002",(0,i.jsx)(n.code,{children:"4 rows affected"})," \u8868\u793A\u603B\u5171\u6709 4 \u884C\u6570\u636E\u88AB\u5BFC\u5165\u3002",(0,i.jsx)(n.code,{children:"2 warnings"})," \u8868\u793A\u88AB\u8FC7\u6EE4\u7684\u884C\u6570\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u540C\u65F6\u4F1A\u8FD4\u56DE\u4E00\u4E2A JSON \u4E32\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plain",children:"{'label':'my_label1', 'status':'visible', 'txnId':'4005'}\n{'label':'INSERT_f0747f0e-7a35-46e2-affa-13a235f4020d', 'status':'committed', 'txnId':'4005'}\n{'label':'my_label1', 'status':'visible', 'txnId':'4005', 'err':'some other error'}\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5176\u4E2D\uFF0C\u8FD4\u56DE\u7ED3\u679C\u53C2\u6570\u5982\u4E0B\u8868\u8BF4\u660E\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u53C2\u6570\u540D\u79F0"}),(0,i.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"TxnId"}),(0,i.jsx)(n.td,{children:"\u5BFC\u5165\u4E8B\u52A1\u7684 ID"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Label"}),(0,i.jsx)(n.td,{children:"\u5BFC\u5165\u4F5C\u4E1A\u7684 label\uFF0C\u901A\u8FC7 INSERT INTO tbl WITH LABEL label ... \u6307\u5B9A"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Status"}),(0,i.jsxs)(n.td,{children:["\u8868\u793A\u5BFC\u5165\u6570\u636E\u662F\u5426\u53EF\u89C1\u3002\u5982\u679C\u53EF\u89C1\uFF0C\u663E\u793A ",(0,i.jsx)(n.code,{children:"visible"}),"\uFF0C\u5982\u679C\u4E0D\u53EF\u89C1\uFF0C\u663E\u793A ",(0,i.jsx)(n.code,{children:"committed"}),(0,i.jsxs)(n.p,{children:["- ",(0,i.jsx)(n.code,{children:"visible"}),"\uFF1A\u8868\u793A\u5BFC\u5165\u6210\u529F\uFF0C\u6570\u636E\u53EF\u89C1"]})," ",(0,i.jsxs)(n.p,{children:["- ",(0,i.jsx)(n.code,{children:"committed"}),"\uFF1A\u8BE5\u72B6\u6001\u4E5F\u8868\u793A\u5BFC\u5165\u5DF2\u7ECF\u5B8C\u6210\uFF0C\u53EA\u662F\u6570\u636E\u53EF\u80FD\u4F1A\u5EF6\u8FDF\u53EF\u89C1\uFF0C\u65E0\u9700\u91CD\u8BD5"]})," ",(0,i.jsx)(n.p,{children:"- Label Already Exists\uFF1ALabel \u91CD\u590D\uFF0C\u9700\u8981\u66F4\u6362 label"})," ",(0,i.jsx)(n.p,{children:"- Fail\uFF1A\u5BFC\u5165\u5931\u8D25"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Err"}),(0,i.jsx)(n.td,{children:"\u5BFC\u5165\u9519\u8BEF\u4FE1\u606F"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["\u5F53\u9700\u8981\u67E5\u770B\u88AB\u8FC7\u6EE4\u7684\u884C\u65F6\uFF0C\u7528\u6237\u53EF\u4EE5\u901A\u8FC7",(0,i.jsx)(n.a,{href:"../../../sql-manual/sql-statements/data-modification/load-and-export/SHOW-LOAD",children:" SHOW LOAD "}),"\u8BED\u53E5"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'SHOW LOAD WHERE label="xxx";\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u8FD4\u56DE\u7ED3\u679C\u4E2D\u7684 URL \u53EF\u4EE5\u7528\u4E8E\u67E5\u8BE2\u9519\u8BEF\u7684\u6570\u636E\uFF0C\u5177\u4F53\u89C1\u540E\u9762 \u67E5\u770B\u9519\u8BEF\u884C \u5C0F\u7ED3\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u6570\u636E\u4E0D\u53EF\u89C1\u662F\u4E00\u4E2A\u4E34\u65F6\u72B6\u6001\uFF0C\u8FD9\u6279\u6570\u636E\u6700\u7EC8\u662F\u4E00\u5B9A\u53EF\u89C1\u7684"}),"\n",(0,i.jsxs)(n.p,{children:["\u53EF\u4EE5\u901A\u8FC7",(0,i.jsx)(n.a,{href:"../../../sql-manual/sql-statements/transaction/SHOW-TRANSACTION",children:" SHOW TRANSACTION "}),"\u8BED\u53E5\u67E5\u770B\u8FD9\u6279\u6570\u636E\u7684\u53EF\u89C1\u72B6\u6001\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SHOW TRANSACTION WHERE id=4005;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u8FD4\u56DE\u7ED3\u679C\u4E2D\u7684 ",(0,i.jsx)(n.code,{children:"TransactionStatus"})," \u5217\u5982\u679C\u4E3A ",(0,i.jsx)(n.code,{children:"visible"}),"\uFF0C\u5219\u8868\u8FF0\u6570\u636E\u53EF\u89C1\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"{'label':'my_label1', 'status':'visible', 'txnId':'4005'}\n{'label':'INSERT_f0747f0e-7a35-46e2-affa-13a235f4020d', 'status':'committed', 'txnId':'4005'}\n{'label':'my_label1', 'status':'visible', 'txnId':'4005', 'err':'some other error'}\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u7ED3\u679C\u96C6\u4E0D\u4E3A\u7A7A\u4F46 INSERT \u6267\u884C\u5931\u8D25"})}),"\n",(0,i.jsx)(n.p,{children:"\u6267\u884C\u5931\u8D25\u8868\u793A\u6CA1\u6709\u4EFB\u4F55\u6570\u636E\u88AB\u6210\u529F\u5BFC\u5165\uFF0C\u5E76\u8FD4\u56DE\u5982\u4E0B\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'mysql> INSERT INTO tbl1 SELECT * FROM tbl2 WHERE k1 = "a";\nERROR 1064 (HY000): all partitions have no load data. url: http://10.74.167.16:8042/api/_load_error_log?file=_shard_2/error_loginsert_stmt_ba8bb9e158e4879-ae8de8507c0bf8a2_ba8bb9e158e4879_ae8de8507c0bf8a2\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u5176\u4E2D ",(0,i.jsx)(n.code,{children:"ERROR 1064 (HY000): all partitions have no load data"})," \u663E\u793A\u5931\u8D25\u539F\u56E0\u3002\u540E\u9762\u7684 url \u53EF\u4EE5\u7528\u4E8E\u67E5\u8BE2\u9519\u8BEF\u7684\u6570\u636E\uFF0C\u5177\u4F53\u89C1\u540E\u9762 \u67E5\u770B\u9519\u8BEF\u884C \u5C0F\u7ED3\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u5BFC\u5165\u6700\u4F73\u5B9E\u8DF5",children:"\u5BFC\u5165\u6700\u4F73\u5B9E\u8DF5"}),"\n",(0,i.jsx)(n.h3,{id:"\u6570\u636E\u91CF",children:"\u6570\u636E\u91CF"}),"\n",(0,i.jsxs)(n.p,{children:["INSERT INTO \u5BF9\u6570\u636E\u91CF\u6CA1\u6709\u9650\u5236\uFF0C\u5927\u6570\u636E\u91CF\u5BFC\u5165\u4E5F\u53EF\u4EE5\u652F\u6301\u3002\u4F46\u5982\u679C\u5BFC\u5165\u6570\u636E\u91CF\u8FC7\u5927\uFF0C\u5C31\u9700\u8981\u901A\u8FC7\u4EE5\u4E0B\u914D\u7F6E\u4FEE\u6539\u7CFB\u7EDF\u7684 INSERT INTO \u5BFC\u5165\u8D85\u65F6\u65F6\u95F4\uFF0C\u786E\u4FDD",(0,i.jsx)(n.code,{children:"\u5BFC\u5165\u8D85\u65F6 >= \u6570\u636E\u91CF ``/`` \u9884\u4F30\u5BFC\u5165\u901F\u5EA6"}),"\u3002"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["FE \u914D\u7F6E\u53C2\u6570",(0,i.jsx)(n.code,{children:"insert_load_default_timeout_second"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u73AF\u5883\u53D8\u91CF ",(0,i.jsx)(n.code,{children:"insert_timeout"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u67E5\u770B\u9519\u8BEF\u884C",children:"\u67E5\u770B\u9519\u8BEF\u884C"}),"\n",(0,i.jsx)(n.p,{children:"\u5F53 INSERT INTO \u8FD4\u56DE\u7ED3\u679C\u4E2D\u63D0\u4F9B\u4E86 url \u5B57\u6BB5\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u67E5\u770B\u9519\u8BEF\u884C\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'SHOW LOAD WARNINGS ON "url";\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u793A\u4F8B\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'SHOW LOAD WARNINGS ON "http://ip:port/api/_load_error_log?file=_shard_13/error_loginsert_stmt_d2cac0a0a16d482d-9041c949a4b71605_d2cac0a0a16d482d_9041c949a4b71605";\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u5E38\u89C1\u7684\u9519\u8BEF\u7684\u539F\u56E0\u6709\uFF1A\u6E90\u6570\u636E\u5217\u957F\u5EA6\u8D85\u8FC7\u76EE\u7684\u6570\u636E\u5217\u957F\u5EA6\u3001\u5217\u7C7B\u578B\u4E0D\u5339\u914D\u3001\u5206\u533A\u4E0D\u5339\u914D\u3001\u5217\u987A\u5E8F\u4E0D\u5339\u914D\u7B49\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u53EF\u4EE5\u901A\u8FC7\u73AF\u5883\u53D8\u91CF ",(0,i.jsx)(n.code,{children:"enable_insert_strict"}),"\u6765\u63A7\u5236 INSERT INTO \u662F\u5426\u5FFD\u7565\u9519\u8BEF\u884C\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u901A\u8FC7\u5916\u90E8\u8868-multi-catalog-\u5BFC\u5165\u6570\u636E",children:"\u901A\u8FC7\u5916\u90E8\u8868 Multi-Catalog \u5BFC\u5165\u6570\u636E"}),"\n",(0,i.jsxs)(n.p,{children:["Doris \u53EF\u4EE5\u521B\u5EFA\u5916\u90E8\u8868\u3002\u521B\u5EFA\u5B8C\u6210\u540E\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",(0,i.jsx)(n.code,{children:"INSERT INTO SELECT"})," \u7684\u65B9\u5F0F\u5BFC\u5165\u5916\u90E8\u8868\u7684\u6570\u636E\uFF0C\u5F53\u7136\u4E5F\u53EF\u4EE5\u901A\u8FC7 SELECT \u8BED\u53E5\u76F4\u63A5\u67E5\u8BE2\u5916\u90E8\u8868\u7684\u6570\u636E\uFF0C"]}),"\n",(0,i.jsx)(n.p,{children:"Doris \u901A\u8FC7\u591A\u6E90\u6570\u636E\u76EE\u5F55\uFF08Multi-Catalog\uFF09\u529F\u80FD\uFF0C\u652F\u6301\u4E86\u5305\u62EC Apache Hive\u3001Apache Iceberg\u3001Apache Hudi\u3001Apache Paimon(Incubating)\u3001Elasticsearch\u3001MySQL\u3001Oracle\u3001SQL Server \u7B49\u4E3B\u6D41\u6570\u636E\u6E56\u3001\u6570\u636E\u5E93\u7684\u8FDE\u63A5\u8BBF\u95EE\u3002"}),"\n",(0,i.jsx)(n.p,{children:"Multi-Catalog \u76F8\u5173\u529F\u80FD\uFF0C\u8BF7\u67E5\u770B\u6E56\u4ED3\u4E00\u4F53\u6587\u6863\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u8FD9\u91CC\u4EE5\u901A\u8FC7\u6784\u5EFA Hive \u5916\u90E8\u8868\uFF0C\u5BFC\u5165\u5176\u6570\u636E\u5230 Doris \u5185\u90E8\u8868\u6765\u4E3E\u4F8B\u8BF4\u660E\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u521B\u5EFA-hive-catalog",children:"\u521B\u5EFA Hive Catalog"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE CATALOG hive PROPERTIES (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://172.0.0.1:9083',\n    'hadoop.username' = 'hive',\n    'dfs.nameservices'='your-nameservice',\n    'dfs.ha.namenodes.your-nameservice'='nn1,nn2',\n    'dfs.namenode.rpc-address.your-nameservice.nn1'='172.21.0.2:8088',\n    'dfs.namenode.rpc-address.your-nameservice.nn2'='172.21.0.3:8088',\n    'dfs.client.failover.proxy.provider.your-nameservice'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider'\n);\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u5BFC\u5165\u6570\u636E",children:"\u5BFC\u5165\u6570\u636E"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u521B\u5EFA\u4E00\u5F20 Doris \u7684\u5BFC\u5165\u76EE\u6807\u8868"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE `target_tbl` (\n  `k1` decimal(9, 3) NOT NULL COMMENT "",\n  `k2` char(10) NOT NULL COMMENT "",\n  `k3` datetime NOT NULL COMMENT "",\n  `k5` varchar(20) NOT NULL COMMENT "",\n  `k6` double NOT NULL COMMENT ""\n)\nCOMMENT "Doris Table"\nDISTRIBUTED BY HASH(k1) BUCKETS 2\nPROPERTIES (\n    "replication_num" = "1"\n);\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u5173\u4E8E\u521B\u5EFA Doris \u8868\u7684\u8BE6\u7EC6\u8BF4\u660E\uFF0C\u8BF7\u53C2\u9605 ",(0,i.jsx)(n.a,{href:"../../../sql-manual/sql-statements/table-and-view/table/CREATE-TABLE",children:"CREATE-TABLE"})," \u8BED\u6CD5\u5E2E\u52A9\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5BFC\u5165\u6570\u636E (\u4ECE hive.db1.source_tbl \u8868\u5BFC\u5165\u5230 target_tbl \u8868)"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"INSERT INTO target_tbl SELECT k1,k2,k3 FROM  hive.db1.source_tbl limit 100;\n"})}),"\n",(0,i.jsx)(n.p,{children:"INSERT \u547D\u4EE4\u662F\u540C\u6B65\u547D\u4EE4\uFF0C\u8FD4\u56DE\u6210\u529F\uFF0C\u5373\u8868\u793A\u5BFC\u5165\u6210\u529F\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5FC5\u987B\u4FDD\u8BC1\u5916\u90E8\u6570\u636E\u6E90\u4E0E Doris \u96C6\u7FA4\u662F\u53EF\u4EE5\u4E92\u901A\uFF0C\u5305\u62EC BE \u8282\u70B9\u548C\u5916\u90E8\u6570\u636E\u6E90\u7684\u7F51\u7EDC\u662F\u4E92\u901A\u7684\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u901A\u8FC7-tvf-\u5BFC\u5165\u6570\u636E",children:"\u901A\u8FC7 TVF \u5BFC\u5165\u6570\u636E"}),"\n",(0,i.jsx)(n.p,{children:"\u901A\u8FC7 Table Value Function \u529F\u80FD\uFF0CDoris \u53EF\u4EE5\u76F4\u63A5\u5C06\u5BF9\u8C61\u5B58\u50A8\u6216 HDFS \u4E0A\u7684\u6587\u4EF6\u4F5C\u4E3A Table \u8FDB\u884C\u67E5\u8BE2\u5206\u6790\u3001\u5E76\u4E14\u652F\u6301\u81EA\u52A8\u7684\u5217\u7C7B\u578B\u63A8\u65AD\u3002\u8BE6\u7EC6\u4ECB\u7ECD\uFF0C\u8BF7\u53C2\u8003 \u6E56\u4ED3\u4E00\u4F53/TVF \u6587\u6863\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u81EA\u52A8\u63A8\u65AD\u6587\u4EF6\u5217\u7C7B\u578B",children:"\u81EA\u52A8\u63A8\u65AD\u6587\u4EF6\u5217\u7C7B\u578B"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plain",children:'DESC FUNCTION s3 (\n    "URI" = "http://127.0.0.1:9312/test2/test.snappy.parquet",\n    "s3.access_key"= "ak",\n    "s3.secret_key" = "sk",\n    "format" = "parquet",\n    "use_path_style"="true"\n);\n+---------------+--------------+------+-------+---------+-------+\n| Field         | Type         | Null | Key   | Default | Extra |\n+---------------+--------------+------+-------+---------+-------+\n| p_partkey     | INT          | Yes  | false | NULL    | NONE  |\n| p_name        | TEXT         | Yes  | false | NULL    | NONE  |\n| p_mfgr        | TEXT         | Yes  | false | NULL    | NONE  |\n| p_brand       | TEXT         | Yes  | false | NULL    | NONE  |\n| p_type        | TEXT         | Yes  | false | NULL    | NONE  |\n| p_size        | INT          | Yes  | false | NULL    | NONE  |\n| p_container   | TEXT         | Yes  | false | NULL    | NONE  |\n| p_retailprice | DECIMAL(9,0) | Yes  | false | NULL    | NONE  |\n| p_comment     | TEXT         | Yes  | false | NULL    | NONE  |\n+---------------+--------------+------+-------+---------+-------+\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u8FD9\u91CC\u7ED9\u51FA\u4E86\u4E86\u4E00\u4E2A s3 TVF \u7684\u4F8B\u5B50\u3002\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\u6307\u5B9A\u4E86\u6587\u4EF6\u7684\u8DEF\u5F84\u3001\u8FDE\u63A5\u4FE1\u606F\u3001\u8BA4\u8BC1\u4FE1\u606F\u7B49\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u4E4B\u540E\uFF0C\u901A\u8FC7 ",(0,i.jsx)(n.code,{children:"DESC FUNCTION"})," \u8BED\u6CD5\u53EF\u4EE5\u67E5\u770B\u8FD9\u4E2A\u6587\u4EF6\u7684 Schema\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u53EF\u4EE5\u770B\u5230\uFF0C\u5BF9\u4E8E Parquet \u6587\u4EF6\uFF0CDoris \u4F1A\u6839\u636E\u6587\u4EF6\u5185\u7684\u5143\u4FE1\u606F\u81EA\u52A8\u63A8\u65AD\u5217\u7C7B\u578B\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u76EE\u524D\u652F\u6301\u5BF9 Parquet\u3001ORC\u3001CSV\u3001Json \u683C\u5F0F\u8FDB\u884C\u5206\u6790\u548C\u5217\u7C7B\u578B\u63A8\u65AD\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u914D\u5408 ",(0,i.jsx)(n.code,{children:"INSERT INTO SELECT"})," \u8BED\u6CD5\uFF0C\u53EF\u4EE5\u65B9\u4FBF\u5C06\u6587\u4EF6\u5BFC\u5165\u5230 Doris \u8868\u4E2D\u8FDB\u884C\u66F4\u5FEB\u901F\u7684\u5206\u6790\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Plain",children:'// 1. \u521B\u5EFAdoris\u5185\u90E8\u8868\nCREATE TABLE IF NOT EXISTS test_table\n(\n    id int,\n    name varchar(50),\n    age int\n)\nDISTRIBUTED BY HASH(id) BUCKETS 4\nPROPERTIES("replication_num" = "1");\n\n// 2. \u4F7F\u7528 S3 Table Value Function \u63D2\u5165\u6570\u636E\nINSERT INTO test_table (id,name,age)\nSELECT cast(id as INT) as id, name, cast (age as INT) as age\nFROM s3(\n    "uri" = "http://127.0.0.1:9312/test2/test.snappy.parquet",\n    "s3.access_key"= "ak",\n    "s3.secret_key" = "sk",\n    "format" = "parquet",\n    "use_path_style" = "true");\n'})}),"\n",(0,i.jsx)(n.h3,{id:"\u6CE8\u610F\u4E8B\u9879-1",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u5982\u679C ",(0,i.jsx)(n.code,{children:"S3 / hdfs"})," TVF \u6307\u5B9A\u7684 uri \u5339\u914D\u4E0D\u5230\u6587\u4EF6\uFF0C\u6216\u8005\u5339\u914D\u5230\u7684\u6240\u6709\u6587\u4EF6\u90FD\u662F\u7A7A\u6587\u4EF6\uFF0C\u90A3\u4E48 ",(0,i.jsx)(n.code,{children:"S3 / hdfs"})," TVF \u5C06\u4F1A\u8FD4\u56DE\u7A7A\u7ED3\u679C\u96C6\u3002\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\u4F7F\u7528",(0,i.jsx)(n.code,{children:"DESC FUNCTION"}),"\u67E5\u770B\u8FD9\u4E2A\u6587\u4EF6\u7684 Schema\uFF0C\u4F1A\u5F97\u5230\u4E00\u5217\u865A\u5047\u7684\u5217",(0,i.jsx)(n.code,{children:"__dummy_col"}),"\uFF0C\u53EF\u5FFD\u7565\u8FD9\u4E00\u5217\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u5982\u679C\u6307\u5B9A TVF \u7684 format \u4E3A CSV ",(0,i.jsx)(n.code,{children:"The first line is empty, can not parse column numbers"}),", \u8FD9\u56E0\u4E3A\u65E0\u6CD5\u901A\u8FC7\u8BE5\u6587\u4EF6\u7684\u7B2C\u4E00\u884C\u89E3\u6790\u51FA Schema\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u66F4\u591A\u5E2E\u52A9",children:"\u66F4\u591A\u5E2E\u52A9"}),"\n",(0,i.jsxs)(n.p,{children:["\u5173\u4E8E Insert Into \u4F7F\u7528\u7684\u66F4\u591A\u8BE6\u7EC6\u8BED\u6CD5\uFF0C\u8BF7\u53C2\u9605 ",(0,i.jsx)(n.a,{href:"../../../sql-manual/sql-statements/data-modification/DML/INSERT",children:"INSERT INTO"})," \u547D\u4EE4\u624B\u518C\uFF0C\u4E5F\u53EF\u4EE5\u5728 MySQL \u5BA2\u6237\u7AEF\u547D\u4EE4\u884C\u4E0B\u8F93\u5165 ",(0,i.jsx)(n.code,{children:"HELP INSERT"})," \u83B7\u53D6\u66F4\u591A\u5E2E\u52A9\u4FE1\u606F\u3002"]})]})}function o(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return a}});var l=s(667294);let i={},r=l.createContext(i);function a(e){let n=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);