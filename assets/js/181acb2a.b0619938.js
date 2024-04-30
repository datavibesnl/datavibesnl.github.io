"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6978],{2865:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(4848),t=n(8453);const r={},o="5.3 Processing CDC Feed with DLT (Hands On)",l={id:"Databricks Certified Data Engineer Associate - Preparation/Production Pipelines/5.3 Processing CDC Feed with DLT Hands On",title:"5.3 Processing CDC Feed with DLT (Hands On)",description:"- [ ] In this demo, we are going to process change data capture feed with Delta Live Tables",source:"@site/docs/Databricks Certified Data Engineer Associate - Preparation/5. Production Pipelines/5.3 Processing CDC Feed with DLT Hands On.md",sourceDirName:"Databricks Certified Data Engineer Associate - Preparation/5. Production Pipelines",slug:"/Databricks Certified Data Engineer Associate - Preparation/Production Pipelines/5.3 Processing CDC Feed with DLT Hands On",permalink:"/docs/Databricks Certified Data Engineer Associate - Preparation/Production Pipelines/5.3 Processing CDC Feed with DLT Hands On",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"5.2 Change Data Capture",permalink:"/docs/Databricks Certified Data Engineer Associate - Preparation/Production Pipelines/5.2 Change Data Capture"},next:{title:"5.4 Jobs (Hands On)",permalink:"/docs/Databricks Certified Data Engineer Associate - Preparation/Production Pipelines/5.4 Jobs Hands On"}},a={},c=[{value:"Creating the bronze table layer",id:"creating-the-bronze-table-layer",level:2},{value:"Creating the silver table layer",id:"creating-the-silver-table-layer",level:2},{value:"Creating the gold table layer",id:"creating-the-gold-table-layer",level:2},{value:"How to join and reference tables across notebooks",id:"how-to-join-and-reference-tables-across-notebooks",level:2}];function d(e){const s={admonition:"admonition",code:"code",h1:"h1",h2:"h2",input:"input",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"53-processing-cdc-feed-with-dlt-hands-on",children:"5.3 Processing CDC Feed with DLT (Hands On)"}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","In this demo, we are going to process change data capture feed with Delta Live Tables",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Let us first pull the latest version of our course materials from GitHub. Go to the Repos tab and click on the ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"main"})})," branch",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","On the right, click ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"Pull"})}),". ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"Confirm"})}),(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Before we see our DLT pipeline, let us take a look on the CDC data we will process during this demo. Our CDC data is delivered in JSON files",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","We have now a new JSON file ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"02.json"})}),(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Let us take a look on the content of this file."]}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sql",children:"SELECT \r\n    *\r\nFROM json.`${dataset.bookstore}/books-cdc/02.json`\n"})})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Here is the CDC data of our ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"books"})})," table. As you can see, in addition to the book's data, we have two operational columns"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"row_status"})})}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"row_status"})})," contains ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"INSERT"})}),", ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"UPDATE"})}),", ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"DELETE"})})," operation indicating whether the specified record was inserted, updated or deleted"]})}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"DELETE"})})," operations contain ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"NULL"})})," values for all the fields other than the book ID"]})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"row_time"})})}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"row_time"})})," indicates when these changes happened"]})}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"row_time"})})," will be used as sequence key in our CDC data processing"]})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Let us now switch to our pipeline ",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","In addition to the previous notebook we saw in the previous demo, we are adding a new notebook to this pipeline"]}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsx)(s.p,{children:"We will see later how we can edit an existing pipeline to add additional notebooks"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Let us take a look on our new notebook"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"creating-the-bronze-table-layer",children:"Creating the bronze table layer"}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","In this notebook, we start by creating a bronze table to ingest books CDC feed ",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","We are using auto loader to load the JSON files incrementally"]}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sql",children:'CREATE OR REFRESH STREAMING LIVE TABLE books_bronze\r\nCOMMENT "The raw books data, ingested from CDC feed"\r\nAS SELECT * FROM cloud_files(\r\n    "${datasets.path}/books-cdc",\r\n    "json"\r\n)\n'})})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"creating-the-silver-table-layer",children:"Creating the silver table layer"}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","We are creating the silver table"]}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsx)(s.p,{children:"This is our target table into which the changes from the CDC feed will be applied"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","We start by declaring the table. Since ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"APPLY CHANGES INTO"})})," requires the target table to be declared in a separate statement ",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","With a target table created, we can write the ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"APPLY CHANGES INTO"})})," command ",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","In this command, we specify the table ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"books_silver"})})," as the target table ",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","The table ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"books_bronze"})})," as the streaming source of our CDC feed"]}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sql",metastring:"{4}",children:'CREATE OR REFRESH STREAMING LIVE TABLE books_silver;\r\n\r\nAPPLY CHANGES INTO LIVE.books_silver\r\nFROM STREAM(LIVE.books_bronze)\r\nKEYS (book_id)\r\nAPPLY AS DELETE WHEN row_status = "DELETE"\r\nSEQUENCE BY row_time\r\nCOLUMNS * EXCEPT (\r\n    row_status,\r\n    row_time\r\n)\n'})})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Then we identify the ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"book_id"})})," as the primary key",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","If the key exists in the target table, the record will be updated. If not it will be inserted"]}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sql",metastring:"{5}",children:'CREATE OR REFRESH STREAMING LIVE TABLE books_silver;\r\n\r\nAPPLY CHANGES INTO LIVE.books_silver\r\nFROM STREAM(LIVE.books_bronze)\r\nKEYS (book_id)\r\nAPPLY AS DELETE WHEN row_status = "DELETE"\r\nSEQUENCE BY row_time\r\nCOLUMNS * EXCEPT (\r\n    row_status,\r\n    row_time\r\n)\n'})})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","We specify that records where the row status is ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"DELETE"})})," should be deleted from the target table"]}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sql",metastring:"{6}",children:'CREATE OR REFRESH STREAMING LIVE TABLE books_silver;\r\n\r\nAPPLY CHANGES INTO LIVE.books_silver\r\nFROM STREAM(LIVE.books_bronze)\r\nKEYS (book_id)\r\nAPPLY AS DELETE WHEN row_status = "DELETE"\r\nSEQUENCE BY row_time\r\nCOLUMNS * EXCEPT (\r\n    row_status,\r\n    row_time\r\n)\n'})})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","We specify the ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"row_time"})})," field for ordering the operations"]}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sql",metastring:"{7}",children:'CREATE OR REFRESH STREAMING LIVE TABLE books_silver;\r\n\r\nAPPLY CHANGES INTO LIVE.books_silver\r\nFROM STREAM(LIVE.books_bronze)\r\nKEYS (book_id)\r\nAPPLY AS DELETE WHEN row_status = "DELETE"\r\nSEQUENCE BY row_time\r\nCOLUMNS * EXCEPT (\r\n    row_status,\r\n    row_time\r\n)\n'})})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","We indicate that all books fields should be added to the target table except the operational columns: ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"row_status"})})," and ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"row_time"})})]}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sql",metastring:"{8-11}",children:'CREATE OR REFRESH STREAMING LIVE TABLE books_silver;\r\n\r\nAPPLY CHANGES INTO LIVE.books_silver\r\nFROM STREAM(LIVE.books_bronze)\r\nKEYS (book_id)\r\nAPPLY AS DELETE WHEN row_status = "DELETE"\r\nSEQUENCE BY row_time\r\nCOLUMNS * EXCEPT (\r\n    row_status,\r\n    row_time\r\n)\n'})})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"creating-the-gold-table-layer",children:"Creating the gold table layer"}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","In the gold layer, we define a simple aggregate query to create a live table from the data in our ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"books_silver"})})," table"]}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsx)(s.p,{children:"Notice here that this is not a streaming table"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Since data is being updated and deleted from our ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"books_silver"})})," table, it is no more valid to be a streaming source for this new table"]}),"\n",(0,i.jsxs)(s.admonition,{type:"info",children:[(0,i.jsx)(s.p,{children:"Remember, streaming sources must be append-only tables"}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sql",children:'CREATE LIVE TABLE author_counts_state\r\nCOMMENT "Number of books per author"\r\nAS SELECT \r\n    author,\r\n    COUNT(*) AS books_count,\r\n    CURRENT_TIMESTAMP() AS updated_time\r\nFROM LIVE.books_silver\r\nGROUP BY author\n'})})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","In the CDC pipeline, we can also define views ",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","To define a view simply replace table with the ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"VIEW"})})," keyword"]}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsx)(s.p,{children:"These views are temporary views scoped to the pipeline they are a part of, so they are not persisted to the metastore"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Views can still be used to enforce data quality and metrics for views will be collected and reported as they would be for tables"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"how-to-join-and-reference-tables-across-notebooks",children:"How to join and reference tables across notebooks"}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Here we see how we can join and reference tables across notebooks ",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","We are joining our ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"books_silver"})})," table to the ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"orders_cleaned"})})," table, which we created in another notebook in the last lecture ",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Since the API supports scheduling multiple notebooks as part of a single pipeline, configuration code in any notebook can reference tables and views created in any other notebook"]}),"\n",(0,i.jsxs)(s.admonition,{type:"info",children:[(0,i.jsxs)(s.p,{children:["You can think of the scope of the schema referenced by the ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"LIVE"})})," keyword to be at the DLT pipeline level, rather than the individual notebook"]}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sql",children:"CREATE LIVE VIEW books_sales\r\nAS SELECT\r\n    b.title,\r\n    o.quantity\r\nFROM (\r\n    SELECT\r\n        *,\r\n        EXPLODE(books) AS books\r\n    FROM LIVE.orders_cleaned\r\n) AS o\r\nINNER JOIN LIVE.books_silver AS b\r\nON o.book.book_id = b.book_id;\n"})})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Let us now go to the pipeline we created in the last lecture to add this new notebook ",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Here is our demo bookstore pipeline we created in the last lecture ",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Click on the ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"Settings"})})," button ",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","From here, click ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"Add Notebook library"})})," ",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Click ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"Browse"})})," ",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Go to ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"Repo"})})," and choose the Books Pipeline notebook ",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Click ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"Save"})})," ",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","As you can see in the pipeline details, this pipeline is now referencing 2 notebooks instead of one ",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Let us now click ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"Start"})})," to run our updated pipeline"]}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsx)(s.p,{children:"If you have any issue running this pipeline, try to do a full refresh in order to run your pipeline from scratch"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","It means the attempts to clear all data from each table and then load all data from the streaming sources ",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","For now, let us click ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"Start"})}),(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","In addition to tables you created in the last lecture, we see our new ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"books"})})," tables. And the view ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"books_sales"})})," that join the two pipelines tables together"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>l});var i=n(6540);const t={},r=i.createContext(t);function o(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);