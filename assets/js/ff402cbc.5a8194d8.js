"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[4628],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),g=l(a),k=n,d=g["".concat(c,".").concat(k)]||g[k]||u[k]||i;return a?r.createElement(d,o(o({ref:t},s),{},{components:a})):r.createElement(d,o({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=k;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[g]="string"==typeof e?e:n,o[1]=p;for(var l=2;l<i;l++)o[l]=a[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},3110:(e,t,a)=>{a.d(t,{ZP:()=>p});var r=a(7462),n=(a(7294),a(3905));const i={toc:[]},o="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(o,(0,r.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"We are currently in the process of migrating our source repositories from Phabricator to GitHub. If you have any repos checked out from Phabricator, ",(0,n.kt)("a",{parentName:"p",href:"/docs/packaging/procedures/migrate-repos-to-github"},"migrate them")," before proceeding."),(0,n.kt)("p",{parentName:"admonition"},"Updating all facets of the documentation will take some time.\nIf you notice any issues feel free to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/getsolus/help-center-docs/issues/new"},"file an issue")," on our docs tracker, or get in contact with us on our ",(0,n.kt)("a",{parentName:"p",href:"/docs/user/contributing/getting-involved#matrix-chat"},"Matrix")," channels.")))}p.isMDXComponent=!0},1599:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>k,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=a(7462),n=(a(7294),a(3905)),i=a(3110);const o={title:"Packaging Overview",summary:"Steps for setting up a packaging environment and submitting packages",sidebar_position:0},p=void 0,c={unversionedId:"packaging/index",id:"packaging/index",title:"Packaging Overview",description:"This is the overall workflow for creating or updating a package.",source:"@site/docs/packaging/index.mdx",sourceDirName:"packaging",slug:"/packaging/",permalink:"/docs/packaging/",draft:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/packaging/index.mdx",tags:[],version:"current",lastUpdatedAt:1695049983,formattedLastUpdatedAt:"Sep 18, 2023",sidebarPosition:0,frontMatter:{title:"Packaging Overview",summary:"Steps for setting up a packaging environment and submitting packages",sidebar_position:0},sidebar:"packagingSidebar",next:{title:"Prepare for Packaging",permalink:"/docs/packaging/prepare-for-packaging"}},l={},s=[{value:"Development Environment Preparation",id:"development-environment-preparation",level:2},{value:"Prior to Building a Package",id:"prior-to-building-a-package",level:2},{value:"Building Packages",id:"building-packages",level:2}],g={toc:s},u="wrapper";function k(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(i.ZP,{mdxType:"MigrationWarning"}),(0,n.kt)("h1",{id:"packaging-overview"},"Packaging Overview"),(0,n.kt)("p",null,"This is the overall workflow for creating or updating a package."),(0,n.kt)("h2",{id:"development-environment-preparation"},"Development Environment Preparation"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/docs/packaging/prepare-for-packaging"},"Prepare for Packaging")),(0,n.kt)("li",{parentName:"ol"},"Review the ",(0,n.kt)("a",{parentName:"li",href:"/docs/packaging/package.yml"},"requirements for the package.yml file"),"."),(0,n.kt)("li",{parentName:"ol"},"Also review our ",(0,n.kt)("a",{parentName:"li",href:"/docs/packaging/packaging-practices"},"Packaging Practices"),".")),(0,n.kt)("h2",{id:"prior-to-building-a-package"},"Prior to Building a Package"),(0,n.kt)("p",null,"Please check the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Search ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/getsolus/packages/issues?q=label%3A%22Package+Request%22"},"open package requests")," to see if there is one for the package. If there isn't an existing issue, go ahead and submit your pull request. If there is already a pull request, please check its status to avoid duplicating work."),(0,n.kt)("li",{parentName:"ul"},"If you are submitting a pull request for the inclusion of software in the repo, the package has a corresponding package request that is ",(0,n.kt)("strong",{parentName:"li"},"accepted for inclusion")," or is a dependency of a package that has been accepted into the repository.")),(0,n.kt)("h2",{id:"building-packages"},"Building Packages"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/docs/packaging/update-dev-environment"},"Update your development environment")),(0,n.kt)("li",{parentName:"ol"},"Prepare the package directory and build the package")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"For a new package that does not yet exist in the repos see ",(0,n.kt)("a",{parentName:"li",href:"/docs/packaging/creating-a-new-package"},"Creating a New Package")),(0,n.kt)("li",{parentName:"ul"},"For updating a package that already is in the repos see ",(0,n.kt)("a",{parentName:"li",href:"/docs/packaging/updating-an-existing-package"},"Updating an Existing Package"))),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/docs/packaging/testing-a-package"},"Test the Package")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/docs/packaging/submitting-a-pull-request"},"Submit a Pull Request for Review"))))}k.isMDXComponent=!0}}]);