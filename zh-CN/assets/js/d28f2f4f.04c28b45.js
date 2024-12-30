"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["131542"],{878372:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>d,default:()=>o,assets:()=>c,toc:()=>a,frontMatter:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-STORAGE-VAULT","title":"CREATE-STORAGE-VAULT","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-STORAGE-VAULT.md","sourceDirName":"sql-manual/sql-statements/Data-Definition-Statements/Create","slug":"/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-STORAGE-VAULT","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-STORAGE-VAULT","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"CREATE-STORAGE-VAULT","language":"zh-CN","toc_min_heading_level":2,"toc_max_heading_level":4},"sidebar":"docs","previous":{"title":"CREATE-SQL-BLOCK-RULE","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-SQL-BLOCK-RULE"},"next":{"title":"CREATE-ASYNC-MATERIALIZED-VIEW","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-ASYNC-MATERIALIZED-VIEW"}}'),l=t("785893"),i=t("250065");let r={title:"CREATE-STORAGE-VAULT",language:"zh-CN",toc_min_heading_level:2,toc_max_heading_level:4},d=void 0,c={},a=[{value:"CREATE-STORAGE-VAULT",id:"create-storage-vault",level:2},{value:"Description",id:"description",level:3},{value:"properties",id:"properties",level:4},{value:"S3 Vault",id:"s3-vault",level:5},{value:"HDFS vault",id:"hdfs-vault",level:5},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:3},{value:"\u5173\u952E\u8BCD",id:"\u5173\u952E\u8BCD",level:3}];function h(e){let n={br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"create-storage-vault",children:"CREATE-STORAGE-VAULT"}),"\n",(0,l.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"\u8BE5\u547D\u4EE4\u7528\u4E8E\u521B\u5EFA\u5B58\u50A8\u5E93\u3002\u672C\u6587\u6863\u7684\u4E3B\u9898\u63CF\u8FF0\u4E86\u521B\u5EFA Doris \u81EA\u7BA1\u7406\u5B58\u50A8\u5E93\u7684\u8BED\u6CD5\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"CREATE STORAGE VAULT [IF NOT EXISTS] vault\n[properties]\n"})}),"\n",(0,l.jsx)(n.h4,{id:"properties",children:"properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u53C2\u6570"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u662F\u5426\u5FC5\u9700"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u63CF\u8FF0"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"type"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u5FC5\u9700"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u53EA\u5141\u8BB8\u4E24\u79CD\u7C7B\u578B\u7684\u5B58\u50A8\u5E93:S3 \u548C HDFS\u3002"})]})})]}),"\n",(0,l.jsx)(n.h5,{id:"s3-vault",children:"S3 Vault"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u53C2\u6570"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u662F\u5426\u5FC5\u9700"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u63CF\u8FF0"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"s3.endpoint"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u5FC5\u9700"}),(0,l.jsxs)(n.td,{style:{textAlign:"left"},children:["\u7528\u4E8E\u5BF9\u8C61\u5B58\u50A8\u7684\u7AEF\u70B9\u3002",(0,l.jsx)(n.br,{}),"\u6CE8\u610F\uFF0C\u8BF7\u4E0D\u8981\u63D0\u4F9B\u5E26\u6709 http:// \u6216 https:// \u5F00\u5934\u7684\u94FE\u63A5\u3002\u5BF9\u4E8E Azure Blob \u5B58\u50A8\uFF0C\u94FE\u63A5\u5E94\u8BE5\u50CF ${ak}.blob.core.windows.net/\u3002"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"s3.region"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u5FC5\u9700"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u60A8\u7684\u5B58\u50A8\u6876\u7684\u533A\u57DF\u3002(\u5982\u679C\u60A8\u4F7F\u7528 GCP \u6216 AZURE,\u5219\u4E0D\u9700\u8981)\u3002"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"s3.root.path"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u5FC5\u9700"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u5B58\u50A8\u6570\u636E\u7684\u8DEF\u5F84\u3002"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"s3.bucket"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u5FC5\u9700"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u60A8\u7684\u5BF9\u8C61\u5B58\u50A8\u8D26\u6237\u7684\u5B58\u50A8\u6876\u3002(\u5982\u679C\u60A8\u4F7F\u7528 Azure,\u5219\u4E3A StorageAccount)\u3002"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"s3.access_key"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u5FC5\u9700"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u60A8\u7684\u5BF9\u8C61\u5B58\u50A8\u8D26\u6237\u7684\u8BBF\u95EE\u5BC6\u94A5\u3002(\u5982\u679C\u60A8\u4F7F\u7528 Azure,\u5219\u4E3A AccountName)\u3002"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"s3.secret_key"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u5FC5\u9700"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u60A8\u7684\u5BF9\u8C61\u5B58\u50A8\u8D26\u6237\u7684\u79D8\u5BC6\u5BC6\u94A5\u3002(\u5982\u679C\u60A8\u4F7F\u7528 Azure,\u5219\u4E3A AccountKey)\u3002"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"provider"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u5FC5\u9700"}),(0,l.jsxs)(n.td,{style:{textAlign:"left"},children:["\u63D0\u4F9B\u5BF9\u8C61\u5B58\u50A8\u670D\u52A1\u7684\u4E91\u4F9B\u5E94\u5546\u3002\u652F\u6301\u7684\u503C\u6709",(0,l.jsx)(n.code,{children:"COS"}),"\uFF0C",(0,l.jsx)(n.code,{children:"OSS"}),"\uFF0C",(0,l.jsx)(n.code,{children:"S3"}),"\uFF0C",(0,l.jsx)(n.code,{children:"OBS"}),"\uFF0C",(0,l.jsx)(n.code,{children:"BOS"}),"\uFF0C",(0,l.jsx)(n.code,{children:"AZURE"}),"\uFF0C",(0,l.jsx)(n.code,{children:"GCP"})]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"use_path_style"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u53EF\u9009"}),(0,l.jsxs)(n.td,{style:{textAlign:"left"},children:["\u4F7F\u7528 ",(0,l.jsx)(n.code,{children:"path-style URL"}),"(\u79C1\u6709\u5316\u90E8\u7F72\u73AF\u5883)\u6216\u8005",(0,l.jsx)(n.code,{children:"virtual-hosted-style URL"}),"(\u516C\u6709\u4E91\u73AF\u5883\u5EFA\u8BAE), \u9ED8\u8BA4\u503C ",(0,l.jsx)(n.code,{children:"true"})," (path-style)"]})]})]})]}),"\n",(0,l.jsx)(n.h5,{id:"hdfs-vault",children:"HDFS vault"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u53C2\u6570"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u662F\u5426\u5FC5\u9700"}),(0,l.jsx)(n.th,{style:{textAlign:"left"},children:"\u63CF\u8FF0"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"fs.defaultFS"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u5FC5\u9700"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Hadoop \u914D\u7F6E\u5C5E\u6027,\u6307\u5B9A\u8981\u4F7F\u7528\u7684\u9ED8\u8BA4\u6587\u4EF6\u7CFB\u7EDF\u3002"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"path_prefix"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u53EF\u9009"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u5B58\u50A8\u6570\u636E\u7684\u8DEF\u5F84\u524D\u7F00\u3002\u5982\u679C\u6CA1\u6709\u6307\u5B9A\u5219\u4F1A\u4F7F\u7528 user \u8D26\u6237\u4E0B\u7684\u9ED8\u8BA4\u8DEF\u5F84\u3002"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"hadoop.username"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u53EF\u9009"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"Hadoop \u914D\u7F6E\u5C5E\u6027\uFF0C\u6307\u5B9A\u8BBF\u95EE\u6587\u4EF6\u7CFB\u7EDF\u7684\u7528\u6237\u3002\u5982\u679C\u6CA1\u6709\u6307\u5B9A\u5219\u4F1A\u4F7F\u7528\u542F\u52A8 hadoop \u8FDB\u7A0B\u7684 user\u3002"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"hadoop.security.authentication"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u53EF\u9009"}),(0,l.jsxs)(n.td,{style:{textAlign:"left"},children:["\u7528\u4E8E hadoop \u7684\u8BA4\u8BC1\u65B9\u5F0F\u3002\u5982\u679C\u5E0C\u671B\u4F7F\u7528 kerberos \u5219\u53EF\u4EE5\u586B\u5199",(0,l.jsx)(n.code,{children:"kerberos"}),"\u3002"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"hadoop.kerberos.principal"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u53EF\u9009"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u60A8\u7684 kerberos \u4E3B\u4F53\u7684\u8DEF\u5F84\u3002"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{style:{textAlign:"left"},children:(0,l.jsx)(n.code,{children:"hadoop.kerberos.keytab"})}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u53EF\u9009"}),(0,l.jsx)(n.td,{style:{textAlign:"left"},children:"\u60A8\u7684 kerberos keytab \u7684\u8DEF\u5F84\u3002"})]})]})]}),"\n",(0,l.jsx)(n.h3,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u521B\u5EFA HDFS storage vault\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'CREATE STORAGE VAULT IF NOT EXISTS hdfs_vault\n    PROPERTIES (\n    "type"="hdfs",\n    "fs.defaultFS"="hdfs://127.0.0.1:8020"\n    );\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u521B\u5EFA\u5FAE\u8F6F azure S3 storage vault\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'CREATE STORAGE VAULT IF NOT EXISTS s3_vault\n    PROPERTIES (\n    "type"="S3",\n    "s3.endpoint"="ak.blob.core.windows.net/",\n    "s3.access_key" = "ak",\n    "s3.secret_key" = "sk",\n    "s3.root.path" = "ssb_sf1_p2_s3",\n    "s3.bucket" = "doris-build-1308700295",\n    "provider" = "AZURE"\n    );\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u521B\u5EFA\u963F\u91CC\u4E91 OSS S3 storage vault\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'CREATE STORAGE VAULT IF NOT EXISTS s3_vault\n    PROPERTIES (\n    "type"="S3",\n    "s3.endpoint"="oss.aliyuncs.com",\n    "s3.access_key" = "ak",\n    "s3.secret_key" = "sk",\n    "s3.region" = "cn-hangzhou",\n    "s3.root.path" = "ssb_sf1_p2_s3",\n    "s3.bucket" = "doris-build-1308700295",\n    "provider" = "OSS",\n    "use_path_style" = "false"\n    );\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u521B\u5EFA\u817E\u8BAF\u4E91 COS S3 storage vault\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'CREATE STORAGE VAULT IF NOT EXISTS s3_vault\n    PROPERTIES (\n    "type"="S3",\n    "s3.endpoint"="cos.ap-guangzhou.myqcloud.com",\n    "s3.access_key" = "ak",\n    "s3.secret_key" = "sk",\n    "s3.region" = "ap-guangzhou",\n    "s3.root.path" = "ssb_sf1_p2_s3",\n    "s3.bucket" = "doris-build-1308700295",\n    "provider" = "COS",\n    "use_path_style" = "false"\n    );\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u521B\u5EFA\u534E\u4E3A\u4E91 OBS S3 storage vault\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'CREATE STORAGE VAULT IF NOT EXISTS s3_vault\n    PROPERTIES (\n    "type"="S3",\n    "s3.endpoint"="obs.cn-north-4.myhuaweicloud.com",\n    "s3.access_key" = "ak",\n    "s3.secret_key" = "sk",\n    "s3.region" = "cn-north-4",\n    "s3.root.path" = "ssb_sf1_p2_s3",\n    "s3.bucket" = "doris-build-1308700295",\n    "provider" = "OBS",\n    "use_path_style" = "false"\n    );\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u521B\u5EFA\u4E9A\u9A6C\u900A\u4E91 S3 storage vault\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'CREATE STORAGE VAULT IF NOT EXISTS s3_vault\n    PROPERTIES (\n    "type"="S3",\n    "s3.endpoint"="s3.us-east-1.amazonaws.com",\n    "s3.access_key" = "ak",\n    "s3.secret_key" = "sk",\n    "s3.region" = "us-east-1",\n    "s3.root.path" = "ssb_sf1_p2_s3",\n    "s3.bucket" = "doris-build-1308700295",\n    "provider" = "S3",\n    "use_path_style" = "false"\n    );\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u521B\u5EFA MinIO S3 storage vault\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:' CREATE STORAGE VAULT IF NOT EXISTS s3_vault\n     PROPERTIES (\n     "type"="S3",\n     "s3.endpoint"="127.0.0.1:9000",\n     "s3.access_key" = "ak",\n     "s3.secret_key" = "sk",\n     "s3.region" = "us-east-1",\n     "s3.root.path" = "ssb_sf1_p2_s3",\n     "s3.bucket" = "doris-build-1308700295",\n     "provider" = "S3",\n     "use_path_style" = "true"\n     );\n'})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\u5173\u952E\u8BCD",children:"\u5173\u952E\u8BCD"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"CREATE, STORAGE VAULT\n"})})]})}function o(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return r}});var s=t(667294);let l={},i=s.createContext(l);function r(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);