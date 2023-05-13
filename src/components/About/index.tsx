function About() {
  return (
    <div
      className="w-full h-full mt-20 scroll-mt-4 flex flex-col md:flex-row items-center  text-left"
      id="sobre"
    >
      <div className="flex flex-col gap-8 m-2 text-left">
        <p className="text-3xl ">
          Representada por Natanael Camargo, da NF Marketing, tem mais de 5 anos
          de experiência em marketing digital, design e edição de vídeo
          personalizado para empresas em Botucatu - SP.
        </p>
        <p className="text-2xl font-semibold">
          Trabalhos feitos para mais de 10 empresas diferentes atuantes em
          diversos ramos de atividades
        </p>
        <button className="px-4 py-3 w-44 sm:max-w-xs sm:px-12 sm:py-4 bg-[#404040] rounded-2xl hover:bg-[#595858] text-md font-bold">
          Cursos e formações
        </button>
      </div>
      <div className="flex sm:flex-col h-60 justify-stretch">
        <img
          src="/images/softwares.svg"
          alt="icones"
          className=" w-32 sm:w-24 self-start"
        />
        <button className="self-end">
          <img
            src="/images/1000canva.png"
            alt="icones"
            className="w-32 sm:w-48 "
          />
        </button>
      </div>
    </div>
  );
}

export default About;
