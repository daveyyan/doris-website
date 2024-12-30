"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["913117"],{835478:function(n,e,t){t.r(e),t.d(e,{metadata:()=>s,contentTitle:()=>c,default:()=>u,assets:()=>a,toc:()=>o,frontMatter:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-functions/string-functions/char-length","title":"CHAR_LENGTH","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/string-functions/char-length.md","sourceDirName":"sql-manual/sql-functions/string-functions","slug":"/sql-manual/sql-functions/string-functions/char-length","permalink":"/docs/3.0/sql-manual/sql-functions/string-functions/char-length","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"CHAR_LENGTH","language":"en"},"sidebar":"docs","previous":{"title":"BIT_LENGTH","permalink":"/docs/3.0/sql-manual/sql-functions/string-functions/bit-length"},"next":{"title":"LPAD","permalink":"/docs/3.0/sql-manual/sql-functions/string-functions/lpad"}}'),r=t("785893"),l=t("250065");let i={title:"CHAR_LENGTH",language:"en"},c=void 0,a={},o=[{value:"char_length",id:"char_length",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function h(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"char_length",children:"char_length"}),"\n",(0,r.jsx)(e.h3,{id:"description",children:"Description"}),"\n",(0,r.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(e.p,{children:"INT char_length(VARCHAR str)"}),"\n",(0,r.jsxs)(e.p,{children:["Returns the length of the string, and the number of characters returned for multi-byte characters. For example, five two-byte width words return a length of 5, only utf8 encoding is support at the current version. ",(0,r.jsx)(e.code,{children:"character_length"})," is the alias for this function."]}),"\n",(0,r.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"mysql> select char_length(\"abc\");\n+--------------------+\n| char_length('abc') |\n+--------------------+\n|                  3 |\n+--------------------+\n\nmysql> select char_length(\"\u4E2D\u56FD\");\n+------------------- ---+\n| char_length('\u4E2D\u56FD')   |\n+-----------------------+\n|                     2 |\n+-----------------------+\n"})}),"\n",(0,r.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"CHAR_LENGTH, CHARACTER_LENGTH\n"})})]})}function u(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(h,{...n})}):h(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return c},a:function(){return i}});var s=t(667294);let r={},l=s.createContext(r);function i(n){let e=s.useContext(l);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);