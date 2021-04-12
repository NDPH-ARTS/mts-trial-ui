@smoketest @VersionPage @arts-760

Feature: As a user
    I want to know what versions of MTS services are currently being used
    So that I can ensure I am testing the correct version

    Background: Navigate to the trial page
        Given User launches the trial page URL
        When I navigate to About screen

    Scenario Outline: User can view the services version on ABOUT screen in a logged out state
        Then I can view the version number against the sevice name "microservice" "version"
        And I can also see the timestamp of the deployment "timestamp"
        Examples:
            | microservice         | version | timestamp |
            | role-service         | 1.0     | 09:10:05  |
            | site-service         | 1.0     | 09:10:05  |
            | practitioner service | 1.0     | 09:10:05  |
            | config service       | 1.0     | 09:10:05  |


    Scenario Outline: User can view the services version on ABOUT screen in a logged In state
        When a user is authenticated
        Then I can view the microservice version
        And I can also see the timestamp of the deployment
        Examples:
            | microservice         | version | timestamp |
            | role service         | 1.0     | 09:10:05  |
            | site service         | 1.0     | 09:10:05  |
            | practitioner service | 1.0     | 09:10:05  |
            | config service       | 1.0     | 09:10:05  |


# Scenario Outline: User can view the UI version on ABOUT screen in a logged out state
#     Then I can view the UI version
#     Examples:
#         | UI         | version |
#         | UI version | 1.0     |

# Scenario Outline: User can view the UI version on ABOUT screen in a logged In state
#     Then I can view the UI version
#     Examples:
#         | UI         | version |
#         | UI version | 1.0     |
