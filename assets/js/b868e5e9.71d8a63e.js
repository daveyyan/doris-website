"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["600012"],{652058:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>r,default:()=>h,assets:()=>d,toc:()=>o,frontMatter:()=>a});var i=JSON.parse('{"id":"data-operate/delete/delete-manual","title":"Deleting Data with DELETE Command","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/data-operate/delete/delete-manual.md","sourceDirName":"data-operate/delete","slug":"/data-operate/delete/delete-manual","permalink":"/docs/3.0/data-operate/delete/delete-manual","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"Deleting Data with DELETE Command","language":"en"},"sidebar":"docs","previous":{"title":"Delete Overview","permalink":"/docs/3.0/data-operate/delete/delete-overview"},"next":{"title":"Batch Deletion","permalink":"/docs/3.0/data-operate/delete/batch-delete-manual"}}'),l=t("785893"),s=t("250065");let a={title:"Deleting Data with DELETE Command",language:"en"},r=void 0,d={},o=[{value:"Delete by Specifying a Filter Predicate",id:"delete-by-specifying-a-filter-predicate",level:3},{value:"Required Parameters",id:"required-parameters",level:3},{value:"Optional Parameters",id:"optional-parameters",level:3},{value:"Note",id:"note",level:3},{value:"Examples",id:"examples",level:3},{value:"Delete via the USING clause",id:"delete-via-the-using-clause",level:2},{value:"Required parameters",id:"required-parameters-1",level:3},{value:"Optional parameters",id:"optional-parameters-1",level:3},{value:"Note",id:"note-1",level:3},{value:"Example",id:"example",level:3},{value:"Returned Results",id:"returned-results",level:2},{value:"Implementation Success",id:"implementation-success",level:3},{value:"Submitted Successfully but Invisible",id:"submitted-successfully-but-invisible",level:3},{value:"Commit Failed, Transaction Cancelled",id:"commit-failed-transaction-cancelled",level:3},{value:"Summary",id:"summary",level:3},{value:"FE Configurations",id:"fe-configurations",level:2},{value:"View History",id:"view-history",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Example",id:"example-1",level:3}];function c(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"The DELETE statement conditionally deletes data from a specified table or partition using the MySQL protocol.The Delete operation differs from import-based bulk deletion in that it is similar to the INSERT INTO statement, which is a synchronous process.All Delete operations are a separate import job in Doris."}),"\n",(0,l.jsx)(n.p,{children:"The DELETE statement generally requires the specification of tables and partitions as well as deletion conditions to filter the data to be deleted, and will delete data from both the base and rollup tables."}),"\n",(0,l.jsxs)(n.p,{children:["The syntax of the DELETE statement is detailed in the ",(0,l.jsx)(n.a,{href:"../../sql-manual/sql-statements/data-modification/DML/DELETE",children:"DELETE"})," syntax. Unlike the Insert into command, Delete cannot specify ",(0,l.jsx)(n.code,{children:"label"})," manually. For the concept of ",(0,l.jsx)(n.code,{children:"label"})," , refer to the ",(0,l.jsx)(n.a,{href:"../../data-operate/import/insert-into-manual",children:"Insert Into"})," documentation."]}),"\n",(0,l.jsx)(n.h3,{id:"delete-by-specifying-a-filter-predicate",children:"Delete by Specifying a Filter Predicate"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"DELETE FROM table_name [table_alias]\n    [PARTITION partition_name | PARTITIONS (partition_name [, partition_name])]\n    WHERE column_name op { value | value_list } [ AND column_name op { value | value_list } ...];\n"})}),"\n",(0,l.jsx)(n.h3,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"table_name: Specify the table from which the data should be deleted;"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"column_name: Columns belonging to table_name"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"op: Logical comparison operators, optional types include: =, >, <, >=, <=, !=, in, not in"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"value | value_list: Values or lists of values for logical comparisons"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"optional-parameters",children:"Optional Parameters"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"PARTITION partition_name | PARTITIONS (partition_name [, partition_name]): Specify the name of the partition in which the deletion is to be performed. If the partition does not exist in the table, an error will be reported."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"table_alias: Aliases of the Table"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"note",children:"Note"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"When using the table model Aggregate, you can only specify conditions on the key column."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"If the selected key column does not exist in a rollup, it cannot be deleted."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:'Conditions can only be related to each other by "and". If you want an "or" relationship, you need to write the conditions in two separate DELETE statements;'}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"If the table is partitioned, you need to specify the partition. If not, doris will infer the partition from the condition.In two cases, doris cannot infer the partition from the condition:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"The condition does not contain a partition column"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:['The op for the partition column is "not in". When the partition table does not specify a partition, or a partition cannot be inferred from the condition, you need to set the session variable ',(0,l.jsx)(n.code,{children:"delete_without_partition"})," to true, in which case delete is applied to all partitions."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"This statement may reduce query efficiency for a period of time after execution. The extent of the impact depends on the number of deleted conditions specified in the statement. The more conditions specified, the greater the impact."}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"1. Delete the row in my_table partition p1 where column k1 is 3."})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"DELETE FROM my_table PARTITION p1\n    WHERE k1 = 3;\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:'2. Delete rows in my_table partition p1 where column k1 is greater than or equal to 3 and column k2 is "abc".'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'DELETE FROM my_table PARTITION p1\nWHERE k1 = 3 AND k2 = "abc";\n'})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:'3. Delete rows in my_table partition (p1, p2) where column k1 is greater than or equal to 3 and column k2 is "abc".'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'DELETE FROM my_table PARTITIONS (p1, p2)\nWHERE k1 = 3 AND k2 = "abc";\n'})}),"\n",(0,l.jsx)(n.h2,{id:"delete-via-the-using-clause",children:"Delete via the USING clause"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"DELETE FROM table_name [table_alias]\n    [PARTITION partition_name | PARTITIONS (partition_name [, partition_name])]\n    [USING additional_tables]\n    WHERE condition\n"})}),"\n",(0,l.jsx)(n.h3,{id:"required-parameters-1",children:"Required parameters"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"table_name: Specify the table from which the data should be deleted;"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"WHERE condition: Specify a condition for selecting rows for deletion;"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"optional-parameters-1",children:"Optional parameters"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"PARTITION partition_name | PARTITIONS (partition_name [, partition_name]): Specify the name of the partition in which the deletion is to be performed. If the partition does not exist in the table, an error will be reported."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"table_alias: Aliases of the Table"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"note-1",children:"Note"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Only conditions on the key column can be specified when using the UNIQUE model."}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,l.jsxs)(n.p,{children:["Use the result of joining the ",(0,l.jsx)(n.code,{children:"t2"})," and ",(0,l.jsx)(n.code,{children:"t3"})," tables to delete the data in ",(0,l.jsx)(n.code,{children:"t1"}),". The deleted table only supports the UNIQUE model."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"-- Create t1, t2, t3 tables\nCREATE TABLE t1\n  (id INT, c1 BIGINT, c2 STRING, c3 DOUBLE, c4 DATE)\nUNIQUE KEY (id)\nDISTRIBUTED BY HASH (id)\nPROPERTIES('replication_num'='1', \"function_column.sequence_col\" = \"c4\");\n\nCREATE TABLE t2\n  (id INT, c1 BIGINT, c2 STRING, c3 DOUBLE, c4 DATE)\nDISTRIBUTED BY HASH (id)\nPROPERTIES('replication_num'='1');\n\nCREATE TABLE t3\n  (id INT)\nDISTRIBUTED BY HASH (id)\nPROPERTIES('replication_num'='1');\n\n-- insert data\nINSERT INTO t1 VALUES\n  (1, 1, '1', 1.0, '2000-01-01'),\n  (2, 2, '2', 2.0, '2000-01-02'),\n  (3, 3, '3', 3.0, '2000-01-03');\n\nINSERT INTO t2 VALUES\n  (1, 10, '10', 10.0, '2000-01-10'),\n  (2, 20, '20', 20.0, '2000-01-20'),\n  (3, 30, '30', 30.0, '2000-01-30'),\n  (4, 4, '4', 4.0, '2000-01-04'),\n  (5, 5, '5', 5.0, '2000-01-05');\n\nINSERT INTO t3 VALUES\n  (1),\n  (4),\n  (5);\n\n-- remove rows from t1\nDELETE FROM t1\n  USING t2 INNER JOIN t3 ON t2.id = t3.id\n  WHERE t1.id = t2.id;\n"})}),"\n",(0,l.jsxs)(n.p,{children:["The expected result is that the column with ",(0,l.jsx)(n.code,{children:"id=1"})," in table ",(0,l.jsx)(n.code,{children:"t1"})," is deleted."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Plain",children:"+----+----+----+--------+------------+\n| id | c1 | c2 | c3     | c4         |\n+----+----+----+--------+------------+\n| 2  | 2  | 2  |    2.0 | 2000-01-02 |\n| 3  | 3  | 3  |    3.0 | 2000-01-03 |\n+----+----+----+--------+------------+\n"})}),"\n",(0,l.jsx)(n.h2,{id:"returned-results",children:"Returned Results"}),"\n",(0,l.jsx)(n.p,{children:"Delete command is a SQL command that return results synchronously. The results are classified as follows:"}),"\n",(0,l.jsx)(n.h3,{id:"implementation-success",children:"Implementation Success"}),"\n",(0,l.jsxs)(n.p,{children:["If Delete completes successfully and is visible, the following results are returned.",(0,l.jsx)(n.code,{children:"Query OK"}),"indicates success."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"mysql> delete from test_tbl PARTITION p1 where k1 = 1;\nQuery OK, 0 rows affected (0.04 sec)\n{'label':'delete_e7830c72-eb14-4cb9-bbb6-eebd4511d251', 'status':'VISIBLE', 'txnId':'4005'}\n"})}),"\n",(0,l.jsx)(n.h3,{id:"submitted-successfully-but-invisible",children:"Submitted Successfully but Invisible"}),"\n",(0,l.jsx)(n.p,{children:"Doris transaction commit is divided into two steps: commit and release version, only after the completion of the release version step, the results will be visible to the user."}),"\n",(0,l.jsx)(n.p,{children:"If the commit has been successful, then it can be assumed that it will eventually be published successfully, Doris will try to wait for a certain period of time after the commit is completed, if the timeout period is exceeded even if the published version is not yet complete, it will be preferred to return to the user, prompting the user that the commit has been completed."}),"\n",(0,l.jsx)(n.p,{children:"If Delete has been submitted and executed, but the release version is still not published and visible, the following result will be returned:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"mysql> delete from test_tbl PARTITION p1 where k1 = 1;\nQuery OK, 0 rows affected (0.04 sec)\n{'label':'delete_e7830c72-eb14-4cb9-bbb6-eebd4511d251', 'status':'COMMITTED', 'txnId':'4005', 'err':'delete job is committed but may be taking effect later' }\n"})}),"\n",(0,l.jsx)(n.p,{children:"The result will also return a json string:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"affected rows"}),"\uFF1AIndicates the rows affected by this deletion. Since Doris deletion is currently a logical deletion, this value is constant at 0;"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"label"}),"\uFF1AThe automatically generated label identifies the import job. Each import job has a Label that is unique within a single database;"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"status"}),"\uFF1AIndicates whether the data deletion is visible. If it's visible, the result displays ",(0,l.jsx)(n.code,{children:"VISIBLE"}),"; if  it's invisible, the result displays ",(0,l.jsx)(n.code,{children:"COMMITTED"}),";"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"txnId"}),"\uFF1AThe transaction id corresponding to Delete;"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"err"}),"\uFF1AThis field will display the details of Delete."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"commit-failed-transaction-cancelled",children:"Commit Failed, Transaction Cancelled"}),"\n",(0,l.jsx)(n.p,{children:"If the Delete statement fails to commit, the transaction will be automatically aborted by Doris and the following result will be returned:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"mysql> delete from test_tbl partition p1 where k1 > 80;\nERROR 1064 (HY000): errCode = 2, detailMessage = {Cause of error}\n"})}),"\n",(0,l.jsxs)(n.p,{children:["For example, a timeout deletion will return the timeout time and the outstanding ",(0,l.jsx)(n.code,{children:"(tablet=replica)"})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"mysql> delete from test_tbl partition p1 where k1 > 80;\nERROR 1064 (HY000): errCode = 2, detailMessage = failed to delete replicas from job: 4005, Unfinished replicas:10000=60000, 10001=60000, 10002=60000\n"})}),"\n",(0,l.jsx)(n.h3,{id:"summary",children:"Summary"}),"\n",(0,l.jsx)(n.p,{children:"The correct logic for handling the results returned by Delete is:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["If returns ",(0,l.jsx)(n.code,{children:"ERROR 1064 (HY000)"})," , the deletion failed;"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["If returns",(0,l.jsx)(n.code,{children:"Query OK"}),", the deletion is successful;"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["If ",(0,l.jsx)(n.code,{children:"status"})," is ",(0,l.jsx)(n.code,{children:"COMMITTED"}),", it means that the data is still not visible, users can wait for a while and then check the result with ",(0,l.jsx)(n.code,{children:"show delete"}),";"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["If ",(0,l.jsx)(n.code,{children:"STATUS"})," is ",(0,l.jsx)(n.code,{children:"VISIBLE"}),", the deletion is successful."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"fe-configurations",children:"FE Configurations"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"TIMEOUT Configurations"})}),"\n",(0,l.jsx)(n.p,{children:"\u603B\u4F53\u6765\u8BF4\uFF0CDoris \u7684\u5220\u9664\u4F5C\u4E1A\u7684\u8D85\u65F6\u65F6\u95F4\u8BA1\u7B97\u89C4\u5219\u4E3A\u5982\u4E0B\uFF08\u5355\u4F4D\uFF1A\u79D2\uFF09\uFF1A"}),"\n",(0,l.jsx)(n.p,{children:"Overall, the timeout calculation rules for Doris Delete jobs are as follows (in seconds):"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-Plain",children:"TIMEOUT = MIN(delete_job_max_timeout_second, MAX(30, tablet_delete_timeout_second * tablet_num))\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"tablet_delete_timeout_second"})}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"The delete timeout time is elastically changed by the number of tablets under the specified partition. This item is configured so that the default value of the timeout time contributed by one tablet on average is 2."}),"\n",(0,l.jsx)(n.p,{children:"Assuming that there are 5 tablets under the partition specified for this deletion, the timeout time available for delete is 10 seconds, and since it is less than the minimum timeout time of 30 seconds, the final timeout time is 30 seconds."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"query_timeout"})}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["Because delete itself is a SQL command, the delete statement is also subject to session limitations. Timeout is also affected by the ",(0,l.jsx)(n.code,{children:"query_timeout"})," value in the session, which can be increased in seconds by ",(0,l.jsx)(n.code,{children:"SET query_timeout = xxx"}),"."]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"IN Predicate Configuration"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"max_allowed_in_element_num_of_delete"})}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["If the user needs to occupy more elements when using the in predicate, the user can adjust the maximum number of elements allowed to be carried by ",(0,l.jsx)(n.code,{children:"max_allowed_in_element_num_of_delete"}),". The default value is 1024."]}),"\n",(0,l.jsx)(n.h2,{id:"view-history",children:"View History"}),"\n",(0,l.jsx)(n.p,{children:"Users can view the history of deletions that have been performed by using the show delete statement."}),"\n",(0,l.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SHOW DELETE [FROM db_name]\n"})}),"\n",(0,l.jsx)(n.h3,{id:"example-1",children:"Example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'mysql> show delete from test_db;\n+-----------+---------------+---------------------+-----------------+----------+\n| TableName | PartitionName | CreateTime          | DeleteCondition | State    |\n+-----------+---------------+---------------------+-----------------+----------+\n| empty_tbl | p3            | 2020-04-15 23:09:35 | k1 EQ "1"       | FINISHED |\n| test_tbl  | p4            | 2020-04-15 23:09:53 | k1 GT "80"      | FINISHED |\n+-----------+---------------+---------------------+-----------------+----------+\n2 rows in set (0.00 sec)\n'})})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return a}});var i=t(667294);let l={},s=i.createContext(l);function a(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);