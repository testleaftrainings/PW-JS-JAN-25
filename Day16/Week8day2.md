Day :2
------
Custom retry
Custom Reports
GithubActions -ci integration
Hands on

----------------------
for allure reports
Step:1 npm install -D allure-playwright
Step:2 set the allure-report lib in the config
export default defineConfig({
  reporter: "allure-playwright",
});
step:3
allure generate ./allure-results -o ./allure-report
step:4
allure open ./allure-report

github action ->CI integration

Step:1 -->add extention Github actions
Step:2 -->iniitlaize the repository
step:3 -->Add commit message
step:4--> Publish branch


Through terminal:
----------------
step:1 -> Open terminal from project folder
stpe:2 -> Initialize the git report
                git init
step:3 -> Check if you are connected with remote repo of yours
                git remote -v
              it shows the repo as 
PS C:\Users\DELL\Documents\PageObjectModel> git remote -v
to know the access of remote
       --> if not add your username and email 
       git congig --global user.email "mail@example.com"
       git config --global user.name "username"

step:4 -->add files to the repo 
          git add . 

step:5 --> commmit the message
           git commit

step:6 --->Add the remote  url where to push the code should have .git as extention
             git add remote http://usermame-repo.git

step:7 --> push the file
        git push -u origin master/main