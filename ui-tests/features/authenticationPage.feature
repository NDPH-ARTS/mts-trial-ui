@smoketest @authenticationPage @arts-196 @arts-92 @arts-67
@ignore
Feature: As an authenticated user
    I want to automatically see the welcome page when navigating to the landing page
    So that I am not guided to login again unnecessarily

    Background: Background name
        Given User launches the trial page URL

    Scenario: View welcome page when navigating to the landing page
        When a user is authenticated
        And user navigates to the landing or welcome page
        Then the welcome page message is displayed
        And User can succesfully logout of the session

    Scenario: Non-authenticated used doesn't land on the welcome page
        When User enters non-authenticated credentials
        Then User is shown an error message

