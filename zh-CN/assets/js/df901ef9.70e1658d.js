"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["417038"],{95929:function(n,e,t){t.r(e),t.d(e,{metadata:()=>i,contentTitle:()=>d,default:()=>h,assets:()=>l,toc:()=>a,frontMatter:()=>r});var i=JSON.parse('{"id":"query-acceleration/distinct-counts/bitmap-precise-deduplication","title":"BITMAP \u7CBE\u51C6\u53BB\u91CD","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/query-acceleration/distinct-counts/bitmap-precise-deduplication.md","sourceDirName":"query-acceleration/distinct-counts","slug":"/query-acceleration/distinct-counts/bitmap-precise-deduplication","permalink":"/zh-CN/docs/dev/query-acceleration/distinct-counts/bitmap-precise-deduplication","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"BITMAP \u7CBE\u51C6\u53BB\u91CD","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u9AD8\u5E76\u53D1\u70B9\u67E5","permalink":"/zh-CN/docs/dev/query-acceleration/high-concurrent-point-query"},"next":{"title":"HLL\u8FD1\u4F3C\u53BB\u91CD","permalink":"/zh-CN/docs/dev/query-acceleration/distinct-counts/hll-approximate-deduplication"}}'),s=t("785893"),c=t("250065");let r={title:"BITMAP \u7CBE\u51C6\u53BB\u91CD",language:"zh-CN"},d="BITMAP \u7CBE\u51C6\u53BB\u91CD",l={},a=[{value:"Count Distinct \u7684\u5B9E\u73B0",id:"count-distinct-\u7684\u5B9E\u73B0",level:2},{value:"\u4F7F\u7528\u573A\u666F",id:"\u4F7F\u7528\u573A\u666F",level:2},{value:"\u4F7F\u7528 BITMAP \u8FDB\u884C\u7CBE\u786E\u53BB\u91CD",id:"\u4F7F\u7528-bitmap-\u8FDB\u884C\u7CBE\u786E\u53BB\u91CD",level:2},{value:"\u521B\u5EFA\u8868",id:"\u521B\u5EFA\u8868",level:3},{value:"\u5BFC\u5165\u6570\u636E",id:"\u5BFC\u5165\u6570\u636E",level:3},{value:"\u67E5\u8BE2\u6570\u636E",id:"\u67E5\u8BE2\u6570\u636E",level:2}];function o(n){let e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"bitmap-\u7CBE\u51C6\u53BB\u91CD",children:"BITMAP \u7CBE\u51C6\u53BB\u91CD"})}),"\n",(0,s.jsx)(e.p,{children:"\u672C\u6587\u4ECB\u7ECD\u5982\u4F55\u901A\u8FC7 Bitmap \u7C7B\u578B\u5B9E\u73B0\u7CBE\u786E\u53BB\u91CD\u3002"}),"\n",(0,s.jsx)(e.p,{children:"Bitmap \u662F\u4E00\u79CD\u9AD8\u6548\u7684\u4F4D\u56FE\u7D22\u5F15\u6280\u672F\uFF0C\u5B83\u901A\u8FC7 bit \u4F4D\u6765\u8868\u793A\u5BF9\u5E94\u7684\u6570\u636E\u662F\u5426\u5B58\u5728\u3002Bitmap \u7279\u522B\u9002\u7528\u4E8E\u9700\u8981\u9AD8\u6548\u6267\u884C\u96C6\u5408\u64CD\u4F5C\uFF08\u5982\u5E76\u96C6\u3001\u4EA4\u96C6\u7B49\uFF09\u7684\u573A\u666F\uFF0C\u5E76\u4E14\u5728\u5185\u5B58\u4F7F\u7528\u4E0A\u975E\u5E38\u8282\u7EA6\u3002\u4F7F\u7528 Bitmap \u8FDB\u884C\u7CBE\u786E\u53BB\u91CD\u76F8\u6BD4 Count distinct \u53BB\u91CD\uFF1A"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u63D0\u9AD8\u67E5\u8BE2\u901F\u5EA6"}),"\n",(0,s.jsx)(e.li,{children:"\u51CF\u5C11\u5185\u5B58/\u78C1\u76D8\u5360\u7528"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"count-distinct-\u7684\u5B9E\u73B0",children:"Count Distinct \u7684\u5B9E\u73B0"}),"\n",(0,s.jsxs)(e.p,{children:["\u4F20\u7EDF\u7684\u7CBE\u786E\u53BB\u91CD\u4F9D\u8D56",(0,s.jsx)(e.code,{children:"count distinct"}),"\u5B9E\u73B0\uFF0C\u8868\u539F\u59CB\u6570\u636E\u5982\u4E0B\uFF0C\u5047\u8BBE\u8981name\u5217\u8FDB\u884C\u7CBE\u786E\u53BB\u91CD"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"id"}),(0,s.jsx)(e.th,{children:"name"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"1"}),(0,s.jsx)(e.td,{children:"bob"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"2"}),(0,s.jsx)(e.td,{children:"alex"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"3"}),(0,s.jsx)(e.td,{children:"jack"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"4"}),(0,s.jsx)(e.td,{children:"tom"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"5"}),(0,s.jsx)(e.td,{children:"bob"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"6"}),(0,s.jsx)(e.td,{children:"alex"})]})]})]}),"\n",(0,s.jsxs)(e.p,{children:["Doris\u5728\u8BA1\u7B97\u65F6",(0,s.jsx)(e.code,{children:"select count(distinct name) from t"}),"\u3002\u4F1A\u6309\u7167\u4E0B\u56FE\u8FDB\u884C\u8BA1\u7B97\uFF0C\u5148\u6839\u636Ename\u5217group by\uFF0C\u8BA1\u7B97\u4E00\u9636\u6BB5\u53BB\u91CD\uFF0Cshuffle\u4E4B\u540E\u4E8C\u9636\u6BB5\u8FDB\u884C\u53BB\u91CD\uFF0C\u6700\u7EC8\u8BA1\u7B97count"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-SQL",children:"        Scan                              1st Group By                       2nd Group By                     Count \n  +---------------+                   +------------+                       +------------+                +------------+ \n  | id  | name    |                   |   name     |                       |   name     |                | count(name)| \n  +-----+---------+                   +------------+                       +------------+                +------------+ \n  |  1  |   bob   |  ---------------\x3e |    bob     |                       |    bob     |    -------\x3e    |     4      | \n  |  2  |   alex  |                   |    alex    |                       |    alex    |                +------------+ \n  |  5  |   bob   |                   +------------+                       |    jack    | \n  |  6  |   alex  |                                                        |    tom     | \n  +---------------+                                                        +------------+ \n                                                        ----------------\x3e \n                                           \n                                           \n  +---------------+                   +------------+ \n  | id  | name    |                   |   name     | \n  +-----+---------+  ---------------\x3e +------------+ \n  |  3  |  jack   |                   |    jack    | \n  |  4  |   tom   |                   |    tom     | \n  +-----+---------+                   +------------+\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u7531\u4E8ECount Distinct\u9700\u8981\u4FDD\u5B58\u8BA1\u7B97\u660E\u7EC6\u6570\u636E\uFF0C\u5E76\u4E14\u9700\u8981\u8FDB\u884Cshuffle\uFF0C\u5F53\u6570\u636E\u91CF\u589E\u5927\u65F6\uFF0C\u67E5\u8BE2\u4E5F\u4F1A\u8D8A\u6765\u8D8A\u6162\u3002\u7528Bitmap\u6765\u7CBE\u786E\u53BB\u91CD\uFF0C\u53EF\u4EE5\u89E3\u51B3count distinct \u5728\u5927\u91CF\u6570\u636E\u573A\u666F\u4E0B\u7684\u6027\u80FD\u95EE\u9898\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u4F7F\u7528\u573A\u666F",children:"\u4F7F\u7528\u573A\u666F"}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u5B9E\u9645\u7684\u4E1A\u52A1\u573A\u666F\u4E2D\uFF0C\u5F53\u6570\u636E\u8FBE\u5230\u4E00\u5B9A\u89C4\u6A21\u4E4B\u540E\uFF0C\u901A\u8FC7 count distinct \u53BB\u91CD\u7684\u6210\u672C\u4E5F\u8D8A\u6765\u8D8A\u9AD8\u3002\u67E5\u8BE2\u4E5F\u4F1A\u8D8A\u6765\u8D8A\u6162\u3002\u800C\u4F7F\u7528 Bitmap \u7CBE\u786E\u53BB\u91CD\uFF0C\u5C31\u662F\u4E3A\u4E86\u89E3\u51B3 count distinct \u5728\u5927\u91CF\u6570\u636E\u573A\u666F\u4E0B\u7684\u6027\u80FD\u95EE\u9898\u3002Bitmap \u5C06\u5BF9\u5E94\u660E\u7EC6\u6570\u636E\u6620\u5C04\u4E3A bit \u4F4D\uFF0C\u653E\u5F03\u4E86\u660E\u7EC6\u6570\u636E\u7684\u7075\u6D3B\u6027\u4E0B\uFF0C\u5927\u5E45\u5EA6\u63D0\u5347\u8BA1\u7B97\u6548\u7387\u3002\u6240\u4EE5\u5728\u5982\u4E0B\u573A\u666F\u53EF\u4EE5\u8003\u8651\u5229\u7528 Bitmap \u8FDB\u884C\u7CBE\u786E\u53BB\u91CD\uFF1A"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u67E5\u8BE2\u52A0\u901F\uFF1ABitmap \u5229\u7528\u4F4D\u8FD0\u7B97\u8FDB\u884C\u67E5\u8BE2\u8BA1\u7B97\uFF0C\u6027\u80FD\u8868\u73B0\u826F\u597D"}),"\n",(0,s.jsx)(e.li,{children:"\u538B\u7F29\u5B58\u50A8\uFF1A\u7531\u4E8E\u5C06\u660E\u7EC6\u6570\u636E\u538B\u7F29\u4E3A\u4E86\u4E00\u4E2A bit \u4F4D\uFF0CBitmap \u7C7B\u578B\u65E0\u8BBA\u5728\u78C1\u76D8\u8FD8\u662F\u5185\u5B58\u4E0A\uFF0C\u8D44\u6E90\u6D88\u8017\u90FD\u8FDC\u8FDC\u4F4E\u4E8E\u660E\u7EC6\u6570\u636E"}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["\u4F46 Bitmap \u53EA\u80FD\u5BF9 TINYINT\uFF0CSMALLINT\uFF0CINT \u548C BIGINT \u7C7B\u578B\u7684\u6570\u636E\u8FDB\u884C\u7CBE\u786E\u53BB\u91CD\u3002\u5982\u60F3\u8981\u4F7F\u7528 Bitmap \u5BF9\u5176\u4ED6\u7C7B\u578B\u7684\u6570\u636E\u7CBE\u786E\u53BB\u91CD\uFF0C\u5219\u9700\u8981\u989D\u5916\u6784\u5EFA\u5168\u5C40\u5B57\u5178\u3002Doris\u4F7F\u7528\u4E86RoaringBitmap\u5B9E\u73B0\u4E86Bimap\u7684\u7CBE\u786E\u53BB\u91CD\uFF0C\u539F\u7406\u548C\u7EC6\u8282\u53EF\u4EE5\u53C2\u8003",(0,s.jsx)(e.a,{href:"https://roaringbitmap.org/",children:"RoaringBitmap"}),"\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u4F7F\u7528-bitmap-\u8FDB\u884C\u7CBE\u786E\u53BB\u91CD",children:"\u4F7F\u7528 BITMAP \u8FDB\u884C\u7CBE\u786E\u53BB\u91CD"}),"\n",(0,s.jsx)(e.h3,{id:"\u521B\u5EFA\u8868",children:"\u521B\u5EFA\u8868"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"\u4F7F\u7528 Bitmap \u53BB\u91CD\u7684\u65F6\u5019\uFF0C\u9700\u8981\u5728\u5EFA\u8868\u8BED\u53E5\u4E2D\u5C06\u76EE\u6807\u5217\u7C7B\u578B\u8BBE\u7F6E\u6210 Bitmap\uFF0C\u805A\u5408\u51FD\u6570\u8BBE\u7F6E\u6210 BITMAP_UNION"}),"\n",(0,s.jsx)(e.li,{children:"Bitmap \u7C7B\u578B\u7684\u5217\u4E0D\u80FD\u4F5C\u4E3A Key \u5217\u4F7F\u7528"}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["\u521B\u5EFA\u4E00\u5F20\u805A\u5408\u8868 ",(0,s.jsx)(e.code,{children:"test_bitmap"}),"\u3002\u5176\u4E2D",(0,s.jsx)(e.code,{children:"id"}),"\u5217\u8868\u793A\u8BBF\u95EE\u7528\u6237\u7684 ID\uFF0C\u8FD9\u91CC\u6DFB\u52A0\u4E86",(0,s.jsx)(e.code,{children:"uv"}),"\u5217\u7C7B\u578B\u4E3A BITMAP\uFF0C\u8868\u793A\u4F7F\u7528\u805A\u5408\u51FD\u6570 BITMAP_UNION \u6765\u805A\u5408\u6570\u636E\uFF0C"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-SQL",children:"create table test_bitmap(\n        dt date,\n        id int,\n        name char(10),\n        province char(10),\n        os char(10),\n        uv bitmap bitmap_union\n)\nAggregate KEY (dt,id,name,province,os)\ndistributed by hash(id) buckets 10;\n"})}),"\n",(0,s.jsx)(e.h3,{id:"\u5BFC\u5165\u6570\u636E",children:"\u5BFC\u5165\u6570\u636E"}),"\n",(0,s.jsx)(e.p,{children:"\u793A\u4F8B\u6570\u636E\u5982\u4E0B\uFF08test_bitmap.csv\uFF09\uFF0C\u53EF\u4EE5\u901A\u8FC7 Stream Load\u5BFC\u5165\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-SQL",children:"2022-05-05,10001,\u6D4B\u8BD5 01,\u5317\u4EAC,windows \n2022-05-05,10002,\u6D4B\u8BD5 01,\u5317\u4EAC,linux \n2022-05-05,10003,\u6D4B\u8BD5 01,\u5317\u4EAC,macos \n2022-05-05,10004,\u6D4B\u8BD5 01,\u6CB3\u5317,windows \n2022-05-06,10001,\u6D4B\u8BD5 01,\u4E0A\u6D77,windows \n2022-05-06,10002,\u6D4B\u8BD5 01,\u4E0A\u6D77,linux \n2022-05-06,10003,\u6D4B\u8BD5 01,\u6C5F\u82CF,macos \n2022-05-06,10004,\u6D4B\u8BD5 01,\u9655\u897F,windows\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Stream load \u5BFC\u5165"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-SQL",children:'curl --location-trusted -u root: -H "label:label_test_bitmap_load" \\\n    -H "column_separator:," \\\n    -H "columns:dt,id,name,province,os, uv=to_bitmap(id)" -T test_bitmap.csv http://fe_IP:8030/api/demo/test_bitmap/_stream_load\n'})}),"\n",(0,s.jsx)(e.h2,{id:"\u67E5\u8BE2\u6570\u636E",children:"\u67E5\u8BE2\u6570\u636E"}),"\n",(0,s.jsx)(e.p,{children:"Bitmap \u5217\u4E0D\u5141\u8BB8\u76F4\u63A5\u67E5\u8BE2\u539F\u59CB\u503C\uFF0C\u53EA\u80FD\u901A\u8FC7 bitmap_union_count \u7684\u805A\u5408\u51FD\u6570\u8FDB\u884C\u67E5\u8BE2\u3002"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u6C42\u603B\u7684 UV"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-SQL",children:"mysql> select bitmap_union_count(uv) from test_bitmap;\n+---------------------+\n| bitmap_union_count(`uv`) |\n+---------------------+\n|                   4 |\n+---------------------+\n1 row in set (0.00 sec)\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u7B49\u4EF7\u4E8E\uFF1A"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-SQL",children:"mysql> SELECT COUNT(DISTINCT pv) FROM test_bitmap;\n+----------------------+\n| count(DISTINCT `uv`) |\n+----------------------+\n|                    4 |\n+----------------------+\n1 row in set (0.01 sec)\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u6C42\u6BCF\u4E00\u5929\u7684 UV"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-SQL",children:"mysql> select bitmap_union_count(uv) from test_bitmap group by dt;\n+---------------------+\n| bitmap_union_count(`uv`) |\n+---------------------+\n|                   4 |\n|                   4 |\n+---------------------+\n2 rows in set (0.01 sec)\n"})})]})}function h(n={}){let{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return d},a:function(){return r}});var i=t(667294);let s={},c=i.createContext(s);function r(n){let e=i.useContext(c);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),i.createElement(c.Provider,{value:e},n.children)}}}]);