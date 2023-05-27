const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Port = process.env.PORT || 5001;

app.use(express.json());

// MongoDB Connection

mongoose.connect(
  "mongodb+srv://portfolio:Portfolio123@cluster0.qyr2r9m.mongodb.net/",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;

db.once("open", () => {
  console.log(`Connected to MongoDB`);
});

// Importing routes
const doctorRouter = require("./routes/doctorRoutes");
app.use("/api/doctor", doctorRouter);

app.listen(Port, () => {
  console.log(`Server started on the port ${Port}`);
});
