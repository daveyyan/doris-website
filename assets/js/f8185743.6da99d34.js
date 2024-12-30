"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["841531"],{953826:function(e,n,a){a.r(n),a.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>p,assets:()=>c,toc:()=>l,frontMatter:()=>i});var s=JSON.parse('{"id":"admin-manual/data-admin/backup-restore/backup","title":"Backup","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/admin-manual/data-admin/backup-restore/backup.md","sourceDirName":"admin-manual/data-admin/backup-restore","slug":"/admin-manual/data-admin/backup-restore/backup","permalink":"/docs/admin-manual/data-admin/backup-restore/backup","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Backup","language":"en"},"sidebar":"docs","previous":{"title":"Backup and Restore Overview","permalink":"/docs/admin-manual/data-admin/backup-restore/overview"},"next":{"title":"Restore","permalink":"/docs/admin-manual/data-admin/backup-restore/restore"}}'),o=a("785893"),t=a("250065");let i={title:"Backup",language:"en"},r=void 0,c={},l=[{value:"1. Create Repository",id:"1-create-repository",level:2},{value:"Option 1: Create Repository on S3",id:"option-1-create-repository-on-s3",level:3},{value:"Option 2: Create Repository on Azure",id:"option-2-create-repository-on-azure",level:3},{value:"Option 3: Create Repository on GCP",id:"option-3-create-repository-on-gcp",level:3},{value:"Option 4: Create Repository on OSS (Alibaba Cloud Object Storage Service)",id:"option-4-create-repository-on-oss-alibaba-cloud-object-storage-service",level:3},{value:"Option 5: Create Repository on MinIO",id:"option-5-create-repository-on-minio",level:3},{value:"Option 6: Create Repository on HDFS",id:"option-6-create-repository-on-hdfs",level:3},{value:"2. Backup",id:"2-backup",level:2},{value:"Option 1: Backup Current Database",id:"option-1-backup-current-database",level:3},{value:"Option 2: Backup Specified Database",id:"option-2-backup-specified-database",level:3},{value:"Option 3: Backup Specified Tables",id:"option-3-backup-specified-tables",level:3},{value:"Option 4: Backup Specified Partitions",id:"option-4-backup-specified-partitions",level:3},{value:"Option 5: Backup Current Database Excluding Certain Tables",id:"option-5-backup-current-database-excluding-certain-tables",level:3},{value:"3. View Recent Backup Job Execution Status",id:"3-view-recent-backup-job-execution-status",level:2},{value:"4. View Existing Backups in Repository",id:"4-view-existing-backups-in-repository",level:2},{value:"5. Cancel Backup (if necessary)",id:"5-cancel-backup-if-necessary",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["For concepts related to backup, please refer to ",(0,o.jsx)(n.a,{href:"/docs/admin-manual/data-admin/backup-restore/overview",children:"Backup and Restore"}),". This guide provides the steps to create a Repository and back up data."]}),"\n",(0,o.jsx)(n.h2,{id:"1-create-repository",children:"1. Create Repository"}),"\n",(0,o.jsxs)(n.p,{children:["Use the appropriate statement to create a Repository based on your storage choice. For detailed usage, please refer to ",(0,o.jsx)(n.a,{href:"/docs/sql-manual/sql-statements/data-modification/backup-and-restore/CREATE-REPOSITORY",children:"Create Repository"}),". When backing up using the same path for the Repository across different clusters, ensure to use different labels to avoid conflicts that may cause data confusion."]}),"\n",(0,o.jsx)(n.h3,{id:"option-1-create-repository-on-s3",children:"Option 1: Create Repository on S3"}),"\n",(0,o.jsx)(n.p,{children:"To create a Repository on S3 storage, use the following SQL command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:'CREATE REPOSITORY `s3_repo`\nWITH S3\nON LOCATION "s3://bucket_name/s3_repo"\nPROPERTIES\n(\n    "s3.endpoint" = "s3.us-east-1.amazonaws.com",\n    "s3.region" = "us-east-1",\n    "s3.access_key" = "ak",\n    "s3.secret_key" = "sk"\n);\n'})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Replace ",(0,o.jsx)(n.code,{children:"bucket_name"})," with your S3 bucket name."]}),"\n",(0,o.jsx)(n.li,{children:"Provide the appropriate endpoint, access key, secret key, and region for S3 setup."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"option-2-create-repository-on-azure",children:"Option 2: Create Repository on Azure"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Azure is supported since 2.0.8 or 3.0.4."})}),"\n",(0,o.jsx)(n.p,{children:"To create a Repository on Azure storage, use the following SQL command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:'CREATE REPOSITORY `azure_repo`\nWITH S3\nON LOCATION "s3://bucket_name/azure_repo"\nPROPERTIES\n(\n    "s3.endpoint" = "selectdbcloudtestwestus3.blob.core.windows.net",\n    "s3.region" = "dummy_region",\n    "s3.access_key" = "ak",\n    "s3.secret_key" = "sk",\n    "provider" = "AZURE"\n);\n'})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Replace ",(0,o.jsx)(n.code,{children:"bucket_name"})," with your Azure container name."]}),"\n",(0,o.jsx)(n.li,{children:"Provide your Azure storage account and key for authentication."}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"s3.region"})," is a dummy but required field."]}),"\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.code,{children:"provider"})," must be set to ",(0,o.jsx)(n.code,{children:"AZURE"})," for Azure storage."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"option-3-create-repository-on-gcp",children:"Option 3: Create Repository on GCP"}),"\n",(0,o.jsx)(n.p,{children:"To create a Repository on Google Cloud Platform (GCP) storage, use the following SQL command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:'CREATE REPOSITORY `gcp_repo`\nWITH S3\nON LOCATION "s3://bucket_name/backup/gcp_repo"\nPROPERTIES\n(\n    "s3.endpoint" = "storage.googleapis.com",\n    "s3.region" = "US-WEST2",\n    "s3.access_key" = "ak",\n    "s3.secret_key" = "sk"\n);\n'})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Replace ",(0,o.jsx)(n.code,{children:"bucket_name"})," with your GCP bucket name."]}),"\n",(0,o.jsx)(n.li,{children:"Provide your GCP endpoint, access key, and secret key."}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"s3.region"})," is a dummy but required field."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"option-4-create-repository-on-oss-alibaba-cloud-object-storage-service",children:"Option 4: Create Repository on OSS (Alibaba Cloud Object Storage Service)"}),"\n",(0,o.jsx)(n.p,{children:"To create a Repository on OSS, use the following SQL command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:'CREATE REPOSITORY `oss_repo`\nWITH S3\nON LOCATION "s3://bucket_name/oss_repo"\nPROPERTIES\n(\n    "s3.endpoint" = "oss.aliyuncs.com",\n    "s3.region" = "cn-hangzhou",\n    "s3.access_key" = "ak",\n    "s3.secret_key" = "sk"\n);\n'})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Replace ",(0,o.jsx)(n.code,{children:"bucket_name"})," with your OSS bucket name."]}),"\n",(0,o.jsx)(n.li,{children:"Provide your OSS endpoint, region, access key, and secret key."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"option-5-create-repository-on-minio",children:"Option 5: Create Repository on MinIO"}),"\n",(0,o.jsx)(n.p,{children:"To create a Repository on MinIO storage, use the following SQL command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:'CREATE REPOSITORY `minio_repo`\nWITH S3\nON LOCATION "s3://bucket_name/minio_repo"\nPROPERTIES\n(\n    "s3.endpoint" = "yourminio.com",\n    "s3.region" = "dummy-region",\n    "s3.access_key" = "ak",\n    "s3.secret_key" = "sk",\n    "use_path_style" = "true"\n);\n'})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Replace ",(0,o.jsx)(n.code,{children:"bucket_name"})," with your MinIO bucket name."]}),"\n",(0,o.jsx)(n.li,{children:"Provide your MinIO endpoint, access key, and secret key."}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"s3.region"})," is a dummy but required field."]}),"\n",(0,o.jsxs)(n.li,{children:["If you do not enable Virtual Host-style, then ",(0,o.jsx)(n.code,{children:"use_path_style"})," must be true."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"option-6-create-repository-on-hdfs",children:"Option 6: Create Repository on HDFS"}),"\n",(0,o.jsx)(n.p,{children:"To create a Repository on HDFS storage, use the following SQL command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:'CREATE REPOSITORY `hdfs_repo`\nWITH hdfs\nON LOCATION "/prefix_path/hdfs_repo"\nPROPERTIES\n(\n    "fs.defaultFS" = "hdfs://127.0.0.1:9000",\n    "hadoop.username" = "doris-test"\n)\n'})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Replace ",(0,o.jsx)(n.code,{children:"prefix_path"})," with the actual path."]}),"\n",(0,o.jsx)(n.li,{children:"Provide your HDFS endpoint and username."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"2-backup",children:"2. Backup"}),"\n",(0,o.jsxs)(n.p,{children:["Refer to the following statements to back up databases, tables, or partitions. For detailed usage, please refer to ",(0,o.jsx)(n.a,{href:"/docs/sql-manual/sql-statements/data-modification/backup-and-restore/BACKUP",children:"Backup"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"It is recommended to use meaningful label names, such as those containing the databases and tables included in the backup."}),"\n",(0,o.jsx)(n.h3,{id:"option-1-backup-current-database",children:"Option 1: Backup Current Database"}),"\n",(0,o.jsxs)(n.p,{children:["The following SQL statement backs up the current database to a Repository named ",(0,o.jsx)(n.code,{children:"example_repo"}),", using the snapshot label ",(0,o.jsx)(n.code,{children:"exampledb_20241225"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"BACKUP SNAPSHOT exampledb_20241225\nTO example_repo;\n"})}),"\n",(0,o.jsx)(n.h3,{id:"option-2-backup-specified-database",children:"Option 2: Backup Specified Database"}),"\n",(0,o.jsxs)(n.p,{children:["The following SQL statement backs up a database named ",(0,o.jsx)(n.code,{children:"destdb"})," to a Repository named ",(0,o.jsx)(n.code,{children:"example_repo"}),", using the snapshot label ",(0,o.jsx)(n.code,{children:"destdb_20241225"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"BACKUP SNAPSHOT destdb.`destdb_20241225`\nTO example_repo;\n"})}),"\n",(0,o.jsx)(n.h3,{id:"option-3-backup-specified-tables",children:"Option 3: Backup Specified Tables"}),"\n",(0,o.jsxs)(n.p,{children:["The following SQL statement backs up two tables to a Repository named ",(0,o.jsx)(n.code,{children:"example_repo"}),", using the snapshot label ",(0,o.jsx)(n.code,{children:"exampledb_tbl_tbl1_20241225"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"BACKUP SNAPSHOT exampledb_tbl_tbl1_20241225\nTO example_repo\nON (example_tbl, example_tbl1);\n"})}),"\n",(0,o.jsx)(n.h3,{id:"option-4-backup-specified-partitions",children:"Option 4: Backup Specified Partitions"}),"\n",(0,o.jsxs)(n.p,{children:["The following SQL statement backs up a table named ",(0,o.jsx)(n.code,{children:"example_tbl2"})," and two partitions named ",(0,o.jsx)(n.code,{children:"p1"})," and ",(0,o.jsx)(n.code,{children:"p2"})," to a Repository named ",(0,o.jsx)(n.code,{children:"example_repo"}),", using the snapshot label ",(0,o.jsx)(n.code,{children:"example_tbl_p1_p2_tbl1_20241225"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"BACKUP SNAPSHOT example_tbl_p1_p2_tbl1_20241225\nTO example_repo\nON\n(\n      example_tbl PARTITION (p1,p2),\n      example_tbl2\n);\n"})}),"\n",(0,o.jsx)(n.h3,{id:"option-5-backup-current-database-excluding-certain-tables",children:"Option 5: Backup Current Database Excluding Certain Tables"}),"\n",(0,o.jsxs)(n.p,{children:["The following SQL statement backs up the current database to a Repository named ",(0,o.jsx)(n.code,{children:"example_repo"}),", using the snapshot label ",(0,o.jsx)(n.code,{children:"exampledb_20241225"}),", excluding two tables named ",(0,o.jsx)(n.code,{children:"example_tbl"})," and ",(0,o.jsx)(n.code,{children:"example_tbl1"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"BACKUP SNAPSHOT exampledb_20241225\nTO example_repo\nEXCLUDE\n(\n      example_tbl,\n      example_tbl1\n);\n"})}),"\n",(0,o.jsx)(n.h2,{id:"3-view-recent-backup-job-execution-status",children:"3. View Recent Backup Job Execution Status"}),"\n",(0,o.jsx)(n.p,{children:"The following SQL statement can be used to view the execution status of recent backup jobs."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"mysql> show BACKUP\\G;\n*************************** 1. row ***************************\n                  JobId: 17891847\n           SnapshotName: exampledb_20241225\n                 DbName: example_db\n                  State: FINISHED\n             BackupObjs: [example_db.example_tbl]\n             CreateTime: 2022-04-08 15:52:29\n   SnapshotFinishedTime: 2022-04-08 15:52:32\n     UploadFinishedTime: 2022-04-08 15:52:38\n           FinishedTime: 2022-04-08 15:52:44\n        UnfinishedTasks:\n               Progress:\n             TaskErrMsg:\n                 Status: [OK]\n                Timeout: 86400\n   1 row in set (0.01 sec)\n"})}),"\n",(0,o.jsx)(n.h2,{id:"4-view-existing-backups-in-repository",children:"4. View Existing Backups in Repository"}),"\n",(0,o.jsxs)(n.p,{children:["The following SQL statement can be used to view existing backups in a Repository named ",(0,o.jsx)(n.code,{children:"example_repo"}),", where the Snapshot column is the snapshot label, and the Timestamp is the timestamp."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"mysql> SHOW SNAPSHOT ON example_repo;\n+-----------------+---------------------+--------+\n| Snapshot        | Timestamp           | Status |\n+-----------------+---------------------+--------+\n| exampledb_20241225 | 2022-04-08-15-52-29 | OK     |\n+-----------------+---------------------+--------+\n1 row in set (0.15 sec)\n"})}),"\n",(0,o.jsx)(n.h2,{id:"5-cancel-backup-if-necessary",children:"5. Cancel Backup (if necessary)"}),"\n",(0,o.jsxs)(n.p,{children:["You can use ",(0,o.jsx)(n.code,{children:"CANCEL BACKUP FROM db_name;"})," to cancel a backup task in a database. For more specific usage, refer to ",(0,o.jsx)(n.a,{href:"/docs/sql-manual/sql-statements/data-modification/backup-and-restore/CANCEL-BACKUP",children:"Cancel Backup"}),"."]})]})}function p(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return r},a:function(){return i}});var s=a(667294);let o={},t=s.createContext(o);function i(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);