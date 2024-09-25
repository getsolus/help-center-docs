"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[6114],{47124:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var s=a(85893),n=a(11151);const o={title:"Testing a Package",summary:"Testing a Package",sidebar_position:5},i="Testing a Package",r={id:"packaging/testing-a-package",title:"Testing a Package",description:"After building a package, it must be tested against the unstable repository before a pull request can be submitted. Each pull request requires you to explain how you tested the package to make sure things work as expected.",source:"@site/docs/packaging/testing-a-package.md",sourceDirName:"packaging",slug:"/packaging/testing-a-package",permalink:"/docs/packaging/testing-a-package",draft:!1,unlisted:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/packaging/testing-a-package.md",tags:[],version:"current",lastUpdatedAt:1727275172e3,sidebarPosition:5,frontMatter:{title:"Testing a Package",summary:"Testing a Package",sidebar_position:5},sidebar:"packagingSidebar",previous:{title:"Updating an Existing Package",permalink:"/docs/packaging/updating-an-existing-package"},next:{title:"Submitting a Pull Request for Review",permalink:"/docs/packaging/submitting-a-pull-request"}},l={},c=[{value:"Install the <code>.eopkg</code> files",id:"install-the-eopkg-files",level:2},{value:"For updated packages: Return to the repository version",id:"for-updated-packages-return-to-the-repository-version",level:2},{value:"Remove the <code>.eopkg</code> files",id:"remove-the-eopkg-files",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"testing-a-package",children:"Testing a Package"})}),"\n",(0,s.jsx)(t.p,{children:"After building a package, it must be tested against the unstable repository before a pull request can be submitted. Each pull request requires you to explain how you tested the package to make sure things work as expected."}),"\n",(0,s.jsxs)(t.p,{children:["You will use the ",(0,s.jsx)(t.code,{children:".eopkg"})," file(s) created by the build process for testing."]}),"\n",(0,s.jsxs)(t.h2,{id:"install-the-eopkg-files",children:["Install the ",(0,s.jsx)(t.code,{children:".eopkg"})," files"]}),"\n",(0,s.jsxs)(t.p,{children:["To install your new package, run the following command in the directory where you built the package. Include ",(0,s.jsx)(t.strong,{children:"all"})," ",(0,s.jsx)(t.code,{children:".eopkg"})," files that were built."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"sudo eopkg it *.eopkg\n"})}),"\n",(0,s.jsx)(t.p,{children:"Testing need not be very complicated. The goal is to ensure the package will reliably work for our users. Testing effort will depend on how complex the software is. At minimum, you want to ensure the application launches, and performs basic functionality as expected."}),"\n",(0,s.jsx)(t.p,{children:"For example, if you were updating a text editor, you would want to make sure you can open, create and save files. If you know of issues the package has had in the past, it's a good idea to test that as well to make sure there are no regressions. There are plenty of historical pull requests to review if you want more detail."}),"\n",(0,s.jsx)(t.h2,{id:"for-updated-packages-return-to-the-repository-version",children:"For updated packages: Return to the repository version"}),"\n",(0,s.jsxs)(t.p,{children:["It is a good idea to uninstall the package you built, and return to the repository version, once you are done testing. To do this, run the following command on the main application. For example, if you just built and tested ",(0,s.jsx)(t.code,{children:"tree"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"sudo eopkg it --reinstall tree\n"})}),"\n",(0,s.jsxs)(t.h2,{id:"remove-the-eopkg-files",children:["Remove the ",(0,s.jsx)(t.code,{children:".eopkg"})," files"]}),"\n",(0,s.jsxs)(t.p,{children:["Before you can submit your pull request, you need to remove the ",(0,s.jsx)(t.code,{children:".eopkg"})," files. All repository packages are built by a dedicated build server from the source files provided in your pull request."]}),"\n",(0,s.jsx)(t.p,{children:"To remove these files, run:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"go-task clean\n"})})]})}function u(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>r,a:()=>i});var s=a(67294);const n={},o=s.createContext(n);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);