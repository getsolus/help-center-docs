"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([["640"],{17667:function(e,n,s){s.r(n),s.d(n,{metadata:()=>a,contentTitle:()=>r,default:()=>h,assets:()=>l,toc:()=>d,frontMatter:()=>o});var a=JSON.parse('{"id":"user/software/networking/samba","title":"Samba File Sharing","description":"Samba is the standard Windows interoperability suite of programs for Linux and Unix. Among other things, it allows Linux, macOS and Windows users to share files via the Server Message Block (SMB) protocol.","source":"@site/docs/user/software/networking/samba.md","sourceDirName":"user/software/networking","slug":"/user/software/networking/samba","permalink":"/docs/user/software/networking/samba","draft":false,"unlisted":false,"editUrl":"https://github.com/getsolus/help-center-docs/tree/master/docs/user/software/networking/samba.md","tags":[],"version":"current","lastUpdatedAt":1733757592000,"frontMatter":{"title":"Samba File Sharing","summary":"A quick start guide to Samba on Solus"},"sidebar":"userSidebar","previous":{"title":"Networking","permalink":"/docs/category/networking"},"next":{"title":"TigerVNC","permalink":"/docs/user/software/networking/tigervnc"}}'),i=s("85893"),t=s("50065");let o={title:"Samba File Sharing",summary:"A quick start guide to Samba on Solus"},r="Samba file sharing",l={},d=[{value:"Samba on Solus",id:"samba-on-solus",level:2},{value:"How to start/stop Samba",id:"how-to-startstop-samba",level:3},{value:"Enabling Windows 7+ network discovery support",id:"enabling-windows-7-network-discovery-support",level:3},{value:"Accessing Samba via IPv6",id:"accessing-samba-via-ipv6",level:3},{value:"A brief introduction to the Samba usershare functionality",id:"a-brief-introduction-to-the-samba-usershare-functionality",level:2},{value:"GUI - configuring shares via file manager plugins",id:"gui---configuring-shares-via-file-manager-plugins",level:3},{value:"CLI - using the net usershare command",id:"cli---using-the-net-usershare-command",level:3},{value:"Managing Samba authentication for named users",id:"managing-samba-authentication-for-named-users",level:2},{value:"Debugging Samba authentication issues",id:"debugging-samba-authentication-issues",level:3},{value:"Adding custom configuration parameters via <code>/etc/samba/smb.conf</code>",id:"adding-custom-configuration-parameters-via-etcsambasmbconf",level:2},{value:"Example -- anonymous, read-write share outside of <em>$HOME</em>",id:"example----anonymous-read-write-share-outside-of-home",level:3},{value:"Links to the official Samba documentation",id:"links-to-the-official-samba-documentation",level:3},{value:"Full manual control of Samba (recommended only for experienced Samba admins)",id:"full-manual-control-of-samba-recommended-only-for-experienced-samba-admins",level:2}];function c(e){let n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"samba-file-sharing",children:"Samba file sharing"})}),"\n",(0,i.jsx)(n.p,{children:"Samba is the standard Windows interoperability suite of programs for Linux and Unix. Among other things, it allows Linux, macOS and Windows users to share files via the Server Message Block (SMB) protocol."}),"\n",(0,i.jsx)(n.h2,{id:"samba-on-solus",children:"Samba on Solus"}),"\n",(0,i.jsx)(n.p,{children:"To enable convenient file-sharing on Solus, we maintain a Solus-specific Samba configuration that out-of-the-box:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Supports Samba usershare functionality"}),"\n",(0,i.jsxs)(n.li,{children:["Enables sharing of ",(0,i.jsx)(n.em,{children:"$HOME"})," folders (manual user account activation needed)"]}),"\n",(0,i.jsx)(n.li,{children:"Is set up as a standalone server using the SMB2.0.2 protocol and up (>= Windows Vista/Server 2008)"}),"\n",(0,i.jsxs)(n.li,{children:["Advertises itself via ",(0,i.jsx)(n.em,{children:"Avahi"})," aka ",(0,i.jsx)(n.em,{children:"Apple Bonjour"})," / ",(0,i.jsx)(n.em,{children:"mDNS"})," / ",(0,i.jsx)(n.em,{children:"zeroconf"})," for macOS compatibility"]}),"\n",(0,i.jsxs)(n.li,{children:["Advertises itself via ",(0,i.jsx)(n.em,{children:"wsdd"})," aka ",(0,i.jsx)(n.em,{children:"Web Services Discovery Daemon"})," for Windows 7+ compatibility"]}),"\n",(0,i.jsx)(n.li,{children:"Disables sharing of printers via Samba (use IPP via CUPS instead)"}),"\n",(0,i.jsx)(n.li,{children:"Allows access only from IPv4 and IPv6 private and link-local (non-internet-routable) addresses"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"As of Samba 4.7.x, Solus disables the old, deprecated and insecure original SMB1/CIFS protocol by default."}),"\n",(0,i.jsxs)(n.p,{children:["For more information on this choice, please read ",(0,i.jsx)(n.a,{href:"https://techcommunity.microsoft.com/t5/storage-at-microsoft/stop-using-smb1/ba-p/425858",children:"this post regarding SMB1"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"As of Samba 4.11.x, the SMB1/CIFS protocol is officially deprecated upstream."}),"\n",(0,i.jsx)(n.h3,{id:"how-to-startstop-samba",children:"How to start/stop Samba"}),"\n",(0,i.jsx)(n.p,{children:"Please note that Samba does NOT run on system boot by default. It needs to be manually started/configured to start automatically:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# Start Samba manually\nsudo systemctl start smb\n\n# Configure Samba to start automatically on each boot and immediately start the service\nsudo systemctl enable --now smb\n\n# Check whether Samba is running\nsudo systemctl status smb\n\n# Restart Samba manually\nsudo systemctl restart smb\n\n# Stop Samba manually\nsudo systemctl stop smb\n\n# Configure Samba to not start automatically on each boot and immediately stop the service\nsudo systemctl disable --now smb\n"})}),"\n",(0,i.jsx)(n.h3,{id:"enabling-windows-7-network-discovery-support",children:"Enabling Windows 7+ network discovery support"}),"\n",(0,i.jsxs)(n.p,{children:["The Web Services Discovery protocol is used by Windows 7+ clients to discover shares on other computers. Solus now includes the ",(0,i.jsx)(n.em,{children:"wsdd"})," service which provides support for the Web Services Discovery protocol."]}),"\n",(0,i.jsx)(n.p,{children:"When restarting wsdd, it may be necessary to also restart Samba."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# Start wsdd manually (depends on the smb service)\nsudo systemctl start wsdd\n\n# Configure wsdd to start automatically on each boot and immediately start the service\nsudo systemctl enable --now wsdd\n\n# Check whether wsdd is running\nsudo systemctl status wsdd\n\n# Restart wsdd and Samba\nsudo systemctl restart wsdd smb\n\n# Stop wsdd manually\nsudo systemctl stop wsdd\n\n# Configure wsdd to not start automatically on each boot and immediately stop the service\nsudo systemctl disable --now wsdd\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For more details on managing services on Solus with ",(0,i.jsx)(n.em,{children:"systemctl"}),", see ",(0,i.jsx)(n.code,{children:"man systemctl"})," which is part of the systemd system and service manager."]}),"\n",(0,i.jsx)(n.h3,{id:"accessing-samba-via-ipv6",children:"Accessing Samba via IPv6"}),"\n",(0,i.jsx)(n.p,{children:"In order to access a running Solus Samba server instance via IPv6, first verify that all relevant hosts (including the Samba host) are configured with an IPv6 link-local address."}),"\n",(0,i.jsx)(n.p,{children:"This can be verified in a terminal:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"$ ip addr\n\n2: enp2s0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000\n    link/ether 14:da:e9:10:f9:c7 brd ff:ff:ff:ff:ff:ff\n    inet 192.168.147.233/24 brd 192.168.147.255 scope global dynamic noprefixroute enp2s0\n       valid_lft 5066sec preferred_lft 5066sec\n    inet6 fe80::d555:a50f:1aea:c944/64 scope link noprefixroute\n       valid_lft forever preferred_lft forever\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In the above example, the name of the relevant network device is ",(0,i.jsx)(n.code,{children:"enp2s0"}),". Note how the line starting with ",(0,i.jsx)(n.code,{children:"inet6"})," contains an IPv6 address which begins with fe80:: and contains ",(0,i.jsx)(n.code,{children:"scope link"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Ensure that Samba has been started on the host and then query the running local Samba instance with the following command, using the IPv6 address and interface as show by the output of ",(0,i.jsx)(n.code,{children:"ip addr"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"$ smbclient -N -L //fe80::d555:a50f:1aea:c944%enp2s0\n"})}),"\n",(0,i.jsx)(n.p,{children:"The output might look something like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Unable to initialize messaging context\nAnonymous login successful\n\n        Sharename       Type      Comment\n        ---------       ----      -------\n        eopkgs          Disk\n        IPC$            IPC       IPC Service (Samba server (version: 4.10.11, protocol: SMB3_11))\n        Public          Disk\nfe80::d555:a50f:1aea:c944%enp2s0 is an IPv6 address -- no workgroup available\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Make sure to change the IPv6 address and interface name (",(0,i.jsx)(n.code,{children:"fe80::d555:a50f:1aea:c944"})," and ",(0,i.jsx)(n.code,{children:"enp2s0"})," respectively in the above example) to the real address and interface name of the Samba host in question."]}),"\n",(0,i.jsx)(n.h2,{id:"a-brief-introduction-to-the-samba-usershare-functionality",children:"A brief introduction to the Samba usershare functionality"}),"\n",(0,i.jsxs)(n.p,{children:["In order to support user-managed (as opposed to system-managed) shares, Samba provides the so-called ",(0,i.jsx)(n.em,{children:"usershare"})," functionality, where users can define network shares without touching the traditional Samba configuration file."]}),"\n",(0,i.jsx)(n.h3,{id:"gui---configuring-shares-via-file-manager-plugins",children:"GUI - configuring shares via file manager plugins"}),"\n",(0,i.jsxs)(n.p,{children:["The default Solus configuration was written with the ",(0,i.jsx)(n.code,{children:"nemo-share"})," (Budgie and XFCE), ",(0,i.jsx)(n.code,{children:"nautilus-share"})," (GNOME), and ",(0,i.jsx)(n.code,{children:"kdenetwork-filesharing"})," (Plasma) file manager plugins in mind. These plugins allow the user to share folders in an easy and convenient way."]}),"\n",(0,i.jsxs)(n.p,{children:["All you need to do is to install either the ",(0,i.jsx)(n.code,{children:"caja-extensions"})," package (which includes the ",(0,i.jsx)(n.code,{children:"caja-share"})," plugin), the ",(0,i.jsx)(n.code,{children:"kdenetwork-filesharing"})," package, the ",(0,i.jsx)(n.code,{children:"nautilus-share"})," package or the ",(0,i.jsx)(n.code,{children:"nemo-share"})," package from the Software Center and enable the relevant Samba services."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# Budgie\nsudo eopkg install nemo-share\n\n#GNOME\nsudo eopkg install nautilus-share\n\n# Plasma\nsudo eopkg install kdenetwork-filesharing\n\n# XFCE\nsudo eopkg install nemo-share\n"})}),"\n",(0,i.jsx)(n.p,{children:"In order to load the newly installed file manager plugin, you will need to log out of the current desktop session and log back in to a new desktop session, at which point the plugin in question will be ready for use."}),"\n",(0,i.jsxs)(n.p,{children:["Afterwards, simply right-clicking a folder and clicking ",(0,i.jsx)(n.em,{children:"properties"})," will now show an option to share it, as well as whether to allow Read/Write permissions to your users or guest access."]}),"\n",(0,i.jsx)(n.h3,{id:"cli---using-the-net-usershare-command",children:"CLI - using the net usershare command"}),"\n",(0,i.jsxs)(n.p,{children:["Excerpt from the ",(0,i.jsx)(n.code,{children:"man smb.conf"})," manual page:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"net usershare add sharename path [comment] [acl] [guest_ok=[y|n]]\n    To create or modify (overwrite) a user defined share.\n\nnet usershare delete sharename\n    To delete a user defined share.\n\nnet usershare list wildcard-sharename\n    To list user defined shares.\n\nnet usershare info wildcard-sharename\n    To print information about user defined shares.\n"})}),"\n",(0,i.jsx)(n.h2,{id:"managing-samba-authentication-for-named-users",children:"Managing Samba authentication for named users"}),"\n",(0,i.jsxs)(n.p,{children:["Should the user ",(0,i.jsx)(n.code,{children:"some_user"})," wish to access e.g. the ",(0,i.jsx)(n.em,{children:"$HOME"})," directory via Samba, it is necessary to enable the ",(0,i.jsx)(n.code,{children:"some_user"})," Samba account."]}),"\n",(0,i.jsxs)(n.p,{children:["Note that the ",(0,i.jsx)(n.code,{children:"some_user"})," Samba account is separate from the ",(0,i.jsx)(n.code,{children:"some_user"})," Linux user account, but they share the same ",(0,i.jsx)(n.em,{children:"$HOME"})," directory."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# Add the some_user account to the Samba login db\nsudo smbpasswd -a some_user\n\n# Enable the some_user account in the Samba login db\nsudo smbpasswd -e some_user\n\n# Try to log in to a running Samba instance as some_user and list shares\nsmbclient -U some_user -L localhost\n\n# Disable the some_user account in the Samba login db\nsudo smbpasswd -d some_user\n\n# Remove the some_user account from the Samba login db\nsudo smbpasswd -x some_user\n"})}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.code,{children:"man smbpasswd"})," for more details."]}),"\n",(0,i.jsx)(n.h3,{id:"debugging-samba-authentication-issues",children:"Debugging Samba authentication issues"}),"\n",(0,i.jsx)(n.p,{children:"To help debug authentication issues, the Solus Samba configuration is by default set up with relatively verbose logging when it comes to authentication and protocol negotiation."}),"\n",(0,i.jsxs)(n.p,{children:["The Samba log files live in the ",(0,i.jsx)(n.code,{children:"/var/log/samba/"})," directory."]}),"\n",(0,i.jsxs)(n.h2,{id:"adding-custom-configuration-parameters-via-etcsambasmbconf",children:["Adding custom configuration parameters via ",(0,i.jsx)(n.code,{children:"/etc/samba/smb.conf"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"CAUTION:"})," ",(0,i.jsxs)(n.em,{children:["From this point on, it is assumed that the user is familiar with the Samba documentation, including ",(0,i.jsx)(n.code,{children:"man smb.conf"}),", and that the user has a basic understanding of Linux filesystem permissions."]})]}),"\n",(0,i.jsxs)(n.p,{children:["The default Solus-managed configuration (which lives in ",(0,i.jsx)(n.code,{children:"/usr/share/defaults/samba/smb.conf"})," and will be overwritten on each Samba package update) is written such that it will attempt to include any configuration parameters present in ",(0,i.jsx)(n.code,{children:"/etc/samba/smb.conf"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Hence, any persistent user-managed parameters should be added to ",(0,i.jsx)(n.code,{children:"/etc/samba/smb.conf"})," which will ",(0,i.jsx)(n.em,{children:"never"})," be overwritten by the system package manager."]}),"\n",(0,i.jsxs)(n.p,{children:["In addition, the Solus-controlled Samba configuration is written such that it is possible to override its default parameters simply by assigning a new value to the parameter in question in ",(0,i.jsx)(n.code,{children:"/etc/samba/smb.conf"}),". From a technical perspective, any parameters added without a ",(0,i.jsx)(n.code,{children:"[shared resource]"})," header will considered part of the ",(0,i.jsx)(n.code,{children:"[global]"})," configuration section."]}),"\n",(0,i.jsxs)(n.p,{children:["This way, simply deleting or renaming ",(0,i.jsx)(n.code,{children:"/etc/samba/smb.conf"})," and restarting Samba with ",(0,i.jsx)(n.code,{children:"sudo systemctl restart smb"})," will reset the configuration to the known working default Solus configuration."]}),"\n",(0,i.jsxs)(n.h3,{id:"example----anonymous-read-write-share-outside-of-home",children:["Example -- anonymous, read-write share outside of ",(0,i.jsx)(n.em,{children:"$HOME"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ini",children:"# Contents of /etc/samba/smb.conf:\n#\n# If /etc/samba/smb.conf exists, it is automatically loaded by the Solus-\n# controlled default config residing in /usr/share/defaults/samba/smb.conf\n#\n# The following configuration creates a \"//servername/someshare\" share where\n# anonymous users have read and write access.\n#\n# ';' also denotes a comment (typically used for configuration parameters)\n#\n[someshare]\npath = /mnt/someshare\n# allow anonymous access\nguest ok = Yes\n# ONLY allow anonymous access (don't allow both guest and system user access)\n;guest only = Yes\n# allow write access\nread only = No\n# This is an example of how to limit access to the share to known IPs\n;hosts deny = ALL\n;hosts allow = 127.0.0.1 192.168.1.0/24\n# share config end\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In the above example, it is assumed that the user has chosen a suitable method for making ",(0,i.jsx)(n.code,{children:"/mnt/someshare"})," writeable by guest users."]}),"\n",(0,i.jsxs)(n.p,{children:["After adding a ",(0,i.jsx)(n.code,{children:"[someshare]"})," section like in the above example, run ",(0,i.jsx)(n.code,{children:"sudo testparm"})," to check that the newly included share does not contain syntax errors. Check out ",(0,i.jsx)(n.code,{children:"man testparm"})," for more information about the ",(0,i.jsx)(n.em,{children:"testparm"})," utility."]}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.em,{children:"testparm"})," didn't spot any problems, restart Samba with ",(0,i.jsx)(n.code,{children:"sudo systemctl restart smb"}),", which will activate the new configuration."]}),"\n",(0,i.jsx)(n.h3,{id:"links-to-the-official-samba-documentation",children:"Links to the official Samba documentation"}),"\n",(0,i.jsxs)(n.p,{children:["Apart from the aforementioned ",(0,i.jsx)(n.code,{children:"man smb.conf"}),", wiki.samba.org is your friend, specifically:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://wiki.samba.org/index.php/Setting_up_a_Share_Using_POSIX_ACLs",children:"https://wiki.samba.org/index.php/Setting_up_a_Share_Using_POSIX_ACLs"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://wiki.samba.org/index.php/Setting_up_Samba_as_a_Standalone_Server",children:"https://wiki.samba.org/index.php/Setting_up_Samba_as_a_Standalone_Server"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The default Solus Samba configuration is patterned on the above."}),"\n",(0,i.jsx)(n.h2,{id:"full-manual-control-of-samba-recommended-only-for-experienced-samba-admins",children:"Full manual control of Samba (recommended only for experienced Samba admins)"}),"\n",(0,i.jsx)(n.p,{children:"Full manual control of Samba can be achieved by completely bypassing the default Solus Samba configuration."}),"\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.em,{children:"smbd"})," manual page (",(0,i.jsx)(n.code,{children:"man 8 smbd"}),"), it is shown how the compiled-in default config file can be overridden by specifying the ",(0,i.jsx)(n.code,{children:"--configfile=<somepath>"})," flag during startup."]}),"\n",(0,i.jsxs)(n.p,{children:["To use the traditional ",(0,i.jsx)(n.code,{children:"/etc/samba/smb.conf"})," configuration file exclusively (thus bypassing the Solus configuration), edit the ",(0,i.jsx)(n.code,{children:"/etc/sysconfig/samba"})," file to look like so:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ini",children:'## Path:           Network/Samba\n## Description:    Samba process options\n## Type:           string\n## Default:        ""\n## ServiceRestart: samba\nSAMBAOPTIONS=""\n## Type:           string\n## Default:        ""\n## ServiceRestart: smb\nSMBDOPTIONS="--configfile=/etc/samba/smb.conf"\n## Type:           string\n## Default:        ""\n## ServiceRestart: nmb\nNMBDOPTIONS="--configfile=/etc/samba/smb.conf"\n## Type:           string\n## Default:        ""\n## ServiceRestart: winbind\nWINBINDOPTIONS=""\n'})})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return o}});var a=s(67294);let i={},t=a.createContext(i);function o(e){let n=a.useContext(t);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);