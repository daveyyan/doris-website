"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["617268"],{449625:function(e,t,n){n.r(t),n.d(t,{metadata:()=>a,contentTitle:()=>s,default:()=>d,assets:()=>l,toc:()=>c,frontMatter:()=>r});var a=JSON.parse('{"id":"advanced/orthogonal-bitmap-manual","title":"Orthogonal BITMAP calculation","description":"\x3c!--","source":"@site/versioned_docs/version-1.2/advanced/orthogonal-bitmap-manual.md","sourceDirName":"advanced","slug":"/advanced/orthogonal-bitmap-manual","permalink":"/docs/1.2/advanced/orthogonal-bitmap-manual","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"Orthogonal BITMAP calculation","language":"en"},"sidebar":"docs","previous":{"title":"Resource management","permalink":"/docs/1.2/advanced/resource"},"next":{"title":"Approximate deduplication using HLL","permalink":"/docs/1.2/advanced/using-hll"}}'),i=n("785893"),o=n("250065");let r={title:"Orthogonal BITMAP calculation",language:"en"},s="Orthogonal BITMAP calculation",l={},c=[{value:"Background",id:"background",level:2},{value:"User guide",id:"user-guide",level:2},{value:"Create table",id:"create-table",level:3},{value:"Data Load",id:"data-load",level:3},{value:"orthogonal_bitmap_intersect",id:"orthogonal_bitmap_intersect",level:4},{value:"orthogonal_bitmap_intersect_count",id:"orthogonal_bitmap_intersect_count",level:4},{value:"orthogonal_bitmap_union_count",id:"orthogonal_bitmap_union_count",level:4},{value:"Suitable for the scene",id:"suitable-for-the-scene",level:3}];function h(e){let t={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"orthogonal-bitmap-calculation",children:"Orthogonal BITMAP calculation"})}),"\n",(0,i.jsx)(t.h2,{id:"background",children:"Background"}),"\n",(0,i.jsx)(t.p,{children:"The original bitmap aggregate function designed by Doris is more general, but it has poor performance for the intersection and union of bitmap large cardinality above 100 million level. There are two main reasons for checking the bitmap aggregate function logic of the back-end be. First, when the bitmap cardinality is large, if the bitmap data size exceeds 1g, the network / disk IO processing time is relatively long; second, after the scan data, all the back-end be instances are transmitted to the top-level node for intersection and union operation, which brings pressure on the top-level single node and becomes the processing bottleneck."}),"\n",(0,i.jsx)(t.p,{children:"The solution is to divide the bitmap column values according to the range, and the values of different ranges are stored in different buckets, so as to ensure that the bitmap values of different buckets are orthogonal and the data distribution is more uniform. In the case of query, the orthogonal bitmap in different buckets is firstly aggregated and calculated, and then the top-level node directly combines and summarizes the aggregated calculated values and outputs them. This will greatly improve the computing efficiency and solve the bottleneck problem of the top single node computing."}),"\n",(0,i.jsx)(t.h2,{id:"user-guide",children:"User guide"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Create a table and add hid column to represent bitmap column value ID range as hash bucket column"}),"\n",(0,i.jsx)(t.li,{children:"Usage scenarios"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"create-table",children:"Create table"}),"\n",(0,i.jsx)(t.p,{children:"We need to use the aggregation model when building tables. The data type is bitmap, and the aggregation function is bitmap_ union"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'CREATE TABLE `user_tag_bitmap` (\n  `tag` bigint(20) NULL COMMENT "user tag",\n  `hid` smallint(6) NULL COMMENT "Bucket ID",\n  `user_id` bitmap BITMAP_UNION NULL COMMENT ""\n) ENGINE=OLAP\nAGGREGATE KEY(`tag`, `hid`)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH(`hid`) BUCKETS 3\n'})}),"\n",(0,i.jsx)(t.p,{children:"The HID column is added to the table schema to indicate the ID range as a hash bucket column."}),"\n",(0,i.jsx)(t.p,{children:"Note: the HID number and buckets should be set reasonably, and the HID number should be set at least 5 times of buckets, so as to make the data hash bucket division as balanced as possible"}),"\n",(0,i.jsx)(t.h3,{id:"data-load",children:"Data Load"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"LOAD LABEL user_tag_bitmap_test\n(\nDATA INFILE('hdfs://abc')\nINTO TABLE user_tag_bitmap\nCOLUMNS TERMINATED BY ','\n(tmp_tag, tmp_user_id)\nSET (\ntag = tmp_tag,\nhid = ceil(tmp_user_id/5000000),\nuser_id = to_bitmap(tmp_user_id)\n)\n)\n...\n"})}),"\n",(0,i.jsx)(t.p,{children:"Data format:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"11111111,1\n11111112,2\n11111113,3\n11111114,4\n...\n"})}),"\n",(0,i.jsx)(t.p,{children:"Note: the first column represents the user tags, which have been converted from Chinese into numbers"}),"\n",(0,i.jsx)(t.p,{children:"When loading data, vertically cut the bitmap value range of the user. For example, the hid value of the user ID in the range of 1-5000000 is the same, and the row with the same HID value will be allocated into a sub-bucket, so that the bitmap value in each sub-bucket is orthogonal. On the UDAF implementation of bitmap, the orthogonal feature of bitmap value in the bucket can be used to perform intersection union calculation, and the calculation results will be shuffled to the top node for aggregation."}),"\n",(0,i.jsx)(t.p,{children:"Note: The orthogonal bitmap function cannot be used in the partitioned table. Because the partitions of the partitioned table are orthogonal, the data between partitions cannot be guaranteed to be orthogonal, so the calculation result cannot be estimated."}),"\n",(0,i.jsx)(t.h4,{id:"orthogonal_bitmap_intersect",children:"orthogonal_bitmap_intersect"}),"\n",(0,i.jsx)(t.p,{children:"The bitmap intersection function"}),"\n",(0,i.jsx)(t.p,{children:"Syntax:"}),"\n",(0,i.jsx)(t.p,{children:"orthogonal_bitmap_intersect(bitmap_column, column_to_filter, filter_values)"}),"\n",(0,i.jsx)(t.p,{children:"Parameters:"}),"\n",(0,i.jsx)(t.p,{children:"the first parameter is the bitmap column, the second parameter is the dimension column for filtering, and the third parameter is the variable length parameter, which means different values of the filter dimension column"}),"\n",(0,i.jsx)(t.p,{children:"Explain:"}),"\n",(0,i.jsx)(t.p,{children:"on the basis of this table schema, this function has two levels of aggregation in query planning. In the first layer, be nodes (update and serialize) first press filter_ Values are used to hash aggregate the keys, and then the bitmaps of all keys are intersected. The results are serialized and sent to the second level be nodes (merge and finalize). In the second level be nodes, all the bitmap values from the first level nodes are combined circularly"}),"\n",(0,i.jsx)(t.p,{children:"Example:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"select BITMAP_COUNT(orthogonal_bitmap_intersect(user_id, tag, 13080800, 11110200)) from user_tag_bitmap  where tag in (13080800, 11110200);\n\n"})}),"\n",(0,i.jsx)(t.h4,{id:"orthogonal_bitmap_intersect_count",children:"orthogonal_bitmap_intersect_count"}),"\n",(0,i.jsx)(t.p,{children:"To calculate the bitmap intersection count function, the syntax is the same as the original Intersect_Count, but the implementation is different"}),"\n",(0,i.jsx)(t.p,{children:"Syntax:"}),"\n",(0,i.jsx)(t.p,{children:"orthogonal_bitmap_intersect_count(bitmap_column, column_to_filter, filter_values)"}),"\n",(0,i.jsx)(t.p,{children:"Parameters:"}),"\n",(0,i.jsx)(t.p,{children:"The first parameter is the bitmap column, the second parameter is the dimension column for filtering, and the third parameter is the variable length parameter, which means different values of the filter dimension column"}),"\n",(0,i.jsx)(t.p,{children:"Explain:"}),"\n",(0,i.jsx)(t.p,{children:"on the basis of this table schema, the query planning aggregation is divided into two layers. In the first layer, be nodes (update and serialize) first press filter_ Values are used to hash aggregate the keys, and then the intersection of bitmaps of all keys is performed, and then the intersection results are counted. The count values are serialized and sent to the second level be nodes (merge and finalize). In the second level be nodes, the sum of all the count values from the first level nodes is calculated circularly"}),"\n",(0,i.jsx)(t.h4,{id:"orthogonal_bitmap_union_count",children:"orthogonal_bitmap_union_count"}),"\n",(0,i.jsx)(t.p,{children:"Figure out the bitmap union count function, syntax with the original bitmap_union_count, but the implementation is different."}),"\n",(0,i.jsx)(t.p,{children:"Syntax:"}),"\n",(0,i.jsx)(t.p,{children:"orthogonal_bitmap_union_count(bitmap_column)"}),"\n",(0,i.jsx)(t.p,{children:"Explain:"}),"\n",(0,i.jsx)(t.p,{children:"on the basis of this table schema, this function is divided into two layers. In the first layer, be nodes (update and serialize) merge all the bitmaps, and then count the resulting bitmaps. The count values are serialized and sent to the second level be nodes (merge and finalize). In the second layer, the be nodes are used to calculate the sum of all the count values from the first level nodes"}),"\n",(0,i.jsx)(t.h3,{id:"suitable-for-the-scene",children:"Suitable for the scene"}),"\n",(0,i.jsx)(t.p,{children:"It is consistent with the scenario of orthogonal calculation of bitmap, such as calculation retention, funnel, user portrait, etc."}),"\n",(0,i.jsx)(t.p,{children:"Crowd selection:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"select orthogonal_bitmap_intersect_count(user_id, tag, 13080800, 11110200) from user_tag_bitmap where tag in (13080800, 11110200);\n\nNote: 13080800 and 11110200 represent user labels\n"})}),"\n",(0,i.jsx)(t.p,{children:"Calculate the deduplication value for user_id:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"select orthogonal_bitmap_union_count(user_id) from user_tag_bitmap where tag in (13080800, 11110200);\n"})})]})}function d(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return r}});var a=n(667294);let i={},o=a.createContext(i);function r(e){let t=a.useContext(o);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);