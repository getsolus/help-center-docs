"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[224],{59256:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var i=s(85893),t=s(11151);const r={title:"Monitoring YAML",summary:"The purpose and format of monitoring.yml"},o="monitoring.yml",d={id:"packaging/monitoring.yml",title:"Monitoring YAML",description:"A monitoring.yml file is not yet required for Solus packages.",source:"@site/docs/packaging/monitoring.yml.md",sourceDirName:"packaging",slug:"/packaging/monitoring.yml",permalink:"/docs/packaging/monitoring.yml",draft:!1,unlisted:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/packaging/monitoring.yml.md",tags:[],version:"current",lastUpdatedAt:1710262657,formattedLastUpdatedAt:"Mar 12, 2024",frontMatter:{title:"Monitoring YAML",summary:"The purpose and format of monitoring.yml"},sidebar:"packagingSidebar",previous:{title:"Git Basics",permalink:"/docs/packaging/git-basics"},next:{title:"Package YAML",permalink:"/docs/packaging/package.yml"}},a={},c=[{value:"systemd as an example",id:"systemd-as-an-example",level:2},{value:"&quot;releases&quot; fields",id:"releases-fields",level:2},{value:"Finding the Anitya ID",id:"finding-the-anitya-id",level:3},{value:"&quot;security&quot; fields",id:"security-fields",level:2},{value:"What is a CPE Name?",id:"what-is-a-cpe-name",level:3},{value:"Finding the CPE Name",id:"finding-the-cpe-name",level:3},{value:"No known CPE",id:"no-known-cpe",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"monitoringyml",children:(0,i.jsx)(n.code,{children:"monitoring.yml"})}),"\n",(0,i.jsx)(n.admonition,{type:"important",children:(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.code,{children:"monitoring.yml"})," file is not yet required for Solus packages."]})}),"\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.code,{children:"monitoring.yml"})," file is included in the Packages repository directory for every Solus package to enable automatic scanning for new releases and security advisories."]}),"\n",(0,i.jsxs)(n.p,{children:["Checking for new releases is done by mapping the Solus package to an ",(0,i.jsx)(n.a,{href:"https://github.com/fedora-infra/anitya",children:"Anitya"})," ID. ",(0,i.jsx)(n.em,{children:"Anitya"})," is a Red Hat project, part of ",(0,i.jsx)(n.a,{href:"https://release-monitoring.org/",children:"release-monitoring.org"})]}),"\n",(0,i.jsxs)(n.p,{children:["Checking for security advisories (",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Common_Vulnerabilities_and_Exposures",children:"CVEs"}),"), is done by mapping the Solus package to a ",(0,i.jsx)(n.em,{children:"Common Platform Enumeration Name"})," (",(0,i.jsx)(n.a,{href:"https://nvd.nist.gov/products/cpe",children:"CPE"}),") from the National Vulnerability Database."]}),"\n",(0,i.jsx)(n.h2,{id:"systemd-as-an-example",children:"systemd as an example"}),"\n",(0,i.jsxs)(n.p,{children:["Let's look at the ",(0,i.jsx)(n.code,{children:"monitoring.yml"})," file for ",(0,i.jsx)(n.code,{children:"systemd"})," as an example."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"systemd"})," directory in the Packages repository looks like this:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"systemd\n\u251c\u2500\u2500 monitoring.yml\n\u251c\u2500\u2500 package.yml\n\u251c\u2500\u2500 pspec_x86_64.xml\n\u2514\u2500\u2500 *lots of other files we can ignore*\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"monitoring.yml"})," looks like this:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'releases:\n  id: 205088\n  ignore:\n    # We only update to the n-1 stable release. So for now we\'re only interested in 252.x updates\n    - "253.*"\n  rss: https://github.com/systemd/systemd-stable/tags.atom\nsecurity:\n  cpe:\n    - vendor: systemd_project\n      product: systemd\n    - vendor: freedesktop\n      product: systemd\n  ignore:\n    # A non-existent CVE added here as an example\n    - CVE-2022-55555\n'})}),"\n",(0,i.jsx)(n.h2,{id:"releases-fields",children:'"releases" fields'}),"\n",(0,i.jsx)(n.p,{children:"Fields used to monitor for new versions."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Required ?"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"id"})}),(0,i.jsx)(n.td,{children:"integer"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsxs)(n.td,{children:["Anitya ID from ",(0,i.jsx)(n.a,{href:"https://release-monitoring.org/",children:"release-monitoring.org"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"ignore"})}),(0,i.jsx)(n.td,{children:"list of regular expressions"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"List of regular expressions enclosed in quotes matching versions to ignore. Include a comment explaining the ignored versions."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"rss"})}),(0,i.jsx)(n.td,{children:"URL"}),(0,i.jsx)(n.td,{children:"No, strongly encouraged"}),(0,i.jsxs)(n.td,{children:['URL for a releases RSS feed. If the only RSS feed you can find for a project is a general "news" feed, don\'t include the field. For GitHub projects, You can use the "tags" or "releases" feed: ',(0,i.jsx)(n.code,{children:"https://github.com/USER/REPOSITORY/tagsORreleases.atom"})]})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"finding-the-anitya-id",children:"Finding the Anitya ID"}),"\n",(0,i.jsxs)(n.p,{children:["To find the Anitya ID, search ",(0,i.jsx)(n.a,{href:"https://release-monitoring.org/",children:"release-monitoring.org"})," by project name, then take the ID out of the URL for the correct search result."]}),"\n",(0,i.jsxs)(n.p,{children:["For example, the correct ",(0,i.jsx)(n.code,{children:"systemd"})," search result for us is ",(0,i.jsx)(n.code,{children:"systemd-stable"})," with the URL ",(0,i.jsx)(n.a,{href:"https://release-monitoring.org/project/205088/",children:"https://release-monitoring.org/project/205088/"}),", so we use ",(0,i.jsx)(n.code,{children:"205088"})," in the ",(0,i.jsx)(n.code,{children:"id"})," field"]}),"\n",(0,i.jsx)(n.h2,{id:"security-fields",children:'"security" fields'}),"\n",(0,i.jsx)(n.p,{children:"Fields used to monitor for security advisories (CVEs)"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Required ?"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"cpe"})}),(0,i.jsx)(n.td,{children:"list"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsxs)(n.td,{children:["List of ",(0,i.jsx)(n.code,{children:"vendor:product"})," pairs from a full CPE name. CVEs for a given project may be published under more than one CPE; include more than one if that is likely."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"ignore"})}),(0,i.jsx)(n.td,{children:"list of strings"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"List of specific CVE identifiers which can be ignored, including a comment explaining why each CVE was ignored. As an example, a CVE can be ignored if the Solus package includes a patch fixing the CVE."})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"what-is-a-cpe-name",children:"What is a CPE Name?"}),"\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Common_Platform_Enumeration",children:"CPE Name"})," is a structured naming scheme for information technology systems, primarily used to search for CVEs."]}),"\n",(0,i.jsx)(n.p,{children:"CPE names contain redundant information we can ignore, we are only interested in the vendor and the product."}),"\n",(0,i.jsxs)(n.p,{children:["For example, ",(0,i.jsx)(n.code,{children:"cpe:2.3:a:systemd_project:systemd"})," is the CPE for the ",(0,i.jsx)(n.em,{children:"vendor"})," ",(0,i.jsx)(n.code,{children:"systemd_project"}),", and the ",(0,i.jsx)(n.em,{children:"product"})," ",(0,i.jsx)(n.code,{children:"systemd"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"finding-the-cpe-name",children:"Finding the CPE Name"}),"\n",(0,i.jsxs)(n.p,{children:["The easiest way to search for CPE Names is with the following command; replacing ",(0,i.jsx)(n.code,{children:"systemd"})," with your search term:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'curl -s -X POST https://cpe-guesser.cve-search.org/search -d "{\\"query\\": [\\"systemd\\"]}" | jq .\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Note this command uses the ",(0,i.jsx)(n.code,{children:"jq"})," tool, which you may not have installed:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo eopkg it jq\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If you have our ",(0,i.jsx)(n.a,{href:"/docs/packaging/prepare-for-packaging#set-up-repository-helper-functions-optional",children:"helper functions"})," installed, you can use the following command:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cpesearch systemd\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:'Convert your search term to lower case and try variations on the search term if you get no results. The CPE search is not a "fuzzy" search.'})}),"\n",(0,i.jsx)(n.p,{children:"The command returns the following:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:'[\n  [\n    49192,\n    "cpe:2.3:a:ubuntu_developers:systemd"\n  ],\n  [\n    116392,\n    "cpe:2.3:a:lennart_poettering:systemd"\n  ],\n  [\n    120506,\n    "cpe:2.3:a:freedesktop:systemd"\n  ],\n  [\n    120627,\n    "cpe:2.3:a:systemd_project:systemd"\n  ]\n]\n'})}),"\n",(0,i.jsx)(n.p,{children:"Ignore the numerical ids, let's walk through the CPEs by vendor:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ubuntu_developers"})," is for ",(0,i.jsx)(n.code,{children:"systemd"})," patched by Ubuntu; we can ignore it"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"lennart_poettering"})," is for the main ",(0,i.jsx)(n.code,{children:"systemd"})," developer and is probably a bleeding edge vendor; ignore it"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"freedesktop"})," is from freedesktop.org and is a good candidate, so we add it"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"systemd_project"})," is a good candidate, so we add it"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"no-known-cpe",children:"No known CPE"}),"\n",(0,i.jsx)(n.p,{children:"If an established product hasn't had a security advisory in the past, it might not have a CPE."}),"\n",(0,i.jsxs)(n.p,{children:["In that case, include an empty ",(0,i.jsx)(n.code,{children:"security"})," and ",(0,i.jsx)(n.code,{children:"cpe"})," field with a comment in the following format:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"# No known CPE, checked 20240123\nsecurity:\n  cpe: ~\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"If you are unsure of what to do in this case, feel free to ask in the Solus Packaging Matrix room."})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>o});var i=s(67294);const t={},r=i.createContext(t);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);