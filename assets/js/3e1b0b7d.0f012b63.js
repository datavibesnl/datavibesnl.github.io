"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9493],{8061:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=n(4848),t=n(8453);const r={},l="5.1 Delta Live Tables (Hands On)",a={id:"Databricks Certified Data Engineer Associate - Preparation/Production Pipelines/5.1 Delta Live Tables Hands On",title:"5.1 Delta Live Tables (Hands On)",description:"What are Delta Live Tables?",source:"@site/docs/Databricks Certified Data Engineer Associate - Preparation/5. Production Pipelines/5.1 Delta Live Tables Hands On.md",sourceDirName:"Databricks Certified Data Engineer Associate - Preparation/5. Production Pipelines",slug:"/Databricks Certified Data Engineer Associate - Preparation/Production Pipelines/5.1 Delta Live Tables Hands On",permalink:"/docs/Databricks Certified Data Engineer Associate - Preparation/Production Pipelines/5.1 Delta Live Tables Hands On",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"4.6 Multihop Architecture (Hands On)",permalink:"/docs/Databricks Certified Data Engineer Associate - Preparation/Incremental Data Processing/4.6 Multihop Architecture Hands On"},next:{title:"5.2 Change Data Capture",permalink:"/docs/Databricks Certified Data Engineer Associate - Preparation/Production Pipelines/5.2 Change Data Capture"}},o={},d=[{value:"What are Delta Live Tables?",id:"what-are-delta-live-tables",level:2},{value:"Explore the source code",id:"explore-the-source-code",level:2},{value:"Second bronze table - orders_raw",id:"second-bronze-table---orders_raw",level:2},{value:"Second bronze table - customer",id:"second-bronze-table---customer",level:2},{value:"How to implement quality control with Delta Live Tables",id:"how-to-implement-quality-control-with-delta-live-tables",level:2}];function c(e){const s={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",input:"input",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"51-delta-live-tables-hands-on",children:"5.1 Delta Live Tables (Hands On)"}),"\n",(0,i.jsx)(s.h2,{id:"what-are-delta-live-tables",children:"What are Delta Live Tables?"}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Delta Live Tables or DLT is a framework for building reliable and maintainable data processing pipelines",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","DLT simplify the hard work of building large scale ETL while maintaining table dependencies and data quality",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Our DLT multi-hop pipeline is well-visualized and we can see our two bronze tables, ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"customers"})})," and ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"orders_raw"})}),". They are joined together into the silver table ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"orders_cleaned"})}),". From which we calculate our gold table ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"daily_customer_books"})}),(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","DLT pipelines are implemented using Databricks notebooks",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","On the ",(0,i.jsx)(s.strong,{children:"pipeline details"})," on the right, we can see the path to the notebook containing the DLT table definitions",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","We can simply click here to navigate to the source code",(0,i.jsx)("br",{})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"explore-the-source-code",children:"Explore the source code"}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Let us explore the content of this notebook to better understand the syntax used by Delta Live Tables",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","In this SQL notebook, we declare our Delta Live Tables that together implement a simple multi-hop architecture",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","DLT tables will always be preceded by the ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"LIVE"})})," keyword",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","We start by declaring two tables implementing the bronze layer",(0,i.jsx)("br",{})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"second-bronze-table---orders_raw",children:"Second bronze table - orders_raw"}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","The table ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"orders_raw"})})," ingest Parquet data incrementally by Auto Loader from our dataset directory",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Incremental processing via Auto Loader required the addition of the ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"STREAMING"})})," keyword in that declaration",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","The ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"cloud_files"})})," method enable auto loader to be used natively with SQL",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","This method takes three parameters"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"The data file source location"}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sql",metastring:"{4}",children:'CREATE OR REFRESH STREAMING LIVE TABLE orders_raw\r\nCOMMENT "The raw books orders, ingested from orders-raw"\r\nAS SELECT * \xa0FROM cloud_files(\r\n    "${datasets_path}/orders-raw",\r\n    "parquet",\r\n    map(\r\n        "schema",\r\n        "order_id STRING,\r\n        order_timestamp LONG,\r\n        customer_id STRING,\r\n        quantity LONG"\r\n    )\r\n)\n'})})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["The source data format, which is ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"parquet"})})," in this case"]}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sql",metastring:"{5}",children:'CREATE OR REFRESH STREAMING LIVE TABLE orders_raw\r\nCOMMENT "The raw books orders, ingested from orders-raw"\r\nAS SELECT * \xa0FROM cloud_files(\r\n    "${datasets_path}/orders-raw",\r\n    "parquet",\r\n    map(\r\n        "schema",\r\n        "order_id STRING,\r\n        order_timestamp LONG,\r\n        customer_id STRING,\r\n        quantity LONG"\r\n    )\r\n)\n'})})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"An array of reader options"}),"\n",(0,i.jsxs)(s.admonition,{type:"info",children:[(0,i.jsx)(s.p,{children:"We declare the schema of our data"}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sql",metastring:"{6-12}",children:'CREATE OR REFRESH STREAMING LIVE TABLE orders_raw\r\nCOMMENT "The raw books orders, ingested from orders-raw"\r\nAS SELECT * \xa0FROM cloud_files(\r\n    "${datasets_path}/orders-raw",\r\n    "parquet",\r\n    map(\r\n        "schema",\r\n        "order_id STRING,\r\n        order_timestamp LONG,\r\n        customer_id STRING,\r\n        quantity LONG"\r\n    )\r\n)\n'})})]}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsx)(s.p,{children:"Notice that we add a comment here that would be visible to anyone exploring the data catalog"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Let us run this query and see what will happen"]}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sql",children:'CREATE OR REFRESH STREAMING LIVE TABLE orders_raw\r\nCOMMENT "The raw books orders, ingested from orders-raw"\r\nAS SELECT * \xa0FROM cloud_files(\r\n    "${datasets_path}/orders-raw",\r\n    "parquet",\r\n    map(\r\n        "schema",\r\n        "order_id STRING,\r\n        order_timestamp LONG,\r\n        customer_id STRING,\r\n        quantity LONG"\r\n    )\r\n)\n'})})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Running at a DLT query from here only validate that it is syntactically valid",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","To define and populate this table, you must create a DLT pipeline",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","We will see later how to configure and run a new pipeline from this notebook"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"second-bronze-table---customer",children:"Second bronze table - customer"}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","The second bronze table is ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"customer"})})," that presents JSON customer data"]}),"\n",(0,i.jsxs)(s.admonition,{type:"info",children:[(0,i.jsx)(s.p,{children:"This table is used below in a join operation to look up customer information"}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sql",children:'CREATE OR REFRESH LIVE TABLE customers\r\nCOMMENT "The customers lookup table, ingested from customers-json"\r\nAS SELECT * FROM json.`${datasets_path}/customers-json`\n'})})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","We declare tables implementing the silver layer"]}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsx)(s.p,{children:"This layer represents a refined copy of data from the bronze layer"})}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsx)(s.p,{children:"At this level, we apply operations like data cleansing and enrichment"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Here we declare our silver table ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"orders_cleaned"})}),", which enriches the order's data with customer information",(0,i.jsx)("br",{})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"how-to-implement-quality-control-with-delta-live-tables",children:"How to implement quality control with Delta Live Tables"}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","In addition, we implement quality control using ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"CONSTRAINT"})})," keywords. Here we reject records with no ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"order_id"})}),(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","The ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"CONSTRAINT"})})," keyword enables DLT to collect metrics on constraint violations",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","It provides an optional ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"ON VIOLATION"})})," clause specifying an action to take on records that violate the constraints",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","The three modes currently supported by Delta are included in this table",(0,i.jsx)("br",{})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"DROP ROW"})})," where we discard records that violate constraints",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"FAIL UPDATE"})})," where the pipeline fails when the constraint is violated",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["When omitted records violating ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"CONSTRAINT"})})," will be included, but violation will be reported in the metrics"]}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.p,{children:["Notice also that we need to use the ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"LIVE"})})," prefix in order to refer to other DLT tables"]})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","For streaming DLT tables we need to use the ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"STREAM"})})," method"]}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sql",metastring:"{20}",children:"CREATE OR REFRESH STREAMING LIVE TABLE orders_cleaned (\r\n    CONSTRAINT valid_order_number EXPECT (\r\n        order_id IS NOT NULL\r\n    ) ON VIOLATION DROP ROW\r\n)\r\nCOMMENT \"The cleaned books orders with valid order_id\"\r\nAS SELECT \r\n    order_id,\r\n    quantity,\r\n    o.customer_id,\r\n    c.profile:first_name AS f_name,\r\n    c.profile:last_name as l_name,\r\n    CAST(\r\n        from_unixtime(\r\n            order_timestamp,\r\n            'yyyy-MM-dd HH:mm:ss'\r\n        ) AS timestamp\r\n    ) AS order_timestamp,\r\n    c.profile:address:country AS country\r\nFROM STREAM(\r\n    LIVE.orders_raw\r\n) AS o\r\nLEFT JOIN LIVE.customers c\r\nON o.customer_id = c.customer_id\n"})})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","We declare the gold table, in this case the daily number of books per customer in a specific region"]}),"\n",(0,i.jsxs)(s.admonition,{type:"info",children:[(0,i.jsx)(s.p,{children:"Here it is China"}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sql",children:'CREATE OR REFRESH LIVE TABLE cn_daily_customer_books\r\nCOMMENT "Daily number of books per customer in China"\r\nAS SELECT \r\n    customer_id,\r\n    f_name,\r\n    l_name,\r\n    DATE_TRUNC(\r\n        "DD",\r\n        order_timestamp\r\n    ) AS order_date,\r\n    SUM(quantity) AS book_counts\r\nFROM LIVE.orders_cleaned\r\nWHERE country = \'China\'\r\nGROUP BY \r\n    customer_id, \r\n    f_name,\r\n    l_name,\r\n    DATE_TRUNC(\r\n        "DD",\r\n        order_timestamp\r\n    )\n'})})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Let us see now how to use this notebook to create a new DLT pipeline",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Start by navigating to the ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"Workflows"})})," tab on the sidebar",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Select the ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"Delta Live Table"})})," tab",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Click ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"Create Pipeline"})}),(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Fill in a pipeline name"]}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsx)(s.p,{children:(0,i.jsx)(s.em,{children:"For example, demo bookstore"})})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","For notebook libraries use the navigator to locate and select the notebook with the delta tables definition, the one we have just explored",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Under configuration, add a new configuration parameter. Set the key to ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"dataset_path"})}),", and the value to the location of the bookstore dataset"]}),"\n",(0,i.jsxs)(s.admonition,{type:"info",children:[(0,i.jsx)(s.p,{children:"This parameter is used in the notebook in order to specify the path to our source data files"}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sh",children:"datasets_path=dbfs:/mnt/demo-datasets/bookstore\n"})})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","In the storage location field enter a path where the pipeline logs and data files will be stored"]}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsx)(s.p,{children:"dbfs:/mnt/demo/dlt/demo_bookstore"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","In the target field, enter a target database name"]}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsx)(s.p,{children:"demo_bookstore_dlt_db"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","The pipeline mode specifies how the pipeline will be run"]}),"\n",(0,i.jsxs)(s.admonition,{type:"info",children:[(0,i.jsxs)(s.p,{children:["Triggered pipelines run once and then shut down until the next manual or scheduled updates",(0,i.jsx)("br",{})]}),(0,i.jsx)(s.p,{children:"Continuous pipeline will continuously ingesting new data as it arrives"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","For this demo, let us keep it triggered",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","A new cluster would be created for our DLT pipeline",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Choose the cluster mode"]}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsx)(s.p,{children:"For example, fixed size"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","We set the number of workers to zero to create a single node cluster"]}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsx)(s.p,{children:"Notice below the DBUs estimate provided similar to that provided when configuring interactive clusters"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Click Create",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Select Development to run the pipeline in development mode"]}),"\n",(0,i.jsxs)(s.admonition,{type:"info",children:[(0,i.jsxs)(s.p,{children:["This mode allows for interactive development by reusing the cluster, compared to creating a new cluster for each run in the prediction mode",(0,i.jsx)("br",{})]}),(0,i.jsx)(s.p,{children:"The development mode also disable retries so that we can quickly identify and fix errors"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Let us now click ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"Start"})})]}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsx)(s.p,{children:"The initial run will take several minutes while the cluster is provisioned"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Below we see all the events of our running pipeline, either information, warning, or errors",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","On the right hand side, we see all the pipeline details and also the information related to the cluster",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","In the middle, we see the execution flow visualized as a Directed Acyclic Graph or DAG"]}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsx)(s.p,{children:"This representing the entities involved in the pipeline and the relationships between them"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Click on each entity to view a summary which includes the run status and other metadata summary, including the comment we set during the table definition in the notebook",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","We can also see the schema of the table",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","If you select the ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"orders_cleaned"})})," table, you can notice the results reported in the data quality section"]}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsx)(s.p,{children:"Because this flow has data expectation declared, those metrics are extracted here"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","As you can see, we have no records violating our constraint.",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Let us now come back to our notebook for adding another table and see how this change is reflected here",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Let us open the notebook of this pipeline by clicking on the link here",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Let us scroll to the end of this notebook",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Add a new cell",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","We will add a new table similar to the previous gold table declaration. But this time, instead of China, we will filter for France. But let us do something different to see what happens if we remove, for example, the ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"LIVE"})})," prefix"]}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sql",children:'CREATE OR REFRESH LIVE TABLE cn_daily_customer_books\r\nCOMMENT "Daily number of books per customer in China"\r\nAS SELECT \r\n    customer_id,\r\n    f_name,\r\n    l_name,\r\n    DATE_TRUNC(\r\n        "DD",\r\n        order_timestamp\r\n    ) AS order_date,\r\n    SUM(quantity) AS book_counts\r\nFROM orders_cleaned\r\nWHERE country = \'France\'\r\nGROUP BY \r\n    customer_id, \r\n    f_name,\r\n    l_name,\r\n    DATE_TRUNC(\r\n        "DD",\r\n        order_timestamp\r\n    )\n'})})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Let us see what will happen in our pipeline",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Let us now click start again to rerun our pipeline and examine the updated results",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","As you can see, this generates an error. Table or view not found, because we missed the LIVE namespace",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Add again the ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"LIVE"})})," keyword"]}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sql",metastring:"{12}",children:'CREATE OR REFRESH LIVE TABLE cn_daily_customer_books\r\nCOMMENT "Daily number of books per customer in China"\r\nAS SELECT \r\n    customer_id,\r\n    f_name,\r\n    l_name,\r\n    DATE_TRUNC(\r\n        "DD",\r\n        order_timestamp\r\n    ) AS order_date,\r\n    SUM(quantity) AS book_counts\r\nFROM LIVE.orders_cleaned\r\nWHERE country = \'France\'\r\nGROUP BY \r\n    customer_id, \r\n    f_name,\r\n    l_name,\r\n    DATE_TRUNC(\r\n        "DD",\r\n        order_timestamp\r\n    )\n'})})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Let us rerun our pipeline by clicking ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"Start"})}),(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Our pipeline is successfully completed and we can see now our two gold tables",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","The events and information we see in this UI are stored in the storage configuration we provided during configuring our pipeline",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Let us explore this directory. For this, let us create a Python notebook and copy the storage location",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Let us see the content of our pipeline storage location"]}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:'files = dbutils.fs.ls(\r\n    "dbfs:/mnt/demo/dlt/demo_bookstore"\r\n)\r\n\r\ndisplay(files)\n'})})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","There are four directories: auto loader, checkpoints, system and tables",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","The system directory captures all the events associated with the pipeline",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Let us explore the events file in the system directory"]}),"\n",(0,i.jsxs)(s.admonition,{type:"info",children:[(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:'files = dbutils.fs.ls(\r\n    "dbfs:/mnt/demo/dlt/demo_bookstore/system/events"\r\n)\r\n\r\ndisplay(files)\n'})}),(0,i.jsx)(s.p,{children:"These event logs are stored as a delta table"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Let us query this table"]}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sql",children:"SELECT \r\n    * \r\nFROM delta.`dbfs:/mnt/demo/dlt/demo_bookstore/system/events`\n"})})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","All events we see in the UI are stored in this data table",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Let us also see what we have in the tables directory in the storage location"]}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:'files = dbutils.fs.ls(\r\n    "dbfs:/mnt/demo/dlt/demo_bookstore/tables"\r\n)\r\n\r\ndisplay(files)\n'})})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Here we see our five DLT tables",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Let us come back to our pipeline to grab the database name to query these tables",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","If you click on any table, you can see the metastore information",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Let us write a select query on our table using the metadata store information"]}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sql",children:"SELECT \r\n    *\r\nFROM demo_bookstore_dlt_db.cn_daily_customer_books\r\n\n"})})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Let us end up by turning off our job cluster. To do so navigate to the compute tab in the left side bar",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Click on the job clusters tab",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Terminate this pipeline cluster"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>a});var i=n(6540);const t={},r=i.createContext(t);function l(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);