"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[333],{35984:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=n(85893),o=n(11151);const s={title:"XRDP",summary:"User guide for XRDP on Solus"},i="XRDP",a={id:"user/software/networking/xrdp",title:"XRDP",description:"xrdp provides a graphical login to remote machines using Microsoft Remote Desktop Protocol (RDP). xrdp accepts connections from a variety of RDP clients: FreeRDP, rdesktop, NeutrinoRDP and Microsoft Remote Desktop Client (for Windows, Mac OS, iOS and Android).",source:"@site/docs/user/software/networking/xrdp.md",sourceDirName:"user/software/networking",slug:"/user/software/networking/xrdp",permalink:"/docs/user/software/networking/xrdp",draft:!1,unlisted:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/user/software/networking/xrdp.md",tags:[],version:"current",lastUpdatedAt:171607565e4,frontMatter:{title:"XRDP",summary:"User guide for XRDP on Solus"},sidebar:"userSidebar",previous:{title:"Wireshark",permalink:"/docs/user/software/networking/wireshark"},next:{title:"Sound",permalink:"/docs/user/software/sound/"}},d={},l=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Start / Stop xrdp",id:"start--stop-xrdp",level:2}];function c(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"xrdp",children:"XRDP"}),"\n",(0,r.jsx)(t.p,{children:"xrdp provides a graphical login to remote machines using Microsoft Remote Desktop Protocol (RDP). xrdp accepts connections from a variety of RDP clients: FreeRDP, rdesktop, NeutrinoRDP and Microsoft Remote Desktop Client (for Windows, Mac OS, iOS and Android)."}),"\n",(0,r.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(t.p,{children:"Solus has an xrdp integration package for each Desktop Environment that will install the correct configuration for that DE. Install the respective package for your DE."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"xrdp-budgie-integration"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"xrdp-gnome-integration"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"xrdp-mate-integration"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"xrdp-plasma-integration"})}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["This package will also install the ",(0,r.jsx)(t.code,{children:"xrdp"})," and ",(0,r.jsx)(t.code,{children:"xorgxrdp"})," packages."]}),"\n",(0,r.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(t.p,{children:"The following file needs to be created, if it doesn't already exist, with the following contents."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"cat /etc/X11/Xwrapper.config\n\nallowed_users=anybody\n"})}),"\n",(0,r.jsx)(t.h2,{id:"start--stop-xrdp",children:"Start / Stop xrdp"}),"\n",(0,r.jsx)(t.p,{children:"Please note that xrdp does NOT run on system boot by default. It needs to be manually started/configured to start automatically:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"# Start xrdp manually\nsudo systemctl start xrdp\n\n# Configure xrdp to start automatically on each boot and immediately start the service\nsudo systemctl enable --now xrdp\n\n# Check whether xrdp is running\nsudo systemctl status xrdp\n\n# Restart xrdp manually\nsudo systemctl restart xrdp\n\n# Stop xrdp manually\nsudo systemctl stop xrdp\n\n# Configure xrdp to not start automatically on each boot and immediately stop the service\nsudo systemctl disable --now xrdp\n"})})]})}function p(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>i});var r=n(67294);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);