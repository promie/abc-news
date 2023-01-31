import { FC } from 'react';
import styles from './ShareLink.module.css';
import { AiFillPrinter } from 'react-icons/ai';
import { HiLink } from 'react-icons/hi';
import { IoIosShareAlt } from 'react-icons/io';

interface Props {
  canonicalURL: string;
}

const ShareLink: FC<Props> = ({ canonicalURL }) => {
  const underConstruction = () => {
    alert(
      'Under construction. If more time permitted, it would have been implemented.',
    );
  };

  return (
    <div className={styles.shareLink}>
      <div className={styles.print}>
        <h4>Help keep family & friends informed by sharing this article</h4>
        <div className={styles.icon}>
          <AiFillPrinter
            size={24}
            className={styles.printer}
            onClick={() => underConstruction()}
            data-testid="share-link-printer-icon"
          />
        </div>
      </div>

      <div className={styles.share}>
        <div className={styles.link} onClick={() => underConstruction()}>
          {canonicalURL.slice(0, 45)}...
        </div>
        <button
          className={styles.copyBtn}
          onClick={() => underConstruction()}
          data-testid="share-link-copy-btn"
        >
          <HiLink className={styles.icon} size={20} />
          <span className={styles.spacing}>COPY LINK</span>
        </button>
        <button
          className={styles.shareBtn}
          onClick={() => underConstruction()}
          data-testid="share-link-share-btn"
        >
          <IoIosShareAlt className={styles.icon} size={20} />
          <span className={styles.spacing}>SHARE</span>
        </button>{' '}
      </div>
    </div>
  );
};

export default ShareLink;
