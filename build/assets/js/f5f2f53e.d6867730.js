"use strict";(self.webpackChunkglasskube_docs=self.webpackChunkglasskube_docs||[]).push([[5323],{1802:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>h,contentTitle:()=>u,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>g});var s=r(4848),a=r(8453),t=r(9489),i=r(7227),l=r(7738),c=r(2701);const o={title:"Install cert-manager",slug:"cert-manager",description:"Install cert-manager for Kubernetes with Glasskube package manager including a GUI, CLI and automatic package updates",authors:["pmig"],tags:["cert-manager"]},u="Install cert-manager for Kubernetes",d={id:"cert-manager",title:"Install cert-manager",description:"Install cert-manager for Kubernetes with Glasskube package manager including a GUI, CLI and automatic package updates",source:"@site/guides/01_cert-manager.mdx",sourceDirName:".",slug:"/cert-manager",permalink:"/guides/cert-manager",draft:!1,unlisted:!1,tags:[{inline:!0,label:"cert-manager",permalink:"/guides/tags/cert-manager"}],version:"current",lastUpdatedBy:"RobertPrikryl",lastUpdatedAt:1728147151e3,sidebarPosition:1,frontMatter:{title:"Install cert-manager",slug:"cert-manager",description:"Install cert-manager for Kubernetes with Glasskube package manager including a GUI, CLI and automatic package updates",authors:["pmig"],tags:["cert-manager"]},sidebar:"guides",previous:{title:"Package Installation Guides",permalink:"/guides/categories/"},next:{title:"Install ingress-nginx",permalink:"/guides/ingress-nginx"}},h={},g=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"About cert-manager",id:"about-cert-manager",level:2},{value:"Installation",id:"installation",level:2},{value:"Install Glasskube",id:"install-glasskube",level:3},...l.RM,{value:"Install cert-manager",id:"install-cert-manager",level:3},{value:"Configuring cert-manager",id:"configuring-cert-manager",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"install-cert-manager-for-kubernetes",children:"Install cert-manager for Kubernetes"})}),"\n",(0,s.jsxs)(n.p,{children:["Learn how to install ",(0,s.jsx)(n.a,{href:"https://cert-manager.io/",children:"cert-manager"})," using the ",(0,s.jsx)(n.a,{href:"https://github.com/glasskube/glasskube",children:(0,s.jsx)(n.code,{children:"glasskube"})})," package manager."]}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Kubernetes cluster (You can easily create a local cluster by using ",(0,s.jsx)(n.a,{href:"https://minikube.sigs.k8s.io/docs/start/",children:"Minikube"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/tools/",children:(0,s.jsx)(n.code,{children:"kubectl"})})," is strictly speaking no ",(0,s.jsx)(n.em,{children:"dependency"})," for installing packages via glasskube,\r\nbut it is the recommended way to interact with the cluster. Therefore, it is highly recommended.\r\nInstallation instructions are available for\r\n",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/tools/install-kubectl-macos/",children:"macOS"}),",\r\n",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/",children:"Linux"}),"\r\nand ",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/tools/install-kubectl-windows/",children:"Windows"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"about-cert-manager",children:"About cert-manager"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.mermaid,{value:"flowchart LR\r\n\r\n  cert-manager(((cert-manager))) <--\x3e Issuers\r\n  cert-manager <--\x3e Certificates\r\n\r\n  subgraph Issuers [Issuers can be created via custom resources]\r\n  letsencrypt-staging\r\n  letsencrypt-prod\r\n  end\r\n\r\n  subgraph Certificates\r\n  foo.bar.com --\x3e keypair1[signed keypair]\r\n  example.com --\x3e keypair2[signed keypair]\r\n  end"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsx)(n.p,{children:"Cert-Manager is a widely used tool for managing certificates, specifically made for Kubernetes.\r\nIt simplifies the process of getting, renewing, and using SSL/TLS certificates.\r\nCert-Manager can interact with different certificate authorities (Issuer) such as Let's Encrypt,\r\nand it can automatically issue valid certificates.\r\nAdditionally, it can handle the automatic renewal of certificates before they expire."}),(0,s.jsx)(n.p,{children:"These certificates can then be used by various applications like ingress controllers or deployments."})]}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(n.p,{children:"Installing cert-manager can easily be achieved with the Glasskube package manager."}),"\n",(0,s.jsx)(n.h3,{id:"install-glasskube",children:"Install Glasskube"}),"\n",(0,s.jsxs)(n.p,{children:["If you already installed ",(0,s.jsx)(n.code,{children:"glasskube"})," you can skip this step.\r\nIf not, ",(0,s.jsx)(n.code,{children:"glasskube"})," can easily be installed the way you usually install packages for your operating system."]}),"\n",(0,s.jsx)(l.Ay,{}),"\n",(0,s.jsx)(n.h3,{id:"install-cert-manager",children:"Install cert-manager"}),"\n",(0,s.jsxs)(t.A,{groupId:"interface",children:[(0,s.jsxs)(i.A,{value:"gui",label:"GUI \ud83d\udda5\ufe0f",children:[(0,s.jsx)(n.p,{children:"Start the UI via the command line:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"glasskube serve\n"})}),(0,s.jsx)(n.p,{children:"Install cert-manager via the Glasskube UI."})]}),(0,s.jsxs)(i.A,{value:"cli",label:"CLI \ud83e\uddd1\u200d\ud83d\udcbb",children:[(0,s.jsx)(n.p,{children:"A package can be installed with a simple command."}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"glasskube install cert-manager\n"})}),(0,s.jsx)(n.p,{children:"The process will wait until the package got successfully installed."})]})]}),"\n",(0,s.jsx)(n.h2,{id:"configuring-cert-manager",children:"Configuring cert-manager"}),"\n",(0,s.jsxs)(n.p,{children:["Before cert-manager can issue certificates an ",(0,s.jsx)(n.code,{children:"Issuer"})," or (",(0,s.jsx)(n.code,{children:"ClusterIssuer"}),") needs to be created so cert-manager knows which\r\ncertificate authority (CA) should sign the public key of the certificate."]}),"\n",(0,s.jsxs)(n.p,{children:["In this example we showcase the use of the production acme server.\r\nFore testing purposes letsencrypt recommend the ",(0,s.jsx)(n.a,{href:"https://letsencrypt.org/docs/staging-environment/",children:"staging environment"}),"\r\nwhich has higher rate limits, than the production server."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",metastring:'title="cluster-issuer.yaml"',children:"apiVersion: cert-manager.io/v1\r\nkind: ClusterIssuer\r\nmetadata:\r\n  name: letsencrypt\r\n  namespace: cert-manager\r\nspec:\r\n  acme:\r\n    server: https://acme-v02.api.letsencrypt.org/directory\r\n    email: you@yourcorp.com # you will receive expiration warnings via this email\r\n    privateKeySecretRef:\r\n      name: letsencrypt\r\n    solvers:\r\n      - http01:\r\n          ingress:\r\n            class: nginx # requires ingress-nginx controller\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"ClusterIssuer"})," must be created as a Kubernetes custom resource. This can easily be achieved via ",(0,s.jsx)(n.code,{children:"kubectl apply"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"kubectl apply -f cluster-issuer.yaml\n"})}),"\n",(0,s.jsxs)(n.p,{children:["cert-manager creates an Ingress to validate the ACME challenge, if no Ingress controller is already installed in\r\nthe cluster the ",(0,s.jsx)(n.a,{href:"/guides/ingress-nginx",children:"ingress-nginx controller"})," can easily be installed with Glasskube."]}),"\n",(0,s.jsx)(n.p,{children:"Further links about cert-manager:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["cert-manager docs: ",(0,s.jsx)(n.a,{href:"https://cert-manager.io/docs/",children:"https://cert-manager.io/docs/"})]}),"\n",(0,s.jsxs)(n.li,{children:["Issuer configuration: ",(0,s.jsx)(n.a,{href:"https://cert-manager.io/docs/configuration/",children:"https://cert-manager.io/docs/configuration/"})]}),"\n",(0,s.jsxs)(n.li,{children:["Issuer list: ",(0,s.jsx)(n.a,{href:"https://cert-manager.io/docs/configuration/issuers/",children:"https://cert-manager.io/docs/configuration/issuers/"})]}),"\n"]}),"\n",(0,s.jsx)(c.Ay,{category:"Guides",categoryId:"DIC_kwDOLDumD84CfK3R"})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},7738:(e,n,r)=>{r.d(n,{Ay:()=>o,RM:()=>l});var s=r(4848),a=r(8453),t=r(9489),i=r(7227);const l=[];function c(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,a.R)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.A,{groupId:"operating-systems",children:[(0,s.jsxs)(i.A,{value:"mac",label:"macOS",children:[(0,s.jsxs)(n.p,{children:["On macOS, you can use ",(0,s.jsx)(n.a,{href:"https://brew.sh/",children:"Homebrew"})," to install and update Glasskube."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"brew install glasskube/tap/glasskube\n"})})]}),(0,s.jsxs)(i.A,{value:"linux",label:"Linux",children:[(0,s.jsx)(n.p,{children:"You can install Glasskube using one of the package managers below."}),(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"RPM-based installation (RedHat/CentOS/Fedora)"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"dnf install https://releases.dl.glasskube.dev/glasskube_v0.24.0_amd64.rpm\n"})})]}),(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"DEB-based installation (Ubuntu/Debian)"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"curl -LO https://releases.dl.glasskube.dev/glasskube_v0.24.0_amd64.deb\r\nsudo dpkg -i glasskube_v0.24.0_amd64.deb\n"})})]}),(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:"APK-based installation (Alpine)"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"curl -LO https://releases.dl.glasskube.dev/glasskube_v0.24.0_amd64.apk\r\napk add --allow-untrusted glasskube_v0.24.0_amd64.apk\n"})})]}),(0,s.jsxs)(n.p,{children:["If you are using a distribution that does not use one of the package managers above, or require a 32-bit binary,\r\ncheck out additional download options attached to our ",(0,s.jsx)(n.a,{href:"https://github.com/glasskube/glasskube/releases/latest",children:"latest release"}),"."]})]}),(0,s.jsx)(i.A,{value:"win",label:"Windows",children:(0,s.jsxs)(n.p,{children:["Download the ",(0,s.jsx)(n.a,{href:"https://releases.dl.glasskube.dev/glasskube_v0.24.0_windows_x86_64.zip",children:"windows archive"})," from our\r\nlatest ",(0,s.jsx)(n.a,{href:"https://github.com/glasskube/glasskube/releases/latest",children:"Release"})," and unpack it using Windows Explorer."]})}),(0,s.jsxs)(i.A,{value:"nixos",label:"NixOS/Nixpkgs",children:[(0,s.jsxs)(n.p,{children:["You can either use the package temporarily in a ",(0,s.jsx)("b",{children:"nix-shell"}),":"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"nix-shell -p glasskube\n"})}),(0,s.jsxs)(n.p,{children:["Or install it globally by adding ",(0,s.jsx)(n.code,{children:"pkgs.glasskube"})," to your ",(0,s.jsx)(n.code,{children:"environment.systemPackages"}),"."]})]})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.p,{children:["After installing Glasskube on your local machine, make sure to install the necessary components in your Kubernetes cluster by running ",(0,s.jsx)(n.code,{children:"glasskube bootstrap"}),".\r\nFor more information, check out our ",(0,s.jsx)(n.a,{href:"/docs/getting-started/bootstrap",children:"bootstrap guide"}),"."]})]})}function o(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},7227:(e,n,r)=>{r.d(n,{A:()=>i});r(6540);var s=r(4164);const a={tabItem:"tabItem_Ymn6"};var t=r(4848);function i(e){let{children:n,hidden:r,className:i}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,s.A)(a.tabItem,i),hidden:r,children:n})}},9489:(e,n,r)=>{r.d(n,{A:()=>v});var s=r(6540),a=r(4164),t=r(4245),i=r(6347),l=r(6494),c=r(2814),o=r(5167),u=r(9900);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:s,default:a}}=e;return{value:n,label:r,attributes:s,default:a}}))}(r);return function(e){const n=(0,o.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function g(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:r}=e;const a=(0,i.W6)(),t=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,c.aZ)(t),(0,s.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(a.location.search);n.set(t,e),a.replace({...a.location,search:n.toString()})}),[t,a])]}function m(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,t=h(e),[i,c]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:t}))),[o,d]=p({queryString:r,groupId:a}),[m,b]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,t]=(0,u.Dv)(r);return[a,(0,s.useCallback)((e=>{r&&t.set(e)}),[r,t])]}({groupId:a}),f=(()=>{const e=o??m;return g({value:e,tabValues:t})?e:null})();(0,l.A)((()=>{f&&c(f)}),[f]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!g({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),b(e)}),[d,b,t]),tabValues:t}}var b=r(1062);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(4848);function j(e){let{className:n,block:r,selectedValue:s,selectValue:i,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,t.a_)(),u=e=>{const n=e.currentTarget,r=c.indexOf(n),a=l[r].value;a!==s&&(o(n),i(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;n=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;n=c[r]??c[c.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:t}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>c.push(e),onKeyDown:d,onClick:u,...t,className:(0,a.A)("tabs__item",f.tabItem,t?.className,{"tabs__item--active":s===n}),children:r??n},n)}))})}function k(e){let{lazy:n,children:r,selectedValue:t}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===t));return e?(0,s.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function y(e){const n=m(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",f.tabList),children:[(0,x.jsx)(j,{...n,...e}),(0,x.jsx)(k,{...n,...e})]})}function v(e){const n=(0,b.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(n))}},2701:(e,n,r)=>{r.d(n,{t2:()=>c,Ay:()=>l});var s=r(6540),a=r(4848);function t({id:e,host:n,repo:t,repoId:i,category:l,categoryId:c,mapping:o,term:u,strict:d,reactionsEnabled:h,emitMetadata:g,inputPosition:p,theme:m,lang:b,loading:f}){const[x,j]=(0,s.useState)(!1);return(0,s.useEffect)((()=>{x||(r.e(1135).then(r.bind(r,1135)),j(!0))}),[]),x?(0,a.jsx)("giscus-widget",{id:e,host:n,repo:t,repoid:i,category:l,categoryid:c,mapping:o,term:u,strict:d,reactionsenabled:h,emitmetadata:g,inputposition:p,theme:m,lang:b,loading:f}):null}var i=r(7710);function l(e){let{category:n,categoryId:r}=e;const{colorMode:l}=(0,i.G)(),c=e=>{if("https://giscus.app"!==e.origin)return;if("object"!=typeof e.data||!e.data.giscus)return;const n=e.data.giscus;if(n.discussion&&n.viewer){const e=n.viewer.login;if(e.includes("giscus")&&e.includes("bot"))return;const r=n.viewer.url;window.posthog&&window.posthog.setPersonProperties({github_url:r})}};return(0,s.useEffect)((()=>(window.addEventListener("message",c),()=>{window.removeEventListener("message",c)})),[]),(0,a.jsx)(t,{repo:"glasskube/glasskube",repoId:"R_kgDOLDumDw",category:n,categoryId:r,mapping:"title",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",theme:l,lang:"en",loading:"lazy"})}function c(){return(0,a.jsx)(l,{category:"Blog",categoryId:"DIC_kwDOLDumD84CfCte"})}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>l});var s=r(6540);const a={},t=s.createContext(a);function i(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);