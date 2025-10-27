// import React from "react";
// import {
//   FaEnvelope,
//   FaHeadphones,
//   FaLocationDot,
//   FaPhone,
// } from "react-icons/fa6";

// const Contact = () => {
//   return (
//     <section className="my-24 max-padd-container">
//       {/* Contact Form and Details */}
//       <div className="flex flex-col gap-20 py-6 xl:flex-row">
//         {/* Contact Form */}
//         <div>
//           {/* Title */}
//           <div className="max-w-lg pb-16">
//             <h3 className="capitalize h3">
//             Get <span className="font-[400]">in Touch</span>
//             </h3>
//             <p>
//             Have questions or need help? Send us a message, and we'll get back to you as soon as possible.
//             </p>
//           </div>
//           <form>
//             <div className="flex gap-x-5">
//               <div className="w-1/2 mb-4">
//                 <input
//                   type="text"
//                   id="name"
//                   placeholder="Enter your name"
//                   className="w-full mt-1 py-1.5 px-3 border-none ring-1 ring-slate-900/5 regular-14 bg-white rounded"
//                 />
//               </div>
//               <div className="w-1/2 mb-4">
//                 <input
//                   type="email"
//                   id="email"
//                   placeholder="Enter your email"
//                   className="w-full mt-1 py-1.5 px-3 border-none ring-1 ring-slate-900/5 regular-14 bg-white rounded"
//                 />
//               </div>
//             </div>
//             <div className="mb-4">
//               <textarea
//                 id="message"
//                 rows="4"
//                 placeholder="Write your message here"
//                 className="w-full mt-1 py-1.5 px-3 border-none ring-1 ring-slate-900/5 regular-14 bg-white rounded resize-none"
//               ></textarea>
//             </div>
//             <button type="submit" className="btn-secondary !rounded shadow-sm">
//               Send Message
//             </button>
//           </form>
//         </div>

//         {/* Contact Details */}
//         <div>
//           {/* Title */}
//           <div className="max-w-lg pb-16">
//             <h3 className="capitalize h3">
//             Contact <span className="font-[400]">Details</span>
//             </h3>
//             <p>
//             We are always here to assist you! Feel free to reach out to us through any of the following methods
//             </p>
//           </div>
//           <div className="flex flex-col gap-3">
//             <div className="flex flex-col">
//               <h5 className="mr-4 capitalize h5">location:</h5>
//               <p className="flexStart gap-x-2">
//                 <FaLocationDot /> 1234 Elm Street Springfield, IL USA
//               </p>
//             </div>
//             <div className="flex flex-col">
//               <h5 className="mr-4 capitalize h5">email:</h5>
//               <p className="flexStart gap-x-2">
//                 <FaEnvelope /> info@primetutor.com
//               </p>
//             </div>
//             <div className="flex flex-col">
//               <h5 className="mr-4 capitalize h5">phone:</h5>
//               <p className="flexStart gap-x-2">
//                 <FaPhone /> +1 (800) 123-4567
//               </p>
//             </div>
//             <div className="flex flex-col">
//               <h5 className="mr-4 capitalize h5">Support:</h5>
//               <p className="flexStart gap-x-2">
//                 <FaHeadphones /> 24/7 Support is open
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;


import React, { useState } from "react";
import { FaEnvelope, FaHeadphones, FaLocationDot, FaPhone } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    formData.append("access_key", "d8bc3a52-5209-4956-93bf-25881ea36833");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    setLoading(false);

    if (result.success) {
      toast.success("✅ Message sent successfully!");
      e.target.reset();
    } else {
      toast.error("❌ Submission failed. Please check your connection.");
    }
  };

  return (
    <section className="my-24 max-padd-container">
      <ToastContainer position="top-center" autoClose={2500} />

      {/* Contact Form and Details */}
      <div className="flex flex-col gap-20 py-6 xl:flex-row">
        {/* Contact Form */}
        <div>
          {/* Title */}
          <div className="max-w-lg pb-16">
            <h3 className="capitalize h3">
              Get <span className="font-[400]">in Touch</span>
            </h3>
            <p>
              Have questions or need help? Send us a message, and we'll get back to you as soon as possible.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="flex gap-x-5">
              <div className="w-1/2 mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="w-full mt-1 py-1.5 px-3 border-none ring-1 ring-slate-900/5 regular-14 bg-white rounded"
                />
              </div>
              <div className="w-1/2 mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="w-full mt-1 py-1.5 px-3 border-none ring-1 ring-slate-900/5 regular-14 bg-white rounded"
                />
              </div>
            </div>

            <div className="mb-4">
              <textarea
                name="message"
                rows="4"
                placeholder="Write your message here"
                required
                className="w-full mt-1 py-1.5 px-3 border-none ring-1 ring-slate-900/5 regular-14 bg-white rounded resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-secondary !rounded shadow-sm disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div>
          <div className="max-w-lg pb-16">
            <h3 className="capitalize h3">
              Contact <span className="font-[400]">Details</span>
            </h3>
            <p>
              We are always here to assist you! Feel free to reach out to us through any of the following methods.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex flex-col">
              <h5 className="mr-4 capitalize h5">Location:</h5>
              <p className="flexStart gap-x-2">
                <FaLocationDot /> 1234 Elm Street, Springfield, IL, USA
              </p>
            </div>

            <div className="flex flex-col">
              <h5 className="mr-4 capitalize h5">Email:</h5>
              <p className="flexStart gap-x-2">
                <FaEnvelope /> info@primetutor.com
              </p>
            </div>

            <div className="flex flex-col">
              <h5 className="mr-4 capitalize h5">Phone:</h5>
              <p className="flexStart gap-x-2">
                <FaPhone /> +1 (800) 123-4567
              </p>
            </div>

            <div className="flex flex-col">
              <h5 className="mr-4 capitalize h5">Support:</h5>
              <p className="flexStart gap-x-2">
                <FaHeadphones /> 24/7 Support is open
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
