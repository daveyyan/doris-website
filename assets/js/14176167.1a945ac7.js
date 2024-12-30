"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["729634"],{124307:function(e,t,n){n.r(t),n.d(t,{metadata:()=>i,contentTitle:()=>r,default:()=>d,assets:()=>l,toc:()=>c,frontMatter:()=>a});var i=JSON.parse('{"id":"query-data/join","title":"Join","description":"\x3c!--","source":"@site/docs/query-data/join.md","sourceDirName":"query-data","slug":"/query-data/join","permalink":"/docs/dev/query-data/join","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Join","language":"en"},"sidebar":"docs","previous":{"title":"MySQL Compatibility","permalink":"/docs/dev/query-data/mysql-compatibility"},"next":{"title":"Subquery","permalink":"/docs/dev/query-data/subquery"}}'),o=n("785893"),s=n("250065");let a={title:"Join",language:"en"},r=void 0,l={},c=[{value:"What is JOIN",id:"what-is-join",level:2},{value:"JOIN types supported by Doris",id:"join-types-supported-by-doris",level:2},{value:"Implementation of JOIN in Doris",id:"implementation-of-join-in-doris",level:2},{value:"Implementation of Hash Join in Doris",id:"implementation-of-hash-join-in-doris",level:3},{value:"Partition Shuffle Join",id:"partition-shuffle-join",level:3},{value:"Bucket Shuffle Join",id:"bucket-shuffle-join",level:3},{value:"Colocate Join",id:"colocate-join",level:3},{value:"Bucket Shuffle Join VS Colocate Join",id:"bucket-shuffle-join-vs-colocate-join",level:2},{value:"Example of Bucket Shuffle Join",id:"example-of-bucket-shuffle-join",level:3},{value:"Example of Colocate Join",id:"example-of-colocate-join",level:3},{value:"Comparison of four shuffle methods",id:"comparison-of-four-shuffle-methods",level:2},{value:"FAQ",id:"faq",level:2},{value:"Limitations of Bucket Shuffle Join",id:"limitations-of-bucket-shuffle-join",level:3},{value:"Limitations of Colocate Join",id:"limitations-of-colocate-join",level:3}];function h(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"what-is-join",children:"What is JOIN"}),"\n",(0,o.jsx)(t.p,{children:"In relational databases, data is distributed across multiple tables, which are interconnected through specific relationships. SQL JOIN operations allow users to combine different tables into a more complete result set based on these relationships."}),"\n",(0,o.jsx)(t.h2,{id:"join-types-supported-by-doris",children:"JOIN types supported by Doris"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"INNER JOIN"}),": Comparing each row of the left table with all rows of the right table based on the JOIN condition, returning matching rows from both tables. For more details, refer to the syntax definition for JOIN queries in ",(0,o.jsx)(t.a,{href:"../sql-manual/sql-statements/Data-Manipulation-Statements/Manipulation/SELECT/",children:"SELECT"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"LEFT JOIN"}),": Building on the result set of an INNER JOIN, if a row from the left table does not have a match in the right table, all rows from the left table are returned, with corresponding columns from the right table shown as NULL."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"RIGHT JOIN"}),": The opposite of LEFT JOIN; if a row from the right table does not have a match in the left table, all rows from the right table are returned, with corresponding columns from the left table shown as NULL."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"FULL JOIN"}),": Building on the result set of an INNER JOIN, returning all rows from both tables, filling in NULL where there are no matches."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"CROSS JOIN"}),": Having no JOIN condition, returning the Cartesian product of the two tables, where each row from the left table is combined with each row from the right table."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"LEFT SEMI JOIN"}),": Comparing each row of the left table with all rows of the right table based on the JOIN condition. If a match exists, the corresponding row from the left table is returned."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"RIGHT SEMI JOIN"}),": The opposite of LEFT SEMI JOIN; comparing each row of the right table with all rows of the left table, returning the corresponding row from the right table if a match exists."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"LEFT ANTI JOIN"}),": Comparing each row of the left table with all rows of the right table based on the JOIN condition. If there is no match, the corresponding row from the left table is returned."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"RIGHT ANTI JOIN"}),": The opposite of LEFT ANTI JOIN; comparing each row of the right table with all rows of the left table, returning rows from the right table that do not have matches."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"NULL AWARE LEFT ANTI JOIN"}),": Similar to LEFT ANTI JOIN but ignoring rows in the left table where the matching column is NULL."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"implementation-of-join-in-doris",children:"Implementation of JOIN in Doris"}),"\n",(0,o.jsxs)(t.p,{children:["Doris supports two implementation methods for JOIN: ",(0,o.jsx)(t.strong,{children:"Hash Join"})," and ",(0,o.jsx)(t.strong,{children:"Nested Loop Join"}),"."]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Hash Join"}),": A hash table is built on the right table based on the equality JOIN columns, and the data from the left table is streamed through this hash table for JOIN calculations. This method is limited to cases where equality JOIN conditions are applicable."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Nested Loop Join"}),": This method uses two nested loops, driven by the left table, to iterate through each row of the left table and compare it with every row of the right table based on the JOIN condition. It is suitable for all JOIN scenarios, including those that Hash Join cannot handle, such as queries involving GREATER THAN or LESS THAN comparisons, or cases requiring Cartesian products. However, compared to Hash Join, Nested Loop Join may have inferior performance."]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"implementation-of-hash-join-in-doris",children:"Implementation of Hash Join in Doris"}),"\n",(0,o.jsx)(t.p,{children:"As a distributed MPP database, Apache Doris requires data shuffling during the Hash Join process to ensure the correctness of the JOIN results. Below are several data shuffling methods:"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Broadcast Join"})," As illustrated, the Broadcast Join process involves sending all data from the right table to all nodes participating in the JOIN computation, including the nodes scanning the left table's data, while the left table's data remains stationary. In this process, each node receives a complete copy of the right table's data (with a total volume of T(R)) to ensure that all nodes have the necessary data to perform the JOIN operation."]}),"\n",(0,o.jsx)(t.p,{children:"This method is suitable for various scenarios but is not applicable for RIGHT OUTER, RIGHT ANTI, and RIGHT SEMI types of Hash Join. Its network overhead is calculated as the number of JOIN nodes N multiplied by the volume of right table's data T(R)."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Implementation of Hash Join in Doris",src:n(212255).Z+"",width:"2560",height:"1440"})}),"\n",(0,o.jsx)(t.h3,{id:"partition-shuffle-join",children:"Partition Shuffle Join"}),"\n",(0,o.jsx)(t.p,{children:"This method computes hash values based on the JOIN conditions and performs bucketing. Specifically, the data from both the left and right tables is partitioned according to the hash values calculated from the JOIN conditions, and these partitioned data sets are then sent to the corresponding partition nodes (as illustrated)."}),"\n",(0,o.jsx)(t.p,{children:"The network overhead of this method mainly includes two parts: the cost of transferring the left table's data T(S) and the cost of transferring the right table's data T(R). This method only supports Hash Join operations because it relies on the JOIN conditions to perform data bucketing."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Partition Shuffle Join",src:n(802249).Z+"",width:"2560",height:"1040"})}),"\n",(0,o.jsx)(t.h3,{id:"bucket-shuffle-join",children:"Bucket Shuffle Join"}),"\n",(0,o.jsx)(t.p,{children:"When the JOIN condition includes the bucketed column from the left table, the left table's data location remains unchanged while the right table's data is distributed to the left table's nodes for the JOIN, reducing network overhead."}),"\n",(0,o.jsx)(t.p,{children:"When one side of the table involved in the JOIN operation has its data already hash-distributed according to the JOIN condition column, users can choose to keep this side's data location unchanged while distributing the other side's data based on the same JOIN condition column and hash distribution. (The term \"table\" here refers not only to physically stored tables but also to the output results of any operators in SQL queries. Users can flexibly choose to keep either the left or right table's data location unchanged while only moving and distributing the other side's table.)"}),"\n",(0,o.jsx)(t.p,{children:"For example, in the case of physical tables of Doris, since the table data is stored in a bucketed manner through hash computation, users can directly leverage this feature to optimize the data shuffle process for the JOIN operation. Suppose you have two tables that need to be joined, and the JOIN column is the bucketed column from the left table. In this case, you do not need to move the left table's data; you only need to distribute the right table's data to the appropriate locations based on the left table's bucket information to complete the JOIN computation."}),"\n",(0,o.jsx)(t.p,{children:"The primary network overhead for this process comes from the movement of the right table's data, denoted as T(R)."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Bucket Shuffle Join",src:n(753969).Z+"",width:"2560",height:"1040"})}),"\n",(0,o.jsx)(t.h3,{id:"colocate-join",children:"Colocate Join"}),"\n",(0,o.jsx)(t.p,{children:"Similar to Bucket Shuffle Join, if both tables involved in the Join are already distributed by Hash according to the Join condition columns, the Shuffle process can be skipped, and the Join calculation can be performed directly on the local data. This can be illustrated with physical tables:"}),"\n",(0,o.jsx)(t.p,{children:"When creating a table in Doris with the specification of DISTRIBUTED BY HASH, the system distributes data based on the Hash distribution key during data import. If the Hash distribution keys of both tables happen to match the Join condition columns, it can be said that the data in these two tables is already pre-distributed according to the Join requirements, eliminating the need for additional Shuffle operations. Therefore, during actual queries, the Join calculation can be executed directly on these two tables."}),"\n",(0,o.jsx)(t.admonition,{type:"caution",children:(0,o.jsx)(t.p,{children:"For scenarios where Join is executed after directly scanning data, certain conditions must be met during table creation; please refer to the subsequent restrictions regarding Colocate Join between the two physical tables."})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Colocate Join",src:n(913130).Z+"",width:"2560",height:"800"})}),"\n",(0,o.jsx)(t.h2,{id:"bucket-shuffle-join-vs-colocate-join",children:"Bucket Shuffle Join VS Colocate Join"}),"\n",(0,o.jsx)(t.p,{children:'As mentioned earlier, for both Bucket Shuffle Join and Colocate Join, the join operations can be executed as long as the distribution of the participating tables meets specific conditions (the term "tables" here refers to any output from SQL query operators).'}),"\n",(0,o.jsx)(t.p,{children:"Next, we will provide a more detailed explanation of the generalized Bucket Shuffle Join and Colocate Join using two tables, t1 and t2, along with relevant SQL examples. First, here are the table creation statements for both tables:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sql",children:'create table t1\n(\n    c1 bigint, \n    c2 bigint\n)\nDISTRIBUTED BY HASH(c1) BUCKETS 3\nPROPERTIES ("replication_num" = "1");\n\ncreate table t2\n(\n    c1 bigint, \n    c2 bigint\n)\nDISTRIBUTED BY HASH(c1) BUCKETS 3\nPROPERTIES ("replication_num" = "1");\n'})}),"\n",(0,o.jsx)(t.h3,{id:"example-of-bucket-shuffle-join",children:"Example of Bucket Shuffle Join"}),"\n",(0,o.jsx)(t.p,{children:"In the following example, both tables t1 and t2 have been processed by the GROUP BY operator, resulting in new tables (at this point, the tx table is hash-distributed by c1, while the ty table is hash-distributed by c2). The subsequent JOIN condition is tx.c1 = ty.c2, which perfectly meets the conditions for a Bucket Shuffle Join."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sql",children:"explain select *\nfrom \n    (\n        -- The t1 table is hash-distributed by c1, and after the GROUP BY operator, it still maintains the hash distribution by c1.\n        select c1 as c1, sum(c2) as c2\n        from t1\n        group by c1 \n    ) tx\njoin \n    (\n        -- The t2 table is hash-distributed by c1, but after the GROUP BY operator, the data is redistributed to be hash-distributed by c2.\n        select c2 as c2, sum(c1) as c1\n        from t2\n        group by c2 \n    ) ty\non tx.c1 = ty.c2;\n"})}),"\n",(0,o.jsx)(t.p,{children:"From the following Explain execution plan, it can be observed that the left child node of the Hash Join node 7 is the aggregation node 6, while the right child node is the Exchange node 4. This indicates that the data from the left child node, after aggregation, remains in the same location, while the data from the right child node is distributed to the node where the left child node resides using the Bucket Shuffle method, in order to perform the subsequent Hash Join operation."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sql",children:"+------------------------------------------------------------+\n| Explain String(Nereids Planner)                            |\n+------------------------------------------------------------+\n| PLAN FRAGMENT 0                                            |\n|   OUTPUT EXPRS:                                            |\n|     c1[#18]                                                |\n|     c2[#19]                                                |\n|     c2[#20]                                                |\n|     c1[#21]                                                |\n|   PARTITION: HASH_PARTITIONED: c1[#8]                      |\n|                                                            |\n|   HAS_COLO_PLAN_NODE: true                                 |\n|                                                            |\n|   VRESULT SINK                                             |\n|      MYSQL_PROTOCAL                                        |\n|                                                            |\n|   7:VHASH JOIN(364)                                        |\n|   |  join op: INNER JOIN(BUCKET_SHUFFLE)[]                 |\n|   |  equal join conjunct: (c1[#12] = c2[#6])               |\n|   |  cardinality=10                                        |\n|   |  vec output tuple id: 8                                |\n|   |  output tuple id: 8                                    |\n|   |  vIntermediate tuple ids: 7                            |\n|   |  hash output slot ids: 6 7 12 13                       |\n|   |  final projections: c1[#14], c2[#15], c2[#16], c1[#17] |\n|   |  final project output tuple id: 8                      |\n|   |  distribute expr lists: c1[#12]                        |\n|   |  distribute expr lists: c2[#6]                         |\n|   |                                                        |\n|   |----4:VEXCHANGE                                         |\n|   |       offset: 0                                        |\n|   |       distribute expr lists: c2[#6]                    |\n|   |                                                        |\n|   6:VAGGREGATE (update finalize)(342)                      |\n|   |  output: sum(c2[#9])[#11]                              |\n|   |  group by: c1[#8]                                      |\n|   |  sortByGroupKey:false                                  |\n|   |  cardinality=10                                        |\n|   |  final projections: c1[#10], c2[#11]                   |\n|   |  final project output tuple id: 6                      |\n|   |  distribute expr lists: c1[#8]                         |\n|   |                                                        |\n|   5:VOlapScanNode(339)                                     |\n|      TABLE: tt.t1(t1), PREAGGREGATION: ON                  |\n|      partitions=1/1 (t1)                                   |\n|      tablets=1/1, tabletList=491188                        |\n|      cardinality=21, avgRowSize=0.0, numNodes=1            |\n|      pushAggOp=NONE                                        |\n|                                                            |\n| PLAN FRAGMENT 1                                            |\n|                                                            |\n|   PARTITION: HASH_PARTITIONED: c2[#2]                      |\n|                                                            |\n|   HAS_COLO_PLAN_NODE: true                                 |\n|                                                            |\n|   STREAM DATA SINK                                         |\n|     EXCHANGE ID: 04                                        |\n|     BUCKET_SHFFULE_HASH_PARTITIONED: c2[#6]                |\n|                                                            |\n|   3:VAGGREGATE (merge finalize)(355)                       |\n|   |  output: sum(partial_sum(c1)[#3])[#5]                  |\n|   |  group by: c2[#2]                                      |\n|   |  sortByGroupKey:false                                  |\n|   |  cardinality=5                                         |\n|   |  final projections: c2[#4], c1[#5]                     |\n|   |  final project output tuple id: 3                      |\n|   |  distribute expr lists: c2[#2]                         |\n|   |                                                        |\n|   2:VEXCHANGE                                              |\n|      offset: 0                                             |\n|      distribute expr lists:                                |\n|                                                            |\n| PLAN FRAGMENT 2                                            |\n|                                                            |\n|   PARTITION: HASH_PARTITIONED: c1[#0]                      |\n|                                                            |\n|   HAS_COLO_PLAN_NODE: false                                |\n|                                                            |\n|   STREAM DATA SINK                                         |\n|     EXCHANGE ID: 02                                        |\n|     HASH_PARTITIONED: c2[#2]                               |\n|                                                            |\n|   1:VAGGREGATE (update serialize)(349)                     |\n|   |  STREAMING                                             |\n|   |  output: partial_sum(c1[#0])[#3]                       |\n|   |  group by: c2[#1]                                      |\n|   |  sortByGroupKey:false                                  |\n|   |  cardinality=5                                         |\n|   |  distribute expr lists: c1[#0]                         |\n|   |                                                        |\n|   0:VOlapScanNode(346)                                     |\n|      TABLE: tt.t2(t2), PREAGGREGATION: ON                  |\n|      partitions=1/1 (t2)                                   |\n|      tablets=1/1, tabletList=491198                        |\n|      cardinality=10, avgRowSize=0.0, numNodes=1            |\n|      pushAggOp=NONE                                        |\n|                                                            |\n|                                                            |\n| Statistics                                                 |\n|  planed with unknown column statistics                     |\n+------------------------------------------------------------+\n97 rows in set (0.01 sec)\n"})}),"\n",(0,o.jsx)(t.h3,{id:"example-of-colocate-join",children:"Example of Colocate Join"}),"\n",(0,o.jsx)(t.p,{children:"In the following example, both tables t1 and t2 have been processed by the GROUP BY operator, resulting in new tables (at this point, both tx and ty are hash-distributed by c2). The subsequent JOIN condition is tx.c2 = ty.c2, which perfectly meets the conditions for a Colocate Join."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sql",children:"explain select *\nfrom \n    (\n        -- The t1 table is initially hash-distributed by c1, but after the GROUP BY operator, the data distribution changes to be hash-distributed by c2.\n        select c2 as c2, sum(c1) as c1\n        from t1\n        group by c2 \n    ) tx\njoin \n    (\n        -- The t2 table is initially hash-distributed by c1, but after the GROUP BY operator, the data distribution changes to be hash-distributed by c2.\n        select c2 as c2, sum(c1) as c1\n        from t2\n        group by c2 \n    ) ty\non tx.c2 = ty.c2;\n"})}),"\n",(0,o.jsx)(t.p,{children:"From the results of the following Explain execution plan, it can be seen that the left child node of Hash Join node 8 is aggregation node 7, and the right child node is aggregation node 3, with no Exchange node present. This indicates that the aggregated data from both the left and right child nodes remains in its original location, eliminating the need for data movement and allowing the subsequent Hash Join operation to be performed directly locally."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sql",children:"+------------------------------------------------------------+\n| Explain String(Nereids Planner)                            |\n+------------------------------------------------------------+\n| PLAN FRAGMENT 0                                            |\n|   OUTPUT EXPRS:                                            |\n|     c2[#20]                                                |\n|     c1[#21]                                                |\n|     c2[#22]                                                |\n|     c1[#23]                                                |\n|   PARTITION: HASH_PARTITIONED: c2[#10]                     |\n|                                                            |\n|   HAS_COLO_PLAN_NODE: true                                 |\n|                                                            |\n|   VRESULT SINK                                             |\n|      MYSQL_PROTOCAL                                        |\n|                                                            |\n|   8:VHASH JOIN(373)                                        |\n|   |  join op: INNER JOIN(PARTITIONED)[]                    |\n|   |  equal join conjunct: (c2[#14] = c2[#6])               |\n|   |  cardinality=10                                        |\n|   |  vec output tuple id: 9                                |\n|   |  output tuple id: 9                                    |\n|   |  vIntermediate tuple ids: 8                            |\n|   |  hash output slot ids: 6 7 14 15                       |\n|   |  final projections: c2[#16], c1[#17], c2[#18], c1[#19] |\n|   |  final project output tuple id: 9                      |\n|   |  distribute expr lists: c2[#14]                        |\n|   |  distribute expr lists: c2[#6]                         |\n|   |                                                        |\n|   |----3:VAGGREGATE (merge finalize)(367)                  |\n|   |    |  output: sum(partial_sum(c1)[#3])[#5]             |\n|   |    |  group by: c2[#2]                                 |\n|   |    |  sortByGroupKey:false                             |\n|   |    |  cardinality=5                                    |\n|   |    |  final projections: c2[#4], c1[#5]                |\n|   |    |  final project output tuple id: 3                 |\n|   |    |  distribute expr lists: c2[#2]                    |\n|   |    |                                                   |\n|   |    2:VEXCHANGE                                         |\n|   |       offset: 0                                        |\n|   |       distribute expr lists:                           |\n|   |                                                        |\n|   7:VAGGREGATE (merge finalize)(354)                       |\n|   |  output: sum(partial_sum(c1)[#11])[#13]                |\n|   |  group by: c2[#10]                                     |\n|   |  sortByGroupKey:false                                  |\n|   |  cardinality=10                                        |\n|   |  final projections: c2[#12], c1[#13]                   |\n|   |  final project output tuple id: 7                      |\n|   |  distribute expr lists: c2[#10]                        |\n|   |                                                        |\n|   6:VEXCHANGE                                              |\n|      offset: 0                                             |\n|      distribute expr lists:                                |\n|                                                            |\n| PLAN FRAGMENT 1                                            |\n|                                                            |\n|   PARTITION: HASH_PARTITIONED: c1[#8]                      |\n|                                                            |\n|   HAS_COLO_PLAN_NODE: false                                |\n|                                                            |\n|   STREAM DATA SINK                                         |\n|     EXCHANGE ID: 06                                        |\n|     HASH_PARTITIONED: c2[#10]                              |\n|                                                            |\n|   5:VAGGREGATE (update serialize)(348)                     |\n|   |  STREAMING                                             |\n|   |  output: partial_sum(c1[#8])[#11]                      |\n|   |  group by: c2[#9]                                      |\n|   |  sortByGroupKey:false                                  |\n|   |  cardinality=10                                        |\n|   |  distribute expr lists: c1[#8]                         |\n|   |                                                        |\n|   4:VOlapScanNode(345)                                     |\n|      TABLE: tt.t1(t1), PREAGGREGATION: ON                  |\n|      partitions=1/1 (t1)                                   |\n|      tablets=1/1, tabletList=491188                        |\n|      cardinality=21, avgRowSize=0.0, numNodes=1            |\n|      pushAggOp=NONE                                        |\n|                                                            |\n| PLAN FRAGMENT 2                                            |\n|                                                            |\n|   PARTITION: HASH_PARTITIONED: c1[#0]                      |\n|                                                            |\n|   HAS_COLO_PLAN_NODE: false                                |\n|                                                            |\n|   STREAM DATA SINK                                         |\n|     EXCHANGE ID: 02                                        |\n|     HASH_PARTITIONED: c2[#2]                               |\n|                                                            |\n|   1:VAGGREGATE (update serialize)(361)                     |\n|   |  STREAMING                                             |\n|   |  output: partial_sum(c1[#0])[#3]                       |\n|   |  group by: c2[#1]                                      |\n|   |  sortByGroupKey:false                                  |\n|   |  cardinality=5                                         |\n|   |  distribute expr lists: c1[#0]                         |\n|   |                                                        |\n|   0:VOlapScanNode(358)                                     |\n|      TABLE: tt.t2(t2), PREAGGREGATION: ON                  |\n|      partitions=1/1 (t2)                                   |\n|      tablets=1/1, tabletList=491198                        |\n|      cardinality=10, avgRowSize=0.0, numNodes=1            |\n|      pushAggOp=NONE                                        |\n|                                                            |\n|                                                            |\n| Statistics                                                 |\n|  planed with unknown column statistics                     |\n+------------------------------------------------------------+\n105 rows in set (0.06 sec)\n"})}),"\n",(0,o.jsx)(t.h2,{id:"comparison-of-four-shuffle-methods",children:"Comparison of four shuffle methods"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Shuffle Methods"}),(0,o.jsx)(t.th,{children:"Network Overhead"}),(0,o.jsx)(t.th,{children:"Physical Operator"}),(0,o.jsx)(t.th,{children:"Applicable Scenarios"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Broadcast"}),(0,o.jsx)(t.td,{children:"N * T(R)"}),(0,o.jsx)(t.td,{children:"Hash Join /Nest Loop Join"}),(0,o.jsx)(t.td,{children:"General"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Shuffle"}),(0,o.jsx)(t.td,{children:"T(S) + T(R)"}),(0,o.jsx)(t.td,{children:"Hash Join"}),(0,o.jsx)(t.td,{children:"General"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Bucket Shuffle"}),(0,o.jsx)(t.td,{children:"T(R)"}),(0,o.jsx)(t.td,{children:"Hash Join"}),(0,o.jsx)(t.td,{children:"JOIN condition includes the left table's bucketed column, with the left table being single-partitioned."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Colocate"}),(0,o.jsx)(t.td,{children:"0"}),(0,o.jsx)(t.td,{children:"Hash Join"}),(0,o.jsx)(t.td,{children:"JOIN condition includes the left table's bucketed column, and both tables belong to the same Colocate Group."})]})]})]}),"\n",(0,o.jsxs)(t.admonition,{title:"NOTE",type:"info",children:[(0,o.jsx)(t.p,{children:"N: Number of instances participating in the Join calculation"}),(0,o.jsx)(t.p,{children:"T(Relation): Number of tuples in the relation"})]}),"\n",(0,o.jsx)(t.p,{children:"The flexibility of the four Shuffle methods decreases in order, and their requirements for data distribution become increasingly strict. In most cases, as the requirements for data distribution increase, the performance of Join calculations tends to improve gradually. It is important to note that if the number of buckets in a table is small, Bucket Shuffle or Colocate Join may experience a decrease in performance due to lower parallelism, potentially resulting in slower performance than Shuffle Join. This is because the Shuffle operation can more effectively balance data distribution, thereby providing higher parallelism in subsequent processing."}),"\n",(0,o.jsx)(t.h2,{id:"faq",children:"FAQ"}),"\n",(0,o.jsx)(t.p,{children:"Bucket Shuffle Join and Colocate Join have specific limitations regarding data distribution and JOIN conditions when applied. Below, we will elaborate on the specific restrictions for each of these JOIN methods."}),"\n",(0,o.jsx)(t.h3,{id:"limitations-of-bucket-shuffle-join",children:"Limitations of Bucket Shuffle Join"}),"\n",(0,o.jsx)(t.p,{children:"When directly scanning two physical tables for a Bucket Shuffle Join, the following conditions must be met:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Equality Join condition"}),": Bucket Shuffle Join is only applicable for scenarios where the JOIN condition is based on equality, as it relies on hash calculations to determine data distribution."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Inclusion of bucketed columns in equality conditions"}),": The equality JOIN condition must include the bucketed columns from both tables. When the left table's bucketed column is used as the equality JOIN condition, it is more likely to be planned as a Bucket Shuffle Join."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Table type restrictions"}),": Bucket Shuffle Join is only applicable to native OLAP tables in Doris. For external tables such as ODBC, MySQL, and ES, Bucket Shuffle Join cannot be effective when they are used as the left table."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Single Partition Requirement"}),": For partitioned tables, since the data distribution may differ across partitions, Bucket Shuffle Join is only guaranteed to be effective when the left table is a single partition. Therefore, when executing SQL, it is advisable to use ",(0,o.jsx)(t.code,{children:"WHERE"})," conditions to enable partition pruning strategies whenever possible."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"limitations-of-colocate-join",children:"Limitations of Colocate Join"}),"\n",(0,o.jsx)(t.p,{children:"When directly scanning two physical tables, Colocate Join has stricter limitations compared to Bucket Shuffle Join. In addition to meeting all the conditions for Bucket Shuffle Join, the following requirements must also be satisfied:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"bucket column types and counts are Same"}),": Not only must the types of the bucketed columns match, but the number of buckets must also be the same to ensure data distribution consistency."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Explicit specification of Colocation Group"}),": A Colocation Group must be explicitly specified; only tables within the same Colocation Group can participate in a Colocate Join."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Unstable state during replica repair or balancing"}),": During operations such as replica repair or balancing, the Colocation Group may be in an unstable state. In this case, the Colocate Join will degrade to a regular Join operation."]}),"\n"]}),"\n"]})]})}function d(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},212255:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/broadcast-join-1de67a712ee34e6c85a238f9988d33ab.jpg"},753969:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/bucket-shuffle-join-b0e7449164fd95a4e77e2f412b057433.png"},913130:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/colocate-join-aeaa5438e3138f1a72e706a4fb54417a.png"},802249:function(e,t,n){n.d(t,{Z:function(){return i}});let i=n.p+"assets/images/partition-shuffle-join-e2ba9ef3db8c1fc6c05f849f364b60cf.jpg"},250065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return a}});var i=n(667294);let o={},s=i.createContext(o);function a(e){let t=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);