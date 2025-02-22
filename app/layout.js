import { Josefin_Sans } from "next/font/google";
import "./_styles/global.css";
import Header from "./_components/Header";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "The Wildwood Escape",
  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased bg-background text-primary-100 min-h-screen flex flex-col relative`}
      >
        <Header />
        <div className="px-7 py-12">
          <main className="max-w-7xl mx-auto w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
