"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["695586"],{183268:function(n,e,s){s.r(e),s.d(e,{metadata:()=>i,contentTitle:()=>r,default:()=>u,assets:()=>d,toc:()=>t,frontMatter:()=>o});var i=JSON.parse('{"id":"data-operate/import/data-source/aliyun-oss","title":"Aliyun OSS","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/data-operate/import/data-source/aliyun-oss.md","sourceDirName":"data-operate/import/data-source","slug":"/data-operate/import/data-source/aliyun-oss","permalink":"/zh-CN/docs/3.0/data-operate/import/data-source/aliyun-oss","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"Aliyun OSS","language":"zh-CN"},"sidebar":"docs","previous":{"title":"Google Cloud Storage","permalink":"/zh-CN/docs/3.0/data-operate/import/data-source/google-cloud-storage"},"next":{"title":"Huawei OBS","permalink":"/zh-CN/docs/3.0/data-operate/import/data-source/huawei-obs"}}'),a=s("785893"),l=s("250065");let o={title:"Aliyun OSS",language:"zh-CN"},r=void 0,d={},t=[{value:"\u4F7F\u7528 S3 Load \u5BFC\u5165",id:"\u4F7F\u7528-s3-load-\u5BFC\u5165",level:2},{value:"\u7B2C 1 \u6B65\uFF1A\u51C6\u5907\u6570\u636E",id:"\u7B2C-1-\u6B65\u51C6\u5907\u6570\u636E",level:3},{value:"\u7B2C 2 \u6B65\uFF1A\u5728 Doris \u4E2D\u521B\u5EFA\u8868",id:"\u7B2C-2-\u6B65\u5728-doris-\u4E2D\u521B\u5EFA\u8868",level:3},{value:"\u7B2C 3 \u6B65\uFF1A\u4F7F\u7528 S3 Load \u5BFC\u5165\u6570\u636E",id:"\u7B2C-3-\u6B65\u4F7F\u7528-s3-load-\u5BFC\u5165\u6570\u636E",level:3},{value:"\u7B2C 4 \u6B65\uFF1A\u68C0\u67E5\u5BFC\u5165\u6570\u636E",id:"\u7B2C-4-\u6B65\u68C0\u67E5\u5BFC\u5165\u6570\u636E",level:3},{value:"\u4F7F\u7528 TVF \u5BFC\u5165",id:"\u4F7F\u7528-tvf-\u5BFC\u5165",level:2},{value:"\u7B2C 1 \u6B65\uFF1A\u51C6\u5907\u6570\u636E",id:"\u7B2C-1-\u6B65\u51C6\u5907\u6570\u636E-1",level:3},{value:"\u7B2C 2 \u6B65\uFF1A\u5728 Doris \u4E2D\u521B\u5EFA\u8868",id:"\u7B2C-2-\u6B65\u5728-doris-\u4E2D\u521B\u5EFA\u8868-1",level:3},{value:"\u7B2C 3 \u6B65\uFF1A\u4F7F\u7528 TVF \u5BFC\u5165\u6570\u636E",id:"\u7B2C-3-\u6B65\u4F7F\u7528-tvf-\u5BFC\u5165\u6570\u636E",level:3},{value:"\u7B2C 4 \u6B65\uFF1A\u68C0\u67E5\u5BFC\u5165\u6570\u636E",id:"\u7B2C-4-\u6B65\u68C0\u67E5\u5BFC\u5165\u6570\u636E-1",level:3}];function c(n){let e={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.p,{children:"Doris \u63D0\u4F9B\u4E24\u79CD\u65B9\u5F0F\u4ECE Aliyun OSS \u5BFC\u5165\u6587\u4EF6\uFF1A"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"\u4F7F\u7528 S3 Load \u5C06 Aliyun OSS \u6587\u4EF6\u5BFC\u5165\u5230 Doris \u4E2D\uFF0C\u8FD9\u662F\u4E00\u4E2A\u5F02\u6B65\u7684\u5BFC\u5165\u65B9\u5F0F\u3002"}),"\n",(0,a.jsx)(e.li,{children:"\u4F7F\u7528 TVF \u5C06 Aliyun OSS \u6587\u4EF6\u5BFC\u5165\u5230 Doris \u4E2D\uFF0C\u8FD9\u662F\u4E00\u4E2A\u540C\u6B65\u7684\u5BFC\u5165\u65B9\u5F0F\u3002"}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"\u4F7F\u7528-s3-load-\u5BFC\u5165",children:"\u4F7F\u7528 S3 Load \u5BFC\u5165"}),"\n",(0,a.jsxs)(e.p,{children:["\u4F7F\u7528 S3 Load \u5BFC\u5165\u5BF9\u8C61\u5B58\u50A8\u4E0A\u7684\u6587\u4EF6\uFF0C\u8BE6\u7EC6\u6B65\u9AA4\u53EF\u4EE5\u53C2\u8003 ",(0,a.jsx)(e.a,{href:"/zh-CN/docs/3.0/data-operate/import/import-way/broker-load-manual",children:"Broker Load \u624B\u518C"})]}),"\n",(0,a.jsx)(e.h3,{id:"\u7B2C-1-\u6B65\u51C6\u5907\u6570\u636E",children:"\u7B2C 1 \u6B65\uFF1A\u51C6\u5907\u6570\u636E"}),"\n",(0,a.jsx)(e.p,{children:"\u521B\u5EFA CSV \u6587\u4EF6 s3load_example.csv \u6587\u4EF6\u5B58\u50A8\u5728 Aliyun OSS \u4E0A\uFF0C\u5176\u5185\u5BB9\u5982\u4E0B\uFF1A"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"1,Emily,25\n2,Benjamin,35\n3,Olivia,28\n4,Alexander,60\n5,Ava,17\n6,William,69\n7,Sophia,32\n8,James,64\n9,Emma,37\n10,Liam,64\n"})}),"\n",(0,a.jsx)(e.h3,{id:"\u7B2C-2-\u6B65\u5728-doris-\u4E2D\u521B\u5EFA\u8868",children:"\u7B2C 2 \u6B65\uFF1A\u5728 Doris \u4E2D\u521B\u5EFA\u8868"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:'CREATE TABLE test_s3load(\n    user_id            BIGINT       NOT NULL COMMENT "user id",\n    name               VARCHAR(20)           COMMENT "name",\n    age                INT                   COMMENT "age"\n)\nDUPLICATE KEY(user_id)\nDISTRIBUTED BY HASH(user_id) BUCKETS 10;\n'})}),"\n",(0,a.jsx)(e.h3,{id:"\u7B2C-3-\u6B65\u4F7F\u7528-s3-load-\u5BFC\u5165\u6570\u636E",children:"\u7B2C 3 \u6B65\uFF1A\u4F7F\u7528 S3 Load \u5BFC\u5165\u6570\u636E"}),"\n",(0,a.jsxs)(e.admonition,{title:"\u6CE8\u610F",type:"caution",children:[(0,a.jsx)(e.p,{children:"\u963F\u91CC\u4E91 OSS \u516C\u7F51\u548C\u5185\u7F51\u7684 endpoint \u662F\u4E0D\u540C\u7684\u3002\n\u5982\u679C\u670D\u52A1\u5668\u4E0E OSS \u5728\u540C\u4E00\u4E2A region \u4E0B\uFF0C\u5EFA\u8BAE\u4F7F\u7528\u5185\u7F51\u7684 endpoint \u94FE\u63A5\u3002"}),(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\u5185\u7F51 endpoint\uFF1A",(0,a.jsx)(e.code,{children:"oss-cn-hangzhou-internal.aliyuncs.com"})]}),"\n",(0,a.jsxs)(e.li,{children:["\u516C\u7F51 endpoint\uFF1A",(0,a.jsx)(e.code,{children:"oss-cn-hangzhou.aliyuncs.com"})]}),"\n"]})]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:'LOAD LABEL s3_load_2022_04_01\n(\n    DATA INFILE("s3://your_bucket_name/s3load_example.csv")\n    INTO TABLE test_s3load\n    COLUMNS TERMINATED BY ","\n    FORMAT AS "CSV"\n    (user_id, name, age)\n)\nWITH S3\n(\n    "provider" = "OSS",\n    "s3.endpoint" = "oss-cn-hangzhou.aliyuncs.com",  \n    "s3.region" = "oss-cn-hangzhou",\n    "s3.access_key" = "AKIAIOSFODNN7EXAMPLE",\n    "s3.secret_key" = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"\n)\nPROPERTIES\n(\n    "timeout" = "3600"\n);\n'})}),"\n",(0,a.jsx)(e.h3,{id:"\u7B2C-4-\u6B65\u68C0\u67E5\u5BFC\u5165\u6570\u636E",children:"\u7B2C 4 \u6B65\uFF1A\u68C0\u67E5\u5BFC\u5165\u6570\u636E"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"SELECT * FROM test_s3load;\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u7ED3\u679C\uFF1A"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"mysql> select * from test_s3load;\n+---------+-----------+------+\n| user_id | name      | age  |\n+---------+-----------+------+\n|       5 | Ava       |   17 |\n|      10 | Liam      |   64 |\n|       7 | Sophia    |   32 |\n|       9 | Emma      |   37 |\n|       1 | Emily     |   25 |\n|       4 | Alexander |   60 |\n|       2 | Benjamin  |   35 |\n|       3 | Olivia    |   28 |\n|       6 | William   |   69 |\n|       8 | James     |   64 |\n+---------+-----------+------+\n10 rows in set (0.04 sec)\n"})}),"\n",(0,a.jsx)(e.h2,{id:"\u4F7F\u7528-tvf-\u5BFC\u5165",children:"\u4F7F\u7528 TVF \u5BFC\u5165"}),"\n",(0,a.jsx)(e.h3,{id:"\u7B2C-1-\u6B65\u51C6\u5907\u6570\u636E-1",children:"\u7B2C 1 \u6B65\uFF1A\u51C6\u5907\u6570\u636E"}),"\n",(0,a.jsx)(e.p,{children:"\u521B\u5EFA CSV \u6587\u4EF6 s3load_example.csv \u6587\u4EF6\u5B58\u50A8\u5728 Aliyun OSS \u4E0A\uFF0C\u5176\u5185\u5BB9\u5982\u4E0B\uFF1A"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"1,Emily,25\n2,Benjamin,35\n3,Olivia,28\n4,Alexander,60\n5,Ava,17\n6,William,69\n7,Sophia,32\n8,James,64\n9,Emma,37\n10,Liam,64\n"})}),"\n",(0,a.jsx)(e.h3,{id:"\u7B2C-2-\u6B65\u5728-doris-\u4E2D\u521B\u5EFA\u8868-1",children:"\u7B2C 2 \u6B65\uFF1A\u5728 Doris \u4E2D\u521B\u5EFA\u8868"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:'CREATE TABLE test_s3load(\n    user_id            BIGINT       NOT NULL COMMENT "user id",\n    name               VARCHAR(20)           COMMENT "name",\n    age                INT                   COMMENT "age"\n)\nDUPLICATE KEY(user_id)\nDISTRIBUTED BY HASH(user_id) BUCKETS 10;\n'})}),"\n",(0,a.jsx)(e.h3,{id:"\u7B2C-3-\u6B65\u4F7F\u7528-tvf-\u5BFC\u5165\u6570\u636E",children:"\u7B2C 3 \u6B65\uFF1A\u4F7F\u7528 TVF \u5BFC\u5165\u6570\u636E"}),"\n",(0,a.jsxs)(e.admonition,{title:"\u6CE8\u610F",type:"caution",children:[(0,a.jsx)(e.p,{children:"\u963F\u91CC\u4E91 OSS \u516C\u7F51\u548C\u5185\u7F51\u7684 endpoint \u662F\u4E0D\u540C\u7684\u3002\n\u5982\u679C\u670D\u52A1\u5668\u4E0E OSS \u5728\u540C\u4E00\u4E2A region \u4E0B\uFF0C\u5EFA\u8BAE\u4F7F\u7528\u5185\u7F51\u7684 endpoint \u94FE\u63A5\u3002"}),(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\u5185\u7F51 endpoint\uFF1A",(0,a.jsx)(e.code,{children:"oss-cn-hangzhou-internal.aliyuncs.com"})]}),"\n",(0,a.jsxs)(e.li,{children:["\u516C\u7F51 endpoint\uFF1A",(0,a.jsx)(e.code,{children:"oss-cn-hangzhou.aliyuncs.com"})]}),"\n"]})]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:'INSERT INTO test_s3load\nSELECT * FROM S3\n(\n    "uri" = "s3://your_bucket_name/s3load_example.csv",\n    "format" = "csv",\n    "provider" = "OSS",\n    "s3.endpoint" = "oss-cn-hangzhou.aliyuncs.com",\n    "s3.region" = "oss-cn-hangzhou",\n    "s3.access_key" = "AKIAIOSFODNN7EXAMPLE",\n    "s3.secret_key" = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",\n    "column_separator" = ",",\n    "csv_schema" = "user_id:int;name:string;age:int"\n);\n'})}),"\n",(0,a.jsx)(e.h3,{id:"\u7B2C-4-\u6B65\u68C0\u67E5\u5BFC\u5165\u6570\u636E-1",children:"\u7B2C 4 \u6B65\uFF1A\u68C0\u67E5\u5BFC\u5165\u6570\u636E"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"SELECT * FROM test_s3load;\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u7ED3\u679C\uFF1A"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"mysql> select * from test_s3load;\n+---------+-----------+------+\n| user_id | name      | age  |\n+---------+-----------+------+\n|       5 | Ava       |   17 |\n|      10 | Liam      |   64 |\n|       7 | Sophia    |   32 |\n|       9 | Emma      |   37 |\n|       1 | Emily     |   25 |\n|       4 | Alexander |   60 |\n|       2 | Benjamin  |   35 |\n|       3 | Olivia    |   28 |\n|       6 | William   |   69 |\n|       8 | James     |   64 |\n+---------+-----------+------+\n10 rows in set (0.04 sec)\n"})})]})}function u(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(c,{...n})}):c(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return r},a:function(){return o}});var i=s(667294);let a={},l=i.createContext(a);function o(n){let e=i.useContext(l);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:o(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);