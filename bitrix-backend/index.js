const express = require("express");
const app = express();
require('dotenv').config();
const cors = require("cors")

const { connection } = require("./config/config");
const TasksModel = require("./models/Tasks.model");
const userRouter = require("./controller/user");

app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
  res.send("HomePage");
});

app.use("/", userRouter)

app.get("/tasks", async (req, res) => {
  // const { userID } = req.body;

  const userID = "63067449c85c097403975c1a";

  const tasks = await TasksModel.find({ _id: userID });

  res.send(tasks);
});

app.post("/tasks", async (req, res) => {
  let {
    title,
    description,
    time,
    creator,
    assigned,
    tag,
    employees,
    highPriority,
    project,
    deadline,
    userID,
  } = req.body;

  const task = new TasksModel({
    title,
    description,
    time,
    creator,
    assigned,
    tag,
    employees,
    highPriority,
    project,
    deadline,
    userID,
  });

  await task.save();
  return res.send({ message: "task created", task });
});

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected to Database");
  } catch (error) {
    console.log(error);
  }
  console.log("Listening to port 8000");
});
