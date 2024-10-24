"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[984],{17789:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var o=r(85893),a=r(11151);const s={title:"DroidCam",summary:"Quick Start guide to DroidCam on Solus"},t="DroidCam",i={id:"user/software/camera/droidcam",title:"DroidCam",description:"DroidCam turns your phone or tablet into a webcam for your computer. You can use it with video conferencing programs like Zoom, MS Teams, and Skype.",source:"@site/docs/user/software/camera/droidcam.md",sourceDirName:"user/software/camera",slug:"/user/software/camera/droidcam",permalink:"/docs/user/software/camera/droidcam",draft:!1,unlisted:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/user/software/camera/droidcam.md",tags:[],version:"current",lastUpdatedAt:172973503e4,frontMatter:{title:"DroidCam",summary:"Quick Start guide to DroidCam on Solus"},sidebar:"userSidebar",previous:{title:"Camera",permalink:"/docs/category/camera"},next:{title:"Command Line",permalink:"/docs/user/software/command-line/"}},l={},c=[{value:"Before installation",id:"before-installation",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"droidcam",children:"DroidCam"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://www.dev47apps.com/",children:"DroidCam"})," turns your phone or tablet into a webcam for your computer. You can use it with video conferencing programs like Zoom, MS Teams, and Skype."]}),"\n",(0,o.jsx)(n.h2,{id:"before-installation",children:"Before installation"}),"\n",(0,o.jsxs)(n.p,{children:["DroidCam relies on the v4l2loopback kernel module. So you need to install ",(0,o.jsx)(n.code,{children:"v4l2loopback"})," or ",(0,o.jsx)(n.code,{children:"v4l2loopback-current"})," depending of which kernel is installed on your computer. To find out which kernel is installed, run:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"uname -r\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This should return a version which ends in ",(0,o.jsx)(n.code,{children:".current"})," or ",(0,o.jsx)(n.code,{children:".lts"}),"."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:['If you are running the "current" kernel, install ',(0,o.jsx)(n.code,{children:"v4l2loopback-current"}),":"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo eopkg install v4l2loopback-current\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:['If you are running the "lts" kernel, install ',(0,o.jsx)(n.code,{children:"v4l2loopback"}),":"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo eopkg install v4l2loopback\n"})}),"\n",(0,o.jsx)(n.p,{children:"After the kernel module is installed, continue to installation steps."}),"\n",(0,o.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(n.p,{children:"DroidCam can be installed from Software Center or via terminal :"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo eopkg it droidcam\n"})}),"\n",(0,o.jsx)(n.p,{children:"Once DroidCam is installed, reboot your system. Now DroidCam is ready to use."}),"\n",(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(n.p,{children:["To start pairing your phone or tablet with your computer, you can follow steps provided by this ",(0,o.jsx)(n.a,{href:"https://www.dev47apps.com/droidcam/connect/",children:"guide"})," from the DroidCam developer."]})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>t});var o=r(67294);const a={},s=o.createContext(a);function t(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);