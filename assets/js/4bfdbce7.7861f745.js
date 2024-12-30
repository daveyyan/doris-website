"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["412657"],{355676:function(n,t,i){i.r(t),i.d(t,{metadata:()=>e,contentTitle:()=>a,default:()=>l,assets:()=>m,toc:()=>c,frontMatter:()=>s});var e=JSON.parse('{"id":"sql-manual/sql-functions/bitmap-functions/bitmap-or-count","title":"BITMAP_OR_COUNT","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-functions/bitmap-functions/bitmap-or-count.md","sourceDirName":"sql-manual/sql-functions/bitmap-functions","slug":"/sql-manual/sql-functions/bitmap-functions/bitmap-or-count","permalink":"/docs/2.0/sql-manual/sql-functions/bitmap-functions/bitmap-or-count","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"BITMAP_OR_COUNT","language":"en"},"sidebar":"docs","previous":{"title":"BITMAP_XOR_COUNT","permalink":"/docs/2.0/sql-manual/sql-functions/bitmap-functions/bitmap-xor-count"},"next":{"title":"BITMAP_CONTAINS","permalink":"/docs/2.0/sql-manual/sql-functions/bitmap-functions/bitmap-contains"}}'),o=i("785893"),r=i("250065");let s={title:"BITMAP_OR_COUNT",language:"en"},a=void 0,m={},c=[{value:"bitmap_or_count",id:"bitmap_or_count",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function p(n){let t={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"bitmap_or_count",children:"bitmap_or_count"}),"\n",(0,o.jsx)(t.h3,{id:"description",children:"description"}),"\n",(0,o.jsx)(t.h4,{id:"syntax",children:"Syntax"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.code,{children:"BigIntVal bitmap_or_count(BITMAP lhs, BITMAP rhs)"})}),"\n",(0,o.jsx)(t.p,{children:"Calculates the union of two or more input bitmaps and returns the number of union sets."}),"\n",(0,o.jsx)(t.h3,{id:"example",children:"example"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"MySQL> select bitmap_or_count(bitmap_from_string('1,2,3'),bitmap_empty());\n+--------------------------------------------------------------+\n| bitmap_or_count(bitmap_from_string('1,2,3'), bitmap_empty()) |\n+--------------------------------------------------------------+\n|                                                            3 |\n+--------------------------------------------------------------+\n\n\nMySQL> select bitmap_or_count(bitmap_from_string('1,2,3'),bitmap_from_string('1,2,3'));\n+---------------------------------------------------------------------------+\n| bitmap_or_count(bitmap_from_string('1,2,3'), bitmap_from_string('1,2,3')) |\n+---------------------------------------------------------------------------+\n|                                                                         3 |\n+---------------------------------------------------------------------------+\n\nMySQL> select bitmap_or_count(bitmap_from_string('1,2,3'),bitmap_from_string('3,4,5'));\n+---------------------------------------------------------------------------+\n| bitmap_or_count(bitmap_from_string('1,2,3'), bitmap_from_string('3,4,5')) |\n+---------------------------------------------------------------------------+\n|                                                                         5 |\n+---------------------------------------------------------------------------+\n\nMySQL> select bitmap_or_count(bitmap_from_string('1,2,3'), bitmap_from_string('3,4,5'), to_bitmap(100), bitmap_empty());\n+-----------------------------------------------------------------------------------------------------------+\n| bitmap_or_count(bitmap_from_string('1,2,3'), bitmap_from_string('3,4,5'), to_bitmap(100), bitmap_empty()) |\n+-----------------------------------------------------------------------------------------------------------+\n|                                                                                                         6 |\n+-----------------------------------------------------------------------------------------------------------+\n\nMySQL> select bitmap_or_count(bitmap_from_string('1,2,3'), bitmap_from_string('3,4,5'), to_bitmap(100), NULL);\n+-------------------------------------------------------------------------------------------------+\n| bitmap_or_count(bitmap_from_string('1,2,3'), bitmap_from_string('3,4,5'), to_bitmap(100), NULL) |\n+-------------------------------------------------------------------------------------------------+\n|                                                                                            NULL |\n+-------------------------------------------------------------------------------------------------+\n"})}),"\n",(0,o.jsx)(t.h3,{id:"keywords",children:"keywords"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"BITMAP_OR_COUNT,BITMAP\n"})})]})}function l(n={}){let{wrapper:t}={...(0,r.a)(),...n.components};return t?(0,o.jsx)(t,{...n,children:(0,o.jsx)(p,{...n})}):p(n)}},250065:function(n,t,i){i.d(t,{Z:function(){return a},a:function(){return s}});var e=i(667294);let o={},r=e.createContext(o);function s(n){let t=e.useContext(r);return e.useMemo(function(){return"function"==typeof n?n(t):{...t,...n}},[t,n])}function a(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:s(n.components),e.createElement(r.Provider,{value:t},n.children)}}}]);