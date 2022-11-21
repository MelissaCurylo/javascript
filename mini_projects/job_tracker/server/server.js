// 1. import dependencies
const express = require("express")
const cors = require("cors")
const app = express()
const port = 8000


// 2. configure mongoose
require("../server/configs/mongoose.config")


// 3. configure express
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 4. attach routes to express server
require("./routes/jobs.routes")(app);

// 5. runn express server
app.listen(8000, () => console.log("Listening on port: 8000"));