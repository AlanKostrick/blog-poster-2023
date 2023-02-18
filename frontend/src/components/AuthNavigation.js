import { Link, useSearchParams } from 'react-router-dom';

import style from './SubNavigation.module.css';

const AuthNavigation = () => {

    const [searchParams] = useSearchParams();
    const isLogin = searchParams.get('mode') === 'login';

    return (
        <header className={style.header}>
            <nav>
                <ul className={style.list}>
                    <li>
                        <Link className={isLogin ? style.active : undefined}
                            to={`?mode=login`}>
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link className={!isLogin ? style.active : undefined}
                            to={`?mode=signup`}>
                            Signup
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default AuthNavigation;