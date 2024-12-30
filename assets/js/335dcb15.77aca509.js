"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["626544"],{62037:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>o,default:()=>u,assets:()=>l,toc:()=>d,frontMatter:()=>a});var i=JSON.parse('{"id":"admin-manual/http-actions/fe/profile-action","title":"Profile Action","description":"\x3c!--","source":"@site/versioned_docs/version-1.2/admin-manual/http-actions/fe/profile-action.md","sourceDirName":"admin-manual/http-actions/fe","slug":"/admin-manual/http-actions/fe/profile-action","permalink":"/docs/1.2/admin-manual/http-actions/fe/profile-action","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"Profile Action","language":"en"},"sidebar":"docs","previous":{"title":"Metrics Action","permalink":"/docs/1.2/admin-manual/http-actions/fe/metrics-action"},"next":{"title":"Query Detail Action","permalink":"/docs/1.2/admin-manual/http-actions/fe/query-detail-action"}}'),r=t("785893"),s=t("250065");let a={title:"Profile Action",language:"en"},o="Profile Action",l={},d=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}];function c(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"profile-action",children:"Profile Action"})}),"\n",(0,r.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"GET /api/profile"})}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Used to obtain the query profile of the specified query id.\nIf query_id is not exists, return 404 NOT FOUND ERROR\nIf query_id exists, return query profile like this"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Query:\n  Summary:\n     - Query ID: a0a9259df9844029-845331577440a3bd\n     - Start Time: 2020-06-15 14:10:05\n     - End Time: 2020-06-15 14:10:05\n     - Total: 8ms\n     - Query Type: Query\n     - Query State: EOF\n     - Doris Version: trunk\n     - User: root\n     - Default Db: default_cluster:test\n     - Sql Statement: select * from table1\n  Execution Profile a0a9259df9844029-845331577440a3bd:(Active: 7.315ms, % non-child: 100.00%)\n    Fragment 0:\n      Instance a0a9259df9844029-845331577440a3be (host=TNetworkAddress(hostname:172.26.108.176, port:9560)):(Active: 1.523ms, % non-child: 0.24%)\n         - MemoryLimit: 2.00 GB\n         - PeakUsedReservation: 0.00\n         - PeakMemoryUsage: 72.00 KB\n         - RowsProduced: 5\n         - AverageThreadTokens: 0.00\n         - PeakReservation: 0.00\n        BlockMgr:\n           - BlocksCreated: 0\n           - BlockWritesOutstanding: 0\n           - BytesWritten: 0.00\n           - TotalEncryptionTime: 0ns\n           - BufferedPins: 0\n           - TotalReadBlockTime: 0ns\n           - TotalBufferWaitTime: 0ns\n           - BlocksRecycled: 0\n           - TotalIntegrityCheckTime: 0ns\n           - MaxBlockSize: 8.00 MB\n        DataBufferSender (dst_fragment_instance_id=a0a9259df9844029-845331577440a3be):\n           - AppendBatchTime: 9.23us\n             - ResultSendTime: 956ns\n             - TupleConvertTime: 5.735us\n           - NumSentRows: 5\n        OLAP_SCAN_NODE (id=0):(Active: 1.506ms, % non-child: 20.59%)\n           - TotalRawReadTime: 0ns\n           - CompressedBytesRead: 6.47 KB\n           - PeakMemoryUsage: 0.00\n           - RowsPushedCondFiltered: 0\n           - ScanRangesComplete: 0\n           - ScanTime: 25.195us\n           - BitmapIndexFilterTimer: 0ns\n           - BitmapIndexFilterCount: 0\n           - NumScanners: 65\n           - RowsStatsFiltered: 0\n           - VectorPredEvalTime: 0ns\n           - BlockSeekTime: 1.299ms\n           - RawRowsRead: 1.91K (1910)\n           - ScannerThreadsVoluntaryContextSwitches: 0\n           - RowsDelFiltered: 0\n           - IndexLoadTime: 911.104us\n           - NumDiskAccess: 1\n           - ScannerThreadsTotalWallClockTime: 0ns\n             - MaterializeTupleTime: 0ns\n             - ScannerThreadsUserTime: 0ns\n             - ScannerThreadsSysTime: 0ns\n           - TotalPagesNum: 0\n           - RowsReturnedRate: 3.319K /sec\n           - BlockLoadTime: 539.289us\n           - CachedPagesNum: 0\n           - BlocksLoad: 384\n           - UncompressedBytesRead: 0.00\n           - RowsBloomFilterFiltered: 0\n           - TabletCount : 1\n           - RowsReturned: 5\n           - ScannerThreadsInvoluntaryContextSwitches: 0\n           - DecompressorTimer: 0ns\n           - RowsVectorPredFiltered: 0\n           - ReaderInitTime: 6.498ms\n           - RowsRead: 5\n           - PerReadThreadRawHdfsThroughput: 0.0 /sec\n           - BlockFetchTime: 4.318ms\n           - ShowHintsTime: 0ns\n           - TotalReadThroughput: 0.0 /sec\n           - IOTimer: 1.154ms\n           - BytesRead: 48.49 KB\n           - BlockConvertTime: 97.539us\n           - BlockSeekCount: 0\n"})}),"\n",(0,r.jsx)(n.h2,{id:"path-parameters",children:"Path parameters"}),"\n",(0,r.jsx)(n.p,{children:"None"}),"\n",(0,r.jsx)(n.h2,{id:"query-parameters",children:"Query parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"query_id"}),"\n",(0,r.jsx)(n.p,{children:"Specify query id"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"request-body",children:"Request body"}),"\n",(0,r.jsx)(n.p,{children:"None"}),"\n",(0,r.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'{\n	"msg": "success",\n	"code": 0,\n	"data": {\n		"profile": "query profile ..."\n	},\n	"count": 0\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Get the query profile of the specified query id"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'GET /api/profile?query_id=f732084bc8e74f39-8313581c9c3c0b58\n\nResponse:\n{\n	"msg": "success",\n	"code": 0,\n	"data": {\n		"profile": "query profile ..."\n	},\n	"count": 0\n}\n'})}),"\n"]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return a}});var i=t(667294);let r={},s=i.createContext(r);function a(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);