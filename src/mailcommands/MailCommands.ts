import { Mailgun } from './providers/Mailgun';

export default class MailCommands {
  public mailProvider: Mailgun;

  constructor(mailProvider: Mailgun) {
    this.mailProvider = mailProvider;
  }
}
