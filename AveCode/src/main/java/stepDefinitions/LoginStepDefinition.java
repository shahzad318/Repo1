package stepDefinitions;

import com.qa.pages.MainPage;
import com.qa.pages.SignInPage;
import com.qa.pages.TaskPage;
import com.qa.pages.WelcomePage;
import com.qa.util.TestBase;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginStepDefinition extends TestBase {
	
	MainPage mainPage;
	SignInPage signInPage;
	WelcomePage welcomePage;
	TaskPage taskPage;
	
	//US#1- Create Sub Task Test Cases
	
	@Given("^user is already on Main Page$")
	public void user_is_already_on_Main_Page() {
		initialization();
		//Verify page Main page Title
		String title = mainPage.validateMainPageTitle();
		Assert.assertEquals(title, "ToDo Rails and Angular");
		System.out.println("Main_Page Title: " + title);
	    
	}

	@Given("^user verify the page title$")
	public void user_verify_the_page_title() {
	   
	}

	@When("^user clicks Sign In link$")
	public void user_clicks_Sign_In_link() {
		signInPage = mainPage.clickMainPageSignInButton();
	   
	}

	@Then("^page navigates to Sign In Page$")
	public void page_navigates_to_Sign_In_Page() {
		String title = signInPage.validateSignInPageTitle();
		Assert.assertEquals(title, "ToDo Rails and Angular");
		System.out.println("Sign_In_Page Title: " + title);
	    
	}

	@Then("^user enters email and password$")
	public void user_enters_email_and_password() {
		welcomePage = signInPage.signIn(prop.getProperty("email"), prop.getProperty("password"));
	    
	}

	@Then("^page navigates to Welcome page$")
	public void page_navigates_to_Welcome_page() {
	    String title = welcomePage.welcomePageTitle();
	    Assert.assertEquals(title, "ToDo Rails and Angular");
		System.out.println("Welcome_Page Title: " + title);
	    
	}

	@Then("^verify My Task Link is visible on Navigation Bar$")
	public void verify_My_Task_Link_is_visible_on_Navigation_Bar() {
		String taskText = welcomePage.verifyTextPresent();
		Assert.assertEquals(taskText, "My Tasks");
		System.out.println(taskText);
	    
	}

	@Then("^click My Task Link$")
	public void click_My_Task_Link() {
	    taskPage = welcomePage.clickMyTaskLink();
	}

	@Then("^verify Logged user name with required message$")
	public void verify_Logged_user_name_with_required_message() {
		System.out.println("COMPLETE LATER");
	    
	}

	@Then("^type three or more characters in Task field and press Enter or click add button$")
	public void type_three_or_more_characters_in_Task_field_and_press_Enter_or_click_add_button()  {
	    
		taskPage.createTask(prop.getProperty("MoreThanThreeCharacters"));
	}

	@Then("^verify the created task$")
	public void verify_the_created_task() {	
		String enteredTask = taskPage.verifyAddedTask();
		Assert.assertEquals(prop.getProperty("MoreThanThreeCharacters"), enteredTask);
		System.out.println("New Task Entered: " + enteredTask);
	   
	}
		
	
	//US#2 - Create SubTask Test Cases
	
	@Then("^verify Manage Subtasks button$")
	public void verify_Manage_Subtasks_button() {
	   String text = taskPage.isDisplayedManageSubtasks();
	   Assert.assertEquals(text, "Manage Subtasks");
	}

	@Then("^click Manage Subtasks button$")
	public void click_Manage_Subtasks_button() {
		taskPage.clickManageSubTasks();
	    
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
