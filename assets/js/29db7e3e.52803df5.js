"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["776175"],{17340:function(e,a,t){t.r(a),t.d(a,{metadata:()=>n,contentTitle:()=>i,default:()=>p,assets:()=>d,toc:()=>o,frontMatter:()=>l});var n=JSON.parse('{"id":"data-operate/import/complex-types/array","title":"ARRAY","description":"\x3c!--","source":"@site/docs/data-operate/import/complex-types/array.md","sourceDirName":"data-operate/import/complex-types","slug":"/data-operate/import/complex-types/array","permalink":"/docs/dev/data-operate/import/complex-types/array","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"ARRAY","language":"en"}}'),r=t("785893"),s=t("250065");let l={title:"ARRAY",language:"en"},i=void 0,d={},o=[{value:"CSV format import",id:"csv-format-import",level:2},{value:"Step 1: Prepare the data",id:"step-1-prepare-the-data",level:3},{value:"Step 2: Create a table in the database",id:"step-2-create-a-table-in-the-database",level:3},{value:"Step 3: Load data",id:"step-3-load-data",level:3},{value:"Step 4: Check the imported data",id:"step-4-check-the-imported-data",level:3},{value:"JSON format import",id:"json-format-import",level:2},{value:"Step 1: Prepare the data",id:"step-1-prepare-the-data-1",level:3},{value:"Step 2: Create a table in the database",id:"step-2-create-a-table-in-the-database-1",level:3},{value:"Step 3: Load data",id:"step-3-load-data-1",level:3},{value:"Step 4: Check the imported data",id:"step-4-check-the-imported-data-1",level:3}];function c(e){let a={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"ARRAY<T>"})," An array of T-type items, it cannot be used as a key column."]}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"Before version 2.0, it was only supported in the Duplicate model table."}),"\n",(0,r.jsx)(a.li,{children:"Starting from version 2.0, it is supported in the non-key columns of the Unique model table."}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:"T-type could be any of:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-sql",children:"BOOLEAN, TINYINT, SMALLINT, INT, BIGINT, LARGEINT, FLOAT, DOUBLE, DECIMAL, DATE,\nDATEV2, DATETIME, DATETIMEV2, CHAR, VARCHAR, STRING\n"})}),"\n",(0,r.jsx)(a.h2,{id:"csv-format-import",children:"CSV format import"}),"\n",(0,r.jsx)(a.h3,{id:"step-1-prepare-the-data",children:"Step 1: Prepare the data"}),"\n",(0,r.jsxs)(a.p,{children:["Create the following csv file: ",(0,r.jsx)(a.code,{children:"test_array.csv"}),"\nThe separator is ",(0,r.jsx)(a.code,{children:"|"})," instead of comma to distinguish it from the comma in array."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{children:"1|[1,2,3,4,5]\n2|[6,7,8]\n3|[]\n4|null\n"})}),"\n",(0,r.jsx)(a.h3,{id:"step-2-create-a-table-in-the-database",children:"Step 2: Create a table in the database"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-sql",children:'CREATE TABLE `array_test` (\n    `id`         INT           NOT NULL,\n    `c_array`    ARRAY<INT>    NULL\n)\nDUPLICATE KEY(`id`)\nDISTRIBUTED BY HASH(`id`) BUCKETS 1\nPROPERTIES (\n    "replication_allocation" = "tag.location.default: 1"\n);\n'})}),"\n",(0,r.jsx)(a.h3,{id:"step-3-load-data",children:"Step 3: Load data"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",children:'curl --location-trusted \\\n        -u "root":"" \\\n        -H "column_separator:|" \\\n        -H "columns: id, c_array" \\\n        -T "test_array.csv" \\\n        http://localhost:8040/api/testdb/array_test/_stream_load\n'})}),"\n",(0,r.jsx)(a.h3,{id:"step-4-check-the-imported-data",children:"Step 4: Check the imported data"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-sql",children:"mysql> SELECT * FROM array_test;\n+------+-----------------+\n| id   | c_array         |\n+------+-----------------+\n|    1 | [1, 2, 3, 4, 5] |\n|    2 | [6, 7, 8]       |\n|    3 | []              |\n|    4 | NULL            |\n+------+-----------------+\n4 rows in set (0.01 sec)\n"})}),"\n",(0,r.jsx)(a.h2,{id:"json-format-import",children:"JSON format import"}),"\n",(0,r.jsx)(a.h3,{id:"step-1-prepare-the-data-1",children:"Step 1: Prepare the data"}),"\n",(0,r.jsxs)(a.p,{children:["Create the following JSON file, ",(0,r.jsx)(a.code,{children:"test_array.json"})]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-json",children:'[\n    {"id":1, "c_array":[1,2,3,4,5]},\n    {"id":2, "c_array":[6,7,8]},\n    {"id":3, "c_array":[]},\n    {"id":4, "c_array":null}\n]\n'})}),"\n",(0,r.jsx)(a.h3,{id:"step-2-create-a-table-in-the-database-1",children:"Step 2: Create a table in the database"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-sql",children:'CREATE TABLE `array_test` (\n    `id`         INT           NOT NULL,\n    `c_array`    ARRAY<INT>    NULL\n)\nDUPLICATE KEY(`id`)\nDISTRIBUTED BY HASH(`id`) BUCKETS 1\nPROPERTIES (\n    "replication_allocation" = "tag.location.default: 1"\n);\n'})}),"\n",(0,r.jsx)(a.h3,{id:"step-3-load-data-1",children:"Step 3: Load data"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",children:'curl --location-trusted \\\n        -u "root":"" \\\n        -H "format:json" \\\n        -H "columns: id, c_array" \\\n        -H "strip_outer_array:true" \\\n        -T "test_array.json" \\\n        http://localhost:8040/api/testdb/array_test/_stream_load\n'})}),"\n",(0,r.jsx)(a.h3,{id:"step-4-check-the-imported-data-1",children:"Step 4: Check the imported data"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-sql",children:"mysql> SELECT * FROM array_test;\n+------+-----------------+\n| id   | c_array         |\n+------+-----------------+\n|    1 | [1, 2, 3, 4, 5] |\n|    2 | [6, 7, 8]       |\n|    3 | []              |\n|    4 | NULL            |\n+------+-----------------+\n4 rows in set (0.01 sec)\n"})})]})}function p(e={}){let{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,a,t){t.d(a,{Z:function(){return i},a:function(){return l}});var n=t(667294);let r={},s=n.createContext(r);function l(e){let a=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(s.Provider,{value:a},e.children)}}}]);