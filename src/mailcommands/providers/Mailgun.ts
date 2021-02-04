import { HttpClient } from '../HttpClient';
import MailRequest from '../interfaces/MailRequest';
import MailProvider from '../interfaces/MailProvider';
import { AxiosResponse } from 'axios';

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

  public getMails = (request: MailRequest) =>
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

export class Mailgun implements MailProvider{
  public api: MailgunApi;

  public storageApi: MailgunStorageApi;

  constructor() {
    this.api = new MailgunApi();
    this.storageApi = new MailgunStorageApi();
  }

  linkFromMail(request: MailRequest): Promise<AxiosResponse> {
    return new Promise<AxiosResponse>(() => {
      return this.api.getMails(request).then((response) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const filteredMails = response.items.filter(
          (mail: any) => mail.message.headers.subject.indexOf(request.subject) > -1,
        );

        return this.storageApi.getMail(filteredMails[0].storage.key).then((response) => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          return Cypress.$(response['body-html']).find(request.identifier).attr('href');
        });
      });
    })
  }
}
