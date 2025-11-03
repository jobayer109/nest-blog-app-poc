import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('tags') 
export class TagEntity { 
	@PrimaryGeneratedColumn('increment')
	id: number; 

	@Column({ nullable: true }) 
	name: string;
}
