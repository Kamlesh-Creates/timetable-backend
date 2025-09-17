
import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  type: {
    type: String,
    enum: ["Lecture", "Lab"],
    required: true
  },
  frequency: {
    type: Number,
    required: true
  }
});

export default mongoose.model("Subject", subjectSchema);
