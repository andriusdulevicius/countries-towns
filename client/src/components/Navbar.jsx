import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar__content container'>
        <Link to='/' className='nav-logo nav-link'>
          My<strong>Logo</strong>
        </Link>
        <div className='nav-links'>
          <Link className='nav-link' to='/'>
            All Places
          </Link>
          <Link className='nav-link' to='/createNewPlace'>
            Create New Place
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
