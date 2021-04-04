# author - Sameera Purini

@smoketest @assignedSites @arts-48

Feature: As a user
    I want to login to the system
    so that I can carry out business functions for managing trial entities

    Background: Navigate to the trial page
        Given User launches the trial page URL

    Scenario: A bootstrap user can view all sites
        When a bootstrap user login to a specific trial
        And navigates to assigned sites tab from welcome page
        Then the user should be able to view all the assigned sites

    Scenario: A regional user can view sites only within its region
        And User can succesfully logout of the session
        When a regional user login to a specific trial
        And navigates to assigned sites tab from welcome page
        Then the user should be able to view all sites within that region

# Scenario: An LCC user can view sites only within its country
#     And User can succesfully logout of the session
#     When an LCC user logs in to a specific trial
#     And navigates to assigned sites tab from welcome page
#     Then the user should only be able to view two sites within that country
