import Image from "next/image";
import logo from "@/app/icon.png";
import Link from "next/link";
export default function Logo() {
  return (
    <Link href="/" className="z-10 flex items-center gap-5">
      <Image src={logo} alt="logo" width="80" height="80" quality={100} />
      <span className="text-xl text-headercolor font-semibold">
        The Wildwood Escape
      </span>
    </Link>
  );
}
