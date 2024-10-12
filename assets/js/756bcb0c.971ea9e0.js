"use strict";(self.webpackChunkglasskube_docs=self.webpackChunkglasskube_docs||[]).push([[851],{6758:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>u,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var t=s(4848),n=s(8453),r=s(7738);const l={slug:"package-updates",title:"Glasskube v0.0.3 \u2014 Introducing Package Updates",description:"Version 0.0.3, launched on February 27th: 10 contributors, 64 commits, introducing package update management.",authors:["pmig"],tags:["glasskube","release","kubernetes"],image:"https://github.com/user-attachments/assets/6bfd0894-fa64-40e0-a2e0-87dc9114d28b"},o=void 0,i={permalink:"/TP2024-T5/blog/package-updates",source:"@site/blog/2024-02-27-release-package-updates/index.mdx",title:"Glasskube v0.0.3 \u2014 Introducing Package Updates",description:"Version 0.0.3, launched on February 27th: 10 contributors, 64 commits, introducing package update management.",date:"2024-02-27T00:00:00.000Z",tags:[{inline:!0,label:"glasskube",permalink:"/TP2024-T5/blog/tags/glasskube"},{inline:!0,label:"release",permalink:"/TP2024-T5/blog/tags/release"},{inline:!0,label:"kubernetes",permalink:"/TP2024-T5/blog/tags/kubernetes"}],readingTime:3.13,hasTruncateMarker:!0,authors:[{name:"Philip Miglinci",title:"Co-Founder",url:"https://www.linkedin.com/in/pmigat/",imageURL:"https://avatars.githubusercontent.com/pmig",key:"pmig",page:null}],frontMatter:{slug:"package-updates",title:"Glasskube v0.0.3 \u2014 Introducing Package Updates",description:"Version 0.0.3, launched on February 27th: 10 contributors, 64 commits, introducing package update management.",authors:["pmig"],tags:["glasskube","release","kubernetes"],image:"https://github.com/user-attachments/assets/6bfd0894-fa64-40e0-a2e0-87dc9114d28b"},unlisted:!1,prevItem:{title:"Glasskube v0.1.0 \u2014 Introducing Dependency Management",permalink:"/TP2024-T5/blog/release-v0.1.0"},nextItem:{title:"The Inner Workings of Kubernetes Management Frontends \u2014 A Software Engineer\u2019s Perspective",permalink:"/TP2024-T5/blog/kubernetes-frontends"}},u={authorsImageUrls:[void 0]},c=[{value:"\ud83d\ude4f Special thanks to all our contributors \ud83e\udd70",id:"-special-thanks-to-all-our-contributors-",level:2},{value:"Most notable changes",id:"most-notable-changes",level:2},{value:"Package Updates",id:"package-updates",level:3},{value:"Further improvements",id:"further-improvements",level:3},{value:"BREAKING changes",id:"breaking-changes",level:3},{value:"All Release Notes",id:"all-release-notes",level:2},{value:"How to upgrade",id:"how-to-upgrade",level:2},{value:"Getting started",id:"getting-started",level:2},...r.RM,{value:"Get involved",id:"get-involved",level:2}];function d(e){const a={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{src:"https://github.com/user-attachments/assets/6bfd0894-fa64-40e0-a2e0-87dc9114d28b",alt:"Glasskube v0.0.3 thumbnail"})}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.em,{children:"Glasskube v0.0.3 was released on February 27th, introducing package updates and many useful features for improved CLI and GUI experience."})}),"\n",(0,t.jsxs)(a.p,{children:["Glasskube is fully open-source. Support us by leaving a star: ",(0,t.jsxs)(a.a,{href:"https://github.com/glasskube/glasskube/",children:["\u2b50 ",(0,t.jsx)(a.code,{children:"glasskube/glasskube"})," \u2b50"]})]}),"\n",(0,t.jsx)(a.h2,{id:"-special-thanks-to-all-our-contributors-",children:"\ud83d\ude4f Special thanks to all our contributors \ud83e\udd70"}),"\n",(0,t.jsx)(a.p,{children:"Once again, we can't thank our community enough for their valuable input and exciting contributions to Glasskube.\r\nWe are happy you choose to be part of our journey in making Kubernetes package management easier for everyone."}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.strong,{children:"This release includes:"})}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"\ud83d\udc65 a total of 10 contributors"}),"\n",(0,t.jsx)(a.li,{children:"\ud83d\udee0\ufe0f 64 commits"}),"\n",(0,t.jsx)(a.li,{children:"\ud83d\udca5 no breaking changes"}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"Watch our release video to get an overview of what has changed:"}),"\n",(0,t.jsx)("iframe",{width:"100%",height:"460",src:"https://www.youtube-nocookie.com/embed/lw4omvY2i1A?si=8oFNIs336JC3zlBU",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),"\n",(0,t.jsx)(a.h2,{id:"most-notable-changes",children:"Most notable changes"}),"\n",(0,t.jsx)(a.h3,{id:"package-updates",children:"Package Updates"}),"\n",(0,t.jsxs)(a.p,{children:["Updating packages is one of the most essential features of any package manager. That's why most of our efforts in the past two weeks\r\nhave gone into the support for such updates via CLI and GUI. It's as easy as typing ",(0,t.jsx)(a.code,{children:"glasskube update"})," into the command line,\r\nor a button click in the GUI."]}),"\n",(0,t.jsxs)(a.p,{children:["During package installation you now can decide whether you want automatic updates for the package, in which case the\r\nGlasskube package operator will take care of keeping you up to date at all times. You can of course opt out of this feature\r\nif you prefer to handle updates manually. Apart from that, with the ",(0,t.jsx)(a.code,{children:"--version"})," flag you can choose which version of a package is to be installed,\r\nif your use case requires a specific version."]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{src:"https://github.com/glasskube/glasskube/assets/3041752/1b2e14c6-d9e9-446c-b7e3-29c567db38f2",alt:"Package Updates"})}),"\n",(0,t.jsxs)(a.p,{children:["For technical details, please have a look at the ",(0,t.jsx)(a.a,{href:"/docs/components/package-operator/#handling-package-updates",children:"package operator documentation"}),"."]}),"\n",(0,t.jsx)(a.h3,{id:"further-improvements",children:"Further improvements"}),"\n",(0,t.jsx)(a.p,{children:"We also worked hard on improving existing commands and our GUI. Here's a list of further notable changes:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["The ",(0,t.jsx)(a.code,{children:"glasskube describe"})," command \u2013 and its GUI-complement, the package detail page \u2013 have been implemented for you to have a more detailed\r\nview on each of the packages available in Glasskube."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"glasskube list"})," has been extended with the new flags ",(0,t.jsx)(a.code,{children:"--outdated"})," \u2013 listing only outdated packages, and ",(0,t.jsx)(a.code,{children:"--show-latest"})," \u2013 showing the\r\nlatest available version for each package."]}),"\n",(0,t.jsx)(a.li,{children:"All commands check for a newer version of Glasskube, and notify you if you are not up to date anymore."}),"\n",(0,t.jsx)(a.li,{children:"Glasskube is now even easier to set up: The GUI comes with handy pages for selecting a kubeconfig and for bootstrapping Glasskube in a cluster.\r\nAll CLI commands will also support you in setting up Glasskube in your cluster."}),"\n",(0,t.jsx)(a.li,{children:"Streaming any kind of package status change directly into the GUI, making it easier for you to recognize when something is happening in the background."}),"\n"]}),"\n",(0,t.jsx)(a.h3,{id:"breaking-changes",children:"BREAKING changes"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.em,{children:"This release does not contain any breaking changes"}),"."]}),"\n",(0,t.jsx)(a.h2,{id:"all-release-notes",children:"All Release Notes"}),"\n",(0,t.jsxs)(a.p,{children:["The release notes can be found here: ",(0,t.jsx)(a.a,{href:"https://github.com/glasskube/glasskube/releases/tag/v0.0.3",children:"v0.0.3 release on GitHub"})]}),"\n",(0,t.jsxs)(a.p,{children:["All changes can be found here: ",(0,t.jsx)(a.a,{href:"https://github.com/glasskube/glasskube/compare/v0.0.2...v0.0.3",children:"Comparing v0.0.2 to v0.0.3"})]}),"\n",(0,t.jsx)(a.h2,{id:"how-to-upgrade",children:"How to upgrade"}),"\n",(0,t.jsxs)(a.p,{children:["Follow the installation instructions below to download the latest version of the Glasskube client.\r\nAfter that you need to upgrade the server component (",(0,t.jsx)(a.a,{href:"/docs/components/package-operator/",children:"Package Operator"}),") by bootstrapping Glasskube again:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"glasskube bootstrap\n"})}),"\n",(0,t.jsx)(a.h2,{id:"getting-started",children:"Getting started"}),"\n",(0,t.jsxs)(a.p,{children:["Follow our ",(0,t.jsx)(a.a,{href:"https://glasskube.dev/docs/getting-started/install",children:"Getting Started guide"})," if you want to try Glasskube for yourself and install your first package."]}),"\n",(0,t.jsx)(r.Ay,{}),"\n",(0,t.jsx)(a.h2,{id:"get-involved",children:"Get involved"}),"\n",(0,t.jsxs)(a.p,{children:["The easiest way to get involved is to tackle one of our ",(0,t.jsx)(a.a,{href:"https://github.com/glasskube/glasskube/issues",children:"open issues"}),".\r\nYou are also welcome to join our ",(0,t.jsx)(a.a,{href:"https://discord.gg/SxH6KUCGH7",children:"Discord"}),"."]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsxs)(a.strong,{children:["If you are a cloud native developer, please ",(0,t.jsx)(a.a,{href:"https://github.com/glasskube/glasskube/discussions/90",children:"submit your package"})]}),"."]}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"As Glasskube is still in its very early days, your feedback is highly appreciated.\r\nLet us know what you think, we would love to hear from you or support us by leaving a star on GitHub:"}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsxs)(a.a,{href:"https://github.com/glasskube/glasskube/",children:["\u2b50 ",(0,t.jsx)(a.code,{children:"glasskube/glasskube"})," \u2b50"]})})]})}function h(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},7738:(e,a,s)=>{s.d(a,{Ay:()=>u,RM:()=>o});var t=s(4848),n=s(8453),r=s(9489),l=s(7227);const o=[];function i(e){const a={a:"a",code:"code",p:"p",pre:"pre",...(0,n.R)(),...e.components},{Details:s}=a;return s||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.A,{groupId:"operating-systems",children:[(0,t.jsxs)(l.A,{value:"mac",label:"macOS",children:[(0,t.jsxs)(a.p,{children:["On macOS, you can use ",(0,t.jsx)(a.a,{href:"https://brew.sh/",children:"Homebrew"})," to install and update Glasskube."]}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:"brew install glasskube/tap/glasskube\n"})})]}),(0,t.jsxs)(l.A,{value:"linux",label:"Linux",children:[(0,t.jsx)(a.p,{children:"You can install Glasskube using one of the package managers below."}),(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"RPM-based installation (RedHat/CentOS/Fedora)"}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{children:"dnf install https://releases.dl.glasskube.dev/glasskube_v0.24.0_amd64.rpm\n"})})]}),(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"DEB-based installation (Ubuntu/Debian)"}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{children:"curl -LO https://releases.dl.glasskube.dev/glasskube_v0.24.0_amd64.deb\r\nsudo dpkg -i glasskube_v0.24.0_amd64.deb\n"})})]}),(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"APK-based installation (Alpine)"}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{children:"curl -LO https://releases.dl.glasskube.dev/glasskube_v0.24.0_amd64.apk\r\napk add --allow-untrusted glasskube_v0.24.0_amd64.apk\n"})})]}),(0,t.jsxs)(a.p,{children:["If you are using a distribution that does not use one of the package managers above, or require a 32-bit binary,\r\ncheck out additional download options attached to our ",(0,t.jsx)(a.a,{href:"https://github.com/glasskube/glasskube/releases/latest",children:"latest release"}),"."]})]}),(0,t.jsx)(l.A,{value:"win",label:"Windows",children:(0,t.jsxs)(a.p,{children:["Download the ",(0,t.jsx)(a.a,{href:"https://releases.dl.glasskube.dev/glasskube_v0.24.0_windows_x86_64.zip",children:"windows archive"})," from our\r\nlatest ",(0,t.jsx)(a.a,{href:"https://github.com/glasskube/glasskube/releases/latest",children:"Release"})," and unpack it using Windows Explorer."]})}),(0,t.jsxs)(l.A,{value:"nixos",label:"NixOS/Nixpkgs",children:[(0,t.jsxs)(a.p,{children:["You can either use the package temporarily in a ",(0,t.jsx)("b",{children:"nix-shell"}),":"]}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{children:"nix-shell -p glasskube\n"})}),(0,t.jsxs)(a.p,{children:["Or install it globally by adding ",(0,t.jsx)(a.code,{children:"pkgs.glasskube"})," to your ",(0,t.jsx)(a.code,{children:"environment.systemPackages"}),"."]})]})]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(a.p,{children:["After installing Glasskube on your local machine, make sure to install the necessary components in your Kubernetes cluster by running ",(0,t.jsx)(a.code,{children:"glasskube bootstrap"}),".\r\nFor more information, check out our ",(0,t.jsx)(a.a,{href:"/docs/getting-started/bootstrap",children:"bootstrap guide"}),"."]})]})}function u(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}},7227:(e,a,s)=>{s.d(a,{A:()=>l});s(6540);var t=s(4164);const n={tabItem:"tabItem_Ymn6"};var r=s(4848);function l(e){let{children:a,hidden:s,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.A)(n.tabItem,l),hidden:s,children:a})}},9489:(e,a,s)=>{s.d(a,{A:()=>y});var t=s(6540),n=s(4164),r=s(4245),l=s(6347),o=s(6494),i=s(2814),u=s(5167),c=s(9900);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:a,children:s}=e;return(0,t.useMemo)((()=>{const e=a??function(e){return d(e).map((e=>{let{props:{value:a,label:s,attributes:t,default:n}}=e;return{value:a,label:s,attributes:t,default:n}}))}(s);return function(e){const a=(0,u.XI)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,s])}function p(e){let{value:a,tabValues:s}=e;return s.some((e=>e.value===a))}function g(e){let{queryString:a=!1,groupId:s}=e;const n=(0,l.W6)(),r=function(e){let{queryString:a=!1,groupId:s}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:a,groupId:s});return[(0,i.aZ)(r),(0,t.useCallback)((e=>{if(!r)return;const a=new URLSearchParams(n.location.search);a.set(r,e),n.replace({...n.location,search:a.toString()})}),[r,n])]}function b(e){const{defaultValue:a,queryString:s=!1,groupId:n}=e,r=h(e),[l,i]=(0,t.useState)((()=>function(e){let{defaultValue:a,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!p({value:a,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:a,tabValues:r}))),[u,d]=g({queryString:s,groupId:n}),[b,m]=function(e){let{groupId:a}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,r]=(0,c.Dv)(s);return[n,(0,t.useCallback)((e=>{s&&r.set(e)}),[s,r])]}({groupId:n}),k=(()=>{const e=u??b;return p({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{k&&i(k)}),[k]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),m(e)}),[d,m,r]),tabValues:r}}var m=s(1062);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=s(4848);function x(e){let{className:a,block:s,selectedValue:t,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.a_)(),c=e=>{const a=e.currentTarget,s=i.indexOf(a),n=o[s].value;n!==t&&(u(a),l(n))},d=e=>{let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const s=i.indexOf(e.currentTarget)+1;a=i[s]??i[0];break}case"ArrowLeft":{const s=i.indexOf(e.currentTarget)-1;a=i[s]??i[i.length-1];break}}a?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":s},a),children:o.map((e=>{let{value:a,label:s,attributes:r}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:t===a?0:-1,"aria-selected":t===a,ref:e=>i.push(e),onKeyDown:d,onClick:c,...r,className:(0,n.A)("tabs__item",k.tabItem,r?.className,{"tabs__item--active":t===a}),children:s??a},a)}))})}function v(e){let{lazy:a,children:s,selectedValue:r}=e;const l=(Array.isArray(s)?s:[s]).filter(Boolean);if(a){const e=l.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:l.map(((e,a)=>(0,t.cloneElement)(e,{key:a,hidden:e.props.value!==r})))})}function j(e){const a=b(e);return(0,f.jsxs)("div",{className:(0,n.A)("tabs-container",k.tabList),children:[(0,f.jsx)(x,{...a,...e}),(0,f.jsx)(v,{...a,...e})]})}function y(e){const a=(0,m.A)();return(0,f.jsx)(j,{...e,children:d(e.children)},String(a))}},8453:(e,a,s)=>{s.d(a,{R:()=>l,x:()=>o});var t=s(6540);const n={},r=t.createContext(n);function l(e){const a=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),t.createElement(r.Provider,{value:a},e.children)}}}]);