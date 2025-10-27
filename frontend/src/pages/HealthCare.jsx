// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { RiMicroscopeLine } from "react-icons/ri";
// import { FaEnvelope, FaHeadphones, FaLocationDot, FaPhone, FaChevronDown } from "react-icons/fa6";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// // Images
// import homeBg from "../assets/img/home.png";
// import aboutImg from "../assets/img/about.jpg";
// import doc1 from "../assets/img/doc1.jpg";
// import doc2 from "../assets/img/doc2.jpg";
// import doc3 from "../assets/img/doc3.jpg";
// import doc4 from "../assets/img/doc4.jpg";
// import doc5 from "../assets/img/doc5.jpg";
// import doc6 from "../assets/img/doc6.jpg";

// const HealthCare = () => {
//   const [loading, setLoading] = useState(false);
//   const [selectedService, setSelectedService] = useState("");
//   const [showDropdown, setShowDropdown] = useState(false);

//   const Button = ({ title, onClick }) => (
//     <button
//       onClick={onClick}
//       className="px-6 py-3 text-lg font-semibold text-white transition rounded-full shadow-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-90 whitespace-nowrap"
//     >
//       {title}
//     </button>
//   );

//   const ServicesCard = ({ icon, title }) => (
//     <div className="flex flex-col items-center justify-center w-full h-48 p-6 text-center text-black bg-white shadow-lg rounded-xl">
//       <div className="mb-4">{icon}</div>
//       <h3 className="text-lg font-semibold leading-tight md:text-xl">{title}</h3>
//     </div>
//   );

//   const services = [
//     "General Health Check-up",
//     "Blood Pressure Screening",
//     "Diabetes Testing",
//     "Vision Check-up",
//     "Child Health Check",
//     "Women’s Health Guidance",
//     "Men’s Health Guidance",
//     "Nutrition Counseling",
//     "Mental Health Support",
//     "Vaccination Guidance",
//     "Dental Screening",
//     "Health Education Workshops",
//   ];

//   const doctors = [
//     { img: doc1, name: "Dr. Serena Mitchell", specialties: "Orthopedic Surgeon" },
//     { img: doc2, name: "Dr. Julian Bennett", specialties: "Cardiologist" },
//     { img: doc3, name: "Dr. Camila Rodriguez", specialties: "Pediatrician" },
//     { img: doc4, name: "Dr. Victor Nguyen", specialties: "Neurologist" },
//     { img: doc5, name: "Dr. Ethan Carter", specialties: "Dermatologist" },
//     { img: doc6, name: "Dr. Olivia Martinez", specialties: "Ophthalmologist" },
//   ];

//   // Handle Form Submit
//   const handleBookingSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const formData = new FormData(e.target);
//     formData.append("access_key", "d8bc3a52-5209-4956-93bf-25881ea36833");

//     try {
//       const response = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         body: formData,
//       });

//       const result = await response.json();
//       setLoading(false);

//       if (result.success) {
//         toast.success("🎉 Your booking is complete!");
//         e.target.reset();
//         setSelectedService("");
//       } else {
//         toast.error("❌ Submission failed. Please check your connection.");
//       }
//     } catch (error) {
//       setLoading(false);
//       toast.error("❌ Network error. Please try again.");
//     }
//   };

//   return (
//     <div className="text-black">
//       <ToastContainer position="top-center" autoClose={2500} />

//       {/* Home Section */}
//       <div
//         className="flex flex-col justify-center px-5 pt-24 pb-16 text-white bg-center bg-cover"
//         style={{ backgroundImage: `url(${homeBg})` }}
//       >
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="space-y-5 lg:w-4/5"
//         >
//           <motion.h1
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.3 }}
//             className="text-4xl font-bold leading-tight md:text-5xl"
//           >
//             Empowering Health Choices for a Vibrant Life
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1, delay: 0.6 }}
//             className="text-base md:text-lg"
//           >
//             We provide accessible, reliable healthcare services tailored to your
//             well-being. Your health is our top priority — every step of the way.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6, delay: 0.9 }}
//           >
//             <Button title="See Services" />
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* About Section */}
//       <div className="flex flex-col items-center justify-between gap-10 px-5 py-16 lg:flex-row lg:px-32">
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="w-full space-y-4 lg:w-1/2"
//         >
//           <h1 className="text-3xl font-semibold text-center md:text-4xl lg:text-start">
//             About Us
//           </h1>
//           <p className="text-justify">
//             At WellnessVista, we’re committed to delivering holistic, patient-centered care.
//             Our mission is to improve lives through innovative and compassionate healthcare services.
//           </p>
//           <p className="text-justify">
//             Our experienced team believes in empowering individuals with the tools and support they need for lifelong wellness.
//             Whether it's routine check-ups or specialized treatments, we’re here to guide you every step of the way.
//           </p>
//           <p className="text-justify">
//             Join our community and take charge of your health journey. We’re honored to be your trusted partner in wellness.
//           </p>
//         </motion.div>
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="w-full lg:w-1/2"
//         >
//           <img src={aboutImg} alt="About Us" className="w-full h-auto rounded-lg" />
//         </motion.div>
//       </div>

//       {/* Services Section */}
//       <div className="flex flex-col justify-center px-5 py-12 lg:px-32">
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="flex flex-col items-center gap-5 lg:flex-row lg:justify-between"
//         >
//           <div className="text-center lg:text-left">
//             <h1 className="text-3xl font-semibold md:text-4xl">Our Services</h1>
//             <p className="mt-2 text-base md:text-lg">
//               Explore the range of care we offer — from routine health checks to specialized diagnostics tailored to your needs.
//             </p>
//           </div>
//           <Button title="See Services" />
//         </motion.div>

//         <div className="grid grid-cols-1 gap-5 mt-10 sm:grid-cols-2 lg:grid-cols-3">
//           {services.map((service, idx) => (
//             <ServicesCard
//               key={idx}
//               icon={<RiMicroscopeLine size={35} className="text-cyan-500" />}
//               title={service}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Doctors Section */}
//       <div className="flex flex-col justify-center px-5 py-12 lg:px-32">
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="flex flex-col items-center justify-between mb-8 lg:flex-row lg:mb-0"
//         >
//           <div className="text-center lg:text-left">
//             <h1 className="text-3xl font-semibold md:text-4xl">Our Doctors</h1>
//             <p className="mt-2 text-base md:text-lg">
//               Meet our team of highly skilled and compassionate doctors who are dedicated to your health and well-being.
//             </p>
//           </div>
//         </motion.div>

//         <div className="grid grid-cols-1 gap-5 mt-6 sm:grid-cols-2 lg:grid-cols-3">
//           {doctors.map((doc, idx) => (
//             <div
//               key={idx}
//               className="overflow-hidden transition-transform duration-300 transform bg-white shadow-lg rounded-xl hover:scale-105"
//             >
//               <img src={doc.img} alt={doc.name} className="object-cover w-full h-56" />
//               <div className="p-4 text-center">
//                 <h3 className="text-lg font-semibold">{doc.name}</h3>
//                 <p className="text-sm text-gray-600">{doc.specialties}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Booking Form */}
//       <section className="px-5 my-24 max-padd-container lg:px-32">
//         <div className="flex flex-col gap-20 py-6 xl:flex-row">
//           {/* Booking Form */}
//           <div>
//             <div className="max-w-lg pb-16">
//               <h3 className="text-3xl font-semibold capitalize h3">
//                 Book <span className="font-normal">Your Appointment</span>
//               </h3>
//               <p className="mt-2 text-base text-gray-600">
//                 Fill out the form below to book your healthcare service.
//               </p>
//             </div>

//             <form onSubmit={handleBookingSubmit}>
//               <div className="flex gap-x-5">
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Full Name"
//                   required
//                   className="w-1/2 px-4 py-2 mb-4 bg-white border-none rounded shadow-sm ring-1 ring-gray-300 focus:ring-cyan-400"
//                 />
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email Address"
//                   required
//                   className="w-1/2 px-4 py-2 mb-4 bg-white border-none rounded shadow-sm ring-1 ring-gray-300 focus:ring-cyan-400"
//                 />
//               </div>

//               {/* Service Dropdown */}
//               <div className="relative mb-4">
//                 <div
//                   className="flex items-center justify-between w-full px-4 py-2 bg-white rounded shadow-sm cursor-pointer ring-1 ring-gray-300 hover:ring-cyan-400"
//                   onClick={() => setShowDropdown(!showDropdown)}
//                 >
//                   <span className="text-gray-700">
//                     {selectedService || "Select a Service"}
//                   </span>
//                   <FaChevronDown className={`transition-transform ${showDropdown ? "rotate-180" : ""}`} />
//                 </div>

//                 {showDropdown && (
//                   <ul className="absolute z-20 w-full mt-1 overflow-y-auto bg-white border border-gray-200 rounded shadow-md max-h-48">
//                     {services.map((srv, idx) => (
//                       <li
//                         key={idx}
//                         className="px-4 py-2 text-gray-700 cursor-pointer hover:bg-cyan-50"
//                         onClick={() => {
//                           setSelectedService(srv);
//                           setShowDropdown(false);
//                         }}
//                       >
//                         {srv}
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </div>

//               <input type="hidden" name="service" value={selectedService} />

//               <textarea
//                 name="message"
//                 rows="4"
//                 placeholder="Write your message or symptoms"
//                 required
//                 className="w-full px-4 py-2 mb-4 bg-white rounded shadow-sm resize-none ring-1 ring-gray-300 focus:ring-cyan-400"
//               ></textarea>

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full py-3 text-lg font-medium text-white transition rounded-lg shadow-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-90 disabled:opacity-50"
//               >
//                 {loading ? "Booking..." : "Book Now"}
//               </button>
//             </form>
//           </div>

//           {/* Contact Details */}
//           <div>
//             <div className="max-w-lg pb-16">
//               <h3 className="text-3xl font-semibold capitalize h3">
//                 Contact <span className="font-normal">Details</span>
//               </h3>
//               <p>
//                 We’re always here to assist you! Feel free to reach out anytime.
//               </p>
//             </div>

//             <div className="flex flex-col gap-3 text-gray-700">
//               <p className="flex items-center gap-x-2">
//                 <FaLocationDot /> 1234 Elm Street, Springfield, IL, USA
//               </p>
//               <p className="flex items-center gap-x-2">
//                 <FaEnvelope /> info@primetutor.com
//               </p>
//               <p className="flex items-center gap-x-2">
//                 <FaPhone /> +1 (800) 123-4567
//               </p>
//               <p className="flex items-center gap-x-2">
//                 <FaHeadphones /> 24/7 Support Open
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HealthCare;



import React, { useState } from "react";
import { motion } from "framer-motion";
import { RiMicroscopeLine } from "react-icons/ri";
import { FaEnvelope, FaHeadphones, FaLocationDot, FaPhone, FaChevronDown } from "react-icons/fa6";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Images
import homeBg from "../assets/img/home.png";
import aboutImg from "../assets/img/about.jpg";
import doc1 from "../assets/img/doc1.jpg";
import doc2 from "../assets/img/doc2.jpg";
import doc3 from "../assets/img/doc3.jpg";
import doc4 from "../assets/img/doc4.jpg";
import doc5 from "../assets/img/doc5.jpg";
import doc6 from "../assets/img/doc6.jpg";

const HealthCare = () => {
  const [loading, setLoading] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const Button = ({ title, onClick }) => (
    <button
      onClick={onClick}
      className="px-6 py-3 text-lg font-semibold text-white transition-all duration-300 ease-in-out rounded-full shadow-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-90 whitespace-nowrap"
    >
      {title}
    </button>
  );

  const ServicesCard = ({ icon, title }) => (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center justify-center w-full h-48 p-6 text-center text-black transition-all duration-300 ease-in-out transform bg-white shadow-xl rounded-xl hover:shadow-2xl hover:scale-105"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold leading-tight md:text-xl">{title}</h3>
    </motion.div>
  );

  const services = [
    "General Health Check-up",
    "Blood Pressure Screening",
    "Diabetes Testing",
    "Vision Check-up",
    "Child Health Check",
    "Women’s Health Guidance",
    "Men’s Health Guidance",
    "Nutrition Counseling",
    "Mental Health Support",
    "Vaccination Guidance",
    "Dental Screening",
    "Health Education Workshops",
  ];

  const doctors = [
    { img: doc1, name: "Dr. Serena Mitchell", specialties: "Orthopedic Surgeon" },
    { img: doc2, name: "Dr. Julian Bennett", specialties: "Cardiologist" },
    { img: doc3, name: "Dr. Camila Rodriguez", specialties: "Pediatrician" },
    { img: doc4, name: "Dr. Victor Nguyen", specialties: "Neurologist" },
    { img: doc5, name: "Dr. Ethan Carter", specialties: "Dermatologist" },
    { img: doc6, name: "Dr. Olivia Martinez", specialties: "Ophthalmologist" },
  ];

  // Handle Form Submit
  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    formData.append("access_key", "d8bc3a52-5209-4956-93bf-25881ea36833");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      setLoading(false);

      if (result.success) {
        toast.success("🎉 Your booking is complete!");
        e.target.reset();
        setSelectedService("");
      } else {
        toast.error("❌ Submission failed. Please check your connection.");
      }
    } catch (error) {
      setLoading(false);
      toast.error("❌ Network error. Please try again.");
    }
  };

  return (
    <div className="text-black">
      <ToastContainer position="top-center" autoClose={2500} />

      {/* Home Section */}
      <div
        className="flex flex-col justify-center px-5 pt-24 pb-16 text-white bg-center bg-cover"
        style={{ backgroundImage: `url(${homeBg})` }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-5 lg:w-4/5"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-4xl font-bold leading-tight md:text-5xl"
          >
            Empowering Health Choices for a Vibrant Life
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-base md:text-lg"
          >
            We provide accessible, reliable healthcare services tailored to your
            well-being. Your health is our top priority — every step of the way.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <Button title="See Services" />
          </motion.div>
        </motion.div>
      </div>

      {/* About Section */}
      <div className="flex flex-col items-center justify-between gap-10 px-5 py-16 lg:flex-row lg:px-32">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full space-y-4 lg:w-1/2"
        >
          <h1 className="text-3xl font-semibold text-center md:text-4xl lg:text-start">
            About Us
          </h1>
          <p className="text-justify">
            At WellnessVista, we’re committed to delivering holistic, patient-centered care.
            Our mission is to improve lives through innovative and compassionate healthcare services.
          </p>
          <p className="text-justify">
            Our experienced team believes in empowering individuals with the tools and support they need for lifelong wellness.
            Whether it's routine check-ups or specialized treatments, we’re here to guide you every step of the way.
          </p>
          <p className="text-justify">
            Join our community and take charge of your health journey. We’re honored to be your trusted partner in wellness.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2"
        >
          <img src={aboutImg} alt="About Us" className="w-full h-auto rounded-lg" />
        </motion.div>
      </div>

      {/* Services Section */}
      <div className="flex flex-col justify-center px-5 py-12 lg:px-32">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-5 lg:flex-row lg:justify-between"
        >
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-semibold md:text-4xl">Our Services</h1>
            <p className="mt-2 text-base md:text-lg">
              Explore the range of care we offer — from routine health checks to specialized diagnostics tailored to your needs.
            </p>
          </div>
          <Button title="See Services" />
        </motion.div>

        <div className="grid grid-cols-1 gap-5 mt-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <ServicesCard
              key={idx}
              icon={<RiMicroscopeLine size={35} className="text-cyan-500" />}
              title={service}
            />
          ))}
        </div>
      </div>

      {/* Doctors Section */}
      <div className="flex flex-col justify-center px-5 py-12 lg:px-32">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-between mb-8 lg:flex-row lg:mb-0"
        >
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-semibold md:text-4xl">Our Doctors</h1>
            <p className="mt-2 text-base md:text-lg">
              Meet our team of highly skilled and compassionate doctors who are dedicated to your health and well-being.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 mt-6 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doc, idx) => (
            <div
              key={idx}
              className="overflow-hidden transition-transform duration-300 transform bg-white shadow-lg rounded-xl hover:scale-105"
            >
              <img src={doc.img} alt={doc.name} className="object-cover w-full h-56" />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{doc.name}</h3>
                <p className="text-sm text-gray-600">{doc.specialties}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Form */}
      <section className="px-5 my-24 max-padd-container lg:px-32">
        <div className="flex flex-col gap-20 py-6 xl:flex-row">
          {/* Booking Form */}
          <div>
            <div className="max-w-lg pb-16">
              <h3 className="text-3xl font-semibold capitalize h3">
                Book <span className="font-normal">Your Appointment</span>
              </h3>
              <p className="mt-2 text-base text-gray-600">
                Fill out the form below to book your healthcare service.
              </p>
            </div>

            <form onSubmit={handleBookingSubmit}>
              <div className="flex gap-x-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  className="w-1/2 px-4 py-2 mb-4 bg-white border-none rounded shadow-sm ring-1 ring-gray-300 focus:ring-cyan-400"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="w-1/2 px-4 py-2 mb-4 bg-white border-none rounded shadow-sm ring-1 ring-gray-300 focus:ring-cyan-400"
                />
              </div>

              {/* Service Dropdown */}
              <div className="relative mb-4">
                <div
                  className="flex items-center justify-between w-full px-4 py-2 bg-white rounded shadow-sm cursor-pointer ring-1 ring-gray-300 hover:ring-cyan-400"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  <span className="text-gray-700">
                    {selectedService || "Select a Service"}
                  </span>
                  <FaChevronDown className={`transition-transform ${showDropdown ? "rotate-180" : ""}`} />
                </div>

                {showDropdown && (
                  <ul className="absolute z-20 w-full mt-1 overflow-y-auto bg-white border border-gray-200 rounded shadow-md max-h-48">
                    {services.map((srv, idx) => (
                      <li
                        key={idx}
                        className="px-4 py-2 text-gray-700 cursor-pointer hover:bg-cyan-50"
                        onClick={() => {
                          setSelectedService(srv);
                          setShowDropdown(false);
                        }}
                      >
                        {srv}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <input type="hidden" name="service" value={selectedService} />

              <textarea
                name="message"
                rows="4"
                placeholder="Write your message or symptoms"
                required
                className="w-full px-4 py-2 mb-4 bg-white rounded shadow-sm resize-none ring-1 ring-gray-300 focus:ring-cyan-400"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 text-lg font-medium text-white transition rounded-lg shadow-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-90 disabled:opacity-50"
              >
                {loading ? "Booking..." : "Book Now"}
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div>
            <div className="max-w-lg pb-16">
              <h3 className="text-3xl font-semibold capitalize h3">
                Contact <span className="font-normal">Details</span>
              </h3>
              <p>
                We’re always here to assist you! Feel free to reach out anytime.
              </p>
            </div>

            <div className="flex flex-col gap-3 text-gray-700">
              <p className="flex items-center gap-x-2">
                <FaLocationDot /> 1234 Elm Street, Springfield, IL, USA
              </p>
              <p className="flex items-center gap-x-2">
                <FaEnvelope /> info@primetutor.com
              </p>
              <p className="flex items-center gap-x-2">
                <FaPhone /> +1 (800) 123-4567
              </p>
              <p className="flex items-center gap-x-2">
                <FaHeadphones /> 24/7 Support Open
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthCare;
