"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([["7293"],{23699:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var n=r(85893);r(67294);var a=r(27544),i=r(1822),s=r(81921),l=r(28291),c=r(99757),d=r(52068);function h(e){let{year:t,posts:r}=e,i=(0,l.P)({day:"numeric",month:"long",timeZone:"UTC"}),s=e=>i.format(new Date(e));return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.Z,{as:"h3",id:t,children:t}),(0,n.jsx)("ul",{children:r.map(e=>(0,n.jsx)("li",{children:(0,n.jsxs)(a.Z,{to:e.metadata.permalink,children:[s(e.metadata.date)," - ",e.metadata.title]})},e.metadata.date))})]})}function o(e){let{years:t}=e;return(0,n.jsx)("section",{className:"margin-vert--lg",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"row",children:t.map((e,t)=>(0,n.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,n.jsx)(h,{...e})},t))})})})}function m(e){let{archive:t}=e,r=(0,i.I)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),a=(0,i.I)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),l=Array.from(t.blogPosts.reduce((e,t)=>{let r=t.metadata.date.split("-")[0],n=e.get(r)??[];return e.set(r,[t,...n])},new Map),e=>{let[t,r]=e;return{year:t,posts:r}});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.d,{title:r,description:a}),(0,n.jsxs)(c.Z,{children:[(0,n.jsx)("header",{className:"hero hero--primary",children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)(d.Z,{as:"h1",className:"hero__title",children:r}),(0,n.jsx)("p",{className:"hero__subtitle",children:a})]})}),(0,n.jsx)("main",{children:l.length>0&&(0,n.jsx)(o,{years:l})})]})]})}},28291:function(e,t,r){r.d(t,{P:function(){return a}});var n=r(93934);function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{i18n:{currentLocale:t}}=(0,n.Z)(),r=function(){let{i18n:{currentLocale:e,localeConfigs:t}}=(0,n.Z)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:r,...e})}}}]);