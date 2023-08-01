const express = require("express");
const {
  getOneWorkout,
  createNewWorkout,
  getAllWorkouts,
  updateOneWorkout,
  deleteOneWorkout,
} = require("../../controllers/workoutController");
const router = express.Router();

router.get("/", getAllWorkouts);

router.get("/:workoutId", getOneWorkout);

router.post("/", createNewWorkout);

router.patch("/:workoutId", updateOneWorkout);

router.delete("/:workoutId", deleteOneWorkout);

module.exports = router;
