import { AreaEntity } from "src/modules/area/entity/area.entity";
import { FeaturesEntity } from "src/modules/features/entity/features.entity";
import { GalleryEntity } from "src/modules/gallery/entity/gallery.entity";
import { GenericEntity } from "src/modules/generic/generic.entity";
import { LocalisationEntity } from "src/modules/localisation/entity/localisation.entity";
import { PriceEntity } from "src/modules/price/entity/price.entity";
import { User } from "src/modules/users/entity/user.entity";
import { VideosEntity } from "src/modules/videos/entity/videos.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { PropertyStatus } from "../enum/property.status.enum";

@Entity({name:"property"})
export class PropertyEntity {
@PrimaryGeneratedColumn()
id:number
@Column({length:255,nullable:true})
title:string
@Column({length:255,nullable:true})
desc:string
@Column({length:50})
propertyType:string
@Column({

    type:'enum',
    enum:PropertyStatus,
    default:PropertyStatus.sale,
})
propertyStatus:PropertyStatus
@Column({length:50,nullable:true})
city:string
@Column({length:50,nullable:true})
zipCode:string
@Column({length:50,nullable:true})
neighborhood:string


@Column({length:50,nullable:true})
adresse:string

@OneToMany(type => FeaturesEntity, feature=>feature.property,{eager:true})
features: FeaturesEntity[];


@Column({nullable:true})

bedrooms:number

@Column({nullable:true})
bathrooms:number
@Column({nullable:true})
garages:number

@Column({nullable:true})
yearBuilt:number


 @OneToMany(type => GalleryEntity, gall=>gall.property,{eager:true})
 gallery: GalleryEntity[];

@OneToOne(() => LocalisationEntity, location=>location.property,{eager:true})
location: LocalisationEntity; 


@OneToOne(() => AreaEntity, area=>area.property,{eager:true})
area: AreaEntity; 


@OneToOne(() => PriceEntity, price=>price.property,{eager:true})
priceDollar: PriceEntity; 

@OneToMany(type => VideosEntity, video=>video.property,{eager:true})
videos: VideosEntity[];
 

@ManyToOne(() => User, (user: User) => user.property,{onDelete:"CASCADE",onUpdate:"CASCADE"})

public user: User;  
}


[
    {
        "id": 2,
        "title": "Centrally located office",
        "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium magnam veniam sit reprehenderit deserunt ad voluptates id aperiam veritatis! Nobis saepe quos eveniet numquam vitae quis, tenetur consectetur impedit dolore.",
        "propertyType": "Office",
        "propertyStatus": ["A louer"],
        "city": "Los Angeles",
        "zipCode": "90044",
        "neighborhood": ["Hollywood", "Highland Park"],
        "street": ["Hollywood Street #2", "Highland Park Street #1"],
        "location" : {
            "lat": 33.954220,
            "lng": -118.293730
        },
        "formattedAddress" : "1052 W 91st St, Los Angeles, CA 90044, USA",
        "features": ["Air Conditioning", "Barbeque", "Dryer", "Microwave", "Refrigerator", "Fireplace", "Sauna", "TV Cable", "WiFi"],
        "featured": true,
        "priceDollar": {
            "sale": null,
            "rent": 6500
        },
        "priceEuro": {
            "sale": null,
            "rent": 5800
        },
        "bedrooms": 4,
        "bathrooms": 2,
        "garages": 2,
        "area": {
            "value": 1500,
            "unit": "ft²"
        },
        "yearBuilt": 2012,
        "ratingsCount": 4,
        "ratingsValue": 400,
        "additionalFeatures": [
            {
                "name": "Heat",
                "value": "Natural Gas"
            },
            {
                "name": "Roof",
                "value": "Composition/Shingle"
            },
            {
                "name": "Floors",
                "value": "Wall-to-Wall Carpet"
            },
            {
                "name": "Water",
                "value": "District/Public"
            },
            {
                "name": "Cross Streets",
                "value": "Orangethorpe-Gilbert"
            },
            {
                "name": "Windows",
                "value": "Skylights"
            },
            {
                "name": "Flat",
                "value": "5"
            },
            {
                "name": "Childroom",
                "value": "2"
            }
        ],
        "gallery": [
            {
                "small": "assets/images/props/office/1-small.jpg",
                "medium": "assets/images/props/office/1-medium.jpg",
                "big": "assets/images/props/office/1-big.jpg"
            },
            {
                "small": "assets/images/props/office/2-small.jpg",
                "medium": "assets/images/props/office/2-medium.jpg",
                "big": "assets/images/props/office/2-big.jpg"
            },
            {
                "small": "assets/images/props/office/3-small.jpg",
                "medium": "assets/images/props/office/3-medium.jpg",
                "big": "assets/images/props/office/3-big.jpg"
            },
            {
                "small": "assets/images/props/office/4-small.jpg",
                "medium": "assets/images/props/office/4-medium.jpg",
                "big": "assets/images/props/office/4-big.jpg"
            },
            {
                "small": "assets/images/props/office/5-small.jpg",
                "medium": "assets/images/props/office/5-medium.jpg",
                "big": "assets/images/props/office/5-big.jpg"
            },
            {
                "small": "assets/images/props/office/6-small.jpg",
                "medium": "assets/images/props/office/6-medium.jpg",
                "big": "assets/images/props/office/6-big.jpg"
            }
        ],
        "plans": [
            {
                "name": "First floor",
                "desc": "Plan description. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium magnam veniam sit reprehenderit deserunt ad voluptates id aperiam veritatis! Nobis saepe quos eveniet numquam vitae quis, tenetur consectetur impedit dolore.",
                "area": {
                    "value": 1180,
                    "unit": "ft²"
                },
                "rooms": 3,
                "baths": 1,
                "image": "assets/images/others/plan-1.jpg"
            },
            {
                "name": "Second floor",
                "desc": "Plan description. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium magnam veniam sit reprehenderit deserunt ad voluptates id aperiam veritatis! Nobis saepe quos eveniet numquam vitae quis, tenetur consectetur impedit dolore.",
                "area": {
                    "value": 1200,
                    "unit": "ft²"
                },
                "rooms": 5,
                "baths": 2,
                "image": "assets/images/others/plan-2.jpg"
            }
        ],
        "videos": [
            {
                "name": "Video",
                "link": "http://themeseason.com/data/videos/video-1.mp4"
            },
            {
                "name": "Video with 'ngx-embed-video' plugin",
                "link": "https://www.youtube.com/watch?v=-NInBEdSvp8"
            }
        ],
        "published": "2013-09-12 12:20:30",
        "lastUpdate": "2019-05-20 14:20:00",
        "views": 408
    }
]
