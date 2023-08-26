const commentModel = require("../models/CommentsModel")


// GET ALL COMMENTS
const getComments = async (req, res) => {
    const Comments = await commentModel.find();
    try {
      if (!Comments) {
        res.json({ msg: "Sorry Bad request" });
      } else [res.json(Comments)];
    } catch (err) {
      res.send(err);
    }
  };

// ADDING NEW COMMENT
const newComment = async(req,res)=>{
    let data  = req.body;
    try{
        let newcomment = await commentModel.create(data)
        if(!newcomment){
            return res.status(401).json({msg:"Error in creating Comment"})
        }else{
            res.json(newcomment).status(200)
        }
    }catch(err){
        res.json({msg:err.message})
    }
}

// COMMENTS BY USER ID
// get request by client id
// const getBusineesById = async(req,res)=>{
//   const {clientId} = req.body
//   try{
//       const getById = await requestModel.find({}).where('client').equals(clientId)
//       if(!getById){
//           res.json({msg:'User could not be found'}).status(404)
//       }else{
//           return res.json(getById).status(200)
//       }
//   }catch(err){
//       res.json({msg:'err.message'}).json(400)
//   }
// }

module.exports = {
    newComment,
    getComments
}