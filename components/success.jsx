import Image from "next/image";
import { useRef, useEffect } from "react";
import { Linear, gsap } from "gsap";
import style from "@/styles/style.module.css";

export default function Success() {
  const successanimation = useRef(null);

  useEffect(() => {
    let tl = gsap.timeline({ repeat: -1 });
    const width = window.innerWidth;

    if (width > 639 && width < 1900) {
      gsap
        .timeline({ repeat: -1 })
        .fromTo(
          successanimation.current,
          { x: -150 },
          { ease: Linear.easeNone, x: -2103, duration: 20 }
        );
      } else if (width < 640) {
        gsap
          .timeline({ repeat: -1 })
          .fromTo(
            successanimation.current,
            { x: -150 },
            { ease: Linear.easeNone, x: -1508, duration: 20 }
          );
      } else if (width >= 1900) {
        gsap
          .timeline({ repeat: -1 })
          .fromTo(
            successanimation.current,
            { x: -150 },
            { ease: Linear.easeNone, x: -2488, duration: 20 }
          );
      }
    return () => {
      tl.kill();
    };
  });
  return (
    <div className="overflow-x-hidden w-full">
      <div
        ref={successanimation}
        className="flex gap-[20px] ml-20 max-sm:ml-[25px] max-md:ml-[50px] w-[5880px] widescreen:w-[7000px]"
      >
        <div className={`${style.container} w-[468px] max-sm:w-[320px] widescreen:w-[600px]`}>
          <div
            className={`max-sm:p-[20px] rounded-[6px] pl-[27.94px] pt-[33.07px] pr-[24.8px] pb-[39.11px] h-[282px] max-sm:h-auto ${style.bordergradient}`}
          >
            <div className="flex gap-[28.36px]">
              <Image
                src="/Frame 1000002775.png"
                className="max-sm:w-[80px] max-sm:h-[80px]"
                width={93.71}
                height={93.71}
              />
              <div>
                <h1 className="text-[36px] widescreen:text-[40px] widestscreen:text-[50px] widescreen:leading-[120%] widescreen:text-[40px] widestscreen:text-[50px] widescreen:leading-[120%] max-sm:text-[24px] max-sm:leading-[120%] leading-[40.32px] tracking-[-0.98px] text-[#E5E5E5] font-['Graphikthin']">
                  Ravi Teja
                </h1>
                <h2 className="text-[#A1A1A1] text-[20px] widescreen:text-[25px] widestscreen:text-[30px] widescreen:leading-[120%] max-sm:text-base widescreen:text-[25px] widestscreen:text-[30px] widescreen:leading-[150%] leading-[24px] font-['Graphikthin'] font-normal opacity-60 mt-[6px] max-sm:mt-[3px] max-sm:mb-[12px]">
                  Placed on 30th May 2024{" "}
                </h2>
                {/* <Image
                  src="/razor.svg"
                  className="py-[9.06px]"
                  width={98.24}
                  height={20.89}
                /> */}
              </div>
            </div>
            <p className="opacity-80 max-sm:text-sm max-sm:mt-[20px] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] text-[#E0E0E0] mt-[34.73px]">
              I cannot believe I got placed in 4 months. I was finding a job for
              almost 1 year.
            </p>
          </div>
        </div>
        <div className={`${style.container} w-[468px] max-sm:w-[320px] widescreen:w-[600px]`}>
          <div
            className={`max-sm:p-[20px] rounded-[6px] pl-[27.94px] pt-[33.07px] pr-[24.8px] pb-[39.11px] h-[282px] max-sm:h-auto ${style.bordergradient}`}
          >
            {" "}
            <div className="flex gap-[28.36px]">
              <Image
                src="/Frame 1000002775.png"
                className="max-sm:w-[80px] max-sm:h-[80px]"
                width={93.71}
                height={93.71}
              />
              <div>
                <h1 className="text-[36px] widescreen:text-[40px] widestscreen:text-[50px] widescreen:leading-[120%] max-sm:text-[24px] max-sm:leading-[120%] leading-[40.32px] tracking-[-0.98px] text-[#E5E5E5] font-['Graphikthin']">
                  Kruthi R
                </h1>
                <h2 className="text-[#A1A1A1] text-[20px] widescreen:text-[25px] widestscreen:text-[30px] widescreen:leading-[120%] max-sm:text-base widescreen:text-[25px] widestscreen:text-[30px] widescreen:leading-[150%] leading-[24px] font-['Graphikthin'] font-normal opacity-60 mt-[6px] max-sm:mt-[3px] max-sm:mb-[12px]">
                  Placed on 30th May 2024{" "}
                </h2>
                {/* <Image
                  src="/razor.svg"
                  className="py-[9.06px]"
                  width={98.24}
                  height={20.89}
                /> */}
              </div>
            </div>
            <p className="opacity-80 max-sm:text-sm max-sm:mt-[20px] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] text-[#E0E0E0] mt-[34.73px]">
              The fees you take is completely worth it. Your schedule is packed
              with so many things to learn. Career development along with full
              stack is great! I don’t have to go begging for jobs now.
            </p>
          </div>
        </div>
        <div className={`${style.container} w-[468px] max-sm:w-[320px] widescreen:w-[600px]`}>
          <div
            className={`max-sm:p-[20px] rounded-[6px] pl-[27.94px] pt-[33.07px] pr-[24.8px] pb-[39.11px] h-[282px] max-sm:h-auto ${style.bordergradient}`}
          >
            {" "}
            <div className="flex gap-[28.36px]">
              <Image
                src="/Frame 1000002775.png"
                className="max-sm:w-[80px] max-sm:h-[80px]"
                width={93.71}
                height={93.71}
              />
              <div>
                <h1 className="text-[36px] widescreen:text-[40px] widestscreen:text-[50px] widescreen:leading-[120%] max-sm:text-[24px] max-sm:leading-[120%] leading-[40.32px] tracking-[-0.98px] text-[#E5E5E5] font-['Graphikthin']">
                  Surya Narayan
                </h1>
                <h2 className="text-[#A1A1A1] text-[20px] widescreen:text-[25px] widestscreen:text-[30px] widescreen:leading-[120%] max-sm:text-base widescreen:text-[25px] widestscreen:text-[30px] widescreen:leading-[150%] leading-[24px] font-['Graphikthin'] font-normal opacity-60 mt-[6px] max-sm:mt-[3px] max-sm:mb-[12px]">
                  Placed on 30th May 2024{" "}
                </h2>
                {/* <Image
                  src="/razor.svg"
                  className="py-[9.06px]"
                  width={98.24}
                  height={20.89}
                /> */}
              </div>
            </div>
            <p className="opacity-80 max-sm:text-sm max-sm:mt-[20px] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] text-[#E0E0E0] mt-[34.73px]">
              A completely hands-on approach. I even got to work on a REAL
              project as a part of their QUICK BATCH program.
            </p>
          </div>
        </div>
        <div className={`${style.container} w-[468px] max-sm:w-[320px] widescreen:w-[600px]`}>
          <div
            className={`max-sm:p-[20px] rounded-[6px] pl-[27.94px] pt-[33.07px] pr-[24.8px] pb-[39.11px] h-[282px] max-sm:h-auto ${style.bordergradient}`}
          >
            {" "}
            <div className="flex gap-[28.36px]">
              <Image
                src="/Frame 1000002775.png"
                className="max-sm:w-[80px] max-sm:h-[80px]"
                width={93.71}
                height={93.71}
              />
              <div>
                <h1 className="text-[36px] widescreen:text-[40px] widestscreen:text-[50px] widescreen:leading-[120%] max-sm:text-[24px] max-sm:leading-[120%] leading-[40.32px] tracking-[-0.98px] text-[#E5E5E5] font-['Graphikthin']">
                  Lakshmi JT{" "}
                </h1>
                <h2 className="text-[#A1A1A1] text-[20px] widescreen:text-[25px] widestscreen:text-[30px] widescreen:leading-[120%] max-sm:text-base widescreen:text-[25px] widestscreen:text-[30px] widescreen:leading-[150%] leading-[24px] font-['Graphikthin'] font-normal opacity-60 mt-[6px] max-sm:mt-[3px] max-sm:mb-[12px]">
                  Placed on 30th May 2024{" "}
                </h2>
                {/* <Image
                  src="/razor.svg"
                  className="py-[9.06px]"
                  width={98.24}
                  height={20.89}
                /> */}
              </div>
            </div>
            <p className="opacity-80 max-sm:text-sm max-sm:mt-[20px] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] text-[#E0E0E0] mt-[34.73px]">
              I was charged so little compared to other institutes that also
              promise 100% placement. I even got placed at a top product based
              company.
            </p>
          </div>
        </div>
        <div className={`${style.container} w-[468px] max-sm:w-[320px] widescreen:w-[600px]`}>
          <div
            className={`max-sm:p-[20px] rounded-[6px] pl-[27.94px] pt-[33.07px] pr-[24.8px] pb-[39.11px] h-[282px] max-sm:h-auto ${style.bordergradient}`}
          >
            {" "}
            <div className="flex gap-[28.36px]">
              <Image
                src="/Frame 1000002775.png"
                className="max-sm:w-[80px] max-sm:h-[80px]"
                width={93.71}
                height={93.71}
              />
              <div>
                <h1 className="text-[36px] widescreen:text-[40px] widestscreen:text-[50px] widescreen:leading-[120%] max-sm:text-[24px] max-sm:leading-[120%] leading-[40.32px] tracking-[-0.98px] text-[#E5E5E5] font-['Graphikthin']">
                  Ravi Teja
                </h1>
                <h2 className="text-[#A1A1A1] text-[20px] widescreen:text-[25px] widestscreen:text-[30px] widescreen:leading-[120%] max-sm:text-base widescreen:text-[25px] widestscreen:text-[30px] widescreen:leading-[150%] leading-[24px] font-['Graphikthin'] font-normal opacity-60 mt-[6px] max-sm:mt-[3px] max-sm:mb-[12px]">
                  Placed on 30th May 2024{" "}
                </h2>
                {/* <Image
                  src="/razor.svg"
                  className="py-[9.06px]"
                  width={98.24}
                  height={20.89}
                /> */}
              </div>
            </div>
            <p className="opacity-80 max-sm:text-sm max-sm:mt-[20px] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] text-[#E0E0E0] mt-[34.73px]">
              I cannot believe I got placed in 4 months. I was finding a job for
              almost 1 year.
            </p>
          </div>
        </div>
        <div className={`${style.container} w-[468px] max-sm:w-[320px] widescreen:w-[600px]`}>
          <div
            className={`max-sm:p-[20px] rounded-[6px] pl-[27.94px] pt-[33.07px] pr-[24.8px] pb-[39.11px] h-[282px] max-sm:h-auto ${style.bordergradient}`}
          >
            {" "}
            <div className="flex gap-[28.36px]">
              <Image
                src="/Frame 1000002775.png"
                className="max-sm:w-[80px] max-sm:h-[80px]"
                width={93.71}
                height={93.71}
              />
              <div>
                <h1 className="text-[36px] widescreen:text-[40px] widestscreen:text-[50px] widescreen:leading-[120%] max-sm:text-[24px] max-sm:leading-[120%] leading-[40.32px] tracking-[-0.98px] text-[#E5E5E5] font-['Graphikthin']">
                  Kruthi R
                </h1>
                <h2 className="text-[#A1A1A1] text-[20px] widescreen:text-[25px] widestscreen:text-[30px] widescreen:leading-[120%] max-sm:text-base widescreen:text-[25px] widestscreen:text-[30px] widescreen:leading-[150%] leading-[24px] font-['Graphikthin'] font-normal opacity-60 mt-[6px] max-sm:mt-[3px] max-sm:mb-[12px]">
                  Placed on 30th May 2024{" "}
                </h2>
                {/* <Image
                  src="/razor.svg"
                  className="py-[9.06px]"
                  width={98.24}
                  height={20.89}
                /> */}
              </div>
            </div>
            <p className="opacity-80 max-sm:text-sm max-sm:mt-[20px] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] text-[#E0E0E0] mt-[34.73px]">
              The fees you take is completely worth it. Your schedule is packed
              with so many things to learn. Career development along with full
              stack is great! I don’t have to go begging for jobs now.{" "}
            </p>
          </div>
        </div>
        <div className={`${style.container} w-[468px] max-sm:w-[320px] widescreen:w-[600px]`}>
          <div
            className={`max-sm:p-[20px] rounded-[6px] pl-[27.94px] pt-[33.07px] pr-[24.8px] pb-[39.11px] h-[282px] max-sm:h-auto ${style.bordergradient}`}
          >
            {" "}
            <div className="flex gap-[28.36px]">
              <Image
                src="/Frame 1000002775.png"
                className="max-sm:w-[80px] max-sm:h-[80px]"
                width={93.71}
                height={93.71}
              />
              <div>
                <h1 className="text-[36px] widescreen:text-[40px] widestscreen:text-[50px] widescreen:leading-[120%] max-sm:text-[24px] max-sm:leading-[120%] leading-[40.32px] tracking-[-0.98px] text-[#E5E5E5] font-['Graphikthin']">
                  Surya Narayan
                </h1>
                <h2 className="text-[#A1A1A1] text-[20px] widescreen:text-[25px] widestscreen:text-[30px] widescreen:leading-[120%] max-sm:text-base widescreen:text-[25px] widestscreen:text-[30px] widescreen:leading-[150%] leading-[24px] font-['Graphikthin'] font-normal opacity-60 mt-[6px] max-sm:mt-[3px] max-sm:mb-[12px]">
                  Placed on 30th May 2024{" "}
                </h2>
                {/* <Image
                  src="/razor.svg"
                  className="py-[9.06px]"
                  width={98.24}
                  height={20.89}
                /> */}
              </div>
            </div>
            <p className="opacity-80 max-sm:text-sm max-sm:mt-[20px] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] text-[#E0E0E0] mt-[34.73px]">
              A completely hands-on approach. I even got to work on a REAL
              project as a part of their QUICK BATCH program.
            </p>
          </div>
        </div>
        <div className={`${style.container} w-[468px] max-sm:w-[320px] widescreen:w-[600px]`}>
          <div
            className={`max-sm:p-[20px] rounded-[6px] pl-[27.94px] pt-[33.07px] pr-[24.8px] pb-[39.11px] h-[282px] max-sm:h-auto ${style.bordergradient}`}
          >
            {" "}
            <div className="flex gap-[28.36px]">
              <Image
                src="/Frame 1000002775.png"
                className="max-sm:w-[80px] max-sm:h-[80px]"
                width={93.71}
                height={93.71}
              />
              <div>
                <h1 className="text-[36px] widescreen:text-[40px] widestscreen:text-[50px] widescreen:leading-[120%] max-sm:text-[24px] max-sm:leading-[120%] leading-[40.32px] tracking-[-0.98px] text-[#E5E5E5] font-['Graphikthin']">
                  Lakshmi JT{" "}
                </h1>
                <h2 className="text-[#A1A1A1] text-[20px] widescreen:text-[25px] widestscreen:text-[30px] widescreen:leading-[120%] max-sm:text-base widescreen:text-[25px] widestscreen:text-[30px] widescreen:leading-[150%] leading-[24px] font-['Graphikthin'] font-normal opacity-60 mt-[6px] max-sm:mt-[3px] max-sm:mb-[12px]">
                  Placed on 30th May 2024{" "}
                </h2>
                {/* <Image
                  src="/razor.svg"
                  className="py-[9.06px]"
                  width={98.24}
                  height={20.89}
                /> */}
              </div>
            </div>
            <p className="opacity-80 max-sm:text-sm max-sm:mt-[20px] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] text-[#E0E0E0] mt-[34.73px]">
              I was charged so little compared to other institutes that also
              promise 100% placement. I even got placed at a top product based
              company.
            </p>
          </div>
        </div>
        <div className={`${style.container} w-[468px] max-sm:w-[320px] widescreen:w-[600px]`}>
          <div
            className={`max-sm:p-[20px] rounded-[6px] pl-[27.94px] pt-[33.07px] pr-[24.8px] pb-[39.11px] h-[282px] max-sm:h-auto ${style.bordergradient}`}
          >
            {" "}
            <div className="flex gap-[28.36px]">
              <Image
                src="/Frame 1000002775.png"
                className="max-sm:w-[80px] max-sm:h-[80px]"
                width={93.71}
                height={93.71}
              />
              <div>
                <h1 className="text-[36px] widescreen:text-[40px] widestscreen:text-[50px] widescreen:leading-[120%] max-sm:text-[24px] max-sm:leading-[120%] leading-[40.32px] tracking-[-0.98px] text-[#E5E5E5] font-['Graphikthin']">
                  Ravi Teja
                </h1>
                <h2 className="text-[#A1A1A1] text-[20px] widescreen:text-[25px] widestscreen:text-[30px] widescreen:leading-[120%] max-sm:text-base widescreen:text-[25px] widestscreen:text-[30px] widescreen:leading-[150%] leading-[24px] font-['Graphikthin'] font-normal opacity-60 mt-[6px] max-sm:mt-[3px] max-sm:mb-[12px]">
                  Placed on 30th May 2024{" "}
                </h2>
                {/* <Image
                  src="/razor.svg"
                  className="py-[9.06px]"
                  width={98.24}
                  height={20.89}
                /> */}
              </div>
            </div>
            <p className="opacity-80 max-sm:text-sm max-sm:mt-[20px] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] text-[#E0E0E0] mt-[34.73px]">
              I cannot believe I got placed in 4 months. I was finding a job for
              almost 1 year.
            </p>
          </div>
        </div>
        <div className={`${style.container} w-[468px] max-sm:w-[320px] widescreen:w-[600px]`}>
          <div
            className={`max-sm:p-[20px] rounded-[6px] pl-[27.94px] pt-[33.07px] pr-[24.8px] pb-[39.11px] h-[282px] max-sm:h-auto ${style.bordergradient}`}
          >
            {" "}
            <div className="flex gap-[28.36px]">
              <Image
                src="/Frame 1000002775.png"
                className="max-sm:w-[80px] max-sm:h-[80px]"
                width={93.71}
                height={93.71}
              />
              <div>
                <h1 className="text-[36px] widescreen:text-[40px] widestscreen:text-[50px] widescreen:leading-[120%] max-sm:text-[24px] max-sm:leading-[120%] leading-[40.32px] tracking-[-0.98px] text-[#E5E5E5] font-['Graphikthin']">
                  Kruthi R
                </h1>
                <h2 className="text-[#A1A1A1] text-[20px] widescreen:text-[25px] widestscreen:text-[30px] widescreen:leading-[120%] max-sm:text-base widescreen:text-[25px] widestscreen:text-[30px] widescreen:leading-[150%] leading-[24px] font-['Graphikthin'] font-normal opacity-60 mt-[6px] max-sm:mt-[3px] max-sm:mb-[12px]">
                  Placed on 30th May 2024{" "}
                </h2>
                {/* <Image
                  src="/razor.svg"
                  className="py-[9.06px]"
                  width={98.24}
                  height={20.89}
                /> */}
              </div>
            </div>
            <p className="opacity-80 max-sm:text-sm max-sm:mt-[20px] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] text-[#E0E0E0] mt-[34.73px]">
              The fees you take is completely worth it. Your schedule is packed
              with so many things to learn. Career development along with full
              stack is great! I don’t have to go begging for jobs now.{" "}
            </p>
          </div>
        </div>
        <div className={`${style.container} w-[468px] max-sm:w-[320px] widescreen:w-[600px]`}>
          <div
            className={`max-sm:p-[20px] rounded-[6px] pl-[27.94px] pt-[33.07px] pr-[24.8px] pb-[39.11px] h-[282px] max-sm:h-auto ${style.bordergradient}`}
          >
            {" "}
            <div className="flex gap-[28.36px]">
              <Image
                src="/Frame 1000002775.png"
                className="max-sm:w-[80px] max-sm:h-[80px]"
                width={93.71}
                height={93.71}
              />
              <div>
                <h1 className="text-[36px] widescreen:text-[40px] widestscreen:text-[50px] widescreen:leading-[120%] max-sm:text-[24px] max-sm:leading-[120%] leading-[40.32px] tracking-[-0.98px] text-[#E5E5E5] font-['Graphikthin']">
                  Surya Narayan
                </h1>
                <h2 className="text-[#A1A1A1] text-[20px] widescreen:text-[25px] widestscreen:text-[30px] widescreen:leading-[120%] max-sm:text-base widescreen:text-[25px] widestscreen:text-[30px] widescreen:leading-[150%] leading-[24px] font-['Graphikthin'] font-normal opacity-60 mt-[6px] max-sm:mt-[3px] max-sm:mb-[12px]">
                  Placed on 30th May 2024{" "}
                </h2>
                {/* <Image
                  src="/razor.svg"
                  className="py-[9.06px]"
                  width={98.24}
                  height={20.89}
                /> */}
              </div>
            </div>
            <p className="opacity-80 max-sm:text-sm max-sm:mt-[20px] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] text-[#E0E0E0] mt-[34.73px]">
              A completely hands-on approach. I even got to work on a REAL
              project as a part of their QUICK BATCH program.
            </p>
          </div>
        </div>
        <div className={`${style.container} w-[468px] max-sm:w-[320px] widescreen:w-[600px]`}>
          <div
            className={`max-sm:p-[20px] rounded-[6px] pl-[27.94px] pt-[33.07px] pr-[24.8px] pb-[39.11px] h-[282px] max-sm:h-auto ${style.bordergradient}`}
          >
            {" "}
            <div className="flex gap-[28.36px]">
              <Image
                src="/Frame 1000002775.png"
                className="max-sm:w-[80px] max-sm:h-[80px]"
                width={93.71}
                height={93.71}
              />
              <div>
                <h1 className="text-[36px] widescreen:text-[40px] widestscreen:text-[50px] widescreen:leading-[120%] max-sm:text-[24px] max-sm:leading-[120%] leading-[40.32px] tracking-[-0.98px] text-[#E5E5E5] font-['Graphikthin']">
                  Lakshmi JT{" "}
                </h1>
                <h2 className="text-[#A1A1A1] text-[20px] widescreen:text-[25px] widestscreen:text-[30px] widescreen:leading-[120%] max-sm:text-base widescreen:text-[25px] widestscreen:text-[30px] widescreen:leading-[150%] leading-[24px] font-['Graphikthin'] font-normal opacity-60 mt-[6px] max-sm:mt-[3px] max-sm:mb-[12px]">
                  Placed on 30th May 2024{" "}
                </h2>
                {/* <Image
                  src="/razor.svg"
                  className="py-[9.06px]"
                  width={98.24}
                  height={20.89}
                /> */}
              </div>
            </div>
            <p className="opacity-80 max-sm:text-sm max-sm:mt-[20px] text-base widescreen:text-[20px] widestscreen:text-[24px] widescreen:leading-[150%] text-[#E0E0E0] mt-[34.73px]">
              I was charged so little compared to other institutes that also
              promise 100% placement. I even got placed at a top product based
              company.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
