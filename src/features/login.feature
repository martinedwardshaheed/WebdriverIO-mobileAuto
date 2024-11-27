Feature: Login to the application

  Scenario Outline: Login with various user credentials
    Given I launch the application
    When I login with username "<username>" and password "<password>"
    Then I should see the "<result>" message

    Examples:
      | username           | password   | result            |
      | bob@example.com    | 10203040   | Welcome           |
      | alice@example.com  | 10203040   | User is locked    |
      | 1@2.com            | f-o-o      | Invalid login     |
      |                   |            | Missing details   |
