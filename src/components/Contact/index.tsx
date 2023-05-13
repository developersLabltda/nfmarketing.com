function Contact() {
  return (
    <div
      className="m-2 h-48 mt-28 flex flex-col gap-6 scroll-mt-10 items-center"
      id="contato"
    >
      <h1 className="text-4xl">Contato</h1>
      <p className="text-base">
        Para obter mais informações, entre em contato pelo instagram
      </p>
      <div className="flex flex-row gap-2 items-center text-1xl font-semibold">
        <img src="/images/instagram.png" alt="icon" className="w-8 sm:w-12" />
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <h1>@nf.marketing.oficial</h1>
        </a>
      </div>
    </div>
  );
}

export default Contact;
