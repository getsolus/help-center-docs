"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[9773],{57646:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>a,toc:()=>c});var s=i(85893),r=i(11151);const n={title:"Package Inclusion Policy",summary:"What's needed to include packages into the repository"},o="Package Inclusion Policy",a={id:"packaging/procedures/package-inclusion",title:"Package Inclusion Policy",description:"This policy sets forth the criteria for a package to be accepted for inclusion into the Solus repositories or rejected.",source:"@site/docs/packaging/procedures/package-inclusion.md",sourceDirName:"packaging/procedures",slug:"/packaging/procedures/package-inclusion",permalink:"/docs/packaging/procedures/package-inclusion",draft:!1,unlisted:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/packaging/procedures/package-inclusion.md",tags:[],version:"current",lastUpdatedAt:1716664515e3,frontMatter:{title:"Package Inclusion Policy",summary:"What's needed to include packages into the repository"},sidebar:"packagingSidebar",previous:{title:"Maintainership",permalink:"/docs/packaging/procedures/maintainership"},next:{title:"Release Processes",permalink:"/docs/packaging/procedures/release-processes"}},l={},c=[{value:"Criteria",id:"criteria",level:2},{value:"Explicitly redistributable",id:"explicitly-redistributable",level:3},{value:"Server software",id:"server-software",level:3},{value:"Software age",id:"software-age",level:3},{value:"Stack complexity",id:"stack-complexity",level:3},{value:"Value-add",id:"value-add",level:3},{value:"Rejection",id:"rejection",level:2}];function d(e){const t={a:"a",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"package-inclusion-policy",children:"Package Inclusion Policy"}),"\n",(0,s.jsx)(t.p,{children:"This policy sets forth the criteria for a package to be accepted for inclusion into the Solus repositories or rejected."}),"\n",(0,s.jsx)(t.h2,{id:"criteria",children:"Criteria"}),"\n",(0,s.jsx)(t.h3,{id:"explicitly-redistributable",children:"Explicitly redistributable"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Software under a free software or open source software license, or license text which explicitly states that it is ",(0,s.jsx)(t.strong,{children:"permissible"})," to redistribute the software. We use the ",(0,s.jsx)(t.a,{href:"https://spdx.org/licenses/",children:"SPDX License List"}),"."]}),"\n",(0,s.jsx)(t.li,{children:"For anything that cannot be redistributed by Solus, there is the possibility for them to be provided as a Flatpak, for Third Party repository inclusion, however the Solus project is not responsible for flatpak or snap implementation of these items. These items should then fetch only at installation time, and not contain non distributable components."}),"\n",(0,s.jsx)(t.li,{children:"Solus supports both VCS (currently only git, this will expand) and traditional software sources (such as tarballs) for packages, equally."}),"\n",(0,s.jsxs)(t.li,{children:["Unless ",(0,s.jsx)(t.strong,{children:"absolutely unavoidable"}),", the sources for a package should be source, and not ",(0,s.jsx)(t.strong,{children:"binary, prebuilt"})," sources. Exceptions may be made in rare cases, such as stage1 bootstrap for a compiler, or requires custom components otherwise impossible to provide in Solus (patched libraries, etc.)"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"server-software",children:"Server software"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Mail servers such as Postfix, Dovecot, etc, are ",(0,s.jsx)(t.strong,{children:"not"})," eligible for inclusion. Solus does not provide a server operating system."]}),"\n",(0,s.jsxs)(t.li,{children:["Web servers and database daemons ",(0,s.jsx)(t.strong,{children:"are"})," eligible for inclusion, as they facilitate web developers to work locally."]}),"\n",(0,s.jsx)(t.li,{children:"Anything outside of these may be catered to by the usage of Docker, or other container technology. Thus, container technology must be supported by Solus to support access to ancillary cases."}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"software-age",children:"Software age"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"DOA (dead-on-arrival) packages are generally rejected from Solus. However, they may be included at the discretion of the project, if they provide unique functionality."}),"\n",(0,s.jsx)(t.li,{children:"Projects with no tags/tarballs which lack traction, may be frozen until a suitable release is made. Tagging releases is an indicator for good release engineering practices."}),"\n",(0,s.jsxs)(t.li,{children:["Typically, we prefer ",(0,s.jsx)(t.strong,{children:"stable"})," tagged releases. However, this may be waived if:","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"The software has significant traction (i.e. prerelease)"}),"\n",(0,s.jsx)(t.li,{children:"A bug fix only exists beyond the latest stable release for a git source"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"stack-complexity",children:"Stack complexity"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Certain requests may tick all the boxes, but introduce a level of complexity or require a level of engagement not possible to balance for Solus Staff. Under certain situations, a request will be frozen until it has a dedicated maintainer."}),"\n",(0,s.jsx)(t.li,{children:"This extends to requests for full desktop environments. However, this does not extend to minor components like drop-in window managers or panels separate of a dependent stack (i.e. Awesome WM, tint2, etc.)"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"value-add",children:"Value-add"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["A web wrapper which ",(0,s.jsx)(t.strong,{children:"adds value"}),", such as Discord, with the global push-to-talk shortcut, is eligible for inclusion."]}),"\n",(0,s.jsxs)(t.li,{children:["A web page wrapper, that adds ",(0,s.jsx)(t.strong,{children:"no further value"})," other than \u201cconvenient desktop shortcut\u201d or \u201ctray icon\u201d, are ",(0,s.jsx)(t.strong,{children:"not"})," eligible for inclusion. Web browsers already support desktop notifications."]}),"\n",(0,s.jsx)(t.li,{children:"If the newly requested package offers no functionality above that of an alternative already in the repositories, it will very likely be rejected. \u201cIt\u2019s pretty\u201d is never a sufficient reason."}),"\n",(0,s.jsx)(t.li,{children:"If the requested package is curated towards, or developed with the intent to work on, a specific operating system, it will very likely be rejected. This includes packages which require libraries that are built with the intent to work on a specific operating system."}),"\n",(0,s.jsxs)(t.li,{children:["Likewise, when a new package offers a better alternative to an ",(0,s.jsx)(t.strong,{children:"existing"})," package, we should look to replace the old one with the new one, to ensure the repository is always deduplicating."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"rejection",children:"Rejection"}),"\n",(0,s.jsxs)(t.p,{children:["Solus Staff members reserve the right to permanently reject a package request without the need for further discussion once the rejection is issued. The limited time of contributors should be considered and respected, instead of dragging out and 'necromancing' old issues in a vain attempt to force inclusion of previously rejected software. In the event of any policy change, existing/expired package requests will NOT be reevaluated under new criteria as this would lead to an exponential growth in work upon every policy change, and is physically impossible to handle for a project of ",(0,s.jsx)(t.em,{children:"any"})," size."]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>a,a:()=>o});var s=i(67294);const r={},n=s.createContext(r);function o(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);