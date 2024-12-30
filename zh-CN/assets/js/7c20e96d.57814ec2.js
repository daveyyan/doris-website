"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["387217"],{24196:function(e,n,r){r.r(n),r.d(n,{metadata:()=>s,contentTitle:()=>i,default:()=>u,assets:()=>c,toc:()=>l,frontMatter:()=>a});var s=JSON.parse('{"id":"data-operate/import/data-source/kafka","title":"Kafka","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/data-operate/import/data-source/kafka.md","sourceDirName":"data-operate/import/data-source","slug":"/data-operate/import/data-source/kafka","permalink":"/zh-CN/docs/data-operate/import/data-source/kafka","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Kafka","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u672C\u5730\u6587\u4EF6","permalink":"/zh-CN/docs/data-operate/import/data-source/local-file"},"next":{"title":"HDFS","permalink":"/zh-CN/docs/data-operate/import/data-source/hdfs"}}'),t=r("785893"),o=r("250065");let a={title:"Kafka",language:"zh-CN"},i=void 0,c={},l=[{value:"\u4F7F\u7528 Routine Load \u6D88\u8D39 Kafka \u6570\u636E",id:"\u4F7F\u7528-routine-load-\u6D88\u8D39-kafka-\u6570\u636E",level:2},{value:"\u4F7F\u7528\u9650\u5236",id:"\u4F7F\u7528\u9650\u5236",level:3},{value:"\u64CD\u4F5C\u793A\u4F8B",id:"\u64CD\u4F5C\u793A\u4F8B",level:3},{value:"\u5355\u8868\u5BFC\u5165",id:"\u5355\u8868\u5BFC\u5165",level:4},{value:"\u591A\u8868\u5BFC\u5165",id:"\u591A\u8868\u5BFC\u5165",level:4},{value:"<strong>\u914D\u7F6E\u5B89\u5168\u8BA4\u8BC1</strong>",id:"\u914D\u7F6E\u5B89\u5168\u8BA4\u8BC1",level:4},{value:"\u4F7F\u7528 Doris Kafka Connector \u6D88\u8D39 Kafka \u6570\u636E",id:"\u4F7F\u7528-doris-kafka-connector-\u6D88\u8D39-kafka-\u6570\u636E",level:2},{value:"\u4EE5 Distributed \u6A21\u5F0F\u542F\u52A8",id:"\u4EE5-distributed-\u6A21\u5F0F\u542F\u52A8",level:3},{value:"\u6D88\u8D39\u666E\u901A\u6570\u636E",id:"\u6D88\u8D39\u666E\u901A\u6570\u636E",level:3},{value:"\u6D88\u8D39 Debezium \u7EC4\u4EF6\u91C7\u96C6\u7684\u6570\u636E",id:"\u6D88\u8D39-debezium-\u7EC4\u4EF6\u91C7\u96C6\u7684\u6570\u636E",level:3},{value:"\u6D88\u8D39 AVRO \u5E8F\u5217\u5316\u683C\u5F0F\u6570\u636E",id:"\u6D88\u8D39-avro-\u5E8F\u5217\u5316\u683C\u5F0F\u6570\u636E",level:3},{value:"\u6D88\u8D39 Protobuf \u5E8F\u5217\u5316\u683C\u5F0F\u6570\u636E",id:"\u6D88\u8D39-protobuf-\u5E8F\u5217\u5316\u683C\u5F0F\u6570\u636E",level:3}];function d(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Doris \u63D0\u4F9B\u4EE5\u4E0B\u65B9\u5F0F\u4ECE Kafka \u5BFC\u5165\u6570\u636E\uFF1A"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"\u4F7F\u7528 Routine Load \u6D88\u8D39 Kafka \u6570\u636E"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Doris \u901A\u8FC7 Routine Load \u6301\u7EED\u6D88\u8D39 Kafka Topic \u4E2D\u7684\u6570\u636E\u3002\u63D0\u4EA4 Routine Load \u4F5C\u4E1A\u540E\uFF0CDoris \u4F1A\u5B9E\u65F6\u751F\u6210\u5BFC\u5165\u4EFB\u52A1\uFF0C\u6D88\u8D39 Kafka \u96C6\u7FA4\u4E2D\u6307\u5B9A Topic \u7684\u6D88\u606F\u3002Routine Load \u652F\u6301 CSV \u548C JSON \u683C\u5F0F\uFF0C\u5177\u5907 Exactly-Once \u8BED\u4E49\uFF0C\u786E\u4FDD\u6570\u636E\u4E0D\u4E22\u5931\u4E14\u4E0D\u91CD\u590D\u3002\u66F4\u591A\u6587\u6863\u8BF7\u53C2\u8003 ",(0,t.jsx)(n.a,{href:"/zh-CN/docs/data-operate/import/import-way/routine-load-manual",children:"Routine Load"}),"\u3002"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Doris Kafka Connector \u6D88\u8D39 Kafka \u6570\u636E"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Doris Kafka Connector \u662F\u5C06 Kafka \u6570\u636E\u6D41\u5BFC\u5165 Doris \u6570\u636E\u5E93\u7684\u5DE5\u5177\u3002\u7528\u6237\u53EF\u901A\u8FC7 Kafka Connect \u63D2\u4EF6\u8F7B\u677E\u5BFC\u5165\u591A\u79CD\u5E8F\u5217\u5316\u683C\u5F0F\uFF08\u5982 JSON\u3001Avro\u3001Protobuf\uFF09\uFF0C\u5E76\u652F\u6301\u89E3\u6790 Debezium \u7EC4\u4EF6\u7684\u6570\u636E\u683C\u5F0F\u3002\u66F4\u591A\u6587\u6863\u8BF7\u53C2\u8003 ",(0,t.jsx)(n.a,{href:"/zh-CN/docs/ecosystem/doris-kafka-connector",children:"Doris Kafka Connector"}),"\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u4F7F\u7528-routine-load-\u6D88\u8D39-kafka-\u6570\u636E",children:"\u4F7F\u7528 Routine Load \u6D88\u8D39 Kafka \u6570\u636E"}),"\n",(0,t.jsx)(n.h3,{id:"\u4F7F\u7528\u9650\u5236",children:"\u4F7F\u7528\u9650\u5236"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u652F\u6301\u7684\u6D88\u606F\u683C\u5F0F\u4E3A CSV \u548C JSON\u3002CSV \u6BCF\u4E2A\u6D88\u606F\u4E3A\u4E00\u884C\uFF0C\u4E14\u884C\u5C3E\u4E0D\u5305\u542B\u6362\u884C\u7B26\uFF1B"}),"\n",(0,t.jsxs)(n.li,{children:["\u9ED8\u8BA4\u652F\u6301 Kafka 0.10.0.0 \u53CA\u4EE5\u4E0A\u7248\u672C\u3002\u82E5\u9700\u4F7F\u7528\u65E7\u7248\u672C\uFF08\u5982 0.9.0\uFF0C0.8.2\uFF0C0.8.1\uFF0C0.8.0\uFF09\uFF0C\u9700\u4FEE\u6539 BE \u914D\u7F6E\uFF0C\u5C06 ",(0,t.jsx)(n.code,{children:"kafka_broker_version_fallback"})," \u8BBE\u7F6E\u4E3A\u517C\u5BB9\u7684\u65E7\u7248\u672C\uFF0C\u6216\u5728\u521B\u5EFA Routine Load \u65F6\u8BBE\u7F6E ",(0,t.jsx)(n.code,{children:"property.broker.version.fallback"}),"\u3002\u4F7F\u7528\u65E7\u7248\u672C\u53EF\u80FD\u5BFC\u81F4\u90E8\u5206\u65B0\u7279\u6027\u65E0\u6CD5\u4F7F\u7528\uFF0C\u5982\u6839\u636E\u65F6\u95F4\u8BBE\u7F6E Kafka \u5206\u533A\u7684 offset\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"\u64CD\u4F5C\u793A\u4F8B",children:"\u64CD\u4F5C\u793A\u4F8B"}),"\n",(0,t.jsxs)(n.p,{children:["\u5728 Doris \u4E2D\u901A\u8FC7 CREATE ROUTINE LOAD \u547D\u4EE4\u521B\u5EFA\u5E38\u9A7B Routine Load \u5BFC\u5165\u4EFB\u52A1\uFF0C\u5206\u4E3A\u5355\u8868\u5BFC\u5165\u548C\u591A\u8868\u5BFC\u5165\u3002\u8BE6\u7EC6\u8BED\u6CD5\u8BF7\u53C2\u8003 ",(0,t.jsx)(n.a,{href:"../../../sql-manual/sql-statements/Data-Manipulation-Statements/Load/CREATE-ROUTINE-LOAD",children:"CREATE ROUTINE LOAD"}),"\u3002"]}),"\n",(0,t.jsx)(n.h4,{id:"\u5355\u8868\u5BFC\u5165",children:"\u5355\u8868\u5BFC\u5165"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u7B2C 1 \u6B65\uFF1A\u51C6\u5907\u6570\u636E"})}),"\n",(0,t.jsx)(n.p,{children:"\u5728 Kafka \u4E2D\uFF0C\u6837\u672C\u6570\u636E\u5982\u4E0B\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic test-routine-load-csv --from-beginning\n1,Emily,25\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u7B2C 2 \u6B65\uFF1A\u5728\u5E93\u4E2D\u521B\u5EFA\u8868"})}),"\n",(0,t.jsx)(n.p,{children:"\u5728 Doris \u4E2D\u521B\u5EFA\u88AB\u5BFC\u5165\u7684\u8868\uFF0C\u5177\u4F53\u8BED\u6CD5\u5982\u4E0B\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE testdb.test_routineload_tbl(\n    user_id            BIGINT       NOT NULL COMMENT "user id",\n    name               VARCHAR(20)           COMMENT "name",\n    age                INT                   COMMENT "age"\n)\nDUPLICATE KEY(user_id)\nDISTRIBUTED BY HASH(user_id) BUCKETS 10;\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u7B2C 3 \u6B65\uFF1A\u521B\u5EFA Routine Load job \u5BFC\u5165\u6570\u636E\u81F3\u5355\u8868"})}),"\n",(0,t.jsx)(n.p,{children:"\u5728 Doris \u4E2D\uFF0C\u4F7F\u7528 CREATE ROUTINE LOAD \u547D\u4EE4\u521B\u5EFA\u5BFC\u5165\u4F5C\u4E1A\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'CREATE ROUTINE LOAD testdb.example_routine_load_csv ON test_routineload_tbl\nCOLUMNS TERMINATED BY ",",\nCOLUMNS(user_id, name, age)\nFROM KAFKA(\n    "kafka_broker_list" = "192.168.88.62:9092",\n    "kafka_topic" = "test-routine-load-csv",\n    "property.kafka_default_offsets" = "OFFSET_BEGINNING"\n);\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u7B2C 4 \u6B65\uFF1A\u68C0\u67E5\u5BFC\u5165\u6570\u636E"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"mysql> select * from test_routineload_tbl;\n+-----------+----------------+------+\n| user_id   | name           | age  |\n+-----------+----------------+------+\n|  1        | Emily          | 25   |\n+-----------+----------------+------+\n1 rows in set (0.01 sec)\n"})}),"\n",(0,t.jsx)(n.h4,{id:"\u591A\u8868\u5BFC\u5165",children:"\u591A\u8868\u5BFC\u5165"}),"\n",(0,t.jsxs)(n.p,{children:["\u5BF9\u4E8E\u9700\u8981\u540C\u65F6\u5BFC\u5165\u591A\u5F20\u8868\u7684\u573A\u666F\uFF0CKafka \u4E2D\u7684\u6570\u636E\u9700\u5305\u542B\u8868\u540D\u4FE1\u606F\u3002\u652F\u6301\u4ECE Kafka \u7684 Value \u4E2D\u83B7\u53D6\u52A8\u6001\u8868\u540D\uFF0C\u683C\u5F0F\u4E3A\uFF1A",(0,t.jsx)(n.code,{children:'table_name|{"col1": "val1", "col2": "val2"}'}),"\u3002CSV \u683C\u5F0F\u7C7B\u4F3C\uFF1A",(0,t.jsx)(n.code,{children:"table_name|val1,val2,val3"}),"\u3002\u6CE8\u610F\uFF0C\u8868\u540D\u5FC5\u987B\u4E0E Doris \u4E2D\u7684\u8868\u540D\u4E00\u81F4\uFF0C\u5426\u5219\u5BFC\u5165\u5931\u8D25\uFF0C\u4E14\u52A8\u6001\u8868\u4E0D\u652F\u6301\u540E\u9762\u4ECB\u7ECD\u7684 column_mapping \u914D\u7F6E\u3002"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u7B2C 1 \u6B65\uFF1A\u51C6\u5907\u6570\u636E"})}),"\n",(0,t.jsx)(n.p,{children:"\u5728 Kafka \u4E2D\uFF0C\u6837\u672C\u6570\u636E\u5982\u4E0B\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic test-multi-table-load --from-beginning\ntest_multi_table_load1|1,Emily,25\ntest_multi_table_load2|2,Benjamin,35\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u7B2C 2 \u6B65\uFF1A\u5728\u5E93\u4E2D\u521B\u5EFA\u8868"})}),"\n",(0,t.jsx)(n.p,{children:"\u5728 Doris \u4E2D\u521B\u5EFA\u88AB\u5BFC\u5165\u7684\u8868\uFF0C\u5177\u4F53\u8BED\u6CD5\u5982\u4E0B\uFF1A"}),"\n",(0,t.jsx)(n.p,{children:"\u8868 1:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE test_multi_table_load1(\n    user_id            BIGINT       NOT NULL COMMENT "\u7528\u6237 ID",\n    name               VARCHAR(20)           COMMENT "\u7528\u6237\u59D3\u540D",\n    age                INT                   COMMENT "\u7528\u6237\u5E74\u9F84"\n)\nDUPLICATE KEY(user_id)\nDISTRIBUTED BY HASH(user_id) BUCKETS 10;\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u8868 2:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE test_multi_table_load2(\n    user_id            BIGINT       NOT NULL COMMENT "\u7528\u6237 ID",\n    name               VARCHAR(20)           COMMENT "\u7528\u6237\u59D3\u540D",\n    age                INT                   COMMENT "\u7528\u6237\u5E74\u9F84"\n)\nDUPLICATE KEY(user_id)\nDISTRIBUTED BY HASH(user_id) BUCKETS 10;\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u7B2C 3 \u6B65\uFF1A\u521B\u5EFA Routine Load job \u5BFC\u5165\u6570\u636E\u81F3\u591A\u8868"})}),"\n",(0,t.jsx)(n.p,{children:"\u5728 Doris \u4E2D\uFF0C\u4F7F\u7528 CREATE ROUTINE LOAD \u547D\u4EE4\u521B\u5EFA\u5BFC\u5165\u4F5C\u4E1A\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'CREATE ROUTINE LOAD example_multi_table_load\nCOLUMNS TERMINATED BY ","\nFROM KAFKA(\n    "kafka_broker_list" = "192.168.88.62:9092",\n    "kafka_topic" = "test-multi-table-load",\n    "property.kafka_default_offsets" = "OFFSET_BEGINNING"\n);\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u7B2C 4 \u6B65\uFF1A\u68C0\u67E5\u5BFC\u5165\u6570\u636E"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"mysql> select * from test_multi_table_load1;\n+------+----------------+------+\n| id   | name           | age  |\n+------+----------------+------+\n|  1   | Emily          | 25   |\n+------+----------------+------+\n1 rows in set (0.01 sec)\n\nmysql> select * from test_multi_table_load2;\n+------+----------------+------+\n| id   | name           | age  |\n+------+----------------+------+\n|  2   | Benjamin       | 35   |\n+------+----------------+------+\n1 rows in set (0.01 sec)\n"})}),"\n",(0,t.jsx)(n.h4,{id:"\u914D\u7F6E\u5B89\u5168\u8BA4\u8BC1",children:(0,t.jsx)(n.strong,{children:"\u914D\u7F6E\u5B89\u5168\u8BA4\u8BC1"})}),"\n",(0,t.jsxs)(n.p,{children:["\u6709\u5173\u5E26\u6709\u8BA4\u8BC1\u7684 Kafka \u914D\u7F6E\u65B9\u6CD5\uFF0C\u8BF7\u53C2\u89C1 ",(0,t.jsx)(n.a,{href:"/zh-CN/docs/data-operate/import/import-way/routine-load-manual#kafka-%E5%AE%89%E5%85%A8%E8%AE%A4%E8%AF%81",children:"Kafka \u5B89\u5168\u8BA4\u8BC1"}),"\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u4F7F\u7528-doris-kafka-connector-\u6D88\u8D39-kafka-\u6570\u636E",children:"\u4F7F\u7528 Doris Kafka Connector \u6D88\u8D39 Kafka \u6570\u636E"}),"\n",(0,t.jsx)(n.p,{children:"Doris Kafka Connector \u662F\u5C06 Kafka \u6570\u636E\u6D41\u5BFC\u5165 Doris \u6570\u636E\u5E93\u7684\u5DE5\u5177\u3002\u7528\u6237\u53EF\u901A\u8FC7 Kafka Connect \u63D2\u4EF6\u8F7B\u677E\u5BFC\u5165\u591A\u79CD\u5E8F\u5217\u5316\u683C\u5F0F\uFF08\u5982 JSON\u3001Avro\u3001Protobuf\uFF09\uFF0C\u5E76\u652F\u6301\u89E3\u6790 Debezium \u7EC4\u4EF6\u7684\u6570\u636E\u683C\u5F0F\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"\u4EE5-distributed-\u6A21\u5F0F\u542F\u52A8",children:"\u4EE5 Distributed \u6A21\u5F0F\u542F\u52A8"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://docs.confluent.io/platform/current/connect/index.html#distributed-workers",children:"Distributed"})," \u6A21\u5F0F\u4E3A Kafka Connect \u63D0\u4F9B\u53EF\u6269\u5C55\u6027\u548C\u81EA\u52A8\u5BB9\u9519\u529F\u80FD\u3002\u5728\u6B64\u6A21\u5F0F\u4E0B\uFF0C\u53EF\u4EE5\u4F7F\u7528\u76F8\u540C\u7684 ",(0,t.jsx)(n.code,{children:"group.id"})," \u542F\u52A8\u591A\u4E2A\u5DE5\u4F5C\u8FDB\u7A0B\uFF0C\u5B83\u4EEC\u4F1A\u534F\u8C03\u5728\u6240\u6709\u53EF\u7528\u5DE5\u4F5C\u8FDB\u7A0B\u4E2D\u5B89\u6392\u8FDE\u63A5\u5668\u548C\u4EFB\u52A1\u7684\u6267\u884C\u3002"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\u5728 ",(0,t.jsx)(n.code,{children:"$KAFKA_HOME"})," \u4E0B\u521B\u5EFA plugins \u76EE\u5F55\uFF0C\u5C06\u4E0B\u8F7D\u597D\u7684 doris-kafka-connector jar \u5305\u653E\u5165\u5176\u4E2D\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u914D\u7F6E ",(0,t.jsx)(n.code,{children:"config/connect-distributed.properties"}),"\uFF1A"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:"# \u4FEE\u6539 broker \u5730\u5740\nbootstrap.servers=127.0.0.1:9092\n\n# \u4FEE\u6539 group.id\uFF0C\u540C\u4E00\u96C6\u7FA4\u7684\u9700\u8981\u4E00\u81F4\ngroup.id=connect-cluster\n\n# \u4FEE\u6539\u4E3A\u521B\u5EFA\u7684 plugins \u76EE\u5F55\n# \u6CE8\u610F\uFF1A\u6B64\u5904\u8BF7\u586B\u5199 Kafka \u7684\u76F4\u63A5\u8DEF\u5F84\u3002\u4F8B\u5982\uFF1Aplugin.path=/opt/kafka/plugins\nplugin.path=$KAFKA_HOME/plugins\n\n# \u5EFA\u8BAE\u5C06 Kafka \u7684 max.poll.interval.ms \u65F6\u95F4\u8C03\u5927\u5230 30 \u5206\u949F\u4EE5\u4E0A\uFF0C\u9ED8\u8BA4 5 \u5206\u949F\n# \u907F\u514D Stream Load \u5BFC\u5165\u6570\u636E\u6D88\u8D39\u8D85\u65F6\uFF0C\u6D88\u8D39\u8005\u88AB\u8E22\u51FA\u6D88\u8D39\u7FA4\u7EC4\nmax.poll.interval.ms=1800000\nconsumer.max.poll.interval.ms=1800000\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"\u542F\u52A8\uFF1A"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:"$KAFKA_HOME/bin/connect-distributed.sh -daemon $KAFKA_HOME/config/connect-distributed.properties\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsx)(n.li,{children:"\u6D88\u8D39 Kafka \u6570\u636E\uFF1A"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:'curl -i http://127.0.0.1:8083/connectors -H "Content-Type: application/json" -X POST -d \'{\n  "name":"test-doris-sink-cluster",\n  "config":{\n    "connector.class":"org.apache.doris.kafka.connector.DorisSinkConnector",\n    "topics":"topic_test",\n    "doris.topic2table.map": "topic_test:test_kafka_tbl",\n    "buffer.count.records":"10000",\n    "buffer.flush.time":"120",\n    "buffer.size.bytes":"5000000",\n    "doris.urls":"10.10.10.1",\n    "doris.user":"root",\n    "doris.password":"",\n    "doris.http.port":"8030",\n    "doris.query.port":"9030",\n    "doris.database":"test_db",\n    "key.converter":"org.apache.kafka.connect.storage.StringConverter",\n    "value.converter":"org.apache.kafka.connect.storage.StringConverter"\n  }\n}\'\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u64CD\u4F5C Kafka Connect"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:"# \u67E5\u770B connector \u72B6\u6001\ncurl -i http://127.0.0.1:8083/connectors/test-doris-sink-cluster/status -X GET\n# \u5220\u9664\u5F53\u524D connector\ncurl -i http://127.0.0.1:8083/connectors/test-doris-sink-cluster -X DELETE\n# \u6682\u505C\u5F53\u524D connector\ncurl -i http://127.0.0.1:8083/connectors/test-doris-sink-cluster/pause -X PUT\n# \u91CD\u542F\u5F53\u524D connector\ncurl -i http://127.0.0.1:8083/connectors/test-doris-sink-cluster/resume -X PUT\n# \u91CD\u542F connector \u5185\u7684 tasks\ncurl -i http://127.0.0.1:8083/connectors/test-doris-sink-cluster/tasks/0/restart -X POST\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5173\u4E8E Distributed \u6A21\u5F0F\u7684\u4ECB\u7ECD\u8BF7\u53C2\u89C1 ",(0,t.jsx)(n.a,{href:"https://docs.confluent.io/platform/current/connect/index.html#distributed-workers",children:"Distributed Workers"}),"\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"\u6D88\u8D39\u666E\u901A\u6570\u636E",children:"\u6D88\u8D39\u666E\u901A\u6570\u636E"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u5BFC\u5165\u6570\u636E\u6837\u672C\uFF1A"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u5728 Kafka \u4E2D\uFF0C\u6837\u672C\u6570\u636E\u5982\u4E0B\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:'kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic test-data-topic --from-beginning\n{"user_id":1,"name":"Emily","age":25}\n{"user_id":2,"name":"Benjamin","age":35}\n{"user_id":3,"name":"Olivia","age":28}\n{"user_id":4,"name":"Alexander","age":60}\n{"user_id":5,"name":"Ava","age":17}\n{"user_id":6,"name":"William","age":69}\n{"user_id":7,"name":"Sophia","age":32}\n{"user_id":8,"name":"James","age":64}\n{"user_id":9,"name":"Emma","age":37}\n{"user_id":10,"name":"Liam","age":64}\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"\u521B\u5EFA\u9700\u8981\u5BFC\u5165\u7684\u8868\uFF1A"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u5728 Doris \u4E2D\u521B\u5EFA\u88AB\u5BFC\u5165\u7684\u8868\uFF0C\u5177\u4F53\u8BED\u6CD5\u5982\u4E0B\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE test_db.test_kafka_connector_tbl(\n    user_id            BIGINT       NOT NULL COMMENT "user id",\n    name               VARCHAR(20)           COMMENT "name",\n    age                INT                   COMMENT "age"\n)\nDUPLICATE KEY(user_id)\nDISTRIBUTED BY HASH(user_id) BUCKETS 12;\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"\u521B\u5EFA\u5BFC\u5165\u4EFB\u52A1\uFF1A"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u90E8\u7F72 Kafka Connect \u7684\u673A\u5668\u4E0A\uFF0C\u901A\u8FC7 curl \u547D\u4EE4\u63D0\u4EA4\u5982\u4E0B\u5BFC\u5165\u4EFB\u52A1\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:'curl -i http://127.0.0.1:8083/connectors -H "Content-Type: application/json" -X POST -d \'{\n  "name":"test-doris-sink-cluster",\n  "config":{\n    "connector.class":"org.apache.doris.kafka.connector.DorisSinkConnector",\n    "tasks.max":"10",\n    "topics":"test-data-topic",\n    "doris.topic2table.map": "test-data-topic:test_kafka_connector_tbl",\n    "buffer.count.records":"10000",\n    "buffer.flush.time":"120",\n    "buffer.size.bytes":"5000000",\n    "doris.urls":"10.10.10.1",\n    "doris.user":"root",\n    "doris.password":"",\n    "doris.http.port":"8030",\n    "doris.query.port":"9030",\n    "doris.database":"test_db",\n    "key.converter":"org.apache.kafka.connect.storage.StringConverter",\n    "value.converter":"org.apache.kafka.connect.storage.StringConverter"\n  }\n}\'\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u6D88\u8D39-debezium-\u7EC4\u4EF6\u91C7\u96C6\u7684\u6570\u636E",children:"\u6D88\u8D39 Debezium \u7EC4\u4EF6\u91C7\u96C6\u7684\u6570\u636E"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"MySQL \u6570\u636E\u5E93\u4E2D\u6709\u5982\u4E0B\u8868\uFF1A"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:"CREATE TABLE test.test_user (\n  user_id int NOT NULL ,\n  name varchar(20),\n  age int,\n  PRIMARY KEY (user_id)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;\n\ninsert into test.test_user values(1,'zhangsan',20);\ninsert into test.test_user values(2,'lisi',21);\ninsert into test.test_user values(3,'wangwu',22);\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"\u5728 Doris \u521B\u5EFA\u88AB\u5BFC\u5165\u7684\u8868\uFF1A"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-SQL",children:'CREATE TABLE test_db.test_user(\n    user_id            BIGINT       NOT NULL COMMENT "user id",\n    name               VARCHAR(20)           COMMENT "name",\n    age                INT                   COMMENT "age"\n)\nUNIQUE KEY(user_id)\nDISTRIBUTED BY HASH(user_id) BUCKETS 12;\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u90E8\u7F72 Debezium connector for MySQL \u7EC4\u4EF6\uFF0C\u53C2\u8003\uFF1A",(0,t.jsx)(n.a,{href:"https://debezium.io/documentation/reference/stable/connectors/mysql.html",children:"Debezium connector for MySQL"}),"\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u521B\u5EFA doris-kafka-connector \u5BFC\u5165\u4EFB\u52A1\uFF1A"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5047\u8BBE\u901A\u8FC7 Debezium \u91C7\u96C6\u5230\u7684 MySQL \u8868\u6570\u636E\u5728 ",(0,t.jsx)(n.code,{children:"mysql_debezium.test.test_user"})," Topic \u4E2D\uFF1A"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:'curl -i http://127.0.0.1:8083/connectors -H "Content-Type: application/json" -X POST -d \'{\n  "name":"test-debezium-doris-sink",\n  "config":{\n    "connector.class":"org.apache.doris.kafka.connector.DorisSinkConnector",\n    "tasks.max":"10",\n    "topics":"mysql_debezium.test.test_user",\n    "doris.topic2table.map": "mysql_debezium.test.test_user:test_user",\n    "buffer.count.records":"10000",\n    "buffer.flush.time":"120",\n    "buffer.size.bytes":"5000000",\n    "doris.urls":"10.10.10.1",\n    "doris.user":"root",\n    "doris.password":"",\n    "doris.http.port":"8030",\n    "doris.query.port":"9030",\n    "doris.database":"test_db",\n    "converter.mode":"debezium_ingestion",\n    "enable.delete":"true",\n    "key.converter":"org.apache.kafka.connect.json.JsonConverter",\n    "value.converter":"org.apache.kafka.connect.json.JsonConverter"\n  }\n}\'\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u6D88\u8D39-avro-\u5E8F\u5217\u5316\u683C\u5F0F\u6570\u636E",children:"\u6D88\u8D39 AVRO \u5E8F\u5217\u5316\u683C\u5F0F\u6570\u636E"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:'curl -i http://127.0.0.1:8083/connectors -H "Content-Type: application/json" -X POST -d \'{ \n  "name":"doris-avro-test", \n  "config":{ \n    "connector.class":"org.apache.doris.kafka.connector.DorisSinkConnector", \n    "topics":"avro_topic", \n    "tasks.max":"10",\n    "doris.topic2table.map": "avro_topic:avro_tab", \n    "buffer.count.records":"100000", \n    "buffer.flush.time":"120", \n    "buffer.size.bytes":"10000000", \n    "doris.urls":"10.10.10.1", \n    "doris.user":"root", \n    "doris.password":"", \n    "doris.http.port":"8030", \n    "doris.query.port":"9030", \n    "doris.database":"test", \n    "load.model":"stream_load",\n    "key.converter":"io.confluent.connect.avro.AvroConverter",\n    "key.converter.schema.registry.url":"http://127.0.0.1:8081",\n    "value.converter":"io.confluent.connect.avro.AvroConverter",\n    "value.converter.schema.registry.url":"http://127.0.0.1:8081"\n  } \n}\'\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u6D88\u8D39-protobuf-\u5E8F\u5217\u5316\u683C\u5F0F\u6570\u636E",children:"\u6D88\u8D39 Protobuf \u5E8F\u5217\u5316\u683C\u5F0F\u6570\u636E"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-Bash",children:'curl -i http://127.0.0.1:8083/connectors -H "Content-Type: application/json" -X POST -d \'{ \n  "name":"doris-protobuf-test", \n  "config":{ \n    "connector.class":"org.apache.doris.kafka.connector.DorisSinkConnector", \n    "topics":"proto_topic", \n    "tasks.max":"10",\n    "doris.topic2table.map": "proto_topic:proto_tab", \n    "buffer.count.records":"100000", \n    "buffer.flush.time":"120", \n    "buffer.size.bytes":"10000000", \n    "doris.urls":"10.10.10.1", \n    "doris.user":"root", \n    "doris.password":"", \n    "doris.http.port":"8030", \n    "doris.query.port":"9030", \n    "doris.database":"test", \n    "load.model":"stream_load",\n    "key.converter":"io.confluent.connect.protobuf.ProtobufConverter",\n    "key.converter.schema.registry.url":"http://127.0.0.1:8081",\n    "value.converter":"io.confluent.connect.protobuf.ProtobufConverter",\n    "value.converter.schema.registry.url":"http://127.0.0.1:8081"\n  } \n}\'\n'})})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return a}});var s=r(667294);let t={},o=s.createContext(t);function a(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);