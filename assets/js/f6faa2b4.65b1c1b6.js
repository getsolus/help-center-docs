"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[8143],{40396:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var o=t(85893),s=t(11151);const i={title:"MIDI Keyboards",summary:"Guide for installing and configuring MIDI keyboards on Solus"},r="MIDI Keyboards",d={id:"user/hardware/peripherals/midi-keyboard",title:"MIDI Keyboards",description:"These instructions will guide you through how to set up and use a USB-connected MIDI keyboard on Solus. This will easily let you use the keyboard to play music with a wide set of instruments.",source:"@site/docs/user/hardware/peripherals/midi-keyboard.md",sourceDirName:"user/hardware/peripherals",slug:"/user/hardware/peripherals/midi-keyboard",permalink:"/docs/user/hardware/peripherals/midi-keyboard",draft:!1,unlisted:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/user/hardware/peripherals/midi-keyboard.md",tags:[],version:"current",lastUpdatedAt:172973503e4,frontMatter:{title:"MIDI Keyboards",summary:"Guide for installing and configuring MIDI keyboards on Solus"},sidebar:"userSidebar",previous:{title:"Mice and Touchpads",permalink:"/docs/user/hardware/peripherals/mice-and-touchpads"},next:{title:"Printers and Scanners",permalink:"/docs/user/hardware/peripherals/printers-and-scanners"}},a={},l=[{value:"Installing required software",id:"installing-required-software",level:2},{value:"Setting up the soundfont in qsynth",id:"setting-up-the-soundfont-in-qsynth",level:2},{value:"Connecting the keyboard",id:"connecting-the-keyboard",level:2},{value:"Keyboard compatibility",id:"keyboard-compatibility",level:2},{value:"M-audio",id:"m-audio",level:3}];function c(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"midi-keyboards",children:"MIDI Keyboards"})}),"\n",(0,o.jsx)(n.p,{children:"These instructions will guide you through how to set up and use a USB-connected MIDI keyboard on Solus. This will easily let you use the keyboard to play music with a wide set of instruments."}),"\n",(0,o.jsx)(n.h2,{id:"installing-required-software",children:"Installing required software"}),"\n",(0,o.jsx)(n.p,{children:"We will need to install three packages in order to use the keyboard:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"qsynth"})," - A frontend for ",(0,o.jsx)(n.code,{children:"fluidsynth"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"qjackctl"})," - A controller for the JACK audio server"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"fluid-soundfont"})," - An open source soundfont to use with ",(0,o.jsx)(n.code,{children:"fluidsynth"})]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo eopkg it qsynth qjackctl fluid-soundfont\n"})}),"\n",(0,o.jsx)(n.h2,{id:"setting-up-the-soundfont-in-qsynth",children:"Setting up the soundfont in qsynth"}),"\n",(0,o.jsxs)(n.p,{children:["In order to use the soundfont, we need to open up ",(0,o.jsx)(n.code,{children:"qsynth"})," and set the soundfont. For the purposes of this article, it would be ",(0,o.jsx)(n.code,{children:"FluidR3.sf2"}),", however any other soundfont should work fine too. You set the soundfont by clicking on ",(0,o.jsx)(n.code,{children:"Setup..."})," and navigating to ",(0,o.jsx)(n.code,{children:"Soundfonts"}),". There you just need click ",(0,o.jsx)(n.code,{children:"Open..."})," and navigate to the soundfont of your liking. The soundfont that we will be using will be placed in ",(0,o.jsx)(n.code,{children:"/usr/share/sounds/sf2/"})," by default."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"QSynth SoundFont",src:t(3815).Z+"",width:"1039",height:"517"})}),"\n",(0,o.jsx)(n.h2,{id:"connecting-the-keyboard",children:"Connecting the keyboard"}),"\n",(0,o.jsxs)(n.p,{children:["At this stage you need to first verify that the keyboard is plugged in and turned on. Now we just need to open up ",(0,o.jsx)(n.code,{children:"qjackctl"})," to connect the keyboard on a software level. In ",(0,o.jsx)(n.code,{children:"qjackctl"})," you press on ",(0,o.jsx)(n.code,{children:"Graph"})," and drag the keyboard's output to the input called ",(0,o.jsx)(n.code,{children:"FLUID Synth"})," (Your keyboard name will probably differ from the on in the image below). This step will need to be done every time you disconnect or turn off you keyboard."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"QJackCtl Connect",src:t(68950).Z+"",width:"717",height:"629"})}),"\n",(0,o.jsxs)(n.p,{children:["You should now be ready to play on the keyboard using ",(0,o.jsx)(n.code,{children:"qsynth"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"keyboard-compatibility",children:"Keyboard compatibility"}),"\n",(0,o.jsx)(n.p,{children:"The following keyboards have been tested and/or suggested to function correctly by our users."}),"\n",(0,o.jsxs)(n.p,{children:["This list should not suggest that ",(0,o.jsx)(n.em,{children:"only"})," such devices listed below are compatible with Solus, as there may be devices not listed below that are in fact compatible."]}),"\n",(0,o.jsx)(n.h3,{id:"m-audio",children:"M-audio"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"KeyRig 49"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},68950:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/qjackctl-connect-ec819e2ca49b8af3c5a395ebad0a2bba.jpg"},3815:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/qsynth-soundfont-3bfc213f843495358dedf524b6ed7fc6.jpg"},11151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>r});var o=t(67294);const s={},i=o.createContext(s);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);