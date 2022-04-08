const mongoose = require("mongoose")

const connection = mongoose.createConnection(
    "mongodb://localhost:27017/My-store"
)

module.exports = connection;