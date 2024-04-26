"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6989],{5565:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>r});var i=n(4848),t=n(8453);const l={},o="1.8 Notebook Fundamentals",c={id:"Databricks Certified Data Engineer Associate - Preparation/Introduction/1.8 Notebook Fundamentals",title:"1.8 Notebook Fundamentals",description:"- [ ] In this lesson, we will practice working with Databricks Notebooks",source:"@site/docs/Databricks Certified Data Engineer Associate - Preparation/1. Introduction/1.8 Notebook Fundamentals.md",sourceDirName:"Databricks Certified Data Engineer Associate - Preparation/1. Introduction",slug:"/Databricks Certified Data Engineer Associate - Preparation/Introduction/1.8 Notebook Fundamentals",permalink:"/docs/Databricks Certified Data Engineer Associate - Preparation/Introduction/1.8 Notebook Fundamentals",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"1.7 Creating a Cluster",permalink:"/docs/Databricks Certified Data Engineer Associate - Preparation/Introduction/1.7 Creating Cluster"},next:{title:"1.9 Databricks Repos",permalink:"/docs/Databricks Certified Data Engineer Associate - Preparation/Introduction/1.9 Databricks Repos"}},a={},r=[{value:"Access the filesystem with <strong><code>dbutils</code></strong>",id:"access-the-filesystem-with-dbutils",level:2}];function d(e){const s={admonition:"admonition",code:"code",h1:"h1",h2:"h2",input:"input",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"18-notebook-fundamentals",children:"1.8 Notebook Fundamentals"}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","In this lesson, we will practice working with Databricks Notebooks ",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Click on the ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"Workspace"})})," tab ",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Choose ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"Create"})})," and then ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"Notebook"})})," ",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Give your notebook a friendly name"]}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsx)(s.p,{children:"For example, Demo notebook"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Select the default language"]}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsx)(s.p,{children:"Databricks notebooks support Python, SQL, Scala and R"})}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsx)(s.p,{children:"A language is selected when a notebook is created but this can be changed at any time"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Select ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"Python"})})," ",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","We will choose our cluster we created in the last session ",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Click ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"Create"})})]}),"\n",(0,i.jsxs)(s.admonition,{type:"info",children:[(0,i.jsxs)(s.p,{children:["Notebooks are coding environments allowing you to interactively developing and executing code on Databricks",(0,i.jsx)("br",{})]}),(0,i.jsxs)(s.p,{children:["You can also collaborate between different team members by sharing the notebook",(0,i.jsx)("br",{})]}),(0,i.jsx)(s.p,{children:"If you have previously used Jupyter Notebook, for example, you will notice that the basic functionality is the same, but with additional features and capabilities that you might enjoy"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Any time you can change the name of the notebook, simply click on the notebook name to change it"]}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsx)(s.p,{children:"For example, let us change it to Notebook Basics"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Before running any computation, we need to attach our notebook to a cluster on which our code will be running ",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","From the top bar here, I can see all my created clusters and their status if they are running or not ",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Let us connect to the ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"Demo cluster"})})," ",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Select the cluster and click ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"Start"})})," ",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Click ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"Confirm"})})]}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsx)(s.p,{children:"The green circle next to the cluster name indicates that the cluster is up and running"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Notebooks provide cell by cell execution of codes. ",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Let us print a hello world message ",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","In order to run a cell, you can click on the play button and choose ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"Run cell"})}),(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","You can also run all the above cells or all the below cells"]}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsxs)(s.p,{children:["You can use ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"Shift + Enter"})})," shortcut"]})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","If needed, you can easily check the default language for a Notebook. ",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Click on the ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"Python"})})," option and select the new language from this dropdown list ",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","To create a new cell hover below the current cell and click the ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"(+)"})})," button ",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","If you try to run some SQL code in this Python notebook, this will not work. For example, here is a ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"sql SELECT"})})," statement. If you run this cell. You get a syntax error ",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","In a notebook, you can change the language of a specific cell. Simply, you need to click on the Python option and choose SQL"]}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.p,{children:["This added what we call a magic command identified by a single ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"%"})})," sign at the start of a cell"]})}),"\n",(0,i.jsxs)(s.admonition,{type:"info",children:[(0,i.jsxs)(s.p,{children:["Magic commands are built in commands that provide the same output regardless of the notebook language",(0,i.jsx)("br",{})]}),(0,i.jsx)(s.p,{children:"This is called Language Magic command that allows the execution of code in a language other than the notebook's default"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Another useful magic command is the markdown magic command (",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"%md"})}),") that allows us to have a cell formatted with text ",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Double click the cell to edit it and let us add more formatted text ",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Once done, hit ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"ESC"})})," to stop editing and see the results ",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","By adding titles using markdowns, they will be added automatically to the notebook table of content"]}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsx)(s.p,{children:"On the left, click on this arrow. This is extremely useful as it allows to easily navigate your notebook"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","We also have the run magic command that allows us to run another notebook from the current notebook ",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","To illustrate this, let us first create another notebook. From the ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"Workspace"})})," tab, let us, for example, create a folder and name it ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"Includes"})})," ",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Within this folder, let us create a notebook and we name it ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"Setup"})}),". Hit ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"Create"})})," ",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","In this notebook, we will simply define a variable called ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"full_name"})})," and assigned my name as a value for this variable ",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Come back to our main notebook"]}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sh",children:"%run ./Includes/Setup\n"})})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Let us run this cell"]}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsx)(s.p,{children:"The referenced notebook here executes as if it were part of the current notebook"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","If you think about this magic command, it is very powerful because it helps you to reuse your code and build your notebooks in a modular approach ",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Databricks also provides the ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"%fs"})})," magic command to deal with file system operations like ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"ls"})})," for listing files in a given directory"]}),"\n",(0,i.jsxs)(s.admonition,{type:"info",children:[(0,i.jsx)(s.p,{children:"For example, we are listing all files and folders in the default dataset location, which is available in every workspace"}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sh",children:'%fs ls "/databricks-datasets"\n'})})]}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsx)(s.p,{children:"This location has sample data set provided by Databricks"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.h2,{id:"access-the-filesystem-with-dbutils",children:["Access the filesystem with ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"dbutils"})})]}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Another way to deal with filesystem operations to use Databricks utilities, also known as ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"dbutils"})})]}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"dbutils"})})," provides a number of utility commands for configuring and interacting with the environment"]})}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.p,{children:["To get some help for each utility, you can use ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"dbutils.help()"})})," function"]})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","As you can see with the ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"dbutils"})}),", you can interact with different services and tools like: credentials, fs for file system, secrets and widgets"]}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"dbutils.fs"})})," allows you to interact with the Databricks file system or DBFS"]})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","To get some help on this."]}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sh",children:"dbutils.fs.help()\n"})})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","From here we can see that the ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"fs"})})," has a number of available commands, like copying and removing files ",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","In addition, we also have the ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"ls"})})," command that allows us to list the content of a directory. Let us try this"]}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.p,{children:["Databricks also supports auto-completion using the ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"Tab"})})," key"]})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Let us hit ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"Tab"})})," in this case and select ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"ls"})}),", click enter. And specify the folder path, in our case ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"/databricks-datasets"})})]}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sh",children:"dbutils.fs.ls('/databricks-datasets')\n"})})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","The question for the file system operation, should we use ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"dbutils"})})," or the ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"%fs"})})," magic command we saw previously? In fact, ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"dbutils"})})," is more useful than the ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"%fs"})})," magic command since you can use ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"dbutils"})})," as part of python code"]}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsx)(s.p,{children:"You can get the list of files for example in a variable and do some logic with it in Python."})}),"\n",(0,i.jsx)(s.admonition,{title:'"Example: List files in directory"',type:"info",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"files = dbutils.fs.ls('/databricks-datasets')\n"})})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","As you can see, the output is very messy and hard to read. Instead, you can display it in a much better way using the ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"display"})})," function"]}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"files = dbutils.fs.ls('/databricks-datasets')\ndisplay(files)\n"})})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Here we see the output is rendered in a tabular format with some fields like:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"path"})}),";"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"filename"})}),";"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"size"})}),";"]}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"modification time"})})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","With the ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"display"})})," function, you can also download data as CSV file and render the result as a graph"]}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsxs)(s.p,{children:["However, the ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"display"})})," function is ",(0,i.jsx)(s.strong,{children:"limited"})," to preview only 1000 records"]})}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.p,{children:["When running SQL queries from cells, results will be always displayed in a tabular format like here, so there is no need to use the ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"display"})})," function with SQL."]})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","At the end of the day, you may want to download your notebook. You can just click on the file menu, then ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"Export"})})," and you choose ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"IPython Notebook"})})," ",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","We can also export a folder that contains multiple notebooks from the ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"Workspace"})})," tab. If we click next to the folder, we have the option to export it as ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"DBC archive"})})," ",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(s.admonition,{type:"note",children:[(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.strong,{children:"DBC"})," or the ",(0,i.jsx)(s.strong,{children:"Databricks Cloud"})," file is a zip file that contains a collection of directories and notebooks",(0,i.jsx)("br",{})]}),(0,i.jsx)(s.p,{children:"This file can be uploaded into any Databricks workspace to move or share notebooks"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","To import a notebook or a collection of notebooks in DBC file, simply click here on the down arrow and choose ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"Import"})})," ",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","In Databricks, you can access the revision history of all the changes being made on a notebook ",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Click on the ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"Last Edit"})})," link. From here, you can choose any of the auto-saved versions ",(0,i.jsx)("br",{})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Click ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"Restore this revision"})})," ",(0,i.jsx)("br",{})]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>c});var i=n(6540);const t={},l=i.createContext(t);function o(e){const s=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(l.Provider,{value:s},e.children)}}}]);