import React from 'react';
import { render, screen } from '@testing-library/react';
import IconExternal from '../external';

describe('IconExternal', () => {
  test('renders the External Link icon', () => {
    render(<IconExternal />);
    expect(screen.getByTitle('External Link')).toBeInTheDocument();
  });
});