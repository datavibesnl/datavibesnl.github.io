"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[573],{5649:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var t=n(4848),i=n(8453);const r={},a="6.1 Data Objects Privileges",c={id:"Databricks Certified Data Engineer Associate - Preparation/Data Governance/6.1 Data Objects Privileges",title:"6.1 Data Objects Privileges",description:"- [ ] In this video, we will talk about data object privileges in Databricks",source:"@site/docs/Databricks Certified Data Engineer Associate - Preparation/6. Data Governance/6.1 Data Objects Privileges.md",sourceDirName:"Databricks Certified Data Engineer Associate - Preparation/6. Data Governance",slug:"/Databricks Certified Data Engineer Associate - Preparation/Data Governance/6.1 Data Objects Privileges",permalink:"/docs/Databricks Certified Data Engineer Associate - Preparation/Data Governance/6.1 Data Objects Privileges",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"5.5 Databricks SQL",permalink:"/docs/Databricks Certified Data Engineer Associate - Preparation/Production Pipelines/5.5 Databricks SQL"},next:{title:"6.2 Managing Permissions (Hands On)",permalink:"/docs/Databricks Certified Data Engineer Associate - Preparation/Data Governance/6.2 Managing Permissions Hands On"}},l={},d=[{value:"Data objects",id:"data-objects",level:2},{value:"Privileges",id:"privileges",level:2},{value:"Granting Privileges by Role",id:"granting-privileges-by-role",level:2},{value:"More operations",id:"more-operations",level:2}];function o(e){const s={admonition:"admonition",code:"code",h1:"h1",h2:"h2",input:"input",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"61-data-objects-privileges",children:"6.1 Data Objects Privileges"}),"\n",(0,t.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","In this video, we will talk about data object privileges in Databricks",(0,t.jsx)("br",{})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","You will understand the Databricks Data Governance model",(0,t.jsx)("br",{})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","You will learn how to manage permissions for different data objects like databases, tables and views",(0,t.jsx)("br",{})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","The data governance model in Databricks lets you programmatically ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"GRANT"})}),", ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"DENY"})}),", and ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"REVOKE"})})," access to your data from Spark SQL",(0,t.jsx)("br",{})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Here is a general command that allows you to give an access privilege on a specific data object to a user or group of users"]}),"\n",(0,t.jsxs)(s.admonition,{type:"info",children:[(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"GRANT Privilege\r\nON Object <object_name>\r\nTO <user or group>\n"})}),(0,t.jsxs)(s.p,{children:["We can give read access, translated by the ability to do a ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"SELECT"})})," operation, on a table called ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"my_table"})})]})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","This permission is assigned to ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"user_1"})}),(0,t.jsx)("br",{})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","This table here is a data object on which we set permissions"]}),"\n",(0,t.jsx)(s.admonition,{type:"info",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"GRANT SELECT\r\nON TABLE my_table\r\nTO user_1@company.com\n"})})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"data-objects",children:"Data objects"}),"\n",(0,t.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Let us see what our other object types we have in Databricks",(0,t.jsx)("br",{})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Databricks allows you to configure permissions for the following object types"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Object"}),(0,t.jsx)(s.th,{children:"Scope"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"CATALOG"})}),(0,t.jsx)(s.td,{children:"Controls access to the entire data catalog"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"SCHEMA"})}),(0,t.jsx)(s.td,{children:"Controls access to a database"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"TABLE"})}),(0,t.jsx)(s.td,{children:"Controls access to a managed or external table"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"VIEW"})}),(0,t.jsx)(s.td,{children:"Controls access to SQL views"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"FUNCTION"})}),(0,t.jsx)(s.td,{children:"Controls access to a named function"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"ANY FILE"})}),(0,t.jsx)(s.td,{children:"Controls access to the underlying filesystem"})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"privileges",children:"Privileges"}),"\n",(0,t.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","The following privileges can be configured on the data objects"]}),"\n"]}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Privilege"}),(0,t.jsx)(s.th,{children:"Ability"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"SELECT"})})}),(0,t.jsx)(s.td,{children:"Read access to an object"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"MODIFY"})})}),(0,t.jsx)(s.td,{children:"Add, delete and modify data to or from an object"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"CREATE"})})}),(0,t.jsx)(s.td,{children:"Create an object"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"READ_METADATA"})})}),(0,t.jsx)(s.td,{children:"View an object and its metadata"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"USAGE"})})}),(0,t.jsx)(s.td,{children:"No effect required to perform any action on a database object"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"ALL PRIVILEGES"})})}),(0,t.jsx)(s.td,{children:"Gives all privileges"})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"granting-privileges-by-role",children:"Granting Privileges by Role"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Role"}),(0,t.jsx)(s.th,{children:"Can grant access privileges for"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"Databricks administrator"})}),(0,t.jsx)(s.td,{children:"All objects in the catalog and the underlying filesystem"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"Catalog owner"})}),(0,t.jsx)(s.td,{children:"All objects in the catalog"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"Database owner"})}),(0,t.jsx)(s.td,{children:"All objects in the database"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"Table owner"})}),(0,t.jsx)(s.td,{children:"Only the table"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"..."})}),(0,t.jsx)(s.td,{children:"..."})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"more-operations",children:"More operations"}),"\n",(0,t.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","In addition to ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"GRANT"})})," operation, you have also other useful operations to manage object privileges"]}),"\n",(0,t.jsx)(s.admonition,{type:"info",children:(0,t.jsx)(s.p,{children:"You can deny and revoke privileges"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>c});var t=n(6540);const i={},r=t.createContext(i);function a(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);