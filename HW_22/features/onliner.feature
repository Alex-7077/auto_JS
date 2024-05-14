Feature: Search functionality on Onliner

  Scenario Outline: Search for different items
    Given I am on the Onliner homepage
    When I search for "<item>"
    Then I should see "<item>" in the results

    Examples:
      | item      |
      | ноутбуки  |
      | телевизоры|
      | лампы     |


  Scenario: Visit the Baraholka page
    Given I am on the main page
    When I click on the "Барахолка" link
    Then I should see the "Барахолка" page title

  Scenario: Visit the Uslugi page
    Given I am on the main page
    When I click on the "Услуги" link
    Then I should see the "Услуги" page title

  Scenario: Visit the Forum page
    Given I am on the main page
    When I click on the "Форум" link
    Then I should see the "Форум" page title