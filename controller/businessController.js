const businessModel = require("../models/businessModel");

const getAllBusiness = async (req, res) => {
  try {
    const allBusiness = await businessModel
      .find({})
      .where("status")
      .equals("active")
      .populate(["freelancer",'comments']);
    if (!allBusiness) {
      return res.status(401).json({ message: "No data found" });
    } else {
      res.json(allBusiness);
    }
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

// Get a single business
const getBusiness = async (req, res) => {
  try {
    const singleBusiness = await businessModel
      .findById(req.params.id)
      .populate(["freelancer",'comments']);
    res.status(200).json({
      status: "success",
      data: {
        singleBusiness,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};


// FIND BY CATEGORY
const categoryFreelancer= async(req,res)=>{
    const {category} = req.params;
    try{
                const freelancers = await businessModel.find({category}).populate('freelancer')
        if(!freelancers){
            return  res.status(500).send('no freelancers in this category')
        }else{
            return res.status(200).json(freelancers)
        }
    }catch(err){
        res.json({msg:err.message})
    }
}


// ADD NEW BUSINESS
const newBusiness = async (req, res) => {
  try {
    const imageFile = req.file;
    const data = req.body;

    let newbusiness = await businessModel.create({
      ...data,
      image: imageFile.filename,
    });
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
const removeBusiness = async (req, res) => {
  const { businessId } = req.params;
  try {
    const deleted = await businessModel.deleteOne({ _id: businessId });
    if (!deleted) {
      throw Error("Couldnt delete");
    } else {
      res.json({ msg: "Business Deleted Successfully" });
    }
  } catch (err) {
    res.json({ msg: err.message }).status(501);
  }
};


// ADD ADD TO BALANCE
const addToBalance = async (req, res) => {
  const { businessId } = req.params;
  const { amount } = req.body;
  try {
    // Convert the amount value to a number
    const amountToAdd = Number(amount);

    // Find the existing business document
    const existingBusiness = await businessModel.findOne({ _id: businessId });

    if (!existingBusiness) {
      return res.json({ msg: "No business found" });
    }

    // Calculate the new balance
    const newBalance = existingBusiness.balance + amountToAdd;

    // Update the balance in the database
    const updatedBusiness = await businessModel.updateOne(
      { _id: businessId },
      { $set: { balance: newBalance } }
    );
    res.json(updatedBusiness);
  } catch (err) {
    res.json({ msg: err.message });
  }
};

// DEDUCT FROM BALANCE
const deductBalance = async (req, res) => {
  const { businessId } = req.params;
  const { amount } = req.body;

  try {
    // Convert the amount value to a number
    const amountToDeduct = Number(amount);

    // Find the existing business document
    const existingBusiness = await businessModel.findOne({ _id: businessId });

    if (!existingBusiness) {
      return res.json({ msg: "No business found" });
    }

    // Calculate the new balance
    const newBalance = existingBusiness.balance - amountToDeduct;

    // Update the balance in the database
    const updatedBusiness = await businessModel.updateOne(
      { _id: businessId },
      { $set: { balance: newBalance } }
    );

    res.json(updatedBusiness);
  } catch (err) {
    res.json({ msg: err.message });
  }
};


module.exports = {
  getAllBusiness,
  getBusiness,
  newBusiness,
  updateBusiness,
  removeBusiness,
  categoryFreelancer,
  addToBalance,
  deductBalance
};
