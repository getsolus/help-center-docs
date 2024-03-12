"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[6726],{2604:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var i=a(85893),s=a(11151);const t={title:"Updating an Existing Package",summary:"Updating an Existing Package",sidebar_position:4},r="Updating an Existing Package",o={id:"packaging/updating-an-existing-package",title:"Updating an Existing Package",description:"This article will go over updating a package that is already in the Solus package repositories.",source:"@site/docs/packaging/updating-an-existing-package.md",sourceDirName:"packaging",slug:"/packaging/updating-an-existing-package",permalink:"/docs/packaging/updating-an-existing-package",draft:!1,unlisted:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/packaging/updating-an-existing-package.md",tags:[],version:"current",lastUpdatedAt:1710262657,formattedLastUpdatedAt:"Mar 12, 2024",sidebarPosition:4,frontMatter:{title:"Updating an Existing Package",summary:"Updating an Existing Package",sidebar_position:4},sidebar:"packagingSidebar",previous:{title:"Creating a New Package",permalink:"/docs/packaging/creating-a-new-package"},next:{title:"Testing a Package",permalink:"/docs/packaging/testing-a-package"}},c={},l=[{value:"Update your clone of the packages Repository",id:"update-your-clone-of-the-packages-repository",level:3},{value:"Switch to a New Git Branch",id:"switch-to-a-new-git-branch",level:2},{value:"Updating a Package",id:"updating-a-package",level:2},{value:"Bumping a Package",id:"bumping-a-package",level:3},{value:"Using a Different Version",id:"using-a-different-version",level:3},{value:"The <code>MAINTAINERS.md</code> File",id:"the-maintainersmd-file",level:2},{value:"Build the package",id:"build-the-package",level:2},{value:"Commit Your Changes",id:"commit-your-changes",level:2},{value:"Commit message format",id:"commit-message-format",level:2},{value:"Package update",id:"package-update",level:3},{value:"Other commit message format examples",id:"other-commit-message-format-examples",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"updating-an-existing-package",children:"Updating an Existing Package"}),"\n",(0,i.jsx)(n.p,{children:"This article will go over updating a package that is already in the Solus package repositories."}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:["Please ",(0,i.jsx)(n.a,{href:"https://github.com/getsolus/packages/issues?q=label%3A%22Package+Request%22",children:"look to see if an issue has been filed"})," for the software update"]}),".\nIf there is an existing request, please add a link to it in your pull request. Ex:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"This PR resolves software update request https://github.com/getsolus/packages/issues/123\n"})})]}),"\n",(0,i.jsx)(n.h3,{id:"update-your-clone-of-the-packages-repository",children:"Update your clone of the packages Repository"}),"\n",(0,i.jsxs)(n.p,{children:["If you do not have a local clone set up yet, see ",(0,i.jsx)(n.a,{href:"/docs/packaging/prepare-for-packaging#fork-the-getsoluspackages-repository",children:"Prepare for Packaging"})]}),"\n",(0,i.jsx)(n.p,{children:"Bring your local clone up to date. Run:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd ~/solus-packages/packages/n/nano\ngit switch main\ngit pull\n"})}),"\n",(0,i.jsx)(n.h2,{id:"switch-to-a-new-git-branch",children:"Switch to a New Git Branch"}),"\n",(0,i.jsx)(n.p,{children:"It's always a good idea to switch to a new git branch before beginning packaging work. This helps to separate your work from any new changes made to the package repository, which will allow you to more easily rebase any changes if needed. To do so run:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git switch -c update_nano\n"})}),"\n",(0,i.jsx)(n.h2,{id:"updating-a-package",children:"Updating a Package"}),"\n",(0,i.jsx)(n.p,{children:"There are two types of package updates: a package bump, and moving a package to a different version."}),"\n",(0,i.jsxs)(n.p,{children:["Bumping a package is typically done when rebuilding against a changed dependency, such as ",(0,i.jsx)(n.code,{children:"imagemagick"})," needing to be rebuilt if ",(0,i.jsx)(n.code,{children:"libwebp"})," changes. It is also done if changes are being made to the package, such as adding new dependencies or other modifications which aren't a version update."]}),"\n",(0,i.jsx)(n.h3,{id:"bumping-a-package",children:"Bumping a Package"}),"\n",(0,i.jsxs)(n.p,{children:["Bumping can be achieved by running the ",(0,i.jsx)(n.code,{children:"bump"})," task, which increments the release number by 1."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"go-task bump\n"})}),"\n",(0,i.jsx)(n.p,{children:"Check to make sure that the result is as expected."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git diff package.yml\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Certain packages with long descriptions might have their description messed up when this is run. Check if this happened, and fix it if necessary."})}),"\n",(0,i.jsx)(n.h3,{id:"using-a-different-version",children:"Using a Different Version"}),"\n",(0,i.jsxs)(n.p,{children:["To update the package to a newer version, use the ",(0,i.jsx)(n.code,{children:"update"})," task."]}),"\n",(0,i.jsx)(n.p,{children:"This task takes two arguments, in the following order:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Version"}),"\n",(0,i.jsx)(n.li,{children:"Source URL"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"If you're updating the package to a newer version, naturally you would change both the version and source. If you're merely changing the source URL for the existing version, just pass the same version number and the new source URL."}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"go-task update -- 1.0 https://example.com/example-1.0.tar.xz\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"the-maintainersmd-file",children:["The ",(0,i.jsx)(n.code,{children:"MAINTAINERS.md"})," File"]}),"\n",(0,i.jsxs)(n.p,{children:["There must be a file called ",(0,i.jsx)(n.code,{children:"MAINTAINERS.md"})," using the template in ",(0,i.jsx)(n.a,{href:"/docs/packaging/procedures/maintainership",children:"Maintainership"}),". Add it if it does not already exist. It should name the current maintainer(s) of the package."]}),"\n",(0,i.jsx)(n.h2,{id:"build-the-package",children:"Build the package"}),"\n",(0,i.jsxs)(n.p,{children:["Build the package using ",(0,i.jsx)(n.code,{children:"go-task"}),". The default task will build the package against the Unstable repository, so you don't have to specify a task here."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"go-task\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Once your package has built successfully, you will need to ",(0,i.jsx)(n.a,{href:"testing-a-package",children:"test it"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"commit-your-changes",children:"Commit Your Changes"}),"\n",(0,i.jsxs)(n.p,{children:["Check the ",(0,i.jsx)(n.a,{href:"git-basics#check-the-changes-in-your-files",children:"changes in your files"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/packaging/git-basics",children:"Add / remove files as necessary to the commit"}),". Then, ",(0,i.jsx)(n.strong,{children:"check your branch"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Double-check that everything looks correct and all of the files have been staged before committing."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git status\n"})}),"\n",(0,i.jsx)(n.p,{children:"If all looks well, commit your changes."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git commit\n"})}),"\n",(0,i.jsx)(n.h2,{id:"commit-message-format",children:"Commit message format"}),"\n",(0,i.jsx)(n.p,{children:'With the switch to a single large package git repository, having a regular, easy-to-read, and standardized commit message format helps enable quick and efficient "at-a-glance" reading of git commit messages for packagers and Staff alike.'}),"\n",(0,i.jsx)(n.p,{children:"Each commit message should consist of a meaningful summary line (which starts with the package name), a blank line, and then the rest of the commit message body."}),"\n",(0,i.jsxs)(n.p,{children:["Note that ",(0,i.jsx)(n.code,{children:"[NFC]"}),' (listed in an example below) is an abbreviation for "No Functional Change".']}),"\n",(0,i.jsx)(n.h3,{id:"package-update",children:"Package update"}),"\n",(0,i.jsx)(n.p,{children:"The following guidelines apply to the commit message body:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Bullet point lists should start with a dash."}),"\n",(0,i.jsx)(n.li,{children:"Include a changelog with a brief list of updates from the upstream release notes, with no links or issue numbers."}),"\n",(0,i.jsx)(n.li,{children:"There may also be a section for Solus specific work (e.g. rebuild against x / rework to remove dependency)."}),"\n",(0,i.jsx)(n.li,{children:"Optional: A link to the upstream release notes page."}),"\n",(0,i.jsx)(n.li,{children:"Include your Test Plan."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"git commit"})," on ",(0,i.jsx)(n.a,{href:"/docs/packaging/prepare-for-packaging#initialize-git-hooks",children:"an initialized repository"})," will automatically open your editor with the correct template.\nNote that lines starting with a ",(0,i.jsx)(n.code,{children:"#"})," will be ignored by Git and do not need to be removed."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Important"}),": Do not include issue numbers in changelogs. This will incorrectly link your issue to another one in our repository. Ex:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"- #123 fixed a thing\n"})}),"\n",(0,i.jsx)(n.p,{children:"If you want to intentionally link to another issue in this repository, the right way is to use our repo name. Ex:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Fixes getsolus/packages#issuenumber\n"})}),"\n",(0,i.jsx)(n.p,{children:"Here is an example in our standard format:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"foo: Update to 1.2.3\n\n**Summary**\n\nBugfixes:\n\n- Fixed a crash\n- Something else\n\nEnhancements:\n\n- Implemented a feature\n- Error when encountering a thing\n\nFull release notes:\n\n- [1.2.3](https://github.com/foo/foo/releases/tag/v1.2.3)\n\n**Test Plan**\n\n\x3c!-- Short description of how the package was tested --\x3e\n\n**Checklist**\n\n- [ ] Package was built and tested against unstable\n"})}),"\n",(0,i.jsx)(n.h3,{id:"other-commit-message-format-examples",children:"Other commit message format examples"}),"\n",(0,i.jsx)(n.p,{children:"In the cases where you are not updating a package to a new version, but simply applying a patch or fixing an existing version, the following commit messages are considered suitable:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Add the ",(0,i.jsx)(n.code,{children:"homepage"})," metadata key:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"package: Add homepage"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Fix a packaging issue (including adding a patch to fix the package)","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"package: Fix (...)"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Updating a README, ",(0,i.jsx)(n.a,{href:"/docs/packaging/monitoring.yml",children:"monitoring.yml file"})," or other stuff that does not directly ",(0,i.jsx)(n.em,{children:"change"})," the package, meaning the package release number didn't need a bump:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"package: [NFC] Add README.md and monitoring.yml"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["As stated previously, ",(0,i.jsx)(n.code,{children:"[NFC]"}),' is an abbreviation of "No Functional Change".']}),"\n",(0,i.jsxs)(n.p,{children:["For more information on suitable commit messages, please check the ",(0,i.jsx)(n.a,{href:"https://github.com/solus-project/tooling-central/blob/master/README.rst#using-git",children:"tooling central documentation"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Next, you'll ",(0,i.jsx)(n.a,{href:"/docs/packaging/submitting-a-pull-request",children:"submit a pull request for review"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>o,a:()=>r});var i=a(67294);const s={},t=i.createContext(s);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);