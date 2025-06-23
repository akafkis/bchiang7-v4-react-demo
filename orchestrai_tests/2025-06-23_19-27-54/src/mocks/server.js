import { setupServer } from 'msw/node';
import { rest } from 'msw';

export const server = setupServer(
  rest.get('https://api.github.com/repos/bchiang7/v4', (req, res, ctx) => {
    return res(
      ctx.json({
        stargazers_count: 100,
        forks_count: 50,
      })
    );
  })
);