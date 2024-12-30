"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["644611"],{722010:function(e,n,s){s.r(n),s.d(n,{metadata:()=>i,contentTitle:()=>r,default:()=>h,assets:()=>d,toc:()=>o,frontMatter:()=>t});var i=JSON.parse('{"id":"data-operate/import/data-source/minio","title":"MinIO","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/data-operate/import/data-source/minio.md","sourceDirName":"data-operate/import/data-source","slug":"/data-operate/import/data-source/minio","permalink":"/zh-CN/docs/3.0/data-operate/import/data-source/minio","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"MinIO","language":"zh-CN"},"sidebar":"docs","previous":{"title":"Tencent COS","permalink":"/zh-CN/docs/3.0/data-operate/import/data-source/tencent-cos"},"next":{"title":"S3 \u517C\u5BB9\u5B58\u50A8","permalink":"/zh-CN/docs/3.0/data-operate/import/data-source/s3-compatible"}}'),a=s("785893"),l=s("250065");let t={title:"MinIO",language:"zh-CN"},r=void 0,d={},o=[{value:"\u4F7F\u7528 S3 Load \u5BFC\u5165",id:"\u4F7F\u7528-s3-load-\u5BFC\u5165",level:2},{value:"\u7B2C 1 \u6B65\uFF1A\u51C6\u5907\u6570\u636E",id:"\u7B2C-1-\u6B65\u51C6\u5907\u6570\u636E",level:3},{value:"\u7B2C 2 \u6B65\uFF1A\u5728 Doris \u4E2D\u521B\u5EFA\u8868",id:"\u7B2C-2-\u6B65\u5728-doris-\u4E2D\u521B\u5EFA\u8868",level:3},{value:"\u7B2C 3 \u6B65\uFF1A\u4F7F\u7528 S3 Load \u5BFC\u5165\u6570\u636E",id:"\u7B2C-3-\u6B65\u4F7F\u7528-s3-load-\u5BFC\u5165\u6570\u636E",level:3},{value:"\u7B2C 4 \u6B65\uFF1A\u68C0\u67E5\u5BFC\u5165\u6570\u636E",id:"\u7B2C-4-\u6B65\u68C0\u67E5\u5BFC\u5165\u6570\u636E",level:3},{value:"\u4F7F\u7528 TVF \u5BFC\u5165",id:"\u4F7F\u7528-tvf-\u5BFC\u5165",level:2},{value:"\u7B2C 1 \u6B65\uFF1A\u51C6\u5907\u6570\u636E",id:"\u7B2C-1-\u6B65\u51C6\u5907\u6570\u636E-1",level:3},{value:"\u7B2C 2 \u6B65\uFF1A\u5728 Doris \u4E2D\u521B\u5EFA\u8868",id:"\u7B2C-2-\u6B65\u5728-doris-\u4E2D\u521B\u5EFA\u8868-1",level:3},{value:"\u7B2C 3 \u6B65\uFF1A\u4F7F\u7528 TVF \u5BFC\u5165\u6570\u636E",id:"\u7B2C-3-\u6B65\u4F7F\u7528-tvf-\u5BFC\u5165\u6570\u636E",level:3},{value:"\u7B2C 4 \u6B65\uFF1A\u68C0\u67E5\u5BFC\u5165\u6570\u636E",id:"\u7B2C-4-\u6B65\u68C0\u67E5\u5BFC\u5165\u6570\u636E-1",level:3}];function c(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Doris \u63D0\u4F9B\u4E24\u79CD\u65B9\u5F0F\u4ECE MinIO \u5BFC\u5165\u6587\u4EF6\uFF1A"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\u4F7F\u7528 S3 Load \u5C06 MinIO \u6587\u4EF6\u5BFC\u5165\u5230 Doris \u4E2D\uFF0C\u8FD9\u662F\u4E00\u4E2A\u5F02\u6B65\u7684\u5BFC\u5165\u65B9\u5F0F\u3002"}),"\n",(0,a.jsx)(n.li,{children:"\u4F7F\u7528 TVF \u5C06 MinIO \u6587\u4EF6\u5BFC\u5165\u5230 Doris \u4E2D\uFF0C\u8FD9\u662F\u4E00\u4E2A\u540C\u6B65\u7684\u5BFC\u5165\u65B9\u5F0F\u3002"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"\u4F7F\u7528-s3-load-\u5BFC\u5165",children:"\u4F7F\u7528 S3 Load \u5BFC\u5165"}),"\n",(0,a.jsxs)(n.p,{children:["\u4F7F\u7528 S3 Load \u5BFC\u5165\u5BF9\u8C61\u5B58\u50A8\u4E0A\u7684\u6587\u4EF6\uFF0C\u8BE6\u7EC6\u6B65\u9AA4\u53EF\u4EE5\u53C2\u8003 ",(0,a.jsx)(n.a,{href:"/zh-CN/docs/3.0/data-operate/import/import-way/broker-load-manual",children:"Broker Load \u624B\u518C"})]}),"\n",(0,a.jsx)(n.h3,{id:"\u7B2C-1-\u6B65\u51C6\u5907\u6570\u636E",children:"\u7B2C 1 \u6B65\uFF1A\u51C6\u5907\u6570\u636E"}),"\n",(0,a.jsx)(n.p,{children:"\u521B\u5EFA CSV \u6587\u4EF6 s3load_example.csv \u6587\u4EF6\u5B58\u50A8\u5728 MinIO \u4E0A\uFF0C\u5176\u5185\u5BB9\u5982\u4E0B\uFF1A"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"1,Emily,25\n2,Benjamin,35\n3,Olivia,28\n4,Alexander,60\n5,Ava,17\n6,William,69\n7,Sophia,32\n8,James,64\n9,Emma,37\n10,Liam,64\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u7B2C-2-\u6B65\u5728-doris-\u4E2D\u521B\u5EFA\u8868",children:"\u7B2C 2 \u6B65\uFF1A\u5728 Doris \u4E2D\u521B\u5EFA\u8868"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE test_s3load(\n    user_id            BIGINT       NOT NULL COMMENT "user id",\n    name               VARCHAR(20)           COMMENT "name",\n    age                INT                   COMMENT "age"\n)\nDUPLICATE KEY(user_id)\nDISTRIBUTED BY HASH(user_id) BUCKETS 10;\n'})}),"\n",(0,a.jsx)(n.h3,{id:"\u7B2C-3-\u6B65\u4F7F\u7528-s3-load-\u5BFC\u5165\u6570\u636E",children:"\u7B2C 3 \u6B65\uFF1A\u4F7F\u7528 S3 Load \u5BFC\u5165\u6570\u636E"}),"\n",(0,a.jsxs)(n.admonition,{title:"\u6CE8\u610F",type:"caution",children:[(0,a.jsxs)(n.p,{children:["\u5982\u679C\u60A8\u5728\u672C\u5730\u7F51\u7EDC\u4E2D\u90E8\u7F72\u4E86 MinIO \u5E76\u4E14\u672A\u542F\u7528 TLS\uFF0C\u5219\u9700\u8981\u5728 endpoint \u5B57\u7B26\u4E32\u4E2D\u660E\u786E\u6DFB\u52A0 ",(0,a.jsx)(n.code,{children:"http://"}),"\u3002"]}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:'"s3.endpoint" = "http://localhost:9000"'})}),"\n"]}),(0,a.jsxs)(n.p,{children:["S3 SDK \u9ED8\u8BA4\u4F7F\u7528 virtual-hosted style \u65B9\u5F0F\u3002\u4F46 MinIO \u9ED8\u8BA4\u6CA1\u5F00\u542F virtual-hosted style \u65B9\u5F0F\u7684\u8BBF\u95EE\uFF0C\u6B64\u65F6\u6211\u4EEC\u53EF\u4EE5\u6DFB\u52A0 ",(0,a.jsx)(n.code,{children:"use_path_style"})," \u53C2\u6570\u6765\u5F3A\u5236\u4F7F\u7528 path style \u65B9\u5F0F\u3002"]}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:'"use_path_style" = "true"'})}),"\n"]})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'LOAD LABEL s3_load_2022_04_01\n(\n    DATA INFILE("s3://your_bucket_name/s3load_example.csv")\n    INTO TABLE test_s3load\n    COLUMNS TERMINATED BY ","\n    FORMAT AS "CSV"\n    (user_id, name, age)\n)\nWITH S3\n(\n    "provider" = "S3",\n    "s3.endpoint" = "play.min.io:9000",  \n    "s3.region" = "us-east-1",\n    "s3.access_key" = "myminioadmin",\n    "s3.secret_key" = "minio-secret-key-change-me",\n    "use_path_style" = "true"\n)\nPROPERTIES\n(\n    "timeout" = "3600"\n);\n'})}),"\n",(0,a.jsx)(n.h3,{id:"\u7B2C-4-\u6B65\u68C0\u67E5\u5BFC\u5165\u6570\u636E",children:"\u7B2C 4 \u6B65\uFF1A\u68C0\u67E5\u5BFC\u5165\u6570\u636E"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM test_s3load;\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u7ED3\u679C\uFF1A"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"mysql> select * from test_s3load;\n+---------+-----------+------+\n| user_id | name      | age  |\n+---------+-----------+------+\n|       5 | Ava       |   17 |\n|      10 | Liam      |   64 |\n|       7 | Sophia    |   32 |\n|       9 | Emma      |   37 |\n|       1 | Emily     |   25 |\n|       4 | Alexander |   60 |\n|       2 | Benjamin  |   35 |\n|       3 | Olivia    |   28 |\n|       6 | William   |   69 |\n|       8 | James     |   64 |\n+---------+-----------+------+\n10 rows in set (0.04 sec)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u4F7F\u7528-tvf-\u5BFC\u5165",children:"\u4F7F\u7528 TVF \u5BFC\u5165"}),"\n",(0,a.jsx)(n.h3,{id:"\u7B2C-1-\u6B65\u51C6\u5907\u6570\u636E-1",children:"\u7B2C 1 \u6B65\uFF1A\u51C6\u5907\u6570\u636E"}),"\n",(0,a.jsx)(n.p,{children:"\u521B\u5EFA CSV \u6587\u4EF6 s3load_example.csv \u6587\u4EF6\u5B58\u50A8\u5728 MinIO \u4E0A\uFF0C\u5176\u5185\u5BB9\u5982\u4E0B\uFF1A"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"1,Emily,25\n2,Benjamin,35\n3,Olivia,28\n4,Alexander,60\n5,Ava,17\n6,William,69\n7,Sophia,32\n8,James,64\n9,Emma,37\n10,Liam,64\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u7B2C-2-\u6B65\u5728-doris-\u4E2D\u521B\u5EFA\u8868-1",children:"\u7B2C 2 \u6B65\uFF1A\u5728 Doris \u4E2D\u521B\u5EFA\u8868"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE test_s3load(\n    user_id            BIGINT       NOT NULL COMMENT "user id",\n    name               VARCHAR(20)           COMMENT "name",\n    age                INT                   COMMENT "age"\n)\nDUPLICATE KEY(user_id)\nDISTRIBUTED BY HASH(user_id) BUCKETS 10;\n'})}),"\n",(0,a.jsx)(n.h3,{id:"\u7B2C-3-\u6B65\u4F7F\u7528-tvf-\u5BFC\u5165\u6570\u636E",children:"\u7B2C 3 \u6B65\uFF1A\u4F7F\u7528 TVF \u5BFC\u5165\u6570\u636E"}),"\n",(0,a.jsxs)(n.admonition,{title:"\u6CE8\u610F",type:"caution",children:[(0,a.jsxs)(n.p,{children:["\u5982\u679C\u60A8\u5728\u672C\u5730\u7F51\u7EDC\u4E2D\u90E8\u7F72\u4E86 MinIO \u5E76\u4E14\u672A\u542F\u7528 TLS\uFF0C\u5219\u9700\u8981\u5728 endpoint \u5B57\u7B26\u4E32\u4E2D\u660E\u786E\u6DFB\u52A0 ",(0,a.jsx)(n.code,{children:"http://"}),"\u3002"]}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:'"s3.endpoint" = "http://localhost:9000"'})}),"\n"]}),(0,a.jsxs)(n.p,{children:["S3 SDK \u9ED8\u8BA4\u4F7F\u7528 virtual-hosted style \u65B9\u5F0F\u3002\u4F46 MinIO \u9ED8\u8BA4\u6CA1\u5F00\u542F virtual-hosted style \u65B9\u5F0F\u7684\u8BBF\u95EE\uFF0C\u6B64\u65F6\u6211\u4EEC\u53EF\u4EE5\u6DFB\u52A0 ",(0,a.jsx)(n.code,{children:"use_path_style"})," \u53C2\u6570\u6765\u5F3A\u5236\u4F7F\u7528 path style \u65B9\u5F0F\u3002"]}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:'"use_path_style" = "true"'})}),"\n"]})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'INSERT INTO test_s3load\nSELECT * FROM S3\n(\n    "uri" = "s3://your_bucket_name/s3load_example.csv",\n    "format" = "csv",\n    "provider" = "S3",\n    "s3.endpoint" = "play.min.io:9000",\n    "s3.region" = "us-east-1",\n    "s3.access_key" = "myminioadmin",\n    "s3.secret_key" = "minio-secret-key-change-me",\n    "column_separator" = ",",\n    "csv_schema" = "user_id:int;name:string;age:int",\n    "use_path_style" = "true"\n);\n'})}),"\n",(0,a.jsx)(n.h3,{id:"\u7B2C-4-\u6B65\u68C0\u67E5\u5BFC\u5165\u6570\u636E-1",children:"\u7B2C 4 \u6B65\uFF1A\u68C0\u67E5\u5BFC\u5165\u6570\u636E"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM test_s3load;\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u7ED3\u679C\uFF1A"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"mysql> select * from test_s3load;\n+---------+-----------+------+\n| user_id | name      | age  |\n+---------+-----------+------+\n|       5 | Ava       |   17 |\n|      10 | Liam      |   64 |\n|       7 | Sophia    |   32 |\n|       9 | Emma      |   37 |\n|       1 | Emily     |   25 |\n|       4 | Alexander |   60 |\n|       2 | Benjamin  |   35 |\n|       3 | Olivia    |   28 |\n|       6 | William   |   69 |\n|       8 | James     |   64 |\n+---------+-----------+------+\n10 rows in set (0.04 sec)\n"})})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return t}});var i=s(667294);let a={},l=i.createContext(a);function t(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);