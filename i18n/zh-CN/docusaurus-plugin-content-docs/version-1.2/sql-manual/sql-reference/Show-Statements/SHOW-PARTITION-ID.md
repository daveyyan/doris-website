---
{
    "title": "SHOW-PARTITION-ID",
    "language": "zh-CN"
}
---

<!--
Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied.  See the License for the
specific language governing permissions and limitations
under the License.
-->

## SHOW-PARTITION-ID

### Name

SHOW PARTITION ID

## 描述

该语句用于根据 partition id 查找对应的 database name, table name, partition name（仅管理员使用）

语法：

```sql
    SHOW PARTITION [partition_id]
```

## 举例

1. 根据 partition id 查找对应的 database name, table name, partition name

    ```sql
    SHOW PARTITION 10002;
    ```

### Keywords

    SHOW, PARTITION, ID

### Best Practice

