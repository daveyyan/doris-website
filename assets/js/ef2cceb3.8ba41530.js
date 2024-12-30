"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["834006"],{793056:function(e,n,i){i.r(n),i.d(n,{metadata:()=>l,contentTitle:()=>o,default:()=>u,assets:()=>a,toc:()=>r,frontMatter:()=>s});var l=JSON.parse('{"id":"admin-manual/fe/debug-point-action","title":"Debug Point","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/admin-manual/fe/debug-point-action.md","sourceDirName":"admin-manual/fe","slug":"/admin-manual/fe/debug-point-action","permalink":"/docs/2.0/admin-manual/fe/debug-point-action","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"Debug Point","language":"en"},"sidebar":"docs","previous":{"title":"Meta Info Action","permalink":"/docs/2.0/admin-manual/fe/meta-info-action-V2"},"next":{"title":"Statistic Action","permalink":"/docs/2.0/admin-manual/fe/statistic-action"}}'),t=i("785893"),d=i("250065");let s={title:"Debug Point",language:"en"},o="Debug Point",a={},r=[{value:"Code Example",id:"code-example",level:2},{value:"Global config",id:"global-config",level:2},{value:"Enable Debug Point",id:"enable-debug-point",level:2},{value:"API",id:"api",level:3},{value:"Query Parameters",id:"query-parameters",level:3},{value:"Request body",id:"request-body",level:3},{value:"Response",id:"response",level:3},{value:"Examples",id:"examples",level:3},{value:"Disable Debug Point",id:"disable-debug-point",level:2},{value:"API",id:"api-1",level:3},{value:"Query Parameters",id:"query-parameters-1",level:3},{value:"Request body",id:"request-body-1",level:3},{value:"Response",id:"response-1",level:3},{value:"Examples",id:"examples-1",level:3},{value:"Clear Debug Points",id:"clear-debug-points",level:2},{value:"API",id:"api-2",level:3},{value:"Request body",id:"request-body-2",level:3},{value:"Response",id:"response-2",level:3},{value:"Examples",id:"examples-2",level:3}];function c(e){let n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"debug-point",children:"Debug Point"})}),"\n",(0,t.jsx)(n.p,{children:"Debug point is used in code test. When enabling a debug point, it can run related code."}),"\n",(0,t.jsx)(n.p,{children:"Both FE and BE support debug points."}),"\n",(0,t.jsx)(n.h2,{id:"code-example",children:"Code Example"}),"\n",(0,t.jsx)(n.p,{children:"FE example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'private Status foo() {\n	// dbug_fe_foo_do_nothing is the debug point name.\n	// When it\'s active\uFF0CDebugPointUtil.isEnable("dbug_fe_foo_do_nothing") will return true.\n	if (DebugPointUtil.isEnable("dbug_fe_foo_do_nothing")) {\n      	return Status.Nothing;\n    }\n      	\n    do_foo_action();\n    \n    return Status.Ok;\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"BE \u6869\u5B50\u793A\u4F8B\u4EE3\u7801"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c++",children:'void Status foo() {\n     // dbug_be_foo_do_nothing is the debug point name.\n     // When it\'s active\uFF0CDEBUG_EXECUTE_IF will execute the code block.\n     DEBUG_EXECUTE_IF("dbug_be_foo_do_nothing",  { return Status.Nothing; });\n   \n     do_foo_action();\n     \n     return Status.Ok;\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"global-config",children:"Global config"}),"\n",(0,t.jsxs)(n.p,{children:["To activate debug points, need set ",(0,t.jsx)(n.code,{children:"enable_debug_points"})," to true."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"enable_debug_points"})," was located in FE's fe.conf and BE's be.conf\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"enable-debug-point",children:"Enable Debug Point"}),"\n",(0,t.jsx)(n.h3,{id:"api",children:"API"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"	POST /api/debug_point/add/{debug_point_name}[?timeout=<int>&execute=<int>]\n"})}),"\n",(0,t.jsx)(n.h3,{id:"query-parameters",children:"Query Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"debug_point_name"}),"\nDebug point name. Require."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"timeout"}),"\nTimeout in seconds. When timeout, the debug point will be disable. Default is -1,  not timeout. Optional."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"execute"}),"\nMax active times\u3002Default is -1,  unlimit active times. Optional."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"request-body",children:"Request body"}),"\n",(0,t.jsx)(n.p,{children:"None"}),"\n",(0,t.jsx)(n.h3,{id:"response",children:"Response"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'```\n{\n    msg: "OK",\n    code: 0\n}\n```\n'})}),"\n",(0,t.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(n.p,{children:["Enable debug point ",(0,t.jsx)(n.code,{children:"foo"}),", activate no more than five times."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'```\ncurl -X POST "http://127.0.0.1:8030/api/debug_point/add/foo?execute=5"\n\n```\n'})}),"\n",(0,t.jsx)(n.h2,{id:"disable-debug-point",children:"Disable Debug Point"}),"\n",(0,t.jsx)(n.h3,{id:"api-1",children:"API"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"	POST /api/debug_point/remove/{debug_point_name}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"query-parameters-1",children:"Query Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"debug_point_name"}),"\nDebug point name. Require."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"request-body-1",children:"Request body"}),"\n",(0,t.jsx)(n.p,{children:"None"}),"\n",(0,t.jsx)(n.h3,{id:"response-1",children:"Response"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'    {\n        msg: "OK",\n        code: 0\n    }\n'})}),"\n",(0,t.jsx)(n.h3,{id:"examples-1",children:"Examples"}),"\n",(0,t.jsxs)(n.p,{children:["Disable debug point ",(0,t.jsx)(n.code,{children:"foo"}),"\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'```\ncurl -X POST "http://127.0.0.1:8030/api/debug_point/remove/foo"\n\n```\n'})}),"\n",(0,t.jsx)(n.h2,{id:"clear-debug-points",children:"Clear Debug Points"}),"\n",(0,t.jsx)(n.h3,{id:"api-2",children:"API"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"	POST /api/debug_point/clear\n"})}),"\n",(0,t.jsx)(n.h3,{id:"request-body-2",children:"Request body"}),"\n",(0,t.jsx)(n.p,{children:"None"}),"\n",(0,t.jsx)(n.h3,{id:"response-2",children:"Response"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'```\n{\n    msg: "OK",\n    code: 0\n}\n```\n'})}),"\n",(0,t.jsx)(n.h3,{id:"examples-2",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'```\ncurl -X POST "http://127.0.0.1:8030/api/debug_point/clear"\n```\n'})})]})}function u(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return o},a:function(){return s}});var l=i(667294);let t={},d=l.createContext(t);function s(e){let n=l.useContext(d);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),l.createElement(d.Provider,{value:n},e.children)}}}]);