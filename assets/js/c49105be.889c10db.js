"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["440121"],{255465:function(t,e,n){n.r(e),n.d(e,{metadata:()=>a,contentTitle:()=>r,default:()=>c,assets:()=>l,toc:()=>u,frontMatter:()=>i});var a=JSON.parse('{"id":"sql-manual/sql-reference/Data-Manipulation-Statements/Load/MULTI-LOAD","title":"MULTI-LOAD","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Load/MULTI-LOAD.md","sourceDirName":"sql-manual/sql-reference/Data-Manipulation-Statements/Load","slug":"/sql-manual/sql-reference/Data-Manipulation-Statements/Load/MULTI-LOAD","permalink":"/docs/2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Load/MULTI-LOAD","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"MULTI-LOAD","language":"en"},"sidebar":"docs","previous":{"title":"STREAM-LOAD","permalink":"/docs/2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Load/STREAM-LOAD"},"next":{"title":"BROKER-LOAD","permalink":"/docs/2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Load/BROKER-LOAD"}}'),s=n("785893"),o=n("250065");let i={title:"MULTI-LOAD",language:"en"},r=void 0,l={},u=[{value:"MULTI-LOAD",id:"multi-load",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function d(t){let e={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"multi-load",children:"MULTI-LOAD"}),"\n",(0,s.jsx)(e.h3,{id:"name",children:"Name"}),"\n",(0,s.jsx)(e.p,{children:"MULTI LOAD"}),"\n",(0,s.jsx)(e.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(e.p,{children:"Users submit multiple import jobs through the HTTP protocol. Multi Load can ensure the atomic effect of multiple import jobs"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"Syntax:\n    curl --location-trusted -u user:passwd -XPOST http://host:port/api/{db}/_multi_start?label=xxx\n    curl --location-trusted -u user:passwd -T data.file http://host:port/api/{db}/{table1}/_load?label=xxx\\&sub_label=yyy\n    curl --location-trusted -u user:passwd -T data.file http://host:port/api/{db}/{table2}/_load?label=xxx\\&sub_label=zzz\n    curl --location-trusted -u user:passwd -XPOST http://host:port/api/{db}/_multi_commit?label=xxx\n    curl --location-trusted -u user:passwd -XPOST http://host:port/api/{db}/_multi_desc?label=xxx\n\nOn the basis of 'MINI LOAD', 'MULTI LOAD' can support users to import to multiple tables at the same time. The specific commands are shown above.\n'/api/{db}/_multi_start' starts a multi-table import task\n'/api/{db}/{table}/_load' adds a table to be imported to an import task. The main difference from 'MINI LOAD' is that the 'sub_label' parameter needs to be passed in\n'/api/{db}/_multi_commit' submits the entire multi-table import task, and starts processing in the background\n'/api/{db}/_multi_abort' Abort a multi-table import task\n'/api/{db}/_multi_desc' can display the number of jobs submitted by a multi-table import task\n\nDescription of the HTTP protocol\n    Authorization Authentication Currently, Doris uses HTTP Basic authorization authentication. So you need to specify the username and password when importing\n                        This method is to pass the password in clear text, since we are currently in an intranet environment. . .\n\n    Expect Doris needs to send the http request, it needs to have 'Expect' header information, the content is '100-continue'\n                        why? Because we need to redirect the request, before transmitting the data content,\n                        This can avoid causing multiple transmissions of data, thereby improving efficiency.\n\n    Content-Length Doris needs to send the request with the 'Content-Length' header. If the content sent is greater than\n                        If the 'Content-Length' is less, then Palo thinks that there is a problem with the transmission, and fails to submit the task.\n                        NOTE: If more data is sent than 'Content-Length', then Doris only reads 'Content-Length'\n                        length content and import\n\nParameter Description:\n    user: If the user is in the default_cluster, the user is the user_name. Otherwise user_name@cluster_name.\n\n    label: Used to specify the label number imported in this batch, which is used for later job status query, etc.\n                        This parameter is required.\n\n    sub_label: Used to specify the subversion number inside a multi-table import task. For loads imported from multiple tables, this parameter must be passed in.\n\n    columns: used to describe the corresponding column names in the import file.\n                        If it is not passed in, then the order of the columns in the file is considered to be the same as the order in which the table was created.\n                        The specified method is comma-separated, for example: columns=k1,k2,k3,k4\n\n    column_separator: used to specify the separator between columns, the default is '\\t'\n                        NOTE: url encoding is required, for example, '\\t' needs to be specified as the delimiter,\n                        Then you should pass in 'column_separator=%09'\n\n    max_filter_ratio: used to specify the maximum ratio of non-standard data allowed to filter, the default is 0, no filtering is allowed\n                        The custom specification should be as follows: 'max_filter_ratio=0.2', which means 20% error rate is allowed\n                        Passing in has effect when '_multi_start'\n\nNOTE:\n    1. This import method currently completes the import work on one machine, so it is not suitable for import work with a large amount of data.\n    It is recommended that the amount of imported data should not exceed 1GB\n\n    2. Currently it is not possible to submit multiple files using `curl -T \"{file1, file2}\"`, because curl splits them into multiple files\n    The request is sent. Multiple requests cannot share a label number, so it cannot be used.\n\n    3. Supports the use of curl to import data into Doris in a way similar to streaming, but only after the streaming ends Doris\n    The real import behavior will occur, and the amount of data in this way cannot be too large.\n"})}),"\n",(0,s.jsx)(e.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"1. Import the data in the local file 'testData1' into the table 'testTbl1' in the database 'testDb', and\nImport the data of 'testData2' into table 'testTbl2' in 'testDb' (user is in defalut_cluster)\n    curl --location-trusted -u root -XPOST http://host:port/api/testDb/_multi_start?label=123\n    curl --location-trusted -u root -T testData1 http://host:port/api/testDb/testTbl1/_load?label=123\\&sub_label=1\n    curl --location-trusted -u root -T testData2 http://host:port/api/testDb/testTbl2/_load?label=123\\&sub_label=2\n    curl --location-trusted -u root -XPOST http://host:port/api/testDb/_multi_commit?label=123\n\n2. Abandoned in the middle of multi-table import (user is in defalut_cluster)\n    curl --location-trusted -u root -XPOST http://host:port/api/testDb/_multi_start?label=123\n    curl --location-trusted -u root -T testData1 http://host:port/api/testDb/testTbl1/_load?label=123\\&sub_label=1\n    curl --location-trusted -u root -XPOST http://host:port/api/testDb/_multi_abort?label=123\n\n3. Multi-table import to see how much content has been submitted (the user is in the defalut_cluster)\n    curl --location-trusted -u root -XPOST http://host:port/api/testDb/_multi_start?label=123\n    curl --location-trusted -u root -T testData1 http://host:port/api/testDb/testTbl1/_load?label=123\\&sub_label=1\n    curl --location-trusted -u root -XPOST http://host:port/api/testDb/_multi_desc?label=123\n"})}),"\n",(0,s.jsx)(e.h3,{id:"keywords",children:"Keywords"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"MULTI, MINI, LOAD\n"})}),"\n",(0,s.jsx)(e.h3,{id:"best-practice",children:"Best Practice"})]})}function c(t={}){let{wrapper:e}={...(0,o.a)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(d,{...t})}):d(t)}},250065:function(t,e,n){n.d(e,{Z:function(){return r},a:function(){return i}});var a=n(667294);let s={},o=a.createContext(s);function i(t){let e=a.useContext(o);return a.useMemo(function(){return"function"==typeof t?t(e):{...e,...t}},[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:i(t.components),a.createElement(o.Provider,{value:e},t.children)}}}]);