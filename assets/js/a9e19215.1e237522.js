"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([["5147"],{72459:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>a,default:()=>p,assets:()=>l,toc:()=>d,frontMatter:()=>i});var r=JSON.parse('{"id":"user/software/networking/xrdp","title":"XRDP","description":"xrdp provides a graphical login to remote machines using Microsoft Remote Desktop Protocol (RDP). xrdp accepts connections from a variety of RDP clients: FreeRDP, rdesktop, NeutrinoRDP and Microsoft Remote Desktop Client (for Windows, Mac OS, iOS and Android).","source":"@site/docs/user/software/networking/xrdp.md","sourceDirName":"user/software/networking","slug":"/user/software/networking/xrdp","permalink":"/docs/user/software/networking/xrdp","draft":false,"unlisted":false,"editUrl":"https://github.com/getsolus/help-center-docs/tree/master/docs/user/software/networking/xrdp.md","tags":[],"version":"current","lastUpdatedAt":1733757592000,"frontMatter":{"title":"XRDP","summary":"User guide for XRDP on Solus"},"sidebar":"userSidebar","previous":{"title":"Wireshark","permalink":"/docs/user/software/networking/wireshark"},"next":{"title":"Sound","permalink":"/docs/user/software/sound/"}}'),o=n("85893"),s=n("50065");let i={title:"XRDP",summary:"User guide for XRDP on Solus"},a="XRDP",l={},d=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Start / Stop xrdp",id:"start--stop-xrdp",level:2}];function c(e){let t={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"xrdp",children:"XRDP"})}),"\n",(0,o.jsx)(t.p,{children:"xrdp provides a graphical login to remote machines using Microsoft Remote Desktop Protocol (RDP). xrdp accepts connections from a variety of RDP clients: FreeRDP, rdesktop, NeutrinoRDP and Microsoft Remote Desktop Client (for Windows, Mac OS, iOS and Android)."}),"\n",(0,o.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(t.p,{children:"Solus has an xrdp integration package for each Desktop Environment that will install the correct configuration for that DE. Install the respective package for your DE."}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.code,{children:"xrdp-budgie-integration"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.code,{children:"xrdp-gnome-integration"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.code,{children:"xrdp-mate-integration"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.code,{children:"xrdp-plasma-integration"})}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["This package will also install the ",(0,o.jsx)(t.code,{children:"xrdp"})," and ",(0,o.jsx)(t.code,{children:"xorgxrdp"})," packages."]}),"\n",(0,o.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,o.jsx)(t.p,{children:"The following file needs to be created, if it doesn't already exist, with the following contents."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"cat /etc/X11/Xwrapper.config\n\nallowed_users=anybody\n"})}),"\n",(0,o.jsx)(t.h2,{id:"start--stop-xrdp",children:"Start / Stop xrdp"}),"\n",(0,o.jsx)(t.p,{children:"Please note that xrdp does NOT run on system boot by default. It needs to be manually started/configured to start automatically:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"# Start xrdp manually\nsudo systemctl start xrdp\n\n# Configure xrdp to start automatically on each boot and immediately start the service\nsudo systemctl enable --now xrdp\n\n# Check whether xrdp is running\nsudo systemctl status xrdp\n\n# Restart xrdp manually\nsudo systemctl restart xrdp\n\n# Stop xrdp manually\nsudo systemctl stop xrdp\n\n# Configure xrdp to not start automatically on each boot and immediately stop the service\nsudo systemctl disable --now xrdp\n"})})]})}function p(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return i}});var r=n(67294);let o={},s=r.createContext(o);function i(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);