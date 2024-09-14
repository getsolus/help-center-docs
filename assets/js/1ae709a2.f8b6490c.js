"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[355],{37718:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var t=n(85893),o=n(11151);const r={title:"History and Software Rollback",summary:"History and Software Rollback"},a="History and software rollback in Solus",i={id:"user/package-management/history-and-rollback",title:"History and Software Rollback",description:"Solus offers a feature to view your history of software changes and revert your system to previous versions.",source:"@site/docs/user/package-management/history-and-rollback.md",sourceDirName:"user/package-management",slug:"/user/package-management/history-and-rollback",permalink:"/docs/user/package-management/history-and-rollback",draft:!1,unlisted:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/user/package-management/history-and-rollback.md",tags:[],version:"current",lastUpdatedAt:1726277396e3,frontMatter:{title:"History and Software Rollback",summary:"History and Software Rollback"},sidebar:"userSidebar",previous:{title:"Basics to Package Management",permalink:"/docs/user/package-management/basics"},next:{title:"Repository Management",permalink:"/docs/user/package-management/repo-management"}},l={},c=[{value:"History of software changes",id:"history-of-software-changes",level:2},{value:"Rollback",id:"rollback",level:2}];function h(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"history-and-software-rollback-in-solus",children:"History and software rollback in Solus"}),"\n",(0,t.jsx)(s.p,{children:"Solus offers a feature to view your history of software changes and revert your system to previous versions."}),"\n",(0,t.jsx)(s.p,{children:"You can use this feature if you have issues after installing packages or system updates, and you need to return to a working state."}),"\n",(0,t.jsx)(s.h2,{id:"history-of-software-changes",children:"History of software changes"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"To see your history of software changes, open a terminal and execute:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"eopkg history\n"})}),"\n",(0,t.jsx)(s.p,{children:"The terminal displays a list of all the software changes in your system."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"eopkg history output",src:n(66082).Z+"",width:"523",height:"617"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"rollback",children:"Rollback"}),"\n",(0,t.jsxs)(s.admonition,{title:"Important",type:"warning",children:[(0,t.jsx)(s.p,{children:"Reverting software changes works if either:"}),(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"The Solus repository has the version of the package you need, or"}),"\n",(0,t.jsx)(s.li,{children:"You have a local copy of the package."}),"\n"]})]}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Disable any ",(0,t.jsx)(s.a,{href:"https://help.getsol.us/docs/packaging/advanced-config/local-repository#disabling-the-local-solbuild-repository-in-eopkg",children:"local repository"})," you have."]}),"\n",(0,t.jsx)(s.p,{children:"Local repositories can cause errors during rollbacks."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Open a terminal."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"View the history of software changes:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"eopkg history\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Note the number of the most recent software change."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Go back to the desired state:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"sudo eopkg history -t NUMBER\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Replace ",(0,t.jsx)(s.code,{children:"NUMBER"})," with a number lower than the latest software change."]}),"\n",(0,t.jsx)(s.p,{children:"For example, if you want to revert operation 100, use 99 as the number."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"After reverting to the desired state, verify your system status. You might need to restart your system to see some of the changes."})]})}function d(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},66082:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/eopkg-history-output-628a9b5bff409bebd31bec29c3d94e37.png"},11151:(e,s,n)=>{n.d(s,{Z:()=>i,a:()=>a});var t=n(67294);const o={},r=t.createContext(o);function a(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);