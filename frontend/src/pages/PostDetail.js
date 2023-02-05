import {
    Await,
    defer,
    json,
    redirect,
    useRouteLoaderData,
} from 'react-router-dom';

import PostItem from '../components/PostItem';
import { Suspense } from 'react';
import { getAuthToken } from '../util/auth';

function PostDetailPage() {
    const { post } = useRouteLoaderData('post-detail');

    return (
        <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
            <Await resolve={post}>
                {(loadedPost) => <PostItem post={loadedPost} />}
            </Await>
        </Suspense>
    );
}

export default PostDetailPage;

async function loadPost(id) {
    const response = await fetch('http://localhost:8080/posts/' + id);

    if (!response.ok) {
        throw json(
            { message: 'Could not fetch details for selected post.' },
            {
                status: 500,
            }
        );
    } else {
        const resData = await response.json();
        return resData.post;
    }
}


export async function loader({ request, params }) {
    const id = params.postId;

    return defer({
        post: await loadPost(id),
    });
}

export async function action({ params, request }) {
    const postId = params.postId;
    const token = getAuthToken();

    const response = await fetch('http://localhost:8080/posts/' + postId, {
        method: request.method,
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });

    if (!response.ok) {
        throw json(
            { message: 'Could not delete post.' },
            {
                status: 500,
            }
        );
    }
    return redirect('/posts');
}
