"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["269907"],{138221:function(n,e,t){t.r(e),t.d(e,{metadata:()=>a,contentTitle:()=>o,default:()=>u,assets:()=>s,toc:()=>l,frontMatter:()=>r});var a=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/map-agg","title":"MAP_AGG","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/aggregate-functions/map-agg.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/map-agg","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/map-agg","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"MAP_AGG","language":"zh-CN"},"sidebar":"docs","previous":{"title":"FOREACH","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/foreach"},"next":{"title":"BITMAP_AGG","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/bitmap-agg"}}'),A=t("785893"),i=t("250065");let r={title:"MAP_AGG",language:"zh-CN"},o=void 0,s={},l=[{value:"MAP_AGG",id:"map_agg",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function c(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(e.h2,{id:"map_agg",children:"MAP_AGG"}),"\n",(0,A.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,A.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,A.jsx)(e.p,{children:(0,A.jsx)(e.code,{children:"MAP_AGG(expr1, expr2)"})}),"\n",(0,A.jsx)(e.p,{children:"\u8FD4\u56DE\u4E00\u4E2A map, \u7531 expr1 \u4F5C\u4E3A\u952E\uFF0Cexpr2 \u4F5C\u4E3A\u5BF9\u5E94\u7684\u503C\u3002"}),"\n",(0,A.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,A.jsx)(e.pre,{children:(0,A.jsx)(e.code,{children:'MySQL > select `n_nationkey`, `n_name`, `n_regionkey` from `nation`;\n+-------------+----------------+-------------+\n| n_nationkey | n_name         | n_regionkey |\n+-------------+----------------+-------------+\n|           0 | ALGERIA        |           0 |\n|           1 | ARGENTINA      |           1 |\n|           2 | BRAZIL         |           1 |\n|           3 | CANADA         |           1 |\n|           4 | EGYPT          |           4 |\n|           5 | ETHIOPIA       |           0 |\n|           6 | FRANCE         |           3 |\n|           7 | GERMANY        |           3 |\n|           8 | INDIA          |           2 |\n|           9 | INDONESIA      |           2 |\n|          10 | IRAN           |           4 |\n|          11 | IRAQ           |           4 |\n|          12 | JAPAN          |           2 |\n|          13 | JORDAN         |           4 |\n|          14 | KENYA          |           0 |\n|          15 | MOROCCO        |           0 |\n|          16 | MOZAMBIQUE     |           0 |\n|          17 | PERU           |           1 |\n|          18 | CHINA          |           2 |\n|          19 | ROMANIA        |           3 |\n|          20 | SAUDI ARABIA   |           4 |\n|          21 | VIETNAM        |           2 |\n|          22 | RUSSIA         |           3 |\n|          23 | UNITED KINGDOM |           3 |\n|          24 | UNITED STATES  |           1 |\n+-------------+----------------+-------------+\n\nMySQL > select `n_regionkey`, map_agg(`n_nationkey`, `n_name`) from `nation` group by `n_regionkey`;\n+-------------+---------------------------------------------------------------------------+\n| n_regionkey | map_agg(`n_nationkey`, `n_name`)                                          |\n+-------------+---------------------------------------------------------------------------+\n|           1 | {1:"ARGENTINA", 2:"BRAZIL", 3:"CANADA", 17:"PERU", 24:"UNITED STATES"}    |\n|           0 | {0:"ALGERIA", 5:"ETHIOPIA", 14:"KENYA", 15:"MOROCCO", 16:"MOZAMBIQUE"}    |\n|           3 | {6:"FRANCE", 7:"GERMANY", 19:"ROMANIA", 22:"RUSSIA", 23:"UNITED KINGDOM"} |\n|           4 | {4:"EGYPT", 10:"IRAN", 11:"IRAQ", 13:"JORDAN", 20:"SAUDI ARABIA"}         |\n|           2 | {8:"INDIA", 9:"INDONESIA", 12:"JAPAN", 18:"CHINA", 21:"VIETNAM"}          |\n+-------------+---------------------------------------------------------------------------+\n\nMySQL > select n_regionkey, map_agg(`n_name`, `n_nationkey` % 5) from `nation` group by `n_regionkey`;\n+-------------+------------------------------------------------------------------------+\n| n_regionkey | map_agg(`n_name`, (`n_nationkey` % 5))                                 |\n+-------------+------------------------------------------------------------------------+\n|           2 | {"INDIA":3, "INDONESIA":4, "JAPAN":2, "CHINA":3, "VIETNAM":1}          |\n|           0 | {"ALGERIA":0, "ETHIOPIA":0, "KENYA":4, "MOROCCO":0, "MOZAMBIQUE":1}    |\n|           3 | {"FRANCE":1, "GERMANY":2, "ROMANIA":4, "RUSSIA":2, "UNITED KINGDOM":3} |\n|           1 | {"ARGENTINA":1, "BRAZIL":2, "CANADA":3, "PERU":2, "UNITED STATES":4}   |\n|           4 | {"EGYPT":4, "IRAN":0, "IRAQ":1, "JORDAN":3, "SAUDI ARABIA":0}          |\n+-------------+------------------------------------------------------------------------+\n'})}),"\n",(0,A.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,A.jsx)(e.p,{children:"MAP_AGG"})]})}function u(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,A.jsx)(e,{...n,children:(0,A.jsx)(c,{...n})}):c(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return o},a:function(){return r}});var a=t(667294);let A={},i=a.createContext(A);function r(n){let e=a.useContext(i);return a.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(A):n.components||A:r(n.components),a.createElement(i.Provider,{value:e},n.children)}}}]);