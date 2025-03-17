"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([["545"],{39620:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>t,metadata:()=>a,assets:()=>d,toc:()=>r,contentTitle:()=>l});var a=JSON.parse('{"id":"packaging/packaging-practices","title":"Packaging Practices","description":"The primary goal of ypkg is ease of maintenance. In order to do so we ensure packages in the binary repository adhere to a strict set of conventions and practices.","source":"@site/docs/packaging/packaging-practices.md","sourceDirName":"packaging","slug":"/packaging/packaging-practices","permalink":"/docs/packaging/packaging-practices","draft":false,"unlisted":false,"editUrl":"https://github.com/getsolus/help-center-docs/tree/master/docs/packaging/packaging-practices.md","tags":[],"version":"current","lastUpdatedAt":1742171501000,"frontMatter":{"title":"Packaging Practices","summary":"Learning the best packaging practices"},"sidebar":"packagingSidebar","previous":{"title":"Package YAML","permalink":"/docs/packaging/package.yml"},"next":{"title":"Procedures","permalink":"/docs/category/procedures"}}'),i=s("85893"),c=s("50065");let t={title:"Packaging Practices",summary:"Learning the best packaging practices"},l="Packaging Practices",d={},r=[{value:"Package naming",id:"package-naming",level:2},{value:"The devel subpackage",id:"the-devel-subpackage",level:3},{value:"The docs subpackage",id:"the-docs-subpackage",level:3},{value:"The 32bit subpackage",id:"the-32bit-subpackage",level:3},{value:"The utils subpackage",id:"the-utils-subpackage",level:3},{value:"Maintenance",id:"maintenance",level:2},{value:"Licenses",id:"licenses",level:2},{value:"Build dependencies",id:"build-dependencies",level:2},{value:"Background",id:"background",level:3},{value:"Finding what package provides a pkgconfig dependency (if any)",id:"finding-what-package-provides-a-pkgconfig-dependency-if-any",level:3},{value:"Using pkgconfig dependencies",id:"using-pkgconfig-dependencies",level:3},{value:"Using explicitly named dependencies",id:"using-explicitly-named-dependencies",level:3},{value:"Runtime dependencies",id:"runtime-dependencies",level:2},{value:"Check dependencies",id:"check-dependencies",level:2},{value:"Example",id:"example",level:3},{value:"Patching / extra files",id:"patching--extra-files",level:2},{value:"Applying a patch",id:"applying-a-patch",level:3},{value:"Handling multiple patches",id:"handling-multiple-patches",level:4},{value:"Installing extra files",id:"installing-extra-files",level:2},{value:"Patterns",id:"patterns",level:2},{value:"Naming",id:"naming",level:3},{value:"Customizing subpackages",id:"customizing-subpackages",level:3},{value:"Examples",id:"examples",level:3},{value:"Replace / rename",id:"replace--rename",level:2}];function o(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"packaging-practices",children:"Packaging Practices"})}),"\n",(0,i.jsxs)(n.p,{children:["The primary goal of ",(0,i.jsx)(n.code,{children:"ypkg"})," is ease of maintenance. In order to do so we ensure packages in the binary repository adhere to a strict set of conventions and practices."]}),"\n",(0,i.jsx)(n.p,{children:"The next few sections will detail these."}),"\n",(0,i.jsx)(n.h2,{id:"package-naming",children:"Package naming"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"ypkg"})," tool does not allow for custom subpackages or subpackage naming, and will enforce its own policy. This can be eased somewhat through the use of ",(0,i.jsx)(n.code,{children:"patterns"}),", however the available subpackage names are limited."]}),"\n",(0,i.jsxs)(n.p,{children:["We request you use (where possible) the upstream source name for your package. Subpackage names (when generated) are constructed by using the ",(0,i.jsx)(n.code,{children:"name"})," value first, then applying the subpackage name as such:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"pkgname-$subpackage"})}),"\n",(0,i.jsxs)(n.p,{children:["Subpackages are fully automatic with ",(0,i.jsx)(n.code,{children:"ypkg"}),", and are created based on file patterns. All subpackages automatically depend on the main package, to ensure correct operation. In the following explanations, ",(0,i.jsx)(n.code,{children:"$lib"})," is used to refer to the host library directory, i.e. ",(0,i.jsx)(n.code,{children:"lib"})," or ",(0,i.jsx)(n.code,{children:"lib64"})," (or ",(0,i.jsx)(n.code,{children:"lib32"})," on ",(0,i.jsx)(n.code,{children:"emul32"})," builds)."]}),"\n",(0,i.jsx)(n.p,{children:"For the libraries / packages of the following programming languages, you should typically use the following template for it."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Language"}),(0,i.jsx)(n.th,{children:"Prefix"}),(0,i.jsx)(n.th,{children:"Example"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Haskell"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"haskell-"})}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"text-binary"})," would be ",(0,i.jsx)(n.code,{children:"haskell-text-binary"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Perl"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"perl-"})}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"algorithm-diff"})," would be ",(0,i.jsx)(n.code,{children:"perl-algorithm-diff"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Python"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"python-"})}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"wikipedia"})," would be ",(0,i.jsx)(n.code,{children:"python-wikipedia"})," ",(0,i.jsx)(n.strong,{children:"even if only Python3 is enabled"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Ruby"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"ruby-"})}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"gssapi"})," would be ",(0,i.jsx)(n.code,{children:"ruby-gssapi"})]})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"the-devel-subpackage",children:"The devel subpackage"}),"\n",(0,i.jsxs)(n.p,{children:["This is invariably created for packages that provide libraries and development headers. The following rules will result in files being placed in a ",(0,i.jsx)(n.code,{children:"devel"})," subpackage:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"/usr/include\n/usr/$lib/lib*.so\n/usr/$lib/lib*.a\n/usr/share/man/man3\n/usr/share/pkgconfig\n/usr/$lib/pkgconfig\n/usr/share/cmake\n/usr/share/vala\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For the full list of rules see ",(0,i.jsx)(n.a,{href:"https://github.com/getsolus/ypkg/blob/v34/ypkg2/packages.py#L166-L254",children:"here"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Note that for some packages, ",(0,i.jsx)(n.code,{children:"/usr/$lib/lib*.so"})," files are not symlinks. In this instance, the main package will be broken with no library files present. This can quickly be determined by looking at the resulting ",(0,i.jsx)(n.code,{children:"pspec_*.xml"})," file generated after running the build.\nIf this happens, simply override with ",(0,i.jsx)(n.code,{children:"patterns"})," or set ",(0,i.jsx)(n.code,{children:"libsplit"})," to \u201Cno\u201D."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"A note on static archives"}),": Unless it is absolutely unavoidable, you should disable static libraries within your build. This is usually fixed by adding ",(0,i.jsx)(n.code,{children:"--disable-static"})," to your configure routine. If ",(0,i.jsx)(n.code,{children:"*.a"})," files are shown in your packaging request, it will be questioned, as they can pose a greater security risk if packages link against these static archives."]}),"\n",(0,i.jsx)(n.h3,{id:"the-docs-subpackage",children:"The docs subpackage"}),"\n",(0,i.jsxs)(n.p,{children:["Currently there is only one pattern which is forced into a ",(0,i.jsx)(n.code,{children:"docs"})," subpackage:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"/usr/share/gtk-doc/html\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If required, you can use ",(0,i.jsx)(n.code,{children:"patterns"})," to move other files into the ",(0,i.jsx)(n.code,{children:"docs"})," subpackage, reducing the size of the main package."]}),"\n",(0,i.jsx)(n.h3,{id:"the-32bit-subpackage",children:"The 32bit subpackage"}),"\n",(0,i.jsxs)(n.p,{children:["This subpackage is only generated during an ",(0,i.jsx)(n.code,{children:"emul32"})," build. The following paths will automatically be placed into a ",(0,i.jsx)(n.code,{children:"32bit"})," subpackage"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"/usr/lib32/lib*.so\n/usr/lib32/lib*.so.*\n/usr/lib32/lib*.a\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Note the same static archive rules apply to ",(0,i.jsx)(n.code,{children:"32bit"})," packages. These packages aren\u2019t as heavily split as we try to discourage their use, though they must be provided in some instances."]}),"\n",(0,i.jsx)(n.h3,{id:"the-utils-subpackage",children:"The utils subpackage"}),"\n",(0,i.jsxs)(n.p,{children:["This is not an automatic subpackage, you must use ",(0,i.jsx)(n.code,{children:"patterns"})," to utilize it. It is provided for instances that it may not be suitable to have binaries present, i.e. for a library package."]}),"\n",(0,i.jsx)(n.h2,{id:"maintenance",children:"Maintenance"}),"\n",(0,i.jsxs)(n.p,{children:["When submitting a changed ",(0,i.jsx)(n.code,{children:"package.yml"}),", it must be accompanied by its corresponding ",(0,i.jsx)(n.code,{children:"pspec_*.xml"})," file, which was generated at build time. This machine file allows the repository maintainers to evaluate the package condition."]}),"\n",(0,i.jsxs)(n.p,{children:["When providing a new version of a package, or a fix, always ensure you increment the ",(0,i.jsx)(n.code,{children:"release"})," number by 1. This ensures that users of your package are correctly updated to the latest version."]}),"\n",(0,i.jsxs)(n.p,{children:["Never submit a package without having first tested it, and ensuring it builds within ",(0,i.jsx)(n.code,{children:"solbuild"}),", a clean chroot environment."]}),"\n",(0,i.jsx)(n.h2,{id:"licenses",children:"Licenses"}),"\n",(0,i.jsxs)(n.p,{children:["All new packages or updates to packages should abide by the ",(0,i.jsx)(n.a,{href:"https://spdx.org/licenses/",children:"SPDX 3.x"})," definitions, with the following policy:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-only"})," licenses, such as ",(0,i.jsx)(n.code,{children:"GPL-2.0-only"}),", should ",(0,i.jsx)(n.strong,{children:"only be declared"}),' as such when the upstream explicitly states "only", otherwise it should always be ',(0,i.jsx)(n.code,{children:"-or-later"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"build-dependencies",children:"Build dependencies"}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsxs)(n.p,{children:["Build dependencies in a ",(0,i.jsx)(n.code,{children:"package.yml"})," should be ordered according to the following rules:"]}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"pkgconfig32"})," dependencies before ",(0,i.jsx)(n.code,{children:"pkgconfig"})," dependencies"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"pkgconfig"})," dependencies before explicitly named dependencies"]}),"\n",(0,i.jsxs)(n.li,{children:["Each of these groups in so-called ASCIIbetical order (that is, alphabetical order with all uppercase letters before lowercase letters, and digits/punctuation before letters, ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/ASCII#Character_order",children:"see here"}),")"]}),"\n"]}),(0,i.jsx)(n.p,{children:"Example:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"builddeps  :\n    - pkgconfig32(dri)\n    - pkgconfig(MYGUI)\n    - pkgconfig(Qt5Core)\n    - pkgconfig(ayatana-appindicator-0.1)\n    - pkgconfig(gtk+-3.0)\n    - The-Powder-Toy\n    - abcMIDI\n    - abcm2ps\n    - git\n    - python-poetry\n    - swig\n"})})]}),"\n",(0,i.jsx)(n.h3,{id:"background",children:"Background"}),"\n",(0,i.jsx)(n.p,{children:"Most software packages that you build will, in one way or another, depend on another software package to provide specific functionality. This is usually achieved by using a library."}),"\n",(0,i.jsx)(n.p,{children:"Any package that is submitted to our repositories is always built in a clean chroot environment. Therefore, any dependencies required to build that package in a reproducible and sane fashion must be listed."}),"\n",(0,i.jsxs)(n.p,{children:["This is achieved by populating the ",(0,i.jsx)(n.code,{children:"builddeps"})," key with a list of build dependencies. We support two kinds of build dependencies: explicitly named, or ",(0,i.jsx)(n.code,{children:"pkgconfig"})," dependencies."]}),"\n",(0,i.jsxs)(n.p,{children:["We prefer the use of ",(0,i.jsx)(n.code,{children:"pkgconfig"})," dependencies. Most modern software will use the ",(0,i.jsx)(n.code,{children:"pkg-config"})," tool (package configuration) to determine which files are required to build the current software. This may include compiler flags, library to link against and where the package headers are located."]}),"\n",(0,i.jsxs)(n.p,{children:["An obvious advantage to supporting ",(0,i.jsx)(n.code,{children:"pkgconfig"})," dependencies is that there is a 1:1 mapping between the name requested by the build and the name used within the ",(0,i.jsx)(n.code,{children:"package.yml"}),". Instead of trying to hunt down the package providing that dependency, you simply list the same name. Any package in the repository will export information about the ",(0,i.jsx)(n.code,{children:".pc"})," files (for ",(0,i.jsx)(n.code,{children:"pkg-config"}),") it contains, enabling you to use those as a build dependency."]}),"\n",(0,i.jsxs)(n.p,{children:["A secondary advantage is that this allows for easily switching or replacing a providing package. When no ",(0,i.jsx)(n.code,{children:"pkgconfig"})," name is available (some packages do not provide these, or it doesn\u2019t make sense for them to), you may use the explicit package name. Always ensure you select the correct package, i.e. the ",(0,i.jsx)(n.code,{children:"-devel"})," subpackage. This provides the necessary symlinks and headers to build packages."]}),"\n",(0,i.jsx)(n.h3,{id:"finding-what-package-provides-a-pkgconfig-dependency-if-any",children:"Finding what package provides a pkgconfig dependency (if any)"}),"\n",(0,i.jsxs)(n.p,{children:["You can use ",(0,i.jsx)(n.code,{children:"go-task"})," to find packages that satisfy ",(0,i.jsx)(n.code,{children:"pkgconfig"})," dependencies. It can search for multiple dependencies at once."]}),"\n",(0,i.jsxs)(n.p,{children:["As an example, if you know a package has the build dependencies ",(0,i.jsx)(n.code,{children:"Qt5Core"})," and ",(0,i.jsx)(n.code,{children:"Qt6Core"}),", you would run:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"go-task pkgconfig -- Qt5Core Qt6Core\n"})}),"\n",(0,i.jsx)(n.p,{children:"This will output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pkgconfig(Qt5Core) found in: qt5-base-devel\npkgconfig(Qt6Core) found in: qt6-base-devel\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You can also determine if there are ",(0,i.jsx)(n.code,{children:"pkgconfigs"})," available from a ",(0,i.jsx)(n.code,{children:"-devel"})," package by doing ",(0,i.jsx)(n.code,{children:"eopkg info (name)"})," and looking for the ",(0,i.jsx)(n.code,{children:"Provides"})," key."]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"eopkg info libgtk-3-devel\n"})}),"\n",(0,i.jsx)(n.p,{children:"In output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"Provides: pkgconfig(gtk+-3.0) pkgconfig(gdk-3.0) pkgconfig(gdk-wayland-3.0) pkgconfig(gail-3.0) pkgconfig(gdk-x11-3.0) pkgconfig(gtk+-unix-print-3.0)\npkgconfig(gtk+-wayland-3.0) pkgconfig(gtk+-x11-3.0)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"using-pkgconfig-dependencies",children:"Using pkgconfig dependencies"}),"\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.code,{children:"builddeps"})," list, use the ",(0,i.jsx)(n.code,{children:"pkgconfig(name)"})," syntax. For example, to add ",(0,i.jsx)(n.code,{children:"gtk+-3.0"})," to the build dependencies, you would do the following:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"builddeps:\n    - pkgconfig(gtk+-3.0)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["At build time the appropriate provider package is selected, in this instance ",(0,i.jsx)(n.code,{children:"libgtk-3-devel"})]}),"\n",(0,i.jsx)(n.h3,{id:"using-explicitly-named-dependencies",children:"Using explicitly named dependencies"}),"\n",(0,i.jsxs)(n.p,{children:["When there is not a ",(0,i.jsx)(n.code,{children:"pkgconfig"})," dependency available, use an explicitly named dependency.\nSimply list the package name."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["When a ",(0,i.jsx)(n.code,{children:"pkgconfig"})," dependency is available you will be asked to use that instead."]})}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"builddeps:\n    - stk-devel\n"})}),"\n",(0,i.jsx)(n.h2,{id:"runtime-dependencies",children:"Runtime dependencies"}),"\n",(0,i.jsxs)(n.p,{children:["Runtime dependencies are extra packages that a package needs in order to function correctly. A common example of this is other libraries. Solus ",(0,i.jsx)(n.code,{children:"eopkg"})," packages will automatically add any binary dependencies at runtime, so that you do not have to."]}),"\n",(0,i.jsxs)(n.p,{children:["All ",(0,i.jsx)(n.code,{children:"devel"})," subpackages automatically depend on their parent package. On top of this, if they provide a ",(0,i.jsx)(n.code,{children:".pc"})," pkg-config file, we export this information, and automatically determine the packages this particular package would need to be able to build against correctly. As such, the majority of dependencies for builds are automatically resolved."]}),"\n",(0,i.jsx)(n.p,{children:"In certain instances, binary dependencies aren\u2019t enough. An example of this might be an extra Python package, or a font, something that is not accounted for by binary checks."}),"\n",(0,i.jsxs)(n.p,{children:["To account for this, you may add extra explicit runtime dependencies to your package. These are taken from the optional ",(0,i.jsx)(n.code,{children:"rundeps"})," ypkg key."]}),"\n",(0,i.jsxs)(n.p,{children:["This key uses the ",(0,i.jsx)(n.code,{children:"dict(s)"})," type, and the default key is the current package ",(0,i.jsx)(n.code,{children:"name"}),". You may express a different subpackage to apply dependencies to by using that name as a key, i.e. ",(0,i.jsx)(n.code,{children:"devel"}),", or ",(0,i.jsx)(n.code,{children:"docs"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"This would add the \u201Cpython-gobject\u201D runtime dependency to the main package:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"rundeps:\n    - python-gobject\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This would add the same dependency, as well as adding it to the ",(0,i.jsx)(n.code,{children:"devel"})," subpackage:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"rundeps:\n    - python-gobject\n    - devel: python-gobject\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Remember this uses the ",(0,i.jsx)(n.code,{children:"dict(s)"})," type, which is very flexible. You can equally express this as follows (adding more deps as an example):"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"rundeps:\n    - python-gobject\n    - devel:\n        - somepackage\n        - someotherpackage\n"})}),"\n",(0,i.jsx)(n.h2,{id:"check-dependencies",children:"Check dependencies"}),"\n",(0,i.jsxs)(n.p,{children:["Check dependencies are a special kind of build dependency reserved for automatic package testing by ",(0,i.jsx)(n.code,{children:"solbuild"}),". Check dependencies should only be used during the ",(0,i.jsx)(n.code,{children:"check"})," build phase.\nWhen a package is part of an automatic build sequence, these dependencies will ",(0,i.jsx)(n.strong,{children:"not"})," be considered when determining build order."]}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(n.p,{children:["The package ",(0,i.jsx)(n.code,{children:"cbindgen"})," includes ",(0,i.jsx)(n.code,{children:"cython"})," in ",(0,i.jsx)(n.code,{children:"checkdeps"})," to run tests in the ",(0,i.jsx)(n.code,{children:"check"})," phase."]}),"\n",(0,i.jsxs)(n.p,{children:["See the ",(0,i.jsx)(n.a,{href:"https://github.com/getsolus/packages/blob/main/packages/c/cbindgen/package.yml",children:"cbindgen package.yml file"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"patching--extra-files",children:"Patching / extra files"}),"\n",(0,i.jsxs)(n.p,{children:["Files that may be required during the build can be accessed via the ",(0,i.jsx)(n.code,{children:"$pkgfiles"})," variable. Note that you must store your files in the ",(0,i.jsx)(n.code,{children:"./files"})," directory relative to your ",(0,i.jsx)(n.code,{children:"package.yml"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Both patches and extra files (such as systemd units) are stored in this directory. Note that if your patch is to address a ",(0,i.jsx)(n.strong,{children:"CVE"}),", you must use the following naming scheme: ",(0,i.jsx)(n.code,{children:"./files/security/cve-xxxx-xxxx.patch"}),", where ",(0,i.jsx)(n.code,{children:"xxxx-xxxx"})," is replaced with the full CVE ID. Complying with this simple rule ensures that we can know at any time the security status of packages when using tools such as ",(0,i.jsx)(n.code,{children:"cve-check-tool"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Solus tooling allows the use of ",(0,i.jsx)(n.code,{children:"./files/security/cve-xxxx-xxxx.nopatch"})," (which isn't applied in the build) to indicate that a CVE has been validated as not applicable to the Solus package. This can be because another patch resolves this CVE, or there is a false positive via ",(0,i.jsx)(n.code,{children:"cve-check-tool"}),'. The contents of the file can describe why it doesn\'t apply without requiring a patch (for example, "Resolved by cve-xxxx-xxxx.patch").']}),"\n",(0,i.jsx)(n.h3,{id:"applying-a-patch",children:"Applying a patch"}),"\n",(0,i.jsxs)(n.p,{children:["It is common practice to apply the patch file(s) within the ",(0,i.jsx)(n.code,{children:"setup"})," section of your build staging. We can achieve this using the ",(0,i.jsx)(n.code,{children:"%patch"})," macro, and the ",(0,i.jsx)(n.code,{children:"$pkgfiles"})," variable. In this example, the required file is located at ",(0,i.jsx)(n.code,{children:"./files/0002-Sample-commit-2.patch"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"%patch -p1 -i $pkgfiles/0002-Sample-commit-2.patch\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Note you use the macro as you would normally use the ",(0,i.jsx)(n.code,{children:"patch"})," command, however use of the macro ensures it performs a clean batch-mode patch."]}),"\n",(0,i.jsxs)(n.p,{children:["If you are using compressed patches, i.e. for the ",(0,i.jsx)(n.code,{children:"bash"})," or ",(0,i.jsx)(n.code,{children:"readline"})," packages, you can pipe the call through ",(0,i.jsx)(n.code,{children:"zcat"})," or similar:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"zcat $pkgfiles/bash43-032.gz | %patch -p0\n"})}),"\n",(0,i.jsx)(n.h4,{id:"handling-multiple-patches",children:"Handling multiple patches"}),"\n",(0,i.jsxs)(n.p,{children:["In the event you need to apply multiple patches, such as a multitude of CVE patches, it may be sensible to use our ",(0,i.jsx)(n.code,{children:"%apply_patches"})," macro, which will apply all the patches listed in a ",(0,i.jsx)(n.code,{children:"series"})," file in your package's ",(0,i.jsx)(n.code,{children:"./files"})," folder. Example below:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"security/cve-xxxx-xxxx.patch\nfix-silliness.patch\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Both of the files above will be applied using stripping number ",(0,i.jsx)(n.code,{children:"-p1"}),". If you need to use a different stripping number, like ",(0,i.jsx)(n.code,{children:"-p4"}),", you can write:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"security/cve-xxxx-xxxx.patch -p4\nfix-silliness.patch\n"})}),"\n",(0,i.jsx)(n.h2,{id:"installing-extra-files",children:"Installing extra files"}),"\n",(0,i.jsxs)(n.p,{children:["We recommend using patches where possible first, as they ensure correct maintenance and will be updated across package versions. If you must install extra files into the directory, please use the ",(0,i.jsx)(n.code,{children:"install"})," command, ensuring you set the correct permissions. Again, files are accessible from the ",(0,i.jsx)(n.code,{children:"./files"})," directory, relative to ",(0,i.jsx)(n.code,{children:"package.yml"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["This is an example of installing a custom profile file, seen in the ",(0,i.jsx)(n.code,{children:"bash"})," package:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"install -m 0644 $pkgfiles/profile $installdir/etc/profile\n"})}),"\n",(0,i.jsx)(n.h2,{id:"patterns",children:"Patterns"}),"\n",(0,i.jsxs)(n.p,{children:["In most instances, ",(0,i.jsx)(n.code,{children:"ypkg"})," will assign the correct location for files, whether it be in the main ",(0,i.jsx)(n.code,{children:"name"})," package, or a subpackage. However, there may be instances where the default does not match the intended behaviour."]}),"\n",(0,i.jsx)(n.p,{children:"In these instances, it is possible to override the default assignment by way of patterns. These are simply a list of paths or globs to ensure a particular file, or set of files, end up in the desired package."}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"patterns"})," key expects a ",(0,i.jsx)(n.code,{children:"dict(s)"})," argument. The default key for each pattern is assumed to be the ",(0,i.jsx)(n.code,{children:"name"})," of the package, so omitting the name would place files into the main package. The value should be a path or pattern you wish to match, ensuring files go to a specific location."]}),"\n",(0,i.jsx)(n.h3,{id:"naming",children:"Naming"}),"\n",(0,i.jsxs)(n.p,{children:["There are two ways to name a pattern. Say you have a package named ",(0,i.jsx)(n.code,{children:"foo"}),", and you want to create a subpackage ",(0,i.jsx)(n.code,{children:"foo-bar"}),". You can do this by creating a pattern with the key ",(0,i.jsx)(n.code,{children:"bar"}),". The name of the key will be appended to the name of the package."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"name       : foo\npatterns   :\n    - bar :\n        - [ ... ]\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If you don't want the name of the subpackage to start with the name of the main package, you can do that, too. Keys starting with a ",(0,i.jsx)(n.code,{children:"^"})," character will not prepend the base package name to the name of the subpackage. If you want to create a package named ",(0,i.jsx)(n.code,{children:"bar"})," from the ",(0,i.jsx)(n.code,{children:"foo"})," package, it would look like this:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"name       : foo\npatterns   :\n    - ^bar :\n        - [ ... ]\n"})}),"\n",(0,i.jsx)(n.h3,{id:"customizing-subpackages",children:"Customizing subpackages"}),"\n",(0,i.jsxs)(n.p,{children:["Often with subpackages, you will want a different component, summary, description, license, or runtime dependencies than the base package. This can be accomplished by turning the keys keys you want to change into lists of ",(0,i.jsx)(n.code,{children:"dict(s)"}),". The key for each entry follows the same rules as the ",(0,i.jsx)(n.code,{children:"patterns"})," key outlined above."]}),"\n",(0,i.jsxs)(n.p,{children:["If you have package ",(0,i.jsx)(n.code,{children:"foo"})," and subpackage ",(0,i.jsx)(n.code,{children:"foo-bar"}),", changing the properties would look like this:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"name       : foo\nlicense    :\n    - bar : MIT\n    - Apache-2.0\ncomponent  :\n    - bar : desktop\n    - desktop.library\nsummary    :\n    - bar : This summary applies to the bar subpackage\n    - This summary applies to the foo package\nrundeps    :\n    - bar :\n        - foo\npatterns   :\n    - bar :\n        - [ ... ]\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Usually, packages will automatically depend on created subpackages by default. Consider making the subpackages depend on the base package instead by adding it as a runtime dependency."})}),"\n",(0,i.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(n.p,{children:["In this example from ",(0,i.jsx)(n.code,{children:"libjpeg-turbo"}),", we move all documentation into the ",(0,i.jsx)(n.code,{children:"docs"})," subpackage:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"patterns   :\n    - docs : [/usr/share/man]\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This example, taken from the ",(0,i.jsx)(n.code,{children:"wayland"})," package, ensures the binaries from ",(0,i.jsx)(n.code,{children:"/usr/bin"})," and the directory ",(0,i.jsx)(n.code,{children:"/usr/share/wayland"})," are located in the ",(0,i.jsx)(n.code,{children:"devel"})," subpackage:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"patterns   :\n    - devel :\n        - /usr/bin\n        - /usr/share/wayland\n"})}),"\n",(0,i.jsxs)(n.p,{children:["To create a header-only package, like ",(0,i.jsx)(n.code,{children:"spirv-headers"}),", create a pattern that matches all files. This can also be used in cases where you don't want any automatically-generated subpackages."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"patterns   :\n    - /*\n"})}),"\n",(0,i.jsx)(n.h2,{id:"replace--rename",children:"Replace / rename"}),"\n",(0,i.jsxs)(n.p,{children:["In some situations, it may be required to replace one package with another, or to rename an existing package. In these instances you should coordinate with a repository maintainer to ensure the replaced package is marked ",(0,i.jsx)(n.strong,{children:"Obsolete"})," within the index. This will ensure correct upgrade paths for users."]}),"\n",(0,i.jsxs)(n.p,{children:["Note that to retire a package, you must also coordinate with a repository maintainer. An ",(0,i.jsx)(n.strong,{children:"Obsolete"})," package is removed by the package manager when the user upgrades. As such, correct upgrade paths need to be established."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"replaces"})," ypkg key uses the ",(0,i.jsx)(n.code,{children:"dict(s)"})," type, and the default key is assumed to be the current package ",(0,i.jsx)(n.code,{children:"name"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["In this example, we rename the ",(0,i.jsx)(n.code,{children:"libgeoclue*"})," packages to use the correct names, and ensure a working upgrade path."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"replaces:\n    - devel: libgeoclue-devel\n    - libgeoclue\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"name"})," of this package is ",(0,i.jsx)(n.code,{children:"geoclue"}),", and the new package names are now:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"geoclue"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"geoclue-devel"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Given the ",(0,i.jsx)(n.code,{children:"replaces"})," values above, ",(0,i.jsx)(n.code,{children:"geoclue"})," now replaces ",(0,i.jsx)(n.code,{children:"libgeoclue"}),", and ",(0,i.jsx)(n.code,{children:"geoclue-devel"})," replaces ",(0,i.jsx)(n.code,{children:"libgeoclue-devel"}),". This is entirely transparent to the user, with a seamless update replacing the old packages with the new renamed packages."]}),"\n",(0,i.jsxs)(n.p,{children:["The repository maintainer marked the old names as ",(0,i.jsx)(n.strong,{children:"Obsolete"})," in the index."]})]})}function h(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return t}});var a=s(67294);let i={},c=a.createContext(i);function t(e){let n=a.useContext(c);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),a.createElement(c.Provider,{value:n},e.children)}}}]);