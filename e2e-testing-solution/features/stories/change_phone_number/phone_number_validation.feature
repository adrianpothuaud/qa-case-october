Feature: Phone number validation on change phone number field

    As an October lender
    I want to verify my new phone number
    So that I can make sure I input a valid number before validating my changes
    
    Rules :
    1. User is already registered as a Lender on October platform
    2. User already has a registered mobile number added on the platform 
    3. User has already passed the bio-metric security
    4. User has already passed the birth-date question
    5. Validation code is sent by SMS to the new phone number
    6. User has received the validation code

    Scenario: Nominal case for phone number validation on change phone number
        Given I am a Lender
        And I am logged in the app
        And I have completed the security steps to change my phone number
        When I enter the correct validation code I received on my new phone number 
        Then I should finish the flow to change my phone number
        And I should see my phone number changed in my Personal information tab
