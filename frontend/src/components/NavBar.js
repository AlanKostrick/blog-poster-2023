import { NavLink } from 'react-router-dom';
import style from './NavBar.module.css';

const NavBar = () => (
  <header className={style.header}>
    <nav>
      <ul className={style.list}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? style.active : undefined
            }
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/posts"
            className={({ isActive }) =>
              isActive ? style.active : undefined
            }
          >
            Posts
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/auth?mode=login"
            className={({ isActive }) =>
              isActive ? style.active : undefined
            }
          >
            Sign In
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default NavBar;
