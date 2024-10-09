import Image from "next/image";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
   // En tu archivo public/index.html
// Agrega el siguiente link dentro de la sección <head>
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />

<div className="bg-gradient-to-br from-indigo-900 to-green-900 min-h-screen overflow-auto">
  <div className="container max-w-5xl mx-auto px-4">
    <div className="w-4/5">
      <h1 className="mt-32 text-white text-6xl font-bold">
        The fastest, most secure dev environment <br />
        <span className="text-blue-400">on the planet.</span>
      </h1>
    </div>
    <div className="w-5/6 my-10 ml-6">
      <h3 className="text-gray-300">
        Create, edit & deploy fullstack apps with <br />
        <strong className="text-white">
          faster package installations & greater security
        </strong>
        <br />
        than even local environments.
      </h3>
    </div>
    <div className="hidden sm:block opacity-50 z-0">
      <div className="shadow-2xl w-96 h-96 rounded-full -mt-72"></div>
      <div className="shadow-2xl w-96 h-96 rounded-full -mt-96"></div>
      <div className="shadow-xl w-80 h-80 rounded-full ml-8 -mt-96"></div>
    </div>
    <div className="text-white relative">
      <h3 className="uppercase font-semibold">Frameworks & Libraries</h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-5 uppercase">
        <div className="group flex items-center bg-indigo-900 bg-opacity-40 shadow-xl gap-5 px-6 py-5 rounded-lg ring-2 ring-offset-2 ring-offset-blue-800 ring-cyan-700 mt-5 cursor-pointer hover:bg-blue-900 hover:bg-opacity-100 transition">
          <img
            className="w-9"
            src="data:image/svg+xml,%3C?xml version='1.0' encoding='utf-8'?%3E %3C!-- Generator: Adobe Illustrator 22.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E %3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 80 80' style='enable-background:new 0 0 80 80;' xml:space='preserve'%3E %3Cstyle type='text/css'%3E .st0%7Bfill:%23DD0031;%7D .st1%7Bfill:%23C3002F;%7D .st2%7Bfill:%23FFFFFF;%7D %3C/style%3E %3Cg%3E %3Cpolygon class='st0' points='40,0 40,0 40,0 2.8,13.3 8.4,62.5 40,80 40,80 40,80 71.6,62.5 77.2,13.3 '/%3E %3Cpolygon class='st1' points='40,0 40,8.9 40,8.8 40,49.4 40,49.4 40,80 40,80 71.6,62.5 77.2,13.3 '/%3E %3Cpath class='st2' d='M40,8.8L16.7,61l0,0h8.7l0,0l4.7-11.7h19.8L54.5,61l0,0h8.7l0,0L40,8.8L40,8.8L40,8.8L40,8.8L40,8.8z M46.8,42.2H33.2L40,25.8L46.8,42.2z'/%3E %3C/g%3E %3C/svg%3E"
            alt="Angular logo"
          />
          <div>
            <span>Angular</span>
            <span className="text-xs text-blue-300 block">Typescript</span>
          </div>
          <div>
            <i className="fa fa-chevron-right opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 block transition"></i>
          </div>
        </div>

        {/* Aquí puedes agregar más frameworks de la misma manera */}
        
      </div>
    </div>
  </div>
</div>

  );
}
