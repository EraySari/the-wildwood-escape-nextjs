"use client";
import { createContext, useContext, useState } from "react";

const BookingContext = createContext();

const initialState = { from: undefined, to: undefined };

function BookingProvider({ children }) {
  const [range, setRange] = useState(initialState);
  const resetRange = () => setRange(initialState);

  return (
    <BookingContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </BookingContext.Provider>
  );
}

function useBooking() {
  const context = useContext(BookingContext);
  return context;
}

export { BookingProvider, useBooking };
