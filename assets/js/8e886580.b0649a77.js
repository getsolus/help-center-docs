"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[4978],{71137:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=s(85893),o=s(11151);const r={title:"Rust",summary:"A quick guide to getting set up for Rust development on Solus"},i="Rust",l={id:"user/software/development/rust",title:"Rust",description:"There are two ways to install Rust. This article explains how they differ and which one should be used, according to users' needs.",source:"@site/docs/user/software/development/rust.md",sourceDirName:"user/software/development",slug:"/user/software/development/rust",permalink:"/docs/user/software/development/rust",draft:!1,unlisted:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/user/software/development/rust.md",tags:[],version:"current",lastUpdatedAt:1730909882e3,frontMatter:{title:"Rust",summary:"A quick guide to getting set up for Rust development on Solus"},sidebar:"userSidebar",previous:{title:"R and RStudio",permalink:"/docs/user/software/development/r-and-rstudio"},next:{title:"Web Development",permalink:"/docs/user/software/development/web"}},a={},d=[];function u(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"rust",children:"Rust"})}),"\n",(0,n.jsx)(t.p,{children:"There are two ways to install Rust. This article explains how they differ and which one should be used, according to users' needs."}),"\n",(0,n.jsx)(t.p,{children:"Rust can be obtained by:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Installing the ",(0,n.jsx)(t.code,{children:"rustup"})," package, then installing any Rust target and/or tool using ",(0,n.jsx)(t.code,{children:"rustup"})," itself"]}),"\n",(0,n.jsxs)(t.li,{children:["Installing the ",(0,n.jsx)(t.code,{children:"rust"})," package"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Users should prefer the ",(0,n.jsx)(t.code,{children:"rustup"})," way, since it gives the freedom to install any tools and targets, including nightly versions and debugging utilities, although it may require editing the ",(0,n.jsx)(t.code,{children:"PATH"})," variable depending on your shell setup. According to the official Rust ",(0,n.jsx)(t.a,{href:"https://www.rust-lang.org/tools/install",children:"installation guide"}),":"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["It is customary for Rust developers to include ",(0,n.jsx)(t.code,{children:"~/.cargo/bin"})," in their ",(0,n.jsx)(t.code,{children:"PATH "}),"environment variable. During installation rustup will attempt to configure the ",(0,n.jsx)(t.code,{children:"PATH"}),". Because of differences between platforms, command shells, and bugs in rustup, the modifications to ",(0,n.jsx)(t.code,{children:"PATH"})," may not take effect until the console is restarted, or the user is logged out, or it may not succeed at all."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"rust"})," package, in fact, is present in the Solus repository for building packages that depend on it and it is not intended to be used by the final user, although it is possible and supported. Users that want to use the ",(0,n.jsx)(t.code,{children:"rust"})," package for their projects will be limited to the targets and tools that Solus needs to support, namely x86_64 and i686 Linux targets and ",(0,n.jsx)(t.code,{children:"cargo"}),". On the other hand, the ",(0,n.jsx)(t.code,{children:"rust"})," package is ready to use after its installation with no extra configurations."]}),"\n",(0,n.jsxs)(t.p,{children:["Either way, it is also recommended to install our ",(0,n.jsx)(t.code,{children:"system.devel"})," component, which is typically required for compiling. See our documentation for it ",(0,n.jsx)(t.a,{href:"/docs/user/software/development",children:"here"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["As a final note, it is possible to ",(0,n.jsx)(t.a,{href:"https://rust-lang.github.io/rustup/installation/already-installed-rust.html",children:"configure"})," ",(0,n.jsx)(t.code,{children:"rustup"})," to use the system toolchain. This setup is ",(0,n.jsx)(t.strong,{children:"discouraged"})," unless aimed at developing applications targeting Solus itself."]})]})}function c(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>l,a:()=>i});var n=s(67294);const o={},r=n.createContext(o);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);