import Cors from "cors";
import {Octokit} from "@octokit/rest";

const cors = Cors({
  origin: ["http://localhost:3000/favicon.ico"],
  allowedHeaders: ["default-src '*'"],
  exposedHeaders: ["image-src '*'"]
});

function runMiddleware(req: any, res: any, fn: any) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export default async function GithubApi(req: any, res: any) {
  await runMiddleware(req, res, cors);

  const octokit = new Octokit({
    auth: "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"
  });

  const repos = await octokit.request("/users/permalik/repos");

  return res.status(200).json({repos});
}
