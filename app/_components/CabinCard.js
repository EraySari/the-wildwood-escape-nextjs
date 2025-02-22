import Image from "next/image";
import dummyImg from "@/public/hiking.jpg";

export default function CabinCard({ cabin }) {
  const { id, cabinName, description, maxCapacity, regularPrice, discount } =
    cabin;

  return (
    <div className="flex border border-purple-400">
      <div className="flex-1 relative">
        {/* büyüyüp kücülebilir */}
        <Image src={dummyImg} alt="dummy" fill className="object-cover" />
      </div>
      <div className="flex-grow">
        {/* icerige göre genisler kücülmez */}
        <div className="py-4 px-5">
          <h3 className="text-2xl font-semibold mb-3">{cabinName}</h3>
          <p className="mb-3">
            For up to <span className="font-bold">{maxCapacity}</span> guests
          </p>
          <p>{regularPrice}</p>
        </div>
      </div>
    </div>
  );
}
