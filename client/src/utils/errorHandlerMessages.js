const data =[
    {error:11000,message:"duplicate email"},
    {error:"somthing went wrong",message:"somthing went wrong"},
    {error:"Email is not exitis",message:"Email is not exitis"},
    {error:"",message:""},
]

const errorHandlerMessages = (errorMessage)=>{
    const defaultErrorMessage = "something went wrong please try again later"
    for(let i=0;i<data.length;i++){
        if(data[i].error === errorMessage){
            return data[i].message;
        }
    }
    return defaultErrorMessage;
}
export default errorHandlerMessages;