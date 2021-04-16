@smoketest @landingPage @arts-477
Feature: As a user
    I want to change my locale when working in my trial
    So that I can view my trial in my preferred locale

    Scenario Outline: As a user I want to change my locale when working in my trial So that I can view my trial in my preferred locale
        Given User launches the trial page URL
        When a regional user login to a specific trial
        Then a default locale is set for the trial
        And user can change the locale from the preferences
        Then the settings is confirmed by checking the button text "<buttontext>" update
        Examples:
            | buttontext |
            | xLogoutx   |