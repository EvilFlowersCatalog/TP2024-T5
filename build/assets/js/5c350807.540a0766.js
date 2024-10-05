"use strict";(self.webpackChunkglasskube_docs=self.webpackChunkglasskube_docs||[]).push([[8324],{7354:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var a=t(4848),n=t(8453),i=t(4401);t(7738),t(9489),t(7227);const r={slug:"quickwit",title:"Log and trace management made easy. Quickwit Integration via Glasskube",description:"A blog post on what Quickwit is and how it can help your data search efforts",authors:["jpage"],tags:["glasskube"],image:"https://github.com/glasskube/glasskube/assets/38757612/03478d89-1d11-4263-93ca-f80d1607cef9"},l=void 0,o={permalink:"/blog/quickwit",source:"@site/blog/2024-07-02-quickwit/index.mdx",title:"Log and trace management made easy. Quickwit Integration via Glasskube",description:"A blog post on what Quickwit is and how it can help your data search efforts",date:"2024-07-02T00:00:00.000Z",tags:[{inline:!0,label:"glasskube",permalink:"/blog/tags/glasskube"}],readingTime:4.9,hasTruncateMarker:!0,authors:[{name:"Jake Page",title:"Developer Relations Engineer",url:"https://github.com/jakepage91",imageURL:"https://avatars.githubusercontent.com/jakepage91",key:"jpage",page:null}],frontMatter:{slug:"quickwit",title:"Log and trace management made easy. Quickwit Integration via Glasskube",description:"A blog post on what Quickwit is and how it can help your data search efforts",authors:["jpage"],tags:["glasskube"],image:"https://github.com/glasskube/glasskube/assets/38757612/03478d89-1d11-4263-93ca-f80d1607cef9"},unlisted:!1,prevItem:{title:"Why integrating an IDP for Series A companies doesn't make\xa0sense",permalink:"/blog/series-a-idp"},nextItem:{title:"Why nobody grows up wanting to be a DevOps engineer",permalink:"/blog/future-of-devops"}},c={authorsImageUrls:[void 0]},u=[{value:"But what is Quickwit exactly? \ud83e\udd37",id:"but-what-is-quickwit-exactly-",level:2},{value:"Questions for the co-founder Fran\xe7ois Massot \ud83d\ude4b",id:"questions-for-the-co-founder-fran\xe7ois-massot-",level:2},{value:"What are the benefits of using external Object Storage as opposed to node attached storage?",id:"what-are-the-benefits-of-using-external-object-storage-as-opposed-to-node-attached-storage",level:3},{value:"Performance Comparison: Is Quickwit Faster than Elasticsearch?",id:"performance-comparison-is-quickwit-faster-than-elasticsearch",level:3},{value:"What&#39;s in store for quickwit in the future?",id:"whats-in-store-for-quickwit-in-the-future",level:3},{value:"Use cases",id:"use-cases",level:2},{value:"Log management \ud83e\udeb5",id:"log-management-",level:3},{value:"Distributed tracing \ud83d\udcca",id:"distributed-tracing-",level:3},{value:"Key features \ud83d\udd11",id:"key-features-",level:2},{value:"Want to install Quickwit via Glasskube?",id:"want-to-install-quickwit-via-glasskube",level:2}];function d(e){const s={a:"a",em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:"https://github.com/glasskube/glasskube/assets/38757612/03478d89-1d11-4263-93ca-f80d1607cef9",alt:"quickwit-thumbnail"})}),"\n",(0,a.jsx)(s.p,{children:"Distributed application troubleshooting can be a nightmare. Unless you have the budget for expensive proprietary monitoring SaaS solutions or the expertise to run and maintain an complex ELK stack you might feel as if you are stuck in a cave without a flashlight."}),"\n",(0,a.jsxs)(s.p,{children:["Luckily, viable open-source alternatives like ",(0,a.jsx)(s.a,{href:"https://quickwit.io/",children:"Quickwit"})," are here to come to the rescue. By weaving together existing tooling for log and trace ingesting as well as pairing well with dashboard and visualisation tools such as Grafana and Jaeger. And sandwiching powerful indexing storage and search capabilities in between. Even if the tool sounds new, it won\u2019t be for long."]}),"\n",(0,a.jsxs)(s.p,{children:["We recently integrated Quickwit with ",(0,a.jsx)(s.a,{href:"https://github.com/glasskube/glasskube",children:"Glasskube"})," and it\u2019s available to be easily deployed to your cluster. I spoke directly with Quickwit co-founder ",(0,a.jsx)(s.a,{href:"https://www.linkedin.com/in/fran%C3%A7ois-massot-473006b/",children:"Fran\xe7ois Massot"})," to get the insider scoop, and to learn how the tool works. Let's dive in!"]}),"\n",(0,a.jsx)(s.h2,{id:"but-what-is-quickwit-exactly-",children:"But what is Quickwit exactly? \ud83e\udd37"}),"\n",(0,a.jsx)(s.p,{children:"Quickwit is a cloud-native search engine that emerged with the goal of creating an open-source alternative to expensive monitoring software like Datadog and Splunk. Along the way, they\u2019ve also developed and open-sourced several components, including ChitChat (cluster membership protocol), mrecordlog (WAL), Whichlang (fast language detection), witty actors (actor framework), and bitpacking (SIMD algorithms for integer compression)."}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/154x37vzjunqayriczlx.png",alt:"quickmit-diagram"})}),"\n",(0,a.jsx)(s.p,{children:"Quickwit, with its robust Elasticsearch-compatible API, integrates well with tooling from the OSS ecosystem, such as Grafana, Jaeger, and OpenTelemetry. Users are successfully deploying Quickwit at scale, with hundreds of nodes and hundreds of terabytes of data ingested daily, all while enjoying significant cost reductions and how thanks to Glasskube to can get up and running in no time."}),"\n",(0,a.jsx)(s.p,{children:"Quickwit excels in handling logs, traces, security data, and append-only datasets, with plans to support metrics soon. A key feature is the usage of object storage for the indexed data, which simplifies cluster management, cuts infrastructure costs, and enhances reliability. Multiple storage options are available such as local disk, Amazon S3, Azure Blob storage or Garage, an OSS distributed object storage, are available."}),"\n",(0,a.jsx)(s.h2,{id:"questions-for-the-co-founder-fran\xe7ois-massot-",children:"Questions for the co-founder Fran\xe7ois Massot \ud83d\ude4b"}),"\n",(0,a.jsx)(s.h3,{id:"what-are-the-benefits-of-using-external-object-storage-as-opposed-to-node-attached-storage",children:"What are the benefits of using external Object Storage as opposed to node attached storage?"}),"\n",(0,a.jsx)(s.p,{children:"There are a lot of benefits! From the beginning, we chose to decouple compute and storage to make our search engine scalable, reliable, and very cost-efficient. If you want to remember one thing distinguishing Quickwit from traditional search engines, this is decoupled storage and computing."}),"\n",(0,a.jsx)(s.p,{children:"Firstly, it provides elasticity, allowing us to scale storage and compute resources independently, which is ideal for cloud environments. Secondly, it\u2019s cost-efficient, as object storage like S3 is cheaper than traditional disk storage, especially for large volumes of log data. And you don\u2019t need to replicate your index data; this is done by the object storage layer. Additionally, it ensures high durability and availability, reducing the risk of data loss. Last, but not least, it simplifies cluster management as most of Quickiwt\u2019s components are stateless."}),"\n",(0,a.jsx)(s.h3,{id:"performance-comparison-is-quickwit-faster-than-elasticsearch",children:"Performance Comparison: Is Quickwit Faster than Elasticsearch?"}),"\n",(0,a.jsx)(s.p,{children:"It depends!"}),"\n",(0,a.jsx)(s.p,{children:"On indexing, Quickwit is generally twice as fast as Elasticsearch and uses less CPU. Our users, like Binance, report a reduction of 80% of CPU usage at indexing!"}),"\n",(0,a.jsx)(s.p,{children:"The story is different regarding querying, as Elasticsearch has all its data on a local disk, typically SSD, and Quickwit has its indexed data in very slow object storage. In this case, you can expect query time to be lower. But Quickwit's main goal is to be sub-second queries, which is perfectly fine in the observability/security domains. If we look at this indicator, Quickwit is on par with Elasticsearch and is even faster for demanding analytics queries, whereas the data is stored on object storage!"}),"\n",(0,a.jsx)(s.h3,{id:"whats-in-store-for-quickwit-in-the-future",children:"What's in store for quickwit in the future?"}),"\n",(0,a.jsx)(s.p,{children:"We have a very ambitious roadmap! Here are the key features that will be added in the following 12 months:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Distributed ingest (July 2024)"}),": High-throughput indexing on tens of thousands of indexes."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"OpenSearch Dashboard support (Q3 2024)"}),": This will enable OpenSearch users to migrate seamlessly to Quickwit with their existing dashboards."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Metrics support (Q4 2024)"}),": New storage engine optimized for time series data."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Distributed SQL engine (Q1 2025)"}),": Distributed SQL engine for analytics on top of Apache Arrow, Datafusion, and Ballista."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Pipe-based query language (Q2 2025)"}),": Introduction of a flexible and powerful query language similar to SPL (Splunk Query Language)"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"use-cases",children:"Use cases"}),"\n",(0,a.jsx)(s.h3,{id:"log-management-",children:"Log management \ud83e\udeb5"}),"\n",(0,a.jsx)(s.p,{children:"Quickwit is built from the ground up to efficiently index unstructured data, and search it effortlessly on cloud storage. Moreover, Quickwit supports OpenTelemetry gRPC and HTTP (protobuf only) protocols out of the box and provides a REST API ready to ingest any JSON formatted logs. This makes Quickwit a perfect fit for logs!"}),"\n",(0,a.jsx)(s.h3,{id:"distributed-tracing-",children:"Distributed tracing \ud83d\udcca"}),"\n",(0,a.jsx)(s.p,{children:"Distributed Tracing involves monitoring application requests as they traverse various services like frontend, backend, and databases. It's instrumental for understanding application behavior and diagnosing performance issues."}),"\n",(0,a.jsx)(s.p,{children:"Additionally, Quickwit seamlessly integrates with OpenTelemetry using gRPC and HTTP protocols (protobuf only), as well as Jaeger's gRPC API (SpanReader only). This means you can store traces in Quickwit and effortlessly query them using Jaeger's UI."}),"\n",(0,a.jsx)(s.h2,{id:"key-features-",children:"Key features \ud83d\udd11"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["Full-text ",(0,a.jsx)(s.em,{children:"search"})," and ",(0,a.jsx)(s.em,{children:"aggregation"})," queries"]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.em,{children:"Elasticsearch"})," query language support"]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.em,{children:"Sub-second search"})," on cloud storage (Amazon S3, Azure Blob Storage, \u2026)"]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.em,{children:"Decoupled compute"})," and ",(0,a.jsx)(s.em,{children:"storage"}),", stateless ",(0,a.jsx)(s.em,{children:"indexers & searchers"})]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.em,{children:"Schemaless"})," or ",(0,a.jsx)(s.em,{children:"strict"})," schema ",(0,a.jsx)(s.em,{children:"indexing"})]}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.em,{children:"Schemaless analytics"})}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.em,{children:"Grafana"})," data source"]}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.em,{children:"Jaeger-native"})}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.em,{children:"OTEL-native"})," for logs and traces"]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.em,{children:"Kubernetes ready"})," via Glasskube"]}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.em,{children:"RESTful API"})}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"want-to-install-quickwit-via-glasskube",children:"Want to install Quickwit via Glasskube?"}),"\n",(0,a.jsxs)(s.p,{children:["Follow the ",(0,a.jsx)(s.a,{href:"https://glasskube.dev/guides/quickwit/",children:"installation guide"}),"."]}),"\n",(0,a.jsx)(s.hr,{}),"\n",(0,a.jsxs)(s.p,{children:["If you like this sort of content and would like to see more of it, please consider supporting us by giving us a Star on ",(0,a.jsx)(s.a,{href:"https://github.com/glasskube/glasskube",children:"GitHub"})," \ud83d\ude4f\r\n",(0,a.jsx)(s.a,{href:"https://github.com/glasskube/glasskube",children:(0,a.jsx)(s.img,{src:"https://github.com/glasskube/glasskube/assets/38757612/05a03edf-7d6a-48fd-9b24-598abcfd1e9a",alt:"cats-like--github-stars"})})]}),"\n",(0,a.jsx)("div",{style:{display:"flex",justifyContent:"right"},children:(0,a.jsx)(i.A,{href:"https://github.com/glasskube/glasskube"})})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},7738:(e,s,t)=>{t.d(s,{Ay:()=>c,RM:()=>l});var a=t(4848),n=t(8453),i=t(9489),r=t(7227);const l=[];function o(e){const s={a:"a",code:"code",p:"p",pre:"pre",...(0,n.R)(),...e.components},{Details:t}=s;return t||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(i.A,{groupId:"operating-systems",children:[(0,a.jsxs)(r.A,{value:"mac",label:"macOS",children:[(0,a.jsxs)(s.p,{children:["On macOS, you can use ",(0,a.jsx)(s.a,{href:"https://brew.sh/",children:"Homebrew"})," to install and update Glasskube."]}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-shell",children:"brew install glasskube/tap/glasskube\n"})})]}),(0,a.jsxs)(r.A,{value:"linux",label:"Linux",children:[(0,a.jsx)(s.p,{children:"You can install Glasskube using one of the package managers below."}),(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{children:"RPM-based installation (RedHat/CentOS/Fedora)"}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:"dnf install https://releases.dl.glasskube.dev/glasskube_v0.24.0_amd64.rpm\n"})})]}),(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{children:"DEB-based installation (Ubuntu/Debian)"}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:"curl -LO https://releases.dl.glasskube.dev/glasskube_v0.24.0_amd64.deb\r\nsudo dpkg -i glasskube_v0.24.0_amd64.deb\n"})})]}),(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{children:"APK-based installation (Alpine)"}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:"curl -LO https://releases.dl.glasskube.dev/glasskube_v0.24.0_amd64.apk\r\napk add --allow-untrusted glasskube_v0.24.0_amd64.apk\n"})})]}),(0,a.jsxs)(s.p,{children:["If you are using a distribution that does not use one of the package managers above, or require a 32-bit binary,\r\ncheck out additional download options attached to our ",(0,a.jsx)(s.a,{href:"https://github.com/glasskube/glasskube/releases/latest",children:"latest release"}),"."]})]}),(0,a.jsx)(r.A,{value:"win",label:"Windows",children:(0,a.jsxs)(s.p,{children:["Download the ",(0,a.jsx)(s.a,{href:"https://releases.dl.glasskube.dev/glasskube_v0.24.0_windows_x86_64.zip",children:"windows archive"})," from our\r\nlatest ",(0,a.jsx)(s.a,{href:"https://github.com/glasskube/glasskube/releases/latest",children:"Release"})," and unpack it using Windows Explorer."]})}),(0,a.jsxs)(r.A,{value:"nixos",label:"NixOS/Nixpkgs",children:[(0,a.jsxs)(s.p,{children:["You can either use the package temporarily in a ",(0,a.jsx)("b",{children:"nix-shell"}),":"]}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:"nix-shell -p glasskube\n"})}),(0,a.jsxs)(s.p,{children:["Or install it globally by adding ",(0,a.jsx)(s.code,{children:"pkgs.glasskube"})," to your ",(0,a.jsx)(s.code,{children:"environment.systemPackages"}),"."]})]})]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsxs)(s.p,{children:["After installing Glasskube on your local machine, make sure to install the necessary components in your Kubernetes cluster by running ",(0,a.jsx)(s.code,{children:"glasskube bootstrap"}),".\r\nFor more information, check out our ",(0,a.jsx)(s.a,{href:"/docs/getting-started/bootstrap",children:"bootstrap guide"}),"."]})]})}function c(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},7227:(e,s,t)=>{t.d(s,{A:()=>r});t(6540);var a=t(4164);const n={tabItem:"tabItem_Ymn6"};var i=t(4848);function r(e){let{children:s,hidden:t,className:r}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(n.tabItem,r),hidden:t,children:s})}},9489:(e,s,t)=>{t.d(s,{A:()=>y});var a=t(6540),n=t(4164),i=t(4245),r=t(6347),l=t(6494),o=t(2814),c=t(5167),u=t(9900);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:s,children:t}=e;return(0,a.useMemo)((()=>{const e=s??function(e){return d(e).map((e=>{let{props:{value:s,label:t,attributes:a,default:n}}=e;return{value:s,label:t,attributes:a,default:n}}))}(t);return function(e){const s=(0,c.XI)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,t])}function g(e){let{value:s,tabValues:t}=e;return t.some((e=>e.value===s))}function p(e){let{queryString:s=!1,groupId:t}=e;const n=(0,r.W6)(),i=function(e){let{queryString:s=!1,groupId:t}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:s,groupId:t});return[(0,o.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const s=new URLSearchParams(n.location.search);s.set(i,e),n.replace({...n.location,search:s.toString()})}),[i,n])]}function b(e){const{defaultValue:s,queryString:t=!1,groupId:n}=e,i=h(e),[r,o]=(0,a.useState)((()=>function(e){let{defaultValue:s,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!g({value:s,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:s,tabValues:i}))),[c,d]=p({queryString:t,groupId:n}),[b,m]=function(e){let{groupId:s}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(s),[n,i]=(0,u.Dv)(t);return[n,(0,a.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:n}),f=(()=>{const e=c??b;return g({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{f&&o(f)}),[f]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!g({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),m(e)}),[d,m,i]),tabValues:i}}var m=t(1062);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(4848);function k(e){let{className:s,block:t,selectedValue:a,selectValue:r,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),u=e=>{const s=e.currentTarget,t=o.indexOf(s),n=l[t].value;n!==a&&(c(s),r(n))},d=e=>{let s=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;s=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;s=o[t]??o[o.length-1];break}}s?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":t},s),children:l.map((e=>{let{value:s,label:t,attributes:i}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===s?0:-1,"aria-selected":a===s,ref:e=>o.push(e),onKeyDown:d,onClick:u,...i,className:(0,n.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":a===s}),children:t??s},s)}))})}function j(e){let{lazy:s,children:t,selectedValue:i}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(s){const e=r.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:r.map(((e,s)=>(0,a.cloneElement)(e,{key:s,hidden:e.props.value!==i})))})}function w(e){const s=b(e);return(0,x.jsxs)("div",{className:(0,n.A)("tabs-container",f.tabList),children:[(0,x.jsx)(k,{...s,...e}),(0,x.jsx)(j,{...s,...e})]})}function y(e){const s=(0,m.A)();return(0,x.jsx)(w,{...e,children:d(e.children)},String(s))}},4401:(e,s,t)=>{t.d(s,{A:()=>i});t(6540);var a=t(72),n=t(4848);const i=e=>{let{href:s,...t}=e;return(0,n.jsx)(a.A,{href:s,"data-color-scheme":"no-preference: light; light: light; dark: light;","data-icon":"octicon-star","data-size":"large","data-show-count":"true","aria-label":`Star ${s} on GitHub`,...t,children:"Star"})}}}]);