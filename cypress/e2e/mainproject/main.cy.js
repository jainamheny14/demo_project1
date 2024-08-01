describe("Sign-up form testing", () => {

    it("Type all details of signup page", () => {
        cy.visit("https://magento.softwaretestingboard.com/"); // URL
        cy.get('[class="header links"]')
            .should("be.visible") // Assertion
            .contains("Create an Account")
            .click();
        cy.get('[id="firstname"]')
            .should("be.visible") // Assertion
            .click()
            .type("John"); // Input
        cy.get('[id="lastname"]')
            .should("be.visible") // Assertion
            .click()
            .type("Pearson"); // Input
        cy.get('[id="email_address"]')
            .should("be.visible") // Assertion
            .click()
            .type("johnpearson123@gmail.com"); // Input
        cy.get('[id="password"]')
            .should("be.visible") // Assertion
            .click()
            .type("John123#"); // Input
        cy.get('[id="password-confirmation"]')
            .should("be.visible") // Assertion
            .click()
            .type("John123#"); //Input
        cy.get('[class="action submit primary"]')
            .should("be.visible") // Assertion
            .click();
        cy.get('[class="message-success success message"]')
            .should("be.visible"); // Assertion
    });

    it("Type all details of Signin Page", () => {
        cy.visit("https://magento.softwaretestingboard.com/"); //URL
        cy.get('[class="header links"]')
            .should("be.visible") // Assertion
            .contains("Sign In")
            .click();
        cy.get('[id="email"]')
            .should("be.visible") // Assertion
            .click()
            .type("johnpearson123@gmail.com"); // Input
        cy.get('[name="login[password]"]')
            .should("be.visible") // Assertion
            .click()
            .type("John123#"); // Input
        cy.get('[id="send2"]')
            .should("be.visible") // Assertion
            .contains("Sign In")
            .click();
    });
})