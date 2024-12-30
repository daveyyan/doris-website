"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["768893"],{935497:function(n,e,s){s.r(e),s.d(e,{metadata:()=>t,contentTitle:()=>c,default:()=>d,assets:()=>r,toc:()=>o,frontMatter:()=>a});var t=JSON.parse('{"id":"sql-manual/sql-functions/numeric-functions/abs","title":"ABS","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/numeric-functions/abs.md","sourceDirName":"sql-manual/sql-functions/numeric-functions","slug":"/sql-manual/sql-functions/numeric-functions/abs","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/numeric-functions/abs","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"ABS","language":"zh-CN"},"sidebar":"docs","previous":{"title":"TRUNCATE","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/numeric-functions/truncate"},"next":{"title":"SQRT","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/numeric-functions/sqrt"}}'),i=s("785893"),l=s("250065");let a={title:"ABS",language:"zh-CN"},c=void 0,r={},o=[{value:"abs",id:"abs",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"abs",children:"abs"}),"\n",(0,i.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,i.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"SMALLINT abs(TINYINT x)\nINT abs(SMALLINT x)\nBIGINT abs(INT x)\nLARGEINT abs(BIGINT x)\nLARGEINT abs(LARGEINT x)\nDOUBLE abs(DOUBLE x)\nFLOAT abs(FLOAT x)\nDECIMAL abs(DECIMAL x)` \n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u8FD4\u56DE",(0,i.jsx)(e.code,{children:"x"}),"\u7684\u7EDD\u5BF9\u503C."]}),"\n",(0,i.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"mysql> select abs(-2);\n+---------+\n| abs(-2) |\n+---------+\n|       2 |\n+---------+\nmysql> select abs(3.254655654);\n+------------------+\n| abs(3.254655654) |\n+------------------+\n|      3.254655654 |\n+------------------+\nmysql> select abs(-3254654236547654354654767);\n+---------------------------------+\n| abs(-3254654236547654354654767) |\n+---------------------------------+\n| 3254654236547654354654767       |\n+---------------------------------+\n"})}),"\n",(0,i.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"ABS\n"})})]})}function d(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return c},a:function(){return a}});var t=s(667294);let i={},l=t.createContext(i);function a(n){let e=t.useContext(l);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),t.createElement(l.Provider,{value:e},n.children)}}}]);