import { Injectable, OnModuleInit } from '@nestjs/common';
import { EmailService } from '../email/email.service';
import * as fs from 'fs';
import * as path from 'path';
import * as xml2js from 'xml2js';
import { StatusDelivery } from 'src/shared/enums/status-delivery.enum';

// TODO LGPD não permite Tracking Pixel sem consentimento claro do cliente o que não é possível por email.
// TODO Acompanhar status por google form
// TODO Buscar um arquivo pelo ID

@Injectable()
export class FileWatcherService implements OnModuleInit {
  private readonly watchDirectory = './xml-files';

  constructor(private readonly emailService: EmailService) {}

  onModuleInit() {
    if (!fs.existsSync(this.watchDirectory)) {
      fs.mkdirSync(this.watchDirectory);
    }

    fs.watch(this.watchDirectory, (eventType, filename) => {
      if (eventType === 'rename' && filename.endsWith('.xml')) {
        this.processFile(path.join(this.watchDirectory, filename));
      }
    });
  }

  async processFile(filePath: string) {
    try {
      const xmlContent = fs.readFileSync(filePath, 'utf8');
      const parsed = await xml2js.parseStringPromise(xmlContent);

      const email: EMail = {
        clientEmail: parsed.email?.clientEmail?.[0],
        subject: parsed.email?.subject?.[0],
        content: parsed.email?.content?.[0],
        fileName: '',
        content: this.createEmailBody(parsed),
        filePath: filePath,
        sentAt: new Date(),
        deliveryStatus: StatusDelivery.CREATED,
        id                String






deliveryStatus    String
readStatus        Boolean
responseStatus    Boolean
error             String?
createdAt         DateTime
updatedAt         DateTime
sentAt            DateTime?
readAt            DateTime?
responseAt        DateTime?
      }

      const clientEmail = parsed.email?.clientEmail?.[0];
      const fileName = path.basename(filePath);
      const subject = 'Pesquisa de Satisfação';
      const content = 'Por favor, avalie o serviço que você recebeu.';

      if (clientEmail) {
        await this.emailService.sendEmail(
          clientEmail,
          subject,
          content,
          fileName,
        );
        fs.unlinkSync(filePath); // Remove o arquivo após processar
      }
    } catch (error) {
      console.error(`Erro ao processar o arquivo ${filePath}:`, error);
    }
  }

  async createEmailBody(data: any) {
    try {

      const emailBody = `
        <html>
          <body>
            <p>Seu arquivo foi processado com sucesso.</p>
          </body>
        </html>
      `;
  }
}
