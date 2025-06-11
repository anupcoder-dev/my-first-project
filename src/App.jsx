// // export default function App() {
// //   return (
// //     <div className="text-3xl font-bold text-red-600 p-4">
// //       Tailwind is working! 🚀
// //     </div>
// //   );
// // }

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import MainLayout from './layouts/MainLayout';
// import Home from './pages/Home';
// import Login from './features/auth/Login';
// import Register from './features/auth/Register';
// import BlogDetails from './pages/BlogDetails';
// import DeveloperProfile from './pages/DeveloperProfile';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<MainLayout />}>
//           <Route index element={<Home />} />
//           <Route path="login" element={<Login />} />
//           <Route path="register" element={<Register />} />
//           <Route path="blogs/:id" element={<BlogDetails />} />
//           <Route path="developers/:id" element={<DeveloperProfile />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// src/App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;