Feature: First security step for edit phone number

    As an October lender
    I want to verify my identity through email on the October app 
    So that I can edit my personal information safely
    
    Rules :
    1. User is already registered as a Lender on October platform
    2. User already has a registered mobile number added on the platform 
    3. User already has a registered email address added on the platform 
    4. Validation code is sent by email to this registered email address
    5. Validation code is made of 6 digits
    6. Validation code is valid for one hour
    7. User has received the validation code

    Scenario: Nominal case for first security step on edit phone number
        Given I am a Lender
        And I am logged in the app
        And I am completing the security steps to change my phone number 
        When I have entered the correct code
        Then I should be able to enter my birth-date

    # edge cases
    # type an invalid verification code
    Scenario: First security step on edit phone number, invalid OTP
        Given I am a Lender
        And I am logged in the app
        And I am completing the security steps to change my phone number
        When I have entered an invalid code
        Then I should not be able to enter my birth-date
        And I must be warned that my validation code is not correct

    # go after code validity timeout
    Scenario: First security step on edit phone number, OTP timeout limit
        Given I am a Lender
        And I am logged in the app
        And I am completing the security steps to change my phone number
        When I wait for an hour
        And I have entered the correct code
        Then I should not be able to enter my birth-date
        And I must be warned that my validation code is expired

    # monkey tests
    # type less than 6 digits
    Scenario: First security step on edit phone number, less than 6 digits
        Given I am a Lender
        And I am logged in the app
        And I am completing the security steps to change my phone number
        When I have entered 5 digits
        Then I should not be able to enter my birth-date

    # type more than 6 digits
    Scenario: First security step on edit phone number, more than 6 digits
        Given I am a Lender
        And I am logged in the app
        And I am completing the security steps to change my phone number
        When I have entered 12 digits
        Then Only the 6 first digits are kept in validation code input field