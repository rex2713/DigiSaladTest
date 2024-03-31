import React from "react";

const ServiceCard = () => {
  const cardData = [
    { title: "UX DESIGN", src: "/img/icon1.svg" },
    { title: "UI DESIGN", src: "/img/icon2.svg" },
    { title: "WEBSITE DEVELOPMENT", src: "/img/icon3.svg" },
    { title: "MOBILE APP DEVELOPMENT", src: "/img/icon4.svg" },
    { title: "ECOMMERCE", src: "/img/icon5.svg" },
    { title: "CUSTOMER LOYALTY", src: "/img/icon6.svg" },
    { title: "DIGITAL TRANSFORMATION", src: "/img/icon7.svg" },
    { title: "DIGITAL MARKETING", src: "/img/icon8.svg" },
  ];
  return (
    <>
      <div className="grid grid-cols-1 pt-[85px] md:grid-cols-2 xl:grid-cols-3 xl:px-[140px]">
        {console.log(cardData)}
        {cardData &&
          cardData.map((card) => {
            return (
              <div className="mb-[60px] flex flex-col items-center justify-start">
                <figure className="flex h-[108px] w-[108px] items-center justify-center rounded-full bg-white">
                  <img className="" src={card.src} alt="" />
                </figure>
                <div className="flex h-[74px] w-full items-center justify-center">
                  <p className="w-[250px] text-center text-xl tracking-[2px] text-white">
                    {card.title}
                  </p>
                </div>
                <p className="mb-[20px] text-center text-base font-normal leading-[28px] tracking-[1px] text-white xl:w-[345px] ">
                  Cras quis nulla commodo, aliquam lectus sed, blandit augue.
                  Cras ullamcorper bibendum bibendum. Duis tincidunt urna non
                  pretium porta. Nam condimentum vitae ligula vel ornare.
                </p>
                <button className="h-[58px] w-[165px] rounded-[30px] border-2 border-white text-[14px] tracking-[2.222px] text-white transition-colors duration-300  hover:border-[#fbf166] hover:text-[#fbf166]">
                  VIEW MORE
                </button>
              </div>
            );
          })}
        <div className="mb-[60px] hidden flex-col items-center xl:flex">
          <figure className="flex h-[108px] w-[108px] items-center justify-center rounded-full bg-white">
            <img className="" src="/img/icon9.svg" alt="" />
          </figure>
          <div className="flex h-[74px] w-full items-center justify-center">
            <p className="w-[250px] text-center text-xl tracking-[2px] text-white">
              BRANDING
            </p>
          </div>
          <p className="mb-[20px] text-center text-base font-normal leading-[28px] tracking-[1px] text-white xl:w-[345px] ">
            Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras
            ullamcorper bibendum bibendum. Duis tincidunt urna non pretium
            porta. Nam condimentum vitae ligula vel ornare.
          </p>
          <button className="h-[58px] w-[165px] rounded-[30px] border-2 border-white text-[14px] tracking-[2.222px] text-white transition-colors duration-300  hover:border-[#fbf166] hover:text-[#fbf166]">
            BRANDING
          </button>
        </div>
      </div>
      <div className="mx-auto mb-[60px] flex flex-col items-center md:w-[380px] xl:hidden">
        <figure className="flex h-[108px] w-[108px] items-center justify-center rounded-full bg-white">
          <img className="" src="/img/icon9.svg" alt="" />
        </figure>
        <div className="flex h-[74px] w-full items-center justify-center">
          <p className="w-[250px] text-center text-xl tracking-[2px] text-white">
            BRANDING
          </p>
        </div>
        <p className="mb-[20px] text-center text-base font-normal leading-[28px] tracking-[1px] text-white xl:w-[345px] ">
          Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras
          ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta.
          Nam condimentum vitae ligula vel ornare.
        </p>
        <button className="h-[58px] w-[165px] rounded-[30px] border-2 border-white text-[14px] tracking-[2.222px] text-white">
          BRANDING
        </button>
      </div>
    </>
  );
};

export default ServiceCard;
