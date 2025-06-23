import React from 'react';
import { render, screen } from '@testing-library/react';
import { useLocation } from '@reach/router';
import { useStaticQuery } from 'gatsby';
import Head from '../head';

jest.mock('@reach/router', () => ({
  useLocation: jest.fn(),
}));

jest.mock('gatsby', () => ({
  useStaticQuery: jest.fn(),
}));

describe('Head', () => {
  beforeEach(() => {
    useLocation.mockReturnValue({ pathname: '/test-page' });
    useStaticQuery.mockReturnValue({
      site: {
        siteMetadata: {
          defaultTitle: 'Default Title',
          defaultDescription: 'Default Description',
          siteUrl: 'https://example.com',
          defaultImage: '/default-image.jpg',
          twitterUsername: '@example',
        },
      },
    });
  });

  test('renders the default SEO data', () => {
    render(<Head />);
    expect(screen.getByTitle('Default Title')).toBeInTheDocument();
    expect(screen.getByName('description')).toHaveAttribute('content', 'Default Description');
    expect(screen.getByName('image')).toHaveAttribute('content', 'https://example.com/default-image.jpg');
    expect(screen.getByName('twitter:title')).toHaveAttribute('content', 'Default Title');
    expect(screen.getByName('twitter:description')).toHaveAttribute('content', 'Default Description');
    expect(screen.getByName('twitter:image')).toHaveAttribute('content', 'https://example.com/default-image.jpg');
  });

  test('renders the provided SEO data', () => {
    render(<Head title="Custom Title" description="Custom Description" image="/custom-image.jpg" />);
    expect(screen.getByTitle('Custom Title')).toBeInTheDocument();
    expect(screen.getByName('description')).toHaveAttribute('content', 'Custom Description');
    expect(screen.getByName('image')).toHaveAttribute('content', 'https://example.com/custom-image.jpg');
    expect(screen.getByName('twitter:title')).toHaveAttribute('content', 'Custom Title');
    expect(screen.getByName('twitter:description')).toHaveAttribute('content', 'Custom Description');
    expect(screen.getByName('twitter:image')).toHaveAttribute('content', 'https://example.com/custom-image.jpg');
  });
});