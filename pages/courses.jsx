import Image from "next/image";
import style from "@/styles/style.module.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Upskill from "../components/upskill";
import Success from "../components/success";
import Link from "next/link";
import Head from "next/head";

export default function Courses() {
  return (
    <>
      <Head>
        <title>ParallelEdu | Courses</title>
        <link rel="canonical" href="https://www.paralleledu.com/courses" />
        <meta
          name="description"
          content="A plethora of topics to upskill on."
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
      <main className="pt-[190.35px] pb-[1.65px] max-sm:pb-[40px] max-md:pt-[100px] max-sm:pt-[80px] flex justify-center">
        <p className="w-[1016.16px] widescreen:w-[1200px] widestscreen:w-[1400px] max-lg:w-full max-lg:px-[80px] max-md:px-[40px] max-sm:px-[20px] max-smalllaptop:tracking-[-2.56px] max-smalllaptop:text-[84px] max-sm:text-[64px] max-smallphone:text-[36px] widescreen:text-[114px] widestscreen:text-[125px] widescreen:leading-[120%] max-sm:tracking-tight max-smalllaptop:leading-[102%] font-thin leading-[106.66px] tracking-[-5.2px] text-[104.57px] font-['Graphikthin'] text-[#E5E5E5] text-center">
          A plethora of topics to upskill on
        </p>
      </main>
      <div className="pl-[80px] flex flex-col items-center max-md:px-[40px] max-sm:py-20 max-sm:px-[20px] pr-[79px] pt-[77.57px] pb-[139.43px]">
        <div className="pl-[2px] justify-center mt-[93px] flex flex-wrap gap-x-[94px] gap-y-[84px] max-sm:gap-[20px]">
          <div
            className={`px-[18px] relative card w-[413px] widescreen:w-[33%] max-biggerscreen:w-[33%] max-md:w-full max-smalllaptop:w-[48.3%] border-white rounded-[10px] py-[20px] ${style.aicardborder}`}
          >
            <div className="bg-black rounded-[9px]">
              <div
                className={`${style.fscardbg} px-[18px] relative rounded-[10px] py-[20px]`}
              >
                <Image
                  src="/fullstack.png"
                  className="w-[100%] relative z-20 h-auto"
                  width={377}
                  height={236}
                  alt="Full Stack Development"
                />
                <h1 className="mt-[20.87px] leading-[31.36px] mb-[17.13px] tracking-[-0.84px] font-['Graphikthin'] text-[#E5E5E5] text-[28px] widescreen:text-[34px] widestscreen:text-[40px] widescreen:leading-[108%]">
                  Full Stack Development{" "}
                </h1>
                <div className="flex gap-[8px]">
                  <p className="px-[8px] max-sm:px-[6px] py-[4px] rounded-[5px] text-[#797979] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] max-sm:text-sm border-[1px] border-[#797979]">
                    Software Development{" "}
                  </p>
                  <p className="px-[8px] max-sm:px-[6px] py-[4px] rounded-[5px] text-[#797979] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] max-sm:text-sm border-[1px] border-[#797979]">
                    Beginner friendly{" "}
                  </p>
                </div>
                <div className="flex mt-[27.57px] gap-[12px]">
                  <p className="text-[#FFFFFF] leading-[28.8px] font-['General Sans'] text-[24px] widescreen:text-[30px] widestscreen:text-[35px]">
                    ₹29,999
                  </p>
                  <p className="text-[#FF4747] text-sm widescreen:text-base widestscreen:text-[20px]">
                    -50%
                  </p>
                </div>
                <p className="line-through mt-[3px] text-[16px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] font-['Graphikthin'] leading-[19.2px] opacity-60 text-[#ECECEC]">
                  ₹60,000
                </p>
                <Link className="relative z-30" href={"/courses/quick-batch"}>
                  <button className="w-[100%] mt-[14.57px] h-[53px] bg-[transparent] rounded-[8px] text-[#30E29D] button transition-all font-semibold border-[1px] border-[#30E29D] text-[16px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] font-[19.2px]">
                    Learn more{" "}
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div
            className={`px-[18px] relative card w-[413px] widescreen:w-[33%] max-biggerscreen:w-[33%] max-md:w-full max-smalllaptop:w-[48.3%] border-white rounded-[10px] py-[20px] ${style.aicardborder}`}
          >
            <div className="bg-black rounded-[9px]">
              <div
                className={`${style.bmcardbg} px-[18px] relative rounded-[10px] py-[20px]`}
              >
                <Image
                  src="/backend.png"
                  className="w-[100%] relative z-20 h-auto"
                  width={377}
                  height={236}
                  alt="Backend Mastery"
                />
                <h1 className="mt-[20.87px] leading-[31.36px] mb-[17.13px] tracking-[-0.84px] font-['Graphikthin'] text-[#E5E5E5] text-[28px] widescreen:text-[34px] widestscreen:text-[40px] widescreen:leading-[108%]">
                  Backend Mastery{" "}
                </h1>
                <div className="flex gap-[8px]">
                  <p className="px-[8px] max-sm:px-[6px] py-[4px] rounded-[5px] text-[#797979] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] max-sm:text-sm border-[1px] border-[#797979]">
                    Software Development{" "}
                  </p>
                  <p className="px-[8px] max-sm:px-[6px] py-[4px] rounded-[5px] text-[#797979] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] max-sm:text-sm border-[1px] border-[#797979]">
                    Beginner friendly{" "}
                  </p>
                </div>
                <div className="flex mt-[27.57px] gap-[12px]">
                  <p className="text-[#FFFFFF] leading-[28.8px] font-['General Sans'] text-[24px] widescreen:text-[30px] widestscreen:text-[35px]">
                    ₹9,999
                  </p>
                  <p className="text-[#FF4747] text-sm widescreen:text-base widestscreen:text-[20px]">
                    -33%
                  </p>
                </div>
                <p className="line-through mt-[3px] text-[16px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] font-['Graphikthin'] leading-[19.2px] opacity-60 text-[#ECECEC]">
                  ₹15,000
                </p>
                <Link className="relative z-30" href={"/courses/quick-batch"}>
                  <button className="w-[100%] mt-[14.57px] h-[53px] bg-[transparent] rounded-[8px] text-[#30E29D] button transition-all font-semibold border-[1px] border-[#30E29D] text-[16px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] font-[19.2px]">
                    Learn more{" "}
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div
            className={`px-[18px] relative card w-[413px] widescreen:w-[33%] max-biggerscreen:w-[33%] max-md:w-full max-smalllaptop:w-[48.3%] border-white rounded-[10px] py-[20px] ${style.aicardborder}`}
          >
            <div className="bg-black rounded-[9px]">
              <div
                className={`${style.fmcardbg} px-[18px] relative rounded-[10px] py-[20px]`}
              >
                <Image
                  src="/frontend.png"
                  className="w-[100%] relative z-20 h-auto"
                  width={377}
                  height={236}
                  alt="Frontend Mastery"
                />
                <h1 className="mt-[20.87px] leading-[31.36px] mb-[17.13px] tracking-[-0.84px] font-['Graphikthin'] text-[#E5E5E5] text-[28px] widescreen:text-[34px] widestscreen:text-[40px] widescreen:leading-[108%]">
                  Frontend Mastery{" "}
                </h1>
                <div className="flex gap-[8px]">
                  <p className="px-[8px] max-sm:px-[6px] py-[4px] rounded-[5px] text-[#797979] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] max-sm:text-sm border-[1px] border-[#797979]">
                    Software Development{" "}
                  </p>
                  <p className="px-[8px] max-sm:px-[6px] py-[4px] rounded-[5px] text-[#797979] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] max-sm:text-sm border-[1px] border-[#797979]">
                    Beginner friendly{" "}
                  </p>
                </div>
                <div className="flex mt-[27.57px] gap-[12px]">
                  <p className="text-[#FFFFFF] leading-[28.8px] font-['General Sans'] text-[24px] widescreen:text-[30px] widestscreen:text-[35px]">
                    ₹9,999
                  </p>
                  <p className="text-[#FF4747] text-sm widescreen:text-base widestscreen:text-[20px]">
                    -33%
                  </p>
                </div>
                <p className="line-through mt-[3px] text-[16px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] font-['Graphikthin'] leading-[19.2px] opacity-60 text-[#ECECEC]">
                  ₹15,000
                </p>
                <Link className="relative z-30" href={"/courses/quick-batch"}>
                  <button className="w-[100%] mt-[14.57px] h-[53px] bg-[transparent] rounded-[8px] text-[#30E29D] button transition-all font-semibold border-[1px] border-[#30E29D] text-[16px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] font-[19.2px]">
                    Learn more{" "}
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div
            className={`px-[18px] card relative w-[413px] widescreen:w-[33%] max-biggerscreen:w-[33%] max-md:w-full max-smalllaptop:w-[48.3%] rounded-[10px] py-[20px] ${style.aicardborder}`}
          >
            <div className="bg-black rounded-[9px]">
              <div
                className={`${style.lccardbg} px-[18px] relative rounded-[10px] py-[20px]`}
              >
                <Image
                  src="/Frame 46.png"
                  className="w-[100%] relative z-20 h-auto"
                  width={377}
                  height={236}
                  alt="No-code, Low-code Development"
                />
                <h1 className="mt-[20.87px] leading-[31.36px] mb-[17.13px] tracking-[-0.84px] font-['Graphikthin'] text-[#E5E5E5] text-[28px] widescreen:text-[34px] widestscreen:text-[40px] widescreen:leading-[108%]">
                  No-code, Low-code Development{" "}
                </h1>
                <div className="flex gap-[8px]">
                  <p className="px-[8px] max-sm:px-[6px] py-[4px] rounded-[5px] text-[#797979] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] max-sm:text-sm border-[1px] border-[#797979]">
                    No-code, Low-code{" "}
                  </p>
                  <p className="px-[8px] max-sm:px-[6px] py-[4px] rounded-[5px] text-[#797979] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] max-sm:text-sm border-[1px] border-[#797979]">
                    Beginner friendly{" "}
                  </p>
                </div>
                <div className="flex justify-between mt-[19px] widescreen:mt-[65px]">
                  <h1 className="text-[#ECECEC] leading-[28.8px] text-[24px] font-medium opacity-0">
                    Free
                  </h1>
                  {/* <p className="text-[#A1A1A1] text-[16px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] leading-[19.2px] mt-[10px]">
                &lt; 18 Hours
              </p> */}
                </div>
                {/* <Link
                  className="relative z-30"
                  href={"/courses/low-code-no-code"}
                > */}
                <button className="w-[100%] relative z-30 mt-[15px] h-[53px] bg-[transparent] rounded-[8px] text-[#30E29D] transition-all button font-semibold border-[1px] border-[#30E29D] text-[16px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] font-[19.2px]">
                  Coming Soon{" "}
                </button>
                {/* </Link> */}
              </div>
            </div>
          </div>
          <div
            className={`px-[18px] card relative w-[413px] widescreen:w-[33%] max-biggerscreen:w-[33%] max-md:w-full max-smalllaptop:w-[48.3%] rounded-[10px] py-[20px] ${style.aicardborder}`}
          >
            <div className="bg-black rounded-[9px]">
              <div
                className={`${style.aicardbg} px-[18px] relative rounded-[10px] py-[20px]`}
              >
                <Image
                  src="/AI.png"
                  className="w-[100%] relative z-20 h-auto"
                  width={377}
                  height={236}
                  alt="Artificial Intelligence (AI/ML)"
                />
                <h1 className="mt-[20.87px] relative z-20 leading-[31.36px] mb-[17.13px] tracking-[-0.84px] font-['Graphikthin'] text-[#E5E5E5] text-[28px] widescreen:text-[34px] widestscreen:text-[40px] widescreen:leading-[108%]">
                  Artificial Intelligence (AI/ML){" "}
                </h1>
                <div className="flex gap-[8px] relative z-20">
                  <p className="px-[8px] max-sm:px-[6px] py-[4px] rounded-[5px] text-[#797979] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] max-sm:text-sm border-[1px] border-[#797979]">
                    AI{" "}
                  </p>
                  <p className="px-[8px] max-sm:px-[6px] py-[4px] rounded-[5px] text-[#797979] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] max-sm:text-sm border-[1px] border-[#797979]">
                    Beginner friendly{" "}
                  </p>
                </div>
                <div className="flex justify-between relative z-20 mt-[49px]">
                  <h1 className="text-[#ECECEC] leading-[28.8px] text-[24px] font-medium opacity-0">
                    Free
                  </h1>
                  {/* <p className="text-[#A1A1A1] text-[16px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] leading-[19.2px] mt-[10px]">
                &lt; 18 Hours
              </p> */}
                </div>
                {/* <Link
                  className="relative z-30"
                  href={"/courses/artificial-intelligence"}
                > */}
                <button className="relative z-30 w-[100%] mt-[15px] h-[53px] bg-[transparent] rounded-[8px] text-[#30E29D] transition-all font-semibold button border-[1px] border-[#30E29D] text-[16px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] font-[19.2px]">
                  Coming Soon{" "}
                </button>
                {/* </Link> */}
              </div>
            </div>
          </div>
          <div
            className={`px-[18px] card relative w-[413px] widescreen:w-[33%] max-biggerscreen:w-[33%] max-md:w-full max-smalllaptop:w-[48.3%] border-white rounded-[10px] py-[20px] ${style.aicardborder}`}
          >
            <div className="bg-black rounded-[9px]">
              <div
                className={`${style.dacardbg} px-[18px] relative rounded-[10px] py-[20px]`}
              >
                <Image
                  src="/data.png"
                  className="w-[100%] relative z-20 h-auto"
                  width={377}
                  height={236}
                  alt="Data Analytics"
                />
                <h1 className="mt-[20.87px] leading-[31.36px] mb-[17.13px] tracking-[-0.84px] font-['Graphikthin'] text-[#E5E5E5] text-[28px] widescreen:text-[34px] widestscreen:text-[40px] widescreen:leading-[108%]">
                  Data Analytics{" "}
                </h1>
                <div className="flex gap-[8px]">
                  <p className="px-[8px] max-sm:px-[6px] py-[4px] rounded-[5px] text-[#797979] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] max-sm:text-sm border-[1px] border-[#797979]">
                    Data Analytics{" "}
                  </p>
                  <p className="px-[8px] max-sm:px-[6px] py-[4px] rounded-[5px] text-[#797979] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] max-sm:text-sm border-[1px] border-[#797979]">
                    Beginner friendly{" "}
                  </p>
                </div>
                <div className="flex justify-between mt-[49px]">
                  <h1 className="text-[#ECECEC] leading-[28.8px] text-[24px] font-medium opacity-0">
                    Free
                  </h1>
                  {/* <p className="text-[#A1A1A1] text-[16px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] leading-[19.2px] mt-[10px]">
                &lt; 18 Hours
              </p> */}
                </div>
                {/* <Link
                  className="relative z-30"
                  href={"/courses/data-analytics"}
                > */}
                <button className="w-[100%] relative z-30 mt-[15px] h-[53px] bg-[transparent] rounded-[8px] text-[#30E29D] transition-all font-semibold button border-[1px] border-[#30E29D] text-[16px] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] font-[19.2px]">
                  Coming Soon{" "}
                </button>
                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="relative z-20 py-[80px]">
        <p className=" text-[20px] widescreen:text-[25px] widestscreen:text-[30px] widescreen:leading-[120%] pl-20 max-md:px-[40px] max-sm:px-[20px] leading-[19.28px] text-[#E5E5E5] opacity-80 font-['Graphikthin'] font-light mb-[20px]">
          Success stories
        </p>
        <h1 className="w-[813.91px] widescreen:w-[50%] max-hamburger:w-full ml-20 max-hamburger:px-20 max-hamburger:ml-0 max-md:px-[40px] max-sm:px-[20px] text-[64px] widescreen:text-[74px] widestscreen:text-[84px]  widescreen:leading-[120%] max-hamburger:text-[45px] max-sm:text-[32px] max-hamburger:leading-[120%] max-hamburger:tracking-normal leading-[61.68px] font-['Graphikthin'] font-light text-[#E5E5E5] mb-[58px] max-sm:mb-[50px] tracking-[-2.56px]">
          People benefitting from our new age method of learning.{" "}
        </h1>
        <Success />
      </section>{" "}
      <Upskill />
      <Footer />
    </>
  );
}
