import { PropertyEntity } from 'src/modules/property/entity/property.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';



@Entity('users')
export class User {
@PrimaryGeneratedColumn()
  id:number
  @Column()
  name: string;
@Column({unique:true})
  email: string;
@Column()
  password: string;
@Column({nullable:true})
  refreshToken: string;
  @Column({nullable:true})
  photo: string;
  @Column({nullable:true})
  tel: string;

  @OneToMany(type => PropertyEntity, property=>property.user,{eager:true})
  property: PropertyEntity[];

 
}

