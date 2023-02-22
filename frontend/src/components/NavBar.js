import { NavLink, useLocation } from 'react-router-dom';

import { LOGOUT } from './login-context/constants';
import { LoginContext } from './login-context/LoginContext';
import style from './NavBar.module.css';
import { useContext } from 'react';

const NavBar = () => {

  const { authSession, authDispatch } = useContext(LoginContext);
  const token = authSession && authSession.token;

  let location = useLocation().pathname;

  const logout = () => {
    authDispatch({
      type: LOGOUT
    });
  }

  return (
    <header className={style.header}>
      <nav>
        <ul className={style.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive && location === '/' ? style.active : undefined
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
                isActive && location === '/posts' ? style.active : undefined
              }
            >
              Posts
            </NavLink>
          </li>
          <li>
            {/* TODO: more efficient way to unpack and validate token data */}
            {token !== 'undefined' && token !== undefined && (token && token.length > 0) ?
              < NavLink
                to=""
                onClick={() => logout()}
              >
                Sign Out
              </NavLink> :
              <NavLink
                to="/auth?mode=login"
                className={({ isActive }) =>
                  isActive && location === '/auth' ? style.active : undefined
                }
              >
                Sign In
              </NavLink>
            }
          </li>
        </ul>
      </nav>
    </header >
  );
}

export default NavBar;
