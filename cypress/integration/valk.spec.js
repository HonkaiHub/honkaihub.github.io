describe('Search Valkyries Page', () => {
    it('Successfully loads', () => {
        cy.visit('/valk') // change URL to match your dev URL
    })

    it('Contains texts', () => {
        cy.contains('Search')
        cy.contains('How to?')
        cy.contains('Rixuel#4336')
        cy.contains('Return to Hub')
    })

    it('Show \"How to?\" and empty the output after', () => {
        cy.get('#clickHowTo').click()
        cy.get('#clickButton').click()
    })

    it('Show a search result and empty the output after', () => {
        cy.get('#searchInput')
        .type('Kiana').should('have.value', 'Kiana')
        cy.get('#clickButton').click()
        cy.get('#searchInput').clear()
        .should('have.value', '')
        cy.get('#clickButton').click()
    })

    it('Search by First Name', () => {
        cy.get('#searchInput')
        .clear()
        .type('Kiana').should('have.value', 'Kiana')
        cy.get('#clickButton').click()
        cy.contains('Kiana Kaslana')
    })

    it('Search by Last Name', () => {
        cy.get('#searchInput')
        .clear()
        .type('Kaslana').should('have.value', 'Kaslana')
        cy.get('#clickButton').click()
        cy.contains('Kiana Kaslana')
    })

    it('Search by Full Name', () => {
        cy.get('#searchInput')
        .clear()
        .type('Himeko Murata').should('have.value', 'Himeko Murata')
        cy.get('#clickButton').click()
        cy.contains('Himeko Murata')
    })

    it('Search by Reversed Full Name', () => {
        cy.get('#searchInput')
        .clear()
        .type('Murata Himeko').should('have.value', 'Murata Himeko')
        cy.get('#clickButton').click()
        cy.contains('Himeko Murata')
    })

    it('Search by Battlesuit', () => {
        cy.get('#searchInput')
        .clear()
        .type('Argent Knight').should('have.value', 'Argent Knight')
        cy.get('#clickButton').click()
        cy.contains('Search Result found: 1')
        cy.contains('Rita Rossweisse')

        cy.get('#searchInput')
        .clear()
        .type('Battle Storm').should('have.value', 'Battle Storm')
        cy.get('#clickButton').click()
        cy.contains('Search Result found: 1')
        cy.contains('Himeko Murata')

        cy.get('#searchInput')
        .clear()
        .type('Herrscher of Thunder').should('have.value', 'Herrscher of Thunder')
        cy.get('#clickButton').click()
        cy.contains('Search Result found: 1')
        cy.contains('Mei Raiden')
    })

    it('Search by Type', () => {
        cy.get('#searchInput')
        .clear()
        .type('Mech').should('have.value', 'Mech')
        cy.get('#clickButton').click()
        cy.get('.typeimg')
        .should('be.visible')
        .and('have.attr', 'src')
        .should('include','MECH')

        cy.get('#searchInput')
        .clear()
        .type('Bio').should('have.value', 'Bio')
        cy.get('#clickButton').click()
        cy.get('.typeimg')
        .should('be.visible')
        .and('have.attr', 'src')
        .should('include','BIO')

        cy.get('#searchInput')
        .clear()
        .type('Psy').should('have.value', 'Psy')
        cy.get('#clickButton').click()
        cy.get('.typeimg')
        .should('be.visible')
        .and('have.attr', 'src')
        .should('include','PSY')

        cy.get('#searchInput')
        .clear()
        .type('Qua').should('have.value', 'Qua')
        cy.get('#clickButton').click()
        cy.get('.typeimg')
        .should('be.visible')
        .and('have.attr', 'src')
        .should('include','QUA')
    })

    it('Search by Soul', () => {
        cy.get('#searchInput')
        .clear()
        .type('Original').should('have.value', 'Original')
        cy.get('#clickButton').click()
        cy.contains('Soul: Original')

        cy.get('#searchInput')
        .clear()
        .type('Awakening').should('have.value', 'Awakening')
        cy.get('#clickButton').click()
        cy.contains('Soul: Awakening')
    })

    it('Search by Weapon', () => {
        cy.get('#searchInput')
        .clear()
        .type('Cannons').should('have.value', 'Cannons')
        cy.get('#clickButton').click()
        cy.contains('Weapon: Cannons')

        cy.get('#searchInput')
        .clear()
        .type('Crosses').should('have.value', 'Crosses')
        cy.get('#clickButton').click()
        cy.contains('Weapon: Crosses')

        cy.get('#searchInput')
        .clear()
        .type('Gauntlets').should('have.value', 'Gauntlets')
        cy.get('#clickButton').click()
        cy.contains('Weapon: Gauntlets')

        cy.get('#searchInput')
        .clear()
        .type('Greatswords').should('have.value', 'Greatswords')
        cy.get('#clickButton').click()
        cy.contains('Weapon: Greatswords')

        cy.get('#searchInput')
        .clear()
        .type('Katanas').should('have.value', 'Katanas')
        cy.get('#clickButton').click()
        cy.contains('Weapon: Katanas')

        cy.get('#searchInput')
        .clear()
        .type('Lances').should('have.value', 'Lances')
        cy.get('#clickButton').click()
        cy.contains('Weapon: Lances')

        cy.get('#searchInput')
        .clear()
        .type('Pistols').should('have.value', 'Pistols')
        cy.get('#clickButton').click()
        cy.contains('Weapon: Pistols')

        cy.get('#searchInput')
        .clear()
        .type('Scythes').should('have.value', 'Scythes')
        cy.get('#clickButton').click()
        cy.contains('Weapon: Scythes')
    })

    it('Search by Tag', () => {
        cy.get('#searchInput')
        .clear()
        .type('[HoV]').should('have.value', '[HoV]')
        cy.get('#clickButton').click()
        cy.contains('Kiana Kaslana')

        cy.get('#searchInput')
        .clear()
        .type('[HoR]').should('have.value', '[HoR]')
        cy.get('#clickButton').click()
        cy.contains('Bronya Zaychik')

        cy.get('#searchInput')
        .clear()
        .type('[dudu]').should('have.value', '[dudu]')
        cy.get('#clickButton').click()
        cy.contains('Bianka Ataegina')
    })
})
