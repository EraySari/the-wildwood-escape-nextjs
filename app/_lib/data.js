"use server";

const cabins = [
  {
    id: 1,
    cabinName: "Cabin 001",
    description:
      "A cozy retreat for small families or couples, Cabin 001 offers a peaceful escape with a beautiful forest view. This compact yet fully-equipped wooden cabin features a modern interior, a fireplace, and a private deck.",
    maxCapacity: 4,
    regularPrice: 300,
    discount: 20,
  },
  {
    id: 2,
    cabinName: "Cabin 002",
    description:
      "Spacious and comfortable, Cabin 002 is perfect for families and friends looking for an adventure in nature. Enjoy the warm wooden interiors, a fully-stocked kitchen, and a private outdoor space with a fire pit.",
    maxCapacity: 6,
    regularPrice: 450,
    discount: undefined,
  },
  {
    id: 3,
    cabinName: "Cabin 003",
    description:
      "Nestled in the heart of the mountains, Cabin 003 is a luxurious escape featuring a large living area, panoramic views, and a hot tub on the deck.",
    maxCapacity: 8,
    regularPrice: 600,
    discount: 50,
  },
  {
    id: 4,
    cabinName: "Cabin 004",
    description:
      "An eco-friendly retreat designed for nature lovers. Cabin 004 is surrounded by tall pine trees, featuring a solar-powered system, a cozy interior, and an outdoor lounge area.",
    maxCapacity: 5,
    regularPrice: 350,
    discount: undefined,
  },
  {
    id: 5,
    cabinName: "Cabin 005",
    description:
      "Modern and stylish, Cabin 005 offers a contemporary take on traditional cabin living. With floor-to-ceiling windows and a fireplace, it's the perfect getaway.",
    maxCapacity: 7,
    regularPrice: 500,
    discount: 40,
  },
  {
    id: 6,
    cabinName: "Cabin 006",
    description:
      "A romantic hideaway for couples, Cabin 006 features a jacuzzi, a king-sized bed, and a scenic view of the nearby lake.",
    maxCapacity: 2,
    regularPrice: 250,
    discount: 10,
  },
  {
    id: 7,
    cabinName: "Cabin 007",
    description:
      "Designed for large groups, Cabin 007 includes multiple bedrooms, an entertainment room, and a BBQ grill on the deck.",
    maxCapacity: 10,
    regularPrice: 700,
    discount: 60,
  },
  {
    id: 8,
    cabinName: "Cabin 008",
    description:
      "A pet-friendly cabin with a fenced yard, perfect for families traveling with their furry friends. Features a warm fireplace and a private garden.",
    maxCapacity: 5,
    regularPrice: 400,
    discount: undefined,
  },
  {
    id: 9,
    cabinName: "Cabin 009",
    description:
      "An off-the-grid experience with no WiFi, allowing guests to fully disconnect and enjoy nature. Equipped with a wood-burning stove and lanterns.",
    maxCapacity: 3,
    regularPrice: 280,
    discount: 18,
  },
  {
    id: 10,
    cabinName: "Cabin 010",
    description:
      "A two-story luxury cabin with a rooftop terrace, sauna, and private chef services available upon request.",
    maxCapacity: 12,
    regularPrice: 900,
    discount: 100,
  },
  {
    id: 11,
    cabinName: "Cabin 011",
    description:
      "A family-friendly retreat with a kids' play area, bunk beds, and easy access to hiking trails.",
    maxCapacity: 6,
    regularPrice: 420,
    discount: 30,
  },
  {
    id: 12,
    cabinName: "Cabin 012",
    description:
      "A minimalist-designed wooden cabin with large windows for stunning sunrise views over the valley.",
    maxCapacity: 4,
    regularPrice: 320,
    discount: 20,
  },
];
export async function getCabins() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return cabins;
}
