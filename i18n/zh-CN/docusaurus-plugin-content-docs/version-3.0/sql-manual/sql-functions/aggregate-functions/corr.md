---
{
    "title": "CORR",
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

## 语法

` double corr(x, y)`

计算皮尔逊系数，即返回结果为：x 和 y 的协方差，除 x 和 y 的标准差乘积。
如果 x 或 y 的标准差为 0, 将返回 0。


## 举例

```
mysql> select corr(x,y) from baseall;
+---------------------+
| corr(x, y)          |
+---------------------+
| 0.89442719099991586 |
+---------------------+
1 row in set (0.21 sec)

```
