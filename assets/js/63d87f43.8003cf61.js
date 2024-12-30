"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["482167"],{546603:function(e,n,i){i.r(n),i.d(n,{metadata:()=>t,contentTitle:()=>a,default:()=>h,assets:()=>l,toc:()=>d,frontMatter:()=>s});var t=JSON.parse('{"id":"query-acceleration/optimization-technology-principle/topn-optimization","title":"TOPN Query Optimization","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/query-acceleration/optimization-technology-principle/topn-optimization.md","sourceDirName":"query-acceleration/optimization-technology-principle","slug":"/query-acceleration/optimization-technology-principle/topn-optimization","permalink":"/docs/3.0/query-acceleration/optimization-technology-principle/topn-optimization","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"TOPN Query Optimization","language":"en"},"sidebar":"docs","previous":{"title":"Runtime Filter","permalink":"/docs/3.0/query-acceleration/optimization-technology-principle/runtime-filter"},"next":{"title":"Statistics","permalink":"/docs/3.0/query-acceleration/optimization-technology-principle/statistics"}}'),o=i("785893"),r=i("250065");let s={title:"TOPN Query Optimization",language:"en"},a=void 0,l={},d=[{value:"Advantages of TOPN",id:"advantages-of-topn",level:2},{value:"Limitations",id:"limitations",level:2},{value:"Configuration and Query Analysis",id:"configuration-and-query-analysis",level:2},{value:"Checking if TOPN Query Optimization is Enabled",id:"checking-if-topn-query-optimization-is-enabled",level:3},{value:"Checking the Effectiveness of TOPN Query Optimization During Execution",id:"checking-the-effectiveness-of-topn-query-optimization-during-execution",level:3}];function c(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"TOPN queries refer to queries that involve ORDER BY LIMIT operations, which are common in log retrieval and other detailed query scenarios. Doris automatically optimizes this type of query."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM tablex WHERE xxx ORDER BY c1,c2 ... LIMIT n\n"})}),"\n",(0,o.jsx)(n.h2,{id:"advantages-of-topn",children:"Advantages of TOPN"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"During execution, dynamic range filters are built for the sorting columns (e.g., c1 >= 1000), which automatically apply the preceding conditions when reading data, leveraging zonemap indexes to filter out some rows or even entire files."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"If the sorting fields c1, c2 are exactly the prefix of the table key, further optimization is applied. When reading data, only the header or tail of the data files is read, reducing the amount of data read to just the n rows needed."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"SELECT * deferred materialization, during the data reading and sorting process, only the sorting columns are read, not the other columns. After obtaining the row numbers that meet the conditions, the entire data of those n rows needed is read, significantly reducing the amount of data read and sorted."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"limitations",children:"Limitations"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"It only applies to DUP and MOW tables, not to MOR and AGG tables."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Due to the high memory consumption on very large ",(0,o.jsx)(n.code,{children:"n"}),", it will not take effect if n is greater than ",(0,o.jsx)(n.code,{children:"topn_opt_limit_threshold"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"configuration-and-query-analysis",children:"Configuration and Query Analysis"}),"\n",(0,o.jsx)(n.p,{children:"The following two parameters are session variables that can be set for a specific SQL or globally."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"topn_opt_limit_threshold"}),": This session variable determines whether TOPN optimization is applied. It defaults to 1024, and setting it to 0 disables the optimization."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"enable_two_phase_read_optimization"}),": This session variable determines whether to enable this optimization. It defaults to true, and setting it to false disables the optimization."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"topn_filter_ratio"}),", the ratio between LIMIT n and the total data in the table, the default value is 0.5, which means that if the number of LIMIT is more than half of the data in the table, no filter will be generated."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"checking-if-topn-query-optimization-is-enabled",children:"Checking if TOPN Query Optimization is Enabled"}),"\n",(0,o.jsxs)(n.p,{children:["To confirm if TOPN query optimization is enabled for a particular SQL, you can use the ",(0,o.jsx)(n.code,{children:"EXPLAIN"})," statement to get the query plan. An example is as follows:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"TOPN OPT"})," indicates that optimization point 1 is applied."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"VOlapScanNode"})," with ",(0,o.jsx)(n.code,{children:"SORT LIMIT"})," indicates optimization point 2 is applied."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"OPT TWO PHASE"})," indicates optimization point 3 is applied."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"   1:VTOP-N(137)\n   |   order by: @timestamp18 DESC\n   |   TOPN OPT\n   |   OPT TWO PHASE\n   |   offset: 0\n   |   limit: 10\n   |   distribute expr lists: applicationName5\n   |  \n   0:VOlapScanNode(106)\n      TABLE: log_db.log_core_all_no_index(log_core_all_no_index), PREAGGREGATION: ON\n      SORT INFO:\n           @timestamp18\n      SORT LIMIT: 10\n      TOPN OPT:1\n      PREDICATES: ZYCFC-TRACE-ID4 like '%flowId-1720055220933%'\n      partitions=1/8 (p20240704), tablets=250/250, tabletList=1727094,1727096,1727098 ...\n      cardinality=345472780, avgRowSize=0.0, numNodes=1\n      pushAggOp=NONE\n"})}),"\n",(0,o.jsx)(n.h3,{id:"checking-the-effectiveness-of-topn-query-optimization-during-execution",children:"Checking the Effectiveness of TOPN Query Optimization During Execution"}),"\n",(0,o.jsxs)(n.p,{children:["First, set ",(0,o.jsx)(n.code,{children:"topn_opt_limit_threshold"})," to 0 to disable TOPN query optimization and compare the execution time of the SQL with and without optimization enabled."]}),"\n",(0,o.jsxs)(n.p,{children:["After enabling TOPN query optimization, search for ",(0,o.jsx)(n.code,{children:"RuntimePredicate"})," in the query profile and focus on the following metrics:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"RowsZonemapRuntimePredicateFiltered"}),": The number of rows filtered out, the higher the better."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"NumSegmentFiltered"}),": The number of data files filtered out, the higher the better."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"BlockConditionsFilteredZonemapRuntimePredicateTime"}),": The time taken to filter data, the lower the better."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Before version 2.0.3, the ",(0,o.jsx)(n.code,{children:"RuntimePredicate"})," metrics were not separated out, and the ",(0,o.jsx)(n.code,{children:"Zonemap"})," metrics can be used as a rough guide."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"    SegmentIterator:\n          -  BitmapIndexFilterTimer:  46.54us\n          -  BlockConditionsFilteredBloomFilterTime:  10.352us\n          -  BlockConditionsFilteredDictTime:  7.299us\n          -  BlockConditionsFilteredTime:  202.23ms\n          -  BlockConditionsFilteredZonemapRuntimePredicateTime:  0ns\n          -  BlockConditionsFilteredZonemapTime:  402.917ms\n          -  BlockInitSeekCount:  399\n          -  BlockInitSeekTime:  11.309ms\n          -  BlockInitTime:  215.59ms\n          -  BlockLoadTime:  7s567ms\n          -  BlocksLoad:  392.97K  (392970)\n          -  CachedPagesNum:  0\n          -  CollectIteratorMergeTime:  0ns\n          -  CollectIteratorNormalTime:  0ns\n          -  CompressedBytesRead:  29.76  MB\n          -  DecompressorTimer:  427.713ms\n          -  ExprFilterEvalTime:  3s930ms\n          -  FirstReadSeekCount:  392.921K  (392921)\n          -  FirstReadSeekTime:  528.287ms\n          -  FirstReadTime:  1s134ms\n          -  IOTimer:  51.286ms\n          -  InvertedIndexFilterTime:  49.457us\n          -  InvertedIndexQueryBitmapCopyTime:  0ns\n          -  InvertedIndexQueryBitmapOpTime:  0ns\n          -  InvertedIndexQueryCacheHit:  0\n          -  InvertedIndexQueryCacheMiss:  0\n          -  InvertedIndexQueryTime:  0ns\n          -  InvertedIndexSearcherOpenTime:  0ns\n          -  InvertedIndexSearcherSearchTime:  0ns\n          -  LazyReadSeekCount:  0\n          -  LazyReadSeekTime:  0ns\n          -  LazyReadTime:  106.952us\n          -  NumSegmentFiltered:  0\n          -  NumSegmentTotal:  50\n          -  OutputColumnTime:  61.987ms\n          -  OutputIndexResultColumnTimer:  12.345ms\n          -  RawRowsRead:  3.929151M  (3929151)\n          -  RowsBitmapIndexFiltered:  0\n          -  RowsBloomFilterFiltered:  0\n          -  RowsConditionsFiltered:  6.38976M  (6389760)\n          -  RowsDictFiltered:  0\n          -  RowsInvertedIndexFiltered:  0\n          -  RowsKeyRangeFiltered:  0\n          -  RowsShortCircuitPredFiltered:  0\n          -  RowsShortCircuitPredInput:  0\n          -  RowsStatsFiltered:  6.38976M  (6389760)\n          -  RowsVectorPredFiltered:  0\n          -  RowsVectorPredInput:  0\n          -  RowsZonemapRuntimePredicateFiltered:  6.38976M  (6389760)\n          -  SecondReadTime:  0ns\n          -  ShortPredEvalTime:  0ns\n          -  TotalPagesNum:  2.301K  (2301)\n          -  UncompressedBytesRead:  137.99  MB\n          -  VectorPredEvalTime:  0ns\n"})})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return a},a:function(){return s}});var t=i(667294);let o={},r=t.createContext(o);function s(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);