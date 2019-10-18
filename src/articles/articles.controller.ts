import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

import { ArticlesService } from './articles.service';
import { Article } from './interfaces/article.interface';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {
  }

  @Get()
  async findAll(): Promise<Article[]> {
    return this.articlesService.getAll();
  }

  @Post()
  async create(@Body() createArticleDto: CreateArticleDto): Promise<number> {
    return this.articlesService.create(createArticleDto);
  }
}
