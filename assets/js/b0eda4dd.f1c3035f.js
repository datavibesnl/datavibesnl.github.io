"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[401],{3542:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>o});var n=t(4848),i=t(8453);const c={},a="1.9 Databricks Repos",r={id:"Databricks Certified Data Engineer Associate - Preparation/Introduction/1.9 Databricks Repos",title:"1.9 Databricks Repos",description:"- [ ] In this lesson, we are going to explore Databricks Repos",source:"@site/docs/Databricks Certified Data Engineer Associate - Preparation/1. Introduction/1.9 Databricks Repos.md",sourceDirName:"Databricks Certified Data Engineer Associate - Preparation/1. Introduction",slug:"/Databricks Certified Data Engineer Associate - Preparation/Introduction/1.9 Databricks Repos",permalink:"/docs/Databricks Certified Data Engineer Associate - Preparation/Introduction/1.9 Databricks Repos",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"1.8 Notebook Fundamentals",permalink:"/docs/Databricks Certified Data Engineer Associate - Preparation/Introduction/1.8 Notebook Fundamentals"},next:{title:"2.1 Delta Lake",permalink:"/docs/Databricks Certified Data Engineer Associate - Preparation/Databricks Lakehouse Platform/2.1 Delta Lake"}},l={},o=[{value:"How to locate settings in Databricks to setup git integration?",id:"how-to-locate-settings-in-databricks-to-setup-git-integration",level:2},{value:"How to locate the personal access token in GitHub?",id:"how-to-locate-the-personal-access-token-in-github",level:2},{value:"How to connect Databricks to GitHub with the username and personal access token?",id:"how-to-connect-databricks-to-github-with-the-username-and-personal-access-token",level:2},{value:"How to create a new repository in GitHub?",id:"how-to-create-a-new-repository-in-github",level:2},{value:"How to create a new branch in Databricks?",id:"how-to-create-a-new-branch-in-databricks",level:2},{value:"How to clone an existing notebook from the Workspace?",id:"how-to-clone-an-existing-notebook-from-the-workspace",level:2},{value:"How to create a pull request in GitHub?",id:"how-to-create-a-pull-request-in-github",level:2},{value:"How to pull a branch from GitHub to Databricks?",id:"how-to-pull-a-branch-from-github-to-databricks",level:2}];function d(e){const s={admonition:"admonition",code:"code",h1:"h1",h2:"h2",input:"input",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"19-databricks-repos",children:"1.9 Databricks Repos"}),"\n",(0,n.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","In this lesson, we are going to explore ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Databricks Repos"})})," ",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","As we saw in the previous lecture, notebooks have some basic revision control built in. While this feature is useful, it is fairly basic."]}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsx)(s.p,{children:"For example, you cannot merge changes or create branches. In addition, this history can be easily deleted by the user."})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Instead we can use ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Databricks Repos"})}),". ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Databricks Repos"})})," provides source control for your data projects by integrating with GitHub providers ",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","In order to work with ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Databricks Repos"})}),", we must first configure git integration in our workspace"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"how-to-locate-settings-in-databricks-to-setup-git-integration",children:"How to locate settings in Databricks to setup git integration?"}),"\n",(0,n.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Under your username in the top bar, choose ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"User settings"})})," from the menu ",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Go to the ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"git integration"})})," tab"]}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsx)(s.p,{children:"As you can see from the git provider dropdown menu, Databricks has native integration with several git providers like GitHub and Azure DevOps"})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","To connect Databricks to one of the git providers, you need your git service username and a personal access token"]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsx)(s.p,{children:"In this demo we will use GitHub, so let us switch there to get this information"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"how-to-locate-the-personal-access-token-in-github",children:"How to locate the personal access token in GitHub?"}),"\n",(0,n.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","In GitHub, click on your avatar in the top bar"]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsx)(s.p,{children:"Here it displays the username for the account"})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","For the token, let us select ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Settings"})})," ",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Scroll to ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Developer settings"})}),". ",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","From the left choose ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Personal Access Token"})})," ",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Choose ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Tokens (classic)"})})," ",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Click generate a new token, classic token",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","In the new personal access token page, specify a note describing the purpose of the token and an expiration date",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Choose ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Repo scope"})})," and scroll to click ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Generate token"})})," ",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Here is our token. Let us copy this string now"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"how-to-connect-databricks-to-github-with-the-username-and-personal-access-token",children:"How to connect Databricks to GitHub with the username and personal access token?"}),"\n",(0,n.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Let us switch back to our Databricks workspace ",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","With GitHub selected as GitHub provider. Let us fill in our GitHub username and personal token ",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Click ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Save"})})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"how-to-create-a-new-repository-in-github",children:"How to create a new repository in GitHub?"}),"\n",(0,n.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Each Databricks repo maps to a Git repository ",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","In order to set up a repo, let's first create a repository in GitHub ",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Go to the main GitHub landing page and click ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"New"})})," to create a repository ",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Specify a name for the repository. ",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Choose ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Private"})}),". And enable ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Add a README"})})," file ",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Click ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Create repository"})})," ",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Copy the HTTPS URL of this newly created repository",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Switch back to our Databricks workspace ",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","From the left side bar, go to the ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Repo"})})," tab. Click ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Add Repo"})})," ",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Paste here the URL of the Git repository"]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsx)(s.p,{children:"Notice that the git provider and the repository name has been filled automatically"})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Click ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Submit"})})," ",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Here is our new repo, which contains a local copy of the remote git repository"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"how-to-create-a-new-branch-in-databricks",children:"How to create a new branch in Databricks?"}),"\n",(0,n.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Let us create a new branch named ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"development"})}),(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Click on the branch name to open the Repo dialog ",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Click ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Create branch"})})," ",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Specify the branch name ",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Click ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Create"})})]}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsx)(s.p,{children:"Once created it automatically becomes the current branch"})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","With the ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"development"})})," branch created and selected, we can now begin making changes as needed ",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Let us create a folder ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"my folder"})}),", for example ",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Add a notebook ",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","You can also import a notebook. From file or URL"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"how-to-clone-an-existing-notebook-from-the-workspace",children:"How to clone an existing notebook from the Workspace?"}),"\n",(0,n.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Or clone an existing notebook from the workspace into the repo ",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Go to the ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Workspace"})})," tab ",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Click ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Next"})})," to our Notebook Basics created in the last lecture and select ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Clone"})}),(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Choose my folder and click ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Clone"})})," ",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","If we go back to ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Databricks Repo"})}),", we see that our new folder containing two notebooks ",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Let us now push these changes to our remote repository ",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Click on the branch name"]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsx)(s.p,{children:"Here we see all our changes"})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Let us first write a commit message ",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Click ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Commit & push"})})," ",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","If we switch back now our main branch, as expected, we don't see here the new folder and notebooks we created in the ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"development"})})," branch"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"how-to-create-a-pull-request-in-github",children:"How to create a pull request in GitHub?"}),"\n",(0,n.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","To be able to pull these changes into the main branch, let us create a pull request in GitHub ",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","From here we go to the ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"development"})})," branch ",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Click ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Contribute"})}),", ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Open pull request"})})," ",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Click ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Create pull request"})}),". Then ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Merge pull request"})}),". ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Confirm merge"})})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"how-to-pull-a-branch-from-github-to-databricks",children:"How to pull a branch from GitHub to Databricks?"}),"\n",(0,n.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Let us switch back to our Databricks ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Workspace"})})," to see how to pull this in Databricks repos ",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Click on the branch name to open the repos dialog ",(0,n.jsx)("br",{})]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.input,{type:"checkbox",disabled:!0})," ","With the main branch selected, click the ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"Pull"})})," button on the right"]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsx)(s.p,{children:"Remember pulling regularly is important to avoid conflicts especially when multiple developers are developing on the same branch"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>a,x:()=>r});var n=t(6540);const i={},c=n.createContext(i);function a(e){const s=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(c.Provider,{value:s},e.children)}}}]);