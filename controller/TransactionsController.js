const transactionModel = require("../models/TransactionsModel")


const getTransactions = async(req,res)=>{
    let transactions = await transactionModel.find({})
    try{

        if(!transactions){
            return res.status(401).json({message:"No Transaction Found"})
        }else{
            return res.status(200).json({message:transactions})
        }
    }catch(err){
        res.status(500).json({message: "Internal Server Error"})
    }
}


// ADD NEW TRANSACTION
const addTransaction = async(req,res)=>{
    const data = req.body
    try{
        const newData = await transactionModel.create(data)
        if(!newData){
            return res.status(401).json({message: "Something went wrong"})
        }else{
            return res.status(200).json({message: "Successfully added a new Transaction", data: newData})
        }
    }catch(err){
        res.status(500).json({message: "Internal Server Error"})
    }
}


module.exports={
    getTransactions,
    addTransaction
}