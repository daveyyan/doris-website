"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["827240"],{133345:function(e,n,s){s.r(n),s.d(n,{metadata:()=>l,contentTitle:()=>d,default:()=>h,assets:()=>t,toc:()=>c,frontMatter:()=>a});var l=JSON.parse('{"id":"data-operate/import/import-way/insert-into-values-manual","title":"Insert Into Values","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/data-operate/import/import-way/insert-into-values-manual.md","sourceDirName":"data-operate/import/import-way","slug":"/data-operate/import/import-way/insert-into-values-manual","permalink":"/zh-CN/docs/data-operate/import/import-way/insert-into-values-manual","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Insert Into Values","language":"zh-CN"},"sidebar":"docs","previous":{"title":"Insert Into Select","permalink":"/zh-CN/docs/data-operate/import/import-way/insert-into-manual"},"next":{"title":"MySQL Load","permalink":"/zh-CN/docs/data-operate/import/import-way/mysql-load-manual"}}'),r=s("785893"),i=s("250065");let a={title:"Insert Into Values",language:"zh-CN"},d=void 0,t={},c=[{value:"\u4F7F\u7528\u573A\u666F",id:"\u4F7F\u7528\u573A\u666F",level:2},{value:"\u57FA\u672C\u539F\u7406",id:"\u57FA\u672C\u539F\u7406",level:2},{value:"\u5FEB\u901F\u4E0A\u624B",id:"\u5FEB\u901F\u4E0A\u624B",level:2},{value:"\u524D\u7F6E\u68C0\u67E5",id:"\u524D\u7F6E\u68C0\u67E5",level:3},{value:"\u521B\u5EFA\u5BFC\u5165\u4F5C\u4E1A",id:"\u521B\u5EFA\u5BFC\u5165\u4F5C\u4E1A",level:3},{value:"\u67E5\u770B\u5BFC\u5165\u4F5C\u4E1A",id:"\u67E5\u770B\u5BFC\u5165\u4F5C\u4E1A",level:3},{value:"\u53D6\u6D88\u5BFC\u5165\u4F5C\u4E1A",id:"\u53D6\u6D88\u5BFC\u5165\u4F5C\u4E1A",level:3},{value:"\u53C2\u8003\u624B\u518C",id:"\u53C2\u8003\u624B\u518C",level:2},{value:"\u5BFC\u5165\u547D\u4EE4",id:"\u5BFC\u5165\u547D\u4EE4",level:3},{value:"\u5BFC\u5165\u914D\u7F6E\u53C2\u6570",id:"\u5BFC\u5165\u914D\u7F6E\u53C2\u6570",level:3},{value:"\u5BFC\u5165\u8FD4\u56DE\u503C",id:"\u5BFC\u5165\u8FD4\u56DE\u503C",level:3},{value:"\u5BFC\u5165\u6700\u4F73\u5B9E\u8DF5",id:"\u5BFC\u5165\u6700\u4F73\u5B9E\u8DF5",level:2},{value:"\u6570\u636E\u91CF",id:"\u6570\u636E\u91CF",level:3},{value:"\u67E5\u770B\u9519\u8BEF\u884C",id:"\u67E5\u770B\u9519\u8BEF\u884C",level:3},{value:"\u66F4\u591A\u5E2E\u52A9",id:"\u66F4\u591A\u5E2E\u52A9",level:2}];function o(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"INSERT INTO VALUES \u8BED\u53E5\u652F\u6301\u5C06 SQL \u4E2D\u7684\u503C\u5BFC\u5165\u5230 Doris \u7684\u8868\u4E2D\u3002INSERT INTO VALUES \u662F\u4E00\u4E2A\u540C\u6B65\u5BFC\u5165\u65B9\u5F0F\uFF0C\u6267\u884C\u5BFC\u5165\u540E\u8FD4\u56DE\u5BFC\u5165\u7ED3\u679C\u3002\u53EF\u4EE5\u901A\u8FC7\u8BF7\u6C42\u7684\u8FD4\u56DE\u5224\u65AD\u5BFC\u5165\u662F\u5426\u6210\u529F\u3002INSERT INTO VALUES \u53EF\u4EE5\u4FDD\u8BC1\u5BFC\u5165\u4EFB\u52A1\u7684\u539F\u5B50\u6027\uFF0C\u8981\u4E48\u5168\u90E8\u5BFC\u5165\u6210\u529F\uFF0C\u8981\u4E48\u5168\u90E8\u5BFC\u5165\u5931\u8D25\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u4F7F\u7528\u573A\u666F",children:"\u4F7F\u7528\u573A\u666F"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u7528\u6237\u5E0C\u671B\u4EC5\u5BFC\u5165\u51E0\u6761\u5047\u6570\u636E\uFF0C\u9A8C\u8BC1\u4E00\u4E0B Doris \u7CFB\u7EDF\u7684\u529F\u80FD\u3002\u6B64\u65F6\u9002\u5408\u4F7F\u7528 INSERT INTO VALUES \u7684\u8BED\u6CD5\uFF0C\u8BED\u6CD5\u548C MySQL \u4E00\u6837\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["\u5E76\u53D1\u7684 INSERT INTO VALUES \u7684\u6027\u80FD\u4F1A\u53D7\u5230 commit \u9636\u6BB5\u7684\u74F6\u9888\u9650\u5236\u3002\u5BFC\u5165\u6570\u636E\u91CF\u8F83\u5927\u65F6\uFF0C\u53EF\u4EE5\u6253\u5F00 ",(0,r.jsx)(n.a,{href:"/zh-CN/docs/data-operate/import/group-commit-manual",children:"group commit"})," \u8FBE\u5230\u66F4\u9AD8\u7684\u6027\u80FD\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u57FA\u672C\u539F\u7406",children:"\u57FA\u672C\u539F\u7406"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u4F7F\u7528 INSERT INTO VALUES \u65F6\uFF0C\u9700\u8981\u901A\u8FC7 MySQL \u534F\u8BAE\u53D1\u8D77\u5BFC\u5165\u4F5C\u4E1A\u7ED9 FE \u8282\u70B9\uFF0CFE \u4F1A\u751F\u6210\u6267\u884C\u8BA1\u5212\uFF0C\u6267\u884C\u8BA1\u5212\u4E2D\u524D\u90E8\u662F\u67E5\u8BE2\u76F8\u5173\u7684\u7B97\u5B50\uFF0C\u6700\u540E\u4E00\u4E2A\u662F OlapTableSink \u7B97\u5B50\uFF0C\u7528\u4E8E\u5C06\u67E5\u8BE2\u7ED3\u679C\u5199\u5230\u76EE\u6807\u8868\u4E2D\u3002\u6267\u884C\u8BA1\u5212\u4F1A\u88AB\u53D1\u9001\u7ED9 BE \u8282\u70B9\u6267\u884C\uFF0CDoris \u4F1A\u9009\u5B9A\u4E00\u4E2A\u8282\u70B9\u505A\u4E3A Coordinator \u8282\u70B9\uFF0CCoordinator \u8282\u70B9\u8D1F\u8D23\u63A5\u53D7\u6570\u636E\u5E76\u5206\u53D1\u6570\u636E\u5230\u5176\u4ED6\u8282\u70B9\u4E0A\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u5FEB\u901F\u4E0A\u624B",children:"\u5FEB\u901F\u4E0A\u624B"}),"\n",(0,r.jsx)(n.p,{children:"INSERT INTO VALUES \u901A\u8FC7 MySQL \u534F\u8BAE\u63D0\u4EA4\u548C\u4F20\u8F93\u3002\u4E0B\u4F8B\u4EE5 MySQL \u547D\u4EE4\u884C\u4E3A\u4F8B\uFF0C\u6F14\u793A\u901A\u8FC7 INSERT INTO VALUES \u63D0\u4EA4\u5BFC\u5165\u4F5C\u4E1A\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u8BE6\u7EC6\u8BED\u6CD5\u53EF\u4EE5\u53C2\u89C1 ",(0,r.jsx)(n.a,{href:"/zh-CN/docs/sql-manual/sql-statements/data-modification/DML/INSERT",children:"INSERT INTO"}),"\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u524D\u7F6E\u68C0\u67E5",children:"\u524D\u7F6E\u68C0\u67E5"}),"\n",(0,r.jsxs)(n.p,{children:["INSERT INTO VALUES \u9700\u8981\u5BF9\u76EE\u6807\u8868\u7684 INSERT \u6743\u9650\u3002\u5982\u679C\u6CA1\u6709 INSERT \u6743\u9650\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",(0,r.jsx)(n.a,{href:"/zh-CN/docs/sql-manual/sql-statements/account-management/GRANT-TO",children:"GRANT"})," \u547D\u4EE4\u7ED9\u7528\u6237\u6388\u6743\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u521B\u5EFA\u5BFC\u5165\u4F5C\u4E1A",children:"\u521B\u5EFA\u5BFC\u5165\u4F5C\u4E1A"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"INSERT INTO VALUES"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u521B\u5EFA\u6E90\u8868"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE testdb.test_table(\n    user_id            BIGINT       NOT NULL COMMENT "user id",\n    name               VARCHAR(20)           COMMENT "name",\n    age                INT                   COMMENT "age"\n)\nDUPLICATE KEY(user_id)\nDISTRIBUTED BY HASH(user_id) BUCKETS 10;\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"\u4F7F\u7528 INSERT INTO VALUES \u5411\u6E90\u8868\u5BFC\u5165\u6570\u636E\uFF08\u4E0D\u63A8\u8350\u5728\u751F\u4EA7\u73AF\u5883\u4E2D\u4F7F\u7528\uFF09"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'INSERT INTO testdb.test_table (user_id, name, age)\nVALUES (1, "Emily", 25),\n       (2, "Benjamin", 35),\n       (3, "Olivia", 28),\n       (4, "Alexander", 60),\n       (5, "Ava", 17);\n'})}),"\n",(0,r.jsx)(n.p,{children:"INSERT INTO VALUES \u662F\u4E00\u79CD\u540C\u6B65\u5BFC\u5165\u65B9\u5F0F\uFF0C\u5BFC\u5165\u7ED3\u679C\u4F1A\u76F4\u63A5\u8FD4\u56DE\u7ED9\u7528\u6237\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-JSON",children:"Query OK, 5 rows affected (0.308 sec)\n{'label':'label_26eebc33411f441c_b2b286730d495e2c', 'status':'VISIBLE', 'txnId':'61071'}\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"\u67E5\u770B\u5BFC\u5165\u6570\u636E"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"MySQL> SELECT COUNT(*) FROM testdb.test_table;\n+----------+\n| count(*) |\n+----------+\n|        5 |\n+----------+\n1 row in set (0.179 sec)\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u67E5\u770B\u5BFC\u5165\u4F5C\u4E1A",children:"\u67E5\u770B\u5BFC\u5165\u4F5C\u4E1A"}),"\n",(0,r.jsx)(n.p,{children:"\u53EF\u4EE5\u901A\u8FC7 show  load \u547D\u4EE4\u67E5\u770B\u5DF2\u5B8C\u6210\u7684 INSERT INTO VALUES \u4EFB\u52A1\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'mysql> SHOW LOAD FROM testdb\\G\n*************************** 1. row ***************************\n         JobId: 77172\n         Label: label_26eebc33411f441c_b2b286730d495e2c\n         State: FINISHED\n      Progress: Unknown id: 77172\n          Type: INSERT\n       EtlInfo: NULL\n      TaskInfo: cluster:N/A; timeout(s):14400; max_filter_ratio:0.0\n      ErrorMsg: NULL\n    CreateTime: 2024-11-20 16:44:08\n  EtlStartTime: 2024-11-20 16:44:08\n EtlFinishTime: 2024-11-20 16:44:08\n LoadStartTime: 2024-11-20 16:44:08\nLoadFinishTime: 2024-11-20 16:44:08\n           URL: \n    JobDetails: {"Unfinished backends":{},"ScannedRows":0,"TaskNumber":0,"LoadBytes":0,"All backends":{},"FileNumber":0,"FileSize":0}\n TransactionId: 61071\n  ErrorTablets: {}\n          User: root\n       Comment: \n1 row in set (0.00 sec)\n'})}),"\n",(0,r.jsx)(n.h3,{id:"\u53D6\u6D88\u5BFC\u5165\u4F5C\u4E1A",children:"\u53D6\u6D88\u5BFC\u5165\u4F5C\u4E1A"}),"\n",(0,r.jsx)(n.p,{children:"\u7528\u6237\u53EF\u4EE5\u901A\u8FC7 Ctrl-C \u53D6\u6D88\u5F53\u524D\u6B63\u5728\u6267\u884C\u7684 INSERT INTO VALUES \u4F5C\u4E1A\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u53C2\u8003\u624B\u518C",children:"\u53C2\u8003\u624B\u518C"}),"\n",(0,r.jsx)(n.h3,{id:"\u5BFC\u5165\u547D\u4EE4",children:"\u5BFC\u5165\u547D\u4EE4"}),"\n",(0,r.jsx)(n.p,{children:"INSERT INTO VALUES \u4E00\u822C\u4EC5\u7528\u4E8E Demo\uFF0C\u4E0D\u5EFA\u8BAE\u5728\u751F\u4EA7\u73AF\u5883\u4F7F\u7528\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"INSERT INTO target_table (col1, col2, ...)\nVALUES (val1, val2, ...), (val3, val4, ...), ...;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u5BFC\u5165\u914D\u7F6E\u53C2\u6570",children:"\u5BFC\u5165\u914D\u7F6E\u53C2\u6570"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"01 FE \u914D\u7F6E"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"insert_load_default_timeout_second"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u9ED8\u8BA4\u503C\uFF1A14400\uFF084 \u5C0F\u65F6\uFF09"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u53C2\u6570\u63CF\u8FF0\uFF1A\u5BFC\u5165\u4EFB\u52A1\u7684\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\uFF1A\u79D2\u3002\u5BFC\u5165\u4EFB\u52A1\u5728\u8BE5\u8D85\u65F6\u65F6\u95F4\u5185\u672A\u5B8C\u6210\u5219\u4F1A\u88AB\u7CFB\u7EDF\u53D6\u6D88\uFF0C\u53D8\u6210 CANCELLED\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"02 \u73AF\u5883\u53D8\u91CF"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"insert_timeout"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u9ED8\u8BA4\u503C\uFF1A14400\uFF084 \u5C0F\u65F6\uFF09"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u53C2\u6570\u63CF\u8FF0\uFF1AINSERT INTO VALUES \u4F5C\u4E3A SQL \u8BED\u53E5\u7684\u7684\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\uFF1A\u79D2\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"enable_insert_strict"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u9ED8\u8BA4\u503C\uFF1Atrue"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u53C2\u6570\u63CF\u8FF0\uFF1A\u5982\u679C\u8BBE\u7F6E\u4E3A true\uFF0C\u5F53 INSERT INTO VALUES \u9047\u5230\u4E0D\u5408\u683C\u6570\u636E\u65F6\u5BFC\u5165\u4F1A\u5931\u8D25\u3002\u5982\u679C\u8BBE\u7F6E\u4E3A false\uFF0CINSERT INTO VALUES \u4F1A\u5FFD\u7565\u4E0D\u5408\u683C\u7684\u884C\uFF0C\u53EA\u8981\u6709\u4E00\u6761\u6570\u636E\u88AB\u6B63\u786E\u5BFC\u5165\uFF0C\u5BFC\u5165\u5C31\u4F1A\u6210\u529F\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u89E3\u91CA\uFF1A2.1.4 \u7248\u672C\u53CA\u4EE5\u524D\uFF0CINSERT INTO VALUES \u65E0\u6CD5\u63A7\u5236\u9519\u8BEF\u7387\uFF0C\u53EA\u80FD\u901A\u8FC7\u8BE5\u53C2\u6570\u8BBE\u7F6E\u4E3A\u4E25\u683C\u68C0\u67E5\u6570\u636E\u8D28\u91CF\u6216\u5B8C\u5168\u5FFD\u7565\u9519\u8BEF\u6570\u636E\u3002\u5E38\u89C1\u7684\u6570\u636E\u4E0D\u5408\u683C\u7684\u539F\u56E0\u6709\uFF1A\u6E90\u6570\u636E\u5217\u957F\u5EA6\u8D85\u8FC7\u76EE\u7684\u6570\u636E\u5217\u957F\u5EA6\u3001\u5217\u7C7B\u578B\u4E0D\u5339\u914D\u3001\u5206\u533A\u4E0D\u5339\u914D\u3001\u5217\u987A\u5E8F\u4E0D\u5339\u914D\u7B49\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"insert_max_filter_ratio"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u9ED8\u8BA4\u503C\uFF1A1.0"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u53C2\u6570\u63CF\u8FF0\uFF1A\u81EA 2.1.5 \u7248\u672C\u3002\u4EC5\u5F53 ",(0,r.jsx)(n.code,{children:"enable_insert_strict"})," \u503C\u4E3A false \u65F6\u751F\u6548\u3002\u7528\u4E8E\u63A7\u5236 ",(0,r.jsx)(n.code,{children:"INSERT INTO VALUES"})," \u65F6\u7684\u9519\u8BEF\u5BB9\u5FCD\u7387\u3002\u9ED8\u8BA4\u4E3A 1.0 \u8868\u793A\u5BB9\u5FCD\u6240\u6709\u9519\u8BEF\u3002\u53EF\u4EE5\u53D6\u503C 0 ~ 1 \u4E4B\u95F4\u7684\u5C0F\u6570\u3002\u8868\u793A\u5F53\u9519\u8BEF\u884C\u6570\u8D85\u8FC7\u8BE5\u6BD4\u4F8B\u540E\uFF0CINSERT \u4EFB\u52A1\u4F1A\u5931\u8D25\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u5BFC\u5165\u8FD4\u56DE\u503C",children:"\u5BFC\u5165\u8FD4\u56DE\u503C"}),"\n",(0,r.jsx)(n.p,{children:"INSERT INTO VALUES \u662F\u4E00\u4E2A SQL \u8BED\u53E5\uFF0C\u5176\u8FD4\u56DE\u7ED3\u679C\u4F1A\u5305\u542B\u4E00\u4E2A JSON \u5B57\u7B26\u4E32\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5176\u4E2D\u7684\u53C2\u6570\u5982\u4E0B\u8868\u8BF4\u660E\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u53C2\u6570\u540D\u79F0"}),(0,r.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Label"}),(0,r.jsx)(n.td,{children:"\u5BFC\u5165\u4F5C\u4E1A\u7684 label\uFF0C\u901A\u8FC7 INSERT INTO tbl WITH LABEL label ... \u6307\u5B9A"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Status"}),(0,r.jsxs)(n.td,{children:["\u8868\u793A\u5BFC\u5165\u6570\u636E\u662F\u5426\u53EF\u89C1\u3002\u5982\u679C\u53EF\u89C1\uFF0C\u663E\u793A ",(0,r.jsx)(n.code,{children:"visible"}),"\uFF0C\u5982\u679C\u4E0D\u53EF\u89C1\uFF0C\u663E\u793A ",(0,r.jsx)(n.code,{children:"committed"}),(0,r.jsxs)(n.p,{children:["- ",(0,r.jsx)(n.code,{children:"visible"}),"\uFF1A\u8868\u793A\u5BFC\u5165\u6210\u529F\uFF0C\u6570\u636E\u53EF\u89C1"]})," ",(0,r.jsxs)(n.p,{children:["- ",(0,r.jsx)(n.code,{children:"committed"}),"\uFF1A\u8BE5\u72B6\u6001\u4E5F\u8868\u793A\u5BFC\u5165\u5DF2\u7ECF\u5B8C\u6210\uFF0C\u53EA\u662F\u6570\u636E\u53EF\u80FD\u4F1A\u5EF6\u8FDF\u53EF\u89C1\uFF0C\u65E0\u9700\u91CD\u8BD5"]})," ",(0,r.jsx)(n.p,{children:"- Label Already Exists\uFF1ALabel \u91CD\u590D\uFF0C\u9700\u8981\u66F4\u6362 label"})," ",(0,r.jsx)(n.p,{children:"- Fail\uFF1A\u5BFC\u5165\u5931\u8D25"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Err"}),(0,r.jsx)(n.td,{children:"\u5BFC\u5165\u9519\u8BEF\u4FE1\u606F"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"TxnId"}),(0,r.jsx)(n.td,{children:"\u5BFC\u5165\u4E8B\u52A1\u7684 ID"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"INSERT \u6267\u884C\u6210\u529F"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"mysql> INSERT INTO test_table (user_id, name, age) VALUES (1, \"Emily\", 25), (2, \"Benjamin\", 35), (3, \"Olivia\", 28), (NULL, \"Alexander\", 60), (5, \"Ava\", 17);\nQuery OK, 5 rows affected (0.05 sec)\n{'label':'label_26eebc33411f441c_b2b286730d495e2c', 'status':'VISIBLE', 'txnId':'61071'}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5176\u4E2D ",(0,r.jsx)(n.code,{children:"Query OK"})," \u8868\u793A\u6267\u884C\u6210\u529F\u3002",(0,r.jsx)(n.code,{children:"5 rows affected"})," \u8868\u793A\u603B\u5171\u6709 5 \u884C\u6570\u636E\u88AB\u5BFC\u5165\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"INSERT \u6267\u884C\u6210\u529F\u4F46\u662F\u6709 warning"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"mysql> INSERT INTO test_table (user_id, name, age) VALUES (1, \"Emily\", 25), (2, \"Benjamin\", 35), (3, \"Olivia\", 28), (NULL, \"Alexander\", 60), (5, \"Ava\", 17);\nQuery OK, 4 rows affected, 1 warning (0.04 sec)\n{'label':'label_a8d99ae931194d2b_93357aac59981a18', 'status':'VISIBLE', 'txnId':'61068'}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5176\u4E2D ",(0,r.jsx)(n.code,{children:"Query OK"})," \u8868\u793A\u6267\u884C\u6210\u529F\u3002",(0,r.jsx)(n.code,{children:"4 rows affected"})," \u8868\u793A\u603B\u5171\u6709 4 \u884C\u6570\u636E\u88AB\u5BFC\u5165\u3002",(0,r.jsx)(n.code,{children:"1 warnings"})," \u8868\u793A\u88AB\u8FC7\u6EE4\u4E86 1 \u884C\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5F53\u9700\u8981\u67E5\u770B\u88AB\u8FC7\u6EE4\u7684\u884C\u65F6\uFF0C\u7528\u6237\u53EF\u4EE5\u901A\u8FC7 ",(0,r.jsx)(n.a,{href:"/zh-CN/docs/sql-manual/sql-statements/data-modification/load-and-export/SHOW-LOAD",children:"SHOW LOAD"}),"\u8BED\u53E5\u3002\u8FD4\u56DE\u7ED3\u679C\u4E2D\u7684 URL \u53EF\u4EE5\u7528\u4E8E\u67E5\u8BE2\u9519\u8BEF\u7684\u6570\u636E\uFF0C\u5177\u4F53\u89C1\u540E\u9762 \u67E5\u770B\u9519\u8BEF\u884C \u5C0F\u7ED3\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'mysql> SHOW LOAD WHERE label="label_a8d99ae931194d2b_93357aac59981a18"\\G\n*************************** 1. row ***************************\n         JobId: 77158\n         Label: label_a8d99ae931194d2b_93357aac59981a18\n         State: FINISHED\n      Progress: Unknown id: 77158\n          Type: INSERT\n       EtlInfo: NULL\n      TaskInfo: cluster:N/A; timeout(s):14400; max_filter_ratio:0.0\n      ErrorMsg: NULL\n    CreateTime: 2024-11-20 16:35:40\n  EtlStartTime: 2024-11-20 16:35:40\n EtlFinishTime: 2024-11-20 16:35:40\n LoadStartTime: 2024-11-20 16:35:40\nLoadFinishTime: 2024-11-20 16:35:40\n           URL: http://10.16.10.7:8743/api/_load_error_log?file=__shard_18/error_log_insert_stmt_a8d99ae931194d2b-93357aac59981a19_a8d99ae931194d2b_93357aac59981a19\n    JobDetails: {"Unfinished backends":{},"ScannedRows":0,"TaskNumber":0,"LoadBytes":0,"All backends":{},"FileNumber":0,"FileSize":0}\n TransactionId: 61068\n  ErrorTablets: {}\n          User: root\n       Comment: \n1 row in set (0.00 sec)\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"INSERT \u6267\u884C\u6210\u529F\u4F46\u662F status \u662F committed"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"mysql> INSERT INTO test_table (user_id, name, age) VALUES (1, \"Emily\", 25), (2, \"Benjamin\", 35), (3, \"Olivia\", 28), (4, \"Alexander\", 60), (5, \"Ava\", 17);\nQuery OK, 5 rows affected (0.04 sec)\n{'label':'label_78bf5396d9594d4d_a8d9a914af40f73d', 'status':'COMMITTED', 'txnId':'61074'}\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u6570\u636E\u4E0D\u53EF\u89C1\u662F\u4E00\u4E2A\u4E34\u65F6\u72B6\u6001\uFF0C\u8FD9\u6279\u6570\u636E\u6700\u7EC8\u662F\u4E00\u5B9A\u53EF\u89C1\u7684"}),"\n",(0,r.jsxs)(n.p,{children:["\u53EF\u4EE5\u901A\u8FC7 ",(0,r.jsx)(n.a,{href:"/zh-CN/docs/sql-manual/sql-statements/transaction/SHOW-TRANSACTION",children:"SHOW TRANSACTION"})," \u8BED\u53E5\u67E5\u770B\u8FD9\u6279\u6570\u636E\u7684\u53EF\u89C1\u72B6\u6001\u3002\n\u5F53\u8FD4\u56DE\u7ED3\u679C\u4E2D\u7684 ",(0,r.jsx)(n.code,{children:"TransactionStatus"})," \u5217\u53D8\u6210 ",(0,r.jsx)(n.code,{children:"VISIBLE"})," \u65F6\u4EE3\u8868\u6570\u636E\u53EF\u89C1\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"mysql> SHOW TRANSACTION WHERE id=61074\\G\n*************************** 1. row ***************************\n     TransactionId: 61074\n             Label: label_78bf5396d9594d4d_a8d9a914af40f73d\n       Coordinator: FE: 10.16.10.7\n TransactionStatus: VISIBLE\n LoadJobSourceType: INSERT_STREAMING\n       PrepareTime: 2024-11-20 16:51:54\n     PreCommitTime: NULL\n        CommitTime: 2024-11-20 16:51:54\n       PublishTime: 2024-11-20 16:51:54\n        FinishTime: 2024-11-20 16:51:54\n            Reason: \nErrorReplicasCount: 0\n        ListenerId: -1\n         TimeoutMs: 14400000\n            ErrMsg: \n1 row in set (0.00 sec)\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"INSERT \u6267\u884C\u5931\u8D25"})}),"\n",(0,r.jsx)(n.p,{children:"\u6267\u884C\u5931\u8D25\u8868\u793A\u6CA1\u6709\u4EFB\u4F55\u6570\u636E\u88AB\u6210\u529F\u5BFC\u5165\uFF0C\u5E76\u8FD4\u56DE\u5982\u4E0B\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'mysql> INSERT INTO test_table (user_id, name, age) VALUES (1, "Emily", 25), (2, "Benjamin", 35), (3, "Olivia", 28), (NULL, "Alexander", 60), (5, "Ava", 17);\nERROR 1105 (HY000): errCode = 2, detailMessage = Insert has too many filtered data 1/5 insert_max_filter_ratio is 0.100000. url: http://10.16.10.7:8747/api/_load_error_log?file=__shard_22/error_log_insert_stmt_5fafe6663e1a45e0-a666c1722ffc8c55_5fafe6663e1a45e0_a666c1722ffc8c55\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u5176\u4E2D ",(0,r.jsx)(n.code,{children:"ERROR 1105 (HY000): errCode = 2, detailMessage = Insert has too many filtered data 1/5 insert_max_filter_ratio is 0.100000."})," \u663E\u793A\u5931\u8D25\u539F\u56E0\u3002\u540E\u9762\u7684 url \u53EF\u4EE5\u7528\u4E8E\u67E5\u8BE2\u9519\u8BEF\u7684\u6570\u636E\uFF0C\u5177\u4F53\u89C1\u540E\u9762 \u67E5\u770B\u9519\u8BEF\u884C \u5C0F\u7ED3\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u5BFC\u5165\u6700\u4F73\u5B9E\u8DF5",children:"\u5BFC\u5165\u6700\u4F73\u5B9E\u8DF5"}),"\n",(0,r.jsx)(n.h3,{id:"\u6570\u636E\u91CF",children:"\u6570\u636E\u91CF"}),"\n",(0,r.jsx)(n.p,{children:"INSERT INTO VALUES \u901A\u5E38\u7528\u4E8E\u6D4B\u8BD5\u548C\u6F14\u793A\uFF0C\u4E0D\u5EFA\u8BAE\u7528\u4E8E\u5BFC\u5165\u5927\u91CF\u6570\u636E\u7684\u573A\u666F\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u67E5\u770B\u9519\u8BEF\u884C",children:"\u67E5\u770B\u9519\u8BEF\u884C"}),"\n",(0,r.jsx)(n.p,{children:"\u5F53 INSERT INTO \u8FD4\u56DE\u7ED3\u679C\u4E2D\u63D0\u4F9B\u4E86 url \u5B57\u6BB5\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u67E5\u770B\u9519\u8BEF\u884C\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'SHOW LOAD WARNINGS ON "url";\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u793A\u4F8B\uFF1A"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'mysql> SHOW LOAD WARNINGS ON "http://10.16.10.7:8743/api/_load_error_log?file=__shard_18/error_log_insert_stmt_a8d99ae931194d2b-93357aac59981a19_a8d99ae931194d2b_93357aac59981a19"\\G\n*************************** 1. row ***************************\n         JobId: -1\n         Label: NULL\nErrorMsgDetail: Reason: column_name[user_id], null value for not null column, type=BIGINT. src line []; \n1 row in set (0.00 sec)\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u5E38\u89C1\u7684\u9519\u8BEF\u7684\u539F\u56E0\u6709\uFF1A\u6E90\u6570\u636E\u5217\u957F\u5EA6\u8D85\u8FC7\u76EE\u7684\u6570\u636E\u5217\u957F\u5EA6\u3001\u5217\u7C7B\u578B\u4E0D\u5339\u914D\u3001\u5206\u533A\u4E0D\u5339\u914D\u3001\u5217\u987A\u5E8F\u4E0D\u5339\u914D\u7B49\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u53EF\u4EE5\u901A\u8FC7\u73AF\u5883\u53D8\u91CF ",(0,r.jsx)(n.code,{children:"enable_insert_strict"}),"\u6765\u63A7\u5236 INSERT INTO \u662F\u5426\u5FFD\u7565\u9519\u8BEF\u884C\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u66F4\u591A\u5E2E\u52A9",children:"\u66F4\u591A\u5E2E\u52A9"}),"\n",(0,r.jsxs)(n.p,{children:["\u5173\u4E8E Insert Into \u4F7F\u7528\u7684\u66F4\u591A\u8BE6\u7EC6\u8BED\u6CD5\uFF0C\u8BF7\u53C2\u9605 ",(0,r.jsx)(n.a,{href:"/zh-CN/docs/sql-manual/sql-statements/data-modification/DML/INSERT",children:"INSERT INTO"})," \u547D\u4EE4\u624B\u518C\uFF0C\u4E5F\u53EF\u4EE5\u5728 MySQL \u5BA2\u6237\u7AEF\u547D\u4EE4\u884C\u4E0B\u8F93\u5165 ",(0,r.jsx)(n.code,{children:"HELP INSERT"})," \u83B7\u53D6\u66F4\u591A\u5E2E\u52A9\u4FE1\u606F\u3002"]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return a}});var l=s(667294);let r={},i=l.createContext(r);function a(e){let n=l.useContext(i);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);