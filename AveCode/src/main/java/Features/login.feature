Feature: Ave Code Task Project
Scenario: US#1 create Task

Given user is already on Main Page
And user verify the page title
When user clicks Sign In link
Then page navigates to Sign In Page
Then user enters email and password
Then page navigates to Welcome page
And verify My Task Link is visible on Navigation Bar
And click My Task Link
And verify Logged user name with required message
Then type three or more characters in Task field and press Enter or click add button
Then verify the created task

And verify Manage Subtasks button
And click Manage Subtasks button







