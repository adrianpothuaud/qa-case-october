Feature: Change phone number

    As an October lender
    I want to edit my phone number using my October mobile app So that I can complete the flow to edit my personal information
    
    Rules :
    1. User is already registered as a Lender on October platform
    2. User already has a registered mobile number added on the platform 
    3. User has already passed the email authentication
    4. User has already passed the birth-date question

    Scenario: Nominal case change phone number
        Given I am a Lender
        And I am logged in the app
        And I have completed the security steps to change my phone number 
        When I enter my new phone number
        Then I should receive a validation code by SMS

    # Edge cases:
    # bad phone number format
    Scenario: Change phone number with bad phone number format
        Given I am a Lender
        And I am logged in the app
        And I have completed the security steps to change my phone number
        When I enter special characters in phone number input
        Then I should not be able to submit to first security step
        And The special characters I have typed are not kept in input field

    # bad phone number
    Scenario: Change phone number with bad phone number
        Given I am a Lender
        And I am logged in the app
        And I have completed the security steps to change my phone number
        When I enter a phone number that is not mine
        Then I should not be able to submit to first security step
        And I should be warned that the phone number is not correct

    # Monkey tests: 
    # chain change phone number, what is the expected result ?
    # This question could have been asked on a 3 amigos ceremony
    # If Product Team says we limit to 2 times a day
    # then we should add these two scenarios
    Scenario: Chain change phone number less than 2 times
        Given I am a Lender
        And I am logged in the app
        And I have changed my phone number once
        And I have entered my phone number
        And I have completed the security steps to change again my phone number 
        When I enter my new phone number
        Then I should receive a validation code by SMS
        And In the SMS I am warned that it the last possible time for changing my phone number today

    Scenario: Chain change phone number more than 2 times
        Given I am a Lender
        And I am logged in the app
        And I have changed my phone number once
        And I have changed my phone number twice
        And I have entered my phone number
        And I have completed the security steps to change again my phone number 
        When I enter my new phone number
        Then I should not be able to submit
        And I am warned that I can't change my phone number twice a day