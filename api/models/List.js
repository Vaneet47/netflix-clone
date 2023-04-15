const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true }, // continue to watch
    type: { type: String }, // movie or series
    genre: { type: String },
    content: { type: Array }, // will only store ids of the movies
  },
  { timestamps: true }
);

module.export = mongoose.model('List', ListSchema);
