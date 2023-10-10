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
  // console.log("req", req.query.curPage);
  let curPage = req.query.curPage;
  const result = await discogs.getMaster({
    page: curPage,
    per_page: 50,
    status: "For Sale",
  });
  return res.json(result);
  // console.log(result);

  // console.log("release", listings);
});

app.listen(3000, () => {
  console.log("api-discogs-server for wix");
});
