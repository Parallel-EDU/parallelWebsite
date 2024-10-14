import { useState, useRef, useEffect } from "react";
import Navbar from "@/components/navbar";
import Image from "next/image";
import style from "@/styles/style.module.css";
import Footer from "../components/footer";
import Upskill from "../components/upskill";
import Success from "../components/success";
import Link from "next/link";
import { Linear, gsap } from "gsap";
import axios from "axios";
import Head from "next/head";

export default function Home() {
  const [Role, setRole] = useState("Select an option");
  const [filled, setfilled] = useState("");
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phonenumber, setPhonenumber] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const clientanimation = useRef(null);
  const leadinganimation = useRef(null);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleOptionSelect = (option) => {
    setRole(option);
    setIsOpen(false);
  };
  useEffect(() => {
    gsap
      .timeline({ repeat: -1 })
      .fromTo(
        clientanimation.current,
        { x: 50 },
        { ease: Linear.easeNone, x: -836, duration: 15 }
      );
    let tl = gsap.timeline({ repeat: -1 });
    const width = window.innerWidth;

    if (width > 639) {
      tl.fromTo(
        leadinganimation.current,
        { y: 0 },
        { ease: Linear.easeNone, y: -180, duration: 10 }
      );
    } else if (width < 640) {
      tl.fromTo(
        leadinganimation.current,
        { y: 0 },
        { ease: Linear.easeNone, y: -100, duration: 10 }
      );
    }

    return () => {
      tl.kill();
    };
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Name === "") {
      setfilled("name");
    } else if (Email === "") {
      setfilled("email");
    } else if (Phonenumber === "") {
      setfilled("phone");
    } else if (Role === "Select an option") {
      setfilled("I am");
    } else {
      const data = {
        Name,
        Email,
        Phonenumber,
        Role,
      };
      try {
        const response = await axios.post("/api/home", data);
        setfilled("done");
      } catch (error) {
        console.error("Error sending data:", error);
      }
    }
  };
  return (
    <>
      <Head>
        <title>ParallelEdu</title>
        <link rel="canonical" href="https://www.paralleledu.com/" />
        <meta
          name="description"
          content="Upskill and get placed at an affordable price."
        />
        <meta
          name="keywords"
          content="paralleledu, paralleledu learn, parallel, learn webdev, learn trending skills, hire IT professionals, free courses online, full stack development, frontend development, backend development, learn Reactjs, HTML, CSS, javascript, learn HTML, learn CSS, learn JS, learn frontend development, learn backend development, learn fullstack development, fullstack course, frontend course, backend course, paralleledu.com, educational website"
        />
      </Head>
      <Navbar />
      <div className="absolute z-20 w-[100%] h-[822px] top-[-200px] overflow-hidden">
        <div className={style.backgroundcolor}></div>
      </div>
      <div className="absolute z-20 w-[100%] h-[822px] top-[622px] right-0 overflow-hidden">
        <div className={style.backgroundcolor3}></div>
      </div>
      <div className="absolute z-20 w-[100%] h-[822px] top-[622px] right-0 overflow-hidden">
        <div className={style.backgroundcolor2}></div>
      </div>
      <div className="absolute w-[100%] h-[822px] top-0 left-0 overflow-hidden">
        <div className={style.backgroundbox}></div>
      </div>
      <main className="px-[80px] z-50 relative max-md:px-[40px] max-sm:px-[20px] max-md:pt-[50px] max-sm:pb-0 max-sm:pt-[30px] flex justify-between max-hamburger:items-center max-smalllaptop:gap-[20px] max-hamburger:flex-col pb-[29.5px] pt-[76.5px]">
        <div className="max-hamburger:w-full">
          <div className="relative z-30 w-full">
            <h1 className="w-[685.41px] text-[74.07px] font-medium max-hamburger:w-[100%]  max-smalllaptop:w-[510px] max-bigscreen:w-[676px] max-smalllaptop:tracking-[-4.5px] max-smalllaptop:text-[66px] max-sm:text-[60px] max-smallphone:text-[42px] max-sm:tracking-normal max-sm:mb-[12px] max-smalllaptop:leading-[102%] font-light tracking-[-3.5px] leading-[80.73px] text-[#E5E5E5] font-['Graphikmedium'] font-light mb-[20px]">
              Upskill and get placed at
              <span className="font-['Graphik'] font-semibold">
                {" "}
                an affordable price.
              </span>
            </h1>
            <div className="flex gap-[12px] flex-wrap">
              <p className="px-[8px] max-sm:px-[6px] py-[4px] rounded-[5px] text-[#797979] text-base max-sm:text-sm border-[1px] border-[#797979]">
                No-code, Low-code{" "}
              </p>
              <p className="px-[8px] max-sm:px-[6px] py-[4px] rounded-[5px] text-[#797979] text-base max-sm:text-sm border-[1px] border-[#797979]">
                Artificial Intelligence{" "}
              </p>
              <p className="px-[8px] max-sm:px-[6px] py-[4px] rounded-[5px] text-[#797979] text-base max-sm:text-sm border-[1px] border-[#797979]">
                Data Analytics{" "}
              </p>
              <p className="px-[8px] max-sm:px-[6px] py-[4px] rounded-[5px] text-[#797979] text-base max-sm:text-sm border-[1px] border-[#797979]">
                Full-stack Development
              </p>
            </div>
            <p className="mt-[50px] mb-[12px] max-sm:w-full text-[16px] leading-[24px] text-[#E0E0E0]">
              Quick batch starts on July 15th. Get placed within{" "}
              <span className="text-[#30E29D]"> 6 months!</span>
            </p>
            <div className="bg-black rounded-[9px] max-bigphone:w-[300px] max-smallphone:w-full max-hamburger:w-[501px] w-[501px] max-sm:w-full">
              <div className="bg-[#30E29D1A] max-bigphone:flex-col max-bigphone:w-[300px] max-smallphone:w-full rounded-[9px] max-sm:px-[12px] pr-[22.97px] w-[501px] max-sm:w-full max-hamburger:w-[501px] pl-[11px] py-[18px] flex gap-[17px]">
                <Image
                  src="/qb.png"
                  className="w-[185px] h-[134px] max-bigphone:w-full"
                  width={185}
                  height={134}
                />
                <div>
                  <h1 className="text-[16px] leading-[15.5px] text-[#E5E5E5] mb-[10px] italic font-semibold ">
                    Quick Batch
                  </h1>
                  <h1 className="text-base text-[#E0E0E0] mb-[19.34px]">
                    Courses on Frontend, Backend, and Fullstack Development.
                  </h1>
                  <Link className="w-full" href={"/courses/quick-batch"}>
                    <button className="w-[265px] max-bigphone:w-full max-sm:w-[245px] h-[39px] bg-[#30E29D] rounded-[8px] font-semibold text-[#292929] text-[16px] font-[19.2px]">
                      Enroll now for 100% placement
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[600px] max-hamburger:w-full overflow-hidden mt-[46px] max-hamburger:mt-[80px] max-md:mt-[50px] max-smalllaptop:w-[460px] relative z-30">
            <p className="text-[16px] mb-[12px] leading-[24px] text-[#E0E0E0]">
              Our placement partners
            </p>
            <div
              ref={clientanimation}
              className="w-[1323.57px] h-[44px] flex gap-[52px]"
            >
              <Image
                src="/razorimage.svg"
                className="py-[12.73px]"
                width={87.2}
                height={18.54}
              />
              <Image
                src="/zepto.svg"
                className="py-[12.73px]"
                width={56.05}
                height={18.54}
              />
              <Image
                src="/TATA_1mg_Logo 1.svg"
                className="py-[13.12px]"
                width={79.82}
                height={17.75}
              />
              <Image
                src="/shiprocket_logo 1.svg"
                className="py-[13.12px]"
                width={79.87}
                height={17.75}
              />
              <Image
                src="/logoclient.svg"
                // className="pt-[30.14px] pb-[32.16px]"
                width={64.03}
                height={29.52}
              />
              <Image
                src="/Clip path group.svg"
                className="py-[7.24px]"
                width={63.94}
                height={20.89}
              />
              <Image
                src="/image 60.svg"
                className="py-[12.62px]"
                width={89.27}
                height={17.75}
              />
              <Image
                src="/razorimage.svg"
                className="py-[12.73px]"
                width={87.2}
                height={18.54}
              />
              <Image
                src="/zepto.svg"
                className="py-[12.73px]"
                width={56.05}
                height={18.54}
              />
              <Image
                src="/TATA_1mg_Logo 1.svg"
                className="py-[13.12px]"
                width={79.82}
                height={17.75}
              />
              <Image
                src="/shiprocket_logo 1.svg"
                className="py-[13.12px]"
                width={79.87}
                height={17.75}
              />
              <Image
                src="/logoclient.svg"
                // className="pt-[30.14px] pb-[32.16px]"
                width={64.03}
                height={29.52}
              />
              <Image
                src="/Clip path group.svg"
                className="py-[7.24px]"
                width={63.94}
                height={20.89}
              />
              <Image
                src="/image 60.svg"
                className="py-[12.62px]"
                width={89.27}
                height={17.75}
              />
            </div>
          </div>
        </div>
        <div className="w-[442px] relative max-sm:w-full z-30 backdrop-blur-sm max-hamburger:w-[70%] flex flex-col z-20 gap-[32px] max-sm:gap-[20px] max-sm:h-auto h-[605px] px-[37px] max-sm:px-[20px] max-sm:py-[16px] py-[34px] rounded-[14px] bg-[#FFFFFF1A]">
          <div className="flex flex-col gap-[16px]">
            <div className="flex justify-between">
              <p
                className={
                  filled === "name"
                    ? "text-[16px] text-[#FF4C4C] leading-[19.2px]"
                    : "text-[16px] leading-[19.2px]"
                }
              >
                Name
              </p>
              <p
                className={
                  filled === "name"
                    ? "text-[16px] text-[#FF4C4C] leading-[19.2px]"
                    : "text-[16px] hidden leading-[19.2px]"
                }
              >
                This field is required
              </p>
            </div>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              className={
                filled === "name"
                  ? "h-[54px] rounded-[4px] border-[1px] border-[#FF4C4C] pl-[17.51px] bg-[transparent] placeholder:text-[#FF4C4C] text-white"
                  : "h-[54px] rounded-[4px] border-[1px] border-white pl-[17.51px] bg-[transparent] placeholder-[#ffffff99] text-white"
              }
              placeholder="Enter your name"
            />
          </div>
          <div className="flex flex-col gap-[16px]">
            <div className="flex justify-between">
              <p
                className={
                  filled === "email"
                    ? "text-[16px] text-[#FF4C4C] leading-[19.2px]"
                    : "text-[16px] leading-[19.2px]"
                }
              >
                Email
              </p>
              <p
                className={
                  filled === "email"
                    ? "text-[16px] text-[#FF4C4C] leading-[19.2px]"
                    : "text-[16px] hidden leading-[19.2px]"
                }
              >
                This field is required
              </p>
            </div>{" "}
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className={
                filled === "email"
                  ? "h-[54px] rounded-[4px] border-[1px] border-[#FF4C4C] pl-[17.51px] bg-[transparent] placeholder:text-[#FF4C4C] text-white"
                  : "h-[54px] rounded-[4px] border-[1px] border-white pl-[17.51px] bg-[transparent] placeholder-[#ffffff99] text-white"
              }
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col gap-[16px]">
            <div className="flex justify-between">
              <p
                className={
                  filled === "phone"
                    ? "text-[16px] text-[#FF4C4C] leading-[19.2px]"
                    : "text-[16px] leading-[19.2px]"
                }
              >
                Phone Number
              </p>
              <p
                className={
                  filled === "phone"
                    ? "text-[16px] text-[#FF4C4C] leading-[19.2px]"
                    : "text-[16px] hidden leading-[19.2px]"
                }
              >
                This field is required
              </p>
            </div>{" "}
            <input
              type="number"
              onChange={(e) => setPhonenumber(e.target.value)}
              className={
                filled === "phone"
                  ? "h-[54px] rounded-[4px] border-[1px] border-[#FF4C4C] pl-[17.51px] bg-[transparent] placeholder:text-[#FF4C4C] text-white"
                  : "h-[54px] rounded-[4px] border-[1px] border-white pl-[17.51px] bg-[transparent] placeholder-[#ffffff99] text-white"
              }
              placeholder="Enter your phone number"
            />
          </div>
          <div className="flex flex-col relative gap-[16px]">
            <div className="flex justify-between">
              <p
                className={
                  filled === "I am"
                    ? "text-[16px] text-[#FF4C4C] leading-[19.2px]"
                    : "text-[16px] leading-[19.2px]"
                }
              >
                I am a
              </p>
              <p
                className={
                  filled === "I am"
                    ? "text-[16px] text-[#FF4C4C] leading-[19.2px]"
                    : "text-[16px] hidden leading-[19.2px]"
                }
              >
                This field is required
              </p>
            </div>{" "}
            <div
              onClick={() => toggleMenu()}
              className={
                filled === "I am" && Role === "Select an option"
                  ? "pl-[17.51px] pr-[18px] flex justify-between h-[54px] bg-[transparent] text-[##FF4C4C] cursor-pointer w-full border-[1px] border-[#FF4C4C] rounded-[6px] py-[16px] text-[17.95px] leading-[21.54px]"
                  : "pl-[17.51px] pr-[18px] flex justify-between h-[54px] bg-[transparent] text-[#ffffff99] cursor-pointer w-full border-[1px] border-white rounded-[6px] py-[16px] text-[17.95px] leading-[21.54px]"
              }
            >
              {Role}
              <Image src="/arrowdown.svg" width={19.98} height={10.75} />
            </div>
            {isOpen && (
              <div className="bg-[#FFFFFFF2] absolute border-[1px] rounded-tl-[4px] rounded-[tr]-[4px] bottom-[54px] z-[22222] cursor-pointer">
                <ul>
                  <li
                    onClick={() =>
                      handleOptionSelect("Student enrolled in college")
                    }
                    className="pl-[17.91px] max-sm:px-[10px] max-sm:text-base max-sm:w-full w-[368px] cursor-pointer text-black border-[1px] border-b-[#00000033] py-[16px] text-[17.95px] leading-[21.54px]"
                  >
                    Student enrolled in college{" "}
                  </li>
                  <li
                    onClick={() => handleOptionSelect("Passed out student")}
                    className="pl-[17.91px] max-sm:px-[10px] max-sm:text-base max-sm:w-full w-[368px] cursor-pointer text-black py-[16px] text-[17.95px] border-[1px] border-b-[#00000033] leading-[21.54px]"
                  >
                    Passed out student{" "}
                  </li>
                  <li
                    onClick={() => handleOptionSelect("College Representative")}
                    className="pl-[17.91px] max-sm:px-[10px] max-sm:text-base max-sm:w-full w-[368px] cursor-pointer text-black border-[1px] border-b-[#0000033] py-[16px] text-[17.95px] leading-[21.54px]"
                  >
                    Student pursuing education
                  </li>
                </ul>
              </div>
            )}
          </div>
          <button
            onClick={handleSubmit}
            className="w-full h-[53px] border-[#30E29D] hover:bg-[#30E29D] hover:text-[#292929] transition-all border-[1px] rounded-[8px] font-semibold text-[#30E29D] text-[16px] font-[19.2px]"
          >
            Talk To Our Experts
          </button>
          {filled === "done" && (
            <div className="flex items-center justify-center gap-[12.87px] absolute w-[299px] z-30 max-sm:w-full max-sm:static h-[75px] bg-[white] rounded-[9px] bottom-0 left-[-347px]">
              <Image src="/blackcheck.svg" width={34.57} height={34.57} />
              <p className="w-[210px] text-black text-[14px] leading-[21px] font-semibold">
                Thanks for submitting the form! We’ll call you within 24 hours.
              </p>
            </div>
          )}
        </div>
      </main>
      <div className="absolute z-40 overflow-hidden w-[100%] h-[100vh] top-[811px] left-0 overflow-x-hidden">
        <div className={style.backgroundbox2}></div>
      </div>
      <section className="pt-[141px] pb-[140px] relative z-[41] max-md:py-20 max-bigscreen:pr-[80px] max-md:px-[40px] max-sm:px-[20px] max-hamburger:px-[40px] relative pl-[0px] pr-[80px] flex gap-[129px] max-hamburger:flex-col max-xl:gap-[50px]">
        {/* <div
          className={`px-[18px] relative card w-[413px] max-md:w-full max-hamburger:w-[70%] max-smalllaptop:w-[48.3%] rounded-[10px] pb-[49.13px] pt-[20px] ${style.aicardborder}`}
        >
          <div className="bg-black rounded-[9px]">
            <div
              className={`px-[18px] w-full relative rounded-[10px] pt-[20px] pb-[49.13px]`}
            >
              <div
                className={`${style.fshomecardbg} w-[413px] h-[406px] max-smalllaptop:w-full max-smalllaptop:h-full`}
              ></div>
              <Image
                src="/fullstack.png"
                className="w-[100%] z-[2] relative h-auto"
                width={377}
                height={236}
              />
              <h1 className="mt-[20.87px] z-[2] relative leading-[31.36px] mb-[17.13px] tracking-[-0.84px] font-['Graphikthin'] text-[#E5E5E5] text-[28px]">
                Full Stack Development{" "}
              </h1>
              <div className="flex mixblend relative z-[2] gap-[8px]">
                <p className="px-[8px] max-sm:px-[6px] py-[4px] rounded-[5px] text-[#B1B1B1] text-base max-sm:text-sm border-[1px] border-[#B1B1B1] max-smallphone:text-[10px]">
                  Software Development{" "}
                </p>
                <p className="px-[8px] max-sm:px-[6px] py-[4px] rounded-[5px] text-[#B1B1B1] text-base max-sm:text-sm border-[1px] border-[#B1B1B1] max-smallphone:text-[10px]">
                  Beginner friendly{" "}
                </p>
              </div>
            </div>
          </div>
        </div> */}
        <Image
          src="/qball.png"
          className="w-[797px] max-smalllaptop:w-[600px] h-auto max-hamburger:w-full max-md:w-full z-[2] relative h-auto"
          width={797}
          height={369}
        />
        <div className="max-hamburger:static absolute max-smalllaptop:left-[570px] max-lg:left-[540px] top-[122px] left-[730px] z-20">
          <p className="text-[20px] font-['Graphikthin'] text-[#E5E5E5] leading-[19.28px] mb-[17px]">
            Introducing
          </p>
          <h1 className="text-[64px] font-bold font-['Graphik'] mb-[45px] text-[#E5E5E5] max-hamburger:text-[45px] max-sm:text-[32px] max-hamburger:leading-[120%] max-md:w-full italic leading-[61.68px] max-sm:tracking-tight max-md:mb-[24px] tracking-[-2.56px] text-[#E5E5E5]">
            Quick Batch
          </h1>
          <p className="text-[20px] w-[440.78px] max-hamburger:w-full tracking-[-0.2px] font-['Graphikthin'] text-[#F7F7F7] leading-[25.28px] mb-[16px]">
            A no bullsh*t course for focused people who want to get placed
            within 6 months.
          </p>
          <p className="text-[16px] w-[417.46px] max-hamburger:w-full opacity-80 tracking-[-0.2px] font-['Graphikthin'] text-[#E0E0E0] leading-[24px] mb-[45px]">
            Become a master at Frontend, Backend, or Fullstack Development. Get
            placed in 6 months.
          </p>
          <div className="flex gap-[27px] max-sm:flex-col max-sm:gap-[12px] items-center">
            <Link className="max-sm:w-full" href={"/courses/quick-batch"}>
              <button className="text-[16px] max-sm:w-full font-semibold relative bg-[#30E29D] text-black h-[53px] w-[167px] rounded-[8px] leading-[24px]">
                Learn more{" "}
              </button>
            </Link>
            <div className="flex gap-[4px] items-center">
              <Image src="/profil.svg" width={28} height={28} />
              <p className="text-base opacity-80 text-[#E0E0E0]">
                Enrolled students:
              </p>
              <span className="text-base text-[#30E29D] font-semibold">
                112
              </span>
            </div>
          </div>
        </div>
      </section>
      <div className="pt-[102.57px] max-sm:py-[32px] max-sm:px-[20px] max-md:px-[40px] relative pb-[102.43px] pl-[80px] pr-[79px]">
        <div className="flex justify-between relative z-50 max-smalllaptop:gap-[50px]">
          <p className="w-[665px] font-['Graphikthin'] text-[64px] max-hamburger:text-[45px] max-sm:text-[32px] max-hamburger:leading-[120%] font-light leading-[61.68px] tracking-[-2.56px] max-sm:tracking-tight text-[#E5E5E5]">
            In a career gap? Need to brush up your skills?{" "}
          </p>
          {/* <Link href={"/courses"}>
            <button className="w-[205px] max-md:hidden h-[53px] bg-[#30E29D] rounded-[8px] font-bold text-[#292929] text-[16px] font-[19.2px]">
              Explore courses{" "}
            </button>
          </Link> */}
        </div>
        <div className="flex gap-[21px] mt-[67px] z-20  relative max-md:flex-col max-hamburger:flex-wrap max-hamburger:justify-center">
          <div
            className={`${style.container} w-[33%] max-hamburger:w-[45%] max-md:w-full`}
          >
            <div
              className={`pl-[28px] bg-[#1F1F1F] z-10 relative max-sm:px-[20px] max-sm:py-[16px] pb-[41.87px] pr-[29.85px] pt-[32px] rounded-[8px] ${style.bordergradient}`}
            >
              <div className="bg-[#1F1F1F] w-[105px] pt-[26.26px] pb-[26.01px] pl-[26.39px] pr-[26.88px] border-[1px] rounded-[6px] border-[#FFFFFF66] ">
                {" "}
                <Image
                  src="/book-reading--book-reading-learning.svg"
                  width={51.73}
                  height={51.73}
                />
              </div>
              <h1 className="w-[340px] max-bigscreen:w-[310px] max-xl:w-[250px] max-md:w-full max-xl:mt-[30px] font-['Graphikthin'] font-normal mt-[53.05px] mb-[18.16px] text-[32px] max-xl:text-[24px] max-xl:leading-[120%] leading-[40.32px] tracking-[-0.32px]">
                Courses on in-demand skills.{" "}
              </h1>
              <p className="w-[355.15px] max-bigscreen:w-[310px] max-xl:w-full h-[136.91px] max-xl:h-[165px] max-lg:h-[200px] max-md:h-auto opacity-80 text-[#E0E0E0] text-base font-['Graphikthin']">
                Choose from a catalogue of future-proof, in-demand skills to
                upskill on. All of the courses are curated keeping
                future-proofing in mind. Learn only what will stay relevant for
                the next 20 years.
              </p>
            </div>
          </div>
          <div
            className={`${style.container} w-[33%] max-hamburger:w-[45%] max-md:w-full`}
          >
            <div
              className={`pl-[28px] w-[33%]  max-sm:px-[20px] max-sm:py-[16px] pb-[41.87px] pr-[29.85px] pt-[32px] rounded-[8px] ${style.bordergradient}`}
            >
              <div className="bg-[#1F1F1F] w-[105px] px-[26.63px] py-[26.13px] border-[1px] rounded-[6px] border-[#FFFFFF66] ">
                {" "}
                <Image
                  src="/bag-suitcase-2--product-business-briefcase.svg"
                  width={51.73}
                  height={51.73}
                />
              </div>
              <h1 className="w-[340px] max-bigscreen:w-[310px] max-xl:w-[250px] max-md:w-full max-xl:mt-[30px] font-['Graphikthin'] font-normal mt-[53.05px] mb-[18.16px] text-[32px] max-xl:text-[24px] max-xl:leading-[120%] leading-[40.32px] tracking-[-0.32px]">
                100
                <span className="font-['Graphik'] opacity-90 font-light">
                  %
                </span>{" "}
                placement guarantee.{" "}
              </h1>
              <p className="w-[355.15px] max-bigscreen:w-[310px] max-xl:w-full h-[136.91px] max-xl:h-[165px] max-lg:h-[200px] max-md:h-auto opacity-80 text-[#E0E0E0] text-base font-['Graphikthin']">
                With our 100
                <span className="font-['Graphik'] font-light opacity-90">
                  %
                </span>{" "}
                Job Placement Guarantee, we're committed to your success. If you
                don't land a job within a specified timeframe after completing
                the program, we'll continue to work with you until you do.
              </p>
            </div>
          </div>
          <div
            className={`${style.container} w-[33%] max-hamburger:w-[45%] max-md:w-full`}
          >
            <div
              className={`pl-[28px] w-[33%] backdrop-blur-2xl max-sm:px-[20px] max-sm:py-[16px] pb-[41.87px] pr-[29.85px] pt-[32px] rounded-[8px] ${style.bordergradient}`}
            >
              <div className="bg-[#1F1F1F] w-[105px] pt-[22.3px] pb-[21.7px] pl-[22.95px] pr-[22.05px] border-[1px] rounded-[6px] border-[#FFFFFF66] ">
                {" "}
                <Image
                  src="/Calendar-3--Streamline-Ultimate.svg.svg"
                  width={60}
                  height={60}
                />
              </div>
              <h1 className="w-[340px] max-bigscreen:w-[310px] max-xl:w-[230px] max-md:w-full max-xl:mt-[30px] font-['Graphikthin'] font-normal mt-[53.05px] mb-[18.16px] text-[32px] max-xl:text-[24px] max-xl:leading-[120%] leading-[40.32px] tracking-[-0.32px]">
                Become job ready in 6 months.{" "}
              </h1>
              <p className="w-[355.15px] max-bigscreen:w-[310px] max-xl:w-full h-[136.91px] max-xl:h-[165px] max-lg:h-[200px] max-md:h-auto opacity-80 text-[#E0E0E0] text-base font-['Graphikthin']">
                Our courses are designed for individuals who are serious about
                making a quick and impactful career change. We understand the
                urgency, and we're here to deliver.
              </p>
            </div>
          </div>
        </div>
        {/* <Link href={"/courses"}>
          <button className="w-full max-md:block hidden mt-[40px] h-[53px] bg-[#30E29D] rounded-[8px] font-bold text-[#292929] text-[16px] font-[19.2px]">
            Explore courses{" "}
          </button>
        </Link> */}
      </div>
      <div className="px-[80px] pt-[77.94px] pb-[100px] flex justify-between max-sm:py-0 max-md:px-[40px] max-md:flex-col max-md:gap-[40px] max-sm:px-[20px]">
        <div>
          <h1 className="w-[665.36px] max-smalllaptop:w-full font-['Graphikthin'] max-bigscreen:w-[410px] text-[48px] max-sm:text-[32px] max-hamburger:leading-[120%] leading-[56.64px] tracking-[-1.92px] text-[#E5E5E5]">
            Refer us among your friends to get a boost in placement preference{" "}
          </h1>
          <p className="w-[393.32px] font-['Graphikthin'] mt-[30.06px] text-base text-[#E0E0E0] max-md:w-[450px] max-sm:w-full">
            Upskill together with your friends to our platform, while enjoying
            the special perks as a referrer.
          </p>
          <Link href={"/refer-us"}>
            <button className="w-[228px] mt-[46px] h-[53px] bg-[#30E29D] rounded-[8px] font-bold text-[#292929] text-[16px] font-[19.2px] max-md:hidden">
              Learn how to refer{" "}
            </button>
          </Link>
        </div>
        <Image
          src="/refer.png"
          className="mt-[18.06px] max-lg:w-full max-lg:h-auto max-smalllaptop:hidden max-md:block"
          width={522}
          height={345}
        />
        <Link href={"/refer-us"} className=" max-md:block hidden">
          <button className="w-full h-[53px] bg-[#30E29D] rounded-[8px] font-bold text-[#292929] text-[16px] font-[19.2px]">
            Learn how to refer{" "}
          </button>
        </Link>
      </div>
      <div className="pt-[102.57px] max-sm:py-20 max-sm:px-[20px] max-md:px-[40px] relative z-20 pb-[62.43px] pl-[80px] pr-[79px]">
        <div className="flex justify-between items-start max-lg:gap-[50px]">
          <p className="w-[903.7px] max-hamburger:w-full font-['Graphikthin'] text-[64px] max-hamburger:text-[45px] max-sm:text-[32px] max-hamburger:leading-[120%] font-light leading-[61.68px] tracking-[-2.56px] max-sm:tracking-tight text-[#E5E5E5]">
            Courses with 100
            <span className="font-['Graphik'] font-light">%</span> job guarantee
            at an unbeatable price.{" "}
          </p>
          {/* <Link href={"/courses"}>
            <button className="w-[205px] mt-[5px] max-md:hidden h-[53px] bg-[#30E29D] rounded-[8px] font-bold text-[#292929] text-[16px] font-[19.2px]">
              Explore courses{" "}
            </button>
          </Link> */}
        </div>
        <div className="flex gap-[21px] max-md:flex-col mt-[67px] max-hamburger:flex-wrap max-hamburger:justify-center">
          <div
            className={`${style.container}  w-[33%] max-hamburger:w-[45%] max-md:w-full`}
          >
            <div
              className={`pl-[28px] max-sm:px-[20px] max-sm:py-[16px] pb-[41.87px] pr-[29.85px] pt-[32px] rounded-[8px] ${style.bordergradient}`}
            >
              <div className="bg-[#1F1F1F] w-[105px] px-[28.53px] py-[26.03px] border-[1px] rounded-[6px] border-[#FFFFFF66] ">
                {" "}
                <Image
                  src="/bag-rupee--bag-payment-cash-money-finance.svg"
                  width={47.94}
                  height={51.93}
                />
              </div>
              <h1 className="w-[340px] max-bigscreen:w-[310px] max-xl:w-[250px] max-md:w-full max-xl:mt-[30px] font-['Graphikthin'] font-normal mt-[53.05px] mb-[18.16px] text-[32px] max-xl:text-[24px] max-xl:leading-[120%] leading-[40.32px] tracking-[-0.32px]">
                Pay 90% less than other course providers.
              </h1>
              <p className="w-[355.15px] max-bigscreen:w-[310px] max-xl:w-full h-[136.91px] max-xl:h-[165px] max-lg:h-[200px] max-md:h-auto opacity-80 text-[#E0E0E0] text-base font-['Graphikthin']">
                We believe education should never become a business. That is the
                only way forward. We charge fee only for sustenance.
              </p>
            </div>
          </div>
          <div
            className={`${style.container}  w-[33%] max-hamburger:w-[45%] max-md:w-full`}
          >
            <div
              className={`pl-[28px] max-sm:px-[20px] max-sm:py-[16px] pb-[41.87px] pr-[29.85px] pt-[32px] rounded-[8px] ${style.bordergradient}`}
            >
              <div className="bg-[#1F1F1F] w-[105px] px-[26.53px] py-[26.14px] border-[1px] rounded-[6px] border-[#FFFFFF66] ">
                {" "}
                <Image
                  src="/star-badge--ribbon-reward-like-social-rating-media.svg"
                  width={51.93}
                  height={51.73}
                />
              </div>
              <h1 className="w-[340px] max-bigscreen:w-[310px] max-xl:w-[250px] max-md:w-full max-xl:mt-[30px] font-['Graphikthin'] font-normal mt-[53.05px] mb-[18.16px] text-[32px] max-xl:text-[24px] max-xl:leading-[120%] leading-[40.32px] tracking-[-0.32px]">
                Courses curated by industry experts.{" "}
              </h1>
              <p className="w-[355.15px] max-bigscreen:w-[310px] max-xl:w-full h-[136.91px] max-xl:h-[165px] max-lg:h-[200px] max-md:h-auto opacity-80 text-[#E0E0E0] text-base font-['Graphikthin']">
                We brought together a band of industry experts who believe in
                the same cause as we do. Learn from thought leaders with 10+
                years of experience.
              </p>
            </div>
          </div>
          <div
            className={`${style.container}  w-[33%] max-hamburger:w-[45%] max-md:w-full`}
          >
            <div
              className={`pl-[28px] max-sm:px-[20px] max-sm:py-[16px] pb-[41.87px] pr-[29.85px] pt-[32px] rounded-[8px] ${style.bordergradient}`}
            >
              <div className="bg-[#1F1F1F] w-[105px] px-[26.63px] py-[26.13px] border-[1px] rounded-[6px] border-[#FFFFFF66] ">
                {" "}
                <Image
                  src="/bag-suitcase-2--product-business-briefcase.svg"
                  width={51.73}
                  height={51.73}
                />
              </div>
              <h1 className="w-[340px] max-bigscreen:w-[310px] max-xl:w-[250px] max-md:w-full max-xl:mt-[30px] font-['Graphikthin'] font-normal mt-[53.05px] mb-[18.16px] text-[32px] max-xl:text-[24px] max-xl:leading-[120%] leading-[40.32px] tracking-[-0.32px]">
                Placement support through our partners.{" "}
              </h1>
              <p className="w-[355.15px] max-bigscreen:w-[310px] max-xl:w-full h-[136.91px] max-xl:h-[165px] max-lg:h-[200px] max-md:h-auto opacity-80 text-[#E0E0E0] text-base font-['Graphikthin']">
                We help you all the way through from upskilling to getting
                placed. Parallel is partnered with 50+ companies to ease the
                placement process. Get placed in companies that set the trend
                for the future.
              </p>
            </div>
          </div>
        </div>
        {/* <Link href={"/courses"}>
          <button className="w-full max-md:block hidden mt-[40px] h-[53px] bg-[#30E29D] rounded-[8px] font-bold text-[#292929] text-[16px] font-[19.2px]">
            Explore courses{" "}
          </button>
        </Link> */}
      </div>
      <div className="pl-[80px] flex flex-col items-center max-md:px-[40px] max-sm:py-20 max-sm:px-[20px] pr-[79px] pt-[77.57px] pb-[139.43px]">
        <h1 className="w-[665.36px] max-hamburger:w-full text-center text-[#E5E5E5] font-['Graphikthin'] text-[64px] leading-[61.68px] tracking-[-2.56px] max-sm:tracking-tight max-hamburger:text-[45px] max-sm:text-[32px] max-hamburger:leading-[120%]">
          Upcoming courses
        </h1>
        <div className="pl-[2px] justify-center mt-[93px] flex flex-wrap gap-x-[94px] gap-y-[84px] max-sm:gap-[20px]">
          <div
            className={`px-[18px] relative card w-[413px] max-biggerscreen:w-[33%] max-md:w-full max-smalllaptop:w-[48.3%] border-white rounded-[10px] py-[20px] ${style.aicardborder}`}
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
                />
                <h1 className="mt-[20.87px] leading-[31.36px] mb-[17.13px] tracking-[-0.84px] font-['Graphikthin'] text-[#E5E5E5] text-[28px]">
                  Full Stack Development{" "}
                </h1>
                <div className="flex gap-[8px]">
                  <p className="px-[8px] max-sm:px-[6px] py-[4px] rounded-[5px] text-[#797979] text-base max-sm:text-sm border-[1px] border-[#797979]">
                    Software Development{" "}
                  </p>
                  <p className="px-[8px] max-sm:px-[6px] py-[4px] rounded-[5px] text-[#797979] text-base max-sm:text-sm border-[1px] border-[#797979]">
                    Beginner friendly{" "}
                  </p>
                </div>
                <div className="flex mt-[27.57px] gap-[12px]">
                  <p className="text-[#FFFFFF] leading-[28.8px] font-['General Sans'] text-[24px]">
                    ₹29,999
                  </p>
                  <p className="text-[#FF4747] text-sm">-50%</p>
                </div>
                <p className="line-through mt-[3px] text-[16px] font-['Graphikthin'] leading-[19.2px] opacity-60 text-[#ECECEC]">
                  ₹60,000
                </p>
                <Link className="relative z-30" href={"/courses/quick-batch"}>
                  <button className="w-[100%] mt-[14.57px] h-[53px] bg-[transparent] rounded-[8px] text-[#30E29D] button transition-all font-semibold border-[1px] border-[#30E29D] text-[16px] font-[19.2px]">
                    Learn more{" "}
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div
            className={`px-[18px] relative card w-[413px] max-biggerscreen:w-[33%] max-md:w-full max-smalllaptop:w-[48.3%] border-white rounded-[10px] py-[20px] ${style.aicardborder}`}
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
                />
                <h1 className="mt-[20.87px] leading-[31.36px] mb-[17.13px] tracking-[-0.84px] font-['Graphikthin'] text-[#E5E5E5] text-[28px]">
                  Backend Mastery{" "}
                </h1>
                <div className="flex gap-[8px]">
                  <p className="px-[8px] max-sm:px-[6px] py-[4px] rounded-[5px] text-[#797979] text-base max-sm:text-sm border-[1px] border-[#797979]">
                    Software Development{" "}
                  </p>
                  <p className="px-[8px] max-sm:px-[6px] py-[4px] rounded-[5px] text-[#797979] text-base max-sm:text-sm border-[1px] border-[#797979]">
                    Beginner friendly{" "}
                  </p>
                </div>
                <div className="flex mt-[27.57px] gap-[12px]">
                  <p className="text-[#FFFFFF] leading-[28.8px] font-['General Sans'] text-[24px]">
                    ₹9,999
                  </p>
                  <p className="text-[#FF4747] text-sm">-33%</p>
                </div>
                <p className="line-through mt-[3px] text-[16px] font-['Graphikthin'] leading-[19.2px] opacity-60 text-[#ECECEC]">
                  ₹15,000
                </p>
                <Link className="relative z-30" href={"/courses/quick-batch"}>
                  <button className="w-[100%] mt-[14.57px] h-[53px] bg-[transparent] rounded-[8px] text-[#30E29D] button transition-all font-semibold border-[1px] border-[#30E29D] text-[16px] font-[19.2px]">
                    Learn more{" "}
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div
            className={`px-[18px] relative card w-[413px] max-biggerscreen:w-[33%] max-md:w-full max-smalllaptop:w-[48.3%] border-white rounded-[10px] py-[20px] ${style.aicardborder}`}
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
                />
                <h1 className="mt-[20.87px] leading-[31.36px] mb-[17.13px] tracking-[-0.84px] font-['Graphikthin'] text-[#E5E5E5] text-[28px]">
                  Frontend Mastery{" "}
                </h1>
                <div className="flex gap-[8px]">
                  <p className="px-[8px] max-sm:px-[6px] py-[4px] rounded-[5px] text-[#797979] text-base max-sm:text-sm border-[1px] border-[#797979]">
                    Software Development{" "}
                  </p>
                  <p className="px-[8px] max-sm:px-[6px] py-[4px] rounded-[5px] text-[#797979] text-base max-sm:text-sm border-[1px] border-[#797979]">
                    Beginner friendly{" "}
                  </p>
                </div>
                <div className="flex mt-[27.57px] gap-[12px]">
                  <p className="text-[#FFFFFF] leading-[28.8px] font-['General Sans'] text-[24px]">
                    ₹9,999
                  </p>
                  <p className="text-[#FF4747] text-sm">-33%</p>
                </div>
                <p className="line-through mt-[3px] text-[16px] font-['Graphikthin'] leading-[19.2px] opacity-60 text-[#ECECEC]">
                  ₹15,000
                </p>
                <Link className="relative z-30" href={"/courses/quick-batch"}>
                  <button className="w-[100%] mt-[14.57px] h-[53px] bg-[transparent] rounded-[8px] text-[#30E29D] button transition-all font-semibold border-[1px] border-[#30E29D] text-[16px] font-[19.2px]">
                    Learn more{" "}
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div
            className={`px-[18px] card relative w-[413px] max-biggerscreen:w-[33%] max-md:w-full max-smalllaptop:w-[48.3%] rounded-[10px] py-[20px] ${style.aicardborder}`}
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
                />
                <h1 className="mt-[20.87px] leading-[31.36px] mb-[17.13px] tracking-[-0.84px] font-['Graphikthin'] text-[#E5E5E5] text-[28px]">
                  No-code, Low-code Development{" "}
                </h1>
                <div className="flex gap-[8px]">
                  <p className="px-[8px] max-sm:px-[6px] py-[4px] rounded-[5px] text-[#797979] text-base max-sm:text-sm border-[1px] border-[#797979]">
                    No-code, Low-code{" "}
                  </p>
                  <p className="px-[8px] max-sm:px-[6px] py-[4px] rounded-[5px] text-[#797979] text-base max-sm:text-sm border-[1px] border-[#797979]">
                    Beginner friendly{" "}
                  </p>
                </div>
                <div className="flex justify-between mt-[19px]">
                  <h1 className="text-[#ECECEC] leading-[28.8px] text-[24px] font-medium opacity-0">
                    Free
                  </h1>
                  {/* <p className="text-[#A1A1A1] text-[16px] leading-[19.2px] mt-[10px]">
                &lt; 18 Hours
              </p> */}
                </div>
                {/* <Link
                  className="relative z-30"
                  href={"/courses/low-code-no-code"}
                > */}
                <button className="w-[100%] relative z-30 mt-[15px] h-[53px] bg-[transparent] rounded-[8px] text-[#30E29D] transition-all button font-semibold border-[1px] border-[#30E29D] text-[16px] font-[19.2px]">
                  Coming Soon{" "}
                </button>
                {/* </Link> */}
              </div>
            </div>
          </div>
          <div
            className={`px-[18px] card relative w-[413px] max-biggerscreen:w-[33%] max-md:w-full max-smalllaptop:w-[48.3%] rounded-[10px] py-[20px] ${style.aicardborder}`}
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
                />
                <h1 className="mt-[20.87px] relative z-20 leading-[31.36px] mb-[17.13px] tracking-[-0.84px] font-['Graphikthin'] text-[#E5E5E5] text-[28px]">
                  Artificial Intelligence (AI/ML){" "}
                </h1>
                <div className="flex gap-[8px] relative z-20">
                  <p className="px-[8px] max-sm:px-[6px] py-[4px] rounded-[5px] text-[#797979] text-base max-sm:text-sm border-[1px] border-[#797979]">
                    AI{" "}
                  </p>
                  <p className="px-[8px] max-sm:px-[6px] py-[4px] rounded-[5px] text-[#797979] text-base max-sm:text-sm border-[1px] border-[#797979]">
                    Beginner friendly{" "}
                  </p>
                </div>
                <div className="flex justify-between relative z-20 mt-[49px]">
                  <h1 className="text-[#ECECEC] leading-[28.8px] text-[24px] font-medium opacity-0">
                    Free
                  </h1>
                  {/* <p className="text-[#A1A1A1] text-[16px] leading-[19.2px] mt-[10px]">
                &lt; 18 Hours
              </p> */}
                </div>
                {/* <Link
                  className="relative z-30"
                  href={"/courses/artificial-intelligence"}
                > */}
                <button className="relative z-30 w-[100%] mt-[15px] h-[53px] bg-[transparent] rounded-[8px] text-[#30E29D] transition-all font-semibold button border-[1px] border-[#30E29D] text-[16px] font-[19.2px]">
                  Coming Soon{" "}
                </button>
                {/* </Link> */}
              </div>
            </div>
          </div>
          <div
            className={`px-[18px] card relative w-[413px] max-biggerscreen:w-[33%] max-md:w-full max-smalllaptop:w-[48.3%] border-white rounded-[10px] py-[20px] ${style.aicardborder}`}
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
                />
                <h1 className="mt-[20.87px] leading-[31.36px] mb-[17.13px] tracking-[-0.84px] font-['Graphikthin'] text-[#E5E5E5] text-[28px]">
                  Data Analytics{" "}
                </h1>
                <div className="flex gap-[8px]">
                  <p className="px-[8px] max-sm:px-[6px] py-[4px] rounded-[5px] text-[#797979] text-base max-sm:text-sm border-[1px] border-[#797979]">
                    Data Analytics{" "}
                  </p>
                  <p className="px-[8px] max-sm:px-[6px] py-[4px] rounded-[5px] text-[#797979] text-base max-sm:text-sm border-[1px] border-[#797979]">
                    Beginner friendly{" "}
                  </p>
                </div>
                <div className="flex justify-between mt-[49px]">
                  <h1 className="text-[#ECECEC] leading-[28.8px] text-[24px] font-medium opacity-0">
                    Free
                  </h1>
                  {/* <p className="text-[#A1A1A1] text-[16px] leading-[19.2px] mt-[10px]">
                &lt; 18 Hours
              </p> */}
                </div>
                {/* <Link
                  className="relative z-30"
                  href={"/courses/data-analytics"}
                > */}
                <button className="w-[100%] relative z-30 mt-[15px] h-[53px] bg-[transparent] rounded-[8px] text-[#30E29D] transition-all font-semibold button border-[1px] border-[#30E29D] text-[16px] font-[19.2px]">
                  Coming Soon{" "}
                </button>
                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="px-[80px] max-md:px-[40px] max-sm:px-[20px] max-sm:py-0 relative py-[100px] flex flex-col justify-center items-center gap-[65px]">
        <div className="w-[100%] overflow-x-hidden h-[933.16px] absolute top-0">
          <div className={`${style.circle}`}></div>
        </div>
        <div className="w-[728.14px] max-hamburger:w-full">
          <p className="text-center text-[#E5E5E5] relative z-20 font-['Graphikthin'] font-light mb-[20px] text-[20px] leading-[19.28px]">
            Our partners
          </p>
          <h1 className="text-center text-[#E5E5E5] relative z-20 text-[64px] max-hamburger:text-[45px] max-sm:text-[32px] max-hamburger:leading-[120%] font-['Graphikthin'] leading-[61.68px] font-light tracking-[-2.56px] max-sm:tracking-tight ">
            Our partners that’ll help you with placements.
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
      <section className="relative z-20 py-[80px]">
        <p className="text-[20px] pl-20 max-md:px-[40px] max-sm:px-[20px] leading-[19.28px] text-[#E5E5E5] opacity-80 font-['Graphikthin'] font-light mb-[20px]">
          Success stories
        </p>
        <h1 className="w-[813.91px] max-hamburger:w-full ml-20 max-hamburger:px-20 max-hamburger:ml-0 max-md:px-[40px] max-sm:px-[20px] text-[64px] max-hamburger:text-[45px] max-sm:text-[32px] max-hamburger:leading-[120%] max-hamburger:tracking-normal leading-[61.68px] font-['Graphikthin'] font-light text-[#E5E5E5] mb-[58px] max-sm:mb-[50px] tracking-[-2.56px]">
          People benefitting from our new age method of learning.{" "}
        </h1>
        <Success />
      </section>
      <div className="pt-[102.57px] max-sm:py-20 max-sm:px-[20px] max-md:px-[40px] relative z-20 pb-[62.43px] pl-[80px] pr-[79px]">
        <h1 className="w-[600px] max-hamburger:w-full  max-hamburger:text-[45px] max-sm:text-[32px] max-hamburger:leading-[120%] text-[64px] leading-[61.68px] font-['Graphikthin'] tracking-[-2.56px] max-sm:tracking-tight text-[#E5E5E5]">
          Learn from leading industry experts
        </h1>
        <div className="flex gap-[21px] max-md:flex-col mt-[67px] max-hamburger:flex-wrap max-hamburger:justify-center">
          <div
            className={`${style.container}  w-[33%] max-hamburger:w-[45%] max-md:w-full`}
          >
            <div
              className={`pl-[28px] max-sm:px-[20px] max-sm:py-[16px] pb-[41.87px] pr-[29.85px] pt-[32px] rounded-[8px] ${style.bordergradient}`}
            >
              <Image
                src="/babu.png"
                className=""
                width={125.17}
                height={123.97}
              />
              <h1 className="w-[340px] max-bigscreen:w-[310px] max-xl:w-[250px] max-md:w-full max-xl:mt-[30px] font-['Graphikthin'] font-normal mt-[53.05px] mb-[18.16px] text-[32px] max-xl:text-[24px] max-xl:leading-[120%] leading-[40.32px] tracking-[-0.32px]">
                Buchi Babu Muvva
              </h1>
              <p className="w-[354.85px] max-bigscreen:w-[310px] max-xl:w-full opacity-80 text-[#E0E0E0] text-base">
                Dr. Butchi Babu Muvva, PhD has 30 years of diverse experience in
                Industry and academia. He has worked with customer-focused
                organizations spanning across different industry sectors
                including Pharma, Automobile, IT & Education. He has worked in
                various capacities like EDP Manager on projects related to IT
                Implementation, Product Management, Operations planning,
                Sourcing, and warehouse, Introduced computerization in POM area,
                and support Quality & Business Analytics.{" "}
              </p>
            </div>
          </div>
          <div
            className={`${style.container}  w-[33%] max-hamburger:w-[45%] max-md:w-full`}
          >
            <div
              className={`pl-[28px] max-sm:px-[20px] max-sm:py-[16px] pb-[41.87px] pr-[29.85px] pt-[32px] rounded-[8px] ${style.bordergradient}`}
            >
              <Image
                src="/syed.png"
                className=""
                width={125.17}
                height={123.97}
              />
              <h1 className="w-[340px] max-bigscreen:w-[310px] max-xl:w-[250px] max-md:w-full max-xl:mt-[30px] font-['Graphikthin'] font-normal mt-[53.05px] mb-[18.16px] text-[32px] max-xl:text-[24px] max-xl:leading-[120%] leading-[40.32px] tracking-[-0.32px]">
                Syed Saif
              </h1>
              <p className="w-[354.85px] max-bigscreen:w-[310px] max-xl:w-full opacity-80 text-[#E0E0E0] text-base">
                AI and Data Analytics Expert with 10+ years of experience, he
                has successfully scaled up software businesses from $100K to
                $10M in revenue and specializes in building world-class tech
                teams from the ground up. He has assisted many well-funded
                start-ups, brands, and enterprises across the globe to meet
                their technological requirements, and worked on projects that
                won international design accolades.
              </p>
            </div>
          </div>
          <div
            className={`${style.container}  w-[33%] max-hamburger:w-[45%] max-md:w-full`}
          >
            <div
              className={`pl-[28px] max-sm:px-[20px] max-sm:py-[16px] pb-[41.87px] pr-[29.85px] pt-[32px] rounded-[8px] ${style.bordergradient}`}
            >
              <Image
                src="/ajit.png"
                className=""
                width={125.17}
                height={123.97}
              />
              <h1 className="w-[340px] max-bigscreen:w-[310px] max-xl:w-[250px] max-md:w-full max-xl:mt-[30px] font-['Graphikthin'] font-normal mt-[53.05px] mb-[18.16px] text-[32px] max-xl:text-[24px] max-xl:leading-[120%] leading-[40.32px] tracking-[-0.32px]">
                Ajith Jagadish
              </h1>
              <p className="w-[354.85px] max-bigscreen:w-[310px] max-xl:w-full opacity-80 text-[#E0E0E0] text-base">
                Ajith Jagadish is a seasoned Health and Wellness coach with over
                a decade of experience in Business Development and Sales. Ajith
                combines his expertise as a certified Biomechanics Specialist
                with his experience as an international athlete. He has
                represented India in various Ultimate Frisbee tournaments. His
                diverse background uniquely positions him to guide students in
                developing their personalities, preparing for interviews, and
                shaping successful careers.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <section className="px-20 max-md:px-[40px] max-sm:px-[20px] max-sm:py-0 pt-[45px] pb-[94.24px] flex justify-between max-hamburger:gap-[40px] flex-col">
        <div className="w-[640px] shadow-inner overflow-hidden max-md:w-full h-[530.76px] max-sm:h-[300.76px]">
          <div ref={leadinganimation} className="h-[705px] max-sm:h-auto">
            <div
              className={`w-[630px] max-hamburger:w-full max-md:w-full max-sm:pl-[20px] max-hamburger:gap-[20px] pl-[28.7px] flex gap-[40px] items-center h-[159px] max-sm:h-[80px] rounded-[8px] ${style.learncard}`}
            >
              {" "}
              <Image
                src="/Frame 1000002775.png"
                width={107.16}
                height={107.16}
                className="max-sm:w-[50px]"
              />
              <div>
                <h1 className="text-[#E5E5E5] max-hamburger:text-[24px] max-hamburger:leading-[120%] text-[36px] leading-[40.32px] tracking-[-0.98px] text-[#E5E5E5] font-['Graphikthin']">
                  Prashant Hegde
                </h1>
                <p className="text-[#A1A1A1] mt-[4px] max-hamburger:text-sm">
                  Senior Designer, Spotify
                </p>
              </div>
            </div>
            <div
              className={`w-[630px] max-hamburger:w-full max-md:w-full max-sm:pl-[20px] max-hamburger:gap-[20px] mt-[20px] pl-[28.7px] flex gap-[40px] items-center h-[159px] max-sm:h-[80px] rounded-[8px] ${style.learncard}`}
            >
              {" "}
              <Image
                src="/Frame 1000002775.png"
                width={107.16}
                height={107.16}
                className="max-sm:w-[50px]"
              />
              <div>
                <h1 className="text-[#E5E5E5] max-hamburger:text-[24px] max-hamburger:leading-[120%] text-[36px] leading-[40.32px] tracking-[-0.98px] text-[#E5E5E5] font-['Graphikthin']">
                  Prashant Hegde
                </h1>
                <p className="text-[#A1A1A1] mt-[4px] max-hamburger:text-sm">
                  Senior Designer, Spotify
                </p>
              </div>
            </div>
            <div
              className={`w-[630px] max-hamburger:w-full max-md:w-full max-sm:pl-[20px] max-hamburger:gap-[20px] mt-[20px] pl-[28.7px] flex gap-[40px] items-center h-[159px] max-sm:h-[80px] rounded-[8px] ${style.learncard}`}
            >
              {" "}
              <Image
                src="/Frame 1000002775.png"
                width={107.16}
                height={107.16}
                className="max-sm:w-[50px]"
              />
              <div>
                <h1 className="text-[#E5E5E5] max-hamburger:text-[24px] max-hamburger:leading-[120%] text-[36px] leading-[40.32px] tracking-[-0.98px] text-[#E5E5E5] font-['Graphikthin']">
                  Prashant Hegde
                </h1>
                <p className="text-[#A1A1A1] mt-[4px] max-hamburger:text-sm">
                  Senior Designer, Spotify
                </p>
              </div>
            </div>
            <div
              className={`w-[630px] max-hamburger:w-full max-md:w-full max-sm:pl-[20px] max-hamburger:gap-[20px] mt-[20px] pl-[28.7px] flex gap-[40px] items-center h-[159px] max-sm:h-[80px] rounded-[8px] ${style.learncard}`}
            >
              {" "}
              <Image
                src="/Frame 1000002775.png"
                width={107.16}
                height={107.16}
                className="max-sm:w-[50px]"
              />
              <div>
                <h1 className="text-[#E5E5E5] max-hamburger:text-[24px] max-hamburger:leading-[120%] text-[36px] leading-[40.32px] tracking-[-0.98px] text-[#E5E5E5] font-['Graphikthin']">
                  Prashant Hegde
                </h1>
                <p className="text-[#A1A1A1] mt-[4px] max-hamburger:text-sm">
                  Senior Designer, Spotify
                </p>
              </div>
            </div>
            <div
              className={` mt-[20px] max-hamburger:w-full max-md:w-full w-[630px] max-sm:pl-[20px] max-hamburger:gap-[20px] pl-[28.7px] flex gap-[40px] items-center h-[159px] max-sm:h-[80px] rounded-[8px] ${style.learncard}`}
            >
              {" "}
              <Image
                src="/Frame 1000002775.png"
                width={107.16}
                height={107.16}
                className="max-sm:w-[50px]"
              />
              <div>
                <h1 className="text-[#E5E5E5] max-hamburger:text-[24px] max-hamburger:leading-[120%] text-[36px] leading-[40.32px] tracking-[-0.98px] text-[#E5E5E5] font-['Graphikthin']">
                  Prashant Hegde
                </h1>
                <p className="text-[#A1A1A1] mt-[4px] max-hamburger:text-sm">
                  Senior Designer, Spotify
                </p>
              </div>
            </div>
            <div
              className={` mt-[20px] max-hamburger:w-full max-md:w-full w-[630px] max-sm:pl-[20px] max-hamburger:gap-[20px] pl-[28.7px] flex gap-[40px] items-center h-[159px] max-sm:h-[80px] rounded-[8px] ${style.learncard}`}
            >
              {" "}
              <Image
                src="/Frame 1000002775.png"
                width={107.16}
                className="max-sm:w-[50px]"
                height={107.16}
              />
              <div>
                <h1 className="text-[#E5E5E5] max-hamburger:text-[24px] max-hamburger:leading-[120%] text-[36px] leading-[40.32px] tracking-[-0.98px] text-[#E5E5E5] font-['Graphikthin']">
                  Prashant Hegde
                </h1>
                <p className="text-[#A1A1A1] mt-[4px] max-hamburger:text-sm">
                  Senior Designer, Spotify
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="w-[100%] h-[614px] max-sm:h- max-sm:h-[300px] max-sm:mt-10 max-sm:py-10 overflow-hidden flex justify-center items-center relative">
        <Image
          src="/Frame 83.svg"
          className={`absolute max-md:hidden z-20 top-[-75px] bg-transparent pl-[78.14px] h-[747.06px] w-[100%] pr-[76.27px] ${style.imagecontainer}`}
          width={107.16}
          height={107.16}
        />
        <h1 className="w-[665.36px] max-sm:w-full z-20 relative max-sm:px-[20px] font-['Graphikthin'] text-[64px] max-hamburger:text-[45px] max-sm:text-[32px] max-hamburger:leading-[120%] max-smallphone:tracking-tight leading-[61.68px] tracking-[-2.56px] max-sm:tracking-tight text-[#E5E5E5] text-center">
          In-demand skills that guarantee jobs{" "}
        </h1>
        <div className="w-[100%] z-[2] overflow-hidden absolute bottom-[-200px] h-[966.17px]">
          <div className={`${style.circle2}`}></div>
          <div className={`${style.circle1}`}></div>
        </div>
      </section>
      <section className="w-[100%] max-xl:h-[1150px] max-hamburger:h-auto max-xl:overflow-hidden px-[80px] max-sm:px-[20px] max-md:px-[40px] max-sm:py-20 pt-[143px] pb-[166.13px] relative">
        <p className="text-[#E5E5E5] text-[20px] leading-[19.28px] font-['Graphikthin'] mb-[18px] opacity-90">
          Looking for different ways to engage your students?
        </p>
        <h1 className="w-[665.36px] z-[2] text-[64px] max-smalllaptop:w-full font-['Graphikthin'] text-[64px] max-hamburger:text-[45px] max-sm:text-[32px] max-hamburger:leading-[120%] leading-[61.68px] mb-[32px] font-['Graphikthin'] text-[#E5E5E5] tracking-[-2.56px] max-sm:tracking-tight">
          Host a skill focused workshop at your college.{" "}
        </h1>
        <p className="text-base max-sm:text-sm w-[258.29px] opacity-80 font-['Graphikthin']">
          Get in touch with our representative for further details.
        </p>
        <div className="flex mt-[32px] max-md:flex-col gap-[32px]">
          <Link href={"/workshops"}>
            <button className="w-[295px] max-md:w-full h-[53px] bg-[#30E29D] rounded-[8px] font-bold text-[#292929] text-[16px] font-[19.2px]">
              Learn About Our Workshops{" "}
            </button>
          </Link>
          <Link href={"/contact-us"}>
            <button className="w-[165px] max-md:w-full h-[53px] bg-[transparent] rounded-[8px] border-[1px] border-[#30E29D] font-bold text-[#30E29D] text-[16px] font-[19.2px]">
              Contact Us{" "}
            </button>
          </Link>
        </div>
        <Image
          src="/workshop.png"
          className="w-[817.08px] max-xl:w-[600px] max-xl:top-[0px] max-smalllaptop:right-0 max-smalllaptop:left-[10%] max-hamburger:hidden max-smalllaptop:w-[60%] max-smalllaptop:relative absolute right-[20px] top-[-80px]"
          width={817.08}
          height={107.16}
        />
        <Image
          src="/rocket.png"
          className="max-hamburger:block hidden w-[calc(100%-80px)] max-sm:w-full z-[10]"
          width={507.16}
          height={107.16}
        />
      </section>
      <Upskill />
      <Footer />
    </>
  );
}
