"use strict";(self.webpackChunkglasskube_docs=self.webpackChunkglasskube_docs||[]).push([[8296],{4740:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var n=s(4848),a=s(8453),o=s(4401);s(7738),s(9489),s(7227);const i={slug:"future-of-devops",title:"Why nobody grows up wanting to be a DevOps engineer",description:"How did DevOps start, what were it's initial promises and where are we going?",image:"https://github.com/glasskube/glasskube/assets/38757612/54324401-9b0f-4faf-a7c1-beea346057de",authors:["jpage"],tags:["glasskube"]},r=void 0,l={permalink:"/TP2024-T5/blog/future-of-devops",source:"@site/blog/2024-05-20-devops/index.mdx",title:"Why nobody grows up wanting to be a DevOps engineer",description:"How did DevOps start, what were it's initial promises and where are we going?",date:"2024-05-20T00:00:00.000Z",tags:[{inline:!0,label:"glasskube",permalink:"/TP2024-T5/blog/tags/glasskube"}],readingTime:12.09,hasTruncateMarker:!0,authors:[{name:"Jake Page",title:"Developer Relations Engineer",url:"https://github.com/jakepage91",imageURL:"https://avatars.githubusercontent.com/jakepage91",key:"jpage",page:null}],frontMatter:{slug:"future-of-devops",title:"Why nobody grows up wanting to be a DevOps engineer",description:"How did DevOps start, what were it's initial promises and where are we going?",image:"https://github.com/glasskube/glasskube/assets/38757612/54324401-9b0f-4faf-a7c1-beea346057de",authors:["jpage"],tags:["glasskube"]},unlisted:!1,prevItem:{title:"Log and trace management made easy. Quickwit Integration via Glasskube",permalink:"/TP2024-T5/blog/quickwit"},nextItem:{title:"Glasskube Beta is live.",permalink:"/TP2024-T5/blog/beta-launch"}},d={authorsImageUrls:[void 0]},h=[{value:"How DevOps Started and it\u2019s original Promise",id:"how-devops-started-and-its-original-promise",level:2},{value:"Have we delivered on the promise?",id:"have-we-delivered-on-the-promise",level:2},{value:"How do people end up in DevOps in the first place?",id:"how-do-people-end-up-in-devops-in-the-first-place",level:2},{value:"The case for generalists, tinkerers, and the concept of glue",id:"the-case-for-generalists-tinkerers-and-the-concept-of-glue",level:2},{value:"Generalists",id:"generalists",level:3},{value:"Tinkerers",id:"tinkerers",level:3},{value:"Glue",id:"glue",level:3},{value:"The current state: Platforms vs DevOps",id:"the-current-state-platforms-vs-devops",level:2},{value:"Future predictions",id:"future-predictions",level:2},{value:"A certain type of platform will win out",id:"a-certain-type-of-platform-will-win-out",level:3},{value:"A second wave of DevOps might be one the way",id:"a-second-wave-of-devops-might-be-one-the-way",level:3},{value:"The more generalists and tinkerers, the better",id:"the-more-generalists-and-tinkerers-the-better",level:3},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/glasskube/glasskube/assets/38757612/54324401-9b0f-4faf-a7c1-beea346057de",alt:"article-thumbnail"})}),"\n",(0,n.jsxs)(t.p,{children:["When I look at younger generations that didn\u2019t grow up largely offline like I did, I feel slightly sorry for them. I\u2019m in my mid-thirties, so I know what it was like to grow up tapping into ",(0,n.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Dial-up_Internet_access",children:"dial-up"})," internet as quickly as possible (to avoid blocking the phone line for too long) to access a couple of Wikipedia pages to do my homework and not feel like anything was missing. By personally living through the ascendence of the personal computer we all have in our pockets I feel, not immune, but better equipped to use it to my advantage and not fall victim to its false promises of limitless bliss and fulfillment simply for being more \u201c",(0,n.jsx)(t.a,{href:"https://www.newyorker.com/news/the-new-yorker-interview/jonathan-haidt-wants-you-to-take-away-your-kids-phone",children:"connected"}),"\u201d."]}),"\n",(0,n.jsxs)(t.p,{children:["On the other hand, there is another revolution that ",(0,n.jsx)(t.strong,{children:"I was not directly a part of"}),", the revolution that happened in the IT departments worldwide across the 00s in the aftermath of the now-legendary ",(0,n.jsx)(t.a,{href:"https://www.youtube.com/watch?v=LdOe18KhtT4",children:"Flickr"})," talk at the O\u2019Reilly Velocity conference in 2009. An event that put ",(0,n.jsx)(t.code,{children:"DevOps"})," on the map and showed a future that could pivot from the siloed, slow-moving ",(0,n.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/ITIL",children:"ITIL"}),"-based organization to something better."]}),"\n",(0,n.jsxs)(t.p,{children:["Since I recently switched careers from teaching to tech less than 5 years ago. I don\u2019t know what it\u2019s like to work in any other professional environment that doesn\u2019t live and breathe the practices imparted in that seminal Flickr talk. Agile methodologies and the still ",(0,n.jsx)(t.a,{href:"https://www.reddit.com/r/devops/comments/812527/can_someone_explain_what_devops_is/",children:"difficult-to-pin-down"})," definition of \u201cDevOps\u201c is a status quo I\u2019ve never had to question."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"But I question it now"}),". If I argue that up-and-coming generations are missing fundamental perspective and have a lot to gain from knowing what it was like to live without smartphones. ",(0,n.jsx)(t.strong,{children:"I have to apply the same logic to myself and make a concerted effort to understand what DevOps really is? What did it emerge as a response to? What were its initial promises and have those promises been delivered? How and why do people end up being DevOps engineers? And what will it mean to be a DevOps engineer in the future?"})]}),"\n",(0,n.jsx)(t.h2,{id:"how-devops-started-and-its-original-promise",children:"How DevOps Started and it\u2019s original Promise"}),"\n",(0,n.jsxs)(t.p,{children:["I sometimes wonder what it must have been like back in the days when devs had to put in infrastructure provisioning request forms and wait days or weeks to be served. I\u2019ve heard the stories of what stereotypical Ops people of that culture were like, finger-pointing grumps whose favorite words were ",(0,n.jsx)(t.code,{children:"\u201cNO\u201c"})," and ",(0,n.jsx)(t.code,{children:"\u201cWhere\u2019s my pager?\u201c"})," ."]}),"\n",(0,n.jsxs)(t.p,{children:["John Allspaw and Paul Hammond, as well as many attendees of their famous velocity talk, ",(0,n.jsx)(t.a,{href:"https://www.youtube.com/watch?v=LdOe18KhtT4",children:'\u201c10+ Deploys Per Day: Dev and Ops Cooperation at Flickr,"'})," didn\u2019t have to wonder, the common friction between devs and ops teams must have been all too vivid to them."]}),"\n",(0,n.jsxs)(t.p,{children:["After watching the talk a handful of times over the years, a few things stand out to me. The first, is that I was unaware that talks back then contained ",(0,n.jsx)(t.strong,{children:"so much swearing"})," or maybe it\u2019s just Mr. Allspaw. Another was the key message the speakers put forth, that both Dev and Ops teams effectively shared the same objective. ",(0,n.jsx)(t.strong,{children:"To enable the business."})]}),"\n",(0,n.jsx)(t.p,{children:"They go on to talk about the tools and cultural traits organizations might want to adopt to achieve multiple deployments to production a day. They spoke of automated infrastructure, feature flagging, shared alerting and monitoring, all coalescing around a renewed collaborative culture that valued trust and a healthier attitude towards system failures and blame avoidance above all else."}),"\n",(0,n.jsxs)(t.p,{children:["The shape of what DevOps would come to mean in the following years was further crystalized in large part by the hugely influential ",(0,n.jsx)(t.a,{href:"https://itrevolution.com/product/the-devops-handbook-second-edition/",children:"DevOps Handbook"})," and ",(0,n.jsx)(t.a,{href:"https://sre.google/sre-book/table-of-contents/",children:"Site Reliebility Engineering"})," books."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/yb33ik288tctk2v22jf6.png",alt:"the-main-books"})}),"\n",(0,n.jsx)(t.p,{children:"The opening chapter of the former describes in few words what a DevOps way of doing things aspired to unlock"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"\u201c[Multiple team working together to] enable the fast flow of planned work into production (e.g., performing tens, hundreds, or even thousands of code deploys per day), while achieving world-class stability, availability, and security.\u201d"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"have-we-delivered-on-the-promise",children:"Have we delivered on the promise?"}),"\n",(0,n.jsxs)(t.p,{children:["The feeling of walking on the shoulders of giants comes to mind when I think of the ideas presented in that Flickr talk. Those ideas that must have been so revolutionary to many are the only professional reality I've ever known. So regardless if improvements could be made to current DevOps methodologies, best practices and tooling, I for one am grateful for all the progress that has been achieved so far. Anyone I ask who was configuring servers or hacking before 2009 corroborates that ",(0,n.jsx)(t.strong,{children:"things are better now than they were back then."})]}),"\n",(0,n.jsxs)(t.p,{children:["Having said that, are most companies shipping like crazy, while achieving world-class stability, availability, and security? ",(0,n.jsx)(t.strong,{children:"Largely no."}),"\r\nThe DevOps world even with a massive ",(0,n.jsx)(t.a,{href:"https://landscape.cncf.io/",children:"toolbox full of modern tooling"})," available, still runs off of the exact same framework that was proposed in that talk."]}),"\n",(0,n.jsxs)(t.p,{children:["In the words of ",(0,n.jsx)(t.a,{href:"https://twitter.com/adamhjk",children:"Adam Jacob"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"\u201cThe problem isn\u2019t that we haven\u2019t optimized each individual part of the system enough. We\u2019ve built more efficient tooling at every step. But the way the whole system is put together? The experience of using it? That\u2019s basically identical to how it was in 2009, and it\u2019s the reason we\u2019re stuck.\u201c."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Siloes still exist, handoffs are error-prone and collaboration on many occasions is quite forced and rigid."})," Anybody who has worked as a DevOps engineer for any length of time will have a long list of things they think their organization gets wrong and will often have equally low amount of faith in their organization\u2019s capacity to do anything about it.\r\nAdam, a veteran DevOps practitioner, has even called for ",(0,n.jsx)(t.a,{href:"https://www.systeminit.com/blog-second-wave-devops",children:"a second wave DevOps"})," which goes further than trivially improving tools and invites us to think outside of the box, challenge the established rules, and see what\u2019s on the other side."]}),"\n",(0,n.jsx)(t.p,{children:"Speaking of DevOps practitioners, who are these people? How and why does one become one?"}),"\n",(0,n.jsx)(t.h2,{id:"how-do-people-end-up-in-devops-in-the-first-place",children:"How do people end up in DevOps in the first place?"}),"\n",(0,n.jsxs)(t.p,{children:["In just 15 years, the technology industry has evolved significantly. Job titles like ",(0,n.jsx)(t.strong,{children:"DevOps engineers, SREs, and Platform engineers"})," are now common on job boards and are hot items for tech recruiters. However, outside the IT world, these terms are still largely unknown. Despite its rapid growth, DevOps isn\u2019t yet a profession people aspire to join; instead, it\u2019s something many simply ",(0,n.jsx)(t.strong,{children:'"fall into"'}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["I stumbled into DevOps after a conversation with my cousin, who suggested it following my decision against a strict network engineering path after earning a CCNA certificate. Curious about who ends up in DevOps and if future engineers might choose it as their first career option, I asked the ",(0,n.jsx)(t.a,{href:"https://www.reddit.com/r/devops/comments/1c24rbg/will_people_ever_grow_up_wanting_to_be_a_devops/",children:"/devops"})," subreddit and was surprised by the variety of opinions."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"I found some fellow \u201cI just fell into it\u201c people:"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zaafmdejwi6k9aus874r.png",alt:"fell-into-it"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Others are moderately bullish on newer generations:"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ouj4w92mly7j2jbi20m2.png",alt:"optimistic-devops"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/px309e69lvjygl8vnobz.png",alt:"DevOps-chooses-you"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Others not so optimistic:"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lnzjwtczbg9zl8wh9zru.png",alt:"I-hope-not"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/u3z44eoh0yqgsaqyh8mf.png",alt:"kids-aspire"})}),"\n",(0,n.jsxs)(t.p,{children:["Even though the definition of DevOps is still highly ",(0,n.jsx)(t.a,{href:"https://www.reddit.com/r/devops/comments/vfxmxv/what_exactly_is_devops/",children:"disputed"}),", it seems unlikely to ever position itself as a profession students hear about at job fairs or see permanently added to university curriculums. This might be because we tend to imagine ourselves excelling in specific areas, believing that specialization increases our chances of success."]}),"\n",(0,n.jsx)(t.p,{children:"When I was growing up, I fantasized about being the lead guitarist in a famous band, with god-level shredding abilities. I wasn't dreaming about being reasonably good at playing all the instruments."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"In DevOps, there are no guitar solos."})," To excel, you need to be familiar with a long list of tools, languages, frameworks, hyperscalers, and processes. The best DevOps engineers are generalists at heart. This modular, Lego-like nature of the work and experience might make DevOps less popular outside of IT departments."]}),"\n",(0,n.jsx)(t.h2,{id:"the-case-for-generalists-tinkerers-and-the-concept-of-glue",children:"The case for generalists, tinkerers, and the concept of glue"}),"\n",(0,n.jsx)(t.p,{children:"It\u2019s impossible to attempt to form a non-subjective profile of what traits a DevOps practitioner should have but in my short experience and what I\u2019ve learned from conversations with more experience individuals than I, a few traits emerge."}),"\n",(0,n.jsx)(t.h3,{id:"generalists",children:"Generalists"}),"\n",(0,n.jsxs)(t.p,{children:["Have you ever read a \u201c",(0,n.jsx)(t.a,{href:"https://www.simplilearn.com/tutorials/devops-tutorial/how-to-become-devops-engineer",children:"How to land a job in DevOps"}),"\u201c guide? Remember the knowledge requirements section? Linux, Docker, CI/CD, Git, Hypersclaer of choice, Networking etc. The list goes on usually in the desired experience section of DevOps job requirements."]}),"\n",(0,n.jsx)(t.p,{children:"If you\u2019ve interviewed for roles such as developer or product design roles you will more than likely have to show a portfolio at some stage of the process. This is rarely the case in DevOps interviews. I can\u2019t think of one person who has assembled and updated a DevOps portfolio on a regular basis? The modular and distributed systems-building nature of DevOps roles just doesn\u2019t lend itself well well-curated displays in a portfolio."}),"\n",(0,n.jsx)(t.p,{children:"As someone who was bored out of his brain teaching high school-level English for seven years, I naturally gravitated towards DevOps, a field requiring me to learn many tools and concepts and piece them together collaboratively. Not specializing deeply in any one concept but refining the skill of quickly learning new things is the callus I developed. Generalists who thrive in such environments fit right in."}),"\n",(0,n.jsx)(t.h3,{id:"tinkerers",children:"Tinkerers"}),"\n",(0,n.jsxs)(t.p,{children:["People who do well in DevOps might think of themselves as ",(0,n.jsx)(t.a,{href:"https://www.reddit.com/r/devops/comments/1cr1ho6/hot_take_were_all_just_tinkerers/",children:"tinkerers"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/odqy1j4yuwc1anaioe69.png",alt:"tinkerer"})}),"\n",(0,n.jsx)(t.p,{children:"I love this idea, and it fits many DevOps engineers I've met. Being interested in learning how things work simply for the knowledge of it is a common trait among the DevOps mentors I\u2019ve had. Sure, spending the weekend installing a beefier switch in your home lab or rendering new mini figurines on your 3D printer doesn't directly show DevOps skills, but this background knowledge can indicate potential success in DevOps more than certificates can."}),"\n",(0,n.jsx)(t.h3,{id:"glue",children:"Glue"}),"\n",(0,n.jsxs)(t.p,{children:["Much of the work in complex systems can go under the radar since it\u2019s hard to plan or predict. Since DevOps involves weaving tools together to build a platform or delivery system, ",(0,n.jsx)(t.strong,{children:"a lot of glue is needed"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Processes must be put in place and automated to keep up with technical debt and maintenance work that accompanies every tool in a tech stack. Individuals who can naturally and often thanklessly act as the glue, connecting disparate parts of the system through automation, communication, or improving repetitive processes, are instrumental to organizational success. This skill isn't something you list on your CV, but combined with the curiosity of a tinkerer and the openness of a generalist, it's a potent combination."}),"\n",(0,n.jsx)(t.h2,{id:"the-current-state-platforms-vs-devops",children:"The current state: Platforms vs DevOps"}),"\n",(0,n.jsxs)(t.p,{children:["A ",(0,n.jsx)(t.a,{href:"https://www.reddit.com/r/devops/comments/17lz167/devops_vs_platform_engineering_i_still_struggle/",children:"false dichotomy"})," often arises in these discussions usually for marketing reasons: that DevOps is dead and platforms are the future. Platform engineers aim to give developers autonomy over traditionally Ops-related components (k8s, IaC components, IAM) without direct interaction, allowing developers to self-serve and be independent."]}),"\n",(0,n.jsxs)(t.p,{children:["A well-designed, context-specific platform can increase developer velocity. According to the ",(0,n.jsx)(t.a,{href:"https://www.puppet.com/resources/state-of-platform-engineering",children:"2023 Puppet State of DevOps report"}),", over two-thirds (68%) of respondents saw improved development ",(0,n.jsx)(t.strong,{children:"velocity"})," after adopting platform engineering. However, velocity shouldn't be the only metric. As ",(0,n.jsx)(t.a,{href:"https://www.reddit.com/r/devops/comments/16ipm9h/comment/k0ly9uq/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button",children:"georgouslyhumble"})," points out on Reddit, ",(0,n.jsx)(t.strong,{children:"sometimes the goal is to maintain existing velocity while meeting new organizational requirements"}),". For instance, a logging sidecar can standardize log collection without changing developer velocity, enhancing the platform to meet increased company requests."]}),"\n",(0,n.jsx)(t.p,{children:"Ops work remains complex and dynamic, and skilled Ops personnel are essential above a certain threshold of complexity. Platforms enable developers but notice that they don't necessarily reduce silos or integrate Dev and Ops teams more closely."}),"\n",(0,n.jsxs)(t.p,{children:["Teams are rightly cautious when adding new tools to their stack because new tools often introduce introduce maintenance and upkeep overhead that quickly stacks up. Tools like ",(0,n.jsx)(t.a,{href:"https://github.com/glasskube/glasskube",children:"Glasskube"}),", which ",(0,n.jsx)(t.strong,{children:"reduce operational overhead, are essential"}),". These are the tools we need more of to create robust and efficient DevOps platforms for the future."]}),"\n",(0,n.jsx)(t.h2,{id:"future-predictions",children:"Future predictions"}),"\n",(0,n.jsx)(t.h3,{id:"a-certain-type-of-platform-will-win-out",children:"A certain type of platform will win out"}),"\n",(0,n.jsxs)(t.p,{children:["The systems, platforms or methods of working that ",(0,n.jsx)(t.strong,{children:"will win out will not have to \u201cteach\u201c its users how to work and collaborate together."})," A future system that delivers the incredible possibilities of endless software shipping without compromising security and stability will only be possible if it makes team collaboration and cooperation the easiest, most intuitive, and most natural way of working while abstracting the work that neither devs nor ops are excited to do."]}),"\n",(0,n.jsx)(t.p,{children:"To create it though we are going to have to think outside of the box."}),"\n",(0,n.jsx)(t.h3,{id:"a-second-wave-of-devops-might-be-one-the-way",children:"A second wave of DevOps might be one the way"}),"\n",(0,n.jsxs)(t.p,{children:["Thankfully there are many restless and nonconforming people who contribute to the constant improvement of methodologies, processes, and tooling in the DevOps space.\r\nSome might say that a formal ",(0,n.jsx)(t.a,{href:"https://www.systeminit.com/blog-second-wave-devops",children:"movement"})," of rethinking what DevOps could be is already emerging and that\u2019s pretty exciting."]}),"\n",(0,n.jsx)(t.h3,{id:"the-more-generalists-and-tinkerers-the-better",children:"The more generalists and tinkerers, the better"}),"\n",(0,n.jsx)(t.p,{children:"The best-equipped individuals to keep connecting the puzzle pieces, close feedback loops, and rethink lousy ideas are those who are not afraid to trade deep specialization for professional genaralization. Those who dare to venture out and learn on the fly by tinkering, testing, and asking questions along the way are the ones who will keep the figurative ship afloat as it moves faster and faster towards engineering excellence."}),"\n",(0,n.jsx)(t.p,{children:"How to find enough of these people is another question."}),"\n",(0,n.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,n.jsx)(t.p,{children:"It looks like I'm no closer to knowing why people don't grow up wanting to be DevOps engineers, perhaps it's a blend of still being a relatively new field coupled with the fact that generalists aren't usually know as the coolest kids on the block."}),"\n",(0,n.jsx)(t.p,{children:"Looking ahead to the next wave of talent, whether they consciously choose or stumble into DevOps roles, one thing is certain: understanding the field's history is key. It's the only way future engineers can develop the ability to identity the gulf between the current state and the aspirational future of what could be. By neglecting this gap, the status quo will prevail and we will be destined to stagnant mediocrity."}),"\n",(0,n.jsxs)(t.p,{children:["While it's undeniable that the tech landscape has vastly improved since the pre-DevOps era, it's equally evident that ",(0,n.jsx)(t.strong,{children:"DevOps is still finding its footing 15 years in."})]}),"\n",(0,n.jsx)(t.p,{children:'Seasoned professionals need to keep a keen eye to identify and encourage the young tinkerers, generalists, and "glue people" around them to not worry about chasing certain titles but rather help redefine and **evolve DevOps into something that delivers on the original aspirations of 2009.'}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsxs)(t.p,{children:["If you like this sort of content and would like to see more of it, please consider supporting us by giving us a Star on ",(0,n.jsx)(t.a,{href:"https://github.com/glasskube/glasskube",children:"GitHub"})," \ud83d\ude4f\r\n",(0,n.jsx)(t.a,{href:"https://github.com/glasskube/glasskube",children:(0,n.jsx)(t.img,{src:"https://github.com/glasskube/glasskube/assets/38757612/05a03edf-7d6a-48fd-9b24-598abcfd1e9a",alt:"cats-like--github-stars"})})]}),"\n",(0,n.jsx)("div",{style:{display:"flex",justifyContent:"right"},children:(0,n.jsx)(o.A,{href:"https://github.com/glasskube/glasskube"})})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},7738:(e,t,s)=>{s.d(t,{Ay:()=>d,RM:()=>r});var n=s(4848),a=s(8453),o=s(9489),i=s(7227);const r=[];function l(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,a.R)(),...e.components},{Details:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.A,{groupId:"operating-systems",children:[(0,n.jsxs)(i.A,{value:"mac",label:"macOS",children:[(0,n.jsxs)(t.p,{children:["On macOS, you can use ",(0,n.jsx)(t.a,{href:"https://brew.sh/",children:"Homebrew"})," to install and update Glasskube."]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"brew install glasskube/tap/glasskube\n"})})]}),(0,n.jsxs)(i.A,{value:"linux",label:"Linux",children:[(0,n.jsx)(t.p,{children:"You can install Glasskube using one of the package managers below."}),(0,n.jsxs)(s,{children:[(0,n.jsx)("summary",{children:"RPM-based installation (RedHat/CentOS/Fedora)"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"dnf install https://releases.dl.glasskube.dev/glasskube_v0.24.0_amd64.rpm\n"})})]}),(0,n.jsxs)(s,{children:[(0,n.jsx)("summary",{children:"DEB-based installation (Ubuntu/Debian)"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"curl -LO https://releases.dl.glasskube.dev/glasskube_v0.24.0_amd64.deb\r\nsudo dpkg -i glasskube_v0.24.0_amd64.deb\n"})})]}),(0,n.jsxs)(s,{children:[(0,n.jsx)("summary",{children:"APK-based installation (Alpine)"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"curl -LO https://releases.dl.glasskube.dev/glasskube_v0.24.0_amd64.apk\r\napk add --allow-untrusted glasskube_v0.24.0_amd64.apk\n"})})]}),(0,n.jsxs)(t.p,{children:["If you are using a distribution that does not use one of the package managers above, or require a 32-bit binary,\r\ncheck out additional download options attached to our ",(0,n.jsx)(t.a,{href:"https://github.com/glasskube/glasskube/releases/latest",children:"latest release"}),"."]})]}),(0,n.jsx)(i.A,{value:"win",label:"Windows",children:(0,n.jsxs)(t.p,{children:["Download the ",(0,n.jsx)(t.a,{href:"https://releases.dl.glasskube.dev/glasskube_v0.24.0_windows_x86_64.zip",children:"windows archive"})," from our\r\nlatest ",(0,n.jsx)(t.a,{href:"https://github.com/glasskube/glasskube/releases/latest",children:"Release"})," and unpack it using Windows Explorer."]})}),(0,n.jsxs)(i.A,{value:"nixos",label:"NixOS/Nixpkgs",children:[(0,n.jsxs)(t.p,{children:["You can either use the package temporarily in a ",(0,n.jsx)("b",{children:"nix-shell"}),":"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"nix-shell -p glasskube\n"})}),(0,n.jsxs)(t.p,{children:["Or install it globally by adding ",(0,n.jsx)(t.code,{children:"pkgs.glasskube"})," to your ",(0,n.jsx)(t.code,{children:"environment.systemPackages"}),"."]})]})]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsxs)(t.p,{children:["After installing Glasskube on your local machine, make sure to install the necessary components in your Kubernetes cluster by running ",(0,n.jsx)(t.code,{children:"glasskube bootstrap"}),".\r\nFor more information, check out our ",(0,n.jsx)(t.a,{href:"/docs/getting-started/bootstrap",children:"bootstrap guide"}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},7227:(e,t,s)=>{s.d(t,{A:()=>i});s(6540);var n=s(4164);const a={tabItem:"tabItem_Ymn6"};var o=s(4848);function i(e){let{children:t,hidden:s,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,i),hidden:s,children:t})}},9489:(e,t,s)=>{s.d(t,{A:()=>x});var n=s(6540),a=s(4164),o=s(4245),i=s(6347),r=s(6494),l=s(2814),d=s(5167),h=s(9900);function c(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:s}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return c(e).map((e=>{let{props:{value:t,label:s,attributes:n,default:a}}=e;return{value:t,label:s,attributes:n,default:a}}))}(s);return function(e){const t=(0,d.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,s])}function p(e){let{value:t,tabValues:s}=e;return s.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:s}=e;const a=(0,i.W6)(),o=function(e){let{queryString:t=!1,groupId:s}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:t,groupId:s});return[(0,l.aZ)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function m(e){const{defaultValue:t,queryString:s=!1,groupId:a}=e,o=u(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=s.find((e=>e.default))??s[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[d,c]=g({queryString:s,groupId:a}),[m,f]=function(e){let{groupId:t}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,h.Dv)(s);return[a,(0,n.useCallback)((e=>{s&&o.set(e)}),[s,o])]}({groupId:a}),v=(()=>{const e=d??m;return p({value:e,tabValues:o})?e:null})();(0,r.A)((()=>{v&&l(v)}),[v]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),f(e)}),[c,f,o]),tabValues:o}}var f=s(1062);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var w=s(4848);function b(e){let{className:t,block:s,selectedValue:n,selectValue:i,tabValues:r}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.a_)(),h=e=>{const t=e.currentTarget,s=l.indexOf(t),a=r[s].value;a!==n&&(d(t),i(a))},c=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const s=l.indexOf(e.currentTarget)+1;t=l[s]??l[0];break}case"ArrowLeft":{const s=l.indexOf(e.currentTarget)-1;t=l[s]??l[l.length-1];break}}t?.focus()};return(0,w.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":s},t),children:r.map((e=>{let{value:t,label:s,attributes:o}=e;return(0,w.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:c,onClick:h,...o,className:(0,a.A)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":n===t}),children:s??t},t)}))})}function y(e){let{lazy:t,children:s,selectedValue:o}=e;const i=(Array.isArray(s)?s:[s]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===o));return e?(0,n.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,w.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function k(e){const t=m(e);return(0,w.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,w.jsx)(b,{...t,...e}),(0,w.jsx)(y,{...t,...e})]})}function x(e){const t=(0,f.A)();return(0,w.jsx)(k,{...e,children:c(e.children)},String(t))}},4401:(e,t,s)=>{s.d(t,{A:()=>o});s(6540);var n=s(72),a=s(4848);const o=e=>{let{href:t,...s}=e;return(0,a.jsx)(n.A,{href:t,"data-color-scheme":"no-preference: light; light: light; dark: light;","data-icon":"octicon-star","data-size":"large","data-show-count":"true","aria-label":`Star ${t} on GitHub`,...s,children:"Star"})}}}]);