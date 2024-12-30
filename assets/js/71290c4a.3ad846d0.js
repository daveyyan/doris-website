"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["498214"],{776369:function(e,n,t){t.r(n),t.d(n,{metadata:()=>a,contentTitle:()=>r,default:()=>u,assets:()=>d,toc:()=>o,frontMatter:()=>l});var a=JSON.parse('{"id":"sql-manual/sql-functions/date-time-functions/makedate","title":"MAKEDATE","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/date-time-functions/makedate.md","sourceDirName":"sql-manual/sql-functions/date-time-functions","slug":"/sql-manual/sql-functions/date-time-functions/makedate","permalink":"/docs/sql-manual/sql-functions/date-time-functions/makedate","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"MAKEDATE","language":"en"},"sidebar":"docs","previous":{"title":"EXTRACT","permalink":"/docs/sql-manual/sql-functions/date-time-functions/extract"},"next":{"title":"STR_TO_DATE","permalink":"/docs/sql-manual/sql-functions/date-time-functions/str-to-date"}}'),s=t("785893"),i=t("250065");let l={title:"MAKEDATE",language:"en"},r=void 0,d={},o=[{value:"makedate",id:"makedate",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function c(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"makedate",children:"makedate"}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"DATE MAKEDATE(INT year, INT dayofyear)"})}),"\n",(0,s.jsx)(n.p,{children:"Returns a date, given year and day-of-year values. dayofyear must be greater than 0 or the result is NULL."}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"mysql> select makedate(2021,1), makedate(2021,100), makedate(2021,400);\n+-------------------+---------------------+---------------------+\n| makedate(2021, 1) | makedate(2021, 100) | makedate(2021, 400) |\n+-------------------+---------------------+---------------------+\n| 2021-01-01        | 2021-04-10          | 2022-02-04          |\n+-------------------+---------------------+---------------------+\n"})}),"\n",(0,s.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"MAKEDATE\n"})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return l}});var a=t(667294);let s={},i=a.createContext(s);function l(e){let n=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);