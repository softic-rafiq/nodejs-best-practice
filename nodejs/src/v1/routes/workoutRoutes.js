const express = require("express");
const {
  getOneWorkout,
  createNewWorkout,
  getAllWorkouts,
  updateOneWorkout,
  deleteOneWorkout,
} = require("../../controllers/workoutController");
const { getRecordForWorkout } = require("../../controllers/recordController");
const router = express.Router();

router.get("/", getAllWorkouts);

router.get("/:workoutId", getOneWorkout);

router.post("/", createNewWorkout);

router.patch("/:workoutId", updateOneWorkout);

router.delete("/:workoutId", deleteOneWorkout);
router.get("/:workoutId/records", getRecordForWorkout);
module.exports = router;
