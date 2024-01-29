"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[4608],{15343:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>g,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var s=a(85893),o=a(11151);const t={title:"Basics to Package Management",summary:"Basics to Package Management"},r="Basics to Package Management",l={id:"user/package-management/basics",title:"Basics to Package Management",description:"Solus uses the eopkg package management system to deliver software to the end-user.",source:"@site/docs/user/package-management/basics.md",sourceDirName:"user/package-management",slug:"/user/package-management/basics",permalink:"/docs/user/package-management/basics",draft:!1,unlisted:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/user/package-management/basics.md",tags:[],version:"current",lastUpdatedAt:1706538858,formattedLastUpdatedAt:"Jan 29, 2024",frontMatter:{title:"Basics to Package Management",summary:"Basics to Package Management"},sidebar:"userSidebar",previous:{title:"Package Management",permalink:"/docs/category/package-management"},next:{title:"History and Software Rollback",permalink:"/docs/user/package-management/history-and-rollback"}},i={},c=[{value:"Installing Software",id:"installing-software",level:2},{value:"Reinstalling Software",id:"reinstalling-software",level:2},{value:"Uninstalling Software",id:"uninstalling-software",level:2},{value:"Get Information on Software",id:"get-information-on-software",level:2},{value:"Updating",id:"updating",level:2},{value:"Searching",id:"searching",level:2},{value:"Base Development Tools",id:"base-development-tools",level:2}];function d(e){const n={br:"br",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"basics-to-package-management",children:"Basics to Package Management"}),"\n",(0,s.jsxs)(n.p,{children:["Solus uses the eopkg package management system to deliver software to the end-user.",(0,s.jsx)(n.br,{}),"\n","Below are some basic commands for using eopkg."]}),"\n",(0,s.jsx)(n.h2,{id:"installing-software",children:"Installing Software"}),"\n",(0,s.jsx)(n.p,{children:"You can install one or more packages by using:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo eopkg install packagename\n"})}),"\n",(0,s.jsx)(n.p,{children:"For example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo eopkg install gnome-documents gnome-music\n"})}),"\n",(0,s.jsx)(n.h2,{id:"reinstalling-software",children:"Reinstalling Software"}),"\n",(0,s.jsx)(n.p,{children:"You can reinstall one or more packages by using:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo eopkg install --reinstall packagename\n"})}),"\n",(0,s.jsx)(n.p,{children:"For example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo eopkg install --reinstall gnome-documents gnome-music\n"})}),"\n",(0,s.jsx)(n.h2,{id:"uninstalling-software",children:"Uninstalling Software"}),"\n",(0,s.jsx)(n.p,{children:"You can uninstall one or more packages by using:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo eopkg remove packagename\n"})}),"\n",(0,s.jsx)(n.p,{children:"For example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo eopkg remove gnome-documents gnome-music\n"})}),"\n",(0,s.jsx)(n.h2,{id:"get-information-on-software",children:"Get Information on Software"}),"\n",(0,s.jsx)(n.p,{children:"You can get information on software, such as its description, version, installation size, and more, by using"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"eopkg info packagename\n"})}),"\n",(0,s.jsx)(n.p,{children:"For example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"eopkg info gnome-documents\n"})}),"\n",(0,s.jsx)(n.h2,{id:"updating",children:"Updating"}),"\n",(0,s.jsx)(n.p,{children:"You can update your system by using:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo eopkg upgrade\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If you want to ",(0,s.jsx)(n.strong,{children:"only"})," update a specific piece of software on your system, you can specify is like below:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo eopkg upgrade firefox\n"})}),"\n",(0,s.jsx)(n.h2,{id:"searching",children:"Searching"}),"\n",(0,s.jsx)(n.p,{children:"You can search the software selection Solus provides by using:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"eopkg search term\n"})}),"\n",(0,s.jsx)(n.p,{children:"For example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"eopkg search documents\n"})}),"\n",(0,s.jsx)(n.p,{children:"Notice that you don't need to search for a specific software name, although you can do that. We search summaries and software names by default."}),"\n",(0,s.jsx)(n.h2,{id:"base-development-tools",children:"Base Development Tools"}),"\n",(0,s.jsx)(n.p,{children:"If you are wanting to compile software under Solus, we recommend installing our system.devel component by running the following:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo eopkg install -c system.devel\n"})}),"\n",(0,s.jsx)(n.p,{children:"This will provide items such as clang, gcc, make, a multitude of devel sub-packages, and more. Our system.devel is similar to packages on other operating systems, such as Debian's build-essentials."})]})}function g(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>l,a:()=>r});var s=a(67294);const o={},t=s.createContext(o);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);