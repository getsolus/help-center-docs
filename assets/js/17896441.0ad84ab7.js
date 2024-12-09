"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([["7048"],{43672:function(e,t,n){n.d(t,{Z:function(){return c}});var i=n(85893);n(67294);var s=n(74904),l=n(72372),r=n(50490),a=n(77793);function o(e){let{className:t}=e;return(0,i.jsx)(a.Z,{type:"caution",title:(0,i.jsx)(l.cI,{}),className:(0,s.Z)(t,r.k.common.unlistedBanner),children:(0,i.jsx)(l.eU,{})})}function c(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.T$,{}),(0,i.jsx)(o,{...e})]})}},38154:function(e,t,n){n.d(t,{Z:()=>d});var i=n("85893");n("67294");var s=n("74904"),l=n("72372"),r=n("50490"),a=n("77793");function o(e){let{className:t}=e;return(0,i.jsx)(a.Z,{type:"caution",title:(0,i.jsx)(l.ht,{}),className:(0,s.Z)(t,r.k.common.draftBanner),children:(0,i.jsx)(l.xo,{})})}var c=n("43672");function d(e){let{metadata:t}=e,{unlisted:n,frontMatter:s}=t;return(0,i.jsxs)(i.Fragment,{children:[(n||s.unlisted)&&(0,i.jsx)(c.Z,{}),s.draft&&(0,i.jsx)(o,{})]})}},19572:function(e,t,n){n.d(t,{Z:()=>f});var i=n("85893");n("67294");var s=n("74904"),l=n("50490"),r=n("71364"),a=n("16896"),o=n("27544"),c=n("1822"),d=n("7571");function u(e){return(0,i.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,i.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}let m="breadcrumbHomeIcon_YNFT";function h(){let e=(0,d.ZP)("/");return(0,i.jsx)("li",{className:"breadcrumbs__item",children:(0,i.jsx)(o.Z,{"aria-label":(0,c.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,i.jsx)(u,{className:m})})})}let b="breadcrumbsContainer_Z_bl";function v(e){let{children:t,href:n,isLast:s}=e,l="breadcrumbs__link";return s?(0,i.jsx)("span",{className:l,itemProp:"name",children:t}):n?(0,i.jsx)(o.Z,{className:l,href:n,itemProp:"item",children:(0,i.jsx)("span",{itemProp:"name",children:t})}):(0,i.jsx)("span",{className:l,children:t})}function x(e){let{children:t,active:n,index:l,addMicrodata:r}=e;return(0,i.jsxs)("li",{...r&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,s.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,i.jsx)("meta",{itemProp:"position",content:String(l+1)})]})}function f(){let e=(0,r.s1)(),t=(0,a.Ns)();return e?(0,i.jsx)("nav",{className:(0,s.Z)(l.k.docs.docBreadcrumbs,b),"aria-label":(0,c.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,i.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,i.jsx)(h,{}),e.map((t,n)=>{let s=n===e.length-1,l="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,i.jsx)(x,{active:s,index:n,addMicrodata:!!l,children:(0,i.jsx)(v,{href:l,isLast:s,children:t.label})},n)})]})}):null}},39436:function(e,t,n){n.r(t),n.d(t,{default:()=>R});var i=n("85893"),s=n("67294"),l=n("81921"),r=n("57100");let a=s.createContext(null);function o(e){var t;let{children:n,content:l}=e;let r=(t=l,(0,s.useMemo)(()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,contentTitle:t.contentTitle,toc:t.toc}),[t]));return(0,i.jsx)(a.Provider,{value:r,children:n})}function c(){let e=(0,s.useContext)(a);if(null===e)throw new r.i6("DocProvider");return e}function d(){let{metadata:e,frontMatter:t,assets:n}=c();return(0,i.jsx)(l.d,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var u=n("74904"),m=n("72649"),h=n("16583");function b(){let{metadata:e}=c();return(0,i.jsx)(h.Z,{previous:e.previous,next:e.next})}var v=n("70271"),x=n("6682"),f=n("50490"),p=n("50905"),j=n("57216");function g(){let{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s,tags:l}=e,r=l.length>0,a=!!(t||n||s);return r||a?(0,i.jsxs)("footer",{className:(0,u.Z)(f.k.docs.docFooter,"docusaurus-mt-lg"),children:[r&&(0,i.jsx)("div",{className:(0,u.Z)("row margin-top--sm",f.k.docs.docFooterTagsRow),children:(0,i.jsx)("div",{className:"col",children:(0,i.jsx)(p.Z,{tags:l})})}),a&&(0,i.jsx)(j.Z,{className:(0,u.Z)("margin-top--sm",f.k.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s})]}):null}var Z=n("6560"),_=n("51515"),C=n("1822");let N={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function L(e){let{collapsed:t,...n}=e;return(0,i.jsx)("button",{type:"button",...n,className:(0,u.Z)("clean-btn",N.tocCollapsibleButton,!t&&N.tocCollapsibleButtonExpanded,n.className),children:(0,i.jsx)(C.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}let k={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function T(e){let{toc:t,className:n,minHeadingLevel:s,maxHeadingLevel:l}=e,{collapsed:r,toggleCollapsed:a}=(0,Z.u)({initialState:!0});return(0,i.jsxs)("div",{className:(0,u.Z)(k.tocCollapsible,!r&&k.tocCollapsibleExpanded,n),children:[(0,i.jsx)(L,{collapsed:r,onClick:a}),(0,i.jsx)(Z.z,{lazy:!0,className:k.tocCollapsibleContent,collapsed:r,children:(0,i.jsx)(_.Z,{toc:t,minHeadingLevel:s,maxHeadingLevel:l})})]})}let y="tocMobile_ITEo";function w(){let{toc:e,frontMatter:t}=c();return(0,i.jsx)(T,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.Z)(f.k.docs.docTocMobile,y)})}var B=n("28669");function E(){let{toc:e,frontMatter:t}=c();return(0,i.jsx)(B.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:f.k.docs.docTocDesktop})}var I=n("52068"),M=n("27913");function A(e){let{children:t}=e,n=function(){let{metadata:e,frontMatter:t,contentTitle:n}=c();return!t.hide_title&&void 0===n?e.title:null}();return(0,i.jsxs)("div",{className:(0,u.Z)(f.k.docs.docMarkdown,"markdown"),children:[n&&(0,i.jsx)("header",{children:(0,i.jsx)(I.Z,{as:"h1",children:n})}),(0,i.jsx)(M.Z,{children:t})]})}var H=n("19572"),V=n("38154");let O={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function P(e){let{children:t}=e,n=function(){let{frontMatter:e,toc:t}=c(),n=(0,m.i)(),s=e.hide_table_of_contents,l=!s&&t.length>0,r=l?(0,i.jsx)(w,{}):void 0;return{hidden:s,mobile:r,desktop:l&&("desktop"===n||"ssr"===n)?(0,i.jsx)(E,{}):void 0}}(),{metadata:s}=c();return(0,i.jsxs)("div",{className:"row",children:[(0,i.jsxs)("div",{className:(0,u.Z)("col",!n.hidden&&O.docItemCol),children:[(0,i.jsx)(V.Z,{metadata:s}),(0,i.jsx)(v.Z,{}),(0,i.jsxs)("div",{className:O.docItemContainer,children:[(0,i.jsxs)("article",{children:[(0,i.jsx)(H.Z,{}),(0,i.jsx)(x.Z,{}),n.mobile,(0,i.jsx)(A,{children:t}),(0,i.jsx)(g,{})]}),(0,i.jsx)(b,{})]})]}),n.desktop&&(0,i.jsx)("div",{className:"col col--3",children:n.desktop})]})}function R(e){let t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,i.jsx)(o,{content:e.content,children:(0,i.jsxs)(l.FG,{className:t,children:[(0,i.jsx)(d,{}),(0,i.jsx)(P,{children:(0,i.jsx)(n,{})})]})})}},16583:function(e,t,n){n.d(t,{Z:function(){return r}});var i=n(85893);n(67294);var s=n(1822),l=n(15779);function r(e){let{previous:t,next:n}=e;return(0,i.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,i.jsx)(l.Z,{...t,subLabel:(0,i.jsx)(s.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,i.jsx)(l.Z,{...n,subLabel:(0,i.jsx)(s.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},6682:function(e,t,n){n.d(t,{Z:function(){return o}});var i=n(85893);n(67294);var s=n(74904),l=n(1822),r=n(50490),a=n(85302);function o(e){let{className:t}=e,n=(0,a.E)();return n.badge?(0,i.jsx)("span",{className:(0,s.Z)(t,r.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,i.jsx)(l.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}},70271:function(e,t,n){n.d(t,{Z:function(){return x}});var i=n(85893);n(67294);var s=n(74904),l=n(93934),r=n(27544),a=n(1822),o=n(1652),c=n(50490),d=n(13908),u=n(85302);let m={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,i.jsx)(a.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,i.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,i.jsx)(a.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,i.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){let t=m[e.versionMetadata.banner];return(0,i.jsx)(t,{...e})}function b(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,i.jsx)(a.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,i.jsx)("b",{children:(0,i.jsx)(r.Z,{to:n,onClick:s,children:(0,i.jsx)(a.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function v(e){let t,{className:n,versionMetadata:r}=e,{siteConfig:{title:a}}=(0,l.Z)(),{pluginId:u}=(0,o.gA)({failfast:!0}),{savePreferredVersionName:m}=(0,d.J)(u),{latestDocSuggestion:v,latestVersionSuggestion:x}=(0,o.Jo)(u);let f=v??(t=x).docs.find(e=>e.id===t.mainDocId);return(0,i.jsxs)("div",{className:(0,s.Z)(n,c.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,i.jsx)("div",{children:(0,i.jsx)(h,{siteTitle:a,versionMetadata:r})}),(0,i.jsx)("div",{className:"margin-top--md",children:(0,i.jsx)(b,{versionLabel:x.label,to:f.path,onClick:()=>m(x.name)})})]})}function x(e){let{className:t}=e,n=(0,u.E)();return n.banner?(0,i.jsx)(v,{className:t,versionMetadata:n}):null}},28669:function(e,t,n){n.d(t,{Z:()=>a});var i=n("85893");n("67294");var s=n("74904"),l=n("51515");let r="tableOfContents_bqdL";function a(e){let{className:t,...n}=e;return(0,i.jsx)("div",{className:(0,s.Z)(r,"thin-scrollbar",t),children:(0,i.jsx)(l.Z,{...n,linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})})}},51515:function(e,t,n){n.d(t,{Z:()=>c});var i=n("85893"),s=n("67294"),l=n("45237");function r(e){let t=e.getBoundingClientRect();return t.top===t.bottom?r(e.parentNode):t}var a=n("27544");let o=s.memo(function e(t){let{toc:n,className:s,linkClassName:l,isChild:r}=t;return n.length?(0,i.jsx)("ul",{className:r?void 0:s,children:n.map(t=>(0,i.jsxs)("li",{children:[(0,i.jsx)(a.Z,{to:`#${t.id}`,className:l??void 0,dangerouslySetInnerHTML:{__html:t.value}}),(0,i.jsx)(e,{isChild:!0,toc:t.children,className:s,linkClassName:l})]},t.id))}):null});function c(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:a="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:d,maxHeadingLevel:u,...m}=e,h=(0,l.L)(),b=d??h.tableOfContents.minHeadingLevel,v=u??h.tableOfContents.maxHeadingLevel,x=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:i}=e;return(0,s.useMemo)(()=>(function e(t){let{toc:n,minHeadingLevel:i,maxHeadingLevel:s}=t;return n.flatMap(t=>{var n;let l=e({toc:t.children,minHeadingLevel:i,maxHeadingLevel:s});return(n=t).level>=i&&n.level<=s?[{...t,children:l}]:l})})({toc:function(e){let t=e.map(e=>({...e,parentIndex:-1,children:[]})),n=Array(7).fill(-1);t.forEach((e,t)=>{let i=n.slice(2,e.level);e.parentIndex=Math.max(...i),n[e.level]=t});let i=[];return t.forEach(e=>{let{parentIndex:n,...s}=e;n>=0?t[n].children.push(s):i.push(s)}),i}(t),minHeadingLevel:n,maxHeadingLevel:i}),[t,n,i])}({toc:t,minHeadingLevel:b,maxHeadingLevel:v});return!function(e){let t=(0,s.useRef)(void 0),n=function(){let e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,l.L)();return(0,s.useEffect)(()=>{e.current=t?0:document.querySelector(".navbar").clientHeight},[t]),e}();(0,s.useEffect)(()=>{if(!e)return()=>{};let{linkClassName:i,linkActiveClassName:s,minHeadingLevel:l,maxHeadingLevel:a}=e;function o(){var e;let o=(e=i,Array.from(document.getElementsByClassName(e))),c=function(e,t){let{anchorTopOffset:n}=t,i=e.find(e=>r(e).top>=n);if(i){var s;return(s=r(i)).top>0&&s.bottom<window.innerHeight/2?i:e[e.indexOf(i)-1]??null}return e[e.length-1]??null}(function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e,i=[];for(let e=t;e<=n;e+=1)i.push(`h${e}.anchor`);return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:l,maxHeadingLevel:a}),{anchorTopOffset:n.current}),d=o.find(e=>{var t;return c&&c.id===decodeURIComponent((t=e).href.substring(t.href.indexOf("#")+1))});o.forEach(e=>{var n;n=e,e===d?(t.current&&t.current!==n&&t.current.classList.remove(s),n.classList.add(s),t.current=n):n.classList.remove(s)})}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}},[e,n])}((0,s.useMemo)(()=>{if(a&&c)return{linkClassName:a,linkActiveClassName:c,minHeadingLevel:b,maxHeadingLevel:v}},[a,c,b,v])),(0,i.jsx)(o,{toc:x,className:n,linkClassName:a,...m})}},72372:function(e,t,n){n.d(t,{T$:function(){return o},cI:function(){return r},eU:function(){return a},ht:function(){return c},xo:function(){return d}});var i=n(85893);n(67294);var s=n(1822),l=n(50777);function r(){return(0,i.jsx)(s.Z,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function a(){return(0,i.jsx)(s.Z,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function o(){return(0,i.jsx)(l.Z,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,i.jsx)(s.Z,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,i.jsx)(s.Z,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}}}]);