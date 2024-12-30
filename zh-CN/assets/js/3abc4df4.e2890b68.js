"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["593313"],{81773:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>r,default:()=>h,assets:()=>c,toc:()=>d,frontMatter:()=>a});var t=JSON.parse('{"id":"sql-manual/sql-statements/data-modification/load-and-export/MYSQL-LOAD","title":"MYSQL LOAD","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-statements/data-modification/load-and-export/MYSQL-LOAD.md","sourceDirName":"sql-manual/sql-statements/data-modification/load-and-export","slug":"/sql-manual/sql-statements/data-modification/load-and-export/MYSQL-LOAD","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/data-modification/load-and-export/MYSQL-LOAD","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"MYSQL LOAD","language":"zh-CN"},"sidebar":"docs","previous":{"title":"BROKER LOAD","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/data-modification/load-and-export/BROKER-LOAD"},"next":{"title":"SHOW LOAD","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/data-modification/load-and-export/SHOW-LOAD"}}'),l=s("785893"),i=s("250065");let a={title:"MYSQL LOAD",language:"zh-CN"},r=void 0,c={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"PROPERTIES",id:"properties",level:3},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u5173\u952E\u8BCD",id:"\u5173\u952E\u8BCD",level:2}];function o(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(n.p,{children:"mysql-load: \u4F7F\u7528 MySql \u5BA2\u6237\u7AEF\u5BFC\u5165\u672C\u5730\u6570\u636E"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"LOAD DATA\n[LOCAL]\nINFILE 'file_name'\nINTO TABLE tbl_name\n[PARTITION (partition_name [, partition_name] ...)]\n[COLUMNS TERMINATED BY 'string']\n[LINES TERMINATED BY 'string']\n[IGNORE number {LINES | ROWS}]\n[(col_name_or_user_var [, col_name_or_user_var] ...)]\n[SET (col_name={expr | DEFAULT} [, col_name={expr | DEFAULT}] ...)]\n[PROPERTIES (key1 = value1 [, key2=value2]) ]\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u5411\u6307\u5B9A\u7684 table \u5BFC\u5165\u6570\u636E\uFF0C\u4E0E\u666E\u901A Load \u533A\u522B\u662F\uFF0C\u8FD9\u79CD\u5BFC\u5165\u65B9\u5F0F\u662F\u540C\u6B65\u5BFC\u5165\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u8FD9\u79CD\u5BFC\u5165\u65B9\u5F0F\u4ECD\u7136\u80FD\u591F\u4FDD\u8BC1\u4E00\u6279\u5BFC\u5165\u4EFB\u52A1\u7684\u539F\u5B50\u6027\uFF0C\u8981\u4E48\u5168\u90E8\u6570\u636E\u5BFC\u5165\u6210\u529F\uFF0C\u8981\u4E48\u5168\u90E8\u5931\u8D25\u3002"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["MySQL Load \u4EE5\u8BED\u6CD5",(0,l.jsx)(n.code,{children:"LOAD DATA"}),"\u5F00\u5934\uFF0C\u65E0\u987B\u6307\u5B9A LABEL"]}),"\n",(0,l.jsxs)(n.li,{children:["\u6307\u5B9A",(0,l.jsx)(n.code,{children:"LOCAL"}),"\u8868\u793A\u8BFB\u53D6\u5BA2\u6237\u7AEF\u6587\u4EF6\u3002\u4E0D\u6307\u5B9A\u8868\u793A\u8BFB\u53D6 FE \u670D\u52A1\u7AEF\u672C\u5730\u6587\u4EF6\u3002\u5BFC\u5165 FE \u672C\u5730\u6587\u4EF6\u7684\u529F\u80FD\u9ED8\u8BA4\u662F\u5173\u95ED\u7684\uFF0C\u9700\u8981\u5728 FE \u8282\u70B9\u4E0A\u8BBE\u7F6E",(0,l.jsx)(n.code,{children:"mysql_load_server_secure_path"}),"\u6765\u6307\u5B9A\u5B89\u5168\u8DEF\u5F84\uFF0C\u624D\u80FD\u6253\u5F00\u8BE5\u529F\u80FD\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"INFILE"}),"\u5185\u586B\u5199\u672C\u5730\u6587\u4EF6\u8DEF\u5F84\uFF0C\u53EF\u4EE5\u662F\u76F8\u5BF9\u8DEF\u5F84\uFF0C\u4E5F\u53EF\u4EE5\u662F\u7EDD\u5BF9\u8DEF\u5F84\u3002\u76EE\u524D\u53EA\u652F\u6301\u5355\u4E2A\u6587\u4EF6\uFF0C\u4E0D\u652F\u6301\u591A\u4E2A\u6587\u4EF6"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"INTO TABLE"}),"\u7684\u8868\u540D\u53EF\u4EE5\u6307\u5B9A\u6570\u636E\u5E93\u540D\uFF0C\u5982\u6848\u4F8B\u6240\u793A\u3002\u4E5F\u53EF\u4EE5\u7701\u7565\uFF0C\u5219\u4F1A\u4F7F\u7528\u5F53\u524D\u7528\u6237\u6240\u5728\u7684\u6570\u636E\u5E93\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"PARTITION"}),"\u8BED\u6CD5\u652F\u6301\u6307\u5B9A\u5206\u533A\u5BFC\u5165"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"COLUMNS TERMINATED BY"}),"\u6307\u5B9A\u5217\u5206\u9694\u7B26"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"LINES TERMINATED BY"}),"\u6307\u5B9A\u884C\u5206\u9694\u7B26"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"IGNORE num LINES"}),"\u7528\u6237\u8DF3\u8FC7 CSV \u7684\u8868\u5934\uFF0C\u53EF\u4EE5\u8DF3\u8FC7\u4EFB\u610F\u884C\u6570\u3002\u8BE5\u8BED\u6CD5\u4E5F\u53EF\u4EE5\u7528",(0,l.jsx)(n.code,{children:"IGNORE num ROWS"}),"\u4EE3\u66FF"]}),"\n",(0,l.jsxs)(n.li,{children:["\u5217\u6620\u5C04\u8BED\u6CD5\uFF0C\u5177\u4F53\u53C2\u6570\u8BE6\u89C1",(0,l.jsx)(n.a,{href:"/zh-CN/docs/3.0/data-operate/import/import-way/mysql-load-manual",children:"\u5BFC\u5165\u7684\u6570\u636E\u8F6C\u6362"})," \u7684\u5217\u6620\u5C04\u7AE0\u8282"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"PROPERTIES"}),"\u53C2\u6570\u914D\u7F6E\uFF0C\u8BE6\u89C1\u4E0B\u6587"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"properties",children:"PROPERTIES"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"max_filter_ratio\uFF1A\u6700\u5927\u5BB9\u5FCD\u53EF\u8FC7\u6EE4\uFF08\u6570\u636E\u4E0D\u89C4\u8303\u7B49\u539F\u56E0\uFF09\u7684\u6570\u636E\u6BD4\u4F8B\u3002\u9ED8\u8BA4\u96F6\u5BB9\u5FCD\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"timeout: \u6307\u5B9A\u5BFC\u5165\u7684\u8D85\u65F6\u65F6\u95F4\u3002\u5355\u4F4D\u79D2\u3002\u9ED8\u8BA4\u662F 600 \u79D2\u3002\u53EF\u8BBE\u7F6E\u8303\u56F4\u4E3A 1 \u79D2 ~ 259200 \u79D2\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"strict_mode: \u7528\u6237\u6307\u5B9A\u6B64\u6B21\u5BFC\u5165\u662F\u5426\u5F00\u542F\u4E25\u683C\u6A21\u5F0F\uFF0C\u9ED8\u8BA4\u4E3A\u5173\u95ED\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"timezone: \u6307\u5B9A\u672C\u6B21\u5BFC\u5165\u6240\u4F7F\u7528\u7684\u65F6\u533A\u3002\u9ED8\u8BA4\u4E3A\u4E1C\u516B\u533A\u3002\u8BE5\u53C2\u6570\u4F1A\u5F71\u54CD\u6240\u6709\u5BFC\u5165\u6D89\u53CA\u7684\u548C\u65F6\u533A\u6709\u5173\u7684\u51FD\u6570\u7ED3\u679C\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"exec_mem_limit: \u5BFC\u5165\u5185\u5B58\u9650\u5236\u3002\u9ED8\u8BA4\u4E3A 2GB\u3002\u5355\u4F4D\u4E3A\u5B57\u8282\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"trim_double_quotes: \u5E03\u5C14\u7C7B\u578B\uFF0C\u9ED8\u8BA4\u503C\u4E3A false\uFF0C\u4E3A true \u65F6\u8868\u793A\u88C1\u526A\u6389\u5BFC\u5165\u6587\u4EF6\u6BCF\u4E2A\u5B57\u6BB5\u6700\u5916\u5C42\u7684\u53CC\u5F15\u53F7\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:['enclose: \u5305\u56F4\u7B26\u3002\u5F53 csv \u6570\u636E\u5B57\u6BB5\u4E2D\u542B\u6709\u884C\u5206\u9694\u7B26\u6216\u5217\u5206\u9694\u7B26\u65F6\uFF0C\u4E3A\u9632\u6B62\u610F\u5916\u622A\u65AD\uFF0C\u53EF\u6307\u5B9A\u5355\u5B57\u8282\u5B57\u7B26\u4F5C\u4E3A\u5305\u56F4\u7B26\u8D77\u5230\u4FDD\u62A4\u4F5C\u7528\u3002\u4F8B\u5982\u5217\u5206\u9694\u7B26\u4E3A","\uFF0C\u5305\u56F4\u7B26\u4E3A"\'"\uFF0C\u6570\u636E\u4E3A"a,\'b,c\'",\u5219"b,c"\u4F1A\u88AB\u89E3\u6790\u4E3A\u4E00\u4E2A\u5B57\u6BB5\u3002\u6CE8\u610F\uFF1A\u5F53 enclose \u8BBE\u7F6E\u4E3A',(0,l.jsx)(n.code,{children:'"'}),"\u65F6\uFF0Ctrim_double_quotes \u4E00\u5B9A\u8981\u8BBE\u7F6E\u4E3A true\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:'escape: \u8F6C\u4E49\u7B26\u3002\u7528\u4E8E\u8F6C\u4E49\u5728 csv \u5B57\u6BB5\u4E2D\u51FA\u73B0\u7684\u4E0E\u5305\u56F4\u7B26\u76F8\u540C\u7684\u5B57\u7B26\u3002\u4F8B\u5982\u6570\u636E\u4E3A"a,\'b,\'c\'"\uFF0C\u5305\u56F4\u7B26\u4E3A"\'"\uFF0C\u5E0C\u671B"b,\'c \u88AB\u4F5C\u4E3A\u4E00\u4E2A\u5B57\u6BB5\u89E3\u6790\uFF0C\u5219\u9700\u8981\u6307\u5B9A\u5355\u5B57\u8282\u8F6C\u4E49\u7B26\uFF0C\u4F8B\u5982""\uFF0C\u7136\u540E\u5C06\u6570\u636E\u4FEE\u6539\u4E3A"a,\'b,\'c\'"\u3002'}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u5C06\u5BA2\u6237\u7AEF\u672C\u5730\u6587\u4EF6'testData'\u4E2D\u7684\u6570\u636E\u5BFC\u5165\u5230\u6570\u636E\u5E93'testDb'\u4E2D'testTbl'\u7684\u8868\u3002\u6307\u5B9A\u8D85\u65F6\u65F6\u95F4\u4E3A 100 \u79D2"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'LOAD DATA LOCAL\nINFILE \'testData\'\nINTO TABLE testDb.testTbl\nPROPERTIES ("timeout"="100")\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u5C06\u670D\u52A1\u7AEF\u672C\u5730\u6587\u4EF6'/root/testData'(\u9700\u8BBE\u7F6E FE \u914D\u7F6E",(0,l.jsx)(n.code,{children:"mysql_load_server_secure_path"}),"\u4E3A",(0,l.jsx)(n.code,{children:"/root"}),") \u4E2D\u7684\u6570\u636E\u5BFC\u5165\u5230\u6570\u636E\u5E93'testDb'\u4E2D'testTbl'\u7684\u8868\u3002\u6307\u5B9A\u8D85\u65F6\u65F6\u95F4\u4E3A 100 \u79D2"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'LOAD DATA\nINFILE \'/root/testData\'\nINTO TABLE testDb.testTbl\nPROPERTIES ("timeout"="100")\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u5C06\u5BA2\u6237\u7AEF\u672C\u5730\u6587\u4EF6'testData'\u4E2D\u7684\u6570\u636E\u5BFC\u5165\u5230\u6570\u636E\u5E93'testDb'\u4E2D'testTbl'\u7684\u8868\uFF0C\u5141\u8BB8 20% \u7684\u9519\u8BEF\u7387"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'LOAD DATA LOCAL\nINFILE \'testData\'\nINTO TABLE testDb.testTbl\nPROPERTIES ("max_filter_ratio"="0.2")\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u5C06\u5BA2\u6237\u7AEF\u672C\u5730\u6587\u4EF6'testData'\u4E2D\u7684\u6570\u636E\u5BFC\u5165\u5230\u6570\u636E\u5E93'testDb'\u4E2D'testTbl'\u7684\u8868\uFF0C\u5141\u8BB8 20% \u7684\u9519\u8BEF\u7387\uFF0C\u5E76\u4E14\u6307\u5B9A\u6587\u4EF6\u7684\u5217\u540D"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'LOAD DATA LOCAL\nINFILE \'testData\'\nINTO TABLE testDb.testTbl\n(k2, k1, v1)\nPROPERTIES ("max_filter_ratio"="0.2")\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u5C06\u672C\u5730\u6587\u4EF6'testData'\u4E2D\u7684\u6570\u636E\u5BFC\u5165\u5230\u6570\u636E\u5E93'testDb'\u4E2D'testTbl'\u7684\u8868\u4E2D\u7684 p1, p2 \u5206\u533A\uFF0C\u5141\u8BB8 20% \u7684\u9519\u8BEF\u7387\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'LOAD DATA LOCAL\nINFILE \'testData\'\nINTO TABLE testDb.testTbl\nPARTITION (p1, p2)\nPROPERTIES ("max_filter_ratio"="0.2")\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u5C06\u672C\u5730\u884C\u5206\u9694\u7B26\u4E3A",(0,l.jsx)(n.code,{children:"0102"}),",\u5217\u5206\u9694\u7B26\u4E3A",(0,l.jsx)(n.code,{children:"0304"}),"\u7684 CSV \u6587\u4EF6'testData'\u4E2D\u7684\u6570\u636E\u5BFC\u5165\u5230\u6570\u636E\u5E93'testDb'\u4E2D'testTbl'\u7684\u8868\u4E2D\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"LOAD DATA LOCAL\nINFILE 'testData'\nINTO TABLE testDb.testTbl\nCOLUMNS TERMINATED BY '0304'\nLINES TERMINATED BY '0102'\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u5C06\u672C\u5730\u6587\u4EF6'testData'\u4E2D\u7684\u6570\u636E\u5BFC\u5165\u5230\u6570\u636E\u5E93'testDb'\u4E2D'testTbl'\u7684\u8868\u4E2D\u7684 p1, p2 \u5206\u533A\uFF0C\u5E76\u8DF3\u8FC7\u524D\u9762 3 \u884C\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"LOAD DATA LOCAL\nINFILE 'testData'\nINTO TABLE testDb.testTbl\nPARTITION (p1, p2)\nIGNORE 1 LINES\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u5BFC\u5165\u6570\u636E\u8FDB\u884C\u4E25\u683C\u6A21\u5F0F\u8FC7\u6EE4\uFF0C\u5E76\u8BBE\u7F6E\u65F6\u533A\u4E3A Africa/Abidjan"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'LOAD DATA LOCAL\nINFILE \'testData\'\nINTO TABLE testDb.testTbl\nPROPERTIES ("strict_mode"="true", "timezone"="Africa/Abidjan")\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u5BFC\u5165\u6570\u636E\u8FDB\u884C\u9650\u5236\u5BFC\u5165\u5185\u5B58\u4E3A 10GB, \u5E76\u5728 10 \u5206\u949F\u8D85\u65F6"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'LOAD DATA LOCAL\nINFILE \'testData\'\nINTO TABLE testDb.testTbl\nPROPERTIES ("exec_mem_limit"="10737418240", "timeout"="600")\n'})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u5173\u952E\u8BCD",children:"\u5173\u952E\u8BCD"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"MYSQL, LOAD\n"})})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return a}});var t=s(667294);let l={},i=t.createContext(l);function a(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);