const express = require('express');
const app = express();

const mongoose = require("mongoose");
const todoListRoute = require("./routes/todoListRoute")



mongoose.connect(
  'mongodb+srv://sylvester:sylvester@job.ppnchlz.mongodb.net/'
).then(() =>{
    console.log("I am connected to the Database");
});

app.listen(3000, () =>{
    console.log("Server is running on port 3000 I guess");
})
app.use(express.json())
app.use("/api/v1/addtodos", todoListRoute)

