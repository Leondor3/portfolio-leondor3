"use client";

import react, { useState, useEffect, useContext } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FilePdf, LinkedinLogo } from "@phosphor-icons/react";
import IllustrationPerfil from "../assets/illustration-perfil.jpeg";

import Image from "next/image";
import { ThemeContext } from "@/context/theme-context";
import { Button } from "@/common/Button";
import SectionTitle from "@/common/TitleSide";

export function About() {
  const { theme, setTheme } = useContext(ThemeContext);
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2, // set threshold to 50%
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  // useEffect(() => {
  //   const sectionElement = document.querySelector(`.sectionLong`) as Element;
  //   const textElements = document.querySelectorAll(`.paragraphLong`);
  //   const handleScroll = () => {
  //     const rect = sectionElement.getBoundingClientRect();
  //     if (rect.top < 600) {
  //       textElements.forEach((el: any) => {
  //         const letters = el.textContent?.split("");
  //         if (letters) {
  //           const updatedText = letters
  //             .map((letter: string, index: number) => {
  //               const color = rect.top + index * 10 < 1 ? "#000000" : "#ADADAD";
  //               return `<span class="spanLetter" style="color: ${color};">${letter}</span>`;
  //             })
  //             .join("");
  //           el.innerHTML = updatedText;
  //         }
  //       });
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   handleScroll();

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div
      className="w-full relative max-sm:px-6 max-lg:flex-col gap-16 py-16 md:py-20 lg:py-28"
      id="about"
    >
      <div className="container">
        <div className="flex items-center justify-between">
          <motion.div
            ref={ref}
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -100 },
            }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col items-start max-w-[600px] h-full justify-start space-y-4"
          >
            <SectionTitle
              title="Desenvolvedor Front-end com experiências"
              section="Sobre mim"
            />
            <p
              className={`${
                theme == false ? "text-slate-400" : "text-zinc-800"
              } paragraphLong`}
            >
              Meu nome é Leandro de Araujo dos Santos, tenho 24 anos e sou
              desenvolvedor front-end com mais de um ano de experiência, sou
              apaixonado por criar interfaces de usuário atraentes e intuitivas.
              Tenho habilidades sólidas em HTML, CSS e JavaScript, além de
              experiência com frameworks como React. Ao longo da minha carreira,
              trabalhei em projetos desde sua concepção até a implantação,
              adquirindo experiência em JavaScript/TypeScript, React.js/Next.js,
              testes (Jest, Testing Library, Cypress), acessibilidade, CI/CD,
              controle de versão com Git/GitHub/GitLab e ferramentas de design
              como Figma, Photoshop e Adobe XD. Tenho conhecimento em
              gerenciamento de estado global usando Redux e Context API, e
              também estou familiarizado com bibliotecas de componentes UI, como
              Tailwind CSS, Styled Components, Sass, Less e CSS em geral. Sou
              dedicado, criativo e estou sempre em busca de aprimorar minhas
              habilidades para fornecer as melhores soluções front-end. Estou
              entusiasmado em contribuir com projetos desafiadores e colaborar
              com equipes talentosas. Se você está procurando um desenvolvedor
              front-end apaixonado por criar interfaces excepcionais, estou
              disponível para oportunidades emocionantes.
            </p>
            <div className="w-full flex gap-2">
              <Button isHighlight>
                <FilePdf size={24} weight="fill" color="#fff" />
                <span className="text-white leading-relaxed">Curriculo</span>
              </Button>
              <Button>
                <LinkedinLogo size={24} />
                <span
                  className={`${
                    theme == false ? "text-light" : "text-blue-500"
                  }`}
                >
                  Linkedin
                </span>
              </Button>
            </div>
          </motion.div>
          <motion.div
            ref={ref}
            animate={controls}
            variants={{
              visible: { opacity: 1, x: -100 },
              hidden: { opacity: 0, x: 100 },
            }}
            transition={{ duration: 1, delay: 0.5 }}
            className="block max-lg:w-full max-lg:!translate-x-[100] w-[450px] mix-blend-luminosity"
          >
            <Image
              className="w-full object-cover h-full"
              src={IllustrationPerfil}
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
