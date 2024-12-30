"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["747538"],{366556:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>s,default:()=>u,assets:()=>c,toc:()=>o,frontMatter:()=>l});var i=JSON.parse('{"id":"admin-manual/open-api/fe-http/query-schema-action","title":"Query Schema Action","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/open-api/fe-http/query-schema-action.md","sourceDirName":"admin-manual/open-api/fe-http","slug":"/admin-manual/open-api/fe-http/query-schema-action","permalink":"/zh-CN/docs/dev/admin-manual/open-api/fe-http/query-schema-action","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Query Schema Action","language":"zh-CN"},"sidebar":"docs","previous":{"title":"Query Detail Action","permalink":"/zh-CN/docs/dev/admin-manual/open-api/fe-http/query-detail-action"},"next":{"title":"Query Stats Action","permalink":"/zh-CN/docs/dev/admin-manual/open-api/fe-http/query-stats-action"}}'),r=t("785893"),a=t("250065");let l={title:"Query Schema Action",language:"zh-CN"},s=void 0,c={},o=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Example",id:"example",level:2}];function d(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"POST /api/query_schema/<ns_name>/<db_name>\n"})}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Query Schema Action \u53EF\u4EE5\u8FD4\u56DE\u7ED9\u5B9A\u7684 SQL \u6709\u5173\u7684\u8868\u7684\u5EFA\u8868\u8BED\u53E5\u3002\u53EF\u4EE5\u7528\u4E8E\u672C\u5730\u6D4B\u8BD5\u4E00\u4E9B\u67E5\u8BE2\u573A\u666F\u3002\n\u8BE5 API \u5728 1.2 \u7248\u672C\u4E2D\u53D1\u5E03\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"path-parameters",children:"Path parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"<db_name>"})}),"\n",(0,r.jsx)(n.p,{children:"\u6307\u5B9A\u6570\u636E\u5E93\u540D\u79F0\u3002\u8BE5\u6570\u636E\u5E93\u4F1A\u88AB\u89C6\u4E3A\u5F53\u524D session \u7684\u9ED8\u8BA4\u6570\u636E\u5E93\uFF0C\u5982\u679C\u5728 SQL \u4E2D\u7684\u8868\u540D\u6CA1\u6709\u9650\u5B9A\u6570\u636E\u5E93\u540D\u79F0\u7684\u8BDD\uFF0C\u5219\u4F7F\u7528\u8BE5\u6570\u636E\u5E93\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"query-parameters",children:"Query parameters"}),"\n",(0,r.jsx)(n.p,{children:"\u65E0"}),"\n",(0,r.jsx)(n.h2,{id:"request-body",children:"Request body"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"text/plain\n\nsql\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"sql \u5B57\u6BB5\u4E3A\u5177\u4F53\u7684 SQL"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u8FD4\u56DE\u7ED3\u679C\u96C6"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'CREATE TABLE `tbl1` (\n  `k1` int(11) NULL,\n  `k2` int(11) NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`k1`, `k2`)\nCOMMENT \'OLAP\'\nDISTRIBUTED BY HASH(`k1`) BUCKETS 3\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1",\n"in_memory" = "false",\n"storage_format" = "V2",\n"disable_auto_compaction" = "false"\n);\n\nCREATE TABLE `tbl2` (\n  `k1` int(11) NULL,\n  `k2` int(11) NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`k1`, `k2`)\nCOMMENT \'OLAP\'\nDISTRIBUTED BY HASH(`k1`) BUCKETS 3\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1",\n"in_memory" = "false",\n"storage_format" = "V2",\n"disable_auto_compaction" = "false"\n);\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5728\u672C\u5730\u6587\u4EF6 1.sql \u4E2D\u5199\u5165 SQL"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"select tbl1.k2 from tbl1 join tbl2 on tbl1.k1 = tbl2.k1;\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u4F7F\u7528 curl \u547D\u4EE4\u83B7\u53D6\u5EFA\u8868\u8BED\u53E5"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"curl -X POST -H 'Content-Type: text/plain'  -uroot: http://127.0.0.1:8030/api/query_schema/internal/db1 -d@1.sql\n"})}),"\n"]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return l}});var i=t(667294);let r={},a=i.createContext(r);function l(e){let n=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);