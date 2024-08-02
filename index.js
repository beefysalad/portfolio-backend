const port = 8080 || process.env.PORT;
const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/test", (req, res) => {
  res.status(200).json({
    message: "Test API v2 response",
  });
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
