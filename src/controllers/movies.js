import Movie from "../models/MoviesModels.js";

class MoviesController {
  async getAllMovies(req, res) {
    try {
      const movies = await Movie.find();
      res.status(200).json({
        message: "Get All Movies Done",
        data: movies,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
  async getMovieDetail(req, res) {
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
  async createMovie(req, res) {
    const saveMovie = await Movie.create(req.body);
    res.status(201).json({
      message: "Create Movie Successfull",
      data: saveMovie,
    });
  }
  async updateMovie(req, res) {
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
  async deleteMovie(req, res) {
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

export default MoviesController;