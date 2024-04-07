"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[6990],{93791:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var t=s(85893),a=s(11151);const n={title:"Wireshark",summary:"A quick start guide to Wireshark on Solus"},o="Wireshark",i={id:"user/software/networking/wireshark",title:"Wireshark",description:"Wireshark is a widely-used network protocol analyzer that lets you see what\u2019s happening on a network at a microscopic level.",source:"@site/docs/user/software/networking/wireshark.md",sourceDirName:"user/software/networking",slug:"/user/software/networking/wireshark",permalink:"/docs/user/software/networking/wireshark",draft:!1,unlisted:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/user/software/networking/wireshark.md",tags:[],version:"current",lastUpdatedAt:1712526756e3,frontMatter:{title:"Wireshark",summary:"A quick start guide to Wireshark on Solus"},sidebar:"userSidebar",previous:{title:"TigerVNC",permalink:"/docs/user/software/networking/tigervnc"},next:{title:"XRDP",permalink:"/docs/user/software/networking/xrdp"}},c={},l=[{value:"Installation",id:"installation",level:2},{value:"Use wireshark as a non-root user",id:"use-wireshark-as-a-non-root-user",level:2},{value:"Usage",id:"usage",level:2}];function h(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"wireshark",children:"Wireshark"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"https://www.wireshark.org/",children:"Wireshark"})," is a widely-used network protocol analyzer that lets you see what\u2019s happening on a network at a microscopic level."]}),"\n",(0,t.jsx)(r.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(r.p,{children:"Wireshark can be installed either from the Software Center or via terminal:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"sudo eopkg it wireshark\n"})}),"\n",(0,t.jsx)(r.h2,{id:"use-wireshark-as-a-non-root-user",children:"Use wireshark as a non-root user"}),"\n",(0,t.jsx)(r.p,{children:"For security reasons, it is strongly unadvised to run Wireshark as root. To capture packets as non-root user, execute these commands:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"sudo gpasswd -a $USER wireshark\nsudo setcap cap_dac_override,cap_net_admin,cap_net_raw+eip /usr/bin/dumpcap\n"})}),"\n",(0,t.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(r.p,{children:["Wireshark ",(0,t.jsx)(r.a,{href:"https://www.wireshark.org/docs/wsug_html_chunked/",children:"User\u2019s Guide"})," and ",(0,t.jsx)(r.a,{href:"https://www.wireshark.org/docs/",children:"learning material"})," are available on ",(0,t.jsx)(r.a,{href:"https://www.wireshark.org",children:"https://www.wireshark.org"}),"."]})]})}function u(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},11151:(e,r,s)=>{s.d(r,{Z:()=>i,a:()=>o});var t=s(67294);const a={},n=t.createContext(a);function o(e){const r=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(n.Provider,{value:r},e.children)}}}]);