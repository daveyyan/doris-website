"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["716078"],{109922:function(e,n,l){l.r(n),l.d(n,{metadata:()=>s,contentTitle:()=>t,default:()=>u,assets:()=>r,toc:()=>d,frontMatter:()=>c});var s=JSON.parse('{"id":"admin-manual/fe/cancel-load-action","title":"Cancel Load Action","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/admin-manual/fe/cancel-load-action.md","sourceDirName":"admin-manual/fe","slug":"/admin-manual/fe/cancel-load-action","permalink":"/zh-CN/docs/2.0/admin-manual/fe/cancel-load-action","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"Cancel Load Action","language":"zh-CN"},"sidebar":"docs","previous":{"title":"Bootstrap Action","permalink":"/zh-CN/docs/2.0/admin-manual/fe/bootstrap-action"},"next":{"title":"Check Decommission Action","permalink":"/zh-CN/docs/2.0/admin-manual/fe/check-decommission-action"}}'),a=l("785893"),i=l("250065");let c={title:"Cancel Load Action",language:"zh-CN"},t=void 0,r={},d=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}];function o(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"POST /api/<db>/_cancel"})}),"\n",(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"\u7528\u4E8E\u53D6\u6D88\u6389\u6307\u5B9A label \u7684\u5BFC\u5165\u4EFB\u52A1\u3002\n\u6267\u884C\u5B8C\u6210\u540E\uFF0C\u4F1A\u4EE5 Json \u683C\u5F0F\u8FD4\u56DE\u8FD9\u6B21\u5BFC\u5165\u7684\u76F8\u5173\u5185\u5BB9\u3002\u5F53\u524D\u5305\u62EC\u4EE5\u4E0B\u5B57\u6BB5\nStatus: \u662F\u5426\u6210\u529F cancel\nSuccess: \u6210\u529F cancel \u4E8B\u52A1\n\u5176\u4ED6\uFF1Acancel \u5931\u8D25\nMessage: \u5177\u4F53\u7684\u5931\u8D25\u4FE1\u606F"}),"\n",(0,a.jsx)(n.h2,{id:"path-parameters",children:"Path parameters"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"<db>"})}),"\n",(0,a.jsx)(n.p,{children:"\u6307\u5B9A\u6570\u636E\u5E93\u540D\u79F0"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"query-parameters",children:"Query parameters"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"<label>"})}),"\n",(0,a.jsx)(n.p,{children:"\u6307\u5B9A\u5BFC\u5165 label"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"request-body",children:"Request body"}),"\n",(0,a.jsx)(n.p,{children:"\u65E0"}),"\n",(0,a.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u53D6\u6D88\u6210\u529F"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n	"msg": "OK",\n	"code": 0,\n	"data": null,\n	"count": 0\n}\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u53D6\u6D88\u5931\u8D25"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n	"msg": "Error msg...",\n	"code": 1,\n	"data": null,\n	"count": 0\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u53D6\u6D88\u6307\u5B9A label \u7684\u5BFC\u5165\u4E8B\u52A1"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'POST /api/example_db/_cancel?label=my_label1\n\nResponse:\n{\n	"msg": "OK",\n	"code": 0,\n	"data": null,\n	"count": 0\n}\n'})}),"\n"]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return t},a:function(){return c}});var s=l(667294);let a={},i=s.createContext(a);function c(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);