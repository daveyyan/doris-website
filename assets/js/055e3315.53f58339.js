"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["126"],{834057:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>i,default:()=>h,assets:()=>r,toc:()=>c,frontMatter:()=>o});var t=JSON.parse('{"id":"sql-manual/sql-functions/table-valued-functions/catalogs","title":"CATALOGS","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/table-valued-functions/catalogs.md","sourceDirName":"sql-manual/sql-functions/table-valued-functions","slug":"/sql-manual/sql-functions/table-valued-functions/catalogs","permalink":"/docs/dev/sql-manual/sql-functions/table-valued-functions/catalogs","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"CATALOGS","language":"en"},"sidebar":"docs","previous":{"title":"FRONTENDS_DISKS","permalink":"/docs/dev/sql-manual/sql-functions/table-valued-functions/frontends_disks"},"next":{"title":"JOBS","permalink":"/docs/dev/sql-manual/sql-functions/table-valued-functions/jobs"}}'),a=s("785893"),l=s("250065");let o={title:"CATALOGS",language:"en"},i=void 0,r={},c=[{value:"<code>catalogs</code>",id:"catalogs",level:2},{value:"Name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"catalogs",children:(0,a.jsx)(n.code,{children:"catalogs"})}),"\n",(0,a.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,a.jsx)(n.p,{children:"catalogs"}),"\n",(0,a.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,a.jsx)(n.p,{children:"The table function generates a temporary table of catalogs to view the information of the catalogs created in the current Doris."}),"\n",(0,a.jsx)(n.p,{children:"This function is used in the from clause."}),"\n",(0,a.jsx)(n.h4,{id:"syntax",children:"syntax"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"catalogs()"})}),"\n",(0,a.jsx)(n.p,{children:"Catalogs () table structure:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"mysql> desc function catalogs();\n+-------------+--------+------+-------+---------+-------+\n| Field       | Type   | Null | Key   | Default | Extra |\n+-------------+--------+------+-------+---------+-------+\n| CatalogId   | BIGINT | No   | false | NULL    | NONE  |\n| CatalogName | TEXT   | No   | false | NULL    | NONE  |\n| CatalogType | TEXT   | No   | false | NULL    | NONE  |\n| Property    | TEXT   | No   | false | NULL    | NONE  |\n| Value       | TEXT   | No   | false | NULL    | NONE  |\n+-------------+--------+------+-------+---------+-------+\n5 rows in set (0.04 sec)\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The information presented by ",(0,a.jsx)(n.code,{children:"catalogs()"})," tvf is the result of synthesizing ",(0,a.jsx)(n.code,{children:"show catalogs"})," and ",(0,a.jsx)(n.code,{children:"show catalog xxx"})," statements."]}),"\n",(0,a.jsx)(n.p,{children:"The table generated by tvf can be used for filtering, join and other operations."}),"\n",(0,a.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"mysql> select * from catalogs();\n+-----------+-------------+-------------+--------------------------------------------+---------------------------------------------------------------------------+\n| CatalogId | CatalogName | CatalogType | Property                                   | Value                                                                     |\n+-----------+-------------+-------------+--------------------------------------------+---------------------------------------------------------------------------+\n|     16725 | hive        | hms         | dfs.client.failover.proxy.provider.HANN    | org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider |\n|     16725 | hive        | hms         | dfs.ha.namenodes.HANN                      | nn1,nn2                                                                   |\n|     16725 | hive        | hms         | create_time                                | 2023-07-13 16:24:38.968                                                   |\n|     16725 | hive        | hms         | ipc.client.fallback-to-simple-auth-allowed | true                                                                      |\n|     16725 | hive        | hms         | dfs.namenode.rpc-address.HANN.nn1          | nn1_host:rpc_port                                                         |\n|     16725 | hive        | hms         | hive.metastore.uris                        | thrift://127.0.0.1:7004                                                   |\n|     16725 | hive        | hms         | dfs.namenode.rpc-address.HANN.nn2          | nn2_host:rpc_port                                                         |\n|     16725 | hive        | hms         | type                                       | hms                                                                       |\n|     16725 | hive        | hms         | dfs.nameservices                           | HANN                                                                      |\n|         0 | internal    | internal    | NULL                                       | NULL                                                                      |\n|     16726 | es          | es          | create_time                                | 2023-07-13 16:24:44.922                                                   |\n|     16726 | es          | es          | type                                       | es                                                                        |\n|     16726 | es          | es          | hosts                                      | http://127.0.0.1:9200                                                     |\n+-----------+-------------+-------------+--------------------------------------------+---------------------------------------------------------------------------+\n13 rows in set (0.01 sec)\n"})}),"\n",(0,a.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"catalogs\n"})})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return o}});var t=s(667294);let a={},l=t.createContext(a);function o(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);