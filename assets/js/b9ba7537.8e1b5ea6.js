"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["913402"],{92186:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>h,assets:()=>c,toc:()=>o,frontMatter:()=>a});var s=JSON.parse('{"id":"sql-manual/sql-statements/Show-Statements/SHOW-CREATE-FUNCTION","title":"SHOW-CREATE-FUNCTION","description":"\x3c!--","source":"@site/docs/sql-manual/sql-statements/Show-Statements/SHOW-CREATE-FUNCTION.md","sourceDirName":"sql-manual/sql-statements/Show-Statements","slug":"/sql-manual/sql-statements/Show-Statements/SHOW-CREATE-FUNCTION","permalink":"/docs/dev/sql-manual/sql-statements/Show-Statements/SHOW-CREATE-FUNCTION","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"SHOW-CREATE-FUNCTION","language":"en"},"sidebar":"docs","previous":{"title":"SHOW-CREATE-ROUTINE-LOAD","permalink":"/docs/dev/sql-manual/sql-statements/Show-Statements/SHOW-CREATE-ROUTINE-LOAD"},"next":{"title":"SHOW-COLUMNS","permalink":"/docs/dev/sql-manual/sql-statements/Show-Statements/SHOW-COLUMNS"}}'),l=t("785893"),i=t("250065");let a={title:"SHOW-CREATE-FUNCTION",language:"en"},r=void 0,c={},o=[{value:"SHOW-CREATE-FUNCTION",id:"show-create-function",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"show-create-function",children:"SHOW-CREATE-FUNCTION"}),"\n",(0,l.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,l.jsx)(n.p,{children:"SHOW CREATE FUNCTION"}),"\n",(0,l.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"This statement is used to display the creation statement of the user-defined function"}),"\n",(0,l.jsx)(n.p,{children:"grammar:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SHOW CREATE [GLOBAL] FUNCTION function_name(arg_type [, ...]) [FROM db_name]];\n"})}),"\n",(0,l.jsx)(n.p,{children:"illustrate:"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"global"}),": The show function is global"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"function_name"}),": The name of the function to display"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"arg_type"}),": The parameter list of the function to display"]}),"\n",(0,l.jsx)(n.li,{children:"If db_name is not specified, the current default db is used"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:'Note: the "global" keyword is only available after v2.0'})}),"\n",(0,l.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Show the creation statement of the specified function under the default db"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SHOW CREATE FUNCTION my_add(INT, INT)\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Show the creation statement of the specified global function"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SHOW CREATE GLOBAL FUNCTION my_add(INT, INT)\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"SHOW, CREATE, FUNCTION\n"})}),"\n",(0,l.jsx)(n.h3,{id:"best-practice",children:"Best Practice"})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return a}});var s=t(667294);let l={},i=s.createContext(l);function a(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);