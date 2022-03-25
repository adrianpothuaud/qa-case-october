< [Readme](../../../../Readme.md)

# Added scenarios

## [change_phone_number.feature](change_phone_number.feature)

```gherkin
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
```

## [first_security_step.feqture](first_security_step.feature)

```gherkin
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
```

## [second_security_step.feature](second_security_step.feature)

```gherkin
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
```