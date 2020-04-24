const express = require("express");
const app = express();
const port = process.env.PORT || 3001
const mongoose = require("mongoose");
app.use(express.urlencoded({extended:true}))

app.use(express.json())
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooksdb");
const apiRoutes = require("./controller/apiRoutes");
apiRoutes(app);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"))
}

app.listen(port, function(){
    console.log("app is listening http://localhost:" + port)
})