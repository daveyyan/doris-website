"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["403486"],{73753:function(n,e,i){i.r(e),i.d(e,{metadata:()=>l,contentTitle:()=>t,default:()=>a,assets:()=>c,toc:()=>h,frontMatter:()=>d});var l=JSON.parse('{"id":"table-design/data-partitioning/data-distribution","title":"\u6570\u636E\u5206\u5E03\u6982\u5FF5","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/table-design/data-partitioning/data-distribution.md","sourceDirName":"table-design/data-partitioning","slug":"/table-design/data-partitioning/data-distribution","permalink":"/zh-CN/docs/dev/table-design/data-partitioning/data-distribution","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u6570\u636E\u5206\u5E03\u6982\u5FF5","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u884C\u5217\u6DF7\u5B58","permalink":"/zh-CN/docs/dev/table-design/row-store"},"next":{"title":"\u624B\u52A8\u5206\u533A","permalink":"/zh-CN/docs/dev/table-design/data-partitioning/manual-partitioning"}}'),s=i("785893"),r=i("250065");let d={title:"\u6570\u636E\u5206\u5E03\u6982\u5FF5",language:"zh-CN"},t=void 0,c={},h=[{value:"\u6570\u636E\u5206\u5E03\u6982\u89C8",id:"\u6570\u636E\u5206\u5E03\u6982\u89C8",level:2},{value:"\u6570\u636E\u5199\u5165",id:"\u6570\u636E\u5199\u5165",level:3},{value:"\u67E5\u8BE2\u6267\u884C",id:"\u67E5\u8BE2\u6267\u884C",level:3},{value:"\u8282\u70B9\u4E0E\u5B58\u50A8\u67B6\u6784",id:"\u8282\u70B9\u4E0E\u5B58\u50A8\u67B6\u6784",level:2},{value:"\u8282\u70B9\u7C7B\u578B",id:"\u8282\u70B9\u7C7B\u578B",level:3},{value:"\u6570\u636E\u5206\u7247\uFF08Tablet\uFF09",id:"\u6570\u636E\u5206\u7247tablet",level:3},{value:"\u5206\u533A\u7B56\u7565",id:"\u5206\u533A\u7B56\u7565",level:2},{value:"\u5206\u533A\u7C7B\u578B",id:"\u5206\u533A\u7C7B\u578B",level:3},{value:"\u5206\u533A\u6A21\u5F0F",id:"\u5206\u533A\u6A21\u5F0F",level:3},{value:"\u5206\u6876\u7B56\u7565",id:"\u5206\u6876\u7B56\u7565",level:2},{value:"\u6570\u636E\u5206\u5E03\u4F18\u5316",id:"\u6570\u636E\u5206\u5E03\u4F18\u5316",level:2},{value:"Colocate Join",id:"colocate-join",level:3},{value:"\u5206\u533A\u88C1\u526A",id:"\u5206\u533A\u88C1\u526A",level:3},{value:"\u5206\u6876\u5E76\u884C",id:"\u5206\u6876\u5E76\u884C",level:3},{value:"\u6570\u636E\u5206\u5E03\u76EE\u6807",id:"\u6570\u636E\u5206\u5E03\u76EE\u6807",level:2}];function o(n){let e={code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:["\u5728 Doris \u4E2D\uFF0C",(0,s.jsx)(e.strong,{children:"\u6570\u636E\u5206\u5E03"}),"\u7684\u6838\u5FC3\u662F\u901A\u8FC7\u5408\u7406\u7684\u5206\u533A\u548C\u5206\u6876\u7B56\u7565\uFF0C\u5C06\u5199\u5165\u5230\u8868\u7684\u6570\u636E\u884C\u9AD8\u6548\u5730\u6620\u5C04\u5230\u5E95\u5C42\u5B58\u50A8\u7684\u5404\u4E2A ",(0,s.jsx)(e.strong,{children:"\u6570\u636E\u5206\u7247\uFF08Tablet\uFF09"})," \u4E0A\u3002\u901A\u8FC7\u6570\u636E\u5206\u5E03\u7B56\u7565\uFF0CDoris \u53EF\u4EE5\u5145\u5206\u5229\u7528\u591A\u8282\u70B9\u7684\u5B58\u50A8\u548C\u8BA1\u7B97\u80FD\u529B\uFF0C\u4ECE\u800C\u652F\u6301\u5927\u89C4\u6A21\u6570\u636E\u7684\u9AD8\u6548\u5B58\u50A8\u4E0E\u67E5\u8BE2\u3002"]}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.h2,{id:"\u6570\u636E\u5206\u5E03\u6982\u89C8",children:"\u6570\u636E\u5206\u5E03\u6982\u89C8"}),"\n",(0,s.jsx)(e.h3,{id:"\u6570\u636E\u5199\u5165",children:"\u6570\u636E\u5199\u5165"}),"\n",(0,s.jsx)(e.p,{children:"\u6570\u636E\u5199\u5165\u65F6\uFF0CDoris \u9996\u5148\u6839\u636E\u8868\u7684\u5206\u533A\u7B56\u7565\u5C06\u6570\u636E\u884C\u5206\u914D\u5230\u5BF9\u5E94\u7684\u5206\u533A\u3002\u63A5\u7740\uFF0C\u6839\u636E\u5206\u6876\u7B56\u7565\u5C06\u6570\u636E\u884C\u8FDB\u4E00\u6B65\u6620\u5C04\u5230\u5206\u533A\u5185\u7684\u5177\u4F53\u5206\u7247\uFF0C\u4ECE\u800C\u786E\u5B9A\u4E86\u6570\u636E\u884C\u7684\u5B58\u50A8\u4F4D\u7F6E\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"\u67E5\u8BE2\u6267\u884C",children:"\u67E5\u8BE2\u6267\u884C"}),"\n",(0,s.jsxs)(e.p,{children:["\u67E5\u8BE2\u8FD0\u884C\u65F6\uFF0CDoris \u7684\u4F18\u5316\u5668\u4F1A\u6839\u636E\u5206\u533A\u548C\u5206\u6876\u7B56\u7565\u88C1\u526A\u6570\u636E\uFF0C\u6700\u5927\u5316\u51CF\u5C11\u626B\u63CF\u8303\u56F4\u3002\u5728\u6D89\u53CA JOIN \u6216\u805A\u5408\u67E5\u8BE2\u65F6\uFF0C\u53EF\u80FD\u4F1A\u53D1\u751F\u8DE8\u8282\u70B9\u7684\u6570\u636E\u4F20\u8F93\uFF08Shuffle\uFF09\u3002\u5408\u7406\u7684\u5206\u533A\u548C\u5206\u6876\u8BBE\u8BA1\u53EF\u4EE5\u51CF\u5C11 Shuffle \u5E76\u5145\u5206\u5229\u7528 ",(0,s.jsx)(e.strong,{children:"Colocate Join"})," \u4F18\u5316\u67E5\u8BE2\u6027\u80FD\u3002"]}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.h2,{id:"\u8282\u70B9\u4E0E\u5B58\u50A8\u67B6\u6784",children:"\u8282\u70B9\u4E0E\u5B58\u50A8\u67B6\u6784"}),"\n",(0,s.jsx)(e.h3,{id:"\u8282\u70B9\u7C7B\u578B",children:"\u8282\u70B9\u7C7B\u578B"}),"\n",(0,s.jsx)(e.p,{children:"Doris \u96C6\u7FA4\u7531\u4EE5\u4E0B\u4E24\u79CD\u8282\u70B9\u7EC4\u6210\uFF1A"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"FE \u8282\u70B9\uFF08Frontend\uFF09"}),"\uFF1A\u7BA1\u7406\u96C6\u7FA4\u5143\u6570\u636E\uFF08\u5982\u8868\u3001\u5206\u7247\uFF09\uFF0C\u8D1F\u8D23 SQL \u7684\u89E3\u6790\u4E0E\u6267\u884C\u89C4\u5212\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"BE \u8282\u70B9\uFF08Backend\uFF09"}),"\uFF1A\u5B58\u50A8\u6570\u636E\uFF0C\u8D1F\u8D23\u8BA1\u7B97\u4EFB\u52A1\u7684\u6267\u884C\u3002BE \u7684\u7ED3\u679C\u6C47\u603B\u540E\u8FD4\u56DE\u81F3 FE\uFF0C\u518D\u8FD4\u56DE\u7ED9\u7528\u6237\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"\u6570\u636E\u5206\u7247tablet",children:"\u6570\u636E\u5206\u7247\uFF08Tablet\uFF09"}),"\n",(0,s.jsx)(e.p,{children:"BE \u8282\u70B9\u7684\u5B58\u50A8\u6570\u636E\u5206\u7247\u7684\u6570\u636E\uFF0C\u6BCF\u4E2A\u5206\u7247\u662F Doris \u4E2D\u6570\u636E\u7BA1\u7406\u7684\u6700\u5C0F\u5355\u5143\uFF0C\u4E5F\u662F\u6570\u636E\u79FB\u52A8\u548C\u590D\u5236\u7684\u57FA\u672C\u5355\u4F4D\u3002"}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.h2,{id:"\u5206\u533A\u7B56\u7565",children:"\u5206\u533A\u7B56\u7565"}),"\n",(0,s.jsxs)(e.p,{children:["\u5206\u533A\u662F\u6570\u636E\u7EC4\u7EC7\u7684\u7B2C\u4E00\u5C42\u903B\u8F91\u5212\u5206\uFF0C\u7528\u4E8E\u5C06\u8868\u4E2D\u7684\u6570\u636E\u5212\u5206\u4E3A\u66F4\u5C0F\u7684\u5B50\u96C6\u3002Doris \u63D0\u4F9B\u4EE5\u4E0B\u4E24\u79CD ",(0,s.jsx)(e.strong,{children:"\u5206\u533A\u7C7B\u578B"})," \u548C\u4E09\u79CD ",(0,s.jsx)(e.strong,{children:"\u5206\u533A\u6A21\u5F0F"}),"\uFF1A"]}),"\n",(0,s.jsx)(e.h3,{id:"\u5206\u533A\u7C7B\u578B",children:"\u5206\u533A\u7C7B\u578B"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Range \u5206\u533A"}),"\uFF1A\u6839\u636E\u5206\u533A\u5217\u7684\u503C\u8303\u56F4\u5C06\u6570\u636E\u884C\u5206\u914D\u5230\u5BF9\u5E94\u5206\u533A\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"List \u5206\u533A"}),"\uFF1A\u6839\u636E\u5206\u533A\u5217\u7684\u5177\u4F53\u503C\u5C06\u6570\u636E\u884C\u5206\u914D\u5230\u5BF9\u5E94\u5206\u533A\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"\u5206\u533A\u6A21\u5F0F",children:"\u5206\u533A\u6A21\u5F0F"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u624B\u52A8\u5206\u533A"}),"\uFF1A\u7528\u6237\u624B\u52A8\u521B\u5EFA\u5206\u533A\uFF08\u5982\u5EFA\u8868\u65F6\u6307\u5B9A\u6216\u901A\u8FC7 ",(0,s.jsx)(e.code,{children:"ALTER"})," \u8BED\u53E5\u589E\u52A0\uFF09\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u52A8\u6001\u5206\u533A"}),"\uFF1A\u7CFB\u7EDF\u6839\u636E\u65F6\u95F4\u8C03\u5EA6\u89C4\u5219\u81EA\u52A8\u521B\u5EFA\u5206\u533A\uFF0C\u4F46\u5199\u5165\u6570\u636E\u65F6\u4E0D\u4F1A\u6309\u9700\u521B\u5EFA\u5206\u533A\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u81EA\u52A8\u5206\u533A"}),"\uFF1A\u6570\u636E\u5199\u5165\u65F6\uFF0C\u7CFB\u7EDF\u6839\u636E\u9700\u8981\u81EA\u52A8\u521B\u5EFA\u76F8\u5E94\u7684\u5206\u533A\uFF0C\u4F7F\u7528\u65F6\u6CE8\u610F\u810F\u6570\u636E\u751F\u6210\u8FC7\u591A\u7684\u5206\u533A\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.h2,{id:"\u5206\u6876\u7B56\u7565",children:"\u5206\u6876\u7B56\u7565"}),"\n",(0,s.jsx)(e.p,{children:"\u5206\u6876\u662F\u6570\u636E\u7EC4\u7EC7\u7684\u7B2C\u4E8C\u5C42\u903B\u8F91\u5212\u5206\uFF0C\u7528\u4E8E\u5728\u5206\u533A\u5185\u5C06\u6570\u636E\u884C\u8FDB\u4E00\u6B65\u5212\u5206\u5230\u66F4\u5C0F\u7684\u5355\u5143\u3002Doris \u652F\u6301\u4EE5\u4E0B\u4E24\u79CD\u5206\u6876\u65B9\u5F0F\uFF1A"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Hash \u5206\u6876"}),"\uFF1A\u901A\u8FC7\u8BA1\u7B97\u5206\u6876\u5217\u503C\u7684 ",(0,s.jsx)(e.code,{children:"crc32"})," \u54C8\u5E0C\u503C\uFF0C\u5E76\u5BF9\u5206\u6876\u6570\u53D6\u6A21\uFF0C\u5C06\u6570\u636E\u884C\u5747\u5300\u5206\u5E03\u5230\u5206\u7247\u4E2D\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Random \u5206\u6876"}),"\uFF1A\u968F\u673A\u5206\u914D\u6570\u636E\u884C\u5230\u5206\u7247\u4E2D\u3002\u4F7F\u7528 Random \u5206\u6876\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 ",(0,s.jsx)(e.code,{children:"load_to_single_tablet"})," \u4F18\u5316\u5C0F\u89C4\u6A21\u6570\u636E\u7684\u5FEB\u901F\u5199\u5165\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.h2,{id:"\u6570\u636E\u5206\u5E03\u4F18\u5316",children:"\u6570\u636E\u5206\u5E03\u4F18\u5316"}),"\n",(0,s.jsx)(e.h3,{id:"colocate-join",children:"Colocate Join"}),"\n",(0,s.jsxs)(e.p,{children:["\u5BF9\u4E8E\u9700\u8981\u9891\u7E41\u8FDB\u884C JOIN \u6216\u805A\u5408\u67E5\u8BE2\u7684\u5927\u8868\uFF0C\u53EF\u4EE5\u542F\u7528 ",(0,s.jsx)(e.strong,{children:"Colocate"})," \u7B56\u7565\uFF0C\u5C06\u76F8\u540C\u5206\u6876\u5217\u503C\u7684\u6570\u636E\u653E\u7F6E\u5728\u540C\u4E00\u7269\u7406\u8282\u70B9\u4E0A\uFF0C\u51CF\u5C11\u8DE8\u8282\u70B9\u7684\u6570\u636E\u4F20\u8F93\uFF0C\u4ECE\u800C\u663E\u8457\u63D0\u5347\u67E5\u8BE2\u6027\u80FD\u3002"]}),"\n",(0,s.jsx)(e.h3,{id:"\u5206\u533A\u88C1\u526A",children:"\u5206\u533A\u88C1\u526A"}),"\n",(0,s.jsx)(e.p,{children:"\u67E5\u8BE2\u65F6\uFF0CDoris \u53EF\u4EE5\u901A\u8FC7\u8FC7\u6EE4\u6761\u4EF6\u88C1\u526A\u6389\u4E0D\u76F8\u5173\u7684\u5206\u533A\uFF0C\u4ECE\u800C\u51CF\u5C11\u6570\u636E\u626B\u63CF\u8303\u56F4\uFF0C\u964D\u4F4E I/O \u5F00\u9500\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"\u5206\u6876\u5E76\u884C",children:"\u5206\u6876\u5E76\u884C"}),"\n",(0,s.jsx)(e.p,{children:"\u67E5\u8BE2\u65F6\uFF0C\u5408\u7406\u7684\u5206\u6876\u6570\u53EF\u4EE5\u5145\u5206\u5229\u7528\u673A\u5668\u7684\u8BA1\u7B97\u8D44\u6E90\u548C I/O \u8D44\u6E90\u3002"}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.h2,{id:"\u6570\u636E\u5206\u5E03\u76EE\u6807",children:"\u6570\u636E\u5206\u5E03\u76EE\u6807"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u5747\u5300\u6570\u636E\u5206\u5E03"}),"\n\u786E\u4FDD\u6570\u636E\u5747\u5300\u5206\u5E03\u5728\u5404 BE \u8282\u70B9\u4E0A\uFF0C\u907F\u514D\u6570\u636E\u503E\u659C\u5BFC\u81F4\u90E8\u5206\u8282\u70B9\u8FC7\u8F7D\uFF0C\u4ECE\u800C\u63D0\u9AD8\u7CFB\u7EDF\u6574\u4F53\u6027\u80FD\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u4F18\u5316\u67E5\u8BE2\u6027\u80FD"}),"\n\u5408\u7406\u7684\u5206\u533A\u88C1\u526A\u53EF\u4EE5\u5927\u5E45\u51CF\u5C11\u626B\u63CF\u7684\u6570\u636E\u91CF\uFF0C\u5408\u7406\u7684\u5206\u6876\u6570\u53EF\u4EE5\u63D0\u5347\u8BA1\u7B97\u5E76\u884C\u5EA6\uFF0C\u5408\u7406\u5229\u7528 Colocate \u53EF\u4EE5\u964D\u4F4E Shuffle \u6210\u672C\uFF0C\u63D0\u5347 JOIN \u548C\u805A\u5408\u67E5\u8BE2\u6548\u7387\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u7075\u6D3B\u6570\u636E\u7BA1\u7406"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u6309\u65F6\u95F4\u5206\u533A\u4FDD\u5B58\u51B7\u6570\u636E\uFF08HDD\uFF09\u4E0E\u70ED\u6570\u636E\uFF08SSD\uFF09\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u5B9A\u671F\u5220\u9664\u5386\u53F2\u5206\u533A\u91CA\u653E\u5B58\u50A8\u7A7A\u95F4\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u63A7\u5236\u5143\u6570\u636E\u89C4\u6A21"}),"\n\u6BCF\u4E2A\u5206\u7247\u7684\u5143\u6570\u636E\u5B58\u50A8\u5728 FE \u548C BE \u4E2D\uFF0C\u56E0\u6B64\u9700\u8981\u5408\u7406\u63A7\u5236\u5206\u7247\u6570\u91CF\u3002\u7ECF\u9A8C\u503C\u5EFA\u8BAE\uFF1A"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u6BCF 1000w \u5206\u7247\uFF0CFE \u81F3\u5C11\u9700 100G \u5185\u5B58\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u5355\u4E2A BE \u627F\u8F7D\u7684\u5206\u7247\u6570\u5E94\u5C0F\u4E8E 2w\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u4F18\u5316\u5199\u5165\u541E\u5410"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u5206\u6876\u6570\u5E94\u5408\u7406\u63A7\u5236\uFF08\u5EFA\u8BAE < 128\uFF09\uFF0C\u4EE5\u907F\u514D\u5199\u5165\u6027\u80FD\u4E0B\u964D\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u6BCF\u6B21\u5199\u5165\u7684\u5206\u533A\u6570\u91CF\u5E94\u9002\u91CF\uFF08\u5EFA\u8BAE\u6BCF\u6B21\u5199\u5165\u5C11\u91CF\u5206\u533A\uFF09\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.p,{children:"\u901A\u8FC7\u7CBE\u5FC3\u8BBE\u8BA1\u548C\u7BA1\u7406\u5206\u533A\u4E0E\u5206\u6876\u7B56\u7565\uFF0CDoris \u80FD\u591F\u9AD8\u6548\u5730\u652F\u6301\u5927\u89C4\u6A21\u6570\u636E\u7684\u5B58\u50A8\u4E0E\u67E5\u8BE2\u5904\u7406\uFF0C\u6EE1\u8DB3\u5404\u79CD\u590D\u6742\u4E1A\u52A1\u9700\u6C42\u3002"})]})}function a(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},250065:function(n,e,i){i.d(e,{Z:function(){return t},a:function(){return d}});var l=i(667294);let s={},r=l.createContext(s);function d(n){let e=l.useContext(r);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:d(n.components),l.createElement(r.Provider,{value:e},n.children)}}}]);