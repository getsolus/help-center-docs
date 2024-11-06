"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[9677],{14864:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=t(85893),a=t(11151);const i={title:"Java",summary:"Learn how to install, run, and manage Java on Solus."},r="Java",o={id:"user/software/development/java",title:"Java",description:"Solus includes multiple LTS versions of Java in the repositories. You can install more than one version in your system at once.",source:"@site/docs/user/software/development/java.md",sourceDirName:"user/software/development",slug:"/user/software/development/java",permalink:"/docs/user/software/development/java",draft:!1,unlisted:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/user/software/development/java.md",tags:[],version:"current",lastUpdatedAt:1730909882e3,frontMatter:{title:"Java",summary:"Learn how to install, run, and manage Java on Solus."},sidebar:"userSidebar",previous:{title:"Containers",permalink:"/docs/user/software/development/containers"},next:{title:"PostgreSQL",permalink:"/docs/user/software/development/postgresql"}},d={},l=[{value:"Running Java applications",id:"running-java-applications",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"java",children:"Java"})}),"\n",(0,s.jsx)(n.p,{children:"Solus includes multiple LTS versions of Java in the repositories. You can install more than one version in your system at once."}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["If you need to install different versions of Java, use alternative installation methods such as ",(0,s.jsx)(n.a,{href:"https://sdkman.io/",children:(0,s.jsx)(n.em,{children:"SDKMAN!"})}),"."]})}),"\n",(0,s.jsxs)(n.p,{children:["All Java packages in the Solus repositories include the ",(0,s.jsx)(n.em,{children:"Java Runtime Environment"})," (JRE) and the ",(0,s.jsx)(n.em,{children:"Java Development Kit"})," (JDK)."]}),"\n",(0,s.jsx)(n.p,{children:"The following table lists the versions of Java available in the Solus repositories."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Version"}),(0,s.jsx)(n.th,{children:"Package name"}),(0,s.jsx)(n.th,{children:"Installation directory"}),(0,s.jsx)(n.th,{children:"Included components"}),(0,s.jsx)(n.th,{children:"Notes"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Java 11"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"openjdk-11"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/usr/lib64/openjdk-11"})}),(0,s.jsx)(n.td,{children:"JRE, JDK, OpenJFX"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Java 17"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"openjdk-17"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/usr/lib64/openjdk-17"})}),(0,s.jsx)(n.td,{children:"JRE, JDK"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Java 21"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"openjdk-21"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/usr/lib64/openjdk-21"})}),(0,s.jsx)(n.td,{children:"JRE, JDK"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"running-java-applications",children:"Running Java applications"}),"\n",(0,s.jsx)(n.admonition,{title:"Important",type:"caution",children:(0,s.jsxs)(n.p,{children:["Solus does not add Java to the ",(0,s.jsx)(n.code,{children:"PATH"})," environment variable by default."]})}),"\n",(0,s.jsx)(n.p,{children:"There are multiple ways to execute Java applications in Solus:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Create a .desktop file, then add ",(0,s.jsx)(n.code,{children:"env JAVA_HOME=/path/to/jdk/bin"})," to Exec."]}),"\n",(0,s.jsxs)(n.li,{children:["Create a script that sets ",(0,s.jsx)(n.code,{children:"JAVA_HOME"})," before running the application."]}),"\n",(0,s.jsxs)(n.li,{children:["Symlink the ",(0,s.jsx)(n.code,{children:"java"})," executable from ",(0,s.jsx)(n.code,{children:"/path/to/jdk/bin"})," to ",(0,s.jsx)(n.code,{children:"/usr/bin"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Add ",(0,s.jsx)(n.code,{children:"/path/to/jdk/bin"})," to your PATH environment variable."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>r});var s=t(67294);const a={},i=s.createContext(a);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);