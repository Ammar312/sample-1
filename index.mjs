import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/profile", (req, res) => {
  res.send("Hello World!" + "hello server");
});

app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`);
});
