"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["656058"],{513701:function(n,e,s){s.r(e),s.d(e,{metadata:()=>t,contentTitle:()=>r,default:()=>u,assets:()=>a,toc:()=>d,frontMatter:()=>l});var t=JSON.parse('{"id":"sql-manual/sql-functions/date-time-functions/from-days","title":"FROM_DAYS","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/date-time-functions/from-days.md","sourceDirName":"sql-manual/sql-functions/date-time-functions","slug":"/sql-manual/sql-functions/date-time-functions/from-days","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/date-time-functions/from-days","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"FROM_DAYS","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SECOND","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/date-time-functions/second"},"next":{"title":"LAST_DAY","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/date-time-functions/last-day"}}'),i=s("785893"),o=s("250065");let l={title:"FROM_DAYS",language:"zh-CN"},r=void 0,a={},d=[{value:"from_days",id:"from_days",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function c(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"from_days",children:"from_days"}),"\n",(0,i.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,i.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.code,{children:"DATE FROM_DAYS(INT N)"})}),"\n",(0,i.jsx)(e.p,{children:"\u7ED9\u5B9A\u4E00\u4E2A\u5929\u6570\uFF0C\u8FD4\u56DE\u4E00\u4E2ADATE\u3002\u6CE8\u610F\uFF0C\u4E3A\u4E86\u548Cmysql\u4FDD\u6301\u4E00\u81F4\u7684\u884C\u4E3A\uFF0C\u4E0D\u5B58\u57280000-02-29\u8FD9\u4E2A\u65E5\u671F\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"mysql> select from_days(730669);\n+-------------------+\n| from_days(730669) |\n+-------------------+\n| 2000-07-03        |\n+-------------------+\n\nmysql> select from_days (5);\n+--------------+\n| from_days(5) |\n+--------------+\n| 0000-01-05   |\n+--------------+\n\nmysql> select from_days (59);\n+---------------+\n| from_days(59) |\n+---------------+\n| 0000-02-28    |\n+---------------+\n\nmysql> select from_days (60);\n+---------------+\n| from_days(60) |\n+---------------+\n| 0000-03-01    |\n+---------------+\n"})}),"\n",(0,i.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"FROM_DAYS,FROM,DAYS\n"})})]})}function u(n={}){let{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(c,{...n})}):c(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return r},a:function(){return l}});var t=s(667294);let i={},o=t.createContext(i);function l(n){let e=t.useContext(o);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),t.createElement(o.Provider,{value:e},n.children)}}}]);