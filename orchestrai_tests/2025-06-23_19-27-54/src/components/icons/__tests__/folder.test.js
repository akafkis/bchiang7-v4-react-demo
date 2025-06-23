import React from 'react';
import { render, screen } from '@testing-library/react';
import IconFolder from '../folder';

describe('IconFolder', () => {
  test('renders the Folder icon', () => {
    render(<IconFolder />);
    expect(screen.getByTitle('Folder')).toBeInTheDocument();
  });
});