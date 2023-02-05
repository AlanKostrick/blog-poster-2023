import { Outlet } from 'react-router-dom';
import PostsNavigation from '../components/PostsNavigation';

function PostsRootLayout() {
    return (
        <>
            <PostsNavigation />
            <Outlet />
        </>
    );
}

export default PostsRootLayout;