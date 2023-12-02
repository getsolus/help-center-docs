"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[6114],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,k=c["".concat(l,".").concat(d)]||c[d]||g[d]||o;return a?n.createElement(k,i(i({ref:t},u),{},{components:a})):n.createElement(k,i({ref:t},u))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9299:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={title:"Testing a Package",summary:"Testing a Package",sidebar_position:5},i="Testing a Package",s={unversionedId:"packaging/testing-a-package",id:"packaging/testing-a-package",title:"Testing a Package",description:"After building a package, it must be tested against the unstable repo before a pull request can be submitted. Each pull request requires you to explain how you tested the package to make sure things work as expected.",source:"@site/docs/packaging/testing-a-package.md",sourceDirName:"packaging",slug:"/packaging/testing-a-package",permalink:"/docs/packaging/testing-a-package",draft:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/packaging/testing-a-package.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Testing a Package",summary:"Testing a Package",sidebar_position:5},sidebar:"packagingSidebar",previous:{title:"Updating an Existing Package",permalink:"/docs/packaging/updating-an-existing-package"},next:{title:"Submitting a Pull Request for Review",permalink:"/docs/packaging/submitting-a-pull-request"}},l={},p=[{value:"Install the <code>.eopkg</code> Files",id:"install-the-eopkg-files",level:2},{value:"For Updated Packages: Return to the Repository Version",id:"for-updated-packages-return-to-the-repository-version",level:2},{value:"Remove the <code>.eopkg</code> Files",id:"remove-the-eopkg-files",level:2}],u={toc:p},c="wrapper";function g(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"testing-a-package"},"Testing a Package"),(0,r.kt)("p",null,"After building a package, it must be tested against the unstable repo before a pull request can be submitted. Each pull request requires you to explain how you tested the package to make sure things work as expected."),(0,r.kt)("p",null,"You will use the .eopkg file(s) created by the build process for testing."),(0,r.kt)("h2",{id:"install-the-eopkg-files"},"Install the ",(0,r.kt)("inlineCode",{parentName:"h2"},".eopkg")," Files"),(0,r.kt)("p",null,"To install your new package, run the following command in the directory where you built the package. Include ",(0,r.kt)("strong",{parentName:"p"},"all")," ",(0,r.kt)("inlineCode",{parentName:"p"},".eopkg")," files that were built."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo eopkg it *.eopkg\n")),(0,r.kt)("p",null,"Testing need not be very complicated. The goal is to ensure the package will reliably work for our users. Testing effort will depend on how complex the software is. At minimum, you want to ensure the application launches, and performs basic functionality as expected."),(0,r.kt)("p",null,"For example, if you were updating a text editor, you would want to make sure you can open, create and save files. If you know of issues the package has had in the past, it's a good idea to test that as well to make sure there are no regressions. There are plenty of historical pull requests to review if you want more detail."),(0,r.kt)("h2",{id:"for-updated-packages-return-to-the-repository-version"},"For Updated Packages: Return to the Repository Version"),(0,r.kt)("p",null,"It is a good idea to uninstall the package you built, and return to the repository version, once you are done testing. To do this, run the following command on the main application. For example, if you just built ",(0,r.kt)("inlineCode",{parentName:"p"},"tree"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo eopkg it --reinstall tree\n")),(0,r.kt)("h2",{id:"remove-the-eopkg-files"},"Remove the ",(0,r.kt)("inlineCode",{parentName:"h2"},".eopkg")," Files"),(0,r.kt)("p",null,"Before you can submit your pull request, you need to remove the ",(0,r.kt)("inlineCode",{parentName:"p"},".eopkg")," files. All repository packages are built by a dedicated build server from the source files provided in your pull request."),(0,r.kt)("p",null,"To remove these files, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"go-task clean\n")))}g.isMDXComponent=!0}}]);