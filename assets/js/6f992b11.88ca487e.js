"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["675753"],{571523:function(t,n,e){e.r(n),e.d(n,{metadata:()=>i,contentTitle:()=>r,default:()=>m,assets:()=>l,toc:()=>p,frontMatter:()=>o});var i=JSON.parse('{"id":"sql-manual/sql-functions/bitmap-functions/bitmap-to-string","title":"BITMAP_TO_STRING","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/bitmap-functions/bitmap-to-string.md","sourceDirName":"sql-manual/sql-functions/bitmap-functions","slug":"/sql-manual/sql-functions/bitmap-functions/bitmap-to-string","permalink":"/docs/sql-manual/sql-functions/bitmap-functions/bitmap-to-string","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"BITMAP_TO_STRING","language":"en"},"sidebar":"docs","previous":{"title":"BITMAP_FROM_STRING","permalink":"/docs/sql-manual/sql-functions/bitmap-functions/bitmap-from-string"},"next":{"title":"BITMAP_TO_ARRAY","permalink":"/docs/sql-manual/sql-functions/bitmap-functions/bitmap-to-array"}}'),s=e("785893"),a=e("250065");let o={title:"BITMAP_TO_STRING",language:"en"},r=void 0,l={},p=[{value:"bitmap_to_string",id:"bitmap_to_string",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function c(t){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"bitmap_to_string",children:"bitmap_to_string"}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,s.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"VARCHAR BITMAP_TO_STRING(BITMAP input)"})}),"\n",(0,s.jsx)(n.p,{children:"Convert a input BITMAP to a string. The string is a separated string, contains all set bits in Bitmap.\nIf input is null, return null."}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"mysql> select bitmap_to_string(null);\n+------------------------+\n| bitmap_to_string(NULL) |\n+------------------------+\n| NULL                   |\n+------------------------+\n\nmysql> select bitmap_to_string(bitmap_empty());\n+----------------------------------+\n| bitmap_to_string(bitmap_empty()) |\n+----------------------------------+\n|                                  |\n+----------------------------------+\n\nmysql> select bitmap_to_string(to_bitmap(1));\n+--------------------------------+\n| bitmap_to_string(to_bitmap(1)) |\n+--------------------------------+\n|  1                             |\n+--------------------------------+\n\nmysql> select bitmap_to_string(bitmap_or(to_bitmap(1), to_bitmap(2)));\n+---------------------------------------------------------+\n| bitmap_to_string(bitmap_or(to_bitmap(1), to_bitmap(2))) |\n+---------------------------------------------------------+\n|  1,2                                                    |\n+---------------------------------------------------------+\n\n"})}),"\n",(0,s.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"BITMAP_TO_STRING,BITMAP\n"})})]})}function m(t={}){let{wrapper:n}={...(0,a.a)(),...t.components};return n?(0,s.jsx)(n,{...t,children:(0,s.jsx)(c,{...t})}):c(t)}},250065:function(t,n,e){e.d(n,{Z:function(){return r},a:function(){return o}});var i=e(667294);let s={},a=i.createContext(s);function o(t){let n=i.useContext(a);return i.useMemo(function(){return"function"==typeof t?t(n):{...n,...t}},[n,t])}function r(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:o(t.components),i.createElement(a.Provider,{value:n},t.children)}}}]);