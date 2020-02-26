const express = require("express");
require("dotenv").config();
const ejs = require("ejs");
const expressEjsLayouts = require("express-ejs-layouts");
const bodyParser = require("body-parser");
const moongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const indexRouter = require("./routes/indexRouter");
const userRouter = require("./routes/userRouter");
const testingRouter = require("./routes/testingRouter");
const questionsRouter = require("./routes/questionsRouter")
const resultsRouter = require("./routes/resultsRouter");

const app = express();

// settings to serve static files
app.use(express.static("public"))


// setting for the view engine
app.set("views", "view");
app.set("view engine", "ejs");
app.use(expressEjsLayouts);

// body parser
app.use(bodyParser.urlencoded({ urlencoded: true, extended: false }));
app.use(bodyParser.json());

// cookie parser
app.use(cookieParser())


app.use("/", indexRouter);
app.use("/users", userRouter);
app.use("/testing", testingRouter);
app.use("/questions", questionsRouter);
app.use("/results", resultsRouter);


app.use((error, req, res, next) => {
    res.render("error", error)
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`server started...on port ${PORT}`);
})


// database connection
moongoose.connect("mongodb://localhost:27017/my-quiz-app", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(console.log("connected to local database"))
    .catch(error => console.log(error))