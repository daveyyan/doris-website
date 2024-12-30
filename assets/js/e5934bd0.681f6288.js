"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["362619"],{313523:function(e,n,t){t.r(n),t.d(n,{metadata:()=>l,contentTitle:()=>a,default:()=>p,assets:()=>o,toc:()=>c,frontMatter:()=>i});var l=JSON.parse('{"id":"sql-manual/sql-reference/Show-Statements/SHOW-POLICY","title":"SHOW-POLICY","description":"\x3c!--","source":"@site/versioned_docs/version-1.2/sql-manual/sql-reference/Show-Statements/SHOW-POLICY.md","sourceDirName":"sql-manual/sql-reference/Show-Statements","slug":"/sql-manual/sql-reference/Show-Statements/SHOW-POLICY","permalink":"/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-POLICY","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"SHOW-POLICY","language":"en"},"sidebar":"docs","previous":{"title":"SHOW-SMALL-FILES","permalink":"/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-SMALL-FILES"},"next":{"title":"SHOW-CATALOG-RECYCLE-BIN","permalink":"/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-CATALOG-RECYCLE-BIN"}}'),s=t("785893"),r=t("250065");let i={title:"SHOW-POLICY",language:"en"},a=void 0,o={},c=[{value:"SHOW-POLICY",id:"show-policy",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"show-policy",children:"SHOW-POLICY"}),"\n",(0,s.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,s.jsx)(n.p,{children:"SHOW ROW POLICY"}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"View the row security policy under the current DB"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SHOW ROW POLICY [FOR user]\n"})}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"view all security policies."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"mysql> SHOW ROW POLICY;\n+-------------------+----------------------+-----------+------+-------------+-------------------+------+-------------------------------------------------------------------------------------------------------------------------------------------+\n| PolicyName        | DbName               | TableName | Type | FilterType  | WherePredicate    | User | OriginStmt                                                                                                                                |\n+-------------------+----------------------+-----------+------+-------------+-------------------+------+-------------------------------------------------------------------------------------------------------------------------------------------+\n| test_row_policy_1 | default_cluster:test | table1    | ROW  | RESTRICTIVE | `id` IN (1, 2)    | root | /* ApplicationName=DataGrip 2021.3.4 */ CREATE ROW POLICY test_row_policy_1 ON test.table1 AS RESTRICTIVE TO root USING (id in (1, 2));\n|\n| test_row_policy_2 | default_cluster:test | table1    | ROW  | RESTRICTIVE | `col1` = 'col1_1' | root | /* ApplicationName=DataGrip 2021.3.4 */ CREATE ROW POLICY test_row_policy_2 ON test.table1 AS RESTRICTIVE TO root USING (col1='col1_1');\n|\n+-------------------+----------------------+-----------+------+-------------+-------------------+------+-------------------------------------------------------------------------------------------------------------------------------------------+\n2 rows in set (0.00 sec)\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"specify user name query"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"mysql> SHOW ROW POLICY FOR test;\n+-------------------+----------------------+-----------+------+------------+-------------------+----------------------+------------------------------------------------------------------------------------------------------------------------------------------+\n| PolicyName        | DbName               | TableName | Type | FilterType | WherePredicate    | User                 | OriginStmt                                                                                                                               |\n+-------------------+----------------------+-----------+------+------------+-------------------+----------------------+------------------------------------------------------------------------------------------------------------------------------------------+\n| test_row_policy_3 | default_cluster:test | table1    | ROW  | PERMISSIVE | `col1` = 'col1_2' | default_cluster:test | /* ApplicationName=DataGrip 2021.3.4 */ CREATE ROW POLICY test_row_policy_3 ON test.table1 AS PERMISSIVE TO test USING (col1='col1_2');\n|\n+-------------------+----------------------+-----------+------+------------+-------------------+----------------------+------------------------------------------------------------------------------------------------------------------------------------------+\n1 row in set (0.01 sec)\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"demonstrate data migration strategies"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'mysql> SHOW STORAGE POLICY;\n+---------------------+---------+-----------------------+---------------------+-------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| PolicyName          | Type    | StorageResource       | CooldownDatetime    | CooldownTtl | properties                                                                                                                                                                                                                                                                                                          |\n+---------------------+---------+-----------------------+---------------------+-------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| showPolicy_1_policy | STORAGE | showPolicy_1_resource | 2022-06-08 00:00:00 | -1          | {\n"AWS_SECRET_KEY": "******",\n"AWS_REGION": "bj",\n"AWS_ACCESS_KEY": "bbba",\n"AWS_MAX_CONNECTIONS": "50",\n"AWS_CONNECTION_TIMEOUT_MS": "1000",\n"type": "s3",\n"AWS_ROOT_PATH": "path/to/rootaaaa",\n"AWS_BUCKET": "test-bucket",\n"AWS_ENDPOINT": "bj.s3.comaaaa",\n"AWS_REQUEST_TIMEOUT_MS": "3000"\n} |\n+---------------------+---------+-----------------------+---------------------+-------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n1 row in set (0.00 sec)\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"SHOW, POLICY\n"})}),"\n",(0,s.jsx)(n.h3,{id:"best-practice",children:"Best Practice"})]})}function p(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return i}});var l=t(667294);let s={},r=l.createContext(s);function i(e){let n=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);