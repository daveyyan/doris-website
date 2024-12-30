"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["466120"],{893842:function(n,e,t){t.r(e),t.d(e,{metadata:()=>s,contentTitle:()=>l,default:()=>u,assets:()=>o,toc:()=>c,frontMatter:()=>a});var s=JSON.parse('{"id":"sql-manual/sql-functions/string-functions/trim_in","title":"TRIM_IN","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/string-functions/trim_in.md","sourceDirName":"sql-manual/sql-functions/string-functions","slug":"/sql-manual/sql-functions/string-functions/trim_in","permalink":"/docs/dev/sql-manual/sql-functions/string-functions/trim_in","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"TRIM_IN","language":"en"},"sidebar":"docs","previous":{"title":"RTRIM","permalink":"/docs/dev/sql-manual/sql-functions/string-functions/rtrim"},"next":{"title":"LTRIM_IN","permalink":"/docs/dev/sql-manual/sql-functions/string-functions/ltrim_in"}}'),r=t("785893"),i=t("250065");let a={title:"TRIM_IN",language:"en"},l=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"Keywords",id:"keywords",level:2}];function d(n){let e={code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(e.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"VARCHAR trim_in(VARCHAR str[, VARCHAR rhs])"})}),"\n",(0,r.jsx)(e.p,{children:"When there is no rhs parameter, remove the spaces that appear consecutively at the right and left beginning of the parameter str; when there is an rhs parameter, search and remove any characters in the rhs character set at both ends of the string (regardless of order)"}),"\n",(0,r.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"mysql> SELECT trim_in('   ab d   ') str;\n+------+\n| str  |\n+------+\n| ab d |\n+------+\n\nmysql> SELECT trim_in('ababccaab','ab') str;\n+------+\n| str  |\n+------+\n| cc   |\n+------+\n"})}),"\n",(0,r.jsx)(e.h2,{id:"keywords",children:"Keywords"}),"\n",(0,r.jsx)(e.p,{children:"TRIM_IN"})]})}function u(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return l},a:function(){return a}});var s=t(667294);let r={},i=s.createContext(r);function a(n){let e=s.useContext(i);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:a(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);