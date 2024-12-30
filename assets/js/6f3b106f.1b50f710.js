"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["149354"],{920339:function(e,i,a){a.r(i),a.d(i,{metadata:()=>t,contentTitle:()=>r,default:()=>d,assets:()=>l,toc:()=>h,frontMatter:()=>c});var t=JSON.parse('{"id":"lakehouse/metacache","title":"Metadata Cache","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/lakehouse/metacache.md","sourceDirName":"lakehouse","slug":"/lakehouse/metacache","permalink":"/docs/3.0/lakehouse/metacache","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"Metadata Cache","language":"en"},"sidebar":"docs","previous":{"title":"Data Cache","permalink":"/docs/3.0/lakehouse/filecache"},"next":{"title":"Elastic Compute Node","permalink":"/docs/3.0/lakehouse/compute-node"}}'),n=a("785893"),s=a("250065");let c={title:"Metadata Cache",language:"en"},r=void 0,l={},h=[{value:"Cache Policy Explanation",id:"cache-policy-explanation",level:2},{value:"Cache Types",id:"cache-types",level:2},{value:"Database and Table Name Lists",id:"database-and-table-name-lists",level:3},{value:"Database and Table Objects",id:"database-and-table-objects",level:3},{value:"Table Schema",id:"table-schema",level:3},{value:"Hive Metastore Table Partition List",id:"hive-metastore-table-partition-list",level:3},{value:"Hive Metastore Table Partition Properties",id:"hive-metastore-table-partition-properties",level:3},{value:"Hive Metastore Table Partition File List",id:"hive-metastore-table-partition-file-list",level:3},{value:"Hudi Table Partition",id:"hudi-table-partition",level:3},{value:"Iceberg Table Information",id:"iceberg-table-information",level:3},{value:"Iceberg Table Snapshot",id:"iceberg-table-snapshot",level:3},{value:"Cache Refresh",id:"cache-refresh",level:2},{value:"Manual Refresh",id:"manual-refresh",level:3},{value:"Scheduled Refresh",id:"scheduled-refresh",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Default Behavior",id:"default-behavior",level:3},{value:"Disabling Hive Catalog Metadata Cache",id:"disabling-hive-catalog-metadata-cache",level:3},{value:"Version Behavior Changes",id:"version-behavior-changes",level:2}];function o(e){let i={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.p,{children:["To improve the performance of accessing external data sources, Apache Doris caches the ",(0,n.jsx)(i.strong,{children:"metadata"})," of external data sources."]}),"\n",(0,n.jsx)(i.p,{children:"Metadata includes information about databases, tables, columns, partitions, snapshots, file column names, and more."}),"\n",(0,n.jsx)(i.p,{children:"This document provides detailed information on the types, strategies, and related parameter configurations of cached metadata."}),"\n",(0,n.jsxs)(i.p,{children:["For information on ",(0,n.jsx)(i.strong,{children:"data caching"}),", refer to the ",(0,n.jsx)(i.a,{href:"/docs/3.0/lakehouse/filecache",children:"Data Cache Documentation"}),"."]}),"\n",(0,n.jsx)(i.admonition,{type:"tip",children:(0,n.jsx)(i.p,{children:"This document is applicable for versions 2.1.6 and later."})}),"\n",(0,n.jsx)(i.h2,{id:"cache-policy-explanation",children:"Cache Policy Explanation"}),"\n",(0,n.jsx)(i.p,{children:"Most caches have the following three policy metrics:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"Maximum Cache Count"}),"\n",(0,n.jsx)(i.p,{children:"The maximum number of objects that the cache can hold. For example, caching up to 1000 tables. When the cache count exceeds the threshold, the LRU (Least-Recently-Used) policy is used to remove some cache entries."}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"Eviction Time"}),"\n",(0,n.jsx)(i.p,{children:"After a certain period of time, an object written to the cache will be automatically removed from the cache. Upon the next access, the cache will fetch the latest information from the data source and update the cache."}),"\n",(0,n.jsx)(i.p,{children:"For example, if a user accesses table A for the first time at 08:00 and it is cached, with an eviction time of 4 hours, between 08:00 and 14:00 without being evicted due to capacity issues, the user will directly access table A from the cache. After 14:00, the cache is evicted. If the user accesses table A again, the cache will be updated with the latest information from the data source."}),"\n",(0,n.jsx)(i.p,{children:"This policy is mainly used to automatically remove objects from the cache that are no longer accessed, reducing cache space usage."}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"Minimum Refresh Time"}),"\n",(0,n.jsx)(i.p,{children:"After a certain period of time, an object written to the cache will be automatically refreshed."}),"\n",(0,n.jsxs)(i.p,{children:["For example, if a user accesses table A for the first time at 08:00 and it is cached, with a minimum refresh time of 10 minutes, between 08:00 and 08:10 without being evicted due to capacity issues, the user will directly access table A from the cache. At 08:10, the cache object will be marked as ",(0,n.jsx)(i.strong,{children:"ready to refresh"}),". When the user accesses this cache object again, the cache refresh operation will be triggered. Assuming the cache update takes 1 minute, accessing the cache again after 1 minute will return the updated cache object."]}),"\n",(0,n.jsx)(i.p,{children:"Note that the cache refresh is triggered when the cache object is accessed for the first time after exceeding the minimum refresh time, and it is done asynchronously. Therefore, a minimum refresh time of 10 minutes does not guarantee that the latest object will be obtained after 10 minutes."}),"\n",(0,n.jsxs)(i.p,{children:["This policy differs from the ",(0,n.jsx)(i.strong,{children:"Eviction Time"})," and is mainly used to adjust the timeliness of the cache and avoid blocking current operations by updating the cache asynchronously."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"cache-types",children:"Cache Types"}),"\n",(0,n.jsx)(i.h3,{id:"database-and-table-name-lists",children:"Database and Table Name Lists"}),"\n",(0,n.jsx)(i.p,{children:"The database name list refers to a list of names of all databases under a Catalog."}),"\n",(0,n.jsx)(i.p,{children:"The table name list refers to a list of names of all tables under a database."}),"\n",(0,n.jsxs)(i.p,{children:["Name lists are used only for operations that require listing names, such as ",(0,n.jsx)(i.code,{children:"SHOW TABLES"})," or ",(0,n.jsx)(i.code,{children:"SHOW DATABASES"})," statements."]}),"\n",(0,n.jsx)(i.p,{children:"Each Catalog has a database name list cache, and each database has a table name list cache."}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"Maximum Cache Count"}),"\n",(0,n.jsx)(i.p,{children:"Each cache has only one entry. Therefore, the maximum cache count is 1."}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"Eviction Time"}),"\n",(0,n.jsx)(i.p,{children:"Fixed at 86400 seconds."}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"Minimum Refresh Time"}),"\n",(0,n.jsxs)(i.p,{children:["Controlled by the FE configuration item ",(0,n.jsx)(i.code,{children:"external_cache_expire_time_minutes_after_access"}),". The unit is minutes, with a default of 10 minutes. Reducing this time allows for more real-time viewing of the latest name lists in Doris but increases the frequency of accessing external data sources."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"database-and-table-objects",children:"Database and Table Objects"}),"\n",(0,n.jsx)(i.p,{children:"Cache individual library and table objects. Any access operations on libraries or tables, such as queries, writes, etc., will retrieve the corresponding objects from this cache."}),"\n",(0,n.jsxs)(i.p,{children:["Note that the list of objects in this cache may be inconsistent with the cache of ",(0,n.jsx)(i.strong,{children:"Database and Table Name Lists"})," Cache ."]}),"\n",(0,n.jsxs)(i.p,{children:["For example, by using the ",(0,n.jsx)(i.code,{children:"SHOW TABLES"})," command, you can retrieve tables ",(0,n.jsx)(i.code,{children:"A"}),", ",(0,n.jsx)(i.code,{children:"B"}),", ",(0,n.jsx)(i.code,{children:"C"})," from the name list cache. Suppose an external data source adds table ",(0,n.jsx)(i.code,{children:"D"})," at this time, then ",(0,n.jsx)(i.code,{children:"SELECT * FROM D"})," can access table ",(0,n.jsx)(i.code,{children:"D"}),", and the cache of table objects will add the object of table ",(0,n.jsx)(i.code,{children:"D"}),", but the cache of table names may still be ",(0,n.jsx)(i.code,{children:"A"}),", ",(0,n.jsx)(i.code,{children:"B"}),", ",(0,n.jsx)(i.code,{children:"C"}),". Only when the cache of table names is refreshed, it will become ",(0,n.jsx)(i.code,{children:"A"}),", ",(0,n.jsx)(i.code,{children:"B"}),", ",(0,n.jsx)(i.code,{children:"C"}),", ",(0,n.jsx)(i.code,{children:"D"}),"."]}),"\n",(0,n.jsx)(i.p,{children:"Each Catalog has a cache of library names. Each library has a cache of table names."}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"Maximum cache count"}),"\n",(0,n.jsxs)(i.p,{children:["Controlled by the FE configuration item ",(0,n.jsx)(i.code,{children:"max_meta_object_cache_num"}),", default is 1000. This parameter can be adjusted according to the number of databases under a single Catalog or the number of tables under a single database."]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"Eviction time"}),"\n",(0,n.jsx)(i.p,{children:"Fixed at 86400 seconds."}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"Minimum refresh time"}),"\n",(0,n.jsxs)(i.p,{children:["Controlled by the FE configuration item ",(0,n.jsx)(i.code,{children:"external_cache_expire_time_minutes_after_access"}),". Unit is minutes. Default is 10 minutes. Decreasing this time can provide more real-time access to the latest libraries or tables in Doris, but will increase the frequency of accessing external data sources."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"table-schema",children:"Table Schema"}),"\n",(0,n.jsx)(i.p,{children:"Cache schema information of tables, such as column names. This cache is mainly used to lazily load the schema of tables that are accessed to prevent synchronizing the schema of a large number of tables that are not needed to be accessed and occupying the FE's memory."}),"\n",(0,n.jsx)(i.p,{children:"This cache is shared by all Catalogs and is globally unique."}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"Maximum cache count"}),"\n",(0,n.jsxs)(i.p,{children:["Controlled by the FE configuration item ",(0,n.jsx)(i.code,{children:"max_external_schema_cache_num"}),", default is 10000."]}),"\n",(0,n.jsx)(i.p,{children:"This parameter can be adjusted according to the number of all tables under a Catalog."}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"Eviction time"}),"\n",(0,n.jsx)(i.p,{children:"Fixed at 86400 seconds."}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"Minimum refresh time"}),"\n",(0,n.jsxs)(i.p,{children:["Controlled by the FE configuration item ",(0,n.jsx)(i.code,{children:"external_cache_expire_time_minutes_after_access"}),". Unit is minutes. Default is 10 minutes. Decreasing this time can provide more real-time access to the latest Schema in Doris, but will increase the frequency of accessing external data sources."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"hive-metastore-table-partition-list",children:"Hive Metastore Table Partition List"}),"\n",(0,n.jsx)(i.p,{children:"Used to cache the partition list of tables synchronized from Hive Metastore. The partition list is used for partition pruning during queries."}),"\n",(0,n.jsx)(i.p,{children:"Each Hive Catalog has this cache."}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"Maximum cache count"}),"\n",(0,n.jsxs)(i.p,{children:["Controlled by the FE configuration item ",(0,n.jsx)(i.code,{children:"max_hive_partition_table_cache_num"}),", default is 1000."]}),"\n",(0,n.jsx)(i.p,{children:"This parameter can be adjusted according to the number of all tables under a Catalog."}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"Eviction time"}),"\n",(0,n.jsx)(i.p,{children:"Fixed at 28800 seconds."}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"Minimum refresh time"}),"\n",(0,n.jsxs)(i.p,{children:["Controlled by the FE configuration item ",(0,n.jsx)(i.code,{children:"external_cache_expire_time_minutes_after_access"}),". Unit is minutes. Default is 10 minutes. Decreasing this time can provide more real-time access to the latest partition list in Doris, but will increase the frequency of accessing external data sources."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"hive-metastore-table-partition-properties",children:"Hive Metastore Table Partition Properties"}),"\n",(0,n.jsx)(i.p,{children:"Used to cache the properties of each partition of Hive tables, such as file format, partition root path, etc. After each query, when the partition list to be accessed is obtained through partition pruning, this cache is used to retrieve detailed properties of each partition."}),"\n",(0,n.jsx)(i.p,{children:"Each Hive Catalog has this cache."}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"Maximum cache count"}),"\n",(0,n.jsxs)(i.p,{children:["Controlled by the FE configuration item ",(0,n.jsx)(i.code,{children:"max_hive_partition_cache_num"}),", default is 10000."]}),"\n",(0,n.jsx)(i.p,{children:"This parameter can be adjusted according to the total number of partitions that need to be accessed under a Catalog."}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"Eviction time"}),"\n",(0,n.jsx)(i.p,{children:"Fixed at 28800 seconds."}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"Minimum refresh time"}),"\n",(0,n.jsxs)(i.p,{children:["Controlled by the FE configuration item ",(0,n.jsx)(i.code,{children:"external_cache_expire_time_minutes_after_access"}),". Unit is minutes. Default is 10 minutes. Decreasing this time can provide more real-time access to the latest partition properties in Doris, but will increase the frequency of accessing external data sources."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"hive-metastore-table-partition-file-list",children:"Hive Metastore Table Partition File List"}),"\n",(0,n.jsx)(i.p,{children:"Used to cache the file list information of files under a single partition of Hive tables. This cache is used to reduce the overhead of listing operations on the file system."}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"Maximum cache count"}),"\n",(0,n.jsxs)(i.p,{children:["Controlled by the FE configuration item ",(0,n.jsx)(i.code,{children:"max_external_file_cache_num"}),", default is 100000."]}),"\n",(0,n.jsx)(i.p,{children:"This parameter can be adjusted according to the number of files that need to be accessed."}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"Eviction time"}),"\n",(0,n.jsxs)(i.p,{children:["Default is 28800 seconds. If the ",(0,n.jsx)(i.code,{children:"file.meta.cache.ttl-second"})," property is set in the Catalog attributes, then the set time will be used."]}),"\n",(0,n.jsx)(i.p,{children:"In some cases, the data files of Hive tables may change frequently, making the cache unable to meet the timeliness. By setting this parameter to 0, the cache can be disabled. In this case, the file list will be obtained in real-time for each query, which may reduce performance but improve file timeliness."}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"Minimum Refresh Time"}),"\n",(0,n.jsxs)(i.p,{children:["Controlled by the FE configuration item ",(0,n.jsx)(i.code,{children:"external_cache_expire_time_minutes_after_access"}),". Unit is in minutes. Default is 10 minutes. Decreasing this time allows for more real-time access to the latest partition properties in Doris, but will increase the frequency of accessing external data sources."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"hudi-table-partition",children:"Hudi Table Partition"}),"\n",(0,n.jsx)(i.p,{children:"Used to cache partition information for Hudi tables."}),"\n",(0,n.jsx)(i.p,{children:"Each Hudi Catalog has this cache."}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"Maximum Cache Count"}),"\n",(0,n.jsxs)(i.p,{children:["Controlled by the FE configuration item ",(0,n.jsx)(i.code,{children:"max_hive_table_cache_num"}),", default is 1000."]}),"\n",(0,n.jsx)(i.p,{children:"This parameter can be adjusted based on the number of Hudi tables."}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"Eviction Time"}),"\n",(0,n.jsx)(i.p,{children:"Fixed at 28800 seconds."}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"Minimum Refresh Time"}),"\n",(0,n.jsxs)(i.p,{children:["Controlled by the FE configuration item ",(0,n.jsx)(i.code,{children:"external_cache_expire_time_minutes_after_access"}),". Unit is in minutes. Default is 10 minutes. Decreasing this time allows for more real-time access to the latest Hudi partition properties in Doris, but will increase the frequency of accessing external data sources."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"iceberg-table-information",children:"Iceberg Table Information"}),"\n",(0,n.jsx)(i.p,{children:"Used to cache Iceberg table objects. These objects are loaded and constructed through the Iceberg API."}),"\n",(0,n.jsx)(i.p,{children:"Each Iceberg Catalog has this cache."}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"Maximum Cache Count"}),"\n",(0,n.jsxs)(i.p,{children:["Controlled by the FE configuration item ",(0,n.jsx)(i.code,{children:"max_hive_table_cache_num"}),", default is 1000."]}),"\n",(0,n.jsx)(i.p,{children:"This parameter can be adjusted based on the number of Iceberg tables."}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"Eviction Time"}),"\n",(0,n.jsx)(i.p,{children:"Fixed at 28800 seconds."}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"Minimum Refresh Time"}),"\n",(0,n.jsxs)(i.p,{children:["Controlled by the FE configuration item ",(0,n.jsx)(i.code,{children:"external_cache_expire_time_minutes_after_access"}),". Unit is in minutes. Default is 10 minutes. Decreasing this time allows for more real-time access to the latest Iceberg table properties in Doris, but will increase the frequency of accessing external data sources."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"iceberg-table-snapshot",children:"Iceberg Table Snapshot"}),"\n",(0,n.jsx)(i.p,{children:"Used to cache the Snapshot list of Iceberg tables. These objects are loaded and constructed through the Iceberg API."}),"\n",(0,n.jsx)(i.p,{children:"Each Iceberg Catalog has this cache."}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"Maximum Cache Count"}),"\n",(0,n.jsxs)(i.p,{children:["Controlled by the FE configuration item ",(0,n.jsx)(i.code,{children:"max_hive_table_cache_num"}),", default is 1000."]}),"\n",(0,n.jsx)(i.p,{children:"This parameter can be adjusted based on the number of Iceberg tables."}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"Eviction Time"}),"\n",(0,n.jsx)(i.p,{children:"Fixed at 28800 seconds."}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"Minimum Refresh Time"}),"\n",(0,n.jsxs)(i.p,{children:["Controlled by the FE configuration item ",(0,n.jsx)(i.code,{children:"external_cache_expire_time_minutes_after_access"}),". Unit is in minutes. Default is 10 minutes. Decreasing this time allows for more real-time access to the latest Iceberg table properties in Doris, but will increase the frequency of accessing external data sources."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"cache-refresh",children:"Cache Refresh"}),"\n",(0,n.jsx)(i.p,{children:"In addition to the individual refresh and eviction strategies for each cache mentioned above, users can also manually or periodically refresh metadata caches directly."}),"\n",(0,n.jsx)(i.h3,{id:"manual-refresh",children:"Manual Refresh"}),"\n",(0,n.jsxs)(i.p,{children:["Users can manually refresh metadata using the ",(0,n.jsx)(i.code,{children:"REFRESH"})," command."]}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"REFRESH CATALOG"}),"\n",(0,n.jsx)(i.p,{children:"Refreshes the specified Catalog."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:'REFRESH CATALOG ctl1 PROPERTIES("invalid_cache" = "true");'})}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"This command will refresh the library list, table column names, and all cache information of the specified Catalog."}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"invalid_cache"})," indicates whether to refresh cache such as partition and file lists. Default is true. If set to false, it will only refresh the library and table lists of the Catalog without refreshing cache information like partition and file lists. This parameter is useful when users only want to synchronize newly added or deleted library and table information, it can be set to false."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"REFRESH DATABASE"}),"\n",(0,n.jsx)(i.p,{children:"Refreshes the specified Database."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:'REFRESH DATABASE [ctl.]db1 PROPERTIES("invalid_cache" = "true");'})}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"This command will refresh the table column names of the specified Database and all cache information under the Database."}),"\n",(0,n.jsxs)(i.li,{children:["The meaning of ",(0,n.jsx)(i.code,{children:"invalid_cache"})," property is the same as above. Default is true. If set to false, it will only refresh the table lists of the Database without refreshing cache information. This parameter is useful when users only want to synchronize newly added or deleted table information."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"REFRESH TABLE"}),"\n",(0,n.jsx)(i.p,{children:"Refreshes the specified Table."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:"REFRESH TABLE [ctl.][db.]tbl1;"})}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"This command will refresh all cache information under the specified Table."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"scheduled-refresh",children:"Scheduled Refresh"}),"\n",(0,n.jsx)(i.p,{children:"Users can set a scheduled refresh for a Catalog when creating it."}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"CREATE CATALOG hive PROPERTIES (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://172.0.0.1:9083',\n    'metadata_refresh_interval_sec' = '3600'\n);\n"})}),"\n",(0,n.jsxs)(i.p,{children:["In the above example, ",(0,n.jsx)(i.code,{children:"metadata_refresh_interval_sec"})," indicates refreshing the Catalog every 3600 seconds. This is equivalent to automatically executing:"]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:'REFRESH CATALOG ctl1 PROPERTIES("invalid_cache" = "true");'})," every 3600 seconds."]}),"\n",(0,n.jsx)(i.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,n.jsx)(i.p,{children:"Caching can significantly improve the accessibility of metadata, avoiding frequent remote access to metadata causing performance fluctuations or putting pressure on metadata services. However, caching will reduce the timeliness of data. For example, if the cache refresh time is 10 minutes, only cached metadata can be read within ten minutes. Therefore, it is necessary to set the cache reasonably according to the situation."}),"\n",(0,n.jsx)(i.h3,{id:"default-behavior",children:"Default Behavior"}),"\n",(0,n.jsx)(i.p,{children:"Here mainly introduces the caching behavior that users may be concerned about under default parameter configurations."}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"After adding a new database or table in an external data source, it can be queried in Doris in real-time using SELECT. However, SHOW DATABASES and SHOW TABLES may not be visible and require manual cache refresh or a maximum wait of 10 minutes."}),"\n",(0,n.jsx)(i.li,{children:"After adding a new partition in an external data source, manual cache refresh is required, or after a maximum wait of 10 minutes, data from the new partition can be queried."}),"\n",(0,n.jsx)(i.li,{children:"If there are changes in partition data files, manual cache refresh is required, or after a maximum wait of 10 minutes, data from the new partition can be queried."}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"disabling-hive-catalog-metadata-cache",children:"Disabling Hive Catalog Metadata Cache"}),"\n",(0,n.jsx)(i.p,{children:"For Hive Catalog, if you want to disable the cache to query real-time updated data, you can configure the following parameter:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:'-- fe.conf\nmax_hive_partition_table_cache_num=0  // Close partition list cache\nmax_external_file_cache_num=0    // Close file list cache\n\n-- Catalog property\n"file.meta.cache.ttl-second" = "0" // Close file list cache for certain catalog\n'})}),"\n",(0,n.jsx)(i.p,{children:"After setting the above parameter:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"New partitions from external data sources can be queried in real-time."}),"\n",(0,n.jsx)(i.li,{children:"Changes in partition data files can be queried in real-time."}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"However, this may increase the access pressure on external data sources (such as Hive Metastore and HDFS), which may lead to unstable metadata access delays and other phenomena."}),"\n",(0,n.jsx)(i.h2,{id:"version-behavior-changes",children:"Version Behavior Changes"}),"\n",(0,n.jsxs)(i.p,{children:["In version 2.1.5, the ",(0,n.jsx)(i.code,{children:"use_meta_cache"})," attribute was added to the Catalog properties, defaulting to false."]}),"\n",(0,n.jsx)(i.admonition,{type:"warning",children:(0,n.jsxs)(i.p,{children:["Do not set ",(0,n.jsx)(i.code,{children:"use_meta_cache"})," to true before 2.1.6."]})}),"\n",(0,n.jsx)(i.p,{children:"In version 2.1.6, for newly created Catalogs, this attribute is default changed to true to correspond to the caching behavior described in this document. It is recommended that users upgrade to version 2.1.6 and rebuild existing Catalogs to align the default behavior with the description in this document."})]})}function d(e={}){let{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},250065:function(e,i,a){a.d(i,{Z:function(){return r},a:function(){return c}});var t=a(667294);let n={},s=t.createContext(n);function c(e){let i=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);