"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["148784"],{357060:function(e,n,c){c.r(n),c.d(n,{metadata:()=>l,contentTitle:()=>a,default:()=>o,assets:()=>h,toc:()=>d,frontMatter:()=>i});var l=JSON.parse('{"id":"lakehouse/filecache","title":"\u6570\u636E\u7F13\u5B58","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/lakehouse/filecache.md","sourceDirName":"lakehouse","slug":"/lakehouse/filecache","permalink":"/zh-CN/docs/dev/lakehouse/filecache","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u6570\u636E\u7F13\u5B58","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u5206\u6790 S3/HDFS \u4E0A\u7684\u6587\u4EF6","permalink":"/zh-CN/docs/dev/lakehouse/file"},"next":{"title":"\u5143\u6570\u636E\u7F13\u5B58","permalink":"/zh-CN/docs/dev/lakehouse/metacache"}}'),t=c("785893"),s=c("250065");let i={title:"\u6570\u636E\u7F13\u5B58",language:"zh-CN"},a=void 0,h={},d=[{value:"\u539F\u7406",id:"\u539F\u7406",level:2},{value:"\u4F7F\u7528\u65B9\u5F0F",id:"\u4F7F\u7528\u65B9\u5F0F",level:2},{value:"FE \u914D\u7F6E",id:"fe-\u914D\u7F6E",level:3},{value:"BE \u914D\u7F6E",id:"be-\u914D\u7F6E",level:3},{value:"\u7F13\u5B58\u53EF\u89C2\u6D4B\u6027",id:"\u7F13\u5B58\u53EF\u89C2\u6D4B\u6027",level:2},{value:"\u67E5\u770B Data Cache \u547D\u4E2D\u60C5\u51B5",id:"\u67E5\u770B-data-cache-\u547D\u4E2D\u60C5\u51B5",level:3},{value:"\u76D1\u63A7\u6307\u6807",id:"\u76D1\u63A7\u6307\u6807",level:3}];function r(e){let n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"\u6570\u636E\u7F13\u5B58(Data Cache)\u901A\u8FC7\u7F13\u5B58\u6700\u8FD1\u8BBF\u95EE\u7684\u8FDC\u7AEF\u5B58\u50A8\u7CFB\u7EDF(HDFS \u6216\u5BF9\u8C61\u5B58\u50A8)\u7684\u6570\u636E\u6587\u4EF6\uFF0C\u52A0\u901F\u540E\u7EED\u8BBF\u95EE\u76F8\u540C\u6570\u636E\u7684\u67E5\u8BE2\u3002\u5728\u9891\u7E41\u8BBF\u95EE\u76F8\u540C\u6570\u636E\u7684\u67E5\u8BE2\u573A\u666F\u4E2D\uFF0CData Cache \u53EF\u4EE5\u907F\u514D\u91CD\u590D\u7684\u8FDC\u7AEF\u6570\u636E\u8BBF\u95EE\u5F00\u9500\uFF0C\u63D0\u5347\u70ED\u70B9\u6570\u636E\u7684\u67E5\u8BE2\u5206\u6790\u6027\u80FD\u548C\u7A33\u5B9A\u6027\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u539F\u7406",children:"\u539F\u7406"}),"\n",(0,t.jsxs)(n.p,{children:["Data Cache \u5C06\u8BBF\u95EE\u7684\u8FDC\u7A0B\u6570\u636E\u7F13\u5B58\u5230\u672C\u5730\u7684 BE \u8282\u70B9\u3002\u539F\u59CB\u7684\u6570\u636E\u6587\u4EF6\u4F1A\u6839\u636E\u8BBF\u95EE\u7684 IO \u5927\u5C0F\u5207\u5206\u4E3A Block\uFF0CBlock \u88AB\u5B58\u50A8\u5230\u672C\u5730\u6587\u4EF6 ",(0,t.jsx)(n.code,{children:"cache_path/hash(filepath).substr(0, 3)/hash(filepath)/offset"})," \u4E2D\uFF0C\u5E76\u5728 BE \u8282\u70B9\u4E2D\u4FDD\u5B58 Block \u7684\u5143\u4FE1\u606F\u3002\u5F53\u8BBF\u95EE\u76F8\u540C\u7684\u8FDC\u7A0B\u6587\u4EF6\u65F6\uFF0Cdoris \u4F1A\u68C0\u67E5\u672C\u5730\u7F13\u5B58\u4E2D\u662F\u5426\u5B58\u5728\u8BE5\u6587\u4EF6\u7684\u7F13\u5B58\u6570\u636E\uFF0C\u5E76\u6839\u636E Block \u7684 offset \u548C size\uFF0C\u786E\u8BA4\u54EA\u4E9B\u6570\u636E\u4ECE\u672C\u5730 Block \u8BFB\u53D6\uFF0C\u54EA\u4E9B\u6570\u636E\u4ECE\u8FDC\u7A0B\u62C9\u8D77\uFF0C\u5E76\u7F13\u5B58\u8FDC\u7A0B\u62C9\u53D6\u7684\u65B0\u6570\u636E\u3002BE \u8282\u70B9\u91CD\u542F\u7684\u65F6\u5019\uFF0C\u626B\u63CF ",(0,t.jsx)(n.code,{children:"cache_path"})," \u76EE\u5F55\uFF0C\u6062\u590D Block \u7684\u5143\u4FE1\u606F\u3002\u5F53\u7F13\u5B58\u5927\u5C0F\u8FBE\u5230\u9608\u503C\u4E0A\u9650\u7684\u65F6\u5019\uFF0C\u6309\u7167 LRU \u539F\u5219\u6E05\u7406\u957F\u4E45\u672A\u8BBF\u95EE\u7684 Block\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u4F7F\u7528\u65B9\u5F0F",children:"\u4F7F\u7528\u65B9\u5F0F"}),"\n",(0,t.jsx)(n.p,{children:"Data Cache \u9ED8\u8BA4\u5173\u95ED\uFF0C\u9700\u8981\u5728 FE \u548C BE \u4E2D\u8BBE\u7F6E\u76F8\u5173\u53C2\u6570\u8FDB\u884C\u5F00\u542F\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"fe-\u914D\u7F6E",children:"FE \u914D\u7F6E"}),"\n",(0,t.jsx)(n.p,{children:"\u5355\u4E2A\u4F1A\u8BDD\u4E2D\u5F00\u542F Data Cache:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"SET enable_file_cache = true;\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5168\u5C40\u5F00\u542F Data Cache:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"SET GLOBAL enable_file_cache = true;\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Data Cache \u529F\u80FD\u4EC5\u4F5C\u7528\u4E8E\u9488\u5BF9\u6587\u4EF6\u7684\u5916\u8868\u67E5\u8BE2\uFF08\u5982 Hive\u3001Hudi \uFF09\u3002\u5BF9\u5185\u8868\u67E5\u8BE2\uFF0C\u6216\u975E\u6587\u4EF6\u7684\u5916\u8868\u67E5\u8BE2\uFF08\u5982 JDBC\u3001Elasticsearch\uFF09\u7B49\u65E0\u5F71\u54CD\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"be-\u914D\u7F6E",children:"BE \u914D\u7F6E"}),"\n",(0,t.jsx)(n.p,{children:"\u6DFB\u52A0\u53C2\u6570\u5230 BE \u8282\u70B9\u7684\u914D\u7F6E\u6587\u4EF6 conf/be.conf \u4E2D\uFF0C\u5E76\u91CD\u542F BE \u8282\u70B9\u8BA9\u914D\u7F6E\u751F\u6548\u3002"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u53C2\u6570"}),(0,t.jsx)(n.th,{children:"\u5FC5\u9009\u9879"}),(0,t.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"enable_file_cache"})}),(0,t.jsx)(n.td,{children:"\u662F"}),(0,t.jsx)(n.td,{children:"\u662F\u5426\u542F\u7528 Data Cache\uFF0C\u9ED8\u8BA4 false"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"file_cache_path"})}),(0,t.jsx)(n.td,{children:"\u662F"}),(0,t.jsxs)(n.td,{children:["\u7F13\u5B58\u76EE\u5F55\u7684\u76F8\u5173\u914D\u7F6E\uFF0Cjson\u683C\u5F0F\uFF0C\u4F8B\u5B50: ",(0,t.jsx)(n.code,{children:'[{"path": "/path/to/file_cache1", "total_size":53687091200},{"path": "/path/to/file_cache2", "total_size":53687091200},{"path": "/path/to/file_cache3", "total_size":53687091200}]'}),"\u3002",(0,t.jsx)(n.code,{children:"path"})," \u662F\u7F13\u5B58\u7684\u4FDD\u5B58\u8DEF\u5F84\uFF0C",(0,t.jsx)(n.code,{children:"total_size"})," \u662F\u7F13\u5B58\u7684\u5927\u5C0F\u4E0A\u9650\u3002"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"clear_file_cache"})}),(0,t.jsx)(n.td,{children:"\u5426"}),(0,t.jsx)(n.td,{children:"BE \u91CD\u542F\u65F6\u662F\u5426\u5220\u9664\u4E4B\u524D\u7684\u7F13\u5B58\u6570\u636E\uFF0C\u9ED8\u8BA4 false"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"\u7F13\u5B58\u53EF\u89C2\u6D4B\u6027",children:"\u7F13\u5B58\u53EF\u89C2\u6D4B\u6027"}),"\n",(0,t.jsx)(n.h3,{id:"\u67E5\u770B-data-cache-\u547D\u4E2D\u60C5\u51B5",children:"\u67E5\u770B Data Cache \u547D\u4E2D\u60C5\u51B5"}),"\n",(0,t.jsxs)(n.p,{children:["\u6267\u884C ",(0,t.jsx)(n.code,{children:"set enable_profile=true"})," \u6253\u5F00\u4F1A\u8BDD\u53D8\u91CF\uFF0C\u53EF\u4EE5\u5728 FE \u7684 web \u9875\u9762\u7684 Queris \u6807\u7B7E\u4E2D\u67E5\u770B\u5230\u4F5C\u4E1A\u7684 Profile\u3002Data Cache \u76F8\u5173\u7684\u6307\u6807\u5982\u4E0B:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"-  FileCache:  0ns\n    -  BytesScannedFromCache:  2.02  GB\n    -  BytesScannedFromRemote:  0.00  \n    -  BytesWriteIntoCache:  0.00  \n    -  LocalIOUseTimer:  2s723ms\n    -  NumLocalIOTotal:  444\n    -  NumRemoteIOTotal:  0\n    -  NumSkipCacheIOTotal:  0\n    -  RemoteIOUseTimer:  0ns\n    -  WriteCacheIOUseTimer:  0ns\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"BytesScannedFromCache"}),"\uFF1A\u4ECE\u672C\u5730\u7F13\u5B58\u4E2D\u8BFB\u53D6\u7684\u6570\u636E\u91CF\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"BytesScannedFromRemote"}),"\uFF1A\u4ECE\u8FDC\u7AEF\u8BFB\u53D6\u7684\u6570\u636E\u91CF\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"BytesWriteIntoCache"}),"\uFF1A\u5199\u5165\u7F13\u5B58\u7684\u6570\u636E\u91CF\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"LocalIOUseTimer"}),"\uFF1A\u672C\u5730\u7F13\u5B58\u7684 IO \u65F6\u95F4\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"RemoteIOUseTimer"}),"\uFF1A\u8FDC\u7AEF\u8BFB\u53D6\u7684 IO \u65F6\u95F4\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"NumLocalIOTotal"}),"\uFF1A\u672C\u5730\u7F13\u5B58\u7684 IO \u6B21\u6570\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"NumRemoteIOTotal"}),"\uFF1A\u8FDC\u7AEF IO \u6B21\u6570\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"WriteCacheIOUseTimer"}),"\uFF1A\u5199\u5165\u7F13\u5B58\u7684 IO \u65F6\u95F4\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5982\u679C ",(0,t.jsx)(n.code,{children:"BytesScannedFromRemote"})," \u4E3A 0\uFF0C\u8868\u793A\u5168\u90E8\u547D\u4E2D\u7F13\u5B58\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"\u76D1\u63A7\u6307\u6807",children:"\u76D1\u63A7\u6307\u6807"}),"\n",(0,t.jsxs)(n.p,{children:["\u7528\u6237\u53EF\u4EE5\u901A\u8FC7\u7CFB\u7EDF\u8868 ",(0,t.jsx)(n.a,{href:"/zh-CN/docs/dev/admin-manual/system-tables/information_schema/file_cache_statistics",children:"file_cache_statistics"})," \u67E5\u770B\u5404\u4E2A Backend \u8282\u70B9\u7684\u7F13\u5B58\u7EDF\u8BA1\u6307\u6807\u3002"]})]})}function o(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},250065:function(e,n,c){c.d(n,{Z:function(){return a},a:function(){return i}});var l=c(667294);let t={},s=l.createContext(t);function i(e){let n=l.useContext(s);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);