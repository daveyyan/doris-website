"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["699866"],{604362:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>u,assets:()=>a,toc:()=>o,frontMatter:()=>c});var s=JSON.parse('{"id":"sql-manual/sql-functions/spatial-functions/st_circle","title":"ST_Circle","description":"\x3c!--","source":"@site/versioned_docs/version-1.2/sql-manual/sql-functions/spatial-functions/st_circle.md","sourceDirName":"sql-manual/sql-functions/spatial-functions","slug":"/sql-manual/sql-functions/spatial-functions/st_circle","permalink":"/docs/1.2/sql-manual/sql-functions/spatial-functions/st_circle","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"ST_Circle","language":"en"},"sidebar":"docs","previous":{"title":"ST_Y","permalink":"/docs/1.2/sql-manual/sql-functions/spatial-functions/st_y"},"next":{"title":"ST_Distance_Sphere","permalink":"/docs/1.2/sql-manual/sql-functions/spatial-functions/st_distance_sphere"}}'),i=t("785893"),l=t("250065");let c={title:"ST_Circle",language:"en"},r=void 0,a={},o=[{value:"ST_Circle",id:"st_circle",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"st_circle",children:"ST_Circle"}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"GEOMETRY ST_Circle(DOUBLE center_lng, DOUBLE center_lat, DOUBLE radius)"})}),"\n",(0,i.jsxs)(n.p,{children:["Convert a WKT (Well Known Text) into a circle on the earth's sphere. Where ",(0,i.jsx)(n.code,{children:"center_lng'denotes the longitude of the center of a circle, "})," Center_lat",(0,i.jsx)(n.code,{children:" denotes the latitude of the center of a circle, radius"})," denotes the radius of a circle in meters."]}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mysql> SELECT ST_AsText(ST_Circle(111, 64, 10000));\n+--------------------------------------------+\n| st_astext(st_circle(111.0, 64.0, 10000.0)) |\n+--------------------------------------------+\n| CIRCLE ((111 64), 10000)                   |\n+--------------------------------------------+\n"})}),"\n",(0,i.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(n.p,{children:"ST_CIRCLE,ST,CIRCLE"})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return c}});var s=t(667294);let i={},l=s.createContext(i);function c(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);