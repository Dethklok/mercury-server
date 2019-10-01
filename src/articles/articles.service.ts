import { Injectable, NotFoundException } from '@nestjs/common';
import { Article } from './interfaces/article.interface';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Injectable()
export class ArticlesService {
  private readonly articles: Article[] = [];

  create(createArticleDto: CreateArticleDto): number {
    const article: Article = {
      id: this.articles.length,
      ...createArticleDto,
    };

    this.articles.push(article);
    return article.id;
  }

  getAll(): Article[] {
    return [...this.articles];
  }

  getOne(id: number): Article {
    const [article, _] = this.find(id);
    return { ...article };
  }

  update(id: number, updateArticleDto: UpdateArticleDto): null {
    const [article, index] = this.find(id);

    this.articles[index] = {
      ...article,
      ...updateArticleDto,
    };

    return null;
  }

  private find(id: number): [Article, number] {
    const article = this.articles.find(curArticle => curArticle.id === id);
    const index = this.articles.indexOf(article);

    if (!article) {
      throw new NotFoundException('Article not found.');
    }

    return [article, index];
  }
}
