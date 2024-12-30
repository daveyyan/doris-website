"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["48299"],{340767:function(e,t,n){n.r(t),n.d(t,{metadata:()=>s,contentTitle:()=>r,default:()=>E,assets:()=>c,toc:()=>o,frontMatter:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-TABLE-AS-SELECT","title":"CREATE-TABLE-AS-SELECT","description":"\x3c!--","source":"@site/docs/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-TABLE-AS-SELECT.md","sourceDirName":"sql-manual/sql-statements/Data-Definition-Statements/Create","slug":"/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-TABLE-AS-SELECT","permalink":"/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-TABLE-AS-SELECT","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"CREATE-TABLE-AS-SELECT","language":"en"},"sidebar":"docs","previous":{"title":"CREATE-TABLE-LIKE","permalink":"/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-TABLE-LIKE"},"next":{"title":"CREATE-INDEX","permalink":"/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-INDEX"}}'),a=n("785893"),i=n("250065");let l={title:"CREATE-TABLE-AS-SELECT",language:"en"},r=void 0,c={},o=[{value:"CREATE-TABLE-AS-SELECT",id:"create-table-as-select",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function d(e){let t={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"create-table-as-select",children:"CREATE-TABLE-AS-SELECT"}),"\n",(0,a.jsx)(t.h3,{id:"name",children:"Name"}),"\n",(0,a.jsx)(t.p,{children:"CREATE TABLE AS SELECT"}),"\n",(0,a.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,a.jsx)(t.p,{children:"This statement creates the table structure by returning the results from the Select statement and imports the data at the same time"}),"\n",(0,a.jsx)(t.p,{children:"grammar\uFF1A"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE table_name [( column_name_list )]\n    opt_engine:engineName\n    opt_keys:keys\n    opt_comment:tableComment\n    opt_partition:partition\n    opt_distribution:distribution\n    opt_rollup:index\n    opt_properties:tblProperties\n    opt_ext_properties:extProperties\n    KW_AS query_stmt:query_def\n"})}),"\n",(0,a.jsx)(t.p,{children:"illustrate:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["The user needs to have",(0,a.jsx)(t.code,{children:"SELECT"}),"permission for the source table and",(0,a.jsx)(t.code,{children:"CREATE"}),"permission for the target database"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"After a table is created, data is imported. If the import fails, the table is deleted"}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["You can specify the key type. The default key type is ",(0,a.jsx)(t.code,{children:"Duplicate Key"})]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:'All columns of type string (varchar/var/string) are created as type "string".'}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"If the created source is an external table and the first column is of type String, the first column is automatically set to VARCHAR(65533). Because of Doris internal table, String column is not allowed as first column."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Using the field names in the SELECT statement"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:'create table `test`.`select_varchar` \nPROPERTIES("replication_num" = "1") \nas select * from `test`.`varchar_table`\n'})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Custom field names (need to match the number of fields returned)"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:'create table `test`.`select_name`(user, testname, userstatus) \nPROPERTIES("replication_num" = "1") \nas select vt.userId, vt.username, jt.status \nfrom `test`.`varchar_table` vt join \n`test`.`join_table` jt on vt.userId=jt.userId\n'})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Specify table model, partitions, and buckets"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:'CREATE TABLE t_user(dt, id, name)\nENGINE=OLAP\nUNIQUE KEY(dt, id)\nCOMMENT "OLAP"\nPARTITION BY RANGE(dt)\n(\n   FROM ("2020-01-01") TO ("2021-12-31") INTERVAL 1 YEAR\n)\nDISTRIBUTED BY HASH(id) BUCKETS 1\nPROPERTIES("replication_num"="1")\nAS SELECT cast(\'2020-05-20\' as date) as dt, 1 as id, \'Tom\' as name;\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"keywords",children:"Keywords"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"CREATE, TABLE, AS, SELECT\n"})}),"\n",(0,a.jsx)(t.h3,{id:"best-practice",children:"Best Practice"})]})}function E(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return l}});var s=n(667294);let a={},i=s.createContext(a);function l(e){let t=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);