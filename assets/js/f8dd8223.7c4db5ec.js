"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[7212],{4137:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=a.createContext({}),i=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},d=function(e){var t=i(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=i(r),g=o,m=u["".concat(p,".").concat(g)]||u[g]||c[g]||s;return r?a.createElement(m,n(n({ref:t},d),{},{components:r})):a.createElement(m,n({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,n=new Array(s);n[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,n[1]=l;for(var i=2;i<s;i++)n[i]=r[i];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},9868:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>n,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var a=r(7462),o=(r(7294),r(4137));const s={title:"PostgreSQL",summary:"A quick guide to using Postgres on Solus"},n="PostgreSQL server",l={unversionedId:"user/software/development/postgresql",id:"user/software/development/postgresql",title:"PostgreSQL",description:"PostgreSQL is an open source object-relational database system. The postgresql package in Solus includes the PostgreSQL library, client and server.",source:"@site/docs/user/software/development/postgresql.md",sourceDirName:"user/software/development",slug:"/user/software/development/postgresql",permalink:"/docs/user/software/development/postgresql",draft:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/user/software/development/postgresql.md",tags:[],version:"current",lastUpdatedAt:1685401532,formattedLastUpdatedAt:"May 29, 2023",frontMatter:{title:"PostgreSQL",summary:"A quick guide to using Postgres on Solus"},sidebar:"userSidebar",previous:{title:"Java",permalink:"/docs/user/software/development/java"},next:{title:"R and Rstudio",permalink:"/docs/user/software/development/r-and-rstudio"}},p={},i=[{value:"Usage",id:"usage",level:2},{value:"Updating to 15.1",id:"updating-to-151",level:2}],d={toc:i},u="wrapper";function c(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"postgresql-server"},"PostgreSQL server"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.postgresql.org/"},"PostgreSQL")," is an open source object-relational database system. The ",(0,o.kt)("inlineCode",{parentName:"p"},"postgresql")," package in Solus includes the PostgreSQL library, client and server."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"PostgreSQL can be installed either from the Software Center or via terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo eopkg install postgresql\n")),(0,o.kt)("p",null,"Management of the server can be done using Systemd:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo systemctl enable postgresql # Start the server on boot\nsudo systemctl start postgresql  # Start the server now\nsudo systemctl stop postgresql   # Stop the server\n")),(0,o.kt)("p",null,"It is possible to connect to the database using the PostgreSQL user:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo -u postgres psql\n")),(0,o.kt)("p",null,"Note that all local connections are trusted and can access all databases by default. This can be changed in ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/db/pgsql/data/pg_hba.conf"),", see the ",(0,o.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/current/auth-pg-hba-conf.html"},"PostgreSQL documentation")," for more details."),(0,o.kt)("h2",{id:"updating-to-151"},"Updating to 15.1"),(0,o.kt)("p",null,"Because PostgreSQL is included as a single package, the only way to perform a major upgrade of PostgreSQL is via a backup/restore. The procedure below describes the upgrade process as it applies to Solus. See the ",(0,o.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/15/upgrading.html#UPGRADING-VIA-PGDUMPALL"},"PostgreSQL documentation")," for more details."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"If you have already updated PostgreSQL, downgrade PostgreSQL back to 14.5:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo eopkg it https://mirrors.rit.edu/solus/packages/shannon/p/postgresql/postgresql-14.5-37-1-x86_64.eopkg \\\n              https://mirrors.rit.edu/solus/packages/shannon/p/postgresql/postgresql-libpq-14.5-37-1-x86_64.eopkg\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"(Re)start PostgreSQL:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo systemctl restart postgresql\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Create a backup of all current data:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo -u postgres pg_dumpall -f /tmp/backup.sql\n")),(0,o.kt)("p",null,"The location of the backup may be one of your choosing, but keep in mind that the ",(0,o.kt)("inlineCode",{parentName:"p"},"postgres")," user needs to have write permissions on the given location."),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Stop PostgreSQL:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo systemctl stop postgresql\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Rename the old data directory. This directory contains the old configuration and the original database, but requires significant disk space.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo mv /var/db/pgsql/data /var/db/pgsql/data.old\n")),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Create a new data directory:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo mkdir /var/db/pgsql/data\nsudo chown postgres: /var/db/pgsql/data\n")),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"Upgrade PostgreSQL:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo eopkg upgrade\n")),(0,o.kt)("ol",{start:8},(0,o.kt)("li",{parentName:"ol"},"Start PostgreSQL:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo systemctl start postgresql\n")),(0,o.kt)("ol",{start:9},(0,o.kt)("li",{parentName:"ol"},"Restore the data:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo -u postgres psql < /tmp/backup.sql\n")),(0,o.kt)("ol",{start:10},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"(optional) Update the configuration files in ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/db/pgsql/data")," based on the configuration in ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/db/pgsql/data.old"),". Restart PostgreSQL afterwards.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Verify that the migration was successful and your data is there.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Remove the backup and data dump:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo rm -r /var/db/pgsql/data.old /tmp/backup.sql\n")))}c.isMDXComponent=!0}}]);