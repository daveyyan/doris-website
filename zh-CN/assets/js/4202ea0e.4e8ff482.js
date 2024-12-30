"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["758902"],{528064:function(e,t,n){n.r(t),n.d(t,{metadata:()=>i,contentTitle:()=>l,default:()=>u,assets:()=>c,toc:()=>o,frontMatter:()=>r});var i=JSON.parse('{"id":"sql-manual/sql-functions/bitmap-functions/bitmap-intersect","title":"BITMAP_INTERSECT","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/bitmap-functions/bitmap-intersect.md","sourceDirName":"sql-manual/sql-functions/bitmap-functions","slug":"/sql-manual/sql-functions/bitmap-functions/bitmap-intersect","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/bitmap-functions/bitmap-intersect","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"BITMAP_INTERSECT","language":"zh-CN"},"sidebar":"docs","previous":{"title":"INTERSECT_COUNT","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/bitmap-functions/intersect-count"},"next":{"title":"BITMAP_HASH64","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/bitmap-functions/bitmap-hash64"}}'),s=n("785893"),a=n("250065");let r={title:"BITMAP_INTERSECT",language:"zh-CN"},l=void 0,c={},o=[{value:"bitmap_intersect",id:"bitmap_intersect",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function d(e){let t={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"bitmap_intersect",children:"bitmap_intersect"}),"\n",(0,s.jsx)(t.h3,{id:"description",children:"description"}),"\n",(0,s.jsx)(t.p,{children:"\u805A\u5408\u51FD\u6570\uFF0C\u7528\u4E8E\u8BA1\u7B97\u5206\u7EC4\u540E\u7684 bitmap \u4EA4\u96C6\u3002\u5E38\u89C1\u4F7F\u7528\u573A\u666F\u5982\uFF1A\u8BA1\u7B97\u7528\u6237\u7559\u5B58\u7387\u3002"}),"\n",(0,s.jsx)(t.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"BITMAP BITMAP_INTERSECT(BITMAP value)"})}),"\n",(0,s.jsx)(t.p,{children:"\u8F93\u5165\u4E00\u7EC4 bitmap \u503C\uFF0C\u6C42\u8FD9\u4E00\u7EC4 bitmap \u503C\u7684\u4EA4\u96C6\uFF0C\u5E76\u8FD4\u56DE\u3002"}),"\n",(0,s.jsx)(t.h3,{id:"example",children:"example"}),"\n",(0,s.jsx)(t.p,{children:"\u8868\u7ED3\u6784"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"KeysType: AGG_KEY\nColumns: tag varchar, date datetime, user_id bitmap bitmap_union\n\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"\u6C42\u4ECA\u5929\u548C\u6628\u5929\u4E0D\u540C tag \u4E0B\u7684\u7528\u6237\u7559\u5B58\nmysql> select tag, bitmap_intersect(user_id) from (select tag, date, bitmap_union(user_id) user_id from table where date in ('2020-05-18', '2020-05-19') group by tag, date) a group by tag;\n"})}),"\n",(0,s.jsx)(t.p,{children:"\u548C bitmap_to_string \u51FD\u6570\u7EC4\u5408\u4F7F\u7528\u53EF\u4EE5\u83B7\u53D6\u4EA4\u96C6\u7684\u5177\u4F53\u6570\u636E"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"\u6C42\u4ECA\u5929\u548C\u6628\u5929\u4E0D\u540C tag \u4E0B\u7559\u5B58\u7684\u7528\u6237\u90FD\u662F\u54EA\u4E9B\nmysql> select tag, bitmap_to_string(bitmap_intersect(user_id)) from (select tag, date, bitmap_union(user_id) user_id from table where date in ('2020-05-18', '2020-05-19') group by tag, date) a group by tag;\n"})}),"\n",(0,s.jsx)(t.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"BITMAP_INTERSECT, BITMAP\n"})})]})}function u(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return r}});var i=n(667294);let s={},a=i.createContext(s);function r(e){let t=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);