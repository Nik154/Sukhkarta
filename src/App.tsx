// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Sidebar from './components/Sidebar';
// import AboutUs from './pages/AboutUs';
// import Artificial from './pages/Artificial';
// import Trading from './pages/Trading';
// import HrConsultancy from './pages/HrConsultancy';
// import AdminLogin from './pages/AdminLogin';

// export default function App() {
//   return (
//     <Router>
//       <div className="flex min-h-screen">
//         <Sidebar />
//         <div className="flex-1 p-6">
//           <Routes>
//             <Route path="/" element={<AboutUs />} />
//             <Route path="/artificial" element={<Artificial />} />
//             <Route path="/trading" element={<Trading />} />
//             <Route path="/hrconsultancy" element={<HrConsultancy />} />
//             <Route path="/exfg13t515/admin" element={<AdminLogin />} />
//             <Route path="*" element={<Navigate to='/' replace />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// import { Routes, Route } from "react-router-dom";
// import AdminLogin from "./pages/AdminLogin";
// import AdminHome from "./pages/AdminHome";
// import EditPage from "./pages/EditPage";
// import AdminLayout from "./layouts/AdminLayout";

// export default function App() {
//   return (
//     <Routes>
//       {/* Admin Login */}
//       <Route path="/exfg13t515/admin" element={<AdminLogin />} />

//       {/* Admin protected layout (sidebar inside this only) */}
//       <Route path="/admin" element={<AdminLayout />}>
//         <Route path="dashboard" element={<AdminHome />} />
//         <Route path=":section" element={<EditPage />} />
//       </Route>

//       {/* Public Pages */}
//       <Route path="/trading" element={<div>Trading Public Page</div>} />
//       <Route path="/about" element={<div>About Page</div>} />
//       <Route path="/hrconsultancy" element={<div>HR Page</div>} />
//       <Route path="/artificial" element={<div>AI Page</div>} />
//       <Route path="/" element={<div>Welcome to Website</div>} />
//     </Routes>
//   );
// }

import { Routes, Route } from "react-router-dom";
import GlobalLayout from "./layouts/GlobalLayout";
import AdminLogin from "./pages/AdminLogin";
import AdminHome from "./pages/AdminHome";
// import EditPage from "./pages/EditPage";
import AboutUs from "./pages/AboutUs";
import Artificial from "./pages/Artificial";
import Trading from "./pages/Trading";
import HrConsultancy from "./pages/HrConsultancy";

export default function App() {
  return (
    <Routes>

      {/* LOGIN PAGE - NO SIDEBAR */}
      <Route path="/exfg13t515/admin/login" element={<AdminLogin />} />
      <Route path="admin/dashboard" element={<AdminHome />} />
        {/* <Route path="admin/about" element={<EditPage section="about" />} />
        <Route path="admin/artificial" element={<EditPage section="artificial" />} />
        <Route path="admin/trading" element={<EditPage section="trading" />} /> */}
        {/* <Route path="admin/hr" element={<EditPage section="hr" />} /> */}

      {/* ALL PAGES WITH SIDEBAR */}
      <Route path="/" element={<GlobalLayout />}>

        {/* PUBLIC PAGES */}
        <Route index element=<AboutUs/> />
        <Route path="about" element= <AboutUs/> />
        <Route path="artificial" element= <Artificial/> />
        <Route path="trading" element=<Trading/> />
        <Route path="hrconsultancy" element=<HrConsultancy/> />

      </Route>

    </Routes>
  );
}

