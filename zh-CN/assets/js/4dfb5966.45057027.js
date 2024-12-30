"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["359407"],{352690:function(n,e,r){r.r(e),r.d(e,{metadata:()=>s,contentTitle:()=>o,default:()=>a,assets:()=>i,toc:()=>t,frontMatter:()=>u});var s=JSON.parse('{"id":"sql-manual/sql-functions/numeric-functions/round-bankers","title":"ROUND_BANKERS","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/numeric-functions/round-bankers.md","sourceDirName":"sql-manual/sql-functions/numeric-functions","slug":"/sql-manual/sql-functions/numeric-functions/round-bankers","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/numeric-functions/round-bankers","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"ROUND_BANKERS","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ROUND","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/numeric-functions/round"},"next":{"title":"XOR","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/numeric-functions/xor"}}'),l=r("785893"),d=r("250065");let u={title:"ROUND_BANKERS",language:"zh-CN"},o=void 0,i={},t=[{value:"round_bankers",id:"round_bankers",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function c(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"round_bankers",children:"round_bankers"}),"\n",(0,l.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,l.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"T round_bankers(T x[, d])"}),"\n\u5C06",(0,l.jsx)(e.code,{children:"x"}),"\u4F7F\u7528\u94F6\u884C\u5BB6\u820D\u5165\u6CD5\u540E\uFF0C\u4FDD\u7559d\u4F4D\u5C0F\u6570\uFF0C",(0,l.jsx)(e.code,{children:"d"}),"\u9ED8\u8BA4\u4E3A0\u3002\u5982\u679C",(0,l.jsx)(e.code,{children:"d"}),"\u4E3A\u8D1F\u6570\uFF0C\u5219\u5C0F\u6570\u70B9\u5DE6\u8FB9",(0,l.jsx)(e.code,{children:"d"}),"\u4F4D\u4E3A0\u3002\u5982\u679C",(0,l.jsx)(e.code,{children:"x"}),"\u6216",(0,l.jsx)(e.code,{children:"d"}),"\u4E3Anull\uFF0C\u8FD4\u56DEnull\u3002"]}),"\n",(0,l.jsx)(e.p,{children:"\u5982\u679C d \u4E3A\u4E00\u4E2A\u5217\uFF0C\u5E76\u4E14\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A Decimal \u7C7B\u578B\uFF0C\u90A3\u4E48\u7ED3\u679C Decimal \u4F1A\u8DDF\u5165\u53C2 Decimal \u5177\u6709\u76F8\u540C\u7684\u5C0F\u6570\u90E8\u5206\u957F\u5EA6\u3002"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5982\u679C\u820D\u5165\u6570\u4ECB\u4E8E\u4E24\u4E2A\u6570\u5B57\u4E4B\u95F4\uFF0C\u5219\u8BE5\u51FD\u6570\u4F7F\u7528\u94F6\u884C\u5BB6\u7684\u820D\u5165"}),"\n",(0,l.jsx)(e.li,{children:"\u5728\u5176\u4ED6\u60C5\u51B5\u4E0B\uFF0C\u8BE5\u51FD\u6570\u5C06\u6570\u5B57\u56DB\u820D\u4E94\u5165\u5230\u6700\u63A5\u8FD1\u7684\u6574\u6570\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"mysql> select round_bankers(0.4);\n+--------------------+\n| round_bankers(0.4) |\n+--------------------+\n|                  0 |\n+--------------------+\nmysql> select round_bankers(-3.5);\n+---------------------+\n| round_bankers(-3.5) |\n+---------------------+\n|                  -4 |\n+---------------------+\nmysql> select round_bankers(-3.4);\n+---------------------+\n| round_bankers(-3.4) |\n+---------------------+\n|                  -3 |\n+---------------------+\nmysql> select round_bankers(10.755, 2);\n+--------------------------+\n| round_bankers(10.755, 2) |\n+--------------------------+\n|                    10.76 |\n+--------------------------+\nmysql> select round_bankers(1667.2725, 2);\n+-----------------------------+\n| round_bankers(1667.2725, 2) |\n+-----------------------------+\n|                     1667.27 |\n+-----------------------------+\nmysql> select round_bankers(1667.2725, -2);\n+------------------------------+\n| round_bankers(1667.2725, -2) |\n+------------------------------+\n|                         1700 |\n+------------------------------+\nmysql> SELECT number\n    -> , round_bankers(number * 2.5, number - 1) AS rb_decimal_column\n    -> , round_bankers(number * 2.5, 0) AS rb_decimal_literal\n    -> , round_bankers(cast(number * 2.5 AS DOUBLE), number - 1) AS rb_double_column\n    -> , round_bankers(cast(number * 2.5 AS DOUBLE), 0) AS rb_double_literal\n    -> FROM test_enhanced_round\n    -> WHERE rid = 1;\n+--------+-------------------+--------------------+------------------+-------------------+\n| number | rb_decimal_column | rb_decimal_literal | rb_double_column | rb_double_literal |\n+--------+-------------------+--------------------+------------------+-------------------+\n|      1 |               2.0 |                  2 |                2 |                 2 |\n+--------+-------------------+--------------------+------------------+-------------------+\n"})}),"\n",(0,l.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"round_bankers\n"})})]})}function a(n={}){let{wrapper:e}={...(0,d.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(c,{...n})}):c(n)}},250065:function(n,e,r){r.d(e,{Z:function(){return o},a:function(){return u}});var s=r(667294);let l={},d=s.createContext(l);function u(n){let e=s.useContext(d);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:u(n.components),s.createElement(d.Provider,{value:e},n.children)}}}]);