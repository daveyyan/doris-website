"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["516136"],{677122:function(n,e,r){r.r(e),r.d(e,{metadata:()=>t,contentTitle:()=>s,default:()=>o,assets:()=>c,toc:()=>h,frontMatter:()=>l});var t=JSON.parse('{"id":"install/preparation/cluster-planning","title":"\u96C6\u7FA4\u89C4\u5212","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/install/preparation/cluster-planning.md","sourceDirName":"install/preparation","slug":"/install/preparation/cluster-planning","permalink":"/zh-CN/docs/install/preparation/cluster-planning","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"\u96C6\u7FA4\u89C4\u5212","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u8F6F\u786C\u4EF6\u73AF\u5883\u68C0\u67E5","permalink":"/zh-CN/docs/install/preparation/env-checking"},"next":{"title":"\u64CD\u4F5C\u7CFB\u7EDF\u68C0\u67E5","permalink":"/zh-CN/docs/install/preparation/os-checking"}}'),d=r("785893"),i=r("250065");let l={title:"\u96C6\u7FA4\u89C4\u5212",language:"zh-CN"},s=void 0,c={},h=[{value:"\u7AEF\u53E3\u89C4\u5212",id:"\u7AEF\u53E3\u89C4\u5212",level:2},{value:"\u8282\u70B9\u6570\u91CF\u89C4\u5212",id:"\u8282\u70B9\u6570\u91CF\u89C4\u5212",level:2},{value:"FE \u8282\u70B9\u6570\u91CF",id:"fe-\u8282\u70B9\u6570\u91CF",level:3},{value:"BE \u8282\u70B9\u6570\u91CF",id:"be-\u8282\u70B9\u6570\u91CF",level:3}];function x(n){let e={h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(e.h2,{id:"\u7AEF\u53E3\u89C4\u5212",children:"\u7AEF\u53E3\u89C4\u5212"}),"\n",(0,d.jsx)(e.p,{children:"Doris \u7684\u5404\u4E2A\u5B9E\u4F8B\u901A\u8FC7\u7F51\u7EDC\u8FDB\u884C\u901A\u4FE1\uFF0C\u5176\u6B63\u5E38\u8FD0\u884C\u9700\u8981\u7F51\u7EDC\u73AF\u5883\u63D0\u4F9B\u4EE5\u4E0B\u7AEF\u53E3\u3002\u7BA1\u7406\u5458\u53EF\u4EE5\u6839\u636E\u5B9E\u9645\u73AF\u5883\u81EA\u884C\u8C03\u6574 Doris \u7684\u7AEF\u53E3\u914D\u7F6E\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"\u5B9E\u4F8B\u540D\u79F0"}),(0,d.jsx)(e.th,{children:"\u7AEF\u53E3\u540D\u79F0"}),(0,d.jsx)(e.th,{children:"\u9ED8\u8BA4\u7AEF\u53E3"}),(0,d.jsx)(e.th,{children:"\u901A\u4FE1\u65B9\u5411"}),(0,d.jsx)(e.th,{children:"\u8BF4\u660E"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"BE"}),(0,d.jsx)(e.td,{children:"be_port"}),(0,d.jsx)(e.td,{children:"9060"}),(0,d.jsx)(e.td,{children:"FE -> BE"}),(0,d.jsx)(e.td,{children:"BE \u4E0A Thrift Server \u7684\u7AEF\u53E3\uFF0C\u7528\u4E8E\u63A5\u6536\u6765\u81EA FE \u7684\u8BF7\u6C42"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"BE"}),(0,d.jsx)(e.td,{children:"webserver_port"}),(0,d.jsx)(e.td,{children:"8040"}),(0,d.jsx)(e.td,{children:"BE <-> BE"}),(0,d.jsx)(e.td,{children:"BE \u4E0A\u7684 HTTP Server \u7AEF\u53E3"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"BE"}),(0,d.jsx)(e.td,{children:"heartbeat_service_port"}),(0,d.jsx)(e.td,{children:"9050"}),(0,d.jsx)(e.td,{children:"FE -> BE"}),(0,d.jsx)(e.td,{children:"BE \u4E0A\u7684\u5FC3\u8DF3\u670D\u52A1\u7AEF\u53E3\uFF08Thrift\uFF09\uFF0C\u7528\u4E8E\u63A5\u6536\u6765\u81EA FE \u7684\u5FC3\u8DF3"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"BE"}),(0,d.jsx)(e.td,{children:"brpc_port"}),(0,d.jsx)(e.td,{children:"8060"}),(0,d.jsx)(e.td,{children:"FE <-> BE\uFF0CBE <-> BE"}),(0,d.jsx)(e.td,{children:"BE \u4E0A\u7684 BRPC \u7AEF\u53E3\uFF0C\u7528\u4E8E BE \u4E4B\u95F4\u7684\u901A\u4FE1"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"FE"}),(0,d.jsx)(e.td,{children:"http_port"}),(0,d.jsx)(e.td,{children:"8030"}),(0,d.jsx)(e.td,{children:"FE <-> FE\uFF0CClient <-> FE"}),(0,d.jsx)(e.td,{children:"FE \u4E0A\u7684 HTTP Server \u7AEF\u53E3"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"FE"}),(0,d.jsx)(e.td,{children:"rpc_port"}),(0,d.jsx)(e.td,{children:"9020"}),(0,d.jsx)(e.td,{children:"BE -> FE\uFF0CFE <-> FE"}),(0,d.jsx)(e.td,{children:"FE \u4E0A\u7684 Thrift Server \u7AEF\u53E3\uFF0C\u6BCF\u4E2A FE \u7684\u914D\u7F6E\u9700\u4FDD\u6301\u4E00\u81F4"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"FE"}),(0,d.jsx)(e.td,{children:"query_port"}),(0,d.jsx)(e.td,{children:"9030"}),(0,d.jsx)(e.td,{children:"Client <-> FE"}),(0,d.jsx)(e.td,{children:"FE \u4E0A\u7684 MySQL Server \u7AEF\u53E3"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"FE"}),(0,d.jsx)(e.td,{children:"edit_log_port"}),(0,d.jsx)(e.td,{children:"9010"}),(0,d.jsx)(e.td,{children:"FE <-> FE"}),(0,d.jsx)(e.td,{children:"FE \u4E0A\u7684 bdbje \u901A\u4FE1\u7AEF\u53E3"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Broker"}),(0,d.jsx)(e.td,{children:"broker_ipc_port"}),(0,d.jsx)(e.td,{children:"8000"}),(0,d.jsx)(e.td,{children:"FE -> Broker\uFF0CBE -> Broker"}),(0,d.jsx)(e.td,{children:"Broker \u4E0A\u7684 Thrift Server \u7AEF\u53E3\uFF0C\u7528\u4E8E\u63A5\u6536\u8BF7\u6C42"})]})]})]}),"\n",(0,d.jsx)(e.h2,{id:"\u8282\u70B9\u6570\u91CF\u89C4\u5212",children:"\u8282\u70B9\u6570\u91CF\u89C4\u5212"}),"\n",(0,d.jsx)(e.h3,{id:"fe-\u8282\u70B9\u6570\u91CF",children:"FE \u8282\u70B9\u6570\u91CF"}),"\n",(0,d.jsx)(e.p,{children:"FE \u8282\u70B9\u4E3B\u8981\u8D1F\u8D23\u7528\u6237\u8BF7\u6C42\u7684\u63A5\u5165\u3001\u67E5\u8BE2\u89E3\u6790\u89C4\u5212\u3001\u5143\u6570\u636E\u7BA1\u7406\u53CA\u8282\u70B9\u7BA1\u7406\u7B49\u5DE5\u4F5C\u3002"}),"\n",(0,d.jsx)(e.p,{children:"\u5BF9\u4E8E\u751F\u4EA7\u96C6\u7FA4\uFF0C\u4E00\u822C\u5EFA\u8BAE\u90E8\u7F72\u81F3\u5C11 3 \u4E2A\u8282\u70B9\u7684 FE \u4EE5\u5B9E\u73B0\u9AD8\u53EF\u7528\u73AF\u5883\u3002FE \u8282\u70B9\u5206\u4E3A\u4EE5\u4E0B\u4E24\u79CD\u89D2\u8272\uFF1A"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsx)(e.p,{children:"Follower \u8282\u70B9\uFF1A\u53C2\u4E0E\u9009\u4E3E\u64CD\u4F5C\uFF0C\u5F53 Master \u8282\u70B9\u5B95\u673A\u65F6\uFF0C\u4F1A\u9009\u62E9\u4E00\u4E2A\u53EF\u7528\u7684 Follower \u8282\u70B9\u6210\u4E3A\u65B0\u7684 Master\u3002"}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsx)(e.p,{children:"Observer \u8282\u70B9\uFF1A\u4EC5\u4ECE Leader \u8282\u70B9\u540C\u6B65\u5143\u6570\u636E\uFF0C\u4E0D\u53C2\u4E0E\u9009\u4E3E\uFF0C\u53EF\u7528\u4E8E\u6A2A\u5411\u6269\u5C55\u4EE5\u63D0\u5347\u5143\u6570\u636E\u7684\u8BFB\u670D\u52A1\u80FD\u529B\u3002"}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(e.p,{children:"\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u5EFA\u8BAE\u90E8\u7F72\u81F3\u5C11 3 \u4E2A Follower \u8282\u70B9\u3002\u5728\u9AD8\u5E76\u53D1\u7684\u573A\u666F\u4E2D\uFF0C\u53EF\u4EE5\u901A\u8FC7\u589E\u52A0 Observer \u8282\u70B9\u7684\u6570\u91CF\u6765\u63D0\u9AD8\u96C6\u7FA4\u7684\u8FDE\u63A5\u6570\u3002"}),"\n",(0,d.jsx)(e.h3,{id:"be-\u8282\u70B9\u6570\u91CF",children:"BE \u8282\u70B9\u6570\u91CF"}),"\n",(0,d.jsx)(e.p,{children:"BE \u8282\u70B9\u8D1F\u8D23\u6570\u636E\u7684\u5B58\u50A8\u4E0E\u8BA1\u7B97\u3002\u5728\u751F\u4EA7\u73AF\u5883\u4E2D\uFF0C\u4E3A\u4E86\u6570\u636E\u7684\u53EF\u9760\u6027\u548C\u5BB9\u9519\u6027\uFF0C\u901A\u5E38\u4F1A\u4F7F\u7528 3 \u526F\u672C\u5B58\u50A8\u6570\u636E\uFF0C\u56E0\u6B64\u5EFA\u8BAE\u90E8\u7F72\u81F3\u5C11 3 \u4E2A BE \u8282\u70B9\u3002"}),"\n",(0,d.jsx)(e.p,{children:"BE \u8282\u70B9\u652F\u6301\u6A2A\u5411\u6269\u5BB9\uFF0C\u901A\u8FC7\u589E\u52A0 BE \u8282\u70B9\u7684\u6570\u91CF\uFF0C\u53EF\u4EE5\u6709\u6548\u63D0\u5347\u67E5\u8BE2\u7684\u6027\u80FD\u548C\u5E76\u53D1\u5904\u7406\u80FD\u529B\u3002"})]})}function o(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(x,{...n})}):x(n)}},250065:function(n,e,r){r.d(e,{Z:function(){return s},a:function(){return l}});var t=r(667294);let d={},i=t.createContext(d);function l(n){let e=t.useContext(i);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:l(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);