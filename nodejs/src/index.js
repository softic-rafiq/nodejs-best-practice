const express = require("express");

// Import routes
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Use Middlware
app.use(express.json());
// app.use(express.urlencoded({extended:true }))
app.use("/api/v1/workouts", v1WorkoutRouter);

// Run server
app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});
