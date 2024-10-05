"use strict";(self.webpackChunkglasskube_docs=self.webpackChunkglasskube_docs||[]).push([[3560],{9091:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(4848),a=n(8453),t=n(975);const r={},o="Glasskube Repositories",l={id:"design/repositories",title:"Glasskube Repositories",description:"Problem Analysis",source:"@site/docs/05_design/repositories.mdx",sourceDirName:"05_design",slug:"/design/repositories",permalink:"/TP2024-T5/docs/design/repositories",draft:!1,unlisted:!1,editUrl:"https://github.com/glasskube/glasskube/tree/main/website/docs/05_design/repositories.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Package Scopes",permalink:"/TP2024-T5/docs/design/package-scopes"},next:{title:"Telemetry",permalink:"/TP2024-T5/docs/design/telemetry"}},d={},c=[{value:"Problem Analysis",id:"problem-analysis",level:2},{value:"Proposed Solution",id:"proposed-solution",level:2},{value:"API Specification and Operator",id:"api-specification-and-operator",level:3},{value:"CLI Design",id:"cli-design",level:3},{value:"Repository Management",id:"repository-management",level:4},{value:"Package Management",id:"package-management",level:4},{value:"UI Design",id:"ui-design",level:3},{value:"Repository Management",id:"repository-management-1",level:4},{value:"Package Management",id:"package-management-1",level:4},{value:"Migration &amp; Compatibility",id:"migration--compatibility",level:3},{value:"Known Limitations",id:"known-limitations",level:2}];function h(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"glasskube-repositories",children:"Glasskube Repositories"})}),"\n",(0,i.jsx)(s.h2,{id:"problem-analysis",children:"Problem Analysis"}),"\n",(0,i.jsxs)(s.p,{children:["In its current state, Glasskube only supports a single repository that is baked into the source code.\r\nWhile there was an effort to support different repositories in the beginning, by providing a ",(0,i.jsx)(s.code,{children:"RepositoryURL"})," field in the ",(0,i.jsx)(s.code,{children:"PackageSpec"}),", it was never documented and is currently not functional."]}),"\n",(0,i.jsx)(s.p,{children:"Implementing support would provide multiple benefits:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Support local repositories for use during package creation"}),"\n",(0,i.jsx)(s.li,{children:"Support users to manage their own packages without publishing them to the official repository"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"The following challenges were identified during analysis and should be addressed by the proposed solution:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Authentication must be supported. Basic and Bearer authentication (fixed token) should be sufficient to start with."}),"\n",(0,i.jsx)(s.li,{children:"Provide authentication credentials via secret or directly"}),"\n",(0,i.jsx)(s.li,{children:"Packages are identified by name only, if there is a package with the same name in multiple repositories, the behavior should be documented, deterministic and obvious to the user."}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"proposed-solution",children:"Proposed Solution"}),"\n",(0,i.jsx)(s.h3,{id:"api-specification-and-operator",children:"API Specification and Operator"}),"\n",(0,i.jsxs)(s.p,{children:["A list of available repositories is available in the cluster via a new CRD ",(0,i.jsx)(s.code,{children:"PackageRepository"}),".\r\nThe ",(0,i.jsx)(s.code,{children:"PackageRepository"})," could look something like this:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-yaml",children:"apiVersion: packages.glasskube.dev/v1alpha1\r\nkind: PackageRepository\r\nmetadata:\r\n  # PackageRepository is cluster-scoped\r\n  name: private-repo\r\nspec:\r\n  url: https://packages.example.com/\r\n  # auth is optional\r\n  auth:\r\n    # exactly one of the following auth methods must be provided. an empty auth block is invalid\r\n    basic:\r\n      # username and password can be specified directly or via secret.\r\n      # Both must be specified either directly or via secretRef\r\n      # Any secret referenced here must be in the glasskube-system namespace\r\n      username: foo\r\n      usernameSecretRef:\r\n        name: private-repo-auth\r\n        key: username\r\n      password: bar\r\n      passwordSecretRef:\r\n        name: private-repo-auth\r\n        key: password\r\n    bearer:\r\n      token: xxxxxxxxxxxxxxxxxxxxxxxxxxxxx\r\n      tokenSecretRef:\r\n        name: private-repo-token\r\n        key: token\n"})}),"\n",(0,i.jsxs)(s.p,{children:["A ",(0,i.jsx)(s.code,{children:"Package"})," may reference a repository explicitly by its name."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-yaml",children:"apiVersion: packages.glasskube.dev/v1alpha1\r\nkind: Package\r\nmetadata:\r\n  name: package-sample\r\nspec:\r\n  packageInfo:\r\n    name: foo\r\n    version: v1.0.0+1\r\n    # repositoryName is optional\r\n    repositoryName: private-repo\n"})}),"\n",(0,i.jsxs)(s.p,{children:["If a package does not specify a ",(0,i.jsx)(s.code,{children:"repoName"}),", the default repository is used.\r\nThe default repository can be determined by getting all ",(0,i.jsx)(s.code,{children:"PackageRepositories"})," with the ",(0,i.jsx)(s.code,{children:"packages.glasskube.dev/defaultRepository=true"})," annotation.\r\nIf there is exactly one such ",(0,i.jsx)(s.code,{children:"PackageRepositories"}),", use it as default.\r\nIf there are two or more such ",(0,i.jsx)(s.code,{children:"PackageRepositories"}),", there is no default repository."]}),"\n",(0,i.jsxs)(s.p,{children:["A ",(0,i.jsx)(s.code,{children:"PackageRepository"})," can only be deleted if there are no packages installed using it.\r\nThis is also true for the default repository.\r\nThe default repository can only be changed if there are no packages installed from the default repository.\r\nFor now, these limitations are not enforced by a validating webhook, they will lead to a reconciliation error.\r\nInstalled packages do not break but can not be updated until the missing repository is re-created."]}),"\n",(0,i.jsx)(s.h3,{id:"cli-design",children:"CLI Design"}),"\n",(0,i.jsx)(s.h4,{id:"repository-management",children:"Repository Management"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"glasskube repo list"})," prints a list of installed repositories"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"glasskube repo add [name] [url]"})," creates a new repository","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"--default"})," toggles the ",(0,i.jsx)(s.code,{children:"packages.glasskube.dev/defaultRepository=true"})," annotation. If there is a repository\r\nwith that annotation already, the default annotation will be removed for that repository"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"--auth=none"})," no authentication (default)"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"--auth=basic"})," enables basic authentication"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"--auth=bearer"})," enables token authentication"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"--username"}),", ",(0,i.jsx)(s.code,{children:"--password"})," and ",(0,i.jsx)(s.code,{children:"--token"})," set the auth credentials.","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["If ",(0,i.jsx)(s.code,{children:"--username"})," or ",(0,i.jsx)(s.code,{children:"--password"}),' is specified, auth type "basic" can be inferred.']}),"\n",(0,i.jsxs)(s.li,{children:["If ",(0,i.jsx)(s.code,{children:"--token"}),' is specified, auth type "bearer" can be inferred.']}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"glasskube repo update [name]"})," creates a new repository","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:'same flags as "add" plus the following'}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"--auth=none"})," disable the authentication"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"--default"})," toggles the ",(0,i.jsx)(s.code,{children:"packages.glasskube.dev/defaultRepository=true"})," annotation. If there is a repository\r\nwith that annotation already, the default annotation will be removed for that repository"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"--url"})," set the new url for the repository"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"glasskube repo delete [name]"})," removes an installed repository"]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"package-management",children:"Package Management"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"glasskube install foo"}),' checks all installed repositories for a package with name "foo".',"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"If no match: error"}),"\n",(0,i.jsx)(s.li,{children:"If 1 match: use that repo (show which one in the summary before confirmation)"}),"\n",(0,i.jsx)(s.li,{children:"if 2 or more match: Let the user choose"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"glasskube install foo --repository=private-repo"})," uses the ",(0,i.jsx)(s.code,{children:"PackageRepository"}),' with name "private-repo"']}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"glasskube update"})," uses the repo from the installed package"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"glasskube list"}),' lists packages from all repositories.\r\nThe repositories each package is available from are shown in a new column.\r\nIf a package is installed and it is available from more than one repository, the one used in the installation is marked in this column with "(used)"\r\nIf a package is not installed and it is available from more than one repository, the latest version shown is the highes one available across repositories.']}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"glasskube describe"})," shows the repositories the package is available from and the one that is used for installation."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"ui-design",children:"UI Design"}),"\n",(0,i.jsx)(s.h4,{id:"repository-management-1",children:"Repository Management"}),"\n",(0,i.jsx)(s.p,{children:"Current UI of the new settings holds the package repository configuration."}),"\n",(0,i.jsx)(t.A,{alt:"Glasskube UI Repo settings",sources:{light:"https://github.com/glasskube/glasskube/assets/3041752/e8565cf7-6089-4b82-b169-91f5b3ef4c33",dark:"https://github.com/glasskube/glasskube/assets/3041752/cf1f1983-78c8-4bb4-9d47-86dbf3a16c4e"}}),"\n",(0,i.jsxs)(s.p,{children:["Adding and updating repositories is not yet supported via the UI.\r\n(see ",(0,i.jsx)(s.a,{href:"https://github.com/glasskube/glasskube/issues/860",children:"#860"})," and ",(0,i.jsx)(s.a,{href:"https://github.com/glasskube/glasskube/issues/861",children:"#860"}),")"]}),"\n",(0,i.jsx)(s.h4,{id:"package-management-1",children:"Package Management"}),"\n",(0,i.jsx)(s.p,{children:"On the list page, packages from all installed repositories are shown.\r\nIf two or more repositories feature a package with the same name and that package is not installed, it is only shown once, where the iconUrl and shortDescription are taken from the first repository ordered alphabetically, that is not the default repository."}),"\n",(0,i.jsx)(s.p,{children:"On the details page, if the package is not installed and featured in two or more repositories, there is a dropdown at the top of the page where a user can select the repository they want to install the package from.\r\nWhen changing the dropdown value, the page is refreshed with data from the new selected repository.\r\nAll data shown comes from the selected repository."}),"\n",(0,i.jsx)(s.p,{children:"If a package is already installed or only available from one repository, the dropdown is not shown."}),"\n",(0,i.jsx)(s.h3,{id:"migration--compatibility",children:"Migration & Compatibility"}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"bootstrap"}),' command creates a default repository in the cluster by default.\r\nThis repository has the name "glasskube" and repositoryUrl "',(0,i.jsx)(s.a,{href:"https://packages.dl.glasskube.dev/packages/",children:"https://packages.dl.glasskube.dev/packages/"}),'".\r\nBy creating this repository, we ensure that existing installations remain functional.\r\nThis behavior can be turned off by running ',(0,i.jsx)(s.code,{children:"bootstrap"})," with ",(0,i.jsx)(s.code,{children:"--create-default-repository=false"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"known-limitations",children:"Known Limitations"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"If a package has a dependency that is available from more than one repository, the operator would have to decide which one to install.\r\nThis is not something we want to do!\r\nTherefore, we treat this case as an error for now and ask the user to install the dependency manually, deciding which repository to use.\r\nThis will be better once we migrate to fully client-side dependency resolution."}),"\n"]})]})}function p(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>o});var i=n(6540);const a={},t=i.createContext(a);function r(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);