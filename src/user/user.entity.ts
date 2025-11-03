import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class UserEntity {
	@PrimaryGeneratedColumn('increment')
	id: string

	@Column()
	username: string

	@Column()
	email: string

	@Column({ default: '' })
	bio: string

	@Column({ default: '' })
	image: string

	@Column()
	password: string
}