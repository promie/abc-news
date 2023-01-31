import React from 'react';
import Article from '../components/Article/Article';
import data from '../data/article2.json';

const Article2 = () => (
  <Article title={data.title}>
    {JSON.stringify(data.text)}
  </Article>
);

export default Article2;
