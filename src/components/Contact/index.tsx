import { useForm, SubmitHandler } from "react-hook-form";

interface FormData {
  name: string;
  service: string;
  description: string;
}

function Contact() {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const message = `Olá, meu nome é ${data.name}, estou interessado no serviço de ${data.service}. ${data.description}`;

    const whatsappLink = `https://wa.me/5514998067976?text=${encodeURIComponent(message)}`;

    window.open(whatsappLink);
  };

  return (
    <div
      className="h-screen min-w-full flex flex-col justify-center items-center bg-transparent"
      id="contato"
    >
      <h1 className="text-4xl font-bold mb-6">Contato</h1>

      <form
        className="flex flex-col gap-4 max-w-lg w-full px-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          {...register("name")}
          type="text"
          placeholder="Nome"
          className="px-4 py-2 rounded-md border border-gray-300 bg-transparent ring-transparent focus:ring-transparent focus:border-none"
        />
        <select
          {...register("service")}
          className="px-4 py-2 rounded-md border border-gray-300 bg-transparent"
        >
          <option value="marketing">Marketing</option>
          <option value="design">Design</option>
          <option value="parceria">Parceria</option>
        </select>
        <textarea
          {...register("description")}
          placeholder="Breve descrição"
          className="px-4 py-2 rounded-md border border-gray-300 bg-transparent ring-transparent focus:ring-transparent focus:border-none"
        />

        <button
          type="submit"
          className="max-w-xs mx-auto px-4 py-2 bg-[#404040] rounded-md hover:bg-[#595858] text-white font-bold"
        >
          Enviar mensagem
        </button>
      </form>

      <div className="flex flex-row gap-6 items-center text-1xl sm:text-2xl font-semibold mt-12">
        <a
          href="https://www.instagram.com/nf.marketing.oficial/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/instagram.png" alt="icon" className="w-8 sm:w-12" />
        </a>
        <a
          href="https://wa.me/5514998067976"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/whatsapp.png" alt="icon" className="w-8 sm:w-12" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
