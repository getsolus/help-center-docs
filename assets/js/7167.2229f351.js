(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([["7167"],{87594:function(e,t){function n(e){let t,n=[];for(let o of e.split(",").map(e=>e.trim()))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,r,s]=t;if(o&&s){o=parseInt(o);let e=o<(s=parseInt(s))?1:-1;("-"===r||".."===r||"\u2025"===r)&&(s+=e);for(let t=o;t!==s;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},77793:function(e,t,n){"use strict";n.d(t,{Z:()=>N});var o=n("85893"),r=n("67294"),s=n("74904"),c=n("1822"),a=n("50490");let l={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function i(e){let{type:t,className:n,children:r}=e;return(0,o.jsx)("div",{className:(0,s.Z)(a.k.common.admonition,a.k.common.admonitionType(t),l.admonition,n),children:r})}function d(e){let{icon:t,title:n}=e;return(0,o.jsxs)("div",{className:l.admonitionHeading,children:[(0,o.jsx)("span",{className:l.admonitionIcon,children:t}),n]})}function u(e){let{children:t}=e;return t?(0,o.jsx)("div",{className:l.admonitionContent,children:t}):null}function m(e){let{type:t,icon:n,title:r,children:s,className:c}=e;return(0,o.jsxs)(i,{type:t,className:c,children:[r||n?(0,o.jsx)(d,{title:r,icon:n}):null,(0,o.jsx)(u,{children:s})]})}let h={icon:(0,o.jsx)(function(e){return(0,o.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})},{}),title:(0,o.jsx)(c.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function f(e){return(0,o.jsx)(m,{...h,...e,className:(0,s.Z)("alert alert--secondary",e.className),children:e.children})}let p={icon:(0,o.jsx)(function(e){return(0,o.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})},{}),title:(0,o.jsx)(c.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function b(e){return(0,o.jsx)(m,{...p,...e,className:(0,s.Z)("alert alert--success",e.className),children:e.children})}let x={icon:(0,o.jsx)(function(e){return(0,o.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})},{}),title:(0,o.jsx)(c.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function j(e){return(0,o.jsx)(m,{...x,...e,className:(0,s.Z)("alert alert--info",e.className),children:e.children})}function g(e){return(0,o.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}let v={icon:(0,o.jsx)(g,{}),title:(0,o.jsx)(c.Z,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})},y={icon:(0,o.jsx)(function(e){return(0,o.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})},{}),title:(0,o.jsx)(c.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})},k={icon:(0,o.jsx)(g,{}),title:(0,o.jsx)(c.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})},B={note:f,tip:b,info:j,warning:function(e){return(0,o.jsx)(m,{...v,...e,className:(0,s.Z)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,o.jsx)(m,{...y,...e,className:(0,s.Z)("alert alert--danger",e.className),children:e.children})},secondary:e=>(0,o.jsx)(f,{title:"secondary",...e}),important:e=>(0,o.jsx)(j,{title:"important",...e}),success:e=>(0,o.jsx)(b,{title:"success",...e}),caution:function(e){return(0,o.jsx)(m,{...k,...e,className:(0,s.Z)("alert alert--warning",e.className),children:e.children})}};function N(e){let t=function(e){let{mdxAdmonitionTitle:t,rest:n}=function(e){let t=r.Children.toArray(e),n=t.find(e=>r.isValidElement(e)&&"mdxAdmonitionTitle"===e.type),s=t.filter(e=>e!==n);return{mdxAdmonitionTitle:n?.props.children,rest:s.length>0?(0,o.jsx)(o.Fragment,{children:s}):null}}(e.children),s=e.title??t;return{...e,...s&&{title:s},children:n}}(e),n=function(e){let t=B[e];return t?t:(console.warn(`No admonition component found for admonition type "${e}". Using Info as fallback.`),B.info)}(t.type);return(0,o.jsx)(n,{...t})}},84404:function(e,t,n){"use strict";n.d(t,{Z:()=>S});var o=n("85893"),r=n("67294"),s=n("13341"),c=n("74904"),a=n("96818"),l=n("45237");function i(){let{prism:e}=(0,l.L)(),{colorMode:t}=(0,a.I)(),n=e.theme,o=e.darkTheme||n;return"dark"===t?o:n}var d=n("50490"),u=n("87594"),m=n.n(u);let h=/title=(?<quote>["'])(?<title>.*?)\1/,f=/\{(?<range>[\d,-]+)\}/,p={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},b={...p,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},x=Object.keys(p);function j(e,t){let n=e.map(e=>{let{start:n,end:o}=b[e];return`(?:${n}\\s*(${t.flatMap(e=>[e.line,e.block?.start,e.block?.end].filter(Boolean)).join("|")})\\s*${o})`}).join("|");return RegExp(`^\\s*(?:${n})\\s*$`)}let g="codeBlockContainer_Ckt0";function v(e){let{as:t,...n}=e,r=function(e){let t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach(e=>{let[o,r]=e,s=t[o];s&&"string"==typeof r&&(n[s]=r)}),n}(i());return(0,o.jsx)(t,{...n,style:r,className:(0,c.Z)(n.className,g,d.k.common.codeBlock)})}let y={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function k(e){let{children:t,className:n}=e;return(0,o.jsx)(v,{as:"pre",tabIndex:0,className:(0,c.Z)(y.codeBlockStandalone,"thin-scrollbar",n),children:(0,o.jsx)("code",{className:y.codeBlockLines,children:t})})}var B=n("57100");let N={attributes:!0,characterData:!0,childList:!0,subtree:!0};var w=n("43359");let C={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function L(e){let{line:t,classNames:n,showLineNumbers:r,getLineProps:s,getTokenProps:a}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");let l=s({line:t,className:(0,c.Z)(n,r&&C.codeLine)}),i=t.map((e,t)=>(0,o.jsx)("span",{...a({token:e})},t));return(0,o.jsxs)("span",{...l,children:[r?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{className:C.codeLineNumber}),(0,o.jsx)("span",{className:C.codeLineContent,children:i})]}):i,(0,o.jsx)("br",{})]})}var E=n("1822");function I(e){return(0,o.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,o.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function _(e){return(0,o.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,o.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}let Z={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function T(e){let{code:t,className:n}=e,[s,a]=(0,r.useState)(!1),l=(0,r.useRef)(void 0),i=(0,r.useCallback)(()=>{!function(e){let{target:t=document.body}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"!=typeof e)throw TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);let n=document.createElement("textarea"),o=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";let r=document.getSelection(),s=r.rangeCount>0&&r.getRangeAt(0);t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}n.remove(),s&&(r.removeAllRanges(),r.addRange(s)),o&&o.focus()}(t),a(!0),l.current=window.setTimeout(()=>{a(!1)},1e3)},[t]);return(0,r.useEffect)(()=>()=>window.clearTimeout(l.current),[]),(0,o.jsx)("button",{type:"button","aria-label":s?(0,E.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,E.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,E.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,c.Z)("clean-btn",n,Z.copyButton,s&&Z.copyButtonCopied),onClick:i,children:(0,o.jsxs)("span",{className:Z.copyButtonIcons,"aria-hidden":"true",children:[(0,o.jsx)(I,{className:Z.copyButtonIcon}),(0,o.jsx)(_,{className:Z.copyButtonSuccessIcon})]})})}function z(e){return(0,o.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,o.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}let A={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function H(e){let{className:t,onClick:n,isEnabled:r}=e,s=(0,E.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,o.jsx)("button",{type:"button",onClick:n,className:(0,c.Z)("clean-btn",t,r&&A.wordWrapButtonEnabled),"aria-label":s,title:s,children:(0,o.jsx)(z,{className:A.wordWrapButtonIcon,"aria-hidden":"true"})})}function M(e){var t,n,s;let{children:a,className:d="",metastring:u,title:p,showLineNumbers:b,language:g}=e,{prism:{defaultLanguage:k,magicComments:C}}=(0,l.L)();let E=(t=g??function(e){let t=e.split(" ").find(e=>e.startsWith("language-"));return t?.replace(/language-/,"")}(d)??k,t?.toLowerCase()),I=i(),_=function(){let[e,t]=(0,r.useState)(!1),[n,o]=(0,r.useState)(!1),s=(0,r.useRef)(null),c=(0,r.useCallback)(()=>{let n=s.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t(e=>!e)},[s,e]),a=(0,r.useCallback)(()=>{let{scrollWidth:e,clientWidth:t}=s.current;o(e>t||s.current.querySelector("code").hasAttribute("style"))},[s]);return!function(e,t){let[n,o]=(0,r.useState)(),s=(0,r.useCallback)(()=>{o(e.current?.closest("[role=tabpanel][hidden]"))},[e,o]);(0,r.useEffect)(()=>{s()},[s]),!function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:N,o=(0,B.zX)(t),s=(0,B.Ql)(n);(0,r.useEffect)(()=>{let t=new MutationObserver(o);return e&&t.observe(e,s),()=>t.disconnect()},[e,o,s])}(n,e=>{e.forEach(e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),s())})},{attributes:!0,characterData:!1,childList:!1,subtree:!1})}(s,a),(0,r.useEffect)(()=>{a()},[e,a]),(0,r.useEffect)(()=>(window.addEventListener("resize",a,{passive:!0}),()=>{window.removeEventListener("resize",a)}),[a]),{codeBlockRef:s,isEnabled:e,isCodeScrollable:n,toggle:c}}();let Z=(n=u,(n?.match(h)?.groups.title??"")||p),{lineClassNames:z,code:A}=function(e,t){let n=e.replace(/\n$/,""),{language:o,magicComments:r,metastring:s}=t;if(s&&f.test(s)){let e=s.match(f).groups.range;if(0===r.length)throw Error(`A highlight range has been given in code block's metastring (\`\`\` ${s}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);let t=r[0].className;return{lineClassNames:Object.fromEntries(m()(e).filter(e=>e>0).map(e=>[e-1,[t]])),code:n}}if(void 0===o)return{lineClassNames:{},code:n};let c=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return j(["js","jsBlock"],t);case"jsx":case"tsx":return j(["js","jsBlock","jsx"],t);case"html":return j(["js","jsBlock","html"],t);case"python":case"py":case"bash":return j(["bash"],t);case"markdown":case"md":return j(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return j(["tex"],t);case"lua":case"haskell":case"sql":return j(["lua"],t);case"wasm":return j(["wasm"],t);case"vb":case"vba":case"visual-basic":return j(["vb","rem"],t);case"vbnet":return j(["vbnet","rem"],t);case"batch":return j(["rem"],t);case"basic":return j(["rem","f90"],t);case"fsharp":return j(["js","ml"],t);case"ocaml":case"sml":return j(["ml"],t);case"fortran":return j(["f90"],t);case"cobol":return j(["cobol"],t);default:return j(x,t)}}(o,r),a=n.split("\n"),l=Object.fromEntries(r.map(e=>[e.className,{start:0,range:""}])),i=Object.fromEntries(r.filter(e=>e.line).map(e=>{let{className:t,line:n}=e;return[n,t]})),d=Object.fromEntries(r.filter(e=>e.block).map(e=>{let{className:t,block:n}=e;return[n.start,t]})),u=Object.fromEntries(r.filter(e=>e.block).map(e=>{let{className:t,block:n}=e;return[n.end,t]}));for(let e=0;e<a.length;){let t=a[e].match(c);if(!t){e+=1;continue}let n=t.slice(1).find(e=>void 0!==e);i[n]?l[i[n]].range+=`${e},`:d[n]?l[d[n]].start=e:u[n]&&(l[u[n]].range+=`${l[u[n]].start}-${e-1},`),a.splice(e,1)}n=a.join("\n");let h={};return Object.entries(l).forEach(e=>{let[t,{range:n}]=e;m()(n).forEach(e=>{h[e]??=[],h[e].push(t)})}),{lineClassNames:h,code:n}}(a,{metastring:u,language:E,magicComments:C});let M=b??(s=u,!!s?.includes("showLineNumbers"));return(0,o.jsxs)(v,{as:"div",className:(0,c.Z)(d,E&&!d.includes(`language-${E}`)&&`language-${E}`),children:[Z&&(0,o.jsx)("div",{className:y.codeBlockTitle,children:Z}),(0,o.jsxs)("div",{className:y.codeBlockContent,children:[(0,o.jsx)(w.y$,{theme:I,code:A,language:E??"text",children:e=>{let{className:t,style:n,tokens:r,getLineProps:s,getTokenProps:a}=e;return(0,o.jsx)("pre",{tabIndex:0,ref:_.codeBlockRef,className:(0,c.Z)(t,y.codeBlock,"thin-scrollbar"),style:n,children:(0,o.jsx)("code",{className:(0,c.Z)(y.codeBlockLines,M&&y.codeBlockLinesWithNumbering),children:r.map((e,t)=>(0,o.jsx)(L,{line:e,getLineProps:s,getTokenProps:a,classNames:z[t],showLineNumbers:M},t))})})}}),(0,o.jsxs)("div",{className:y.buttonGroup,children:[(_.isEnabled||_.isCodeScrollable)&&(0,o.jsx)(H,{className:y.codeButton,onClick:()=>_.toggle(),isEnabled:_.isEnabled}),(0,o.jsx)(T,{className:y.codeButton,code:A})]})]})]})}function S(e){var t;let{children:n,...c}=e,a=(0,s.Z)();let l=(t=n,r.Children.toArray(t).some(e=>(0,r.isValidElement)(e))?t:Array.isArray(t)?t.join(""):t);return(0,o.jsx)("string"==typeof l?M:k,{...c,children:l},String(a))}},50065:function(e,t,n){"use strict";n.d(t,{Z:function(){return a},a:function(){return c}});var o=n(67294);let r={},s=o.createContext(r);function c(e){let t=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);