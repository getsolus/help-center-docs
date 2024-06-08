"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[7212],{4606:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=t(85893),r=t(11151);const a={title:"PostgreSQL",summary:"A quick guide to using Postgres on Solus"},o="PostgreSQL server",l={id:"user/software/development/postgresql",title:"PostgreSQL",description:"PostgreSQL is an open source object-relational database system. The postgresql package in Solus includes the PostgreSQL library, client and server.",source:"@site/docs/user/software/development/postgresql.md",sourceDirName:"user/software/development",slug:"/user/software/development/postgresql",permalink:"/docs/user/software/development/postgresql",draft:!1,unlisted:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/user/software/development/postgresql.md",tags:[],version:"current",lastUpdatedAt:1717866926e3,frontMatter:{title:"PostgreSQL",summary:"A quick guide to using Postgres on Solus"},sidebar:"userSidebar",previous:{title:"Java",permalink:"/docs/user/software/development/java"},next:{title:"R and RStudio",permalink:"/docs/user/software/development/r-and-rstudio"}},d={},c=[{value:"Usage",id:"usage",level:2},{value:"Updating to 16",id:"updating-to-16",level:2}];function i(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"postgresql-server",children:"PostgreSQL server"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://www.postgresql.org/",children:"PostgreSQL"})," is an open source object-relational database system. The ",(0,n.jsx)(s.code,{children:"postgresql"})," package in Solus includes the PostgreSQL library, client and server."]}),"\n",(0,n.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(s.p,{children:"PostgreSQL can be installed either from the Software Center or via terminal:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"sudo eopkg install postgresql\n"})}),"\n",(0,n.jsx)(s.p,{children:"Management of the server can be done using Systemd:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"sudo systemctl enable postgresql # Start the server on boot\nsudo systemctl start postgresql  # Start the server now\nsudo systemctl stop postgresql   # Stop the server\n"})}),"\n",(0,n.jsx)(s.p,{children:"It is possible to connect to the database using the PostgreSQL user:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"sudo -u postgres psql\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Note that all local connections are trusted and can access all databases by default. This can be changed in ",(0,n.jsx)(s.code,{children:"/var/db/pgsql/data/pg_hba.conf"}),", see the ",(0,n.jsx)(s.a,{href:"https://www.postgresql.org/docs/current/auth-pg-hba-conf.html",children:"PostgreSQL documentation"})," for more details."]}),"\n",(0,n.jsx)(s.h2,{id:"updating-to-16",children:"Updating to 16"}),"\n",(0,n.jsxs)(s.p,{children:["Because PostgreSQL is included as a single package, the only way to perform a major upgrade of PostgreSQL is via a backup/restore. The procedure below describes the upgrade process as it applies to Solus. See the ",(0,n.jsx)(s.a,{href:"https://www.postgresql.org/docs/16/upgrading.html#UPGRADING-VIA-PGDUMPALL",children:"PostgreSQL documentation"})," for more details."]}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"If you have already updated PostgreSQL, downgrade PostgreSQL back to 15.4:"}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"sudo eopkg it https://cdn.getsol.us/repo/shannon/p/postgresql/postgresql-15.4-42-1-x86_64.eopkg \\\n              https://cdn.getsol.us/repo/shannon/p/postgresql/postgresql-libpq-15.4-42-1-x86_64.eopkg\n"})}),"\n",(0,n.jsxs)(s.ol,{start:"2",children:["\n",(0,n.jsx)(s.li,{children:"(Re)start PostgreSQL:"}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"sudo systemctl restart postgresql\n"})}),"\n",(0,n.jsxs)(s.ol,{start:"3",children:["\n",(0,n.jsx)(s.li,{children:"Create a backup of all current data:"}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"sudo -u postgres pg_dumpall -f /tmp/backup.sql\n"})}),"\n",(0,n.jsxs)(s.p,{children:["The location of the backup may be one of your choosing, but keep in mind that the ",(0,n.jsx)(s.code,{children:"postgres"})," user needs to have write permissions on the given location."]}),"\n",(0,n.jsxs)(s.ol,{start:"4",children:["\n",(0,n.jsx)(s.li,{children:"Stop PostgreSQL:"}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"sudo systemctl stop postgresql\n"})}),"\n",(0,n.jsxs)(s.ol,{start:"5",children:["\n",(0,n.jsx)(s.li,{children:"Rename the old data directory. This directory contains the old configuration and the original database, but requires significant disk space."}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"sudo mv /var/db/pgsql/data /var/db/pgsql/data.old\n"})}),"\n",(0,n.jsxs)(s.ol,{start:"6",children:["\n",(0,n.jsx)(s.li,{children:"Create a new data directory:"}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"sudo mkdir /var/db/pgsql/data\nsudo chown postgres: /var/db/pgsql/data\n"})}),"\n",(0,n.jsxs)(s.ol,{start:"7",children:["\n",(0,n.jsx)(s.li,{children:"Upgrade PostgreSQL:"}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"sudo eopkg upgrade\n"})}),"\n",(0,n.jsxs)(s.ol,{start:"8",children:["\n",(0,n.jsx)(s.li,{children:"Start PostgreSQL:"}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"sudo systemctl start postgresql\n"})}),"\n",(0,n.jsxs)(s.ol,{start:"9",children:["\n",(0,n.jsx)(s.li,{children:"Restore the data:"}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"sudo -u postgres psql < /tmp/backup.sql\n"})}),"\n",(0,n.jsxs)(s.ol,{start:"10",children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["(optional) Update the configuration files in ",(0,n.jsx)(s.code,{children:"/var/db/pgsql/data"})," based on the configuration in ",(0,n.jsx)(s.code,{children:"/var/db/pgsql/data.old"}),". Restart PostgreSQL afterwards."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Verify that the migration was successful and your data is there."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Remove the backup and data dump:"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"sudo rm -r /var/db/pgsql/data.old /tmp/backup.sql\n"})})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>l,a:()=>o});var n=t(67294);const r={},a=n.createContext(r);function o(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);