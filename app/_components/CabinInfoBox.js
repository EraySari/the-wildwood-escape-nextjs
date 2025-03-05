import Image from "next/image";
import testImg from "@/public/hiking.jpg";
import { HiMiniEyeSlash, HiMiniMapPin, HiUsers } from "react-icons/hi2";
export default function CabinInfoBox({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    cabin;

  return (
    <div className="container px-6 py-14 border border-primary-800 mb-32">
      <div className="grid grid-cols-2 gap-12">
        <div className="relative">
          <Image
            src={testImg}
            alt="test"
            fill
            className="rounded-2xl object-cover"
          />
        </div>

        <div>
          <h1 className="text-6xl font-semibold mb-8">Cabin {name}</h1>

          <h3 className="mb-4 md:mb-8 text-primary-400 md:text-lg">
            {description}
          </h3>

          <ul>
            <li className="flex items-center gap-3 mb-3">
              {" "}
              <HiUsers className="h-5 w-5 text-primary-500" />
              <p className="text-lg">
                For up to{" "}
                <span className="text-xl font-bold ">{maxCapacity}</span> guests
              </p>
            </li>
            <li className="flex items-center gap-3 mb-3 ">
              {" "}
              <HiMiniMapPin className="h-5 w-5 text-primary-500" />
              <p className="text-lg">
                Located in a <span className="font-bold">prime position</span>{" "}
                within the <span className="font-bold">Alps</span>
              </p>
            </li>
            <li className="flex items-center gap-3 mb-3">
              {" "}
              <HiMiniEyeSlash className="h-5 w-5 text-primary-500" />
              <p className="text-lg">
                A <span className="font-bold">fully private</span> accom
              </p>
            </li>
          </ul>

          {/* <div className="flex gap-2 items-center">
            {discount ? (
              <>
                <p className="line-through text-lg">${regularPrice}</p>
                <p className="text-2xl font-semibold">
                  ${regularPrice - discount}
                </p>
              </>
            ) : (
              <p>{name}</p>
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
}
