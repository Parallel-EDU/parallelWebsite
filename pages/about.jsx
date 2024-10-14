import Image from "next/image";
import style from "@/styles/style.module.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Upskill from "../components/upskill";
import Success from "../components/success";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>ParallelEdu | About Us</title>
        <link rel="canonical" href="https://www.paralleledu.com/about" />
        <meta
          name="description"
          content="At Parallel, affordability is just the beginning. We are deeply
                invested in your upskilling journey and your success."
        />
        <meta
          name="keywords"
          content="paralleledu, paralleledu learn, parallel, learn webdev, learn trending skills, hire IT professionals, free courses online, full stack development, frontend development, backend development, learn Reactjs, HTML, CSS, javascript, learn HTML, learn CSS, learn JS, learn frontend development, learn backend development, learn fullstack development, fullstack course, frontend course, backend course, paralleledu.com, educational website"
        />
      </Head>
      <Navbar />
      <div className="absolute w-[100vw] h-[822px] top-0 left-0 overflow-hidden">
        <div className={style.fullgrid}></div>
      </div>
      <main className="flex justify-center pt-[190.35px] max-hamburger:pt-[100px] max-md:pt-[80px] max-sm:pt-[80px] px-[80px] max-md:px-[40px] max-sm:px-[20px] max-md:pb-[50px] pb-[220.65px]">
        <h1 className="w-[1016.16px] font-['Graphikthin'] text-[104.57px] leading-[106.66px] tracking-[-5.2px] text-center max-smalllaptop:tracking-[-2.56px] max-smalllaptop:text-[84px] max-sm:text-[64px] max-smallphone:text-[36px] max-sm:tracking-tight max-smalllaptop:leading-[102%]">
          We want to make upskilling accessible to{" "}
          <span className="font-bold font-['Graphik']">everyone.</span>
        </h1>
      </main>
      <section className="relative">
        <div className="w-[100%] overflow-hidden absolute h-[2459px]">
          <div
            className={`${style.client} max-xl:left-0`}
            style={{
              top: "1200px",
            }}
          ></div>
        </div>{" "}
        <section className="py-[241.5px] relative z-20 max-md:py-20 px-[80px] max-sm:px-[20px] max-md:px-[40px] flex justify-center">
          <div className="w-[1081.52px]">
            <p className="text-center text-[20px] leading-[19.28px] text-[#E5E5E5] font-['Graphikthin'] mb-[20px]">
              Our mission
            </p>
            <h1 className="text-[85.04px] max-hamburger:text-[64px] max-sm:text-[45px] max-hamburger:leading-[120%] leading-[81.97px] text-center text-[#E5E5E5] tracking-[-3.4px] font-['Graphikthin']">
              To make quality education as affordable as it gets.
            </h1>
          </div>
        </section>
        <section className="pt-[50.6px] max-lg:pb-[72px] max-sm:pb-[36px] pb-[306px] flex flex-col items-center px-[80px] max-sm:px-[20px] max-md:px-[40px]">
          <h1 className="text-[28.89px] leading-[27.85px] tracking-[-0.56px] font-['Graphikthin'] max-lg:mb-[50px] max-sm:mb-[24px] mb-[79.4px] max-lg:mb-[56px] max-md:mb-[48px] max-sm:mb-[32px] text-[#E5E5E5] text-center">
            What we stand by
          </h1>
          <div className="flex w-full max-xl:gap-[32px] justify-center gap-[84px] max-md:flex-col max-lg:flex-wrap">
            <div className="w-[355px] mt-[197.48px] max-lg:mt-[110px] max-md:mt-[70px] max-sm:mt-[24px] flex flex-col gap-[16px] items-center max-hamburger:w-[45%] max-md:w-full">
              <Image
                src="/Business-Handshake--Streamline-Core.svg.svg"
                className="relative z-20"
                width={61.32}
                height={61.32}
              />
              <h1 className="text-[52.43px] mt-[8px] leading-[50.53px] tracking-[-2.16px] text-[#E5E5E5] font-['Graphikthin'] text-center">
                Transparency
              </h1>
              <p className="text-base text-[#E0E0E0] opacity-80 text-center">
                We believe in building trust with our learners. That's why we
                prioritize transparency in everything we do.
              </p>
              <div className="relative pt-[36px] w-full">
                <Image
                  src="/piller.png"
                  className="absolute max-lg:hidden z-20"
                  width={347.62}
                  height={659.89}
                />
              </div>
            </div>
            <div className="w-[355px] flex flex-col gap-[16px] items-center max-hamburger:w-[45%] max-md:w-full">
              <Image
                src="/Star-Badge--Streamline-Core.svg.svg"
                className="relative z-20"
                width={61.32}
                height={61.32}
              />
              <h1 className="text-[52.43px] mt-[8px] leading-[50.53px] tracking-[-2.16px] text-[#E5E5E5] font-['Graphikthin'] text-center">
                Excellence
              </h1>
              <p className="text-base text-[#E0E0E0] opacity-80 text-center">
                We are relentless in our pursuit of excellence. To ensure you
                receive the most valuable education possible, we maintain
                rigorous content standards.
              </p>
              <div className="relative pt-[36px] w-[350px]">
                <Image
                  src="/Union2.png"
                  className="absolute max-lg:hidden z-20"
                  width={347.62}
                  height={659.89}
                />
              </div>
            </div>
            <div className="w-[355px] mt-[109.12px] flex flex-col gap-[16px] items-center max-hamburger:w-[45%] max-md:w-full">
              <Image
                src="/Arrow-Double-Up--Streamline-Ultimate.svg.svg"
                className="relative z-20"
                width={61.32}
                height={61.32}
              />
              <h1 className="text-[52.43px] mt-[8px] leading-[50.53px] tracking-[-2.16px] text-[#E5E5E5] font-['Graphikthin'] text-center">
                Progress
              </h1>
              <p className="text-base text-[#E0E0E0] opacity-80 text-center">
                At Parallel, affordability is just the beginning. We are deeply
                invested in your upskilling journey and your success.
              </p>
              <div
                style={{
                  background:
                    "linear-gradient(180deg, #C0C0C0 0%, #000000 54%);",
                  mixBlendMode: "color-dodge",
                }}
                className="relative pt-[36px] w-[350px]"
              >
                <Image
                  src="/Union.png"
                  className="absolute max-lg:hidden mixblend z-20"
                  width={347.62}
                  height={659.89}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="px-[80px] max-sm:px-[20px] max-md:px-[40px] relative py-[100px] flex flex-col justify-center items-center gap-[65px]">
          <div className="w-[813.91px] max-hamburger:w-full">
            <p className="text-center text-[#E5E5E5] font-['Graphikthin'] font-light mb-[20px] text-[20px] leading-[19.28px]">
              Our partners
            </p>
            <h1 className="text-center text-[#E5E5E5] relative z-20 text-[64px] font-['Graphikthin'] leading-[61.68px] font-light tracking-[-2.56px] max-hamburger:text-[45px] max-sm:text-[32px] max-sm:tracking-tight max-hamburger:leading-[120%]">
              People helping us achieve our ambitious goal.{" "}
            </h1>
          </div>
          <div className="flex flex-wrap items-center justify-center z-20 gap-x-[22px] gap-y-[27px]">
            <Image
              src="/Frame 1000002729.png"
              className="relative z-20 max-sm:w-[46%]"
              width={193}
              height={82}
            />
            <Image
              src="/Frame 1000002730.png"
              className="relative z-20 max-sm:w-[46%]"
              width={193}
              height={82}
            />
            <Image
              src="/Frame 1000002731.png"
              className="relative z-20 max-sm:w-[46%]"
              width={193}
              height={82}
            />
            <Image
              src="/Frame 1000002732.png"
              className="relative z-20 max-sm:w-[46%]"
              width={193}
              height={82}
            />
            <Image
              src="/Frame 1000002733.png"
              className="relative z-20 max-sm:w-[46%]"
              width={193}
              height={82}
            />
            <Image
              src="/Frame 1000002734.png"
              className="relative z-20 max-sm:w-[46%]"
              width={193}
              height={82}
            />
            <Image
              src="/Frame 1000002729 (1).png"
              className="relative z-20 max-sm:w-[46%]"
              width={193}
              height={82}
            />
            <Image
              src="/Frame 1000002732 (1).png"
              className="relative z-20 max-sm:w-[46%]"
              width={193}
              height={82}
            />
            <Image
              src="/Frame 1000002730 (1).png"
              className="relative z-20 max-sm:w-[46%]"
              width={193}
              height={82}
            />
            <Image
              src="/Frame 1000002731 (1).png"
              className="relative z-20 max-sm:w-[46%]"
              width={193}
              height={82}
            />
          </div>
        </section>
      </section>
      {/* <section className="flex justify-center pt-[122.06px] max-md:py-0 max-sm:px-[20px] max-md:px-[40px] px-[80px] pb-[180.06px]">
        <div className="flex gap-[94px] max-xl:gap-[30px] max-hamburger:flex-col items-center">
          <Image
            src="/Mask group (1).svg"
            className="relative z-20 max-md:w-full"
            width={442.87}
            height={442.87}
          />
          <div>
            <h1 className="text-[20px] leading-[19.28px] text-[#E5E5E5] font-['Graphikthin']">
              About our founder
            </h1>
            <h1 className="mt-[20px] text-[64px] max-hamburger:text-[45px] max-sm:text-[32px] max-hamburger:leading-[120%] leading-[61.68px] tracking-[-2.56px] text-[#E5E5E5] font-['Graphikthin']">
              The man behind the dream.
            </h1>
            <p className="text-base text-[#E5E5E5] opacity-80 max-smalllaptop:w-[400px] max-hamburger:w-full w-[612.68px] mt-[55px] max-md:mt-[40px] font-['Graphikthin']">
              A tech entrepreneur who has scaled up software businesses from
              $100K to $10M in revenue and specializes in building world-class
              tech teams from the ground up. Syed has seen all the sides of
              education.
              <br />
              <br />
              Coming from a humble background, he has experienced a fair share
              of struggles when it comes to education. Hence, is on a mission to
              do his best to make sure the upcoming generations have it better
              than him when it comes to learning.
            </p>
          </div>
        </div>
      </section> */}
      <section className="relative z-20 py-[80px]">
        <p className="text-[20px] pl-20 max-md:px-[40px] max-sm:px-[20px] leading-[19.28px] text-[#E5E5E5] opacity-80 font-['Graphikthin'] font-light mb-[20px]">
          Success stories
        </p>
        <h1 className="w-[813.91px] max-hamburger:w-full ml-20 max-hamburger:px-20 max-hamburger:ml-0 max-md:px-[40px] max-sm:px-[20px] text-[64px] max-hamburger:text-[45px] max-sm:text-[32px] max-hamburger:leading-[120%] max-hamburger:tracking-normal leading-[61.68px] font-['Graphikthin'] font-light text-[#E5E5E5] mb-[58px] max-sm:mb-[50px] tracking-[-2.56px]">
          People benefitting from our new age method of learning.{" "}
        </h1>
        <Success />
      </section>{" "}
      <Upskill />
      <Footer />
    </>
  );
}
