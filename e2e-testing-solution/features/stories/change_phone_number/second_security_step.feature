Feature: Second security step for edit phone number

    As an October lender
    I want to verify my identity with a personal question
    So that I can make sure I have a complete 2FA verification flow
    
    Rules :
    1. User is already registered as a Lender on October platform
    2. User already has a registered mobile number added on the platform 
    3. User has already passed the email authentication
    4. User has already filled the birth-date information on their profile

    Scenario: Nominal case for second security step on change phone number
        Given I am a Lender
        And I am logged in the app
        And I am completing the security steps to change my phone number 
        When I have entered my birth-date
        Then I should be able to edit my phone number

    # edge case
    # bad birth date format
    Scenario: Second security step on change phone number with bad date format
        Given I am a Lender
        And I am logged in the app
        And I am completing the security steps to change my phone number
        When I have entered "qwertyuiop" on birth-date input
        Then I should not be able to edit my phone number
        And I should be warned that the birth-date is not valid
        # it depends on the product team expectations

    # bad birth date
    Scenario: Second security step on change phone number with bad date
        Given I am a Lender
        And I am logged in the app
        And I am completing the security steps to change my phone number
        When I have entered a birth-date that is not mine
        Then I should not be able to edit my phone number
        And I should be warned that the birth-date is not valid