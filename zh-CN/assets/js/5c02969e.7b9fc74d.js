"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["889588"],{847293:function(e,n,l){l.r(n),l.d(n,{metadata:()=>s,contentTitle:()=>c,default:()=>h,assets:()=>a,toc:()=>d,frontMatter:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-POLICY","title":"CREATE-POLICY","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-POLICY.md","sourceDirName":"sql-manual/sql-statements/Data-Definition-Statements/Create","slug":"/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-POLICY","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-POLICY","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"CREATE-POLICY","language":"zh-CN"},"sidebar":"docs","previous":{"title":"CREATE-FILE","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-FILE"},"next":{"title":"CREATE-ENCRYPT-KEY","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-ENCRYPT-KEY"}}'),t=l("785893"),i=l("250065");let r={title:"CREATE-POLICY",language:"zh-CN"},c=void 0,a={},d=[{value:"CREATE-POLICY",id:"create-policy",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"\u8BED\u6CD5\uFF1A",id:"\u8BED\u6CD5",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function o(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"create-policy",children:"CREATE-POLICY"}),"\n",(0,t.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,t.jsx)(n.p,{children:"CREATE POLICY"}),"\n",(0,t.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"\u521B\u5EFA\u7B56\u7565\uFF0C\u5305\u542B\u4EE5\u4E0B\u51E0\u79CD\uFF1A"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u521B\u5EFA\u5B89\u5168\u7B56\u7565 (ROW POLICY)\uFF0Cexplain \u53EF\u4EE5\u67E5\u770B\u6539\u5199\u540E\u7684 SQL\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u521B\u5EFA\u6570\u636E\u8FC1\u79FB\u7B56\u7565 (STORAGE POLICY)\uFF0C\u7528\u4E8E\u51B7\u70ED\u6570\u636E\u8F6C\u6362\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5\uFF1A"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"ROW POLICY"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE ROW POLICY test_row_policy_1 ON test.table1 \nAS {RESTRICTIVE|PERMISSIVE} TO test USING (id in (1, 2));\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u53C2\u6570\u8BF4\u660E\uFF1A"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"filterType\uFF1ARESTRICTIVE \u5C06\u4E00\u7EC4\u7B56\u7565\u901A\u8FC7 AND \u8FDE\u63A5\uFF0CPERMISSIVE \u5C06\u4E00\u7EC4\u7B56\u7565\u901A\u8FC7 OR \u8FDE\u63A5"}),"\n",(0,t.jsx)(n.li,{children:"\u914D\u7F6E\u591A\u4E2A\u7B56\u7565\u9996\u5148\u5408\u5E76 RESTRICTIVE \u7684\u7B56\u7565\uFF0C\u518D\u6DFB\u52A0 PERMISSIVE \u7684\u7B56\u7565"}),"\n",(0,t.jsx)(n.li,{children:"RESTRICTIVE \u548C PERMISSIVE \u4E4B\u95F4\u901A\u8FC7 AND \u8FDE\u63A5\u7684"}),"\n",(0,t.jsx)(n.li,{children:"\u4E0D\u5141\u8BB8\u5BF9 root \u548C admin \u7528\u6237\u521B\u5EFA"}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"STORAGE POLICY"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'CREATE STORAGE POLICY test_storage_policy_1\nPROPERTIES ("key"="value", ...);\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u53C2\u6570\u8BF4\u660E\uFF1A"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["PROPERTIES \u4E2D\u9700\u8981\u6307\u5B9A\u8D44\u6E90\u7684\u7C7B\u578B\uFF1A\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"storage_resource\uFF1A\u6307\u5B9A\u7B56\u7565\u4F7F\u7528\u7684 storage resource \u540D\u79F0\u3002"}),"\n",(0,t.jsx)(n.li,{children:"cooldown_datetime\uFF1A\u70ED\u6570\u636E\u8F6C\u4E3A\u51B7\u6570\u636E\u65F6\u95F4\uFF0C\u4E0D\u80FD\u4E0E cooldown_ttl \u540C\u65F6\u5B58\u5728\u3002"}),"\n",(0,t.jsx)(n.li,{children:"cooldown_ttl\uFF1A\u70ED\u6570\u636E\u6301\u7EED\u65F6\u95F4\u3002\u4ECE\u6570\u636E\u5206\u7247\u751F\u6210\u65F6\u5F00\u59CB\u8BA1\u7B97\uFF0C\u7ECF\u8FC7\u6307\u5B9A\u65F6\u95F4\u540E\u8F6C\u4E3A\u51B7\u6570\u636E\u3002\u652F\u6301\u7684\u683C\u5F0F\uFF1A\n1d\uFF1A1 \u5929\n1h\uFF1A1 \u5C0F\u65F6\n50000: 50000 \u79D2"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u521B\u5EFA\u4E00\u7EC4\u884C\u5B89\u5168\u7B56\u7565"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE ROW POLICY test_row_policy_1 ON test.table1 \nAS RESTRICTIVE TO test USING (c1 = 'a');\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE ROW POLICY test_row_policy_2 ON test.table1 \nAS RESTRICTIVE TO test USING (c2 = 'b');\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE ROW POLICY test_row_policy_3 ON test.table1 \nAS PERMISSIVE TO test USING (c3 = 'c');\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE ROW POLICY test_row_policy_3 ON test.table1 \nAS PERMISSIVE TO test USING (c4 = 'd');\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5F53\u6211\u4EEC\u6267\u884C\u5BF9 table1 \u7684\u67E5\u8BE2\u65F6\u88AB\u6539\u5199\u540E\u7684 sql \u4E3A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select * from (select * from table1 where c1 = 'a' and c2 = 'b' or c3 = 'c' or c4 = 'd')\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u521B\u5EFA\u6570\u636E\u8FC1\u79FB\u7B56\u7565"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\u8BF4\u660E\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u51B7\u70ED\u5206\u5C42\u521B\u5EFA\u7B56\u7565\uFF0C\u5FC5\u987B\u5148\u521B\u5EFA resource\uFF0C\u7136\u540E\u521B\u5EFA\u8FC1\u79FB\u7B56\u7565\u65F6\u5019\u5173\u8054\u521B\u5EFA\u7684 resource \u540D"}),"\n",(0,t.jsx)(n.li,{children:"\u5F53\u524D\u4E0D\u652F\u6301\u5220\u9664 drop \u6570\u636E\u8FC1\u79FB\u7B56\u7565\uFF0C\u9632\u6B62\u6570\u636E\u88AB\u8FC1\u79FB\u540E\u3002\u7B56\u7565\u88AB\u5220\u9664\u4E86\uFF0C\u7CFB\u7EDF\u65E0\u6CD5\u627E\u56DE\u6570\u636E"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"\u6307\u5B9A\u6570\u636E\u51B7\u5374\u65F6\u95F4\u521B\u5EFA\u6570\u636E\u8FC1\u79FB\u7B56\u7565"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'CREATE STORAGE POLICY testPolicy\nPROPERTIES(\n  "storage_resource" = "s3",\n  "cooldown_datetime" = "2022-06-08 00:00:00"\n);\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"\u6307\u5B9A\u70ED\u6570\u636E\u6301\u7EED\u65F6\u95F4\u521B\u5EFA\u6570\u636E\u8FC1\u79FB\u7B56\u7565"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'CREATE STORAGE POLICY testPolicy\nPROPERTIES(\n  "storage_resource" = "s3",\n  "cooldown_ttl" = "1d"\n);\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u76F8\u5173\u53C2\u6570\u5982\u4E0B\uFF1A"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"storage_resource"}),"\uFF1A\u521B\u5EFA\u7684storage resource\u540D\u79F0"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"cooldown_datetime"}),"\uFF1A\u8FC1\u79FB\u6570\u636E\u7684\u65F6\u95F4\u70B9"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"cooldown_ttl"}),"\uFF1A\u8FC1\u79FB\u6570\u636E\u8DDD\u79BB\u5F53\u524D\u65F6\u95F4\u7684\u5012\u8BA1\u65F6\uFF0C\u5355\u4F4Ds\u3002\u4E0Ecooldown_datetime\u4E8C\u9009\u4E00\u5373\u53EF"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"CREATE, POLICY\n"})}),"\n",(0,t.jsx)(n.h3,{id:"best-practice",children:"Best Practice"})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return c},a:function(){return r}});var s=l(667294);let t={},i=s.createContext(t);function r(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);