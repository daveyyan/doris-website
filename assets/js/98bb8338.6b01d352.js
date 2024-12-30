"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["261548"],{776913:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>d,default:()=>u,assets:()=>l,toc:()=>r,frontMatter:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-functions/date-time-functions/dayofweek","title":"dayofweek","description":"\x3c!--","source":"@site/versioned_docs/version-1.2/sql-manual/sql-functions/date-time-functions/dayofweek.md","sourceDirName":"sql-manual/sql-functions/date-time-functions","slug":"/sql-manual/sql-functions/date-time-functions/dayofweek","permalink":"/docs/1.2/sql-manual/sql-functions/date-time-functions/dayofweek","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"dayofweek","language":"en"},"sidebar":"docs","previous":{"title":"dayofmonth","permalink":"/docs/1.2/sql-manual/sql-functions/date-time-functions/dayofmonth"},"next":{"title":"week","permalink":"/docs/1.2/sql-manual/sql-functions/date-time-functions/week"}}'),o=t("785893"),a=t("250065");let i={title:"dayofweek",language:"en"},d=void 0,l={},r=[{value:"dayofweek",id:"dayofweek",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function c(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"dayofweek",children:"dayofweek"}),"\n",(0,o.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,o.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"INT DAYOFWEEK (DATETIME date)"})}),"\n",(0,o.jsx)(n.p,{children:"The DAYOFWEEK function returns the index value of the working day of the date, that is, 1 on Sunday, 2 on Monday, and 7 on Saturday."}),"\n",(0,o.jsx)(n.p,{children:"The parameter is Date or Datetime type"}),"\n",(0,o.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"mysql> select dayofweek('2019-06-25');\n+----------------------------------+\n| dayofweek('2019-06-25 00:00:00') |\n+----------------------------------+\n|                                3 |\n+----------------------------------+\n\nmysql> select dayofweek(cast(20190625 as date)); \n+-----------------------------------+\n| dayofweek(CAST(20190625 AS DATE)) |\n+-----------------------------------+\n|                                 3 |\n+-----------------------------------+\n"})}),"\n",(0,o.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"DAYOFWEEK\n"})})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return i}});var s=t(667294);let o={},a=s.createContext(o);function i(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);