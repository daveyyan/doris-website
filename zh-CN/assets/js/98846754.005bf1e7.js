"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["985058"],{340585:function(n,e,s){s.r(e),s.d(e,{metadata:()=>t,contentTitle:()=>r,default:()=>E,assets:()=>o,toc:()=>c,frontMatter:()=>l});var t=JSON.parse('{"id":"sql-manual/sql-statements/data-modification/backup-and-restore/CREATE-REPOSITORY","title":"CREATE REPOSITORY","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/data-modification/backup-and-restore/CREATE-REPOSITORY.md","sourceDirName":"sql-manual/sql-statements/data-modification/backup-and-restore","slug":"/sql-manual/sql-statements/data-modification/backup-and-restore/CREATE-REPOSITORY","permalink":"/zh-CN/docs/sql-manual/sql-statements/data-modification/backup-and-restore/CREATE-REPOSITORY","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"CREATE REPOSITORY","language":"zh-CN"},"sidebar":"docs","previous":{"title":"CLEAN LABEL","permalink":"/zh-CN/docs/sql-manual/sql-statements/data-modification/load-and-export/CLEAN-LABEL"},"next":{"title":"DROP REPOSITORY","permalink":"/zh-CN/docs/sql-manual/sql-statements/data-modification/backup-and-restore/DROP-REPOSITORY"}}'),a=s("785893"),i=s("250065");let l={title:"CREATE REPOSITORY",language:"zh-CN"},r=void 0,o={},c=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u5173\u952E\u8BCD",id:"\u5173\u952E\u8BCD",level:2},{value:"\u6700\u4F73\u5B9E\u8DF5",id:"\u6700\u4F73\u5B9E\u8DF5",level:2}];function d(n){let e={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,a.jsx)(e.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u521B\u5EFA\u4ED3\u5E93\u3002\u4ED3\u5E93\u7528\u4E8E\u5C5E\u4E8E\u5907\u4EFD\u6216\u6062\u590D\u3002\u4EC5 root \u6216 superuser \u7528\u6237\u53EF\u4EE5\u521B\u5EFA\u4ED3\u5E93\u3002"}),"\n",(0,a.jsx)(e.p,{children:"\u8BED\u6CD5\uFF1A"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:'CREATE [READ ONLY] REPOSITORY `repo_name`\nWITH [S3|hdfs]\nON LOCATION `repo_location`\nPROPERTIES ("key"="value", ...);\n'})}),"\n",(0,a.jsx)(e.p,{children:"\u8BF4\u660E\uFF1A"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"\u5982\u679C\u662F\u53EA\u8BFB\u4ED3\u5E93\uFF0C\u5219\u53EA\u80FD\u5728\u4ED3\u5E93\u4E0A\u8FDB\u884C\u6062\u590D\u3002\u5982\u679C\u4E0D\u662F\uFF0C\u5219\u53EF\u4EE5\u8FDB\u884C\u5907\u4EFD\u548C\u6062\u590D\u64CD\u4F5C\u3002"}),"\n",(0,a.jsx)(e.li,{children:"\u6839\u636E S3\u3001HDFS \u7684\u4E0D\u540C\u7C7B\u578B\uFF0CPROPERTIES \u6709\u6240\u4E0D\u540C\uFF0C\u5177\u4F53\u89C1\u793A\u4F8B\u3002"}),"\n",(0,a.jsx)(e.li,{children:"ON LOCATION ,\u5982\u679C\u662F S3 , \u8FD9\u91CC\u540E\u9762\u8DDF\u7684\u662F Bucket Name\u3002"}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsx)(e.li,{children:"\u521B\u5EFA\u540D\u4E3A s3_repo \u7684\u4ED3\u5E93\u3002"}),"\n"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:'CREATE REPOSITORY `s3_repo`\nWITH S3\nON LOCATION "s3://s3-repo"\nPROPERTIES\n(\n    "s3.endpoint" = "http://s3-REGION.amazonaws.com",\n    "s3.access_key" = "AWS_ACCESS_KEY",\n    "s3.secret_key"="AWS_SECRET_KEY",\n    "s3.region" = "REGION"\n);\n'})}),"\n",(0,a.jsxs)(e.ol,{start:"2",children:["\n",(0,a.jsx)(e.li,{children:"\u521B\u5EFA\u540D\u4E3A hdfs_repo \u7684\u4ED3\u5E93\u3002"}),"\n"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:'CREATE REPOSITORY `hdfs_repo`\nWITH hdfs\nON LOCATION "hdfs://hadoop-name-node:54310/path/to/repo/"\nPROPERTIES\n(\n    "fs.defaultFS"="hdfs://hadoop-name-node:54310",\n    "hadoop.username"="user"\n);\n'})}),"\n",(0,a.jsxs)(e.ol,{start:"3",children:["\n",(0,a.jsx)(e.li,{children:"\u521B\u5EFA\u540D\u4E3A minio_repo \u7684\u4ED3\u5E93\u3002"}),"\n"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:'CREATE REPOSITORY `minio_repo`\nWITH S3\nON LOCATION "s3://minio_repo"\nPROPERTIES\n(\n    "s3.endpoint" = "http://minio.com",\n    "s3.access_key" = "MINIO_USER",\n    "s3.secret_key"="MINIO_PASSWORD",\n    "s3.region" = "REGION",\n    "use_path_style" = "true"\n);\n'})}),"\n",(0,a.jsxs)(e.ol,{start:"4",children:["\n",(0,a.jsx)(e.li,{children:"\u4F7F\u7528\u4E34\u65F6\u79D8\u94A5\u521B\u5EFA\u540D\u4E3A minio_repo \u7684\u4ED3\u5E93"}),"\n"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:'CREATE REPOSITORY `minio_repo`\nWITH S3\nON LOCATION "s3://minio_repo"\nPROPERTIES\n(\n    "s3.endpoint" = "AWS_ENDPOINT",\n    "s3.access_key" = "AWS_TEMP_ACCESS_KEY",\n    "s3.secret_key" = "AWS_TEMP_SECRET_KEY",\n    "s3.session_token" = "AWS_TEMP_TOKEN",\n    "s3.region" = "AWS_REGION"\n)\n'})}),"\n",(0,a.jsxs)(e.ol,{start:"5",children:["\n",(0,a.jsx)(e.li,{children:"\u4F7F\u7528\u817E\u8BAF\u4E91 COS \u521B\u5EFA\u4ED3\u5E93"}),"\n"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:'CREATE REPOSITORY `cos_repo`\nWITH S3\nON LOCATION "s3://backet1/"\nPROPERTIES\n(\n    "s3.access_key" = "ak",\n    "s3.secret_key" = "sk",\n    "s3.endpoint" = "http://cos.ap-beijing.myqcloud.com",\n    "s3.region" = "ap-beijing"\n);\n'})}),"\n",(0,a.jsx)(e.h2,{id:"\u5173\u952E\u8BCD",children:"\u5173\u952E\u8BCD"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"CREATE, REPOSITORY\n"})}),"\n",(0,a.jsx)(e.h2,{id:"\u6700\u4F73\u5B9E\u8DF5",children:"\u6700\u4F73\u5B9E\u8DF5"}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsx)(e.li,{children:"\u4E00\u4E2A\u96C6\u7FA4\u53EF\u4EE5\u521B\u5EFA\u8FC7\u591A\u4E2A\u4ED3\u5E93\u3002\u53EA\u6709\u62E5\u6709 ADMIN \u6743\u9650\u7684\u7528\u6237\u624D\u80FD\u521B\u5EFA\u4ED3\u5E93\u3002"}),"\n",(0,a.jsxs)(e.li,{children:["\u4EFB\u4F55\u7528\u6237\u90FD\u53EF\u4EE5\u901A\u8FC7 ",(0,a.jsx)(e.a,{href:"../../../../sql-manual/sql-statements/data-modification/backup-and-restore/SHOW-REPOSITORIES",children:"SHOW REPOSITORIES"})," \u547D\u4EE4\u67E5\u770B\u5DF2\u7ECF\u521B\u5EFA\u7684\u4ED3\u5E93\u3002"]}),"\n",(0,a.jsx)(e.li,{children:"\u5728\u505A\u6570\u636E\u8FC1\u79FB\u64CD\u4F5C\u65F6\uFF0C\u9700\u8981\u5728\u6E90\u96C6\u7FA4\u548C\u76EE\u7684\u96C6\u7FA4\u521B\u5EFA\u5B8C\u5168\u76F8\u540C\u7684\u4ED3\u5E93\uFF0C\u4EE5\u4FBF\u76EE\u7684\u96C6\u7FA4\u53EF\u4EE5\u901A\u8FC7\u8FD9\u4E2A\u4ED3\u5E93\uFF0C\u67E5\u770B\u5230\u6E90\u96C6\u7FA4\u5907\u4EFD\u7684\u6570\u636E\u5FEB\u7167\u3002"}),"\n"]})]})}function E(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(d,{...n})}):d(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return r},a:function(){return l}});var t=s(667294);let a={},i=t.createContext(a);function l(n){let e=t.useContext(i);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:l(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);