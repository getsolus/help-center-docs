"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[255],{14406:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var o=a(85893),t=a(11151);const s={title:"Your First Package Update",summary:"An example of how to build a package that exists in the Solus repos for new packagers."},i="Your First Package Update",r={id:"packaging/your-first-package-update",title:"Your First Package Update",description:"This page will guide you through the steps required to build your first package. This is really a test to make sure that your build environment is set up correctly. You will clone an existing package, build it, then install it, and finally remove it.",source:"@site/docs/packaging/your-first-package-update.md",sourceDirName:"packaging",slug:"/packaging/your-first-package-update",permalink:"/docs/packaging/your-first-package-update",draft:!1,unlisted:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/packaging/your-first-package-update.md",tags:[],version:"current",lastUpdatedAt:1706650254,formattedLastUpdatedAt:"Jan 30, 2024",frontMatter:{title:"Your First Package Update",summary:"An example of how to build a package that exists in the Solus repos for new packagers."},sidebar:"packagingSidebar",previous:{title:"Requesting a Package",permalink:"/docs/packaging/procedures/request-a-package"}},c={},l=[{value:"Cloning and building <code>nano</code>",id:"cloning-and-building-nano",level:2},{value:"Installing Your New <code>nano</code> Package",id:"installing-your-new-nano-package",level:2},{value:"Returning to the Repository version (optional)",id:"returning-to-the-repository-version-optional",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"your-first-package-update",children:"Your First Package Update"}),"\n",(0,o.jsxs)(n.p,{children:["This page will guide you through the steps required to build your first package. This is really a test to make sure that your ",(0,o.jsx)(n.a,{href:"/docs/packaging/prepare-for-packaging",children:"build environment is set up correctly"}),". You will clone an existing package, build it, then install it, and finally remove it."]}),"\n",(0,o.jsxs)(n.h2,{id:"cloning-and-building-nano",children:["Cloning and building ",(0,o.jsx)(n.code,{children:"nano"})]}),"\n",(0,o.jsxs)(n.p,{children:["For this example we will use the text editor ",(0,o.jsx)(n.code,{children:"nano"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Change to your packaging directory. Your directory may have a different name or location:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"cd ~/solus-packages\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Switch to the directory containing the ",(0,o.jsx)(n.code,{children:"nano"})," recipe:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"cd packages/n/nano\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Alternatively, if you've set up the ",(0,o.jsx)(n.a,{href:"/docs/packaging/prepare-for-packaging#set-up-monorepo-helper-functions-optional",children:"Monorepo Helper Functions"})," you can replace the above to steps by these simple commands:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"gotosoluspkgs\ngotopkg nano\n"})}),"\n",(0,o.jsx)(n.p,{children:'Increase the release number by one ("bump" the package) and then check the results:'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"go-task bump\ngit diff\n"})}),"\n",(0,o.jsx)(n.p,{children:"You should see output from git similar to the following:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-diff",children:"diff --git a/package.yml b/package.yml\nindex 2ff1756..4bc344c 100644\n--- a/package.yml\n+++ b/package.yml\n@@ -1,6 +1,6 @@\n name       : nano\n version    : '7.2'\n-release    : 161\n+release    : 162\n source     :\n     - https://www.nano-editor.org/dist/v7/nano-7.2.tar.xz : 86f3442768bd2873cec693f83cdf80b4b444ad3cc14760b74361474fc87a4526\n homepage   : https://www.nano-editor.org\n"})}),"\n",(0,o.jsx)(n.p,{children:"Next, build the package:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"go-task\n"})}),"\n",(0,o.jsxs)(n.p,{children:["You will be prompted to enter your password by sudo, and the ",(0,o.jsx)(n.code,{children:"solbuild"})," tool will build the package.\nIf the build is successful, you will have a ",(0,o.jsx)(n.code,{children:"nano"})," package file with a name like ",(0,o.jsx)(n.code,{children:"nano-7.2-161-1-x86_64.eopkg"}),". Run the ",(0,o.jsx)(n.code,{children:"ls"})," tool to check the exact name:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ ls\nabi_used_libs     files       package.yml\nabi_used_symbols  nano-7.2-162-1-x86_64.eopkg  pspec_x86_64.xml\n"})}),"\n",(0,o.jsx)(n.p,{children:"Congratulations! You have successfully built your first package on Solus."}),"\n",(0,o.jsxs)(n.h2,{id:"installing-your-new-nano-package",children:["Installing Your New ",(0,o.jsx)(n.code,{children:"nano"})," Package"]}),"\n",(0,o.jsxs)(n.p,{children:["To install your new ",(0,o.jsx)(n.code,{children:"nano"})," package, run the following command. Your filename will probably be slightly different."]}),"\n",(0,o.jsx)(n.p,{children:"This is done so you can test that the package works as expected. Each package submission will require you to describe what testing you did."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo eopkg it nano-7.2-162-1-x86_64.eopkg\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Testing ",(0,o.jsx)(n.code,{children:"nano"})," is pretty easy. Testing other packages may be more complicated, depending on what they do."]}),"\n",(0,o.jsxs)(n.p,{children:["To test your newly built ",(0,o.jsx)(n.code,{children:"nano"})," package, simply run it on command line, then make sure you can edit and save a file."]}),"\n",(0,o.jsx)(n.h2,{id:"returning-to-the-repository-version-optional",children:"Returning to the Repository version (optional)"}),"\n",(0,o.jsx)(n.p,{children:"It is a good idea to remove the package you built, and return to the repository version, once you are done testing."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo eopkg it --reinstall nano\n"})})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>r,a:()=>i});var o=a(67294);const t={},s=o.createContext(t);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);