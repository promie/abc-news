import { FC, Fragment } from 'react';
import styles from './Meta.module.css';
import { IContributor, IDates, ISource } from '../../types';
import { extractContributorData, dateFormat } from '../../helpers';

interface IProps {
  source?: ISource;
  contributors?: IContributor[];
  dates?: IDates;
}

const Meta: FC<IProps> = ({ source, contributors, dates }): JSX.Element => {
  return (
    <Fragment>
      <div className={styles.meta}>
        <div>
          <a href={source?.sourceURL}>{source?.source}</a> / By{' '}
          <span>
            {contributors &&
              contributors.length &&
              extractContributorData(contributors).map(
                (contributor, idx, arr) => (
                  <Fragment key={idx}>
                    <a href={contributor.canonicalURL}>{contributor.full}</a>
                    {idx !== arr.length - 1 &&
                      (idx === arr.length - 2 ? ' and ' : ', ')}
                  </Fragment>
                ),
              )}
          </span>
        </div>
      </div>

      {dates && (
        <p className={styles.dates}>
          Posted {dateFormat(dates?.published)}, updated{' '}
          {dateFormat(dates?.updated)}
        </p>
      )}
    </Fragment>
  );
};

export default Meta;
