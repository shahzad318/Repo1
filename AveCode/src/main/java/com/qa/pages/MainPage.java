package com.qa.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.qa.util.TestBase;

public class MainPage extends TestBase {

	// Sign In Button
	@FindBy(xpath = "//a[contains(text(),'Sign In')]")
	WebElement signInButton;

	public MainPage() {
		PageFactory.initElements(driver, this);
	}

	public String validateMainPageTitle() {
		return driver.getTitle();
	}

	public SignInPage clickMainPageSignInButton() {
		signInButton.click();
		return new SignInPage();

	}

}
