"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["881695"],{889071:function(e,n,l){l.r(n),l.d(n,{metadata:()=>s,contentTitle:()=>i,default:()=>h,assets:()=>c,toc:()=>t,frontMatter:()=>r});var s=JSON.parse('{"id":"admin-manual/data-admin/recyclebin","title":"\u4ECE\u56DE\u6536\u7AD9\u6062\u590D","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/data-admin/recyclebin.md","sourceDirName":"admin-manual/data-admin","slug":"/admin-manual/data-admin/recyclebin","permalink":"/zh-CN/docs/dev/admin-manual/data-admin/recyclebin","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u4ECE\u56DE\u6536\u7AD9\u6062\u590D","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u6027\u80FD","permalink":"/zh-CN/docs/dev/admin-manual/data-admin/ccr/performance"},"next":{"title":"\u6982\u8FF0","permalink":"/zh-CN/docs/dev/admin-manual/workload-management/workload-management-summary"}}'),a=l("785893"),d=l("250065");let r={title:"\u4ECE\u56DE\u6536\u7AD9\u6062\u590D",language:"zh-CN"},i=void 0,c={},t=[{value:"\u6570\u636E\u751F\u547D\u5468\u671F",id:"\u6570\u636E\u751F\u547D\u5468\u671F",level:2},{value:"\u4ECE\u56DE\u6536\u7AD9\u6062\u590D",id:"\u4ECE\u56DE\u6536\u7AD9\u6062\u590D",level:2},{value:"\u67E5\u8BE2\u56DE\u6536\u7AD9",id:"\u67E5\u8BE2\u56DE\u6536\u7AD9",level:3},{value:"\u5F00\u59CB\u6570\u636E\u6062\u590D",id:"\u5F00\u59CB\u6570\u636E\u6062\u590D",level:3}];function o(e){let n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,d.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"\u6570\u636E\u751F\u547D\u5468\u671F",children:"\u6570\u636E\u751F\u547D\u5468\u671F"}),"\n",(0,a.jsxs)(n.p,{children:["\u5F53\u7528\u6237\u6267\u884C",(0,a.jsx)(n.code,{children:"DROP DATABASE/TABLE/PARTITION"}),"\u547D\u4EE4\u800C\u4E0D\u4F7F\u7528",(0,a.jsx)(n.code,{children:"FORCE"}),"\u65F6\uFF0CDoris\u4F1A\u5C06\u5220\u9664\u7684\u6570\u636E\u5E93\u3001\u8868\u6216\u5206\u533A\u79FB\u52A8\u5230\u56DE\u6536\u7AD9\u3002\u53EF\u4EE5\u4F7F\u7528",(0,a.jsx)(n.code,{children:"RECOVER"}),"\u547D\u4EE4\u4ECE\u56DE\u6536\u7AD9\u6062\u590D\u5DF2\u5220\u9664\u7684\u6570\u636E\u5E93\u3001\u8868\u6216\u5206\u533A\u7684\u6240\u6709\u6570\u636E\uFF0C\u4F7F\u5176\u518D\u6B21\u53EF\u89C1\u3002"]}),"\n",(0,a.jsx)(n.h2,{id:"\u4ECE\u56DE\u6536\u7AD9\u6062\u590D",children:"\u4ECE\u56DE\u6536\u7AD9\u6062\u590D"}),"\n",(0,a.jsxs)(n.p,{children:["\u4E3A\u4E86\u907F\u514D\u56E0\u8BEF\u64CD\u4F5C\u9020\u6210\u7684\u707E\u96BE\uFF0CDoris\u652F\u6301\u610F\u5916\u5220\u9664\u7684\u6570\u636E\u5E93\u3001\u8868\u548C\u5206\u533A\u7684\u6570\u636E\u6062\u590D\u3002\u5728\u5220\u9664\u8868\u6216\u6570\u636E\u5E93\u540E\uFF0CDoris\u4E0D\u4F1A\u7ACB\u5373\u7269\u7406\u5220\u9664\u6570\u636E\u3002\u76F8\u53CD\uFF0C\u5B83\u4F1A\u5728\u4E00\u5B9A\u65F6\u95F4\u5185\u5C06\u5176\u79FB\u52A8\u5230\u5783\u573E\u7BB1\uFF08\u9ED8\u8BA4\u662F1\u5929\uFF0C\u53EF\u4EE5\u901A\u8FC7",(0,a.jsx)(n.code,{children:"catalog_trash_expire_second"}),"\u53C2\u6570\u5728",(0,a.jsx)(n.code,{children:"fe.conf"}),"\u4E2D\u8FDB\u884C\u914D\u7F6E\uFF09\u3002\u7BA1\u7406\u5458\u53EF\u4EE5\u4F7F\u7528",(0,a.jsx)(n.code,{children:"RECOVER"}),"\u547D\u4EE4\u6062\u590D\u610F\u5916\u5220\u9664\u7684\u6570\u636E\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"\u6CE8\u610F\uFF1A"})," \u5982\u679C\u4F7F\u7528",(0,a.jsx)(n.code,{children:"DROP FORCE"}),"\u6267\u884C\u5220\u9664\uFF0C\u5219\u6570\u636E\u5C06\u7ACB\u5373\u88AB\u5220\u9664\uFF0C\u65E0\u6CD5\u6062\u590D\u3002"]}),"\n",(0,a.jsx)(n.h3,{id:"\u67E5\u8BE2\u56DE\u6536\u7AD9",children:"\u67E5\u8BE2\u56DE\u6536\u7AD9"}),"\n",(0,a.jsx)(n.p,{children:"\u60A8\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u67E5\u8BE2\u56DE\u6536\u7AD9\uFF1A"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'SHOW CATALOG RECYCLE BIN [WHERE NAME [= "name" | LIKE "name_matcher"]];\n'})}),"\n",(0,a.jsxs)(n.p,{children:["\u6709\u5173\u66F4\u8BE6\u7EC6\u7684\u8BED\u6CD5\u548C\u6700\u4F73\u5B9E\u8DF5\uFF0C\u8BF7\u53C2\u9605",(0,a.jsx)(n.a,{href:"/zh-CN/docs/dev/sql-manual/sql-statements/Show-Statements/SHOW-CATALOG-RECYCLE-BIN",children:"SHOW-CATALOG-RECYCLE-BIN"}),"\u547D\u4EE4\u624B\u518C\uFF0C\u60A8\u8FD8\u53EF\u4EE5\u5728MySql\u5BA2\u6237\u7AEF\u547D\u4EE4\u884C\u4E2D\u8F93\u5165",(0,a.jsx)(n.code,{children:"help SHOW CATALOG RECYCLE BIN"}),"\u4EE5\u83B7\u53D6\u66F4\u591A\u5E2E\u52A9\u3002"]}),"\n",(0,a.jsx)(n.h3,{id:"\u5F00\u59CB\u6570\u636E\u6062\u590D",children:"\u5F00\u59CB\u6570\u636E\u6062\u590D"}),"\n",(0,a.jsx)(n.p,{children:"\u8981\u6062\u590D\u5DF2\u5220\u9664\u7684\u6570\u636E\uFF0C\u60A8\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\uFF1A"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsxs)(n.em,{children:["\u6062\u590D\u540D\u4E3A",(0,a.jsx)(n.code,{children:"example_db"}),"\u7684\u6570\u636E\u5E93"]}),"\uFF1A"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"RECOVER DATABASE example_db;\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsxs)(n.em,{children:["\u6062\u590D\u540D\u4E3A",(0,a.jsx)(n.code,{children:"example_tbl"}),"\u7684\u8868"]}),"\uFF1A"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"RECOVER TABLE example_db.example_tbl;\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsxs)(n.em,{children:["\u6062\u590D\u8868",(0,a.jsx)(n.code,{children:"example_tbl"}),"\u4E2D\u7684\u5206\u533Ap1"]}),"\uFF1A"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"RECOVER PARTITION p1 FROM example_tbl;\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u6709\u5173RECOVER\u4F7F\u7528\u7684\u66F4\u8BE6\u7EC6\u7684\u8BED\u6CD5\u548C\u6700\u4F73\u5B9E\u8DF5\uFF0C\u8BF7\u53C2\u9605",(0,a.jsx)(n.a,{href:"/zh-CN/docs/dev/sql-manual/sql-statements/Database-Administration-Statements/RECOVER",children:"RECOVER"}),"\u547D\u4EE4\u624B\u518C\uFF0C\u60A8\u8FD8\u53EF\u4EE5\u5728MySql\u5BA2\u6237\u7AEF\u547D\u4EE4\u884C\u4E2D\u8F93\u5165",(0,a.jsx)(n.code,{children:"HELP RECOVER"}),"\u4EE5\u83B7\u53D6\u66F4\u591A\u5E2E\u52A9\u3002"]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return i},a:function(){return r}});var s=l(667294);let a={},d=s.createContext(a);function r(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);