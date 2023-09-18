"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[6413],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=i,d=p["".concat(c,".").concat(h)]||p[h]||g[h]||r;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3761:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(7462),i=(n(7294),n(3905));const r={title:"Git Basics",summary:"Basic git commands for packaging"},o="Git Basics",s={unversionedId:"packaging/git-basics",id:"packaging/git-basics",title:"Git Basics",description:"Working with branches",source:"@site/docs/packaging/git-basics.md",sourceDirName:"packaging",slug:"/packaging/git-basics",permalink:"/docs/packaging/git-basics",draft:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/packaging/git-basics.md",tags:[],version:"current",lastUpdatedAt:1695049983,formattedLastUpdatedAt:"Sep 18, 2023",frontMatter:{title:"Git Basics",summary:"Basic git commands for packaging"},sidebar:"packagingSidebar",previous:{title:"Local Repository",permalink:"/docs/packaging/advanced-config/local-repository"},next:{title:"Package YAML",permalink:"/docs/packaging/package.yml"}},c={},l=[{value:"Working with branches",id:"working-with-branches",level:2},{value:"Keeping your branch up to date with the master branch",id:"keeping-your-branch-up-to-date-with-the-master-branch",level:2},{value:"Adding files",id:"adding-files",level:2},{value:"Removing files",id:"removing-files",level:2},{value:"Renaming files",id:"renaming-files",level:2},{value:"Check the changes in your files",id:"check-the-changes-in-your-files",level:2},{value:"Commit your changes",id:"commit-your-changes",level:2},{value:"Deleting your branch after a pull request is merged",id:"deleting-your-branch-after-a-pull-request-is-merged",level:2}],u={toc:l},p="wrapper";function g(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"git-basics"},"Git Basics"),(0,i.kt)("h2",{id:"working-with-branches"},"Working with branches"),(0,i.kt)("p",null,"The recommended way to switch branches is ",(0,i.kt)("inlineCode",{parentName:"p"},"git switch"),".\nTo create a new branch use ",(0,i.kt)("inlineCode",{parentName:"p"},"git switch -c"),"."),(0,i.kt)("h2",{id:"keeping-your-branch-up-to-date-with-the-master-branch"},"Keeping your branch up to date with the master branch"),(0,i.kt)("p",null,"If there any new changes to the repository whilst you are still working on your branch you need to ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork"},"sync your fork"),".\nRun ",(0,i.kt)("inlineCode",{parentName:"p"},"git fetch"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"git rebase origin/master")," to pull the changes in.\nYou will need to fix any conflicts manually.\nYou can check your branch against master with ",(0,i.kt)("inlineCode",{parentName:"p"},"git diff origin/master..my-branch"),"."),(0,i.kt)("h2",{id:"adding-files"},"Adding files"),(0,i.kt)("p",null,"For every file you change or add, you must let git know about it: ",(0,i.kt)("inlineCode",{parentName:"p"},"git add someFile")),(0,i.kt)("h2",{id:"removing-files"},"Removing files"),(0,i.kt)("p",null,"For files that need to be removed, you must do so using git: ",(0,i.kt)("inlineCode",{parentName:"p"},"git rm someFile")),(0,i.kt)("h2",{id:"renaming-files"},"Renaming files"),(0,i.kt)("p",null,"Likewise, for renaming a file, you must do so via git: ",(0,i.kt)("inlineCode",{parentName:"p"},"git mv someFile someFileName2")),(0,i.kt)("h2",{id:"check-the-changes-in-your-files"},"Check the changes in your files"),(0,i.kt)("p",null,"It's a good idea to review the changes you have made to each file. This is to make sure you're committing what you intend and to make sure it looks good. Do this before adding changed files."),(0,i.kt)("p",null,"To diff them all at once, useful for small changes, use ",(0,i.kt)("inlineCode",{parentName:"p"},"git diff"),".\nTo diff each file one at a time run ",(0,i.kt)("inlineCode",{parentName:"p"},"git diff filename")," on each one."),(0,i.kt)("h2",{id:"commit-your-changes"},"Commit your changes"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Check your branch")),(0,i.kt)("p",null,"Get the status of the branch with ",(0,i.kt)("inlineCode",{parentName:"p"},"git status"),". Make sure all the files you changed are staged, and that there are no untracked files. The git status should say your branch is clean."),(0,i.kt)("p",null,"Now that you've tested and reviewed your change, when you're happy with it, it's time to commit your changes with ",(0,i.kt)("inlineCode",{parentName:"p"},"git commit"),"."),(0,i.kt)("h2",{id:"deleting-your-branch-after-a-pull-request-is-merged"},"Deleting your branch after a pull request is merged"),(0,i.kt)("p",null,"Once your pull request has been accepted you can delete your working branches.\nFirst, change to the package directory, switch to the master branch, then delete your local and the remote branches."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/solus-builds/package\ngit switch master\ngit branch -D my-branch\ngit push -d origin my-branch\n")))}g.isMDXComponent=!0}}]);