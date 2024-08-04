const port = 8080 || process.env.PORT;
const express = require("express");
const app = express();
const cors = require("cors");
const { sendEmailService } = require("./service/emailService");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "PTRCK API v1.0.0",
  });
});

app.post("/send-email", sendEmailService);

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
