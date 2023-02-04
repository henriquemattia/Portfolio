import { useState } from "react";
import Head from "next/head";
import {
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io"
import { BsFillMoonStarsFill } from "react-icons/bs";

import deved from "../public/dev-ed-wave.png";
import Image from "next/image";

import node from "../public/tecnologias/node.png";
import react from "../public/tecnologias/react.png";
import docker from "../public/tecnologias/docker.png";
import devOps from "../public/tecnologias/devOps.png";
import typescript from "../public/tecnologias/typescript.png";
import tailwindcss from "../public/tecnologias/tailwindcss.png";
import mobile from "../public/tecnologias/mobile.png";
import aws from "../public/tecnologias/aws.png";
import prisma from "../public/tecnologias/prisma.png";
import express from "../public/tecnologias/express.png";
import postgresql from "../public/tecnologias/postgresql.png";

import web1 from "../public/portfolio/web1.png";
import web2 from "../public/portfolio/web2.png";
import web3 from "../public/portfolio/web3.png";
import web4 from "../public/portfolio/web4.png";
import web5 from "../public/portfolio/web5.png";
import web6 from "../public/portfolio/web6.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Henrique Mattia</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="font-Inter bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-sm sm:text-xl">JS DEVELOPER</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-lg md:text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-3 py-2 border-none rounded-md ml-3 sm:px-4 sm:ml-8"
                  href="#"
                >
                  Projects
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center sm:py-10">
            <h2 className=" font-extrabold text-4xl py-2 text-teal-600  dark:text-teal-400 md:text-6xl">
              Henrique Mattia
            </h2>
            <h3 className="font-bold text-zinc-900 text-2xl pt-5 opacity-90 dark:text-white md:text-4xl">
              Full stack Developer
            </h3>
            <p className="font-semibold  text-lg pt-9 pb-4 leading-8 text-zinc-800 opacity-80 dark:text-zinc-300 max-w-xl mx-auto  md:text-lg ">
              Desenvolvedor que presta serviços para necessidades de conteúdo de programação. Junte-se a mim abaixo e vamos lá!
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://github.com/henriquemattia"
                target='_blank'
                className="transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              > <AiFillGithub /> </a>

              <a href="https://www.linkedin.com/in/henriquemattia/"
                target='_blank'
                className="transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              > <AiFillLinkedin /> </a>

              <a href="https://wa.me/5549998339450"
                target='_blank'
                className="transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              ><IoLogoWhatsapp /> </a>

            </div>
            <div className="flex justify-center items-center">
              <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden bg-gray-800 mt-20 md:h-96 md:w-96 ">
                <Image src={deved} layout="fill" objectFit="cover" className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105" />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="font-bold text-black mt-10 text-3xl py-1 opacity-80 dark:text-white ">Quem sou eu?</h3>
            <p className="font-semibold text-md py-2 leading-8 text-zinc-800 opacity-80 dark:text-zinc-300">
              Sou um jovem desenvolvedor, e entusiasta da <span className="text-teal-500"> tecnologia</span>, venho apriomorando minhas abilidades em desenvolvimento web por volta de um
              <span className="text-teal-500"> ano </span>

            </p>
            <p className="font-semibold text-md py-2 leading-8 text-zinc-800 opacity-80 dark:text-zinc-300">
              Abaixa estão algumas das pricipais tecnologias com que sei trabalhar
            </p>
          </div>
          <div className="xl:flex gap-10">
            <div className="text-center shadow-xl p-10 rounded-xl my-10 
            transition duration-150 ease-in transform hover:-translate-y-1 hover:scale-105
          dark:bg-zinc-100  opacity-90 flex-1"
            >
              <Image src={react} width={100} height={100} />
              <h3 className="text-2xl font-bold pt-8 pb-2  ">
                Front-end
              </h3>
              <p className="py-2 font-semibold opacity-80 text-lg">
                No front-end a linguagem que utilo é o <span className="text-teal-600">JavaScript</span> com a biblioteca React.Js entre outras features.
              </p>

              <h4 className="py-4 text-teal-600 text-xl font-bold">Principais</h4>
              <div className="flex  flex-row justify-center  ">

                {/* IMAGES */}
                <div className="flex flex-col justify-center items-center min-w-max gap-3">
                  <Image src={react} width={50} height={50} />

                  <Image src={typescript} width={50} height={50} />

                  <Image src={tailwindcss} width={50} height={50} />
                </div>

                {/* NAMES */}
                <div className="font-semibold flex items-start flex-col gap-9 ml-4 py-4">
                  <p>REACT</p>
                  <p>TypeScript</p>
                  <p>Tailwindcss</p>

                </div>

              </div>
            </div>

            <div className="text-center shadow-xl p-10 rounded-xl my-10 
              transition duration-150 ease-in transform hover:-translate-y-1 hover:scale-105
            dark:bg-zinc-100  opacity-90 flex-1"
            >
              <Image src={node} width={135} height={100} />
              <h3 className="text-2xl font-bold pt-8 pb-2  ">
                Back-end
              </h3>
              <p className="py-2 font-semibold opacity-80 text-lg">
                No back-end as coisas continuam no mesmo ambiente com o <span className="text-teal-600">Node.Js</span>, e bancos de dados como NoSQL e principalmente SQL.
              </p>

              <h4 className="py-4 text-teal-600 text-xl font-bold">Principais</h4>
              <div className="flex  flex-row justify-center">

                {/* IMAGES */}
                <div className="flex flex-col justify-center items-center min-w-max gap-3">
                  <Image src={express} width={50} height={50} />

                  <Image src={prisma} width={45} height={50} />

                  <Image src={postgresql} width={50} height={50} />
                </div>

                {/* NAMES */}
                <div className="font-semibold flex items-start flex-col gap-9 ml-4 py-4">
                  <p>Express</p>
                  <p>Pisma</p>
                  <p>PostgreSQl</p>

                </div>

              </div>
            </div>

            <div className="text-center shadow-xl p-10 rounded-xl my-10 
              transition duration-150 ease-in transform hover:-translate-y-1 hover:scale-105
            dark:bg-zinc-100  opacity-90 flex-1"
            >
              <Image src={devOps} width={235} height={110} />
              <h3 className="text-2xl font-bold pt-8 pb-2  ">
                Outros
              </h3>
              <p className="py-2 font-semibold opacity-80 text-lg">
                Apesar de nao ser minha especialização a area de <span className="text-teal-600">DevOps</span> e abaixo tem algumas tecnologias que utilizo.
              </p>

              <h4 className="py-4 text-teal-600 text-xl font-bold">Plataformas</h4>
              <div className="flex  flex-row justify-center">

                {/* IMAGES */}
                <div className="flex flex-col justify-center items-center min-w-max gap-3">
                  <Image src={docker} width={50} height={50} />

                  <Image src={aws} width={50} height={50} />

                  <Image src={mobile} width={50} height={50} />
                </div>

                {/* NAMES */}
                <div className="font-semibold flex items-start flex-col gap-9 ml-4 py-4">
                  <p>Docker</p>
                  <p>AWS</p>
                  <p>React-Native</p>

                </div>

              </div>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className=" font-bold text-3xl py-1 text-zinc-900 opacity-90 dark:text-white ">
              Portfólio
            </h3>
            <p className="font-semibold text-md py-2 leading-8 text-zinc-800 opacity-80 dark:text-zinc-300">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="font-semibold text-md py-2 leading-8 text-zinc-900 opacity-80 dark:text-zinc-300">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
