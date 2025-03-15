"use strict";(self.webpackChunkglasskube_docs=self.webpackChunkglasskube_docs||[]).push([[2909],{63744:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=a(74848),s=a(28453);const i={},t="Package Configuration",o={id:"design/package-config",title:"Package Configuration",description:"Problem analysis",source:"@site/docs/05_design/package-config.md",sourceDirName:"05_design",slug:"/design/package-config",permalink:"/TP2024-T5/docs/design/package-config",draft:!1,unlisted:!1,editUrl:"https://github.com/EvilFlowersCatalog/TP2024-T5/tree/main/docs/05_design/package-config.md",tags:[],version:"current",frontMatter:{}},l={},c=[{value:"Problem analysis",id:"problem-analysis",level:2},{value:"What values are available for a given package",id:"what-values-are-available-for-a-given-package",level:3},{value:"How does a value affect the deployed package resources",id:"how-does-a-value-affect-the-deployed-package-resources",level:3},{value:"How does a value affect the deployed package resources",id:"how-does-a-value-affect-the-deployed-package-resources-1",level:3},{value:"Design proposal",id:"design-proposal",level:2},{value:"Examples",id:"examples",level:2},{value:"Known Limitations/caveats",id:"known-limitationscaveats",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"package-configuration",children:"Package Configuration"})}),"\n",(0,r.jsx)(n.h2,{id:"problem-analysis",children:"Problem analysis"}),"\n",(0,r.jsx)(n.p,{children:"At Glasskube, what we mean when we talk about package configuration, is a controlled alteration of the resources that are part of a package depending on values specified by the user.\r\nThis can be thought of as three sub-problems:"}),"\n",(0,r.jsx)(n.h3,{id:"what-values-are-available-for-a-given-package",children:"What values are available for a given package"}),"\n",(0,r.jsxs)(n.p,{children:["The author of a package may include a declaration of the possible configuration items in the package manifest, where each package may have multiple ",(0,r.jsx)(n.strong,{children:"value definitions"}),".\r\nA value definition contains information to help clients display an appropriate form item for data entry and constraints to be validated by the client as well as the package operator."]}),"\n",(0,r.jsx)(n.h3,{id:"how-does-a-value-affect-the-deployed-package-resources",children:"How does a value affect the deployed package resources"}),"\n",(0,r.jsxs)(n.p,{children:["Additionally, a value definition describes some alterations to the deployed package.\r\nWe call those alterations ",(0,r.jsx)(n.strong,{children:"targets"}),".\r\nEach value definition may contain a number of targets.\r\nA target can be one of two things:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"A change to the default values of a helm release contained in the package"}),"\n",(0,r.jsxs)(n.li,{children:["A JSON patch that should be applied to a resource contained in a ",(0,r.jsx)(n.code,{children:"manifests"})," entry of the package"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"how-does-a-value-affect-the-deployed-package-resources-1",children:"How does a value affect the deployed package resources"}),"\n",(0,r.jsxs)(n.p,{children:["A user, when installing a package using Glasskube, may declare a ",(0,r.jsx)(n.strong,{children:"value configuration"})," for each value definition of that package.\r\nA value configuration can hold either a ",(0,r.jsx)(n.strong,{children:"literal value"})," or a ",(0,r.jsx)(n.strong,{children:"reference value"}),".\r\nLiteral values represent a simple value (e.g. a string entered via a text field).\r\nReference values represent references to values in other resources in the same Kubernetes cluster.\r\nSuch references can be secrets, configmaps or other packages."]}),"\n",(0,r.jsx)(n.p,{children:"Values are non-mandatory by default, however, a package author may opt to make any of their packages values required by\r\nspecifying a constraint on that value definition.\r\nIf a package has no value configuration for a given value definition that is non-mandatory, that values targets will not be\r\napplied and it is the package authors responsibility to ensure that their package also works in this case."}),"\n",(0,r.jsx)(n.h2,{id:"design-proposal",children:"Design proposal"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"PackageManifest"})," has a property ",(0,r.jsx)(n.code,{children:"Values"})," of type ",(0,r.jsx)(n.code,{children:"map[string]ValueDefinition"}),".\r\nThe key in this map is referred to as that values ",(0,r.jsx)(n.strong,{children:"name"}),"\r\n",(0,r.jsx)(n.code,{children:"ValueDefinition"})," is a struct with the following properties:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Type"})})," (",(0,r.jsx)(n.code,{children:"string"})," enum):\r\nEvery value must have a type, so that we know what kind of input field to show for this value.\r\nInitially, this can be one of ",(0,r.jsx)(n.code,{children:"boolean"}),", ",(0,r.jsx)(n.code,{children:"options"}),", ",(0,r.jsx)(n.code,{children:"text"}),", ",(0,r.jsx)(n.code,{children:"number"})," but it is possible to add more types in future releases."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Metadata"})}),":\r\nA colletion of (mostly) UI-related metadata with the following (optional) properties:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Label"})})," (",(0,r.jsx)(n.code,{children:"string"}),"):\r\nThe label is used to denote an input field related to this value in a UI.\r\nBy default the name of the value should be used."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Description"})})," (",(0,r.jsx)(n.code,{children:"string"}),"):\r\nThe description can be used to give more context to a value."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Hints"})})," (",(0,r.jsx)(n.code,{children:"string"}),' enum):\r\nHints offer package maintainers the ability to make some elements of the UI more prominent.\r\nFor example, every value can be set to reference the value of a secret key, but if a value has the\r\n"SuggestSecretRef" hint, this option can be highlighted by the UI or enabled by default.\r\n',(0,r.jsx)(n.em,{children:"Available hints and whether they will be included in the initial release is TBD"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"DefaultValue"})})," (",(0,r.jsx)(n.code,{children:"string"}),"):\r\nThe default value is pre-selected/pre-filled in the form field of this value for new packages."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Options"})})," (",(0,r.jsx)(n.code,{children:"[]string"}),"):\r\nAvailable choices for values of type options.\r\nShould be ignored for other types."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Constraints"})}),":\r\nSpecifying a number of constraints is possible.\r\nAvailable constraints are\r\n",(0,r.jsx)(n.code,{children:"Required"})," (",(0,r.jsx)(n.code,{children:"bool"}),"), ",(0,r.jsx)(n.code,{children:"Min"})," (",(0,r.jsx)(n.code,{children:"int"}),"), ",(0,r.jsx)(n.code,{children:"Max"})," (",(0,r.jsx)(n.code,{children:"int"}),"), ",(0,r.jsx)(n.code,{children:"MinLength"})," (",(0,r.jsx)(n.code,{children:"int"}),"), ",(0,r.jsx)(n.code,{children:"MaxLength"})," (",(0,r.jsx)(n.code,{children:"int"}),"), ",(0,r.jsx)(n.code,{children:"Pattern"})," (",(0,r.jsx)(n.code,{children:"string"}),').\r\nThese should be checked by the UI, as well as by the validating webhook.\r\nNot all constrains apply to all types of value. Non-applicable constraints are ignored.\r\nFor example a "text" value with constraints.max = 3 is the same as a "text" value with no constraints.']}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Targets"})}),":\r\nWhere to apply this value.\r\nEither the name of a helm chart, or a ",(0,r.jsx)(n.code,{children:"TypedObjectReference"})," combined with patch information.\r\nInitially, the idea is to use RFC 6902 JSON patches but this is still TBD.\r\nWe use Unstructured for plain resources, which already supports setting values via a kind of JSON path,\r\nbut it does not support setting values in lists.\r\nSo, for example, it would not be possible to change something in the container of a deployment, since the containers are a list.\r\nMaybe ",(0,r.jsx)(n.a,{href:"https://github.com/evanphx/json-patch",children:"evanphx/json-patch"})," can be a useful alternative, but it only works on byte slices."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"PackageSpec"})," has a property ",(0,r.jsx)(n.code,{children:"Values"})," of type ",(0,r.jsx)(n.code,{children:"map[string]ValueConfiguration"}),".\r\nThe key in this map used to identify the corresponding ",(0,r.jsx)(n.code,{children:"ValueDefinition"})," with the same name in the ",(0,r.jsx)(n.code,{children:"PackageManifest"}),"s ",(0,r.jsx)(n.code,{children:"Values"})," map.\r\nA ",(0,r.jsx)(n.code,{children:"ValueConfiguration"})," must have exactly one of the following properties:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Value"})}),":\r\nA literal value."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"ValueFrom"})}),":\r\nTo represent a reference value. ",(0,r.jsx)(n.code,{children:"ValueFrom"})," must have exactly one of the following properties:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"ConfigMapRef"})}),":\r\nTo reference a ",(0,r.jsx)(n.code,{children:"Key"})," of a ConfigMap with ",(0,r.jsx)(n.code,{children:"Name"})," in ",(0,r.jsx)(n.code,{children:"Namespace"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"SecretRef"})}),":\r\nTo reference a ",(0,r.jsx)(n.code,{children:"Key"})," of a Secret with ",(0,r.jsx)(n.code,{children:"Name"})," in ",(0,r.jsx)(n.code,{children:"Namespace"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"PackageRef"})}),":\r\nTo reference the value of the ",(0,r.jsx)(n.code,{children:"ValueConfiguration"})," with name ",(0,r.jsx)(n.code,{children:"Value"})," of a package with ",(0,r.jsx)(n.code,{children:"Name"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="PackageManifest with a simple value specification"',children:"name: foo\r\nhelm:\r\n  repositoryUrl: 'https://charts.example.com'\r\n  chartName: 'foo'\r\n  chartVersion: 'v1.0.0'\r\n  values: {}\r\nvalueDefinitions:\r\n  ingress:\r\n    type: 'boolean'\r\n    label: 'Enable Ingress'\r\n    description: 'Whether an ingress resource should be created for this Package'\r\n    defaultValue: 'true'\r\n    targets:\r\n      - chartName: 'foo'\r\n        patch:\r\n          - op: 'add'\r\n            path: 'ingress/enabled'\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="PackageManifest with a value specification that has multiple targets"',children:"name: foo\r\nvalueDefinitions:\r\n  host:\r\n    type: 'text'\r\n    constraints:\r\n      required: true\r\n    targets:\r\n      - resource:\r\n          kind: 'Ingress'\r\n          apiVersion: 'networking.k8s.io/v1'\r\n          name: 'foo'\r\n          namespace: 'foo'\r\n        patch:\r\n          - op: 'add'\r\n            path: '/spec/rules/0/host'\r\n          - op: 'add'\r\n            path: '/spec/tls/0/hosts/-'\r\n      - resource:\r\n          apiVersion: 'apps/v1'\r\n          kind: 'Deployment'\r\n          name: 'foo'\r\n          namespace: 'foo'\r\n        patch:\r\n          - op: 'add'\r\n            path: '/spec/template/spec/containers/0/env/-'\r\n        valueTemplate: |\r\n          { \"name\": \"APP_HOST\", \"value\": \"{{ .value }}\" }\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="Package with a variety of value configurations"',children:"apiVersion: 'packages.glasskube.dev/v1alpha1'\r\nkind: 'Package'\r\nmetadata:\r\n  name: 'foo'\r\nspec:\r\n  packageInfo:\r\n    name: 'foo'\r\n    version: 'v1.0.0'\r\n  values:\r\n    ingress:\r\n      value: 'false'\r\n    host:\r\n      valueFrom:\r\n        configMapRef:\r\n          name: 'foo-prod-config'\r\n          value: 'host'\r\n    apiKey:\r\n      valueFrom:\r\n        secretRef:\r\n          name: 'api-key-secret'\r\n          key: 'apiKey'\n"})}),"\n",(0,r.jsx)(n.h2,{id:"known-limitationscaveats",children:"Known Limitations/caveats"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Value configurations can not have list types"}),"\n",(0,r.jsx)(n.li,{children:"More possibilities for deadlocks with required values that reference other packages"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>t,x:()=>o});var r=a(96540);const s={},i=r.createContext(s);function t(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);