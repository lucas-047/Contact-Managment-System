// server.js

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect("mongodb+srv://Four:root@four.jlakgs5.mongodb.net/?retryWrites=true&w=majority&appName=Four", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => console.log("Connected to MongoDB"));

// Middleware
app.use(cors());

// Contact Model
const Contact = mongoose.model("Contact", {
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true
  }
});

// Routes
app.get("/api/contacts", async (req, res) => {
  try {
    const contacts = await Contact.find();
    console.log(data.length);
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.messemail });
  }
});



app.post("/api/contacts", async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const contact = new Contact({ name, email, phone });
    await contact.save();
    res.status(201).json(contact);
  } catch (err) {
    res.status(400).json({ error: err.messemail });
  }
});

app.post("/api/contacts/search", async (req, res) => {
  try {
    const { name } = req.body;
    const contacts = await Contact.findOne({ name });
    res.json(contacts);
  } catch (error) { }
});

app.post("/api/contacts/delete", async (req, res) => {
  try {
    const { name } = req.body;
    await Contact.deleteOne({ name });
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) { }
});




app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
