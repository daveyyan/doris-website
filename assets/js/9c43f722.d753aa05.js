"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["790027"],{18220:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>u,assets:()=>d,toc:()=>o,frontMatter:()=>l});var s=JSON.parse('{"id":"admin-manual/http-actions/fe/get-load-state","title":"Get Load State","description":"\x3c!--","source":"@site/versioned_docs/version-1.2/admin-manual/http-actions/fe/get-load-state.md","sourceDirName":"admin-manual/http-actions/fe","slug":"/admin-manual/http-actions/fe/get-load-state","permalink":"/docs/1.2/admin-manual/http-actions/fe/get-load-state","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"Get Load State","language":"en"},"sidebar":"docs","previous":{"title":"Get Load Info Action","permalink":"/docs/1.2/admin-manual/http-actions/fe/get-load-info-action"},"next":{"title":"Get FE log file","permalink":"/docs/1.2/admin-manual/http-actions/fe/get-log-file-action"}}'),a=t("785893"),i=t("250065");let l={title:"Get Load State",language:"en"},r="Get Load State",d={},o=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}];function c(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"get-load-state",children:"Get Load State"})}),"\n",(0,a.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"GET /api/<db>/get_load_state"})}),"\n",(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"Returns the status of the load transaction of the specified label\nReturn of JSON format string of the status of specified transaction:\nLabel: The specified label.\nStatus: Success or not of this request.\nMessage: Error messages\nState:\nUNKNOWN/PREPARE/COMMITTED/VISIBLE/ABORTED"}),"\n",(0,a.jsx)(n.h2,{id:"path-parameters",children:"Path parameters"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"<db>"})}),"\n",(0,a.jsx)(n.p,{children:"Specify database"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"query-parameters",children:"Query parameters"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"label"})}),"\n",(0,a.jsx)(n.p,{children:"Specify label"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"request-body",children:"Request body"}),"\n",(0,a.jsx)(n.p,{children:"None"}),"\n",(0,a.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n	"msg": "success",\n	"code": 0,\n	"data": "VISIBLE",\n	"count": 0\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"If label does not exist, return:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n	"msg": "success",\n	"code": 0,\n	"data": "UNKNOWN",\n	"count": 0\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Get the status of the load transaction of the specified label."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'GET /api/example_db/get_load_state?label=my_label\n\n{\n	"msg": "success",\n	"code": 0,\n	"data": "VISIBLE",\n	"count": 0\n}\n'})}),"\n"]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return l}});var s=t(667294);let a={},i=s.createContext(a);function l(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);