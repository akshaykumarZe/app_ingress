import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log(req.headers);
  res.send("Hello World!");
});

app.get("/health", (req, res) => {
  console.log(req.headers);
  res.send("OK");
});

app.listen(parseInt(process.env.portNumber || 3000), () => {
  console.log(
    `Example app listening on port ${process.env.portNumber || 3000}`
  );
});
