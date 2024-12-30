"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["498737"],{719137:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>a,default:()=>h,assets:()=>d,toc:()=>o,frontMatter:()=>r});var i=JSON.parse('{"id":"data-operate/import/handling-messy-data","title":"Handling Messy Data","description":"\x3c!--","source":"@site/docs/data-operate/import/handling-messy-data.md","sourceDirName":"data-operate/import","slug":"/data-operate/import/handling-messy-data","permalink":"/docs/dev/data-operate/import/handling-messy-data","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Handling Messy Data","language":"en-US"}}'),s=t("785893"),l=t("250065");let r={title:"Handling Messy Data",language:"en-US"},a=void 0,d={},o=[{value:"Strict Mode",id:"strict-mode",level:2},{value:"Filtering Strategy for Column Type Conversion Failures",id:"filtering-strategy-for-column-type-conversion-failures",level:3},{value:"Restricting Partial Column Updates to Existing Columns Only",id:"restricting-partial-column-updates-to-existing-columns-only",level:3},{value:"Enable Strict Mode",id:"enable-strict-mode",level:3},{value:"Maximum Filter Ratio",id:"maximum-filter-ratio",level:2},{value:"Filter Ratio Calculation Method",id:"filter-ratio-calculation-method",level:3},{value:"Maximum Filter Ratio Configuration",id:"maximum-filter-ratio-configuration",level:3}];function c(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"During data ingestion, discrepancies may arise between source and target column data types. Although the load process attempts to convert these inconsistent types, issues such as type mismatches, field length exceeding limits, or precision mismatches may occur, resulting in conversion failures."}),"\n",(0,s.jsx)(n.p,{children:"To address these exceptional cases, Doris provides two essential control parameters:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Strict Mode (strict_mode): Regulates whether to filter out rows with conversion failures"}),"\n",(0,s.jsx)(n.li,{children:"Maximum Filter Ratio (max_filter_ratio): Defines the maximum allowable ratio of filtered data to total data during load"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"strict-mode",children:"Strict Mode"}),"\n",(0,s.jsx)(n.p,{children:"Strict mode serves two primary purposes:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Filtering out data rows where column type conversion fails during load"}),"\n",(0,s.jsx)(n.li,{children:"Restricting updates to existing columns only in partial column update scenarios"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"filtering-strategy-for-column-type-conversion-failures",children:"Filtering Strategy for Column Type Conversion Failures"}),"\n",(0,s.jsx)(n.p,{children:"The system employs different strategies based on the strict mode setting:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"When strict mode is OFF: Fields that fail conversion are set to NULL, and rows containing these NULL values are loaded along with the correct data rows."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:'When strict mode is ON: The system filters out rows with conversion failures and only loads correct data rows. Here, "conversion failure" specifically refers to cases where the original data is non-NULL but becomes NULL after column type conversion. Note that NULL values resulting from function calculations are not included in this type of conversion.'}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Handling NULL values: Both correct and abnormal data rows may contain NULL values. If the target column is defined as NOT NULL, all rows containing NULL values will be filtered out."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"1. Example with TinyInt column type:"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Original Data Type"}),(0,s.jsx)(n.th,{children:"Original Data Example"}),(0,s.jsx)(n.th,{children:"Value After TinyInt Conversion"}),(0,s.jsx)(n.th,{children:"Strict Mode"}),(0,s.jsx)(n.th,{children:"Result"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"NULL"}),(0,s.jsx)(n.td,{children:"\\N"}),(0,s.jsx)(n.td,{children:"NULL"}),(0,s.jsx)(n.td,{children:"ON/OFF"}),(0,s.jsx)(n.td,{children:"NULL"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Non-NULL"}),(0,s.jsx)(n.td,{children:'"abc" or 2000'}),(0,s.jsx)(n.td,{children:"NULL"}),(0,s.jsx)(n.td,{children:"ON"}),(0,s.jsx)(n.td,{children:"Invalid (Filtered)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Non-NULL"}),(0,s.jsx)(n.td,{children:'"abc"'}),(0,s.jsx)(n.td,{children:"NULL"}),(0,s.jsx)(n.td,{children:"OFF"}),(0,s.jsx)(n.td,{children:"NULL"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Non-NULL"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"ON/OFF"}),(0,s.jsx)(n.td,{children:"Loaded Successfully"})]})]})]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The column in the table allows NULL values"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Both ",(0,s.jsx)(n.code,{children:"abc"})," and ",(0,s.jsx)(n.code,{children:"2000"})," become NULL after conversion to TinyInt due to type or precision issues. When strict mode is ON, such data will be filtered out. When OFF, NULL will be loaded."]}),"\n"]}),"\n"]})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"2. Example with Decimal(1,0) type:"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Original Data Type"}),(0,s.jsx)(n.th,{children:"Original Data Example"}),(0,s.jsx)(n.th,{children:"Value After Decimal Conversion"}),(0,s.jsx)(n.th,{children:"Strict Mode"}),(0,s.jsx)(n.th,{children:"Result"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"NULL"}),(0,s.jsx)(n.td,{children:"\\N"}),(0,s.jsx)(n.td,{children:"NULL"}),(0,s.jsx)(n.td,{children:"ON/OFF"}),(0,s.jsx)(n.td,{children:"NULL"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Non-NULL"}),(0,s.jsx)(n.td,{children:"aaa"}),(0,s.jsx)(n.td,{children:"NULL"}),(0,s.jsx)(n.td,{children:"ON"}),(0,s.jsx)(n.td,{children:"Invalid (Filtered)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Non-NULL"}),(0,s.jsx)(n.td,{children:"aaa"}),(0,s.jsx)(n.td,{children:"NULL"}),(0,s.jsx)(n.td,{children:"OFF"}),(0,s.jsx)(n.td,{children:"NULL"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Non-NULL"}),(0,s.jsx)(n.td,{children:"1 or 10"}),(0,s.jsx)(n.td,{children:"1 or 10"}),(0,s.jsx)(n.td,{children:"ON/OFF"}),(0,s.jsx)(n.td,{children:"Loaded Successfully"})]})]})]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The column in the table allows NULL values"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"abc"})," becomes NULL after conversion to Decimal due to type issues. When strict mode is ON, such data will be filtered out. When OFF, NULL will be loaded."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Although ",(0,s.jsx)(n.code,{children:"10"})," exceeds the range, since its type meets decimal requirements, strict mode does not affect it."]}),"\n"]}),"\n"]})}),"\n",(0,s.jsx)(n.h3,{id:"restricting-partial-column-updates-to-existing-columns-only",children:"Restricting Partial Column Updates to Existing Columns Only"}),"\n",(0,s.jsx)(n.p,{children:"In strict mode, each row in a partial column update must have its Key already existing in the table. In non-strict mode, partial column updates can both update existing rows (where Key exists) and insert new rows (where Key doesn't exist)."}),"\n",(0,s.jsx)(n.p,{children:"For example, given a table structure as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE user_profile\n(\n    id               INT,\n    name             VARCHAR(10),\n    age              INT,\n    city             VARCHAR(10),\n    balance          DECIMAL(9, 0),\n    last_access_time DATETIME\n) ENGINE=OLAP\nUNIQUE KEY(id)\nDISTRIBUTED BY HASH(id) BUCKETS 1\nPROPERTIES (\n    "enable_unique_key_merge_on_write" = "true"\n);\n'})}),"\n",(0,s.jsx)(n.p,{children:"The table contains one record as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"mysql> select * from user_profile;\n+------+-------+------+----------+---------+---------------------+\n| id   | name  | age  | city     | balance | last_access_time   |\n+------+-------+------+----------+---------+---------------------+\n|    1 | kevin |   18 | shenzhen |     400 | 2023-07-01 12:00:00|\n+------+-------+------+----------+---------+---------------------+\n"})}),"\n",(0,s.jsxs)(n.p,{children:["When using Insert Into with strict mode to perform partial column updates, the insertion will fail because the second and third rows with keys ",(0,s.jsx)(n.code,{children:"(3)"})," and ",(0,s.jsx)(n.code,{children:"(18)"})," do not exist in the original table:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SET enable_unique_key_partial_update=true;\nSET enable_insert_strict = true;\nINSERT INTO user_profile (id, balance, last_access_time) VALUES\n(1, 500, '2023-07-03 12:00:01'),\n(3, 23, '2023-07-03 12:00:02'),\n(18, 9999999, '2023-07-03 12:00:03');\nERROR 1105 (HY000): errCode = 2, detailMessage = Insert has filtered data in strict mode\n"})}),"\n",(0,s.jsx)(n.p,{children:"When using Insert Into with non-strict mode to perform partial column updates:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SET enable_unique_key_partial_update=true;\nSET enable_insert_strict = false;\nINSERT INTO user_profile (id, balance, last_access_time) VALUES \n(1, 500, '2023-07-03 12:00:01'),\n(3, 23, '2023-07-03 12:00:02'),\n(18, 9999999, '2023-07-03 12:00:03');\n"})}),"\n",(0,s.jsx)(n.p,{children:"The existing record will be updated, and two new records will be inserted. For columns not specified in the insert statement, if a default value is defined, it will be used; if the column allows NULL values, NULL will be used; otherwise, the insertion will fail."}),"\n",(0,s.jsx)(n.p,{children:"The query result is as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"mysql> select * from user_profile;\n+------+-------+------+----------+---------+---------------------+\n| id   | name  | age  | city     | balance | last_access_time    |\n+------+-------+------+----------+---------+---------------------+\n|    1 | kevin |   18 | shenzhen |     500 | 2023-07-03 12:00:01 |\n|    3 | NULL  | NULL | NULL     |      23 | 2023-07-03 12:00:02 |\n|   18 | NULL  | NULL | NULL     | 9999999 | 2023-07-03 12:00:03 |\n+------+-------+------+----------+---------+---------------------+\n"})}),"\n",(0,s.jsx)(n.h3,{id:"enable-strict-mode",children:"Enable Strict Mode"}),"\n",(0,s.jsx)(n.p,{children:"Strict mode (strict_mode) defaults to False. Here's how to set it for different load methods:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Stream Load"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'curl --location-trusted -u user:passwd \\\n-H "strict_mode: true" \\\n-T data.txt \\\nhttp://host:port/api/example_db/test_table/_stream_load\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Broker Load"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'LOAD LABEL example_db.label_1\n(\n    DATA INFILE("s3://bucket/data.txt")\n    INTO TABLE test_table\n)\nWITH S3 (...)\nPROPERTIES\n(\n    "strict_mode" = "true"\n);\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Routine Load"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'CREATE ROUTINE LOAD example_db.job1 ON test_table\nPROPERTIES\n(\n    "strict_mode" = "true"\n)\nFROM KAFKA (...);\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"MySQL Load"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'LOAD DATA LOCAL INFILE \'data.txt\'\nINTO TABLE test_table\nPROPERTIES\n(\n    "strict_mode" = "true"\n);\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Insert Into"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SET enable_insert_strict = true;\nINSERT INTO test_table ...;\n"})}),"\n",(0,s.jsx)(n.h2,{id:"maximum-filter-ratio",children:"Maximum Filter Ratio"}),"\n",(0,s.jsx)(n.p,{children:"Maximum Filter Ratio (max_filter_ratio) is a crucial load control parameter that defines the maximum allowable ratio of filtered data to total data during load. If the actual filter ratio is below the set maximum, the load task will continue and filtered data will be ignored; if it exceeds this ratio, the load task will fail."}),"\n",(0,s.jsx)(n.h3,{id:"filter-ratio-calculation-method",children:"Filter Ratio Calculation Method"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Filtered Rows: Data filtered out due to quality issues, including type errors, precision errors, string length exceeding limits, file column count mismatches, and rows filtered due to missing corresponding partitions."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Unselected Rows: Data rows filtered out due to ",(0,s.jsx)(n.a,{href:"/docs/dev/data-operate/import/load-data-convert#pre-filtering",children:"Pre-filtering"})," or ",(0,s.jsx)(n.a,{href:"/docs/dev/data-operate/import/load-data-convert#post-filtering",children:"Post-filtering"})," conditions."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Loaded Rows: Data rows successfully loaded."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The filter ratio is calculated as:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",children:"#Filtered Rows / (#Filtered Rows + #Loaded Rows)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Note that ",(0,s.jsx)(n.code,{children:"Unselected Rows"})," are not included in the filter ratio calculation."]}),"\n",(0,s.jsx)(n.h3,{id:"maximum-filter-ratio-configuration",children:"Maximum Filter Ratio Configuration"}),"\n",(0,s.jsx)(n.p,{children:"The maximum filter ratio (max_filter_ratio) defaults to 0, meaning no filtered data is allowed. Here's how to set it for different load methods:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Stream Load"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'curl --location-trusted -u user:passwd \\\n-H "max_filter_ratio: 0.1" \\\n-T data.txt \\\nhttp://host:port/api/example_db/test_table/_stream_load\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Broker Load"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'LOAD LABEL example_db.label_1\n(\n    DATA INFILE("s3://bucket/data.txt")\n    INTO TABLE test_table\n)\nWITH S3 (...)\nPROPERTIES\n(\n    "max_filter_ratio" = "0.1"\n);\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Routine Load"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'CREATE ROUTINE LOAD example_db.job1 ON test_table\nPROPERTIES\n(\n    "max_filter_ratio" = "0.1"\n)\nFROM KAFKA (...);\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"MySQL Load"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'LOAD DATA LOCAL INFILE \'data.txt\'\nINTO TABLE test_table\nPROPERTIES\n(\n    "max_filter_ratio" = "0.1"\n);\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Insert Into"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SET insert_max_filter_ratio = 0.1;\nINSERT INTO test_table FROM S3/HDFS/LOCAL();```\n\n:::tip\nFor Insert Into statements, `insert_max_filter_ratio` only takes effect when `enable_insert_strict = false`, and only applies to `INSERT INTO FROM S3/HDFS/LOCAL()` syntax. The default value is 1.0, which means that all abnormal data are allowed to be filtered.\n:::\n"})})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return r}});var i=t(667294);let s={},l=i.createContext(s);function r(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);