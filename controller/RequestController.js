const requestModel = require("../models/RequestModel")

// get All request
const getAllRequest = async(req,res)=>{
    try{
        const allrequest = await requestModel.find().populate(['business','client'])
        if(!allrequest){
            return res.status(401).json({msg:"No Requests found"}).status(404)
        }else{
            return res.json(allrequest).status(200)
        }
    }catch(err){
        res.json({msg: err.message})
    }
}

// get request by client id
const getRequestById = async(req,res)=>{
    const {clientId} = req.body
    try{
        const getById = await requestModel.find({}).where('client').equals(clientId)
        if(!getById){
            res.json({msg:'User could not be found'}).status(404)
        }else{
            return res.json(getById).status(200)
        }
    }catch(err){
        res.json({msg:'err.message'}).json(400)
    }
}

// add new request
const newRequest = async(req,res)=>{
    const data = req.body
    try{
        const addNew = await requestModel.create(data);
        if(!addNew){
            res.json({msg:'Request Could not be added, check your form inputs'}).status(400)
        }else[
            res.json({msg:'Request Added Successfully', addNew}).status(201)
        ]
    }catch(err){
        res.json({msg:err.message})
    }
}

// update request
const updateRequest = async(req,res)=>{
    const data = req.body;
    const {requestId} = req.params
    try {
        const editRequest = await requestModel.updateOne({ _id: requestId }, data,{new:true});
        if (!editRequest){ 
          res.json({ msg: "No client found" }).status(404);
        } else {
          res.json(editRequest).status(200);
        }
      } catch (err) {
        res.json({ msg: err.message });

      }
}

// deleterequest

const deleteRequest = async (req, res) => {
    const { requestId } = req.params;
    try {
      const delRequest = await requestModel.findByIdAndDelete({ _id: requestId });
      if (!delRequest) {
        res.json({ msg: "No client found" }).status(404);
      } else {
        res.json({ msg: "remove successfully" }).status(200);
      }
    } catch (err) {
      res.json({ msg: err.message });
    }
  };




module.exports = {
    getAllRequest,
    newRequest,
    getRequestById,
    updateRequest,
    deleteRequest
}