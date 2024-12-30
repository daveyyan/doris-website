"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["759035"],{798924:function(e,n,l){l.r(n),l.d(n,{metadata:()=>t,contentTitle:()=>o,default:()=>u,assets:()=>c,toc:()=>a,frontMatter:()=>i});var t=JSON.parse('{"id":"sql-manual/sql-reference/Show-Statements/SHOW-COLLATION","title":"SHOW-COLLATION","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-reference/Show-Statements/SHOW-COLLATION.md","sourceDirName":"sql-manual/sql-reference/Show-Statements","slug":"/sql-manual/sql-reference/Show-Statements/SHOW-COLLATION","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-COLLATION","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"SHOW-COLLATION","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SHOW-COLUMN-STATS","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-COLUMN-STATS"},"next":{"title":"SHOW-DATABASES","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-DATABASES"}}'),s=l("785893"),r=l("250065");let i={title:"SHOW-COLLATION",language:"zh-CN"},o=void 0,c={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u8FD4\u56DE\u7ED3\u679C",id:"\u8FD4\u56DE\u7ED3\u679C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2}];function d(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728 Doris \u4E2D\uFF0C",(0,s.jsx)(n.code,{children:"SHOW COLLATION"})," \u547D\u4EE4\u7528\u4E8E\u663E\u793A\u6570\u636E\u5E93\u4E2D\u53EF\u7528\u7684\u5B57\u7B26\u96C6\u6821\u5BF9\u3002\u6821\u5BF9\u662F\u4E00\u7EC4\u51B3\u5B9A\u6570\u636E\u5982\u4F55\u6392\u5E8F\u548C\u6BD4\u8F83\u7684\u89C4\u5219\u3002\u8FD9\u4E9B\u89C4\u5219\u4F1A\u5F71\u54CD\u5B57\u7B26\u6570\u636E\u7684\u5B58\u50A8\u548C\u68C0\u7D22\u3002\u6B64\u547D\u4EE4\u6240\u8FD4\u56DE\u7684\u5185\u5BB9\u4EC5\u7528\u4E8E\u517C\u5BB9 MySQL \u7684\u884C\u4E3A\u3002\u4E0D\u4EE3\u8868 Doris \u771F\u662F\u652F\u6301\u7684\u5B57\u7B26\u96C6\u6821\u5BF9\u5217\u8868\u3002Doris \u76EE\u524D\u4E3B\u8981\u652F\u6301 utf8mb4_0900_bin \u8FD9\u4E00\u79CD\u6821\u5BF9\u65B9\u5F0F\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"SHOW COLLATION\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u8FD4\u56DE\u7ED3\u679C",children:"\u8FD4\u56DE\u7ED3\u679C"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"SHOW COLLATION"})," \u547D\u4EE4\u8FD4\u56DE\u4EE5\u4E0B\u5B57\u6BB5\uFF1A"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Collation\uFF1A\u6821\u5BF9\u540D\u79F0"}),"\n",(0,s.jsx)(n.li,{children:"Charset\uFF1A\u5B57\u7B26\u96C6"}),"\n",(0,s.jsx)(n.li,{children:"Id\uFF1A\u6821\u5BF9\u7684ID"}),"\n",(0,s.jsx)(n.li,{children:"Default\uFF1A\u662F\u5426\u662F\u8BE5\u5B57\u7B26\u96C6\u7684\u9ED8\u8BA4\u6821\u5BF9"}),"\n",(0,s.jsx)(n.li,{children:"Compiled\uFF1A\u662F\u5426\u5DF2\u7F16\u8BD1"}),"\n",(0,s.jsx)(n.li,{children:"Sortlen\uFF1A\u6392\u5E8F\u957F\u5EA6"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"how collation;\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"+-----------------+---------+------+---------+----------+---------+\n| Collation       | Charset | Id   | Default | Compiled | Sortlen |\n+-----------------+---------+------+---------+----------+---------+\n| utf8_general_ci | utf8    |   33 | Yes     | Yes      |       1 |\n+-----------------+---------+------+---------+----------+---------+\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,s.jsx)(n.p,{children:"\u5728 Doris \u4E2D\uFF0C\u867D\u7136\u517C\u5BB9 MySQL \u7684\u8BBE\u7F6E collation \u7684\u547D\u4EE4\u3002\u4F46\u662F\u5B9E\u9645\u5E76\u4E0D\u4F1A\u751F\u6548\u3002\u6267\u884C\u65F6\uFF0C\u6C38\u8FDC\u4F1A\u4F7F\u7528 utf8mb4_0900_bin \u4F5C\u4E3A\u6BD4\u8F83\u89C4\u5219\u3002"})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return o},a:function(){return i}});var t=l(667294);let s={},r=t.createContext(s);function i(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);