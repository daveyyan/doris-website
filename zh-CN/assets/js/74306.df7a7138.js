"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["74306"],{663712:function(e,t,n){n.d(t,{b:function(){return i},k:function(){return o}});var a=n(785893),l=n(667294),r=n(285346);let s=l.createContext(null);function i(e){var t;let{children:n,content:r}=e;let i=(t=r,(0,l.useMemo)(()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,contentTitle:t.contentTitle,toc:t.toc}),[t]));return(0,a.jsx)(s.Provider,{value:i,children:n})}function o(){let e=(0,l.useContext)(s);if(null===e)throw new r.i6("DocProvider");return e}},238813:function(e,t,n){n.d(t,{Z:()=>d});var a=n("785893");n("667294");var l=n("74904"),r=n("130202"),s=n("784681"),i=n("132322");function o(e){let{className:t}=e;return(0,a.jsx)(i.Z,{type:"caution",title:(0,a.jsx)(r.ht,{}),className:(0,l.Z)(t,s.k.common.draftBanner),children:(0,a.jsx)(r.xo,{})})}var c=n("915133");function d(e){let{metadata:t}=e,{unlisted:n,frontMatter:l}=t;return(0,a.jsxs)(a.Fragment,{children:[(n||l.unlisted)&&(0,a.jsx)(c.Z,{}),l.draft&&(0,a.jsx)(o,{})]})}},852520:function(e,t,n){n.d(t,{Z:()=>v});var a=n("785893");n("667294");var l=n("74904"),r=n("784681"),s=n("969369"),i=n("579246"),o=n("83012"),c=n("96025"),d=n("904757");function u(e){return(0,a.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,a.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}let m="breadcrumbHomeIcon_YNFT";function h(){let e=(0,d.ZP)("/");return(0,a.jsx)("li",{className:"breadcrumbs__item",children:(0,a.jsx)(o.Z,{"aria-label":(0,c.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,a.jsx)(u,{className:m})})})}let p="breadcrumbsContainer_Z_bl";function b(e){let{children:t,href:n,isLast:l}=e,r="breadcrumbs__link";return l?(0,a.jsx)("span",{className:r,itemProp:"name",children:t}):n?(0,a.jsx)(o.Z,{className:r,href:n,itemProp:"item",children:(0,a.jsx)("span",{itemProp:"name",children:t})}):(0,a.jsx)("span",{className:r,children:t})}function f(e){let{children:t,active:n,index:r,addMicrodata:s}=e;return(0,a.jsxs)("li",{...s&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,l.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,a.jsx)("meta",{itemProp:"position",content:String(r+1)})]})}function v(){let e=(0,s.s1)(),t=(0,i.Ns)();return e?(0,a.jsx)("nav",{className:(0,l.Z)(r.k.docs.docBreadcrumbs,p),"aria-label":(0,c.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,a.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,a.jsx)(h,{}),e.map((t,n)=>{let l=n===e.length-1,r="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,a.jsx)(f,{active:l,index:n,addMicrodata:!!r,children:(0,a.jsx)(b,{href:r,isLast:l,children:t.label})},n)})]})}):null}},820437:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(785893);n(667294);var l=n(96025),r=n(450790);function s(e){let{previous:t,next:n}=e;return(0,a.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,l.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,a.jsx)(r.Z,{...t,subLabel:(0,a.jsx)(l.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,a.jsx)(r.Z,{...n,subLabel:(0,a.jsx)(l.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},949367:function(e,t,n){n.d(t,{Z:()=>h});var a=n("785893");n("667294");var l=n("74904"),r=n("685506"),s=n("96025"),i=n("784681"),o=n("211437");function c(e){let{lastUpdatedAt:t}=e,n=new Date(t),l=(0,o.P)({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(n);return(0,a.jsx)(s.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,a.jsx)("b",{children:(0,a.jsx)("time",{dateTime:n.toISOString(),itemProp:"dateModified",children:l})})},children:" on {date}"})}function d(e){let{lastUpdatedBy:t}=e;return(0,a.jsx)(s.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,a.jsx)("b",{children:t})},children:" by {user}"})}function u(e){let{lastUpdatedAt:t,lastUpdatedBy:n}=e;return(0,a.jsxs)("span",{className:i.k.common.lastUpdated,children:[(0,a.jsx)(s.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t?(0,a.jsx)(c,{lastUpdatedAt:t}):"",byUser:n?(0,a.jsx)(d,{lastUpdatedBy:n}):""},children:"Last updated{atDate}{byUser}"}),!1]})}let m="lastUpdated_JAkA";function h(e){let{className:t,editUrl:n,lastUpdatedAt:s,lastUpdatedBy:i}=e;return(0,a.jsxs)("div",{className:(0,l.Z)("row",t),children:[(0,a.jsx)("div",{className:"col",children:n&&(0,a.jsx)(r.Z,{editUrl:n})}),(0,a.jsx)("div",{className:(0,l.Z)("col",m),children:(s||i)&&(0,a.jsx)(u,{lastUpdatedAt:s,lastUpdatedBy:i})})]})}},74295:function(e,t,n){n.d(t,{Z:()=>s});var a=n("785893");n("667294");var l=n("74904");let r="iconEdit_Z9Sw";function s(e){let{className:t,...n}=e;return(0,a.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(r,t),"aria-hidden":"true",...n,children:(0,a.jsx)("g",{children:(0,a.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}},450790:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(785893);n(667294);var l=n(74904),r=n(83012);function s(e){let{permalink:t,title:n,subLabel:s,isNext:i}=e;return(0,a.jsxs)(r.Z,{className:(0,l.Z)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[s&&(0,a.jsx)("div",{className:"pagination-nav__sublabel",children:s}),(0,a.jsx)("div",{className:"pagination-nav__label",children:n})]})}},635434:function(e,t,n){n.d(t,{Z:()=>u});var a=n("785893");n("667294");var l=n("74904"),r=n("257455"),s=n("276365"),i=n("96025");let o={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function c(e){let{collapsed:t,...n}=e;return(0,a.jsx)("button",{type:"button",...n,className:(0,l.Z)("clean-btn",o.tocCollapsibleButton,!t&&o.tocCollapsibleButtonExpanded,n.className),children:(0,a.jsx)(i.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}let d={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function u(e){let{toc:t,className:n,minHeadingLevel:i,maxHeadingLevel:o}=e,{collapsed:u,toggleCollapsed:m}=(0,r.u)({initialState:!0});return(0,a.jsxs)("div",{className:(0,l.Z)(d.tocCollapsible,!u&&d.tocCollapsibleExpanded,n),children:[(0,a.jsx)(c,{collapsed:u,onClick:m}),(0,a.jsx)(r.z,{lazy:!0,className:d.tocCollapsibleContent,collapsed:u,children:(0,a.jsx)(s.Z,{toc:t,minHeadingLevel:i,maxHeadingLevel:o})})]})}},276365:function(e,t,n){n.d(t,{Z:()=>c});var a=n("785893"),l=n("667294"),r=n("30140");function s(e){let t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}var i=n("83012");let o=l.memo(function e(t){let{toc:n,className:l,linkClassName:r,isChild:s}=t;return n.length?(0,a.jsx)("ul",{className:s?void 0:l,children:n.map(t=>(0,a.jsxs)("li",{children:[(0,a.jsx)(i.Z,{to:`#${t.id}`,className:r??void 0,dangerouslySetInnerHTML:{__html:t.value}}),(0,a.jsx)(e,{isChild:!0,toc:t.children,className:l,linkClassName:r})]},t.id))}):null});function c(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:i="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:d,maxHeadingLevel:u,...m}=e,h=(0,r.L)(),p=d??h.tableOfContents.minHeadingLevel,b=u??h.tableOfContents.maxHeadingLevel,f=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,l.useMemo)(()=>(function e(t){let{toc:n,minHeadingLevel:a,maxHeadingLevel:l}=t;return n.flatMap(t=>{var n;let r=e({toc:t.children,minHeadingLevel:a,maxHeadingLevel:l});return(n=t).level>=a&&n.level<=l?[{...t,children:r}]:r})})({toc:function(e){let t=e.map(e=>({...e,parentIndex:-1,children:[]})),n=Array(7).fill(-1);t.forEach((e,t)=>{let a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t});let a=[];return t.forEach(e=>{let{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):a.push(l)}),a}(t),minHeadingLevel:n,maxHeadingLevel:a}),[t,n,a])}({toc:t,minHeadingLevel:p,maxHeadingLevel:b});return!function(e){let t=(0,l.useRef)(void 0),n=function(){let e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.L)();return(0,l.useEffect)(()=>{e.current=t?0:document.querySelector(".navbar").clientHeight},[t]),e}();(0,l.useEffect)(()=>{if(!e)return()=>{};let{linkClassName:a,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:i}=e;function o(){var e;let o=(e=a,Array.from(document.getElementsByClassName(e))),c=function(e,t){let{anchorTopOffset:n}=t,a=e.find(e=>s(e).top>=n);if(a){var l;return(l=s(a)).top>0&&l.bottom<window.innerHeight/2?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}(function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e,a=[];for(let e=t;e<=n;e+=1)a.push(`h${e}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:i}),{anchorTopOffset:n.current}),d=o.find(e=>{var t;return c&&c.id===decodeURIComponent((t=e).href.substring(t.href.indexOf("#")+1))});o.forEach(e=>{var n;n=e,e===d?(t.current&&t.current!==n&&t.current.classList.remove(l),n.classList.add(l),t.current=n):n.classList.remove(l)})}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}},[e,n])}((0,l.useMemo)(()=>{if(i&&c)return{linkClassName:i,linkActiveClassName:c,minHeadingLevel:p,maxHeadingLevel:b}},[i,c,p,b])),(0,a.jsx)(o,{toc:f,className:n,linkClassName:i,...m})}},48627:function(e,t,n){n.d(t,{Z:()=>i});var a=n("785893");n("667294");var l=n("74904"),r=n("83012");let s={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function i(e){let{permalink:t,label:n,count:i,description:o}=e;return(0,a.jsxs)(r.Z,{href:t,title:o,className:(0,l.Z)(s.tag,i?s.tagWithCount:s.tagRegular),children:[n,i&&(0,a.jsx)("span",{children:i})]})}},172501:function(e,t,n){n.d(t,{Z:()=>c});var a=n("785893");n("667294");var l=n("74904"),r=n("96025"),s=n("48627");let i="tags_jXut",o="tag_QGVx";function c(e){let{tags:t}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("b",{children:(0,a.jsx)(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,a.jsx)("ul",{className:(0,l.Z)(i,"padding--none","margin-left--sm"),children:t.map(e=>(0,a.jsx)("li",{className:o,children:(0,a.jsx)(s.Z,{...e})},e.permalink))})]})}}}]);