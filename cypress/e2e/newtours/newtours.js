import { Given, When, Then } from  "cypress-cucumber-preprocessor/steps"

Given ("precondition",()=>{

cy.visit("https://demo.guru99.com/test/newtours/");

})

When("action",()=>{

   cy.title().should('eq','Welcome: Mercury Tours');

})

Then('validation',()=>{

    cy.title().should('eq','Welcome: Mercury Tours');


})