"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["480745"],{948820:function(n,e,l){l.r(e),l.d(e,{metadata:()=>d,contentTitle:()=>t,default:()=>o,assets:()=>a,toc:()=>c,frontMatter:()=>r});var d=JSON.parse('{"id":"data-operate/import/import-way/mysql-load-manual","title":"MySQL Load","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/data-operate/import/import-way/mysql-load-manual.md","sourceDirName":"data-operate/import/import-way","slug":"/data-operate/import/import-way/mysql-load-manual","permalink":"/zh-CN/docs/3.0/data-operate/import/import-way/mysql-load-manual","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"MySQL Load","language":"zh-CN"},"sidebar":"docs","previous":{"title":"Insert Into Values","permalink":"/zh-CN/docs/3.0/data-operate/import/import-way/insert-into-values-manual"},"next":{"title":"\u5BFC\u5165\u6570\u636E\u683C\u5F0F","permalink":"/zh-CN/docs/3.0/data-operate/import/load-data-format"}}'),s=l("785893"),i=l("250065");let r={title:"MySQL Load",language:"zh-CN"},t=void 0,a={},c=[{value:"\u4F7F\u7528\u573A\u666F",id:"\u4F7F\u7528\u573A\u666F",level:2},{value:"\u652F\u6301\u683C\u5F0F",id:"\u652F\u6301\u683C\u5F0F",level:3},{value:"\u4F7F\u7528\u9650\u5236",id:"\u4F7F\u7528\u9650\u5236",level:3},{value:"\u57FA\u672C\u539F\u7406",id:"\u57FA\u672C\u539F\u7406",level:2},{value:"\u5FEB\u901F\u4E0A\u624B",id:"\u5FEB\u901F\u4E0A\u624B",level:2},{value:"\u524D\u7F6E\u68C0\u67E5",id:"\u524D\u7F6E\u68C0\u67E5",level:3},{value:"\u521B\u5EFA\u5BFC\u5165\u4F5C\u4E1A",id:"\u521B\u5EFA\u5BFC\u5165\u4F5C\u4E1A",level:3},{value:"\u67E5\u770B\u5BFC\u5165\u4F5C\u4E1A\u7ED3\u679C",id:"\u67E5\u770B\u5BFC\u5165\u4F5C\u4E1A\u7ED3\u679C",level:3},{value:"\u53D6\u6D88\u5BFC\u5165\u4F5C\u4E1A",id:"\u53D6\u6D88\u5BFC\u5165\u4F5C\u4E1A",level:3},{value:"\u53C2\u8003\u624B\u518C",id:"\u53C2\u8003\u624B\u518C",level:2},{value:"\u5BFC\u5165\u8BED\u6CD5",id:"\u5BFC\u5165\u8BED\u6CD5",level:3},{value:"\u5BFC\u5165\u53C2\u6570",id:"\u5BFC\u5165\u53C2\u6570",level:3},{value:"\u5BFC\u5165\u4E3E\u4F8B",id:"\u5BFC\u5165\u4E3E\u4F8B",level:2},{value:"\u6307\u5B9A\u5BFC\u5165\u8D85\u65F6\u65F6\u95F4",id:"\u6307\u5B9A\u5BFC\u5165\u8D85\u65F6\u65F6\u95F4",level:3},{value:"\u6307\u5B9A\u5BFC\u5165\u5141\u8BB8\u8BEF\u5DEE\u7387",id:"\u6307\u5B9A\u5BFC\u5165\u5141\u8BB8\u8BEF\u5DEE\u7387",level:3},{value:"\u6620\u5C04\u5BFC\u5165\u5217",id:"\u6620\u5C04\u5BFC\u5165\u5217",level:3},{value:"\u6307\u5B9A\u5BFC\u5165\u5217\u5206\u9694\u7B26\u4E0E\u884C\u5206\u9694\u7B26",id:"\u6307\u5B9A\u5BFC\u5165\u5217\u5206\u9694\u7B26\u4E0E\u884C\u5206\u9694\u7B26",level:3},{value:"\u6307\u5B9A\u5BFC\u5165\u5206\u533A",id:"\u6307\u5B9A\u5BFC\u5165\u5206\u533A",level:3},{value:"\u6307\u5B9A\u5BFC\u5165\u65F6\u533A",id:"\u6307\u5B9A\u5BFC\u5165\u65F6\u533A",level:3},{value:"\u9650\u5236\u5BFC\u5165\u5185\u5B58",id:"\u9650\u5236\u5BFC\u5165\u5185\u5B58",level:3},{value:"\u66F4\u591A\u5E2E\u52A9",id:"\u66F4\u591A\u5E2E\u52A9",level:2}];function h(n){let e={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:["Doris \u517C\u5BB9 MySQL \u534F\u8BAE\uFF0C\u53EF\u4EE5\u4F7F\u7528 MySQL \u6807\u51C6\u7684 ",(0,s.jsx)(e.a,{href:"https://dev.mysql.com/doc/refman/8.0/en/load-data.html",children:"LOAD DATA"})," \u8BED\u6CD5\u5BFC\u5165\u672C\u5730\u6587\u4EF6\u3002MySQL Load \u662F\u4E00\u79CD\u540C\u6B65\u5BFC\u5165\u65B9\u5F0F\uFF0C\u6267\u884C\u5BFC\u5165\u540E\u5373\u8FD4\u56DE\u5BFC\u5165\u7ED3\u679C\u3002\u53EF\u4EE5\u901A\u8FC7 LOAD DATA \u8BED\u53E5\u7684\u8FD4\u56DE\u7ED3\u679C\u5224\u65AD\u5BFC\u5165\u662F\u5426\u6210\u529F\u3002\u4E00\u822C\u6765\u8BF4\uFF0C\u53EF\u4EE5\u4F7F\u7528 MySQL Load \u5BFC\u5165 10GB \u4EE5\u4E0B\u7684\u6587\u4EF6\uFF0C\u5982\u679C\u6587\u4EF6\u8FC7\u5927\uFF0C\u5EFA\u8BAE\u5C06\u6587\u4EF6\u8FDB\u884C\u5207\u5206\u540E\u4F7F\u7528 MySQL Load \u8FDB\u884C\u5BFC\u5165\u3002MySQL Load \u53EF\u4EE5\u4FDD\u8BC1\u4E00\u6279\u5BFC\u5165\u4EFB\u52A1\u7684\u539F\u5B50\u6027\uFF0C\u8981\u4E48\u5168\u90E8\u5BFC\u5165\u6210\u529F\uFF0C\u8981\u4E48\u5168\u90E8\u5BFC\u5165\u5931\u8D25\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u4F7F\u7528\u573A\u666F",children:"\u4F7F\u7528\u573A\u666F"}),"\n",(0,s.jsx)(e.h3,{id:"\u652F\u6301\u683C\u5F0F",children:"\u652F\u6301\u683C\u5F0F"}),"\n",(0,s.jsx)(e.p,{children:"MySQL Load \u4E3B\u8981\u9002\u7528\u4E8E\u5BFC\u5165\u5BA2\u6237\u7AEF\u672C\u5730 CSV \u6587\u4EF6\uFF0C\u6216\u901A\u8FC7\u7A0B\u5E8F\u5BFC\u5165\u6570\u636E\u6D41\u4E2D\u7684\u6570\u636E\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"\u4F7F\u7528\u9650\u5236",children:"\u4F7F\u7528\u9650\u5236"}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u5BFC\u5165 CSV \u6587\u4EF6\u65F6\uFF0C\u9700\u8981\u660E\u786E\u533A\u5206\u7A7A\u503C\uFF08null\uFF09\u4E0E\u7A7A\u5B57\u7B26\u4E32\uFF08''\uFF09\uFF1A"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u7A7A\u503C\uFF08null\uFF09\u9700\u8981\u7528 ",(0,s.jsx)(e.code,{children:"\\N"})," \u8868\u793A\uFF0C",(0,s.jsx)(e.code,{children:"a,\\N,b"})," \u6570\u636E\u8868\u793A\u4E2D\u95F4\u5217\u662F\u4E00\u4E2A\u7A7A\u503C\uFF08null\uFF09"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u7A7A\u5B57\u7B26\u4E32\u76F4\u63A5\u5C06\u6570\u636E\u7F6E\u7A7A\uFF0Ca, ,b \u6570\u636E\u8868\u793A\u4E2D\u95F4\u5217\u662F\u4E00\u4E2A\u7A7A\u5B57\u7B26\u4E32"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u57FA\u672C\u539F\u7406",children:"\u57FA\u672C\u539F\u7406"}),"\n",(0,s.jsx)(e.p,{children:"MySQL Load \u4E0E Stream Load \u529F\u80FD\u76F8\u4F3C\uFF0C\u90FD\u662F\u5BFC\u5165\u672C\u5730\u6587\u4EF6\u5230 Doris \u96C6\u7FA4\u4E2D\u3002\u56E0\u6B64 MySQL Load \u7684\u5B9E\u73B0\u590D\u7528\u4E86 Stream Load \u7684\u57FA\u672C\u5BFC\u5165\u80FD\u529B\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u4E0B\u56FE\u5C55\u793A\u4E86 MySQL Load \u7684\u4E3B\u8981\u6D41\u7A0B\uFF1A"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u7528\u6237\u5411 FE \u63D0\u4EA4 LOAD DATA \u8BF7\u6C42\uFF0CFE \u5B8C\u6210\u89E3\u6790\u5DE5\u4F5C\uFF0C\u5E76\u5C06\u8BF7\u6C42\u5C01\u88C5\u6210 Stream Load\uFF1B"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"FE \u4F1A\u9009\u62E9\u4E00\u4E2A BE \u8282\u70B9\u53D1\u9001 Stream Load \u8BF7\u6C42\uFF1B"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u53D1\u9001\u8BF7\u6C42\u7684\u540C\u65F6\uFF0CFE \u4F1A\u5F02\u6B65\u4E14\u6D41\u5F0F\u7684\u4ECE MySQL \u5BA2\u6237\u7AEF\u8BFB\u53D6\u672C\u5730\u6587\u4EF6\u6570\u636E\uFF0C\u5E76\u5B9E\u65F6\u7684\u53D1\u9001\u5230 Stream Load \u7684 HTTP \u8BF7\u6C42\u4E2D\uFF1B"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"MySQL \u5BA2\u6237\u7AEF\u6570\u636E\u4F20\u8F93\u5B8C\u6BD5\uFF0CFE \u7B49\u5F85 Stream Load \u5B8C\u6210\uFF0C\u5E76\u5C55\u793A\u5BFC\u5165\u6210\u529F\u6216\u8005\u5931\u8D25\u7684\u4FE1\u606F\u7ED9\u5BA2\u6237\u7AEF\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u5FEB\u901F\u4E0A\u624B",children:"\u5FEB\u901F\u4E0A\u624B"}),"\n",(0,s.jsx)(e.h3,{id:"\u524D\u7F6E\u68C0\u67E5",children:"\u524D\u7F6E\u68C0\u67E5"}),"\n",(0,s.jsx)(e.p,{children:"MySQL Load \u9700\u8981\u5BF9\u76EE\u6807\u8868\u7684 INSERT \u6743\u9650\u3002\u5982\u679C\u6CA1\u6709 INSERT \u6743\u9650\uFF0C\u53EF\u4EE5\u901A\u8FC7 GRANT \u547D\u4EE4\u7ED9\u7528\u6237\u6388\u6743\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"\u521B\u5EFA\u5BFC\u5165\u4F5C\u4E1A",children:"\u521B\u5EFA\u5BFC\u5165\u4F5C\u4E1A"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"\u51C6\u5907\u6D4B\u8BD5\u6570\u636E"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u521B\u5EFA\u540D\u4E3A client_local.csv \u7684\u6587\u4EF6\uFF0C\u6837\u4F8B\u6570\u636E\u5982\u4E0B\uFF1A"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"1,10\n2,20\n3,30\n4,40\n5,50\n6,60\n"})}),"\n",(0,s.jsxs)(e.ol,{start:"2",children:["\n",(0,s.jsx)(e.li,{children:"\u94FE\u63A5\u5BA2\u6237\u7AEF"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u6267\u884C LOAD DATA \u547D\u4EE4\u524D\uFF0C\u9700\u8981\u5148\u94FE\u63A5 MySQL \u5BA2\u6237\u7AEF\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Shell",children:"mysql --local-infile  -h <fe_ip> -P <fe_query_port> -u root -D testdb\n"})}),"\n",(0,s.jsxs)(e.admonition,{type:"caution",children:[(0,s.jsx)(e.p,{children:"\u6267\u884C MySQL Load\uFF0C\u5728\u8FDE\u63A5\u65F6\u9700\u8981\u4F7F\u7528\u6307\u5B9A\u53C2\u6570\u9009\u9879\uFF1A"}),(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u5728\u94FE\u63A5 mysql \u5BA2\u6237\u7AEF\u65F6\uFF0C\u5FC5\u987B\u4F7F\u7528 ",(0,s.jsx)(e.code,{children:"--local-infile"})," \u9009\u9879\uFF0C\u5426\u5219\u53EF\u80FD\u4F1A\u62A5\u9519\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u901A\u8FC7 JDBC \u94FE\u63A5\uFF0C\u9700\u8981\u5728 URL \u4E2D\u6307\u5B9A\u914D\u7F6E ",(0,s.jsx)(e.code,{children:"allowLoadLocalInfile=true"})]}),"\n"]}),"\n"]})]}),"\n",(0,s.jsxs)(e.ol,{start:"3",children:["\n",(0,s.jsx)(e.li,{children:"\u521B\u5EFA\u6D4B\u8BD5\u7528\u8868"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u5728 Doris \u4E2D\u521B\u5EFA\u4EE5\u4E0B\u8868\uFF1A"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"CREATE TABLE testdb.t1 (\n    pk     INT, \n    v1     INT SUM\n) AGGREGATE KEY (pk) \nDISTRIBUTED BY hash (pk);\n"})}),"\n",(0,s.jsxs)(e.ol,{start:"4",children:["\n",(0,s.jsx)(e.li,{children:"\u8FD0\u884C LOAD DATA \u5BFC\u5165\u547D\u4EE4"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u94FE\u63A5 MySQL Client \u540E\uFF0C\u521B\u5EFA\u5BFC\u5165\u4F5C\u4E1A\uFF0C\u547D\u4EE4\u5982\u4E0B\uFF1A"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"LOAD DATA LOCAL\nINFILE 'client_local.csv'\nINTO TABLE testdb.t1\nCOLUMNS TERMINATED BY ','\nLINES TERMINATED BY '\\n';\n"})}),"\n",(0,s.jsx)(e.h3,{id:"\u67E5\u770B\u5BFC\u5165\u4F5C\u4E1A\u7ED3\u679C",children:"\u67E5\u770B\u5BFC\u5165\u4F5C\u4E1A\u7ED3\u679C"}),"\n",(0,s.jsx)(e.p,{children:"MySQL Load \u662F\u4E00\u79CD\u540C\u6B65\u7684\u5BFC\u5165\u65B9\u5F0F\uFF0C\u5BFC\u5165\u540E\u7ED3\u679C\u4F1A\u5728\u547D\u4EE4\u884C\u4E2D\u8FD4\u56DE\u7ED9\u7528\u6237\u3002\u5982\u679C\u5BFC\u5165\u6267\u884C\u5931\u8D25\uFF0C\u4F1A\u5C55\u793A\u5177\u4F53\u7684\u62A5\u9519\u4FE1\u606F\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5982\u4E0B\u662F\u5BFC\u5165\u6210\u529F\u7684\u7ED3\u679C\u663E\u793A\uFF0C\u4F1A\u8FD4\u56DE\u5BFC\u5165\u7684\u884C\u6570\uFF1A"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"Query OK, 6 row affected (0.17 sec)\nRecords: 6  Deleted: 0  Skipped: 0  Warnings: 0\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u5F53\u5BFC\u5165\u6709\u5F02\u5E38\u65F6\uFF0C\u4F1A\u5728\u5BA2\u6237\u7AEF\u663E\u793A\u76F8\u5E94\u5F02\u5E38\uFF1A"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"ERROR 1105 (HY000): errCode = 2, detailMessage = [DATA_QUALITY_ERROR]too many filtered rows with load id b612907c-ccf4-4ac2-82fe-107ece655f0f\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u5728\u5F02\u5E38\u4FE1\u606F\u4E2D\uFF0C\u53EF\u4EE5\u6355\u6349\u5230\u5BFC\u5165\u7684 ",(0,s.jsx)(e.code,{children:"loadId"}),"\uFF0C\u901A\u8FC7 ",(0,s.jsx)(e.code,{children:"show load warnings"})," \u547D\u4EE4\u53EF\u4EE5\u67E5\u770B\u5230\u5177\u4F53\u4FE1\u606F\uFF1A"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"show load warnings where label='b612907c-ccf4-4ac2-82fe-107ece655f0f';\n"})}),"\n",(0,s.jsx)(e.h3,{id:"\u53D6\u6D88\u5BFC\u5165\u4F5C\u4E1A",children:"\u53D6\u6D88\u5BFC\u5165\u4F5C\u4E1A"}),"\n",(0,s.jsx)(e.p,{children:"\u7528\u6237\u65E0\u6CD5\u624B\u52A8\u53D6\u6D88 MySQL Load\uFF0CMySQL Load \u5728\u8D85\u65F6\u6216\u8005\u5BFC\u5165\u9519\u8BEF\u540E\u4F1A\u88AB\u7CFB\u7EDF\u81EA\u52A8\u53D6\u6D88\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u53C2\u8003\u624B\u518C",children:"\u53C2\u8003\u624B\u518C"}),"\n",(0,s.jsx)(e.h3,{id:"\u5BFC\u5165\u8BED\u6CD5",children:"\u5BFC\u5165\u8BED\u6CD5"}),"\n",(0,s.jsx)(e.p,{children:"LOAD DATA \u8BED\u6CD5\u5982\u4E0B\uFF1A"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-SQL",children:"LOAD DATA LOCAL\nINFILE '<load_data_file>'\nINTO TABLE [<db_name>.]<table_name>\n[PARTITION (partition_name [, partition_name] ...)]\n[COLUMNS TERMINATED BY '<column_terminated_operator>']\n[LINES TERMINATED BY '<line_terminated_operator>']\n[IGNORE <ignore_lines> LINES]\n[(col_name_or_user_var[, col_name_or_user_var] ...)]\n[SET col_name={expr | DEFAULT}[, col_name={expr | DEFAULT}] ...]\n[PROPERTIES (key1 = value1 [, key2=value2]) ]\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u521B\u5EFA\u5BFC\u5165\u4F5C\u4E1A\u7684\u6A21\u5757\u8BF4\u660E\u5982\u4E0B\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u6A21\u5757"}),(0,s.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"INFILE"}),(0,s.jsx)(e.td,{children:"\u6307\u5B9A\u672C\u5730\u6587\u4EF6\u8DEF\u5F84\uFF0C\u53EF\u4EE5\u662F\u76F8\u5BF9\u8DEF\u5F84\uFF0C\u4E5F\u53EF\u4EE5\u662F\u7EDD\u5BF9\u8DEF\u5F84\u3002\u76EE\u524D load_data_file \u53EA\u652F\u6301\u5355\u4E2A\u6587\u4EF6\uFF0C\u4E0D\u652F\u6301\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"INTO TABLE"}),(0,s.jsx)(e.td,{children:"\u6307\u5B9A\u6570\u636E\u5E93\u540D\u4E0E\u8868\u540D\uFF0C\u53EF\u4EE5\u7701\u7565\u6570\u636E\u5E93\u540D\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"PARTITION"}),(0,s.jsx)(e.td,{children:"\u6307\u5B9A\u5BFC\u5165\u7684\u5206\u533A\u3002\u5982\u679C\u7528\u6237\u80FD\u591F\u786E\u5B9A\u6570\u636E\u5BF9\u5E94\u7684 partition\uFF0C\u63A8\u8350\u6307\u5B9A\u8BE5\u9879\u3002\u4E0D\u6EE1\u8DB3\u8FD9\u4E9B\u5206\u533A\u7684\u6570\u636E\u5C06\u88AB\u8FC7\u6EE4\u6389\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"COLUMNS TERMINATED BY"}),(0,s.jsx)(e.td,{children:"\u6307\u5B9A\u5BFC\u5165\u7684\u5217\u5206\u9694\u7B26\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"LINE TERMINATED BY"}),(0,s.jsx)(e.td,{children:"\u6307\u5B9A\u5BFC\u5165\u7684\u884C\u5206\u9694\u7B26\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"IGNORE num LINES"}),(0,s.jsx)(e.td,{children:"\u6307\u5B9A\u5BFC\u5165\u7684 CSV \u8DF3\u8FC7\u884C\u6570\uFF0C\u901A\u5E38\u6307\u5B9A 1 \u6765\u8DF3\u8FC7\u8868\u5934\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"col_name_or_user_var"}),(0,s.jsxs)(e.td,{children:["\u6307\u5B9A\u5217\u6620\u5C04\u8BED\u6CD5\uFF0C\u6570\u636E\u8F6C\u6362\u8BE6\u89C1",(0,s.jsx)(e.a,{href:"../../../data-operate/import/load-data-convert#%E5%88%97%E6%98%A0%E5%B0%84",children:" \u5217\u6620\u5C04 "}),"\u7AE0\u8282\u3002"]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"PROPERTIES"}),(0,s.jsx)(e.td,{children:"\u5BFC\u5165\u53C2\u6570\u3002"})]})]})]}),"\n",(0,s.jsx)(e.h3,{id:"\u5BFC\u5165\u53C2\u6570",children:"\u5BFC\u5165\u53C2\u6570"}),"\n",(0,s.jsxs)(e.p,{children:["\u901A\u8FC7 ",(0,s.jsx)(e.code,{children:"PROPERTIES (key1 = value1 [, key2=value2])"})," \u8BED\u6CD5\u53EF\u4EE5\u6307\u5B9A\u5BFC\u5165\u7684\u53C2\u6570\u914D\u7F6E\uFF1A"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u53C2\u6570"}),(0,s.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"max_filter_ratio"}),(0,s.jsx)(e.td,{children:"\u5141\u8BB8\u7684\u6700\u5927\u8FC7\u6EE4\u7387\u3002\u5FC5\u987B\u5728\u5927\u4E8E\u7B49\u4E8E 0 \u5230\u5C0F\u4E8E\u7B49\u4E8E 1 \u4E4B\u95F4\u3002\u9ED8\u8BA4\u503C\u662F 0\uFF0C\u8868\u793A\u4E0D\u5BB9\u5FCD\u4EFB\u4F55\u9519\u8BEF\u884C\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"timeout"}),(0,s.jsx)(e.td,{children:"\u6307\u5B9A\u5BFC\u5165\u7684\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u79D2\u3002\u9ED8\u8BA4\u662F 600 \u79D2\u3002\u53EF\u8BBE\u7F6E\u8303\u56F4\u4E3A 1s ~ 259200s\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"strict_mode"}),(0,s.jsx)(e.td,{children:"\u7528\u6237\u6307\u5B9A\u6B64\u6B21\u5BFC\u5165\u662F\u5426\u5F00\u542F\u4E25\u683C\u6A21\u5F0F\uFF0C\u9ED8\u8BA4\u4E3A\u5173\u95ED\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"timezone"}),(0,s.jsx)(e.td,{children:"\u6307\u5B9A\u672C\u6B21\u5BFC\u5165\u6240\u4F7F\u7528\u7684\u65F6\u533A\u3002\u9ED8\u8BA4\u4E3A\u4E1C\u516B\u533A\u3002\u8BE5\u53C2\u6570\u4F1A\u5F71\u54CD\u6240\u6709\u5BFC\u5165\u6D89\u53CA\u7684\u548C\u65F6\u533A\u6709\u5173\u7684\u51FD\u6570\u7ED3\u679C\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"exec_mem_limit"}),(0,s.jsx)(e.td,{children:"\u5BFC\u5165\u5185\u5B58\u9650\u5236\u3002\u9ED8\u8BA4\u4E3A 2GB\u3002\u5355\u4F4D\u4E3A\u5B57\u8282\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"trim_double_quotes"}),(0,s.jsx)(e.td,{children:"\u5E03\u5C14\u7C7B\u578B\uFF0C\u9ED8\u8BA4\u503C\u4E3A false\uFF0C\u4E3A true \u65F6\u8868\u793A\u88C1\u526A\u6389\u5BFC\u5165\u6587\u4EF6\u6BCF\u4E2A\u5B57\u6BB5\u6700\u5916\u5C42\u7684\u53CC\u5F15\u53F7\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"enclose"}),(0,s.jsx)(e.td,{children:'\u6307\u5B9A\u5305\u56F4\u7B26\u3002\u5F53 CSV \u6570\u636E\u5B57\u6BB5\u4E2D\u542B\u6709\u884C\u5206\u9694\u7B26\u6216\u5217\u5206\u9694\u7B26\u65F6\uFF0C\u4E3A\u9632\u6B62\u610F\u5916\u622A\u65AD\uFF0C\u53EF\u6307\u5B9A\u5355\u5B57\u8282\u5B57\u7B26\u4F5C\u4E3A\u5305\u56F4\u7B26\u8D77\u5230\u4FDD\u62A4\u4F5C\u7528\u3002\u4F8B\u5982\u5217\u5206\u9694\u7B26\u4E3A ","\uFF0C\u5305\u56F4\u7B26\u4E3A "\'"\uFF0C\u6570\u636E\u4E3A "a,\'b,c\'"\uFF0C\u5219 "b,c" \u4F1A\u88AB\u89E3\u6790\u4E3A\u4E00\u4E2A\u5B57\u6BB5\u3002'})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"escape"}),(0,s.jsx)(e.td,{children:'\u6307\u5B9A\u8F6C\u4E49\u7B26\u3002\u7528\u4E8E\u8F6C\u4E49\u5728\u5B57\u6BB5\u4E2D\u51FA\u73B0\u7684\u4E0E\u5305\u56F4\u7B26\u76F8\u540C\u7684\u5B57\u7B26\u3002\u4F8B\u5982\u6570\u636E\u4E3A "a,\'b,\'c\'"\uFF0C\u5305\u56F4\u7B26\u4E3A "\'"\uFF0C\u5E0C\u671B "b,\'c \u88AB\u4F5C\u4E3A\u4E00\u4E2A\u5B57\u6BB5\u89E3\u6790\uFF0C\u5219\u9700\u8981\u6307\u5B9A\u5355\u5B57\u8282\u8F6C\u4E49\u7B26\uFF0C\u4F8B\u5982""\uFF0C\u5C06\u6570\u636E\u4FEE\u6539\u4E3A "a,\'b,\'c\'"\u3002'})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"\u5BFC\u5165\u4E3E\u4F8B",children:"\u5BFC\u5165\u4E3E\u4F8B"}),"\n",(0,s.jsx)(e.h3,{id:"\u6307\u5B9A\u5BFC\u5165\u8D85\u65F6\u65F6\u95F4",children:"\u6307\u5B9A\u5BFC\u5165\u8D85\u65F6\u65F6\u95F4"}),"\n",(0,s.jsx)(e.p,{children:"\u901A\u8FC7\u5236\u5B9A PROPERTIES \u53C2\u6570 timeout \u53EF\u4EE5\u8C03\u6574\u5BFC\u5165\u8D85\u65F6\u65F6\u95F4\u3002\u5728\u4EE5\u4E0B\u6848\u4F8B\u4E2D\u5C06\u8D85\u65F6\u65F6\u95F4\u8BBE\u7F6E\u4E3A 100s\uFF1A"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:'LOAD DATA LOCAL\nINFILE \'testData\'\nINTO TABLE testDb.testTbl\nPROPERTIES ("timeout"="100");\n'})}),"\n",(0,s.jsx)(e.h3,{id:"\u6307\u5B9A\u5BFC\u5165\u5141\u8BB8\u8BEF\u5DEE\u7387",children:"\u6307\u5B9A\u5BFC\u5165\u5141\u8BB8\u8BEF\u5DEE\u7387"}),"\n",(0,s.jsx)(e.p,{children:"\u901A\u8FC7\u6307\u5B9A PROPERTIES \u53C2\u6570 max_filter_ratio \u53EF\u4EE5\u8C03\u6574\u5BFC\u5165\u8D85\u65F6\u65F6\u95F4\u3002\u5728\u4EE5\u4E0B\u6848\u4F8B\u4E2D\u5C06\u9519\u8BEF\u5BB9\u5FCD\u7387\u8BBE\u7F6E\u4E3A 20%\uFF1A"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:'LOAD DATA LOCAL\nINFILE \'testData\'\nINTO TABLE testDb.testTbl\nPROPERTIES ("max_filter_ratio"="0.2");\n'})}),"\n",(0,s.jsx)(e.h3,{id:"\u6620\u5C04\u5BFC\u5165\u5217",children:"\u6620\u5C04\u5BFC\u5165\u5217"}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u4EE5\u4E0B\u6848\u4F8B\u4E2D\u8C03\u6574\u4E86 CSV \u4E2D\u5217\u7684\u987A\u5E8F\uFF1A"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"LOAD DATA LOCAL\nINFILE 'testData'\nINTO TABLE testDb.testTbl\n(k2, k1, v1);\n"})}),"\n",(0,s.jsx)(e.h3,{id:"\u6307\u5B9A\u5BFC\u5165\u5217\u5206\u9694\u7B26\u4E0E\u884C\u5206\u9694\u7B26",children:"\u6307\u5B9A\u5BFC\u5165\u5217\u5206\u9694\u7B26\u4E0E\u884C\u5206\u9694\u7B26"}),"\n",(0,s.jsxs)(e.p,{children:["\u901A\u8FC7 COLUMNS TERMINATED BY \u4E0E LINES TERMINATED BY \u5B50\u53E5\u53EF\u4EE5\u6307\u5B9A\u5BFC\u5165\u7684\u5217\u4E0E\u884C\u5206\u9694\u7B26\u3002\u5728\u4EE5\u4E0B\u6848\u4F8B\u4E2D\u4F7F\u7528\u9017\u53F7\uFF08,\uFF09\u4E0E\u6362\u884C\u7B26\uFF08",(0,s.jsx)(e.code,{children:"\\n"}),"\uFF09\u4F5C\u4E3A\u5217\u4E0E\u884C\u5206\u9694\u7B26\uFF1A"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"LOAD DATA LOCAL\nINFILE 'testData'\nINTO TABLE testDb.testTbl\nCOLUMNS TERMINATED BY ','\nLINES TERMINATED BY '\\n';\n"})}),"\n",(0,s.jsx)(e.h3,{id:"\u6307\u5B9A\u5BFC\u5165\u5206\u533A",children:"\u6307\u5B9A\u5BFC\u5165\u5206\u533A"}),"\n",(0,s.jsx)(e.p,{children:"\u901A\u8FC7 PARTITON \u5B50\u53E5\u53EF\u4EE5\u6307\u5B9A\u5BFC\u5165\u5206\u533A\u3002\u5728\u4EE5\u4E0B\u6848\u4F8B\u4E2D\u5C06\u6570\u636E\u5BFC\u5165\u6307\u5B9A\u5206\u533A p1 \u4E0E p2\uFF0C\u5982\u679C\u6570\u636E\u4E0D\u5C5E\u4E8E p1 \u4E0E p2 \u5206\u533A\uFF0C\u4F1A\u88AB\u8FC7\u6EE4\u6389\uFF1A"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"LOAD DATA LOCAL\nINFILE 'testData'\nINTO TABLE testDb.testTbl\nPARTITION (p1, p2);\n"})}),"\n",(0,s.jsx)(e.h3,{id:"\u6307\u5B9A\u5BFC\u5165\u65F6\u533A",children:"\u6307\u5B9A\u5BFC\u5165\u65F6\u533A"}),"\n",(0,s.jsx)(e.p,{children:"\u901A\u8FC7 PROPERTIES \u53C2\u6570 timezone \u53EF\u4EE5\u6307\u5B9A\u65F6\u533A\u3002\u5728\u4EE5\u4E0B\u6848\u4F8B\u4E2D\u8BBE\u7F6E\u65F6\u533A\u4E3A Africa/Abidjan\uFF1A"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:'LOAD DATA LOCAL\nINFILE \'testData\'\nINTO TABLE testDb.testTbl\nPROPERTIES ("timezone"="Africa/Abidjan");\n'})}),"\n",(0,s.jsx)(e.h3,{id:"\u9650\u5236\u5BFC\u5165\u5185\u5B58",children:"\u9650\u5236\u5BFC\u5165\u5185\u5B58"}),"\n",(0,s.jsx)(e.p,{children:"\u901A\u8FC7 PROPERTIES \u53C2\u6570 exec_mem_limit \u53EF\u4EE5\u6307\u5B9A\u5BFC\u5165\u7684\u5185\u5B58\u9650\u5236\u3002\u5728\u4EE5\u4E0B\u6848\u4F8B\u4E2D\u8BBE\u7F6E\u5BFC\u5165\u7684\u5185\u5B58\u9650\u5236\u4E3A 10G\uFF1A"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:'LOAD DATA LOCAL\nINFILE \'testData\'\nINTO TABLE testDb.testTbl\nPROPERTIES ("exec_mem_limit"="10737418240");\n'})}),"\n",(0,s.jsx)(e.h2,{id:"\u66F4\u591A\u5E2E\u52A9",children:"\u66F4\u591A\u5E2E\u52A9"}),"\n",(0,s.jsxs)(e.p,{children:["\u5173\u4E8E MySQL Load \u4F7F\u7528\u7684\u66F4\u591A\u8BE6\u7EC6\u8BED\u6CD5\u53CA\u6700\u4F73\u5B9E\u8DF5\uFF0C\u8BF7\u53C2\u9605 ",(0,s.jsx)(e.a,{href:"../../../sql-manual/sql-statements/data-modification/load-and-export/MYSQL-LOAD",children:"MySQL Load"})," \u547D\u4EE4\u624B\u518C\u3002"]})]})}function o(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(h,{...n})}):h(n)}},250065:function(n,e,l){l.d(e,{Z:function(){return t},a:function(){return r}});var d=l(667294);let s={},i=d.createContext(s);function r(n){let e=d.useContext(i);return d.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),d.createElement(i.Provider,{value:e},n.children)}}}]);