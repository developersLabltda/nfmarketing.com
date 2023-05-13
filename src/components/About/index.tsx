function About() {
  return (
    <div>
      <div>
        <p>
          Representada por Natanael Camargo, da NF Marketing, tem mais de 5 anos
          de experiência em marketing digital, design e edição de vídeo
          personalizado para empresas em Botucatu - SP.
        </p>
        <p>
          Trabalhos feitos para mais de 10 empresas diferentes atuantes em
          diversos ramos de atividades
        </p>
        <button className=" px-6 py-2 sm:px-12 sm:py-4 bg-[#404040] rounded-2xl hover:bg-[#595858] text-md font-bold">
          Ver mais
        </button>
      </div>
      <div>
        <img src="/images/softwares.svg" alt="icones" className="w-48" />
        <button>
        <img src="/images/1000canvas.jpeg" alt="icones" className="w-48" />
        </button>
      </div>
    </div>
  );
}

export default About;
