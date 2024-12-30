"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["22474"],{696545:function(e,n,i){i.r(n),i.d(n,{metadata:()=>l,contentTitle:()=>c,default:()=>d,assets:()=>p,toc:()=>o,frontMatter:()=>r});var l=JSON.parse('{"id":"query-acceleration/optimization-technology-principle/pipeline-execution-engine","title":"\u5E76\u884C\u6267\u884C","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/query-acceleration/optimization-technology-principle/pipeline-execution-engine.md","sourceDirName":"query-acceleration/optimization-technology-principle","slug":"/query-acceleration/optimization-technology-principle/pipeline-execution-engine","permalink":"/zh-CN/docs/3.0/query-acceleration/optimization-technology-principle/pipeline-execution-engine","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"\u5E76\u884C\u6267\u884C","language":"zh-CN","toc_min_heading_level":2,"toc_max_heading_level":4},"sidebar":"docs","previous":{"title":"\u67E5\u8BE2\u4F18\u5316\u5668\u4ECB\u7ECD","permalink":"/zh-CN/docs/3.0/query-acceleration/optimization-technology-principle/query-optimizer"},"next":{"title":"Runtime Filter","permalink":"/zh-CN/docs/3.0/query-acceleration/optimization-technology-principle/runtime-filter"}}'),a=i("785893"),t=i("250065");let r={title:"\u5E76\u884C\u6267\u884C",language:"zh-CN",toc_min_heading_level:2,toc_max_heading_level:4},c=void 0,p={},o=[{value:"\u7269\u7406\u8BA1\u5212",id:"\u7269\u7406\u8BA1\u5212",level:2},{value:"Pipeline \u6267\u884C",id:"pipeline-\u6267\u884C",level:2},{value:"Pipeline",id:"pipeline",level:3},{value:"PipelineTask",id:"pipelinetask",level:3},{value:"Operator",id:"operator",level:3},{value:"Scan \u5E76\u884C\u5316",id:"scan-\u5E76\u884C\u5316",level:2},{value:"Local Shuffle",id:"local-shuffle",level:2}];function s(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["Doris\u7684\u5E76\u884C\u6267\u884C\u6A21\u578B\u662F\u4E00\u79CDPipeline \u6267\u884C\u6A21\u578B\uFF0C\u4E3B\u8981\u53C2\u8003\u4E86",(0,a.jsx)(n.a,{href:"https://db.in.tum.de/~leis/papers/morsels.pdf",children:"Hyper"}),"\u8BBA\u6587\u4E2DPipeline\u7684\u5B9E\u73B0\u65B9\u5F0F\uFF0CPipeline \u6267\u884C\u6A21\u578B\u80FD\u591F\u5145\u5206\u91CA\u653E\u591A\u6838 CPU \u7684\u8BA1\u7B97\u80FD\u529B\uFF0C\u5E76\u5BF9 Doris \u7684\u67E5\u8BE2\u7EBF\u7A0B\u7684\u6570\u76EE\u8FDB\u884C\u9650\u5236\uFF0C\u89E3\u51B3 Doris \u7684\u6267\u884C\u7EBF\u7A0B\u81A8\u80C0\u7684\u95EE\u9898\u3002\u5B83\u7684\u5177\u4F53\u8BBE\u8BA1\u3001\u5B9E\u73B0\u548C\u6548\u679C\u53EF\u4EE5\u53C2\u9605 [DSIP-027](DSIP-027: Support Pipeline Exec Engine - DORIS - Apache Software Foundation) \u4EE5\u53CA [DSIP-035](DSIP-035: PipelineX Execution Engine - DORIS - Apache Software Foundation)\u3002\nDoris 3.0 \u4E4B\u540E\uFF0CPipeline \u6267\u884C\u6A21\u578B\u5F7B\u5E95\u66FF\u6362\u4E86\u539F\u6709\u7684\u706B\u5C71\u6A21\u578B\uFF0C\u57FA\u4E8EPipeline \u6267\u884C\u6A21\u578B\uFF0CDoris \u5B9E\u73B0\u4E86 Query\u3001DDL\u3001DML \u8BED\u53E5\u7684\u5E76\u884C\u5904\u7406\u3002"]}),"\n",(0,a.jsx)(n.h2,{id:"\u7269\u7406\u8BA1\u5212",children:"\u7269\u7406\u8BA1\u5212"}),"\n",(0,a.jsx)(n.p,{children:"\u4E3A\u4E86\u66F4\u597D\u7684\u7406\u89E3Pipeline \u6267\u884C\u6A21\u578B\uFF0C\u9996\u5148\u9700\u8981\u4ECB\u7ECD\u4E00\u4E0B\u7269\u7406\u67E5\u8BE2\u8BA1\u5212\u4E2D\u4E24\u4E2A\u91CD\u8981\u7684\u6982\u5FF5\uFF1APlanFragment\u548CPlanNode\u3002\u6211\u4EEC\u4F7F\u7528\u4E0B\u9762\u8FD9\u6761SQL \u4F5C\u4E3A\u4F8B\u5B50\uFF1A"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"SELECT k1, SUM(v1) FROM A,B WHERE A.k2 = B.k2 GROUP BY k1 ORDER BY SUM(v1);\n"})}),"\n",(0,a.jsx)(n.p,{children:"FE \u9996\u5148\u4F1A\u628A\u5B83\u7FFB\u8BD1\u6210\u4E0B\u9762\u8FD9\u79CD\u903B\u8F91\u8BA1\u5212\uFF0C\u8BA1\u5212\u4E2D\u6BCF\u4E2A\u8282\u70B9\u5C31\u662F\u4E00\u4E2APlanNode\uFF0C\u6BCF\u79CDNode\u7684\u5177\u4F53\u542B\u4E49\uFF0C\u53EF\u4EE5\u53C2\u8003\u67E5\u770B\u7269\u7406\u8BA1\u5212\u7684\u4ECB\u7ECD\u3002"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"pip_exec_1",src:i(366754).Z+"",width:"692",height:"988"})}),"\n",(0,a.jsx)(n.p,{children:"\u7531\u4E8EDoris \u662F\u4E00\u4E2AMPP\u7684\u67B6\u6784\uFF0C\u6BCF\u4E2A\u67E5\u8BE2\u90FD\u4F1A\u5C3D\u53EF\u80FD\u7684\u8BA9\u6240\u6709\u7684BE \u90FD\u53C2\u4E0E\u8FDB\u6765\u5E76\u884C\u6267\u884C\uFF0C\u6765\u964D\u4F4E\u67E5\u8BE2\u7684\u5EF6\u65F6\u3002\u6240\u4EE5\u8FD8\u9700\u8981\u5C06\u4E0A\u8FF0\u903B\u8F91\u8BA1\u5212\u62C6\u5206\u4E3A\u4E00\u4E2A\u7269\u7406\u8BA1\u5212\uFF0C\u62C6\u5206\u7269\u7406\u8BA1\u5212\u57FA\u672C\u4E0A\u5C31\u662F\u5728\u903B\u8F91\u8BA1\u5212\u4E2D\u63D2\u5165\u4E86DataSink\u548CExchangeNode\uFF0C\u901A\u8FC7\u8FD9\u4E24\u4E2ANode\u5B8C\u6210\u4E86\u6570\u636E\u5728\u591A\u4E2ABE \u4E4B\u95F4\u7684Shuffle\u3002\u62C6\u5206\u5B8C\u6210\u540E\uFF0C\u6BCF\u4E2APlanFragment \u76F8\u5F53\u4E8E\u5305\u542B\u4E86\u4E00\u90E8\u5206PlanNode\uFF0C\u53EF\u4EE5\u4F5C\u4E3A\u4E00\u4E2A\u72EC\u7ACB\u7684\u4EFB\u52A1\u53D1\u9001\u7ED9BE\uFF0C\u6BCF\u4E2ABE \u5B8C\u6210\u4E86PlanFragment\u5185\u5305\u542B\u7684PlanNode\u7684\u8BA1\u7B97\u540E\uFF0C\u901A\u8FC7DataSink\u548CExchangeNode \u8FD9\u4E24\u4E2A\u7B97\u5B50\u628A\u6570\u636Eshuffle\u5230\u5176\u4ED6BE\u4E0A\u6765\u8FDB\u884C\u63A5\u4E0B\u6765\u7684\u8BA1\u7B97\u3002"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"pip_exec_2",src:i(168613).Z+"",width:"1548",height:"2286"})}),"\n",(0,a.jsx)(n.p,{children:"\u6240\u4EE5Doris\u7684\u89C4\u5212\u5206\u4E3A3\u5C42\uFF1A\nPLAN\uFF1A\u6267\u884C\u8BA1\u5212\uFF0C\u4E00\u4E2ASQL\u4F1A\u88AB\u6267\u884C\u89C4\u5212\u5668\u7FFB\u8BD1\u6210\u4E00\u4E2A\u6267\u884C\u8BA1\u5212\uFF0C\u4E4B\u540E\u6267\u884C\u8BA1\u5212\u4F1A\u63D0\u4F9B\u7ED9\u6267\u884C\u5F15\u64CE\u6267\u884C\u3002"}),"\n",(0,a.jsx)(n.p,{children:"FRAGMENT\uFF1A\u7531\u4E8EDORIS\u662F\u4E00\u4E2A\u5206\u5E03\u5F0F\u6267\u884C\u5F15\u64CE\u3002\u4E00\u4E2A\u5B8C\u6574\u7684\u6267\u884C\u8BA1\u5212\u4F1A\u88AB\u5207\u5206\u4E3A\u591A\u4E2A\u5355\u673A\u7684\u6267\u884C\u7247\u6BB5\u3002\u4E00\u4E2AFRAGMENT\u8868\u662F\u4E00\u4E2A\u5B8C\u6574\u7684\u5355\u673A\u6267\u884C\u7247\u6BB5\u3002\u591A\u4E2AFRAGMENT\u7EC4\u5408\u5728\u4E00\u8D77\uFF0C\u6784\u6210\u4E00\u4E2A\u5B8C\u6574\u7684PLAN\u3002"}),"\n",(0,a.jsx)(n.p,{children:"PLAN NODE\uFF1A\u7B97\u5B50\uFF0C\u662F\u6267\u884C\u8BA1\u5212\u7684\u6700\u5C0F\u5355\u4F4D\u3002\u4E00\u4E2AFRAGMENT\u7531\u591A\u4E2A\u7B97\u5B50\u6784\u6210\u3002\u6BCF\u4E00\u4E2A\u7B97\u5B50\u8D1F\u8D23\u4E00\u4E2A\u5B9E\u9645\u7684\u6267\u884C\u903B\u8F91\uFF0C\u6BD4\u5982\u805A\u5408\uFF0C\u8FDE\u63A5\u7B49"}),"\n",(0,a.jsx)(n.h2,{id:"pipeline-\u6267\u884C",children:"Pipeline \u6267\u884C"}),"\n",(0,a.jsx)(n.p,{children:"PlanFragment \u662FFE \u53D1\u5F80BE \u6267\u884C\u4EFB\u52A1\u7684\u6700\u5C0F\u5355\u4F4D\u3002BE\u53EF\u80FD\u4F1A\u6536\u5230\u540C\u4E00\u4E2AQuery\u7684\u591A\u4E2A\u4E0D\u540C\u7684PlanFragment\uFF0C\u6BCF\u4E2APlanFragment\u90FD\u4F1A\u88AB\u5355\u72EC\u7684\u5904\u7406\u3002\u5728\u6536\u5230PlanFragment \u4E4B\u540E\uFF0CBE\u4F1A\u628APlanFragment \u62C6\u5206\u4E3A\u591A\u4E2APipeline\uFF0C\u8FDB\u800C\u542F\u52A8\u591A\u4E2APipelineTask \u6765\u5B9E\u73B0\u5E76\u884C\u6267\u884C\uFF0C\u63D0\u5347\u67E5\u8BE2\u6548\u7387\u3002"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"pip_exec_3",src:i(167987).Z+"",width:"2480",height:"1374"})}),"\n",(0,a.jsx)(n.h3,{id:"pipeline",children:"Pipeline"}),"\n",(0,a.jsx)(n.p,{children:"\u4E00\u4E2APipeline \u6709\u4E00\u4E2ASourceOperator \u548C \u4E00\u4E2ASinkOperator \u4EE5\u53CA\u4E2D\u95F4\u7684\u591A\u4E2A\u5176\u4ED6Operator\u7EC4\u6210\u3002SourceOperator \u4EE3\u8868\u4ECE\u5916\u90E8\u8BFB\u53D6\u6570\u636E\uFF0C\u53EF\u4EE5\u662F\u4E00\u4E2A\u8868\uFF08OlapTable\uFF09\uFF0C\u4E5F\u53EF\u4EE5\u662F\u4E00\u4E2ABuffer\uFF08Exchange\uFF09\u3002SinkOperator \u8868\u793A\u6570\u636E\u7684\u8F93\u51FA\uFF0C\u8F93\u51FA\u53EF\u4EE5\u662F\u901A\u8FC7\u7F51\u7EDCshuffle\u5230\u522B\u7684\u8282\u70B9\uFF0C\u6BD4\u5982DataStreamSinkOperator\uFF0C\u4E5F\u53EF\u4EE5\u662F\u8F93\u51FA\u5230HashTable\uFF0C\u6BD4\u5982Agg\u7B97\u5B50\uFF0CJoinBuildHashTable\u7B49\u3002"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"pip_exec_4",src:i(98953).Z+"",width:"1144",height:"256"})}),"\n",(0,a.jsx)(n.p,{children:"\u591A\u4E2APipeline \u4E4B\u95F4\u5B9E\u9645\u662F\u6709\u4F9D\u8D56\u5173\u7CFB\u7684\uFF0C\u4EE5JoinNode\u4E3A\u4F8B\uFF0C\u4ED6\u5B9E\u9645\u88AB\u62C6\u5206\u5230\u4E862\u4E2APipeline \u91CC\u3002\u5176\u4E2DPipeline-0\u662F\u8BFB\u53D6Exchange\u7684\u6570\u636E\uFF0C\u6765\u6784\u5EFAHashTable\uFF1BPipeline-1 \u662F\u4ECE\u8868\u91CC\u8BFB\u53D6\u6570\u636E\uFF0C\u6765\u8FDB\u884CProbe\u3002\u8FD92\u4E2APipeline \u4E4B\u95F4\u662F\u6709\u5173\u8054\u5173\u7CFB\u7684\uFF0C\u53EA\u6709Pipeline-0\u8FD0\u884C\u5B8C\u6BD5\u4E4B\u540E\u624D\u80FD\u6267\u884CPipeline-1\u3002\u8FD9\u4E24\u8005\u4E4B\u95F4\u7684\u4F9D\u8D56\u5173\u7CFB\uFF0C\u79F0\u4E3ADependency\u3002\u5F53Pipeline-0 \u8FD0\u884C\u5B8C\u6BD5\u540E\uFF0C\u4F1A\u8C03\u7528Dependency\u7684set_ready \u65B9\u6CD5\u901A\u77E5Pipeline-1 \u53EF\u6267\u884C\u3002"}),"\n",(0,a.jsx)(n.h3,{id:"pipelinetask",children:"PipelineTask"}),"\n",(0,a.jsx)(n.p,{children:"Pipeline \u5B9E\u9645\u8FD8\u662F\u4E00\u4E2A\u903B\u8F91\u6982\u5FF5\uFF0C\u4ED6\u5E76\u4E0D\u662F\u4E00\u4E2A\u53EF\u6267\u884C\u7684\u5B9E\u4F53\u3002\u5728\u6709\u4E86Pipeline\u4E4B\u540E\uFF0C\u9700\u8981\u8FDB\u4E00\u6B65\u7684\u628APipeline \u5B9E\u4F8B\u5316\u4E3A\u591A\u4E2APipelineTask\u3002\u5C06\u9700\u8981\u8BFB\u53D6\u7684\u6570\u636E\u5206\u914D\u7ED9\u4E0D\u540C\u7684PipelineTask \u6700\u7EC8\u5B9E\u73B0\u5E76\u884C\u5904\u7406\u3002\u540C\u4E00\u4E2APipeline\u7684\u591A\u4E2APipelineTask \u4E4B\u95F4\u7684Operator \u5B8C\u5168\u76F8\u540C\uFF0C\u4ED6\u4EEC\u7684\u533A\u522B\u5728\u4E8EOperator\u7684\u72B6\u6001\u4E0D\u4E00\u6837\uFF0C\u6BD4\u5982\u8BFB\u53D6\u7684\u6570\u636E\u4E0D\u4E00\u6837\uFF0C\u6784\u5EFA\u51FA\u7684HashTable \u4E0D\u4E00\u6837\uFF0C\u8FD9\u4E9B\u4E0D\u4E00\u6837\u7684\u72B6\u6001\uFF0C\u6211\u4EEC\u79F0\u4E4B\u4E3ALocalState\u3002\n\u6BCF\u4E2APipelineTask \u6700\u7EC8\u90FD\u4F1A\u88AB\u63D0\u4EA4\u5230\u4E00\u4E2A\u7EBF\u7A0B\u6C60\u4E2D\u4F5C\u4E3A\u72EC\u7ACB\u7684\u4EFB\u52A1\u6267\u884C\u3002\u5728Dependency \u8FD9\u79CD\u89E6\u53D1\u673A\u5236\u4E0B\uFF0C\u53EF\u4EE5\u66F4\u597D\u7684\u5229\u7528\u591A\u6838CPU\uFF0C\u5B9E\u73B0\u5145\u5206\u7684\u5E76\u884C\u3002"}),"\n",(0,a.jsx)(n.h3,{id:"operator",children:"Operator"}),"\n",(0,a.jsx)(n.p,{children:"\u5728\u5927\u591A\u6570\u65F6\u5019\uFF0CPipeline \u4E2D\u7684\u6BCF\u4E2AOperator \u90FD\u5BF9\u5E94\u4E86\u4E00\u4E2APlanNode\uFF0C\u4F46\u662F\u6709\u4E00\u4E9B\u7279\u6B8A\u7684\u7B97\u5B50\u9664\u5916\uFF1A"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"JoinNode\uFF0C\u88AB\u62C6\u5206\u4E3AJoinBuildOperator\u548CJoinProbeOperator"}),"\n",(0,a.jsx)(n.li,{children:"AggNode \u88AB\u62C6\u5206\u4E3AAggSinkOperator\u548CAggSourceOperator"}),"\n",(0,a.jsx)(n.li,{children:"SortNode \u88AB\u62C6\u5206\u4E3ASortSinkOperator \u548C SortSourceOperator\n\u57FA\u672C\u539F\u7406\u662F\uFF0C\u5BF9\u4E8E\u4E00\u4E9Bbreaking \u7B97\u5B50\uFF08\u9700\u8981\u628A\u6240\u6709\u7684\u6570\u636E\u90FD\u6536\u96C6\u9F50\u4E4B\u540E\u624D\u80FD\u8FD0\u7B97\u7684\u7B97\u5B50\uFF09\uFF0C\u628A\u704C\u5165\u6570\u636E\u7684\u90E8\u5206\u62C6\u5206\u4E3ASink\uFF0C\u7136\u540E\u628A\u4ECE\u8FD9\u4E2A\u7B97\u5B50\u91CC\u83B7\u53D6\u6570\u636E\u7684\u90E8\u5206\u79F0\u4E3ASource\u3002"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"scan-\u5E76\u884C\u5316",children:"Scan \u5E76\u884C\u5316"}),"\n",(0,a.jsx)(n.p,{children:"\u626B\u63CF\u6570\u636E\u662F\u4E00\u4E2A\u975E\u5E38\u91CD\u7684IO \u64CD\u4F5C\uFF0C\u5B83\u9700\u8981\u4ECE\u672C\u5730\u78C1\u76D8\u8BFB\u53D6\u5927\u91CF\u7684\u6570\u636E\uFF08\u5982\u679C\u662F\u6570\u636E\u6E56\u7684\u573A\u666F\uFF0C\u5C31\u9700\u8981\u4ECEHDFS\u6216\u8005S3\u4E2D\u8BFB\u53D6\uFF0C\u5EF6\u65F6\u66F4\u957F\uFF09\uFF0C\u9700\u8981\u6BD4\u8F83\u591A\u7684\u65F6\u95F4\u3002\u6240\u4EE5\u6211\u4EEC\u5728ScanOperator \u4E2D\u5F15\u5165\u4E86\u5E76\u884C\u626B\u63CF\u7684\u6280\u672F\uFF0CScanOperator\u4F1A\u52A8\u6001\u7684\u751F\u6210\u591A\u4E2AScanner\uFF0C\u6BCF\u4E2AScanner \u626B\u63CF100w-200w \u884C\u5DE6\u53F3\u7684\u6570\u636E\uFF0C\u6BCF\u4E2AScanner \u5728\u505A\u6570\u636E\u626B\u63CF\u65F6\uFF0C\u5B8C\u6210\u76F8\u5E94\u7684\u6570\u636E\u89E3\u538B\u3001\u8FC7\u6EE4\u7B49\u8BA1\u7B97\u4EFB\u52A1\uFF0C\u7136\u540E\u628A\u6570\u636E\u53D1\u9001\u7ED9\u4E00\u4E2ADataQueue\uFF0C\u4F9BScanOperator \u8BFB\u53D6\u3002"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"pip_exec_5",src:i(750530).Z+"",width:"1554",height:"608"})}),"\n",(0,a.jsx)(n.p,{children:"\u901A\u8FC7\u5E76\u884C\u626B\u63CF\u7684\u6280\u672F\u53EF\u4EE5\u6709\u6548\u7684\u907F\u514D\u7531\u4E8E\u5206\u6876\u4E0D\u5408\u7406\u6216\u8005\u6570\u636E\u503E\u659C\u5BFC\u81F4\u67D0\u4E9BScanOperator \u6267\u884C\u65F6\u95F4\u7279\u522B\u4E45\uFF0C\u628A\u6574\u4E2A\u67E5\u8BE2\u7684\u5EF6\u65F6\u90FD\u62D6\u6162\u7684\u95EE\u9898\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"local-shuffle",children:"Local Shuffle"}),"\n",(0,a.jsx)(n.p,{children:"\u5728Pipeline\u6267\u884C\u6A21\u578B\u4E2D\uFF0CLocal Exchange\u4F5C\u4E3A\u4E00\u4E2APipeline Breaker\u51FA\u73B0\uFF0C\u662F\u5728\u672C\u5730\u5C06\u6570\u636E\u91CD\u65B0\u5206\u53D1\u81F3\u5404\u4E2A\u6267\u884C\u4EFB\u52A1\u7684\u6280\u672F\u3002\u5B83\u628A\u4E0A\u6E38Pipeline\u8F93\u51FA\u7684\u5168\u90E8\u6570\u636E\u4EE5\u67D0\u79CD\u65B9\u5F0F\uFF08HASH / Round Robin\uFF09\u5747\u5300\u5206\u53D1\u5230\u4E0B\u6E38Pipeline\u7684\u5168\u90E8Task\u4E2D\u3002\u89E3\u51B3\u6267\u884C\u8FC7\u7A0B\u4E2D\u7684\u6570\u636E\u503E\u659C\u7684\u95EE\u9898\uFF0C\u4F7F\u6267\u884C\u6A21\u578B\u4E0D\u518D\u53D7\u6570\u636E\u5B58\u50A8\u4EE5\u53CAplan\u7684\u9650\u5236\u3002\u63A5\u4E0B\u6765\u6211\u4EEC\u4E3E\u4F8B\u6765\u8BF4\u660ELocal Exchange\u7684\u5DE5\u4F5C\u903B\u8F91\u3002\n\u6211\u4EEC\u7528\u4E0A\u8FF0\u4F8B\u5B50\u4E2D\u7684Pipeline-1\u4E3A\u4F8B\u5B50\u8FDB\u4E00\u6B65\u9610\u8FF0Local Exchange\u5982\u4F55\u53EF\u4EE5\u907F\u514D\u6570\u636E\u503E\u659C\u3002"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"pip_exec_6",src:i(103561).Z+"",width:"2044",height:"1174"})}),"\n",(0,a.jsx)(n.p,{children:"\u5982\u4E0A\u56FE\u6240\u793A\uFF0C\u9996\u5148\uFF0C\u901A\u8FC7\u5728Pipeline 1\u4E2D\u63D2\u5165Local Exchange\uFF0C\u6211\u4EEC\u628APipeline 1\u8FDB\u4E00\u6B65\u62C6\u5206\u6210Pipeline 1-0\u548CPipeline 1-1\u3002\n\u6B64\u65F6\uFF0C\u6211\u4EEC\u4E0D\u59A8\u5047\u8BBE\u5F53\u524D\u5E76\u53D1\u7B49\u4E8E3\uFF08\u6BCF\u4E2APipeline\u67093\u4E2Atask\uFF09\uFF0C\u6BCF\u4E2Atask\u8BFB\u53D6\u5B58\u50A8\u5C42\u7684\u4E00\u4E2Abucket\uFF0C\u800C3\u4E2Abucket\u4E2D\u6570\u636E\u884C\u6570\u5206\u522B\u662F1\uFF0C1\uFF0C7\u3002\u5219\u63D2\u5165Local Exchange\u524D\u540E\u7684\u6267\u884C\u53D8\u5316\u5982\u4E0B\uFF1A"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"pip_exec_7",src:i(202482).Z+"",width:"4382",height:"1716"})}),"\n",(0,a.jsx)(n.p,{children:"\u4ECE\u56FE\u53F3\u53EF\u4EE5\u770B\u51FA\uFF0CHashJoin\u548CAgg\u7B97\u5B50\u9700\u8981\u5904\u7406\u7684\u6570\u636E\u91CF\u4ECE(1,1,7)\u53D8\u6210\u4E86(3,3,3)\u4ECE\u800C\u907F\u514D\u4E86\u6570\u636E\u503E\u659C\u3002\n\u5728Doris\u4E2D\uFF0CLocal Exchange\u6839\u636E\u4E00\u7CFB\u5217\u89C4\u5219\u6765\u51B3\u5B9A\u662F\u5426\u88AB\u89C4\u5212\uFF0C\u4F8B\u5982\u5F53\u67E5\u8BE2\u8017\u65F6\u6BD4\u8F83\u5927\u7684Join\u3001\u805A\u5408\u3001\u7A97\u53E3\u51FD\u6570\u7B49\u7B97\u5B50\u9700\u8981\u88AB\u6267\u884C\u65F6\uFF0C\u6211\u4EEC\u5C31\u9700\u8981\u4F7F\u7528Local Exchange\u6765\u5C3D\u53EF\u80FD\u907F\u514D\u6570\u636E\u503E\u659C\u3002"})]})}function d(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}},366754:function(e,n,i){i.d(n,{Z:function(){return l}});let l=i.p+"assets/images/pip_exec_1-92f1adf96aabc308b9c0517b7a96c0c5.png"},168613:function(e,n,i){i.d(n,{Z:function(){return l}});let l=i.p+"assets/images/pip_exec_2-c2ee830e62f58f7717eb57f68f851f5f.png"},167987:function(e,n,i){i.d(n,{Z:function(){return l}});let l=i.p+"assets/images/pip_exec_3-d0f58e16950b3caba35268d217c5fca8.png"},98953:function(e,n,i){i.d(n,{Z:function(){return l}});let l=i.p+"assets/images/pip_exec_4-41c29e5934fe7e1e5e3b149a0a890378.png"},750530:function(e,n,i){i.d(n,{Z:function(){return l}});let l=i.p+"assets/images/pip_exec_5-6b5079a7333a42175ea8c0a7b24dee58.png"},103561:function(e,n,i){i.d(n,{Z:function(){return l}});let l=i.p+"assets/images/pip_exec_6-bcee6cf888a797d515f1c21b604a564c.png"},202482:function(e,n,i){i.d(n,{Z:function(){return l}});let l=i.p+"assets/images/pip_exec_7-c7efcd37f8334fb4e0ea0c9a55c81d39.png"},250065:function(e,n,i){i.d(n,{Z:function(){return c},a:function(){return r}});var l=i(667294);let a={},t=l.createContext(a);function r(e){let n=l.useContext(t);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);