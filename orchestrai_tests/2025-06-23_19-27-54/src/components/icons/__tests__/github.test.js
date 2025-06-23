import React from 'react';
import { render, screen } from '@testing-library/react';
import IconGitHub from '../github';

describe('IconGitHub', () => {
  test('renders the GitHub icon', () => {
    render(<IconGitHub />);
    expect(screen.getByTitle('GitHub')).toBeInTheDocument();
  });
});