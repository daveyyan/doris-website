"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["532617"],{90441:function(n,e,t){t.r(e),t.d(e,{metadata:()=>i,contentTitle:()=>o,default:()=>m,assets:()=>r,toc:()=>c,frontMatter:()=>l});var i=JSON.parse('{"id":"sql-manual/sql-functions/bitmap-functions/bitmap-max","title":"BITMAP_MAX","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-functions/bitmap-functions/bitmap-max.md","sourceDirName":"sql-manual/sql-functions/bitmap-functions","slug":"/sql-manual/sql-functions/bitmap-functions/bitmap-max","permalink":"/docs/2.0/sql-manual/sql-functions/bitmap-functions/bitmap-max","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"BITMAP_MAX","language":"en"},"sidebar":"docs","previous":{"title":"BITMAP_HAS_ANY","permalink":"/docs/2.0/sql-manual/sql-functions/bitmap-functions/bitmap-has-any"},"next":{"title":"BITMAP_MIN","permalink":"/docs/2.0/sql-manual/sql-functions/bitmap-functions/bitmap-min"}}'),a=t("785893"),s=t("250065");let l={title:"BITMAP_MAX",language:"en"},o=void 0,r={},c=[{value:"bitmap_max",id:"bitmap_max",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"bitmap_max",children:"bitmap_max"}),"\n",(0,a.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,a.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.code,{children:"BIGINT BITMAP_MAX(BITMAP input)"})}),"\n",(0,a.jsx)(e.p,{children:"Calculate and return the max values of a bitmap."}),"\n",(0,a.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"mysql> select bitmap_max(bitmap_from_string('')) value;\n+-------+\n| value |\n+-------+\n|  NULL |\n+-------+\n\nmysql> select bitmap_max(bitmap_from_string('1,9999999999')) value;\n+------------+\n| value      |\n+------------+\n| 9999999999 |\n+------------+\n"})}),"\n",(0,a.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"BITMAP_MAX,BITMAP\n"})})]})}function m(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(u,{...n})}):u(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return o},a:function(){return l}});var i=t(667294);let a={},s=i.createContext(a);function l(n){let e=i.useContext(s);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:l(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);