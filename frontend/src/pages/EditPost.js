import PostForm from '../components/PostForm';
import { useRouteLoaderData } from 'react-router-dom';

function EditPostPage() {
    const data = useRouteLoaderData('post-detail');

    return <PostForm method="patch" post={data.post} />;
}

export default EditPostPage;
