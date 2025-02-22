import Link from "next/link";
import Logo from "./Logo";
import HeaderNav from "./HeaderNav";

export default function Header() {
  return (
    <header className="px-8 py-4 border-b border-primary-900">
      <div className="flex justify-between items-center relative z-10 max-w-7xl mx-auto">
        <Logo />
        <HeaderNav />
      </div>
    </header>
  );
}
