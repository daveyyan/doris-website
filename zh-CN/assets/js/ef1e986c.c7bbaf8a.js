"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["380620"],{732359:function(n,e,t){t.r(e),t.d(e,{metadata:()=>o,contentTitle:()=>r,default:()=>a,assets:()=>l,toc:()=>d,frontMatter:()=>c});var o=JSON.parse('{"id":"sql-manual/sql-functions/window-functions/window-function-count","title":"WINDOW_FUNCTION_COUNT","description":"\x3c!--  Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements.  See the NOTICE file distributed with this work for additional information regarding copyright ownership.  The ASF licenses this file to you under the Apache License, Version 2.0 (the \\"License\\"); you may not use this file except in compliance with the License.  You may obtain a copy of the License at","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/window-functions/window-function-count.md","sourceDirName":"sql-manual/sql-functions/window-functions","slug":"/sql-manual/sql-functions/window-functions/window-function-count","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/window-functions/window-function-count","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"WINDOW_FUNCTION_COUNT","language":"zh-CN"},"sidebar":"docs","previous":{"title":"WINDOW_FUNCTION_MIN","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/window-functions/window-function-min"},"next":{"title":"WINDOW_FUNCTION_RANK","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/window-functions/window-function-rank"}}'),i=t("785893"),s=t("250065");let c={title:"WINDOW_FUNCTION_COUNT",language:"zh-CN"},r=void 0,l={},d=[{value:"WINDOW FUNCTION COUNT",id:"window-function-count",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(n){let e={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"window-function-count",children:"WINDOW FUNCTION COUNT"}),"\n",(0,i.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,i.jsx)(e.p,{children:"\u8BA1\u7B97\u7A97\u53E3\u5185\u6570\u636E\u51FA\u73B0\u6B21\u6570"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"COUNT(expression) [OVER (analytic_clause)]\n"})}),"\n",(0,i.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(e.p,{children:"\u8BA1\u7B97\u4ECE\u5F53\u524D\u884C\u5230\u7B2C\u4E00\u884Cx\u51FA\u73B0\u7684\u6B21\u6570\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"select x, property,   \ncount(x) over   \n(   \npartition by property    \norder by x    \nrows between unbounded preceding and current row    \n) as 'cumulative total'    \nfrom int_t where property in ('odd','even');\n\n | x  | property | cumulative count |\n |----|----------|------------------|\n | 2  | even     | 1                |\n | 4  | even     | 2                |\n | 6  | even     | 3                |\n | 8  | even     | 4                |\n | 10 | even     | 5                |\n | 1  | odd      | 1                |\n | 3  | odd      | 2                |\n | 5  | odd      | 3                |\n | 7  | odd      | 4                |\n | 9  | odd      | 5                |\n"})}),"\n",(0,i.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"WINDOW,FUNCTION,COUNT\n"})})]})}function a(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return r},a:function(){return c}});var o=t(667294);let i={},s=o.createContext(i);function c(n){let e=o.useContext(s);return o.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),o.createElement(s.Provider,{value:e},n.children)}}}]);