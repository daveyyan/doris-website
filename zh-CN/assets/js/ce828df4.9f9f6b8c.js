"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["937985"],{808944:function(e,n,i){i.r(n),i.d(n,{metadata:()=>s,contentTitle:()=>c,default:()=>p,assets:()=>o,toc:()=>d,frontMatter:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-functions/ip-functions/is-ipv4-mapped","title":"IS_IPV4_MAPPED","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/ip-functions/is-ipv4-mapped.md","sourceDirName":"sql-manual/sql-functions/ip-functions","slug":"/sql-manual/sql-functions/ip-functions/is-ipv4-mapped","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/ip-functions/is-ipv4-mapped","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"IS_IPV4_MAPPED","language":"zh-CN"},"sidebar":"docs","previous":{"title":"IS_IPV4_COMPAT","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/ip-functions/is-ipv4-compat"},"next":{"title":"IPV4_CIDR_TO_RANGE","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/ip-functions/ipv4-cidr-to-range"}}'),t=i("785893"),l=i("250065");let r={title:"IS_IPV4_MAPPED",language:"zh-CN"},c=void 0,o={},d=[{value:"IS_IPV4_MAPPED",id:"is_ipv4_mapped",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Notice",id:"notice",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}];function a(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"is_ipv4_mapped",children:"IS_IPV4_MAPPED"}),"\n",(0,t.jsx)(n.p,{children:"IS_IPV4_MAPPED"}),"\n",(0,t.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"VARCHAR IS_IPV4_MAPPED(INET6_ATON(VARCHAR ipv4_addr))"})}),"\n",(0,t.jsx)(n.p,{children:"\u8BE5\u51FD\u6570\u91C7\u7528\u4EE5\u6570\u5B57\u5F62\u5F0F\u8868\u793A\u7684\u4E8C\u8FDB\u5236\u5B57\u7B26\u4E32\u5F62\u5F0F\u7684lPv6\u5730\u5740\uFF0C\u7531INET6_ATON\u8FD4\u56DE\u3002\n\u5982\u679C\u53C2\u6570\u662F\u6709\u6548\u7684IPv4\u6620\u5C04IPv6\u5730\u5740\uFF0C\u5219\u8FD4\u56DE1\uFF0C\u5426\u5219\u8FD4\u56DE0\uFF0C\u9664\u975Eexpr\u4E3A NULL\uFF0C\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\u8BE5\u51FD\u6570\u8FD4\u56DENULL\u3002\nIPv4\u6620\u5C04\u5730\u5740\u7684\u683C\u5F0F\u4E3A::ffff:ipv4_address"}),"\n",(0,t.jsx)(n.h4,{id:"notice",children:"Notice"}),"\n",(0,t.jsxs)(n.p,{children:["\u5F53\u6E90\u8F93\u5165\u6CA1\u6709",(0,t.jsx)(n.code,{children:"'::ffff:'"}),"\u524D\u7F00\u65F6\uFF0C\u4F46\u5982\u679C\u5B83\u4ECD\u7136\u662F\u6709\u6548\u7684 ipv4 \u5730\u5740\uFF0C\u5219\u8BE5\u7ED3\u679C\u4E5F\u5C06\u4E3A ",(0,t.jsx)(n.code,{children:"1"}),"\uFF0C\u56E0\u4E3A ",(0,t.jsx)(n.code,{children:"INET6_ATON()"})," \u4F1A\u81EA\u52A8\u4E3A\u6709\u6548\u7684 ipv4 \u5730\u5740\u6DFB\u52A0\u524D\u7F00\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"mysql> SELECT IS_IPV4_MAPPED(INET6_ATON('::ffff:10.0.5.9')) AS is_result;\n+-----------+\n| is_result |\n+-----------+\n|         1 |\n+-----------+\n1 row in set (0.02 sec)\n\nmysql> SELECT IS_IPV4_MAPPED(INET6_ATON('::10.0.5.9')) AS is_result;\n+-----------+\n| is_result |\n+-----------+\n|         0 |\n+-----------+\n1 row in set (0.03 sec)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,t.jsx)(n.p,{children:"IS_IPV4_MAPPED, IP"})]})}function p(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return c},a:function(){return r}});var s=i(667294);let t={},l=s.createContext(t);function r(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);