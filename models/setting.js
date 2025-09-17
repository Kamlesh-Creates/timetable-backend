
import mongoose from "mongoose";

const settingsSchema = new mongoose.Schema({
  days: {
    type: [String],   
    required: true
  },
  start_hour: {
    type: Number,
    required: true
  },
  end_hour: {
    type: Number,
    required: true
  },
  lunch_start_hour: {
    type: Number,
    required: true
  }
});

export default mongoose.model("Settings", settingsSchema);
