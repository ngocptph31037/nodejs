import mongoose from "mongoose";
const Schema = mongoose.Schema;
const categoriesSchema = new Schema (
    {
        name: {
            type: String,
            required: true,
          },
          poster: {
            type: String,
          },
          director: {
            type: String,
          },
          cast: {
            type: String,
          },
          genre: {
            type: String,
          },
          runingTime: {
            type: Number,
          },
          language: {
            type: String,
          },
          rated: {
            type: Number,
          },
          trailer: {
            type: String,
          },
          imgBanner: {
            type: String,
          },
        },
        {
          timestamps: true,
          versionKey: false,
        }
      );
      
      const categories = mongoose.model("categories", categoriesSchema);
      
      export default categories;