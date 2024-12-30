"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["871617"],{373755:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>h,assets:()=>a,toc:()=>d,frontMatter:()=>r});var s=JSON.parse('{"id":"install/cluster-deployment/doris-on-aws","title":"Deploying on AWS","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/install/cluster-deployment/doris-on-aws.md","sourceDirName":"install/cluster-deployment","slug":"/install/cluster-deployment/doris-on-aws","permalink":"/docs/3.0/install/cluster-deployment/doris-on-aws","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"Deploying on AWS","language":"en"},"sidebar":"docs","previous":{"title":"Deploy on Kubernetes","permalink":"/docs/3.0/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/install-quickstart"},"next":{"title":"Connecting to Database","permalink":"/docs/3.0/db-connect/database-connect"}}'),o=t("785893"),i=t("250065");let r={title:"Deploying on AWS",language:"en"},l=void 0,a={},d=[{value:"What&#39;s AWS CloudFormation?",id:"whats-aws-cloudformation",level:2},{value:"What&#39;s Doris on AWS CloudFormation?",id:"whats-doris-on-aws-cloudformation",level:2},{value:"Precautions for Use",id:"precautions-for-use",level:2},{value:"Start Deployment",id:"start-deployment",level:2},{value:"How to Connect to the Database",id:"how-to-connect-to-the-database",level:2}];function c(e){let n={a:"a",admonition:"admonition",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"To facilitate a quick experience of Doris on AWS, we have provided a CloudFormation template (CFT) that allows for rapid cluster launch and operation. With this template, you can automatically configure AWS resources and launch a Doris cluster with minimal configuration required."}),"\n",(0,o.jsx)(n.p,{children:"Alternatively, you can also purchase AWS resources independently and deploy the cluster manually using standard methods."}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsx)(n.p,{children:"Currently, such deployment is not supported in the compute-storage decoupled mode."})}),"\n",(0,o.jsx)(n.h2,{id:"whats-aws-cloudformation",children:"What's AWS CloudFormation?"}),"\n",(0,o.jsx)(n.p,{children:'CloudFormation enables users to create a "stack of resources" in just one step. Resources refer to the items created by users, such as EC2 instances, VPCs, subnets, and more. A group of such resources is referred to as a stack. Users can write a template that easily allows them to create a resource stack according to their preferences in a single step. This is faster, more repeatable, and offers better consistency compared to manual creation and configuration. Additionally, templates can be placed into source code for version control, enabling their use for any purpose whenever needed.'}),"\n",(0,o.jsx)(n.h2,{id:"whats-doris-on-aws-cloudformation",children:"What's Doris on AWS CloudFormation?"}),"\n",(0,o.jsx)(n.p,{children:"Currently, Doris provides the Doris CloudFormation Template, which allows users to quickly create a cluster of the relevant Doris version on AWS by directly using this template, enabling them to experience the latest Doris features."}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsx)(n.p,{children:"**Note: ** The template for building Doris clusters based on CloudFormation currently only supports the regions of us-east-1, us-west-1, and us-west-2. Doris on AWS CloudFormation is primarily intended for testing or experiencing purposes, and should not be used in production environments."})}),"\n",(0,o.jsx)(n.h2,{id:"precautions-for-use",children:"Precautions for Use"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Determine the VPC and Subnet that will be deployed."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Determine the key pair that will be used to log into the nodes."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"A VPC Endpoint Interface for S3 will be established during deployment."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"start-deployment",children:"Start Deployment"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:'1. On the AWS console, navigate to CloudFormation and click on "Create stack".'})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Start Deployment",src:t(278385).Z+"",width:"1280",height:"541"})}),"\n",(0,o.jsx)(n.p,{children:'Select the "Amazon S3 URL Template source" option, and fill in the "Amazon S3 URL" field with the following template link:'}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://sdb-cloud-third-party.s3.amazonaws.com/doris-cf/cloudformation_doris.template.yaml",children:"https://sdb-cloud-third-party.s3.amazonaws.com/doris-cf/cloudformation_doris.template.yaml"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"2. Configure the specific parameters of the template"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Configure the specific parameter",src:t(217911).Z+"",width:"1280",height:"537"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Configure the specific parameter",src:t(632527).Z+"",width:"1280",height:"566"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Configure the specific parameter",src:t(578337).Z+"",width:"1280",height:"291"})}),"\n",(0,o.jsx)(n.p,{children:"The main parameters are described as follows:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"VPC ID"}),": The VPC where the deployment will be performed."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Subnet ID"}),": The subnet where the deployment will be deployed."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Key pair name"}),": The public/private key pairs used to connect to the deployed BE and FE nodes."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Version of Doris"}),": The version of Doris to be deployed, such as 2.1.0, 2.0.6, etc."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Number of Doris FE"}),": The number of FE nodes. The template defaults to selecting only 1 FE."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Fe instance type"}),": The node type of FE, and the default value can be used."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Number of Doris Be"}),": The number of BE nodes, which can be 1 or 3."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Be instance type"}),": The node type of BE, and the default value can be used."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Meta data dir"}),": The metadata directory of the FE node, and the default value can be used."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Sys log level:"}),' Sets the level of system logs, and the default value of "info" can be used.']}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Volume type of Be nodes:"})," The volume type of EBS mounted on BE nodes. Each node is mounted with one disk by default. The default value can be used."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Volume size of Be nodes"}),": The size of EBS mounted on BE nodes, measured in GB. The default value can be used."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"how-to-connect-to-the-database",children:"How to Connect to the Database"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"1. The display after successful deployment is as follows:"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"How to Connect to the Database",src:t(402929).Z+"",width:"1280",height:"488"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"2. Next, find the connection address for FE as follows. In this example, you can view the address as 172.16.0.97 from the FE Outputs."})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"find the connection address for FE ",src:t(190658).Z+"",width:"1280",height:"395"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"find the connection address for FE ",src:t(529212).Z+"",width:"1280",height:"587"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"find the connection address for FE ",src:t(730153).Z+"",width:"1280",height:"343"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"3. To connect to the deployed Doris Cluster, here are some default values after deploying Doris using CloudFormation:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"FE IP"}),": Obtain the IP address of FE following the steps in the previous section."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"FE MySQL protocol port:"})," 9030"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"FE HTTP protocol port"}),": 8030"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Default root password"}),": empty"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Default admin password:"})," empty"]}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},217911:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/configure-specific-parameters-1-02a68404da0de49413e927ce78c627f6.jpeg"},632527:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/configure-specific-parameters-2-ceb37fce06a8e3f6448969749668991a.jpeg"},578337:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/configure-specific-parameters-3-a7c6b3109399344bcd5075bb1e48a742.jpeg"},190658:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/find-connection-address-for-fe-1-c20545a89a9d7bca6322546206708018.jpeg"},529212:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/find-connection-address-for-fe-2-8f03647a1597f7668059b5fde4241b10.jpeg"},730153:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/find-connection-address-for-fe-3-413321f49156410699385c752184e825.jpeg"},402929:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/how-to-connect-to-the-database-5cf97ada6d5686eb8648a3fa4e22837e.jpeg"},278385:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/start-deployment-212dd402013fb3b8b495c22f639968f7.jpeg"},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return r}});var s=t(667294);let o={},i=s.createContext(o);function r(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);