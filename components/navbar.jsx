import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useRef, useState, useEffect } from "react";

export default function Navbar() {
  const [openHamburger, setOpenHamburger] = useState(false);
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  const Hamburger = useRef(null);
  const Menu = useRef(null);
  const Menuitems1 = useRef(null);
  const Menuitems2 = useRef(null);
  const Menuitems3 = useRef(null);
  const Menuitems4 = useRef(null);
  const Menuitems5 = useRef(null);
  const Menuitems6 = useRef(null);
  const Menuitems7 = useRef(null);
  const Menuitems8 = useRef(null);
  const Menuitems9 = useRef(null);
  const Cross = useRef(null);
  const Background = useRef(null);
  const handleHamburger = () => {
    setOpenHamburger(true);
  };
  const handleHamburgerClose = () => {
    setOpenHamburger(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (width <= 980) {
      if (openHamburger === true) {
        if (height <= 550) {
          gsap.to(Menu.current, 0, {
            top: "80px",
            height: "calc(100vh - 100px)",
          });
        }
        if (height <= 480) {
          gsap.to(Menuitems1.current, 0, {
            fontSize: "16px",
            lineHeight: "24px",
          });
          gsap.to(Menuitems2.current, 0, {
            fontSize: "16px",
            lineHeight: "24px",
          });
          gsap.to(Menuitems3.current, 0, {
            fontSize: "16px",
            lineHeight: "24px",
          });
          gsap.to(Menuitems4.current, 0, {
            fontSize: "16px",
            lineHeight: "24px",
          });
          gsap.to(Menuitems5.current, 0, {
            fontSize: "16px",
            lineHeight: "24px",
          });
          gsap.to(Menuitems6.current, 0, {
            fontSize: "16px",
            lineHeight: "24px",
          });
          gsap.to(Menuitems7.current, 0, {
            fontSize: "16px",
            lineHeight: "24px",
          });
          gsap.to(Menuitems8.current, 0, {
            fontSize: "16px",
            lineHeight: "24px",
          });
        }
      }
    }
  }, [openHamburger, width, height]);

  return (
    <nav className="px-[80px] flex bg-[#00000033] backdrop-blur max-md:px-[40px] max-sm:px-[20px] max-hamburger:items-center top-0 sticky z-[99] justify-between pt-[39px] pb-[22px]">
      <Link href={"/"} className="flex gap-[2.74px]">
        <Image
          src="/Frame 96.svg"
          className="py-[7px]"
          width={139.45}
          height={26}
        />
      </Link>
      <div
        ref={Hamburger}
        onClick={handleHamburger}
        className={`${
          openHamburger ? "hidden" : "hidden max-hamburger:block"
        } h-[20px] w-[80px] border-t-[2px] border-b-[2px] border-white curser-pointer`}
      ></div>
      <div
        ref={Cross}
        onClick={handleHamburgerClose}
        className={`${
          openHamburger ? "block" : "hidden"
        } w-[40px] text-3xl z-50 invert text-right font-['Graphikthin'] border-white curser-pointer`}
      >
        {" "}
        <Image src="/close.svg" width={36} height={36} />
      </div>
      <div
        ref={Background}
        className={`${
          openHamburger ? "block opacity-1" : "hidden max-hamburger:opacity-0"
        } bg-black transition-opacity duration-500 blur-[5px] absolute w-[100%] h-[100vh] top-0 left-0`}
      ></div>
      <ul
        ref={Menu}
        className={`${
          openHamburger ? "flex opacity-1" : "max-hamburger:hidden max-hamburger:opacity-0"
        } list-none transition-opacity duration-500 flex gap-[52px] max-xl:gap-[40px] max-smalllaptop:gap-[15px] max-sm:gap-[20px] max-sm:top-[101px] max-sm:h-[calc(100vh-121px)] max-hamburger:flex-col max-hamburger:absolute max-sm:h-[calc(100vh-181px)] max-hamburger:top-[150px] max-hamburger:text-right max-hamburger:w-[calc(100%-160px)] max-md:w-[calc(100%-80px)] max-sm:w-[calc(100%-40px)]`}
      >
        <Link
          href={"/courses/quick-batch"}
          ref={Menuitems9}
          className="text-[16px] italic text-[#30E29D] font-semibold relative leading-[24px] max-hamburger:py-0 py-[8px]"
        >
          QUICK BATCH
        </Link>
        <Link
          href={"/about"}
          ref={Menuitems1}
          className="text-[16px] relative leading-[24px] max-hamburger:py-0 py-[8px]"
        >
          About
        </Link>
        <Link
          href={"/workshops"}
          ref={Menuitems2}
          className="text-[16px] relative leading-[24px] py-[8px] max-hamburger:py-0"
        >
          Workshops
        </Link>
        <Link
          href={"/courses"}
          ref={Menuitems3}
          className="text-[16px] relative leading-[24px] py-[8px] max-hamburger:py-0"
        >
          Courses
        </Link>
        {/* <Link
          href={"/fees"}
          ref={Menuitems4}
          className="text-[16px] relative leading-[24px] py-[8px] max-hamburger:py-0"
        >
          Fees
        </Link> */}
        <Link
          href={"/hire-from-us"}
          ref={Menuitems5}
          className="text-[16px] relative leading-[24px] py-[8px] max-hamburger:py-0"
        >
          Hire from us
        </Link>
        <Link
          href={"/refer-us"}
          ref={Menuitems6}
          className="text-[16px] relative leading-[24px] py-[8px] max-hamburger:py-0"
        >
          Refer us
        </Link>
        <Link
          href={"/contact-us"}
          ref={Menuitems8}
          className="text-[16px] hidden max-smallphone:block relative leading-[24px] py-[8px] max-hamburger:py-0"
        >
          Contact us
        </Link>
        <div className="flex max-hamburger:justify-end">
          <Link
            href={"/signup"}
            ref={Menuitems7}
            className="text-[16px] max-lg:px-[16px] relative bg-[#30E29D] max-hamburger:bottom-0 max-sm:w-full max-hamburger:text-center max-hamburger:w-[300px] text-black py-[8px] px-[24px] rounded-[8px] leading-[24px] py-[8px] font-semibold"
          >
            Sign up
          </Link>
        </div>
      </ul>
    </nav>
  );
}
