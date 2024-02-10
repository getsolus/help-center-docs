"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[3851],{44832:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>o});var i=a(85893),s=a(11151);const t={title:"Creating a New Package",summary:"Creating a Package For Inclusion in the Repositories",sidebar_position:3},r="Creating a New Package",l={id:"packaging/creating-a-new-package",title:"Creating a New Package",description:"This page will take you through the steps required to build a new package for the Solus package repositories. For this example, we will use the command line utility tree, which is already packaged for Solus, but we will pretend like it's not.",source:"@site/docs/packaging/creating-a-new-package.md",sourceDirName:"packaging",slug:"/packaging/creating-a-new-package",permalink:"/docs/packaging/creating-a-new-package",draft:!1,unlisted:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/packaging/creating-a-new-package.md",tags:[],version:"current",lastUpdatedAt:1707591920,formattedLastUpdatedAt:"Feb 10, 2024",sidebarPosition:3,frontMatter:{title:"Creating a New Package",summary:"Creating a Package For Inclusion in the Repositories",sidebar_position:3},sidebar:"packagingSidebar",previous:{title:"Update Your Development Environment",permalink:"/docs/packaging/update-dev-environment"},next:{title:"Updating an Existing Package",permalink:"/docs/packaging/updating-an-existing-package"}},c={},o=[{value:"Update an existing clone",id:"update-an-existing-clone",level:3},{value:"Create a New Branch",id:"create-a-new-branch",level:2},{value:"Create The <code>MAINTAINERS.md</code> File",id:"create-the-maintainersmd-file",level:2},{value:"Create the <code>package.yml</code> File",id:"create-the-packageyml-file",level:2},{value:"Build the Package",id:"build-the-package",level:2},{value:"Commit your Changes",id:"commit-your-changes",level:2},{value:"Commit message format for new packages",id:"commit-message-format-for-new-packages",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"creating-a-new-package",children:"Creating a New Package"}),"\n",(0,i.jsxs)(n.p,{children:["This page will take you through the steps required to build a new package for the Solus package repositories. For this example, we will use the command line utility ",(0,i.jsx)(n.a,{href:"https://gitlab.com/OldManProgrammer/unix-tree",children:"tree"}),", which is already packaged for Solus, but we will pretend like it's not."]}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:["Please ",(0,i.jsx)(n.a,{href:"https://github.com/getsolus/packages/issues?q=label%3A%22Package+Request%22",children:"look to see if an issue has been filed"})," and ",(0,i.jsx)(n.em,{children:"accepted"})," for the software or library you intend to package"]}),". If there is an existing request, please add a link to it in your pull request. Ex:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"This PR resolves software request https://github.com/getsolus/packages/issues/123\n"})})]}),"\n",(0,i.jsx)(n.h3,{id:"update-an-existing-clone",children:"Update an existing clone"}),"\n",(0,i.jsxs)(n.p,{children:["If you do not have a local clone set up yet, see ",(0,i.jsx)(n.a,{href:"/docs/packaging/prepare-for-packaging#fork-the-getsoluspackages-repository",children:"Prepare for Packaging"})]}),"\n",(0,i.jsx)(n.p,{children:"Bring your local clone up to date. Run:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd ~/solus-packages\ngit switch main\ngit pull\n"})}),"\n",(0,i.jsx)(n.h2,{id:"create-a-new-branch",children:"Create a New Branch"}),"\n",(0,i.jsx)(n.p,{children:"It's always a good idea to switch to a new git branch before beginning packaging work. This helps to separate your work from any new changes made to the package repository, which will allow you to more easily rebase any changes if needed. To do so run:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git switch -c your-branch\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"create-the-maintainersmd-file",children:["Create The ",(0,i.jsx)(n.code,{children:"MAINTAINERS.md"})," File"]}),"\n",(0,i.jsxs)(n.p,{children:["You must add a file called ",(0,i.jsx)(n.code,{children:"MAINTAINERS.md"})," using the template in ",(0,i.jsx)(n.a,{href:"/docs/packaging/procedures/maintainership",children:"Maintainership"}),". Solus uses this to track the primary maintainer(s) for each package."]}),"\n",(0,i.jsxs)(n.h2,{id:"create-the-packageyml-file",children:["Create the ",(0,i.jsx)(n.code,{children:"package.yml"})," File"]}),"\n",(0,i.jsx)(n.p,{children:"You will need a link to the most recent source tarball for this from the software's website."}),"\n",(0,i.jsxs)(n.p,{children:["To create a skeleton ",(0,i.jsx)(n.code,{children:"package.yml"})," file, use the ",(0,i.jsx)(n.code,{children:"go-task new"})," command."]}),"\n",(0,i.jsx)(n.p,{children:"This command takes two arguments, in the following order:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"package name"}),"\n",(0,i.jsx)(n.li,{children:"Source URL"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"go-task new -- tree https://gitlab.com/OldManProgrammer/unix-tree/-/archive/2.1.1/unix-tree-2.1.1.tar.gz\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"go-task new"})," command will automatically place the new ",(0,i.jsx)(n.code,{children:"package.yml"})," in the proper directory according the package name, ",(0,i.jsxs)(n.em,{children:["and will overwrite any existing ",(0,i.jsx)(n.code,{children:"package.yml"})," file at that location"]}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["You can, of course, create your ",(0,i.jsx)(n.code,{children:"package.yml"})," file entirely from scratch, but ",(0,i.jsx)(n.code,{children:"go-task new"})," will give you a better starting point. We recommend using the ",(0,i.jsx)(n.code,{children:"go-task new"})," command."]})}),"\n",(0,i.jsxs)(n.p,{children:["Now you should have a ",(0,i.jsx)(n.code,{children:"package.yml"})," file that looks something like this:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"name       : unix-tree\nversion    : 2.1.1\nrelease    : 1\nsource     :\n    - https://gitlab.com/OldManProgrammer/unix-tree/-/archive/2.1.1/unix-tree-2.1.1.tar.gz : bcd2a0327ad40592a9c43e09a4d2ef834e6f17aa9a59012a5fb1007950b5eced\nhomepage   : PLEASE FILL ME IN\nlicense    : GPL-2.0-or-later # CHECK ME\ncomponent  : PLEASE FILL ME IN\nsummary    : PLEASE FILL ME IN\ndescription: |\n    PLEASE FILL ME IN\nbuilddeps  :\nsetup      : |\n    %configure\nbuild      : |\n    %make\ninstall    : |\n    %make_install\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"go-task new"})," command has filled many fields for us, but not all of them will be right, and some of them need to be filled in. Refer to the ",(0,i.jsx)(n.a,{href:"/docs/packaging/package.yml",children:"package.yml page"})," to see how each field should be used."]}),"\n",(0,i.jsx)(n.p,{children:"For this example, we need to fix the following:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The name needs to be ",(0,i.jsx)(n.code,{children:"tree"}),", so update it."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"license"})," is correct, so we remove the comment."]}),"\n",(0,i.jsxs)(n.li,{children:["Fill in ",(0,i.jsx)(n.code,{children:"homepage"}),", ",(0,i.jsx)(n.code,{children:"component"}),", ",(0,i.jsx)(n.code,{children:"summary"}),", and ",(0,i.jsx)(n.code,{children:"description"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Remove ",(0,i.jsx)(n.code,{children:"builddeps"}),". This package has no build dependencies beyond the ones already available for every package (the ",(0,i.jsx)(n.code,{children:"system.devel"})," packages)."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"setup"})," step is not required, remove it."]}),"\n",(0,i.jsxs)(n.li,{children:["In the ",(0,i.jsx)(n.code,{children:"install"})," key, we can't use the ",(0,i.jsx)(n.code,{children:"%make_install"})," macro for this package. The files are installed in their correct locations individually."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"After updating the file, it will now look like:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"name       : tree\nversion    : 2.1.1\nrelease    : 1\nsource     :\n    - https://gitlab.com/OldManProgrammer/unix-tree/-/archive/2.1.1/unix-tree-2.1.1.tar.gz : bcd2a0327ad40592a9c43e09a4d2ef834e6f17aa9a59012a5fb1007950b5eced\nhomepage   : https://gitlab.com/OldManProgrammer/unix-tree\nlicense    : GPL-2.0-or-later\ncomponent  : system.utils\nsummary    : list contents of directories in a tree-like format.\ndescription: |\n    Tree is a recursive directory listing command that produces a depth indented listing of files, which is colorized ala dircolors if the LS_COLORS environment variable is set and output is to tty\nbuild      : |\n    %make\ninstall    : |\n    install -Dm00664 $workdir/doc/tree.1 $installdir/usr/share/man/man1/tree.1\n    install -Dm00755 $workdir/tree $installdir/usr/bin/tree\n"})}),"\n",(0,i.jsxs)(n.p,{children:["To read more about finding and including dependencies and other parts of ",(0,i.jsx)(n.code,{children:"package.yml"})," please see ",(0,i.jsx)(n.a,{href:"/docs/packaging/packaging-practices",children:"Packaging Practices"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Understanding how to translate source code into a good ",(0,i.jsx)(n.code,{children:"package.yml"})," file is the heart of packaging. If you are stumped, or have questions, ",(0,i.jsxs)(n.strong,{children:["ask for help in our Solus Packaging room on ",(0,i.jsx)(n.a,{href:"/docs/user/contributing/getting-involved#matrix-chat",children:"Matrix"}),"."]})]}),"\n",(0,i.jsx)(n.h2,{id:"build-the-package",children:"Build the Package"}),"\n",(0,i.jsxs)(n.p,{children:["Build the package using ",(0,i.jsx)(n.code,{children:"go-task"}),". The default task will build the package against the Unstable repository, so you don't have to specify a task here."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"go-task\n"})}),"\n",(0,i.jsx)(n.p,{children:"Once the build completes, your directory should now include the following files:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"\u251c\u2500\u2500 abi_used_libs\n\u251c\u2500\u2500 abi_used_symbols\n\u251c\u2500\u2500 package.yml\n\u251c\u2500\u2500 pspec_x86_64.xml\n\u2514\u2500\u2500 tree-2.1.1-1-1-x86_64.eopkg\n"})}),"\n",(0,i.jsxs)(n.p,{children:["All these files ",(0,i.jsx)(n.em,{children:"except"})," the ",(0,i.jsx)(n.code,{children:"*eopkg"})," file(s) should be included in your pull request. You will remove the ",(0,i.jsx)(n.code,{children:".eopkg"})," files after testing the package."]}),"\n",(0,i.jsxs)(n.p,{children:["Once your package has built successfully, you will need to ",(0,i.jsx)(n.a,{href:"testing-a-package",children:"test it"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"commit-your-changes",children:"Commit your Changes"}),"\n",(0,i.jsxs)(n.p,{children:["Check the ",(0,i.jsx)(n.a,{href:"git-basics#check-the-changes-in-your-files",children:"changes in your files"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/packaging/git-basics",children:"Add / remove files as necessary to the commit"}),". Then, ",(0,i.jsx)(n.strong,{children:"check your branch"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Double-check that everything looks correct and all of the files have been staged before committing."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git status\n"})}),"\n",(0,i.jsx)(n.p,{children:"If all looks well, commit your changes."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git commit\n"})}),"\n",(0,i.jsx)(n.h3,{id:"commit-message-format-for-new-packages",children:"Commit message format for new packages"}),"\n",(0,i.jsx)(n.p,{children:"There should be a summary line (with the package name), a blank line, and then the rest of the commit message."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"There should at the minimum be a summary and Test Plan."}),"\n",(0,i.jsx)(n.li,{children:"Bullet point lists should start with a dash."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Here is an example in our standard format (make sure to check the box in the checklist):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"tree: initial inclusion in the repository\n\n**Summary**\n\nAdd the tree package, which recursively lists directories in a tree like manner.\n\n**Test Plan**\n\n- Launched the application\n- Exercised the UI\n- Exercised some feature\n\n**Checklist**\n\n- [] Package was built and tested against unstable\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For more information on suitable commit messages, please check the ",(0,i.jsx)(n.a,{href:"https://github.com/solus-project/tooling-central/blob/master/README.rst#using-git",children:"tooling central documentation"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If you want to link this pull request to an existing package request, simply mention it in your commit message (use the full URL): ",(0,i.jsx)(n.code,{children:"The inclusion of <somepackage> resolves https://github.com/getsolus/packages/issues/123"})]}),"\n",(0,i.jsxs)(n.li,{children:["If you need a change to depend on another change, mention it in the commit message too (use the full URL): ",(0,i.jsx)(n.code,{children:"Depends on https://github.com/getsolus/packages/issues/234"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Next, you'll ",(0,i.jsx)(n.a,{href:"/docs/packaging/submitting-a-pull-request",children:"submit a pull request for review"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>l,a:()=>r});var i=a(67294);const s={},t=i.createContext(s);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);