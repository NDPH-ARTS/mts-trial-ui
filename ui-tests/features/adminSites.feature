# author - Sameera Purini

@smoketest @adminSites @arts-774

Feature: As a trial administrator user
    I want to see a list of the trial sites I have permission to administer in my trial
    So that I can understand which trial sites I can view

    Background: Navigate to the trial page
        Given User launches the trial page URL
        When an LCC user logs in to a specific trial

    Scenario Outline: System displays only the trial sites I am assigned to with a role that includes the View Trial Sites permission and their child trial sites if applicable
        And User chooses to view the Trial Sites Administration list
        Then The list view displays the following columns "<SiteName>", "<SiteType>", "<ParentSite>"
        And I can see the last updated date
        Examples:
            | SiteName | SiteType | ParentSite |
            | CCO      | CCO      |            |
