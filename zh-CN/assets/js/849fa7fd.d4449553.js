"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["839087"],{50771:function(e,n,s){s.r(n),s.d(n,{metadata:()=>l,contentTitle:()=>c,default:()=>o,assets:()=>a,toc:()=>t,frontMatter:()=>r});var l=JSON.parse('{"id":"lakehouse/database/jdbc","title":"JDBC Catalog","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/lakehouse/database/jdbc.md","sourceDirName":"lakehouse/database","slug":"/lakehouse/database/jdbc","permalink":"/zh-CN/docs/2.0/lakehouse/database/jdbc","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"JDBC Catalog","language":"zh-CN"},"sidebar":"docs","previous":{"title":"AWS \u8BA4\u8BC1\u63A5\u5165","permalink":"/zh-CN/docs/2.0/lakehouse/datalake-analytics/cloud-auth"},"next":{"title":"MySQL","permalink":"/zh-CN/docs/2.0/lakehouse/database/mysql"}}'),d=s("785893"),i=s("250065");let r={title:"JDBC Catalog",language:"zh-CN"},c=void 0,a={},t=[{value:"\u652F\u6301\u7684\u6570\u636E\u5E93",id:"\u652F\u6301\u7684\u6570\u636E\u5E93",level:2},{value:"\u914D\u7F6E",id:"\u914D\u7F6E",level:2},{value:"\u57FA\u672C\u5C5E\u6027",id:"\u57FA\u672C\u5C5E\u6027",level:3},{value:"\u53EF\u9009\u5C5E\u6027",id:"\u53EF\u9009\u5C5E\u6027",level:3},{value:"\u8FDE\u63A5\u6C60\u5C5E\u6027",id:"\u8FDE\u63A5\u6C60\u5C5E\u6027",level:3},{value:"\u5C5E\u6027\u987B\u77E5",id:"\u5C5E\u6027\u987B\u77E5",level:2},{value:"\u9A71\u52A8\u5305\u8DEF\u5F84\u4E0E\u5B89\u5168\u6027",id:"\u9A71\u52A8\u5305\u8DEF\u5F84\u4E0E\u5B89\u5168\u6027",level:3},{value:"\u5C0F\u5199\u540D\u79F0\u540C\u6B65",id:"\u5C0F\u5199\u540D\u79F0\u540C\u6B65",level:3},{value:"\u6307\u5B9A\u540C\u6B65\u6570\u636E\u5E93",id:"\u6307\u5B9A\u540C\u6B65\u6570\u636E\u5E93",level:3},{value:"\u8FDE\u63A5\u6C60\u914D\u7F6E",id:"\u8FDE\u63A5\u6C60\u914D\u7F6E",level:3},{value:"Insert \u4E8B\u52A1",id:"insert-\u4E8B\u52A1",level:3},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u8FDE\u63A5\u6C60\u95EE\u9898\u6392\u67E5",id:"\u8FDE\u63A5\u6C60\u95EE\u9898\u6392\u67E5",level:2},{value:"Druid \u8FDE\u63A5\u6C60\u7248\u672C",id:"druid-\u8FDE\u63A5\u6C60\u7248\u672C",level:3},{value:"HikariCP \u8FDE\u63A5\u6C60\u7248\u672C",id:"hikaricp-\u8FDE\u63A5\u6C60\u7248\u672C",level:3},{value:"\u53EF\u80FD\u7684\u539F\u56E0\uFF1A",id:"\u53EF\u80FD\u7684\u539F\u56E0",level:4},{value:"\u89E3\u51B3\u65B9\u6848\uFF1A",id:"\u89E3\u51B3\u65B9\u6848",level:4}];function h(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.p,{children:"Doris JDBC Catalog \u652F\u6301\u901A\u8FC7\u6807\u51C6 JDBC \u63A5\u53E3\u8FDE\u63A5\u4E0D\u540C\u652F\u6301 JDBC \u534F\u8BAE\u7684\u6570\u636E\u5E93\u3002\u672C\u6587\u6863\u4ECB\u7ECD JDBC Catalog \u7684\u901A\u7528\u914D\u7F6E\u548C\u4F7F\u7528\u65B9\u6CD5\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"\u652F\u6301\u7684\u6570\u636E\u5E93",children:"\u652F\u6301\u7684\u6570\u636E\u5E93"}),"\n",(0,d.jsx)(n.p,{children:"Doris JDBC Catalog \u652F\u6301\u8FDE\u63A5\u4EE5\u4E0B\u6570\u636E\u5E93\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u6570\u636E\u5E93"}),(0,d.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"/zh-CN/docs/2.0/lakehouse/database/mysql",children:"MySQL"})}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"/zh-CN/docs/2.0/lakehouse/database/postgresql",children:"PostgreSQL"})}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"/zh-CN/docs/2.0/lakehouse/database/oracle",children:"Oracle"})}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"/zh-CN/docs/2.0/lakehouse/database/sqlserver",children:"SQL Server"})}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"/zh-CN/docs/2.0/lakehouse/database/clickhouse",children:"ClickHouse"})}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"/zh-CN/docs/2.0/lakehouse/database/sap-hana",children:"SAP HANA"})}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"/zh-CN/docs/2.0/lakehouse/database/oceanbase",children:"OceanBase"})}),(0,d.jsx)(n.td,{})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"\u914D\u7F6E",children:"\u914D\u7F6E"}),"\n",(0,d.jsx)(n.h3,{id:"\u57FA\u672C\u5C5E\u6027",children:"\u57FA\u672C\u5C5E\u6027"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u53C2\u6570"}),(0,d.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"type"})}),(0,d.jsxs)(n.td,{children:["\u56FA\u5B9A\u4E3A ",(0,d.jsx)(n.code,{children:"jdbc"})]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"user"})}),(0,d.jsx)(n.td,{children:"\u6570\u636E\u6E90\u7528\u6237\u540D"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"password"})}),(0,d.jsx)(n.td,{children:"\u6570\u636E\u6E90\u5BC6\u7801"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"jdbc_url"})}),(0,d.jsx)(n.td,{children:"\u6570\u636E\u6E90\u8FDE\u63A5 URL"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"driver_url"})}),(0,d.jsx)(n.td,{children:"\u6570\u636E\u6E90 JDBC \u9A71\u52A8\u7A0B\u5E8F\u7684\u8DEF\u5F84"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"driver_class"})}),(0,d.jsx)(n.td,{children:"\u6570\u636E\u6E90 JDBC \u9A71\u52A8\u7A0B\u5E8F\u7684\u7C7B\u540D"})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"\u53EF\u9009\u5C5E\u6027",children:"\u53EF\u9009\u5C5E\u6027"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u53C2\u6570"}),(0,d.jsx)(n.th,{children:"\u9ED8\u8BA4\u503C"}),(0,d.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"lower_case_table_names"})}),(0,d.jsx)(n.td,{children:'"false"'}),(0,d.jsx)(n.td,{children:"\u662F\u5426\u4EE5\u5C0F\u5199\u7684\u5F62\u5F0F\u540C\u6B65 jdbc \u5916\u90E8\u6570\u636E\u6E90\u7684\u5E93\u540D\u548C\u8868\u540D"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"only_specified_database"})}),(0,d.jsx)(n.td,{children:'"false"'}),(0,d.jsx)(n.td,{children:"\u662F\u5426\u53EA\u540C\u6B65 JDBC URL \u4E2D\u6307\u5B9A\u7684\u6570\u636E\u6E90\u7684 Database\uFF08\u6B64\u5904\u7684 Database \u4E3A\u6620\u5C04\u5230 Doris \u7684 Database \u5C42\u7EA7\uFF09"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"include_database_list"})}),(0,d.jsx)(n.td,{children:'""'}),(0,d.jsxs)(n.td,{children:["\u5F53 ",(0,d.jsx)(n.code,{children:"only_specified_database=true"})," \u65F6\uFF0C\u6307\u5B9A\u540C\u6B65\u591A\u4E2A Database\uFF0C\u4EE5','\u5206\u9694\u3002Database \u540D\u79F0\u662F\u5927\u5C0F\u5199\u654F\u611F\u7684\u3002"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"exclude_database_list"})}),(0,d.jsx)(n.td,{children:'""'}),(0,d.jsxs)(n.td,{children:["\u5F53 ",(0,d.jsx)(n.code,{children:"only_specified_database=true"})," \u65F6\uFF0C\u6307\u5B9A\u4E0D\u9700\u8981\u540C\u6B65\u7684\u591A\u4E2A Database\uFF0C\u4EE5','\u5206\u5272\u3002Database \u540D\u79F0\u662F\u5927\u5C0F\u5199\u654F\u611F\u7684\u3002"]})]})]})]}),"\n",(0,d.jsx)(n.h3,{id:"\u8FDE\u63A5\u6C60\u5C5E\u6027",children:"\u8FDE\u63A5\u6C60\u5C5E\u6027"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"\u53C2\u6570"}),(0,d.jsx)(n.th,{children:"\u9ED8\u8BA4\u503C"}),(0,d.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"connection_pool_min_size"})}),(0,d.jsx)(n.td,{children:"1"}),(0,d.jsx)(n.td,{children:"\u5B9A\u4E49\u8FDE\u63A5\u6C60\u7684\u6700\u5C0F\u8FDE\u63A5\u6570\uFF0C\u7528\u4E8E\u521D\u59CB\u5316\u8FDE\u63A5\u6C60\u5E76\u4FDD\u8BC1\u5728\u542F\u7528\u4FDD\u6D3B\u673A\u5236\u65F6\u81F3\u5C11\u6709\u8BE5\u6570\u91CF\u7684\u8FDE\u63A5\u5904\u4E8E\u6D3B\u8DC3\u72B6\u6001\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"connection_pool_max_size"})}),(0,d.jsx)(n.td,{children:"30"}),(0,d.jsx)(n.td,{children:"\u5B9A\u4E49\u8FDE\u63A5\u6C60\u7684\u6700\u5927\u8FDE\u63A5\u6570\uFF0C\u6BCF\u4E2A Catalog \u5BF9\u5E94\u7684\u6BCF\u4E2A FE \u6216 BE \u8282\u70B9\u6700\u591A\u53EF\u6301\u6709\u6B64\u6570\u91CF\u7684\u8FDE\u63A5\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"connection_pool_max_wait_time"})}),(0,d.jsx)(n.td,{children:"5000"}),(0,d.jsx)(n.td,{children:"\u5982\u679C\u8FDE\u63A5\u6C60\u4E2D\u6CA1\u6709\u53EF\u7528\u8FDE\u63A5\uFF0C\u5B9A\u4E49\u5BA2\u6237\u7AEF\u7B49\u5F85\u8FDE\u63A5\u7684\u6700\u5927\u6BEB\u79D2\u6570\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"connection_pool_max_life_time"})}),(0,d.jsx)(n.td,{children:"1800000"}),(0,d.jsx)(n.td,{children:"\u8BBE\u7F6E\u8FDE\u63A5\u5728\u8FDE\u63A5\u6C60\u4E2D\u4FDD\u6301\u6D3B\u8DC3\u7684\u6700\u5927\u65F6\u957F\uFF08\u6BEB\u79D2\uFF09\u3002\u8D85\u65F6\u7684\u8FDE\u63A5\u5C06\u88AB\u56DE\u6536\u3002\u540C\u65F6\uFF0C\u6B64\u503C\u7684\u4E00\u534A\u5C06\u4F5C\u4E3A\u8FDE\u63A5\u6C60\u7684\u6700\u5C0F\u9010\u51FA\u7A7A\u95F2\u65F6\u95F4\uFF0C\u8FBE\u5230\u8BE5\u65F6\u95F4\u7684\u8FDE\u63A5\u5C06\u6210\u4E3A\u9010\u51FA\u5019\u9009\u5BF9\u8C61\u3002"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"connection_pool_keep_alive"})}),(0,d.jsx)(n.td,{children:"false"}),(0,d.jsx)(n.td,{children:"\u4EC5\u5728 BE \u8282\u70B9\u4E0A\u6709\u6548\uFF0C\u7528\u4E8E\u51B3\u5B9A\u662F\u5426\u4FDD\u6301\u8FBE\u5230\u6700\u5C0F\u9010\u51FA\u7A7A\u95F2\u65F6\u95F4\u4F46\u672A\u5230\u6700\u5927\u751F\u547D\u5468\u671F\u7684\u8FDE\u63A5\u6D3B\u8DC3\u3002\u9ED8\u8BA4\u5173\u95ED\uFF0C\u4EE5\u51CF\u5C11\u4E0D\u5FC5\u8981\u7684\u8D44\u6E90\u4F7F\u7528\u3002"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"\u5C5E\u6027\u987B\u77E5",children:"\u5C5E\u6027\u987B\u77E5"}),"\n",(0,d.jsx)(n.h3,{id:"\u9A71\u52A8\u5305\u8DEF\u5F84\u4E0E\u5B89\u5168\u6027",children:"\u9A71\u52A8\u5305\u8DEF\u5F84\u4E0E\u5B89\u5168\u6027"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"driver_url"})," \u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u4E09\u79CD\u65B9\u5F0F\u6307\u5B9A\uFF1A"]}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\u6587\u4EF6\u540D\u3002\u5982 ",(0,d.jsx)(n.code,{children:"mysql-connector-j-8.3.0.jar"}),"\u3002\u9700\u5C06 Jar \u5305\u9884\u5148\u5B58\u653E\u5728 FE \u548C BE \u90E8\u7F72\u76EE\u5F55\u4E0B\u7684 ",(0,d.jsx)(n.code,{children:"jdbc_drivers/"}),"\n\u76EE\u5F55\u4E0B\u3002\u7CFB\u7EDF\u4F1A\u81EA\u52A8\u5728\u8FD9\u4E2A\u76EE\u5F55\u4E0B\u5BFB\u627E\u3002\u8BE5\u76EE\u5F55\u7684\u4F4D\u7F6E\uFF0C\u4E5F\u53EF\u4EE5\u7531 fe.conf \u548C be.conf \u4E2D\u7684 ",(0,d.jsx)(n.code,{children:"jdbc_drivers_dir"})," \u914D\u7F6E\u4FEE\u6539\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\u672C\u5730\u7EDD\u5BF9\u8DEF\u5F84\u3002\u5982 ",(0,d.jsx)(n.code,{children:"file:///path/to/mysql-connector-j-8.3.0.jar"}),"\u3002\u9700\u5C06 Jar \u5305\u9884\u5148\u5B58\u653E\u5728\u6240\u6709 FE/BE \u8282\u70B9\u6307\u5B9A\u7684\u8DEF\u5F84\u4E0B\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["Http \u5730\u5740\u3002\u5982\uFF1A",(0,d.jsx)(n.a,{href:"http://repo1.maven.org/maven2/com/mysql/mysql-connector-j/8.3.0/mysql-connector-j-8.3.0.jar",children:"http://repo1.maven.org/maven2/com/mysql/mysql-connector-j/8.3.0/mysql-connector-j-8.3.0.jar"})," \u7CFB\u7EDF\u4F1A\u4ECE\u8FD9\u4E2A Http \u5730\u5740\u4E0B\u8F7D Driver \u6587\u4EF6\u3002\u4EC5\u652F\u6301\u65E0\u8BA4\u8BC1\u7684 Http \u670D\u52A1\u3002"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u9A71\u52A8\u5305\u5B89\u5168\u6027"})}),"\n",(0,d.jsx)(n.p,{children:"\u4E3A\u4E86\u9632\u6B62\u5728\u521B\u5EFA Catalog \u65F6\u4F7F\u7528\u4E86\u672A\u5141\u8BB8\u8DEF\u5F84\u7684 Driver Jar \u5305\uFF0CDoris \u4F1A\u5BF9 Jar \u5305\u8FDB\u884C\u8DEF\u5F84\u7BA1\u7406\u548C\u6821\u9A8C\u548C\u68C0\u67E5\u3002"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\u9488\u5BF9\u4E0A\u8FF0\u65B9\u5F0F 1\uFF0CDoris \u9ED8\u8BA4\u7528\u6237\u914D\u7F6E\u7684 ",(0,d.jsx)(n.code,{children:"jdbc_drivers_dir"})," \u548C\u5176\u76EE\u5F55\u4E0B\u7684\u6240\u6709 Jar \u5305\u90FD\u662F\u5B89\u5168\u7684\uFF0C\u4E0D\u4F1A\u5BF9\u5176\u8FDB\u884C\u8DEF\u5F84\u68C0\u67E5\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u9488\u5BF9\u4E0A\u8FF0\u65B9\u5F0F 2\u30013\uFF0CDoris \u4F1A\u5BF9 Jar \u5305\u7684\u6765\u6E90\u8FDB\u884C\u68C0\u67E5\uFF0C\u68C0\u67E5\u89C4\u5219\u5982\u4E0B\uFF1A"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u901A\u8FC7 FE \u914D\u7F6E\u9879 ",(0,d.jsx)(n.code,{children:"jdbc_driver_secure_path"})," \u6765\u63A7\u5236\u5141\u8BB8\u7684\u9A71\u52A8\u5305\u8DEF\u5F84\uFF0C\u8BE5\u914D\u7F6E\u9879\u53EF\u914D\u7F6E\u591A\u4E2A\u8DEF\u5F84\uFF0C\u4EE5\u5206\u53F7\u5206\u9694\u3002\u5F53\u914D\u7F6E\u4E86\u8BE5\u9879\u65F6\uFF0CDoris\n\u4F1A\u68C0\u67E5 Catalog properties \u4E2D driver_url \u7684\u8DEF\u5F84\u662F\u7684\u90E8\u5206\u524D\u7F00\u662F\u5426\u5728 ",(0,d.jsx)(n.code,{children:"jdbc_driver_secure_path"})," \u4E2D\uFF0C\u5982\u679C\u4E0D\u5728\u5176\u4E2D\uFF0C\u5219\u4F1A\u62D2\u7EDD\u521B\u5EFA\nCatalog\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u6B64\u53C2\u6570\u9ED8\u8BA4\u4E3A ",(0,d.jsx)(n.code,{children:"*"})," \uFF0C\u8868\u793A\u5141\u8BB8\u6240\u6709\u8DEF\u5F84\u7684 Jar \u5305\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u5982\u679C\u914D\u7F6E ",(0,d.jsx)(n.code,{children:"jdbc_driver_secure_path"})," \u4E3A\u7A7A\uFF0C\u4E5F\u8868\u793A\u5141\u8BB8\u6240\u6709\u8DEF\u5F84\u7684 Jar \u5305\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.admonition,{title:"\u5907\u6CE8",type:"info",children:[(0,d.jsxs)(n.p,{children:["\u5982\u914D\u7F6E ",(0,d.jsx)(n.code,{children:'jdbc_driver_secure_path = "file:///path/to/jdbc_drivers;http://path/to/jdbc_drivers"'})," \uFF1A"]}),(0,d.jsxs)(n.p,{children:["\u5219\u53EA\u5141\u8BB8\u4EE5 ",(0,d.jsx)(n.code,{children:"file:///path/to/jdbc_drivers"})," \u6216 ",(0,d.jsx)(n.code,{children:"http://path/to/jdbc_drivers"})," \u5F00\u5934\u7684\u9A71\u52A8\u5305\u8DEF\u5F84\u3002"]})]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\u5728\u521B\u5EFA Catalog \u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",(0,d.jsx)(n.code,{children:"checksum"})," \u53C2\u6570\u6765\u6307\u5B9A\u9A71\u52A8\u5305\u7684\u6821\u9A8C\u548C\uFF0CDoris \u4F1A\u5728\u52A0\u8F7D\u9A71\u52A8\u5305\u540E\uFF0C\u5BF9\u9A71\u52A8\u5305\u8FDB\u884C\u6821\u9A8C\uFF0C\u5982\u679C\u6821\u9A8C\u5931\u8D25\uFF0C\u5219\u4F1A\u62D2\u7EDD\u521B\u5EFA\nCatalog\u3002"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.admonition,{title:"\u5907\u6CE8",type:"info",children:(0,d.jsx)(n.p,{children:"\u4E0A\u8FF0\u7684\u6821\u9A8C\u53EA\u4F1A\u5728\u521B\u5EFA Catalog \u65F6\u8FDB\u884C\uFF0C\u5BF9\u4E8E\u5DF2\u7ECF\u521B\u5EFA\u7684 Catalog\uFF0C\u4E0D\u4F1A\u518D\u6B21\u8FDB\u884C\u6821\u9A8C\u3002"})}),"\n",(0,d.jsx)(n.h3,{id:"\u5C0F\u5199\u540D\u79F0\u540C\u6B65",children:"\u5C0F\u5199\u540D\u79F0\u540C\u6B65"}),"\n",(0,d.jsxs)(n.p,{children:["\u5F53 ",(0,d.jsx)(n.code,{children:"lower_case_table_names"})," \u8BBE\u7F6E\u4E3A ",(0,d.jsx)(n.code,{children:"true"})," \u65F6\uFF0CDoris \u901A\u8FC7\u7EF4\u62A4\u5C0F\u5199\u540D\u79F0\u5230\u8FDC\u7A0B\u7CFB\u7EDF\u4E2D\u5B9E\u9645\u540D\u79F0\u7684\u6620\u5C04\uFF0C\u80FD\u591F\u67E5\u8BE2\u975E\u5C0F\u5199\u7684\u6570\u636E\u5E93\u548C\u8868"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"\u6CE8\u610F\uFF1A"})}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u5728 Doris 2.0.3 \u4E4B\u524D\u7684\u7248\u672C\uFF0C\u4EC5\u5BF9 Oracle \u6570\u636E\u5E93\u6709\u6548\uFF0C\u5728\u67E5\u8BE2\u65F6\uFF0C\u4F1A\u5C06\u6240\u6709\u7684\u5E93\u540D\u548C\u8868\u540D\u8F6C\u6362\u4E3A\u5927\u5199\uFF0C\u518D\u53BB\u67E5\u8BE2 Oracle\uFF0C\u4F8B\u5982\uFF1A"}),"\n",(0,d.jsxs)(n.p,{children:["Oracle \u5728 TEST \u7A7A\u95F4\u4E0B\u6709 TEST \u8868\uFF0CDoris \u521B\u5EFA Catalog \u65F6\u8BBE\u7F6E ",(0,d.jsx)(n.code,{children:"lower_case_table_names"})," \u4E3A ",(0,d.jsx)(n.code,{children:"true"}),"\uFF0C\u5219 Doris \u53EF\u4EE5\u901A\u8FC7 ",(0,d.jsx)(n.code,{children:"select * from oracle_catalog.test.test"})," \u67E5\u8BE2\u5230 TEST \u8868\uFF0CDoris \u4F1A\u81EA\u52A8\u5C06 test.test \u683C\u5F0F\u5316\u6210 TEST.TEST \u4E0B\u53D1\u5230 Oracle\uFF0C\u9700\u8981\u6CE8\u610F\u7684\u662F\u8FD9\u662F\u4E2A\u9ED8\u8BA4\u884C\u4E3A\uFF0C\u4E5F\u610F\u5473\u7740\u4E0D\u80FD\u67E5\u8BE2 Oracle \u4E2D\u5C0F\u5199\u7684\u8868\u540D\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u5BF9\u4E8E\u5176\u4ED6\u6570\u636E\u5E93\uFF0C\u4ECD\u9700\u8981\u5728\u67E5\u8BE2\u65F6\u6307\u5B9A\u771F\u5B9E\u7684\u5E93\u540D\u548C\u8868\u540D\u3002"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\u5728 Doris 2.0.3 \u53CA\u4E4B\u540E\u7684 2.0.x \u7248\u672C\uFF0C\u5BF9\u6240\u6709\u7684\u6570\u636E\u5E93\u90FD\u6709\u6548\uFF0C\u5728\u67E5\u8BE2\u65F6\uFF0C\u4F1A\u5C06\u6240\u6709\u7684\u5E93\u540D\u548C\u8868\u540D\u8F6C\u6362\u4E3A\u771F\u5B9E\u7684\u540D\u79F0\uFF0C\u518D\u53BB\u67E5\u8BE2\uFF0C\u5982\u679C\u662F\u4ECE\u8001\u7248\u672C\u5347\u7EA7\u5230 2.0.3\uFF0C\u9700\u8981 ",(0,d.jsx)(n.code,{children:"Refresh <catalog_name>"})," \u624D\u80FD\u751F\u6548\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u4F46\u662F\uFF0C\u5982\u679C\u6570\u636E\u5E93\u6216\u8005\u8868\u540D\u53EA\u6709\u5927\u5C0F\u5199\u4E0D\u540C\uFF0C\u4F8B\u5982 ",(0,d.jsx)(n.code,{children:"Doris"})," \u548C ",(0,d.jsx)(n.code,{children:"doris"}),"\uFF0C\u5219 Doris \u7531\u4E8E\u6B67\u4E49\u800C\u65E0\u6CD5\u67E5\u8BE2\u5B83\u4EEC\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\u5F53 FE \u53C2\u6570\u7684 ",(0,d.jsx)(n.code,{children:"lower_case_table_names"})," \u8BBE\u7F6E\u4E3A ",(0,d.jsx)(n.code,{children:"1"})," \u6216 ",(0,d.jsx)(n.code,{children:"2"})," \u65F6\uFF0CJDBC Catalog \u7684 ",(0,d.jsx)(n.code,{children:"lower_case_table_names"})," \u53C2\u6570\u5FC5\u987B\u8BBE\u7F6E\u4E3A ",(0,d.jsx)(n.code,{children:"true"}),"\u3002\u5982\u679C FE \u53C2\u6570\u7684 ",(0,d.jsx)(n.code,{children:"lower_case_table_names"})," \u8BBE\u7F6E\u4E3A ",(0,d.jsx)(n.code,{children:"0"}),"\uFF0C\u5219 JDBC Catalog \u7684\u53C2\u6570\u53EF\u4EE5\u4E3A ",(0,d.jsx)(n.code,{children:"true"})," \u6216 ",(0,d.jsx)(n.code,{children:"false"}),"\uFF0C\u9ED8\u8BA4\u4E3A ",(0,d.jsx)(n.code,{children:"false"}),"\u3002\u8FD9\u786E\u4FDD\u4E86 Doris \u5728\u5904\u7406\u5185\u90E8\u548C\u5916\u90E8\u8868\u914D\u7F6E\u65F6\u7684\u4E00\u81F4\u6027\u548C\u53EF\u9884\u6D4B\u6027\u3002"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"\u6307\u5B9A\u540C\u6B65\u6570\u636E\u5E93",children:"\u6307\u5B9A\u540C\u6B65\u6570\u636E\u5E93"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"only_specified_database"}),":\n\u662F\u5426\u53EA\u540C\u6B65 JDBC URL \u4E2D\u6307\u5B9A\u7684\u6570\u636E\u6E90\u7684 Database\u3002\u9ED8\u8BA4\u503C\u4E3A ",(0,d.jsx)(n.code,{children:"false"}),"\uFF0C\u8868\u793A\u540C\u6B65 JDBC URL \u4E2D\u6240\u6709\u7684 Database\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"include_database_list"}),":\n\u4EC5\u5728",(0,d.jsx)(n.code,{children:"only_specified_database=true"}),"\u65F6\u751F\u6548\uFF0C\u6307\u5B9A\u9700\u8981\u540C\u6B65\u7684 PostgreSQL \u7684 Schema\uFF0C\u4EE5','\u5206\u9694\u3002Schema \u540D\u79F0\u662F\u5927\u5C0F\u5199\u654F\u611F\u7684\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"exclude_database_list"}),":\n\u4EC5\u5728",(0,d.jsx)(n.code,{children:"only_specified_database=true"}),"\u65F6\u751F\u6548\uFF0C\u6307\u5B9A\u4E0D\u9700\u8981\u540C\u6B65\u7684 PostgreSQL \u7684 Schema\uFF0C\u4EE5','\u5206\u9694\u3002Schema \u540D\u79F0\u662F\u5927\u5C0F\u5199\u654F\u611F\u7684\u3002"]}),"\n",(0,d.jsx)(n.admonition,{title:"\u5907\u6CE8",type:"info",children:(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u4E0A\u8FF0\u4E09\u4E2A\u53C2\u6570\u4E2D\u63D0\u5230\u7684 Database \u662F\u6307 Doris \u4E2D\u7684 Database \u5C42\u7EA7\uFF0C\u800C\u4E0D\u662F\u5916\u90E8\u6570\u636E\u6E90\u7684 Database \u5C42\u7EA7\uFF0C\u5177\u4F53\u7684\u6620\u5C04\u5173\u7CFB\u53EF\u4EE5\u53C2\u8003\u5404\u4E2A\u6570\u636E\u6E90\u6587\u6863\u3002"}),"\n",(0,d.jsxs)(n.li,{children:["\u5F53 ",(0,d.jsx)(n.code,{children:"include_database_list"})," \u548C ",(0,d.jsx)(n.code,{children:"exclude_database_list"})," \u6709\u91CD\u5408\u7684 database \u914D\u7F6E\u65F6\uFF0C",(0,d.jsx)(n.code,{children:"exclude_database_list"}),"\u4F1A\u4F18\u5148\u751F\u6548\u3002"]}),"\n"]})}),"\n",(0,d.jsx)(n.h3,{id:"\u8FDE\u63A5\u6C60\u914D\u7F6E",children:"\u8FDE\u63A5\u6C60\u914D\u7F6E"}),"\n",(0,d.jsx)(n.p,{children:"\u5728 Doris \u4E2D\uFF0C\u6BCF\u4E2A FE \u548C BE \u8282\u70B9\u90FD\u4F1A\u7EF4\u62A4\u4E00\u4E2A\u8FDE\u63A5\u6C60\uFF0C\u8FD9\u6837\u53EF\u4EE5\u907F\u514D\u9891\u7E41\u5730\u6253\u5F00\u548C\u5173\u95ED\u5355\u72EC\u7684\u6570\u636E\u6E90\u8FDE\u63A5\u3002\u8FDE\u63A5\u6C60\u4E2D\u7684\u6BCF\u4E2A\u8FDE\u63A5\u90FD\u53EF\u4EE5\u7528\u6765\u4E0E\u6570\u636E\u6E90\u5EFA\u7ACB\u8FDE\u63A5\u5E76\u6267\u884C\u67E5\u8BE2\u3002\u4EFB\u52A1\u5B8C\u6210\u540E\uFF0C\u8FD9\u4E9B\u8FDE\u63A5\u4F1A\u88AB\u5F52\u8FD8\u5230\u6C60\u4E2D\u4EE5\u4FBF\u91CD\u590D\u4F7F\u7528\uFF0C\u8FD9\u4E0D\u4EC5\u63D0\u9AD8\u4E86\u6027\u80FD\uFF0C\u8FD8\u51CF\u5C11\u4E86\u5EFA\u7ACB\u8FDE\u63A5\u65F6\u7684\u7CFB\u7EDF\u5F00\u9500\uFF0C\u5E76\u5E2E\u52A9\u9632\u6B62\u8FBE\u5230\u6570\u636E\u6E90\u7684\u8FDE\u63A5\u6570\u4E0A\u9650\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u53EF\u4EE5\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u8C03\u6574\u8FDE\u63A5\u6C60\u7684\u5927\u5C0F\uFF0C\u4EE5\u4FBF\u66F4\u597D\u5730\u9002\u5E94\u60A8\u7684\u5DE5\u4F5C\u8D1F\u8F7D\u3002\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u8FDE\u63A5\u6C60\u7684\u6700\u5C0F\u8FDE\u63A5\u6570\u5E94\u8BE5\u8BBE\u7F6E\u4E3A 1\uFF0C\u4EE5\u786E\u4FDD\u5728\u542F\u7528\u4FDD\u6D3B\u673A\u5236\u65F6\u81F3\u5C11\u6709\u4E00\u4E2A\u8FDE\u63A5\u5904\u4E8E\u6D3B\u8DC3\u72B6\u6001\u3002\u8FDE\u63A5\u6C60\u7684\u6700\u5927\u8FDE\u63A5\u6570\u5E94\u8BE5\u8BBE\u7F6E\u4E3A\u4E00\u4E2A\u5408\u7406\u7684\u503C\uFF0C\u4EE5\u907F\u514D\u8FC7\u591A\u7684\u8FDE\u63A5\u5360\u7528\u8D44\u6E90\u3002"}),"\n",(0,d.jsxs)(n.p,{children:["\u540C\u65F6\u4E3A\u4E86\u907F\u514D\u5728 BE \u4E0A\u7D2F\u79EF\u8FC7\u591A\u7684\u672A\u4F7F\u7528\u7684\u8FDE\u63A5\u6C60\u7F13\u5B58\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E BE \u7684 ",(0,d.jsx)(n.code,{children:"jdbc_connection_pool_cache_clear_time_sec"})," \u53C2\u6570\u6765\u6307\u5B9A\u6E05\u7406\u7F13\u5B58\u7684\u65F6\u95F4\u95F4\u9694\u3002\u9ED8\u8BA4\u503C\u4E3A 28800 \u79D2\uFF088 \u5C0F\u65F6\uFF09\uFF0C\u6B64\u95F4\u9694\u8FC7\u540E\uFF0CBE \u5C06\u5F3A\u5236\u6E05\u7406\u6240\u6709\u8D85\u8FC7\u8BE5\u65F6\u95F4\u672A\u4F7F\u7528\u7684\u8FDE\u63A5\u6C60\u7F13\u5B58\u3002"]}),"\n",(0,d.jsxs)(n.admonition,{type:"warning",children:[(0,d.jsx)(n.p,{children:"\u4F7F\u7528 Doris JDBC Catalog \u8FDE\u63A5\u5916\u90E8\u6570\u636E\u6E90\u65F6\uFF0C\u9700\u8C28\u614E\u66F4\u65B0\u6570\u636E\u5E93\u51ED\u8BC1\u3002\nDoris \u901A\u8FC7\u8FDE\u63A5\u6C60\u7EF4\u6301\u6D3B\u8DC3\u8FDE\u63A5\u4EE5\u5FEB\u901F\u54CD\u5E94\u67E5\u8BE2\u3002\u4F46\u51ED\u8BC1\u53D8\u66F4\u540E\uFF0C\u8FDE\u63A5\u6C60\u53EF\u80FD\u4F1A\u7EE7\u7EED\u4F7F\u7528\u65E7\u51ED\u8BC1\u5C1D\u8BD5\u5EFA\u7ACB\u65B0\u8FDE\u63A5\u5E76\u5931\u8D25\u3002\u7531\u4E8E\u7CFB\u7EDF\u8BD5\u56FE\u4FDD\u6301\u4E00\u5B9A\u6570\u91CF\u7684\u6D3B\u8DC3\u8FDE\u63A5\uFF0C\u8FD9\u79CD\u9519\u8BEF\u5C1D\u8BD5\u4F1A\u91CD\u590D\u6267\u884C\uFF0C\u4E14\u5728\u67D0\u4E9B\u6570\u636E\u5E93\u7CFB\u7EDF\u4E2D\uFF0C\u9891\u7E41\u7684\u5931\u8D25\u53EF\u80FD\u5BFC\u81F4\u8D26\u6237\u88AB\u9501\u5B9A\u3002\n\u5EFA\u8BAE\u5728\u5FC5\u987B\u66F4\u6539\u51ED\u8BC1\u65F6\uFF0C\u540C\u6B65\u66F4\u65B0 Doris JDBC Catalog \u914D\u7F6E\uFF0C\u5E76\u91CD\u542F Doris \u96C6\u7FA4\uFF0C\u4EE5\u786E\u4FDD\u6240\u6709\u8282\u70B9\u4F7F\u7528\u6700\u65B0\u51ED\u8BC1\uFF0C\u9632\u6B62\u8FDE\u63A5\u5931\u8D25\u548C\u6F5C\u5728\u7684\u8D26\u6237\u9501\u5B9A\u3002"}),(0,d.jsx)(n.p,{children:"\u53EF\u80FD\u9047\u5230\u7684\u8D26\u6237\u9501\u5B9A\u5982\u4E0B\uFF1A"}),(0,d.jsx)(n.p,{children:"MySQL: account is locked"}),(0,d.jsx)(n.p,{children:"Oracle: ORA-28000: the account is locked"}),(0,d.jsx)(n.p,{children:"SQL Server: Login is locked out"})]}),"\n",(0,d.jsx)(n.h3,{id:"insert-\u4E8B\u52A1",children:"Insert \u4E8B\u52A1"}),"\n",(0,d.jsxs)(n.p,{children:["Doris \u7684\u6570\u636E\u662F\u7531\u4E00\u7EC4 batch \u7684\u65B9\u5F0F\u5199\u5165 JDBC Catalog \u7684\uFF0C\u5982\u679C\u4E2D\u9014\u5BFC\u5165\u4E2D\u65AD\uFF0C\u4E4B\u524D\u5199\u5165\u6570\u636E\u53EF\u80FD\u9700\u8981\u56DE\u6EDA\u3002\u6240\u4EE5 JDBC Catalog \u652F\u6301\u6570\u636E\u5199\u5165\u65F6\u7684\u4E8B\u52A1\uFF0C\u4E8B\u52A1\u7684\u652F\u6301\u9700\u8981\u901A\u8FC7\u8BBE\u7F6E session variable: ",(0,d.jsx)(n.code,{children:"enable_odbc_transcation "}),"\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"set enable_odbc_transcation = true; \n"})}),"\n",(0,d.jsx)(n.p,{children:"\u4E8B\u52A1\u4FDD\u8BC1\u4E86 JDBC Catalog \u6570\u636E\u5199\u5165\u7684\u539F\u5B50\u6027\uFF0C\u4F46\u662F\u4E00\u5B9A\u7A0B\u5EA6\u4E0A\u4F1A\u964D\u4F4E\u6570\u636E\u5199\u5165\u7684\u6027\u80FD\uFF0C\u53EF\u4EE5\u8003\u8651\u914C\u60C5\u5F00\u542F\u8BE5\u529F\u80FD\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,d.jsx)(n.p,{children:"\u6B64\u5904\u4EE5 MySQL \u4E3A\u4F8B\uFF0C\u5C55\u793A\u5982\u4F55\u521B\u5EFA\u4E00\u4E2A MySQL Catalog \u5E76\u67E5\u8BE2\u5176\u4E2D\u7684\u6570\u636E\u3002"}),"\n",(0,d.jsxs)(n.p,{children:["\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3A ",(0,d.jsx)(n.code,{children:"mysql"})," \u7684 Catalog\uFF1A"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:'CREATE CATALOG mysql PROPERTIES (\n    "type"="jdbc",\n    "user"="root",\n    "password"="secret",\n    "jdbc_url" = "jdbc:mysql://example.net:3306",\n    "driver_url" = "mysql-connector-j-8.3.0.jar",\n    "driver_class" = "com.mysql.cj.jdbc.Driver"\n)\n'})}),"\n",(0,d.jsx)(n.p,{children:"\u901A\u8FC7\u8FD0\u884C SHOW DATABASES \u67E5\u770B\u6B64 Catalog \u6240\u6709\u6570\u636E\u5E93\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"SHOW DATABASES FROM mysql;\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u5982\u679C\u60A8\u6709\u4E00\u4E2A\u540D\u4E3A test \u7684 MySQL \u6570\u636E\u5E93\uFF0C\u60A8\u53EF\u4EE5\u901A\u8FC7\u8FD0\u884C SHOW TABLES \u67E5\u770B\u8BE5\u6570\u636E\u5E93\u4E2D\u7684\u8868\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"SHOW TABLES FROM mysql.test;\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u6700\u540E\uFF0C\u60A8\u53EF\u4EE5\u8BBF\u95EE MySQL \u6570\u636E\u5E93\u4E2D\u7684\u8868\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM mysql.test.table;\n"})}),"\n",(0,d.jsx)(n.h2,{id:"\u8FDE\u63A5\u6C60\u95EE\u9898\u6392\u67E5",children:"\u8FDE\u63A5\u6C60\u95EE\u9898\u6392\u67E5"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["\u5728\u5C0F\u4E8E 2.0.5 \u7684\u7248\u672C\uFF0C\u8FDE\u63A5\u6C60\u76F8\u5173\u914D\u7F6E\u53EA\u80FD\u5728 BE conf \u7684 JAVA_OPTS \u4E2D\u914D\u7F6E\uFF0C\u53C2\u8003 2.0.4 \u7248\u672C\u7684 ",(0,d.jsx)(n.a,{href:"https://github.com/apache/doris/blob/2.0.4-rc06/conf/be.conf#L22",children:"be.conf"}),"\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:["\u5728 2.0.5 \u53CA\u4E4B\u540E\u7684\u7248\u672C\uFF0C\u8FDE\u63A5\u6C60\u76F8\u5173\u914D\u7F6E\u53EF\u4EE5\u5728 Catalog \u5C5E\u6027\u4E2D\u914D\u7F6E\uFF0C\u53C2\u8003 ",(0,d.jsx)(n.a,{href:"#%E8%BF%9E%E6%8E%A5%E6%B1%A0%E5%B1%9E%E6%80%A7",children:"\u8FDE\u63A5\u6C60\u5C5E\u6027"}),"\u3002"]}),"\n",(0,d.jsx)(n.li,{children:"Doris \u4F7F\u7528\u7684\u8FDE\u63A5\u6C60\u5728 2.0.10\uFF082.0 Release\uFF09\u548C 2.1.3\uFF082.1 Release\uFF09\u5F00\u59CB\u4ECE Druid \u6362\u4E3A HikariCP\uFF0C\u6545\u8FDE\u63A5\u6C60\u76F8\u5173\u62A5\u9519\u4EE5\u53CA\u539F\u56E0\u6392\u67E5\u65B9\u5F0F\u6709\u6240\u4E0D\u540C\uFF0C\u53C2\u8003\u5982\u4E0B"}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"druid-\u8FDE\u63A5\u6C60\u7248\u672C",children:"Druid \u8FDE\u63A5\u6C60\u7248\u672C"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Initialize datasource failed:  CAUSED BY: GetConnectionTimeoutException: wait millis 5006, active 10, maxActive 10, creating 1"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u539F\u56E0 1\uFF1A\u67E5\u8BE2\u592A\u591A\u5BFC\u81F4\u8FDE\u63A5\u4E2A\u6570\u8D85\u51FA\u914D\u7F6E"}),"\n",(0,d.jsx)(n.li,{children:"\u539F\u56E0 2\uFF1A\u8FDE\u63A5\u6C60\u8BA1\u6570\u5F02\u5E38\u5BFC\u81F4\u6D3B\u8DC3\u8BA1\u6570\u672A\u4E0B\u964D"}),"\n",(0,d.jsxs)(n.li,{children:["\u89E3\u51B3\u65B9\u6CD5\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"alter catalog <catalog_name> set properties ('connection_pool_max_size' = '100'); \u6682\u65F6\u901A\u8FC7\u8C03\u6574\u8FDE\u63A5\u6570\u6765\u589E\u5927\u8FDE\u63A5\u6C60\u5BB9\u91CF\uFF0C\u4E14\u53EF\u4EE5\u901A\u8FC7\u8FD9\u79CD\u65B9\u5F0F\u5237\u65B0\u8FDE\u63A5\u6C60\u7F13\u5B58"}),"\n",(0,d.jsx)(n.li,{children:"\u5347\u7EA7\u5230\u66F4\u6362\u8FDE\u63A5\u6C60\u5230 Hikari \u7248\u672C"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Initialize datasource failed:  CAUSED BY: GetConnectionTimeoutException: wait millis 5006, active 10, maxActive 0, creating 1"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u539F\u56E0 1\uFF1A\u7F51\u7EDC\u4E0D\u901A"}),"\n",(0,d.jsx)(n.li,{children:"\u539F\u56E0 2\uFF1A\u7F51\u7EDC\u5EF6\u8FDF\u9AD8\uFF0C\u5BFC\u81F4\u521B\u5EFA\u8FDE\u63A5\u8D85\u8FC7 5s"}),"\n",(0,d.jsxs)(n.li,{children:["\u89E3\u51B3\u65B9\u6CD5\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u68C0\u67E5\u7F51\u7EDC"}),"\n",(0,d.jsx)(n.li,{children:"alter catalog <catalog_name> set properties ('connection_pool_max_wait' = '10000'); \u8C03\u5927\u8D85\u65F6\u65F6\u95F4"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"hikaricp-\u8FDE\u63A5\u6C60\u7248\u672C",children:"HikariCP \u8FDE\u63A5\u6C60\u7248\u672C"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"Connection is not available, request timed out after 5000ms"})}),"\n",(0,d.jsx)(n.h4,{id:"\u53EF\u80FD\u7684\u539F\u56E0",children:"\u53EF\u80FD\u7684\u539F\u56E0\uFF1A"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"\u539F\u56E0 1"}),"\uFF1A\u7F51\u7EDC\u95EE\u9898\uFF08\u4F8B\u5982\uFF0C\u670D\u52A1\u5668\u4E0D\u53EF\u8FBE\uFF09"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"\u539F\u56E0 2"}),"\uFF1A\u8EAB\u4EFD\u8BA4\u8BC1\u95EE\u9898\uFF0C\u4F8B\u5982\u65E0\u6548\u7684\u7528\u6237\u540D\u6216\u5BC6\u7801"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"\u539F\u56E0 3"}),"\uFF1A\u7F51\u7EDC\u5EF6\u8FDF\u8FC7\u9AD8\uFF0C\u5BFC\u81F4\u521B\u5EFA\u8FDE\u63A5\u8D85\u8FC7 5 \u79D2\u8D85\u65F6\u65F6\u95F4"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"\u539F\u56E0 4"}),"\uFF1A\u5E76\u53D1\u67E5\u8BE2\u8FC7\u591A\uFF0C\u8D85\u8FC7\u4E86\u8FDE\u63A5\u6C60\u914D\u7F6E\u7684\u6700\u5927\u8FDE\u63A5\u6570"]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"\u89E3\u51B3\u65B9\u6848",children:"\u89E3\u51B3\u65B9\u6848\uFF1A"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:'\u5982\u679C\u53EA\u6709 "Connection is not available, request timed out after 5000ms" \u8FD9\u4E00\u7C7B\u9519\u8BEF'}),"\uFF0C\u8BF7\u68C0\u67E5 ",(0,d.jsx)(n.strong,{children:"\u539F\u56E0 3"})," \u548C ",(0,d.jsx)(n.strong,{children:"\u539F\u56E0 4"}),"\uFF1A"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u68C0\u67E5\u662F\u5426\u5B58\u5728\u7F51\u7EDC\u5EF6\u8FDF\u8FC7\u9AD8\u6216\u8D44\u6E90\u8017\u5C3D\u7684\u60C5\u51B5\u3002"}),"\n",(0,d.jsxs)(n.li,{children:["\u8C03\u5927\u8FDE\u63A5\u6C60\u7684\u6700\u5927\u8FDE\u63A5\u6570\uFF1A\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"ALTER CATALOG <catalog_name> SET PROPERTIES ('connection_pool_max_size' = '100');\n"})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\u8C03\u5927\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4\uFF1A\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"ALTER CATALOG <catalog_name> SET PROPERTIES ('connection_pool_max_wait_time' = '10000');\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:'\u5982\u679C\u9664\u4E86 "Connection is not available, request timed out after 5000ms" \u4E4B\u5916\u8FD8\u6709\u5176\u4ED6\u9519\u8BEF\u4FE1\u606F'}),"\uFF0C\u8BF7\u68C0\u67E5\u8FD9\u4E9B\u9644\u52A0\u9519\u8BEF\uFF1A"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"\u7F51\u7EDC\u95EE\u9898"}),"\uFF08\u4F8B\u5982\uFF0C\u670D\u52A1\u5668\u4E0D\u53EF\u8FBE\uFF09\u53EF\u80FD\u5BFC\u81F4\u8FDE\u63A5\u5931\u8D25\u3002\u8BF7\u68C0\u67E5\u7F51\u7EDC\u8FDE\u63A5\u662F\u5426\u6B63\u5E38\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"\u8EAB\u4EFD\u8BA4\u8BC1\u95EE\u9898"}),"\uFF08\u4F8B\u5982\uFF0C\u7528\u6237\u540D\u6216\u5BC6\u7801\u65E0\u6548\uFF09\u4E5F\u53EF\u80FD\u5BFC\u81F4\u8FDE\u63A5\u5931\u8D25\u3002\u8BF7\u68C0\u67E5\u914D\u7F6E\u4E2D\u4F7F\u7528\u7684\u6570\u636E\u5E93\u51ED\u636E\uFF0C\u786E\u4FDD\u7528\u6237\u540D\u548C\u5BC6\u7801\u6B63\u786E\u65E0\u8BEF\u3002"]}),"\n",(0,d.jsx)(n.li,{children:"\u6839\u636E\u5177\u4F53\u9519\u8BEF\u4FE1\u606F\uFF0C\u8C03\u67E5\u4E0E\u7F51\u7EDC\u3001\u6570\u636E\u5E93\u6216\u8EAB\u4EFD\u8BA4\u8BC1\u76F8\u5173\u7684\u95EE\u9898\uFF0C\u627E\u51FA\u6839\u672C\u539F\u56E0\u3002"}),"\n"]}),"\n"]}),"\n"]})]})}function o(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return r}});var l=s(667294);let d={},i=l.createContext(d);function r(e){let n=l.useContext(i);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);