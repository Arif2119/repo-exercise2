import { initializeTimes, updateTimes } from "./Main"; // Adjust import path
import '@testing-library/jest-dom';
describe("initializeTimes function", () => {
  test("Returns the correct initial times", () => {
    const times = initializeTimes();
    expect(times).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00"]); // Adjust expected array if necessary
  });
});

describe("updateTimes function", () => {
  test("Returns the same times as provided in the state", () => {
    const initialTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"];
    const action = { type: "UPDATE_TIMES", payload: "2024-12-25" }; // Example date
    const updatedTimes = updateTimes(initialTimes, action);
    expect(updatedTimes).toEqual(initialTimes); // Test ensures logic remains consistent
  });
});
