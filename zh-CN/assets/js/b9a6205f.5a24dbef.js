"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["922576"],{940086:function(n,e,t){t.r(e),t.d(e,{metadata:()=>s,contentTitle:()=>d,default:()=>a,assets:()=>i,toc:()=>l,frontMatter:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/sequence-count","title":"SEQUENCE_COUNT","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/aggregate-functions/sequence-count.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/sequence-count","permalink":"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/sequence-count","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"SEQUENCE_COUNT","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SEQUENCE_MATCH","permalink":"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/sequence-match"},"next":{"title":"TO_BITMAP","permalink":"/zh-CN/docs/sql-manual/sql-functions/bitmap-functions/to-bitmap"}}'),c=t("785893"),u=t("250065");let r={title:"SEQUENCE_COUNT",language:"zh-CN"},d=void 0,i={},l=[{value:"SEQUENCE-COUNT",id:"sequence-count",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Arguments",id:"arguments",level:4},{value:"Returned value",id:"returned-value",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function o(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,u.a)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h2,{id:"sequence-count",children:"SEQUENCE-COUNT"}),"\n",(0,c.jsx)(e.h3,{id:"description",children:"Description"}),"\n",(0,c.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.code,{children:"sequence_count(pattern, timestamp, cond1, cond2, ...);"})}),"\n",(0,c.jsx)(e.p,{children:"\u8BA1\u7B97\u4E0E\u6A21\u5F0F\u5339\u914D\u7684\u4E8B\u4EF6\u94FE\u7684\u6570\u91CF\u3002\u8BE5\u51FD\u6570\u641C\u7D22\u4E0D\u91CD\u53E0\u7684\u4E8B\u4EF6\u94FE\u3002\u5F53\u524D\u94FE\u5339\u914D\u540E\uFF0C\u5B83\u5F00\u59CB\u641C\u7D22\u4E0B\u4E00\u4E2A\u94FE\u3002"}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.strong,{children:"\u8B66\u544A!"})}),"\n",(0,c.jsx)(e.p,{children:"\u5728\u540C\u4E00\u79D2\u949F\u53D1\u751F\u7684\u4E8B\u4EF6\u53EF\u80FD\u4EE5\u672A\u5B9A\u4E49\u7684\u987A\u5E8F\u6392\u5217\u5728\u5E8F\u5217\u4E2D\uFF0C\u4F1A\u5F71\u54CD\u6700\u7EC8\u7ED3\u679C\u3002"}),"\n",(0,c.jsx)(e.h4,{id:"arguments",children:"Arguments"}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"pattern"})," \u2014 \u6A21\u5F0F\u5B57\u7B26\u4E32."]}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.strong,{children:"\u6A21\u5F0F\u8BED\u6CD5"})}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"(?N)"})," \u2014 \u5728\u4F4D\u7F6EN\u5339\u914D\u6761\u4EF6\u53C2\u6570\u3002 \u6761\u4EF6\u5728\u7F16\u53F7 ",(0,c.jsx)(e.code,{children:"[1, 32]"})," \u8303\u56F4\u3002 \u4F8B\u5982, ",(0,c.jsx)(e.code,{children:"(?1)"})," \u5339\u914D\u4F20\u9012\u7ED9 ",(0,c.jsx)(e.code,{children:"cond1"})," \u53C2\u6570\u3002"]}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:".*"})," \u2014 \u5339\u914D\u4EFB\u4F55\u4E8B\u4EF6\u7684\u6570\u5B57\u3002 \u4E0D\u9700\u8981\u6761\u4EF6\u53C2\u6570\u6765\u5339\u914D\u8FD9\u4E2A\u6A21\u5F0F\u3002"]}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"(?t operator value)"})," \u2014 \u5206\u5F00\u4E24\u4E2A\u4E8B\u4EF6\u7684\u65F6\u95F4\u3002 \u5355\u4F4D\u4E3A\u79D2\u3002"]}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"t"}),"\u8868\u793A\u4E3A\u4E24\u4E2A\u65F6\u95F4\u7684\u5DEE\u503C\uFF0C\u5355\u4F4D\u4E3A\u79D2\u3002 \u4F8B\u5982\uFF1A ",(0,c.jsx)(e.code,{children:"(?1)(?t>1800)(?2)"})," \u5339\u914D\u5F7C\u6B64\u53D1\u751F\u8D85\u8FC71800\u79D2\u7684\u4E8B\u4EF6\uFF0C ",(0,c.jsx)(e.code,{children:"(?1)(?t>10000)(?2)"}),"\u5339\u914D\u5F7C\u6B64\u53D1\u751F\u8D85\u8FC710000\u79D2\u7684\u4E8B\u4EF6\u3002 \u8FD9\u4E9B\u4E8B\u4EF6\u4E4B\u95F4\u53EF\u4EE5\u5B58\u5728\u4EFB\u610F\u6570\u91CF\u7684\u4EFB\u4F55\u4E8B\u4EF6\u3002 \u60A8\u53EF\u4EE5\u4F7F\u7528 ",(0,c.jsx)(e.code,{children:">="}),", ",(0,c.jsx)(e.code,{children:">"}),", ",(0,c.jsx)(e.code,{children:"<"}),", ",(0,c.jsx)(e.code,{children:"<="}),", ",(0,c.jsx)(e.code,{children:"=="})," \u8FD0\u7B97\u7B26\u3002"]}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"timestamp"})," \u2014  \u5305\u542B\u65F6\u95F4\u7684\u5217\u3002\u5178\u578B\u7684\u65F6\u95F4\u7C7B\u578B\u662F\uFF1A ",(0,c.jsx)(e.code,{children:"Date"})," \u548C ",(0,c.jsx)(e.code,{children:"DateTime"}),"\u3002\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4EFB\u4F55\u652F\u6301\u7684 ",(0,c.jsx)(e.code,{children:"UInt"})," \u6570\u636E\u7C7B\u578B\u3002"]}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"cond1"}),", ",(0,c.jsx)(e.code,{children:"cond2"})," \u2014 \u4E8B\u4EF6\u94FE\u7684\u7EA6\u675F\u6761\u4EF6\u3002 \u6570\u636E\u7C7B\u578B\u662F\uFF1A ",(0,c.jsx)(e.code,{children:"UInt8"}),"\u3002 \u6700\u591A\u53EF\u4EE5\u4F20\u901232\u4E2A\u6761\u4EF6\u53C2\u6570\u3002 \u8BE5\u51FD\u6570\u53EA\u8003\u8651\u8FD9\u4E9B\u6761\u4EF6\u4E2D\u63CF\u8FF0\u7684\u4E8B\u4EF6\u3002 \u5982\u679C\u5E8F\u5217\u5305\u542B\u672A\u5728\u6761\u4EF6\u4E2D\u63CF\u8FF0\u7684\u6570\u636E\uFF0C\u5219\u51FD\u6570\u5C06\u8DF3\u8FC7\u8FD9\u4E9B\u6570\u636E\u3002"]}),"\n",(0,c.jsx)(e.h4,{id:"returned-value",children:"Returned value"}),"\n",(0,c.jsx)(e.p,{children:"\u5339\u914D\u7684\u975E\u91CD\u53E0\u4E8B\u4EF6\u94FE\u6570\u3002"}),"\n",(0,c.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.strong,{children:"\u5339\u914D\u4F8B\u5B50"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"DROP TABLE IF EXISTS sequence_count_test1;\n\nCREATE TABLE sequence_count_test1(\n                `uid` int COMMENT 'user id',\n                `date` datetime COMMENT 'date time', \n                `number` int NULL COMMENT 'number' \n                )\nDUPLICATE KEY(uid) \nDISTRIBUTED BY HASH(uid) BUCKETS 3 \nPROPERTIES ( \n    \"replication_num\" = \"1\"\n); \n\nINSERT INTO sequence_count_test1(uid, date, number) values (1, '2022-11-02 10:41:00', 1),\n                                                   (2, '2022-11-02 13:28:02', 2),\n                                                   (3, '2022-11-02 16:15:01', 1),\n                                                   (4, '2022-11-02 19:05:04', 2),\n                                                   (5, '2022-11-02 20:08:44', 3); \n\nSELECT * FROM sequence_count_test1 ORDER BY date;\n\n+------+---------------------+--------+\n| uid  | date                | number |\n+------+---------------------+--------+\n|    1 | 2022-11-02 10:41:00 |      1 |\n|    2 | 2022-11-02 13:28:02 |      2 |\n|    3 | 2022-11-02 16:15:01 |      1 |\n|    4 | 2022-11-02 19:05:04 |      2 |\n|    5 | 2022-11-02 20:08:44 |      3 |\n+------+---------------------+--------+\n\nSELECT sequence_count('(?1)(?2)', date, number = 1, number = 3) FROM sequence_count_test1;\n\n+----------------------------------------------------------------+\n| sequence_count('(?1)(?2)', `date`, `number` = 1, `number` = 3) |\n+----------------------------------------------------------------+\n|                                                              1 |\n+----------------------------------------------------------------+\n\nSELECT sequence_count('(?1)(?2)', date, number = 1, number = 2) FROM sequence_count_test1;\n\n+----------------------------------------------------------------+\n| sequence_count('(?1)(?2)', `date`, `number` = 1, `number` = 2) |\n+----------------------------------------------------------------+\n|                                                              2 |\n+----------------------------------------------------------------+\n\nSELECT sequence_count('(?1)(?t>=3600)(?2)', date, number = 1, number = 2) FROM sequence_count_test1;\n\n+---------------------------------------------------------------------------+\n| sequence_count('(?1)(?t>=3600)(?2)', `date`, `number` = 1, `number` = 2) |\n+---------------------------------------------------------------------------+\n|                                                                         2 |\n+---------------------------------------------------------------------------+\n"})}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.strong,{children:"\u4E0D\u5339\u914D\u4F8B\u5B50"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"DROP TABLE IF EXISTS sequence_count_test2;\n\nCREATE TABLE sequence_count_test2(\n                `uid` int COMMENT 'user id',\n                `date` datetime COMMENT 'date time', \n                `number` int NULL COMMENT 'number' \n                )\nDUPLICATE KEY(uid) \nDISTRIBUTED BY HASH(uid) BUCKETS 3 \nPROPERTIES ( \n    \"replication_num\" = \"1\"\n); \n\nINSERT INTO sequence_count_test2(uid, date, number) values (1, '2022-11-02 10:41:00', 1),\n                                                   (2, '2022-11-02 11:41:00', 7),\n                                                   (3, '2022-11-02 16:15:01', 3),\n                                                   (4, '2022-11-02 19:05:04', 4),\n                                                   (5, '2022-11-02 21:24:12', 5);\n\nSELECT * FROM sequence_count_test2 ORDER BY date;\n\n+------+---------------------+--------+\n| uid  | date                | number |\n+------+---------------------+--------+\n|    1 | 2022-11-02 10:41:00 |      1 |\n|    2 | 2022-11-02 11:41:00 |      7 |\n|    3 | 2022-11-02 16:15:01 |      3 |\n|    4 | 2022-11-02 19:05:04 |      4 |\n|    5 | 2022-11-02 21:24:12 |      5 |\n+------+---------------------+--------+\n\nSELECT sequence_count('(?1)(?2)', date, number = 1, number = 2) FROM sequence_count_test2;\n\n+----------------------------------------------------------------+\n| sequence_count('(?1)(?2)', `date`, `number` = 1, `number` = 2) |\n+----------------------------------------------------------------+\n|                                                              0 |\n+----------------------------------------------------------------+\n\nSELECT sequence_count('(?1)(?2).*', date, number = 1, number = 2) FROM sequence_count_test2;\n\n+------------------------------------------------------------------+\n| sequence_count('(?1)(?2).*', `date`, `number` = 1, `number` = 2) |\n+------------------------------------------------------------------+\n|                                                                0 |\n+------------------------------------------------------------------+\n\nSELECT sequence_count('(?1)(?t>3600)(?2)', date, number = 1, number = 7) FROM sequence_count_test2;\n\n+--------------------------------------------------------------------------+\n| sequence_count('(?1)(?t>3600)(?2)', `date`, `number` = 1, `number` = 7) |\n+--------------------------------------------------------------------------+\n|                                                                        0 |\n+--------------------------------------------------------------------------+\n"})}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.strong,{children:"\u7279\u6B8A\u4F8B\u5B50"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"DROP TABLE IF EXISTS sequence_count_test3;\n\nCREATE TABLE sequence_count_test3(\n                `uid` int COMMENT 'user id',\n                `date` datetime COMMENT 'date time', \n                `number` int NULL COMMENT 'number' \n                )\nDUPLICATE KEY(uid) \nDISTRIBUTED BY HASH(uid) BUCKETS 3 \nPROPERTIES ( \n    \"replication_num\" = \"1\"\n); \n\nINSERT INTO sequence_count_test3(uid, date, number) values (1, '2022-11-02 10:41:00', 1),\n                                                   (2, '2022-11-02 11:41:00', 7),\n                                                   (3, '2022-11-02 16:15:01', 3),\n                                                   (4, '2022-11-02 19:05:04', 4),\n                                                   (5, '2022-11-02 21:24:12', 5);\n\nSELECT * FROM sequence_count_test3 ORDER BY date;\n\n+------+---------------------+--------+\n| uid  | date                | number |\n+------+---------------------+--------+\n|    1 | 2022-11-02 10:41:00 |      1 |\n|    2 | 2022-11-02 11:41:00 |      7 |\n|    3 | 2022-11-02 16:15:01 |      3 |\n|    4 | 2022-11-02 19:05:04 |      4 |\n|    5 | 2022-11-02 21:24:12 |      5 |\n+------+---------------------+--------+\n"})}),"\n",(0,c.jsx)(e.p,{children:"Perform the query:"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"SELECT sequence_count('(?1)(?2)', date, number = 1, number = 5) FROM sequence_count_test3;\n\n+----------------------------------------------------------------+\n| sequence_count('(?1)(?2)', `date`, `number` = 1, `number` = 5) |\n+----------------------------------------------------------------+\n|                                                              1 |\n+----------------------------------------------------------------+\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u4E0A\u9762\u4E3A\u4E00\u4E2A\u975E\u5E38\u7B80\u5355\u7684\u5339\u914D\u4F8B\u5B50\uFF0C \u8BE5\u51FD\u6570\u627E\u5230\u4E86\u6570\u5B575\u8DDF\u968F\u6570\u5B571\u7684\u4E8B\u4EF6\u94FE\u3002 \u5B83\u8DF3\u8FC7\u4E86\u5B83\u4EEC\u4E4B\u95F4\u7684\u6570\u5B577\uFF0C3\uFF0C4\uFF0C\u56E0\u4E3A\u8BE5\u6570\u5B57\u6CA1\u6709\u88AB\u63CF\u8FF0\u4E3A\u4E8B\u4EF6\u3002 \u5982\u679C\u6211\u4EEC\u60F3\u5728\u641C\u7D22\u793A\u4F8B\u4E2D\u7ED9\u51FA\u7684\u4E8B\u4EF6\u94FE\u65F6\u8003\u8651\u8FD9\u4E2A\u6570\u5B57\uFF0C\u6211\u4EEC\u5E94\u8BE5\u4E3A\u5B83\u521B\u5EFA\u4E00\u4E2A\u6761\u4EF6\u3002"}),"\n",(0,c.jsx)(e.p,{children:"\u73B0\u5728\uFF0C\u8003\u8651\u5982\u4E0B\u6267\u884C\u8BED\u53E5\uFF1A"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"SELECT sequence_count('(?1)(?2)', date, number = 1, number = 5, number = 4) FROM sequence_count_test3;\n\n+------------------------------------------------------------------------------+\n| sequence_count('(?1)(?2)', `date`, `number` = 1, `number` = 5, `number` = 4) |\n+------------------------------------------------------------------------------+\n|                                                                            0 |\n+------------------------------------------------------------------------------+\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u60A8\u53EF\u80FD\u5BF9\u8FD9\u4E2A\u7ED3\u679C\u6709\u4E9B\u8BB8\u7591\u60D1\uFF0C\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u51FD\u6570\u627E\u4E0D\u5230\u4E0E\u6A21\u5F0F\u5339\u914D\u7684\u4E8B\u4EF6\u94FE\uFF0C\u56E0\u4E3A\u6570\u5B574\u7684\u4E8B\u4EF6\u53D1\u751F\u57281\u548C5\u4E4B\u95F4\u3002 \u5982\u679C\u5728\u76F8\u540C\u7684\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u68C0\u67E5\u4E86\u6570\u5B576\u7684\u6761\u4EF6\uFF0C\u5219\u5E8F\u5217\u5C06\u4E0E\u6A21\u5F0F\u5339\u914D\u3002"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-sql",children:"SELECT sequence_count('(?1)(?2)', date, number = 1, number = 5, number = 6) FROM sequence_count_test3;\n\n+------------------------------------------------------------------------------+\n| sequence_count('(?1)(?2)', `date`, `number` = 1, `number` = 5, `number` = 6) |\n+------------------------------------------------------------------------------+\n|                                                                            1 |\n+------------------------------------------------------------------------------+\n"})}),"\n",(0,c.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,c.jsx)(e.p,{children:"SEQUENCE_COUNT"})]})}function a(n={}){let{wrapper:e}={...(0,u.a)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(o,{...n})}):o(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return d},a:function(){return r}});var s=t(667294);let c={},u=s.createContext(c);function r(n){let e=s.useContext(u);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:r(n.components),s.createElement(u.Provider,{value:e},n.children)}}}]);