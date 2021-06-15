# Lab Instructions

LAB: Node Ecosystem, CI, CD
Time to get hands on with Node.js development! Today, you’ll create and deploy a web server using CI and CD and get used to the general process of building and deploying servers, and prepping your work for grading

The Setup
Github
Create a new repository at GitHub, called server-deployment-practice
Select the “Add a README” option
Select the “Add a .gitignore” option, and choose Node.js
Opt for the MIT license
Clone this to your local machine.
Immediately create a “dev” branch to do your work in git checkout -b dev
Heroku
At heroku, we’re going to setup 2 deployments. One for your dev branch and one for your main branch. As you check in code, you should be able to see Heroku instantly deploy from GitHub, assuming your tests pass!

Login to your Heroku account
Create a new Heroku app, called yourname-server-deploy-dev
Go to the deployment tab
Choose “GitHub”
Connect to your repository
Choose the “dev” branch
Choose the “Wait for CI to pass before deploy” option
Choose the “enable automatic deploys” option
Create a new Heroku app, called yourname-server-deploy-prod
Go to the deployment tab
Choose “GitHub”
Connect to your repository
Choose the “master” or “main” branch
Choose the “Wait for CI to pass before deploy” option
Choose the “enable automatic deploys” option
The Code
You’ve been provided a working demo server by your instructor. Get this code working locally. Note that while you are permitted to simply copy the files, it’s better if you create the server from scratch, typing the lines of code in the demo provide. Build up your muscle memory

Initialize your app – npm init -y
Install your dependencies – npm i dotconfig express jest
Create the files and folders required for the application
Create the correct content in the files
Test your server – npm test
You should see 100% of tests passing
Start your server – nodemon
Visit http://localhost:3000/data in your browser to confirm that the server is visible
Deploy!
Now that you have it all running, let’s get it deployed.

First: Deploy to Dev
Complete an ACP on your dev branch.
Go immediately to the repository on GitHub and open the actions tab
You should see your tests running
If they were passing on your local machine, they’ll also pass here
Once your tests have passed, go to Heroku.com and look at your dev app’s Activity tab, it should show you an active deployment
When it completes, go to the Heroku app URL and open your server in the browser, you should see the same results as you saw locally.
Second, go to production
Once your dev run has completed, you have successfully deployed your application through github, with tests to an app on Heroku

Now, we’re going to complete the “real” deployment process

Go to your repository on GitHub
Open a pull request from dev to main
If your tests are passing, you will be able to merge this branch
Once you merge, the tests will run again using GitHub actions
Once the tests pass, Heroku will deploy your “main” branch to your “production” app!
When that process completes, open your app in the browser to prove it.
Document your work
Open up the README.md file in your editor. It should contain the notes your instructor provided during their demo
Change the URLs to point to your Heroku applications, your Github actions, and your pull request
Add your drawings and notes
ACP this to your dev, then master
Assignment Submission Instructions
In Canvas, submit a link to your completed README.md file from the dev branch. Your grader will make any notes to you in the PR itself.

Refer to the the Submitting Standard Node.js Lab Submission Instructions for a review of the complete lab submission process and expectations

© Code Fellows 2021
