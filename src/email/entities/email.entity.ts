import { File } from 'src/file-watcher/entity/file.entity';
import { StatusDelivery } from 'src/shared/enums/status-delivery.enum';

export class Email implements IEmail {
  id: string;
  to: string;
  subject: string;
  content: string;
  statusDelivery: StatusDelivery;
  fileId: number;
  origin: File;

  constructor(json?: any) {
    if (json) {
      Object.assign(this, json);
      this.origin = new File().getFile(json.fileId);
    }
  }
}

export interface IEmail {
  id: string;
  to: string;
  subject: string;
  content: string;
  statusDelivery: StatusDelivery;
  fileId: number;
  origin: File;
}
