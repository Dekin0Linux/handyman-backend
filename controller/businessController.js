const businessModel = require("../models/businessModel");

const getAllBusiness = async (req, res) => {
  try {
    const allBusiness = await businessModel
      .find({})
      .where("status")
      .equals("active")
      .populate("freelancer");
    if (!allBusiness) {
      return res.status(401).json({ message: "No data found" });
    } else {
      res.json(allBusiness);
    }
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

// ADD NEW BUSINESS
const newBusiness = async (req, res) => {
  try {
    const imageFile = req.file
    const data = req.body;
    
    let newbusiness = await businessModel.create({...data,image:imageFile.filename});
    if (!newbusiness) {
      return res.json({ msg: "Business could not be created" });
    } else {
      res.json(newbusiness);
    }
  } catch (err) {
    res.status(501).json({ msg: err.message });
  }
};

//EDIT UESR INFO
const updateBusiness = async (req, res) => {
  const data = req.body;
  const { businessId } = req.params;

  try {
    const business = await businessModel.updateOne({ _id: businessId }, data);
    if (!business) {
      res.json({ msg: "No business found" });
    } else {
      res.json(business);
    }
  } catch (err) {
    res.json({ msg: err.message });
  }
};

// DELETE BUSINESS
const removeBusiness = async (req,res)=>{
    const { businessId } = req.params;
    try{
        const deleted=await businessModel.deleteOne({"_id":businessId});
        if(!deleted){
            throw Error('Couldnt delete');
        }else{
            res.json({msg: "Business Deleted Successfully"})
        }
    }catch(err){
        res.json({msg:err.message}).status(501)
    }
}

module.exports = {
  getAllBusiness,
  newBusiness,
  updateBusiness,
  removeBusiness
};
