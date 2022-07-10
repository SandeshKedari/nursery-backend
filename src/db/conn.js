const mongoose = require("mongoose");

//creating a database
mongoose.connect("mongodb://localhost:27017/database", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connection successfuly");

}).catch((error)=>{
    console.log(error);
})
