const workoutService = require("../services/workoutService");

const getAllWorkouts = (req, res) => {
  const allWorkout = workoutService.getAllWorkouts();
  return res.json({
    allWorkout,
  });
};

const getOneWorkout = (req, res) => {
  res.send("Get an existing workout");
};

const createNewWorkout = (req, res) => {
  const { name, mode, equipment, exercises, trainerTips } = req.body;
  if (!name || !mode || !equipment || !exercises || !trainerTips) {
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
  console.log("controller", craetedWorkout);
  if (craetedWorkout) {
    res.status(201).send({
      status: "Success",
      data: craetedWorkout,
    });
  }
};

const updateOneWorkout = (req, res) => {
  const { workoutId } = req.params;
  const { name, mode, equipment, exercises, trainerTips } = req.body;
  if (!workoutId) {
    return;
  }

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
  res.send("Update an existing workout");
};

const deleteOneWorkout = (req, res) => {
  res.send("Delete an existing workout");
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
