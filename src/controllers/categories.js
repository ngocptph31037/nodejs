import Movie from "../models/categoriModels.js";

class CategoriesController {
  async getAllcategori(req, res) {
    try {
      const categori = await Movie.find();
      res.status(200).json({
        message: "Get All categori Done",
        data: categori,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
  async getcategoriDetail(req, res) {
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
  async createcategori(req, res) {
    const saveMovie = await Movie.create(req.body);
    res.status(201).json({
      message: "Create Movie Successfull",
      data: saveMovie,
    });
  }
  async updateCategori(req, res) {
    try {
      const movie = await Movie.findByIdAndUpdate(req.params.id, req.body);
      if (!movie) {
        return res.status(404).json({
          message: "categoriesController Not Found",
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
  async deleteCategori(req, res) {
    try {
      const movie = await Movie.findByIdAndDelete(req.params.id);
      if (!movie) {
        return res.status(404).json({
          message: "categori Not Found",
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

export default CategoriesController;