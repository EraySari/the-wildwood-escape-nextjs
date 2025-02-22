import { getCabins } from "../_lib/data";
import CabinCard from "./CabinCard";

export default async function CabinList() {
  const cabinsData = await getCabins();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {cabinsData.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}
