import Image from "next/image";
import logo from "../../assets/img/logo.png";


const Header = () => {
  return (
    <> 
      <header className="flex container font-oxaminium font-semibold items-center justify-between pr-5 bg-black w-screen absolute top-0 h-20">
        <div onClick={() => window.location.replace("/")} className="flex cursor-pointer justify-center items-center w-26 rounded-r-3xl h-full bg-blue-700">
          <Image
            className="p-2"
            width={115}
            height={60}
            src={logo}
            alt="logotipo"
          />
        </div>
        <div className="bg-blue-700 w-32 h-10 rounded-[10px] flex justify-center">
          <button onClick={() => window.location.replace("/login")} type="button" className="text-white rounded-[10px] border-2 border-blue-700 w-full h-full hover:bg-purple-900">
            <span className="">Fazer Login</span>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
