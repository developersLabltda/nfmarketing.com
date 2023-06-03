import Typed from "react-typed";
function Main() {
  return (
    <div className="w-full max-h-full flex flex-col items-center justify-between text-left">
      <div className="flex flex-col justify-center gap-6 md:flex-row w-full md:justify-between mt-14 sm:mt-24 md:mt-28">
        <h1 className="m-1 text-5xl sm:text-6xl font-normal max-w-lg">
          Design é a arte de{" "}
          <span className="font-semibold sm:font-bold">
            <Typed
              strings={["transformar", "inovar", "inspirar"]}
              typeSpeed={80}
              backSpeed={50}
              loop
            />
          </span>{" "}
          problemas em oportunidades visuais.
        </h1>
        <img
          src="/images/logo 3d c fundo.png"
          alt="logo"
          className="mx-auto w-72 sm:w-96 md:w-96 max-w-xl"
        />
      </div>
      <a href="#sobre">
        <button className=" px-6 py-2 sm:px-12 sm:py-4 bg-[#404040] rounded-2xl hover:bg-[#595858] text-md font-bold">
          Ver mais
        </button>
      </a>
    </div>
  );
}

export default Main;
