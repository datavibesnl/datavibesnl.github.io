"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8415],{1437:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>o});var n=t(4848),a=t(8453);const i={},l="2.7 Set Up Delta Tables",r={id:"Databricks Certified Data Engineer Associate - Preparation/Databricks Lakehouse Platform/2.7 Set Up Delta Tables",title:"2.7 Set Up Delta Tables",description:"- [ ] In this video, we will talk more about the Delta Lake tables",source:"@site/docs/Databricks Certified Data Engineer Associate - Preparation/2. Databricks Lakehouse Platform/2.7 Set Up Delta Tables.md",sourceDirName:"Databricks Certified Data Engineer Associate - Preparation/2. Databricks Lakehouse Platform",slug:"/Databricks Certified Data Engineer Associate - Preparation/Databricks Lakehouse Platform/2.7 Set Up Delta Tables",permalink:"/docs/Databricks Certified Data Engineer Associate - Preparation/Databricks Lakehouse Platform/2.7 Set Up Delta Tables",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"2.6 Databases and Tables on Databricks (Hands On)",permalink:"/docs/Databricks Certified Data Engineer Associate - Preparation/Databricks Lakehouse Platform/2.6 Databases and Tables on Databricks ("},next:{title:"2.8 Views",permalink:"/docs/Databricks Certified Data Engineer Associate - Preparation/Databricks Lakehouse Platform/2.8 Views"}},c={},o=[{value:"Table Constraints",id:"table-constraints",level:2},{value:"Cloning Delta Lake Tables",id:"cloning-delta-lake-tables",level:2}];function d(e){const s={admonition:"admonition",code:"code",h1:"h1",h2:"h2",input:"input",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"27-set-up-delta-tables",children:"2.7 Set Up Delta Tables"}),"\n",(0,n.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","In this video, we will talk more about the Delta Lake tables",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","You will understand how to use ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"CTAS"})})," statements to create Delta tables",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","We will learn how to add table constraints to an existing table",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","We will see how to make a copy of a Delta table",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","In addition to regular ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"CREATE TABLE"})})," statements, we can use CTAS statements to create Delta tables",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","CTAS statements or ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"CREATE TABLE AS SELECT"})})," statements, create and populate data tables using the output of a ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"SELECT"})})," statement",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Here is an example, we are creating ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"table_1"})})," and fill this table by data retrieved from ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"table_2"})})]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"CREATE TABLE table_1 \nAS SELECT * FROM table_2\n"})})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","CTAS statements automatically infer schema information from query results, and do not support manual schema declaration",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","With CTAS statements, we can do simple transformations like changing column names or omitting columns from target tables during table creation",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","In this example, the statement creates a new table, ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"table_1"})})," containing a subset of columns from ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"table_2"})})]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"CREATE TABLE table_1 \nAS SELECT \ncol_1, \ncol_3 as new_col_3 \nFROM table_2\n"})})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","In addition, the CREATE TABLE clause contains several options",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","You can provide a descriptive comments fort he table. This allows for easier discovery of table contents",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Here we are adding a comment indicating that the table contains personal identifiable information like the ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"name"})})," and the ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"email"})})," of the user",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","The underlying data of a table can be partitioned in subfolders by the value of one or more columns",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Here we are partitioning by the ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"city"})})," and ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"birthdate"})})]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"CREATE TABLE new_table\nCOMMENT \"Contains PII\"\nPARTITIONED BY (city, birth_date)\nLOCATION '/some/path'\nAS SELECT \nid, \nname,\nemail,\nbirth_date,\ncity\nFROM users\n"})})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Partitioning can improve the performance of a huge delta tables. On the other hand, small to medium sized tables will not benefit from partitioning, because partitioning physically separates data files which results in a small files problem",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsx)(s.p,{children:"This can prevent file compaction and efficient data skipping"})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","As a best practice, you should default to non-partitioned tables for most use cases when working with delta tables",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","The created table with CTAS statements can be an external table, so the data will be stored in an external location specified by the ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"LOCATION"})})," keyword",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Let us see this comparison between regular ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"CREATE TABLE"})})," statements and CTAS statements",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Regular ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"CREATE TABLE"})})," statements need manual schema declaration"]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsx)(s.p,{children:"For example, Column 1 of type Integer. Column 2 of type String and column 3 of type Double"})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","While CTAS statements do not support manual schema declaration. They automatically inferior schema informations from a query results",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Regular ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"CREATE TABLE"})})," statements create an empty table. So, you need an ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"INSERT INTO"})})," statement to load data into the table",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","With CTAS statements, data will be inserted during table creation from the output of the ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"SELECT"})})," statement",(0,n.jsx)("br",{})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"table-constraints",children:"Table Constraints"}),"\n",(0,n.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Once you create your Delta table, either with regular ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"CREATE TABLE"})})," or CTAS statements, you can add constraints to your table",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Databricks currently supports two types of table constraints, ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"NOT NULL"})})," constraints and ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"CHECK"})})," constraints",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","In both cases, you must ensure that there is no data violating the constraint is already in the table prior to defining the constraint",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Once a constraint has been added to a table, new data violating the constraint would result in write failure",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","In this example, we add a Check constraint to the date column of our table."]}),"\n",(0,n.jsxs)(s.admonition,{type:"info",children:[(0,n.jsx)(s.p,{children:"Note that check constraints look like standard WHERE clauses you might use to filter a dataset"}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"ALTER TABLE orders\nADD CONSTRAINT valid_date\n CHECK (date > '2020-01-01')\n"})})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"cloning-delta-lake-tables",children:"Cloning Delta Lake Tables"}),"\n",(0,n.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","What if you want to backup or make a copy of your delta table?",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","For this Delta Lake has two options for efficiently copying Delta Tables"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"DEEP CLONE"})})}),"\n",(0,n.jsxs)(s.admonition,{type:"info",children:[(0,n.jsxs)(s.p,{children:["Deep clone fully copies both data and metadata from a source table to a target",(0,n.jsx)("br",{})]}),(0,n.jsxs)(s.p,{children:["The command is pretty simple. ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"CREATE TABLE"})})," and you provide the name of the new target table, followed by ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"DEEP CLONE"})})," keyboard and you indicate the name of the source table"]}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"CREATE TABLE table_clone\nDEEP CLONE source_table\n"})}),(0,n.jsxs)(s.p,{children:["This copy can occur incrementally",(0,n.jsx)("br",{})]}),(0,n.jsx)(s.p,{children:"Executing this command again can synchronize changes from the source to the target location. And because all the data must be copied over, this can take a while for large data sets"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"SHALLOW CLONE"})})}),"\n",(0,n.jsxs)(s.admonition,{type:"info",children:[(0,n.jsxs)(s.p,{children:["With ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"SHALLOW CLONE"})}),", you can quickly create a copy of a table since it just copies the Delta transaction logs",(0,n.jsx)("br",{})]}),(0,n.jsx)(s.p,{children:"That means there is no data moving during shallow cloning"}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"CREATE TABLE table_clone\nSHALLOW CLONE source_table\n"})}),(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"SHALLOW CLONE"})})," is a good option, for example, to test out applying changes on a table without the risk of modifying the current table"]})]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","In either cases, deep or shallow, data modification applied to the cloned version of the table will be tracked and stored separately from the source, so it will not affect the source table"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>l,x:()=>r});var n=t(6540);const a={},i=n.createContext(a);function l(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);