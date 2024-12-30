"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["209964"],{582775:function(n,e,i){i.r(e),i.d(e,{metadata:()=>t,contentTitle:()=>c,default:()=>a,assets:()=>r,toc:()=>u,frontMatter:()=>o});var t=JSON.parse('{"id":"sql-manual/sql-functions/ip-functions/ipv4-num-to-string","title":"IPV4_NUM_TO_STRING","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/ip-functions/ipv4-num-to-string.md","sourceDirName":"sql-manual/sql-functions/ip-functions","slug":"/sql-manual/sql-functions/ip-functions/ipv4-num-to-string","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/ip-functions/ipv4-num-to-string","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"IPV4_NUM_TO_STRING","language":"zh-CN"},"sidebar":"docs","previous":{"title":"WINDOW_FUNCTION_WINDOW_FUNNEL","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/window-functions/window-function-window-funnel"},"next":{"title":"IPV4_TO_IPV6","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/ip-functions/ipv4-to-ipv6"}}'),s=i("785893"),l=i("250065");let o={title:"IPV4_NUM_TO_STRING",language:"zh-CN"},c=void 0,r={},u=[{value:"IPV4_NUM_TO_STRING",id:"ipv4_num_to_string",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Notice",id:"notice",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}];function d(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"ipv4_num_to_string",children:"IPV4_NUM_TO_STRING"}),"\n",(0,s.jsx)(e.p,{children:"IPV4_NUM_TO_STRING"}),"\n",(0,s.jsx)(e.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"VARCHAR IPV4_NUM_TO_STRING(BIGINT ipv4_num)"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"VARCHAR INET_NTOA(BIGINT ipv4_num)"})}),"\n",(0,s.jsx)(e.p,{children:"\u63A5\u53D7\u4E00\u4E2A\u7C7B\u578B\u4E3AInt16\u3001Int32\u3001Int64 \u4E14\u5927\u7AEF\u8868\u793A\u7684 IPv4 \u7684\u5730\u5740\uFF0C\u8FD4\u56DE\u76F8\u5E94 IPv4 \u7684\u5B57\u7B26\u4E32\u8868\u73B0\u5F62\u5F0F\uFF0C\u683C\u5F0F\u4E3AA.B.C.D\uFF08\u4EE5\u70B9\u5206\u5272\u7684\u5341\u8FDB\u5236\u6570\u5B57\uFF09\u3002"}),"\n",(0,s.jsx)(e.h4,{id:"notice",children:"Notice"}),"\n",(0,s.jsxs)(e.p,{children:["\u5BF9\u4E8E\u8D1F\u6570\u6216\u8D85\u8FC7 ",(0,s.jsx)(e.code,{children:"4294967295"}),"\uFF08\u5373 ",(0,s.jsx)(e.code,{children:"'255.255.255.255'"}),"\uFF09\u7684\u5165\u53C2\u90FD\u8FD4\u56DE ",(0,s.jsx)(e.code,{children:"NULL"}),"\uFF0C\u8868\u793A\u65E0\u6548\u8F93\u5165\u3002\u8BE5\u51FD\u6570\u6709\u4E00\u4E2A\u522B\u540D\u4E3A ",(0,s.jsx)(e.code,{children:"INET_NOTA"}),"\u3002"]}),"\n",(0,s.jsx)(e.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"mysql> select ipv4_num_to_string(3232235521);\n+--------------------------------+\n| ipv4_num_to_string(3232235521) |\n+--------------------------------+\n| 192.168.0.1                    |\n+--------------------------------+\n1 row in set (0.01 sec)\n\nmysql> select num,ipv4_num_to_string(num) from ipv4_bi;\n+------------+---------------------------+\n| num        | ipv4_num_to_string(`num`) |\n+------------+---------------------------+\n|         -1 | NULL                      |\n|          0 | 0.0.0.0                   |\n| 2130706433 | 127.0.0.1                 |\n| 4294967295 | 255.255.255.255           |\n| 4294967296 | NULL                      |\n+------------+---------------------------+\n7 rows in set (0.01 sec)\n"})}),"\n",(0,s.jsx)(e.h3,{id:"keywords",children:"Keywords"}),"\n",(0,s.jsx)(e.p,{children:"IPV4_NUM_TO_STRING, INET_NTOA, IP"})]})}function a(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},250065:function(n,e,i){i.d(e,{Z:function(){return c},a:function(){return o}});var t=i(667294);let s={},l=t.createContext(s);function o(n){let e=t.useContext(l);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),t.createElement(l.Provider,{value:e},n.children)}}}]);