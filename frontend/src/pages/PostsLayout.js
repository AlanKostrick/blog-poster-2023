import { Outlet } from 'react-router-dom';
import PostsNavigation from '../components/PostsNavigation';

const PostsLayout = () => (
    <>
        <PostsNavigation />
        <Outlet />
    </>
);

export default PostsLayout;