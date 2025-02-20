import Link from "next/link";

export default function HeaderNav() {
  return (
    <div className="text-lg">
      <ul className="flex items-center gap-16 text-headercolor font-semibold">
        <li>
          <Link href="/cabins">Cabins</Link>
        </li>
        <li>
          <Link href="/">About</Link>
        </li>
      </ul>
    </div>
  );
}
