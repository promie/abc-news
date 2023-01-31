import { FC, ReactNode } from 'react';
import styles from './Article.module.css';
import { ISource, IDates, IContributor } from '../../types';
import Meta from '../Meta/Meta';
import Featured from '../Featured/Featured';
import ShareLink from '../ShareLink/ShareLink';

interface IProps {
  title: string;
  contributors?: IContributor[];
  source?: ISource;
  dates?: IDates;
  mediaFeatured?: any;
  canonicalURL: string;
  children: ReactNode;
}

const Article: FC<IProps> = ({
  title,
  contributors,
  dates,
  source,
  mediaFeatured,
  canonicalURL,
  children,
}) => {
  return (
    <article className={styles.article}>
      <div className={styles.main}>
        <div className={styles.header}>
          <h1>{title}</h1>
          <Meta source={source} contributors={contributors} dates={dates} />
        </div>

        <Featured mediaFeatured={mediaFeatured} />
        <ShareLink canonicalURL={canonicalURL} />

        <div className={styles.content}>{children}</div>
      </div>
      <div className={styles.sidebar}>
        <h2>More Stories</h2>
        <div className={styles.moreStories} />
      </div>
    </article>
  );
};

export default Article;
