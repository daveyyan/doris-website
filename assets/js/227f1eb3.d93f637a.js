"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["852167"],{234206:function(n,e,s){s.r(e),s.d(e,{metadata:()=>r,contentTitle:()=>i,default:()=>c,assets:()=>a,toc:()=>o,frontMatter:()=>u});var r=JSON.parse('{"id":"sql-manual/sql-functions/hash-functions/murmur-hash3-64","title":"MURMUR_HASH3_64","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-functions/hash-functions/murmur-hash3-64.md","sourceDirName":"sql-manual/sql-functions/hash-functions","slug":"/sql-manual/sql-functions/hash-functions/murmur-hash3-64","permalink":"/docs/2.0/sql-manual/sql-functions/hash-functions/murmur-hash3-64","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"MURMUR_HASH3_64","language":"en"},"sidebar":"docs","previous":{"title":"MURMUR_HASH3_32","permalink":"/docs/2.0/sql-manual/sql-functions/hash-functions/murmur-hash3-32"},"next":{"title":"HLL_CARDINALITY","permalink":"/docs/2.0/sql-manual/sql-functions/hll-functions/hll-cardinality"}}'),t=s("785893"),l=s("250065");let u={title:"MURMUR_HASH3_64",language:"en"},i=void 0,a={},o=[{value:"murmur_hash3_64",id:"murmur_hash3_64",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function h(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"murmur_hash3_64",children:"murmur_hash3_64"}),"\n",(0,t.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,t.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.code,{children:"BIGINT MURMUR_HASH3_64(VARCHAR input, ...)"})}),"\n",(0,t.jsx)(e.p,{children:"Return the 64 bits murmur3 hash of input string."}),"\n",(0,t.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"mysql> select murmur_hash3_64(null);\n+-----------------------+\n| murmur_hash3_64(NULL) |\n+-----------------------+\n|                  NULL |\n+-----------------------+\n\nmysql> select murmur_hash3_64(\"hello\");\n+--------------------------+\n| murmur_hash3_64('hello') |\n+--------------------------+\n|     -3215607508166160593 |\n+--------------------------+\n\nmysql> select murmur_hash3_64(\"hello\", \"world\");\n+-----------------------------------+\n| murmur_hash3_64('hello', 'world') |\n+-----------------------------------+\n|               3583109472027628045 |\n+-----------------------------------+\n"})}),"\n",(0,t.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"MURMUR_HASH3_64,HASH\n"})})]})}function c(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(h,{...n})}):h(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return i},a:function(){return u}});var r=s(667294);let t={},l=r.createContext(t);function u(n){let e=r.useContext(l);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:u(n.components),r.createElement(l.Provider,{value:e},n.children)}}}]);