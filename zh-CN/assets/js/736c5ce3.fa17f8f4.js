"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["12231"],{827584:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>c,default:()=>h,assets:()=>a,toc:()=>d,frontMatter:()=>l});var i=JSON.parse('{"id":"table-design/data-partitioning/common-issues","title":"\u5E38\u89C1\u95EE\u9898","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/table-design/data-partitioning/common-issues.md","sourceDirName":"table-design/data-partitioning","slug":"/table-design/data-partitioning/common-issues","permalink":"/zh-CN/docs/dev/table-design/data-partitioning/common-issues","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u5E38\u89C1\u95EE\u9898","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u81EA\u52A8\u5206\u6876","permalink":"/zh-CN/docs/dev/table-design/data-partitioning/auto-bucket"},"next":{"title":"Schema \u53D8\u66F4","permalink":"/zh-CN/docs/dev/table-design/schema-change"}}'),s=t("785893"),r=t("250065");let l={title:"\u5E38\u89C1\u95EE\u9898",language:"zh-CN"},c=void 0,a={},d=[{value:"\u66F4\u591A\u5E2E\u52A9",id:"\u66F4\u591A\u5E2E\u52A9",level:2}];function o(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"1.  \u5982\u679C\u5728\u8F83\u957F\u7684\u5EFA\u8868\u8BED\u53E5\u4E2D\u51FA\u73B0\u8BED\u6CD5\u9519\u8BEF\uFF0C\u53EF\u80FD\u4F1A\u51FA\u73B0\u8BED\u6CD5\u9519\u8BEF\u63D0\u793A\u4E0D\u5168\u7684\u73B0\u8C61\u3002\u8FD9\u91CC\u7F57\u5217\u53EF\u80FD\u7684\u8BED\u6CD5\u9519\u8BEF\u4F9B\u624B\u52A8\u7EA0\u9519\uFF1A"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u8BED\u6CD5\u7ED3\u6784\u9519\u8BEF\u3002\u8BF7\u4ED4\u7EC6\u9605\u8BFB ",(0,s.jsx)(n.code,{children:"HELP CREATE TABLE;"}),"\uFF0C\u68C0\u67E5\u76F8\u5173\u8BED\u6CD5\u7ED3\u6784\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u4FDD\u7559\u5B57\u3002\u5F53\u7528\u6237\u81EA\u5B9A\u4E49\u540D\u79F0\u9047\u5230\u4FDD\u7559\u5B57\u65F6\uFF0C\u9700\u8981\u7528\u53CD\u5F15\u53F7 `` \u5F15\u8D77\u6765\u3002\u5EFA\u8BAE\u6240\u6709\u81EA\u5B9A\u4E49\u540D\u79F0\u4F7F\u7528\u8FD9\u4E2A\u7B26\u53F7\u5F15\u8D77\u6765\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u4E2D\u6587\u5B57\u7B26\u6216\u5168\u89D2\u5B57\u7B26\u3002\u975E utf8 \u7F16\u7801\u7684\u4E2D\u6587\u5B57\u7B26\uFF0C\u6216\u9690\u85CF\u7684\u5168\u89D2\u5B57\u7B26\uFF08\u7A7A\u683C\uFF0C\u6807\u70B9\u7B49\uFF09\u4F1A\u5BFC\u81F4\u8BED\u6CD5\u9519\u8BEF\u3002\u5EFA\u8BAE\u4F7F\u7528\u5E26\u6709\u663E\u793A\u4E0D\u53EF\u89C1\u5B57\u7B26\u7684\u6587\u672C\u7F16\u8F91\u5668\u8FDB\u884C\u68C0\u67E5\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["2.  ",(0,s.jsx)(n.code,{children:"Failed to create partition [xxx] . Timeout"})]})}),"\n",(0,s.jsxs)(n.p,{children:["Doris \u5EFA\u8868\u662F\u6309\u7167 Partition \u7C92\u5EA6\u4F9D\u6B21\u521B\u5EFA\u7684\u3002\u5F53\u4E00\u4E2A Partition \u521B\u5EFA\u5931\u8D25\u65F6\uFF0C\u53EF\u80FD\u4F1A\u62A5\u8FD9\u4E2A\u9519\u8BEF\u3002\u5373\u4F7F\u4E0D\u4F7F\u7528 Partition\uFF0C\u5F53\u5EFA\u8868\u51FA\u73B0\u95EE\u9898\u65F6\uFF0C\u4E5F\u4F1A\u62A5 ",(0,s.jsx)(n.code,{children:"Failed to create partition"}),"\uFF0C\u56E0\u4E3A\u5982\u524D\u6587\u6240\u8FF0\uFF0CDoris \u4F1A\u4E3A\u6CA1\u6709\u6307\u5B9A Partition \u7684\u8868\u521B\u5EFA\u4E00\u4E2A\u4E0D\u53EF\u66F4\u6539\u7684\u9ED8\u8BA4\u7684 Partition\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u5F53\u9047\u5230\u8FD9\u4E2A\u9519\u8BEF\u662F\uFF0C\u901A\u5E38\u662F BE \u5728\u521B\u5EFA\u6570\u636E\u5206\u7247\u65F6\u9047\u5230\u4E86\u95EE\u9898\u3002\u53EF\u4EE5\u53C2\u7167\u4EE5\u4E0B\u6B65\u9AA4\u6392\u67E5\uFF1A"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u5728 fe.log \u4E2D\uFF0C\u67E5\u627E\u5BF9\u5E94\u65F6\u95F4\u70B9\u7684 ",(0,s.jsx)(n.code,{children:"Failed to create partition"})," \u65E5\u5FD7\u3002\u5728\u8BE5\u65E5\u5FD7\u4E2D\uFF0C\u4F1A\u51FA\u73B0\u4E00\u7CFB\u5217\u7C7B\u4F3C ",(0,s.jsx)(n.code,{children:"{10001-10010}"})," \u5B57\u6837\u7684\u6570\u5B57\u5BF9\u3002\u6570\u5B57\u5BF9\u7684\u7B2C\u4E00\u4E2A\u6570\u5B57\u8868\u793A Backend ID\uFF0C\u7B2C\u4E8C\u4E2A\u6570\u5B57\u8868\u793A Tablet ID\u3002\u5982\u4E0A\u8FD9\u4E2A\u6570\u5B57\u5BF9\uFF0C\u8868\u793A ID \u4E3A 10001 \u7684 Backend \u4E0A\uFF0C\u521B\u5EFA ID \u4E3A 10010 \u7684 Tablet \u5931\u8D25\u4E86\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u524D\u5F80\u5BF9\u5E94 Backend \u7684 be.INFO \u65E5\u5FD7\uFF0C\u67E5\u627E\u5BF9\u5E94\u65F6\u95F4\u6BB5\u5185\uFF0Ctablet id \u76F8\u5173\u7684\u65E5\u5FD7\uFF0C\u53EF\u4EE5\u627E\u5230\u9519\u8BEF\u4FE1\u606F\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u4EE5\u4E0B\u7F57\u5217\u4E00\u4E9B\u5E38\u89C1\u7684 tablet \u521B\u5EFA\u5931\u8D25\u9519\u8BEF\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\uFF1A"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["BE \u6CA1\u6709\u6536\u5230\u76F8\u5173 task\uFF0C\u6B64\u65F6\u65E0\u6CD5\u5728 be.INFO \u4E2D\u627E\u5230 tablet id \u76F8\u5173\u65E5\u5FD7\u6216\u8005 BE \u521B\u5EFA\u6210\u529F\uFF0C\u4F46\u6C47\u62A5\u5931\u8D25\u3002\u4EE5\u4E0A\u95EE\u9898\uFF0C\u8BF7\u53C2\u9605 ",(0,s.jsx)(n.a,{href:"../../install/cluster-deployment/standard-deployment",children:"\u5B89\u88C5\u4E0E\u90E8\u7F72"})," \u68C0\u67E5 FE \u548C BE \u7684\u8FDE\u901A\u6027\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u9884\u5206\u914D\u5185\u5B58\u5931\u8D25\u3002\u53EF\u80FD\u662F\u8868\u4E2D\u4E00\u884C\u7684\u5B57\u8282\u957F\u5EA6\u8D85\u8FC7\u4E86 100KB\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Too many open files"}),"\u3002\u6253\u5F00\u7684\u6587\u4EF6\u53E5\u67C4\u6570\u8D85\u8FC7\u4E86 Linux \u7CFB\u7EDF\u9650\u5236\u3002\u9700\u4FEE\u6539 Linux \u7CFB\u7EDF\u7684\u53E5\u67C4\u6570\u9650\u5236\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679C\u521B\u5EFA\u6570\u636E\u5206\u7247\u65F6\u8D85\u65F6\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7\u5728 fe.conf \u4E2D\u8BBE\u7F6E ",(0,s.jsx)(n.code,{children:"tablet_create_timeout_second=xxx"})," \u4EE5\u53CA ",(0,s.jsx)(n.code,{children:"max_create_table_timeout_second=xxx"})," \u6765\u5EF6\u957F\u8D85\u65F6\u65F6\u95F4\u3002\u5176\u4E2D ",(0,s.jsx)(n.code,{children:"tablet_create_timeout_second"})," \u9ED8\u8BA4\u662F 1 \u79D2\uFF0C",(0,s.jsx)(n.code,{children:"max_create_table_timeout_second"})," \u9ED8\u8BA4\u662F 60 \u79D2\uFF0C\u603B\u4F53\u7684\u8D85\u65F6\u65F6\u95F4\u4E3A min(tablet_create_timeout_second * replication_num, max_create_table_timeout_second)\uFF0C\u5177\u4F53\u53C2\u6570\u8BBE\u7F6E\u53EF\u53C2\u9605 ",(0,s.jsx)(n.a,{href:"../../admin-manual/config/fe-config",children:"FE \u914D\u7F6E\u9879"})," \u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"3.  \u5EFA\u8868\u547D\u4EE4\u957F\u65F6\u95F4\u4E0D\u8FD4\u56DE\u7ED3\u679C\u3002"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Doris \u7684\u5EFA\u8868\u547D\u4EE4\u662F\u540C\u6B65\u547D\u4EE4\u3002\u8BE5\u547D\u4EE4\u7684\u8D85\u65F6\u65F6\u95F4\u76EE\u524D\u8BBE\u7F6E\u7684\u6BD4\u8F83\u7B80\u5355\uFF0C\u5373\uFF08tablet num * replication num\uFF09\u79D2\u3002\u5982\u679C\u521B\u5EFA\u8F83\u591A\u7684\u6570\u636E\u5206\u7247\uFF0C\u5E76\u4E14\u5176\u4E2D\u6709\u5206\u7247\u521B\u5EFA\u5931\u8D25\uFF0C\u5219\u53EF\u80FD\u5BFC\u81F4\u7B49\u5F85\u8F83\u957F\u8D85\u65F6\u540E\uFF0C\u624D\u4F1A\u8FD4\u56DE\u9519\u8BEF\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6B63\u5E38\u60C5\u51B5\u4E0B\uFF0C\u5EFA\u8868\u8BED\u53E5\u4F1A\u5728\u51E0\u79D2\u6216\u5341\u51E0\u79D2\u5185\u8FD4\u56DE\u3002\u5982\u679C\u8D85\u8FC7\u4E00\u5206\u949F\uFF0C\u5EFA\u8BAE\u76F4\u63A5\u53D6\u6D88\u6389\u8FD9\u4E2A\u64CD\u4F5C\uFF0C\u524D\u5F80 FE \u6216 BE \u7684\u65E5\u5FD7\u67E5\u770B\u76F8\u5173\u9519\u8BEF\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u66F4\u591A\u5E2E\u52A9",children:"\u66F4\u591A\u5E2E\u52A9"}),"\n",(0,s.jsxs)(n.p,{children:["\u5173\u4E8E\u6570\u636E\u5212\u5206\u66F4\u591A\u7684\u8BE6\u7EC6\u8BF4\u660E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728 ",(0,s.jsx)(n.a,{href:"../../sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-TABLE",children:"CREATE TABLE"})," \u547D\u4EE4\u624B\u518C\u4E2D\u67E5\u9605\uFF0C\u4E5F\u53EF\u4EE5\u5728 MySQL \u5BA2\u6237\u7AEF\u4E0B\u8F93\u5165 ",(0,s.jsx)(n.code,{children:"HELP CREATE TABLE;"})," \u83B7\u53D6\u66F4\u591A\u7684\u5E2E\u52A9\u4FE1\u606F\u3002"]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return l}});var i=t(667294);let s={},r=i.createContext(s);function l(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);