// // import { ToastContainer } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';
// // import Header from './components/Header';
// // import { Route, Routes } from "react-router-dom"
// // import Home from './pages/Home';
// // import Tutors from './pages/Tutors';
// // import Login from './pages/Login';
// // import MyProfile from './pages/MyProfile';
// // import Blog from './pages/Blog';
// // import Session from './pages/Session';
// // import MySessions from './pages/MySessions';
// // import Footer from './components/Footer';
// // import Contact from './pages/Contact';
// // import Verify from './pages/Verify';

// // export default function App() {
// //   return (
// //     <main className='overflow-hidden bg-light text-teritary'>
// //       <ToastContainer 
// //       position="bottom-right"
// //       />
// //       <Header />
// //       <Routes>
// //         <Route path='/' element={<Home />}/>
// //         <Route path='/tutors' element={<Tutors />}/>
// //         <Route path='/tutors/:subject' element={<Tutors />}/>
// //         <Route path='/login' element={<Login />}/>
// //         <Route path='/blog' element={<Blog />}/>
// //         <Route path='/contact' element={<Contact />}/>
// //         <Route path='/my-profile' element={<MyProfile />}/>
// //         <Route path='/my-sessions' element={<MySessions />}/>
// //         <Route path="/session/:tutId" element={<Session />}/>
// //         <Route path="/verify" element={<Verify />}/>
// //       </Routes>
// //       <Footer />
// //     </main>
// //   )
// // }
// // src/App.jsx


// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Header from './components/Header';
// import { Route, Routes } from "react-router-dom";
// import Home from './pages/Home';
// import Tutors from './pages/Tutors';
// import Login from './pages/Login';
// import MyProfile from './pages/MyProfile';
// import Blog from './pages/Blog';
// import Session from './pages/Session';
// import MySessions from './pages/MySessions';
// import Footer from './components/Footer';
// import Contact from './pages/Contact';
// import Verify from './pages/Verify';
// import AboutUs from './components/AboutUs';  // Importing AboutUs component

// export default function App() {
//   return (
//     <main className='overflow-hidden bg-light text-teritary'>
//       <ToastContainer position="bottom-right" />
//       <Header />
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/tutors' element={<Tutors />} />
//         <Route path='/tutors/:subject' element={<Tutors />} />
//         <Route path='/login' element={<Login />} />
//         <Route path='/blog' element={<Blog />} />
//         <Route path='/contact' element={<Contact />} />
//         <Route path='/my-profile' element={<MyProfile />} />
//         <Route path='/my-sessions' element={<MySessions />} />
//         <Route path="/session/:tutId" element={<Session />} />
//         <Route path="/verify" element={<Verify />} />
//         <Route path="/about-us" element={<AboutUs />} />  {/* Added AboutUs route */}
//       </Routes>
//       <Footer />
//     </main>
//   )
// }


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Tutors from './pages/Tutors';
import Login from './pages/Login';
import MyProfile from './pages/MyProfile';
import Blog from './pages/Blog';
import Session from './pages/Session';
import MySessions from './pages/MySessions';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Verify from './pages/Verify';
import AboutUs from './components/AboutUs';
import HealthCare from './pages/HealthCare';  // Import service pages
import FoodDistribution from './pages/FoodDistribution';
import EducationSupport from './pages/EducationSupport';
import MedicineVaccine from './pages/MedicineVaccine';
import BloodDonation from './pages/BloodDonation';
import CleanWater from './pages/CleanWater';

export default function App() {
  return (
    <main className='overflow-hidden bg-light text-tertiary'>
      <ToastContainer position="bottom-right" />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tutors' element={<Tutors />} />
        <Route path='/tutors/:subject' element={<Tutors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/my-sessions' element={<MySessions />} />
        <Route path="/session/:tutId" element={<Session />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/about-us" element={<AboutUs />} />
        {/* Services routes */}
        <Route path="/services/health-care" element={<HealthCare />} />
        <Route path="/services/food-distribution" element={<FoodDistribution />} />
        <Route path="/services/education-support" element={<EducationSupport />} />
        <Route path="/services/medicine-vaccine" element={<MedicineVaccine />} />
        <Route path="/services/blood-donation" element={<BloodDonation />} />
        <Route path="/services/clean-water" element={<CleanWater />} />
      </Routes>
      <Footer />
    </main>
  );
}
