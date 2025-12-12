Feature: Article Management
  Scenario: Create, verify and delete an article
    Given the user is logged into the 'Conduit' application
    And they create a new article
    When the user is on the new article page
    Then they can see the article title, description and tags
    And they can delete the article successfully