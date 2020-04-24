const db = require("../model");
const axios = require("axios");

function apiRoutes(app) {
    app.get("/api/googlebooks/:title", function(req, res){
        const title = req.params.title
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + title).then(function(result){
              res.json(result.data.items)
        })
    })

    app.post("/api/books", function(req, res) {
        const newBook = req.body
        db.Book.create(newBook).then(function(result){
            res.json(result)
        })
    })

    app.delete("/api/books/:id", function(req, res) {
        const id= req.params.id
        db.Book.remove({_id:id}).then(function(result){
            res.json(result)
        })
    })
    
    app.get("/api/books", function(req, res){
        db.Book.find().then(function(result){
            res.json(result)
        })
    })
}




module.exports = apiRoutes