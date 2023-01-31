import { FC, createElement } from 'react';
import { find } from 'lodash';
import styles from './Content.module.css';
import { IText } from '../../types';
import EmbeddedContent from '../EmbeddedContent/EmbeddedContent';

interface IProps {
  text: IText;
  mediaEmbeded: any;
}

const Content: FC<IProps> = ({ text, mediaEmbeded }): any => {
  const { tagname, parameters, children, content } = text;
  let element = content;
  if (children) {
    element = children.map((child: any, idx: number) => (
      <Content key={idx} text={child} mediaEmbeded={mediaEmbeded} />
    ));
  }

  if (tagname) {
    if (parameters?.ref) {
      const embedContent = find(mediaEmbeded, { id: parameters?.ref });
      return <EmbeddedContent content={embedContent} parameters={parameters} />;
    }

    return tagname === 'pullquote' ? (
      <blockquote className={styles.quote}>{element}</blockquote>
    ) : (
      createElement(tagname, parameters, element)
    );
  }

  return element;
};

export default Content;
