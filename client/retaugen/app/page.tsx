import Image from "next/image";
import FileUploadComponent from "./components/fileUpload";

export default function Home() {
  return ((
    <div>

      <section className="min-h-screen w-screen border-b-emerald-600 flex">
        <div className="w-[25vw] min-h-screen p-4 flex justify-center items-center"><FileUploadComponent /></div>
        <div className="w-[75vw] min-h-screen border-l-2">Sec 2</div>
      </section>

    </div>)
  );
}
