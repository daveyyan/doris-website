"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["226072"],{819368:function(e,n,a){a.r(n),a.d(n,{metadata:()=>l,contentTitle:()=>r,default:()=>u,assets:()=>c,toc:()=>o,frontMatter:()=>s});var l=JSON.parse('{"id":"sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/ANALYZE","title":"ANALYZE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/ANALYZE.md","sourceDirName":"sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation","slug":"/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/ANALYZE","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/ANALYZE","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"ANALYZE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"INSERT-OVERWRITE","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/INSERT-OVERWRITE"},"next":{"title":"OUTFILE","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Data-Manipulation-Statements/OUTFILE"}}'),t=a("785893"),i=a("250065");let s={title:"ANALYZE",language:"zh-CN"},r=void 0,c={},o=[{value:"ANALYZE",id:"analyze",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"analyze",children:"ANALYZE"}),"\n",(0,t.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,t.jsx)(n.p,{children:"ANALYZE"}),"\n",(0,t.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u6536\u96C6\u5404\u5217\u7684\u7EDF\u8BA1\u4FE1\u606F\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"ANALYZE < TABLE | DATABASE table_name | db_name > \n    [ (column_name [, ...]) ]\n    [ [ WITH SYNC ] [ WITH SAMPLE PERCENT | ROWS ] ];\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["table_name: \u6307\u5B9A\u7684\u76EE\u6807\u8868\u3002\u53EF\u4EE5\u662F \xa0",(0,t.jsx)(n.code,{children:"db_name.table_name"}),"\xa0 \u5F62\u5F0F\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["column_name: \u6307\u5B9A\u7684\u76EE\u6807\u5217\u3002\u5FC5\u987B\u662F \xa0",(0,t.jsx)(n.code,{children:"table_name"}),"\xa0 \u4E2D\u5B58\u5728\u7684\u5217\uFF0C\u591A\u4E2A\u5217\u540D\u79F0\u7528\u9017\u53F7\u5206\u9694\u3002"]}),"\n",(0,t.jsx)(n.li,{children:"sync\uFF1A\u540C\u6B65\u6536\u96C6\u7EDF\u8BA1\u4FE1\u606F\u3002\u6536\u96C6\u5B8C\u540E\u8FD4\u56DE\u3002\u82E5\u4E0D\u6307\u5B9A\u5219\u5F02\u6B65\u6267\u884C\u5E76\u8FD4\u56DE JOB ID\u3002"}),"\n",(0,t.jsx)(n.li,{children:"sample percent | rows\uFF1A\u62BD\u6837\u6536\u96C6\u7EDF\u8BA1\u4FE1\u606F\u3002\u53EF\u4EE5\u6307\u5B9A\u62BD\u6837\u6BD4\u4F8B\u6216\u8005\u62BD\u6837\u884C\u6570\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"\u5BF9\u4E00\u5F20\u8868\u6309\u7167 10% \u7684\u6BD4\u4F8B\u91C7\u6837\u6536\u96C6\u7EDF\u8BA1\u6570\u636E\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"ANALYZE TABLE lineitem WITH SAMPLE PERCENT 10;\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5BF9\u4E00\u5F20\u8868\u6309\u91C7\u6837 10 \u4E07\u884C\u6536\u96C6\u7EDF\u8BA1\u6570\u636E"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"ANALYZE TABLE lineitem WITH SAMPLE ROWS 100000;\n"})}),"\n",(0,t.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,t.jsx)(n.p,{children:"ANALYZE"})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return r},a:function(){return s}});var l=a(667294);let t={},i=l.createContext(t);function s(e){let n=l.useContext(i);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);