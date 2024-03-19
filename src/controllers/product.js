import Movie from "../models/productModels.js";

class ProductController {
  async getAllProduct(req, res) {
    try {
      const product = await Movie.find();
      res.status(200).json({
        message: "Get All product Done",
        data: product,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
  async getProductDetail(req, res) {
    try {
      const movie = await Movie.findById(req.params.id);
      if (!movie) {
        return res.status(404).json({
          message: "Movie Not Found",
        });
      }
      res.status(200).json({
        message: "Get Movie Detail Done",
        data: movie,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
  async createProduct(req, res) {
    const saveMovie = await Movie.create(req.body);
    res.status(201).json({
      message: "Create Movie Successfull",
      data: saveMovie,
    });
  }
  async updateProduct(req, res) {
    try {
      const movie = await Movie.findByIdAndUpdate(req.params.id, req.body);
      if (!movie) {
        return res.status(404).json({
          message: "Movie Not Found",
        });
      }
      const updateMovie = await Movie.findById(req.params.id);
      res.status(200).json({
        message: "Update Movie Successfull",
        data: updateMovie,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
  // DELETE
  async deleteProduct(req, res) {
    try {
      const movie = await Movie.findByIdAndDelete(req.params.id);
      if (!movie) {
        return res.status(404).json({
          message: "Movie Not Found",
        });
      }
      res.status(200).json({
        message: "Delete Movie Done",
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
}

export default ProductController;