/// <reference types="cypress" />

import MailRequest from './src/mailcommands/interfaces/MailRequest';

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to retrieve an e-mail and provide a link from this mail.
     *
     * @param request
     * @example
     ```
     cy.linkFromMail({
        email: mail,
        subject: "Aktiviere jetzt deinen Account",
        identifier: "a[href*=\"verifyEmail\"]",
        begin: begin
      }).then((extractedLink: string) => {
        cy.visit(extractedLink);
      });
     ```
     */
    linkFromMail (request: MailRequest): Chainable
  }
}
