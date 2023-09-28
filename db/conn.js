const mongoose = require("mongoose");



mongoose.connect(process.env.MONGO_URL,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=> console.log("Database is Connected")).catch((err)=>{
    console.log(err);
})