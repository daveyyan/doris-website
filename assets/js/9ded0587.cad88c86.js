"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["644340"],{15616:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>l,default:()=>u,assets:()=>a,toc:()=>r,frontMatter:()=>i});var t=JSON.parse('{"id":"sql-manual/sql-functions/conditional-functions/coalesce","title":"coalesce","description":"\x3c!--","source":"@site/versioned_docs/version-1.2/sql-manual/sql-functions/conditional-functions/coalesce.md","sourceDirName":"sql-manual/sql-functions/conditional-functions","slug":"/sql-manual/sql-functions/conditional-functions/coalesce","permalink":"/docs/1.2/sql-manual/sql-functions/conditional-functions/coalesce","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"coalesce","language":"en"},"sidebar":"docs","previous":{"title":"case","permalink":"/docs/1.2/sql-manual/sql-functions/conditional-functions/case"},"next":{"title":"if","permalink":"/docs/1.2/sql-manual/sql-functions/conditional-functions/if"}}'),o=s("785893"),c=s("250065");let i={title:"coalesce",language:"en"},l=void 0,a={},r=[{value:"coalesce",id:"coalesce",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"coalesce",children:"coalesce"}),"\n",(0,o.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,o.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"coalesce(expr1, expr2, ...., expr_n)"})}),"\n",(0,o.jsx)(n.p,{children:"Returns the first non empty expression in the parameter (from left to right)"}),"\n",(0,o.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"mysql> select coalesce(NULL, '1111', '0000');\n+--------------------------------+\n| coalesce(NULL, '1111', '0000') |\n+--------------------------------+\n| 1111                           |\n+--------------------------------+\n"})}),"\n",(0,o.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,o.jsx)(n.p,{children:"COALESCE"})]})}function u(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return i}});var t=s(667294);let o={},c=t.createContext(o);function i(e){let n=t.useContext(c);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);