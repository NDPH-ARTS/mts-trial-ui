# @authenticationPage @arts-196 @arts-92

# Feature: As an authenticated user
#     I want to automatically see the welcome page when navigating to the landing page
#     So that I am not guided to login again unnecessarily

#     Background: Navigate to the trial page
#         Given User launches the trial page URL

#     Scenario: View welcome page when navigating to the landing page
#         Given a user is authenticated
#         When they navigate to the landing page
#         Then the welcome page is displayed

#     Scenario: Non-authenticated used doesn't land on the welcome page
#         When a user enters non-authenticated credentials
#         Then an error message is shown

