"use strict";(self.webpackChunkglasskube_docs=self.webpackChunkglasskube_docs||[]).push([[7643],{9101:(e,t,a)=>{a.d(t,{in:()=>c,x:()=>o,e7:()=>d,J_:()=>x});var n=a(6540),s=a(4799),r=a(3512),i=a(4848);function o(){const e=(0,r.A)(),t=e?.data?.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}const l=n.createContext(null);function c(e){let{children:t,content:a,isBlogPostPage:s=!1}=e;const r=function(e){let{content:t,isBlogPostPage:a}=e;return(0,n.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:s});return(0,i.jsx)(l.Provider,{value:r,children:t})}function d(){const e=(0,n.useContext)(l);if(null===e)throw new s.dV("BlogPostProvider");return e}var m=a(8180),u=a(7639);const g=e=>new Date(e).toISOString();function h(e){const t=e.map(j);return{author:1===t.length?t[0]:t}}function p(e,t,a){return e?{image:f({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${a}`})}:{}}function x(){const e=o(),{assets:t,metadata:a}=d(),{siteConfig:n}=(0,u.A)(),{withBaseUrl:s}=(0,m.hH)(),{date:r,title:i,description:l,frontMatter:c,lastUpdatedAt:x}=a,j=t.image??c.image,f=c.keywords??[],v=x?g(x):void 0,b=`${n.url}${a.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":b,mainEntityOfPage:b,url:b,headline:i,name:i,description:l,datePublished:r,...v?{dateModified:v}:{},...h(a.authors),...p(j,s,i),...f?{keywords:f}:{},isPartOf:{"@type":"Blog","@id":`${n.url}${e.blogBasePath}`,name:e.blogTitle}}}function j(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function f(e){let{imageUrl:t,caption:a}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:a}}a(4783)},4934:(e,t,a)=>{a.d(t,{A:()=>i});a(6540);var n=a(3230),s=a(3555),r=a(4848);function i(e){const{metadata:t}=e,{previousPage:a,nextPage:i}=t;return(0,r.jsxs)("nav",{className:"pagination-nav","aria-label":(0,n.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[a&&(0,r.jsx)(s.A,{permalink:a,title:(0,r.jsx)(n.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),i&&(0,r.jsx)(s.A,{permalink:i,title:(0,r.jsx)(n.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},3555:(e,t,a)=>{a.d(t,{A:()=>i});a(6540);var n=a(4164),s=a(4783),r=a(4848);function i(e){const{permalink:t,title:a,subLabel:i,isNext:o}=e;return(0,r.jsxs)(s.A,{className:(0,n.A)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[i&&(0,r.jsx)("div",{className:"pagination-nav__sublabel",children:i}),(0,r.jsx)("div",{className:"pagination-nav__label",children:a})]})}},1883:(e,t,a)=>{a.d(t,{A:()=>o});a(6540);var n=a(4164),s=a(4783);const r={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var i=a(4848);function o(e){let{permalink:t,label:a,count:o,description:l}=e;return(0,i.jsxs)(s.A,{href:t,title:l,className:(0,n.A)(r.tag,o?r.tagWithCount:r.tagRegular),children:[a,o&&(0,i.jsx)("span",{children:o})]})}},1113:(e,t,a)=>{a.d(t,{A:()=>l});a(6540);var n=a(4164),s=a(3230),r=a(1883);const i={tags:"tags_jXut",tag:"tag_QGVx"};var o=a(4848);function l(e){let{tags:t}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("b",{children:(0,o.jsx)(s.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,o.jsx)("ul",{className:(0,n.A)(i.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,o.jsx)("li",{className:i.tag,children:(0,o.jsx)(r.A,{...e})},e.permalink)))})]})}},7824:(e,t,a)=>{a.d(t,{W:()=>c});var n=a(6540),s=a(7639);const r=["zero","one","two","few","many","other"];function i(e){return r.filter((t=>e.includes(t)))}const o={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),o}}),[e])}function c(){const e=l();return{selectMessage:(t,a)=>function(e,t,a){const n=e.split("|");if(1===n.length)return n[0];n.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const s=a.select(t),r=a.pluralForms.indexOf(s);return n[Math.min(r,n.length-1)]}(a,t,e)}}},1852:(e,t,a)=>{a.d(t,{Ay:()=>o,t2:()=>l});var n=a(6540),s=a(2171),r=a(7710),i=a(4848);function o(e){let{category:t,categoryId:a}=e;const{colorMode:o}=(0,r.G)(),l=e=>{if("https://giscus.app"!==e.origin)return;if("object"!=typeof e.data||!e.data.giscus)return;const t=e.data.giscus;if(t.discussion&&t.viewer){const e=t.viewer.login;if(e.includes("giscus")&&e.includes("bot"))return;const a=t.viewer.url;window.posthog&&window.posthog.setPersonProperties({github_url:a})}};return(0,n.useEffect)((()=>(window.addEventListener("message",l),()=>{window.removeEventListener("message",l)})),[]),(0,i.jsx)(s.A,{repo:"glasskube/glasskube",repoId:"R_kgDOLDumDw",category:t,categoryId:a,mapping:"title",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",theme:o,lang:"en",loading:"lazy"})}function l(){return(0,i.jsx)(o,{category:"Blog",categoryId:"DIC_kwDOLDumD84CfCte"})}},5023:(e,t,a)=>{a.d(t,{A:()=>r});var n=a(5710),s=a(4848);function r(e){const{children:t,...a}=e;return(0,s.jsx)(n.A,{...a,children:t})}},2982:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});a(6540);var n=a(4164),s=a(7639),r=a(6644),i=a(8630),o=a(5023),l=a(4934),c=a(1141),d=a(4848);function m(e){const t=e;return(0,d.jsx)(c.A,{children:(0,d.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}var u=a(4636);function g(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,s.A)(),{blogDescription:n,blogTitle:i,permalink:o}=t,l="/"===o?a:i;return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(r.be,{title:l,description:n})})}function h(e){const{metadata:t,items:a,sidebar:n}=e;return(0,d.jsxs)(o.A,{sidebar:n,children:[(0,d.jsx)(u.A,{items:a,metadata:t}),(0,d.jsx)("div",{className:"container",style:{marginBottom:"40px"},children:(0,d.jsx)(l.A,{metadata:t})})]})}function p(e){return(0,d.jsxs)(r.e3,{className:(0,n.A)(i.G.wrapper.blogPages,i.G.page.blogListPage),children:[(0,d.jsx)(g,{...e}),(0,d.jsx)(m,{...e}),(0,d.jsx)(h,{...e})]})}},4131:(e,t,a)=>{a.d(t,{A:()=>d});a(6540);var n=a(4164),s=a(9101),r=a(4783),i=a(4848);function o(e){return e.href?(0,i.jsx)(r.A,{...e}):(0,i.jsx)(i.Fragment,{children:e.children})}function l(e){let{author:t,className:a}=e;const{name:s,title:r,url:l,imageURL:c,email:d}=t,m=l||d&&`mailto:${d}`||void 0;return(0,i.jsxs)("div",{className:(0,n.A)("avatar",a),children:[c&&(0,i.jsx)(o,{href:m,className:"avatar__photo-link",children:(0,i.jsx)("img",{className:"avatar__photo",src:c,alt:s})}),s&&(0,i.jsxs)("div",{className:"avatar__intro",children:[(0,i.jsx)("div",{className:"avatar__name",children:(0,i.jsx)(o,{href:m,children:(0,i.jsx)("span",{children:s})})}),r&&(0,i.jsx)("small",{className:"avatar__subtitle",children:r})]})]})}const c={authorCol:"authorCol_q4o9",imageOnlyAuthorRow:"imageOnlyAuthorRow_lXe7"};function d(e){let{className:t}=e;const{metadata:{authors:a},assets:r}=(0,s.e7)();return 0===a.length?null:(0,i.jsx)("div",{className:(0,n.A)(c.imageOnlyAuthorRow,t),children:a.map(((e,t)=>(0,i.jsx)("div",{children:(0,i.jsx)(l,{author:{...e,imageURL:r.authorsImageUrls[t]??e.imageURL}})},t)))})}},1385:(e,t,a)=>{a.d(t,{A:()=>g});a(6540);var n=a(4164),s=a(3230),r=a(7824),i=a(9101),o=a(9191);const l={container:"container_iJTo"};var c=a(4848);function d(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,r.W)();return t=>{const a=Math.ceil(t);return e(a,(0,s.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return(0,c.jsx)(c.Fragment,{children:a(t)})}function m(e){let{date:t,formattedDate:a}=e;return(0,c.jsx)("time",{dateTime:t,children:a})}function u(){return(0,c.jsx)(c.Fragment,{children:" \xb7 "})}function g(e){let{className:t}=e;const{metadata:a}=(0,i.e7)(),{date:s,readingTime:r}=a,g=(0,o.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,c.jsxs)("div",{className:(0,n.A)(l.container,t),children:[(0,c.jsx)(m,{date:s,formattedDate:(h=s,g.format(new Date(h)))}),void 0!==r&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(u,{}),(0,c.jsx)(d,{readingTime:r})]})]});var h}},5120:(e,t,a)=>{a.d(t,{A:()=>P});a(6540);var n=a(4164),s=a(9101);const r={title:"title_xvU1"};var i=a(4848);function o(e){let{className:t}=e;const{metadata:a,isBlogPostPage:o}=(0,s.e7)(),{title:l}=a,c=o?"h1":"h2";return(0,i.jsx)(c,{className:(0,n.A)(r.title,t),children:l})}var l=a(1385),c=a(4131);function d(){return(0,i.jsxs)("header",{className:"card__header",children:[(0,i.jsx)(o,{}),(0,i.jsx)(c.A,{}),(0,i.jsx)(l.A,{})]})}var m=a(4609),u=a(1882);function g(e){let{children:t,className:a}=e;const{isBlogPostPage:r}=(0,s.e7)();return r?(0,i.jsx)("div",{id:r?m.LU:void 0,className:(0,n.A)("markdown",a,"card__body"),children:(0,i.jsx)(u.A,{children:t})}):null}var h=a(8630),p=a(5659),x=a(1113),j=a(3230),f=a(4783);function v(){return(0,i.jsx)("b",{children:(0,i.jsx)(j.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function b(e){const{blogPostTitle:t,...a}=e;return(0,i.jsx)(f.A,{"aria-label":(0,j.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...a,children:(0,i.jsx)(v,{})})}var A=a(1852);function N(){const{metadata:e,isBlogPostPage:t}=(0,s.e7)(),{enableComments:a=!0}=e.frontMatter,{tags:r,title:o,editUrl:l,hasTruncateMarker:c,lastUpdatedBy:d,lastUpdatedAt:m}=e,u=!t&&c,g=r.length>0;if(!(g||u||l))return null;if(t){const e=!!(l||m||d);return(0,i.jsxs)("footer",{className:"docusaurus-mt-lg card__footer",children:[g&&(0,i.jsx)("div",{className:(0,n.A)("row","margin-top--sm",h.G.blog.blogFooterEditMetaRow),children:(0,i.jsx)("div",{className:"col",children:(0,i.jsx)(x.A,{tags:r})})}),e&&(0,i.jsx)(p.A,{className:(0,n.A)("margin-top--sm",h.G.blog.blogFooterEditMetaRow),editUrl:l,lastUpdatedAt:m,lastUpdatedBy:d}),a&&(0,i.jsx)(A.t2,{})]})}return(0,i.jsxs)("footer",{className:"row card__footer",children:[g&&(0,i.jsx)("div",{className:(0,n.A)("col",{"col--9":u}),children:(0,i.jsx)(x.A,{tags:r})}),u&&(0,i.jsx)("div",{className:(0,n.A)("col text--right",{"col--3":g}),children:(0,i.jsx)(b,{blogPostTitle:o,to:e.permalink})})]})}var _=a(8793),w=a(8180);const y={postCard:"postCard_SY0A",postLink:"postLink_s7gb",postCardHeader:"postCardHeader_IMRl",postCardBottom:"postCardBottom_neZV",readMore:"readMore_ZfTr"};function k(){return(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{style:{fontSize:"28px"},children:"Recent posts"}),(0,i.jsx)("div",{children:(0,i.jsx)(f.A,{style:{marginTop:"20px"},className:"button button--outline",to:"/blog",children:"View Recent posts"})})]})}function P(e){let{children:t,className:a}=e;const r=(0,s.e7)(),m=r.isBlogPostPage,u=m&&r.toc?.length>0;return m?(0,i.jsx)("main",{children:(0,i.jsx)("article",{className:(0,n.A)("container margin-vert--lg",a),children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col col--3 ",children:(0,i.jsx)(k,{})}),(0,i.jsxs)("div",{className:"col col--7",children:[(0,i.jsx)(d,{}),(0,i.jsx)(g,{children:t}),(0,i.jsx)(N,{})]}),u&&(0,i.jsx)("div",{className:"col col--2",children:(0,i.jsx)(_.A,{toc:r.toc})})]})})}):(0,i.jsx)(f.A,{to:r.metadata.permalink,className:y.postLink,children:(0,i.jsxs)("article",{className:(0,n.A)("card","shadow--tl",a,y.postCard),children:[(0,i.jsx)("img",{src:(0,w.Ay)(r.frontMatter.image),style:{objectFit:"cover",height:"200px"},alt:"article image"}),(0,i.jsxs)("header",{className:y.postCardHeader,children:[(0,i.jsx)(o,{}),(0,i.jsxs)("div",{className:y.postCardBottom,children:[(0,i.jsxs)("div",{children:[(0,i.jsx)(c.A,{}),(0,i.jsx)(l.A,{})]}),(0,i.jsxs)("div",{className:y.readMore,children:["Read more ","->"]})]})]})]})})}},4636:(e,t,a)=>{a.d(t,{A:()=>g});a(6540);var n=a(9101),s=a(5120);const r={container:"container_QxT1",metaContainer:"metaContainer_hslC",info:"info_zemv",image:"image_raOk",title:"title_XsWd",content:"content_kM7v"};var i=a(8180),o=a(4131),l=a(1385),c=a(4783),d=a(4848);function m(e){let{children:t}=e;const a=(0,n.e7)();return(0,d.jsxs)("div",{className:r.container,children:[(0,d.jsx)("img",{src:(0,i.Ay)(a.frontMatter.image),className:r.image,alt:""}),(0,d.jsxs)("div",{className:r.metaContainer,children:[(0,d.jsx)("h2",{className:r.title,children:a.metadata.title}),(0,d.jsxs)("div",{className:r.info,children:[(0,d.jsx)(o.A,{}),(0,d.jsx)(l.A,{})]}),(0,d.jsx)("div",{className:r.content,children:t}),(0,d.jsxs)(c.A,{to:a.metadata.permalink,children:["Read more ","->"]})]})]})}const u={latestContainer:"latestContainer_Pzy1",itemGrid:"itemGrid_YcSc",title:"title_igoh"};function g(e){let{items:t,metadata:a,component:r=s.A}=e;const[i,...o]=t,l=1===a?.page;return(0,d.jsxs)(d.Fragment,{children:[l&&(0,d.jsx)("div",{className:u.latestContainer,children:(0,d.jsxs)("div",{className:"container",children:[(0,d.jsx)("h1",{className:u.title,children:"Latest"}),(0,d.jsx)(n.in,{content:i.content,children:(0,d.jsx)(m,{children:i.content})},i.content.metadata.permalink)]})}),(0,d.jsx)("div",{className:"container margin-vert--lg",children:(0,d.jsx)("div",{className:u.itemGrid,children:(l?o:t).map((e=>{let{content:t}=e;return(0,d.jsx)(n.in,{content:t,children:(0,d.jsx)(r,{children:(0,d.jsx)(t,{})})},t.metadata.permalink)}))})})]})}},2171:(e,t,a)=>{a.d(t,{A:()=>r});var n=a(4848),s=a(6540);function r({id:e,host:t,repo:r,repoId:i,category:o,categoryId:l,mapping:c,term:d,strict:m,reactionsEnabled:u,emitMetadata:g,inputPosition:h,theme:p,lang:x,loading:j}){const[f,v]=(0,s.useState)(!1);return(0,s.useEffect)((()=>{f||(a.e(1135).then(a.bind(a,1135)),v(!0))}),[]),f?(0,n.jsx)("giscus-widget",{id:e,host:t,repo:r,repoid:i,category:o,categoryid:l,mapping:c,term:d,strict:m,reactionsenabled:u,emitmetadata:g,inputposition:h,theme:p,lang:x,loading:j}):null}}}]);