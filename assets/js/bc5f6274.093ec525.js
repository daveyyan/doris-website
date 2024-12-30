"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["94103"],{870139:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>u,assets:()=>c,toc:()=>o,frontMatter:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-functions/spatial-functions/st_distance_sphere","title":"ST_Distance_Sphere","description":"\x3c!--","source":"@site/versioned_docs/version-1.2/sql-manual/sql-functions/spatial-functions/st_distance_sphere.md","sourceDirName":"sql-manual/sql-functions/spatial-functions","slug":"/sql-manual/sql-functions/spatial-functions/st_distance_sphere","permalink":"/docs/1.2/sql-manual/sql-functions/spatial-functions/st_distance_sphere","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"ST_Distance_Sphere","language":"en"},"sidebar":"docs","previous":{"title":"ST_Circle","permalink":"/docs/1.2/sql-manual/sql-functions/spatial-functions/st_circle"},"next":{"title":"ST_Angle","permalink":"/docs/1.2/sql-manual/sql-functions/spatial-functions/st_angle"}}'),i=t("785893"),a=t("250065");let l={title:"ST_Distance_Sphere",language:"en"},r=void 0,c={},o=[{value:"ST_Distance_Sphere",id:"st_distance_sphere",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"st_distance_sphere",children:"ST_Distance_Sphere"}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,i.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"DOUBLE ST_Distance_Sphere(DOUBLE x_lng, DOUBLE x_lat, DOUBLE y_lng, DOUBLE y_lat)"})}),"\n",(0,i.jsx)(n.p,{children:"Calculate the spherical distance between two points of the earth in meters. The incoming parameters are the longitude of point X, the latitude of point X, the longitude of point Y and the latitude of point Y."}),"\n",(0,i.jsx)(n.p,{children:"x_lng and y_lng are Longitude values, must be in the range [-180, 180].\nx_lat and y_lat are Latitude values, must be in the range [-90, 90]."}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mysql> select st_distance_sphere(116.35620117, 39.939093, 116.4274406433, 39.9020987219);\n+----------------------------------------------------------------------------+\n| st_distance_sphere(116.35620117, 39.939093, 116.4274406433, 39.9020987219) |\n+----------------------------------------------------------------------------+\n|                                                         7336.9135549995917 |\n+----------------------------------------------------------------------------+\n"})}),"\n",(0,i.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(n.p,{children:"ST_DISTANCE_SPHERE,ST,DISTANCE,SPHERE"})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return l}});var s=t(667294);let i={},a=s.createContext(i);function l(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);