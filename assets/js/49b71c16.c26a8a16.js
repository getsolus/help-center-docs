"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[3783],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>g});var n=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function r(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=n.createContext({}),s=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},c=function(e){var a=s(e.components);return n.createElement(o.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=s(t),k=i,g=d["".concat(o,".").concat(k)]||d[k]||u[k]||l;return t?n.createElement(g,p(p({ref:a},c),{},{components:t})):n.createElement(g,p({ref:a},c))}));function g(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var l=t.length,p=new Array(l);p[0]=k;var r={};for(var o in a)hasOwnProperty.call(a,o)&&(r[o]=a[o]);r.originalType=e,r[d]="string"==typeof e?e:i,p[1]=r;for(var s=2;s<l;s++)p[s]=t[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},4436:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>s});var n=t(7462),i=(t(7294),t(3905));const l={title:"Packaging Practices",summary:"Learning the best packaging practices"},p="Packaging Practices",r={unversionedId:"packaging/packaging-practices",id:"packaging/packaging-practices",title:"Packaging Practices",description:"The primary goal of ypkg is ease of maintenance. In order to do so we ensure packages in the binary repository adhere to a strict set of conventions and practices.",source:"@site/docs/packaging/packaging-practices.md",sourceDirName:"packaging",slug:"/packaging/packaging-practices",permalink:"/docs/packaging/packaging-practices",draft:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/packaging/packaging-practices.md",tags:[],version:"current",frontMatter:{title:"Packaging Practices",summary:"Learning the best packaging practices"},sidebar:"packagingSidebar",previous:{title:"Package YAML",permalink:"/docs/packaging/package.yml"},next:{title:"Procedures",permalink:"/docs/category/procedures"}},o={},s=[{value:"Package naming",id:"package-naming",level:2},{value:"The devel subpackage",id:"the-devel-subpackage",level:3},{value:"The docs subpackage",id:"the-docs-subpackage",level:3},{value:"The 32bit subpackage",id:"the-32bit-subpackage",level:3},{value:"The utils subpackage",id:"the-utils-subpackage",level:3},{value:"Maintenance",id:"maintenance",level:2},{value:"Licenses",id:"licenses",level:2},{value:"Build dependencies",id:"build-dependencies",level:2},{value:"Background",id:"background",level:3},{value:"Finding what package provides a dependency (if any)",id:"finding-what-package-provides-a-dependency-if-any",level:3},{value:"Using pkgconfig dependencies",id:"using-pkgconfig-dependencies",level:3},{value:"Using explicitly named dependencies",id:"using-explicitly-named-dependencies",level:3},{value:"Runtime dependencies",id:"runtime-dependencies",level:2},{value:"Patching / extra files",id:"patching--extra-files",level:2},{value:"Applying a patch",id:"applying-a-patch",level:3},{value:"Handling multiple patches",id:"handling-multiple-patches",level:4},{value:"Installing extra files",id:"installing-extra-files",level:2},{value:"Patterns",id:"patterns",level:2},{value:"Replace / rename",id:"replace--rename",level:2}],c={toc:s},d="wrapper";function u(e){let{components:a,...t}=e;return(0,i.kt)(d,(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"packaging-practices"},"Packaging Practices"),(0,i.kt)("p",null,"The primary goal of ",(0,i.kt)("inlineCode",{parentName:"p"},"ypkg")," is ease of maintenance. In order to do so we ensure packages in the binary repository adhere to a strict set of conventions and practices."),(0,i.kt)("p",null,"The next few sections will detail these."),(0,i.kt)("h2",{id:"package-naming"},"Package naming"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ypkg")," tool does not allow for custom subpackages or subpackage naming, and will enforce its own policy. This can be eased somewhat through the use of ",(0,i.kt)("inlineCode",{parentName:"p"},"patterns"),", however the available subpackage names are limited."),(0,i.kt)("p",null,"We request you use (where possible) the upstream source name for your package. Subpackage names (when generated) are constructed by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," value first, then applying the subpackage name as such:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pkgname-$subpackage")),(0,i.kt)("p",null,"Subpackages are fully automatic with ",(0,i.kt)("inlineCode",{parentName:"p"},"ypkg"),", and are created based on file patterns. All subpackages automatically depend on the main package, to ensure correct operation. In the following explanations, ",(0,i.kt)("inlineCode",{parentName:"p"},"$lib")," is used to refer to the host library directory, i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"lib")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"lib64")," (or ",(0,i.kt)("inlineCode",{parentName:"p"},"lib32")," on ",(0,i.kt)("inlineCode",{parentName:"p"},"emul32")," builds)."),(0,i.kt)("p",null,"For the libraries / packages of the following programming languages, you should typically use the following template for it."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Language"),(0,i.kt)("th",{parentName:"tr",align:null},"Prefix"),(0,i.kt)("th",{parentName:"tr",align:null},"Example"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Haskell"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"haskell-")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"text-binary")," would be ",(0,i.kt)("inlineCode",{parentName:"td"},"haskell-text-binary"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Perl"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"perl-")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"algorithm-diff")," would be ",(0,i.kt)("inlineCode",{parentName:"td"},"perl-algorithm-diff"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Python"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"python-")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"wikipedia")," would be ",(0,i.kt)("inlineCode",{parentName:"td"},"python-wikipedia")," ",(0,i.kt)("strong",{parentName:"td"},"even if only Python3 is enabled"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Ruby"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ruby-")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"gssapi")," would be ",(0,i.kt)("inlineCode",{parentName:"td"},"ruby-gssapi"))))),(0,i.kt)("h3",{id:"the-devel-subpackage"},"The devel subpackage"),(0,i.kt)("p",null,"This is invariably created for packages that provide libraries and development headers. The following rules will result in files being placed in a ",(0,i.kt)("inlineCode",{parentName:"p"},"devel")," subpackage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/usr/include\n/usr/$lib/lib*.so\n/usr/$lib/lib*.a\n/usr/share/man2/\n/usr/share/man3/\n/usr/share/pkgconfig\n/usr/$lib/pkgconfig\n/usr/share/cmake\n/usr/share/vala\n")),(0,i.kt)("p",null,"Note that for some packages, ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/$lib/lib*.so")," files are not symlinks. In this instance, the main package will be broken with no library files present. This can quickly be determined by looking at the resulting .xml file generated after running the build.\nIf this happens, simply override with ",(0,i.kt)("inlineCode",{parentName:"p"},"patterns")," or set ",(0,i.kt)("inlineCode",{parentName:"p"},"libsplit")," to \u201cno\u201d."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"A note on static archives"),": Unless it is absolutely unavoidable, you should disable static libraries within your build. This is usually fixed by adding ",(0,i.kt)("inlineCode",{parentName:"p"},"--disable-static")," to your configure routine. If ",(0,i.kt)("inlineCode",{parentName:"p"},"*.a")," files are shown in your packaging request, it will be\nquestioned, as they can pose a greater security risk if packages link against these static archives."),(0,i.kt)("h3",{id:"the-docs-subpackage"},"The docs subpackage"),(0,i.kt)("p",null,"Currently there is only one pattern which is forced into a ",(0,i.kt)("inlineCode",{parentName:"p"},"docs")," subpackage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/usr/share/gtk-doc\n")),(0,i.kt)("p",null,"If required, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"patterns")," to move other files into the ",(0,i.kt)("inlineCode",{parentName:"p"},"docs")," subpackage, making it smaller."),(0,i.kt)("h3",{id:"the-32bit-subpackage"},"The 32bit subpackage"),(0,i.kt)("p",null,"This subpackage is only generated during an ",(0,i.kt)("inlineCode",{parentName:"p"},"emul32")," build. The following paths will automatically be placed into a ",(0,i.kt)("inlineCode",{parentName:"p"},"32bit")," subpackage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/usr/lib32/lib*.so\n/usr/lib32/lib*.so.*\n/usr/lib32/lib*.a\n")),(0,i.kt)("p",null,"Note the same static archive rules apply to ",(0,i.kt)("inlineCode",{parentName:"p"},"32bit")," packages. These packages aren\u2019t as heavily split as we try to discourage their use, though they must be provided in some instances."),(0,i.kt)("h3",{id:"the-utils-subpackage"},"The utils subpackage"),(0,i.kt)("p",null,"This is not an automatic subpackage, you must use ",(0,i.kt)("inlineCode",{parentName:"p"},"patterns")," to utilise it. It is provided for instances that it may not be suitable to have binaries present, i.e. for a library package."),(0,i.kt)("h2",{id:"maintenance"},"Maintenance"),(0,i.kt)("p",null,"When submitting a changed ",(0,i.kt)("inlineCode",{parentName:"p"},"package.yml"),", it must be accompanied by its corresponding ",(0,i.kt)("inlineCode",{parentName:"p"},"pspec_*.xml")," file, which was generated at build time. This machine file allows the repository maintainers to evaluate the package condition."),(0,i.kt)("p",null,"When providing a new version of a package, or a fix, always ensure you increment the ",(0,i.kt)("inlineCode",{parentName:"p"},"release")," number by 1. This ensures that users of your package are correctly updated to the latest version."),(0,i.kt)("p",null,"Never submit a package without having first tested it, and ensuring it builds within ",(0,i.kt)("inlineCode",{parentName:"p"},"solbuild"),", a clean chroot environment."),(0,i.kt)("h2",{id:"licenses"},"Licenses"),(0,i.kt)("p",null,"All new packages or updates to packages should abide by the ",(0,i.kt)("a",{parentName:"p",href:"https://spdx.org/licenses/"},"SPDX 3.x")," definitions, with the following policy:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-only")," licenses, such as ",(0,i.kt)("inlineCode",{parentName:"li"},"GPL-2.0-only"),", should ",(0,i.kt)("strong",{parentName:"li"},"only be declared"),' as such when the upstream explicitly states "only", otherwise it should always be ',(0,i.kt)("inlineCode",{parentName:"li"},"-or-later"),".")),(0,i.kt)("h2",{id:"build-dependencies"},"Build dependencies"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Build dependencies should be ordered according to the following rules in ",(0,i.kt)("inlineCode",{parentName:"p"},"package.yml"),":"),(0,i.kt)("ol",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"pkgconfig")," dependencies before explicitly named dependencies"),(0,i.kt)("li",{parentName:"ol"},"Each of these two groups in so-called ASCIIbetical order (that is, alphabetical order with all uppercase letters before lowercase letters, and digits/punctuation before letters, ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/ASCII#Character_order"},"see here"),")")),(0,i.kt)("p",{parentName:"admonition"},"Example:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"builddeps  :\n    - pkgconfig(MYGUI)\n    - pkgconfig(Qt5Core)\n    - pkgconfig(ayatana-appindicator-0.1)\n    - pkgconfig(dri)\n    - pkgconfig(gtk+-3.0)\n    - The-Powder-Toy\n    - abcMIDI\n    - abcm2ps\n    - git\n    - python-poetry\n    - swig\n"))),(0,i.kt)("h3",{id:"background"},"Background"),(0,i.kt)("p",null,"Most software packages that you build will, in one way or another, depend on another software package to provide specific functionality. This is usually achieved by using a library."),(0,i.kt)("p",null,"Any package that is submitted to our repositories is always built in a clean chroot environment. Therefore, any dependencies required to build that package in a reproducible and sane fashion must be listed."),(0,i.kt)("p",null,"This is achieved by populating the ",(0,i.kt)("inlineCode",{parentName:"p"},"builddeps")," key with a list of build dependencies. We support two kinds of build dependencies: explicitly named, or ",(0,i.kt)("inlineCode",{parentName:"p"},"pkgconfig")," dependencies."),(0,i.kt)("p",null,"We prefer the use of ",(0,i.kt)("inlineCode",{parentName:"p"},"pkgconfig")," dependencies. Most modern software will use the ",(0,i.kt)("inlineCode",{parentName:"p"},"pkg-config")," tool (package configuration) to determine which files are required to build the current software. This may include compiler flags, library to link against and where the package headers are located."),(0,i.kt)("p",null,"An obvious advantage to supporting ",(0,i.kt)("inlineCode",{parentName:"p"},"pkgconfig")," dependencies is that there is a 1:1 mapping between the name requested by the build and the name used within the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.yml"),". Instead of trying to hunt down the package providing that dependency, you simply list the same name. Any package in the repository will export information about the ",(0,i.kt)("inlineCode",{parentName:"p"},".pc")," files (for ",(0,i.kt)("inlineCode",{parentName:"p"},"pkg-config"),") it contains, enabling you to use those as a build dependency."),(0,i.kt)("p",null,"A secondary advantage is that this allows for easily switching or replacing a providing package. When no ",(0,i.kt)("inlineCode",{parentName:"p"},"pkgconfig")," name is available (some packages do not provide these, or it doesn\u2019t make sense for them to), you\nmay use the explicit package name. Always ensure you select the correct package, i.e. the ",(0,i.kt)("inlineCode",{parentName:"p"},"-devel")," subpackage. This provides the necessary symlinks and headers to build packages."),(0,i.kt)("h3",{id:"finding-what-package-provides-a-dependency-if-any"},"Finding what package provides a dependency (if any)"),(0,i.kt)("p",null,"The script ",(0,i.kt)("inlineCode",{parentName:"p"},"common/Scripts/epcsearch.py")," is used to find packages that satisfy build dependencies. We recommend making an alias for your shell for this."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"alias epcsearch='~/packaging/common/Scripts/epcsearch.py'\n")),(0,i.kt)("p",null,"As an example, if you know a package has a build dependency of ",(0,i.kt)("inlineCode",{parentName:"p"},"gtk+-3.0")," you would run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"epcsearch gtk+-3.0\n")),(0,i.kt)("p",null,"This will output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"epcsearch gtk+-3.0\npkgconfig(gtk+-3.0) found in: libgtk-3-devel\npkgconfig32(gtk+-3.0) found in: libgtk-3-32bit-devel\n")),(0,i.kt)("p",null,"You can also determine if there are pkgconfigs available from a -devel package by doing ",(0,i.kt)("inlineCode",{parentName:"p"},"eopkg info (name)")," and looking for the ",(0,i.kt)("inlineCode",{parentName:"p"},"Provides")," key."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"eopkg info libgtk-3-devel\n")),(0,i.kt)("p",null,"In output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Provides: pkgconfig(gtk+-3.0) pkgconfig(gdk-3.0) pkgconfig(gdk-wayland-3.0) pkgconfig(gail-3.0) pkgconfig(gdk-x11-3.0) pkgconfig(gtk+-unix-print-3.0)\npkgconfig(gtk+-wayland-3.0) pkgconfig(gtk+-x11-3.0)\n")),(0,i.kt)("h3",{id:"using-pkgconfig-dependencies"},"Using pkgconfig dependencies"),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"builddeps")," list, simply use the ",(0,i.kt)("inlineCode",{parentName:"p"},"pkgconfig(name)")," syntax. For example, to add gtk+-3.0 to the build dependencies, we would do the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"builddeps:\n    - pkgconfig(gtk+-3.0)\n")),(0,i.kt)("p",null,"At build time the appropriate provider package is selected, in this instance ",(0,i.kt)("inlineCode",{parentName:"p"},"libgtk-3-devel")),(0,i.kt)("h3",{id:"using-explicitly-named-dependencies"},"Using explicitly named dependencies"),(0,i.kt)("p",null,"When there is not a ",(0,i.kt)("inlineCode",{parentName:"p"},"pkgconfig")," dependency available, use an explicitly named dependency.\nSimply list the package name."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"When a ",(0,i.kt)("inlineCode",{parentName:"p"},"pkgconfig")," dependency is available you will be asked to use that instead.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"builddeps:\n    - stk-devel\n")),(0,i.kt)("h2",{id:"runtime-dependencies"},"Runtime dependencies"),(0,i.kt)("p",null,"Runtime dependencies are extra packages that a package needs in order to function correctly. A common example of this is other libraries. Solus ",(0,i.kt)("inlineCode",{parentName:"p"},"eopkg")," packages will automatically add any binary dependencies at\nruntime, so that you do not have to."),(0,i.kt)("p",null,"All ",(0,i.kt)("inlineCode",{parentName:"p"},"devel")," subpackages automatically depend on their parent package. On top of this, if they provide a ",(0,i.kt)("inlineCode",{parentName:"p"},".pc")," pkg-config file, we export this information, and automatically determine the packages this particular\npackage would need to be able to build against correctly. As such, the majority of dependencies for builds are automatically resolved."),(0,i.kt)("p",null,"In certain instances, binary dependencies aren\u2019t enough. An example of this might be an extra Python package, or a font, something that is not accounted for by binary checks."),(0,i.kt)("p",null,"To account for this, you may add extra explicit runtime dependencies to your package. These are taken from the optional ",(0,i.kt)("inlineCode",{parentName:"p"},"rundeps")," ypkg key."),(0,i.kt)("p",null,"This key uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"dict(s)")," type, and the default key is the current package ",(0,i.kt)("inlineCode",{parentName:"p"},"name"),". You may express a different subpackage to apply dependencies to by using that name as a key, i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"devel"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"docs"),"."),(0,i.kt)("p",null,"This would add the \u201cpython-gobject\u201d runtime dependency to the main package:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"rundeps:\n    - python-gobject\n")),(0,i.kt)("p",null,"This would add the same dependency, as well as adding it to the ",(0,i.kt)("inlineCode",{parentName:"p"},"devel")," subpackage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"rundeps:\n    - python-gobject\n    - devel: python-gobject\n")),(0,i.kt)("p",null,"Remember this uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"dict(s)")," type, which is very flexible. You can equally express this as follows (adding more deps as an example):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"rundeps:\n    - python-gobject\n    - devel:\n        - somepackage\n        - someotherpackage\n")),(0,i.kt)("h2",{id:"patching--extra-files"},"Patching / extra files"),(0,i.kt)("p",null,"Files that may be required during the build can be accessed via the ",(0,i.kt)("inlineCode",{parentName:"p"},"$pkgfiles")," variable. Note that you must store your files in the ",(0,i.kt)("inlineCode",{parentName:"p"},"./files")," directory relative to your ",(0,i.kt)("inlineCode",{parentName:"p"},"package.yml")),(0,i.kt)("p",null,"Both patches and extra files (such as systemd units) are stored in this directory. Note that if your patch is to address a ",(0,i.kt)("strong",{parentName:"p"},"CVE"),", you must use the following naming scheme: ",(0,i.kt)("inlineCode",{parentName:"p"},"./files/security/cve-xxxx-xxxx.patch")),(0,i.kt)("p",null,"Where ",(0,i.kt)("inlineCode",{parentName:"p"},"xxxx-xxxx")," is replaced with the full CVE ID. Complying with this simple rule ensures that we can know at any time the security status of packages when using tools such as ",(0,i.kt)("inlineCode",{parentName:"p"},"cve-check-tool")),(0,i.kt)("p",null,"Solus tooling allows the use of ",(0,i.kt)("inlineCode",{parentName:"p"},"./files/security/cve-xxxx-xxxx.nopatch")," (which isn't applied in the build) to indicate that a CVE has been validated as not applicable to the Solus package. This can be because another patch resolves this CVE, or there is a false positive via ",(0,i.kt)("inlineCode",{parentName:"p"},"cve-check-tool"),". The contents of the file can describe why it doesn't apply without requiring a patch (i.e. Resolved by cve-xxxx-xxxx.patch)."),(0,i.kt)("h3",{id:"applying-a-patch"},"Applying a patch"),(0,i.kt)("p",null,"It is common practice to apply the patch file(s) within the ",(0,i.kt)("inlineCode",{parentName:"p"},"setup")," section of your build staging. We can achieve this using the ",(0,i.kt)("inlineCode",{parentName:"p"},"%patch")," macro, and the ",(0,i.kt)("inlineCode",{parentName:"p"},"$pkgfiles")," variable. In this example, the required file is located\nat ",(0,i.kt)("inlineCode",{parentName:"p"},"./files/0002-Sample-commit-2.patch")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"%patch -p1 -i $pkgfiles/0002-Sample-commit-2.patch\n")),(0,i.kt)("p",null,"Note you use the macro as you would normally use the patch command, however use of the macro ensures it performs a clean batch-mode patch."),(0,i.kt)("p",null,"If you are using compressed patches, i.e. for the ",(0,i.kt)("inlineCode",{parentName:"p"},"bash")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"readline")," packages, you can pipe the call through ",(0,i.kt)("inlineCode",{parentName:"p"},"zcat")," or similar:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"zcat $pkgfiles/bash43-032.gz | %patch -p0\n")),(0,i.kt)("h4",{id:"handling-multiple-patches"},"Handling multiple patches"),(0,i.kt)("p",null,"In the event you need to apply multiple patches, such as a multitude of CVE patches, it may be sensible to use our ",(0,i.kt)("inlineCode",{parentName:"p"},"%apply_patches")," macro, which will apply all the patches listed in a ",(0,i.kt)("inlineCode",{parentName:"p"},"series")," file in your package's ",(0,i.kt)("inlineCode",{parentName:"p"},"./files")," folder. Example below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"security/cve-xxxx-xxxx.patch\nfix-silliness.patch\n")),(0,i.kt)("p",null,"Both of the files above will be applied using ",(0,i.kt)("inlineCode",{parentName:"p"},"-p1"),". If you need to use stripping num, like ",(0,i.kt)("inlineCode",{parentName:"p"},"-p4"),", you can do something like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"security/cve-xxxx-xxxx.patch -p4\nfix-silliness.patch\n")),(0,i.kt)("h2",{id:"installing-extra-files"},"Installing extra files"),(0,i.kt)("p",null,"We recommend using patches where possible first, as they ensure correct maintenance and will be updated across package versions. If you must install extra files into the directory, please use the ",(0,i.kt)("inlineCode",{parentName:"p"},"install"),"\ncommand, ensuring you set the correct permissions. Again, files are accessible from the ",(0,i.kt)("inlineCode",{parentName:"p"},"./files/")," directory, relative to ",(0,i.kt)("inlineCode",{parentName:"p"},"package.yml"),"."),(0,i.kt)("p",null,"This is an example of installing a custom profile file, seen in the ",(0,i.kt)("inlineCode",{parentName:"p"},"bash")," package:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"install -m 0644 $pkgfiles/profile $installdir/etc/profile\n")),(0,i.kt)("h2",{id:"patterns"},"Patterns"),(0,i.kt)("p",null,"In most instances, ",(0,i.kt)("inlineCode",{parentName:"p"},"ypkg")," will assign the correct location for files, whether it be in the main ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," package, or a subpackage. However there may be instances where the default does not match the intended behaviour."),(0,i.kt)("p",null,"In these instances it is possible to override the default assignment by way of patterns. These are simply a list of paths or globs to ensure a particular file, or set of files, end up in the desired location."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"patterns")," key expects a ",(0,i.kt)("inlineCode",{parentName:"p"},"dict(s)")," argument. The default key for each pattern is assumed to be the ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," of the package, so omitting the name would place files into the main package. The value should be a\npath or pattern you wish to match, ensuring files go to a specific location."),(0,i.kt)("p",null,"In this example from libjpeg-turbo, we move all documentation into the ",(0,i.kt)("inlineCode",{parentName:"p"},"docs")," subpackage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"patterns:\n    - docs: [/usr/share/man]\n")),(0,i.kt)("p",null,"This example, taken from the wayland package, ensures the binaries from ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/bin")," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/share/wayland")," are located in the ",(0,i.kt)("inlineCode",{parentName:"p"},"devel")," subpackage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"patterns:\n    - devel:\n        - /usr/bin\n        - /usr/share/wayland\n")),(0,i.kt)("h2",{id:"replace--rename"},"Replace / rename"),(0,i.kt)("p",null,"In some situations, it may be required to replace one package with another, or to rename an existing package. In these instances you should coordinate with a repository maintainer to ensure the replaced package is\nmarked ",(0,i.kt)("strong",{parentName:"p"},"Obsolete")," within the index. This will ensure correct upgrade paths for users."),(0,i.kt)("p",null,"Note that to retire a package, you must also coordinate with a repository maintainer. An ",(0,i.kt)("strong",{parentName:"p"},"Obsolete")," package is removed by the package manager when the user upgrades. As such, correct upgrade paths need to be\nestablished."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"replaces")," ypkg key uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"dict(s)")," type, and the default key is assumed to be the current package ",(0,i.kt)("inlineCode",{parentName:"p"},"name"),"."),(0,i.kt)("p",null,"In this example, we rename the ",(0,i.kt)("inlineCode",{parentName:"p"},"libgeoclue*")," packages to use the correct names, and ensure a working upgrade path."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"replaces:\n    - devel: libgeoclue-devel\n    - libgeoclue\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," of this package is ",(0,i.kt)("strong",{parentName:"p"},"geoclue"),", and the new package names are now:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"geoclue"),(0,i.kt)("li",{parentName:"ul"},"geoclue-devel")),(0,i.kt)("p",null,"Given the ",(0,i.kt)("inlineCode",{parentName:"p"},"replaces")," values above, ",(0,i.kt)("strong",{parentName:"p"},"geoclue")," now replaces ",(0,i.kt)("strong",{parentName:"p"},"libgeoclue"),", and ",(0,i.kt)("strong",{parentName:"p"},"geoclue-devel")," replaces ",(0,i.kt)("strong",{parentName:"p"},"libgeoclue-devel"),". This is entirely transparent to the user, with a seamless update replacing the old\npackages with the new renamed packages."),(0,i.kt)("p",null,"The repository maintainer marked the old names as ",(0,i.kt)("strong",{parentName:"p"},"Obsolete")," in the index."))}u.isMDXComponent=!0}}]);