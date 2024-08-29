const transactionModel = require("../models/TransactionsModel")


const getTransactions = async(req,res)=>{
    try{
        let transactions = await transactionModel.find({}).populate('request')
        if(!transactions){
            return res.status(401).json({message:"No Transaction Found"})
        }else{
            return res.status(200).json({message:transactions})
        }
    }catch(err){
        res.status(500).json({message: "Internal Server Error"})
    }
}


// GET TRANSACTION BY BUSINESS ID
const getTansactionsByBusiness = async(req,res)=>{
    let {businessId} = req.body
    try{
        let transactions = await transactionModel.find().populate('request')
        if(!transactions){
            return res.status(401).json({message:"No Transaction Found"})
        }

        return res.status(200).json(transactions)

       
    }catch(err){
        return res.status(500).json(err)
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
            return res.status(200).json({message: "Successfully added a new Transaction"})
        }
    }catch(err){
        res.status(500).json({message: err.message})
    }
}


module.exports={
    getTransactions,
    addTransaction,
    getTansactionsByBusiness
}