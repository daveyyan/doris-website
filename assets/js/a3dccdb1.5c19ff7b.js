"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["549529"],{812108:function(r,a,n){n.r(a),n.d(a,{metadata:()=>e,contentTitle:()=>c,default:()=>m,assets:()=>i,toc:()=>o,frontMatter:()=>y});var e=JSON.parse('{"id":"sql-manual/sql-functions/array-functions/array-map","title":"ARRAY_MAP","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/array-functions/array-map.md","sourceDirName":"sql-manual/sql-functions/array-functions","slug":"/sql-manual/sql-functions/array-functions/array-map","permalink":"/docs/sql-manual/sql-functions/array-functions/array-map","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"ARRAY_MAP","language":"en"},"sidebar":"docs","previous":{"title":"ARRAY_MIN","permalink":"/docs/sql-manual/sql-functions/array-functions/array-min"},"next":{"title":"ARRAY_FILTER","permalink":"/docs/sql-manual/sql-functions/array-functions/array-filter"}}'),s=n("785893"),t=n("250065");let y={title:"ARRAY_MAP",language:"en"},c=void 0,i={},o=[{value:"array_map",id:"array_map",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function l(r){let a={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.a)(),...r.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h2,{id:"array_map",children:"array_map"}),"\n",(0,s.jsx)(a.p,{children:"array_map(lambda,array,....)"}),"\n",(0,s.jsx)(a.h3,{id:"description",children:"description"}),"\n",(0,s.jsx)(a.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.code,{children:"ARRAY<T> array_map(lambda, ARRAY<T> array1, ARRAY<T> array2)"})}),"\n",(0,s.jsx)(a.p,{children:"Use a lambda expression as the input parameter to calculate the corresponding expression for the internal data of other input ARRAY parameters.\nThe number of parameters entered in the lambda expression is 1 or more, which must be consistent with the number of input array columns.\nThe scalar functions can be executed in lambda, and aggregate functions are not supported."}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{children:"array_map(x->x, array1);\narray_map(x->(x+2), array1);\narray_map(x->(abs(x)-2), array1);\n\narray_map((x,y)->(x = y), array1, array2);\narray_map((x,y)->(power(x,2)+y), array1, array2);\narray_map((x,y,z)->(abs(x)+y*z), array1, array2, array3);\n"})}),"\n",(0,s.jsx)(a.h3,{id:"example",children:"example"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-shell",children:"\nmysql [test]>select *, array_map(x->x,[1,2,3]) from array_test2 order by id;\n+------+-----------------+-------------------------+----------------------------------------+\n| id   | c_array1        | c_array2                | array_map([x] -> x(0), ARRAY(1, 2, 3)) |\n+------+-----------------+-------------------------+----------------------------------------+\n|    1 | [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [1, 2, 3]                              |\n|    2 | [6, 7, 8]       | [10, 12, 13]            | [1, 2, 3]                              |\n|    3 | [1]             | [-100]                  | [1, 2, 3]                              |\n|    4 | NULL            | NULL                    | [1, 2, 3]                              |\n+------+-----------------+-------------------------+----------------------------------------+\n4 rows in set (0.02 sec)\n\nmysql [test]>select *, array_map(x->x+2,[1,2,3]) from array_test2 order by id;\n+------+-----------------+-------------------------+--------------------------------------------+\n| id   | c_array1        | c_array2                | array_map([x] -> x(0) + 2, ARRAY(1, 2, 3)) |\n+------+-----------------+-------------------------+--------------------------------------------+\n|    1 | [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [3, 4, 5]                                  |\n|    2 | [6, 7, 8]       | [10, 12, 13]            | [3, 4, 5]                                  |\n|    3 | [1]             | [-100]                  | [3, 4, 5]                                  |\n|    4 | NULL            | NULL                    | [3, 4, 5]                                  |\n+------+-----------------+-------------------------+--------------------------------------------+\n4 rows in set (0.02 sec)\n\nmysql [test]>select c_array1, c_array2, array_map(x->x,[1,2,3]) from array_test2 order by id;\n+-----------------+-------------------------+----------------------------------------+\n| c_array1        | c_array2                | array_map([x] -> x(0), ARRAY(1, 2, 3)) |\n+-----------------+-------------------------+----------------------------------------+\n| [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [1, 2, 3]                              |\n| [6, 7, 8]       | [10, 12, 13]            | [1, 2, 3]                              |\n| [1]             | [-100]                  | [1, 2, 3]                              |\n| NULL            | NULL                    | [1, 2, 3]                              |\n+-----------------+-------------------------+----------------------------------------+\n4 rows in set (0.01 sec)\n\nmysql [test]>select c_array1, c_array2, array_map(x->power(x,2),[1,2,3]) from array_test2 order by id;\n+-----------------+-------------------------+----------------------------------------------------+\n| c_array1        | c_array2                | array_map([x] -> power(x(0), 2.0), ARRAY(1, 2, 3)) |\n+-----------------+-------------------------+----------------------------------------------------+\n| [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [1, 4, 9]                                          |\n| [6, 7, 8]       | [10, 12, 13]            | [1, 4, 9]                                          |\n| [1]             | [-100]                  | [1, 4, 9]                                          |\n| NULL            | NULL                    | [1, 4, 9]                                          |\n+-----------------+-------------------------+----------------------------------------------------+\n\nmysql [test]>select c_array1, c_array2, array_map((x,y)->x+y,c_array1,c_array2) from array_test2 order by id;\n+-----------------+-------------------------+----------------------------------------------------------+\n| c_array1        | c_array2                | array_map([x, y] -> x(0) + y(1), `c_array1`, `c_array2`) |\n+-----------------+-------------------------+----------------------------------------------------------+\n| [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [11, 22, -37, 84, -95]                                   |\n| [6, 7, 8]       | [10, 12, 13]            | [16, 19, 21]                                             |\n| [1]             | [-100]                  | [-99]                                                    |\n| NULL            | NULL                    | NULL                                                     |\n+-----------------+-------------------------+----------------------------------------------------------+\n4 rows in set (0.02 sec)\n\nmysql [test]>select c_array1, c_array2, array_map((x,y)->power(x,2)+y,c_array1, c_array2) from array_test2 order by id;\n+-----------------+-------------------------+----------------------------------------------------------------------+\n| c_array1        | c_array2                | array_map([x, y] -> power(x(0), 2.0) + y(1), `c_array1`, `c_array2`) |\n+-----------------+-------------------------+----------------------------------------------------------------------+\n| [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [11, 24, -31, 96, -75]                                               |\n| [6, 7, 8]       | [10, 12, 13]            | [46, 61, 77]                                                         |\n| [1]             | [-100]                  | [-99]                                                                |\n| NULL            | NULL                    | NULL                                                                 |\n+-----------------+-------------------------+----------------------------------------------------------------------+\n4 rows in set (0.03 sec)\n\nmysql [test]>select *,array_map(x->x=3,c_array1) from array_test2 order by id;\n+------+-----------------+-------------------------+----------------------------------------+\n| id   | c_array1        | c_array2                | array_map([x] -> x(0) = 3, `c_array1`) |\n+------+-----------------+-------------------------+----------------------------------------+\n|    1 | [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [0, 0, 1, 0, 0]                        |\n|    2 | [6, 7, 8]       | [10, 12, 13]            | [0, 0, 0]                              |\n|    3 | [1]             | [-100]                  | [0]                                    |\n|    4 | NULL            | NULL                    | NULL                                   |\n+------+-----------------+-------------------------+----------------------------------------+\n4 rows in set (0.02 sec)\n\nmysql [test]>select *,array_map(x->x>3,c_array1) from array_test2 order by id;\n+------+-----------------+-------------------------+----------------------------------------+\n| id   | c_array1        | c_array2                | array_map([x] -> x(0) > 3, `c_array1`) |\n+------+-----------------+-------------------------+----------------------------------------+\n|    1 | [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [0, 0, 0, 1, 1]                        |\n|    2 | [6, 7, 8]       | [10, 12, 13]            | [1, 1, 1]                              |\n|    3 | [1]             | [-100]                  | [0]                                    |\n|    4 | NULL            | NULL                    | NULL                                   |\n+------+-----------------+-------------------------+----------------------------------------+\n4 rows in set (0.02 sec)\n\nmysql [test]>select *,array_map((x,y)->x>y,c_array1,c_array2) from array_test2 order by id;\n+------+-----------------+-------------------------+----------------------------------------------------------+\n| id   | c_array1        | c_array2                | array_map([x, y] -> x(0) > y(1), `c_array1`, `c_array2`) |\n+------+-----------------+-------------------------+----------------------------------------------------------+\n|    1 | [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [0, 0, 1, 0, 1]                                          |\n|    2 | [6, 7, 8]       | [10, 12, 13]            | [0, 0, 0]                                                |\n|    3 | [1]             | [-100]                  | [1]                                                      |\n|    4 | NULL            | NULL                    | NULL                                                     |\n+------+-----------------+-------------------------+----------------------------------------------------------+\n4 rows in set (0.02 sec)\n\nmysql [test]>select array_map(x->cast(x as string), c_array1) from test_array_map_function;\n+-----------------+-------------------------------------------------------+\n| c_array1        | array_map([x] -> CAST(x(0) AS CHARACTER), `c_array1`) |\n+-----------------+-------------------------------------------------------+\n| [1, 2, 3, 4, 5] | ['1', '2', '3', '4', '5']                             |\n| [6, 7, 8]       | ['6', '7', '8']                                       |\n| []              | []                                                    |\n| NULL            | NULL                                                  |\n+-----------------+-------------------------------------------------------+\n4 rows in set (0.01 sec)\n"})}),"\n",(0,s.jsx)(a.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(a.p,{children:"ARRAY,MAP,ARRAY_MAP"})]})}function m(r={}){let{wrapper:a}={...(0,t.a)(),...r.components};return a?(0,s.jsx)(a,{...r,children:(0,s.jsx)(l,{...r})}):l(r)}},250065:function(r,a,n){n.d(a,{Z:function(){return c},a:function(){return y}});var e=n(667294);let s={},t=e.createContext(s);function y(r){let a=e.useContext(t);return e.useMemo(function(){return"function"==typeof r?r(a):{...a,...r}},[a,r])}function c(r){let a;return a=r.disableParentContext?"function"==typeof r.components?r.components(s):r.components||s:y(r.components),e.createElement(t.Provider,{value:a},r.children)}}}]);