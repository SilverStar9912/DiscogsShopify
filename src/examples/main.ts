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

  const results = await discogs.getMaster();
  return res.json(results);
});

app.listen(3000, () => {
  console.log("api-discogs-server for wix");
});
