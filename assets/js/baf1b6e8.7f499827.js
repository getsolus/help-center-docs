"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[9677],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),c=r,k=d["".concat(p,".").concat(c)]||d[c]||m[c]||o;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9130:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={title:"Java",summary:"Learn how to install, run, and manage Java on Solus."},l="Java",i={unversionedId:"user/software/development/java",id:"user/software/development/java",title:"Java",description:"Solus includes multiple LTS versions of Java in the repositories. You can install more than one version in your system at once.",source:"@site/docs/user/software/development/java.md",sourceDirName:"user/software/development",slug:"/user/software/development/java",permalink:"/docs/user/software/development/java",draft:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/user/software/development/java.md",tags:[],version:"current",frontMatter:{title:"Java",summary:"Learn how to install, run, and manage Java on Solus."},sidebar:"userSidebar",previous:{title:"Containers",permalink:"/docs/user/software/development/containers"},next:{title:"PostgreSQL",permalink:"/docs/user/software/development/postgresql"}},p={},s=[{value:"Running Java Applications",id:"running-java-applications",level:2},{value:"openjdk-8",id:"openjdk-8",level:2}],u={toc:s},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"java"},"Java"),(0,r.kt)("p",null,"Solus includes multiple LTS versions of Java in the repositories. You can install more than one version in your system at once."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you need to install different versions of Java, use alternative installation methods such as ",(0,r.kt)("a",{parentName:"p",href:"https://sdkman.io/"},(0,r.kt)("em",{parentName:"a"},"SDKMAN!")),".")),(0,r.kt)("p",null,"All Java packages in the Solus repositories include the ",(0,r.kt)("em",{parentName:"p"},"Java Runtime Environment")," (JRE) and the ",(0,r.kt)("em",{parentName:"p"},"Java Development Kit")," (JDK)."),(0,r.kt)("p",null,"The following table lists the versions of Java available in the Solus repositories."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Version"),(0,r.kt)("th",{parentName:"tr",align:null},"Package name"),(0,r.kt)("th",{parentName:"tr",align:null},"Installation directory"),(0,r.kt)("th",{parentName:"tr",align:null},"Included components"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Java 8"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"openjdk-8")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/usr/lib64/openjdk-8")),(0,r.kt)("td",{parentName:"tr",align:null},"JRE, JDK"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("em",{parentName:"td"},"openjdk-8")," below")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Java 11"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"openjdk-11")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/usr/lib64/openjdk-11")),(0,r.kt)("td",{parentName:"tr",align:null},"JRE, JDK, OpenJFX"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Java 17"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"openjdk-17")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/usr/lib64/openjdk-17")),(0,r.kt)("td",{parentName:"tr",align:null},"JRE, JDK"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"running-java-applications"},"Running Java Applications"),(0,r.kt)("admonition",{title:"Important",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Solus does not add Java to the ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH")," environment variable by default.")),(0,r.kt)("p",null,"There are multiple ways to execute Java applications in Solus:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a .desktop file, then add ",(0,r.kt)("inlineCode",{parentName:"li"},"env JAVA_HOME=/path/to/jdk/bin")," to Exec."),(0,r.kt)("li",{parentName:"ul"},"Create a script that sets ",(0,r.kt)("inlineCode",{parentName:"li"},"JAVA_HOME")," before running the application."),(0,r.kt)("li",{parentName:"ul"},"Symlink the java executable from ",(0,r.kt)("inlineCode",{parentName:"li"},"/path/to/jdk/bin")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"/usr/bin"),"."),(0,r.kt)("li",{parentName:"ul"},"Add ",(0,r.kt)("inlineCode",{parentName:"li"},"/path/to/jdk/bin")," to your PATH environment variable.")),(0,r.kt)("h2",{id:"openjdk-8"},"openjdk-8"),(0,r.kt)("admonition",{title:"Important",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"openjdk-8 is scheduled for removal in the near future. It is not recommended that you use it today.")))}m.isMDXComponent=!0}}]);