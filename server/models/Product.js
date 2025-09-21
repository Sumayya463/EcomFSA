import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true,
      default:0
    },
    category:{
      type:String,
      required :true,
      trim: true
    },
    description : {
      type : String,
      default : ""
    },
    countInStock: {
      type : Number,
      required : true,
      default : 0
    },
    image: {
      type: String
    }
    
    
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
