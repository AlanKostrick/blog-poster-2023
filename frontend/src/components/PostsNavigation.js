import { NavLink } from 'react-router-dom';
import style from './PostsNavigation.module.css';

const PostsNavigation = () => (
    <header className={style.header}>
        <nav>
            <ul className={style.list}>
                <li>
                    <NavLink
                        to="/posts"
                        className={({ isActive }) =>
                            isActive ? style.active : undefined
                        }
                        end
                    >
                        All Posts
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/posts/new"
                        className={({ isActive }) =>
                            isActive ? style.active : undefined
                        }
                    >
                        New Post
                    </NavLink>
                </li>
            </ul>
        </nav>
    </header>
);

export default PostsNavigation;