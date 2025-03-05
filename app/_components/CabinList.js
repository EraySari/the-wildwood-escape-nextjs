import CabinCard from "./CabinCard";

//JUST UI, NOT FETCHING
export default function CabinList({ cabins }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {cabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}
