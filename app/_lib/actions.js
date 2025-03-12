// "use server";

// import { redirect } from "next/dist/server/api-utils";
// import { getCabin } from "./data";

// //hala eski componenti kullaniyor
// export default async function createBooking(bookingData, formData) {
//   const bosokingData = {
//     isPaid: true,
//     cabinPrice: 480.0,
//     extrasPrice: 20.0,
//     totalPrice: 980.0,
//     isBreakfast: true,
//     status: "Confirmed",
//     startDate: "2024-11-29",
//     endDate: "2024-12-02",
//     numNights: 4,
//     numGuests: 2,
//     user: {
//       id: 20,
//     },
//     cabin: {
//       id: 25,
//     },
//   };
//   const authData = Buffer.from(
//     `${process.env.BASIC_AUTH_USER}:${process.env.BASIC_AUTH_PASS}`
//   ).toString("base64");
//   const res = await fetch("http://localhost:8080/api/booking", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Basic ${authData}`,
//     },
//     body: JSON.stringify(bosokingData),
//     cache: "no-store",
//   });

//   if (!res.ok) throw new Error("Booking could not be created!");

//   revalidatePath(`/cabins/${bookingData.cabinID}`);

//   redirect("/cabins");
// }
