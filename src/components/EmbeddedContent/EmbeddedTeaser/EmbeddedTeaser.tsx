import { FC } from 'react';
import styles from './EmbeddedTeaser.module.css';
import Content from '../../Content/Content';

interface IProps {
  content: any;
}

const EmbeddedTeaser: FC<IProps> = ({ content }) => {
  const {
    teaserText: { json },
    _embedded: { mediaEmbedded },
  } = content;

  return (
    <aside className={styles.teaser}>
      <Content text={json} mediaEmbeded={mediaEmbedded} />
    </aside>
  );
};

export default EmbeddedTeaser;
