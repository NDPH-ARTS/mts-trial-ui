# author - Sameera Purini

@smoketest @assignedSites @arts-48

Feature: As a user
    I want to see a list of the trial sites I have been assigned to in my trial
    So that I can understand which trial sites I can access

    Background: Navigate to the trial page
        Given User launches the trial page URL

    Scenario Outline: A bootstrap user can view all sites
        When a bootstrap user login to a specific trial
        And navigates to assigned sites tab from welcome page
        Then the user should be able to view all the "<assignedSites>"
        Examples:
            | assignedSites                                                   |
            | CCO,EUROPE,ENGLAND,SCOTLAND,GLASGOW,NEWCASTLE,SUNDERLAND,LONDON |
