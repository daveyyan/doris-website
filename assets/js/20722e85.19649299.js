"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["323188"],{849965:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>r,default:()=>u,assets:()=>o,toc:()=>d,frontMatter:()=>a});var i=JSON.parse('{"id":"sql-manual/sql-statements/Data-Manipulation-Statements/Manipulation/DELETE","title":"DELETE","description":"\x3c!--","source":"@site/docs/sql-manual/sql-statements/Data-Manipulation-Statements/Manipulation/DELETE.md","sourceDirName":"sql-manual/sql-statements/Data-Manipulation-Statements/Manipulation","slug":"/sql-manual/sql-statements/Data-Manipulation-Statements/Manipulation/DELETE","permalink":"/docs/dev/sql-manual/sql-statements/Data-Manipulation-Statements/Manipulation/DELETE","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"DELETE","language":"en"},"sidebar":"docs","previous":{"title":"EXPLAIN","permalink":"/docs/dev/sql-manual/sql-statements/Data-Manipulation-Statements/Manipulation/EXPLAIN"},"next":{"title":"UPDATE","permalink":"/docs/dev/sql-manual/sql-statements/Data-Manipulation-Statements/Manipulation/UPDATE"}}'),l=t("785893"),s=t("250065");let a={title:"DELETE",language:"en"},r=void 0,o={},d=[{value:"DELETE",id:"delete",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Required Parameters",id:"required-parameters",level:4},{value:"Optional Parameters",id:"optional-parameters",level:4},{value:"Returned Results",id:"returned-results",level:4},{value:"Implementation Success",id:"implementation-success",level:5},{value:"Submitted Successfully but Invisible",id:"submitted-successfully-but-invisible",level:5},{value:"Commit Failed, Transaction Cancelled",id:"commit-failed-transaction-cancelled",level:5},{value:"Note",id:"note",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function c(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"delete",children:"DELETE"}),"\n",(0,l.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,l.jsx)(n.p,{children:"DELETE"}),"\n",(0,l.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"This statement is used to conditionally delete data in the specified table (base index) partition."}),"\n",(0,l.jsx)(n.p,{children:"This operation will also delete the data of the rollup index related to this base index."}),"\n",(0,l.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(n.p,{children:"Syntax 1: This syntax can only specify filter predicates"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"DELETE FROM table_name [PARTITION partition_name | PARTITIONS (partition_name [, partition_name])]\nWHERE\ncolumn_name op { value | value_list } [ AND column_name op { value | value_list } ...];\n"})}),"\n",(0,l.jsx)(n.p,{children:"Syntax 2: This syntax can only used on UNIQUE KEY model"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"[cte]\nDELETE FROM table_name\n    [PARTITION partition_name | PARTITIONS (partition_name [, partition_name])]\n    [USING additional_tables]\n    WHERE condition\n"})}),"\n",(0,l.jsx)(n.h4,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"table_name: Specifies the table from which rows are removed."}),"\n",(0,l.jsx)(n.li,{children:"column_name: column belong to table_name"}),"\n",(0,l.jsx)(n.li,{children:"op: Logical comparison operator, The optional types of op include: =, >, <, >=, <=, !=, in, not in"}),"\n",(0,l.jsx)(n.li,{children:"value | value_list: value or value list used for logial comparison"}),"\n",(0,l.jsx)(n.li,{children:"WHERE condition: Specifies a condition to use to select rows for removal"}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"optional-parameters",children:"Optional Parameters"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"cte: Common Table Expression, e.g. 'WITH a AS SELECT * FROM tbl'."}),"\n",(0,l.jsx)(n.li,{children:"PARTITION partition_name | PARTITIONS (partition_name [, partition_name]): Specifies the partition or partitions to select rows for removal"}),"\n",(0,l.jsx)(n.li,{children:"table_alias: alias of table"}),"\n",(0,l.jsx)(n.li,{children:"USING additional_tables: If you need to refer to additional tables in the WHERE clause to help identify the rows to be removed, then specify those table names in the USING clause. You can also use the USING clause to specify subqueries that identify the rows to be removed."}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"returned-results",children:"Returned Results"}),"\n",(0,l.jsx)(n.p,{children:"Delete command is a SQL command that return results synchronously. The results are classified as follows:"}),"\n",(0,l.jsx)(n.h5,{id:"implementation-success",children:"Implementation Success"}),"\n",(0,l.jsxs)(n.p,{children:["If Delete completes successfully and is visible, the following results are returned.",(0,l.jsx)(n.code,{children:"Query OK"}),"indicates success."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"Query OK, 0 rows affected (0.04 sec)\n{'label':'delete_e7830c72-eb14-4cb9-bbb6-eebd4511d251', 'status':'VISIBLE', 'txnId':'4005'}\n"})}),"\n",(0,l.jsx)(n.h5,{id:"submitted-successfully-but-invisible",children:"Submitted Successfully but Invisible"}),"\n",(0,l.jsx)(n.p,{children:"Doris transaction commit is divided into two steps: commit and release version, only after the completion of the release version step, the results will be visible to the user."}),"\n",(0,l.jsx)(n.p,{children:"If the commit has been successful, then it can be assumed that it will eventually be published successfully, Doris will try to wait for a certain period of time after the commit is completed, if the timeout period is exceeded even if the published version is not yet complete, it will be preferred to return to the user, prompting the user that the commit has been completed."}),"\n",(0,l.jsx)(n.p,{children:"If Delete has been submitted and executed, but the release version is still not published and visible, the following result will be returned:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"Query OK, 0 rows affected (0.04 sec)\n{'label':'delete_e7830c72-eb14-4cb9-bbb6-eebd4511d251', 'status':'COMMITTED', 'txnId':'4005', 'err':'delete job is committed but may be taking effect later' }\n"})}),"\n",(0,l.jsx)(n.p,{children:"The result will also return a json string:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"affected rows"}),"\uFF1AIndicates the rows affected by this deletion. Since Doris deletion is currently a logical deletion, this value is constant at 0;"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"label"}),"\uFF1AThe automatically generated label identifies the import job. Each import job has a Label that is unique within a single database;"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"status"}),"\uFF1AIndicates whether the data deletion is visible. If it's visible, the result displays ",(0,l.jsx)(n.code,{children:"VISIBLE"}),"; if  it's invisible, the result displays ",(0,l.jsx)(n.code,{children:"COMMITTED"}),";"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"txnId"}),"\uFF1AThe transaction id corresponding to Delete;"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"err"}),"\uFF1AThis field will display the details of Delete."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h5,{id:"commit-failed-transaction-cancelled",children:"Commit Failed, Transaction Cancelled"}),"\n",(0,l.jsx)(n.p,{children:"If the Delete statement fails to commit, the transaction will be automatically aborted by Doris and the following result will be returned:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"ERROR 1064 (HY000): errCode = 2, detailMessage = {Cause of error}\n"})}),"\n",(0,l.jsxs)(n.p,{children:["For example, a timeout deletion will return the timeout time and the outstanding ",(0,l.jsx)(n.code,{children:"(tablet=replica)"})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"ERROR 1064 (HY000): errCode = 2, detailMessage = failed to delete replicas from job: 4005, Unfinished replicas:10000=60000, 10001=60000, 10002=60000\n"})}),"\n",(0,l.jsx)(n.h4,{id:"note",children:"Note"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Only conditions on the key column can be specified when using AGGREGATE (UNIQUE) model."}),"\n",(0,l.jsx)(n.li,{children:"When the selected key column does not exist in a rollup, delete cannot be performed."}),"\n",(0,l.jsx)(n.li,{children:'Wheny you use syntax 1, conditions can only have an "and" relationship. If you want to achieve an "or" relationship, you need to write the conditions in two DELETE statements.'}),"\n",(0,l.jsx)(n.li,{children:"In syntax 1, if it is a partitioned table, you can specify a partition. If not specified, Doris will infer partition from the given conditions. In two cases, Doris cannot infer the partition from conditions: 1) the conditions do not contain partition columns; 2) The operator of the partition column is not in. When a partition table does not specify the partition, or the partition cannot be inferred from the conditions, the session variable delete_without_partition needs to be true to make delete statement be applied to all partitions."}),"\n",(0,l.jsx)(n.li,{children:"This statement may reduce query efficiency for a period of time after execution. The degree of impact depends on the number of delete conditions specified in the statement. The more conditions you specify, the greater the impact."}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Delete the data row whose k1 column value is 3 in my_table partition p1"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"DELETE FROM my_table PARTITION p1\n    WHERE k1 = 3;\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:'Delete the data rows where the value of column k1 is greater than or equal to 3 and the value of column k2 is "abc" in my_table partition p1'}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'DELETE FROM my_table PARTITION p1\nWHERE k1 >= 3 AND k2 = "abc";\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:'Delete the data rows where the value of column k1 is greater than or equal to 3 and the value of column k2 is "abc" in my_table partition p1, p2'}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'DELETE FROM my_table PARTITIONS (p1, p2)\nWHERE k1 >= 3 AND k2 = "abc";\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["use the result of ",(0,l.jsx)(n.code,{children:"t2"})," join ",(0,l.jsx)(n.code,{children:"t3"})," to romve rows from ",(0,l.jsx)(n.code,{children:"t1"}),",delete table only support unique key model"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"-- create t1, t2, t3 tables\nCREATE TABLE t1\n  (id INT, c1 BIGINT, c2 STRING, c3 DOUBLE, c4 DATE)\nUNIQUE KEY (id)\nDISTRIBUTED BY HASH (id)\nPROPERTIES('replication_num'='1', \"function_column.sequence_col\" = \"c4\");\n\nCREATE TABLE t2\n  (id INT, c1 BIGINT, c2 STRING, c3 DOUBLE, c4 DATE)\nDISTRIBUTED BY HASH (id)\nPROPERTIES('replication_num'='1');\n\nCREATE TABLE t3\n  (id INT)\nDISTRIBUTED BY HASH (id)\nPROPERTIES('replication_num'='1');\n\n-- insert data\nINSERT INTO t1 VALUES\n  (1, 1, '1', 1.0, '2000-01-01'),\n  (2, 2, '2', 2.0, '2000-01-02'),\n  (3, 3, '3', 3.0, '2000-01-03');\n\nINSERT INTO t2 VALUES\n  (1, 10, '10', 10.0, '2000-01-10'),\n  (2, 20, '20', 20.0, '2000-01-20'),\n  (3, 30, '30', 30.0, '2000-01-30'),\n  (4, 4, '4', 4.0, '2000-01-04'),\n  (5, 5, '5', 5.0, '2000-01-05');\n\nINSERT INTO t3 VALUES\n  (1),\n  (4),\n  (5);\n\n-- remove rows from t1\nDELETE FROM t1\n  USING t2 INNER JOIN t3 ON t2.id = t3.id\n  WHERE t1.id = t2.id;\n"})}),"\n",(0,l.jsx)(n.p,{children:"the expect result is only remove the row where id = 1 in table t1"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"+----+----+----+--------+------------+\n| id | c1 | c2 | c3     | c4         |\n+----+----+----+--------+------------+\n| 2  | 2  | 2  |    2.0 | 2000-01-02 |\n| 3  | 3  | 3  |    3.0 | 2000-01-03 |\n+----+----+----+--------+------------+\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"using cte"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'create table orders(\n o_orderkey bigint,\n o_totalprice decimal(15, 2)\n) unique key(o_orderkey)\ndistributed by hash(o_orderkey) buckets 1\nproperties (\n"replication_num" = "1"\n);\n\ninsert into orders values\n(1, 34.1),\n(2, 432.8);\n\ncreate table lineitem(\nl_linenumber int,\no_orderkey bigint,\nl_discount  decimal(15, 2)\n) unique key(l_linenumber)\ndistributed by hash(l_linenumber) buckets 1\nproperties (\n"replication_num" = "1"\n);\n\ninsert into lineitem values\n(1, 1, 1.23),\n(2, 1, 3.21),\n(3, 2, 18.08),\n(4, 2, 23.48);\n\nwith discount_orders as (\nselect * from orders\nwhere o_totalprice > 100\n)\ndelete from lineitem\nusing discount_orders\nwhere lineitem.o_orderkey = discount_orders.o_orderkey;\n'})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"DELETE\n"})}),"\n",(0,l.jsx)(n.h3,{id:"best-practice",children:"Best Practice"})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return a}});var i=t(667294);let l={},s=i.createContext(l);function a(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);