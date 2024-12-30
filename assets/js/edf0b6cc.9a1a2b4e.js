"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["948800"],{903684:function(e,n,s){s.r(n),s.d(n,{metadata:()=>a,contentTitle:()=>o,default:()=>h,assets:()=>d,toc:()=>l,frontMatter:()=>r});var a=JSON.parse('{"id":"lakehouse/datalake-analytics/paimon","title":"Paimon Catalog","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/lakehouse/datalake-analytics/paimon.md","sourceDirName":"lakehouse/datalake-analytics","slug":"/lakehouse/datalake-analytics/paimon","permalink":"/docs/2.0/lakehouse/datalake-analytics/paimon","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"Paimon Catalog","language":"en"},"sidebar":"docs","previous":{"title":"Iceberg Catalog","permalink":"/docs/2.0/lakehouse/datalake-analytics/iceberg"},"next":{"title":"Cloud Service Authentication","permalink":"/docs/2.0/lakehouse/datalake-analytics/cloud-auth"}}'),t=s("785893"),i=s("250065");let r={title:"Paimon Catalog",language:"en"},o=void 0,d={},l=[{value:"Instructions for use",id:"instructions-for-use",level:2},{value:"Create Catalog",id:"create-catalog",level:2},{value:"Creating a Catalog Based on FileSystem",id:"creating-a-catalog-based-on-filesystem",level:3},{value:"HDFS",id:"hdfs",level:4},{value:"MINIO",id:"minio",level:4},{value:"OBS",id:"obs",level:4},{value:"COS",id:"cos",level:4},{value:"OSS",id:"oss",level:4},{value:"Creating a Catalog Based on Hive Metastore",id:"creating-a-catalog-based-on-hive-metastore",level:3},{value:"Column Type Mapping",id:"column-type-mapping",level:2},{value:"FAQ",id:"faq",level:2}];function c(e){let n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"instructions-for-use",children:"Instructions for use"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["When data in hdfs,need to put core-site.xml, hdfs-site.xml and hive-site.xml in the conf directory of FE and BE. First read the hadoop configuration file in the conf directory, and then read the related to the environment variable ",(0,t.jsx)(n.code,{children:"HADOOP_CONF_DIR"})," configuration file."]}),"\n",(0,t.jsx)(n.li,{children:"The currently adapted version of the Paimon is 0.7."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"create-catalog",children:"Create Catalog"}),"\n",(0,t.jsx)(n.p,{children:"Paimon Catalog Currently supports two types of Metastore creation catalogs:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"filesystem(default),Store both metadata and data in the file system."}),"\n",(0,t.jsx)(n.li,{children:"hive metastore,It also stores metadata in Hive metastore. Users can access these tables directly from Hive."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"creating-a-catalog-based-on-filesystem",children:"Creating a Catalog Based on FileSystem"}),"\n",(0,t.jsx)(n.h4,{id:"hdfs",children:"HDFS"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'CREATE CATALOG `paimon_hdfs` PROPERTIES (\n    "type" = "paimon",\n    "warehouse" = "hdfs://HDFS8000871/user/paimon",\n    "dfs.nameservices" = "HDFS8000871",\n    "dfs.ha.namenodes.HDFS8000871" = "nn1,nn2",\n    "dfs.namenode.rpc-address.HDFS8000871.nn1" = "172.21.0.1:4007",\n    "dfs.namenode.rpc-address.HDFS8000871.nn2" = "172.21.0.2:4007",\n    "dfs.client.failover.proxy.provider.HDFS8000871" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider",\n    "hadoop.username" = "hadoop"\n);\n\n'})}),"\n",(0,t.jsx)(n.h4,{id:"minio",children:"MINIO"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Note that."}),"\n",(0,t.jsxs)(n.p,{children:["user need download ",(0,t.jsx)(n.a,{href:"https://repo.maven.apache.org/maven2/org/apache/paimon/paimon-s3/0.6.0-incubating/paimon-s3-0.6.0-incubating.jar",children:"paimon-s3-0.6.0-incubating.jar"})]}),"\n",(0,t.jsx)(n.p,{children:"Place it in directory ${DORIS_HOME}/be/lib/java_extensions/preload-extensions and restart be"}),"\n",(0,t.jsxs)(n.p,{children:["Starting from version 2.0.2, this file can be placed in BE's ",(0,t.jsx)(n.code,{children:"custom_lib/"})," directory (if it does not exist, just create it manually) to prevent the file from being lost due to the replacement of the lib directory when upgrading the cluster."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'CREATE CATALOG `paimon_s3` PROPERTIES (\n    "type" = "paimon",\n    "warehouse" = "s3://bucket_name/paimons3",\n    "s3.endpoint" = "http://<ip>:<port>",\n    "s3.access_key" = "ak",\n    "s3.secret_key" = "sk"\n);\n\n'})}),"\n",(0,t.jsx)(n.h4,{id:"obs",children:"OBS"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Note that."}),"\n",(0,t.jsxs)(n.p,{children:["user need download ",(0,t.jsx)(n.a,{href:"https://repo.maven.apache.org/maven2/org/apache/paimon/paimon-s3/0.6.0-incubating/paimon-s3-0.6.0-incubating.jar",children:"paimon-s3-0.6.0-incubating.jar"})]}),"\n",(0,t.jsxs)(n.p,{children:["Place it in directory ",(0,t.jsx)(n.code,{children:"${DORIS_HOME}/be/lib/java_extensions/preload-extensions"})," and restart be"]}),"\n",(0,t.jsxs)(n.p,{children:["Starting from version 2.0.2, this file can be placed in BE's ",(0,t.jsx)(n.code,{children:"custom_lib/"})," directory (if it does not exist, just create it manually) to prevent the file from being lost due to the replacement of the lib directory when upgrading the cluster."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'CREATE CATALOG `paimon_obs` PROPERTIES (\n    "type" = "paimon",\n    "warehouse" = "obs://bucket_name/paimon",\n    "obs.endpoint"="obs.cn-north-4.myhuaweicloud.com",\n    "obs.access_key"="ak",\n    "obs.secret_key"="sk"\n);\n'})}),"\n",(0,t.jsx)(n.h4,{id:"cos",children:"COS"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'CREATE CATALOG `paimon_cos` PROPERTIES (\n    "type" = "paimon",\n    "warehouse" = "cosn://paimon-1308700295/paimoncos",\n    "cos.endpoint" = "cos.ap-beijing.myqcloud.com",\n    "cos.access_key" = "ak",\n    "cos.secret_key" = "sk"\n);\n'})}),"\n",(0,t.jsx)(n.h4,{id:"oss",children:"OSS"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'CREATE CATALOG `paimon_oss` PROPERTIES (\n    "type" = "paimon",\n    "warehouse" = "oss://paimon-zd/paimonoss",\n    "oss.endpoint" = "oss-cn-beijing.aliyuncs.com",\n    "oss.access_key" = "ak",\n    "oss.secret_key" = "sk"\n);\n\n'})}),"\n",(0,t.jsx)(n.h3,{id:"creating-a-catalog-based-on-hive-metastore",children:"Creating a Catalog Based on Hive Metastore"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'CREATE CATALOG `paimon_hms` PROPERTIES (\n    "type" = "paimon",\n    "paimon.catalog.type" = "hms",\n    "warehouse" = "hdfs://HDFS8000871/user/zhangdong/paimon2",\n    "hive.metastore.uris" = "thrift://172.21.0.44:7004",\n    "dfs.nameservices" = "HDFS8000871",\n    "dfs.ha.namenodes.HDFS8000871" = "nn1,nn2",\n    "dfs.namenode.rpc-address.HDFS8000871.nn1" = "172.21.0.1:4007",\n    "dfs.namenode.rpc-address.HDFS8000871.nn2" = "172.21.0.2:4007",\n    "dfs.client.failover.proxy.provider.HDFS8000871" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider",\n    "hadoop.username" = "hadoop"\n);\n\n'})}),"\n",(0,t.jsx)(n.h2,{id:"column-type-mapping",children:"Column Type Mapping"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Paimon Data Type"}),(0,t.jsx)(n.th,{children:"Doris Data Type"}),(0,t.jsx)(n.th,{children:"Comment"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"BooleanType"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"TinyIntType"}),(0,t.jsx)(n.td,{children:"TinyInt"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"SmallIntType"}),(0,t.jsx)(n.td,{children:"SmallInt"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"IntType"}),(0,t.jsx)(n.td,{children:"Int"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"FloatType"}),(0,t.jsx)(n.td,{children:"Float"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"BigIntType"}),(0,t.jsx)(n.td,{children:"BigInt"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"DoubleType"}),(0,t.jsx)(n.td,{children:"Double"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"VarCharType"}),(0,t.jsx)(n.td,{children:"VarChar"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"CharType"}),(0,t.jsx)(n.td,{children:"Char"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"VarBinaryType, BinaryType"}),(0,t.jsx)(n.td,{children:"Binary"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"DecimalType(precision, scale)"}),(0,t.jsx)(n.td,{children:"Decimal(precision, scale)"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"TimestampType,LocalZonedTimestampType"}),(0,t.jsx)(n.td,{children:"DateTime"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"DateType"}),(0,t.jsx)(n.td,{children:"Date"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ArrayType"}),(0,t.jsx)(n.td,{children:"Array"}),(0,t.jsx)(n.td,{children:"Support Array nesting"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"MapType"}),(0,t.jsx)(n.td,{children:"Map"}),(0,t.jsx)(n.td,{children:"Support Map nesting"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"RowType"}),(0,t.jsx)(n.td,{children:"Struct"}),(0,t.jsx)(n.td,{children:"Support Struct nesting (since 2.0.10 & 2.1.3)"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"faq",children:"FAQ"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Kerberos"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Make sure principal and keytab are correct."}),"\n",(0,t.jsxs)(n.li,{children:["You need to start a scheduled task (such as crontab) on the BE node, and execute the ",(0,t.jsx)(n.code,{children:"kinit -kt your_principal your_keytab"})," command every certain time (such as 12 hours)."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Unknown type value: UNSUPPORTED"}),"\n",(0,t.jsxs)(n.p,{children:["This is a compatible issue exist in 2.0.2 with Paimon 0.5, you need to upgrade to 2.0.3 or higher to solve this problem. Or ",(0,t.jsx)(n.a,{href:"https://github.com/apache/doris/pull/24985",children:"patch"})," yourself."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'When accessing object storage (OSS, S3, etc.), encounter "file system does not support".'}),"\n",(0,t.jsxs)(n.p,{children:["In versions before 2.0.5 (inclusive), users need to manually download the following jar package and place it in the ",(0,t.jsx)(n.code,{children:"${DORIS_HOME}/be/lib/java_extensions/preload-extensions"})," directory, and restart BE."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["OSS: ",(0,t.jsx)(n.a,{href:"https://repo.maven.apache.org/maven2/org/apache/paimon/paimon-oss/0.6.0-incubating/paimon-oss-0.6.0-incubating.jar",children:"paimon-oss-0.6.0-incubating.jar"})]}),"\n",(0,t.jsxs)(n.li,{children:["Other Object Storage: ",(0,t.jsx)(n.a,{href:"https://repo.maven.apache.org/maven2/org/apache/paimon/paimon-s3/0.6.0-incubating/paimon-s3-0.6.0-incubating.jar",children:"paimon-s3-0.6.0-incubating.jar"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"No need to download these jars since 2.0.6."}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return r}});var a=s(667294);let t={},i=a.createContext(t);function r(e){let n=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);