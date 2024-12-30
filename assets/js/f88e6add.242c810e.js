"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["436194"],{965181:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>d,assets:()=>u,toc:()=>c,frontMatter:()=>o});var s=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/histogram","title":"HISTOGRAM","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/aggregate-functions/histogram.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/histogram","permalink":"/docs/sql-manual/sql-functions/aggregate-functions/histogram","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"HISTOGRAM","language":"en"},"sidebar":"docs","previous":{"title":"PERCENTILE_APPROX","permalink":"/docs/sql-manual/sql-functions/aggregate-functions/percentile-approx"},"next":{"title":"GROUP_ARRAY_INTERSECT","permalink":"/docs/sql-manual/sql-functions/aggregate-functions/group-array-intersect"}}'),i=t("785893"),r=t("250065");let o={title:"HISTOGRAM",language:"en"},l=void 0,u={},c=[{value:"HISTOGRAM",id:"histogram",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function a(e){let n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"histogram",children:"HISTOGRAM"}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,i.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"histogram(expr[, INT num_buckets])"})}),"\n",(0,i.jsx)(n.p,{children:'The histogram function is used to describe the distribution of the data. It uses an "equal height" bucking strategy, and divides the data into buckets according to the value of the data. It describes each bucket with some simple data, such as the number of values that fall in the bucket. It is mainly used by the optimizer to estimate the range query.'}),"\n",(0,i.jsx)(n.p,{children:"The result of the function returns an empty or Json string."}),"\n",(0,i.jsx)(n.p,{children:"Parameter description\uFF1A"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"num_buckets\uFF1AOptional. Limit the number of histogram buckets. The default value is 128."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Alias function: ",(0,i.jsx)(n.code,{children:"hist(expr[, INT num_buckets])"})]}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'MySQL [test]> SELECT histogram(c_float) FROM histogram_test;\n+-------------------------------------------------------------------------------------------------------------------------------------+\n| histogram(`c_float`)                                                                                                                |\n+-------------------------------------------------------------------------------------------------------------------------------------+\n| {"num_buckets":3,"buckets":[{"lower":"0.1","upper":"0.1","count":1,"pre_sum":0,"ndv":1},...]} |\n+-------------------------------------------------------------------------------------------------------------------------------------+\n\nMySQL [test]> SELECT histogram(c_string, 2) FROM histogram_test;\n+-------------------------------------------------------------------------------------------------------------------------------------+\n| histogram(`c_string`)                                                                                                               |\n+-------------------------------------------------------------------------------------------------------------------------------------+\n| {"num_buckets":2,"buckets":[{"lower":"str1","upper":"str7","count":4,"pre_sum":0,"ndv":3},...]} |\n+-------------------------------------------------------------------------------------------------------------------------------------+\n'})}),"\n",(0,i.jsx)(n.p,{children:"Query result description\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n    "num_buckets": 3, \n    "buckets": [\n        {\n            "lower": "0.1", \n            "upper": "0.2", \n            "count": 2, \n            "pre_sum": 0, \n            "ndv": 2\n        }, \n        {\n            "lower": "0.8", \n            "upper": "0.9", \n            "count": 2, \n            "pre_sum": 2, \n            "ndv": 2\n        }, \n        {\n            "lower": "1.0", \n            "upper": "1.0", \n            "count": 2, \n            "pre_sum": 4, \n            "ndv": 1\n        }\n    ]\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Field description\uFF1A"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"num_buckets\uFF1AThe number of buckets"}),"\n",(0,i.jsxs)(n.li,{children:["buckets\uFF1AAll buckets\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"lower\uFF1AUpper bound of the bucket"}),"\n",(0,i.jsx)(n.li,{children:"upper\uFF1ALower bound of the bucket"}),"\n",(0,i.jsx)(n.li,{children:"count\uFF1AThe number of elements contained in the bucket"}),"\n",(0,i.jsx)(n.li,{children:"pre_sum\uFF1AThe total number of elements in the front bucket"}),"\n",(0,i.jsx)(n.li,{children:"ndv\uFF1AThe number of different values in the bucket"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Total number of histogram elements = number of elements in the last bucket(count) + total number of elements in the previous bucket(pre_sum)."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(n.p,{children:"HISTOGRAM, HIST"})]})}function d(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return o}});var s=t(667294);let i={},r=s.createContext(i);function o(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);