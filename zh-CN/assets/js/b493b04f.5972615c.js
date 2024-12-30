"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["563242"],{828986:function(e,n,r){r.r(n),r.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>h,assets:()=>t,toc:()=>a,frontMatter:()=>o});var s=JSON.parse('{"id":"faq/lakehouse-faq","title":"\u5E38\u89C1\u6570\u636E\u6E56\u95EE\u9898","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/faq/lakehouse-faq.md","sourceDirName":"faq","slug":"/faq/lakehouse-faq","permalink":"/zh-CN/docs/dev/faq/lakehouse-faq","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u5E38\u89C1\u6570\u636E\u6E56\u95EE\u9898","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u5E38\u89C1\u67E5\u8BE2\u95EE\u9898","permalink":"/zh-CN/docs/dev/faq/sql-faq"},"next":{"title":"\u5E38\u89C1BI\u95EE\u9898","permalink":"/zh-CN/docs/dev/faq/bi-faq"}}'),i=r("785893"),c=r("250065");let o={title:"\u5E38\u89C1\u6570\u636E\u6E56\u95EE\u9898",language:"zh-CN"},l=void 0,t={},a=[{value:"\u8BC1\u4E66\u95EE\u9898",id:"\u8BC1\u4E66\u95EE\u9898",level:2},{value:"Kerberos",id:"kerberos",level:2},{value:"JDBC Catalog",id:"jdbc-catalog",level:2},{value:"Hive Catalog",id:"hive-catalog",level:2},{value:"HDFS",id:"hdfs",level:2},{value:"DLF Catalog",id:"dlf-catalog",level:2},{value:"\u5176\u4ED6\u95EE\u9898",id:"\u5176\u4ED6\u95EE\u9898",level:2}];function d(e){let n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,c.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\u8BC1\u4E66\u95EE\u9898",children:"\u8BC1\u4E66\u95EE\u9898"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u67E5\u8BE2\u65F6\u62A5\u9519 ",(0,i.jsx)(n.code,{children:"curl 77: Problem with the SSL CA cert."}),"\u3002\u8BF4\u660E\u5F53\u524D\u7CFB\u7EDF\u8BC1\u4E66\u8FC7\u65E7\uFF0C\u9700\u8981\u66F4\u65B0\u672C\u5730\u8BC1\u4E66\u3002"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u53EF\u4EE5\u4ECE ",(0,i.jsx)(n.code,{children:"https://curl.haxx.se/docs/caextract.html"})," \u4E0B\u8F7D\u6700\u65B0\u7684 CA \u8BC1\u4E66\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5C06\u4E0B\u8F7D\u540E\u7684 cacert-xxx.pem \u653E\u5230",(0,i.jsx)(n.code,{children:"/etc/ssl/certs/"}),"\u76EE\u5F55\uFF0C\u4F8B\u5982\uFF1A",(0,i.jsx)(n.code,{children:"sudo cp cacert-xxx.pem  /etc/ssl/certs/ca-certificates.crt"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u67E5\u8BE2\u65F6\u62A5\u9519\uFF1A",(0,i.jsx)(n.code,{children:"ERROR 1105 (HY000): errCode = 2, detailMessage = (x.x.x.x)[CANCELLED][INTERNAL_ERROR]error setting certificate verify locations:  CAfile: /etc/ssl/certs/ca-certificates.crt CApath: none"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"yum install -y ca-certificates\nln -s /etc/pki/ca-trust/extracted/openssl/ca-bundle.trust.crt /etc/ssl/certs/ca-certificates.crt\n"})}),"\n",(0,i.jsx)(n.h2,{id:"kerberos",children:"Kerberos"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u8FDE\u63A5 Kerberos \u8BA4\u8BC1\u7684 Hive Metastore \u62A5\u9519\uFF1A",(0,i.jsx)(n.code,{children:"GSS initiate failed"})]}),"\n",(0,i.jsx)(n.p,{children:"\u901A\u5E38\u662F\u56E0\u4E3A Kerberos \u8BA4\u8BC1\u4FE1\u606F\u586B\u5199\u4E0D\u6B63\u786E\u5BFC\u81F4\u7684\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u6B65\u9AA4\u6392\u67E5\uFF1A"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"1.2.1 \u4E4B\u524D\u7684\u7248\u672C\u4E2D\uFF0CDoris \u4F9D\u8D56\u7684 libhdfs3 \u5E93\u6CA1\u6709\u5F00\u542F gsasl\u3002\u8BF7\u66F4\u65B0\u81F3 1.2.2 \u4E4B\u540E\u7684\u7248\u672C\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u786E\u8BA4\u5BF9\u5404\u4E2A\u7EC4\u4EF6\uFF0C\u8BBE\u7F6E\u4E86\u6B63\u786E\u7684 keytab \u548C principal\uFF0C\u5E76\u786E\u8BA4 keytab \u6587\u4EF6\u5B58\u5728\u4E8E\u6240\u6709 FE\u3001BE \u8282\u70B9\u4E0A\u3002"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"hadoop.kerberos.keytab"}),"/",(0,i.jsx)(n.code,{children:"hadoop.kerberos.principal"}),"\uFF1A\u7528\u4E8E Hadoop hdfs \u8BBF\u95EE\uFF0C\u586B\u5199 hdfs \u5BF9\u5E94\u7684\u503C\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"hive.metastore.kerberos.principal"}),"\uFF1A\u7528\u4E8E hive metastore\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u5C1D\u8BD5\u5C06 principal \u4E2D\u7684 ip \u6362\u6210\u57DF\u540D\uFF08\u4E0D\u8981\u4F7F\u7528\u9ED8\u8BA4\u7684 ",(0,i.jsx)(n.code,{children:"_HOST"})," \u5360\u4F4D\u7B26\uFF09"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u786E\u8BA4 ",(0,i.jsx)(n.code,{children:"/etc/krb5.conf"})," \u6587\u4EF6\u5B58\u5728\u4E8E\u6240\u6709 FE\u3001BE \u8282\u70B9\u4E0A\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u901A\u8FC7 Hive Catalog \u8FDE\u63A5 Hive \u6570\u636E\u5E93\u62A5\u9519\uFF1A",(0,i.jsx)(n.code,{children:"RemoteException: SIMPLE authentication is not enabled.  Available:[TOKEN, KERBEROS]"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u679C\u5728 ",(0,i.jsx)(n.code,{children:"show databases"})," \u548C ",(0,i.jsx)(n.code,{children:"show tables"})," \u90FD\u662F\u6CA1\u95EE\u9898\u7684\u60C5\u51B5\u4E0B\uFF0C\u67E5\u8BE2\u7684\u65F6\u5019\u51FA\u73B0\u4E0A\u9762\u7684\u9519\u8BEF\uFF0C\u6211\u4EEC\u9700\u8981\u8FDB\u884C\u4E0B\u9762\u4E24\u4E2A\u64CD\u4F5C\uFF1A"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"fe/conf\u3001be/conf \u76EE\u5F55\u4E0B\u9700\u653E\u7F6E core-site.xml \u548C hdfs-site.xml"}),"\n",(0,i.jsx)(n.li,{children:"BE \u8282\u70B9\u6267\u884C Kerberos \u7684 kinit \u7136\u540E\u91CD\u542F BE\uFF0C\u7136\u540E\u518D\u53BB\u6267\u884C\u67E5\u8BE2\u5373\u53EF\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u67E5\u8BE2\u914D\u7F6E\u4E86 Kerberos \u7684\u5916\u8868\uFF0C\u9047\u5230\u8BE5\u62A5\u9519\uFF1A",(0,i.jsx)(n.code,{children:"GSSException: No valid credentials provided (Mechanism level: Failed to find any Kerberos Ticket)"}),"\uFF0C\u4E00\u822C\u91CD\u542F FE \u548C BE \u80FD\u591F\u89E3\u51B3\u8BE5\u95EE\u9898\u3002"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u91CD\u542F\u6240\u6709\u8282\u70B9\u524D\u53EF\u5728",(0,i.jsx)(n.code,{children:'"${DORIS_HOME}/be/conf/be.conf"'}),"\u4E2D\u7684 JAVA_OPTS \u53C2\u6570\u91CC\u914D\u7F6E",(0,i.jsx)(n.code,{children:"-Djavax.security.auth.useSubjectCredsOnly=false"}),"\uFF0C\u901A\u8FC7\u5E95\u5C42\u673A\u5236\u53BB\u83B7\u53D6 JAAS credentials \u4FE1\u606F\uFF0C\u800C\u4E0D\u662F\u5E94\u7528\u7A0B\u5E8F\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5728",(0,i.jsx)(n.a,{href:"https://docs.oracle.com/javase/8/docs/technotes/guides/security/jgss/tutorials/Troubleshooting.html",children:"JAAS Troubleshooting"}),"\u4E2D\u53EF\u83B7\u53D6\u66F4\u591A\u5E38\u89C1 JAAS \u62A5\u9519\u7684\u89E3\u51B3\u65B9\u6CD5\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u5728 Catalog \u4E2D\u914D\u7F6E Kerberos \u65F6\uFF0C\u62A5\u9519",(0,i.jsx)(n.code,{children:"Unable to obtain password from user"}),"\u7684\u89E3\u51B3\u65B9\u6CD5\uFF1A"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u7528\u5230\u7684 principal \u5FC5\u987B\u5728 klist \u4E2D\u5B58\u5728\uFF0C\u4F7F\u7528",(0,i.jsx)(n.code,{children:"klist -kt your.keytab"}),"\u68C0\u67E5\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u68C0\u67E5 catalog \u914D\u7F6E\u662F\u5426\u6B63\u786E\uFF0C\u6BD4\u5982\u6F0F\u914D",(0,i.jsx)(n.code,{children:"yarn.resourcemanager.principal"}),"\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u82E5\u4E0A\u8FF0\u68C0\u67E5\u6CA1\u95EE\u9898\uFF0C\u5219\u5F53\u524D\u7CFB\u7EDF yum \u6216\u8005\u5176\u4ED6\u5305\u7BA1\u7406\u8F6F\u4EF6\u5B89\u88C5\u7684 JDK \u7248\u672C\u5B58\u5728\u4E0D\u652F\u6301\u7684\u52A0\u5BC6\u7B97\u6CD5\uFF0C\u5EFA\u8BAE\u81EA\u884C\u5B89\u88C5 JDK \u5E76\u8BBE\u7F6E",(0,i.jsx)(n.code,{children:"JAVA_HOME"}),"\u73AF\u5883\u53D8\u91CF\u3002"]}),"\n",(0,i.jsx)(n.li,{children:"Kerberos \u9ED8\u8BA4\u4F7F\u7528 AES-256 \u6765\u8FDB\u884C\u52A0\u5BC6\u3002\u5982\u679C\u4F7F\u7528 Oracle JDK\uFF0C\u5219\u5FC5\u987B\u5B89\u88C5 JCE\u3002\u5982\u679C\u662F OpenJDK\uFF0COpenJDK \u7684\u67D0\u4E9B\u53D1\u884C\u7248\u4F1A\u81EA\u52A8\u63D0\u4F9B\u65E0\u9650\u5F3A\u5EA6\u7684 JCE\uFF0C\u56E0\u6B64\u4E0D\u9700\u8981\u5B89\u88C5 JCE\u3002"}),"\n",(0,i.jsxs)(n.li,{children:["JCE \u4E0E JDK \u7248\u672C\u662F\u5BF9\u5E94\u7684\uFF0C\u9700\u8981\u6839\u636E JDK \u7684\u7248\u672C\u6765\u9009\u62E9 JCE \u7248\u672C\uFF0C\u4E0B\u8F7D JCE \u7684 zip \u5305\u5E76\u89E3\u538B\u5230",(0,i.jsx)(n.code,{children:"$JAVA_HOME/jre/lib/security"}),"\u76EE\u5F55\u4E0B\uFF1A\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["JDK6\uFF1A",(0,i.jsx)(n.a,{href:"http://www.oracle.com/technetwork/java/javase/downloads/jce-6-download-429243.html",children:"JCE6"})]}),"\n",(0,i.jsxs)(n.li,{children:["JDK7\uFF1A",(0,i.jsx)(n.a,{href:"http://www.oracle.com/technetwork/java/embedded/embedded-se/downloads/jce-7-download-432124.html",children:"JCE7"})]}),"\n",(0,i.jsxs)(n.li,{children:["JDK8\uFF1A",(0,i.jsx)(n.a,{href:"http://www.oracle.com/technetwork/java/javase/downloads/jce8-download-2133166.html",children:"JCE8"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u4F7F\u7528 KMS \u8BBF\u95EE HDFS \u65F6\u62A5\u9519\uFF1A",(0,i.jsx)(n.code,{children:"java.security.InvalidKeyException: Illegal key size"})]}),"\n",(0,i.jsx)(n.p,{children:"\u5347\u7EA7 JDK \u7248\u672C\u5230 >= Java 8 u162 \u7684\u7248\u672C\u3002\u6216\u8005\u4E0B\u8F7D\u5B89\u88C5 JDK \u76F8\u5E94\u7684 JCE Unlimited Strength Jurisdiction Policy Files\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u5728 Catalog \u4E2D\u914D\u7F6E Kerberos \u65F6\uFF0C\u5982\u679C\u62A5\u9519",(0,i.jsx)(n.code,{children:"SIMPLE authentication is not enabled. Available:[TOKEN, KERBEROS]"}),"\uFF0C\u90A3\u4E48\u9700\u8981\u5C06",(0,i.jsx)(n.code,{children:"core-site.xml"}),"\u6587\u4EF6\u653E\u5230",(0,i.jsx)(n.code,{children:'"${DORIS_HOME}/be/conf"'}),"\u76EE\u5F55\u4E0B\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u679C\u8BBF\u95EE HDFS \u62A5\u9519",(0,i.jsx)(n.code,{children:"No common protection layer between client and server"}),"\uFF0C\u68C0\u67E5\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u7AEF\u7684",(0,i.jsx)(n.code,{children:"hadoop.rpc.protection"}),"\u5C5E\u6027\uFF0C\u4F7F\u4ED6\u4EEC\u4FDD\u6301\u4E00\u81F4\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'    <?xml version="1.0" encoding="UTF-8"?>\n    <?xml-stylesheet type="text/xsl" href="configuration.xsl"?>\n    \n    <configuration>\n    \n        <property>\n            <name>hadoop.security.authentication</name>\n            <value>kerberos</value>\n        </property>\n        \n    </configuration>\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u5728\u4F7F\u7528 Broker Load \u65F6\uFF0C\u914D\u7F6E\u4E86 Kerberos\uFF0C\u5982\u679C\u62A5\u9519",(0,i.jsx)(n.code,{children:"Cannot locate default realm."}),"\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5C06 ",(0,i.jsx)(n.code,{children:"-Djava.security.krb5.conf=/your-path"})," \u914D\u7F6E\u9879\u6DFB\u52A0\u5230 Broker Load \u542F\u52A8\u811A\u672C\u7684 ",(0,i.jsx)(n.code,{children:"start_broker.sh"})," \u7684 ",(0,i.jsx)(n.code,{children:"JAVA_OPTS"}),"\u91CC\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u5F53\u5728 Catalog \u91CC\u4F7F\u7528 Kerberos \u914D\u7F6E\u65F6\uFF0C\u4E0D\u80FD\u540C\u65F6\u4F7F\u7528",(0,i.jsx)(n.code,{children:"hadoop.username"}),"\u5C5E\u6027\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u4F7F\u7528 JDK 17 \u8BBF\u95EE Kerberos"}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u679C\u4F7F\u7528 JDK 17 \u8FD0\u884C Doris \u5E76\u8BBF\u95EE Kerberos \u670D\u52A1\uFF0C\u53EF\u80FD\u4F1A\u51FA\u73B0\u56E0\u4F7F\u7528\u5DF2\u5E9F\u5F03\u7684\u52A0\u5BC6\u7B97\u6CD5\u800C\u5BFC\u81F4\u65E0\u6CD5\u8BBF\u95EE\u7684\u73B0\u8C61\u3002\u9700\u8981\u5728 krb5.conf \u4E2D\u6DFB\u52A0 ",(0,i.jsx)(n.code,{children:"allow_weak_crypto=true"})," \u5C5E\u6027\u3002\u6216\u5347\u7EA7 Kerberos \u7684\u52A0\u5BC6\u7B97\u6CD5\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u8BE6\u60C5\u53C2\u9605\uFF1A",(0,i.jsx)(n.a,{href:"https://seanjmullan.org/blog/2021/09/14/jdk17#kerberos",children:"https://seanjmullan.org/blog/2021/09/14/jdk17#kerberos"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"jdbc-catalog",children:"JDBC Catalog"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u901A\u8FC7 JDBC Catalog \u8FDE\u63A5 SQLServer \u62A5\u9519\uFF1A",(0,i.jsx)(n.code,{children:"unable to find valid certification path to requested target"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u8BF7\u5728 ",(0,i.jsx)(n.code,{children:"jdbc_url"})," \u4E2D\u6DFB\u52A0 ",(0,i.jsx)(n.code,{children:"trustServerCertificate=true"})," \u9009\u9879\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u901A\u8FC7 JDBC Catalog \u8FDE\u63A5 MySQL \u6570\u636E\u5E93\uFF0C\u4E2D\u6587\u5B57\u7B26\u4E71\u7801\uFF0C\u6216\u4E2D\u6587\u5B57\u7B26\u6761\u4EF6\u67E5\u8BE2\u4E0D\u6B63\u786E"}),"\n",(0,i.jsxs)(n.p,{children:["\u8BF7\u5728 ",(0,i.jsx)(n.code,{children:"jdbc_url"})," \u4E2D\u6DFB\u52A0 ",(0,i.jsx)(n.code,{children:"useUnicode=true&characterEncoding=utf-8"})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u6CE8\uFF1A1.2.3 \u7248\u672C\u540E\uFF0C\u4F7F\u7528 JDBC Catalog \u8FDE\u63A5 MySQL \u6570\u636E\u5E93\uFF0C\u4F1A\u81EA\u52A8\u6DFB\u52A0\u8FD9\u4E9B\u53C2\u6570\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u901A\u8FC7 JDBC Catalog \u8FDE\u63A5 MySQL \u6570\u636E\u5E93\u62A5\u9519\uFF1A",(0,i.jsx)(n.code,{children:"Establishing SSL connection without server's identity verification is not recommended"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u8BF7\u5728 ",(0,i.jsx)(n.code,{children:"jdbc_url"})," \u4E2D\u6DFB\u52A0 ",(0,i.jsx)(n.code,{children:"useSSL=true"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u4F7F\u7528 JDBC Catalog \u5C06 MySQL \u6570\u636E\u540C\u6B65\u5230 Doris \u4E2D\uFF0C\u65E5\u671F\u6570\u636E\u540C\u6B65\u9519\u8BEF\u3002\u9700\u8981\u6821\u9A8C\u4E0B MySQL \u7684\u7248\u672C\u662F\u5426\u4E0E MySQL \u7684\u9A71\u52A8\u5305\u662F\u5426\u5BF9\u5E94\uFF0C\u6BD4\u5982 MySQL8 \u4EE5\u4E0A\u9700\u8981\u4F7F\u7528\u9A71\u52A8 com.mysql.cj.jdbc.Driver\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"hive-catalog",children:"Hive Catalog"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u901A\u8FC7 Hive Metastore \u8BBF\u95EE Iceberg \u8868\u62A5\u9519\uFF1A",(0,i.jsx)(n.code,{children:"failed to get schema"})," \u6216 ",(0,i.jsx)(n.code,{children:"Storage schema reading not supported"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u5728 Hive \u7684 lib/ \u76EE\u5F55\u653E\u4E0A ",(0,i.jsx)(n.code,{children:"iceberg"})," \u8FD0\u884C\u65F6\u6709\u5173\u7684 jar \u5305\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5728 ",(0,i.jsx)(n.code,{children:"hive-site.xml"})," \u914D\u7F6E\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"metastore.storage.schema.reader.impl=org.apache.hadoop.hive.metastore.SerDeStorageSchemaReader\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u914D\u7F6E\u5B8C\u6210\u540E\u9700\u8981\u91CD\u542F Hive Metastore\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u8FDE\u63A5 Hive Catalog \u62A5\u9519\uFF1A",(0,i.jsx)(n.code,{children:"Caused by: java.lang.NullPointerException"})]}),"\n",(0,i.jsx)(n.p,{children:"\u5982 fe.log \u4E2D\u6709\u5982\u4E0B\u5806\u6808\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Caused by: java.lang.NullPointerException\n    at org.apache.hadoop.hive.ql.security.authorization.plugin.AuthorizationMetaStoreFilterHook.getFilteredObjects(AuthorizationMetaStoreFilterHook.java:78) ~[hive-exec-3.1.3-core.jar:3.1.3]\n    at org.apache.hadoop.hive.ql.security.authorization.plugin.AuthorizationMetaStoreFilterHook.filterDatabases(AuthorizationMetaStoreFilterHook.java:55) ~[hive-exec-3.1.3-core.jar:3.1.3]\n    at org.apache.hadoop.hive.metastore.HiveMetaStoreClient.getAllDatabases(HiveMetaStoreClient.java:1548) ~[doris-fe.jar:3.1.3]\n    at org.apache.hadoop.hive.metastore.HiveMetaStoreClient.getAllDatabases(HiveMetaStoreClient.java:1542) ~[doris-fe.jar:3.1.3]\n    at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method) ~[?:1.8.0_181]\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u53EF\u4EE5\u5C1D\u8BD5\u5728 ",(0,i.jsx)(n.code,{children:"create catalog"})," \u8BED\u53E5\u4E2D\u6DFB\u52A0 ",(0,i.jsx)(n.code,{children:'"metastore.filter.hook" = "org.apache.hadoop.hive.metastore.DefaultMetaStoreFilterHookImpl"'})," \u89E3\u51B3\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u5982\u679C\u521B\u5EFA Hive Catalog \u540E\u80FD\u6B63\u5E38",(0,i.jsx)(n.code,{children:"show tables"}),"\uFF0C\u4F46\u67E5\u8BE2\u65F6\u62A5",(0,i.jsx)(n.code,{children:"java.net.UnknownHostException: xxxxx"})]}),"\n",(0,i.jsx)(n.p,{children:"\u53EF\u4EE5\u5728 CATALOG \u7684 PROPERTIES \u4E2D\u6DFB\u52A0"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"'fs.defaultFS' = 'hdfs://<your_nameservice_or_actually_HDFS_IP_and_port>'\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Hive 1.x \u7684 orc \u683C\u5F0F\u7684\u8868\u53EF\u80FD\u4F1A\u9047\u5230\u5E95\u5C42 orc \u6587\u4EF6 schema \u4E2D\u5217\u540D\u4E3A ",(0,i.jsx)(n.code,{children:"_col0"}),"\uFF0C",(0,i.jsx)(n.code,{children:"_col1"}),"\uFF0C",(0,i.jsx)(n.code,{children:"_col2"}),"... \u8FD9\u7C7B\u7CFB\u7EDF\u5217\u540D\uFF0C\u6B64\u65F6\u9700\u8981\u5728 catalog \u914D\u7F6E\u4E2D\u6DFB\u52A0 ",(0,i.jsx)(n.code,{children:"hive.version"})," \u4E3A 1.x.x\uFF0C\u8FD9\u6837\u5C31\u4F1A\u4F7F\u7528 hive \u8868\u4E2D\u7684\u5217\u540D\u8FDB\u884C\u6620\u5C04\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE CATALOG hive PROPERTIES (\n    'hive.version' = '1.x.x'\n);\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u4F7F\u7528 Catalog \u67E5\u8BE2\u8868\u6570\u636E\u65F6\u53D1\u73B0\u4E0E Hive Metastore \u76F8\u5173\u7684\u62A5\u9519\uFF1A",(0,i.jsx)(n.code,{children:"Invalid method name"}),"\uFF0C\u9700\u8981\u8BBE\u7F6E",(0,i.jsx)(n.code,{children:"hive.version"}),"\u53C2\u6570\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE CATALOG hive PROPERTIES (\n    'hive.version' = '2.x.x'\n);\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u67E5\u8BE2 ORC \u683C\u5F0F\u7684\u8868\uFF0CFE \u62A5\u9519 ",(0,i.jsx)(n.code,{children:"Could not obtain block"})," \u6216 ",(0,i.jsx)(n.code,{children:"Caused by: java.lang.NoSuchFieldError: types"})]}),"\n",(0,i.jsx)(n.p,{children:"\u5BF9\u4E8E ORC \u6587\u4EF6\uFF0C\u5728\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CFE \u4F1A\u8BBF\u95EE HDFS \u83B7\u53D6\u6587\u4EF6\u4FE1\u606F\uFF0C\u8FDB\u884C\u6587\u4EF6\u5207\u5206\u3002\u90E8\u5206\u60C5\u51B5\u4E0B\uFF0CFE \u53EF\u80FD\u65E0\u6CD5\u8BBF\u95EE\u5230 HDFS\u3002\u53EF\u4EE5\u901A\u8FC7\u6DFB\u52A0\u4EE5\u4E0B\u53C2\u6570\u89E3\u51B3\uFF1A"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:'"hive.exec.orc.split.strategy" = "BI"'})}),"\n",(0,i.jsx)(n.p,{children:"\u5176\u4ED6\u9009\u9879\uFF1AHYBRID\uFF08\u9ED8\u8BA4\uFF09\uFF0CETL\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5728 hive \u4E0A\u53EF\u4EE5\u67E5\u5230 hudi \u8868\u5206\u533A\u5B57\u6BB5\u7684\u503C\uFF0C\u4F46\u662F\u5728 doris \u67E5\u4E0D\u5230\u3002"}),"\n",(0,i.jsx)(n.p,{children:"doris \u548C hive \u76EE\u524D\u67E5\u8BE2 hudi \u7684\u65B9\u5F0F\u4E0D\u4E00\u6837\uFF0Cdoris \u9700\u8981\u5728 hudi \u8868\u7ED3\u6784\u7684 avsc \u6587\u4EF6\u91CC\u6DFB\u52A0\u4E0A\u5206\u533A\u5B57\u6BB5\uFF0C\u5982\u679C\u6CA1\u52A0\uFF0C\u5C31\u4F1A\u5BFC\u81F4 doris \u67E5\u8BE2 partition_val \u4E3A\u7A7A\uFF08\u5373\u4F7F\u8BBE\u7F6E\u4E86 hoodie.datasource.hive_sync.partition_fields=partition_val \u4E5F\u4E0D\u53EF\u4EE5\uFF09"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n    "type": "record",\n    "name": "record",\n    "fields": [{\n        "name": "partition_val",\n        "type": [\n            "null",\n            "string"\n            ],\n        "doc": "Preset partition field, empty string when not partitioned",\n        "default": null\n        },\n        {\n        "name": "name",\n        "type": "string",\n        "doc": "Name"\n        },\n        {\n        "name": "create_time",\n        "type": "string",\n        "doc": "Creation time"\n        }\n    ]\n}\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u67E5\u8BE2 hive \u5916\u8868\uFF0C\u9047\u5230\u8BE5\u62A5\u9519\uFF1A",(0,i.jsx)(n.code,{children:"java.lang.ClassNotFoundException: Class com.hadoop.compression.lzo.LzoCodec not found"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u53BB hadoop \u73AF\u5883\u641C\u7D22",(0,i.jsx)(n.code,{children:"hadoop-lzo-*.jar"}),"\u653E\u5728",(0,i.jsx)(n.code,{children:'"${DORIS_HOME}/fe/lib/"'}),"\u76EE\u5F55\u4E0B\u5E76\u91CD\u542F fe\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4ECE 2.0.2 \u7248\u672C\u8D77\uFF0C\u53EF\u4EE5\u5C06\u8FD9\u4E2A\u6587\u4EF6\u653E\u7F6E\u5728 FE \u7684 ",(0,i.jsx)(n.code,{children:"custom_lib/"})," \u76EE\u5F55\u4E0B\uFF08\u5982\u4E0D\u5B58\u5728\uFF0C\u624B\u52A8\u521B\u5EFA\u5373\u53EF\uFF09\uFF0C\u4EE5\u9632\u6B62\u5347\u7EA7\u96C6\u7FA4\u65F6\u56E0\u4E3A lib \u76EE\u5F55\u88AB\u66FF\u6362\u800C\u5BFC\u81F4\u6587\u4EF6\u4E22\u5931\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u521B\u5EFA hive \u8868\u6307\u5B9A serde \u4E3A ",(0,i.jsx)(n.code,{children:"org.apache.hadoop.hive.contrib.serde2.MultiDelimitserDe"}),"\uFF0C\u8BBF\u95EE\u8868\u65F6\u62A5\u9519\uFF1A",(0,i.jsx)(n.code,{children:"storage schema reading not supported"})]}),"\n",(0,i.jsx)(n.p,{children:"\u5728 hive-site.xml \u6587\u4EF6\u4E2D\u589E\u52A0\u4EE5\u4E0B\u914D\u7F6E\uFF0C\u5E76\u91CD\u542F hms \u670D\u52A1\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"<property>\n   <name>metastore.storage.schema.reader.impl</name>\n   <value>org.apache.hadoop.hive.metastore.SerDeStorageSchemaReader</value>\n</property> \n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u62A5\u9519\uFF1Ajava.security.InvalidAlgorithmParameterException: the trustAnchors parameter must be non-empty"}),"\n",(0,i.jsx)(n.p,{children:"FE\u65E5\u5FD7\u4E2D\u5B8C\u6574\u62A5\u9519\u4FE1\u606F\u5982\u4E0B\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"org.apache.doris.common.UserException: errCode = 2, detailMessage = S3 list path failed. path=s3://bucket/part-*,msg=errors while get file status listStatus on s3://bucket: com.amazonaws.SdkClientException: Unable to execute HTTP request: Unexpected error: java.security.InvalidAlgorithmParameterException: the trustAnchors parameter must be non-empty: Unable to execute HTTP request: Unexpected error: java.security.InvalidAlgorithmParameterException: the trustAnchors parameter must be non-empty\norg.apache.doris.common.UserException: errCode = 2, detailMessage = S3 list path exception. path=s3://bucket/part-*, err: errCode = 2, detailMessage = S3 list path failed. path=s3://bucket/part-*,msg=errors while get file status listStatus on s3://bucket: com.amazonaws.SdkClientException: Unable to execute HTTP request: Unexpected error: java.security.InvalidAlgorithmParameterException: the trustAnchors parameter must be non-empty: Unable to execute HTTP request: Unexpected error: java.security.InvalidAlgorithmParameterException: the trustAnchors parameter must be non-empty\norg.apache.hadoop.fs.s3a.AWSClientIOException: listStatus on s3://bucket: com.amazonaws.SdkClientException: Unable to execute HTTP request: Unexpected error: java.security.InvalidAlgorithmParameterException: the trustAnchors parameter must be non-empty: Unable to execute HTTP request: Unexpected error: java.security.InvalidAlgorithmParameterException: the trustAnchors parameter must be non-empty\nCaused by: com.amazonaws.SdkClientException: Unable to execute HTTP request: Unexpected error: java.security.InvalidAlgorithmParameterException: the trustAnchors parameter must be non-empty\nCaused by: javax.net.ssl.SSLException: Unexpected error: java.security.InvalidAlgorithmParameterException: the trustAnchors parameter must be non-empty\nCaused by: java.lang.RuntimeException: Unexpected error: java.security.InvalidAlgorithmParameterException: the trustAnchors parameter must be non-empty\nCaused by: java.security.InvalidAlgorithmParameterException: the trustAnchors parameter must be non-empty\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5C1D\u8BD5\u66F4\u65B0FE\u8282\u70B9CA\u8BC1\u4E66\uFF0C\u4F7F\u7528 ",(0,i.jsx)(n.code,{children:"update-ca-trust\uFF08CentOS/RockyLinux\uFF09"}),"\uFF0C\u7136\u540E\u91CD\u542FFE\u8FDB\u7A0B\u5373\u53EF\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["BE \u62A5\u9519\uFF1A",(0,i.jsx)(n.code,{children:"java.lang.InternalError"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u679C\u5728 ",(0,i.jsx)(n.code,{children:"be.INFO"})," \u4E2D\u770B\u5230\u7C7B\u4F3C\u5982\u4E0B\u9519\u8BEF\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"W20240506 15:19:57.553396 266457 jni-util.cpp:259] java.lang.InternalError\n        at org.apache.hadoop.io.compress.zlib.ZlibDecompressor.init(Native Method)\n        at org.apache.hadoop.io.compress.zlib.ZlibDecompressor.<init>(ZlibDecompressor.java:114)\n        at org.apache.hadoop.io.compress.GzipCodec$GzipZlibDecompressor.<init>(GzipCodec.java:229)\n        at org.apache.hadoop.io.compress.GzipCodec.createDecompressor(GzipCodec.java:188)\n        at org.apache.hadoop.io.compress.CodecPool.getDecompressor(CodecPool.java:183)\n        at org.apache.parquet.hadoop.CodecFactory$HeapBytesDecompressor.<init>(CodecFactory.java:99)\n        at org.apache.parquet.hadoop.CodecFactory.createDecompressor(CodecFactory.java:223)\n        at org.apache.parquet.hadoop.CodecFactory.getDecompressor(CodecFactory.java:212)\n        at org.apache.parquet.hadoop.CodecFactory.getDecompressor(CodecFactory.java:43)\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u662F\u56E0\u4E3A Doris \u81EA\u5E26\u7684 libz.a \u548C\u7CFB\u7EDF\u73AF\u5883\u4E2D\u7684 libz.so \u51B2\u7A81\u4E86\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u9700\u8981\u5148\u6267\u884C ",(0,i.jsx)(n.code,{children:"export LD_LIBRARY_PATH=/path/to/be/lib:$LD_LIBRARY_PATH"})," \u7136\u540E\u91CD\u542F BE \u8FDB\u7A0B\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"hdfs",children:"HDFS"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u8BBF\u95EE HDFS 3.x \u65F6\u62A5\u9519\uFF1A",(0,i.jsx)(n.code,{children:"java.lang.VerifyError: xxx"})]}),"\n",(0,i.jsx)(n.p,{children:"1.2.1 \u4E4B\u524D\u7684\u7248\u672C\u4E2D\uFF0CDoris \u4F9D\u8D56\u7684 Hadoop \u7248\u672C\u4E3A 2.8\u3002\u9700\u66F4\u65B0\u81F3 2.10.2\u3002\u6216\u66F4\u65B0 Doris \u81F3 1.2.2 \u4E4B\u540E\u7684\u7248\u672C\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u4F7F\u7528 Hedged Read \u4F18\u5316 HDFS \u8BFB\u53D6\u6162\u7684\u95EE\u9898\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0CHDFS \u7684\u8D1F\u8F7D\u8F83\u9AD8\u53EF\u80FD\u5BFC\u81F4\u8BFB\u53D6\u67D0\u4E2A HDFS \u4E0A\u7684\u6570\u636E\u526F\u672C\u7684\u65F6\u95F4\u8F83\u957F\uFF0C\u4ECE\u800C\u62D6\u6162\u6574\u4F53\u7684\u67E5\u8BE2\u6548\u7387\u3002HDFS Client \u63D0\u4F9B\u4E86 Hedged Read \u529F\u80FD\u3002\n\u8BE5\u529F\u80FD\u53EF\u4EE5\u5728\u4E00\u4E2A\u8BFB\u8BF7\u6C42\u8D85\u8FC7\u4E00\u5B9A\u9608\u503C\u672A\u8FD4\u56DE\u65F6\uFF0C\u542F\u52A8\u53E6\u4E00\u4E2A\u8BFB\u7EBF\u7A0B\u8BFB\u53D6\u540C\u4E00\u4EFD\u6570\u636E\uFF0C\u54EA\u4E2A\u5148\u8FD4\u56DE\u5C31\u662F\u7528\u54EA\u4E2A\u7ED3\u679C\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u6CE8\u610F\uFF1A\u8BE5\u529F\u80FD\u53EF\u80FD\u4F1A\u589E\u52A0 HDFS \u96C6\u7FA4\u7684\u8D1F\u8F7D\uFF0C\u8BF7\u914C\u60C5\u4F7F\u7528\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u4E24\u79CD\u65B9\u5F0F\u5F00\u542F\u8FD9\u4E2A\u529F\u80FD\uFF1A"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5728\u521B\u5EFA Catalog \u7684\u53C2\u6570\u4E2D\u6307\u5B9A\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"create catalog regression properties (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://172.21.16.47:7004',\n    'dfs.client.hedged.read.threadpool.size' = '128',\n    'dfs.client.hedged.read.threshold.millis' = \"500\"\n);\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"dfs.client.hedged.read.threadpool.size"})," \u8868\u793A\u7528\u4E8E Hedged Read \u7684\u7EBF\u7A0B\u6570\uFF0C\u8FD9\u4E9B\u7EBF\u7A0B\u7531\u4E00\u4E2A HDFS Client \u5171\u4EAB\u3002\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u9488\u5BF9\u4E00\u4E2A HDFS \u96C6\u7FA4\uFF0CBE \u8282\u70B9\u4F1A\u5171\u4EAB\u4E00\u4E2A HDFS Client\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"dfs.client.hedged.read.threshold.millis"})," \u662F\u8BFB\u53D6\u9608\u503C\uFF0C\u5355\u4F4D\u6BEB\u79D2\u3002\u5F53\u4E00\u4E2A\u8BFB\u8BF7\u6C42\u8D85\u8FC7\u8FD9\u4E2A\u9608\u503C\u672A\u8FD4\u56DE\u65F6\uFF0C\u4F1A\u89E6\u53D1 Hedged Read\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u5F00\u542F\u540E\uFF0C\u53EF\u4EE5\u5728 Query Profile \u4E2D\u770B\u5230\u76F8\u5173\u53C2\u6570\uFF1A"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"TotalHedgedRead"}),": \u53D1\u8D77 Hedged Read \u7684\u6B21\u6570\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"HedgedReadWins"}),"\uFF1AHedged Read \u6210\u529F\u7684\u6B21\u6570\uFF08\u53D1\u8D77\u5E76\u4E14\u6BD4\u539F\u8BF7\u6C42\u66F4\u5FEB\u8FD4\u56DE\u7684\u6B21\u6570\uFF09"]}),"\n",(0,i.jsx)(n.p,{children:"\u6CE8\u610F\uFF0C\u8FD9\u91CC\u7684\u503C\u662F\u5355\u4E2A HDFS Client \u7684\u7D2F\u8BA1\u503C\uFF0C\u800C\u4E0D\u662F\u5355\u4E2A\u67E5\u8BE2\u7684\u6570\u503C\u3002\u540C\u4E00\u4E2A HDFS Client \u4F1A\u88AB\u591A\u4E2A\u67E5\u8BE2\u590D\u7528\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"Couldn't create proxy provider class org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5728 FE \u548C BE \u7684 start \u811A\u672C\u4E2D\uFF0C\u4F1A\u5C06\u73AF\u5883\u53D8\u91CF ",(0,i.jsx)(n.code,{children:"HADOOP_CONF_DIR"})," \u52A0\u5165 CLASSPATH\u3002\u5982\u679C ",(0,i.jsx)(n.code,{children:"HADOOP_CONF_DIR"})," \u8BBE\u7F6E\u9519\u8BEF\uFF0C\u6BD4\u5982\u6307\u5411\u4E86\u4E0D\u5B58\u5728\u7684\u8DEF\u5F84\u6216\u9519\u8BEF\u8DEF\u5F84\uFF0C\u5219\u53EF\u80FD\u52A0\u8F7D\u5230\u9519\u8BEF\u7684 xxx-site.xml \u6587\u4EF6\uFF0C\u4ECE\u800C\u8BFB\u53D6\u5230\u9519\u8BEF\u7684\u4FE1\u606F\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u9700\u68C0\u67E5 ",(0,i.jsx)(n.code,{children:"HADOOP_CONF_DIR"})," \u662F\u5426\u914D\u7F6E\u6B63\u786E\uFF0C\u6216\u5C06\u8FD9\u4E2A\u73AF\u5883\u53D8\u91CF\u5220\u9664\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"BlockMissingExcetpion: Could not obtain block: BP-XXXXXXXXX No live nodes contain current block"})}),"\n",(0,i.jsx)(n.p,{children:"\u53EF\u80FD\u7684\u5904\u7406\u65B9\u5F0F\u6709\uFF1A"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u901A\u8FC7 ",(0,i.jsx)(n.code,{children:"hdfs fsck file -files -blocks -locations"})," \u6765\u67E5\u770B\u5177\u4F53\u8BE5\u6587\u4EF6\u662F\u5426\u5065\u5EB7\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u901A\u8FC7 ",(0,i.jsx)(n.code,{children:"telnet"})," \u6765\u68C0\u67E5\u4E0E datanode \u7684\u8FDE\u901A\u6027\u3002"]}),"\n",(0,i.jsx)(n.li,{children:"\u67E5\u770B datanode \u65E5\u5FD7\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679C\u51FA\u73B0\u4EE5\u4E0B\u9519\u8BEF\uFF1A"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"org.apache.hadoop.hdfs.server.datanode.DataNode: Failed to read expected SASL data transfer protection handshake from client at /XXX.XXX.XXX.XXX:XXXXX. Perhaps the client is running an older version of Hadoop which does not support SASL data transfer protection"}),"\n\u5219\u4E3A\u5F53\u524D hdfs \u5F00\u542F\u4E86\u52A0\u5BC6\u4F20\u8F93\u65B9\u5F0F\uFF0C\u800C\u5BA2\u6237\u7AEF\u672A\u5F00\u542F\u5BFC\u81F4\u7684\u9519\u8BEF\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u4F7F\u7528\u4E0B\u9762\u7684\u4EFB\u610F\u4E00\u79CD\u89E3\u51B3\u65B9\u6848\u5373\u53EF\uFF1A"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u62F7\u8D1D hdfs-site.xml \u4EE5\u53CA core-site.xml \u5230 be/conf \u548C fe/conf \u76EE\u5F55\u3002(\u63A8\u8350)"}),"\n",(0,i.jsxs)(n.li,{children:["\u5728 hdfs-site.xml \u627E\u5230\u76F8\u5E94\u7684\u914D\u7F6E ",(0,i.jsx)(n.code,{children:"dfs.data.transfer.protection"}),"\uFF0C\u5E76\u4E14\u5728 catalog \u91CC\u9762\u8BBE\u7F6E\u8BE5\u53C2\u6570\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"dlf-catalog",children:"DLF Catalog"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u4F7F\u7528 DLF Catalog \u65F6\uFF0CBE \u8BFB\u5728\u53D6 JindoFS \u6570\u636E\u51FA\u73B0",(0,i.jsx)(n.code,{children:"Invalid address"}),"\uFF0C\u9700\u8981\u5728",(0,i.jsx)(n.code,{children:"/ets/hosts"}),"\u4E2D\u6DFB\u52A0\u65E5\u5FD7\u4E2D\u51FA\u73B0\u7684\u57DF\u540D\u5230 IP \u7684\u6620\u5C04\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u8BFB\u53D6\u6570\u636E\u65E0\u6743\u9650\u65F6\uFF0C\u4F7F\u7528",(0,i.jsx)(n.code,{children:"hadoop.username"}),"\u5C5E\u6027\u6307\u5B9A\u6709\u6743\u9650\u7684\u7528\u6237\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"DLF Catalog \u4E2D\u7684\u5143\u6570\u636E\u548C DLF \u4FDD\u6301\u4E00\u81F4\u3002\u5F53\u4F7F\u7528 DLF \u7BA1\u7406\u5143\u6570\u636E\u65F6\uFF0CHive \u65B0\u5BFC\u5165\u7684\u5206\u533A\uFF0C\u53EF\u80FD\u672A\u88AB DLF \u540C\u6B65\uFF0C\u5BFC\u81F4\u51FA\u73B0 DLF \u548C Hive \u5143\u6570\u636E\u4E0D\u4E00\u81F4\u7684\u60C5\u51B5\uFF0C\u5BF9\u6B64\uFF0C\u9700\u8981\u5148\u4FDD\u8BC1 Hive \u5143\u6570\u636E\u88AB DLF \u5B8C\u5168\u540C\u6B65\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u5176\u4ED6\u95EE\u9898",children:"\u5176\u4ED6\u95EE\u9898"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Binary \u7C7B\u578B\u6620\u5C04\u5230 Doris \u540E\uFF0C\u67E5\u8BE2\u4E71\u7801"}),"\n",(0,i.jsxs)(n.p,{children:["Doris \u539F\u751F\u4E0D\u652F\u6301 Binary \u7C7B\u578B\uFF0C\u6240\u4EE5\u5404\u7C7B\u6570\u636E\u6E56\u6216\u6570\u636E\u5E93\u4E2D\u7684 Binary \u7C7B\u578B\u6620\u5C04\u5230 Doris \u4E2D\uFF0C\u901A\u5E38\u4F7F\u7528 String \u7C7B\u578B\u8FDB\u884C\u6620\u5C04\u3002String \u7C7B\u578B\u53EA\u80FD\u5C55\u793A\u53EF\u6253\u5370\u5B57\u7B26\u3002\u5982\u679C\u9700\u8981\u67E5\u8BE2 Binary \u7684\u5185\u5BB9\uFF0C\u53EF\u4EE5\u4F7F\u7528 ",(0,i.jsx)(n.code,{children:"TO_BASE64()"})," \u51FD\u6570\u8F6C\u6362\u4E3A Base64 \u7F16\u7801\u540E\uFF0C\u5728\u8FDB\u884C\u4E0B\u4E00\u6B65\u5904\u7406\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5206\u6790 Parquet \u6587\u4EF6"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u67E5\u8BE2 Parquet \u6587\u4EF6\u65F6\uFF0C\u7531\u4E8E\u4E0D\u540C\u7CFB\u7EDF\u751F\u6210\u7684 Parquet \u6587\u4EF6\u683C\u5F0F\u53EF\u80FD\u6709\u6240\u5DEE\u5F02\uFF0C\u6BD4\u5982 RowGroup \u7684\u6570\u91CF\uFF0C\u7D22\u5F15\u7684\u503C\u7B49\uFF0C\u6709\u65F6\u9700\u8981\u68C0\u67E5 Parquet \u6587\u4EF6\u7684\u5143\u6570\u636E\u8FDB\u884C\u95EE\u9898\u5B9A\u4F4D\u6216\u6027\u80FD\u5206\u6790\u3002\u8FD9\u91CC\u63D0\u4F9B\u4E00\u4E2A\u5DE5\u5177\u5E2E\u52A9\u7528\u6237\u66F4\u65B9\u4FBF\u7684\u5206\u6790 Parquet \u6587\u4EF6\uFF1A"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u4E0B\u8F7D\u5E76\u89E3\u538B ",(0,i.jsx)(n.a,{href:"https://github.com/morningman/tools/releases/download/apache-parquet-cli-1.14.0/apache-parquet-cli-1.14.0.tar.xz",children:"Apache Parquet Cli 1.14.0"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u5C06\u9700\u8981\u5206\u6790\u7684 Parquet \u6587\u4EF6\u4E0B\u8F7D\u5230\u672C\u5730\uFF0C\u5047\u8BBE\u8DEF\u5F84\u4E3A ",(0,i.jsx)(n.code,{children:"/path/to/file.parquet"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u4F7F\u7528\u5982\u4E0B\u547D\u4EE4\u5206\u6790 Parquet \u6587\u4EF6\u5143\u4FE1\u606F\uFF1A"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"./parquet-tools meta /path/to/file.parquet"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u66F4\u591A\u529F\u80FD\uFF0C\u53EF\u53C2\u9605 ",(0,i.jsx)(n.a,{href:"https://github.com/apache/parquet-java/tree/apache-parquet-1.14.0/parquet-cli",children:"Apache Parquet Cli \u6587\u6863"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return o}});var s=r(667294);let i={},c=s.createContext(i);function o(e){let n=s.useContext(c);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);