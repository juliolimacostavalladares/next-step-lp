import Image from "next/image";

export default function CompanyCarousel() {
  const logos = [
    { src: "/aws.svg", width: 150, height: 150, alt: "Aws" },
    { src: "/google.svg", width: 250, height: 250, alt: "Google" },
    { src: "/ifood.svg", width: 180, height: 180, alt: "Ifood" },
    { src: "/netflix.svg", width: 250, height: 250, alt: "NetFlix" },
    {
      src: "/mercado-livre.svg",
      width: 150,
      height: 150,
      alt: "Mercado Livre",
    },
    { src: "/apple.svg", width: 125, height: 125, alt: "Apple" },
    { src: "/facebook.svg", width: 125, height: 125, alt: "Facebook" },
    { src: "/twitter.svg", width: 125, height: 125, alt: "twitter" },
    {
      src: "/whatsapp-company-logo.svg",
      width: 125,
      height: 125,
      alt: "Whatsapp",
    },
  ];

  return (
    <div className="inline-flex mt-28 w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8">
        {logos.map((company, index) => (
          <li key={index} className="job-companies-logo px-24">
            <Image
              src={company.src}
              width={company.width}
              height={company.height}
              alt={company.alt}
            />
          </li>
        ))}
      </ul>
      <ul
        className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8"
        aria-hidden="true"
      >
        {logos.map((company, index) => (
          <li key={index} className="job-companies-logo px-24">
            <Image
              src={company.src}
              width={company.width}
              height={company.height}
              alt={company.alt}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
