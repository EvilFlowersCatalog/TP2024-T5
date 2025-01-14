"use strict";(self.webpackChunkglasskube_docs=self.webpackChunkglasskube_docs||[]).push([[4617],{64478:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var s=n(74848),o=n(28453);const t={},i=void 0,a={id:"documentation/microservices/O kafke",title:"O kafke",description:"T\xe9my a part\xedcie",source:"@site/docs/documentation/microservices/02_O kafke.md",sourceDirName:"documentation/microservices",slug:"/documentation/microservices/O kafke",permalink:"/TP2024-T5/docs/documentation/microservices/O kafke",draft:!1,unlisted:!1,editUrl:"https://github.com/EvilFlowersCatalog/TP2024-T5/tree/main/docs/documentation/microservices/02_O kafke.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"documentationSidebar",previous:{title:"RoadMapa",permalink:"/TP2024-T5/docs/documentation/microservices/RoadMapa"},next:{title:"Kafka vs RabbitMq",permalink:"/TP2024-T5/docs/documentation/microservices/Kafka vs RabbitMq"}},l={},c=[{value:"<strong>T\xe9my a part\xedcie</strong>",id:"t\xe9my-a-part\xedcie",level:3},{value:"<strong>T\xe9ma (Topic)</strong>",id:"t\xe9ma-topic",level:5},{value:"<strong>Part\xedcie</strong>",id:"part\xedcie",level:5},{value:"<strong>Producenti a konzumenti</strong>",id:"producenti-a-konzumenti",level:3},{value:"<strong>Producent (Producer)</strong>",id:"producent-producer",level:5},{value:"<strong>Konzument (Consumer)</strong>",id:"konzument-consumer",level:5},{value:"<strong>Brokeri a klastre</strong>",id:"brokeri-a-klastre",level:3},{value:"<strong>Brokeri (Brokers)</strong>",id:"brokeri-brokers",level:5},{value:"<strong>Klastr (Cluster)</strong>",id:"klastr-cluster",level:5},{value:"<strong>Spr\xe1vy (Messages)</strong>",id:"spr\xe1vy-messages",level:5}];function d(e){const r={h3:"h3",h5:"h5",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h3,{id:"t\xe9my-a-part\xedcie",children:(0,s.jsx)(r.strong,{children:"T\xe9my a part\xedcie"})}),"\n",(0,s.jsx)(r.h5,{id:"t\xe9ma-topic",children:(0,s.jsx)(r.strong,{children:"T\xe9ma (Topic)"})}),"\n",(0,s.jsxs)("div",{style:{textAlign:"justify"},children:[(0,s.jsx)(r.p,{children:"Predstavuje kateg\xf3riu alebo tok udalost\xed, ktor\xe9 spolu s\xfavisia, napr\xedklad:"}),(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"registr\xe1cia pou\u017e\xedvate\u013eov,"}),"\n",(0,s.jsx)(r.li,{children:"kliknutia na webovej str\xe1nke."}),"\n",(0,s.jsxs)(r.li,{children:["Ka\u017ed\xe1 t\xe9ma je rozdelen\xe1 na ",(0,s.jsx)(r.strong,{children:"part\xedcie"}),"."]}),"\n"]}),(0,s.jsx)(r.h5,{id:"part\xedcie",children:(0,s.jsx)(r.strong,{children:"Part\xedcie"})}),(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Part\xedcie s\xfa usporiadan\xe9 sekvencie udalost\xed."}),"\n",(0,s.jsx)(r.li,{children:"Ka\u017ed\xe1 part\xedcia je replikovan\xe1 na viacer\xfdch brokeroch, aby bola zabezpe\u010den\xe1 odolnos\u0165 vo\u010di chyb\xe1m."}),"\n"]}),(0,s.jsx)(r.h3,{id:"producenti-a-konzumenti",children:(0,s.jsx)(r.strong,{children:"Producenti a konzumenti"})}),(0,s.jsx)(r.h5,{id:"producent-producer",children:(0,s.jsx)(r.strong,{children:"Producent (Producer)"})}),(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Generuje udalosti a odosiela ich do t\xe9m v Kafke."}),"\n"]}),(0,s.jsx)(r.h5,{id:"konzument-consumer",children:(0,s.jsx)(r.strong,{children:"Konzument (Consumer)"})}),(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u010c\xedta udalosti z t\xe9m v Kafke a n\xe1sledne ich spracov\xe1va."}),"\n",(0,s.jsxs)(r.li,{children:["Konzument m\xf4\u017ee by\u0165 s\xfa\u010das\u0165ou skupiny konzumentov (",(0,s.jsx)(r.strong,{children:"consumer group"}),"), \u010do umo\u017e\u0148uje:"]}),"\n",(0,s.jsx)(r.li,{children:"rovnomern\xe9 rozdelenie z\xe1\u0165a\u017ee pri spracovan\xed udalost\xed."}),"\n"]}),(0,s.jsx)(r.h3,{id:"brokeri-a-klastre",children:(0,s.jsx)(r.strong,{children:"Brokeri a klastre"})}),(0,s.jsx)(r.h5,{id:"brokeri-brokers",children:(0,s.jsx)(r.strong,{children:"Brokeri (Brokers)"})}),(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Servery, na ktor\xfdch be\u017e\xed Kafka a kde s\xfa ulo\u017een\xe9 d\xe1ta udalost\xed."}),"\n"]}),(0,s.jsx)(r.h5,{id:"klastr-cluster",children:(0,s.jsx)(r.strong,{children:"Klastr (Cluster)"})}),(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Skupina brokerov, ktor\xed spolupracuj\xfa na vytvoren\xed vysoko dostupnej a \u0161k\xe1lovate\u013enej platformy."}),"\n"]}),(0,s.jsx)(r.h5,{id:"spr\xe1vy-messages",children:(0,s.jsx)(r.strong,{children:"Spr\xe1vy (Messages)"})}),(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Spr\xe1vy s\xfa trv\xe1cne a predvolene sa uchov\xe1vaj\xfa 7 dn\xed pred ich vymazan\xedm."}),"\n",(0,s.jsxs)(r.li,{children:["Ak spracovanie zlyh\xe1, je mo\u017en\xe9 re\u0161tartova\u0165 k\xf3d konzumenta od posledn\xe9ho neulo\u017een\xe9ho posunu spr\xe1vy (",(0,s.jsx)(r.strong,{children:"offset"}),"), pri\u010dom sa spr\xe1va spracuje znova."]}),"\n"]})]})]})}function u(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>a});var s=n(96540);const o={},t=s.createContext(o);function i(e){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);