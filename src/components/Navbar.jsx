import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <h2>Momo Tomato</h2>
      <div>
        <Link to="/">Home</Link>{' '}
        <Link to="/menu">Menu</Link>{' '}
        <Link to="/about">About</Link>{' '}
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;