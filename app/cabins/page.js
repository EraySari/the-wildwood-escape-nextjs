import { Suspense } from "react";
import Spinner from "../_components/Spinner";
import CabinListWrapper from "../_components/CabinListWrapper";

export default function Cabin() {
  return (
    <div>
      <h1 className="mb-5 text-4xl text-yellow">Our Luxury Cabins</h1>

      <p className="text-primary-200 text-lg mb-14">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>

      <Suspense fallback={<Spinner />}>
        <CabinListWrapper />
      </Suspense>
    </div>
  );
}
