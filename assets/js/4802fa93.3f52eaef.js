"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[1774],{48815:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>h});var n=o(85893),s=o(11151);const i={title:"Don't call me MATE, pal!",slug:"don't-call-me-mate-pal",authors:[{name:"David Harder",title:"Solus Staff",url:"https://github.com/davidjharder",image_url:"https://avatars.githubusercontent.com/u/23007135?v=4"}],tags:["MATE","devlog","solus"],hide_table_of_contents:!1},a=void 0,r={permalink:"/blog/don't-call-me-mate-pal",source:"@site/devlog/2024-01-29-dont-call-me-mate.md",title:"Don't call me MATE, pal!",description:"Back in our 4.4 release post we announced that Solus would stop shipping a MATE ISO, mostly because MATE showed no signs of moving away from X11 and towards wayland. At the beginning of this year, we shipped our new XFCE ISO as a beta. And now we're getting ready to ship the Solus MATE Transition Tool to move existing users off of MATE.",date:"2024-01-29T00:00:00.000Z",tags:[{inline:!0,label:"MATE",permalink:"/blog/tags/mate"},{inline:!0,label:"devlog",permalink:"/blog/tags/devlog"},{inline:!0,label:"solus",permalink:"/blog/tags/solus"}],readingTime:2.645,hasTruncateMarker:!0,authors:[{name:"David Harder",title:"Solus Staff",url:"https://github.com/davidjharder",image_url:"https://avatars.githubusercontent.com/u/23007135?v=4",imageURL:"https://avatars.githubusercontent.com/u/23007135?v=4"}],frontMatter:{title:"Don't call me MATE, pal!",slug:"don't-call-me-mate-pal",authors:[{name:"David Harder",title:"Solus Staff",url:"https://github.com/davidjharder",image_url:"https://avatars.githubusercontent.com/u/23007135?v=4",imageURL:"https://avatars.githubusercontent.com/u/23007135?v=4"}],tags:["MATE","devlog","solus"],hide_table_of_contents:!1},unlisted:!1,prevItem:{title:"Intro to Optimizing Packages on Solus",permalink:"/blog/solus-optimizing-packages"},nextItem:{title:"eopkg is dead, long live eopkg",permalink:"/blog/eopkg-is-dead-long-live-eopkg"}},l={authorsImageUrls:[void 0]},h=[{value:"The problem",id:"the-problem",level:2},{value:"Introducing the Solus MATE Transition Tool",id:"introducing-the-solus-mate-transition-tool",level:2},{value:"How the Mate Transition Tool is actually part of our Python2 work",id:"how-the-mate-transition-tool-is-actually-part-of-our-python2-work",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Back in our ",(0,n.jsx)(t.a,{href:"https://getsol.us/2023/07/08/solus-4-4-released/",children:"4.4 release post"})," we announced that Solus would stop shipping a MATE ISO, mostly because MATE showed no signs of moving away from X11 and towards wayland. At the beginning of this year, we shipped our new XFCE ISO as a beta. And now we're getting ready to ship the ",(0,n.jsx)(t.em,{children:"Solus MATE Transition Tool"})," to move existing users off of MATE."]}),"\n",(0,n.jsx)(t.h2,{id:"the-problem",children:"The problem"}),"\n",(0,n.jsxs)(t.p,{children:["MATE and XFCE are similar enough that eager Solusians can, and have, installed XCFE on their MATE machines with nothing more than a couple of ",(0,n.jsx)(t.code,{children:"eopkg"})," commands. We're pretty sure our resident ",(0,n.jsx)(t.code,{children:"bash"})," script enthusiast (ermo) could hammer out a working transition script in an evening. But we want a more polished experience. We know ",(0,n.jsx)(t.em,{children:"you"})," follow Solus news; after all, you're reading this. However, we assume there are users who dutifully update their systems, but have no interest in keeping up with our blog posts. How do we get their attention and prompt them to move away from MATE?"]}),"\n",(0,n.jsx)(t.h2,{id:"introducing-the-solus-mate-transition-tool",children:"Introducing the Solus MATE Transition Tool"}),"\n",(0,n.jsxs)(t.p,{children:["We're pleased to show off the ",(0,n.jsx)(t.em,{children:"MATE Transition Tool"}),", which we plan to include in normal updates to MATE systems in the coming weeks. Most of the work on this tool was done by Joey; more on his efforts in the section below. Here's how MATE users will encounter the tool:"]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"These screenshots are current as of the publishing of this post, we may change things as we continue testing."})}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Users will get a notification on every start-up informing them that they need to transition away from MATE."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Notification: Solus Transition Service",src:o(64792).Z+"",width:"812",height:"333"})}),"\n",(0,n.jsxs)(t.ol,{start:"2",children:["\n",(0,n.jsx)(t.li,{children:"Clicking on that notification will launch the Solus MATE Transition Tool."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"MATE Transition Tool Launch",src:o(46311).Z+"",width:"1134",height:"673"})}),"\n",(0,n.jsxs)(t.ol,{start:"3",children:["\n",(0,n.jsx)(t.li,{children:"Users select either Solus Budgie or Solus XFCE. The tool installs the selected edition, removes MATE, and prompts for a reboot"}),"\n",(0,n.jsx)(t.li,{children:"The tool removes itself after a successful transition."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Simple. At least, that's what we want users to think."}),"\n",(0,n.jsx)(t.h2,{id:"how-the-mate-transition-tool-is-actually-part-of-our-python2-work",children:"How the Mate Transition Tool is actually part of our Python2 work"}),"\n",(0,n.jsxs)(t.p,{children:["The story of the MATE Transition Tool is actually tied up in our fight to drag ",(0,n.jsx)(t.code,{children:"eopkg"})," into the current decade. As I wrote previously, we're somewhat embarrassed by the amount of Solus tooling which ",(0,n.jsx)(t.em,{children:"still"})," relies on Python2. One such tool is the Solus Software Center ",(0,n.jsx)(t.code,{children:"solus-sc"}),". A while back, the team decided the sane thing to do was to ditch ",(0,n.jsx)(t.code,{children:"solus-sc"})," in favor of ",(0,n.jsx)(t.em,{children:"KDE Discover"})," and ",(0,n.jsx)(t.em,{children:"GNOME Software"})," . This would have the additional benefit of promoting flatpak applications to first-class citizens. The problem is ",(0,n.jsx)(t.em,{children:"Discover"})," and ",(0,n.jsx)(t.em,{children:"Software"})," have no way to talk to our package manager ",(0,n.jsx)(t.code,{children:"eopkg"}),". We need an API. Luckily, other projects have encountered the same issue, leading to ",(0,n.jsx)(t.a,{href:"https://www.freedesktop.org/software/PackageKit/pk-intro.html",children:(0,n.jsx)(t.code,{children:"packagekit"})}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Joey has been doing the dirty work of bolting ",(0,n.jsx)(t.code,{children:"packagekit"})," support onto ",(0,n.jsx)(t.code,{children:"eopkg"}),", and saw an opportunity: If ",(0,n.jsx)(t.code,{children:"eopkg"})," could be upgraded to understand some of ",(0,n.jsx)(t.code,{children:"packagekit"}),", then he could write a special-purpose application to move users off MATE without asking them to run scary bash scripts (sorry ermo). We're rather pleased with this solution. MATE users get a simple transition and Solus gets closer to checking ",(0,n.jsx)(t.code,{children:"solus-sc"})," off ",(0,n.jsx)(t.a,{href:"https://github.com/getsolus/packages/issues/270",children:"the list."})]})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},46311:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/MTT-launch-9408fee2f5bfdf5d356638dab8047dd0.png"},64792:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/notification-1be98b16b9621bf36eac8d89defb71e6.png"},11151:(e,t,o)=>{o.d(t,{Z:()=>r,a:()=>a});var n=o(67294);const s={},i=n.createContext(s);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);