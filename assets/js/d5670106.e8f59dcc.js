"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[1950],{60908:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>a});var n=o(85893),r=o(11151);const i={title:"Plasma Troubleshooting",summary:"Troubleshooting Issues With the Plasma Desktop"},l="Plasma Desktop Troubleshooting",t={id:"user/troubleshooting/plasma",title:"Plasma Troubleshooting",description:"This contains fixes for various issues you might encounter with the Plasma desktop environment.",source:"@site/docs/user/troubleshooting/plasma.md",sourceDirName:"user/troubleshooting",slug:"/user/troubleshooting/plasma",permalink:"/docs/user/troubleshooting/plasma",draft:!1,unlisted:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/user/troubleshooting/plasma.md",tags:[],version:"current",lastUpdatedAt:172813881e4,frontMatter:{title:"Plasma Troubleshooting",summary:"Troubleshooting Issues With the Plasma Desktop"},sidebar:"userSidebar",previous:{title:"Installation Issues",permalink:"/docs/user/troubleshooting/installation"}},c={},a=[{value:"Desktop no longer responds to clicks, cursor stuck in &quot;move&quot; mode (cross)",id:"desktop-no-longer-responds-to-clicks-cursor-stuck-in-move-mode-cross",level:2},{value:"Application windows look corrupt / incomplete",id:"application-windows-look-corrupt--incomplete",level:2}];function d(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"plasma-desktop-troubleshooting",children:"Plasma Desktop Troubleshooting"})}),"\n",(0,n.jsx)(s.p,{children:"This contains fixes for various issues you might encounter with the Plasma desktop environment."}),"\n",(0,n.jsx)(s.h2,{id:"desktop-no-longer-responds-to-clicks-cursor-stuck-in-move-mode-cross",children:'Desktop no longer responds to clicks, cursor stuck in "move" mode (cross)'}),"\n",(0,n.jsx)(s.p,{children:"This is often caused by a Firefox bug. It can be triggered by various things, like moving Firefox windows."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Symptoms:"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Can't click on anything on the desktop."}),"\n",(0,n.jsx)(s.li,{children:"Bringing up windows with keyboard shortcuts (ex: Super for the app menu, F9 for a drop down terminal) works, but they don't get focused. You can't interact with them."}),"\n",(0,n.jsx)(s.li,{children:"Mouse cursor is stuck in move mode, it looks like a cross."}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["You may not need to reboot to recover from this state. Killing all ",(0,n.jsx)(s.code,{children:"firefox"})," processes may be all that's necessary. To do so:"]}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["Open a virtual terminal by pressing ",(0,n.jsx)(s.code,{children:"Ctrl+Alt+F3"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["Run the following to kill all ",(0,n.jsx)(s.code,{children:"firefox"})," windows:"]}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"killall firefox\n"})}),"\n",(0,n.jsx)(s.p,{children:"This should close all Firefox windows."}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["Return to the Plasma session by pressing ",(0,n.jsx)(s.code,{children:"Ctrl+Alt+F2"}),".\nYou should now be able to use Plasma normally."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"application-windows-look-corrupt--incomplete",children:"Application windows look corrupt / incomplete"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Symptoms"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Application windows look corrupt. For example, NeoChat does not display room or user icons."}),"\n",(0,n.jsx)(s.li,{children:"Menus in an application are blank."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"You may be able to fix this by clearing KDE / Plasma cache files."}),"\n",(0,n.jsx)(s.admonition,{title:"Important",type:"caution",children:(0,n.jsx)(s.p,{children:"You should not be logged into your Plasma session while deleting the cache files, booting from a live USB is necessary."})}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"While still logged into your Plasma session, go to your home directory:"}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"cd\n"})}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"Run these commands to back up the following directories:"}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"cp -av ~/.kde{,.bak}\ncp -av ~/.config{,.bak}\ncp -av ~/.local{,.bak}\ncp -av ~/share{,.bak}\n"})}),"\n",(0,n.jsxs)(s.p,{children:["The commands create a copy of the folders. Each copy has the ",(0,n.jsx)(s.code,{children:".bak"})," extension (Example: ",(0,n.jsx)(s.code,{children:"~/.config.bak"}),"). These can be used to recover configuration files, if necessary."]}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"Shut down the system."}),"\n",(0,n.jsxs)(s.li,{children:["Boot from a live USB, which you can create from one of the ",(0,n.jsx)(s.a,{href:"https://getsol.us/download/",children:"Solus installers"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"/docs/user/troubleshooting/boot-rescue#mounting-your-system",children:"Mount your hard drive's file system"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["Change to your user's directory where you mounted your file system. For example, if you used ",(0,n.jsx)(s.code,{children:"/mount"}),":"]}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"cd /mount/home/username\n"})}),"\n",(0,n.jsx)(s.p,{children:'Replace "username" with the username you use for Solus.\nYou can make sure the directory is correct by listing the files:'}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"ls -laH\n"})}),"\n",(0,n.jsx)(s.p,{children:"You should see the files you would usually see in your home directory when logged into Solus normally."}),"\n",(0,n.jsx)(s.admonition,{title:"Important",type:"caution",children:(0,n.jsxs)(s.p,{children:["Avoid deleting the following directories: ",(0,n.jsx)(s.code,{children:"~/.kde"}),", ",(0,n.jsx)(s.code,{children:"~/.kde4"}),", ",(0,n.jsx)(s.code,{children:"~/.local"}),", and ",(0,n.jsx)(s.code,{children:"~/.config"})]})}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"Remove the various caches that Plasma uses.\nExecute the following commands:"}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"rm -rf .cache/plasmashell*\nrm -rf .cache/org.kde.dirmodel-qml.kcache\nrm -rf .cache/kioexec/ .cache/krunner/ .cache/ksycoca5*\nrm -rf .cache/krunnerbookmarkrunnerfirefoxdbfile.sqlite\n\ncd ../.local/\nrm -rf kate/ kded5/ klipper/ knewstuff3/ kscreen/ konsole/ kwalletd/ ksysguard/ kmail2/ kcookiejar/ kactivitymanagerd/\n\ncd ../share/\nrm -rf dolphin kate kcookiejar kded5 keyrings klipper kmail2 knewstuff3 konsole kscreen ksysguard kwalletd kxmlgui5 plasma_engine_comic plasma plasma_notes org.kde.gwenview\n\ncd ../.config/\nrm -f plasma*\nrm -rf kde* akonadi* KDE kconf_updaterc baloo* dolphinrc drkonqirc gwenviewrc kmail2rc k*rc katemetainfos\n"})}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"Shut down the live environment and remove the live USB drive."}),"\n",(0,n.jsx)(s.li,{children:"Reboot back into your regular Plasma session. Verify the issue is fixed."}),"\n",(0,n.jsx)(s.li,{children:"If you experience system instability, restore the previously backed up folders."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"To restore an entire directory:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"cp -rav .kde.bak/share/config/ .kde/share/config\n"})}),"\n",(0,n.jsx)(s.p,{children:"After restoring the files or directories, restart your system."})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,s,o)=>{o.d(s,{Z:()=>t,a:()=>l});var n=o(67294);const r={},i=n.createContext(r);function l(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);