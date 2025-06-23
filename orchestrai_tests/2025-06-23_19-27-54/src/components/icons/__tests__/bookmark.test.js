import React from 'react';
import { render, screen } from '@testing-library/react';
import IconBookmark from '../bookmark';

describe('IconBookmark', () => {
  test('renders the Bookmark icon', () => {
    render(<IconBookmark />);
    expect(screen.getByTitle('Bookmark')).toBeInTheDocument();
  });
});