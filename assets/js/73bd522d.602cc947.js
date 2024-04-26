"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[836],{4094:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var n=t(4848),i=t(8453);const a={},l="3.2 Query Files (Hands On)",r={id:"Databricks Certified Data Engineer Associate - Preparation/ELT with Spark SQL and Python/3.2 Query Files (HandsOn)",title:"3.2 Query Files (Hands On)",description:"- [ ] In this notebook, you will learn how to extract data directly from files using Spark SQL on Databricks",source:"@site/docs/Databricks Certified Data Engineer Associate - Preparation/3. ELT with Spark SQL and Python/3.2 Query Files (HandsOn).md",sourceDirName:"Databricks Certified Data Engineer Associate - Preparation/3. ELT with Spark SQL and Python",slug:"/Databricks Certified Data Engineer Associate - Preparation/ELT with Spark SQL and Python/3.2 Query Files (HandsOn)",permalink:"/docs/Databricks Certified Data Engineer Associate - Preparation/ELT with Spark SQL and Python/3.2 Query Files (HandsOn)",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Databricks Certified Data Engineer Associate - Preparation/3. ELT with Spark SQL and Python/3.2 Query Files (HandsOn).md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"3.1 Querying Files",permalink:"/docs/Databricks Certified Data Engineer Associate - Preparation/ELT with Spark SQL and Python/3.1 Querying Files"},next:{title:"3.3 Writing to Tables (Hands On)",permalink:"/docs/Databricks Certified Data Engineer Associate - Preparation/ELT with Spark SQL and Python/3.3 Writing to Tables (HandsOn)"}},o={},c=[{value:"How to list the files in a directory",id:"how-to-list-the-files-in-a-directory",level:2},{value:"How to query a JSON file",id:"how-to-query-a-json-file",level:2},{value:"How to query a complete directory",id:"how-to-query-a-complete-directory",level:2},{value:"How to query and parse a CSV file",id:"how-to-query-and-parse-a-csv-file",level:2},{value:"How to query files without a schema defined such as CSV",id:"how-to-query-files-without-a-schema-defined-such-as-csv",level:2},{value:"How to refresh the table",id:"how-to-refresh-the-table",level:2}];function d(e){const s={admonition:"admonition",code:"code",h1:"h1",h2:"h2",input:"input",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"32-query-files-hands-on",children:"3.2 Query Files (Hands On)"}),"\n",(0,n.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","In this notebook, you will learn how to extract data directly from files using Spark SQL on Databricks",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","For this demonstration, we will work on a bookstore dataset. Here we can see the schema for this bookstore dataset",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","We have 3 tables, customers, books and orders",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Let us start by running this helping notebook that will download and copy the dataset to our Databricks file system",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","The customer data is coming in a JSON format"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"how-to-list-the-files-in-a-directory",children:"How to list the files in a directory"}),"\n",(0,n.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Let us list the files in the ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"customers"})})," directory"]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-python",metastring:"{2}",children:'files = dbutils.fs.ls(\n    f"{dataset_bookstore}/customers-json"\n)\n\ndisplay(files)\n'})})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","We can see that there are 6 JSON files in this directory"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"how-to-query-a-json-file",children:"How to query a JSON file"}),"\n",(0,n.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","To query a single JSON file, we use ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"SELECT * FROM json"})}),", and we specify the full path for this JSON file"]}),"\n",(0,n.jsxs)(s.admonition,{type:"info",children:[(0,n.jsx)(s.p,{children:"Notice here that we are using back ticks and not single quotes around the path"}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"SELECT * FROM \xa0json.`${dataset.bookstore}/customers-json/export_001.json`\n"})})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","We managed to read the table, and here we can see the different columns of our table, the customer's ID, the email, the profile information, which itself is JSON string and the last updated timestamp",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","We can see also that our preview display shows all the 300 records of our source file",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","We can also use a wildcard character (",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"*"})}),") to query multiple files simultaneously"]}),"\n",(0,n.jsxs)(s.admonition,{type:"info",children:[(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"SELECT * FROM \xa0json.`${dataset.bookstore}/customers-json/export_*.json`\n"})}),(0,n.jsxs)(s.p,{children:["For example, here we are querying all the JSON files, starting with the name ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"export_"})}),(0,n.jsx)("br",{})]}),(0,n.jsx)(s.p,{children:"By default, the preview display shows only the first 1000 records"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"how-to-query-a-complete-directory",children:"How to query a complete directory"}),"\n",(0,n.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","We can query a complete directory of files, assuming all the files in the directory have the same format and schema",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Here we will specify simply the directory path rather than an individual file."]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"SELECT COUNT(*) FROM json.`{dataset.bookstore}/customers-json`\n"})})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","When reading multiple files, it is useful to add the ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"input_file_name()"})})," function, which is a built-in Spark SQL command that records the source data file for each record"]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",metastring:"{2}",children:"SELECT \n    input_file_name() as source_file\nFROM json.`{dataset.bookstore}/customers-json`;\n"})})}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsx)(s.p,{children:"This can be especially helpful if troubleshooting problems in the source data become necessary"})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","In addition to our columns, we have also the source file column",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Another interesting option here is to use the text format, which allows you to query and text-based files like ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"JSON"})}),", ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"CSV"})}),", ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"TSV"})}),", or ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"TEXT"})})," format"]}),"\n",(0,n.jsxs)(s.admonition,{type:"info",children:[(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",metastring:"{3}",children:"SELECT \n    input_file_name() as source_file\nFROM text.`{dataset.bookstore}/customers-json`\n"})}),(0,n.jsxs)(s.p,{children:["This load each line of the file as a row with one string column, ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Value"})})]})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","This can be useful when data could be corrupted. And we need to use, in such cases, some custom text parsing function to extract data",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","We can use ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"binaryFile"})})," to extract the raw bytes and some metadata of files"]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",metastring:"{3}",children:"SELECT \n    input_file_name() as source_file\nFROM binaryFile.`{dataset.bookstore}/customers-json`\n"})})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","As we can see here, this gives us the path of the file, the modification time, the length and the content, which is the binary representation of the file"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"how-to-query-and-parse-a-csv-file",children:"How to query and parse a CSV file"}),"\n",(0,n.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Let us now switch to reading books data which is coming in CSV format. In the same way we will use the SELECT statement, but this time with the CSV format"]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",metastring:"{3}",children:"SELECT \n    input_file_name() as source_file\nFROM csv.`{dataset.bookstore}/customers-json`\n"})})}),"\n",(0,n.jsxs)(s.admonition,{type:"warning",children:[(0,n.jsxs)(s.p,{children:["We managed to read the data. However, it is not well parsed",(0,n.jsx)("br",{})]}),(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"header"})})," row is being extracted as a table row and all columns are being loaded in a single column",(0,n.jsx)("br",{})]}),(0,n.jsxs)(s.p,{children:["It seems that this is because of the ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"delimiter"})})," of the file, which is in our case, a semicolon instead of a comma"]})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Querying files in this way works well only with self-describing formats"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Formats that have well-defined schema like JSON and parquet. However, for other formats like CSV where there is no schema defined, this does not work and we need another way that allows us to provide additional configuration and schema declaration",(0,n.jsx)("br",{})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"how-to-query-files-without-a-schema-defined-such-as-csv",children:"How to query files without a schema defined such as CSV"}),"\n",(0,n.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","One solution is to create a table with the ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"USING"})})," keyword"]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsx)(s.p,{children:"This allows us to create a table against an external sources like CSV format"})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Here we need to specify the table schema. I mean, the column names and types, the file format, which is in our case, CSV and whether if there is a header in the source files, and the delimiter used to separate fields, in our case, it's a semicolon",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","We need to specify the location to the files directory"]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",metastring:"{9-10}",children:'CREATE TABLE books_csv (\n    book_id STRING,\n    title STRING,\n    author STRING,\n    category STRING,\n    price DOUBLE\n) USING CSV \nOPTIONS (\n    header="true",\n    delimiter=";"\n) LOCATION "${dataset.bookstore}/books-csv"\n'})})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Let's now query this table"]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"SELECT * FROM books_csv\n"})})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","We have managed to read the books that are in the CSV files"]}),"\n",(0,n.jsxs)(s.admonition,{type:"info",children:[(0,n.jsxs)(s.p,{children:["Remember, when working with CSV files as a data source, it is important to ensure that column orders does not change if additional data files will be added to the source directory",(0,n.jsx)("br",{})]}),(0,n.jsx)(s.p,{children:"Spark will always load data and apply column names and data types in the order specified during table creation"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Let us now run ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"DESCRIBE EXTENDED"})})," to see some information on our table"]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"DESCRIBE EXTENDED books_csv\n"})})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Here we can see that we have created an external table. And this table is not a Delta table"]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsx)(s.p,{children:"It's a table that's referring directly to the CSV files. It means that no data has moved during table creation"})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","All the metadata and options passed during table creation will be persisted to the metadata, ensuring that data in the location will always be read with these options",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Let us now see the impact of not having a Delta Table",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","All the guarantees and features that we have them usually when work with Delta Tables we will no longer having them with external data sources like CSV"]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsx)(s.p,{children:"For example, Delta Lake Tables guarantee that you always query the most recent version of your source data, while tables registered against other data sources like CSV may represent older cached versions"})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Let us add some new CSV file to our directory and see what will happen",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Let us check how many CSV files we have in the directory",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Here we will use a Spark Dataframe API that allows us to write data in a specific format like CSV"]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-python",children:'spark.read.table(\n    "books_csv"\n).write.mode(\n    "append"\n).format(\n    "csv"\n).option(\n    "header", "true"\n).option(\n    "delimiter", ";"\n).save(f"{dataset_bookstore}/books-csv")\n'})})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","We are going to read our books table we have just created",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","We are going to rewrite the table data in new additional CSV files in the same directory",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Let us now see how many CSV files in the directory"]}),"\n",(0,n.jsxs)(s.admonition,{type:"info",children:[(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-python",children:'files = dbutils.fs.ls(\n    f"{dataset_bookstore}/books-csv"\n)\n\ndisplay(files)\n'})}),(0,n.jsx)(s.p,{children:"There are extra CSV files that have been written to the directory by Spark"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","If we calculate the number of books in our table, we should see 24 rows instead of 12"]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"SELECT COUNT(*) FROM books_csv\n"})})}),"\n",(0,n.jsxs)(s.admonition,{type:"warning",children:[(0,n.jsxs)(s.p,{children:["Even with the new data has been successfully written to the table directory, we are still unable to see this new data",(0,n.jsx)("br",{})]}),(0,n.jsx)(s.p,{children:"This is because Spark automatically cached the underlying data in local storage to ensure that on subsequent queries, Spark will provide the optimal performance by just querying this local cache"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","This external CSV file is not configured to tell Spark that it should refresh this data"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"how-to-refresh-the-table",children:"How to refresh the table"}),"\n",(0,n.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","We can manually refresh the cache of our data by running the REFRESH table command"]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"REFRESH TABLE books_csv\n"})})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Refreshing a table will invalidate its cache, meaning that we will need to scan our original data source and pull all data back into memory"]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsx)(s.p,{children:"For a very large dataset, this may take a significant amount of time"})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Let us now check again the number of books in our table. And indeed, refreshing the table now we see that we have 24 books"]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"SELECT COUNT(*) FROM books_csv\n"})})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","To create Delta tables where we load data from external sources, we use ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"CREATE TABLE AS SELECT"})})," statement or ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"CTAS"})})," statements"]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"CREATE TABLE customers As\nSELECT * FROM json.`${dataset.bookstore}/customers-json`;\n\nDESCRIBE EXTENDED customers;\n"})})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Here, we create and populate customer data table using data retrieved from this input query",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","These will extract the data from the JSON files and load them into the table, customers",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","From the table metadata, we can see that we are indeed creating a Delta Table, and it is also a managed table",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","We can see that schema has been inferred automatically from the query results",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"CTAS"})})," statements automatically infer schema information from a query results and do not support manual schema declaration."]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsxs)(s.p,{children:["This means that ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"CTAS"})})," statements are useful for external data ingestion from sources with well-defined schema such as parquet files and tables"]})}),"\n",(0,n.jsx)(s.admonition,{type:"warning",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"CTAS"})})," statements do not support specifying additional file options which presents significant limitation when trying to ingest data from CSV files"]})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","We have successfully created a Delta table here, however, the data is not well-parsed",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","To correct this, we need to first to use a reference to the files that allow us to specify options",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","This is what we are doing here by creating this temporary view that allows us to specify file options"]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",metastring:"{9-12}",children:'CREATE TEMP VIEW books_tmp_vw (\n    book_id STRING,\n    title STRING,\n    author STRING,\n    category STRING,\n    price DOUBLE\n) USING CSV \nOPTIONS (\n    path = "${dataset.bookstore}/books-csv.export_*.csv",\n    header="true",\n    delimiter=";"\n);\n\nCREATE TABLE books AS \nSELECT * FROM books_tmp_vw;\n\nSELECT * FROM books;\n'})})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","We will use this temporary view as the source for our ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"CTAS"})})," statement to successfully register the Delta table"]}),"\n",(0,n.jsxs)(s.admonition,{type:"info",children:[(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",metastring:"{14-15}",children:'CREATE TEMP VIEW books_tmp_vw (\n    book_id STRING,\n    title STRING,\n    author STRING,\n    category STRING,\n    price DOUBLE\n) USING CSV \nOPTIONS (\n    path = "${dataset.bookstore}/books-csv.export_*.csv",\n    header="true",\n    delimiter=";"\n);\n\nCREATE TABLE books AS \nSELECT * FROM books_tmp_vw;\n\nSELECT * FROM books;\n'})}),(0,n.jsx)(s.p,{children:"Notice here we are retrieving only 12 records because we use the wildcard in the path location"})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Let us finally check the metadata of our Delta Table",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","It's a Delta table where we have extracted all the data from the CSV files and loaded them into this location"]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"DESCRIBE EXTENDED books;\n"})})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>l,x:()=>r});var n=t(6540);const i={},a=n.createContext(i);function l(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);