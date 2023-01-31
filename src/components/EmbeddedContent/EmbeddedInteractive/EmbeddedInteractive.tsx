import { FC } from 'react';

interface IProps {
  name: string;
  content: any;
}

const EmbeddedInteractive: FC<IProps> = ({ name, content }) => {
  return (
    <span>
      {name} embed: <a href={content.externalembed.url}>LINK</a>
    </span>
  );
};

export default EmbeddedInteractive;
