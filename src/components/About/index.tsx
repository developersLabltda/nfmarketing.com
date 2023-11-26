import { Controller, Scene } from "react-scrollmagic";
import { motion } from "framer-motion";
import { Dialog, Transition } from "@headlessui/react";
import { useState, Fragment } from "react";
function About() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div
        className="w-full h-full mt-20 scroll-mt-4 flex flex-col md:flex-row items-center justify-between text-left"
        id="sobre"
      >
        <Controller>
          <div className="flex flex-col gap-8 m-2 text-left max-w-lg">
            <Scene duration={300} triggerHook={"#sobre"}>
              {(progress: number) => (
                <motion.p
                  className="text-3xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: progress > 0.3 ? 1 : 0 }}
                >
                  Representada por Natanael Camargo, A NF Marketing tem mais de
                  6 anos de experiência em marketing digital, design e edição de
                  vídeo personalizado para empresas em Botucatu - SP.
                </motion.p>
              )}
            </Scene>

            <Scene duration={400} triggerHook={"#sobre"}>
              {(progress: number) => (
                <motion.p
                  className="text-2xl font-semibold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: progress > 0.3 ? 1 : 0 }}
                >
                  Trabalhos feitos para mais de 20 empresas diferentes atuantes
                  em diversos ramos de atividades
                </motion.p>
              )}
            </Scene>

            <button
              onClick={() => setIsOpen(true)}
              className="px-4 py-3 w-44 sm:min-w-fit sm:max-w-xs sm:px-12 sm:py-4 bg-[#404040] rounded-2xl hover:bg-[#595858] text-md font-bold transform transition-transform duration-500 hover:scale-105"
            >
              Cursos e formações
            </button>
          </div>

          <div className="flex sm:flex-col mt-5 h-60 sm:h-full justify-stretch gap-4 md:gap-12">
            <Scene duration={500} triggerHook={"#sobre"}>
              {(progress: number) => (
                <motion.img
                  src="/images/softwares.svg"
                  alt="icones"
                  className="w-32 sm:w-48 self-start"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: progress > 0.3 ? 1 : 0 }}
                />
              )}
            </Scene>

            <Scene duration={400} triggerHook={"#sobre"}>
              {(progress: number) => (
                <motion.div
                  className="self-start flex flex-col gap-5   justify-between w-full "
                  initial={{ opacity: 0 }}
                  animate={{ opacity: progress > 0.3 ? 1 : 0 }}
                >
                  <motion.img
                    src="/images/capcut.png"
                    alt="icones"
                    className="w-10 sm:w-16 -rotate-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: progress > 0.3 ? 1 : 0 }}
                  />
                  <motion.img
                    src="/images/photoshop-lightroom.png"
                    alt="icones"
                    className="w-10 sm:w-16 rotate-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: progress > 0.3 ? 1 : 0 }}
                  />
                  <Scene duration={500} triggerHook={"#sobre"}>
                    {(progress: number) => (
                      <motion.button
                        className="self-end"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: progress > 0.3 ? 1 : 0 }}
                      >
                        <motion.img
                          src="/images/1000canva.png"
                          alt="icones"
                          className="w-52 sm:w-48 rotate-12"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: progress > 0.3 ? 1 : 0 }}
                        />
                      </motion.button>
                    )}
                  </Scene>
                </motion.div>
              )}
            </Scene>
          </div>
        </Controller>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Cursos e formações
                  </Dialog.Title>
                  <div className="mt-2">
                    <img
                      src="/images/cursos.jpeg"
                      alt="cursos"
                      className="object-contain"
                    />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default About;
