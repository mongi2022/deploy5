import { MailerService } from "@nestjs-modules/mailer";
import { Controller, Get, Query } from "@nestjs/common";

@Controller('email')
export class EmailController{
constructor(private emailService:MailerService){}

@Get('plain-text-email')
async plainTextEmail(@Query('toemail') toemail){
    await this.emailService.sendMail({
        to:toemail,
        from:'mongithabet2@gmail.com',
        subject:'Simple Plain Text',
        text:'Real Estate Barsha Technology '

    })
    return 'success'

}

}