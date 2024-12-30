"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["406423"],{743940:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>h,assets:()=>c,toc:()=>o,frontMatter:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-statements/Show-Statements/SHOW-CATALOGS","title":"SHOW-CATALOGS","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/Show-Statements/SHOW-CATALOGS.md","sourceDirName":"sql-manual/sql-statements/Show-Statements","slug":"/sql-manual/sql-statements/Show-Statements/SHOW-CATALOGS","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/Show-Statements/SHOW-CATALOGS","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"SHOW-CATALOGS","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SHOW-BROKER","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/Show-Statements/SHOW-BROKER"},"next":{"title":"SHOW-CREATE-TABLE","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/Show-Statements/SHOW-CREATE-TABLE"}}'),l=t("785893"),a=t("250065");let i={title:"SHOW-CATALOGS",language:"zh-CN"},r=void 0,c={},o=[{value:"SHOW-CATALOGS",id:"show-catalogs",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"show-catalogs",children:"SHOW-CATALOGS"}),"\n",(0,l.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,l.jsx)(n.p,{children:"SHOW CATALOGS"}),"\n",(0,l.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u663E\u793A\u5DF2\u5B58\u5728\u662F\u6570\u636E\u76EE\u5F55\uFF08catalog\uFF09"}),"\n",(0,l.jsx)(n.p,{children:"\u8BED\u6CD5\uFF1A"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SHOW CATALOGS [LIKE]\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u8BF4\u660E\uFF1A"}),"\n",(0,l.jsx)(n.p,{children:"LIKE\uFF1A\u53EF\u6309\u7167 CATALOG \u540D\u8FDB\u884C\u6A21\u7CCA\u67E5\u8BE2"}),"\n",(0,l.jsx)(n.p,{children:"\u8FD4\u56DE\u7ED3\u679C\u8BF4\u660E\uFF1A"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"CatalogId\uFF1A\u6570\u636E\u76EE\u5F55\u552F\u4E00 ID"}),"\n",(0,l.jsx)(n.li,{children:"CatalogName\uFF1A\u6570\u636E\u76EE\u5F55\u540D\u79F0\u3002\u5176\u4E2D internal \u662F\u9ED8\u8BA4\u5185\u7F6E\u7684 catalog\uFF0C\u4E0D\u53EF\u4FEE\u6539\u3002"}),"\n",(0,l.jsx)(n.li,{children:"Type\uFF1A\u6570\u636E\u76EE\u5F55\u7C7B\u578B\u3002"}),"\n",(0,l.jsx)(n.li,{children:"IsCurrent: \u662F\u5426\u4E3A\u5F53\u524D\u6B63\u5728\u4F7F\u7528\u7684\u6570\u636E\u76EE\u5F55\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u67E5\u770B\u5F53\u524D\u5DF2\u521B\u5EFA\u7684\u6570\u636E\u76EE\u5F55"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SHOW CATALOGS;\n +-----------+-------------+----------+-----------+-------------------------+---------------------+------------------------+\n | CatalogId | CatalogName | Type     | IsCurrent | CreateTime              | LastUpdateTime      | Comment                |\n +-----------+-------------+----------+-----------+-------------------------+---------------------+------------------------+\n |    130100 | hive        | hms      |           | 2023-12-25 16:11:41.687 | 2023-12-25 20:43:18 | NULL                   |\n |         0 | internal    | internal | yes       | UNRECORDED              | NULL                | Doris internal catalog |\n +-----------+-------------+----------+-----------+-------------------------+---------------------+------------------------+\n    ```\n\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u6309\u7167\u76EE\u5F55\u540D\u8FDB\u884C\u6A21\u7CCA\u641C\u7D22"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SHOW CATALOGS LIKE 'hi%';\n +-----------+-------------+----------+-----------+-------------------------+---------------------+------------------------+\n | CatalogId | CatalogName | Type     | IsCurrent | CreateTime              | LastUpdateTime      | Comment                |\n +-----------+-------------+----------+-----------+-------------------------+---------------------+------------------------+\n |    130100 | hive        | hms      |           | 2023-12-25 16:11:41.687 | 2023-12-25 20:43:18 | NULL                   |\n +-----------+-------------+----------+-----------+-------------------------+---------------------+------------------------+\n    ```\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,l.jsx)(n.p,{children:"SHOW, CATALOG, CATALOGS"}),"\n",(0,l.jsx)(n.h3,{id:"best-practice",children:"Best Practice"})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return i}});var s=t(667294);let l={},a=s.createContext(l);function i(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);