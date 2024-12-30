"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["870055"],{991084:function(e,t,n){n.r(t),n.d(t,{metadata:()=>i,contentTitle:()=>a,default:()=>d,assets:()=>r,toc:()=>h,frontMatter:()=>o});var i=JSON.parse('{"id":"query-acceleration/distinct-counts/using-hll","title":"Approximate Deduplication Using HLL","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/query-acceleration/distinct-counts/using-hll.md","sourceDirName":"query-acceleration/distinct-counts","slug":"/query-acceleration/distinct-counts/using-hll","permalink":"/docs/3.0/query-acceleration/distinct-counts/using-hll","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"Approximate Deduplication Using HLL","language":"en"},"sidebar":"docs","previous":{"title":"Orthogonal BITMAP Calculation","permalink":"/docs/3.0/query-acceleration/distinct-counts/orthogonal-bitmap-manual"},"next":{"title":"Colocation Join","permalink":"/docs/3.0/query-acceleration/colocation-join"}}'),s=n("785893"),l=n("250065");let o={title:"Approximate Deduplication Using HLL",language:"en"},a=void 0,r={},h=[{value:"HLL approximate deduplication",id:"hll-approximate-deduplication",level:2},{value:"What is HyperLogLog",id:"what-is-hyperloglog",level:2},{value:"Doris HLL Function",id:"doris-hll-function",level:2},{value:"How to use Doris HLL",id:"how-to-use-doris-hll",level:2},{value:"Create a table with hll column",id:"create-a-table-with-hll-column",level:3},{value:"Import Data",id:"import-data",level:3}];function c(e){let t={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"hll-approximate-deduplication",children:"HLL approximate deduplication"}),"\n",(0,s.jsx)(t.p,{children:"In actual business scenarios, with the increasing amount of business data, the pressure on data deduplication is also increasing. When the data reaches a certain scale, the cost of using accurate deduplication is also increasing. If it is acceptable, it is a very good way to achieve fast deduplication and reduce computational pressure through approximate algorithms. This article mainly introduces HyperLogLog (HLL for short) provided by Doris as an approximate deduplication algorithm."}),"\n",(0,s.jsx)(t.p,{children:"The characteristic of HLL is that it has excellent space complexity O(mloglogn), time complexity is O(n), and the error of the calculation result can be controlled at about 1%-2%. The error is related to the size of the data set and the ha related to the Hierarchy function."}),"\n",(0,s.jsx)(t.h2,{id:"what-is-hyperloglog",children:"What is HyperLogLog"}),"\n",(0,s.jsxs)(t.p,{children:["It is an upgraded version of the LogLog algorithm, and its role is to provide imprecise deduplication counts. Its mathematical basis is the ",(0,s.jsx)(t.strong,{children:"Bernoulli test"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Assuming that the coin has both heads and tails, the probability of the coin being flipped up and down is 50%. Keep flipping the coin until it comes up heads, which we record as a full trial."}),"\n",(0,s.jsx)(t.p,{children:"Then for multiple Bernoulli trials, assume that the number of times is n. It means that there are n times of heads. Suppose the number of tosses experienced per Bernoulli trial is k. For the first Bernoulli trial, the number of times is set to k1, and so on, the nth time corresponds to kn."}),"\n",(0,s.jsx)(t.p,{children:"Among them, for these n Bernoulli trials, there must be a maximum number of tosses k. For example, after 12 tosses, a head will appear, then this is called k_max, which represents the maximum number of tosses."}),"\n",(0,s.jsx)(t.p,{children:"Bernoulli's experiment can easily draw the following conclusions:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"No number of throws for n Bernoulli processes is greater than k_max."}),"\n",(0,s.jsx)(t.li,{children:"n Bernoulli processes with at least one throw equal to k_max"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Finally, combined with the method of maximum likelihood estimation, it is found that there is an estimated correlation between n and k_max: n = 2^k_max. **When we only record k_max, we can estimate how many pieces of data there are in total, that is, the cardinality. **"}),"\n",(0,s.jsx)(t.p,{children:"Suppose the test results are as follows:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"1st trial: 3 tosses before it turns heads, at this time k=3, n=1"}),"\n",(0,s.jsx)(t.li,{children:"2nd trial: Heads appear after 2 tosses, at this time k=2, n=2"}),"\n",(0,s.jsx)(t.li,{children:"The 3rd trial: 6 tosses before the heads appear, at this time k=6, n=3"}),"\n",(0,s.jsx)(t.li,{children:"The nth trial: it took 12 tosses to get heads, at this point we estimate, n = 2^12"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Take the first three groups of experiments in the above example, then k_max = 6, and finally n=3, we put it into the estimation formula, obviously: 3 \u2260 2^6 . That is to say, when the number of trials is small, the error of this estimation method is very large."}),"\n",(0,s.jsx)(t.p,{children:"These three sets of trials, we call one round of estimation. If only one round is performed, when n is large enough, the estimated error rate will be relatively reduced, but still not small enough."}),"\n",(0,s.jsx)(t.h2,{id:"doris-hll-function",children:"Doris HLL Function"}),"\n",(0,s.jsx)(t.p,{children:"HLL is an engineering implementation based on the HyperLogLog algorithm. It is used to save the intermediate results of the HyperLogLog calculation process. It can only be used as the value column type of the table to continuously reduce the amount of data through aggregation."}),"\n",(0,s.jsx)(t.p,{children:"To achieve the purpose of speeding up the query, based on it is an estimated result, the error is about 1%, the hll column is generated by other columns or the data in the imported data, and the hll_hash function is used when importing"}),"\n",(0,s.jsx)(t.p,{children:"To specify which column in the data is used to generate the hll column, it is often used to replace count distinct, and is used to quickly calculate uv in business by combining rollup"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"HLL_UNION_AGG(hll)"})}),"\n",(0,s.jsx)(t.p,{children:"This function is an aggregate function that computes a cardinality estimate for all data that satisfies the condition."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"HLL_CARDINALITY(hll)"})}),"\n",(0,s.jsx)(t.p,{children:"This function is used to calculate the cardinality estimate for a single hll column"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"HLL_HASH(column_name)"})}),"\n",(0,s.jsx)(t.p,{children:"Generate HLL column type for insert or import, see related instructions for import usage"}),"\n",(0,s.jsx)(t.h2,{id:"how-to-use-doris-hll",children:"How to use Doris HLL"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"When using HLL to deduplicate, you need to set the target column type to HLL and the aggregate function to HLL_UNION in the table creation statement"}),"\n",(0,s.jsx)(t.li,{children:"Columns of HLL type cannot be used as Key columns"}),"\n",(0,s.jsx)(t.li,{children:"The user does not need to specify the length and default value, the length is controlled within the system according to the degree of data aggregation"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"create-a-table-with-hll-column",children:"Create a table with hll column"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:'create table test_hll(\n	dt date,\n	id int,\n	name char(10),\n	province char(10),\n	os char(10),\n	pv hll hll_union\n)\nAggregate KEY (dt,id,name,province,os)\ndistributed by hash(id) buckets 10\nPROPERTIES(\n	"replication_num" = "1",\n	"in_memory"="false"\n);\n'})}),"\n",(0,s.jsx)(t.h3,{id:"import-data",children:"Import Data"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Stream load Import"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'curl --location-trusted -u root: -H "label:label_test_hll_load" \\\n    -H "column_separator:," \\\n    -H "columns:dt,id,name,province,os, pv=hll_hash(id)" -T test_hll.csv http://fe_IP:8030/api/demo/test_hll/_stream_load\n'})}),"\n",(0,s.jsx)(t.p,{children:"The sample data is as follows (test_hll.csv):"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-text"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["2022-05-05,10001,Testing01,Beijing,Windows",(0,s.jsx)(t.br,{}),"\n2022-05-05,10002,Testing01,Beijing,Linux",(0,s.jsx)(t.br,{}),"\n2022-05-05,10003,Testing01,Beijing,MacOS",(0,s.jsx)(t.br,{}),"\n2022-05-05,10004,Testing01,Hebei,Windows",(0,s.jsx)(t.br,{}),"\n2022-05-06,10001,Testing01,Shanghai,Windows",(0,s.jsx)(t.br,{}),"\n2022-05-06,10002,Testing01,Shanghai,Linux",(0,s.jsx)(t.br,{}),"\n2022-05-06,10003,Testing01,Jiangsu,MacOS",(0,s.jsx)(t.br,{}),"\n2022-05-06,10004,Testing01,Shaanxi,Windows"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"\nThe import result is as follows:\n\n"})}),"\n",(0,s.jsxs)(t.h1,{id:"curl---location-trusted--u-root--h-label------h-column_separator------h-columnsidnameprovinceos-pvhll_hashid--t-test_hllcsv-http1270018030apidemotest_hll_stream_load",children:['curl --location-trusted -u root: -H "label:label_test_hll_load"     -H "column_separator:,"     -H "columns:dt,id,name,province,os, pv=hll_hash(id)" -T test_hll.csv ',(0,s.jsx)(t.a,{href:"http://127.0.0.1:8030/api/demo/test_hll/_stream_load",children:"http://127.0.0.1:8030/api/demo/test_hll/_stream_load"})]}),"\n",(0,s.jsx)(t.p,{children:'{\n"TxnId": 693,\n"Label": "label_test_hll_load",\n"TwoPhaseCommit": "false",\n"Status": "Success",\n"Message": "OK",\n"NumberTotalRows": 8,\n"NumberLoadedRows": 8,\n"NumberFilteredRows": 0,\n"NumberUnselectedRows": 0,\n"LoadBytes": 320,\n"LoadTimeMs": 23,\n"BeginTxnTimeMs": 0,\n"StreamLoadPutTimeMs": 1,\n"ReadDataTimeMs": 0,\n"WriteDataTimeMs": 9,\n"CommitAndPublishTimeMs": 11\n}'}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"\n2. Broker Load\n\n"})}),"\n",(0,s.jsxs)(t.p,{children:['LOAD LABEL demo.test_hlllabel\n(\nDATA INFILE("hdfs://hdfs_host:hdfs_port/user/doris_test_hll/data/input/file")\nINTO TABLE ',(0,s.jsx)(t.code,{children:"test_hll"}),'\nCOLUMNS TERMINATED BY ","\n(dt,id,name,province,os)\nSET (\npv = HLL_HASH(id)\n)\n);']}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"\n### Query data\n\nHLL columns do not allow direct query of the original value, but can only be queried through the HLL aggregate function.\n\n1. Find the total PV\n\n```sql\nmysql> select HLL_UNION_AGG(pv) from test_hll;\n+---------------------+\n| hll_union_agg(`pv`) |\n+---------------------+\n|                   4 |\n+---------------------+\n1 row in set (0.00 sec)\n"})}),"\n",(0,s.jsx)(t.p,{children:"Equivalent to:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"mysql> SELECT COUNT(DISTINCT pv) FROM test_hll;\n+----------------------+\n| count(DISTINCT `pv`) |\n+----------------------+\n|                    4 |\n+----------------------+\n1 row in set (0.01 sec)\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsx)(t.li,{children:"Find the PV of each day"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"mysql> select HLL_UNION_AGG(pv) from test_hll group by dt;\n+---------------------+\n| hll_union_agg(`pv`) |\n+---------------------+\n|                   4 |\n|                   4 |\n+---------------------+\n2 rows in set (0.01 sec)\n"})})]})}function d(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return o}});var i=n(667294);let s={},l=i.createContext(s);function o(e){let t=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);