import Image from "next/image";
import style from "@/styles/style.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pl-[80px] max-md:px-[40px] max-sm:px-[20px] pt-[125.58px] pb-[14px] flex flex-col gap-[100px] max-sm:gap-[80px] relative pr-[76px]">
      <div className="overflow-hidden max-smallphone:hidden absolute w-[100%] bottom-[0] left-0 h-[1449.12px]">
        <div
          className={`w-[100%] h-[849.12px] left-[15.49px] absolute bottom-[275.86px] ${style.footer}`}
        ></div>
      </div>
      <div className="flex justify-between max-sm:flex-col max-hamburger:gap-[50px] z-20">
        <div className="flex w-[390px] widescreen:w-[700px] max-sm:w-full flex-wrap gap-x-[27px] gap-y-[41.34px]">
          <div className="w-[190px] widescreen:w-[40%] widestscreen:w-[50%]">
            <h1 className="text-[#E5E5E5] opacity-80 text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]">
              Address
            </h1>
            <p className="mt-[12px] text-[#E5E5E5] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]">
              Wework Galaxy Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka
              560001
            </p>
          </div>
          <div className="flex flex-col widescreen:w-[30%] w-[76px]">
            <h1 className="text-[#E5E5E5] opacity-80 mb-[10px] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]">
              Follow us
            </h1>
            <a
              href={
                "https://www.instagram.com/parallel.edu_/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
              }
              target="_blank"
              className="mt-[12px] text-[#E5E5E5] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] hover:underline cursor-pointer hover:decoration-solid"
            >
              Instagram
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/parallel-edutech-pvt-ltd/"
              className="mt-[4px] widescreen:mt-[6px] widestscreen:mt-[8px] text-[#E5E5E5] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] hover:underline cursor-pointer hover:decoration-solid"
            >
              Linkedin
            </a>
            <p className="mt-[4px] widescreen:mt-[6px] widestscreen:mt-[8px] text-[#E5E5E5] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] hover:underline cursor-pointer hover:decoration-solid">
              YouTube
            </p>
          </div>
          <div className="w-[144px] widescreen:w-full">
            <h1 className="text-[#E5E5E5] opacity-80 text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]">
              Contact us
            </h1>
            <p className="mt-[12px] text-[#E5E5E5] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] hover:underline cursor-pointer hover:decoration-solid">
              hello@paralleledu.com
            </p>
            <p className="mt-[4px] widescreen:mt-[6px] widestscreen:mt-[8px] text-[#E5E5E5] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]">
              +91 96868 43606{" "}
            </p>
          </div>
          <div className="opacity-70 widescreen:w-full max-smallphone:hidden">
            <p className="mt-[4px] widescreen:mt-[6px] widestscreen:mt-[8px] text-[#E5E5E5] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]">
              Copyright @ ParallelEduTech. All Rights Reserved{" "}
            </p>
            <div className="flex mt-[5.37px] gap-[13.9px]">
              <p className="text-[#E5E5E5] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] hover:underline cursor-pointer hover:decoration-solid">
                Privacy Policy
              </p>
              <p className="text-[#E5E5E5] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] hover:underline cursor-pointer hover:decoration-solid">
                Terms of Service
              </p>
            </div>
          </div>
        </div>
        <div className="flex max-hamburger:gap-[50px] max-md:flex-wrap-reverse gap-[127.27px]">
          <div className="opacity-70 hidden max-smallphone:block widescreen:w-full">
            <p className="mt-[4px] widescreen:mt-[6px] widestscreen:mt-[8px] text-[#E5E5E5] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]">
              Copyright @ ParallelEduTech Pvt Ltd. All Rights Reserved{" "}
            </p>
            <div className="flex mt-[5.37px] gap-[13.9px]">
              <p className="text-[#E5E5E5] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] hover:underline cursor-pointer hover:decoration-solid">
                Privacy Policy
              </p>
              <p className="text-[#E5E5E5] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] hover:underline cursor-pointer hover:decoration-solid">
                Terms of Service
              </p>
            </div>
          </div>
          <div className="w-[197.73px] widescreen:w-[300px] widestscreen:w-[500px] max-sm:w-full flex flex-col">
            <h1 className="text-[#E5E5E5] opacity-80 max-smallphone:mb-[10px] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]">
              Courses
            </h1>
            <Link
              href={"/courses/quick-batch"}
              className="mt-[4px] widescreen:mt-[6px] widestscreen:mt-[8px] hover:underline cursor-pointer hover:decoration-solid text-[#E5E5E5] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]"
            >
              Frontend Mastery{" "}
            </Link>
            <Link
              href={"/courses/quick-batch"}
              className="mt-[4px] widescreen:mt-[6px] widestscreen:mt-[8px] hover:underline cursor-pointer hover:decoration-solid text-[#E5E5E5] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]"
            >
              Backend Mastery{" "}
            </Link>
            <Link
              href={"/courses/quick-batch"}
              className="mt-[4px] widescreen:mt-[6px] widestscreen:mt-[8px] hover:underline cursor-pointer hover:decoration-solid text-[#E5E5E5] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]"
            >
              Full Stack Development{" "}
            </Link>
            <h1 className="text-[#E5E5E5] mt-[16px] opacity-70 max-smallphone:mb-[10px] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]">
              Coming soon
            </h1>
            <p className="mt-[4px] widescreen:mt-[6px] widestscreen:mt-[8px] widescreen:mt-[6px] widestscreen:mt-[8px] opacity-70 hover:underline cursor-pointer hover:decoration-solid text-[#E5E5E5] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]">
              Low-Code/No-Code Development
            </p>
            <p className="mt-[4px] widescreen:mt-[6px] widestscreen:mt-[8px] opacity-70 hover:underline cursor-pointer hover:decoration-solid text-[#E5E5E5] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]">
              Artificial Intelligence (AI/ML)
            </p>
            <p className="mt-[4px] widescreen:mt-[6px] widestscreen:mt-[8px] opacity-70 hover:underline cursor-pointer hover:decoration-solid text-[#E5E5E5] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]">
              Data Analytics
            </p>
          </div>
          <div className="w-[92px] widescreen:w-[200px] flex flex-col">
            <h1 className="text-[#E5E5E5] opacity-80 text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]">
              Company
            </h1>
            <Link
              href={"/about"}
              className="mt-[12px] hover:underline cursor-pointer hover:decoration-solid w-[92px] widescreen:w-full text-[#E5E5E5] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]"
            >
              About us
            </Link>
            <Link
              href={"/workshops"}
              className="mt-[4px] widescreen:mt-[6px] widestscreen:mt-[8px] hover:underline cursor-pointer hover:decoration-solid w-[92px] widescreen:w-full text-[#E5E5E5] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]"
            >
              Workshops
            </Link>
            <Link
              href={"/courses"}
              className="mt-[4px] widescreen:mt-[6px] widestscreen:mt-[8px] hover:underline cursor-pointer hover:decoration-solid w-[92px] widescreen:w-full text-[#E5E5E5] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]"
            >
              Courses
            </Link>
            {/* <Link
              href={"/fees"}
              className="mt-[4px] widescreen:mt-[6px] widestscreen:mt-[8px] hover:underline cursor-pointer hover:decoration-solid w-[92px] widescreen:w-full text-[#E5E5E5] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]"
            >
              Fees
            </Link> */}
            <Link
              href={"/contact-us"}
              className="mt-[4px] widescreen:mt-[6px] widestscreen:mt-[8px] text-[#E5E5E5] hover:underline cursor-pointer hover:decoration-solid w-[92px] widescreen:w-full text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]"
            >
              Contact Us
            </Link>
            {/* <Link
              href={"/isa"}
              className="mt-[4px] widescreen:mt-[6px] widestscreen:mt-[8px] hover:underline cursor-pointer hover:decoration-solid w-[92px] widescreen:w-full text-[#E5E5E5] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]"
            >
              ISA
            </Link> */}
            <Link
              href={"/hire-from-us"}
              className="mt-[4px] widescreen:mt-[6px] widestscreen:mt-[8px] text-[#E5E5E5] hover:underline cursor-pointer hover:decoration-solid w-[92px] widescreen:w-full text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]"
            >
              Hire from us
            </Link>
            <Link
              href={"/refer-us"}
              className="mt-[4px] widescreen:mt-[6px] widestscreen:mt-[8px] text-[#E5E5E5] hover:underline cursor-pointer hover:decoration-solid w-[92px] widescreen:w-full text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%]"
            >
              Refer us
            </Link>
          </div>
        </div>
      </div>
      <Image
        src="/footerimg.svg"
        className="pl-[0.05px] pr-[3.89px] w-full"
        width={139.45}
        height={26}
        alt="Perallel Image"
      />
    </footer>
  );
}
