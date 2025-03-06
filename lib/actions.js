"use server";
export async function bookingSubmit(bookingData, formData) {
  //user, cabin, gün, guest, note bilgileri gelecek
  const bookData = {
    guestNumber: formData.get("guests"),
    guestNote: formData.get("note"),
    cabinID: formData.get("cabinID"),
  };

  console.log(bookingData, bookData);
  if (!bookData.guestNumber) return { message: "Please select guest number" };

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return bookData;
}
