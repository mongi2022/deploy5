import { CreateDateColumn, UpdateDateColumn } from "typeorm"

export class GenericEntity{
    @CreateDateColumn({default:()=>'CURRENT_TIMESTAMP',type:'timestamp'})
    published:Date
    @UpdateDateColumn({default:()=>'CURRENT_TIMESTAMP',type:'timestamp'})

    lastUpdate:Date
}