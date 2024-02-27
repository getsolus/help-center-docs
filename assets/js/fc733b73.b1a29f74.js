"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[6042],{68435:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>a});var t=s(85893),i=s(11151);const o={title:"R and Rstudio",summary:"Quick start guide for R and Rstudio on Solus"},l="R and Rstudio",r={id:"user/software/development/r-and-rstudio",title:"R and Rstudio",description:"Covers the basics of how to install R and Rstudio on Solus and also covers how to install required dependencies for installing additional CRAN libraries.",source:"@site/docs/user/software/development/r-and-rstudio.md",sourceDirName:"user/software/development",slug:"/user/software/development/r-and-rstudio",permalink:"/docs/user/software/development/r-and-rstudio",draft:!1,unlisted:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/user/software/development/r-and-rstudio.md",tags:[],version:"current",lastUpdatedAt:1709047830,formattedLastUpdatedAt:"Feb 27, 2024",frontMatter:{title:"R and Rstudio",summary:"Quick start guide for R and Rstudio on Solus"},sidebar:"userSidebar",previous:{title:"PostgreSQL",permalink:"/docs/user/software/development/postgresql"},next:{title:"Rust",permalink:"/docs/user/software/development/rust"}},d={},a=[{value:"Downloading R",id:"downloading-r",level:2},{value:"Downloading Rstudio",id:"downloading-rstudio",level:2},{value:"How to use <code>install.package()</code> on Solus",id:"how-to-use-installpackage-on-solus",level:3},{value:"Additional Discovered Dependencies",id:"additional-discovered-dependencies",level:4}];function c(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"r-and-rstudio",children:"R and Rstudio"}),"\n",(0,t.jsx)(n.p,{children:"Covers the basics of how to install R and Rstudio on Solus and also covers how to install required dependencies for installing additional CRAN libraries."}),"\n",(0,t.jsx)(n.h2,{id:"downloading-r",children:"Downloading R"}),"\n",(0,t.jsxs)(n.p,{children:["It is recommended to download R before downloading Rstudio. This can be accomplished easily in any of three ways.\n",(0,t.jsx)(n.strong,{children:"NOTE:"})," Both R and Rstudio are available natively on Solus thanks to their amazing maintainers, it is not necessary to go to either softwares' respective website."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The easiest way to do this is to search for R within the ",(0,t.jsx)(n.strong,{children:"Software Center"})]}),"\n",(0,t.jsxs)(n.li,{children:["Alternatively you can enter the ",(0,t.jsx)(n.strong,{children:"Software Center"}),", select ",(0,t.jsx)(n.strong,{children:"Programming Languages & Tools"}),", then select ",(0,t.jsx)(n.strong,{children:"Programming"})," and scroll down until you see ",(0,t.jsx)(n.strong,{children:"r"}),". ",(0,t.jsx)(n.em,{children:"The list itself is in alphabetical order so it will be near the bottom."})]}),"\n",(0,t.jsxs)(n.li,{children:["The third option for install is to open your terminal and enter the command ",(0,t.jsx)(n.code,{children:"sudo eopkg it r"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"downloading-rstudio",children:"Downloading Rstudio"}),"\n",(0,t.jsx)(n.p,{children:"The first step in setting up Rstudio is to download and install it. This can be accomplished in the same ways as R in the prior step."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The easiest way to do this is to search for Rstudio within the ",(0,t.jsx)(n.strong,{children:"Software Center"})]}),"\n",(0,t.jsxs)(n.li,{children:["Alternatively you can enter the ",(0,t.jsx)(n.strong,{children:"Software Center"}),", select ",(0,t.jsx)(n.strong,{children:"Programming Languages & Tools"}),", then select ",(0,t.jsx)(n.strong,{children:"Integrated Development Environments"})," and scroll down until you see ",(0,t.jsx)(n.strong,{children:"r"}),". ",(0,t.jsx)(n.em,{children:"The list itself is in alphabetical order so it will be near the bottom."})]}),"\n",(0,t.jsxs)(n.li,{children:["The third option for install is to open your terminal and enter the command ",(0,t.jsx)(n.code,{children:"sudo eopkg it rstudio"})]}),"\n"]}),"\n",(0,t.jsxs)(n.h3,{id:"how-to-use-installpackage-on-solus",children:["How to use ",(0,t.jsx)(n.code,{children:"install.package()"})," on Solus"]}),"\n",(0,t.jsxs)(n.p,{children:["Unless you are only going to use base R functions, you will need to make use of ",(0,t.jsx)(n.code,{children:"install.package()"})," within R to install additional libraries. To use this function within R you need to install certain development packages which vary depending on the library you are trying to enable within R."]}),"\n",(0,t.jsx)(n.p,{children:"On other linux distros (like debian, ubuntu, and fedora) this is accomplished through the installation of r-devel. However since Solus does not have an r-devel package these dependencies have to be installed through other means."}),"\n",(0,t.jsxs)(n.p,{children:["There two main solus packages that will include many of the dependencies required that allow you to install most R CRAN packages. These are ",(0,t.jsx)(n.code,{children:"system.devel"})," and ",(0,t.jsx)(n.code,{children:"curl-devel"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"system.devel"})," can ",(0,t.jsx)(n.strong,{children:"ONLY"})," be installed from within terminal by running the command ",(0,t.jsx)(n.code,{children:"sudo eopkg it -c system.devel"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"curl-devel"})," can be found by searching in the ",(0,t.jsx)(n.strong,{children:"Software Center"})," or by running the command ",(0,t.jsx)(n.code,{children:"sudo eopkg it curl-devel"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Once these two Solus packages are installed ",(0,t.jsx)(n.code,{children:"install.package()"})," will work as usual within R for most packages like ",(0,t.jsx)(n.code,{children:"tidyverse"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["If when you try to install a CRAN library with ",(0,t.jsx)(n.code,{children:"install.package()"})," from within R and you are presented with an error that says ",(0,t.jsx)(n.code,{children:"...exited with non zero exit status"})," this is most likely because one of the required dependencies, ",(0,t.jsx)(n.em,{children:"which will be listed within the R console detailing the error"}),", is contained within a Solus devel package you have not yet installed."]}),"\n",(0,t.jsx)(n.h4,{id:"additional-discovered-dependencies",children:"Additional Discovered Dependencies"}),"\n",(0,t.jsx)(n.p,{children:"This section should be edited to help future users to know what Solus devel packages are needed to install additional, more specialized CRAN packages."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["To successfully run ",(0,t.jsx)(n.code,{children:'install.package("RCurl")'})," within R requires ",(0,t.jsx)(n.code,{children:"nghttp2-devel"}),", ",(0,t.jsx)(n.code,{children:"libssh2-devel"}),", and ",(0,t.jsx)(n.code,{children:"kerberos-devel"})," to be installed from the Solus ",(0,t.jsx)(n.strong,{children:"Software Center"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>l});var t=s(67294);const i={},o=t.createContext(i);function l(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);