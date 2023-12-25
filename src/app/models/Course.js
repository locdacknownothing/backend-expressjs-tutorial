const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const mongooseDelete = require("mongoose-delete");
const autoIncrement = require("mongoose-sequence")(mongoose);

const Schema = mongoose.Schema;

const Course = new Schema(
  {
    id: { type: Number },
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

mongoose.plugin(slug);
Course.plugin(mongooseDelete, { deletedAt: true, overrideMethods: "all" });
Course.plugin(autoIncrement, { inc_field: "id" });

module.exports = mongoose.model("Course", Course);
