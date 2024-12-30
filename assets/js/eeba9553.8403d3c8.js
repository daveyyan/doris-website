"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["249911"],{834550:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>d,default:()=>h,assets:()=>a,toc:()=>l,frontMatter:()=>i});var s=JSON.parse('{"id":"install/deploy-manually/storage-compute-coupled-deploy-manually","title":"Deploy Storage Compute Coupled Manually","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/install/deploy-manually/storage-compute-coupled-deploy-manually.md","sourceDirName":"install/deploy-manually","slug":"/install/deploy-manually/storage-compute-coupled-deploy-manually","permalink":"/docs/3.0/install/deploy-manually/storage-compute-coupled-deploy-manually","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"Deploy Storage Compute Coupled Manually","language":"en"},"sidebar":"docs","previous":{"title":"OS Checking","permalink":"/docs/3.0/install/preparation/os-checking"},"next":{"title":"deploy storage compute decoupled manually","permalink":"/docs/3.0/install/deploy-manually/storage-compute-decoupled-deploy-manually"}}'),r=t("785893"),o=t("250065");let i={title:"Deploy Storage Compute Coupled Manually",language:"en"},d=void 0,a={},l=[{value:"Step 1: Deploy FE Master Node",id:"step-1-deploy-fe-master-node",level:2},{value:"Step 2: Deploy FE Cluster (Optional)",id:"step-2-deploy-fe-cluster-optional",level:2},{value:"Step 3: Deploy BE Node",id:"step-3-deploy-be-node",level:2},{value:"Step 4: Verify Cluster Integrity",id:"step-4-verify-cluster-integrity",level:2}];function c(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"After completing preliminary checks and planning, such as environment checks, cluster planning, and operating system inspections, you can begin deploying the cluster. Deploying the cluster is divided into four steps:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Deploy FE Master Node: Deploy the first FE node as the Master node;"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Deploy FE Cluster: Deploy the FE cluster by adding Follower or Observer FE nodes;"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"eploy BE Nodes: Register BE nodes to the FE cluster;"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Verify Cluster Correctness: After deployment, connect to and verify the cluster's correctness."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"step-1-deploy-fe-master-node",children:"Step 1: Deploy FE Master Node"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Create Metadata Path"}),"\n",(0,r.jsx)(n.p,{children:"When deploying FE, it is recommended to store metadata on a different hard drive from the BE node data storage."}),"\n",(0,r.jsx)(n.p,{children:"When extracting the installation package, a doris-meta directory is included by default. It is recommended to create an independent metadata directory and create a symbolic link to doris-meta. In a production environment, it is strongly advised to specify a separate directory outside the Doris installation directory, preferably on a dedicated SSD. For testing and development environments, you can use the default configuration."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"## Use a separate disk for FE metadata\nmkdir -p <doris_meta_created>\n   \n## Create FE metadata directory symlink\nln -s <doris_meta_original> <doris_meta_created>\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Modify FE Configuration File"}),"\n",(0,r.jsx)(n.p,{children:"The FE configuration file is located in the conf directory under the FE deployment path. Before starting the FE node, you need to modify conf/fe.conf."}),"\n",(0,r.jsx)(n.p,{children:"Before deploying the FE node, it is recommended to modify the following parameters:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Bash",children:'## modify Java Heap\nJAVA_OPTS="-Xmx16384m -XX:+UseMembar -XX:SurvivorRatio=8 -XX:MaxTenuringThreshold=7 -XX:+PrintGCDateStamps -XX:+PrintGCDetails -XX:+UseConcMarkSweepGC -XX:+UseParNewGC -XX:+CMSClassUnloadingEnabled -XX:-CMSParallelRemarkEnabled -XX:CMSInitiatingOccupancyFraction=80 -XX:SoftRefLRUPolicyMSPerMB=0 -Xloggc:$DORIS_HOME/log/fe.gc.log.$DATE"\n   \n## modify case sensitivity\nlower_case_table_names = 1\n  \n## modify network CIDR \npriority_networks = 10.1.3.0/24\n   \n## modify Java Home\nJAVA_HOME = <your-java-home-path>\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Parameter Descriptions: For more detailed parameters, refer to the documentation. ",(0,r.jsx)(n.a,{href:"../../admin-manual/config/fe-config",children:"FE Configuration"}),"\uFF1A"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Suggestion"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"JAVA_OPTS"}),(0,r.jsxs)(n.td,{children:["Specify the ",(0,r.jsx)(n.code,{children:"-Xmx"})," parameter to adjust the Java Heap. It is recommended to set it to above 16G in production environments."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../admin-manual/config/fe-config#lower_case_table_names",children:"lower_case_table_names "})}),(0,r.jsx)(n.td,{children:"Set case sensitivity. It is recommended to adjust it to 1, meaning case-insensitive."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../admin-manual/config/fe-config#priority_networks",children:"priority_networks "})}),(0,r.jsx)(n.td,{children:"Network CIDR is specified based on the network IP address. It can be ignored in an FQDN environment."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"JAVA_HOME"}),(0,r.jsx)(n.td,{children:"It is recommended to use a JDK environment independent of the operating system for Doris."})]})]})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Start FE Process"}),"\n",(0,r.jsx)(n.p,{children:"You can start the FE process using the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Shell",children:"bin/start_fe.sh --daemon\n"})}),"\n",(0,r.jsx)(n.p,{children:"The FE process will start and run in the background. By default, logs are stored in the log/ directory. If the startup fails, you can check the log/fe.log or log/fe.out files for error information."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Check FE Startup Status"}),"\n",(0,r.jsx)(n.p,{children:"You can connect to the Doris cluster using MySQL Client. The default user is root, and the password is empty."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"mysql -uroot -P<fe_query_port> -h<fe_ip_address>\n"})}),"\n",(0,r.jsx)(n.p,{children:"After connecting to the Doris cluster, you can use the show frontends command to check the status of FE nodes. Typically, you should verify the following:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Alive: If true, it indicates the node is alive."}),"\n",(0,r.jsx)(n.li,{children:"Join: If true, it indicates the node has joined the cluster, but it doesn't necessarily mean the node is still active in the cluster (it may have lost connection)."}),"\n",(0,r.jsx)(n.li,{children:"IsMaster: If true, it indicates the current node is the Master node."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"step-2-deploy-fe-cluster-optional",children:"Step 2: Deploy FE Cluster (Optional)"}),"\n",(0,r.jsx)(n.p,{children:"In a production cluster, it is recommended to deploy at least 3 Follower nodes. After deploying the FE Master node, you should deploy two additional FE Follower nodes."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Create Metadata Directory"}),"\n",(0,r.jsxs)(n.p,{children:["Follow the same steps as for deploying the FE Master node to create the ",(0,r.jsx)(n.code,{children:"doris-meta"})," directory."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Modify FE Follower Node Configuration"}),"\n",(0,r.jsx)(n.p,{children:"Modify the FE configuration file for the Follower node, following the same steps as for the FE Master node. Typically, you can simply copy the configuration file from the FE Master node."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Register New FE Follower Node in the Doris Cluster"}),"\n",(0,r.jsx)(n.p,{children:"Before starting a new FE node, you need to register the new FE node in the FE cluster."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Bash",children:'## connect a alive FE node\nmysql -uroot -P<fe_query_port> -h<fe_ip_address>\n\n## registe a new FE follower node\nALTER SYSTEM ADD FOLLOWER "<fe_ip_address>:<fe_edit_log_port>"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["If you want to add an observer node, you can use the ",(0,r.jsx)(n.code,{children:"ADD OBSERVER"})," command:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Bash",children:'## register a new FE observer node\nALTER SYSTEM ADD OBSERVER "<fe_ip_address>:<fe_edit_log_port>"\n'})}),"\n",(0,r.jsx)(n.admonition,{title:"Note",type:"caution",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The number of FE Follower nodes (including Master) should be odd. It is recommended to deploy 3 nodes for high availability."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"When FE is deployed in high availability mode (1 Master, 2 Followers), we recommend adding Observer FE nodes to extend the FE read service capacity."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Typically, one FE node can handle 10-20 BE nodes. It is recommended that the total number of FE nodes be kept below 10."}),"\n"]}),"\n"]})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Start FE Follower Node"}),"\n",(0,r.jsx)(n.p,{children:"The FE Follower node can be started with the following command, which will automatically synchronize metadata."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Shell",children:"bin/start_fe.sh --helper <helper_fe_ip>:<fe_edit_log_port> --daemon\n"})}),"\n",(0,r.jsx)(n.p,{children:"Here, helper_fe_ip refers to any live node in the current FE cluster. The --helper parameter is only used for the initial startup of FE to synchronize metadata. It is not required for subsequent restarts of the FE node."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Check Follower Node Status"}),"\n",(0,r.jsxs)(n.p,{children:["The method to check the FE Follower node status is the same as checking the FE Master node status. After adding and registering the FE Follower node, you need to use the ",(0,r.jsx)(n.code,{children:"show frontends"})," command to check the FE node status. Unlike the Master status, the ",(0,r.jsx)(n.code,{children:"IsMaster"})," state should be false."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"step-3-deploy-be-node",children:"Step 3: Deploy BE Node"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Create Data Directory"}),"\n",(0,r.jsxs)(n.p,{children:["The BE process is responsible for data computation and storage. The data directory is by default located under ",(0,r.jsx)(n.code,{children:"be/storage"}),". In a production environment, it is common to use a separate disk for data storage and place BE data on a different disk from the BE deployment files. BE supports distributing data across multiple disks to better utilize the I/O capabilities of multiple hard drives."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Bash",children:"## Create a BE data storage directory on each data disk\nmkdir -p <be_storage_root_path>\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Modify BE Configuration File"}),"\n",(0,r.jsxs)(n.p,{children:["The BE configuration file is located in the conf directory under the BE deployment path. Before starting the BE node, you need to modify the ",(0,r.jsx)(n.code,{children:"conf/be.conf"})," file."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Bash",children:"## modify storage path for BE node\n\nstorage_root_path=/home/disk1/doris,medium:HDD;/home/disk2/doris,medium:SSD\n\n## modify network CIDR \n\npriority_networks = 10.1.3.0/24\n\n## modify Java Home in be/conf/be.conf\n\nJAVA_HOME = <your-java-home-path>\n"})}),"\n",(0,r.jsx)(n.p,{children:"Parameter explanations are as follows:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u53C2\u6570"}),(0,r.jsx)(n.th,{children:"\u4FEE\u6539\u5EFA\u8BAE"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../../admin-manual/config/be-config#priority_networks",children:"priority_networks"})}),(0,r.jsx)(n.td,{children:"Network CIDR, specified by network IP address. Can be ignored in FQDN environments."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"JAVA_OPTS"}),(0,r.jsxs)(n.td,{children:["Set the ",(0,r.jsx)(n.code,{children:"-Xmx"})," parameter to adjust the Java heap size. It is recommended to set it to 16GB or more for production environments."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"JAVA_HOME"}),(0,r.jsx)(n.td,{children:"It is recommended to use a JDK environment that is independent of the operating system for Doris."})]})]})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Register BE Node in Doris"}),"\n",(0,r.jsx)(n.p,{children:"Before starting a new BE node, you need to register the new BE node in the FE cluster:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Bash",children:'## connect a alive FE node\nmysql -uroot -P<fe_query_port> -h<fe_ip_address>\n   \n## registe BE node\nALTER SYSTEM ADD BACKEND "<be_ip_address>:<be_heartbeat_service_port>"\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Start BE Process"}),"\n",(0,r.jsx)(n.p,{children:"The BE process can be started with the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Bash",children:"bin/start_be.sh --daemon\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The BE process starts and runs in the background. Logs are stored by default in the ",(0,r.jsx)(n.code,{children:"log/"})," directory. If the startup fails, check the ",(0,r.jsx)(n.code,{children:"log/be.log"})," or ",(0,r.jsx)(n.code,{children:"log/be.out"})," files for error messages."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Check BE Startup Status"}),"\n",(0,r.jsxs)(n.p,{children:["After connecting to the Doris cluster, use the ",(0,r.jsx)(n.code,{children:"show backends"})," command to check the BE node status."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Bash",children:"## connect a alive FE node\nmysql -uroot -P<fe_query_port> -h<fe_ip_address>\n   \n## check BE node status\nshow backends;\n"})}),"\n",(0,r.jsx)(n.p,{children:"Typically, pay attention to the following states:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Alive"})," being true indicates that the node is alive."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"TabletNum"})," represents the number of shards on the node. Newly added nodes will undergo data balancing, and the ",(0,r.jsx)(n.code,{children:"TabletNum"})," will gradually become more evenly distributed."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"step-4-verify-cluster-integrity",children:"Step 4: Verify Cluster Integrity"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Log in to the Database"}),"\n",(0,r.jsx)(n.p,{children:"Log in to the Doris cluster using the MySQL Client."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Bash",children:"## connect a alive fe node\nmysql -uroot -P<fe_query_port> -h<fe_ip_address>\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Check Doris Installation Information"}),"\n",(0,r.jsxs)(n.p,{children:["Use ",(0,r.jsx)(n.code,{children:"show frontends"})," and ",(0,r.jsx)(n.code,{children:"show backends"})," to view the status of each database instance."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Sql",children:"-- check fe status\nshow frontends \\G  \n     \n-- check be status  \nshow backends \\G\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Change Doris Cluster Password"}),"\n",(0,r.jsxs)(n.p,{children:["When the Doris cluster is created, a user named ",(0,r.jsx)(n.code,{children:"root"})," is automatically created, and its password is set to empty by default. For security reasons, it is recommended to set a new password for the ",(0,r.jsx)(n.code,{children:"root"})," user immediately after the cluster is created."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"-- check the current user\nselect user();  \n+------------------------+  \n| user()                 |  \n+------------------------+  \n| 'root'@'192.168.88.30' |  \n+------------------------+  \n     \n-- modify the password for current user\nSET PASSWORD = PASSWORD('doris_new_passwd');\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Create a Test Table and Insert Data"}),"\n",(0,r.jsx)(n.p,{children:"To verify the integrity of the cluster, you can create a test table in the newly created cluster and insert some data."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:'-- create a test database\ncreate database testdb;\n \n-- create a test table\nCREATE TABLE testdb.table_hash\n(\n    k1 TINYINT,\n    k2 DECIMAL(10, 2) DEFAULT "10.5",\n    k3 VARCHAR(10) COMMENT "string column",\n    k4 INT NOT NULL DEFAULT "1" COMMENT "int column"\n)\nCOMMENT "my first table"\nDISTRIBUTED BY HASH(k1) BUCKETS 32;\n'})}),"\n",(0,r.jsx)(n.p,{children:"Doris is compatible with the MySQL protocol, and you can use the INSERT statement to insert data."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-SQL",children:"-- insert data\nINSERT INTO testdb.table_hash VALUES\n(1, 10.1, 'AAA', 10),\n(2, 10.2, 'BBB', 20),\n(3, 10.3, 'CCC', 30),\n(4, 10.4, 'DDD', 40),\n(5, 10.5, 'EEE', 50);\n\n-- check the data\nSELECT * from testdb.table_hash;\n+------+-------+------+------+\n| k1   | k2    | k3   | k4   |\n+------+-------+------+------+\n|    3 | 10.30 | CCC  |   30 |\n|    4 | 10.40 | DDD  |   40 |\n|    5 | 10.50 | EEE  |   50 |\n|    1 | 10.10 | AAA  |   10 |\n|    2 | 10.20 | BBB  |   20 |\n+------+-------+------+------+\n"})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return i}});var s=t(667294);let r={},o=s.createContext(r);function i(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);