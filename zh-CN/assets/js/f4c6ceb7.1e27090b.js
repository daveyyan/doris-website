"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["770415"],{424990:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>l,default:()=>u,assets:()=>r,toc:()=>o,frontMatter:()=>d});var i=JSON.parse('{"id":"sql-manual/sql-functions/date-time-functions/timestampdiff","title":"TIMESTAMPDIFF","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/date-time-functions/timestampdiff.md","sourceDirName":"sql-manual/sql-functions/date-time-functions","slug":"/sql-manual/sql-functions/date-time-functions/timestampdiff","permalink":"/zh-CN/docs/sql-manual/sql-functions/date-time-functions/timestampdiff","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"TIMESTAMPDIFF","language":"zh-CN"},"sidebar":"docs","previous":{"title":"TIMESTAMPADD","permalink":"/zh-CN/docs/sql-manual/sql-functions/date-time-functions/timestampadd"},"next":{"title":"DATE_ADD","permalink":"/zh-CN/docs/sql-manual/sql-functions/date-time-functions/date-add"}}'),s=t("785893"),a=t("250065");let d={title:"TIMESTAMPDIFF",language:"zh-CN"},l=void 0,r={},o=[{value:"timestampdiff",id:"timestampdiff",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function c(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"timestampdiff",children:"timestampdiff"}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,s.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"INT TIMESTAMPDIFF(unit, DATETIME datetime_expr1, DATETIME datetime_expr2)"})}),"\n",(0,s.jsx)(n.p,{children:"\u8FD4\u56DEdatetime_expr2\u2212datetime_expr1\uFF0C\u5176\u4E2Ddatetime_expr1\u548Cdatetime_expr2\u662F\u65E5\u671F\u6216\u65E5\u671F\u65F6\u95F4\u8868\u8FBE\u5F0F\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u7ED3\u679C(\u6574\u6570)\u7684\u5355\u4F4D\u7531unit\u53C2\u6570\u7ED9\u51FA\u3002interval\u7684\u5355\u4F4D\u7531unit\u53C2\u6570\u7ED9\u51FA\uFF0C\u5B83\u5E94\u8BE5\u662F\u4E0B\u5217\u503C\u4E4B\u4E00:"}),"\n",(0,s.jsx)(n.p,{children:"SECOND, MINUTE, HOUR, DAY, WEEK, MONTH, or YEAR\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"\nMySQL> SELECT TIMESTAMPDIFF(MONTH,'2003-02-01','2003-05-01');\n+--------------------------------------------------------------------+\n| timestampdiff(MONTH, '2003-02-01 00:00:00', '2003-05-01 00:00:00') |\n+--------------------------------------------------------------------+\n|                                                                  3 |\n+--------------------------------------------------------------------+\n\nMySQL> SELECT TIMESTAMPDIFF(YEAR,'2002-05-01','2001-01-01');\n+-------------------------------------------------------------------+\n| timestampdiff(YEAR, '2002-05-01 00:00:00', '2001-01-01 00:00:00') |\n+-------------------------------------------------------------------+\n|                                                                -1 |\n+-------------------------------------------------------------------+\n\n\nMySQL> SELECT TIMESTAMPDIFF(MINUTE,'2003-02-01','2003-05-01 12:05:55');\n+---------------------------------------------------------------------+\n| timestampdiff(MINUTE, '2003-02-01 00:00:00', '2003-05-01 12:05:55') |\n+---------------------------------------------------------------------+\n|                                                              128885 |\n+---------------------------------------------------------------------+\n\n"})}),"\n",(0,s.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"TIMESTAMPDIFF\n"})})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return d}});var i=t(667294);let s={},a=i.createContext(s);function d(e){let n=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);