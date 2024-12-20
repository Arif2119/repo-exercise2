import React, { useReducer } from "react";
import BookingForm from "./components/BookingForm";

// Initial available times (this can be dynamic in the future)
const initializeTimes = () => ["17:00", "18:00", "19:00", "20:00", "21:00"];

// Reducer function to update available times based on the selected date
const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      // Here, you can dynamically change the times based on the date if required
      return initializeTimes(); // Replace this logic with date-dependent behavior
    default:
      return state;
  }
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <main>
      <h1>Book Your Table</h1>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </main>
  );
};

export default Main;
