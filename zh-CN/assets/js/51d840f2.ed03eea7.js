"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["822057"],{901351:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>o,default:()=>h,assets:()=>c,toc:()=>l,frontMatter:()=>d});var r=JSON.parse('{"id":"table-design/tiered-storage/overview","title":"\u5206\u5C42\u5B58\u50A8","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/table-design/tiered-storage/overview.md","sourceDirName":"table-design/tiered-storage","slug":"/table-design/tiered-storage/overview","permalink":"/zh-CN/docs/dev/table-design/tiered-storage/overview","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u5206\u5C42\u5B58\u50A8","language":"zh-CN"},"sidebar":"docs","previous":{"title":"Schema \u53D8\u66F4","permalink":"/zh-CN/docs/dev/table-design/schema-change"},"next":{"title":"SSD \u548C HDD \u5C42\u7EA7\u5B58\u50A8","permalink":"/zh-CN/docs/dev/table-design/tiered-storage/tiered-ssd-hdd"}}'),s=t("785893"),i=t("250065");let d={title:"\u5206\u5C42\u5B58\u50A8",language:"zh-CN"},o=void 0,c={},l=[];function a(e){let n={br:"br",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"\u4E3A\u4E86\u5E2E\u52A9\u7528\u6237\u8282\u7701\u5B58\u50A8\u6210\u672C\uFF0CDoris \u9488\u5BF9\u51B7\u6570\u636E\u63D0\u4F9B\u4E86\u7075\u6D3B\u7684\u9009\u62E9\u3002"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"\u51B7\u6570\u636E\u9009\u62E9"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"\u9002\u7528\u6761\u4EF6"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"\u7279\u6027"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"\u5B58\u7B97\u5206\u79BB"})}),(0,s.jsx)(n.td,{children:"\u7528\u6237\u5177\u5907\u90E8\u7F72\u5B58\u7B97\u5206\u79BB\u7684\u6761\u4EF6"}),(0,s.jsxs)(n.td,{children:["- \u6570\u636E\u4EE5\u5355\u526F\u672C\u5B8C\u5168\u5B58\u50A8\u5728\u5BF9\u8C61\u5B58\u50A8\u4E2D",(0,s.jsx)(n.br,{}),"- \u901A\u8FC7\u672C\u5730\u7F13\u5B58\u52A0\u901F\u70ED\u6570\u636E\u8BBF\u95EE",(0,s.jsx)(n.br,{}),"- \u5B58\u50A8\u4E0E\u8BA1\u7B97\u8D44\u6E90\u72EC\u7ACB\u6269\u5C55\uFF0C\u663E\u8457\u964D\u4F4E\u5B58\u50A8\u6210\u672C"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"\u672C\u5730\u5206\u5C42"})}),(0,s.jsx)(n.td,{children:"\u5B58\u7B97\u4E00\u4F53\u6A21\u5F0F\u4E0B\uFF0C\u7528\u6237\u5E0C\u671B\u8FDB\u4E00\u6B65\u4F18\u5316\u672C\u5730\u5B58\u50A8\u8D44\u6E90"}),(0,s.jsxs)(n.td,{children:["- \u652F\u6301\u5C06\u51B7\u6570\u636E\u4ECE SSD \u51B7\u5374\u5230 HDD",(0,s.jsx)(n.br,{}),"- \u5145\u5206\u5229\u7528\u672C\u5730\u5B58\u50A8\u5C42\u7EA7\u7279\u6027\uFF0C\u8282\u7701\u9AD8\u6027\u80FD\u5B58\u50A8\u6210\u672C"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"\u8FDC\u7A0B\u5206\u5C42"})}),(0,s.jsx)(n.td,{children:"\u5B58\u7B97\u4E00\u4F53\u6A21\u5F0F\u4E0B\uFF0C\u4F7F\u7528\u5EC9\u4EF7\u7684\u5BF9\u8C61\u5B58\u50A8\u6216\u8005 HDFS \u8FDB\u4E00\u6B65\u964D\u4F4E\u6210\u672C"}),(0,s.jsxs)(n.td,{children:["- \u51B7\u6570\u636E\u4EE5\u5355\u526F\u672C\u5F62\u5F0F\u4FDD\u5B58\u5230\u5BF9\u8C61\u5B58\u50A8\u6216\u8005 HDFS\u4E2D",(0,s.jsx)(n.br,{}),"- \u70ED\u6570\u636E\u7EE7\u7EED\u4F7F\u7528\u672C\u5730\u5B58\u50A8",(0,s.jsx)(n.br,{}),"- \u4E0D\u80FD\u5BF9\u4E00\u4E2A\u8868\u548C\u672C\u5730\u5206\u5C42\u6DF7\u5408\u4F7F\u7528"]})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"\u901A\u8FC7\u4E0A\u8FF0\u6A21\u5F0F\uFF0CDoris \u80FD\u591F\u7075\u6D3B\u9002\u914D\u7528\u6237\u7684\u90E8\u7F72\u6761\u4EF6\uFF0C\u5B9E\u73B0\u67E5\u8BE2\u6548\u7387\u4E0E\u5B58\u50A8\u6210\u672C\u7684\u5E73\u8861\u3002"})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return d}});var r=t(667294);let s={},i=r.createContext(s);function d(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);