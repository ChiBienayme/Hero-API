const mongoose = require("mongoose");

// créer un schéma
const heroSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 100,
  },
  power: {
    type: String,
    required: true,
  },

  lastConnection: Date,
  orders: Number,
});

// créer un modèle
const Hero = mongoose.model("Hero", heroSchema);

// exporter le modèle
module.exports = Hero;
