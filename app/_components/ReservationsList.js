import { getReservations } from "../_lib/data";
import ReservationBox from "./ReservationBox";

export default async function ReservationsList(params) {
  const reservations = await getReservations();
  console.log(reservations);
  return (
    <div>
      {reservations.map((reservation) => (
        <ReservationBox reservation={reservation} key={reservation.id} />
      ))}
    </div>
  );
}
