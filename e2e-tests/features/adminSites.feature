# author - Sameera Purini

@smoketest @adminSites @arts-774 @arts-76

Feature: As a trial administrator user
    I want to see a list of the trial sites I have permission to administer in my trial
    So that I can understand which trial sites I can view

    Background: Navigate to the trial page
        Given User launches the trial page URL

    Scenario Outline: System displays only the trial sites I am assigned to with a role that includes the View Trial Sites permission and their child trial sites if applicable
        When an LCC user logs in to a specific trial
        And User chooses to view the Trial Sites Administration list
        Then The list view displays the following data "<SiteName>", "<SiteType>", "<ParentSite>"
        And I can see the last updated date
        Then I click on the first row to trigger a modal popup
        And I can view the site description field
        Then I will check for the presence of site status
        Examples:
            | SiteName | SiteType | ParentSite |
            | CCO      | CCO      |            |




