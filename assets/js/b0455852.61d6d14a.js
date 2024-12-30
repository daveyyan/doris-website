"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["437022"],{871559:function(e,t,n){n.r(t),n.d(t,{metadata:()=>s,contentTitle:()=>r,default:()=>h,assets:()=>o,toc:()=>c,frontMatter:()=>i});var s=JSON.parse('{"id":"admin-manual/open-api/be-http/check-tablet-segment","title":"Check All Tablet Segment Lost","description":"\x3c!--","source":"@site/docs/admin-manual/open-api/be-http/check-tablet-segment.md","sourceDirName":"admin-manual/open-api/be-http","slug":"/admin-manual/open-api/be-http/check-tablet-segment","permalink":"/docs/dev/admin-manual/open-api/be-http/check-tablet-segment","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Check All Tablet Segment Lost","language":"en"},"sidebar":"docs","previous":{"title":"Make Snapshot","permalink":"/docs/dev/admin-manual/open-api/be-http/snapshot"},"next":{"title":"Config of BE","permalink":"/docs/dev/admin-manual/open-api/be-http/config"}}'),a=n("785893"),l=n("250065");let i={title:"Check All Tablet Segment Lost",language:"en"},r="Check All Tablet Segment Lost",o={},c=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}];function d(e){let t={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"check-all-tablet-segment-lost",children:"Check All Tablet Segment Lost"})}),"\n",(0,a.jsx)(t.h2,{id:"request",children:"Request"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.code,{children:"GET /api/check_tablet_segment_lost?repair={bool}"})}),"\n",(0,a.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(t.p,{children:["There may be some exceptions that cause segment to be lost on BE node. However, the metadata shows that the tablet is normal. This abnormal replica is not detected by FE and cannot be automatically repaired. When query comes, exception information is thrown that ",(0,a.jsx)(t.code,{children:"failed to initialize storage reader"}),". The function of this interface is to check all tablets on the current BE node that have lost segment."]}),"\n",(0,a.jsx)(t.h2,{id:"query-parameters",children:"Query parameters"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"repair"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"true"}),": tablets with lost segment will be set to SHUTDOWN status and treated as bad replica, which can be detected and repaired by FE."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"false"}),": all tablets with missing segment are returned and nothing is done."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"request-body",children:"Request body"}),"\n",(0,a.jsx)(t.p,{children:"None"}),"\n",(0,a.jsx)(t.h2,{id:"response",children:"Response"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'The return is all tablets on the current BE node that have lost segment:\n\n```\n{\n    status: "Success",\n    msg: "Succeed to check all tablet segment",\n    num: 3,\n    bad_tablets: [\n        11190,\n        11210,\n        11216\n    ],\n    set_bad: true,\n    host: "172.3.0.101"\n}\n```\n'})}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"```\ncurl http://127.0.0.1:8040/api/check_tablet_segment_lost?repair=false\n```\n"})})]})}function h(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return i}});var s=n(667294);let a={},l=s.createContext(a);function i(e){let t=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);