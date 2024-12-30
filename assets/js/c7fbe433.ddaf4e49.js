"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["55398"],{718823:function(e,t,n){n.r(t),n.d(t,{metadata:()=>a,contentTitle:()=>o,default:()=>c,assets:()=>i,toc:()=>d,frontMatter:()=>r});var a=JSON.parse('{"id":"data-operate/import/complex-types/hll","title":"HLL","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/data-operate/import/complex-types/hll.md","sourceDirName":"data-operate/import/complex-types","slug":"/data-operate/import/complex-types/hll","permalink":"/docs/3.0/data-operate/import/complex-types/hll","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"HLL","language":"en"}}'),l=n("785893"),s=n("250065");let r={title:"HLL",language:"en"},o=void 0,i={},d=[{value:"Usage Example",id:"usage-example",level:2},{value:"Step 1: Prepare Data",id:"step-1-prepare-data",level:3},{value:"Step 2: Create Table in Database",id:"step-2-create-table-in-database",level:3},{value:"Step 3: Load Data",id:"step-3-load-data",level:3},{value:"Step 4: Check Loaded Data",id:"step-4-check-loaded-data",level:3}];function p(e){let t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(t.p,{children:["HLL is used for approximate deduplication and performs better than Count Distinct when dealing with large data volumes. The load of HLL needs to be combined with functions like hll_hash. For more documentation, refer to ",(0,l.jsx)(t.a,{href:"/docs/3.0/sql-manual/sql-data-types/aggregate/HLL",children:"HLL"}),"."]}),"\n",(0,l.jsx)(t.h2,{id:"usage-example",children:"Usage Example"}),"\n",(0,l.jsx)(t.h3,{id:"step-1-prepare-data",children:"Step 1: Prepare Data"}),"\n",(0,l.jsx)(t.p,{children:"Create the following CSV file: test_hll.csv"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:"koga\nnijg\nlojn\nlofn\njfin\nkon\nnhga\nnfubg\nhuang\nbuag\n"})}),"\n",(0,l.jsx)(t.h3,{id:"step-2-create-table-in-database",children:"Step 2: Create Table in Database"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:'CREATE TABLE testdb.test_hll(\n    typ_id           BIGINT          NULL   COMMENT "ID",\n    typ_name         VARCHAR(10)     NULL   COMMENT "NAME",\n    pv               hll hll_union   NOT NULL   COMMENT "hll"\n)\nAGGREGATE KEY(typ_id,typ_name)\nDISTRIBUTED BY HASH(typ_id) BUCKETS 10;\n'})}),"\n",(0,l.jsx)(t.h3,{id:"step-3-load-data",children:"Step 3: Load Data"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:'curl --location-trusted -u <doris_user>:<doris_password> \\\n    -H "column_separator:|" \\\n    -H "columns:typ_id,typ_name,pv=hll_hash(typ_id)" \\\n    -T test_hll.csv \\\n    -XPUT http://<fe_ip>:<fe_http_port>/api/testdb/test_hll/_stream_load\n'})}),"\n",(0,l.jsx)(t.h3,{id:"step-4-check-loaded-data",children:"Step 4: Check Loaded Data"}),"\n",(0,l.jsx)(t.p,{children:"Use hll_cardinality to query:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:"mysql> select typ_id,typ_name,hll_cardinality(pv) from testdb.test_hll;\n+--------+----------+---------------------+\n| typ_id | typ_name | hll_cardinality(pv) |\n+--------+----------+---------------------+\n|   1010 | buag     |                   1 |\n|   1002 | nijg     |                   1 |\n|   1001 | koga     |                   1 |\n|   1008 | nfubg    |                   1 |\n|   1005 | jfin     |                   1 |\n|   1009 | huang    |                   1 |\n|   1004 | lofn     |                   1 |\n|   1007 | nhga     |                   1 |\n|   1003 | lojn     |                   1 |\n|   1006 | kon      |                   1 |\n+--------+----------+---------------------+\n10 rows in set (0.06 sec)\n"})})]})}function c(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return r}});var a=n(667294);let l={},s=a.createContext(l);function r(e){let t=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);