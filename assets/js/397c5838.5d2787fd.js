"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1095],{1442:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var n=t(4848),i=t(8453);const a={},r="2.1 Delta Lake",l={id:"Databricks Certified Data Engineer Associate - Preparation/Databricks Lakehouse Platform/2.1 Delta Lake",title:"2.1 Delta Lake",description:"What is Delta Lake?",source:"@site/docs/Databricks Certified Data Engineer Associate - Preparation/2. Databricks Lakehouse Platform/2.1 Delta Lake.md",sourceDirName:"Databricks Certified Data Engineer Associate - Preparation/2. Databricks Lakehouse Platform",slug:"/Databricks Certified Data Engineer Associate - Preparation/Databricks Lakehouse Platform/2.1 Delta Lake",permalink:"/docs/Databricks Certified Data Engineer Associate - Preparation/Databricks Lakehouse Platform/2.1 Delta Lake",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Databricks Certified Data Engineer Associate - Preparation/2. Databricks Lakehouse Platform/2.1 Delta Lake.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"1.9 Databricks Repos",permalink:"/docs/Databricks Certified Data Engineer Associate - Preparation/Introduction/1.9 Databricks Repos"},next:{title:"2.2 Understanding Delta Tables (HandsOn)",permalink:"/docs/Databricks Certified Data Engineer Associate - Preparation/Databricks Lakehouse Platform/2.2 Understanding Delta Tables"}},c={},o=[{value:"What is Delta Lake?",id:"what-is-delta-lake",level:2},{value:"What is the Delta Lake transaction log?",id:"what-is-the-delta-lake-transaction-log",level:2},{value:"Example of Delta Lake Transaction Logs",id:"example-of-delta-lake-transaction-logs",level:2},{value:"Scenario 1: Inserting new files",id:"scenario-1-inserting-new-files",level:3},{value:"Writer process",id:"writer-process",level:4},{value:"Reader process",id:"reader-process",level:4},{value:"Scenario 2: Updating existing files",id:"scenario-2-updating-existing-files",level:3},{value:"Writer process",id:"writer-process-1",level:4},{value:"Reader process",id:"reader-process-1",level:4},{value:"Scenario 3: Handling write and read simultaneously",id:"scenario-3-handling-write-and-read-simultaneously",level:3},{value:"Writer and Reader process",id:"writer-and-reader-process",level:4},{value:"Reader process",id:"reader-process-2",level:4},{value:"Writer process",id:"writer-process-2",level:4},{value:"Scenario 4: Handling errors when writing files",id:"scenario-4-handling-errors-when-writing-files",level:3},{value:"Writer process",id:"writer-process-3",level:4},{value:"Reader process",id:"reader-process-3",level:4},{value:"Delta Lake Advantages",id:"delta-lake-advantages",level:2}];function d(e){const s={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",input:"input",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"21-delta-lake",children:"2.1 Delta Lake"}),"\n",(0,n.jsx)(s.h2,{id:"what-is-delta-lake",children:"What is Delta Lake?"}),"\n",(0,n.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Delta Lake is an ",(0,n.jsx)(s.strong,{children:"open-source storage framework"})," that bring reliability to data lakes ",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Data lakes have many limitations, such as ",(0,n.jsx)(s.strong,{children:"data inconsistency"})," and ",(0,n.jsx)(s.strong,{children:"performance issues"})," ",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Delta lake technology helps overcoming these challenges ",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","It's a storage framework or a storage layer, but it not a storage format or a storage medium ",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","It enables building lakehouse architecture"]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsx)(s.p,{children:"Lakehouse is a platform that unifies both data warehouse and advanced analytics"})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Delta Lake is a component which is deployed on the cluster as part of the Databricks runtime ",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","If you are creating a Delta Lake table, it gets stored on the storage in one or more data files in ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"parquet"})})," format ",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Along with these files, Delta Lake stores a ",(0,n.jsx)(s.strong,{children:"transaction log"})," as well ",(0,n.jsx)("br",{})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"what-is-the-delta-lake-transaction-log",children:"What is the Delta Lake transaction log?"}),"\n",(0,n.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","The Delta Lake transaction log (also known as Delta Log) is ordered records of every transaction performed on the table since its creation.",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","It serves as a single source of truth"]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsx)(s.p,{children:"Every time you query the table, Spark checks this transaction log to retrieve the most recent version of the data"})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Each committed transaction is recorded in a JSON file"]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsxs)(s.p,{children:["It contains the ",(0,n.jsx)(s.strong,{children:"operation"})," that has been performed, whether, for example, it's an ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"INSERT"})})," or ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"UPDATE"})})," and the predicates such as ",(0,n.jsx)(s.strong,{children:"conditions"})," and ",(0,n.jsx)(s.strong,{children:"filters"})," used during this operation in addition to all the files that have been affected because of this operation"]})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"example-of-delta-lake-transaction-logs",children:"Example of Delta Lake Transaction Logs"}),"\n",(0,n.jsx)(s.h3,{id:"scenario-1-inserting-new-files",children:"Scenario 1: Inserting new files"}),"\n",(0,n.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","In this scenario we have a ",(0,n.jsx)(s.strong,{children:"writer"})," process and a ",(0,n.jsx)(s.strong,{children:"reader"})," process"]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"writer-process",children:"Writer process"}),"\n",(0,n.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Once the ",(0,n.jsx)(s.strong,{children:"writer"})," process starts, it stores the Delta Lake table in two data files in a ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"parquet"})})," format ",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","As soon as the ",(0,n.jsx)(s.strong,{children:"writer"})," process finishes writing, it adds the transaction log as ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"000.json"})})," into the ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"_delta_log"})})," directory"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"reader-process",children:"Reader process"}),"\n",(0,n.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","A ",(0,n.jsx)(s.strong,{children:"reader"})," process always starts by reading a transaction log"]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsxs)(s.p,{children:["In this case, it reads the ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"000.json"})})," transaction log that contains information of the ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"File1.parquet"})})," and ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"File2.parquet"})})]})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"scenario-2-updating-existing-files",children:"Scenario 2: Updating existing files"}),"\n",(0,n.jsx)(s.h4,{id:"writer-process-1",children:"Writer process"}),"\n",(0,n.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","In our second scenario, the ",(0,n.jsx)(s.strong,{children:"writer"})," process wants to update a record which presents in ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"File1.parquet"})}),", but in Delta Lake, instead of updating the record in the file itself, it will make a copy of this file and make the necessary updates in the new file called ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"File3.parquet"})}),(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","It then updates the log by writing a new JSON file. This new log file knows that ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"File1.parquet"})})," is no longer needed"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"reader-process-1",children:"Reader process"}),"\n",(0,n.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","The ",(0,n.jsx)(s.strong,{children:"reader"})," process reads the transaction log that tells that only ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"File2.parquet"})})," and ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"File3.parquet"})})," are part of the current table version so it can start reading them"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"scenario-3-handling-write-and-read-simultaneously",children:"Scenario 3: Handling write and read simultaneously"}),"\n",(0,n.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Let us see one more scenario. Here, both processes want to work at the same time ",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"writer-and-reader-process",children:"Writer and Reader process"}),"\n",(0,n.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","The ",(0,n.jsx)(s.strong,{children:"writer"})," process starts writing the ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"File4.parquet"})}),". On the other hand, the ",(0,n.jsx)(s.strong,{children:"reader"})," process reads the transaction log that only has information about ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"File2.parquet"})})," and ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"File3.parquet"})})," and not ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"File4.parquet"})})," as it is not fully written yet ",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","It starts reading those two files, ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"File2.parquet"})})," and ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"File3.parquet"})})," which represent the most recent data at the moment"]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"Delta Lake guarantees that you will always get the most recent version of the data"})})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"reader-process-2",children:"Reader process"}),"\n",(0,n.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Your ",(0,n.jsx)(s.strong,{children:"read"})," operation will never have a deadlock state or conflicts with any ongoing operation on the table ",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"writer-process-2",children:"Writer process"}),"\n",(0,n.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","The ",(0,n.jsx)(s.strong,{children:"writer"})," process finishes and it adds a new file to the log"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"scenario-4-handling-errors-when-writing-files",children:"Scenario 4: Handling errors when writing files"}),"\n",(0,n.jsx)(s.h4,{id:"writer-process-3",children:"Writer process"}),"\n",(0,n.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","The ",(0,n.jsx)(s.strong,{children:"writer"})," process starts writing the ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"File5.parquet"})})," to the lake, but this time there is an error in the job, which leads to adding an incomplete file ",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Because of this failure, Delta Lake module does not write any information to the log ",(0,n.jsx)("br",{})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"reader-process-3",children:"Reader process"}),"\n",(0,n.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","The ",(0,n.jsx)(s.strong,{children:"reader"})," process reads the transaction log that has no information about that incomplete ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"File5.parquet"})})]}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsxs)(s.p,{children:["The reader process will read only ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"File2.parquet"})}),", ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"File3.parquet"})}),", and ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"File4.parquet"})})]})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","As you can see Delta Lake guarantees that you will never read dirty data"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"delta-lake-advantages",children:"Delta Lake Advantages"}),"\n",(0,n.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","The transaction log allows Delta Lake to perform ",(0,n.jsx)(s.strong,{children:"ACID"})," transactions on data lakes ",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","It allows also to handle scalable metadata ",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","This log also provides the full audit trail of all the changes that have happened on the table ",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","The underlying file format for Delta is nothing but ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:".parquet"})})," and ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:".json"})})," format ",(0,n.jsx)("br",{})]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>l});var n=t(6540);const i={},a=n.createContext(i);function r(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);