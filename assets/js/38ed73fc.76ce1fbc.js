"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9542],{3441:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var n=i(4848),s=i(8453);const a={},r="4.5 Multi-hop Architecture",c={id:"Databricks Certified Data Engineer Associate - Preparation/Incremental Data Processing/4.5 Multihop Architecture",title:"4.5 Multi-hop Architecture",description:"- [ ] We will talk about multi-hop architecture in the Lakehouse",source:"@site/docs/Databricks Certified Data Engineer Associate - Preparation/4. Incremental Data Processing/4.5 Multihop Architecture.md",sourceDirName:"Databricks Certified Data Engineer Associate - Preparation/4. Incremental Data Processing",slug:"/Databricks Certified Data Engineer Associate - Preparation/Incremental Data Processing/4.5 Multihop Architecture",permalink:"/docs/Databricks Certified Data Engineer Associate - Preparation/Incremental Data Processing/4.5 Multihop Architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Databricks Certified Data Engineer Associate - Preparation/4. Incremental Data Processing/4.5 Multihop Architecture.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"4.4 Auto Loader (Hands On)",permalink:"/docs/Databricks Certified Data Engineer Associate - Preparation/Incremental Data Processing/4.4 Auto Loader Hands On"},next:{title:"4.6 Multihop Architecture (Hands On)",permalink:"/docs/Databricks Certified Data Engineer Associate - Preparation/Incremental Data Processing/4.6 Multihop Architecture Hands On"}},l={},o=[{value:"What is a multi-hop architecture?",id:"what-is-a-multi-hop-architecture",level:2},{value:"Layers of a multi-hop architecture",id:"layers-of-a-multi-hop-architecture",level:2},{value:"Benefits with multi-hop architecture",id:"benefits-with-multi-hop-architecture",level:2}];function h(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",input:"input",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"45-multi-hop-architecture",children:"4.5 Multi-hop Architecture"}),"\n",(0,n.jsxs)(t.ul,{className:"contains-task-list",children:["\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",disabled:!0})," ","We will talk about multi-hop architecture in the Lakehouse",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"what-is-a-multi-hop-architecture",children:"What is a multi-hop architecture?"}),"\n",(0,n.jsxs)(t.ul,{className:"contains-task-list",children:["\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.input,{type:"checkbox",disabled:!0})," ","A ",(0,n.jsx)(t.strong,{children:"multi-hop"})," architecture, also known as ",(0,n.jsx)(t.strong,{children:"medallion"})," architecture, is a design pattern used to logically organize data in a multi-layered approach",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.input,{type:"checkbox",disabled:!0})," ","Its goal is to incrementally improve the structure and the quality of the data as it flows through each layer of the architecture",(0,n.jsx)("br",{})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"layers-of-a-multi-hop-architecture",children:"Layers of a multi-hop architecture"}),"\n",(0,n.jsxs)(t.ul,{className:"contains-task-list",children:["\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",disabled:!0})," ","Multi-hop architecture usually consists of 3 layers"]}),"\n"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"Bronze"})})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Bronze table contains raw data ingested from various sources"}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"Like JSON files, operational databases, or Kafka Stream, for example"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"Silver"})})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Silver tables provide a more refined view of our data"}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"For example, data can be cleaned and filtered at this level"})}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"We can also join fields from various bronze tables to enrich our silver records"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"Gold"})})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["The gold table provide ",(0,n.jsx)(t.strong,{children:"business-level aggregations"}),", often used for reporting and dashboarding or even for machine learning",(0,n.jsx)("br",{})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.ul,{className:"contains-task-list",children:["\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",disabled:!0})," ","With this architecture, we incrementally improve the structure and the quality of data as it flows through each layer"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"benefits-with-multi-hop-architecture",children:"Benefits with multi-hop architecture"}),"\n",(0,n.jsxs)(t.ul,{className:"contains-task-list",children:["\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.input,{type:"checkbox",disabled:!0})," ","It is a simple data model that is easy to understand and implement",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.input,{type:"checkbox",disabled:!0})," ","It enables incremental ETL, that is Extract, Transform and Load data incrementally",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.input,{type:"checkbox",disabled:!0})," ","It can combine streaming and batch workloads in the same pipeline"]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"Each stage can be configured as a batch or streaming job"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.input,{type:"checkbox",disabled:!0})," ","It can recreate your tables from raw data at any time"]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>c});var n=i(6540);const s={},a=n.createContext(s);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);