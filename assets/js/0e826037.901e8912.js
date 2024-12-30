"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["655058"],{528322:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>a,default:()=>h,assets:()=>o,toc:()=>d,frontMatter:()=>i});var s=JSON.parse('{"id":"install/cluster-deployment/k8s-deploy/install-env","title":"Cluster Environment Requirements","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/install/cluster-deployment/k8s-deploy/install-env.md","sourceDirName":"install/cluster-deployment/k8s-deploy","slug":"/install/cluster-deployment/k8s-deploy/install-env","permalink":"/docs/3.0/install/cluster-deployment/k8s-deploy/install-env","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"Cluster Environment Requirements","language":"en"}}'),r=t("785893"),l=t("250065");let i={title:"Cluster Environment Requirements",language:"en"},a=void 0,o={},d=[{value:"Software version requirements",id:"software-version-requirements",level:2},{value:"Operating system requirements",id:"operating-system-requirements",level:2},{value:"Firewall configuration",id:"firewall-configuration",level:3},{value:"Disable and close swap",id:"disable-and-close-swap",level:3},{value:"Set the maximum number of open file handles in the system",id:"set-the-maximum-number-of-open-file-handles-in-the-system",level:3},{value:"Modify the number of virtual memory areas",id:"modify-the-number-of-virtual-memory-areas",level:3},{value:"Close transparent large page",id:"close-transparent-large-page",level:3}];function c(e){let n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"software-version-requirements",children:"Software version requirements"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Software"}),(0,r.jsx)(n.th,{children:"Version Requirements"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Docker"}),(0,r.jsx)(n.td,{children:">= 1.20"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Kubernetes"}),(0,r.jsx)(n.td,{children:">= 1.19"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Doris"}),(0,r.jsx)(n.td,{children:">= 2.0.0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Helm (optional)"}),(0,r.jsx)(n.td,{children:">= 3.7"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"operating-system-requirements",children:"Operating system requirements"}),"\n",(0,r.jsx)(n.h3,{id:"firewall-configuration",children:"Firewall configuration"}),"\n",(0,r.jsx)(n.p,{children:"When deploying a Doris cluster on Kubernetes, it is recommended to turn off the firewall configuration:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"systemctl stop firewalld\nsystemctl disable firewalld\n"})}),"\n",(0,r.jsx)(n.p,{children:"If the firewall service cannot be turned off, you can open the FE and BE ports according to your plan:"}),"\n",(0,r.jsx)(n.admonition,{title:"Tip",type:"tip",children:(0,r.jsx)(n.p,{children:"If the firewall cannot be turned off, you need to open the firewall of the corresponding Doris port according to the Kubernetes mapping rules. For specific ports, please refer to [Doris Cluster Port Planning](../standard-deployment.md#Network Requirements)."})}),"\n",(0,r.jsx)(n.h3,{id:"disable-and-close-swap",children:"Disable and close swap"}),"\n",(0,r.jsx)(n.p,{children:"When deploying Doris, it is recommended to turn off the swap partition."}),"\n",(0,r.jsx)(n.p,{children:"The swap partition can be permanently shut down with the following command."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'echo "vm.swappiness = 0">> /etc/sysctl.conf\nswapoff -a && swapon -a\nsysctl -p\n'})}),"\n",(0,r.jsx)(n.h3,{id:"set-the-maximum-number-of-open-file-handles-in-the-system",children:"Set the maximum number of open file handles in the system"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"vi /etc/security/limits.conf \n* soft nofile 1000000\n* hard nofile 1000000\n"})}),"\n",(0,r.jsx)(n.h3,{id:"modify-the-number-of-virtual-memory-areas",children:"Modify the number of virtual memory areas"}),"\n",(0,r.jsx)(n.p,{children:"Modify the virtual memory area to at least 2000000"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"sysctl -w vm.max_map_count=2000000\n"})}),"\n",(0,r.jsx)(n.h3,{id:"close-transparent-large-page",children:"Close transparent large page"}),"\n",(0,r.jsx)(n.p,{children:"When deploying Doris, it is recommended to turn off transparent huge pages."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"echo madvise > /sys/kernel/mm/transparent_hugepage/enabled\necho madvise > /sys/kernel/mm/transparent_hugepage/defrag\n"})})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return i}});var s=t(667294);let r={},l=s.createContext(r);function i(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);