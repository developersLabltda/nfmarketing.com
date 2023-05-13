import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { Container, Navbar, Main, About, Contact } from "./components/index";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <main className="w-screen h-screen  text-center text-white">
      <Container>
        <Navbar>
          <div className="hidden md:flex flex-row gap-4 w-full justify-center">
            <a
              href="#inicio"
              className="text-white hover:text-gray-300 hover:underline"
            >
              Inicio
            </a>
            <a href="#sobre" className="text-white hover:text-gray-400">
              Sobre
            </a>
            <a href="#contato" className="text-white hover:text-gray-400">
              Contato
            </a>
          </div>
        </Navbar>
        <Main />
        <About />
        <Contact />
      </Container>
    

    </main>
  </React.StrictMode>
);
