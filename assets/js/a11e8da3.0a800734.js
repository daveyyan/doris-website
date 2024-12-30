"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["278569"],{338860:function(e,a,t){t.r(a),t.d(a,{metadata:()=>l,contentTitle:()=>s,default:()=>p,assets:()=>r,toc:()=>i,frontMatter:()=>o});var l=JSON.parse('{"id":"data-operate/import/data-source/local-file","title":"local file","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/data-operate/import/data-source/local-file.md","sourceDirName":"data-operate/import/data-source","slug":"/data-operate/import/data-source/local-file","permalink":"/docs/3.0/data-operate/import/data-source/local-file","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"local file","language":"en"},"sidebar":"docs","previous":{"title":"Loading Overview","permalink":"/docs/3.0/data-operate/import/load-manual"},"next":{"title":"Kafka","permalink":"/docs/3.0/data-operate/import/data-source/kafka"}}'),d=t("785893"),n=t("250065");let o={title:"local file",language:"en"},s=void 0,r={},i=[{value:"1. Stream Load",id:"1-stream-load",level:3},{value:"2. Streamloader Tool",id:"2-streamloader-tool",level:3},{value:"3. MySQL Load",id:"3-mysql-load",level:3},{value:"Using Stream Load to Load Data",id:"using-stream-load-to-load-data",level:2},{value:"Step 1: Prepare Data",id:"step-1-prepare-data",level:3},{value:"Step 2: Create Table",id:"step-2-create-table",level:3},{value:"Step 3: Load Data",id:"step-3-load-data",level:3},{value:"Step 4: Check Loaded Data",id:"step-4-check-loaded-data",level:3},{value:"Using Streamloader Tool to Load Data",id:"using-streamloader-tool-to-load-data",level:2},{value:"Step 1: Prepare Data",id:"step-1-prepare-data-1",level:3},{value:"Step 2: Create Table",id:"step-2-create-table-1",level:3},{value:"Step 3: Load Data",id:"step-3-load-data-1",level:3},{value:"Step 4: Check Loaded Data",id:"step-4-check-loaded-data-1",level:3},{value:"Using MySQL Load to Load Data",id:"using-mysql-load-to-load-data",level:2},{value:"Step 1: Prepare Data",id:"step-1-prepare-data-2",level:3},{value:"Step 2: Connect to MySQL Client",id:"step-2-connect-to-mysql-client",level:3},{value:"Step 3: Load Data",id:"step-3-load-data-2",level:3},{value:"Step 4: Check Loaded Data",id:"step-4-check-loaded-data-2",level:3}];function c(e){let a={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.p,{children:"Doris provides multiple ways to load data from local sources:"}),"\n",(0,d.jsx)(a.h3,{id:"1-stream-load",children:"1. Stream Load"}),"\n",(0,d.jsxs)(a.p,{children:["Load local files or data streams into Doris via HTTP protocol. Supports CSV, JSON, Parquet, and ORC formats. For more information, refer to the ",(0,d.jsx)(a.a,{href:"/docs/3.0/data-operate/import/import-way/stream-load-manual",children:"Stream Load documentation"}),"."]}),"\n",(0,d.jsx)(a.h3,{id:"2-streamloader-tool",children:"2. Streamloader Tool"}),"\n",(0,d.jsxs)(a.p,{children:["Streamloader is a dedicated client tool based on Stream Load, supporting concurrent loads, making it suitable for large data loads. For more information, refer to the ",(0,d.jsx)(a.a,{href:"../../../ecosystem/doris-streamloader",children:"Streamloader documentation"}),"."]}),"\n",(0,d.jsx)(a.h3,{id:"3-mysql-load",children:"3. MySQL Load"}),"\n",(0,d.jsxs)(a.p,{children:["Doris is compatible with MySQL protocol and supports using the standard ",(0,d.jsx)(a.a,{href:"https://dev.mysql.com/doc/refman/8.0/en/load-data.html",children:"LOAD DATA"})," syntax to load local files, suitable for loading CSV files."]}),"\n",(0,d.jsx)(a.h2,{id:"using-stream-load-to-load-data",children:"Using Stream Load to Load Data"}),"\n",(0,d.jsx)(a.h3,{id:"step-1-prepare-data",children:"Step 1: Prepare Data"}),"\n",(0,d.jsxs)(a.p,{children:["Create a CSV file named ",(0,d.jsx)(a.code,{children:"streamload_example.csv"})," with the following content:"]}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-SQL",children:"1,Emily,25\n2,Benjamin,35\n3,Olivia,28\n4,Alexander,60\n5,Ava,17\n6,William,69\n7,Sophia,32\n8,James,64\n9,Emma,37\n10,Liam,64\n"})}),"\n",(0,d.jsx)(a.h3,{id:"step-2-create-table",children:"Step 2: Create Table"}),"\n",(0,d.jsx)(a.p,{children:"Create a table in Doris with the following syntax:"}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-SQL",children:'CREATE TABLE testdb.test_streamload(\n    user_id BIGINT NOT NULL COMMENT "User ID",\n    name VARCHAR(20) COMMENT "User Name",\n    age INT COMMENT "User Age"\n)\nDUPLICATE KEY(user_id)\nDISTRIBUTED BY HASH(user_id) BUCKETS 10;\n'})}),"\n",(0,d.jsx)(a.h3,{id:"step-3-load-data",children:"Step 3: Load Data"}),"\n",(0,d.jsxs)(a.p,{children:["Submit a Stream Load job using ",(0,d.jsx)(a.code,{children:"curl"}),":"]}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-Bash",children:'curl --location-trusted -u <doris_user>:<doris_password> \\\n    -H "column_separator:," \\\n    -H "columns:user_id,name,age" \\\n    -T streamload_example.csv \\\n    -XPUT http://<fe_ip>:<fe_http_port>/api/testdb/test_streamload/_stream_load\n'})}),"\n",(0,d.jsx)(a.p,{children:"Example of load result:"}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-SQL",children:'{\n    "TxnId": 3,\n    "Status": "Success",\n    "NumberTotalRows": 10,\n    "NumberLoadedRows": 10\n}\n'})}),"\n",(0,d.jsx)(a.h3,{id:"step-4-check-loaded-data",children:"Step 4: Check Loaded Data"}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-SQL",children:"mysql> SELECT COUNT(*) FROM testdb.test_streamload;\n+----------+\n| count(*) |\n+----------+\n|       10 |\n+----------+\n"})}),"\n",(0,d.jsx)(a.h2,{id:"using-streamloader-tool-to-load-data",children:"Using Streamloader Tool to Load Data"}),"\n",(0,d.jsx)(a.h3,{id:"step-1-prepare-data-1",children:"Step 1: Prepare Data"}),"\n",(0,d.jsxs)(a.p,{children:["Create a CSV file named ",(0,d.jsx)(a.code,{children:"streamloader_example.csv"})," with the same content as above."]}),"\n",(0,d.jsx)(a.h3,{id:"step-2-create-table-1",children:"Step 2: Create Table"}),"\n",(0,d.jsx)(a.p,{children:"Create the table in Doris with the same syntax as above."}),"\n",(0,d.jsx)(a.h3,{id:"step-3-load-data-1",children:"Step 3: Load Data"}),"\n",(0,d.jsx)(a.p,{children:"Use the Streamloader tool to load data:"}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-Bash",children:'doris-streamloader --source_file="streamloader_example.csv" --url="http://localhost:8330" --header="column_separator:," --db="testdb" --table="test_streamloader"\n'})}),"\n",(0,d.jsx)(a.p,{children:"Example of load result:"}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-SQL",children:'Load Result: {\n    "Status": "Success",\n    "TotalRows": 10,\n    "LoadedRows": 10\n}\n'})}),"\n",(0,d.jsx)(a.h3,{id:"step-4-check-loaded-data-1",children:"Step 4: Check Loaded Data"}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-SQL",children:"mysql> SELECT COUNT(*) FROM testdb.test_streamloader;\n+----------+\n| count(*) |\n+----------+\n|       10 |\n+----------+\n"})}),"\n",(0,d.jsx)(a.h2,{id:"using-mysql-load-to-load-data",children:"Using MySQL Load to Load Data"}),"\n",(0,d.jsx)(a.h3,{id:"step-1-prepare-data-2",children:"Step 1: Prepare Data"}),"\n",(0,d.jsxs)(a.p,{children:["Create a file named ",(0,d.jsx)(a.code,{children:"client_local.csv"})," with the following sample data:"]}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-SQL",children:"1,10\n2,20\n3,30\n4,40\n5,50\n6,60\n"})}),"\n",(0,d.jsx)(a.h3,{id:"step-2-connect-to-mysql-client",children:"Step 2: Connect to MySQL Client"}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-Shell",children:"mysql --local-infile -h <fe_ip> -P <fe_query_port> -u root -D testdb\n"})}),"\n",(0,d.jsx)(a.h3,{id:"step-3-load-data-2",children:"Step 3: Load Data"}),"\n",(0,d.jsx)(a.p,{children:"Execute the MySQL Load command:"}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-SQL",children:"LOAD DATA LOCAL\nINFILE 'client_local.csv'\nINTO TABLE testdb.t1\nCOLUMNS TERMINATED BY ','\nLINES TERMINATED BY '\\n';\n"})}),"\n",(0,d.jsx)(a.h3,{id:"step-4-check-loaded-data-2",children:"Step 4: Check Loaded Data"}),"\n",(0,d.jsx)(a.p,{children:"If the load is successful, the result will be displayed as follows:"}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-SQL",children:"Query OK, 6 row affected (0.17 sec)\nRecords: 6  Deleted: 0  Skipped: 0  Warnings: 0\n"})})]})}function p(e={}){let{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,d.jsx)(a,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},250065:function(e,a,t){t.d(a,{Z:function(){return s},a:function(){return o}});var l=t(667294);let d={},n=l.createContext(d);function o(e){let a=l.useContext(n);return l.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),l.createElement(n.Provider,{value:a},e.children)}}}]);