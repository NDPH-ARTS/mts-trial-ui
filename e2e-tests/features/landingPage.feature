# author - Sameera Purini

@smoketest @landingPage @arts-195 @arts-477 @arts-190

Feature: As a user
    I want to login to the system
    so that I can carry out business functions for managing trial entities

    Background: Navigate to the trial page
        Given User launches the trial page URL

    Scenario:  A trial has been launched with a configured name
        When the landing page displays the name of the trial
        Then  the landing page provides an option to initiate login

    Scenario:  Welcome Page displays the user’s Staff name
        When a user is authenticated
        Then the welcome page displays the name of the trial
        And the welcome page message is displayed
        And the welcome page message displays staffs information

    Scenario Outline: As a user I want to change my locale when working in my trial So that I can view my trial in my preferred locale
        When a default locale is set for the trial
        And user can change the locale from the preferences
        Then the settings is confirmed by checking the button text "<buttontext>" update
        Examples:
            | buttontext |
            | xLogoutx   |


