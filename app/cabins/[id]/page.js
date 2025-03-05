import CabinInfoBox from "@/app/_components/CabinInfoBox";
import DatePicker from "@/app/_components/DatePicker";
import Reservation from "@/app/_components/Reservation";
import { getCabin, getCabins } from "@/app/_lib/data";

export async function generateMetadata({ params }) {
  const { name } = await getCabin(params.id);
  return { title: `Cabin ${name}` };
}

export async function generateStaticParams() {
  const cabins = await getCabins();

  const cabinIds = cabins.map((cabin) => ({ id: String(cabin.id) })); //SSG

  return cabinIds;
}

export default async function CabinInfo({ params }) {
  const cabin = await getCabin(params.id);

  console.log(cabin);
  return (
    <div className="max-w-6xl mt-8 mx-auto">
      <CabinInfoBox cabin={cabin} />

      <div>
        <h3 className="text-4xl font-medium text-center mb-10">Booking Now</h3>
        <Reservation cabin={cabin} />
      </div>
    </div>
  );
}
