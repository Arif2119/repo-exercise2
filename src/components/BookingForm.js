import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const BookingForm = ({ availableTimes, dispatch }) => {
  const validationSchema = Yup.object().shape({
    reservationDate: Yup.date()
      .required("Date is required")
      .min(new Date(), "Reservation date must be in the future"),
    reservationTime: Yup.string().required("Time is required"),
    guests: Yup.number()
      .min(1, "At least 1 guest is required")
      .max(10, "Maximum 10 guests are allowed")
      .required("Number of guests is required"),
    occasion: Yup.string().required("Occasion is required"),
  });

  const handleDateChange = (selectedDate) => {
    dispatch({ type: "UPDATE_TIMES", payload: selectedDate });
  };

  return (
    <Formik
      initialValues={{
        reservationDate: "",
        reservationTime: "",
        guests: 1,
        occasion: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        alert(
          `Booking confirmed for ${values.guests} guest(s) on ${values.reservationDate} at ${values.reservationTime} for ${values.occasion}.`
        );
      }}
    >
      {({ values, setFieldValue, isValid, dirty }) => (
        <Form style={{ display: "grid", maxWidth: "300px", gap: "20px" }}>
          <label htmlFor="reservationDate">Choose date</label>
          <Field
            type="date"
            id="reservationDate"
            name="reservationDate"
            onChange={(e) => {
              setFieldValue("reservationDate", e.target.value);
              handleDateChange(e.target.value);
            }}
          />
          <ErrorMessage
            name="reservationDate"
            component="div"
            style={{ color: "red" }}
          />

          <label htmlFor="reservationTime">Choose time</label>
          <Field as="select" id="reservationTime" name="reservationTime">
            <option value="" disabled>
              Select time
            </option>
            {availableTimes.map((timeOption) => (
              <option key={timeOption} value={timeOption}>
                {timeOption}
              </option>
            ))}
          </Field>
          <ErrorMessage
            name="reservationTime"
            component="div"
            style={{ color: "red" }}
          />

          <label htmlFor="guests">Number of guests</label>
          <Field
            type="number"
            id="guests"
            name="guests"
            min="1"
            max="10"
          />
          <ErrorMessage
            name="guests"
            component="div"
            style={{ color: "red" }}
          />

          <label htmlFor="occasion">Occasion</label>
          <Field as="select" id="occasion" name="occasion">
            <option value="" disabled>
              Select occasion
            </option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </Field>
          <ErrorMessage
            name="occasion"
            component="div"
            style={{ color: "red" }}
          />

          <button type="submit" disabled={!dirty || !isValid}>
            Submit reservation
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default BookingForm;
