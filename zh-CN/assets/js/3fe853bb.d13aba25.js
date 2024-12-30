"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["278599"],{758522:function(e,n,t){t.r(n),t.d(n,{metadata:()=>a,contentTitle:()=>l,default:()=>o,assets:()=>c,toc:()=>A,frontMatter:()=>i});var a=JSON.parse('{"id":"sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CANCEL-REBALANCE-DISK","title":"ADMIN-CANCEL-REBALANCE-DISK","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CANCEL-REBALANCE-DISK.md","sourceDirName":"sql-manual/sql-reference/Database-Administration-Statements","slug":"/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CANCEL-REBALANCE-DISK","permalink":"/zh-CN/docs/1.2/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CANCEL-REBALANCE-DISK","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"ADMIN-CANCEL-REBALANCE-DISK","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ADMIN-REBALANCE-DISK","permalink":"/zh-CN/docs/1.2/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-REBALANCE-DISK"},"next":{"title":"SHOW ALTER TABLE MATERIALIZED VIEW","permalink":"/zh-CN/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-ALTER-TABLE-MATERIALIZED-VIEW"}}'),s=t("785893"),r=t("250065");let i={title:"ADMIN-CANCEL-REBALANCE-DISK",language:"zh-CN"},l=void 0,c={},A=[{value:"ADMIN-CANCEL-REBALANCE-DISK",id:"admin-cancel-rebalance-disk",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"admin-cancel-rebalance-disk",children:"ADMIN-CANCEL-REBALANCE-DISK"}),"\n",(0,s.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,s.jsx)(n.p,{children:"ADMIN CANCEL REBALANCE DISK"}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'\u8BE5\u8BED\u53E5\u7528\u4E8E\u53D6\u6D88\u4F18\u5148\u5747\u8861BE\u7684\u78C1\u76D8\n\n\u8BED\u6CD5\uFF1A\n\n    ADMIN CANCEL REBALANCE DISK [ON ("BackendHost1:BackendHeartBeatPort1", "BackendHost2:BackendHeartBeatPort2", ...)];\n\n\u8BF4\u660E\uFF1A\n\n    1. \u8BE5\u8BED\u53E5\u4EC5\u8868\u793A\u7CFB\u7EDF\u4E0D\u518D\u4F18\u5148\u5747\u8861\u6307\u5B9ABE\u7684\u78C1\u76D8\u6570\u636E\u3002\u7CFB\u7EDF\u4ECD\u4F1A\u4EE5\u9ED8\u8BA4\u8C03\u5EA6\u65B9\u5F0F\u5747\u8861BE\u7684\u78C1\u76D8\u6570\u636E\u3002\n'})}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'1. \u53D6\u6D88\u96C6\u7FA4\u6240\u6709BE\u7684\u4F18\u5148\u78C1\u76D8\u5747\u8861\n\n    ADMIN CANCEL REBALANCE DISK;\n\n2. \u53D6\u6D88\u6307\u5B9ABE\u7684\u4F18\u5148\u78C1\u76D8\u5747\u8861\n\n    ADMIN CANCEL REBALANCE DISK ON ("192.168.1.1:1234", "192.168.1.2:1234");\n'})}),"\n",(0,s.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"ADMIN,CANCEL,REBALANCE,DISK\n"})}),"\n",(0,s.jsx)(n.h3,{id:"best-practice",children:"Best Practice"})]})}function o(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var a=t(667294);let s={},r=a.createContext(s);function i(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);