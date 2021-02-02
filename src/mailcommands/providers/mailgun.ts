import { HttpClient } from '../HttpClient';
import Request from '../interfaces/Request';

class MailgunApi extends HttpClient {
  public constructor() {
    super({
      baseURL: Cypress.env('mailgunApi'),
      auth: {
        username: Cypress.env('mailgunUsername'),
        password: Cypress.env('mailgunPassword'),
      },
    });
  }

  public getMails = (request: Request) =>
    this.instance.get(`/events?ascending=yes&limit=25&begin=${request.begin}&recipient=${request.email}`);
}

class MailgunStorageApi extends HttpClient {
  public constructor() {
    super({
      baseURL: Cypress.env('mailgunStorageApi'),
      auth: {
        username: Cypress.env('mailgunUsername'),
        password: Cypress.env('mailgunPassword'),
      },
    });
  }

  public getMail = (id: string) => this.instance.get(`/messages/${id}`);
}

export class Mailgun {
  public api: MailgunApi;

  public storageApi: MailgunStorageApi;

  constructor() {
    this.api = new MailgunApi();
    this.storageApi = new MailgunStorageApi();
  }
}
