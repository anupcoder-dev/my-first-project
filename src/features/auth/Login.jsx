// import { useDispatch } from 'react-redux';
// import { login } from '../features/auth/authSlice';
// import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';

// const Login = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [form, setForm] = useState({ email: '', password: '' });

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(login({ email: form.email }));
//     navigate('/');
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10">
//       <h2 className="text-2xl font-bold mb-4">Login</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           name="email"
//           type="email"
//           placeholder="Email"
//           value={form.email}
//           onChange={handleChange}
//           className="w-full px-4 py-2 border rounded"
//           required
//         />
//         <input
//           name="password"
//           type="password"
//           placeholder="Password"
//           value={form.password}
//           onChange={handleChange}
//           className="w-full px-4 py-2 border rounded"
//           required
//         />
//         <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;

import { useState } from 'react';
import { loginAPI } from './authAPI';
import { useDispatch } from 'react-redux';
import { loginSuccess } from './AuthSlice';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginAPI(form);
      dispatch(loginSuccess(res));
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-sm mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && <p className="text-red-500">{error}</p>}
        <input name="email" onChange={handleChange} value={form.email} className="w-full border p-2" placeholder="Email" />
        <input type="password" name="password" onChange={handleChange} value={form.password} className="w-full border p-2" placeholder="Password" />
        <button type="submit" className="w-full bg-blue-600 text-white p-2">Login</button>
      </form>
    </div>
  );
}