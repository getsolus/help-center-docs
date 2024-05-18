"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[8575],{27781:(e,o,l)=>{l.r(o),l.d(o,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>n,metadata:()=>t,toc:()=>c});var i=l(85893),s=l(11151);const n={title:"Local Repository",summary:"Packaging using a local repository"},r="Packaging using a local repository",t={id:"packaging/advanced-config/local-repository",title:"Local Repository",description:"This guide walks you through the steps necessary to tell solbuild how to use your locally built .eopkg files that are not yet in the Solus repository.",source:"@site/docs/packaging/advanced-config/local-repository.md",sourceDirName:"packaging/advanced-config",slug:"/packaging/advanced-config/local-repository",permalink:"/docs/packaging/advanced-config/local-repository",draft:!1,unlisted:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/packaging/advanced-config/local-repository.md",tags:[],version:"current",lastUpdatedAt:171607565e4,frontMatter:{title:"Local Repository",summary:"Packaging using a local repository"},sidebar:"packagingSidebar",previous:{title:"Eopkg Configuration",permalink:"/docs/packaging/advanced-config/eopkg-configuration"},next:{title:"Git Basics",permalink:"/docs/packaging/git-basics"}},a={},c=[{value:"Install the local profile",id:"install-the-local-profile",level:2},{value:"Using the local repository",id:"using-the-local-repository",level:2},{value:"Copying .eopkg files to the local repository",id:"copying-eopkg-files-to-the-local-repository",level:3},{value:"Using the local repository to build a package",id:"using-the-local-repository-to-build-a-package",level:3},{value:"Best practices when working with a solbuild local repository",id:"best-practices-when-working-with-a-solbuild-local-repository",level:3},{value:"Installing packages from the local repository index",id:"installing-packages-from-the-local-repository-index",level:2},{value:"Creating or updating the local repository index",id:"creating-or-updating-the-local-repository-index",level:3},{value:"Package resolution priority in eopkg",id:"package-resolution-priority-in-eopkg",level:3},{value:"Adding the local repository index to the eopkg repository database",id:"adding-the-local-repository-index-to-the-eopkg-repository-database",level:3},{value:"Disabling the local solbuild repository in eopkg",id:"disabling-the-local-solbuild-repository-in-eopkg",level:4},{value:"Closing thoughts",id:"closing-thoughts",level:2}];function d(e){const o={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.h1,{id:"packaging-using-a-local-repository",children:"Packaging using a local repository"}),"\n",(0,i.jsxs)(o.p,{children:["This guide walks you through the steps necessary to tell ",(0,i.jsx)(o.code,{children:"solbuild"})," how to use your locally built ",(0,i.jsx)(o.code,{children:".eopkg"})," files that are not yet in the Solus repository."]}),"\n",(0,i.jsx)(o.admonition,{type:"note",children:(0,i.jsxs)(o.p,{children:["It is not necessary to use a local repository to test most package submissions. The easier and recommended way is to install the ",(0,i.jsx)(o.code,{children:"eopkg"})," files created when a package is built. This procedure is intended for use with stack upgrades, rebuilds, or new packages that need new dependencies that are not yet in the repository."]})}),"\n",(0,i.jsxs)(o.p,{children:["We assume you have worked through the ",(0,i.jsx)(o.a,{href:"/docs/packaging",children:"packaging"})," material for creating a package with ",(0,i.jsx)(o.code,{children:"solbuild"}),"."]}),"\n",(0,i.jsx)(o.h2,{id:"install-the-local-profile",children:"Install the local profile"}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-bash",children:"sudo eopkg install solbuild-config-local-unstable\n"})}),"\n",(0,i.jsxs)(o.p,{children:["You will also need to ensure that your repository is fully up to date. See ",(0,i.jsx)(o.a,{href:"/docs/packaging/update-dev-environment",children:"Update Your Development Environment"})]}),"\n",(0,i.jsx)(o.h2,{id:"using-the-local-repository",children:"Using the local repository"}),"\n",(0,i.jsx)(o.h3,{id:"copying-eopkg-files-to-the-local-repository",children:"Copying .eopkg files to the local repository"}),"\n",(0,i.jsxs)(o.p,{children:["To use your locally built ",(0,i.jsx)(o.code,{children:".eopkg"})," files as a dependencies for another package, you must copy the regular package file, and any accompanying ",(0,i.jsx)(o.code,{children:"-devel"})," packages to the local repository directory ",(0,i.jsx)(o.code,{children:"/var/lib/solbuild/local"}),"."]}),"\n",(0,i.jsxs)(o.p,{children:["For example, building the package ",(0,i.jsx)(o.code,{children:"libcmis"})," produces the packages ",(0,i.jsx)(o.code,{children:"libcmis"})," and ",(0,i.jsx)(o.code,{children:"libcmis-devel"}),". Both should be copied to the local repository to build other packages against ",(0,i.jsx)(o.code,{children:"libcmis"})]}),"\n",(0,i.jsxs)(o.p,{children:["To copy all ",(0,i.jsx)(o.code,{children:".eopkg"})," files within a directory to the local repository, use the following command:"]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-bash",children:"sudo cp *.eopkg /var/lib/solbuild/local\n"})}),"\n",(0,i.jsx)(o.h3,{id:"using-the-local-repository-to-build-a-package",children:"Using the local repository to build a package"}),"\n",(0,i.jsxs)(o.p,{children:["With the ",(0,i.jsx)(o.code,{children:".eopkg"})," files now present in the local repository, you can use them to build a package by running ",(0,i.jsx)(o.code,{children:"go-task build-local"}),", rather than just ",(0,i.jsx)(o.code,{children:"go-task"}),", and ",(0,i.jsx)(o.code,{children:"solbuild"})," will prefer your packages over packages found in the Solus repository."]}),"\n",(0,i.jsxs)(o.p,{children:["Every time you run ",(0,i.jsx)(o.code,{children:"go-task build-local"}),", all ",(0,i.jsx)(o.code,{children:"eopkg"})," files in the local repository will be re-indexed."]}),"\n",(0,i.jsx)(o.h3,{id:"best-practices-when-working-with-a-solbuild-local-repository",children:"Best practices when working with a solbuild local repository"}),"\n",(0,i.jsx)(o.p,{children:"There are some important things to know when working with local repositories, as they may lead to issues later on."}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.code,{children:"solbuild"})," will use your version of a package from the local repository regardless of whether there's a higher release in the Solus repository. Therefore you should only use ",(0,i.jsx)(o.code,{children:"go-task build-local"})," when required and also remove old packages from the local repository when they are no longer needed."]}),"\n",(0,i.jsxs)(o.li,{children:["If the package is already installed in the ",(0,i.jsx)(o.code,{children:"solbuild"})," image, the release must be higher for it to be installed."]}),"\n"]}),"\n",(0,i.jsx)(o.h2,{id:"installing-packages-from-the-local-repository-index",children:"Installing packages from the local repository index"}),"\n",(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.code,{children:"eopkg"})," supports resolving packages from more than one repository. This can be used to configure ",(0,i.jsx)(o.code,{children:"eopkg"})," to prefer installing local repository packages over packages from the Solus repository."]}),"\n",(0,i.jsxs)(o.p,{children:["This requires an existing local repository index. If you have used the command ",(0,i.jsx)(o.code,{children:"go-task build-local"}),", then an index was created automatically. Otherwise, you must create one."]}),"\n",(0,i.jsx)(o.h3,{id:"creating-or-updating-the-local-repository-index",children:"Creating or updating the local repository index"}),"\n",(0,i.jsxs)(o.p,{children:["To generate or refresh the ",(0,i.jsx)(o.code,{children:"eopkg"})," index in ",(0,i.jsx)(o.code,{children:"/var/lib/solbuild/local"}),", use the following command:"]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-bash",children:"sudo eopkg index --skip-signing /var/lib/solbuild/local/ --output /var/lib/solbuild/local/eopkg-index.xml\n"})}),"\n",(0,i.jsxs)(o.p,{children:["Or, if you have our ",(0,i.jsx)(o.a,{href:"/docs/packaging/prepare-for-packaging#set-up-repository-helper-functions-optional",children:"helper functions"})," set up, you get the same result by running:"]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-bash",children:"localrepo_reindex\n"})}),"\n",(0,i.jsxs)(o.p,{children:["Keep in mind that the index needs to be refreshed whenever you add or remove locally built packages to your local repository. Otherwise, ",(0,i.jsx)(o.code,{children:"eopkg"})," won't know that new packages are available or have been removed from the local repository."]}),"\n",(0,i.jsx)(o.h3,{id:"package-resolution-priority-in-eopkg",children:"Package resolution priority in eopkg"}),"\n",(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.code,{children:"eopkg"})," will always prefer packages from the topmost repository listed with ",(0,i.jsx)(o.code,{children:"eopkg lr"}),"."]}),"\n",(0,i.jsxs)(o.p,{children:["In other words, if a package exists both in the local repository and the Solus repository, ",(0,i.jsx)(o.code,{children:"eopkg"})," will only consider the package from the first repository listed with ",(0,i.jsx)(o.code,{children:"eopkg lr"})," ",(0,i.jsx)(o.em,{children:"regardless of its release number"}),"."]}),"\n",(0,i.jsx)(o.h3,{id:"adding-the-local-repository-index-to-the-eopkg-repository-database",children:"Adding the local repository index to the eopkg repository database"}),"\n",(0,i.jsxs)(o.p,{children:["The easiest way to add the local repository index to the list of repositories known to ",(0,i.jsx)(o.code,{children:"eopkg"}),", in the correct order, is to add the local repository and then ",(0,i.jsx)(o.em,{children:"re-add"})," the official Solus repository:"]}),"\n",(0,i.jsxs)(o.ol,{children:["\n",(0,i.jsxs)(o.li,{children:["First, let's list the repositories currently known to ",(0,i.jsx)(o.code,{children:"eopkg"})," with ",(0,i.jsx)(o.code,{children:"eopkg lr"}),". This should produce output similar to:"]}),"\n"]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{children:"Solus [active]\n   https://cdn.getsol.us/repo/unstable/eopkg-index.xml.xz\n"})}),"\n",(0,i.jsxs)(o.ol,{start:"2",children:["\n",(0,i.jsx)(o.li,{children:"Now the repositories need to be added to account for the desired dependency resolution order:"}),"\n"]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-bash",children:"sudo eopkg ar Local /var/lib/solbuild/local/eopkg-index.xml.xz\nsudo eopkg ar Solus https://cdn.getsol.us/repo/unstable/eopkg-index.xml.xz\n"})}),"\n",(0,i.jsx)(o.p,{children:"This should yield output similar to:"}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{children:"$ sudo eopkg ar Local /var/lib/solbuild/local/eopkg-index.xml.xz\nRepo Local added to system.\nUpdating repository: Local\nPackage database updated.\n$ sudo eopkg ar Solus https://cdn.getsol.us/repo/unstable/eopkg-index.xml.xz\nRepo already present with name Solus and same URL. Removing first.\nRepo Solus added to system.\nUpdating repository: Solus\neopkg-index.xml.xz.sha1sum     (40.0  B)100%    765.61 KB/s [00:00:00] [complete]\neopkg-index.xml.xz             (2.1 MB)100%    914.38 KB/s [00:00:01] [complete]\nPackage database updated.\n"})}),"\n",(0,i.jsxs)(o.ol,{start:"3",children:["\n",(0,i.jsxs)(o.li,{children:["Check that the dependency resolution order is correct so that packages from the local ",(0,i.jsx)(o.code,{children:"solbuild"})," repository are preferred over the upstream Solus repository."]}),"\n"]}),"\n",(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.code,{children:"eopkg lr"})," should yield output similar to:"]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{children:"$ eopkg lr\nLocal [active]\n   /var/lib/solbuild/local/eopkg-index.xml.xz\nSolus [active]\n   https://cdn.getsol.us/repo/unstable/eopkg-index.xml.xz\n"})}),"\n",(0,i.jsx)(o.h4,{id:"disabling-the-local-solbuild-repository-in-eopkg",children:"Disabling the local solbuild repository in eopkg"}),"\n",(0,i.jsxs)(o.p,{children:['To reset the system to use only packages from the official Solus repository, disable the "Local" ',(0,i.jsx)(o.code,{children:"eopkg"})," repository using the command ",(0,i.jsx)(o.code,{children:"sudo eopkg disable-repo Local"}),"."]}),"\n",(0,i.jsx)(o.p,{children:"The output should look similar to:"}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{children:"$ sudo eopkg disable-repo Local\n$ sudo eopkg lr\nLocal [inactive]\n   /var/lib/solbuild/local/eopkg-index.xml.xz\nSolus [active]\n   https://cdn.getsol.us/repo/unstable/eopkg-index.xml.xz\n"})}),"\n",(0,i.jsxs)(o.p,{children:['The "Local" ',(0,i.jsx)(o.code,{children:"eopkg"})," repository can be re-enabled with ",(0,i.jsx)(o.code,{children:"sudo eopkg enable-repo Local"}),"."]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{children:"$ sudo eopkg enable-repo Local\n$ sudo eopkg lr\nLocal [active]\n   /var/lib/solbuild/local/eopkg-index.xml.xz\nSolus [active]\n   https://cdn.getsol.us/repo/unstable/eopkg-index.xml.xz\n"})}),"\n",(0,i.jsx)(o.h2,{id:"closing-thoughts",children:"Closing thoughts"}),"\n",(0,i.jsx)(o.p,{children:"Congratulations on making it this far! Your system should now be ready for convenient deployment and testing of locally built packages."})]})}function p(e={}){const{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,o,l)=>{l.d(o,{Z:()=>t,a:()=>r});var i=l(67294);const s={},n=i.createContext(s);function r(e){const o=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(n.Provider,{value:o},e.children)}}}]);