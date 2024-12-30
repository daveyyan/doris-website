"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["930867"],{152202:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>h,default:()=>u,assets:()=>o,toc:()=>r,frontMatter:()=>a});var t=JSON.parse('{"id":"sql-manual/sql-functions/hash-functions/xxhash-32","title":"XXHASH_32","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/hash-functions/xxhash-32.md","sourceDirName":"sql-manual/sql-functions/hash-functions","slug":"/sql-manual/sql-functions/hash-functions/xxhash-32","permalink":"/docs/dev/sql-manual/sql-functions/hash-functions/xxhash-32","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"XXHASH_32","language":"en"},"sidebar":"docs","previous":{"title":"MURMUR_HASH3_64","permalink":"/docs/dev/sql-manual/sql-functions/hash-functions/murmur-hash3-64"},"next":{"title":"XXHASH_64","permalink":"/docs/dev/sql-manual/sql-functions/hash-functions/xxhash-64"}}'),l=s("785893"),i=s("250065");let a={title:"XXHASH_32",language:"en"},h=void 0,o={},r=[{value:"xxhash_32",id:"xxhash_32",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function c(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"xxhash_32",children:"xxhash_32"}),"\n",(0,l.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,l.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"INT XXHASH_32(VARCHAR input, ...)"})}),"\n",(0,l.jsx)(n.p,{children:"Return the 32 bits xxhash of input string."}),"\n",(0,l.jsxs)(n.p,{children:["Note: When calculating hash values, it is more recommended to use ",(0,l.jsx)(n.code,{children:"xxhash_32"})," instead of ",(0,l.jsx)(n.code,{children:"murmur_hash3_32"}),"."]}),"\n",(0,l.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"mysql> select xxhash_32(NULL);\n+-----------------+\n| xxhash_32(NULL) |\n+-----------------+\n|            NULL |\n+-----------------+\n\nmysql> select xxhash_32(\"hello\");\n+--------------------+\n| xxhash_32('hello') |\n+--------------------+\n|          -83855367 |\n+--------------------+\n\nmysql> select xxhash_32(\"hello\", \"world\");\n+-----------------------------+\n| xxhash_32('hello', 'world') |\n+-----------------------------+\n|                  -920844969 |\n+-----------------------------+\n"})}),"\n",(0,l.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,l.jsx)(n.p,{children:"XXHASH_32,HASH"})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return h},a:function(){return a}});var t=s(667294);let l={},i=t.createContext(l);function a(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function h(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);