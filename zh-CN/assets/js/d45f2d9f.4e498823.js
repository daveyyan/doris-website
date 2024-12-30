"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["957195"],{319181:function(e,n,i){i.r(n),i.d(n,{metadata:()=>t,contentTitle:()=>r,default:()=>d,assets:()=>c,toc:()=>u,frontMatter:()=>l});var t=JSON.parse('{"id":"sql-manual/sql-functions/numeric-functions/positive","title":"POSITIVE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/numeric-functions/positive.md","sourceDirName":"sql-manual/sql-functions/numeric-functions","slug":"/sql-manual/sql-functions/numeric-functions/positive","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/numeric-functions/positive","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"POSITIVE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SIGN","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/numeric-functions/sign"},"next":{"title":"NEGATIVE","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/numeric-functions/negative"}}'),s=i("785893"),o=i("250065");let l={title:"POSITIVE",language:"zh-CN"},r=void 0,c={},u=[{value:"positive",id:"positive",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function a(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"positive",children:"positive"}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,s.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"BIGINT positive(BIGINT x)\nDOUBLE positive(DOUBLE x)\nDECIMAL positive(DECIMAL x)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u8FD4\u56DE",(0,s.jsx)(n.code,{children:"x"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"mysql> SELECT positive(-10);\n+---------------+\n| positive(-10) |\n+---------------+\n|           -10 |\n+---------------+\nmysql> SELECT positive(12);\n+--------------+\n| positive(12) |\n+--------------+\n|           12 |\n+--------------+\n"})}),"\n",(0,s.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"POSITIVE\n"})})]})}function d(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return r},a:function(){return l}});var t=i(667294);let s={},o=t.createContext(s);function l(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);