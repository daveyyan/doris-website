"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["251187"],{348544:function(t,e,n){n.r(e),n.d(e,{metadata:()=>l,contentTitle:()=>d,default:()=>h,assets:()=>a,toc:()=>c,frontMatter:()=>r});var l=JSON.parse('{"id":"admin-manual/system-tables/information_schema/active_queries","title":"active_queries","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/admin-manual/system-tables/information_schema/active_queries.md","sourceDirName":"admin-manual/system-tables/information_schema","slug":"/admin-manual/system-tables/information_schema/active_queries","permalink":"/zh-CN/docs/admin-manual/system-tables/information_schema/active_queries","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"active_queries","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u6982\u8FF0","permalink":"/zh-CN/docs/admin-manual/system-tables/overview"},"next":{"title":"backend_active_tasks","permalink":"/zh-CN/docs/admin-manual/system-tables/information_schema/backend_active_tasks"}}'),s=n("785893"),i=n("250065");let r={title:"active_queries",language:"zh-CN"},d=void 0,a={},c=[{value:"\u6982\u8FF0",id:"\u6982\u8FF0",level:2},{value:"\u6240\u5C5E\u6570\u636E\u5E93",id:"\u6240\u5C5E\u6570\u636E\u5E93",level:2},{value:"\u8868\u4FE1\u606F",id:"\u8868\u4FE1\u606F",level:2}];function x(t){let e={code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"\u6982\u8FF0",children:"\u6982\u8FF0"}),"\n",(0,s.jsx)(e.p,{children:"\u7528\u4E8E\u67E5\u770B\u5F53\u524D\u6B63\u5728\u6267\u884C\u7684\u67E5\u8BE2"}),"\n",(0,s.jsx)(e.h2,{id:"\u6240\u5C5E\u6570\u636E\u5E93",children:"\u6240\u5C5E\u6570\u636E\u5E93"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"information_schema"})}),"\n",(0,s.jsx)(e.h2,{id:"\u8868\u4FE1\u606F",children:"\u8868\u4FE1\u606F"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"\u5217\u540D"}),(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"\u7C7B\u578B"}),(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"\u8BF4\u660E"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"QUERY_ID"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(256)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u67E5\u8BE2\u7684 ID"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"QUERY_START_TIME"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(256)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u67E5\u8BE2\u5F00\u59CB\u65F6\u95F4"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"QUERY_TIME_MS"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"bigint"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u67E5\u8BE2\u6267\u884C\u65F6\u95F4"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"WORKLOAD_GROUP_ID"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"bigint"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u67E5\u8BE2\u6240\u5C5E Workload Group \u7684 ID"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"DATABASE"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(256)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u67E5\u8BE2\u6267\u884C\u65F6\u6240\u5728\u7684 Database"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"FRONTEND_INSTANCE"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(256)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u63A5\u6536\u67E5\u8BE2\u8BF7\u6C42\u7684 Frontend \u5B9E\u4F8B IP"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"QUEUE_START_TIME"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(256)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u5F00\u59CB\u6392\u961F\u65F6\u95F4\uFF0C\u4E3A\u7A7A\u8868\u793A\u6CA1\u6709\u7ECF\u8FC7\u6392\u961F"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"QUEUE_END_TIME"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(256)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u7ED3\u675F\u6392\u961F\u65F6\u95F4\uFF0C\u4E3A\u7A7A\u8868\u793A\u6CA1\u6709\u7ECF\u8FC7\u6392\u961F"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"QUERY_STATUS"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(256)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u67E5\u8BE2\u72B6\u6001"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"SQL"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"text"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u67E5\u8BE2\u8BED\u53E5\u6587\u672C"})]})]})]})]})}function h(t={}){let{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(x,{...t})}):x(t)}},250065:function(t,e,n){n.d(e,{Z:function(){return d},a:function(){return r}});var l=n(667294);let s={},i=l.createContext(s);function r(t){let e=l.useContext(i);return l.useMemo(function(){return"function"==typeof t?t(e):{...e,...t}},[e,t])}function d(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:r(t.components),l.createElement(i.Provider,{value:e},t.children)}}}]);