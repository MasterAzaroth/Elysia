import mongoose from "mongoose";

const FoodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  calories: { type: Int32, required: true },
  protein: { type: Int32, required: true },
  carbs: { type: Int32, required: true},
  fat: { type: Int32, required: true},
  icon: { type: String, default: "Wheat" },
});

export default mongoose.models.Food || mongoose.model("Food", FoodSchema);