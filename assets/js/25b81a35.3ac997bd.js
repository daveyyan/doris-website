"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["937512"],{8334:function(n,e,l){l.r(e),l.d(e,{metadata:()=>s,contentTitle:()=>d,default:()=>a,assets:()=>c,toc:()=>h,frontMatter:()=>t});var s=JSON.parse('{"id":"data-operate/import/load-data-convert","title":"Converting Source Data","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/data-operate/import/load-data-convert.md","sourceDirName":"data-operate/import","slug":"/data-operate/import/load-data-convert","permalink":"/docs/data-operate/import/load-data-convert","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Converting Source Data","language":"en"},"sidebar":"docs","previous":{"title":"Import Data Formats","permalink":"/docs/data-operate/import/load-data-format"},"next":{"title":"Load High Availability","permalink":"/docs/data-operate/import/load-high-availability"}}'),i=l("785893"),r=l("250065");let t={title:"Converting Source Data",language:"en"},d=void 0,c={},h=[{value:"Usage Scenarios",id:"usage-scenarios",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"BROKER LOAD",id:"broker-load",level:3},{value:"STREAM LOAD",id:"stream-load",level:3},{value:"ROUTINE LOAD",id:"routine-load",level:3},{value:"Reference Manual",id:"reference-manual",level:2},{value:"Loading Syntax",id:"loading-syntax",level:3},{value:"Column Mapping",id:"column-mapping",level:3},{value:"Pre-filtering",id:"pre-filtering",level:3},{value:"Column Transformation",id:"column-transformation",level:3},{value:"Post-Filtering",id:"post-filtering",level:3}];function o(n){let e={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"usage-scenarios",children:"Usage Scenarios"}),"\n",(0,i.jsx)(e.p,{children:"During the import process, Doris supports some transformations on the source data, including mapping, conversion, preceding filtering, and post-filtering."}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Mapping: Import column A from the source data into column B in the target table."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Conversion: Calculate the values in the target column based on the columns in the source data using an expression. Custom functions are supported in the expression."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Preceding Filtering: Filter rows in the source data and only import rows that meet the filtering conditions."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Post-Filtering: Filter rows in the result and only import rows that meet the filtering conditions."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,i.jsx)(e.h3,{id:"broker-load",children:"BROKER LOAD"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:'LOAD LABEL example_db.label1\n(\n    DATA INFILE("bos://bucket/input/file")\n    INTO TABLE `my_table`\n    (k1, k2, tmpk3)\n    PRECEDING FILTER k1 = 1\n    SET (\n        k3 = tmpk3 + 1\n    )\n    WHERE k1 > k2\n)\nWITH BROKER bos\n(\n    ...\n);\n'})}),"\n",(0,i.jsx)(e.h3,{id:"stream-load",children:"STREAM LOAD"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:'curl\n--location-trusted\n-u user:passwd\n-H "columns: k1, k2, tmpk3, k3 = tmpk3 + 1"\n-H "where: k1 > k2"\n-T file.txt\nhttp://host:port/api/testDb/testTbl/_stream_load\n'})}),"\n",(0,i.jsx)(e.h3,{id:"routine-load",children:"ROUTINE LOAD"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"CREATE ROUTINE LOAD example_db.label1 ON my_table\nCOLUMNS(k1, k2, tmpk3, k3 = tmpk3 + 1),\nPRECEDING FILTER k1 = 1,\nWHERE k1 > k2\n...\n"})}),"\n",(0,i.jsx)(e.h2,{id:"reference-manual",children:"Reference Manual"}),"\n",(0,i.jsx)(e.h3,{id:"loading-syntax",children:"Loading Syntax"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Stream Load"})}),"\n",(0,i.jsxs)(e.p,{children:["Add ",(0,i.jsx)(e.code,{children:"columns"})," and ",(0,i.jsx)(e.code,{children:"where"})," parameters in the HTTP header."]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"columns"})," specify column mapping and value transformation."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"where"})," specify post-filtering."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"Stream load does not support preceding filtering."}),"\n",(0,i.jsx)(e.p,{children:"Example:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:'curl\n--location-trusted\n-u user:passwd\n-H "columns: k1, k2, tmpk3, k3 = tmpk3 + 1"\n-H "where: k1 > k2"\n-T file.txt\nhttp://host:port/api/testDb/testTbl/_stream_load\n'})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Broker Load"})}),"\n",(0,i.jsx)(e.p,{children:"Define data transformation in the SQL statement, including:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"(k1, k2, tmpk3)"})," specifies column mapping."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"PRECEDING FILTER"})," specifies preceding filtering."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"SET"})," specifies column transformation."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"WHERE"})," specifies post-filtering."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:'LOAD LABEL example_db.label1\n(\n    DATA INFILE("bos://bucket/input/file")\n    INTO TABLE `my_table`\n    (k1, k2, tmpk3)\n    PRECEDING FILTER k1 = 1\n    SET (\n        k3 = tmpk3 + 1\n    )\n    WHERE k1 > k2\n)\nWITH BROKER bos\n(\n    ...\n);\n'})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Routine Load"})}),"\n",(0,i.jsx)(e.p,{children:"Define data transformation in the SQL statement, including:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"COLUMNS"})," specifies column mapping and column transformation."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"PRECEDING FILTER"})," specifies preceding filtering."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"WHERE"})," specifies post-filtering."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"CREATE ROUTINE LOAD example_db.label1 ON my_table\nCOLUMNS(k1, k2, tmpk3, k3 = tmpk3 + 1),\nPRECEDING FILTER k1 = 1,\nWHERE k1 > k2\n...\n"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Insert Into"})}),"\n",(0,i.jsxs)(e.p,{children:["Insert Into can perform data transformation directly in the ",(0,i.jsx)(e.code,{children:"SELECT"})," statement, and add a ",(0,i.jsx)(e.code,{children:"WHERE"})," clause for data filtering."]}),"\n",(0,i.jsx)(e.h3,{id:"column-mapping",children:"Column Mapping"}),"\n",(0,i.jsx)(e.p,{children:"The purpose of column mapping is to describe the information of each column in the load file, which is equivalent to defining names for the columns in the source data. By describing the column mapping relationship, we can load source files with different column orders and column numbers into Doris. Let's illustrate it through examples:"}),"\n",(0,i.jsx)(e.p,{children:"Suppose the source file has 4 columns with the following contents (the column names in the table header are for illustration purposes only and are not actually present in the file):"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Column 1"}),(0,i.jsx)(e.th,{children:"Column 2"}),(0,i.jsx)(e.th,{children:"Column 3"}),(0,i.jsx)(e.th,{children:"Column 4"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"1"}),(0,i.jsx)(e.td,{children:"100"}),(0,i.jsx)(e.td,{children:"beijing"}),(0,i.jsx)(e.td,{children:"1.1"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"2"}),(0,i.jsx)(e.td,{children:"200"}),(0,i.jsx)(e.td,{children:"shanghai"}),(0,i.jsx)(e.td,{children:"1.2"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"3"}),(0,i.jsx)(e.td,{children:"300"}),(0,i.jsx)(e.td,{children:"guangzhou"}),(0,i.jsx)(e.td,{children:"1.3"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"4"}),(0,i.jsx)(e.td,{children:"\\N"}),(0,i.jsx)(e.td,{children:"chongqing"}),(0,i.jsx)(e.td,{children:"1.4"})]})]})]}),"\n",(0,i.jsx)(e.admonition,{type:"note",children:(0,i.jsxs)(e.p,{children:["Note: ",(0,i.jsx)(e.code,{children:"\\N"})," represents null in the source file."]})}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Adjusting Mapping Order"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Suppose there are 4 columns in the table: ",(0,i.jsx)(e.code,{children:"k1, k2, k3, k4"}),". The desired load mapping is as follows:"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Plain",children:"Column 1 -> k1\nColumn 2 -> k3\nColumn 3 -> k2\nColumn 4 -> k4\n"})}),"\n",(0,i.jsxs)(e.ol,{start:"3",children:["\n",(0,i.jsx)(e.li,{children:"The order of column mapping should be as follows:"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Plain",children:"(k1, k3, k2, k4)\n"})}),"\n",(0,i.jsxs)(e.ol,{start:"4",children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"The number of columns in the source file is greater than the number of columns in the table."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Suppose there are 3 columns in the table: ",(0,i.jsx)(e.code,{children:"k1, k2, k3"}),". The desired load mapping is as follows:"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Plain",children:"Column 1 -> k1\nColumn 2 -> k3\nColumn 3 -> k2\n"})}),"\n",(0,i.jsxs)(e.ol,{start:"6",children:["\n",(0,i.jsx)(e.li,{children:"The order of column mapping should be as follows:"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Plain",children:"(k1, k3, k2, tmpk4)\n"})}),"\n",(0,i.jsxs)(e.ol,{start:"7",children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Here, ",(0,i.jsx)(e.code,{children:"tmpk4"})," is a custom column name that doesn't exist in the table. Doris will ignore this non-existing column name."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"The number of columns in the source file is less than the number of columns in the table, and default values will be used to fill the missing columns."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Suppose there are 5 columns in the table: ",(0,i.jsx)(e.code,{children:"k1, k2, k3, k4, k5"}),". The desired load mapping is as follows:"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Plain",children:"Column 1 -> k1\nColumn 2 -> k3\nColumn 3 -> k2\n"})}),"\n",(0,i.jsxs)(e.ol,{start:"10",children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Here, only the first 3 columns from the source file will be used. The columns ",(0,i.jsx)(e.code,{children:"k4"})," and ",(0,i.jsx)(e.code,{children:"k5"})," are expected to be filled with default values."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"The order of column mapping should be as follows:"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Plain",children:"(k1, k3, k2)\n"})}),"\n",(0,i.jsxs)(e.ol,{start:"12",children:["\n",(0,i.jsxs)(e.li,{children:["If the columns ",(0,i.jsx)(e.code,{children:"k4"})," and ",(0,i.jsx)(e.code,{children:"k5"})," have default values, they will be filled accordingly. Otherwise, if the columns are nullable, they will be filled with ",(0,i.jsx)(e.code,{children:"null"})," values. Otherwise, the loading job will report an error."]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"pre-filtering",children:"Pre-filtering"}),"\n",(0,i.jsx)(e.p,{children:"Pre-filtering is a process of filtering the raw data that is read. Currently, it is only supported in BROKER LOAD and ROUTINE LOAD."}),"\n",(0,i.jsx)(e.p,{children:"Pre-filtering can be applied in the following scenarios:"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Filtering before transformation: It allows filtering of data before performing column mapping and transformation. This way, unnecessary data can be filtered out in advance."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Filtering columns that do not exist in the table: It can be used as a filtering identifier when certain columns are not present in the table."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Handling data from multiple tables: For example, if the source data contains data from multiple tables (or data from multiple tables is written to the same Kafka message queue), each row may include a column name that identifies which table the data belongs to. Users can use pre-filtering conditions to select and load the corresponding table data."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"column-transformation",children:"Column Transformation"}),"\n",(0,i.jsx)(e.p,{children:"Column transformation enables users to modify the values of columns in the source files. Currently, Doris supports the use of built-in functions and user-defined functions for transformation."}),"\n",(0,i.jsx)(e.admonition,{type:"note",children:(0,i.jsx)(e.p,{children:"Note: User-defined functions belong to a specific database, and when using custom functions for transformation, users need to have read permissions on that database."})}),"\n",(0,i.jsx)(e.p,{children:"Transformation operations are typically defined in conjunction with column mapping. In the following example, we illustrate the process:"}),"\n",(0,i.jsx)(e.p,{children:"Assume that the source file has 4 columns with the following content (the column names in the header are for descriptive purposes only and are not actually present in the file):"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Column 1"}),(0,i.jsx)(e.th,{children:"Column 2"}),(0,i.jsx)(e.th,{children:"Column 3"}),(0,i.jsx)(e.th,{children:"Column 4"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"1"}),(0,i.jsx)(e.td,{children:"100"}),(0,i.jsx)(e.td,{children:"beijing"}),(0,i.jsx)(e.td,{children:"1.1"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"2"}),(0,i.jsx)(e.td,{children:"200"}),(0,i.jsx)(e.td,{children:"shanghai"}),(0,i.jsx)(e.td,{children:"1.2"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"3"}),(0,i.jsx)(e.td,{children:"300"}),(0,i.jsx)(e.td,{children:"guangzhou"}),(0,i.jsx)(e.td,{children:"1.3"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"\\N"}),(0,i.jsx)(e.td,{children:"400"}),(0,i.jsx)(e.td,{children:"chongqing"}),(0,i.jsx)(e.td,{children:"1.4"})]})]})]}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Load the transformed column values into the table from the source file."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Assuming the table has 4 columns: ",(0,i.jsx)(e.code,{children:"k1"}),", ",(0,i.jsx)(e.code,{children:"k2"}),", ",(0,i.jsx)(e.code,{children:"k3"}),", ",(0,i.jsx)(e.code,{children:"k4"}),", and we want the following mapping and transformation relationships:"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Plain",children:"Column 1       -> k1\nColumn 2 * 100 -> k3\nColumn 3       -> k2\nColumn 4       -> k4\n"})}),"\n",(0,i.jsxs)(e.ol,{start:"3",children:["\n",(0,i.jsx)(e.li,{children:"The order of column mapping should be as follows:"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Plain",children:"(k1, tmpk3, k2, k4, k3 = tmpk3 * 100)\n"})}),"\n",(0,i.jsxs)(e.ol,{start:"4",children:["\n",(0,i.jsxs)(e.li,{children:["Here, we rename the second column in the source file as ",(0,i.jsx)(e.code,{children:"tmpk3"})," and specify that the value of column ",(0,i.jsx)(e.code,{children:"k3"})," in the table is ",(0,i.jsx)(e.code,{children:"tmpk3 * 100"}),". The final data in the table would be as follows:"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"k1"}),(0,i.jsx)(e.th,{children:"k2"}),(0,i.jsx)(e.th,{children:"k3"}),(0,i.jsx)(e.th,{children:"k4"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"1"}),(0,i.jsx)(e.td,{children:"beijing"}),(0,i.jsx)(e.td,{children:"10000"}),(0,i.jsx)(e.td,{children:"1.1"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"2"}),(0,i.jsx)(e.td,{children:"shanghai"}),(0,i.jsx)(e.td,{children:"20000"}),(0,i.jsx)(e.td,{children:"1.2"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"3"}),(0,i.jsx)(e.td,{children:"guangzhou"}),(0,i.jsx)(e.td,{children:"30000"}),(0,i.jsx)(e.td,{children:"1.3"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"null"}),(0,i.jsx)(e.td,{children:"chongqing"}),(0,i.jsx)(e.td,{children:"40000"}),(0,i.jsx)(e.td,{children:"1.4"})]})]})]}),"\n",(0,i.jsxs)(e.ol,{start:"5",children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Perform conditional column transformation using the ",(0,i.jsx)(e.code,{children:"case when"})," function."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Assuming the table has 4 columns: ",(0,i.jsx)(e.code,{children:"k1"}),", ",(0,i.jsx)(e.code,{children:"k2"}),", ",(0,i.jsx)(e.code,{children:"k3"}),", ",(0,i.jsx)(e.code,{children:"k4"}),", and we want to transform the values ",(0,i.jsx)(e.code,{children:"beijing"}),", ",(0,i.jsx)(e.code,{children:"shanghai"}),", ",(0,i.jsx)(e.code,{children:"guangzhou"}),", ",(0,i.jsx)(e.code,{children:"chongqing"})," in the source data to their corresponding region IDs before loading:"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Plain",children:"Column 1                 -> k1\nColumn 2                 -> k2\nColumn 3 with region ID  -> k3\nColumn 4                 -> k4\n"})}),"\n",(0,i.jsxs)(e.ol,{start:"7",children:["\n",(0,i.jsx)(e.li,{children:"The order of column mapping should be as follows:"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Plain",children:'(k1, k2, tmpk3, k4, k3 = case tmpk3 when "beijing" then 1 when "shanghai" then 2 when "guangzhou" then 3 when "chongqing" then 4 else null end)\n'})}),"\n",(0,i.jsxs)(e.ol,{start:"8",children:["\n",(0,i.jsx)(e.li,{children:"The final data in the table would be as follows:"}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"k1"}),(0,i.jsx)(e.th,{children:"k2"}),(0,i.jsx)(e.th,{children:"k3"}),(0,i.jsx)(e.th,{children:"k4"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"1"}),(0,i.jsx)(e.td,{children:"100"}),(0,i.jsx)(e.td,{children:"1"}),(0,i.jsx)(e.td,{children:"1.1"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"2"}),(0,i.jsx)(e.td,{children:"200"}),(0,i.jsx)(e.td,{children:"2"}),(0,i.jsx)(e.td,{children:"1.2"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"3"}),(0,i.jsx)(e.td,{children:"300"}),(0,i.jsx)(e.td,{children:"3"}),(0,i.jsx)(e.td,{children:"1.3"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"null"}),(0,i.jsx)(e.td,{children:"400"}),(0,i.jsx)(e.td,{children:"4"}),(0,i.jsx)(e.td,{children:"1.4"})]})]})]}),"\n",(0,i.jsxs)(e.ol,{start:"9",children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Transform null values in the source file to 0 during load. Also, perform the region ID transformation as shown in example 2."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Assuming the table has ",(0,i.jsx)(e.code,{children:"k1, k2, k3, k4"})," as its four columns. While performing the region ID conversion, we also want to convert null values in the k1 column of the source data to 0 during load:"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Plain",children:"If Column 1 is null, then convert it to 0 -> k1\nColumn 2                                  -> k2\nColumn 3                                  -> k3\nColumn 4                                  -> k4\n"})}),"\n",(0,i.jsxs)(e.ol,{start:"11",children:["\n",(0,i.jsx)(e.li,{children:"The order of column mapping should be as follows:"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Plain",children:'(tmpk1, k2, tmpk3, k4, k1 = ifnull(tmpk1, 0), k3 = case tmpk3 when "beijing" then 1 when "shanghai" then 2 when "guangzhou" then 3 when "chongqing" then 4 else null end)\n'})}),"\n",(0,i.jsxs)(e.ol,{start:"12",children:["\n",(0,i.jsx)(e.li,{children:"The final data in the table would be as follows:"}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"k1"}),(0,i.jsx)(e.th,{children:"k2"}),(0,i.jsx)(e.th,{children:"k3"}),(0,i.jsx)(e.th,{children:"k4"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"1"}),(0,i.jsx)(e.td,{children:"100"}),(0,i.jsx)(e.td,{children:"1"}),(0,i.jsx)(e.td,{children:"1.1"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"2"}),(0,i.jsx)(e.td,{children:"200"}),(0,i.jsx)(e.td,{children:"2"}),(0,i.jsx)(e.td,{children:"1.2"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"3"}),(0,i.jsx)(e.td,{children:"300"}),(0,i.jsx)(e.td,{children:"3"}),(0,i.jsx)(e.td,{children:"1.3"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"0"}),(0,i.jsx)(e.td,{children:"400"}),(0,i.jsx)(e.td,{children:"4"}),(0,i.jsx)(e.td,{children:"1.4"})]})]})]}),"\n",(0,i.jsx)(e.h3,{id:"post-filtering",children:"Post-Filtering"}),"\n",(0,i.jsx)(e.p,{children:"After column mapping and transformation, we can filter out data that we don't want to load into Doris using filtering conditions. Let's illustrate this with an example:"}),"\n",(0,i.jsx)(e.p,{children:"Assume that the source file has 4 columns with the following content (the column names in the table header are for descriptive purposes only and are not actually present):"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Column 1"}),(0,i.jsx)(e.th,{children:"Column 2"}),(0,i.jsx)(e.th,{children:"Column 3"}),(0,i.jsx)(e.th,{children:"Column 4"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"1"}),(0,i.jsx)(e.td,{children:"100"}),(0,i.jsx)(e.td,{children:"beijing"}),(0,i.jsx)(e.td,{children:"1.1"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"2"}),(0,i.jsx)(e.td,{children:"200"}),(0,i.jsx)(e.td,{children:"shanghai"}),(0,i.jsx)(e.td,{children:"1.2"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"3"}),(0,i.jsx)(e.td,{children:"300"}),(0,i.jsx)(e.td,{children:"guangzhou"}),(0,i.jsx)(e.td,{children:"1.3"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"null"}),(0,i.jsx)(e.td,{children:"400"}),(0,i.jsx)(e.td,{children:"chongqing"}),(0,i.jsx)(e.td,{children:"1.4"})]})]})]}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Filtering with default column mapping and transformation."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Suppose the table has 4 columns: ",(0,i.jsx)(e.code,{children:"k1, k2, k3, k4"}),". We can define filtering conditions directly without column mapping and transformation. For example, if we only want to load data rows from the source file where the value in the 4th column is greater than 1.2, the filtering condition would be:"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"where k4 > 1.2\n"})}),"\n",(0,i.jsxs)(e.ol,{start:"3",children:["\n",(0,i.jsx)(e.li,{children:"The final data in the table would be as follows:"}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"k1"}),(0,i.jsx)(e.th,{children:"k2"}),(0,i.jsx)(e.th,{children:"k3"}),(0,i.jsx)(e.th,{children:"k4"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"3"}),(0,i.jsx)(e.td,{children:"300"}),(0,i.jsx)(e.td,{children:"guangzhou"}),(0,i.jsx)(e.td,{children:"1.3"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"null"}),(0,i.jsx)(e.td,{children:"400"}),(0,i.jsx)(e.td,{children:"chongqing"}),(0,i.jsx)(e.td,{children:"1.4"})]})]})]}),"\n",(0,i.jsxs)(e.ol,{start:"4",children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["In the default case, Doris performs column mapping in sequential order, so the 4th column in the source file is automatically mapped to the ",(0,i.jsx)(e.code,{children:"k4"})," column in the table."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Filtering transformed data."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Suppose the table has 4 columns: ",(0,i.jsx)(e.code,{children:"k1, k2, k3, k4"}),". In the column transformation example, we converted province names to IDs. Now, let's say we want to filter out data with an ID of 3. The transformation and filtering conditions would be as follows:"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Plain",children:'(k1, k2, tmpk3, k4, k3 = case tmpk3 when "beijing" then 1 when "shanghai" then 2 when "guangzhou" then 3 when "chongqing" then 4 else null end)\nwhere k3 != 3\n'})}),"\n",(0,i.jsxs)(e.ol,{start:"7",children:["\n",(0,i.jsx)(e.li,{children:"The final data in the table would be as follows:"}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"k1"}),(0,i.jsx)(e.th,{children:"k2"}),(0,i.jsx)(e.th,{children:"k3"}),(0,i.jsx)(e.th,{children:"k4"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"1"}),(0,i.jsx)(e.td,{children:"100"}),(0,i.jsx)(e.td,{children:"1"}),(0,i.jsx)(e.td,{children:"1.1"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"2"}),(0,i.jsx)(e.td,{children:"200"}),(0,i.jsx)(e.td,{children:"2"}),(0,i.jsx)(e.td,{children:"1.2"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"null"}),(0,i.jsx)(e.td,{children:"400"}),(0,i.jsx)(e.td,{children:"4"}),(0,i.jsx)(e.td,{children:"1.4"})]})]})]}),"\n",(0,i.jsxs)(e.ol,{start:"8",children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Here, we can observe that the column values used for filtering are the final transformed column values, not the original data."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Filtering with multiple conditions."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Suppose the table has 4 columns: ",(0,i.jsx)(e.code,{children:"k1, k2, k3, k4"}),". We want to filter out data where the ",(0,i.jsx)(e.code,{children:"k1"})," column is null and the ",(0,i.jsx)(e.code,{children:"k4"})," column is less than 1.2. The filtering condition would be:"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Plain",children:"where k1 is not null and k4 >= 1.2\n"})}),"\n",(0,i.jsxs)(e.ol,{start:"11",children:["\n",(0,i.jsx)(e.li,{children:"The final data in the table would be as follows:"}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"k1"}),(0,i.jsx)(e.th,{children:"k2"}),(0,i.jsx)(e.th,{children:"k3"}),(0,i.jsx)(e.th,{children:"k4"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"2"}),(0,i.jsx)(e.td,{children:"200"}),(0,i.jsx)(e.td,{children:"2"}),(0,i.jsx)(e.td,{children:"1.2"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"3"}),(0,i.jsx)(e.td,{children:"300"}),(0,i.jsx)(e.td,{children:"3"}),(0,i.jsx)(e.td,{children:"1.3"})]})]})]})]})}function a(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(o,{...n})}):o(n)}},250065:function(n,e,l){l.d(e,{Z:function(){return d},a:function(){return t}});var s=l(667294);let i={},r=s.createContext(i);function t(n){let e=s.useContext(r);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:t(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);