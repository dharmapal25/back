const mongo = require("mongoose");

const databaseConnect = mongo.connect(process.env.MONGO_URI)
.then(()=> {
    console.log("Successfully connected to DB");

}).catch((err)=> {
    console.log("server don't connected to DB >> ",err);
    
})

module.exports = databaseConnect;