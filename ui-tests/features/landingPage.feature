@landingPage @arts-195

Feature: As a user
    I want to login to the system
    so that I can carry out business functions for managing trial entities

    Background: Navigate to the trial page
        Given User launches the trial page URL

    Scenario:  A trial has been launched with a configured name
        When the landing page displays the name of the trial
        Then  the landing page provides an option to initiate login



