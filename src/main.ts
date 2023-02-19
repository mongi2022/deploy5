import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser())
  app.enableCors({
  origin:'*',
  credentials:true
 })
 const options = new DocumentBuilder()
 .setTitle('Real Estate Application')
 .setDescription('The real estate API description')
 .setVersion('1.0')
 .addTag('real estate')
 .build();
const document = SwaggerModule.createDocument(app, options);
SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT_API || 3000,()=>console.log(`server online at http://localhost:3000`)
  );
}

bootstrap();
