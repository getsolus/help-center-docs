"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[4796],{20708:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>r,contentTitle:()=>a,default:()=>u,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var i=s(85893),n=s(11151);const t={title:"Troubleshooting for Packagers",summary:"Common packaging issues and how to fix them"},a="Troubleshooting for Packagers",c={id:"packaging/troubleshooting-packaging",title:"Troubleshooting for Packagers",description:"This page covers common packaging issues and how to fix them. We also show you how to share your packaging work so you can ask for help in the Solus Matrix rooms.",source:"@site/docs/packaging/troubleshooting-packaging.md",sourceDirName:"packaging",slug:"/packaging/troubleshooting-packaging",permalink:"/docs/packaging/troubleshooting-packaging",draft:!1,unlisted:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/packaging/troubleshooting-packaging.md",tags:[],version:"current",lastUpdatedAt:1716075026e3,frontMatter:{title:"Troubleshooting for Packagers",summary:"Common packaging issues and how to fix them"},sidebar:"packagingSidebar",previous:{title:"Translation instructions",permalink:"/docs/packaging/translation-instructions"},next:{title:"Your First Package Update",permalink:"/docs/packaging/your-first-package-update"}},r={},l=[{value:"Asking for help",id:"asking-for-help",level:2},{value:"Common Issues",id:"common-issues",level:2},{value:"&quot;Error downloading https://github.com/project/blah/1.2.3.tar.gz: checksum mismatch&quot;",id:"error-downloading-httpsgithubcomprojectblah123targz-checksum-mismatch",level:3},{value:"&quot;Failed to build packages err=&quot;Failed to fetch source https://github.com/project/blah.git#{commit ref here}, reason: exit status 1\\n&quot;",id:"failed-to-build-packages-errfailed-to-fetch-source-httpsgithubcomprojectblahgitcommit-ref-here-reason-exit-status-1n",level:3},{value:"&quot;mount: /var/lib/solbuild/roots/unstable-x86_64: WARNING: source write-protected, mounted read-only&quot;",id:"mount-varlibsolbuildrootsunstable-x86_64-warning-source-write-protected-mounted-read-only",level:3},{value:"Solbuild is eating up all my disk space",id:"solbuild-is-eating-up-all-my-disk-space",level:3},{value:"An old package using <code>%configure</code> doesn&#39;t build",id:"an-old-package-using-configure-doesnt-build",level:3},{value:"Something is wrong with my solbuild profile",id:"something-is-wrong-with-my-solbuild-profile",level:3}];function d(e){const o={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.h1,{id:"troubleshooting-for-packagers",children:"Troubleshooting for Packagers"}),"\n",(0,i.jsx)(o.p,{children:"This page covers common packaging issues and how to fix them. We also show you how to share your packaging work so you can ask for help in the Solus Matrix rooms."}),"\n",(0,i.jsx)(o.h2,{id:"asking-for-help",children:"Asking for help"}),"\n",(0,i.jsxs)(o.p,{children:["When you run into a problem that you don't know how to fix you should ask for help in the ",(0,i.jsx)(o.a,{href:"/docs/user/contributing/getting-involved#matrix-chat",children:"Solus Packaging Matrix room"}),". But first you should send the ",(0,i.jsx)(o.code,{children:"package.yml"})," file and ",(0,i.jsx)(o.code,{children:"solbuild"})," output to somewhere others can see it; we recommend you use ",(0,i.jsx)(o.a,{href:"https://gist.github.com/",children:"GitHub Gists"}),". These commands assume you have set up ",(0,i.jsx)(o.code,{children:"github-cli"}),"."]}),"\n",(0,i.jsxs)(o.p,{children:["If you would rather not use Gists, use a pastebin site like ",(0,i.jsx)(o.a,{href:"https://bpa.st/",children:"bpaste"})]}),"\n",(0,i.jsxs)(o.p,{children:["Send the ",(0,i.jsx)(o.code,{children:"package.yml"})," file in the current directory to a public Gist:"]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-bash",children:"cat package.yml | gh gist create --public\n"})}),"\n",(0,i.jsxs)(o.p,{children:["Send the output of ",(0,i.jsx)(o.code,{children:"solbuild"})," to a public Gist:"]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-bash",children:"go-task &| gh gist create --public\n"})}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsxs)(o.em,{children:["Note: the usual ",(0,i.jsx)(o.code,{children:"solbuild"})," output will not be shown when this command is running, and it will take at least a few seconds"]})}),"\n",(0,i.jsxs)(o.p,{children:["Send the output of ",(0,i.jsx)(o.code,{children:"solbuild"})," to a new ",(0,i.jsx)(o.code,{children:"output.txt"})," file:"]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-bash",children:"go-task &| tee output.txt\n"})}),"\n",(0,i.jsx)(o.h2,{id:"common-issues",children:"Common Issues"}),"\n",(0,i.jsxs)(o.h3,{id:"error-downloading-httpsgithubcomprojectblah123targz-checksum-mismatch",children:['"Error downloading ',(0,i.jsx)(o.a,{href:"https://github.com/project/blah/1.2.3.tar.gz",children:"https://github.com/project/blah/1.2.3.tar.gz"}),': checksum mismatch"']}),"\n",(0,i.jsxs)(o.p,{children:["Your ",(0,i.jsx)(o.code,{children:"source"})," tarball does not match the checksum next to it in ",(0,i.jsx)(o.code,{children:"package.yml"}),". You should use ",(0,i.jsx)(o.code,{children:"go-task new"})," or ",(0,i.jsx)(o.code,{children:"go-task update"})," to write the correct checksum automatically."]}),"\n",(0,i.jsxs)(o.h3,{id:"failed-to-build-packages-errfailed-to-fetch-source-httpsgithubcomprojectblahgitcommit-ref-here-reason-exit-status-1n",children:['"Failed to build packages err="Failed to fetch source ',(0,i.jsx)(o.a,{href:"https://github.com/project/blah.git#%7Bcommit",children:"https://github.com/project/blah.git#{commit"}),' ref here}, reason: exit status 1\\n"']}),"\n",(0,i.jsxs)(o.p,{children:["If your build fails immediately this message, and you are using a ",(0,i.jsx)(o.strong,{children:"git source"}),", you should clear the ",(0,i.jsx)(o.code,{children:"solbuild"})," git sources cache:"]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-bash",children:"sudo rm -rf /var/lib/solbuild/sources/git\n"})}),"\n",(0,i.jsx)(o.h3,{id:"mount-varlibsolbuildrootsunstable-x86_64-warning-source-write-protected-mounted-read-only",children:'"mount: /var/lib/solbuild/roots/unstable-x86_64: WARNING: source write-protected, mounted read-only"'}),"\n",(0,i.jsxs)(o.p,{children:["If you interrupt a build sometimes ",(0,i.jsx)(o.code,{children:"solbuild"})," does not unmount cleanly, and you will need to unmount manually:"]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-bash",children:"sudo umount -f /var/lib/solbuild/roots/unstable-x86_64\n"})}),"\n",(0,i.jsx)(o.h3,{id:"solbuild-is-eating-up-all-my-disk-space",children:"Solbuild is eating up all my disk space"}),"\n",(0,i.jsxs)(o.p,{children:["The ",(0,i.jsx)(o.code,{children:"solbuild"})," cache at ",(0,i.jsx)(o.code,{children:"/var/cache/solbuild"}),' can grow to tens of gigabytes easily. Recover that disk space by running the "delete cache (',(0,i.jsx)(o.code,{children:"dc"}),')" command:']}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-bash",children:"sudo solbuild dc\n"})}),"\n",(0,i.jsxs)(o.h3,{id:"an-old-package-using-configure-doesnt-build",children:["An old package using ",(0,i.jsx)(o.code,{children:"%configure"})," doesn't build"]}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:["Replace ",(0,i.jsx)(o.code,{children:"%configure"})," with ",(0,i.jsx)(o.code,{children:"%reconfigure"})," and try again."]}),"\n",(0,i.jsxs)(o.li,{children:["If ",(0,i.jsx)(o.code,{children:"%reconfigure"})," produces the error ",(0,i.jsx)(o.code,{children:"configure: error: unrecognized option: '--runstatedir=/run'"}),", then use the new ",(0,i.jsx)(o.code,{children:"%configure_no_runstatedir"})," macro"]}),"\n"]}),"\n",(0,i.jsx)(o.h3,{id:"something-is-wrong-with-my-solbuild-profile",children:"Something is wrong with my solbuild profile"}),"\n",(0,i.jsxs)(o.p,{children:["Try running ",(0,i.jsx)(o.code,{children:"go-task solbuild-reset"}),". This will delete the solbuild cache and profile, then download and initialize a fresh copy of the default unstable profile."]}),"\n",(0,i.jsx)(o.p,{children:"###q Git commands fail and complain about package checks"}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-bash",children:"git commit --amend\nWRN packages/q/qqwing/package.yml:1: Package release is not incremented by 1\nERR packages/q/qqwing/pspec_x86_64.xml:1: Package release is not incremented by 1\nPackage checks failed: /home/user/solus-packages/common/CI/package_checks.py packages/q/qqwing/package.yml packages/q/qqwing/pspec_x86_64.xml\n"})}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:["Solus uses pre-commit hooks to check for simple errors. Right now, certain ",(0,i.jsx)(o.code,{children:"git"})," commands can fail, particularly ",(0,i.jsx)(o.code,{children:"git commit --amend"})," and ",(0,i.jsx)(o.code,{children:"git commit --fixup"})]}),"\n",(0,i.jsxs)(o.li,{children:["You can bypass the pre-commit hooks by adding the ",(0,i.jsx)(o.code,{children:"no-verify"})," option, for example: ",(0,i.jsx)(o.code,{children:"git commit --amend --no-verify"}),". Checks will still be run by GitHub after a Pull Request is created."]}),"\n"]})]})}function u(e={}){const{wrapper:o}={...(0,n.a)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,o,s)=>{s.d(o,{Z:()=>c,a:()=>a});var i=s(67294);const n={},t=i.createContext(n);function a(e){const o=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),i.createElement(t.Provider,{value:o},e.children)}}}]);