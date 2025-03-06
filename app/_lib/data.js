"use server";

export async function getCabins() {
  //await new Promise((resolve) => setTimeout(resolve, 2000));

  const authData = Buffer.from(
    `${process.env.BASIC_AUTH_USER}:${process.env.BASIC_AUTH_PASS}`
  ).toString("base64");

  const res = await fetch(process.env.API_URL, {
    method: "GET",
    headers: {
      Authorization: `Basic ${authData}`,
    },
    next: { revalidate: 60 }, //60 seconds catch
  });

  if (!res.ok) {
    throw new Error("API'den veri alınamadı!");
  }

  const cabins = await res.json();

  return cabins;
}

export async function getCabin(id) {
  const authData = Buffer.from(
    `${process.env.BASIC_AUTH_USER}:${process.env.BASIC_AUTH_PASS}`
  ).toString("base64");

  const res = await fetch(`http://localhost:8080/api/cabins/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Basic ${authData}`,
    },
    next: { revalidate: 60 }, //60 seconds catch
  });

  if (!res.ok) {
    throw new Error("API'den veri alınamadı!");
  }

  const cabin = await res.json();

  return cabin;
}
