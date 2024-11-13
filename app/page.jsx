import { FaDiscord } from "react-icons/fa";


export default function Home() {
  return (
    <div className="relative z-[999]">
      <div className="w-screen h-screen container mx-auto px-2 sm:px-6 lg:px-8 flex flex-col items-center gap-4 pt-[14vh]">
          <img className="w-[250px]" src="/assets/logo.png" alt="" />
          <p className="max-w-md text-white/90 text-s text-center leading-relaxed uppercase">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          <button 
          className="
          bg-gradient-to-r from-purple-500 to-pink-500 
          text-white/80 hover:text-white px-10 py-2 rounded mt-4 
          text-sm flex justify-center items-center gap-1 group
          transition-all duration-300
          shadow-lg
          "
          >
          <FaDiscord className="text-3xl text-black group-hover:text-indigo-500 transition-all duration-300" /> Go Discord
          </button>
      </div>
    </div>
  );
}
