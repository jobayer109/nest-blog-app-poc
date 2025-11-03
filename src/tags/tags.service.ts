import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TagEntity } from './tags.entity';

@Injectable()
export class TagsService {
	constructor(
		@InjectRepository(TagEntity)
		private readonly tagsRepository: Repository<TagEntity>,
	) {}

	async getAllTags(): Promise<{ tags: TagEntity[] }> {
		const tags = await this.tagsRepository.find();
		if (!tags || tags.length === 0) {
			return { tags: [] };
		}
		return { tags };
	}
}
