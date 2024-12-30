"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["328893"],{446140:function(e,n,t){t.r(n),t.d(n,{metadata:()=>l,contentTitle:()=>o,default:()=>p,assets:()=>r,toc:()=>c,frontMatter:()=>s});var l=JSON.parse('{"id":"sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-COLOCATE-GROUP","title":"ALTER-COLOCATE-GROUP","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-COLOCATE-GROUP.md","sourceDirName":"sql-manual/sql-statements/Data-Definition-Statements/Alter","slug":"/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-COLOCATE-GROUP","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-COLOCATE-GROUP","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"ALTER-COLOCATE-GROUP","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ALTER-RESOURCE","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-RESOURCE"},"next":{"title":"ALTER-WORKLOAD-GROUP","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-WORKLOAD-GROUP"}}'),a=t("785893"),i=t("250065");let s={title:"ALTER-COLOCATE-GROUP",language:"zh-CN"},o=void 0,r={},c=[{value:"ALTER-COLOCATE-GROUP",id:"alter-colocate-group",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Best Practice",id:"best-practice",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"alter-colocate-group",children:"ALTER-COLOCATE-GROUP"}),"\n",(0,a.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,a.jsx)(n.p,{children:"ALTER COLOCATE GROUP"}),"\n",(0,a.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u4FEE\u6539 Colocation Group \u7684\u5C5E\u6027\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u8BED\u6CD5\uFF1A"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"ALTER COLOCATE GROUP  [database.]group\nSET (\n    property_list\n);\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u6CE8\u610F\uFF1A"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["\u5982\u679C colocate group \u662F\u5168\u5C40\u7684\uFF0C\u5373\u5B83\u7684\u540D\u79F0\u662F\u4EE5 ",(0,a.jsx)(n.code,{children:"__global__"})," \u5F00\u5934\u7684\uFF0C\u90A3\u5B83\u4E0D\u5C5E\u4E8E\u4EFB\u4F55\u4E00\u4E2A Database\uFF1B"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["property_list \u662F colocation group \u5C5E\u6027\uFF0C\u76EE\u524D\u53EA\u652F\u6301\u4FEE\u6539",(0,a.jsx)(n.code,{children:"replication_num"})," \u548C ",(0,a.jsx)(n.code,{children:"replication_allocation"}),"\u3002\n\u4FEE\u6539 colocation group \u7684\u8FD9\u4E24\u4E2A\u5C5E\u6027\u4FEE\u6539\u4E4B\u540E\uFF0C\u540C\u65F6\u628A\u8BE5 group \u7684\u8868\u7684\u5C5E\u6027",(0,a.jsx)(n.code,{children:"default.replication_allocation"})," \u3001\n\u5C5E\u6027",(0,a.jsx)(n.code,{children:"dynamic.replication_allocation "}),"\u3001\u4EE5\u53CA\u5DF2\u6709\u5206\u533A\u7684",(0,a.jsx)(n.code,{children:"replication_allocation"}),"\u6539\u6210\u8DDF\u5B83\u4E00\u6837\u3002"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u4FEE\u6539\u4E00\u4E2A\u5168\u5C40 group \u7684\u526F\u672C\u6570"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'# \u5EFA\u8868\u65F6\u8BBE\u7F6E "colocate_with" = "__global__foo"\n\nALTER COLOCATE GROUP __global__foo\nSET (\n    "replication_num"="1"\n);\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u4FEE\u6539\u4E00\u4E2A\u975E\u5168\u5C40 group \u7684\u526F\u672C\u6570"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'   # \u5EFA\u8868\u65F6\u8BBE\u7F6E "colocate_with" = "bar"\uFF0C\u4E14\u8868\u5C5E\u4E8E Database example_db\n   \n   ALTER COLOCATE GROUP example_db.bar\n   SET (\n       "replication_num"="1"\n   );\n   ```\n\n### Keywords\n\n```sql\nALTER, COLOCATE , GROUP\n'})}),"\n",(0,a.jsx)(n.h3,{id:"best-practice",children:"Best Practice"})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return s}});var l=t(667294);let a={},i=l.createContext(a);function s(e){let n=l.useContext(i);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);