"use server";

import { getCabin } from "@/app/_lib/data";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

//hala eski componenti kullaniyor
export default async function createBooking(bookingData, formData) {
  const cabinData = await getCabin(bookingData.cabinID);
  console.log("#", cabinData);
  console.log(formData);
  console.log(bookingData);
  const postData = {
    isPaid: true,
    cabinPrice: cabinData.regularPrice,
    extrasPrice: 20.0,
    totalPrice: 980.0,
    isBreakfast: true,
    status: "Confirmed",
    startDate: bookingData.startDate,
    endDate: bookingData.endDate,
    numNights: 4,
    numGuests: formData.guests,
    user: {
      id: 20,
    },
    cabin: {
      id: bookingData.cabinID,
    },
  };
  const authData = Buffer.from(
    `${process.env.BASIC_AUTH_USER}:${process.env.BASIC_AUTH_PASS}`
  ).toString("base64");
  const res = await fetch("http://localhost:8080/api/booking", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${authData}`,
    },
    body: JSON.stringify(postData),
  });

  if (!res.ok) throw new Error("Booking could not be created!");

  revalidatePath(`/cabins/${bookingData.cabinID}`);

  redirect("/cabins/thankyou");
}
