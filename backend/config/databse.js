const mongoose=require("mongoose");
require("dotenv").config()

async function dbconnect()
{
    try{
        const con=await mongoose.connect('mongodb+srv://khanlaraib13:qwerty1234@cluster0.8dgrbiv.mongodb.net/Employee');
        if(con)
        {
            console.log("DB connection successfull")
        }
    }
    catch(err){
        console.log("connection issue");
        console.error(err.message);
        process.exit(1);
    }
};

module.exports=dbconnect;

