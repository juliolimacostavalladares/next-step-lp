import Image from "next/image";
import React from "react";

const How: React.FC = () => {
  return (
    <section className="w-full bg-[##EFDCD7] flex flex-col justify-around items-center py-28">
      <div className="how-section-container how-section-to-col flex justify-between gap-32 mx-14">
        <figure className="flex flex-col justify-center">
          <img
            width={900}
            height={900}
            alt="Banner WhatsApp"
            src="/banner-.jpg"
            className="rounded-xl"
          />
        </figure>
        <article className="how-section-to-col flex flex-col justify-around gap-10 w-[590px]">
          <div className="flex items-center gap-3">
            <Image
              alt="Hero Image"
              src="/linkedin.svg"
              width={60}
              height={60}
            />
            <h1 className="text-2xl font-bold text-[#2DB2EF]">LinkedIn</h1>
          </div>
          <p className="text-lg text-[#A6A6A6]">
            Primeiro, você conecta o seu perfil do LinkedIn ao sistema. Isso
            permite que o sistema acesse informações importantes do seu perfil,
            como experiência profissional, habilidades e preferências de
            trabalho.
          </p>
          <div className="flex items-center gap-3">
            <Image
              alt="Hero Image"
              src="/analytic.svg"
              width={60}
              height={60}
            />
            <h1 className="text-2xl font-bold text-[#FF8A65]">Análise</h1>
          </div>
          <p className="text-lg text-[#A6A6A6]">
            Após a conexão, o sistema analisa detalhadamente o seu perfil do
            LinkedIn. Ele examina suas qualificações, experiência e competências
            para identificar quais vagas estão mais alinhadas com o seu perfil.
          </p>
          <div className="flex items-center gap-3">
            <Image
              alt="Hero Image"
              src="/whatsapp.svg"
              width={60}
              height={60}
            />
            <h1 className="text-2xl font-bold text-[#58EC6E]">WhatsApp</h1>
          </div>
          <p className="text-lg text-[#A6A6A6]">
            Quando o sistema encontra vagas compatíveis com o seu perfil, ele
            automaticamente envia as oportunidades diretamente para você via
            WhatsApp. Isso facilita o acesso e a comunicação sobre as vagas,
            tornando o processo muito mais ágil.
          </p>
        </article>
      </div>
    </section>
  );
};

export default How;
