const workoutService = require("../services/workoutService");

const getAllWorkouts = (req, res) => {
  try {
    const allWorkout = workoutService.getAllWorkouts();
    return res.json({
      status: true,
      allWorkout,
    });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

// Fetch one workout
const getOneWorkout = (req, res) => {
  const { workoutId } = req.params;
  console.log("id", workoutId);
  if (!workoutId) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':workoutId' can not be empty" },
    });
  }

  try {
    const workout = workoutService.getOneWorkout(workoutId);
    res.send({ status: "OK", data: workout });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const createNewWorkout = (req, res) => {
  const { name, mode, equipment, exercises, trainerTips } = req.body;
  if (!name || !mode || !equipment || !exercises || !trainerTips) {
    res.status(400).send({
      status: "FAILED",
      data: {
        error:
          "One of the following keys is missing or is empty in request body: 'name', 'mode', 'equipment', 'exercises', 'trainerTips'",
      },
    });
    return;
  }

  const newWorkout = {
    name,
    mode,
    equipment,
    exercises,
    trainerTips,
  };

  const craetedWorkout = workoutService.createNewWorkout(newWorkout);

  try {
    const createdWorkout = workoutService.createNewWorkout(newWorkout);
    if (craetedWorkout) {
      res.status(201).send({
        status: "Success",
        data: craetedWorkout,
      });
    }
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const updateOneWorkout = (req, res) => {
  const { workoutId } = req.params;
  const { name, mode, equipment, exercises, trainerTips } = req.body;
  if (!workoutId) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':workoutId' can not be empty" },
    });
  }

  try {
    const updateWorkout = {
      name,
      mode,
      equipment,
      exercises,
      trainerTips,
    };

    const updatedWorkout = workoutService.updateOneWorkout(
      workoutId,
      updateWorkout
    );
    res.send({ status: "OK", data: updatedWorkout });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const deleteOneWorkout = (req, res) => {
  const {
    params: { workoutId },
  } = req;

  if (!workoutId) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':workoutId' can not be empty" },
    });
  }
  try {
    workoutService.deleteOneWorkout(workoutId);
    res.status(204).send({ status: "OK" });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
