import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestimonialModule } from './modules/testimonial/testimonial.module';
import { UsersModule } from './modules/users/users.module';
import { typeormConfig } from './config/typeorm.config';
import { AuthModule } from './modules/auth/auth.module';
import { CommentModule } from './modules/comment/comment.module';
import { SocialModule } from './modules/social/social.module';
import { PropertyModule } from './modules/property/property.module';
import { ClientModule } from './modules/client/client.module';
import { HouseModule } from './modules/house/house.module';
import { LocalisationModule } from './modules/localisation/localisation.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { FeaturesModule } from './modules/features/features.module';
import { GalleryModule } from './modules/gallery/gallery.module';
import { PriceModule } from './modules/price/price.module';
import { AreaModule } from './modules/area/area.module';
import { VideosModule } from './modules/videos/videos.module';
import { FeaturelistModule } from './modules/featuresList/featuresList.module';
import { NeighborhoodModule } from './modules/neighborhood/neighborhood.module';
import { VilleModule } from './modules/Ville/ville.module';
import { FeaturelistTerrainModule } from './modules/featuresListTerrain/featuresListTerrain.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { EmailController } from './modules/sendMail/email.controller';

@Module({
  imports: [TypeOrmModule.forRoot(typeormConfig),ConfigModule.forRoot({isGlobal:true}),UsersModule,FeaturelistModule,FeaturelistTerrainModule,NeighborhoodModule,VilleModule,CommentModule,SocialModule,VideosModule,AreaModule,PriceModule,AuthModule,CommentModule,GalleryModule,PropertyModule,SocialModule,ClientModule,HouseModule,TestimonialModule,LocalisationModule,FeaturesModule,
  MailerModule.forRoot({
    transport:{
      host:'smtp.sendgrid.net',
      secure:false,
      auth:{
           user:'apikey',
      pass:'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'
      }
   
      }
  })],
  controllers: [AppController,EmailController],
  providers: [AppService],
})
export class AppModule {}


