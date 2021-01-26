@smoketest @authenticationPage @arts-196 @arts-92 @arts-67

Feature: As an authenticated user
    I want to automatically see the welcome page when navigating to the landing page
    So that I am not guided to login again unnecessarily

    Background: Background name
        Given User launches the trial page URL

    Scenario Outline: Scenario Outline name: View welcome page when navigating to the landing page
        When a user is authenticated "<Username>", "<Password>"
        And user navigates to the landing or welcome page
        Then the welcome page message is displayed
        And User can succesfully logout of the session

        Examples:
            | Username                                                 | Password     |
            | dGVzdC1hdXRvbWF0aW9uQG10c2Rldm5kcGgub25taWNyb3NvZnQuY29t | T3hmb3JkOTA5 |

    Scenario Outline: Non-authenticated used doesn't land on the welcome page
        When User enters non-authenticated credentials "<Username>"
        Then User is shown an error message
        Examples:
            | Username                                             |
            | YXV0b21hdGlvbkBtdHNkZXZuZHBoLm9ubWljcm9zb2Z0LmNvbQ== |

