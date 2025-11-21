import mongoose from "mongoose";

const EntrySchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  type: { type: String, required: true },
  gist: { type: String, required: true},
  iconName: { type: String, default: "Landmark" }, 
});

export default mongoose.models.Entry || mongoose.model("Entry", EntrySchema);