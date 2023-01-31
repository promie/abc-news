import { FC } from 'react';
import data from '../data/article1.json';
import Article from '../components/Article/Article';
import Content from '../components/Content/Content';

const Article1: FC = () => {
  const { source, sourceURL, dates, canonicalURL, text } = data;
  const { contributors, mediaFeatured, mediaEmbedded } = data._embedded;

  return (
    <Article
      title={data.title}
      contributors={contributors}
      source={{ source, sourceURL }}
      dates={dates}
      mediaFeatured={mediaFeatured}
      canonicalURL={canonicalURL}
    >
      <Content text={text.json} mediaEmbeded={mediaEmbedded} />
    </Article>
  );
};

export default Article1;
