const clientAuthModel = require("../models/clientAuthModel");
const brcrypt = require("bcryptjs");

// GET ALL CLIENTS
const getClients = async (req, res) => {
  const clients = await clientAuthModel.find();
  try {
    if (!clients) {
      res.json({ msg: "Sorry Bad request" });
    } else [res.json(clients)];
  } catch (err) {
    res.send(err);
  }
};

// GET SINGLE CLIENT
const getSingleClient = async (req, res) => {
  const { clientId } = req.params;

  const clients = await clientAuthModel.findOne({ id: clientId });
  try {
    if (!clients) {
      res.json({ msg: "No client found" });
    } else {
      res.json(clients);
    }
  } catch (err) {
    res.send(err);
  }
};

// ADDING NEW CLIENT
const newClient = async (req, res) => {
  const data = req.body;
  try {
    const addNew = await clientAuthModel.create(data);
    if (!addNew) {
      return res.status("409").json({ msg: "User not created" });
    }
    res.json(addNew).status(200);
  } catch (err) {
    res.json({ msg: err.message });
  }
};

//login in a client
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const loginUser = await clientAuthModel
      .where("email", email)
      .where("password", password);
    if (!loginUser) {
      return res.status("409").json({ msg: "User not created" });
    }
    res.json(loginUser).status(200);
  } catch (err) {
    res.json({ msg: err.message });
  }
};

//EDIT UESR INFO
const updateClient = async (req, res) => {
  const data = req.body;
  const { clientId } = req.params;

  try {
    const clients = await clientAuthModel.updateOne({ _id: clientId }, data);
    if (!clients) {
      res.json({ msg: "No client found" });
    } else {
      res.json(clients);
    }
  } catch (err) {
    res.json({ msg: err.message });
  }
};

// DELETE CLIENT
const deleteClient = async (req, res) => {
  const { clientId } = req.params;
  try {
    const client = await clientAuthModel.findByIdAndDelete({ _id: clientId });
    if (!client) {
      res.json({ msg: "No client found" });
    } else {
      res.json({ msg: "remove successfully" });
      return true;
    }
  } catch (err) {
    res.json({ msg: err.message });
  }
};

module.exports = {
  getClients,
  getSingleClient,
  newClient,
  login,
  updateClient,
  deleteClient,
};
