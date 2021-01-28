import { Mailgun } from './providers/mailgun';
import Request from './interfaces/Request';

export default class MailCommands {
  public mailProvider: Mailgun;

  constructor(mailProvider: Mailgun) {
    this.mailProvider = mailProvider;
  }

  fetchMail(request: Request) {
    return this.mailProvider.api.getMails(request);
  }

  fetchMailById(id: string) {
    return this.mailProvider.storageApi.getMail(id);
  }
}
