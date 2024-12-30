"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["827402"],{704906:function(e,n,s){s.r(n),s.d(n,{metadata:()=>l,contentTitle:()=>i,default:()=>u,assets:()=>c,toc:()=>d,frontMatter:()=>r});var l=JSON.parse('{"id":"sql-manual/sql-statements/session/query/CLEAN-ALL-QUERY-STATS","title":"CLEAN ALL QUERY STATS","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/session/query/CLEAN-ALL-QUERY-STATS.md","sourceDirName":"sql-manual/sql-statements/session/query","slug":"/sql-manual/sql-statements/session/query/CLEAN-ALL-QUERY-STATS","permalink":"/zh-CN/docs/sql-manual/sql-statements/session/query/CLEAN-ALL-QUERY-STATS","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"CLEAN ALL QUERY STATS","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SHOW QUERY STATS","permalink":"/zh-CN/docs/sql-manual/sql-statements/session/query/SHOW-QUERY-STATS"},"next":{"title":"KILL CONNECTION","permalink":"/zh-CN/docs/sql-manual/sql-statements/session/connection/KILL-CONNECTION"}}'),t=s("785893"),a=s("250065");let r={title:"CLEAN ALL QUERY STATS",language:"zh-CN"},i=void 0,c={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u5173\u952E\u8BCD",id:"\u5173\u952E\u8BCD",level:2},{value:"\u6700\u4F73\u5B9E\u8DF5",id:"\u6700\u4F73\u5B9E\u8DF5",level:2}];function o(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,t.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u7528\u8BF7\u7A7A\u67E5\u8BE2\u7EDF\u8BA1\u4FE1\u606F"}),"\n",(0,t.jsx)(n.p,{children:"\u8BED\u6CD5\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CLEAN [ALL| DATABASE | TABLE] QUERY STATS [[FOR db_name]|[FROM|IN] table_name]];\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u8BF4\u660E\uFF1A"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u5982\u679C\u6307\u5B9A ALL\uFF0C\u5219\u6E05\u7A7A\u6240\u6709\u67E5\u8BE2\u7EDF\u8BA1\u4FE1\u606F\uFF0C\u5305\u62EC\u6570\u636E\u5E93\u548C\u8868\u7684\u7EDF\u8BA1\u4FE1\u606F\uFF0C\u9700\u8981 admin \u6743\u9650"}),"\n",(0,t.jsx)(n.li,{children:"\u5982\u679C\u6307\u5B9A DATABASE\uFF0C\u5219\u6E05\u7A7A\u6307\u5B9A\u6570\u636E\u5E93\u7684\u67E5\u8BE2\u7EDF\u8BA1\u4FE1\u606F\uFF0C\u9700\u8981\u5BF9\u5E94 database \u7684 alter \u6743\u9650"}),"\n",(0,t.jsx)(n.li,{children:"\u5982\u679C\u6307\u5B9A TABLE\uFF0C\u5219\u6E05\u7A7A\u6307\u5B9A\u8868\u7684\u67E5\u8BE2\u7EDF\u8BA1\u4FE1\u606F\uFF0C\u9700\u8981\u5BF9\u5E94\u8868\u7684 alter \u6743\u9650"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u6E05\u7A7A\u6240\u6709\u7EDF\u8BA1\u4FE1\u606F"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"clean all query stats;\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u6E05\u7A7A\u6307\u5B9A\u6570\u636E\u5E93\u7684\u7EDF\u8BA1\u4FE1\u606F"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"clean database query stats for test_query_db;\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u6E05\u7A7A\u6307\u5B9A\u8868\u7684\u7EDF\u8BA1\u4FE1\u606F"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"clean table query stats from test_query_db.baseall;\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u5173\u952E\u8BCD",children:"\u5173\u952E\u8BCD"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"CLEAN, QUERY, STATS\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u6700\u4F73\u5B9E\u8DF5",children:"\u6700\u4F73\u5B9E\u8DF5"})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return r}});var l=s(667294);let t={},a=l.createContext(t);function r(e){let n=l.useContext(a);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);