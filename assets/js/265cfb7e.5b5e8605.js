"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["975254"],{527162:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>c,default:()=>u,assets:()=>a,toc:()=>o,frontMatter:()=>l});var i=JSON.parse('{"id":"sql-manual/sql-functions/date-time-functions/current-timestamp","title":"CURRENT_TIMESTAMP","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-functions/date-time-functions/current-timestamp.md","sourceDirName":"sql-manual/sql-functions/date-time-functions","slug":"/sql-manual/sql-functions/date-time-functions/current-timestamp","permalink":"/docs/2.0/sql-manual/sql-functions/date-time-functions/current-timestamp","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"CURRENT_TIMESTAMP","language":"en"},"sidebar":"docs","previous":{"title":"CURTIME,CURRENT_TIME","permalink":"/docs/2.0/sql-manual/sql-functions/date-time-functions/curtime"},"next":{"title":"LOCALTIME,LOCALTIMESTAMP","permalink":"/docs/2.0/sql-manual/sql-functions/date-time-functions/localtime"}}'),s=t("785893"),r=t("250065");let l={title:"CURRENT_TIMESTAMP",language:"en"},c=void 0,a={},o=[{value:"current_timestamp",id:"current_timestamp",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"example",id:"example-1",level:3},{value:"keywords",id:"keywords",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"current_timestamp",children:"current_timestamp"}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"DATETIME CURRENT_TIMESTAMP()"})}),"\n",(0,s.jsx)(n.p,{children:"Get the current time and return it in Datetime type"}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"mysql> select current_timestamp();\n+---------------------+\n| current_timestamp() |\n+---------------------+\n| 2019-05-27 15:59:33 |\n+---------------------+\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"DATETIMEV2 NOW(INT precision)"})}),"\n",(0,s.jsx)(n.p,{children:"Get the current time and return it in DatetimeV2 type.\nPrecision represents the second precision that the user wants. The current precision supports up to microseconds, that is, the value range of precision is [0, 6]."}),"\n",(0,s.jsx)(n.h3,{id:"example-1",children:"example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"mysql> select current_timestamp(3);\n+-------------------------+\n| current_timestamp(3)    |\n+-------------------------+\n| 2022-09-06 16:18:00.922 |\n+-------------------------+\n"})}),"\n",(0,s.jsx)(n.p,{children:"Note:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Currently, only DatetimeV2 type supports precision."}),"\n",(0,s.jsx)(n.li,{children:"Limited by the JDK implementation, if you use jdk8 to build FE, the precision can be up to milliseconds (three decimal places), and the larger precision bits will be filled with 0. If you need higher accuracy, please use jdk11 to build FE."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"CURRENT_TIMESTAMP,CURRENT,TIMESTAMP\n"})})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return l}});var i=t(667294);let s={},r=i.createContext(s);function l(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);