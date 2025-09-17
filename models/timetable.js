
import mongoose from "mongoose";

const timetableSchema = new mongoose.Schema({
  data: {
    type: Object, 
    required: true
  },
  generatedAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Timetable", timetableSchema);
