package com.qa.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.qa.util.TestBase;

public class WelcomePage extends TestBase {

	// My Task
	@FindBy(xpath = "//a[contains(@href, '/tasks')]")
	WebElement myTask;
	
	// My Task Text
	@FindBy(xpath="//a[contains(text(),'My Tasks')]")
	WebElement myTaskText;

	// Initialize the WebElement
	public WelcomePage() {
		PageFactory.initElements(driver, this);
	}

	public String welcomePageTitle() {
		return driver.getTitle();
	}
	
	public String verifyTextPresent() {
		return myTaskText.getText();
	}

	public TaskPage clickMyTaskLink() {
		myTask.click();
		return new TaskPage();

	}

}
