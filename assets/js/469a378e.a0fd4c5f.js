"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["297211"],{934073:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>a,default:()=>u,assets:()=>o,toc:()=>c,frontMatter:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-functions/string-functions/regexp/regexp","title":"REGEXP","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/string-functions/regexp/regexp.md","sourceDirName":"sql-manual/sql-functions/string-functions/regexp","slug":"/sql-manual/sql-functions/string-functions/regexp/","permalink":"/docs/sql-manual/sql-functions/string-functions/regexp/","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"REGEXP","language":"en"},"sidebar":"docs","previous":{"title":"NOT LIKE","permalink":"/docs/sql-manual/sql-functions/string-functions/like/not-like"},"next":{"title":"REGEXP_EXTRACT","permalink":"/docs/sql-manual/sql-functions/string-functions/regexp/regexp-extract"}}'),i=t("785893"),r=t("250065");let l={title:"REGEXP",language:"en"},a=void 0,o={},c=[{value:"regexp",id:"regexp",level:2},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"regexp",children:"regexp"}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,i.jsx)(n.h4,{id:"syntax",children:"syntax"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"BOOLEAN regexp(VARCHAR str, VARCHAR pattern)"})}),"\n",(0,i.jsx)(n.p,{children:"Perform regular matching on the string str, return true if it matches, and return false if it doesn't match. pattern is a regular expression."}),"\n",(0,i.jsxs)(n.p,{children:["Character set matching requires the use of Unicode standard character classes. For example, to match Chinese, use ",(0,i.jsx)(n.code,{children:"\\p{Han}"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"--- Find all data starting with 'billie' in the k1 field\nmysql> select k1 from test where k1 regexp '^billie';\n+--------------------+\n| k1                 |\n+--------------------+\n| billie eillish     |\n+--------------------+\n\n--- Find all data ending with 'ok' in the k1 field:\nmysql> select k1 from test where k1 regexp 'ok$';\n+----------+\n| k1       |\n+----------+\n| It's ok  |\n+----------+\n\nmysql> select regexp('\u8FD9\u662F\u4E00\u6BB5\u4E2D\u6587This is a passage in English 1234567', '\\\\p{Han}');\n+-----------------------------------------------------------------------------+\n| ('\u8FD9\u662F\u4E00\u6BB5\u4E2D\u6587This is a passage in English 1234567' regexp '\\p{Han}')       |\n+-----------------------------------------------------------------------------+\n|                                                                           1 |\n+-----------------------------------------------------------------------------+\n"})}),"\n",(0,i.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"REGEXP\n"})})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return l}});var s=t(667294);let i={},r=s.createContext(i);function l(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);