import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ShareLink from './ShareLink';

describe('ShareLink', () => {
  it('renders the share link component with correct URL and icons', () => {
    const canonicalURL = 'https://www.example.com/article';
    const { getByText, getByTestId } = render(
      <ShareLink canonicalURL={canonicalURL} />,
    );

    expect(
      getByText('Help keep family & friends informed by sharing this article'),
    ).toBeInTheDocument();
    expect(getByTestId('share-link-printer-icon')).toBeInTheDocument();
    expect(getByText(canonicalURL.slice(0, 45) + '...')).toBeInTheDocument();
    expect(getByTestId('share-link-copy-btn')).toBeInTheDocument();
    expect(getByTestId('share-link-share-btn')).toBeInTheDocument();
  });

  it('displays an alert message when the icons are clicked', () => {
    const canonicalURL = 'https://www.example.com/article';
    const { getByTestId } = render(<ShareLink canonicalURL={canonicalURL} />);

    const spy = jest.spyOn(window, 'alert').mockImplementation(() => {});
    fireEvent.click(getByTestId('share-link-printer-icon'));
    expect(spy).toHaveBeenCalledWith(
      'Under construction. If more time permitted, it would have been implemented.',
    );
    fireEvent.click(getByTestId('share-link-copy-btn'));
    expect(spy).toHaveBeenCalledWith(
      'Under construction. If more time permitted, it would have been implemented.',
    );
    fireEvent.click(getByTestId('share-link-share-btn'));
    expect(spy).toHaveBeenCalledWith(
      'Under construction. If more time permitted, it would have been implemented.',
    );
    spy.mockRestore();
  });
});
