import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded shadow-md">
        <h1 className="text-4xl font-bold text-gray-800">404</h1>
        <p className="mt-2 text-lg text-gray-600">Page not found</p>
        <Link to="/" className="mt-4 text-indigo-600 hover:underline">
          Go back home
        </Link>
      </div>
    </div>
  );
};
export default NotFound;