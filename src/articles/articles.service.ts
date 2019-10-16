import { Injectable, Inject, NotFoundException, HttpException } from '@nestjs/common';
import { Repository } from 'typeorm';

import { ARTICLE_REPOSITORY } from './constants/providers.constants';
import { Article } from './article.entity';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Injectable()
export class ArticlesService {
  constructor(
    @Inject(ARTICLE_REPOSITORY)
    private readonly articleRepository: Repository<Article>,
  ) {}

  async create(createArticleDto: CreateArticleDto): Promise<number> {
    const article = await this.articleRepository.save(this.articleRepository.create(createArticleDto));
    return article.id;
  }

  async getAll(): Promise<Article[]> {
    return await this.articleRepository.find();
  }
}
