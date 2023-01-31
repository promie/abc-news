import { FC } from 'react';
import styles from './Featured.module.css';
import { extractImageData } from '../../helpers';

interface IProps {
  mediaFeatured: any;
}

const Featured: FC<IProps> = ({ mediaFeatured }) => {
  const { url, caption, alt } = extractImageData(mediaFeatured)[0];

  return (
    <div className={styles.featured}>
      <img src={url} alt={alt} className={styles.image} />
      <figcaption className={styles.caption}>{caption}</figcaption>
    </div>
  );
};

export default Featured;
