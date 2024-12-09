"use strict";(self.webpackChunkglasskube_docs=self.webpackChunkglasskube_docs||[]).push([[7588],{2972:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var s=a(4848),t=a(8453);const r={},i="Package Repository",o={id:"components/package-repository",title:"Package Repository",description:"The package repository is where PackageManifests are stored, searched for and maintained.",source:"@site/docs/03_components/03_package-repository.md",sourceDirName:"03_components",slug:"/components/package-repository",permalink:"/TP2024-T5/docs/components/package-repository",draft:!1,unlisted:!1,editUrl:"https://github.com/EvilFlowersCatalog/TP2024-T5/tree/main/docs/03_components/03_package-repository.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{}},c={},d=[{value:"Structure",id:"structure",level:2},{value:"Version Numbers",id:"version-numbers",level:3},{value:"Package Manifest",id:"package-manifest",level:2},{value:"Dependencies",id:"dependencies",level:3},{value:"Version Ranges",id:"version-ranges",level:4}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"package-repository",children:"Package Repository"})}),"\n",(0,s.jsxs)(n.p,{children:["The package repository is where ",(0,s.jsx)(n.code,{children:"PackageManifest"}),"s are stored, searched for and maintained.\r\nThe default repository is the central Glasskube package repository ",(0,s.jsx)(n.a,{href:"https://github.com/glasskube/packages",children:(0,s.jsx)(n.code,{children:"glasskube/packages"})}),", however custom repositories can be added."]}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.code,{children:"PackageManifest"})," contains all relevant information needed for identifying and installing a package.\r\nIt can contain either a Helm resource (as used in ",(0,s.jsx)(n.a,{href:"https://github.com/glasskube/packages/blob/main/packages/cert-manager/package.yaml",children:"cert-manager"}),"), or a link to a manifest (as used for ",(0,s.jsx)(n.a,{href:"https://github.com/glasskube/packages/blob/main/packages/cyclops/package.yaml",children:"cyclops"}),")."]}),"\n",(0,s.jsx)(n.h2,{id:"structure",children:"Structure"}),"\n",(0,s.jsx)(n.p,{children:"A package repository must use the following directory structure to be fully compatible with Glasskube:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"|-- index.yaml\r\n|-- package-a/\r\n  |-- versions.yaml\r\n  |-- v1.2.3/\r\n  | |-- package.yaml\r\n  |-- v1.3.2/\r\n    |-- package.yaml\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The root ",(0,s.jsx)(n.code,{children:"index.yaml"})," contains a list of all packages available from this repository. It is used primarily by client software to aid explorability.\r\nAll files related to a package reside in a directory that must have the same name as the package.\r\nInside a package's directory there must be a ",(0,s.jsx)(n.code,{children:"versions.yaml"})," that contains a list of all versions available for this package.\r\nThere must be a subdirectory for each version containing a ",(0,s.jsx)(n.code,{children:"package.yaml"})," file.\r\nA ",(0,s.jsx)(n.code,{children:"package.yaml"})," contains a manifest of that package which holds information such as longer descriptions and included files."]}),"\n",(0,s.jsx)(n.h3,{id:"version-numbers",children:"Version Numbers"}),"\n",(0,s.jsxs)(n.p,{children:["The version number of a package must follow the ",(0,s.jsx)(n.a,{href:"https://semver.org",children:"semver specification"}),", with the additional constraint that the build number of a version is only allowed to consist of digits.\r\nAlthough the specification states that ",(0,s.jsx)(n.a,{href:"https://semver.org/#spec-item-10",children:"build numbers must be ignored"})," when determining version precedence,\r\nwe see no other way than to do so. Therefore, we only allow digits in the build number, such that we can decide which version is newer."]}),"\n",(0,s.jsxs)(n.p,{children:["This is important for Glasskube to distinguish between two different versions of a package manifest, that might have the same underlying software version of a package.\r\nFor example, there could be a package  ",(0,s.jsx)(n.code,{children:"kubernetes-dashboard"})," in version ",(0,s.jsx)(n.code,{children:"2.7.0"}),".\r\nThe preferred way to make this version available in the Glasskube package repository, is to create a version ",(0,s.jsx)(n.code,{children:"2.7.0+1"}),".\r\nIf the package manifest turns out to be faulty and need to be corrected (e.g. typos, wrong entrypoints, wrong dependencies), or if some metadata needs to be changed (e.g. links, description),\r\nthe maintainer can add a version ",(0,s.jsx)(n.code,{children:"2.7.0+2"})," without changing the underlying app version of ",(0,s.jsx)(n.code,{children:"2.7.0"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"package-manifest",children:"Package Manifest"}),"\n",(0,s.jsx)(n.h3,{id:"dependencies",children:"Dependencies"}),"\n",(0,s.jsx)(n.p,{children:"A package can declare dependencies that need to exist in a cluster, before the desired package can be installed.\r\nEach dependency is a Glasskube package identified by its name. Optionally, a specific version or version range can be defined."}),"\n",(0,s.jsx)(n.h4,{id:"version-ranges",children:"Version Ranges"}),"\n",(0,s.jsxs)(n.p,{children:["Sometimes it is important to pin down what versions of a dependency should be used by a package.\r\nOften, this will not only be one version, but a range of versions. There is no common specification for semver ranges,\r\nbut there seem to be some common expectations of to what version range specifications look like.\r\nWe mostly rely on the ",(0,s.jsx)(n.a,{href:"https://github.com/Masterminds/semver",children:"Masterminds/semver"})," package to do version constraint checks, which itself works with version range syntax close to js/npm and Rust/Cargo."]}),"\n",(0,s.jsx)(n.p,{children:"Please note that we do not allow build numbers to be part of such version ranges.\r\nIf there is some change in a required package, that would make a dependant package incompatible, this change needs to be reflected in the actual app version anyway."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>o});var s=a(6540);const t={},r=s.createContext(t);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);