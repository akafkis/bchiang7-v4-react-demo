import React from 'react';
import { render, screen } from '@testing-library/react';
import IconFork from '../fork';

describe('IconFork', () => {
  test('renders the Git Fork icon', () => {
    render(<IconFork />);
    expect(screen.getByTitle('Git Fork')).toBeInTheDocument();
  });
});