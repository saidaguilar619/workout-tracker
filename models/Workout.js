const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date()
  },

  excercises: [{
    name: {
      type: String,
      trim: true,
      required: "Name is Required"
    },

    type: {
      type: String,
      trim: true,
      required: "Type is Required",
    },

    duration: {
      type: Number,
      required: "Duration is Required"
    },

    weight: {
      type: Number,
    },

    reps: {
      type: Number,
    },
    distance: {
      type: Number,

    },
    sets: {
      type: Number,
    }
  }]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;