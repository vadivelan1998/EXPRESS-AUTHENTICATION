const mongoose =require("mongoose")
module.exports=()=>{
    return mongoose.connect(
      "mongodb+srv://vadivelan1998:vadivelan1234@cluster0.d3xw1.mongodb.net/EXPRESS-AUTHENTICATION?retryWrites=true&w=majority"
    );
}