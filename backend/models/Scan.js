const mongoose = require("mongoose");

const scanSchema = new mongoose.Schema({

  network: {

    type: String,

    required: true

  },

  results: {

    type: String,

    required: true

  },

  createdAt: {

    type: Date,

    default: Date.now

  }

});

module.exports = mongoose.model("Scan", scanSchema);