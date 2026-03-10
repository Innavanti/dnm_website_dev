import Image from "next/image";

export const Navbar = () => {
  return (
    <header className="z-10 absolute flex flex-row justify-between px-6 lg:px-10 py-7 lg:py-2 2xl:py-4 w-full text-white 2xl:text-md text-lg">
      {/* {left-side menu here} */}
      {/* Icon  */}
      <div className="hidden lg:flex flex-row lg:gap-10 text-white">
        <Image
          src="/branding/isotipo.svg"
          alt="isotipo.svg"
          height={40}
          width={40}
          className=""
        />

        <span className="my-auto w-fit h-min align-middle">Nosotros</span>
        <span className="my-auto w-fit h-min align-middle">Rutas</span>
        <span className="my-auto w-fit h-min align-middle">Casos</span>
        <span className="my-auto w-fit h-min align-middle">Contacto</span>
        <span className="my-auto w-fit h-min align-middle">Método</span>
      </div>

      {/* {burger button here} */}
      <svg
        className="lg:hidden p-1 border border-primary2-500 rounded-sm h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        height={40}
        width={40}
      >
        <path
          d=" M 20,30 h 60 m-60,20 h60 m-60,20 h60"
          stroke="white"
          strokeWidth={10}
        />
      </svg>

      {/* {right-side menu here} */}
      <div className="hidden lg:flex flex-row gap-5">
        <Button>
          <Image
            src="/navbar/mx.svg"
            alt="platiquemos"
            width={50}
            height={50}
            className="my-auto w-auto h-7"
          />
          <span className="my-auto w-fit h-full font-bold align-middle">
            ES
          </span>
        </Button>
        <Button>
          <span className="my-auto w-fit h-full align-middle">PLATIQUEMOS</span>
          <Image
            src="/navbar/whatsapp.svg"
            alt="platiquemos"
            width={50}
            height={50}
            className="my-auto w-auto h-7"
          />
        </Button>
      </div>
    </header>
  );
};

const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="flex flex-row gap-5 bg-primary1-500 my-auto px-5 2xl:px-7 py-1 lg:border border-primary2-100 2xl:border-2 rounded-full w-fit h-full">
      {children}
    </p>
  );
};
