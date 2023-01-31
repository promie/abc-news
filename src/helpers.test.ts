import {
  extractContributorData,
  dateFormat,
  extractImageData,
  formatImage,
} from './helpers';
import { find } from 'lodash';

jest.mock('lodash', () => ({
  find: jest.fn(),
}));

describe('helper functions', () => {
  describe('#extractContributorData', () => {
    it('returns an array of objects with the expected properties', () => {
      const contributors = [
        {
          id: '1236456',
          canonicalURL: 'url1',
          names: { first: 'Promie', full: 'Promie Yutasane', last: 'Yutasane' },
        },
        {
          id: '7894561',
          canonicalURL: 'url2',
          names: { first: 'John', full: 'John Doe', last: 'Doe' },
        },
      ];

      const result = extractContributorData(contributors);

      expect(result).toEqual([
        { canonicalURL: 'url1', full: 'Promie Yutasane' },
        { canonicalURL: 'url2', full: 'John Doe' },
      ]);
    });
  });

  describe('#dateFormat', () => {
    it('should return formatted date string when a valid date string is passed', () => {
      const publishedDate = '2021-11-21T20:13:18+00:00';

      expect(dateFormat(publishedDate)).toBe('Mon 22 Nov 2021 at 7:13 am');
    });

    it('should return formatted date string when a valid date string is passed #2', () => {
      const updatedDate = '2021-11-21T23:34:23+00:00';

      expect(dateFormat(updatedDate)).toBe('Mon 22 Nov 2021 at 10:34 am');
    });
  });

  describe('#extractImageData', () => {
    const imageArray = [
      {
        alt: 'Chanelle Olive standing in front of a sub-station',
        canonicalURL:
          'https://www.abc.net.au/news/2021-11-22/chanelle-olive-2/100635568',
        caption:
          'Chanelle Olive is an engineering manager at Energy Queensland.',
        media: {
          image: {
            primary: {
              complete: [
                {
                  cropHeight: 1984,
                  cropWidth: 1984,
                  height: 862,
                  ratio: '1x1',
                  url: 'https://live-production.wcms.abc-cdn.net.au/b858be50a7033a3a198d471aca237e69?impolicy=wcms_crop_resize&cropH=1984&cropW=1984&xPos=634&yPos=0&width=862&height=862',
                  width: 862,
                  x: 634,
                  y: 0,
                },
              ],
            },
          },
        },
      },
    ];

    it('should return an array of objects with correct keys', () => {
      const result = extractImageData(imageArray);
      expect(Array.isArray(result)).toBe(true);
      expect(result[0]).toHaveProperty('caption');
      expect(result[0]).toHaveProperty('url');
      expect(result[0]).toHaveProperty('width');
      expect(result[0]).toHaveProperty('height');
      expect(result[0]).toHaveProperty('alt');
    });

    it('should return an array with the correct values for each key', () => {
      const result = extractImageData(imageArray);
      expect(result[0].caption).toEqual(
        'Chanelle Olive is an engineering manager at Energy Queensland.',
      );
      expect(result[0].url).toEqual(
        'https://live-production.wcms.abc-cdn.net.au/b858be50a7033a3a198d471aca237e69?impolicy=wcms_crop_resize&cropH=1984&cropW=1984&xPos=634&yPos=0&width=862&height=862',
      );
      expect(result[0].width).toEqual(862);
      expect(result[0].height).toEqual(862);
    });
  });

  describe('#formatImage', () => {
    const imageArray = [
      {
        id: '1',
        alt: 'Image 1',
        media: {
          image: {
            primary: {
              complete: [
                {
                  url: 'https://example.com/1.jpg',
                },
              ],
            },
          },
        },
        caption: 'Image 1 caption',
      },
      {
        id: '2',
        alt: 'Image 2',
        externalembed: {
          url: 'https://example.com/2.jpg',
        },
        caption: 'Image 2 caption',
      },
      {
        id: '3',
        alt: 'Image 3',
      },
    ];

    beforeEach(() => {
      (find as jest.MockedFunction<typeof find>).mockImplementation(
        (array, props) => {
          // @ts-ignore
          return array.find(item => item.id === props.id);
        },
      );
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should return the correct image information when complete URL exists', () => {
      const ref = '1';
      const result = formatImage(imageArray, ref);
      expect(result).toEqual({
        alt: 'Image 1',
        url: 'https://example.com/1.jpg',
        caption: 'Image 1 caption',
      });
    });

    it('should return the correct image information when complete URL does not exist but external URL exists', () => {
      const ref = '2';
      const result = formatImage(imageArray, ref);
      expect(result).toEqual({
        alt: 'Image 2',
        url: 'https://example.com/2.jpg',
        caption: 'Image 2 caption',
      });
    });

    it('should return default values when complete URL and external URL do not exist', () => {
      const ref = '3';
      const result = formatImage(imageArray, ref);
      expect(result).toEqual({
        alt: 'Image 3',
        url: '',
        caption: ' ',
      });
    });

    it('should return default values when image with given ref does not exist', () => {
      const ref = '4';
      const result = formatImage(imageArray, ref);
      expect(result).toEqual({
        alt: '',
        url: '',
        caption: ' ',
      });
    });
  });
});
