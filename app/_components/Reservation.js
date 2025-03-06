import BookingForm from "./BookingForm";
import DatePicker from "./DatePicker";

export default function Reservation({ cabin }) {
  return (
    <div className="grid grid-cols-2 min-h-[400px]">
      <DatePicker cabin={cabin} />
      <BookingForm cabin={cabin} />
    </div>
  );
}
