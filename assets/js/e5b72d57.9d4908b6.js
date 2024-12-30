"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["61171"],{642801:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>o,default:()=>u,assets:()=>r,toc:()=>c,frontMatter:()=>l});var i=JSON.parse('{"id":"sql-manual/sql-functions/bitmap-functions/bitmap-hash64","title":"BITMAP_HASH64","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/bitmap-functions/bitmap-hash64.md","sourceDirName":"sql-manual/sql-functions/bitmap-functions","slug":"/sql-manual/sql-functions/bitmap-functions/bitmap-hash64","permalink":"/docs/3.0/sql-manual/sql-functions/bitmap-functions/bitmap-hash64","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"BITMAP_HASH64","language":"en"},"sidebar":"docs","previous":{"title":"BITMAP_INTERSECT","permalink":"/docs/3.0/sql-manual/sql-functions/bitmap-functions/bitmap-intersect"},"next":{"title":"BITMAP_FROM_BASE64","permalink":"/docs/3.0/sql-manual/sql-functions/bitmap-functions/bitmap-from-base64"}}'),s=t("785893"),a=t("250065");let l={title:"BITMAP_HASH64",language:"en"},o=void 0,r={},c=[{value:"bitmap_hash64",id:"bitmap_hash64",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"bitmap_hash64",children:"bitmap_hash64"}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,s.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"BITMAP BITMAP_HASH64(expr)"})}),"\n",(0,s.jsx)(n.p,{children:"Compute the 64-bits hash value of a expr of any type, then return a bitmap containing that hash value. Mainly be used to load non-integer value into bitmap column, e.g.,"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'cat data | curl --location-trusted -u user:passwd -T - -H "columns: dt,page,device_id, device_id=bitmap_hash64(device_id)"   http://host:8410/api/test/testDb/_stream_load\n'})}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"mysql> select bitmap_to_string(bitmap_hash64('hello'));\n+------------------------------------------+\n| bitmap_to_string(bitmap_hash64('hello')) |\n+------------------------------------------+\n| 15231136565543391023                     |\n+------------------------------------------+\n"})}),"\n",(0,s.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"BITMAP_HASH,BITMAP\n"})})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return l}});var i=t(667294);let s={},a=i.createContext(s);function l(e){let n=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);