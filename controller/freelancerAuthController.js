const freelancerModel = require('../models/freelancerAuthModel')


// GET ALL FREEELANCERS 
const getAllFreelancers=async(req,res)=>{
    try{
        const allFreelancersData=await freelancerModel.find({}).where("isActive").equals(true);
        if(!allFreelancersData){
            return res.status(401).json({"message":"No data found"})
        }else{
            res.json(allFreelancersData)
        }
    }catch(err){
        res.status(400).json({msg : err.message})
    }
}

// ADD NEW FREELANCER
const newFreelancer = async(req,res)=>{
    try{
        const data = req.body
        const newfreelancer = await freelancerModel.create(data);
        if(!newfreelancer){
            throw Error('Error in creating a Freelancer');
        }else{
            res.json(newfreelancer)
        }
    }catch(err){
        res.json({msg:err.message})
    }
}



module.exports = {
    getAllFreelancers,
    newFreelancer
}