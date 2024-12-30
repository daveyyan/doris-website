"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["40463"],{468045:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>o,default:()=>u,assets:()=>c,toc:()=>r,frontMatter:()=>l});var t=JSON.parse('{"id":"sql-manual/sql-functions/map-functions/map-keys","title":"MAP_KEYS","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/map-functions/map-keys.md","sourceDirName":"sql-manual/sql-functions/map-functions","slug":"/sql-manual/sql-functions/map-functions/map-keys","permalink":"/docs/sql-manual/sql-functions/map-functions/map-keys","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"MAP_KEYS","language":"en"},"sidebar":"docs","previous":{"title":"MAP","permalink":"/docs/sql-manual/sql-functions/map-functions/map"},"next":{"title":"MAP_VALUES","permalink":"/docs/sql-manual/sql-functions/map-functions/map-values"}}'),a=s("785893"),i=s("250065");let l={title:"MAP_KEYS",language:"en"},o=void 0,c={},r=[{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}];function p(e){let n={code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"ARRAY<K> map_keys(Map<K, V> map)"})}),"\n",(0,a.jsxs)(n.p,{children:["Extracts the keys of a given ",(0,a.jsx)(n.code,{children:"map"})," into an ",(0,a.jsx)(n.code,{children:"ARRAY"})," of the corresponding type."]}),"\n",(0,a.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"mysql> select map_keys(map(1, \"100\", 0.1, 2));\n+-------------------------------------------------------------------------------------------------+\n| map_keys(map(cast(1 as DECIMALV3(2, 1)), '100', cast(0.1 as DECIMALV3(2, 1)), cast(2 as TEXT))) |\n+-------------------------------------------------------------------------------------------------+\n| [1.0, 0.1]                                                                                      |\n+-------------------------------------------------------------------------------------------------+\n1 row in set (0.15 sec)\n\nmysql> select map_keys(map());\n+-----------------+\n| map_keys(map()) |\n+-----------------+\n| []              |\n+-----------------+\n1 row in set (0.12 sec)\n"})}),"\n",(0,a.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,a.jsx)(n.p,{children:"MAP, KEYS, MAP_KEYS"})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return l}});var t=s(667294);let a={},i=t.createContext(a);function l(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);