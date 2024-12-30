"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["376912"],{961214:function(e,n,i){i.r(n),i.d(n,{metadata:()=>t,contentTitle:()=>o,default:()=>h,assets:()=>l,toc:()=>c,frontMatter:()=>a});var t=JSON.parse('{"id":"releasenotes/v2.0/release-2.0.11","title":"Release 2.0.11","description":"\x3c!--","source":"@site/versioned_docs/version-1.2/releasenotes/v2.0/release-2.0.11.md","sourceDirName":"releasenotes/v2.0","slug":"/releasenotes/v2.0/release-2.0.11","permalink":"/docs/1.2/releasenotes/v2.0/release-2.0.11","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"Release 2.0.11","language":"en"},"sidebar":"docs","previous":{"title":"Release 2.0.12","permalink":"/docs/1.2/releasenotes/v2.0/release-2.0.12"},"next":{"title":"Release 2.0.10","permalink":"/docs/1.2/releasenotes/v2.0/release-2.0.10"}}'),s=i("785893"),r=i("250065");let a={title:"Release 2.0.11",language:"en"},o=void 0,l={},c=[{value:"1 Behavior change",id:"1-behavior-change",level:2},{value:"2 Improvement and optimizations",id:"2-improvement-and-optimizations",level:2},{value:"Credits",id:"credits",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Thanks to our community users and developers, about 123 improvements and bug fixes have been made in Doris 2.0.11 version."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Quick Download:"})," ",(0,s.jsx)(n.a,{href:"https://doris.apache.org/download/",children:"https://doris.apache.org/download/"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"GitHub\uFF1A"})," ",(0,s.jsx)(n.a,{href:"https://github.com/apache/doris/releases",children:"https://github.com/apache/doris/releases"})]}),"\n",(0,s.jsx)(n.h2,{id:"1-behavior-change",children:"1 Behavior change"}),"\n",(0,s.jsxs)(n.p,{children:["Since the inverted index is now mature and stable, it can replace the old BITMAP INDEX. Therefore, any newly created ",(0,s.jsx)(n.code,{children:"BITMAP INDEX"})," will automatically switch to an ",(0,s.jsx)(n.code,{children:"INVERTED INDEX"}),", while existing ",(0,s.jsx)(n.code,{children:"BITMAP INDEX"})," will remain unchanged. This entire switching process is transparent to the user, with no changes to writing or querying. Additionally, users can disable this automatic switch by setting the FE configuration ",(0,s.jsx)(n.code,{children:"enable_create_bitmap_index_as_inverted_index"})," to false. ",(0,s.jsx)(n.a,{href:"https://github.com/apache/doris/pull/35528",children:"#35528"})]}),"\n",(0,s.jsx)(n.h2,{id:"2-improvement-and-optimizations",children:"2 Improvement and optimizations"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Add Trino JDBC Catalog type mapping for JSON and TIME"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"FE exit when failed to transfer to (non) master to prevent unknown state and too many logs"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Write audit log while doing drop stats table."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Ignore min/max column stats if table is partially analyzed to avoid inefficient query plan"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Support minus operation for set like ",(0,s.jsx)(n.code,{children:"set1 - set2"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Improve perfmance of LIKE and REGEXP clause with concat (col, pattern_str), eg. ",(0,s.jsx)(n.code,{children:"col1 LIKE concat('%', col2, '%')"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Add query options for short circuit queries for upgrade compatibility"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["See the complete list of improvements and bug fixes on ",(0,s.jsx)(n.a,{href:"https://github.com/apache/doris/compare/2.0.10...2.0.11",children:"github"})," ."]}),"\n",(0,s.jsx)(n.h2,{id:"credits",children:"Credits"}),"\n",(0,s.jsx)(n.p,{children:"Thanks all who contribute to this release:"}),"\n",(0,s.jsx)(n.p,{children:"@AshinGau, @BePPPower, @BiteTheDDDDt, @ByteYue, @CalvinKirs, @cambyzju, @csun5285, @dataroaring, @eldenmoon, @englefly, @feiniaofeiafei, @Gabriel39, @GoGoWen, @HHoflittlefish777, @hubgeter, @jacktengg, @jackwener, @jeffreys-cat, @Jibing-Li, @kaka11chen, @kobe6th, @LiBinfeng-01, @mongo360, @morningman, @morrySnow, @mrhhsg, @Mryange, @nextdreamblue, @qidaye, @sjyango, @starocean999, @SWJTU-ZhangLei, @w41ter, @wangbo, @wsjz, @wuwenchi, @xiaokang, @XieJiann, @xy720, @yujun777, @Yukang-Lian, @Yulei-Yang, @zclllyybb, @zddr, @zhangstar333, @zhiqiang-hhhh, @zy-kkk, @zzzxl1993"})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return o},a:function(){return a}});var t=i(667294);let s={},r=t.createContext(s);function a(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);