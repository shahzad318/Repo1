package com.qa.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.qa.util.TestBase;

public class TaskPage extends TestBase {

	// Text Field
	@FindBy(id = "new_task")
	WebElement newTask;

	@FindBy(xpath = "//span[contains(@class, 'input-group-addon glyphicon glyphicon-plus')]")
	WebElement addTask;

	@FindBy(xpath = "//a[contains(text(),'My First Task')]")
	WebElement addedTask;
	
	//Manage Subtasks WebElement
	@FindBy(xpath = "//button[contains(@class, 'btn btn-xs btn-primary ng-binding')]")
	WebElement subTasks;

	// Initialize the WebElements
	public TaskPage() {
		PageFactory.initElements(driver, this);

	}

	public void createTask(String task) {
		newTask.sendKeys(task);
		addTask.click();
	}

	public String verifyAddedTask() {
		return addTask.getText();

	}
	
	//US#2 - Create SubTask
	
	//'Manage Subtasks' Text
	public String isDisplayedManageSubtasks() {
		return subTasks.getText();
	}
	
	//click 'Manage Subtasks' button
	public void clickManageSubTasks() {
		subTasks.click();
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}
