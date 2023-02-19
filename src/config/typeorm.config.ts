import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { CommentEntity } from "src/modules/comment/entity/comment.entity";
import { PropertyEntity } from "src/modules/property/entity/property.entity";
import { SocialEntity } from "src/modules/social/entity/social.entity";
import { ClientEntity } from "src/modules/client/entity/client.entity";
import { FeaturesEntity } from "src/modules/features/entity/features.entity";
import { HouseEntity } from "src/modules/house/entity/house.entity";
import { LocalisationEntity } from "src/modules/localisation/entity/localisation.entity";
import { TestimonialEntity } from "src/modules/testimonial/entity/testimonial.entity";
import { User } from "src/modules/users/entity/user.entity";
import { GalleryEntity } from "src/modules/gallery/entity/gallery.entity";
import { PriceEntity } from "src/modules/price/entity/price.entity";
import { AreaEntity } from "src/modules/area/entity/area.entity";
import { VideosEntity } from "src/modules/videos/entity/videos.entity";
import { FeaturelistEntity } from "src/modules/featuresList/entity/featuresList.entity";
import { NeighborhoodEntity } from "src/modules/neighborhood/entity/neighborhood.entity";
import { VilleEntity } from "src/modules/Ville/entity/ville.entity";
import { FeaturelistTerrainEntity } from "src/modules/featuresListTerrain/entity/featuresListTerrain.entity";

export const typeormConfig:TypeOrmModuleOptions ={
    type: 'mysql',
    host: 'sql.freedb.tech',
    port: 3306,
    username: 'freedb_mongithabet1234',
    password: '?zWs&G#3K?@3jxF',
    database: 'freedb_realestate2',

    
    entities: [User,NeighborhoodEntity,FeaturelistTerrainEntity,VilleEntity,PriceEntity,FeaturelistEntity,AreaEntity,VideosEntity,CommentEntity, LocalisationEntity,SocialEntity,PropertyEntity,GalleryEntity,ClientEntity,HouseEntity,TestimonialEntity,CommentEntity ,FeaturesEntity],
    synchronize: true,
}


/*
 type: 'mysql',
host: 'sql.freedb.tech',
port: 3306,
username: 'freedb_mongithabet1234',
password: '?zWs&G#3K?@3jxF',
database: 'freedb_realestate2', */

/* type: 'mysql',
host: 'localhost',
port: 3306,
username: 'root',
password: '',
database: 'realEstate', */