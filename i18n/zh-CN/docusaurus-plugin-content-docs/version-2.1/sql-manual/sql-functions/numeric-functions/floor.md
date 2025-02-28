---
{
    "title": "FLOOR",
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

## floor

## 描述
## 语法

`BIGINT floor(DOUBLE x)`

如果不指定`d`: 返回小于或等于`x`的最大整数值, 这也是**最常见的用法**.
否则, 按照下面规则返回最大的小于或者等于`x`的舍入数字:

如 `d` 是字面量（不是列）:  
`d` = 0: 等同于没有 `d`
`d` > 0 or `d` < 0: 舍入数是 `1/(10^d)` 的倍数，如果 `1/(10^d)` 不精确，则为相应数据类型的最接近的数字。

如果 `d` 为一个列，并且第一个参数为 Decimal 类型，那么结果 Decimal 会跟入参 Decimal 具有相同的小数部分长度。

:::tip
该函数的另一个别名为 `dfloor`。
:::

## 举例

```
mysql> select floor(1);
+------------+
| floor(1.0) |
+------------+
|          1 |
+------------+
mysql> select floor(2.4);
+------------+
| floor(2.4) |
+------------+
|          2 |
+------------+
mysql> select floor(-10.3);
+--------------+
| floor(-10.3) |
+--------------+
|          -11 |
+--------------+
mysql> select floor(123.45, 1), floor(123.45), floor(123.45, 0), floor(123.45, -1);
+------------------+---------------+------------------+-------------------+
| floor(123.45, 1) | floor(123.45) | floor(123.45, 0) | floor(123.45, -1) |
+------------------+---------------+------------------+-------------------+
|            123.4 |           123 |              123 |               120 |
+------------------+---------------+------------------+-------------------+
mysql> SELECT number
    -> , floor(number * 2.5, number - 1) AS f_decimal_column
    -> , floor(number * 2.5, 0) AS f_decimal_literal
    -> , floor(cast(number * 2.5 AS DOUBLE), number - 1) AS f_double_column
    -> , floor(cast(number * 2.5 AS DOUBLE), 0) AS f_double_literal
    -> FROM test_enhanced_round
    -> WHERE rid = 1;
+--------+------------------+-------------------+-----------------+------------------+
| number | f_decimal_column | f_decimal_literal | f_double_column | f_double_literal |
+--------+------------------+-------------------+-----------------+------------------+
|      1 |              2.0 |                 2 |               2 |                2 |
+--------+------------------+-------------------+-----------------+------------------+
```

### keywords
	FLOOR, DFLOOR
