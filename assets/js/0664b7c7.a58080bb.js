"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[4586],{4137:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),u=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(a),d=n,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return a?i.createElement(h,r(r({ref:t},p),{},{components:a})):i.createElement(h,r({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,r[1]=l;for(var u=2;u<o;u++)r[u]=a[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}d.displayName="MDXCreateElement"},261:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var i=a(7462),n=(a(7294),a(4137));const o={title:"Submitting the Package",summary:"Submitting the Package",date:new Date("2022-12-16T00:00:00.000Z")},r="Submitting the Package",l={unversionedId:"packaging/submitting-a-package",id:"packaging/submitting-a-package",title:"Submitting the Package",description:"This article will walk you through submitting a patch for a package for review and inclusion in the Solus repository.",source:"@site/docs/packaging/submitting-a-package.md",sourceDirName:"packaging",slug:"/packaging/submitting-a-package",permalink:"/help-center-docs/docs/packaging/submitting-a-package",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/packaging/submitting-a-package.md",tags:[],version:"current",frontMatter:{title:"Submitting the Package",summary:"Submitting the Package",date:"2022-12-16T00:00:00.000Z"},sidebar:"packagingSidebar",previous:{title:"Requesting a Package",permalink:"/help-center-docs/docs/packaging/procedures/request-a-package"},next:{title:"Updating an Existing Package",permalink:"/help-center-docs/docs/packaging/updating-an-existing-package"}},s={},u=[{value:"Prior to Patch Submission",id:"prior-to-patch-submission",level:2},{value:"Setting up Arcanist",id:"setting-up-arcanist",level:2},{value:"Creating the patch",id:"creating-the-patch",level:2},{value:"Manipulating files with Git",id:"manipulating-files-with-git",level:3},{value:"Adding files",id:"adding-files",level:4},{value:"Removing files",id:"removing-files",level:4},{value:"Renaming",id:"renaming",level:4},{value:"Commit",id:"commit",level:3},{value:"Submitting for Review",id:"submitting-for-review",level:3},{value:"Updating a patch that needs changes",id:"updating-a-patch-that-needs-changes",level:2},{value:"Updating files",id:"updating-files",level:3},{value:"Updating Task Information",id:"updating-task-information",level:3},{value:"Maintainership",id:"maintainership",level:2}],p={toc:u},c="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"submitting-the-package"},"Submitting the Package"),(0,n.kt)("p",null,"This article will walk you through submitting a patch for a package for review and inclusion in the Solus repository."),(0,n.kt)("p",null,"When contributing patches to Solus, please note that we do not accept the upload of binary files (i.e. ",(0,n.kt)("inlineCode",{parentName:"p"},".eopkg"),").\nAll repository packages are built by a dedicated build server, from the source files provided in your patch upload."),(0,n.kt)("p",null,"At minimum, your patch will include changes for the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"package.yml")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"pspec_*.xml"))),(0,n.kt)("p",null,"If any additional files were required for the build, then you must also include the ",(0,n.kt)("inlineCode",{parentName:"p"},"files/")," directory.\nIf you are creating a new package, you will also need to include a ",(0,n.kt)("inlineCode",{parentName:"p"},"Makefile")," containing the following text:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"include ../Makefile.common\n")),(0,n.kt)("p",null,"Lastly, many package builds may result in the generation of an ABI report. These files start with ",(0,n.kt)("inlineCode",{parentName:"p"},"abi_*")," and must also\nbe included, as they allow simple tracking of changes to symbols and dependencies."),(0,n.kt)("p",null,"For all patch submissions you must be using the ",(0,n.kt)("inlineCode",{parentName:"p"},"arcanist")," utility to communicate with the ",(0,n.kt)("a",{parentName:"p",href:"https://dev.getsol.us/"},"Solus Developer Portal")),(0,n.kt)("h2",{id:"prior-to-patch-submission"},"Prior to Patch Submission"),(0,n.kt)("p",null,"Prior to submitting a patch, please ensure you are checking the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"There is not an existing patch already provided by others."),(0,n.kt)("li",{parentName:"ul"},"If you are submitting a patch for the inclusion of software in the repo, that the package your patch pertains to has a corresponding package request that is ",(0,n.kt)("strong",{parentName:"li"},"accepted for inclusion")," or is a dependency of a package that has been accepted into the repository.")),(0,n.kt)("p",null,"Please refrain from submitting a patch for the following instances:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"For a package that is yet to be accepted for inclusion by a member of the Triage Team. We welcome you to politely reach out via the package request task or ",(0,n.kt)("a",{parentName:"li",href:"/docs/user/contributing/getting-involved"},"IRC")," if you deem the review of the request to be time-sensitive in nature."),(0,n.kt)("li",{parentName:"ul"},"If your patch is a Work In Progress / WIP. Completed patches or patches which have a request for comments are accepted, however for request for comments please ensure your patch title contains ",(0,n.kt)("inlineCode",{parentName:"li"},"[RFC]"),". WIP patches just clutter Differential and make patch review by the team more time consuming and introduces unnecessary work.")),(0,n.kt)("h2",{id:"setting-up-arcanist"},"Setting up Arcanist"),(0,n.kt)("p",null,"In three easy steps, you can set up arcanist for the first time:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo eopkg it arcanist\narc set-config default https://dev.getsol.us\narc install-certificate\n")),(0,n.kt)("p",null,"On the third step you will be given a unique link to log into the Developer Portal, to create a ",(0,n.kt)("inlineCode",{parentName:"p"},"Conduit API Token"),". This\ntoken will be used to allow the CLI ",(0,n.kt)("inlineCode",{parentName:"p"},"arc")," utility to communicate with Phabricator."),(0,n.kt)("h2",{id:"creating-the-patch"},"Creating the patch"),(0,n.kt)("h3",{id:"manipulating-files-with-git"},"Manipulating files with Git"),(0,n.kt)("h4",{id:"adding-files"},"Adding files"),(0,n.kt)("p",null,"For every file you change or add, you must let git know about them: ",(0,n.kt)("inlineCode",{parentName:"p"},"git add someFile")),(0,n.kt)("h4",{id:"removing-files"},"Removing files"),(0,n.kt)("p",null,"For files that must be removed, you must do so using git: ",(0,n.kt)("inlineCode",{parentName:"p"},"git rm someFile")),(0,n.kt)("h4",{id:"renaming"},"Renaming"),(0,n.kt)("p",null,"Likewise, for renaming a file, you must do so via git: ",(0,n.kt)("inlineCode",{parentName:"p"},"git mv someFile someFileName2")),(0,n.kt)("h3",{id:"commit"},"Commit"),(0,n.kt)("p",null,"Once you're happy with your change, and you have verified locally that it works by having first built and\ninstalled it, it's time to commit your changes with ",(0,n.kt)("inlineCode",{parentName:"p"},"git commit"),"."),(0,n.kt)("p",null,"Make sure you provide a meaningful summary and a separate body to your commit message. For more information\non suitable commit messages, please check the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/solus-project/tooling-central/blob/master/README.rst#using-git"},"tooling central documentation"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If you want to link this patch to an issue on the Developer portal, simply mention it in your commit message: ",(0,n.kt)("inlineCode",{parentName:"li"},"The inclusion of <somepackage> fixes T1234")),(0,n.kt)("li",{parentName:"ul"},"If you need a change to depend on another change, mention it in the commit message too: ",(0,n.kt)("inlineCode",{parentName:"li"},"Depends on D5"))),(0,n.kt)("h3",{id:"submitting-for-review"},"Submitting for Review"),(0,n.kt)("p",null,"Now you have your git commit, it's time to send it to us for review. Using the CLI again, simply issue: ",(0,n.kt)("inlineCode",{parentName:"p"},"arc diff")),(0,n.kt)("p",null,"A new editor session will open, where you can provide additional details. Note that the default reviewer will be assigned after you submit, so it is not necessary to specify anyone here. If you are updating an existing package, please be sure to include a summarized changelog (or a link to the changelog provided upstream) and a test plan indicating that you've installed and run the package. Once you're finished, save and exit the editor (",(0,n.kt)("inlineCode",{parentName:"p"},"CTRL+O")," + ",(0,n.kt)("inlineCode",{parentName:"p"},"CTRL+X")," for nano), and the patch will then be uploaded. You'll be presented with the Differential URL, and a review will happen as soon as possible."),(0,n.kt)("h2",{id:"updating-a-patch-that-needs-changes"},"Updating a patch that needs changes"),(0,n.kt)("h3",{id:"updating-files"},"Updating files"),(0,n.kt)("p",null,"That's easy. ",(0,n.kt)("strong",{parentName:"p"},"Don't make a new commit"),", just make any relevant changes to your local tree, adding + removing as before, but this time run: ",(0,n.kt)("inlineCode",{parentName:"p"},"git commit --amend"),"."),(0,n.kt)("p",null,"This will amend your original changes, and you can submit the patch once more with ",(0,n.kt)("inlineCode",{parentName:"p"},"arc diff"),"."),(0,n.kt)("p",null,"A new editor session will open, where you can provide details about the changes you've made between the last revision and the newly amended one. This comment will help reviewers to see what you've changed, to streamline the process of getting your patch into Solus."),(0,n.kt)("p",null,"The web UI will automatically update with the latest patch, without having to create any new tasks. Once accepted, your patch will be merged, and a build will be issued."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Notes:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If you have already created a new commit, run ",(0,n.kt)("inlineCode",{parentName:"li"},"git rebase -i HEAD~2")," to squash the commits, change the commit message to the same commit message as the original, removing any suggested commit message from git itself."),(0,n.kt)("li",{parentName:"ul"},"If you are concerned with ",(0,n.kt)("inlineCode",{parentName:"li"},"arc diff")," creating a new Differential, you can run ",(0,n.kt)("inlineCode",{parentName:"li"},"arc diff --update DXXXXX"),", changing ",(0,n.kt)("inlineCode",{parentName:"li"},"XXXXX")," to the number assign to your initial Differential.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'If you have created a new Differential already, you can abandon it and update your previous differential by choosing the Add Action section below the web-based patch GUI, then choose "Abandon Revision", then click Submit.')))),(0,n.kt)("h3",{id:"updating-task-information"},"Updating Task Information"),(0,n.kt)("p",null,"If you forgot information such as a test plan, you can run resolve this by:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Running ",(0,n.kt)("inlineCode",{parentName:"li"},"arc diff --edit"),". This will open up an editor session, where you can edit the information."),(0,n.kt)("li",{parentName:"ol"},'Next, you will see an editor session for providing a message indicating the change, for example "Added a test plan."')),(0,n.kt)("p",null,"After this editor session, the updated patch will be automatically uploaded, the web UI will automatically update, and no new tasks will be created."),(0,n.kt)("h2",{id:"maintainership"},"Maintainership"),(0,n.kt)("p",null,"Submission directly to a repository is only possible for maintainers. As a maintainer you may freely push to your package(s) and initiate builds for them, which will be pushed to the unstable repository. You can watch builds ",(0,n.kt)("a",{parentName:"p",href:"https://build.getsol.us/"},"here")),(0,n.kt)("p",null,"Pushing changes is not possible unless you have maintainer access. The same is also true of ",(0,n.kt)("inlineCode",{parentName:"p"},"make publish"),"."),(0,n.kt)("p",null,'To request maintainer rights for a repository, it is expected that some level of contribution/maintenance has already happened by way of testing/patching, and there is reasonable trust demonstrated to "hand the keys"\nover to a repository.'),(0,n.kt)("p",null,"Currently, the request mechanism is ",(0,n.kt)("a",{parentName:"p",href:"/docs/user/contributing/getting-involved"},"contact Joshua on IRC"),". It is far easier to grant access to active community members than those unknown to the project."),(0,n.kt)("p",null,"Finally, note that the management reserve the right to revoke access at any time, in order to preserve project safety and integrity."))}m.isMDXComponent=!0}}]);