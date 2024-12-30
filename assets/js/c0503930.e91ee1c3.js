"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["57985"],{204793:function(e,n,t){t.r(n),t.d(n,{metadata:()=>a,contentTitle:()=>l,default:()=>c,assets:()=>d,toc:()=>o,frontMatter:()=>s});var a=JSON.parse('{"id":"admin-manual/open-api/be-http/meta","title":"View Meta","description":"\x3c!--","source":"@site/docs/admin-manual/open-api/be-http/meta.md","sourceDirName":"admin-manual/open-api/be-http","slug":"/admin-manual/open-api/be-http/meta","permalink":"/docs/dev/admin-manual/open-api/be-http/meta","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"View Meta","language":"en"},"sidebar":"docs","previous":{"title":"Manually Trigger Compaction","permalink":"/docs/dev/admin-manual/open-api/be-http/compaction-run"},"next":{"title":"Make Snapshot","permalink":"/docs/dev/admin-manual/open-api/be-http/snapshot"}}'),i=t("785893"),r=t("250065");let s={title:"View Meta",language:"en"},l="View Meta",d={},o=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}];function p(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"view-meta",children:"View Meta"})}),"\n",(0,i.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"GET /api/meta/header/{tablet_id}?byte_to_base64={bool}"})}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"View meta of a tablet"}),"\n",(0,i.jsx)(n.h2,{id:"path-parameters",children:"Path parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"tablet_id"}),"\nID of the tablet"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"query-parameters",children:"Query parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"byte_to_base64"}),"\nWhether to encode by base64. Optional with default ",(0,i.jsx)(n.code,{children:"false"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"request-body",children:"Request body"}),"\n",(0,i.jsx)(n.p,{children:"None"}),"\n",(0,i.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'```\n{\n    "table_id": 148107,\n    "partition_id": 148104,\n    "tablet_id": 148193,\n    "schema_hash": 2090621954,\n    "shard_id": 38,\n    "creation_time": 1673253868,\n    "cumulative_layer_point": -1,\n    "tablet_state": "PB_RUNNING",\n    ...\n}\n```\n'})}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'```\ncurl "http://127.0.0.1:8040/api/meta/header/148193&byte_to_base64=true"\n\n```\n'})})]})}function c(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return s}});var a=t(667294);let i={},r=a.createContext(i);function s(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);