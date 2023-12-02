"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[6413],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},g="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),g=s(n),p=a,d=g["".concat(l,".").concat(p)]||g[p]||h[p]||r;return n?i.createElement(d,o(o({ref:t},u),{},{components:n})):i.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[g]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3761:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var i=n(7462),a=(n(7294),n(3905));const r={title:"Git Basics",summary:"Basic git commands for packaging"},o="Git Basics",c={unversionedId:"packaging/git-basics",id:"packaging/git-basics",title:"Git Basics",description:"Working with branches",source:"@site/docs/packaging/git-basics.md",sourceDirName:"packaging",slug:"/packaging/git-basics",permalink:"/docs/packaging/git-basics",draft:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/packaging/git-basics.md",tags:[],version:"current",frontMatter:{title:"Git Basics",summary:"Basic git commands for packaging"},sidebar:"packagingSidebar",previous:{title:"Local Repository",permalink:"/docs/packaging/advanced-config/local-repository"},next:{title:"Package YAML",permalink:"/docs/packaging/package.yml"}},l={},s=[{value:"Working with branches",id:"working-with-branches",level:2},{value:"Keeping your branch up to date with the main branch",id:"keeping-your-branch-up-to-date-with-the-main-branch",level:2},{value:"Adding files",id:"adding-files",level:2},{value:"Removing files",id:"removing-files",level:2},{value:"Renaming files",id:"renaming-files",level:2},{value:"Check the changes in your files",id:"check-the-changes-in-your-files",level:2},{value:"Commit your changes",id:"commit-your-changes",level:2},{value:"Deleting your branch after a pull request is merged",id:"deleting-your-branch-after-a-pull-request-is-merged",level:2}],u={toc:s},g="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(g,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"git-basics"},"Git Basics"),(0,a.kt)("h2",{id:"working-with-branches"},"Working with branches"),(0,a.kt)("p",null,"The recommended way to switch branches is ",(0,a.kt)("inlineCode",{parentName:"p"},"git switch"),".\nTo create a new branch use ",(0,a.kt)("inlineCode",{parentName:"p"},"git switch -c"),"."),(0,a.kt)("h2",{id:"keeping-your-branch-up-to-date-with-the-main-branch"},"Keeping your branch up to date with the main branch"),(0,a.kt)("p",null,"If there any new changes to the repository whilst you are still working on your branch you need to ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork"},"sync your fork"),".\nRun ",(0,a.kt)("inlineCode",{parentName:"p"},"git fetch"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"git rebase origin/main")," to pull the changes in.\nYou will need to fix any conflicts manually.\nYou can check your branch against main with ",(0,a.kt)("inlineCode",{parentName:"p"},"git diff origin/main..my-branch"),"."),(0,a.kt)("h2",{id:"adding-files"},"Adding files"),(0,a.kt)("p",null,"For every file you change or add, you must let git know about it: ",(0,a.kt)("inlineCode",{parentName:"p"},"git add someFile")),(0,a.kt)("h2",{id:"removing-files"},"Removing files"),(0,a.kt)("p",null,"For files that need to be removed, you must do so using git: ",(0,a.kt)("inlineCode",{parentName:"p"},"git rm someFile")),(0,a.kt)("h2",{id:"renaming-files"},"Renaming files"),(0,a.kt)("p",null,"Likewise, for renaming a file, you must do so via git: ",(0,a.kt)("inlineCode",{parentName:"p"},"git mv someFile someFileName2")),(0,a.kt)("h2",{id:"check-the-changes-in-your-files"},"Check the changes in your files"),(0,a.kt)("p",null,"It's a good idea to review the changes you have made to each file. This is to make sure you're committing what you intend and to make sure it looks good. Do this before adding changed files."),(0,a.kt)("p",null,"To diff them all at once, useful for small changes, use ",(0,a.kt)("inlineCode",{parentName:"p"},"git diff"),".\nTo diff each file one at a time run ",(0,a.kt)("inlineCode",{parentName:"p"},"git diff filename")," on each one."),(0,a.kt)("h2",{id:"commit-your-changes"},"Commit your changes"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Check your branch")),(0,a.kt)("p",null,"Get the status of the branch with ",(0,a.kt)("inlineCode",{parentName:"p"},"git status"),". Make sure all the files you changed are staged, and that there are no untracked files. The git status should say your branch is clean."),(0,a.kt)("p",null,"Now that you've tested and reviewed your change, when you're happy with it, it's time to commit your changes with ",(0,a.kt)("inlineCode",{parentName:"p"},"git commit"),"."),(0,a.kt)("h2",{id:"deleting-your-branch-after-a-pull-request-is-merged"},"Deleting your branch after a pull request is merged"),(0,a.kt)("p",null,"Once your pull request has been accepted you can delete your working branches.\nFirst, change to the package directory, switch to the main branch, then delete your local and the remote branches."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/solus-packages\ngit switch main\ngit branch -D my-branch\ngit push -d origin my-branch\n")))}h.isMDXComponent=!0}}]);