import React from "react";
import BookingForm from "./BookingForm";

const BookingPage = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Reserve a Table</h1>
      <p>Please fill out the form below to book your table at Little Lemon.</p>
      <BookingForm />
    </div>
  );
};

export default BookingPage;
