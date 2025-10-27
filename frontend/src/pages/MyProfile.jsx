// // // // // import React, { useContext, useState } from "react";
// // // // // import { toast } from "react-toastify";
// // // // // import upload_icon from "../assets/upload_icon.png";
// // // // // import { AppContext } from "../context/AppContext";
// // // // // import axios from "axios";

// // // // // const MyProfile = () => {
// // // // //   const { userData, setUserData, token, backendUrl, loadUserProfileData } =
// // // // //     useContext(AppContext);

// // // // //   const [isEditing, setIsEditing] = useState(false);
// // // // //   const [selectedImage, setSelectedImage] = useState(false);

// // // // //   const handleProfileUpdate = async () => {
// // // // //     try {
// // // // //       const formData = new FormData();

// // // // //       formData.append("name", userData.name);
// // // // //       formData.append("email", userData.email);
// // // // //       formData.append("phone", userData.phone);
// // // // //       formData.append("address", JSON.stringify(userData.address || {}));
// // // // //       formData.append("gender", userData.gender);
// // // // //       formData.append("dob", userData.dob);

// // // // //       if (selectedImage) {
// // // // //         formData.append("image", selectedImage);
// // // // //       }

// // // // //       const { data } = await axios.post(
// // // // //         backendUrl + "/api/user/update-profile",
// // // // //         formData,
// // // // //         { headers: { token } }
// // // // //       );

// // // // //       if (data.success) {
// // // // //         toast.success(data.message);
// // // // //         await loadUserProfileData();
// // // // //         setIsEditing(false);
// // // // //         setSelectedImage(false);
// // // // //       } else {
// // // // //         toast.error(data.message);
// // // // //       }
// // // // //     } catch (error) {
// // // // //       console.log(error);
// // // // //       toast.error(error.message);
// // // // //     }
// // // // //   };

// // // // //   const handleChange = (e) => {
// // // // //     const { name, value } = e.target;

// // // // //     if (name === "city" || name === "country") {
// // // // //       setUserData((prev) => ({
// // // // //         ...prev,
// // // // //         address: {
// // // // //           ...prev.address,
// // // // //           [name]: value,
// // // // //         },
// // // // //       }));
// // // // //     } else {
// // // // //       setUserData((prev) => ({ ...prev, [name]: value }));
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     userData && (
// // // // //       <div className="px-4 max-padd-container py-28">
// // // // //         <div className="w-full max-w-sm">
// // // // //           <div className="relative flex flex-col">
// // // // //             <div className="relative w-32 h-32">
// // // // //               <img
// // // // //                 src={
// // // // //                   selectedImage
// // // // //                     ? URL.createObjectURL(selectedImage)
// // // // //                     : userData.image || upload_icon
// // // // //                 }
// // // // //                 alt="Profile"
// // // // //                 className="object-cover w-32 h-32 rounded-md"
// // // // //               />

// // // // //               {isEditing && (
// // // // //                 <>
// // // // //                   <label
// // // // //                     htmlFor="image"
// // // // //                     className="absolute inset-0 transition-opacity bg-black bg-opacity-50 rounded-md cursor-pointer flexCenter hover:opacity-80"
// // // // //                   >
// // // // //                     <span className="text-xs font-semibold text-white">
// // // // //                       Upload
// // // // //                     </span>
// // // // //                   </label>
// // // // //                   <input
// // // // //                     type="file"
// // // // //                     id="image"
// // // // //                     accept="image/*"
// // // // //                     hidden
// // // // //                     onChange={(e) => setSelectedImage(e.target.files[0])}
// // // // //                   />
// // // // //                 </>
// // // // //               )}
// // // // //             </div>

// // // // //             <h2 className="mt-4 text-2xl font-bold">{userData.name}</h2>
// // // // //             <p className="text-gray-500">{userData.email}</p>
// // // // //           </div>

// // // // //           <hr className="my-3" />

// // // // //           {/* Personal Details */}
// // // // //           <h4 className="mb-3 text-gray-500 h4">Personal Details</h4>
// // // // //           <div className="space-y-4">
// // // // //             <div className="flex flex-col sm:flex-row sm:items-center space-3">
// // // // //               <label className="bold-14 min-w-44">Name</label>
// // // // //               {isEditing ? (
// // // // //                 <input
// // // // //                   type="text"
// // // // //                   name="name"
// // // // //                   value={userData.name}
// // // // //                   onChange={handleChange}
// // // // //                   className="regular-14 border p-0.5 px-2 w-full sm:w-2/3 rounded"
// // // // //                 />
// // // // //               ) : (
// // // // //                 <p className="mt-1">{userData.name}</p>
// // // // //               )}
// // // // //             </div>

// // // // //             <div className="flex flex-col sm:flex-row sm:items-center space-3">
// // // // //               <label className="bold-14 min-w-44">Phone</label>
// // // // //               {isEditing ? (
// // // // //                 <input
// // // // //                   type="text"
// // // // //                   name="phone"
// // // // //                   value={userData.phone}
// // // // //                   onChange={handleChange}
// // // // //                   className="regular-14 border p-0.5 px-2 w-full sm:w-2/3 rounded"
// // // // //                 />
// // // // //               ) : (
// // // // //                 <p className="mt-1">{userData.phone}</p>
// // // // //               )}
// // // // //             </div>

// // // // //             <div className="flex flex-col sm:flex-row sm:items-center space-3">
// // // // //               <label className="bold-14 min-w-44">Date of Birth</label>
// // // // //               {isEditing ? (
// // // // //                 <input
// // // // //                   type="date"
// // // // //                   name="dob"
// // // // //                   value={userData.dob}
// // // // //                   onChange={handleChange}
// // // // //                   className="regular-14 border p-0.5 px-2 w-full sm:w-2/3 rounded"
// // // // //                 />
// // // // //               ) : (
// // // // //                 <p className="mt-1">{userData.dob}</p>
// // // // //               )}
// // // // //             </div>

// // // // //             <div className="flex flex-col sm:flex-row sm:items-center space-3">
// // // // //               <label className="bold-14 min-w-44">Gender</label>
// // // // //               {isEditing ? (
// // // // //                 <select
// // // // //                   name="gender"
// // // // //                   value={userData.gender}
// // // // //                   onChange={handleChange}
// // // // //                   className="regular-14 border p-0.5 px-2 w-full sm:w-2/3 rounded"
// // // // //                 >
// // // // //                   <option value="Male">Male</option>
// // // // //                   <option value="Female">Female</option>
// // // // //                 </select>
// // // // //               ) : (
// // // // //                 <p className="mt-1">{userData.gender}</p>
// // // // //               )}
// // // // //             </div>
// // // // //           </div>

// // // // //           <hr className="my-3" />

// // // // //           {/* Location Details */}
// // // // //           <h4 className="my-3 text-gray-500 h4">Location Details</h4>
// // // // //           <div className="space-y-4">
// // // // //             <div className="flex flex-col sm:flex-row sm:items-center space-3">
// // // // //               <label className="bold-14 min-w-44">City</label>
// // // // //               {isEditing ? (
// // // // //                 <input
// // // // //                   type="text"
// // // // //                   name="city"
// // // // //                   value={userData.address?.city || ""}
// // // // //                   onChange={handleChange}
// // // // //                   className="regular-14 border p-0.5 px-2 w-full sm:w-2/3 rounded"
// // // // //                 />
// // // // //               ) : (
// // // // //                 <p className="mt-1">{userData.address?.city || "-"}</p>
// // // // //               )}
// // // // //             </div>

// // // // //             <div className="flex flex-col sm:flex-row sm:items-center space-3">
// // // // //               <label className="bold-14 min-w-44">Country</label>
// // // // //               {isEditing ? (
// // // // //                 <input
// // // // //                   type="text"
// // // // //                   name="country"
// // // // //                   value={userData.address?.country || ""}
// // // // //                   onChange={handleChange}
// // // // //                   className="regular-14 border p-0.5 px-2 w-full sm:w-2/3 rounded"
// // // // //                 />
// // // // //               ) : (
// // // // //                 <p className="mt-1">{userData.address?.country || "-"}</p>
// // // // //               )}
// // // // //             </div>
// // // // //           </div>

// // // // //           <button
// // // // //             onClick={() => {
// // // // //               if (isEditing) {
// // // // //                 handleProfileUpdate();
// // // // //               } else {
// // // // //                 setIsEditing(true);
// // // // //               }
// // // // //             }}
// // // // //             className="mt-6 btn-secondary min-w-64"
// // // // //           >
// // // // //             {isEditing ? "Save Changes" : "Edit Profile"}
// // // // //           </button>
// // // // //         </div>
// // // // //       </div>
// // // // //     )
// // // // //   );
// // // // // };

// // // // // export default MyProfile;


// // // // import React, { useContext, useState, useRef } from "react";
// // // // import { toast } from "react-toastify";
// // // // import upload_icon from "../assets/upload_icon.png";
// // // // import { AppContext } from "../context/AppContext";
// // // // import axios from "axios";

// // // // const MyProfile = () => {
// // // //   const { userData, setUserData, token, backendUrl, loadUserProfileData } =
// // // //     useContext(AppContext);

// // // //   const [isEditing, setIsEditing] = useState(false);
// // // //   const [selectedImage, setSelectedImage] = useState(false);
// // // //   const [showDropdown, setShowDropdown] = useState(false);
// // // //   const hideTimeout = useRef(null);

// // // //   const handleProfileUpdate = async () => {
// // // //     try {
// // // //       const formData = new FormData();
// // // //       formData.append("name", userData.name);
// // // //       formData.append("email", userData.email);
// // // //       formData.append("phone", userData.phone);
// // // //       formData.append("address", JSON.stringify(userData.address || {}));
// // // //       formData.append("gender", userData.gender);
// // // //       formData.append("dob", userData.dob);

// // // //       if (selectedImage) {
// // // //         formData.append("image", selectedImage);
// // // //       }

// // // //       const { data } = await axios.post(
// // // //         backendUrl + "/api/user/update-profile",
// // // //         formData,
// // // //         { headers: { token } }
// // // //       );

// // // //       if (data.success) {
// // // //         toast.success(data.message);
// // // //         await loadUserProfileData();
// // // //         setIsEditing(false);
// // // //         setSelectedImage(false);
// // // //       } else {
// // // //         toast.error(data.message);
// // // //       }
// // // //     } catch (error) {
// // // //       console.log(error);
// // // //       toast.error(error.message);
// // // //     }
// // // //   };

// // // //   const handleChange = (e) => {
// // // //     const { name, value } = e.target;

// // // //     if (name === "city" || name === "country") {
// // // //       setUserData((prev) => ({
// // // //         ...prev,
// // // //         address: {
// // // //           ...prev.address,
// // // //           [name]: value,
// // // //         },
// // // //       }));
// // // //     } else {
// // // //       setUserData((prev) => ({ ...prev, [name]: value }));
// // // //     }
// // // //   };

// // // //   return (
// // // //     userData && (
// // // //       <div className="px-4 max-padd-container py-28">
// // // //         <div className="w-full max-w-sm">
// // // //           <div className="relative flex flex-col">
// // // //             {/* Profile Image */}
// // // //             <div
// // // //               className="relative w-32 h-32 group"
// // // //               onMouseEnter={() => {
// // // //                 clearTimeout(hideTimeout.current);
// // // //                 setShowDropdown(true);
// // // //               }}
// // // //               onMouseLeave={() => {
// // // //                 hideTimeout.current = setTimeout(() => setShowDropdown(false), 150);
// // // //               }}
// // // //             >
// // // //               <img
// // // //                 src={
// // // //                   selectedImage
// // // //                     ? URL.createObjectURL(selectedImage)
// // // //                     : userData.image || upload_icon
// // // //                 }
// // // //                 alt="Profile"
// // // //                 className="object-cover w-32 h-32 rounded-md cursor-pointer"
// // // //               />

// // // //               {isEditing && (
// // // //                 <>
// // // //                   <label
// // // //                     htmlFor="image"
// // // //                     className="absolute inset-0 transition-opacity bg-black bg-opacity-50 rounded-md cursor-pointer flexCenter hover:opacity-80"
// // // //                   >
// // // //                     <span className="text-xs font-semibold text-white">
// // // //                       Upload
// // // //                     </span>
// // // //                   </label>
// // // //                   <input
// // // //                     type="file"
// // // //                     id="image"
// // // //                     accept="image/*"
// // // //                     hidden
// // // //                     onChange={(e) => setSelectedImage(e.target.files[0])}
// // // //                   />
// // // //                 </>
// // // //               )}

// // // //               {/* Hover Dropdown */}
// // // //               <div
// // // //                 className={`absolute top-full left-0 mt-2 w-40 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-300 ease-in-out ${
// // // //                   showDropdown
// // // //                     ? "opacity-100 translate-y-0"
// // // //                     : "opacity-0 -translate-y-2 pointer-events-none"
// // // //                 }`}
// // // //               >
// // // //                 <ul className="text-sm text-gray-700">
// // // //                   <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">
// // // //                     View Profile
// // // //                   </li>
// // // //                   <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">
// // // //                     Edit Profile
// // // //                   </li>
// // // //                   <li className="px-4 py-2 cursor-pointer hover:bg-gray-100">
// // // //                     Logout
// // // //                   </li>
// // // //                 </ul>
// // // //               </div>
// // // //             </div>

// // // //             <h2 className="mt-4 text-2xl font-bold">{userData.name}</h2>
// // // //             <p className="text-gray-500">{userData.email}</p>
// // // //           </div>

// // // //           <hr className="my-3" />

// // // //           {/* Personal Details */}
// // // //           <h4 className="mb-3 text-gray-500 h4">Personal Details</h4>
// // // //           <div className="space-y-4">
// // // //             <div className="flex flex-col sm:flex-row sm:items-center space-3">
// // // //               <label className="bold-14 min-w-44">Name</label>
// // // //               {isEditing ? (
// // // //                 <input
// // // //                   type="text"
// // // //                   name="name"
// // // //                   value={userData.name}
// // // //                   onChange={handleChange}
// // // //                   className="regular-14 border p-0.5 px-2 w-full sm:w-2/3 rounded"
// // // //                 />
// // // //               ) : (
// // // //                 <p className="mt-1">{userData.name}</p>
// // // //               )}
// // // //             </div>

// // // //             <div className="flex flex-col sm:flex-row sm:items-center space-3">
// // // //               <label className="bold-14 min-w-44">Phone</label>
// // // //               {isEditing ? (
// // // //                 <input
// // // //                   type="text"
// // // //                   name="phone"
// // // //                   value={userData.phone}
// // // //                   onChange={handleChange}
// // // //                   className="regular-14 border p-0.5 px-2 w-full sm:w-2/3 rounded"
// // // //                 />
// // // //               ) : (
// // // //                 <p className="mt-1">{userData.phone}</p>
// // // //               )}
// // // //             </div>

// // // //             <div className="flex flex-col sm:flex-row sm:items-center space-3">
// // // //               <label className="bold-14 min-w-44">Date of Birth</label>
// // // //               {isEditing ? (
// // // //                 <input
// // // //                   type="date"
// // // //                   name="dob"
// // // //                   value={userData.dob}
// // // //                   onChange={handleChange}
// // // //                   className="regular-14 border p-0.5 px-2 w-full sm:w-2/3 rounded"
// // // //                 />
// // // //               ) : (
// // // //                 <p className="mt-1">{userData.dob}</p>
// // // //               )}
// // // //             </div>

// // // //             <div className="flex flex-col sm:flex-row sm:items-center space-3">
// // // //               <label className="bold-14 min-w-44">Gender</label>
// // // //               {isEditing ? (
// // // //                 <select
// // // //                   name="gender"
// // // //                   value={userData.gender}
// // // //                   onChange={handleChange}
// // // //                   className="regular-14 border p-0.5 px-2 w-full sm:w-2/3 rounded"
// // // //                 >
// // // //                   <option value="Male">Male</option>
// // // //                   <option value="Female">Female</option>
// // // //                 </select>
// // // //               ) : (
// // // //                 <p className="mt-1">{userData.gender}</p>
// // // //               )}
// // // //             </div>
// // // //           </div>

// // // //           <hr className="my-3" />

// // // //           {/* Location Details */}
// // // //           <h4 className="my-3 text-gray-500 h4">Location Details</h4>
// // // //           <div className="space-y-4">
// // // //             <div className="flex flex-col sm:flex-row sm:items-center space-3">
// // // //               <label className="bold-14 min-w-44">City</label>
// // // //               {isEditing ? (
// // // //                 <input
// // // //                   type="text"
// // // //                   name="city"
// // // //                   value={userData.address?.city || ""}
// // // //                   onChange={handleChange}
// // // //                   className="regular-14 border p-0.5 px-2 w-full sm:w-2/3 rounded"
// // // //                 />
// // // //               ) : (
// // // //                 <p className="mt-1">{userData.address?.city || "-"}</p>
// // // //               )}
// // // //             </div>

// // // //             <div className="flex flex-col sm:flex-row sm:items-center space-3">
// // // //               <label className="bold-14 min-w-44">Country</label>
// // // //               {isEditing ? (
// // // //                 <input
// // // //                   type="text"
// // // //                   name="country"
// // // //                   value={userData.address?.country || ""}
// // // //                   onChange={handleChange}
// // // //                   className="regular-14 border p-0.5 px-2 w-full sm:w-2/3 rounded"
// // // //                 />
// // // //               ) : (
// // // //                 <p className="mt-1">{userData.address?.country || "-"}</p>
// // // //               )}
// // // //             </div>
// // // //           </div>

// // // //           <button
// // // //             onClick={() => {
// // // //               if (isEditing) {
// // // //                 handleProfileUpdate();
// // // //               } else {
// // // //                 setIsEditing(true);
// // // //               }
// // // //             }}
// // // //             className="mt-6 btn-secondary min-w-64"
// // // //           >
// // // //             {isEditing ? "Save Changes" : "Edit Profile"}
// // // //           </button>
// // // //         </div>
// // // //       </div>
// // // //     )
// // // //   );
// // // // };

// // // // export default MyProfile;



// // // import React, { useContext, useState, useRef, useEffect } from "react";
// // // import { toast } from "react-toastify";
// // // import upload_icon from "../assets/upload_icon.png";
// // // import { AppContext } from "../context/AppContext";
// // // import axios from "axios";

// // // const MyProfile = () => {
// // //   const { userData, setUserData, token, backendUrl, loadUserProfileData } =
// // //     useContext(AppContext);

// // //   const [isEditing, setIsEditing] = useState(false);
// // //   const [selectedImage, setSelectedImage] = useState(false);
// // //   const [showOptions, setShowOptions] = useState(false);
// // //   const hideTimer = useRef(null);

// // //   const handleProfileUpdate = async () => {
// // //     try {
// // //       const formData = new FormData();
// // //       formData.append("name", userData.name);
// // //       formData.append("email", userData.email);
// // //       formData.append("phone", userData.phone);
// // //       formData.append("address", JSON.stringify(userData.address || {}));
// // //       formData.append("gender", userData.gender);
// // //       formData.append("dob", userData.dob);
// // //       if (selectedImage) formData.append("image", selectedImage);

// // //       const { data } = await axios.post(
// // //         backendUrl + "/api/user/update-profile",
// // //         formData,
// // //         { headers: { token } }
// // //       );

// // //       if (data.success) {
// // //         toast.success(data.message);
// // //         await loadUserProfileData();
// // //         setIsEditing(false);
// // //         setSelectedImage(false);
// // //       } else toast.error(data.message);
// // //     } catch (error) {
// // //       console.log(error);
// // //       toast.error(error.message);
// // //     }
// // //   };

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     if (name === "city" || name === "country") {
// // //       setUserData((prev) => ({
// // //         ...prev,
// // //         address: { ...prev.address, [name]: value },
// // //       }));
// // //     } else setUserData((prev) => ({ ...prev, [name]: value }));
// // //   };

// // //   // 🕒 Delay hide logic
// // //   const handleMouseEnter = () => {
// // //     clearTimeout(hideTimer.current);
// // //     setShowOptions(true);
// // //   };

// // //   const handleMouseLeave = () => {
// // //     clearTimeout(hideTimer.current);
// // //     hideTimer.current = setTimeout(() => {
// // //       setShowOptions(false);
// // //     }, 6000); // 6 seconds delay
// // //   };

// // //   useEffect(() => {
// // //     return () => clearTimeout(hideTimer.current);
// // //   }, []);

// // //   return (
// // //     userData && (
// // //       <div className="px-4 max-padd-container py-28">
// // //         <div className="w-full max-w-sm">
// // //           <div
// // //             className="relative flex flex-col items-start"
// // //             onMouseEnter={handleMouseEnter}
// // //             onMouseLeave={handleMouseLeave}
// // //           >
// // //             <div className="relative w-32 h-32">
// // //               <img
// // //                 src={
// // //                   selectedImage
// // //                     ? URL.createObjectURL(selectedImage)
// // //                     : userData.image || upload_icon
// // //                 }
// // //                 alt="Profile"
// // //                 className="object-cover w-32 h-32 rounded-md cursor-pointer"
// // //               />

// // //               {isEditing && (
// // //                 <>
// // //                   <label
// // //                     htmlFor="image"
// // //                     className="absolute inset-0 transition-opacity bg-black bg-opacity-50 rounded-md cursor-pointer flexCenter hover:opacity-80"
// // //                   >
// // //                     <span className="text-xs font-semibold text-white">
// // //                       Upload
// // //                     </span>
// // //                   </label>
// // //                   <input
// // //                     type="file"
// // //                     id="image"
// // //                     accept="image/*"
// // //                     hidden
// // //                     onChange={(e) => setSelectedImage(e.target.files[0])}
// // //                   />
// // //                 </>
// // //               )}
// // //             </div>

// // //             {/* 🟢 Hover Options under profile image */}
// // //             {showOptions && (
// // //               <div className="absolute top-[8.5rem] left-0 bg-white shadow-lg border rounded-md w-40 py-2 z-50">
// // //                 <button
// // //                   onClick={() => setIsEditing(true)}
// // //                   className="block w-full px-64 py-2 text-sm text-left hover:bg-gray-100"
// // //                 >
// // //                   Edit Profile
// // //                 </button>
// // //                 <button
// // //                   onClick={() => toast.info('Settings coming soon')}
// // //                   className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-100"
// // //                 >
// // //                   Settings
// // //                 </button>
// // //                 <button
// // //                   onClick={() => toast.info('Logout action')}
// // //                   className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-100"
// // //                 >
// // //                   Logout
// // //                 </button>
// // //               </div>
// // //             )}

// // //             <h2 className="mt-4 text-2xl font-bold">{userData.name}</h2>
// // //             <p className="text-gray-500">{userData.email}</p>
// // //           </div>

// // //           <hr className="my-3" />

// // //           {/* Personal Details */}
// // //           <h4 className="mb-3 text-gray-500 h4">Personal Details</h4>
// // //           <div className="space-y-4">
// // //             <div className="flex flex-col sm:flex-row sm:items-center space-3">
// // //               <label className="bold-14 min-w-44">Name</label>
// // //               {isEditing ? (
// // //                 <input
// // //                   type="text"
// // //                   name="name"
// // //                   value={userData.name}
// // //                   onChange={handleChange}
// // //                   className="regular-14 border p-0.5 px-2 w-full sm:w-2/3 rounded"
// // //                 />
// // //               ) : (
// // //                 <p className="mt-1">{userData.name}</p>
// // //               )}
// // //             </div>

// // //             <div className="flex flex-col sm:flex-row sm:items-center space-3">
// // //               <label className="bold-14 min-w-44">Phone</label>
// // //               {isEditing ? (
// // //                 <input
// // //                   type="text"
// // //                   name="phone"
// // //                   value={userData.phone}
// // //                   onChange={handleChange}
// // //                   className="regular-14 border p-0.5 px-2 w-full sm:w-2/3 rounded"
// // //                 />
// // //               ) : (
// // //                 <p className="mt-1">{userData.phone}</p>
// // //               )}
// // //             </div>

// // //             <div className="flex flex-col sm:flex-row sm:items-center space-3">
// // //               <label className="bold-14 min-w-44">Date of Birth</label>
// // //               {isEditing ? (
// // //                 <input
// // //                   type="date"
// // //                   name="dob"
// // //                   value={userData.dob}
// // //                   onChange={handleChange}
// // //                   className="regular-14 border p-0.5 px-2 w-full sm:w-2/3 rounded"
// // //                 />
// // //               ) : (
// // //                 <p className="mt-1">{userData.dob}</p>
// // //               )}
// // //             </div>

// // //             <div className="flex flex-col sm:flex-row sm:items-center space-3">
// // //               <label className="bold-14 min-w-44">Gender</label>
// // //               {isEditing ? (
// // //                 <select
// // //                   name="gender"
// // //                   value={userData.gender}
// // //                   onChange={handleChange}
// // //                   className="regular-14 border p-0.5 px-2 w-full sm:w-2/3 rounded"
// // //                 >
// // //                   <option value="Male">Male</option>
// // //                   <option value="Female">Female</option>
// // //                 </select>
// // //               ) : (
// // //                 <p className="mt-1">{userData.gender}</p>
// // //               )}
// // //             </div>
// // //           </div>

// // //           <hr className="my-3" />

// // //           {/* Location Details */}
// // //           <h4 className="my-3 text-gray-500 h4">Location Details</h4>
// // //           <div className="space-y-4">
// // //             <div className="flex flex-col sm:flex-row sm:items-center space-3">
// // //               <label className="bold-14 min-w-44">City</label>
// // //               {isEditing ? (
// // //                 <input
// // //                   type="text"
// // //                   name="city"
// // //                   value={userData.address?.city || ""}
// // //                   onChange={handleChange}
// // //                   className="regular-14 border p-0.5 px-2 w-full sm:w-2/3 rounded"
// // //                 />
// // //               ) : (
// // //                 <p className="mt-1">{userData.address?.city || "-"}</p>
// // //               )}
// // //             </div>

// // //             <div className="flex flex-col sm:flex-row sm:items-center space-3">
// // //               <label className="bold-14 min-w-44">Country</label>
// // //               {isEditing ? (
// // //                 <input
// // //                   type="text"
// // //                   name="country"
// // //                   value={userData.address?.country || ""}
// // //                   onChange={handleChange}
// // //                   className="regular-14 border p-0.5 px-2 w-full sm:w-2/3 rounded"
// // //                 />
// // //               ) : (
// // //                 <p className="mt-1">{userData.address?.country || "-"}</p>
// // //               )}
// // //             </div>
// // //           </div>

// // //           <button
// // //             onClick={() => {
// // //               if (isEditing) handleProfileUpdate();
// // //               else setIsEditing(true);
// // //             }}
// // //             className="mt-6 btn-secondary min-w-64"
// // //           >
// // //             {isEditing ? "Save Changes" : "Edit Profile"}
// // //           </button>
// // //         </div>
// // //       </div>
// // //     )
// // //   );
// // // };

// // // export default MyProfile;


// // import React, { useContext, useState, useRef, useEffect } from "react";
// // import { toast } from "react-toastify";
// // import upload_icon from "../assets/upload_icon.png";
// // import { AppContext } from "../context/AppContext";
// // import axios from "axios";

// // const MyProfile = () => {
// //   const { userData, setUserData, token, backendUrl, loadUserProfileData } =
// //     useContext(AppContext);

// //   const [isEditing, setIsEditing] = useState(false);
// //   const [selectedImage, setSelectedImage] = useState(false);
// //   const [showOptions, setShowOptions] = useState(false);
// //   const profileRef = useRef(null);

// //   const handleProfileUpdate = async () => {
// //     try {
// //       const formData = new FormData();
// //       formData.append("name", userData.name);
// //       formData.append("email", userData.email);
// //       formData.append("phone", userData.phone);
// //       formData.append("address", JSON.stringify(userData.address || {}));
// //       formData.append("gender", userData.gender);
// //       formData.append("dob", userData.dob);
// //       if (selectedImage) formData.append("image", selectedImage);

// //       const { data } = await axios.post(
// //         backendUrl + "/api/user/update-profile",
// //         formData,
// //         { headers: { token } }
// //       );

// //       if (data.success) {
// //         toast.success(data.message);
// //         await loadUserProfileData();
// //         setIsEditing(false);
// //         setSelectedImage(false);
// //       } else toast.error(data.message);
// //     } catch (error) {
// //       console.log(error);
// //       toast.error(error.message);
// //     }
// //   };

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     if (name === "city" || name === "country") {
// //       setUserData((prev) => ({
// //         ...prev,
// //         address: { ...prev.address, [name]: value },
// //       }));
// //     } else setUserData((prev) => ({ ...prev, [name]: value }));
// //   };

// //   // Click on option to close dropdown
// //   const handleOptionClick = (callback) => {
// //     if (callback) callback();
// //     setShowOptions(false);
// //   };

// //   // Click outside to close dropdown
// //   useEffect(() => {
// //     const handleClickOutside = (event) => {
// //       if (profileRef.current && !profileRef.current.contains(event.target)) {
// //         setShowOptions(false);
// //       }
// //     };
// //     document.addEventListener("mousedown", handleClickOutside);
// //     return () => document.removeEventListener("mousedown", handleClickOutside);
// //   }, []);

// //   return (
// //     userData && (
// //       <div className="px-4 max-padd-container py-28">
// //         <div className="w-full max-w-sm">
// //           <div
// //             className="relative flex flex-col items-start"
// //             ref={profileRef}
// //             onMouseEnter={() => setShowOptions(true)}
// //           >
// //             <div className="relative w-32 h-32">
// //               <img
// //                 src={
// //                   selectedImage
// //                     ? URL.createObjectURL(selectedImage)
// //                     : userData.image || upload_icon
// //                 }
// //                 alt="Profile"
// //                 className="object-cover w-32 h-32 rounded-md cursor-pointer"
// //               />

// //               {isEditing && (
// //                 <>
// //                   <label
// //                     htmlFor="image"
// //                     className="absolute inset-0 transition-opacity bg-black bg-opacity-50 rounded-md cursor-pointer flexCenter hover:opacity-80"
// //                   >
// //                     <span className="text-xs font-semibold text-white">
// //                       Upload
// //                     </span>
// //                   </label>
// //                   <input
// //                     type="file"
// //                     id="image"
// //                     accept="image/*"
// //                     hidden
// //                     onChange={(e) => setSelectedImage(e.target.files[0])}
// //                   />
// //                 </>
// //               )}
// //             </div>

// //             {/* Dropdown */}
// //             {showOptions && (
// //               <div className="absolute top-[8.5rem] left-0 bg-white shadow-lg border rounded-md w-40 py-2 z-50">
// //                 <button
// //                   onClick={() => handleOptionClick(() => setIsEditing(true))}
// //                   className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-100"
// //                 >
// //                   Edit Profile
// //                 </button>
// //                 <button
// //                   onClick={() => handleOptionClick(() => toast.info("Settings coming soon"))}
// //                   className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-100"
// //                 >
// //                   Settings
// //                 </button>
// //                 <button
// //                   onClick={() => handleOptionClick(() => toast.info("Logout action"))}
// //                   className="block w-full px-4 py-2 text-sm text-left text-red-500 hover:bg-gray-100"
// //                 >
// //                   Logout
// //                 </button>
// //               </div>
// //             )}

// //             <h2 className="mt-4 text-2xl font-bold">{userData.name}</h2>
// //             <p className="text-gray-500">{userData.email}</p>
// //           </div>

// //           {/* Rest of profile form & location details */}
// //           <hr className="my-3" />
// //           {/* ... baki code same thakbe ... */}
// //         </div>
// //       </div>
// //     )
// //   );
// // };

// // export default MyProfile;


// import React, { useContext, useState, useRef, useEffect } from "react";
// import { toast } from "react-toastify";
// import upload_icon from "../assets/upload_icon.png";
// import { AppContext } from "../context/AppContext";
// import axios from "axios";

// const MyProfile = () => {
//   const { userData, setUserData, token, backendUrl, loadUserProfileData } =
//     useContext(AppContext);

//   const [isEditing, setIsEditing] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(false);
//   const [showOptions, setShowOptions] = useState(false);

//   const handleProfileUpdate = async () => {
//     try {
//       const formData = new FormData();
//       formData.append("name", userData.name);
//       formData.append("email", userData.email);
//       formData.append("phone", userData.phone);
//       formData.append("address", JSON.stringify(userData.address || {}));
//       formData.append("gender", userData.gender);
//       formData.append("dob", userData.dob);
//       if (selectedImage) formData.append("image", selectedImage);

//       const { data } = await axios.post(
//         backendUrl + "/api/user/update-profile",
//         formData,
//         { headers: { token } }
//       );

//       if (data.success) {
//         toast.success(data.message);
//         await loadUserProfileData();
//         setIsEditing(false);
//         setSelectedImage(false);
//       } else toast.error(data.message);
//     } catch (error) {
//       console.log(error);
//       toast.error(error.message);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "city" || name === "country") {
//       setUserData((prev) => ({
//         ...prev,
//         address: { ...prev.address, [name]: value },
//       }));
//     } else setUserData((prev) => ({ ...prev, [name]: value }));
//   };

//   // 🟢 Show menu on hover
//   const handleMouseEnter = () => {
//     setShowOptions(true);
//   };

//   // 🟢 Close menu only when a button is clicked
//   const handleOptionClick = (callback) => {
//     if (callback) callback();
//     setShowOptions(false);
//   };

//   return (
//     userData && (
//       <div className="px-4 max-padd-container py-28">
//         <div className="w-full max-w-sm">
//           <div
//             className="relative flex flex-col items-start"
//             onMouseEnter={handleMouseEnter}
//           >
//             <div className="relative w-32 h-32">
//               <img
//                 src={
//                   selectedImage
//                     ? URL.createObjectURL(selectedImage)
//                     : userData.image || upload_icon
//                 }
//                 alt="Profile"
//                 className="object-cover w-32 h-32 rounded-md cursor-pointer"
//               />

//               {isEditing && (
//                 <>
//                   <label
//                     htmlFor="image"
//                     className="absolute inset-0 transition-opacity bg-black bg-opacity-50 rounded-md cursor-pointer flexCenter hover:opacity-80"
//                   >
//                     <span className="text-xs font-semibold text-white">
//                       Upload
//                     </span>
//                   </label>
//                   <input
//                     type="file"
//                     id="image"
//                     accept="image/*"
//                     hidden
//                     onChange={(e) => setSelectedImage(e.target.files[0])}
//                   />
//                 </>
//               )}
//             </div>

//             {/* 🟢 Hover Options under profile image */}
//             {showOptions && (
//               <div className="absolute top-[8.5rem] left-0 bg-white shadow-lg border rounded-md w-40 py-2 z-50">
//                 <button
//                   onClick={() => handleOptionClick(() => setIsEditing(true))}
//                   className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-100"
//                 >
//                   Edit Profile
//                 </button>
//                 <button
//                   onClick={() =>
//                     handleOptionClick(() =>
//                       toast.info("Settings coming soon")
//                     )
//                   }
//                   className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-100"
//                 >
//                   Settings
//                 </button>
//                 <button
//                   onClick={() =>
//                     handleOptionClick(() => toast.info("Logout action"))
//                   }
//                   className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-100"
//                 >
//                   Logout
//                 </button>
//               </div>
//             )}

//             <h2 className="mt-4 text-2xl font-bold">{userData.name}</h2>
//             <p className="text-gray-500">{userData.email}</p>
//           </div>

//           <hr className="my-3" />

//           {/* Personal Details */}
//           <h4 className="mb-3 text-gray-500 h4">Personal Details</h4>
//           <div className="space-y-4">
//             <div className="flex flex-col sm:flex-row sm:items-center space-3">
//               <label className="bold-14 min-w-44">Name</label>
//               {isEditing ? (
//                 <input
//                   type="text"
//                   name="name"
//                   value={userData.name}
//                   onChange={handleChange}
//                   className="regular-14 border p-0.5 px-2 w-full sm:w-2/3 rounded"
//                 />
//               ) : (
//                 <p className="mt-1">{userData.name}</p>
//               )}
//             </div>

//             <div className="flex flex-col sm:flex-row sm:items-center space-3">
//               <label className="bold-14 min-w-44">Phone</label>
//               {isEditing ? (
//                 <input
//                   type="text"
//                   name="phone"
//                   value={userData.phone}
//                   onChange={handleChange}
//                   className="regular-14 border p-0.5 px-2 w-full sm:w-2/3 rounded"
//                 />
//               ) : (
//                 <p className="mt-1">{userData.phone}</p>
//               )}
//             </div>

//             <div className="flex flex-col sm:flex-row sm:items-center space-3">
//               <label className="bold-14 min-w-44">Date of Birth</label>
//               {isEditing ? (
//                 <input
//                   type="date"
//                   name="dob"
//                   value={userData.dob}
//                   onChange={handleChange}
//                   className="regular-14 border p-0.5 px-2 w-full sm:w-2/3 rounded"
//                 />
//               ) : (
//                 <p className="mt-1">{userData.dob}</p>
//               )}
//             </div>

//             <div className="flex flex-col sm:flex-row sm:items-center space-3">
//               <label className="bold-14 min-w-44">Gender</label>
//               {isEditing ? (
//                 <select
//                   name="gender"
//                   value={userData.gender}
//                   onChange={handleChange}
//                   className="regular-14 border p-0.5 px-2 w-full sm:w-2/3 rounded"
//                 >
//                   <option value="Male">Male</option>
//                   <option value="Female">Female</option>
//                 </select>
//               ) : (
//                 <p className="mt-1">{userData.gender}</p>
//               )}
//             </div>
//           </div>

//           <hr className="my-3" />

//           {/* Location Details */}
//           <h4 className="my-3 text-gray-500 h4">Location Details</h4>
//           <div className="space-y-4">
//             <div className="flex flex-col sm:flex-row sm:items-center space-3">
//               <label className="bold-14 min-w-44">City</label>
//               {isEditing ? (
//                 <input
//                   type="text"
//                   name="city"
//                   value={userData.address?.city || ""}
//                   onChange={handleChange}
//                   className="regular-14 border p-0.5 px-2 w-full sm:w-2/3 rounded"
//                 />
//               ) : (
//                 <p className="mt-1">{userData.address?.city || "-"}</p>
//               )}
//             </div>

//             <div className="flex flex-col sm:flex-row sm:items-center space-3">
//               <label className="bold-14 min-w-44">Country</label>
//               {isEditing ? (
//                 <input
//                   type="text"
//                   name="country"
//                   value={userData.address?.country || ""}
//                   onChange={handleChange}
//                   className="regular-14 border p-0.5 px-2 w-full sm:w-2/3 rounded"
//                 />
//               ) : (
//                 <p className="mt-1">{userData.address?.country || "-"}</p>
//               )}
//             </div>
//           </div>

//           <button
//             onClick={() => {
//               if (isEditing) handleProfileUpdate();
//               else setIsEditing(true);
//             }}
//             className="mt-6 btn-secondary min-w-64"
//           >
//             {isEditing ? "Save Changes" : "Edit Profile"}
//           </button>
//         </div>
//       </div>
//     )
//   );
// };

// export default MyProfile;


import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import upload_icon from "../assets/upload_icon.png";
import { AppContext } from "../context/AppContext";
import axios from "axios";

const MyProfile = () => {
  const { userData, setUserData, token, backendUrl, loadUserProfileData } =
    useContext(AppContext);

  const [isEditing, setIsEditing] = useState(false);
  const [selectedImage, setSelectedImage] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const handleProfileUpdate = async () => {
    try {
      const formData = new FormData();
      formData.append("name", userData.name);
      formData.append("email", userData.email);
      formData.append("phone", userData.phone);
      formData.append("address", JSON.stringify(userData.address || {}));
      formData.append("gender", userData.gender);
      formData.append("dob", userData.dob);
      if (selectedImage) formData.append("image", selectedImage);

      const { data } = await axios.post(
        backendUrl + "/api/user/update-profile",
        formData,
        { headers: { token } }
      );

      if (data.success) {
        toast.success(data.message);
        await loadUserProfileData();
        setIsEditing(false);
        setSelectedImage(false);
      } else toast.error(data.message);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "city" || name === "country") {
      setUserData((prev) => ({
        ...prev,
        address: { ...prev.address, [name]: value },
      }));
    } else setUserData((prev) => ({ ...prev, [name]: value }));
  };

  // 🟢 Toggle menu on click
  const toggleOptions = () => {
    setShowOptions((prev) => !prev);
  };

  const handleOptionClick = (callback) => {
    if (callback) callback();
    setShowOptions(false); // close menu after click
  };

  return (
    userData && (
      <div className="px-4 max-padd-container py-28">
        <div className="w-full max-w-sm">
          <div className="relative flex flex-col items-start">
            <div className="relative w-32 h-32">
              <img
                src={
                  selectedImage
                    ? URL.createObjectURL(selectedImage)
                    : userData.image || upload_icon
                }
                alt="Profile"
                className="object-cover w-32 h-32 rounded-md cursor-pointer"
                onClick={toggleOptions} // click to open menu
              />

              {isEditing && (
                <>
                  <label
                    htmlFor="image"
                    className="absolute inset-0 transition-opacity bg-black bg-opacity-50 rounded-md cursor-pointer flexCenter hover:opacity-80"
                  >
                    <span className="text-xs font-semibold text-white">
                      Upload
                    </span>
                  </label>
                  <input
                    type="file"
                    id="image"
                    accept="image/*"
                    hidden
                    onChange={(e) => setSelectedImage(e.target.files[0])}
                  />
                </>
              )}
            </div>

            {/* 🟢 Click Options under profile image */}
            {showOptions && (
              <div className="absolute top-[7.5rem] left-[3rem] bg-white shadow-lg border rounded-md w-40 py-2 z-50">
                <button
                  onClick={() => handleOptionClick(() => setIsEditing(true))}
                  className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-100"
                >
                  Profile
                </button>
                <button
                  onClick={() =>
                    handleOptionClick(() =>
                      toast.info("My Session coming soon")
                    )
                  }
                  className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-100"
                >
                  My Session
                </button>
                <button
                  onClick={() =>
                    handleOptionClick(() => toast.info("Logout action"))
                  }
                  className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}

            <h2 className="mt-4 text-2xl font-bold">{userData.name}</h2>
            <p className="text-gray-500">{userData.email}</p>
          </div>

          <hr className="my-3" />

          {/* Personal Details */}
          <h4 className="mb-3 text-gray-500 h4">Personal Details</h4>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center space-3">
              <label className="bold-14 min-w-44">Name</label>
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={userData.name}
                  onChange={handleChange}
                  className="regular-14 border p-0.5 px-2 w-full sm:w-2/3 rounded"
                />
              ) : (
                <p className="mt-1">{userData.name}</p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center space-3">
              <label className="bold-14 min-w-44">Phone</label>
              {isEditing ? (
                <input
                  type="text"
                  name="phone"
                  value={userData.phone}
                  onChange={handleChange}
                  className="regular-14 border p-0.5 px-2 w-full sm:w-2/3 rounded"
                />
              ) : (
                <p className="mt-1">{userData.phone}</p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center space-3">
              <label className="bold-14 min-w-44">Date of Birth</label>
              {isEditing ? (
                <input
                  type="date"
                  name="dob"
                  value={userData.dob}
                  onChange={handleChange}
                  className="regular-14 border p-0.5 px-2 w-full sm:w-2/3 rounded"
                />
              ) : (
                <p className="mt-1">{userData.dob}</p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center space-3">
              <label className="bold-14 min-w-44">Gender</label>
              {isEditing ? (
                <select
                  name="gender"
                  value={userData.gender}
                  onChange={handleChange}
                  className="regular-14 border p-0.5 px-2 w-full sm:w-2/3 rounded"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              ) : (
                <p className="mt-1">{userData.gender}</p>
              )}
            </div>
          </div>

          <hr className="my-3" />

          {/* Location Details */}
          <h4 className="my-3 text-gray-500 h4">Location Details</h4>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center space-3">
              <label className="bold-14 min-w-44">City</label>
              {isEditing ? (
                <input
                  type="text"
                  name="city"
                  value={userData.address?.city || ""}
                  onChange={handleChange}
                  className="regular-14 border p-0.5 px-2 w-full sm:w-2/3 rounded"
                />
              ) : (
                <p className="mt-1">{userData.address?.city || "-"}</p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center space-3">
              <label className="bold-14 min-w-44">Country</label>
              {isEditing ? (
                <input
                  type="text"
                  name="country"
                  value={userData.address?.country || ""}
                  onChange={handleChange}
                  className="regular-14 border p-0.5 px-2 w-full sm:w-2/3 rounded"
                />
              ) : (
                <p className="mt-1">{userData.address?.country || "-"}</p>
              )}
            </div>
          </div>

          <button
            onClick={() => {
              if (isEditing) handleProfileUpdate();
              else setIsEditing(true);
            }}
            className="mt-6 btn-secondary min-w-64"
          >
            {isEditing ? "Save Changes" : "Edit Profile"}
          </button>
        </div>
      </div>
    )
  );
};

export default MyProfile;
