import { getCabins } from "../_lib/data";
import CabinList from "./CabinList";

export default async function CabinListWrapper() {
  const cabinsData = await getCabins();

  return <CabinList cabins={cabinsData} />;
}

// Bu yöntem sana ne kazandırır?
// ✅ Kodun daha modüler olur.
// ✅ Async işlemler UI bileşenlerinden ayrılır.
// ✅ Eğer CabinList'i başka yerde kullanman gerekirse, her seferinde API çağrısı yapmazsın.

// 🔥 Özetle: Eğer getCabins() zaten data.js içinde tanımlıysa, CabinList yerine CabinListWrapper gibi bir üst bileşende çağırman en iyisi olur. 🚀
