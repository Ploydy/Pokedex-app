import Image from "next/image";
import BulbasaurCard from "./(components)/bulbasaurcard";

export default function Home() {
  return (
    <div className="text-center">
      <div>
        <button className="px-10 py-3 bg-slate-400 hover:bg-slate-500 transition rounded">Previous</button>
        <button className="px-10 py-3 ml-20 bg-slate-400 hover:bg-slate-500 transition rounded">Next</button>
      </div>
      <BulbasaurCard />
      </div>
  );
}
