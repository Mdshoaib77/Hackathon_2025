import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className='max-padd-container bg-hero bg-cover bg-center bg-no-repeat h-[711px] w-full relative'>
        <div className="pt-44 xl:pt-52 max-w-[677px] text-white">
          <span className="px-3 ring-1 ring-white/30 max-w-72 rounded-3xl"><span className="text-secondary">#1</span> Trusted Online Tutoring Platform</span>
          <h1 className="h1 max-w-[44rem] mt-6">
            Personalized 1-on-1 Tutoring for Every Learner, Anytime, Anywhere
          </h1>
          <p className="text-gray-10">
            Experience expert guidance with our advanced platform that connects
            students with top tutors across a range of subjects built for
            results, flexibility, and growth.
          </p>
          <div className="mt-8">
            <Link to={"/login"} className="btn-light !bg-transparent !ring-white !py-3">
              Register Now
            </Link>
            <Link to={"/tutors"} className="btn-secondary !text-tertiary !py-3 ml-3">
              Book Appointment
            </Link>
          </div>
        </div>
    </section>
  );
};

export default Hero;


// // import React from "react";
// // import { Link } from "react-router-dom";

// // const Hero = () => {
// //   return (
// //     <section className="max-padd-container bg-hero-charity bg-cover bg-center bg-no-repeat h-[711px] w-full relative">
// //       <div className="pt-44 xl:pt-52 max-w-[677px] text-white">
// //         {/* Highlight / Tagline */}
// //         <span className="px-3 text-sm tracking-wider uppercase ring-1 ring-white/30 max-w-72 rounded-3xl">
// //           #1 Community Helping Platform
// //         </span>

// //         {/* Main Heading */}
// //         <h1 className="h1 max-w-[44rem] mt-6 text-4xl sm:text-5xl font-bold leading-tight">
// //           Helping Hands, One Step at a Time
// //         </h1>

// //         {/* Subheading / Description */}
// //         <p className="mt-4 text-lg text-gray-200 sm:text-xl">
// //           Book free services, donate to causes, and join volunteers across your city.  
// //           Make a difference today and help build a stronger, caring community.
// //         </p>

// //         {/* Action Buttons */}
// //         <div className="flex flex-wrap gap-4 mt-8">
// //           <Link
// //             to={"/donate"}
// //             className="btn-light !bg-transparent !ring-white !py-3 px-6 hover:bg-white/10 transition"
// //           >
// //             Donate Now
// //           </Link>

// //           <Link
// //             to={"/services"}
// //             className="btn-secondary !text-tertiary !py-3 px-6 ml-0 sm:ml-3 hover:scale-105 transition"
// //           >
// //             Book Free Service
// //           </Link>

// //           <Link
// //             to={"/volunteer"}
// //             className="btn-outline !py-3 px-6 ml-0 sm:ml-3 hover:bg-white/20 transition"
// //           >
// //             Join Volunteer Team
// //           </Link>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Hero;


// import React from "react";
// import { Link } from "react-router-dom";

// const Hero = () => {
//   return (
//     <section className="max-padd-container bg-hero bg-cover bg-center bg-no-repeat h-[711px] w-full relative">
//       <div className="pt-44 xl:pt-52 max-w-[677px] text-white">
//         {/* Highlight / Tagline */}
//         <span className="px-4 py-1 text-sm tracking-wider uppercase ring-1 ring-white/30 max-w-72 rounded-3xl backdrop-blur-sm">
//           #1 Community Helping Platform
//         </span>

//         {/* Main Heading */}
//         <h1 className="h1 max-w-[44rem] mt-6 text-4xl sm:text-5xl font-extrabold leading-tight drop-shadow-lg">
//           Helping Hands, One Step at a Time
//         </h1>

//         {/* Subheading / Description */}
//         <p className="mt-4 text-lg text-gray-200 sm:text-xl drop-shadow-md">
//           Book free services, donate to causes, and join volunteers across your city.  
//           Make a difference today and help build a stronger, caring community.
//         </p>

//         {/* Action Buttons */}
//         <div className="flex flex-wrap gap-4 mt-8">
//           <Link
//             to={"/donate"}
//             className="btn-light !bg-transparent !ring-white !py-3 px-6 rounded-xl font-medium shadow hover:shadow-lg hover:bg-white/10 transition"
//           >
//             Donate Now
//           </Link>

//           <Link
//             to={"/services"}
//             className="btn-secondary !text-tertiary !py-3 px-6 rounded-xl font-medium shadow hover:shadow-lg hover:scale-105 transition"
//           >
//             Book Free Service
//           </Link>

//           <Link
//             to={"/volunteer"}
//             className="btn-outline !py-3 px-6 rounded-xl font-medium shadow hover:shadow-lg hover:bg-white/20 transition"
//           >
//             Join Volunteer Team
//           </Link>
//         </div>
//       </div>

//       {/* Optional subtle overlay for premium look */}
//       <div className="absolute inset-0 pointer-events-none bg-black/25 mix-blend-overlay"></div>
//     </section>
//   );
// };

// export default Hero;
