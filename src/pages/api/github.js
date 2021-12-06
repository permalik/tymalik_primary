import Cors from 'cors';
import { Octokit } from '@octokit/rest';

const cors = Cors({
  origin: ['http://localhost:3000/favicon.ico'],
  allowedHeaders: ["default-src '*'"],
  exposedHeaders: ["image-src '*'"]
});

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export default async function GithubApi(req, res) {
  await runMiddleware(req, res, cors);

  const octokit = new Octokit({
    auth: process.env.GITHUB_AUTH_TOKEN
  });

  const repos = await octokit.request('/users/permalik/repos');

  return res.status(200).json({ repos });
}
