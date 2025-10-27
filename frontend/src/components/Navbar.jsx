// // // // import React from "react";
// // // // import { TbHomeFilled } from "react-icons/tb";
// // // // import { FaRegWindowClose } from "react-icons/fa";
// // // // import { Link, NavLink } from "react-router-dom";
// // // // import { IoMdListBox } from "react-icons/io";
// // // // import { IoMailOpen } from "react-icons/io5";

// // // // const Navbar = ({ containerStyles, toggleMenu, menuOpened }) => {
// // // //   const navItems = [
// // // //     { to: "/", label: "Home" },
// // // //     { to: "/tutors", label: "Tutors" },
// // // //     { to: "/blog", label: "Blog" },
// // // //     { to: "/contact", label: "Contact" },
// // // //   ];
// // // //   return (
// // // //     <nav className={containerStyles}>
// // // //       {/* close button inside navbar */}
// // // //       {menuOpened && (
// // // //         <>
// // // //           <FaRegWindowClose
// // // //             onClick={toggleMenu}
// // // //             className="relative self-end text-xl cursor-pointer left-8"
// // // //           />
// // // //           {/* logo */}
// // // //           <Link to={"/"} className="flex pb-12 bold-24">
// // // //             <span className="inline-flex">
// // // //               <span className="inline-flex items-center justify-center p-2 h-8 w-8 bg-secondary text-tertiary -rotate-[31deg] rounded-full">
// // // //                 P
// // // //               </span>
// // // //               rimeTutor
// // // //             </span>
// // // //           </Link>
// // // //         </>
// // // //       )}
// // // //       {navItems.map(({ to, label, icon }) => (
// // // //         <div key={label} className="inline-flex">
// // // //           <NavLink
// // // //             to={to}
// // // //             className={({ isActive }) => (isActive ? "active-link" : "")}
// // // //           >
// // // //             <h5 className="medium-16">{label}</h5>
// // // //           </NavLink>
// // // //         </div>
// // // //       ))}
// // // //     </nav>
// // // //   );
// // // // };

// // // // export default Navbar;


// // // // import React, { useState } from "react";
// // // // import { FaRegWindowClose } from "react-icons/fa";
// // // // import { Link, NavLink } from "react-router-dom";

// // // // const Navbar = ({ containerStyles, toggleMenu, menuOpened }) => {
// // // //   const [dropdownOpen, setDropdownOpen] = useState(false);

// // // //   const toggleDropdown = () => {
// // // //     setDropdownOpen(!dropdownOpen);
// // // //   };

// // // //   const navItems = [
// // // //     { to: "/", label: "Home" },
// // // //     { to: "/tutors", label: "Tutors" },
// // // //     { to: "/blog", label: "Blog" },
// // // //     { to: "/contact", label: "Contact" },
// // // //     { to: "/about-us", label: "About" },
// // // //   ];

// // // //   return (
// // // //     <nav className={containerStyles}>
// // // //       {/* close button inside navbar */}
// // // //       {menuOpened && (
// // // //         <>
// // // //           <FaRegWindowClose
// // // //             onClick={toggleMenu}
// // // //             className="relative self-end text-xl cursor-pointer left-8"
// // // //           />
// // // //           {/* logo */}
// // // //           <Link to={"/"} className="flex pb-12 bold-24">
// // // //             <span className="inline-flex">
// // // //               <span className="inline-flex items-center justify-center p-2 h-8 w-8 bg-secondary text-tertiary -rotate-[31deg] rounded-full">
// // // //                 P
// // // //               </span>
// // // //               rimeTutor
// // // //             </span>
// // // //           </Link>
// // // //         </>
// // // //       )}

// // // //       {/* Nav Items */}
// // // //       {navItems.map(({ to, label }) => (
// // // //         <div key={label} className="inline-flex">
// // // //           <NavLink to={to} className={({ isActive }) => (isActive ? "active-link" : "")}>
// // // //             <h5 className="medium-16">{label}</h5>
// // // //           </NavLink>
// // // //         </div>
// // // //       ))}

// // // //       {/* Services Dropdown */}
// // // //       <div className="relative inline-flex">
// // // //         <button onClick={toggleDropdown} className="text-white">
// // // //           Services
// // // //         </button>
// // // //         {dropdownOpen && (
// // // //           <ul className="absolute left-0 mt-2 text-black bg-white shadow-lg">
// // // //             <li>
// // // //               <NavLink to="/services/health-care" className="block px-4 py-2">Free Health Care Service</NavLink>
// // // //             </li>
// // // //             <li>
// // // //               <NavLink to="/services/food-distribution" className="block px-4 py-2">Free Food Distribution</NavLink>
// // // //             </li>
// // // //             <li>
// // // //               <NavLink to="/services/education-support" className="block px-4 py-2">Free Education Support</NavLink>
// // // //             </li>
// // // //             <li>
// // // //               <NavLink to="/services/medicine-vaccine" className="block px-4 py-2">Free Medicine and Vaccine</NavLink>
// // // //             </li>
// // // //             <li>
// // // //               <NavLink to="/services/blood-donation" className="block px-4 py-2">Free Blood Donation</NavLink>
// // // //             </li>
// // // //             <li>
// // // //               <NavLink to="/services/clean-water" className="block px-4 py-2">Free Clean Water Project</NavLink>
// // // //             </li>
// // // //           </ul>
// // // //         )}
// // // //       </div>
// // // //     </nav>
// // // //   );
// // // // };

// // // // export default Navbar;



// // // import React, { useState } from "react";
// // // import { FaRegWindowClose } from "react-icons/fa";
// // // import { Link, NavLink } from "react-router-dom";

// // // const Navbar = ({ containerStyles, toggleMenu, menuOpened }) => {
// // //   const [dropdownOpen, setDropdownOpen] = useState(false);

// // //   const toggleDropdown = () => {
// // //     setDropdownOpen(!dropdownOpen);
// // //   };

// // //   const navItems = [
// // //     { to: "/", label: "Home" },
// // //     { to: "/tutors", label: "Tutors" },
// // //     { to: "/blog", label: "Blog" },
// // //     { to: "/contact", label: "Contact" },
// // //     { to: "/about-us", label: "About" },
// // //   ];

// // //   return (
// // //     <nav className={containerStyles}>
// // //       {/* close button inside navbar */}
// // //       {menuOpened && (
// // //         <>
// // //           <FaRegWindowClose
// // //             onClick={toggleMenu}
// // //             className="relative self-end text-xl cursor-pointer left-8"
// // //           />
// // //           {/* logo */}
// // //           <Link to={"/"} className="flex pb-12 bold-24">
// // //             <span className="inline-flex">
// // //               <span className="inline-flex items-center justify-center p-2 h-8 w-8 bg-secondary text-tertiary -rotate-[31deg] rounded-full">
// // //                 P
// // //               </span>
// // //               rimeTutor
// // //             </span>
// // //           </Link>
// // //         </>
// // //       )}

// // //       {/* Nav Items */}
// // //       {navItems.map(({ to, label }) => (
// // //         <div key={label} className="inline-flex">
// // //           <NavLink to={to} className={({ isActive }) => (isActive ? "active-link" : "")}>
// // //             <h5 className="medium-16">{label}</h5>
// // //           </NavLink>
// // //         </div>
// // //       ))}

// // //       {/* Services Dropdown */}
// // //       <div className="relative inline-flex">
// // //         <button onClick={toggleDropdown} className="flex items-center text-white">
// // //           Services
// // //           <svg
// // //             className={`w-4 h-4 ml-2 transform ${dropdownOpen ? "rotate-180" : "rotate-0"}`}
// // //             xmlns="http://www.w3.org/2000/svg"
// // //             fill="none"
// // //             viewBox="0 0 24 24"
// // //             stroke="currentColor"
// // //           >
// // //             <path
// // //               strokeLinecap="round"
// // //               strokeLinejoin="round"
// // //               strokeWidth="2"
// // //               d="M19 9l-7 7-7-7"
// // //             />
// // //           </svg>
// // //         </button>
// // //         {dropdownOpen && (
// // //           <ul className="absolute left-0 p-2 mt-2 text-black bg-white shadow-lg w-52">
// // //             <li>
// // //               <NavLink to="/services/health-care" className="block px-4 py-2">Free Health Care Service</NavLink>
// // //             </li>
// // //             <li>
// // //               <NavLink to="/services/food-distribution" className="block px-4 py-2">Free Food Distribution</NavLink>
// // //             </li>
// // //             <li>
// // //               <NavLink to="/services/education-support" className="block px-4 py-2">Free Education Support</NavLink>
// // //             </li>
// // //             <li>
// // //               <NavLink to="/services/medicine-vaccine" className="block px-4 py-2">Free Medicine and Vaccine</NavLink>
// // //             </li>
// // //             <li>
// // //               <NavLink to="/services/blood-donation" className="block px-4 py-2">Free Blood Donation</NavLink>
// // //             </li>
// // //             <li>
// // //               <NavLink to="/services/clean-water" className="block px-4 py-2">Free Clean Water Project</NavLink>
// // //             </li>
// // //           </ul>
// // //         )}
// // //       </div>
// // //     </nav>
// // //   );
// // // };

// // // export default Navbar;


// // import React, { useState, useEffect, useRef } from "react";
// // import { FaRegWindowClose } from "react-icons/fa";
// // import { Link, NavLink } from "react-router-dom";

// // const Navbar = ({ containerStyles, toggleMenu, menuOpened }) => {
// //   const [dropdownOpen, setDropdownOpen] = useState(false);
// //   const dropdownRef = useRef(null); // Reference to the dropdown menu
// //   const buttonRef = useRef(null); // Reference to the services button

// //   // Toggle dropdown visibility
// //   const toggleDropdown = () => {
// //     setDropdownOpen((prev) => !prev);
// //   };

// //   // Close dropdown if clicked outside
// //   const handleClickOutside = (event) => {
// //     if (
// //       dropdownRef.current && !dropdownRef.current.contains(event.target) &&
// //       buttonRef.current && !buttonRef.current.contains(event.target)
// //     ) {
// //       setDropdownOpen(false);
// //     }
// //   };

// //   // Use effect hook to listen for clicks outside
// //   useEffect(() => {
// //     document.addEventListener("mousedown", handleClickOutside);
// //     return () => {
// //       document.removeEventListener("mousedown", handleClickOutside);
// //     };
// //   }, []);

// //   const navItems = [
// //     { to: "/", label: "Home" },
// //     { to: "/tutors", label: "Tutors" },
// //     { to: "/blog", label: "Blog" },
// //     { to: "/contact", label: "Contact" },
// //     { to: "/about-us", label: "About" },
// //   ];

// //   return (
// //     <nav className={containerStyles}>
// //       {/* close button inside navbar */}
// //       {menuOpened && (
// //         <>
// //           <FaRegWindowClose
// //             onClick={toggleMenu}
// //             className="relative self-end text-xl cursor-pointer left-8"
// //           />
// //           {/* logo */}
// //           <Link to={"/"} className="flex pb-12 bold-24">
// //             <span className="inline-flex">
// //               <span className="inline-flex items-center justify-center p-2 h-8 w-8 bg-secondary text-tertiary -rotate-[31deg] rounded-full">
// //                 P
// //               </span>
// //               rimeTutor
// //             </span>
// //           </Link>
// //         </>
// //       )}

// //       {/* Nav Items */}
// //       {navItems.map(({ to, label }) => (
// //         <div key={label} className="inline-flex">
// //           <NavLink to={to} className={({ isActive }) => (isActive ? "active-link" : "")}>
// //             <h5 className="medium-16">{label}</h5>
// //           </NavLink>
// //         </div>
// //       ))}

// //       {/* Services Dropdown */}
// //       <div className="relative inline-flex">
// //         <button
// //           ref={buttonRef}
// //           onClick={toggleDropdown}
// //           className="flex items-center text-white"
// //         >
// //           Services
// //           <svg
// //             className={`w-4 h-4 ml-2 transform ${dropdownOpen ? "rotate-180" : "rotate-0"}`}
// //             xmlns="http://www.w3.org/2000/svg"
// //             fill="none"
// //             viewBox="0 0 24 24"
// //             stroke="currentColor"
// //           >
// //             <path
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //               strokeWidth="2"
// //               d="M19 9l-7 7-7-7"
// //             />
// //           </svg>
// //         </button>

// //         {/* Dropdown Menu */}
// //         {dropdownOpen && (
// //           <ul
// //             ref={dropdownRef}
// //             className="absolute left-0 z-10 p-2 mt-2 text-black bg-white shadow-lg w-52 rounded-box"
// //           >
// //             <li>
// //               <NavLink to="/services/health-care" className="block px-4 py-2">Free Health Care Service</NavLink>
// //             </li>
// //             <li>
// //               <NavLink to="/services/food-distribution" className="block px-4 py-2">Free Food Distribution</NavLink>
// //             </li>
// //             <li>
// //               <NavLink to="/services/education-support" className="block px-4 py-2">Free Education Support</NavLink>
// //             </li>
// //             <li>
// //               <NavLink to="/services/medicine-vaccine" className="block px-4 py-2">Free Medicine and Vaccine</NavLink>
// //             </li>
// //             <li>
// //               <NavLink to="/services/blood-donation" className="block px-4 py-2">Free Blood Donation</NavLink>
// //             </li>
// //             <li>
// //               <NavLink to="/services/clean-water" className="block px-4 py-2">Free Clean Water Project</NavLink>
// //             </li>
// //           </ul>
// //         )}
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;


// // import React, { useState, useEffect, useRef } from "react";
// // import { FaRegWindowClose } from "react-icons/fa";
// // import { Link, NavLink } from "react-router-dom";

// // const Navbar = ({ containerStyles, toggleMenu, menuOpened }) => {
// //   const [dropdownOpen, setDropdownOpen] = useState(false);
// //   const [selectedService, setSelectedService] = useState(null); // To track selected service
// //   const dropdownRef = useRef(null); // Reference to the dropdown menu
// //   const buttonRef = useRef(null); // Reference to the services button

// //   // Toggle dropdown visibility
// //   const toggleDropdown = () => {
// //     setDropdownOpen((prev) => !prev);
// //   };

// //   // Close dropdown if clicked outside
// //   const handleClickOutside = (event) => {
// //     if (
// //       dropdownRef.current && !dropdownRef.current.contains(event.target) &&
// //       buttonRef.current && !buttonRef.current.contains(event.target)
// //     ) {
// //       setDropdownOpen(false);
// //     }
// //   };

// //   // Use effect hook to listen for clicks outside
// //   useEffect(() => {
// //     document.addEventListener("mousedown", handleClickOutside);
// //     return () => {
// //       document.removeEventListener("mousedown", handleClickOutside);
// //     };
// //   }, []);

// //   // Set selected service when a service is clicked
// //   const handleServiceClick = (service) => {
// //     setSelectedService(service);
// //     setDropdownOpen(false); // Close dropdown after selecting
// //   };

// //   const navItems = [
// //     { to: "/", label: "Home" },
// //     { to: "/tutors", label: "Tutors" },
// //     { to: "/blog", label: "Blog" },
// //     { to: "/contact", label: "Contact" },
// //     { to: "/about-us", label: "About" },
// //   ];

// //   return (
// //     <nav className={containerStyles}>
// //       {/* close button inside navbar */}
// //       {menuOpened && (
// //         <>
// //           <FaRegWindowClose
// //             onClick={toggleMenu}
// //             className="relative self-end text-xl cursor-pointer left-8"
// //           />
// //           {/* logo */}
// //           <Link to={"/"} className="flex pb-12 bold-24">
// //             <span className="inline-flex">
// //               <span className="inline-flex items-center justify-center p-2 h-8 w-8 bg-secondary text-tertiary -rotate-[31deg] rounded-full">
// //                 P
// //               </span>
// //               rimeTutor
// //             </span>
// //           </Link>
// //         </>
// //       )}

// //       {/* Nav Items */}
// //       {navItems.map(({ to, label }) => (
// //         <div key={label} className="inline-flex">
// //           <NavLink to={to} className={({ isActive }) => (isActive ? "active-link" : "")}>
// //             <h5 className="medium-16">{label}</h5>
// //           </NavLink>
// //         </div>
// //       ))}

// //       {/* Services Dropdown */}
// //       <div className="relative inline-flex">
// //         <button
// //           ref={buttonRef}
// //           onClick={toggleDropdown}
// //           className="flex items-center text-white"
// //         >
// //           Services
// //           <svg
// //             className={`w-4 h-4 ml-2 transform ${dropdownOpen ? "rotate-180" : "rotate-0"}`}
// //             xmlns="http://www.w3.org/2000/svg"
// //             fill="none"
// //             viewBox="0 0 24 24"
// //             stroke="currentColor"
// //           >
// //             <path
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //               strokeWidth="2"
// //               d="M19 9l-7 7-7-7"
// //             />
// //           </svg>
// //         </button>

// //         {/* Dropdown Menu */}
// //         {dropdownOpen && (
// //           <ul
// //             ref={dropdownRef}
// //             className="absolute left-0 z-10 p-2 mt-2 text-black transition-all duration-300 ease-in-out transform bg-white shadow-lg w-72 rounded-box"
// //             style={{ maxHeight: "300px", overflowY: "auto" }}
// //           >
// //             <li>
// //               <NavLink
// //                 to="/services/health-care"
// //                 onClick={() => handleServiceClick("Free Health Care Service")}
// //                 className={`block px-4 py-2 ${selectedService === "Free Health Care Service" ? "bg-gray-200" : ""}`}
// //               >
// //                 Free Health Care Service
// //               </NavLink>
// //             </li>
// //             <li>
// //               <NavLink
// //                 to="/services/food-distribution"
// //                 onClick={() => handleServiceClick("Free Food Distribution")}
// //                 className={`block px-4 py-2 ${selectedService === "Free Food Distribution" ? "bg-gray-200" : ""}`}
// //               >
// //                 Free Food Distribution
// //               </NavLink>
// //             </li>
// //             <li>
// //               <NavLink
// //                 to="/services/education-support"
// //                 onClick={() => handleServiceClick("Free Education Support")}
// //                 className={`block px-4 py-2 ${selectedService === "Free Education Support" ? "bg-gray-200" : ""}`}
// //               >
// //                 Free Education Support
// //               </NavLink>
// //             </li>
// //             <li>
// //               <NavLink
// //                 to="/services/medicine-vaccine"
// //                 onClick={() => handleServiceClick("Free Medicine and Vaccine")}
// //                 className={`block px-4 py-2 ${selectedService === "Free Medicine and Vaccine" ? "bg-gray-200" : ""}`}
// //               >
// //                 Free Medicine and Vaccine
// //               </NavLink>
// //             </li>
// //             <li>
// //               <NavLink
// //                 to="/services/blood-donation"
// //                 onClick={() => handleServiceClick("Free Blood Donation")}
// //                 className={`block px-4 py-2 ${selectedService === "Free Blood Donation" ? "bg-gray-200" : ""}`}
// //               >
// //                 Free Blood Donation
// //               </NavLink>
// //             </li>
// //             <li>
// //               <NavLink
// //                 to="/services/clean-water"
// //                 onClick={() => handleServiceClick("Free Clean Water Project")}
// //                 className={`block px-4 py-2 ${selectedService === "Free Clean Water Project" ? "bg-gray-200" : ""}`}
// //               >
// //                 Free Clean Water Project
// //               </NavLink>
// //             </li>
// //           </ul>
// //         )}
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;


// import React, { useState, useRef } from "react";
// import { FaRegWindowClose } from "react-icons/fa";
// import { Link, NavLink } from "react-router-dom";

// const Navbar = ({ containerStyles, toggleMenu, menuOpened }) => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [selectedService, setSelectedService] = useState(null); // To track selected service
//   const dropdownRef = useRef(null);
//   const buttonRef = useRef(null);

//   // Handle service click
//   const handleServiceClick = (service) => {
//     setSelectedService(service);
//     setDropdownOpen(false);
//   };

//   const navItems = [
//     { to: "/", label: "Home" },
//     { to: "/tutors", label: "Tutors" },
//     { to: "/blog", label: "Blog" },
//     { to: "/contact", label: "Contact" },
//     { to: "/about-us", label: "About" },
//   ];

//   return (
//     <nav className={containerStyles}>
//       {/* Close button inside navbar */}
//       {menuOpened && (
//         <>
//           <FaRegWindowClose
//             onClick={toggleMenu}
//             className="relative self-end text-xl cursor-pointer left-8"
//           />
//           {/* Logo */}
//           <Link to={"/"} className="flex pb-12 bold-24">
//             <span className="inline-flex">
//               <span className="inline-flex items-center justify-center p-2 h-8 w-8 bg-secondary text-tertiary -rotate-[31deg] rounded-full">
//                 P
//               </span>
//               rimeTutor
//             </span>
//           </Link>
//         </>
//       )}

//       {/* Nav Items */}
//       {navItems.map(({ to, label }) => (
//         <div key={label} className="inline-flex">
//           <NavLink to={to} className={({ isActive }) => (isActive ? "active-link" : "")}>
//             <h5 className="medium-16">{label}</h5>
//           </NavLink>
//         </div>
//       ))}

//       {/* Services Dropdown */}
//       <div
//         className="relative inline-flex"
//         onMouseEnter={() => setDropdownOpen(true)}
//         onMouseLeave={() => setDropdownOpen(false)}
//       >
//         <button ref={buttonRef} className="flex items-center text-white">
//           Services
//           <svg
//             className={`w-4 h-4 ml-2 transform transition-transform duration-300 ${
//               dropdownOpen ? "rotate-180" : "rotate-0"
//             }`}
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M19 9l-7 7-7-7"
//             />
//           </svg>
//         </button>

//         {/* Dropdown Menu */}
//         <ul
//           ref={dropdownRef}
//           className={`absolute left-0 z-10 p-2 mt-6 text-black bg-white shadow-lg w-72 rounded-box transition-all duration-300 ease-in-out transform ${
//             dropdownOpen
//               ? "opacity-100 translate-y-0 visible"
//               : "opacity-0 -translate-y-3 invisible"
//           }`}
//           style={{ maxHeight: "300px", overflowY: "auto" }}
//         >
//           <li>
//             <NavLink
//               to="/services/health-care"
//               onClick={() => handleServiceClick("Free Health Care Service")}
//               className={`block px-4 py-2 hover:bg-gray-100 ${
//                 selectedService === "Free Health Care Service" ? "bg-gray-200" : ""
//               }`}
//             >
//               Free Health Care Service
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/services/food-distribution"
//               onClick={() => handleServiceClick("Free Food Distribution")}
//               className={`block px-4 py-2 hover:bg-gray-100 ${
//                 selectedService === "Free Food Distribution" ? "bg-gray-200" : ""
//               }`}
//             >
//               Free Food Distribution
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/services/education-support"
//               onClick={() => handleServiceClick("Free Education Support")}
//               className={`block px-4 py-2 hover:bg-gray-100 ${
//                 selectedService === "Free Education Support" ? "bg-gray-200" : ""
//               }`}
//             >
//               Free Education Support
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/services/medicine-vaccine"
//               onClick={() => handleServiceClick("Free Medicine and Vaccine")}
//               className={`block px-4 py-2 hover:bg-gray-100 ${
//                 selectedService === "Free Medicine and Vaccine" ? "bg-gray-200" : ""
//               }`}
//             >
//               Free Medicine and Vaccine
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/services/blood-donation"
//               onClick={() => handleServiceClick("Free Blood Donation")}
//               className={`block px-4 py-2 hover:bg-gray-100 ${
//                 selectedService === "Free Blood Donation" ? "bg-gray-200" : ""
//               }`}
//             >
//               Free Blood Donation
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/services/clean-water"
//               onClick={() => handleServiceClick("Free Clean Water Project")}
//               className={`block px-4 py-2 hover:bg-gray-100 ${
//                 selectedService === "Free Clean Water Project" ? "bg-gray-200" : ""
//               }`}
//             >
//               Free Clean Water Project
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useRef } from "react";
import { FaRegWindowClose } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ containerStyles, toggleMenu, menuOpened }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setDropdownOpen(false);
  };

  // 🟢 About section removed + Services moved right after Home
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/tutors", label: "Tutors" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className={containerStyles}>
      {/* Close button inside navbar */}
      {menuOpened && (
        <>
          <FaRegWindowClose
            onClick={toggleMenu}
            className="relative self-end text-xl cursor-pointer left-8"
          />
          {/* Logo */}
          <Link to={"/"} className="flex pb-12 bold-24">
            <span className="inline-flex">
              <span className="inline-flex items-center justify-center p-2 h-8 w-8 bg-secondary text-tertiary -rotate-[31deg] rounded-full">
                P
              </span>
              rimeTutor
            </span>
          </Link>
        </>
      )}

      {/* Home Link */}
      <div className="inline-flex">
        <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>
          <h5 className="medium-16">Home</h5>
        </NavLink>
      </div>

      {/* 🟢 Services Dropdown (Moved just after Home) */}
      <div
        className="relative inline-flex"
        onMouseEnter={() => setDropdownOpen(true)}
        onMouseLeave={() => setDropdownOpen(false)}
      >
        <button ref={buttonRef} className="flex items-center text-white">
          Services
          <svg
            className={`w-4 h-4 ml-2 transform transition-transform duration-300 ${
              dropdownOpen ? "rotate-180" : "rotate-0"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Dropdown Menu */}
        <ul
          ref={dropdownRef}
          className={`absolute left-0 z-10 p-2 mt-6 text-black bg-white shadow-lg w-72 rounded-box transition-all duration-300 ease-in-out transform ${
            dropdownOpen
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-3 invisible"
          }`}
          style={{ maxHeight: "300px", overflowY: "auto" }}
        >
          <li>
            <NavLink
              to="/services/health-care"
              onClick={() => handleServiceClick("Free Health Care Service")}
              className={`block px-4 py-2 hover:bg-gray-100 ${
                selectedService === "Free Health Care Service" ? "bg-gray-200" : ""
              }`}
            >
              Free Health Care Service
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services/food-distribution"
              onClick={() => handleServiceClick("Free Food Distribution")}
              className={`block px-4 py-2 hover:bg-gray-100 ${
                selectedService === "Free Food Distribution" ? "bg-gray-200" : ""
              }`}
            >
              Free Food Distribution
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services/education-support"
              onClick={() => handleServiceClick("Free Education Support")}
              className={`block px-4 py-2 hover:bg-gray-100 ${
                selectedService === "Free Education Support" ? "bg-gray-200" : ""
              }`}
            >
              Free Education Support
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services/medicine-vaccine"
              onClick={() => handleServiceClick("Free Medicine and Vaccine")}
              className={`block px-4 py-2 hover:bg-gray-100 ${
                selectedService === "Free Medicine and Vaccine" ? "bg-gray-200" : ""
              }`}
            >
              Free Medicine and Vaccine
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services/blood-donation"
              onClick={() => handleServiceClick("Free Blood Donation")}
              className={`block px-4 py-2 hover:bg-gray-100 ${
                selectedService === "Free Blood Donation" ? "bg-gray-200" : ""
              }`}
            >
              Free Blood Donation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services/clean-water"
              onClick={() => handleServiceClick("Free Clean Water Project")}
              className={`block px-4 py-2 hover:bg-gray-100 ${
                selectedService === "Free Clean Water Project" ? "bg-gray-200" : ""
              }`}
            >
              Free Clean Water Project
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Rest of the Nav Items */}
      {navItems.slice(1).map(({ to, label }) => (
        <div key={label} className="inline-flex">
          <NavLink to={to} className={({ isActive }) => (isActive ? "active-link" : "")}>
            <h5 className="medium-16">{label}</h5>
          </NavLink>
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
