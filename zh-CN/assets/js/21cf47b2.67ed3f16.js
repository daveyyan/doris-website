"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["622027"],{300961:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>l,default:()=>h,assets:()=>a,toc:()=>d,frontMatter:()=>o});var r=JSON.parse('{"id":"admin-manual/maint-monitor/automatic-service-start","title":"\u670D\u52A1\u81EA\u52A8\u62C9\u8D77","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/admin-manual/maint-monitor/automatic-service-start.md","sourceDirName":"admin-manual/maint-monitor","slug":"/admin-manual/maint-monitor/automatic-service-start","permalink":"/zh-CN/docs/3.0/admin-manual/maint-monitor/automatic-service-start","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"\u670D\u52A1\u81EA\u52A8\u62C9\u8D77","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u5143\u6570\u636E\u8FD0\u7EF4","permalink":"/zh-CN/docs/3.0/admin-manual/maint-monitor/metadata-operation"},"next":{"title":"FE \u9501\u7BA1\u7406","permalink":"/zh-CN/docs/3.0/admin-manual/maint-monitor/frontend-lock-manager"}}'),i=s("785893"),t=s("250065");let o={title:"\u670D\u52A1\u81EA\u52A8\u62C9\u8D77",language:"zh-CN"},l=void 0,a={},d=[{value:"Systemd \u914D\u7F6E Doris \u670D\u52A1",id:"systemd-\u914D\u7F6E-doris-\u670D\u52A1",level:2},{value:"sudo \u6743\u9650\u63A7\u5236",id:"sudo-\u6743\u9650\u63A7\u5236",level:3},{value:"\u914D\u7F6E\u6B65\u9AA4",id:"\u914D\u7F6E\u6B65\u9AA4",level:3},{value:"Supervisor \u914D\u7F6E Doris \u670D\u52A1",id:"supervisor-\u914D\u7F6E-doris-\u670D\u52A1",level:2},{value:"\u914D\u7F6E\u6B65\u9AA4",id:"\u914D\u7F6E\u6B65\u9AA4-1",level:3}];function c(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"\u672C\u6587\u6863\u4E3B\u8981\u4ECB\u7ECD\u5982\u4F55\u914D\u7F6E Doris \u96C6\u7FA4\u7684\u81EA\u52A8\u62C9\u8D77\uFF0C\u4FDD\u8BC1\u751F\u4EA7\u73AF\u5883\u4E2D\u51FA\u73B0\u7279\u6B8A\u60C5\u51B5\u5BFC\u81F4\u670D\u52A1\u5B95\u673A\u540E\u672A\u53CA\u65F6\u62C9\u8D77\u670D\u52A1\u4ECE\u800C\u5F71\u54CD\u5230\u4E1A\u52A1\u7684\u6B63\u5E38\u8FD0\u884C\u3002"}),"\n",(0,i.jsx)(n.p,{children:"Doris \u96C6\u7FA4\u5FC5\u987B\u5B8C\u5168\u642D\u5EFA\u5B8C\u6210\u540E\u518D\u914D\u7F6E FE \u548C BE \u7684\u81EA\u52A8\u62C9\u8D77\u670D\u52A1\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"systemd-\u914D\u7F6E-doris-\u670D\u52A1",children:"Systemd \u914D\u7F6E Doris \u670D\u52A1"}),"\n",(0,i.jsxs)(n.p,{children:["systemd \u5177\u4F53\u4F7F\u7528\u4EE5\u53CA\u53C2\u6570\u89E3\u6790\u53EF\u4EE5\u53C2\u8003",(0,i.jsx)(n.a,{href:"https://systemd.io/",children:"\u8FD9\u91CC"})]}),"\n",(0,i.jsx)(n.h3,{id:"sudo-\u6743\u9650\u63A7\u5236",children:"sudo \u6743\u9650\u63A7\u5236"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u4F7F\u7528 systemd \u63A7\u5236 doris \u670D\u52A1\u65F6\uFF0C\u9700\u8981\u6709 sudo \u6743\u9650\u3002\u4E3A\u4E86\u4FDD\u8BC1\u6700\u5C0F\u7C92\u5EA6\u7684 sudo \u6743\u9650\u5206\u914D\uFF0C\u53EF\u4EE5\u5C06 doris-fe \u4E0E doris-be \u670D\u52A1\u7684 systemd \u63A7\u5236\u6743\u9650\u5206\u914D\u7ED9\u6307\u5B9A\u7684\u975E root \u7528\u6237\u3002\u5728 visudo \u6765\u914D\u7F6E doris-fe \u4E0E doris-be \u7684 systemctl \u7BA1\u7406\u6743\u9650\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Cmnd_Alias DORISCTL=/usr/bin/systemctl start doris-fe,/usr/bin/systemctl stop doris-fe,/usr/bin/systemctl start doris-be,/usr/bin/systemctl stop doris-be\n\n## Allow root to run any commands anywhere\nroot    ALL=(ALL)       ALL\ndoris   ALL=(ALL)       NOPASSWD:DORISCTL\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u914D\u7F6E\u6B65\u9AA4",children:"\u914D\u7F6E\u6B65\u9AA4"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5206\u522B\u5728 fe.conf \u548C be.conf \u4E2D\u6DFB\u52A0 JAVA_HOME \u53D8\u91CF\u914D\u7F6E\uFF0C\u5426\u5219\u4F7F\u7528 systemctl start \u5C06\u65E0\u6CD5\u542F\u52A8\u670D\u52A1"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'echo "JAVA_HOME=your_java_home" >> /home/doris/fe/conf/fe.conf\necho "JAVA_HOME=your_java_home" >> /home/doris/be/conf/be.conf\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u4E0B\u8F7D doris-fe.service \u6587\u4EF6\uFF1A",(0,i.jsx)(n.a,{href:"https://github.com/apache/doris/blob/master/tools/systemd/doris-fe.service",children:"doris-fe.service"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"doris-fe.service \u5177\u4F53\u5185\u5BB9\u5982\u4E0B\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'# Licensed to the Apache Software Foundation (ASF) under one\n# or more contributor license agreements.  See the NOTICE file\n# distributed with this work for additional information\n# regarding copyright ownership.  The ASF licenses this file\n# to you under the Apache License, Version 2.0 (the\n# "License"); you may not use this file except in compliance\n# with the License.  You may obtain a copy of the License at\n#\n#   http://www.apache.org/licenses/LICENSE-2.0\n#\n# Unless required by applicable law or agreed to in writing,\n# software distributed under the License is distributed on an\n# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n# KIND, either express or implied.  See the License for the\n# specific language governing permissions and limitations\n# under the License.\n\n[Unit]\nDescription=Doris FE\nAfter=network-online.target\nWants=network-online.target\n\n[Service]\nType=forking\nUser=root\nGroup=root\nLimitCORE=infinity\nLimitNOFILE=200000\nRestart=on-failure\nRestartSec=30\nStartLimitInterval=120\nStartLimitBurst=3\nKillMode=none\nExecStart=/home/doris/fe/bin/start_fe.sh --daemon \nExecStop=/home/doris/fe/bin/stop_fe.sh\n\n[Install]\nWantedBy=multi-user.target\n'})}),"\n",(0,i.jsxs)(n.admonition,{type:"caution",children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u6CE8\u610F\u4E8B\u9879"})}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"ExecStart\u3001ExecStop \u6839\u636E\u5B9E\u9645\u90E8\u7F72\u7684 fe \u7684\u8DEF\u5F84\u8FDB\u884C\u914D\u7F6E"}),"\n"]})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u4E0B\u8F7D doris-be.service \u6587\u4EF6\uFF1A",(0,i.jsx)(n.a,{href:"https://github.com/apache/doris/blob/master/tools/systemd/doris-be.service",children:"doris-be.service"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"doris-be.service \u5177\u4F53\u5185\u5BB9\u5982\u4E0B\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'# Licensed to the Apache Software Foundation (ASF) under one\n# or more contributor license agreements.  See the NOTICE file\n# distributed with this work for additional information\n# regarding copyright ownership.  The ASF licenses this file\n# to you under the Apache License, Version 2.0 (the\n# "License"); you may not use this file except in compliance\n# with the License.  You may obtain a copy of the License at\n#\n#   http://www.apache.org/licenses/LICENSE-2.0\n#\n# Unless required by applicable law or agreed to in writing,\n# software distributed under the License is distributed on an\n# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n# KIND, either express or implied.  See the License for the\n# specific language governing permissions and limitations\n# under the License.\n\n[Unit]\nDescription=Doris BE\nAfter=network-online.target\nWants=network-online.target\n\n[Service]\nType=forking\nUser=root\nGroup=root\nLimitCORE=infinity\nLimitNOFILE=200000\nRestart=on-failure\nRestartSec=30\nStartLimitInterval=120\nStartLimitBurst=3\nKillMode=none\nExecStart=/home/doris/be/bin/start_be.sh --daemon\nExecStop=/home/doris/be/bin/stop_be.sh\n\n[Install]\nWantedBy=multi-user.target\n'})}),"\n",(0,i.jsxs)(n.admonition,{type:"caution",children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u6CE8\u610F\u4E8B\u9879"})}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"ExecStart\u3001ExecStop \u6839\u636E\u5B9E\u9645\u90E8\u7F72\u7684 be \u7684\u8DEF\u5F84\u8FDB\u884C\u914D\u7F6E"}),"\n"]})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u670D\u52A1\u914D\u7F6E"}),"\n",(0,i.jsx)(n.p,{children:"\u5C06 doris-fe.service\u3001doris-be.service \u4E24\u4E2A\u6587\u4EF6\u653E\u5230 /usr/lib/systemd/system \u76EE\u5F55\u4E0B"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u8BBE\u7F6E\u81EA\u542F\u52A8"}),"\n",(0,i.jsx)(n.p,{children:"\u6DFB\u52A0\u6216\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6\u540E\uFF0C\u9700\u8981\u91CD\u65B0\u52A0\u8F7D"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"systemctl daemon-reload\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u8BBE\u7F6E\u81EA\u542F\u52A8\uFF0C\u5B9E\u8D28\u5C31\u662F\u5728 /etc/systemd/system/multi-user.target.wants/ \u6DFB\u52A0\u670D\u52A1\u6587\u4EF6\u7684\u94FE\u63A5"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"systemctl enable doris-fe\nsystemctl enable doris-be\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u670D\u52A1\u542F\u52A8"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"systemctl start doris-fe\nsystemctl start doris-be\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"supervisor-\u914D\u7F6E-doris-\u670D\u52A1",children:"Supervisor \u914D\u7F6E Doris \u670D\u52A1"}),"\n",(0,i.jsxs)(n.p,{children:["Supervisor \u5177\u4F53\u4F7F\u7528\u4EE5\u53CA\u53C2\u6570\u89E3\u6790\u53EF\u4EE5\u53C2\u8003",(0,i.jsx)(n.a,{href:"http://supervisord.org/",children:"\u8FD9\u91CC"})]}),"\n",(0,i.jsxs)(n.p,{children:["Supervisor \u914D\u7F6E\u81EA\u52A8\u62C9\u8D77\u53EF\u4EE5\u4F7F\u7528 yum \u547D\u4EE4\u76F4\u63A5\u5B89\u88C5\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7 pip \u624B\u5DE5\u5B89\u88C5\uFF0Cpip \u624B\u5DE5\u5B89\u88C5\u6D41\u7A0B\u6BD4\u8F83\u590D\u6742\uFF0C\u53EA\u5C55\u793A yum \u65B9\u5F0F\u90E8\u7F72\uFF0C\u624B\u5DE5\u90E8\u7F72\u8BF7\u53C2\u8003",(0,i.jsx)(n.a,{href:"http://supervisord.org/installing.html",children:"\u8FD9\u91CC"}),"\u8FDB\u884C\u5B89\u88C5\u90E8\u7F72\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"\u914D\u7F6E\u6B65\u9AA4-1",children:"\u914D\u7F6E\u6B65\u9AA4"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"yum \u5B89\u88C5 supervisor"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"yum install epel-release\nyum install -y supervisor\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u542F\u52A8\u670D\u52A1\u5E76\u67E5\u770B\u72B6\u6001"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"systemctl enable supervisord # \u5F00\u673A\u81EA\u542F\u52A8\nsystemctl start supervisord # \u542F\u52A8 supervisord \u670D\u52A1\nsystemctl status supervisord # \u67E5\u770B supervisord \u670D\u52A1\u72B6\u6001\nps -ef|grep supervisord # \u67E5\u770B\u662F\u5426\u5B58\u5728 supervisord \u8FDB\u7A0B\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u914D\u7F6E BE \u8FDB\u7A0B\u7BA1\u7406"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'\u4FEE\u6539 start_be.sh \u811A\u672C\uFF0C\u53BB\u6389\u6700\u540E\u7684 & \u7B26\u53F7\n\nvim /path/doris/be/bin/start_be.sh\n\u5C06 nohup $LIMIT ${DORIS_HOME}/lib/palo_be "$@" >> $LOG_DIR/be.out 2>&1 </dev/null &\n\u4FEE\u6539\u4E3A nohup $LIMIT ${DORIS_HOME}/lib/palo_be "$@" >> $LOG_DIR/be.out 2>&1 </dev/null\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u521B\u5EFA BE \u7684 supervisor \u8FDB\u7A0B\u7BA1\u7406\u914D\u7F6E\u6587\u4EF6"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"vim /etc/supervisord.d/doris-be.ini\n\n[program:doris_be]      \nprocess_name=%(program_name)s      \ndirectory=/path/doris/be/be\ncommand=sh /path/doris/be/bin/start_be.sh\nautostart=true\nautorestart=true\nuser=root\nnumprocs=1\nstartretries=3\nstopasgroup=true\nkillasgroup=true\nstartsecs=5\n#redirect_stderr = true\n#stdout_logfile_maxbytes = 20MB\n#stdout_logfile_backups = 10\n#stdout_logfile=/var/log/supervisor-palo_be.log\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u914D\u7F6E FE \u8FDB\u7A0B\u7BA1\u7406"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'\u4FEE\u6539 start_fe.sh \u811A\u672C\uFF0C\u53BB\u6389\u6700\u540E\u7684 & \u7B26\u53F7\n\nvim /path/doris/fe/bin/start_fe.sh \n\u5C06 nohup $LIMIT $JAVA $final_java_opt org.apache.doris.PaloFe ${HELPER} "$@" >> $LOG_DIR/fe.out 2>&1 </dev/null &\n\u4FEE\u6539\u4E3A nohup $LIMIT $JAVA $final_java_opt org.apache.doris.PaloFe ${HELPER} "$@" >> $LOG_DIR/fe.out 2>&1 </dev/null\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u521B\u5EFA FE \u7684 supervisor \u8FDB\u7A0B\u7BA1\u7406\u914D\u7F6E\u6587\u4EF6"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'vim /etc/supervisord.d/doris-fe.ini\n\n[program:PaloFe]\nenvironment = JAVA_HOME="/path/jdk8"\nprocess_name=PaloFe\ndirectory=/path/doris/fe\ncommand=sh /path/doris/fe/bin/start_fe.sh\nautostart=true\nautorestart=true\nuser=root\nnumprocs=1\nstartretries=3\nstopasgroup=true\nkillasgroup=true\nstartsecs=10\n#redirect_stderr=true\n#stdout_logfile_maxbytes=20MB\n#stdout_logfile_backups=10\n#stdout_logfile=/var/log/supervisor-PaloFe.log\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u914D\u7F6E Broker \u8FDB\u7A0B\u7BA1\u7406"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'\u4FEE\u6539 start_broker.sh \u811A\u672C\uFF0C\u53BB\u6389\u6700\u540E\u7684 & \u7B26\u53F7\n\nvim /path/apache_hdfs_broker/bin/start_broker.sh\n\u5C06 nohup $LIMIT $JAVA $JAVA_OPTS org.apache.doris.broker.hdfs.BrokerBootstrap "$@" >> $BROKER_LOG_DIR/apache_hdfs_broker.out 2>&1 </dev/null &\n\u4FEE\u6539\u4E3A nohup $LIMIT $JAVA $JAVA_OPTS org.apache.doris.broker.hdfs.BrokerBootstrap "$@" >> $BROKER_LOG_DIR/apache_hdfs_broker.out 2>&1 </dev/null\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u521B\u5EFA Broker \u7684 supervisor \u8FDB\u7A0B\u7BA1\u7406\u914D\u7F6E\u6587\u4EF6"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'vim /etc/supervisord.d/doris-broker.ini\n\n[program:BrokerBootstrap]\nenvironment = JAVA_HOME="/usr/local/java"\nprocess_name=%(program_name)s\ndirectory=/path/apache_hdfs_broker\ncommand=sh /path/apache_hdfs_broker/bin/start_broker.sh\nautostart=true\nautorestart=true\nuser=root\nnumprocs=1\nstartretries=3\nstopasgroup=true\nkillasgroup=true\nstartsecs=5\n#redirect_stderr=true\n#stdout_logfile_maxbytes=20MB\n#stdout_logfile_backups=10\n#stdout_logfile=/var/log/supervisor-BrokerBootstrap.log\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u9996\u5148\u786E\u5B9A Doris \u670D\u52A1\u662F\u505C\u6B62\u72B6\u6001\uFF0C\u7136\u540E\u4F7F\u7528 supervisor \u5C06 Doris \u81EA\u52A8\u62C9\u8D77\uFF0C\u7136\u540E\u786E\u5B9A\u8FDB\u7A0B\u662F\u5426\u6B63\u5E38\u542F\u52A8"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"supervisorctl reload # \u91CD\u65B0\u52A0\u8F7D Supervisor \u4E2D\u7684\u6240\u6709\u914D\u7F6E\u6587\u4EF6\nsupervisorctl status # \u67E5\u770B supervisor \u72B6\u6001\uFF0C\u9A8C\u8BC1 Doris \u670D\u52A1\u8FDB\u7A0B\u662F\u5426\u6B63\u5E38\u542F\u52A8\n\n\u5176\u4ED6\u547D\u4EE4 : \nsupervisorctl start all # supervisorctl start \u53EF\u4EE5\u5F00\u542F\u8FDB\u7A0B\nsupervisorctl stop doris-be # \u901A\u8FC7 supervisorctl stop\uFF0C\u505C\u6B62\u8FDB\u7A0B\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{type:"caution",children:[(0,i.jsx)(n.p,{children:"\u6CE8\u610F\u4E8B\u9879\uFF1A"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5982\u679C\u4F7F\u7528 yum \u5B89\u88C5\u7684 supervisor \u542F\u52A8\u62A5\u9519 :  pkg_resources.DistributionNotFound: The 'supervisor==3.4.0' distribution was not found"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"\u8FD9\u4E2A\u662F python \u7248\u672C\u4E0D\u517C\u5BB9\u95EE\u9898\uFF0C\u901A\u8FC7 yum \u547D\u4EE4\u76F4\u63A5\u5B89\u88C5\u7684 supervisor \u53EA\u652F\u6301 python2 \u7248\u672C\uFF0C\u6240\u4EE5\u9700\u8981\u5C06 /usr/bin/supervisord \u548C /usr/bin/supervisorctl \u4E2D\u6587\u4EF6\u5185\u5BB9\u5F00\u5934 #!/usr/bin/python \u6539\u4E3A #!/usr/bin/python2\uFF0C\u524D\u63D0\u662F\u8981\u88C5 python2 \u7248\u672C\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5982\u679C\u914D\u7F6E\u4E86 supervisor \u5BF9 Doris \u8FDB\u7A0B\u8FDB\u884C\u81EA\u52A8\u62C9\u8D77\uFF0C\u6B64\u65F6\u5982\u679C Doris \u51FA\u73B0\u975E\u6B63\u5E38\u56E0\u7D20\u5BFC\u81F4 BE \u8282\u70B9\u5B95\u673A\uFF0C\u90A3\u4E48\u6B64\u65F6\u672C\u6765\u5E94\u8BE5\u8F93\u51FA\u5230 be.out \u4E2D\u7684\u9519\u8BEF\u5806\u6808\u4FE1\u606F\u4F1A\u88AB supervisor \u62E6\u622A\uFF0C\u9700\u8981\u5728 supervisor \u7684 log \u4E2D\u67E5\u627E\u6765\u8FDB\u4E00\u6B65\u5206\u6790\u3002"}),"\n"]}),"\n"]})]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return o}});var r=s(667294);let i={},t=r.createContext(i);function o(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);