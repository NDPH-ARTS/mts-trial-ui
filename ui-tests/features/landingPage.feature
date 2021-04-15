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
        And user navigates to the landing or welcome page
        Then the welcome page message displays staffs information

    @arts-190
    Scenario:  Welcome Page has the locale set to English
        And a default locale is set for the trial
        And user can change the locale from the preferences
        Then user can reset to default locale





