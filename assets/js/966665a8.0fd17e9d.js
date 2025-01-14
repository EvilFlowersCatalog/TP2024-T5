"use strict";(self.webpackChunkglasskube_docs=self.webpackChunkglasskube_docs||[]).push([[6294],{15357:(e,n,s)=>{s.d(n,{Ay:()=>c,RM:()=>o});var t=s(74848),r=s(28453),l=s(49489),a=s(7227);const o=[];function i(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(l.A,{groupId:"operating-systems",children:[(0,t.jsxs)(a.A,{value:"mac",label:"macOS",children:[(0,t.jsxs)(n.p,{children:["On macOS, you can use ",(0,t.jsx)(n.a,{href:"https://brew.sh/",children:"Homebrew"})," to install and update Glasskube."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"brew install glasskube/tap/glasskube\n"})})]}),(0,t.jsxs)(a.A,{value:"linux",label:"Linux",children:[(0,t.jsx)(n.p,{children:"You can install Glasskube using one of the package managers below."}),(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"RPM-based installation (RedHat/CentOS/Fedora)"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"dnf install https://releases.dl.glasskube.dev/glasskube_v0.24.0_amd64.rpm\n"})})]}),(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"DEB-based installation (Ubuntu/Debian)"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"curl -LO https://releases.dl.glasskube.dev/glasskube_v0.24.0_amd64.deb\r\nsudo dpkg -i glasskube_v0.24.0_amd64.deb\n"})})]}),(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"APK-based installation (Alpine)"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"curl -LO https://releases.dl.glasskube.dev/glasskube_v0.24.0_amd64.apk\r\napk add --allow-untrusted glasskube_v0.24.0_amd64.apk\n"})})]}),(0,t.jsxs)(n.p,{children:["If you are using a distribution that does not use one of the package managers above, or require a 32-bit binary,\r\ncheck out additional download options attached to our ",(0,t.jsx)(n.a,{href:"https://github.com/glasskube/glasskube/releases/latest",children:"latest release"}),"."]})]}),(0,t.jsx)(a.A,{value:"win",label:"Windows",children:(0,t.jsxs)(n.p,{children:["Download the ",(0,t.jsx)(n.a,{href:"https://releases.dl.glasskube.dev/glasskube_v0.24.0_windows_x86_64.zip",children:"windows archive"})," from our\r\nlatest ",(0,t.jsx)(n.a,{href:"https://github.com/glasskube/glasskube/releases/latest",children:"Release"})," and unpack it using Windows Explorer."]})}),(0,t.jsxs)(a.A,{value:"nixos",label:"NixOS/Nixpkgs",children:[(0,t.jsxs)(n.p,{children:["You can either use the package temporarily in a ",(0,t.jsx)("b",{children:"nix-shell"}),":"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"nix-shell -p glasskube\n"})}),(0,t.jsxs)(n.p,{children:["Or install it globally by adding ",(0,t.jsx)(n.code,{children:"pkgs.glasskube"})," to your ",(0,t.jsx)(n.code,{children:"environment.systemPackages"}),"."]})]})]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(n.p,{children:["After installing Glasskube on your local machine, make sure to install the necessary components in your Kubernetes cluster by running ",(0,t.jsx)(n.code,{children:"glasskube bootstrap"}),".\r\nFor more information, check out our ",(0,t.jsx)(n.a,{href:"/docs/getting-started/bootstrap",children:"bootstrap guide"}),"."]})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}},88039:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>b,frontMatter:()=>i,metadata:()=>u,toc:()=>h});var t=s(74848),r=s(28453),l=s(15357),a=s(49489),o=s(7227);const i={},c="Installation",u={id:"getting-started/install",title:"Installation",description:"Glasskube is available for macOS, Windows and Linux.",source:"@site/docs/02_getting-started/01_install.mdx",sourceDirName:"02_getting-started",slug:"/getting-started/install",permalink:"/TP2024-T5/docs/getting-started/install",draft:!1,unlisted:!1,editUrl:"https://github.com/EvilFlowersCatalog/TP2024-T5/tree/main/docs/02_getting-started/01_install.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{}},d={},h=[...l.RM,{value:"Shell completion",id:"shell-completion",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"installation",children:"Installation"})}),"\n",(0,t.jsxs)(n.p,{children:["Glasskube is available for macOS, Windows and Linux.\r\nPackages are available for ",(0,t.jsx)(n.a,{href:"https://brew.sh/",children:"Homebrew"})," and most package managers popular on Linux systems."]}),"\n",(0,t.jsx)(l.Ay,{}),"\n",(0,t.jsx)(n.h2,{id:"shell-completion",children:"Shell completion"}),"\n",(0,t.jsx)(n.p,{children:"Glasskube provides extensive autocomplete for many popular shells.\r\nTo take full advantage of this feature, please follow the steps for your shell below."}),"\n",(0,t.jsxs)(a.A,{groupId:"shells",children:[(0,t.jsxs)(o.A,{value:"Bash",children:[(0,t.jsx)(n.p,{children:"To install completions in the current shell, run:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"source <(glasskube completion bash)\n"})}),(0,t.jsx)(n.p,{children:"For more information (including persistent completions), run:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"glasskube help completion bash\n"})})]}),(0,t.jsxs)(o.A,{value:"zsh",label:"Z shell (zsh)",children:[(0,t.jsx)(n.p,{children:"To install completions in the current shell, run:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"source <(glasskube completion zsh)\n"})}),(0,t.jsx)(n.p,{children:"For more information (including persistent completions), run:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"glasskube help completion zsh\n"})})]}),(0,t.jsxs)(o.A,{value:"fish",label:"fish shell",children:[(0,t.jsx)(n.p,{children:"To install completions in the current shell, run:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"glasskube completion fish | source\n"})}),(0,t.jsx)(n.p,{children:"For more information (including persistent completions), run:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"glasskube help completion fish\n"})})]}),(0,t.jsxs)(o.A,{value:"PowerShell",children:[(0,t.jsx)(n.p,{children:"To install completions in the current shell, run:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"glasskube completion powershell | Out-String | Invoke-Expression\n"})}),(0,t.jsx)(n.p,{children:"For more information (including persistent completions), run:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"glasskube help completion powershell\n"})})]})]})]})}function b(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},7227:(e,n,s)=>{s.d(n,{A:()=>a});s(96540);var t=s(34164);const r={tabItem:"tabItem_Ymn6"};var l=s(74848);function a(e){let{children:n,hidden:s,className:a}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,a),hidden:s,children:n})}},49489:(e,n,s)=>{s.d(n,{A:()=>w});var t=s(96540),r=s(34164),l=s(24245),a=s(56347),o=s(36494),i=s(62814),c=s(45167),u=s(69900);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:s,attributes:t,default:r}}=e;return{value:n,label:s,attributes:t,default:r}}))}(s);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function p(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:s}=e;const r=(0,a.W6)(),l=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,i.aZ)(l),(0,t.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(r.location.search);n.set(l,e),r.replace({...r.location,search:n.toString()})}),[l,r])]}function m(e){const{defaultValue:n,queryString:s=!1,groupId:r}=e,l=h(e),[a,i]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:l}))),[c,d]=b({queryString:s,groupId:r}),[m,x]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,l]=(0,u.Dv)(s);return[r,(0,t.useCallback)((e=>{s&&l.set(e)}),[s,l])]}({groupId:r}),g=(()=>{const e=c??m;return p({value:e,tabValues:l})?e:null})();(0,o.A)((()=>{g&&i(g)}),[g]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),x(e)}),[d,x,l]),tabValues:l}}var x=s(11062);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=s(74848);function j(e){let{className:n,block:s,selectedValue:t,selectValue:a,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),u=e=>{const n=e.currentTarget,s=i.indexOf(n),r=o[s].value;r!==t&&(c(n),a(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const s=i.indexOf(e.currentTarget)+1;n=i[s]??i[0];break}case"ArrowLeft":{const s=i.indexOf(e.currentTarget)-1;n=i[s]??i[i.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":s},n),children:o.map((e=>{let{value:n,label:s,attributes:l}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...l,className:(0,r.A)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":t===n}),children:s??n},n)}))})}function v(e){let{lazy:n,children:s,selectedValue:l}=e;const a=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===l));return e?(0,t.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function k(e){const n=m(e);return(0,f.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,f.jsx)(j,{...n,...e}),(0,f.jsx)(v,{...n,...e})]})}function w(e){const n=(0,x.A)();return(0,f.jsx)(k,{...e,children:d(e.children)},String(n))}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>o});var t=s(96540);const r={},l=t.createContext(r);function a(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);