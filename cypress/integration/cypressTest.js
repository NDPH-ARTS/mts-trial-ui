
describe('As a user I want to view a landing page with an option to authenticate So that I can login to the trial', function () {
    it('User navigates to the landing page of the existing trial', function () {
        cy.visit("http://localhost:4200/");
        cy.clearCookies()
    })


    it('the landing page provides an option to initiate login', function () {
        cy.get("#login_button").click();
    })
})