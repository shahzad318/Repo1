$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Shahzad/Documents/AveCodeBDD/AveCode/src/main/java/Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Ave Code Task Project",
  "description": "",
  "id": "ave-code-task-project",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "US#1 create Task",
  "description": "",
  "id": "ave-code-task-project;us#1-create-task",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user is already on Main Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user verify the page title",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user clicks Sign In link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "page navigates to Sign In Page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user enters email and password",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "page navigates to Welcome page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "verify My Task Link is visible on Navigation Bar",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "click My Task Link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "verify Logged user name with required message",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "type three or more characters in Task field and press Enter or click add button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "verify the created task",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "verify Manage Subtasks button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "click Manage Subtasks button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_Main_Page()"
});
formatter.result({
  "duration": 494202936,
  "error_message": "java.lang.NullPointerException\r\n\tat java.io.FileInputStream.\u003cinit\u003e(Unknown Source)\r\n\tat java.io.FileInputStream.\u003cinit\u003e(Unknown Source)\r\n\tat com.qa.util.TestBase.\u003cinit\u003e(TestBase.java:22)\r\n\tat stepDefinitions.LoginStepDefinition.\u003cinit\u003e(LoginStepDefinition.java:14)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n\tat ✽.Given user is already on Main Page(C:/Users/Shahzad/Documents/AveCodeBDD/AveCode/src/main/java/Features/login.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefinition.user_verify_the_page_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_Sign_In_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.page_navigates_to_Sign_In_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.user_enters_email_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.page_navigates_to_Welcome_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.verify_My_Task_Link_is_visible_on_Navigation_Bar()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.click_My_Task_Link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.verify_Logged_user_name_with_required_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.type_three_or_more_characters_in_Task_field_and_press_Enter_or_click_add_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.verify_the_created_task()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.verify_Manage_Subtasks_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.click_Manage_Subtasks_button()"
});
formatter.result({
  "status": "skipped"
});
});