export default function ReservationBox({ reservation }) {
  return (
    <div className="border">
      <p>{reservation.cabinPrice}</p>
    </div>
  );
}
