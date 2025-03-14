"use strict";(self.webpackChunkglasskube_docs=self.webpackChunkglasskube_docs||[]).push([[7198],{37533:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>g,contentTitle:()=>u,default:()=>b,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var t=s(74848),r=s(28453),a=s(49489),i=s(7227),l=s(15357),o=s(51852);const c={title:"Install ingress-nginx",slug:"ingress-nginx",description:"Install ingress-nginx for Kubernetes with Glasskube package manager including a GUI, CLI and automatic package updates",authors:["pmig"],tags:["ingress-nginx"]},u="Install ingress-nginx for Kubernetes",d={id:"ingress-nginx",title:"Install ingress-nginx",description:"Install ingress-nginx for Kubernetes with Glasskube package manager including a GUI, CLI and automatic package updates",source:"@site/guides/02_ingress-nginx.mdx",sourceDirName:".",slug:"/ingress-nginx",permalink:"/TP2024-T5/guides/ingress-nginx",draft:!1,unlisted:!1,tags:[{inline:!0,label:"ingress-nginx",permalink:"/TP2024-T5/guides/tags/ingress-nginx"}],version:"current",lastUpdatedBy:"RobertPrikryl",lastUpdatedAt:1728147151e3,sidebarPosition:2,frontMatter:{title:"Install ingress-nginx",slug:"ingress-nginx",description:"Install ingress-nginx for Kubernetes with Glasskube package manager including a GUI, CLI and automatic package updates",authors:["pmig"],tags:["ingress-nginx"]},sidebar:"guides",previous:{title:"Install cert-manager",permalink:"/TP2024-T5/guides/cert-manager"},next:{title:"RabbitMQ on Kubernetes",permalink:"/TP2024-T5/guides/rabbitmq"}},g={},h=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"About ingress-nginx",id:"about-ingress-nginx",level:2},{value:"Installation",id:"installation",level:2},{value:"Install Glasskube",id:"install-glasskube",level:3},...l.RM,{value:"Install ingress-nginx",id:"install-ingress-nginx",level:3},{value:"Using ingress-nginx",id:"using-ingress-nginx",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"install-ingress-nginx-for-kubernetes",children:"Install ingress-nginx for Kubernetes"})}),"\n",(0,t.jsxs)(n.p,{children:["Learn how to install ",(0,t.jsx)(n.a,{href:"https://kubernetes.github.io/ingress-nginx/",children:"ingress-nginx"})," using the ",(0,t.jsx)(n.a,{href:"https://github.com/glasskube/glasskube",children:(0,t.jsx)(n.code,{children:"glasskube"})})," package manager."]}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Kubernetes cluster (You can easily create a local cluster by using ",(0,t.jsx)(n.a,{href:"https://minikube.sigs.k8s.io/docs/start/",children:"Minikube"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/tools/",children:(0,t.jsx)(n.code,{children:"kubectl"})})," is ",(0,t.jsx)(n.em,{children:"not"})," a dependency for installing packages via glasskube,\nbut it is the recommended way to interact with the cluster. We therefore recommend you install it regardless.\nInstallation instructions are available for\n",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/tools/install-kubectl-macos/",children:"macOS"}),",\n",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/",children:"Linux"}),"\nand ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/tools/install-kubectl-windows/",children:"Windows"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Additionally, because ingress-nginx works by running a NGINX in the cluster and exposing it via a LoadBalancer Service, which is handled by a different controller that is usually provisioned by your cloud provider.\nIf you run into issues installing ingress-nginx, please consult your cloud provider's documentation to learn how to create external load balancers for your cluster."}),"\n",(0,t.jsx)(n.h2,{id:"about-ingress-nginx",children:"About ingress-nginx"}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.mermaid,{value:"flowchart TB\n  elb[External load balancer]\n\n  Request --\x3e elb\n  elb -- forwards --\x3e lbs\n  lbc -- provisions --\x3e elb\n\n  subgraph Cluster\n  lbs[LoadBalancer service]\n  lbc[Load balancer controller]\n  inc[ingress-nginx controller]\n\n  lbc --\x3e lbs\n  lbs -- forwards request --\x3e inc\n  inc -- forwards request --\x3e svc1\n  inc <-- applies rules --\x3e ing1\n  inc -- forwards --\x3e svc2\n  inc <-- applies rules --\x3e ing2\n\n  subgraph ns1[App]\n  svc1[Service]\n  ing1[Ingress]\n  ing1 -- references --\x3e svc1\n  end\n\n  subgraph ns2[Another app]\n  svc2[Service]\n  ing2[Ingress]\n  ing2 -- references --\x3e svc2\n  end\n  end"}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["ingress-nginx is an Ingress controller for Kubernetes using ",(0,t.jsx)(n.a,{href:"https://nginx.org/",children:"NGINX"})," as a reverse proxy and load balancer."]})}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(n.p,{children:"Installing ingress-nginx can easily be achieved with the Glasskube package manager."}),"\n",(0,t.jsx)(n.h3,{id:"install-glasskube",children:"Install Glasskube"}),"\n",(0,t.jsxs)(n.p,{children:["If you already installed ",(0,t.jsx)(n.code,{children:"glasskube"})," you can skip this step.\nIf not, ",(0,t.jsx)(n.code,{children:"glasskube"})," can easily be installed the way you usually install packages for your operating system."]}),"\n",(0,t.jsx)(l.Ay,{}),"\n",(0,t.jsx)(n.h3,{id:"install-ingress-nginx",children:"Install ingress-nginx"}),"\n",(0,t.jsxs)(a.A,{groupId:"interface",children:[(0,t.jsxs)(i.A,{value:"gui",label:"GUI \ud83d\udda5\ufe0f",children:[(0,t.jsx)(n.p,{children:"Start the UI via the command line:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"glasskube serve\n"})}),(0,t.jsx)(n.p,{children:"Install ingress-nginx via the Glasskube UI."})]}),(0,t.jsxs)(i.A,{value:"cli",label:"CLI \ud83e\uddd1\u200d\ud83d\udcbb",children:[(0,t.jsx)(n.p,{children:"A package can be installed with a simple command."}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"glasskube install ingress-nginx\n"})}),(0,t.jsx)(n.p,{children:"The process will wait until the package got successfully installed."})]})]}),"\n",(0,t.jsx)(n.h2,{id:"using-ingress-nginx",children:"Using ingress-nginx"}),"\n",(0,t.jsxs)(n.p,{children:["You can start using ingress-nginx straight away by creating an Ingress resource.\nAn Ingress is a specification that tells the ingress controller, in our case ingress-nginx, where to route a set of hosts and paths.\nTo learn more about creating Ingress resources, check out the ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/services-networking/ingress/",children:"official documentation"}),".\nHere is an example Ingress:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title="ingress.yaml"apiVersion: networking.k8s.io/v1',children:"kind: Ingress\nmetadata:\n  name: your-app\n  namespace: default\n  annotations:\n    cert-manager.io/cluster-issuer: letsencrypt\nspec:\n  ingressClassName: nginx\n  rules:\n    - host: app.your-company.com\n      http:\n        paths:\n          - pathType: Prefix\n            path: /\n            backend:\n              service:\n                name: your-app\n                port:\n                  name: http\n  tls:\n    - hosts:\n        - app.your-company.com\n      secretName: your-app-tls\n"})}),"\n",(0,t.jsxs)(n.p,{children:['This Ingress tells the controller that all traffic to the domain "app.your-company.com" with a path prefix of "/" should be routed to a Service in the same namespace named "your-app".\nWith the addition of a ',(0,t.jsx)(n.code,{children:"cert-manager.io/cluster-issuer"})," annotation and ",(0,t.jsx)(n.code,{children:"tls"})," block, it also instructs ",(0,t.jsx)(n.a,{href:"https://cert-manager.io/",children:"cert-manager"})," to issue a certificate for this domain name.\nTo learn more about cert-manager, check out ",(0,t.jsx)(n.a,{href:"/TP2024-T5/guides/cert-manager",children:"our guide on how to install cert-manager using Glasskube"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Further links about ingress-nginx:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Ingress-nginx documentation: ",(0,t.jsx)(n.a,{href:"https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/",children:"https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/"})]}),"\n",(0,t.jsxs)(n.li,{children:["Ingress configuration: ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/services-networking/ingress/",children:"https://kubernetes.io/docs/concepts/services-networking/ingress/"})]}),"\n",(0,t.jsxs)(n.li,{children:["Ingress controllers: ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/",children:"https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/"})]}),"\n"]}),"\n",(0,t.jsx)(o.Ay,{category:"Guides",categoryId:"DIC_kwDOLDumD84CfK3R"})]})}function b(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},15357:(e,n,s)=>{s.d(n,{Ay:()=>c,RM:()=>l});var t=s(74848),r=s(28453),a=s(49489),i=s(7227);const l=[];function o(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.A,{groupId:"operating-systems",children:[(0,t.jsxs)(i.A,{value:"mac",label:"macOS",children:[(0,t.jsxs)(n.p,{children:["On macOS, you can use ",(0,t.jsx)(n.a,{href:"https://brew.sh/",children:"Homebrew"})," to install and update Glasskube."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"brew install glasskube/tap/glasskube\n"})})]}),(0,t.jsxs)(i.A,{value:"linux",label:"Linux",children:[(0,t.jsx)(n.p,{children:"You can install Glasskube using one of the package managers below."}),(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"RPM-based installation (RedHat/CentOS/Fedora)"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"dnf install https://releases.dl.glasskube.dev/glasskube_v0.24.0_amd64.rpm\n"})})]}),(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"DEB-based installation (Ubuntu/Debian)"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"curl -LO https://releases.dl.glasskube.dev/glasskube_v0.24.0_amd64.deb\nsudo dpkg -i glasskube_v0.24.0_amd64.deb\n"})})]}),(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"APK-based installation (Alpine)"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"curl -LO https://releases.dl.glasskube.dev/glasskube_v0.24.0_amd64.apk\napk add --allow-untrusted glasskube_v0.24.0_amd64.apk\n"})})]}),(0,t.jsxs)(n.p,{children:["If you are using a distribution that does not use one of the package managers above, or require a 32-bit binary,\ncheck out additional download options attached to our ",(0,t.jsx)(n.a,{href:"https://github.com/glasskube/glasskube/releases/latest",children:"latest release"}),"."]})]}),(0,t.jsx)(i.A,{value:"win",label:"Windows",children:(0,t.jsxs)(n.p,{children:["Download the ",(0,t.jsx)(n.a,{href:"https://releases.dl.glasskube.dev/glasskube_v0.24.0_windows_x86_64.zip",children:"windows archive"})," from our\nlatest ",(0,t.jsx)(n.a,{href:"https://github.com/glasskube/glasskube/releases/latest",children:"Release"})," and unpack it using Windows Explorer."]})}),(0,t.jsxs)(i.A,{value:"nixos",label:"NixOS/Nixpkgs",children:[(0,t.jsxs)(n.p,{children:["You can either use the package temporarily in a ",(0,t.jsx)("b",{children:"nix-shell"}),":"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"nix-shell -p glasskube\n"})}),(0,t.jsxs)(n.p,{children:["Or install it globally by adding ",(0,t.jsx)(n.code,{children:"pkgs.glasskube"})," to your ",(0,t.jsx)(n.code,{children:"environment.systemPackages"}),"."]})]})]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(n.p,{children:["After installing Glasskube on your local machine, make sure to install the necessary components in your Kubernetes cluster by running ",(0,t.jsx)(n.code,{children:"glasskube bootstrap"}),".\nFor more information, check out our ",(0,t.jsx)(n.a,{href:"/docs/getting-started/bootstrap",children:"bootstrap guide"}),"."]})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},7227:(e,n,s)=>{s.d(n,{A:()=>i});s(96540);var t=s(34164);const r={tabItem:"tabItem_Ymn6"};var a=s(74848);function i(e){let{children:n,hidden:s,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,i),hidden:s,children:n})}},49489:(e,n,s)=>{s.d(n,{A:()=>y});var t=s(96540),r=s(34164),a=s(24245),i=s(56347),l=s(36494),o=s(62814),c=s(45167),u=s(69900);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function g(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:s,attributes:t,default:r}}=e;return{value:n,label:s,attributes:t,default:r}}))}(s);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function h(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:s}=e;const r=(0,i.W6)(),a=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,o.aZ)(a),(0,t.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function b(e){const{defaultValue:n,queryString:s=!1,groupId:r}=e,a=g(e),[i,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:a}))),[c,d]=p({queryString:s,groupId:r}),[b,x]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,u.Dv)(s);return[r,(0,t.useCallback)((e=>{s&&a.set(e)}),[s,a])]}({groupId:r}),m=(()=>{const e=c??b;return h({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{m&&o(m)}),[m]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),x(e)}),[d,x,a]),tabValues:a}}var x=s(11062);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=s(74848);function k(e){let{className:n,block:s,selectedValue:t,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const n=e.currentTarget,s=o.indexOf(n),r=l[s].value;r!==t&&(c(n),i(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const s=o.indexOf(e.currentTarget)+1;n=o[s]??o[0];break}case"ArrowLeft":{const s=o.indexOf(e.currentTarget)-1;n=o[s]??o[o.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":s},n),children:l.map((e=>{let{value:n,label:s,attributes:a}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...a,className:(0,r.A)("tabs__item",m.tabItem,a?.className,{"tabs__item--active":t===n}),children:s??n},n)}))})}function j(e){let{lazy:n,children:s,selectedValue:a}=e;const i=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function v(e){const n=b(e);return(0,f.jsxs)("div",{className:(0,r.A)("tabs-container",m.tabList),children:[(0,f.jsx)(k,{...n,...e}),(0,f.jsx)(j,{...n,...e})]})}function y(e){const n=(0,x.A)();return(0,f.jsx)(v,{...e,children:d(e.children)},String(n))}},51852:(e,n,s)=>{s.d(n,{Ay:()=>l,t2:()=>o});var t=s(96540),r=s(12171),a=s(7710),i=s(74848);function l(e){let{category:n,categoryId:s}=e;const{colorMode:l}=(0,a.G)(),o=e=>{if("https://giscus.app"!==e.origin)return;if("object"!=typeof e.data||!e.data.giscus)return;const n=e.data.giscus;if(n.discussion&&n.viewer){const e=n.viewer.login;if(e.includes("giscus")&&e.includes("bot"))return;const s=n.viewer.url;window.posthog&&window.posthog.setPersonProperties({github_url:s})}};return(0,t.useEffect)((()=>(window.addEventListener("message",o),()=>{window.removeEventListener("message",o)})),[]),(0,i.jsx)(r.A,{repo:"glasskube/glasskube",repoId:"R_kgDOLDumDw",category:n,categoryId:s,mapping:"title",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",theme:l,lang:"en",loading:"lazy"})}function o(){return(0,i.jsx)(l,{category:"Blog",categoryId:"DIC_kwDOLDumD84CfCte"})}},12171:(e,n,s)=>{s.d(n,{A:()=>a});var t=s(74848),r=s(96540);function a({id:e,host:n,repo:a,repoId:i,category:l,categoryId:o,mapping:c,term:u,strict:d,reactionsEnabled:g,emitMetadata:h,inputPosition:p,theme:b,lang:x,loading:m}){const[f,k]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{f||(s.e(1135).then(s.bind(s,1135)),k(!0))}),[]),f?(0,t.jsx)("giscus-widget",{id:e,host:n,repo:a,repoid:i,category:l,categoryid:o,mapping:c,term:u,strict:d,reactionsenabled:g,emitmetadata:h,inputposition:p,theme:b,lang:x,loading:m}):null}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>l});var t=s(96540);const r={},a=t.createContext(r);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);