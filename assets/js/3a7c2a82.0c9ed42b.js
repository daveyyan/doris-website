"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["310516"],{717433:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>d,default:()=>h,assets:()=>l,toc:()=>c,frontMatter:()=>r});var s=JSON.parse('{"id":"ecosystem/cloudcanal","title":"BladePipe","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/ecosystem/cloudcanal.md","sourceDirName":"ecosystem","slug":"/ecosystem/cloudcanal","permalink":"/docs/ecosystem/cloudcanal","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"BladePipe","language":"en"},"sidebar":"docs","previous":{"title":"DataGrip","permalink":"/docs/ecosystem/bi/datagrip"},"next":{"title":"DataX Doriswriter","permalink":"/docs/ecosystem/datax"}}'),i=t("785893"),a=t("250065");let r={title:"BladePipe",language:"en"},d=void 0,l={},c=[{value:"Functions",id:"functions",level:2},{value:"Installation",id:"installation",level:2},{value:"Example",id:"example",level:2},{value:"Add DataSources",id:"add-datasources",level:3},{value:"Create a DataJob",id:"create-a-datajob",level:3}];function o(e){let n={a:"a",admonition:"admonition",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["BladePipe is a ",(0,i.jsx)(n.strong,{children:"real-time end-to-end data replication"})," tool, moving data between ",(0,i.jsx)(n.strong,{children:"30+"})," databases, message queues, search engines, caching, real-time data warehouses, data lakes and more, with ",(0,i.jsx)(n.strong,{children:"ultra-low latency less than 3 seconds"}),". It features efficiency, stability and scalability, compatibility with diverse database engines, one-stop management, enhanced security, and complex data transformation."]}),"\n",(0,i.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,i.jsxs)(n.p,{children:["BladePipe presents a visual management interface, allowing you to easily create DataJobs to realize ",(0,i.jsx)(n.strong,{children:"schema migration, data migration, synchronization, verification and correction"}),", etc. In addition, more refined and customized configurations are supported by setting parameters. Now BladePipe supports data movement from the following source DataSources to Doris:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Source DataSource"}),(0,i.jsx)(n.th,{children:"Schema Migration"}),(0,i.jsx)(n.th,{children:"Data Migration"}),(0,i.jsx)(n.th,{children:"Data Sync"}),(0,i.jsx)(n.th,{children:"Verification & Correction"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"MySQL/MariaDB/AuroraMySQL"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"Yes"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Oracle"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"Yes"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"PostgreSQL/AuroraPostgreSQL"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"Yes"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"SQL Server"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"Yes"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Kafka"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"No"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"AutoMQ"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"No"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"TiDB"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"Yes"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Hana"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"Yes"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"PolarDB-X"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"Yes"})]})]})]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["For more functions and parameter settings, please refer to ",(0,i.jsx)(n.a,{href:"https://doc.bladepipe.com/dataMigrationAndSync/connection/mysql2?target=Doris",children:"BladePipe Connections"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(n.p,{children:["Follow the instructions in ",(0,i.jsx)(n.a,{href:"https://doc.bladepipe.com/productOP/docker/install_worker_docker",children:"Install Worker (Docker)"})," or ",(0,i.jsx)(n.a,{href:"https://doc.bladepipe.com/productOP/binary/install_worker_binary",children:"Install Worker (Binary)"})," to download and install a BladePipe Worker."]}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"Taking a MySQL instance as an example, the following part describes how to move data from MySQL to Doris."}),"\n",(0,i.jsx)(n.h3,{id:"add-datasources",children:"Add DataSources"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Log in to the ",(0,i.jsx)(n.a,{href:"https://cloud.bladepipe.com/",children:"BladePipe Cloud"}),". Click ",(0,i.jsx)(n.strong,{children:"DataSource"})," > ",(0,i.jsx)(n.strong,{children:"Add DataSource"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Select MySQL and Doris as the Type respectively, and fill in the setup form accordingly.\n",(0,i.jsx)(n.img,{alt:"Add DataSources-1",src:t(616529).Z+"",width:"7008",height:"3868"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.strong,{children:"Test Connection"}),". After successful connection, click ",(0,i.jsx)(n.strong,{children:"Add DataSource"})," to add the DataSource.\n",(0,i.jsx)(n.img,{alt:"Add DataSources-2",src:t(554993).Z+"",width:"7020",height:"952"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"create-a-datajob",children:"Create a DataJob"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click DataJob > ",(0,i.jsx)(n.a,{href:"https://doc.bladepipe.com/operation/job_manage/create_job/create_full_incre_task",children:"Create DataJob"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Select the source and target DataSources, and click ",(0,i.jsx)(n.strong,{children:"Test Connection"})," to ensure the connection to the source and target DataSources are both successful.\n",(0,i.jsx)(n.img,{alt:"Create a DataJob-1",src:t(479043).Z+"",width:"7008",height:"3880"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Select ",(0,i.jsx)(n.strong,{children:"Incremental"})," for DataJob Type, together with the ",(0,i.jsx)(n.strong,{children:"Full Data"})," option.\n",(0,i.jsx)(n.img,{alt:"Create a DataJob-2",src:t(632105).Z+"",width:"7004",height:"3888"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Select the tables to be replicated.\n",(0,i.jsx)(n.img,{alt:"Create a DataJob-3",src:t(186076).Z+"",width:"7040",height:"3864"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Select the columns to be replicated.\n",(0,i.jsx)(n.img,{alt:"Create a DataJob-4",src:t(83072).Z+"",width:"7056",height:"3876"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Confirm the DataJob creation."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The DataJob runs automatically. BladePipe will automatically run the following DataTasks:"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Schema Migration"}),": The schemas of the source tables will be migrated to the target instance."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Full Data"}),": All existing data of the source tables will be fully migrated to the target instance."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Incremental"}),": Ongoing data changes will be continuously synchronized to the target instance.\n",(0,i.jsx)(n.img,{alt:"Create a DataJob-5",src:t(858434).Z+"",width:"7044",height:"968"})]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},616529:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/bp-doris-1-edc2b9025db34ae70a10e145c30922c8.png"},554993:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/bp-doris-2-9b96de6808c3c4ca6e285fe43a5324ea.png"},479043:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/bp-doris-3-b40712eaa2421ebdd8dab6291115a338.png"},632105:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/bp-doris-4-e7e5c0640e54163ded2d4b94de151923.png"},186076:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/bp-doris-5-cda03389cff177055369aa4c73f24e25.png"},83072:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/bp-doris-6-1a51a820d22b9bcb1c48aa364451438d.png"},858434:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/bp-doris-8-eb7dd8e44eb2666bfaa6fbcfc8641885.png"},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return r}});var s=t(667294);let i={},a=s.createContext(i);function r(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);