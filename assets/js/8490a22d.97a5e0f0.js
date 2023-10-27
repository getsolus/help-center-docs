"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[8575],{3905:(e,o,t)=>{t.d(o,{Zo:()=>c,kt:()=>k});var l=t(7294);function i(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function r(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);o&&(l=l.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,l)}return t}function n(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?r(Object(t),!0).forEach((function(o){i(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function a(e,o){if(null==e)return{};var t,l,i=function(e,o){if(null==e)return{};var t,l,i={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],o.indexOf(t)>=0||(i[t]=e[t]);return i}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=l.createContext({}),p=function(e){var o=l.useContext(s),t=o;return e&&(t="function"==typeof e?e(o):n(n({},o),e)),t},c=function(e){var o=p(e.components);return l.createElement(s.Provider,{value:o},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var o=e.children;return l.createElement(l.Fragment,{},o)}},g=l.forwardRef((function(e,o){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=p(t),g=i,k=d["".concat(s,".").concat(g)]||d[g]||u[g]||r;return t?l.createElement(k,n(n({ref:o},c),{},{components:t})):l.createElement(k,n({ref:o},c))}));function k(e,o){var t=arguments,i=o&&o.mdxType;if("string"==typeof e||i){var r=t.length,n=new Array(r);n[0]=g;var a={};for(var s in o)hasOwnProperty.call(o,s)&&(a[s]=o[s]);a.originalType=e,a[d]="string"==typeof e?e:i,n[1]=a;for(var p=2;p<r;p++)n[p]=t[p];return l.createElement.apply(null,n)}return l.createElement.apply(null,t)}g.displayName="MDXCreateElement"},9742:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>s,contentTitle:()=>n,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>p});var l=t(7462),i=(t(7294),t(3905));const r={title:"Local Repository",summary:"Packaging Using a Local Repository"},n="Packaging Using a Local Repository",a={unversionedId:"packaging/advanced-config/local-repository",id:"packaging/advanced-config/local-repository",title:"Local Repository",description:"This guide walks you through the steps necessary to tell solbuild how to utilise locally built .eopkg's that are not yet in the Solus repository.",source:"@site/docs/packaging/advanced-config/local-repository.md",sourceDirName:"packaging/advanced-config",slug:"/packaging/advanced-config/local-repository",permalink:"/docs/packaging/advanced-config/local-repository",draft:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/packaging/advanced-config/local-repository.md",tags:[],version:"current",lastUpdatedAt:1698416183,formattedLastUpdatedAt:"Oct 27, 2023",frontMatter:{title:"Local Repository",summary:"Packaging Using a Local Repository"},sidebar:"packagingSidebar",previous:{title:"Eopkg Configuration",permalink:"/docs/packaging/advanced-config/eopkg-configuration"},next:{title:"Git Basics",permalink:"/docs/packaging/git-basics"}},s={},p=[{value:"Install the local profile",id:"install-the-local-profile",level:2},{value:"Utilising the local repository",id:"utilising-the-local-repository",level:2},{value:"Best practices when working with a solbuild local repository",id:"best-practices-when-working-with-a-solbuild-local-repository",level:2},{value:"Eopkg and local repositories",id:"eopkg-and-local-repositories",level:2},{value:"Generating an eopkg index for the local solbuild repository",id:"generating-an-eopkg-index-for-the-local-solbuild-repository",level:3},{value:"A note on package resolution priority",id:"a-note-on-package-resolution-priority",level:3},{value:"Adding the local solbuild repo to the eopkg repository database",id:"adding-the-local-solbuild-repo-to-the-eopkg-repository-database",level:3},{value:"Checking the currently known eopkg repositories",id:"checking-the-currently-known-eopkg-repositories",level:4},{value:"Adding repositories in the correct order",id:"adding-repositories-in-the-correct-order",level:4},{value:"Re-checking the currently known eopkg repositories",id:"re-checking-the-currently-known-eopkg-repositories",level:4},{value:"Disabling the local solbuild repository in eopkg",id:"disabling-the-local-solbuild-repository-in-eopkg",level:4},{value:"Closing thoughts",id:"closing-thoughts",level:2}],c={toc:p},d="wrapper";function u(e){let{components:o,...t}=e;return(0,i.kt)(d,(0,l.Z)({},c,t,{components:o,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"packaging-using-a-local-repository"},"Packaging Using a Local Repository"),(0,i.kt)("p",null,"This guide walks you through the steps necessary to tell solbuild how to utilise locally built ",(0,i.kt)("inlineCode",{parentName:"p"},".eopkg's")," that are not yet in the Solus repository."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"It is not necessary to use a local repository to test most package submissions. The easier and recommended way is to install the eopkg files provided when a package is built. This is intended for use with stack upgrades, rebuilds, or new packages that need new dependencies that are not yet in the repo.")),(0,i.kt)("p",null,"We assume you have worked through the ",(0,i.kt)("a",{parentName:"p",href:"/docs/packaging"},"packaging")," material for creating a package with solbuild."),(0,i.kt)("h2",{id:"install-the-local-profile"},"Install the local profile"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo eopkg install solbuild-config-local-unstable\n")),(0,i.kt)("p",null,"You will also need to ensure that your common directory is fully up to date. Run ",(0,i.kt)("inlineCode",{parentName:"p"},"git pull")," from within the common directory to receive the latest updates."),(0,i.kt)("h2",{id:"utilising-the-local-repository"},"Utilising the local repository"),(0,i.kt)("p",null,"Solbuild has had support for local repos since its creation."),(0,i.kt)("p",null,"Improvements have been made to make it simple for contributors to test fixes out of the repo without having to wait for each patch to be merged. To include ",(0,i.kt)("inlineCode",{parentName:"p"},".eopkg")," files within a build, they need to be copied to the local repo directory ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/lib/solbuild/local"),"."),(0,i.kt)("p",null,"Note that you will need both the regular package and the ",(0,i.kt)("inlineCode",{parentName:"p"},"-devel")," package if you want to build another package against them using ",(0,i.kt)("inlineCode",{parentName:"p"},"pkgconfig()")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.yml file"),"."),(0,i.kt)("p",null,"With the ",(0,i.kt)("inlineCode",{parentName:"p"},".eopkg")," files now present in the local repo, we can make use of them in solbuild by running ",(0,i.kt)("inlineCode",{parentName:"p"},"go-task build-local")," rather than just  ",(0,i.kt)("inlineCode",{parentName:"p"},"go-task"),". This will index the local repository and prioritise their use over what is available in the Solus unstable repository."),(0,i.kt)("h2",{id:"best-practices-when-working-with-a-solbuild-local-repository"},"Best practices when working with a solbuild local repository"),(0,i.kt)("p",null,"There are some important things to know when working with local repositories, as they may lead to issues later on."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Solbuild will use your version of a package from the local repo regardless of whether there's a higher release in the Solus repository. Therefore you should only use ",(0,i.kt)("inlineCode",{parentName:"li"},"go-task build-local")," when required and also remove old packages from the local repo when no longer needed."),(0,i.kt)("li",{parentName:"ul"},"If the package is already installed in the solbuild image, the release must be higher for it to be installed.")),(0,i.kt)("h2",{id:"eopkg-and-local-repositories"},"Eopkg and local repositories"),(0,i.kt)("p",null,"As alluded to above, eopkg supports resolving packages from more than one repository."),(0,i.kt)("p",null,"In practice, this can be leveraged to make the developer workflow more convenient by ensuring that eopkg pulls from the local solbuild repository."),(0,i.kt)("h3",{id:"generating-an-eopkg-index-for-the-local-solbuild-repository"},"Generating an eopkg index for the local solbuild repository"),(0,i.kt)("p",null,"Before packages from the local solbuild repository can be resolved, an eopkg index file needs to be created."),(0,i.kt)("p",null,"As mentioned earlier, the local solbuild repo installed by the ",(0,i.kt)("inlineCode",{parentName:"p"},"solbuild-config-local-unstable")," package lives in ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/lib/solbuild/local"),"."),(0,i.kt)("p",null,"To generate or refresh the eopkg index in ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/lib/solbuild/local"),", simply run:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"sudo eopkg index --skip-signing /var/lib/solbuild/local/ --output /var/lib/solbuild/local/eopkg-index.xml")),(0,i.kt)("h3",{id:"a-note-on-package-resolution-priority"},"A note on package resolution priority"),(0,i.kt)("p",null,"It bears repeating that in its current incarnation, eopkg will always prefer packages from the topmost repository listed with ",(0,i.kt)("inlineCode",{parentName:"p"},"eopkg lr"),"."),(0,i.kt)("p",null,"In other words, if a package exists both in the local solbuild repository and the official upstream Solus repository, eopkg will only consider the package from the first repository listed with ",(0,i.kt)("inlineCode",{parentName:"p"},"eopkg lr")," ",(0,i.kt)("em",{parentName:"p"},"regardless of its release number"),"."),(0,i.kt)("h3",{id:"adding-the-local-solbuild-repo-to-the-eopkg-repository-database"},"Adding the local solbuild repo to the eopkg repository database"),(0,i.kt)("p",null,"The easiest way to add the local solbuild repo to the list of repositories known to eopkg is to add the local solbuild repo and then ",(0,i.kt)("em",{parentName:"p"},"re-add")," the official Solus repo."),(0,i.kt)("h4",{id:"checking-the-currently-known-eopkg-repositories"},"Checking the currently known eopkg repositories"),(0,i.kt)("p",null,"But first, let's list the repositories currently known to eopkg with ",(0,i.kt)("inlineCode",{parentName:"p"},"eopkg lr")," -- this should produce output similar to:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Solus [active]\n   https://cdn.getsol.us/repo/unstable/eopkg-index.xml.xz\n")),(0,i.kt)("h4",{id:"adding-repositories-in-the-correct-order"},"Adding repositories in the correct order"),(0,i.kt)("p",null,"Now the repositories need to be added to account for the desired dependency resolution order:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo eopkg ar Local /var/lib/solbuild/local/eopkg-index.xml.xz\nsudo eopkg ar Solus https://cdn.getsol.us/repo/unstable/eopkg-index.xml.xz\n")),(0,i.kt)("p",null,"This should yield output similar to:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ sudo eopkg ar Local /var/lib/solbuild/local/eopkg-index.xml.xz\nRepo Local added to system.\nUpdating repository: Local\nPackage database updated.\n$ sudo eopkg ar Solus https://cdn.getsol.us/repo/unstable/eopkg-index.xml.xz\nRepo already present with name Solus and same URL. Removing first.\nRepo Solus added to system.\nUpdating repository: Solus\neopkg-index.xml.xz.sha1sum     (40.0  B)100%    765.61 KB/s [00:00:00] [complete]\neopkg-index.xml.xz             (2.1 MB)100%    914.38 KB/s [00:00:01] [complete]\nPackage database updated.\n")),(0,i.kt)("h4",{id:"re-checking-the-currently-known-eopkg-repositories"},"Re-checking the currently known eopkg repositories"),(0,i.kt)("p",null,"All that is left now is to check that the dependency resolution order is correct so that packages from the local solbuild repository are preferred over the upstream Solus repository."),(0,i.kt)("p",null,"Thus, ",(0,i.kt)("inlineCode",{parentName:"p"},"eopkg lr")," should yield output similar to:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ eopkg lr\nLocal [active]\n   /var/lib/solbuild/local/eopkg-index.xml.xz\nSolus [active]\n   https://cdn.getsol.us/repo/unstable/eopkg-index.xml.xz\n")),(0,i.kt)("h4",{id:"disabling-the-local-solbuild-repository-in-eopkg"},"Disabling the local solbuild repository in eopkg"),(0,i.kt)("p",null,"To reset the system to use packages from the official Solus repository exclusively, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Local")," eopkg repository can be disabled with the command ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo eopkg disable-repo Local"),"."),(0,i.kt)("p",null,"The output should look similar to:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ sudo eopkg disable-repo Local\n$ sudo eopkg lr\nLocal [inactive]\n   /var/lib/solbuild/local/eopkg-index.xml.xz\nSolus [active]\n   https://cdn.getsol.us/repo/unstable/eopkg-index.xml.xz\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Local")," eopkg repository can be re-enabled with ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo eopkg enable-repo Local"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ sudo eopkg enable-repo Local\n$ sudo eopkg lr\nLocal [active]\n   /var/lib/solbuild/local/eopkg-index.xml.xz\nSolus [active]\n   https://cdn.getsol.us/repo/unstable/eopkg-index.xml.xz\n")),(0,i.kt)("h2",{id:"closing-thoughts"},"Closing thoughts"),(0,i.kt)("p",null,"Congratulations on making it this far! Your system should now be ready for convenient deployment and testing of locally built packages."),(0,i.kt)("p",null,"Note that packages not present in the local solbuild repository will be fetched from the upstream official Solus (unstable) repository."),(0,i.kt)("p",null,"Finally, keep in mind that the eopkg index needs to be refreshed whenever you add or remove locally built packages to your local solbuild repository -- otherwise eopkg won't know that new packages are available / have been removed from the repository."))}u.isMDXComponent=!0}}]);