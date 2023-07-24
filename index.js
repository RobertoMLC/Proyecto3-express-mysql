const express = require("express");
const dotenv = require('dotenv');
      dotenv.config();
const app = express();
const PORT = process.env.PORT;
const programmingLanguagesRouter = require("./routes/progLeng");
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
  res.json({ message: "ok" });
});
app.use("/lenguajesdeprogramas", programmingLanguagesRouter);
/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
