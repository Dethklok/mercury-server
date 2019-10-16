import { Connection, Repository } from 'typeorm';
import { Article } from './article.entity';

import { ARTICLE_REPOSITORY, ARTICLE_CONNECTION } from './constants/providers.constants';

export const articleProviders = [
  {
    provide: ARTICLE_REPOSITORY,
    useFactory: (connection: Connection) => connection.getRepository(Article),
    inject: ['DATABASE_CONNECTION'],
  },
];
