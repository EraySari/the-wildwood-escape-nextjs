"use client";

import { differenceInDays } from "date-fns";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useBooking } from "./BookingDateContext";

export default function DatePicker({ cabin }) {
  const { range, setRange, resetRange } = useBooking();

  const { regularPrice, discount } = cabin;

  const numNight = differenceInDays(range.to, range.from);

  const cabinPrice = numNight * (regularPrice - discount);
  const startDate = new Date();
  const endDate = new Date();
  endDate.setFullYear(endDate.getFullYear() + 2);

  return (
    <div className="flex flex-col justify-between">
      <DayPicker
        className="pt-11 place-self-center"
        mode="range"
        selected={range}
        onSelect={setRange}
        numberOfMonths={2}
        captionLayout="dropdown"
        hidden={{ after: endDate }}
        hideNavigation
      />
      <div className="flex items-center justify-between px-8 h-[70px] bg-primary-600 text-slate-900">
        <div className="flex items-baseline gap-5 ">
          <p className="flex gap-2 items-baseline ">
            {discount > 0 ? (
              <>
                <span className="line-through text-xl">${regularPrice}</span>
                <span className="text-2xl font-semibold">
                  ${regularPrice - discount}
                </span>
              </>
            ) : (
              <span className="text-2xl font-semibold">${regularPrice}</span>
            )}
            <span className="font-normal"> /night</span>
          </p>

          {numNight ? (
            <>
              <p className="border border-slate-900 px-2 py-3 text-2xl">
                <span className="font-semibold">&times;</span>
                <span className="font-bold">{numNight}</span>
              </p>

              <p className="text-2xl font-semibold">
                TOTAL <span className="font-bold">${cabinPrice}</span>
              </p>
            </>
          ) : null}
        </div>

        {numNight ? (
          <button
            className="border border-slate-900 hover:border-primary-700 px-4 py-3  hover:bg-slate-800 hover:text-primary-200"
            onClick={resetRange}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}
