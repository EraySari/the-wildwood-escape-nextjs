import Link from "next/link";
import { HiCalendarDays } from "react-icons/hi2";
import { HiMiniIdentification } from "react-icons/hi2";

export default function SideNavigation() {
  return (
    <nav className="border-r border-primary-900">
      <ul className="flex flex-col gap-7 h-full text-lg font-semibold p-4">
        <li>
          <Link
            href="/account/reservations"
            className="flex items-center gap-2 p-3 text-primary-200 hover:bg-primary-900 hover:text-primary-100"
          >
            <HiCalendarDays className="text-primary-600" /> Reservation
          </Link>
        </li>
        <li>
          <Link
            href="/account/profile"
            className="flex items-center gap-2 p-3 text-primary-200 hover:bg-primary-900 hover:text-primary-100"
          >
            {" "}
            <HiMiniIdentification className="text-primary-600" /> Profile
          </Link>
        </li>

        <li className="mt-72">
          <button>Log Out</button>
        </li>
      </ul>
    </nav>
  );
}
