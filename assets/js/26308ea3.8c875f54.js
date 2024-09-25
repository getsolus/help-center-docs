"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[6485],{85612:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>C,contentTitle:()=>P,default:()=>N,frontMatter:()=>T,metadata:()=>A,toc:()=>V});var s=n(85893),a=n(11151),r=n(20906),i=n(17573),l=n(67294),o=n(36905);const c={tabItem:"tabItem_Ymn6"};function u(e){let{children:t,hidden:n,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,o.Z)(c.tabItem,a),hidden:n,children:t})}var h=n(18119),d=n(16550),p=n(1290),m=n(39222),g=n(79113),f=n(1606);function b(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function x(e){const{values:t,children:n}=e;return(0,l.useMemo)((()=>{const e=t??function(e){return b(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:a}}=e;return{value:t,label:n,attributes:s,default:a}}))}(n);return function(e){const t=(0,g.lx)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function j(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function y(e){let{queryString:t=!1,groupId:n}=e;const s=(0,d.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,m._X)(a),(0,l.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function w(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,a=x(e),[r,i]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!j({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:a}))),[o,c]=y({queryString:n,groupId:s}),[u,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,f.Nk)(n);return[s,(0,l.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),d=(()=>{const e=o??u;return j({value:e,tabValues:a})?e:null})();(0,p.Z)((()=>{d&&i(d)}),[d]);return{selectedValue:r,selectValue:(0,l.useCallback)((e=>{if(!j({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),h(e)}),[c,h,a]),tabValues:a}}var k=n(45025);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function q(e){let{className:t,block:n,selectedValue:a,selectValue:r,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,h.o5)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),s=i[n].value;s!==a&&(c(t),r(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,s.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,s.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...r,className:(0,o.Z)("tabs__item",v.tabItem,r?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function I(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,l.cloneElement)(e,{className:(0,o.Z)("margin-top--md",e.props.className)}):null}return(0,s.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function S(e){const t=w(e);return(0,s.jsxs)("div",{className:(0,o.Z)("tabs-container",v.tabList),children:[(0,s.jsx)(q,{...t,...e}),(0,s.jsx)(I,{...t,...e})]})}function R(e){const t=(0,k.Z)();return(0,s.jsx)(S,{...e,children:b(e.children)},String(t))}const T={title:"Submitting a Pull Request for Review",summary:"Submitting a Pull Request for Review",sidebar_position:6},P="Submitting a Pull Request for Review",A={id:"packaging/submitting-a-pull-request",title:"Submitting a Pull Request for Review",description:"Please refrain from submitting a pull request for the following instances:",source:"@site/docs/packaging/submitting-a-pull-request.mdx",sourceDirName:"packaging",slug:"/packaging/submitting-a-pull-request",permalink:"/docs/packaging/submitting-a-pull-request",draft:!1,unlisted:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/packaging/submitting-a-pull-request.mdx",tags:[],version:"current",lastUpdatedAt:1727275172e3,sidebarPosition:6,frontMatter:{title:"Submitting a Pull Request for Review",summary:"Submitting a Pull Request for Review",sidebar_position:6},sidebar:"packagingSidebar",previous:{title:"Testing a Package",permalink:"/docs/packaging/testing-a-package"},next:{title:"Packaging Changes",permalink:"/docs/packaging/packaging-changes"}},C={},V=[{value:"Final branch review",id:"final-branch-review",level:2},{value:"Creating the pull request",id:"creating-the-pull-request",level:2},{value:"Amending a pull request",id:"amending-a-pull-request",level:2},{value:"Amending a pull request with multiple commits",id:"amending-a-pull-request-with-multiple-commits",level:3},{value:"Updating a pull request that has changes requested",id:"updating-a-pull-request-that-has-changes-requested",level:2},{value:"After the pull request is accepted",id:"after-the-pull-request-is-accepted",level:2}];function _(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"submitting-a-pull-request-for-review",children:"Submitting a Pull Request for Review"})}),"\n",(0,s.jsx)(t.p,{children:"Please refrain from submitting a pull request for the following instances:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["For a package that is yet to be accepted for inclusion by a member of the Solus Staff team. Search ",(0,s.jsx)(t.a,{href:"https://github.com/getsolus/packages/issues?q=label%3A%22Package+Request%22",children:"open package requests"})," to see if there is an open request for the package.\nWe welcome you to politely reach out via the package request issue or our Support room on ",(0,s.jsx)(t.a,{href:"/docs/user/contributing/getting-involved#matrix-chat",children:"Matrix"})," if you deem the review of the request to be time-sensitive in nature."]}),"\n",(0,s.jsxs)(t.li,{children:["If your pull request is a Work In Progress / WIP. Pull requests that are completed or are marked as ",(0,s.jsx)(t.em,{children:"request for comments"})," (RFC) are accepted. For RFC request please ensure your patch title contains ",(0,s.jsx)(t.code,{children:"[RFC]"})," and is marked as 'draft'. WIP patches clutter the issue tracker, make patch review by Solus Staff more time consuming, and introduce unnecessary work."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"final-branch-review",children:"Final branch review"}),"\n",(0,s.jsx)(t.p,{children:"At minimum, your pull request will include changes for the following files:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"package.yml"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"pspec_*.xml"})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"It may also include these files:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"MAINTAINERS.md"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"monitoring.yml"})}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Double check the ",(0,s.jsx)(t.code,{children:"package.yml"})," to make sure the builddeps are in the right order, and that it otherwise adheres to the ",(0,s.jsx)(t.a,{href:"/docs/packaging/package.yml",children:"standards"})," Solus has set."]}),"\n",(0,s.jsxs)(t.p,{children:["If any additional files were required for the build, then you must also include the ",(0,s.jsx)(t.code,{children:"files/"})," directory. See ",(0,s.jsx)(t.a,{href:"/docs/packaging/packaging-practices",children:"Packaging Practices"})," for more detail."]}),"\n",(0,s.jsxs)(t.p,{children:["Many package builds may result in the automatic generation of an ABI report. These files start with ",(0,s.jsx)(t.code,{children:"abi_*"})," and must also be included, as they allow simple tracking of changes to symbols and dependencies."]}),"\n",(0,s.jsx)(t.p,{children:"Take a final look over your commit message to make sure it has all the necessary information, and that the formatting is good. You can use this, which will show the most recent commit:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"git log -1\n"})}),"\n",(0,s.jsx)(t.h2,{id:"creating-the-pull-request",children:"Creating the pull request"}),"\n",(0,s.jsx)(t.p,{children:"There are multiple ways to create a pull request with GitHub, either from the website, or from the command line."}),"\n",(0,s.jsxs)(R,{groupId:"opening-prs",children:[(0,s.jsxs)(u,{value:"website",label:"Website",children:[(0,s.jsxs)("p",{children:[(0,s.jsx)(t.p,{children:"In the package folder, push your local changes to a remote branch:"}),(0,s.jsx)(i.Z,{language:"bash",children:(0,s.jsx)(t.p,{children:"git push"})})]}),(0,s.jsx)(r.Z,{type:"info",children:(0,s.jsx)(t.p,{children:"If you've created your own branch, as recommended, the CLI tool will show you a new command to create and push to a remote branch matching the local one. Run this."})}),(0,s.jsxs)("p",{children:[(0,s.jsx)(t.p,{children:"Once the commit is successfully pushed, you'll notice that a URL will be provided that will immediately allow you to create a pull request with your changes."}),(0,s.jsxs)(t.p,{children:["Run ",(0,s.jsx)(t.code,{children:"git status"})," one last time to make sure your branch is clean. If it is:"]}),(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Open the link."}),"\n",(0,s.jsx)(t.li,{children:"Fill in a summary of your changes (usually the same as the commit message)."}),"\n",(0,s.jsxs)(t.li,{children:["Link any relevant issues:","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["If you want to link this pull request to an existing issue, simply mention it in the PR summary: ",(0,s.jsx)(t.code,{children:"The inclusion of <somepackage> fixes #123"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["If you need a change to depend on another change, mention it in the PR summary too: ",(0,s.jsx)(t.code,{children:"Depends on #234"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.li,{children:"Double-check everything."}),"\n",(0,s.jsx)(t.li,{children:"Create the pull request!"}),"\n"]})]})]}),(0,s.jsxs)(u,{value:"github-cli",label:"GitHub CLI",children:[(0,s.jsx)("p",{children:(0,s.jsxs)(t.p,{children:["In the package folder, run the ",(0,s.jsx)(t.code,{children:"gh"})," command:"]})}),(0,s.jsx)(i.Z,{language:"bash",children:(0,s.jsx)(t.p,{children:"gh pr create"})}),(0,s.jsxs)("p",{children:[(0,s.jsx)(t.p,{children:"This will start an interactive session to create your pull request step-by-step."}),(0,s.jsxs)(t.p,{children:["When the current branch isn't fully pushed to a git remote, a prompt will ask where to push the branch and offer an option to fork the base repository. For community packagers, you should use your fork of the packages repository. If you are a member of the Solus Staff, you should use ",(0,s.jsx)(t.code,{children:"getsolus/packages"}),"."]})]}),(0,s.jsx)(r.Z,{type:"info",children:(0,s.jsxs)(t.p,{children:["The text editor used by ",(0,s.jsx)(t.code,{children:"github-cli"})," may not the same one that ",(0,s.jsx)(t.code,{children:"git"})," uses. To change this, consult the ",(0,s.jsxs)(t.a,{href:"https://cli.github.com/manual/gh_config_set",children:[(0,s.jsx)(t.code,{children:"gh config set"})," command"]}),"."]})})]})]}),"\n",(0,s.jsx)(t.h2,{id:"amending-a-pull-request",children:"Amending a pull request"}),"\n",(0,s.jsx)(t.p,{children:"There may be times you need to make minor changes after submitting the pull request. For instance, you see something that needs correcting. To do this, you will need to amend your commit."}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Make your changes"}),"\n",(0,s.jsxs)(t.li,{children:["Stage your changes: ",(0,s.jsx)(t.code,{children:"git add ."})]}),"\n",(0,s.jsxs)(t.li,{children:["Amend the commit: ",(0,s.jsx)(t.code,{children:"git commit --amend"})]}),"\n",(0,s.jsxs)(t.li,{children:["Push the amended commit: ",(0,s.jsx)(t.code,{children:"git push --force"})]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"The web interface on GitHub will automatically update with the latest changes."}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"We want amended commits because of the way our tooling works. It expects that there is only one Git commit per package change."})}),"\n",(0,s.jsx)(t.h3,{id:"amending-a-pull-request-with-multiple-commits",children:"Amending a pull request with multiple commits"}),"\n",(0,s.jsx)(t.p,{children:"Sometimes, you may be submitting multiple packages in a single pull request, and one of them might need changes. The process is very similar to the above steps, but with a couple of additions."}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Rebase on the ",(0,s.jsx)(t.code,{children:"main"})," branch: ",(0,s.jsx)(t.code,{children:"git rebase -i origin/main"})]}),"\n",(0,s.jsxs)(t.li,{children:["A text editor will open in your terminal (",(0,s.jsx)(t.code,{children:"nano"})," by default). Change the line or lines of the commits you want to change from ",(0,s.jsx)(t.code,{children:"pick"})," to ",(0,s.jsx)(t.code,{children:"edit"})]}),"\n",(0,s.jsxs)(t.li,{children:["Save and close the editor (by default, ",(0,s.jsx)(t.code,{children:"Ctrl+s"})," ",(0,s.jsx)(t.code,{children:"Ctrl+x"}),")"]}),"\n",(0,s.jsx)(t.li,{children:"Make your changes"}),"\n",(0,s.jsxs)(t.li,{children:["Stage your changes: ",(0,s.jsx)(t.code,{children:"git add ."})]}),"\n",(0,s.jsxs)(t.li,{children:["Amend the commit: ",(0,s.jsx)(t.code,{children:"git commit --amend"})]}),"\n",(0,s.jsxs)(t.li,{children:["Continue the rebase: ",(0,s.jsx)(t.code,{children:"git rebase --continue"})]}),"\n",(0,s.jsx)(t.li,{children:"Repeat steps 4 through 7 for all commits you wish to edit"}),"\n",(0,s.jsxs)(t.li,{children:["Push the amended stack: ",(0,s.jsx)(t.code,{children:"git push --force"})]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"updating-a-pull-request-that-has-changes-requested",children:"Updating a pull request that has changes requested"}),"\n",(0,s.jsx)(t.p,{children:"Your pull request will be reviewed, and changes may be requested. This is normal. It's to ensure the quality of the packages in our repository and to make sure each PR adheres to our standards."}),"\n",(0,s.jsxs)(t.p,{children:["If you need to make changes in response to a review, follow the steps in the ",(0,s.jsx)(t.a,{href:"#amending-a-pull-request",children:"section above"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"after-the-pull-request-is-accepted",children:"After the pull request is accepted"}),"\n",(0,s.jsx)(t.p,{children:"Once your pull request is accepted and merged, someone on the Solus Team will issue a build. Your new / updated package will be published to the unstable repos."}),"\n",(0,s.jsxs)(t.p,{children:["At this point you may ",(0,s.jsx)(t.a,{href:"git-basics#deleting-your-branch-after-a-pull-request-is-merged",children:"delete the local and remote branches"})," for this pull request."]})]})}function N(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(_,{...e})}):_(e)}}}]);