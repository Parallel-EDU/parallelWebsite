// // app/components/HeroSection.jsx
// "use client";

// export default function HeroSection() {
//   return (
//     <section className="relative flex flex-col items-center justify-center min-h-[440px] sm:min-h-[540px] py-20 overflow-hidden">
//       {/* Radial gradient background */}
//       <div
//         className="absolute w-[] inset-0 pointer-events-none"
//         style={{
//           background:
//             "radial-gradient(125% 80% at 50% 85%, #30E29D33 0%, #201DA7 58%, #040A13 100%)",
//           opacity: 0.96,
//         }}
//       />
//       {/* Content */}
//       <div className="relative flex flex-col items-center px-4 sm:px-0">
//         <h1 className="text-white/95 font-medium tracking-[-0.01em] text-center text-[40px] sm:text-[56px] md:text-[62px] leading-[1.1] mb-6">
//           Your dream tech career starts here.
//         </h1>
//         <p className="text-[#B7C4D1] mb-10 text-center text-[17px] sm:text-[19px]">
//           Join India’s most practical, results-driven tech bootcamps with
//           <br className="hidden sm:inline" /> guaranteed placement support.
//         </p>
//         <button
//           className="rounded-[7px] border border-[#22E19D] px-8 py-3 text-[17px] text-[#22E19D] transition-colors hover:bg-[#22e19d14] hover:text-white"
//           style={{
//             boxShadow:
//               "0 0 0 1px rgba(34,225,157,0.13) inset, 0 0 14px rgba(34,225,157,0.11)",
//           }}
//         >
//           Enroll Now
//         </button>
//       </div>
//     </section>
//   );
// }

"use client";

import style from "@/styles/style.module.css";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-center min-h-[650px] px-6 overflow-hidden"
      style={{
        background: `
          linear-gradient(
            179.63deg,
            #000000 7.03%,
            rgba(0, 0, 0, 0.514423) 21.31%,
            rgba(0, 0, 0, 0.514423) 53.15%,
            rgba(0, 0, 0, 0.514423) 82.77%,
            #000000 96.68%
          ),
          radial-gradient(
            58.38% 166.81% at 50% 157.82%,
            rgba(27, 212, 79, 1.7) 0%,
            rgba(14, 11, 180, 1.43) 73.82%,
            rgba(0, 0, 0, 0.43) 100%
          )
        `,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute w-[100%] h-[822px] top-0 left-0 overflow-hidden">
        <div className={style.backgroundbox2}></div>
      </div>
      {/* Subtle top line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-[1020px] mx-auto">
        <h1 className="text-[64px] leading-tight font-['Graphikthin'] text-white max-md:text-[48px] max-sm:text-[36px]">
          Your dream tech career starts here.
        </h1>

        <p className="mt-6 text-white/80 text-lg max-sm:text-base">
          Join India’s most practical, results-driven tech bootcamps with
          guaranteed placement support.
        </p>

        <Link href="/signup" className="z-[99999]">
          <button className="mt-10 border border-[#1BD44F] text-[#1BD44F] px-8 py-3 rounded-md text-lg font-medium hover:bg-[#1BD44F]/10 transition-all duration-300">
            Enroll Now
          </button>
        </Link>
      </div>

      {/* Subtle bottom line */}
      {/* <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10"></div> */}
    </section>
  );
}
