describe('The Home Page', () => {
    it('Successfully loads', () => {
        cy.visit('/') // change URL to match your dev URL
    })

    it('Contains texts', () => {
        cy.contains('Search Valkyries')
        cy.contains('Memorial Arena Teams')
        cy.contains('Rixuel#4336')
    })

    it('Loads other page', () => {
        cy.contains('Search Valkyries').click()
        // Verify the '/valk' in the URL
        cy.url().should('include', '/valk')
        cy.contains('Return to Hub').click()
        cy.contains('Memorial Arena Teams').click()
        // Verify the '/ma' in the URL
        cy.url().should('include', '/ma')
        cy.contains('Return to Hub').click()
    })
})
