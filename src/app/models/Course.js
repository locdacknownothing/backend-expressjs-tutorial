const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const Schema = mongoose.Schema;

mongoose.plugin(slug);

const Course = new Schema(
  {
    title: { type: String, maxLength: 255, require: true },
    description: { type: String, minLength: 1, default: "Description" },
    slug: { type: String, slug: "title", unique: true, require: true },
    image: { type: String },
    vId: { type: String, maxLength: 255 },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Course", Course);
