"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["909613"],{733969:function(e,n,r){r.r(n),r.d(n,{assets:function(){return c},contentTitle:function(){return a},default:function(){return h},frontMatter:function(){return i},metadata:function(){return t},toc:function(){return l}});var t=r(621095),s=r(785893),o=r(250065);let i={title:"From Presto, Trino, ClickHouse, and Hive to Apache Doris: SQL convertor for easy migration",description:"Users can execute queries with their old SQL syntaxes directly in Doris or batch convert their existing SQL statements on the visual SQL conversion interface.",date:"2024-05-06",author:"Apache Doris",tags:["Tech Sharing"],image:"/images/sql-convertor-feature.jpeg"},a=void 0,c={authorsImageUrls:[void 0]},l=[{value:"Doris SQL Convertor",id:"doris-sql-convertor",level:2},{value:"Installation &amp; usage",id:"installation--usage",level:2},{value:"SQL conversion service",id:"sql-conversion-service",level:3},{value:"Visual interface",id:"visual-interface",level:3}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://doris.apache.org/",children:"Apache Doris"})," is an all-in-one data platform that is capable of real-time reporting, ad-hoc queries, data lakehousing, log management and analysis, and batch data processing. As more and more companies have been replacing their component-heavy data architecture with Apache Doris, there is an increasing need for a more convenient data migration solution. ",(0,s.jsx)(n.strong,{children:"That's why the Doris SQL Convertor is made."})]}),"\n",(0,s.jsx)(n.p,{children:"Most database systems run their own SQL dialects. Thus, migration between systems often entails modifications of SQL syntaxes. Since SQLs work closely with a company's business logic, in many cases, users have to modify their business logic, too. To reduce the transition pain for users, Apache Doris 2.1 provides the Doris SQL Convertor. It supports the SQL syntaxes of Presto, Trino, Hive, ClickHouse, and PostgreSQL. With it, users can execute queries with their old SQL syntaxes directly in Doris or batch convert their existing SQL statements on the visual interface."}),"\n",(0,s.jsx)(n.h2,{id:"doris-sql-convertor",children:"Doris SQL Convertor"}),"\n",(0,s.jsxs)(n.p,{children:["The Doris SQL Convertor requires ",(0,s.jsx)(n.strong,{children:"zero rewriting"})," of SQL. Simply ",(0,s.jsx)(n.code,{children:'set sql_dialect = "trino"'})," in the session variable, then you can execute queries in Doris using Trino SQLs."]}),"\n",(0,s.jsx)(n.p,{children:"The SQL compatibility of it has been proven by extensive tests. For example, a user tested the Doris SQL Convertor with over 30,000 SQL queries from their production environment. Turned out that the Convertor successfully converted 99.6% of the Trino SQLs and 98% of the ClickHouse SQLs."}),"\n",(0,s.jsx)(n.p,{children:"Currently, Presto, Trino, Hive, ClickHouse, and PostgreSQL dialects are supported. We are working to add Teradata, SQL Server, and Snowflake to the list, and consistently increase the compatibility level of each SQL dialect."}),"\n",(0,s.jsx)(n.h2,{id:"installation--usage",children:"Installation & usage"}),"\n",(0,s.jsx)(n.h3,{id:"sql-conversion-service",children:"SQL conversion service"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Download"})," ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://selectdb-doris-1308700295.cos.ap-beijing.myqcloud.com/doris-sql-convertor/doris-sql-convertor-1.0.3-bin-x86.tar.gz",children:"Doris SQL Convertor"})})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"On any frontend (FE) node, start the service using the following command."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The SQL conversion service is stateless and can be started or stopped at any time."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"port=5001"})," in the command specifies the service port. (You can use any available port.)"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"It is advisable to start a service individually for each FE node."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Shell",children:"nohup ./doris-sql-convertor-1.0.1-bin-x86 run --host=0.0.0.0 --port=5001 &\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Start a Doris cluster ",(0,s.jsx)(n.strong,{children:"(Use Doris 2.1.0 or newer)"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Set the URL for SQL conversion service in Doris. ",(0,s.jsx)(n.code,{children:"127.0.0.1:5001"})," in the command represents the IP and port number of the node where the service is deployed."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Shell",children:'MySQL> set global sql_converter_service_url = "http://127.0.0.1:5001/api/v1/convert"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["After deployment, you can execute SQL directly in the command line. You can start the service by ",(0,s.jsx)(n.code,{children:"set sql_dialect = XXX"}),". The following examples are based on ClickHouse SQL dialects."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Presto"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"mysql> set sql_dialect=presto;                                                                                                                                                                                                             \nQuery OK, 0 rows affected (0.00 sec) \n\nmysql> SELECT cast(start_time as varchar(20)) as col1,                                                                                                                                                                                     \n            array_distinct(arr_int) as col2,                                                                                                                                                                                             \n            FILTER(arr_str, x -> x LIKE '%World%') as col3,                                                                                                                                                                              \n            to_date(value,'%Y-%m-%d') as col4,                                                                                                                                                                                           \n            YEAR(start_time) as col5,                                                                                                                                                                                                    \n            date_add('month', 1, start_time) as col6,                                                                                                                                                                                    \n            REGEXP_EXTRACT_ALL(value, '-.') as col7,                                                                                                                                                                                     \n            JSON_EXTRACT('{\"id\": \"33\"}', '$.id')as col8,                                                                                                                                                                                 \n            element_at(arr_int, 1) as col9,                                                                                                                                                                                              \n            date_trunc('day',start_time) as col10                                                                                                                                                                                        \n         FROM test_sqlconvert                                                                                                                                                                                                            \n         where date_trunc('day',start_time)= DATE'2024-05-20'                                                                                                                                                                            \n     order by id;                                                                                                                                                                                                                        \n+---------------------+-----------+-----------+------------+------+---------------------+-------------+------+------+---------------------+                                                                                                \n| col1                | col2      | col3      | col4       | col5 | col6                | col7        | col8 | col9 | col10               |                                                                                                \n+---------------------+-----------+-----------+------------+------+---------------------+-------------+------+------+---------------------+                                                                                                \n| 2024-05-20 13:14:52 | [1, 2, 3] | [\"World\"] | 2024-01-14 | 2024 | 2024-06-20 13:14:52 | ['-0','-1'] | \"33\" |    1 | 2024-05-20 00:00:00 |                                                                                                \n+---------------------+-----------+-----------+------------+------+---------------------+-------------+------+------+---------------------+                                                                                                \n1 row in set (0.03 sec)    \n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"ClickHouse"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"mysql> set sql_dialect=clickhouse;                                                                                                                                             \nQuery OK, 0 rows affected (0.00 sec)                                                                                                                                           \n                                                                                                                                                                               \nmysql> select  toString(start_time) as col1,                                                                                                                                   \n             arrayCompact(arr_int) as col2,                                                                                                                                  \n             arrayFilter(x -> x like '%World%',arr_str)as col3,                                                                                                              \n             toDate(value) as col4,                                                                                                                                          \n             toYear(start_time)as col5,                                                                                                                                      \n             addMonths(start_time, 1)as col6,                                                                                                                                \n             extractAll(value, '-.')as col7,                                                                                                                                 \n             JSONExtractString('{\"id\": \"33\"}' , 'id')as col8,                                                                                                                \n             arrayElement(arr_int, 1) as col9,                                                                                                                               \n             date_trunc('day',start_time) as col10                                                                                                                           \n          FROM test_sqlconvert                                                                                                                                               \n          where date_trunc('day',start_time)= '2024-05-20 00:00:00'                                                                                                          \n     order by id;                                                                                                                                                   \n+---------------------+-----------+-----------+------------+------+---------------------+-------------+------+------+---------------------+                                    \n| col1                | col2      | col3      | col4       | col5 | col6                | col7        | col8 | col9 | col10               |                                    \n+---------------------+-----------+-----------+------------+------+---------------------+-------------+------+------+---------------------+                                    \n| 2024-05-20 13:14:52 | [1, 2, 3] | [\"World\"] | 2024-01-14 | 2024 | 2024-06-20 13:14:52 | ['-0','-1'] | \"33\" |    1 | 2024-05-20 00:00:00 |                                    \n+---------------------+-----------+-----------+------------+------+---------------------+-------------+------+------+---------------------+                                    \n1 row in set (0.02 sec)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"visual-interface",children:"Visual interface"}),"\n",(0,s.jsx)(n.p,{children:"For large-scale conversion, it is recommended to use the visual interface, on which you can batch upload the files for dialect conversion."}),"\n",(0,s.jsx)(n.p,{children:"Follow these steps to deploy the visual conversion interface:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Environment: Docker, Docker-Compose"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Get Doris-SQL-Convertor Docker image"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Create a network for the image"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"docker network create app_network\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:"Decompress the package"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"tar xzvf doris-sql-convertor-1.0.1.tar.gz\n\ncd doris-sql-convertor\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsx)(n.li,{children:"Edit the environment variables"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"FLASK_APP=server/app.py\nFLASK_DEBUG=1\nAPI_HOST=http://doris-sql-convertor-api:5000\n\n# DOCKER TAG\nAPI_TAG=latest\nWEB_TAG=latest\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"6",children:["\n",(0,s.jsx)(n.li,{children:"Start it up"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"sh start.sh\n"})}),"\n",(0,s.jsxs)(n.p,{children:["After deployment, you can access the service by ",(0,s.jsx)(n.code,{children:"ip:8080"})," via your local browser. ",(0,s.jsx)(n.code,{children:"8080"}),' is the default port. You can change the mapping port. On the visual interface, you can select the source dialect type and target dialect type, and then click "Convert".']}),"\n",(0,s.jsx)(n.admonition,{title:"Note",type:"info",children:(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["For batch conversion, each SQL statement should end with ",(0,s.jsx)(n.code,{children:"; "}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The Doris SQL Convertor supports 239 UNION ALL conversions at most."}),"\n"]}),"\n"]})}),"\n",(0,s.jsxs)(n.p,{children:["Join the ",(0,s.jsx)(n.a,{href:"https://join.slack.com/t/apachedoriscommunity/shared_invite/zt-2unfw3a3q-MtjGX4pAd8bCGC1UV0sKcw",children:"Apache Doris community"})," to seek guidance from the Doris makers or provide your feedback!"]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return i}});var t=r(667294);let s={},o=t.createContext(s);function i(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:n},e.children)}},621095:function(e){e.exports=JSON.parse('{"permalink":"/zh-CN/blog/from-presto-trino-clickhouse-and-hive-to-apache-doris-sql-convertor-for-easy-migration","source":"@site/blog/from-presto-trino-clickhouse-and-hive-to-apache-doris-sql-convertor-for-easy-migration.md","title":"From Presto, Trino, ClickHouse, and Hive to Apache Doris: SQL convertor for easy migration","description":"Users can execute queries with their old SQL syntaxes directly in Doris or batch convert their existing SQL statements on the visual SQL conversion interface.","date":"2024-05-06T00:00:00.000Z","tags":[{"inline":true,"label":"Tech Sharing","permalink":"/zh-CN/blog/tags/tech-sharing"}],"hasTruncateMarker":false,"authors":[{"name":"Apache Doris","key":null,"page":null}],"frontMatter":{"title":"From Presto, Trino, ClickHouse, and Hive to Apache Doris: SQL convertor for easy migration","description":"Users can execute queries with their old SQL syntaxes directly in Doris or batch convert their existing SQL statements on the visual SQL conversion interface.","date":"2024-05-06","author":"Apache Doris","tags":["Tech Sharing"],"image":"/images/sql-convertor-feature.jpeg"},"unlisted":false,"prevItem":{"title":"Multi-tenant workload isolation: a better balance between isolation and utilization","permalink":"/zh-CN/blog/multi-tenant-workload-isolation-in-apache-doris"},"nextItem":{"title":"Cross-cluster replication for read-write separation: story of a grocery store brand","permalink":"/zh-CN/blog/cross-cluster-replication-for-read-write"}}')}}]);