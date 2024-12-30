"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["496285"],{611574:function(n,t,e){e.r(t),e.d(t,{metadata:()=>s,contentTitle:()=>a,default:()=>d,assets:()=>o,toc:()=>p,frontMatter:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-functions/string-functions/split-part","title":"SPLIT_PART","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-functions/string-functions/split-part.md","sourceDirName":"sql-manual/sql-functions/string-functions","slug":"/sql-manual/sql-functions/string-functions/split-part","permalink":"/docs/2.0/sql-manual/sql-functions/string-functions/split-part","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"SPLIT_PART","language":"en"},"sidebar":"docs","previous":{"title":"STRRIGHT","permalink":"/docs/2.0/sql-manual/sql-functions/string-functions/strright"},"next":{"title":"SPLIT_BY_STRING","permalink":"/docs/2.0/sql-manual/sql-functions/string-functions/split-by-string"}}'),i=e("785893"),l=e("250065");let r={title:"SPLIT_PART",language:"en"},a=void 0,o={},p=[{value:"split_part",id:"split_part",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function c(n){let t={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"split_part",children:"split_part"}),"\n",(0,i.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"VARCHAR split_part(VARCHAR content, VARCHAR delimiter, INT field)"})}),"\n",(0,i.jsx)(t.p,{children:"Returns the specified partition by splitting the string according to the delimiter. If field is positive, splitting and counting from the beginning of content, otherwise from the ending."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"delimiter"})," and ",(0,i.jsx)(t.code,{children:"field"})," parameter should be constant."]}),"\n",(0,i.jsx)(t.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"mysql> select split_part(\"hello world\", \" \", 1);\n+----------------------------------+\n| split_part('hello world', ' ', 1) |\n+----------------------------------+\n| hello                            |\n+----------------------------------+\n\n\nmysql> select split_part(\"hello world\", \" \", 2);\n+----------------------------------+\n| split_part('hello world', ' ', 2) |\n+----------------------------------+\n| world                             |\n+----------------------------------+\n\nmysql> select split_part(\"2019\u5E747\u67088\u53F7\", \"\u6708\", 1);\n+-----------------------------------------+\n| split_part('2019\u5E747\u67088\u53F7', '\u6708', 1)     |\n+-----------------------------------------+\n| 2019\u5E747                                 |\n+-----------------------------------------+\n\nmysql> select split_part(\"abca\", \"a\", 1);\n+----------------------------+\n| split_part('abca', 'a', 1) |\n+----------------------------+\n|                            |\n+----------------------------+\n\nmysql> select split_part(\"prefix_string\", \"_\", -1);\n+--------------------------------------+\n| split_part('prefix_string', '_', -1) |\n+--------------------------------------+\n| string                               |\n+--------------------------------------+\n\n\nmysql> select split_part(\"prefix_string\", \"_\", -2);\n+--------------------------------------+\n| split_part('prefix_string', '_', -2) |\n+--------------------------------------+\n| prefix                               |\n+--------------------------------------+\n\nmysql> select split_part(\"abc##123###234\", \"##\", -1);\n+----------------------------------------+\n| split_part('abc##123###234', '##', -1) |\n+----------------------------------------+\n| 234                                    |\n+----------------------------------------+\n\nmysql> select split_part(\"abc##123###234\", \"##\", -2);\n+----------------------------------------+\n| split_part('abc##123###234', '##', -2) |\n+----------------------------------------+\n| 123#                                   |\n+----------------------------------------+\n"})}),"\n",(0,i.jsx)(t.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"SPLIT_PART,SPLIT,PART\n"})})]})}function d(n={}){let{wrapper:t}={...(0,l.a)(),...n.components};return t?(0,i.jsx)(t,{...n,children:(0,i.jsx)(c,{...n})}):c(n)}},250065:function(n,t,e){e.d(t,{Z:function(){return a},a:function(){return r}});var s=e(667294);let i={},l=s.createContext(i);function r(n){let t=s.useContext(l);return s.useMemo(function(){return"function"==typeof n?n(t):{...t,...n}},[t,n])}function a(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),s.createElement(l.Provider,{value:t},n.children)}}}]);