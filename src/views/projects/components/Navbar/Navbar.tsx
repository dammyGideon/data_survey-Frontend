import { NavProps } from '../../types/Navbar';
import './Navbar.css';
import hamburger from '../../../../assets/Burger.png';
import bell from '../../../../assets/Bell.png';
import help from '../../../../assets/ant-design_question-circle-outlined.png';

const Nav = ({ path }: NavProps) => {
  return (
    <nav className='nav'>
      <div className='logo'>
        <p className='nav-logo'>SURVEY</p>
        <img src={hamburger} alt='hamburger icon' className='nav-menu' />
        <p className='nav-path'>{path}</p>
      </div>
      <div>
        <img src={bell} alt='notification bell icon' className='nav-bell' />
        <img src={help} alt='notification bell icon' className='nav-help' />
        <div className='profile'>p</div>
      </div>
    </nav>
  );
};

export default Nav;
