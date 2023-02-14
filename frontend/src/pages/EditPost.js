import PostForm from '../components/PostForm';
import { useRouteLoaderData } from 'react-router-dom';

const EditPostPage = () => {
    const data = useRouteLoaderData('post-detail');

    return <PostForm method="patch" post={data.post} />;
}

export default EditPostPage;
