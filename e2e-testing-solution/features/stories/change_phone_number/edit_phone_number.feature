Feature: Edit Phone Number

    As an October lender
    I want to change my phone number using my October web app
    So that I can manage my account without contacting the Customer Success team
    
    Rules :
    1. User is already registered as a Lender on October platform
    2. User already has a registered mobile number added on the platform
    3. User already has a registered email address added on the platform 
    4. Validation code is sent by email to this registered email address
    5. Validation code is made of 6 digits
    6. Validation code is valid for one hour

    Scenario: Nominal case edit phone number
        Given I am a Lender
        And I am logged in the app
        And I am viewing the Personal information tab in my account 
        When I click on the “Change” in the phone number section 
        Then I should be asked to authenticate myself
        And I should receive a 6-digit code by email
