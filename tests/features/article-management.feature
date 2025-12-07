Feature: Article Management
  As a logged in user
  I want to create and delete articles
  So that I can manage my content on the Conduit application

  Scenario: Create and delete an article
    Given the user is logged into the 'Conduit' application
    And they create a new article
    When the user is on the new article page
    Then they can delete the article successfully
