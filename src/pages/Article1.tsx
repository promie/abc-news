import React from 'react';
import Article from '../components/Article/Article';
import data from '../data/article1.json';

const Article1 = () => (
  <Article title={data.title}>
    {JSON.stringify(data.text)}
  </Article>
);

export default Article1;
