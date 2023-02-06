import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';

function Layout() {

  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
