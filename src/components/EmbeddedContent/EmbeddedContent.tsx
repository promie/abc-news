import { FC } from 'react';
import EmbeddedImage from './EmbeddedImage/EmbeddedImage';
// import EmbeddedTeaser from './EmbeddedTeaser/EmbeddedTeaser';
import EmbeddedInteractive from './EmbeddedInteractive/EmbeddedInteractive';
import { IParameters } from '../../types';

interface IProps {
  content: any;

  parameters: IParameters;
}

const EmbeddedContent: FC<IProps> = ({
  content,
  parameters,
}): JSX.Element | null => {
  const { docType } = content;

  if (docType === 'ImageProxy' || docType === 'Image') {
    return <EmbeddedImage content={content} parameters={parameters} />;
  }

  /*
  TODO: Investigate why the link isn't rendering properly for docType Teaser
  - The fix should be in the Content component where we are creating the element
  */

  // if (docType === 'Teaser') {
  //   return <EmbeddedTeaser content={content} />;
  // }

  if (docType === 'Interactive') {
    return <EmbeddedInteractive name="Instagram" content={content} />;
  }

  return null;
};

export default EmbeddedContent;
