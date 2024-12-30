"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["959897"],{311041:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>a,default:()=>p,assets:()=>l,toc:()=>c,frontMatter:()=>o});var i=JSON.parse('{"id":"admin-manual/open-api/fe-http/row-count-action","title":"Row Count Action","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/admin-manual/open-api/fe-http/row-count-action.md","sourceDirName":"admin-manual/open-api/fe-http","slug":"/admin-manual/open-api/fe-http/row-count-action","permalink":"/zh-CN/docs/3.0/admin-manual/open-api/fe-http/row-count-action","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"Row Count Action","language":"zh-CN"},"sidebar":"docs","previous":{"title":"Query Stats Action","permalink":"/zh-CN/docs/3.0/admin-manual/open-api/fe-http/query-stats-action"},"next":{"title":"Set Config Action","permalink":"/zh-CN/docs/3.0/admin-manual/open-api/fe-http/set-config-action"}}'),s=t("785893"),r=t("250065");let o={title:"Row Count Action",language:"zh-CN"},a=void 0,l={},c=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}];function d(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET /api/rowcount"})}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"\u7528\u4E8E\u624B\u52A8\u66F4\u65B0\u6307\u5B9A\u8868\u7684\u884C\u6570\u7EDF\u8BA1\u4FE1\u606F\u3002\u5728\u66F4\u65B0\u884C\u6570\u7EDF\u8BA1\u4FE1\u606F\u7684\u540C\u65F6\uFF0C\u4E5F\u4F1A\u4EE5 JSON \u683C\u5F0F\u8FD4\u56DE\u8868\u4EE5\u53CA\u5BF9\u5E94 rollup \u7684\u884C\u6570"}),"\n",(0,s.jsx)(n.h2,{id:"path-parameters",children:"Path parameters"}),"\n",(0,s.jsx)(n.p,{children:"\u65E0"}),"\n",(0,s.jsx)(n.h2,{id:"query-parameters",children:"Query parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"db"})}),"\n",(0,s.jsx)(n.p,{children:"\u6307\u5B9A\u7684\u6570\u636E\u5E93"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"table"})}),"\n",(0,s.jsx)(n.p,{children:"\u6307\u5B9A\u7684\u8868\u540D"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"request-body",children:"Request body"}),"\n",(0,s.jsx)(n.p,{children:"\u65E0"}),"\n",(0,s.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n	"msg": "success",\n	"code": 0,\n	"data": {\n		"tbl1": 10000\n	},\n	"count": 0\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u66F4\u65B0\u5E76\u83B7\u53D6\u6307\u5B9A Table \u7684\u884C\u6570"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'GET /api/rowcount?db=example_db&table=tbl1\n\nResponse:\n{\n	"msg": "success",\n	"code": 0,\n	"data": {\n		"tbl1": 10000\n	},\n	"count": 0\n}\n'})}),"\n"]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return o}});var i=t(667294);let s={},r=i.createContext(s);function o(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);