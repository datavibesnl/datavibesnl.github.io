"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6402],{39:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>n,metadata:()=>d,toc:()=>c});var a=s(4848),i=s(8453);const n={},l="2.5 Relational entities",d={id:"Databricks Certified Data Engineer Associate - Preparation/Databricks Lakehouse Platform/2.5 Relational entities",title:"2.5 Relational entities",description:"- [ ] In this video, we will talk about relational entities on Databricks",source:"@site/docs/Databricks Certified Data Engineer Associate - Preparation/2. Databricks Lakehouse Platform/2.5 Relational entities.md",sourceDirName:"Databricks Certified Data Engineer Associate - Preparation/2. Databricks Lakehouse Platform",slug:"/Databricks Certified Data Engineer Associate - Preparation/Databricks Lakehouse Platform/2.5 Relational entities",permalink:"/docs/Databricks Certified Data Engineer Associate - Preparation/Databricks Lakehouse Platform/2.5 Relational entities",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"2.4 Apply Advanced Delta Features (Hands On)",permalink:"/docs/Databricks Certified Data Engineer Associate - Preparation/Databricks Lakehouse Platform/2.4 Apply Advanced Delta Features"},next:{title:"2.6 Databases and Tables on Databricks (Hands On)",permalink:"/docs/Databricks Certified Data Engineer Associate - Preparation/Databricks Lakehouse Platform/2.6 Databases and Tables on Databricks ("}},r={},c=[{value:"Databases",id:"databases",level:2},{value:"What is really a Hive metastore in Databricks?",id:"what-is-really-a-hive-metastore-in-databricks",level:3},{value:"How to create databases outside of the default hive directory",id:"how-to-create-databases-outside-of-the-default-hive-directory",level:3},{value:"Tables",id:"tables",level:2},{value:"Managed Tables",id:"managed-tables",level:3},{value:"External Tables",id:"external-tables",level:3}];function o(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",input:"input",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"25-relational-entities",children:"2.5 Relational entities"}),"\n",(0,a.jsxs)(t.ul,{className:"contains-task-list",children:["\n",(0,a.jsxs)(t.li,{className:"task-list-item",children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.input,{type:"checkbox",disabled:!0})," ","In this video, we will talk about relational entities on Databricks",(0,a.jsx)("br",{})]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{className:"task-list-item",children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.input,{type:"checkbox",disabled:!0})," ","You will understand how databases and tables work in Databricks",(0,a.jsx)("br",{})]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{className:"task-list-item",children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.input,{type:"checkbox",disabled:!0})," ","You will understand also how the ",(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"LOCATION"})})," keyword impact the default storage directory"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"databases",children:"Databases"}),"\n",(0,a.jsxs)(t.ul,{className:"contains-task-list",children:["\n",(0,a.jsxs)(t.li,{className:"task-list-item",children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.input,{type:"checkbox",disabled:!0})," ","In Databricks, a database is actually a schema in Hive metastore",(0,a.jsx)("br",{})]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{className:"task-list-item",children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.input,{type:"checkbox",disabled:!0})," ","In order to create a database, you could use either ",(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"CREATE DATABASE"})})," syntax or instead use ",(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"CREATE SCHEMA"})})," keyword, which is exactly the same"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"what-is-really-a-hive-metastore-in-databricks",children:"What is really a Hive metastore in Databricks?"}),"\n",(0,a.jsxs)(t.ul,{className:"contains-task-list",children:["\n",(0,a.jsxs)(t.li,{className:"task-list-item",children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.input,{type:"checkbox",disabled:!0})," ","A Hive metastore is a repository of metadata that stores information for data structure, such as databases, tables and partitions",(0,a.jsx)("br",{})]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{className:"task-list-item",children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.input,{type:"checkbox",disabled:!0})," ","It holds metadata about your table and data, such as:",(0,a.jsx)("br",{})]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["The table definition",(0,a.jsx)("br",{})]}),"\n",(0,a.jsxs)(t.li,{children:["The format of the data",(0,a.jsx)("br",{})]}),"\n",(0,a.jsxs)(t.li,{children:["Where the data is actually stored in the underlying storage",(0,a.jsx)("br",{})]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{className:"task-list-item",children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.input,{type:"checkbox",disabled:!0})," ","Every Databricks workspace has a central Hive metastore accessible by all clusters to persist table metadata"]}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsx)(t.p,{children:'By default, you have a database called "default"'})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{className:"task-list-item",children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.input,{type:"checkbox",disabled:!0})," ","To create some tables in this default database, we use the ",(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"CREATE TABLE"})})," statement without specifying any database name"]}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsx)(t.p,{children:"The table definition would be under the default database in the Hive metastore"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{className:"task-list-item",children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.input,{type:"checkbox",disabled:!0})," ","The table data will be located under the hive default directory, which is ",(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"/user/hive/warehouse"})}),(0,a.jsx)("br",{})]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{className:"task-list-item",children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.input,{type:"checkbox",disabled:!0})," ","In addition to the default database, we can create other databases",(0,a.jsx)("br",{})]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{className:"task-list-item",children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.input,{type:"checkbox",disabled:!0})," ","To do so we use the ",(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"CREATE DATABASE"})})," or ",(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"CREATE SCHEMA"})})," syntax",(0,a.jsx)("br",{})]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{className:"task-list-item",children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.input,{type:"checkbox",disabled:!0})," ","The database will be created in the Hive metastore and the database folder will be under the hive default directory"]}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["Notice that the database folder has an extension ",(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:".db"})})," to distinguish it from the tables directories"]})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{className:"task-list-item",children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.input,{type:"checkbox",disabled:!0})," ","We can use this database to create some tables. The table's definition will be in the Hive metastore and the data files would be under the database folder in the Hive default directory"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"how-to-create-databases-outside-of-the-default-hive-directory",children:"How to create databases outside of the default hive directory"}),"\n",(0,a.jsxs)(t.ul,{className:"contains-task-list",children:["\n",(0,a.jsxs)(t.li,{className:"task-list-item",children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.input,{type:"checkbox",disabled:!0})," ","It is possible to create databases outside of the default hive directory",(0,a.jsx)("br",{})]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{className:"task-list-item",children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.input,{type:"checkbox",disabled:!0})," ","We use the ",(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"CREATE SCHEMA"})})," syntax with the ",(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"LOCATION"})})," keyword to specify the path in which the database will be stored"]}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",metastring:"{2}",children:"CREATE SCHEMA db_y\nLOCATION 'dbfs:/custom/path/db_y.db'\n"})})}),"\n",(0,a.jsx)(t.admonition,{type:"warning",children:(0,a.jsx)(t.p,{children:"The database definition would be as usual in the hive metastore. While the database folder would be in the specified custom location outside of the hive default directory"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{className:"task-list-item",children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.input,{type:"checkbox",disabled:!0})," ","As usual, we can use this database to create some tables. While the table definition will be in the hive metastore, the actual data files for these tables will be stored in the database folder in that custom location"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"tables",children:"Tables"}),"\n",(0,a.jsxs)(t.ul,{className:"contains-task-list",children:["\n",(0,a.jsxs)(t.li,{className:"task-list-item",children:[(0,a.jsx)(t.input,{type:"checkbox",disabled:!0})," ","In Databricks, there are two types of tables: ",(0,a.jsx)(t.strong,{children:"Managed tables"})," and ",(0,a.jsx)(t.strong,{children:"External tables"})]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"managed-tables",children:"Managed Tables"}),"\n",(0,a.jsxs)(t.ul,{className:"contains-task-list",children:["\n",(0,a.jsxs)(t.li,{className:"task-list-item",children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.input,{type:"checkbox",disabled:!0})," ","A ",(0,a.jsx)(t.strong,{children:"managed table"})," is when the table is created in the storage under the database directory, which is the default case"]}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsx)(t.p,{children:"For a managed table, Hive owns both the metadata and table data, which means that it manages the lifecycle of the table. When you drop a managed table, the underlying data files will be deleted"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"external-tables",children:"External Tables"}),"\n",(0,a.jsxs)(t.ul,{className:"contains-task-list",children:["\n",(0,a.jsxs)(t.li,{className:"task-list-item",children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.input,{type:"checkbox",disabled:!0})," ","An external table is when the table is created in the storage outside the database directory in a path specified by the ",(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"LOCATION"})})," keyword"]}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsx)(t.p,{children:"Hive owns only the table metadata, but not the underlying data files. So, when you drop an external table, the underlying data files will not be deleted"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{className:"task-list-item",children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.input,{type:"checkbox",disabled:!0})," ","We can simply create an external table in the default database simply by using the ",(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"CREATE TABLE"})})," statement with the ",(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"LOCATION"})})," keyword",(0,a.jsx)("br",{})]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{className:"task-list-item",children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.input,{type:"checkbox",disabled:!0})," ","The definition for this external table will be in the hive metastore under the default database. While the data files will be stored in the specified external location",(0,a.jsx)("br",{})]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{className:"task-list-item",children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.input,{type:"checkbox",disabled:!0})," ","In the same way, we can create an external table in any database",(0,a.jsx)("br",{})]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{className:"task-list-item",children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.input,{type:"checkbox",disabled:!0})," ","We specify the database name with the keyword ",(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"USE"})}),", and we create the table with the ",(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"LOCATION"})})," keyword, followed by the path to where this external table needs to be stored"]}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",metastring:"{1,3}",children:"USE db_x;\nCREATE TABLE table3\nLOCATION 'dbfs:/some/path_2/x_tabl3';\n"})})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{className:"task-list-item",children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.input,{type:"checkbox",disabled:!0})," ","We could choose the same path as the one for the default database or simply use another location like in this case"]}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsx)(t.p,{children:"The table definition will be in the hive metastore while the data files will be in the specified external location"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{className:"task-list-item",children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.input,{type:"checkbox",disabled:!0})," ","Even if the database was created in a custom location outside of the hive default directory. We can normally create external table in this database. Again, we choose the database by the ",(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"USE"})})," keyword and we create the external table with the ",(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"LOCATION"})})," keyword"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>d});var a=s(6540);const i={},n=a.createContext(i);function l(e){const t=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),a.createElement(n.Provider,{value:t},e.children)}}}]);