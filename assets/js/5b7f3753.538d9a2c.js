"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[6413],{17754:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var t=n(85893),s=n(11151);const a={title:"Git Basics",summary:"Basic git commands for packaging"},r="Git Basics",c={id:"packaging/git-basics",title:"Git Basics",description:"Working with branches",source:"@site/docs/packaging/git-basics.md",sourceDirName:"packaging",slug:"/packaging/git-basics",permalink:"/docs/packaging/git-basics",draft:!1,unlisted:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/packaging/git-basics.md",tags:[],version:"current",lastUpdatedAt:171586666e4,frontMatter:{title:"Git Basics",summary:"Basic git commands for packaging"},sidebar:"packagingSidebar",previous:{title:"Local Repository",permalink:"/docs/packaging/advanced-config/local-repository"},next:{title:"Monitoring YAML",permalink:"/docs/packaging/monitoring.yml"}},o={},h=[{value:"Working with branches",id:"working-with-branches",level:2},{value:"Keeping your branch up to date with the main branch",id:"keeping-your-branch-up-to-date-with-the-main-branch",level:2},{value:"Adding files",id:"adding-files",level:2},{value:"Removing files",id:"removing-files",level:2},{value:"Renaming files",id:"renaming-files",level:2},{value:"Check the changes in your files",id:"check-the-changes-in-your-files",level:2},{value:"Commit your changes",id:"commit-your-changes",level:2},{value:"Deleting your branch after a pull request is merged",id:"deleting-your-branch-after-a-pull-request-is-merged",level:2}];function l(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"git-basics",children:"Git Basics"}),"\n",(0,t.jsx)(i.h2,{id:"working-with-branches",children:"Working with branches"}),"\n",(0,t.jsxs)(i.p,{children:["The recommended way to switch branches is ",(0,t.jsx)(i.code,{children:"git switch"}),".\nTo create a new branch use ",(0,t.jsx)(i.code,{children:"git switch -c"}),"."]}),"\n",(0,t.jsx)(i.h2,{id:"keeping-your-branch-up-to-date-with-the-main-branch",children:"Keeping your branch up to date with the main branch"}),"\n",(0,t.jsxs)(i.p,{children:["If there any new changes to the repository whilst you are still working on your branch you need to ",(0,t.jsx)(i.a,{href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork",children:"sync your fork"}),".\nRun ",(0,t.jsx)(i.code,{children:"git fetch"}),", and ",(0,t.jsx)(i.code,{children:"git rebase origin/main"})," to pull the changes in.\nYou will need to fix any conflicts manually.\nYou can check your branch against main with ",(0,t.jsx)(i.code,{children:"git diff origin/main..my-branch"}),"."]}),"\n",(0,t.jsx)(i.h2,{id:"adding-files",children:"Adding files"}),"\n",(0,t.jsxs)(i.p,{children:["For every file you change or add, you must let git know about it: ",(0,t.jsx)(i.code,{children:"git add someFile"})]}),"\n",(0,t.jsx)(i.h2,{id:"removing-files",children:"Removing files"}),"\n",(0,t.jsxs)(i.p,{children:["For files that need to be removed, you must do so using git: ",(0,t.jsx)(i.code,{children:"git rm someFile"})]}),"\n",(0,t.jsx)(i.h2,{id:"renaming-files",children:"Renaming files"}),"\n",(0,t.jsxs)(i.p,{children:["Likewise, for renaming a file, you must do so via git: ",(0,t.jsx)(i.code,{children:"git mv someFile someFileName2"})]}),"\n",(0,t.jsx)(i.h2,{id:"check-the-changes-in-your-files",children:"Check the changes in your files"}),"\n",(0,t.jsx)(i.p,{children:"It's a good idea to review the changes you have made to each file. This is to make sure you're committing what you intend and to make sure it looks good. Do this before adding changed files."}),"\n",(0,t.jsxs)(i.p,{children:["To diff them all at once, useful for small changes, use ",(0,t.jsx)(i.code,{children:"git diff"}),".\nTo diff each file one at a time run ",(0,t.jsx)(i.code,{children:"git diff filename"})," on each one."]}),"\n",(0,t.jsx)(i.h2,{id:"commit-your-changes",children:"Commit your changes"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Check your branch"})}),"\n",(0,t.jsxs)(i.p,{children:["Get the status of the branch with ",(0,t.jsx)(i.code,{children:"git status"}),". Make sure all the files you changed are staged, and that there are no untracked files. The git status should say your branch is clean."]}),"\n",(0,t.jsxs)(i.p,{children:["Now that you've tested and reviewed your change, when you're happy with it, it's time to commit your changes with ",(0,t.jsx)(i.code,{children:"git commit"}),"."]}),"\n",(0,t.jsx)(i.h2,{id:"deleting-your-branch-after-a-pull-request-is-merged",children:"Deleting your branch after a pull request is merged"}),"\n",(0,t.jsx)(i.p,{children:"Once your pull request has been accepted you can delete your working branches.\nFirst, change to the package directory, switch to the main branch, then delete your local and the remote branches."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"cd ~/solus-packages\ngit switch main\ngit branch -D my-branch\ngit push -d origin my-branch\n"})})]})}function d(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,i,n)=>{n.d(i,{Z:()=>c,a:()=>r});var t=n(67294);const s={},a=t.createContext(s);function r(e){const i=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:i},e.children)}}}]);