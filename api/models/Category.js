const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  { timestamps: true },
  {
    name: {
      type: String,
      required: true,
    },
  }
);

module.exports = mongoose.model("Category", CategorySchema);
