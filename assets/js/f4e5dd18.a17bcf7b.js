"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["540765"],{989337:function(e,n,l){l.r(n),l.d(n,{metadata:()=>s,contentTitle:()=>t,default:()=>u,assets:()=>d,toc:()=>c,frontMatter:()=>a});var s=JSON.parse('{"id":"admin-manual/query-admin/sql-interception","title":"SQL Interception","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/admin-manual/query-admin/sql-interception.md","sourceDirName":"admin-manual/query-admin","slug":"/admin-manual/query-admin/sql-interception","permalink":"/docs/admin-manual/query-admin/sql-interception","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"SQL Interception","language":"en"}}'),i=l("785893"),r=l("250065");let a={title:"SQL Interception",language:"en"},t=void 0,d={},c=[{value:"Creating and Managing Rules",id:"creating-and-managing-rules",level:2},{value:"Creating Rules",id:"creating-rules",level:3},{value:"Binding Rules",id:"binding-rules",level:3},{value:"Viewing Rules",id:"viewing-rules",level:3},{value:"Modifying Rules",id:"modifying-rules",level:3},{value:"Deleting Rules",id:"deleting-rules",level:3},{value:"Triggering Rules",id:"triggering-rules",level:2}];function o(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"This feature is used to restrict the execution of SQL statements (both DDL and DML can be restricted)."}),"\n",(0,i.jsx)(n.p,{children:"Supports per-user configuration of SQL interception rules, such as using regular expressions to match and intercept SQL, or using supported rules for interception."}),"\n",(0,i.jsx)(n.h2,{id:"creating-and-managing-rules",children:"Creating and Managing Rules"}),"\n",(0,i.jsx)(n.h3,{id:"creating-rules",children:"Creating Rules"}),"\n",(0,i.jsxs)(n.p,{children:["For more syntax on creating rules, please refer to ",(0,i.jsx)(n.a,{href:"../../sql-manual/sql-statements/data-governance/CREATE-SQL_BLOCK_RULE",children:"CREATE SQL BLOCK RULE"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"sql"}),': Matching rule (based on regular expression matching, special characters need to be escaped), optional, default value is "NULL".']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"sqlHash"}),": SQL hash value for exact matching. This value will be printed in ",(0,i.jsx)(n.code,{children:"fe.audit.log"}),', optional. This parameter and SQL are mutually exclusive, default value is "NULL".']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"partition_num"}),": Maximum number of partitions a scan node will scan, default value is 0L."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"tablet_num"}),": Maximum number of tablets a scan node will scan, default value is 0L."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"cardinality"}),": Rough number of rows scanned by a scan node, default value is 0L."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"global"}),": Whether it is globally effective (for all users), default is false."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"enable"}),": Whether to enable the blocking rule, default is true."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'CREATE SQL_BLOCK_RULE test_rule1 \nPROPERTIES(\n  "sql"="select \\\\* from order_analysis",\n  "global"="false",\n  "enable"="true",\n  "sqlHash"=""\n);\n\nCREATE SQL_BLOCK_RULE test_rule2\nPROPERTIES(\n	"partition_num" = "30",\n	"cardinality"="10000000000",\n	"global"="false",\n	"enable"="true"\n)\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Note: Do not include a semicolon at the end of the SQL statement."})}),"\n",(0,i.jsx)(n.p,{children:"Starting from version 2.1.6, SQL interception rules support external tables (tables in the External Catalog)."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"sql"}),": Same as for internal tables."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"sqlHash"}),": Same as for internal tables."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"partition_num"}),": Same as for internal tables."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"tablet_num"}),": Limits the number of shards scanned for external tables. Different data sources have different definitions of shards. For example, file shards in Hive tables, incremental data shards in Hudi tables, etc."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"cardinality"}),": Same as for internal tables, limits the number of scanned rows. This parameter only takes effect when there are row count statistics for external tables (such as collected manually or automatically)."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"binding-rules",children:"Binding Rules"}),"\n",(0,i.jsxs)(n.p,{children:["Rules with ",(0,i.jsx)(n.code,{children:"global"})," set to ",(0,i.jsx)(n.code,{children:"true"})," are globally effective and do not need to be bound to specific users."]}),"\n",(0,i.jsxs)(n.p,{children:["Rules with ",(0,i.jsx)(n.code,{children:"global"})," set to ",(0,i.jsx)(n.code,{children:"false"})," need to be bound to specific users. A user can be bound to multiple rules, and multiple rules are separated by ",(0,i.jsx)(n.code,{children:","}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SET PROPERTY [FOR 'jack'] 'sql_block_rules' = 'test_rule1,test_rule2'\n"})}),"\n",(0,i.jsx)(n.h3,{id:"viewing-rules",children:"Viewing Rules"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"View the configured SQL blocking rules."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["If no rule name is specified, all rules will be viewed. For specific syntax, please refer to ",(0,i.jsx)(n.a,{href:"../../sql-manual/sql-statements/data-governance/SHOW-SQL_BLOCK_RULE",children:"SHOW SQL BLOCK RULE"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SHOW SQL_BLOCK_RULE [FOR RULE_NAME]\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"View rules bound to a user"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SHOW PROPERTY FOR user_name;\n"})}),"\n",(0,i.jsx)(n.h3,{id:"modifying-rules",children:"Modifying Rules"}),"\n",(0,i.jsxs)(n.p,{children:["Allow modifications to each item such as sql/sqlHash/partition_num/tablet_num/cardinality/global/enable. For specific syntax, please refer to ",(0,i.jsx)(n.a,{href:"../../sql-manual/sql-statements/data-governance/ALTER-SQL_BLOCK_RULE",children:"ALTER SQL BLOCK RULE"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"sql"})," and ",(0,i.jsx)(n.code,{children:"sqlHash"})," cannot be set simultaneously."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["If a rule sets ",(0,i.jsx)(n.code,{children:"sql"})," or ",(0,i.jsx)(n.code,{children:"sqlHash"}),", the other property cannot be modified."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"sql"}),"/",(0,i.jsx)(n.code,{children:"sqlHash"})," and ",(0,i.jsx)(n.code,{children:"partition_num"}),"/",(0,i.jsx)(n.code,{children:"tablet_num"}),"/",(0,i.jsx)(n.code,{children:"cardinality"})," cannot be set simultaneously"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For example, if a rule sets ",(0,i.jsx)(n.code,{children:"partition_num"}),", then ",(0,i.jsx)(n.code,{children:"sql"})," or ",(0,i.jsx)(n.code,{children:"sqlHash"})," cannot be modified."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'ALTER SQL_BLOCK_RULE test_rule PROPERTIES("sql"="select \\\\* from test_table","enable"="true")\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'ALTER SQL_BLOCK_RULE test_rule2 PROPERTIES("partition_num" = "10","tablet_num"="300","enable"="true")\n'})}),"\n",(0,i.jsx)(n.h3,{id:"deleting-rules",children:"Deleting Rules"}),"\n",(0,i.jsxs)(n.p,{children:["Support deleting multiple rules simultaneously, separated by ",(0,i.jsx)(n.code,{children:","}),". For specific syntax, please refer to ",(0,i.jsx)(n.a,{href:"../../sql-manual/sql-statements/data-governance/DROP-SQL_BLOCK_RULE",children:"DROP SQL BLOCK RULE"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"DROP SQL_BLOCK_RULE test_rule1,test_rule2\n"})}),"\n",(0,i.jsx)(n.h2,{id:"triggering-rules",children:"Triggering Rules"}),"\n",(0,i.jsx)(n.p,{children:"When we execute the SQL defined in the rules, an exception error will be returned, as shown below:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"mysql> select * from order_analysis;\nERROR 1064 (HY000): errCode = 2, detailMessage = sql match regex sql block rule: order_analysis_rule\n"})})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return t},a:function(){return a}});var s=l(667294);let i={},r=s.createContext(i);function a(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);