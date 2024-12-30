"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["708786"],{188961:function(e,i,n){n.r(i),n.d(i,{metadata:()=>s,contentTitle:()=>o,default:()=>u,assets:()=>c,toc:()=>a,frontMatter:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-data-types/numeric/DECIMAL","title":"DECIMAL","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-data-types/numeric/DECIMAL.md","sourceDirName":"sql-manual/sql-data-types/numeric","slug":"/sql-manual/sql-data-types/numeric/DECIMAL","permalink":"/docs/2.0/sql-manual/sql-data-types/numeric/DECIMAL","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"DECIMAL","language":"en"},"sidebar":"docs","previous":{"title":"DOUBLE","permalink":"/docs/2.0/sql-manual/sql-data-types/numeric/DOUBLE"},"next":{"title":"DATE","permalink":"/docs/2.0/sql-manual/sql-data-types/date-time/DATE"}}'),r=n("785893"),t=n("250065");let l={title:"DECIMAL",language:"en"},o=void 0,c={},a=[{value:"DECIMAL",id:"decimal",level:2},{value:"Description",id:"description",level:3},{value:"Precision Deduction",id:"precision-deduction",level:3},{value:"Arithmetic Expressions",id:"arithmetic-expressions",level:4},{value:"Aggregation functions",id:"aggregation-functions",level:4},{value:"Default rules",id:"default-rules",level:4},{value:"Adjust the result precision",id:"adjust-the-result-precision",level:4},{value:"Why DECIMAL is required",id:"why-decimal-is-required",level:3},{value:"keywords",id:"keywords",level:3}];function d(e){let i={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h2,{id:"decimal",children:"DECIMAL"}),"\n",(0,r.jsx)(i.p,{children:"DECIMAL"}),"\n",(0,r.jsx)(i.h3,{id:"description",children:"Description"}),"\n",(0,r.jsx)(i.p,{children:"DECIMAL (M [,D])"}),"\n",(0,r.jsx)(i.p,{children:"High-precision fixed-point number, M represents the total number of significant digits, and D represents the scale."}),"\n",(0,r.jsx)(i.p,{children:"The range of M is [1, 38], and the range of D is [0, precision]."}),"\n",(0,r.jsx)(i.p,{children:"The default value is DECIMAL(9, 0)."}),"\n",(0,r.jsx)(i.h3,{id:"precision-deduction",children:"Precision Deduction"}),"\n",(0,r.jsx)(i.p,{children:"DECIMAL has a very complex set of type inference rules. For different expressions, different rules will be applied for precision inference."}),"\n",(0,r.jsx)(i.h4,{id:"arithmetic-expressions",children:"Arithmetic Expressions"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Plus / Minus: DECIMAL(a, b) + DECIMAL(x, y) -> DECIMAL(max(a - b, x - y) + max(b, y) + 1, max(b, y))."}),"\n",(0,r.jsx)(i.li,{children:"Multiply: DECIMAL(a, b) + DECIMAL(x, y) -> DECIMAL(a + x, b + y)."}),"\n",(0,r.jsx)(i.li,{children:"Divide: DECIMAL(p1, s1) + DECIMAL(p2, s2) -> DECIMAL(p1 + s2 + div_precision_increment, s1 + div_precision_increment).div_precision_increment default 4.\nIt is worth noting that the process of division calculation is as follows:\nDECIMAL(p1, s1) / DECIMAL(p2, s2) is first converted to DECIMAL(p1 + s2 + div_precision_increment, s1 + s2) / DECIMAL(p2, s2) and then the calculation is performed. Therefore, it is possible that DECIMAL(p1 + s2 + div_precision_increment, s1 + div_precision_increment) satisfies the range of DECIMAL,\nbut due to the conversion to DECIMAL(p1 + s2 + div_precision_increment, s1 + s2),\nit exceeds the range. Currently, Doris handles this by converting it to Double for calculation."}),"\n"]}),"\n",(0,r.jsx)(i.h4,{id:"aggregation-functions",children:"Aggregation functions"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"SUM / MULTI_DISTINCT_SUM: SUM(DECIMAL(a, b)) -> DECIMAL(38, b)."}),"\n",(0,r.jsx)(i.li,{children:"AVG: AVG(DECIMAL(a, b)) -> DECIMAL(38, max(b, 4))."}),"\n"]}),"\n",(0,r.jsx)(i.h4,{id:"default-rules",children:"Default rules"}),"\n",(0,r.jsxs)(i.p,{children:["Except for the expressions mentioned above, other expressions use default rules for precision deduction. That is, for the expression ",(0,r.jsx)(i.code,{children:"expr(DECIMAL(a, b))"}),", the result type is also DECIMAL(a, b)."]}),"\n",(0,r.jsx)(i.h4,{id:"adjust-the-result-precision",children:"Adjust the result precision"}),"\n",(0,r.jsxs)(i.p,{children:["Different users have different accuracy requirements for DECIMAL. The above rules are the default behavior of Doris. If users ",(0,r.jsx)(i.strong,{children:"have different accuracy requirements, they can adjust the accuracy in the following ways"}),":"]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["If the expected result precision is greater than the default precision, you can adjust the result precision by adjusting the parameter's precision. For example, if the user expects to calculate ",(0,r.jsx)(i.code,{children:"AVG(col)"})," and get DECIMAL(x, y) as the result, where the type of ",(0,r.jsx)(i.code,{children:"col"})," is DECIMAL (a, b), the expression can be rewritten to ",(0,r.jsx)(i.code,{children:"AVG(CAST(col as DECIMAL (x, y))"}),"."]}),"\n",(0,r.jsxs)(i.li,{children:["If the expected result precision is less than the default precision, the desired precision can be obtained by approximating the output result. For example, if the user expects to calculate ",(0,r.jsx)(i.code,{children:"AVG(col)"})," and get DECIMAL(x, y) as the result, where the type of ",(0,r.jsx)(i.code,{children:"col"})," is DECIMAL(a, b), the expression can be rewritten as ",(0,r.jsx)(i.code,{children:"ROUND(AVG(col), y)"}),"."]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"why-decimal-is-required",children:"Why DECIMAL is required"}),"\n",(0,r.jsx)(i.p,{children:"DECIMAL in Doris is a real high-precision fixed-point number. Decimal has the following core advantages:"}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsx)(i.li,{children:"It can represent a wider range. The value ranges of both precision and scale in DECIMAL have been significantly expanded."}),"\n",(0,r.jsx)(i.li,{children:"Higher performance. The old version of DECIMAL requires 16 bytes in memory and 12 bytes in storage, while DECIMAL has made adaptive adjustments as shown below."}),"\n"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:"+----------------------+------------------------------+\n|     precision        | Space occupied (memory/disk) |\n+----------------------+------------------------------+\n| 0 < precision <= 9   |            4 bytes           |\n+----------------------+------------------------------+\n| 9 < precision <= 18  |            8 bytes           |\n+----------------------+------------------------------+\n| 18 < precision <= 38 |           16 bytes           |\n+----------------------+------------------------------+\n"})}),"\n",(0,r.jsxs)(i.ol,{start:"3",children:["\n",(0,r.jsx)(i.li,{children:"More complete precision deduction. For different expressions, different precision inference rules are applied to deduce the precision of the results."}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"keywords",children:"keywords"}),"\n",(0,r.jsx)(i.p,{children:"DECIMAL"})]})}function u(e={}){let{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},250065:function(e,i,n){n.d(i,{Z:function(){return o},a:function(){return l}});var s=n(667294);let r={},t=s.createContext(r);function l(e){let i=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(t.Provider,{value:i},e.children)}}}]);