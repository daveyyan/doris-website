"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["918796"],{885513:function(e,n,t){t.r(n),t.d(n,{metadata:()=>a,contentTitle:()=>o,default:()=>h,assets:()=>l,toc:()=>r,frontMatter:()=>d});var a=JSON.parse('{"id":"admin-manual/fe/show-data-action","title":"Show Data Action","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/admin-manual/fe/show-data-action.md","sourceDirName":"admin-manual/fe","slug":"/admin-manual/fe/show-data-action","permalink":"/docs/2.0/admin-manual/fe/show-data-action","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"Show Data Action","language":"en"},"sidebar":"docs","previous":{"title":"Set Config Action","permalink":"/docs/2.0/admin-manual/fe/set-config-action"},"next":{"title":"Show Meta Info Action","permalink":"/docs/2.0/admin-manual/fe/show-meta-info-action"}}'),s=t("785893"),i=t("250065");let d={title:"Show Data Action",language:"en"},o="Show Data Action",l={},r=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}];function c(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"show-data-action",children:"Show Data Action"})}),"\n",(0,s.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET /api/show_data"})}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Used to get the total data volume of the cluster or the data volume of the specified database. Unit byte."}),"\n",(0,s.jsx)(n.h2,{id:"path-parameters",children:"Path parameters"}),"\n",(0,s.jsx)(n.p,{children:"None"}),"\n",(0,s.jsx)(n.h2,{id:"query-parameters",children:"Query parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"db"})}),"\n",(0,s.jsx)(n.p,{children:"Optional. If specified, get the data volume of the specified database."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"request-body",children:"Request body"}),"\n",(0,s.jsx)(n.p,{children:"None"}),"\n",(0,s.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Specify the amount of data in the database."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n	"msg": "success",\n	"code": 0,\n	"data": {\n		"default_cluster:db1": 381\n	},\n	"count": 0\n}\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Total data"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n	"msg": "success",\n	"code": 0,\n	"data": {\n		"__total_size": 381\n	},\n	"count": 0\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Get the data volume of the specified database"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'GET /api/show_data?db=db1\n\nResponse:\n{\n	"msg": "success",\n	"code": 0,\n	"data": {\n		"default_cluster:db1": 381\n	},\n	"count": 0\n}\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Get the total data volume of the cluster"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'GET /api/show_data\n    \nResponse:\n{\n	"msg": "success",\n	"code": 0,\n	"data": {\n		"__total_size": 381\n	},\n	"count": 0\n}\n'})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return d}});var a=t(667294);let s={},i=a.createContext(s);function d(e){let n=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);