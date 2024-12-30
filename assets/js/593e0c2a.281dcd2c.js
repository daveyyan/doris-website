"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["757105"],{487827:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>l,default:()=>h,assets:()=>o,toc:()=>c,frontMatter:()=>a});var t=JSON.parse('{"id":"admin-manual/data-admin/ccr","title":"CCR (Cross Cluster Replication)","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/admin-manual/data-admin/ccr.md","sourceDirName":"admin-manual/data-admin","slug":"/admin-manual/data-admin/ccr","permalink":"/docs/admin-manual/data-admin/ccr","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"CCR (Cross Cluster Replication)","language":"en"},"sidebar":"docs","previous":{"title":"Restore","permalink":"/docs/admin-manual/data-admin/backup-restore/restore"},"next":{"title":"Recover from Recycle Bin","permalink":"/docs/admin-manual/data-admin/recyclebin"}}'),r=s("785893"),i=s("250065");let a={title:"CCR (Cross Cluster Replication)",language:"en"},l="Cross Cluster Replication (CCR)",o={},c=[{value:"Overview",id:"overview",level:2},{value:"Design",id:"design",level:2},{value:"Concepts",id:"concepts",level:3},{value:"Architecture description",id:"architecture-description",level:3},{value:"Usage",id:"usage",level:3},{value:"Operation manual for syncer",id:"operation-manual-for-syncer",level:2},{value:"Start syncer",id:"start-syncer",level:3},{value:"Stop syncer",id:"stop-syncer",level:3},{value:"Syncer operations",id:"syncer-operations",level:3},{value:"Open binlog for all tables in the database",id:"open-binlog-for-all-tables-in-the-database",level:3},{value:"High availability of syncer",id:"high-availability-of-syncer",level:2},{value:"Privilege requirements",id:"privilege-requirements",level:3},{value:"Usage restrictions",id:"usage-restrictions",level:2},{value:"Network constraints",id:"network-constraints",level:3},{value:"ThriftPool constraints",id:"thriftpool-constraints",level:3},{value:"Version requirements",id:"version-requirements",level:3},{value:"Unsupported operations",id:"unsupported-operations",level:3},{value:"Feature",id:"feature",level:2},{value:"Rate limit",id:"rate-limit",level:3},{value:"IS_BEING_SYNCED",id:"is_being_synced",level:2},{value:"Implementation",id:"implementation",level:3},{value:"Note",id:"note",level:3}];function d(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",mdxadmonitiontitle:"mdxadmonitiontitle",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"cross-cluster-replication-ccr",children:"Cross Cluster Replication (CCR)"})}),"\n",(0,r.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(n.p,{children:"Cross Cluster Replication (CCR) enables the synchronization of data changes from a source cluster to a target cluster at the database/table level. This feature can be used to ensure data availability for online services, isolate offline and online workloads, and build multiple data centers across various sites."}),"\n",(0,r.jsx)(n.p,{children:"CCR is applicable to the following scenarios:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Disaster recovery: This involves backing up enterprise data to another cluster and data center. In the event of a sudden incident causing business interruption or data loss, companies can recover data from the backup or quickly switch to the backup cluster. Disaster recovery is typically a must-have feature in use cases with high SLA requirements, such as those in finance, healthcare, and e-commerce."}),"\n",(0,r.jsx)(n.li,{children:"Read/write separation: This is to isolate querying and writing operations to reduce their mutual impact and improve resource utilization. For example, in cases of high writing pressure or high concurrency, read/write separation can distribute read and write operations to read-only and write-only database instances in various regions. This helps ensure high database performance and stability."}),"\n",(0,r.jsx)(n.li,{children:"Data transfer between headquarters and branch offices: In order to have unified data control and analysis within a corporation, the headquarters usually requires timely data synchronization from branch offices located in different regions. This avoids management confusion and wrong decision-making based on inconsistent data."}),"\n",(0,r.jsx)(n.li,{children:"Isolated upgrades: During system cluster upgrades, there might be a need to roll back to a previous version. Many traditional upgrade methods do not allow rolling back due to incompatible metadata. CCR in Doris can address this issue by building a standby cluster for upgrade and conducting dual-running verification. Users can ungrade the clusters one by one. CCR is not dependent on specific versions, making version rollback feasible."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"design",children:"Design"}),"\n",(0,r.jsx)(n.h3,{id:"concepts",children:"Concepts"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Source cluster: the cluster where business data is written and originates from, requiring Doris version 2.0"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Target cluster: the destination cluster for cross cluster replication, requiring version 2.0"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Binlog: the change log of the source cluster, including schema and data changes"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Syncer: a lightweight process"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"architecture-description",children:"Architecture description"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"ccr-architecture-description",src:s(561852).Z+"",width:"3488",height:"1064"})}),"\n",(0,r.jsx)(n.p,{children:"CCR relies on a lightweight process called syncer. Syncers retrieve binlogs from the source cluster, directly apply the metadata to the target cluster, and notify the target cluster to pull data from the source cluster. CCR allows both full and incremental data migration."}),"\n",(0,r.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n.p,{children:"The usage of CCR is straightforward. Simply start the syncer service and send a command, and the syncers will take care of the rest."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Deploy the source Doris cluster."}),"\n",(0,r.jsx)(n.li,{children:"Deploy the target Doris cluster."}),"\n",(0,r.jsx)(n.li,{children:"Both the source and target clusters need to enable binlog. Configure the following information in the fe.conf and be.conf files of the source and target clusters:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"enable_feature_binlog=true\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsx)(n.li,{children:"Deploy syncers"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u200BBuild CCR syncer"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"git clone https://github.com/selectdb/ccr-syncer\ncd ccr-syncer   \nbash build.sh <-j NUM_OF_THREAD> <--output SYNCER_OUTPUT_DIR>\ncd SYNCER_OUTPUT_DIR# Contact the Doris community for a free CCR binary package\n"})}),"\n",(0,r.jsx)(n.p,{children:"Start and stop syncer"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"# Start\ncd bin && sh start_syncer.sh --daemon\n   \n# Stop\nsh stop_syncer.sh\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"5",children:["\n",(0,r.jsx)(n.li,{children:"Enable binlog in the source cluster."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'-- If you want to synchronize the entire database, you can execute the following script:\nvim shell/enable_db_binlog.sh\nModify host, port, user, password, and db in the source cluster\nOr ./enable_db_binlog.sh --host $host --port $port --user $user --password $password --db $db\n\n-- If you want to synchronize a single table, you can execute the following script and enable binlog for the target table:\nALTER TABLE enable_binlog SET ("binlog.enable" = "true");\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"6",children:["\n",(0,r.jsx)(n.li,{children:"Launch a synchronization task to the syncer"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'curl -X POST -H "Content-Type: application/json" -d \'{\n    "name": "ccr_test",\n    "src": {\n      "host": "localhost",\n      "port": "9030",\n      "thrift_port": "9020",\n      "user": "root",\n      "password": "",\n      "database": "your_db_name",\n      "table": "your_table_name"\n    },\n    "dest": {\n      "host": "localhost",\n      "port": "9030",\n      "thrift_port": "9020",\n      "user": "root",\n      "password": "",\n      "database": "your_db_name",\n      "table": "your_table_name"\n    }\n}\' http://127.0.0.1:9190/create_ccr\n'})}),"\n",(0,r.jsx)(n.p,{children:"Parameter description:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"name: name of the CCR synchronization task, should be unique\nhost, port: host and mysql(jdbc) port for the master FE for the corresponding cluster\nuser, password: the credentials used by the syncer to initiate transactions, fetch data, etc.\nIf it is synchronization at the database level, specify your_db_name and leave your_table_name empty\nIf it is synchronization at the table level, specify both your_db_name and your_table_name\nThe synchronization task name can only be used once.\n"})}),"\n",(0,r.jsx)(n.h2,{id:"operation-manual-for-syncer",children:"Operation manual for syncer"}),"\n",(0,r.jsx)(n.h3,{id:"start-syncer",children:"Start syncer"}),"\n",(0,r.jsxs)(n.p,{children:["Start syncer according to the configurations and save a pid file in the default or specified path. The name of the pid file should follow ",(0,r.jsx)(n.code,{children:"host_port.pid"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Output file structure"})}),"\n",(0,r.jsx)(n.p,{children:"The file structure can be seen under the output path after compilation:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"output_dir\n    bin\n        ccr_syncer\n        enable_db_binlog.sh\n        start_syncer.sh\n        stop_syncer.sh\n    db\n        [ccr.db] # Generated after running with the default configurations.\n    log\n        [ccr_syncer.log] # Generated after running with the default configurations.\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"The start_syncer.sh in the following text refers to the start_syncer.sh under its corresponding path."})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Start options"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"--daemon"})}),"\n",(0,r.jsx)(n.p,{children:"Run syncer in the background, set to false by default."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"bash bin/start_syncer.sh --daemon\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"--db_type"})}),"\n",(0,r.jsxs)(n.p,{children:["Syncer can currently use two databases to store its metadata, ",(0,r.jsx)(n.code,{children:"sqlite3 "}),"(for local storage) and ",(0,r.jsx)(n.code,{children:"mysql "}),"(for local or remote storage)."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"bash bin/start_syncer.sh --db_type mysql\n"})}),"\n",(0,r.jsx)(n.p,{children:"The default value is sqlite3."}),"\n",(0,r.jsxs)(n.p,{children:["When using MySQL to store metadata, syncer will use ",(0,r.jsx)(n.code,{children:"CREATE IF NOT EXISTS "}),"to create a database called ",(0,r.jsx)(n.code,{children:"ccr"}),", where the metadata table related to CCR will be saved."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"--db_dir"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"This option only works when db uses"})," ",(0,r.jsxs)(n.strong,{children:[(0,r.jsx)(n.code,{children:"sqlite3"}),"****."]})]}),"\n",(0,r.jsx)(n.p,{children:"It allows you to specify the name and path of the db file generated by sqlite3."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"bash bin/start_syncer.sh --db_dir /path/to/ccr.db\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The default path is ",(0,r.jsx)(n.code,{children:"SYNCER_OUTPUT_DIR/db"})," and the default file name is ",(0,r.jsx)(n.code,{children:"ccr.db"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"--db_host & db_port & db_user & db_password"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"This option only works when db uses"})," ",(0,r.jsxs)(n.strong,{children:[(0,r.jsx)(n.code,{children:"mysql"}),"****."]})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:'bash bin/start_syncer.sh --db_host 127.0.0.1 --db_port 3306 --db_user root --db_password "qwe123456"\n'})}),"\n",(0,r.jsx)(n.p,{children:"The default values of db_host and db_port are shown in the example. The default values of db_user and db_password are empty."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"--log_dir"})}),"\n",(0,r.jsx)(n.p,{children:"Output path of the logs:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"bash bin/start_syncer.sh --log_dir /path/to/ccr_syncer.log\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The default path is",(0,r.jsx)(n.code,{children:"SYNCER_OUTPUT_DIR/log"})," and the default file name is ",(0,r.jsx)(n.code,{children:"ccr_syncer.log"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"--log_level"})}),"\n",(0,r.jsx)(n.p,{children:"Used to specify the output level of syncer logs."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"bash bin/start_syncer.sh --log_level info\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The format of the log is as follows, where the hook will only be printed when ",(0,r.jsx)(n.code,{children:"log_level > info "}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"#        time         level        msg                  hooks\n[2023-07-18 16:30:18] TRACE This is trace type. ccrName=xxx line=xxx\n[2023-07-18 16:30:18] DEBUG This is debug type. ccrName=xxx line=xxx\n[2023-07-18 16:30:18]  INFO This is info type. ccrName=xxx line=xxx\n[2023-07-18 16:30:18]  WARN This is warn type. ccrName=xxx line=xxx\n[2023-07-18 16:30:18] ERROR This is error type. ccrName=xxx line=xxx\n[2023-07-18 16:30:18] FATAL This is fatal type. ccrName=xxx line=xxx\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Under --daemon, the default value of log_level is ",(0,r.jsx)(n.code,{children:"info"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["When running in the foreground, log_level defaults to ",(0,r.jsx)(n.code,{children:"trace"}),", and logs are saved to log_dir using the tee command."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"--host && --port"})}),"\n",(0,r.jsxs)(n.p,{children:["Used to specify the host and port of syncer, where host only plays the role of distinguishing itself in the cluster, which can be understood as the name of syncer, and the name of syncer in the cluster is ",(0,r.jsx)(n.code,{children:"host: port"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"bash bin/start_syncer.sh --host 127.0.0.1 --port 9190\n"})}),"\n",(0,r.jsx)(n.p,{children:"The default value of host is 127.0.0.1, and the default value of port is 9190."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"--pid_dir"})}),"\n",(0,r.jsx)(n.p,{children:"Used to specify the storage path of the pid file"}),"\n",(0,r.jsx)(n.p,{children:"The pid file is the credentials for closing the syncer. It is used in the stop_syncer.sh script. It saves the corresponding syncer process number. In order to facilitate management of syncer, you can specify the storage path of the pid file."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"bash bin/start_syncer.sh --pid_dir /path/to/pids\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The default value is ",(0,r.jsx)(n.code,{children:"SYNCER_OUTPUT_DIR/bin"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"stop-syncer",children:"Stop syncer"}),"\n",(0,r.jsxs)(n.p,{children:["Stop the syncer according to the process number in the pid file under the default or specified path. The name of the pid file should follow ",(0,r.jsx)(n.code,{children:"host_port.pid"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Output file structure"})}),"\n",(0,r.jsx)(n.p,{children:"The file structure can be seen under the output path after compilation:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"output_dir\n    bin\n        ccr_syncer\n        enable_db_binlog.sh\n        start_syncer.sh\n        stop_syncer.sh\n    db\n        [ccr.db] # Generated after running with the default configurations.\n    log\n        [ccr_syncer.log] # Generated after running with the default configurations.\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"The start_syncer.sh in the following text refers to the start_syncer.sh under its corresponding path."})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Stop options"})}),"\n",(0,r.jsx)(n.p,{children:"Syncers can be stopped in three ways:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Stop a single syncer in the directory"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Specify the host and port of the syncer to be stopped. Be sure to keep it consistent with the host specified when start_syncer"}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"Batch stop the specified syncers in the directory"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Specify the names of the pid files to be stopped, wrap the names in ",(0,r.jsx)(n.code,{children:'""'})," and separate them with spaces."]}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"Stop all syncers in the directory"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Follow the default configurations."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"--pid_dir"})}),"\n",(0,r.jsx)(n.p,{children:"Specify the directory where the pid file is located. The above three stopping methods all depend on the directory where the pid file is located for execution."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"bash bin/stop_syncer.sh --pid_dir /path/to/pids\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The effect of the above example is to close the syncers corresponding to all pid files under ",(0,r.jsx)(n.code,{children:"/path/to/pids "}),"( ",(0,r.jsx)(n.strong,{children:"method 3"})," ). ",(0,r.jsx)(n.code,{children:"-- pid_dir "}),"can be used in combination with the above three syncer stopping methods."]}),"\n",(0,r.jsxs)(n.p,{children:["The default value is ",(0,r.jsx)(n.code,{children:"SYNCER_OUTPUT_DIR/bin"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"--host && --port"})}),"\n",(0,r.jsx)(n.p,{children:"Stop the syncer corresponding to host: port in the pid_dir path."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"bash bin/stop_syncer.sh --host 127.0.0.1 --port 9190\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The default value of host is 127.0.0.1, and the default value of port is empty. That is, specifying the host alone will degrade ",(0,r.jsx)(n.strong,{children:"method 1"})," to ",(0,r.jsx)(n.strong,{children:"method 3"}),". ",(0,r.jsx)(n.strong,{children:"Method 1"})," will only take effect when neither the host nor the port is empty."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"--files"})}),"\n",(0,r.jsx)(n.p,{children:"Stop the syncer corresponding to the specified pid file name in the pid_dir path."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'bash bin/stop_syncer.sh --files "127.0.0.1_9190.pid 127.0.0.1_9191.pid"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["The file names should be wrapped in ",(0,r.jsx)(n.code,{children:'" "'})," and separated with spaces."]}),"\n",(0,r.jsx)(n.h3,{id:"syncer-operations",children:"Syncer operations"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Template for requests"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'curl -X POST -H "Content-Type: application/json" -d {json_body} http://ccr_syncer_host:ccr_syncer_port/operator\n'})}),"\n",(0,r.jsx)(n.p,{children:"json_body: send operation information in JSON format"}),"\n",(0,r.jsx)(n.p,{children:"operator: different operations for syncer"}),"\n",(0,r.jsxs)(n.p,{children:['The interface returns JSON. If successful, the "success" field will be true. Conversely, if there is an error, it will be false, and then there will be an ',(0,r.jsx)(n.code,{children:"ErrMsgs"})," field."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-JSON",children:'{"success":true}\n\nor\n\n{"success":false,"error_msg":"job ccr_test not exist"}\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Operators"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"create_ccr"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Create CCR tasks"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'curl -X POST -H "Content-Type: application/json" -d \'{\n    "name": "ccr_test",\n    "src": {\n    "host": "localhost",\n    "port": "9030",\n    "thrift_port": "9020",\n    "user": "root",\n    "password": "",\n    "database": "demo",\n    "table": "example_tbl"\n    },\n    "dest": {\n    "host": "localhost",\n    "port": "9030",\n    "thrift_port": "9020",\n    "user": "root",\n    "password": "",\n    "database": "ccrt",\n    "table": "copy"\n    }\n}\' http://127.0.0.1:9190/create_ccr\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"name: the name of the CCR synchronization task, should be unique"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"host, port: correspond to the host and mysql (jdbc) port of the cluster's master"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"thrift_port: corresponds to the rpc_port of the FE"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"user, password: the credentials used by the syncer to initiate transactions, fetch data, etc."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"database, table:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"If it is a database-level synchronization, fill in the database name and leave the table name empty."}),"\n",(0,r.jsx)(n.li,{children:"If it is a table-level synchronization, specify both the database name and the table name."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"get_lag"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"View the synchronization progress."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'curl -X POST -H "Content-Type: application/json" -d \'{\n    "name": "job_name"\n}\' http://ccr_syncer_host:ccr_syncer_port/get_lag\n'})}),"\n",(0,r.jsx)(n.p,{children:"The job_name is the name specified when create_ccr."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"pause"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Pause synchronization task."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'curl -X POST -H "Content-Type: application/json" -d \'{\n    "name": "job_name"\n}\' http://ccr_syncer_host:ccr_syncer_port/pause \n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"resume"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Resume synchronization task."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'curl -X POST -H "Content-Type: application/json" -d \'{\n    "name": "job_name"\n}\' http://ccr_syncer_host:ccr_syncer_port/resume\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"delete"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Delete synchronization task."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'curl -X POST -H "Content-Type: application/json" -d \'{\n    "name": "job_name"\n}\' http://ccr_syncer_host:ccr_syncer_port/delete\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"version"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"View version information."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'curl http://ccr_syncer_host:ccr_syncer_port/version\n\n# > return\n{"version": "2.0.1"}\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"job status"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"View job status."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'curl -X POST -H "Content-Type: application/json" -d \'{\n    "name": "job_name"\n}\' http://ccr_syncer_host:ccr_syncer_port/job_status\n\n{\n  "success": true,\n  "status": {\n    "name": "ccr_db_table_alias",\n    "state": "running",\n    "progress_state": "TableIncrementalSync"\n  }\n}\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"desync job"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"No sync. Users can swap the source and target clusters."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'curl -X POST -H "Content-Type: application/json" -d \'{\n    "name": "job_name"\n}\' http://ccr_syncer_host:ccr_syncer_port/desync\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"list_jobs"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"List all created tasks."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'curl http://ccr_syncer_host:ccr_syncer_port/list_jobs\n\n{"success":true,"jobs":["ccr_db_table_alias"]}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"open-binlog-for-all-tables-in-the-database",children:"Open binlog for all tables in the database"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Output file structure"})}),"\n",(0,r.jsx)(n.p,{children:"The file structure can be seen under the output path after compilation:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"output_dir\n    bin\n        ccr_syncer\n        enable_db_binlog.sh\n        start_syncer.sh\n        stop_syncer.sh\n    db\n        [ccr.db] # Generated after running with the default configurations.\n    log\n        [ccr_syncer.log] # Generated after running with the default configurations.\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"The start_syncer.sh in the following text refers to the start_syncer.sh under its corresponding path."})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Usage"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"bash bin/enable_db_binlog.sh -h host -p port -u user -P password -d db\n"})}),"\n",(0,r.jsx)(n.h2,{id:"high-availability-of-syncer",children:"High availability of syncer"}),"\n",(0,r.jsx)(n.p,{children:"The high availability of syncers relies on MySQL. If MySQL is used as the backend storage, the syncer can discover other syncers. If one syncer crashes, the others will take over its tasks."}),"\n",(0,r.jsx)(n.h3,{id:"privilege-requirements",children:"Privilege requirements"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"select_priv"}),": read-only privileges for databases and tables"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"load_priv"}),": write privileges for databases and tables, including load, insert, delete, etc."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"alter_priv"}),": privilege to modify databases and tables, including renaming databases/tables, adding/deleting/changing columns, adding/deleting partitions, etc."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"create_priv"}),": privilege to create databases, tables, and views"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"drop_priv"}),": privilege to drop databases, tables, and views"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Admin privileges are required (We are planning on removing this in future versions). This is used to check the ",(0,r.jsx)(n.code,{children:"enable binlog config"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"usage-restrictions",children:"Usage restrictions"}),"\n",(0,r.jsx)(n.h3,{id:"network-constraints",children:"Network constraints"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Syncer needs to have connectivity to both the upstream and downstream FEs and BEs."}),"\n",(0,r.jsx)(n.li,{children:"The downstream BE should have connectivity to the upstream BE."}),"\n",(0,r.jsxs)(n.li,{children:["The external IP and Doris internal IP should be the same. In other words, the IP address visible in the output of ",(0,r.jsx)(n.code,{children:"show frontends/backends"})," should be the same IP that can be directly connected to. It should not involve IP forwarding or NAT for direct connections."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"thriftpool-constraints",children:"ThriftPool constraints"}),"\n",(0,r.jsx)(n.p,{children:"It is recommended to increase the size of the Thrift thread pool to a number greater than the number of buckets involved in a single commit operation."}),"\n",(0,r.jsx)(n.h3,{id:"version-requirements",children:"Version requirements"}),"\n",(0,r.jsx)(n.p,{children:"Minimum required version: V2.0.3"}),"\n",(0,r.jsx)(n.h3,{id:"unsupported-operations",children:"Unsupported operations"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Rename table"}),"\n",(0,r.jsx)(n.li,{children:"Operations such as table drop-recovery"}),"\n",(0,r.jsx)(n.li,{children:"Operations related to rename table, replace partition"}),"\n",(0,r.jsx)(n.li,{children:"Concurrent backup/restore within the same database"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"feature",children:"Feature"}),"\n",(0,r.jsx)(n.h3,{id:"rate-limit",children:"Rate limit"}),"\n",(0,r.jsx)(n.p,{children:"BE-side configuration parameter"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"download_binlog_rate_limit_kbs=1024 # Limits the download speed of Binlog (including Local Snapshot) from the source cluster to 1 MB/s in a single BE node\n"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"download_binlog_rate_limit_kbs"})," parameter is configured on the BE nodes of the source cluster. By setting this parameter, the data pull rate can be effectively limited."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"download_binlog_rate_limit_kbs"})," parameter primarily controls the speed of data transfer for each single BE node. To calculate the overall cluster rate, one would multiply the parameter value by the number of nodes in the cluster."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"is_being_synced",children:"IS_BEING_SYNCED"}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsx)(n.mdxadmonitiontitle,{}),(0,r.jsx)(n.p,{children:'Doris v2.0 "is_being_synced" = "true"'})]}),"\n",(0,r.jsx)(n.p,{children:"During data synchronization using CCR, replica tables (referred to as target tables) are created in the target cluster for the tables within the synchronization scope of the source cluster (referred to as source tables). However, certain functionalities and attributes need to be disabled or cleared when creating replica tables to ensure the correctness of the synchronization process. For example:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The source tables may contain information that is not synchronized to the target cluster, such as ",(0,r.jsx)(n.code,{children:"storage_policy"}),", which may cause the creation of the target table to fail or result in abnormal behavior."]}),"\n",(0,r.jsx)(n.li,{children:"The source tables may have dynamic functionalities, such as dynamic partitioning, which can lead to uncontrolled behavior in the target table and result in inconsistent partitions."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The attributes that need to be cleared during replication are:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"storage_policy"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"colocate_with"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The functionalities that need to be disabled during synchronization are:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Automatic bucketing"}),"\n",(0,r.jsx)(n.li,{children:"Dynamic partitioning"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"implementation",children:"Implementation"}),"\n",(0,r.jsxs)(n.p,{children:["When creating the target table, the syncer controls the addition or deletion of the ",(0,r.jsx)(n.code,{children:"is_being_synced"})," property. In CCR, there are two approaches to creating a target table:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"During table synchronization, the syncer performs a full copy of the source table using backup/restore to obtain the target table."}),"\n",(0,r.jsx)(n.li,{children:"During database synchronization, for existing tables, the syncer also uses backup/restore to obtain the target table. For incremental tables, the syncer creates the target table using the CreateTableRecord binlog."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Therefore, there are two entry points for inserting the ",(0,r.jsx)(n.code,{children:"is_being_synced"})," property: the restore process during full synchronization and the getDdlStmt during incremental synchronization."]}),"\n",(0,r.jsxs)(n.p,{children:["During the restoration process of full synchronization, the syncer initiates a restore operation of the snapshot from the source cluster via RPC. During this process, the ",(0,r.jsx)(n.code,{children:"is_being_synced"})," property is added to the RestoreStmt and takes effect in the final restoreJob, executing the relevant logic for ",(0,r.jsx)(n.code,{children:"is_being_synced"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["During incremental synchronization, add the ",(0,r.jsx)(n.code,{children:"boolean getDdlForSync"})," parameter to the getDdlStmt method to differentiate whether it is a controlled transformation to the target table DDL, and execute the relevant logic for isBeingSynced during the creation of the target table."]}),"\n",(0,r.jsx)(n.p,{children:"Regarding the disabling of the functionalities mentioned above:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Automatic bucketing: Automatic bucketing is enabled when creating a table. It calculates the appropriate number of buckets. This may result in a mismatch in the number of buckets between the source and target tables. Therefore, during synchronization, obtain the number of buckets from the source table, as well as the information about whether the source table is an automatic bucketing table in order to restore the functionality after synchronization. The current recommended approach is to default the autobucket attribute to false when retrieving distribution information. During table restoration, check the ",(0,r.jsx)(n.code,{children:"_auto_bucket"})," attribute to find out if the source table is an automatic bucketing table. If it is, set the target table's autobucket field to true to bypass the calculation of bucket numbers and directly apply the number of buckets from the source table to the target table."]}),"\n",(0,r.jsxs)(n.li,{children:["Dynamic partitioning: This is implemented by adding ",(0,r.jsx)(n.code,{children:"olapTable.isBeingSynced()"})," to the condition for executing add/drop partition operations. This ensures that the target table does not perform periodic add/drop partition operations during synchronization."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"note",children:"Note"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"is_being_synced"})," property should be fully controlled by the syncer, and users should not modify this property manually unless there are exceptional circumstances."]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},561852:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/ccr-architecture-description-555f71e6eddcf0a744f55c0e0b12eb4a.png"},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return a}});var t=s(667294);let r={},i=t.createContext(r);function a(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);