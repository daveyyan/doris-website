"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["940101"],{365118:function(e,n,a){a.r(n),a.d(n,{metadata:()=>r,contentTitle:()=>i,default:()=>p,assets:()=>l,toc:()=>c,frontMatter:()=>o});var r=JSON.parse('{"id":"sql-manual/sql-functions/array-functions/array-popback","title":"ARRAY_POPBACK","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/array-functions/array-popback.md","sourceDirName":"sql-manual/sql-functions/array-functions","slug":"/sql-manual/sql-functions/array-functions/array-popback","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/array-functions/array-popback","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"ARRAY_POPBACK","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ARRAY_ENUMERATE_UNIQ","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/array-functions/array-enumerate-uniq"},"next":{"title":"ARRAY_POPFRONT","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/array-functions/array-popfront"}}'),t=a("785893"),s=a("250065");let o={title:"ARRAY_POPBACK",language:"zh-CN"},i=void 0,l={},c=[{value:"array_popback",id:"array_popback",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"array_popback",children:"array_popback"}),"\n",(0,t.jsx)(n.p,{children:"array_popback"}),"\n",(0,t.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,t.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"ARRAY<T> array_popback(ARRAY<T> arr)"})}),"\n",(0,t.jsx)(n.p,{children:"\u8FD4\u56DE\u79FB\u9664\u6700\u540E\u4E00\u4E2A\u5143\u7D20\u540E\u7684\u6570\u7EC4\uFF0C\u5982\u679C\u8F93\u5165\u53C2\u6570\u4E3ANULL\uFF0C\u5219\u8FD4\u56DENULL"}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"mysql> select array_popback(['test', NULL, 'value']);\n+-----------------------------------------------------+\n| array_popback(ARRAY('test', NULL, 'value'))         |\n+-----------------------------------------------------+\n| [test, NULL]                                        |\n+-----------------------------------------------------+\n"})}),"\n",(0,t.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,t.jsx)(n.p,{children:"ARRAY,POPBACK,ARRAY_POPBACK"})]})}function p(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return i},a:function(){return o}});var r=a(667294);let t={},s=r.createContext(t);function o(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);