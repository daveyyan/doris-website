"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["847201"],{566063:function(n,e,s){s.r(e),s.d(e,{metadata:()=>t,contentTitle:()=>c,default:()=>a,assets:()=>o,toc:()=>d,frontMatter:()=>r});var t=JSON.parse('{"id":"sql-manual/sql-functions/string-functions/hex","title":"HEX","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/string-functions/hex.md","sourceDirName":"sql-manual/sql-functions/string-functions","slug":"/sql-manual/sql-functions/string-functions/hex","permalink":"/zh-CN/docs/sql-manual/sql-functions/string-functions/hex","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"HEX","language":"zh-CN"},"sidebar":"docs","previous":{"title":"NOT_NULL_OR_EMPTY","permalink":"/zh-CN/docs/sql-manual/sql-functions/string-functions/not-null-or-empty"},"next":{"title":"UNHEX","permalink":"/zh-CN/docs/sql-manual/sql-functions/string-functions/unhex"}}'),l=s("785893"),i=s("250065");let r={title:"HEX",language:"zh-CN"},c=void 0,o={},d=[{value:"hex",id:"hex",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"hex",children:"hex"}),"\n",(0,l.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,l.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.code,{children:"VARCHAR hex(VARCHAR str)"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.code,{children:"VARCHAR hex(BIGINT num)"})}),"\n",(0,l.jsx)(e.p,{children:"\u5982\u679C\u8F93\u5165\u53C2\u6570\u662F\u6570\u5B57\uFF0C\u8FD4\u56DE\u5341\u516D\u8FDB\u5236\u503C\u7684\u5B57\u7B26\u4E32\u8868\u793A\u5F62\u5F0F\uFF1B"}),"\n",(0,l.jsx)(e.p,{children:"\u5982\u679C\u8F93\u5165\u53C2\u6570\u662F\u5B57\u7B26\u4E32\uFF0C\u5219\u5C06\u6BCF\u4E2A\u5B57\u7B26\u8F6C\u5316\u4E3A\u4E24\u4E2A\u5341\u516D\u8FDB\u5236\u7684\u5B57\u7B26\uFF0C\u5C06\u8F6C\u5316\u540E\u7684\u6240\u6709\u5B57\u7B26\u62FC\u63A5\u4E3A\u5B57\u7B26\u4E32\u8F93\u51FA"}),"\n",(0,l.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"\u8F93\u5165\u5B57\u7B26\u4E32\n\nmysql> select hex('1');\n+----------+\n| hex('1') |\n+----------+\n| 31       |\n+----------+\n\nmysql> select hex('@');\n+----------+\n| hex('@') |\n+----------+\n| 40       |\n+----------+\n\nmysql> select hex('12');\n+-----------+\n| hex('12') |\n+-----------+\n| 3132      |\n+-----------+\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"\u8F93\u5165\u6570\u5B57\n\nmysql> select hex(12);\n+---------+\n| hex(12) |\n+---------+\n| C       |\n+---------+\n\nmysql> select hex(-1);\n+------------------+\n| hex(-1)          |\n+------------------+\n| FFFFFFFFFFFFFFFF |\n+------------------+\n"})}),"\n",(0,l.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"HEX\n"})})]})}function a(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(u,{...n})}):u(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return c},a:function(){return r}});var t=s(667294);let l={},i=t.createContext(l);function r(n){let e=t.useContext(i);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:r(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);