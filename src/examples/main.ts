import express from "express";
import cors from "cors";
import { Client } from "../client";

const app = express();
app.use(cors());

app.get("/", async (req: any, res: any) => {
  const discogs = new Client({
    auth: {
      token: "jRHMQDEJCKZWtvmAOShGqLtiyWKyJghiFErIdcGm",
    },
  });

  let curPage = req.query.curPage;
  let perPage = req.query.perPage;
  const result = await discogs.getMaster({
    page: curPage,
    per_page: perPage,
    status: "For Sale",
  });

  return res.json(result);
});

app.listen(3000, () => {
  console.log("api-discogs-server for wix");
});
