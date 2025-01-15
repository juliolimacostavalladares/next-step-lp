import Image from "next/image";
import React from "react";

const PlanCard = ({
  type = "base",
  yearly = true,
  nameOfPlan,
  priceOfPlan,
  discountOfPlan,
  plansBenefit,
}: {
  type?: "base" | "variant";
  yearly: boolean;
  nameOfPlan: string;
  priceOfPlan: number;
  discountOfPlan: number;
  plansBenefit: Array<string>;
}) => {
  function calculateSavingsAndAnnualPlan(
    monthlyPrice: number,
    discountPercentage: number
  ) {
    const totalWithoutDiscount = monthlyPrice * 12;

    const discountedAnnualPrice =
      totalWithoutDiscount * (1 - discountPercentage / 100);

    const discountedMonthlyPrice = discountedAnnualPrice / 12;

    const yearlySavings = totalWithoutDiscount - discountedAnnualPrice;

    const monthlySavings = monthlyPrice - discountedMonthlyPrice;

    return {
      totalWithoutDiscount: totalWithoutDiscount.toFixed(2),
      discountedAnnualPrice: discountedAnnualPrice.toFixed(2),
      discountedMonthlyPrice: discountedMonthlyPrice.toFixed(2),
      yearlySavings: yearlySavings.toFixed(2),
      monthlySavings: monthlySavings.toFixed(2),
    };
  }
  return (
    <div
      className={`plan-main-section cursor-pointer even:h-[684px] odd:mt-[20px] p-8 w-[374px] h-[644px] flex flex-col justify-center items-center ${
        type === "base" ? "bg-[#fefbfb]" : "bg-[#F96C3B]"
      } rounded-3xl`}
    >
      <header className="mb-24">
        <article
          className={`flex flex-col justify-center gap-4 text-center ${
            type === "base" ? "text-[#191A15]" : "text-white"
          } font-normal`}
        >
          <h1 className="text-3xl font-semibold">{nameOfPlan}</h1>
          <span className="text-5xl font-semibold">
            R${" "}
            {
              calculateSavingsAndAnnualPlan(priceOfPlan, discountOfPlan)
                .discountedMonthlyPrice
            }
          </span>
          {!yearly && (
            <span className="text-4xl font-semibold line-through">
              R$ {priceOfPlan}
            </span>
          )}
          {yearly && (
            <span className="text-base font-semibold line-through">
              De R${" "}
              {
                calculateSavingsAndAnnualPlan(priceOfPlan, discountOfPlan)
                  .totalWithoutDiscount
              }
            </span>
          )}
          {yearly && (
            <span className="text-lg font-semibold">
              Por R${" "}
              {
                calculateSavingsAndAnnualPlan(priceOfPlan, discountOfPlan)
                  .discountedAnnualPrice
              }
            </span>
          )}
        </article>
      </header>
      <footer className="flex justify-center items-center bg-white w-full h-full rounded-xl">
        <div className="flex flex-col gap-4 text-left font-normal">
          {plansBenefit.map((benefit) => (
            <>
              <span className="flex gap-2">
                <Image
                  alt="Check Icon Of Card Plan"
                  src="/check-plan-icon.svg"
                  width={20}
                  height={20}
                />
                {benefit}
              </span>
            </>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default PlanCard;
