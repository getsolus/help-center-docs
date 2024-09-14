"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[8092],{98232:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>i,contentTitle:()=>d,default:()=>h,frontMatter:()=>n,metadata:()=>a,toc:()=>c});var t=o(85893),r=o(11151);const n={title:"Repository Management",summary:"Repository Management"},d="Repository management",a={id:"user/package-management/repo-management",title:"Repository Management",description:"Solus offers two main software sources: stable (shannon) and unstable. The eopkg package manager can use multiple sources on your system, which is helpful if you use a source provided by another vendor.",source:"@site/docs/user/package-management/repo-management.md",sourceDirName:"user/package-management",slug:"/user/package-management/repo-management",permalink:"/docs/user/package-management/repo-management",draft:!1,unlisted:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/user/package-management/repo-management.md",tags:[],version:"current",lastUpdatedAt:1726277396e3,frontMatter:{title:"Repository Management",summary:"Repository Management"},sidebar:"userSidebar",previous:{title:"History and Software Rollback",permalink:"/docs/user/package-management/history-and-rollback"},next:{title:"Privacy Policy",permalink:"/docs/user/privacy"}},i={},c=[{value:"Official repositories",id:"official-repositories",level:2},{value:"Repository management commands",id:"repository-management-commands",level:2}];function l(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"repository-management",children:"Repository management"}),"\n",(0,t.jsxs)(s.p,{children:["Solus offers two main software sources: stable (shannon) and unstable. The ",(0,t.jsx)(s.code,{children:"eopkg"})," package manager can use multiple sources on your system, which is helpful if you use a source provided by another vendor."]}),"\n",(0,t.jsx)(s.h2,{id:"official-repositories",children:"Official repositories"}),"\n",(0,t.jsx)(s.p,{children:"The official Solus repositories are:"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Repository"}),(0,t.jsx)(s.th,{children:"URL"}),(0,t.jsx)(s.th,{children:"Notes"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Stable (shannon)"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"https://cdn.getsol.us/repo/shannon/eopkg-index.xml.xz"})}),(0,t.jsx)(s.td,{children:"Default software source."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Unstable"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"https://cdn.getsol.us/repo/unstable/eopkg-index.xml.xz"})}),(0,t.jsx)(s.td,{children:"Only use this source if build Solus packages or you test new software before it moves to the stable source."})]})]})]}),"\n",(0,t.jsxs)(s.admonition,{type:"danger",children:[(0,t.jsxs)(s.p,{children:["Updating your system while using the ",(0,t.jsx)(s.strong,{children:"unstable"})," source might be risky."]}),(0,t.jsxs)(s.p,{children:["Before updating, check the ",(0,t.jsx)(s.a,{href:"https://matrix.to/#/#solus-packaging:matrix.org",children:"#solus-packaging"})," Matrix room."]})]}),"\n",(0,t.jsx)(s.h2,{id:"repository-management-commands",children:"Repository management commands"}),"\n",(0,t.jsxs)(s.p,{children:["The following table lists the ",(0,t.jsx)(s.code,{children:"eopkg"})," commands you can use to manage your software sources."]}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Action"}),(0,t.jsx)(s.th,{children:"Command"}),(0,t.jsx)(s.th,{children:"Example"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Add a repository"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"sudo eopkg add-repo NAME URL"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"sudo eopkg add-repo Example https://example.com/repo/eopkg-index.xml.xz"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Remove a repository"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"sudo eopkg remove-repo NAME"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"sudo eopkg remove-repo Example"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Enable a repository"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"sudo eopkg enable-repo NAME"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"sudo eopkg enable-repo Example"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Disable a repository"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"sudo eopkg disable-repo NAME"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"sudo eopkg disable-repo Example"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Update a repository"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"sudo eopkg update-repo NAME"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"sudo eopkg update-repo Example"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Update all repositories"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"sudo eopkg update-repo"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"sudo eopkg update-repo"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"List repositories added to your system"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"eopkg list-repo"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"eopkg list-repo"})})]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,s,o)=>{o.d(s,{Z:()=>a,a:()=>d});var t=o(67294);const r={},n=t.createContext(r);function d(e){const s=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(n.Provider,{value:s},e.children)}}}]);