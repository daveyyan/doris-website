"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["965490"],{843919:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>a,default:()=>u,assets:()=>r,toc:()=>c,frontMatter:()=>s});var i=JSON.parse('{"id":"sql-manual/sql-functions/window-functions/window-function-last-value","title":"WINDOW_FUNCTION_LAST_VALUE","description":"\x3c!--  Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements.  See the NOTICE file distributed with this work for additional information regarding copyright ownership.  The ASF licenses this file to you under the Apache License, Version 2.0 (the \\"License\\"); you may not use this file except in compliance with the License.  You may obtain a copy of the License at","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/window-functions/window-function-last-value.md","sourceDirName":"sql-manual/sql-functions/window-functions","slug":"/sql-manual/sql-functions/window-functions/window-function-last-value","permalink":"/docs/sql-manual/sql-functions/window-functions/window-function-last-value","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"WINDOW_FUNCTION_LAST_VALUE","language":"en"},"sidebar":"docs","previous":{"title":"WINDOW_FUNCTION_FIRST_VALUE","permalink":"/docs/sql-manual/sql-functions/window-functions/window-function-first-value"},"next":{"title":"WINDOW_FUNCTION_LEAD","permalink":"/docs/sql-manual/sql-functions/window-functions/window-function-lead"}}'),o=t("785893"),l=t("250065");let s={title:"WINDOW_FUNCTION_LAST_VALUE",language:"en"},a=void 0,r={},c=[{value:"WINDOW FUNCTION LAST_VALUE",id:"window-function-last_value",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"window-function-last_value",children:"WINDOW FUNCTION LAST_VALUE"}),"\n",(0,o.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,o.jsx)(n.p,{children:"LAST_VALUE() returns the last value in the window range . Opposite of FIRST_VALUE() , ignore_null determines whether to ignore null values , the ignore_null of default value is false ."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"LAST_VALUE(expr[, ignore_null]) OVER(partition_by_clause order_by_clause [window_clause])\n"})}),"\n",(0,o.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,o.jsx)(n.p,{children:"Using the data from the FIRST_VALUE() example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"select * , \nlast_value(`state`, 1) over(partition by `myday` order by `time_col` DESC rows between 1 preceding and 1 following) as ignore_null,\nlast_value(`state`, 0) over(partition by `myday` order by `time_col` DESC rows between 1 preceding and 1 following) as not_ignore_null,\nlast_value(`state`) over(partition by `myday` order by `time_col` DESC rows between 1 preceding and 1 following) as ignore_null_default\nfrom t order by `id`, `myday`, `time_col`;\n\n| id   | myday | time_col    | state | ignore_null | not_ignore_null | ignore_null_default |\n|------|-------|-------------|-------|-------------|-----------------|---------------------|\n|    1 |    21 | 04-21-11    |  NULL |           2 |            NULL |                NULL |\n|    2 |    21 | 04-21-12    |     2 |           2 |            NULL |                NULL |\n|    3 |    21 | 04-21-13    |     3 |           2 |               2 |                   2 |\n|    4 |    22 | 04-22-10-21 |  NULL |        NULL |            NULL |                NULL |\n|    5 |    22 | 04-22-10-22 |  NULL |           5 |            NULL |                NULL |\n|    6 |    22 | 04-22-10-23 |     5 |           5 |            NULL |                NULL |\n|    7 |    22 | 04-22-10-24 |  NULL |           5 |               5 |                   5 |\n|    8 |    22 | 04-22-10-25 |     9 |           9 |            NULL |                NULL |\n|    9 |    23 | 04-23-11    |  NULL |          10 |            NULL |                NULL |\n|   10 |    23 | 04-23-12    |    10 |          10 |            NULL |                NULL |\n|   11 |    23 | 04-23-13    |  NULL |          10 |              10 |                  10 |\n|   12 |    24 | 02-24-10-21 |  NULL |        NULL |            NULL |                NULL |\n"})}),"\n",(0,o.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"WINDOW,FUNCTION,LAST_VALUE\n"})})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return s}});var i=t(667294);let o={},l=i.createContext(o);function s(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);