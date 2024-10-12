"use strict";(self.webpackChunkglasskube_docs=self.webpackChunkglasskube_docs||[]).push([[3771],{7712:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var s=a(4848),n=a(8453);a(4401),a(7738),a(9489),a(7227);const r={slug:"future-of-devops",title:"Why nobody grows up wanting to be a DevOps engineer",description:"How did DevOps start, what were it's initial promises and where are we going?",image:"https://github.com/glasskube/glasskube/assets/38757612/54324401-9b0f-4faf-a7c1-beea346057de",authors:["jpage"],tags:["glasskube"]},l=void 0,o={permalink:"/TP2024-T5/blog/future-of-devops",source:"@site/blog/2024-05-20-devops/index.mdx",title:"Why nobody grows up wanting to be a DevOps engineer",description:"How did DevOps start, what were it's initial promises and where are we going?",date:"2024-05-20T00:00:00.000Z",tags:[{inline:!0,label:"glasskube",permalink:"/TP2024-T5/blog/tags/glasskube"}],readingTime:12.09,hasTruncateMarker:!0,authors:[{name:"Jake Page",title:"Developer Relations Engineer",url:"https://github.com/jakepage91",imageURL:"https://avatars.githubusercontent.com/jakepage91",key:"jpage",page:null}],frontMatter:{slug:"future-of-devops",title:"Why nobody grows up wanting to be a DevOps engineer",description:"How did DevOps start, what were it's initial promises and where are we going?",image:"https://github.com/glasskube/glasskube/assets/38757612/54324401-9b0f-4faf-a7c1-beea346057de",authors:["jpage"],tags:["glasskube"]},unlisted:!1,prevItem:{title:"Log and trace management made easy. Quickwit Integration via Glasskube",permalink:"/TP2024-T5/blog/quickwit"},nextItem:{title:"Glasskube Beta is live.",permalink:"/TP2024-T5/blog/beta-launch"}},i={authorsImageUrls:[void 0]},u=[];function c(e){const t={a:"a",img:"img",p:"p",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://github.com/glasskube/glasskube/assets/38757612/54324401-9b0f-4faf-a7c1-beea346057de",alt:"article-thumbnail"})}),"\n",(0,s.jsxs)(t.p,{children:["When I look at younger generations that didn\u2019t grow up largely offline like I did, I feel slightly sorry for them. I\u2019m in my mid-thirties, so I know what it was like to grow up tapping into ",(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Dial-up_Internet_access",children:"dial-up"})," internet as quickly as possible (to avoid blocking the phone line for too long) to access a couple of Wikipedia pages to do my homework and not feel like anything was missing. By personally living through the ascendence of the personal computer we all have in our pockets I feel, not immune, but better equipped to use it to my advantage and not fall victim to its false promises of limitless bliss and fulfillment simply for being more \u201c",(0,s.jsx)(t.a,{href:"https://www.newyorker.com/news/the-new-yorker-interview/jonathan-haidt-wants-you-to-take-away-your-kids-phone",children:"connected"}),"\u201d."]})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},7738:(e,t,a)=>{a.d(t,{Ay:()=>u,RM:()=>o});var s=a(4848),n=a(8453),r=a(9489),l=a(7227);const o=[];function i(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,n.R)(),...e.components},{Details:a}=t;return a||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.A,{groupId:"operating-systems",children:[(0,s.jsxs)(l.A,{value:"mac",label:"macOS",children:[(0,s.jsxs)(t.p,{children:["On macOS, you can use ",(0,s.jsx)(t.a,{href:"https://brew.sh/",children:"Homebrew"})," to install and update Glasskube."]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"brew install glasskube/tap/glasskube\n"})})]}),(0,s.jsxs)(l.A,{value:"linux",label:"Linux",children:[(0,s.jsx)(t.p,{children:"You can install Glasskube using one of the package managers below."}),(0,s.jsxs)(a,{children:[(0,s.jsx)("summary",{children:"RPM-based installation (RedHat/CentOS/Fedora)"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"dnf install https://releases.dl.glasskube.dev/glasskube_v0.24.0_amd64.rpm\n"})})]}),(0,s.jsxs)(a,{children:[(0,s.jsx)("summary",{children:"DEB-based installation (Ubuntu/Debian)"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"curl -LO https://releases.dl.glasskube.dev/glasskube_v0.24.0_amd64.deb\r\nsudo dpkg -i glasskube_v0.24.0_amd64.deb\n"})})]}),(0,s.jsxs)(a,{children:[(0,s.jsx)("summary",{children:"APK-based installation (Alpine)"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"curl -LO https://releases.dl.glasskube.dev/glasskube_v0.24.0_amd64.apk\r\napk add --allow-untrusted glasskube_v0.24.0_amd64.apk\n"})})]}),(0,s.jsxs)(t.p,{children:["If you are using a distribution that does not use one of the package managers above, or require a 32-bit binary,\r\ncheck out additional download options attached to our ",(0,s.jsx)(t.a,{href:"https://github.com/glasskube/glasskube/releases/latest",children:"latest release"}),"."]})]}),(0,s.jsx)(l.A,{value:"win",label:"Windows",children:(0,s.jsxs)(t.p,{children:["Download the ",(0,s.jsx)(t.a,{href:"https://releases.dl.glasskube.dev/glasskube_v0.24.0_windows_x86_64.zip",children:"windows archive"})," from our\r\nlatest ",(0,s.jsx)(t.a,{href:"https://github.com/glasskube/glasskube/releases/latest",children:"Release"})," and unpack it using Windows Explorer."]})}),(0,s.jsxs)(l.A,{value:"nixos",label:"NixOS/Nixpkgs",children:[(0,s.jsxs)(t.p,{children:["You can either use the package temporarily in a ",(0,s.jsx)("b",{children:"nix-shell"}),":"]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"nix-shell -p glasskube\n"})}),(0,s.jsxs)(t.p,{children:["Or install it globally by adding ",(0,s.jsx)(t.code,{children:"pkgs.glasskube"})," to your ",(0,s.jsx)(t.code,{children:"environment.systemPackages"}),"."]})]})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(t.p,{children:["After installing Glasskube on your local machine, make sure to install the necessary components in your Kubernetes cluster by running ",(0,s.jsx)(t.code,{children:"glasskube bootstrap"}),".\r\nFor more information, check out our ",(0,s.jsx)(t.a,{href:"/docs/getting-started/bootstrap",children:"bootstrap guide"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},7227:(e,t,a)=>{a.d(t,{A:()=>l});a(6540);var s=a(4164);const n={tabItem:"tabItem_Ymn6"};var r=a(4848);function l(e){let{children:t,hidden:a,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)(n.tabItem,l),hidden:a,children:t})}},9489:(e,t,a)=>{a.d(t,{A:()=>j});var s=a(6540),n=a(4164),r=a(4245),l=a(6347),o=a(6494),i=a(2814),u=a(5167),c=a(9900);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:a}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:s,default:n}}=e;return{value:t,label:a,attributes:s,default:n}}))}(a);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.W6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i.aZ)(r),(0,s.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=h(e),[l,i]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=a.find((e=>e.default))??a[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:r}))),[u,d]=b({queryString:a,groupId:n}),[g,m]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,c.Dv)(a);return[n,(0,s.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),f=(()=>{const e=u??g;return p({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),m(e)}),[d,m,r]),tabValues:r}}var m=a(1062);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var k=a(4848);function v(e){let{className:t,block:a,selectedValue:s,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.a_)(),c=e=>{const t=e.currentTarget,a=i.indexOf(t),n=o[a].value;n!==s&&(u(t),l(n))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;t=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;t=i[a]??i[i.length-1];break}}t?.focus()};return(0,k.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":a},t),children:o.map((e=>{let{value:t,label:a,attributes:r}=e;return(0,k.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...r,className:(0,n.A)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":s===t}),children:a??t},t)}))})}function w(e){let{lazy:t,children:a,selectedValue:r}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,k.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function x(e){const t=g(e);return(0,k.jsxs)("div",{className:(0,n.A)("tabs-container",f.tabList),children:[(0,k.jsx)(v,{...t,...e}),(0,k.jsx)(w,{...t,...e})]})}function j(e){const t=(0,m.A)();return(0,k.jsx)(x,{...e,children:d(e.children)},String(t))}},4401:(e,t,a)=>{a.d(t,{A:()=>r});a(6540);var s=a(72),n=a(4848);const r=e=>{let{href:t,...a}=e;return(0,n.jsx)(s.A,{href:t,"data-color-scheme":"no-preference: light; light: light; dark: light;","data-icon":"octicon-star","data-size":"large","data-show-count":"true","aria-label":`Star ${t} on GitHub`,...a,children:"Star"})}}}]);