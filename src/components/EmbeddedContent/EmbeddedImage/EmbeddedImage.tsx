import { FC } from 'react';
import styles from './EmbeddedImage.module.css';
import { IParameters } from '../../../types';

interface IProps {
  content: any;
  parameters: IParameters;
}

const getClassName = (parameters: IParameters | undefined) => {
  switch (parameters?.align) {
    case 'right':
      return styles.right;
    default:
      return '';
  }
};

const EmbeddedImage: FC<IProps> = ({ content, parameters }) => {
  const { caption, alt } = content;
  const { url, width, height } = content.media.image.primary.complete[0];

  return (
    <figure className={getClassName(parameters)}>
      <img src={url} alt={alt} width={width} height={height} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
};

export default EmbeddedImage;
