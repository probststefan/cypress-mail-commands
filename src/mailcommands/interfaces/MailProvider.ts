import MailRequest from './MailRequest';
import { AxiosResponse } from 'axios';

export default interface MailProvider {
  linkFromMail(request: MailRequest): Promise<AxiosResponse>
}
