"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["507658"],{971299:function(e,n,s){s.r(n),s.d(n,{metadata:()=>l,contentTitle:()=>i,default:()=>u,assets:()=>c,toc:()=>d,frontMatter:()=>r});var l=JSON.parse('{"id":"sql-manual/sql-statements/cluster-management/instance-management/MODIFY-BACKEND","title":"MODIFY BACKEND","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/cluster-management/instance-management/MODIFY-BACKEND.md","sourceDirName":"sql-manual/sql-statements/cluster-management/instance-management","slug":"/sql-manual/sql-statements/cluster-management/instance-management/MODIFY-BACKEND","permalink":"/zh-CN/docs/sql-manual/sql-statements/cluster-management/instance-management/MODIFY-BACKEND","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"MODIFY BACKEND","language":"zh-CN"},"sidebar":"docs","previous":{"title":"DROP BACKEND","permalink":"/zh-CN/docs/sql-manual/sql-statements/cluster-management/instance-management/DROP-BACKEND"},"next":{"title":"SHOW BACKENDS","permalink":"/zh-CN/docs/sql-manual/sql-statements/cluster-management/instance-management/SHOW-BACKENDS"}}'),t=s("785893"),a=s("250065");let r={title:"MODIFY BACKEND",language:"zh-CN"},i=void 0,c={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u5173\u952E\u8BCD",id:"\u5173\u952E\u8BCD",level:2},{value:"\u6700\u4F73\u5B9E\u8DF5",id:"\u6700\u4F73\u5B9E\u8DF5",level:2}];function o(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,t.jsx)(n.p,{children:"\u4FEE\u6539 BE \u8282\u70B9\u5C5E\u6027\uFF08\u4EC5\u7BA1\u7406\u5458\u4F7F\u7528\uFF01\uFF09"}),"\n",(0,t.jsx)(n.p,{children:"\u8BED\u6CD5\uFF1A"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u901A\u8FC7 host \u548C port \u67E5\u627E backend"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'ALTER SYSTEM MODIFY BACKEND "host:heartbeat_port" SET ("key" = "value"[, ...]);\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u901A\u8FC7 backend_id \u67E5\u627E backend"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'ALTER SYSTEM MODIFY BACKEND "id1" SET ("key" = "value"[, ...]);\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u8BF4\u660E\uFF1A"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"host \u53EF\u4EE5\u662F\u4E3B\u673A\u540D\u6216\u8005 ip \u5730\u5740"}),"\n",(0,t.jsx)(n.li,{children:"heartbeat_port \u4E3A\u8BE5\u8282\u70B9\u7684\u5FC3\u8DF3\u7AEF\u53E3"}),"\n",(0,t.jsx)(n.li,{children:"\u4FEE\u6539 BE \u8282\u70B9\u5C5E\u6027\u76EE\u524D\u652F\u6301\u4EE5\u4E0B\u5C5E\u6027\uFF1A"}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"tag.xxx\uFF1A\u8D44\u6E90\u6807\u7B7E"}),"\n",(0,t.jsx)(n.li,{children:"disable_query: \u67E5\u8BE2\u7981\u7528\u5C5E\u6027"}),"\n",(0,t.jsx)(n.li,{children:"disable_load: \u5BFC\u5165\u7981\u7528\u5C5E\u6027"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u6CE8\uFF1A"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:'\u53EF\u4EE5\u7ED9\u4E00\u4E2A Backend \u8BBE\u7F6E\u591A\u79CD\u8D44\u6E90\u6807\u7B7E\u3002\u4F46\u5FC5\u987B\u5305\u542B "tag.location"\u3002'}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u4FEE\u6539 BE \u7684\u8D44\u6E90\u6807\u7B7E"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'ALTER SYSTEM MODIFY BACKEND "host1:heartbeat_port" SET ("tag.location" = "group_a");\nALTER SYSTEM MODIFY BACKEND "host1:heartbeat_port" SET ("tag.location" = "group_a", "tag.compute" = "c1");\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'ALTER SYSTEM MODIFY BACKEND "id1" SET ("tag.location" = "group_a");\nALTER SYSTEM MODIFY BACKEND "id1" SET ("tag.location" = "group_a", "tag.compute" = "c1");\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u4FEE\u6539 BE \u7684\u67E5\u8BE2\u7981\u7528\u5C5E\u6027"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'ALTER SYSTEM MODIFY BACKEND "host1:heartbeat_port" SET ("disable_query" = "true");\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'ALTER SYSTEM MODIFY BACKEND "id1" SET ("disable_query" = "true");\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u4FEE\u6539 BE \u7684\u5BFC\u5165\u7981\u7528\u5C5E\u6027"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'ALTER SYSTEM MODIFY BACKEND "host1:heartbeat_port" SET ("disable_load" = "true");\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'ALTER SYSTEM MODIFY BACKEND "id1" SET ("disable_load" = "true");\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u5173\u952E\u8BCD",children:"\u5173\u952E\u8BCD"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"ALTER, SYSTEM, ADD, BACKEND, ALTER SYSTEM\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u6700\u4F73\u5B9E\u8DF5",children:"\u6700\u4F73\u5B9E\u8DF5"})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return r}});var l=s(667294);let t={},a=l.createContext(t);function r(e){let n=l.useContext(a);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);