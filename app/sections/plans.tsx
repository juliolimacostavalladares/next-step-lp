"use client";

import React, { useState } from "react";
import PlanCard from "../components/plan-card";
import Switcher from "../components/toggle-switch";

const Plans: React.FC = () => {
  const [yearly, setYearly] = useState<boolean>(true);
  return (
    <section className="degrade-plans flex flex-col h-full justify-around items-center py-28">
      <article className="h-60 flex flex-col justify-between">
        <h1 className="text-center text-5xl leading-normal font-bold">
          Escolha o plano <br /> que é certo para você!
        </h1>
        <p className="text-center plans-call-toa-action-text text-lg font-bold text-[#A6A6A6]">
          Escolha o plano que melhor se adapta a você, não hesite em nos
          contatar
        </p>
      </article>
      <div className="flex mt-28 gap-6">
        <Switcher checked={yearly} setIsChecked={setYearly} />
      </div>
      <div className="flex plan-cover my-20 gap-4">
        {yearly ? (
          <>
            <PlanCard
              yearly={yearly}
              priceOfPlan={10.99}
              discountOfPlan={32}
              nameOfPlan="Basic"
              plansBenefit={[
                "Até 5 vagas por semana.",
                "LinkedIn para análise de perfil.",
                "Notificações via WhatsApp.",
              ]}
            />
            <PlanCard
              yearly={yearly}
              priceOfPlan={18.99}
              discountOfPlan={45}
              nameOfPlan="Premium"
              type="variant"
              plansBenefit={[
                "Até 5 vagas por semana.",
                "LinkedIn para análise de perfil.",
                "Notificações via WhatsApp.",
              ]}
            />
            <PlanCard
              yearly={yearly}
              priceOfPlan={35.99}
              discountOfPlan={53}
              nameOfPlan="Ultimate"
              plansBenefit={[
                "Oportunidades exclusivas.",
                "Suporte via WhatsApp.",
                "Insights para sua carreira.",
              ]}
            />
          </>
        ) : (
          <>
            <PlanCard
              yearly={yearly}
              priceOfPlan={14.49}
              discountOfPlan={15}
              nameOfPlan="Basic"
              plansBenefit={[
                "Até 5 vagas por semana.",
                "LinkedIn para análise de perfil.",
                "Notificações via WhatsApp.",
              ]}
            />
            <PlanCard
              yearly={yearly}
              priceOfPlan={19.49}
              discountOfPlan={32}
              nameOfPlan="Premium"
              type="variant"
              plansBenefit={[
                "Até 5 vagas por semana.",
                "LinkedIn para análise de perfil.",
                "Notificações via WhatsApp.",
              ]}
            />
            <PlanCard
              yearly={yearly}
              priceOfPlan={47.49}
              discountOfPlan={51}
              nameOfPlan="Ultimate"
              plansBenefit={[
                "Oportunidades exclusivas.",
                "Suporte via WhatsApp.",
                "Insights para sua carreira.",
              ]}
            />
          </>
        )}
      </div>
    </section>
  );
};

export default Plans;
