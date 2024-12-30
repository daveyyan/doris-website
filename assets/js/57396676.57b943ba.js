"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["269989"],{687292:function(n,e,i){i.r(e),i.d(e,{metadata:()=>t,contentTitle:()=>o,default:()=>d,assets:()=>l,toc:()=>c,frontMatter:()=>s});var t=JSON.parse('{"id":"query-acceleration/tuning/tuning-plan/reordering-join-with-leading-hint","title":"Reordering Join With Leading Hint","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/query-acceleration/tuning/tuning-plan/reordering-join-with-leading-hint.md","sourceDirName":"query-acceleration/tuning/tuning-plan","slug":"/query-acceleration/tuning/tuning-plan/reordering-join-with-leading-hint","permalink":"/docs/query-acceleration/tuning/tuning-plan/reordering-join-with-leading-hint","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Reordering Join With Leading Hint","language":"en"},"sidebar":"docs","previous":{"title":"Control CBO Rules With Hint","permalink":"/docs/query-acceleration/tuning/tuning-plan/controlling-hints-with-cbo-rule"},"next":{"title":"Accelerating Queries with SQL Cache","permalink":"/docs/query-acceleration/tuning/tuning-plan/accelerating-queries-with-sql-cache"}}'),r=i("785893"),a=i("250065");let s={title:"Reordering Join With Leading Hint",language:"en"},o=void 0,l={},c=[{value:"Overview",id:"overview",level:2},{value:"Case 1: Adjusting the Left and Right Table Order",id:"case-1-adjusting-the-left-and-right-table-order",level:2},{value:"Case 2: Forcing the Generation of a Left-Deep Tree",id:"case-2-forcing-the-generation-of-a-left-deep-tree",level:2},{value:"Case 3: Forcing the Generation of a Right-Deep Tree",id:"case-3-forcing-the-generation-of-a-right-deep-tree",level:2},{value:"Case 4: Forcing the Generation of a Bushy Tree",id:"case-4-forcing-the-generation-of-a-bushy-tree",level:2},{value:"Case 5: View Participating in the Join as a Whole",id:"case-5-view-participating-in-the-join-as-a-whole",level:2},{value:"Case 6: Mixing DistributeHint and LeadingHint",id:"case-6-mixing-distributehint-and-leadinghint",level:2},{value:"Summary",id:"summary",level:2}];function h(n){let e={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(e.p,{children:["The Leading Hint feature allows users to manually specify the join order of tables in a query, optimizing the performance of complex queries in specific scenarios. This article will describe in detail how to use Leading Hint to control the join order in Doris. For detailed usage instructions, please refer to the ",(0,r.jsx)(e.a,{href:"/docs/query-acceleration/hints/leading-hint",children:"leading hint"})," document."]}),"\n",(0,r.jsx)(e.admonition,{title:"Note",type:"caution",children:(0,r.jsx)(e.p,{children:"Currently, Doris has good out-of-the-box capabilities. This means that in most scenarios, Doris will adaptively optimize performance in various scenarios, and users do not need to manually control hints for performance tuning. The content introduced in this chapter is mainly for professional tuners, and business personnel only need a simple understanding."})}),"\n",(0,r.jsx)(e.h2,{id:"case-1-adjusting-the-left-and-right-table-order",children:"Case 1: Adjusting the Left and Right Table Order"}),"\n",(0,r.jsx)(e.p,{children:"For the following query:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"mysql> explain shape plan select from t1 join t2 on t1.c1 = t2.c2;\r\n+------------------------------------------------------------------------------+\r\n| _Explain_ String(Nereids Planner)                                              |\r\n+------------------------------------------------------------------------------+\r\n| PhysicalResultSink                                                           |\r\n| --PhysicalDistribute[DistributionSpecGather]                                 |\r\n| ----PhysicalProject                                                          |\r\n| ------hashJoin[INNER_JOIN] hashCondition=((t1.c1 = t2.c2)) otherCondition=() |\r\n| --------PhysicalOlapScan[t1]                                                 |\r\n| --------PhysicalDistribute[DistributionSpecHash]                             |\r\n| ----------PhysicalOlapScan[t2]                                               |\r\n+------------------------------------------------------------------------------+\n"})}),"\n",(0,r.jsx)(e.p,{children:"You can use Leading Hint to force the join order to be t2 join t1 and adjust the original join order."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"mysql> explain shape plan select /*+ leading(t2 t1) */ * from t1 join t2 on t1.c1 = t2.c2;\r\n+------------------------------------------------------------------------------+\r\n| _Explain_ String(Nereids Planner)                                              |\r\n+------------------------------------------------------------------------------+\r\n| PhysicalResultSink                                                           |\r\n| --PhysicalDistribute[DistributionSpecGather]                                 |\r\n| ----PhysicalProject                                                          |\r\n| ------hashJoin[INNER_JOIN] hashCondition=((t1.c1 = t2.c2)) otherCondition=() |\r\n| --------PhysicalOlapScan[t2]                                                 |\r\n| --------PhysicalDistribute[DistributionSpecHash]                             |\r\n| ----------PhysicalOlapScan[t1]                                               |\r\n|                                                                              |\r\n| Hint log:                                                                    |\r\n| Used: leading(t2 t1)                                                         |\r\n| UnUsed:                                                                      |\r\n| SyntaxError:                                                                 |\r\n+------------------------------------------------------------------------------+\n"})}),"\n",(0,r.jsxs)(e.p,{children:["The Hint log shows the successfully applied hint: Used: ",(0,r.jsx)(e.code,{children:"leading(t2 t1)"}),"."]}),"\n",(0,r.jsx)(e.h2,{id:"case-2-forcing-the-generation-of-a-left-deep-tree",children:"Case 2: Forcing the Generation of a Left-Deep Tree"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"mysql> explain shape plan select /*+ leading(t1 t2 t3) */ * from t1 join t2 on t1.c1 = t2.c2 join t3 on t2.c2 = t3.c3;\r\n+--------------------------------------------------------------------------------+\r\n| _Explain_ String(Nereids Planner)                                                |\r\n+--------------------------------------------------------------------------------+\r\n| PhysicalResultSink                                                             |\r\n| --PhysicalDistribute[DistributionSpecGather]                                   |\r\n| ----PhysicalProject                                                            |\r\n| ------hashJoin[INNER_JOIN] hashCondition=((t2.c2 = t3.c3)) otherCondition=()   |\r\n| --------hashJoin[INNER_JOIN] hashCondition=((t1.c1 = t2.c2)) otherCondition=() |\r\n| ----------PhysicalOlapScan[t1]                                                 |\r\n| ----------PhysicalDistribute[DistributionSpecHash]                             |\r\n| ------------PhysicalOlapScan[t2]                                               |\r\n| --------PhysicalDistribute[DistributionSpecHash]                               |\r\n| ----------PhysicalOlapScan[t3]                                                 |\r\n|                                                                                |\r\n| Hint log:                                                                      |\r\n| Used: leading(t1 t2 t3)                                                        |\r\n| UnUsed:                                                                        |\r\n| SyntaxError:                                                                   |\r\n+--------------------------------------------------------------------------------+\n"})}),"\n",(0,r.jsxs)(e.p,{children:["Similarly, the Hint log shows the successfully applied hint: ",(0,r.jsx)(e.code,{children:"Used: leading(t1 t2 t3)"}),"."]}),"\n",(0,r.jsx)(e.h2,{id:"case-3-forcing-the-generation-of-a-right-deep-tree",children:"Case 3: Forcing the Generation of a Right-Deep Tree"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"mysql> explain shape plan select /*+ leading(t1 {t2 t3}) */ * from t1 join t2 on t1.c1 = t2.c2 join t3 on t2.c2 = t3.c3;\r\n+----------------------------------------------------------------------------------+\r\n| _Explain_ String(Nereids Planner)                                                  |\r\n+----------------------------------------------------------------------------------+\r\n| PhysicalResultSink                                                               |\r\n| --PhysicalDistribute[DistributionSpecGather]                                     |\r\n| ----PhysicalProject                                                              |\r\n| ------hashJoin[INNER_JOIN] hashCondition=((t1.c1 = t2.c2)) otherCondition=()     |\r\n| --------PhysicalOlapScan[t1]                                                     |\r\n| --------PhysicalDistribute[DistributionSpecHash]                                 |\r\n| ----------hashJoin[INNER_JOIN] hashCondition=((t2.c2 = t3.c3)) otherCondition=() |\r\n| ------------PhysicalOlapScan[t2]                                                 |\r\n| ------------PhysicalDistribute[DistributionSpecHash]                             |\r\n| --------------PhysicalOlapScan[t3]                                               |\r\n|                                                                                  |\r\n| Hint log:                                                                        |\r\n| Used: leading(t1 { t2 t3 })                                                      |\r\n| UnUsed:                                                                          |\r\n| SyntaxError:                                                                     |\r\n+----------------------------------------------------------------------------------+\n"})}),"\n",(0,r.jsxs)(e.p,{children:["Similarly, the Hint log shows the successfully applied hint: ",(0,r.jsx)(e.code,{children:"Used: leading(t1 { t2 t3 })"}),"."]}),"\n",(0,r.jsx)(e.h2,{id:"case-4-forcing-the-generation-of-a-bushy-tree",children:"Case 4: Forcing the Generation of a Bushy Tree"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"mysql> explain shape plan select /*+ leading({t1 t2} {t3 t4}) */ * from t1 join t2 on t1.c1 = t2.c2 join t3 on t2.c2 = t3.c3 join t4 on t3.c3 = t4.c4;\r\n+-----------------------------------------------+\r\n| _Explain_ String                                |\r\n+-----------------------------------------------+\r\n| PhysicalResultSink                            |\r\n| --PhysicalDistribute                          |\r\n| ----PhysicalProject                           |\r\n| ------hashJoin[INNER_JOIN](t2.c2 = t3.c3)     |\r\n| --------hashJoin[INNER_JOIN](t1.c1 = t2.c2)   |\r\n| ----------PhysicalOlapScan[t1]                |\r\n| ----------PhysicalDistribute                  |\r\n| ------------PhysicalOlapScan[t2]              |\r\n| --------PhysicalDistribute                    |\r\n| ----------hashJoin[INNER_JOIN](t3.c3 = t4.c4) |\r\n| ------------PhysicalOlapScan[t3]              |\r\n| ------------PhysicalDistribute                |\r\n| --------------PhysicalOlapScan[t4]            |\r\n|                                               |\r\n| Used: leading({ t1 t2 } { t3 t4 })            |\r\n| UnUsed:                                       |\r\n| SyntaxError:                                  |\r\n+-----------------------------------------------+\n"})}),"\n",(0,r.jsxs)(e.p,{children:["Similarly, the Hint log shows the successfully applied hint: ",(0,r.jsx)(e.code,{children:"Used: leading({ t1 t2 } { t3 t4 })"}),"."]}),"\n",(0,r.jsx)(e.h2,{id:"case-5-view-participating-in-the-join-as-a-whole",children:"Case 5: View Participating in the Join as a Whole"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"mysql>  explain shape plan select /*+ leading(alias t1) */ count(*) from t1 join (select c2 from t2 join t3 on t2.c2 = t3.c3) as alias on t1.c1 = alias.c2;\r\n+--------------------------------------------------------------------------------------+\r\n| _Explain_ String(Nereids Planner)                                                      |\r\n+--------------------------------------------------------------------------------------+\r\n| PhysicalResultSink                                                                   |\r\n| --hashAgg[GLOBAL]                                                                    |\r\n| ----PhysicalDistribute[DistributionSpecGather]                                       |\r\n| ------hashAgg[LOCAL]                                                                 |\r\n| --------PhysicalProject                                                              |\r\n| ----------hashJoin[INNER_JOIN] hashCondition=((t1.c1 = alias.c2)) otherCondition=()  |\r\n| ------------PhysicalProject                                                          |\r\n| --------------hashJoin[INNER_JOIN] hashCondition=((t2.c2 = t3.c3)) otherCondition=() |\r\n| ----------------PhysicalProject                                                      |\r\n| ------------------PhysicalOlapScan[t2]                                               |\r\n| ----------------PhysicalDistribute[DistributionSpecHash]                             |\r\n| ------------------PhysicalProject                                                    |\r\n| --------------------PhysicalOlapScan[t3]                                             |\r\n| ------------PhysicalDistribute[DistributionSpecHash]                                 |\r\n| --------------PhysicalProject                                                        |\r\n| ----------------PhysicalOlapScan[t1]                                                 |\r\n|                                                                                      |\r\n| Hint log:                                                                            |\r\n| Used: leading(alias t1)                                                              |\r\n| UnUsed:                                                                              |\r\n| SyntaxError:                                                                         |\r\n+--------------------------------------------------------------------------------------+\n"})}),"\n",(0,r.jsxs)(e.p,{children:["Similarly, the Hint log shows the successfully applied hint: ",(0,r.jsx)(e.code,{children:"Used: leading(alias t1)"}),"."]}),"\n",(0,r.jsx)(e.h2,{id:"case-6-mixing-distributehint-and-leadinghint",children:"Case 6: Mixing DistributeHint and LeadingHint"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"explain shape plan\r\n    select \r\n        nation,\r\n        o_year,\r\n        sum(amount) as sum_profit\r\n    from\r\n        (\r\n            select\r\n                /*+ leading(orders shuffle {lineitem shuffle part} shuffle {supplier broadcast nation} shuffle partsupp) */\r\n                n_name as nation,\r\n                extract(year from o_orderdate) as o_year,\r\n                l_extendedprice * (1 - l_discount) - ps_supplycost * l_quantity as amount\r\n            from\r\n                part,\r\n                supplier,\r\n                lineitem,\r\n                partsupp,\r\n                orders,\r\n                nation\r\n            where\r\n                s_suppkey = l_suppkey\r\n                and ps_suppkey = l_suppkey\r\n                and ps_partkey = l_partkey\r\n                and p_partkey = l_partkey\r\n                and o_orderkey = l_orderkey\r\n                and s_nationkey = n_nationkey\r\n                and p_name like '%green%'\r\n        ) as profit\r\n    group by\r\n        nation,\r\n        o_year\r\n    order by\r\n        nation,\r\n        o_year desc;\n"})}),"\n",(0,r.jsxs)(e.p,{children:["The above hint specification ",(0,r.jsx)(e.code,{children:"/*+ leading(orders shuffle {lineitem shuffle part} shuffle {supplier broadcast nation} shuffle partsupp) */"})," mixes the two formats of leading and distribute hint. Leading is used to control the relative join order among the overall tables, while shuffle and broadcast are used to specify the shuffle method for specific joins. By combining the two, the connection order and connection method can be flexibly controlled, making it convenient to manually control the expected plan behavior of the user."]}),"\n",(0,r.jsx)(e.admonition,{title:"Usage Suggestions",type:"caution",children:(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"It is recommended to use EXPLAIN to carefully analyze the execution plan to ensure that the Leading Hint can achieve the expected effect."}),"\n",(0,r.jsx)(e.li,{children:"When the Doris version is upgraded or the business data changes, the effect of the Leading Hint should be re-evaluated, and timely recording and adjustment should be made."}),"\n"]})}),"\n",(0,r.jsx)(e.h2,{id:"summary",children:"Summary"}),"\n",(0,r.jsx)(e.p,{children:"Leading Hint is a powerful function that can manually control the connection order. At the same time, it can also be combined with the shuffle hint to control the join distribution method at the same time, thereby optimizing the query performance. Note that this advanced feature should be used with caution based on a full understanding of the query characteristics and data distribution."})]})}function d(n={}){let{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(h,{...n})}):h(n)}},250065:function(n,e,i){i.d(e,{Z:function(){return o},a:function(){return s}});var t=i(667294);let r={},a=t.createContext(r);function s(n){let e=t.useContext(a);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:s(n.components),t.createElement(a.Provider,{value:e},n.children)}}}]);