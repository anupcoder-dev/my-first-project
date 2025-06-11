import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';
import { Link } from 'react-router-dom';

const MainLayout = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <header className="p-4 flex justify-between items-center bg-white dark:bg-gray-800 shadow">
        <h1 className="text-xl font-bold">
          <Link to="/">DevHub</Link>
        </h1>
        <nav className="space-x-4">
          {!user ? (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          ) : (
            <>
              <span>{user.email}</span>
              <button onClick={() => dispatch(logout())} className="text-red-500">
                Logout
              </button>
            </>
          )}
        </nav>
      </header>
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;


