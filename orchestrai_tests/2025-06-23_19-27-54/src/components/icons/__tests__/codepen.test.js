import React from 'react';
import { render, screen } from '@testing-library/react';
import IconCodepen from '../codepen';

describe('IconCodepen', () => {
  test('renders the Codepen icon', () => {
    render(<IconCodepen />);
    expect(screen.getByTitle('CodePen')).toBeInTheDocument();
  });
});