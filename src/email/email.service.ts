import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SendEmailDto } from './dto/send-email.dto';
import { StatusDelivery } from 'src/shared/enums/status-delivery.enum';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  constructor(private readonly prisma: PrismaService) { }

  async sendEmail(email: SendEmailDto) {
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'zapf.corp@gmail.com',
          pass: 'Vah*@159632@',
        },
      });

      await transporter.sendMail({
        to: email.to,
        subject: email.subject,
        text: email.text,
      });

      // Salva o log no banco de dados
      return this.prisma.email.create({
        data: {
          clientEmail: email.to,
          subject: email.subject,
          content: email.text,
          fileName: '',
          filePath: this.,
          sentAt: new Date(),
          deliveryStatus: StatusDelivery.SENDING,
        },
      });
    } catch (error) {
      // Log de erro
      return this.prisma.emailLog.create({
        data: {
          clientEmail,
          subject,
          content,
          fileName,
          deliveryStatus: 'failed',
          error: error.message,
        },
      });
    }
  }
}
