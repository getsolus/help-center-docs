"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([["565"],{65001:function(e,t,a){a.d(t,{CS:()=>f,iZ:()=>j,ci:()=>k,Ne:()=>Z,cH:()=>_,nO:()=>u,wj:()=>i,n4:()=>c});var n=a("85893"),l=a("67294"),r=a("91558"),s=a("8259");function i(){let e=(0,s.Z)(),t=e?.data?.blogMetadata;if(!t)throw Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}let o=l.createContext(null);function c(e){let{children:t,content:a,isBlogPostPage:r=!1}=e,s=function(e){let{content:t,isBlogPostPage:a}=e;return(0,l.useMemo)(()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a}),[t,a])}({content:a,isBlogPostPage:r});return(0,n.jsx)(o.Provider,{value:s,children:t})}function u(){let e=(0,l.useContext)(o);if(null===e)throw new r.i6("BlogPostProvider");return e}var m=a("23113"),d=a("49931");let g=e=>new Date(e).toISOString();function h(e){let t=e.map(x);return{author:1===t.length?t[0]:t}}function p(e,t,a){return e?{image:function(e){let{imageUrl:t,caption:a}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:a}}({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${a}`})}:{}}function f(e){let{siteConfig:t}=(0,d.Z)(),{withBaseUrl:a}=(0,m.Cg)(),{metadata:{blogDescription:n,blogTitle:l,permalink:r}}=e,s=`${t.url}${r}`;return{"@context":"https://schema.org","@type":"Blog","@id":s,mainEntityOfPage:s,headline:l,description:n,blogPost:e.items.map(e=>(function(e,t,a){let{assets:n,frontMatter:l,metadata:r}=e,{date:s,title:i,description:o,lastUpdatedAt:c}=r,u=n.image??l.image,m=l.keywords??[],d=`${t.url}${r.permalink}`,f=c?g(c):void 0;return{"@type":"BlogPosting","@id":d,mainEntityOfPage:d,url:d,headline:i,name:i,description:o,datePublished:s,...f?{dateModified:f}:{},...h(r.authors),...p(u,a,i),...m?{keywords:m}:{}}})(e.content,t,a))}}function j(){let e=i(),{assets:t,metadata:a}=u(),{siteConfig:n}=(0,d.Z)(),{withBaseUrl:l}=(0,m.Cg)(),{date:r,title:s,description:o,frontMatter:c,lastUpdatedAt:f}=a,j=t.image??c.image,x=c.keywords??[],b=f?g(f):void 0,v=`${n.url}${a.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":v,mainEntityOfPage:v,url:v,headline:s,name:s,description:o,datePublished:r,...b?{dateModified:b}:{},...h(a.authors),...p(j,l,s),...x?{keywords:x}:{},isPartOf:{"@type":"Blog","@id":`${n.url}${e.blogBasePath}`,name:e.blogTitle}}}function x(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}var b=a("16550"),v=a("31183"),N=a("92227"),C=a("7156");function _(e){let{pathname:t}=(0,b.TH)();return(0,l.useMemo)(()=>e.filter(e=>!e.unlisted||!!(0,C.Mg)(e.permalink,t)),[e,t])}function k(e){let t=Object.entries((0,N.vM)(e,e=>`${new Date(e.date).getFullYear()}`));return t.reverse(),t}function Z(e){let{items:t,ulClassName:a,liClassName:l,linkClassName:r,linkActiveClassName:s}=e;return(0,n.jsx)("ul",{className:a,children:t.map(e=>(0,n.jsx)("li",{className:l,children:(0,n.jsx)(v.Z,{isNavLink:!0,to:e.permalink,className:r,activeClassName:s,children:e.title})},e.permalink))})}},50387:function(e,t,a){a.d(t,{Z:()=>N});var n=a("85893"),l=a("67294"),r=a("74904"),s=a("98062"),i=a("75705"),o=a("34751"),c=a("65001"),u=a("42007"),m=a("58608");function d(e){let{year:t,yearGroupHeadingClassName:a,children:l}=e;return(0,n.jsxs)("div",{role:"group",children:[(0,n.jsx)(m.Z,{as:"h3",className:a,children:t}),l]})}let g=(0,l.memo)(function(e){let{items:t,yearGroupHeadingClassName:a,ListComponent:l}=e;if(!(0,u.L)().blog.sidebar.groupByYear)return(0,n.jsx)(l,{items:t});{let e=(0,c.ci)(t);return(0,n.jsx)(n.Fragment,{children:e.map(e=>{let[t,r]=e;return(0,n.jsx)(d,{year:t,yearGroupHeadingClassName:a,children:(0,n.jsx)(l,{items:r})},t)})})}}),h=e=>{let{items:t}=e;return(0,n.jsx)(c.Ne,{items:t,ulClassName:(0,r.Z)("sidebarItemList_Yudw","clean-list"),liClassName:"sidebarItem__DBe",linkClassName:"sidebarItemLink_mo7H",linkActiveClassName:"sidebarItemLinkActive_I1ZP"})},p=(0,l.memo)(function(e){let{sidebar:t}=e,a=(0,c.cH)(t.items);return(0,n.jsx)("aside",{className:"col col--3",children:(0,n.jsxs)("nav",{className:(0,r.Z)("sidebar_re4s","thin-scrollbar"),"aria-label":(0,o.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,n.jsx)("div",{className:(0,r.Z)("sidebarItemTitle_pO2u","margin-bottom--md"),children:t.title}),(0,n.jsx)(g,{items:a,ListComponent:h,yearGroupHeadingClassName:"yearGroupHeading_rMGB"})]})})});var f=a("4202");let j=e=>{let{items:t}=e;return(0,n.jsx)(c.Ne,{items:t,ulClassName:"menu__list",liClassName:"menu__list-item",linkClassName:"menu__link",linkActiveClassName:"menu__link--active"})};function x(e){let{sidebar:t}=e,a=(0,c.cH)(t.items);return(0,n.jsx)(g,{items:a,ListComponent:j,yearGroupHeadingClassName:"yearGroupHeading_QT03"})}let b=(0,l.memo)(function(e){return(0,n.jsx)(f.Zo,{component:x,props:e})});function v(e){let{sidebar:t}=e,a=(0,i.i)();return t?.items.length?"mobile"===a?(0,n.jsx)(b,{sidebar:t}):(0,n.jsx)(p,{sidebar:t}):null}function N(e){let{sidebar:t,toc:a,children:l,...i}=e,o=t&&t.items.length>0;return(0,n.jsx)(s.Z,{...i,children:(0,n.jsx)("div",{className:"container margin-vert--lg",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)(v,{sidebar:t}),(0,n.jsx)("main",{className:(0,r.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),children:l}),a&&(0,n.jsx)("div",{className:"col col--2",children:a})]})})})}},4745:function(e,t,a){a.r(t),a.d(t,{default:()=>p});var n=a("85893");a("67294");var l=a("74904"),r=a("34751");let s=()=>(0,r.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var i=a("73314"),o=a("83212"),c=a("50387"),u=a("17167"),m=a("58608");function d(e){let{letterEntry:t}=e;return(0,n.jsxs)("article",{children:[(0,n.jsx)(m.Z,{as:"h2",id:t.letter,children:t.letter}),(0,n.jsx)("ul",{className:"padding--none",children:t.tags.map(e=>(0,n.jsx)("li",{className:"tag_Nnez",children:(0,n.jsx)(u.Z,{...e})},e.permalink))}),(0,n.jsx)("hr",{})]})}function g(e){let{tags:t}=e,a=function(e){let t={};return Object.values(e).forEach(e=>{let a=e.label[0].toUpperCase();t[a]??=[],t[a].push(e)}),Object.entries(t).sort((e,t)=>{let[a]=e,[n]=t;return a.localeCompare(n)}).map(e=>{let[t,a]=e;return{letter:t,tags:a.sort((e,t)=>e.label.localeCompare(t.label))}})}(t);return(0,n.jsx)("section",{className:"margin-vert--lg",children:a.map(e=>(0,n.jsx)(d,{letterEntry:e},e.letter))})}var h=a("79855");function p(e){let{tags:t,sidebar:a}=e,r=s();return(0,n.jsxs)(i.FG,{className:(0,l.Z)(o.k.wrapper.blogPages,o.k.page.blogTagsListPage),children:[(0,n.jsx)(i.d,{title:r}),(0,n.jsx)(h.Z,{tag:"blog_tags_list"}),(0,n.jsxs)(c.Z,{sidebar:a,children:[(0,n.jsx)(m.Z,{as:"h1",children:r}),(0,n.jsx)(g,{tags:t})]})]})}},17167:function(e,t,a){a.d(t,{Z:()=>i});var n=a("85893");a("67294");var l=a("74904"),r=a("31183");let s={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function i(e){let{permalink:t,label:a,count:i,description:o}=e;return(0,n.jsxs)(r.Z,{href:t,title:o,className:(0,l.Z)(s.tag,i?s.tagWithCount:s.tagRegular),children:[a,i&&(0,n.jsx)("span",{children:i})]})}}}]);