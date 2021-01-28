import MailCommands from './mailcommands/index';
import Request from './mailcommands/interfaces/Request';
import { Mailgun } from './mailcommands/providers/mailgun';

const mailgunProvider = new Mailgun();
const mailCommands = new MailCommands(mailgunProvider);

Cypress.Commands.add('linkFromMail', (request: Request) => {
  return mailCommands.fetchMail(request).then((response) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const filteredMails = response.items.filter(
      (mail: any) => mail.message.headers.subject.indexOf(request.subject) > -1,
    );

    return mailCommands.fetchMailById(filteredMails[0].storage.key).then((response) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return Cypress.$(response['body-html']).find(request.identifier).attr('href');
    });
  });
});
