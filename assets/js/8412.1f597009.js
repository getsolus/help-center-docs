"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([["8412"],{57216:function(e,t,n){n.d(t,{Z:()=>j});var a=n("85893");n("67294");var s=n("74904"),i=n("1822"),l=n("50490"),r=n("27544");let d="iconEdit_Z9Sw";function c(e){let{className:t,...n}=e;return(0,a.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(d,t),"aria-hidden":"true",...n,children:(0,a.jsx)("g",{children:(0,a.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function o(e){let{editUrl:t}=e;return(0,a.jsxs)(r.Z,{to:t,className:l.k.common.editThisPage,children:[(0,a.jsx)(c,{}),(0,a.jsx)(i.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}var u=n("28291");function h(e){let{lastUpdatedAt:t}=e,n=new Date(t),s=(0,u.P)({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(n);return(0,a.jsx)(i.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,a.jsx)("b",{children:(0,a.jsx)("time",{dateTime:n.toISOString(),itemProp:"dateModified",children:s})})},children:" on {date}"})}function m(e){let{lastUpdatedBy:t}=e;return(0,a.jsx)(i.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,a.jsx)("b",{children:t})},children:" by {user}"})}function p(e){let{lastUpdatedAt:t,lastUpdatedBy:n}=e;return(0,a.jsxs)("span",{className:l.k.common.lastUpdated,children:[(0,a.jsx)(i.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t?(0,a.jsx)(h,{lastUpdatedAt:t}):"",byUser:n?(0,a.jsx)(m,{lastUpdatedBy:n}):""},children:"Last updated{atDate}{byUser}"}),!1]})}let x="lastUpdated_JAkA";function j(e){let{className:t,editUrl:n,lastUpdatedAt:i,lastUpdatedBy:l}=e;return(0,a.jsxs)("div",{className:(0,s.Z)("row",t),children:[(0,a.jsx)("div",{className:"col",children:n&&(0,a.jsx)(o,{editUrl:n})}),(0,a.jsx)("div",{className:(0,s.Z)("col",x),children:(i||l)&&(0,a.jsx)(p,{lastUpdatedAt:i,lastUpdatedBy:l})})]})}},27913:function(e,t,n){n.d(t,{Z:()=>U});var a=n("85893"),s=n("67294"),i=n("50065"),l=n("50777"),r=n("84404");function d(e){return(0,a.jsx)("code",{...e})}var c=n("27544"),o=n("74904"),u=n("88942"),h=n("12785"),m=n("13341"),p=n("6560");let x={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function j(e){return!!e&&("SUMMARY"===e.tagName||j(e.parentElement))}function f(e){let{summary:t,children:n,...i}=e;(0,h.Z)().collectAnchor(i.id);let l=(0,m.Z)(),r=(0,s.useRef)(null),{collapsed:d,setCollapsed:c}=(0,p.u)({initialState:!i.open}),[o,f]=(0,s.useState)(i.open),g=s.isValidElement(t)?t:(0,a.jsx)("summary",{children:t??"Details"});return(0,a.jsxs)("details",{...i,ref:r,open:o,"data-collapsed":d,className:(0,u.Z)(x.details,l&&x.isBrowser,i.className),onMouseDown:e=>{j(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();let t=e.target;if(!!(j(t)&&function e(t,n){return!!t&&(t===n||e(t.parentElement,n))}(t,r.current)))e.preventDefault(),d?(c(!1),f(!0)):c(!0)},children:[g,(0,a.jsx)(p.z,{lazy:!1,collapsed:d,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{c(e),f(!e)},children:(0,a.jsx)("div",{className:x.collapsibleContent,children:n})})]})}let g="details_b_Ee";function v(e){let{...t}=e;return(0,a.jsx)(f,{...t,className:(0,o.Z)("alert alert--info",g,t.className)})}function Z(e){let t=s.Children.toArray(e.children),n=t.find(e=>s.isValidElement(e)&&"summary"===e.type),i=(0,a.jsx)(a.Fragment,{children:t.filter(e=>e!==n)});return(0,a.jsx)(v,{...e,summary:n,children:i})}var b=n("52068");function _(e){return(0,a.jsx)(b.Z,{...e})}let y={containsTaskList:"containsTaskList_mC6p"},N="img_ev3q";var k=n("77793");let w={Head:l.Z,details:Z,Details:Z,code:function(e){var t;return void 0!==(t=e).children&&s.Children.toArray(t.children).every(e=>"string"==typeof e&&!e.includes("\n"))?(0,a.jsx)(d,{...e}):(0,a.jsx)(r.Z,{...e})},a:function(e){return(0,a.jsx)(c.Z,{...e})},pre:function(e){return(0,a.jsx)(a.Fragment,{children:e.children})},ul:function(e){return(0,a.jsx)("ul",{...e,className:function(e){if(void 0!==e)return(0,o.Z)(e,e?.includes("contains-task-list")&&y.containsTaskList)}(e.className)})},li:function(e){return(0,h.Z)().collectAnchor(e.id),(0,a.jsx)("li",{...e})},img:function(e){var t;return(0,a.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(t=e.className,(0,o.Z)(t,N))})},h1:e=>(0,a.jsx)(_,{as:"h1",...e}),h2:e=>(0,a.jsx)(_,{as:"h2",...e}),h3:e=>(0,a.jsx)(_,{as:"h3",...e}),h4:e=>(0,a.jsx)(_,{as:"h4",...e}),h5:e=>(0,a.jsx)(_,{as:"h5",...e}),h6:e=>(0,a.jsx)(_,{as:"h6",...e}),admonition:k.Z,mermaid:()=>null};function U(e){let{children:t}=e;return(0,a.jsx)(i.Z,{components:w,children:t})}},15779:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(85893);n(67294);var s=n(74904),i=n(27544);function l(e){let{permalink:t,title:n,subLabel:l,isNext:r}=e;return(0,a.jsxs)(i.Z,{className:(0,s.Z)("pagination-nav__link",r?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[l&&(0,a.jsx)("div",{className:"pagination-nav__sublabel",children:l}),(0,a.jsx)("div",{className:"pagination-nav__label",children:n})]})}},62837:function(e,t,n){n.d(t,{Z:()=>r});var a=n("85893");n("67294");var s=n("74904"),i=n("27544");let l={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function r(e){let{permalink:t,label:n,count:r,description:d}=e;return(0,a.jsxs)(i.Z,{href:t,title:d,className:(0,s.Z)(l.tag,r?l.tagWithCount:l.tagRegular),children:[n,r&&(0,a.jsx)("span",{children:r})]})}},50905:function(e,t,n){n.d(t,{Z:()=>c});var a=n("85893");n("67294");var s=n("74904"),i=n("1822"),l=n("62837");let r="tags_jXut",d="tag_QGVx";function c(e){let{tags:t}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("b",{children:(0,a.jsx)(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,a.jsx)("ul",{className:(0,s.Z)(r,"padding--none","margin-left--sm"),children:t.map(e=>(0,a.jsx)("li",{className:d,children:(0,a.jsx)(l.Z,{...e})},e.permalink))})]})}},28291:function(e,t,n){n.d(t,{P:function(){return s}});var a=n(93934);function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{i18n:{currentLocale:t}}=(0,a.Z)(),n=function(){let{i18n:{currentLocale:e,localeConfigs:t}}=(0,a.Z)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:n,...e})}}}]);