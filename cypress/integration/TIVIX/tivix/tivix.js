import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps"

Given('User visit tivixlabs Site', function () {
    cy.visit('http://qalab.pl.tivixlabs.com/')
})
And('User select country and city from the dropdown', function () {
    cy.get('#country').select('Germainy').should('have.value', "2")
    cy.get('#city').select('Cracow').should('have.value', "2")

})

And('User type model name in the model', function () {
    cy.get('#model').type('Skoda Octavia')

})
And('User select pick-up and drop-of date', function () {
    cy.get('#pickup').type('2022-08-01')
    cy.get('#dropoff').type('2022-08-02')

})

When('User click on search button', function () {
    cy.get('.btn-primary').click()
})

Then('User validate the url', function () {
    cy.url().should('contain', 'country')
})

// User is unable to search cars with invalid data entry

And('User select country and city from the dropdown', function () {
    cy.get('#country').select('Germainy').should('have.value', "2")
    cy.get('#city').select('Cracow').should('have.value', "2")

})

And('User type model name in the model', function () {
    cy.get('#model').type('Skoda Octavia')

})
And('User select incorrect pick-up and drop-of date', function () {
    cy.get('#pickup').type('2022-08-03')
    cy.get('#dropoff').type('2022-08-02')

})

When('User click on search button', function () {
    cy.get('.btn-primary').click()
})

Then('User validate the text', function () {
    cy.get('.alert-danger').should('contain', 'Please enter a valid date!')

})

// User is able to fill a rent form

And('User select country and city from the dropdown', function () {
    cy.get('#country').select('Germainy').should('have.value', "2")
    cy.get('#city').select('Cracow').should('have.value', "2")

})

And('User type model name in the model', function () {
    cy.get('#model').type('Skoda Octavia')

})
And('User select pick-up and drop-of date', function () {
    cy.get('#pickup').type('2022-08-01')
    cy.get('#dropoff').type('2022-08-02')

})

When('User click on search button', function () {
    cy.get('.btn-primary').click()
})

And('User click on selected model rent button', function () {
    cy.get('.btn-success').eq(7).click()
})

Then('User click on selected car rent button to fill the personal data', function () {
    cy.get('.btn-primary').click()
})

Then('User fill the personal data', function () {
    cy.get('#name').type('Yogesh')
    cy.get('#last_name').type('Ambre')
    cy.get('#card_number').type(12345)
    cy.get('#email').type('yogesh@gmail.com')
})
