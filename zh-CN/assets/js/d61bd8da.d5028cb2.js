"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["589915"],{771458:function(n,e,s){s.r(e),s.d(e,{metadata:()=>l,contentTitle:()=>a,default:()=>o,assets:()=>d,toc:()=>t,frontMatter:()=>r});var l=JSON.parse('{"id":"sql-manual/sql-statements/account-management/CREATE-USER","title":"CREATE USER","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-statements/account-management/CREATE-USER.md","sourceDirName":"sql-manual/sql-statements/account-management","slug":"/sql-manual/sql-statements/account-management/CREATE-USER","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/account-management/CREATE-USER","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"CREATE USER","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SHOW SNAPSHOT","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/data-modification/backup-and-restore/SHOW-SNAPSHOT"},"next":{"title":"ALTER USER","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/account-management/ALTER-USER"}}'),c=s("785893"),i=s("250065");let r={title:"CREATE USER",language:"zh-CN"},a=void 0,d={},t=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u5173\u952E\u8BCD",id:"\u5173\u952E\u8BCD",level:2},{value:"\u6700\u4F73\u5B9E\u8DF5",id:"\u6700\u4F73\u5B9E\u8DF5",level:3}];function E(n){let e={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,c.jsx)(e.p,{children:"CREATE USER \u547D\u4EE4\u7528\u4E8E\u521B\u5EFA\u4E00\u4E2A Doris \u7528\u6237\u3002"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"CREATE USER [IF EXISTS] user_identity [IDENTIFIED BY 'password']\n[DEFAULT ROLE 'role_name']\n[password_policy]\n[comment]  \n\nuser_identity:\n    'user_name'@'host'\n\npassword_policy:\n\n    1. PASSWORD_HISTORY [n|DEFAULT]\n    2. PASSWORD_EXPIRE [DEFAULT|NEVER|INTERVAL n DAY/HOUR/SECOND]\n    3. FAILED_LOGIN_ATTEMPTS n\n    4. PASSWORD_LOCK_TIME [n DAY/HOUR/SECOND|UNBOUNDED]\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u5728 Doris \u4E2D\uFF0C\u4E00\u4E2A user_identity \u552F\u4E00\u6807\u8BC6\u4E00\u4E2A\u7528\u6237\u3002user_identity \u7531\u4E24\u90E8\u5206\u7EC4\u6210\uFF0Cuser_name \u548C host\uFF0C\u5176\u4E2D username \u4E3A\u7528\u6237\u540D\u3002host \u6807\u8BC6\u7528\u6237\u7AEF\u8FDE\u63A5\u6240\u5728\u7684\u4E3B\u673A\u5730\u5740\u3002host \u90E8\u5206\u53EF\u4EE5\u4F7F\u7528 % \u8FDB\u884C\u6A21\u7CCA\u5339\u914D\u3002\u5982\u679C\u4E0D\u6307\u5B9A host\uFF0C\u9ED8\u8BA4\u4E3A '%'\uFF0C\u5373\u8868\u793A\u8BE5\u7528\u6237\u53EF\u4EE5\u4ECE\u4EFB\u610F host \u8FDE\u63A5\u5230 Doris\u3002"}),"\n",(0,c.jsx)(e.p,{children:"host \u90E8\u5206\u4E5F\u53EF\u6307\u5B9A\u4E3A domain\uFF0C\u8BED\u6CD5\u4E3A\uFF1A'user_name'@['domain']\uFF0C\u5373\u4F7F\u7528\u4E2D\u62EC\u53F7\u5305\u56F4\uFF0C\u5219 Doris \u4F1A\u8BA4\u4E3A\u8FD9\u4E2A\u662F\u4E00\u4E2A domain\uFF0C\u5E76\u5C1D\u8BD5\u89E3\u6790\u5176 ip \u5730\u5740\u3002"}),"\n",(0,c.jsx)(e.p,{children:"\u5982\u679C\u6307\u5B9A\u4E86\u89D2\u8272\uFF08ROLE\uFF09\uFF0C\u5219\u4F1A\u81EA\u52A8\u5C06\u8BE5\u89D2\u8272\u6240\u62E5\u6709\u7684\u6743\u9650\u8D4B\u4E88\u65B0\u521B\u5EFA\u7684\u8FD9\u4E2A\u7528\u6237\u3002\u5982\u679C\u4E0D\u6307\u5B9A\uFF0C\u5219\u8BE5\u7528\u6237\u9ED8\u8BA4\u6CA1\u6709\u4EFB\u4F55\u6743\u9650\u3002\u6307\u5B9A\u7684 ROLE \u5FC5\u987B\u5DF2\u7ECF\u5B58\u5728\u3002"}),"\n",(0,c.jsx)(e.p,{children:"password_policy \u662F\u7528\u4E8E\u6307\u5B9A\u5BC6\u7801\u8BA4\u8BC1\u767B\u5F55\u76F8\u5173\u7B56\u7565\u7684\u5B50\u53E5\uFF0C\u76EE\u524D\u652F\u6301\u4EE5\u4E0B\u7B56\u7565\uFF1A"}),"\n",(0,c.jsxs)(e.ol,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.code,{children:"PASSWORD_HISTORY"})}),"\n",(0,c.jsxs)(e.p,{children:["\u662F\u5426\u5141\u8BB8\u5F53\u524D\u7528\u6237\u91CD\u7F6E\u5BC6\u7801\u65F6\u4F7F\u7528\u5386\u53F2\u5BC6\u7801\u3002\u5982 ",(0,c.jsx)(e.code,{children:"PASSWORD_HISTORY 10"})," \u8868\u793A\u7981\u6B62\u4F7F\u7528\u8FC7\u53BB 10 \u6B21\u8BBE\u7F6E\u8FC7\u7684\u5BC6\u7801\u4E3A\u65B0\u5BC6\u7801\u3002\u5982\u679C\u8BBE\u7F6E\u4E3A ",(0,c.jsx)(e.code,{children:"PASSWORD_HISTORY DEFAULT"}),"\uFF0C\u5219\u4F1A\u4F7F\u7528\u5168\u5C40\u53D8\u91CF ",(0,c.jsx)(e.code,{children:"password_history"})," \u4E2D\u7684\u503C\u3002",(0,c.jsx)(e.code,{children:"0"})," \u8868\u793A\u4E0D\u542F\u7528\u8FD9\u4E2A\u529F\u80FD\u3002\u9ED8\u8BA4\u4E3A 0\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.code,{children:"PASSWORD_EXPIRE"})}),"\n",(0,c.jsxs)(e.p,{children:["\u8BBE\u7F6E\u5F53\u524D\u7528\u6237\u5BC6\u7801\u7684\u8FC7\u671F\u65F6\u95F4\u3002\u5982 ",(0,c.jsx)(e.code,{children:"PASSWORD_EXPIRE INTERVAL 10 DAY"})," \u8868\u793A\u5BC6\u7801\u4F1A\u5728 10 \u5929\u540E\u8FC7\u671F\u3002",(0,c.jsx)(e.code,{children:"PASSWORD_EXPIRE NEVER"})," \u8868\u793A\u5BC6\u7801\u4E0D\u8FC7\u671F\u3002\u5982\u679C\u8BBE\u7F6E\u4E3A ",(0,c.jsx)(e.code,{children:"PASSWORD_EXPIRE DEFAULT"}),"\uFF0C\u5219\u4F1A\u4F7F\u7528\u5168\u5C40\u53D8\u91CF ",(0,c.jsx)(e.code,{children:"default_password_lifetime"})," \u4E2D\u7684\u503C\u3002\u9ED8\u8BA4\u4E3A NEVER\uFF08\u6216 0\uFF09\uFF0C\u8868\u793A\u4E0D\u4F1A\u8FC7\u671F\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"FAILED_LOGIN_ATTEMPTS"})," \u548C ",(0,c.jsx)(e.code,{children:"PASSWORD_LOCK_TIME"})]}),"\n",(0,c.jsxs)(e.p,{children:["\u8BBE\u7F6E\u5F53\u524D\u7528\u6237\u767B\u5F55\u65F6\uFF0C\u5982\u679C\u4F7F\u7528\u9519\u8BEF\u7684\u5BC6\u7801\u767B\u5F55 n \u6B21\u540E\uFF0C\u8D26\u6237\u5C06\u88AB\u9501\u5B9A\uFF0C\u5E76\u8BBE\u7F6E\u9501\u5B9A\u65F6\u95F4\u3002\u5982 ",(0,c.jsx)(e.code,{children:"FAILED_LOGIN_ATTEMPTS 3 PASSWORD_LOCK_TIME 1 DAY"})," \u8868\u793A\u5982\u679C 3 \u6B21\u9519\u8BEF\u767B\u5F55\uFF0C\u5219\u8D26\u6237\u4F1A\u88AB\u9501\u5B9A\u4E00\u5929\u3002"]}),"\n",(0,c.jsx)(e.p,{children:"\u88AB\u9501\u5B9A\u7684\u8D26\u6237\u53EF\u4EE5\u901A\u8FC7 ALTER USER \u8BED\u53E5\u4E3B\u52A8\u89E3\u9501\u3002"}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,c.jsxs)(e.ol,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\u521B\u5EFA\u4E00\u4E2A\u65E0\u5BC6\u7801\u7528\u6237\uFF08\u4E0D\u6307\u5B9A host\uFF0C\u5219\u7B49\u4EF7\u4E8E jack@'%'\uFF09"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"CREATE USER 'jack';\n"})}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\u521B\u5EFA\u4E00\u4E2A\u6709\u5BC6\u7801\u7528\u6237\uFF0C\u5141\u8BB8\u4ECE '172.10.1.10' \u767B\u9646"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"CREATE USER jack@'172.10.1.10' IDENTIFIED BY '123456';\n"})}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\u4E3A\u4E86\u907F\u514D\u4F20\u9012\u660E\u6587\uFF0C\u7528\u4F8B 2 \u4E5F\u53EF\u4EE5\u4F7F\u7528\u4E0B\u9762\u7684\u65B9\u5F0F\u6765\u521B\u5EFA"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"CREATE USER jack@'172.10.1.10' IDENTIFIED BY PASSWORD '*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9';\n\u540E\u9762\u52A0\u5BC6\u7684\u5185\u5BB9\u53EF\u4EE5\u901A\u8FC7 PASSWORD() \u83B7\u5F97\u5230\uFF0C\u4F8B\u5982\uFF1A\nSELECT PASSWORD('123456');\n"})}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\u521B\u5EFA\u4E00\u4E2A\u5141\u8BB8\u4ECE '192.168' \u5B50\u7F51\u767B\u9646\u7684\u7528\u6237\uFF0C\u540C\u65F6\u6307\u5B9A\u5176\u89D2\u8272\u4E3A example_role"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"CREATE USER 'jack'@'192.168.%' DEFAULT ROLE 'example_role';\n"})}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\u521B\u5EFA\u4E00\u4E2A\u5141\u8BB8\u4ECE\u57DF\u540D 'example_domain' \u767B\u9646\u7684\u7528\u6237"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"CREATE USER 'jack'@['example_domain'] IDENTIFIED BY '12345';\n"})}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\u521B\u5EFA\u4E00\u4E2A\u7528\u6237\uFF0C\u5E76\u6307\u5B9A\u4E00\u4E2A\u89D2\u8272"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"CREATE USER 'jack'@'%' IDENTIFIED BY '12345' DEFAULT ROLE 'my_role';\n"})}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\u521B\u5EFA\u4E00\u4E2A\u7528\u6237\uFF0C\u8BBE\u5B9A\u5BC6\u7801 10 \u5929\u540E\u8FC7\u671F\uFF0C\u5E76\u4E14\u8BBE\u7F6E\u5982\u679C 3 \u6B21\u9519\u8BEF\u767B\u5F55\u5219\u8D26\u6237\u4F1A\u88AB\u9501\u5B9A\u4E00\u5929\u3002"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"CREATE USER 'jack' IDENTIFIED BY '12345' PASSWORD_EXPIRE INTERVAL 10 DAY FAILED_LOGIN_ATTEMPTS 3 PASSWORD_LOCK_TIME 1 DAY;\n"})}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\u521B\u5EFA\u4E00\u4E2A\u7528\u6237\uFF0C\u5E76\u9650\u5236\u4E0D\u53EF\u91CD\u7F6E\u5BC6\u7801\u4E3A\u6700\u8FD1 8 \u6B21\u662F\u7528\u8FC7\u7684\u5BC6\u7801\u3002"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"CREATE USER 'jack' IDENTIFIED BY '12345' PASSWORD_HISTORY 8;\n"})}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"\u521B\u5EFA\u4E00\u4E2A\u7528\u6237\u5E76\u6DFB\u52A0\u6CE8\u91CA"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:" CREATE USER 'jack' COMMENT \"this is my first user\";\n"})}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(e.h2,{id:"\u5173\u952E\u8BCD",children:"\u5173\u952E\u8BCD"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"CREATE, USER\n"})}),"\n",(0,c.jsx)(e.h3,{id:"\u6700\u4F73\u5B9E\u8DF5",children:"\u6700\u4F73\u5B9E\u8DF5"})]})}function o(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(E,{...n})}):E(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return a},a:function(){return r}});var l=s(667294);let c={},i=l.createContext(c);function r(n){let e=l.useContext(i);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:r(n.components),l.createElement(i.Provider,{value:e},n.children)}}}]);