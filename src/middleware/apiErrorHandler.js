const ApiError = require('../error/ApiError');

module.exports = (err,req,res,next) =>{
    if(err instanceof ApiError){
        res.status(200).send({ message: err.message,body:err.response,status:"error" });
        return;
    }
    if(err.code === 11000){
        res.status(200).send({message:11000,status:"error"})
        return;
    }
    console.log(err)
    res.status(500).send({message:"somthing went wrong",status:"error"})

}