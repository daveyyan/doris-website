"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["999457"],{992859:function(n,e,t){t.r(e),t.d(e,{metadata:()=>s,contentTitle:()=>a,default:()=>d,assets:()=>o,toc:()=>c,frontMatter:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-functions/string-functions/fuzzy-match/not-like","title":"NOT LIKE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/string-functions/fuzzy-match/not-like.md","sourceDirName":"sql-manual/sql-functions/string-functions/fuzzy-match","slug":"/sql-manual/sql-functions/string-functions/fuzzy-match/not-like","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/string-functions/fuzzy-match/not-like","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"NOT LIKE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"LIKE","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/string-functions/fuzzy-match/like"},"next":{"title":"REGEXP","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/string-functions/regexp/"}}'),i=t("785893"),l=t("250065");let r={title:"NOT LIKE",language:"zh-CN"},a=void 0,o={},c=[{value:"not like",id:"not-like",level:2},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"not-like",children:"not like"}),"\n",(0,i.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,i.jsx)(e.h4,{id:"syntax",children:"syntax"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.code,{children:"BOOLEAN not like(VARCHAR str, VARCHAR pattern)"})}),"\n",(0,i.jsx)(e.p,{children:"\u5BF9\u5B57\u7B26\u4E32 str \u8FDB\u884C\u6A21\u7CCA\u5339\u914D\uFF0C\u5339\u914D\u4E0A\u7684\u5219\u8FD4\u56DE false\uFF0C\u6CA1\u5339\u914D\u4E0A\u5219\u8FD4\u56DE true\u3002"}),"\n",(0,i.jsx)(e.p,{children:"like \u5339\u914D/\u6A21\u7CCA\u5339\u914D\uFF0C\u4F1A\u4E0E % \u548C _ \u7ED3\u5408\u4F7F\u7528\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u767E\u5206\u53F7 '%' \u4EE3\u8868\u96F6\u4E2A\u3001\u4E00\u4E2A\u6216\u591A\u4E2A\u5B57\u7B26\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u4E0B\u5212\u7EBF '_' \u4EE3\u8868\u5355\u4E2A\u5B57\u7B26\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"'a'      // \u7CBE\u51C6\u5339\u914D\uFF0C\u548C `=` \u6548\u679C\u4E00\u81F4\n'%a'     // \u4EE5a\u7ED3\u5C3E\u7684\u6570\u636E\n'a%'     // \u4EE5a\u5F00\u5934\u7684\u6570\u636E\n'%a%'    // \u542B\u6709a\u7684\u6570\u636E\n'_a_'    // \u4E09\u4F4D\u4E14\u4E2D\u95F4\u5B57\u6BCD\u662F a \u7684\u6570\u636E\n'_a'     // \u4E24\u4F4D\u4E14\u7ED3\u5C3E\u5B57\u6BCD\u662F a \u7684\u6570\u636E\n'a_'     // \u4E24\u4F4D\u4E14\u5F00\u5934\u5B57\u6BCD\u662F a \u7684\u6570\u636E\n'a__b'  // \u56DB\u4F4D\u4E14\u4EE5\u5B57\u7B26a\u5F00\u5934\u3001b\u7ED3\u5C3E\u7684\u6570\u636E\n"})}),"\n",(0,i.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"// table test\n+-------+\n| k1    |\n+-------+\n| b     |\n| bb    |\n| bab   |\n| a     |\n+-------+\n\n// \u8FD4\u56DE k1 \u5B57\u7B26\u4E32\u4E2D\u4E0D\u5305\u542B a \u7684\u6570\u636E\nmysql > select k1 from test where k1 not like '%a%';\n+-------+\n| k1    |\n+-------+\n| b     |\n| bb    |\n+-------+\n\n// \u8FD4\u56DE k1 \u5B57\u7B26\u4E32\u4E2D\u4E0D\u7B49\u4E8E a \u7684\u6570\u636E\nmysql > select k1 from test where k1 not like 'a';\n+-------+\n| k1    |\n+-------+\n| b     |\n| bb    |\n| bab   |\n+-------+\n"})}),"\n",(0,i.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"LIKE, NOT, NOT LIKE\n"})})]})}function d(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return a},a:function(){return r}});var s=t(667294);let i={},l=s.createContext(i);function r(n){let e=s.useContext(l);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);