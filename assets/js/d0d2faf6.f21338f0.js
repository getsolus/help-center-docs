"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[4507],{68021:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(85893),t=n(11151);const r={title:"Release Processes",summary:"Release Processes"},o="Release Processes",i={id:"packaging/procedures/release-processes",title:"Release Processes",description:"This post is intended as both information to users, and guidelines for developers and contributors of Solus. Solus employs a formal architecture to enable the curated rolling release model, which is made possible through the use of ferryd, solbuild and a split-repository model.",source:"@site/docs/packaging/procedures/release-processes.md",sourceDirName:"packaging/procedures",slug:"/packaging/procedures/release-processes",permalink:"/docs/packaging/procedures/release-processes",draft:!1,unlisted:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/packaging/procedures/release-processes.md",tags:[],version:"current",lastUpdatedAt:1716052737e3,frontMatter:{title:"Release Processes",summary:"Release Processes"},sidebar:"packagingSidebar",previous:{title:"Package Inclusion Policy",permalink:"/docs/packaging/procedures/package-inclusion"},next:{title:"Requesting a Package Update",permalink:"/docs/packaging/procedures/request-a-package-update"}},l={},c=[{value:"Repository staging",id:"repository-staging",level:2},{value:"Weekly Sync - Every Friday",id:"weekly-sync---every-friday",level:2},{value:"Package deprecation",id:"package-deprecation",level:2},{value:"Deprecating a package",id:"deprecating-a-package",level:3},{value:"Un-deprecating a package",id:"un-deprecating-a-package",level:3},{value:"Major stack changes",id:"major-stack-changes",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h1,{id:"release-processes",children:"Release Processes"}),"\n",(0,a.jsx)(s.p,{children:"This post is intended as both information to users, and guidelines for developers and contributors of Solus. Solus employs a formal architecture to enable the curated rolling release model, which is made possible through the use of ferryd, solbuild and a split-repository model."}),"\n",(0,a.jsx)(s.h2,{id:"repository-staging",children:"Repository staging"}),"\n",(0,a.jsxs)(s.p,{children:["All package builds for Solus, updates or otherwise, will always enter the ",(0,a.jsx)(s.code,{children:"unstable"})," repository first. Consequently, all Solus developers and contributors should ensure ",(0,a.jsx)(s.code,{children:"solbuild"})," is configured to use the unstable target. As and when the weekly stabilization efforts have completed, the ",(0,a.jsx)(s.code,{children:"unstable"})," repository will be pulled into ",(0,a.jsx)(s.code,{children:"shannon"}),", the stable target."]}),"\n",(0,a.jsxs)(s.p,{children:["This effectively means that ",(0,a.jsx)(s.code,{children:"shannon"})," is a rolling snapshot of ",(0,a.jsx)(s.code,{children:"unstable"}),". Note that the weekly sync will not make each repository match identically - the ",(0,a.jsx)(s.strong,{children:"tip"})," of every package in ",(0,a.jsx)(s.code,{children:"unstable"})," will be merged into ",(0,a.jsx)(s.code,{children:"shannon"}),". This ensures that the ",(0,a.jsx)(s.code,{children:"shannon"})," update path is cost-efficient in terms of package availability, and that the delta packages provided on ",(0,a.jsx)(s.code,{children:"shannon"})," match the true update path for those users. Lastly, this also ensures that there are no unintended packages arriving in shannon from older builds."]}),"\n",(0,a.jsxs)(s.p,{children:["Solus installations always default to the ",(0,a.jsx)(s.code,{children:"shannon"})," repository, making shannon the published distribution, and ",(0,a.jsx)(s.code,{children:"unstable"})," the development distribution."]}),"\n",(0,a.jsx)(s.h2,{id:"weekly-sync---every-friday",children:"Weekly Sync - Every Friday"}),"\n",(0,a.jsx)(s.p,{children:"At minimum there shall be one sync per week - this will always be on a Friday. As a result, users are never more than a few days away from unstable. This allows packagers to make deeper changes to Solus and still have time to stabilize the repository before releasing changes on the Friday."}),"\n",(0,a.jsxs)(s.p,{children:["Given the high volume of changes within Solus in any sync window, the Friday sync should be viewed more as a release than a simple sync. All developers and contributors should try their best to ensure that their changes do not introduce regressions, and that existing update paths are ",(0,a.jsx)(s.strong,{children:"always respected"}),"."]}),"\n",(0,a.jsx)(s.p,{children:"Minor syncs during the week, and correctional syncs shortly after the Friday-sync, are permitted assuming they do not introduce breaking changes to shannon. These may include minor packaging changes, security updates, etc."}),"\n",(0,a.jsx)(s.h2,{id:"package-deprecation",children:"Package deprecation"}),"\n",(0,a.jsx)(s.p,{children:"There are times when a package may need to be deprecated or even renamed. Packagers owning these changes must first communicate the need to ensure a coordinated deprecation."}),"\n",(0,a.jsxs)(s.p,{children:["Deprecated packages will remove themselves from the users systems as the first operation in an update or package install using the package manager, once marked as ",(0,a.jsx)(s.code,{children:"Obsolete"})," in the index."]}),"\n",(0,a.jsx)(s.h3,{id:"deprecating-a-package",children:"Deprecating a package"}),"\n",(0,a.jsx)(s.p,{children:"Follow these steps to submit a package for deprecation:"}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsxs)(s.li,{children:["Fork and clone the ",(0,a.jsx)(s.code,{children:"solus-sc"})," repo ",(0,a.jsx)(s.a,{href:"https://github.com/getsolus/solus-sc",children:"on GitHub"}),", and/or create a new branch"]}),"\n",(0,a.jsxs)(s.li,{children:["Edit ",(0,a.jsx)(s.code,{children:"repo_data/distribution.xml.in"})]}),"\n",(0,a.jsxs)(s.li,{children:["Add the package you wish to deprecate at the end of the ",(0,a.jsx)(s.code,{children:"<Obsoletes>"})," section"]}),"\n",(0,a.jsxs)(s.li,{children:["Run the ",(0,a.jsx)(s.code,{children:"merged_repos.sh"})," script"]}),"\n",(0,a.jsx)(s.li,{children:"Commit and push your changes to your repository/branch"}),"\n",(0,a.jsx)(s.li,{children:"Open a Pull Request on GitHub"}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:"If a deprecation depends on a packaging change landing before it can be properly deprecated without undesirable side effects on user systems, the GitHub deprecation Pull Request MUST link to the packaging change and declare it as a dependency for deprecation."}),"\n",(0,a.jsx)(s.h3,{id:"un-deprecating-a-package",children:"Un-deprecating a package"}),"\n",(0,a.jsx)(s.p,{children:"The above steps also apply to un-deprecating a package, with the following additions:"}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsx)(s.li,{children:"Before making changes, the package repository must be reactivated"}),"\n",(0,a.jsx)(s.li,{children:"In Step 2, remove the package from the list instead of adding it"}),"\n",(0,a.jsxs)(s.li,{children:["After the ",(0,a.jsx)(s.code,{children:"solus-sc"})," pull request has been merged, ask a Solus Staff member to use available tooling to update the repository files, then index the repo with ",(0,a.jsx)(s.code,{children:"ferryctl index unstable"})," (or do it yourself if you have the ability)"]}),"\n",(0,a.jsx)(s.li,{children:"Bump or update the package"}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"major-stack-changes",children:"Major stack changes"}),"\n",(0,a.jsx)(s.p,{children:"Large stack upgrades should begin as closely to the last Friday sync as possible, to ensure there is plenty of time for the work to be completed, integrated, and tested for regressions."})]})}function h(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>i,a:()=>o});var a=n(67294);const t={},r=a.createContext(t);function o(e){const s=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),a.createElement(r.Provider,{value:s},e.children)}}}]);