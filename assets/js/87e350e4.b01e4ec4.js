"use strict";(self.webpackChunkglasskube_docs=self.webpackChunkglasskube_docs||[]).push([[3696],{4558:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var s=t(4848),a=t(8453);const i={},r="Dependency Management",l={id:"design/dependency-management",title:"Dependency Management",description:"Dependency Management is a cross-cutting concern that is being handled in all glasskube components (GUI, CLI, Operator).",source:"@site/docs/05_design/dependency-management.md",sourceDirName:"05_design",slug:"/design/dependency-management",permalink:"/TP2024-T5/docs/design/dependency-management",draft:!1,unlisted:!1,editUrl:"https://github.com/EvilFlowersCatalog/TP2024-T5/tree/main/docs/05_design/dependency-management.md",tags:[],version:"current",frontMatter:{}},o={},c=[{value:"Package Operator \u2013 reconciling package P depending on package D (P -&gt; D):",id:"package-operator--reconciling-package-p-depending-on-package-d-p---d",level:2},{value:"Assumptions:",id:"assumptions",level:3},{value:"Visualisation:",id:"visualisation",level:3}];function d(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mermaid:"mermaid",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"dependency-management",children:"Dependency Management"})}),"\n",(0,s.jsx)(n.p,{children:"Dependency Management is a cross-cutting concern that is being handled in all glasskube components (GUI, CLI, Operator).\r\nThe following decision tree states how the Package Operator is handling dependencies."}),"\n",(0,s.jsx)(n.h2,{id:"package-operator--reconciling-package-p-depending-on-package-d-p---d",children:"Package Operator \u2013 reconciling package P depending on package D (P -> D):"}),"\n",(0,s.jsx)(n.h3,{id:"assumptions",children:"Assumptions:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Each involved referred package has status Ready, i.e. none of the referred packages are currently being deleted or updated, and their installation has not failed."}),"\n",(0,s.jsxs)(n.li,{children:["Each involved referred package has a ",(0,s.jsx)(n.code,{children:"Spec.PackageInfo.Version"})," set, and it is equal to its ",(0,s.jsx)(n.code,{children:"Status.Version"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:['When the result of a situation is a dependency conflict, it might either be resolvable or not. Either way, the operator does not resolve such a conflict directly, but rather\r\nthe components interacting with the user (CLI, UI) need to guide them through potential resolution. Consequently, the only time the operator does resolve an unfulfilled\r\ndependency, the "result" is denoted as ',(0,s.jsx)(n.code,{children:"install"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"visualisation",children:"Visualisation:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Abbreviations:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"P"})," Package that is going to be installed"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"D"})," Dependency that package ",(0,s.jsx)(n.em,{children:"P"})," requires"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"DV"})," Installed version of package ",(0,s.jsx)(n.em,{children:"D"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"PDV"})," Version constraint for package ",(0,s.jsx)(n.em,{children:"D"})," as defined in the dependency relation of package ",(0,s.jsx)(n.em,{children:"P"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"XDV"})," / ",(0,s.jsx)(n.strong,{children:"YDV"})," Version constraint for package ",(0,s.jsx)(n.em,{children:"D"})," as defined in the dependency relation of already installed package ",(0,s.jsx)(n.em,{children:"X"})," / ",(0,s.jsx)(n.em,{children:"Y"})," that also have a dependency on ",(0,s.jsx)(n.em,{children:"D"})]}),"\n"]}),"\n",(0,s.jsx)(n.mermaid,{value:'flowchart TD\r\nStart --\x3e Check_P_Req_D("Does P require a<br>version range of D?")\r\n%% Branch when P requires no version range of D\r\nCheck_P_Req_D --\x3e|No| P_NoReq_D__Check_D_Exist("Does D exist?")\r\nP_NoReq_D__Check_D_Exist ---\x3e|Yes| State_Fulfilled["P -> D is fulfilled"]\r\nP_NoReq_D__Check_D_Exist --\x3e|No| State_Install_D_latest["Install D pinned in latest(D)"]\r\n%% Branch when P requires D to be in version range PDV\r\nCheck_P_Req_D --\x3e|Yes| P_Req_D__Check_D_Exist("Does D exist?")\r\nP_Req_D__Check_D_Exist --\x3e|Yes| Check_DV_Inside_PDV("Is DV inside PDV?")\r\nP_Req_D__Check_D_Exist --\x3e|No| State_Install_D_PDV["Install D pinned in max_available(PDV)"]\r\nCheck_DV_Inside_PDV --\x3e|Yes| State_Fulfilled\r\nCheck_DV_Inside_PDV --\x3e|No| Check_DV_Less_PDV("Is DV < PDV?")\r\nCheck_DV_Less_PDV --\x3e|Yes| Check_OtherPkgs_Req_D("Are there other<br>existing packages<br>dependent on D<br>requiring a version range?")\r\nCheck_OtherPkgs_Req_D --\x3e|Yes| State_Conflict_MaybeResolvable["P -> D not fulfilled<br><b>Dependency Conflict</b><br>Might be resolvable if XDV, YDV, and PDV overlap"]\r\nCheck_OtherPkgs_Req_D --\x3e|No| State_Conflict_Resolvable["P -> D not fulfilled<br><b>Dependency Conflict</b><br>Resolvable by updating D to max_available(PDV)"]\r\nCheck_DV_Less_PDV --\x3e|No| State_Conflict_NotResolvable["P -> D not fulfilled<br><b>Dependency Conflict</b><br>Not resolvable because P does not support D in DV yet"]\r\n%% Styling end nodes\r\nstyle State_Fulfilled fill:#006400\r\nstyle State_Install_D_latest fill:#B8860B\r\nstyle State_Install_D_PDV fill:#B8860B\r\nstyle State_Conflict_MaybeResolvable fill:#8B0000\r\nstyle State_Conflict_Resolvable fill:#8B0000\r\nstyle State_Conflict_NotResolvable fill:#8B0000'})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var s=t(6540);const a={},i=s.createContext(a);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);