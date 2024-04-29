#!/bin/bash
# Set environment variables to be able to push to GitHub with yarn deploy.
set USE_SSH=false
set GIT_USER=datavibesnl
set GIT_PASS=
set CURRENT_BRANCH=main # builds from main, deploys to deployment branch (see deploymentBranch: 'deployment' in docusaurus.config.json)

# for documentation see https://docusaurus.io/docs/