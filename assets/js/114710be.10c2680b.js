"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2598],{9109:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>o});var t=n(4848),a=n(8453);const i={},l="2.2 Understanding Delta Tables (Hands On)",r={id:"Databricks Certified Data Engineer Associate - Preparation/Databricks Lakehouse Platform/2.2 Understanding Delta Tables",title:"2.2 Understanding Delta Tables (Hands On)",description:"Introduction",source:"@site/docs/Databricks Certified Data Engineer Associate - Preparation/2. Databricks Lakehouse Platform/2.2 Understanding Delta Tables.md",sourceDirName:"Databricks Certified Data Engineer Associate - Preparation/2. Databricks Lakehouse Platform",slug:"/Databricks Certified Data Engineer Associate - Preparation/Databricks Lakehouse Platform/2.2 Understanding Delta Tables",permalink:"/docs/Databricks Certified Data Engineer Associate - Preparation/Databricks Lakehouse Platform/2.2 Understanding Delta Tables",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Databricks Certified Data Engineer Associate - Preparation/2. Databricks Lakehouse Platform/2.2 Understanding Delta Tables.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"2.1 Delta Lake",permalink:"/docs/Databricks Certified Data Engineer Associate - Preparation/Databricks Lakehouse Platform/2.1 Delta Lake"},next:{title:"2.3 Advanced Delta Lake Features",permalink:"/docs/Databricks Certified Data Engineer Associate - Preparation/Databricks Lakehouse Platform/2.3 Advanced Delta Lake Features"}},c={},o=[{value:"Introduction",id:"introduction",level:2},{value:"Create an empty delta lake table",id:"create-an-empty-delta-lake-table",level:2},{value:"View the delta table inside the Data tab",id:"view-the-delta-table-inside-the-data-tab",level:2},{value:"Insert some records into the delta table",id:"insert-some-records-into-the-delta-table",level:2},{value:"How to view metadata information about the newly created table",id:"how-to-view-metadata-information-about-the-newly-created-table",level:2},{value:"How to explore the files inside the table location",id:"how-to-explore-the-files-inside-the-table-location",level:2}];function d(e){const s={admonition:"admonition",code:"code",h1:"h1",h2:"h2",input:"input",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"22-understanding-delta-tables-hands-on",children:"2.2 Understanding Delta Tables (Hands On)"}),"\n",(0,t.jsx)(s.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","In this notebook, we will work with Delta Lake tables ",(0,t.jsx)("br",{})]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"create-an-empty-delta-lake-table",children:"Create an empty delta lake table"}),"\n",(0,t.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Let us first create an empty Delta Lake table ",(0,t.jsx)("br",{})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Like in SQL, you just need a ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"CREATE TABLE"})})," statement, a table name in our case, ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"employees"})}),", and a table schema. Here the ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"id"})})," of type ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"INTEGER"})}),", ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"name"})})," as ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"STRING"})}),", ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"salary"})})," as ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"DOUBLE"})}),"."]}),"\n",(0,t.jsx)(s.admonition,{type:"info",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"CREATE TABLE employees\n-- USING DELTA\n(\n    id INT, \n    name STRING, \n    salary DOUBLE\n);\n"})})}),"\n",(0,t.jsx)(s.admonition,{type:"info",children:(0,t.jsx)(s.p,{children:"Delta Lake is the default format and you don't need to specify the keyword USING DELTA, so we can simply remove it"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","The table has been created. Let's confirm this ",(0,t.jsx)("br",{})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"view-the-delta-table-inside-the-data-tab",children:"View the delta table inside the Data tab"}),"\n",(0,t.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Go to the ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"Data"})})," tab. Here, in the default database, we can see that the table ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"employees"})})," has been created. ",(0,t.jsx)("br",{})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Here we can see the schema of the table, our three columns:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"id"})}),";"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"name"})}),";"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"salary"})})," and other metadata information"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Come back to our notebook ",(0,t.jsx)("br",{})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"insert-some-records-into-the-delta-table",children:"Insert some records into the delta table"}),"\n",(0,t.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","We will insert some records all in a single transaction. Again, like in SQL, we will use ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"INSERT INTO"})})," statements"]}),"\n",(0,t.jsx)(s.admonition,{type:"info",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:'INSERT INTO employees (\n    id, name, salary\n) VALUES (\n    1, "Adam", 3500.0\n),\n(\n    2, "Sarah", 4020.5\n),\n(\n    3, "John", 2999.3\n),\n(\n    4, "Thomas", 4000.3\n),\n(\n    5, "Anna", 2500.0\n),\n(\n    6, "Kim", 6200.3\n)\n'})})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Here we can see that we have successfully inserted six records ",(0,t.jsx)("br",{})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","We can simply query the table using a standard ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"SELECT"})})," statement"]}),"\n",(0,t.jsx)(s.admonition,{type:"info",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"SELECT * FROM employees;\n"})})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"how-to-view-metadata-information-about-the-newly-created-table",children:"How to view metadata information about the newly created table"}),"\n",(0,t.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Let us now see some metadata information about our table ",(0,t.jsx)("br",{})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Here we will use the ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"DESCRIBE DETAIL"})})," command on our table"]}),"\n",(0,t.jsxs)(s.admonition,{type:"info",children:[(0,t.jsx)(s.p,{children:"It is an important command that allows us to explore table metadata"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"DESCRIBE DETAIL employees\n"})})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","As you can see, there are many important information regarding our table"]}),"\n",(0,t.jsxs)(s.admonition,{type:"info",children:[(0,t.jsxs)(s.p,{children:["For example, we can see the location of the table. It is the location where the table files are really stored",(0,t.jsx)("br",{})]}),(0,t.jsx)(s.p,{children:"We have also the number of file filed, which indicates the number of data files in the current table version"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"how-to-explore-the-files-inside-the-table-location",children:"How to explore the files inside the table location"}),"\n",(0,t.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Copy the table location and explore the files using the ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"%fs"})})," magic command"]}),"\n",(0,t.jsxs)(s.admonition,{type:"info",children:[(0,t.jsxs)(s.p,{children:["The directory contains 4 data files in ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"parquet"})})," format",(0,t.jsx)("br",{})]}),(0,t.jsxs)(s.p,{children:["Why do we have 4 files for a single insert operation?",(0,t.jsx)("br",{})]}),(0,t.jsx)(s.p,{children:"This is because Spark work in parallel. If we check our cluster, we see that our cluster has 4 cores, so there were 4 executors working at the same time to insert our 6 new records"})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Let us now come back to our notebook and see the scenario of ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"UPDATE"})})," operations"]}),"\n",(0,t.jsx)(s.admonition,{type:"info",children:(0,t.jsx)(s.p,{children:"In this scenario, we need to update the salary of all employees having a name that starts with the letter A by adding 100 to their salary"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Here we can see that there are two records affected by the ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"UPDATE"})})," operation"]}),"\n",(0,t.jsx)(s.admonition,{type:"info",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:'UPDATE employees\nSET salary = salary + 100\nWHERE name LIKE "A%"\n'})})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Let us query the table again to see the updated data"]}),"\n",(0,t.jsx)(s.admonition,{type:"info",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"SELECT * FROM employees\n"})})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Let us now see what happened in the table directory"]}),"\n",(0,t.jsx)(s.admonition,{type:"info",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sh",children:"%fs ls 'dbfs:/user/hive/warehouse/employees'\n"})})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","We can see that there are two files have been added to the directory"]}),"\n",(0,t.jsx)(s.admonition,{type:"info",children:(0,t.jsx)(s.p,{children:"As we said, rather than updating the records in the files themselves, we make a copy of them"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Delta use the transaction log to indicate which files are valid in the current version of the table",(0,t.jsx)("br",{})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Let us confirm this by running the ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"DESCRIBE DETAIL"})})," command"]}),"\n",(0,t.jsx)(s.admonition,{type:"info",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"DESCRIBE DETAIL employees\n"})})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","As you can see, the number of files are ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"4"})})," and not ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"6"})}),", and they are the 4 files that represent the current version of the table",(0,t.jsx)("br",{})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","It contains the new files updated after our update command",(0,t.jsx)("br",{})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","If we query our delta table again. The query engine uses the transaction logs to resolve all the files that are valid in the current version and ignore all other data files",(0,t.jsx)("br",{})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Since the transaction log also stores all the changes to the data table, we can easily review the table history using the ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"DESCRIBE HISTORY"})})," command"]}),"\n",(0,t.jsx)(s.admonition,{type:"info",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"DESCRIBE HISTORY employees\n"})})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","As you can see, there are 3 versions of the table:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Version 0: ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"CREATE TABLE"})})," command;"]}),"\n",(0,t.jsxs)(s.li,{children:["Version 1: ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"INSERT"})})," command;"]}),"\n",(0,t.jsxs)(s.li,{children:["Version 2: ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"UPDATE"})})," command"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","As you can see, thanks to the transaction log, we have the full history of all operations that have happened on the table. ",(0,t.jsx)("br",{})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","The transaction log is located under the ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"_delta_log"})})," folder in the table directory"]}),"\n",(0,t.jsx)(s.admonition,{type:"info",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sh",children:"%fs ls 'dbfs:/user/hive/warehouse/employees/_delta_log'\n"})})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Let us explore this folder. Each transaction is a new JSON file being written to the Delta Lake transaction log",(0,t.jsx)("br",{})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Here you can see that there are 3 JSON files representing the 3 transactions we have made on the table. Starting from 0, the other file in the directory are just the checksum of the JSON files",(0,t.jsx)("br",{})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Let us look inside the last file representing the update transaction."]}),"\n",(0,t.jsxs)(s.admonition,{type:"info",children:[(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sh",children:"%fs head 'dbfs:/user/hive/warehouse/employees/_delta_log/0000000000000000000000002.json\n"})}),(0,t.jsxs)(s.p,{children:["For example, with the ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"add"})})," tag, you can see the new files that have been written to our table. And with the ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"remove"})})," tag, you can see the list of files that have been soft deleted from our table. It means the file no longer should be included in the table"]})]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>r});var t=n(6540);const a={},i=t.createContext(a);function l(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);