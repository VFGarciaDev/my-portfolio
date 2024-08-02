import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import GamingOrCoding from "@/assets/images/gaming-coding.png"
import MaleSilhouette from "@/assets/images/male-silhouette.png"

export const metadata: Metadata = {
  title: "About Me"
}

export default function Home() {
  return (
    <article className="">
      <p>Me chamo <span className="text-lg font-semibold italic">Victor Feitosa Garcia</span>, tenho 24 anos e sou de São Paulo, Brasil.</p>

      <div className="grid grid-rows-about grid-cols-2 gap-x-5 gap-y-10 my-5">
        <section className="flex flex-col justify-evenly text-lg bg-neutral-700/20 px-4 rounded-3xl">
          <p>Sou um <span className="text-xl font-semibold italic">Software Engineer</span>, com formação em Jogos Digitais pela Universidade Estácio e com {" "}
            <Link className="italic font-semibold hover:underline" href="/certificates">cursos/certificados</Link> focados em Desenvolvimento Web Full Stack</p>

          <p>Comecei meus estudos com o Front-End, mas logo quis aprender mais sobre Back-End e me tornar Full Stack. Sempre gostei de aprender coisas novas, juntei esse gosto com o hábito de estar constantemente estudando, buscando tópicos novos para aprender ou aprimorando aqueles já conhecidos</p>
        </section>
        <section className="">
          <Image
            className="w-full max-h-80"
            src={MaleSilhouette} alt="Male silhouette studying"
            width={360} height={360} />
        </section>
        {/* <p>Meu diferencial como programador é a constante vontade de aprender, resiliência frente a erros e capacidade de pedir ajuda. No ambiente de trabalho, valorizo respeito, boa comunicação, sinceridade e a vontade de ajudar. Busco alcançar sucesso profissional e independência financeira.</p> */}

      </div>

      <section className="bg-blue-400/40 grid grid-cols-[3fr_4fr] items-center gap-10">
        <Image
          className="w-full"
          src={GamingOrCoding} alt="Choose: Gaming or Coding"
          width={360} height={240} />

        <div>
          <p>
            Além da programação, gosto de jogar videogame, ver filmes e praticar atividade física. Treino Jiu-Jitsu, esporte que escolhi pelo desafio, autodefesa e vontade de competir.
          </p>
          <blockquote className="my-4 p-2 rounded-md text-nowrap flex flex-col italic bg-neutral-400/15">
            <p>"mente sã em corpo são"</p>
            <p className="ml-5 leading-none">- "Mens sana in corpore sano"</p>
            <p className="self-end">Juvenal</p>
          </blockquote>
        </div>
      </section>
    </article>
  );
}