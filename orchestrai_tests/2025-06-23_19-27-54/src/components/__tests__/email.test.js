import React from 'react';
import { render, screen } from '@testing-library/react';
import Email from '../email';
import { email } from '../../config';

describe('Email', () => {
  test('renders the email link', () => {
    render(<Email isHome={true} />);
    expect(screen.getByRole('link', { name: email })).toBeInTheDocument();
  });

  test('applies the correct styles when isHome is true', () => {
    render(<Email isHome={true} />);
    const emailLink = screen.getByRole('link', { name: email });
    expect(emailLink).toHaveStyle('writing-mode: vertical-rl;');
  });

  test('applies the correct styles when isHome is false', () => {
    render(<Email isHome={false} />);
    const emailLink = screen.getByRole('link', { name: email });
    expect(emailLink).not.toHaveStyle('writing-mode: vertical-rl;');
  });
});