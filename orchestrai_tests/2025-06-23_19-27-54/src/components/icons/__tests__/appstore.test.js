import React from 'react';
import { render, screen } from '@testing-library/react';
import IconAppStore from '../appstore';

describe('IconAppStore', () => {
  test('renders the AppStore icon', () => {
    render(<IconAppStore />);
    expect(screen.getByTitle('Apple App Store')).toBeInTheDocument();
  });
});