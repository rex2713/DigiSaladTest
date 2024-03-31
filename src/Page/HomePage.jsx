import React from "react";
import SideMenu from "../Component/SideMenu";
import { useState, useRef, useEffect } from "react";
import ServiceCard from "../Component/ServiceCard";

const HomePage = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [isPlay, setIsPlay] = useState(false);
  const [navBgOn, setNavBgOn] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    if (!isPlay) {
      setIsPlay(true);
      videoRef.current.play();
    } else {
      setIsPlay(false);
      videoRef.current.pause();
    }
  };
  const handleScroll = () => {
    // console.log(window.scrollY);
    if (window.scrollY > 940) {
      setNavBgOn(true);
    } else {
      setNavBgOn(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{ fontFamily: "Proxima Nova", fontWeight: "700" }}
      className="bg-[#F2F2F2]"
    >
      {/*  首頁標題區 */}
      <div className="relative h-[940px] text-white">
        {/* navOpen */}

        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(88,88,128,0.9) 3.61%, rgba(38, 198, 208, 0.9) 95.7%)",
            transition: "width 1000ms",
          }}
          className={`fixed right-0 z-20 h-screen overflow-hidden transition-all duration-1000 ${navOpen ? "w-screen" : "w-0"} `}
        >
          <img
            width={140}
            className="absolute left-[60px] top-[41px]"
            src="/img/Group 18.svg"
            alt=""
          />
          <div className="flex flex-col justify-evenly lg:flex-row">
            {/* RWD:<xl */}
            <div className="flex flex-col gap-4 px-10 pt-[140px] md:gap-8 md:px-20 lg:hidden">
              <div className="flex h-[70px] w-full items-center justify-start gap-14 rounded-[24px] bg-[#33C8D2] pl-[37px] hover:cursor-pointer hover:bg-[#55e5ed] md:h-[110px]">
                <figure className="w-10 md:w-24">
                  <img
                    className={`${navOpen ? "opacity-100" : "opacity-0"} w-[80%] transition-all delay-[0.3s] duration-[1s] md:w-auto`}
                    src="/img/navIcon1.svg"
                    alt=""
                  />
                </figure>
                <div
                  className={`${navOpen ? "opacity-100" : "opacity-0"} text-nowrap transition-all delay-[0.3s] duration-[1s]`}
                >
                  <p className="hidden text-base font-normal tracking-[1.8px] md:block">
                    EMPOWERING BRANDS
                  </p>
                  <div className="pt-[9px]">
                    <span className="text-[20px] tracking-[3.636px] md:text-[32px]">
                      ABOUT US
                    </span>
                    <div className="ml-[11px] inline-block h-[10px] w-[10px] flex-shrink-0 rounded-full bg-[#EE6C8A]"></div>
                  </div>
                </div>
              </div>
              <div className="flex h-[70px] w-full items-center justify-start gap-14 rounded-[24px] bg-[#D37C95] pl-[37px] hover:cursor-pointer hover:bg-[#ea98af] md:h-[110px]">
                <figure className="w-10 md:w-24">
                  <img
                    className={`${navOpen ? "opacity-100" : "opacity-0"} w-[80%] transition-all delay-[0.5s] duration-[1s] md:w-auto`}
                    src="/img/navIcon2.svg"
                    alt=""
                  />
                </figure>
                <div
                  className={`${navOpen ? "opacity-100" : "opacity-0"} text-nowrap transition-all delay-[0.5s] duration-[1s]`}
                >
                  <p className="hidden text-base font-normal tracking-[1.8px] md:block">
                    CASE STUDIES
                  </p>
                  <div className="pt-[9px]">
                    <span className="text-[20px] tracking-[3.636px] md:text-[32px]">
                      WORKS
                    </span>
                    <div className="ml-[11px] inline-block h-[10px] w-[10px] flex-shrink-0 rounded-full bg-[#26C6D0]"></div>
                  </div>
                </div>
              </div>
              <div className="flex h-[70px] w-full items-center justify-start gap-14 rounded-[24px] bg-[#E9AE59] pl-[37px] hover:cursor-pointer hover:bg-[#f7c37b] md:h-[110px]">
                <figure className="w-10 md:w-24">
                  <img
                    className={`${navOpen ? "opacity-100" : "opacity-0"} w-[80%] transition-all delay-[0.7s] duration-[1s] md:w-auto`}
                    src="/img/navIcon3.svg"
                    alt=""
                  />
                </figure>
                <div
                  className={`${navOpen ? "opacity-100" : "opacity-0"} text-nowrap transition-all delay-[0.7s] duration-[1s]`}
                >
                  <p className="hidden text-base font-normal  tracking-[1.8px] md:block">
                    BE COOL WITH US
                  </p>
                  <div className="pt-[9px]">
                    <span className="text-[20px] tracking-[3.636px] md:text-[32px]">
                      CAREERS
                    </span>
                    <div className="ml-[11px] inline-block h-[10px] w-[10px] flex-shrink-0 rounded-full bg-[#EE6C8A]"></div>
                  </div>
                </div>
              </div>
              <div className="flex h-[70px] w-full items-center justify-start gap-14 rounded-[24px] bg-[#25D2A7] pl-[37px] hover:cursor-pointer hover:bg-[#43e8be] md:h-[110px]">
                <figure className="w-10 md:w-24">
                  <img
                    className={`${navOpen ? "opacity-100" : "opacity-0"} w-[40%] transition-all delay-[0.9s] duration-[1s] md:w-auto`}
                    src="/img/navIcon4.svg"
                    alt=""
                  />
                </figure>
                <div
                  className={`${navOpen ? "opacity-100" : "opacity-0"} text-nowrap transition-all delay-[0.9s] duration-[1s]`}
                >
                  <p className="hidden text-base font-normal  tracking-[1.8px] md:block">
                    OUR STRATEGIES
                  </p>
                  <div className="pt-[9px]">
                    <span className="text-[20px] tracking-[3.636px] md:text-[32px]">
                      INSIGHTS
                    </span>
                    <div className="ml-[11px] inline-block h-[10px] w-[10px] flex-shrink-0 rounded-full bg-[#EE6C8A]"></div>
                  </div>
                </div>
              </div>
              <div className="flex h-[70px] w-full items-center justify-start gap-14 rounded-[24px] bg-[#585880] pl-[37px] hover:cursor-pointer hover:bg-[#707096] md:h-[110px]">
                <figure className="w-10 md:w-24">
                  <img
                    className={`${navOpen ? "opacity-100" : "opacity-0"} w-[60%] transition-all delay-[1.1s] duration-[1s] md:w-auto`}
                    src="/img/navIcon5.svg"
                    alt=""
                  />
                </figure>
                <div
                  className={`${navOpen ? "opacity-100" : "opacity-0"} text-nowrap transition-all delay-[1.1s] duration-[1s]`}
                >
                  <p className="hidden text-base font-normal  tracking-[1.8px] md:block">
                    AREAS OF EXPERTISE
                  </p>
                  <div className="pt-[9px]">
                    <span className="text-[20px] tracking-[3.636px] md:text-[32px]">
                      SERVICES
                    </span>
                    <div className="ml-[11px] inline-block h-[10px] w-[10px] flex-shrink-0 rounded-full bg-[#EE6C8A]"></div>
                  </div>
                </div>
              </div>
              <div className="flex h-[70px] w-full flex-col items-center justify-center rounded-[24px] bg-white pl-[37px] pr-12 hover:cursor-pointer hover:bg-gray-100 md:h-[110px]">
                <p
                  className={`hidden text-nowrap text-base font-normal  tracking-[1.8px] text-[#262626] md:block ${navOpen ? "opacity-100" : "opacity-0"} transition-all delay-[1.5s] duration-[1s]`}
                >
                  START YOUR JOURNEY WITH US
                </p>
                <div
                  className={`text-nowrap pt-[9px] ${navOpen ? "opacity-100" : "opacity-0"} transition-all delay-[1.5s] duration-[1s]`}
                >
                  <span className="text-[20px] tracking-[3.636px] text-[#26C6D0] md:text-[32px]">
                    CONTACT
                  </span>
                  <div className="ml-[11px] inline-block h-[10px] w-[10px] flex-shrink-0 rounded-full bg-[#EE6C8A]"></div>
                </div>
              </div>
            </div>
            {/* navLeft */}
            <div className="flex flex-col pt-[140px]">
              <div className="flex h-[210px] w-[380px] items-center justify-start gap-[27.24px] rounded-[24px] bg-[url('/img/navImg1.svg')] pl-[37px] hover:cursor-pointer">
                <img
                  className={`${navOpen ? "opacity-100" : "opacity-0"} transition-all delay-[0.7s] duration-[1s]`}
                  src="/img/navIcon1.svg"
                  alt=""
                />
                <div
                  className={`${navOpen ? "opacity-100" : "opacity-0"} text-nowrap transition-all delay-[0.7s] duration-[1s]`}
                >
                  <p className="text-base font-normal tracking-[1.8px]">
                    EMPOWERING BRANDS
                  </p>
                  <div className="pt-[9px]">
                    <span className="text-[32px] tracking-[3.636px]">
                      ABOUT US
                    </span>
                    <div className="ml-[11px] inline-block h-[10px] w-[10px] flex-shrink-0 rounded-full bg-[#EE6C8A]"></div>
                  </div>
                </div>
              </div>
              <div className="mt-[32px] flex h-[320px] w-[380px] items-end justify-start gap-[27.24px] rounded-[24px] bg-[url('/img/navImg2.svg')] pb-[59px] pl-[37px] hover:cursor-pointer">
                <img
                  className={`${navOpen ? "opacity-100" : "opacity-0"} transition-all delay-[0.9s] duration-[1s]`}
                  src="/img/navIcon2.svg"
                  alt=""
                />
                <div
                  className={`${navOpen ? "opacity-100" : "opacity-0"} text-nowrap transition-all delay-[0.9s] duration-[1s]`}
                >
                  <p className="text-base font-normal tracking-[1.8px]">
                    CASE STUDIES
                  </p>
                  <div className="">
                    <span className="text-[32px] tracking-[3.636px]">
                      WORKS
                    </span>
                    <div className="ml-[11px] inline-block h-[10px] w-[10px] flex-shrink-0 rounded-full bg-[#26C6D0]"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* navMiddle */}
            <div className="flex flex-col pt-[60px]">
              <div className="flex h-[380px] w-[290px] flex-col items-start justify-end gap-[27.24px] rounded-[24px] bg-[url('/img/navImg3.svg')] pb-[48px] pl-[37px] hover:cursor-pointer">
                <img
                  className={`${navOpen ? "opacity-100" : "opacity-0"} transition-all delay-[1.1s] duration-[1s]`}
                  src="/img/navIcon3.svg"
                  alt=""
                />
                <div
                  className={`${navOpen ? "opacity-100" : "opacity-0"} text-nowrap transition-all delay-[1.1s] duration-[1s]`}
                >
                  <p className="text-base font-normal tracking-[1.8px]">
                    BE COOL WITH US
                  </p>
                  <div className="pt-[9px]">
                    <span className="text-[32px] tracking-[3.636px]">
                      CAREERS
                    </span>
                    <div className="ml-[11px] inline-block h-[10px] w-[10px] flex-shrink-0 rounded-full bg-[#EE6C8A]"></div>
                  </div>
                </div>
              </div>
              <div className="mt-[32px] flex h-[282px] w-[290px] items-end justify-start gap-[27.24px] rounded-[24px] bg-[url('/img/navImg4.svg')] pb-[59px] pl-[37px] hover:cursor-pointer">
                <img
                  className={`${navOpen ? "opacity-100" : "opacity-0"} transition-all delay-[0.8s] duration-[1s]`}
                  src="/img/navIcon4.svg"
                  alt=""
                />
                <div
                  className={`${navOpen ? "opacity-100" : "opacity-0"} text-nowrap transition-all delay-[0.8s] duration-[1s]`}
                >
                  <p className="text-base font-normal tracking-[1.8px]">
                    CASE STUDIES
                  </p>
                  <div className="">
                    <span className="text-[32px] tracking-[3.636px]">
                      WORKS
                    </span>
                    <div className="ml-[11px] inline-block h-[10px] w-[10px] flex-shrink-0 rounded-full bg-[#EE6C8A]"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* navRight */}
            <div className="flex flex-col pt-[140px]">
              <div className="flex h-[320px] w-[380px] flex-col items-start justify-end gap-[27.24px] rounded-[24px] bg-[url('/img/navImg5.svg')] pb-[48px] pl-[37px] hover:cursor-pointer">
                <img
                  className={`${navOpen ? "opacity-100" : "opacity-0"} transition-all delay-[0.5s] duration-[1s]`}
                  src="/img/navIcon5.svg"
                  alt=""
                />
                <div
                  className={`${navOpen ? "opacity-100" : "opacity-0"} text-nowrap transition-all delay-[0.5s] duration-[1s]`}
                >
                  <p className="text-base font-normal tracking-[1.8px]">
                    AREAS OF EXPERTISE
                  </p>
                  <div className="pt-[9px]">
                    <span className="text-[32px] tracking-[3.636px]">
                      SERVICES
                    </span>
                    <div className="ml-[11px] inline-block h-[10px] w-[10px] flex-shrink-0 rounded-full bg-[#EE6C8A]"></div>
                  </div>
                </div>
              </div>
              <div className="mt-[32px] flex h-[210px] w-[380px] items-center justify-center gap-[27.24px] rounded-[24px] bg-[url('/img/navImg6.svg')] hover:cursor-pointer">
                <img src="/img/navIcon6.svg" alt="" />
                <div>
                  <p
                    className={`${navOpen ? "opacity-100" : "opacity-0"} text-base font-normal tracking-[1.8px] text-[#262626] transition-all delay-[0.9s] duration-[1s]`}
                  >
                    START YOUR JOURNEY WITH US
                  </p>
                  <div
                    className={`${navOpen ? "opacity-100" : "opacity-0"} text-nowrap transition-all delay-[0.9s] duration-[1s]`}
                  >
                    <span className="text-[32px] tracking-[3.636px] text-[#26C6D0]">
                      CONTACT
                    </span>
                    <div className="ml-[11px] inline-block h-[10px] w-[10px] flex-shrink-0 rounded-full bg-[#EE6C8A]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 主頁 */}
        <div
          className={`bg-white opacity-0 ${
            navBgOn && !navOpen && "opacity-100"
          } fixed z-10 h-[80px] w-full transition-all duration-500 xl:h-[100px]`}
        >
          <img
            className="hidden pl-[80px] pt-[25px] md:inline-block"
            src="/img/navIcon.svg"
            alt=""
          />
        </div>

        <div className="fixed right-[60px] top-[15px] z-20 xl:top-[35px]">
          <SideMenu
            navOpen={navOpen}
            setNavOpen={setNavOpen}
            navBgOn={navBgOn}
          />
        </div>
        {/* background video */}
        <video
          playsinline
          autoPlay
          muted
          loop
          className="absolute h-[940px] rounded-bl-[48px] rounded-br-[48px] object-cover"
        >
          <source src="/video/background1.mp4" />
        </video>
        <div className="absolute h-[940px] w-screen rounded-bl-[48px] rounded-br-[48px] bg-black/30"></div>
        <img
          className="relative mx-auto pt-[140px] md:absolute md:left-[220px] md:top-[181px] md:pt-0"
          src="/img/Group 18.svg"
          alt=""
        />
        {/* 標題底線 */}
        <div className="absolute left-[220px] top-[489px] hidden w-[600px] flex-shrink-0 border-4 border-[#26C6D0] bg-[#26C6D0] xl:block"></div>

        {/* 主標題 */}
        <div className="relative mx-auto mt-[72px] text-center text-[28px] tracking-[6px] md:absolute md:left-[226px] md:top-[303px]  md:mt-0 md:text-left md:text-[38px] md:tracking-[9.167px] ">
          <p className="leading-[70px]">WE CREATE</p>
          <p className="leading-[70px]">AMAZING</p>
          <div>
            <span className="leading-[70px]">DIGITAL EXPERIENCES</span>
            <div className="ml-[11px] inline-block h-[10px] w-[10px] flex-shrink-0 rounded-full bg-[#EE6C8A]"></div>
          </div>
        </div>
        {/* 裝飾字 */}
        <div className="absolute left-[62.5px] top-[249px] hidden flex-col items-center gap-[24.5px] md:flex">
          <span className="-rotate-180 transform text-base tracking-[2.222px] [writing-mode:vertical-lr] ">
            DIGITAL AGENCY
          </span>
          <span className="border-1 h-[113px] border border-white"></span>
        </div>
        <figure className="absolute top-[772px] flex w-full flex-col items-center justify-center">
          <img
            className="mb-[11px] h-[65px] w-[65px]"
            src="/img/Frame.svg"
            alt=""
          />
          <span>TASTE US NOW!</span>
          <div className="mt-[30.67px] h-[86px] w-[1px] bg-[#808080] "></div>
        </figure>
      </div>
      {/* ABOUT DIGISALAD */}
      <div className="mx-auto mb-[1060px] mt-[80px] flex w-screen flex-col items-center  text-center sm:mb-[640px] md:mt-[125px] xl:mb-[286px]">
        <div>
          <span className="text-[24px] tracking-[2px] text-[#262626] md:text-[28px] md:tracking-[3.636px]">
            ABOUT DIGISALAD
          </span>
          <div className="ml-[22px] inline-block h-[10px] w-[10px] flex-shrink-0 rounded-full bg-[#EE6C8A]"></div>
        </div>
        <img
          className="mb-[40px] px-12 md:mb-[71px] md:px-0"
          src="/img/UnderLine.svg"
          alt=""
        />
        <div className="relative">
          <video
            ref={videoRef}
            poster="/img/videoPoster.svg"
            src="/video/produce.mp4"
          ></video>
          <button
            onClick={handlePlay}
            className={`${isPlay ? "opacity-0" : "opacity-100"} absolute left-0  top-0 h-full w-full  transition-all duration-1000`}
          >
            <img
              className={`${isPlay ? "h-40 w-40 transition-all duration-1000" : "h-20 w-20 transition-none duration-0"} m-auto  md:w-auto`}
              s
              src="/img/PlayBtn.svg"
              alt=""
            />
          </button>
        </div>
        <p className="mt-[30px] px-5 text-center text-[16px] font-[400] leading-[28px] tracking-[1px] text-[#262626] xl:w-[1007px] xl:px-0">
          Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras
          ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta.
          Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis.
          Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci.
          Donec id dignissim nunc. Donec elit ante, eleifend a dolor et,
          venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem
          elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc
          leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis
          molestie faucibus.
        </p>
        <button className="mt-[30px] flex h-[86px] w-[223px] items-center justify-center  gap-[14.91px] rounded-[1px] bg-[#26C6D0] transition-colors duration-300 hover:bg-[#47dde5]">
          <p className="text-[16px] leading-[16px] tracking-[2.222px] text-white">
            VIEW MORE
          </p>
          <div className="inline-block h-[2px] w-[52px] bg-white"></div>
        </button>
      </div>
      {/* AWARDS */}
      <div className="absolute right-0 top-[1960px] h-[1230px] w-full gap-[37px] rounded-[36px] bg-white sm:h-[800px] md:top-[2050px] xl:top-[2104px] xl:flex xl:h-[432px] xl:w-[1346px]">
        <div className="mt-[65px] flex flex-col items-center justify-start px-10 xl:ml-[69px] xl:items-start xl:p-0">
          <div>
            <span className="text-[28px] tracking-[3.636px] text-[#262626]">
              AWARDS
            </span>
            <div className="ml-[10px] inline-block h-[10px] w-[10px] flex-shrink-0 rounded-full bg-[#EE6C8A]"></div>
          </div>
          <img className="mt-[7px]" src="/img/Frame2.svg" alt="" />
          <p className="mt-[30px] text-center text-base font-[400] leading-7 tracking-[1px] text-[#262626] md:w-[600px] xl:w-[416px] xl:text-start">
            Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras
            ullamcorper bibendum bibendum. Duis tincidunt urna non pretium
            porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper
            turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae
            sagittis orci. Donec id dignissim nunc.
          </p>
        </div>
        <div className="mt-10 items-center justify-center gap-[37px] px-6 sm:flex xl:mt-0 xl:justify-start xl:px-0">
          <div className="flex flex-col gap-y-[19px]">
            <img src="/img/image 1.svg" alt="" />
            <img src="/img/image 1.svg" alt="" />
          </div>
          <div className="flex flex-col gap-y-[19px]">
            <img src="/img/image 1.svg" alt="" />
            <img src="/img/image 1.svg" alt="" />
          </div>
        </div>
      </div>
      {/* OUR INGRADIENTS */}
      <div className="rounded-tl-[48px] bg-white">
        <div className="h-full rounded-[48px] bg-[#26C6D0] px-10 pb-[500px] pt-[320px] lg:pt-[250px] xl:h-[2682px] xl:px-0 xl:pb-0 xl:pt-[300px]">
          <div className="text-center">
            <span className="text-[22px] tracking-[3.636px] text-white md:text-[24px] md:text-[28px]">
              OUR INGRADIENTS
            </span>
            <div className="ml-[22px] inline-block h-[10px] w-[10px] flex-shrink-0 rounded-full bg-[#EE6C8A]"></div>
          </div>
          <img
            className="mx-auto mb-[43px]"
            src="/img/UnderLineGray.svg"
            alt=""
          />
          <p className="mx-auto w-full text-center text-base font-[400] leading-7 tracking-[1px] text-white xl:w-[1007px]">
            Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras
            ullamcorper bibendum bibendum. Duis tincidunt urna non pretium
            porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper
            turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae
            sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a
            dolor et, venenatis facilisis dolor. In feugiat orci odio, sed
            lacinia sem elementum quis. Aliquam consectetur, eros et vulputate
            euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus.
            Cras lobortis molestie faucibus.
          </p>
          <button className="mx-auto mt-[30px] flex h-[92px] w-[294px] items-center justify-center  gap-[22.72px] rounded-[1px] bg-[#585880] transition-colors duration-300 hover:bg-[#707096]">
            <p className="text-[16px] leading-[16px] tracking-[2.222px] text-white">
              OUR SERVICES
            </p>
            <div className="inline-block h-[2px] w-[68.6px] bg-white"></div>
          </button>
          {/* 介紹區塊 */}
          <ServiceCard />
          <p className="relative z-10 text-center text-lg tracking-[2px] text-white xl:mt-[102px]">
            VIEW MORE DIGISALAD’S INGRADIENTS
          </p>
          <div className="relative top-[-10px] mx-auto hidden h-[10px] w-[430px] bg-[#FFBC58] md:block"></div>
        </div>
      </div>
      {/* Self introduction */}
      <div className="absolute top-[8500px] h-[900px] w-full rounded-bl-[36px] rounded-br-[36px] rounded-tr-[36px] bg-[url('/img/bgPhoto.svg')] bg-cover px-10 sm:top-[7200px] md:top-[6050px] md:flex md:h-[700px] lg:top-[5650px] xl:top-[4703px] xl:h-[598px] xl:w-[1300px]">
        <div className="flex flex-col">
          <div className="mx-auto h-[323px] pt-10 md:pt-[137px] xl:mx-0 xl:w-[485px]">
            <figure className="mx-auto w-[204px] overflow-hidden rounded-full">
              <img src="/img/photo.svg" alt="" />
            </figure>
            <h3 className="pt-4 text-center text-xl tracking-[2px] text-white md:pt-10">
              Tony Ng
            </h3>
            <p className="pt-2 text-center text-base font-normal italic tracking-[2px] text-white">
              Founder & Creative Directors
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col items-center gap-y-[13px] px-4 sm:mt-14 md:px-10 md:pt-[88px] xl:mt-0 xl:w-[734px] xl:px-0">
          <img className="hidden md:block" src="/img/dotdot.svg" alt="" />
          <p className="text-center text-lg font-normal leading-[36px] tracking-[2px] text-white md:text-[22px] lg:leading-[48px] xl:text-left ">
            A great digital work isn’t about designing beautiful pages purely.
            It is about context - how do we deliver the
            <span className="text-[#FFBC58]">
              &nbsp;right experience to the right person at the right
              time.&nbsp;
            </span>
            The most important thing is that your work can engage customers at
            anytime, anywhere and let users experience an entire amazing digital
            journey.
          </p>
        </div>
      </div>
      {/* OUR BRAND EXPERIENCE */}
      <div className="h-full bg-white ">
        <div className="px-10 pt-[800px] text-center md:pt-[580px] lg:pt-[300px] xl:px-0 xl:pt-[386px]">
          <span className="text-[28px] tracking-[3.636px] text-[#262626]">
            OUR BRAND EXPERIENCE
          </span>
          <div className="ml-[22px] inline-block h-[10px] w-[10px] flex-shrink-0 rounded-full bg-[#EE6C8A]"></div>
        </div>
        <img
          className="mx-auto mb-[43px] px-10 xl:px-0"
          src="/img/Frame3.svg"
          alt=""
        />
        <p className="mx-auto px-10 text-center text-base font-normal leading-6 tracking-[1px] xl:w-[1007px] xl:px-0 xl:pt-[35px]">
          Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras
          ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta.
          Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis.
          Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci.
          Donec id dignissim nunc. Donec elit ante, eleifend a dolor et,
          venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem
          elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc
          leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis
          molestie faucibus.
        </p>
        <figure className="mx-auto pt-10 xl:w-[1040px] xl:pt-20">
          <img className="w-screen xl:w-auto" src="/img/logos.svg" alt="" />
        </figure>
      </div>
      {/* LP CLUB MOBILE APP */}
      <div className="relative h-full bg-[url('/img/footerBg.svg')]  bg-cover bg-bottom xl:h-[995px]">
        <div className="flex h-full items-center justify-center gap-x-4 pt-[100px] md:gap-x-6 md:pt-[200px] xl:h-[540px] xl:gap-x-0 xl:pt-[450px]">
          <img
            className="w-10 hover:cursor-pointer md:w-14 xl:mr-[38px]"
            src="/img/left.svg"
            alt=""
          />
          <figure className="w-[200px] md:w-[400px] xl:w-[540px]">
            <img src="/img/footerPhoto.svg" alt="" />
          </figure>
          {/* RWD:xl */}
          <div className="hidden pl-[62px] pr-[46px] pt-[63px] text-white xl:block">
            <p className="text-base tracking-[2.222px]">HIGHLIGHTED SHOWCASE</p>
            <div className="relative z-10 pt-5">
              <span className="text-[32px] tracking-[3.636px] text-white">
                LP CLUB MOBILE APP
              </span>
              <div className="ml-[22px] inline-block h-[10px] w-[10px] flex-shrink-0 rounded-full bg-[#EE6C8A]"></div>
            </div>
            <div className="relative top-[-16px] h-[6px] w-[420px] bg-[#26C6D0]"></div>
            <p className="w-[432px] pt-8 text-base font-normal leading-[24px] tracking-[1px]">
              Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras
              ullamcorper bibendum bibendum. Duis tincidunt urna non pretium
              porta. Nam condimentum vitae ligula vel ornare. Phasellus at
              semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl,
              vitae sagittis orci. Donec id dignissim nunc. Donec elit ante,
              eleifend a dolor et, venenatis facilisis dolor. In feugiat orci
              odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et
              vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros
              nec lacus. Cras lobortis molestie faucibus.
            </p>
          </div>
          <img
            className="w-10 hover:cursor-pointer md:w-14"
            src="/img/right.svg"
            alt=""
          />
        </div>
        <img
          className="absolute right-[136px] top-[198px] hidden xl:inline-block"
          src="/img/0104.svg"
          alt=""
        />
        {/* RWD:<xl */}
        <div className="block w-screen pt-[63px] text-center text-white xl:hidden xl:pl-[62px] xl:pr-[46px] xl:text-left">
          <p className="text-base tracking-[2.222px]">HIGHLIGHTED SHOWCASE</p>
          <div className="relative z-10 pt-5">
            <span className="text-[24px] tracking-[1px] text-white md:text-[32px] md:tracking-[3.636px]">
              LP CLUB MOBILE APP
            </span>
            <div className="ml-[22px] inline-block h-[10px] w-[10px] flex-shrink-0 rounded-full bg-[#EE6C8A]"></div>
          </div>
          <div className="relative top-[-12px] mx-auto h-[6px] w-[300px] bg-[#26C6D0] md:top-[-16px] md:w-[440px] xl:w-[420px]"></div>
          <p className="w-full px-10 pt-8 text-base font-normal leading-[24px] tracking-[1px] xl:w-[432px]">
            Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras
            ullamcorper bibendum bibendum. Duis tincidunt urna non pretium
            porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper
            turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae
            sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a
            dolor et, venenatis facilisis dolor. In feugiat orci odio, sed
            lacinia sem elementum quis. Aliquam consectetur, eros et vulputate
            euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus.
            Cras lobortis molestie faucibus.
          </p>
        </div>
        {/* Project Btn */}
        <button className="mx-auto mt-[30px] flex h-[80px] w-[240px] items-center justify-center gap-[14.91px] rounded-[1px] bg-[#26C6D0] transition-colors duration-300 hover:bg-[#44dde5] md:mt-[50px] md:h-[105px] md:w-[250px] xl:absolute xl:bottom-[160px] xl:left-[536px]  xl:mt-[150px] xl:h-[140px] xl:w-[300px]">
          <p className="text-[16px] leading-[16px] tracking-[2.222px] text-white ">
            VIEW PROJECT
          </p>
          <div className="inline-block h-[2px] w-[52px] bg-white"></div>
        </button>
        <div className="block h-[100px] w-full xl:hidden"></div>
      </div>
    </div>
  );
};

export default HomePage;
