import { format, utcToZonedTime } from 'date-fns-tz';
import { find } from 'lodash';

const extractContributorData = (contributors: any[] = []) =>
  contributors.map(({ canonicalURL, names: { full = '' } }) => ({
    canonicalURL,
    full,
  }));

const extractImageData = (arr: any) => {
  return arr.map((obj: any) => {
    return {
      caption: obj.caption,
      alt: obj.alt,
      url: obj.media.image.primary.complete[0].url,
      width: obj.media.image.primary.complete[0].width,
      height: obj.media.image.primary.complete[0].height,
    };
  });
};

const dateFormat = (date: string | Date | undefined) => {
  if (!date) return;

  const zonedDate = utcToZonedTime(date, 'Australia/Sydney');
  return format(zonedDate, "E d MMM yyyy 'at' p")
    .replace('AM', 'am')
    .replace('PM', 'pm');
};

const formatImage = (image: any, ref: any) => {
  const imageObject = find(image, { id: ref });
  return {
    alt: imageObject?.alt || '',
    url:
      imageObject?.media?.image?.primary?.complete[0].url ||
      imageObject?.externalembed?.url ||
      '',
    caption: imageObject?.caption || ' ',
  };
};

export { extractContributorData, dateFormat, extractImageData, formatImage };
