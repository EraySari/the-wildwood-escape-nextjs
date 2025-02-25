import { getCabins } from "../_lib/data";
import CabinList from "./CabinList";

export default async function CabinListWrapper() {
  const cabinsData = await getCabins();
  console.log(cabinsData);

  return <CabinList cabins={cabinsData} />;
}
