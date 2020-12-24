@landingPage

Feature: As a user
    I want to view a landing page with an option to authenticate
    So that I can login to the trial

    Background: Naviagate to the trial page
        Given User navigates to the landing page URL

    @arts-195 @arts-196
    Scenario: a trial has been launched with a configured name
        When the landing page displays the name of the trial
        Then the landing page provides an option to initiate login
        Then the user is on the authentication page
        And  the user is able to logout of the landing page successfully

    @arts-67 @arts-92
    Scenario: check the user authentication process
        When User enters an invalid authentication details
        Then User is informed that the login has not been successful
        And  I am not able to view the trial welcome page
