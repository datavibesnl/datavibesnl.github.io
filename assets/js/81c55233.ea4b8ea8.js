"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1401],{4937:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=t(4848),a=t(8453);const i={},r="3.7 Lab \u2013 TSQL ORDER BY clause",o={id:"DP203 \u2013 Data Engineering on Microsoft Azure 2023/Design and implement data storage \u2013 Overview on TransactSQL/3.7 Lab \u2013 TSQL ORDER BY clause",title:"3.7 Lab \u2013 TSQL ORDER BY clause",description:"- [ ] The ORDER BY clause can be used to sort the results set, the data that is coming in from the table, based on your SELECT statement in ascending or descending order.",source:"@site/docs/DP203 \u2013 Data Engineering on Microsoft Azure 2023/3. Design and implement data storage \u2013 Overview on TransactSQL/3.7 Lab \u2013 TSQL ORDER BY clause.md",sourceDirName:"DP203 \u2013 Data Engineering on Microsoft Azure 2023/3. Design and implement data storage \u2013 Overview on TransactSQL",slug:"/DP203 \u2013 Data Engineering on Microsoft Azure 2023/Design and implement data storage \u2013 Overview on TransactSQL/3.7 Lab \u2013 TSQL ORDER BY clause",permalink:"/docs/DP203 \u2013 Data Engineering on Microsoft Azure 2023/Design and implement data storage \u2013 Overview on TransactSQL/3.7 Lab \u2013 TSQL ORDER BY clause",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"3.6 Lab  TSQL  WHERE Clause",permalink:"/docs/DP203 \u2013 Data Engineering on Microsoft Azure 2023/Design and implement data storage \u2013 Overview on TransactSQL/3.6 Lab  TSQL  WHERE Clause"},next:{title:"3.8 Lab \u2013 TSQL \u2013 Aggregate Functions",permalink:"/docs/DP203 \u2013 Data Engineering on Microsoft Azure 2023/Design and implement data storage \u2013 Overview on TransactSQL/3.8 Lab \u2013 TSQL \u2013 Aggregate Functions"}},c={},l=[];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",input:"input",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"37-lab--tsql-order-by-clause",children:"3.7 Lab \u2013 TSQL ORDER BY clause"}),"\n",(0,s.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," ","The ORDER BY clause can be used to sort the results set, the data that is coming in from the table, based on your SELECT statement in ascending or descending order. ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"By default, the records are actually sorted in ascending order"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," ","Let us say that you want to sort the records based on the ListPrice",(0,s.jsx)("br",{})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," ","When you get the information from an underlying table there is no guarantee on the sorting of rows that is given to you",(0,s.jsx)("br",{})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," ","If you want to sort the information that is being displayed to you within the table based on a particular column information we can use the ORDER BY clause",(0,s.jsx)("br",{})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," ","I can do an ORDER BY and let us say the ListPrice",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM SalesLT.Product\nORDER BY ListPrice\n"})})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," ","If you want to get the information in descending order, you can add this particular keyword, hit on execute, and you get the result accordingly",(0,s.jsx)("br",{})]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var s=t(6540);const a={},i=s.createContext(a);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);