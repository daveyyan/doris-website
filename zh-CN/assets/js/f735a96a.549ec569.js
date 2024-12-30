"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["13878"],{282432:function(n,e,l){l.r(e),l.d(e,{metadata:()=>s,contentTitle:()=>c,default:()=>d,assets:()=>r,toc:()=>u,frontMatter:()=>o});var s=JSON.parse('{"id":"sql-manual/sql-functions/numeric-functions/log","title":"LOG","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/numeric-functions/log.md","sourceDirName":"sql-manual/sql-functions/numeric-functions","slug":"/sql-manual/sql-functions/numeric-functions/log","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/numeric-functions/log","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"LOG","language":"zh-CN"},"sidebar":"docs","previous":{"title":"EXP","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/numeric-functions/exp"},"next":{"title":"LOG2","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/numeric-functions/log2"}}'),t=l("785893"),i=l("250065");let o={title:"LOG",language:"zh-CN"},c=void 0,r={},u=[{value:"log",id:"log",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function a(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"log",children:"log"}),"\n",(0,t.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,t.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"DOUBLE log(DOUBLE b, DOUBLE x)"}),"\n\u8FD4\u56DE\u57FA\u4E8E\u5E95\u6570",(0,t.jsx)(e.code,{children:"b"}),"\u7684",(0,t.jsx)(e.code,{children:"x"}),"\u7684\u5BF9\u6570."]}),"\n",(0,t.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"mysql> select log(5,1);\n+---------------+\n| log(5.0, 1.0) |\n+---------------+\n|             0 |\n+---------------+\nmysql> select log(3,20);\n+--------------------+\n| log(3.0, 20.0)     |\n+--------------------+\n| 2.7268330278608417 |\n+--------------------+\nmysql> select log(2,65536);\n+-------------------+\n| log(2.0, 65536.0) |\n+-------------------+\n|                16 |\n+-------------------+\n"})}),"\n",(0,t.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"LOG\n"})})]})}function d(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},250065:function(n,e,l){l.d(e,{Z:function(){return c},a:function(){return o}});var s=l(667294);let t={},i=s.createContext(t);function o(n){let e=s.useContext(i);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:o(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);