"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["381873"],{561604:function(n,e,t){t.r(e),t.d(e,{metadata:()=>s,contentTitle:()=>c,default:()=>u,assets:()=>a,toc:()=>o,frontMatter:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-functions/string-functions/char-length","title":"CHAR_LENGTH","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/string-functions/char-length.md","sourceDirName":"sql-manual/sql-functions/string-functions","slug":"/sql-manual/sql-functions/string-functions/char-length","permalink":"/zh-CN/docs/sql-manual/sql-functions/string-functions/char-length","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"CHAR_LENGTH","language":"zh-CN"},"sidebar":"docs","previous":{"title":"BIT_LENGTH","permalink":"/zh-CN/docs/sql-manual/sql-functions/string-functions/bit-length"},"next":{"title":"LPAD","permalink":"/zh-CN/docs/sql-manual/sql-functions/string-functions/lpad"}}'),l=t("785893"),r=t("250065");let i={title:"CHAR_LENGTH",language:"zh-CN"},c=void 0,a={},o=[{value:"char_length",id:"char_length",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function h(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"char_length",children:"char_length"}),"\n",(0,l.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,l.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.code,{children:"INT char_length(VARCHAR str)"})}),"\n",(0,l.jsxs)(e.p,{children:["\u8FD4\u56DE\u5B57\u7B26\u4E32\u7684\u957F\u5EA6\uFF0C\u5BF9\u4E8E\u591A\u5B57\u8282\u5B57\u7B26\uFF0C\u8FD4\u56DE\u5B57\u7B26\u6570, \u76EE\u524D\u4EC5\u652F\u6301utf8 \u7F16\u7801\u3002\u8FD9\u4E2A\u51FD\u6570\u8FD8\u6709\u4E00\u4E2A\u522B\u540D ",(0,l.jsx)(e.code,{children:"character_length"}),"\u3002"]}),"\n",(0,l.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"mysql> select char_length(\"abc\");\n+--------------------+\n| char_length('abc') |\n+--------------------+\n|                  3 |\n+--------------------+\n\nmysql> select char_length(\"\u4E2D\u56FD\");\n+------------------- ---+\n| char_length('\u4E2D\u56FD')   |\n+-----------------------+\n|                     2 |\n+-----------------------+\n"})}),"\n",(0,l.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"CHAR_LENGTH, CHARACTER_LENGTH\n"})})]})}function u(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(h,{...n})}):h(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return c},a:function(){return i}});var s=t(667294);let l={},r=s.createContext(l);function i(n){let e=s.useContext(r);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:i(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);