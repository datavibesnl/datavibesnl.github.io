"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3785],{5339:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=n(4848),s=n(8453);const i={},r="3.8 Lab \u2013 TSQL \u2013 Aggregate Functions",o={id:"DP203 \u2013 Data Engineering on Microsoft Azure 2023/Design and implement data storage \u2013 Overview on TransactSQL/3.8 Lab \u2013 TSQL \u2013 Aggregate Functions",title:"3.8 Lab \u2013 TSQL \u2013 Aggregate Functions",description:"- [ ] It is very important to actually understand the structured query language at least the basics",source:"@site/docs/DP203 \u2013 Data Engineering on Microsoft Azure 2023/3. Design and implement data storage \u2013 Overview on TransactSQL/3.8 Lab \u2013 TSQL \u2013 Aggregate Functions.md",sourceDirName:"DP203 \u2013 Data Engineering on Microsoft Azure 2023/3. Design and implement data storage \u2013 Overview on TransactSQL",slug:"/DP203 \u2013 Data Engineering on Microsoft Azure 2023/Design and implement data storage \u2013 Overview on TransactSQL/3.8 Lab \u2013 TSQL \u2013 Aggregate Functions",permalink:"/docs/DP203 \u2013 Data Engineering on Microsoft Azure 2023/Design and implement data storage \u2013 Overview on TransactSQL/3.8 Lab \u2013 TSQL \u2013 Aggregate Functions",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"3.7 Lab \u2013 TSQL ORDER BY clause",permalink:"/docs/DP203 \u2013 Data Engineering on Microsoft Azure 2023/Design and implement data storage \u2013 Overview on TransactSQL/3.7 Lab \u2013 TSQL ORDER BY clause"},next:{title:"3.9 Lab \u2013 TSQL \u2013 GROUP BY clause",permalink:"/docs/DP203 \u2013 Data Engineering on Microsoft Azure 2023/Design and implement data storage \u2013 Overview on TransactSQL/3.9 Lab \u2013 TSQL \u2013 GROUP BY clause"}},c={},l=[];function d(e){const t={admonition:"admonition",code:"code",h1:"h1",input:"input",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"38-lab--tsql--aggregate-functions",children:"3.8 Lab \u2013 TSQL \u2013 Aggregate Functions"}),"\n",(0,a.jsxs)(t.ul,{className:"contains-task-list",children:["\n",(0,a.jsxs)(t.li,{className:"task-list-item",children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.input,{type:"checkbox",disabled:!0})," ","It is very important to actually understand the structured query language at least the basics",(0,a.jsx)("br",{})]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{className:"task-list-item",children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.input,{type:"checkbox",disabled:!0})," ","Another important thing that you will probably do in a SQL data warehouse is use aggregate functions",(0,a.jsx)("br",{})]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{className:"task-list-item",children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.input,{type:"checkbox",disabled:!0})," ","If you want to aggregate your data, there are functions available within the structured query language",(0,a.jsx)("br",{})]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{className:"task-list-item",children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.input,{type:"checkbox",disabled:!0})," ","We had already seen one function before and that is the COUNT function",(0,a.jsx)("br",{})]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{className:"task-list-item",children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.input,{type:"checkbox",disabled:!0})," ","If you want to look at the number of records that are being returned by a particular statement, a SELECT statement, we can go ahead and use the COUNT function",(0,a.jsx)("br",{})]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{className:"task-list-item",children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.input,{type:"checkbox",disabled:!0})," ","Let me use the COUNT function again and we can use a combination of the different statements you have seen so far. The WHERE clause and say where the name is like what we had seen before Road. So, give me a count of records which fulfill this particular condition",(0,a.jsx)("br",{})]}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"SELECT COUNT(*) FROM SalesLT.Product\nWHERE Name LIKE '%Road%'\n"})})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{className:"task-list-item",children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.input,{type:"checkbox",disabled:!0})," ","You will see that there is no column name being assigned here because we have used an aggregate function to kind of give us some information. We can actually project a particular column name for this. I can say Count",(0,a.jsx)("br",{})]}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"SELECT COUNT(*) AS 'Count' FROM SalesLT.Product\nWHERE Name LIKE '%Road%'\n"})})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{className:"task-list-item",children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.input,{type:"checkbox",disabled:!0})," ","Let us say you want to get information based on the ListPrice. I want to get the maximum ListPrice from the table, using this filter condition. So, for those products which have the keyword of road within them, what is the maximum ListPrice?",(0,a.jsx)("br",{})]}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"SELECT MAX(ListPrice) FROM SalesLT.Product\nWHERE Name LIKE '%Road%'\n"})})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{className:"task-list-item",children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.input,{type:"checkbox",disabled:!0})," ","If you want to get the average ListPrice, we can use this particular function",(0,a.jsx)("br",{})]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{className:"task-list-item",children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.input,{type:"checkbox",disabled:!0})," ","If you want to get the sum of the ListPrice, so this may not exactly make sense in this particular context wherein you are trying to get the sum of the entire list price just so you know that this particular function is available",(0,a.jsx)("br",{})]}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"SELECT SUM(ListPrice) FROM SalesLT.Product\nWHERE Name LIKE '%Road%'\n"})})}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var a=n(6540);const s={},i=a.createContext(s);function r(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);