import MailRequest from './MailRequest';

export default interface MailProvider {
  linkFromMail(request: MailRequest): Promise<string>
}
