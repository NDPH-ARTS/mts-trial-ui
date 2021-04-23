@smoketest @aboutPage @arts-760

Feature: As a user
    I want to know what versions of MTS services are currently being used
    So that I can ensure I am testing the correct version

    Background: Navigate to the trial page
        Given User launches the trial page URL
        When User navigates to About screen

    Scenario Outline: User can view the services version on ABOUT screen
        Then I can view the version number against the service name "<Service>", "<Version>"
        And I can view the time stamp of the build deployed
        Examples:
            | Service       | Version       |
            | dummy service | dummy service |


