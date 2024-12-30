"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["160083"],{319166:function(e,n,t){t.d(n,{Z:function(){return s}});var i=t(211437);function s(e){let n,t=(0,i.P)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return n=e,t.format(new Date(n))}},132322:function(e,n,t){t.d(n,{Z:()=>z});var i=t("785893");t("667294");var s=t("561116"),a=t("386010"),r=t("96025"),l=t("784681");let o={admonition:"admonition_Gfwi",admonitionHeading:"admonitionHeading_f1Ed",admonitionContent:"admonitionContent_UjKb"};function c(e){let{type:n,className:t,children:s}=e;return(0,i.jsx)("div",{className:(0,a.Z)(l.k.common.admonition,l.k.common.admonitionType(n),o.admonition,t),children:s})}function d(e){let{icon:n,title:t}=e;return(0,i.jsx)("div",{className:o.admonitionHeading,children:t})}function m(e){let{children:n}=e;return n?(0,i.jsx)("div",{className:o.admonitionContent,children:n}):null}function h(e){let{type:n,icon:t,title:s,children:a,className:r}=e;return(0,i.jsxs)(c,{type:n,className:r,children:[s||t?(0,i.jsx)(d,{title:s,icon:t}):null,(0,i.jsx)(m,{children:a})]})}let u={icon:(0,i.jsx)(function(e){return(0,i.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})},{}),title:(0,i.jsx)(r.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function x(e){return(0,i.jsx)(h,{...u,...e,className:(0,a.Z)("alert alert--secondary",e.className),children:e.children})}let j={icon:(0,i.jsx)(function(e){return(0,i.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})},{}),title:(0,i.jsx)(r.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function f(e){return(0,i.jsx)(h,{...j,...e,className:(0,a.Z)("alert alert--success",e.className),children:e.children})}let p={icon:(0,i.jsx)(function(e){return(0,i.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})},{}),title:(0,i.jsx)(r.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function v(e){return(0,i.jsx)(h,{...p,...e,className:(0,a.Z)("alert alert--info",e.className),children:e.children})}function g(e){return(0,i.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}let N={icon:(0,i.jsx)(g,{}),title:(0,i.jsx)(r.Z,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})},Z={icon:(0,i.jsx)(function(e){return(0,i.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})},{}),title:(0,i.jsx)(r.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})},b={icon:(0,i.jsx)(g,{}),title:(0,i.jsx)(r.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})},w={note:x,tip:f,info:v,warning:function(e){return(0,i.jsx)(h,{...N,...e,className:(0,a.Z)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,i.jsx)(h,{...Z,...e,className:(0,a.Z)("alert alert--danger",e.className),children:e.children})},secondary:e=>(0,i.jsx)(x,{title:"secondary",...e}),important:e=>(0,i.jsx)(v,{title:"important",...e}),success:e=>(0,i.jsx)(f,{title:"success",...e}),caution:function(e){return(0,i.jsx)(h,{...b,...e,className:(0,a.Z)("alert alert--warning",e.className),children:e.children})}};function z(e){let n=(0,s.X)(e),t=function(e){let n=w[e];return n?n:(console.warn(`No admonition component found for admonition type "${e}". Using Info as fallback.`),w.info)}(n.type);return(0,i.jsx)(t,{...n})}},934959:function(e,n,t){t.d(n,{Z:function(){return l}});var i=t(785893);t(667294);var s=t(386010),a=t(290123),r=t(469825);function l(e){let{sidebar:n,toc:t,children:l,pageType:o,...c}=e,d=n&&n.items.length>0,m="blogList"===o;return(0,i.jsx)(a.Z,{...c,children:(0,i.jsx)("div",{className:"mb-[4.875rem] container",children:(0,i.jsxs)("div",{className:"lg:row lg:flex",children:[(0,i.jsx)(r.Z,{sidebar:n}),(0,i.jsx)("main",{className:(0,s.Z)({col:!m,"col--7":d&&!m,"col--12":!d&&m,"col--9 col--offset-1":!d&&!m}),itemScope:!0,itemType:"http://schema.org/Blog",children:l}),t&&(0,i.jsx)("div",{className:"col col--2",children:t})]})})})}},633669:function(e,n,t){t.d(n,{Z:()=>f});var i=t("785893");t("667294");var s=t("386010"),a=t("141835"),r=t("995939"),l=t("708365");function o(e){let{children:n,className:t}=e,{isBlogPostPage:s}=(0,a.nO)();return(0,i.jsx)("article",{className:s?"blog-article-content":"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting",children:(0,i.jsx)("div",{id:s?l.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody",children:(0,i.jsx)(r.Z,{children:n})})})}var c=t("83012");function d(e){let{className:n}=e,{metadata:t,isBlogPostPage:s}=(0,a.nO)(),{permalink:r,title:l,tags:o}=t;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"text-center mb-4",children:[(0,i.jsx)(c.Z,{className:"!text-[#8592A6] cursor-pointer hover:no-underline",to:"/blog",children:"Blog"}),(0,i.jsx)("span",{className:"px-2 text-[#8592A6]",children:"/"}),(0,i.jsx)("span",{children:(0,i.jsx)("span",{className:"s-tags",children:o.map((e,n)=>(0,i.jsx)("span",{className:"s-tag",children:e.label},n))})})]}),(0,i.jsx)(s?"h1":"h2",{className:"blog-post-title text-[2rem] leading-normal lg:!text-[2.5rem] text-center",itemProp:"headline",children:s?l:(0,i.jsx)(c.Z,{itemProp:"url",to:r,children:l})})]})}t("96025");var m=t("319166");function h(e){let{date:n,formattedDate:t}=e;return(0,i.jsx)("time",{dateTime:n,itemProp:"datePublished",className:"text-black ml-4",children:t})}function u(e){let{className:n}=e,{metadata:t}=(0,a.nO)(),{date:s,readingTime:r,authors:l}=t,o=l&&l.length>0;return(0,i.jsxs)("div",{className:"blog-info text-center flex justify-center text-sm text-black",children:[o&&(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("span",{className:"authors",children:l.map((e,n)=>(0,i.jsx)("span",{className:"s-author text-black",children:e.name},n))})}),(0,i.jsx)(h,{date:s,formattedDate:(0,m.Z)(s)})]})}function x(){return(0,i.jsxs)("header",{children:[(0,i.jsx)(d,{}),(0,i.jsx)(u,{})]})}function j(e){let{children:n,className:t}=e,{isBlogPostPage:s}=(0,a.nO)();return(0,i.jsx)("div",{id:s?l.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody",children:(0,i.jsx)(r.Z,{children:n})})}function f(e){let{children:n,className:t}=e,r=function(){let{isBlogPostPage:e}=(0,a.nO)();return e?void 0:"margin-bottom--xl"}();return(0,i.jsxs)(o,{className:(0,s.Z)(r,t),children:[(0,i.jsx)(x,{}),(0,i.jsx)(j,{children:n})]})}},56170:function(e,n,t){t.d(n,{Z:()=>l});var i=t("885709"),s=t("785893"),a=t("667294"),r=t("386010");let l={...i.Z,version:function(e){let{children:n,type:t="paragraph",since:i="",deprecated:l="",comment:o=""}=e,[c,d]=(0,a.useState)(!1);return(0,s.jsxs)("span",{className:(0,r.Z)("version-mark",t),onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),children:[(0,s.jsxs)("span",{className:(0,r.Z)("v-mark",c&&"show"),children:[(0,s.jsxs)("span",{className:(0,r.Z)("version-tags"),children:[i&&(0,s.jsxs)("span",{className:"version-tag",children:[(0,s.jsx)("span",{className:"version-tag-t",children:"Since"}),(0,s.jsxs)("span",{className:"version-tag-n since",children:["Version ",i]})]}),l&&(0,s.jsxs)("span",{className:"version-tag",children:[(0,s.jsx)("span",{className:"version-tag-t",children:"Deprecated"}),(0,s.jsxs)("span",{className:"version-tag-n deprecated",children:["Version ",l]})]})]}),o&&(0,s.jsx)("span",{className:"version-comment",children:o})]}),n]})}}}}]);