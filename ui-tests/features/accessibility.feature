@smoketest @authenticationPage @arts-196 @arts-92 @arts-67

Feature: As an authenticated user
    I want to automatically see the welcome page when navigating to the landing page
    So that I am not guided to login again unnecessarily

    Background: Background name
        Given User launches the trial page URL

    Scenario: View welcome page when navigating to the landing page
        When User runs accessibility report on the trial page