import Image from "next/image";
import dummyImg from "@/public/hiking.jpg";
import Link from "next/link";

import { HiOutlineHome } from "react-icons/hi2";
import { HiOutlineUsers } from "react-icons/hi2";

export default function CabinCard({ cabin }) {
  const { id, cabinName, description, maxCapacity, regularPrice, discount } =
    cabin;

  return (
    <div className="flex border border-primary-800">
      <div className="flex-1 relative">
        {/* büyüyüp kücülebilir */}
        <Image
          src={dummyImg}
          alt="dummy"
          fill
          className="object-cover border-r border-primary-800"
        />
      </div>
      <div className="flex-grow">
        {/* icerige göre genisler kücülmez */}
        <div className="py-4 px-5">
          <div className="flex items-center mb-3 gap-2">
            <HiOutlineHome className="h-6 w-6" />
            <h3 className="text-2xl font-semibold text-yellow">{cabinName}</h3>
          </div>

          <div className="flex items-center mb-3 gap-2">
            <HiOutlineUsers className="h-5 w-5" />

            <p className="text-lg">
              For up to{" "}
              <span className="text-xl font-bold ">{maxCapacity}</span> guests
            </p>
          </div>

          <div className="flex items-center gap-1 justify-end">
            {discount ? (
              <>
                <p className="text-3xl font-normal mr-2">
                  ${regularPrice - discount}
                </p>
                <p className="line-through text-primary-700">${regularPrice}</p>
              </>
            ) : (
              <p className="text-3xl font-normal">${regularPrice}</p>
            )}

            <span className="text-lg">/ night</span>
          </div>
        </div>
        <div className="border-t border-primary-800 text-right">
          <Link
            href="/about"
            className="p-4 inline-block border-l font-semibold border-primary-800 hover:bg-primary-600 hover:text-primary-950"
          >
            Details & Reservation &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
