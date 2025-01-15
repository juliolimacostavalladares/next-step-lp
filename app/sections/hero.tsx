import Image from "next/image";
import React from "react";
import Header from "../components/header";
import CompanyCarousel from "../components/companies-carousel";

const Hero: React.FC = () => {
  return (
    <div className="degrade-hero">
      <Header />
      <section className="flex max-banner-hero  justify-center laptop:justify-between items-center mx-[200px]">
        <article className="hero-main-text banner-iphone-text gap-6 laptop:gap-20 max-banner-hero-title w-[555px] flex flex-col justify-center">
          <h1 className="text-5xl banner-hero-1300px:text-7xl font-extrabold text-center">
            Receba vagas no <span className="text-[#58EC6E]">WhatsApp</span>
          </h1>
          <Image
            alt="Hero Image"
            src="/hero-text-divider.svg"
            width={600}
            height={400}
          />
          <h2 className="text-lg banner-hero-1120px:text-xl font-normal">
            Otimize sua busca por oportunidades com vagas personalizadas
            enviadas diretamente para o seu WhatsApp, com base no seu perfil e
            momento de carreira.
          </h2>
        </article>
        <figure className="max-banner-hero-image banner-iphone w-[800px] banner-hero-1020px:w-[100%]">
          <img alt="Hero Image" src="/iphone-hero.png" />
        </figure>
      </section>
      <div className="py-40 flex flex-col justify-center items-center">
        <h1 className="job-companies-title text-5xl font-extrabold">
          Vagas no{" "}
          <span className="text-[#58EC6E] font-extrabold">WhatsApp</span> para
          empresas como
        </h1>
        <CompanyCarousel />
      </div>
    </div>
  );
};

export default Hero;
