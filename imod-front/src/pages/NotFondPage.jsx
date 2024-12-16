import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-lg mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-md shadow hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none transition"
      >
        Go back to Home
      </Link>
    </div>
  );
}

export default NotFoundPage;
