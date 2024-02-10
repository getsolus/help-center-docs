"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[7465],{62069:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var a=n(85893),s=n(11151);const o={title:"Packaging Changes",summary:"Changes to packaging environment and instructions",sidebar_position:7},t="Packaging Changes",r={id:"packaging/packaging-changes",title:"Packaging Changes",description:"This page is meant to serve as a changelog of sorts for the Solus packaging environment and the packaging instructions. Refer to specific help pages for more details.",source:"@site/docs/packaging/packaging-changes.md",sourceDirName:"packaging",slug:"/packaging/packaging-changes",permalink:"/docs/packaging/packaging-changes",draft:!1,unlisted:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/packaging/packaging-changes.md",tags:[],version:"current",lastUpdatedAt:1707591920,formattedLastUpdatedAt:"Feb 10, 2024",sidebarPosition:7,frontMatter:{title:"Packaging Changes",summary:"Changes to packaging environment and instructions",sidebar_position:7},sidebar:"packagingSidebar",previous:{title:"Submitting a Pull Request for Review",permalink:"/docs/packaging/submitting-a-pull-request"},next:{title:"Advanced Configuration",permalink:"/docs/category/advanced-configuration"}},l={},c=[{value:"2024",id:"2024",level:2},{value:"February",id:"february",level:3},{value:"Begin adding <code>monitoring.yml</code> to packages",id:"begin-adding-monitoringyml-to-packages",level:4},{value:"2023",id:"2023",level:2},{value:"October",id:"october",level:3},{value:"Adding <code>checkdeps</code> in <code>package.yml</code>",id:"adding-checkdeps-in-packageyml",level:4},{value:"Git hooks",id:"git-hooks",level:4},{value:"Requiring <code>homepage</code> in <code>package.yml</code>",id:"requiring-homepage-in-packageyml",level:4},{value:"Recommending amending commits in Pull Requests",id:"recommending-amending-commits-in-pull-requests",level:4},{value:"September",id:"september",level:3},{value:"Switch to asterisk bolding for PR template",id:"switch-to-asterisk-bolding-for-pr-template",level:4},{value:"Switching From <code>make</code> to <code>go-task</code>",id:"switching-from-make-to-go-task",level:4},{value:"GitHub Monorepo Migration",id:"github-monorepo-migration",level:4},{value:"August",id:"august",level:3},{value:"Initial GitHub Migration from old Phabricator Dev Tracker",id:"initial-github-migration-from-old-phabricator-dev-tracker",level:4},{value:"April",id:"april",level:3},{value:"2022 and Earlier",id:"2022-and-earlier",level:2}];function d(e){const i={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.h1,{id:"packaging-changes",children:"Packaging Changes"}),"\n",(0,a.jsx)(i.p,{children:"This page is meant to serve as a changelog of sorts for the Solus packaging environment and the packaging instructions. Refer to specific help pages for more details."}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"This list is not exhaustive"}),"\n",(0,a.jsxs)(i.li,{children:["This list is in ",(0,a.jsx)(i.em,{children:"reverse chronological order"})," (newest first)"]}),"\n"]}),"\n",(0,a.jsx)(i.h2,{id:"2024",children:"2024"}),"\n",(0,a.jsx)(i.h3,{id:"february",children:"February"}),"\n",(0,a.jsxs)(i.h4,{id:"begin-adding-monitoringyml-to-packages",children:["Begin adding ",(0,a.jsx)(i.code,{children:"monitoring.yml"})," to packages"]}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["A new per-package file was introduced: ",(0,a.jsx)(i.code,{children:"monitoring.yml"}),". Used to monitor packages for releases and security advisories; see ",(0,a.jsx)(i.a,{href:"/docs/packaging/monitoring.yml",children:"monitoring.yml"}),"."]}),"\n",(0,a.jsx)(i.li,{children:"This is not enforced by automatic checks yet, but we may ask that it be added."}),"\n"]}),"\n",(0,a.jsx)(i.h2,{id:"2023",children:"2023"}),"\n",(0,a.jsx)(i.h3,{id:"october",children:"October"}),"\n",(0,a.jsxs)(i.h4,{id:"adding-checkdeps-in-packageyml",children:["Adding ",(0,a.jsx)(i.code,{children:"checkdeps"})," in ",(0,a.jsx)(i.code,{children:"package.yml"})]}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["A new type of packaging dependency was added: ",(0,a.jsx)(i.code,{children:"checkdeps"}),". They behave the same as ",(0,a.jsx)(i.code,{children:"builddeps"}),", except they are not considered when determining build order for automatic builds. See the ",(0,a.jsx)(i.a,{href:"/docs/packaging/package.yml",children:"package.yml page"}),"."]}),"\n"]}),"\n",(0,a.jsx)(i.h4,{id:"git-hooks",children:"Git hooks"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["Run ",(0,a.jsx)(i.code,{children:"go-task init"})," to initialize Git hooks for the packages repository. See ",(0,a.jsx)(i.a,{href:"/docs/packaging/prepare-for-packaging#initialize-git-hooks",children:"Prepare for packaging"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(i.h4,{id:"requiring-homepage-in-packageyml",children:["Requiring ",(0,a.jsx)(i.code,{children:"homepage"})," in ",(0,a.jsx)(i.code,{children:"package.yml"})]}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["The ",(0,a.jsx)(i.code,{children:"homepage"})," key in ",(0,a.jsx)(i.code,{children:"package.yml"})," has become mandatory. Use the address to the upstream source repository (eg: the GitHub page) if a package does not have a homepage."]}),"\n",(0,a.jsx)(i.li,{children:"This is enforced by checks on all pull requests."}),"\n"]}),"\n",(0,a.jsx)(i.h4,{id:"recommending-amending-commits-in-pull-requests",children:"Recommending amending commits in Pull Requests"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["Amending commits and force pushing the changes works better with our build tooling.","\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"It was thought that abandoning this practice would be okay, but it turns out not to be the case."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(i.h3,{id:"september",children:"September"}),"\n",(0,a.jsx)(i.h4,{id:"switch-to-asterisk-bolding-for-pr-template",children:"Switch to asterisk bolding for PR template"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["The initial PR template for the ",(0,a.jsx)(i.code,{children:"packages"})," repository used markdown header styling (",(0,a.jsx)(i.code,{children:"## Heading text"}),"), but ",(0,a.jsx)(i.code,{children:"solus-sc"})," does not render that styling, so the template was changed to asterisk bolding (",(0,a.jsx)(i.code,{children:"**Heading text**"}),")"]}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://github.com/getsolus/packages/pull/366",children:"https://github.com/getsolus/packages/pull/366"})}),"\n"]}),"\n",(0,a.jsxs)(i.h4,{id:"switching-from-make-to-go-task",children:["Switching From ",(0,a.jsx)(i.code,{children:"make"})," to ",(0,a.jsx)(i.code,{children:"go-task"})]}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["All packaging actions are now handled by ",(0,a.jsx)(i.code,{children:"go-task"})," rather than ",(0,a.jsx)(i.code,{children:"make"}),".","\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["Building a package can be done using ",(0,a.jsx)(i.code,{children:"go-task"})," rather than ",(0,a.jsx)(i.code,{children:"make"}),"."]}),"\n",(0,a.jsxs)(i.li,{children:["Commands are the same: ",(0,a.jsx)(i.code,{children:"make local"}),", for example, is replaced by ",(0,a.jsx)(i.code,{children:"go-task local"}),"."]}),"\n",(0,a.jsxs)(i.li,{children:["You can see all available commands by either browsing to ",(0,a.jsx)(i.code,{children:"Taskfile.yml"})," in the ",(0,a.jsxs)(i.a,{href:"https://github.com/getsolus/packages/blob/main/Taskfile.yml",children:[(0,a.jsx)(i.code,{children:"packages"})," repo"]})," OR running ",(0,a.jsx)(i.code,{children:"go-task -l"})," somewhere in your updated clone of the packages git monorepo."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["Packagers should install ",(0,a.jsx)(i.code,{children:"go-task"})," on their machines if they have not already."]}),"\n",(0,a.jsxs)(i.li,{children:["The ",(0,a.jsx)(i.code,{children:"Makefile"})," included with every package is no longer required. Please delete it from a package when updating, and do not include it when making the initial commit of a new package."]}),"\n"]}),"\n",(0,a.jsx)(i.h4,{id:"github-monorepo-migration",children:"GitHub Monorepo Migration"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["Packages were moved from the initial multirepo setup to the ",(0,a.jsx)(i.code,{children:"packages"})," monorepo: ",(0,a.jsx)(i.a,{href:"https://github.com/getsolus/packages",children:"github.com/getsolus/packages"})," Now packagers only need to clone/fork one repository for all packages."]}),"\n",(0,a.jsx)(i.li,{children:"The recommended migration strategy is to fork this repository and start with a clean clone. Any local changes to packages should be moved over manually."}),"\n",(0,a.jsxs)(i.li,{children:["Packagers should now title commits like ",(0,a.jsx)(i.code,{children:"packagename: Action"}),"; for example: ",(0,a.jsx)(i.code,{children:"nano: Update to 9.0"}),". Generic titles like ",(0,a.jsx)(i.code,{children:"Update to 9.0"})," should not be used, except for rebuilds."]}),"\n",(0,a.jsx)(i.li,{children:"Packagers should use the pull request template for package updates, filling out the Summary and Test Plan sections as usual."}),"\n"]}),"\n",(0,a.jsx)(i.h3,{id:"august",children:"August"}),"\n",(0,a.jsx)(i.h4,{id:"initial-github-migration-from-old-phabricator-dev-tracker",children:"Initial GitHub Migration from old Phabricator Dev Tracker"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.em,{children:"This change was superseded by the later monorepo migration."})}),"\n",(0,a.jsxs)(i.li,{children:["The new multirepo setup for packages was under ",(0,a.jsx)(i.code,{children:"github.com/solus-packages"})," organization, packages were updated with PRs to individual repositories."]}),"\n",(0,a.jsxs)(i.li,{children:["Issues were migrated to ",(0,a.jsx)(i.code,{children:"github.com/getsolus/packages"})," from Phabricator. ",(0,a.jsx)(i.em,{children:"Closed issues were not migrated."})]}),"\n",(0,a.jsxs)(i.li,{children:["A read-only instance of the old Dev Tracker is available at ",(0,a.jsx)(i.a,{href:"https://phab.getsol.us",children:"phab.getsol.us"}),". ",(0,a.jsx)(i.em,{children:"This will eventually be shut down."})]}),"\n"]}),"\n",(0,a.jsx)(i.h3,{id:"april",children:"April"}),"\n",(0,a.jsxs)(i.p,{children:["The repository index was moved to ",(0,a.jsx)(i.code,{children:"cdn.getsol.us"}),"."]}),"\n",(0,a.jsx)(i.h2,{id:"2022-and-earlier",children:"2022 and Earlier"}),"\n",(0,a.jsx)(i.p,{children:"Not included in this list."})]})}function h(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,i,n)=>{n.d(i,{Z:()=>r,a:()=>t});var a=n(67294);const s={},o=a.createContext(s);function t(e){const i=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),a.createElement(o.Provider,{value:i},e.children)}}}]);