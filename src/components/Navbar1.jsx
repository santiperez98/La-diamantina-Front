import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <Link to="/" className="text-lg font-bold">
        La Diamantina
      </Link>
      <div>
        <Link to="/" className="mx-2">Home</Link>
        <Link to="/products" className="mx-2">Products</Link>
      </div>
    </nav>
  );
};

export default Navbar;
