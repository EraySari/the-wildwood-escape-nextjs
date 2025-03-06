"use client";
import { bookingSubmit } from "@/lib/actions";
import { useFormState } from "react-dom";
import FormSubmitButton from "./Form-submit-button";
import { useBooking } from "./BookingDateContext";

export default function BookingForm({ cabin }) {
  const { maxCapacity } = cabin;

  const { range } = useBooking();

  const bookingData = {
    startDate: range.from,
    endDate: range.to,
    cabinID: cabin.id,
  };

  const createBookingWithData = bookingSubmit.bind(null, bookingData);

  const [state, formAction] = useFormState(createBookingWithData, {
    message: null,
  });
  //useFormda API çağrısını manuel olarak yapmamız gerekir (fetch). yani ekstra istemci tarafı kodu çalıştırıyor.
  // useFormState ise fetche gerek yok direkt serverda
  //Form verisi doğrudan sunucuya gidiyor, istemci tarafında ekstra bir işlem gerekmiyor.
  //fetch("/api/...") yerine, doğrudan bir fonksiyon çağırır gibi işlem yapabiliyoruz.

  return (
    <div className="bg-slate-500">
      <form action={formAction}>
        <input type="hidden" name="cabinID" value={cabin.id} />
        <div className="px-14 py-10 text-xl">
          <div className="flex flex-col gap-2 mb-10">
            <label htmlFor="guests" className="font-semibold">
              How many guests?
            </label>
            <select
              type="number"
              id="guests"
              name="guests"
              required
              className="p-4 text-lg bg-slate-300 text-slate-900 rounded-sm"
            >
              <option value="" key="">
                Select number of guests...
              </option>

              {Array.from({ length: maxCapacity }, (_, i) => i + 1).map(
                (count) => (
                  <option value={count} key={count}>
                    {count} {count === 1 ? "guest" : "guests"}
                  </option>
                )
              )}
            </select>
          </div>

          <div className="flex flex-col gap-2 mb-8">
            <label htmlFor="note" className="font-semibold">
              Anything we should know about your stay?
            </label>
            <textarea
              placeholder="Any pets, allergies, special requirements, etc.?"
              id="note"
              name="note"
              className="text-lg bg-slate-300 text-slate-900 p-4 rounded-sm"
            />
          </div>

          {state.message ? (
            <div>
              <p>{state.message}</p>
            </div>
          ) : (
            ""
          )}

          <FormSubmitButton />
        </div>
      </form>
    </div>
  );
}
