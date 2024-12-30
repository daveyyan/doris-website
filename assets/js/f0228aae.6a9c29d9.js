"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["171599"],{21814:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>l,default:()=>d,assets:()=>a,toc:()=>u,frontMatter:()=>i});var r=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/group-bit-or","title":"GROUP_BIT_OR","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/aggregate-functions/group-bit-or.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/group-bit-or","permalink":"/docs/dev/sql-manual/sql-functions/aggregate-functions/group-bit-or","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"GROUP_BIT_OR","language":"en"},"sidebar":"docs","previous":{"title":"GROUP_BIT_AND","permalink":"/docs/dev/sql-manual/sql-functions/aggregate-functions/group-bit-and"},"next":{"title":"GROUP_BIT_XOR","permalink":"/docs/dev/sql-manual/sql-functions/aggregate-functions/group-bit-xor"}}'),o=t("785893"),s=t("250065");let i={title:"GROUP_BIT_OR",language:"en"},l=void 0,a={},u=[{value:"group_bit_or",id:"group_bit_or",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function c(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"group_bit_or",children:"group_bit_or"}),"\n",(0,o.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,o.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"expr GROUP_BIT_OR(expr)"})}),"\n",(0,o.jsx)(n.p,{children:"Perform an or calculation on expr, and return a new expr.\nAll ints are supported"}),"\n",(0,o.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"mysql> select * from group_bit;\n+-------+\n| value |\n+-------+\n|     3 |\n|     1 |\n|     2 |\n|     4 |\n+-------+\n4 rows in set (0.02 sec)\n\nmysql> select group_bit_or(value) from group_bit;\n+-----------------------+\n| group_bit_or(`value`) |\n+-----------------------+\n|                     7 |\n+-----------------------+\n"})}),"\n",(0,o.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"GROUP_BIT_OR,BIT\n"})})]})}function d(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var r=t(667294);let o={},s=r.createContext(o);function i(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);