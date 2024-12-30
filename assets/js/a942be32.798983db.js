"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["531152"],{604349:function(n,e,i){i.r(e),i.d(e,{metadata:()=>t,contentTitle:()=>a,default:()=>u,assets:()=>c,toc:()=>l,frontMatter:()=>r});var t=JSON.parse('{"id":"sql-manual/sql-functions/window-functions/window-function-dense-rank","title":"WINDOW_FUNCTION_DENSE_RANK","description":"\x3c!--  Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements.  See the NOTICE file distributed with this work for additional information regarding copyright ownership.  The ASF licenses this file to you under the Apache License, Version 2.0 (the \\"License\\"); you may not use this file except in compliance with the License.  You may obtain a copy of the License at","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/window-functions/window-function-dense-rank.md","sourceDirName":"sql-manual/sql-functions/window-functions","slug":"/sql-manual/sql-functions/window-functions/window-function-dense-rank","permalink":"/docs/sql-manual/sql-functions/window-functions/window-function-dense-rank","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"WINDOW_FUNCTION_DENSE_RANK","language":"en"},"sidebar":"docs","previous":{"title":"WINDOW_FUNCTION_RANK","permalink":"/docs/sql-manual/sql-functions/window-functions/window-function-rank"},"next":{"title":"WINDOW_FUNCTION_PERCENT_RANK","permalink":"/docs/sql-manual/sql-functions/window-functions/window-function-percent-rank"}}'),o=i("785893"),s=i("250065");let r={title:"WINDOW_FUNCTION_DENSE_RANK",language:"en"},a=void 0,c={},l=[{value:"WINDOW FUNCTION DENSE_RANK",id:"window-function-dense_rank",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function d(n){let e={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"window-function-dense_rank",children:"WINDOW FUNCTION DENSE_RANK"}),"\n",(0,o.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,o.jsx)(e.p,{children:"The DENSE_RANK() function is used to represent rankings. Unlike RANK(), DENSE_RANK() does not have vacancies. For example, if there are two parallel 1s, the third number of DENSE_RANK() is still 2, and the third number of RANK() is 3."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-sql",children:"DENSE_RANK() OVER(partition_by_clause order_by_clause)\n"})}),"\n",(0,o.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,o.jsx)(e.p,{children:"Group by the property column to rank column x:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-sql",children:" select x, y, dense_rank() over(partition by x order by y) as rank from int_t;\n \n | x  | y    | rank     |\n |----|------|----------|\n | 1  | 1    | 1        |\n | 1  | 2    | 2        |\n | 1  | 2    | 2        |\n | 2  | 1    | 1        |\n | 2  | 2    | 2        |\n | 2  | 3    | 3        |\n | 3  | 1    | 1        |\n | 3  | 1    | 1        |\n | 3  | 2    | 2        |\n"})}),"\n",(0,o.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"WINDOW,FUNCTION,DENSE_RANK\n"})})]})}function u(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},250065:function(n,e,i){i.d(e,{Z:function(){return a},a:function(){return r}});var t=i(667294);let o={},s=t.createContext(o);function r(n){let e=t.useContext(s);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);