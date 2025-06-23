import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Footer from '../footer';
import { server } from '../../mocks/server';
import { rest } from 'msw';

describe('Footer', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  test('renders the footer with social links', () => {
    render(<Footer />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    expect(screen.getByRole('list', { name: /social media/i })).toBeInTheDocument();
  });

  test('displays the GitHub stats', async () => {
    server.use(
      rest.get('https://api.github.com/repos/bchiang7/v4', (req, res, ctx) => {
        return res(
          ctx.json({
            stargazers_count: 100,
            forks_count: 50,
          })
        );
      })
    );

    render(<Footer />);

    await waitFor(() => {
      expect(screen.getByText('100')).toBeInTheDocument();
      expect(screen.getByText('50')).toBeInTheDocument();
    });
  });

  test('handles errors when fetching GitHub stats', async () => {
    server.use(
      rest.get('https://api.github.com/repos/bchiang7/v4', (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    render(<Footer />);

    await waitFor(() => {
      expect(console.error).toHaveBeenCalled();
    });
  });
});