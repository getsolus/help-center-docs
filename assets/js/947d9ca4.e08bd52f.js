"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[1944],{32810:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>r});var o=t(85893),i=t(11151);const s={title:"Web Development",summary:"Install and configure different web development tools on Solus."},l="Web Development",d={id:"user/software/development/web",title:"Web Development",description:"Solus provides multiple web servers for local testing of web applications.",source:"@site/docs/user/software/development/web.md",sourceDirName:"user/software/development",slug:"/user/software/development/web",permalink:"/docs/user/software/development/web",draft:!1,unlisted:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/user/software/development/web.md",tags:[],version:"current",lastUpdatedAt:1716664515e3,frontMatter:{title:"Web Development",summary:"Install and configure different web development tools on Solus."},sidebar:"userSidebar",previous:{title:"Rust",permalink:"/docs/user/software/development/rust"},next:{title:"Gaming",permalink:"/docs/user/software/gaming/"}},a={},r=[{value:"Caddy",id:"caddy",level:2},{value:"Installation",id:"installation",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Management",id:"management",level:4},{value:"httpd (Apache)",id:"httpd-apache",level:2},{value:"Installation",id:"installation-1",level:3},{value:"Usage",id:"usage",level:3},{value:"Configuration and DocumentRoot",id:"configuration-and-documentroot",level:4},{value:"Enabling PHP support",id:"enabling-php-support",level:4},{value:"Management",id:"management-1",level:4},{value:"nginx",id:"nginx",level:2},{value:"Installation",id:"installation-2",level:3},{value:"Usage",id:"usage-1",level:3},{value:"Configuration",id:"configuration-1",level:4},{value:"Management",id:"management-2",level:4}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"web-development",children:"Web Development"}),"\n",(0,o.jsx)(n.h1,{id:"servers",children:"Servers"}),"\n",(0,o.jsx)(n.p,{children:"Solus provides multiple web servers for local testing of web applications."}),"\n",(0,o.jsx)(n.admonition,{title:"Important",type:"caution",children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Solus is not a server operating system"}),". Usage of server packages outside local testing is not recommended."]})}),"\n",(0,o.jsx)(n.h2,{id:"caddy",children:"Caddy"}),"\n",(0,o.jsx)(n.p,{children:"Caddy is installed with a default configuration that you can customize as needed."}),"\n",(0,o.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,o.jsxs)(n.p,{children:["To install ",(0,o.jsx)(n.code,{children:"caddy"}),", use the Software Center or execute the following command:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo eopkg install caddy\n"})}),"\n",(0,o.jsx)(n.h3,{id:"configuration",children:"Configuration"}),"\n",(0,o.jsxs)(n.p,{children:["You can configure Caddy using a ",(0,o.jsx)(n.em,{children:"Caddyfile"}),", a text file that contains configuration directives. The default Caddyfile is located at ",(0,o.jsx)(n.code,{children:"/usr/share/caddy/Caddyfile"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"To reload Caddy with a new configuration file, use the following command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"caddy reload --config /path/to/new/caddyfile\n"})}),"\n",(0,o.jsxs)(n.p,{children:["For more information, see the Caddy documentation at ",(0,o.jsx)(n.a,{href:"https://caddyserver.com/docs/",children:"https://caddyserver.com/docs/"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"management",children:"Management"}),"\n",(0,o.jsx)(n.p,{children:"You can use the following commands to manage Caddy:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Enable Caddy on startup and start immediately after enabling: ",(0,o.jsx)(n.code,{children:"sudo systemctl enable --now caddy"})]}),"\n",(0,o.jsxs)(n.li,{children:["Stop Caddy: ",(0,o.jsx)(n.code,{children:"sudo systemctl stop caddy"})]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"httpd-apache",children:"httpd (Apache)"}),"\n",(0,o.jsx)(n.p,{children:"httpd (Apache) is installed with a default configuration that you can customize as needed."}),"\n",(0,o.jsx)(n.h3,{id:"installation-1",children:"Installation"}),"\n",(0,o.jsxs)(n.p,{children:["To install ",(0,o.jsx)(n.code,{children:"httpd"}),", use the Software Center or execute the following command:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo eopkg install httpd\n"})}),"\n",(0,o.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n.h4,{id:"configuration-and-documentroot",children:"Configuration and DocumentRoot"}),"\n",(0,o.jsxs)(n.p,{children:["The default configuration files for Apache are located in the ",(0,o.jsx)(n.code,{children:"/usr/share/defaults/httpd/"})," directory. To override the default configuration, create a new file with the ",(0,o.jsx)(n.code,{children:".conf"})," extension in the ",(0,o.jsx)(n.code,{children:"/etc/httpd/conf.d"})," directory."]}),"\n",(0,o.jsx)(n.admonition,{title:"Important",type:"caution",children:(0,o.jsxs)(n.p,{children:["If you modify the configuration files located in the ",(0,o.jsx)(n.code,{children:"/usr/share/defaults/httpd/"})," folder, your changes might be overwritten during a system update."]})}),"\n",(0,o.jsxs)(n.p,{children:["The document root is the directory where Apache serves files from. By default, the document root is ",(0,o.jsx)(n.code,{children:"/var/www/"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"enabling-php-support",children:"Enabling PHP support"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Install ",(0,o.jsx)(n.code,{children:"php"})," from the Software Center or execute the following command: ",(0,o.jsx)(n.code,{children:"sudo eopkg install php"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Create a new ",(0,o.jsx)(n.code,{children:"/etc/httpd/conf.d/php.conf"})," file with the following contents:"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'LoadModule proxy_module lib64/httpd/mod_proxy.so\nLoadModule proxy_fcgi_module lib64/httpd/mod_proxy_fcgi.so\n<FilesMatch \\.php$>\nSetHandler "proxy:fcgi://127.0.0.1:9000"\n</FilesMatch>\n<IfModule dir_module>\nDirectoryIndex index.php index.html\n</IfModule>\n'})}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsxs)(n.li,{children:["Execute the following command: ",(0,o.jsx)(n.code,{children:"sudo systemctl restart httpd && sudo systemctl restart php-fpm"})]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"management-1",children:"Management"}),"\n",(0,o.jsx)(n.p,{children:"You can use the following commands to manage httpd:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Enable httpd on startup: ",(0,o.jsx)(n.code,{children:"sudo systemctl enable httpd"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Start the web server: ",(0,o.jsx)(n.code,{children:"sudo systemctl start httpd"})]}),"\n",(0,o.jsxs)(n.li,{children:["Stop the web server: ",(0,o.jsx)(n.code,{children:"sudo systemctl stop httpd"})]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"nginx",children:"nginx"}),"\n",(0,o.jsx)(n.p,{children:"nginx is installed with a default configuration that you can customize as needed."}),"\n",(0,o.jsx)(n.h3,{id:"installation-2",children:"Installation"}),"\n",(0,o.jsxs)(n.p,{children:["To install ",(0,o.jsx)(n.code,{children:"nginx"}),", use the Software Center or execute the following command:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo eopkg install nginx\n"})}),"\n",(0,o.jsx)(n.h3,{id:"usage-1",children:"Usage"}),"\n",(0,o.jsx)(n.h4,{id:"configuration-1",children:"Configuration"}),"\n",(0,o.jsxs)(n.p,{children:["Nginx's configuration files are located in the ",(0,o.jsx)(n.code,{children:"/usr/share/defaults/nginx/"})," directory. To override the default configuration, you can create configuration files in the ",(0,o.jsx)(n.code,{children:"/etc/nginx/conf.d/"})," or the ",(0,o.jsx)(n.code,{children:"/etc/nginx/sites-enabled"})," folders."]}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["To revert back to the original settings, delete the ",(0,o.jsx)(n.code,{children:"/etc/nginx/"})," folder."]})}),"\n",(0,o.jsx)(n.h4,{id:"management-2",children:"Management"}),"\n",(0,o.jsx)(n.p,{children:"You can use the following commands to manage nginx:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Enable nginx on startup and start immediately after enabling: ",(0,o.jsx)(n.code,{children:"sudo systemctl enable --now nginx"})]}),"\n",(0,o.jsxs)(n.li,{children:["Stop nginx: ",(0,o.jsx)(n.code,{children:"sudo systemctl stop nginx"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>l});var o=t(67294);const i={},s=o.createContext(i);function l(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);