import MailRequest from './mailcommands/interfaces/MailRequest';
import MailCommands from './mailcommands/MailCommands';
import { Mailgun } from './mailcommands/providers/Mailgun';

const mailgunProvider = new Mailgun();
const mailCommands = new MailCommands(mailgunProvider);

Cypress.Commands.add('linkFromMail', (request: MailRequest) => {
  return mailCommands.mailProvider.linkFromMail(request)
    .then((response) => {
      return response;
    });
});
