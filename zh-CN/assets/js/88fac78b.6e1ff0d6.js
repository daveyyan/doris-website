"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["886123"],{916468:function(n,e,i){i.r(e),i.d(e,{metadata:()=>t,contentTitle:()=>d,default:()=>u,assets:()=>o,toc:()=>l,frontMatter:()=>s});var t=JSON.parse('{"id":"data-operate/update/unique-update","title":"\u4E3B\u952E\u6A21\u578B\u7684 Update \u66F4\u65B0","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/data-operate/update/unique-update.md","sourceDirName":"data-operate/update","slug":"/data-operate/update/unique-update","permalink":"/zh-CN/docs/dev/data-operate/update/unique-update","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u4E3B\u952E\u6A21\u578B\u7684 Update \u66F4\u65B0","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u6570\u636E\u66F4\u65B0\u6982\u8FF0","permalink":"/zh-CN/docs/dev/data-operate/update/update-overview"},"next":{"title":"\u4E3B\u952E\u6A21\u578B\u7684\u5BFC\u5165\u66F4\u65B0","permalink":"/zh-CN/docs/dev/data-operate/update/update-of-unique-model"}}'),a=i("785893"),r=i("250065");let s={title:"\u4E3B\u952E\u6A21\u578B\u7684 Update \u66F4\u65B0",language:"zh-CN"},d=void 0,o={},l=[{value:"\u9002\u7528\u573A\u666F",id:"\u9002\u7528\u573A\u666F",level:2},{value:"\u57FA\u672C\u539F\u7406",id:"\u57FA\u672C\u539F\u7406",level:2},{value:"\u540C\u6B65",id:"\u540C\u6B65",level:3},{value:"\u6027\u80FD",id:"\u6027\u80FD",level:3},{value:"\u4F7F\u7528\u793A\u4F8B",id:"\u4F7F\u7528\u793A\u4F8B",level:2},{value:"\u66F4\u591A\u5E2E\u52A9",id:"\u66F4\u591A\u5E2E\u52A9",level:2}];function c(n){let e={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.p,{children:"\u4E3B\u8981\u8BB2\u8FF0\u5982\u4F55\u4F7F\u7528 Update \u547D\u4EE4\u6765\u66F4\u65B0 Doris \u4E2D\u7684\u6570\u636E\u3002Update \u547D\u4EE4\u53EA\u80FD\u5728 Unique \u6570\u636E\u6A21\u578B\u7684\u8868\u4E2D\u6267\u884C\u3002"}),"\n",(0,a.jsx)(e.h2,{id:"\u9002\u7528\u573A\u666F",children:"\u9002\u7528\u573A\u666F"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"\u5BF9\u6EE1\u8DB3\u67D0\u4E9B\u6761\u4EF6\u7684\u884C\uFF0C\u4FEE\u6539\u5176\u53D6\u503C"}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"\u8FD9\u4E2A\u9002\u5408\u5C11\u91CF\u6570\u636E\uFF0C\u4E0D\u9891\u7E41\u7684\u66F4\u65B0"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"\u57FA\u672C\u539F\u7406",children:"\u57FA\u672C\u539F\u7406"}),"\n",(0,a.jsx)(e.p,{children:"\u5229\u7528\u67E5\u8BE2\u5F15\u64CE\u81EA\u8EAB\u7684 where \u8FC7\u6EE4\u903B\u8F91\uFF0C\u4ECE\u5F85\u66F4\u65B0\u8868\u4E2D\u7B5B\u9009\u51FA\u9700\u8981\u88AB\u66F4\u65B0\u7684\u884C\u3002\u518D\u5229\u7528 Unique \u6A21\u578B\u81EA\u5E26\u7684 Value \u5217\u65B0\u6570\u636E\u66FF\u6362\u65E7\u6570\u636E\u7684\u903B\u8F91\uFF0C\u5C06\u5F85\u66F4\u65B0\u7684\u884C\u53D8\u66F4\u540E\uFF0C\u518D\u91CD\u65B0\u63D2\u5165\u5230\u8868\u4E2D\uFF0C\u4ECE\u800C\u5B9E\u73B0\u884C\u7EA7\u522B\u66F4\u65B0\u3002"}),"\n",(0,a.jsx)(e.h3,{id:"\u540C\u6B65",children:"\u540C\u6B65"}),"\n",(0,a.jsx)(e.p,{children:"Update \u8BED\u6CD5\u5728 Doris \u4E2D\u662F\u4E00\u4E2A\u540C\u6B65\u8BED\u6CD5\uFF0C\u5373 Update \u8BED\u53E5\u6267\u884C\u6210\u529F\uFF0C\u66F4\u65B0\u64CD\u4F5C\u4E5F\u5C31\u5B8C\u6210\u4E86\uFF0C\u6570\u636E\u662F\u53EF\u89C1\u7684\u3002"}),"\n",(0,a.jsx)(e.h3,{id:"\u6027\u80FD",children:"\u6027\u80FD"}),"\n",(0,a.jsx)(e.p,{children:"Update \u8BED\u53E5\u7684\u6027\u80FD\u548C\u5F85\u66F4\u65B0\u7684\u884C\u6570\u4EE5\u53CA\u67E5\u8BE2\u6761\u4EF6\u7684\u68C0\u7D22\u6548\u7387\u5BC6\u5207\u76F8\u5173\u3002"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"\u5F85\u66F4\u65B0\u7684\u884C\u6570\uFF1A\u5F85\u66F4\u65B0\u7684\u884C\u6570\u8D8A\u591A\uFF0CUpdate \u8BED\u53E5\u7684\u901F\u5EA6\u5C31\u4F1A\u8D8A\u6162\u3002Update \u66F4\u65B0\u6BD4\u8F83\u5408\u9002\u5076\u53D1\u66F4\u65B0\u7684\u573A\u666F\uFF0C\u6BD4\u5982\u4FEE\u6539\u4E2A\u522B\u884C\u7684\u503C\u3002Update \u5E76\u4E0D\u9002\u5408\u5927\u6279\u91CF\u7684\u4FEE\u6539\u6570\u636E\u3002"}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"\u67E5\u8BE2\u6761\u4EF6\u7684\u68C0\u7D22\u6548\u7387\uFF1AUpdate \u5B9E\u73B0\u539F\u7406\u662F\u5148\u5C06\u6EE1\u8DB3\u67E5\u8BE2\u6761\u4EF6\u7684\u884C\u505A\u8BFB\u53D6\u5904\u7406\uFF0C\u6240\u4EE5\u5982\u679C\u67E5\u8BE2\u6761\u4EF6\u7684\u68C0\u7D22\u6548\u7387\u9AD8\uFF0C\u5219 Update \u7684\u901F\u5EA6\u4E5F\u4F1A\u5FEB\u3002\u6761\u4EF6\u5217\u6700\u597D\u80FD\u547D\u4E2D\u7D22\u5F15\u6216\u8005\u5206\u533A\u5206\u6876\u88C1\u526A\uFF0C\u8FD9\u6837 Doris \u5C31\u4E0D\u9700\u8981\u626B\u5168\u8868\uFF0C\u53EF\u4EE5\u5FEB\u901F\u5B9A\u4F4D\u5230\u9700\u8981\u66F4\u65B0\u7684\u884C\uFF0C\u4ECE\u800C\u63D0\u5347\u66F4\u65B0\u6548\u7387\u3002\u5F3A\u70C8\u4E0D\u63A8\u8350\u6761\u4EF6\u5217\u4E2D\u5305\u542B value \u5217\u3002"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"\u4F7F\u7528\u793A\u4F8B",children:"\u4F7F\u7528\u793A\u4F8B"}),"\n",(0,a.jsx)(e.p,{children:"\u5047\u8BBE\u5728\u91D1\u878D\u98CE\u63A7\u573A\u666F\u4E2D\uFF0C\u5B58\u5728\u5982\u4E0B\u7ED3\u6784\u7684\u4EA4\u6613\u660E\u7EC6\u8868\uFF1A"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:'CREATE TABLE transaction_details (\n    transaction_id BIGINT NOT NULL,        -- \u552F\u4E00\u4EA4\u6613\u7F16\u53F7\n    user_id BIGINT NOT NULL,               -- \u7528\u6237\u7F16\u53F7\n    transaction_date DATE NOT NULL,        -- \u4EA4\u6613\u65E5\u671F\n    transaction_time DATETIME NOT NULL,    -- \u4EA4\u6613\u65F6\u95F4\n    transaction_amount DECIMAL(18, 2),     -- \u4EA4\u6613\u91D1\u989D\n    transaction_device STRING,             -- \u4EA4\u6613\u8BBE\u5907\n    transaction_region STRING,             -- \u4EA4\u6613\u5730\u533A\n    average_daily_amount DECIMAL(18, 2),   -- \u6700\u8FD13\u4E2A\u6708\u65E5\u5747\u4EA4\u6613\u91D1\u989D\n    recent_transaction_count INT,          -- \u6700\u8FD17\u5929\u4EA4\u6613\u6B21\u6570\n    has_dispute_history BOOLEAN,           -- \u662F\u5426\u6709\u62D2\u4ED8\u8BB0\u5F55\n    risk_level STRING                      -- \u98CE\u9669\u7B49\u7EA7\n)\nUNIQUE KEY(transaction_id)\nDISTRIBUTED BY HASH(transaction_id) BUCKETS 16\nPROPERTIES (\n    "replication_num" = "3",               -- \u526F\u672C\u6570\u91CF\uFF0C\u9ED8\u8BA43\n    "enable_unique_key_merge_on_write" = "true"  -- \u542F\u7528MOW\u6A21\u5F0F\uFF0C\u652F\u6301\u5408\u5E76\u66F4\u65B0\n);\n'})}),"\n",(0,a.jsx)(e.p,{children:"\u5B58\u5728\u5982\u4E0B\u4EA4\u6613\u6570\u636E\uFF1A"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"+----------------+---------+------------------+---------------------+--------------------+--------------------+--------------------+----------------------+--------------------------+---------------------+------------+\n| transaction_id | user_id | transaction_date | transaction_time    | transaction_amount | transaction_device | transaction_region | average_daily_amount | recent_transaction_count | has_dispute_history | risk_level |\n+----------------+---------+------------------+---------------------+--------------------+--------------------+--------------------+----------------------+--------------------------+---------------------+------------+\n|           1001 |    5001 | 2024-11-24       | 2024-11-24 14:30:00 |             100.00 | iPhone 12          | New York           |               100.00 |                       10 |                   0 | NULL       |\n|           1002 |    5002 | 2024-11-24       | 2024-11-24 03:30:00 |             120.00 | iPhone 12          | New York           |               100.00 |                       15 |                   0 | NULL       |\n|           1003 |    5003 | 2024-11-24       | 2024-11-24 10:00:00 |             150.00 | Samsung S21        | Los Angeles        |               100.00 |                       30 |                   0 | NULL       |\n|           1004 |    5004 | 2024-11-24       | 2024-11-24 16:00:00 |             300.00 | MacBook Pro        | high_risk_region1  |               200.00 |                        5 |                   0 | NULL       |\n|           1005 |    5005 | 2024-11-24       | 2024-11-24 11:00:00 |            1100.00 | iPad Pro           | Chicago            |               200.00 |                       10 |                   0 | NULL       |\n+----------------+---------+------------------+---------------------+--------------------+--------------------+--------------------+----------------------+--------------------------+---------------------+------------+\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u6309\u7167\u5982\u4E0B\u98CE\u63A7\u89C4\u5219\u6765\u66F4\u65B0\u6BCF\u65E5\u6240\u6709\u4EA4\u6613\u8BB0\u5F55\u7684\u98CE\u9669\u7B49\u7EA7\uFF1A"}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsx)(e.li,{children:"\u6709\u62D2\u4ED8\u8BB0\u5F55\uFF0C\u98CE\u9669\u4E3A high\u3002"}),"\n",(0,a.jsx)(e.li,{children:"\u5728\u9AD8\u98CE\u9669\u5730\u533A\uFF0C\u98CE\u9669\u4E3A high\u3002"}),"\n",(0,a.jsx)(e.li,{children:"\u4EA4\u6613\u91D1\u989D\u5F02\u5E38\uFF08\u8D85\u8FC7\u65E5\u5747 5 \u500D\uFF09\uFF0C\u98CE\u9669\u4E3A high\u3002"}),"\n",(0,a.jsx)(e.li,{children:"\u6700\u8FD1 7 \u5929\u4EA4\u6613\u9891\u7E41\uFF1A\na. \u4EA4\u6613\u6B21\u6570 > 50\uFF0C\u98CE\u9669\u4E3A high\u3002\nb. \u4EA4\u6613\u6B21\u6570\u5728 20-50 \u4E4B\u95F4\uFF0C\u98CE\u9669\u4E3A medium\u3002"}),"\n",(0,a.jsx)(e.li,{children:"\u975E\u5DE5\u4F5C\u65F6\u95F4\u4EA4\u6613\uFF08\u51CC\u6668 2 \u70B9\u5230 4 \u70B9\uFF09\uFF0C\u98CE\u9669\u4E3A medium\u3002"}),"\n",(0,a.jsx)(e.li,{children:"\u9ED8\u8BA4\u98CE\u9669\u4E3A low\u3002"}),"\n"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"UPDATE transaction_details\nSET risk_level = CASE\n    -- \u6709\u62D2\u4ED8\u8BB0\u5F55\u6216\u5728\u9AD8\u98CE\u9669\u5730\u533A\u7684\u4EA4\u6613\n    WHEN has_dispute_history = TRUE THEN 'high'\n    WHEN transaction_region IN ('high_risk_region1', 'high_risk_region2') THEN 'high'\n\n    -- \u7A81\u7136\u5F02\u5E38\u4EA4\u6613\u91D1\u989D\n    WHEN transaction_amount > 5 * average_daily_amount THEN 'high'\n\n    -- \u6700\u8FD17\u5929\u4EA4\u6613\u9891\u7387\u5F88\u9AD8\n    WHEN recent_transaction_count > 50 THEN 'high'\n    WHEN recent_transaction_count BETWEEN 20 AND 50 THEN 'medium'\n\n    -- \u975E\u5DE5\u4F5C\u65F6\u95F4\u4EA4\u6613\n    WHEN HOUR(transaction_time) BETWEEN 2 AND 4 THEN 'medium'\n\n    -- \u9ED8\u8BA4\u98CE\u9669\n    ELSE 'low'\nEND\nWHERE transaction_date = '2024-11-24';\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u66F4\u65B0\u4E4B\u540E\u7684\u6570\u636E\u4E3A"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:"+----------------+---------+------------------+---------------------+--------------------+--------------------+--------------------+----------------------+--------------------------+---------------------+------------+\n| transaction_id | user_id | transaction_date | transaction_time    | transaction_amount | transaction_device | transaction_region | average_daily_amount | recent_transaction_count | has_dispute_history | risk_level |\n+----------------+---------+------------------+---------------------+--------------------+--------------------+--------------------+----------------------+--------------------------+---------------------+------------+\n|           1001 |    5001 | 2024-11-24       | 2024-11-24 14:30:00 |             100.00 | iPhone 12          | New York           |               100.00 |                       10 |                   0 | low        |\n|           1002 |    5002 | 2024-11-24       | 2024-11-24 03:30:00 |             120.00 | iPhone 12          | New York           |               100.00 |                       15 |                   0 | medium     |\n|           1003 |    5003 | 2024-11-24       | 2024-11-24 10:00:00 |             150.00 | Samsung S21        | Los Angeles        |               100.00 |                       30 |                   0 | medium     |\n|           1004 |    5004 | 2024-11-24       | 2024-11-24 16:00:00 |             300.00 | MacBook Pro        | high_risk_region1  |               200.00 |                        5 |                   0 | high       |\n|           1005 |    5005 | 2024-11-24       | 2024-11-24 11:00:00 |            1100.00 | iPad Pro           | Chicago            |               200.00 |                       10 |                   0 | high       |\n+----------------+---------+------------------+---------------------+--------------------+--------------------+--------------------+----------------------+--------------------------+---------------------+------------+\n"})}),"\n",(0,a.jsx)(e.h2,{id:"\u66F4\u591A\u5E2E\u52A9",children:"\u66F4\u591A\u5E2E\u52A9"}),"\n",(0,a.jsxs)(e.p,{children:["\u5173\u4E8E\u6570\u636E\u66F4\u65B0\u4F7F\u7528\u7684\u66F4\u591A\u8BE6\u7EC6\u8BED\u6CD5\uFF0C\u8BF7\u53C2\u9605 ",(0,a.jsx)(e.a,{href:"../../sql-manual/sql-statements/Data-Manipulation-Statements/Manipulation/UPDATE",children:"UPDATE"})," \u547D\u4EE4\u624B\u518C\uFF0C\u4E5F\u53EF\u4EE5\u5728 MySQL \u5BA2\u6237\u7AEF\u547D\u4EE4\u884C\u4E0B\u8F93\u5165 ",(0,a.jsx)(e.code,{children:"HELP UPDATE"})," \u83B7\u53D6\u66F4\u591A\u5E2E\u52A9\u4FE1\u606F\u3002"]})]})}function u(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(c,{...n})}):c(n)}},250065:function(n,e,i){i.d(e,{Z:function(){return d},a:function(){return s}});var t=i(667294);let a={},r=t.createContext(a);function s(n){let e=t.useContext(r);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:s(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);