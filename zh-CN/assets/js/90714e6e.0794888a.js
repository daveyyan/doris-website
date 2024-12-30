"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["996027"],{659538:function(n,e,i){i.r(e),i.d(e,{metadata:()=>t,contentTitle:()=>c,default:()=>d,assets:()=>l,toc:()=>a,frontMatter:()=>r});var t=JSON.parse('{"id":"sql-manual/sql-functions/window-functions/window-function-row-number","title":"WINDOW_FUNCTION_ROW_NUMBER","description":"\x3c!--  Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements.  See the NOTICE file distributed with this work for additional information regarding copyright ownership.  The ASF licenses this file to you under the Apache License, Version 2.0 (the \\"License\\"); you may not use this file except in compliance with the License.  You may obtain a copy of the License at","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/window-functions/window-function-row-number.md","sourceDirName":"sql-manual/sql-functions/window-functions","slug":"/sql-manual/sql-functions/window-functions/window-function-row-number","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/window-functions/window-function-row-number","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"WINDOW_FUNCTION_ROW_NUMBER","language":"zh-CN"},"sidebar":"docs","previous":{"title":"WINDOW_FUNCTION_LAG","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/window-functions/window-function-lag"},"next":{"title":"WINDOW_FUNCTION_NTILE","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/window-functions/window-function-ntile"}}'),o=i("785893"),s=i("250065");let r={title:"WINDOW_FUNCTION_ROW_NUMBER",language:"zh-CN"},c=void 0,l={},a=[{value:"WINDOW FUNCTION ROW_NUMBER",id:"window-function-row_number",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(n){let e={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"window-function-row_number",children:"WINDOW FUNCTION ROW_NUMBER"}),"\n",(0,o.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,o.jsx)(e.p,{children:"\u4E3A\u6BCF\u4E2A Partition \u7684\u6BCF\u4E00\u884C\u8FD4\u56DE\u4E00\u4E2A\u4ECE1\u5F00\u59CB\u8FDE\u7EED\u9012\u589E\u7684\u6574\u6570\u3002\u4E0E RANK() \u548C DENSE_RANK() \u4E0D\u540C\u7684\u662F\uFF0CROW_NUMBER() \u8FD4\u56DE\u7684\u503C\u4E0D\u4F1A\u91CD\u590D\u4E5F\u4E0D\u4F1A\u51FA\u73B0\u7A7A\u7F3A\uFF0C\u662F\u8FDE\u7EED\u9012\u589E\u7684\u3002"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-sql",children:"ROW_NUMBER() OVER(partition_by_clause order_by_clause)\n"})}),"\n",(0,o.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-sql",children:"select x, y, row_number() over(partition by x order by y) as rank from int_t;\n\n| x | y    | rank     |\n|---|------|----------|\n| 1 | 1    | 1        |\n| 1 | 2    | 2        |\n| 1 | 2    | 3        |\n| 2 | 1    | 1        |\n| 2 | 2    | 2        |\n| 2 | 3    | 3        |\n| 3 | 1    | 1        |\n| 3 | 1    | 2        |\n| 3 | 2    | 3        |\n"})}),"\n",(0,o.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"WINDOW,FUNCTION,ROW_NUMBER\n"})})]})}function d(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(u,{...n})}):u(n)}},250065:function(n,e,i){i.d(e,{Z:function(){return c},a:function(){return r}});var t=i(667294);let o={},s=t.createContext(o);function r(n){let e=t.useContext(s);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);